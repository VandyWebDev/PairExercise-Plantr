const {db, Vegetable, Plot, Gardener} = require('./model')
//
const vegetableData = [
  {name: "carrot",color: "orange"},
  {name: "eggplant",color: "purple"},
  {name: "tomato",color: "red"},
  {name: "brocoli",color: "green"},
  {name: "onion",color: "pink"},
  {name: "garlic",color: "white"}
];

db.sync({force:true})
.then(()=> {
  console.log('Database synced!');
  return Promise.all([
    Vegetable.bulkcreate(vegetableData, {returning: true}),Plot.bulkcreate(plotData, {returning: true}),    Gardener.bulkcreate(gardenerData, {returning: true})
  ]);
}).then((promiseForAllModels) => {
  //let [vegetable, plot, gardner] = [promiseForAllModels]
})
.catch(err => {
  console.log(err)
})
.finally(()=>{
  db.close()
})
