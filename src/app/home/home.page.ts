// home.page.ts
import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // @ViewChild('slideWithNav', { static: false }) slideWithNav: IonSlides;
  @ViewChild('slideWithNav2', { static: false }) slideWithNav2: IonSlides;
  // @ViewChild('slideWithNav3', { static: false }) slideWithNav3: IonSlides;

  sliderOne: any;
  sliderTwo: any;
  sliderThree: any;


  //Configuration for each Slider
  slideOptsTwo = {
    initialSlide: 1,
    slidesPerView: 1.2,
    loop: true,
    centeredSlides: true,
    spaceBetween: 0,
    virtual: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }
  };

  

  constructor(
  ) {
    //Item object for Food
    this.sliderTwo =
    {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems: [
        {
          id: 324,
          img: 'https://thumbs.dreamstime.com/z/panorama-beautiful-green-forest-summer-nature-scenery-yellow-wild-flowers-panorama-beautiful-green-forest-landscape-131579660.jpg'
        },
        {
          id: 321,
          img: 'https://thumbs.dreamstime.com/z/winter-landscape-fair-trees-under-snow-scenery-tourists-christmas-holidays-trampled-path-snowdrifts-winter-108808354.jpg'
        },
        {
          id: 435,
          img: 'https://thumbs.dreamstime.com/z/autumn-forest-nature-vivid-morning-colorful-forest-sun-rays-branches-trees-scenery-nature-sunlight-105116502.jpg'
        },
        {
          id: 524,
          img: 'https://thumbs.dreamstime.com/z/panoramic-russian-winter-landscape-forest-beautiful-frozen-river-sunset-scenery-winter-trees-water-blue-sky-92751564.jpg'
        },
        {
          id: 235,
          img: 'https://thumbs.dreamstime.com/z/bergen-night-scenery-norway-cityscape-39557386.jpg'
        }
      ]
    };
  }

  //Move to Next slide
  slideNext(object, slideView) {
    slideView.slideNext(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });
  }

  //Move to previous slide
  slidePrev(object, slideView) {
    slideView.slidePrev(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });;
  }

  //Method called when slide is changed by drag or navigation
  SlideDidChange(object, slideView) {
    this.checkIfNavDisabled(object, slideView);
  }

  //Call methods to check if slide is first or last to enable disbale navigation  
  checkIfNavDisabled(object, slideView) {
    this.checkisBeginning(object, slideView);
    this.checkisEnd(object, slideView);
  }

  checkisBeginning(object, slideView) {
    slideView.isBeginning().then((istrue) => {
      object.isBeginningSlide = istrue;
    });
  }
  checkisEnd(object, slideView) {
    slideView.isEnd().then((istrue) => {
      object.isEndSlide = istrue;
    });
  }

}
