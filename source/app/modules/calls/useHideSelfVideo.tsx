// app/modules/calls/useHideSelfVideo.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
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
    tango = tango.VideoToggleState;
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.MediaEngineContextTypes;
    var _closure1_slot6 = golf;
    tango = tango.Features;
    var _closure1_slot7 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/calls/useHideSelfVideo.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useHideSelfVideo
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscar = argFoo;
            zulu = arguments[1];
            verify = undefined;
            if(!(zulu === verify)) { _fun00002_ip = 27; continue _fun00001 }
 14:
            entity = _closure1_slot6;
            zulu = entity.DEFAULT;
 27:
            var _closure2_slot0 = zulu;
            var _closure2_slot1 = verify;
            options = _closure1_slot0;
            offset = _closure1_slot2;
            golf = 4;
            tango = offset[golf];
            romeo = options.bind(verify)(tango);
            yankee = romeo.useStateFromStores;
            tango = _closure1_slot3;
            report = new Array(1);
            report[0] = tango;
            tango = function() {
                mike = _closure1_slot3;
                entity = mike.getId;
                entity = entity.bind(mike)();
                return entity;
            };
            report = yankee.bind(romeo)(report, tango);
            _closure2_slot1 = report;
            tango = offset[golf];
            foxtrot = options.bind(verify)(tango);
            romeo = foxtrot.useStateFromStores;
            tango = _closure1_slot4;
            yankee = new Array(1);
            yankee[0] = tango;
            entity = function() {
                zulu = _closure1_slot4;
                mike = zulu.supports;
                entity = _closure1_slot7;
                entity = entity.DISABLE_VIDEO;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity = romeo.bind(foxtrot)(yankee, entity);
            golf = offset[golf];
            verify = options.bind(verify)(golf);
            options = verify.useStateFromStores;
            golf = new Array(1);
            golf[0] = tango;
            tango = new Array(2);
            tango[0] = report;
            tango[1] = zulu;
            zulu = function() {
                tango = _closure1_slot4;
                zulu = tango.isLocalVideoDisabled;
                mike = _closure2_slot1;
                entity = _closure2_slot0;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            zulu = options.bind(verify)(golf, zulu, tango);
            tango = null;
            tango = tango == oscar;
            if(tango) { _fun00002_ip = 192; continue _fun00001 }
 188:
            tango = oscar === report;
 192:
            if(!tango) { _fun00002_ip = 198; continue _fun00001 }
 195:
            tango = entity;
 198:
            entity = new Array(3);
            entity[0] = tango;
            entity[1] = zulu;
            mike = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = _closure1_slot5;
                    zulu = argFoo;
                    if(zulu) { _fun00004_ip = 21; continue _fun00003 }
 13:
                    oscar = mike.MANUAL_ENABLED;
                    _fun00004_ip = 27; continue _fun00003;
 21:
                    oscar = mike.DISABLED;
 27:
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 5;
                    mike = mike[entity];
                    entity = undefined;
                    report = zulu.bind(entity)(mike);
                    tango = report.setDisableLocalVideo;
                    zulu = _closure2_slot1;
                    mike = _closure2_slot0;
                    mike = tango.bind(report)(zulu, oscar, mike);
                    return entity;
                }
            };
            entity[2] = mike;
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();