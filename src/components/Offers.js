import Card from "react-bootstrap/Card";

function BodyOnlyExample() {
  return (
    <Card>
      <Card.Body
        className="text-center"
        style={{
          backgroundColor: "teal",
          color: "white",
          fontSize: "18px",
          fontWeight: "500",
          fontFamily: 'Poppins'
        }}
      >
        Super Deal! Free Shipping on Orders Over $50
      </Card.Body>
    </Card>
  );
}

export default BodyOnlyExample;
