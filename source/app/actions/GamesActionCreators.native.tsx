// app/actions/GamesActionCreators.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = report.bind(entity)(michal);
    golfie = michal.Endpoints;
    var _closure1_slot3 = golfie;
    golfie = michal.DiscordConnectDeeplinks;
    var _closure1_slot4 = golfie;
    michal = michal.WebBrowserType;
    var _closure1_slot5 = michal;
    michal = {};
    golfie = function() { // Original name: addGame
        entity = undefined;
        return entity;
    };
    michal['addGame'] = golfie;
    golfie = function() { // Original name: toggleOverlay
        entity = undefined;
        return entity;
    };
    michal['toggleOverlay'] = golfie;
    golfie = function() { // Original name: editName
        entity = undefined;
        return entity;
    };
    michal['editName'] = golfie;
    golfie = function() { // Original name: identifyGame
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
    michal['identifyGame'] = golfie;
    golfie = function() { // Original name: getDetectableGames
        entity = undefined;
        return entity;
    };
    michal['getDetectableGames'] = golfie;
    golfie = function() { // Original name: reportUnverifiedGame
        entity = undefined;
        return entity;
    };
    michal['reportUnverifiedGame'] = golfie;
    golfie = function() { // Original name: uploadIcon
        entity = undefined;
        return entity;
    };
    michal['uploadIcon'] = golfie;
    golfie = function() { // Original name: deleteEntry
        entity = undefined;
        return entity;
    };
    michal['deleteEntry'] = golfie;
    golfie = function() { // Original name: launch
        entity = global;
        michal = entity.Promise;
        entity = michal.resolve;
        entity = entity.bind(michal)();
        return entity;
    };
    michal['launch'] = golfie;
    golfie = function(argFoo) { // Original name: join
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            zuuluu = this;
            var _closure2_slot0 = zuuluu;
            offset = michal.userId;
            verify = michal.sessionId;
            option = michal.applicationId;
            var _closure2_slot1 = option;
            zuuluu = michal.deeplinkUri;
            var _closure2_slot2 = zuuluu;
            golfie = michal.channelId;
            zuuluu = michal.messageId;
            report = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 1;
            michal = tangon[michal];
            tangon = undefined;
            yankee = report.bind(tangon)(michal);
            report = yankee.dispatch;
            michal = {};
            romeon = 'ACTIVITY_JOIN_LOADING';
            michal['type'] = romeon;
            michal['applicationId'] = option;
            michal = report.bind(yankee)(michal);
            report = null;
            michal = report != golfie;
            if(!michal) { _fun00002_ip = 116; continue _fun00001 }
 112:
            michal = report != zuuluu;
 116:
            report = undefined;
            if(!michal) { _fun00002_ip = 142; continue _fun00001 }
 121:
            michal = {};
            michal['channel_id'] = golfie;
            michal['message_id'] = zuuluu;
            zuuluu = true;
            michal['headless'] = zuuluu;
            report = michal;
 142:
            zuuluu = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 2;
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
                tangon = _closure2_slot0;
                zuuluu = tangon.joinWithSecret;
                michal = _closure2_slot2;
                entity = argFoo;
                entity = entity.body;
                entity = entity.secret;
                entity = zuuluu.bind(tangon)(michal, entity);
                entity = true;
                return entity;
            };
            entity = function() {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 1;
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
    michal['join'] = golfie;
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
        entity = 3;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.openURL;
        michal = _closure1_slot5;
        michal = michal.SAFARI;
        michal = zuuluu.bind(tangon)(report, michal);
        return entity;
    };
    michal['joinWithSecret'] = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'actions/GamesActionCreators.native.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();