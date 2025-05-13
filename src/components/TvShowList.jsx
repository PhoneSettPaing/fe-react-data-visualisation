import TvShowCard from "./TvShowCard";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function TvShowList({ tvShows }) {
  return (
    <Row xs={1} md={4} className="g-4">
      {tvShows.map((tvShow) => (
        <Col key={tvShow.show.id}>
          <TvShowCard
            key={tvShow.show.id}
            showImage={tvShow.show.image?.original || "No Image"}
            showName={tvShow.show.name}
            showGenre={tvShow.show.genres}
            showRating={tvShow.show.rating?.average || "No Rating"}
            showSummary={tvShow.show?.summary || "No Summary"}
          />
        </Col>
      ))}
    </Row>
  );
}

export default TvShowList;
