const { Queue } = require('bullmq');
const notificationQueue = new Queue('email-queue');
async function init(params) {
    const res = await notificationQueue.add('email to Nitesh', {
        email: "nitesh@applore.in", subject: "Wellcome mess", body: "Hey Nitesh Welcome to the Appp"
    })
    console.log("Job Added to queue", res.id);
}
init();