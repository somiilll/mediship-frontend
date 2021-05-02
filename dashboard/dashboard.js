let patient_list = "";

for (var i = 0; i < 6; i++) {
  patient_list +=
    "<div class='grid-item'>Patient ID: P012345 <br><br>Patient Name: Sanskrita Saha <br><br>Age: 19 years <br><br>Gender: Female <br><br>Mobile: 9876543210 <br><br><div class='prescribe-edit-delete'><div class='prescribe'><a href='/prescribe.html'><button type='button' name='button-prescribe'>Prescribe</button></a></div><div class='edit'><img src='../assets/edit_icon.png' alt=''></div><div class='delete'><img src='../assets/delete_icon.png' alt=''></div></div></div>";
}

document.getElementById("grid-container").innerHTML = patient_list;
