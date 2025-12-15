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
  image:'#',
  title:'Multi-Post Stories Gain+Glory',
  technologies:['Ruby on Rails','CSS','JavaScript','HTML'],
  button:'#'
},
{
  image:'#',
  title:'Multi-Post Stories Gain+Glory',
  technologies:['Ruby on Rails','CSS','JavaScript','HTML'],
  button:'#'
},
{
  image:'#',
  title:'Multi-Post Stories Gain+Glory',
  technologies:['Ruby on Rails','CSS','JavaScript','HTML'],
  button:'#'
},
{
  image:'#',
  title:'Multi-Post Stories Gain+Glory',
  technologies:['Ruby on Rails','CSS','JavaScript','HTML'],
  button:'#'
},
{
  image:'#',
  title:'Multi-Post Stories Gain+Glory',
  technologies:['Ruby on Rails','CSS','JavaScript','HTML'],
  button:'#'
},
{
  image:'#',
  title:'Multi-Post Stories Gain+Glory',
  technologies:['Ruby on Rails','CSS','JavaScript','HTML'],
  button:'#'
},
];
