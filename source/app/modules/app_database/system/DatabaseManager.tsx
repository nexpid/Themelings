// app/modules/app_database/system/DatabaseManager.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    entity = argCorge;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun38106: for(var _fun38106_ip = 0; ; ) switch(_fun38106_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun38106_ip = 46; continue _fun38106 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun38106_ip = 55; continue _fun38106 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun38106_ip = 343; continue _fun38106 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun38106_ip = 323; continue _fun38106 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun38106_ip = 283; continue _fun38106 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun38106_ip = 270; continue _fun38106 }
 110:
            golf = {};
            verify = golf.toString;
            golf = verify.call;
            yankee = golf.bind(verify)(zulu);
            offset = yankee.slice;
            verify = 8;
            golf = -1;
            verify = offset.bind(yankee)(verify, golf);
            golf = 'Object';
            golf = golf === verify;
            if(!golf) { _fun38106_ip = 163; continue _fun38106 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun38106_ip = 179; continue _fun38106 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun38106_ip = 249; continue _fun38106 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun38106_ip = 249; continue _fun38106 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun38106_ip = 234; continue _fun38106 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun38106_ip = 247; continue _fun38106 }
 234:
            verify = _closure1_slot13;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun38106_ip = 265; continue _fun38106;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun38106_ip = 283; continue _fun38106;
 270:
            golf = _closure1_slot13;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun38106_ip = 323; continue _fun38106 }
 289:
            golf = report.TypeError;
            report = golf.prototype;
            oscar = Object.create(report, {constructor: {value: golf}});
            foxtrot = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscar;
            report = new backup[golf](foxtrot, romeo);
            report = report instanceof Object ? report : oscar;
            throw report;
 323:
            if(!tango) { _fun38106_ip = 330; continue _fun38106 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun38107: for(var _fun38107_ip = 0; ; ) switch(_fun38107_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun38107_ip = 56; continue _fun38107 }
 20:
                    entity = {};
                    mike = false;
                    entity['done'] = mike;
                    zulu = _closure2_slot0;
                    mike = _closure2_slot1;
                    mike = parseFloat(mike);
                    tango = mike + 1;
                    _closure2_slot1 = tango;
                    mike = zulu[mike];
                    entity['value'] = mike;
                    _fun38107_ip = 67; continue _fun38107;
 56:
                    mike = {};
                    zulu = true;
                    mike['done'] = zulu;
                    entity = mike;
 67:
                    return entity;
                }
            };
            return entity;
 343:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun38108: for(var _fun38108_ip = 0; ; ) switch(_fun38108_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun38108_ip = 23; continue _fun38108 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun38108_ip = 33; continue _fun38108 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun38108_ip = 70; continue _fun38108 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun38108_ip = 55; continue _fun38108 }
 70:
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun38109: for(var _fun38109_ip = 0; ; ) switch(_fun38109_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot8;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot7;
            entity = _closure1_slot15;
            entity = entity.bind(zulu)();
            if(entity) { _fun38109_ip = 51; continue _fun38109 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun38109_ip = 92; continue _fun38109;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun38109_ip = 71; continue _fun38109 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot8;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun38110: for(var _fun38110_ip = 0; ; ) switch(_fun38110_ip) {
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
            _fun38110_ip = 74; continue _fun38110;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot15 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo) { // Original name: _databaseName
        entity = global;
        entity = entity.HermesInternal;
        zulu = entity.concat;
        mike = '@account.';
        entity = argFoo;
        entity = zulu.bind(mike)(entity);
        return entity;
    };
    var _closure1_slot16 = entity;
    entity = function() { // Original name: _trySpeculativelyOpenDatabaseAsync
        report = undefined;
        entity = undefined;
        tango = _closure1_slot4;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun38116: for(var _fun38116_ip = 0; ; ) switch(_fun38116_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun38116_ip = 152; continue _fun38116 }
 10:
                    oscar = undefined;
                    zulu = undefined;
                    report = _closure1_slot16;
                    tango = argFoo;
                    verify = report.bind(oscar)(tango);
                    zulu = verify;
                    golf = _closure1_slot11;
                    report = golf.verbose;
                    tango = global;
                    tango = tango.HermesInternal;
                    options = tango.concat;
                    tango = 'speculatively opening ';
                    tango = options.bind(tango)(verify);
                    tango = report.bind(golf)(tango);
 71: // try_start_0
                    report = _closure1_slot0;
                    golf = _closure1_slot3;
                    tango = 10;
                    tango = golf[tango];
                    tango = report.bind(oscar)(tango);
                    report = tango.Database;
                    tango = report.open;
                    zulu = tango.bind(report)(zulu);
                    SaveGenerator(address=112);
 110:
                    return zulu;
 112:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tango) { _fun38116_ip = 121; continue _fun38116 }
 118: // try_end0
                    return zulu;
 121:
                    return zulu;
 124: // catch_target0
                    CatchBlockStart(arg_register=4);
                    tango = _closure1_slot11;
                    zulu = tango.warn;
                    mike = "couldn't speculatively open database.";
                    mike = zulu.bind(tango)(mike, report);
                    mike = null;
                    return mike;
 152:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot17 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot17 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot10 = tango;
    tango = 7;
    tango = oscar[tango];
    verify = golf.bind(entity)(tango);
    tango = verify.prototype;
    options = Object.create(tango, {constructor: {value: verify}});
    romeo = 'DatabaseManager';
    foxtrot = options;
    tango = new foxtrot[verify](romeo, yankee);
    tango = tango instanceof Object ? tango : options;
    var _closure1_slot11 = tango;
    tango = 11;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    tango = tango.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: DatabaseManager
            oscar = this;
            entity = _closure1_slot5;
            report = _closure2_slot1;
            tango = undefined;
            entity = entity.bind(tango)(oscar, report);
            zulu = _closure1_slot14;
            offset = _closure1_slot1;
            verify = _closure1_slot3;
            golf = 8;
            entity = verify[golf];
            offset = offset.bind(tango)(entity);
            entity = new Array(3);
            entity[0] = offset;
            offset = {};
            yankee = function(argFoo) { // Original name: CLEAR_CACHES
                zulu = _closure3_slot0;
                mike = zulu.handleClearCaches;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            offset['CLEAR_CACHES'] = yankee;
            yankee = function() { // Original name: CONNECTION_CLOSED
                mike = _closure3_slot0;
                entity = mike.handleAuthenticationStoreChanged;
                entity = entity.bind(mike)();
                return entity;
            };
            offset['CONNECTION_CLOSED'] = yankee;
            yankee = function() { // Original name: CONNECTION_OPEN
                mike = _closure3_slot0;
                entity = mike.handleConnectionOpen;
                entity = entity.bind(mike)();
                return entity;
            };
            offset['CONNECTION_OPEN'] = yankee;
            yankee = function() { // Original name: LOGOUT
                mike = _closure3_slot0;
                entity = mike.handleAuthenticationStoreChanged;
                entity = entity.bind(mike)();
                return entity;
            };
            offset['LOGOUT'] = yankee;
            entity[1] = offset;
            options = _closure1_slot0;
            golf = verify[golf];
            golf = options.bind(tango)(golf);
            golf = golf.DispatchBand;
            golf = golf.Early;
            entity[2] = golf;
            entity = zulu.bind(tango)(oscar, report, entity);
            var _closure3_slot0 = entity;
            mike = global;
            mike = mike.Map;
            zulu = mike.prototype;
            zulu = Object.create(zulu, {constructor: {value: mike}});
            kilo = zulu;
            mike = new kilo[mike](backup);
            mike = mike instanceof Object ? mike : zulu;
            entity['databases'] = mike;
            mike = null;
            entity['activeUserId'] = mike;
            mike = false;
            entity['preventWritingCachesAgainThisSession'] = mike;
            return entity;
        };
        var _closure2_slot1 = tango;
        mike = _closure1_slot9;
        zulu = undefined;
        entity = argFoo;
        entity = mike.bind(zulu)(tango, entity);
        mike = _closure1_slot6;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            report = this;
            var _closure3_slot0 = report;
            zulu = report.waitFor;
            tango = _closure1_slot10;
            zulu = zulu.bind(report)(tango);
            oscar = report.carefullySpeculativelyOpen;
            golf = _closure1_slot2;
            zulu = _closure1_slot3;
            entity = 9;
            zulu = zulu[entity];
            entity = undefined;
            golf = golf.bind(entity)(zulu);
            zulu = golf.getUserId;
            zulu = zulu.bind(golf)();
            zulu = oscar.bind(report)(zulu);
            zulu = report.handleAuthenticationStoreChanged;
            zulu = zulu.bind(report)();
            zulu = tango.addChangeListener;
            mike = function() {
                mike = _closure3_slot0;
                entity = mike.handleAuthenticationStoreChanged;
                entity = entity.bind(mike)();
                return entity;
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        report['value'] = entity;
        entity = new Array(10);
        entity[0] = report;
        report = {};
        options = 'databaseName';
        report['key'] = options;
        options = function(argFoo) { // Original name: value
            zulu = _closure1_slot16;
            mike = undefined;
            entity = argFoo;
            entity = zulu.bind(mike)(entity);
            return entity;
        };
        report['value'] = options;
        entity[1] = report;
        report = {};
        options = 'database';
        report['key'] = options;
        options = function(argFoo) { // Original name: value
            _fun38126: for(var _fun38126_ip = 0; ; ) switch(_fun38126_ip) {
 0:
                report = argFoo;
                tango = null;
                mike = tango != report;
                entity = null;
                if(!mike) { _fun38126_ip = 45; continue _fun38126 }
 14:
                mike = this;
                zulu = mike.databases;
                mike = zulu.get;
                mike = mike.bind(zulu)(report);
                zulu = tango != mike;
                entity = null;
                if(!zulu) { _fun38126_ip = 45; continue _fun38126 }
 42:
                entity = mike;
 45:
                return entity;
            }
        };
        report['value'] = options;
        entity[2] = report;
        report = {};
        options = 'carefullyOpenDatabase';
        report['key'] = options;
        options = function(argFoo) { // Original name: value
            _fun38127: for(var _fun38127_ip = 0; ; ) switch(_fun38127_ip) {
 0:
                zulu = argFoo;
                mike = this;
                entity = mike.preventWritingCachesAgainThisSession;
                if(entity) { _fun38127_ip = 154; continue _fun38127 }
 18:
                entity = null;
                if(!(entity != zulu)) { _fun38127_ip = 141; continue _fun38127 }
 24:
                tango = mike.databases;
                entity = tango.has;
                entity = entity.bind(tango)(zulu);
                if(entity) { _fun38127_ip = 141; continue _fun38127 }
 43:
                tango = function(argFoo) { // Original name: tryOpenDatabase
                    _fun38128: for(var _fun38128_ip = 0; ; ) switch(_fun38128_ip) {
 0:
                        zulu = _closure1_slot16;
                        offset = undefined;
                        mike = argFoo;
                        oscar = zulu.bind(offset)(mike);
                        var _closure4_slot0 = oscar;
                        tango = _closure1_slot11;
                        zulu = tango.verbose;
                        verify = global;
                        mike = verify.HermesInternal;
                        report = mike.concat;
                        mike = 'synchronously opening ';
                        mike = report.bind(mike)(oscar);
                        mike = zulu.bind(tango)(mike);
                        oscar = 50;
                        golf = function() {
                            zulu = _closure1_slot0;
                            mike = _closure1_slot3;
                            entity = 10;
                            mike = mike[entity];
                            entity = undefined;
                            entity = zulu.bind(entity)(mike);
                            tango = entity.Database;
                            zulu = tango.openSyncUnsafe;
                            mike = _closure4_slot0;
                            entity = {};
                            report = true;
                            entity['invalidateDisabledHandles'] = report;
                            entity = zulu.bind(tango)(mike, entity);
                            return entity;
                        };
                        options = 0;
                        report = 'tryUntil ';
 78: // try_start_0
                        entity = golf;
                        entity = entity.bind(offset)();
 85: // try_end0
                        _fun38128_ip = 138; continue _fun38128;
 87: // catch_target0
                        CatchBlockStart(arg_register=13);
                        foxtrot = _closure1_slot11;
                        romeo = foxtrot.error;
                        mike = options;
                        zulu = verify.HermesInternal;
                        zulu = zulu.concat;
                        zulu = zulu.bind(report)(mike);
                        zulu = romeo.bind(foxtrot)(zulu, backup);
                        zulu = mike + 1;
                        options = zulu;
                        mike = oscar;
                        entity = null;
                        if(zulu < mike) { _fun38128_ip = 78; continue _fun38128 }
 138:
                        return entity;
                    }
                };
                entity = undefined;
                report = tango.bind(entity)(zulu);
                oscar = _closure1_slot11;
                tango = oscar.verbose;
                entity = global;
                entity = entity.HermesInternal;
                verify = entity.concat;
                backup = 'added database (';
                romeo = ' → ';
                offset = ')';
                foxtrot = zulu;
                yankee = report;
                entity = backup[verify](foxtrot, romeo, yankee, offset, verify);
                entity = tango.bind(oscar)(entity);
                tango = mike.databases;
                entity = tango.set;
                entity = entity.bind(tango)(zulu, report);
                entity = mike.emitChange;
                entity = entity.bind(mike)();
 141:
                entity = mike.database;
                entity = entity.bind(mike)(zulu);
                return entity;
 154:
                zulu = _closure1_slot11;
                mike = zulu.verbose;
                entity = 'Not opening database because caches have been manually cleared.';
                entity = mike.bind(zulu)(entity);
                entity = null;
                return entity;
            }
        };
        report['value'] = options;
        entity[3] = report;
        report = {};
        options = 'replaceDisableAllDatabases';
        report['key'] = options;
        options = function(argFoo) { // Original name: value
            _fun38130: for(var _fun38130_ip = 0; ; ) switch(_fun38130_ip) {
 0:
                golf = argFoo;
                zulu = this;
                report = _closure1_slot11;
                tango = report.info;
                mike = global;
                mike = mike.HermesInternal;
                options = mike.concat;
                oscar = 'disabling and nulling all databases (reason: ';
                mike = ')';
                mike = options.bind(oscar)(golf, mike);
                mike = tango.bind(report)(mike);
                tango = _closure1_slot12;
                mike = zulu.databases;
                entity = mike.keys;
                mike = entity.bind(mike)();
                entity = undefined;
                oscar = tango.bind(entity)(mike);
                tango = oscar.bind(entity)();
                mike = tango.done;
                report = null;
                if(mike) { _fun38130_ip = 175; continue _fun38130 }
 93:
                verify = tango.value;
                options = zulu.databases;
                mike = options.get;
                options = mike.bind(options)(verify);
                if(!(report != options)) { _fun38130_ip = 129; continue _fun38130 }
 118:
                mike = options.disable;
                mike = mike.bind(options)(golf);
 129:
                if(!(report != options)) { _fun38130_ip = 143; continue _fun38130 }
 133:
                mike = options.close;
                mike = mike.bind(options)();
 143:
                options = zulu.databases;
                mike = options.set;
                mike = mike.bind(options)(verify, report);
                options = oscar.bind(entity)();
                mike = options.done;
                tango = options;
                if(!mike) { _fun38130_ip = 93; continue _fun38130 }
 175:
                mike = zulu.emitChange;
                mike = mike.bind(zulu)();
                return entity;
            }
        };
        report['value'] = options;
        entity[4] = report;
        report = {};
        options = 'remove';
        report['key'] = options;
        options = function(argFoo) { // Original name: value
            _fun38131: for(var _fun38131_ip = 0; ; ) switch(_fun38131_ip) {
 0:
                tango = argFoo;
                mike = this;
                zulu = mike.databases;
                entity = zulu.get;
                zulu = entity.bind(zulu)(tango);
                oscar = _closure1_slot11;
                report = oscar.log;
                entity = global;
                entity = entity.HermesInternal;
                verify = entity.concat;
                backup = 'removing database (user: ';
                romeo = ', database: ';
                offset = ')';
                foxtrot = tango;
                yankee = zulu;
                entity = backup[verify](foxtrot, romeo, yankee, offset, verify);
                entity = report.bind(oscar)(entity);
                entity = null;
                if(!(entity != zulu)) { _fun38131_ip = 95; continue _fun38131 }
 85:
                entity = zulu.close;
                entity = entity.bind(zulu)();
 95:
                zulu = mike.databases;
                entity = zulu.delete;
                entity = entity.bind(zulu)(tango);
                entity = mike.emitChange;
                entity = entity.bind(mike)();
                entity = undefined;
                return entity;
            }
        };
        report['value'] = options;
        entity[5] = report;
        report = {};
        options = 'handleClearCaches';
        report['key'] = options;
        options = function(argFoo) { // Original name: value
            _fun38132: for(var _fun38132_ip = 0; ; ) switch(_fun38132_ip) {
 0:
                entity = argFoo;
                zulu = this;
                mike = entity.preventWritingCachesAgainThisSession;
                if(!mike) { _fun38132_ip = 23; continue _fun38132 }
 15:
                mike = true;
                zulu['preventWritingCachesAgainThisSession'] = mike;
 23:
                mike = zulu.replaceDisableAllDatabases;
                oscar = entity.reason;
                entity = global;
                entity = entity.HermesInternal;
                report = entity.concat;
                tango = 'DatabaseManager (';
                entity = ')';
                entity = report.bind(tango)(oscar, entity);
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            }
        };
        report['value'] = options;
        entity[6] = report;
        report = {};
        options = 'handleConnectionOpen';
        report['key'] = options;
        options = function() { // Original name: value
            _fun38133: for(var _fun38133_ip = 0; ; ) switch(_fun38133_ip) {
 0:
                tango = this;
                mike = _closure1_slot10;
                entity = mike.getId;
                zulu = entity.bind(mike)();
                mike = tango.databases;
                entity = mike.get;
                golf = entity.bind(mike)(zulu);
                mike = null;
                options = mike == golf;
                entity = undefined;
                oscar = undefined;
                if(options) { _fun38133_ip = 58; continue _fun38133 }
 49:
                options = golf.state;
                oscar = options.bind(golf)();
 58:
                mike = mike == golf;
                if(!mike) { _fun38133_ip = 101; continue _fun38133 }
 65:
                golf = _closure1_slot0;
                options = _closure1_slot3;
                report = 10;
                report = options[report];
                report = golf.bind(entity)(report);
                report = report.DatabaseState;
                report = report.Open;
                mike = oscar !== report;
 101:
                if(!mike) { _fun38133_ip = 115; continue _fun38133 }
 104:
                mike = tango.remove;
                mike = mike.bind(tango)(zulu);
 115:
                mike = tango.carefullyOpenDatabase;
                mike = mike.bind(tango)(zulu);
                return entity;
            }
        };
        report['value'] = options;
        entity[7] = report;
        report = {};
        options = 'handleAuthenticationStoreChanged';
        report['key'] = options;
        options = function() { // Original name: value
            _fun38134: for(var _fun38134_ip = 0; ; ) switch(_fun38134_ip) {
 0:
                entity = this;
                zulu = _closure1_slot10;
                mike = zulu.getId;
                mike = mike.bind(zulu)();
                zulu = entity.activeUserId;
                if(!(mike !== zulu)) { _fun38134_ip = 183; continue _fun38134 }
 33:
                oscar = entity.databases;
                report = oscar.get;
                oscar = report.bind(oscar)(zulu);
                options = _closure1_slot11;
                golf = options.verbose;
                report = global;
                report = report.HermesInternal;
                yankee = report.concat;
                result = 'active user changed (now: ';
                verify = ', was: ';
                romeo = ')';
                output = mike;
                sizing = verify;
                kilo = zulu;
                backup = verify;
                foxtrot = oscar;
                report = result[yankee](output, sizing, kilo, backup, foxtrot, romeo, yankee);
                report = golf.bind(options)(report);
                report = null;
                if(!(report != oscar)) { _fun38134_ip = 128; continue _fun38134 }
 118:
                report = oscar.close;
                report = report.bind(oscar)();
 128:
                oscar = _closure1_slot2;
                report = _closure1_slot3;
                tango = 9;
                report = report[tango];
                tango = undefined;
                report = oscar.bind(tango)(report);
                tango = report.setUserId;
                tango = tango.bind(report)(mike);
                entity['activeUserId'] = mike;
                mike = entity.databases;
                entity = mike.delete;
                entity = entity.bind(mike)(zulu);
 183:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = options;
        entity[8] = report;
        report = {};
        options = 'carefullySpeculativelyOpen';
        report['key'] = options;
        options = _closure1_slot4;
        golf = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun38136: for(var _fun38136_ip = 0; ; ) switch(_fun38136_ip) {
 0:
                    StartGenerator();
                    offset = argFoo;
                    report = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun38136_ip = 278; continue _fun38136 }
 16:
                    mike = report.preventWritingCachesAgainThisSession;
                    if(mike) { _fun38136_ip = 249; continue _fun38136 }
 28:
                    zulu = null;
                    if(!(zulu != offset)) { _fun38136_ip = 273; continue _fun38136 }
 37:
                    tango = function() { // Original name: trySpeculativelyOpenDatabaseAsync
                        entity = undefined;
                        tango = _closure1_slot17;
                        zulu = tango.apply;
                        entity = arguments;
                        mike = entity;
                        entity = this;
                        entity = zulu.bind(tango)(entity, mike);
                        return entity;
                    };
                    mike = undefined;
                    mike = tango.bind(mike)(offset);
                    SaveGenerator(address=55);
 53:
                    return mike;
 55:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun38136_ip = 246; continue _fun38136 }
 64:
                    if(!(zulu != mike)) { _fun38136_ip = 173; continue _fun38136 }
 68:
                    oscar = report.databases;
                    tango = oscar.has;
                    tango = tango.bind(oscar)(offset);
                    if(tango) { _fun38136_ip = 173; continue _fun38136 }
 87:
                    golf = _closure1_slot11;
                    oscar = golf.verbose;
                    tango = global;
                    tango = tango.HermesInternal;
                    yankee = tango.concat;
                    sizing = 'added speculative database (';
                    backup = ' → ';
                    romeo = ')';
                    kilo = offset;
                    foxtrot = mike;
                    tango = sizing[yankee](kilo, backup, foxtrot, romeo, yankee);
                    tango = oscar.bind(golf)(tango);
                    oscar = report.databases;
                    tango = oscar.set;
                    tango = tango.bind(oscar)(offset, mike);
                    tango = report.emitChange;
                    tango = tango.bind(report)();
                    _fun38136_ip = 273; continue _fun38136;
 173:
                    oscar = _closure1_slot11;
                    report = oscar.verbose;
                    tango = global;
                    tango = tango.HermesInternal;
                    verify = tango.concat;
                    sizing = 'discarding speculative database (';
                    backup = ' → ';
                    romeo = ')';
                    kilo = offset;
                    foxtrot = mike;
                    tango = sizing[verify](kilo, backup, foxtrot, romeo, yankee);
                    tango = report.bind(oscar)(tango);
                    if(!(zulu != mike)) { _fun38136_ip = 273; continue _fun38136 }
 234:
                    zulu = mike.close;
                    zulu = zulu.bind(mike)();
                    _fun38136_ip = 273; continue _fun38136;
 246:
                    return mike;
 249:
                    tango = _closure1_slot11;
                    zulu = tango.verbose;
                    mike = 'Not opening database because caches have been manually cleared.';
                    mike = zulu.bind(tango)(mike);
 273:
                    mike = undefined;
                    return mike;
 278:
                    return entity;
                }
            };
            return entity;
        };
        golf = options.bind(zulu)(golf);
        var _closure2_slot0 = golf;
        oscar = function() { // Original name: carefullySpeculativelyOpen
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
        entity[9] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    foxtrot = tango;
    mike = new foxtrot[mike](romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 12;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/app_database/system/DatabaseManager.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();