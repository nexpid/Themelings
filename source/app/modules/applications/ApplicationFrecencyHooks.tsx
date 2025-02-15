// app/modules/applications/ApplicationFrecencyHooks.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
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
    options = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(options);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.UserSettingsTypes;
    var _closure1_slot5 = tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/applications/ApplicationFrecencyHooks.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar) { // Original name: useSortApplicationsViaFrecency
        mike = argFoo;
        report = argBar;
        var _closure2_slot0 = mike;
        var _closure2_slot1 = report;
        tango = _closure1_slot3;
        options = tango.useEffect;
        golf = function() {
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 3;
            zulu = zulu[entity];
            entity = undefined;
            zulu = tango.bind(entity)(zulu);
            tango = zulu.FrecencyUserSettingsActionCreators;
            zulu = tango.loadIfUncached;
            mike = _closure1_slot5;
            mike = mike.FRECENCY_AND_FAVORITES_SETTINGS;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        oscar = new Array(0);
        oscar = options.bind(tango)(golf, oscar);
        options = _closure1_slot0;
        golf = _closure1_slot2;
        oscar = 4;
        golf = golf[oscar];
        oscar = undefined;
        options = options.bind(oscar)(golf);
        golf = options.useStateFromStores;
        zulu = _closure1_slot4;
        oscar = new Array(1);
        oscar[0] = zulu;
        zulu = function() {
            mike = _closure1_slot4;
            entity = mike.getApplicationFrecencyWithoutLoadingLatest;
            entity = entity.bind(mike)();
            return entity;
        };
        oscar = golf.bind(options)(oscar, zulu);
        var _closure2_slot2 = oscar;
        options = tango.useMemo;
        golf = new Array(2);
        golf[0] = mike;
        golf[1] = report;
        zulu = function() {
            _fun114863: for(var _fun114863_ip = 0; ; ) switch(_fun114863_ip) {
 0:
                zulu = _closure2_slot1;
                entity = null;
                if(!(entity != zulu)) { _fun114863_ip = 53; continue _fun114863 }
 13:
                entity = _closure2_slot1;
                zulu = entity.length;
                entity = 0;
                if(!(entity !== zulu)) { _fun114863_ip = 53; continue _fun114863 }
 28:
                tango = _closure2_slot0;
                zulu = tango.map;
                entity = function(argFoo) {
                    _fun114864: for(var _fun114864_ip = 0; ; ) switch(_fun114864_ip) {
 0:
                        mike = argFoo;
                        var _closure4_slot0 = mike;
                        entity = {};
                        options = entity;
                        golf = mike;
                        mike = copyDataProperties(options, golf);
                        mike = _closure2_slot1;
                        zulu = null;
                        oscar = zulu == mike;
                        mike = undefined;
                        if(oscar) { _fun114864_ip = 61; continue _fun114864 }
 39:
                        oscar = _closure2_slot1;
                        report = oscar.some;
                        tango = function(argFoo) {
                            entity = argFoo;
                            entity = entity.application;
                            mike = entity.id;
                            entity = _closure4_slot0;
                            entity = entity.id;
                            entity = mike === entity;
                            return entity;
                        };
                        mike = report.bind(oscar)(tango);
 61:
                        zulu = zulu != mike;
                        if(!zulu) { _fun114864_ip = 71; continue _fun114864 }
 68:
                        zulu = mike;
 71:
                        mike = 'isUserApp';
                        entity[mike] = zulu;
                        return entity;
                    }
                };
                entity = zulu.bind(tango)(entity);
                _fun114863_ip = 57; continue _fun114863;
 53:
                entity = _closure2_slot0;
 57:
                return entity;
            }
        };
        golf = options.bind(tango)(zulu, golf);
        var _closure2_slot3 = golf;
        options = tango.useMemo;
        zulu = new Array(2);
        zulu[0] = mike;
        zulu[1] = report;
        mike = function() {
            _fun114866: for(var _fun114866_ip = 0; ; ) switch(_fun114866_ip) {
 0:
                zulu = _closure2_slot1;
                entity = null;
                zulu = entity == zulu;
                entity = undefined;
                if(zulu) { _fun114866_ip = 41; continue _fun114866 }
 18:
                tango = _closure2_slot1;
                zulu = tango.filter;
                mike = function(argFoo) {
                    mike = argFoo;
                    var _closure4_slot0 = mike;
                    zulu = _closure2_slot0;
                    mike = zulu.some;
                    entity = function(argFoo) {
                        entity = argFoo;
                        mike = entity.id;
                        entity = _closure4_slot0;
                        entity = entity.application;
                        entity = entity.id;
                        entity = mike === entity;
                        return entity;
                    };
                    entity = mike.bind(zulu)(entity);
                    entity = !entity;
                    return entity;
                };
                entity = zulu.bind(tango)(mike);
 41:
                return entity;
            }
        };
        mike = options.bind(tango)(mike, zulu);
        var _closure2_slot4 = mike;
        options = tango.useMemo;
        zulu = new Array(3);
        zulu[0] = golf;
        zulu[1] = oscar;
        zulu[2] = mike;
        mike = function() {
            _fun114869: for(var _fun114869_ip = 0; ; ) switch(_fun114869_ip) {
 0:
                tango = _closure2_slot4;
                zulu = null;
                if(!(zulu != tango)) { _fun114869_ip = 36; continue _fun114869 }
 15:
                oscar = _closure2_slot4;
                report = oscar.forEach;
                tango = function(argFoo) {
                    _fun114870: for(var _fun114870_ip = 0; ; ) switch(_fun114870_ip) {
 0:
                        mike = argFoo;
                        tango = _closure1_slot1;
                        zulu = _closure1_slot2;
                        entity = 5;
                        zulu = zulu[entity];
                        entity = undefined;
                        report = tango.bind(entity)(zulu);
                        tango = report.extractTimestamp;
                        zulu = mike.id;
                        report = tango.bind(report)(zulu);
                        golf = _closure2_slot2;
                        oscar = golf.getEntry;
                        tango = mike.application;
                        tango = tango.id;
                        oscar = oscar.bind(golf)(tango);
                        tango = null;
                        if(!(tango == oscar)) { _fun114870_ip = 103; continue _fun114870 }
 78:
                        tango = _closure2_slot2;
                        zulu = tango.track;
                        mike = mike.application;
                        mike = mike.id;
                        mike = zulu.bind(tango)(mike, report);
 103:
                        return entity;
                    }
                };
                tango = report.bind(oscar)(tango);
 36:
                report = _closure2_slot2;
                tango = report.compute;
                tango = tango.bind(report)();
                tango = _closure2_slot4;
                tango = zulu == tango;
                oscar = undefined;
                if(tango) { _fun114869_ip = 84; continue _fun114869 }
 63:
                golf = _closure2_slot4;
                report = golf.map;
                tango = function(argFoo) {
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 6;
                    mike = mike[entity];
                    entity = undefined;
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.getApplicationCommandSection;
                    entity = argFoo;
                    mike = entity.application;
                    entity = true;
                    entity = zulu.bind(tango)(mike, entity);
                    return entity;
                };
                oscar = report.bind(golf)(tango);
 84:
                if(!(zulu == oscar)) { _fun114869_ip = 92; continue _fun114869 }
 88:
                oscar = new Array(0);
 92:
                verify = _closure2_slot3;
                entity = new Array(0);
                offset = entity;
                options = 0;
                zulu = arraySpread(offset, verify, options);
                tango = entity.push;
                zulu = new Array(0);
                offset = zulu;
                verify = oscar;
                report = arraySpread(offset, verify, options);
                offset = tango;
                verify = zulu;
                options = entity;
                zulu = apply(offset, verify, options);
                zulu = entity.sort;
                mike = function(argFoo, argBar) {
                    _fun114872: for(var _fun114872_ip = 0; ; ) switch(_fun114872_ip) {
 0:
                        zulu = argFoo;
                        mike = argBar;
                        report = _closure2_slot2;
                        tango = report.getScore;
                        entity = mike.id;
                        golf = tango.bind(report)(entity);
                        entity = null;
                        options = entity != golf;
                        tango = 0;
                        report = 0;
                        if(!options) { _fun114872_ip = 45; continue _fun114872 }
 42:
                        report = golf;
 45:
                        options = _closure2_slot2;
                        golf = options.getScore;
                        oscar = zulu.id;
                        oscar = golf.bind(options)(oscar);
                        golf = entity != oscar;
                        entity = 0;
                        if(!golf) { _fun114872_ip = 77; continue _fun114872 }
 74:
                        entity = oscar;
 77:
                        entity = report - entity;
                        if(!(tango === entity)) { _fun114872_ip = 106; continue _fun114872 }
 85:
                        tango = zulu.name;
                        zulu = tango.localeCompare;
                        mike = mike.name;
                        entity = zulu.bind(tango)(mike);
 106:
                        return entity;
                    }
                };
                mike = zulu.bind(entity)(mike);
                return entity;
            }
        };
        options = options.bind(tango)(mike, zulu);
        var _closure2_slot5 = options;
        zulu = tango.useMemo;
        mike = new Array(4);
        mike[0] = options;
        mike[1] = golf;
        mike[2] = oscar;
        mike[3] = report;
        entity = function() {
            _fun114873: for(var _fun114873_ip = 0; ; ) switch(_fun114873_ip) {
 0:
                tango = _closure2_slot1;
                zulu = null;
                if(!(zulu != tango)) { _fun114873_ip = 36; continue _fun114873 }
 15:
                oscar = _closure2_slot1;
                report = oscar.forEach;
                tango = function(argFoo) {
                    _fun114874: for(var _fun114874_ip = 0; ; ) switch(_fun114874_ip) {
 0:
                        tango = argFoo;
                        zulu = _closure1_slot1;
                        mike = _closure1_slot2;
                        entity = 5;
                        mike = mike[entity];
                        entity = undefined;
                        report = zulu.bind(entity)(mike);
                        zulu = report.extractTimestamp;
                        mike = tango.id;
                        zulu = zulu.bind(report)(mike);
                        oscar = _closure3_slot1;
                        report = null;
                        report = report == oscar;
                        if(report) { _fun114874_ip = 68; continue _fun114874 }
 60:
                        oscar = _closure3_slot1;
                        report = zulu > oscar;
 68:
                        if(!report) { _fun114874_ip = 79; continue _fun114874 }
 71:
                        var _closure3_slot0 = tango;
                        var _closure3_slot1 = zulu;
 79:
                        return entity;
                    }
                };
                tango = report.bind(oscar)(tango);
 36:
                oscar = _closure2_slot3;
                report = oscar.forEach;
                tango = function(argFoo) {
                    _fun114875: for(var _fun114875_ip = 0; ; ) switch(_fun114875_ip) {
 0:
                        tango = argFoo;
                        entity = global;
                        report = entity.Math;
                        zulu = report.max;
                        oscar = _closure2_slot2;
                        mike = oscar.getEntry;
                        entity = tango.id;
                        mike = mike.bind(oscar)(entity);
                        oscar = null;
                        golf = oscar == mike;
                        entity = undefined;
                        options = undefined;
                        if(golf) { _fun114875_ip = 58; continue _fun114875 }
 52:
                        options = mike.recentUses;
 58:
                        if(!(oscar == options)) { _fun114875_ip = 66; continue _fun114875 }
 62:
                        options = new Array(0);
 66:
                        mike = new Array(0);
                        verify = 0;
                        yankee = mike;
                        offset = options;
                        golf = arraySpread(yankee, offset, verify);
                        yankee = zulu;
                        offset = mike;
                        verify = report;
                        zulu = apply(yankee, offset, verify);
                        report = _closure3_slot1;
                        report = oscar == report;
                        if(report) { _fun114875_ip = 117; continue _fun114875 }
 109:
                        oscar = _closure3_slot1;
                        report = zulu > oscar;
 117:
                        if(!report) { _fun114875_ip = 128; continue _fun114875 }
 120:
                        _closure3_slot0 = tango;
                        _closure3_slot1 = zulu;
 128:
                        return entity;
                    }
                };
                tango = report.bind(oscar)(tango);
                report = _closure3_slot0;
                oscar = zulu == report;
                tango = undefined;
                if(oscar) { _fun114873_ip = 89; continue _fun114873 }
 70:
                report = report.application;
                oscar = zulu == report;
                tango = undefined;
                if(oscar) { _fun114873_ip = 89; continue _fun114873 }
 84:
                tango = report.id;
 89:
                report = zulu != tango;
                zulu = '';
                if(!report) { _fun114873_ip = 103; continue _fun114873 }
 100:
                zulu = tango;
 103:
                var _closure3_slot2 = zulu;
                report = _closure2_slot5;
                zulu = report.filter;
                entity = function(argFoo) {
                    entity = argFoo;
                    mike = entity.id;
                    entity = _closure3_slot2;
                    entity = mike === entity;
                    return entity;
                };
                verify = zulu.bind(report)(entity);
                entity = new Array(0);
                options = 0;
                offset = entity;
                options = arraySpread(offset, verify, options);
                tango = report.filter;
                mike = function(argFoo) {
                    entity = argFoo;
                    mike = entity.id;
                    entity = _closure3_slot2;
                    entity = mike !== entity;
                    return entity;
                };
                verify = tango.bind(report)(mike);
                offset = entity;
                mike = arraySpread(offset, verify, options);
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['useSortApplicationsViaFrecency'] = mike;
    return entity;
})();