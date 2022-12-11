let nav = 0;
let clicked = null;

//alert("Take note that transaction are not available at WEEKENDS!");

const calendar = document.getElementById('calendar');
const newEventModal = document.getElementById('newEventModal');
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function openModal(date) {

    newEventModal.style.display = 'block';

    clicked = date; 
}

function load() {
    const dt = new Date();
  
    if (nav !== 0) {
      dt.setMonth(new Date().getMonth() + nav);
    }
  
    const day = dt.getDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();
 
    
    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
      weekday: 'long',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    });
    const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);
  
    

    document.getElementById('monthDisplay').innerText = 
      `${dt.toLocaleDateString('en-us', { month: 'long' })} ${year}`;

      calendar.innerHTML = '';

      for(let i = 1; i <= paddingDays + daysInMonth; i++) {

        const daySquare = document.createElement('div');

        daySquare.classList.add('day');
    
       const dayString = `${month + 1}/${i - paddingDays}/${year}`;

        if (i > paddingDays) {
            daySquare.innerText = i - paddingDays;
      
            if (i - paddingDays === day && nav === 0) {
              daySquare.id = 'currentDay';
            }

            daySquare.addEventListener('click', () => openModal(dayString));
      }
      calendar.appendChild(daySquare); 

      weekendsSA = weekdays.indexOf('Saturday')
      console.log()
}
}
function closeModal(){
    newEventModal.style.display = 'none';
    load();
}
function saveTime(){

    const timeSched = document.querySelector('input[name="ampm"]:checked');

    if (timeSched.value) {

       let time = {
        date: clicked,
        time: timeSched.value,
        }
        
        localStorage.setItem('date', JSON.stringify(time));
    }
    window.location = "c_confirmationL.html";
}
function initButtons() {
    document.getElementById('nextButton').addEventListener('click', () => {
      nav++;
      load();
    });
  
    document.getElementById('backButton').addEventListener('click', () => {
      nav--;
      load();
    });

document.getElementById('saveButton').addEventListener('click', saveTime);
document.getElementById('cancelButton').addEventListener('click', closeModal);
} 
initButtons();
load();