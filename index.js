function submitData(name, email) {
  const data = {
      name: name,
      email: email
  };

  return fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify(data)
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return response.json();
  })
  .then(json => {
      if (!json.id) {
          throw new Error('Invalid response: Missing ID');
      }
      document.body.innerHTML += json.id;
  })
  .catch(error => {
      document.body.innerHTML += error.message;
  });
}

submitData("John Doe", "john@example.com");

