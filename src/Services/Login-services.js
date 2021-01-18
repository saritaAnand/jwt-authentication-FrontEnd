async function getUsers(body){
    const response =
      await fetch( "http://localhost:3004/auth/login",
        { 
          method: 'post',
          headers: {'Content-Type':'application/json','Accept': 'application/json'},
          body: JSON.stringify(body)
        }
      )
    return await response;
  }

  async function postUsers(body){
    const response =
      await fetch( "http://localhost:3004/auth/register",
        { 
          method: 'post',
          headers: {'Content-Type':'application/json','Accept': 'application/json'},
          body: JSON.stringify(body)
        }
      )
    return await response;
  }

  async function getProducts(){
    // async function getProducts(header){
    const response =
      await fetch( "http://localhost:3004/api/products",
        { 
          method: 'post',
           headers: {'Content-Type':'application/json','Accept': 'application/json'},
          // headers: {'Content-Type':'application/json','authorization':header,'Accept': 'application/json'},
          body:null
        }
      )
    return await response;
  }
  export {getUsers,postUsers,getProducts}