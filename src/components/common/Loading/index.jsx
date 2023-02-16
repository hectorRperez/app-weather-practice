import React from 'react'

import style from "./styles.module.css"

// console.log(style)

function index() {
  return (
    <div className={style.container}>
      <div className={style.loadingContainer}></div>
    </div>
  )
}

export default index