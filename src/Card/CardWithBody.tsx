// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
// import IconButton, { IconButtonProps } from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import EditIcon from '@mui/icons-material/Edit';
// import './CardWithBody.css';

// interface ExpandMoreProps extends IconButtonProps {
//   expand: boolean;
// }

// const ExpandMore = styled((props: ExpandMoreProps) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme }) => ({
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
//   variants: [
//     {
//       props: ({ expand }) => !expand,
//       style: {
//         transform: 'rotate(0deg)',
//       },
//     },
//     {
//       props: ({ expand }) => !!expand,
//       style: {
//         transform: 'rotate(180deg)',
//       },
//     },
//   ],
// }));

// export default function CardWithBody (props) {
//   const {uniqueKey, img, price, description, description2,moreInfo, name } = props;
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <Card sx={{ maxWidth: 345}} key={uniqueKey}>
//       <CardHeader
//         avatar={
//           <Avatar sx={{ bgcolor: red[500] }} aria-label="card header">
//             {name.charAt(0).toUpperCase()}
//           </Avatar>
//         }
//         title={name}
//       />
//       <CardMedia
//         component="img"
//         height="100"
//         image={img}
//         alt= {name}
//       />
//       <CardContent>
//         {/* <div> */}
//         <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//          {description}
//         </Typography>
//         {/* </div>
//         <div> */}
//           <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//          price: {price}
//         </Typography>
//         {/* </div> */}
        
//       </CardContent>
//       <CardActions disableSpacing>
//          <span onClick={() =>{}}><EditIcon/></span>
//         <ExpandMore
//           expand={expanded}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//           <ExpandMoreIcon />
//         </ExpandMore>
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           <Typography sx={{ marginBottom: 2 }}>About :</Typography>
//           <Typography sx={{ marginBottom: 2 }}>
//            {description2}
//           </Typography>
//           {/* <div> */}
//             <Typography sx={{ marginBottom: 2 }}>
//            {typeof moreInfo === 'string'
//       ? moreInfo.split(',').map((info, index) => (
//           <div key={index}>{info}</div>
//         ))
//       : null}
//           </Typography>
//           {/* </div> */}
//         </CardContent>
//       </Collapse>
//     </Card>
//   );
// }

import React from 'react';
import './CardWithBody.css';

export default function CardWithBody(props) {
  const { uniqueKey, img, price, description, description2, moreInfo, name } = props;
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div className="card card-uniform" key={uniqueKey}>
      <div className="card-header d-flex align-items-center">
        <div className="rounded-circle bg-danger text-white d-flex justify-content-center align-items-center me-2" style={{ width: 40, height: 40, fontSize: 20 }}>
          {name?.charAt(0).toUpperCase()}
        </div>
        <h5 className="mb-0">{name}</h5>
      </div>
      <img src={img} className="card-img-top card-img-uniform" alt={name} />
      <div className="card-body flex-grow-1">
        <p className="card-text">{description}</p>
        <p className="card-text fw-bold">Price: {price}</p>
      </div>
      <div className="card-footer">
        <button
          className="btn btn-link p-0"
          onClick={() => setExpanded((prev) => !prev)}
          aria-expanded={expanded}
          aria-label="Show more"
        >
          {expanded ? 'Hide Details' : 'Show Details'}
        </button>
        {expanded && (
          <div className="mt-2">
            <div className="fw-bold mb-1">About:</div>
            <div>{description2}</div>
            <div>
              {typeof moreInfo === 'string'
                ? moreInfo.split(',').map((info, idx) => (
                    <div key={idx}>{info}</div>
                  ))
                : null}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
