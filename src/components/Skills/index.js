import React from "react";
import { Container, Grid, Image } from "semantic-ui-react";
import { arrSkills } from "./arrSkills";
import './index.scss';

function Skills() {
    return (
        <div className="portfolio__skills">
            <Container>
                <h1 className="text-gradiant">SKILLS</h1>
                <div className="portfolio__skills-girds">
                    <Grid>
                        {arrSkills.map((skill, index) =>
                            <Grid.Column key={index} mobile={15} tablet={8} computer={5}>
                                <Image src={skill.image} size='small' />
                            </Grid.Column>
                        )}
                    </Grid>
                </div>
            </Container>

        </div>
    );
}

export default Skills;