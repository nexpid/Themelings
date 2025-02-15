// app/modules/video_backgrounds/LastUsedVideoBackgroundOption.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar) { // Original name: getOptionFromSettingsFiltered
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            golf = argBar;
            tango = _closure1_slot0;
            entity = _closure1_slot2;
            oscar = 3;
            zulu = entity[oscar];
            report = undefined;
            offset = tango.bind(report)(zulu);
            verify = offset.getVideoBackgroundOptionFromProto;
            options = golf.id;
            zulu = argFoo;
            zulu = verify.bind(offset)(zulu, options);
            entity = entity[oscar];
            tango = tango.bind(report)(entity);
            entity = tango.isCustomBackgroundOption;
            entity = entity.bind(tango)(zulu);
            if(!entity) { _fun00002_ip = 107; continue _fun00001 }
 71:
            tango = _closure1_slot1;
            options = _closure1_slot2;
            entity = 4;
            entity = options[entity];
            tango = tango.bind(report)(entity);
            entity = tango.canUseCustomBackgrounds;
            tango = entity.bind(tango)(golf);
            entity = null;
            if(!tango) { _fun00002_ip = 157; continue _fun00001 }
 107:
            golf = 'number';
            tango = typeof zulu;
            if(!(golf === tango)) { _fun00002_ip = 151; continue _fun00001 }
 118:
            tango = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[oscar];
            tango = tango.bind(report)(mike);
            mike = tango.isDefaultBackgroundOption;
            tango = mike.bind(tango)(zulu);
            mike = null;
            if(!tango) { _fun00002_ip = 154; continue _fun00001 }
 151:
            mike = zulu;
 154:
            entity = mike;
 157:
            return entity;
        }
    };
    var _closure1_slot6 = entity;
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
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/video_backgrounds/LastUsedVideoBackgroundOption.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: getLastUsedVideoBackgroundOption
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tango = _closure1_slot6;
            entity = _closure1_slot4;
            entity = entity.settings;
            entity = entity.voiceAndVideo;
            mike = null;
            report = mike == entity;
            zulu = undefined;
            mike = undefined;
            if(report) { _fun00004_ip = 42; continue _fun00003 }
 36:
            mike = entity.videoBackgroundFilterDesktop;
 42:
            entity = argFoo;
            entity = tango.bind(zulu)(mike, entity);
            return entity;
        }
    };
    zulu['getLastUsedVideoBackgroundOption'] = tango;
    mike = function() { // Original name: useLastUsedVideoBackgroundOption
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            report = _closure1_slot0;
            golf = _closure1_slot2;
            tango = 5;
            zulu = golf[tango];
            oscar = undefined;
            offset = report.bind(oscar)(zulu);
            verify = offset.useStateFromStores;
            zulu = _closure1_slot4;
            options = new Array(1);
            options[0] = zulu;
            zulu = function() {
                entity = _closure1_slot4;
                entity = entity.settings;
                return entity;
            };
            zulu = verify.bind(offset)(options, zulu);
            tango = golf[tango];
            options = report.bind(oscar)(tango);
            golf = options.useStateFromStores;
            tango = _closure1_slot5;
            report = new Array(1);
            report[0] = tango;
            tango = function() {
                mike = _closure1_slot5;
                entity = mike.getCurrentUser;
                entity = entity.bind(mike)();
                return entity;
            };
            report = golf.bind(options)(report, tango);
            var _closure2_slot0 = report;
            zulu = zulu.voiceAndVideo;
            tango = null;
            tango = tango == zulu;
            if(tango) { _fun00006_ip = 117; continue _fun00005 }
 111:
            oscar = zulu.videoBackgroundFilterDesktop;
 117:
            var _closure2_slot1 = oscar;
            tango = _closure1_slot3;
            zulu = tango.useMemo;
            mike = new Array(2);
            mike[0] = oscar;
            mike[1] = report;
            entity = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zulu = _closure2_slot0;
                    entity = null;
                    zulu = entity == zulu;
                    if(zulu) { _fun00008_ip = 39; continue _fun00007 }
 16:
                    report = _closure1_slot6;
                    tango = _closure2_slot1;
                    zulu = _closure2_slot0;
                    mike = undefined;
                    entity = report.bind(mike)(tango, zulu);
 39:
                    return entity;
                }
            };
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        }
    };
    zulu['useLastUsedVideoBackgroundOption'] = mike;
    return entity;
})();