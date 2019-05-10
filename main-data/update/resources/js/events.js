
//calender(dd, mm, yyyy)
//add evenst image in this folder main-data/update/resources/events-img/

let cards = [
  {
    title:'SefrWahed Meetup with Incorta',
    image:'incorta19.jpg',
    description: "A new data-driven meetup in collaboration with Incorta and its very special guest, Mr. Wael Fakharany, Incorta, the startup that wants to speed up big data analytics by eliminating the need for data warehouses by gathering and preparing",
    day: 16,
    month: 4,
    year: 2019,
  },
  {
    title:'CyberTalents Roadshow in ASU',
    image:'cyber18.jpg',
    description: "CTF is a competition between security enthusiasts both undergrads and post-graduates learning about cyber security. This competition is used as a learning tool for everyone that is interested in Cyber Security and it can help sharpen the tools they have learned during their training.",
    day: 14,
    month: 3,
    year: 2019,
  },
  {
    title:'Meet Eng. Mohamed Tarek',
    image:'MT18.jpg',
    description: "Embedded system industry does not exist as embedded system does not market itself. It becomes an important part of other industries whenever automation is required. Meet Eng. Muhammad Tarek, Senior Embedded Software Engineer at Mentor Graphics to know more about Embedded Systems and Automotive Industry.",
    day: 6,
    month: 12,
    year: 2018,
  },
  {
    title:'Entrepreneurship Meetup',
    image:'Enterp18.jpg',
    description: 'Entrepreneurship is like an engine for a country’s economic growth. Startups find methods to increase productivity, value the consumers and grow much faster than large enterprises.In Egypt, lots of startups are starting every day! There is plenty of room for innovation and competition. Having Tafra with us, one of the most unique startups and a big model in disrupting MENA Tech Ecosystem.',
    day: 29,
    month: 11,
    year: 2018,
  },
  {
    title:'SefrWahed with RoboGames Egypt',
    image:'RG18.jpg',
    description: "RoboGames, the world's largest open robotics competition, was founded as the ROBOlympics in 2004. Competitors from all the over the world compete with their robots to showcase their abilities and skills. Sounds interesting, right? Yeah that’s why we teamed with RoboGames for the first time in Faculty of Engineering, Ain Shams University to let students know more about how to participate and join the world's largest open robotics competition.",
    day:30,
    month: 10,
    year: 2018
  },
  {
    title:'Software Testing Meetup',
    image:'Testpro18.jpg',
    description: "For every 3 developers in a team there is a tester, in some teams for every developer there is a tester, this is how the job of a tester is escalating” —said Eng. Samer Desouky, CQO and Founder of TestPRO | Software Testing Services at Software Testing Meetup by SefrWahed",
    day:8,
    month: 10,
    year: 2018
  },
  {
    title:'Graduation Project Meetup',
    image:'GP18.jpg',
    description: "What does it really take to create an impressive Graduation project? Is it the idea or the skills? What kind of projects you should apply to? How to get a sponsorship for your graduation project? All these questions and more discussed with Eng. Mahmoud Abdelaziz from DivisionX and Eng. Osama Nasr Former Code Geist Technical Director and current embedded software engineer at Valeo.",
    day: 20,
    month: 9,
    year: 2018
  },
  {
    title:'Front End Development',
    image:'Alfy17.jpg',
    description: 'Dr. Ahmed El-Alfy Head of software development at Robusta Studio and Lead of Facebook Developers Circle in Cairo',
    day: 25,
    month: 2,
    year: 2018
  },
  {
    title:'A Day with Oracle',
    image:'oracle18.jpg',
    description: "Technology leading star 'Oracle'.Oracle Academy is giving a hand to today's potential talents to be tomorrow's heroes",
    day: 26,
    month: 11,
    year: 2017
  },
  {
    title:'Cyber Security',
    image:'cyber17.jpg',
    description: "Master Security basics with Moataz Salah,<br> CEO & founder of CyberTalents",
    day: 5,
    month: 12,
    year: 2017
  },
  {
    title:'How To Join Software Big Brands',
    image:'bigbrands17.jpg',
    description: "How to join big brands with Ahmed Samir Senior Software Developer at Oracle",
    day: 7,
    month: 10,
    year: 2017
  }
]

var d = new Date();

function calender(day, month, year){
  var sign = 0;
	var days = (d.getDate() - day) + (d.getMonth() + 1 - month) * 30 + (d.getFullYear() - year) * 365;
	var existingDate, previousDate;
  if(days < 0){
    sign = 1;
    days *= -1;
  }
  if(days < 7 && days > 0)
  {
  	previousDate = days;
  	existingDate = `day`;
  }
  else if(days < 30)
  {
  	previousDate = days / 7;
  	existingDate =`week`;
  }
  else if(days < 365)
  {
  	previousDate = days / 30;
  	existingDate =`month`;
  }
  else{
  	previousDate = days / 365;
  	existingDate =`year`;
  }
  if(Math.floor(previousDate) > 1)
  {
  	existingDate += 's';
  }
  if(days === 0){
    return "It is happening today";
  }
  else if(sign === 0){
    return `about ${Math.floor(previousDate)} ${existingDate} ago`;
  }
  else{
    return `${Math.floor(previousDate)} ${existingDate} left`;
  }
}

createCardHTML = (card) => {

  const eventCard = document.createElement('div');
  eventCard.className = 'card1 mySlides';
  eventCard.style.display = "none";


  const image = document.createElement('img');
  image.src = `main-data/update/resources/events-img/${card.image}`;
  image.alt = `${card.title}-event-img`;
  eventCard.append(image);

  const data = document.createElement('div')
  data.className = 'data';

  const name = document.createElement('h4');
  name.innerHTML = card.title;
  data.append(name);

  const description = document.createElement('p');
  description.innerHTML = card.description;
  data.append(description);


  eventCard.append(data);

  const date = document.createElement('footer');
  date.innerHTML = calender(card.day, card.month, card.year);
  eventCard.append(date);

  return eventCard;
}


const eventsBox = document.querySelector('.card-box');

cards.forEach(card => {
    eventsBox.append(createCardHTML(card));
});

var myIndex = 0;
cardsGenerator();

function cardsGenerator() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(cardsGenerator, 3000); // Change image every 4 seconds
}
