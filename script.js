async function getdata() {
  const response = await fetch("https://mediship.herokuapp.com/doctor", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "Somil Goyal",
      pass: "123456",
      email: "somilgoyal@gmail.com",
    }),
  });
  const data = await response.json();

  const result = document.getElementById("result");

  result.innerHTML = JSON.stringify(data, null, 2);
}

const button = document.getElementById("butt");
button.addEventListener("click", getdata());
