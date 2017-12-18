function send(){
    var phrase=document.getElementById("texte").value;
    var element=document.getElementById("select").value;
    var confirmation =confirm("Votre message va etre enregistre dans "+element);
    if(confirmation==true){
        switch(element){
            case "Learn":document.getElementById("sentence2").innerHTML="- "+phrase;break;
            case "Not Learn":document.getElementById("sentence4").innerHTML="- "+phrase;break;
            case "Not Like":document.getElementById("sentence3").innerHTML="- "+phrase;break;
            default:document.getElementById("sentence").innerHTML="- "+phrase;
        }

      document.getElementById("texte").value=" ";
    }
    else{
        alert("Votre message n'a pas ete enregistres");
        document.getElementById("texte").value=" ";
    }
}


function reset(){
    document.getElementById("texte").value="";
}
