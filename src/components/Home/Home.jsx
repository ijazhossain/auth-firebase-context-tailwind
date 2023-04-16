import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Home = () => {
    const { user } = useContext(AuthContext)
    console.log(user);
    return (
        <div>
            this is home {user && user.displayName}
        </div>
    );
};

export default Home;