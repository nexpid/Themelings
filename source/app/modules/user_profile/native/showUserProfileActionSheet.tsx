// app/modules/user_profile/native/showUserProfileActionSheet.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    option = argBar;
    offset = argBaz;
    zuuluu = argFre;
    verify = argPlu;
    var _closure1_slot0 = option;
    var _closure1_slot1 = offset;
    var _closure1_slot2 = verify;
    report = function(argFoo) { // Original name: getUserProfileActionSheetKey
        entity = global;
        entity = entity.HermesInternal;
        zuuluu = entity.concat;
        michal = 'UserProfile';
        entity = argFoo;
        entity = zuuluu.bind(michal)(entity);
        return entity;
    };
    var _closure1_slot6 = report;
    tangon = function(argFoo) { // Original name: getUserProfileIgnoredSpeedBumpActionSheetKey
        entity = global;
        entity = entity.HermesInternal;
        zuuluu = entity.concat;
        michal = 'UserProfileIgnoredSpeedBump';
        entity = argFoo;
        entity = zuuluu.bind(michal)(entity);
        return entity;
    };
    var _closure1_slot7 = tangon;
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
            entity = 5;
            tangon = tangon[entity];
            entity = undefined;
            tangon = report.bind(entity)(tangon);
            report = tangon.IgnoreProfileSpeedbumpDisabled;
            tangon = report.getSetting;
            tangon = tangon.bind(report)();
            report = michal.ignoreBlockedSpeedBump;
            if(report) { _fun00002_ip = 257; continue _fun00001 }
 73:
            golfie = _closure1_slot5;
            oscard = golfie.isBlocked;
            report = michal.userId;
            offset = oscard.bind(golfie)(report);
            golfie = _closure1_slot5;
            oscard = golfie.isIgnored;
            report = michal.userId;
            report = oscard.bind(golfie)(report);
            if(report) { _fun00002_ip = 122; continue _fun00001 }
 116:
            if(!offset) { _fun00002_ip = 257; continue _fun00001 }
 122:
            if(!report) { _fun00002_ip = 131; continue _fun00001 }
 125:
            if(tangon) { _fun00002_ip = 257; continue _fun00001 }
 131:
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            tangon = 4;
            tangon = oscard[tangon];
            golfie = report.bind(entity)(tangon);
            tangon = 6;
            report = oscard[tangon];
            tangon = oscard.paths;
            verify = golfie.bind(entity)(report, tangon);
            report = _closure1_slot1;
            tangon = 7;
            tangon = oscard[tangon];
            golfie = report.bind(entity)(tangon);
            oscard = golfie.openLazy;
            report = _closure1_slot7;
            tangon = michal.userId;
            report = report.bind(entity)(tangon);
            tangon = {};
            kiloes = tangon;
            backup = michal;
            yankee = copyDataProperties(kiloes, backup);
            yankee = 'ignore';
            if(!offset) { _fun00002_ip = 228; continue _fun00001 }
 224:
            yankee = 'block';
 228:
            offset = 'speedBumpType';
            tangon[offset] = yankee;
            offset = 'openedAt';
            tangon[offset] = option;
            tangon = oscard.bind(golfie)(verify, report, tangon);
            tangon = undefined;
            return tangon;
 257:
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            tangon = 4;
            tangon = oscard[tangon];
            golfie = report.bind(entity)(tangon);
            tangon = 8;
            report = oscard[tangon];
            tangon = oscard.paths;
            golfie = golfie.bind(entity)(report, tangon);
            report = _closure1_slot1;
            tangon = 7;
            tangon = oscard[tangon];
            oscard = report.bind(entity)(tangon);
            report = oscard.openLazy;
            tangon = _closure1_slot6;
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
    var _closure1_slot8 = oscard;
    entity = global;
    romeon = entity.Object;
    yankee = romeon.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = yankee.bind(romeon)(zuuluu, entity, golfie);
    entity = 0;
    golfie = verify[entity];
    entity = undefined;
    golfie = offset.bind(entity)(golfie);
    var _closure1_slot3 = golfie;
    golfie = 1;
    golfie = verify[golfie];
    golfie = option.bind(entity)(golfie);
    golfie = golfie.addPostConnectionCallback;
    var _closure1_slot4 = golfie;
    golfie = 2;
    golfie = verify[golfie];
    golfie = offset.bind(entity)(golfie);
    var _closure1_slot5 = golfie;
    golfie = 9;
    golfie = verify[golfie];
    verify = option.bind(entity)(golfie);
    option = verify.fileFinishedImporting;
    golfie = 'modules/user_profile/native/showUserProfileActionSheet.tsx';
    golfie = option.bind(verify)(golfie);
    zuuluu['default'] = oscard;
    zuuluu['getUserProfileActionSheetKey'] = report;
    report = function(argFoo) { // Original name: getUserProfileBlockedSpeedBumpActionSheetKey
        entity = global;
        entity = entity.HermesInternal;
        zuuluu = entity.concat;
        michal = 'UserProfileBlockedSpeedBump';
        entity = argFoo;
        entity = zuuluu.bind(michal)(entity);
        return entity;
    };
    zuuluu['getUserProfileBlockedSpeedBumpActionSheetKey'] = report;
    zuuluu['getUserProfileIgnoredSpeedBumpActionSheetKey'] = tangon;
    michal = function(argFoo) { // Original name: showUserProfileActionSheetPostConnection
        entity = argFoo;
        var _closure2_slot0 = entity;
        zuuluu = _closure1_slot4;
        tangon = _closure1_slot3;
        entity = undefined;
        michal = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00004_ip = 113; continue _fun00003 }
 7:
                    oscard = _closure1_slot0;
                    michal = _closure1_slot2;
                    zuuluu = 4;
                    tangon = michal[zuuluu];
                    zuuluu = undefined;
                    oscard = oscard.bind(zuuluu)(tangon);
                    tangon = 3;
                    tangon = michal[tangon];
                    michal = michal.paths;
                    michal = oscard.bind(zuuluu)(tangon, michal);
                    SaveGenerator(address=54);
 52:
                    return michal;
 54:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00004_ip = 110; continue _fun00003 }
 60:
                    option = michal.default;
                    golfie = option.getUser;
                    oscard = _closure2_slot0;
                    oscard = oscard.userId;
                    golfie = golfie.bind(option)(oscard);
                    oscard = null;
                    if(!(oscard != golfie)) { _fun00004_ip = 107; continue _fun00003 }
 94:
                    report = _closure1_slot8;
                    tangon = _closure2_slot0;
                    tangon = report.bind(zuuluu)(tangon);
 107:
                    return zuuluu;
 110:
                    return michal;
 113:
                    return entity;
                }
            };
            return entity;
        };
        michal = tangon.bind(entity)(michal);
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    zuuluu['showUserProfileActionSheetPostConnection'] = michal;
    return entity;
})();