require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5e885644a7ce874f4885ba10').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((documentCount) => {
//     console.log('Incompleted tasks count : ', documentCount)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async(id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return { task, count }
}

deleteTaskAndCount('5e88ba4ca276f8f62933a38e').then(({ task, count }) => {
    console.log('Deleted task : ', task)
    console.log('Incompleted task count : ', count)
}).catch((e) => {
    console.log(e)
})