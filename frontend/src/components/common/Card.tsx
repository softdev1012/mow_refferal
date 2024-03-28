import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const PerkCard = () => {
  return (
    <Card sx={{ maxWidth: 345, marginTop: "1rem", borderRadius: 5 }}> {/* Added borderRadius: 10 */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          SPECIAL PERK
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          75$
        </Typography>
        <Typography variant="body2" color="text.secondary">
          A perk typically refers to a benefit or advantage that someone receives as a result of their position, status, or affiliation with a particular group or organization.
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center' }}>
        <Button size="small">Edit</Button>
        <Button size="small">Delete</Button>
      </CardActions>
    </Card>
  );
}

export default PerkCard;
