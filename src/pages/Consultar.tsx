import { Button, Card } from "react-bootstrap"
export function Consultar(){

    return (
    <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center" >
<h1>Relacion de vales FISE</h1>
  <Card className="h-100">
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                    <span className="fs-2">Vale 1</span>

                </Card.Title>
                <div className="mt-auto">
                    Contenido: ********
                </div>
            </Card.Body>
        </Card>

        <Card className="h-100">
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                    <span className="fs-2">Vale 2</span>

                </Card.Title>
                <div className="mt-auto">
                    Contenido: ********
                </div>
            </Card.Body>
        </Card>

    </div>)
}
