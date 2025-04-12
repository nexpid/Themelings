// app/modules/user_profile/native/showUserProfileActionSheet.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    verify = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = option;
    report = function(argFoo) { // Original name: getUserProfileActionSheetKey
        entity = global;
        entity = entity.HermesInternal;
        zuuluu = entity.concat;
        michal = 'UserProfile';
        entity = argFoo;
        entity = zuuluu.bind(michal)(entity);
        return entity;
    };
    var _closure1_slot4 = report;
    michal = function(argFoo) { // Original name: getUserProfileIgnoredSpeedBumpActionSheetKey
        entity = global;
        entity = entity.HermesInternal;
        zuuluu = entity.concat;
        michal = 'UserProfileIgnoredSpeedBump';
        entity = argFoo;
        entity = zuuluu.bind(michal)(entity);
        return entity;
    };
    var _closure1_slot5 = michal;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zuuluu, entity, oscard);
    entity = 0;
    oscard = option[entity];
    entity = undefined;
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot3 = oscard;
    oscard = 6;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/user_profile/native/showUserProfileActionSheet.tsx';
    oscard = golfie.bind(option)(oscard);
    oscard = function(argFoo) { // Original name: showUserProfileActionSheet
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            entity = global;
            zuuluu = entity.Date;
            entity = zuuluu.now;
            option = entity.bind(zuuluu)();
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 1;
            tangon = tangon[entity];
            entity = undefined;
            tangon = report.bind(entity)(tangon);
            report = tangon.IgnoreProfileSpeedbumpDisabled;
            tangon = report.getSetting;
            tangon = tangon.bind(report)();
            report = michal.ignoreBlockedSpeedBump;
            if(report) { _fun00002_ip = 253; continue _fun00001 }
 73:
            golfie = _closure1_slot3;
            oscard = golfie.isBlocked;
            report = michal.userId;
            offset = oscard.bind(golfie)(report);
            oscard = golfie.isIgnored;
            report = michal.userId;
            report = oscard.bind(golfie)(report);
            if(report) { _fun00002_ip = 118; continue _fun00001 }
 112:
            if(!offset) { _fun00002_ip = 253; continue _fun00001 }
 118:
            if(!report) { _fun00002_ip = 127; continue _fun00001 }
 121:
            if(tangon) { _fun00002_ip = 253; continue _fun00001 }
 127:
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            tangon = 3;
            tangon = oscard[tangon];
            golfie = report.bind(entity)(tangon);
            tangon = 2;
            report = oscard[tangon];
            tangon = oscard.paths;
            verify = golfie.bind(entity)(report, tangon);
            report = _closure1_slot1;
            tangon = 4;
            tangon = oscard[tangon];
            golfie = report.bind(entity)(tangon);
            oscard = golfie.openLazy;
            report = _closure1_slot5;
            tangon = michal.userId;
            report = report.bind(entity)(tangon);
            tangon = {};
            kiloes = tangon;
            backup = michal;
            yankee = copyDataProperties(kiloes, backup);
            yankee = 'ignore';
            if(!offset) { _fun00002_ip = 224; continue _fun00001 }
 220:
            yankee = 'block';
 224:
            offset = 'speedBumpType';
            tangon[offset] = yankee;
            offset = 'openedAt';
            tangon[offset] = option;
            tangon = oscard.bind(golfie)(verify, report, tangon);
            tangon = undefined;
            return tangon;
 253:
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            tangon = 3;
            tangon = oscard[tangon];
            golfie = report.bind(entity)(tangon);
            tangon = 5;
            report = oscard[tangon];
            tangon = oscard.paths;
            golfie = golfie.bind(entity)(report, tangon);
            report = _closure1_slot1;
            tangon = 4;
            tangon = oscard[tangon];
            oscard = report.bind(entity)(tangon);
            report = oscard.openLazy;
            tangon = _closure1_slot4;
            zuuluu = michal.userId;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = {};
            kiloes = zuuluu;
            backup = michal;
            michal = copyDataProperties(kiloes, backup);
            michal = 'openedAt';
            zuuluu[michal] = option;
            romeon = 'replaceAll';
            sizing = oscard;
            kiloes = golfie;
            backup = tangon;
            foxtra = zuuluu;
            michal = sizing[report](kiloes, backup, foxtra, romeon, yankee);
            return entity;
        }
    };
    zuuluu['default'] = oscard;
    zuuluu['getUserProfileActionSheetKey'] = report;
    tangon = function(argFoo) { // Original name: getUserProfileBlockedSpeedBumpActionSheetKey
        entity = global;
        entity = entity.HermesInternal;
        zuuluu = entity.concat;
        michal = 'UserProfileBlockedSpeedBump';
        entity = argFoo;
        entity = zuuluu.bind(michal)(entity);
        return entity;
    };
    zuuluu['getUserProfileBlockedSpeedBumpActionSheetKey'] = tangon;
    zuuluu['getUserProfileIgnoredSpeedBumpActionSheetKey'] = michal;
    return entity;
})();