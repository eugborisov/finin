Vue.component('slide', {
  template: `
    <div :class="itemclass">
      <div class="line"></div>
      <div class="container-inner">
        <div class="container-inner_text">
            <h1 v-html="heading"></h1>
            <div class="container-inner_paragraph1" v-html="paragraph1"></div>
            <div class="container-inner_paragraph2" v-html="paragraph2"></div>
            <button class="btn btn-primary button cta-button" type="button" name="button">Join the wait list</button>
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
        imglink2: 'img/Group 1500@3x.png'
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
});

Vue.component('member', {
  template: `
  <a :href="pagelink">
  <div class="team_member">
    <img :src="imglink" alt="team member">
    <span class="team_name"><b>{{ firstname }}</b> {{ lastname }}</span>
    <span class="team_role" :class="color">{{ role }}</span>
  </div>
  </a>
  `,
  props: {
    pagelink: String,
    imglink: String,
    firstname: String,
    lastname: String,
    color: String,
    role: String
  }
});

/* Team members objects */

const ceo = {
  pagelink: '#ceo',
  firstname: 'Suman',
  lastname: 'Gandham',
  color: 'blue',
  role: 'Founder&CEO'
}

const coo = {
  pagelink: '#coo',
  firstname: 'Sudheer',
  lastname: 'Maram',
  color: 'green',
  role: 'Co - Founder & COO'
}

const cto = {
  pagelink: '#cto',
  firstname: 'Markish',
  lastname: 'R',
  color: 'red',
  role: 'CTO'
}

const gp = {
  pagelink: '#gp',
  firstname: 'Sanmaya',
  lastname: 'Mohanty',
  color: 'blue',
  role: 'Growth + Product'
}

const ld = {
  pagelink: '#ld',
  firstname: 'Rupesh',
  lastname: 'Dwivedi',
  color: 'green',
  role: 'Lead Designer'
}

const dev = {
  pagelink: '#dev',
  firstname: 'Yashovardhan',
  lastname: 'Agrawal',
  color: 'red',
  role: 'Developer'
}

/* Advisors objects */

const ad1 = {
  pagelink: '#ad1',
  firstname: 'Nekko Capital',
  color: 'green'
}

const ad2 = {
  pagelink: '#ad2',
  firstname: 'Viswadeep',
  lastname: 'Chavali',
  color: 'red',
  role: 'VP - Digital & Open Banking, Equitas'
}

new Vue({
  el: '.team',
  data: {
    members: [
      {
        id: 1,
        pagelink: ceo.pagelink,
        imglink: 'img/ceo.png',
        firstname: ceo.firstname,
        lastname: ceo.lastname,
        color: ceo.color,
        role: ceo.role
      },
      {
        id: 2,
        pagelink: coo.pagelink,
        imglink: 'img/coo.png',
        firstname: coo.firstname,
        lastname: coo.lastname,
        color: coo.color,
        role: coo.role
      },
      {
        id: 3,
        pagelink: cto.pagelink,
        imglink: 'img/cto.png',
        firstname: cto.firstname,
        lastname: cto.lastname,
        color: cto.color,
        role: cto.role
      },
      {
        id: 4,
        imglink: 'img/gp.png',
        pagelink: gp.pagelink,
        firstname: gp.firstname,
        lastname: gp.lastname,
        color: gp.color,
        role: gp.role
      },
      {
        id: 5,
        imglink: 'img/ld.png',
        pagelink: ld.pagelink,
        firstname: ld.firstname,
        lastname: ld.lastname,
        color: ld.color,
        role: ld.role
      },
      {
        id: 6,
        imglink: 'img/dev.png',
        pagelink: dev.pagelink,
        firstname: dev.firstname,
        lastname: dev.lastname,
        color: dev.color,
        role: dev.role
      }
    ]
  }
});

Vue.component('advisor', {
  template: `
  <a :href="pagelink">
  <div class="team_member">
    <img :src="imglink" alt="advisor">
    <span class="team_name"><b>{{ firstname }}</b> {{ lastname }}</span>
    <span class="team_role" :class="color">{{ role }}</span>
  </div>
  </a>
  `,
  props: {
    pagelink: String,
    imglink: String,
    firstname: String,
    lastname: String,
    color: String,
    role: String
  }
});

new Vue({
  el: '.advisors',
  data: {
    advisors: [
      {
        id: 1,
        pagelink: ad1.pagelink,
        imglink: 'img/ad1.png',
        firstname: ad1.firstname
      },
      {
        id: 2,
        pagelink: ad2.pagelink,
        imglink: 'img/ad2.png',
        firstname: ad2.firstname,
        lastname: ad2.lastname,
        color: ad2.color,
        role: ad2.role
      },

    ]
  }
});

Vue.component('page',{
  template: `
  <div class="page d-none" :class="color" :id="anchor">
    <div class="info">
      <img src="img/left-arrow.svg" alt="back" class="link-arrow">
      <h3><b>{{ firstname }}</b> {{ lastname }}</h3>
      <span class="page_role"> {{ role }}</span>
      <div class="page_links" v-html="links">
      </div>
      <div class="page_text" v-html="text">
      </div>
    </div>
    <div class="pic">
        <div class="pic_background">
          <img :src="imglink" alt="team member picture">
        </div>
    </div>
  </div>
  `,
  props: {
    anchor: String,
    color: String,
    firstname: String,
    lastname: String,
    role: String,
    links: String,
    text: String,
    imglink: String
  }
});

new Vue({
  el: '#pages',
  data: {
    pages: [
      {
        id: 1,
        anchor: ceo.pagelink,
        color: ceo.color,
        firstname: ceo.firstname,
        lastname: ceo.lastname,
        role: ceo.role,
        links: '<a href="#"><img src="img/l.svg" alt="linkedin"></a><a href="#"><img src="img/i.svg" alt="instagram"></a><a href="#"><img src="img/f.svg" alt="facebook"></a><a href="#"><img src="img/t.svg" alt="twitter"></a>',
        text: '<p>Suman is the co-founder and CEO of Finin. Having a long-held interest in technology. He envisions that by founding Finin, everyone will have access to a totally refreshed relationship with their money, and more importantly, their spending.</p><p>Before Finin, Suman was at Nekko Capital Venture Capital based out of Barcelona, closely monitoring, mentoring and investing in startups within the European Fin-Tech landscape. He has also worked with Zapper as the Head of Tech for Spain.</p><p>With experience in combining market and technology understanding in creating and driving the right products and portfolio to the market. Suman has the experience of founding and scaling multiple startups from the ground up including voz.io and letmecallu.com as feathers to his cap.</p>',
        imglink: 'img/ceo-big.png'
      },
      {
        id: 2,
        anchor: coo.pagelink,
        color: coo.color,
        firstname: coo.firstname,
        lastname: coo.lastname,
        role: coo.role,
        links: '<a href="#"><img src="img/l-green.svg" alt="linkedin"></a><a href="#"><img src="img/t-green.svg" alt="twitter"></a>',
        text: '<p>Subbia Oversees all the Product aspects of Finin. An MBA from SP Jain School Of Global Management and Having worked as a product manager at Rupay Cards at NPCI. He has over 10 years of experience in the Banking Industry and delivered entire Prepaid, Debit card and Payment Gateway projects.</p>',
        imglink: 'img/coo-big.png'
      },
      {
        id: 3,
        anchor: cto.pagelink,
        color: cto.color,
        firstname: cto.firstname,
        lastname: cto.lastname,
        role: cto.role,
        links: '<a href="#"><img src="img/l-red.svg" alt="linkedin"></a><a href="#"><img src="img/t-red.svg" alt="twitter"></a>',
        text: '<p>Markish is the CTO of Finin. With experience as a Techno - functional executive over 15 years. He is a versatile techie who has been into computers & coding since 1993. He has been with Goibibo / Makemytrip as Senior Director of Engineering since 2016 and led the supply side engineering and product initiatives.</p><p>Being a 3x Co-founder & CTO in the last 10 years, Markish has hands-on experience in the having founded Magicrooms.in, Koruko.com and Trip38.com to name a few.</p>',
        imglink: 'img/cto-big.png'
      },
      {
        id: 4,
        anchor: gp.pagelink,
        color: gp.color,
        firstname: gp.firstname,
        lastname: gp.lastname,
        role: gp.role,
        links: '<a href="#"><img src="img/l.svg" alt="linkedin"></a><a href="#"><img src="img/t.svg" alt="twitter"></a>',
        text: '<p>Sanmaya is our growth strategist and he has worked in freelance with 20+ early-stage startups to accelerate their Marketing campaigns including some of the Silicon Valley Companies including Startup Grind and Bevy Labs to name a few. Having a background in digital marketing and strategic communication. Sanmaya believes that great brands stem from a great vision, the right values and healthy team culture.</p>',
        imglink: 'img/gp-big.png'
      },
      {
        id: 5,
        anchor: ld.pagelink,
        color: ld.color,
        firstname: ld.firstname,
        lastname: ld.lastname,
        role: ld.role,
        links: '<a href="#"><img src="img/l-green.svg" alt="linkedin"></a><a href="#"><img src="img/b.svg" alt="behance"></a><a href="#"><img src="img/d.svg" alt="dribbble"></a>',
        text: '<p>Rupesh is our Lead Designer. Having worked with multiple conglomerates including Samsung, WWF, Cisco, DELL, HGS, MindTickle, Runtastic, VisualBest, Flujo to name a few, he is the genius behind our fluidic designs.</p>',
        imglink: 'img/ld-big.png'
      },
      {
        id: 6,
        anchor: dev.pagelink,
        color: dev.color,
        firstname: dev.firstname,
        lastname: dev.lastname,
        role: dev.role,
        links: '<a href="#"><img src="img/l-red.svg" alt="linkedin"></a><a href="#"><img src="img/t-red.svg" alt="twitter"></a><a href="#"><img src="img/g.svg" alt="github"></a>',
        text: '<p>Yashovardhan is our developer. He is a JavaScript Developer, an Open Source Enthusiast who mostly develops mobile applications in React Native & Redux. Having Mentored in GCI and Google Summer of Code, he has had the chance to experience first-hand the positive effects mobile and technology have had on some industries and is looking forward to seeing what it can do for banking. He is a techie with a knack for entrepreneurship.</p>',
        imglink: 'img/dev-big.png'
      },
      {
        id: 7,
        anchor: ad1.pagelink,
        color: ad1.color,
        firstname: ad1.firstname,
        links: '<a href="#"><img src="img/l-green.svg" alt="linkedin"></a><a href="#"><img src="img/t-green.svg" alt="twitter"></a>',
        text: '<p>Nekko Capital is a Venture Capital with a city hub strategy based out of Barcelona with investment focus all over Europe.</p><p>The Nekko Team is an international and diverse group of experts and visionary entrepreneurs who believe in nurturing global thinking founders that challenge the innovation renaissance towards creating a more beautiful tomorrow.</p><p>Nekko Capital was founded in 2017 and it is led by 3 partners  Ernest Sánchez, Mercè Tell, Josep Santacana who combine their experience in venture capital, entrepreneurship, investment banking, technology consulting, and legal advice with extensive experience in the strategy, finance and legal arena, especially in companies in their early stages of development.</p><p>Nekko has invested in companies like Glovo, Smadex, Wallapop, Corner Job, Debut, Deliberry and Nuroa.</p>',
        imglink: 'img/ad1-big.png'
      },
      {
        id: 8,
        anchor: ad2.pagelink,
        color: ad2.color,
        firstname: ad2.firstname,
        lastname: ad2.lastname,
        role: ad2.role,
        links: '<a href="#"><img src="img/l-red.svg" alt="linkedin"></a><a href="#"><img src="img/t-red.svg" alt="twitter"></a>',
        text: '<p>Viswadeep is currently working as the VP Strategic Alliances & Digital Partnerships with Equitas with 18+ years of experience in acquiring & implementing innovative solutions in the Payments/Transactional Banking Arena, His experience is based on creating a strategic bridge between business and technology to drive change.</p><p>He has hands-on experience with Digital Banking Product & Portfolio Management, building partnerships, Relationship Management, delivering optimal results through innovative solutions and business value in high growth environments and has the distinction of opening up new business opportunities with premier clientele.</p>',
        imglink: 'img/ad2-big.png'
      }
    ]
  }
})
