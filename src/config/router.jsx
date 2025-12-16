import  {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import PostData from "../pages/AddData";

function AppRouter(){

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element  = {<Home/>}  />
                <Route path="/shop" element  = {<Shop/>}  />
                <Route path="/postdata" element  = {<PostData/>}  />

            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;
