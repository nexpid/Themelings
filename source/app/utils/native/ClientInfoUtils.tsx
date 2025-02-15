// app/utils/native/ClientInfoUtils.tsx
export default (function(_, argBar, argBaz, __, ___, argFred, argPlugh) {
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
    tango = 'utils/native/ClientInfoUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function() { // Original name: getConstants
        _fun36011: for(var _fun36011_ip = 0; ; ) switch(_fun36011_ip) {
 0:
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            mike = 1;
            mike = zulu[mike];
            zulu = undefined;
            tango = tango.bind(zulu)(mike);
            mike = tango.isAndroid;
            mike = mike.bind(tango)();
            if(mike) { _fun36011_ip = 59; continue _fun36011 }
 37:
            mike = _closure1_slot3;
            tango = mike.InfoDictionaryManager;
            mike = tango.getConstants;
            mike = mike.bind(tango)();
            return mike;
 59:
            report = _closure1_slot1;
            mike = _closure1_slot2;
            tango = 2;
            mike = mike[tango];
            report = report.bind(zulu)(mike);
            mike = null;
            if(!(mike !== report)) { _fun36011_ip = 114; continue _fun36011 }
 85:
            mike = _closure1_slot1;
            entity = _closure1_slot2;
            entity = entity[tango];
            mike = mike.bind(zulu)(entity);
            entity = mike.getConstants;
            entity = entity.bind(mike)();
            return entity;
 114:
            entity = global;
            zulu = entity.Error;
            entity = zulu.prototype;
            mike = Object.create(entity, {constructor: {value: zulu}});
            oscar = 'Turbo module RTNClientInfoManager is undefined for Android';
            golf = mike;
            entity = new golf[zulu](oscar, report);
            entity = entity instanceof Object ? entity : mike;
            throw entity;
        }
    };
    zulu['getConstants'] = tango;
    mike = function() { // Original name: getBuildNumberLabel
        _fun36012: for(var _fun36012_ip = 0; ; ) switch(_fun36012_ip) {
 0:
            mike = ['0', '123456', '1234567890'];
            entity = mike.includes;
            report = '3673';
            mike = entity.bind(mike)(report);
            entity = report;
            if(!mike) { _fun36012_ip = 61; continue _fun36012 }
 32:
            mike = global;
            mike = mike.HermesInternal;
            tango = mike.concat;
            zulu = 'dev (';
            mike = ')';
            entity = tango.bind(zulu)(report, mike);
 61:
            return entity;
        }
    };
    zulu['getBuildNumberLabel'] = mike;
    return entity;
})();