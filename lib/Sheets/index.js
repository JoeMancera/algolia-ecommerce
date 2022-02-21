const SHEETS_URI = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQL0sCYLy1NSdjhsa6Wjw_ltdYeijaOz5QXwxnUUySky5Be3wxjO9KfNoqdXM9kYsXGPNckCchPqk97/pub?output=csv'

export const getItemsPrice = async () => {
  let array = [];
  let prices = [];

  await fetch(`${SHEETS_URI}`)
    .then((response) => response.blob())
    .then(function (myBlob) {
      myBlob.text().then((text) => (array = text.toString().split("\r\n")));
    });

  let headers = array[0].split(",");

  for (let i = 1; i < array.length - 1; i++) {
    let obj = {};

    let str = array[i];

    let properties = str.split(",");

    for (let j in headers) {
      obj[headers[j]] = properties[j];
    }

    prices.push(obj);
  }

  return prices;
}