import './App.css';
import React, { Component } from "react";
import { Route, Routes } from 'react-router-dom';
import {Home, About, NotFound, Movie} from './pages'
import Menu from './Menu';
import Sidebar from './Sidebar'
import Button from './Button'

class App extends Component {
  constructor(props){
    console.log('constructor')
    super(props)
    this.state = {
      loading: true,
      movies: []
    }
  }
  homeMenu = [
    { url: "/", name: "HOME" }, 
    { url: "/about", name: "ABOUT" }, 
    { url: "/movies", name: "MOVIE" }, 
  ]
  state = {
    open: false
  }
  
  componentDidMount() {
    console.log('mount')
    //서버에서 데이터 가져오기
    fetch('https://yts.mx/api/v2/list_movies.json')
    .then( res => res.json())
    .then( result => {
      console.log(result)
      const {data:{movies}}=result
      this.setState({loading: false, movies})
    })
  }
  //컴포넌트가 업데이트 되었을때 호출이 됨
  componentDidUpdate() {
    console.log('update')
  }
  //컴포넌트가 제거되었을때 호출이 됨
  componentWillUnmount() {
    console.log('unmount')
  }

  showSidebar = () =>{
    this.setState({open: !this.state.open})
  }
  render() {
    const {open, movies} = this.state
    const {homeMenu} = this
    return(
      <div className="App">
        <Button handleClick = {this.showSidebar}>Menu</Button>
        <Sidebar open={open}>
          <Menu menus={homeMenu}></Menu>
        </Sidebar>
        
        <Routes>
          <Route exact path="/" element={<Home movies={movies}/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route path="/movies" element={<Movie movies={movies}/>}>
            <Route path=":movieId" element={<Movie movies={movies}/>}/>
          </Route>
          
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
    )
  }
}

export default App;