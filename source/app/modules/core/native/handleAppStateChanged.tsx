// app/modules/core/native/handleAppStateChanged.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.AnalyticEvents;
    var _closure1_slot5 = options;
    tango = tango.AppStates;
    var _closure1_slot6 = tango;
    tango = 3;
    tango = oscar[tango];
    options = golf.bind(entity)(tango);
    tango = options.prototype;
    golf = Object.create(tango, {constructor: {value: options}});
    romeo = 'index.native.tsx';
    foxtrot = golf;
    tango = new foxtrot[options](romeo, yankee);
    tango = tango instanceof Object ? tango : golf;
    var _closure1_slot7 = tango;
    tango = 12;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/core/native/handleAppStateChanged.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: handleAppStateChanged
        _fun127832: for(var _fun127832_ip = 0; ; ) switch(_fun127832_ip) {
 0:
            oscar = argFoo;
            zulu = _closure1_slot4;
            entity = zulu.getState;
            report = entity.bind(zulu)();
            tango = _closure1_slot1;
            golf = _closure1_slot2;
            entity = 4;
            zulu = golf[entity];
            entity = undefined;
            yankee = tango.bind(entity)(zulu);
            offset = yankee.markAndLog;
            verify = _closure1_slot7;
            zulu = global;
            zulu = zulu.HermesInternal;
            romeo = zulu.concat;
            options = 'AppState changing from ';
            zulu = ' to ';
            options = romeo.bind(options)(report, zulu, oscar);
            zulu = '🏃';
            zulu = offset.bind(yankee)(verify, zulu, options);
            zulu = 5;
            zulu = golf[zulu];
            golf = tango.bind(entity)(zulu);
            tango = golf.dispatch;
            zulu = {};
            options = 'APP_STATE_UPDATE';
            zulu['type'] = options;
            zulu['state'] = oscar;
            zulu = tango.bind(golf)(zulu);
            zulu = _closure1_slot6;
            zulu = zulu.BACKGROUND;
            tango = report === zulu;
            if(!tango) { _fun127832_ip = 164; continue _fun127832 }
 150:
            zulu = _closure1_slot6;
            zulu = zulu.ACTIVE;
            tango = oscar === zulu;
 164:
            zulu = _closure1_slot6;
            zulu = zulu.ACTIVE;
            zulu = report === zulu;
            if(!zulu) { _fun127832_ip = 195; continue _fun127832 }
 181:
            report = _closure1_slot6;
            report = report.ACTIVE;
            zulu = oscar !== report;
 195:
            if(!tango) { _fun127832_ip = 212; continue _fun127832 }
 198:
            golf = _closure1_slot3;
            report = golf.isAuthenticated;
            tango = report.bind(golf)();
 212:
            if(!tango) { _fun127832_ip = 252; continue _fun127832 }
 215:
            golf = _closure1_slot0;
            options = _closure1_slot2;
            report = 6;
            report = options[report];
            report = golf.bind(entity)(report);
            golf = report.default;
            report = golf.isDisconnected;
            tango = report.bind(golf)();
 252:
            if(!tango) { _fun127832_ip = 285; continue _fun127832 }
 255:
            report = _closure1_slot1;
            golf = _closure1_slot2;
            tango = 7;
            tango = golf[tango];
            report = report.bind(entity)(tango);
            tango = report.deferUpdate;
            tango = tango.bind(report)();
 285:
            tango = _closure1_slot6;
            tango = tango.ACTIVE;
            if(!(oscar === tango)) { _fun127832_ip = 358; continue _fun127832 }
 299:
            report = _closure1_slot0;
            golf = _closure1_slot2;
            tango = 8;
            tango = golf[tango];
            verify = report.bind(entity)(tango);
            options = verify.trackAppOpened;
            tango = 'launcher';
            tango = options.bind(verify)(tango);
            tango = 9;
            tango = golf[tango];
            report = report.bind(entity)(tango);
            tango = report.setSystemThemeIfNeeded;
            tango = tango.bind(report)();
 358:
            report = _closure1_slot1;
            golf = _closure1_slot2;
            tango = 10;
            tango = golf[tango];
            report = report.bind(entity)(tango);
            tango = report.appStateChanged;
            tango = tango.bind(report)(oscar);
            if(!zulu) { _fun127832_ip = 435; continue _fun127832 }
 392:
            tango = _closure1_slot1;
            report = _closure1_slot2;
            zulu = 11;
            zulu = report[zulu];
            report = tango.bind(entity)(zulu);
            tango = report.track;
            mike = _closure1_slot5;
            zulu = mike.APP_BACKGROUND;
            mike = {};
            mike = tango.bind(report)(zulu, mike);
 435:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();