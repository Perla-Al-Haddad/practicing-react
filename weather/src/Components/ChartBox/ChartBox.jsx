import { faEllipsisH, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faInfoCircle, faEllipsisH);

const ChartBox = props => {
    return (
        <Paper
            sx={{
                display: 'flex',
                flexDirection: 'column',
                p: 3
            }}
            className={"container__paper"}
        >
            <Grid container>
                <Grid item sx={{ flexGrow: 1 }} >
                    <Typography
                        variant={'h3'}>
                        {props.headerName}
                    </Typography>
                </Grid>
                <Grid item >
                    {
                        (props.noIcons) ?
                            <></>
                            :
                            <Typography variant="h4">
                                <Grid container spacing={2}>
                                    <Grid item >
                                        <div type="button" style={{ cursor: 'pointer' }}><FontAwesomeIcon icon="fas fa-info-circle" /></div>
                                    </Grid>
                                    <Grid item >
                                        <div type="button" style={{ cursor: 'pointer' }}><FontAwesomeIcon icon="fas fa-ellipsis-h" /></div>
                                    </Grid>
                                </Grid>
                            </Typography>
                    }
                </Grid>
            </Grid>
            {props.children}
        </Paper>
    );
}

export default ChartBox;