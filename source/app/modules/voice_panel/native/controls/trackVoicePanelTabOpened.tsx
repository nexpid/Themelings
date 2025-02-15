// app/modules/voice_panel/native/controls/trackVoicePanelTabOpened.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    report = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = golf[entity];
    entity = undefined;
    mike = report.bind(entity)(mike);
    var _closure1_slot2 = mike;
    mike = 1;
    mike = golf[mike];
    mike = oscar.bind(entity)(mike);
    mike = mike.AnalyticEvents;
    var _closure1_slot3 = mike;
    mike = {};
    report = 'store';
    mike['STORE'] = report;
    report = 'gesture';
    mike['GESTURE'] = report;
    report = 'prejoin button';
    mike['PREJOIN_BUTTON'] = report;
    report = 'connected button';
    mike['CONNECTED_BUTTON'] = report;
    report = 3;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/voice_panel/native/controls/trackVoicePanelTabOpened.tsx';
    report = oscar.bind(golf)(report);
    tango = function(argFoo, argBar, argBaz) { // Original name: trackVoicePanelTabOpened
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            zulu = _closure1_slot2;
            entity = zulu.hasUnread;
            oscar = entity.bind(zulu)(tango);
            if(oscar) { _fun00002_ip = 45; continue _fun00001 }
 24:
            zulu = _closure1_slot2;
            entity = zulu.getMentionCount;
            zulu = entity.bind(zulu)(tango);
            entity = 0;
            oscar = zulu > entity;
 45:
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            entity = 2;
            zulu = zulu[entity];
            entity = undefined;
            report = tango.bind(entity)(zulu);
            tango = report.track;
            mike = _closure1_slot3;
            zulu = mike.VOICE_PANEL_TAB_OPENED;
            mike = {};
            golf = argBar;
            mike['tab'] = golf;
            golf = argBaz;
            mike['source'] = golf;
            mike['is_chat_badged'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return entity;
        }
    };
    zulu['default'] = tango;
    zulu['VoicePanelTabAnalyticsSources'] = mike;
    return entity;
})();