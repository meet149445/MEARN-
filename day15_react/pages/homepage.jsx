import React from 'react'
import Navigation  from '../src/component/nav/Navigation'
import Card from '../src/component/card/card'
import styles from './home.module.css'

export default function homepage() {
  //sample data 
  const sampleData = 
  [
    {name:"Meet",email:"meet@gmail.com", review:"Great Experience", rating:4},
    {name:"Yash",email:"yash@gmail.com", review:"Not bad", rating:3},
    {name:"Dhruv",email:"dhruv@gmail.com", review:"Good behaviour", rating:4},
    {name:"Maitri",email:"maitri@gmail.com", review:"Great!!", rating:5},
    {name:"Mihir",email:"mihir@gmail.com", review:"Ok Ok", rating:3},
    {name:"Virali",email:"virali@gmail.com", review:"Good Quality", rating:4},
    {name:"Teesha",email:"teeshuuu@gmail.com", review:"Bad Experience", rating:2},
    {name:"Kush",email:"kush@gmail.com", review:"Great", rating:5},
    {name:"Modiji",email:"modiji@gmail.com", review:"Great", rating:5}  
  ]
  return (
    <div>
      <Navigation/>
      <h1>Home page</h1>
      <p>This is home page of application</p>
      <div className={styles.customer}>
      {/* <Card data = {{name:"Meet",email:"meet@gmail.com", review:"Great Experience", rating:4}}/>
      <Card data = {{name:"Yash",email:"yash@gmail.com", review:"Not bad", rating:3}}/>
      <Card data = {{name:"Dhruv",email:"dhruv@gmail.com", review:"Good behaviour", rating:4}}/>
      <Card data = {{name:"Maitri",email:"maitri@gmail.com", review:"Great!!", rating:5}}/>
      <Card data = {{name:"Mihir",email:"mihir@gmail.com", review:"Ok Ok", rating:3}}/>
      <Card data = {{name:"Mahek",email:"mahek@gmail.com", review:"Average", rating:3}}/>
      <Card data = {{name:"Virali",email:"virali@gmail.com", review:"Good Quality", rating:4}}/>
      <Card data = {{name:"Teesha",email:"teeshuuu@gmail.com", review:"Bad Experience", rating:2}}/>
      <Card data = {{name:"Kush",email:"kush@gmail.com", review:"Great", rating:5}}/>
      <Card data = {{name:"Modiji",email:"modiji@gmail.com", review:"Great", rating:5}}/> */}
      <div className={styles.customer}>
        {sampleData.map ((item,index) =>
        (
          <Card key={index} data={item} />
        ))}
      </div>

</div>
    </div>
  )
}
