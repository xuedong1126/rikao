module.exports={
    devServer:{
        before:(app)=>{
            app.get('/list',(req,res)=>{
                res.send(require('./src/mock/data.json'))
            })
        }
    }
}