import './style.css'
import { saveDesign, exportHtml, importDesign } from './editor-actions';

const editor = unlayer.createEditor({
  id: 'editor-container',
  projectId: 264544,
  displayMode: 'email',
  locale: 'ru-RU',
});


editor.setBodyValues({
  contentWidth: '600px'
});


const saveButton = document.querySelector('.button-save');
const exportButton = document.querySelector('.button-export');
const importButton = document.querySelector('.button-import');
const filename = document.querySelector('.input-filename');
const fileLoader = document.querySelector('#loader');
const getFilename = () => document.querySelector('.input-filename').value;

saveButton.addEventListener('click', () => { saveDesign(editor, getFilename()) });
exportButton.addEventListener('click', () => { exportHtml(editor, getFilename()) });
importButton.addEventListener('click', () => { 
  fileLoader.click();
  importDesign(editor, fileLoader) 
});

fileLoader.addEventListener('change', (e) => {
  filename.value = e.target.files[0].name.replace(/\.[^.$]+$/, '');;
  importDesign(editor, e.target);
})