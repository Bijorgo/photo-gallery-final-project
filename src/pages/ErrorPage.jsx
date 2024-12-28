import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom"

export default function ErrorPage(){
    const error = useRouteError();
    console.log(error);
    return(
        <div>
            <h1>Ruh roh, something went wrong!</h1>
            <Link href="/"> HOME </Link>
        </div>
    )
}