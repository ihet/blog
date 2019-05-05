import * as React from "react";
import ArticleFilter from "../articleFilter"
import ArticleItem from "../articleItem";
import {Grid} from "@material-ui/core";

export default class Article extends React.Component{
    render(){
        return (
            <Grid container  className={"CMP-articleList"} spacing={24} direction={"column"} alignItems={"flex-start"}>
                <Grid item container spacing={24}>
                    <ArticleFilter/>
                </Grid>
                <Grid item container spacing={24} direction={"column"}>
                    <Grid item xs={12}>
                        <ArticleItem
                            heading={"文章标题文章标题文章标题文章标题文章标题文章标题文章标题"}
                            time={new Date()}
                            link={"#"}
                            content={"1. Docker 与虚拟化在没有 Docker 的时代，我们会使用硬件虚拟化（虚拟机）以提供隔离。这里，虚拟机通过在操作系统上建立了一个中间虚拟软件层 Hypervisor ，并利用物理机器的资源虚拟出多个虚拟硬件环境来共享宿主机的资源，其中的应用运行在虚拟机内核上。但是，虚拟机对硬件的利用率存在瓶颈，因为虚拟机很难根据当前业务量动态调整其占用的硬件资源，因此容器化技术得以流行。其中，Docker 是一个开源的应用容器引擎，让开发者可以打包他们的应用以及依赖包到一个可移植的容器中，然后发布到任何流行的 Linux 机器上。\n" +
                            "Docker 容器不使用硬件虚拟化，它的守护进程是宿主机上的一个进程，换句话说，应用直接运行在宿主机内核上。因为容器中运行的程序和计算机的操作系统之间没有额外的中间层，没有资源被冗余软件的运行或虚拟硬件的模拟而浪费掉。\n" +
                            "Docker 的优势不仅如此，我们来比较一番。"}
                            tags={["React","前端"]}
                        >
                        </ArticleItem>
                    </Grid>

                </Grid>
            </Grid>
        );
    }
}