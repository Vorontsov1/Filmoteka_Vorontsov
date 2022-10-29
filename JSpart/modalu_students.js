import studentsData from '../JSON/arr.json';
import studentsTamplate from '../templates/modal_students.hbs';


const studentItems = studentsData.map(studentsTamplate).join(' ');

listStudents.insertAdjacentHTML('afterbegin', studentItems);

