let initialInterval;
 
import element from './view.js'

let count = 0 ; 

function getSlideElements() {
  return {
    title_el: document.querySelector(".slide .content h2"),
    content_el: document.querySelector(".slide .content p"),
    slide_el: document.querySelector(".slide"),
  };
}
function setSlideTemplate({ title, content, bgColor }) {
  const { title_el, content_el, slide_el } = getSlideElements();
  title_el.innerText = title;
  title_el.classList.add("showTitle");
  content_el.innerText = content;
  content_el.classList.add("showContent");
  slide_el.style.backgroundColor = bgColor;
}
function clearSlideTemplate() {
  const { title_el, content_el } = getSlideElements();
  title_el.classList.remove("showTitle");
  content_el.classList.remove("showContent");
}



function initSlider(mycontent) {

  setSlideTemplate(mycontent[count]);

   initialInterval = setInterval(function () {

    clearSlideTemplate();

    count +=1

    if (count == mycontent.length) {

      count = 0

    }

    
    setTimeout(function () {

      setSlideTemplate(mycontent[count]);

    }, 700);

  }, 4000);


  element.next.addEventListener('click',function(){

    if (count == 0) {

      this.style.opacity = '0.6'

    }

    else {

      count -=1

      setSlideTemplate(mycontent[count]);

      this.style.opacity = '1'

    }

  })


  element.prev.addEventListener('click',function(){

    if (count == (mycontent.length)-1) {

      this.style.opacity = '0.6'


    }

    else {

      count +=1

      setSlideTemplate(mycontent[count]);

      this.style.opacity = '1'

    }

  })

  const timingHandler=(function(){
  let animate=false;
  function handler(element){
    if(animate){
      element.innerText = 'pause'
      initialInterval = setInterval(function () {
        clearSlideTemplate();

          count +=1

          if (count == mycontent.length) {

            count = 0

          }

          setTimeout(function () {

            setSlideTemplate(mycontent[count]);

          }, 700);


        }, 4000);
        animate=false;
    }else{
      clearInterval(initialInterval)
  element.innerText = 'Play'
  animate=true;
    }
  

  }


    return {
 handler
    }
  })()
  element.pause.addEventListener('click',function(){
   
    timingHandler.handler(this)
  })

 

}


function dot(mycontent) {


    for (let i = 0;i < mycontent.length;i++) {

        element.carousel.insertAdjacentHTML('beforeend',`<div class="dot">${i+1}</div>`)

    }

    for (let i = 0; i < document.getElementsByClassName('dot').length;i++) {

      document.getElementsByClassName('dot')[i].addEventListener('click',function(){

        setSlideTemplate(mycontent[i])

        count = i

      })

    }

}
initSlider([
  {
    title: "SLIDE1",
    content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint quasi,
facilis quos commodi eligendi tenetur. Fuga, rerum. Ut `,
    bgColor: "lightblue",
  },
  {
    title: "SLIDE2",
    content: `Lorem, ipsum dolor sit amet consectetur,
iure et dolorum repudiandae nulla, assumenda molestiae quod dignissimos!`,
    bgColor: "lightgreen",
  },
  {
    title: "SLIDE3",
    content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint quasi,
facilis quos commodi eligendi tenetur. Fuga, rerum. Ut mollitia vero, optio,
iure et dolorum repudiandae nulla, assumenda molestiae quod dignissimos! Ut mollitia vero, optio,
iure et dolorum repudiandae nulla, assumenda molestiae quod dignissimos`,
    bgColor: "lightgray",
  },
  {
    title: "SLIDE4",
    content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint quasi,
 assumenda molestiae quod dignissimos!`,
    bgColor: "lightskyblue",
  },
  {
    title: "SLIDE5",
    content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint quasi,
 assumenda molestiae quod dignissimos!`,
    bgColor: "brown",
  },

  
]);

dot([
  {
    title: "SLIDE1",
    content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint quasi,
facilis quos commodi eligendi tenetur. Fuga, rerum. Ut `,
    bgColor: "lightblue",
  },
  {
    title: "SLIDE2",
    content: `Lorem, ipsum dolor sit amet consectetur,
iure et dolorum repudiandae nulla, assumenda molestiae quod dignissimos!`,
    bgColor: "lightgreen",
  },
  {
    title: "SLIDE3",
    content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint quasi,
facilis quos commodi eligendi tenetur. Fuga, rerum. Ut mollitia vero, optio,
iure et dolorum repudiandae nulla, assumenda molestiae quod dignissimos! Ut mollitia vero, optio,
iure et dolorum repudiandae nulla, assumenda molestiae quod dignissimos`,
    bgColor: "lightgray",
  },
  {
    title: "SLIDE4",
    content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint quasi,
 assumenda molestiae quod dignissimos!`,
    bgColor: "lightskyblue",
  },

  {
    title: "SLIDE5",
    content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint quasi,
 assumenda molestiae quod dignissimos!`,
    bgColor: "brown",
  },
  
])
