import "./PageNotFound.css";
import Pikachu404 from "./../../../Assets/404pikachu.jpg"

function PageNotFound(): JSX.Element {
    return (
        <div className="PageNotFound">
			<h1>404: Sorry this page couldn't be found</h1>
            <img src={Pikachu404} alt="Pikachu sad this page couldn't be found" />
        </div>
    );
}

export default PageNotFound;
