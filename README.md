# Template-creator
Template creator is a small ES6 class that help the user create node from a HTML5 template.

It speed up the precess of getting the template, doing  modifications and adding it to the DOM.

## Instanciation
Like every ES6 module you just have to import it at the beginning of your javascript file and using it.
```javascript
import TemplateCreator from './components/TemplateCreator.js';

let template = TemplateCreator.create({params});
```

## Methods
TemplateCreator have 2 methods but you must only use one: __create__. Those methods are static so you don't need to create a new instance with the new keyword.

* create : return `HTMLElement`
    * params `object`
    * The create method return the template created with the modifications specified in the params object
    The params object __MUST__ be formed with the selector as index and text content as value. You can add/modify attributes with an attributes key in the object.
    If the value is an object containing an attributes key, just specify a text index to specified the textContent.
* createAttributes : return `void`
    * template `HTMLElement` parentSelector `string` attributes `object` 
    * The createAttributes create/modify attribute in the specified node
    
   
   
### Author
**Kevin Goyvaerts**
+ [http://github.com/MrDeliK](http://github.com/MrDeliK)