const Person = props => {
    return React.createElement('div', {}, [
        React.createElement('h1', {}, props.name),
        React.createElement('p', {}, props.occupation)
    ])

}
const App = () => {
    return React.createElement('div', {}, [
        React.createElement('h1', { className: 'title' }, 'React is rendered'),
        React.createElement(Person, { name: 'Manideep', occupation: 'front-end devloper' }, null),
        React.createElement(Person, { name: 'Pankaj', occupation: 'Banker' }, null),
    ])
}

ReactDOM.render(React.createElement(App), document.getElementById('root'))