'use client'
import React from 'react';
import TamplateLinks from './../../Components/TemplateLinks/TamplateLinks';
import TinyHearts from './../../Components/HomePageComponents/TinyHearts/TinyHearts';
import { Bounce, Fade, Flip, Hinge, JackInTheBox, Rotate, Slide, Zoom } from 'react-awesome-reveal';
import { Button } from 'flowbite-react';
import { FaDonate } from "react-icons/fa";

const TamplatePage = () => {
    return (
        <div>
            {/* <Hinge  className="font- uppercase font-normal">
              <Button gradientMonochrome="info">
                <FaDonate className="mr-2 h-5 w-5" />
                Donate Now
              </Button>
            </Hinge>  */}
            <TamplateLinks></TamplateLinks>
            <TinyHearts></TinyHearts>
            <div className='space-y-6'>
            <Fade left className="font- uppercase font-normal">
              <Button gradientMonochrome="info">
                <FaDonate className="mr-2 h-5 w-5" />
                Donate Now
              </Button>
            </Fade>  

            <Bounce cascade damping={0.1} className="font- uppercase font-normal">
              <Button gradientMonochrome="info">
                <FaDonate className="mr-2 h-5 w-5" />
                Donate Now
              </Button>
            </Bounce> 

            <Flip  className="font- uppercase font-normal">
              <Button gradientMonochrome="info">
                <FaDonate className="mr-2 h-5 w-5" />
                Donate Now
              </Button>
            </Flip>  



            <JackInTheBox triggerOnce  className="font- uppercase font-normal bg-red-500">
              <Button gradientMonochrome="info">
                <FaDonate className="mr-2 h-5 w-5" />
                Donate Now
              </Button>
            </JackInTheBox> 



            <Rotate cascade  className="font- uppercase font-normal">
              <Button gradientMonochrome="info">
                <FaDonate className="mr-2 h-5 w-5" />
                Donate Now
              </Button>
            </Rotate>  


            <Slide  className="font- uppercase font-normal">
              <Button gradientMonochrome="info">
                <FaDonate className="mr-2 h-5 w-5" />
                Donate Now
              </Button>
            </Slide>  

            <Zoom  className="font- uppercase font-normal">
              <Button gradientMonochrome="info">
                <FaDonate className="mr-2 h-5 w-5" />
                Donate Now
              </Button>
            </Zoom>
            </div>
        </div>
    );
};

export default TamplatePage;