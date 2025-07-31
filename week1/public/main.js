function calculateSum() {
  const n1 = document.getElementById('num1').value;
  const n2 = document.getElementById('num2').value;

  fetch(`/add?num1=${n1}&num2=${n2}`)
    .then(response => response.text())
    .then(result => {
      document.getElementById('result').innerText = result;
    })
    .catch(error => {
      document.getElementById('result').innerText = 'Error: ' + error;
    });
}
