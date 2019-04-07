//calender(dd, mm, yyyy)
let cards = [
  {
    title:'Front End Development',
    image:'main-data/update/resources/images/web.jpg',
    description: 'Dr. Ahmed El-Alfy Head of software development at Robusta Studio and Lead of Facebook Developers Circle in Cairo',
    date: calender(25, 2, 2018)
  },
  {
    title:'A Day with Oracle',
    image:'main-data/update/resources/images/oracle.jpg',
    description: "Technology leading star 'Oracle'.Oracle Academy is giving a hand to today's potential talents to be tomorrow's heroes",
    date: calender(26, 11, 2017)
  },
  {
    title:'Cyber Security',
    image:'main-data/update/resources/images/security.jpg',
    description: "Master Security basics with Moataz Salah,<br> CEO & founder of CyberTalents",
    date: calender(5, 12, 2017)
  },
  {
    title:'How To Join Software Big Brands',
    image:'main-data/update/resources/images/attia.jpg',
    description: "How to join big brands with Ahmed Samir Senior Software Developer at Oracle",
    date: calender(7, 10, 2017)
  }
]

function calender(day, month, year){
	const d = new Date();
	var days = (d.getDate() - day) + (d.getMonth() + 1 - month) * 30 + (d.getFullYear() - year) * 365;
	var existingDate, previousDate;
  if(days < 7)
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
  return `about ${Math.floor(previousDate)} ${existingDate} ago`;
}

createCardHTML = (card) => {

  const eventCard = document.createElement('div');
  eventCard.className = 'card1 mySlides';
  eventCard.style.display = "none";


  const image = document.createElement('img');
  image.src = card.image;
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
  date.innerHTML = card.date;
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
