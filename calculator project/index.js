// let string = "";
// let buttons = document.querySelectorAll(.button);
// Array.from(buttons).forEach(function (button) {
//     button.addEventListener('click', (e) => {
//         if (e.target.innerHTML == '=') {
//             string = eval(string);
//             document.querySelector('input').value = string;
//         }
//         else {
//             console.log(e.target);
//             string = string + e.target.innerHTML;
//             document.querySelector('input').value = string;

//         }

//     });
// })

let str = " ";

let btn = document.querySelectorAll('#btn')
let text1 = document.getElementById('text1')
let flex = document.querySelectorAll('.flex')
let Clear = document.querySelector('.Clear')
let number3 = document.querySelector('.Number3')

Array.from(flex).forEach((flex) => {          //Array run in nevery number button then run foreach
    flex.addEventListener('click' , (e) => {    // If user click on the any button
        if(e.target.innerHTML == '='){     // if user click on the = btn
            str = eval(str);                         // this usedd to calculation
            parseInt(document.querySelector('#text1').value =  str.toFixed(3));   // print the output on the text
        }
        else if(e.target.innerHTML == 'AC'){      // if click on the AC then clear all data from text
            str = ''                                 // Mention that we have empty string 
            document.querySelector('#text1').value = "";   //data print blank on the

         }
         else if(e.target.innerHTML == 'M+'){      // if click on the M+ then suare the value
            str = eval(str);                                 // this usedd to calculation 
            document.querySelector('#text1').value = str * 2 ;  // print the output on the text

         }
         else if(e.target.innerHTML == 'M-'){            // if click on the M+ then suare the value
            str = eval(str);                                  // this usedd to calculation
            document.querySelector('#text1').value = str - 2;   // print the output on the text
         }
         else{
            console.log(e.target)
            str = str + e.target.innerHTML;         //suppose clicked on 1 then print will be 1
            document.querySelector('#text1').value = str;    // print 1 on the text
         }

  
     
    
     })
})