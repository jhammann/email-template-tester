# E-Mail Template Tester

An easy way to (locally) test HTML email templates in multiple clients. A free alternative to existing paid email test services. You only need to configure an SMTP server or use GMail with an [app specific password](https://support.google.com/mail/answer/185833?hl=en) (recommended).

Clone this project and fill in the env variables in `docker-compose.yml` with your own data. Next run `docker-compose up -d` (or `docker compose up -d`) and wait for everything to build. After that you can go to https://localhost:3000 and see a basic form.

Fill in the recipient's email a subject (optional) and the HTML code of your e-mail template. Click send and check your mail design in the e-mail client.

<img width="784" alt="image" src="https://github.com/user-attachments/assets/3ae72e2c-8aa5-48eb-955f-72ecf98a31b0" />

I haven't put in error handling yet so if nothing happens check the response of the `/api` call.
