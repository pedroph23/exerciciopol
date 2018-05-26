$( document ).ready(function() {

    console.log( "Iniciando.." );
    //$(".progress").hide;

	function trim(str) {
		return str.replace(/\s{2,}/g, '');
	}

   $("button").click(function() {
    
    //setTimeout(function(){$(".progress").show;}, 1000);

        $(".progress").hide;
        var simbolos=["+","-","*","/"];
        var txt = $("#entrada").val();
	var txtNovo = trim(txt);
        console.log(txt);

        
            if( txtNovo===""){
                M.toast({html: 'Campo vazio'});
                return null;
            }else{
                txtArray =  txtNovo.split("");

                //  if(txt =null){
                //     M.toast({html: 'Campo vazio'});
                    
                        
                    
                        if(txtArray.includes(simbolos[0]) || txtArray.includes(simbolos[1]) || txtArray.includes(simbolos[2]) || txtArray.includes(simbolos[3])){
        
                            console.log(txtArray);
                    
                    
                            //            9          +                5           –            2
                          var inicio = txtArray[0] +  txtArray[1] + txtArray[2]+ txtArray[3] + txtArray[4];
 				//            9          +                5         2		  –            
                          var meio1= txtArray[0] +  txtArray[1] + txtArray[2]+ txtArray[4] + txtArray[3];
                            //            9              5           +              2            –
                           var  meio2 = txtArray[0] +  txtArray[2] + txtArray[1]+ txtArray[4] + txtArray[3];
                            //            9              5           2               +             -            
                            var fim = txtArray[0] +  txtArray[2] + txtArray[4]+ txtArray[1] + txtArray[3];
        
                            
                            window.onbeforeunload = function() {
                                console.log(inicio+"\n"+meio1+"\n"+meio2+"\n"+fim);
                                 return $("#resultado").val(inicio+"\n"+meio1+"\n"+meio2+"\n"+fim);
                             }
                    
                            }else{
                    
                                M.toast({html: 'Reveja,erro nos sinais!'});
                    
                            
                            }
                       
                   // }
            }
        
        

  
        

         });

         
   






     




});