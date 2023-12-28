import { Schema, model } from 'mongoose';

export default model('user',
	new Schema({
		_id: { type: String },
		
	}),
);
