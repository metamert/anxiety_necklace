import React from "react"
import Link from "next/link"




const Buttons =()=>{


return(

<div className=" relative buttoncontainer">

<img src="/w3.png" className="fullw relative" alt="valentines day gift" style={{top:3}}></img>
<div className="arabulucu flex flex-column">


<h3 className="budayazı text-4xl md:4xl font-bold  text-center">
All handcrafted items made of magnetic sand


</h3>

<div
className="flex flex-row"
>
<Link href="/products">
<div className="button2 ">

Products
</div>


</Link>


    

</div>

</div>
<img src="/w4.png" className="fullw relative" alt="valentines day gift" style={{bottom:3}}></img>



</div>

)

}

export default Buttons