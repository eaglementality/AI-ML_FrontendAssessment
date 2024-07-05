type props = {
  src?: string;
  alt?: string;
  link?: string;
  LogoStlye?: string;
};
export const Logo = ({ src, alt, link,LogoStlye }: props) => {
  return (
    <>
      {link !== undefined ? (
        <a href={link}>
          <img src={src} alt={alt} className={LogoStlye} />
        </a>
      ) : (
        <img src={src} alt={alt} className={LogoStlye} />
      )}
    </>
  );
};
