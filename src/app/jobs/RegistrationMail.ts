import Mail from "../lib/Mail";

export default {
    key: 'RegistrationMail',
    options: {
        delay: 5000
    },
    async handle({ data }) {
        const { user } = data
        await Mail.sendMail({
            from: 'Queue Test <queue@queuetest.com.br>',
            to: `${user.name} <${user.email}>`,
            subject: 'Cadastro de usuário',
            html: `Olá, ${user.name}, seja bem-vindo a o sistema de filas`
        })
    }
}