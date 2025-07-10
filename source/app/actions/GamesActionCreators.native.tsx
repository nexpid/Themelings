// app/actions/GamesActionCreators.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: joinViaDeeplink
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            report = tangon.application;
            option = report.id;
            verify = _closure1_slot0;
            zuuluu = _closure1_slot2;
            golfie = 1;
            oscard = zuuluu[golfie];
            zuuluu = undefined;
            oscard = verify.bind(zuuluu)(oscard);
            oscard = oscard.DISCORD_CONNECT_EXAMPLE_APP_APPLICATION_ID;
            if(!(option !== oscard)) { _fun00002_ip = 58; continue _fun00001 }
 50:
            report = report.deeplink_uri;
            _fun00002_ip = 81; continue _fun00001;
 58:
            oscard = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[golfie];
            michal = oscard.bind(zuuluu)(michal);
            report = michal.DISCORD_CONNECT_EXAMPLE_APP_DEEPLINK_URI;
 81:
            var _closure2_slot0 = report;
            michal = null;
            if(!(michal != report)) { _fun00002_ip = 109; continue _fun00001 }
 91:
            michal = function(argFoo, argBar) { // Original name: fetchJoinSecret
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = argFoo;
                    michal = argBar;
                    var _closure3_slot0 = michal;
                    offset = zuuluu.userId;
                    verify = zuuluu.sessionId;
                    michal = zuuluu.application;
                    oscard = zuuluu.channelId;
                    zuuluu = zuuluu.messageId;
                    option = michal.id;
                    var _closure3_slot1 = option;
                    tangon = null;
                    michal = tangon != oscard;
                    if(!michal) { _fun00004_ip = 60; continue _fun00003 }
 56:
                    michal = tangon != zuuluu;
 60:
                    tangon = undefined;
                    report = undefined;
                    if(!michal) { _fun00004_ip = 88; continue _fun00003 }
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
                    michal = 2;
                    michal = golfie[michal];
                    yankee = zuuluu.bind(tangon)(michal);
                    zuuluu = yankee.dispatch;
                    michal = {};
                    romeon = 'ACTIVITY_JOIN_LOADING';
                    michal['type'] = romeon;
                    michal['applicationId'] = option;
                    michal = zuuluu.bind(yankee)(michal);
                    zuuluu = _closure1_slot0;
                    michal = 3;
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
                        zuuluu = _closure3_slot0;
                        michal = undefined;
                        entity = argFoo;
                        entity = zuuluu.bind(michal)(entity);
                        return entity;
                    };
                    entity = function() {
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 2;
                        michal = michal[entity];
                        entity = undefined;
                        zuuluu = zuuluu.bind(entity)(michal);
                        michal = zuuluu.dispatch;
                        entity = {};
                        tangon = 'ACTIVITY_JOIN_FAILED';
                        entity['type'] = tangon;
                        tangon = _closure3_slot1;
                        entity['applicationId'] = tangon;
                        entity = michal.bind(zuuluu)(entity);
                        entity = false;
                        return entity;
                    };
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
                }
            };
            entity = function(argFoo) {
                tangon = _closure1_slot7;
                zuuluu = _closure2_slot0;
                entity = argFoo;
                entity = entity.body;
                michal = entity.secret;
                entity = undefined;
                entity = tangon.bind(entity)(zuuluu, michal);
                entity = true;
                return entity;
            };
            entity = michal.bind(zuuluu)(tangon, entity);
            _fun00002_ip = 130; continue _fun00001;
 109:
            michal = global;
            tangon = michal.Promise;
            zuuluu = tangon.resolve;
            michal = false;
            entity = zuuluu.bind(tangon)(michal);
 130:
            return entity;
        }
    };
    var _closure1_slot6 = entity;
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
        entity = 4;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.openURL;
        michal = _closure1_slot5;
        michal = michal.SAFARI;
        michal = zuuluu.bind(tangon)(report, michal);
        return entity;
    };
    var _closure1_slot7 = tangon;
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
    michal = michal.WebBrowserType;
    var _closure1_slot5 = michal;
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
        zuuluu = _closure1_slot6;
        michal = undefined;
        entity = argFoo;
        entity = zuuluu.bind(michal)(entity);
        return entity;
    };
    michal['join'] = golfie;
    michal['joinWithSecret'] = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'actions/GamesActionCreators.native.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();