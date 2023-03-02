import Header from "./Header";
import '../css/main.css';

function Contact() {
    return (
        <>
        <form>
            <h3>Login Here</h3>

            <label for="username">Username</label>
            <input type="text" placeholder="Email or Phone" id="username"/>

            <label for="password">Password</label>
            <input type="password" placeholder="Password" id="password"/>

            <button>Log In</button>
            <div class="social">
            <div class="go">Google</div>
            <div class="fb">Facebook</div>
            </div>
        </form> 
        </>
    )
}
export default Contact