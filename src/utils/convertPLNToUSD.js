export const convertPLNToUSD = (PLN) => {
  const type = typeof PLN;
  let PLNtoUSD = 0;

  if (PLN > 0) {
    PLNtoUSD = PLN / 3.5;
  } else {
    PLNtoUSD = 0;
  }
  
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });


  if(type === 'string' || type === 'undefined'){
    return NaN;
  }

  if(type !== 'number'){
    return "Error";
  }
   
  return formatter.format(PLNtoUSD); 
}