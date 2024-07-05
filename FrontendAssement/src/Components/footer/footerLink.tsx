type props = {
    label?:string;
    link?:string;
}
export const FooterLink = ({link,label}:props) => {
    return (
        <a href={link}>{label}</a>
    )
}