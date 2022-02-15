import nodemailer from 'nodemailer'
import mail from '../../config/mail'

//@ts-ignore
export default nodemailer.createTransport(mail)