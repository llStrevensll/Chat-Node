class Usuarios {
    constructor() {
        this.personas = []; //arreglo para controlar las personas
    }

    agregarPersona(id, nombre, sala) {
        let persona = { id, nombre, sala }; //asigna en persona los parametros de la función id: id, nombre: nombre

        this.personas.push(persona); //adicionar persona al arreglo 
        return this.personas;
    }

    getPersona(id) {
        let persona = this.personas.filter(persona => persona.id === id)[0]; //filter regresa un nuevo arreglo
        //retorna condicion para evaluar
        //regresa primera posicion[0]
        return persona;
    }

    getPersonas() {
        return this.personas;
    }

    getPersonasPorSala(sala) {
        let personaEnSala = this.personas.filter(persona => persona.sala === sala);
        return personaEnSala;
    }

    borrarPersona(id) {

        let personaBorrada = this.getPersona(id);

        this.personas = this.personas.filter(persona => persona.id != id); //retorna nuevo arreglo sin el id que desea borrar-> se asigna al arreglode personas this.personas

        return personaBorrada;
    }
}

module.exports = {
    Usuarios
}