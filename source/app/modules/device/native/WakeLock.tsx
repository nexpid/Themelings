// app/modules/device/native/WakeLock.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = golfie;
    michal = function(argFoo) { // Original name: useWakeLock
        report = argFoo;
        var _closure2_slot0 = report;
        tangon = _closure1_slot3;
        zuuluu = tangon.useEffect;
        michal = new Array(1);
        michal[0] = report;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                michal = 2;
                michal = zuuluu[michal];
                zuuluu = undefined;
                tangon = tangon.bind(zuuluu)(michal);
                michal = tangon.isAndroid;
                michal = michal.bind(tangon)();
                if(michal) { _fun00002_ip = 67; continue _fun00001 }
 37:
                michal = _closure1_slot4;
                report = michal.ScreenWakeLockManager;
                tangon = report.requestLock;
                michal = _closure2_slot0;
                michal = tangon.bind(report)(michal);
                _fun00002_ip = 105; continue _fun00001;
 67:
                michal = _closure1_slot1;
                tangon = _closure1_slot2;
                entity = 3;
                entity = tangon[entity];
                zuuluu = michal.bind(zuuluu)(entity);
                michal = zuuluu.requestLock;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
 105:
                entity = function() {
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        tangon = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        entity = 2;
                        zuuluu = zuuluu[entity];
                        entity = undefined;
                        tangon = tangon.bind(entity)(zuuluu);
                        zuuluu = tangon.isAndroid;
                        zuuluu = zuuluu.bind(tangon)();
                        if(zuuluu) { _fun00004_ip = 67; continue _fun00003 }
 37:
                        zuuluu = _closure1_slot4;
                        report = zuuluu.ScreenWakeLockManager;
                        tangon = report.releaseLock;
                        zuuluu = _closure2_slot0;
                        zuuluu = tangon.bind(report)(zuuluu);
                        _fun00004_ip = 105; continue _fun00003;
 67:
                        zuuluu = _closure1_slot1;
                        tangon = _closure1_slot2;
                        michal = 3;
                        michal = tangon[michal];
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.releaseLock;
                        michal = _closure2_slot0;
                        michal = zuuluu.bind(tangon)(michal);
 105:
                        return entity;
                    }
                };
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        entity = undefined;
        return entity;
    };
    var _closure1_slot5 = michal;
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
    report = argCor;
    entity = undefined;
    report = report.bind(entity)(option);
    var _closure1_slot3 = report;
    report = 1;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.NativeModules;
    var _closure1_slot4 = report;
    report = 4;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/device/native/WakeLock.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function(argFoo) { // Original name: WakeLock
        entity = argFoo;
        zuuluu = entity.wakeLockKey;
        michal = _closure1_slot5;
        entity = undefined;
        entity = michal.bind(entity)(zuuluu);
        entity = null;
        return entity;
    };
    zuuluu['default'] = tangon;
    zuuluu['useWakeLock'] = michal;
    return entity;
})();