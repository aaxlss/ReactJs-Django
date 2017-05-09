/**
 * Created by aaxlss on 5/8/17.
 */
function Hola(props) {
    const name = props.name;

    // creando componente con JSX
    return (
      <h1 id="Title">
          Hola {name}
      </h1>
    );
    // return React.DOM.h1({
    //     id: 'Title',
    // }, `Hola ${name}`);
}

// const hola = React.createElement(Hola, {
//     name: 'Platzi',
// });

ReactDOM.render(
    <Hola name = 'Platzi' />,
    document.getElementById('app')
)

setTimeout(
    () => {
        ReactDOM.render(
            // React.createElement(Hola, {name: "Platzi!"}),
            <Hola name = 'Platzi!' />,
            document.getElementById('app')
        );
},
1000
)