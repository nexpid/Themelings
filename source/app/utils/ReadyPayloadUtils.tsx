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
            if(!michal) { _fun00002_ip = 45; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 45:
            if(michal) { _fun00002_ip = 54; continue _fun00001 }
 48:
            michal = zuuluu.@@iterator;
 54:
            if(michal) { _fun00002_ip = 342; continue _fun00001 }
 60:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 322; continue _fun00001 }
 85:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 282; continue _fun00001 }
 95:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 269; continue _fun00001 }
 109:
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
            if(!golfie) { _fun00002_ip = 162; continue _fun00001 }
 157:
            golfie = zuuluu.constructor;
 162:
            offset = verify;
            if(!golfie) { _fun00002_ip = 178; continue _fun00001 }
 168:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 178:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 186:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 194:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 233; continue _fun00001 }
 204:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 246; continue _fun00001 }
 233:
            verify = _closure1_slot14;
            golfie = verify.bind(option)(zuuluu, option);
 246:
            _fun00002_ip = 264; continue _fun00001;
 248:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 264:
            oscard = golfie;
            _fun00002_ip = 282; continue _fun00001;
 269:
            golfie = _closure1_slot14;
            oscard = golfie.bind(option)(zuuluu, option);
 282:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 322; continue _fun00001 }
 288:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 322:
            if(!tangon) { _fun00002_ip = 329; continue _fun00001 }
 325:
            _closure2_slot0 = tangon;
 329:
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
 342:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot13 = entity;
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
    var _closure1_slot14 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: maybeIncludeInitialGuild
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            oscard = argBar;
            entity = _closure1_slot11;
            tangon = null;
            zuuluu = tangon == entity;
            entity = null;
            if(zuuluu) { _fun00008_ip = 86; continue _fun00007 }
 21:
            zuuluu = _closure1_slot11;
            report = zuuluu.identifyTime;
            zuuluu = argFoo;
            entity = null;
            if(!(report === zuuluu)) { _fun00008_ip = 86; continue _fun00007 }
 40:
            if(!(tangon != oscard)) { _fun00008_ip = 67; continue _fun00007 }
 44:
            report = oscard.some;
            zuuluu = function(argFoo) {
                entity = argFoo;
                michal = entity.id;
                entity = _closure1_slot11;
                entity = entity.guild;
                entity = entity.id;
                entity = michal === entity;
                return entity;
            };
            zuuluu = report.bind(oscard)(zuuluu);
            entity = null;
            if(zuuluu) { _fun00008_ip = 86; continue _fun00007 }
 67:
            michal = _closure1_slot11;
            tangon = michal.guild;
            zuuluu = argBaz;
            michal = undefined;
            entity = zuuluu.bind(michal)(tangon);
 86:
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo, argBar) { // Original name: restoreUsers
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            tangon = argBar;
            entity = argFoo;
            var _closure2_slot0 = entity;
            entity = new Array(0);
            var _closure2_slot1 = entity;
            zuuluu = null;
            if(!(zuuluu != tangon)) { _fun00010_ip = 41; continue _fun00009 }
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
                    entity = 12;
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
 41:
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo) { // Original name: popGuildCacheEntry
        zuuluu = argFoo;
        entity = _closure1_slot10;
        entity = entity[zuuluu];
        michal = _closure1_slot10;
        michal = delete michal[zuuluu];
        return entity;
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo) { // Original name: hydrateGuild
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            michal = argFoo;
            var _closure2_slot0 = michal;
            report = _closure1_slot17;
            entity = michal.id;
            oscard = undefined;
            option = report.bind(oscard)(entity);
            report = michal.data_mode;
            entity = 'partial';
            if(!(entity === report)) { _fun00014_ip = 750; continue _fun00013 }
 45:
            golfie = null;
            if(!(golfie != option)) { _fun00014_ip = 680; continue _fun00013 }
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
            if(offset) { _fun00014_ip = 119; continue _fun00013 }
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
 119:
            if(!(golfie == verify)) { _fun00014_ip = 127; continue _fun00013 }
 123:
            verify = new Array(0);
 127:
            report['writes'] = verify;
            verify = michal.partial_updates;
            verify = verify.deleted_channel_ids;
            if(!(golfie == verify)) { _fun00014_ip = 152; continue _fun00013 }
 148:
            verify = new Array(0);
 152:
            report['deletes'] = verify;
            entity['channelUpdates'] = report;
            report = michal.channel_updates;
            entity['channelTimestampUpdates'] = report;
            report = option.emojis;
            verify = golfie == report;
            report = null;
            if(verify) { _fun00014_ip = 229; continue _fun00013 }
 188:
            romeon = _closure1_slot21;
            yankee = option.emojis;
            verify = michal.partial_updates;
            offset = verify.emojis;
            verify = michal.partial_updates;
            verify = verify.deleted_emoji_ids;
            report = romeon.bind(oscard)(yankee, offset, verify);
 229:
            entity['emojis'] = report;
            report = {};
            verify = michal.partial_updates;
            verify = verify.emojis;
            if(!(golfie == verify)) { _fun00014_ip = 256; continue _fun00013 }
 252:
            verify = new Array(0);
 256:
            report['writes'] = verify;
            verify = michal.partial_updates;
            verify = verify.deleted_emoji_ids;
            if(!(golfie == verify)) { _fun00014_ip = 281; continue _fun00013 }
 277:
            verify = new Array(0);
 281:
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
            if(!offset) { _fun00014_ip = 375; continue _fun00013 }
 372:
            report = verify;
 375:
            entity['properties'] = report;
            verify = _closure1_slot2;
            offset = _closure1_slot3;
            report = 13;
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
            if(verify) { _fun00014_ip = 520; continue _fun00013 }
 479:
            yankee = _closure1_slot21;
            offset = option.stickers;
            option = michal.partial_updates;
            verify = option.stickers;
            option = michal.partial_updates;
            option = option.deleted_sticker_ids;
            report = yankee.bind(oscard)(offset, verify, option);
 520:
            entity['stickers'] = report;
            report = {};
            option = michal.partial_updates;
            option = option.stickers;
            if(!(golfie == option)) { _fun00014_ip = 547; continue _fun00013 }
 543:
            option = new Array(0);
 547:
            report['writes'] = option;
            option = michal.partial_updates;
            option = option.deleted_sticker_ids;
            if(!(golfie == option)) { _fun00014_ip = 572; continue _fun00013 }
 568:
            option = new Array(0);
 572:
            report['deletes'] = option;
            entity['stickerUpdates'] = report;
            report = michal.unable_to_sync_deletes;
            entity['unableToSyncDeletes'] = report;
            offset = michal.threads;
            option = golfie == offset;
            report = undefined;
            if(option) { _fun00014_ip = 623; continue _fun00013 }
 608:
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
 623:
            if(!(golfie == report)) { _fun00014_ip = 631; continue _fun00013 }
 627:
            report = new Array(0);
 631:
            entity['threads'] = report;
            golfie = _closure1_slot20;
            report = michal.threads;
            report = golfie.bind(oscard)(report);
            entity['threadMessages'] = report;
            report = michal.version;
            entity['version'] = report;
            report = michal.has_threads_subscription;
            entity['hasThreadsSubscription'] = report;
            return entity;
 680:
            option = _closure1_slot9;
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
 750:
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
            if(option) { _fun00014_ip = 925; continue _fun00013 }
 910:
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
 925:
            if(!(golfie == report)) { _fun00014_ip = 933; continue _fun00013 }
 929:
            report = new Array(0);
 933:
            entity['threads'] = report;
            report = _closure1_slot20;
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
    var _closure1_slot18 = entity;
    tangon = function(argFoo, argBar) { // Original name: hydratePreviouslyUnavailableGuild
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            michal = argFoo;
            option = argBar;
            var _closure2_slot0 = michal;
            report = null;
            if(!(report == option)) { _fun00016_ip = 37; continue _fun00015 }
 18:
            oscard = _closure1_slot17;
            tangon = michal.id;
            entity = undefined;
            option = oscard.bind(entity)(tangon);
 37:
            tangon = michal.data_mode;
            entity = 'partial';
            if(!(entity === tangon)) { _fun00016_ip = 790; continue _fun00015 }
 54:
            if(!(report != option)) { _fun00016_ip = 715; continue _fun00015 }
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
            if(verify) { _fun00016_ip = 117; continue _fun00015 }
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
 117:
            if(!(report == oscard)) { _fun00016_ip = 125; continue _fun00015 }
 121:
            oscard = new Array(0);
 125:
            tangon['writes'] = oscard;
            oscard = michal.partial_updates;
            oscard = oscard.deleted_channel_ids;
            if(!(report == oscard)) { _fun00016_ip = 150; continue _fun00015 }
 146:
            oscard = new Array(0);
 150:
            tangon['deletes'] = oscard;
            entity['channelUpdates'] = tangon;
            tangon = michal.channel_updates;
            entity['channelTimestampUpdates'] = tangon;
            tangon = michal.activity_instances;
            entity['activity_instances'] = tangon;
            tangon = option.emojis;
            oscard = report == tangon;
            tangon = null;
            if(oscard) { _fun00016_ip = 241; continue _fun00015 }
 197:
            yankee = _closure1_slot21;
            offset = option.emojis;
            oscard = michal.partial_updates;
            verify = oscard.emojis;
            oscard = michal.partial_updates;
            oscard = oscard.deleted_emoji_ids;
            tangon = yankee.bind(golfie)(offset, verify, oscard);
 241:
            entity['emojis'] = tangon;
            tangon = {};
            oscard = michal.partial_updates;
            oscard = oscard.emojis;
            if(!(report == oscard)) { _fun00016_ip = 268; continue _fun00015 }
 264:
            oscard = new Array(0);
 268:
            tangon['writes'] = oscard;
            oscard = michal.partial_updates;
            oscard = oscard.deleted_emoji_ids;
            if(!(report == oscard)) { _fun00016_ip = 293; continue _fun00015 }
 289:
            oscard = new Array(0);
 293:
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
            if(!(report == tangon)) { _fun00016_ip = 396; continue _fun00015 }
 390:
            tangon = option.properties;
 396:
            entity['properties'] = tangon;
            verify = _closure1_slot2;
            offset = _closure1_slot3;
            oscard = 13;
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
            if(verify) { _fun00016_ip = 544; continue _fun00015 }
 503:
            yankee = _closure1_slot21;
            offset = option.stickers;
            option = michal.partial_updates;
            verify = option.stickers;
            option = michal.partial_updates;
            option = option.deleted_sticker_ids;
            oscard = yankee.bind(golfie)(offset, verify, option);
 544:
            entity['stickers'] = oscard;
            oscard = {};
            option = michal.partial_updates;
            option = option.stickers;
            if(!(report == option)) { _fun00016_ip = 571; continue _fun00015 }
 567:
            option = new Array(0);
 571:
            oscard['writes'] = option;
            option = michal.partial_updates;
            option = option.deleted_sticker_ids;
            if(!(report == option)) { _fun00016_ip = 596; continue _fun00015 }
 592:
            option = new Array(0);
 596:
            oscard['deletes'] = option;
            entity['stickerUpdates'] = oscard;
            oscard = michal.unable_to_sync_deletes;
            entity['unableToSyncDeletes'] = oscard;
            offset = michal.threads;
            option = report == offset;
            oscard = undefined;
            if(option) { _fun00016_ip = 647; continue _fun00015 }
 632:
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
 647:
            if(!(report == oscard)) { _fun00016_ip = 655; continue _fun00015 }
 651:
            oscard = new Array(0);
 655:
            entity['threads'] = oscard;
            oscard = _closure1_slot20;
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
 715:
            golfie = _closure1_slot9;
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
 790:
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
            if(golfie) { _fun00016_ip = 954; continue _fun00015 }
 939:
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
 954:
            if(!(report == tangon)) { _fun00016_ip = 962; continue _fun00015 }
 958:
            tangon = new Array(0);
 962:
            entity['threads'] = tangon;
            report = _closure1_slot20;
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
    var _closure1_slot19 = tangon;
    entity = function(argFoo) { // Original name: collectThreadMessages
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            zuuluu = argFoo;
            entity = new Array(0);
            oscard = null;
            if(!(oscard != zuuluu)) { _fun00018_ip = 85; continue _fun00017 }
 13:
            michal = _closure1_slot13;
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
    var _closure1_slot20 = entity;
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
    var _closure1_slot21 = michal;
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
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot8 = oscard;
    oscard = 5;
    oscard = option[oscard];
    offset = verify.bind(entity)(oscard);
    oscard = offset.prototype;
    verify = Object.create(oscard, {constructor: {value: offset}});
    backup = 'ReadyPayloadUtils';
    kiloes = verify;
    oscard = new kiloes[offset](backup, foxtra);
    oscard = oscard instanceof Object ? oscard : verify;
    var _closure1_slot9 = oscard;
    oscard = {};
    var _closure1_slot10 = oscard;
    oscard = null;
    var _closure1_slot11 = oscard;
    oscard = {};
    var _closure1_slot12 = oscard;
    oscard = 15;
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
            golfie = _closure1_slot16;
            tangon = _closure1_slot12;
            yankee = entity == option;
            verify = undefined;
            zuuluu = undefined;
            if(yankee) { _fun00022_ip = 96; continue _fun00021 }
 90:
            zuuluu = option.friends;
 96:
            tangon = golfie.bind(verify)(tangon, zuuluu);
            golfie = entity == offset;
            zuuluu = undefined;
            if(golfie) { _fun00022_ip = 126; continue _fun00021 }
 111:
            option = offset.map;
            golfie = function(argFoo, argBar) {
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    michal = argFoo;
                    option = argBar;
                    oscard = _closure1_slot16;
                    tangon = _closure1_slot12;
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
                    oscard = _closure1_slot16;
                    zuuluu = _closure1_slot12;
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
 126:
            if(!(entity == zuuluu)) { _fun00022_ip = 134; continue _fun00021 }
 130:
            zuuluu = new Array(0);
 134:
            option = _closure1_slot15;
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
            _closure1_slot12 = entity;
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
            zuuluu = 6;
            zuuluu = michal[zuuluu];
            golfie = undefined;
            tangon = tangon.bind(golfie)(zuuluu);
            zuuluu = tangon.database;
            zuuluu = zuuluu.bind(tangon)();
            tangon = _closure1_slot0;
            report = 7;
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
            michal = 8;
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
            michal = 9;
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
            entity = 10;
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
            target = {};
            papara = oscard;
            cntext = report;
            tangon = copyDataProperties(target, papara, cntext);
            oscard = _closure1_slot1;
            offset = _closure1_slot3;
            report = 6;
            report = offset[report];
            offset = undefined;
            oscard = oscard.bind(offset)(report);
            report = oscard.database;
            report = report.bind(oscard)();
            report = michal != report;
            if(!report) { _fun00030_ip = 133; continue _fun00029 }
 121:
            romeon = echoed.databaseOk;
            oscard = false;
            report = oscard === romeon;
 133:
            if(!report) { _fun00030_ip = 173; continue _fun00029 }
 136:
            oscard = _closure1_slot1;
            romeon = _closure1_slot3;
            report = 14;
            report = romeon[report];
            romeon = oscard.bind(offset)(report);
            oscard = romeon.replaceDisableAllDatabases;
            report = 'ReadyPayloadUtils: database was not ok';
            report = oscard.bind(romeon)(report);
 173:
            report = {};
            _closure1_slot10 = report;
            oscard = _closure1_slot8;
            report = oscard.getGuildsArray;
            oscard = report.bind(oscard)();
            romeon = _closure1_slot4;
            report = romeon.getGuilds;
            result = report.bind(romeon)();
            romeon = _closure1_slot5;
            report = romeon.getRawStickersByGuild;
            output = report.bind(romeon)();
            report = _closure1_slot13;
            sizing = report.bind(offset)(oscard);
            oscard = sizing.bind(offset)();
            report = oscard.done;
            kiloes = 13;
            backup = oscard;
            foxtra = undefined;
            romeon = undefined;
            oscard = undefined;
            if(report) { _fun00030_ip = 480; continue _fun00029 }
 257:
            report = backup.value;
            source = report.id;
            update = echoed.guildVersions;
            update = source in update;
            if(!update) { _fun00030_ip = 301; continue _fun00029 }
 280:
            vacuum = echoed.guildChannels;
            ctrled = vacuum.has;
            source = report.id;
            update = ctrled.bind(vacuum)(source);
 301:
            if(!update) { _fun00030_ip = 462; continue _fun00029 }
 307:
            sequen = _closure1_slot10;
            vacuum = report.id;
            ctrled = {};
            source = _closure1_slot2;
            update = _closure1_slot3;
            update = update[kiloes];
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
            update = result[update];
            config = michal == update;
            source = undefined;
            if(config) { _fun00030_ip = 400; continue _fun00029 }
 394:
            source = update.rawEmojis;
 400:
            record = michal != source;
            config = null;
            if(!record) { _fun00030_ip = 412; continue _fun00029 }
 409:
            config = source;
 412:
            ctrled['emojis'] = config;
            config = output.get;
            report = report.id;
            report = config.bind(output)(report);
            record = michal != report;
            config = null;
            if(!record) { _fun00030_ip = 444; continue _fun00029 }
 441:
            config = report;
 444:
            ctrled['stickers'] = config;
            sequen[vacuum] = ctrled;
            foxtra = source;
            romeon = update;
            oscard = report;
 462:
            update = sizing.bind(offset)();
            report = update.done;
            backup = update;
            if(!report) { _fun00030_ip = 257; continue _fun00029 }
 480:
            oscard = _closure1_slot16;
            romeon = _closure1_slot1;
            foxtra = _closure1_slot3;
            report = 11;
            report = foxtra[report];
            foxtra = romeon.bind(offset)(report);
            romeon = foxtra.keyBy;
            report = function(argFoo) {
                entity = argFoo;
                entity = entity.id;
                return entity;
            };
            report = romeon.bind(foxtra)(golfie, report);
            _closure1_slot12 = report;
            oscard = oscard.bind(offset)(report, verify);
            if(!(michal != zuuluu)) { _fun00030_ip = 550; continue _fun00029 }
 535:
            verify = zuuluu.forEach;
            report = function(argFoo) {
                _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                    entity = argFoo;
                    tangon = entity.recipient_ids;
                    michal = null;
                    if(!(michal != tangon)) { _fun00032_ip = 38; continue _fun00031 }
 15:
                    zuuluu = tangon.map;
                    michal = function(argFoo) {
                        michal = argFoo;
                        tangon = _closure1_slot1;
                        report = _closure1_slot3;
                        zuuluu = 12;
                        zuuluu = report[zuuluu];
                        oscard = undefined;
                        report = tangon.bind(oscard)(zuuluu);
                        zuuluu = _closure1_slot12;
                        tangon = zuuluu[michal];
                        zuuluu = null;
                        tangon = zuuluu != tangon;
                        zuuluu = 'Missing user in compressed ready payload';
                        zuuluu = report.bind(oscard)(tangon, zuuluu);
                        entity = _closure1_slot12;
                        entity = entity[michal];
                        return entity;
                    };
                    michal = zuuluu.bind(tangon)(michal);
                    entity['recipients'] = michal;
 38:
                    entity = delete entity.recipient_ids;
                    entity = undefined;
                    return entity;
                }
            };
            report = verify.bind(zuuluu)(report);
 550:
            verify = michal == yankee;
            report = undefined;
            if(verify) { _fun00030_ip = 574; continue _fun00029 }
 559:
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
                    golfie = _closure1_slot16;
                    oscard = _closure1_slot12;
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
                    michal = _closure1_slot18;
                    entity = michal.bind(zuuluu)(tangon);
 81:
                    return entity;
                }
            };
            report = romeon.bind(yankee)(verify);
 574:
            if(!(michal == report)) { _fun00030_ip = 582; continue _fun00029 }
 578:
            report = new Array(0);
 582:
            verify = _closure1_slot15;
            option = argBar;
            entity = function(argFoo) {
                zuuluu = _closure1_slot18;
                michal = undefined;
                entity = argFoo;
                entity = zuuluu.bind(michal)(entity);
                return entity;
            };
            option = verify.bind(offset)(option, yankee, entity);
            if(!(michal != option)) { _fun00030_ip = 615; continue _fun00029 }
 605:
            entity = report.push;
            entity = entity.bind(report)(option);
 615:
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
            if(!(michal == zuuluu)) { _fun00030_ip = 675; continue _fun00029 }
 671:
            zuuluu = new Array(0);
 675:
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
            report = _closure1_slot8;
            michal = report.getGuild;
            entity = tangon.id;
            option = michal.bind(report)(entity);
            report = _closure1_slot19;
            golfie = null;
            oscard = golfie == option;
            michal = undefined;
            entity = undefined;
            if(oscard) { _fun00036_ip = 212; continue _fun00035 }
 45:
            oscard = {};
            offset = _closure1_slot2;
            yankee = _closure1_slot3;
            verify = 13;
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
            _closure1_slot11 = michal;
            return entity;
        }
    };
    zuuluu['hydrateInitialGuild'] = report;
    zuuluu['hydratePreviouslyUnavailableGuild'] = tangon;
    zuuluu['filterDeletes'] = michal;
    return entity;
})();