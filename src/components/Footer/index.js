import { Container, Grid, Icon, Image } from 'semantic-ui-react';
import './index.scss';
import logo from '~/assets/images/logo.png';
import fb from '~/assets/images/social/fb.png';
import google from '~/assets/images/social/google.png';
import github from '~/assets/images/social/github.png';
import twitter from '~/assets/images/social/twitter.png';

function Footer() {
    return (
        <div className="portfolio__footer">
            <Container>
                <Grid>
                    <Grid.Column mobile={16} tablet={2} computer={4}>
                        <Image src={logo} />
                    </Grid.Column>
                    <Grid.Column mobile={16} tablet={7} computer={6}>
                        <Grid.Row>
                            <Icon name='building' size='big' /> Binh Tan District - Ho Chi Minh city
                        </Grid.Row>
                        <Grid.Row>
                            <Icon name='mobile' size='big' /> +849009009
                        </Grid.Row>
                    </Grid.Column>
                    <Grid.Column mobile={16} tablet={7} computer={6}>
                        <Grid.Row>
                            <Icon name='mail' size='big' /> levietquang230996@gmail.com
                        </Grid.Row>
                        <Grid.Row>
                            <Grid columns={6}>
                                <Grid.Column><Image src={fb} /></Grid.Column>
                                <Grid.Column><Image src={google} /></Grid.Column>
                                <Grid.Column><Image src={github} /></Grid.Column>
                                <Grid.Column><Image src={twitter} /></Grid.Column>
                            </Grid>
                        </Grid.Row>
                    </Grid.Column>
                </Grid>
            </Container>
        </div>
    );
}

export default Footer;