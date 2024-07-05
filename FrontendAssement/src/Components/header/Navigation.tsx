import { NavigationItems } from "./navitems";

export const Navigation = () =>{
    const navItems:{id:number, link:string, label:string}[] = [{id:0, link: "/about", label: "About Us"},{id:1, link:'/contact',label:'Contact Us'}, {id:0, link:'/testimonials',label:'Testimonials'}];
    return (
        <nav className="flex space-x-5 py-5 pr-5">
            {navItems.map((item) => (
                <NavigationItems key={item.id} link={item.link} label={item.label}/>
            ))}
        </nav>
    )
}