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
  console.log(await response.json());
}

var button = document.querySelector("#butt");
button.addEventListener("click", getdata());
