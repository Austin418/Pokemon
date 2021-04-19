fetch('charmander.json')
.then(response => response.json())
.then(json => init(json))
.catch(err => console.log(err));

function init(obj){
    let superObj = JSON.parse(string)
    console.log(obj)
    console.log(obj.name);
    createStats(superObj)
}

function createStats(obj){
const STATS = obj["stats"];
for(STATS of charmander){
    const H2 = document.createElement("h2")
    const P1 = document.createElement("p1")
    const P2 = document.createElement("p2")

    H2.textContent = STATS[charmander]["name"]
    P1.textContent = `Base Stat: ${STATS[charmander]["base_stat"]}`
    P2.textContent = `Effort: ${STATS[charmander]["effort"]}`
}

}
