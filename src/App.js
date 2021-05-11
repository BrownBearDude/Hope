import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card'
import { useForm } from 'react-hook-form';
import Container  from 'react-bootstrap/Container';



export default function App() {
    const { register, watch } = useForm({ revalidateMode: 'onchange' })
    let values = watch()
    let final = []

      for (let point = 0; point < values['#points']; point++) {
          final.push(
              <Card>
                  <Form.Row>
                    <Col>
                        <Form.Label>{point}</Form.Label>
                    </Col>
                    <Col>
                        <Form.Group as={Row}>
                            <Form.Label column sm={1}>
                                x
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="number" {...register('x'+point)}/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm={1}>
                                y
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="number" {...register('y'+point)}/>
                            </Col>
                        </Form.Group>
                    </Col>
                </Form.Row>
            </Card>

        )
    }


    return (
        <div>
            <MapContainer
                style={{ height: "80vh", width: "70vw" }}
                center={[-10, 160]}
                zoom={3}
                scrollWheelZoom={false}>
                <TileLayer
                    attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
                    url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                />
                <Marker position={[0, 0]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                <Polygon pathOptions={color: 'lime'} positions={polygon}/>
            </MapContainer>
            <Container bg="dark" variant="dark">
                <Form>
                    <Form.Row>
                        <Col>
                            <Form.Label># of Points</Form.Label>
                        </Col>
                        <Col>
                            <Form.Control type="number" {...register('#points')}/>
                        </Col>
                    </Form.Row>
                    {final}
                </Form>
            </Container>
        </div>
    );
}
