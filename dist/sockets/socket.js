"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configUser = exports.mensaje = exports.desconectar = void 0;
const desconectar = (cliente) => {
    cliente.on('disconnect', () => {
        console.log('Cliente Desconectado');
    });
};
exports.desconectar = desconectar;
const mensaje = (cliente, io) => {
    cliente.on('mensaje', (payload) => {
        console.log('Mensaje recibido', payload);
        io.emit('mensaje-nuevo', payload);
    });
};
exports.mensaje = mensaje;
const configUser = (cliente, io) => {
    cliente.on('configurar-usuario', (payload, callback) => {
        console.log('Configurando Usuario', payload.nombre);
        callback({
            ok: true,
            mensaje: `Usuario ${payload.nombre} configurado`
        });
    });
};
exports.configUser = configUser;
