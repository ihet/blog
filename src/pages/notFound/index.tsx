import * as React from "react";
import {Layout} from "../../components/layout";
import {Typography,Grid} from "@material-ui/core";
import "./notFound.scss";

export class Empty extends React.Component{
    render(): React.ReactNode {
        return(
            <Grid container alignItems={"center"} justify={"center"} className={"MuiGrid-404"}>
                <Grid item>
                    <Typography variant={"body1"} align={"center"}>
                        页面未找到
                    </Typography>
                </Grid>
            </Grid>
        );
    }
}

export default class NotFound extends React.Component{
    constructor(props){
        super(props);
    }
    render():React.ReactNode{
        return(
            <Layout left={<div></div>} right={<Empty/>}/>
        )
    }
}