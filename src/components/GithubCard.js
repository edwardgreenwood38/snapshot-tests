
import Card from 'react-bootstrap/Card';



function GitHubCard() {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="../person-4.jpg" />
            <Card.Body>
                <Card.Title>edwardgreenwood38</Card.Title>
                <Card.Text>
                    <p>I am a C#/.Net and MERN stack developer. Currently enrolled in North Caorolina State Software Development course.</p>
                </Card.Text>
            </Card.Body>
            </Card>
        </div>
    )
}


export default GitHubCard;