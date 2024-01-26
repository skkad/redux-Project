import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

const PostAuthor = ({ userId }) => {
  //   const users = useSelector(selectAllUsers);
  const users = [
    { id: "0", name: "Dude Lebowski" },
    { id: "1", name: "Neil Young" },
    { id: "2", name: "Dave Gray" },
  ];
  console.log("users:", users);
  const author = users?.find((user) => user.id === userId);
  return <span>by {author ? author.name : "Unknown author"}</span>;
};

export default PostAuthor;
