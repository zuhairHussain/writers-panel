import React from 'react';
import Header from '../includes/header';
import Footer from '../includes/footer';
import Nav from '../includes/nav';

export default function Container(props) {
    const { className, container, children, noHeader, noFooter, withoutNav } = props;
    return (
        <React.Fragment>
            {
                !noHeader ? (<Header withoutNav={withoutNav ? withoutNav : ""} />) : ""
            }
            {
                !withoutNav ? (<Nav />) : ""
            }
            <div className={`${className ? "main " + className : "main"} ${!withoutNav ? " hasNavbar" : ""}`}>
                <div className={container ? container : "container"}>
                    {children}
                </div>
            </div>

            {
                !noFooter ? (<Footer />) : ""
            }

        </React.Fragment>
    );
}