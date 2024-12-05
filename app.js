const diceRoller = {
    numberSelected: null,
    proficiencyEnabled: false,
    advantageEnabled: false,

    // Toggle a number on or off, turning all others off
    selectNumber(num) {
        this.numberSelected = this.numberSelected === num ? null : num;
    },

    // Toggle proficiency or advantage
    toggle(key) {
        this[key] = !this[key];
    },

    // Roll logic
    roll() {
        alert(`Rolling with:
    Number Selected: ${this.numberSelected !== null ? this.numberSelected : 'None'}
    Proficiency: ${this.proficiencyEnabled}
    Advantage: ${this.advantageEnabled}`);
    },
};