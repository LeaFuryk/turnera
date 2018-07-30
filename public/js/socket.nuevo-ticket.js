//Establecer Conexion con el socket
var socket = io();

var label = $('#lblNuevoTicket');

socket.on('connect', function(){
  console.log('Conectado al servidor');
})

socket.on('disconnect', function(){
  console.log('Desconectado del servidor');
})

socket.on('estadoActual', function(ticketActual){
  label.text(ticketActual.actual);
})

$('button').on('click', function(){

  socket.emit('siguienteTicket', function(siguienteTicket){
    label.text(siguienteTicket);
  })

})
