import config from '#config/config';
import push from 'web-push'

webpush.setGCMAPIKey(config.key._gcm);
webpush.setVapidDetails(
 config.user.email, 
 config.key._public, 
 config.key._private
);

export default push;