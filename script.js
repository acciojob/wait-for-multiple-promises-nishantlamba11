

const output = document.getElementById("output");
  const startTime = performance.now();


  function createPromise() {
    const time = Math.random() * 2 + 1; 
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(time.toFixed(3));
      }, time * 1000);
    });
  }


  const promises = [createPromise(), createPromise(), createPromise()];

  Promise.all(promises).then(times => {
    const totalTime = ((performance.now() - startTime) / 1000).toFixed(3);
    output.innerHTML = ""; 

 
    times.forEach((time, index) => {
      output.innerHTML += `<tr><td>Promise ${index + 1}</td><td>${time}</td></tr>`;
    });


    output.innerHTML += `<tr><td>Total</td><td>${totalTime}</td></tr>`;
  });
