import { useSelector } from "react-redux";
const Home = () => {
  const { auth } = useSelector((data) => data);
  console.log(auth);
  return <h1>Home</h1>;
};

export default Home;
