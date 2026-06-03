fetch("http://localhost:3000/api/data")
  .then(res => res.json())
  .then(data => {
    document.getElementById("data").innerText =
      `Name: ${data.name} | Role: ${data.role}`;
  })
  .catch(err => {
    document.getElementById("data").innerText = "Server not running ❌";
  });