// app/modules/media_viewer/native/MediaViewerShareSheet.tsx
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
    golf = tango.AnalyticEvents;
    var _closure1_slot3 = golf;
    tango = tango.AnalyticsSections;
    var _closure1_slot4 = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/media_viewer/native/MediaViewerShareSheet.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: showShareActionSheetForSource
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            zulu = entity.videoURI;
            mike = null;
            if(!(mike == zulu)) { _fun00002_ip = 23; continue _fun00001 }
 15:
            zulu = entity.uri;
            _fun00002_ip = 29; continue _fun00001;
 23:
            zulu = entity.videoURI;
 29:
            golf = _closure1_slot0;
            report = _closure1_slot2;
            entity = 1;
            tango = report[entity];
            entity = undefined;
            tango = golf.bind(entity)(tango);
            oscar = tango.useMediaViewerSessionManager;
            tango = oscar.getState;
            oscar = tango.bind(oscar)();
            tango = 2;
            tango = report[tango];
            options = golf.bind(entity)(tango);
            golf = options.showShareActionSheet;
            tango = {};
            tango['url'] = zulu;
            zulu = _closure1_slot4;
            zulu = zulu.MEDIA_VIEWER;
            zulu = golf.bind(options)(tango, zulu);
            tango = _closure1_slot1;
            zulu = 3;
            zulu = report[zulu];
            report = tango.bind(entity)(zulu);
            tango = report.track;
            mike = _closure1_slot3;
            zulu = mike.MEDIA_VIEWER_SHARE_BUTTON_TAPPED;
            mike = {};
            golf = oscar.guildId;
            mike['guild_id'] = golf;
            golf = oscar.channelId;
            mike['channel_id'] = golf;
            oscar = oscar.channelType;
            mike['channel_type'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();