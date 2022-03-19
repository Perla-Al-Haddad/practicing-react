import { Grid } from "@mui/material";
import React from "react";

const StatisticContainer = props => {

    return (
        <Grid item xs={6} md={6} lg={6} className={props.className}>
            <h5 style={{ margin: 0 }}>
                {props.title}
            </h5>
            <h1 style={{ fontWeight: 700, margin: 0 }}>
                {props.value}
            </h1>
            <h6 style={{ margin: 0, color: '#8898AA' }}>
                {props.year}
            </h6>
        </Grid>
    )

}

export default StatisticContainer;