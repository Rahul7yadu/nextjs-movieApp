import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Result from "../components/Results";
import requests from "../util/request";
function Home(props) {
 const results = props.results;
  console.log(props);
  return (
    <div>
      {" "}
      <Head>
        <title>Hulu 2.0</title>
      </Head>
      <Header></Header>
      <Nav></Nav>
      <Result results = {results}></Result>
    </div>
  );
}

export default Home;

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  console.log(genre)

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`).then((res)=> res.json());
console.log(request);
  return {
    props: {
      
      results: request.results,
    },
  };
}
