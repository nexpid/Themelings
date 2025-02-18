// app/utils/BraintreeUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    tangon = function() { // Original name: getBraintreeSDK
        tangon = _closure1_slot0;
        oscard = _closure1_slot1;
        michal = 2;
        zuuluu = oscard[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.importWithRetry;
        michal = {};
        report = function() { // Original name: createPromise
            zuuluu = _closure1_slot0;
            entity = _closure1_slot1;
            michal = 4;
            michal = entity[michal];
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = 3;
            michal = entity[michal];
            entity = entity.paths;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        michal['createPromise'] = report;
        report = 5;
        report = oscard[report];
        michal['webpackId'] = report;
        zuuluu = zuuluu.bind(tangon)(michal);
        michal = zuuluu.then;
        entity = function(argFoo) {
            entity = argFoo;
            entity = entity.default;
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    var _closure1_slot4 = tangon;
    entity = function(argFoo) { // Original name: getDeviceData
        michal = argFoo;
        var _closure2_slot0 = michal;
        zuuluu = _closure1_slot4;
        michal = undefined;
        zuuluu = zuuluu.bind(michal)();
        michal = zuuluu.then;
        entity = function(argFoo) {
            michal = argFoo;
            tangon = michal.dataCollector;
            zuuluu = tangon.create;
            michal = {};
            report = _closure2_slot0;
            michal['client'] = report;
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.then;
            michal = function(argFoo) {
                entity = argFoo;
                entity = entity.deviceData;
                return entity;
            };
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.catch;
            entity = function() {
                entity = null;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    var _closure1_slot5 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, report);
    entity = 0;
    option = golfie[entity];
    report = argBaz;
    entity = undefined;
    report = report.bind(entity)(option);
    var _closure1_slot2 = report;
    report = 1;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.PaymentSettings;
    var _closure1_slot3 = report;
    report = 6;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'utils/BraintreeUtils.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['getBraintreeSDK'] = tangon;
    michal = function() { // Original name: collectDeviceData
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = _closure1_slot2;
            entity = zuuluu.getClient;
            tangon = entity.bind(zuuluu)();
            entity = null;
            if(!(entity != tangon)) { _fun00002_ip = 36; continue _fun00001 }
 23:
            zuuluu = _closure1_slot5;
            entity = undefined;
            entity = zuuluu.bind(entity)(tangon);
            _fun00002_ip = 63; continue _fun00001;
 36:
            zuuluu = _closure1_slot4;
            michal = undefined;
            tangon = zuuluu.bind(michal)();
            zuuluu = tangon.then;
            michal = function(argFoo) {
                michal = argFoo;
                tangon = michal.client;
                zuuluu = tangon.create;
                michal = {};
                report = _closure1_slot3;
                report = report.BRAINTREE;
                report = report.KEY;
                michal['authorization'] = report;
                tangon = zuuluu.bind(tangon)(michal);
                zuuluu = tangon.then;
                michal = function(argFoo) {
                    zuuluu = _closure1_slot5;
                    michal = undefined;
                    entity = argFoo;
                    entity = zuuluu.bind(michal)(entity);
                    return entity;
                };
                zuuluu = zuuluu.bind(tangon)(michal);
                michal = zuuluu.catch;
                entity = function() {
                    entity = null;
                    return entity;
                };
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            entity = zuuluu.bind(tangon)(michal);
 63:
            return entity;
        }
    };
    zuuluu['collectDeviceData'] = michal;
    return entity;
})();