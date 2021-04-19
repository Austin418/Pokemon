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
    _nameContainer.id = 'name'
    function createName() {
        const _h1 = document.createElement('h1')
        _h1.textContent = `${_name}`
        section.appendChild(_nameContainer)
        _nameContainer.appendChild(_h1)
    }
    createName()
    //abilities
    const _abilities = obj['abilities']
    const _abilitiesContainer = document.createElement('div')
    _abilitiesContainer.id = 'abilities'
    let title = document.createElement('h5')
    title.textContent = 'Abilities'
    _abilitiesContainer.appendChild(title)
    for (a in _abilities) {
        const _h2 = document.createElement('h2')


        _h2.textContent = _abilities[a]['name']

        section.appendChild(_abilitiesContainer)

        _abilitiesContainer.appendChild(_h2)
    }




    //base_xp
    const _baseXP = obj['base_experience']
    const _baseXPContainer = document.createElement('div')
    _baseXPContainer.id = 'basexp'

    function createXP() {
        const _h2 = document.createElement('h2')
        _h2.textContent = `Base XP: ${_baseXP}`
        section.appendChild(_baseXPContainer)
        _baseXPContainer.appendChild(_h2)
    }
    createXP()

    //height
    const _height = obj['height']
    const _heightContainer = document.createElement('div')
    _heightContainer.id = "height"
    function createHeight() {
        const _h2 = document.createElement('h2')
        _h2.textContent = `Height: ${_height}`
        section.appendChild(_heightContainer)
        _baseXPContainer.appendChild(_h2)
    }
    createHeight()


    const _id = obj['id']
    const _idContainer = document.createElement('div')
    _idContainer.id = 'id'
    function createID() {
        const _h2 = document.createElement('h2')
        _h2.textContent = `ID: ${_id}`
        section.appendChild(_idContainer)
        _idContainer.appendChild(_h2)
    }
    createID()






    const _order = obj['base_experience']
    const _orderContainer = document.createElement('div')
    _orderContainer.id = 'order'
    function createorder() {
        const _h2 = document.createElement('h2')
        _h2.textContent = `Order: ${_order}`
        section.appendChild(_orderContainer)
        _orderContainer.appendChild(_h2)
    }
    createorder()
    function createStats() {
        const _stats = obj['stats']
        const _statsContainer = document.createElement('div')
        let titlestats = document.createElement('h5')
        titlestats.textContent = 'Stats'
        _statsContainer.appendChild(titlestats)
        for (i in _stats) {
            const _baseStats = _stats[i]['base_stat']


            const _h2 = document.createElement('h2')
            const _p = document.createElement('p')

            _statsContainer.class = "card"
            _h2.class = "top"
            _p.class = "bottom"
            _h2.textContent = `Base Stat: ${_baseStats}`
            for (i in _baseStats) {
                _h2.textContent = _type['name']
            }
            section.appendChild(_statsContainer)
            _statsContainer.appendChild(_h2)
        }

    }
    createStats()



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
