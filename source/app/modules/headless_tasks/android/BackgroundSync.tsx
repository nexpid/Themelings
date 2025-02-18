// app/modules/headless_tasks/android/BackgroundSync.tsx
export default (function(argFoo, argBar, argBaz, _, argGra, __, argPlu) {
    zuuluu = argBar;
    oscard = argBaz;
    tangon = argPlu;
    var _closure1_slot0 = zuuluu;
    var _closure1_slot1 = oscard;
    var _closure1_slot2 = tangon;
    entity = 0;
    report = tangon[entity];
    entity = undefined;
    report = oscard.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = tangon[report];
    report = oscard.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = tangon[report];
    report = oscard.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    report = tangon[report];
    golfie = oscard.bind(entity)(report);
    report = golfie.prototype;
    oscard = Object.create(report, {constructor: {value: golfie}});
    option = 'BackgroundSync';
    verify = oscard;
    report = new verify[golfie](option, golfie);
    report = report instanceof Object ? report : oscard;
    var _closure1_slot6 = report;
    report = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            var _closure2_slot0 = michal;
            tangon = _closure1_slot5;
            zuuluu = tangon.getState;
            tangon = zuuluu.bind(tangon)();
            zuuluu = 'active';
            if(!(zuuluu !== tangon)) { _fun00002_ip = 154; continue _fun00001 }
 34:
            tangon = _closure1_slot3;
            zuuluu = tangon.isConnected;
            zuuluu = zuuluu.bind(tangon)();
            if(zuuluu) { _fun00002_ip = 67; continue _fun00001 }
 51:
            report = _closure1_slot3;
            tangon = report.isTryingToConnect;
            zuuluu = tangon.bind(report)();
 67:
            if(zuuluu) { _fun00002_ip = 117; continue _fun00001 }
 70:
            report = _closure1_slot1;
            tangon = _closure1_slot2;
            zuuluu = 4;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            tangon = report.bind(zuuluu)(tangon);
            zuuluu = tangon.carefullyOpenDatabase;
            report = _closure1_slot4;
            michal = report.getId;
            michal = michal.bind(report)();
            michal = zuuluu.bind(tangon)(michal);
 117:
            michal = global;
            zuuluu = michal.Promise;
            michal = zuuluu.prototype;
            michal = Object.create(michal, {constructor: {value: zuuluu}});
            oscard = function(argFoo) {
                report = _closure1_slot6;
                tangon = report.log;
                zuuluu = _closure2_slot0;
                michal = 'Executing BackgroundSync with ';
                michal = tangon.bind(report)(michal, zuuluu);
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 5;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.backgroundSync;
                michal = {};
                tangon = zuuluu.bind(tangon)(michal);
                zuuluu = tangon.then;
                michal = argFoo;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            golfie = michal;
            entity = new golfie[zuuluu](oscard, report);
            entity = entity instanceof Object ? entity : michal;
            _fun00002_ip = 172; continue _fun00001;
 154:
            michal = global;
            zuuluu = michal.Promise;
            michal = zuuluu.resolve;
            entity = michal.bind(zuuluu)();
 172:
            return entity;
        }
    };
    michal = argGra;
    michal['exports'] = report;
    michal = 6;
    michal = tangon[michal];
    tangon = zuuluu.bind(entity)(michal);
    zuuluu = tangon.fileFinishedImporting;
    michal = 'modules/headless_tasks/android/BackgroundSync.tsx';
    michal = zuuluu.bind(tangon)(michal);
    return entity;
})();