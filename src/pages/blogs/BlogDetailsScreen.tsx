import React from 'react';
import { useSelector } from 'react-redux';
import { Typography, Box } from '@mui/material';

const BlogDetailsScreen = () => {
    const blogDetails = useSelector((state: any) => state.globalState.data);

    const keysToDisplay = ["title", "description", "author", "content", "imageUrl"];

    return (
        <Box>
            <Typography variant="h6" gutterBottom>Blog Details</Typography>
            {blogDetails ? (
                <Box sx={{ marginTop: "20px" }} >
                    {keysToDisplay.includes('imageUrl') && blogDetails.imageUrl && typeof blogDetails.imageUrl === 'string' && (
                        <Box sx={{ marginBottom: "20px" }}>
                            <img src={blogDetails.imageUrl} alt={blogDetails.title} style={{ width: "200px", height: "200px" }} />
                        </Box>
                    )}
                    {Object.entries(blogDetails)
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
        </Box>
    );
}

export default BlogDetailsScreen;
