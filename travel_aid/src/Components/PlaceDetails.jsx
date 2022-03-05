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
              image={this.props.place.photo ? this.props.place.photo.images.large.url : 'data:image/jpeg;base64,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'}
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