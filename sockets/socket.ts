import { Socket } from 'socket.io';
import Server from '../classes/server';
import socketIO from 'socket.io';

export const desconectar = (cliente: Socket) => {

    cliente.on('disconnect', ( ) =>{
        console.log('Cliente Desconectado');
    });

}

export const mensaje = (cliente: Socket, io:socketIO.Server ) => {

    cliente.on('mensaje', (payload:{de:string, cuerpo:string} ) =>{
        console.log('Mensaje recibido', payload);
        io.emit('mensaje-nuevo', payload);
    });


}


export const configUser = (cliente: Socket, io:socketIO.Server) =>{
    cliente.on('configurar-usuario', (payload:{nombre:string}, callback:Function) =>{
        console.log('Configurando Usuario', payload.nombre);
        callback({
            ok:true,
            mensaje:`Usuario ${payload.nombre} configurado`
        });
    })
}
