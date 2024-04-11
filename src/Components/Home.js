import ListCollection from './ListCollection';
import useFetch from './useFetch';

const Home = () => {
  const {
    data: lists,
    isPending,
    error,
  } = useFetch('http://localhost:8000/lists');
  console.log(lists);

  // const {
  //   data: listsTemp,
  //   isPendingTemp,
  //   errorTemp,
  // } = useFetch('data/db.json');

  // console.log(isPendingTemp);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {lists && <ListCollection lists={lists} title="Your Lists" />}
    </div>
  );
};

export default Home;
