import Head from 'next/head'
import ContactForm from '../components/contact/ContactForm'
import { NextPage } from 'next'

const ContactPage: NextPage = () => (
  <>
    <Head>
      <title>Contact Me</title>
      <meta name="description" content="Send me your messages!" />
    </Head>
    <ContactForm />
  </>
)

export default ContactPage
