require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('5e862cff515d580d29354f7c', { age: 28 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 28 })
// }).then((result) => {
//     console.log('document count : ', result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAndAgeCount = async(id, age) => {

    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })

    return { user, count }
}

updateAndAgeCount('5e881afa71205827e08498b1', 25).then(({ user, count }) => {
    console.log('Updated user : ', user)
    console.log('Document count : ', count)
}).catch((e) => {
    console.log(e)
})