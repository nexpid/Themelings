// app/modules/core/native/handleAppStateChanged.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.AnalyticEvents;
    var _closure1_slot5 = option;
    tangon = tangon.AppStates;
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    option = golfie.bind(entity)(tangon);
    tangon = option.prototype;
    golfie = Object.create(tangon, {constructor: {value: option}});
    romeon = 'index.native.tsx';
    foxtra = golfie;
    tangon = new foxtra[option](romeon, yankee);
    tangon = tangon instanceof Object ? tangon : golfie;
    var _closure1_slot7 = tangon;
    tangon = 12;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/core/native/handleAppStateChanged.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: handleAppStateChanged
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argFoo;
            zuuluu = _closure1_slot4;
            entity = zuuluu.getState;
            report = entity.bind(zuuluu)();
            tangon = _closure1_slot1;
            golfie = _closure1_slot2;
            entity = 4;
            zuuluu = golfie[entity];
            entity = undefined;
            yankee = tangon.bind(entity)(zuuluu);
            offset = yankee.markAndLog;
            verify = _closure1_slot7;
            zuuluu = global;
            zuuluu = zuuluu.HermesInternal;
            romeon = zuuluu.concat;
            option = 'AppState changing from ';
            zuuluu = ' to ';
            option = romeon.bind(option)(report, zuuluu, oscard);
            zuuluu = '🏃';
            zuuluu = offset.bind(yankee)(verify, zuuluu, option);
            zuuluu = 5;
            zuuluu = golfie[zuuluu];
            golfie = tangon.bind(entity)(zuuluu);
            tangon = golfie.dispatch;
            zuuluu = {};
            option = 'APP_STATE_UPDATE';
            zuuluu['type'] = option;
            zuuluu['state'] = oscard;
            zuuluu = tangon.bind(golfie)(zuuluu);
            zuuluu = _closure1_slot6;
            zuuluu = zuuluu.BACKGROUND;
            tangon = report === zuuluu;
            if(!tangon) { _fun00002_ip = 164; continue _fun00001 }
 150:
            zuuluu = _closure1_slot6;
            zuuluu = zuuluu.ACTIVE;
            tangon = oscard === zuuluu;
 164:
            zuuluu = _closure1_slot6;
            zuuluu = zuuluu.ACTIVE;
            zuuluu = report === zuuluu;
            if(!zuuluu) { _fun00002_ip = 195; continue _fun00001 }
 181:
            report = _closure1_slot6;
            report = report.ACTIVE;
            zuuluu = oscard !== report;
 195:
            if(!tangon) { _fun00002_ip = 212; continue _fun00001 }
 198:
            golfie = _closure1_slot3;
            report = golfie.isAuthenticated;
            tangon = report.bind(golfie)();
 212:
            if(!tangon) { _fun00002_ip = 252; continue _fun00001 }
 215:
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            report = 6;
            report = option[report];
            report = golfie.bind(entity)(report);
            golfie = report.default;
            report = golfie.isDisconnected;
            tangon = report.bind(golfie)();
 252:
            if(!tangon) { _fun00002_ip = 285; continue _fun00001 }
 255:
            report = _closure1_slot1;
            golfie = _closure1_slot2;
            tangon = 7;
            tangon = golfie[tangon];
            report = report.bind(entity)(tangon);
            tangon = report.deferUpdate;
            tangon = tangon.bind(report)();
 285:
            tangon = _closure1_slot6;
            tangon = tangon.ACTIVE;
            if(!(oscard === tangon)) { _fun00002_ip = 358; continue _fun00001 }
 299:
            report = _closure1_slot0;
            golfie = _closure1_slot2;
            tangon = 8;
            tangon = golfie[tangon];
            verify = report.bind(entity)(tangon);
            option = verify.trackAppOpened;
            tangon = 'launcher';
            tangon = option.bind(verify)(tangon);
            tangon = 9;
            tangon = golfie[tangon];
            report = report.bind(entity)(tangon);
            tangon = report.setSystemThemeIfNeeded;
            tangon = tangon.bind(report)();
 358:
            report = _closure1_slot1;
            golfie = _closure1_slot2;
            tangon = 10;
            tangon = golfie[tangon];
            report = report.bind(entity)(tangon);
            tangon = report.appStateChanged;
            tangon = tangon.bind(report)(oscard);
            if(!zuuluu) { _fun00002_ip = 435; continue _fun00001 }
 392:
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            zuuluu = 11;
            zuuluu = report[zuuluu];
            report = tangon.bind(entity)(zuuluu);
            tangon = report.track;
            michal = _closure1_slot5;
            zuuluu = michal.APP_BACKGROUND;
            michal = {};
            michal = tangon.bind(report)(zuuluu, michal);
 435:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();