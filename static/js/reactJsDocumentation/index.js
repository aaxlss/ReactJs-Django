/**
 * Created by aaxlss on 5/10/17.
 */

//Component
//===JSX sintax===\\
var CommentList = React.createClass({
    render: function () {
        return (
            <div className="commentList">
                <Comment author="Pete Hunt">
                    This is one comment
                </Comment>
                <Comment author="Jordan Walke">
                    This is another comment
                </Comment>
            </div>
        );
    }
});

var CommentForm = React.createClass({
    render: function () {
        return (
            <div className="commenForm">
                CommentForm
            </div>
        );
    }
});

var CommentBox = React.createClass({
    render: function () {
        return (
            <div className="commentBox">

                <h1>Comments</h1>
                <CommentList/>
                <CommentForm/>
            </div>
        );
    }
});

var Comment = React.createClass({
    render: function () {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                {this.props.children}
            </div>
        )
    }
});
// Rendering the component
ReactDOM.render(
    //component name
    <CommentBox/>,
    //html element where the component will render
    document.getElementById('content')
);
