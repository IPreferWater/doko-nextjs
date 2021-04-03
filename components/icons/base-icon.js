

export function BaseIcon(props) {

	return (
        <img className={`${props.className}`} src={require( "./base.svg")} />
	);
}

