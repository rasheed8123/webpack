  import "./ind.css"
  import img1 from "./images1.jpg"

  
  var arr = JSON.parse(localStorage.getItem("arr")) || []
  display(arr)
  const div1 = document.createElement("div")
  const img = document.createElement("img")
  img.src = img1
  div1.append(img)
  document.getElementById("head").append(div1)

   const but = document.querySelector("button")
   but.addEventListener("click",myfun) 

  function myfun(){
      const talk = document.querySelector("textarea").value
      console.log(talk)
      if(talk){
        arr.push(talk)
        localStorage.setItem("arr",JSON.stringify(arr))
      }
      
      display(arr)

  }
  function display(arr){
    document.querySelector("#main").innerHTML=""
    arr.map(function(arr){
        const div = document.createElement("div")
        div.innerHTML=arr
        document.querySelector("#main").append(div)
    })
  }

