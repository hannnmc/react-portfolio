import './Navbar.css';

const Navbar = (props: any) => {
    return (
        <div className="flex items-center flex-row-reverse gap-7 font-Mont pr-12 w-screen h-20 text-inherit font-medium">
            <a href='#contact'>Contact</a>
            <a href='#skills'>Skills</a>
            <a href='#experience'>Experience</a>
            <a href='#projects'>Projects</a>
            <a href='#top'>Home</a>
        </div>
    );
}
 
export default Navbar;