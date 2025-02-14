// app/modules/self_mod/ChannelSafetyWarningsActionCreators.tsx
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
    tango = tango.SafetyWarningTypes;
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Endpoints;
    var _closure1_slot4 = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/self_mod/ChannelSafetyWarningsActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo, argBar) { // Original name: dismissChannelSafetyWarnings
        golf = argFoo;
        report = argBar;
        mike = _closure1_slot1;
        oscar = _closure1_slot2;
        entity = 2;
        entity = oscar[entity];
        zulu = undefined;
        options = mike.bind(zulu)(entity);
        mike = options.dispatch;
        entity = {};
        verify = 'DISMISS_CHANNEL_SAFETY_WARNINGS';
        entity['type'] = verify;
        entity['channelId'] = golf;
        entity['warningIds'] = report;
        entity = mike.bind(options)(entity);
        mike = _closure1_slot0;
        entity = 3;
        entity = oscar[entity];
        entity = mike.bind(zulu)(entity);
        zulu = entity.HTTP;
        mike = zulu.post;
        entity = {};
        oscar = _closure1_slot4;
        tango = oscar.CHANNEL_SAFETY_WARNINGS_ACK;
        tango = tango.bind(oscar)(golf);
        entity['url'] = tango;
        tango = {};
        tango['warning_ids'] = report;
        entity['body'] = tango;
        tango = true;
        entity['oldFormErrors'] = tango;
        tango = false;
        entity['rejectWithError'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['dismissChannelSafetyWarnings'] = tango;
    tango = function(argFoo, argBar, argBaz) { // Original name: setChannelSafetyWarningFeedback
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 2;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'CHANNEL_SAFETY_WARNING_FEEDBACK';
        mike['type'] = report;
        report = argFoo;
        mike['channelId'] = report;
        report = argBar;
        mike['warningId'] = report;
        report = argBaz;
        mike['feedbackType'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['setChannelSafetyWarningFeedback'] = tango;
    tango = function(argFoo) { // Original name: clearChannelSafetyWarnings
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 2;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'CLEAR_CHANNEL_SAFETY_WARNINGS';
        mike['type'] = report;
        report = argFoo;
        mike['channelId'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['clearChannelSafetyWarnings'] = tango;
    tango = function(argFoo) { // Original name: acknowledgeChannelSafetyWarningTooltip
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 2;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'ACKNOWLEDGE_CHANNEL_SAFETY_WARNING_TOOLTIP';
        mike['type'] = report;
        report = argFoo;
        mike['channelId'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['acknowledgeChannelSafetyWarningTooltip'] = tango;
    tango = function(argFoo) { // Original name: reportFalsePositive
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 3;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        zulu = entity.HTTP;
        mike = zulu.post;
        entity = {};
        oscar = _closure1_slot4;
        report = oscar.SAFETY_WARNING_FALSE_POSITIVE;
        tango = argFoo;
        tango = report.bind(oscar)(tango);
        entity['url'] = tango;
        tango = false;
        entity['rejectWithError'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['reportFalsePositive'] = tango;
    mike = function(argFoo) { // Original name: markAsStrangerDanger
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 3;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        zulu = entity.HTTP;
        mike = zulu.post;
        entity = {};
        golf = _closure1_slot4;
        oscar = golf.ADD_SAFETY_WARNING;
        tango = argFoo;
        tango = oscar.bind(golf)(tango);
        entity['url'] = tango;
        tango = {};
        report = _closure1_slot3;
        report = report.STRANGER_DANGER;
        tango['safety_warning_type'] = report;
        entity['body'] = tango;
        tango = false;
        entity['rejectWithError'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['markAsStrangerDanger'] = mike;
    return entity;
})();