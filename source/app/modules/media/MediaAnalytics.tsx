// app/modules/media/MediaAnalytics.tsx
export default (function(argFoo, argBar, argBaz, argCor, argGra, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AnalyticEvents;
    var _closure1_slot2 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/media/MediaAnalytics.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo, argBar, argBaz, argCor, argGra, argFre) { // Original name: logMediaAttachmentPlaybackStarted
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            golfie = argFoo;
            oscard = argBar;
            offset = argBaz;
            verify = argGra;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            entity = 1;
            zuuluu = zuuluu[entity];
            entity = undefined;
            report = tangon.bind(entity)(zuuluu);
            tangon = report.track;
            michal = _closure1_slot2;
            zuuluu = michal.MEDIA_ATTACHMENT_PLAYBACK_STARTED;
            michal = {};
            option = golfie.guild_id;
            michal['guild_id'] = option;
            option = golfie.id;
            michal['channel_id'] = option;
            golfie = golfie.type;
            michal['channel_type'] = golfie;
            golfie = oscard.content_type;
            michal['type'] = golfie;
            golfie = oscard.flags;
            michal['flags'] = golfie;
            oscard = oscard.size;
            michal['size'] = oscard;
            michal['duration'] = offset;
            oscard = argCor;
            michal['message_id'] = oscard;
            oscard = global;
            option = oscard.Math;
            golfie = option.min;
            yankee = null;
            oscard = verify;
            if(!(yankee != offset)) { _fun00002_ip = 147; continue _fun00001 }
 144:
            oscard = offset;
 147:
            oscard = golfie.bind(option)(oscard, verify);
            michal['start_duration_secs'] = oscard;
            oscard = argFre;
            michal['sender_user_id'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        }
    };
    zuuluu['logMediaAttachmentPlaybackStarted'] = tangon;
    michal = function(argFoo, argBar, argBaz, argCor, argGra, argFre) { // Original name: logMediaAttachmentPlaybackEnded
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            offset = argBar;
            verify = argBaz;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            entity = 1;
            zuuluu = zuuluu[entity];
            entity = undefined;
            report = tangon.bind(entity)(zuuluu);
            tangon = report.track;
            michal = _closure1_slot2;
            zuuluu = michal.MEDIA_ATTACHMENT_PLAYBACK_ENDED;
            michal = {};
            oscard = argFoo;
            michal['message_id'] = oscard;
            michal['total_duration_secs'] = offset;
            oscard = global;
            option = oscard.Math;
            golfie = option.min;
            yankee = null;
            oscard = verify;
            if(!(yankee != offset)) { _fun00004_ip = 86; continue _fun00003 }
 83:
            oscard = offset;
 86:
            oscard = golfie.bind(option)(oscard, verify);
            michal['end_duration_secs'] = oscard;
            oscard = argCor;
            michal['sender_user_id'] = oscard;
            oscard = argGra;
            michal['duration_listening_secs'] = oscard;
            oscard = argFre;
            oscard = oscard.content_type;
            michal['type'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        }
    };
    zuuluu['logMediaAttachmentPlaybackEnded'] = michal;
    return entity;
})();