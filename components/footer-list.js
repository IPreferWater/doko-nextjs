import PropTypes from "prop-types";
import Link from 'next/link'

function FooterList({ title, data, external }) {

    function getLink(key, url, label) {
        if (external == true) {
            return <a key={key}
                href={`http://${url}`}
                target="_blank"
                rel="noreferrer" >
                {label}
            </a>
        }

        return <Link
            key={key}
            href={url}>
            <a>{label}</a>
        </Link>
    }

    return (<div>
        <h3 className="text-white">{title}</h3>
        <ul>
            {data.map((d, i) => {
                return (<li key={i}>
                    {getLink(i, d.url, d.label)}
                </li>)
            })}
        </ul>
    </div>
    );
}

FooterList.propTypes = {
    title: PropTypes.string,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            url: PropTypes.string
        })
    ),
    external: PropTypes.bool
};

export default FooterList;
