const config = {
    framework: 'bootstrap-5',
    mode: 'inline'
}

/*
// Sample data structure
[
    {
        input: input = 'input',
        type: text = 'text',
        title: title,
        name: name,
        placeholder: placeholder,
        class: class_name = null,
        id: id_name = null,
        value: null
    }
]
*/

function generateBootstrap5Form(data) {

    let template = ``

    data.forEach( item => {
        let input
        switch(item.input) {
            case 'textarea':
                input = `<textarea name="${item.name}" placeholder="${item.placeholder}" class="form-control">${item.value}</textarea>`
                break;

            default: 
                input = `<input type="${item.type ? item.type : 'text'}" name="${item.name}" value="${item.value}" class="form-control">`
                break;
        }

        template += `<div class="form-group row mt-3">
            <label class="col-md-3">${item.title}</label>
            <div class="col-md-9">
                ${input}
            </div>
        </div>`
    })

    console.log(template)

    return template;
}

export default class FormPopulator {
    constructor (el, data, conf = null) {
        this.el = document.querySelector(el)
        
        if (!this.el) {
            throw Error("Element not avaiable in DOM")
        }

        this.config = config

        if (conf && typeof conf === 'object') {
            Object.keys(conf).forEach( key => {
                this.config[key] = conf[key]
            })
        }
        

        this.data = data
        
        this.initializeData()
    }

    initializeData() {
        let template
        if (this.config.framework === 'bootstrap-5') {
            console.log("i'm here")
            template = generateBootstrap5Form(this.data)
        }

        this.el.innerHTML = template
    }
}