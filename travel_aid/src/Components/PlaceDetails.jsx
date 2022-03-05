import React, { createRef } from 'react'
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@mui/material'
import { Rating } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';

class PlaceDetails extends React.Component {

  constructor(props) {
    super(props)
    this.myRef = createRef()
  }

  componentDidMount() {
    if (this.props.clicked) {
      console.log(this.props.place)
      this.myRef?.current?.scrollIntoView( { behavior: "smooth" } )
    }
  }

  componentDidUpdate() {
    if (this.props.clicked) {
      console.log(this.props.place)
      this.myRef?.current?.scrollIntoView( { behavior: "smooth", block: "start" } )
    }
  }
  
  render () {
    
    return (
      <Card elevation={6} ref={this.myRef}>
          <CardMedia
              style={{ height: 300 }}
              image={this.props.place.photo ? this.props.place.photo.images.large.url : 'https://b2303ztyja-flywheel.netdna-ssl.com/wp-content/uploads/2022/03/homemade-cajun-seafood-boil-picture-id1066210358-324x160.jpg'}
              title={this.props.place.name}
        />
        <CardContent>
            <Typography gutterBottom variant='h5'>{this.props.place.name}</Typography>
            <Box display="flex" justifyContent="space-between" my={2}>
              <Rating name="read-only" value={Number(this.props.place.rating)} readOnly />
              <Typography component="legend">{this.props.place.num_reviews} review{this.props.place.num_reviews > 1 && 's'}</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography component="legend">Price</Typography>
              <Typography gutterBottom variant="subtitle1">
                  {this.props.place.price}
              </Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography component="legend">Ranking</Typography>
              <Typography gutterBottom variant="subtitle1">
                  {this.props.place.ranking}
              </Typography>
            </Box>
            {this.props.place?.awards?.map((award, i) => (
              <Box key={i} display="flex" justifyContent="space-between" my={1} alignItems="center">
                  <img src={award.images.small} alt="Award"/>
                  <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
              </Box>
            ))}
            {this.props.place?.cuisine?.map(({ name }) => (
              <Chip key={name} size="small" label={name} sx={{margin: '5px 5px 5px 0'}} />
            ))}
            {this.props.place.address && (
              <Typography gutterBottom variant="body2" color="textSecondary" sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px'}}>
                  <LocationOnIcon />{this.props.place.address}
              </Typography>
            )}
            {this.props.place.phone && (
              <Typography variant="body2" color="textSecondary" sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                  <PhoneIcon /> {this.props.place.phone}
              </Typography>
            )}
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={() => window.open(this.props.place.web_url, '_blank')}>
            Trip Advisor
          </Button>
          <Button size="small" color="primary" onClick={() => window.open(this.props.place.website, '_blank')}>
            Website
          </Button>
        </CardActions>
      </Card>
    )
  }

} 

export default PlaceDetails