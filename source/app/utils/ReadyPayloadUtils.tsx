// app/utils/ReadyPayloadUtils.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    golfie = argBar;
    verify = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = verify;
    entity = argCor;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = option;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            report = global;
            michal = report.Symbol;
            tangon = 'undefined';
            michal = typeof michal;
            michal = tangon !== michal;
            if(!michal) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 46:
            if(michal) { _fun00002_ip = 55; continue _fun00001 }
 49:
            michal = zuuluu.@@iterator;
 55:
            if(michal) { _fun00002_ip = 345; continue _fun00001 }
 61:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 323; continue _fun00001 }
 86:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 270; continue _fun00001 }
 110:
            golfie = {};
            verify = golfie.toString;
            golfie = verify.call;
            yankee = golfie.bind(verify)(zuuluu);
            offset = yankee.slice;
            verify = 8;
            golfie = -1;
            verify = offset.bind(yankee)(verify, golfie);
            golfie = 'Object';
            golfie = golfie === verify;
            if(!golfie) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golfie = zuuluu.constructor;
 163:
            offset = verify;
            if(!golfie) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 179:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot13;
            golfie = verify.bind(option)(zuuluu, option);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 265:
            oscard = golfie;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golfie = _closure1_slot13;
            oscard = golfie.bind(option)(zuuluu, option);
 283:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 323; continue _fun00001 }
 289:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 323:
            if(!tangon) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tangon;
 330:
            tangon = 0;
            var _closure2_slot1 = tangon;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(michal >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    michal = false;
                    entity['done'] = michal;
                    zuuluu = _closure2_slot0;
                    michal = _closure2_slot1;
                    michal = parseFloat(michal);
                    tangon = michal + 1;
                    _closure2_slot1 = tangon;
                    michal = zuuluu[michal];
                    entity['value'] = michal;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    michal = {};
                    zuuluu = true;
                    michal['done'] = zuuluu;
                    entity = michal;
 67:
                    return entity;
                }
            };
            return entity;
 345:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            entity = null;
            zuuluu = undefined;
            entity = entity == zuuluu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            michal = tangon.length;
            entity = zuuluu > michal;
 23:
            michal = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            michal = tangon.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zuuluu)(michal);
            zuuluu = 0;
            report = zuuluu < michal;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tangon[zuuluu];
            entity[zuuluu] = report;
            zuuluu = zuuluu + 1;
            if(zuuluu < michal) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: maybeIncludeInitialGuild
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            oscard = argBar;
            entity = _closure1_slot10;
            tangon = null;
            zuuluu = tangon == entity;
            entity = null;
            if(zuuluu) { _fun00008_ip = 88; continue _fun00007 }
 21:
            zuuluu = _closure1_slot10;
            report = zuuluu.identifyTime;
            zuuluu = argFoo;
            entity = null;
            if(!(report === zuuluu)) { _fun00008_ip = 88; continue _fun00007 }
 40:
            if(!(tangon != oscard)) { _fun00008_ip = 69; continue _fun00007 }
 44:
            report = oscard.some;
            zuuluu = function(argFoo) {
                entity = argFoo;
                michal = entity.id;
                entity = _closure1_slot10;
                entity = entity.guild;
                entity = entity.id;
                entity = michal === entity;
                return entity;
            };
            zuuluu = report.bind(oscard)(zuuluu);
            entity = null;
            if(zuuluu) { _fun00008_ip = 88; continue _fun00007 }
 69:
            michal = _closure1_slot10;
            tangon = michal.guild;
            zuuluu = argBaz;
            michal = undefined;
            entity = zuuluu.bind(michal)(tangon);
 88:
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo, argBar) { // Original name: restoreUsers
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            tangon = argBar;
            entity = argFoo;
            var _closure2_slot0 = entity;
            entity = new Array(0);
            var _closure2_slot1 = entity;
            zuuluu = null;
            if(!(zuuluu != tangon)) { _fun00010_ip = 43; continue _fun00009 }
 26:
            zuuluu = tangon.forEach;
            michal = function(argFoo) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    zuuluu = argFoo;
                    report = null;
                    if(!(report != zuuluu)) { _fun00012_ip = 128; continue _fun00011 }
 9:
                    michal = zuuluu.user_id;
                    if(!(report != michal)) { _fun00012_ip = 106; continue _fun00011 }
 19:
                    tangon = _closure1_slot1;
                    oscard = _closure1_slot3;
                    entity = 11;
                    entity = oscard[entity];
                    golfie = undefined;
                    oscard = tangon.bind(golfie)(entity);
                    entity = _closure2_slot0;
                    tangon = entity[michal];
                    report = report != tangon;
                    tangon = global;
                    tangon = tangon.HermesInternal;
                    verify = tangon.concat;
                    option = 'Missing user[';
                    tangon = '] in compressed ready payload';
                    tangon = verify.bind(option)(michal, tangon);
                    tangon = oscard.bind(golfie)(report, tangon);
                    entity = entity[michal];
                    zuuluu['user'] = entity;
 106:
                    entity = delete zuuluu.user_id;
                    michal = _closure2_slot1;
                    entity = michal.push;
                    entity = entity.bind(michal)(zuuluu);
 128:
                    entity = undefined;
                    return entity;
                }
            };
            michal = zuuluu.bind(tangon)(michal);
 43:
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo) { // Original name: popGuildCacheEntry
        zuuluu = argFoo;
        entity = _closure1_slot9;
        entity = entity[zuuluu];
        michal = _closure1_slot9;
        michal = delete michal[zuuluu];
        return entity;
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo) { // Original name: hydrateGuild
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            michal = argFoo;
            var _closure2_slot0 = michal;
            report = _closure1_slot16;
            entity = michal.id;
            oscard = undefined;
            option = report.bind(oscard)(entity);
            report = michal.data_mode;
            entity = 'partial';
            if(!(entity === report)) { _fun00014_ip = 753; continue _fun00013 }
 45:
            golfie = null;
            if(!(golfie != option)) { _fun00014_ip = 684; continue _fun00013 }
 54:
            entity = {};
            report = michal.id;
            entity['id'] = report;
            report = michal.data_mode;
            entity['dataMode'] = report;
            entity['channels'] = golfie;
            report = {};
            verify = michal.partial_updates;
            romeon = verify.channels;
            offset = golfie == romeon;
            verify = undefined;
            if(offset) { _fun00014_ip = 121; continue _fun00013 }
 104:
            yankee = romeon.map;
            offset = function(argFoo) {
                tangon = _closure1_slot6;
                entity = _closure2_slot0;
                zuuluu = entity.id;
                michal = undefined;
                entity = argFoo;
                entity = tangon.bind(michal)(entity, zuuluu);
                return entity;
            };
            verify = yankee.bind(romeon)(offset);
 121:
            if(!(golfie == verify)) { _fun00014_ip = 129; continue _fun00013 }
 125:
            verify = new Array(0);
 129:
            report['writes'] = verify;
            verify = michal.partial_updates;
            verify = verify.deleted_channel_ids;
            if(!(golfie == verify)) { _fun00014_ip = 154; continue _fun00013 }
 150:
            verify = new Array(0);
 154:
            report['deletes'] = verify;
            entity['channelUpdates'] = report;
            report = michal.channel_updates;
            entity['channelTimestampUpdates'] = report;
            report = option.emojis;
            verify = golfie == report;
            report = null;
            if(verify) { _fun00014_ip = 231; continue _fun00013 }
 190:
            romeon = _closure1_slot20;
            yankee = option.emojis;
            verify = michal.partial_updates;
            offset = verify.emojis;
            verify = michal.partial_updates;
            verify = verify.deleted_emoji_ids;
            report = romeon.bind(oscard)(yankee, offset, verify);
 231:
            entity['emojis'] = report;
            report = {};
            verify = michal.partial_updates;
            verify = verify.emojis;
            if(!(golfie == verify)) { _fun00014_ip = 258; continue _fun00013 }
 254:
            verify = new Array(0);
 258:
            report['writes'] = verify;
            verify = michal.partial_updates;
            verify = verify.deleted_emoji_ids;
            if(!(golfie == verify)) { _fun00014_ip = 283; continue _fun00013 }
 279:
            verify = new Array(0);
 283:
            report['deletes'] = verify;
            entity['emojiUpdates'] = report;
            report = michal.guild_scheduled_events;
            entity['guild_scheduled_events'] = report;
            report = michal.joined_at;
            entity['joined_at'] = report;
            report = michal.last_messages;
            entity['lastMessages'] = report;
            report = michal.member_count;
            entity['member_count'] = report;
            report = michal.members;
            entity['members'] = report;
            report = michal.premium_subscription_count;
            entity['premium_subscription_count'] = report;
            verify = michal.properties;
            offset = golfie != verify;
            report = null;
            if(!offset) { _fun00014_ip = 377; continue _fun00013 }
 374:
            report = verify;
 377:
            entity['properties'] = report;
            verify = _closure1_slot2;
            offset = _closure1_slot3;
            report = 12;
            report = offset[report];
            foxtra = verify.bind(oscard)(report);
            romeon = foxtra.filterRoleDeletes;
            output = michal.id;
            sizing = option.roles;
            report = michal.partial_updates;
            kiloes = report.roles;
            report = michal.partial_updates;
            backup = report.deleted_role_ids;
            result = foxtra;
            report = result[romeon](output, sizing, kiloes, backup, foxtra);
            entity['roles'] = report;
            report = michal.stage_instances;
            entity['stage_instances'] = report;
            report = option.stickers;
            verify = golfie == report;
            report = null;
            if(verify) { _fun00014_ip = 522; continue _fun00013 }
 481:
            yankee = _closure1_slot20;
            offset = option.stickers;
            option = michal.partial_updates;
            verify = option.stickers;
            option = michal.partial_updates;
            option = option.deleted_sticker_ids;
            report = yankee.bind(oscard)(offset, verify, option);
 522:
            entity['stickers'] = report;
            report = {};
            option = michal.partial_updates;
            option = option.stickers;
            if(!(golfie == option)) { _fun00014_ip = 549; continue _fun00013 }
 545:
            option = new Array(0);
 549:
            report['writes'] = option;
            option = michal.partial_updates;
            option = option.deleted_sticker_ids;
            if(!(golfie == option)) { _fun00014_ip = 574; continue _fun00013 }
 570:
            option = new Array(0);
 574:
            report['deletes'] = option;
            entity['stickerUpdates'] = report;
            report = michal.unable_to_sync_deletes;
            entity['unableToSyncDeletes'] = report;
            offset = michal.threads;
            option = golfie == offset;
            report = undefined;
            if(option) { _fun00014_ip = 627; continue _fun00013 }
 610:
            verify = offset.map;
            option = function(argFoo) {
                tangon = _closure1_slot6;
                entity = _closure2_slot0;
                zuuluu = entity.id;
                michal = undefined;
                entity = argFoo;
                entity = tangon.bind(michal)(entity, zuuluu);
                return entity;
            };
            report = verify.bind(offset)(option);
 627:
            if(!(golfie == report)) { _fun00014_ip = 635; continue _fun00013 }
 631:
            report = new Array(0);
 635:
            entity['threads'] = report;
            golfie = _closure1_slot19;
            report = michal.threads;
            report = golfie.bind(oscard)(report);
            entity['threadMessages'] = report;
            report = michal.version;
            entity['version'] = report;
            report = michal.has_threads_subscription;
            entity['hasThreadsSubscription'] = report;
            return entity;
 684:
            option = _closure1_slot8;
            golfie = option.log;
            yankee = michal.id;
            entity = global;
            report = entity.HermesInternal;
            offset = report.concat;
            verify = 'no cache entry for partial guild (guild: ';
            report = ', type: ready)';
            report = offset.bind(verify)(yankee, report);
            report = golfie.bind(option)(report);
            report = entity.Error;
            entity = 'Guild data was missing from store, but hash was still available.';
            entity = report.bind(oscard)(entity);
            throw entity;
 753:
            entity = {};
            report = michal.id;
            entity['id'] = report;
            report = michal.data_mode;
            entity['dataMode'] = report;
            report = michal.emojis;
            entity['emojis'] = report;
            report = michal.guild_scheduled_events;
            entity['guild_scheduled_events'] = report;
            report = michal.joined_at;
            entity['joined_at'] = report;
            report = michal.last_messages;
            entity['lastMessages'] = report;
            report = michal.member_count;
            entity['member_count'] = report;
            report = michal.members;
            entity['members'] = report;
            report = michal.premium_subscription_count;
            entity['premium_subscription_count'] = report;
            report = michal.properties;
            entity['properties'] = report;
            report = michal.roles;
            entity['roles'] = report;
            report = michal.stage_instances;
            entity['stage_instances'] = report;
            report = michal.stickers;
            entity['stickers'] = report;
            offset = michal.threads;
            golfie = null;
            option = golfie == offset;
            report = undefined;
            if(option) { _fun00014_ip = 930; continue _fun00013 }
 913:
            verify = offset.map;
            option = function(argFoo) {
                tangon = _closure1_slot6;
                entity = _closure2_slot0;
                zuuluu = entity.id;
                michal = undefined;
                entity = argFoo;
                entity = tangon.bind(michal)(entity, zuuluu);
                return entity;
            };
            report = verify.bind(offset)(option);
 930:
            if(!(golfie == report)) { _fun00014_ip = 938; continue _fun00013 }
 934:
            report = new Array(0);
 938:
            entity['threads'] = report;
            report = _closure1_slot19;
            tangon = michal.threads;
            tangon = report.bind(oscard)(tangon);
            entity['threadMessages'] = tangon;
            report = michal.channels;
            tangon = report.map;
            zuuluu = function(argFoo) {
                tangon = argFoo;
                entity = _closure2_slot0;
                michal = entity.id;
                tangon['guild_id'] = michal;
                zuuluu = _closure1_slot6;
                michal = entity.id;
                entity = undefined;
                entity = zuuluu.bind(entity)(tangon, michal);
                return entity;
            };
            zuuluu = tangon.bind(report)(zuuluu);
            entity['channels'] = zuuluu;
            zuuluu = michal.version;
            entity['version'] = zuuluu;
            michal = michal.has_threads_subscription;
            entity['hasThreadsSubscription'] = michal;
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    tangon = function(argFoo, argBar) { // Original name: hydratePreviouslyUnavailableGuild
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            michal = argFoo;
            option = argBar;
            var _closure2_slot0 = michal;
            report = null;
            if(!(report == option)) { _fun00016_ip = 37; continue _fun00015 }
 18:
            oscard = _closure1_slot16;
            tangon = michal.id;
            entity = undefined;
            option = oscard.bind(entity)(tangon);
 37:
            tangon = michal.data_mode;
            entity = 'partial';
            if(!(entity === tangon)) { _fun00016_ip = 793; continue _fun00015 }
 54:
            if(!(report != option)) { _fun00016_ip = 719; continue _fun00015 }
 61:
            entity = {};
            tangon = michal.id;
            entity['id'] = tangon;
            entity['channels'] = report;
            tangon = {};
            oscard = michal.partial_updates;
            yankee = oscard.channels;
            verify = report == yankee;
            golfie = undefined;
            oscard = undefined;
            if(verify) { _fun00016_ip = 119; continue _fun00015 }
 102:
            offset = yankee.map;
            verify = function(argFoo) {
                tangon = _closure1_slot6;
                entity = _closure2_slot0;
                zuuluu = entity.id;
                michal = undefined;
                entity = argFoo;
                entity = tangon.bind(michal)(entity, zuuluu);
                return entity;
            };
            oscard = offset.bind(yankee)(verify);
 119:
            if(!(report == oscard)) { _fun00016_ip = 127; continue _fun00015 }
 123:
            oscard = new Array(0);
 127:
            tangon['writes'] = oscard;
            oscard = michal.partial_updates;
            oscard = oscard.deleted_channel_ids;
            if(!(report == oscard)) { _fun00016_ip = 152; continue _fun00015 }
 148:
            oscard = new Array(0);
 152:
            tangon['deletes'] = oscard;
            entity['channelUpdates'] = tangon;
            tangon = michal.channel_updates;
            entity['channelTimestampUpdates'] = tangon;
            tangon = michal.activity_instances;
            entity['activity_instances'] = tangon;
            tangon = option.emojis;
            oscard = report == tangon;
            tangon = null;
            if(oscard) { _fun00016_ip = 243; continue _fun00015 }
 199:
            yankee = _closure1_slot20;
            offset = option.emojis;
            oscard = michal.partial_updates;
            verify = oscard.emojis;
            oscard = michal.partial_updates;
            oscard = oscard.deleted_emoji_ids;
            tangon = yankee.bind(golfie)(offset, verify, oscard);
 243:
            entity['emojis'] = tangon;
            tangon = {};
            oscard = michal.partial_updates;
            oscard = oscard.emojis;
            if(!(report == oscard)) { _fun00016_ip = 270; continue _fun00015 }
 266:
            oscard = new Array(0);
 270:
            tangon['writes'] = oscard;
            oscard = michal.partial_updates;
            oscard = oscard.deleted_emoji_ids;
            if(!(report == oscard)) { _fun00016_ip = 295; continue _fun00015 }
 291:
            oscard = new Array(0);
 295:
            tangon['deletes'] = oscard;
            entity['emojiUpdates'] = tangon;
            tangon = michal.guild_scheduled_events;
            entity['guild_scheduled_events'] = tangon;
            tangon = michal.joined_at;
            entity['joined_at'] = tangon;
            tangon = michal.last_messages;
            entity['lastMessages'] = tangon;
            tangon = michal.member_count;
            entity['member_count'] = tangon;
            tangon = michal.members;
            entity['members'] = tangon;
            tangon = michal.premium_subscription_count;
            entity['premium_subscription_count'] = tangon;
            tangon = michal.presences;
            entity['presences'] = tangon;
            tangon = michal.properties;
            if(!(report == tangon)) { _fun00016_ip = 398; continue _fun00015 }
 392:
            tangon = option.properties;
 398:
            entity['properties'] = tangon;
            verify = _closure1_slot2;
            offset = _closure1_slot3;
            oscard = 12;
            oscard = offset[oscard];
            foxtra = verify.bind(golfie)(oscard);
            romeon = foxtra.filterRoleDeletes;
            output = michal.id;
            sizing = option.roles;
            oscard = michal.partial_updates;
            kiloes = oscard.roles;
            oscard = michal.partial_updates;
            backup = oscard.deleted_role_ids;
            result = foxtra;
            oscard = result[romeon](output, sizing, kiloes, backup, foxtra);
            entity['roles'] = oscard;
            oscard = michal.stage_instances;
            entity['stage_instances'] = oscard;
            oscard = option.stickers;
            verify = report == oscard;
            oscard = null;
            if(verify) { _fun00016_ip = 546; continue _fun00015 }
 505:
            yankee = _closure1_slot20;
            offset = option.stickers;
            option = michal.partial_updates;
            verify = option.stickers;
            option = michal.partial_updates;
            option = option.deleted_sticker_ids;
            oscard = yankee.bind(golfie)(offset, verify, option);
 546:
            entity['stickers'] = oscard;
            oscard = {};
            option = michal.partial_updates;
            option = option.stickers;
            if(!(report == option)) { _fun00016_ip = 573; continue _fun00015 }
 569:
            option = new Array(0);
 573:
            oscard['writes'] = option;
            option = michal.partial_updates;
            option = option.deleted_sticker_ids;
            if(!(report == option)) { _fun00016_ip = 598; continue _fun00015 }
 594:
            option = new Array(0);
 598:
            oscard['deletes'] = option;
            entity['stickerUpdates'] = oscard;
            oscard = michal.unable_to_sync_deletes;
            entity['unableToSyncDeletes'] = oscard;
            offset = michal.threads;
            option = report == offset;
            oscard = undefined;
            if(option) { _fun00016_ip = 651; continue _fun00015 }
 634:
            verify = offset.map;
            option = function(argFoo) {
                tangon = _closure1_slot6;
                entity = _closure2_slot0;
                zuuluu = entity.id;
                michal = undefined;
                entity = argFoo;
                entity = tangon.bind(michal)(entity, zuuluu);
                return entity;
            };
            oscard = verify.bind(offset)(option);
 651:
            if(!(report == oscard)) { _fun00016_ip = 659; continue _fun00015 }
 655:
            oscard = new Array(0);
 659:
            entity['threads'] = oscard;
            oscard = _closure1_slot19;
            tangon = michal.threads;
            tangon = oscard.bind(golfie)(tangon);
            entity['threadMessages'] = tangon;
            tangon = michal.voice_states;
            entity['voice_states'] = tangon;
            tangon = michal.version;
            entity['version'] = tangon;
            tangon = michal.has_threads_subscription;
            entity['hasThreadsSubscription'] = tangon;
            return entity;
 719:
            golfie = _closure1_slot8;
            oscard = golfie.log;
            offset = michal.id;
            entity = global;
            tangon = entity.HermesInternal;
            verify = tangon.concat;
            option = 'no cache entry for partial guild (guild: ';
            tangon = ', type: post_ready)';
            tangon = verify.bind(option)(offset, tangon);
            tangon = oscard.bind(golfie)(tangon);
            oscard = entity.Error;
            tangon = undefined;
            entity = 'Guild data was missing from store, but hash was still available.';
            entity = oscard.bind(tangon)(entity);
            throw entity;
 793:
            entity = {};
            tangon = michal.id;
            entity['id'] = tangon;
            tangon = michal.emojis;
            entity['emojis'] = tangon;
            tangon = michal.guild_scheduled_events;
            entity['guild_scheduled_events'] = tangon;
            tangon = michal.joined_at;
            entity['joined_at'] = tangon;
            tangon = michal.last_messages;
            entity['lastMessages'] = tangon;
            tangon = michal.member_count;
            entity['member_count'] = tangon;
            tangon = michal.members;
            entity['members'] = tangon;
            tangon = michal.premium_subscription_count;
            entity['premium_subscription_count'] = tangon;
            tangon = michal.properties;
            entity['properties'] = tangon;
            tangon = michal.roles;
            entity['roles'] = tangon;
            tangon = michal.stage_instances;
            entity['stage_instances'] = tangon;
            tangon = michal.stickers;
            entity['stickers'] = tangon;
            verify = michal.threads;
            golfie = report == verify;
            oscard = undefined;
            tangon = undefined;
            if(golfie) { _fun00016_ip = 959; continue _fun00015 }
 942:
            option = verify.map;
            golfie = function(argFoo) {
                tangon = _closure1_slot6;
                entity = _closure2_slot0;
                zuuluu = entity.id;
                michal = undefined;
                entity = argFoo;
                entity = tangon.bind(michal)(entity, zuuluu);
                return entity;
            };
            tangon = option.bind(verify)(golfie);
 959:
            if(!(report == tangon)) { _fun00016_ip = 967; continue _fun00015 }
 963:
            tangon = new Array(0);
 967:
            entity['threads'] = tangon;
            report = _closure1_slot19;
            tangon = michal.threads;
            tangon = report.bind(oscard)(tangon);
            entity['threadMessages'] = tangon;
            report = michal.channels;
            tangon = report.map;
            zuuluu = function(argFoo) {
                tangon = argFoo;
                entity = _closure2_slot0;
                michal = entity.id;
                tangon['guild_id'] = michal;
                zuuluu = _closure1_slot6;
                michal = entity.id;
                entity = undefined;
                entity = zuuluu.bind(entity)(tangon, michal);
                return entity;
            };
            zuuluu = tangon.bind(report)(zuuluu);
            entity['channels'] = zuuluu;
            zuuluu = michal.presences;
            entity['presences'] = zuuluu;
            zuuluu = michal.activity_instances;
            entity['activity_instances'] = zuuluu;
            zuuluu = michal.voice_states;
            entity['voice_states'] = zuuluu;
            zuuluu = michal.version;
            entity['version'] = zuuluu;
            michal = michal.has_threads_subscription;
            entity['hasThreadsSubscription'] = michal;
            return entity;
        }
    };
    var _closure1_slot18 = tangon;
    entity = function(argFoo) { // Original name: collectThreadMessages
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            zuuluu = argFoo;
            entity = new Array(0);
            oscard = null;
            if(!(oscard != zuuluu)) { _fun00018_ip = 85; continue _fun00017 }
 13:
            michal = _closure1_slot12;
            report = undefined;
            tangon = michal.bind(report)(zuuluu);
            zuuluu = tangon.bind(report)();
            michal = zuuluu.done;
            if(michal) { _fun00018_ip = 85; continue _fun00017 }
 39:
            michal = zuuluu.value;
            golfie = michal.most_recent_message;
            if(!(oscard != golfie)) { _fun00018_ip = 70; continue _fun00017 }
 54:
            golfie = entity.push;
            michal = michal.most_recent_message;
            michal = golfie.bind(entity)(michal);
 70:
            golfie = tangon.bind(report)();
            michal = golfie.done;
            zuuluu = golfie;
            if(!michal) { _fun00018_ip = 39; continue _fun00017 }
 85:
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    michal = function(argFoo, argBar, argBaz) { // Original name: filterDeletes
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            tangon = argFoo;
            zuuluu = argBar;
            golfie = argBaz;
            michal = null;
            if(!(michal == zuuluu)) { _fun00020_ip = 21; continue _fun00019 }
 17:
            zuuluu = new Array(0);
 21:
            report = global;
            oscard = report.Set;
            if(!(michal == golfie)) { _fun00020_ip = 37; continue _fun00019 }
 33:
            golfie = new Array(0);
 37:
            report = golfie.concat;
            option = zuuluu.map;
            michal = function(argFoo) {
                entity = argFoo;
                entity = entity.id;
                return entity;
            };
            michal = option.bind(zuuluu)(michal);
            verify = report.bind(golfie)(michal);
            report = oscard.prototype;
            report = Object.create(report, {constructor: {value: oscard}});
            offset = report;
            michal = new offset[oscard](verify, option);
            michal = michal instanceof Object ? michal : report;
            var _closure2_slot0 = michal;
            michal = tangon.filter;
            entity = function(argFoo) {
                zuuluu = _closure2_slot0;
                michal = zuuluu.has;
                entity = argFoo;
                entity = entity.id;
                entity = michal.bind(zuuluu)(entity);
                entity = !entity;
                return entity;
            };
            michal = michal.bind(tangon)(entity);
            entity = michal.concat;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot20 = michal;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zuuluu, entity, oscard);
    entity = 0;
    oscard = option[entity];
    entity = undefined;
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot4 = oscard;
    oscard = 1;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot5 = oscard;
    oscard = 2;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.createChannelRecordFromServer;
    var _closure1_slot6 = oscard;
    oscard = 3;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot7 = oscard;
    oscard = 4;
    oscard = option[oscard];
    offset = verify.bind(entity)(oscard);
    oscard = offset.prototype;
    verify = Object.create(oscard, {constructor: {value: offset}});
    backup = 'ReadyPayloadUtils';
    kiloes = verify;
    oscard = new kiloes[offset](backup, foxtra);
    oscard = oscard instanceof Object ? oscard : verify;
    var _closure1_slot8 = oscard;
    oscard = {};
    var _closure1_slot9 = oscard;
    oscard = null;
    var _closure1_slot10 = oscard;
    oscard = {};
    var _closure1_slot11 = oscard;
    oscard = 14;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'utils/ReadyPayloadUtils.tsx';
    oscard = golfie.bind(option)(oscard);
    oscard = function(argFoo, argBar) { // Original name: hydrateReadySupplementalPayload
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            tangon = argFoo;
            offset = tangon.guilds;
            entity = tangon.merged_members;
            var _closure2_slot0 = entity;
            option = tangon.merged_presences;
            var _closure2_slot1 = option;
            zuuluu = {'guilds': 0, 'merged_members': 0, 'merged_presences': 0};
            entity = null;
            backup = zuuluu;
            foxtra = null;
            michal = silentSetPrototypeOf(backup, foxtra);
            backup = {};
            foxtra = tangon;
            romeon = zuuluu;
            michal = copyDataProperties(backup, foxtra, romeon);
            golfie = _closure1_slot15;
            tangon = _closure1_slot11;
            yankee = entity == option;
            verify = undefined;
            zuuluu = undefined;
            if(yankee) { _fun00022_ip = 92; continue _fun00021 }
 86:
            zuuluu = option.friends;
 92:
            tangon = golfie.bind(verify)(tangon, zuuluu);
            golfie = entity == offset;
            zuuluu = undefined;
            if(golfie) { _fun00022_ip = 124; continue _fun00021 }
 107:
            option = offset.map;
            golfie = function(argFoo, argBar) {
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    michal = argFoo;
                    option = argBar;
                    oscard = _closure1_slot15;
                    tangon = _closure1_slot11;
                    zuuluu = _closure2_slot1;
                    verify = null;
                    offset = verify == zuuluu;
                    report = undefined;
                    zuuluu = undefined;
                    if(offset) { _fun00024_ip = 51; continue _fun00023 }
 37:
                    offset = _closure2_slot1;
                    offset = offset.guilds;
                    zuuluu = offset[option];
 51:
                    tangon = oscard.bind(report)(tangon, zuuluu);
                    oscard = _closure1_slot15;
                    zuuluu = _closure1_slot11;
                    entity = _closure2_slot0;
                    verify = verify == entity;
                    entity = undefined;
                    if(verify) { _fun00024_ip = 86; continue _fun00023 }
 78:
                    golfie = _closure2_slot0;
                    entity = golfie[option];
 86:
                    zuuluu = oscard.bind(report)(zuuluu, entity);
                    entity = {};
                    romeon = entity;
                    yankee = michal;
                    oscard = copyDataProperties(romeon, yankee);
                    michal = michal.voice_states;
                    report = report === michal;
                    michal = 'unavailable';
                    entity[michal] = report;
                    michal = 'presences';
                    entity[michal] = tangon;
                    michal = 'members';
                    entity[michal] = zuuluu;
                    return entity;
                }
            };
            zuuluu = option.bind(offset)(golfie);
 124:
            if(!(entity == zuuluu)) { _fun00022_ip = 132; continue _fun00021 }
 128:
            zuuluu = new Array(0);
 132:
            option = _closure1_slot14;
            golfie = argBar;
            oscard = function(argFoo) {
                michal = argFoo;
                entity = {};
                zuuluu = michal.id;
                entity['id'] = zuuluu;
                zuuluu = michal.members;
                entity['members'] = zuuluu;
                zuuluu = michal.presences;
                entity['presences'] = zuuluu;
                zuuluu = michal.activity_instances;
                entity['activity_instances'] = zuuluu;
                michal = michal.voice_states;
                entity['voice_states'] = michal;
                michal = false;
                entity['unavailable'] = michal;
                return entity;
            };
            oscard = option.bind(verify)(golfie, offset, oscard);
            if(!(entity != oscard)) { _fun00022_ip = 167; continue _fun00021 }
 157:
            entity = zuuluu.push;
            entity = entity.bind(zuuluu)(oscard);
 167:
            entity = {};
            _closure1_slot11 = entity;
            entity = {};
            backup = entity;
            foxtra = michal;
            michal = copyDataProperties(backup, foxtra);
            michal = 'presences';
            entity[michal] = tangon;
            michal = 'guilds';
            entity[michal] = zuuluu;
            return entity;
        }
    };
    zuuluu['hydrateReadySupplementalPayload'] = oscard;
    oscard = function() { // Original name: preloadReadyPayloadData
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            tangon = _closure1_slot1;
            michal = _closure1_slot3;
            zuuluu = 5;
            zuuluu = michal[zuuluu];
            golfie = undefined;
            tangon = tangon.bind(golfie)(zuuluu);
            zuuluu = tangon.database;
            zuuluu = zuuluu.bind(tangon)();
            tangon = _closure1_slot0;
            report = 6;
            michal = michal[report];
            tangon = tangon.bind(golfie)(michal);
            michal = tangon.isCacheEnabled;
            michal = michal.bind(tangon)();
            if(michal) { _fun00026_ip = 87; continue _fun00025 }
 64:
            michal = global;
            oscard = michal.Promise;
            tangon = oscard.resolve;
            michal = {};
            oscard = tangon.bind(oscard)(michal);
            _fun00026_ip = 117; continue _fun00025;
 87:
            tangon = _closure1_slot1;
            option = _closure1_slot3;
            michal = 7;
            michal = option[michal];
            tangon = tangon.bind(golfie)(michal);
            michal = tangon.getCommittedVersions;
            oscard = michal.bind(tangon)();
 117:
            tangon = _closure1_slot0;
            michal = _closure1_slot3;
            michal = michal[report];
            tangon = tangon.bind(golfie)(michal);
            michal = tangon.isCacheEnabled;
            michal = michal.bind(tangon)();
            if(michal) { _fun00026_ip = 194; continue _fun00025 }
 147:
            michal = global;
            report = michal.Promise;
            tangon = report.resolve;
            michal = michal.Set;
            option = michal.prototype;
            option = Object.create(option, {constructor: {value: michal}});
            offset = option;
            michal = new offset[michal](verify);
            michal = michal instanceof Object ? michal : option;
            report = tangon.bind(report)(michal);
            _fun00026_ip = 224; continue _fun00025;
 194:
            tangon = _closure1_slot1;
            option = _closure1_slot3;
            michal = 8;
            michal = option[michal];
            tangon = tangon.bind(golfie)(michal);
            michal = tangon.getGuildIds;
            report = michal.bind(tangon)();
 224:
            michal = null;
            if(!(michal == zuuluu)) { _fun00026_ip = 253; continue _fun00025 }
 230:
            michal = global;
            option = michal.Promise;
            tangon = option.resolve;
            michal = false;
            tangon = tangon.bind(option)(michal);
            _fun00026_ip = 284; continue _fun00025;
 253:
            michal = _closure1_slot1;
            option = _closure1_slot3;
            entity = 9;
            entity = option[entity];
            michal = michal.bind(golfie)(entity);
            entity = michal.okAsync;
            tangon = entity.bind(michal)(zuuluu);
 284:
            entity = global;
            zuuluu = entity.Promise;
            michal = zuuluu.all;
            entity = new Array(3);
            entity[0] = oscard;
            entity[1] = report;
            entity[2] = tangon;
            zuuluu = michal.bind(zuuluu)(entity);
            michal = zuuluu.then;
            entity = function(argFoo) {
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                    oscard = argFoo;
                    entity = oscard[Symbol.iterator];
                    oscard = entity().next;
                    michal = oscard().value;
                    zuuluu = entity;
                    option = undefined;
                    report = zuuluu === option;
                    tangon = undefined;
                    if(report) { _fun00028_ip = 27; continue _fun00027 }
 24:
                    tangon = michal;
 27:
                    zuuluu = undefined;
                    if(report) { _fun00028_ip = 57; continue _fun00027 }
 32:
                    golfie = oscard().value;
                    michal = entity;
                    michal = michal === option;
                    zuuluu = undefined;
                    report = michal;
                    if(michal) { _fun00028_ip = 57; continue _fun00027 }
 51:
                    zuuluu = golfie;
                    report = michal;
 57:
                    michal = undefined;
                    if(report) { _fun00028_ip = 87; continue _fun00027 }
 62:
                    golfie = oscard().value;
                    oscard = entity;
                    oscard = oscard === option;
                    michal = undefined;
                    report = oscard;
                    if(oscard) { _fun00028_ip = 87; continue _fun00027 }
 81:
                    michal = golfie;
                    report = oscard;
 87:
                    if(report) { _fun00028_ip = 93; continue _fun00027 }
 90:
                    entity.return();
 93:
                    entity = {};
                    entity['guildVersions'] = tangon;
                    entity['guildChannels'] = zuuluu;
                    entity['databaseOk'] = michal;
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    zuuluu['preloadReadyPayloadData'] = oscard;
    oscard = function(argFoo, argBar, argBaz) { // Original name: hydrateReadyPayloadPrioritized
        _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
            oscard = argFoo;
            echoed = argBaz;
            golfie = oscard.users;
            verify = oscard.relationships;
            zuuluu = oscard.private_channels;
            michal = oscard.merged_members;
            var _closure2_slot0 = michal;
            yankee = oscard.guilds;
            report = {'users': 0, 'relationships': 0, 'private_channels': 0, 'merged_members': 0, 'guilds': 0};
            michal = null;
            target = report;
            papara = null;
            tangon = silentSetPrototypeOf(target, papara);
            result = 0;
            target = {};
            papara = oscard;
            cntext = report;
            tangon = copyDataProperties(target, papara, cntext);
            oscard = _closure1_slot1;
            offset = _closure1_slot3;
            report = 5;
            report = offset[report];
            offset = undefined;
            oscard = oscard.bind(offset)(report);
            report = oscard.database;
            report = report.bind(oscard)();
            report = michal != report;
            if(!report) { _fun00030_ip = 135; continue _fun00029 }
 123:
            romeon = echoed.databaseOk;
            oscard = false;
            report = oscard === romeon;
 135:
            if(!report) { _fun00030_ip = 175; continue _fun00029 }
 138:
            oscard = _closure1_slot1;
            romeon = _closure1_slot3;
            report = 13;
            report = romeon[report];
            romeon = oscard.bind(offset)(report);
            oscard = romeon.replaceDisableAllDatabases;
            report = 'ReadyPayloadUtils: database was not ok';
            report = oscard.bind(romeon)(report);
 175:
            report = {};
            _closure1_slot9 = report;
            report = global;
            romeon = report.Object;
            oscard = romeon.values;
            foxtra = _closure1_slot7;
            report = foxtra.getGuilds;
            report = report.bind(foxtra)();
            output = oscard.bind(romeon)(report);
            oscard = _closure1_slot4;
            report = oscard.getGuilds;
            sizing = report.bind(oscard)();
            oscard = _closure1_slot5;
            report = oscard.getRawStickersByGuild;
            kiloes = report.bind(oscard)();
            report = output.length;
            report = result < report;
            backup = 12;
            result = 0;
            foxtra = undefined;
            romeon = undefined;
            oscard = undefined;
            if(!report) { _fun00030_ip = 486; continue _fun00029 }
 267:
            report = output[result];
            source = report.id;
            update = echoed.guildVersions;
            update = source in update;
            if(!update) { _fun00030_ip = 310; continue _fun00029 }
 289:
            vacuum = echoed.guildChannels;
            ctrled = vacuum.has;
            source = report.id;
            update = ctrled.bind(vacuum)(source);
 310:
            if(!update) { _fun00030_ip = 471; continue _fun00029 }
 316:
            sequen = _closure1_slot9;
            vacuum = report.id;
            ctrled = {};
            source = _closure1_slot2;
            update = _closure1_slot3;
            update = update[backup];
            source = source.bind(offset)(update);
            update = source.toServer;
            update = update.bind(source)(report);
            ctrled['properties'] = update;
            config = _closure1_slot7;
            source = config.getRoles;
            update = report.id;
            update = source.bind(config)(update);
            ctrled['roles'] = update;
            update = report.id;
            update = sizing[update];
            config = michal == update;
            source = undefined;
            if(config) { _fun00030_ip = 409; continue _fun00029 }
 403:
            source = update.rawEmojis;
 409:
            record = michal != source;
            config = null;
            if(!record) { _fun00030_ip = 421; continue _fun00029 }
 418:
            config = source;
 421:
            ctrled['emojis'] = config;
            config = kiloes.get;
            report = report.id;
            report = config.bind(kiloes)(report);
            record = michal != report;
            config = null;
            if(!record) { _fun00030_ip = 453; continue _fun00029 }
 450:
            config = report;
 453:
            ctrled['stickers'] = config;
            sequen[vacuum] = ctrled;
            foxtra = source;
            romeon = update;
            oscard = report;
 471:
            result = result + 1;
            report = output.length;
            if(result < report) { _fun00030_ip = 267; continue _fun00029 }
 486:
            oscard = _closure1_slot15;
            romeon = _closure1_slot1;
            foxtra = _closure1_slot3;
            report = 10;
            report = foxtra[report];
            foxtra = romeon.bind(offset)(report);
            romeon = foxtra.keyBy;
            report = function(argFoo) {
                entity = argFoo;
                entity = entity.id;
                return entity;
            };
            report = romeon.bind(foxtra)(golfie, report);
            _closure1_slot11 = report;
            oscard = oscard.bind(offset)(report, verify);
            if(!(michal != zuuluu)) { _fun00030_ip = 560; continue _fun00029 }
 543:
            verify = zuuluu.forEach;
            report = function(argFoo) {
                _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                    entity = argFoo;
                    tangon = entity.recipient_ids;
                    michal = null;
                    if(!(michal != tangon)) { _fun00032_ip = 40; continue _fun00031 }
 15:
                    zuuluu = tangon.map;
                    michal = function(argFoo) {
                        michal = argFoo;
                        tangon = _closure1_slot1;
                        report = _closure1_slot3;
                        zuuluu = 11;
                        zuuluu = report[zuuluu];
                        oscard = undefined;
                        report = tangon.bind(oscard)(zuuluu);
                        zuuluu = _closure1_slot11;
                        tangon = zuuluu[michal];
                        zuuluu = null;
                        tangon = zuuluu != tangon;
                        zuuluu = 'Missing user in compressed ready payload';
                        zuuluu = report.bind(oscard)(tangon, zuuluu);
                        entity = _closure1_slot11;
                        entity = entity[michal];
                        return entity;
                    };
                    michal = zuuluu.bind(tangon)(michal);
                    entity['recipients'] = michal;
 40:
                    entity = delete entity.recipient_ids;
                    entity = undefined;
                    return entity;
                }
            };
            report = verify.bind(zuuluu)(report);
 560:
            verify = michal == yankee;
            report = undefined;
            if(verify) { _fun00030_ip = 586; continue _fun00029 }
 569:
            romeon = yankee.map;
            verify = function(argFoo, argBar) {
                _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                    tangon = argFoo;
                    zuuluu = tangon.unavailable;
                    michal = true;
                    entity = tangon;
                    if(!(michal !== zuuluu)) { _fun00034_ip = 81; continue _fun00033 }
 18:
                    golfie = _closure1_slot15;
                    oscard = _closure1_slot11;
                    report = _closure2_slot0;
                    zuuluu = null;
                    verify = zuuluu == report;
                    zuuluu = undefined;
                    report = undefined;
                    if(verify) { _fun00034_ip = 60; continue _fun00033 }
 49:
                    verify = _closure2_slot0;
                    option = argBar;
                    report = verify[option];
 60:
                    report = golfie.bind(zuuluu)(oscard, report);
                    tangon['members'] = report;
                    michal = _closure1_slot17;
                    entity = michal.bind(zuuluu)(tangon);
 81:
                    return entity;
                }
            };
            report = romeon.bind(yankee)(verify);
 586:
            if(!(michal == report)) { _fun00030_ip = 594; continue _fun00029 }
 590:
            report = new Array(0);
 594:
            verify = _closure1_slot14;
            option = argBar;
            entity = function(argFoo) {
                zuuluu = _closure1_slot17;
                michal = undefined;
                entity = argFoo;
                entity = zuuluu.bind(michal)(entity);
                return entity;
            };
            option = verify.bind(offset)(option, yankee, entity);
            if(!(michal != option)) { _fun00030_ip = 629; continue _fun00029 }
 619:
            entity = report.push;
            entity = entity.bind(report)(option);
 629:
            entity = {};
            target = entity;
            papara = tangon;
            tangon = copyDataProperties(target, papara);
            tangon = 'users';
            entity[tangon] = golfie;
            golfie = new Array(0);
            tangon = 'presences';
            entity[tangon] = golfie;
            tangon = 'relationships';
            entity[tangon] = oscard;
            tangon = 'guilds';
            entity[tangon] = report;
            if(!(michal == zuuluu)) { _fun00030_ip = 689; continue _fun00029 }
 685:
            zuuluu = new Array(0);
 689:
            michal = 'private_channels';
            entity[michal] = zuuluu;
            return entity;
        }
    };
    zuuluu['hydrateReadyPayloadPrioritized'] = oscard;
    report = function(argFoo, argBar) { // Original name: hydrateInitialGuild
        _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
            tangon = argFoo;
            report = _closure1_slot7;
            michal = report.getGuild;
            entity = tangon.id;
            option = michal.bind(report)(entity);
            report = _closure1_slot18;
            golfie = null;
            oscard = golfie == option;
            michal = undefined;
            entity = undefined;
            if(oscard) { _fun00036_ip = 212; continue _fun00035 }
 45:
            oscard = {};
            offset = _closure1_slot2;
            yankee = _closure1_slot3;
            verify = 12;
            verify = yankee[verify];
            offset = offset.bind(michal)(verify);
            verify = offset.toServer;
            verify = verify.bind(offset)(option);
            oscard['properties'] = verify;
            yankee = _closure1_slot7;
            offset = yankee.getRoles;
            verify = option.id;
            verify = offset.bind(yankee)(verify);
            oscard['roles'] = verify;
            offset = _closure1_slot4;
            verify = offset.getGuilds;
            offset = verify.bind(offset)();
            verify = option.id;
            verify = offset[verify];
            yankee = golfie == verify;
            offset = undefined;
            if(yankee) { _fun00036_ip = 146; continue _fun00035 }
 140:
            offset = verify.rawEmojis;
 146:
            yankee = golfie != offset;
            verify = null;
            if(!yankee) { _fun00036_ip = 158; continue _fun00035 }
 155:
            verify = offset;
 158:
            oscard['emojis'] = verify;
            offset = _closure1_slot5;
            verify = offset.getRawStickersByGuild;
            offset = verify.bind(offset)();
            verify = offset.get;
            option = option.id;
            option = verify.bind(offset)(option);
            verify = golfie != option;
            golfie = null;
            if(!verify) { _fun00036_ip = 204; continue _fun00035 }
 201:
            golfie = option;
 204:
            oscard['stickers'] = golfie;
            entity = oscard;
 212:
            entity = report.bind(michal)(tangon, entity);
            michal = {};
            michal['guild'] = tangon;
            tangon = argBar;
            michal['identifyTime'] = tangon;
            _closure1_slot10 = michal;
            return entity;
        }
    };
    zuuluu['hydrateInitialGuild'] = report;
    zuuluu['hydratePreviouslyUnavailableGuild'] = tangon;
    zuuluu['filterDeletes'] = michal;
    return entity;
})();