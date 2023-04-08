import Comment from "./Comment";

const Comments = () => {
  const comments = [
    {
      id: 0,
      icon: `https://i.ibb.co/fpyrSgd/flag.jpg`,
      quantity: 5,
      name: "Countries",
    },
    {
      id: 1,
      icon: `https://i.ibb.co/qrCv4T5/projects.jpg`,
      quantity: "6+",
      name: "Complete projects",
    },
    {
      id: 2,
      icon: `https://i.ibb.co/HGRrVMg/people.jpg`,
      quantity: "94+",
      name: "happy clients",
    },
    {
      id: 3,
      icon: `https://i.ibb.co/n7K6JWn/feedback.jpg`,
      quantity: "3k+",
      name: "Publick actions",
    },
    // {
    //   id: 4,
    //   icon: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb1w9XivnQ-AKv0B3Sucz3DjGHCvvtHu1tPQ&usqp=CAU`,
    //   quantity: "3k+",
    //   name: "Publick actions",
    // },
  ];

  return (
    <div id="comments bg-white">
      <span className="flex justify-center items-center">
        <h2
          className="text-5xl text-primary"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          {/* Public reaction {comments.length}  */}
          All comments here
        </h2>
      </span>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-16">
        {comments.map((comment) => (
          <Comment key={comment._id} comment={comment}></Comment>
        ))}
      </div>
    </div>
  );
};

export default Comments;
