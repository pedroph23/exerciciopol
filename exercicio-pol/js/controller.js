$( document ).ready(function() {

    console.log( "Iniciando.." );
    //$(".progress").hide;

   $("button").click(function() {
    
    //setTimeout(function(){$(".progress").show;}, 1000);

        $(".progress").hide;
        var simbolos=["+","-","*","/"];
        var txt = $("#entrada").val();
        console.log(simbolos[3]);

        
            if(txt===""){
                M.toast({html: 'Campo vazio'});
                return null;
            }else{
                txtArray = txt.split("");

                //  if(txt =null){
                //     M.toast({html: 'Campo vazio'});
                    
                        
                    
                        if(txtArray.includes(simbolos[0]) || txtArray.includes(simbolos[1]) || txtArray.includes(simbolos[2]) || txtArray.includes(simbolos[3])){
        
                            console.log(txtArray);
                    
                    
                            //            9          +                5           –            2
                          var inicio = txtArray[0] +  txtArray[1] + txtArray[2]+ txtArray[3] + txtArray[4];
                            //            9              5           +              2            –
                           var  meio = txtArray[0] +  txtArray[2] + txtArray[1]+ txtArray[4] + txtArray[3];
                            //            9              5           2               +             -            
                            var fim = txtArray[0] +  txtArray[2] + txtArray[4]+ txtArray[1] + txtArray[3];
        
                            
                            // window.onbeforeunload = function() {
                                console.log(inicio+"\n"+meio+"\n"+fim);
                                 $("#resultado").val(inicio+"\n"+meio+"\n"+fim);
                            //  }
                    
                            }else{
                    
                                M.toast({html: 'Reveja,erro nos sinais!'});
                    
                            
                            }
                       
                   // }
            }
        
        

  
        

         });

         
   






     




});