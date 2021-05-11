import React from "react";
import { Footer } from "../components";

export function FooterContainer(){
    return (
        <Footer>
            <Footer.Frame>
                <Footer.Link>About</Footer.Link>
                <Footer.Link>Blog</Footer.Link>
                <Footer.Link>Jobs</Footer.Link>
                <Footer.Link>Help</Footer.Link>
                <Footer.Link>API</Footer.Link>
                <Footer.Link>Privacy</Footer.Link>
                <Footer.Link>Terms</Footer.Link>
                <Footer.Link>Top Accounts</Footer.Link>
                <Footer.Link>Hashtags</Footer.Link>
                <Footer.Link>Locations</Footer.Link>
            </Footer.Frame>
            <Footer.Frame>
                <Footer.Link>Beauty</Footer.Link>
                <Footer.Link>Dance &amp; Performance</Footer.Link>
                <Footer.Link>Fitness</Footer.Link>
                <Footer.Link>Food &amp; Drink</Footer.Link>
                <Footer.Link>Home &amp; Garden</Footer.Link>
                <Footer.Link>Music</Footer.Link>
                <Footer.Link>Visual Arts</Footer.Link>
            </Footer.Frame>
            <Footer.Frame>
                <Footer.Select>
                    <Footer.Option value="english" >English</Footer.Option>
                    <Footer.Option value="hindi" >Hindi</Footer.Option>
                    <Footer.Option value="espanol" >Espanol</Footer.Option>
                </Footer.Select>
                <Footer.Text>&copy; 2021 Instagram from Facebook</Footer.Text>
            </Footer.Frame>
        </Footer>
    )
}