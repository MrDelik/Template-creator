/**
 * Template Creator
 * A simple class to create dom node base on an HTM template node
 * Just to speed up the process
 *
 * Pass selector/value as key/value of the params object
 */
class TemplateCreator{
    /**
     * Create a node base on a template
     * Apply value passed in params with the selector as key
     * If there is node to remove, just use the removes key containes array of selectors to remove
     * @param params
     * @returns {Node}
     */
    static create(params = {}){
        let template;
        if( 'templateSelector' in params ){
            template = document.querySelector(params.templateSelector).content.cloneNode(true);
            delete params.templateSelector;

            if( 'removes' in params ){
                params.removes.forEach(selector => template.querySelector(selector).remove());
            }
            delete params.removes;

            for(let selector in params){
                if( typeof params[selector] === 'object'){
                    if( 'attributes' in params[selector] ){
                        TemplateCreator.applyAttributes( template, selector, params[selector].attributes );
                    }
                    template.querySelector(selector).textContent = params[selector].text;
                }
                else{
                    template.querySelector(selector).textContent = params[selector];
                }
            }
        }
        else{
            throw new Error('A template selector is required for this module to work properly');
        }

        return template;
    }

    /**
     * Apply attributes in the template
     * @param template
     * @param parentSelector
     * @param attributes
     */
    static applyAttributes( template, parentSelector, attributes ){
        let parentNode = template.querySelector(parentSelector);

        for(let attribute in attributes){
            let attributeValue = attributes[attribute];
            if( attribute === 'dataset' ){
                for(let data in attributeValue){
                    parentNode.dataset[data] = attributeValue[data];
                }
            }
            else if( attribute in parentNode ){
                parentNode[attribute] = attributeValue;
            }
            else{
                parentNode.setAttribute(attribute, attributeValue);
            }
        }
    }
}

export default TemplateCreator;
