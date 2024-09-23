import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from  "./Header"
import Footer from "./Footer"
import { ReactNode } from "react";


const name  = "Tsuneyoshi";
export const siteTite = "HashCat Blog";

interface LayoutPropos {
    children:ReactNode;
}


export default function layout({children}:LayoutPropos) {
    return (
        <div>
            <Head>
                <title>My Next.js App</title>
                <meta name="description" content="Welcome to My Blog"/>
            </Head>

            <Header />
            <main>{children}</main>
            <Footer />
        </div>


    )
}
