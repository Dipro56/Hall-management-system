import React from 'react';
import { useAdminCredential } from '../../Hooks/useAdminCredential';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AdminRequiredAuth } from '../RequiredAuth/AdminRequiredAuth/AdminRequiredAuth';

export const Adminpage = () => {
  //const [adminCredential, setAdminCredential] = useState([]);
  const { adminCredential } = useAdminCredential();

  // const [adminLogin, setAdminLogin] = useState(false);

  const navigate = useNavigate();
  //const location = useLocation();

  //let form = '/dashboard';

  const adminFormController = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    console.log(email, password);

    // const adminInfo = { email, password };

    if (
      adminCredential[0].email === email &&
      adminCredential[0].password === password
    ) {
      console.log('admin matched', adminCredential[0]._id);
      // setAdminLogin(true);
      navigate(`/admin/${adminCredential[0]._id}`, { replace: true });
    } else {
      console.log('wrong credential');
      console.log(adminCredential.email, adminCredential.password);
      // setAdminLogin(false);
      <AdminRequiredAuth adminLoginState={false} />;
      alert('Give proper email and password');
    }

    //fetch post code

    // fetch('http://localhost:5000/admin', {
    //   method: 'POST', // or 'PUT'
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(adminInfo),
    // })
    //   .then((response) => response.json())
    //   .then((adminInfo) => {
    //     console.log('Success:', adminInfo);
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error);
    //   });
  };

  return (
    <div className="container col-lg-6 col-md-12 col-sm-12 mt-5  bg-light p-5 shadow">
      <form onSubmit={adminFormController}>
        <div className="form-group">
          <label for="exampleInputEmail1">
            <h5>Admin Email</h5>
          </label>
          <input
            type="email"
            className="form-control m-3 p-3 shadow"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Email"
            required
          />
        </div>
        <br />
        <div className="form-group">
          <label for="exampleInputPassword1">
            <h5>Password</h5>
          </label>
          <input
            type="password"
            className="form-control m-3 p-3 shadow"
            id="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>
        <br />

        <p className="danger">
          {' '}
          <Link className="nav-item nav-link fs-5" to="/adminPasswordReset">
            Reset password?
          </Link>
        </p>

        <button type="submit" className="btn btn-primary m-3 ">
          Submit
        </button>
      </form>
    </div>
  );
};
