const emailObj = name => ({
    nomeCompleto: name,
    email: `${name}@trybe.com`
})

const newEmployees = emailObj => {
    const employees = {
      id1: emailObj('Pedro Guerra'),
      id2: emailObj('Luiza Drumond'),
      id3: emailObj('Carla Paiva'), 
    }
    return employees;
  };

  console.log(newEmployees(emailObj));