function getData(){
    navigator.geolocation.getCurrentPosition(
    (position)=>{
     
        const latitude =  position.coords.latitude;
        const longitude = position.coords.longitude
     
        console.log(longitude+ " " +latitude)
       
        document.write(latitude +" " + longitude)
     
    },
    (error)=>{
        console.log(error)
    
    
     
    })
     
    }