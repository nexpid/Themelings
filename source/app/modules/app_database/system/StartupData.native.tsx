// app/modules/app_database/system/StartupData.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    tangon = tangon.NativeModules;
    var _closure1_slot3 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/app_database/system/StartupData.native.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: getUserId
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            michal = 1;
            michal = zuuluu[michal];
            zuuluu = undefined;
            tangon = tangon.bind(zuuluu)(michal);
            michal = tangon.isAndroid;
            michal = michal.bind(tangon)();
            if(michal) { _fun00002_ip = 66; continue _fun00001 }
 37:
            michal = _closure1_slot3;
            michal = michal.DCDAppDatabase;
            tangon = michal.userId;
            michal = null;
            report = michal != tangon;
            if(!report) { _fun00002_ip = 64; continue _fun00001 }
 61:
            michal = tangon;
 64:
            return michal;
 66:
            michal = _closure1_slot1;
            tangon = _closure1_slot2;
            entity = 2;
            entity = tangon[entity];
            michal = michal.bind(zuuluu)(entity);
            entity = michal.getConstants;
            entity = entity.bind(michal)();
            michal = entity.userId;
            entity = null;
            zuuluu = entity != michal;
            if(!zuuluu) { _fun00002_ip = 113; continue _fun00001 }
 110:
            entity = michal;
 113:
            return entity;
        }
    };
    zuuluu['getUserId'] = tangon;
    michal = function(argFoo) { // Original name: setUserId
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = argFoo;
            report = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 1;
            zuuluu = zuuluu[entity];
            entity = undefined;
            report = report.bind(entity)(zuuluu);
            zuuluu = report.isAndroid;
            zuuluu = zuuluu.bind(report)();
            if(zuuluu) { _fun00004_ip = 63; continue _fun00003 }
 40:
            zuuluu = _closure1_slot3;
            report = zuuluu.DCDAppDatabase;
            zuuluu = report.setUserId;
            zuuluu = zuuluu.bind(report)(tangon);
            _fun00004_ip = 94; continue _fun00003;
 63:
            zuuluu = _closure1_slot1;
            report = _closure1_slot2;
            michal = 2;
            michal = report[michal];
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.setUserId;
            michal = michal.bind(zuuluu)(tangon);
 94:
            return entity;
        }
    };
    zuuluu['setUserId'] = michal;
    return entity;
})();