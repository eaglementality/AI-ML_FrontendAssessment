import { FooterLink } from "./footerLink"

export const Footer = () => {
    return (
        <footer className="w-full  flex space-x-5 justify-center p-5 bg-black text-white absolute bottom-0">
                <FooterLink label={'Contact Us'} link={'/contact'}/>
                <FooterLink label={'Blog site'} link={'/blog'}/>
        </footer>
    )
}