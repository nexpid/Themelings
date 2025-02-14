// app/stores/UserGuildSettingsStore.tsx
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
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun57563: for(var _fun57563_ip = 0; ; ) switch(_fun57563_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot7;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot6;
            entity = _closure1_slot36;
            entity = entity.bind(zulu)();
            if(entity) { _fun57563_ip = 51; continue _fun57563 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun57563_ip = 92; continue _fun57563;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun57563_ip = 71; continue _fun57563 }
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
    var _closure1_slot35 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun57564: for(var _fun57564_ip = 0; ; ) switch(_fun57564_ip) {
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
            _fun57564_ip = 74; continue _fun57564;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot36 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot36 = entity;
    entity = function(argFoo, argBar) { // Original name: updateUserGuildSettingsInternal
        _fun57567: for(var _fun57567_ip = 0; ; ) switch(_fun57567_ip) {
 0:
            zulu = argFoo;
            golf = argBar;
            entity = _closure1_slot21;
            verify = entity[zulu];
            oscar = null;
            tango = oscar == verify;
            entity = undefined;
            foxtrot = undefined;
            if(tango) { _fun57567_ip = 38; continue _fun57567 }
 32:
            foxtrot = verify.channel_overrides;
 38:
            if(!(oscar == foxtrot)) { _fun57567_ip = 44; continue _fun57567 }
 42:
            foxtrot = {};
 44:
            options = _closure1_slot45;
            tango = golf.channel_overrides;
            options = options.bind(entity)(tango);
            tango = {};
            offset = _closure1_slot44;
            result = offset.bind(entity)(zulu);
            echo = tango;
            offset = copyDataProperties(echo, result);
            echo = tango;
            result = verify;
            verify = copyDataProperties(echo, result);
            echo = tango;
            result = golf;
            golf = copyDataProperties(echo, result);
            golf = 'channel_overrides';
            tango[golf] = options;
            options = _closure1_slot26;
            golf = options.clearTimer;
            golf = golf.bind(options)(zulu);
            options = _closure1_slot1;
            verify = _closure1_slot3;
            golf = 16;
            offset = verify[golf];
            romeo = options.bind(entity)(offset);
            yankee = romeo.forEach;
            offset = function(argFoo) {
                zulu = _closure1_slot27;
                mike = zulu.clearTimer;
                entity = argFoo;
                entity = entity.channel_id;
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            offset = yankee.bind(romeo)(foxtrot, offset);
            offset = _closure1_slot38;
            offset = offset.bind(entity)(zulu, tango);
            offset = _closure1_slot21;
            offset[zulu] = tango;
            yankee = _closure1_slot29;
            romeo = _closure1_slot48;
            offset = _closure1_slot21;
            offset = offset[zulu];
            offset = romeo.bind(entity)(offset);
            yankee[zulu] = offset;
            golf = verify[golf];
            verify = options.bind(entity)(golf);
            options = verify.filter;
            golf = tango.channel_overrides;
            tango = function(argFoo) {
                _fun57569: for(var _fun57569_ip = 0; ; ) switch(_fun57569_ip) {
 0:
                    tango = _closure1_slot2;
                    zulu = _closure1_slot3;
                    mike = 17;
                    zulu = zulu[mike];
                    mike = undefined;
                    tango = tango.bind(mike)(zulu);
                    zulu = tango.hasFlag;
                    mike = argFoo;
                    report = mike.flags;
                    mike = null;
                    oscar = mike != report;
                    mike = 0;
                    if(!oscar) { _fun57569_ip = 53; continue _fun57569 }
 50:
                    mike = report;
 53:
                    entity = _closure1_slot19;
                    entity = entity.OPT_IN_ENABLED;
                    entity = zulu.bind(tango)(mike, entity);
                    return entity;
                }
            };
            offset = options.bind(verify)(golf, tango);
            golf = _closure1_slot30;
            tango = global;
            verify = tango.Set;
            options = offset.map;
            report = function(argFoo) {
                entity = argFoo;
                entity = entity.channel_id;
                return entity;
            };
            echo = options.bind(offset)(report);
            options = verify.prototype;
            options = Object.create(options, {constructor: {value: verify}});
            update = options;
            report = new update[verify](echo, result);
            report = report instanceof Object ? report : options;
            golf[zulu] = report;
            if(!(oscar != zulu)) { _fun57567_ip = 483; continue _fun57567 }
 289:
            options = tango.Set;
            report = _closure1_slot30;
            echo = report[zulu];
            golf = options.prototype;
            golf = Object.create(golf, {constructor: {value: options}});
            update = golf;
            report = new update[options](echo, result);
            report = report instanceof Object ? report : golf;
            golf = _closure1_slot33;
            golf = golf[zulu];
            if(!(oscar == golf)) { _fun57567_ip = 337; continue _fun57567 }
 335:
            golf = {};
 337:
            yankee = golf;
            oscar = 17;
            for(options in yankee)
 351:
            {
 360:
                backup = options;
                foxtrot = golf[backup];
                sizing = _closure1_slot2;
                kilo = _closure1_slot3;
                kilo = kilo[oscar];
                output = sizing.bind(entity)(kilo);
                sizing = output.hasFlag;
                kilo = foxtrot.flags;
                foxtrot = _closure1_slot19;
                foxtrot = foxtrot.OPT_IN_ENABLED;
                foxtrot = sizing.bind(output)(kilo, foxtrot);
                if(foxtrot) { _fun57567_ip = 426; continue _fun57567 }
 414:
                foxtrot = report.delete;
                foxtrot = foxtrot.bind(report)(backup);
                _fun57567_ip = 351; continue _fun57567;
 426:
                foxtrot = report.add;
                foxtrot = foxtrot.bind(report)(backup);
                _fun57567_ip = 351; continue _fun57567;
            }
 438:
            oscar = tango.Object;
            tango = oscar.keys;
            tango = tango.bind(oscar)(golf);
            oscar = tango.length;
            tango = 0;
            if(!(!(oscar > tango))) { _fun57567_ip = 475; continue _fun57567 }
 465:
            tango = _closure1_slot34;
            tango = delete tango[zulu];
            _fun57567_ip = 483; continue _fun57567;
 475:
            tango = _closure1_slot34;
            tango[zulu] = report;
 483:
            mike = _closure1_slot22;
            mike = delete mike[zulu];
            return entity;
        }
    };
    var _closure1_slot37 = entity;
    entity = function(argFoo, argBar) { // Original name: setMuteTimers
        _fun57571: for(var _fun57571_ip = 0; ; ) switch(_fun57571_ip) {
 0:
            golf = argFoo;
            zulu = argBar;
            var _closure2_slot0 = golf;
            tango = zulu.muted;
            entity = true;
            if(!(entity === tango)) { _fun57571_ip = 66; continue _fun57571 }
 24:
            oscar = _closure1_slot26;
            report = oscar.setTimer;
            tango = zulu.mute_config;
            entity = function() {
                tango = _closure1_slot39;
                report = _closure2_slot0;
                zulu = {};
                entity = false;
                zulu['muted'] = entity;
                entity = undefined;
                zulu = tango.bind(entity)(report, zulu);
                zulu = _closure1_slot1;
                tango = _closure1_slot3;
                mike = 18;
                mike = tango[mike];
                tango = zulu.bind(entity)(mike);
                zulu = tango.dispatch;
                mike = {};
                oscar = 'GUILD_MUTE_EXPIRED';
                mike['type'] = oscar;
                mike['guildId'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            entity = report.bind(oscar)(golf, tango, entity);
            if(!entity) { _fun57571_ip = 66; continue _fun57571 }
 58:
            entity = false;
            zulu['muted'] = entity;
 66:
            report = _closure1_slot1;
            tango = _closure1_slot3;
            entity = 16;
            tango = tango[entity];
            entity = undefined;
            report = report.bind(entity)(tango);
            tango = report.forEach;
            zulu = zulu.channel_overrides;
            mike = function(argFoo) {
                _fun57573: for(var _fun57573_ip = 0; ; ) switch(_fun57573_ip) {
 0:
                    mike = argFoo;
                    var _closure3_slot0 = mike;
                    tango = mike.muted;
                    zulu = true;
                    if(!(zulu === tango)) { _fun57573_ip = 68; continue _fun57573 }
 21:
                    oscar = _closure1_slot27;
                    report = oscar.setTimer;
                    tango = mike.channel_id;
                    zulu = mike.mute_config;
                    entity = function() {
                        golf = _closure1_slot40;
                        oscar = _closure2_slot0;
                        report = _closure3_slot0;
                        tango = report.channel_id;
                        zulu = {};
                        entity = false;
                        zulu['muted'] = entity;
                        entity = undefined;
                        zulu = golf.bind(entity)(oscar, tango, zulu);
                        zulu = _closure1_slot1;
                        tango = _closure1_slot3;
                        mike = 18;
                        mike = tango[mike];
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.dispatch;
                        mike = {};
                        golf = 'CHANNEL_MUTE_EXPIRED';
                        mike['type'] = golf;
                        mike['guildId'] = oscar;
                        report = report.channel_id;
                        mike['channelId'] = report;
                        mike = zulu.bind(tango)(mike);
                        return entity;
                    };
                    entity = report.bind(oscar)(tango, zulu, entity);
                    if(!entity) { _fun57573_ip = 68; continue _fun57573 }
 60:
                    entity = false;
                    mike['muted'] = entity;
 68:
                    entity = undefined;
                    return entity;
                }
            };
            mike = tango.bind(report)(zulu, mike);
            return entity;
        }
    };
    var _closure1_slot38 = entity;
    entity = function(argFoo, argBar) { // Original name: updateUserGuildSettings
        _fun57575: for(var _fun57575_ip = 0; ; ) switch(_fun57575_ip) {
 0:
            tango = argFoo;
            mike = _closure1_slot21;
            golf = mike[tango];
            zulu = _closure1_slot37;
            mike = {};
            oscar = null;
            options = oscar == golf;
            entity = undefined;
            report = undefined;
            if(options) { _fun57575_ip = 39; continue _fun57575 }
 33:
            report = golf.channel_overrides;
 39:
            if(!(oscar == report)) { _fun57575_ip = 45; continue _fun57575 }
 43:
            report = {};
 45:
            mike['channel_overrides'] = report;
            verify = argBar;
            offset = mike;
            report = copyDataProperties(offset, verify);
            mike = zulu.bind(entity)(tango, mike);
            return entity;
        }
    };
    var _closure1_slot39 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: updateUserGuildChannelSettings
        tango = argFoo;
        oscar = argBar;
        zulu = _closure1_slot42;
        mike = {};
        golf = _closure1_slot43;
        entity = undefined;
        report = argBaz;
        report = golf.bind(entity)(tango, oscar, report);
        mike[oscar] = report;
        mike = zulu.bind(entity)(tango, mike);
        return entity;
    };
    var _closure1_slot40 = entity;
    entity = function(argFoo, argBar) { // Original name: updateUserGuildChannelSettingsBulk
        _fun57577: for(var _fun57577_ip = 0; ; ) switch(_fun57577_ip) {
 0:
            tango = argFoo;
            offset = argBar;
            var _closure2_slot0 = tango;
            var _closure2_slot1 = offset;
            zulu = {};
            var _closure2_slot2 = zulu;
            report = null;
            entity = report != tango;
            golf = null;
            if(!entity) { _fun57577_ip = 44; continue _fun57577 }
 33:
            entity = _closure1_slot33;
            golf = entity[tango];
 44:
            if(!(report == golf)) { _fun57577_ip = 50; continue _fun57577 }
 48:
            golf = {};
 50:
            var _closure2_slot3 = golf;
            verify = _closure1_slot1;
            options = _closure1_slot3;
            entity = 19;
            options = options[entity];
            entity = undefined;
            verify = verify.bind(entity)(options);
            options = verify.keys;
            verify = options.bind(verify)(offset);
            options = verify.forEach;
            oscar = function(argFoo) {
                _fun57578: for(var _fun57578_ip = 0; ; ) switch(_fun57578_ip) {
 0:
                    tango = argFoo;
                    oscar = _closure1_slot43;
                    report = _closure2_slot0;
                    entity = _closure2_slot1;
                    zulu = entity[tango];
                    entity = undefined;
                    report = oscar.bind(entity)(report, tango, zulu);
                    zulu = _closure2_slot2;
                    zulu[tango] = report;
                    zulu = _closure2_slot3;
                    mike = {};
                    oscar = report.flags;
                    report = null;
                    golf = report != oscar;
                    report = 0;
                    if(!golf) { _fun57578_ip = 67; continue _fun57578 }
 64:
                    report = oscar;
 67:
                    mike['flags'] = report;
                    zulu[tango] = mike;
                    return entity;
                }
            };
            oscar = options.bind(verify)(oscar);
            if(!(report != tango)) { _fun57577_ip = 139; continue _fun57577 }
 108:
            oscar = _closure1_slot33;
            report = {};
            yankee = oscar[tango];
            romeo = report;
            options = copyDataProperties(romeo, yankee);
            romeo = report;
            yankee = golf;
            golf = copyDataProperties(romeo, yankee);
            oscar[tango] = report;
 139:
            mike = _closure1_slot42;
            mike = mike.bind(entity)(tango, zulu);
            return entity;
        }
    };
    var _closure1_slot41 = entity;
    entity = function(argFoo, argBar) { // Original name: updateMultipleChannels
        _fun57579: for(var _fun57579_ip = 0; ; ) switch(_fun57579_ip) {
 0:
            tango = argFoo;
            golf = argBar;
            entity = _closure1_slot21;
            verify = entity[tango];
            oscar = null;
            zulu = oscar == verify;
            entity = undefined;
            options = undefined;
            if(zulu) { _fun57579_ip = 36; continue _fun57579 }
 30:
            options = verify.channel_overrides;
 36:
            if(!(oscar == options)) { _fun57579_ip = 42; continue _fun57579 }
 40:
            options = {};
 42:
            zulu = _closure1_slot37;
            mike = {};
            report = golf;
            if(!(oscar != verify)) { _fun57579_ip = 80; continue _fun57579 }
 55:
            oscar = {};
            yankee = oscar;
            offset = options;
            options = copyDataProperties(yankee, offset);
            yankee = oscar;
            offset = golf;
            golf = copyDataProperties(yankee, offset);
            report = oscar;
 80:
            mike['channel_overrides'] = report;
            mike = zulu.bind(entity)(tango, mike);
            return entity;
        }
    };
    var _closure1_slot42 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: computeNewChannelSettings
        _fun57580: for(var _fun57580_ip = 0; ; ) switch(_fun57580_ip) {
 0:
            zulu = argBar;
            mike = _closure1_slot21;
            entity = argFoo;
            report = mike[entity];
            entity = {};
            entity['channel_id'] = zulu;
            mike = false;
            entity['muted'] = mike;
            tango = null;
            oscar = tango == report;
            mike = undefined;
            if(oscar) { _fun57580_ip = 47; continue _fun57580 }
 41:
            mike = report.channel_overrides;
 47:
            if(!(tango == mike)) { _fun57580_ip = 53; continue _fun57580 }
 51:
            mike = {};
 53:
            golf = mike[zulu];
            options = entity;
            mike = copyDataProperties(options, golf);
            golf = argBaz;
            options = entity;
            mike = copyDataProperties(options, golf);
            return entity;
        }
    };
    var _closure1_slot43 = entity;
    tango = function(argFoo) { // Original name: getGuildDefaults
        _fun57581: for(var _fun57581_ip = 0; ; ) switch(_fun57581_ip) {
 0:
            tango = _closure1_slot14;
            zulu = tango.getGuild;
            mike = argFoo;
            zulu = zulu.bind(tango)(mike);
            mike = null;
            if(!(mike == zulu)) { _fun57581_ip = 38; continue _fun57581 }
 26:
            mike = _closure1_slot16;
            mike = mike.ALL_MESSAGES;
            _fun57581_ip = 44; continue _fun57581;
 38:
            mike = zulu.defaultMessageNotifications;
 44:
            entity = _closure1_slot28;
            entity = entity[mike];
            return entity;
        }
    };
    var _closure1_slot44 = tango;
    mike = function() { // Original name: convertChannelOverridesToMap
        _fun57582: for(var _fun57582_ip = 0; ; ) switch(_fun57582_ip) {
 0:
            report = arguments[0];
            tango = undefined;
            if(!(report === tango)) { _fun57582_ip = 11; continue _fun57582 }
 9:
            report = {};
 11:
            entity = global;
            entity = entity.Array;
            mike = report instanceof entity;
            entity = report;
            if(!mike) { _fun57582_ip = 68; continue _fun57582 }
 29:
            zulu = _closure1_slot1;
            oscar = _closure1_slot3;
            mike = 16;
            mike = oscar[mike];
            tango = zulu.bind(tango)(mike);
            zulu = tango.keyBy;
            mike = 'channel_id';
            entity = zulu.bind(tango)(report, mike);
 68:
            return entity;
        }
    };
    var _closure1_slot45 = mike;
    entity = function(argFoo) { // Original name: getGuildSettings
        _fun57583: for(var _fun57583_ip = 0; ; ) switch(_fun57583_ip) {
 0:
            tango = argFoo;
            entity = _closure1_slot21;
            entity = entity[tango];
            zulu = null;
            if(!(zulu == entity)) { _fun57583_ip = 31; continue _fun57583 }
 20:
            zulu = _closure1_slot44;
            mike = undefined;
            entity = zulu.bind(mike)(tango);
 31:
            return entity;
        }
    };
    var _closure1_slot46 = entity;
    entity = function(argFoo) { // Original name: processAccountNotificationSettings
        zulu = argFoo;
        report = _closure1_slot2;
        oscar = _closure1_slot3;
        tango = 17;
        golf = oscar[tango];
        entity = undefined;
        offset = report.bind(entity)(golf);
        verify = offset.hasFlag;
        options = zulu.flags;
        golf = _closure1_slot17;
        golf = golf.USE_NEW_NOTIFICATIONS;
        golf = verify.bind(offset)(options, golf);
        _closure1_slot23 = golf;
        tango = oscar[tango];
        golf = report.bind(entity)(tango);
        oscar = golf.hasFlag;
        report = zulu.flags;
        tango = _closure1_slot17;
        tango = tango.MENTION_ON_ALL_MESSAGES;
        tango = oscar.bind(golf)(report, tango);
        _closure1_slot24 = tango;
        _closure1_slot25 = zulu;
        return entity;
    };
    var _closure1_slot47 = entity;
    entity = function(argFoo) { // Original name: mutedChannelsForGuild
        _fun57585: for(var _fun57585_ip = 0; ; ) switch(_fun57585_ip) {
 0:
            tango = argFoo;
            entity = global;
            zulu = entity.Set;
            report = tango.channel_overrides;
            entity = null;
            report = entity != report;
            if(!report) { _fun57585_ip = 103; continue _fun57585 }
 28:
            golf = _closure1_slot1;
            oscar = _closure1_slot3;
            report = 16;
            report = oscar[report];
            oscar = undefined;
            report = golf.bind(oscar)(report);
            tango = tango.channel_overrides;
            oscar = report.bind(oscar)(tango);
            report = oscar.filter;
            tango = function(argFoo) {
                zulu = _closure1_slot0;
                mike = _closure1_slot3;
                entity = 15;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.computeIsMuted;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            report = report.bind(oscar)(tango);
            tango = report.map;
            mike = function(argFoo) {
                entity = argFoo;
                entity = entity.channel_id;
                return entity;
            };
            tango = tango.bind(report)(mike);
            mike = tango.value;
            entity = mike.bind(tango)();
 103:
            mike = zulu.prototype;
            mike = Object.create(mike, {constructor: {value: zulu}});
            verify = mike;
            options = entity;
            entity = new verify[zulu](options, golf);
            entity = entity instanceof Object ? entity : mike;
            return entity;
        }
    };
    var _closure1_slot48 = entity;
    yankee = function() { // Original name: handleGuildUpdate
        entity = true;
        return entity;
    };
    entity = function() { // Original name: shouldUseNewUnreadBehavior
        _fun57589: for(var _fun57589_ip = 0; ; ) switch(_fun57589_ip) {
 0:
            entity = _closure1_slot23;
            if(!entity) { _fun57589_ip = 76; continue _fun57589 }
 10:
            tango = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 20;
            zulu = zulu[mike];
            mike = undefined;
            mike = tango.bind(mike)(zulu);
            report = mike.NotificationsExperiment;
            tango = report.getCurrentConfig;
            zulu = {};
            mike = 'UserGuildSettingsStore';
            zulu['location'] = mike;
            mike = {};
            oscar = false;
            mike['autoTrackExposure'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            entity = mike.enabled;
 76:
            return entity;
        }
    };
    var _closure1_slot49 = entity;
    report = global;
    foxtrot = report.Object;
    romeo = foxtrot.defineProperty;
    offset = {};
    entity = true;
    offset['value'] = entity;
    entity = '__esModule';
    entity = romeo.bind(foxtrot)(zulu, entity, offset);
    foxtrot = 0;
    offset = options[foxtrot];
    entity = undefined;
    offset = verify.bind(entity)(offset);
    var _closure1_slot4 = offset;
    offset = 1;
    offset = options[offset];
    offset = verify.bind(entity)(offset);
    var _closure1_slot5 = offset;
    offset = 2;
    offset = options[offset];
    offset = verify.bind(entity)(offset);
    var _closure1_slot6 = offset;
    offset = 3;
    offset = options[offset];
    offset = verify.bind(entity)(offset);
    var _closure1_slot7 = offset;
    offset = 4;
    offset = options[offset];
    offset = verify.bind(entity)(offset);
    var _closure1_slot8 = offset;
    offset = 5;
    offset = options[offset];
    offset = verify.bind(entity)(offset);
    var _closure1_slot9 = offset;
    offset = 6;
    offset = options[offset];
    offset = verify.bind(entity)(offset);
    var _closure1_slot10 = offset;
    offset = 7;
    offset = options[offset];
    offset = golf.bind(entity)(offset);
    romeo = offset.THREAD_CHANNEL_TYPES;
    var _closure1_slot11 = romeo;
    offset = offset.isPrivate;
    var _closure1_slot12 = offset;
    offset = 8;
    offset = options[offset];
    offset = verify.bind(entity)(offset);
    var _closure1_slot13 = offset;
    offset = 9;
    offset = options[offset];
    offset = verify.bind(entity)(offset);
    var _closure1_slot14 = offset;
    offset = 10;
    offset = options[offset];
    offset = verify.bind(entity)(offset);
    var _closure1_slot15 = offset;
    offset = 11;
    offset = options[offset];
    romeo = golf.bind(entity)(offset);
    offset = romeo.HighlightSettings;
    backup = romeo.UserNotificationSettings;
    var _closure1_slot16 = backup;
    romeo = 12;
    romeo = options[romeo];
    romeo = golf.bind(entity)(romeo);
    romeo = romeo.AccountNotificationFlags;
    var _closure1_slot17 = romeo;
    romeo = 13;
    romeo = options[romeo];
    romeo = golf.bind(entity)(romeo);
    romeo = romeo.UnreadSetting;
    var _closure1_slot18 = romeo;
    romeo = 14;
    romeo = options[romeo];
    romeo = golf.bind(entity)(romeo);
    kilo = romeo.ChannelNotificationSettingsFlags;
    var _closure1_slot19 = kilo;
    romeo = romeo.GuildNotificationSettingsFlags;
    var _closure1_slot20 = romeo;
    romeo = {};
    var _closure1_slot21 = romeo;
    romeo = {};
    var _closure1_slot22 = romeo;
    romeo = false;
    var _closure1_slot23 = romeo;
    var _closure1_slot24 = romeo;
    romeo = {};
    romeo['flags'] = foxtrot;
    var _closure1_slot25 = romeo;
    romeo = 15;
    foxtrot = options[romeo];
    foxtrot = verify.bind(entity)(foxtrot);
    kilo = foxtrot.prototype;
    kilo = Object.create(kilo, {constructor: {value: foxtrot}});
    source = kilo;
    foxtrot = new source[foxtrot](update);
    foxtrot = foxtrot instanceof Object ? foxtrot : kilo;
    var _closure1_slot26 = foxtrot;
    romeo = options[romeo];
    romeo = verify.bind(entity)(romeo);
    foxtrot = romeo.prototype;
    foxtrot = Object.create(foxtrot, {constructor: {value: romeo}});
    source = foxtrot;
    romeo = new source[romeo](update);
    romeo = romeo instanceof Object ? romeo : foxtrot;
    var _closure1_slot27 = romeo;
    sizing = {'suppress_everyone': false, 'suppress_roles': false, 'mute_scheduled_events': false, 'mobile_push': true, 'muted': false, 'message_notifications': null, 'flags': 0, 'channel_overrides': null, 'notify_highlights': null, 'hide_muted_channels': false, 'version': 4294967295, 'mute_config': null};
    romeo = backup.ALL_MESSAGES;
    sizing['message_notifications'] = romeo;
    romeo = {};
    sizing['channel_overrides'] = romeo;
    offset = offset.NULL;
    sizing['notify_highlights'] = offset;
    offset = {};
    foxtrot = backup.ALL_MESSAGES;
    romeo = {};
    update = romeo;
    echo = sizing;
    kilo = copyDataProperties(update, echo);
    output = backup.ALL_MESSAGES;
    kilo = 'message_notifications';
    romeo[kilo] = output;
    offset[foxtrot] = romeo;
    foxtrot = backup.ONLY_MENTIONS;
    romeo = {};
    update = romeo;
    echo = sizing;
    sizing = copyDataProperties(update, echo);
    backup = backup.ONLY_MENTIONS;
    romeo[kilo] = backup;
    offset[foxtrot] = romeo;
    var _closure1_slot28 = offset;
    offset = {};
    var _closure1_slot29 = offset;
    offset = {};
    var _closure1_slot30 = offset;
    offset = report.Set;
    romeo = offset.prototype;
    romeo = Object.create(romeo, {constructor: {value: offset}});
    source = romeo;
    offset = new source[offset](update);
    offset = offset instanceof Object ? offset : romeo;
    var _closure1_slot31 = offset;
    report = report.Set;
    offset = report.prototype;
    offset = Object.create(offset, {constructor: {value: report}});
    source = offset;
    report = new source[report](update);
    report = report instanceof Object ? report : offset;
    var _closure1_slot32 = report;
    report = {};
    var _closure1_slot33 = report;
    report = {};
    var _closure1_slot34 = report;
    report = 21;
    report = options[report];
    report = verify.bind(entity)(report);
    offset = report.PersistedStore;
    report = function(argFoo) {
        tango = function() { // Original name: UserGuildSettingsStoreClass
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot4;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot35;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot8;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot5;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun57592: for(var _fun57592_ip = 0; ; ) switch(_fun57592_ip) {
 0:
                tango = argFoo;
                verify = this;
                options = verify.waitFor;
                foxtrot = _closure1_slot15;
                romeo = _closure1_slot14;
                yankee = _closure1_slot9;
                offset = _closure1_slot10;
                backup = verify;
                zulu = backup[options](foxtrot, romeo, yankee, offset, verify);
                zulu = null;
                if(!(zulu != tango)) { _fun57592_ip = 182; continue _fun57592 }
 49:
                oscar = tango.useNewNotifications;
                report = zulu != oscar;
                if(!report) { _fun57592_ip = 65; continue _fun57592 }
 62:
                report = oscar;
 65:
                _closure1_slot23 = report;
                report = 'userGuildSettings';
                report = report in tango;
                if(!report) { _fun57592_ip = 182; continue _fun57592 }
 80:
                report = tango.userGuildSettings;
                _closure1_slot21 = report;
                options = _closure1_slot1;
                report = _closure1_slot3;
                oscar = 16;
                golf = report[oscar];
                report = undefined;
                options = options.bind(report)(golf);
                golf = options.mapValues;
                tango = tango.optedInChannelsByGuild;
                if(!(zulu == tango)) { _fun57592_ip = 130; continue _fun57592 }
 128:
                tango = {};
 130:
                zulu = function(argFoo) {
                    entity = global;
                    zulu = entity.Set;
                    entity = zulu.prototype;
                    mike = Object.create(entity, {constructor: {value: zulu}});
                    tango = argFoo;
                    report = mike;
                    entity = new report[zulu](tango, zulu);
                    entity = entity instanceof Object ? entity : mike;
                    return entity;
                };
                zulu = golf.bind(options)(tango, zulu);
                _closure1_slot30 = zulu;
                tango = _closure1_slot1;
                zulu = _closure1_slot3;
                zulu = zulu[oscar];
                tango = tango.bind(report)(zulu);
                zulu = tango.forEach;
                mike = _closure1_slot21;
                entity = function(argFoo, argBar) {
                    tango = _closure1_slot29;
                    zulu = _closure1_slot48;
                    entity = undefined;
                    mike = argFoo;
                    zulu = zulu.bind(entity)(mike);
                    mike = argBar;
                    tango[mike] = zulu;
                    return entity;
                };
                entity = zulu.bind(tango)(mike, entity);
 182:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(47);
        entity[0] = report;
        report = {};
        golf = 'getState';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = {};
            mike = _closure1_slot23;
            entity['useNewNotifications'] = mike;
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'mentionOnAllMessages';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = _closure1_slot24;
            return entity;
        };
        report['get'] = golf;
        entity[2] = report;
        report = {};
        golf = 'isSuppressEveryoneEnabled';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            zulu = _closure1_slot46;
            mike = undefined;
            entity = argFoo;
            entity = zulu.bind(mike)(entity);
            entity = entity.suppress_everyone;
            return entity;
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'isSuppressRolesEnabled';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            zulu = _closure1_slot46;
            mike = undefined;
            entity = argFoo;
            entity = zulu.bind(mike)(entity);
            entity = entity.suppress_roles;
            return entity;
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'isMuteScheduledEventsEnabled';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            zulu = _closure1_slot46;
            mike = undefined;
            entity = argFoo;
            entity = zulu.bind(mike)(entity);
            entity = entity.mute_scheduled_events;
            return entity;
        };
        report['value'] = golf;
        entity[5] = report;
        report = {};
        golf = 'isMobilePushEnabled';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            zulu = _closure1_slot46;
            mike = undefined;
            entity = argFoo;
            entity = zulu.bind(mike)(entity);
            entity = entity.mobile_push;
            return entity;
        };
        report['value'] = golf;
        entity[6] = report;
        report = {};
        golf = 'isMuted';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            zulu = _closure1_slot46;
            tango = undefined;
            mike = argFoo;
            zulu = zulu.bind(tango)(mike);
            mike = _closure1_slot0;
            report = _closure1_slot3;
            entity = 15;
            entity = report[entity];
            mike = mike.bind(tango)(entity);
            entity = mike.computeIsMuted;
            entity = entity.bind(mike)(zulu);
            return entity;
        };
        report['value'] = golf;
        entity[7] = report;
        report = {};
        golf = 'isTemporarilyMuted';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            zulu = _closure1_slot46;
            tango = undefined;
            mike = argFoo;
            zulu = zulu.bind(tango)(mike);
            mike = _closure1_slot0;
            report = _closure1_slot3;
            entity = 15;
            entity = report[entity];
            mike = mike.bind(tango)(entity);
            entity = mike.isTemporarilyMuted;
            entity = entity.bind(mike)(zulu);
            return entity;
        };
        report['value'] = golf;
        entity[8] = report;
        report = {};
        golf = 'getMuteConfig';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            zulu = _closure1_slot46;
            mike = undefined;
            entity = argFoo;
            entity = zulu.bind(mike)(entity);
            entity = entity.mute_config;
            return entity;
        };
        report['value'] = golf;
        entity[9] = report;
        report = {};
        golf = 'getMessageNotifications';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            zulu = _closure1_slot46;
            mike = undefined;
            entity = argFoo;
            entity = zulu.bind(mike)(entity);
            entity = entity.message_notifications;
            return entity;
        };
        report['value'] = golf;
        entity[10] = report;
        report = {};
        golf = 'getChannelOverrides';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun57605: for(var _fun57605_ip = 0; ; ) switch(_fun57605_ip) {
 0:
                zulu = _closure1_slot46;
                mike = undefined;
                entity = argFoo;
                entity = zulu.bind(mike)(entity);
                entity = entity.channel_overrides;
                mike = null;
                if(!(mike == entity)) { _fun57605_ip = 31; continue _fun57605 }
 29:
                entity = {};
 31:
                return entity;
            }
        };
        report['value'] = golf;
        entity[11] = report;
        report = {};
        golf = 'getNotifyHighlights';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            zulu = _closure1_slot46;
            mike = undefined;
            entity = argFoo;
            entity = zulu.bind(mike)(entity);
            entity = entity.notify_highlights;
            return entity;
        };
        report['value'] = golf;
        entity[12] = report;
        report = {};
        golf = 'getGuildFlags';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            zulu = _closure1_slot46;
            mike = undefined;
            entity = argFoo;
            entity = zulu.bind(mike)(entity);
            entity = entity.flags;
            return entity;
        };
        report['value'] = golf;
        entity[13] = report;
        report = {};
        golf = 'getChannelMessageNotifications';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            _fun57608: for(var _fun57608_ip = 0; ; ) switch(_fun57608_ip) {
 0:
                zulu = this;
                mike = zulu.getChannelOverrides;
                entity = argFoo;
                mike = mike.bind(zulu)(entity);
                entity = argBar;
                entity = mike[entity];
                zulu = null;
                if(!(zulu != entity)) { _fun57608_ip = 48; continue _fun57608 }
 30:
                mike = entity.message_notifications;
                if(!(zulu != mike)) { _fun57608_ip = 48; continue _fun57608 }
 40:
                entity = entity.message_notifications;
                _fun57608_ip = 61; continue _fun57608;
 48:
                mike = _closure1_slot16;
                entity = mike.NULL;
 61:
                return entity;
            }
        };
        report['value'] = golf;
        entity[14] = report;
        report = {};
        golf = 'getChannelMuteConfig';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            _fun57609: for(var _fun57609_ip = 0; ; ) switch(_fun57609_ip) {
 0:
                zulu = this;
                mike = zulu.getChannelOverrides;
                entity = argFoo;
                mike = mike.bind(zulu)(entity);
                entity = argBar;
                mike = mike[entity];
                entity = null;
                zulu = entity != mike;
                if(!zulu) { _fun57609_ip = 39; continue _fun57609 }
 33:
                entity = mike.mute_config;
 39:
                return entity;
            }
        };
        report['value'] = golf;
        entity[15] = report;
        report = {};
        golf = 'getMutedChannels';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun57610: for(var _fun57610_ip = 0; ; ) switch(_fun57610_ip) {
 0:
                zulu = _closure1_slot29;
                entity = argFoo;
                entity = zulu[entity];
                zulu = null;
                if(!(zulu == entity)) { _fun57610_ip = 24; continue _fun57610 }
 20:
                entity = _closure1_slot31;
 24:
                return entity;
            }
        };
        report['value'] = golf;
        entity[16] = report;
        report = {};
        golf = 'isChannelMuted';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            _fun57611: for(var _fun57611_ip = 0; ; ) switch(_fun57611_ip) {
 0:
                tango = argFoo;
                zulu = argBar;
                mike = this;
                report = _closure1_slot13;
                entity = report.getChannel;
                golf = entity.bind(report)(zulu);
                report = null;
                oscar = report == golf;
                entity = undefined;
                if(oscar) { _fun57611_ip = 47; continue _fun57611 }
 37:
                oscar = golf.getGuildId;
                entity = oscar.bind(golf)();
 47:
                if(!(report != entity)) { _fun57611_ip = 54; continue _fun57611 }
 51:
                tango = entity;
 54:
                entity = mike.getMutedChannels;
                mike = entity.bind(mike)(tango);
                entity = mike.has;
                entity = entity.bind(mike)(zulu);
                return entity;
            }
        };
        report['value'] = golf;
        entity[17] = report;
        report = {};
        golf = 'isCategoryMuted';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            _fun57612: for(var _fun57612_ip = 0; ; ) switch(_fun57612_ip) {
 0:
                report = this;
                zulu = _closure1_slot13;
                mike = zulu.getChannel;
                entity = argBar;
                mike = mike.bind(zulu)(entity);
                entity = null;
                if(!(entity != mike)) { _fun57612_ip = 68; continue _fun57612 }
 29:
                tango = mike.parent_id;
                entity = entity != tango;
                if(!entity) { _fun57612_ip = 66; continue _fun57612 }
 42:
                zulu = report.getMutedChannels;
                mike = argFoo;
                zulu = zulu.bind(report)(mike);
                mike = zulu.has;
                entity = mike.bind(zulu)(tango);
 66:
                return entity;
 68:
                entity = false;
                return entity;
            }
        };
        report['value'] = golf;
        entity[18] = report;
        report = {};
        golf = 'resolvedMessageNotifications';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun57613: for(var _fun57613_ip = 0; ; ) switch(_fun57613_ip) {
 0:
                zulu = argFoo;
                report = this;
                tango = report.getChannelMessageNotifications;
                mike = zulu.guild_id;
                entity = zulu.id;
                entity = tango.bind(report)(mike, entity);
                mike = _closure1_slot16;
                mike = mike.NULL;
                if(!(entity === mike)) { _fun57613_ip = 114; continue _fun57613 }
 45:
                oscar = zulu.parent_id;
                mike = null;
                if(!(mike != oscar)) { _fun57613_ip = 94; continue _fun57613 }
 57:
                golf = report.getChannelMessageNotifications;
                oscar = zulu.guild_id;
                mike = zulu.parent_id;
                mike = golf.bind(report)(oscar, mike);
                tango = _closure1_slot16;
                tango = tango.NULL;
                if(!(mike === tango)) { _fun57613_ip = 112; continue _fun57613 }
 94:
                tango = report.getMessageNotifications;
                zulu = zulu.guild_id;
                zulu = tango.bind(report)(zulu);
                return zulu;
 112:
                return mike;
 114:
                return entity;
            }
        };
        report['value'] = golf;
        entity[19] = report;
        report = {};
        golf = 'resolveUnreadSetting';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun57614: for(var _fun57614_ip = 0; ; ) switch(_fun57614_ip) {
 0:
                golf = argFoo;
                oscar = this;
                tango = _closure1_slot11;
                zulu = tango.has;
                mike = golf.type;
                mike = zulu.bind(tango)(mike);
                if(mike) { _fun57614_ip = 265; continue _fun57614 }
 34:
                tango = _closure1_slot12;
                mike = golf.type;
                zulu = undefined;
                mike = tango.bind(zulu)(mike);
                if(mike) { _fun57614_ip = 253; continue _fun57614 }
 56:
                mike = _closure1_slot49;
                mike = mike.bind(zulu)();
                if(mike) { _fun57614_ip = 79; continue _fun57614 }
 67:
                mike = _closure1_slot18;
                mike = mike.ALL_MESSAGES;
                return mike;
 79:
                tango = oscar.getChannelUnreadSetting;
                zulu = golf.guild_id;
                mike = golf.id;
                mike = tango.bind(oscar)(zulu, mike);
                zulu = _closure1_slot18;
                zulu = zulu.UNSET;
                if(!(mike === zulu)) { _fun57614_ip = 251; continue _fun57614 }
 118:
                tango = golf.parent_id;
                zulu = null;
                if(!(zulu != tango)) { _fun57614_ip = 167; continue _fun57614 }
 130:
                report = oscar.getChannelUnreadSetting;
                tango = golf.guild_id;
                zulu = golf.parent_id;
                zulu = report.bind(oscar)(tango, zulu);
                tango = _closure1_slot18;
                tango = tango.UNSET;
                if(!(zulu === tango)) { _fun57614_ip = 249; continue _fun57614 }
 167:
                report = oscar.getGuildUnreadSetting;
                tango = golf.guild_id;
                tango = report.bind(oscar)(tango);
                report = _closure1_slot18;
                report = report.UNSET;
                if(!(tango === report)) { _fun57614_ip = 247; continue _fun57614 }
 197:
                report = oscar.resolvedMessageNotifications;
                oscar = report.bind(oscar)(golf);
                report = _closure1_slot16;
                report = report.ALL_MESSAGES;
                if(!(oscar !== report)) { _fun57614_ip = 234; continue _fun57614 }
 222:
                report = _closure1_slot18;
                report = report.ONLY_MENTIONS;
                _fun57614_ip = 244; continue _fun57614;
 234:
                oscar = _closure1_slot18;
                report = oscar.ALL_MESSAGES;
 244:
                tango = report;
 247:
                return tango;
 249:
                return zulu;
 251:
                return mike;
 253:
                mike = _closure1_slot18;
                mike = mike.ALL_MESSAGES;
                return mike;
 265:
                entity = _closure1_slot18;
                entity = entity.ALL_MESSAGES;
                return entity;
            }
        };
        report['value'] = golf;
        entity[20] = report;
        report = {};
        golf = 'isGuildOrCategoryOrChannelMuted';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            _fun57615: for(var _fun57615_ip = 0; ; ) switch(_fun57615_ip) {
 0:
                report = argFoo;
                tango = argBar;
                zulu = this;
                entity = zulu.isMuted;
                entity = entity.bind(zulu)(report);
                if(entity) { _fun57615_ip = 37; continue _fun57615 }
 23:
                mike = zulu.isCategoryMuted;
                entity = mike.bind(zulu)(report, tango);
 37:
                if(entity) { _fun57615_ip = 52; continue _fun57615 }
 40:
                mike = zulu.isChannelMuted;
                entity = mike.bind(zulu)(report, tango);
 52:
                return entity;
            }
        };
        report['value'] = golf;
        entity[21] = report;
        report = {};
        golf = 'allowNoMessages';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun57616: for(var _fun57616_ip = 0; ; ) switch(_fun57616_ip) {
 0:
                report = argFoo;
                tango = this;
                zulu = tango.isGuildOrCategoryOrChannelMuted;
                mike = report.guild_id;
                entity = report.id;
                entity = zulu.bind(tango)(mike, entity);
                if(entity) { _fun57616_ip = 59; continue _fun57616 }
 31:
                mike = tango.resolvedMessageNotifications;
                zulu = mike.bind(tango)(report);
                mike = _closure1_slot16;
                mike = mike.NO_MESSAGES;
                entity = zulu === mike;
 59:
                if(entity) { _fun57616_ip = 98; continue _fun57616 }
 62:
                zulu = tango.isOptInEnabled;
                mike = report.guild_id;
                mike = zulu.bind(tango)(mike);
                if(!mike) { _fun57616_ip = 95; continue _fun57616 }
 81:
                zulu = tango.isChannelRecordOrParentOptedIn;
                zulu = zulu.bind(tango)(report);
                mike = !zulu;
 95:
                entity = mike;
 98:
                return entity;
            }
        };
        report['value'] = golf;
        entity[22] = report;
        report = {};
        golf = 'allowAllMessages';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun57617: for(var _fun57617_ip = 0; ; ) switch(_fun57617_ip) {
 0:
                report = argFoo;
                tango = this;
                zulu = tango.isGuildOrCategoryOrChannelMuted;
                mike = report.guild_id;
                entity = report.id;
                entity = zulu.bind(tango)(mike, entity);
                entity = !entity;
                if(!entity) { _fun57617_ip = 62; continue _fun57617 }
 34:
                mike = tango.resolvedMessageNotifications;
                zulu = mike.bind(tango)(report);
                mike = _closure1_slot16;
                mike = mike.ALL_MESSAGES;
                entity = zulu === mike;
 62:
                if(!entity) { _fun57617_ip = 101; continue _fun57617 }
 65:
                zulu = tango.isOptInEnabled;
                mike = report.guild_id;
                mike = zulu.bind(tango)(mike);
                mike = !mike;
                if(mike) { _fun57617_ip = 98; continue _fun57617 }
 87:
                zulu = tango.isChannelRecordOrParentOptedIn;
                mike = zulu.bind(tango)(report);
 98:
                entity = mike;
 101:
                return entity;
            }
        };
        report['value'] = golf;
        entity[23] = report;
        report = {};
        golf = 'isGuildCollapsed';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun57618: for(var _fun57618_ip = 0; ; ) switch(_fun57618_ip) {
 0:
                mike = _closure1_slot21;
                entity = argFoo;
                entity = mike[entity];
                mike = null;
                zulu = mike == entity;
                mike = undefined;
                if(zulu) { _fun57618_ip = 31; continue _fun57618 }
 25:
                mike = entity.hide_muted_channels;
 31:
                entity = true;
                entity = entity === mike;
                return entity;
            }
        };
        report['value'] = golf;
        entity[24] = report;
        report = {};
        golf = 'getAllSettings';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = {};
            zulu = _closure1_slot21;
            entity['userGuildSettings'] = zulu;
            zulu = _closure1_slot29;
            entity['mutedChannels'] = zulu;
            mike = _closure1_slot30;
            entity['optedInChannelsByGuild'] = mike;
            return entity;
        };
        report['value'] = golf;
        entity[25] = report;
        report = {};
        golf = 'getChannelIdFlags';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            _fun57620: for(var _fun57620_ip = 0; ; ) switch(_fun57620_ip) {
 0:
                zulu = this;
                mike = zulu.getChannelOverrides;
                entity = argFoo;
                mike = mike.bind(zulu)(entity);
                entity = argBar;
                zulu = mike[entity];
                entity = null;
                tango = entity == zulu;
                mike = undefined;
                if(tango) { _fun57620_ip = 40; continue _fun57620 }
 35:
                mike = zulu.flags;
 40:
                zulu = entity != mike;
                entity = 0;
                if(!zulu) { _fun57620_ip = 52; continue _fun57620 }
 49:
                entity = mike;
 52:
                return entity;
            }
        };
        report['value'] = golf;
        entity[26] = report;
        report = {};
        golf = 'getChannelFlags';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            entity = argFoo;
            tango = this;
            zulu = tango.getChannelIdFlags;
            mike = entity.guild_id;
            entity = entity.id;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        report['value'] = golf;
        entity[27] = report;
        report = {};
        golf = 'getNewForumThreadsCreated';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun57622: for(var _fun57622_ip = 0; ; ) switch(_fun57622_ip) {
 0:
                zulu = argFoo;
                mike = this;
                tango = mike.getChannelOverrides;
                entity = zulu.guild_id;
                tango = tango.bind(mike)(entity);
                entity = zulu.id;
                tango = tango[entity];
                report = null;
                if(!(report != tango)) { _fun57622_ip = 148; continue _fun57622 }
 37:
                entity = tango.flags;
                if(!(report != entity)) { _fun57622_ip = 148; continue _fun57622 }
 46:
                oscar = _closure1_slot2;
                report = _closure1_slot3;
                options = 17;
                report = report[options];
                golf = undefined;
                offset = oscar.bind(golf)(report);
                verify = offset.hasFlag;
                oscar = tango.flags;
                report = _closure1_slot19;
                report = report.NEW_FORUM_THREADS_ON;
                report = verify.bind(offset)(oscar, report);
                if(report) { _fun57622_ip = 182; continue _fun57622 }
 101:
                oscar = _closure1_slot2;
                report = _closure1_slot3;
                report = report[options];
                oscar = oscar.bind(golf)(report);
                report = oscar.hasFlag;
                tango = tango.flags;
                entity = _closure1_slot19;
                entity = entity.NEW_FORUM_THREADS_OFF;
                entity = report.bind(oscar)(tango, entity);
                if(entity) { _fun57622_ip = 178; continue _fun57622 }
 148:
                entity = mike.resolvedMessageNotifications;
                mike = entity.bind(mike)(zulu);
                entity = _closure1_slot16;
                entity = entity.ALL_MESSAGES;
                entity = mike === entity;
                return entity;
 178:
                entity = false;
                return entity;
 182:
                entity = true;
                return entity;
            }
        };
        report['value'] = golf;
        entity[28] = report;
        report = {};
        golf = 'isOptInEnabled';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun57623: for(var _fun57623_ip = 0; ; ) switch(_fun57623_ip) {
 0:
                report = argFoo;
                tango = this;
                entity = null;
                entity = entity != report;
                if(!entity) { _fun57623_ip = 111; continue _fun57623 }
 15:
                oscar = _closure1_slot9;
                mike = oscar.isFullServerPreview;
                mike = mike.bind(oscar)(report);
                if(mike) { _fun57623_ip = 93; continue _fun57623 }
 36:
                golf = _closure1_slot2;
                oscar = _closure1_slot3;
                mike = 17;
                oscar = oscar[mike];
                mike = undefined;
                golf = golf.bind(mike)(oscar);
                oscar = golf.hasFlag;
                mike = tango.getGuildFlags;
                tango = mike.bind(tango)(report);
                mike = _closure1_slot20;
                mike = mike.OPT_IN_CHANNELS_ON;
                mike = oscar.bind(golf)(tango, mike);
                _fun57623_ip = 108; continue _fun57623;
 93:
                tango = _closure1_slot9;
                zulu = tango.isOptInEnabled;
                mike = zulu.bind(tango)(report);
 108:
                entity = mike;
 111:
                return entity;
            }
        };
        report['value'] = golf;
        entity[29] = report;
        report = {};
        golf = 'isChannelRecordOrParentOptedIn';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            _fun57624: for(var _fun57624_ip = 0; ; ) switch(_fun57624_ip) {
 0:
                tango = argFoo;
                options = argBar;
                golf = this;
                report = null;
                entity = report != tango;
                if(!entity) { _fun57624_ip = 27; continue _fun57624 }
 18:
                mike = tango.guild_id;
                entity = report != mike;
 27:
                if(!entity) { _fun57624_ip = 99; continue _fun57624 }
 30:
                oscar = golf.isChannelOptedIn;
                zulu = tango.guild_id;
                mike = tango.id;
                mike = oscar.bind(golf)(zulu, mike, options);
                if(mike) { _fun57624_ip = 96; continue _fun57624 }
 56:
                zulu = tango.parent_id;
                zulu = report != zulu;
                if(!zulu) { _fun57624_ip = 93; continue _fun57624 }
 69:
                oscar = golf.isChannelOptedIn;
                report = tango.guild_id;
                tango = tango.parent_id;
                zulu = oscar.bind(golf)(report, tango, options);
 93:
                mike = zulu;
 96:
                entity = mike;
 99:
                return entity;
            }
        };
        report['value'] = golf;
        entity[30] = report;
        report = {};
        golf = 'isChannelOrParentOptedIn';
        report['key'] = golf;
        golf = function(argFoo, argBar, argBaz) { // Original name: value
            tango = this;
            zulu = tango.isChannelRecordOrParentOptedIn;
            report = _closure1_slot13;
            mike = report.getChannel;
            entity = argBar;
            mike = mike.bind(report)(entity);
            entity = argBaz;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        report['value'] = golf;
        entity[31] = report;
        report = {};
        golf = 'isChannelOptedIn';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            _fun57626: for(var _fun57626_ip = 0; ; ) switch(_fun57626_ip) {
 0:
                tango = argFoo;
                zulu = argBar;
                mike = arguments[2];
                golf = this;
                oscar = undefined;
                if(!(mike === oscar)) { _fun57626_ip = 20; continue _fun57626 }
 18:
                mike = false;
 20:
                report = null;
                if(!(report != tango)) { _fun57626_ip = 188; continue _fun57626 }
 29:
                verify = _closure1_slot9;
                options = verify.isFullServerPreview;
                options = options.bind(verify)(tango);
                if(options) { _fun57626_ip = 170; continue _fun57626 }
 50:
                if(!mike) { _fun57626_ip = 65; continue _fun57626 }
 53:
                mike = _closure1_slot34;
                mike = mike[tango];
                if(!(report == mike)) { _fun57626_ip = 150; continue _fun57626 }
 65:
                mike = golf.getChannelOverrides;
                mike = mike.bind(golf)(tango);
                golf = mike[zulu];
                options = report == golf;
                mike = undefined;
                if(options) { _fun57626_ip = 94; continue _fun57626 }
 89:
                mike = golf.flags;
 94:
                report = report != mike;
                golf = 0;
                if(!report) { _fun57626_ip = 106; continue _fun57626 }
 103:
                golf = mike;
 106:
                report = _closure1_slot2;
                options = _closure1_slot3;
                mike = 17;
                mike = options[mike];
                oscar = report.bind(oscar)(mike);
                report = oscar.hasFlag;
                mike = _closure1_slot19;
                mike = mike.OPT_IN_ENABLED;
                mike = report.bind(oscar)(golf, mike);
                return mike;
 150:
                mike = _closure1_slot34;
                report = mike[tango];
                mike = report.has;
                mike = mike.bind(report)(zulu);
                return mike;
 170:
                mike = _closure1_slot9;
                entity = mike.isChannelOptedIn;
                entity = entity.bind(mike)(tango, zulu);
                return entity;
 188:
                entity = false;
                return entity;
            }
        };
        report['value'] = golf;
        entity[32] = report;
        report = {};
        golf = 'getOptedInChannels';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun57627: for(var _fun57627_ip = 0; ; ) switch(_fun57627_ip) {
 0:
                report = argFoo;
                mike = _closure1_slot9;
                entity = mike.isFullServerPreview;
                entity = entity.bind(mike)(report);
                if(entity) { _fun57627_ip = 44; continue _fun57627 }
 24:
                entity = _closure1_slot30;
                entity = entity[report];
                mike = null;
                if(!(mike == entity)) { _fun57627_ip = 42; continue _fun57627 }
 38:
                entity = _closure1_slot32;
 42:
                _fun57627_ip = 72; continue _fun57627;
 44:
                tango = _closure1_slot9;
                mike = tango.getViewingChannels;
                mike = mike.bind(tango)(report);
                tango = null;
                if(!(tango == mike)) { _fun57627_ip = 69; continue _fun57627 }
 65:
                mike = _closure1_slot32;
 69:
                entity = mike;
 72:
                return entity;
            }
        };
        report['value'] = golf;
        entity[33] = report;
        report = {};
        golf = 'getOptedInChannelsWithPendingUpdates';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            mike = _closure1_slot34;
            entity = argFoo;
            entity = mike[entity];
            return entity;
        };
        report['value'] = golf;
        entity[34] = report;
        report = {};
        golf = 'getPendingChannelUpdates';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            mike = _closure1_slot33;
            entity = argFoo;
            entity = mike[entity];
            return entity;
        };
        report['value'] = golf;
        entity[35] = report;
        report = {};
        golf = 'getGuildFavorites';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun57630: for(var _fun57630_ip = 0; ; ) switch(_fun57630_ip) {
 0:
                zulu = argFoo;
                oscar = this;
                var _closure3_slot0 = zulu;
                report = _closure1_slot9;
                entity = report.isFullServerPreview;
                report = entity.bind(report)(zulu);
                entity = null;
                if(report) { _fun57630_ip = 129; continue _fun57630 }
 35:
                report = _closure1_slot22;
                report = report[zulu];
                if(!(entity == report)) { _fun57630_ip = 119; continue _fun57630 }
 47:
                options = _closure1_slot1;
                golf = _closure1_slot3;
                report = 16;
                golf = golf[report];
                report = undefined;
                options = options.bind(report)(golf);
                golf = options.filter;
                report = oscar.getChannelOverrides;
                oscar = report.bind(oscar)(zulu);
                report = function(argFoo) {
                    _fun57631: for(var _fun57631_ip = 0; ; ) switch(_fun57631_ip) {
 0:
                        mike = argFoo;
                        tango = _closure1_slot2;
                        zulu = _closure1_slot3;
                        entity = 17;
                        entity = zulu[entity];
                        zulu = undefined;
                        options = tango.bind(zulu)(entity);
                        golf = options.hasFlag;
                        entity = mike.flags;
                        tango = null;
                        verify = tango != entity;
                        oscar = 0;
                        if(!verify) { _fun57631_ip = 53; continue _fun57631 }
 50:
                        oscar = entity;
 53:
                        entity = _closure1_slot19;
                        entity = entity.FAVORITED;
                        entity = golf.bind(options)(oscar, entity);
                        if(!entity) { _fun57631_ip = 116; continue _fun57631 }
 72:
                        oscar = _closure1_slot13;
                        report = oscar.getChannel;
                        mike = mike.channel_id;
                        mike = report.bind(oscar)(mike);
                        tango = tango == mike;
                        zulu = undefined;
                        if(tango) { _fun57631_ip = 105; continue _fun57631 }
 100:
                        zulu = mike.guild_id;
 105:
                        mike = _closure3_slot0;
                        entity = zulu === mike;
 116:
                        return entity;
                    }
                };
                golf = golf.bind(options)(oscar, report);
                report = _closure1_slot22;
                oscar = golf.map;
                tango = function(argFoo) {
                    entity = argFoo;
                    entity = entity.channel_id;
                    return entity;
                };
                tango = oscar.bind(golf)(tango);
                report[zulu] = tango;
 119:
                mike = _closure1_slot22;
                mike = mike[zulu];
                return mike;
 129:
                return entity;
            }
        };
        report['value'] = golf;
        entity[36] = report;
        report = {};
        golf = 'isFavorite';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            _fun57633: for(var _fun57633_ip = 0; ; ) switch(_fun57633_ip) {
 0:
                tango = argFoo;
                zulu = this;
                mike = _closure1_slot9;
                entity = mike.isFullServerPreview;
                entity = entity.bind(mike)(tango);
                entity = !entity;
                if(!entity) { _fun57633_ip = 71; continue _fun57633 }
 30:
                mike = zulu.getGuildFavorites;
                report = mike.bind(zulu)(tango);
                mike = null;
                mike = mike == report;
                zulu = undefined;
                if(mike) { _fun57633_ip = 65; continue _fun57633 }
 52:
                tango = report.includes;
                mike = argBar;
                zulu = tango.bind(report)(mike);
 65:
                mike = true;
                entity = mike === zulu;
 71:
                return entity;
            }
        };
        report['value'] = golf;
        entity[37] = report;
        report = {};
        golf = 'isMessagesFavorite';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun57634: for(var _fun57634_ip = 0; ; ) switch(_fun57634_ip) {
 0:
                zulu = this;
                entity = zulu.getChannelOverrides;
                mike = null;
                zulu = entity.bind(zulu)(mike);
                entity = argFoo;
                zulu = zulu[entity];
                tango = mike == zulu;
                report = undefined;
                entity = undefined;
                if(tango) { _fun57634_ip = 39; continue _fun57634 }
 34:
                entity = zulu.flags;
 39:
                mike = mike != entity;
                tango = 0;
                if(!mike) { _fun57634_ip = 51; continue _fun57634 }
 48:
                tango = entity;
 51:
                zulu = _closure1_slot2;
                oscar = _closure1_slot3;
                mike = 17;
                mike = oscar[mike];
                zulu = zulu.bind(report)(mike);
                mike = zulu.hasFlag;
                entity = _closure1_slot19;
                entity = entity.FAVORITED;
                entity = mike.bind(zulu)(tango, entity);
                return entity;
            }
        };
        report['value'] = golf;
        entity[38] = report;
        report = {};
        golf = 'isAddedToMessages';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun57635: for(var _fun57635_ip = 0; ; ) switch(_fun57635_ip) {
 0:
                zulu = this;
                entity = zulu.getChannelOverrides;
                mike = null;
                zulu = entity.bind(zulu)(mike);
                entity = argFoo;
                zulu = zulu[entity];
                tango = mike == zulu;
                report = undefined;
                entity = undefined;
                if(tango) { _fun57635_ip = 39; continue _fun57635 }
 34:
                entity = zulu.flags;
 39:
                mike = mike != entity;
                tango = 0;
                if(!mike) { _fun57635_ip = 51; continue _fun57635 }
 48:
                tango = entity;
 51:
                zulu = _closure1_slot2;
                oscar = _closure1_slot3;
                mike = 17;
                mike = oscar[mike];
                zulu = zulu.bind(report)(mike);
                mike = zulu.hasFlag;
                entity = _closure1_slot19;
                entity = entity.OPT_IN_ENABLED;
                entity = mike.bind(zulu)(tango, entity);
                return entity;
            }
        };
        report['value'] = golf;
        entity[39] = report;
        report = {};
        golf = 'getAddedToMessages';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun57636: for(var _fun57636_ip = 0; ; ) switch(_fun57636_ip) {
 0:
                entity = _closure1_slot30;
                entity = entity.null;
                zulu = null;
                if(!(zulu == entity)) { _fun57636_ip = 23; continue _fun57636 }
 19:
                entity = _closure1_slot32;
 23:
                return entity;
            }
        };
        report['value'] = golf;
        entity[40] = report;
        report = {};
        golf = 'accountNotificationSettings';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = _closure1_slot25;
            return entity;
        };
        report['get'] = golf;
        entity[41] = report;
        report = {};
        golf = 'useNewNotifications';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = _closure1_slot23;
            return entity;
        };
        report['get'] = golf;
        entity[42] = report;
        report = {};
        golf = 'getGuildUnreadSetting';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun57639: for(var _fun57639_ip = 0; ; ) switch(_fun57639_ip) {
 0:
                report = this;
                entity = _closure1_slot49;
                tango = undefined;
                entity = entity.bind(tango)();
                if(entity) { _fun57639_ip = 31; continue _fun57639 }
 19:
                entity = _closure1_slot18;
                entity = entity.ALL_MESSAGES;
                return entity;
 31:
                zulu = report.getGuildFlags;
                entity = argFoo;
                report = zulu.bind(report)(entity);
                zulu = _closure1_slot2;
                entity = _closure1_slot3;
                oscar = 17;
                entity = entity[oscar];
                golf = zulu.bind(tango)(entity);
                zulu = golf.hasFlag;
                entity = _closure1_slot20;
                entity = entity.UNREADS_ALL_MESSAGES;
                entity = zulu.bind(golf)(report, entity);
                if(entity) { _fun57639_ip = 152; continue _fun57639 }
 90:
                zulu = _closure1_slot2;
                entity = _closure1_slot3;
                entity = entity[oscar];
                tango = zulu.bind(tango)(entity);
                zulu = tango.hasFlag;
                entity = _closure1_slot20;
                entity = entity.UNREADS_ONLY_MENTIONS;
                entity = zulu.bind(tango)(report, entity);
                zulu = _closure1_slot18;
                if(entity) { _fun57639_ip = 144; continue _fun57639 }
 136:
                entity = zulu.UNSET;
                _fun57639_ip = 150; continue _fun57639;
 144:
                entity = zulu.ONLY_MENTIONS;
 150:
                _fun57639_ip = 162; continue _fun57639;
 152:
                mike = _closure1_slot18;
                entity = mike.ALL_MESSAGES;
 162:
                return entity;
            }
        };
        report['value'] = golf;
        entity[43] = report;
        report = {};
        golf = 'resolveGuildUnreadSetting';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun57640: for(var _fun57640_ip = 0; ; ) switch(_fun57640_ip) {
 0:
                mike = argFoo;
                tango = this;
                zulu = tango.getGuildFlags;
                entity = mike.id;
                golf = zulu.bind(tango)(entity);
                entity = _closure1_slot49;
                oscar = undefined;
                entity = entity.bind(oscar)();
                if(entity) { _fun57640_ip = 53; continue _fun57640 }
 38:
                entity = _closure1_slot18;
                entity = entity.ALL_MESSAGES;
                _fun57640_ip = 209; continue _fun57640;
 53:
                report = _closure1_slot2;
                tango = _closure1_slot3;
                options = 17;
                tango = tango[options];
                verify = report.bind(oscar)(tango);
                report = verify.hasFlag;
                tango = _closure1_slot20;
                tango = tango.UNREADS_ALL_MESSAGES;
                tango = report.bind(verify)(golf, tango);
                if(tango) { _fun57640_ip = 196; continue _fun57640 }
 98:
                report = _closure1_slot2;
                tango = _closure1_slot3;
                tango = tango[options];
                oscar = report.bind(oscar)(tango);
                report = oscar.hasFlag;
                tango = _closure1_slot20;
                tango = tango.UNREADS_ONLY_MENTIONS;
                tango = report.bind(oscar)(golf, tango);
                if(tango) { _fun57640_ip = 184; continue _fun57640 }
 140:
                tango = mike.defaultMessageNotifications;
                mike = _closure1_slot16;
                mike = mike.ALL_MESSAGES;
                if(!(tango !== mike)) { _fun57640_ip = 172; continue _fun57640 }
 160:
                mike = _closure1_slot18;
                mike = mike.ONLY_MENTIONS;
                _fun57640_ip = 182; continue _fun57640;
 172:
                tango = _closure1_slot18;
                mike = tango.ALL_MESSAGES;
 182:
                _fun57640_ip = 194; continue _fun57640;
 184:
                tango = _closure1_slot18;
                mike = tango.ONLY_MENTIONS;
 194:
                _fun57640_ip = 206; continue _fun57640;
 196:
                zulu = _closure1_slot18;
                mike = zulu.ALL_MESSAGES;
 206:
                entity = mike;
 209:
                return entity;
            }
        };
        report['value'] = golf;
        entity[44] = report;
        report = {};
        golf = 'getChannelRecordUnreadSetting';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            entity = argFoo;
            tango = this;
            zulu = tango.getChannelUnreadSetting;
            mike = entity.guild_id;
            entity = entity.id;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        report['value'] = golf;
        entity[45] = report;
        report = {};
        golf = 'getChannelUnreadSetting';
        report['key'] = golf;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun57642: for(var _fun57642_ip = 0; ; ) switch(_fun57642_ip) {
 0:
                tango = this;
                zulu = tango.getChannelIdFlags;
                mike = argFoo;
                entity = argBar;
                report = zulu.bind(tango)(mike, entity);
                zulu = _closure1_slot2;
                entity = _closure1_slot3;
                oscar = 17;
                entity = entity[oscar];
                tango = undefined;
                golf = zulu.bind(tango)(entity);
                zulu = golf.hasFlag;
                entity = _closure1_slot19;
                entity = entity.UNREADS_ALL_MESSAGES;
                entity = zulu.bind(golf)(report, entity);
                if(entity) { _fun57642_ip = 133; continue _fun57642 }
 71:
                zulu = _closure1_slot2;
                entity = _closure1_slot3;
                entity = entity[oscar];
                tango = zulu.bind(tango)(entity);
                zulu = tango.hasFlag;
                entity = _closure1_slot19;
                entity = entity.UNREADS_ONLY_MENTIONS;
                entity = zulu.bind(tango)(report, entity);
                zulu = _closure1_slot18;
                if(entity) { _fun57642_ip = 125; continue _fun57642 }
 117:
                entity = zulu.UNSET;
                _fun57642_ip = 131; continue _fun57642;
 125:
                entity = zulu.ONLY_MENTIONS;
 131:
                _fun57642_ip = 143; continue _fun57642;
 133:
                mike = _closure1_slot18;
                entity = mike.ALL_MESSAGES;
 143:
                return entity;
            }
        };
        report['value'] = oscar;
        entity[46] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    offset = report.bind(entity)(offset);
    report = 'UserGuildSettingsStore';
    offset['displayName'] = report;
    report = 'collapsedGuilds';
    offset['persistKey'] = report;
    report = 18;
    report = options[report];
    update = verify.bind(entity)(report);
    report = {};
    romeo = function(argFoo) { // Original name: handleUserGuildSettingsFullUpdate
        entity = argFoo;
        zulu = entity.userGuildSettings;
        mike = zulu.forEach;
        entity = function(argFoo) {
            entity = argFoo;
            tango = _closure1_slot37;
            zulu = entity.guild_id;
            mike = {};
            report = {};
            mike['channel_overrides'] = report;
            golf = mike;
            oscar = entity;
            entity = copyDataProperties(golf, oscar);
            entity = undefined;
            mike = tango.bind(entity)(zulu, mike);
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        entity = undefined;
        return entity;
    };
    report['USER_GUILD_SETTINGS_FULL_UPDATE'] = romeo;
    romeo = function(argFoo) { // Original name: handleUserGuildSettingsGuildUpdate
        entity = argFoo;
        tango = entity.guildId;
        zulu = entity.settings;
        mike = _closure1_slot39;
        entity = undefined;
        mike = mike.bind(entity)(tango, zulu);
        return entity;
    };
    report['USER_GUILD_SETTINGS_GUILD_UPDATE'] = romeo;
    romeo = function(argFoo) { // Original name: handleUserGuildSettingsGuildAndChannelsUpdate
        entity = argFoo;
        tango = entity.guildId;
        mike = entity.settings;
        report = _closure1_slot39;
        entity = undefined;
        report = report.bind(entity)(tango, mike);
        zulu = _closure1_slot41;
        mike = mike.channel_overrides;
        mike = zulu.bind(entity)(tango, mike);
        return entity;
    };
    report['USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE'] = romeo;
    romeo = function(argFoo) { // Original name: handleUserGuildSettingsChannelUpdate
        _fun57647: for(var _fun57647_ip = 0; ; ) switch(_fun57647_ip) {
 0:
            entity = argFoo;
            report = entity.guildId;
            tango = entity.channelId;
            zulu = entity.settings;
            oscar = null;
            entity = oscar != report;
            if(!entity) { _fun57647_ip = 37; continue _fun57647 }
 28:
            mike = zulu.flags;
            entity = oscar != mike;
 37:
            if(!entity) { _fun57647_ip = 80; continue _fun57647 }
 40:
            mike = _closure1_slot33;
            entity = {};
            verify = mike[report];
            offset = entity;
            oscar = copyDataProperties(offset, verify);
            oscar = {};
            golf = zulu.flags;
            oscar['flags'] = golf;
            entity[tango] = oscar;
            mike[report] = entity;
 80:
            mike = _closure1_slot40;
            entity = undefined;
            mike = mike.bind(entity)(report, tango, zulu);
            return entity;
        }
    };
    report['USER_GUILD_SETTINGS_CHANNEL_UPDATE'] = romeo;
    romeo = function(argFoo) { // Original name: handleUserGuildSettingsChannelUpdateBulk
        _fun57648: for(var _fun57648_ip = 0; ; ) switch(_fun57648_ip) {
 0:
            entity = argFoo;
            report = entity.guildId;
            tango = entity.overrides;
            entity = null;
            entity = entity != report;
            if(!entity) { _fun57648_ip = 44; continue _fun57648 }
 23:
            zulu = _closure1_slot9;
            mike = zulu.isFullServerPreview;
            mike = mike.bind(zulu)(report);
            entity = !mike;
 44:
            if(!entity) { _fun57648_ip = 64; continue _fun57648 }
 47:
            zulu = _closure1_slot41;
            mike = undefined;
            mike = zulu.bind(mike)(report, tango);
            entity = true;
 64:
            return entity;
        }
    };
    report['USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK'] = romeo;
    romeo = function(argFoo) { // Original name: handleConnectionOpen
        _fun57649: for(var _fun57649_ip = 0; ; ) switch(_fun57649_ip) {
 0:
            verify = argFoo;
            tango = _closure1_slot47;
            zulu = verify.notificationSettings;
            entity = undefined;
            zulu = tango.bind(entity)(zulu);
            tango = _closure1_slot26;
            zulu = tango.reset;
            zulu = zulu.bind(tango)();
            tango = _closure1_slot27;
            zulu = tango.reset;
            zulu = zulu.bind(tango)();
            zulu = verify.userGuildSettings;
            zulu = zulu.partial;
            if(zulu) { _fun57649_ip = 86; continue _fun57649 }
 68:
            zulu = {};
            _closure1_slot21 = zulu;
            zulu = {};
            _closure1_slot29 = zulu;
            zulu = {};
            _closure1_slot30 = zulu;
 86:
            zulu = global;
            zulu = zulu.Set;
            tango = zulu.prototype;
            tango = Object.create(tango, {constructor: {value: zulu}});
            backup = tango;
            zulu = new backup[zulu](foxtrot);
            golf = zulu instanceof Object ? zulu : tango;
            var _closure2_slot0 = golf;
            verify = verify.userGuildSettings;
            offset = verify.entries;
            verify = offset.forEach;
            mike = function(argFoo) {
                _fun57650: for(var _fun57650_ip = 0; ; ) switch(_fun57650_ip) {
 0:
                    mike = argFoo;
                    entity = 'channel_overrides';
                    entity = entity in mike;
                    if(entity) { _fun57650_ip = 22; continue _fun57650 }
 14:
                    entity = {};
                    mike['channel_overrides'] = entity;
 22:
                    tango = _closure1_slot37;
                    zulu = mike.guild_id;
                    entity = undefined;
                    zulu = tango.bind(entity)(zulu, mike);
                    tango = mike.guild_id;
                    zulu = null;
                    if(!(zulu != tango)) { _fun57650_ip = 75; continue _fun57650 }
 53:
                    tango = _closure2_slot0;
                    zulu = tango.add;
                    mike = mike.guild_id;
                    mike = zulu.bind(tango)(mike);
 75:
                    return entity;
                }
            };
            mike = verify.bind(offset)(mike);
            report = _closure1_slot21;
            for(mike in report)
 157:
            {
 166:
                yankee = mike;
                verify = golf.has;
                verify = verify.bind(golf)(yankee);
                if(verify) { _fun57649_ip = 157; continue _fun57649 }
 182:
                offset = _closure1_slot38;
                verify = _closure1_slot21;
                verify = verify[yankee];
                verify = offset.bind(entity)(yankee, verify);
                _fun57649_ip = 157; continue _fun57649;
            }
 202:
            return entity;
        }
    };
    report['CONNECTION_OPEN'] = romeo;
    romeo = function(argFoo) { // Original name: handleCacheLoaded
        _fun57651: for(var _fun57651_ip = 0; ; ) switch(_fun57651_ip) {
 0:
            entity = argFoo;
            zulu = entity.userGuildSettings;
            mike = null;
            mike = mike != zulu;
            if(!mike) { _fun57651_ip = 35; continue _fun57651 }
 18:
            zulu = entity.userGuildSettings;
            tango = zulu.length;
            zulu = 0;
            mike = zulu !== tango;
 35:
            if(!mike) { _fun57651_ip = 82; continue _fun57651 }
 38:
            mike = {};
            _closure1_slot21 = mike;
            mike = {};
            _closure1_slot29 = mike;
            mike = {};
            _closure1_slot30 = mike;
            zulu = entity.userGuildSettings;
            mike = zulu.forEach;
            entity = function(argFoo) {
                _fun57652: for(var _fun57652_ip = 0; ; ) switch(_fun57652_ip) {
 0:
                    kilo = argFoo;
                    tango = kilo.guild_id;
                    entity = _closure1_slot21;
                    entity[tango] = kilo;
                    entity = global;
                    zulu = entity.Set;
                    report = zulu.prototype;
                    report = Object.create(report, {constructor: {value: zulu}});
                    sequence = report;
                    zulu = new sequence[zulu](vacuum);
                    oscar = zulu instanceof Object ? zulu : report;
                    entity = entity.Set;
                    zulu = entity.prototype;
                    zulu = Object.create(zulu, {constructor: {value: entity}});
                    sequence = zulu;
                    entity = new sequence[entity](vacuum);
                    zulu = entity instanceof Object ? entity : zulu;
                    foxtrot = kilo.channel_overrides;
                    verify = 17;
                    entity = undefined;
                    options = null;
                    report = 15;
                    for(offset in foxtrot)
 100:
                    {
 112:
                        output = offset;
                        sizing = kilo.channel_overrides;
                        sizing = sizing[output];
                        echo = _closure1_slot0;
                        result = _closure1_slot3;
                        result = result[report];
                        echo = echo.bind(entity)(result);
                        result = echo.computeIsMuted;
                        result = result.bind(echo)(sizing);
                        if(!result) { _fun57652_ip = 166; continue _fun57652 }
 156:
                        result = oscar.add;
                        result = result.bind(oscar)(output);
 166:
                        echo = _closure1_slot2;
                        result = _closure1_slot3;
                        result = result[verify];
                        update = echo.bind(entity)(result);
                        echo = update.hasFlag;
                        sizing = sizing.flags;
                        source = options != sizing;
                        result = 0;
                        if(!source) { _fun57652_ip = 206; continue _fun57652 }
 203:
                        result = sizing;
 206:
                        sizing = _closure1_slot19;
                        sizing = sizing.OPT_IN_ENABLED;
                        sizing = echo.bind(update)(result, sizing);
                        if(!sizing) { _fun57652_ip = 100; continue _fun57652 }
 225:
                        sizing = zulu.add;
                        sizing = sizing.bind(zulu)(output);
                        _fun57652_ip = 100; continue _fun57652;
                    }
 240:
                    report = _closure1_slot29;
                    report[tango] = oscar;
                    mike = _closure1_slot30;
                    mike[tango] = zulu;
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
 82:
            entity = undefined;
            return entity;
        }
    };
    report['CACHE_LOADED'] = romeo;
    romeo = function(argFoo) { // Original name: handleOverlayInitialize
        entity = argFoo;
        zulu = entity.allUserGuildSettings;
        offset = zulu.userGuildSettings;
        verify = zulu.mutedChannels;
        var _closure2_slot0 = verify;
        report = zulu.optedInChannelsByGuild;
        var _closure2_slot1 = report;
        zulu = {};
        yankee = zulu;
        entity = copyDataProperties(yankee, offset);
        _closure1_slot21 = zulu;
        zulu = {};
        _closure1_slot29 = zulu;
        zulu = {};
        _closure1_slot30 = zulu;
        tango = _closure1_slot1;
        oscar = _closure1_slot3;
        zulu = 19;
        golf = oscar[zulu];
        entity = undefined;
        options = tango.bind(entity)(golf);
        golf = options.keys;
        verify = golf.bind(options)(verify);
        options = verify.forEach;
        golf = function(argFoo) {
            zulu = argFoo;
            mike = _closure1_slot29;
            entity = global;
            report = entity.Set;
            entity = _closure2_slot0;
            oscar = entity[zulu];
            tango = report.prototype;
            tango = Object.create(tango, {constructor: {value: report}});
            golf = tango;
            entity = new golf[report](oscar, report);
            entity = entity instanceof Object ? entity : tango;
            mike[zulu] = entity;
            entity = undefined;
            return entity;
        };
        golf = options.bind(verify)(golf);
        zulu = oscar[zulu];
        tango = tango.bind(entity)(zulu);
        zulu = tango.keys;
        tango = zulu.bind(tango)(report);
        zulu = tango.forEach;
        mike = function(argFoo) {
            zulu = argFoo;
            mike = _closure1_slot30;
            entity = global;
            report = entity.Set;
            entity = _closure2_slot1;
            oscar = entity[zulu];
            tango = report.prototype;
            tango = Object.create(tango, {constructor: {value: report}});
            golf = tango;
            entity = new golf[report](oscar, report);
            entity = entity instanceof Object ? entity : tango;
            mike[zulu] = entity;
            entity = undefined;
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    report['OVERLAY_INITIALIZE'] = romeo;
    report['GUILD_CREATE'] = yankee;
    report['GUILD_UPDATE'] = yankee;
    romeo = function(argFoo) { // Original name: handleToggleCollapseMuted
        _fun57656: for(var _fun57656_ip = 0; ; ) switch(_fun57656_ip) {
 0:
            entity = argFoo;
            zulu = entity.guildId;
            mike = _closure1_slot21;
            tango = mike[zulu];
            mike = null;
            if(!(mike != tango)) { _fun57656_ip = 35; continue _fun57656 }
 25:
            mike = _closure1_slot21;
            tango = mike[zulu];
            _fun57656_ip = 46; continue _fun57656;
 35:
            report = _closure1_slot44;
            mike = undefined;
            tango = report.bind(mike)(zulu);
 46:
            mike = _closure1_slot21;
            entity = {};
            golf = entity;
            oscar = tango;
            report = copyDataProperties(golf, oscar);
            report = 'guild_id';
            entity[report] = zulu;
            report = tango.hide_muted_channels;
            tango = true;
            tango = tango === report;
            report = !tango;
            tango = 'hide_muted_channels';
            entity[tango] = report;
            mike[zulu] = entity;
            entity = undefined;
            return entity;
        }
    };
    report['GUILD_TOGGLE_COLLAPSE_MUTED'] = romeo;
    report['IMPERSONATE_UPDATE'] = yankee;
    report['IMPERSONATE_STOP'] = yankee;
    yankee = function(argFoo) { // Original name: handleRemovePendingUpdates
        _fun57657: for(var _fun57657_ip = 0; ; ) switch(_fun57657_ip) {
 0:
            entity = argFoo;
            zulu = entity.guildId;
            offset = entity.updates;
            entity = null;
            if(!(entity != zulu)) { _fun57657_ip = 115; continue _fun57657 }
 20:
            mike = _closure1_slot33;
            options = mike[zulu];
            if(!(entity != options)) { _fun57657_ip = 111; continue _fun57657 }
 35:
            oscar = offset;
            mike = 16;
            entity = undefined;
            for(zulu in oscar)
 51:
            {
 60:
                yankee = zulu;
                foxtrot = _closure1_slot1;
                romeo = _closure1_slot3;
                romeo = romeo[mike];
                kilo = foxtrot.bind(entity)(romeo);
                backup = kilo.isEqual;
                foxtrot = offset[yankee];
                romeo = options[yankee];
                romeo = backup.bind(kilo)(foxtrot, romeo);
                if(!romeo) { _fun57657_ip = 51; continue _fun57657 }
 103:
                yankee = delete options[yankee];
                _fun57657_ip = 51; continue _fun57657;
            }
 109:
            return entity;
 111:
            entity = false;
            return entity;
 115:
            entity = false;
            return entity;
        }
    };
    report['USER_GUILD_SETTINGS_REMOVE_PENDING_CHANNEL_UPDATES'] = yankee;
    yankee = function(argFoo) { // Original name: handleClearPendingUpdates
        _fun57658: for(var _fun57658_ip = 0; ; ) switch(_fun57658_ip) {
 0:
            entity = argFoo;
            mike = entity.guildId;
            entity = null;
            if(!(entity != mike)) { _fun57658_ip = 37; continue _fun57658 }
 14:
            zulu = _closure1_slot33;
            zulu = delete zulu[mike];
            entity = _closure1_slot34;
            entity = delete entity[mike];
            entity = undefined;
            return entity;
 37:
            entity = false;
            return entity;
        }
    };
    report['CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES'] = yankee;
    yankee = function(argFoo) { // Original name: handleNotificationSettingsUpdate
        entity = argFoo;
        zulu = entity.settings;
        mike = _closure1_slot47;
        entity = undefined;
        mike = mike.bind(entity)(zulu);
        return entity;
    };
    report['NOTIFICATION_SETTINGS_UPDATE'] = yankee;
    yankee = function() { // Original name: GUILD_MUTE_EXPIRED
        entity = true;
        return entity;
    };
    report['GUILD_MUTE_EXPIRED'] = yankee;
    oscar = function() { // Original name: CHANNEL_MUTE_EXPIRED
        entity = true;
        return entity;
    };
    report['CHANNEL_MUTE_EXPIRED'] = oscar;
    oscar = offset.prototype;
    oscar = Object.create(oscar, {constructor: {value: offset}});
    source = oscar;
    echo = report;
    report = new source[offset](update, echo, result);
    report = report instanceof Object ? report : oscar;
    oscar = 22;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'stores/UserGuildSettingsStore.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['default'] = report;
    zulu['getGuildDefaults'] = tango;
    zulu['convertChannelOverridesToMap'] = mike;
    return entity;
})();