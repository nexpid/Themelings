// app/modules/self_mod/inappropriate_conversation/InappropriateConversationsActionCreators.tsx
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
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    tango = tango.Endpoints;
    var _closure1_slot3 = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/self_mod/inappropriate_conversation/InappropriateConversationsActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    tango = function() { // Original name: playVibingWumpusMusic
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 1;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'VIBING_WUMPUS_PLAY_MUSIC';
        mike['type'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['playVibingWumpusMusic'] = tango;
    tango = function() { // Original name: stopVibingWumpusMusic
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 1;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'VIBING_WUMPUS_STOP_MUSIC';
        mike['type'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['stopVibingWumpusMusic'] = tango;
    tango = function() { // Original name: pauseVibingWumpusMusic
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 1;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'VIBING_WUMPUS_PAUSE_MUSIC';
        mike['type'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['pauseVibingWumpusMusic'] = tango;
    tango = function(argFoo) { // Original name: deleteAllSafetyWarnings
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 2;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        zulu = entity.HTTP;
        mike = zulu.del;
        entity = {};
        oscar = _closure1_slot3;
        report = oscar.DELETE_SAFETY_WARNINGS;
        tango = argFoo;
        tango = report.bind(oscar)(tango);
        entity['url'] = tango;
        tango = false;
        entity['rejectWithError'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['deleteAllSafetyWarnings'] = tango;
    mike = function(argFoo, argBar) { // Original name: markAsInappropriateConversation
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 2;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        zulu = entity.HTTP;
        mike = zulu.post;
        entity = {};
        oscar = _closure1_slot3;
        report = oscar.ADD_SAFETY_WARNING;
        tango = argFoo;
        tango = report.bind(oscar)(tango);
        entity['url'] = tango;
        tango = {};
        report = argBar;
        tango['safety_warning_type'] = report;
        entity['body'] = tango;
        tango = false;
        entity['rejectWithError'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['markAsInappropriateConversation'] = mike;
    return entity;
})();