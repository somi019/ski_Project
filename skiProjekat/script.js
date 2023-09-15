document.getElementById("dugme").addEventListener("click", function(){
    var ime = document.getElementById("ime").value;
    var prezime = document.getElementById("prezime").value;
    var adresa = document.getElementById("adresa").value;
    var broj = document.getElementById("broj").value;

    reImeIPrezime = /^[A-Z][a-z]{2,14}$/;

    if(reImeIPrezime.test(ime)){
        document.getElementById("greskaIme").style.display="none";
    }
    else{
        document.getElementById("greskaIme").style.display="block";
    }

    if(reImeIPrezime.test(prezime)){
        document.getElementById("greskaPrezime").style.display="none";
    }
    else{
        document.getElementById("greskaPrezime").style.display="block";
    }    
    
    reAdresa = /^[A-Z][a-z]{2,14}(\s[A-Z][a-z]{2,14})*\s[0-9]{1,3}$/;

    if(reAdresa.test(adresa)){
        document.getElementById("greskaAdresa").style.display="none";
    }
    else{
        document.getElementById("greskaAdresa").style.display="block";
    }

    reTelefon = /^06[0-9]{7,8}$/;

    if(reTelefon.test(broj)){
        document.getElementById("greskaBroj").style.display="none";
    }
    else{
        document.getElementById("greskaBroj").style.display="block";
    }

    //radio button provera

    var sviRadioButtons = document.getElementsByClassName("radioHrana");

        
    for(var i=0;i<sviRadioButtons.length;i++){
        if(sviRadioButtons[i].checked){
            document.getElementById("radioButtonGreska").style.display="none";
            break;
        }
        else{
            document.getElementById("radioButtonGreska").style.display="block";
        }
    }


    //provera dugmeta

    if(reImeIPrezime.test(ime) && reImeIPrezime.test(prezime) && reAdresa.test(adresa) 
        && reTelefon.test(broj)){
            for(var i=0;i<sviRadioButtons.length;i++){
                if(sviRadioButtons[i].checked){
                    document.getElementById("dugmeSuccess").style.display="block";
                    document.getElementById("myForm").reset();
                    break;
                }
                else{
                    document.getElementById("dugmeSuccess").style.display="none";
                }
            }  
    }
    else{
        document.getElementById("dugmeSuccess").style.display="none";
    }
});
