// app/modules/recents/RecentMentionsStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
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
 70: // try_end0
            _fun00002_ip = 74; continue _fun00001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot32 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot32 = entity;
    entity = function(argFoo) { // Original name: updateChannelMentionCount
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            oscard = michal.addedMessages;
            zuuluu = michal.deletedMessages;
            michal = null;
            if(!(michal != oscard)) { _fun00004_ip = 38; continue _fun00003 }
 23:
            report = oscard.forEach;
            tangon = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    michal = argFoo;
                    tangon = _closure1_slot24;
                    zuuluu = michal.getChannelId;
                    zuuluu = zuuluu.bind(michal)();
                    tangon = tangon[zuuluu];
                    zuuluu = null;
                    if(!(zuuluu == tangon)) { _fun00006_ip = 50; continue _fun00005 }
 30:
                    report = _closure1_slot24;
                    zuuluu = michal.getChannelId;
                    tangon = zuuluu.bind(michal)();
                    zuuluu = 0;
                    report[tangon] = zuuluu;
 50:
                    zuuluu = _closure1_slot24;
                    entity = michal.getChannelId;
                    michal = entity.bind(michal)();
                    entity = zuuluu[michal];
                    entity = entity + 1;
                    zuuluu[michal] = entity;
                    entity = undefined;
                    return entity;
                }
            };
            tangon = report.bind(oscard)(tangon);
 38:
            if(!(michal != zuuluu)) { _fun00004_ip = 57; continue _fun00003 }
 42:
            michal = zuuluu.forEach;
            entity = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    golfie = argFoo;
                    zuuluu = _closure1_slot24;
                    michal = golfie.getChannelId;
                    michal = michal.bind(golfie)();
                    zuuluu = zuuluu[michal];
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00008_ip = 94; continue _fun00007 }
 30:
                    zuuluu = _closure1_slot24;
                    michal = golfie.getChannelId;
                    michal = michal.bind(golfie)();
                    tangon = global;
                    oscard = tangon.Math;
                    report = oscard.max;
                    tangon = _closure1_slot24;
                    entity = golfie.getChannelId;
                    entity = entity.bind(golfie)();
                    tangon = tangon[entity];
                    entity = 1;
                    tangon = tangon - entity;
                    entity = 0;
                    entity = report.bind(oscard)(entity, tangon);
                    zuuluu[michal] = entity;
 94:
                    entity = undefined;
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
 57:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot33 = entity;
    entity = function(argFoo) { // Original name: findOrCreateMessageRecord
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            michal = _closure1_slot8;
            michal = entity instanceof michal;
            if(michal) { _fun00010_ip = 84; continue _fun00009 }
 17:
            oscard = _closure1_slot11;
            report = oscard.getMessage;
            tangon = entity.channel_id;
            michal = entity.id;
            michal = report.bind(oscard)(tangon, michal);
            tangon = null;
            if(!(tangon == michal)) { _fun00010_ip = 82; continue _fun00009 }
 49:
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            zuuluu = 16;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            tangon = report.bind(zuuluu)(tangon);
            zuuluu = tangon.createMessageRecord;
            michal = zuuluu.bind(tangon)(entity);
 82:
            return michal;
 84:
            return entity;
        }
    };
    var _closure1_slot34 = entity;
    entity = function(argFoo) { // Original name: hasMentionNotificationEnabled
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            option = argFoo;
            tangon = _closure1_slot10;
            zuuluu = tangon.getChannel;
            entity = option.channel_id;
            golfie = zuuluu.bind(tangon)(entity);
            entity = null;
            if(!(entity != golfie)) { _fun00012_ip = 253; continue _fun00011 }
 34:
            zuuluu = _closure1_slot21;
            report = zuuluu.GUILD_TEXTUAL;
            tangon = report.has;
            zuuluu = golfie.type;
            zuuluu = tangon.bind(report)(zuuluu);
            if(!zuuluu) { _fun00012_ip = 253; continue _fun00011 }
 65:
            tangon = _closure1_slot15;
            zuuluu = tangon.resolvedMessageNotifications;
            tangon = zuuluu.bind(tangon)(golfie);
            zuuluu = _closure1_slot20;
            zuuluu = zuuluu.ALL_MESSAGES;
            if(!(zuuluu !== tangon)) { _fun00012_ip = 249; continue _fun00011 }
 97:
            zuuluu = _closure1_slot20;
            zuuluu = zuuluu.ONLY_MENTIONS;
            if(!(zuuluu !== tangon)) { _fun00012_ip = 125; continue _fun00011 }
 111:
            zuuluu = _closure1_slot20;
            zuuluu = zuuluu.NO_MESSAGES;
            zuuluu = false;
            return zuuluu;
 125:
            report = _closure1_slot15;
            tangon = report.isSuppressEveryoneEnabled;
            zuuluu = golfie.getGuildId;
            zuuluu = zuuluu.bind(golfie)();
            oscard = tangon.bind(report)(zuuluu);
            report = _closure1_slot15;
            tangon = report.isSuppressRolesEnabled;
            zuuluu = golfie.getGuildId;
            zuuluu = zuuluu.bind(golfie)();
            report = tangon.bind(report)(zuuluu);
            tangon = _closure1_slot16;
            zuuluu = tangon.getCurrentUser;
            golfie = zuuluu.bind(tangon)();
            entity = entity != golfie;
            if(!entity) { _fun00012_ip = 247; continue _fun00011 }
 195:
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 17;
            michal = tangon[michal];
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = {};
            michal['message'] = option;
            golfie = golfie.id;
            michal['userId'] = golfie;
            michal['suppressEveryone'] = oscard;
            michal['suppressRoles'] = report;
            entity = zuuluu.bind(tangon)(michal);
 247:
            return entity;
 249:
            entity = true;
            return entity;
 253:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot35 = entity;
    entity = function(argFoo) { // Original name: parseMessage
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            zuuluu = argFoo;
            oscard = arguments[1];
            option = undefined;
            if(!(oscard === option)) { _fun00014_ip = 14; continue _fun00013 }
 12:
            oscard = null;
 14:
            michal = _closure1_slot1;
            tangon = _closure1_slot2;
            entity = 20;
            entity = tangon[entity];
            entity = michal.bind(option)(entity);
            entity = entity.bind(option)(zuuluu);
            if(!entity) { _fun00014_ip = 77; continue _fun00013 }
 45:
            entity = _closure1_slot19;
            tangon = entity.SELF_MENTIONABLE_SYSTEM;
            michal = tangon.has;
            entity = zuuluu.type;
            entity = michal.bind(tangon)(entity);
            if(entity) { _fun00014_ip = 77; continue _fun00013 }
 73:
            entity = null;
            return entity;
 77:
            entity = null;
            if(!(entity == oscard)) { _fun00014_ip = 88; continue _fun00013 }
 83:
            oscard = zuuluu.channel_id;
 88:
            tangon = _closure1_slot10;
            michal = tangon.getChannel;
            romeon = michal.bind(tangon)(oscard);
            if(!(entity != romeon)) { _fun00014_ip = 493; continue _fun00013 }
 109:
            tangon = romeon.type;
            michal = _closure1_slot18;
            michal = michal.DM;
            if(!(tangon !== michal)) { _fun00014_ip = 493; continue _fun00013 }
 131:
            michal = _closure1_slot28;
            tangon = michal.guildFilter;
            michal = _closure1_slot17;
            michal = michal.THIS_SERVER;
            if(!(tangon === michal)) { _fun00014_ip = 186; continue _fun00013 }
 155:
            michal = romeon.getGuildId;
            tangon = michal.bind(romeon)();
            oscard = _closure1_slot14;
            michal = oscard.getGuildId;
            michal = michal.bind(oscard)();
            if(!(tangon === michal)) { _fun00014_ip = 491; continue _fun00013 }
 186:
            tangon = _closure1_slot9;
            michal = tangon.getId;
            verify = michal.bind(tangon)();
            tangon = _closure1_slot13;
            michal = tangon.isBlockedOrIgnoredForMessage;
            michal = michal.bind(tangon)(zuuluu);
            if(michal) { _fun00014_ip = 489; continue _fun00013 }
 221:
            tangon = _closure1_slot1;
            oscard = _closure1_slot2;
            michal = 21;
            michal = oscard[michal];
            michal = tangon.bind(option)(michal);
            michal = michal.bind(option)(zuuluu, verify);
            if(michal) { _fun00014_ip = 489; continue _fun00013 }
 253:
            michal = _closure1_slot34;
            zuuluu = michal.bind(option)(zuuluu);
            michal = _closure1_slot28;
            michal = michal.everyoneFilter;
            golfie = !michal;
            michal = _closure1_slot28;
            michal = michal.roleFilter;
            oscard = !michal;
            tangon = _closure1_slot1;
            michal = _closure1_slot2;
            offset = 17;
            michal = michal[offset];
            tangon = tangon.bind(option)(michal);
            michal = {};
            michal['message'] = zuuluu;
            michal['userId'] = verify;
            michal['suppressEveryone'] = golfie;
            michal['suppressRoles'] = oscard;
            tangon = tangon.bind(option)(michal);
            michal = null;
            if(!tangon) { _fun00014_ip = 487; continue _fun00013 }
 341:
            tangon = _closure1_slot31;
            if(!tangon) { _fun00014_ip = 377; continue _fun00013 }
 348:
            yankee = _closure1_slot12;
            golfie = yankee.ackMessageId;
            oscard = romeon.id;
            golfie = golfie.bind(yankee)(oscard);
            oscard = zuuluu.id;
            tangon = golfie !== oscard;
 377:
            if(!tangon) { _fun00014_ip = 472; continue _fun00013 }
 380:
            golfie = _closure1_slot1;
            oscard = _closure1_slot2;
            oscard = oscard[offset];
            golfie = golfie.bind(option)(oscard);
            oscard = {};
            oscard['message'] = zuuluu;
            oscard['userId'] = verify;
            yankee = _closure1_slot15;
            offset = yankee.isSuppressEveryoneEnabled;
            verify = romeon.getGuildId;
            verify = verify.bind(romeon)();
            verify = offset.bind(yankee)(verify);
            oscard['suppressEveryone'] = verify;
            yankee = _closure1_slot15;
            offset = yankee.isSuppressRolesEnabled;
            verify = romeon.getGuildId;
            verify = verify.bind(romeon)();
            verify = offset.bind(yankee)(verify);
            oscard['suppressRoles'] = verify;
            tangon = golfie.bind(option)(oscard);
 472:
            michal = zuuluu;
            if(!tangon) { _fun00014_ip = 487; continue _fun00013 }
 478:
            tangon = false;
            _closure1_slot31 = tangon;
            michal = zuuluu;
 487:
            return michal;
 489:
            return entity;
 491:
            return entity;
 493:
            return entity;
        }
    };
    var _closure1_slot36 = entity;
    entity = function(argFoo) { // Original name: deleteMessage
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            tangon = argFoo;
            var _closure2_slot0 = tangon;
            entity = _closure1_slot25;
            report = entity[tangon];
            entity = null;
            if(!(entity != report)) { _fun00016_ip = 127; continue _fun00015 }
 26:
            entity = _closure1_slot25;
            entity = delete entity[tangon];
            option = _closure1_slot33;
            golfie = {};
            report = _closure1_slot1;
            oscard = _closure1_slot2;
            tangon = 18;
            verify = oscard[tangon];
            entity = undefined;
            romeon = report.bind(entity)(verify);
            yankee = romeon.filter;
            offset = _closure1_slot23;
            verify = function(argFoo) {
                entity = argFoo;
                michal = entity.id;
                entity = _closure2_slot0;
                entity = michal === entity;
                return entity;
            };
            verify = yankee.bind(romeon)(offset, verify);
            golfie['deletedMessages'] = verify;
            golfie = option.bind(entity)(golfie);
            tangon = oscard[tangon];
            oscard = report.bind(entity)(tangon);
            report = oscard.filter;
            tangon = _closure1_slot23;
            michal = function(argFoo) {
                entity = argFoo;
                michal = entity.id;
                entity = _closure2_slot0;
                entity = michal !== entity;
                return entity;
            };
            michal = report.bind(oscard)(tangon, michal);
            _closure1_slot23 = michal;
            return entity;
 127:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot37 = entity;
    yankee = function(argFoo) { // Original name: handleMessageDelete
        entity = argFoo;
        zuuluu = entity.id;
        michal = _closure1_slot37;
        entity = undefined;
        entity = michal.bind(entity)(zuuluu);
        return entity;
    };
    foxtra = function(argFoo) { // Original name: handleSetRecentMentionsFilters
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            entity = {};
            yankee = _closure1_slot28;
            romeon = entity;
            tangon = copyDataProperties(romeon, yankee);
            var _closure2_slot0 = entity;
            report = _closure1_slot1;
            oscard = _closure1_slot2;
            tangon = 18;
            golfie = oscard[tangon];
            entity = undefined;
            option = report.bind(entity)(golfie);
            golfie = option.defaults;
            tangon = oscard[tangon];
            offset = report.bind(entity)(tangon);
            verify = offset.pick;
            report = argFoo;
            tangon = ['guildFilter', 'roleFilter', 'everyoneFilter'];
            report = verify.bind(offset)(report, tangon);
            tangon = _closure1_slot28;
            tangon = golfie.bind(option)(report, tangon);
            _closure1_slot28 = tangon;
            report = _closure1_slot0;
            tangon = 15;
            tangon = oscard[tangon];
            tangon = report.bind(entity)(tangon);
            golfie = tangon.Storage;
            oscard = golfie.set;
            report = _closure1_slot22;
            tangon = _closure1_slot28;
            tangon = oscard.bind(golfie)(report, tangon);
            golfie = function(argFoo, argBar) { // Original name: changesTo
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    zuuluu = argFoo;
                    entity = _closure2_slot0;
                    tangon = entity[zuuluu];
                    entity = _closure1_slot28;
                    entity = entity[zuuluu];
                    entity = tangon !== entity;
                    if(!entity) { _fun00020_ip = 47; continue _fun00019 }
 32:
                    michal = _closure1_slot28;
                    zuuluu = michal[zuuluu];
                    michal = argBar;
                    entity = zuuluu === michal;
 47:
                    return entity;
                }
            };
            tangon = _closure1_slot17;
            report = tangon.THIS_SERVER;
            tangon = 'guildFilter';
            report = golfie.bind(entity)(tangon, report);
            if(report) { _fun00018_ip = 179; continue _fun00017 }
 167:
            oscard = 'everyoneFilter';
            tangon = false;
            report = golfie.bind(entity)(oscard, tangon);
 179:
            if(report) { _fun00018_ip = 194; continue _fun00017 }
 182:
            oscard = 'roleFilter';
            tangon = false;
            report = golfie.bind(entity)(oscard, tangon);
 194:
            tangon = {};
            _closure1_slot25 = tangon;
            tangon = new Array(0);
            var _closure2_slot1 = tangon;
            if(!report) { _fun00018_ip = 230; continue _fun00017 }
 211:
            golfie = _closure1_slot23;
            oscard = golfie.forEach;
            report = function(argFoo) {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    tangon = _closure1_slot36;
                    entity = undefined;
                    michal = argFoo;
                    michal = tangon.bind(entity)(michal);
                    tangon = null;
                    if(!(tangon != michal)) { _fun00022_ip = 55; continue _fun00021 }
 23:
                    report = _closure2_slot1;
                    tangon = report.push;
                    tangon = tangon.bind(report)(michal);
                    tangon = _closure1_slot25;
                    zuuluu = michal.id;
                    michal = true;
                    tangon[zuuluu] = michal;
 55:
                    return entity;
                }
            };
            report = oscard.bind(golfie)(report);
 230:
            _closure1_slot23 = tangon;
            michal = function(argFoo) { // Original name: resetChannelMentionCount
                zuuluu = argFoo;
                entity = {};
                _closure1_slot24 = entity;
                michal = zuuluu.forEach;
                entity = function(argFoo) {
                    _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                        michal = argFoo;
                        tangon = _closure1_slot24;
                        zuuluu = michal.getChannelId;
                        zuuluu = zuuluu.bind(michal)();
                        tangon = tangon[zuuluu];
                        zuuluu = null;
                        if(!(zuuluu == tangon)) { _fun00024_ip = 50; continue _fun00023 }
 30:
                        report = _closure1_slot24;
                        zuuluu = michal.getChannelId;
                        tangon = zuuluu.bind(michal)();
                        zuuluu = 0;
                        report[tangon] = zuuluu;
 50:
                        zuuluu = _closure1_slot24;
                        entity = michal.getChannelId;
                        michal = entity.bind(michal)();
                        entity = zuuluu[michal];
                        entity = entity + 1;
                        zuuluu[michal] = entity;
                        entity = undefined;
                        return entity;
                    }
                };
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            };
            michal = michal.bind(entity)(tangon);
            michal = _closure1_slot23;
            tangon = michal.length;
            michal = 0;
            if(!(michal === tangon)) { _fun00018_ip = 265; continue _fun00017 }
 259:
            michal = false;
            _closure1_slot29 = michal;
 265:
            return entity;
        }
    };
    var _closure1_slot38 = foxtra;
    romeon = function() { // Original name: handleConnectionOpen
        entity = new Array(0);
        _closure1_slot23 = entity;
        entity = {};
        _closure1_slot25 = entity;
        entity = false;
        _closure1_slot29 = entity;
        _closure1_slot31 = entity;
        entity = {};
        _closure1_slot24 = entity;
        entity = undefined;
        return entity;
    };
    var _closure1_slot39 = romeon;
    verify = function() { // Original name: handleRelationshipUpdate
        report = _closure1_slot33;
        tangon = {};
        golfie = _closure1_slot1;
        oscard = _closure1_slot2;
        entity = 18;
        oscard = oscard[entity];
        entity = undefined;
        verify = golfie.bind(entity)(oscard);
        option = verify.filter;
        golfie = _closure1_slot23;
        oscard = function(argFoo) {
            zuuluu = _closure1_slot13;
            michal = zuuluu.isBlockedOrIgnoredForMessage;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        oscard = option.bind(verify)(golfie, oscard);
        tangon['deletedMessages'] = oscard;
        tangon = report.bind(entity)(tangon);
        report = _closure1_slot23;
        tangon = report.filter;
        michal = function(argFoo) {
            zuuluu = _closure1_slot13;
            michal = zuuluu.isBlockedOrIgnoredForMessage;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            entity = !entity;
            return entity;
        };
        michal = tangon.bind(report)(michal);
        _closure1_slot23 = michal;
        return entity;
    };
    offset = function(argFoo) { // Original name: handleDeleteChannel
        entity = argFoo;
        entity = entity.channel;
        var _closure2_slot0 = entity;
        tangon = new Array(0);
        var _closure2_slot1 = tangon;
        oscard = _closure1_slot1;
        report = _closure1_slot2;
        entity = 18;
        report = report[entity];
        entity = undefined;
        golfie = oscard.bind(entity)(report);
        oscard = golfie.filter;
        report = _closure1_slot23;
        zuuluu = function(argFoo) {
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                tangon = argFoo;
                zuuluu = tangon.channel_id;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = zuuluu !== entity;
                if(entity) { _fun00026_ip = 59; continue _fun00025 }
 27:
                report = _closure1_slot25;
                zuuluu = tangon.id;
                zuuluu = delete report[zuuluu];
                zuuluu = _closure2_slot1;
                michal = zuuluu.push;
                michal = michal.bind(zuuluu)(tangon);
                entity = false;
 59:
                return entity;
            }
        };
        zuuluu = oscard.bind(golfie)(report, zuuluu);
        _closure1_slot23 = zuuluu;
        zuuluu = _closure1_slot33;
        michal = {};
        michal['deletedMessages'] = tangon;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    entity = global;
    kiloes = entity.Object;
    option = kiloes.defineProperty;
    michal = {};
    backup = true;
    michal['value'] = backup;
    entity = '__esModule';
    entity = option.bind(kiloes)(zuuluu, entity, michal);
    option = 0;
    michal = oscard[option];
    entity = undefined;
    michal = golfie.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 3;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot6 = michal;
    michal = 4;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot7 = michal;
    michal = 5;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot8 = michal;
    michal = 6;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot9 = michal;
    michal = 7;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot10 = michal;
    michal = 8;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot11 = michal;
    michal = 9;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot12 = michal;
    michal = 10;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot13 = michal;
    michal = 11;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot14 = michal;
    michal = 12;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot15 = michal;
    michal = 13;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot16 = michal;
    michal = 14;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    result = michal.RecentMentionsFilters;
    var _closure1_slot17 = result;
    kiloes = michal.ChannelTypes;
    var _closure1_slot18 = kiloes;
    kiloes = michal.MessageTypesSets;
    var _closure1_slot19 = kiloes;
    kiloes = michal.UserNotificationSettings;
    var _closure1_slot20 = kiloes;
    michal = michal.ChannelTypesSets;
    var _closure1_slot21 = michal;
    output = 'recentMentionFilterSettings';
    var _closure1_slot22 = output;
    michal = new Array(0);
    var _closure1_slot23 = michal;
    michal = {};
    var _closure1_slot24 = michal;
    michal = {};
    var _closure1_slot25 = michal;
    michal = false;
    var _closure1_slot26 = michal;
    var _closure1_slot27 = backup;
    backup = 15;
    backup = oscard[backup];
    backup = report.bind(entity)(backup);
    sizing = backup.Storage;
    kiloes = sizing.get;
    backup = {'guildFilter': null, 'everyoneFilter': true, 'roleFilter': true};
    result = result.ALL_SERVERS;
    backup['guildFilter'] = result;
    backup = kiloes.bind(sizing)(output, backup);
    var _closure1_slot28 = backup;
    var _closure1_slot29 = michal;
    var _closure1_slot30 = option;
    var _closure1_slot31 = michal;
    michal = 22;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    option = michal.Store;
    michal = function(argFoo) {
        tangon = function() { // Original name: RecentMentionsStore
            _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                tangon = this;
                zuuluu = undefined;
                report = undefined;
                entity = _closure1_slot3;
                michal = _closure2_slot0;
                entity = entity.bind(zuuluu)(tangon, michal);
                entity = _closure1_slot6;
                verify = entity.bind(zuuluu)(michal);
                michal = _closure1_slot5;
                entity = _closure1_slot32;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00028_ip = 69; continue _fun00027 }
 51:
                golfie = verify.apply;
                report = arguments;
                entity = report;
                entity = golfie.bind(verify)(tangon, entity);
                _fun00028_ip = 105; continue _fun00027;
 69:
                golfie = global;
                option = golfie.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot6;
                oscard = oscard.bind(zuuluu)(tangon);
                oscard = oscard.constructor;
                report = arguments;
                entity = golfie.bind(option)(verify, report, oscard);
 105:
                entity = michal.bind(zuuluu)(tangon, entity);
                return entity;
            }
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot7;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot4;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            golfie = this;
            oscard = golfie.waitFor;
            romeon = _closure1_slot16;
            yankee = _closure1_slot10;
            offset = _closure1_slot11;
            verify = _closure1_slot12;
            option = _closure1_slot15;
            foxtra = golfie;
            entity = foxtra[oscard](romeon, yankee, offset, verify, option, golfie);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(14);
        entity[0] = report;
        report = {};
        golfie = 'hasLoadedEver';
        report['key'] = golfie;
        golfie = function() { // Original name: get
            entity = _closure1_slot29;
            return entity;
        };
        report['get'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'lastLoaded';
        report['key'] = golfie;
        golfie = function() { // Original name: get
            entity = _closure1_slot30;
            return entity;
        };
        report['get'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'getMentions';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                entity = _closure1_slot29;
                if(entity) { _fun00030_ip = 30; continue _fun00029 }
 10:
                entity = _closure1_slot23;
                zuuluu = entity.length;
                entity = 0;
                zuuluu = zuuluu > entity;
                entity = null;
                if(!zuuluu) { _fun00030_ip = 34; continue _fun00029 }
 30:
                entity = _closure1_slot23;
 34:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'getSettingsFilteredMentions';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                entity = _closure1_slot29;
                if(entity) { _fun00032_ip = 30; continue _fun00031 }
 10:
                entity = _closure1_slot23;
                zuuluu = entity.length;
                entity = 0;
                zuuluu = zuuluu > entity;
                entity = null;
                if(!zuuluu) { _fun00032_ip = 48; continue _fun00031 }
 30:
                tangon = _closure1_slot23;
                zuuluu = tangon.filter;
                michal = _closure1_slot35;
                entity = zuuluu.bind(tangon)(michal);
 48:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[4] = report;
        report = {};
        golfie = 'hasMention';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            michal = _closure1_slot25;
            entity = argFoo;
            entity = michal[entity];
            return entity;
        };
        report['value'] = golfie;
        entity[5] = report;
        report = {};
        golfie = 'loading';
        report['key'] = golfie;
        golfie = function() { // Original name: get
            entity = _closure1_slot26;
            return entity;
        };
        report['get'] = golfie;
        entity[6] = report;
        report = {};
        golfie = 'hasMore';
        report['key'] = golfie;
        golfie = function() { // Original name: get
            entity = _closure1_slot27;
            return entity;
        };
        report['get'] = golfie;
        entity[7] = report;
        report = {};
        golfie = 'guildFilter';
        report['key'] = golfie;
        golfie = function() { // Original name: get
            entity = _closure1_slot28;
            entity = entity.guildFilter;
            return entity;
        };
        report['get'] = golfie;
        entity[8] = report;
        report = {};
        golfie = 'everyoneFilter';
        report['key'] = golfie;
        golfie = function() { // Original name: get
            entity = _closure1_slot28;
            entity = entity.everyoneFilter;
            return entity;
        };
        report['get'] = golfie;
        entity[9] = report;
        report = {};
        golfie = 'roleFilter';
        report['key'] = golfie;
        golfie = function() { // Original name: get
            entity = _closure1_slot28;
            entity = entity.roleFilter;
            return entity;
        };
        report['get'] = golfie;
        entity[10] = report;
        report = {};
        golfie = 'mentionsAreStale';
        report['key'] = golfie;
        golfie = function() { // Original name: get
            entity = _closure1_slot31;
            return entity;
        };
        report['get'] = golfie;
        entity[11] = report;
        report = {};
        golfie = 'mentionCountByChannel';
        report['key'] = golfie;
        golfie = function() { // Original name: get
            entity = _closure1_slot24;
            return entity;
        };
        report['get'] = golfie;
        entity[12] = report;
        report = {};
        golfie = 'getMentionCountForChannel';
        report['key'] = golfie;
        oscard = function(argFoo) { // Original name: value
            _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                michal = _closure1_slot24;
                entity = argFoo;
                michal = michal[entity];
                entity = null;
                zuuluu = entity != michal;
                entity = 0;
                if(!zuuluu) { _fun00034_ip = 28; continue _fun00033 }
 25:
                entity = michal;
 28:
                return entity;
            }
        };
        report['value'] = oscard;
        entity[13] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    option = michal.bind(entity)(option);
    michal = 'RecentMentionsStore';
    option['displayName'] = michal;
    michal = 23;
    michal = oscard[michal];
    source = golfie.bind(entity)(michal);
    michal = {};
    backup = function(argFoo) { // Original name: handleLoadMentions
        _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.guildId;
            michal = true;
            _closure1_slot26 = michal;
            michal = null;
            michal = michal == zuuluu;
            if(!michal) { _fun00036_ip = 50; continue _fun00035 }
 26:
            zuuluu = _closure1_slot28;
            tangon = zuuluu.guildFilter;
            zuuluu = _closure1_slot17;
            zuuluu = zuuluu.THIS_SERVER;
            michal = tangon === zuuluu;
 50:
            if(!michal) { _fun00036_ip = 81; continue _fun00035 }
 53:
            zuuluu = _closure1_slot38;
            michal = {};
            entity = _closure1_slot17;
            entity = entity.ALL_SERVERS;
            michal['guildFilter'] = entity;
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
 81:
            entity = undefined;
            return entity;
        }
    };
    michal['LOAD_RECENT_MENTIONS'] = backup;
    backup = function(argFoo) { // Original name: handleLoadMentionsSuccess
        _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
            entity = argFoo;
            michal = entity.hasMoreAfter;
            verify = entity.messages;
            report = entity.isAfter;
            golfie = _closure1_slot1;
            entity = _closure1_slot2;
            tangon = 18;
            oscard = entity[tangon];
            entity = undefined;
            option = golfie.bind(entity)(oscard);
            golfie = option.map;
            oscard = _closure1_slot34;
            option = golfie.bind(option)(verify, oscard);
            golfie = _closure1_slot33;
            oscard = {};
            oscard['addedMessages'] = option;
            oscard = golfie.bind(entity)(oscard);
            if(report) { _fun00038_ip = 92; continue _fun00037 }
 80:
            _closure1_slot23 = option;
            report = {};
            _closure1_slot25 = report;
            _fun00038_ip = 110; continue _fun00037;
 92:
            oscard = _closure1_slot23;
            report = oscard.concat;
            report = report.bind(oscard)(option);
            _closure1_slot23 = report;
 110:
            oscard = _closure1_slot1;
            report = _closure1_slot2;
            tangon = report[tangon];
            golfie = oscard.bind(entity)(tangon);
            oscard = golfie.forEach;
            tangon = function(argFoo) {
                zuuluu = _closure1_slot25;
                entity = argFoo;
                michal = entity.id;
                entity = true;
                zuuluu[michal] = entity;
                entity = undefined;
                return entity;
            };
            tangon = oscard.bind(golfie)(option, tangon);
            tangon = false;
            _closure1_slot26 = tangon;
            _closure1_slot27 = michal;
            tangon = _closure1_slot0;
            michal = 19;
            michal = report[michal];
            tangon = tangon.bind(entity)(michal);
            michal = tangon.now;
            michal = michal.bind(tangon)();
            _closure1_slot30 = michal;
            michal = true;
            _closure1_slot29 = michal;
            return entity;
        }
    };
    michal['LOAD_RECENT_MENTIONS_SUCCESS'] = backup;
    backup = function() { // Original name: handleLoadMentionsFailure
        entity = false;
        _closure1_slot26 = entity;
        entity = undefined;
        return entity;
    };
    michal['LOAD_RECENT_MENTIONS_FAILURE'] = backup;
    michal['SET_RECENT_MENTIONS_FILTER'] = foxtra;
    foxtra = function() { // Original name: handleClearMentions
        michal = _closure1_slot39;
        entity = undefined;
        michal = michal.bind(entity)();
        return entity;
    };
    michal['CLEAR_MENTIONS'] = foxtra;
    foxtra = function(argFoo) { // Original name: handleTruncateMentions
        _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
            entity = argFoo;
            golfie = entity.size;
            tangon = _closure1_slot33;
            michal = {};
            report = _closure1_slot23;
            entity = report.slice;
            entity = entity.bind(report)(golfie);
            michal['deletedMessages'] = entity;
            entity = undefined;
            michal = tangon.bind(entity)(michal);
            michal = _closure1_slot23;
            michal = michal.length;
            tangon = golfie;
            if(!(tangon < michal)) { _fun00040_ip = 96; continue _fun00039 }
 59:
            report = _closure1_slot25;
            michal = _closure1_slot23;
            michal = michal[tangon];
            michal = michal.id;
            michal = delete report[michal];
            tangon = tangon + 1;
            michal = _closure1_slot23;
            michal = michal.length;
            if(tangon < michal) { _fun00040_ip = 59; continue _fun00039 }
 96:
            michal = _closure1_slot23;
            tangon = michal.length;
            oscard = _closure1_slot23;
            report = oscard.slice;
            michal = 0;
            michal = report.bind(oscard)(michal, golfie);
            _closure1_slot23 = michal;
            michal = michal.length;
            if(!(tangon > michal)) { _fun00040_ip = 141; continue _fun00039 }
 135:
            michal = true;
            _closure1_slot27 = michal;
 141:
            return entity;
        }
    };
    michal['TRUNCATE_MENTIONS'] = foxtra;
    foxtra = function() { // Original name: handleChannelSelect
        _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
            entity = _closure1_slot28;
            zuuluu = entity.guildFilter;
            entity = _closure1_slot17;
            entity = entity.THIS_SERVER;
            if(!(zuuluu === entity)) { _fun00042_ip = 37; continue _fun00041 }
 27:
            entity = false;
            _closure1_slot29 = entity;
            entity = undefined;
            return entity;
 37:
            entity = false;
            return entity;
        }
    };
    michal['CHANNEL_SELECT'] = foxtra;
    michal['CONNECTION_OPEN'] = romeon;
    romeon = function(argFoo) { // Original name: handleGuildDelete
        entity = argFoo;
        entity = entity.guild;
        var _closure2_slot0 = entity;
        tangon = new Array(0);
        var _closure2_slot1 = tangon;
        oscard = _closure1_slot1;
        report = _closure1_slot2;
        entity = 18;
        report = report[entity];
        entity = undefined;
        golfie = oscard.bind(entity)(report);
        oscard = golfie.filter;
        report = _closure1_slot23;
        zuuluu = function(argFoo) {
            _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
                tangon = argFoo;
                report = _closure1_slot10;
                zuuluu = report.getChannel;
                entity = tangon.channel_id;
                report = zuuluu.bind(report)(entity);
                entity = null;
                entity = entity != report;
                if(!entity) { _fun00044_ip = 60; continue _fun00043 }
 34:
                zuuluu = report.getGuildId;
                report = zuuluu.bind(report)();
                zuuluu = _closure2_slot0;
                zuuluu = zuuluu.id;
                entity = report !== zuuluu;
 60:
                if(entity) { _fun00044_ip = 95; continue _fun00043 }
 63:
                zuuluu = _closure1_slot25;
                michal = tangon.id;
                michal = delete zuuluu[michal];
                zuuluu = _closure2_slot1;
                michal = zuuluu.push;
                michal = michal.bind(zuuluu)(tangon);
                entity = false;
 95:
                return entity;
            }
        };
        zuuluu = oscard.bind(golfie)(report, zuuluu);
        _closure1_slot23 = zuuluu;
        zuuluu = _closure1_slot33;
        michal = {};
        michal['deletedMessages'] = tangon;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    michal['GUILD_DELETE'] = romeon;
    romeon = function(argFoo) { // Original name: handleIncomingMessage
        _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
            entity = argFoo;
            golfie = entity.channelId;
            oscard = entity.message;
            michal = _closure1_slot16;
            entity = michal.getCurrentUser;
            entity = entity.bind(michal)();
            tangon = null;
            if(!(tangon != entity)) { _fun00046_ip = 187; continue _fun00045 }
 38:
            option = _closure1_slot0;
            report = _closure1_slot2;
            michal = 17;
            report = report[michal];
            michal = undefined;
            verify = option.bind(michal)(report);
            option = verify.isRawMessageMentioned;
            report = {};
            report['rawMessage'] = oscard;
            entity = entity.id;
            report['userId'] = entity;
            entity = false;
            report['suppressRoles'] = entity;
            report['suppressEveryone'] = entity;
            report = option.bind(verify)(report);
            if(!report) { _fun00046_ip = 187; continue _fun00045 }
 102:
            report = _closure1_slot36;
            oscard = report.bind(michal)(oscard, golfie);
            if(!(tangon != oscard)) { _fun00046_ip = 185; continue _fun00045 }
 116:
            report = _closure1_slot23;
            tangon = report.slice;
            report = tangon.bind(report)();
            _closure1_slot23 = report;
            tangon = report.unshift;
            tangon = tangon.bind(report)(oscard);
            golfie = _closure1_slot25;
            report = oscard.id;
            tangon = true;
            golfie[report] = tangon;
            tangon = _closure1_slot33;
            zuuluu = {};
            report = new Array(1);
            report[0] = oscard;
            zuuluu['addedMessages'] = report;
            zuuluu = tangon.bind(michal)(zuuluu);
            return michal;
 185:
            return entity;
 187:
            entity = false;
            return entity;
        }
    };
    michal['MESSAGE_CREATE'] = romeon;
    romeon = function(argFoo) { // Original name: handleMessageUpdate
        _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
            michal = argFoo;
            entity = michal.message;
            golfie = entity.id;
            var _closure2_slot0 = golfie;
            oscard = _closure1_slot25;
            entity = global;
            zuuluu = entity.String;
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(golfie);
            oscard = oscard[zuuluu];
            zuuluu = null;
            if(!(zuuluu != oscard)) { _fun00048_ip = 164; continue _fun00047 }
 51:
            golfie = _closure1_slot1;
            option = _closure1_slot2;
            oscard = 18;
            oscard = option[oscard];
            option = golfie.bind(entity)(oscard);
            golfie = option.findIndex;
            oscard = _closure1_slot23;
            tangon = function(argFoo) {
                entity = argFoo;
                michal = entity.id;
                entity = _closure2_slot0;
                entity = michal === entity;
                return entity;
            };
            tangon = golfie.bind(option)(oscard, tangon);
            golfie = _closure1_slot23;
            oscard = golfie.slice;
            oscard = oscard.bind(golfie)();
            _closure1_slot23 = oscard;
            golfie = oscard[tangon];
            if(!(zuuluu != golfie)) { _fun00048_ip = 162; continue _fun00047 }
 117:
            zuuluu = _closure1_slot23;
            oscard = _closure1_slot0;
            option = _closure1_slot2;
            report = 16;
            report = option[report];
            oscard = oscard.bind(entity)(report);
            report = oscard.updateMessageRecord;
            michal = michal.message;
            michal = report.bind(oscard)(golfie, michal);
            zuuluu[tangon] = michal;
 162:
            return entity;
 164:
            entity = false;
            return entity;
        }
    };
    michal['MESSAGE_UPDATE'] = romeon;
    michal['MESSAGE_DELETE'] = yankee;
    michal['RECENT_MENTION_DELETE'] = yankee;
    yankee = function(argFoo) { // Original name: handleMessageDeleteBulk
        entity = argFoo;
        report = entity.ids;
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 18;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.forEach;
        michal = _closure1_slot37;
        michal = zuuluu.bind(tangon)(report, michal);
        return entity;
    };
    michal['MESSAGE_DELETE_BULK'] = yankee;
    michal['CHANNEL_DELETE'] = offset;
    michal['THREAD_DELETE'] = offset;
    michal['RELATIONSHIP_ADD'] = verify;
    michal['RELATIONSHIP_REMOVE'] = verify;
    michal['RELATIONSHIP_UPDATE'] = verify;
    tangon = function() { // Original name: handleSetRecentMentionsStale
        entity = true;
        _closure1_slot31 = entity;
        entity = undefined;
        return entity;
    };
    michal['SET_RECENT_MENTIONS_STALE'] = tangon;
    tangon = option.prototype;
    tangon = Object.create(tangon, {constructor: {value: option}});
    ctrled = tangon;
    update = michal;
    michal = new ctrled[option](source, update, echoed);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 24;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/recents/RecentMentionsStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();