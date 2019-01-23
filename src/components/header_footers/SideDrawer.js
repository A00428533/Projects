import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {
    return (
      <Drawer
      anchor="right"
      open={props.open}
      onClose={()=>props.onClose(false)}
      >
      <List component="nav">
          <ListItem button onClick={()=>console.log("event 1")}>
            Event List
          </ListItem>
          <ListItem button onClick={()=>console.log("event 2")}>
            Venue Info
          </ListItem>
          <ListItem button onClick={()=>console.log("event 3")}>
            HighLights
          </ListItem>
          <ListItem button onClick={()=>console.log("event 3")}>
            Pricing
          </ListItem>
          <ListItem button onClick={()=>console.log("event 3")}>
            Location
          </ListItem>
      </List>

      </Drawer>
    );
};

export default SideDrawer;