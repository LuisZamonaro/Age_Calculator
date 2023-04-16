export default function dateCalculator(day, month, year) {
  const date = new Date(year, month-1, day).getTime();
//   data que o usuário inseriu
  const now = Date.now();
//   mostrar a data atual
  const diffTime = new Date(now - date);
//   vai calcular para saber a data atual
// abaixo é padrão js
  return {
    year: diffTime.getUTCFullYear() - 1970,
    month: diffTime.getUTCMonth(),
    day: diffTime.getUTCDate() - 2,
  }
}