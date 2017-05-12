/**
 * Created by aaxlss on 5/10/17.
 */
var data = [
    {id: 1, author: "Peter Hunt", text: "This is one comment"},
    {id: 2, author: "Jordan Walke", text: "This is *another* comment"},
]
//Component
//===JSX sintax===\\
var CommentList = React.createClass({
    render: function () {
        var commentNodes = this.props.data.map(function (comment) {
            return (
                <Comment autho={comment.author} key={comment.id}>
                    {comment.text}
                </Comment>
            )
        });
        return (
            <div className="commentList">
                {commentNodes}
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
    getInitialState: function () {
      return {data: []}
    },
    render: function () {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.state.data}/>
                <CommentForm/>
            </div>
        );
    }
});

var Comment = React.createClass({
    rawMarkup: function () {
        var md = new Remarkable();
        var rawMarkup = md.render(this.props.children.toString());
        return { __html: rawMarkup }
    },
    render: function () {
        var md = new Remarkable();
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                <span dangerouslySetInnerHTML={this.rawMarkup()}/>
            </div>
        )
    }
});
// Rendering the component
ReactDOM.render(
    //component name
    <CommentBox data={data}/>,
    //html element where the component will render
    document.getElementById('content')
);
