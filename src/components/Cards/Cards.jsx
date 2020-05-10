import React from "react";
import { Card, CardContent, Typography, Grid, StylesProvider } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {

  const cardsGrid = [
    {
      title: 'Infected',
      number: confirmed,
      date: lastUpdate,
      cases: 'Number of active cases of COVID-19',
      color: '10px solid rgba(0, 0, 255, .5)',
    },
    {
      title: 'Recovered',
      number: recovered,
      date: lastUpdate,
      cases: 'Number of recoveries from of COVID-19',
      color: '10px solid rgba(0, 255, 0, .5)',
    },
    {
      title: 'Deaths',
      number: deaths,
      date: lastUpdate,
      cases: 'Number of deaths caused by COVID-19',
      color: '10px solid rgba(255, 0, 0, .5)',
    }
  ];

  if (!confirmed) {
    return 'Loading...';
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">

        {cardsGrid.map((cardGrid, i) =>

          <Grid item component={Card} xs={12} md={3} className={cx(styles.card)} style={{ "border-bottom": cardGrid.color }} key={i}>
            <CardContent>

              <Typography color="textSecondary" gutterBottom>{cardGrid.title}</Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={cardGrid.number.value}
                  duration={2}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">{new Date(cardGrid.date).toDateString()}</Typography>
              <Typography variant="body2">{cardGrid.cases}</Typography>
            </CardContent>
          </Grid>
        )}
      </Grid>
    </div >
  )
};

export default Cards;
