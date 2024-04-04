'use client'
import { Header3 } from "@/app/components/Header3/page"
import { Header4 } from "@/app/components/Header4/page"
import { Content } from "@/app/components/content/page"
import { Header1 } from "@/app/components/header1/page"
import React from "react"

export default () => {

    return (
        <>
            <div className="sm:w-[60%] sm:pt-[6rem]">
                <Header1 text = "Terms and Conditions" />
                <Header4 text = "Welcome to JSONScout terms and condition!" />
                <Content text = "Thank you for choosing JSON Scout API ('Service') offered by JSON Scout. These Terms of Service ('Terms') govern your use of the JSON Scout API. By accessing or using our Service, you agree to comply with and be bound by these Terms. Please read these Terms carefully before using our Service." />
                <Header3 text = "1. Acceptance of Terms" />
                <Content text = "By accessing or using the JSON Scout API, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Service." />
                <Header3 text = "2. License and Usage" />
                <Content text = "2.1 License Grant: Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use the JSON Scout API for the purpose of parsing, analyzing, and manipulating JSON data in accordance with the API documentation provided." />
                <Content text = "2.2 Usage Restrictions: You agree not to misuse the JSON Scout API, interfere with its normal operation, or attempt to access it in a manner other than the interface and instructions that we provide. You also agree not to reverse engineer, decompile, or disassemble the JSON Scout API." />
                <Header3 text = "3. Subscription and Fees" />
                <Content text = "3.1 Subscription: The use of JSON Scout API may be subject to subscription fees. You agree to pay all applicable fees as described on our pricing page or as otherwise communicated to you." />
                <Content text = "3.2 Billing Information: You must provide accurate billing information, and you authorize us to charge the applicable fees to your chosen payment method." />
                <Content text = "3.3 Changes to Fees: We reserve the right to change our fees and pricing plans at any time. Any changes to fees will be communicated to you in advance." />
                <Header3 text = "4. Data Privacy" />
                <Content text = "4.1 Data Collection: In the course of providing the Service, we may collect and process certain data. Our Privacy Policy outlines the types of information we collect, how we use it, and how we protect your privacy." />
                <Content text = "4.2 Data Ownership: You retain ownership of your JSON data and any information you submit to the JSON Scout API. We do not claim ownership of your data." />
                <Header3 text = "5. Termination" />
                <Content text = "We reserve the right to suspend or terminate your access to the JSON Scout API at any time, with or without cause, and with or without notice. Upon termination, you must cease all use of the JSON Scout API, and any outstanding fees will become immediately due." />
                <Header3 text = "6. Changes to Terms" />
                <Content text = "We may update these Terms from time to time. Any changes will be effective upon posting the revised Terms on our website. Your continued use of the JSON Scout API after the effective date of the revised Terms constitutes your acceptance of the changes." />
                <Header3 text = "7. Limitation of Liability" />
                <Content text = "To the maximum extent permitted by law, in no event shall JSON Scout be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues." />
                <Header3 text = "8. Governing Law" />
                <Content text = "These Terms are governed by and construed in accordance with the laws of Canada. Any legal action or proceeding arising out of or relating to these Terms shall be brought in the state or federal courts located in Canada, and you hereby consent to the jurisdiction of such courts." />
            </div>
        </>
    )
}