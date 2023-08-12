import './Navbar.css';

const Navbar = (props: any) => {
    return (
        <div className="flex items-center flex-row-reverse gap-16 font-Mont pr-24 w-screen h-20 text-inherit font-medium">
            <a href='#contact'>Contact</a>
            <a href='#skills'>Skills</a>
            <a href='#experience'>Experience</a>
            <a href='#projects'>Projects</a>
        </div>
    );
}
 
export default Navbar;

