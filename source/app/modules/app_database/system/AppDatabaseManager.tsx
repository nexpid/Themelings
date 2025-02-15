// app/modules/app_database/system/AppDatabaseManager.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun60718: for(var _fun60718_ip = 0; ; ) switch(_fun60718_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun60718_ip = 46; continue _fun60718 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun60718_ip = 55; continue _fun60718 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun60718_ip = 343; continue _fun60718 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun60718_ip = 323; continue _fun60718 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun60718_ip = 283; continue _fun60718 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun60718_ip = 270; continue _fun60718 }
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
            if(!golf) { _fun60718_ip = 163; continue _fun60718 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun60718_ip = 179; continue _fun60718 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun60718_ip = 249; continue _fun60718 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun60718_ip = 249; continue _fun60718 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun60718_ip = 234; continue _fun60718 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun60718_ip = 247; continue _fun60718 }
 234:
            verify = _closure1_slot10;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun60718_ip = 265; continue _fun60718;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun60718_ip = 283; continue _fun60718;
 270:
            golf = _closure1_slot10;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun60718_ip = 323; continue _fun60718 }
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
            if(!tango) { _fun60718_ip = 330; continue _fun60718 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun60719: for(var _fun60719_ip = 0; ; ) switch(_fun60719_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun60719_ip = 56; continue _fun60719 }
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
                    _fun60719_ip = 67; continue _fun60719;
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
    var _closure1_slot9 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun60720: for(var _fun60720_ip = 0; ; ) switch(_fun60720_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun60720_ip = 23; continue _fun60720 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun60720_ip = 33; continue _fun60720 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun60720_ip = 70; continue _fun60720 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun60720_ip = 55; continue _fun60720 }
 70:
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    tango = global;
    offset = tango.Object;
    verify = offset.defineProperty;
    golf = {};
    entity = true;
    golf['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, golf);
    entity = 0;
    golf = oscar[entity];
    entity = undefined;
    golf = options.bind(entity)(golf);
    var _closure1_slot3 = golf;
    golf = 1;
    golf = oscar[golf];
    golf = options.bind(entity)(golf);
    var _closure1_slot4 = golf;
    golf = 2;
    golf = oscar[golf];
    golf = options.bind(entity)(golf);
    var _closure1_slot5 = golf;
    golf = 3;
    golf = oscar[golf];
    golf = options.bind(entity)(golf);
    var _closure1_slot6 = golf;
    golf = 4;
    golf = oscar[golf];
    verify = options.bind(entity)(golf);
    golf = verify.prototype;
    options = Object.create(golf, {constructor: {value: verify}});
    foxtrot = 'AppDatabaseManager';
    backup = options;
    golf = new backup[verify](foxtrot, romeo);
    golf = golf instanceof Object ? golf : options;
    var _closure1_slot7 = golf;
    options = tango.Set;
    tango = options.prototype;
    golf = Object.create(tango, {constructor: {value: options}});
    foxtrot = ['MESSAGE_CREATE'];
    backup = golf;
    tango = new backup[options](foxtrot, romeo);
    tango = tango instanceof Object ? tango : golf;
    var _closure1_slot8 = tango;
    mike = function() {
        report = function(argFoo, argBar, argBaz) { // Original name: AppDatabaseManager
            yankee = argFoo;
            report = argBaz;
            mike = this;
            var _closure3_slot0 = mike;
            oscar = _closure1_slot4;
            verify = _closure2_slot0;
            entity = undefined;
            oscar = oscar.bind(entity)(mike, verify);
            oscar = verify.computeEntries;
            options = oscar.bind(verify)(yankee, report);
            golf = _closure1_slot3;
            oscar = 2;
            offset = golf.bind(entity)(options, oscar);
            oscar = 0;
            golf = offset[oscar];
            options = 1;
            options = offset[options];
            mike['name'] = yankee;
            mike['entries'] = options;
            mike['actions'] = golf;
            golf = null;
            mike['lastDatabase'] = golf;
            romeo = verify.register;
            golf = '_CLEAR_CACHES';
            result = yankee + golf;
            output = ['CLEAR_CACHES'];
            sizing = new Array(0);
            kilo = function() {
                _fun60723: for(var _fun60723_ip = 0; ; ) switch(_fun60723_ip) {
 0:
                    zulu = _closure1_slot9;
                    entity = _closure3_slot0;
                    mike = entity.entries;
                    entity = undefined;
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.bind(entity)();
                    mike = zulu.done;
                    if(mike) { _fun60723_ip = 69; continue _fun60723 }
 39:
                    report = zulu.value;
                    mike = report.reset;
                    mike = mike.bind(report)();
                    report = tango.bind(entity)();
                    mike = report.done;
                    zulu = report;
                    if(!mike) { _fun60723_ip = 39; continue _fun60723 }
 69:
                    return entity;
                }
            };
            echo = verify;
            tango = echo[romeo](result, output, sizing, kilo, backup);
            options = verify.register;
            golf = mike.actions;
            tango = golf.keys;
            output = tango.bind(golf)();
            golf = new Array(0);
            result = golf;
            sizing = 0;
            tango = arraySpread(result, output, sizing);
            oscar = mike.handleAction;
            tango = oscar.bind;
            kilo = tango.bind(oscar)(mike);
            sizing = argBar;
            echo = verify;
            result = yankee;
            output = golf;
            tango = echo[options](result, output, sizing, kilo, backup);
            tango = _closure1_slot7;
            zulu = tango.verbose;
            sizing = report.length;
            mike = mike.actions;
            backup = mike.size;
            mike = global;
            mike = mike.HermesInternal;
            options = mike.concat;
            echo = '';
            output = ' created with ';
            kilo = ' modules, ';
            foxtrot = ' distinct actions.';
            result = yankee;
            mike = echo[options](result, output, sizing, kilo, backup, foxtrot, romeo);
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        var _closure2_slot0 = report;
        tango = _closure1_slot5;
        entity = {};
        mike = 'handleAction';
        entity['key'] = mike;
        mike = function(argFoo) { // Original name: value
            tango = argFoo;
            zulu = this;
            mike = zulu.validateInDev;
            entity = tango.type;
            entity = mike.bind(zulu)(entity);
            report = _closure1_slot6;
            mike = report.getId;
            report = mike.bind(report)();
            oscar = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 5;
            mike = mike[entity];
            entity = undefined;
            mike = oscar.bind(entity)(mike);
            entity = mike.database;
            mike = entity.bind(mike)(report);
            entity = zulu.resetModules;
            entity = entity.bind(zulu)(tango, mike);
            entity = zulu.executeModules;
            entity = entity.bind(zulu)(tango, mike);
            entity = false;
            return entity;
        };
        entity['value'] = mike;
        zulu = new Array(4);
        zulu[0] = entity;
        entity = {};
        mike = 'resetModules';
        entity['key'] = mike;
        mike = function(argFoo, argBar) { // Original name: value
            _fun60725: for(var _fun60725_ip = 0; ; ) switch(_fun60725_ip) {
 0:
                mike = argBar;
                entity = this;
                zulu = entity.lastDatabase;
                if(!(mike !== zulu)) { _fun60725_ip = 160; continue _fun60725 }
 19:
                oscar = _closure1_slot7;
                report = oscar.verbose;
                result = entity.lastDatabase;
                tango = argFoo;
                backup = tango.type;
                tango = global;
                tango = tango.HermesInternal;
                offset = tango.concat;
                echo = 'database has changed (was: ';
                output = ', now: ';
                kilo = ', action: ';
                foxtrot = '). resetting modules.';
                sizing = mike;
                tango = echo[offset](result, output, sizing, kilo, backup, foxtrot, romeo);
                tango = report.bind(oscar)(tango);
                tango = _closure1_slot9;
                zulu = entity.entries;
                oscar = undefined;
                report = tango.bind(oscar)(zulu);
                tango = report.bind(oscar)();
                zulu = tango.done;
                if(zulu) { _fun60725_ip = 154; continue _fun60725 }
 124:
                golf = tango.value;
                zulu = golf.reset;
                zulu = zulu.bind(golf)();
                golf = report.bind(oscar)();
                zulu = golf.done;
                tango = golf;
                if(!zulu) { _fun60725_ip = 124; continue _fun60725 }
 154:
                entity['lastDatabase'] = mike;
 160:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = mike;
        zulu[1] = entity;
        entity = {};
        mike = 'executeModules';
        entity['key'] = mike;
        mike = function(argFoo, argBar) { // Original name: value
            _fun60726: for(var _fun60726_ip = 0; ; ) switch(_fun60726_ip) {
 0:
                mike = argFoo;
                golf = argBar;
                var _closure3_slot0 = mike;
                var _closure3_slot1 = golf;
                kilo = mike.type;
                entity = this;
                tango = entity.actions;
                entity = tango.get;
                tango = entity.bind(tango)(kilo);
                var _closure3_slot2 = tango;
                oscar = null;
                report = oscar == golf;
                entity = undefined;
                backup = undefined;
                if(report) { _fun60726_ip = 66; continue _fun60726 }
 57:
                report = golf.state;
                backup = report.bind(golf)();
 66:
                if(!(oscar != tango)) { _fun60726_ip = 313; continue _fun60726 }
 73:
                report = tango.length;
                tango = 0;
                if(!(tango !== report)) { _fun60726_ip = 313; continue _fun60726 }
 87:
                if(!(oscar != golf)) { _fun60726_ip = 130; continue _fun60726 }
 91:
                options = _closure1_slot0;
                verify = _closure1_slot2;
                report = 6;
                report = verify[report];
                report = options.bind(entity)(report);
                report = report.DatabaseState;
                report = report.Open;
                if(!(backup !== report)) { _fun60726_ip = 198; continue _fun60726 }
 130:
                verify = _closure1_slot7;
                options = verify.verbose;
                report = global;
                report = report.HermesInternal;
                foxtrot = report.concat;
                control = 'no usable database; skipping action (type: ';
                update = ', database: ';
                result = ', state: ';
                sizing = ')';
                source = kilo;
                echo = golf;
                output = backup;
                report = control[foxtrot](source, update, echo, result, output, sizing, kilo);
                report = options.bind(verify)(report);
                _fun60726_ip = 313; continue _fun60726;
 198:
                report = golf.transaction;
                verify = _closure1_slot8;
                options = verify.has;
                tango = mike.type;
                tango = options.bind(verify)(tango);
                oscar = null;
                if(tango) { _fun60726_ip = 257; continue _fun60726 }
 228:
                verify = mike.type;
                tango = global;
                tango = tango.HermesInternal;
                options = tango.concat;
                tango = 'Dispatch ';
                oscar = options.bind(tango)(verify);
 257:
                tango = function(argFoo) {
                    mike = argFoo;
                    var _closure4_slot0 = mike;
                    zulu = _closure3_slot2;
                    mike = zulu.forEach;
                    entity = function(argFoo) {
                        tango = argFoo;
                        zulu = tango.execute;
                        mike = _closure3_slot0;
                        entity = _closure4_slot0;
                        entity = zulu.bind(tango)(mike, entity);
                        return entity;
                    };
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                report = report.bind(golf)(tango, oscar);
                tango = report.catch;
                zulu = function(argFoo) {
                    report = _closure2_slot0;
                    tango = report.handleException;
                    zulu = _closure3_slot1;
                    mike = _closure3_slot0;
                    entity = argFoo;
                    entity = tango.bind(report)(zulu, mike, entity);
                    return entity;
                };
                tango = tango.bind(report)(zulu);
                report = mike.type;
                zulu = 'WRITE_CACHES';
                if(!(zulu === report)) { _fun60726_ip = 313; continue _fun60726 }
 297:
                zulu = mike.promisesToWaitOn;
                mike = zulu.push;
                mike = mike.bind(zulu)(tango);
 313:
                return entity;
            }
        };
        entity['value'] = mike;
        zulu[2] = entity;
        entity = {};
        mike = 'validateInDev';
        entity['key'] = mike;
        mike = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        entity['value'] = mike;
        zulu[3] = entity;
        entity = {};
        mike = 'handleException';
        entity['key'] = mike;
        mike = function(argFoo, argBar, argBaz) { // Original name: value
            oscar = argBaz;
            report = _closure1_slot7;
            tango = report.info;
            zulu = oscar.stack;
            mike = 'disabling database · error encountered during dispatch';
            mike = tango.bind(report)(mike, oscar, zulu);
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 7;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            report = 'RESET_SOCKET';
            mike['type'] = report;
            report = {};
            report['error'] = oscar;
            oscar = argBar;
            verify = oscar.type;
            oscar = global;
            oscar = oscar.HermesInternal;
            options = oscar.concat;
            golf = 'AppDatabaseManager(';
            oscar = ')';
            oscar = options.bind(golf)(verify, oscar);
            report['action'] = oscar;
            oscar = true;
            report['clearCache'] = oscar;
            mike['args'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(3);
        mike[0] = entity;
        entity = {};
        golf = 'computeEntries';
        entity['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            _fun60732: for(var _fun60732_ip = 0; ; ) switch(_fun60732_ip) {
 0:
                tango = argBar;
                mike = argFoo;
                var _closure3_slot0 = mike;
                mike = global;
                mike = mike.Map;
                zulu = mike.prototype;
                zulu = Object.create(zulu, {constructor: {value: mike}});
                sizing = zulu;
                mike = new sizing[mike](kilo);
                zulu = mike instanceof Object ? mike : zulu;
                mike = tango.map;
                entity = function(argFoo) {
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 8;
                    mike = mike[entity];
                    entity = undefined;
                    entity = zulu.bind(entity)(mike);
                    tango = entity.Entry;
                    oscar = _closure3_slot0;
                    entity = tango.prototype;
                    mike = Object.create(entity, {constructor: {value: tango}});
                    report = argFoo;
                    golf = mike;
                    entity = new golf[tango](oscar, report, tango);
                    entity = entity instanceof Object ? entity : mike;
                    return entity;
                };
                mike = mike.bind(tango)(entity);
                report = zulu.set;
                tango = 'LOGOUT';
                entity = new Array(0);
                entity = report.bind(zulu)(tango, entity);
                report = zulu.set;
                tango = 'LOGIN_RESET';
                entity = new Array(0);
                entity = report.bind(zulu)(tango, entity);
                entity = _closure1_slot9;
                golf = undefined;
                oscar = entity.bind(golf)(mike);
                tango = oscar.bind(golf)();
                entity = tango.done;
                report = tango;
                tango = undefined;
                if(entity) { _fun60732_ip = 242; continue _fun60732 }
 124:
                yankee = report.value;
                verify = _closure1_slot9;
                entity = yankee.actions;
                offset = verify.bind(golf)(entity);
                verify = offset.bind(golf)();
                entity = verify.done;
                if(entity) { _fun60732_ip = 227; continue _fun60732 }
 156:
                romeo = verify.value;
                entity = zulu.has;
                entity = entity.bind(zulu)(romeo);
                if(entity) { _fun60732_ip = 189; continue _fun60732 }
 174:
                foxtrot = zulu.set;
                entity = new Array(0);
                entity = foxtrot.bind(zulu)(romeo, entity);
 189:
                entity = zulu.get;
                foxtrot = entity.bind(zulu)(romeo);
                entity = foxtrot.push;
                entity = entity.bind(foxtrot)(yankee);
                foxtrot = offset.bind(golf)();
                entity = foxtrot.done;
                verify = foxtrot;
                tango = romeo;
                if(!entity) { _fun60732_ip = 156; continue _fun60732 }
 227:
                verify = oscar.bind(golf)();
                entity = verify.done;
                report = verify;
                if(!entity) { _fun60732_ip = 124; continue _fun60732 }
 242:
                entity = new Array(2);
                entity[0] = zulu;
                entity[1] = mike;
                return entity;
            }
        };
        entity['value'] = golf;
        mike[1] = entity;
        entity = {};
        golf = 'register';
        entity['key'] = golf;
        oscar = function(argFoo, argBar, argBaz, argCorge) { // Original name: value
            foxtrot = argBar;
            mike = argCorge;
            var _closure3_slot0 = mike;
            tango = _closure1_slot1;
            report = _closure1_slot2;
            mike = 7;
            golf = report[mike];
            zulu = undefined;
            offset = tango.bind(zulu)(golf);
            verify = offset.register;
            golf = global;
            yankee = golf.Object;
            options = yankee.fromEntries;
            romeo = foxtrot.map;
            golf = function(argFoo) {
                entity = new Array(2);
                mike = argFoo;
                entity[0] = mike;
                mike = _closure3_slot0;
                entity[1] = mike;
                return entity;
            };
            golf = romeo.bind(foxtrot)(golf);
            sizing = options.bind(yankee)(golf);
            golf = _closure1_slot0;
            oscar = report[mike];
            oscar = golf.bind(zulu)(oscar);
            oscar = oscar.DispatchBand;
            backup = oscar.Database;
            output = argFoo;
            kilo = function() {
                entity = undefined;
                return entity;
            };
            result = offset;
            entity = result[verify](output, sizing, kilo, backup, foxtrot);
            mike = report[mike];
            tango = tango.bind(zulu)(mike);
            zulu = tango.addDependencies;
            mike = argBaz;
            mike = zulu.bind(tango)(entity, mike);
            return entity;
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = undefined;
        entity = tango.bind(entity)(report, zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = 9;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/app_database/system/AppDatabaseManager.tsx';
    tango = report.bind(oscar)(tango);
    zulu['AppDatabaseManager'] = mike;
    return entity;
})();