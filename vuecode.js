Vue.component('slide', {
  template: `
    <div :class="itemclass">
      <div class="line"></div>
      <div class="container-inner">
        <div class="container-inner_text">
            <h1 v-html="heading"></h1>
            <div class="container-inner_paragraph1" v-html="paragraph1"></div>
            <div class="container-inner_paragraph2" v-html="paragraph2"></div>
            <button class="btn btn-primary" type="button" name="button">Join the wait list</button>
        </div>
        <div class="container-inner_images">
          <img :src="imglink1"/>
          <img :src="imglink2"/>
        </div>
      </div>
    </div>`,
  props: {
    itemclass: String,
    heading: String,
    paragraph1: String,
    paragraph2: String,
    imglink1: String,
    imglink2: String
  }
});

new Vue({
  el: '.carousel-inner',
  data: {
    slides: [
      {
        id: 1,
        itemclass: 'carousel-item first active',
        heading: 'a new approach to banking',
        paragraph1: 'Easy savings, unified account view<br> and automated money management. <br><b>Finin is the future of banking.</b>',
        paragraph2: 'Be the <span>master</span> of your finances.',
        imglink1: 'img/Group 1547@3x.png',
        imglink2: 'img/Group 1513@3x.png'
      },
      {
        id: 2,
        itemclass: 'carousel-item second',
        heading: 'superb <br>savings',
        paragraph1: 'Savings account offered in partnership<br> with an RBI regulated bank.<br> A new financial experience that’s<br> <b>easier, faster and friendlier.</b>',
        paragraph2: 'No catches, <span>That’s a promise.<span>',
        imglink1: 'img/Group 1573@3x.png',
        imglink2: 'img/Group 1513@3x.png'
      },
      {
        id: 3,
        itemclass: 'carousel-item third',
        heading: 'ONE APP. <br>FOR ALL YOUR <br>MONEY NEEDS',
        paragraph1: 'SynCount helps you manage all your <br>Finances at once. a read-only view of all <br>your accounts in one place,  you’ll get <br>greater insights into your full financial picture',
        paragraph2: 'And that’s just the <span>Beginning.</span>',
        imglink1: 'img/Group 1546@3x.png',
        imglink2: 'img/Group 1519@3x.png'
      },
      {
        id: 4,
        itemclass: 'carousel-item fourth',
        heading: 'Be the Master of Your Finances',
        paragraph1: 'Stay on top of your finances with AI-powered<br> budgeting & spend insights  Keeping track of<br>your spends is now effortless & we’ll also<br>tell you if they’re higher for the upcoming month.<br><b>So no nasty surprises.</b>',
        paragraph2: 'Always a <span>Step Ahead.</span>',
        imglink1: 'img/Group 1547@3x.png',
        imglink2: 'img/Group 1534@3x.png'
      },
      {
        id: 5,
        itemclass: 'carousel-item fifth',
        heading: 'many ways<br>to save',
        paragraph1: 'We get it. Saving money is easier<br>said than done. With Finin’s STASH,<br>savings are painless and enjoyable.<br>Time to steer away from your fears,<br>be it recessions or health emergencies.',
        paragraph2: 'Be financially <span>Independent.</span>',
        imglink1: 'img/Group 1547@3x.png',
        imglink2: 'img/Group 1534@3x.png'
      },
      {
        id: 6,
        itemclass: 'carousel-item sixth',
        heading: 'We take your<br>Security, Seriously.',
        paragraph1: 'Highly secure app coupled with a savings account<br>offered in partnership with an RBI regulated bank.<br>Together we’re delivering a new financial experience<br>that’s easier, faster and friendlier.',
        paragraph2: '<b>Your data is yours, truly.  We never store your data<br> 256-bit Site-wide encryption to keep the bad guys out.</b>',
        imglink1: 'img/Group 1576@3x.png',
        imglink2: 'img/Group 1551@3x.png'
      }
    ]
  }
})
