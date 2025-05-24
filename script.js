let heading = document.querySelectorAll(".heading");
let convertHeading = Array.from(heading)


  const h1Tags = document.querySelectorAll("h1");
  const colors = ["#8e44ad", "green", "blue", "orange", "purple", "goldenrod", "#e74c3c"];

  h1Tags.forEach((h1, index) => {
    h1.style.color = colors[index % colors.length];
  });


 
convertHeading.map(item=>{
  let count = 0;
function counterJS(){
 count++ 
 item.innerHTML = count
 if(count == item.dataset.number){
 clearInterval(stop)
 }
}

let stop = setInterval(()=>{
 counterJS()

},item.dataset.speed)
})

