// app/modules/guild_scheduled_events/GuildScheduledEventManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun00002_ip = 55; continue _fun00001 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun00002_ip = 343; continue _fun00001 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun00002_ip = 323; continue _fun00001 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun00002_ip = 270; continue _fun00001 }
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
            if(!golf) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot15;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golf = _closure1_slot15;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun00002_ip = 323; continue _fun00001 }
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
            if(!tango) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun00004_ip = 56; continue _fun00003 }
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
                    _fun00004_ip = 67; continue _fun00003;
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
    var _closure1_slot14 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot5;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot4;
            entity = _closure1_slot17;
            entity = entity.bind(zulu)();
            if(entity) { _fun00008_ip = 51; continue _fun00007 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun00008_ip = 92; continue _fun00007;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun00008_ip = 71; continue _fun00007 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot5;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
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
            _fun00010_ip = 74; continue _fun00009;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot17 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    tango = global;
    verify = tango.Object;
    options = verify.defineProperty;
    golf = {};
    entity = true;
    golf['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, golf);
    entity = 0;
    golf = report[entity];
    entity = undefined;
    golf = oscar.bind(entity)(golf);
    var _closure1_slot2 = golf;
    golf = 1;
    golf = report[golf];
    golf = oscar.bind(entity)(golf);
    var _closure1_slot3 = golf;
    golf = 2;
    golf = report[golf];
    golf = oscar.bind(entity)(golf);
    var _closure1_slot4 = golf;
    golf = 3;
    golf = report[golf];
    golf = oscar.bind(entity)(golf);
    var _closure1_slot5 = golf;
    golf = 4;
    golf = report[golf];
    golf = oscar.bind(entity)(golf);
    var _closure1_slot6 = golf;
    golf = 5;
    golf = report[golf];
    golf = oscar.bind(entity)(golf);
    var _closure1_slot7 = golf;
    golf = 6;
    golf = report[golf];
    golf = oscar.bind(entity)(golf);
    var _closure1_slot8 = golf;
    golf = 7;
    golf = report[golf];
    golf = oscar.bind(entity)(golf);
    var _closure1_slot9 = golf;
    golf = {};
    var _closure1_slot10 = golf;
    golf = tango.Set;
    options = golf.prototype;
    options = Object.create(options, {constructor: {value: golf}});
    foxtrot = options;
    golf = new foxtrot[golf](romeo);
    golf = golf instanceof Object ? golf : options;
    var _closure1_slot11 = golf;
    tango = tango.Set;
    golf = tango.prototype;
    golf = Object.create(golf, {constructor: {value: tango}});
    foxtrot = golf;
    tango = new foxtrot[tango](romeo);
    tango = tango instanceof Object ? tango : golf;
    var _closure1_slot12 = tango;
    tango = function() {
        tango = _closure1_slot7;
        zulu = undefined;
        mike = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    StartGenerator();
                    oscar = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun00012_ip = 191; continue _fun00011 }
 13:
                    mike = oscar;
                    report = _closure1_slot9;
                    tango = report.getGuildScheduledEventsForGuild;
                    tango = tango.bind(report)(oscar);
                    report = tango.length;
                    tango = 0;
                    if(!(tango !== report)) { _fun00012_ip = 186; continue _fun00011 }
 48:
                    oscar = _closure1_slot11;
                    report = oscar.has;
                    tango = mike;
                    tango = report.bind(oscar)(tango);
                    if(tango) { _fun00012_ip = 186; continue _fun00011 }
 68:
                    oscar = _closure1_slot12;
                    report = oscar.has;
                    tango = mike;
                    tango = report.bind(oscar)(tango);
                    if(tango) { _fun00012_ip = 186; continue _fun00011 }
 88: // try_start_0
                    report = _closure1_slot11;
                    tango = report.add;
                    oscar = mike;
                    tango = tango.bind(report)(oscar);
                    golf = _closure1_slot0;
                    report = _closure1_slot1;
                    tango = 8;
                    report = report[tango];
                    tango = undefined;
                    report = golf.bind(tango)(report);
                    tango = report.getGuildEventsForCurrentUser;
                    tango = tango.bind(report)(oscar);
                    SaveGenerator(address=142);
 140:
                    return tango;
 142:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(report) { _fun00012_ip = 167; continue _fun00011 }
 148:
                    golf = _closure1_slot12;
                    oscar = golf.add;
                    report = mike;
                    report = oscar.bind(golf)(report);
 165: // try_end0
                    _fun00012_ip = 186; continue _fun00011;
 167:
                    return tango;
 170: // catch_target0
                    CatchBlockStart(arg_register=3);
                    tango = _closure1_slot11;
                    zulu = tango.delete;
                    mike = zulu.bind(tango)(mike);
 186:
                    mike = undefined;
                    return mike;
 191:
                    return entity;
                }
            };
            return entity;
        };
        mike = tango.bind(zulu)(mike);
        var _closure2_slot0 = mike;
        entity = function() {
            entity = undefined;
            tango = _closure2_slot0;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        return entity;
    };
    tango = tango.bind(entity)();
    var _closure1_slot13 = tango;
    tango = 9;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    mike = function(argFoo) {
        tango = function(argFoo) { // Original name: GuildScheduledEventManager
            oscar = this;
            yankee = 0;
            golf = copyRestArgs(yankee);
            mike = _closure1_slot2;
            report = _closure2_slot3;
            tango = undefined;
            mike = mike.bind(tango)(oscar, report);
            mike = _closure1_slot16;
            entity = new Array(0);
            yankee = entity;
            offset = golf;
            verify = 0;
            golf = arraySpread(yankee, offset, verify);
            entity = mike.bind(tango)(oscar, report, entity);
            var _closure3_slot0 = entity;
            mike = {};
            tango = function() { // Original name: POST_CONNECTION_OPEN
                mike = _closure3_slot0;
                entity = mike.handleConnectionOpen;
                entity = entity.bind(mike)();
                return entity;
            };
            mike['POST_CONNECTION_OPEN'] = tango;
            tango = function(argFoo) { // Original name: GUILD_DELETE
                zulu = _closure3_slot0;
                mike = zulu.handleGuildDelete;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            mike['GUILD_DELETE'] = tango;
            tango = function(argFoo) { // Original name: GUILD_UNAVAILABLE
                zulu = _closure3_slot0;
                mike = zulu.handleGuildUnavailable;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            mike['GUILD_UNAVAILABLE'] = tango;
            tango = function(argFoo) { // Original name: INVITE_RESOLVE_SUCCESS
                zulu = _closure3_slot0;
                mike = zulu.handleInviteResolveSuccess;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            mike['INVITE_RESOLVE_SUCCESS'] = tango;
            zulu = function(argFoo) { // Original name: CHANNEL_SELECT
                zulu = _closure3_slot0;
                mike = zulu.handleChannelSelect;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            mike['CHANNEL_SELECT'] = zulu;
            entity['actions'] = mike;
            return entity;
        };
        var _closure2_slot3 = tango;
        report = _closure1_slot6;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot3;
        report = {};
        golf = 'getGuildEventUserCounts';
        report['key'] = golf;
        options = _closure1_slot7;
        entity = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    StartGenerator();
                    kilo = argFoo;
                    romeo = argBar;
                    verify = argBaz;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00014_ip = 254; continue _fun00013 }
 21:
                    report = kilo;
                    var _closure4_slot0 = kilo;
                    tango = romeo;
                    var _closure4_slot1 = romeo;
                    mike = undefined;
                    zulu = undefined;
                    options = verify.filter;
                    oscar = function(argFoo) {
                        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                            verify = argFoo;
                            zulu = _closure1_slot10;
                            kilo = _closure4_slot0;
                            foxtrot = _closure4_slot1;
                            mike = global;
                            entity = mike.HermesInternal;
                            entity = entity.concat;
                            options = '';
                            golf = '-';
                            sizing = options;
                            backup = golf;
                            romeo = golf;
                            yankee = verify;
                            entity = sizing[entity](kilo, backup, foxtrot, romeo, yankee, offset);
                            zulu = zulu[entity];
                            entity = null;
                            entity = entity == zulu;
                            if(entity) { _fun00016_ip = 143; continue _fun00015 }
 71:
                            oscar = mike.Date;
                            zulu = oscar.now;
                            zulu = zulu.bind(oscar)();
                            tango = _closure1_slot10;
                            kilo = _closure4_slot0;
                            foxtrot = _closure4_slot1;
                            mike = mike.HermesInternal;
                            mike = mike.concat;
                            sizing = options;
                            backup = golf;
                            romeo = golf;
                            yankee = verify;
                            mike = sizing[mike](kilo, backup, foxtrot, romeo, yankee, offset);
                            mike = tango[mike];
                            zulu = zulu - mike;
                            mike = 1800000;
                            entity = zulu > mike;
 143:
                            return entity;
                        }
                    };
                    zulu = options.bind(verify)(oscar);
                    options = global;
                    verify = options.Date;
                    oscar = verify.now;
                    offset = oscar.bind(verify)();
                    yankee = _closure1_slot10;
                    verify = options.HermesInternal;
                    verify = verify.concat;
                    backup = '';
                    foxtrot = '-';
                    verify = verify.bind(backup)(kilo, foxtrot, romeo);
                    verify = yankee[verify];
                    offset = offset - verify;
                    verify = 1800000;
                    if(!(offset < verify)) { _fun00014_ip = 136; continue _fun00013 }
 122:
                    verify = zulu;
                    offset = verify.length;
                    verify = 0;
                    if(!(verify !== offset)) { _fun00014_ip = 251; continue _fun00013 }
 136:
                    offset = _closure1_slot10;
                    romeo = report;
                    yankee = tango;
                    verify = options.HermesInternal;
                    verify = verify.concat;
                    verify = verify.bind(backup)(romeo, foxtrot, yankee);
                    yankee = options.Date;
                    options = yankee.now;
                    options = options.bind(yankee)();
                    offset[verify] = options;
                    verify = zulu;
                    options = verify.forEach;
                    golf = function(argFoo) {
                        zulu = _closure1_slot10;
                        foxtrot = _closure4_slot0;
                        yankee = _closure4_slot1;
                        entity = global;
                        mike = entity.HermesInternal;
                        oscar = mike.concat;
                        backup = '';
                        tango = '-';
                        verify = argFoo;
                        romeo = tango;
                        offset = tango;
                        mike = backup[oscar](foxtrot, romeo, yankee, offset, verify, options);
                        tango = entity.Date;
                        entity = tango.now;
                        entity = entity.bind(tango)();
                        zulu[mike] = entity;
                        return entity;
                    };
                    golf = options.bind(verify)(golf);
 201: // try_start_0
                    golf = _closure1_slot0;
                    options = _closure1_slot1;
                    oscar = 8;
                    oscar = options[oscar];
                    golf = golf.bind(mike)(oscar);
                    oscar = golf.fetchGuildEventUserCounts;
                    zulu = oscar.bind(golf)(report, tango, zulu);
                    SaveGenerator(address=238);
 236:
                    return zulu;
 238:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tango) { _fun00014_ip = 246; continue _fun00013 }
 244: // try_end0
                    _fun00014_ip = 251; continue _fun00013;
 246:
                    return zulu;
 249: // catch_target0
                    CatchBlockStart(arg_register=2);
 251:
                    return mike;
 254:
                    return entity;
                }
            };
            return entity;
        };
        entity = options.bind(zulu)(entity);
        var _closure2_slot2 = entity;
        entity = function() { // Original name: getGuildEventUserCounts
            entity = undefined;
            tango = _closure2_slot2;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        report['value'] = entity;
        entity = new Array(8);
        entity[0] = report;
        report = {};
        golf = 'getGuildEventUsers';
        report['key'] = golf;
        golf = function(argFoo, argBar, argBaz) { // Original name: value
            zulu = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 8;
            mike = mike[entity];
            entity = undefined;
            report = zulu.bind(entity)(mike);
            tango = report.fetchUsersForGuildEvent;
            zulu = argFoo;
            mike = argBar;
            entity = argBaz;
            entity = tango.bind(report)(zulu, mike, entity);
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getGuildEventsForCurrentUser';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            zulu = _closure1_slot13;
            mike = undefined;
            entity = argFoo;
            entity = zulu.bind(mike)(entity);
            return entity;
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'handleConnectionOpen';
        report['key'] = golf;
        golf = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    StartGenerator();
                    yankee = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00018_ip = 224; continue _fun00017 }
 15:
                    tango = _closure1_slot11;
                    zulu = tango.clear;
                    zulu = zulu.bind(tango)();
                    tango = _closure1_slot12;
                    zulu = tango.clear;
                    zulu = zulu.bind(tango)();
                    zulu = {};
                    _closure1_slot10 = zulu;
                    tango = _closure1_slot8;
                    zulu = tango.getLastSelectedGuildId;
                    verify = zulu.bind(tango)();
                    zulu = null;
                    if(!(zulu != verify)) { _fun00018_ip = 219; continue _fun00017 }
 75:
                    zulu = _closure1_slot14;
                    tango = _closure1_slot9;
                    mike = tango.getGuildScheduledEventsForGuild;
                    mike = mike.bind(tango)(verify);
                    options = undefined;
                    golf = zulu.bind(options)(mike);
                    zulu = golf.bind(options)();
                    mike = zulu.done;
                    oscar = global;
                    report = zulu;
                    if(mike) { _fun00018_ip = 219; continue _fun00017 }
 118:
                    mike = report.value;
                    tango = yankee.getGuildEventUserCounts;
                    zulu = mike.id;
                    mike = new Array(0);
                    mike = tango.bind(yankee)(verify, zulu, mike);
                    SaveGenerator(address=149);
 147:
                    return mike;
 149:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun00018_ip = 216; continue _fun00017 }
 155:
                    romeo = oscar.Promise;
                    zulu = romeo.prototype;
                    tango = Object.create(zulu, {constructor: {value: romeo}});
                    kilo = function(argFoo) {
                        entity = global;
                        tango = entity.setTimeout;
                        mike = entity.Math;
                        entity = mike.random;
                        mike = entity.bind(mike)();
                        entity = 200;
                        report = entity * mike;
                        zulu = undefined;
                        mike = argFoo;
                        entity = 50;
                        entity = report + entity;
                        entity = tango.bind(zulu)(mike, entity);
                        return entity;
                    };
                    sizing = tango;
                    zulu = new sizing[romeo](kilo, backup);
                    zulu = zulu instanceof Object ? zulu : tango;
                    SaveGenerator(address=190);
 188:
                    return zulu;
 190:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tango) { _fun00018_ip = 213; continue _fun00017 }
 196:
                    romeo = golf.bind(options)();
                    tango = romeo.done;
                    report = romeo;
                    if(tango) { _fun00018_ip = 219; continue _fun00017 }
 211:
                    _fun00018_ip = 118; continue _fun00017;
 213:
                    return zulu;
 216:
                    return mike;
 219:
                    mike = undefined;
                    return mike;
 224:
                    return entity;
                }
            };
            return entity;
        };
        golf = options.bind(zulu)(golf);
        var _closure2_slot1 = golf;
        golf = function() { // Original name: handleConnectionOpen
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
        entity[3] = report;
        report = {};
        golf = 'handleGuildUnavailable';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            entity = argFoo;
            mike = entity.guildId;
            tango = _closure1_slot11;
            zulu = tango.delete;
            zulu = zulu.bind(tango)(mike);
            tango = _closure1_slot12;
            zulu = tango.delete;
            zulu = zulu.bind(tango)(mike);
            entity = _closure1_slot10;
            entity = delete entity[mike];
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'handleGuildDelete';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            entity = argFoo;
            entity = entity.guild;
            mike = entity.id;
            tango = _closure1_slot11;
            zulu = tango.delete;
            zulu = zulu.bind(tango)(mike);
            tango = _closure1_slot12;
            zulu = tango.delete;
            zulu = zulu.bind(tango)(mike);
            entity = _closure1_slot10;
            entity = delete entity[mike];
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[5] = report;
        report = {};
        golf = 'handleInviteResolveSuccess';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                entity = argFoo;
                entity = entity.invite;
                mike = entity.guild_scheduled_event;
                report = entity.guild;
                tango = null;
                oscar = tango == report;
                entity = undefined;
                zulu = undefined;
                if(oscar) { _fun00020_ip = 38; continue _fun00019 }
 33:
                zulu = report.id;
 38:
                mike = tango != mike;
                if(!mike) { _fun00020_ip = 49; continue _fun00019 }
 45:
                mike = tango != zulu;
 49:
                if(!mike) { _fun00020_ip = 64; continue _fun00019 }
 52:
                mike = _closure1_slot13;
                mike = mike.bind(entity)(zulu);
 64:
                return entity;
            }
        };
        report['value'] = golf;
        entity[6] = report;
        report = {};
        golf = 'handleChannelSelect';
        report['key'] = golf;
        golf = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    StartGenerator();
                    foxtrot = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00022_ip = 320; continue _fun00021 }
 15:
                    mike = argFoo;
                    verify = mike.guildId;
                    zulu = undefined;
                    offset = undefined;
                    yankee = undefined;
                    romeo = undefined;
                    SaveGenerator(address=35);
 33:
                    return zulu;
 35:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00022_ip = 317; continue _fun00021 }
 44:
                    oscar = verify;
                    report = null;
                    if(!(report != oscar)) { _fun00022_ip = 314; continue _fun00021 }
 56:
                    oscar = _closure1_slot14;
                    options = _closure1_slot9;
                    golf = options.getGuildScheduledEventsForGuild;
                    report = verify;
                    report = golf.bind(options)(report);
                    report = oscar.bind(zulu)(report);
                    yankee = report;
                    report = report.bind(zulu)();
                    offset = report;
                    report = report.done;
                    oscar = global;
                    if(report) { _fun00022_ip = 314; continue _fun00021 }
 109:
                    report = offset;
                    romeo = report.value;
 117: // try_start_0
                    backup = foxtrot.getGuildEventUserCounts;
                    options = verify;
                    report = romeo;
                    golf = report.id;
                    report = new Array(0);
                    golf = backup.bind(foxtrot)(options, golf, report);
                    SaveGenerator(address=149);
 147:
                    return golf;
 149:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=4);
                    if(report) { _fun00022_ip = 219; continue _fun00021 }
 155: // try_end0
                    backup = oscar.Promise;
                    report = backup.prototype;
                    options = Object.create(report, {constructor: {value: backup}});
                    output = function(argFoo) {
                        entity = global;
                        tango = entity.setTimeout;
                        mike = entity.Math;
                        entity = mike.random;
                        mike = entity.bind(mike)();
                        entity = 200;
                        report = entity * mike;
                        zulu = undefined;
                        mike = argFoo;
                        entity = 50;
                        entity = report + entity;
                        entity = tango.bind(zulu)(mike, entity);
                        return entity;
                    };
                    result = options;
                    report = new result[backup](output, sizing);
                    report = report instanceof Object ? report : options;
                    SaveGenerator(address=190);
 188:
                    return report;
 190:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=7);
                    if(options) { _fun00022_ip = 216; continue _fun00021 }
 196:
                    options = yankee;
                    options = options.bind(zulu)();
                    offset = options;
                    options = options.done;
                    if(options) { _fun00022_ip = 314; continue _fun00021 }
 214:
                    _fun00022_ip = 109; continue _fun00021;
 216:
                    return report;
 219:
                    verify = oscar.Promise;
                    report = verify.prototype;
                    options = Object.create(report, {constructor: {value: verify}});
                    output = function(argFoo) {
                        entity = global;
                        tango = entity.setTimeout;
                        mike = entity.Math;
                        entity = mike.random;
                        mike = entity.bind(mike)();
                        entity = 200;
                        report = entity * mike;
                        zulu = undefined;
                        mike = argFoo;
                        entity = 50;
                        entity = report + entity;
                        entity = tango.bind(zulu)(mike, entity);
                        return entity;
                    };
                    result = options;
                    report = new result[verify](output, sizing);
                    report = report instanceof Object ? report : options;
                    SaveGenerator(address=254);
 252:
                    return report;
 254:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=7);
                    if(options) { _fun00022_ip = 263; continue _fun00021 }
 260:
                    return golf;
 263:
                    return report;
 266: // catch_target0
                    CatchBlockStart(arg_register=4);
                    golf = oscar.Promise;
                    oscar = golf.prototype;
                    oscar = Object.create(oscar, {constructor: {value: golf}});
                    output = function(argFoo) {
                        entity = global;
                        tango = entity.setTimeout;
                        mike = entity.Math;
                        entity = mike.random;
                        mike = entity.bind(mike)();
                        entity = 200;
                        report = entity * mike;
                        zulu = undefined;
                        mike = argFoo;
                        entity = 50;
                        entity = report + entity;
                        entity = tango.bind(zulu)(mike, entity);
                        return entity;
                    };
                    result = oscar;
                    tango = new result[golf](output, sizing);
                    tango = tango instanceof Object ? tango : oscar;
                    SaveGenerator(address=303);
 301:
                    return tango;
 303:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(oscar) { _fun00022_ip = 311; continue _fun00021 }
 309:
                    throw report;
 311:
                    return tango;
 314:
                    return zulu;
 317:
                    return mike;
 320:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        golf = options.bind(zulu)(golf);
        var _closure2_slot0 = golf;
        oscar = function() { // Original name: handleChannelSelect
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
        entity[7] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    foxtrot = tango;
    mike = new foxtrot[mike](romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 10;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_scheduled_events/GuildScheduledEventManager.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();