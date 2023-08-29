#!/usr/bin/node
/**
 * create a job
 */

import { createQueue } from 'kue';

const queue = createQueue();
const jobData = { phoneNumber: '+25471919978727', message: 'Kindly verify yourself' }

const job = queue
	.create('push_notification_code', jobData)
	.save((err) => {
		if (!err) console.log(`Notification job created: ${job.id}`);
	});

job.on('complete', (result) => { /* eslint disabled no used var */
	console.log('Notification job complete');
});

job.on('failed', (result) => { /* eslint disabled no unused variables */
	console.log('Notification job failed');
});

