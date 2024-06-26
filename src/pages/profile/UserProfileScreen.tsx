import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux-store/store";
import { useNavigate } from "react-router";
import { useGetUserProfileByUsernameMutation } from "../../redux-store/userProfile/userProfileApi";
import { useEffect } from "react";
import { Add } from "@mui/icons-material";
import { clearData, setData } from "../../redux-store/global/globalState";
import TableHeader from "../../components/layouts/TableHeader";
import { Box, Grid, Typography } from "@mui/material";

const UserProfileScreen = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const [triggerGetUserProfileByUsername, { data: userProfile, isLoading, isError }] = useGetUserProfileByUsernameMutation();

    console.log("data", userProfile);

    useEffect(() => {
        const username = localStorage.getItem('username');
        if (typeof username === 'string') {
            triggerGetUserProfileByUsername({ userProfile: { username } });
        }
    }, [triggerGetUserProfileByUsername]);

    const createbuttons = [
        {
            label: 'Create User Profile', icon: Add, onClick: () => {
                dispatch(clearData());
                navigate("/userProfile/create");
            }
        },
    ];
    const editbuttons = [
        {
            label: 'Edit User Profile', icon: Add, onClick: () => {
                dispatch(setData(userProfile));
                navigate("/userProfile/create");
            }
        },
    ];

    const keysToDisplay = ["username", "dob", "address", "city", "email", "job", "state"];

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <TableHeader
                    headerName={userProfile ? " User Profile" : "Create User Profile"}
                    buttons={userProfile ? editbuttons : createbuttons}
                />
            </Grid>
            <Grid item xs={12}>
                {userProfile ? (
                    <Box sx={{ marginTop: "20px" }} >
                        {Object.entries(userProfile)
                            .filter(([key]) => keysToDisplay.includes(key) && key !== 'imageUrl')
                            .map(([key, value]) => (
                                <Typography key={key} variant="subtitle1" gutterBottom>
                                    <strong>{key}:</strong> {String(value)}
                                </Typography>
                            ))}
                    </Box>
                ) : (
                    <Typography variant="body1">No blog details available</Typography>
                )}
            </Grid>
        </Grid>
    );
};

export default UserProfileScreen;
