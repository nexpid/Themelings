// app/modules/device/native/WakeLock.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = golf;
    mike = function(argFoo) { // Original name: useWakeLock
        report = argFoo;
        var _closure2_slot0 = report;
        tango = _closure1_slot3;
        zulu = tango.useEffect;
        mike = new Array(1);
        mike[0] = report;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                mike = 2;
                mike = zulu[mike];
                zulu = undefined;
                tango = tango.bind(zulu)(mike);
                mike = tango.isAndroid;
                mike = mike.bind(tango)();
                if(mike) { _fun00002_ip = 67; continue _fun00001 }
 37:
                mike = _closure1_slot4;
                report = mike.ScreenWakeLockManager;
                tango = report.requestLock;
                mike = _closure2_slot0;
                mike = tango.bind(report)(mike);
                _fun00002_ip = 105; continue _fun00001;
 67:
                mike = _closure1_slot1;
                tango = _closure1_slot2;
                entity = 3;
                entity = tango[entity];
                zulu = mike.bind(zulu)(entity);
                mike = zulu.requestLock;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
 105:
                entity = function() {
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        tango = _closure1_slot0;
                        zulu = _closure1_slot2;
                        entity = 2;
                        zulu = zulu[entity];
                        entity = undefined;
                        tango = tango.bind(entity)(zulu);
                        zulu = tango.isAndroid;
                        zulu = zulu.bind(tango)();
                        if(zulu) { _fun00004_ip = 67; continue _fun00003 }
 37:
                        zulu = _closure1_slot4;
                        report = zulu.ScreenWakeLockManager;
                        tango = report.releaseLock;
                        zulu = _closure2_slot0;
                        zulu = tango.bind(report)(zulu);
                        _fun00004_ip = 105; continue _fun00003;
 67:
                        zulu = _closure1_slot1;
                        tango = _closure1_slot2;
                        mike = 3;
                        mike = tango[mike];
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.releaseLock;
                        mike = _closure2_slot0;
                        mike = zulu.bind(tango)(mike);
 105:
                        return entity;
                    }
                };
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity, mike);
        entity = undefined;
        return entity;
    };
    var _closure1_slot5 = mike;
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
    report = argCorge;
    entity = undefined;
    report = report.bind(entity)(options);
    var _closure1_slot3 = report;
    report = 1;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.NativeModules;
    var _closure1_slot4 = report;
    report = 4;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/device/native/WakeLock.tsx';
    report = oscar.bind(golf)(report);
    tango = function(argFoo) { // Original name: WakeLock
        entity = argFoo;
        zulu = entity.wakeLockKey;
        mike = _closure1_slot5;
        entity = undefined;
        entity = mike.bind(entity)(zulu);
        entity = null;
        return entity;
    };
    zulu['default'] = tango;
    zulu['useWakeLock'] = mike;
    return entity;
})();