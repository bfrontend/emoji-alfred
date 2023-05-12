const emojis = require('./emojis.json')
const arg = process.argv.slice(2)
console.log(JSON.stringify({
  items: emojis.map(item => {
    return {
      title: item.title,
      icon: {
        type: 'image',
        path: item.path
      },
      arg: `${item.icon} ${item.type}:${arg}`
    }
  })
}))