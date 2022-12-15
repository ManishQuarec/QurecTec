import React from 'react'
import CareerPageOne from '../Carreer/CareerPageOne/CareerPageOne'
import CareerPageTwo from '../Carreer/CareerPageTwo/CareerPageTwo'
import CareerPageThree from '../Carreer/CareerPageThree/CareerPageThree'
import CareerPageFour from '../Carreer//CareerPageFour/CareerPageFour'
import Nav from '../../component/Nav/Nav'
function Career() {
  function load() {
    window.scrollTo(0, 0);
  }
  return (
    <>
    <Nav/>
    {load()}
    <CareerPageOne/>
    <CareerPageTwo/>
    <CareerPageThree/>
    <CareerPageFour/>
    </>
  )
}

export default Career