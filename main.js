var last_position_of_x, last_position_of_y;
color = "black";
width_of_line = 2;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");





/////////////////////////////////
//Empieza nueva versión
//PASO 1
//creamos variable para guardar el tamaño de la pantalla 
var width = screen.width;

//definimos el nuevo tamaño que trendrá el canvas
new_width =  screen.width - 70; 
new_height = screen.height - 300;


//en caso de que el dispositvio sea movil, el tamaño del lienzo cambiará
	if(width < 992)
	{
	//document.getElementById("myCanvas")
    canvas.width = new_width;
    //document.getElementById("myCanvas")
    canvas.height = new_height;

    //para que se detenga el desplazamiento vertical de la página
    //que no se pueda dar scroll, scrollable
    //BODY: dicmos que todo lo que queremos que no se mueva sea el body
    //STYLE: queremos modificar un estilo
    //OVERFLOW: propiedad CSS
    //HIDDEN, valor de la propiedad
    document.body.style.overflow = "hidden";
	}


    //Evento táctil 1
    //////////PASO 1
    //touchStart es como mousedown, dar click
	canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e) 
{
	console.log("my_touchstart");
  //Actividad adicional
  color = document.getElementById("color").value;
  width_of_line = document.getElementById("width_of_line").value;
  //Final de la actividad adicional
         
    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
}

//Evento mover
//será como mousedown + mousemove
canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e) 
{

	console.log("my_touchMove");
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

    // old same old as the paint web app
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    console.log("Last position of x and y coordinates = ");
    console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);

    console.log("Current position of x and y coordinates = ");
    console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();

    last_position_of_x = current_position_of_touch_x; 
    last_position_of_y = current_position_of_touch_y;
    
    // end of old same old as the paint web app
}











//////////////////////////
//////////////////////////
//////Para WEB

    var mouseEvent = "empty"
    //PASO 2
    canvas.addEventListener("mousedown", my_mousedown);
    function my_mousedown(e)
    {
        //inicio de la actividad adicional
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        //final de la actividad adicional

        //PASO 2
        ///////////////////////////////////////////
        //Agregar el guardar este valor cuando se declic al mouse
        mouseEvent = "mouseDown";
        /////////////////////////////////////////////
    }
    



    //PASO 3
    //evento levantar el mouse
    canvas.addEventListener("mouseup", my_mouseup);
    function my_mouseup(e)
    {
        mouseEvent = "mouseUP";
    }

    //PASO 4
    //evento dejar el área
    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave(e)
    {
        mouseEvent = "mouseleave";
    }





    //PASO 5
    //evento cuando se mueve el mouse sobre el lienzo
    canvas.addEventListener("mousemove", my_mousemove);
    function my_mousemove(e)
    {
        //Para obtener las coordenadas de la posicion del mouse
        ///lo guardamos en una variable
        current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
        current_position_of_mouse_y = e.clientY - canvas.offsetTop;


        //revisamos si es que el valor de la variable es igual a dar clic
        if (mouseEvent == "mouseDown") {
            //en caso de que si se esté dando clic en ese mismo momento
            //podremos dibujar en la pantalla
            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.lineWidth = width_of_line;


            //para decirle donde iniciará el trazo de la línea
            console.log("Last position of x and y coordinates = ");
            console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
            ctx.moveTo(last_position_of_x, last_position_of_y);


            //donde terminarán los trazos de las líneas
            console.log("Current position of x and y coordinates = ");
            console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
            ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
            ctx.stroke();
        }

        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
    }

    //PASO 3
    //evento levantar el mouse
    canvas.addEventListener("mouseup", my_mouseup);
    function my_mouseup(e)
    {
        mouseEvent = "mouseUP";
    }

    //PASO 4
    //evento dejar el área
    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave(e)
    {
        mouseEvent = "mouseleave";
    }


//////////////////////////
//////////////////////////
////////////////////////////////


///////



////para reestablecer el espacio, borrarlo
    // old same old as the paint web app
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
    // end of old same old as the paint web app
