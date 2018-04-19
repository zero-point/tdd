class PasswordVerifier {
 notNull(password){
    if (password === null || password === "") {
       console.log("password should not be null or empty");
       return false;
   }

}

 verify(password){

   if (password.length < 8){
       console.log("Password should be at least 8 chars")
       return false;
   }

   return true;

}}
let verifier = new PasswordVerifier();
module.exports = verifier;
