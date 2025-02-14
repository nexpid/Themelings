// app/modules/app_database/stores/FileSystemStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun58994: for(var _fun58994_ip = 0; ; ) switch(_fun58994_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot11;
            entity = entity.bind(zulu)();
            if(entity) { _fun58994_ip = 51; continue _fun58994 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun58994_ip = 92; continue _fun58994;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun58994_ip = 71; continue _fun58994 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot6;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun58995: for(var _fun58995_ip = 0; ; ) switch(_fun58995_ip) {
 0:
 2: // try_start_0
            mike = global;
            zulu = mike.Boolean;
            zulu = zulu.prototype;
            tango = zulu.valueOf;
            zulu = tango.call;
            options = mike.Reflect;
            golf = options.construct;
            oscar = mike.Boolean;
            report = new Array(0);
            mike = function() {
                entity = undefined;
                return entity;
            };
            mike = golf.bind(options)(oscar, report, mike);
            mike = zulu.bind(tango)(mike);
            mike = !mike;
            var _closure2_slot0 = mike;
 70: // try_end0
            _fun58995_ip = 74; continue _fun58995;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot11 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot11 = entity;
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
    tango = oscar.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 4;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 5;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 6;
    tango = report[tango];
    options = oscar.bind(entity)(tango);
    tango = options.prototype;
    golf = Object.create(tango, {constructor: {value: options}});
    yankee = 'FileSystemStore';
    romeo = golf;
    tango = new romeo[options](yankee, offset);
    tango = tango instanceof Object ? tango : golf;
    var _closure1_slot8 = tango;
    tango = 7;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    tango = tango.Millis;
    golf = tango.MINUTE;
    tango = 10;
    golf = tango * golf;
    var _closure1_slot9 = golf;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    tango = tango.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: FileSystemStore
            verify = this;
            entity = _closure1_slot3;
            oscar = _closure2_slot1;
            report = undefined;
            entity = entity.bind(report)(verify, oscar);
            tango = _closure1_slot10;
            golf = _closure1_slot0;
            options = _closure1_slot1;
            entity = 8;
            entity = options[entity];
            offset = golf.bind(report)(entity);
            entity = new Array(2);
            entity[0] = offset;
            offset = {};
            yankee = function(argFoo) { // Original name: APP_STATE_UPDATE
                zulu = _closure3_slot0;
                mike = zulu.handleAppStateUpdate;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            offset['APP_STATE_UPDATE'] = yankee;
            yankee = function() { // Original name: POST_CONNECTION_OPEN
                mike = _closure3_slot0;
                entity = mike.handlePostConnectionOpen;
                entity = entity.bind(mike)();
                return entity;
            };
            offset['POST_CONNECTION_OPEN'] = yankee;
            entity[1] = offset;
            entity = tango.bind(report)(verify, oscar, entity);
            var _closure3_slot0 = entity;
            tango = false;
            entity['isLowDisk'] = tango;
            tango = entity.refresh;
            tango = tango.bind(entity)();
            oscar = entity.waitFor;
            tango = 9;
            tango = options[tango];
            tango = golf.bind(report)(tango);
            tango = oscar.bind(entity)(tango);
            tango = global;
            tango = tango.setInterval;
            zulu = _closure1_slot9;
            mike = function() {
                mike = _closure3_slot0;
                entity = mike.refresh;
                entity = entity.bind(mike)();
                return entity;
            };
            mike = tango.bind(report)(mike, zulu);
            return entity;
        };
        var _closure2_slot1 = tango;
        mike = _closure1_slot7;
        zulu = undefined;
        entity = argFoo;
        entity = mike.bind(zulu)(tango, entity);
        mike = _closure1_slot4;
        report = {};
        entity = 'handlePostConnectionOpen';
        report['key'] = entity;
        entity = function() { // Original name: value
            mike = this;
            entity = mike.refresh;
            entity = entity.bind(mike)();
            entity = false;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(3);
        entity[0] = report;
        report = {};
        options = 'handleAppStateUpdate';
        report['key'] = options;
        options = function(argFoo) { // Original name: value
            _fun59004: for(var _fun59004_ip = 0; ; ) switch(_fun59004_ip) {
 0:
                mike = this;
                entity = argFoo;
                zulu = entity.state;
                entity = 'active';
                if(!(entity !== zulu)) { _fun59004_ip = 29; continue _fun59004 }
 19:
                entity = mike.refresh;
                entity = entity.bind(mike)();
 29:
                entity = false;
                return entity;
            }
        };
        report['value'] = options;
        entity[1] = report;
        report = {};
        options = 'refresh';
        report['key'] = options;
        options = _closure1_slot2;
        golf = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun59006: for(var _fun59006_ip = 0; ; ) switch(_fun59006_ip) {
 0:
                    StartGenerator();
                    report = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun59006_ip = 376; continue _fun59006 }
 13:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot1;
                    mike = 9;
                    mike = zulu[mike];
                    zulu = undefined;
                    tango = tango.bind(zulu)(mike);
                    mike = tango.database;
                    golf = mike.bind(tango)();
                    oscar = null;
                    tango = oscar == golf;
                    mike = undefined;
                    if(tango) { _fun59006_ip = 98; continue _fun59006 }
 59:
                    tango = golf.fsInfo;
                    options = tango.bind(golf)();
                    tango = oscar == options;
                    mike = undefined;
                    if(tango) { _fun59006_ip = 98; continue _fun59006 }
 80:
                    golf = options.catch;
                    tango = function(argFoo) {
                        tango = _closure1_slot8;
                        zulu = tango.warn;
                        mike = "couldn't get fs info";
                        entity = argFoo;
                        entity = zulu.bind(tango)(mike, entity);
                        return entity;
                    };
                    mike = golf.bind(options)(tango);
 98:
                    SaveGenerator(address=102);
 100:
                    return mike;
 102:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun59006_ip = 373; continue _fun59006 }
 111:
                    if(!(oscar != mike)) { _fun59006_ip = 370; continue _fun59006 }
 118:
                    tango = mike.fs;
                    golf = tango.available;
                    tango = 268435456;
                    golf = golf < tango;
                    if(golf) { _fun59006_ip = 178; continue _fun59006 }
 143:
                    tango = mike.fs;
                    options = tango.available;
                    tango = mike.database;
                    verify = tango.used;
                    tango = 3;
                    tango = tango * verify;
                    golf = options < tango;
 178:
                    if(golf) { _fun59006_ip = 216; continue _fun59006 }
 181:
                    tango = mike.fs;
                    options = tango.available;
                    tango = mike.database;
                    verify = tango.total;
                    tango = 2;
                    tango = tango * verify;
                    golf = options < tango;
 216:
                    tango = mike.fs;
                    options = tango.available;
                    tango = 805306368;
                    options = options > tango;
                    if(!options) { _fun59006_ip = 276; continue _fun59006 }
 241:
                    tango = mike.fs;
                    verify = tango.available;
                    tango = mike.database;
                    offset = tango.used;
                    tango = 4;
                    tango = tango * offset;
                    options = verify > tango;
 276:
                    if(!options) { _fun59006_ip = 314; continue _fun59006 }
 279:
                    tango = mike.fs;
                    verify = tango.available;
                    tango = mike.database;
                    offset = tango.total;
                    tango = 4;
                    tango = tango * offset;
                    options = verify > tango;
 314:
                    tango = !golf;
                    tango = !tango;
                    if(golf) { _fun59006_ip = 334; continue _fun59006 }
 323:
                    golf = !options;
                    if(options) { _fun59006_ip = 331; continue _fun59006 }
 329:
                    golf = null;
 331:
                    tango = golf;
 334:
                    oscar = oscar != tango;
                    if(!oscar) { _fun59006_ip = 351; continue _fun59006 }
 341:
                    golf = report.isLowDisk;
                    oscar = golf !== tango;
 351:
                    if(!oscar) { _fun59006_ip = 370; continue _fun59006 }
 354:
                    report['isLowDisk'] = tango;
                    tango = report.emitChange;
                    tango = tango.bind(report)();
 370:
                    return zulu;
 373:
                    return mike;
 376:
                    return entity;
                }
            };
            return entity;
        };
        golf = options.bind(zulu)(golf);
        var _closure2_slot0 = golf;
        oscar = function() { // Original name: refresh
            entity = undefined;
            tango = _closure2_slot0;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        report['value'] = oscar;
        entity[2] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    romeo = tango;
    mike = new romeo[mike](yankee);
    mike = mike instanceof Object ? mike : tango;
    tango = 11;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/app_database/stores/FileSystemStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();