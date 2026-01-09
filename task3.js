export function ageCalculator(año, mes, dia) {
  const hoy = new Date();
  const nacimiento = new Date(año, mes, dia);

  let edad = hoy.getFullYear() - nacimiento.getFullYear();
  let diferenciaMes = hoy.getMonth() - nacimiento.getMonth();

  if (
    diferenciaMes < 0 ||
    (diferenciaMes === 0 && hoy.getDate() < nacimiento.getDate())
  ) {
    edad--;
  }
  return edad;
}
