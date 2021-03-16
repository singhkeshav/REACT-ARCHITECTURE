export default function swDev(){
    const swFile = `${process.env.PUBLIC_URL}/sw.js`
    navigator.serviceWorker.register(swFile).then(resp=>{
    }).catch(ex=>{
        console.error(ex)
    })
}