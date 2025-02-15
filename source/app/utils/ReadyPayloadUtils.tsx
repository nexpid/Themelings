// app/utils/ReadyPayloadUtils.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    golf = argBar;
    verify = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = verify;
    entity = argCorge;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = options;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun106564: for(var _fun106564_ip = 0; ; ) switch(_fun106564_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun106564_ip = 46; continue _fun106564 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun106564_ip = 55; continue _fun106564 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun106564_ip = 345; continue _fun106564 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun106564_ip = 323; continue _fun106564 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun106564_ip = 283; continue _fun106564 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun106564_ip = 270; continue _fun106564 }
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
            if(!golf) { _fun106564_ip = 163; continue _fun106564 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun106564_ip = 179; continue _fun106564 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun106564_ip = 249; continue _fun106564 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun106564_ip = 249; continue _fun106564 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun106564_ip = 234; continue _fun106564 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun106564_ip = 247; continue _fun106564 }
 234:
            verify = _closure1_slot14;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun106564_ip = 265; continue _fun106564;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun106564_ip = 283; continue _fun106564;
 270:
            golf = _closure1_slot14;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun106564_ip = 323; continue _fun106564 }
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
            if(!tango) { _fun106564_ip = 330; continue _fun106564 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun106565: for(var _fun106565_ip = 0; ; ) switch(_fun106565_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun106565_ip = 56; continue _fun106565 }
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
                    _fun106565_ip = 67; continue _fun106565;
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
    var _closure1_slot13 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun106566: for(var _fun106566_ip = 0; ; ) switch(_fun106566_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun106566_ip = 23; continue _fun106566 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun106566_ip = 33; continue _fun106566 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun106566_ip = 70; continue _fun106566 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun106566_ip = 55; continue _fun106566 }
 70:
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: maybeIncludeInitialGuild
        _fun106567: for(var _fun106567_ip = 0; ; ) switch(_fun106567_ip) {
 0:
            oscar = argBar;
            entity = _closure1_slot11;
            tango = null;
            zulu = tango == entity;
            entity = null;
            if(zulu) { _fun106567_ip = 88; continue _fun106567 }
 21:
            zulu = _closure1_slot11;
            report = zulu.identifyTime;
            zulu = argFoo;
            entity = null;
            if(!(report === zulu)) { _fun106567_ip = 88; continue _fun106567 }
 40:
            if(!(tango != oscar)) { _fun106567_ip = 69; continue _fun106567 }
 44:
            report = oscar.some;
            zulu = function(argFoo) {
                entity = argFoo;
                mike = entity.id;
                entity = _closure1_slot11;
                entity = entity.guild;
                entity = entity.id;
                entity = mike === entity;
                return entity;
            };
            zulu = report.bind(oscar)(zulu);
            entity = null;
            if(zulu) { _fun106567_ip = 88; continue _fun106567 }
 69:
            mike = _closure1_slot11;
            tango = mike.guild;
            zulu = argBaz;
            mike = undefined;
            entity = zulu.bind(mike)(tango);
 88:
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo, argBar) { // Original name: restoreUsers
        _fun106569: for(var _fun106569_ip = 0; ; ) switch(_fun106569_ip) {
 0:
            tango = argBar;
            entity = argFoo;
            var _closure2_slot0 = entity;
            entity = new Array(0);
            var _closure2_slot1 = entity;
            zulu = null;
            if(!(zulu != tango)) { _fun106569_ip = 43; continue _fun106569 }
 26:
            zulu = tango.forEach;
            mike = function(argFoo) {
                _fun106570: for(var _fun106570_ip = 0; ; ) switch(_fun106570_ip) {
 0:
                    zulu = argFoo;
                    report = null;
                    if(!(report != zulu)) { _fun106570_ip = 128; continue _fun106570 }
 9:
                    mike = zulu.user_id;
                    if(!(report != mike)) { _fun106570_ip = 106; continue _fun106570 }
 19:
                    tango = _closure1_slot1;
                    oscar = _closure1_slot3;
                    entity = 12;
                    entity = oscar[entity];
                    golf = undefined;
                    oscar = tango.bind(golf)(entity);
                    entity = _closure2_slot0;
                    tango = entity[mike];
                    report = report != tango;
                    tango = global;
                    tango = tango.HermesInternal;
                    verify = tango.concat;
                    options = 'Missing user[';
                    tango = '] in compressed ready payload';
                    tango = verify.bind(options)(mike, tango);
                    tango = oscar.bind(golf)(report, tango);
                    entity = entity[mike];
                    zulu['user'] = entity;
 106:
                    entity = delete zulu.user_id;
                    mike = _closure2_slot1;
                    entity = mike.push;
                    entity = entity.bind(mike)(zulu);
 128:
                    entity = undefined;
                    return entity;
                }
            };
            mike = zulu.bind(tango)(mike);
 43:
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo) { // Original name: popGuildCacheEntry
        zulu = argFoo;
        entity = _closure1_slot10;
        entity = entity[zulu];
        mike = _closure1_slot10;
        mike = delete mike[zulu];
        return entity;
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo) { // Original name: hydrateGuild
        _fun106572: for(var _fun106572_ip = 0; ; ) switch(_fun106572_ip) {
 0:
            mike = argFoo;
            var _closure2_slot0 = mike;
            report = _closure1_slot17;
            entity = mike.id;
            oscar = undefined;
            options = report.bind(oscar)(entity);
            report = mike.data_mode;
            entity = 'partial';
            if(!(entity === report)) { _fun106572_ip = 754; continue _fun106572 }
 45:
            golf = null;
            if(!(golf != options)) { _fun106572_ip = 684; continue _fun106572 }
 54:
            entity = {};
            report = mike.id;
            entity['id'] = report;
            report = mike.data_mode;
            entity['dataMode'] = report;
            entity['channels'] = golf;
            report = {};
            verify = mike.partial_updates;
            romeo = verify.channels;
            offset = golf == romeo;
            verify = undefined;
            if(offset) { _fun106572_ip = 121; continue _fun106572 }
 104:
            yankee = romeo.map;
            offset = function(argFoo) {
                tango = _closure1_slot6;
                entity = _closure2_slot0;
                zulu = entity.id;
                mike = undefined;
                entity = argFoo;
                entity = tango.bind(mike)(entity, zulu);
                return entity;
            };
            verify = yankee.bind(romeo)(offset);
 121:
            if(!(golf == verify)) { _fun106572_ip = 129; continue _fun106572 }
 125:
            verify = new Array(0);
 129:
            report['writes'] = verify;
            verify = mike.partial_updates;
            verify = verify.deleted_channel_ids;
            if(!(golf == verify)) { _fun106572_ip = 154; continue _fun106572 }
 150:
            verify = new Array(0);
 154:
            report['deletes'] = verify;
            entity['channelUpdates'] = report;
            report = mike.channel_updates;
            entity['channelTimestampUpdates'] = report;
            report = options.emojis;
            verify = golf == report;
            report = null;
            if(verify) { _fun106572_ip = 231; continue _fun106572 }
 190:
            romeo = _closure1_slot21;
            yankee = options.emojis;
            verify = mike.partial_updates;
            offset = verify.emojis;
            verify = mike.partial_updates;
            verify = verify.deleted_emoji_ids;
            report = romeo.bind(oscar)(yankee, offset, verify);
 231:
            entity['emojis'] = report;
            report = {};
            verify = mike.partial_updates;
            verify = verify.emojis;
            if(!(golf == verify)) { _fun106572_ip = 258; continue _fun106572 }
 254:
            verify = new Array(0);
 258:
            report['writes'] = verify;
            verify = mike.partial_updates;
            verify = verify.deleted_emoji_ids;
            if(!(golf == verify)) { _fun106572_ip = 283; continue _fun106572 }
 279:
            verify = new Array(0);
 283:
            report['deletes'] = verify;
            entity['emojiUpdates'] = report;
            report = mike.guild_scheduled_events;
            entity['guild_scheduled_events'] = report;
            report = mike.joined_at;
            entity['joined_at'] = report;
            report = mike.last_messages;
            entity['lastMessages'] = report;
            report = mike.member_count;
            entity['member_count'] = report;
            report = mike.members;
            entity['members'] = report;
            report = mike.premium_subscription_count;
            entity['premium_subscription_count'] = report;
            verify = mike.properties;
            offset = golf != verify;
            report = null;
            if(!offset) { _fun106572_ip = 377; continue _fun106572 }
 374:
            report = verify;
 377:
            entity['properties'] = report;
            verify = _closure1_slot2;
            offset = _closure1_slot3;
            report = 13;
            report = offset[report];
            foxtrot = verify.bind(oscar)(report);
            romeo = foxtrot.filterRoleDeletes;
            output = mike.id;
            sizing = options.roles;
            report = mike.partial_updates;
            kilo = report.roles;
            report = mike.partial_updates;
            backup = report.deleted_role_ids;
            result = foxtrot;
            report = result[romeo](output, sizing, kilo, backup, foxtrot);
            entity['roles'] = report;
            report = mike.stage_instances;
            entity['stage_instances'] = report;
            report = options.stickers;
            verify = golf == report;
            report = null;
            if(verify) { _fun106572_ip = 522; continue _fun106572 }
 481:
            yankee = _closure1_slot21;
            offset = options.stickers;
            options = mike.partial_updates;
            verify = options.stickers;
            options = mike.partial_updates;
            options = options.deleted_sticker_ids;
            report = yankee.bind(oscar)(offset, verify, options);
 522:
            entity['stickers'] = report;
            report = {};
            options = mike.partial_updates;
            options = options.stickers;
            if(!(golf == options)) { _fun106572_ip = 549; continue _fun106572 }
 545:
            options = new Array(0);
 549:
            report['writes'] = options;
            options = mike.partial_updates;
            options = options.deleted_sticker_ids;
            if(!(golf == options)) { _fun106572_ip = 574; continue _fun106572 }
 570:
            options = new Array(0);
 574:
            report['deletes'] = options;
            entity['stickerUpdates'] = report;
            report = mike.unable_to_sync_deletes;
            entity['unableToSyncDeletes'] = report;
            offset = mike.threads;
            options = golf == offset;
            report = undefined;
            if(options) { _fun106572_ip = 627; continue _fun106572 }
 610:
            verify = offset.map;
            options = function(argFoo) {
                tango = _closure1_slot6;
                entity = _closure2_slot0;
                zulu = entity.id;
                mike = undefined;
                entity = argFoo;
                entity = tango.bind(mike)(entity, zulu);
                return entity;
            };
            report = verify.bind(offset)(options);
 627:
            if(!(golf == report)) { _fun106572_ip = 635; continue _fun106572 }
 631:
            report = new Array(0);
 635:
            entity['threads'] = report;
            golf = _closure1_slot20;
            report = mike.threads;
            report = golf.bind(oscar)(report);
            entity['threadMessages'] = report;
            report = mike.version;
            entity['version'] = report;
            report = mike.has_threads_subscription;
            entity['hasThreadsSubscription'] = report;
            return entity;
 684:
            options = _closure1_slot9;
            golf = options.log;
            yankee = mike.id;
            entity = global;
            report = entity.HermesInternal;
            offset = report.concat;
            verify = 'no cache entry for partial guild (guild: ';
            report = ', type: ready)';
            report = offset.bind(verify)(yankee, report);
            report = golf.bind(options)(report);
            report = entity.Error;
            entity = 'Guild data was missing from store, but hash was still available.';
            entity = report.bind(oscar)(entity);
            throw entity;
 754:
            entity = {};
            report = mike.id;
            entity['id'] = report;
            report = mike.data_mode;
            entity['dataMode'] = report;
            report = mike.emojis;
            entity['emojis'] = report;
            report = mike.guild_scheduled_events;
            entity['guild_scheduled_events'] = report;
            report = mike.joined_at;
            entity['joined_at'] = report;
            report = mike.last_messages;
            entity['lastMessages'] = report;
            report = mike.member_count;
            entity['member_count'] = report;
            report = mike.members;
            entity['members'] = report;
            report = mike.premium_subscription_count;
            entity['premium_subscription_count'] = report;
            report = mike.properties;
            entity['properties'] = report;
            report = mike.roles;
            entity['roles'] = report;
            report = mike.stage_instances;
            entity['stage_instances'] = report;
            report = mike.stickers;
            entity['stickers'] = report;
            offset = mike.threads;
            golf = null;
            options = golf == offset;
            report = undefined;
            if(options) { _fun106572_ip = 931; continue _fun106572 }
 914:
            verify = offset.map;
            options = function(argFoo) {
                tango = _closure1_slot6;
                entity = _closure2_slot0;
                zulu = entity.id;
                mike = undefined;
                entity = argFoo;
                entity = tango.bind(mike)(entity, zulu);
                return entity;
            };
            report = verify.bind(offset)(options);
 931:
            if(!(golf == report)) { _fun106572_ip = 939; continue _fun106572 }
 935:
            report = new Array(0);
 939:
            entity['threads'] = report;
            report = _closure1_slot20;
            tango = mike.threads;
            tango = report.bind(oscar)(tango);
            entity['threadMessages'] = tango;
            report = mike.channels;
            tango = report.map;
            zulu = function(argFoo) {
                tango = argFoo;
                entity = _closure2_slot0;
                mike = entity.id;
                tango['guild_id'] = mike;
                zulu = _closure1_slot6;
                mike = entity.id;
                entity = undefined;
                entity = zulu.bind(entity)(tango, mike);
                return entity;
            };
            zulu = tango.bind(report)(zulu);
            entity['channels'] = zulu;
            zulu = mike.version;
            entity['version'] = zulu;
            mike = mike.has_threads_subscription;
            entity['hasThreadsSubscription'] = mike;
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    tango = function(argFoo, argBar) { // Original name: hydratePreviouslyUnavailableGuild
        _fun106577: for(var _fun106577_ip = 0; ; ) switch(_fun106577_ip) {
 0:
            mike = argFoo;
            options = argBar;
            var _closure2_slot0 = mike;
            report = null;
            if(!(report == options)) { _fun106577_ip = 37; continue _fun106577 }
 18:
            oscar = _closure1_slot17;
            tango = mike.id;
            entity = undefined;
            options = oscar.bind(entity)(tango);
 37:
            tango = mike.data_mode;
            entity = 'partial';
            if(!(entity === tango)) { _fun106577_ip = 794; continue _fun106577 }
 54:
            if(!(report != options)) { _fun106577_ip = 719; continue _fun106577 }
 61:
            entity = {};
            tango = mike.id;
            entity['id'] = tango;
            entity['channels'] = report;
            tango = {};
            oscar = mike.partial_updates;
            yankee = oscar.channels;
            verify = report == yankee;
            golf = undefined;
            oscar = undefined;
            if(verify) { _fun106577_ip = 119; continue _fun106577 }
 102:
            offset = yankee.map;
            verify = function(argFoo) {
                tango = _closure1_slot6;
                entity = _closure2_slot0;
                zulu = entity.id;
                mike = undefined;
                entity = argFoo;
                entity = tango.bind(mike)(entity, zulu);
                return entity;
            };
            oscar = offset.bind(yankee)(verify);
 119:
            if(!(report == oscar)) { _fun106577_ip = 127; continue _fun106577 }
 123:
            oscar = new Array(0);
 127:
            tango['writes'] = oscar;
            oscar = mike.partial_updates;
            oscar = oscar.deleted_channel_ids;
            if(!(report == oscar)) { _fun106577_ip = 152; continue _fun106577 }
 148:
            oscar = new Array(0);
 152:
            tango['deletes'] = oscar;
            entity['channelUpdates'] = tango;
            tango = mike.channel_updates;
            entity['channelTimestampUpdates'] = tango;
            tango = mike.activity_instances;
            entity['activity_instances'] = tango;
            tango = options.emojis;
            oscar = report == tango;
            tango = null;
            if(oscar) { _fun106577_ip = 243; continue _fun106577 }
 199:
            yankee = _closure1_slot21;
            offset = options.emojis;
            oscar = mike.partial_updates;
            verify = oscar.emojis;
            oscar = mike.partial_updates;
            oscar = oscar.deleted_emoji_ids;
            tango = yankee.bind(golf)(offset, verify, oscar);
 243:
            entity['emojis'] = tango;
            tango = {};
            oscar = mike.partial_updates;
            oscar = oscar.emojis;
            if(!(report == oscar)) { _fun106577_ip = 270; continue _fun106577 }
 266:
            oscar = new Array(0);
 270:
            tango['writes'] = oscar;
            oscar = mike.partial_updates;
            oscar = oscar.deleted_emoji_ids;
            if(!(report == oscar)) { _fun106577_ip = 295; continue _fun106577 }
 291:
            oscar = new Array(0);
 295:
            tango['deletes'] = oscar;
            entity['emojiUpdates'] = tango;
            tango = mike.guild_scheduled_events;
            entity['guild_scheduled_events'] = tango;
            tango = mike.joined_at;
            entity['joined_at'] = tango;
            tango = mike.last_messages;
            entity['lastMessages'] = tango;
            tango = mike.member_count;
            entity['member_count'] = tango;
            tango = mike.members;
            entity['members'] = tango;
            tango = mike.premium_subscription_count;
            entity['premium_subscription_count'] = tango;
            tango = mike.presences;
            entity['presences'] = tango;
            tango = mike.properties;
            if(!(report == tango)) { _fun106577_ip = 398; continue _fun106577 }
 392:
            tango = options.properties;
 398:
            entity['properties'] = tango;
            verify = _closure1_slot2;
            offset = _closure1_slot3;
            oscar = 13;
            oscar = offset[oscar];
            foxtrot = verify.bind(golf)(oscar);
            romeo = foxtrot.filterRoleDeletes;
            output = mike.id;
            sizing = options.roles;
            oscar = mike.partial_updates;
            kilo = oscar.roles;
            oscar = mike.partial_updates;
            backup = oscar.deleted_role_ids;
            result = foxtrot;
            oscar = result[romeo](output, sizing, kilo, backup, foxtrot);
            entity['roles'] = oscar;
            oscar = mike.stage_instances;
            entity['stage_instances'] = oscar;
            oscar = options.stickers;
            verify = report == oscar;
            oscar = null;
            if(verify) { _fun106577_ip = 546; continue _fun106577 }
 505:
            yankee = _closure1_slot21;
            offset = options.stickers;
            options = mike.partial_updates;
            verify = options.stickers;
            options = mike.partial_updates;
            options = options.deleted_sticker_ids;
            oscar = yankee.bind(golf)(offset, verify, options);
 546:
            entity['stickers'] = oscar;
            oscar = {};
            options = mike.partial_updates;
            options = options.stickers;
            if(!(report == options)) { _fun106577_ip = 573; continue _fun106577 }
 569:
            options = new Array(0);
 573:
            oscar['writes'] = options;
            options = mike.partial_updates;
            options = options.deleted_sticker_ids;
            if(!(report == options)) { _fun106577_ip = 598; continue _fun106577 }
 594:
            options = new Array(0);
 598:
            oscar['deletes'] = options;
            entity['stickerUpdates'] = oscar;
            oscar = mike.unable_to_sync_deletes;
            entity['unableToSyncDeletes'] = oscar;
            offset = mike.threads;
            options = report == offset;
            oscar = undefined;
            if(options) { _fun106577_ip = 651; continue _fun106577 }
 634:
            verify = offset.map;
            options = function(argFoo) {
                tango = _closure1_slot6;
                entity = _closure2_slot0;
                zulu = entity.id;
                mike = undefined;
                entity = argFoo;
                entity = tango.bind(mike)(entity, zulu);
                return entity;
            };
            oscar = verify.bind(offset)(options);
 651:
            if(!(report == oscar)) { _fun106577_ip = 659; continue _fun106577 }
 655:
            oscar = new Array(0);
 659:
            entity['threads'] = oscar;
            oscar = _closure1_slot20;
            tango = mike.threads;
            tango = oscar.bind(golf)(tango);
            entity['threadMessages'] = tango;
            tango = mike.voice_states;
            entity['voice_states'] = tango;
            tango = mike.version;
            entity['version'] = tango;
            tango = mike.has_threads_subscription;
            entity['hasThreadsSubscription'] = tango;
            return entity;
 719:
            golf = _closure1_slot9;
            oscar = golf.log;
            offset = mike.id;
            entity = global;
            tango = entity.HermesInternal;
            verify = tango.concat;
            options = 'no cache entry for partial guild (guild: ';
            tango = ', type: post_ready)';
            tango = verify.bind(options)(offset, tango);
            tango = oscar.bind(golf)(tango);
            oscar = entity.Error;
            tango = undefined;
            entity = 'Guild data was missing from store, but hash was still available.';
            entity = oscar.bind(tango)(entity);
            throw entity;
 794:
            entity = {};
            tango = mike.id;
            entity['id'] = tango;
            tango = mike.emojis;
            entity['emojis'] = tango;
            tango = mike.guild_scheduled_events;
            entity['guild_scheduled_events'] = tango;
            tango = mike.joined_at;
            entity['joined_at'] = tango;
            tango = mike.last_messages;
            entity['lastMessages'] = tango;
            tango = mike.member_count;
            entity['member_count'] = tango;
            tango = mike.members;
            entity['members'] = tango;
            tango = mike.premium_subscription_count;
            entity['premium_subscription_count'] = tango;
            tango = mike.properties;
            entity['properties'] = tango;
            tango = mike.roles;
            entity['roles'] = tango;
            tango = mike.stage_instances;
            entity['stage_instances'] = tango;
            tango = mike.stickers;
            entity['stickers'] = tango;
            verify = mike.threads;
            golf = report == verify;
            oscar = undefined;
            tango = undefined;
            if(golf) { _fun106577_ip = 960; continue _fun106577 }
 943:
            options = verify.map;
            golf = function(argFoo) {
                tango = _closure1_slot6;
                entity = _closure2_slot0;
                zulu = entity.id;
                mike = undefined;
                entity = argFoo;
                entity = tango.bind(mike)(entity, zulu);
                return entity;
            };
            tango = options.bind(verify)(golf);
 960:
            if(!(report == tango)) { _fun106577_ip = 968; continue _fun106577 }
 964:
            tango = new Array(0);
 968:
            entity['threads'] = tango;
            report = _closure1_slot20;
            tango = mike.threads;
            tango = report.bind(oscar)(tango);
            entity['threadMessages'] = tango;
            report = mike.channels;
            tango = report.map;
            zulu = function(argFoo) {
                tango = argFoo;
                entity = _closure2_slot0;
                mike = entity.id;
                tango['guild_id'] = mike;
                zulu = _closure1_slot6;
                mike = entity.id;
                entity = undefined;
                entity = zulu.bind(entity)(tango, mike);
                return entity;
            };
            zulu = tango.bind(report)(zulu);
            entity['channels'] = zulu;
            zulu = mike.presences;
            entity['presences'] = zulu;
            zulu = mike.activity_instances;
            entity['activity_instances'] = zulu;
            zulu = mike.voice_states;
            entity['voice_states'] = zulu;
            zulu = mike.version;
            entity['version'] = zulu;
            mike = mike.has_threads_subscription;
            entity['hasThreadsSubscription'] = mike;
            return entity;
        }
    };
    var _closure1_slot19 = tango;
    entity = function(argFoo) { // Original name: collectThreadMessages
        _fun106582: for(var _fun106582_ip = 0; ; ) switch(_fun106582_ip) {
 0:
            zulu = argFoo;
            entity = new Array(0);
            oscar = null;
            if(!(oscar != zulu)) { _fun106582_ip = 85; continue _fun106582 }
 13:
            mike = _closure1_slot13;
            report = undefined;
            tango = mike.bind(report)(zulu);
            zulu = tango.bind(report)();
            mike = zulu.done;
            if(mike) { _fun106582_ip = 85; continue _fun106582 }
 39:
            mike = zulu.value;
            golf = mike.most_recent_message;
            if(!(oscar != golf)) { _fun106582_ip = 70; continue _fun106582 }
 54:
            golf = entity.push;
            mike = mike.most_recent_message;
            mike = golf.bind(entity)(mike);
 70:
            golf = tango.bind(report)();
            mike = golf.done;
            zulu = golf;
            if(!mike) { _fun106582_ip = 39; continue _fun106582 }
 85:
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    mike = function(argFoo, argBar, argBaz) { // Original name: filterDeletes
        _fun106583: for(var _fun106583_ip = 0; ; ) switch(_fun106583_ip) {
 0:
            tango = argFoo;
            zulu = argBar;
            golf = argBaz;
            mike = null;
            if(!(mike == zulu)) { _fun106583_ip = 21; continue _fun106583 }
 17:
            zulu = new Array(0);
 21:
            report = global;
            oscar = report.Set;
            if(!(mike == golf)) { _fun106583_ip = 37; continue _fun106583 }
 33:
            golf = new Array(0);
 37:
            report = golf.concat;
            options = zulu.map;
            mike = function(argFoo) {
                entity = argFoo;
                entity = entity.id;
                return entity;
            };
            mike = options.bind(zulu)(mike);
            verify = report.bind(golf)(mike);
            report = oscar.prototype;
            report = Object.create(report, {constructor: {value: oscar}});
            offset = report;
            mike = new offset[oscar](verify, options);
            mike = mike instanceof Object ? mike : report;
            var _closure2_slot0 = mike;
            mike = tango.filter;
            entity = function(argFoo) {
                zulu = _closure2_slot0;
                mike = zulu.has;
                entity = argFoo;
                entity = entity.id;
                entity = mike.bind(zulu)(entity);
                entity = !entity;
                return entity;
            };
            mike = mike.bind(tango)(entity);
            entity = mike.concat;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot21 = mike;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zulu, entity, oscar);
    entity = 0;
    oscar = options[entity];
    entity = undefined;
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot4 = oscar;
    oscar = 1;
    oscar = options[oscar];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot5 = oscar;
    oscar = 2;
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    oscar = oscar.createChannelRecordFromServer;
    var _closure1_slot6 = oscar;
    oscar = 3;
    oscar = options[oscar];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot7 = oscar;
    oscar = 4;
    oscar = options[oscar];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot8 = oscar;
    oscar = 5;
    oscar = options[oscar];
    offset = verify.bind(entity)(oscar);
    oscar = offset.prototype;
    verify = Object.create(oscar, {constructor: {value: offset}});
    backup = 'ReadyPayloadUtils';
    kilo = verify;
    oscar = new kilo[offset](backup, foxtrot);
    oscar = oscar instanceof Object ? oscar : verify;
    var _closure1_slot9 = oscar;
    oscar = {};
    var _closure1_slot10 = oscar;
    oscar = null;
    var _closure1_slot11 = oscar;
    oscar = {};
    var _closure1_slot12 = oscar;
    oscar = 15;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'utils/ReadyPayloadUtils.tsx';
    oscar = golf.bind(options)(oscar);
    oscar = function(argFoo, argBar) { // Original name: hydrateReadySupplementalPayload
        _fun106586: for(var _fun106586_ip = 0; ; ) switch(_fun106586_ip) {
 0:
            tango = argFoo;
            offset = tango.guilds;
            entity = tango.merged_members;
            var _closure2_slot0 = entity;
            options = tango.merged_presences;
            var _closure2_slot1 = options;
            zulu = {'guilds': 0, 'merged_members': 0, 'merged_presences': 0};
            entity = null;
            backup = zulu;
            foxtrot = null;
            mike = silentSetPrototypeOf(backup, foxtrot);
            backup = {};
            foxtrot = tango;
            romeo = zulu;
            mike = copyDataProperties(backup, foxtrot, romeo);
            golf = _closure1_slot16;
            tango = _closure1_slot12;
            yankee = entity == options;
            verify = undefined;
            zulu = undefined;
            if(yankee) { _fun106586_ip = 96; continue _fun106586 }
 90:
            zulu = options.friends;
 96:
            tango = golf.bind(verify)(tango, zulu);
            golf = entity == offset;
            zulu = undefined;
            if(golf) { _fun106586_ip = 128; continue _fun106586 }
 111:
            options = offset.map;
            golf = function(argFoo, argBar) {
                _fun106587: for(var _fun106587_ip = 0; ; ) switch(_fun106587_ip) {
 0:
                    mike = argFoo;
                    options = argBar;
                    oscar = _closure1_slot16;
                    tango = _closure1_slot12;
                    zulu = _closure2_slot1;
                    verify = null;
                    offset = verify == zulu;
                    report = undefined;
                    zulu = undefined;
                    if(offset) { _fun106587_ip = 51; continue _fun106587 }
 37:
                    offset = _closure2_slot1;
                    offset = offset.guilds;
                    zulu = offset[options];
 51:
                    tango = oscar.bind(report)(tango, zulu);
                    oscar = _closure1_slot16;
                    zulu = _closure1_slot12;
                    entity = _closure2_slot0;
                    verify = verify == entity;
                    entity = undefined;
                    if(verify) { _fun106587_ip = 86; continue _fun106587 }
 78:
                    golf = _closure2_slot0;
                    entity = golf[options];
 86:
                    zulu = oscar.bind(report)(zulu, entity);
                    entity = {};
                    romeo = entity;
                    yankee = mike;
                    oscar = copyDataProperties(romeo, yankee);
                    mike = mike.voice_states;
                    report = report === mike;
                    mike = 'unavailable';
                    entity[mike] = report;
                    mike = 'presences';
                    entity[mike] = tango;
                    mike = 'members';
                    entity[mike] = zulu;
                    return entity;
                }
            };
            zulu = options.bind(offset)(golf);
 128:
            if(!(entity == zulu)) { _fun106586_ip = 136; continue _fun106586 }
 132:
            zulu = new Array(0);
 136:
            options = _closure1_slot15;
            golf = argBar;
            oscar = function(argFoo) {
                mike = argFoo;
                entity = {};
                zulu = mike.id;
                entity['id'] = zulu;
                zulu = mike.members;
                entity['members'] = zulu;
                zulu = mike.presences;
                entity['presences'] = zulu;
                zulu = mike.activity_instances;
                entity['activity_instances'] = zulu;
                mike = mike.voice_states;
                entity['voice_states'] = mike;
                mike = false;
                entity['unavailable'] = mike;
                return entity;
            };
            oscar = options.bind(verify)(golf, offset, oscar);
            if(!(entity != oscar)) { _fun106586_ip = 171; continue _fun106586 }
 161:
            entity = zulu.push;
            entity = entity.bind(zulu)(oscar);
 171:
            entity = {};
            _closure1_slot12 = entity;
            entity = {};
            backup = entity;
            foxtrot = mike;
            mike = copyDataProperties(backup, foxtrot);
            mike = 'presences';
            entity[mike] = tango;
            mike = 'guilds';
            entity[mike] = zulu;
            return entity;
        }
    };
    zulu['hydrateReadySupplementalPayload'] = oscar;
    oscar = function() { // Original name: preloadReadyPayloadData
        _fun106589: for(var _fun106589_ip = 0; ; ) switch(_fun106589_ip) {
 0:
            tango = _closure1_slot1;
            mike = _closure1_slot3;
            zulu = 6;
            zulu = mike[zulu];
            golf = undefined;
            tango = tango.bind(golf)(zulu);
            zulu = tango.database;
            zulu = zulu.bind(tango)();
            tango = _closure1_slot0;
            report = 7;
            mike = mike[report];
            tango = tango.bind(golf)(mike);
            mike = tango.isCacheEnabled;
            mike = mike.bind(tango)();
            if(mike) { _fun106589_ip = 87; continue _fun106589 }
 64:
            mike = global;
            oscar = mike.Promise;
            tango = oscar.resolve;
            mike = {};
            oscar = tango.bind(oscar)(mike);
            _fun106589_ip = 117; continue _fun106589;
 87:
            tango = _closure1_slot1;
            options = _closure1_slot3;
            mike = 8;
            mike = options[mike];
            tango = tango.bind(golf)(mike);
            mike = tango.getCommittedVersions;
            oscar = mike.bind(tango)();
 117:
            tango = _closure1_slot0;
            mike = _closure1_slot3;
            mike = mike[report];
            tango = tango.bind(golf)(mike);
            mike = tango.isCacheEnabled;
            mike = mike.bind(tango)();
            if(mike) { _fun106589_ip = 194; continue _fun106589 }
 147:
            mike = global;
            report = mike.Promise;
            tango = report.resolve;
            mike = mike.Set;
            options = mike.prototype;
            options = Object.create(options, {constructor: {value: mike}});
            offset = options;
            mike = new offset[mike](verify);
            mike = mike instanceof Object ? mike : options;
            report = tango.bind(report)(mike);
            _fun106589_ip = 224; continue _fun106589;
 194:
            tango = _closure1_slot1;
            options = _closure1_slot3;
            mike = 9;
            mike = options[mike];
            tango = tango.bind(golf)(mike);
            mike = tango.getGuildIds;
            report = mike.bind(tango)();
 224:
            mike = null;
            if(!(mike == zulu)) { _fun106589_ip = 253; continue _fun106589 }
 230:
            mike = global;
            options = mike.Promise;
            tango = options.resolve;
            mike = false;
            tango = tango.bind(options)(mike);
            _fun106589_ip = 284; continue _fun106589;
 253:
            mike = _closure1_slot1;
            options = _closure1_slot3;
            entity = 10;
            entity = options[entity];
            mike = mike.bind(golf)(entity);
            entity = mike.okAsync;
            tango = entity.bind(mike)(zulu);
 284:
            entity = global;
            zulu = entity.Promise;
            mike = zulu.all;
            entity = new Array(3);
            entity[0] = oscar;
            entity[1] = report;
            entity[2] = tango;
            zulu = mike.bind(zulu)(entity);
            mike = zulu.then;
            entity = function(argFoo) {
                _fun106590: for(var _fun106590_ip = 0; ; ) switch(_fun106590_ip) {
 0:
                    oscar = argFoo;
                    entity = oscar[Symbol.iterator];
                    oscar = entity().next;
                    mike = oscar().value;
                    zulu = entity;
                    options = undefined;
                    report = zulu === options;
                    tango = undefined;
                    if(report) { _fun106590_ip = 27; continue _fun106590 }
 24:
                    tango = mike;
 27:
                    zulu = undefined;
                    if(report) { _fun106590_ip = 57; continue _fun106590 }
 32:
                    golf = oscar().value;
                    mike = entity;
                    mike = mike === options;
                    zulu = undefined;
                    report = mike;
                    if(mike) { _fun106590_ip = 57; continue _fun106590 }
 51:
                    zulu = golf;
                    report = mike;
 57:
                    mike = undefined;
                    if(report) { _fun106590_ip = 87; continue _fun106590 }
 62:
                    golf = oscar().value;
                    oscar = entity;
                    oscar = oscar === options;
                    mike = undefined;
                    report = oscar;
                    if(oscar) { _fun106590_ip = 87; continue _fun106590 }
 81:
                    mike = golf;
                    report = oscar;
 87:
                    if(report) { _fun106590_ip = 93; continue _fun106590 }
 90:
                    entity.return();
 93:
                    entity = {};
                    entity['guildVersions'] = tango;
                    entity['guildChannels'] = zulu;
                    entity['databaseOk'] = mike;
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    zulu['preloadReadyPayloadData'] = oscar;
    oscar = function(argFoo, argBar, argBaz) { // Original name: hydrateReadyPayloadPrioritized
        _fun106591: for(var _fun106591_ip = 0; ; ) switch(_fun106591_ip) {
 0:
            oscar = argFoo;
            update = argBaz;
            golf = oscar.users;
            verify = oscar.relationships;
            zulu = oscar.private_channels;
            mike = oscar.merged_members;
            var _closure2_slot0 = mike;
            yankee = oscar.guilds;
            report = {'users': 0, 'relationships': 0, 'private_channels': 0, 'merged_members': 0, 'guilds': 0};
            mike = null;
            status = report;
            target = null;
            tango = silentSetPrototypeOf(status, target);
            echo = 0;
            status = {};
            target = oscar;
            papa = report;
            tango = copyDataProperties(status, target, papa);
            oscar = _closure1_slot1;
            offset = _closure1_slot3;
            report = 6;
            report = offset[report];
            offset = undefined;
            oscar = oscar.bind(offset)(report);
            report = oscar.database;
            report = report.bind(oscar)();
            report = mike != report;
            if(!report) { _fun106591_ip = 135; continue _fun106591 }
 123:
            romeo = update.databaseOk;
            oscar = false;
            report = oscar === romeo;
 135:
            if(!report) { _fun106591_ip = 175; continue _fun106591 }
 138:
            oscar = _closure1_slot1;
            romeo = _closure1_slot3;
            report = 14;
            report = romeo[report];
            romeo = oscar.bind(offset)(report);
            oscar = romeo.replaceDisableAllDatabases;
            report = 'ReadyPayloadUtils: database was not ok';
            report = oscar.bind(romeo)(report);
 175:
            report = {};
            _closure1_slot10 = report;
            report = global;
            romeo = report.Object;
            oscar = romeo.values;
            foxtrot = _closure1_slot7;
            report = foxtrot.getGuilds;
            report = report.bind(foxtrot)();
            result = oscar.bind(romeo)(report);
            oscar = _closure1_slot4;
            report = oscar.getGuilds;
            output = report.bind(oscar)();
            oscar = _closure1_slot5;
            report = oscar.getRawStickersByGuild;
            sizing = report.bind(oscar)();
            oscar = _closure1_slot8;
            report = oscar.getReadStatesByChannel;
            kilo = report.bind(oscar)();
            report = result.length;
            report = echo < report;
            backup = 13;
            echo = 0;
            foxtrot = undefined;
            romeo = undefined;
            oscar = undefined;
            if(!report) { _fun106591_ip = 505; continue _fun106591 }
 281:
            report = result[echo];
            control = report.id;
            source = update.guildVersions;
            source = control in source;
            if(!source) { _fun106591_ip = 324; continue _fun106591 }
 303:
            sequence = update.guildChannels;
            vacuum = sequence.has;
            control = report.id;
            source = vacuum.bind(sequence)(control);
 324:
            if(!source) { _fun106591_ip = 490; continue _fun106591 }
 330:
            config = _closure1_slot10;
            sequence = report.id;
            vacuum = {};
            control = _closure1_slot2;
            source = _closure1_slot3;
            source = source[backup];
            control = control.bind(offset)(source);
            source = control.toServer;
            source = source.bind(control)(report);
            vacuum['properties'] = source;
            record = _closure1_slot7;
            control = record.getRoles;
            source = report.id;
            source = control.bind(record)(source);
            vacuum['roles'] = source;
            source = report.id;
            source = output[source];
            record = mike == source;
            control = undefined;
            if(record) { _fun106591_ip = 423; continue _fun106591 }
 417:
            control = source.rawEmojis;
 423:
            context = mike != control;
            record = null;
            if(!context) { _fun106591_ip = 435; continue _fun106591 }
 432:
            record = control;
 435:
            vacuum['emojis'] = record;
            record = sizing.get;
            report = report.id;
            report = record.bind(sizing)(report);
            context = mike != report;
            record = null;
            if(!context) { _fun106591_ip = 467; continue _fun106591 }
 464:
            record = report;
 467:
            vacuum['stickers'] = record;
            vacuum['readStates'] = kilo;
            config[sequence] = vacuum;
            foxtrot = control;
            romeo = source;
            oscar = report;
 490:
            echo = echo + 1;
            report = result.length;
            if(echo < report) { _fun106591_ip = 281; continue _fun106591 }
 505:
            oscar = _closure1_slot16;
            romeo = _closure1_slot1;
            foxtrot = _closure1_slot3;
            report = 11;
            report = foxtrot[report];
            foxtrot = romeo.bind(offset)(report);
            romeo = foxtrot.keyBy;
            report = function(argFoo) {
                entity = argFoo;
                entity = entity.id;
                return entity;
            };
            report = romeo.bind(foxtrot)(golf, report);
            _closure1_slot12 = report;
            oscar = oscar.bind(offset)(report, verify);
            if(!(mike != zulu)) { _fun106591_ip = 579; continue _fun106591 }
 562:
            verify = zulu.forEach;
            report = function(argFoo) {
                _fun106593: for(var _fun106593_ip = 0; ; ) switch(_fun106593_ip) {
 0:
                    entity = argFoo;
                    tango = entity.recipient_ids;
                    mike = null;
                    if(!(mike != tango)) { _fun106593_ip = 40; continue _fun106593 }
 15:
                    zulu = tango.map;
                    mike = function(argFoo) {
                        mike = argFoo;
                        tango = _closure1_slot1;
                        report = _closure1_slot3;
                        zulu = 12;
                        zulu = report[zulu];
                        oscar = undefined;
                        report = tango.bind(oscar)(zulu);
                        zulu = _closure1_slot12;
                        tango = zulu[mike];
                        zulu = null;
                        tango = zulu != tango;
                        zulu = 'Missing user in compressed ready payload';
                        zulu = report.bind(oscar)(tango, zulu);
                        entity = _closure1_slot12;
                        entity = entity[mike];
                        return entity;
                    };
                    mike = zulu.bind(tango)(mike);
                    entity['recipients'] = mike;
 40:
                    entity = delete entity.recipient_ids;
                    entity = undefined;
                    return entity;
                }
            };
            report = verify.bind(zulu)(report);
 579:
            verify = mike == yankee;
            report = undefined;
            if(verify) { _fun106591_ip = 605; continue _fun106591 }
 588:
            romeo = yankee.map;
            verify = function(argFoo, argBar) {
                _fun106595: for(var _fun106595_ip = 0; ; ) switch(_fun106595_ip) {
 0:
                    tango = argFoo;
                    zulu = tango.unavailable;
                    mike = true;
                    entity = tango;
                    if(!(mike !== zulu)) { _fun106595_ip = 81; continue _fun106595 }
 18:
                    golf = _closure1_slot16;
                    oscar = _closure1_slot12;
                    report = _closure2_slot0;
                    zulu = null;
                    verify = zulu == report;
                    zulu = undefined;
                    report = undefined;
                    if(verify) { _fun106595_ip = 60; continue _fun106595 }
 49:
                    verify = _closure2_slot0;
                    options = argBar;
                    report = verify[options];
 60:
                    report = golf.bind(zulu)(oscar, report);
                    tango['members'] = report;
                    mike = _closure1_slot18;
                    entity = mike.bind(zulu)(tango);
 81:
                    return entity;
                }
            };
            report = romeo.bind(yankee)(verify);
 605:
            if(!(mike == report)) { _fun106591_ip = 613; continue _fun106591 }
 609:
            report = new Array(0);
 613:
            verify = _closure1_slot15;
            options = argBar;
            entity = function(argFoo) {
                zulu = _closure1_slot18;
                mike = undefined;
                entity = argFoo;
                entity = zulu.bind(mike)(entity);
                return entity;
            };
            options = verify.bind(offset)(options, yankee, entity);
            if(!(mike != options)) { _fun106591_ip = 648; continue _fun106591 }
 638:
            entity = report.push;
            entity = entity.bind(report)(options);
 648:
            entity = {};
            status = entity;
            target = tango;
            tango = copyDataProperties(status, target);
            tango = 'users';
            entity[tango] = golf;
            golf = new Array(0);
            tango = 'presences';
            entity[tango] = golf;
            tango = 'relationships';
            entity[tango] = oscar;
            tango = 'guilds';
            entity[tango] = report;
            if(!(mike == zulu)) { _fun106591_ip = 708; continue _fun106591 }
 704:
            zulu = new Array(0);
 708:
            mike = 'private_channels';
            entity[mike] = zulu;
            return entity;
        }
    };
    zulu['hydrateReadyPayloadPrioritized'] = oscar;
    report = function(argFoo, argBar) { // Original name: hydrateInitialGuild
        _fun106597: for(var _fun106597_ip = 0; ; ) switch(_fun106597_ip) {
 0:
            tango = argFoo;
            report = _closure1_slot7;
            mike = report.getGuild;
            entity = tango.id;
            options = mike.bind(report)(entity);
            report = _closure1_slot19;
            golf = null;
            oscar = golf == options;
            mike = undefined;
            entity = undefined;
            if(oscar) { _fun106597_ip = 219; continue _fun106597 }
 45:
            oscar = {};
            offset = _closure1_slot2;
            yankee = _closure1_slot3;
            verify = 13;
            verify = yankee[verify];
            offset = offset.bind(mike)(verify);
            verify = offset.toServer;
            verify = verify.bind(offset)(options);
            oscar['properties'] = verify;
            yankee = _closure1_slot7;
            offset = yankee.getRoles;
            verify = options.id;
            verify = offset.bind(yankee)(verify);
            oscar['roles'] = verify;
            offset = _closure1_slot4;
            verify = offset.getGuilds;
            offset = verify.bind(offset)();
            verify = options.id;
            verify = offset[verify];
            yankee = golf == verify;
            offset = undefined;
            if(yankee) { _fun106597_ip = 146; continue _fun106597 }
 140:
            offset = verify.rawEmojis;
 146:
            yankee = golf != offset;
            verify = null;
            if(!yankee) { _fun106597_ip = 158; continue _fun106597 }
 155:
            verify = offset;
 158:
            oscar['emojis'] = verify;
            offset = _closure1_slot5;
            verify = offset.getRawStickersByGuild;
            offset = verify.bind(offset)();
            verify = offset.get;
            options = options.id;
            options = verify.bind(offset)(options);
            verify = golf != options;
            golf = null;
            if(!verify) { _fun106597_ip = 204; continue _fun106597 }
 201:
            golf = options;
 204:
            oscar['stickers'] = golf;
            golf = {};
            oscar['readStates'] = golf;
            entity = oscar;
 219:
            entity = report.bind(mike)(tango, entity);
            mike = {};
            mike['guild'] = tango;
            tango = argBar;
            mike['identifyTime'] = tango;
            _closure1_slot11 = mike;
            return entity;
        }
    };
    zulu['hydrateInitialGuild'] = report;
    zulu['hydratePreviouslyUnavailableGuild'] = tango;
    zulu['filterDeletes'] = mike;
    return entity;
})();