import React from 'react'
//import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
//import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
//import ButtonBase from '@material-ui/core/ButtonBase';
//import GridTest from './components/GridTest.js';

//import TodoList from './components/TodoList.js';
import Categories from './components/Categories.js';
//import Category from './components/Category.js';

const score = 0;
function App() {
  return (
    <div id="title">
      <Typography variant="h1">Jeopardy</Typography>
      <Typography variant="body1">Jeopardy game built using React, Material-UI, and jService API. <br /> Press the 'Start' button to load the categories. Press 'Reshuffle' to change the categories.</Typography>
      <Typography variant="body2" align='right'><br />Score = {score}</Typography>
      
      <Grid container direction="row" spacing={1}>
          <Grid item xs='3'>Category 1</Grid>
          <Grid item xs='3'>Category 2</Grid>
          <Grid item xs='3'>Category 3</Grid>
          <Grid item xs='3'>Category 4</Grid>       
      </Grid>

      <Grid container direction="column" justifyContent="center"alignItems="flex-start" spacing={1}>
            <Grid item xs='3'>Clue 0-1</Grid>
            <Grid item xs='3'>Clue 0-2</Grid>
            <Grid item xs='3'>Clue 0-3</Grid>
            <Grid item xs='3'>Clue 0-4</Grid>    
            <Grid item xs='3'>Clue 0-5</Grid>  
      </Grid>
      {/* 
      <GridTest />

      <TodoList />
      
      <Categories />

      <Category categoryID="1892" />
      <Category />
      */}

      <Categories />
      
  
    </div>

  );
}

// get categories
// return JSON of 5 categories from jService API
// const getCategory = () => {
//  return <GridTest></GridTest>
//}



export default App;
