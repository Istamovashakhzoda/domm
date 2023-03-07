"use script"

const btn = () =>{
  const placeholderr = document. querySelector("#placeholder")
  placeholderr.textContent= 77;
  console.log(placeholderr);
}

const btnel =document.getElementById("btn");
btnel.addEventListener("click", btn)