// app/modules/app_database/system/StartupData.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    tango = tango.NativeModules;
    var _closure1_slot3 = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/app_database/system/StartupData.native.tsx';
    tango = report.bind(oscar)(tango);
    tango = function() { // Original name: getUserId
        _fun38133: for(var _fun38133_ip = 0; ; ) switch(_fun38133_ip) {
 0:
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            mike = 1;
            mike = zulu[mike];
            zulu = undefined;
            tango = tango.bind(zulu)(mike);
            mike = tango.isAndroid;
            mike = mike.bind(tango)();
            if(mike) { _fun38133_ip = 66; continue _fun38133 }
 37:
            mike = _closure1_slot3;
            mike = mike.AppDatabase;
            tango = mike.userId;
            mike = null;
            report = mike != tango;
            if(!report) { _fun38133_ip = 64; continue _fun38133 }
 61:
            mike = tango;
 64:
            return mike;
 66:
            mike = _closure1_slot1;
            tango = _closure1_slot2;
            entity = 2;
            entity = tango[entity];
            mike = mike.bind(zulu)(entity);
            entity = mike.getConstants;
            entity = entity.bind(mike)();
            mike = entity.userId;
            entity = null;
            zulu = entity != mike;
            if(!zulu) { _fun38133_ip = 113; continue _fun38133 }
 110:
            entity = mike;
 113:
            return entity;
        }
    };
    zulu['getUserId'] = tango;
    mike = function(argFoo) { // Original name: setUserId
        _fun38134: for(var _fun38134_ip = 0; ; ) switch(_fun38134_ip) {
 0:
            tango = argFoo;
            report = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 1;
            zulu = zulu[entity];
            entity = undefined;
            report = report.bind(entity)(zulu);
            zulu = report.isAndroid;
            zulu = zulu.bind(report)();
            if(zulu) { _fun38134_ip = 63; continue _fun38134 }
 40:
            zulu = _closure1_slot3;
            report = zulu.AppDatabase;
            zulu = report.setUserId;
            zulu = zulu.bind(report)(tango);
            _fun38134_ip = 94; continue _fun38134;
 63:
            zulu = _closure1_slot1;
            report = _closure1_slot2;
            mike = 2;
            mike = report[mike];
            zulu = zulu.bind(entity)(mike);
            mike = zulu.setUserId;
            mike = mike.bind(zulu)(tango);
 94:
            return entity;
        }
    };
    zulu['setUserId'] = mike;
    return entity;
})();