const phoneData = [
  { username: "Aarav", mobileNumber: "+91 0642588740" },
  { username: "Isha", mobileNumber: "+91 9273888720" },
  { username: "Meera", mobileNumber: "+91 7496362913" },
  { username: "Aryan", mobileNumber: "+91 8838895368" },
  { username: "Ananya", mobileNumber: "+91 7009575665" },
  { username: "Vivaan", mobileNumber: "+91 2934911438" },
  { username: "Diya", mobileNumber: "+91 8047695614" },
  { username: "Kavya", mobileNumber: "+91 6747446755" },
  { username: "Rohan", mobileNumber: "+91 1420588133" },
  { username: "Avni", mobileNumber: "+91 7297572519" },
  { username: "Dev", mobileNumber: "+91 9335129003" },
  { username: "Aditi", mobileNumber: "+91 9640795917" },
  { username: "Reyansh", mobileNumber: "+91 1053533519" },
  { username: "Mahi", mobileNumber: "+91 1288625278" },
  { username: "Aarushi", mobileNumber: "+91 2903610886" },
  { username: "Aditya", mobileNumber: "+91 4691048413" },
  { username: "Riya", mobileNumber: "+91 4638788378" },
  { username: "Krishna", mobileNumber: "+91 6181489398" },
  { username: "Saanvi", mobileNumber: "+91 1814844465" },
];
const cardContainer = document.getElementById("cardContainer");

function showUserData(data) {
  cardContainer.innerHTML = "";
  data.forEach((user) => {
    cardContainer.innerHTML += `<div class="card"> 
                    <h3>${user.username} </h3>
                    <p>${user.mobileNumber}</p>
        </div>`;
  });
}

function searchUser() {
  const inputField = document.getElementById("inputField");
  const searchQuary = inputField.value.toLowerCase();
  const filterdData = phoneData.filter((users) => {
    if (users.username.toLowerCase().includes(searchQuary)) {
      return true;
    }
  });

  showUserData(filterdData);
}

showUserData(phoneData);
