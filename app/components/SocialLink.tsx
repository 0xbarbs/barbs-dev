export const SocialLink = ({
  image,
  url,
}: {
  image: string;
  url: string;
}) => {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      href={url}
      style={{
        display: 'block',
        width: 64,
        height: 64,
        margin: '0 8px',
        borderRadius: 12,
        background: `url(${process.env.NEXT_PUBLIC_URL}/${image})`,
        backgroundSize: 'contain',
      }}/>
  );
};