// app/actions/GamesActionCreators.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = report.bind(entity)(mike);
    golf = mike.Endpoints;
    var _closure1_slot3 = golf;
    mike = mike.DiscordConnectDeeplinks;
    var _closure1_slot4 = mike;
    mike = {};
    golf = function() { // Original name: addGame
        entity = undefined;
        return entity;
    };
    mike['addGame'] = golf;
    golf = function() { // Original name: toggleOverlay
        entity = undefined;
        return entity;
    };
    mike['toggleOverlay'] = golf;
    golf = function() { // Original name: editName
        entity = undefined;
        return entity;
    };
    mike['editName'] = golf;
    golf = function() { // Original name: identifyGame
        entity = global;
        zulu = entity.Promise;
        mike = zulu.reject;
        report = entity.Error;
        entity = report.prototype;
        tango = Object.create(entity, {constructor: {value: report}});
        oscar = 'not supported';
        golf = tango;
        entity = new golf[report](oscar, report);
        entity = entity instanceof Object ? entity : tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['identifyGame'] = golf;
    golf = function() { // Original name: getDetectableGames
        entity = undefined;
        return entity;
    };
    mike['getDetectableGames'] = golf;
    golf = function() { // Original name: reportUnverifiedGame
        entity = undefined;
        return entity;
    };
    mike['reportUnverifiedGame'] = golf;
    golf = function() { // Original name: uploadIcon
        entity = undefined;
        return entity;
    };
    mike['uploadIcon'] = golf;
    golf = function() { // Original name: deleteEntry
        entity = undefined;
        return entity;
    };
    mike['deleteEntry'] = golf;
    golf = function() { // Original name: launch
        entity = global;
        mike = entity.Promise;
        entity = mike.resolve;
        entity = entity.bind(mike)();
        return entity;
    };
    mike['launch'] = golf;
    golf = function(argFoo) { // Original name: join
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            zulu = this;
            var _closure2_slot0 = zulu;
            offset = mike.userId;
            verify = mike.sessionId;
            options = mike.applicationId;
            var _closure2_slot1 = options;
            zulu = mike.deeplinkUri;
            var _closure2_slot2 = zulu;
            golf = mike.channelId;
            zulu = mike.messageId;
            report = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 1;
            mike = tango[mike];
            tango = undefined;
            yankee = report.bind(tango)(mike);
            report = yankee.dispatch;
            mike = {};
            romeo = 'ACTIVITY_JOIN_LOADING';
            mike['type'] = romeo;
            mike['applicationId'] = options;
            mike = report.bind(yankee)(mike);
            report = null;
            mike = report != golf;
            if(!mike) { _fun00002_ip = 116; continue _fun00001 }
 112:
            mike = report != zulu;
 116:
            report = undefined;
            if(!mike) { _fun00002_ip = 142; continue _fun00001 }
 121:
            mike = {};
            mike['channel_id'] = golf;
            mike['message_id'] = zulu;
            zulu = true;
            mike['headless'] = zulu;
            report = mike;
 142:
            zulu = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 2;
            mike = golf[mike];
            mike = zulu.bind(tango)(mike);
            tango = mike.HTTP;
            zulu = tango.get;
            mike = {'url': null, 'retries': 3, 'query': null, 'oldFormErrors': true, 'rejectWithError': true};
            golf = _closure1_slot3;
            oscar = golf.USER_ACTIVITY_JOIN;
            oscar = oscar.bind(golf)(offset, verify, options);
            mike['url'] = oscar;
            mike['query'] = report;
            tango = zulu.bind(tango)(mike);
            zulu = tango.then;
            mike = function(argFoo) {
                tango = _closure2_slot0;
                zulu = tango.joinWithSecret;
                mike = _closure2_slot2;
                entity = argFoo;
                entity = entity.body;
                entity = entity.secret;
                entity = zulu.bind(tango)(mike, entity);
                entity = true;
                return entity;
            };
            entity = function() {
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 1;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.dispatch;
                entity = {};
                tango = 'ACTIVITY_JOIN_FAILED';
                entity['type'] = tango;
                tango = _closure2_slot1;
                entity['applicationId'] = tango;
                entity = mike.bind(zulu)(entity);
                entity = false;
                return entity;
            };
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    mike['join'] = golf;
    tango = function(argFoo, argBar) { // Original name: joinWithSecret
        mike = _closure1_slot4;
        oscar = mike.GAME_INVITE_FRAGMENT;
        mike = global;
        mike = mike.HermesInternal;
        report = mike.concat;
        tango = '';
        zulu = argFoo;
        mike = argBar;
        tango = report.bind(tango)(zulu, oscar, mike);
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 3;
        mike = mike[entity];
        entity = undefined;
        zulu = zulu.bind(entity)(mike);
        mike = zulu.openDeeplink;
        mike = mike.bind(zulu)(tango);
        return entity;
    };
    mike['joinWithSecret'] = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'actions/GamesActionCreators.native.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();