//sarcinele nt. 1-7
class Worker {
    constructor(name, surname, hourRate, hours) {
        this._name = name;
        this._surname = surname;
        this._hourRate = hourRate;
        this._hours = hours;
    }
    
    get name() {
        return this._name;
    }
    
    get surname() {
        return this._surname;
    }
    
    get hourRate() {
        return this._hourRate;
    }
    
    get hours() {
        return this._hours;
    }
    
    getSalary() {
      return this._hourRate * this._hours;
    }
    
    increaseHourRate(increaseAmount) {
        this._hourRate += increaseAmount;
    }
    
    setTax(taxPercent) {
        this._taxPercent = taxPercent;
    }
    
    getSalaryNetto() {
        const salary = this.getSalary();
        const taxAmount = salary * (this._taxPercent / 100);
        return salary - taxAmount;
    }
}

const worker1 = new Worker('Ion', 'Creangă', 10, 176);
const worker2 = new Worker('Mihai', 'Eminescu', 12, 168);

console.log(worker1.name); // Ion
console.log(worker1.surname); // Creangă
console.log(worker1.hourRate); // 10
console.log(worker1.hours); // 176
console.log(worker1.getSalary()); // 1760

console.log(worker2.name); // Mihai
console.log(worker2.surname); // Eminescu
console.log(worker2.hourRate); // 12
console.log(worker2.hours); // 168
console.log(worker2.getSalary()); // 2016

const workers = [worker1, worker2];
let highestSalaryWorker = null;
let highestSalary = 0;

for (let i = 0; i < workers.length; i++) {
    const worker = workers[i];
    console.log(`Worker ${i + 1}: ${worker.name} ${worker.surname}`);
    console.log(`Hour rate: ${worker.hourRate}`);
    console.log(`Hours: ${worker.hours}`);
    console.log(`Salary: ${worker.getSalary()}`);

    if (worker.getSalary() > highestSalary) {
        highestSalaryWorker = worker;
        highestSalary = worker.getSalary();
    }
}

console.log(`\nThe worker with the highest salary is ${highestSalaryWorker.name} ${highestSalaryWorker.surname} with a salary of ${highestSalary}`);
console.log(`Increasing hour rate of worker 1 by 2...`);
worker1.increaseHourRate(2);
console.log(`Worker 1's new salary: ${worker1.getSalary()}`);

console.log(`Setting tax to 18% for worker 2...`);
worker2.setTax(18);
console.log(`Worker 2's net salary: ${worker2.getSalaryNetto()}`);

const worker3 = new Worker('Alexandru', 'Lapusneanu', 9, 192);
const allWorkers = [worker1, worker2, worker3];

for (let i = 0; i < allWorkers.length; i++) {
    const worker = allWorkers[i];
    console.log(`Worker ${i + 1}: ${worker.name} ${worker.surname}`);
    console.log(`Hour rate: ${worker.hourRate}`);
    console.log(`Hours: ${worker.hours}`);
    console.log(`Salary: ${worker.getSalary()}`);
    console.log(`Net Salary: ${worker.getSalaryNetto()}`);
    console.log();
}
