class API {
    static getAllData(){
        return new Promise((resolve, reject)=>{
            fetch('https://raw.githubusercontent.com/dejandurlevic/data.json/main/data.json')
            .then(res => res.json())
            .then(data => resolve(data))
            
        })
    }
}