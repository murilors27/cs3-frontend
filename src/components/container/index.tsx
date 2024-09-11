import React from 'react'
import "./container.css"

type ContainerProps = {
    children: React.ReactNode,
    img: string
}

const Container: React.FC <ContainerProps> = ({children, img}) => {
  return (
    <div style={{ backgroundImage: `url(/assets/${img})` }} className="container">{children}</div>
  )
}

export default Container