import React from 'react'
import { GoAAppFooter, GoAAppFooterMetaSection } from "@abgov/react-components";

const Footer: React.FC = () => {
    return (
        <GoAAppFooter maxContentWidth="100%">
            <GoAAppFooterMetaSection>
                <a href="https://www.alberta.ca/usingthissite.aspx">Using Alberta.ca</a>
                <a href="https://www.alberta.ca/disclaimer.aspx">Disclaimer</a>
                <a href="https://www.alberta.ca/privacystatement.aspx">Privacy</a>
                <a href="https://www.alberta.ca/accessibility.aspx">Accessibility</a>
                <a href="https://www.alberta.ca/contact.cfm">Contact us</a>
            </GoAAppFooterMetaSection>
        </GoAAppFooter>
    )
}

export default Footer
