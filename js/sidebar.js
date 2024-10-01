/**
* Autor : Luis Luzardo
  jl
  ADSI - SENA
  Barranquilla - Colombia
  Fecha Inicio : Jueves 26 sept
  Hora  Inicio : 09:00 am
  Descripción  : Colapsible Sidebar.
  manejo de eventos y efectos.
*/


//evento clic botón menuside

  const menuside = document.getElementById("idbtnside");
  const sidebar  = document.getElementById("mySidebar");
  const btnside  = document.getElementById("idbtnside");
  
  const op1 = document.getElementById("opside1");
  const op2 = document.getElementById("opside2");
  const op3 = document.getElementById("opside3");
  const op4 = document.getElementById("opside4");
  const op5 = document.getElementById("opside5");
  const op6 = document.getElementById("opside6"); 
  const op7 = document.getElementById("opside7");  
  const op8 = document.getElementById("opside8");
  const op9 = document.getElementById("opside9");
  
  const mainpage = document.getElementById("mainpage");  
  
  btnside.style.background = "blue";
  sidebar.style.width = "70px";
  
  //texto opciones
  op1.innerHTML = ""; op2.innerHTML = ""; op3.innerHTML = ""; op4.innerHTML = "";
  op5.innerHTML = ""; op6.innerHTML = ""; op7.innerHTML = ""; op8.innerHTML = "";
  op9.innerHTML = "";
              
  //menu flotante : top              
  
    if (menuside) {
    menuside.addEventListener("click", (e) => {
    
      if (sidebar.style.width === "310px") {
        // Si el sidebar está abierto, ciérralo : #0000ff
        sidebar.style.width = "70px";
        sidebar.style.height = "620px";
        
        //efectos para el boton hamb: cambiar a ☰
        btnside.innerHTML = "☰  "; // Cambia el icono a "☰ "
        
        //texto opciones
        op1.innerHTML = ""; op2.innerHTML = ""; op3.innerHTML = ""; op4.innerHTML = "";
        op5.innerHTML = ""; op6.innerHTML = ""; op7.innerHTML = ""; op8.innerHTML = "";
        op9.innerHTML = "";               
                         
        //desplegar pagina a la derecha...
        /* mainpage.style= "margin-left : 70px"; */       
        
      }
      else {
        // Si el sidebar está cerrado, ábrelo
        sidebar.style.width = "310px";
        sidebar.style.height = "620px";
        //efectos para el boton hamb: cambiar a x
        btnside.innerHTML = "X "; // Cambia el icono a "X"
        
        //texto opciones
        op1.innerHTML = "Inicio";
        op2.innerHTML = "Mision";
        op3.innerHTML = "Vision";
        op4.innerHTML = "Aspectos Legales";
        op5.innerHTML = "Devocionales";
        op6.innerHTML = "Intercesión";
        op7.innerHTML = "Eventos";
        op8.innerHTML = "Sedes Asociadas";
        op9.innerHTML = "Pied de Pagina";
        
        //quitar margen  a la ozquierda... 
        /* mainpage.style= "margin-left : 70px"; */
        
      }
             
    });
}  
    
    
    
    
    
  

