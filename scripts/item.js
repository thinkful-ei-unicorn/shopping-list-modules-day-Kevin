function validateName(name){
  if(typeof name === 'undefined' || name === ''){
    throw TypeError("Name must not be blank");
  }  
}

function create(name){
  return{
  name: name,
  id: cuid(),
  checked: false}
}


export default{
  validateName,
  create
};

