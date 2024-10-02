export default function ArtListItem ({artWork, url}) {
    return (
    <li>
        <div className="frame">
            <img src={`${url}${artWork.imageURL}`}
            />
        </div>
        <h3>{artWork.title}</h3>
        <p>Artist: {artWork.artist}</p>
        <h4>Publication History:</h4>
        <ul>{artWork.publicationHistory.map((text, index) =>(
            <li key={index}>
                {text}
            </li>
        ))}
            {/* <li>
                {artWork.publicationHistory[0]}
            </li>
            <li>
                {artWork.publicationHistory[1]}
            </li>
            <li>
                {artWork.publicationHistory[2]}
            </li> */}
        </ul>
    </li>
)}