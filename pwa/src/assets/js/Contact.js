import Header from "./Header";
import '../css/main.css';

function Contact() {
    return (
        <>
        <Header/>
        <div className="loginback">
            <form classname="loginbox">
                <label for="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required></input>
                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required></input>
                <button type="submit">Login</button>
                <label>
                <input type="checkbox" checked="checked" name="remember"></input>Remember Me?
                </label>
            </form>
        </div>
        </>
    )
}
export default Contact