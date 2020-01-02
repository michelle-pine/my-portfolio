import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, HashRouter as Router } from 'react-router-dom'
import $ from 'jquery';

import projectList from './data/projects';

import './index.scss';
import 'font-awesome/css/font-awesome.min.css'

import App from './App';
//pages
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';

//components
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Loader from './components/Loader';


//images
import logo from './media/logo.png'

const routing = (
  <Router basename='/'>
    <div id="stars"/>
    <div id="stars2"/>
    <div id="stars3"/>
    <div className="logo-bg"><img src={logo} alt="" className="header-logo"/></div>
    <Navbar />
    <Header />
    <div className="page-content">
      <div className="content-wrapper">
        <Switch>
          <Route exact path="/" component={Projects} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          {projectList.filter((project) => !project.redirect).map((project) => <Route path={`/projects/${project.url}`} component={project.page} />)}
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </div>
    <Loader />
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

function scrollPastHeader() {
  var $header = $(".header");

  if ($(document).scrollTop() < $header.height() - 100) {
    $([document.documentElement, document.body]).animate({
      scrollTop: $header.height()
     }, 1500);
  }
  else {
    window.scrollTo(0, $header.height() - 50);
  }
}

$(function () {
  $("#loader").delay(2000).fadeOut();
  $(".navbar-link").click(function () {
    scrollPastHeader();
  });
  $(".down-button").click(function () {
    scrollPastHeader();
  });
  $("body").on("click", "a.project", function() {
    scrollPastHeader();
  });
  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    var $header = $(".header");
     //>=, not <=
    if (scroll >= $header.height() - 50) {
        //clearHeader, not clearheader - caps H
        $(".navbar").addClass("scrolled");
    }
    else {
      //clearHeader, not clearheader - caps H
      $(".navbar").removeClass("scrolled");
    }
  });
});

