export const laskeTulos = (tapahtuma) => {
  switch (tapahtuma[1]) {
    case "+":
      return tapahtuma[0] + tapahtuma[2];
    case "-":
      return tapahtuma[0] - tapahtuma[2];
    case "*":
      return tapahtuma[0] * tapahtuma[2];
    case "/":
      return tapahtuma[0] / tapahtuma[2];
  }
};
