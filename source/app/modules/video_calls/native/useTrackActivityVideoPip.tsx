// app/modules/video_calls/native/useTrackActivityVideoPip.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
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
    options = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(options);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.AnalyticEvents;
    var _closure1_slot5 = tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/video_calls/native/useTrackActivityVideoPip.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useTrackActivityPip
        golf = argFoo;
        var _closure2_slot0 = golf;
        report = _closure1_slot0;
        oscar = _closure1_slot2;
        entity = 3;
        tango = oscar[entity];
        entity = undefined;
        verify = report.bind(entity)(tango);
        options = verify.useStateFromStores;
        tango = _closure1_slot4;
        report = new Array(1);
        report[0] = tango;
        tango = function() {
            mike = _closure1_slot4;
            entity = mike.isPipEnabledWhileFocusedOnActivityOrStream;
            entity = entity.bind(mike)();
            return entity;
        };
        verify = options.bind(verify)(report, tango);
        var _closure2_slot1 = verify;
        report = _closure1_slot1;
        tango = 4;
        tango = oscar[tango];
        tango = report.bind(entity)(tango);
        options = tango.bind(entity)(verify);
        var _closure2_slot2 = options;
        tango = 5;
        tango = oscar[tango];
        tango = report.bind(entity)(tango);
        oscar = tango.bind(entity)();
        var _closure2_slot3 = oscar;
        report = _closure1_slot3;
        tango = report.useEffect;
        zulu = new Array(4);
        zulu[0] = verify;
        zulu[1] = options;
        zulu[2] = golf;
        zulu[3] = oscar;
        mike = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = _closure2_slot3;
                mike = null;
                if(!(mike != entity)) { _fun00002_ip = 149; continue _fun00001 }
 16:
                entity = _closure2_slot2;
                if(!(mike != entity)) { _fun00002_ip = 149; continue _fun00001 }
 27:
                mike = _closure2_slot1;
                entity = _closure2_slot2;
                if(!(mike !== entity)) { _fun00002_ip = 149; continue _fun00001 }
 39:
                zulu = _closure2_slot1;
                mike = _closure1_slot5;
                if(zulu) { _fun00002_ip = 61; continue _fun00001 }
 53:
                tango = mike.ACTIVITY_VIDEO_PIP_HIDDEN;
                _fun00002_ip = 67; continue _fun00001;
 61:
                tango = mike.ACTIVITY_VIDEO_PIP_SHOWN;
 67:
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 6;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.track;
                entity = {};
                oscar = _closure2_slot0;
                golf = oscar.id;
                entity['channel_id'] = golf;
                oscar = oscar.guild_id;
                entity['guild_id'] = oscar;
                report = _closure2_slot3;
                oscar = report.applicationId;
                entity['application_id'] = oscar;
                report = report.compositeInstanceId;
                entity['activity_session_id'] = report;
                entity = mike.bind(zulu)(tango, entity);
 149:
                entity = undefined;
                return entity;
            }
        };
        mike = tango.bind(report)(mike, zulu);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();