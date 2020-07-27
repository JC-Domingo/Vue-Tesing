import Vue from 'vue';
import test from 'ava';

import Notification from '../src/Notification';

test('it renders a notification', t => {
	new Vue(Notification).$mount();
});