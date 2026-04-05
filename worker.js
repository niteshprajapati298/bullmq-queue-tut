const { Worker } = require('bullmq');
const sendEmail = () => new Promise((res, rej) => setTimeout(() => res(), 5 * 1000));
const worker = new Worker("email-queue", async (job) => {
    console.log(`Processing rec id : ${job.id}`);
    console.log(`Processing Message`);
    console.log(`Sending Email to ${job.data.email}`);
    await sendEmail();
    console.log("Email Sent");
}, { connection: { host: "localhost", port: 6379 } })