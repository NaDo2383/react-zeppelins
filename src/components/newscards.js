export default function NewsCards({ cards }) {
    return (
        <div id='cards'>
            {
                cards.map(a => {
                    return a
                })
            }
        </div>
    )
}