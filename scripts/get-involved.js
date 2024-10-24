const eventList = document.getElementById('event-list'); 

// Replace this with your actual event data fetching logic
const events = [
  { title: "Fundraising Gala", date: "2024-11-15", description: "Join us for a night of fun and fundraising." },
  { title: "Volunteer Appreciation Day", date: "2024-12-07", description: "Celebrate our amazing volunteers." },
  { title: "Fundraising Gala", date: "2024-11-15", description: "Join us for a night of fun and fundraising." },
  { title: "Volunteer Appreciation Day", date: "2024-12-07", description: "Celebrate our amazing volunteers." }

];

function createEventElement(event) {
  const listItem = document.createElement('li');
  listItem.classList.add('event');

  const title = document.createElement('h4');
  title.textContent = event.title;
  listItem.appendChild(title);

  const date = document.createElement('p');
  date.textContent = event.date;
  listItem.appendChild(date);

  const description = document.createElement('p');
  description.textContent = event.description;
  listItem.appendChild(description);

  return listItem;
}

// Add each event to the list
events.forEach(event => {
  const eventElement = createEventElement(event);
  eventList.appendChild(eventElement);
});