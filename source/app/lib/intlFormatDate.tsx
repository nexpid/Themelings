// app/lib/intlFormatDate.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar) { // Original name: makeIntlFormatter
        _fun43486: for(var _fun43486_ip = 0; ; ) switch(_fun43486_ip) {
 0:
            mike = argFoo;
            entity = argBar;
 6: // try_start_0
            zulu = global;
            report = zulu.Intl;
            tango = report.DateTimeFormat;
            zulu = mike;
            mike = entity;
            mike = tango.bind(report)(zulu, mike);
            mike = mike.format;
 37: // try_end0
            return mike;
 39: // catch_target0
            CatchBlockStart(arg_register=1);
            mike = global;
            tango = mike.Intl;
            zulu = tango.DateTimeFormat;
            mike = entity;
            entity = undefined;
            entity = zulu.bind(tango)(entity, mike);
            entity = entity.format;
            return entity;
        }
    };
    var _closure1_slot3 = entity;
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
    tango = argBaz;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot2 = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'lib/intlFormatDate.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: makeFormatter
        _fun43487: for(var _fun43487_ip = 0; ; ) switch(_fun43487_ip) {
 0:
            report = argFoo;
            entity = _closure1_slot2;
            tango = entity.locale;
            entity = function(argFoo, argBar) { // Original name: tryMakeNativeFormatter
                _fun43488: for(var _fun43488_ip = 0; ; ) switch(_fun43488_ip) {
 0:
                    tango = argFoo;
                    entity = argBar;
                    golf = tango;
                    var _closure3_slot0 = tango;
                    zulu = entity;
                    var _closure3_slot1 = entity;
                    tango = undefined;
                    options = undefined;
                    verify = _closure1_slot0;
                    entity = _closure1_slot1;
                    report = 1;
                    entity = entity[report];
                    entity = verify.bind(tango)(entity);
                    verify = entity.makeFormatter;
                    entity = null;
                    if(!(entity != verify)) { _fun43488_ip = 266; continue _fun43488 }
 64: // try_start_0
                    offset = golf;
                    offset = entity != offset;
                    verify = offset;
                    if(!offset) { _fun43488_ip = 176; continue _fun43488 }
 77:
                    yankee = golf;
                    offset = yankee.split;
                    kilo = '-';
                    offset = offset.bind(yankee)(kilo);
                    foxtrot = 0;
                    yankee = offset[foxtrot];
                    romeo = _closure1_slot0;
                    offset = _closure1_slot1;
                    sizing = 2;
                    offset = offset[sizing];
                    offset = romeo.bind(tango)(offset);
                    offset = offset.systemLocale;
                    romeo = entity == offset;
                    offset = undefined;
                    if(romeo) { _fun43488_ip = 172; continue _fun43488 }
 135:
                    backup = _closure1_slot0;
                    romeo = _closure1_slot1;
                    romeo = romeo[sizing];
                    romeo = backup.bind(tango)(romeo);
                    backup = romeo.systemLocale;
                    romeo = backup.split;
                    romeo = romeo.bind(backup)(kilo);
                    offset = romeo[foxtrot];
 172:
                    verify = yankee === offset;
 176:
                    options = verify;
                    yankee = _closure1_slot0;
                    romeo = _closure1_slot1;
                    report = romeo[report];
                    oscar = yankee.bind(tango)(report);
                    report = oscar.makeFormatter;
                    offset = golf;
                    verify = 2;
                    verify = romeo[verify];
                    verify = yankee.bind(tango)(verify);
                    verify = verify.initialLocale;
                    if(!(offset === verify)) { _fun43488_ip = 232; continue _fun43488 }
 227:
                    tango = undefined;
                    if(options) { _fun43488_ip = 235; continue _fun43488 }
 232:
                    tango = golf;
 235:
                    zulu = report.bind(oscar)(tango, zulu);
                    var _closure3_slot2 = zulu;
                    if(!(entity != zulu)) { _fun43488_ip = 260; continue _fun43488 }
 249:
                    var _closure3_slot3 = entity;
 253: // try_end0
                    mike = function(argFoo) {
                        _fun43489: for(var _fun43489_ip = 0; ; ) switch(_fun43489_ip) {
 0:
                            entity = argFoo;
 3: // try_start_0
                            tango = _closure3_slot2;
                            zulu = entity;
                            mike = undefined;
                            mike = tango.bind(mike)(zulu);
 20: // try_end0
                            return mike;
 22: // catch_target0
                            CatchBlockStart(arg_register=1);
                            tango = _closure3_slot3;
                            zulu = null;
                            if(!(zulu == tango)) { _fun43489_ip = 64; continue _fun43489 }
 37:
                            oscar = _closure1_slot3;
                            report = _closure3_slot0;
                            tango = _closure3_slot1;
                            zulu = undefined;
                            zulu = oscar.bind(zulu)(report, tango);
                            _closure3_slot3 = zulu;
 64:
                            zulu = _closure3_slot3;
                            mike = entity;
                            entity = undefined;
                            entity = zulu.bind(entity)(mike);
                            return entity;
                        }
                    };
                    return mike;
 260:
                    return entity;
 262: // catch_target0
                    CatchBlockStart(arg_register=1);
                    return entity;
 266:
                    return entity;
                }
            };
            zulu = undefined;
            entity = entity.bind(zulu)(tango, report);
            oscar = null;
            if(!(oscar == entity)) { _fun43487_ip = 47; continue _fun43487 }
 37:
            mike = _closure1_slot3;
            entity = mike.bind(zulu)(tango, report);
 47:
            return entity;
        }
    };
    zulu['makeFormatter'] = mike;
    return entity;
})();