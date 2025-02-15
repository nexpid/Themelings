// app/modules/app_database/modules/UserSettingsProto.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun59083: for(var _fun59083_ip = 0; ; ) switch(_fun59083_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun59083_ip = 46; continue _fun59083 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun59083_ip = 55; continue _fun59083 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun59083_ip = 343; continue _fun59083 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun59083_ip = 323; continue _fun59083 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun59083_ip = 283; continue _fun59083 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun59083_ip = 270; continue _fun59083 }
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
            if(!golf) { _fun59083_ip = 163; continue _fun59083 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun59083_ip = 179; continue _fun59083 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun59083_ip = 249; continue _fun59083 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun59083_ip = 249; continue _fun59083 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun59083_ip = 234; continue _fun59083 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun59083_ip = 247; continue _fun59083 }
 234:
            verify = _closure1_slot9;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun59083_ip = 265; continue _fun59083;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun59083_ip = 283; continue _fun59083;
 270:
            golf = _closure1_slot9;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun59083_ip = 323; continue _fun59083 }
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
            if(!tango) { _fun59083_ip = 330; continue _fun59083 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun59084: for(var _fun59084_ip = 0; ; ) switch(_fun59084_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun59084_ip = 56; continue _fun59084 }
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
                    _fun59084_ip = 67; continue _fun59084;
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
    var _closure1_slot8 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun59085: for(var _fun59085_ip = 0; ; ) switch(_fun59085_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun59085_ip = 23; continue _fun59085 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun59085_ip = 33; continue _fun59085 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun59085_ip = 70; continue _fun59085 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun59085_ip = 55; continue _fun59085 }
 70:
            return entity;
        }
    };
    var _closure1_slot9 = entity;
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
    golf = oscar.bind(entity)(tango);
    tango = golf.prototype;
    oscar = Object.create(tango, {constructor: {value: golf}});
    yankee = 'UserSettingsProto';
    romeo = oscar;
    tango = new romeo[golf](yankee, offset);
    tango = tango instanceof Object ? tango : oscar;
    var _closure1_slot7 = tango;
    mike = function() {
        tango = _closure1_slot4;
        zulu = function() { // Original name: UserSettingsProto
            zulu = this;
            var _closure3_slot0 = zulu;
            oscar = _closure1_slot3;
            report = _closure2_slot1;
            entity = undefined;
            report = oscar.bind(entity)(zulu, report);
            report = {};
            oscar = function() { // Original name: CONNECTION_OPEN
                mike = _closure3_slot0;
                entity = mike.throttledOnChange;
                entity = entity.bind(mike)();
                return entity;
            };
            report['CONNECTION_OPEN'] = oscar;
            oscar = function() { // Original name: USER_SETTINGS_PROTO_UPDATE
                mike = _closure3_slot0;
                entity = mike.throttledOnChange;
                entity = entity.bind(mike)();
                return entity;
            };
            report['USER_SETTINGS_PROTO_UPDATE'] = oscar;
            oscar = function() { // Original name: USER_SETTINGS_PROTO_ENQUEUE_UPDATE
                mike = _closure3_slot0;
                entity = mike.throttledOnChange;
                entity = entity.bind(mike)();
                return entity;
            };
            report['USER_SETTINGS_PROTO_ENQUEUE_UPDATE'] = oscar;
            oscar = function() { // Original name: USER_SETTINGS_PROTO_UPDATE_EDIT_INFO
                mike = _closure3_slot0;
                entity = mike.throttledOnChange;
                entity = entity.bind(mike)();
                return entity;
            };
            report['USER_SETTINGS_PROTO_UPDATE_EDIT_INFO'] = oscar;
            zulu['actions'] = report;
            tango = function() {
                _fun59092: for(var _fun59092_ip = 0; ; ) switch(_fun59092_ip) {
 0:
                    zulu = _closure1_slot6;
                    mike = zulu.getId;
                    tango = mike.bind(zulu)();
                    zulu = _closure1_slot0;
                    mike = _closure1_slot1;
                    entity = 6;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.database;
                    report = mike.bind(zulu)(tango);
                    mike = null;
                    if(!(mike != report)) { _fun59092_ip = 79; continue _fun59092 }
 56:
                    tango = report.transaction;
                    zulu = function(argFoo) {
                        _fun59093: for(var _fun59093_ip = 0; ; ) switch(_fun59093_ip) {
 0:
                            tango = argFoo;
                            zulu = _closure1_slot5;
                            entity = zulu.computeState;
                            romeo = entity.bind(zulu)();
                            report = _closure1_slot0;
                            entity = _closure1_slot1;
                            oscar = 7;
                            zulu = entity[oscar];
                            entity = undefined;
                            report = report.bind(entity)(zulu);
                            zulu = report.userSettingsTransaction;
                            yankee = zulu.bind(report)(tango);
                            verify = romeo;
                            zulu = global;
                            for(report in verify)
 66:
                            {
 75:
                                kilo = report;
                                backup = yankee.put;
                                foxtrot = {};
                                sizing = zulu.Number;
                                sizing = sizing.bind(entity)(kilo);
                                foxtrot['id'] = sizing;
                                kilo = romeo[kilo];
                                foxtrot['value'] = kilo;
                                foxtrot = backup.bind(yankee)(foxtrot);
                                _fun59093_ip = 66; continue _fun59093;
                            }
 116:
                            zulu = _closure1_slot5;
                            zulu = zulu.settings;
                            golf = zulu.versions;
                            report = null;
                            options = report == golf;
                            zulu = undefined;
                            if(options) { _fun59093_ip = 149; continue _fun59093 }
 143:
                            zulu = golf.dataVersion;
 149:
                            golf = report != zulu;
                            report = -1;
                            if(!golf) { _fun59093_ip = 165; continue _fun59093 }
 162:
                            report = zulu;
 165:
                            zulu = _closure1_slot0;
                            mike = _closure1_slot1;
                            mike = mike[oscar];
                            zulu = zulu.bind(entity)(mike);
                            mike = zulu.nonGuildVersionsTransaction;
                            tango = mike.bind(zulu)(tango);
                            zulu = tango.put;
                            mike = {};
                            oscar = 'user_settings_version';
                            mike['id'] = oscar;
                            mike['version'] = report;
                            mike = zulu.bind(tango)(mike);
                            return entity;
                        }
                    };
                    mike = 'handleUserSettingsProtoChange';
                    mike = tango.bind(report)(zulu, mike);
 79:
                    return entity;
                }
            };
            zulu['handleUserSettingsProtoChange'] = tango;
            tango = _closure1_slot0;
            report = _closure1_slot1;
            mike = 8;
            mike = report[mike];
            oscar = tango.bind(entity)(mike);
            report = oscar.debounce;
            tango = zulu.handleUserSettingsProtoChange;
            mike = 0;
            mike = report.bind(oscar)(tango, mike);
            zulu['throttledOnChange'] = mike;
            return entity;
        };
        var _closure2_slot1 = zulu;
        report = {};
        mike = 'getAll';
        report['key'] = mike;
        golf = _closure1_slot2;
        mike = undefined;
        entity = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun59095: for(var _fun59095_ip = 0; ; ) switch(_fun59095_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun59095_ip = 222; continue _fun59095 }
 10:
                    zulu = global;
                    tango = zulu.performance;
                    mike = tango.now;
                    verify = mike.bind(tango)();
                    report = _closure1_slot0;
                    oscar = _closure1_slot1;
                    mike = 7;
                    mike = oscar[mike];
                    golf = undefined;
                    oscar = report.bind(golf)(mike);
                    report = oscar.userSettings;
                    mike = argFoo;
                    report = report.bind(oscar)(mike);
                    mike = report.getMany;
                    mike = mike.bind(report)();
                    SaveGenerator(address=80);
 78:
                    return mike;
 80:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun59095_ip = 219; continue _fun59095 }
 89:
                    oscar = zulu.performance;
                    report = oscar.now;
                    options = report.bind(oscar)();
                    oscar = _closure1_slot7;
                    report = oscar.verbose;
                    sizing = options - verify;
                    backup = mike.length;
                    zulu = zulu.HermesInternal;
                    offset = zulu.concat;
                    output = 'loaded in ';
                    kilo = 'ms (settings: ';
                    foxtrot = ')';
                    zulu = output[offset](sizing, kilo, backup, foxtrot, romeo);
                    zulu = report.bind(oscar)(zulu);
                    zulu = {};
                    tango = _closure1_slot8;
                    oscar = tango.bind(golf)(mike);
                    report = oscar.bind(golf)();
                    tango = report.done;
                    if(tango) { _fun59095_ip = 216; continue _fun59095 }
 182:
                    tango = report.value;
                    options = tango.id;
                    tango = tango.value;
                    zulu[options] = tango;
                    options = oscar.bind(golf)();
                    tango = options.done;
                    report = options;
                    if(!tango) { _fun59095_ip = 182; continue _fun59095 }
 216:
                    return zulu;
 219:
                    return mike;
 222:
                    return entity;
                }
            };
            return entity;
        };
        entity = golf.bind(mike)(entity);
        var _closure2_slot0 = entity;
        entity = function() { // Original name: getAll
            entity = undefined;
            tango = _closure2_slot0;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        report['value'] = entity;
        entity = new Array(2);
        entity[0] = report;
        report = {};
        golf = 'resetInMemoryState';
        report['key'] = golf;
        oscar = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        report['value'] = oscar;
        entity[1] = report;
        entity = tango.bind(mike)(zulu, entity);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    romeo = tango;
    mike = new romeo[mike](yankee);
    mike = mike instanceof Object ? mike : tango;
    tango = 9;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/app_database/modules/UserSettingsProto.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();