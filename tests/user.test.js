const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')
const { userOneId, userOne, setUpDatabase } = require('./fixtures/db')

beforeEach(setUpDatabase)

test('Should sign up a new user', async() => {
    const response = await request(app).post('/users').send({
        name: 'Devni Heraliyawala',
        email: 'devniindula@gmail.com',
        password: 'Abcd@1234'
    }).expect(201)

    //Assert that the database was changed correctly
    const user = await User.findById(response.body.user._id)
    expect(user).not.toBeNull()

    //Assertions about the response
    expect(response.body).toMatchObject({
        user: {
            name: 'Devni Heraliyawala',
            email: 'devniindula@gmail.com',
        },
        token: user.tokens[0].token
    })

    //Check password for hashing
    expect(user.password).not.toBe('Abcd@1234')
})

test('Should login an existing user', async() => {
    const response = await request(app).post('/users/login').send({
        email: userOne.email,
        password: userOne.password
    }).expect(200)

    //Assert that the database was changed correctly.
    const user = await User.findById(userOneId)
    expect(user).not.toBeNull()

    //Check for the second auth token (NOTE: first one was generated in the beforeEach user insert)
    expect(response.body.token).toBe(user.tokens[1].token)

})

test('Should not login non-existent user', async() => {
    await request(app).post('/users/login').send({
        email: userOne.email,
        password: 'abc@123s'
    }).expect(400)
})

test('Should get profile for user', async() => {
    await request(app)
        .get('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200)
})

test('Should not get profile for unauthenticated user', async() => {
    await request(app)
        .get('/users/me')
        .send()
        .expect(401)
})

test('Should delete account for user', async() => {
    const response = await request(app)
        .delete('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200)

    const user = await User.findById(userOneId)
    expect(user).toBeNull()

})

test('Should not delete account for unauthenticated user', async() => {
    await request(app)
        .delete('/users/me')
        .send()
        .expect(401)
})

test('Should upload avatar image', async() => {
    await request(app)
        .post('/users/me/avatar')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .attach('avatar', 'tests/fixtures/profile-pic.jpg')
        .expect(200)

    const user = await User.findById(userOneId)

    expect(user.avatar).toEqual(expect.any(Buffer))

})


test('Should update valid user field', async() => {
    const response = await request(app)
        .patch('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
            name: 'Shavindra Nayanidu Manathunga'
        })
        .expect(200)

    const user = await User.findById(userOneId)
    expect(user.name).toEqual('Shavindra Nayanidu Manathunga')
        // expect(user.name).toEqual(response.body.name)
})


test('Should not update invalid user field', async() => {
    const response = await request(app)
        .patch('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
            location: 'Anuradhapura'
        })
        .expect(400)
})