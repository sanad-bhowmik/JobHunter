// use local storage to manage cart data
export const addToJob = data => {
   
    let jobCart = []
  
    //get the shopping cart from local storage
    const storedCart = JSON.parse(localStorage.getItem('jobs')) 
    if (storedCart) {
      const jobIndex = storedCart.findIndex(item => item.id === data.id)
      if (jobIndex !== -1) {
        alert("Already Applied")
      }
      else {
        jobCart =[...storedCart, data]
        localStorage.setItem('jobs', JSON.stringify(jobCart))
        alert("Applied Successfully")
      }
    }
    else{
      jobCart = [data]
      localStorage.setItem('jobs', JSON.stringify(jobCart))
    alert("Applied Successfully")
    }
  
}

export const getStoredData = () =>{
    const data = JSON.parse(localStorage.getItem('job-cart'));
    return data;
}