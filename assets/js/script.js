//implimentation of mobile_menu//
const mobileMenu = document.getElementById('mobile_menu');
mobileMenu.addEventListener('click', () => {
  const desktopMenu = document.getElementById('desktop_menu');
  mobileMenu.classList.toggle('active');
  desktopMenu.classList.toggle('active');
});
//an array of objects to store project cards//
const projects = [
{
  image:'./assets/images/project_image.png',
  title:'nelly_portfolio website',
  technologies:['Ruby on Rails','CSS','JavaScript','HTML'],
  button:'#',
  //pop up window data
  sub:'Keeping track of hundreds of components',
  description:'A responsive personal portfolio showcasing projects, skills, and contact information. It uses semantic HTML, modern CSS, and vanilla JavaScript to build interactive components, image galleries, and clear navigation. The design focuses on accessibility, mobile-first responsive layout, and presentation. Designed for recruiters and collaborators, the site demonstrates component reusability, version control workflows, and deploy-ready structure. Live demos, README documentation, and accessible contact forms make it straightforward to evaluate work, professional impact, skills, and approach to full-stack development.',
  Live:'https://nelly-portfolio-kappa.vercel.app/',
  source:'https://github.com/nellypascaline/nelly_portfolio',

},
{
  image:'./assets/images/6383301.jpg',
  title:'nelly_portfolio website',
  technologies:['Ruby on Rails','CSS','JavaScript','HTML'],
  button:'#',
  //pop up window data
  sub:'Keeping track of hundreds of components',
  description:'A responsive personal portfolio showcasing projects, skills, and contact information. It uses semantic HTML, modern CSS, and vanilla JavaScript to build interactive components, image galleries, and clear navigation. The design focuses on accessibility, mobile-first responsive layout, and presentation. Designed for recruiters and collaborators, the site demonstrates component reusability, version control workflows, and deploy-ready structure. Live demos, README documentation, and accessible contact forms make it straightforward to evaluate work, professional impact, skills, and approach to full-stack development.',
  Live:'https://nelly-portfolio-kappa.vercel.app/',
  source:'https://github.com/nellypascaline/nelly_portfolio',

},
{
  image:'./assets/images/6493828.jpg',
  title:'nelly_portfolio website',
  technologies:['Ruby on Rails','CSS','JavaScript','HTML'],
  button:'#',
  //pop up window data
  sub:'Keeping track of hundreds of components',
  description:'A responsive personal portfolio showcasing projects, skills, and contact information. It uses semantic HTML, modern CSS, and vanilla JavaScript to build interactive components, image galleries, and clear navigation. The design focuses on accessibility, mobile-first responsive layout, and presentation. Designed for recruiters and collaborators, the site demonstrates component reusability, version control workflows, and deploy-ready structure. Live demos, README documentation, and accessible contact forms make it straightforward to evaluate work, professional impact, skills, and approach to full-stack development.',
  Live:'https://nelly-portfolio-kappa.vercel.app/',
  source:'https://github.com/nellypascaline/nelly_portfolio',

},
{
  image:'assets/images/6493828.jpg',
  title:'nelly_portfolio website',
  technologies:['Ruby on Rails','CSS','JavaScript','HTML'],
  button:'#',
  //pop up window data
  sub:'Keeping track of hundreds of components',
  description:'A responsive personal portfolio showcasing projects, skills, and contact information. It uses semantic HTML, modern CSS, and vanilla JavaScript to build interactive components, image galleries, and clear navigation. The design focuses on accessibility, mobile-first responsive layout, and presentation. Designed for recruiters and collaborators, the site demonstrates component reusability, version control workflows, and deploy-ready structure. Live demos, README documentation, and accessible contact forms make it straightforward to evaluate work, professional impact, skills, and approach to full-stack development.',
  Live:'https://nelly-portfolio-kappa.vercel.app/',
  source:'https://github.com/nellypascaline/nelly_portfolio',

},
{
  image:'assets/images/6383301.jpg',
  title:'nelly_portfolio website',
  technologies:['Ruby on Rails','CSS','JavaScript','HTML'],
  button:'#',
  //pop up window data
  sub:'Keeping track of hundreds of components',
  description:'A responsive personal portfolio showcasing projects, skills, and contact information. It uses semantic HTML, modern CSS, and vanilla JavaScript to build interactive components, image galleries, and clear navigation. The design focuses on accessibility, mobile-first responsive layout, and presentation. Designed for recruiters and collaborators, the site demonstrates component reusability, version control workflows, and deploy-ready structure. Live demos, README documentation, and accessible contact forms make it straightforward to evaluate work, professional impact, skills, and approach to full-stack development.',
  Live:'https://nelly-portfolio-kappa.vercel.app/',
  source:'https://github.com/nellypascaline/nelly_portfolio',

},
{
  image:'assets/images/6493828.jpg',
  title:'nelly_portfolio website',
  technologies:['Ruby on Rails','CSS','JavaScript','HTML'],
  button:'#',
  //pop up window data
  sub:'Keeping track of hundreds of components',
  description:'A responsive personal portfolio showcasing projects, skills, and contact information. It uses semantic HTML, modern CSS, and vanilla JavaScript to build interactive components, image galleries, and clear navigation. The design focuses on accessibility, mobile-first responsive layout, and presentation. Designed for recruiters and collaborators, the site demonstrates component reusability, version control workflows, and deploy-ready structure. Live demos, README documentation, and accessible contact forms make it straightforward to evaluate work, professional impact, skills, and approach to full-stack development.',
  Live:'https://nelly-portfolio-kappa.vercel.app/',
  source:'https://github.com/nellypascaline/nelly_portfolio',

}
];
//function to create project cards
function createProjectCards(project) {
  const card = document.createElement('div');
  card.classList.add('project_card');
  const cardImage=document.createElement('img');
  cardImage.src = project.image;
  cardImage.alt = 'project card image';
  card.appendChild(cardImage);
  const cardTitle = document.createElement('h3');
  cardTitle.innerHTML = project.title;
  card.appendChild(cardTitle);
  const cardList = document.createElement('ul');
  project.technologies.forEach((element) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = element;
    cardList.appendChild(listItem);
  });
  card.appendChild(cardList);
  const cardBtn = document.createElement('button');
  cardBtn.type = 'button';
  cardBtn.innerHTML = 'see project';
  cardBtn.addEventListener('click', () => openModal(project));
  card.appendChild(cardBtn);
  return card;
}

//inserting project cards in the projects section
function insertCards(){
  const projectsContainer = document.getElementById('project_cards');
  projects.forEach((project) => {
    const projectCard = createProjectCards(project);
    projectsContainer.appendChild(projectCard);
  });
}
//an arrayof ojects to store about cards
const about = [
  {
  image:'#',
  title:'languagees',
  technologies:['Javascript','Ruby','HTML','CSS'],
  },
  {
  image:'#',
  title:'framework',
  technologies:['React.js','Ruby on Rails','Rspec','Capybara','selenium'],
  },
  {
  image:'#',
  title:'Skills',
  technologies:['Database management','Version control','CLI','web development','API Design'],
  },
];

//funtion to create about cards
function createAboutcards(item){
  const card = document.createElement('div');
  card.classList.add('about_card');
  const cardImage = document.createElement('img');
  cardImage.src = item.image;
  cardImage.alt = 'about card image',
  card.appendChild(cardImage);
  const cardTitle = document.createElement('h3');
  cardTitle.innerHTML = item.title;
card.appendChild(cardTitle);
const cardList = document.createElement('ul');
item.technologies.forEach((Element) =>{
  const listItem = document.createElement('li');
  listItem.innerHTML = element;
  cardList.appendChild(listItem);
});
card.appendChild(cardList);
return card;
} 
//inserting about cards in about section
function insertAboutcards(){
  const aboutContainer = document.getElementById('about_cards');
  if(!aboutContainer){
//Avoid throwin if the target containerisn't present in the DOM
//(useful during testing or on pages that don't include the about section)
 //eslint-disable-next-line no-console
 console.warm('No element with id "about_cards" found. skipping card insertion.');
 return;
  }
    about.forEach((item) => {
const aboutCard = createAboutcard(item);
aboutContainer.appendChild(aboutCard);
});
}
//function to create popup modal
function openModal(project){
  // remove existing modal if present
  const existing = document.getElementById('modal_container');
  if (existing) existing.remove();

  const modal = document.createElement('div');
  modal.classList.add('modal_container');
  modal.id = 'modal_container';

  const content = document.createElement('div');
  content.classList.add('modal_content');

  const modalImageContainer = document.createElement('div');
  modalImageContainer.classList.add('modal_image_container');

  const modalImage = document.createElement('img');
  modalImage.src = project.image || '';
  modalImage.alt = project.title || 'project image';
  modalImageContainer.appendChild(modalImage);

  const closeBtn = document.createElement('button');
  closeBtn.classList.add('close_btn');
  closeBtn.innerHTML = '&times;';
  modalImageContainer.appendChild(closeBtn);

  content.appendChild(modalImageContainer);

  const modalSub = document.createElement('h3');
  modalSub.innerHTML = project.sub || project.title || '';
  content.appendChild(modalSub);

  const modalTechlist = document.createElement('ul');
  (project.technologies || []).forEach((element) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = element;
    modalTechlist.appendChild(listItem);
  });
  content.appendChild(modalTechlist);

  const modalDescription = document.createElement('p');
  modalDescription.innerHTML = project.description || '';
  content.appendChild(modalDescription);

  const modalLinks = document.createElement('div');
  modalLinks.classList.add('modal_links');

  const seeLive = document.createElement('a');
  seeLive.href = project.Live || '#';
  seeLive.innerHTML = 'see live';
  seeLive.target = '_blank';
  seeLive.rel = 'noopener noreferrer';

  const seeSource = document.createElement('a');
  seeSource.href = project.source || '#';
  seeSource.innerHTML = 'see source';
  seeSource.target = '_blank';
  seeSource.rel = 'noopener noreferrer';

  modalLinks.appendChild(seeLive);
  modalLinks.appendChild(seeSource);
  content.appendChild(modalLinks);

  modal.appendChild(content);
  document.body.appendChild(modal);

  // prevent background scrolling while modal is open
  document.body.classList.add('modal-open');

  // centralized remove function so we always clean up
  function handleKey(e){
    if (e.key === 'Escape') removeModal();
  }

  function removeModal(){
    if (modal && modal.parentNode) modal.remove();
    document.body.classList.remove('modal-open');
    document.removeEventListener('keydown', handleKey);
  }

  // close button
  closeBtn.addEventListener('click', removeModal);

  // clicking outside content closes modal
  modal.addEventListener('click', (e) => {
    if (e.target === modal) removeModal();
  });

  // close on ESC
  document.addEventListener('keydown', handleKey);
}
//event listeners to trigger the insertion of cards into the DOM
document.addEventListener('DOMContentLoaded',insertCards);
