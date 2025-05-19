
// let input = document.getElementById('inputbox');
// let buttons = document.querySelectorAll('button');

// let string = "";
// let arr = Array.from(buttons);
// arr.forEach(button => {
//     button.addEventListener('click', (e) => {
//         if (e.target.innerHTML == '=') {
//             string = eval(string);
//             input.value = string;
//         } else  {
//             string += e.target.innerHTML;
//             input.value = string;
//         } 
        
//     });
// });


 let input = document.getElementById('inputbox');
  let buttons = document.querySelectorAll('button');

  let string = "";
  let arr = Array.from(buttons);

  arr.forEach(button => {
    button.addEventListener('click', (e) => {
      let btnText = e.target.innerHTML;

      if (btnText === '=') {
        try {
          string = eval(string);
          input.value = string;
        } catch {
          input.value = "Error";
          string = "";
        }
      } else if (btnText === 'Ac') {
        string = "";
        input.value = string;
      } else if (btnText === 'Del') {
        string = string.slice(0, -1);
        input.value = string;
      } else if (btnText === '%') {
        try {
          string = eval(string) / 100;
          input.value = string;
        } catch {
          input.value = "Error";
          string = "";
        }
      } else {
        string += btnText;
        input.value = string;
      }
    });
  });
