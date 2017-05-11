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

class MiComponent extends React.PureComponent{
    constructor(props){
        super(props)

        this.state = {
            count: 0,
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({
            count: this.state.count + 1,
        });
    }

    render (){
        const name = this.props.name;
        return (
          <h1 id="Title" onClick={this.handleClick}>
              Hola {name} {this.state.count}
          </h1>
        );
    }
}

// const hola = React.createElement(Hola, {
//     name: 'Platzi',
// });

ReactDOM.render(
   <MiComponent name=" Platzi"/>,
    document.getElementById('app')
)
