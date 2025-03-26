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
            golfie = argFoo;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 1;
            zuuluu = zuuluu[entity];
            entity = undefined;
            zuuluu = tangon.bind(entity)(zuuluu);
            tangon = zuuluu.IgnoreProfileSpeedbumpDisabled;
            zuuluu = tangon.getSetting;
            zuuluu = zuuluu.bind(tangon)();
            tangon = golfie.ignoreBlockedSpeedBump;
            if(tangon) { _fun00002_ip = 224; continue _fun00001 }
 56:
            oscard = _closure1_slot3;
            report = oscard.isBlocked;
            tangon = golfie.userId;
            verify = report.bind(oscard)(tangon);
            report = oscard.isIgnored;
            tangon = golfie.userId;
            tangon = report.bind(oscard)(tangon);
            if(tangon) { _fun00002_ip = 101; continue _fun00001 }
 95:
            if(!verify) { _fun00002_ip = 224; continue _fun00001 }
 101:
            if(!tangon) { _fun00002_ip = 107; continue _fun00001 }
 104:
            if(zuuluu) { _fun00002_ip = 224; continue _fun00001 }
 107:
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            zuuluu = 3;
            zuuluu = report[zuuluu];
            oscard = tangon.bind(entity)(zuuluu);
            zuuluu = 2;
            tangon = report[zuuluu];
            zuuluu = report.paths;
            option = oscard.bind(entity)(tangon, zuuluu);
            tangon = _closure1_slot1;
            zuuluu = 4;
            zuuluu = report[zuuluu];
            oscard = tangon.bind(entity)(zuuluu);
            report = oscard.openLazy;
            tangon = _closure1_slot5;
            zuuluu = golfie.userId;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = {};
            backup = zuuluu;
            foxtra = golfie;
            offset = copyDataProperties(backup, foxtra);
            offset = 'ignore';
            if(!verify) { _fun00002_ip = 204; continue _fun00001 }
 200:
            offset = 'block';
 204:
            verify = 'speedBumpType';
            zuuluu[verify] = offset;
            zuuluu = report.bind(oscard)(option, tangon, zuuluu);
            zuuluu = undefined;
            return zuuluu;
 224:
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            zuuluu = 3;
            zuuluu = report[zuuluu];
            oscard = tangon.bind(entity)(zuuluu);
            zuuluu = 5;
            tangon = report[zuuluu];
            zuuluu = report.paths;
            oscard = oscard.bind(entity)(tangon, zuuluu);
            tangon = _closure1_slot1;
            zuuluu = 4;
            zuuluu = report[zuuluu];
            report = tangon.bind(entity)(zuuluu);
            tangon = report.openLazy;
            zuuluu = _closure1_slot4;
            michal = golfie.userId;
            foxtra = zuuluu.bind(entity)(michal);
            yankee = 'replaceAll';
            kiloes = report;
            backup = oscard;
            romeon = golfie;
            michal = kiloes[tangon](backup, foxtra, romeon, yankee, offset);
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