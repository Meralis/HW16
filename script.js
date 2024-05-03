const Human = function (name, gender) {
    this.name = name;
    this.gender = gender;
}

const Flat = function () {
    this.residents = [];

    this.addResident = function (human) {
        if (human instanceof Human) {
            this.residents.push(human);
        } else {
            console.log('Only Human can be added');
        }
    }
}

const House = function (numberOfFlats) {
    this.flats = [];
    this.numberOfFlats = numberOfFlats;

    this.addFlat = function (flat) {
        if (!(flat instanceof Flat)) {
            console.log('Only Flat can be added');
            return;
        }
        if (this.flats.length >= this.numberOfFlats) {
            console.log("Can't add more flats: the house has reached its maximum capacity");
            return;
        }
        this.flats.push(flat);
    }
}

const Tom = new Human('Tom', 'male');
const Ann = new Human('Ann', 'female');
const Bob = new Human('Bob', 'male');

const flat1 = new Flat();
const flat2 = new Flat();
const flat3 = new Flat();

flat1.addResident(Tom);
flat1.addResident(Ann);
flat2.addResident(Bob);

const myHouse = new House(10);
myHouse.addFlat(flat1);
myHouse.addFlat(flat2);
myHouse.addFlat(flat3);