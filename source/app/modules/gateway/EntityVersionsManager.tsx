// app/modules/gateway/EntityVersionsManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBaz;
    zuuluu = argFre;
    report = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = report;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
 2: // try_start_0
            michal = global;
            zuuluu = michal.Boolean;
            zuuluu = zuuluu.prototype;
            tangon = zuuluu.valueOf;
            zuuluu = tangon.call;
            option = michal.Reflect;
            golfie = option.construct;
            oscard = michal.Boolean;
            report = new Array(0);
            michal = function() {
                entity = undefined;
                return entity;
            };
            michal = golfie.bind(option)(oscard, report, michal);
            michal = zuuluu.bind(tangon)(michal);
            michal = !michal;
            var _closure2_slot0 = michal;
 72: // try_end0
            _fun00002_ip = 76; continue _fun00001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot14 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo) { // Original name: handleDeletedEntityIds
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = argFoo;
            var _closure2_slot0 = tangon;
            oscard = _closure1_slot11;
            report = oscard.getGuild;
            entity = tangon.guild_id;
            report = report.bind(oscard)(entity);
            entity = null;
            oscard = entity == report;
            entity = undefined;
            yankee = undefined;
            if(oscard) { _fun00004_ip = 49; continue _fun00003 }
 44:
            yankee = report.name;
 49:
            oscard = _closure1_slot13;
            report = oscard.fileOnly;
            kiloes = tangon.guild_id;
            tangon = global;
            tangon = tangon.HermesInternal;
            verify = tangon.concat;
            sizing = 'received deleted guild entities (id: ';
            backup = ', name: ';
            romeon = ')';
            foxtra = yankee;
            tangon = sizing[verify](kiloes, backup, foxtra, romeon, yankee);
            tangon = report.bind(oscard)(tangon);
            tangon = _closure1_slot0;
            report = _closure1_slot1;
            zuuluu = 14;
            zuuluu = report[zuuluu];
            zuuluu = tangon.bind(entity)(zuuluu);
            tangon = zuuluu.Emitter;
            zuuluu = tangon.batched;
            michal = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zuuluu = _closure2_slot0;
                    zuuluu = zuuluu.channels;
                    tangon = null;
                    if(!(tangon != zuuluu)) { _fun00006_ip = 79; continue _fun00005 }
 21:
                    zuuluu = _closure2_slot0;
                    golfie = zuuluu.guild_id;
                    report = global;
                    oscard = report.Set;
                    verify = zuuluu.channels;
                    report = oscard.prototype;
                    report = Object.create(report, {constructor: {value: oscard}});
                    offset = report;
                    zuuluu = new offset[oscard](verify, option);
                    oscard = zuuluu instanceof Object ? zuuluu : report;
                    report = function(argFoo, argBar) { // Original name: syncChannels
                        verify = argFoo;
                        zuuluu = argBar;
                        var _closure4_slot0 = verify;
                        var _closure4_slot1 = zuuluu;
                        oscard = _closure1_slot0;
                        tangon = _closure1_slot1;
                        entity = 17;
                        tangon = tangon[entity];
                        entity = undefined;
                        golfie = oscard.bind(entity)(tangon);
                        oscard = golfie.keys;
                        option = _closure1_slot9;
                        tangon = option.getMutableBasicGuildChannelsForGuild;
                        tangon = tangon.bind(option)(verify);
                        tangon = oscard.bind(golfie)(tangon);
                        golfie = _closure1_slot13;
                        oscard = golfie.fileOnly;
                        report = {};
                        report['channelIdsInMemory'] = tangon;
                        report['channelIdsFromServer'] = zuuluu;
                        zuuluu = 'syncChannels';
                        zuuluu = oscard.bind(golfie)(zuuluu, report);
                        zuuluu = tangon.forEach;
                        michal = function(argFoo) {
                            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                                oscard = argFoo;
                                michal = _closure4_slot1;
                                entity = michal.has;
                                entity = entity.bind(michal)(oscard);
                                if(entity) { _fun00008_ip = 91; continue _fun00007 }
 23:
                                michal = _closure1_slot0;
                                zuuluu = _closure1_slot1;
                                entity = 12;
                                entity = zuuluu[entity];
                                report = undefined;
                                zuuluu = michal.bind(report)(entity);
                                michal = zuuluu.dispatch;
                                entity = {};
                                tangon = 'CHANNEL_DELETE';
                                entity['type'] = tangon;
                                tangon = {};
                                golfie = _closure4_slot0;
                                tangon['guild_id'] = golfie;
                                tangon['id'] = oscard;
                                tangon['parent_id'] = report;
                                entity['channel'] = tangon;
                                entity = michal.bind(zuuluu)(entity);
 91:
                                entity = undefined;
                                return entity;
                            }
                        };
                        michal = zuuluu.bind(tangon)(michal);
                        return entity;
                    };
                    zuuluu = undefined;
                    zuuluu = report.bind(zuuluu)(golfie, oscard);
 79:
                    zuuluu = _closure2_slot0;
                    zuuluu = zuuluu.roles;
                    if(!(tangon != zuuluu)) { _fun00006_ip = 151; continue _fun00005 }
 93:
                    zuuluu = _closure2_slot0;
                    golfie = zuuluu.guild_id;
                    report = global;
                    oscard = report.Set;
                    verify = zuuluu.roles;
                    report = oscard.prototype;
                    report = Object.create(report, {constructor: {value: oscard}});
                    offset = report;
                    zuuluu = new offset[oscard](verify, option);
                    oscard = zuuluu instanceof Object ? zuuluu : report;
                    report = function(argFoo, argBar) { // Original name: syncRoles
                        golfie = argFoo;
                        var _closure4_slot0 = golfie;
                        entity = argBar;
                        var _closure4_slot1 = entity;
                        report = _closure1_slot0;
                        tangon = _closure1_slot1;
                        entity = 17;
                        tangon = tangon[entity];
                        entity = undefined;
                        report = report.bind(entity)(tangon);
                        tangon = report.keys;
                        oscard = _closure1_slot10;
                        zuuluu = oscard.getRoles;
                        zuuluu = zuuluu.bind(oscard)(golfie);
                        tangon = tangon.bind(report)(zuuluu);
                        zuuluu = tangon.forEach;
                        michal = function(argFoo) {
                            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                                tangon = argFoo;
                                michal = _closure4_slot1;
                                entity = michal.has;
                                entity = entity.bind(michal)(tangon);
                                if(entity) { _fun00010_ip = 81; continue _fun00009 }
 23:
                                zuuluu = _closure1_slot0;
                                michal = _closure1_slot1;
                                entity = 12;
                                michal = michal[entity];
                                entity = undefined;
                                zuuluu = zuuluu.bind(entity)(michal);
                                michal = zuuluu.dispatch;
                                entity = {};
                                oscard = 'GUILD_ROLE_DELETE';
                                entity['type'] = oscard;
                                report = _closure4_slot0;
                                entity['guildId'] = report;
                                entity['roleId'] = tangon;
                                entity = michal.bind(zuuluu)(entity);
 81:
                                entity = undefined;
                                return entity;
                            }
                        };
                        michal = zuuluu.bind(tangon)(michal);
                        return entity;
                    };
                    zuuluu = undefined;
                    zuuluu = report.bind(zuuluu)(golfie, oscard);
 151:
                    zuuluu = _closure2_slot0;
                    zuuluu = zuuluu.emojis;
                    if(!(tangon != zuuluu)) { _fun00006_ip = 223; continue _fun00005 }
 165:
                    zuuluu = _closure2_slot0;
                    golfie = zuuluu.guild_id;
                    report = global;
                    oscard = report.Set;
                    verify = zuuluu.emojis;
                    report = oscard.prototype;
                    report = Object.create(report, {constructor: {value: oscard}});
                    offset = report;
                    zuuluu = new offset[oscard](verify, option);
                    oscard = zuuluu instanceof Object ? zuuluu : report;
                    report = function(argFoo, argBar) { // Original name: syncEmojis
                        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                            report = argFoo;
                            entity = argBar;
                            var _closure4_slot0 = entity;
                            tangon = _closure1_slot7;
                            michal = tangon.getGuildEmoji;
                            michal = michal.bind(tangon)(report);
                            tangon = michal.filter;
                            zuuluu = function(argFoo) {
                                zuuluu = _closure4_slot0;
                                michal = zuuluu.has;
                                entity = argFoo;
                                entity = entity.id;
                                entity = michal.bind(zuuluu)(entity);
                                return entity;
                            };
                            tangon = tangon.bind(michal)(zuuluu);
                            zuuluu = michal.length;
                            michal = tangon.length;
                            if(!(zuuluu !== michal)) { _fun00012_ip = 112; continue _fun00011 }
 61:
                            zuuluu = _closure1_slot0;
                            michal = _closure1_slot1;
                            entity = 12;
                            michal = michal[entity];
                            entity = undefined;
                            zuuluu = zuuluu.bind(entity)(michal);
                            michal = zuuluu.dispatch;
                            entity = {};
                            oscard = 'GUILD_EMOJIS_UPDATE';
                            entity['type'] = oscard;
                            entity['guildId'] = report;
                            entity['emojis'] = tangon;
                            entity = michal.bind(zuuluu)(entity);
 112:
                            entity = undefined;
                            return entity;
                        }
                    };
                    zuuluu = undefined;
                    zuuluu = report.bind(zuuluu)(golfie, oscard);
 223:
                    zuuluu = _closure2_slot0;
                    zuuluu = zuuluu.stickers;
                    if(!(tangon != zuuluu)) { _fun00006_ip = 295; continue _fun00005 }
 237:
                    michal = _closure2_slot0;
                    tangon = michal.guild_id;
                    zuuluu = global;
                    report = zuuluu.Set;
                    verify = michal.stickers;
                    zuuluu = report.prototype;
                    zuuluu = Object.create(zuuluu, {constructor: {value: report}});
                    offset = zuuluu;
                    michal = new offset[report](verify, option);
                    zuuluu = michal instanceof Object ? michal : zuuluu;
                    michal = function(argFoo, argBar) { // Original name: syncStickers
                        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                            report = argFoo;
                            entity = argBar;
                            var _closure4_slot0 = entity;
                            tangon = _closure1_slot8;
                            michal = tangon.getStickersByGuildId;
                            michal = michal.bind(tangon)(report);
                            tangon = null;
                            if(!(tangon == michal)) { _fun00014_ip = 40; continue _fun00013 }
 36:
                            michal = new Array(0);
 40:
                            tangon = michal.filter;
                            zuuluu = function(argFoo) {
                                zuuluu = _closure4_slot0;
                                michal = zuuluu.has;
                                entity = argFoo;
                                entity = entity.id;
                                entity = michal.bind(zuuluu)(entity);
                                return entity;
                            };
                            tangon = tangon.bind(michal)(zuuluu);
                            zuuluu = michal.length;
                            michal = tangon.length;
                            if(!(zuuluu !== michal)) { _fun00014_ip = 122; continue _fun00013 }
 71:
                            zuuluu = _closure1_slot0;
                            michal = _closure1_slot1;
                            entity = 12;
                            michal = michal[entity];
                            entity = undefined;
                            zuuluu = zuuluu.bind(entity)(michal);
                            michal = zuuluu.dispatch;
                            entity = {};
                            oscard = 'GUILD_STICKERS_UPDATE';
                            entity['type'] = oscard;
                            entity['guildId'] = report;
                            entity['stickers'] = tangon;
                            entity = michal.bind(zuuluu)(entity);
 122:
                            entity = undefined;
                            return entity;
                        }
                    };
                    entity = undefined;
                    entity = michal.bind(entity)(tangon, zuuluu);
 295:
                    entity = undefined;
                    return entity;
                }
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = function() { // Original name: handleConnectionOpen
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 15;
        michal = michal[entity];
        entity = undefined;
        zuuluu = zuuluu.bind(entity)(michal);
        michal = zuuluu.getAll;
        tangon = michal.bind(zuuluu)();
        zuuluu = tangon.then;
        michal = function(argFoo) {
            zuuluu = argFoo;
            michal = zuuluu.forEach;
            entity = function(argFoo) {
                zuuluu = _closure1_slot18;
                entity = undefined;
                michal = argFoo;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo) { // Original name: handleGuildCreate
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = argFoo;
            entity = entity.guild;
            michal = entity.unableToSyncDeletes;
            if(!michal) { _fun00016_ip = 36; continue _fun00015 }
 17:
            zuuluu = _closure1_slot18;
            michal = entity.id;
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
 36:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo) { // Original name: scheduleGuild
        entity = argFoo;
        var _closure2_slot0 = entity;
        entity = global;
        report = entity.Math;
        tangon = report.ceil;
        oscard = entity.Math;
        zuuluu = oscard.random;
        oscard = zuuluu.bind(oscard)();
        zuuluu = 2000;
        zuuluu = zuuluu * oscard;
        tangon = tangon.bind(report)(zuuluu);
        zuuluu = entity.setTimeout;
        entity = undefined;
        michal = function() {
            zuuluu = _closure2_slot0;
            michal = function(argFoo) { // Original name: computeHashAndFetchDeletedIds
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    option = argFoo;
                    zuuluu = _closure1_slot11;
                    entity = zuuluu.getGuild;
                    zuuluu = entity.bind(zuuluu)(option);
                    verify = null;
                    tangon = verify == zuuluu;
                    entity = undefined;
                    foxtra = undefined;
                    if(tangon) { _fun00018_ip = 40; continue _fun00017 }
 35:
                    foxtra = zuuluu.name;
 40:
                    oscard = _closure1_slot13;
                    report = oscard.fileOnly;
                    zuuluu = global;
                    tangon = zuuluu.HermesInternal;
                    romeon = tangon.concat;
                    echoed = 'requesting deleted guild entities (id: ';
                    output = ', name: ';
                    kiloes = ')';
                    result = option;
                    sizing = foxtra;
                    tangon = echoed[romeon](result, output, sizing, kiloes, backup);
                    tangon = report.bind(oscard)(tangon);
                    tangon = _closure1_slot19;
                    golfie = zuuluu.Object;
                    oscard = golfie.keys;
                    yankee = _closure1_slot9;
                    report = yankee.getMutableBasicGuildChannelsForGuild;
                    report = report.bind(yankee)(option);
                    report = oscard.bind(golfie)(report);
                    golfie = tangon.bind(entity)(report);
                    oscard = zuuluu.Object;
                    report = oscard.keys;
                    yankee = _closure1_slot10;
                    zuuluu = yankee.getRoles;
                    zuuluu = zuuluu.bind(yankee)(option);
                    zuuluu = report.bind(oscard)(zuuluu);
                    oscard = tangon.bind(entity)(zuuluu);
                    report = _closure1_slot7;
                    zuuluu = report.getGuildEmoji;
                    yankee = zuuluu.bind(report)(option);
                    report = yankee.map;
                    zuuluu = function(argFoo) {
                        entity = argFoo;
                        entity = entity.id;
                        return entity;
                    };
                    zuuluu = report.bind(yankee)(zuuluu);
                    report = tangon.bind(entity)(zuuluu);
                    yankee = _closure1_slot8;
                    zuuluu = yankee.getStickersByGuildId;
                    romeon = zuuluu.bind(yankee)(option);
                    yankee = verify == romeon;
                    zuuluu = undefined;
                    if(yankee) { _fun00018_ip = 248; continue _fun00017 }
 231:
                    yankee = romeon.map;
                    offset = function(argFoo) {
                        entity = argFoo;
                        entity = entity.id;
                        return entity;
                    };
                    zuuluu = yankee.bind(romeon)(offset);
 248:
                    if(!(verify == zuuluu)) { _fun00018_ip = 256; continue _fun00017 }
 252:
                    zuuluu = new Array(0);
 256:
                    backup = tangon.bind(entity)(zuuluu);
                    zuuluu = _closure1_slot12;
                    michal = zuuluu.getSocket;
                    zuuluu = michal.bind(zuuluu)();
                    michal = zuuluu.getDeletedEntityIdsNotMatchingHash;
                    echoed = zuuluu;
                    result = option;
                    output = golfie;
                    sizing = oscard;
                    kiloes = report;
                    michal = echoed[michal](result, output, sizing, kiloes, backup, foxtra);
                    return entity;
                }
            };
            entity = undefined;
            michal = michal.bind(entity)(zuuluu);
            return entity;
        };
        michal = zuuluu.bind(entity)(michal, tangon);
        return entity;
    };
    var _closure1_slot18 = entity;
    entity = function(argFoo) { // Original name: computeHash
        tangon = argFoo;
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 16;
        michal = michal[entity];
        entity = undefined;
        zuuluu = zuuluu.bind(entity)(michal);
        michal = zuuluu.v3;
        entity = tangon.sort;
        report = entity.bind(tangon)();
        tangon = report.join;
        entity = ',';
        entity = tangon.bind(report)(entity);
        michal = michal.bind(zuuluu)(entity);
        entity = michal.toString;
        entity = entity.bind(michal)();
        return entity;
    };
    var _closure1_slot19 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = report[entity];
    entity = undefined;
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 5;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 6;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 7;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 8;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot10 = tangon;
    tangon = 9;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot11 = tangon;
    tangon = 10;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot12 = tangon;
    tangon = 11;
    tangon = report[tangon];
    option = oscard.bind(entity)(tangon);
    tangon = option.prototype;
    golfie = Object.create(tangon, {constructor: {value: option}});
    yankee = 'EntityVersionsManager';
    romeon = golfie;
    tangon = new romeon[option](yankee, offset);
    tangon = tangon instanceof Object ? tangon : golfie;
    var _closure1_slot13 = tangon;
    tangon = 13;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    michal = function(argFoo) {
        tangon = function(argFoo) { // Original name: EntityVersionsManager
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                report = this;
                foxtra = 0;
                entity = copyRestArgs(foxtra);
                golfie = _closure1_slot2;
                michal = _closure2_slot0;
                tangon = undefined;
                golfie = golfie.bind(tangon)(report, michal);
                offset = new Array(0);
                foxtra = offset;
                romeon = entity;
                yankee = 0;
                entity = arraySpread(foxtra, romeon, yankee);
                entity = _closure1_slot5;
                verify = entity.bind(tangon)(michal);
                michal = _closure1_slot4;
                entity = _closure1_slot14;
                entity = entity.bind(tangon)();
                if(entity) { _fun00020_ip = 84; continue _fun00019 }
 71:
                entity = verify.apply;
                entity = entity.bind(verify)(report, offset);
                _fun00020_ip = 118; continue _fun00019;
 84:
                oscard = global;
                option = oscard.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot5;
                oscard = oscard.bind(tangon)(report);
                oscard = oscard.constructor;
                entity = golfie.bind(option)(verify, offset, oscard);
 118:
                entity = michal.bind(tangon)(report, entity);
                michal = {};
                tangon = _closure1_slot17;
                michal['GUILD_CREATE'] = tangon;
                zuuluu = _closure1_slot15;
                michal['DELETED_ENTITY_IDS'] = zuuluu;
                entity['actions'] = michal;
                return entity;
            }
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot6;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot3;
        report = {};
        entity = '_initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            entity = 12;
            zuuluu = zuuluu[entity];
            entity = undefined;
            report = tangon.bind(entity)(zuuluu);
            tangon = report.subscribe;
            zuuluu = _closure1_slot16;
            michal = 'CONNECTION_OPEN';
            michal = tangon.bind(report)(michal, zuuluu);
            return entity;
        };
        report['value'] = entity;
        entity = new Array(2);
        entity[0] = report;
        report = {};
        golfie = '_terminate';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            entity = 12;
            zuuluu = zuuluu[entity];
            entity = undefined;
            report = tangon.bind(entity)(zuuluu);
            tangon = report.unsubscribe;
            zuuluu = _closure1_slot16;
            michal = 'CONNECTION_OPEN';
            michal = tangon.bind(report)(michal, zuuluu);
            return entity;
        };
        report['value'] = oscard;
        entity[1] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    michal = michal.bind(entity)(tangon);
    tangon = michal.prototype;
    tangon = Object.create(tangon, {constructor: {value: michal}});
    romeon = tangon;
    michal = new romeon[michal](yankee);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 18;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/gateway/EntityVersionsManager.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();