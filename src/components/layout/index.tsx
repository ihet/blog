import * as React from "react";
import "./layout.scss";
import {createMuiTheme,MuiThemeProvider,Grid,Hidden} from "@material-ui/core"

interface ILayoutProps {
    left:React.ReactNode,
    right:React.ReactNode
}
let theme = createMuiTheme({
    palette:{
        primary:{
            main:"#efefef",
            dark:"#000000",
            light:"#ffffff",
            contrastText:"#000000"
        },
        secondary:{
            main:"#ff6600",
            contrastText:"#ffffff"
        }
    },
    overrides:{
        MuiTypography:{
            h3:{
                color:"#000000",
                fontSize:"16px",
                fontWeight:"normal"
            },
            body1:{
                color:"#000000",
                fontSize:"14px"
            },
            body2:{
                color:"#999999",
                fontSize:"12px"
            }
        }
    }
});

export class Layout extends React.Component<ILayoutProps,any>{
    constructor(props:ILayoutProps){
        super(props);
    }
    render(){
        return(
            <MuiThemeProvider theme={theme}>
                <Grid container className={"layout"} alignContent={"stretch"} spacing={0} wrap={"nowrap"}>
                    <Hidden smDown>
                        <Grid container item className={"layout-left"} xs={"auto"}>
                            {this.props.left}
                        </Grid>
                    </Hidden>
                    <Grid container item className={"layout-right"} xs={12}>
                        {this.props.right}
                    </Grid>
                </Grid>
            </MuiThemeProvider>
        );
    }
}