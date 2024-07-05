import { envs } from "./config/envs"
import { AppRoutes } from "./presentation/routes"
import { Server } from "./presentation/server"

(() => {
    Main()
})()



async function Main() {
    // todo: await base de datos
    

    //todo: inicio de servidor
    new Server({
        port : envs.PORT,
        routes: AppRoutes.routes
}).start()
}