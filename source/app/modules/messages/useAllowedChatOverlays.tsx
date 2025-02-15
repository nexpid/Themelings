// app/modules/messages/useAllowedChatOverlays.tsx
export default (function(_, argBar, argBaz, __, ___, argFred, argPlugh) {
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
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    verify = tango.ChatOverlays;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.ActivityPanelModes;
    tango = {};
    options = verify.NEW_MESSAGES;
    offset = new Array(3);
    offset[0] = options;
    options = verify.OPT_IN_CHANNEL;
    offset[1] = options;
    options = verify.SUMMARIES;
    offset[2] = options;
    options = 'no_text_activity';
    tango[options] = offset;
    offset = golf.DISCONNECTED;
    yankee = verify.NEW_MESSAGES;
    options = new Array(3);
    options[0] = yankee;
    yankee = verify.OPT_IN_CHANNEL;
    options[1] = yankee;
    yankee = verify.SUMMARIES;
    options[2] = yankee;
    tango[offset] = options;
    offset = golf.LAUNCHING_WITH_ORIENTATION_CHANGE;
    yankee = verify.NEW_MESSAGES;
    options = new Array(3);
    options[0] = yankee;
    yankee = verify.OPT_IN_CHANNEL;
    options[1] = yankee;
    yankee = verify.SUMMARIES;
    options[2] = yankee;
    tango[offset] = options;
    offset = golf.PANEL;
    options = new Array(0);
    tango[offset] = options;
    offset = golf.PIP;
    yankee = verify.NEW_MESSAGES;
    options = new Array(3);
    options[0] = yankee;
    yankee = verify.OPT_IN_CHANNEL;
    options[1] = yankee;
    yankee = verify.SUMMARIES;
    options[2] = yankee;
    tango[offset] = options;
    options = golf.ACTIVITY_POPOUT_WINDOW;
    offset = verify.NEW_MESSAGES;
    golf = new Array(3);
    golf[0] = offset;
    offset = verify.OPT_IN_CHANNEL;
    golf[1] = offset;
    verify = verify.SUMMARIES;
    golf[2] = verify;
    tango[options] = golf;
    var _closure1_slot5 = tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/messages/useAllowedChatOverlays.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: useAllowedChatOverlays
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = _closure1_slot0;
            golf = _closure1_slot2;
            tango = 4;
            entity = golf[tango];
            oscar = undefined;
            yankee = report.bind(oscar)(entity);
            verify = yankee.useStateFromStores;
            offset = _closure1_slot3;
            options = new Array(1);
            options[0] = offset;
            entity = function() {
                mike = _closure1_slot3;
                entity = mike.getCurrentEmbeddedActivity;
                entity = entity.bind(mike)();
                return entity;
            };
            entity = verify.bind(yankee)(options, entity);
            tango = golf[tango];
            verify = report.bind(oscar)(tango);
            options = verify.useStateFromStores;
            tango = new Array(1);
            tango[0] = offset;
            zulu = function() {
                mike = _closure1_slot3;
                entity = mike.getActivityPanelMode;
                entity = entity.bind(mike)();
                return entity;
            };
            zulu = options.bind(verify)(tango, zulu);
            tango = 5;
            tango = golf[tango];
            golf = report.bind(oscar)(tango);
            report = golf.getEmbeddedActivityLocationChannelId;
            tango = null;
            options = tango == entity;
            tango = undefined;
            if(options) { _fun00002_ip = 126; continue _fun00001 }
 121:
            tango = entity.location;
 126:
            report = report.bind(golf)(tango);
            if(!(oscar !== entity)) { _fun00002_ip = 178; continue _fun00001 }
 135:
            tango = _closure1_slot1;
            golf = _closure1_slot2;
            entity = 6;
            entity = golf[entity];
            tango = tango.bind(oscar)(entity);
            entity = _closure1_slot4;
            entity = tango.bind(oscar)(report, entity);
            if(entity) { _fun00002_ip = 178; continue _fun00001 }
 168:
            entity = _closure1_slot5;
            entity = entity[zulu];
            _fun00002_ip = 190; continue _fun00001;
 178:
            mike = _closure1_slot5;
            entity = mike.no_text_activity;
 190:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();