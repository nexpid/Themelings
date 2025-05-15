// app/utils/native/ClientInfoUtils.tsx
export default (function(_, argBar, argBaz, __, ___, argFre, argPlu) {
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
    tangon = 'utils/native/ClientInfoUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: getConstants
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
            if(michal) { _fun00002_ip = 59; continue _fun00001 }
 37:
            michal = _closure1_slot3;
            tangon = michal.InfoDictionaryManager;
            michal = tangon.getConstants;
            michal = michal.bind(tangon)();
            return michal;
 59:
            report = _closure1_slot1;
            michal = _closure1_slot2;
            tangon = 2;
            michal = michal[tangon];
            report = report.bind(zuuluu)(michal);
            michal = null;
            if(!(michal !== report)) { _fun00002_ip = 114; continue _fun00001 }
 85:
            michal = _closure1_slot1;
            entity = _closure1_slot2;
            entity = entity[tangon];
            michal = michal.bind(zuuluu)(entity);
            entity = michal.getConstants;
            entity = entity.bind(michal)();
            return entity;
 114:
            entity = global;
            zuuluu = entity.Error;
            entity = zuuluu.prototype;
            michal = Object.create(entity, {constructor: {value: zuuluu}});
            oscard = 'Turbo module RTNClientInfoManager is undefined for Android';
            golfie = michal;
            entity = new golfie[zuuluu](oscard, report);
            entity = entity instanceof Object ? entity : michal;
            throw entity;
        }
    };
    zuuluu['getConstants'] = tangon;
    michal = function() { // Original name: getBuildNumberLabel
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = ['0', '123456', '1234567890'];
            entity = michal.includes;
            report = '4062';
            michal = entity.bind(michal)(report);
            entity = report;
            if(!michal) { _fun00004_ip = 61; continue _fun00003 }
 32:
            michal = global;
            michal = michal.HermesInternal;
            tangon = michal.concat;
            zuuluu = 'dev (';
            michal = ')';
            entity = tangon.bind(zuuluu)(report, michal);
 61:
            return entity;
        }
    };
    zuuluu['getBuildNumberLabel'] = michal;
    return entity;
})();