// app/modules/hangouts/VoiceLockscreenWidgetExperiment.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBar;
    zulu = argFred;
    options = argPlugh;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = options;
    entity = global;
    oscar = entity.Object;
    report = oscar.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscar)(zulu, entity, tango);
    tango = 0;
    report = options[tango];
    entity = undefined;
    offset = golf.bind(entity)(report);
    verify = offset.createExperiment;
    report = {'kind': 'guild', 'id': '2023-12_voice_lockscreen_widget', 'label': 'Voice live activity (guild)'};
    oscar = {'showWidget': false, 'voiceChannelActivityNotifsEnabled': false};
    report['defaultConfig'] = oscar;
    oscar = {'id': 1, 'label': 'Off (notif only)'};
    yankee = {'showWidget': false, 'voiceChannelActivityNotifsEnabled': false};
    oscar['config'] = yankee;
    yankee = new Array(3);
    yankee[0] = oscar;
    oscar = {'id': 2, 'label': 'On (widget + notif)'};
    romeo = {'showWidget': true, 'voiceChannelActivityNotifsEnabled': false};
    oscar['config'] = romeo;
    yankee[1] = oscar;
    romeo = {'id': 3, 'label': 'On (widget + notifs++)'};
    oscar = 3;
    foxtrot = {'showWidget': true, 'voiceChannelActivityNotifsEnabled': true};
    romeo['config'] = foxtrot;
    yankee[2] = romeo;
    report['treatments'] = yankee;
    report = verify.bind(offset)(report);
    var _closure1_slot2 = report;
    tango = options[tango];
    offset = golf.bind(entity)(tango);
    verify = offset.createExperiment;
    tango = {'kind': 'user', 'id': '2024-01_voice_lockscreen_widget_user', 'label': 'Voice live activity (user)'};
    yankee = {'showWidget': false, 'showStaticWidget': false};
    tango['defaultConfig'] = yankee;
    romeo = {'id': 1, 'label': 'Widget on'};
    yankee = {'showWidget': true, 'showStaticWidget': false};
    romeo['config'] = yankee;
    yankee = new Array(1);
    yankee[0] = romeo;
    tango['treatments'] = yankee;
    tango = verify.bind(offset)(tango);
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/hangouts/VoiceLockscreenWidgetExperiment.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['default'] = report;
    zulu['VoiceLockscreenWidgetUserExperiment'] = tango;
    mike = function(argFoo, argBar) { // Original name: getLockscreenWidgetConfig
        entity = argFoo;
        oscar = _closure1_slot0;
        golf = _closure1_slot1;
        zulu = 1;
        zulu = golf[zulu];
        report = undefined;
        tango = oscar.bind(report)(zulu);
        zulu = tango.age;
        tango = zulu.bind(tango)(entity);
        zulu = 2;
        zulu = golf[zulu];
        zulu = oscar.bind(report)(zulu);
        zulu = zulu.Millis;
        report = zulu.DAY;
        zulu = 30;
        zulu = zulu * report;
        report = tango >= zulu;
        tango = _closure1_slot2;
        zulu = tango.getCurrentConfig;
        mike = {};
        oscar = argBar;
        mike['location'] = oscar;
        mike['guildId'] = entity;
        entity = {};
        entity['disable'] = report;
        report = true;
        entity['autoTrackExposure'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['getLockscreenWidgetConfig'] = mike;
    return entity;
})();