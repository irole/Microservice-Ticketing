import {useState} from "react";
import axios from 'axios';
import useRequest from "../../hooks/use-request";
import {useRouter} from "next/router";

export default function register() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //const [errors, setErrors] = useState([]);
    const {doRequest, errors} = useRequest({
        url: '/api/users/register',
        method: 'post',
        body: {
            email,
            password
        },
        onSuccess: () => router.push('/')
    });
    const router = useRouter();

    const onSubmit = async (event) => {
        event.preventDefault();
        await doRequest();
        // try {
        //     const response = await axios.post('/api/users/register', {
        //         email,
        //         password
        //     });
        //
        //     //console.log(response.data);
        // } catch (err) {
        //     setErrors(err.response.data.errors);
        // }
    };
    return (
        <form onSubmit={onSubmit}>
            <h1>Sign Up</h1>
            <div className="form-group">
                <label>Email Address</label>
                <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="form-control"/>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type="password" className="form-control"/>
            </div>
            {errors}
            <button className="btn btn-primary">Sign Up</button>
        </form>
    );
}