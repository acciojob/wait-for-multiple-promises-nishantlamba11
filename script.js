\<script>
  const output = document.getElementById("output");

  function createPromise(fixedTime) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(fixedTime.toFixed(3));
      }, fixedTime * 1000);
    });
  }

  const promises = [
    createPromise(2),
    createPromise(1),
    createPromise(3)
  ];

  Promise.all(promises).then(times => {
    output.innerHTML = "";

    times.forEach((time, index) => {
      output.innerHTML += `<tr><td>Promise ${index + 1}</td><td>${time}</td></tr>`;
    });

    const totalTime = Math.max(...times.map(Number)).toFixed(3);
    output.innerHTML += `<tr><td>Total</td><td>${totalTime}</td></tr>`;
  });
</script>
