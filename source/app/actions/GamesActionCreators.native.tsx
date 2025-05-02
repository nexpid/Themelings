// app/actions/GamesActionCreators.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar) { // Original name: fetchJoinSecret
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            michal = argBar;
            var _closure2_slot0 = michal;
            offset = zuuluu.userId;
            verify = zuuluu.sessionId;
            michal = zuuluu.application;
            oscard = zuuluu.channelId;
            zuuluu = zuuluu.messageId;
            option = michal.id;
            var _closure2_slot1 = option;
            tangon = null;
            michal = tangon != oscard;
            if(!michal) { _fun00002_ip = 60; continue _fun00001 }
 56:
            michal = tangon != zuuluu;
 60:
            tangon = undefined;
            report = undefined;
            if(!michal) { _fun00002_ip = 88; continue _fun00001 }
 67:
            michal = {};
            michal['channel_id'] = oscard;
            michal['message_id'] = zuuluu;
            zuuluu = true;
            michal['headless'] = zuuluu;
            report = michal;
 88:
            zuuluu = _closure1_slot1;
            golfie = _closure1_slot2;
            michal = 4;
            michal = golfie[michal];
            yankee = zuuluu.bind(tangon)(michal);
            zuuluu = yankee.dispatch;
            michal = {};
            romeon = 'ACTIVITY_JOIN_LOADING';
            michal['type'] = romeon;
            michal['applicationId'] = option;
            michal = zuuluu.bind(yankee)(michal);
            zuuluu = _closure1_slot0;
            michal = 5;
            michal = golfie[michal];
            michal = zuuluu.bind(tangon)(michal);
            tangon = michal.HTTP;
            zuuluu = tangon.get;
            michal = {'url': null, 'retries': 3, 'query': null, 'oldFormErrors': true, 'rejectWithError': true};
            golfie = _closure1_slot3;
            oscard = golfie.USER_ACTIVITY_JOIN;
            oscard = oscard.bind(golfie)(offset, verify, option);
            michal['url'] = oscard;
            michal['query'] = report;
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.then;
            michal = function(argFoo) {
                zuuluu = _closure2_slot0;
                michal = undefined;
                entity = argFoo;
                entity = zuuluu.bind(michal)(entity);
                return entity;
            };
            entity = function() {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 4;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.dispatch;
                entity = {};
                tangon = 'ACTIVITY_JOIN_FAILED';
                entity['type'] = tangon;
                tangon = _closure2_slot1;
                entity['applicationId'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                entity = false;
                return entity;
            };
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    tangon = function(argFoo, argBar) { // Original name: joinWithSecret
        entity = _closure1_slot4;
        oscard = entity.GAME_INVITE_FRAGMENT;
        entity = global;
        entity = entity.HermesInternal;
        report = entity.concat;
        tangon = '';
        zuuluu = argFoo;
        entity = argBar;
        report = report.bind(tangon)(zuuluu, oscard, entity);
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 6;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.openURL;
        michal = _closure1_slot5;
        michal = michal.SAFARI;
        michal = zuuluu.bind(tangon)(report, michal);
        return entity;
    };
    var _closure1_slot8 = tangon;
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
    michal = report.bind(entity)(michal);
    option = michal.Endpoints;
    var _closure1_slot3 = option;
    option = michal.DiscordConnectDeeplinks;
    var _closure1_slot4 = option;
    option = michal.WebBrowserType;
    var _closure1_slot5 = option;
    michal = michal.AnalyticsPages;
    var _closure1_slot6 = michal;
    michal = {};
    option = function() { // Original name: addGame
        entity = undefined;
        return entity;
    };
    michal['addGame'] = option;
    option = function() { // Original name: toggleOverlay
        entity = undefined;
        return entity;
    };
    michal['toggleOverlay'] = option;
    option = function() { // Original name: editName
        entity = undefined;
        return entity;
    };
    michal['editName'] = option;
    option = function() { // Original name: identifyGame
        entity = global;
        zuuluu = entity.Promise;
        michal = zuuluu.reject;
        report = entity.Error;
        entity = report.prototype;
        tangon = Object.create(entity, {constructor: {value: report}});
        oscard = 'not supported';
        golfie = tangon;
        entity = new golfie[report](oscard, report);
        entity = entity instanceof Object ? entity : tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['identifyGame'] = option;
    option = function() { // Original name: getDetectableGames
        entity = undefined;
        return entity;
    };
    michal['getDetectableGames'] = option;
    option = function() { // Original name: reportUnverifiedGame
        entity = undefined;
        return entity;
    };
    michal['reportUnverifiedGame'] = option;
    option = function() { // Original name: uploadIcon
        entity = undefined;
        return entity;
    };
    michal['uploadIcon'] = option;
    option = function() { // Original name: deleteEntry
        entity = undefined;
        return entity;
    };
    michal['deleteEntry'] = option;
    option = function() { // Original name: launch
        entity = global;
        michal = entity.Promise;
        entity = michal.resolve;
        entity = entity.bind(michal)();
        return entity;
    };
    michal['launch'] = option;
    golfie = function(argFoo) { // Original name: join
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = argFoo;
            report = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 7;
            entity = zuuluu[entity];
            zuuluu = undefined;
            oscard = report.bind(zuuluu)(entity);
            report = oscard.isContextlessEmbeddedActivity;
            entity = tangon.applicationActivity;
            entity = report.bind(oscard)(entity);
            if(entity) { _fun00004_ip = 62; continue _fun00003 }
 50:
            entity = function(argFoo) { // Original name: joinViaDeeplink
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    tangon = argFoo;
                    report = tangon.application;
                    golfie = report.id;
                    verify = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    option = 3;
                    oscard = zuuluu[option];
                    zuuluu = undefined;
                    oscard = verify.bind(zuuluu)(oscard);
                    oscard = oscard.DISCORD_CONNECT_EXAMPLE_APP_APPLICATION_ID;
                    if(!(golfie !== oscard)) { _fun00006_ip = 58; continue _fun00005 }
 50:
                    oscard = report.deeplink_uri;
                    _fun00006_ip = 81; continue _fun00005;
 58:
                    golfie = _closure1_slot0;
                    report = _closure1_slot2;
                    report = report[option];
                    report = golfie.bind(zuuluu)(report);
                    oscard = report.DISCORD_CONNECT_EXAMPLE_APP_DEEPLINK_URI;
 81:
                    var _closure3_slot0 = oscard;
                    report = null;
                    if(!(report != oscard)) { _fun00006_ip = 108; continue _fun00005 }
 91:
                    michal = _closure1_slot7;
                    entity = function(argFoo) {
                        tangon = _closure1_slot8;
                        zuuluu = _closure3_slot0;
                        entity = argFoo;
                        entity = entity.body;
                        michal = entity.secret;
                        entity = undefined;
                        entity = tangon.bind(entity)(zuuluu, michal);
                        entity = true;
                        return entity;
                    };
                    entity = michal.bind(zuuluu)(tangon, entity);
                    _fun00006_ip = 129; continue _fun00005;
 108:
                    michal = global;
                    tangon = michal.Promise;
                    zuuluu = tangon.resolve;
                    michal = false;
                    entity = zuuluu.bind(tangon)(michal);
 129:
                    return entity;
                }
            };
            entity = entity.bind(zuuluu)(tangon);
            _fun00004_ip = 72; continue _fun00003;
 62:
            michal = function(argFoo) { // Original name: joinEmbeddedActivity
                tangon = argFoo;
                michal = tangon.userId;
                var _closure3_slot0 = michal;
                michal = tangon.sessionId;
                var _closure3_slot1 = michal;
                michal = tangon.application;
                zuuluu = tangon.applicationActivity;
                var _closure3_slot2 = zuuluu;
                michal = michal.id;
                var _closure3_slot3 = michal;
                zuuluu = _closure1_slot7;
                michal = undefined;
                entity = function(argFoo) {
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        oscard = _closure1_slot1;
                        golfie = _closure1_slot2;
                        entity = 1;
                        entity = golfie[entity];
                        zuuluu = undefined;
                        michal = oscard.bind(zuuluu)(entity);
                        entity = {};
                        report = _closure3_slot3;
                        entity['applicationId'] = report;
                        entity['activityChannelId'] = zuuluu;
                        report = {};
                        option = _closure1_slot6;
                        option = option.INVITE_EMBED;
                        report['page'] = option;
                        entity['locationObject'] = report;
                        report = 2;
                        report = golfie[report];
                        report = oscard.bind(zuuluu)(report);
                        oscard = report.INVITE_EMBED;
                        report = new Array(1);
                        report[0] = oscard;
                        entity['analyticsLocations'] = report;
                        report = true;
                        entity['isContextlessActivity'] = report;
                        entity['instanceId'] = zuuluu;
                        report = _closure3_slot2;
                        oscard = report.party;
                        report = null;
                        golfie = report == oscard;
                        report = undefined;
                        if(golfie) { _fun00008_ip = 134; continue _fun00007 }
 129:
                        report = oscard.id;
 134:
                        entity['partyId'] = report;
                        report = _closure3_slot0;
                        entity['joinUserId'] = report;
                        tangon = _closure3_slot1;
                        entity['joinSessionId'] = tangon;
                        tangon = argFoo;
                        tangon = tangon.body;
                        tangon = tangon.secret;
                        entity['secret'] = tangon;
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    }
                };
                entity = zuuluu.bind(michal)(tangon, entity);
                return entity;
            };
            entity = michal.bind(zuuluu)(tangon);
 72:
            return entity;
        }
    };
    michal['join'] = golfie;
    michal['joinWithSecret'] = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'actions/GamesActionCreators.native.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();