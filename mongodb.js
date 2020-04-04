// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

// const id = new ObjectID()

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'


MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database...')
    }

    const db = client.db(databaseName)

    // db.collection('users').deleteMany({
    //     age: 28
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })


    // db.collection('tasks').deleteOne({
    //     description: '2L water to detox'
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })


    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').updateOne({ _id: new ObjectID("5e84cc696ce02019f17daa3d") }, {
    //     $inc: {
    //         age: 3
    //     }
    // }).then((resolve) => {
    //     console.log(resolve)
    // }).catch((reject) => {
    //     console.log(reject)
    // })



    // db.collection('tasks').findOne({ _id: new ObjectID("5e84d25cc70570108947d3bf") }, (error, task) => {
    //     console.log(task)
    // })


    // db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
    //     console.log(tasks)
    // })







    // db.collection('users').findOne({ _id: new ObjectID("5e84d795a01f3410354ec504") }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to find')
    //     }

    //     console.log(user)
    // })



    // db.collection('users').find({ age: 28 }).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('users').find({ age: 28 }).count((error, count) => {
    //     console.log(count)
    // })



    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Umidu Silva',
    //     age: 28
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })


    // db.collection('users').insertMany([{
    //         name: 'Dinadi Akithya',
    //         age: 15
    //     },
    //     {
    //         name: 'Dulmi Sandeepani',
    //         age: 28
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert users')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([{
    //         description: 'Do latin zumba exercise 1h',
    //         completed: true
    //     },
    //     {
    //         description: 'Body shop skin care routine',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert tasks')
    //     }
    //     console.log(result.ops)
    // })

})