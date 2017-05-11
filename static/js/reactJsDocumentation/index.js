/**
 * Created by aaxlss on 5/10/17.
 */

//Component
//===Jquery sintax===\\
var CommentBox = React.createClass({
    render: function () {
        return (
            <div className="commentBox">
                Hello, world!
            </div>
        );
    }
});
// Rendering the component
ReactDOM.render(
    //component name
    <CommentBox/>,
    //html element where the component will render
    document.getElementById('content')
);
