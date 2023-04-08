import Comment from "./Comment";

const Comments = () => {
  const comments = [
    {
      id: 0,
      image: `https://i.ibb.co/gJ1Xm1b/user4.jpg`,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, ut.",
      name:"customer name",
      location:"san diego, ca",
    },
    {
      id: 1,
      image: `https://i.ibb.co/dQmXdrC/user3.jpg`,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur cum provident harum rem exercitationem mollitia.",
      name:"customer name",
      location:"san diego, ca",
    },
    {
      id: 2,
      image: `https://i.ibb.co/nR4pyFH/user2.jpg`,
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident accusamus magni eaque quo inventore unde iste, consequatur natus quia enim necessitatibus. Iusto culpa officia necessitatibus.",
      name:"customer name",
      location:"san diego, ca",
    },
    // {
    //   id: 3,
    //   image: `https://i.ibb.co/9HWhmYk/6.jpg`,
    //   rating: "3k+",
    //   description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident accusamus magni eaque quo inventore unde iste, consequatur natus quia enim necessitatibus. Iusto culpa officia necessitatibus.",
    //   name:"customer name",
    //   location:"san diego, ca",
    // },
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
