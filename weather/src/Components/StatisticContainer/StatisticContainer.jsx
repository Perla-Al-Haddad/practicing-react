import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid } from "@mui/material";
import React from "react";

const StatisticContainer = props => {

    return (
        <Grid item xs={6} md={6} lg={3}>
            <h5 style={{ margin: 0 }}>
                {props.title}
            </h5>
            <h1 style={{ fontWeight: 700, margin: 0 }}>
                {props.value}
            </h1>
            <h6 style={{ margin: 0, color: '#8898AA'}}>
                <span style={{ paddingRight: 15 }}>{props.year}</span>
                <FontAwesomeIcon icon={props.icon} />
            </h6>
        </Grid>
    )

}

export default StatisticContainer;