const forecast = [17, 21, 23];
const forecast2 = [12, 5, -5, 0, 4];

const printForecast = arr => {
  console.log(arr); // (3) [17, 21, 23]
  let message = '';
  for (let i = 0; i < arr.length; i++) {
    message += `... ${arr[i]}°C in ${i + 1} Days `;
  }
  message += '...';
  return message;
};

const message = printForecast(forecast);
console.log(message); // ... 17°C in 1 Days ... 21°C in 2 Days ... 23°C in 3 Days ...

console.log(printForecast(forecast2)); // ... 12°C in 1 Days ... 5°C in 2 Days ... -5°C in 3 Days ... 0°C in 4 Days ... 4°C in 5 Days ...
