// app/utils/FileManagerUtils.android.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    entity = function() { // Original name: _readFile
        report = undefined;
        entity = undefined;
        tango = _closure1_slot2;
        zulu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00002_ip = 299; continue _fun00001 }
 10:
                    oscar = argBar;
                    report = argBaz;
                    yankee = undefined;
                    verify = undefined;
                    zulu = _closure1_slot0;
                    mike = _closure1_slot1;
                    romeo = 2;
                    mike = mike[romeo];
                    zulu = zulu.bind(yankee)(mike);
                    mike = null;
                    golf = mike == zulu;
                    zulu = null;
                    if(golf) { _fun00002_ip = 140; continue _fun00001 }
 54:
                    options = 'cache';
                    golf = argFoo;
                    if(!(options !== golf)) { _fun00002_ip = 102; continue _fun00001 }
 65:
                    options = _closure1_slot0;
                    golf = _closure1_slot1;
                    golf = golf[romeo];
                    options = options.bind(yankee)(golf);
                    golf = options.getConstants;
                    golf = golf.bind(options)();
                    golf = golf.DocumentsDirPath;
                    _fun00002_ip = 137; continue _fun00001;
 102:
                    offset = _closure1_slot0;
                    options = _closure1_slot1;
                    options = options[romeo];
                    offset = offset.bind(yankee)(options);
                    options = offset.getConstants;
                    options = options.bind(offset)();
                    golf = options.CacheDirPath;
 137:
                    zulu = golf;
 140:
                    verify = zulu;
                    if(!(mike != zulu)) { _fun00002_ip = 296; continue _fun00001 }
 150:
                    golf = _closure1_slot0;
                    zulu = _closure1_slot1;
                    zulu = zulu[romeo];
                    options = golf.bind(yankee)(zulu);
                    golf = options.fileExists;
                    zulu = verify;
                    offset = '/';
                    foxtrot = zulu + offset;
                    zulu = oscar;
                    zulu = foxtrot + zulu;
                    zulu = golf.bind(options)(zulu);
                    SaveGenerator(address=202);
 200:
                    return zulu;
 202:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(golf) { _fun00002_ip = 293; continue _fun00001 }
 208:
                    if(zulu) { _fun00002_ip = 214; continue _fun00001 }
 211:
                    return mike;
 214: // try_start_0
                    options = _closure1_slot0;
                    golf = _closure1_slot1;
                    golf = golf[romeo];
                    options = options.bind(yankee)(golf);
                    golf = options.readFile;
                    verify = verify + offset;
                    oscar = verify + oscar;
                    report = golf.bind(options)(oscar, report);
                    SaveGenerator(address=255);
 253:
                    return report;
 255:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(oscar) { _fun00002_ip = 264; continue _fun00001 }
 261: // try_end0
                    return report;
 264:
                    return report;
 267: // catch_target0
                    CatchBlockStart(arg_register=6);
                    oscar = _closure1_slot3;
                    report = oscar.error;
                    tango = 'Failed to read file from disk';
                    tango = report.bind(oscar)(tango, golf);
                    return mike;
 293:
                    return zulu;
 296:
                    return mike;
 299:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot4 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot4 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = report[entity];
    entity = undefined;
    tango = oscar.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = report[tango];
    golf = oscar.bind(entity)(tango);
    tango = golf.prototype;
    oscar = Object.create(tango, {constructor: {value: golf}});
    yankee = 'FileManagerUtils';
    romeo = oscar;
    tango = new romeo[golf](yankee, offset);
    tango = tango instanceof Object ? tango : oscar;
    var _closure1_slot3 = tango;
    tango = 3;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'utils/FileManagerUtils.android.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo, argBar, argBaz, argCorge) { // Original name: writeFile
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            mike = _closure1_slot0;
            entity = _closure1_slot1;
            oscar = 2;
            entity = entity[oscar];
            report = undefined;
            entity = mike.bind(report)(entity);
            mike = null;
            tango = mike == entity;
            entity = undefined;
            if(tango) { _fun00004_ip = 95; continue _fun00003 }
 36:
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            zulu = zulu[oscar];
            options = tango.bind(report)(zulu);
            golf = options.writeFile;
            romeo = argFoo;
            yankee = argBar;
            offset = argBaz;
            verify = argCorge;
            foxtrot = options;
            report = foxtrot[golf](romeo, yankee, offset, verify, options);
            tango = report.then;
            zulu = function(argFoo) {
                entity = global;
                entity = entity.HermesInternal;
                zulu = entity.concat;
                mike = 'file:';
                entity = argFoo;
                entity = zulu.bind(mike)(entity);
                return entity;
            };
            entity = tango.bind(report)(zulu);
 95:
            if(!(mike == entity)) { _fun00004_ip = 124; continue _fun00003 }
 99:
            mike = global;
            tango = mike.Promise;
            zulu = tango.reject;
            mike = "RTNFileManager doesn't exist?";
            entity = zulu.bind(tango)(mike);
 124:
            return entity;
        }
    };
    zulu['writeFile'] = tango;
    tango = function(argFoo, argBar) { // Original name: removeFile
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            mike = _closure1_slot0;
            entity = _closure1_slot1;
            oscar = 2;
            entity = entity[oscar];
            report = undefined;
            entity = mike.bind(report)(entity);
            mike = null;
            tango = mike == entity;
            entity = undefined;
            if(tango) { _fun00006_ip = 71; continue _fun00005 }
 36:
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            zulu = zulu[oscar];
            oscar = tango.bind(report)(zulu);
            report = oscar.removeFile;
            tango = argFoo;
            zulu = argBar;
            entity = report.bind(oscar)(tango, zulu);
 71:
            if(!(mike == entity)) { _fun00006_ip = 96; continue _fun00005 }
 75:
            mike = global;
            tango = mike.Promise;
            zulu = tango.reject;
            mike = false;
            entity = zulu.bind(tango)(mike);
 96:
            return entity;
        }
    };
    zulu['removeFile'] = tango;
    tango = function(argFoo, argBar) { // Original name: clearFolder
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            mike = _closure1_slot0;
            entity = _closure1_slot1;
            oscar = 2;
            entity = entity[oscar];
            report = undefined;
            entity = mike.bind(report)(entity);
            mike = null;
            tango = mike == entity;
            entity = undefined;
            if(tango) { _fun00008_ip = 71; continue _fun00007 }
 36:
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            zulu = zulu[oscar];
            oscar = tango.bind(report)(zulu);
            report = oscar.clearFolder;
            tango = argFoo;
            zulu = argBar;
            entity = report.bind(oscar)(tango, zulu);
 71:
            if(!(mike == entity)) { _fun00008_ip = 96; continue _fun00007 }
 75:
            mike = global;
            tango = mike.Promise;
            zulu = tango.reject;
            mike = false;
            entity = zulu.bind(tango)(mike);
 96:
            return entity;
        }
    };
    zulu['clearFolder'] = tango;
    mike = function() { // Original name: readFile
        entity = undefined;
        tango = _closure1_slot4;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['readFile'] = mike;
    return entity;
})();