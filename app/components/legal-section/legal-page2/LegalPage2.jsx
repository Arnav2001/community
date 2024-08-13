import React from "react";
import { Table } from "@mantine/core";

const LegalPage2 = () => {
  const aboutYouBullets = [
    "Identity Data includes first name, last name, address, username or similar identifier, marital status, title, date of birth and gender.",
    "Contact Data includes billing address, delivery address, location, email address and/or telephone numbers.",
    "Financial Data includes bank account and payment card details, payment history.",
    "Transaction Data includes details about payments to and from you and other details of products and services you have purchased from us.",
    "Technical Data includes internet protocol (IP) address, your login data, browser type and version, make and model (mobile phones only), operating system, hardware version, platform, device settings and other technology identification on the devices used to access our Sites, file and software names and types, device identifiers, time zone setting and location, device locations such as through GPS, Bluetooth or WiFi signals, browser plug-in types and versions, operating system and platform, connection information such as the name of your mobile operator or ISP, browser type, language and time zone, mobile phone number and IP address.",
    "Profile Data includes your username and password, purchases or orders made by you, your interests, preferences, feedback and survey responses.",
    "Usage Data includes information about how you use our Sites, products and services including redemption of our offers, how you use your devices to access our Sites, including the screens you visit and searches you make.",
    "Special Categories of Personal Data includes details about your race or ethnicity or religion.",
    "Other Data includes:",
  ];

  const otherBullets = [
    "photos or other data uploaded onto any of our Sites by you or shared with other users of our Sites by you via our Sites;",
    "communications with us via social media platforms, email, electronic messages and other electronic and non-electronic communications;",
    "third party partner information related to how you use our third party partners, such as your reviews of our merchant partners or other service providers.",
    "your networks and connections made available to us, depending on the permissions you have granted, from your mobile and desktop devices' address book contacts, and other social media such as Facebook, Instagram, Pinterest and Twitter.",
  ];
  const yourLegalRights = [
    'Request access to your personal data (commonly known as a "data subject access request"). This enables you to receive a copy of the personal data we hold about you and to check that we are lawfully processing it.',
    "Request correction of the personal data that we hold about you. This enables you to have any incomplete or inaccurate data we hold about you corrected, though we may need to verify the accuracy of the new data you provide to us.",
    "Request erasure of your personal data. This enables you to ask us to delete or remove personal data where there is no good reason for us continuing to process it. You also have the right to ask us to delete or remove your personal data where you have successfully exercised your right to object to processing (see below), where we may have processed your information unlawfully or where we are required to erase your personal data to comply with local law. Note, however, that we may not always be able to comply with your request of erasure for specific legal reasons which will be notified to you, if applicable, at the time of your request.",
    "Object to processing of your personal data where we are relying on a legitimate interest (or those of a third party) and there is something about your particular situation which makes you want to object to processing on this ground as you feel it impacts on your fundamental rights and freedoms. You also have the right to object where we are processing your personal data for direct marketing purposes. In some cases, we may demonstrate that we have compelling legitimate grounds to process your information which override your rights and freedoms.",
    "Request restriction of processing of your personal data. This enables you to ask us to suspend the processing of your personal data in the following scenarios: (a) if you want us to establish the data’s accuracy; (b) where our use of the data is unlawful but you do not want us to erase it; (c) where you need us to hold the data even if we no longer require it as you need it to establish, exercise or defend legal claims; or (d) you have objected to our use of your data but we need to verify whether we have overriding legitimate grounds to use it.",
    "Request the transfer of your personal data to you or to a third party. We will provide to you, or a third party you have chosen, your personal data in a structured, commonly used, machine-readable format. Note that this right only applies to automated information which you initially provided consent for us to use or where we used the information to perform a contract with you.",
    "Withdraw consent at any time where we are relying on consent to process your personal data. However, this will not affect the lawfulness of any processing carried out before you withdraw your consent. If you withdraw your consent, we may not be able to provide certain products or services to you. We will advise you if this is the case at the time you withdraw your consent.",
  ];
  return (
    <div className="content-neue mt-[0px] text-[14px] leading-[20px] text-[#2A2A2A] sm:mt-[48px] sm:px-[20px] sm:text-[16px] sm:leading-[18px] lg:mt-[40px] lg:text-[16px] lg:leading-[22px] xl:mt-[58px] xl:text-[20px] xl:leading-[26px]">
      <h1 className="legal_page_h mb-[15px] pb-2">Introduction </h1>
      {`Kreatrminds Private Limited companies worldwide, its subsidiaries,
      affiliates (collectively, the "Kreatr", "Company," "we," "us," or "our")
      recognize the importance of protecting the privacy of all consumers ("you"
      or "user") who access and/or use, whether as a guest or a registered user,
      our websites, or portions of our websites, including any content,
      functionality and services offered on or through our websites, any
      webpages, our online or offline mobile applications that run on smart
      phones, tablets and other devices which provide dedicated
      non-browser-based interaction between you and our sites (all of which are
      collectively called our "Sites").`}
      <br /> <br />
      This Privacy Policy will inform you as to how we look after your personal
      data when you visit this and all of our Sites (regardless of where you
      visit it from) and tell you about your privacy rights and how the law
      protects you.
      <br />
      <br />
      <div className="legal_page_h mb-[15px] pb-2 pt-2">
        1. Important Information and Who We Are
      </div>
      <div className="mb-[15px] pb-2 text-[20px] ">
        Purpose of this Privacy Policy{" "}
      </div>
      This Privacy Policy aims to give you information on how the Company
      collects and processes your personal data through your use of any of its
      Sites, including any data you may provide through this Site when you
      register or sign in on any of our Sites, purchase a product or service or
      take part in a competition.
      <br />
      <br /> It is important that you read this Privacy Policy together with any
      other privacy notice or fair processing notice we may provide on specific
      occasions when we are collecting or processing personal data about you so
      that you are fully aware of how and why we are using your data. This
      Privacy Policy supplements these other notices and is not intended to
      override them.
      <br />
      <br />
      <div className="mb-[15px] pb-2 pt-2 text-[20px] ">
        Persons Under the Age of 13 Years
      </div>
      The Sites are not intended for children and we do not knowingly collect
      data relating to children. Our Sites are not intended for use by persons
      under 13 years of age without legal parental or guardian consent. No one
      under age 13 may provide any personal information to or on our Sites
      without legal parental or guardian consent. We do not knowingly collect
      personal information from persons under 13 if such information is provided
      without legal parental or guardian consent.
      <br />
      <br /> If you are under 13, do not use or provide any information on our
      Sites, or on or through any of their features register on the Sites, make
      any purchases through our Sites, use any of the interactive or public
      comment features of our Sites or provide any information about yourself to
      us, including your name, address, telephone number, e-mail address or any
      screen name or user name you may use without legal parental or guardian
      consent. If we learn we have collected or received personal information
      from a person under 13 without verification of parental consent, we will
      delete that information. If you believe we might have any information from
      or about a person under 13 for which there is no legal parental or
      guardian consent, please contact us.
      <br />
      <br />
      <div className="mb-[15px] pb-2 pt-2 text-[20px] ">Controller</div>
      {`The Company is made up of different legal entities. This Privacy Policy is
      issued on behalf of the Company so when we mention "Company", "KREATR",
      "we", "us" or "our" in this Privacy Policy, we are referring to the
      relevant company responsible for processing your data.`}
      <br />
      <br /> You have the right to make a complaint at any time to the relevant
      supervisory authority for data protection issues. We would, however,
      appreciate the chance to deal with your concerns before you approach the
      relevant supervisory authority so please contact us in the first instance.
      For any questions or comments relating to this Privacy Policy or the
      manner in which we collect and use your personal data, please contact us.
      <br />
      <br />
      <div className="mb-[15px] pb-2 pt-2 text-[20px] leading-[24px]">
        Changes to the Privacy Policy and Your Duty to Inform Us of Changes
      </div>
      This version was last updated on 1 November 2023 and historic versions can
      be obtained by contacting us.
      <br />
      <br /> It is important that the personal data we hold about you is
      accurate and current. Please keep us informed if your personal data
      changes during your relationship with us.
      <br />
      <div className="pb-2 pt-2">Third-Party Links</div>
      The Sites may include links to third-party websites, plug-ins and
      applications. Clicking on those links or enabling those connections may
      allow third parties to collect or share data about you. We do not control
      these third-party websites and are not responsible for their privacy
      statements. When you leave our Sites, we encourage you to read the privacy
      policy of every website or other site you visit.
      <br />
      <br />
      <div className="legal_page_h mb-[15px] pb-2 pt-2">
        2. The Data We Collect About You
      </div>
      Personal data, or personal information, means any information about an
      individual from which that person can be identified. It does not include
      data where the identity has been removed (anonymous data). Depending on
      which of our products and/or services you use and how you interact with
      our Sites, we collect different kinds of information from or about you. We
      may collect, use, store and transfer different kinds of personal data
      about you which we have grouped together follows:
      <br />
      <br />
      <ul className="mb-[10px] ml-[40px] list-disc">
        {aboutYouBullets.map((value, index) => (
          <li className="mb-[10px]" key={index}>
            {value}
          </li>
        ))}
      </ul>
      <ul className="mb-[10px] ml-[40px] list-disc sm:ml-[70px]">
        {otherBullets.map((value, index) => (
          <li className="mb-[10px]" key={index}>
            {value}
          </li>
        ))}
      </ul>
      <ul className="mb-[10px] ml-[40px] list-disc">
        <li>
          Marketing and Communications Data includes your preferences in
          receiving marketing from us and our third parties and your
          communication preferences
        </li>
      </ul>
      We also collect, use and share aggregated data such as statistical or
      demographic data for any purpose. Aggregated Data may be derived from your
      personal data but is not considered personal data in law as this data does
      not directly or indirectly reveal your identity. For example, we may
      aggregate your Usage Data to calculate the percentage of users accessing a
      specific Site feature. However, if we combine or connect aggregated data
      with your personal data so that it can directly or indirectly identify
      you, we treat the combined data as personal data which will be used in
      accordance with this Privacy Policy.<br></br>
      <br />
      We do not collect the following Special Categories of Personal Data:
      <ul className="mb-[10px] ml-[40px] list-disc">
        <li>your philosophical beliefs,</li>
        <li>sex/gender,</li>
        <li>political opinions,</li>
        <li>trade union membership,</li>
        <li>information about your health, </li>
        <li>genetic and biometric data,</li>
        <li>any information about criminal convictions and offences.</li>
      </ul>
      <div className=" pb-2 pt-2"> If You Fail to Provide Personal Data</div>
      Where we need to collect personal data by law, or under the terms of a
      contract we have with you and you fail to provide that data when
      requested, we may not be able to perform the contract we have or are
      trying to enter into with you (for example, to provide you with goods or
      services). In this case, we may have to cancel a product or service you
      have with us but we will notify you if this is the case at the time.
      <br />
      <br />
      <div className="legal_page_h mb-[15px] pb-2 pt-2">
        3. How Is Your Personal Data Collected?
      </div>
      <ul className="mb-[10px] ml-[40px] list-disc">
        <li>
          Direct interactions. You may give us your Identity, Contact, and
          Financial Data by filling out forms or by corresponding with us by
          post, phone, email, or otherwise. This includes personal data you
          provide when you
          <br />
          <br />
          <ul className="mb-[10px] ml-[40px] list-disc sm:ml-[70px]">
            <li>apply for or purchase our products or services;</li>
            <li>create an account or register on our Sites;</li>
            <li>subscribe to our service or publications;</li>
            <li>
              request marketing to be sent to you or further services to be
              provided to you;
            </li>
            <li>enter a competition, promotion, or survey;</li>
            <li>
              correspond with us (online or offline, including via email
              addresses and phone numbers) if you contact us;
            </li>
            <li>post material on our Sites;</li>
            <li>or give us some feedback.</li>
          </ul>
        </li>
        <li>{`You also may provide information to be published or displayed
(hereinafter, "posted") on public areas of our Sites or
transmitted to other users of our Sites or third parties
(collectively, "User Contributions"). Your User Contributions are
posted on and transmitted to others at your own risk. Although
we limit access to certain pages, you may set certain privacy
settings for such information by logging into your account
profile or by contacting us. Please be aware that no security
measures are perfect or impenetrable. Additionally, we cannot
control the actions of other users of our Sites with whom you
may choose to share your User Contributions. Therefore, we
cannot and do not guarantee that your User Contributions will
not be viewed by unauthorized persons.`}</li>
        <br />
        <li>
          Automated technologies or interactions. As you interact with our
          Sites, we may automatically collect Technical Data about your
          equipment, browsing actions, and patterns. We collect this personal
          data using cookies, server logs, web beacons, and other similar
          technologies. We may also receive Technical Data about you if you
          visit other Sites employing our cookies.
          <br />
          <br />
          <ul className="mb-[10px] ml-[40px] list-disc sm:ml-[70px]">
            <li>
              Cookies: We automatically capture some information through the use
              of cookies. A cookie is a small file that is placed on your
              desktop or mobile device when you visit our Sites in order to
              enable certain features and functionality of our Sites. Our
              cookies can be categorized into four types, each of which is
              outlined below:
              <br />
              <br />
              <ul className="mb-[10px] ml-[46px] list-disc sm:ml-[80px]">
                <li>
                  Category 1: Strictly necessary cookies. These cookies are
                  essential for enabling our Sites to provide certain of your
                  requested services, such as retaining your shopping bag items.
                </li>
                <br />
                <li>
                  {`Category 2: Performance cookies. Performance cookies collect
                  anonymous information on the users of our Sites to enable us
                  to improve the operation of our Sites. For example, we utilize
                  cookies to help us understand how customers arrive at and
                  browse or use our Sites and highlight improvement areas such
                  as navigation, shopping experience, and marketing. The data
                  stored by these cookies does not include personal details from
                  which an individual's identity can be established.`}
                </li>
                <br />
                <li>
                  Category 3: Functionality cookies. These cookies retain
                  choices you make, such as member ID, email ID, and other
                  preferences, in order to help you avoid having to re-enter the
                  information as you navigate through our Sites, including the
                  shopping cart.
                </li>
                <br />
                <li>
                  Category 4: Targeting or advertising cookies. These cookies
                  collect information about your browsing habits to allow us to
                  provide advertising relevant to you and your interests. The
                  cookies retain information about the websites you have
                  visited. This information is shared with other parties, such
                  as advertisers, on an anonymous basis. Your personally
                  identifiable information, such as your name and address, is
                  not shared with such third parties. For example, we use
                  third-party companies to provide you with more personalized
                  advertisements when you visit certain third-party websites.
                </li>
              </ul>
            </li>
            <br />
            <li>
              Web beacons: Pages of our Sites and our e-mails may contain small
              electronic files known as web beacons (also referred to as clear
              gifs, pixel tags, and single-pixel gifs) that permit the Company,
              for example, to count users who have visited those pages or opened
              an e-mail and collect other related website and app statistics
              (for example, recording the popularity of certain app content and
              verifying system and server integrity).
            </li>
            <br />
            <li>
              We do not collect personal information automatically, but we may
              tie this information to personal information about you that we
              collect from other sources or that you provide to us.
            </li>
            <br />
            <li>
              Log files: We may use log files to capture your activities on our
              apps as they interact with our Sites. Information captured in such
              log files may include the types of content you view or engage with
              and the frequency or duration of your activities.
            </li>
          </ul>
        </li>
        <br />
        <li>
          Third parties or publicly available sources. We may receive personal
          data about you from various third parties and public sources, as set
          out below:
          <br />
          <br />
          <ul className="mb-[10px] ml-[40px] list-disc sm:ml-[70px]">
            <li>
              Technical Data from the following parties:
              <br />
              <br />
              <ul className="mb-[10px] ml-[46px] list-disc sm:ml-[80px]">
                <li>
                  analytics providers based either inside or outside the EU;
                </li>
                <li>
                  advertising networks based either inside or outside the EU;
                </li>
                <li>
                  search information providers based either inside or outside
                  the EU;
                </li>
                <li>
                  or third parties we contract with and/or their subsidiaries
                  and affiliates to provide you with a service based either
                  inside or outside the EU.
                </li>
              </ul>
            </li>
            <br />
            <li>
              Contact, Financial, and Transaction Data from providers of
              technical, payment, and delivery services based either inside or
              outside the EU.
            </li>
            <br />
            <li>
              Identity and Contact Data from data brokers or aggregators based
              either inside or outside the EU.
            </li>
            <br />
            <li>
              Identity and Contact Data from publicly available sources based
              either inside or outside the EU.
            </li>
          </ul>
        </li>
      </ul>
      <br />
      <br />
      <div className="legal_page_h  mb-[15px] pt-2">
        4. How We Use Your Personal Data
      </div>
      <br />
      We will only use your personal data when the law allows us to. Most
      commonly, we will use your personal data in the following circumstances:
      <br />
      <br />
      <ul className="mb-[10px] ml-[40px] list-disc">
        <li>
          Where we need to perform the contract we are about to enter into or
          have entered into with you.
        </li>
        <li>
          Where we need to perform the contract we are about to enter into or
          have entered into with you.
        </li>
        <li>
          Where it is necessary for our legitimate interests (or those of a
          third party), and your interests and fundamental rights do not
          override those interests.
        </li>
        <li>Where we need to comply with a legal or regulatory obligation.</li>
      </ul>
      Generally, we do not rely on consent as a legal basis for processing your
      personal data other than in relation to sending third party direct
      marketing communications to you via email, text message or other means.
      You have the right to withdraw consent to marketing at any time by
      contacting us.
      <br />
      <br />
      <div className="legal_page_h mb-[15px]  pt-2 leading-[28px]">
        Purposes for Which We Will Use Your Personal Data
      </div>
      <br />
      We have set out below, in a table format, a description of all the ways we
      plan to use your personal data, and which of the legal bases we rely on to
      do so. We have also identified what our legitimate interests are where
      appropriate.
      <br />
      <br /> Note that we may process your personal data for more than one
      lawful ground depending on the specific purpose for which we are using
      your data. Please contact us.
      <br />
      if you need details about the specific legal ground we are relying on to
      process your personal data where more than one ground has been set out in
      the table below.
      <br />
      <br />
      <br />
      <div className="w-full overflow-x-auto flex justify-start" style={{ overflowX: "auto" }}>
        <Table
          withTableBorder
          withRowBorders
          withColumnBorders
          data={{
            head: [
              <th key="purpose">Purpose/Activity</th>,
              <th key="types">Types of Data</th>,
              <th key="basis">
                Lawful Basis for Processing, Including Basis of Legitimate
                Interest
              </th>,
            ],
            body: [
              [
                <td key="register">To register you as a new customer/user.</td>,
                <td key="register-data">
                  <div>(a) Identity</div>
                  <div>(b) Contact</div>
                  <div>(c) Profile</div>
                  <div>(d) Special Categories of Personal Data</div>
                </td>,
                <td key="register-basis">
                  <div>(a) Performance of a contract with you</div>
                  <div>(b) Necessary to comply with a legal obligation</div>
                </td>,
              ],
              [
                <td key="order">
                  <div>To process and deliver your order, including:</div>
                  <div>(a) Manage payments, fees, and charges</div>
                  <div>(b) Collect and recover money owed to us</div>
                </td>,
                <td key="order-data">
                  <div>(a) Identity</div>
                  <div>(b) Contact</div>
                  <div>(c) Financial</div>
                  <div>(d) Transaction</div>
                  <div>(e) Marketing and Communications</div>
                </td>,
                <td key="order-basis">
                  <div>(a) Performance of a contract with you</div>
                  <div>
                    (b) Necessary for our legitimate interests (to recover debts
                    due to us)
                  </div>
                </td>,
              ],
              [
                <td key="relationship">
                  <div>
                    To manage our relationship with you, which will include:
                  </div>
                  <div>
                    (a) Notifying you about changes to our terms or privacy
                    policy
                  </div>
                  <div>(b) Asking you to leave a review or take a survey</div>
                  <div>
                    (c) Communicate with you about our products and services and
                    respond to you when you contact us
                  </div>
                </td>,
                <td key="relationship-data">
                  <div>(a) Identity</div>
                  <div>(b) Contact</div>
                  <div>(c) Profile</div>
                  <div>(d) Marketing and Communications</div>
                </td>,
                <td key="relationship-basis">
                  <div>(a) Performance of a contract with you</div>
                  <div>(b) Necessary to comply with a legal obligation</div>
                  <div>
                    (c) Necessary for our legitimate interests (to keep our
                    records updated and to study how customers use our
                    products/services)
                  </div>
                </td>,
              ],
              [
                <td key="prize">
                  To enable you to partake in a prize draw or competition or
                  complete a survey
                </td>,
                <td key="prize-data">
                  <div>(a) Identity</div>
                  <div>(b) Contact</div>
                  <div>(c) Profile</div>
                  <div>(d) Usage</div>
                  <div>(e) Marketing and Communications</div>
                </td>,
                <td key="prize-basis">
                  <div>(a) Performance of a contract with you</div>
                  <div>
                    (b) Necessary for our legitimate interests (to study how
                    customers use our products/services, to develop them and
                    grow our business)
                  </div>
                </td>,
              ],
              [
                <td key="admin">
                  <div>
                    To administer and protect our business and the Sites
                    (including troubleshooting, improvement, data analysis,
                    testing, system maintenance, security, support, reporting
                    and hosting of data)
                  </div>
                </td>,
                <td key="admin-data">
                  <div>(a) Identity</div>
                  <div>(b) Contact</div>
                  <div>(c) Technical</div>
                </td>,
                <td key="admin-basis">
                  <div>
                    (a) Necessary for our legitimate interests (for running our
                    business, provision of administration and IT services,
                    network security, to prevent fraud and in the context of a
                    business reorganization or group restructuring exercise)
                  </div>
                  <div>(b) Necessary to comply with a legal obligation</div>
                </td>,
              ],
              [
                <td key="ads">
                  <div>
                    To deliver relevant Site content and advertisements to you
                    and measure or understand the effectiveness of the
                    advertising we serve to you
                  </div>
                </td>,
                <td key="ads-data">
                  <div>(a) Identity</div>
                  <div>(b) Contact</div>
                  <div>(c) Profile</div>
                  <div>(d) Usage</div>
                  <div>(e) Marketing and Communications</div>
                  <div>(f) Technical</div>
                </td>,
                <td key="ads-basis">
                  <div>
                    Necessary for our legitimate interests (to study how
                    customers use our products/services, to develop them, to
                    grow our business, and to inform our marketing strategy)
                  </div>
                </td>,
              ],
              [
                <td key="personalized">
                  <div>
                    To deliver better and more personalized Site content so that
                    you have a beneficial and valuable experience when using our
                    Sites, products, and/or services
                  </div>
                </td>,
                <td key="personalized-data">
                  <div>(a) Identity</div>
                  <div>(b) Contact</div>
                  <div>(c) Profile</div>
                  <div>(d) Usage</div>
                  <div>(e) Marketing and Communications</div>
                  <div>(f) Technical</div>
                </td>,
                <td key="personalized-basis">
                  <div>(a) Performance of a contract with you</div>
                </td>,
              ],
              [
                <td key="feature">
                  To enable you to utilize a feature of a product or service
                  provided to you.
                </td>,
                <td key="feature-data">
                  <div>(a) Identity</div>
                  <div>(b) Contact</div>
                  <div>(c) Profile</div>
                </td>,
                <td key="feature-basis">
                  <div>(a) Performance of a contract with you</div>
                </td>,
              ],
              [
                <td key="analytics">
                  <div>
                    To use data analytics to improve our Sites,
                    products/services, marketing, customer relationships, and
                    experiences
                  </div>
                </td>,
                <td key="analytics-data">
                  <div>(a) Identity</div>
                  <div>(b) Technical</div>
                  <div>(c) Usage</div>
                  <div>(d) Transaction</div>
                  <div>(e) Special Categories of Personal Data</div>
                </td>,
                <td key="analytics-basis">
                  <div>
                    (a) Necessary for our legitimate interests (to define types
                    of customers for our products and services, to keep our
                    Sites updated and relevant, to develop our business, and to
                    inform our marketing strategy)
                  </div>
                  <div>(b) Necessary to comply with a legal obligation</div>
                </td>,
              ],
              [
                <td key="suggestions">
                  <div>
                    To make suggestions and recommendations to you about goods
                    or services that may be of interest to you
                  </div>
                </td>,
                <td key="suggestions-data">
                  <div>(a) Identity</div>
                  <div>(b) Contact</div>
                  <div>(c) Technical</div>
                  <div>(d) Usage</div>
                  <div>(e) Profile</div>
                </td>,
                <td key="suggestions-basis">
                  <div>
                    Necessary for our legitimate interests (to develop our
                    products/services and grow our business)
                  </div>
                </td>,
              ],
              [
                <td key="other">
                  Any other purpose disclosed by us when you provide the
                  personal data
                </td>,
                <td key="other-data">As applicable</td>,
                <td key="other-basis">
                  <div>(a) Performance of a contract with you</div>
                  <div>(b) Necessary to comply with a legal obligation</div>
                </td>,
              ],
            ],
          }}
        />
      </div>
      <br />
      <br />
      <div className=" mb-[15px] pb-2 pt-2  text-[20px]">Marketing</div>
      {`We strive to provide you with choices regarding certain personal data
      uses, particularly around marketing and advertising.`}
      <br />
      <br />{" "}
      {`Direct Marketing by
      the Company If you do not wish to have your personal data used by the
      Company to promote our own or third parties' products or services, you can
      opt-out by contacting us. If we have sent you a promotional e-mail, you
      may send us a return e-mail asking to be omitted from future e-mail
      distributions. This opt out does not apply to information provided to the
      Company as a result of a product or service purchase, product service
      experience or other transactions.`}
      <br />
      <br />
      {` Targeted Advertising. If you do not want
      us to use information that we collect or that you provide to us to deliver
      advertisements according to our advertisers' target-audience preferences,
      you can opt-out by Contacting us.`}
      <br />
      <br />
      <div className=" mb-[15px] pb-2 pt-2  text-[20px]">
        Promotional Offers from Us
      </div>
      We may use your Identity, Contact, Technical, Usage and Profile Data and
      Special Categories of Personal Data to form a view on what we think you
      may want or need, or what may be of interest to you. This is how we decide
      which products, services and offers may be relevant for you (we call this
      marketing).
      <br />
      <br /> You will receive marketing communications from us if you have
      requested information from us or purchased goods or services from us or if
      you provided us with your details when you entered a competition or
      registered for a promotion and, in each case, you have not opted out of
      receiving that marketing.
      <br />
      <br />
      <div className="mb-[15px] pb-2 pt-2  text-[20px]">
        Third-Party Marketing
      </div>
      {`We will get your express opt-in consent before we share your personal data
      with any company outside the Company for marketing purposes. We do not
      control third parties' collection or use of your information to serve
      interest-based advertising. However, these third parties may provide you
      with ways to choose not to have your information collected or used in this
      way.`}
      <br />
      <br />
      <div className="mb-[15px] pb-2 pt-2  text-[20px]">Opting Out</div>
      You can ask us or third parties to stop sending you marketing messages at
      any time by logging into the website and checking or unchecking relevant
      boxes to adjust your marketing preferences or by following the opt-out
      links on any marketing message sent to you or by contacting us at any
      time.
      <br />
      <br />
      Where you opt out of receiving these marketing messages, this will not
      apply to personal data provided to us as a result of a product/service
      purchase, warranty registration, product/service experience or other
      transactions.
      <br />
      <br />
      <div className="mb-[15px] pb-2 pt-2  text-[20px]">Cookies</div>
      You can set your browser to refuse all or some browser cookies, or to
      alert you when websites set or access cookies. If you disable or refuse
      cookies, please note that some parts of our Sites may become inaccessible
      or not function properly. For more information about the cookies we use,
      please see Section 3 – How is your Personal Data collected above.
      <br />
      <br />
      <div className="mb-[15px] pb-2 pt-2 text-[20px] ">
        Location Information
      </div>
      {`You can choose whether or not to allow our Sites to collect and use
      real-time information about your device's location through the device's
      privacy settings. If you block the use of location information, some parts
      of our Sites may then be inaccessible or not function properly.`}
      <br />
      <br />
      <div className="mb-[15px] pb-2 pt-2 text-[20px]">Change of Purpose</div>
      We will only use your personal data for the purposes for which we
      collected it, unless we reasonably consider that we need to use it for
      another reason and that reason is compatible with the original purpose. If
      you wish to get an explanation as to how the processing for the new
      purpose is compatible with the original purpose, please contact us.
      <br />
      <br /> If we need to use your personal data for an unrelated purpose, we
      will notify you and we will explain the legal basis which allows us to do
      so.
      <br />
      <br /> Please note that we may process your personal data without your
      knowledge or consent, in compliance with the above rules, where this is
      required or permitted by law.
      <br />
      <br />
      <div className="legal_page_h mb-[15px] pb-2 pt-2">
        5. Disclosures of Your Personal Data
      </div>
      We may have to share your personal data with the parties set out below for
      the purposes set out in the table in paragraph 4 above.
      <br />
      <br />
      <ul className="mb-[10px] ml-[40px] list-disc">
        <li>
          {" "}
          Internal Third Parties as set out in Section 10 – Glossary below.
        </li>
        <br />
        <li>
          External Third Parties as set out in Section 10 – Glossary below.
        </li>
        <br />
        <li>
          Third parties listed in the table in Section 4 – How we use your
          Personal Data above;
        </li>
        <br />
        <li>
          Third parties to whom we may choose to sell, transfer, or merge parts
          of our business or our assets. Alternatively, we may seek to acquire
          other businesses or merge with them. If a change happens to our
          business, then the new owners may use your personal data in the same
          way as set out in this Privacy Policy.
        </li>
      </ul>
      <br />
      We require all third parties to respect the security of your personal data
      and to treat it in accordance with the law. We do not allow our
      third-party service providers to use your personal data for their own
      purposes and only permit them to process your personal data for specified
      purposes and in accordance with our instructions.
      <br />
      <br />
      <div className="legal_page_h mb-[15px] pb-2 pt-2">
        6. International Transfers
      </div>
      We share your personal data within the Company. This will involve
      transferring your data outside the European Economic Area (EEA). We ensure
      your personal data is protected by requiring all our group companies to
      follow the same rules when processing your personal data.
      <br />
      <br /> Many of our external third parties are based outside the European
      Economic Area (EEA) so their processing of your personal data will involve
      a transfer of data outside the EEA.
      <br />
      <br /> Whenever we transfer your personal data out of the EEA, we ensure a
      similar degree of protection is afforded to it by ensuring at least one of
      the following safeguards is implemented:
      <br />
      <br />
      <ul className="ml-[40px] list-disc">
        <li>
          We will only transfer your personal data to countries that have been
          deemed to provide an adequate level of protection for personal data by
          the European Commission.
        </li>
        <br />
        <li>
          Where we use certain service providers, we may use specific contracts
          that give personal data the same protection it has in Europe.
        </li>
        <br />
        <li>
          Where we use providers based in the US, we may transfer data to them
          if they are part of the Privacy Shield, which requires them to provide
          similar protection to personal data shared between Europe and the US.
        </li>
      </ul>
      <br /> Please contact us if you want further information on the specific
      mechanism used by us when transferring your personal data out of the EEA.
      <br />
      <br />
      <div className="legal_page_h mb-[15px] pb-2 pt-2">7. Data Security</div>
      We have put in place appropriate security measures to prevent your
      personal data from being accidentally lost, used or accessed in an
      unauthorised way, altered or disclosed. In addition, we limit access to
      your personal data to those employees, agents, contractors and other third
      parties who have a business need to know. They will only process your
      personal data on our instructions and they are subject to a duty of
      confidentiality.
      <br />
      <br /> We have put in place procedures to deal with any suspected personal
      data breach and will notify you and any applicable regulator of a breach
      where we are legally required to do so.
      <br />
      <br />
      <div className="legal_page_h mb-[15px] pb-2 pt-2">8. Data Retention</div>
      <div className="pb-2 pt-2">
        How Long Will You Use My Personal Data For?
      </div>
      We will only retain your personal data for as long as necessary to fulfil
      the purposes we collected it for, including for the purposes of satisfying
      any legal, accounting, or reporting requirements.
      <br />
      <br /> To determine the appropriate retention period for personal data, we
      consider the amount, nature, and sensitivity of the personal data, the
      potential risk of harm from unauthorised use or disclosure of your
      personal data, the purposes for which we process your personal data and
      whether we can achieve those purposes through other means, and the
      applicable legal requirements.
      <br />
      <br /> In some circumstances we may anonymise your personal data (so that
      it can no longer be associated with you) for research or statistical
      purposes in which case we may use this information indefinitely without
      further notice to you.
      <br />
      <br />
      <div className="legal_page_h mb-[15px] pb-2 pt-2">
        9. Your Legal Rights
      </div>
      Under certain circumstances, you have rights under data protection laws in
      relation to your personal data. These include the following (see section
      10 – Glossary below):
      <br></br>
      <br />
      <ul className="ml-[40px] list-disc">
        <li>Request access to your personal data.</li>
        <br />
        <li>Request corrections of your personal data.</li>
        <br />
        <li>Request the erasure of your personal data.</li>
        <br />
        <li>Object to processing of your personal data.</li>
        <br />
        <li>Request restriction on processing your personal data.</li>
        <br />
        <li>Request transfer of your personal data.</li>
        <br />
        <li>Right to withdraw consent.</li>
        <br />
      </ul>
      <p>
        If you wish to exercise any of the rights set out above, please contact
        us.
      </p>
      <br />
      <div className="mb-[15px] pb-2 pt-2 text-[20px]">
        No Fee Usually Required
      </div>
      You will not have to pay a fee to access your personal data (or to
      exercise any of the other rights). However, we may charge a reasonable fee
      if your request is clearly unfounded, repetitive or excessive.
      Alternatively, we may refuse to comply with your request in these
      circumstances.
      <br />
      <br />
      <div className="mb-[15px] pb-2 pt-2 text-[20px]">
        What We May Need From You
      </div>
      We may need to request specific information from you to help us confirm
      your identity and ensure your right to access your personal data (or to
      exercise any of your other rights). This is a security measure to ensure
      that personal data is not disclosed to any person who has no right to
      receive it. We may also contact you to ask you for further information in
      relation to your request to speed up our response.
      <br />
      <br />
      <div className="mb-[15px] pb-2 pt-2 text-[20px]">
        Time Limit to Respond
      </div>
      We try to respond to all legitimate requests within one month.
      Occasionally it may take us longer than a month if your request is
      particularly complex or you have made a number of requests. In this case,
      we will notify you and keep you updated.
      <br />
      <br />
      <div className="legal_page_h mb-[15px] pb-2 pt-2">10. Glossary</div>
      <div className="mb-[15px] pb-2 pt-2 text-[20px]">Lawful Basis</div>
      Legitimate Interest means the interest of our business in conducting and
      managing our business to enable us to give you the best service/product
      and the best and most secure experience. We make sure we consider and
      balance any potential impact on you (both positive and negative) and your
      rights before we process your personal data for our legitimate interests.
      We do not use your personal data for activities where our interests are
      overridden by the impact on you (unless we have your consent or are
      otherwise required or permitted to by law). You can obtain further
      information about how we assess our legitimate interests against any
      potential impact on you in respect of specific activities by contacting
      us.
      <br />
      <br /> Performance of Contract means processing your data where it is
      necessary for the performance of a contract to which you are a party or to
      take steps at your request before entering into such a contract.
      <br />
      <br /> Comply with a legal or regulatory obligation means processing your
      personal data where it is necessary for compliance with a legal or
      regulatory obligation that we are subject to.
      <br />
      <br />
      <div className="mb-[15px] pb-2 pt-2 text-[20px]">Third Parties</div>
      <div className="mb-[15px] pb-2 pt-2 text-[18px]">
        Internal Third Parties
      </div>
      Our companies, their subsidiaries and affiliates acting as joint
      controllers or processors who provide IT and system administration
      services and undertake reporting.
      <br />
      <br />
      <div className="mb-[15px] pb-2 pt-2 text-[18px]">
        External Third Parties
      </div>
      <ul className="ml-[40px] list-disc">
        <li>
          Service providers acting as processors who provide IT and system
          administration services or who we use to support our business and who
          are bound by contractual obligations to keep personal data
          confidential and secure and use it only for the purposes for which we
          disclose it to them.
        </li>{" "}
        <br />
        <li>
          Professional advisers acting as processors or joint controllers,
          including lawyers, bankers, auditors, and insurers who provide
          consultancy, banking, legal, insurance, and accounting services.
        </li>
        <br />
        <li>
          HM Revenue & Customs, regulators, and other authorities acting as
          processors or joint controllers who require reporting of processing
          activities in certain circumstances.
        </li>
        <br />
        <li>
          Any other party, their subsidiaries, and affiliates that we have
          contracted with to provide you with a service and/or product.
        </li>
      </ul>
      <br />
      <br />
      <div className="legal_page_h mb-[20px] pb-2 pt-2">Your Legal Rights</div>
      <p className="mb-[10px] text-[20px]">You have the right to:</p>
      <br />
      <ul className="ml-[40px] list-disc">
        {yourLegalRights.map((value, index) => (
          <li className="mb-[15px]" key={index}>
            {value}
          </li>
        ))}
      </ul>
      <br />
      <div className="legal_page_h mb-[15px] pb-2 pt-2 ">Entire Agreement</div>
      This Privacy Policy, our End User Licence Agreement , Terms of Sale,
      Refund Policy, and our Terms and Conditions constitute the sole and entire
      agreement between you and the Company with respect to the Website and
      supersede all prior and contemporaneous understandings, agreements,
      representations and warranties, both written and oral, with respect to the
      Website.
      <br /> <br />© 2024 Kreatrminds Private Limited. All rights reserved.
    </div>
  );
};

export default LegalPage2;
