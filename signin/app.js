async function signin() {
  const name = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  console.log(name, email, pass);

  const response = await fetch("https://mediship.herokuapp.com/doctor", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name,
      pass,
      email,
    }),
  });

  data = await response.json();

  localStorage.setItem("doctor", JSON.stringify(data));

  console.log(response.status);

  if (response.status === 200) {
    window.location.href = "/dashboard.html";
  }
}

const button = document.getElementById("signin");
button.addEventListener("click", signin());
