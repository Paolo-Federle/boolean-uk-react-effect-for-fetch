
export default function ArtListItem({ artItem, index }) {
    return (
        <li key={index}>
            <div className="frame">
                <img
                    src={`https://www.artic.edu/iiif/2/${artItem.image_id}/full/843,/0/default.jpg`}
                />
            </div>
            <h3>{artItem.title}</h3>
            <p>Artist: {artItem.artist_title}</p>
            <h4>Artistic Subjects:</h4>
            <ul>
                {/* {console.log("subject_titles is:", artItem.term_titles)} */}
                {artItem.term_titles.map((element, index) => {
                    return <li key={index}>{element}</li>
                })
                }
            </ul>
        </li>
    );
}