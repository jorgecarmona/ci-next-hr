import {useGetUsersQuery} from "../store/api-slice/users-slice";

import {Card} from "../atoms";
import {CardHeader, IconButton} from "@mui/material";
import {iconLookup} from "../atoms/icon-store";

function PlayGround() {
  const {data} = useGetUsersQuery();

  console.log(data);

  const myCardHeader = (
    <CardHeader
      avatar={<iconLookup.business />}
      action={
        <IconButton>
          <iconLookup.add />
        </IconButton>
      }
      title="Card with Node as header"
    />
  );

  const myCard = (
    <div>
      <IconButton>
        <iconLookup.forward />
      </IconButton>
      <p> ...Card content goes here</p>
      <hr />
    </div>
  );

  const myCardFooter = (
    <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%"}}>
      <IconButton>
        <iconLookup.library />
      </IconButton>
      <div>Card footer </div>
      <a href="/s">More</a>
    </div>
  );

  return (
    <>
      <h1>PlayGround</h1>
      <div style={{display: "flex", gap: "4rem", flexWrap: "wrap"}}>
        <div className="card-container">
          <Card
            bgColor="#FFFFFF"
            borderColor="#EAECF0"
            header="Card with default background color"
            content={myCard}
          />
        </div>
        <div className="card-container">
          <Card
            bgColor="#FCFCFD"
            borderColor="#D4DFEF"
            header="Card with light background color"
            content={myCard}
          />
        </div>
        <div className="card-container">
          <Card
            bgColor="#EAEFF6"
            borderColor="#D4DFEF"
            header="Card with dark background color"
            content={myCard}
            footer={myCardFooter}
          />
        </div>
      </div>

      <div>
        <div style={{width: "100%", margin: "2rem 0"}}>
          <Card
            bgColor="#FCFCFD"
            borderColor="#D4DFEF"
            header="Card with string as header"
            content={myCard}
            footer={myCardFooter}
          />
        </div>

        <div style={{width: "100%"}}>
          <Card
            bgColor="#EAEFF6"
            borderColor="#D0D5DD"
            header={myCardHeader}
            content={myCard}
            footer={myCardFooter}
          />
        </div>
      </div>
    </>
  );
}

export default PlayGround;
