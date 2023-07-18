import './Navbar.css';

const Navbar = (props: any) => {
    return (
        <div className="flex flex-row-reverse gap-7 font-Mont pr-10 w-screen h-20 text-white">
            <button>Contact</button>
            <button>Skills</button>
            <button>Experience</button>
            <button>Projects</button>
            <button>Home</button>
        </div>
    );
}
 
export default Navbar;