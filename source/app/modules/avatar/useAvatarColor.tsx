// app/modules/avatar/useAvatarColor.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    options = argBar;
    golf = argBaz;
    zulu = argFred;
    verify = argPlugh;
    var _closure1_slot0 = options;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = verify;
    report = function(argFoo) { // Original name: hasFetchedColors
        mike = _closure1_slot7;
        entity = mike.getState;
        entity = entity.bind(mike)();
        mike = entity.palette;
        entity = argFoo;
        mike = mike[entity];
        entity = null;
        entity = entity != mike;
        return entity;
    };
    var _closure1_slot8 = report;
    entity = function() { // Original name: _maybeFetchColors
        report = undefined;
        entity = undefined;
        tango = _closure1_slot4;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    tango = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00002_ip = 52; continue _fun00001 }
 10:
                    report = _closure1_slot8;
                    mike = undefined;
                    report = report.bind(mike)(tango);
                    if(report) { _fun00002_ip = 49; continue _fun00001 }
 27:
                    zulu = _closure1_slot10;
                    zulu = zulu.bind(mike)(tango);
                    SaveGenerator(address=40);
 38:
                    return zulu;
 40:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(!tango) { _fun00002_ip = 49; continue _fun00001 }
 46:
                    return zulu;
 49:
                    return mike;
 52:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot9 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot9 = entity;
    entity = function() { // Original name: fetchColors
        entity = undefined;
        tango = _closure1_slot11;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot10 = entity;
    entity = function() { // Original name: _fetchColors
        report = undefined;
        entity = undefined;
        tango = _closure1_slot4;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    golf = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00004_ip = 255; continue _fun00003 }
 15:
                    report = golf;
                    var _closure4_slot0 = golf;
                    mike = undefined;
                    var _closure4_slot1 = mike;
                    var _closure4_slot2 = mike;
                    options = _closure1_slot7;
                    oscar = options.getState;
                    oscar = oscar.bind(options)();
                    oscar = oscar.fetching;
                    oscar = oscar[golf];
                    if(oscar) { _fun00004_ip = 252; continue _fun00003 }
 65:
                    options = _closure1_slot0;
                    golf = _closure1_slot2;
                    oscar = 5;
                    golf = golf[oscar];
                    verify = options.bind(mike)(golf);
                    options = verify.batchUpdates;
                    golf = function() {
                        zulu = _closure1_slot7;
                        mike = zulu.setState;
                        entity = function(argFoo) {
                            entity = {};
                            mike = {};
                            zulu = argFoo;
                            report = zulu.fetching;
                            oscar = mike;
                            zulu = copyDataProperties(oscar, report);
                            tango = _closure4_slot0;
                            zulu = true;
                            mike[tango] = zulu;
                            entity['fetching'] = mike;
                            return entity;
                        };
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    golf = options.bind(verify)(golf);
 101: // try_start_0
                    options = _closure1_slot0;
                    verify = _closure1_slot2;
                    golf = 6;
                    golf = verify[golf];
                    options = options.bind(mike)(golf);
                    golf = options.getPaletteForAvatar;
                    report = golf.bind(options)(report);
                    SaveGenerator(address=136);
 134:
                    return report;
 136:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(golf) { _fun00004_ip = 214; continue _fun00003 }
 142:
                    _closure4_slot1 = report;
                    options = _closure1_slot0;
                    golf = _closure1_slot2;
                    verify = 7;
                    verify = golf[verify];
                    yankee = options.bind(mike)(verify);
                    offset = yankee.getComplimentaryPaletteForColor;
                    verify = 0;
                    verify = report[verify];
                    verify = offset.bind(yankee)(verify);
                    _closure4_slot2 = verify;
                    golf = golf[oscar];
                    verify = options.bind(mike)(golf);
                    options = verify.batchUpdates;
                    golf = function() {
                        zulu = _closure1_slot7;
                        mike = zulu.setState;
                        entity = function(argFoo) {
                            zulu = argFoo;
                            entity = {};
                            mike = {};
                            offset = zulu.fetching;
                            yankee = mike;
                            tango = copyDataProperties(yankee, offset);
                            tango = _closure4_slot0;
                            oscar = false;
                            mike[tango] = oscar;
                            entity['fetching'] = mike;
                            mike = {};
                            offset = zulu.palette;
                            yankee = mike;
                            zulu = copyDataProperties(yankee, offset);
                            options = _closure4_slot1;
                            oscar = options.slice;
                            golf = 0;
                            zulu = 2;
                            offset = oscar.bind(options)(golf, zulu);
                            zulu = new Array(0);
                            yankee = zulu;
                            verify = 0;
                            verify = arraySpread(yankee, offset, verify);
                            offset = _closure4_slot2;
                            yankee = zulu;
                            report = arraySpread(yankee, offset, verify);
                            mike[tango] = zulu;
                            entity['palette'] = mike;
                            return entity;
                        };
                        entity = mike.bind(zulu)(entity);
                        entity = undefined;
                        return entity;
                    };
                    golf = options.bind(verify)(golf);
 212: // try_end0
                    _fun00004_ip = 252; continue _fun00003;
 214:
                    return report;
 217: // catch_target0
                    CatchBlockStart(arg_register=4);
                    report = _closure1_slot0;
                    tango = _closure1_slot2;
                    tango = tango[oscar];
                    report = report.bind(mike)(tango);
                    tango = report.batchUpdates;
                    zulu = function() {
                        zulu = _closure1_slot7;
                        mike = zulu.setState;
                        entity = function(argFoo) {
                            entity = {};
                            mike = {};
                            zulu = argFoo;
                            report = zulu.fetching;
                            oscar = mike;
                            zulu = copyDataProperties(oscar, report);
                            tango = _closure4_slot0;
                            zulu = false;
                            mike[tango] = zulu;
                            entity['fetching'] = mike;
                            return entity;
                        };
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    zulu = tango.bind(report)(zulu);
 252:
                    return mike;
 255:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot11 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot11 = entity;
    mike = function(argFoo, argBar) { // Original name: useAvatarColors
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tango = argFoo;
            zulu = argBar;
            mike = arguments[2];
            var _closure2_slot0 = tango;
            options = undefined;
            if(!(mike === options)) { _fun00006_ip = 23; continue _fun00005 }
 21:
            mike = true;
 23:
            var _closure2_slot1 = mike;
            var _closure2_slot2 = options;
            var _closure2_slot3 = options;
            oscar = _closure1_slot7;
            report = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zulu = _closure2_slot0;
                    entity = null;
                    zulu = entity == zulu;
                    entity = undefined;
                    if(zulu) { _fun00008_ip = 35; continue _fun00007 }
 18:
                    zulu = argFoo;
                    zulu = zulu.palette;
                    mike = _closure2_slot0;
                    entity = zulu[mike];
 35:
                    return entity;
                }
            };
            golf = oscar.bind(options)(report);
            _closure2_slot2 = golf;
            oscar = _closure1_slot0;
            verify = _closure1_slot2;
            report = 8;
            report = verify[report];
            verify = oscar.bind(options)(report);
            options = verify.useStateFromStores;
            report = _closure1_slot6;
            oscar = new Array(1);
            oscar[0] = report;
            report = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    mike = _closure2_slot1;
                    tango = 1;
                    entity = tango;
                    if(!mike) { _fun00010_ip = 45; continue _fun00009 }
 16:
                    zulu = _closure1_slot6;
                    zulu = zulu.desaturateUserColors;
                    entity = tango;
                    if(!zulu) { _fun00010_ip = 45; continue _fun00009 }
 35:
                    mike = _closure1_slot6;
                    entity = mike.saturation;
 45:
                    return entity;
                }
            };
            oscar = options.bind(verify)(oscar, report);
            _closure2_slot3 = oscar;
            verify = _closure1_slot5;
            options = verify.useEffect;
            report = new Array(2);
            report[0] = tango;
            report[1] = golf;
            tango = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    mike = _closure2_slot0;
                    tango = null;
                    mike = tango != mike;
                    if(!mike) { _fun00012_ip = 24; continue _fun00011 }
 16:
                    zulu = _closure2_slot2;
                    mike = tango == zulu;
 24:
                    if(!mike) { _fun00012_ip = 45; continue _fun00011 }
 27:
                    zulu = _closure1_slot10;
                    mike = _closure2_slot0;
                    entity = undefined;
                    entity = zulu.bind(entity)(mike);
 45:
                    entity = undefined;
                    return entity;
                }
            };
            tango = options.bind(verify)(tango, report);
            report = _closure1_slot5;
            tango = report.useMemo;
            mike = new Array(2);
            mike[0] = golf;
            mike[1] = oscar;
            entity = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zulu = _closure2_slot2;
                    entity = null;
                    zulu = entity == zulu;
                    entity = undefined;
                    if(zulu) { _fun00014_ip = 39; continue _fun00013 }
 18:
                    tango = _closure2_slot2;
                    zulu = tango.map;
                    mike = function(argFoo) {
                        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                            tango = argFoo;
                            entity = tango[Symbol.iterator];
                            tango = entity().next;
                            report = tango().value;
                            mike = entity;
                            zulu = undefined;
                            mike = mike === zulu;
                            verify = undefined;
                            if(mike) { _fun00016_ip = 27; continue _fun00015 }
 24:
                            verify = report;
 27:
                            options = undefined;
                            if(mike) { _fun00016_ip = 57; continue _fun00015 }
 32:
                            oscar = tango().value;
                            report = entity;
                            report = report === zulu;
                            options = undefined;
                            mike = report;
                            if(report) { _fun00016_ip = 57; continue _fun00015 }
 51:
                            options = oscar;
                            mike = report;
 57:
                            oscar = undefined;
                            if(mike) { _fun00016_ip = 87; continue _fun00015 }
 62:
                            report = tango().value;
                            tango = entity;
                            tango = tango === zulu;
                            oscar = undefined;
                            mike = tango;
                            if(tango) { _fun00016_ip = 87; continue _fun00015 }
 81:
                            oscar = report;
                            mike = tango;
 87:
                            if(mike) { _fun00016_ip = 93; continue _fun00015 }
 90:
                            entity.return();
 93:
                            mike = _closure1_slot1;
                            golf = _closure1_slot2;
                            entity = 9;
                            tango = golf[entity];
                            report = mike.bind(zulu)(tango);
                            tango = {};
                            tango['r'] = verify;
                            tango['g'] = options;
                            tango['b'] = oscar;
                            report = report.bind(zulu)(tango);
                            tango = report.toHsl;
                            tango = tango.bind(report)();
                            report = tango.h;
                            oscar = tango.s;
                            tango = tango.l;
                            entity = golf[entity];
                            mike = mike.bind(zulu)(entity);
                            entity = {};
                            entity['h'] = report;
                            report = _closure2_slot3;
                            report = oscar * report;
                            entity['s'] = report;
                            entity['l'] = tango;
                            mike = mike.bind(zulu)(entity);
                            entity = mike.toHexString;
                            entity = entity.bind(mike)();
                            return entity;
                        }
                    };
                    entity = zulu.bind(tango)(mike);
 39:
                    return entity;
                }
            };
            entity = tango.bind(report)(entity, mike);
            mike = null;
            if(!(mike == entity)) { _fun00006_ip = 193; continue _fun00005 }
 178:
            mike = new Array(2);
            mike[0] = zulu;
            mike[1] = zulu;
            entity = mike;
 193:
            return entity;
        }
    };
    var _closure1_slot12 = mike;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zulu, entity, oscar);
    entity = 0;
    oscar = verify[entity];
    entity = undefined;
    oscar = golf.bind(entity)(oscar);
    var _closure1_slot3 = oscar;
    oscar = 1;
    oscar = verify[oscar];
    oscar = golf.bind(entity)(oscar);
    var _closure1_slot4 = oscar;
    oscar = 2;
    offset = verify[oscar];
    oscar = argCorge;
    oscar = oscar.bind(entity)(offset);
    var _closure1_slot5 = oscar;
    oscar = 3;
    oscar = verify[oscar];
    oscar = golf.bind(entity)(oscar);
    var _closure1_slot6 = oscar;
    oscar = 4;
    oscar = verify[oscar];
    offset = options.bind(entity)(oscar);
    golf = offset.create;
    oscar = function() {
        entity = {};
        mike = {};
        entity['palette'] = mike;
        mike = {};
        entity['fetching'] = mike;
        return entity;
    };
    oscar = golf.bind(offset)(oscar);
    var _closure1_slot7 = oscar;
    golf = 10;
    golf = verify[golf];
    verify = options.bind(entity)(golf);
    options = verify.fileFinishedImporting;
    golf = 'modules/avatar/useAvatarColor.tsx';
    golf = options.bind(verify)(golf);
    golf = function(argFoo, argBar) { // Original name: useAvatarColor
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            oscar = arguments[2];
            tango = undefined;
            if(!(oscar === tango)) { _fun00018_ip = 11; continue _fun00017 }
 9:
            oscar = true;
 11:
            report = _closure1_slot12;
            zulu = argFoo;
            mike = argBar;
            zulu = report.bind(tango)(zulu, mike, oscar);
            mike = _closure1_slot3;
            entity = 1;
            mike = mike.bind(tango)(zulu, entity);
            entity = 0;
            entity = mike[entity];
            return entity;
        }
    };
    zulu['default'] = golf;
    zulu['useColorStore'] = oscar;
    zulu['hasFetchedColors'] = report;
    report = function() { // Original name: maybeFetchColors
        entity = undefined;
        tango = _closure1_slot9;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['maybeFetchColors'] = report;
    tango = function(argFoo) { // Original name: useHasFetchedColors
        mike = argFoo;
        var _closure2_slot0 = mike;
        zulu = _closure1_slot7;
        mike = undefined;
        entity = function(argFoo) {
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                zulu = _closure2_slot0;
                entity = null;
                entity = entity != zulu;
                if(!entity) { _fun00020_ip = 33; continue _fun00019 }
 16:
                zulu = argFoo;
                zulu = zulu.fetching;
                mike = _closure2_slot0;
                entity = zulu[mike];
 33:
                return entity;
            }
        };
        entity = zulu.bind(mike)(entity);
        entity = !entity;
        return entity;
    };
    zulu['useHasFetchedColors'] = tango;
    zulu['useAvatarColors'] = mike;
    return entity;
})();