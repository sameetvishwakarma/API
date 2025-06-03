// let user_name = document.getElementById("user_details");
// let picture = document.getElementById("profile-pic");


// function uploadProject() {
    // fetch("https://randomuser.me/api/").then((data) => {
    //     var res = data.json();
//         return res;
//     }).then((res) => {
//         // console.log(res.results[0].name);
//         var user = res.results[0];
//         var fullName = user.name.title + user.name.first + user.name.last;
//         user_name.innerText = fullName;

//         var photo = user.picture.large;
//         picture.src = photo;
//         // console.log(photo);
//     })
//         .catch((err) => {
//             console.log("ERR in API");
//         });
// }

// uploadProject();



let img = document.getElementById("profile-pic");
let user_details = document.getElementById("user-details");
let user_name = document.getElementById("user-name");
let user_email = document.getElementById("user-email");
let user_dob = document.getElementById("user-dob");
let user_location = document.getElementById("user-location");
let user_phone = document.getElementById("user-phone");
let user_password = document.getElementById("user-password");
let label = document.getElementById("label");
 
function uploadProject() {
    fetch("https://randomuser.me/api/").then((data) => {
        var res = data.json();
        return res;
    }).then((res) => {

        let user = res.results[0];
        let name = user.name;
        let date = new Date(user.dob.date);
        let location = user.location
        let photo = user.picture.medium;
        img.src = photo;

        user_details.innerText = `${name.title} ${name.first} ${name.last}`
        user_email.addEventListener("click", function () {
            user_details.innerText = user.email
            label.innerText = "My email is";
        });
        user_name.addEventListener("click", function () {
            user_details.innerText =`${name.title} ${name.first} ${name.last}`
            label.innerText = "Hi, My name is";
        });
        user_dob.addEventListener("click", function () {
            user_details.innerText =`${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`
            label.innerText = "My dob is";
        });
        user_location.addEventListener("click",function() {
            user_details.innerText =` ${location.postcode} ${location.state} ${location.country}`
            label.innerText = "My location is";
        });
        user_phone.addEventListener("click",function() {
            user_details.innerText = user.phone;
            label.innerText = "My phone number is";
        });
        user_password.addEventListener("click",function() {
            user_details.innerText = user.login.password;
            label.innerText = "My password is";
        });
    })
        .catch((err) => {
            console.log("ERR in API" ,err);
        });
}

uploadProject();
