
var fieldsToCheck = ['invoice_number', 'estimate_number'],
    i = 0,
    numberLength = 4,
    numberField;

do {
  numberField = document.getElementById(fieldsToCheck[i]);
  i++;
} while(!numberField && i < fieldsToCheck.length);

if(!!numberField) {
  var hexId;
  do {
    var hexId = (Math.random()*0xFFFF<<0).toString(16);
  } while(hexId.length < numberLength);
  numberField.value = hexId;
}
