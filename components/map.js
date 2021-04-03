import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'


export function Map({ posts }) {
    var lastPostInserted = posts[0];
    return (
        <MapContainer center={[lastPostInserted.latitude, lastPostInserted.longitude]} zoom={15} scrollWheelZoom={false} style={{ height: 400, width: "100%" }}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {posts.map((post, i) =>
                <Marker key={i} position={[post.latitude, post.longitude]}
                
                icon={L.divIcon({
                    iconSize: [10, 10],
                    iconAnchor: [10 / 2, 10 + 9],
                    className: "mymarker",
                    html: "😁",
                  })}
                >
                    <Popup>
                        {post.title}
                    </Popup>
                </Marker>
            )}


        </MapContainer>
    )
}

export default Map
