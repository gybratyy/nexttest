import {useRouter} from "next/router";

export default function (user){
    const {query} = useRouter();

    return(
        <div>
            <h1>user with id of {query.id}</h1>
            <div>User name: {user.name}</div>
        </div>
    )
}

export async function getServerSideProps(params){
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await response.json();
    return {
        props:{user}
    }
}