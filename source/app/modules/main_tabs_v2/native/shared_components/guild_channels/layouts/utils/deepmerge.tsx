// app/modules/main_tabs_v2/native/shared_components/guild_channels/layouts/utils/deepmerge.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    zulu = argFred;
    mike = global;
    golf = mike.Object;
    oscar = golf.defineProperty;
    tango = {};
    report = true;
    tango['value'] = report;
    mike = '__esModule';
    mike = oscar.bind(golf)(zulu, mike, tango);
    mike = function(argFoo) { // Original name: isObject
        _fun86967: for(var _fun86967_ip = 0; ; ) switch(_fun86967_ip) {
 0:
            report = argFoo;
            mike = 'object';
            entity = typeof report;
            if(!(mike === entity)) { _fun86967_ip = 20; continue _fun86967 }
 14:
            zulu = null;
            if(!(zulu === report)) { _fun86967_ip = 24; continue _fun86967 }
 20:
            entity = false;
            return entity;
 24:
            entity = global;
            mike = entity.Object;
            mike = mike.getPrototypeOf;
            tango = 'function';
            mike = typeof mike;
            if(!(tango !== mike)) { _fun86967_ip = 85; continue _fun86967 }
 49:
            mike = entity.Object;
            mike = mike.prototype;
            tango = mike.toString;
            mike = tango.call;
            tango = mike.bind(tango)(report);
            mike = '[object Object]';
            mike = mike === tango;
            return mike;
 85:
            tango = entity.Object;
            mike = tango.getPrototypeOf;
            mike = mike.bind(tango)(report);
            entity = entity.Object;
            entity = entity.prototype;
            entity = mike === entity;
            if(entity) { _fun86967_ip = 124; continue _fun86967 }
 120:
            entity = zulu === mike;
 124:
            return entity;
        }
    };
    var _closure1_slot0 = mike;
    mike = function(argFoo) { // Original name: merge
        oscar = 0;
        tango = copyRestArgs(oscar);
        zulu = tango.reduce;
        mike = function(argFoo, argBar) {
            _fun86969: for(var _fun86969_ip = 0; ; ) switch(_fun86969_ip) {
 0:
                mike = argFoo;
                oscar = argBar;
                var _closure3_slot0 = mike;
                var _closure3_slot1 = oscar;
                entity = global;
                report = entity.Array;
                tango = report.isArray;
                tango = tango.bind(report)(oscar);
                if(tango) { _fun86969_ip = 72; continue _fun86969 }
 37:
                report = entity.Object;
                tango = report.keys;
                report = tango.bind(report)(oscar);
                tango = report.forEach;
                zulu = function(argFoo) {
                    _fun86970: for(var _fun86970_ip = 0; ; ) switch(_fun86970_ip) {
 0:
                        zulu = argFoo;
                        mike = ['__proto__', 'constructor', 'prototype'];
                        entity = mike.includes;
                        entity = entity.bind(mike)(zulu);
                        if(entity) { _fun86970_ip = 293; continue _fun86970 }
 29:
                        golf = global;
                        report = golf.Array;
                        mike = report.isArray;
                        entity = _closure3_slot0;
                        entity = entity[zulu];
                        entity = mike.bind(report)(entity);
                        if(!entity) { _fun86970_ip = 88; continue _fun86970 }
 61:
                        report = golf.Array;
                        mike = report.isArray;
                        entity = _closure3_slot1;
                        entity = entity[zulu];
                        entity = mike.bind(report)(entity);
                        if(entity) { _fun86970_ip = 186; continue _fun86970 }
 88:
                        report = _closure1_slot0;
                        mike = _closure3_slot0;
                        mike = mike[zulu];
                        options = undefined;
                        mike = report.bind(options)(mike);
                        if(!mike) { _fun86970_ip = 133; continue _fun86970 }
 113:
                        report = _closure1_slot0;
                        mike = _closure3_slot1;
                        mike = mike[zulu];
                        mike = report.bind(options)(mike);
                        if(mike) { _fun86970_ip = 154; continue _fun86970 }
 133:
                        report = _closure3_slot0;
                        mike = _closure3_slot1;
                        mike = mike[zulu];
                        report[zulu] = mike;
                        _fun86970_ip = 293; continue _fun86970;
 154:
                        mike = _closure3_slot0;
                        oscar = _closure1_slot1;
                        report = mike[zulu];
                        entity = _closure3_slot1;
                        entity = entity[zulu];
                        entity = oscar.bind(options)(report, entity);
                        mike[zulu] = entity;
                        _fun86970_ip = 293; continue _fun86970;
 186:
                        mike = _closure3_slot0;
                        entity = _closure1_slot1;
                        entity = entity.options;
                        entity = entity.mergeArrays;
                        if(entity) { _fun86970_ip = 221; continue _fun86970 }
 211:
                        entity = _closure3_slot1;
                        entity = entity[zulu];
                        _fun86970_ip = 289; continue _fun86970;
 221:
                        oscar = golf.Array;
                        report = oscar.from;
                        options = golf.Set;
                        golf = _closure3_slot0;
                        verify = golf[zulu];
                        golf = verify.concat;
                        tango = _closure3_slot1;
                        tango = tango[zulu];
                        yankee = golf.bind(verify)(tango);
                        golf = options.prototype;
                        golf = Object.create(golf, {constructor: {value: options}});
                        romeo = golf;
                        tango = new romeo[options](yankee, offset);
                        tango = tango instanceof Object ? tango : golf;
                        entity = report.bind(oscar)(tango);
 289:
                        mike[zulu] = entity;
 293:
                        entity = undefined;
                        return entity;
                    }
                };
                zulu = tango.bind(report)(zulu);
                return mike;
 72:
                zulu = entity.TypeError;
                entity = zulu.prototype;
                mike = Object.create(entity, {constructor: {value: zulu}});
                golf = 'Arguments provided to ts-deepmerge must be objects, not arrays.';
                options = mike;
                entity = new options[zulu](golf, oscar);
                entity = entity instanceof Object ? entity : mike;
                throw entity;
            }
        };
        entity = {};
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot1 = mike;
    tango = {};
    tango['mergeArrays'] = report;
    var _closure1_slot2 = tango;
    mike['options'] = tango;
    entity = function(argFoo, argBar) {
        options = 1;
        report = copyRestArgs(options);
        zulu = _closure1_slot1;
        entity = {};
        tango = true;
        entity['mergeArrays'] = tango;
        golf = argFoo;
        options = entity;
        tango = copyDataProperties(options, golf);
        zulu['options'] = entity;
        tango = new Array(0);
        oscar = 0;
        options = tango;
        golf = report;
        entity = arraySpread(options, golf, oscar);
        oscar = undefined;
        options = zulu;
        golf = tango;
        entity = apply(options, golf, oscar);
        mike = _closure1_slot2;
        zulu['options'] = mike;
        return entity;
    };
    mike['withOptions'] = entity;
    tango = argPlugh;
    entity = 0;
    report = tango[entity];
    tango = argBar;
    entity = undefined;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/shared_components/guild_channels/layouts/utils/deepmerge.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();