// app/actions/ActivitiesActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCorge, argGrault, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    golf = mike.Endpoints;
    var _closure1_slot5 = golf;
    golf = mike.ActivityTypes;
    var _closure1_slot6 = golf;
    golf = mike.AnalyticEvents;
    var _closure1_slot7 = golf;
    mike = mike.LoggingInviteTypes;
    var _closure1_slot8 = mike;
    mike = {};
    golf = function(argFoo) { // Original name: updateActivity
        _fun74999: for(var _fun74999_ip = 0; ; ) switch(_fun74999_ip) {
 0:
            zulu = argFoo;
            sizing = zulu.applicationId;
            var _closure2_slot0 = sizing;
            romeo = zulu.distributor;
            var _closure2_slot1 = romeo;
            foxtrot = zulu.shareActivity;
            kilo = zulu.token;
            entity = undefined;
            if(!(kilo === entity)) { _fun74999_ip = 44; continue _fun74999 }
 42:
            kilo = null;
 44:
            backup = zulu.duration;
            if(!(backup === entity)) { _fun74999_ip = 55; continue _fun74999 }
 53:
            backup = 0;
 55:
            var _closure2_slot2 = backup;
            yankee = zulu.closed;
            if(!(yankee === entity)) { _fun74999_ip = 71; continue _fun74999 }
 69:
            yankee = false;
 71:
            offset = zulu.exePath;
            if(!(offset === entity)) { _fun74999_ip = 83; continue _fun74999 }
 81:
            offset = null;
 83:
            verify = zulu.voiceChannelId;
            if(!(verify === entity)) { _fun74999_ip = 95; continue _fun74999 }
 93:
            verify = null;
 95:
            options = zulu.sessionId;
            if(!(options === entity)) { _fun74999_ip = 107; continue _fun74999 }
 105:
            options = null;
 107:
            golf = zulu.mediaSessionId;
            if(!(golf === entity)) { _fun74999_ip = 119; continue _fun74999 }
 117:
            golf = null;
 119:
            tango = _closure1_slot1;
            report = _closure1_slot2;
            zulu = 3;
            zulu = report[zulu];
            output = tango.bind(entity)(zulu);
            tango = output.wait;
            zulu = function() {
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 3;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.dispatch;
                entity = {};
                tango = 'ACTIVITY_UPDATE_START';
                entity['type'] = tango;
                report = _closure2_slot0;
                entity['applicationId'] = report;
                report = _closure2_slot2;
                entity['duration'] = report;
                tango = _closure2_slot1;
                entity['distributor'] = tango;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            zulu = tango.bind(output)(zulu);
            tango = _closure1_slot0;
            zulu = 4;
            zulu = report[zulu];
            zulu = tango.bind(entity)(zulu);
            report = zulu.HTTP;
            tango = report.post;
            zulu = {'url': null, 'body': null, 'retries': 1, 'oldFormErrors': true, 'rejectWithError': true};
            oscar = _closure1_slot5;
            oscar = oscar.ACTIVITIES;
            zulu['url'] = oscar;
            oscar = {};
            oscar['application_id'] = sizing;
            oscar['token'] = kilo;
            oscar['duration'] = backup;
            oscar['share_activity'] = foxtrot;
            oscar['distributor'] = romeo;
            oscar['closed'] = yankee;
            oscar['exePath'] = offset;
            oscar['voice_channel_id'] = verify;
            oscar['session_id'] = options;
            oscar['media_session_id'] = golf;
            zulu['body'] = oscar;
            report = tango.bind(report)(zulu);
            tango = report.then;
            zulu = function(argFoo) {
                entity = argFoo;
                entity = entity.body;
                oscar = entity.token;
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 3;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.dispatch;
                mike = {};
                report = 'ACTIVITY_UPDATE_SUCCESS';
                mike['type'] = report;
                golf = _closure2_slot0;
                mike['applicationId'] = golf;
                mike['token'] = oscar;
                oscar = _closure2_slot2;
                mike['duration'] = oscar;
                report = _closure2_slot1;
                mike['distributor'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            tango = tango.bind(report)(zulu);
            zulu = tango.catch;
            mike = function() {
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 3;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.dispatch;
                mike = {};
                report = 'ACTIVITY_UPDATE_FAIL';
                mike['type'] = report;
                report = _closure2_slot0;
                mike['applicationId'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    mike['updateActivity'] = golf;
    golf = function(argFoo) { // Original name: sendActivityInvite
        _fun75003: for(var _fun75003_ip = 0; ; ) switch(_fun75003_ip) {
 0:
            mike = argFoo;
            report = mike.channelId;
            offset = mike.type;
            verify = mike.activity;
            var _closure2_slot0 = verify;
            yankee = mike.content;
            mike = mike.location;
            var _closure2_slot1 = mike;
            zulu = _closure1_slot4;
            mike = zulu.getChannel;
            mike = mike.bind(zulu)(report);
            var _closure2_slot2 = mike;
            zulu = null;
            if(!(zulu != mike)) { _fun75003_ip = 205; continue _fun75003 }
 69:
            golf = _closure1_slot1;
            oscar = _closure1_slot2;
            report = 5;
            report = oscar[report];
            oscar = undefined;
            options = golf.bind(oscar)(report);
            golf = options.parse;
            romeo = zulu != yankee;
            report = '';
            if(!romeo) { _fun75003_ip = 111; continue _fun75003 }
 108:
            report = yankee;
 111:
            kilo = golf.bind(options)(mike, report);
            report = _closure1_slot1;
            golf = _closure1_slot2;
            tango = 6;
            tango = golf[tango];
            golf = report.bind(oscar)(tango);
            oscar = golf.sendMessage;
            sizing = mike.id;
            tango = {};
            mike = {};
            mike['type'] = offset;
            mike['activity'] = verify;
            tango['activityAction'] = mike;
            backup = false;
            output = golf;
            foxtrot = tango;
            report = output[oscar](sizing, kilo, backup, foxtrot, romeo);
            tango = report.then;
            mike = function(argFoo) {
                _fun75004: for(var _fun75004_ip = 0; ; ) switch(_fun75004_ip) {
 0:
                    golf = argFoo;
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 7;
                    mike = mike[entity];
                    entity = undefined;
                    report = zulu.bind(entity)(mike);
                    tango = report.trackWithMetadata;
                    entity = _closure1_slot7;
                    zulu = entity.INVITE_SENT;
                    mike = {};
                    oscar = _closure2_slot1;
                    mike['location'] = oscar;
                    oscar = _closure2_slot0;
                    verify = oscar.type;
                    oscar = _closure1_slot6;
                    oscar = oscar.LISTENING;
                    if(!(verify !== oscar)) { _fun75004_ip = 92; continue _fun75004 }
 80:
                    oscar = _closure1_slot8;
                    oscar = oscar.APPLICATION;
                    _fun75004_ip = 102; continue _fun75004;
 92:
                    options = _closure1_slot8;
                    oscar = options.SPOTIFY;
 102:
                    mike['invite_type'] = oscar;
                    oscar = _closure2_slot0;
                    oscar = oscar.application_id;
                    mike['application_id'] = oscar;
                    oscar = _closure2_slot2;
                    options = oscar.getGuildId;
                    options = options.bind(oscar)();
                    mike['guild_id'] = options;
                    oscar = oscar.id;
                    mike['channel_id'] = oscar;
                    oscar = null;
                    options = oscar != golf;
                    if(!options) { _fun75004_ip = 168; continue _fun75004 }
 158:
                    golf = golf.body;
                    oscar = golf.id;
 168:
                    mike['message_id'] = oscar;
                    mike = tango.bind(report)(zulu, mike);
                    mike = global;
                    zulu = mike.Promise;
                    mike = zulu.resolve;
                    entity = _closure2_slot2;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                }
            };
            entity = function(argFoo) {
                entity = global;
                zulu = entity.Promise;
                mike = zulu.reject;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity = tango.bind(report)(mike, entity);
            return entity;
 205:
            entity = global;
            mike = entity.Promise;
            entity = mike.resolve;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    mike['sendActivityInvite'] = golf;
    golf = function(argFoo) { // Original name: sendActivityInviteUser
        mike = argFoo;
        zulu = this;
        var _closure2_slot0 = zulu;
        tango = mike.userId;
        zulu = mike.type;
        var _closure2_slot1 = zulu;
        zulu = mike.activity;
        var _closure2_slot2 = zulu;
        zulu = mike.content;
        var _closure2_slot3 = zulu;
        mike = mike.location;
        var _closure2_slot4 = mike;
        report = _closure1_slot1;
        zulu = _closure1_slot2;
        mike = 8;
        zulu = zulu[mike];
        mike = undefined;
        zulu = report.bind(mike)(zulu);
        mike = zulu.ensurePrivateChannel;
        zulu = mike.bind(zulu)(tango);
        mike = zulu.then;
        entity = function(argFoo) {
            zulu = _closure2_slot0;
            mike = zulu.sendActivityInvite;
            entity = {};
            report = argFoo;
            entity['channelId'] = report;
            report = _closure2_slot1;
            entity['type'] = report;
            report = _closure2_slot2;
            entity['activity'] = report;
            report = _closure2_slot3;
            entity['content'] = report;
            tango = _closure2_slot4;
            entity['location'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['sendActivityInviteUser'] = golf;
    golf = function(argFoo, argBar, argBaz, argCorge, argGrault) { // Original name: getJoinSecret
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = argBar;
        var _closure2_slot1 = mike;
        mike = argBaz;
        var _closure2_slot2 = mike;
        mike = argCorge;
        var _closure2_slot3 = mike;
        mike = argGrault;
        var _closure2_slot4 = mike;
        zulu = _closure1_slot3;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun75010: for(var _fun75010_ip = 0; ; ) switch(_fun75010_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun75010_ip = 173; continue _fun75010 }
 10:
                    report = {};
                    mike = _closure2_slot3;
                    zulu = null;
                    if(!(zulu != mike)) { _fun75010_ip = 35; continue _fun75010 }
 25:
                    mike = _closure2_slot3;
                    report['channel_id'] = mike;
 35:
                    mike = _closure2_slot4;
                    if(!(zulu != mike)) { _fun75010_ip = 53; continue _fun75010 }
 43:
                    mike = _closure2_slot4;
                    report['message_id'] = mike;
 53:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 4;
                    zulu = zulu[mike];
                    mike = undefined;
                    mike = tango.bind(mike)(zulu);
                    tango = mike.HTTP;
                    zulu = tango.get;
                    mike = {};
                    offset = _closure1_slot5;
                    verify = offset.USER_ACTIVITY_JOIN;
                    options = _closure2_slot0;
                    golf = _closure2_slot1;
                    oscar = _closure2_slot2;
                    oscar = verify.bind(offset)(options, golf, oscar);
                    mike['url'] = oscar;
                    oscar = 3;
                    mike['retries'] = oscar;
                    mike['query'] = report;
                    report = false;
                    mike['rejectWithError'] = report;
                    mike = zulu.bind(tango)(mike);
                    SaveGenerator(address=150);
 148:
                    return mike;
 150:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun75010_ip = 170; continue _fun75010 }
 156:
                    zulu = mike.body;
                    zulu = zulu.secret;
                    return zulu;
 170:
                    return mike;
 173:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    mike['getJoinSecret'] = golf;
    tango = function(argFoo) { // Original name: subscribeActivities
        mike = argFoo;
        var _closure2_slot0 = mike;
        zulu = _closure1_slot3;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun75013: for(var _fun75013_ip = 0; ; ) switch(_fun75013_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun75013_ip = 139; continue _fun75013 }
 10:
                    tango = _closure2_slot0;
                    zulu = tango.map;
                    mike = function(argFoo) {
                        entity = argFoo;
                        oscar = entity.userId;
                        report = entity.applicationId;
                        tango = entity.partyId;
                        zulu = entity.messageId;
                        mike = entity.channelId;
                        entity = {};
                        entity['user_id'] = oscar;
                        entity['application_id'] = report;
                        entity['party_id'] = tango;
                        entity['message_id'] = zulu;
                        entity['channel_id'] = mike;
                        return entity;
                    };
                    oscar = zulu.bind(tango)(mike);
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 4;
                    zulu = zulu[mike];
                    mike = undefined;
                    mike = tango.bind(mike)(zulu);
                    tango = mike.HTTP;
                    zulu = tango.post;
                    mike = {};
                    report = _closure1_slot5;
                    report = report.USER_ACTIVITY_SUBSCRIBE;
                    mike['url'] = report;
                    report = {};
                    report['subscriptions'] = oscar;
                    mike['body'] = report;
                    report = 1;
                    mike['retries'] = report;
                    report = false;
                    mike['rejectWithError'] = report;
                    mike = zulu.bind(tango)(mike);
                    SaveGenerator(address=122);
 120:
                    return mike;
 122:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun75013_ip = 136; continue _fun75013 }
 128:
                    zulu = mike.body;
                    return zulu;
 136:
                    return mike;
 139:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    mike['subscribeActivities'] = tango;
    tango = 9;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'actions/ActivitiesActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();