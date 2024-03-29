import ListCollection from './ListCollection';
import useFetch from './useFetch';

const Home = () => {
  const {
    data: lists,
    isPending,
    error,
  } = useFetch('http://localhost:8000/lists');

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {lists && <ListCollection lists={lists} title="Your Lists" />}
    </div>
  );
};

export default Home;
