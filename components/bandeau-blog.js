import { LazyImage} from '@components/lazy-image'
import Link from 'next/link'

export class BandeauBlog extends React.Component {
    state = {imgLoaded: true};
    render() {
        return (
            <section className="w-full">
               <div className="flex flex-wrap content-center justify-between">
               {this.props.latestPosts.map((post, i) =>
               <Link key={i} href={`/posts/${post.slug}`}>
               <div  className="h-64 w-64">
                   <LazyImage  fileName={post.image} loaded={this.state.imgLoaded} ></LazyImage>
                   </div>
               </Link>

    )}
                   </div>
            </section>
        )
    }

}