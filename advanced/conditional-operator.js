// const myAge = 27;
// const message = myAge >= 18 ? 'You can vote' : 'You cannot vote';
// console.log(message);

const myAge = 27;

const showPage = () => {
    return 'Showing the page';
}

const showErrorPage = () => {
    return 'Showing the error page';
}

const message = myAge >= 21 ? showPage() : showErrorPage()

const team = ['Tyler', 'Porter', 'Romeo', 'Jerry', 'LaTisha'];

const teamMessage = team.length <= 4 ? `Team size ${team.length}` : `Too many people on your team`

console.log(teamMessage);
