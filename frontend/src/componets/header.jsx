import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'
import { signOutAction } from "../redux/users/actions";
import { useHistory } from "react-router";
import { LOGIN_USER_KEY } from "../API";
import { useDispatch } from "react-redux";
import Search from "./default/Search";
const Header = (props) => {
    const { totalCart, setSearch, setPage } = props;
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const history = useHistory();
    const { pathname } = history.location;
    const selector = useSelector((state) => state);
    if (user) {
        console.log(user.token);
    }
    return (
        <nav>
            <div class="logo-area">
                <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
                    HIVE <br />
                    Techwear
                </Link>
            </div>

            <div class="nav-link-area">

                {user ?
                    user.token ?
                        <>
                            {setSearch && <Search setSearch={setSearch} setPage={setPage} />}
                            < span id='account' style={{ marginLeft: 'auto', marginRight: 25 }}>Welcome {user.name}</span>
                            <Link to='/cart' style={{ textDecoration: 'none', color: 'black', marginRight: 20 }}><span><i class="fas fa-cart-plus"></i></span></Link>
                        </>
                        :
                        <>
                            <Link to='/signin' style={{ textDecoration: 'none', color: 'black' }} >< span > Sign in</span></Link>
                            <Link to='/signup' style={{ textDecoration: 'none', color: 'black' }}><span>Sign up</span></Link>
                            <Link to='/cart' style={{ textDecoration: 'none', color: 'black' }}><span><i class="fas fa-cart-plus"></i></span></Link>
                        </>
                    :

                    null}

                <div id="logout" style={{
                    background: '#fff', justifyContent: 'center', alignItems: 'center',
                    position: 'fixed', top: '60px', zIndex: 999999, right: 5, height: 50, width: 100, boxShadow: "1px 1px 5px grey"
                }}

                    onClick={() => {
                        dispatch(signOutAction());
                        localStorage.removeItem(LOGIN_USER_KEY);

                        history.push("/signup");
                    }}
                >
                    Logout
                </div>

            </div>
        </nav >
    )
}

export default Header;