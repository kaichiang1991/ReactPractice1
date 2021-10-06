import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Header from './Header'
import {
  StyledAppWrapper,
  StyledContent,
  StyledExploreBtn
} from '../Style/AppStyle'
import Recipes from './Recipes'
import About from './About'
import DinnerTV from './DinnerTV'
import School from './CookingSchool'

const App = props =>{
  return (
    <StyledAppWrapper>
      <Header></Header>
      <Switch>
        <Route exact path="/" render={()=>      
          <StyledContent>
            <div className="col-1-2">
              <h1>Let's Get Cooking!</h1>
              <section>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, eveniet.</section>
              <StyledExploreBtn children={'Explore Recipes'} />
            </div>
          </StyledContent>
        }/>
        <Route path="/recipes" component={Recipes}/>
        <Route path="/tv" component={DinnerTV}/>
        <Route path="/school" component={School}/>
        <Route path="/about" component={About}/>
      </Switch>

    </StyledAppWrapper>
  )
}

export default App