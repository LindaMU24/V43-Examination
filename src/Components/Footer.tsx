import '../App.css';

interface FooterProps {
    footerTxt: string,
    footerAuthor: string
}


const Footer = (props: FooterProps) => {

return (
    <footer>
    <h2> {props.footerTxt} </h2>
    <h3> {props.footerAuthor} </h3>
</footer>
);

};

export default Footer;


