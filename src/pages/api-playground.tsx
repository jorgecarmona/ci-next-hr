import React from 'react'
import { useLoginMutation } from '../store/api-slice/auth-slice'

export default function ApiPlayground() {
    const [login, { isLoading, error, data }] = useLoginMutation();
    const [loginToken, setLoginToken] = React.useState('');

    React.useEffect(() => {
        const loginUser = async () => {
            const token = await login({email:'nancy.blanco.suarez@gmail.com', password:'Hello123'}).unwrap();
            // setLoginToken(token);
            console.log(token);
        }

        loginUser();
    }, [login]);

    return (
        <div>Api Playground</div>
    )
}
