// app/utils/LibraryApplicationUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    tango = function(argFoo) { // Original name: convertToTransitionState
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            mike = null;
            tango = mike == zulu;
            entity = null;
            if(tango) { _fun00002_ip = 82; continue _fun00001 }
 14:
            oscar = zulu.type;
            report = _closure1_slot6;
            report = report.INSTALLING;
            if(!(oscar !== report)) { _fun00002_ip = 76; continue _fun00001 }
 36:
            oscar = zulu.type;
            report = _closure1_slot6;
            report = report.UPDATING;
            if(!(oscar !== report)) { _fun00002_ip = 76; continue _fun00001 }
 55:
            report = zulu.type;
            tango = _closure1_slot6;
            tango = tango.UNINSTALLING;
            mike = null;
            if(!(report === tango)) { _fun00002_ip = 79; continue _fun00001 }
 76:
            mike = zulu;
 79:
            entity = mike;
 82:
            return entity;
        }
    };
    var _closure1_slot8 = tango;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = options.bind(entity)(report);
    var _closure1_slot2 = report;
    report = 1;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 2;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 3;
    report = golf[report];
    report = oscar.bind(entity)(report);
    options = report.LibraryApplicationFlags;
    var _closure1_slot5 = options;
    options = report.LocalDispatchApplicationStates;
    var _closure1_slot6 = options;
    report = report.StatusTypes;
    var _closure1_slot7 = report;
    report = 5;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'utils/LibraryApplicationUtils.tsx';
    report = oscar.bind(golf)(report);
    report = function(argFoo, argBar) { // Original name: getComboId
        entity = global;
        entity = entity.HermesInternal;
        report = entity.concat;
        tango = '';
        zulu = argFoo;
        mike = ':';
        entity = argBar;
        entity = report.bind(tango)(zulu, mike, entity);
        return entity;
    };
    zulu['getComboId'] = report;
    report = function(argFoo) { // Original name: convertComboId
        zulu = argFoo;
        mike = zulu.split;
        entity = ':';
        tango = mike.bind(zulu)(entity);
        zulu = _closure1_slot2;
        mike = undefined;
        entity = 2;
        zulu = zulu.bind(mike)(tango, entity);
        entity = {};
        mike = 0;
        mike = zulu[mike];
        entity['applicationId'] = mike;
        mike = 1;
        mike = zulu[mike];
        entity['branchId'] = mike;
        return entity;
    };
    zulu['convertComboId'] = report;
    report = function(argFoo, argBar) { // Original name: shouldShareApplicationActivity
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tango = argBar;
            zulu = _closure1_slot0;
            entity = _closure1_slot1;
            oscar = 4;
            entity = entity[oscar];
            report = undefined;
            entity = zulu.bind(report)(entity);
            zulu = entity.ShowCurrentGame;
            entity = zulu.getSetting;
            entity = entity.bind(zulu)();
            if(!entity) { _fun00004_ip = 143; continue _fun00003 }
 47:
            zulu = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[oscar];
            entity = zulu.bind(report)(entity);
            zulu = entity.StatusSetting;
            entity = zulu.getSetting;
            zulu = entity.bind(zulu)();
            entity = _closure1_slot7;
            entity = entity.INVISIBLE;
            if(!(zulu !== entity)) { _fun00004_ip = 143; continue _fun00003 }
 94:
            zulu = tango.getActiveLibraryApplication;
            entity = argFoo;
            tango = zulu.bind(tango)(entity);
            entity = null;
            entity = entity == tango;
            if(entity) { _fun00004_ip = 141; continue _fun00003 }
 117:
            zulu = tango.hasFlag;
            mike = _closure1_slot5;
            mike = mike.PRIVATE;
            mike = zulu.bind(tango)(mike);
            entity = !mike;
 141:
            return entity;
 143:
            entity = false;
            return entity;
        }
    };
    zulu['shouldShareApplicationActivity'] = report;
    report = function(argFoo, argBar) { // Original name: calculateProgressPercentage
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tango = argBar;
            zulu = 100;
            mike = 0;
            entity = zulu;
            if(!(mike !== tango)) { _fun00006_ip = 26; continue _fun00005 }
 15:
            mike = argFoo;
            mike = mike / tango;
            entity = mike * zulu;
 26:
            return entity;
        }
    };
    zulu['calculateProgressPercentage'] = report;
    report = function(argFoo, argBar, argBaz) { // Original name: shouldShowGameInLibrary
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tango = argBar;
            entity = null;
            entity = entity != tango;
            if(!entity) { _fun00008_ip = 72; continue _fun00007 }
 12:
            mike = argBaz;
            mike = mike.enabled;
            mike = !mike;
            if(mike) { _fun00008_ip = 53; continue _fun00007 }
 26:
            report = tango.hasFlag;
            zulu = _closure1_slot5;
            zulu = zulu.PRIVATE;
            zulu = report.bind(tango)(zulu);
            mike = !zulu;
 53:
            if(!mike) { _fun00008_ip = 69; continue _fun00007 }
 56:
            zulu = tango.isHidden;
            zulu = zulu.bind(tango)();
            mike = !zulu;
 69:
            entity = mike;
 72:
            return entity;
        }
    };
    zulu['shouldShowGameInLibrary'] = report;
    zulu['convertToTransitionState'] = tango;
    tango = function(argFoo) { // Original name: getCombinedProgress
        tango = argFoo;
        zulu = tango.reduce;
        mike = function(argFoo, argBar) {
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                tango = argFoo;
                report = argBar;
                entity = _closure1_slot8;
                oscar = undefined;
                zulu = entity.bind(oscar)(report);
                golf = null;
                entity = tango;
                if(!(golf != zulu)) { _fun00010_ip = 122; continue _fun00009 }
 29:
                report = report.type;
                mike = _closure1_slot6;
                mike = mike.UP_TO_DATE;
                entity = tango;
                if(!(report !== mike)) { _fun00010_ip = 122; continue _fun00009 }
 51:
                mike = {};
                options = tango.total;
                report = global;
                verify = report.Number;
                golf = zulu.total;
                golf = verify.bind(oscar)(golf);
                golf = options + golf;
                mike['total'] = golf;
                tango = tango.progress;
                report = report.Number;
                zulu = zulu.progress;
                zulu = report.bind(oscar)(zulu);
                zulu = tango + zulu;
                mike['progress'] = zulu;
                entity = mike;
 122:
                return entity;
            }
        };
        entity = {'total': 0, 'progress': 0};
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['getCombinedProgress'] = tango;
    mike = function(argFoo) { // Original name: isUserEntitledToLibraryApplication
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            report = argFoo;
            entity = report.isDiscordApplication;
            entity = entity.bind(report)();
            mike = !entity;
            entity = !mike;
            if(mike) { _fun00012_ip = 56; continue _fun00011 }
 22:
            tango = report.isEntitled;
            oscar = _closure1_slot3;
            zulu = oscar.getCurrentUser;
            zulu = zulu.bind(oscar)();
            mike = _closure1_slot4;
            entity = tango.bind(report)(zulu, mike);
 56:
            return entity;
        }
    };
    zulu['isUserEntitledToLibraryApplication'] = mike;
    return entity;
})();