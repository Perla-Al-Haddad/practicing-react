import './App.css';
import $ from 'jquery';

import * as React from 'react';
import { useState, useCallback, useEffect } from "react";

import { MenuItem, Toolbar, Typography } from '@mui/material'; //importing material ui component
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faBarChart, faAreaChart, faPieChart, faProjectDiagram } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import PieChart from './Components/ChartComponents/PieChart/PieChart';
import BarChart from './Components/ChartComponents/BarChart/BarChart';
import ForceChart from './Components/ChartComponents/ForceChart/ForceChart';

import Footer from './Components/Footer/Footer';
import ChartBox from './Components/ChartBox/ChartBox';
import StatisticsContainer from './Components/StatisticContainer/StatisticContainer'
import Section from './Components/Section/Section';
import ScrollToButton from './Components/ScrollToButton/ScrollToButton';

library.add(faBarChart, faAreaChart, faPieChart, faProjectDiagram, faCircle);

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

function getCoords(elem) {
  var box = elem.getBoundingClientRect();

  var body = document.body;
  var docEl = document.documentElement;

  var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
  var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

  var clientTop = docEl.clientTop || body.clientTop || 0;
  var clientLeft = docEl.clientLeft || body.clientLeft || 0;

  var top = box.top + scrollTop - clientTop;
  var left = box.left + scrollLeft - clientLeft;

  return { top: Math.round(top), left: Math.round(left) };
}

const mdTheme = createTheme();


function DashboardContent() {
  const [y, setY] = useState(window.scrollY);

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      let navigationCoords = getCoords(document.getElementById("appbar__navigation"));
      let headerDOM = document.getElementsByClassName("img-header");
      if (headerDOM[0].offsetHeight < navigationCoords.top) {
        $("#navigation__title").removeClass("opacity-0");
      } else {
        $("#navigation__title").addClass("opacity-0");
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <ThemeProvider theme={mdTheme}>
      <header className='img-header'>
        <div className="title-container">
          <Container maxWidth="xl" className="container">
            <h1 className="text-white display-1 pb-3 ">Page Title</h1>
          </Container>
        </div>
      </header>
      <Box>
        <CssBaseline />
        <AppBar id="appbar__navigation" sx={{ position: 'sticky', height: 'fit-content', backgroundColor: '#1a1624' }} open={false}>
          <Toolbar>
            <Container maxWidth="xl">
              <Grid container>
                <MenuItem sx={{ flexGrow: 1 }}>
                  <Typography className='opacity-0 text-white' id="navigation__title" variant="h6" >
                    Page Title
                  </Typography>
                </MenuItem>
                <MenuItem >
                  <Typography className='text-white' textAlign="center" variant={'h6'}>
                    <ScrollToButton toId="CoreStatisticsDIV">Core Statistics <FontAwesomeIcon icon={["far", "fa-circle"]} /></ScrollToButton>
                  </Typography>
                </MenuItem>
                <MenuItem >
                  <Typography className='text-white' textAlign="center" variant={'h6'}>
                    <ScrollToButton toId="Chart1DIV">Chart Container 1 <FontAwesomeIcon icon={["fas", "fa-chart-pie"]} /></ScrollToButton>
                  </Typography>
                </MenuItem>
                <MenuItem >
                  <Typography className='text-white' textAlign="center" variant={'h6'}>
                    <ScrollToButton toId="Chart2DIV">Chart Container 2 <FontAwesomeIcon icon={["fas", "fa-chart-bar"]} /></ScrollToButton>
                  </Typography>
                </MenuItem>
                <MenuItem >
                  <Typography className='text-white' textAlign="center" variant={'h6'}>
                    <ScrollToButton toId="Chart3DIV">Chart Container 3 <FontAwesomeIcon icon={["fas", "fa-project-diagram"]} /></ScrollToButton>
                  </Typography>
                </MenuItem>
              </Grid>
            </Container>
          </Toolbar>
        </AppBar>
        <Box
          component="main"
          sx={{
            backgroundColor: "#f0f2f9",
            flexGrow: 1,
          }}
        >
          <Container maxWidth="xl" sx={{ pt: 4, pb: 5 }}>
            <Grid container spacing={3}>
              <Grid item lg={12}>
                <ChartBox headerName="Lorem Ipsum" noIcons={true}>
                  <Typography>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </Typography>
                </ChartBox>
              </Grid>
              <Grid item xs={12} md={12} lg={12} >
                <Section id={"CoreStatisticsDIV"}>
                  <ChartBox headerName="Core Statistics">
                    <Grid container sx={{ p: 3, ml: 0 }} spacing={5}>
                      <StatisticsContainer title="Stat Title" value="541,687$" year="2020" />
                      <StatisticsContainer title="Stat Title" value="18,127$" year="2020" />
                      <StatisticsContainer title="Stat Title" value="21" year="2020" />
                      <StatisticsContainer title="Stat Title" value="NAN" year="2020" />
                    </Grid>
                  </ChartBox>
                </Section>
              </Grid>
              <Grid item xs={12} md={8} lg={7} >
                <Section id={'Chart1DIV'}>
                  <ChartBox headerName="Chart Title 1">
                    <PieChart height={680} />
                  </ChartBox>
                </Section>
              </Grid>
              <Grid item xs={12} md={4} lg={5} >
                <Section id={'Chart2DIV'}>
                  <ChartBox headerName="Chart Title 2">
                    <BarChart height={680} />
                  </ChartBox>
                </Section>
              </Grid>
              <Grid item xs={12}>
                <Section id={'Chart3DIV'}>
                  <ChartBox headerName="Chart Title 3">
                    <ForceChart height={680} />
                  </ChartBox>
                </Section>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
      <Footer sx={{ pt: 4 }} />
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}