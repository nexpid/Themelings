// app/utils/LibraryApplicationUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    tangon = function(argFoo) { // Original name: convertToTransitionState
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            michal = null;
            tangon = michal == zuuluu;
            entity = null;
            if(tangon) { _fun00002_ip = 82; continue _fun00001 }
 14:
            oscard = zuuluu.type;
            report = _closure1_slot6;
            report = report.INSTALLING;
            if(!(oscard !== report)) { _fun00002_ip = 76; continue _fun00001 }
 36:
            oscard = zuuluu.type;
            report = _closure1_slot6;
            report = report.UPDATING;
            if(!(oscard !== report)) { _fun00002_ip = 76; continue _fun00001 }
 55:
            report = zuuluu.type;
            tangon = _closure1_slot6;
            tangon = tangon.UNINSTALLING;
            michal = null;
            if(!(report === tangon)) { _fun00002_ip = 79; continue _fun00001 }
 76:
            michal = zuuluu;
 79:
            entity = michal;
 82:
            return entity;
        }
    };
    var _closure1_slot8 = tangon;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = option.bind(entity)(report);
    var _closure1_slot2 = report;
    report = 1;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 2;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 3;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    option = report.LibraryApplicationFlags;
    var _closure1_slot5 = option;
    option = report.LocalDispatchApplicationStates;
    var _closure1_slot6 = option;
    report = report.StatusTypes;
    var _closure1_slot7 = report;
    report = 5;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'utils/LibraryApplicationUtils.tsx';
    report = oscard.bind(golfie)(report);
    report = function(argFoo, argBar) { // Original name: getComboId
        entity = global;
        entity = entity.HermesInternal;
        report = entity.concat;
        tangon = '';
        zuuluu = argFoo;
        michal = ':';
        entity = argBar;
        entity = report.bind(tangon)(zuuluu, michal, entity);
        return entity;
    };
    zuuluu['getComboId'] = report;
    report = function(argFoo) { // Original name: convertComboId
        zuuluu = argFoo;
        michal = zuuluu.split;
        entity = ':';
        tangon = michal.bind(zuuluu)(entity);
        zuuluu = _closure1_slot2;
        michal = undefined;
        entity = 2;
        zuuluu = zuuluu.bind(michal)(tangon, entity);
        entity = {};
        michal = 0;
        michal = zuuluu[michal];
        entity['applicationId'] = michal;
        michal = 1;
        michal = zuuluu[michal];
        entity['branchId'] = michal;
        return entity;
    };
    zuuluu['convertComboId'] = report;
    report = function(argFoo, argBar) { // Original name: shouldShareApplicationActivity
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = argBar;
            zuuluu = _closure1_slot0;
            entity = _closure1_slot1;
            oscard = 4;
            entity = entity[oscard];
            report = undefined;
            entity = zuuluu.bind(report)(entity);
            zuuluu = entity.ShowCurrentGame;
            entity = zuuluu.getSetting;
            entity = entity.bind(zuuluu)();
            if(!entity) { _fun00004_ip = 143; continue _fun00003 }
 47:
            zuuluu = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[oscard];
            entity = zuuluu.bind(report)(entity);
            zuuluu = entity.StatusSetting;
            entity = zuuluu.getSetting;
            zuuluu = entity.bind(zuuluu)();
            entity = _closure1_slot7;
            entity = entity.INVISIBLE;
            if(!(zuuluu !== entity)) { _fun00004_ip = 143; continue _fun00003 }
 94:
            zuuluu = tangon.getActiveLibraryApplication;
            entity = argFoo;
            tangon = zuuluu.bind(tangon)(entity);
            entity = null;
            entity = entity == tangon;
            if(entity) { _fun00004_ip = 141; continue _fun00003 }
 117:
            zuuluu = tangon.hasFlag;
            michal = _closure1_slot5;
            michal = michal.PRIVATE;
            michal = zuuluu.bind(tangon)(michal);
            entity = !michal;
 141:
            return entity;
 143:
            entity = false;
            return entity;
        }
    };
    zuuluu['shouldShareApplicationActivity'] = report;
    report = function(argFoo, argBar) { // Original name: calculateProgressPercentage
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argBar;
            zuuluu = 100;
            michal = 0;
            entity = zuuluu;
            if(!(michal !== tangon)) { _fun00006_ip = 26; continue _fun00005 }
 15:
            michal = argFoo;
            michal = michal / tangon;
            entity = michal * zuuluu;
 26:
            return entity;
        }
    };
    zuuluu['calculateProgressPercentage'] = report;
    report = function(argFoo, argBar, argBaz) { // Original name: shouldShowGameInLibrary
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tangon = argBar;
            entity = null;
            entity = entity != tangon;
            if(!entity) { _fun00008_ip = 72; continue _fun00007 }
 12:
            michal = argBaz;
            michal = michal.enabled;
            michal = !michal;
            if(michal) { _fun00008_ip = 53; continue _fun00007 }
 26:
            report = tangon.hasFlag;
            zuuluu = _closure1_slot5;
            zuuluu = zuuluu.PRIVATE;
            zuuluu = report.bind(tangon)(zuuluu);
            michal = !zuuluu;
 53:
            if(!michal) { _fun00008_ip = 69; continue _fun00007 }
 56:
            zuuluu = tangon.isHidden;
            zuuluu = zuuluu.bind(tangon)();
            michal = !zuuluu;
 69:
            entity = michal;
 72:
            return entity;
        }
    };
    zuuluu['shouldShowGameInLibrary'] = report;
    zuuluu['convertToTransitionState'] = tangon;
    tangon = function(argFoo) { // Original name: getCombinedProgress
        tangon = argFoo;
        zuuluu = tangon.reduce;
        michal = function(argFoo, argBar) {
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                tangon = argFoo;
                report = argBar;
                entity = _closure1_slot8;
                oscard = undefined;
                zuuluu = entity.bind(oscard)(report);
                golfie = null;
                entity = tangon;
                if(!(golfie != zuuluu)) { _fun00010_ip = 122; continue _fun00009 }
 29:
                report = report.type;
                michal = _closure1_slot6;
                michal = michal.UP_TO_DATE;
                entity = tangon;
                if(!(report !== michal)) { _fun00010_ip = 122; continue _fun00009 }
 51:
                michal = {};
                option = tangon.total;
                report = global;
                verify = report.Number;
                golfie = zuuluu.total;
                golfie = verify.bind(oscard)(golfie);
                golfie = option + golfie;
                michal['total'] = golfie;
                tangon = tangon.progress;
                report = report.Number;
                zuuluu = zuuluu.progress;
                zuuluu = report.bind(oscard)(zuuluu);
                zuuluu = tangon + zuuluu;
                michal['progress'] = zuuluu;
                entity = michal;
 122:
                return entity;
            }
        };
        entity = {'total': 0, 'progress': 0};
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['getCombinedProgress'] = tangon;
    michal = function(argFoo) { // Original name: isUserEntitledToLibraryApplication
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            report = argFoo;
            entity = report.isDiscordApplication;
            entity = entity.bind(report)();
            michal = !entity;
            entity = !michal;
            if(michal) { _fun00012_ip = 56; continue _fun00011 }
 22:
            tangon = report.isEntitled;
            oscard = _closure1_slot3;
            zuuluu = oscard.getCurrentUser;
            zuuluu = zuuluu.bind(oscard)();
            michal = _closure1_slot4;
            entity = tangon.bind(report)(zuuluu, michal);
 56:
            return entity;
        }
    };
    zuuluu['isUserEntitledToLibraryApplication'] = michal;
    return entity;
})();