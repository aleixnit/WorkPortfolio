let buttonEnglish = document.querySelector("#translateToEnglish");
let navInicio = document.querySelector(".engInicio");
let navSobremi = document.querySelector(".engSobremi");
let navProyectos = document.querySelector('.engProyectos');
let navContacto = document.querySelector('.engContacto');
let descripcion = document.querySelector('.engDescripcion');
let titleSobreMi = document.querySelector('.tSobremi');
let hardSkillAutodidacta = document.querySelector ('.tHardSkill1');
let hardSkillTeamwork = document.querySelector('.tHardSkill2');
let hardSkillComunicacion = document.querySelector('.tHardSkills3');
let hardSkillCreatividad = document.querySelector('.tHardSkills4');
let hardSkillResolution = document.querySelector('.tHardSkills5');
let spanProjects = document.querySelector('.tSpanProjects');
let projects = document.querySelector('.tProjects');


function translateToEnglish() {
  console.log("has hecho click");
  buttonEnglish.textContent = "English";
  navInicio.textContent = "Home";
  navSobremi.textContent = "About me";
  navProyectos.textContent = 'Projects';
  navContacto.textContent = 'Contact me';
  descripcion.textContent = `Junior web programmer with great passion for technology and design. I have been training in various Front-end bootcamps, where I have been acquiring a multitude of technical skills. Regarding personality, I consider myself a person with great communication skills, self-taught and highly motivated to find work in this sector.`;
  titleSobreMi.textContent = '😊ABOUT ME';
  hardSkillAutodidacta.textContent = '💪Self-taught';
  hardSkillTeamwork.textContent = '🤝Teamwork';
  hardSkillComunicacion.textContent = '🗣️Good Comunication';
  hardSkillCreatividad.textContent = '🎨Creativity';
  hardSkillResolution.textContent = '🚀Problem Resolution';
  spanProjects.textContent = '🚀MY';
  projects.textContent = 'PROJECTS';

}

buttonEnglish.addEventListener("click", function () {
  translateToEnglish();
});
