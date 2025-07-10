// app/utils/ReadyPayloadUtils.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    entity = argCor;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = golfie;
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
            if(michal) { _fun00002_ip = 344; continue _fun00001 }
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
 344:
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
            if(zuuluu) { _fun00008_ip = 88; continue _fun00007 }
 21:
            zuuluu = _closure1_slot11;
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
                entity = _closure1_slot11;
                entity = entity.guild;
                entity = entity.id;
                entity = michal === entity;
                return entity;
            };
            zuuluu = report.bind(oscard)(zuuluu);
            entity = null;
            if(zuuluu) { _fun00008_ip = 88; continue _fun00007 }
 69:
            michal = _closure1_slot11;
            tangon = michal.guild;
            zuuluu = argBaz;
            michal = undefined;
            entity = zuuluu.bind(michal)(tangon);
 88:
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
 43:
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
    entity = function(argFoo, argBar, argBaz) { // Original name: hydrateUpdateForEntity
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            oscard = argFoo;
            tangon = argBar;
            zuuluu = argBaz;
            michal = null;
            if(!(tangon == michal)) { _fun00014_ip = 21; continue _fun00013 }
 17:
            tangon = new Array(0);
 21:
            if(!(zuuluu == michal)) { _fun00014_ip = 29; continue _fun00013 }
 25:
            zuuluu = new Array(0);
 29:
            report = global;
            report = report.Set;
            golfie = report.prototype;
            golfie = Object.create(golfie, {constructor: {value: report}});
            kiloes = golfie;
            backup = zuuluu;
            report = new kiloes[report](backup, foxtra);
            offset = report instanceof Object ? report : golfie;
            var _closure2_slot0 = offset;
            report = _closure1_slot13;
            verify = undefined;
            option = report.bind(verify)(tangon);
            golfie = option.bind(verify)();
            report = golfie.done;
            if(report) { _fun00014_ip = 125; continue _fun00013 }
 90:
            report = golfie.value;
            yankee = report.id;
            report = offset.add;
            report = report.bind(offset)(yankee);
            yankee = option.bind(verify)();
            report = yankee.done;
            golfie = yankee;
            if(!report) { _fun00014_ip = 90; continue _fun00013 }
 125:
            report = michal != oscard;
            michal = null;
            if(!report) { _fun00014_ip = 188; continue _fun00013 }
 134:
            report = oscard.filter;
            entity = function(argFoo) {
                zuuluu = _closure2_slot0;
                michal = zuuluu.has;
                entity = argFoo;
                entity = entity.id;
                entity = michal.bind(zuuluu)(entity);
                entity = !entity;
                return entity;
            };
            entity = report.bind(oscard)(entity);
            oscard = entity.push;
            report = new Array(0);
            romeon = 0;
            backup = report;
            foxtra = tangon;
            golfie = arraySpread(backup, foxtra, romeon);
            backup = oscard;
            foxtra = report;
            romeon = entity;
            report = apply(backup, foxtra, romeon);
            michal = entity;
 188:
            entity = {};
            report = 'update';
            entity['op'] = report;
            entity['writes'] = tangon;
            entity['deletes'] = zuuluu;
            entity['items'] = michal;
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = function(argFoo) { // Original name: hydrateGuild
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            michal = argFoo;
            var _closure2_slot0 = michal;
            report = _closure1_slot17;
            entity = michal.id;
            golfie = undefined;
            report = report.bind(golfie)(entity);
            oscard = michal.data_mode;
            entity = 'partial';
            if(!(entity === oscard)) { _fun00016_ip = 613; continue _fun00015 }
 45:
            oscard = null;
            if(!(oscard != report)) { _fun00016_ip = 543; continue _fun00015 }
 54:
            entity = {};
            option = michal.id;
            entity['id'] = option;
            option = michal.data_mode;
            entity['dataMode'] = option;
            option = {};
            verify = 'update';
            option['op'] = verify;
            verify = michal.partial_updates;
            romeon = verify.channels;
            offset = oscard == romeon;
            verify = undefined;
            if(offset) { _fun00016_ip = 124; continue _fun00015 }
 107:
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
 124:
            if(!(oscard == verify)) { _fun00016_ip = 132; continue _fun00015 }
 128:
            verify = new Array(0);
 132:
            option['writes'] = verify;
            verify = michal.partial_updates;
            verify = verify.deleted_channel_ids;
            if(!(oscard == verify)) { _fun00016_ip = 157; continue _fun00015 }
 153:
            verify = new Array(0);
 157:
            option['deletes'] = verify;
            entity['channels'] = option;
            option = michal.channel_updates;
            entity['channelTimestampUpdates'] = option;
            yankee = _closure1_slot18;
            offset = report.emojis;
            option = michal.partial_updates;
            verify = option.emojis;
            option = michal.partial_updates;
            option = option.deleted_emoji_ids;
            option = yankee.bind(golfie)(offset, verify, option);
            entity['emojis'] = option;
            option = michal.guild_scheduled_events;
            entity['guild_scheduled_events'] = option;
            option = michal.joined_at;
            entity['joined_at'] = option;
            option = michal.last_messages;
            entity['lastMessages'] = option;
            option = michal.member_count;
            entity['member_count'] = option;
            option = michal.members;
            entity['members'] = option;
            option = michal.premium_subscription_count;
            entity['premium_subscription_count'] = option;
            verify = michal.properties;
            offset = oscard != verify;
            option = null;
            if(!offset) { _fun00016_ip = 308; continue _fun00015 }
 305:
            option = verify;
 308:
            entity['properties'] = option;
            verify = _closure1_slot0;
            offset = _closure1_slot3;
            option = 15;
            option = offset[option];
            foxtra = verify.bind(golfie)(option);
            romeon = foxtra.filterRoleDeletes;
            output = michal.id;
            sizing = report.roles;
            option = michal.partial_updates;
            kiloes = option.roles;
            option = michal.partial_updates;
            backup = option.deleted_role_ids;
            result = foxtra;
            option = result[romeon](output, sizing, kiloes, backup, foxtra);
            entity['roles'] = option;
            option = michal.stage_instances;
            entity['stage_instances'] = option;
            offset = _closure1_slot18;
            verify = report.stickers;
            report = michal.partial_updates;
            option = report.stickers;
            report = michal.partial_updates;
            report = report.deleted_sticker_ids;
            report = offset.bind(golfie)(verify, option, report);
            entity['stickers'] = report;
            report = michal.unable_to_sync_deletes;
            entity['unableToSyncDeletes'] = report;
            offset = michal.threads;
            option = oscard == offset;
            report = undefined;
            if(option) { _fun00016_ip = 486; continue _fun00015 }
 469:
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
 486:
            if(!(oscard == report)) { _fun00016_ip = 494; continue _fun00015 }
 490:
            report = new Array(0);
 494:
            entity['threads'] = report;
            oscard = _closure1_slot21;
            report = michal.threads;
            report = oscard.bind(golfie)(report);
            entity['threadMessages'] = report;
            report = michal.version;
            entity['version'] = report;
            report = michal.has_threads_subscription;
            entity['hasThreadsSubscription'] = report;
            return entity;
 543:
            option = _closure1_slot9;
            oscard = option.log;
            yankee = michal.id;
            entity = global;
            report = entity.HermesInternal;
            offset = report.concat;
            verify = 'no cache entry for partial guild (guild: ';
            report = ', type: ready)';
            report = offset.bind(verify)(yankee, report);
            report = oscard.bind(option)(report);
            report = entity.Error;
            entity = 'Guild data was missing from store, but hash was still available.';
            entity = report.bind(golfie)(entity);
            throw entity;
 613:
            entity = {};
            report = michal.id;
            entity['id'] = report;
            report = michal.data_mode;
            entity['dataMode'] = report;
            oscard = {};
            report = 'full_sync';
            oscard['op'] = report;
            option = michal.emojis;
            oscard['items'] = option;
            entity['emojis'] = oscard;
            oscard = michal.guild_scheduled_events;
            entity['guild_scheduled_events'] = oscard;
            oscard = michal.joined_at;
            entity['joined_at'] = oscard;
            oscard = michal.last_messages;
            entity['lastMessages'] = oscard;
            oscard = michal.member_count;
            entity['member_count'] = oscard;
            oscard = michal.members;
            entity['members'] = oscard;
            oscard = michal.premium_subscription_count;
            entity['premium_subscription_count'] = oscard;
            oscard = michal.properties;
            entity['properties'] = oscard;
            oscard = michal.roles;
            entity['roles'] = oscard;
            oscard = michal.stage_instances;
            entity['stage_instances'] = oscard;
            oscard = {};
            oscard['op'] = report;
            option = michal.stickers;
            oscard['items'] = option;
            entity['stickers'] = oscard;
            yankee = michal.threads;
            option = null;
            verify = option == yankee;
            oscard = undefined;
            if(verify) { _fun00016_ip = 818; continue _fun00015 }
 801:
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
 818:
            if(!(option == oscard)) { _fun00016_ip = 826; continue _fun00015 }
 822:
            oscard = new Array(0);
 826:
            entity['threads'] = oscard;
            oscard = _closure1_slot21;
            zuuluu = michal.threads;
            zuuluu = oscard.bind(golfie)(zuuluu);
            entity['threadMessages'] = zuuluu;
            zuuluu = {};
            zuuluu['op'] = report;
            oscard = michal.channels;
            report = oscard.map;
            tangon = function(argFoo) {
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
            tangon = report.bind(oscard)(tangon);
            zuuluu['items'] = tangon;
            entity['channels'] = zuuluu;
            zuuluu = michal.version;
            entity['version'] = zuuluu;
            michal = michal.has_threads_subscription;
            entity['hasThreadsSubscription'] = michal;
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    michal = function(argFoo, argBar) { // Original name: hydratePreviouslyUnavailableGuild
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            tangon = argFoo;
            oscard = argBar;
            var _closure2_slot0 = tangon;
            report = null;
            if(!(report == oscard)) { _fun00018_ip = 37; continue _fun00017 }
 18:
            golfie = _closure1_slot17;
            michal = tangon.id;
            entity = undefined;
            oscard = golfie.bind(entity)(michal);
 37:
            michal = tangon.data_mode;
            entity = 'partial';
            if(!(entity === michal)) { _fun00018_ip = 650; continue _fun00017 }
 54:
            if(!(report != oscard)) { _fun00018_ip = 575; continue _fun00017 }
 61:
            entity = {};
            michal = tangon.id;
            entity['id'] = michal;
            michal = {};
            golfie = 'update';
            michal['op'] = golfie;
            golfie = tangon.partial_updates;
            yankee = golfie.channels;
            verify = report == yankee;
            golfie = undefined;
            option = undefined;
            if(verify) { _fun00018_ip = 122; continue _fun00017 }
 105:
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
            option = offset.bind(yankee)(verify);
 122:
            if(!(report == option)) { _fun00018_ip = 130; continue _fun00017 }
 126:
            option = new Array(0);
 130:
            michal['writes'] = option;
            option = tangon.partial_updates;
            option = option.deleted_channel_ids;
            if(!(report == option)) { _fun00018_ip = 155; continue _fun00017 }
 151:
            option = new Array(0);
 155:
            michal['deletes'] = option;
            entity['channels'] = michal;
            michal = tangon.channel_updates;
            entity['channelTimestampUpdates'] = michal;
            michal = tangon.activity_instances;
            entity['activity_instances'] = michal;
            yankee = _closure1_slot18;
            offset = oscard.emojis;
            option = tangon.partial_updates;
            verify = option.emojis;
            option = tangon.partial_updates;
            option = option.deleted_emoji_ids;
            option = yankee.bind(golfie)(offset, verify, option);
            entity['emojis'] = option;
            option = tangon.guild_scheduled_events;
            entity['guild_scheduled_events'] = option;
            option = tangon.joined_at;
            entity['joined_at'] = option;
            option = tangon.last_messages;
            entity['lastMessages'] = option;
            option = tangon.member_count;
            entity['member_count'] = option;
            option = tangon.members;
            entity['members'] = option;
            option = tangon.premium_subscription_count;
            entity['premium_subscription_count'] = option;
            option = tangon.presences;
            entity['presences'] = option;
            option = tangon.properties;
            if(!(report == option)) { _fun00018_ip = 329; continue _fun00017 }
 323:
            option = oscard.properties;
 329:
            entity['properties'] = option;
            verify = _closure1_slot0;
            offset = _closure1_slot3;
            option = 15;
            option = offset[option];
            foxtra = verify.bind(golfie)(option);
            romeon = foxtra.filterRoleDeletes;
            output = tangon.id;
            sizing = oscard.roles;
            option = tangon.partial_updates;
            kiloes = option.roles;
            option = tangon.partial_updates;
            backup = option.deleted_role_ids;
            result = foxtra;
            option = result[romeon](output, sizing, kiloes, backup, foxtra);
            entity['roles'] = option;
            option = tangon.stage_instances;
            entity['stage_instances'] = option;
            offset = _closure1_slot18;
            verify = oscard.stickers;
            oscard = tangon.partial_updates;
            option = oscard.stickers;
            oscard = tangon.partial_updates;
            oscard = oscard.deleted_sticker_ids;
            oscard = offset.bind(golfie)(verify, option, oscard);
            entity['stickers'] = oscard;
            oscard = tangon.unable_to_sync_deletes;
            entity['unableToSyncDeletes'] = oscard;
            offset = tangon.threads;
            option = report == offset;
            oscard = undefined;
            if(option) { _fun00018_ip = 507; continue _fun00017 }
 490:
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
 507:
            if(!(report == oscard)) { _fun00018_ip = 515; continue _fun00017 }
 511:
            oscard = new Array(0);
 515:
            entity['threads'] = oscard;
            oscard = _closure1_slot21;
            michal = tangon.threads;
            michal = oscard.bind(golfie)(michal);
            entity['threadMessages'] = michal;
            michal = tangon.voice_states;
            entity['voice_states'] = michal;
            michal = tangon.version;
            entity['version'] = michal;
            michal = tangon.has_threads_subscription;
            entity['hasThreadsSubscription'] = michal;
            return entity;
 575:
            golfie = _closure1_slot9;
            oscard = golfie.log;
            offset = tangon.id;
            entity = global;
            michal = entity.HermesInternal;
            verify = michal.concat;
            option = 'no cache entry for partial guild (guild: ';
            michal = ', type: post_ready)';
            michal = verify.bind(option)(offset, michal);
            michal = oscard.bind(golfie)(michal);
            oscard = entity.Error;
            michal = undefined;
            entity = 'Guild data was missing from store, but hash was still available.';
            entity = oscard.bind(michal)(entity);
            throw entity;
 650:
            entity = {};
            michal = tangon.id;
            entity['id'] = michal;
            michal = tangon.guild_scheduled_events;
            entity['guild_scheduled_events'] = michal;
            michal = tangon.joined_at;
            entity['joined_at'] = michal;
            michal = tangon.last_messages;
            entity['lastMessages'] = michal;
            michal = tangon.member_count;
            entity['member_count'] = michal;
            michal = tangon.members;
            entity['members'] = michal;
            michal = tangon.premium_subscription_count;
            entity['premium_subscription_count'] = michal;
            michal = tangon.properties;
            entity['properties'] = michal;
            michal = tangon.roles;
            entity['roles'] = michal;
            michal = tangon.stage_instances;
            entity['stage_instances'] = michal;
            verify = tangon.threads;
            golfie = report == verify;
            oscard = undefined;
            michal = undefined;
            if(golfie) { _fun00018_ip = 794; continue _fun00017 }
 777:
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
            michal = option.bind(verify)(golfie);
 794:
            if(!(report == michal)) { _fun00018_ip = 802; continue _fun00017 }
 798:
            michal = new Array(0);
 802:
            entity['threads'] = michal;
            report = _closure1_slot21;
            michal = tangon.threads;
            michal = report.bind(oscard)(michal);
            entity['threadMessages'] = michal;
            michal = tangon.presences;
            entity['presences'] = michal;
            michal = tangon.activity_instances;
            entity['activity_instances'] = michal;
            michal = tangon.voice_states;
            entity['voice_states'] = michal;
            michal = tangon.version;
            entity['version'] = michal;
            michal = tangon.has_threads_subscription;
            entity['hasThreadsSubscription'] = michal;
            michal = {};
            report = 'full_sync';
            michal['op'] = report;
            oscard = tangon.emojis;
            michal['items'] = oscard;
            entity['emojis'] = michal;
            michal = {};
            michal['op'] = report;
            oscard = tangon.stickers;
            michal['items'] = oscard;
            entity['stickers'] = michal;
            michal = {};
            michal['op'] = report;
            report = tangon.channels;
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
            michal['items'] = zuuluu;
            entity['channels'] = michal;
            return entity;
        }
    };
    var _closure1_slot20 = michal;
    entity = function(argFoo) { // Original name: collectThreadMessages
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            zuuluu = argFoo;
            entity = new Array(0);
            oscard = null;
            if(!(oscard != zuuluu)) { _fun00020_ip = 85; continue _fun00019 }
 13:
            michal = _closure1_slot13;
            report = undefined;
            tangon = michal.bind(report)(zuuluu);
            zuuluu = tangon.bind(report)();
            michal = zuuluu.done;
            if(michal) { _fun00020_ip = 85; continue _fun00019 }
 39:
            michal = zuuluu.value;
            golfie = michal.most_recent_message;
            if(!(oscard != golfie)) { _fun00020_ip = 70; continue _fun00019 }
 54:
            golfie = entity.push;
            michal = michal.most_recent_message;
            michal = golfie.bind(entity)(michal);
 70:
            golfie = tangon.bind(report)();
            michal = golfie.done;
            zuuluu = golfie;
            if(!michal) { _fun00020_ip = 39; continue _fun00019 }
 85:
            return entity;
        }
    };
    var _closure1_slot21 = entity;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = option.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 1;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 2;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.createChannelRecordFromServer;
    var _closure1_slot6 = report;
    report = 3;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot7 = report;
    report = 4;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot8 = report;
    report = 5;
    report = golfie[report];
    verify = option.bind(entity)(report);
    report = verify.prototype;
    option = Object.create(report, {constructor: {value: verify}});
    foxtra = 'ReadyPayloadUtils';
    backup = option;
    report = new backup[verify](foxtra, romeon);
    report = report instanceof Object ? report : option;
    var _closure1_slot9 = report;
    report = {};
    var _closure1_slot10 = report;
    report = null;
    var _closure1_slot11 = report;
    report = {};
    var _closure1_slot12 = report;
    report = 16;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'utils/ReadyPayloadUtils.tsx';
    report = oscard.bind(golfie)(report);
    report = function(argFoo, argBar) { // Original name: hydrateReadySupplementalPayload
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
            if(golfie) { _fun00022_ip = 128; continue _fun00021 }
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
 128:
            if(!(entity == zuuluu)) { _fun00022_ip = 136; continue _fun00021 }
 132:
            zuuluu = new Array(0);
 136:
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
            if(!(entity != oscard)) { _fun00022_ip = 171; continue _fun00021 }
 161:
            entity = zuuluu.push;
            entity = entity.bind(zuuluu)(oscard);
 171:
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
    zuuluu['hydrateReadySupplementalPayload'] = report;
    report = function() { // Original name: preloadReadyPayloadData
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
    zuuluu['preloadReadyPayloadData'] = report;
    report = function(argFoo, argBar, argBaz) { // Original name: hydrateReadyPayloadPrioritized
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
            update = source.toGuildProperties;
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
            if(!(michal != zuuluu)) { _fun00030_ip = 554; continue _fun00029 }
 537:
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
 40:
                    entity = delete entity.recipient_ids;
                    entity = undefined;
                    return entity;
                }
            };
            report = verify.bind(zuuluu)(report);
 554:
            verify = michal == yankee;
            report = undefined;
            if(verify) { _fun00030_ip = 580; continue _fun00029 }
 563:
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
                    michal = _closure1_slot19;
                    entity = michal.bind(zuuluu)(tangon);
 81:
                    return entity;
                }
            };
            report = romeon.bind(yankee)(verify);
 580:
            if(!(michal == report)) { _fun00030_ip = 588; continue _fun00029 }
 584:
            report = new Array(0);
 588:
            verify = _closure1_slot15;
            option = argBar;
            entity = function(argFoo) {
                zuuluu = _closure1_slot19;
                michal = undefined;
                entity = argFoo;
                entity = zuuluu.bind(michal)(entity);
                return entity;
            };
            option = verify.bind(offset)(option, yankee, entity);
            if(!(michal != option)) { _fun00030_ip = 623; continue _fun00029 }
 613:
            entity = report.push;
            entity = entity.bind(report)(option);
 623:
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
            if(!(michal == zuuluu)) { _fun00030_ip = 683; continue _fun00029 }
 679:
            zuuluu = new Array(0);
 683:
            michal = 'private_channels';
            entity[michal] = zuuluu;
            return entity;
        }
    };
    zuuluu['hydrateReadyPayloadPrioritized'] = report;
    tangon = function(argFoo, argBar) { // Original name: hydrateInitialGuild
        _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
            tangon = argFoo;
            report = _closure1_slot8;
            michal = report.getGuild;
            entity = tangon.id;
            option = michal.bind(report)(entity);
            report = _closure1_slot20;
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
            verify = offset.toGuildProperties;
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
    zuuluu['hydrateInitialGuild'] = tangon;
    zuuluu['hydratePreviouslyUnavailableGuild'] = michal;
    return entity;
})();