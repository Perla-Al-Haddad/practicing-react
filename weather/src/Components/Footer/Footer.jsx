import { Container, Grid } from "@mui/material";
import React from "react";

import './Footer.css'

const Footer = props => {
    return (
        <div className="footer-body">
            <Container maxWidth="xl">
                <Grid container>
                    <Grid className="nav" item xs={12} lg={6}>
                        Logo
                    </Grid>
                    <Grid className="nav" item xs={4} lg={2}>
                        <h2 className='text-white'>Chart Links</h2>
                        <ul>
                            <li><a href="/charts/barchart">Bar Chart</a></li>
                            <li><a href="/charts/piechart">Pie Chart</a></li>
                            <li><a href="#">chart link 3</a></li>
                        </ul>
                    </Grid>
                    <Grid item className="nav" xs={4} lg={2}>
                        <h2 className='text-white'>Pages Links</h2>
                        <ul>
                            <li><a href="#">page link 1</a></li>
                            <li><a href="#">page link 2</a></li>
                            <li><a href="#">page link 3</a></li>
                            <li><a href="#">page link 4</a></li>
                        </ul>
                    </Grid>
                    <Grid item className="nav" xs={4} lg={2}>
                        <h2 className='text-white'>Links</h2>
                        <ul>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Footer