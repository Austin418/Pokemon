let input = `{
    "abilities": [
      {
        "name": "blaze"
      },
      {
        "name": "solar-power"
      }
    ],
    "base_experience": 142,
    "height": 11,
    "id": 5,
    "is_default": true,
    "name": "Charmeleon",
    "order": 6,
    "stats": [
      {
        "base_stat": 58,
        "effort": 0,
        "stat": {
          "name": "hp"
        }
      },
      {
        "base_stat": 64,
        "effort": 0,
        "stat": {
          "name": "attack"
        }
      },
      {
        "base_stat": 58,
        "effort": 0,
        "stat": {
          "name": "defense"
        }
      },
      {
        "base_stat": 80,
        "effort": 1,
        "stat": {
          "name": "special-attack"
        }
      },
      {
        "base_stat": 65,
        "effort": 0,
        "stat": {
          "name": "special-defense"
        }
      },
      {
        "base_stat": 80,
        "effort": 1,
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
      }
    ],
    "weight": 190
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
    _img.src = "https://i.pinimg.com/originals/df/51/bd/df51bdb8e101f21bf5d0073ce24b8732.jpg"
    section.appendChild(_img)
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


    const _id = obj['id']
    const _idContainer = document.createElement('div')
    _idContainer.id = 'id'
    function createID() {
        const _h2 = document.createElement('h2')
        _h2.textContent = `ID: 00${_id}`
        section.appendChild(_idContainer)
        _idContainer.appendChild(_h2)
    }
    createID()


    //height
    const _height = obj['height']
    const _heightContainer = document.createElement('div')
    _heightContainer.id = "height"
    function createHeight() {
        const _h2 = document.createElement('h2')
        _h2.textContent = `Height: ${_height}`
        _idContainer.appendChild(_h2)
    }
    createHeight()


    //weight
    const _weight = obj['weight']
    const _weightContainer = document.createElement('div')
    _heightContainer.id = "weight"
    function createweight() {
        const _h2 = document.createElement('h2')
        _h2.textContent = `Weight: ${_weight}`
        _idContainer.appendChild(_h2)
    }
    createweight()


    //type
    function createType() {

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
                _h2.textContent = `${_type['name']}`
            }



            section.appendChild(_typeContainer)
            _typeContainer.appendChild(_h2)
            _typeContainer.appendChild(_p)
            //end First card

        }
    }


    createType()

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


    const _is_default = obj['is_default']
    const _is_defaultContainer = document.createElement('div')
    _is_defaultContainer.id = 'is_default'
    function createis_default() {
        const _h2 = document.createElement('h2')
        _h2.textContent = `Default: ${_is_default}`
        section.appendChild(_is_defaultContainer)
        _is_defaultContainer.appendChild(_h2)
    }
    createis_default()


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
            const _effort = _stats[i]['effort']
            const _stat = _stats[i]['stat']

            const _h2 = document.createElement('h2')
            const _h21 = document.createElement('h2')
            const _h22 = document.createElement('h2')
            const _p = document.createElement('p')

            _statsContainer.class = "card"
            _h2.class = "top"
            _p.class = "bottom"
            _h2.textContent = `Base Stat: ${_baseStats}`
            _h21.textContent = `  Effort: ${_effort}`
            for (j in _stats) {
                _h22.textContent = _stat['name']
            }
            section.appendChild(_statsContainer)
            _statsContainer.appendChild(_h2)
            _statsContainer.appendChild(_h21)
            _statsContainer.appendChild(_h22)
        }
    }
    createStats()
}