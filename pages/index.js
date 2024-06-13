import Link from "next/link";
import A from "../components/A";
const Index = () => {
    return (
        <div>
            <div className="navbar">
                <A href={'/'} text={'Home'}/>
                <A href={'/users'} text={'Users'}/>

            </div>
            <p>Main page</p>
            <style jsx>
                { `
                    .navbar {
                        background-color: orange;
                        padding: 15px;
                        display: flex;
                    }
                    .link {
                        text-decoration: none;
                        color: white;
                        font-size: 20px;
                        margin:20px;
                    }
                ` }
            </style>
        </div>
    );
}
export default Index;