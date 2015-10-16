/** @jsx React.DOM */

define(["react"],function(React) {
    return React.createClass ({
        timeDifference: function(current, previous) {
            var i = 0;
            var period;
            while (current[i]){
              if (current[i] === previous[i]){
                i++;
              }  else {
                if (i === 0){
                  period = "years";
                }
                if (i === 1){
                  period = "months";
                }
                if (i === 2){
                  period = "day";
                }
                if (i === 3){
                  period = "hours";
                }
                if (i === 4){
                  period = "mins";
                }
                if (i === 5){
                  period = "secs";
                }
                return "" + current[i] - previous[i] + " " + period + " ago";
              }
            }
        },
        render: function () {
          var currenttime = new Date();
          var current = [currenttime.getFullYear(), currenttime.getMonth(), currenttime.getDate(), currenttime.getHours(), currenttime.getMinutes(),currenttime.getSeconds()];
          var posttime = [];
          var created = this.props.created;
          posttime[0] = parseInt(created.substr(0,4));
          posttime[1] = parseInt(created.substr(8,9));
          posttime[2] = parseInt(created.substr(5,6));
          posttime[3] = parseInt(created.substr(11,12));
          posttime[4] = parseInt(created.substr(14,15));
          posttime[5] = parseInt(created.substr(17,18));
          var relativetime = this.timeDifference(current, posttime);
            return (
                <div className="postBox">
                  <div className="row one">
                    <img src={this.props.thumbnail.url} alt='thumbnail' className='thumbnailimage'></img>
                    <div className="author">{this.props.author}</div>
                    <div className="time">Posted: {relativetime}</div>
                  </div>
                  <div className="row">
                    <img src={this.props.photo.url} alt='photo' className='photoimage'></img>
                    <div className="note">{this.props.note}</div>
                  </div>
                  <div className="row">
                    <span className="likes">Likes: {this.props.likeCount}</span>
                    <span className="comment">Comments: {this.props.commentCount}</span>
                  </div>
                </div>
                );
        }
    });
});
