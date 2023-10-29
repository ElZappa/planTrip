import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ItemCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            NZ
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Italia - Nueva Zelanda"
        subheader="Marzo 14, 2024"
      />
      <CardMedia
        component="img"
        height="194"
        image="data:image/jpeg;base64,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"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Vacaciones para 2 personas, incluyendo hospedaje, comidas y extras.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}