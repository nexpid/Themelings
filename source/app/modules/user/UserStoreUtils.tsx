// app/modules/user/UserStoreUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = golfie;
    tangon = function(argFoo) { // Original name: getEnv
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            entity = _closure1_slot3;
            zuuluu = entity.TEST;
            tangon = 'production';
            entity = tangon;
            if(!(tangon === zuuluu)) { _fun00002_ip = 42; continue _fun00001 }
 27:
            zuuluu = null;
            zuuluu = zuuluu != michal;
            entity = tangon;
            if(!zuuluu) { _fun00002_ip = 42; continue _fun00001 }
 39:
            entity = michal;
 42:
            return entity;
        }
    };
    var _closure1_slot6 = tangon;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = oscard.bind(entity)(report);
    report = report.Environments;
    var _closure1_slot3 = report;
    report = 1;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    option = report.PREMIUM_TYPE_NONE;
    var _closure1_slot4 = option;
    report = report.UserFlags;
    var _closure1_slot5 = report;
    report = 4;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/user/UserStoreUtils.tsx';
    report = oscard.bind(golfie)(report);
    report = function(argFoo, argBar, argBaz) { // Original name: validatePremiumType
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            michal = argBar;
            if(entity) { _fun00004_ip = 15; continue _fun00003 }
 9:
            zuuluu = undefined;
            entity = zuuluu === michal;
 15:
            if(entity) { _fun00004_ip = 62; continue _fun00003 }
 18:
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            entity = 2;
            entity = tangon[entity];
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(entity);
            entity = argBaz;
            michal = entity === michal;
            entity = 'Premium type should not change for non-staff users';
            entity = zuuluu.bind(tangon)(michal, entity);
 62:
            entity = undefined;
            return entity;
        }
    };
    zuuluu['validatePremiumType'] = report;
    zuuluu['getEnv'] = tangon;
    tangon = function(argFoo) { // Original name: isStaffEnv
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            report = argFoo;
            tangon = arguments[1];
            zuuluu = undefined;
            if(!(tangon === zuuluu)) { _fun00006_ip = 14; continue _fun00005 }
 12:
            tangon = undefined;
 14:
            entity = _closure1_slot6;
            zuuluu = entity.bind(zuuluu)(tangon);
            entity = _closure1_slot3;
            entity = entity.DEVELOPMENT;
            entity = zuuluu === entity;
            if(entity) { _fun00006_ip = 77; continue _fun00005 }
 43:
            zuuluu = global;
            zuuluu = zuuluu.window;
            zuuluu = zuuluu.GLOBAL_ENV;
            zuuluu = zuuluu.RELEASE_CHANNEL;
            michal = _closure1_slot3;
            michal = michal.STAGING;
            entity = zuuluu === michal;
 77:
            if(entity) { _fun00006_ip = 118; continue _fun00005 }
 80:
            michal = null;
            michal = michal != report;
            if(!michal) { _fun00006_ip = 115; continue _fun00005 }
 89:
            zuuluu = report.isStaff;
            zuuluu = zuuluu.bind(report)();
            if(zuuluu) { _fun00006_ip = 112; continue _fun00005 }
 102:
            tangon = report.isStaffPersonal;
            zuuluu = tangon.bind(report)();
 112:
            michal = zuuluu;
 115:
            entity = michal;
 118:
            return entity;
        }
    };
    zuuluu['isStaffEnv'] = tangon;
    tangon = function(argFoo) { // Original name: isStaffEnvRawData
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tangon = argFoo;
            michal = arguments[1];
            verify = undefined;
            if(!(michal === verify)) { _fun00008_ip = 14; continue _fun00007 }
 12:
            michal = undefined;
 14:
            entity = _closure1_slot6;
            michal = entity.bind(verify)(michal);
            entity = _closure1_slot3;
            entity = entity.DEVELOPMENT;
            michal = michal !== entity;
            if(!michal) { _fun00008_ip = 77; continue _fun00007 }
 43:
            entity = global;
            entity = entity.window;
            entity = entity.GLOBAL_ENV;
            report = entity.RELEASE_CHANNEL;
            entity = _closure1_slot3;
            entity = entity.STAGING;
            michal = report !== entity;
 77:
            entity = !michal;
            if(!michal) { _fun00008_ip = 176; continue _fun00007 }
 83:
            report = null;
            michal = report != tangon;
            if(!michal) { _fun00008_ip = 173; continue _fun00007 }
 92:
            oscard = tangon.flags;
            oscard = report == oscard;
            if(oscard) { _fun00008_ip = 154; continue _fun00007 }
 104:
            option = _closure1_slot0;
            offset = _closure1_slot2;
            golfie = 3;
            golfie = offset[golfie];
            verify = option.bind(verify)(golfie);
            option = verify.hasFlag;
            golfie = tangon.flags;
            zuuluu = _closure1_slot5;
            zuuluu = zuuluu.STAFF;
            zuuluu = option.bind(verify)(golfie, zuuluu);
            oscard = !zuuluu;
 154:
            zuuluu = !oscard;
            if(!oscard) { _fun00008_ip = 170; continue _fun00007 }
 160:
            tangon = tangon.personal_connection_id;
            zuuluu = report != tangon;
 170:
            michal = zuuluu;
 173:
            entity = michal;
 176:
            return entity;
        }
    };
    zuuluu['isStaffEnvRawData'] = tangon;
    michal = function(argFoo) { // Original name: getPremiumTypeFromRawValue
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            michal = argFoo;
            entity = undefined;
            if(!(entity !== michal)) { _fun00010_ip = 22; continue _fun00009 }
 9:
            zuuluu = _closure1_slot4;
            entity = null;
            if(!(michal !== zuuluu)) { _fun00010_ip = 25; continue _fun00009 }
 22:
            entity = michal;
 25:
            return entity;
        }
    };
    zuuluu['getPremiumTypeFromRawValue'] = michal;
    return entity;
})();