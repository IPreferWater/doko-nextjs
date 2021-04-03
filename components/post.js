import PropTypes from "prop-types";

function Post({ title, txt, url }) {
  return (<div>
    <h2 className="text-2xl">{title}</h2>
    <div>{txt}</div>
    {url != null && <div>{url}</div>}
  </div>
  );
}

Post.propTypes = {
  title: PropTypes.string,
  txt: PropTypes.string,
  url: PropTypes.string
};

export default Post;
