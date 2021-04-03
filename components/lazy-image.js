//import PropTypes from "prop-types";

export function LazyImage({fileName, loaded, className, objectBehavior}) {

   function getObjectBehavior(){
        if (objectBehavior == null || objectBehavior == ""){
            return "object-cover"
        }
        return objectBehavior
    }
    //TODO i would prefer this component doesn't handle by hitself to add the "image" prefix
    return (
        <div className={`relative ${className}`}>
        <img className={`absolute blur ${loaded ? "invisible" : "visible w-full h-full"}`}  src={require(`images/${fileName}?lqip`)} />
        <img className={`${getObjectBehavior()} ${loaded ? "visible w-full h-full" : "invisible"}`} src={require(`images/${fileName}`)} />
        </div>
    )
}

/*LazyImage.propTypes = {
    fileName: PropTypes.string,
    loaded: PropTypes.bool,
};*/