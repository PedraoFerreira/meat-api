export class Server {
    initRoutes(): Promise<any>{
        return new Promise((resolve, reject)=>{
            try{

            }catch{
                
            }
        })
    }

    bootstrap(): Promise<Server>{
        return this.initRoutes().then(()=> this)
    }
}