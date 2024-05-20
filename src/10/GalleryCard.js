export default function GalleryCard({ imgUrl, title, content, spTag }) {
    const sptags = (spTag.includes(",") ? spTag.split(",") : [spTag]).map(
        (item) => (
            <span
                className="inline-block bg-gray-200 
                                                    rounded-full px-3 py-1 
                                                    text-sm font-semibold
                                                    text-gray-700 mr-2 mb-2"
                key={item}
            >
                {item}
            </span>
        )
    );

    console.log("sptags", sptags);
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
                className="w-full"
                src={
                    imgUrl.includes("http:")
                        ? imgUrl.replace("http:", "https:")
                        : imgUrl
                }
                alt={title}
            />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                {content && (
                    <p className="text-gray-700 text-base">{content}</p>
                )}
            </div>

            {spTag && (
            <div className="px-6 pt-4 pb-2">{sptags}</div>)}
        </div>
    );
}
