const Comment = ({comment}) => {
    return (
      <div className="card bg-base-100">
        <div class="text-center">
        {/* <img src={info.pic} alt="pic" class="rounded-xl" /> */}
        <span className="avatar" >
        <img width={400} height={400} src={comment.icon} alt="pic" />
        </span>
  
          <h2 className="text-5xl font-bold" > {comment.quantity}  </h2>
            <span className="text-primary" >{comment.name}</span>
        </div>
      </div>
    );
  };
  
  export default Comment;