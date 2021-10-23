let puesto: number = document.getElementById("puesto");

let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  let llegadas: number= Number(puesto.value)
if(llegadas===1){
  console.log("Entregar medalla de oro")
}else{
  if (llegadas===2) {
    console.log("Entregar medalla de plata")
  }else{
    if(llegadas===3){
      console.log("Entregar medalla de bronce")
    }else{
        console.log ("Entregar mencion especial")
    }
  }
}
}