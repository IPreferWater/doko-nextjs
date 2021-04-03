import PropTypes from "prop-types";

function ZoneTxt({ txt, img, imgLeft }) {

    const txtZone = <div className="md:w-2/3 md:mr-8 text-left">
        <div className="pl-4 font-serif text-justify border-gray-900">
            {txt}
        </div>
    </div>

    const imgZone = <figure className="w-2/3 md:w-1/3">
        <img alt="A dog relaxing" src={img} />

    </figure>

    if (imgLeft) {
        return <section className="flex flex-col items-center md:flex-row">
            {imgZone}
            {txtZone}
        </section>
    }

    return <section className="flex flex-col items-center md:flex-row">
        {txtZone}
        {imgZone}
    </section>
}

ZoneTxt.propTypes = {
    txt: PropTypes.string,
    img: PropTypes.string,
    imgLeft: PropTypes.bool,
};

export default ZoneTxt;