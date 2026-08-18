let role = "Admin";
let password = "TheMaster";
if (role === "Admin") {
  if (password === "TheMaster") {
    console.log("Welcome");
  } else if (password === "TheStranger") {
    console.log("Stranger alert!!, I don't know Him");
  } else {
    console.log("I don't know you");
  }
} else {
  console.log("This is not an admin");
}
//Admin code