// app/utils/BraintreeUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    tango = function() { // Original name: getBraintreeSDK
        tango = _closure1_slot0;
        oscar = _closure1_slot1;
        mike = 2;
        zulu = oscar[mike];
        mike = undefined;
        tango = tango.bind(mike)(zulu);
        zulu = tango.importWithRetry;
        mike = {};
        report = function() { // Original name: createPromise
            zulu = _closure1_slot0;
            entity = _closure1_slot1;
            mike = 4;
            mike = entity[mike];
            tango = undefined;
            zulu = zulu.bind(tango)(mike);
            mike = 3;
            mike = entity[mike];
            entity = entity.paths;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        mike['createPromise'] = report;
        report = 5;
        report = oscar[report];
        mike['webpackId'] = report;
        zulu = zulu.bind(tango)(mike);
        mike = zulu.then;
        entity = function(argFoo) {
            entity = argFoo;
            entity = entity.default;
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    var _closure1_slot4 = tango;
    entity = function(argFoo) { // Original name: getDeviceData
        mike = argFoo;
        var _closure2_slot0 = mike;
        zulu = _closure1_slot4;
        mike = undefined;
        zulu = zulu.bind(mike)();
        mike = zulu.then;
        entity = function(argFoo) {
            mike = argFoo;
            tango = mike.dataCollector;
            zulu = tango.create;
            mike = {};
            report = _closure2_slot0;
            mike['client'] = report;
            tango = zulu.bind(tango)(mike);
            zulu = tango.then;
            mike = function(argFoo) {
                entity = argFoo;
                entity = entity.deviceData;
                return entity;
            };
            zulu = zulu.bind(tango)(mike);
            mike = zulu.catch;
            entity = function() {
                entity = null;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    var _closure1_slot5 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, report);
    entity = 0;
    options = golf[entity];
    report = argBaz;
    entity = undefined;
    report = report.bind(entity)(options);
    var _closure1_slot2 = report;
    report = 1;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.PaymentSettings;
    var _closure1_slot3 = report;
    report = 6;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'utils/BraintreeUtils.tsx';
    report = oscar.bind(golf)(report);
    zulu['getBraintreeSDK'] = tango;
    mike = function() { // Original name: collectDeviceData
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = _closure1_slot2;
            entity = zulu.getClient;
            tango = entity.bind(zulu)();
            entity = null;
            if(!(entity != tango)) { _fun00002_ip = 36; continue _fun00001 }
 23:
            zulu = _closure1_slot5;
            entity = undefined;
            entity = zulu.bind(entity)(tango);
            _fun00002_ip = 63; continue _fun00001;
 36:
            zulu = _closure1_slot4;
            mike = undefined;
            tango = zulu.bind(mike)();
            zulu = tango.then;
            mike = function(argFoo) {
                mike = argFoo;
                tango = mike.client;
                zulu = tango.create;
                mike = {};
                report = _closure1_slot3;
                report = report.BRAINTREE;
                report = report.KEY;
                mike['authorization'] = report;
                tango = zulu.bind(tango)(mike);
                zulu = tango.then;
                mike = function(argFoo) {
                    zulu = _closure1_slot5;
                    mike = undefined;
                    entity = argFoo;
                    entity = zulu.bind(mike)(entity);
                    return entity;
                };
                zulu = zulu.bind(tango)(mike);
                mike = zulu.catch;
                entity = function() {
                    entity = null;
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity = zulu.bind(tango)(mike);
 63:
            return entity;
        }
    };
    zulu['collectDeviceData'] = mike;
    return entity;
})();