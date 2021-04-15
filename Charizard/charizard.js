let input = `{
    "abilities": [
        {
            "name": "blaze"
        },
        {
            "name": "solar-power"
        }
    ],
    "base_experience": 240,
    "height": 17,
    "id": 6,
    "is_default": true,
    "name": "charizard",
    "order": 7,
    "stats": [
        {
            "base_stat": 78,
            "effort": 0,
            "stat": {
                "name": "hp"
            }
        },
        {
            "base_stat": 84,
            "effort": 0,
            "stat": {
                "name": "attack"
            }
        },
        {
            "base_stat": 78,
            "effort": 0,
            "stat": {
                "name": "defense"
            }
        },
        {
            "base_stat": 109,
            "effort": 3,
            "stat": {
                "name": "special-attack"
            }
        },
        {
            "base_stat": 85,
            "effort": 0,
            "stat": {
                "name": "special-defense"
            }
        },
        {
            "base_stat": 100,
            "effort": 0,
            "stat": {
                "name": "speed"
            }
        }
    ],
    "types": [
        {
            "slot": 1,
            "type": {
                "name": "fire"
            }
        },
        {
            "slot": 2,
            "type": {
                "name": "flying"
            }
        }
    ],
    "weight": 905
}`

let superObj = JSON.parse(input)
let header = document.getElementById('header')
let secton = document.getElementById('section')

init(input)
function init(input) {
    createHeader(superObj)
    createSection(superObj)
}

function createHeader(obj) {
    const _img = document.createElement('img')
    _img.src = "charzard.png"
    header.appendChild(_img)
}

function createSection(obj) {
    const _name = obj['name']
    const _nameContainer = document.createElement('div')
    function createName(){
        const _h1 = document.createElement('h1')
        _h1.textContent = `${_name}`
        section.appendChild(_nameContainer)
        _nameContainer.appendChild(_h1)
    }
    createName()
    //abilities
    const _abilities = obj['abilities']
    const _abilitiesContainer = document.createElement('div')
    let title = document.createElement('h5')
    title.textContent = 'Abilities'
    _abilitiesContainer.appendChild(title)
    for (a in _abilities){
        const _h2 = document.createElement('h2')
        
        
        _h2.textContent = _abilities[a]['name']

        section.appendChild(_abilitiesContainer)
        
        _abilitiesContainer.appendChild(_h2)
    }




    //base_xp
    const _baseXP = obj['base_experience']
    const _baseXPContainer = document.createElement('div')

    function createXP(){
        const _h2 = document.createElement('h2')
        _h2.textContent = `Base XP: ${_baseXP}`
        section.appendChild(_baseXPContainer)
        _baseXPContainer.appendChild(_h2)
    }
    createXP()

    //height
    const _height = obj['height']
    const _heightContainer = document.createElement('div')
    function createHeight(){
        const _h2 = document.createElement('h2')
        _h2.textContent = `Height: ${_height}`
        section.appendChild(_heightContainer)
        _baseXPContainer.appendChild(_h2)
    }
    createHeight()


    const _id = obj['id']
    const _idContainer = document.createElement('div')
    function createID(){
        const _h2 = document.createElement('h2')
        _h2.textContent = `ID: ${_id}`
        section.appendChild(_idContainer)
        _idContainer.appendChild(_h2)
    }
    createID()


    



    // const _baseXP = obj['base_experience']
    // const _baseXPContainer = document.createElement('div')
    // function createXP(){
    //     const _h2 = document.createElement('h2')
    //     _h2.textContent = `Base XP: ${_baseXP}`
    //     section.appendChild(_baseXPContainer)
    //     _baseXPContainer.appendChild(_h2)
    // }
    // createXP()

    // const _baseXP = obj['base_experience']
    // const _baseXPContainer = document.createElement('div')
    // function createXP(){
    //     const _h2 = document.createElement('h2')
    //     _h2.textContent = `Base XP: ${_baseXP}`
    //     section.appendChild(_baseXPContainer)
    //     _baseXPContainer.appendChild(_h2)
    // }
    // createXP()





    //type
    const _types = obj['types']
    const _typeContainer = document.createElement('div')
    let titleType = document.createElement('h5')
    titleType.textContent = 'Type'
    _typeContainer.appendChild(titleType)
    for (j in _types) {
        const _type = _types[j]['type']

        
        const _h2 = document.createElement('h2')
        const _p = document.createElement('p')

        _typeContainer.class = "card"
        _h2.class = "top"
        _p.class = "bottom"
        for (i in _type) {
            _h2.textContent = _type['name']
        }



        section.appendChild(_typeContainer)
        _typeContainer.appendChild(_h2)
        _typeContainer.appendChild(_p)
        //end First card

    }
}
