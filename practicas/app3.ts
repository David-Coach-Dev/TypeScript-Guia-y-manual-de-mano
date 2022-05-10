type movil = {
  carroceria: string;
  modelo: string;
  antibalas: boolean;
  pasajeros: Number;
  disparar?: () => void;
}// Objetos
var batiMovil: movil = {
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros:4
};

var bumblebee:movil = {
  carroceria: "Amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros:4,
  disparar(){ // El método disparar es opcional
    console.log("Disparando");
  }
};

type ficha = {
    nombre: string;
    edad: number|undefined;
    mutante: boolean;
  }
// Villanos debe de ser un arreglo de objetos personalizados
var villanos: ficha[] = [{
  nombre:"Lex Luthor",
  edad: 54,
  mutante:false
},{
  nombre: "Erik Magnus Lehnsherr",
  edad: 49,
  mutante: true
},{
  nombre: "James Logan",
  edad: undefined,
  mutante: true
}];

// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis
type Charles = {
  poder: String;
  estatura: Number;
}

var charles = {
  poder:"psiquico",
  estatura: 1.78
};
type Apocalipsis = {
  lider: boolean;
  miembros: string[];
}


var apocalipsis = {
  lider:true,
  miembros: ["Magneto","Tormenta","Psylocke","Angel"]
}

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
var mystique:Charles|Apocalipsis;

mystique = charles;
mystique = apocalipsis;
