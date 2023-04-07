import logo from './logo.svg';
import './index.css';
import SubmitButton from './components/SubmitButton';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">

        <div className="col-sm-6 one-vh bg-dark landingImage">
          <img src="https://login-page-lem0n.netlify.app/login2.svg" 
          alt="Login" className="loginImage wmt-10 ml-5" />
        </div>

        <div className="col-sm-6 one-vh">

            <h1 className="wmt-10 ml-5 text-dark bold-font-1 login-text">
                Login
            </h1>

            <p className="ml-5 login-text">
              Please sign in to continue
            </p>

            <div className="ml-5 mr-5">
                <form>
                    <input type="text" className="form-control form-control-lg mb-3" 
                    placeholder="Email" name="email" id="login-email" />
                    <input type="password" className="form-control form-control-lg mb-3" 
                    placeholder="Password" name="password" id="login-password" />
                    <a href="#" className="text-secondary">
                      <i className="fa fa-question-circle-o"></i>
                      <u>Forget password</u>
                    </a>
                    <SubmitButton />
                </form>
            </div>

        </div>

      </div>
    </div>
  );
}

export default App;
