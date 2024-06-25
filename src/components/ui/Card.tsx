import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface CardUiProps {
    imageUrl?: string;
    title?: string;
    description?: string;
    id?: string;
    handleDelete: () => void;
    handleEdit: () => void;
    handleView: () => void;
    // onEdit?: (id: string | undefined) => void;
    // onView?: (id: string | undefined) => void;
}

const CardUi: React.FC<CardUiProps> = ({ handleView, handleEdit, imageUrl, title, description, id, handleDelete }) => {
    return (
        <Card sx={{ maxWidth: 300 }}>
            <CardMedia
                component="img"
                alt={title}
                height="140"
                image={imageUrl}
            />
            {/* <img src={imageUrl} alt="" /> */}
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={handleDelete}>Delete</Button>
                <Button size="small" onClick={handleEdit}>Edit</Button>
                <Button size="small" onClick={handleView}>View</Button>
            </CardActions>
        </Card>
    );
}

export default CardUi;
