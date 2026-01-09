export class FriendAge {
  constructor(nombre, año, mes, dia) {
    this.name = nombre;
    this.year = año;
    this.month = mes;
    this.day = dia;
  }

  returnAge() {
    const hoy = new Date();
    const nacimiento = new Date(this.year, this.month, this.day);

    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    let diferenciaMes = hoy.getMonth() - nacimiento.getMonth();

    if (
      diferenciaMes < 0 ||
      (diferenciaMes === 0 && hoy.getDate() < nacimiento.getDate())
    ) {
      edad--;
    }

    return `${this.name} is ${edad} today!`;
  }
}
