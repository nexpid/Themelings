// app/modules/headless_tasks/android/BackgroundSync.tsx
export default (function(argFoo, argBar, argBaz, _, argGrault, __, argPlugh) {
    zulu = argBar;
    oscar = argBaz;
    tango = argPlugh;
    var _closure1_slot0 = zulu;
    var _closure1_slot1 = oscar;
    var _closure1_slot2 = tango;
    entity = 0;
    report = tango[entity];
    entity = undefined;
    report = oscar.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = tango[report];
    report = oscar.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = tango[report];
    report = oscar.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    report = tango[report];
    golf = oscar.bind(entity)(report);
    report = golf.prototype;
    oscar = Object.create(report, {constructor: {value: golf}});
    options = 'BackgroundSync';
    verify = oscar;
    report = new verify[golf](options, golf);
    report = report instanceof Object ? report : oscar;
    var _closure1_slot6 = report;
    report = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            var _closure2_slot0 = mike;
            tango = _closure1_slot5;
            zulu = tango.getState;
            tango = zulu.bind(tango)();
            zulu = 'active';
            if(!(zulu !== tango)) { _fun00002_ip = 154; continue _fun00001 }
 34:
            tango = _closure1_slot3;
            zulu = tango.isConnected;
            zulu = zulu.bind(tango)();
            if(zulu) { _fun00002_ip = 67; continue _fun00001 }
 51:
            report = _closure1_slot3;
            tango = report.isTryingToConnect;
            zulu = tango.bind(report)();
 67:
            if(zulu) { _fun00002_ip = 117; continue _fun00001 }
 70:
            report = _closure1_slot1;
            tango = _closure1_slot2;
            zulu = 4;
            tango = tango[zulu];
            zulu = undefined;
            tango = report.bind(zulu)(tango);
            zulu = tango.carefullyOpenDatabase;
            report = _closure1_slot4;
            mike = report.getId;
            mike = mike.bind(report)();
            mike = zulu.bind(tango)(mike);
 117:
            mike = global;
            zulu = mike.Promise;
            mike = zulu.prototype;
            mike = Object.create(mike, {constructor: {value: zulu}});
            oscar = function(argFoo) {
                report = _closure1_slot6;
                tango = report.log;
                zulu = _closure2_slot0;
                mike = 'Executing BackgroundSync with ';
                mike = tango.bind(report)(mike, zulu);
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 5;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.backgroundSync;
                mike = {};
                tango = zulu.bind(tango)(mike);
                zulu = tango.then;
                mike = argFoo;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            golf = mike;
            entity = new golf[zulu](oscar, report);
            entity = entity instanceof Object ? entity : mike;
            _fun00002_ip = 172; continue _fun00001;
 154:
            mike = global;
            zulu = mike.Promise;
            mike = zulu.resolve;
            entity = mike.bind(zulu)();
 172:
            return entity;
        }
    };
    mike = argGrault;
    mike['exports'] = report;
    mike = 6;
    mike = tango[mike];
    tango = zulu.bind(entity)(mike);
    zulu = tango.fileFinishedImporting;
    mike = 'modules/headless_tasks/android/BackgroundSync.tsx';
    mike = zulu.bind(tango)(mike);
    return entity;
})();