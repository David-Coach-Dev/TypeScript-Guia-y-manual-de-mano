(()=>{
  const fullName = (firstName: string, ...restAgrs: string[] ):string =>{
    return `${firstName} ${restAgrs.join(' ')}`;
  }
  const superman = fullName('clark', 'Joseph', 'Kent');
  console.log({ superman });
})()