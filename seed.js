const db = require('./model')

db.sync({force:true})
.then(()=> {
  console.log('Database synced!')
})
.catch(err => {
  console.log(err)
})
.finally(()=>{
  db.close()
})
