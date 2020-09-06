import TemplateCreator from "./components/TemplateCreator.js";

function CreateFromTemplate(e){
    e.preventDefault();

    let template = TemplateCreator.create({
        templateSelector: '#exempleTemplate'
    });

    document.getElementById('container').appendChild(template);
}
document.getElementById('exempleButton').addEventListener('click', CreateFromTemplate);

function CreateFromTemplateWithModifs(e){
    e.preventDefault();

    let template = TemplateCreator.create({
        templateSelector: '#exempleTemplate',
        '.exemple-container p': {
            attributes: {
                'data-test': 'test'
            },
            text: 'i am the modified text again'
        }
    })

    document.getElementById('container').appendChild(template);
}
document.getElementById('exempleWithModifs').addEventListener('click', CreateFromTemplateWithModifs);