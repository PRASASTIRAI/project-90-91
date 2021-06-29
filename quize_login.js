function add_user(){
    player1_name=document.getElementById("player1_name_input").value;
    player2_name=document.getElementById("player2_name_input").value;

    //player1 name and player2 name are vars//

    localStorage.setItem("player1_name",player1_name);
    localStorage.setItem("player2_name",player2_name);
    //this is key and value pair//
window.location="quize_page.html";


}