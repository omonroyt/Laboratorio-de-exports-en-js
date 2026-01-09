export function costCalculator(monto) {
  const transaccion = Number(monto);
  const tarifa = 3;
  const interes = transaccion * 0.01;
  return transaccion + interes + tarifa;
}
