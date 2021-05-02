async function addMed() {
  const docData = JSON.parse(localStorage.getItem("doctor"));
  const doc = docData._id;
  const pat = "P012345";
  const medicines = [];

  const response = await fetch(
    "https://mediship.herokuapp.com/patients/prescription",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        doc,
        pat,
        medicines,
      }),
    }
  );

  data = await response.json();

  localStorage.setItem("prescription", JSON.stringify(data));
  console.log(response.status);
}
