/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import makeStyles from '@mui/styles/makeStyles';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
// core components
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Parallax from "/components/Parallax/Parallax.js";
import Footer from "/components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
import Card from "/components/Card/Card.js";
import CardBody from "/components/Card/CardBody.js";
import CustomInput from "/components/CustomInput/CustomInput.js";

import headersStyle from "/styles/jss/nextjs-material-kit-pro/pages/sectionsSections/headersStyle.js";

// @mui/icons-material
import Favorite from "@mui/icons-material/Favorite";
// sections for this page
import SectionDescription from "/pages-sections/presentation-page/SectionDescription.js";
import SectionComponents from "/pages-sections/presentation-page/SectionComponents.js";
import SectionCards from "/pages-sections/presentation-page/SectionCards.js";
import SectionContent from "/pages-sections/presentation-page/SectionContent.js";
import SectionSections from "/pages-sections/presentation-page/SectionSections.js";//removed
import SectionExamples from "/pages-sections/presentation-page/SectionExamples.js";//removed
import SectionFreeDemo from "/pages-sections/presentation-page/SectionFreeDemo.js";//to rework
import SectionOverview from "/pages-sections/presentation-page/SectionOverview.js";
import SectionPricing from "/pages-sections/presentation-page/SectionPricing.js";
import SectionContacts from "/pages-sections/sections-page/SectionContacts.js";

const useStyles = makeStyles(headersStyle);

export default function SectionHeaders({ ...rest }) {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };
return (
    <div>
       {/* HEADER 2 START */}
       <div>
        <Header
          absolute
          brand="Book My Service"
          color="transparent"
          links={
            <div className={classes.collapse}>
              <List className={classes.list + " " + classes.mlAuto}>
                <ListItem className={classes.listItem}>
                  <Button
                    href="#pablo"
                    className={classes.navLink}
                    onClick={(e) => e.preventDefault()}
                    color="transparent"
                  >
                    Home
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    href="/about-us"
                    className={classes.navLink}
                    //onClick={(e) => e.preventDefault()}
                    color="transparent"
                  >
                    About us
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    href="#pablo"
                    className={classes.navLink}
                    onClick={(e) => e.preventDefault()}
                    color="transparent"
                  >
                    Products
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    href="#pablo"
                    className={classes.navLink}
                    onClick={(e) => e.preventDefault()}
                    color="transparent"
                  >
                    Contact us
                  </Button>
                </ListItem>
              </List>
              <List className={classes.list + " " + classes.mlAuto}>
                <ListItem className={classes.listItem}>
                  <Button
                    color="transparent"
                    href="https://twitter.com/CreativeTim?ref=creativetim"
                    target="_blank"
                    className={classes.navLink + " " + classes.navLinkJustIcon}
                  >
                    <i className={"fab fa-twitter"} />
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    color="transparent"
                    href="https://www.facebook.com/CreativeTim?ref=creativetim"
                    target="_blank"
                    className={classes.navLink + " " + classes.navLinkJustIcon}
                  >
                    <i className={"fab fa-facebook"} />
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    color="transparent"
                    href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
                    target="_blank"
                    className={classes.navLink + " " + classes.navLinkJustIcon}
                  >
                    <i className={"fab fa-instagram"} />
                  </Button>
                </ListItem>
              </List>
            </div>
          }
        />
        <div
          className={classes.pageHeader}
          style={{ backgroundImage: "url('/img/examples/office2.jpg')" }}
        >
          <div className={classes.conatinerHeader2}>
            <GridContainer>
              <GridItem
                xs={12}
                sm={8}
                md={8}
                className={classNames(
                  classes.mlAuto,
                  classes.mrAuto,
                  classes.textCenter
                )}
              >
                <h1 className={classes.title}>Your One-Stop Shop for Beauty and Wellness Services</h1>
                <h4>
                  Find the perfect salon, spa, or pet care provider near you.
                </h4>
              </GridItem>
              <GridItem
                xs={12}
                sm={10}
                md={10}
                className={classNames(classes.mlAuto, classes.mrAuto)}
              >
                <Card raised className={classes.card}>
                  <CardBody formHorizontal>
                    <form>
                      <GridContainer>
                        <GridItem xs={12} sm={3} md={3}>
                          <CustomInput
                            id="name"
                            inputProps={{
                              placeholder: "Company name"
                            }}
                            formControlProps={{
                              fullWidth: true,
                              className: classes.formControl
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={3} md={3}>
                          <CustomInput
                            id="email"
                            inputProps={{
                              placeholder: "Company email"
                            }}
                            formControlProps={{
                              fullWidth: true,
                              className: classes.formControl
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={3} md={3}>
                          <CustomInput
                            id="password"
                            inputProps={{
                              placeholder: "Company password",
                              type: "password",
                              autoComplete: "off"
                            }}
                            formControlProps={{
                              fullWidth: true,
                              className: classes.formControl
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={3} md={3}>
                          <Button
                            block
                            color="primary"
                            className={classes.button}
                          >
                            Sign up
                          </Button>
                        </GridItem>
                      </GridContainer>
                    </form>
                  </CardBody>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      {/* HEADER 2 END */}
      
      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionDescription />
        <SectionComponents />
        <SectionCards />
        <SectionContent />        
        <SectionFreeDemo />
        <SectionOverview /> 
      </div>
      <SectionPricing />
      <SectionContacts />
      <Footer
        content={
          <div>
            <div className={classes.left}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/?ref=njsmkp-landing"
                    target="_blank"
                    className={classes.block}
                  >
                    FAQ
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/presentation?ref=njsmkp-landing"
                    target="_blank"
                    className={classes.block}
                  >
                    About us
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="http://blog.creative-tim.com/?ref=njsmkp-landing"
                    className={classes.block}
                  >
                    Contact Us
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="http://blog.creative-tim.com/?ref=njsmkp-landing"
                    className={classes.block}
                  >
                    Careers
                  </a>
                </ListItem><ListItem className={classes.inlineBlock}>
                  <a
                    href="http://blog.creative-tim.com/?ref=njsmkp-landing"
                    className={classes.block}
                  >
                    Solutions
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/license?ref=njsmkp-landing"
                    target="_blank"
                    className={classes.block}
                  >
                    Privacy Policy
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/license?ref=njsmkp-landing"
                    target="_blank"
                    className={classes.block}
                  >
                    Cookies Consent
                  </a>
                </ListItem>

              </List>
            </div>
            <div className={classes.right}>
              &copy; {1900 + new Date().getYear()} , {" "}
              
                Book My Service
              
            </div>
          </div>
        }
      />

    </div>
  );
}