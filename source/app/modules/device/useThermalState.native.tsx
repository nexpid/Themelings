// app/modules/device/useThermalState.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = golf;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: _getThermalState
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            mike = null;
            if(!(mike != entity)) { _fun00002_ip = 256; continue _fun00001 }
 12:
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            oscar = 0;
            zulu = zulu[oscar];
            report = undefined;
            tango = tango.bind(report)(zulu);
            zulu = tango.isIOS;
            zulu = zulu.bind(tango)();
            if(zulu) { _fun00002_ip = 254; continue _fun00001 }
 52:
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[oscar];
            tango = tango.bind(report)(zulu);
            zulu = tango.isAndroid;
            zulu = zulu.bind(tango)();
            if(zulu) { _fun00002_ip = 93; continue _fun00001 }
 81:
            zulu = _closure1_slot3;
            zulu = zulu.UNHANDLED;
            return zulu;
 93:
            zulu = _closure1_slot4;
            zulu = zulu.NONE;
            if(!(zulu !== entity)) { _fun00002_ip = 242; continue _fun00001 }
 110:
            zulu = _closure1_slot4;
            zulu = zulu.LIGHT;
            if(!(zulu !== entity)) { _fun00002_ip = 230; continue _fun00001 }
 124:
            zulu = _closure1_slot4;
            zulu = zulu.MODERATE;
            if(!(zulu !== entity)) { _fun00002_ip = 230; continue _fun00001 }
 138:
            zulu = _closure1_slot4;
            zulu = zulu.SEVERE;
            if(!(zulu !== entity)) { _fun00002_ip = 218; continue _fun00001 }
 152:
            zulu = _closure1_slot4;
            zulu = zulu.CRITICAL;
            if(!(zulu !== entity)) { _fun00002_ip = 206; continue _fun00001 }
 166:
            zulu = _closure1_slot4;
            zulu = zulu.EMERGENCY;
            if(!(zulu !== entity)) { _fun00002_ip = 206; continue _fun00001 }
 180:
            zulu = _closure1_slot4;
            zulu = zulu.SHUTDOWN;
            if(!(zulu !== entity)) { _fun00002_ip = 206; continue _fun00001 }
 194:
            zulu = _closure1_slot3;
            zulu = zulu.UNHANDLED;
            return zulu;
 206:
            zulu = _closure1_slot3;
            zulu = zulu.CRITICAL;
            return zulu;
 218:
            zulu = _closure1_slot3;
            zulu = zulu.SERIOUS;
            return zulu;
 230:
            zulu = _closure1_slot3;
            zulu = zulu.FAIR;
            return zulu;
 242:
            mike = _closure1_slot3;
            mike = mike.NOMINAL;
            return mike;
 254:
            return entity;
 256:
            entity = _closure1_slot3;
            entity = entity.UNHANDLED;
            return entity;
        }
    };
    var _closure1_slot5 = entity;
    entity = global;
    options = entity.Object;
    report = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(options)(zulu, entity, tango);
    report = {};
    tango = -1;
    report['UNHANDLED'] = tango;
    entity = 'UNHANDLED';
    report[tango] = entity;
    romeo = 0;
    report['NOMINAL'] = romeo;
    entity = 'NOMINAL';
    report[romeo] = entity;
    yankee = 1;
    report['FAIR'] = yankee;
    entity = 'FAIR';
    report[yankee] = entity;
    entity = 2;
    report['SERIOUS'] = entity;
    tango = 'SERIOUS';
    report[entity] = tango;
    offset = 3;
    report['CRITICAL'] = offset;
    verify = 'CRITICAL';
    report[offset] = verify;
    var _closure1_slot3 = report;
    tango = {};
    tango['NONE'] = romeo;
    options = 'NONE';
    tango[romeo] = options;
    tango['LIGHT'] = yankee;
    options = 'LIGHT';
    tango[yankee] = options;
    tango['MODERATE'] = entity;
    options = 'MODERATE';
    tango[entity] = options;
    tango['SEVERE'] = offset;
    options = 'SEVERE';
    tango[offset] = options;
    options = 4;
    tango['CRITICAL'] = options;
    tango[options] = verify;
    verify = 5;
    tango['EMERGENCY'] = verify;
    options = 'EMERGENCY';
    tango[verify] = options;
    verify = 6;
    tango['SHUTDOWN'] = verify;
    options = 'SHUTDOWN';
    tango[verify] = options;
    var _closure1_slot4 = tango;
    oscar = oscar[entity];
    entity = undefined;
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/device/useThermalState.native.tsx';
    oscar = golf.bind(options)(oscar);
    oscar = function() { // Original name: useThermalState
        zulu = _closure1_slot5;
        tango = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 1;
        entity = mike[entity];
        mike = undefined;
        tango = tango.bind(mike)(entity);
        entity = tango.useRawThermalState;
        entity = entity.bind(tango)();
        entity = zulu.bind(mike)(entity);
        return entity;
    };
    zulu['default'] = oscar;
    zulu['ThermalStates'] = report;
    zulu['AndroidThermalStates'] = tango;
    mike = function() { // Original name: getThermalState
        zulu = _closure1_slot5;
        tango = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 1;
        entity = mike[entity];
        mike = undefined;
        tango = tango.bind(mike)(entity);
        entity = tango.getRawThermalState;
        entity = entity.bind(tango)();
        entity = zulu.bind(mike)(entity);
        return entity;
    };
    zulu['getThermalState'] = mike;
    return entity;
})();