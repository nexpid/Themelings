// app/modules/app_database/managers/native/KvBackgroundManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun123453: for(var _fun123453_ip = 0; ; ) switch(_fun123453_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun123453_ip = 46; continue _fun123453 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun123453_ip = 55; continue _fun123453 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun123453_ip = 345; continue _fun123453 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun123453_ip = 323; continue _fun123453 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun123453_ip = 283; continue _fun123453 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun123453_ip = 270; continue _fun123453 }
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
            if(!golf) { _fun123453_ip = 163; continue _fun123453 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun123453_ip = 179; continue _fun123453 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun123453_ip = 249; continue _fun123453 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun123453_ip = 249; continue _fun123453 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun123453_ip = 234; continue _fun123453 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun123453_ip = 247; continue _fun123453 }
 234:
            verify = _closure1_slot18;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun123453_ip = 265; continue _fun123453;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun123453_ip = 283; continue _fun123453;
 270:
            golf = _closure1_slot18;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun123453_ip = 323; continue _fun123453 }
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
            if(!tango) { _fun123453_ip = 330; continue _fun123453 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun123454: for(var _fun123454_ip = 0; ; ) switch(_fun123454_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun123454_ip = 56; continue _fun123454 }
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
                    _fun123454_ip = 67; continue _fun123454;
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
 345:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun123455: for(var _fun123455_ip = 0; ; ) switch(_fun123455_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun123455_ip = 23; continue _fun123455 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun123455_ip = 33; continue _fun123455 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun123455_ip = 70; continue _fun123455 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun123455_ip = 55; continue _fun123455 }
 70:
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun123456: for(var _fun123456_ip = 0; ; ) switch(_fun123456_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot8;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot7;
            entity = _closure1_slot20;
            entity = entity.bind(zulu)();
            if(entity) { _fun123456_ip = 51; continue _fun123456 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun123456_ip = 92; continue _fun123456;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun123456_ip = 71; continue _fun123456 }
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
    var _closure1_slot19 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun123457: for(var _fun123457_ip = 0; ; ) switch(_fun123457_ip) {
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
 72: // try_end0
            _fun123457_ip = 76; continue _fun123457;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot20 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot20 = entity;
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
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    options = 5;
    tango = oscar[options];
    tango = golf.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Platform;
    tango = 8;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot10 = tango;
    tango = 9;
    verify = oscar[tango];
    verify = report.bind(entity)(verify);
    offset = verify.MAXIMUM_MESSAGES_PER_CHANNEL_DEFAULT;
    var _closure1_slot11 = offset;
    verify = verify.MAXIMUM_MESSAGES_PER_CHANNEL_EVER;
    var _closure1_slot12 = verify;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot13 = tango;
    tango = 10;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot14 = tango;
    tango = 11;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    tango = tango.Millis;
    tango = tango.MINUTE;
    tango = options * tango;
    var _closure1_slot15 = tango;
    tango = 12;
    tango = oscar[tango];
    verify = golf.bind(entity)(tango);
    tango = verify.prototype;
    options = Object.create(tango, {constructor: {value: verify}});
    foxtrot = 'KvBackgroundManager';
    backup = options;
    tango = new backup[verify](foxtrot, romeo);
    tango = tango instanceof Object ? tango : options;
    var _closure1_slot16 = tango;
    tango = 17;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    mike = function(argFoo) {
        tango = function(argFoo) { // Original name: KvBackgroundManager
            golf = this;
            tango = 0;
            yankee = 0;
            options = copyRestArgs(yankee);
            mike = _closure1_slot5;
            oscar = _closure2_slot3;
            report = undefined;
            mike = mike.bind(report)(golf, oscar);
            mike = _closure1_slot19;
            entity = new Array(0);
            yankee = entity;
            offset = options;
            verify = 0;
            options = arraySpread(yankee, offset, verify);
            entity = mike.bind(report)(golf, oscar, entity);
            var _closure3_slot0 = entity;
            mike = false;
            entity['isCleaning'] = mike;
            entity['lastDeepClean'] = tango;
            entity['hasConnected'] = mike;
            entity['applicationActive'] = mike;
            mike = {};
            tango = function(argFoo) { // Original name: APP_STATE_UPDATE
                zulu = _closure3_slot0;
                mike = zulu.handleAppStateUpdate;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            mike['APP_STATE_UPDATE'] = tango;
            tango = function(argFoo) { // Original name: LOGOUT
                zulu = _closure3_slot0;
                mike = zulu.handleLogout;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            mike['LOGOUT'] = tango;
            tango = function(argFoo) { // Original name: POST_CONNECTION_OPEN
                zulu = _closure3_slot0;
                mike = zulu.handlePostConnectionOpen;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            mike['POST_CONNECTION_OPEN'] = tango;
            entity['actions'] = mike;
            mike = {};
            tango = function(argFoo) { // Original name: trimOrphanedChannels
                mike = argFoo;
                var _closure4_slot0 = mike;
                zulu = _closure1_slot4;
                mike = undefined;
                entity = function* () {
                    entity = function* () { // Original name: ?anon_0_
                        _fun123467: for(var _fun123467_ip = 0; ; ) switch(_fun123467_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                            if(zulu) { _fun123467_ip = 181; continue _fun123467 }
 12:
                            zulu = undefined;
                            var _closure6_slot0 = zulu;
                            var _closure6_slot1 = zulu;
                            var _closure6_slot2 = zulu;
                            golf = _closure1_slot1;
                            verify = _closure1_slot2;
                            oscar = 13;
                            tango = verify[oscar];
                            yankee = golf.bind(zulu)(tango);
                            offset = yankee.channels;
                            options = _closure4_slot0;
                            offset = offset.bind(yankee)(options);
                            _closure6_slot0 = offset;
                            offset = verify[oscar];
                            yankee = golf.bind(zulu)(offset);
                            offset = yankee.messages;
                            offset = offset.bind(yankee)(options);
                            _closure6_slot1 = offset;
                            oscar = verify[oscar];
                            golf = golf.bind(zulu)(oscar);
                            oscar = golf.channelsTemp;
                            oscar = oscar.bind(golf)(options);
                            _closure6_slot2 = oscar;
                            oscar = _closure1_slot13;
                            report = oscar.canEvictOrphans;
                            report = report.bind(oscar)();
                            if(!report) { _fun123467_ip = 175; continue _fun123467 }
 138:
                            oscar = _closure4_slot0;
                            report = oscar.transaction;
                            tango = function(argFoo) {
                                _fun123468: for(var _fun123468_ip = 0; ; ) switch(_fun123468_ip) {
 0:
                                    zulu = argFoo;
                                    mike = _closure6_slot1;
                                    entity = mike.upgradeTransaction;
                                    oscar = entity.bind(mike)(zulu);
                                    mike = _closure6_slot2;
                                    entity = mike.upgradeTransaction;
                                    zulu = entity.bind(mike)(zulu);
                                    golf = _closure1_slot17;
                                    report = _closure1_slot13;
                                    entity = report.getSaveableChannels;
                                    report = entity.bind(report)();
                                    entity = undefined;
                                    verify = golf.bind(entity)(report);
                                    golf = verify.bind(entity)();
                                    report = golf.done;
                                    options = null;
                                    if(report) { _fun123468_ip = 123; continue _fun123468 }
 80:
                                    report = golf.value;
                                    yankee = zulu.put;
                                    offset = report.guildId;
                                    report = report.channelId;
                                    report = yankee.bind(zulu)(offset, report, options);
                                    offset = verify.bind(entity)();
                                    report = offset.done;
                                    golf = offset;
                                    if(!report) { _fun123468_ip = 80; continue _fun123468 }
 123:
                                    golf = oscar.trimOrphans;
                                    report = _closure6_slot0;
                                    report = report.prefix;
                                    report = golf.bind(oscar)(report);
                                    options = oscar.trimChannelsIn;
                                    report = _closure6_slot2;
                                    golf = report.prefix;
                                    report = _closure1_slot12;
                                    report = options.bind(oscar)(golf, report);
                                    report = oscar.trimChannelsNotIn;
                                    tango = _closure6_slot2;
                                    tango = tango.prefix;
                                    mike = _closure1_slot11;
                                    mike = report.bind(oscar)(tango, mike);
                                    mike = zulu.delete;
                                    mike = mike.bind(zulu)();
                                    return entity;
                                }
                            };
                            mike = 'trimOrphanedChannels';
                            mike = report.bind(oscar)(tango, mike);
                            SaveGenerator(address=169);
 167:
                            return mike;
 169:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(tango) { _fun123467_ip = 178; continue _fun123467 }
 175:
                            return zulu;
 178:
                            return mike;
 181:
                            return entity;
                        }
                    };
                    return entity;
                };
                entity = zulu.bind(mike)(entity);
                entity = entity.bind(mike)();
                return entity;
            };
            mike['trimOrphanedChannels'] = tango;
            tango = function(argFoo) { // Original name: deleteDeprecatedKeyspaces
                mike = argFoo;
                var _closure4_slot0 = mike;
                zulu = _closure1_slot4;
                mike = undefined;
                entity = function* () {
                    entity = function* () { // Original name: ?anon_0_
                        _fun123471: for(var _fun123471_ip = 0; ; ) switch(_fun123471_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(mike) { _fun123471_ip = 57; continue _fun123471 }
 7:
                            report = _closure4_slot0;
                            tango = report.transaction;
                            zulu = function(argFoo) {
                                _fun123472: for(var _fun123472_ip = 0; ; ) switch(_fun123472_ip) {
 0:
                                    romeo = argFoo;
                                    zulu = _closure1_slot17;
                                    tango = _closure1_slot0;
                                    mike = _closure1_slot2;
                                    entity = 13;
                                    mike = mike[entity];
                                    entity = undefined;
                                    mike = tango.bind(entity)(mike);
                                    mike = mike.DEPRECATED_KEYSPACES;
                                    offset = zulu.bind(entity)(mike);
                                    zulu = offset.bind(entity)();
                                    mike = zulu.done;
                                    verify = 2;
                                    options = 0;
                                    golf = 1;
                                    oscar = 14;
                                    if(mike) { _fun123472_ip = 187; continue _fun123472 }
 69:
                                    foxtrot = zulu.value;
                                    mike = _closure1_slot3;
                                    mike = mike.bind(entity)(foxtrot, verify);
                                    echo = mike[options];
                                    mike = mike[golf];
                                    backup = _closure1_slot0;
                                    foxtrot = _closure1_slot2;
                                    foxtrot = foxtrot[oscar];
                                    foxtrot = backup.bind(entity)(foxtrot);
                                    kilo = foxtrot.Table;
                                    backup = new Array(1);
                                    backup[0] = mike;
                                    result = _closure4_slot0;
                                    foxtrot = kilo.prototype;
                                    foxtrot = Object.create(foxtrot, {constructor: {value: kilo}});
                                    source = foxtrot;
                                    update = backup;
                                    output = true;
                                    mike = new source[kilo](update, echo, result, output, sizing);
                                    foxtrot = mike instanceof Object ? mike : foxtrot;
                                    mike = foxtrot.upgradeTransaction;
                                    foxtrot = mike.bind(foxtrot)(romeo);
                                    mike = foxtrot.delete;
                                    mike = mike.bind(foxtrot)();
                                    foxtrot = offset.bind(entity)();
                                    mike = foxtrot.done;
                                    zulu = foxtrot;
                                    if(!mike) { _fun123472_ip = 69; continue _fun123472 }
 187:
                                    return entity;
                                }
                            };
                            mike = 'deleteDeprecatedKeyspaces';
                            mike = tango.bind(report)(zulu, mike);
                            SaveGenerator(address=43);
 41:
                            return mike;
 43:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                            if(zulu) { _fun123471_ip = 54; continue _fun123471 }
 49:
                            zulu = undefined;
                            return zulu;
 54:
                            return mike;
 57:
                            return entity;
                        }
                    };
                    return entity;
                };
                entity = zulu.bind(mike)(entity);
                entity = entity.bind(mike)();
                return entity;
            };
            mike['deleteDeprecatedKeyspaces'] = tango;
            tango = function(argFoo) { // Original name: trimLowDisk
                mike = argFoo;
                var _closure4_slot0 = mike;
                zulu = _closure1_slot4;
                mike = undefined;
                entity = function* () {
                    entity = function* () { // Original name: ?anon_0_
                        _fun123475: for(var _fun123475_ip = 0; ; ) switch(_fun123475_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(mike) { _fun123475_ip = 78; continue _fun123475 }
 7:
                            mike = _closure1_slot14;
                            mike = mike.isLowDisk;
                            if(!mike) { _fun123475_ip = 70; continue _fun123475 }
 23:
                            zulu = _closure4_slot0;
                            mike = zulu.incrementalVacuum;
                            tango = mike.bind(zulu)();
                            zulu = tango.catch;
                            mike = function(argFoo) {
                                zulu = _closure1_slot16;
                                mike = zulu.warn;
                                entity = argFoo;
                                entity = mike.bind(zulu)(entity);
                                return entity;
                            };
                            mike = zulu.bind(tango)(mike);
                            SaveGenerator(address=64);
 62:
                            return mike;
 64:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                            if(zulu) { _fun123475_ip = 75; continue _fun123475 }
 70:
                            zulu = undefined;
                            return zulu;
 75:
                            return mike;
 78:
                            return entity;
                        }
                    };
                    return entity;
                };
                entity = zulu.bind(mike)(entity);
                entity = entity.bind(mike)();
                return entity;
            };
            mike['trimLowDisk'] = tango;
            tango = function() { // Original name: deleteExtraDatabases
                zulu = _closure1_slot4;
                mike = undefined;
                entity = function* () {
                    entity = function* () { // Original name: ?anon_0_
                        _fun123479: for(var _fun123479_ip = 0; ; ) switch(_fun123479_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(mike) { _fun123479_ip = 273; continue _fun123479 }
 12:
                            zulu = _closure1_slot10;
                            mike = zulu.getUsers;
                            report = mike.bind(zulu)();
                            offset = global;
                            tango = offset.Set;
                            zulu = report.map;
                            mike = function(argFoo) {
                                zulu = _closure1_slot1;
                                mike = _closure1_slot2;
                                entity = 15;
                                mike = mike[entity];
                                entity = undefined;
                                zulu = zulu.bind(entity)(mike);
                                mike = zulu.databaseName;
                                entity = argFoo;
                                entity = entity.id;
                                entity = mike.bind(zulu)(entity);
                                return entity;
                            };
                            sizing = zulu.bind(report)(mike);
                            zulu = tango.prototype;
                            zulu = Object.create(zulu, {constructor: {value: tango}});
                            output = zulu;
                            mike = new output[tango](sizing, kilo);
                            verify = mike instanceof Object ? mike : zulu;
                            tango = _closure1_slot17;
                            report = _closure1_slot0;
                            mike = _closure1_slot2;
                            options = 14;
                            mike = mike[options];
                            zulu = undefined;
                            mike = report.bind(zulu)(mike);
                            report = mike.Kv;
                            mike = report.databases;
                            mike = mike.bind(report)();
                            SaveGenerator(address=120);
 118:
                            return mike;
 120:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                            if(report) { _fun123479_ip = 270; continue _fun123479 }
 129:
                            golf = tango.bind(zulu)(mike);
                            report = golf.bind(zulu)();
                            tango = report.done;
                            oscar = 'deleting orphaned database: ';
                            if(tango) { _fun123479_ip = 267; continue _fun123479 }
 152:
                            backup = report.value;
                            tango = verify.has;
                            tango = tango.bind(verify)(backup);
                            if(tango) { _fun123479_ip = 252; continue _fun123479 }
 170:
                            kilo = _closure1_slot16;
                            foxtrot = kilo.log;
                            tango = offset.HermesInternal;
                            tango = tango.concat;
                            tango = tango.bind(oscar)(backup);
                            tango = foxtrot.bind(kilo)(tango);
                            foxtrot = _closure1_slot0;
                            tango = _closure1_slot2;
                            tango = tango[options];
                            tango = foxtrot.bind(zulu)(tango);
                            foxtrot = tango.Database;
                            tango = foxtrot.delete;
                            backup = tango.bind(foxtrot)(backup);
                            foxtrot = backup.catch;
                            tango = function() {
                                entity = null;
                                return entity;
                            };
                            tango = foxtrot.bind(backup)(tango);
 252:
                            foxtrot = golf.bind(zulu)();
                            tango = foxtrot.done;
                            report = foxtrot;
                            if(!tango) { _fun123479_ip = 152; continue _fun123479 }
 267:
                            return zulu;
 270:
                            return mike;
 273:
                            return entity;
                        }
                    };
                    return entity;
                };
                entity = zulu.bind(mike)(entity);
                entity = entity.bind(mike)();
                return entity;
            };
            mike['deleteExtraDatabases'] = tango;
            zulu = function() { // Original name: optimize
                zulu = _closure1_slot4;
                mike = undefined;
                entity = function* () {
                    entity = function* () { // Original name: ?anon_0_
                        _fun123484: for(var _fun123484_ip = 0; ; ) switch(_fun123484_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(mike) { _fun123484_ip = 67; continue _fun123484 }
 7:
                            tango = _closure1_slot0;
                            zulu = _closure1_slot2;
                            mike = 14;
                            mike = zulu[mike];
                            zulu = undefined;
                            mike = tango.bind(zulu)(mike);
                            report = mike.Kv;
                            tango = report.optimize;
                            mike = true;
                            mike = tango.bind(report)(mike);
                            SaveGenerator(address=55);
 53:
                            return mike;
 55:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(tango) { _fun123484_ip = 64; continue _fun123484 }
 61:
                            return zulu;
 64:
                            return mike;
 67:
                            return entity;
                        }
                    };
                    return entity;
                };
                entity = zulu.bind(mike)(entity);
                entity = entity.bind(mike)();
                return entity;
            };
            mike['optimize'] = zulu;
            entity['steps'] = mike;
            return entity;
        };
        var _closure2_slot3 = tango;
        mike = _closure1_slot9;
        zulu = undefined;
        entity = argFoo;
        entity = mike.bind(zulu)(tango, entity);
        mike = _closure1_slot6;
        report = {};
        entity = 'handleAppStateUpdate';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun123485: for(var _fun123485_ip = 0; ; ) switch(_fun123485_ip) {
 0:
                mike = this;
                entity = argFoo;
                zulu = entity.state;
                entity = 'active';
                entity = entity === zulu;
                tango = mike.applicationActive;
                zulu = !entity;
                if(entity) { _fun123485_ip = 34; continue _fun123485 }
 31:
                zulu = tango;
 34:
                if(!zulu) { _fun123485_ip = 49; continue _fun123485 }
 37:
                zulu = mike.maybeCleanup;
                zulu = zulu.bind(mike)();
 49:
                mike['applicationActive'] = entity;
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(6);
        entity[0] = report;
        report = {};
        options = 'handleLogout';
        report['key'] = options;
        options = function() { // Original name: value
            mike = false;
            entity = this;
            entity['hasConnected'] = mike;
            entity = undefined;
            return entity;
        };
        report['value'] = options;
        entity[1] = report;
        report = {};
        options = 'handlePostConnectionOpen';
        report['key'] = options;
        options = function() { // Original name: value
            mike = true;
            entity = this;
            entity['hasConnected'] = mike;
            entity = undefined;
            return entity;
        };
        report['value'] = options;
        entity[2] = report;
        report = {};
        options = 'maybeCleanup';
        report['key'] = options;
        options = _closure1_slot4;
        golf = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun123489: for(var _fun123489_ip = 0; ; ) switch(_fun123489_ip) {
 0:
                    StartGenerator();
                    verify = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun123489_ip = 380; continue _fun123489 }
 13:
                    mike = undefined;
                    offset = undefined;
                    golf = undefined;
                    report = undefined;
                    zulu = verify.hasConnected;
                    if(!zulu) { _fun123489_ip = 377; continue _fun123489 }
 33:
                    zulu = verify.isCleaning;
                    if(zulu) { _fun123489_ip = 377; continue _fun123489 }
 45:
                    zulu = global;
                    tango = zulu.Date;
                    zulu = tango.now;
                    offset = zulu.bind(tango)();
                    zulu = _closure1_slot14;
                    zulu = zulu.isLowDisk;
                    if(zulu) { _fun123489_ip = 99; continue _fun123489 }
 78:
                    options = offset;
                    tango = verify.lastDeepClean;
                    options = options - tango;
                    tango = _closure1_slot15;
                    zulu = options >= tango;
 99:
                    golf = zulu;
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    options = 16;
                    zulu = zulu[options];
                    tango = tango.bind(mike)(zulu);
                    zulu = tango.startBackgroundTask;
                    zulu = zulu.bind(tango)();
                    SaveGenerator(address=136);
 134:
                    return zulu;
 136:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tango) { _fun123489_ip = 374; continue _fun123489 }
 145:
                    report = zulu;
 148: // try_start_0
                    tango = true;
                    verify['isCleaning'] = tango;
                    yankee = verify.cleanupAsync;
                    tango = golf;
                    tango = yankee.bind(verify)(tango);
                    SaveGenerator(address=176);
 174:
                    return tango;
 176:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=10);
                    if(yankee) { _fun123489_ip = 249; continue _fun123489 }
 182: // try_end0
                    yankee = false;
                    verify['isCleaning'] = yankee;
                    yankee = golf;
                    if(yankee) { _fun123489_ip = 204; continue _fun123489 }
 196:
                    yankee = verify.lastDeepClean;
                    _fun123489_ip = 207; continue _fun123489;
 204:
                    yankee = offset;
 207:
                    verify['lastDeepClean'] = yankee;
                    romeo = _closure1_slot1;
                    yankee = _closure1_slot2;
                    yankee = yankee[options];
                    foxtrot = romeo.bind(mike)(yankee);
                    romeo = foxtrot.endBackgroundTask;
                    yankee = report;
                    yankee = romeo.bind(foxtrot)(yankee);
                    _fun123489_ip = 377; continue _fun123489;
 249:
                    yankee = false;
                    verify['isCleaning'] = yankee;
                    yankee = golf;
                    if(yankee) { _fun123489_ip = 271; continue _fun123489 }
 263:
                    yankee = verify.lastDeepClean;
                    _fun123489_ip = 274; continue _fun123489;
 271:
                    yankee = offset;
 274:
                    verify['lastDeepClean'] = yankee;
                    romeo = _closure1_slot1;
                    yankee = _closure1_slot2;
                    yankee = yankee[options];
                    foxtrot = romeo.bind(mike)(yankee);
                    romeo = foxtrot.endBackgroundTask;
                    yankee = report;
                    yankee = romeo.bind(foxtrot)(yankee);
                    return tango;
 314: // catch_target0
                    CatchBlockStart(arg_register=3);
                    yankee = false;
                    verify['isCleaning'] = yankee;
                    if(golf) { _fun123489_ip = 335; continue _fun123489 }
 327:
                    golf = verify.lastDeepClean;
                    _fun123489_ip = 338; continue _fun123489;
 335:
                    golf = offset;
 338:
                    verify['lastDeepClean'] = golf;
                    golf = _closure1_slot1;
                    oscar = _closure1_slot2;
                    oscar = oscar[options];
                    golf = golf.bind(mike)(oscar);
                    oscar = golf.endBackgroundTask;
                    report = oscar.bind(golf)(report);
                    throw tango;
 374:
                    return zulu;
 377:
                    return mike;
 380:
                    return entity;
                }
            };
            return entity;
        };
        golf = options.bind(zulu)(golf);
        var _closure2_slot2 = golf;
        golf = function() { // Original name: maybeCleanup
            entity = undefined;
            tango = _closure2_slot2;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'cleanupAsync';
        report['key'] = golf;
        golf = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun123492: for(var _fun123492_ip = 0; ; ) switch(_fun123492_ip) {
 0:
                    StartGenerator();
                    oscar = argFoo;
                    tango = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun123492_ip = 189; continue _fun123492 }
 16:
                    golf = _closure1_slot16;
                    report = golf.verbose;
                    zulu = global;
                    zulu = zulu.HermesInternal;
                    verify = zulu.concat;
                    options = 'performing cleanup (deep: ';
                    zulu = ')';
                    zulu = verify.bind(options)(oscar, zulu);
                    zulu = report.bind(golf)(zulu);
                    zulu = _closure1_slot1;
                    report = _closure1_slot2;
                    mike = 13;
                    mike = report[mike];
                    report = undefined;
                    zulu = zulu.bind(report)(mike);
                    mike = zulu.database;
                    zulu = mike.bind(zulu)();
                    mike = null;
                    if(!(mike != zulu)) { _fun123492_ip = 125; continue _fun123492 }
 101:
                    mike = tango.cleanDatabaseAsync;
                    mike = mike.bind(tango)(zulu, oscar);
                    SaveGenerator(address=119);
 117:
                    return mike;
 119:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun123492_ip = 186; continue _fun123492 }
 125:
                    oscar = tango.steps;
                    zulu = oscar.optimize;
                    zulu = zulu.bind(oscar)();
                    SaveGenerator(address=145);
 143:
                    return zulu;
 145:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(oscar) { _fun123492_ip = 183; continue _fun123492 }
 151:
                    oscar = tango.steps;
                    tango = oscar.deleteExtraDatabases;
                    tango = tango.bind(oscar)();
                    SaveGenerator(address=171);
 169:
                    return tango;
 171:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(oscar) { _fun123492_ip = 180; continue _fun123492 }
 177:
                    return report;
 180:
                    return tango;
 183:
                    return zulu;
 186:
                    return mike;
 189:
                    return entity;
                }
            };
            return entity;
        };
        golf = options.bind(zulu)(golf);
        var _closure2_slot1 = golf;
        golf = function() { // Original name: cleanupAsync
            entity = undefined;
            tango = _closure2_slot1;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'cleanDatabaseAsync';
        report['key'] = golf;
        golf = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun123495: for(var _fun123495_ip = 0; ; ) switch(_fun123495_ip) {
 0:
                    StartGenerator();
                    report = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun123495_ip = 151; continue _fun123495 }
 13:
                    tango = argFoo;
                    zulu = argBar;
 19: // try_start_0
                    golf = report.steps;
                    oscar = golf.trimOrphanedChannels;
                    mike = tango;
                    mike = oscar.bind(golf)(mike);
                    SaveGenerator(address=43);
 41:
                    return mike;
 43:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(oscar) { _fun123495_ip = 117; continue _fun123495 }
 49:
                    if(!zulu) { _fun123495_ip = 109; continue _fun123495 }
 52:
                    golf = report.steps;
                    oscar = golf.deleteDeprecatedKeyspaces;
                    zulu = tango;
                    zulu = oscar.bind(golf)(zulu);
                    SaveGenerator(address=76);
 74:
                    return zulu;
 76:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(oscar) { _fun123495_ip = 114; continue _fun123495 }
 82:
                    oscar = report.steps;
                    report = oscar.trimLowDisk;
                    tango = report.bind(oscar)(tango);
                    SaveGenerator(address=103);
 101:
                    return tango;
 103:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(report) { _fun123495_ip = 111; continue _fun123495 }
 109: // try_end0
                    _fun123495_ip = 146; continue _fun123495;
 111:
                    return tango;
 114:
                    return zulu;
 117:
                    return mike;
 120: // catch_target0
                    CatchBlockStart(arg_register=4);
                    tango = _closure1_slot16;
                    zulu = tango.warn;
                    mike = "couldn't clean database:";
                    mike = zulu.bind(tango)(mike, report);
 146:
                    mike = undefined;
                    return mike;
 151:
                    return entity;
                }
            };
            return entity;
        };
        golf = options.bind(zulu)(golf);
        var _closure2_slot0 = golf;
        oscar = function() { // Original name: cleanDatabaseAsync
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
        entity[5] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    backup = tango;
    mike = new backup[mike](foxtrot);
    mike = mike instanceof Object ? mike : tango;
    tango = 18;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/app_database/managers/native/KvBackgroundManager.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();