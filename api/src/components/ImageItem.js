function ImageItem({ image }) {
  return (
    <div>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className="imgList"
      />
    </div>
  );
}

export default ImageItem;
