import styles from '../styles/Home.module.css'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import Post from '@components/post'
import dynamic from 'next/dynamic'
const MapNoSsr = dynamic(
  () => import('@components/map'),
  { ssr: false }
)

export default class Home extends React.Component {

  state = { imgLoaded: false, mmm: <div>waiting</div> };
  t = {


  }
  componentDidMount() {
    this.setState({ imgLoaded: true })
  }
  render() {
    console.log("api?")
    console.log(this.props.todo)
    return (
      <div className={styles.container}>
       <MapNoSsr posts={this.props.todo}/>
        {this.props.todo.map((post, i) =>
          <Post key={i} title={post.title} txt={post.txt} url={post.url} />
        )}
      </div>
    )
  }
}

export async function getStaticProps() {

const body = {"username":"ipreferwater","password":"password"}
//TODO to improve, this is dangerous
process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
console.log(body)
let response = await fetch('https://localhost:8000/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body: JSON.stringify(body)
});



console.log(response.status)
let result = await response.json();
console.log(result.access_token)

const token = "Bearer "+result.access_token
  const client = new ApolloClient({
    uri: 'https://localhost:8000/query',
    cache: new InMemoryCache(),
    headers: {
      authorization: token,
    }
  });

  const { data } = await client.query({
    query: gql`query post {posts{posts{title,text,latitude, longitude}}}`
  });

  return {
    props: {
      todo: data.posts.posts,
    },
    //everydays
    revalidate: 86400,
  }
}