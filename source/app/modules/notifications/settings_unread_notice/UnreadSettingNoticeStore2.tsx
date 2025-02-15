// app/modules/notifications/settings_unread_notice/UnreadSettingNoticeStore2.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun89528: for(var _fun89528_ip = 0; ; ) switch(_fun89528_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot26;
            entity = entity.bind(zulu)();
            if(entity) { _fun89528_ip = 51; continue _fun89528 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun89528_ip = 92; continue _fun89528;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun89528_ip = 71; continue _fun89528 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot6;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot25 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun89529: for(var _fun89529_ip = 0; ; ) switch(_fun89529_ip) {
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
            _fun89529_ip = 76; continue _fun89529;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot26 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot26 = entity;
    entity = function() { // Original name: trackChannel
        _fun89532: for(var _fun89532_ip = 0; ; ) switch(_fun89532_ip) {
 0:
            mike = _closure1_slot21;
            entity = null;
            if(!(entity != mike)) { _fun89532_ip = 183; continue _fun89532 }
 16:
            tango = _closure1_slot30;
            mike = _closure1_slot21;
            entity = undefined;
            mike = tango.bind(entity)(mike);
            if(mike) { _fun89532_ip = 38; continue _fun89532 }
 34:
            mike = false;
            return mike;
 38:
            tango = _closure1_slot29;
            mike = _closure1_slot21;
            report = tango.bind(entity)(mike);
            oscar = report.lastActionTime;
            mike = global;
            golf = mike.Date;
            tango = golf.now;
            golf = tango.bind(golf)();
            options = _closure1_slot1;
            verify = _closure1_slot2;
            tango = 13;
            tango = verify[tango];
            tango = options.bind(entity)(tango);
            tango = tango.Millis;
            tango = tango.DAY;
            tango = golf - tango;
            if(!(oscar > tango)) { _fun89532_ip = 128; continue _fun89532 }
 114:
            oscar = report.viewDuration;
            tango = _closure1_slot17;
            if(!(!(oscar > tango))) { _fun89532_ip = 179; continue _fun89532 }
 128:
            tango = mike.Date;
            mike = tango.now;
            mike = mike.bind(tango)();
            report['lastActionTime'] = mike;
            oscar = report.viewDuration;
            tango = _closure1_slot22;
            tango = mike - tango;
            tango = oscar + tango;
            report['viewDuration'] = tango;
            _closure1_slot22 = mike;
            return entity;
 179:
            entity = false;
            return entity;
 183:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot27 = entity;
    entity = function() { // Original name: startInterval
        _fun89533: for(var _fun89533_ip = 0; ; ) switch(_fun89533_ip) {
 0:
            zulu = _closure1_slot23;
            entity = 0;
            if(!(entity !== zulu)) { _fun89533_ip = 36; continue _fun89533 }
 13:
            zulu = global;
            report = zulu.clearInterval;
            tango = _closure1_slot23;
            zulu = undefined;
            zulu = report.bind(zulu)(tango);
            _closure1_slot23 = entity;
 36:
            entity = _closure1_slot12;
            entity = entity.useNewNotifications;
            if(!entity) { _fun89533_ip = 117; continue _fun89533 }
 49:
            entity = global;
            report = entity.setInterval;
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            entity = 13;
            entity = tango[entity];
            tango = undefined;
            entity = zulu.bind(tango)(entity);
            entity = entity.Millis;
            zulu = entity.SECOND;
            entity = 15;
            zulu = entity * zulu;
            entity = function() {
                _fun89534: for(var _fun89534_ip = 0; ; ) switch(_fun89534_ip) {
 0:
                    zulu = _closure1_slot27;
                    entity = undefined;
                    zulu = zulu.bind(entity)();
                    if(!zulu) { _fun89534_ip = 30; continue _fun89534 }
 16:
                    zulu = _closure1_slot24;
                    mike = zulu.emitChange;
                    mike = mike.bind(zulu)();
 30:
                    return entity;
                }
            };
            entity = report.bind(tango)(entity, zulu);
            _closure1_slot23 = entity;
 117:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot28 = entity;
    entity = function(argFoo) { // Original name: getOrCreateChannelState
        _fun89535: for(var _fun89535_ip = 0; ; ) switch(_fun89535_ip) {
 0:
            mike = argFoo;
            zulu = _closure1_slot19;
            zulu = zulu.channels;
            zulu = mike in zulu;
            if(zulu) { _fun89535_ip = 47; continue _fun89535 }
 23:
            zulu = _closure1_slot19;
            tango = zulu.channels;
            zulu = {'lastActionTime': 0, 'viewDuration': 0, 'numSends': 0};
            tango[mike] = zulu;
 47:
            entity = _closure1_slot19;
            entity = entity.channels;
            entity = entity[mike];
            return entity;
        }
    };
    var _closure1_slot29 = entity;
    entity = function(argFoo) { // Original name: shouldTrackChannel
        _fun89536: for(var _fun89536_ip = 0; ; ) switch(_fun89536_ip) {
 0:
            tango = argFoo;
            entity = _closure1_slot12;
            entity = entity.useNewNotifications;
            if(entity) { _fun89536_ip = 23; continue _fun89536 }
 19:
            entity = false;
            return entity;
 23:
            zulu = _closure1_slot20;
            entity = zulu.has;
            entity = entity.bind(zulu)(tango);
            if(entity) { _fun89536_ip = 250; continue _fun89536 }
 43:
            zulu = _closure1_slot9;
            entity = zulu.getBasicChannel;
            entity = entity.bind(zulu)(tango);
            tango = null;
            if(!(tango != entity)) { _fun89536_ip = 246; continue _fun89536 }
 67:
            zulu = entity.guild_id;
            if(!(tango != zulu)) { _fun89536_ip = 246; continue _fun89536 }
 79:
            oscar = _closure1_slot12;
            report = oscar.isGuildOrCategoryOrChannelMuted;
            tango = entity.guild_id;
            zulu = entity.id;
            zulu = report.bind(oscar)(tango, zulu);
            if(zulu) { _fun89536_ip = 242; continue _fun89536 }
 111:
            report = _closure1_slot31;
            tango = entity.guild_id;
            zulu = entity.id;
            oscar = undefined;
            zulu = report.bind(oscar)(tango, zulu);
            if(zulu) { _fun89536_ip = 238; continue _fun89536 }
 136:
            report = _closure1_slot31;
            tango = entity.guild_id;
            zulu = entity.parent_id;
            zulu = report.bind(oscar)(tango, zulu);
            if(zulu) { _fun89536_ip = 234; continue _fun89536 }
 160:
            tango = _closure1_slot12;
            zulu = tango.resolveUnreadSetting;
            zulu = zulu.bind(tango)(entity);
            oscar = _closure1_slot12;
            report = oscar.getChannelUnreadSetting;
            tango = entity.guild_id;
            entity = entity.id;
            tango = report.bind(oscar)(tango, entity);
            entity = _closure1_slot14;
            entity = entity.UNSET;
            entity = tango === entity;
            if(!entity) { _fun89536_ip = 232; continue _fun89536 }
 218:
            mike = _closure1_slot14;
            mike = mike.ALL_MESSAGES;
            entity = zulu !== mike;
 232:
            return entity;
 234:
            entity = false;
            return entity;
 238:
            entity = false;
            return entity;
 242:
            entity = false;
            return entity;
 246:
            entity = false;
            return entity;
 250:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot30 = entity;
    entity = function(argFoo, argBar) { // Original name: hasAnyOverride
        _fun89537: for(var _fun89537_ip = 0; ; ) switch(_fun89537_ip) {
 0:
            mike = argBar;
            oscar = null;
            if(!(oscar != mike)) { _fun89537_ip = 166; continue _fun89537 }
 12:
            report = _closure1_slot12;
            zulu = report.getChannelOverrides;
            entity = argFoo;
            entity = zulu.bind(report)(entity);
            report = entity[mike];
            entity = oscar != report;
            if(!entity) { _fun89537_ip = 164; continue _fun89537 }
 44:
            mike = report.message_notifications;
            mike = oscar != mike;
            if(!mike) { _fun89537_ip = 77; continue _fun89537 }
 57:
            golf = report.message_notifications;
            zulu = _closure1_slot13;
            zulu = zulu.NULL;
            mike = golf !== zulu;
 77:
            if(mike) { _fun89537_ip = 161; continue _fun89537 }
 80:
            zulu = report.flags;
            zulu = oscar == zulu;
            if(zulu) { _fun89537_ip = 158; continue _fun89537 }
 92:
            options = _closure1_slot0;
            golf = _closure1_slot2;
            oscar = 15;
            golf = golf[oscar];
            oscar = undefined;
            golf = options.bind(oscar)(golf);
            oscar = golf.hasAnyFlag;
            report = report.flags;
            options = _closure1_slot15;
            options = options.UNREADS_ALL_MESSAGES;
            tango = _closure1_slot15;
            tango = tango.UNREADS_ONLY_MENTIONS;
            tango = options | tango;
            tango = oscar.bind(golf)(report, tango);
            zulu = !tango;
 158:
            mike = !zulu;
 161:
            entity = mike;
 164:
            return entity;
 166:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot31 = entity;
    options = global;
    offset = options.Object;
    verify = offset.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, mike);
    mike = 0;
    verify = oscar[mike];
    entity = undefined;
    verify = golf.bind(entity)(verify);
    var _closure1_slot3 = verify;
    foxtrot = 1;
    verify = oscar[foxtrot];
    verify = golf.bind(entity)(verify);
    var _closure1_slot4 = verify;
    sizing = 2;
    verify = oscar[sizing];
    verify = golf.bind(entity)(verify);
    var _closure1_slot5 = verify;
    verify = 3;
    verify = oscar[verify];
    verify = golf.bind(entity)(verify);
    var _closure1_slot6 = verify;
    verify = 4;
    verify = oscar[verify];
    verify = golf.bind(entity)(verify);
    var _closure1_slot7 = verify;
    yankee = 5;
    verify = oscar[yankee];
    verify = golf.bind(entity)(verify);
    var _closure1_slot8 = verify;
    verify = 6;
    verify = oscar[verify];
    verify = golf.bind(entity)(verify);
    var _closure1_slot9 = verify;
    verify = 7;
    verify = oscar[verify];
    verify = golf.bind(entity)(verify);
    var _closure1_slot10 = verify;
    verify = 8;
    verify = oscar[verify];
    verify = golf.bind(entity)(verify);
    var _closure1_slot11 = verify;
    verify = 9;
    verify = oscar[verify];
    verify = golf.bind(entity)(verify);
    var _closure1_slot12 = verify;
    backup = 10;
    verify = oscar[backup];
    verify = report.bind(entity)(verify);
    verify = verify.UserNotificationSettings;
    var _closure1_slot13 = verify;
    verify = 11;
    verify = oscar[verify];
    verify = report.bind(entity)(verify);
    verify = verify.UnreadSetting;
    var _closure1_slot14 = verify;
    verify = 12;
    verify = oscar[verify];
    verify = report.bind(entity)(verify);
    verify = verify.ChannelNotificationSettingsFlags;
    var _closure1_slot15 = verify;
    offset = {};
    verify = 13;
    romeo = oscar[verify];
    romeo = golf.bind(entity)(romeo);
    romeo = romeo.Millis;
    romeo = romeo.HOUR;
    romeo = foxtrot * romeo;
    offset['timeSinceJoin'] = romeo;
    offset['sends'] = foxtrot;
    romeo = oscar[verify];
    romeo = golf.bind(entity)(romeo);
    romeo = romeo.Millis;
    romeo = romeo.MINUTE;
    romeo = foxtrot * romeo;
    offset['viewTime'] = romeo;
    romeo = new Array(4);
    romeo[0] = offset;
    offset = {};
    kilo = oscar[verify];
    kilo = golf.bind(entity)(kilo);
    kilo = kilo.Millis;
    kilo = kilo.DAY;
    kilo = foxtrot * kilo;
    offset['timeSinceJoin'] = kilo;
    offset['sends'] = sizing;
    kilo = oscar[verify];
    kilo = golf.bind(entity)(kilo);
    kilo = kilo.Millis;
    kilo = kilo.MINUTE;
    kilo = sizing * kilo;
    offset['viewTime'] = kilo;
    romeo[1] = offset;
    offset = {};
    kilo = oscar[verify];
    kilo = golf.bind(entity)(kilo);
    kilo = kilo.Millis;
    kilo = kilo.WEEK;
    kilo = foxtrot * kilo;
    offset['timeSinceJoin'] = kilo;
    offset['sends'] = yankee;
    kilo = oscar[verify];
    kilo = golf.bind(entity)(kilo);
    kilo = kilo.Millis;
    kilo = kilo.MINUTE;
    kilo = yankee * kilo;
    offset['viewTime'] = kilo;
    romeo[2] = offset;
    offset = {};
    kilo = oscar[verify];
    kilo = golf.bind(entity)(kilo);
    kilo = kilo.Millis;
    kilo = kilo.DAYS_30;
    kilo = foxtrot * kilo;
    offset['timeSinceJoin'] = kilo;
    offset['sends'] = backup;
    backup = oscar[verify];
    backup = golf.bind(entity)(backup);
    backup = backup.Millis;
    kilo = backup.MINUTE;
    backup = 30;
    backup = backup * kilo;
    offset['viewTime'] = backup;
    romeo[3] = offset;
    var _closure1_slot16 = romeo;
    offset = romeo.length;
    offset = offset - foxtrot;
    offset = romeo[offset];
    offset = offset.viewTime;
    offset = yankee * offset;
    var _closure1_slot17 = offset;
    verify = oscar[verify];
    verify = golf.bind(entity)(verify);
    verify = verify.Millis;
    verify = verify.WEEK;
    var _closure1_slot18 = verify;
    verify = {};
    offset = {};
    verify['channels'] = offset;
    var _closure1_slot19 = verify;
    options = options.Set;
    verify = options.prototype;
    verify = Object.create(verify, {constructor: {value: options}});
    update = verify;
    options = new update[options](echo);
    options = options instanceof Object ? options : verify;
    var _closure1_slot20 = options;
    options = null;
    var _closure1_slot21 = options;
    var _closure1_slot22 = mike;
    var _closure1_slot23 = mike;
    mike = 17;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    options = mike.PersistedStore;
    mike = function(argFoo) {
        tango = function() { // Original name: UnreadSettingNoticeStore2Class
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot3;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot25;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot7;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot4;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun89540: for(var _fun89540_ip = 0; ; ) switch(_fun89540_ip) {
 0:
                entity = argFoo;
                report = this;
                mike = null;
                if(!(mike != entity)) { _fun89540_ip = 31; continue _fun89540 }
 12:
                mike = _closure1_slot19;
                entity = entity.channels;
                mike['channels'] = entity;
 31:
                tango = report.syncWith;
                mike = _closure1_slot12;
                zulu = new Array(1);
                zulu[0] = mike;
                mike = _closure1_slot28;
                mike = tango.bind(report)(zulu, mike);
                tango = report.waitFor;
                zulu = _closure1_slot12;
                mike = _closure1_slot11;
                entity = _closure1_slot9;
                entity = tango.bind(report)(zulu, mike, entity);
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(4);
        entity[0] = report;
        report = {};
        golf = 'getState';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot19;
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getLastActionTime';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun89542: for(var _fun89542_ip = 0; ; ) switch(_fun89542_ip) {
 0:
                entity = _closure1_slot19;
                mike = entity.channels;
                entity = argFoo;
                zulu = mike[entity];
                entity = null;
                tango = entity == zulu;
                mike = undefined;
                if(tango) { _fun89542_ip = 37; continue _fun89542 }
 31:
                mike = zulu.lastActionTime;
 37:
                zulu = entity != mike;
                entity = 0;
                if(!zulu) { _fun89542_ip = 49; continue _fun89542 }
 46:
                entity = mike;
 49:
                return entity;
            }
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'maybeAutoUpgradeChannel';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            _fun89543: for(var _fun89543_ip = 0; ; ) switch(_fun89543_ip) {
 0:
                options = argFoo;
                entity = _closure1_slot30;
                golf = undefined;
                entity = entity.bind(golf)(options);
                if(entity) { _fun89543_ip = 24; continue _fun89543 }
 20:
                entity = false;
                return entity;
 24:
                mike = _closure1_slot9;
                entity = mike.getBasicChannel;
                tango = entity.bind(mike)(options);
                report = null;
                entity = report != tango;
                if(!entity) { _fun89543_ip = 57; continue _fun89543 }
 48:
                mike = tango.guild_id;
                entity = report != mike;
 57:
                if(!entity) { _fun89543_ip = 470; continue _fun89543 }
 63:
                verify = _closure1_slot10;
                oscar = verify.getGuild;
                mike = tango.guild_id;
                mike = oscar.bind(verify)(mike);
                oscar = report == mike;
                offset = undefined;
                if(oscar) { _fun89543_ip = 97; continue _fun89543 }
 91:
                offset = mike.joinedAt;
 97:
                if(!(report == offset)) { _fun89543_ip = 129; continue _fun89543 }
 101:
                mike = global;
                mike = mike.Date;
                oscar = mike.prototype;
                oscar = Object.create(oscar, {constructor: {value: mike}});
                echo = oscar;
                mike = new echo[mike](result);
                offset = mike instanceof Object ? mike : oscar;
 129:
                oscar = _closure1_slot1;
                verify = _closure1_slot2;
                mike = 14;
                mike = verify[mike];
                verify = oscar.bind(golf)(mike);
                oscar = verify.age;
                mike = tango.id;
                yankee = oscar.bind(verify)(mike);
                mike = global;
                verify = mike.Date;
                oscar = verify.now;
                verify = oscar.bind(verify)();
                oscar = offset.getTime;
                oscar = oscar.bind(offset)();
                offset = verify - oscar;
                verify = mike.Math;
                oscar = verify.min;
                foxtrot = oscar.bind(verify)(yankee, offset);
                oscar = _closure1_slot19;
                verify = oscar.channels;
                oscar = tango.id;
                romeo = verify[oscar];
                oscar = report == romeo;
                report = false;
                if(oscar) { _fun89543_ip = 375; continue _fun89543 }
 244:
                oscar = romeo.lastActionTime;
                verify = mike.Date;
                mike = verify.now;
                verify = mike.bind(verify)();
                mike = _closure1_slot18;
                mike = verify - mike;
                mike = oscar < mike;
                report = false;
                if(mike) { _fun89543_ip = 375; continue _fun89543 }
 282:
                offset = _closure1_slot16;
                mike = offset.length;
                verify = 0;
                mike = verify < mike;
                report = false;
                if(!mike) { _fun89543_ip = 375; continue _fun89543 }
 302:
                mike = offset[verify];
                backup = mike.timeSinceJoin;
                if(!(foxtrot < backup)) { _fun89543_ip = 358; continue _fun89543 }
 316:
                kilo = romeo.numSends;
                backup = mike.sends;
                backup = kilo >= backup;
                report = true;
                if(backup) { _fun89543_ip = 375; continue _fun89543 }
 337:
                backup = romeo.viewDuration;
                mike = mike.viewTime;
                mike = backup >= mike;
                report = true;
                if(mike) { _fun89543_ip = 375; continue _fun89543 }
 358:
                verify = verify + 1;
                mike = offset.length;
                mike = verify < mike;
                report = false;
                if(mike) { _fun89543_ip = 302; continue _fun89543 }
 375:
                mike = !report;
                mike = !mike;
                if(!report) { _fun89543_ip = 467; continue _fun89543 }
 384:
                report = _closure1_slot19;
                report = report.channels;
                report = delete report[options];
                oscar = _closure1_slot20;
                report = oscar.add;
                report = report.bind(oscar)(options);
                oscar = _closure1_slot0;
                options = _closure1_slot2;
                report = 16;
                report = options[report];
                golf = oscar.bind(golf)(report);
                oscar = golf.updateChannelUnreadSetting;
                report = tango.guild_id;
                tango = tango.id;
                zulu = _closure1_slot14;
                zulu = zulu.ALL_MESSAGES;
                zulu = oscar.bind(golf)(report, tango, zulu);
                mike = true;
 467:
                entity = mike;
 470:
                return entity;
            }
        };
        report['value'] = oscar;
        entity[3] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    verify = mike.bind(entity)(options);
    mike = 'UnreadSettingNoticeStore2';
    verify['displayName'] = mike;
    verify['persistKey'] = mike;
    mike = 18;
    mike = oscar[mike];
    echo = golf.bind(entity)(mike);
    mike = {};
    golf = function() { // Original name: handleChannelSelect
        mike = _closure1_slot27;
        entity = undefined;
        entity = mike.bind(entity)();
        tango = _closure1_slot11;
        mike = tango.getChannelId;
        mike = mike.bind(tango)();
        _closure1_slot21 = mike;
        mike = global;
        tango = mike.Date;
        mike = tango.now;
        mike = mike.bind(tango)();
        _closure1_slot22 = mike;
        return entity;
    };
    mike['CHANNEL_SELECT'] = golf;
    golf = function() { // Original name: handleConnectionOpen
        tango = _closure1_slot11;
        entity = tango.getChannelId;
        entity = entity.bind(tango)();
        _closure1_slot21 = entity;
        tango = global;
        report = tango.Date;
        entity = report.now;
        entity = entity.bind(report)();
        _closure1_slot22 = entity;
        report = _closure1_slot28;
        entity = undefined;
        report = report.bind(entity)();
        report = tango.Date;
        tango = report.now;
        report = tango.bind(report)();
        tango = _closure1_slot18;
        tango = report - tango;
        var _closure2_slot0 = tango;
        report = _closure1_slot1;
        oscar = _closure1_slot2;
        tango = 14;
        tango = oscar[tango];
        report = report.bind(entity)(tango);
        tango = report.forEach;
        zulu = _closure1_slot19;
        zulu = zulu.channels;
        mike = function(argFoo, argBar) {
            _fun89546: for(var _fun89546_ip = 0; ; ) switch(_fun89546_ip) {
 0:
                entity = argFoo;
                mike = entity.lastActionTime;
                entity = _closure2_slot0;
                if(!(mike < entity)) { _fun89546_ip = 40; continue _fun89546 }
 20:
                entity = _closure1_slot19;
                mike = entity.channels;
                entity = argBar;
                entity = delete mike[entity];
 40:
                entity = undefined;
                return entity;
            }
        };
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    mike['CONNECTION_OPEN'] = golf;
    golf = function(argFoo) { // Original name: handleMessageCreate
        _fun89547: for(var _fun89547_ip = 0; ; ) switch(_fun89547_ip) {
 0:
            mike = argFoo;
            entity = mike.optimistic;
            if(entity) { _fun89547_ip = 156; continue _fun89547 }
 15:
            entity = mike.isPushNotification;
            if(entity) { _fun89547_ip = 156; continue _fun89547 }
 27:
            entity = mike.message;
            zulu = entity.author;
            entity = null;
            tango = entity == zulu;
            entity = undefined;
            report = undefined;
            if(tango) { _fun89547_ip = 56; continue _fun89547 }
 51:
            report = zulu.id;
 56:
            oscar = _closure1_slot8;
            tango = oscar.getId;
            tango = tango.bind(oscar)();
            if(!(report === tango)) { _fun89547_ip = 152; continue _fun89547 }
 77:
            report = _closure1_slot30;
            tango = mike.channelId;
            tango = report.bind(entity)(tango);
            if(tango) { _fun89547_ip = 98; continue _fun89547 }
 94:
            tango = false;
            return tango;
 98:
            zulu = _closure1_slot29;
            mike = mike.channelId;
            zulu = zulu.bind(entity)(mike);
            mike = global;
            tango = mike.Date;
            mike = tango.now;
            mike = mike.bind(tango)();
            zulu['lastActionTime'] = mike;
            mike = zulu.numSends;
            mike = mike + 1;
            zulu['numSends'] = mike;
            return entity;
 152:
            entity = false;
            return entity;
 156:
            entity = false;
            return entity;
        }
    };
    mike['MESSAGE_CREATE'] = golf;
    golf = verify.prototype;
    golf = Object.create(golf, {constructor: {value: verify}});
    update = golf;
    result = mike;
    mike = new update[verify](echo, result, output);
    mike = mike instanceof Object ? mike : golf;
    var _closure1_slot24 = mike;
    tango = 19;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/notifications/settings_unread_notice/UnreadSettingNoticeStore2.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();