// app/modules/main_tabs_v2/native/settings/definitions/ReactionNotificationsSettings.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = golf;
    mike = function(argFoo) { // Original name: onChange
        oscar = _closure1_slot0;
        golf = _closure1_slot2;
        entity = 2;
        mike = golf[entity];
        entity = undefined;
        report = oscar.bind(entity)(mike);
        tango = report.updateReactionNotificationsSetting;
        mike = global;
        zulu = mike.Number;
        mike = argFoo;
        zulu = zulu.bind(entity)(mike);
        mike = 3;
        mike = golf[mike];
        mike = oscar.bind(entity)(mike);
        oscar = mike.ReactionNotifications;
        mike = oscar.getSetting;
        mike = mike.bind(oscar)();
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = golf[entity];
    entity = undefined;
    tango = oscar.bind(entity)(tango);
    options = tango.MobileSetting;
    tango = {};
    verify = 1;
    verify = golf[verify];
    verify = oscar.bind(entity)(verify);
    verify = verify.RendererType;
    verify = verify.RADIO;
    tango['type'] = verify;
    verify = function() { // Original name: title
        report = _closure1_slot0;
        oscar = _closure1_slot2;
        entity = 4;
        mike = oscar[entity];
        tango = undefined;
        mike = report.bind(tango)(mike);
        zulu = mike.intl;
        mike = zulu.string;
        entity = oscar[entity];
        entity = report.bind(tango)(entity);
        entity = entity.t;
        entity = entity.Rq0NFh;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    tango['title'] = verify;
    options = options.NOTIFICATIONS;
    tango['parent'] = options;
    options = 3;
    options = golf[options];
    options = oscar.bind(entity)(options);
    options = options.ReactionNotifications;
    options = options.useSetting;
    tango['useValue'] = options;
    tango['onValueChange'] = mike;
    options = function() { // Original name: useOptions
        mike = {};
        report = _closure1_slot0;
        oscar = _closure1_slot2;
        golf = 4;
        entity = oscar[golf];
        tango = undefined;
        entity = report.bind(tango)(entity);
        options = entity.intl;
        zulu = options.string;
        entity = oscar[golf];
        entity = report.bind(tango)(entity);
        entity = entity.t;
        entity = entity.9x/Rtb;
        entity = zulu.bind(options)(entity);
        mike['label'] = entity;
        zulu = 5;
        entity = oscar[zulu];
        entity = report.bind(tango)(entity);
        entity = entity.ReactionNotificationType;
        entity = entity.NOTIFICATIONS_ENABLED;
        mike['value'] = entity;
        entity = new Array(3);
        entity[0] = mike;
        mike = {};
        options = oscar[golf];
        options = report.bind(tango)(options);
        offset = options.intl;
        verify = offset.string;
        options = oscar[golf];
        options = report.bind(tango)(options);
        options = options.t;
        options = options.fJAbQU;
        options = verify.bind(offset)(options);
        mike['label'] = options;
        options = oscar[zulu];
        options = report.bind(tango)(options);
        options = options.ReactionNotificationType;
        options = options.ONLY_DMS;
        mike['value'] = options;
        entity[1] = mike;
        mike = {};
        options = oscar[golf];
        options = report.bind(tango)(options);
        verify = options.intl;
        options = verify.string;
        golf = oscar[golf];
        golf = report.bind(tango)(golf);
        golf = golf.t;
        golf = golf.xu+UDQ;
        golf = options.bind(verify)(golf);
        mike['label'] = golf;
        zulu = oscar[zulu];
        zulu = report.bind(tango)(zulu);
        zulu = zulu.ReactionNotificationType;
        zulu = zulu.NOTIFICATIONS_DISABLED;
        mike['value'] = zulu;
        entity[2] = mike;
        return entity;
    };
    tango['useOptions'] = options;
    report = function() { // Original name: useExperiment
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 6;
        mike = mike[entity];
        entity = undefined;
        zulu = zulu.bind(entity)(mike);
        mike = zulu.useExperiment;
        entity = {};
        tango = 'tabsV2Settings';
        entity['location'] = tango;
        entity = mike.bind(zulu)(entity);
        entity = entity.enableInAppNotifications;
        return entity;
    };
    tango['usePredicate'] = report;
    report = 7;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/main_tabs_v2/native/settings/definitions/ReactionNotificationsSettings.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    zulu['onChange'] = mike;
    return entity;
})();