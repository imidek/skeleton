function addClickListener(element, className, attribute, resultText){
  element.addEventListener('click',(e)=>{
    console.log(resultText);
    if(!element.hasAttribute(attribute)){
      element.classList.add(className);
      element.setAttribute(attribute, true)
      results.textContent+= resultText+ '\n'
      const p = document.createElement('p');
      p.textContent = '';
      results.appendChild(p);
    }
  })
}


let shoulderRight = document.querySelector('.shoulderRight')
let shoulderLeft = document.querySelector('.shoulderLeft')
let elbowRight = document.querySelector('.elbowRight')
let elbowLeft = document.querySelector('.elbowLeft')
let wristRight = document.querySelector('.wristRight')
let wristLeft = document.querySelector('.wristLeft')
let handRight = document.querySelector('.handRight')
let handLeft = document.querySelector('.handLeft')

let c = document.querySelector('.c')
let th = document.querySelector('.th')
let l = document.querySelector('.l')
let s = document.querySelector('.s')

let hipRight = document.querySelector('.hipRight')
let hipLeft = document.querySelector('.hipLeft')
let kneeRight = document.querySelector('.kneeRight')
let kneeLeft = document.querySelector('.kneeLeft')
let ankleRight = document.querySelector('.ankleRight')
let ankleLeft = document.querySelector('.ankleLeft')
let footRight = document.querySelector('.footRight')
let footLeft = document.querySelector('.footLeft')


let results = document.querySelector('.results')


document.addEventListener('click',e=>{
  console.log(e.pageX, e.pageY);
})
// elbowLeft.addEventListener('click',e=>{
//   console.log('najechales lewy lokieć!');
//   if(!elbowLeft.hasAttribute('disabled')){
//     elbowLeft.classList.add('clicked');
//     elbowLeft.setAttribute('disabled', true)
//     results.textContent+='Dolegliwości okolicy lewego łokcia.\n'
//   }

// })

elbowRight.addEventListener('mouseover',e=>{
  console.log('najechales prawy łokieć!');
})

addClickListener(elbowRight,'clicked','disabled','Dolegliwości okolicy prawego łokcia.')
addClickListener(elbowLeft,'clicked','disabled','Dolegliwości okolicy lewego łokcia.')
addClickListener(shoulderRight,'clicked','disabled','Dolegliwości okolicy prawego barku.')
addClickListener(shoulderLeft,'clicked','disabled','Dolegliwości okolicy lewego barku.')
addClickListener(wristRight,'clicked','disabled','Dolegliwości okolicy prawego nadgarstka.')
addClickListener(wristLeft,'clicked','disabled','Dolegliwości okolicy lewego nadgarstka.')
addClickListener(handRight,'clicked','disabled','Dolegliwości okolicy prawej ręki.')
addClickListener(handLeft,'clicked','disabled','Dolegliwości okolicy lewej ręki.')

addClickListener(hipRight,'clicked','disabled','Dolegliwości okolicy prawego biodra.')
addClickListener(hipLeft,'clicked','disabled','Dolegliwości okolicy lewego biodra.')
addClickListener(kneeRight,'clicked','disabled','Dolegliwości okolicy prawego kolana.')
addClickListener(kneeLeft,'clicked','disabled','Dolegliwości okolicy lewego kolana.')
addClickListener(ankleRight,'clicked','disabled','Dolegliwości okolicy prawego stawu skokowego.')
addClickListener(ankleLeft,'clicked','disabled','Dolegliwości okolicy lewego stawu skokowego.')
addClickListener(footRight,'clicked','disabled','Dolegliwości okolicy prawej stopy.')
addClickListener(footLeft,'clicked','disabled','Dolegliwości okolicy lewej stopy.')


addClickListener(c,'clicked','disabled','Dolegliwości okolicy kręgosłupa szyjnego.')
addClickListener(th,'clicked','disabled','Dolegliwości okolicy kręgosłupa piersiowego.')
addClickListener(l,'clicked','disabled','Dolegliwości okolicy kręgosłupa lędźwiowego.')
addClickListener(s,'clicked','disabled','Dolegliwości okolicy krzyżowej.')
