import AbstractView from './AbstractView.js';

class Dashboard extends AbstractView {
    constructor() {
        super();
    }

    async render() {
        return `<p>Does this work?</p>`
    }
}

export default Dashboard;