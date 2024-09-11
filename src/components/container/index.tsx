import React from 'react'
import "./container.css"
import Header from '../header'
import Footer from '../Footer'

type ContainerProps = {
    children: React.ReactNode,
    img: string
}

const Container: React.FC <ContainerProps> = ({children, img}) => {
  return (
    <div style={{ backgroundImage: `url(/assets/${img})` }} className="container">
      <Header></Header>
      {children}
      <Footer></Footer>
      </div>
  )
}

export default Container