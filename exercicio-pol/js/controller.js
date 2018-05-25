$( document ).ready(function() {

    console.log( "Iniciando.." );


   $("button").click(function() {
       
        
        var txt = $("#entrada").val();
        console.log(txt);


        txtArray = txt.split("");

        console.log(txtArray);



        //            9          +                5           –            2
       inicio = txtArray[0] +  txtArray[1] + txtArray[2]+ txtArray[3] + txtArray[4];
        //            9              5           +              2            –
        meio = txtArray[0] +  txtArray[2] + txtArray[1]+ txtArray[4] + txtArray[3];
        //            9              5           2               +             -            
        fim = txtArray[0] +  txtArray[2] + txtArray[4]+ txtArray[1] + txtArray[3];

        window.onbeforeunload = function() {
            return $("#resultado").val(inicio+"\n"+meio+"\n"+fim);
         }
    });
   






     




});