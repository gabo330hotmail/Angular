 socket.on("tryAtencion", function(data)
    {
        console.log("Solicitud de atencion  ");
        var username=data.user;
        var sede=data.sede;
        var cola=data.cola;

        console.log("la cola es  "+cola);

       var optionsCaja ={
            host: host,
            port: port,
            path: '/akcturnos/akcturnos/tryAtencion'+'?sede='+sede+'&cola='+cola
            
        }

        var respuesta='';

	setTimeout(function(){ 
          https.get(optionsCaja, function(res) {
                res.on('data', function(data) {
                
                respuesta+=data;
                console.log("avisa caja "+respuesta);
                socket.broadcast.emit('sigAuto',respuesta);
                socket.emit('sigAuto',respuesta);
                
               
            })
          });
        }, 3000);
       
    });

