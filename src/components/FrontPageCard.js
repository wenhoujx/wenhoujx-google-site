import Stack from 'react-bootstrap/Stack'
export function FrontPageCard({ linkTo, icon, description }) {
    return (
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
            <img alt="" src={icon} style={{ width: "75px", height: "75px", objectFit: "cover" }} />
            <div className="me-auto" >
                <a href={linkTo}>{description}</a>
            </div>
        </Stack>
    );
}
