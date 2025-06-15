// app/modules/device/useThermalState.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = golfie;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: _getThermalState
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            michal = null;
            if(!(michal != entity)) { _fun00002_ip = 255; continue _fun00001 }
 12:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            oscard = 0;
            zuuluu = zuuluu[oscard];
            report = undefined;
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = tangon.isIOS;
            zuuluu = zuuluu.bind(tangon)();
            if(zuuluu) { _fun00002_ip = 253; continue _fun00001 }
 52:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[oscard];
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = tangon.isAndroid;
            zuuluu = zuuluu.bind(tangon)();
            if(zuuluu) { _fun00002_ip = 93; continue _fun00001 }
 81:
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu.UNHANDLED;
            return zuuluu;
 93:
            zuuluu = _closure1_slot4;
            zuuluu = zuuluu.NONE;
            if(!(zuuluu !== entity)) { _fun00002_ip = 241; continue _fun00001 }
 110:
            zuuluu = _closure1_slot4;
            zuuluu = zuuluu.LIGHT;
            if(!(zuuluu !== entity)) { _fun00002_ip = 229; continue _fun00001 }
 123:
            zuuluu = _closure1_slot4;
            zuuluu = zuuluu.MODERATE;
            if(!(zuuluu !== entity)) { _fun00002_ip = 229; continue _fun00001 }
 137:
            zuuluu = _closure1_slot4;
            zuuluu = zuuluu.SEVERE;
            if(!(zuuluu !== entity)) { _fun00002_ip = 217; continue _fun00001 }
 151:
            zuuluu = _closure1_slot4;
            zuuluu = zuuluu.CRITICAL;
            if(!(zuuluu !== entity)) { _fun00002_ip = 205; continue _fun00001 }
 165:
            zuuluu = _closure1_slot4;
            zuuluu = zuuluu.EMERGENCY;
            if(!(zuuluu !== entity)) { _fun00002_ip = 205; continue _fun00001 }
 179:
            zuuluu = _closure1_slot4;
            zuuluu = zuuluu.SHUTDOWN;
            if(!(zuuluu !== entity)) { _fun00002_ip = 205; continue _fun00001 }
 193:
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu.UNHANDLED;
            return zuuluu;
 205:
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu.CRITICAL;
            return zuuluu;
 217:
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu.SERIOUS;
            return zuuluu;
 229:
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu.FAIR;
            return zuuluu;
 241:
            michal = _closure1_slot3;
            michal = michal.NOMINAL;
            return michal;
 253:
            return entity;
 255:
            entity = _closure1_slot3;
            entity = entity.UNHANDLED;
            return entity;
        }
    };
    var _closure1_slot5 = entity;
    entity = global;
    option = entity.Object;
    report = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(option)(zuuluu, entity, tangon);
    report = {};
    tangon = -1;
    report['UNHANDLED'] = tangon;
    entity = 'UNHANDLED';
    report[tangon] = entity;
    romeon = 0;
    report['NOMINAL'] = romeon;
    entity = 'NOMINAL';
    report[romeon] = entity;
    yankee = 1;
    report['FAIR'] = yankee;
    entity = 'FAIR';
    report[yankee] = entity;
    entity = 2;
    report['SERIOUS'] = entity;
    tangon = 'SERIOUS';
    report[entity] = tangon;
    offset = 3;
    report['CRITICAL'] = offset;
    verify = 'CRITICAL';
    report[offset] = verify;
    var _closure1_slot3 = report;
    tangon = {};
    tangon['NONE'] = romeon;
    option = 'NONE';
    tangon[romeon] = option;
    tangon['LIGHT'] = yankee;
    option = 'LIGHT';
    tangon[yankee] = option;
    tangon['MODERATE'] = entity;
    option = 'MODERATE';
    tangon[entity] = option;
    tangon['SEVERE'] = offset;
    option = 'SEVERE';
    tangon[offset] = option;
    option = 4;
    tangon['CRITICAL'] = option;
    tangon[option] = verify;
    verify = 5;
    tangon['EMERGENCY'] = verify;
    option = 'EMERGENCY';
    tangon[verify] = option;
    verify = 6;
    tangon['SHUTDOWN'] = verify;
    option = 'SHUTDOWN';
    tangon[verify] = option;
    var _closure1_slot4 = tangon;
    oscard = oscard[entity];
    entity = undefined;
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/device/useThermalState.tsx';
    oscard = golfie.bind(option)(oscard);
    oscard = function() { // Original name: useThermalState
        zuuluu = _closure1_slot5;
        tangon = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 1;
        entity = michal[entity];
        michal = undefined;
        tangon = tangon.bind(michal)(entity);
        entity = tangon.useRawThermalState;
        entity = entity.bind(tangon)();
        entity = zuuluu.bind(michal)(entity);
        return entity;
    };
    zuuluu['default'] = oscard;
    zuuluu['ThermalStates'] = report;
    zuuluu['AndroidThermalStates'] = tangon;
    michal = function() { // Original name: getThermalState
        zuuluu = _closure1_slot5;
        tangon = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 1;
        entity = michal[entity];
        michal = undefined;
        tangon = tangon.bind(michal)(entity);
        entity = tangon.getRawThermalState;
        entity = entity.bind(tangon)();
        entity = zuuluu.bind(michal)(entity);
        return entity;
    };
    zuuluu['getThermalState'] = michal;
    return entity;
})();