
const users = [];
const interestArray = [];

document.getElementById("button").addEventListener("click", function () {
    let userName = document.getElementById("userName").value;
    let email = document.getElementById("email").value;
    let area = document.getElementById("select").value;
    let interests = document.getElementsByName("interest");

    for (let i = 0; i < interests.length; i++) {
        if (interests[i].checked) {
            interestArray.push(interests[i].value);
        }
    }
    let gender = document.querySelector('input[name="gender"]:checked').value;
    // new thing



    const user = {
        username: userName,
        Email: email,
        Area: area,
        Gender: gender,
        Interests: interestArray,
    };
    users.push(user);

    let trow = document.createElement("tr");
    let tableData = document.createElement("td");
    tableData.textContent = user.username;
    trow.appendChild(tableData);



    let tableData1 = document.createElement("td");
    tableData1.textContent = user.Email;
    trow.appendChild(tableData1);

    let tableData2 = document.createElement("td");
    tableData2.textContent = user.Area;
    trow.appendChild(tableData2);

    let tableData3 = document.createElement("td");
    tableData3.textContent = user.Gender;
    trow.appendChild(tableData3);

    let tableData4 = document.createElement("td");
    tableData4.textContent = user.Interests;
    trow.appendChild(tableData4);

    document.getElementById("tableBody").appendChild(trow);

    document.getElementById("userName").value = "";
    document.getElementById("email").value = "";


    let genderRadios = document.getElementsByName("gender");
    for (let i = 0; i < genderRadios.length; i++) {
        genderRadios[i].checked = false;
    }


    let interests1 = document.getElementsByName("interest");
    for (let i = 0; i < interests1.length; i++) {
        interests1[i].checked = false;
    }


})
document.getElementById("cancelButton").addEventListener("click", function () {

    document.getElementById("userName").value = "";
    document.getElementById("email").value = "";


    let genderRadios = document.getElementsByName("gender");
    for (let i = 0; i < genderRadios.length; i++) {
        genderRadios[i].checked = false;
    }


    let interests = document.getElementsByName("interest");
    for (let i = 0; i < interests.length; i++) {
        interests[i].checked = false;
    }
});









