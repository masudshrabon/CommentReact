var Comment = React.createClass({
    render: function() {
        return (
            <div className="demo panel panel-body">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                {this.props.children}
            </div>
        );
    }
});

var CommentList = React.createClass({
    render: function() {
		var commentNodes = this.props.data.map(
				function(comment){
					return(
						<Comment author={comment.author} key={comment.id}>{comment.text}</Comment>
					);
				}
		);
        return (
            <div className="commentList">
                Hello, world! I am a CommentList.
				{commentNodes}
                {/*<Comment author="Pete Hunt">This is one comment</Comment>
                <Comment author="Jordan Walke">This is *another* comment</Comment>*/}
          </div>
      );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        Hello, world! I am a CommentForm.
      </div>
    );
  }
});

var data = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

var CommentBox = React.createClass({
	render: function(){
		return (
			<div className="commentBox">
				Hello, world! I am a CommentBox.
				<CommentList data={this.props.data}/>
				<CommentForm />
			</div>
		);
	}
});

ReactDOM.render(
	<CommentBox data={data}/>,
	document.getElementById('content')
);
