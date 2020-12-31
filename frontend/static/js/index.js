import Dashboard from '../views/Dashboard.js';

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}

const router = async() => {
    const routes = [
        { path: "/", view: Dashboard },
        // { path: "/posts", view: () => console.log("Viewing Posts")},
        // { path: "/settings", view: () => console.log("Viewing Settings")}
    ];

    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        }
    })

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    if(!match) {
        match = {
            route: routes[0],
            isMatch: true
        }
    }

    const view = new match.route.view();

    document.querySelector("main").innerHTML = await view.render();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if(e.target.tagName.toLowerCase() === 'a' && e.target.matches("a[href^='/'")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })

    router();
})