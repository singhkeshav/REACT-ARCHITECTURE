import React from 'react';
import { isLoader } from '../../../../store/actions';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
const UserDashboard = () => {
    const dispatch = useDispatch();
    const load = () => {
        dispatch(isLoader());
        setTimeout(()=>{ dispatch(isLoader());},5000)
    }
    return (
        <div>
            <Button variant="contained" color="primary" onClick={() => load()}>Loader</Button>
        </div>
    )
}

export default UserDashboard;