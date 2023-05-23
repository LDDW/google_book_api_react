export default function BookCard(props) {
    return (
        <div className="w-1/2 bg-gray-50 rounded-sm border p-4 flex flex-col gap-4">
            <img src={props.book.volumeInfo.imageLinks?.thumbnail} alt={props.book.volumeInfo.title} className="w-1/3"/>
            <h1 className="font-bold">{props.book.volumeInfo.title}</h1>
            <h2 className="font-semibold">{props.book.volumeInfo.authors}</h2>
            <p className="text-sm">{props.book.volumeInfo.description}</p>
        </div>
    );
}
