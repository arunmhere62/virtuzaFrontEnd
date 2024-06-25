import { Grid } from '@mui/material'
import React from 'react'
import TableHeader from '../../components/layouts/TableHeader'
import { Add } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux-store/store';
import { useNavigate } from 'react-router-dom';
import { clearData } from '../../redux-store/global/globalState';

const UserProfileScreen = () => {

    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const buttons = [
        {
            label: 'Create User Profile', icon: Add, onClick: () => {
                dispatch(clearData());
                navigate("/userProfile/create")
            }
        },
    ];
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} >
                <TableHeader
                    headerName="Create User Profile"
                    buttons={buttons}
                />
            </Grid>
        </Grid>
    )
}

export default UserProfileScreen