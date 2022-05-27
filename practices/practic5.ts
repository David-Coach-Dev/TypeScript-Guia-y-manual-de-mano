(() => {
  //crear interfaces
  // Cree una interfaz para validar el auto (el valor enviado por parametro)
  //Ejercicio # 1
  interface Auto {
    encender: boolean;
    velocidadMaxima: number;
    acelear(): void;
  }
  const conducirBatimovil = (auto:Auto): void => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelear();
  };
  const batimovil: Auto = {
    encender: false,
    velocidadMaxima: 0,
    acelear() {
      console.log("...... run!!!");
    },
  };
  //Ejercicio # 2
  // Cree una interfaz con que permita utilizar el siguiente objeto
  // utilizando propiedades opcionales
  interface Guason{
    reir?: boolean;
    comer?: boolean;
    llorar?: boolean;
  }
  const guason:Guason = {
    reir: true,
    comer: true,
    llorar: false,
  };
  const reir = (guason:Guason): void => {
    if (guason.reir) {
      console.log("JAJAJAJA");
    }
  };
  //Ejercicio # 3
  // Cree una interfaz para la siguiente función
  interface Ciudad {
    (ciudadanos: string[]): number;
  }
  const ciudadGotica:Ciudad = (ciudadanos: string[]): number => {
    return ciudadanos.length;
  };
  //Ejercicio # 4
  // Cree una interfaz que obligue crear una clase
  // con las siguientes propiedades y métodos
  /*
propiedades:
- nombre
- edad
- sexo
- estadoCivil
- imprimirBio(): void // en consola una breve descripción.
*/
  interface Humano {
    nombre: string;
    edad: number;
    sexo: string;
    estadoCivil: string;
    imprimirBio():string;
  }
  class Persona implements Humano{
    public nombre: string;
    public edad: number;
    public sexo: string;
    public estadoCivil: string;
    imprimirBio(): string {
      return `Hola, mi nombre es ${this.nombre}`;
    }
  }
})();
