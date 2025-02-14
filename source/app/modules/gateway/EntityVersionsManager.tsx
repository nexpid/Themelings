// app/modules/gateway/EntityVersionsManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun123424: for(var _fun123424_ip = 0; ; ) switch(_fun123424_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot5;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot4;
            entity = _closure1_slot15;
            entity = entity.bind(zulu)();
            if(entity) { _fun123424_ip = 51; continue _fun123424 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun123424_ip = 92; continue _fun123424;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun123424_ip = 71; continue _fun123424 }
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
    var _closure1_slot14 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun123425: for(var _fun123425_ip = 0; ; ) switch(_fun123425_ip) {
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
            _fun123425_ip = 76; continue _fun123425;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
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
    entity = function(argFoo) { // Original name: handleDeletedEntityIds
        _fun123428: for(var _fun123428_ip = 0; ; ) switch(_fun123428_ip) {
 0:
            tango = argFoo;
            var _closure2_slot0 = tango;
            oscar = _closure1_slot10;
            report = oscar.getGuild;
            entity = tango.guild_id;
            report = report.bind(oscar)(entity);
            entity = null;
            oscar = entity == report;
            entity = undefined;
            yankee = undefined;
            if(oscar) { _fun123428_ip = 49; continue _fun123428 }
 44:
            yankee = report.name;
 49:
            oscar = _closure1_slot13;
            report = oscar.fileOnly;
            kilo = tango.guild_id;
            tango = global;
            tango = tango.HermesInternal;
            verify = tango.concat;
            sizing = 'received deleted guild entities (id: ';
            backup = ', name: ';
            romeo = ')';
            foxtrot = yankee;
            tango = sizing[verify](kilo, backup, foxtrot, romeo, yankee);
            tango = report.bind(oscar)(tango);
            tango = _closure1_slot0;
            report = _closure1_slot1;
            zulu = 13;
            zulu = report[zulu];
            zulu = tango.bind(entity)(zulu);
            tango = zulu.Emitter;
            zulu = tango.batched;
            mike = function() {
                _fun123429: for(var _fun123429_ip = 0; ; ) switch(_fun123429_ip) {
 0:
                    zulu = _closure2_slot0;
                    zulu = zulu.channels;
                    tango = null;
                    if(!(tango != zulu)) { _fun123429_ip = 79; continue _fun123429 }
 21:
                    zulu = _closure2_slot0;
                    golf = zulu.guild_id;
                    report = global;
                    oscar = report.Set;
                    verify = zulu.channels;
                    report = oscar.prototype;
                    report = Object.create(report, {constructor: {value: oscar}});
                    offset = report;
                    zulu = new offset[oscar](verify, options);
                    oscar = zulu instanceof Object ? zulu : report;
                    report = function(argFoo, argBar) { // Original name: syncChannels
                        verify = argFoo;
                        zulu = argBar;
                        var _closure4_slot0 = verify;
                        var _closure4_slot1 = zulu;
                        oscar = _closure1_slot0;
                        tango = _closure1_slot1;
                        entity = 16;
                        tango = tango[entity];
                        entity = undefined;
                        golf = oscar.bind(entity)(tango);
                        oscar = golf.keys;
                        options = _closure1_slot9;
                        tango = options.getMutableBasicGuildChannelsForGuild;
                        tango = tango.bind(options)(verify);
                        tango = oscar.bind(golf)(tango);
                        golf = _closure1_slot13;
                        oscar = golf.fileOnly;
                        report = {};
                        report['channelIdsInMemory'] = tango;
                        report['channelIdsFromServer'] = zulu;
                        zulu = 'syncChannels';
                        zulu = oscar.bind(golf)(zulu, report);
                        zulu = tango.forEach;
                        mike = function(argFoo) {
                            _fun123431: for(var _fun123431_ip = 0; ; ) switch(_fun123431_ip) {
 0:
                                oscar = argFoo;
                                mike = _closure4_slot1;
                                entity = mike.has;
                                entity = entity.bind(mike)(oscar);
                                if(entity) { _fun123431_ip = 91; continue _fun123431 }
 23:
                                mike = _closure1_slot0;
                                zulu = _closure1_slot1;
                                entity = 11;
                                entity = zulu[entity];
                                report = undefined;
                                zulu = mike.bind(report)(entity);
                                mike = zulu.dispatch;
                                entity = {};
                                tango = 'CHANNEL_DELETE';
                                entity['type'] = tango;
                                tango = {};
                                golf = _closure4_slot0;
                                tango['guild_id'] = golf;
                                tango['id'] = oscar;
                                tango['parent_id'] = report;
                                entity['channel'] = tango;
                                entity = mike.bind(zulu)(entity);
 91:
                                entity = undefined;
                                return entity;
                            }
                        };
                        mike = zulu.bind(tango)(mike);
                        return entity;
                    };
                    zulu = undefined;
                    zulu = report.bind(zulu)(golf, oscar);
 79:
                    zulu = _closure2_slot0;
                    zulu = zulu.roles;
                    if(!(tango != zulu)) { _fun123429_ip = 151; continue _fun123429 }
 93:
                    zulu = _closure2_slot0;
                    golf = zulu.guild_id;
                    report = global;
                    oscar = report.Set;
                    verify = zulu.roles;
                    report = oscar.prototype;
                    report = Object.create(report, {constructor: {value: oscar}});
                    offset = report;
                    zulu = new offset[oscar](verify, options);
                    oscar = zulu instanceof Object ? zulu : report;
                    report = function(argFoo, argBar) { // Original name: syncRoles
                        golf = argFoo;
                        var _closure4_slot0 = golf;
                        entity = argBar;
                        var _closure4_slot1 = entity;
                        report = _closure1_slot0;
                        tango = _closure1_slot1;
                        entity = 16;
                        tango = tango[entity];
                        entity = undefined;
                        report = report.bind(entity)(tango);
                        tango = report.keys;
                        oscar = _closure1_slot10;
                        zulu = oscar.getRoles;
                        zulu = zulu.bind(oscar)(golf);
                        tango = tango.bind(report)(zulu);
                        zulu = tango.forEach;
                        mike = function(argFoo) {
                            _fun123433: for(var _fun123433_ip = 0; ; ) switch(_fun123433_ip) {
 0:
                                tango = argFoo;
                                mike = _closure4_slot1;
                                entity = mike.has;
                                entity = entity.bind(mike)(tango);
                                if(entity) { _fun123433_ip = 81; continue _fun123433 }
 23:
                                zulu = _closure1_slot0;
                                mike = _closure1_slot1;
                                entity = 11;
                                mike = mike[entity];
                                entity = undefined;
                                zulu = zulu.bind(entity)(mike);
                                mike = zulu.dispatch;
                                entity = {};
                                oscar = 'GUILD_ROLE_DELETE';
                                entity['type'] = oscar;
                                report = _closure4_slot0;
                                entity['guildId'] = report;
                                entity['roleId'] = tango;
                                entity = mike.bind(zulu)(entity);
 81:
                                entity = undefined;
                                return entity;
                            }
                        };
                        mike = zulu.bind(tango)(mike);
                        return entity;
                    };
                    zulu = undefined;
                    zulu = report.bind(zulu)(golf, oscar);
 151:
                    zulu = _closure2_slot0;
                    zulu = zulu.emojis;
                    if(!(tango != zulu)) { _fun123429_ip = 223; continue _fun123429 }
 165:
                    zulu = _closure2_slot0;
                    golf = zulu.guild_id;
                    report = global;
                    oscar = report.Set;
                    verify = zulu.emojis;
                    report = oscar.prototype;
                    report = Object.create(report, {constructor: {value: oscar}});
                    offset = report;
                    zulu = new offset[oscar](verify, options);
                    oscar = zulu instanceof Object ? zulu : report;
                    report = function(argFoo, argBar) { // Original name: syncEmojis
                        _fun123434: for(var _fun123434_ip = 0; ; ) switch(_fun123434_ip) {
 0:
                            report = argFoo;
                            entity = argBar;
                            var _closure4_slot0 = entity;
                            tango = _closure1_slot7;
                            mike = tango.getGuildEmoji;
                            mike = mike.bind(tango)(report);
                            tango = mike.filter;
                            zulu = function(argFoo) {
                                zulu = _closure4_slot0;
                                mike = zulu.has;
                                entity = argFoo;
                                entity = entity.id;
                                entity = mike.bind(zulu)(entity);
                                return entity;
                            };
                            tango = tango.bind(mike)(zulu);
                            zulu = mike.length;
                            mike = tango.length;
                            if(!(zulu !== mike)) { _fun123434_ip = 112; continue _fun123434 }
 61:
                            zulu = _closure1_slot0;
                            mike = _closure1_slot1;
                            entity = 11;
                            mike = mike[entity];
                            entity = undefined;
                            zulu = zulu.bind(entity)(mike);
                            mike = zulu.dispatch;
                            entity = {};
                            oscar = 'GUILD_EMOJIS_UPDATE';
                            entity['type'] = oscar;
                            entity['guildId'] = report;
                            entity['emojis'] = tango;
                            entity = mike.bind(zulu)(entity);
 112:
                            entity = undefined;
                            return entity;
                        }
                    };
                    zulu = undefined;
                    zulu = report.bind(zulu)(golf, oscar);
 223:
                    zulu = _closure2_slot0;
                    zulu = zulu.stickers;
                    if(!(tango != zulu)) { _fun123429_ip = 295; continue _fun123429 }
 237:
                    mike = _closure2_slot0;
                    tango = mike.guild_id;
                    zulu = global;
                    report = zulu.Set;
                    verify = mike.stickers;
                    zulu = report.prototype;
                    zulu = Object.create(zulu, {constructor: {value: report}});
                    offset = zulu;
                    mike = new offset[report](verify, options);
                    zulu = mike instanceof Object ? mike : zulu;
                    mike = function(argFoo, argBar) { // Original name: syncStickers
                        _fun123436: for(var _fun123436_ip = 0; ; ) switch(_fun123436_ip) {
 0:
                            report = argFoo;
                            entity = argBar;
                            var _closure4_slot0 = entity;
                            tango = _closure1_slot8;
                            mike = tango.getStickersByGuildId;
                            mike = mike.bind(tango)(report);
                            tango = null;
                            if(!(tango == mike)) { _fun123436_ip = 40; continue _fun123436 }
 36:
                            mike = new Array(0);
 40:
                            tango = mike.filter;
                            zulu = function(argFoo) {
                                zulu = _closure4_slot0;
                                mike = zulu.has;
                                entity = argFoo;
                                entity = entity.id;
                                entity = mike.bind(zulu)(entity);
                                return entity;
                            };
                            tango = tango.bind(mike)(zulu);
                            zulu = mike.length;
                            mike = tango.length;
                            if(!(zulu !== mike)) { _fun123436_ip = 122; continue _fun123436 }
 71:
                            zulu = _closure1_slot0;
                            mike = _closure1_slot1;
                            entity = 11;
                            mike = mike[entity];
                            entity = undefined;
                            zulu = zulu.bind(entity)(mike);
                            mike = zulu.dispatch;
                            entity = {};
                            oscar = 'GUILD_STICKERS_UPDATE';
                            entity['type'] = oscar;
                            entity['guildId'] = report;
                            entity['stickers'] = tango;
                            entity = mike.bind(zulu)(entity);
 122:
                            entity = undefined;
                            return entity;
                        }
                    };
                    entity = undefined;
                    entity = mike.bind(entity)(tango, zulu);
 295:
                    entity = undefined;
                    return entity;
                }
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function() { // Original name: handleConnectionOpen
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 14;
        mike = mike[entity];
        entity = undefined;
        zulu = zulu.bind(entity)(mike);
        mike = zulu.getAll;
        tango = mike.bind(zulu)();
        zulu = tango.then;
        mike = function(argFoo) {
            zulu = argFoo;
            mike = zulu.forEach;
            entity = function(argFoo) {
                zulu = _closure1_slot19;
                entity = undefined;
                mike = argFoo;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo) { // Original name: handleGuildCreate
        _fun123441: for(var _fun123441_ip = 0; ; ) switch(_fun123441_ip) {
 0:
            entity = argFoo;
            entity = entity.guild;
            mike = entity.unableToSyncDeletes;
            if(!mike) { _fun123441_ip = 36; continue _fun123441 }
 17:
            zulu = _closure1_slot19;
            mike = entity.id;
            entity = undefined;
            entity = zulu.bind(entity)(mike);
 36:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = function(argFoo) { // Original name: scheduleGuild
        entity = argFoo;
        var _closure2_slot0 = entity;
        entity = global;
        report = entity.Math;
        tango = report.ceil;
        oscar = entity.Math;
        zulu = oscar.random;
        oscar = zulu.bind(oscar)();
        zulu = _closure1_slot12;
        zulu = oscar * zulu;
        tango = tango.bind(report)(zulu);
        zulu = entity.setTimeout;
        entity = undefined;
        mike = function() {
            zulu = _closure2_slot0;
            mike = function(argFoo) { // Original name: computeHashAndFetchDeletedIds
                _fun123444: for(var _fun123444_ip = 0; ; ) switch(_fun123444_ip) {
 0:
                    options = argFoo;
                    zulu = _closure1_slot10;
                    entity = zulu.getGuild;
                    zulu = entity.bind(zulu)(options);
                    verify = null;
                    tango = verify == zulu;
                    entity = undefined;
                    foxtrot = undefined;
                    if(tango) { _fun123444_ip = 40; continue _fun123444 }
 35:
                    foxtrot = zulu.name;
 40:
                    oscar = _closure1_slot13;
                    report = oscar.fileOnly;
                    zulu = global;
                    tango = zulu.HermesInternal;
                    romeo = tango.concat;
                    echo = 'requesting deleted guild entities (id: ';
                    output = ', name: ';
                    kilo = ')';
                    result = options;
                    sizing = foxtrot;
                    tango = echo[romeo](result, output, sizing, kilo, backup);
                    tango = report.bind(oscar)(tango);
                    tango = _closure1_slot20;
                    golf = zulu.Object;
                    oscar = golf.keys;
                    yankee = _closure1_slot9;
                    report = yankee.getMutableBasicGuildChannelsForGuild;
                    report = report.bind(yankee)(options);
                    report = oscar.bind(golf)(report);
                    golf = tango.bind(entity)(report);
                    oscar = zulu.Object;
                    report = oscar.keys;
                    yankee = _closure1_slot10;
                    zulu = yankee.getRoles;
                    zulu = zulu.bind(yankee)(options);
                    zulu = report.bind(oscar)(zulu);
                    oscar = tango.bind(entity)(zulu);
                    report = _closure1_slot7;
                    zulu = report.getGuildEmoji;
                    yankee = zulu.bind(report)(options);
                    report = yankee.map;
                    zulu = function(argFoo) {
                        entity = argFoo;
                        entity = entity.id;
                        return entity;
                    };
                    zulu = report.bind(yankee)(zulu);
                    report = tango.bind(entity)(zulu);
                    yankee = _closure1_slot8;
                    zulu = yankee.getStickersByGuildId;
                    romeo = zulu.bind(yankee)(options);
                    yankee = verify == romeo;
                    zulu = undefined;
                    if(yankee) { _fun123444_ip = 248; continue _fun123444 }
 231:
                    yankee = romeo.map;
                    offset = function(argFoo) {
                        entity = argFoo;
                        entity = entity.id;
                        return entity;
                    };
                    zulu = yankee.bind(romeo)(offset);
 248:
                    if(!(verify == zulu)) { _fun123444_ip = 256; continue _fun123444 }
 252:
                    zulu = new Array(0);
 256:
                    backup = tango.bind(entity)(zulu);
                    zulu = _closure1_slot11;
                    mike = zulu.getSocket;
                    zulu = mike.bind(zulu)();
                    mike = zulu.getDeletedEntityIdsNotMatchingHash;
                    echo = zulu;
                    result = options;
                    output = golf;
                    sizing = oscar;
                    kilo = report;
                    mike = echo[mike](result, output, sizing, kilo, backup, foxtrot);
                    return entity;
                }
            };
            entity = undefined;
            mike = mike.bind(entity)(zulu);
            return entity;
        };
        mike = zulu.bind(entity)(mike, tango);
        return entity;
    };
    var _closure1_slot19 = entity;
    entity = function(argFoo) { // Original name: computeHash
        tango = argFoo;
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 15;
        mike = mike[entity];
        entity = undefined;
        zulu = zulu.bind(entity)(mike);
        mike = zulu.v3;
        entity = tango.sort;
        report = entity.bind(tango)();
        tango = report.join;
        entity = ',';
        entity = tango.bind(report)(entity);
        mike = mike.bind(zulu)(entity);
        entity = mike.toString;
        entity = entity.bind(mike)();
        return entity;
    };
    var _closure1_slot20 = entity;
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
    tango = oscar.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 7;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 8;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot10 = tango;
    tango = 9;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot11 = tango;
    tango = 2000;
    var _closure1_slot12 = tango;
    tango = 10;
    tango = report[tango];
    options = oscar.bind(entity)(tango);
    tango = options.prototype;
    golf = Object.create(tango, {constructor: {value: options}});
    yankee = 'EntityVersionsManager';
    romeo = golf;
    tango = new romeo[options](yankee, offset);
    tango = tango instanceof Object ? tango : golf;
    var _closure1_slot13 = tango;
    tango = 12;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    mike = function(argFoo) {
        tango = function(argFoo) { // Original name: EntityVersionsManager
            oscar = this;
            yankee = 0;
            golf = copyRestArgs(yankee);
            entity = _closure1_slot2;
            report = _closure2_slot0;
            tango = undefined;
            entity = entity.bind(tango)(oscar, report);
            mike = _closure1_slot14;
            entity = new Array(0);
            yankee = entity;
            offset = golf;
            verify = 0;
            golf = arraySpread(yankee, offset, verify);
            entity = mike.bind(tango)(oscar, report, entity);
            mike = {};
            tango = _closure1_slot18;
            mike['GUILD_CREATE'] = tango;
            zulu = _closure1_slot16;
            mike['DELETED_ENTITY_IDS'] = zulu;
            entity['actions'] = mike;
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot6;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot3;
        report = {};
        entity = '_initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            entity = 11;
            zulu = zulu[entity];
            entity = undefined;
            report = tango.bind(entity)(zulu);
            tango = report.subscribe;
            zulu = _closure1_slot17;
            mike = 'CONNECTION_OPEN';
            mike = tango.bind(report)(mike, zulu);
            return entity;
        };
        report['value'] = entity;
        entity = new Array(2);
        entity[0] = report;
        report = {};
        golf = '_terminate';
        report['key'] = golf;
        oscar = function() { // Original name: value
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            entity = 11;
            zulu = zulu[entity];
            entity = undefined;
            report = tango.bind(entity)(zulu);
            tango = report.unsubscribe;
            zulu = _closure1_slot17;
            mike = 'CONNECTION_OPEN';
            mike = tango.bind(report)(mike, zulu);
            return entity;
        };
        report['value'] = oscar;
        entity[1] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    romeo = tango;
    mike = new romeo[mike](yankee);
    mike = mike instanceof Object ? mike : tango;
    tango = 17;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/gateway/EntityVersionsManager.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();