// app/modules/gateway/ChannelResyncManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun123278: for(var _fun123278_ip = 0; ; ) switch(_fun123278_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot7;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot6;
            entity = _closure1_slot20;
            entity = entity.bind(zulu)();
            if(entity) { _fun123278_ip = 51; continue _fun123278 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun123278_ip = 92; continue _fun123278;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun123278_ip = 71; continue _fun123278 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot7;
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
        _fun123279: for(var _fun123279_ip = 0; ; ) switch(_fun123279_ip) {
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
            _fun123279_ip = 76; continue _fun123279;
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
    entity = function(argFoo) { // Original name: handleGuildCreate
        _fun123282: for(var _fun123282_ip = 0; ; ) switch(_fun123282_ip) {
 0:
            mike = argFoo;
            mike = mike.guild;
            var _closure2_slot0 = mike;
            zulu = mike.unavailable;
            mike = true;
            if(!(mike !== zulu)) { _fun123282_ip = 51; continue _fun123282 }
 26:
            mike = global;
            tango = mike.setTimeout;
            zulu = undefined;
            mike = function() {
                report = _closure1_slot24;
                mike = _closure2_slot0;
                tango = mike.id;
                entity = undefined;
                tango = report.bind(entity)(tango);
                zulu = _closure1_slot26;
                mike = mike.id;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            entity = 0;
            entity = tango.bind(zulu)(mike, entity);
 51:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot21 = entity;
    entity = function() { // Original name: handlePostConnectionOpen
        zulu = _closure1_slot24;
        entity = undefined;
        zulu = zulu.bind(entity)();
        zulu = _closure1_slot10;
        mike = zulu.getGuildIds;
        tango = mike.bind(zulu)();
        zulu = tango.forEach;
        mike = function(argFoo) {
            zulu = _closure1_slot26;
            entity = undefined;
            mike = argFoo;
            mike = zulu.bind(entity)(mike);
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    var _closure1_slot22 = entity;
    entity = function(argFoo) { // Original name: handleChannelSync
        _fun123286: for(var _fun123286_ip = 0; ; ) switch(_fun123286_ip) {
 0:
            zulu = argFoo;
            entity = zulu.integrity_check;
            if(entity) { _fun123286_ip = 33; continue _fun123286 }
 12:
            tango = _closure1_slot26;
            mike = zulu.guild_id;
            entity = undefined;
            entity = tango.bind(entity)(mike);
            _fun123286_ip = 49; continue _fun123286;
 33:
            mike = function(argFoo) { // Original name: doIntegrityCheck
                _fun123287: for(var _fun123287_ip = 0; ; ) switch(_fun123287_ip) {
 0:
                    mike = argFoo;
                    tango = mike.guild_id;
                    oscar = mike.channels;
                    report = _closure1_slot9;
                    zulu = report.getMutableGuildChannelsForGuild;
                    zulu = zulu.bind(report)(tango);
                    var _closure3_slot0 = zulu;
                    report = oscar.map;
                    zulu = function(argFoo) {
                        _fun123288: for(var _fun123288_ip = 0; ; ) switch(_fun123288_ip) {
 0:
                            entity = argFoo;
                            zulu = _closure3_slot0;
                            mike = entity.id;
                            mike = zulu[mike];
                            report = null;
                            if(!(report != mike)) { _fun123288_ip = 207; continue _fun123288 }
 28:
                            options = _closure1_slot0;
                            tango = _closure1_slot2;
                            golf = 14;
                            tango = tango[golf];
                            oscar = undefined;
                            verify = options.bind(oscar)(tango);
                            options = verify.hasFlag;
                            tango = entity.flags;
                            offset = report != tango;
                            report = 0;
                            if(!offset) { _fun123288_ip = 76; continue _fun123288 }
 73:
                            report = tango;
 76:
                            tango = _closure1_slot12;
                            tango = tango.OBFUSCATED;
                            yankee = options.bind(verify)(report, tango);
                            report = _closure1_slot0;
                            tango = _closure1_slot2;
                            tango = tango[golf];
                            oscar = report.bind(oscar)(tango);
                            report = oscar.hasFlag;
                            tango = mike.flags;
                            mike = _closure1_slot12;
                            mike = mike.OBFUSCATED;
                            offset = report.bind(oscar)(tango, mike);
                            mike = yankee === offset;
                            if(mike) { _fun123288_ip = 205; continue _fun123288 }
 143:
                            report = _closure1_slot13;
                            tango = report.warn;
                            sizing = entity.id;
                            zulu = global;
                            zulu = zulu.HermesInternal;
                            options = zulu.concat;
                            output = 'Integrity check failure: ';
                            kilo = ' serverObfuscated: ';
                            foxtrot = ' != clientObfuscated: ';
                            backup = yankee;
                            romeo = offset;
                            zulu = output[options](sizing, kilo, backup, foxtrot, romeo, yankee);
                            zulu = tango.bind(report)(zulu);
                            mike = false;
 205:
                            return mike;
 207:
                            zulu = _closure1_slot13;
                            mike = zulu.warn;
                            oscar = entity.id;
                            entity = global;
                            entity = entity.HermesInternal;
                            report = entity.concat;
                            tango = 'Integrity check failure: ';
                            entity = ' was missing.';
                            entity = report.bind(tango)(oscar, entity);
                            entity = mike.bind(zulu)(entity);
                            entity = false;
                            return entity;
                        }
                    };
                    report = report.bind(oscar)(zulu);
                    zulu = report.every;
                    entity = function(argFoo) {
                        entity = argFoo;
                        return entity;
                    };
                    golf = zulu.bind(report)(entity);
                    entity = _closure1_slot13;
                    if(golf) { _fun123287_ip = 87; continue _fun123287 }
 80:
                    report = entity.warn;
                    _fun123287_ip = 93; continue _fun123287;
 87:
                    report = entity.verbose;
 93:
                    entity = global;
                    entity = entity.HermesInternal;
                    oscar = entity.concat;
                    zulu = 'Integrity check for guild ';
                    entity = ' completed. Passed: ';
                    zulu = oscar.bind(zulu)(tango, entity, golf);
                    entity = undefined;
                    zulu = report.bind(entity)(zulu);
                    zulu = _closure1_slot16;
                    mike = zulu.add;
                    mike = mike.bind(zulu)(tango);
                    return entity;
                }
            };
            entity = undefined;
            entity = mike.bind(entity)(zulu);
 49:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot23 = entity;
    entity = function() { // Original name: scheduleGuildResyncs
        entity = undefined;
        tango = _closure1_slot25;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot24 = entity;
    entity = function() { // Original name: _scheduleGuildResyncs
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun123293: for(var _fun123293_ip = 0; ; ) switch(_fun123293_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun123293_ip = 84; continue _fun123293 }
 9:
                    mike = argFoo;
                    var _closure4_slot0 = mike;
                    report = _closure1_slot1;
                    zulu = _closure1_slot2;
                    mike = 12;
                    mike = zulu[mike];
                    zulu = undefined;
                    report = report.bind(zulu)(mike);
                    mike = report.getAll;
                    mike = mike.bind(report)();
                    SaveGenerator(address=55);
 53:
                    return mike;
 55:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun123293_ip = 81; continue _fun123293 }
 61:
                    report = mike.forEach;
                    tango = function(argFoo) {
                        _fun123294: for(var _fun123294_ip = 0; ; ) switch(_fun123294_ip) {
 0:
                            entity = argFoo;
                            tango = _closure4_slot0;
                            mike = null;
                            mike = mike != tango;
                            if(!mike) { _fun123294_ip = 32; continue _fun123294 }
 19:
                            tango = entity.id;
                            zulu = _closure4_slot0;
                            mike = tango !== zulu;
 32:
                            if(mike) { _fun123294_ip = 56; continue _fun123294 }
 35:
                            zulu = entity.id;
                            mike = function(argFoo) { // Original name: scheduleGuildResync
                                _fun123295: for(var _fun123295_ip = 0; ; ) switch(_fun123295_ip) {
 0:
                                    tango = argFoo;
                                    var _closure6_slot0 = tango;
                                    entity = _closure1_slot15;
                                    report = entity[tango];
                                    entity = null;
                                    if(!(entity != report)) { _fun123295_ip = 49; continue _fun123295 }
 26:
                                    entity = global;
                                    oscar = entity.clearTimeout;
                                    entity = _closure1_slot15;
                                    report = entity[tango];
                                    entity = undefined;
                                    entity = oscar.bind(entity)(report);
 49:
                                    entity = global;
                                    golf = entity.Math;
                                    oscar = golf.ceil;
                                    options = entity.Math;
                                    report = options.random;
                                    options = report.bind(options)();
                                    report = _closure1_slot14;
                                    report = options * report;
                                    oscar = oscar.bind(golf)(report);
                                    zulu = _closure1_slot15;
                                    report = entity.setTimeout;
                                    entity = undefined;
                                    mike = function() {
                                        _fun123296: for(var _fun123296_ip = 0; ; ) switch(_fun123296_ip) {
 0:
                                            entity = _closure1_slot15;
                                            zulu = _closure6_slot0;
                                            entity = delete entity[zulu];
                                            report = _closure1_slot0;
                                            tango = _closure1_slot2;
                                            entity = 13;
                                            tango = tango[entity];
                                            entity = undefined;
                                            report = report.bind(entity)(tango);
                                            tango = report.isChannelMetadataObfuscationEnabled;
                                            tango = tango.bind(report)();
                                            if(!tango) { _fun123296_ip = 222; continue _fun123296 }
 56:
                                            report = _closure1_slot10;
                                            tango = report.getGuild;
                                            report = tango.bind(report)(zulu);
                                            tango = null;
                                            if(!(tango != report)) { _fun123296_ip = 222; continue _fun123296 }
 79:
                                            oscar = new Array(0);
                                            report = _closure1_slot9;
                                            tango = report.getMutableGuildChannelsForGuild;
                                            yankee = tango.bind(report)(zulu);
                                            verify = yankee;
                                            tango = 14;
                                            for(report in verify)
 112:
                                            {
 121:
                                                foxtrot = report;
                                                romeo = yankee[foxtrot];
                                                kilo = _closure1_slot0;
                                                backup = _closure1_slot2;
                                                backup = backup[tango];
                                                sizing = kilo.bind(entity)(backup);
                                                kilo = sizing.hasFlag;
                                                backup = romeo.flags;
                                                romeo = _closure1_slot12;
                                                romeo = romeo.OBFUSCATED;
                                                romeo = kilo.bind(sizing)(backup, romeo);
                                                if(!romeo) { _fun123296_ip = 112; continue _fun123296 }
 175:
                                                romeo = oscar.push;
                                                romeo = romeo.bind(oscar)(foxtrot);
                                                _fun123296_ip = 112; continue _fun123296;
                                            }
 187:
                                            report = _closure1_slot11;
                                            tango = report.getSocket;
                                            report = tango.bind(report)();
                                            tango = report.triggerGuildChannelResync;
                                            tango = tango.bind(report)(zulu, oscar);
                                            mike = _closure1_slot26;
                                            mike = mike.bind(entity)(zulu);
 222:
                                            return entity;
                                        }
                                    };
                                    mike = report.bind(entity)(mike, oscar);
                                    zulu[tango] = mike;
                                    return entity;
                                }
                            };
                            entity = undefined;
                            entity = mike.bind(entity)(zulu);
 56:
                            entity = undefined;
                            return entity;
                        }
                    };
                    tango = report.bind(mike)(tango);
                    return zulu;
 81:
                    return mike;
 84:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot25 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot25 = entity;
    entity = function(argFoo) { // Original name: scheduleIntegrityCheck
        _fun123297: for(var _fun123297_ip = 0; ; ) switch(_fun123297_ip) {
 0:
            tango = argFoo;
            var _closure2_slot0 = tango;
            zulu = _closure1_slot18;
            report = zulu[tango];
            zulu = null;
            if(!(zulu != report)) { _fun123297_ip = 49; continue _fun123297 }
 26:
            zulu = global;
            oscar = zulu.clearTimeout;
            zulu = _closure1_slot18;
            report = zulu[tango];
            zulu = undefined;
            zulu = oscar.bind(zulu)(report);
 49:
            oscar = global;
            golf = oscar.Math;
            report = golf.ceil;
            options = oscar.Math;
            zulu = options.random;
            options = zulu.bind(options)();
            zulu = _closure1_slot17;
            zulu = options * zulu;
            report = report.bind(golf)(zulu);
            zulu = _closure1_slot18;
            oscar = oscar.setTimeout;
            entity = _closure1_slot17;
            report = entity + report;
            entity = undefined;
            mike = function() {
                _fun123298: for(var _fun123298_ip = 0; ; ) switch(_fun123298_ip) {
 0:
                    entity = _closure1_slot18;
                    report = _closure2_slot0;
                    entity = delete entity[report];
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    entity = 13;
                    zulu = zulu[entity];
                    entity = undefined;
                    tango = tango.bind(entity)(zulu);
                    zulu = tango.isChannelMetadataIntegrityCheckEnabled;
                    zulu = zulu.bind(tango)();
                    if(!zulu) { _fun123298_ip = 116; continue _fun123298 }
 53:
                    tango = _closure1_slot10;
                    zulu = tango.getGuild;
                    zulu = zulu.bind(tango)(report);
                    tango = null;
                    if(!(tango != zulu)) { _fun123298_ip = 116; continue _fun123298 }
 73:
                    oscar = _closure1_slot16;
                    zulu = oscar.has;
                    zulu = zulu.bind(oscar)(report);
                    if(zulu) { _fun123298_ip = 116; continue _fun123298 }
 90:
                    zulu = _closure1_slot11;
                    mike = zulu.getSocket;
                    zulu = mike.bind(zulu)();
                    mike = zulu.triggerGuildChannelResync;
                    mike = mike.bind(zulu)(report, tango);
 116:
                    return entity;
                }
            };
            mike = oscar.bind(entity)(mike, report);
            zulu[tango] = mike;
            return entity;
        }
    };
    var _closure1_slot26 = entity;
    tango = global;
    offset = tango.Object;
    verify = offset.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = options.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 3;
    mike = oscar[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 4;
    mike = oscar[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot7 = mike;
    mike = 5;
    mike = oscar[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot8 = mike;
    mike = 6;
    mike = oscar[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot9 = mike;
    mike = 7;
    mike = oscar[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot10 = mike;
    mike = 8;
    mike = oscar[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot11 = mike;
    mike = 9;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.ChannelFlags;
    var _closure1_slot12 = mike;
    mike = 10;
    mike = oscar[mike];
    offset = options.bind(entity)(mike);
    mike = offset.prototype;
    verify = Object.create(mike, {constructor: {value: offset}});
    foxtrot = 'ChannelResyncManager';
    backup = verify;
    mike = new backup[offset](foxtrot, romeo);
    mike = mike instanceof Object ? mike : verify;
    var _closure1_slot13 = mike;
    mike = 11;
    mike = oscar[mike];
    options = options.bind(entity)(mike);
    mike = function(argFoo) {
        zulu = function(argFoo) { // Original name: ChannelResyncManager
            oscar = this;
            yankee = 0;
            golf = copyRestArgs(yankee);
            entity = _closure1_slot5;
            report = _closure2_slot0;
            tango = undefined;
            entity = entity.bind(tango)(oscar, report);
            mike = _closure1_slot19;
            entity = new Array(0);
            yankee = entity;
            offset = golf;
            verify = 0;
            golf = arraySpread(yankee, offset, verify);
            entity = mike.bind(tango)(oscar, report, entity);
            mike = {};
            tango = _closure1_slot21;
            mike['GUILD_CREATE'] = tango;
            tango = _closure1_slot22;
            mike['POST_CONNECTION_OPEN'] = tango;
            zulu = _closure1_slot23;
            mike['CHANNEL_SYNC'] = zulu;
            entity['actions'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        report = _closure1_slot8;
        mike = undefined;
        tango = argFoo;
        tango = report.bind(mike)(zulu, tango);
        entity = _closure1_slot4;
        entity = entity.bind(mike)(zulu);
        return entity;
    };
    mike = mike.bind(entity)(options);
    options = 2000;
    var _closure1_slot14 = options;
    options = {};
    var _closure1_slot15 = options;
    tango = tango.Set;
    options = tango.prototype;
    options = Object.create(options, {constructor: {value: tango}});
    backup = options;
    tango = new backup[tango](foxtrot);
    tango = tango instanceof Object ? tango : options;
    var _closure1_slot16 = tango;
    tango = 10000;
    var _closure1_slot17 = tango;
    tango = {};
    var _closure1_slot18 = tango;
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    backup = tango;
    mike = new backup[mike](foxtrot);
    mike = mike instanceof Object ? mike : tango;
    tango = 15;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/gateway/ChannelResyncManager.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();