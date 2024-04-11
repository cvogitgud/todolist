import ListCollection from './ListCollection';
import useFetch from './useFetch';

const Home = () => {
  const { data: lists, isPending, error } = useFetch('data/db.json');

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {lists && <ListCollection lists={lists} title="Your Lists" />}
    </div>
  );
};

export default Home;
