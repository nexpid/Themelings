// app/actions/ActivitiesActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCor, argGra, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = golfie.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    golfie = michal.Endpoints;
    var _closure1_slot5 = golfie;
    golfie = michal.ActivityTypes;
    var _closure1_slot6 = golfie;
    golfie = michal.AnalyticEvents;
    var _closure1_slot7 = golfie;
    michal = michal.LoggingInviteTypes;
    var _closure1_slot8 = michal;
    michal = {};
    golfie = function(argFoo) { // Original name: updateActivity
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            sizing = zuuluu.applicationId;
            var _closure2_slot0 = sizing;
            romeon = zuuluu.distributor;
            var _closure2_slot1 = romeon;
            foxtra = zuuluu.shareActivity;
            kiloes = zuuluu.token;
            entity = undefined;
            if(!(kiloes === entity)) { _fun00002_ip = 44; continue _fun00001 }
 42:
            kiloes = null;
 44:
            backup = zuuluu.duration;
            if(!(backup === entity)) { _fun00002_ip = 55; continue _fun00001 }
 53:
            backup = 0;
 55:
            var _closure2_slot2 = backup;
            yankee = zuuluu.closed;
            if(!(yankee === entity)) { _fun00002_ip = 71; continue _fun00001 }
 69:
            yankee = false;
 71:
            offset = zuuluu.exePath;
            if(!(offset === entity)) { _fun00002_ip = 83; continue _fun00001 }
 81:
            offset = null;
 83:
            verify = zuuluu.voiceChannelId;
            if(!(verify === entity)) { _fun00002_ip = 95; continue _fun00001 }
 93:
            verify = null;
 95:
            option = zuuluu.sessionId;
            if(!(option === entity)) { _fun00002_ip = 107; continue _fun00001 }
 105:
            option = null;
 107:
            golfie = zuuluu.mediaSessionId;
            if(!(golfie === entity)) { _fun00002_ip = 119; continue _fun00001 }
 117:
            golfie = null;
 119:
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            zuuluu = 3;
            zuuluu = report[zuuluu];
            output = tangon.bind(entity)(zuuluu);
            tangon = output.wait;
            zuuluu = function() {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 3;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.dispatch;
                entity = {};
                tangon = 'ACTIVITY_UPDATE_START';
                entity['type'] = tangon;
                report = _closure2_slot0;
                entity['applicationId'] = report;
                report = _closure2_slot2;
                entity['duration'] = report;
                tangon = _closure2_slot1;
                entity['distributor'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            zuuluu = tangon.bind(output)(zuuluu);
            tangon = _closure1_slot0;
            zuuluu = 4;
            zuuluu = report[zuuluu];
            zuuluu = tangon.bind(entity)(zuuluu);
            report = zuuluu.HTTP;
            tangon = report.post;
            zuuluu = {'url': null, 'body': null, 'retries': 1, 'oldFormErrors': true, 'rejectWithError': true};
            oscard = _closure1_slot5;
            oscard = oscard.ACTIVITIES;
            zuuluu['url'] = oscard;
            oscard = {};
            oscard['application_id'] = sizing;
            oscard['token'] = kiloes;
            oscard['duration'] = backup;
            oscard['share_activity'] = foxtra;
            oscard['distributor'] = romeon;
            oscard['closed'] = yankee;
            oscard['exePath'] = offset;
            oscard['voice_channel_id'] = verify;
            oscard['session_id'] = option;
            oscard['media_session_id'] = golfie;
            zuuluu['body'] = oscard;
            report = tangon.bind(report)(zuuluu);
            tangon = report.then;
            zuuluu = function(argFoo) {
                entity = argFoo;
                entity = entity.body;
                oscard = entity.token;
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 3;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.dispatch;
                michal = {};
                report = 'ACTIVITY_UPDATE_SUCCESS';
                michal['type'] = report;
                golfie = _closure2_slot0;
                michal['applicationId'] = golfie;
                michal['token'] = oscard;
                oscard = _closure2_slot2;
                michal['duration'] = oscard;
                report = _closure2_slot1;
                michal['distributor'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = tangon.catch;
            michal = function() {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 3;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.dispatch;
                michal = {};
                report = 'ACTIVITY_UPDATE_FAIL';
                michal['type'] = report;
                report = _closure2_slot0;
                michal['applicationId'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    michal['updateActivity'] = golfie;
    golfie = function(argFoo) { // Original name: sendActivityInvite
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            report = michal.channelId;
            offset = michal.type;
            verify = michal.activity;
            var _closure2_slot0 = verify;
            yankee = michal.content;
            michal = michal.location;
            var _closure2_slot1 = michal;
            zuuluu = _closure1_slot4;
            michal = zuuluu.getChannel;
            michal = michal.bind(zuuluu)(report);
            var _closure2_slot2 = michal;
            zuuluu = null;
            if(!(zuuluu != michal)) { _fun00004_ip = 201; continue _fun00003 }
 69:
            golfie = _closure1_slot1;
            oscard = _closure1_slot2;
            report = 5;
            report = oscard[report];
            oscard = undefined;
            option = golfie.bind(oscard)(report);
            golfie = option.parse;
            romeon = zuuluu != yankee;
            report = '';
            if(!romeon) { _fun00004_ip = 111; continue _fun00003 }
 108:
            report = yankee;
 111:
            kiloes = golfie.bind(option)(michal, report);
            report = _closure1_slot1;
            golfie = _closure1_slot2;
            tangon = 6;
            tangon = golfie[tangon];
            golfie = report.bind(oscard)(tangon);
            oscard = golfie.sendMessage;
            sizing = michal.id;
            tangon = {};
            michal = {};
            michal['type'] = offset;
            michal['activity'] = verify;
            tangon['activityAction'] = michal;
            backup = false;
            output = golfie;
            foxtra = tangon;
            report = output[oscard](sizing, kiloes, backup, foxtra, romeon);
            tangon = report.then;
            michal = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    golfie = argFoo;
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 7;
                    michal = michal[entity];
                    entity = undefined;
                    report = zuuluu.bind(entity)(michal);
                    tangon = report.trackWithMetadata;
                    entity = _closure1_slot7;
                    zuuluu = entity.INVITE_SENT;
                    michal = {};
                    oscard = _closure2_slot1;
                    michal['location'] = oscard;
                    oscard = _closure2_slot0;
                    verify = oscard.type;
                    oscard = _closure1_slot6;
                    oscard = oscard.LISTENING;
                    if(!(verify !== oscard)) { _fun00006_ip = 92; continue _fun00005 }
 80:
                    oscard = _closure1_slot8;
                    oscard = oscard.APPLICATION;
                    _fun00006_ip = 102; continue _fun00005;
 92:
                    option = _closure1_slot8;
                    oscard = option.SPOTIFY;
 102:
                    michal['invite_type'] = oscard;
                    oscard = _closure2_slot0;
                    oscard = oscard.application_id;
                    michal['application_id'] = oscard;
                    oscard = _closure2_slot2;
                    option = oscard.getGuildId;
                    option = option.bind(oscard)();
                    michal['guild_id'] = option;
                    oscard = oscard.id;
                    michal['channel_id'] = oscard;
                    oscard = null;
                    option = oscard != golfie;
                    if(!option) { _fun00006_ip = 168; continue _fun00005 }
 158:
                    golfie = golfie.body;
                    oscard = golfie.id;
 168:
                    michal['message_id'] = oscard;
                    michal = tangon.bind(report)(zuuluu, michal);
                    michal = global;
                    zuuluu = michal.Promise;
                    michal = zuuluu.resolve;
                    entity = _closure2_slot2;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                }
            };
            entity = function(argFoo) {
                entity = global;
                zuuluu = entity.Promise;
                michal = zuuluu.reject;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            entity = tangon.bind(report)(michal, entity);
            return entity;
 201:
            entity = global;
            michal = entity.Promise;
            entity = michal.resolve;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    michal['sendActivityInvite'] = golfie;
    golfie = function(argFoo) { // Original name: sendActivityInviteUser
        michal = argFoo;
        zuuluu = this;
        var _closure2_slot0 = zuuluu;
        tangon = michal.userId;
        zuuluu = michal.type;
        var _closure2_slot1 = zuuluu;
        zuuluu = michal.activity;
        var _closure2_slot2 = zuuluu;
        zuuluu = michal.content;
        var _closure2_slot3 = zuuluu;
        michal = michal.location;
        var _closure2_slot4 = michal;
        report = _closure1_slot1;
        zuuluu = _closure1_slot2;
        michal = 8;
        zuuluu = zuuluu[michal];
        michal = undefined;
        zuuluu = report.bind(michal)(zuuluu);
        michal = zuuluu.ensurePrivateChannel;
        zuuluu = michal.bind(zuuluu)(tangon);
        michal = zuuluu.then;
        entity = function(argFoo) {
            zuuluu = _closure2_slot0;
            michal = zuuluu.sendActivityInvite;
            entity = {};
            report = argFoo;
            entity['channelId'] = report;
            report = _closure2_slot1;
            entity['type'] = report;
            report = _closure2_slot2;
            entity['activity'] = report;
            report = _closure2_slot3;
            entity['content'] = report;
            tangon = _closure2_slot4;
            entity['location'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['sendActivityInviteUser'] = golfie;
    golfie = function(argFoo, argBar, argBaz, argCor, argGra) { // Original name: getJoinSecret
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = argBar;
        var _closure2_slot1 = michal;
        michal = argBaz;
        var _closure2_slot2 = michal;
        michal = argCor;
        var _closure2_slot3 = michal;
        michal = argGra;
        var _closure2_slot4 = michal;
        zuuluu = _closure1_slot3;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00008_ip = 173; continue _fun00007 }
 10:
                    report = {};
                    michal = _closure2_slot3;
                    zuuluu = null;
                    if(!(zuuluu != michal)) { _fun00008_ip = 35; continue _fun00007 }
 25:
                    michal = _closure2_slot3;
                    report['channel_id'] = michal;
 35:
                    michal = _closure2_slot4;
                    if(!(zuuluu != michal)) { _fun00008_ip = 53; continue _fun00007 }
 43:
                    michal = _closure2_slot4;
                    report['message_id'] = michal;
 53:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 4;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    michal = tangon.bind(michal)(zuuluu);
                    tangon = michal.HTTP;
                    zuuluu = tangon.get;
                    michal = {};
                    offset = _closure1_slot5;
                    verify = offset.USER_ACTIVITY_JOIN;
                    option = _closure2_slot0;
                    golfie = _closure2_slot1;
                    oscard = _closure2_slot2;
                    oscard = verify.bind(offset)(option, golfie, oscard);
                    michal['url'] = oscard;
                    oscard = 3;
                    michal['retries'] = oscard;
                    michal['query'] = report;
                    report = false;
                    michal['rejectWithError'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    SaveGenerator(address=150);
 148:
                    return michal;
 150:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00008_ip = 170; continue _fun00007 }
 156:
                    zuuluu = michal.body;
                    zuuluu = zuuluu.secret;
                    return zuuluu;
 170:
                    return michal;
 173:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    michal['getJoinSecret'] = golfie;
    tangon = function(argFoo) { // Original name: subscribeActivities
        michal = argFoo;
        var _closure2_slot0 = michal;
        zuuluu = _closure1_slot3;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00010_ip = 137; continue _fun00009 }
 10:
                    tangon = _closure2_slot0;
                    zuuluu = tangon.map;
                    michal = function(argFoo) {
                        entity = argFoo;
                        oscard = entity.userId;
                        report = entity.applicationId;
                        tangon = entity.partyId;
                        zuuluu = entity.messageId;
                        michal = entity.channelId;
                        entity = {};
                        entity['user_id'] = oscard;
                        entity['application_id'] = report;
                        entity['party_id'] = tangon;
                        entity['message_id'] = zuuluu;
                        entity['channel_id'] = michal;
                        return entity;
                    };
                    oscard = zuuluu.bind(tangon)(michal);
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 4;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    michal = tangon.bind(michal)(zuuluu);
                    tangon = michal.HTTP;
                    zuuluu = tangon.post;
                    michal = {};
                    report = _closure1_slot5;
                    report = report.USER_ACTIVITY_SUBSCRIBE;
                    michal['url'] = report;
                    report = {};
                    report['subscriptions'] = oscard;
                    michal['body'] = report;
                    report = 1;
                    michal['retries'] = report;
                    report = false;
                    michal['rejectWithError'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    SaveGenerator(address=120);
 118:
                    return michal;
 120:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00010_ip = 134; continue _fun00009 }
 126:
                    zuuluu = michal.body;
                    return zuuluu;
 134:
                    return michal;
 137:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    michal['subscribeActivities'] = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'actions/ActivitiesActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();