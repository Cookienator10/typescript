// clases abstractas en typescript
// las clsaeses abstratactas son las que no se pueden instanciar directamente y sirven par otras clases
//definen una interfaz comun que deben implementar las subclases

// caracteristicas clases abstractas
// No pueden crear instancias directamente de una clase asbstracta
// Puedsen contener metodos abstractos pero no implementados.
//Los metodos abstractos deben ser implementados por las subclasesconcretas
//Pueden contener metodos concretos con implementacion.

abstract class Person {
    name: string; 

    constructor(name: string) {
        this.name = name;
    }
display (): void {
    console.log(this.name);
    
}
abstract find(persona:string): Person;
}

class Employee extends Person {
empCode: number;
constructor (name: string, code: number) {
    super(name)
 this.empCode = code; 
}
find(name: string): Person {
return new Employee (name, 1);    
}

}

let emp: Person = new Employee("James",100);
emp.display ();

let emp2: Person = emp.find ('Steve')
emp2.display ();

abstract class Animal {
abstract makesound(): void;

move(): void {
    console.log("moving along!");
    
}
}
 class dog extends Animal {
    makesound() {
        console.log("Woof woof!");
        
    }
 }
const d = new dog ();
d.makesound();
d.move();

abstract class Shape {
    abstract getArea(): Number;
}

class Circle extends Shape {
    constructor(private radius: number) {
        super();
    }
 getArea() {
    return Math.PI * this.radius ** 2;
 }
}
const x = new Circle(3);
console.log(x.getArea());


abstract class Persona {
    abstract nombre: string;
    abstract edad: number;

    abstract saludar (): void;
}
class Estudiante extends Persona {
    constructor(public nombre: string, public edad: number) {
        super();
    }

saludar (): void {

    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    }
}
 const estudiante = new Estudiante('Juan', 23);
 estudiante.saludar();

 class Employee1 {
    public empName: string;
    protected empCode: number;
     
        constructor(name: string, code: number) {
            this.empName = name;
            this.empCode = code;
        }
    }

    class salesEmployee extends Employee1 {
        private department: string;

        constructor(name: string, code: number, department: string ) {
            super (name, code);
            this.department = department;
        }
        mostrar () {
            console.log(this.empName);
            console.log(this.empCode);
            console.log(this.department);
    }
    }
    
    let emp3 = new salesEmployee("John Smith", 123, "Sales");
    emp3.empName = "Jane Doe";
   emp3.mostrar();


//que es static en ts?
//es una palabra clave se usa para detectar mieembros estaticos eb una ckase
// estos son accesibles sin instanciar un obueto.

class MiClase {
    static propiedadEstatica = "propiedad estatica";
    static mostrar() {
     return "Hola desde la clase";
    } 
}
console.log(MiClase.propiedadEstatica);
console.log(MiClase.mostrar());


class Constantes {
 static readonly PI = 3.14;
}

console.log(Constantes.PI)

class Punto {
    constructor(private _x: number, private _y: number) {}
    get x() {
        return this._x;
    }
    set x(value: number) {
        this._x = value;
    }

    get y() {
        return this._y;
    }
    set y(value: number) {
    this._y = value;
    }

    static origen() {
        return new Punto (2,7);
    }
}

let p = Punto.origen();
console.log(p.x);

