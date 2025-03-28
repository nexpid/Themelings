// app/modules/main_tabs_v2/native/shared_components/guild_channels/layouts/utils/deepmerge.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    zuuluu = argFre;
    michal = global;
    golfie = michal.Object;
    oscard = golfie.defineProperty;
    tangon = {};
    report = true;
    tangon['value'] = report;
    michal = '__esModule';
    michal = oscard.bind(golfie)(zuuluu, michal, tangon);
    michal = function(argFoo) { // Original name: isObject
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            michal = 'object';
            entity = typeof report;
            if(!(michal === entity)) { _fun00002_ip = 20; continue _fun00001 }
 14:
            zuuluu = null;
            if(!(zuuluu === report)) { _fun00002_ip = 24; continue _fun00001 }
 20:
            entity = false;
            return entity;
 24:
            entity = global;
            michal = entity.Object;
            michal = michal.getPrototypeOf;
            tangon = 'function';
            michal = typeof michal;
            if(!(tangon !== michal)) { _fun00002_ip = 85; continue _fun00001 }
 49:
            michal = entity.Object;
            michal = michal.prototype;
            tangon = michal.toString;
            michal = tangon.call;
            tangon = michal.bind(tangon)(report);
            michal = '[object Object]';
            michal = michal === tangon;
            return michal;
 85:
            tangon = entity.Object;
            michal = tangon.getPrototypeOf;
            michal = michal.bind(tangon)(report);
            entity = entity.Object;
            entity = entity.prototype;
            entity = michal === entity;
            if(entity) { _fun00002_ip = 124; continue _fun00001 }
 120:
            entity = zuuluu === michal;
 124:
            return entity;
        }
    };
    var _closure1_slot0 = michal;
    michal = function(argFoo) { // Original name: merge
        oscard = 0;
        tangon = copyRestArgs(oscard);
        zuuluu = tangon.reduce;
        michal = function(argFoo, argBar) {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                michal = argFoo;
                oscard = argBar;
                var _closure3_slot0 = michal;
                var _closure3_slot1 = oscard;
                entity = global;
                report = entity.Array;
                tangon = report.isArray;
                tangon = tangon.bind(report)(oscard);
                if(tangon) { _fun00004_ip = 70; continue _fun00003 }
 37:
                report = entity.Object;
                tangon = report.keys;
                report = tangon.bind(report)(oscard);
                tangon = report.forEach;
                zuuluu = function(argFoo) {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        zuuluu = argFoo;
                        michal = ['__proto__', 'constructor', 'prototype'];
                        entity = michal.includes;
                        entity = entity.bind(michal)(zuuluu);
                        if(entity) { _fun00006_ip = 293; continue _fun00005 }
 29:
                        golfie = global;
                        report = golfie.Array;
                        michal = report.isArray;
                        entity = _closure3_slot0;
                        entity = entity[zuuluu];
                        entity = michal.bind(report)(entity);
                        if(!entity) { _fun00006_ip = 88; continue _fun00005 }
 61:
                        report = golfie.Array;
                        michal = report.isArray;
                        entity = _closure3_slot1;
                        entity = entity[zuuluu];
                        entity = michal.bind(report)(entity);
                        if(entity) { _fun00006_ip = 186; continue _fun00005 }
 88:
                        report = _closure1_slot0;
                        michal = _closure3_slot0;
                        michal = michal[zuuluu];
                        option = undefined;
                        michal = report.bind(option)(michal);
                        if(!michal) { _fun00006_ip = 133; continue _fun00005 }
 113:
                        report = _closure1_slot0;
                        michal = _closure3_slot1;
                        michal = michal[zuuluu];
                        michal = report.bind(option)(michal);
                        if(michal) { _fun00006_ip = 154; continue _fun00005 }
 133:
                        report = _closure3_slot0;
                        michal = _closure3_slot1;
                        michal = michal[zuuluu];
                        report[zuuluu] = michal;
                        _fun00006_ip = 293; continue _fun00005;
 154:
                        michal = _closure3_slot0;
                        oscard = _closure1_slot1;
                        report = michal[zuuluu];
                        entity = _closure3_slot1;
                        entity = entity[zuuluu];
                        entity = oscard.bind(option)(report, entity);
                        michal[zuuluu] = entity;
                        _fun00006_ip = 293; continue _fun00005;
 186:
                        michal = _closure3_slot0;
                        entity = _closure1_slot1;
                        entity = entity.options;
                        entity = entity.mergeArrays;
                        if(entity) { _fun00006_ip = 221; continue _fun00005 }
 211:
                        entity = _closure3_slot1;
                        entity = entity[zuuluu];
                        _fun00006_ip = 289; continue _fun00005;
 221:
                        oscard = golfie.Array;
                        report = oscard.from;
                        option = golfie.Set;
                        golfie = _closure3_slot0;
                        verify = golfie[zuuluu];
                        golfie = verify.concat;
                        tangon = _closure3_slot1;
                        tangon = tangon[zuuluu];
                        yankee = golfie.bind(verify)(tangon);
                        golfie = option.prototype;
                        golfie = Object.create(golfie, {constructor: {value: option}});
                        romeon = golfie;
                        tangon = new romeon[option](yankee, offset);
                        tangon = tangon instanceof Object ? tangon : golfie;
                        entity = report.bind(oscard)(tangon);
 289:
                        michal[zuuluu] = entity;
 293:
                        entity = undefined;
                        return entity;
                    }
                };
                zuuluu = tangon.bind(report)(zuuluu);
                return michal;
 70:
                zuuluu = entity.TypeError;
                entity = zuuluu.prototype;
                michal = Object.create(entity, {constructor: {value: zuuluu}});
                golfie = 'Arguments provided to ts-deepmerge must be objects, not arrays.';
                option = michal;
                entity = new option[zuuluu](golfie, oscard);
                entity = entity instanceof Object ? entity : michal;
                throw entity;
            }
        };
        entity = {};
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot1 = michal;
    tangon = {};
    tangon['mergeArrays'] = report;
    var _closure1_slot2 = tangon;
    michal['options'] = tangon;
    entity = function(argFoo, argBar) {
        option = 1;
        report = copyRestArgs(option);
        zuuluu = _closure1_slot1;
        entity = {};
        tangon = true;
        entity['mergeArrays'] = tangon;
        golfie = argFoo;
        option = entity;
        tangon = copyDataProperties(option, golfie);
        zuuluu['options'] = entity;
        tangon = new Array(0);
        oscard = 0;
        option = tangon;
        golfie = report;
        entity = arraySpread(option, golfie, oscard);
        oscard = undefined;
        option = zuuluu;
        golfie = tangon;
        entity = apply(option, golfie, oscard);
        michal = _closure1_slot2;
        zuuluu['options'] = michal;
        return entity;
    };
    michal['withOptions'] = entity;
    tangon = argPlu;
    entity = 0;
    report = tangon[entity];
    tangon = argBar;
    entity = undefined;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/shared_components/guild_channels/layouts/utils/deepmerge.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();