let uidCounter = 1000; 

export const generateUID = () => {
  const timestamp = new Date().getTime().toString(); 
  const uid = timestamp + uidCounter; 
  uidCounter++; 
  return uid;
};
