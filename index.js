const express = require('express')
 const app = express()

 const ejs = require('ejs')
 app.set('view engine', 'ejs')

app.use(express.urlencoded({extended:true}))
let todoarray = []
app.get('/', (req,res)=>{
res.render('todo', {todoarray})

})

app.post('/addtodo', (req,res)=>{
  todoarray.push(req.body)
  console.log(req.body);
  res.redirect('/')
})
app.post('/delete/:index', (req,res)=>{
let {index} = req.params
todoarray.splice(index,1)
res.redirect("/")
})
app.get('/edit/:index',(req,res)=>{
   const {index} = req.params
   let edittodo = todoarray[index]
  console.log(edittodo);
  res.render('edit',{ edittodo , index})
})

app.post('/updatetodo/:index', (req,res)=>{
   console.log(req.params);
   const {index} = req.params
   todoarray[index] = req.body
   res.redirect('/')
})
































































 const port = 1998
 app.listen(port,() =>{
    console.log(`This port is working number ${port}`);
 })