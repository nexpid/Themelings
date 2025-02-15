// app/modules/profile_effects/utils.tsx
export default (function(argFoo, argBar, _, argCorge, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot2 = tango;
    tango = 2;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/profile_effects/utils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) {
        zulu = argFoo;
        mike = zulu.sort;
        entity = function(argFoo, argBar) {
            _fun79961: for(var _fun79961_ip = 0; ; ) switch(_fun79961_ip) {
 0:
                entity = argFoo;
                zulu = entity.zIndex;
                tango = null;
                report = tango != zulu;
                entity = 0;
                if(!report) { _fun79961_ip = 23; continue _fun79961 }
 20:
                entity = zulu;
 23:
                zulu = argBar;
                zulu = zulu.zIndex;
                tango = tango != zulu;
                mike = 0;
                if(!tango) { _fun79961_ip = 44; continue _fun79961 }
 41:
                mike = zulu;
 44:
                entity = entity - mike;
                return entity;
            }
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['sortEffectLayers'] = tango;
    mike = function(argFoo) {
        report = argFoo;
        var _closure2_slot0 = report;
        tango = _closure1_slot2;
        zulu = tango.useMemo;
        mike = new Array(1);
        mike[0] = report;
        entity = function() {
            _fun79963: for(var _fun79963_ip = 0; ; ) switch(_fun79963_ip) {
 0:
                tango = _closure2_slot0;
                mike = null;
                if(!(mike != tango)) { _fun79963_ip = 175; continue _fun79963 }
 18:
                report = _closure1_slot0;
                mike = _closure1_slot1;
                verify = 1;
                tango = mike[verify];
                mike = undefined;
                report = report.bind(mike)(tango);
                tango = report.cloneDeep;
                mike = _closure2_slot0;
                mike = tango.bind(report)(mike);
                oscar = mike.effects;
                report = oscar.reduce;
                tango = function(argFoo, argBar) {
                    _fun79964: for(var _fun79964_ip = 0; ; ) switch(_fun79964_ip) {
 0:
                        oscar = argFoo;
                        entity = argBar;
                        entity = entity.randomizedSources;
                        mike = null;
                        mike = mike == entity;
                        report = undefined;
                        if(mike) { _fun79964_ip = 28; continue _fun79964 }
 23:
                        report = entity.length;
 28:
                        zulu = 0;
                        entity = oscar;
                        if(!(report > zulu)) { _fun79964_ip = 66; continue _fun79964 }
 37:
                        mike = report;
                        if(!(zulu !== oscar)) { _fun79964_ip = 63; continue _fun79964 }
 44:
                        zulu = global;
                        tango = zulu.Math;
                        zulu = tango.min;
                        mike = zulu.bind(tango)(oscar, report);
 63:
                        entity = mike;
 66:
                        return entity;
                    }
                };
                golf = 0;
                tango = report.bind(oscar)(tango, golf);
                tango = tango - verify;
                options = global;
                oscar = options.Math;
                report = oscar.floor;
                offset = options.Math;
                options = offset.random;
                options = options.bind(offset)();
                tango = tango - golf;
                tango = tango + verify;
                tango = options * tango;
                tango = tango + golf;
                tango = report.bind(oscar)(tango);
                var _closure3_slot0 = tango;
                report = mike.effects;
                tango = report.map;
                zulu = function(argFoo) {
                    _fun79965: for(var _fun79965_ip = 0; ; ) switch(_fun79965_ip) {
 0:
                        entity = argFoo;
                        mike = entity.randomizedSources;
                        zulu = null;
                        tango = zulu == mike;
                        zulu = undefined;
                        if(tango) { _fun79965_ip = 25; continue _fun79965 }
 20:
                        zulu = mike.length;
 25:
                        mike = 0;
                        if(!(zulu > mike)) { _fun79965_ip = 60; continue _fun79965 }
 31:
                        zulu = entity.randomizedSources;
                        mike = _closure3_slot0;
                        mike = zulu[mike];
                        mike = mike.src;
                        entity['src'] = mike;
 60:
                        return entity;
                    }
                };
                zulu = tango.bind(report)(zulu);
                mike['effects'] = zulu;
                return mike;
 175:
                entity = _closure2_slot0;
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['usePotentiallyRandomizedConfig'] = mike;
    return entity;
})();