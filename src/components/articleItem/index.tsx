import * as React from "react";
import {Grid,Typography,Button,Divider,Paper} from "@material-ui/core";
import Link from "@material-ui/core/Link";
import Fecha from "fecha";
import {HTMLAttributes} from "react";
import "./articleItem.scss";


export interface IArticleProps<T> extends HTMLAttributes<T>{
    heading:String,
    time:Date,
    content:String,
    link:String,
    tags?:Array<String>,
    thumbs?:Array<String>,
    bigImage?:String
}

export default class ArticleItem<P,S> extends React.Component<IArticleProps<HTMLElement>,S>{
    public tags:Array<React.ReactNode>;
    constructor(props:IArticleProps<HTMLElement>){
        super(props);
        this.tags = this.props.tags.map((tag)=>{
            return <Link className={"MuiLink_articleItem_tag"} key ={tag as React.ReactText} >{tag}</Link>
        });
    }
    render(){
        return(
            <div className={"MuiDiv_articleItem"}>
                <Grid container justify={"space-between"} alignItems={"center"} wrap={"nowrap"} spacing={0} zeroMinWidth className={"MuiGrid_articleItem_head"}>
                    <Typography component={"h3"} variant={"h3"} noWrap >
                        {this.props.heading}
                    </Typography>
                    <Typography className={"MuiTypography_articleItem_time"} variant={"body2"} align={"right"}>
                        {/*发布时间*/}
                        发布于：{Fecha.format(this.props.time,"YYYY-MM-DD hh:mm:ss")}
                    </Typography>
                </Grid>
                <Divider/>
                <Grid container>
                    <Grid item className={"MuiGrid_articleItem_content"}>
                        <Typography variant={"body2"}>
                            {/*文章摘要*/}
                            {this.props.content}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container justify={"space-between"} className={"MuiGrid_articleItem_actions"}>
                    <Link className={"MuiGrid_articleItem_more"}>
                        查看全文
                    </Link>
                    <Grid xs={"auto"} item container spacing={8}>
                        {/*标签列表*/}
                        {this.tags}
                    </Grid>
                </Grid>
            </div>
        );
    }
}