import "/src/styles/Contact.css";
import parse from "html-react-parser";

function Contact(props) {
  return (
    <>
      {props.contactList.map((item, index) => {
        return (
          <div className="footer-section" key={index}>
            <h3>{item.title}</h3>
            <p>{parse(item.description)}</p>
          </div>
        );
      })}
    </>
  );
}
export default Contact;
