export default function NewsCat({ nav1 }) {
    return (
        <div id="nav1">
            {nav1.map(nava1 => (
                <a href="#" className="newsCat">{nava1}</a>
            ))}
        </div>
    )
}