import * as React from "react";
import {Layout} from "../../components/layout";
import Article from "../../components/articleList";


export default class Welcome extends React.Component{
    render(): React.ReactNode {

        return (
            <Layout left={<div/>} right={<Article/>}/>
        )
    }
}