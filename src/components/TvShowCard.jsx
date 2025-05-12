import DOMPurify from "dompurify";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function TvShowCard({
  showImage,
  showName,
  showGenre,
  showRating,
  showSummary,
}) {
  const sanitizedSummary = DOMPurify.sanitize(showSummary);

  return (
    <Card style={{ width: "20rem", height: "30rem" }}>
      <Card.Img variant="top" src={showImage} />
      <Card.Body>
        <Card.Title>{showName}</Card.Title>
        <Card.Text>Genre: {showGenre.join(", ")}</Card.Text>
        <Card.Text>Rating: {showRating}</Card.Text>
        {/* <Card.Text><div dangerouslySetInnerHTML={{ __html: sanitizedSummary }} /></Card.Text> */}
        <Button variant="secondary">Summary</Button>
      </Card.Body>
    </Card>
  );
}

export default TvShowCard;
