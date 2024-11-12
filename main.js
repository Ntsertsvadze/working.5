// ● შექმენი <button> და <div> ელემენტები და მიანიჭეთ საკუთარი უნიკალური id
// ● <div> - ში ჩაწერე პატარა random ტექსტი● ღილაკზე დაჭერის შემთხვევაში დამალე <div> ელემენტი

const btn = document.createElement('button');
btn.setAttribute('id', 'myBtn');
btn.textContent = 'CLICK ME';
document.body.append(btn);

const divEl = document.createElement('div');
divEl.setAttribute('id', 'myDiv');

const h1El = document.createElement('h1');
h1El.classList.add('member');
h1El.textContent = 'Hello World';
h1El.style.color = 'blueviolet';

const pEl = document.createElement('p');
pEl.setAttribute('id', 'myP');
pEl.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ratione mollitia saepe atque adipisci, corporis aspernatur quibusdam possimus vitae officiis.';
pEl.style.color = 'pink';

divEl.append(h1El, pEl);
document.body.append(divEl);

btn.addEventListener('click', (e) =>{
    e.target.style.color = 'white'
    e.target.style.background = 'green'
    divEl.style.display = 'none'
});


// ● შექმენი შემდეგი სტრუქტურა JS -ის გამოყენებით და დაამატე DOM-ში: 
// <div id=”card”>
// <h2>Gandalf</h2>
// <a href=”#”>Go to profile</a>
// </div>

const div = document.createElement('div');
div.setAttribute('id', 'card');

const h2El = document.createElement('h2');
h2El.textContent = 'Gandalf';

const aEl = document.createElement('a');
aEl.textContent = 'Go to profile';
aEl.setAttribute('href', '#');

div.append(h2El, aEl);
document.body.append(div);

const bodyEl= document.body;
console.log(bodyEl);
    


// ● შექმენი quiz თამაში ● დაწერე რამდენიმე მოკლე შეკითხვათავისი სავარაუდო პასუხებით
// ● სწორ პასუხზე დაჭერის შემთხვევაში გაამწვანე პასუხი ● არასწორი პასუხის შემთხვევაში გააწითლე
// გამოიტანე ეკრანზე ქულების რაოდენობა ➔ სწორი პასუხის შემთხვევაში დაამატე 1 ქულა ➔ არასწორის შემთხვევაში უცვლელი რჩება


const divContainer = document.createElement('div');
divContainer.style.backgroundColor = 'darkgray';
divContainer.style.padding = '20px'

const pQuestion = document.createElement('p');
pQuestion.textContent = 'საქართველოს ყველაზე ლამაზი ქალაქია ჭიათურა. ეს მსჭელობა არის?';
pQuestion.style.color = 'darkblue';
pQuestion.style.fontWeight = 'bold';

const pAnswer1 = document.createElement('p');
pAnswer1.textContent = 'სწორი';
pAnswer1.style.color = 'darkblue';
pAnswer1.style.cursor = 'pointer';

const pAnswer2 = document.createElement('p');
pAnswer2.textContent = 'ტყუილი';
pAnswer2.style.color = 'darkblue';
pAnswer2.style.cursor = 'pointer';

let score = 0;
const pScore = document.createElement('p');
pScore.textContent = `ქულა: ${score}`;
pScore.style.color = 'blue';

divContainer.append(pQuestion, pAnswer1, pAnswer2, pScore);
document.body.append(divContainer);

pAnswer1.addEventListener('click', () => {
    pAnswer1.style.color = 'green'; 
    pAnswer2.style.color = 'red'; 
    score++;  
    pScore.textContent = `ქულა: ${score}`;   
});

pAnswer2.addEventListener('click', () => {
    pAnswer1.style.color = 'green'; 
    pAnswer2.style.color = 'red';  
    pScore.textContent = `ქულა: ${score}`; 
});