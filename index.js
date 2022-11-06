

let obj; 



async function loadJson(){
    await fetch('./data.json')
    .then((response) => response.json())
    .then((json) => obj = json)
    .then(()=> {
       
        let activeTime = document.querySelector(".active").textContent
        setHours(obj, activeTime)});
}

function setHours(obj, activeTime){


        let i = 0
        let cards = document.querySelectorAll(".card")
        switch (activeTime){
            case "Daily":
               
                cards.forEach( card => {
                    let display = card.children[1]
                    let flexHeading = display.children[0]
                    let heading = flexHeading.children[0]
                    let currentHours = display.children[1]
                    let previousHours = display.children[2]
             
                
                    heading.innerHTML = obj[i].title
                    currentHours.innerHTML = `${obj[i].timeframes.daily.current} hrs`
                    previousHours.innerHTML = `Last Week - ${obj[i].timeframes.daily.previous}`
        
                    
        
        
                    i++
                })
               
                
                break;
            case "Weekly":
                
                cards.forEach( card => {
                    let display = card.children[1]
                    let flexHeading = display.children[0]
                    let heading = flexHeading.children[0]
                    let currentHours = display.children[1]
                    let previousHours = display.children[2]
        
                    heading.innerHTML = obj[i].title
                    currentHours.innerHTML = `${obj[i].timeframes.weekly.current} hrs`
                    previousHours.innerHTML = `Last Week - ${obj[i].timeframes.weekly.previous}`
        
                    
        
        
                    i++
                })
                break;
            case "Monthly":
              
                cards.forEach( card => {
                    let display = card.children[1]
                    let flexHeading = display.children[0]
                    let heading = flexHeading.children[0]
                    let currentHours = display.children[1]
                    let previousHours = display.children[2]
                    
                    
                   
                    heading.innerHTML = obj[i].title
                    currentHours.innerHTML = `${obj[i].timeframes.monthly.current} hrs`
                    previousHours.innerHTML = `Last Week - ${obj[i].timeframes.monthly.previous}`
        
                    
        
        
                    i++
                })
                break;
        }

 }


 window.addEventListener("load", () =>{
   loadJson()

   let link = document.querySelectorAll("a");
   link.forEach(item => {
    item.addEventListener("click", function(){
        link.forEach(item => {
            item.classList.remove("active")
        })
    item.classList.toggle("active")
    let activeTime = document.querySelector(".active").textContent
    loadJson()
    })})
})






 
