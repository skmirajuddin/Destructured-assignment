function extractNameAndStreet(person) {
    const { name, address: { street } } = person;
    return { name, street };
  }

  const person = {
    name: 'Mithun',
    age: 21,
    address: {
      street: 'B8, Block B, Industrial area.',
      city: 'Sector 62, noida',
      state: 'Uttar pradesh'
    }
  };
  
  const result = extractNameAndStreet(person);
  console.log(result);
  