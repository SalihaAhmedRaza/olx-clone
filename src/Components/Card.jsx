// import React from 'react'

// const Card = ({title,descriptions,src,price}) => {
//   return (
//     <>
    
// <div style={{backgroundColor:" white",width:"250px",color:"black", border:"20px"}}>
//         <img style={{width:"250PX",height:"200px",}} src={src}alt=""/>
        
//     <h1>{title} </h1>
//     <span>{descriptions}</span>
//     <h3>{price}</h3>
//     <button>ADD TO CART </button>
//     </div>
    
//     </>

    
//   )
// }

// export default Card




import React from 'react'

const Card = ({ title, descriptions, src, price }) => {
  return (
    <>
      <div style={{
        backgroundColor: "white",
        width: "250px",
        color: "black",
        border: "1px solid black",
        padding: "20px",
        margin: "10px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
      }}>
        <img style={{ width: "100%", height: "200px" }} src={src}  />
        
        <h1>{title}</h1>
        <span>{descriptions}</span>
        <h3>{price}</h3>
        <button style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}>ADD TO CART</button>
      </div>
    </>
  )
}

export default Card
