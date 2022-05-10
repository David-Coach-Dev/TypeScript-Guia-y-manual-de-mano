// Funciones Básicas
(()=>{
  function sumar(a: number, b: number): number{
    return a + b;
  }
  const sumar1 = (a: number, b: number): number => a + b;
  const contar = function( heroes:string[] ):number{
    return heroes.length;
  }
  const superHeroes:[string, string, string, string]= ["Flash", "Arrow", "Superman", "Linterna Verde"];
  contar(superHeroes);
  //Parametros por defecto
  function llamarBatman( llamar:boolean=true ):void{
    if( llamar ){
      console.log("Bati Señal Activada");
    }
  }
  const llamarBatman1=(llamar: boolean = true): void => {
    if (llamar) {
      console.log("Bati Señal Activa");
    }
  }
  llamarBatman();
  // Rest?
  function unirHeroes(...personas:string[] ):string{
    return personas.join(", ");
  }
  const unirHeroes1 = (...personas: string[]): string => personas.join(', ');
  // Tipo función
  function noHaceNada(numero: number, texto:string, booleano:boolean, arreglo:string[]):void {
  }
  const noHacerNada1 = (numero: number, texto: string, booleano: boolean, arreglo: string[]): void => { };
  // Crear el tipo de función que acepte la función "noHaceNada"
  let noHaceNadaTampoco:(x:number, t:string, b:boolean, a:string[])=>void;
  noHaceNadaTampoco = noHaceNada;
})()