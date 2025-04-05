// app/stores/UserGuildSettingsStore.tsx
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
            _closure1_slot35 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot35 = entity;
    entity = function(argFoo, argBar) { // Original name: updateUserGuildSettingsInternal
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argFoo;
            golfie = argBar;
            entity = _closure1_slot21;
            verify = entity[zuuluu];
            oscard = null;
            tangon = oscard == verify;
            entity = undefined;
            foxtra = undefined;
            if(tangon) { _fun00004_ip = 38; continue _fun00003 }
 32:
            foxtra = verify.channel_overrides;
 38:
            if(!(oscard == foxtra)) { _fun00004_ip = 44; continue _fun00003 }
 42:
            foxtra = {};
 44:
            option = _closure1_slot44;
            tangon = golfie.channel_overrides;
            option = option.bind(entity)(tangon);
            tangon = {};
            offset = _closure1_slot43;
            result = offset.bind(entity)(zuuluu);
            echoed = tangon;
            offset = copyDataProperties(echoed, result);
            echoed = tangon;
            result = verify;
            verify = copyDataProperties(echoed, result);
            echoed = tangon;
            result = golfie;
            golfie = copyDataProperties(echoed, result);
            golfie = 'channel_overrides';
            tangon[golfie] = option;
            option = _closure1_slot26;
            golfie = option.clearTimer;
            golfie = golfie.bind(option)(zuuluu);
            option = _closure1_slot1;
            verify = _closure1_slot3;
            golfie = 16;
            offset = verify[golfie];
            romeon = option.bind(entity)(offset);
            yankee = romeon.forEach;
            offset = function(argFoo) {
                zuuluu = _closure1_slot27;
                michal = zuuluu.clearTimer;
                entity = argFoo;
                entity = entity.channel_id;
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            };
            offset = yankee.bind(romeon)(foxtra, offset);
            offset = _closure1_slot37;
            offset = offset.bind(entity)(zuuluu, tangon);
            offset = _closure1_slot21;
            offset[zuuluu] = tangon;
            yankee = _closure1_slot29;
            romeon = _closure1_slot47;
            offset = _closure1_slot21;
            offset = offset[zuuluu];
            offset = romeon.bind(entity)(offset);
            yankee[zuuluu] = offset;
            golfie = verify[golfie];
            verify = option.bind(entity)(golfie);
            option = verify.filter;
            golfie = tangon.channel_overrides;
            tangon = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    tangon = _closure1_slot2;
                    zuuluu = _closure1_slot3;
                    michal = 17;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = tangon.hasFlag;
                    michal = argFoo;
                    report = michal.flags;
                    michal = null;
                    oscard = michal != report;
                    michal = 0;
                    if(!oscard) { _fun00006_ip = 53; continue _fun00005 }
 50:
                    michal = report;
 53:
                    entity = _closure1_slot19;
                    entity = entity.OPT_IN_ENABLED;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
                }
            };
            offset = option.bind(verify)(golfie, tangon);
            golfie = _closure1_slot30;
            tangon = global;
            verify = tangon.Set;
            option = offset.map;
            report = function(argFoo) {
                entity = argFoo;
                entity = entity.channel_id;
                return entity;
            };
            echoed = option.bind(offset)(report);
            option = verify.prototype;
            option = Object.create(option, {constructor: {value: verify}});
            update = option;
            report = new update[verify](echoed, result);
            report = report instanceof Object ? report : option;
            golfie[zuuluu] = report;
            if(!(oscard != zuuluu)) { _fun00004_ip = 483; continue _fun00003 }
 289:
            option = tangon.Set;
            report = _closure1_slot30;
            echoed = report[zuuluu];
            golfie = option.prototype;
            golfie = Object.create(golfie, {constructor: {value: option}});
            update = golfie;
            report = new update[option](echoed, result);
            report = report instanceof Object ? report : golfie;
            golfie = _closure1_slot33;
            golfie = golfie[zuuluu];
            if(!(oscard == golfie)) { _fun00004_ip = 337; continue _fun00003 }
 335:
            golfie = {};
 337:
            yankee = golfie;
            oscard = 17;
            for(option in yankee)
 351:
            {
 360:
                backup = option;
                foxtra = golfie[backup];
                sizing = _closure1_slot2;
                kiloes = _closure1_slot3;
                kiloes = kiloes[oscard];
                output = sizing.bind(entity)(kiloes);
                sizing = output.hasFlag;
                kiloes = foxtra.flags;
                foxtra = _closure1_slot19;
                foxtra = foxtra.OPT_IN_ENABLED;
                foxtra = sizing.bind(output)(kiloes, foxtra);
                if(foxtra) { _fun00004_ip = 426; continue _fun00003 }
 414:
                foxtra = report.delete;
                foxtra = foxtra.bind(report)(backup);
                _fun00004_ip = 351; continue _fun00003;
 426:
                foxtra = report.add;
                foxtra = foxtra.bind(report)(backup);
                _fun00004_ip = 351; continue _fun00003;
            }
 438:
            oscard = tangon.Object;
            tangon = oscard.keys;
            tangon = tangon.bind(oscard)(golfie);
            oscard = tangon.length;
            tangon = 0;
            if(!(!(oscard > tangon))) { _fun00004_ip = 475; continue _fun00003 }
 465:
            tangon = _closure1_slot34;
            tangon = delete tangon[zuuluu];
            _fun00004_ip = 483; continue _fun00003;
 475:
            tangon = _closure1_slot34;
            tangon[zuuluu] = report;
 483:
            michal = _closure1_slot22;
            michal = delete michal[zuuluu];
            return entity;
        }
    };
    var _closure1_slot36 = entity;
    entity = function(argFoo, argBar) { // Original name: setMuteTimers
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            golfie = argFoo;
            zuuluu = argBar;
            var _closure2_slot0 = golfie;
            tangon = zuuluu.muted;
            entity = true;
            if(!(entity === tangon)) { _fun00008_ip = 66; continue _fun00007 }
 24:
            oscard = _closure1_slot26;
            report = oscard.setTimer;
            tangon = zuuluu.mute_config;
            entity = function() {
                tangon = _closure1_slot38;
                report = _closure2_slot0;
                zuuluu = {};
                entity = false;
                zuuluu['muted'] = entity;
                entity = undefined;
                zuuluu = tangon.bind(entity)(report, zuuluu);
                zuuluu = _closure1_slot1;
                tangon = _closure1_slot3;
                michal = 18;
                michal = tangon[michal];
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.dispatch;
                michal = {};
                oscard = 'GUILD_MUTE_EXPIRED';
                michal['type'] = oscard;
                michal['guildId'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            entity = report.bind(oscard)(golfie, tangon, entity);
            if(!entity) { _fun00008_ip = 66; continue _fun00007 }
 58:
            entity = false;
            zuuluu['muted'] = entity;
 66:
            report = _closure1_slot1;
            tangon = _closure1_slot3;
            entity = 16;
            tangon = tangon[entity];
            entity = undefined;
            report = report.bind(entity)(tangon);
            tangon = report.forEach;
            zuuluu = zuuluu.channel_overrides;
            michal = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    michal = argFoo;
                    var _closure3_slot0 = michal;
                    tangon = michal.muted;
                    zuuluu = true;
                    if(!(zuuluu === tangon)) { _fun00010_ip = 68; continue _fun00009 }
 21:
                    oscard = _closure1_slot27;
                    report = oscard.setTimer;
                    tangon = michal.channel_id;
                    zuuluu = michal.mute_config;
                    entity = function() {
                        golfie = _closure1_slot39;
                        oscard = _closure2_slot0;
                        report = _closure3_slot0;
                        tangon = report.channel_id;
                        zuuluu = {};
                        entity = false;
                        zuuluu['muted'] = entity;
                        entity = undefined;
                        zuuluu = golfie.bind(entity)(oscard, tangon, zuuluu);
                        zuuluu = _closure1_slot1;
                        tangon = _closure1_slot3;
                        michal = 18;
                        michal = tangon[michal];
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.dispatch;
                        michal = {};
                        golfie = 'CHANNEL_MUTE_EXPIRED';
                        michal['type'] = golfie;
                        michal['guildId'] = oscard;
                        report = report.channel_id;
                        michal['channelId'] = report;
                        michal = zuuluu.bind(tangon)(michal);
                        return entity;
                    };
                    entity = report.bind(oscard)(tangon, zuuluu, entity);
                    if(!entity) { _fun00010_ip = 68; continue _fun00009 }
 60:
                    entity = false;
                    michal['muted'] = entity;
 68:
                    entity = undefined;
                    return entity;
                }
            };
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        }
    };
    var _closure1_slot37 = entity;
    entity = function(argFoo, argBar) { // Original name: updateUserGuildSettings
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            tangon = argFoo;
            michal = _closure1_slot21;
            golfie = michal[tangon];
            zuuluu = _closure1_slot36;
            michal = {};
            oscard = null;
            option = oscard == golfie;
            entity = undefined;
            report = undefined;
            if(option) { _fun00012_ip = 39; continue _fun00011 }
 33:
            report = golfie.channel_overrides;
 39:
            if(!(oscard == report)) { _fun00012_ip = 45; continue _fun00011 }
 43:
            report = {};
 45:
            michal['channel_overrides'] = report;
            verify = argBar;
            offset = michal;
            report = copyDataProperties(offset, verify);
            michal = zuuluu.bind(entity)(tangon, michal);
            return entity;
        }
    };
    var _closure1_slot38 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: updateUserGuildChannelSettings
        tangon = argFoo;
        oscard = argBar;
        report = _closure1_slot42;
        entity = undefined;
        zuuluu = argBaz;
        report = report.bind(entity)(tangon, oscard, zuuluu);
        zuuluu = _closure1_slot41;
        michal = {};
        michal[oscard] = report;
        michal = zuuluu.bind(entity)(tangon, michal);
        return entity;
    };
    var _closure1_slot39 = entity;
    entity = function(argFoo, argBar) { // Original name: updateUserGuildChannelSettingsBulk
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            tangon = argFoo;
            offset = argBar;
            var _closure2_slot0 = tangon;
            var _closure2_slot1 = offset;
            zuuluu = {};
            var _closure2_slot2 = zuuluu;
            report = null;
            entity = report != tangon;
            golfie = null;
            if(!entity) { _fun00014_ip = 44; continue _fun00013 }
 33:
            entity = _closure1_slot33;
            golfie = entity[tangon];
 44:
            if(!(report == golfie)) { _fun00014_ip = 50; continue _fun00013 }
 48:
            golfie = {};
 50:
            var _closure2_slot3 = golfie;
            verify = _closure1_slot1;
            option = _closure1_slot3;
            entity = 19;
            option = option[entity];
            entity = undefined;
            verify = verify.bind(entity)(option);
            option = verify.keys;
            verify = option.bind(verify)(offset);
            option = verify.forEach;
            oscard = function(argFoo) {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    tangon = argFoo;
                    oscard = _closure1_slot42;
                    report = _closure2_slot0;
                    entity = _closure2_slot1;
                    zuuluu = entity[tangon];
                    entity = undefined;
                    report = oscard.bind(entity)(report, tangon, zuuluu);
                    zuuluu = _closure2_slot2;
                    zuuluu[tangon] = report;
                    zuuluu = _closure2_slot3;
                    michal = {};
                    oscard = report.flags;
                    report = null;
                    golfie = report != oscard;
                    report = 0;
                    if(!golfie) { _fun00016_ip = 67; continue _fun00015 }
 64:
                    report = oscard;
 67:
                    michal['flags'] = report;
                    zuuluu[tangon] = michal;
                    return entity;
                }
            };
            oscard = option.bind(verify)(oscard);
            if(!(report != tangon)) { _fun00014_ip = 139; continue _fun00013 }
 108:
            oscard = _closure1_slot33;
            report = {};
            yankee = oscard[tangon];
            romeon = report;
            option = copyDataProperties(romeon, yankee);
            romeon = report;
            yankee = golfie;
            golfie = copyDataProperties(romeon, yankee);
            oscard[tangon] = report;
 139:
            michal = _closure1_slot41;
            michal = michal.bind(entity)(tangon, zuuluu);
            return entity;
        }
    };
    var _closure1_slot40 = entity;
    entity = function(argFoo, argBar) { // Original name: updateMultipleChannels
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            tangon = argFoo;
            golfie = argBar;
            entity = _closure1_slot21;
            verify = entity[tangon];
            oscard = null;
            zuuluu = oscard == verify;
            entity = undefined;
            option = undefined;
            if(zuuluu) { _fun00018_ip = 36; continue _fun00017 }
 30:
            option = verify.channel_overrides;
 36:
            if(!(oscard == option)) { _fun00018_ip = 42; continue _fun00017 }
 40:
            option = {};
 42:
            zuuluu = _closure1_slot36;
            michal = {};
            report = golfie;
            if(!(oscard != verify)) { _fun00018_ip = 80; continue _fun00017 }
 55:
            oscard = {};
            yankee = oscard;
            offset = option;
            option = copyDataProperties(yankee, offset);
            yankee = oscard;
            offset = golfie;
            golfie = copyDataProperties(yankee, offset);
            report = oscard;
 80:
            michal['channel_overrides'] = report;
            michal = zuuluu.bind(entity)(tangon, michal);
            return entity;
        }
    };
    var _closure1_slot41 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: computeNewChannelSettings
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            zuuluu = argBar;
            michal = _closure1_slot21;
            entity = argFoo;
            report = michal[entity];
            entity = {};
            entity['channel_id'] = zuuluu;
            michal = false;
            entity['muted'] = michal;
            tangon = null;
            oscard = tangon == report;
            michal = undefined;
            if(oscard) { _fun00020_ip = 47; continue _fun00019 }
 41:
            michal = report.channel_overrides;
 47:
            if(!(tangon == michal)) { _fun00020_ip = 53; continue _fun00019 }
 51:
            michal = {};
 53:
            golfie = michal[zuuluu];
            option = entity;
            michal = copyDataProperties(option, golfie);
            golfie = argBaz;
            option = entity;
            michal = copyDataProperties(option, golfie);
            return entity;
        }
    };
    var _closure1_slot42 = entity;
    tangon = function(argFoo) { // Original name: getGuildDefaults
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            tangon = _closure1_slot14;
            zuuluu = tangon.getGuild;
            michal = argFoo;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = null;
            if(!(michal == zuuluu)) { _fun00022_ip = 38; continue _fun00021 }
 26:
            michal = _closure1_slot16;
            michal = michal.ALL_MESSAGES;
            _fun00022_ip = 44; continue _fun00021;
 38:
            michal = zuuluu.defaultMessageNotifications;
 44:
            entity = _closure1_slot28;
            entity = entity[michal];
            return entity;
        }
    };
    var _closure1_slot43 = tangon;
    michal = function() { // Original name: convertChannelOverridesToMap
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            report = arguments[0];
            tangon = undefined;
            if(!(report === tangon)) { _fun00024_ip = 11; continue _fun00023 }
 9:
            report = {};
 11:
            entity = global;
            entity = entity.Array;
            michal = report instanceof entity;
            entity = report;
            if(!michal) { _fun00024_ip = 68; continue _fun00023 }
 29:
            zuuluu = _closure1_slot1;
            oscard = _closure1_slot3;
            michal = 16;
            michal = oscard[michal];
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.keyBy;
            michal = 'channel_id';
            entity = zuuluu.bind(tangon)(report, michal);
 68:
            return entity;
        }
    };
    var _closure1_slot44 = michal;
    entity = function(argFoo) { // Original name: getGuildSettings
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            tangon = argFoo;
            entity = _closure1_slot21;
            entity = entity[tangon];
            zuuluu = null;
            if(!(zuuluu == entity)) { _fun00026_ip = 31; continue _fun00025 }
 20:
            zuuluu = _closure1_slot43;
            michal = undefined;
            entity = zuuluu.bind(michal)(tangon);
 31:
            return entity;
        }
    };
    var _closure1_slot45 = entity;
    entity = function(argFoo) { // Original name: processAccountNotificationSettings
        zuuluu = argFoo;
        report = _closure1_slot2;
        oscard = _closure1_slot3;
        tangon = 17;
        golfie = oscard[tangon];
        entity = undefined;
        offset = report.bind(entity)(golfie);
        verify = offset.hasFlag;
        option = zuuluu.flags;
        golfie = _closure1_slot17;
        golfie = golfie.USE_NEW_NOTIFICATIONS;
        golfie = verify.bind(offset)(option, golfie);
        _closure1_slot23 = golfie;
        tangon = oscard[tangon];
        golfie = report.bind(entity)(tangon);
        oscard = golfie.hasFlag;
        report = zuuluu.flags;
        tangon = _closure1_slot17;
        tangon = tangon.MENTION_ON_ALL_MESSAGES;
        tangon = oscard.bind(golfie)(report, tangon);
        _closure1_slot24 = tangon;
        _closure1_slot25 = zuuluu;
        return entity;
    };
    var _closure1_slot46 = entity;
    entity = function(argFoo) { // Original name: mutedChannelsForGuild
        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
            tangon = argFoo;
            entity = global;
            zuuluu = entity.Set;
            report = tangon.channel_overrides;
            entity = null;
            report = entity != report;
            if(!report) { _fun00028_ip = 103; continue _fun00027 }
 28:
            golfie = _closure1_slot1;
            oscard = _closure1_slot3;
            report = 16;
            report = oscard[report];
            oscard = undefined;
            report = golfie.bind(oscard)(report);
            tangon = tangon.channel_overrides;
            oscard = report.bind(oscard)(tangon);
            report = oscard.filter;
            tangon = function(argFoo) {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot3;
                entity = 15;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.computeIsMuted;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            report = report.bind(oscard)(tangon);
            tangon = report.map;
            michal = function(argFoo) {
                entity = argFoo;
                entity = entity.channel_id;
                return entity;
            };
            tangon = tangon.bind(report)(michal);
            michal = tangon.value;
            entity = michal.bind(tangon)();
 103:
            michal = zuuluu.prototype;
            michal = Object.create(michal, {constructor: {value: zuuluu}});
            verify = michal;
            option = entity;
            entity = new verify[zuuluu](option, golfie);
            entity = entity instanceof Object ? entity : michal;
            return entity;
        }
    };
    var _closure1_slot47 = entity;
    yankee = function() { // Original name: handleGuildUpdate
        entity = true;
        return entity;
    };
    entity = function() { // Original name: shouldUseNewUnreadBehavior
        _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
            entity = _closure1_slot23;
            if(!entity) { _fun00030_ip = 76; continue _fun00029 }
 10:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 20;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = tangon.bind(michal)(zuuluu);
            report = michal.NotificationsExperiment;
            tangon = report.getCurrentConfig;
            zuuluu = {};
            michal = 'UserGuildSettingsStore';
            zuuluu['location'] = michal;
            michal = {};
            oscard = false;
            michal['autoTrackExposure'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            entity = michal.enabled;
 76:
            return entity;
        }
    };
    var _closure1_slot48 = entity;
    report = global;
    foxtra = report.Object;
    romeon = foxtra.defineProperty;
    offset = {};
    entity = true;
    offset['value'] = entity;
    entity = '__esModule';
    entity = romeon.bind(foxtra)(zuuluu, entity, offset);
    foxtra = 0;
    offset = option[foxtra];
    entity = undefined;
    offset = verify.bind(entity)(offset);
    var _closure1_slot4 = offset;
    offset = 1;
    offset = option[offset];
    offset = verify.bind(entity)(offset);
    var _closure1_slot5 = offset;
    offset = 2;
    offset = option[offset];
    offset = verify.bind(entity)(offset);
    var _closure1_slot6 = offset;
    offset = 3;
    offset = option[offset];
    offset = verify.bind(entity)(offset);
    var _closure1_slot7 = offset;
    offset = 4;
    offset = option[offset];
    offset = verify.bind(entity)(offset);
    var _closure1_slot8 = offset;
    offset = 5;
    offset = option[offset];
    offset = verify.bind(entity)(offset);
    var _closure1_slot9 = offset;
    offset = 6;
    offset = option[offset];
    offset = verify.bind(entity)(offset);
    var _closure1_slot10 = offset;
    offset = 7;
    offset = option[offset];
    offset = golfie.bind(entity)(offset);
    romeon = offset.THREAD_CHANNEL_TYPES;
    var _closure1_slot11 = romeon;
    offset = offset.isPrivate;
    var _closure1_slot12 = offset;
    offset = 8;
    offset = option[offset];
    offset = verify.bind(entity)(offset);
    var _closure1_slot13 = offset;
    offset = 9;
    offset = option[offset];
    offset = verify.bind(entity)(offset);
    var _closure1_slot14 = offset;
    offset = 10;
    offset = option[offset];
    offset = verify.bind(entity)(offset);
    var _closure1_slot15 = offset;
    offset = 11;
    offset = option[offset];
    romeon = golfie.bind(entity)(offset);
    offset = romeon.HighlightSettings;
    backup = romeon.UserNotificationSettings;
    var _closure1_slot16 = backup;
    romeon = 12;
    romeon = option[romeon];
    romeon = golfie.bind(entity)(romeon);
    romeon = romeon.AccountNotificationFlags;
    var _closure1_slot17 = romeon;
    romeon = 13;
    romeon = option[romeon];
    romeon = golfie.bind(entity)(romeon);
    romeon = romeon.UnreadSetting;
    var _closure1_slot18 = romeon;
    romeon = 14;
    romeon = option[romeon];
    romeon = golfie.bind(entity)(romeon);
    kiloes = romeon.ChannelNotificationSettingsFlags;
    var _closure1_slot19 = kiloes;
    romeon = romeon.GuildNotificationSettingsFlags;
    var _closure1_slot20 = romeon;
    romeon = {};
    var _closure1_slot21 = romeon;
    romeon = {};
    var _closure1_slot22 = romeon;
    romeon = false;
    var _closure1_slot23 = romeon;
    var _closure1_slot24 = romeon;
    romeon = {};
    romeon['flags'] = foxtra;
    var _closure1_slot25 = romeon;
    romeon = 15;
    foxtra = option[romeon];
    foxtra = verify.bind(entity)(foxtra);
    kiloes = foxtra.prototype;
    kiloes = Object.create(kiloes, {constructor: {value: foxtra}});
    source = kiloes;
    foxtra = new source[foxtra](update);
    foxtra = foxtra instanceof Object ? foxtra : kiloes;
    var _closure1_slot26 = foxtra;
    romeon = option[romeon];
    romeon = verify.bind(entity)(romeon);
    foxtra = romeon.prototype;
    foxtra = Object.create(foxtra, {constructor: {value: romeon}});
    source = foxtra;
    romeon = new source[romeon](update);
    romeon = romeon instanceof Object ? romeon : foxtra;
    var _closure1_slot27 = romeon;
    sizing = {'suppress_everyone': false, 'suppress_roles': false, 'mute_scheduled_events': false, 'mobile_push': true, 'muted': false, 'message_notifications': null, 'flags': 0, 'channel_overrides': null, 'notify_highlights': null, 'hide_muted_channels': false, 'version': 4294967295, 'mute_config': null};
    romeon = backup.ALL_MESSAGES;
    sizing['message_notifications'] = romeon;
    romeon = {};
    sizing['channel_overrides'] = romeon;
    offset = offset.NULL;
    sizing['notify_highlights'] = offset;
    offset = {};
    foxtra = backup.ALL_MESSAGES;
    romeon = {};
    update = romeon;
    echoed = sizing;
    kiloes = copyDataProperties(update, echoed);
    output = backup.ALL_MESSAGES;
    kiloes = 'message_notifications';
    romeon[kiloes] = output;
    offset[foxtra] = romeon;
    foxtra = backup.ONLY_MENTIONS;
    romeon = {};
    update = romeon;
    echoed = sizing;
    sizing = copyDataProperties(update, echoed);
    backup = backup.ONLY_MENTIONS;
    romeon[kiloes] = backup;
    offset[foxtra] = romeon;
    var _closure1_slot28 = offset;
    offset = {};
    var _closure1_slot29 = offset;
    offset = {};
    var _closure1_slot30 = offset;
    offset = report.Set;
    romeon = offset.prototype;
    romeon = Object.create(romeon, {constructor: {value: offset}});
    source = romeon;
    offset = new source[offset](update);
    offset = offset instanceof Object ? offset : romeon;
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
    report = option[report];
    report = verify.bind(entity)(report);
    offset = report.PersistedStore;
    report = function(argFoo) {
        tangon = function() { // Original name: UserGuildSettingsStoreClass
            _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                tangon = this;
                zuuluu = undefined;
                report = undefined;
                entity = _closure1_slot4;
                michal = _closure2_slot0;
                entity = entity.bind(zuuluu)(tangon, michal);
                entity = _closure1_slot7;
                verify = entity.bind(zuuluu)(michal);
                michal = _closure1_slot6;
                entity = _closure1_slot35;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00032_ip = 69; continue _fun00031 }
 51:
                golfie = verify.apply;
                report = arguments;
                entity = report;
                entity = golfie.bind(verify)(tangon, entity);
                _fun00032_ip = 105; continue _fun00031;
 69:
                golfie = global;
                option = golfie.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot7;
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
        report = _closure1_slot8;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot5;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                tangon = argFoo;
                verify = this;
                option = verify.waitFor;
                foxtra = _closure1_slot15;
                romeon = _closure1_slot14;
                yankee = _closure1_slot9;
                offset = _closure1_slot10;
                backup = verify;
                zuuluu = backup[option](foxtra, romeon, yankee, offset, verify);
                zuuluu = null;
                if(!(zuuluu != tangon)) { _fun00034_ip = 182; continue _fun00033 }
 49:
                oscard = tangon.useNewNotifications;
                report = zuuluu != oscard;
                if(!report) { _fun00034_ip = 65; continue _fun00033 }
 62:
                report = oscard;
 65:
                _closure1_slot23 = report;
                report = 'userGuildSettings';
                report = report in tangon;
                if(!report) { _fun00034_ip = 182; continue _fun00033 }
 80:
                report = tangon.userGuildSettings;
                _closure1_slot21 = report;
                option = _closure1_slot1;
                report = _closure1_slot3;
                oscard = 16;
                golfie = report[oscard];
                report = undefined;
                option = option.bind(report)(golfie);
                golfie = option.mapValues;
                tangon = tangon.optedInChannelsByGuild;
                if(!(zuuluu == tangon)) { _fun00034_ip = 130; continue _fun00033 }
 128:
                tangon = {};
 130:
                zuuluu = function(argFoo) {
                    entity = global;
                    zuuluu = entity.Set;
                    entity = zuuluu.prototype;
                    michal = Object.create(entity, {constructor: {value: zuuluu}});
                    tangon = argFoo;
                    report = michal;
                    entity = new report[zuuluu](tangon, zuuluu);
                    entity = entity instanceof Object ? entity : michal;
                    return entity;
                };
                zuuluu = golfie.bind(option)(tangon, zuuluu);
                _closure1_slot30 = zuuluu;
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot3;
                zuuluu = zuuluu[oscard];
                tangon = tangon.bind(report)(zuuluu);
                zuuluu = tangon.forEach;
                michal = _closure1_slot21;
                entity = function(argFoo, argBar) {
                    tangon = _closure1_slot29;
                    zuuluu = _closure1_slot47;
                    entity = undefined;
                    michal = argFoo;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = argBar;
                    tangon[michal] = zuuluu;
                    return entity;
                };
                entity = zuuluu.bind(tangon)(michal, entity);
 182:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(47);
        entity[0] = report;
        report = {};
        golfie = 'getState';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = {};
            michal = _closure1_slot23;
            entity['useNewNotifications'] = michal;
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'mentionOnAllMessages';
        report['key'] = golfie;
        golfie = function() { // Original name: get
            entity = _closure1_slot24;
            return entity;
        };
        report['get'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'isSuppressEveryoneEnabled';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            zuuluu = _closure1_slot45;
            michal = undefined;
            entity = argFoo;
            entity = zuuluu.bind(michal)(entity);
            entity = entity.suppress_everyone;
            return entity;
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'isSuppressRolesEnabled';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            zuuluu = _closure1_slot45;
            michal = undefined;
            entity = argFoo;
            entity = zuuluu.bind(michal)(entity);
            entity = entity.suppress_roles;
            return entity;
        };
        report['value'] = golfie;
        entity[4] = report;
        report = {};
        golfie = 'isMuteScheduledEventsEnabled';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            zuuluu = _closure1_slot45;
            michal = undefined;
            entity = argFoo;
            entity = zuuluu.bind(michal)(entity);
            entity = entity.mute_scheduled_events;
            return entity;
        };
        report['value'] = golfie;
        entity[5] = report;
        report = {};
        golfie = 'isMobilePushEnabled';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            zuuluu = _closure1_slot45;
            michal = undefined;
            entity = argFoo;
            entity = zuuluu.bind(michal)(entity);
            entity = entity.mobile_push;
            return entity;
        };
        report['value'] = golfie;
        entity[6] = report;
        report = {};
        golfie = 'isMuted';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            zuuluu = _closure1_slot45;
            tangon = undefined;
            michal = argFoo;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = _closure1_slot0;
            report = _closure1_slot3;
            entity = 15;
            entity = report[entity];
            michal = michal.bind(tangon)(entity);
            entity = michal.computeIsMuted;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        };
        report['value'] = golfie;
        entity[7] = report;
        report = {};
        golfie = 'isTemporarilyMuted';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            zuuluu = _closure1_slot45;
            tangon = undefined;
            michal = argFoo;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = _closure1_slot0;
            report = _closure1_slot3;
            entity = 15;
            entity = report[entity];
            michal = michal.bind(tangon)(entity);
            entity = michal.isTemporarilyMuted;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        };
        report['value'] = golfie;
        entity[8] = report;
        report = {};
        golfie = 'getMuteConfig';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            zuuluu = _closure1_slot45;
            michal = undefined;
            entity = argFoo;
            entity = zuuluu.bind(michal)(entity);
            entity = entity.mute_config;
            return entity;
        };
        report['value'] = golfie;
        entity[9] = report;
        report = {};
        golfie = 'getMessageNotifications';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            zuuluu = _closure1_slot45;
            michal = undefined;
            entity = argFoo;
            entity = zuuluu.bind(michal)(entity);
            entity = entity.message_notifications;
            return entity;
        };
        report['value'] = golfie;
        entity[10] = report;
        report = {};
        golfie = 'getChannelOverrides';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                zuuluu = _closure1_slot45;
                michal = undefined;
                entity = argFoo;
                entity = zuuluu.bind(michal)(entity);
                entity = entity.channel_overrides;
                michal = null;
                if(!(michal == entity)) { _fun00036_ip = 31; continue _fun00035 }
 29:
                entity = {};
 31:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[11] = report;
        report = {};
        golfie = 'getNotifyHighlights';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            zuuluu = _closure1_slot45;
            michal = undefined;
            entity = argFoo;
            entity = zuuluu.bind(michal)(entity);
            entity = entity.notify_highlights;
            return entity;
        };
        report['value'] = golfie;
        entity[12] = report;
        report = {};
        golfie = 'getGuildFlags';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            zuuluu = _closure1_slot45;
            michal = undefined;
            entity = argFoo;
            entity = zuuluu.bind(michal)(entity);
            entity = entity.flags;
            return entity;
        };
        report['value'] = golfie;
        entity[13] = report;
        report = {};
        golfie = 'getChannelMessageNotifications';
        report['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                zuuluu = this;
                michal = zuuluu.getChannelOverrides;
                entity = argFoo;
                michal = michal.bind(zuuluu)(entity);
                entity = argBar;
                entity = michal[entity];
                zuuluu = null;
                if(!(zuuluu != entity)) { _fun00038_ip = 48; continue _fun00037 }
 30:
                michal = entity.message_notifications;
                if(!(zuuluu != michal)) { _fun00038_ip = 48; continue _fun00037 }
 40:
                entity = entity.message_notifications;
                _fun00038_ip = 61; continue _fun00037;
 48:
                michal = _closure1_slot16;
                entity = michal.NULL;
 61:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[14] = report;
        report = {};
        golfie = 'getChannelMuteConfig';
        report['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                zuuluu = this;
                michal = zuuluu.getChannelOverrides;
                entity = argFoo;
                michal = michal.bind(zuuluu)(entity);
                entity = argBar;
                michal = michal[entity];
                entity = null;
                zuuluu = entity != michal;
                if(!zuuluu) { _fun00040_ip = 39; continue _fun00039 }
 33:
                entity = michal.mute_config;
 39:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[15] = report;
        report = {};
        golfie = 'getMutedChannels';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                zuuluu = _closure1_slot29;
                entity = argFoo;
                entity = zuuluu[entity];
                zuuluu = null;
                if(!(zuuluu == entity)) { _fun00042_ip = 24; continue _fun00041 }
 20:
                entity = _closure1_slot31;
 24:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[16] = report;
        report = {};
        golfie = 'isChannelMuted';
        report['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
                tangon = argFoo;
                zuuluu = argBar;
                michal = this;
                report = _closure1_slot13;
                entity = report.getChannel;
                golfie = entity.bind(report)(zuuluu);
                report = null;
                oscard = report == golfie;
                entity = undefined;
                if(oscard) { _fun00044_ip = 47; continue _fun00043 }
 37:
                oscard = golfie.getGuildId;
                entity = oscard.bind(golfie)();
 47:
                if(!(report != entity)) { _fun00044_ip = 54; continue _fun00043 }
 51:
                tangon = entity;
 54:
                entity = michal.getMutedChannels;
                michal = entity.bind(michal)(tangon);
                entity = michal.has;
                entity = entity.bind(michal)(zuuluu);
                return entity;
            }
        };
        report['value'] = golfie;
        entity[17] = report;
        report = {};
        golfie = 'isCategoryMuted';
        report['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
                report = this;
                zuuluu = _closure1_slot13;
                michal = zuuluu.getChannel;
                entity = argBar;
                michal = michal.bind(zuuluu)(entity);
                entity = null;
                if(!(entity != michal)) { _fun00046_ip = 68; continue _fun00045 }
 29:
                tangon = michal.parent_id;
                entity = entity != tangon;
                if(!entity) { _fun00046_ip = 66; continue _fun00045 }
 42:
                zuuluu = report.getMutedChannels;
                michal = argFoo;
                zuuluu = zuuluu.bind(report)(michal);
                michal = zuuluu.has;
                entity = michal.bind(zuuluu)(tangon);
 66:
                return entity;
 68:
                entity = false;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[18] = report;
        report = {};
        golfie = 'resolvedMessageNotifications';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
                zuuluu = argFoo;
                report = this;
                tangon = report.getChannelMessageNotifications;
                michal = zuuluu.guild_id;
                entity = zuuluu.id;
                entity = tangon.bind(report)(michal, entity);
                michal = _closure1_slot16;
                michal = michal.NULL;
                if(!(entity === michal)) { _fun00048_ip = 114; continue _fun00047 }
 45:
                oscard = zuuluu.parent_id;
                michal = null;
                if(!(michal != oscard)) { _fun00048_ip = 94; continue _fun00047 }
 57:
                golfie = report.getChannelMessageNotifications;
                oscard = zuuluu.guild_id;
                michal = zuuluu.parent_id;
                michal = golfie.bind(report)(oscard, michal);
                tangon = _closure1_slot16;
                tangon = tangon.NULL;
                if(!(michal === tangon)) { _fun00048_ip = 112; continue _fun00047 }
 94:
                tangon = report.getMessageNotifications;
                zuuluu = zuuluu.guild_id;
                zuuluu = tangon.bind(report)(zuuluu);
                return zuuluu;
 112:
                return michal;
 114:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[19] = report;
        report = {};
        golfie = 'resolveUnreadSetting';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
                golfie = argFoo;
                oscard = this;
                tangon = _closure1_slot11;
                zuuluu = tangon.has;
                michal = golfie.type;
                michal = zuuluu.bind(tangon)(michal);
                if(michal) { _fun00050_ip = 265; continue _fun00049 }
 34:
                tangon = _closure1_slot12;
                michal = golfie.type;
                zuuluu = undefined;
                michal = tangon.bind(zuuluu)(michal);
                if(michal) { _fun00050_ip = 253; continue _fun00049 }
 56:
                michal = _closure1_slot48;
                michal = michal.bind(zuuluu)();
                if(michal) { _fun00050_ip = 79; continue _fun00049 }
 67:
                michal = _closure1_slot18;
                michal = michal.ALL_MESSAGES;
                return michal;
 79:
                tangon = oscard.getChannelUnreadSetting;
                zuuluu = golfie.guild_id;
                michal = golfie.id;
                michal = tangon.bind(oscard)(zuuluu, michal);
                zuuluu = _closure1_slot18;
                zuuluu = zuuluu.UNSET;
                if(!(michal === zuuluu)) { _fun00050_ip = 251; continue _fun00049 }
 118:
                tangon = golfie.parent_id;
                zuuluu = null;
                if(!(zuuluu != tangon)) { _fun00050_ip = 167; continue _fun00049 }
 130:
                report = oscard.getChannelUnreadSetting;
                tangon = golfie.guild_id;
                zuuluu = golfie.parent_id;
                zuuluu = report.bind(oscard)(tangon, zuuluu);
                tangon = _closure1_slot18;
                tangon = tangon.UNSET;
                if(!(zuuluu === tangon)) { _fun00050_ip = 249; continue _fun00049 }
 167:
                report = oscard.getGuildUnreadSetting;
                tangon = golfie.guild_id;
                tangon = report.bind(oscard)(tangon);
                report = _closure1_slot18;
                report = report.UNSET;
                if(!(tangon === report)) { _fun00050_ip = 247; continue _fun00049 }
 197:
                report = oscard.resolvedMessageNotifications;
                oscard = report.bind(oscard)(golfie);
                report = _closure1_slot16;
                report = report.ALL_MESSAGES;
                if(!(oscard !== report)) { _fun00050_ip = 234; continue _fun00049 }
 222:
                report = _closure1_slot18;
                report = report.ONLY_MENTIONS;
                _fun00050_ip = 244; continue _fun00049;
 234:
                oscard = _closure1_slot18;
                report = oscard.ALL_MESSAGES;
 244:
                tangon = report;
 247:
                return tangon;
 249:
                return zuuluu;
 251:
                return michal;
 253:
                michal = _closure1_slot18;
                michal = michal.ALL_MESSAGES;
                return michal;
 265:
                entity = _closure1_slot18;
                entity = entity.ALL_MESSAGES;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[20] = report;
        report = {};
        golfie = 'isGuildOrCategoryOrChannelMuted';
        report['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
                report = argFoo;
                tangon = argBar;
                zuuluu = this;
                entity = zuuluu.isMuted;
                entity = entity.bind(zuuluu)(report);
                if(entity) { _fun00052_ip = 37; continue _fun00051 }
 23:
                michal = zuuluu.isCategoryMuted;
                entity = michal.bind(zuuluu)(report, tangon);
 37:
                if(entity) { _fun00052_ip = 52; continue _fun00051 }
 40:
                michal = zuuluu.isChannelMuted;
                entity = michal.bind(zuuluu)(report, tangon);
 52:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[21] = report;
        report = {};
        golfie = 'allowNoMessages';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00053: for(var _fun00054_ip = 0; ; ) switch(_fun00054_ip) {
 0:
                report = argFoo;
                tangon = this;
                zuuluu = tangon.isGuildOrCategoryOrChannelMuted;
                michal = report.guild_id;
                entity = report.id;
                entity = zuuluu.bind(tangon)(michal, entity);
                if(entity) { _fun00054_ip = 59; continue _fun00053 }
 31:
                michal = tangon.resolvedMessageNotifications;
                zuuluu = michal.bind(tangon)(report);
                michal = _closure1_slot16;
                michal = michal.NO_MESSAGES;
                entity = zuuluu === michal;
 59:
                if(entity) { _fun00054_ip = 98; continue _fun00053 }
 62:
                zuuluu = tangon.isOptInEnabled;
                michal = report.guild_id;
                michal = zuuluu.bind(tangon)(michal);
                if(!michal) { _fun00054_ip = 95; continue _fun00053 }
 81:
                zuuluu = tangon.isChannelRecordOrParentOptedIn;
                zuuluu = zuuluu.bind(tangon)(report);
                michal = !zuuluu;
 95:
                entity = michal;
 98:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[22] = report;
        report = {};
        golfie = 'allowAllMessages';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00055: for(var _fun00056_ip = 0; ; ) switch(_fun00056_ip) {
 0:
                report = argFoo;
                tangon = this;
                zuuluu = tangon.isGuildOrCategoryOrChannelMuted;
                michal = report.guild_id;
                entity = report.id;
                entity = zuuluu.bind(tangon)(michal, entity);
                entity = !entity;
                if(!entity) { _fun00056_ip = 62; continue _fun00055 }
 34:
                michal = tangon.resolvedMessageNotifications;
                zuuluu = michal.bind(tangon)(report);
                michal = _closure1_slot16;
                michal = michal.ALL_MESSAGES;
                entity = zuuluu === michal;
 62:
                if(!entity) { _fun00056_ip = 101; continue _fun00055 }
 65:
                zuuluu = tangon.isOptInEnabled;
                michal = report.guild_id;
                michal = zuuluu.bind(tangon)(michal);
                michal = !michal;
                if(michal) { _fun00056_ip = 98; continue _fun00055 }
 87:
                zuuluu = tangon.isChannelRecordOrParentOptedIn;
                michal = zuuluu.bind(tangon)(report);
 98:
                entity = michal;
 101:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[23] = report;
        report = {};
        golfie = 'isGuildCollapsed';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00057: for(var _fun00058_ip = 0; ; ) switch(_fun00058_ip) {
 0:
                michal = _closure1_slot21;
                entity = argFoo;
                entity = michal[entity];
                michal = null;
                zuuluu = michal == entity;
                michal = undefined;
                if(zuuluu) { _fun00058_ip = 31; continue _fun00057 }
 25:
                michal = entity.hide_muted_channels;
 31:
                entity = true;
                entity = entity === michal;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[24] = report;
        report = {};
        golfie = 'getAllSettings';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = {};
            zuuluu = _closure1_slot21;
            entity['userGuildSettings'] = zuuluu;
            zuuluu = _closure1_slot29;
            entity['mutedChannels'] = zuuluu;
            michal = _closure1_slot30;
            entity['optedInChannelsByGuild'] = michal;
            return entity;
        };
        report['value'] = golfie;
        entity[25] = report;
        report = {};
        golfie = 'getChannelIdFlags';
        report['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            _fun00059: for(var _fun00060_ip = 0; ; ) switch(_fun00060_ip) {
 0:
                zuuluu = this;
                michal = zuuluu.getChannelOverrides;
                entity = argFoo;
                michal = michal.bind(zuuluu)(entity);
                entity = argBar;
                zuuluu = michal[entity];
                entity = null;
                tangon = entity == zuuluu;
                michal = undefined;
                if(tangon) { _fun00060_ip = 40; continue _fun00059 }
 35:
                michal = zuuluu.flags;
 40:
                zuuluu = entity != michal;
                entity = 0;
                if(!zuuluu) { _fun00060_ip = 52; continue _fun00059 }
 49:
                entity = michal;
 52:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[26] = report;
        report = {};
        golfie = 'getChannelFlags';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            entity = argFoo;
            tangon = this;
            zuuluu = tangon.getChannelIdFlags;
            michal = entity.guild_id;
            entity = entity.id;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        report['value'] = golfie;
        entity[27] = report;
        report = {};
        golfie = 'getNewForumThreadsCreated';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00061: for(var _fun00062_ip = 0; ; ) switch(_fun00062_ip) {
 0:
                zuuluu = argFoo;
                michal = this;
                tangon = michal.getChannelOverrides;
                entity = zuuluu.guild_id;
                tangon = tangon.bind(michal)(entity);
                entity = zuuluu.id;
                tangon = tangon[entity];
                report = null;
                if(!(report != tangon)) { _fun00062_ip = 148; continue _fun00061 }
 37:
                entity = tangon.flags;
                if(!(report != entity)) { _fun00062_ip = 148; continue _fun00061 }
 46:
                oscard = _closure1_slot2;
                report = _closure1_slot3;
                option = 17;
                report = report[option];
                golfie = undefined;
                offset = oscard.bind(golfie)(report);
                verify = offset.hasFlag;
                oscard = tangon.flags;
                report = _closure1_slot19;
                report = report.NEW_FORUM_THREADS_ON;
                report = verify.bind(offset)(oscard, report);
                if(report) { _fun00062_ip = 182; continue _fun00061 }
 101:
                oscard = _closure1_slot2;
                report = _closure1_slot3;
                report = report[option];
                oscard = oscard.bind(golfie)(report);
                report = oscard.hasFlag;
                tangon = tangon.flags;
                entity = _closure1_slot19;
                entity = entity.NEW_FORUM_THREADS_OFF;
                entity = report.bind(oscard)(tangon, entity);
                if(entity) { _fun00062_ip = 178; continue _fun00061 }
 148:
                entity = michal.resolvedMessageNotifications;
                michal = entity.bind(michal)(zuuluu);
                entity = _closure1_slot16;
                entity = entity.ALL_MESSAGES;
                entity = michal === entity;
                return entity;
 178:
                entity = false;
                return entity;
 182:
                entity = true;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[28] = report;
        report = {};
        golfie = 'isOptInEnabled';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00063: for(var _fun00064_ip = 0; ; ) switch(_fun00064_ip) {
 0:
                report = argFoo;
                tangon = this;
                entity = null;
                entity = entity != report;
                if(!entity) { _fun00064_ip = 111; continue _fun00063 }
 15:
                oscard = _closure1_slot9;
                michal = oscard.isFullServerPreview;
                michal = michal.bind(oscard)(report);
                if(michal) { _fun00064_ip = 93; continue _fun00063 }
 36:
                golfie = _closure1_slot2;
                oscard = _closure1_slot3;
                michal = 17;
                oscard = oscard[michal];
                michal = undefined;
                golfie = golfie.bind(michal)(oscard);
                oscard = golfie.hasFlag;
                michal = tangon.getGuildFlags;
                tangon = michal.bind(tangon)(report);
                michal = _closure1_slot20;
                michal = michal.OPT_IN_CHANNELS_ON;
                michal = oscard.bind(golfie)(tangon, michal);
                _fun00064_ip = 108; continue _fun00063;
 93:
                tangon = _closure1_slot9;
                zuuluu = tangon.isOptInEnabled;
                michal = zuuluu.bind(tangon)(report);
 108:
                entity = michal;
 111:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[29] = report;
        report = {};
        golfie = 'isChannelRecordOrParentOptedIn';
        report['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            _fun00065: for(var _fun00066_ip = 0; ; ) switch(_fun00066_ip) {
 0:
                tangon = argFoo;
                option = argBar;
                golfie = this;
                report = null;
                entity = report != tangon;
                if(!entity) { _fun00066_ip = 27; continue _fun00065 }
 18:
                michal = tangon.guild_id;
                entity = report != michal;
 27:
                if(!entity) { _fun00066_ip = 99; continue _fun00065 }
 30:
                oscard = golfie.isChannelOptedIn;
                zuuluu = tangon.guild_id;
                michal = tangon.id;
                michal = oscard.bind(golfie)(zuuluu, michal, option);
                if(michal) { _fun00066_ip = 96; continue _fun00065 }
 56:
                zuuluu = tangon.parent_id;
                zuuluu = report != zuuluu;
                if(!zuuluu) { _fun00066_ip = 93; continue _fun00065 }
 69:
                oscard = golfie.isChannelOptedIn;
                report = tangon.guild_id;
                tangon = tangon.parent_id;
                zuuluu = oscard.bind(golfie)(report, tangon, option);
 93:
                michal = zuuluu;
 96:
                entity = michal;
 99:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[30] = report;
        report = {};
        golfie = 'isChannelOrParentOptedIn';
        report['key'] = golfie;
        golfie = function(argFoo, argBar, argBaz) { // Original name: value
            tangon = this;
            zuuluu = tangon.isChannelRecordOrParentOptedIn;
            report = _closure1_slot13;
            michal = report.getChannel;
            entity = argBar;
            michal = michal.bind(report)(entity);
            entity = argBaz;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        report['value'] = golfie;
        entity[31] = report;
        report = {};
        golfie = 'isChannelOptedIn';
        report['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            _fun00067: for(var _fun00068_ip = 0; ; ) switch(_fun00068_ip) {
 0:
                tangon = argFoo;
                zuuluu = argBar;
                michal = arguments[2];
                golfie = this;
                oscard = undefined;
                if(!(michal === oscard)) { _fun00068_ip = 20; continue _fun00067 }
 18:
                michal = false;
 20:
                report = null;
                if(!(report != tangon)) { _fun00068_ip = 188; continue _fun00067 }
 29:
                verify = _closure1_slot9;
                option = verify.isFullServerPreview;
                option = option.bind(verify)(tangon);
                if(option) { _fun00068_ip = 170; continue _fun00067 }
 50:
                if(!michal) { _fun00068_ip = 65; continue _fun00067 }
 53:
                michal = _closure1_slot34;
                michal = michal[tangon];
                if(!(report == michal)) { _fun00068_ip = 150; continue _fun00067 }
 65:
                michal = golfie.getChannelOverrides;
                michal = michal.bind(golfie)(tangon);
                golfie = michal[zuuluu];
                option = report == golfie;
                michal = undefined;
                if(option) { _fun00068_ip = 94; continue _fun00067 }
 89:
                michal = golfie.flags;
 94:
                report = report != michal;
                golfie = 0;
                if(!report) { _fun00068_ip = 106; continue _fun00067 }
 103:
                golfie = michal;
 106:
                report = _closure1_slot2;
                option = _closure1_slot3;
                michal = 17;
                michal = option[michal];
                oscard = report.bind(oscard)(michal);
                report = oscard.hasFlag;
                michal = _closure1_slot19;
                michal = michal.OPT_IN_ENABLED;
                michal = report.bind(oscard)(golfie, michal);
                return michal;
 150:
                michal = _closure1_slot34;
                report = michal[tangon];
                michal = report.has;
                michal = michal.bind(report)(zuuluu);
                return michal;
 170:
                michal = _closure1_slot9;
                entity = michal.isChannelOptedIn;
                entity = entity.bind(michal)(tangon, zuuluu);
                return entity;
 188:
                entity = false;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[32] = report;
        report = {};
        golfie = 'getOptedInChannels';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00069: for(var _fun00070_ip = 0; ; ) switch(_fun00070_ip) {
 0:
                report = argFoo;
                michal = _closure1_slot9;
                entity = michal.isFullServerPreview;
                entity = entity.bind(michal)(report);
                if(entity) { _fun00070_ip = 44; continue _fun00069 }
 24:
                entity = _closure1_slot30;
                entity = entity[report];
                michal = null;
                if(!(michal == entity)) { _fun00070_ip = 42; continue _fun00069 }
 38:
                entity = _closure1_slot32;
 42:
                _fun00070_ip = 72; continue _fun00069;
 44:
                tangon = _closure1_slot9;
                michal = tangon.getViewingChannels;
                michal = michal.bind(tangon)(report);
                tangon = null;
                if(!(tangon == michal)) { _fun00070_ip = 69; continue _fun00069 }
 65:
                michal = _closure1_slot32;
 69:
                entity = michal;
 72:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[33] = report;
        report = {};
        golfie = 'getOptedInChannelsWithPendingUpdates';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            michal = _closure1_slot34;
            entity = argFoo;
            entity = michal[entity];
            return entity;
        };
        report['value'] = golfie;
        entity[34] = report;
        report = {};
        golfie = 'getPendingChannelUpdates';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            michal = _closure1_slot33;
            entity = argFoo;
            entity = michal[entity];
            return entity;
        };
        report['value'] = golfie;
        entity[35] = report;
        report = {};
        golfie = 'getGuildFavorites';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00071: for(var _fun00072_ip = 0; ; ) switch(_fun00072_ip) {
 0:
                zuuluu = argFoo;
                oscard = this;
                var _closure3_slot0 = zuuluu;
                report = _closure1_slot9;
                entity = report.isFullServerPreview;
                report = entity.bind(report)(zuuluu);
                entity = null;
                if(report) { _fun00072_ip = 129; continue _fun00071 }
 35:
                report = _closure1_slot22;
                report = report[zuuluu];
                if(!(entity == report)) { _fun00072_ip = 119; continue _fun00071 }
 47:
                option = _closure1_slot1;
                golfie = _closure1_slot3;
                report = 16;
                golfie = golfie[report];
                report = undefined;
                option = option.bind(report)(golfie);
                golfie = option.filter;
                report = oscard.getChannelOverrides;
                oscard = report.bind(oscard)(zuuluu);
                report = function(argFoo) {
                    _fun00073: for(var _fun00074_ip = 0; ; ) switch(_fun00074_ip) {
 0:
                        michal = argFoo;
                        tangon = _closure1_slot2;
                        zuuluu = _closure1_slot3;
                        entity = 17;
                        entity = zuuluu[entity];
                        zuuluu = undefined;
                        option = tangon.bind(zuuluu)(entity);
                        golfie = option.hasFlag;
                        entity = michal.flags;
                        tangon = null;
                        verify = tangon != entity;
                        oscard = 0;
                        if(!verify) { _fun00074_ip = 53; continue _fun00073 }
 50:
                        oscard = entity;
 53:
                        entity = _closure1_slot19;
                        entity = entity.FAVORITED;
                        entity = golfie.bind(option)(oscard, entity);
                        if(!entity) { _fun00074_ip = 116; continue _fun00073 }
 72:
                        oscard = _closure1_slot13;
                        report = oscard.getChannel;
                        michal = michal.channel_id;
                        michal = report.bind(oscard)(michal);
                        tangon = tangon == michal;
                        zuuluu = undefined;
                        if(tangon) { _fun00074_ip = 105; continue _fun00073 }
 100:
                        zuuluu = michal.guild_id;
 105:
                        michal = _closure3_slot0;
                        entity = zuuluu === michal;
 116:
                        return entity;
                    }
                };
                golfie = golfie.bind(option)(oscard, report);
                report = _closure1_slot22;
                oscard = golfie.map;
                tangon = function(argFoo) {
                    entity = argFoo;
                    entity = entity.channel_id;
                    return entity;
                };
                tangon = oscard.bind(golfie)(tangon);
                report[zuuluu] = tangon;
 119:
                michal = _closure1_slot22;
                michal = michal[zuuluu];
                return michal;
 129:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[36] = report;
        report = {};
        golfie = 'isFavorite';
        report['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            _fun00075: for(var _fun00076_ip = 0; ; ) switch(_fun00076_ip) {
 0:
                tangon = argFoo;
                zuuluu = this;
                michal = _closure1_slot9;
                entity = michal.isFullServerPreview;
                entity = entity.bind(michal)(tangon);
                entity = !entity;
                if(!entity) { _fun00076_ip = 71; continue _fun00075 }
 30:
                michal = zuuluu.getGuildFavorites;
                report = michal.bind(zuuluu)(tangon);
                michal = null;
                michal = michal == report;
                zuuluu = undefined;
                if(michal) { _fun00076_ip = 65; continue _fun00075 }
 52:
                tangon = report.includes;
                michal = argBar;
                zuuluu = tangon.bind(report)(michal);
 65:
                michal = true;
                entity = michal === zuuluu;
 71:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[37] = report;
        report = {};
        golfie = 'isMessagesFavorite';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00077: for(var _fun00078_ip = 0; ; ) switch(_fun00078_ip) {
 0:
                zuuluu = this;
                entity = zuuluu.getChannelOverrides;
                michal = null;
                zuuluu = entity.bind(zuuluu)(michal);
                entity = argFoo;
                zuuluu = zuuluu[entity];
                tangon = michal == zuuluu;
                report = undefined;
                entity = undefined;
                if(tangon) { _fun00078_ip = 39; continue _fun00077 }
 34:
                entity = zuuluu.flags;
 39:
                michal = michal != entity;
                tangon = 0;
                if(!michal) { _fun00078_ip = 51; continue _fun00077 }
 48:
                tangon = entity;
 51:
                zuuluu = _closure1_slot2;
                oscard = _closure1_slot3;
                michal = 17;
                michal = oscard[michal];
                zuuluu = zuuluu.bind(report)(michal);
                michal = zuuluu.hasFlag;
                entity = _closure1_slot19;
                entity = entity.FAVORITED;
                entity = michal.bind(zuuluu)(tangon, entity);
                return entity;
            }
        };
        report['value'] = golfie;
        entity[38] = report;
        report = {};
        golfie = 'isAddedToMessages';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00079: for(var _fun00080_ip = 0; ; ) switch(_fun00080_ip) {
 0:
                zuuluu = this;
                entity = zuuluu.getChannelOverrides;
                michal = null;
                zuuluu = entity.bind(zuuluu)(michal);
                entity = argFoo;
                zuuluu = zuuluu[entity];
                tangon = michal == zuuluu;
                report = undefined;
                entity = undefined;
                if(tangon) { _fun00080_ip = 39; continue _fun00079 }
 34:
                entity = zuuluu.flags;
 39:
                michal = michal != entity;
                tangon = 0;
                if(!michal) { _fun00080_ip = 51; continue _fun00079 }
 48:
                tangon = entity;
 51:
                zuuluu = _closure1_slot2;
                oscard = _closure1_slot3;
                michal = 17;
                michal = oscard[michal];
                zuuluu = zuuluu.bind(report)(michal);
                michal = zuuluu.hasFlag;
                entity = _closure1_slot19;
                entity = entity.OPT_IN_ENABLED;
                entity = michal.bind(zuuluu)(tangon, entity);
                return entity;
            }
        };
        report['value'] = golfie;
        entity[39] = report;
        report = {};
        golfie = 'getAddedToMessages';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00081: for(var _fun00082_ip = 0; ; ) switch(_fun00082_ip) {
 0:
                entity = _closure1_slot30;
                entity = entity.null;
                zuuluu = null;
                if(!(zuuluu == entity)) { _fun00082_ip = 23; continue _fun00081 }
 19:
                entity = _closure1_slot32;
 23:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[40] = report;
        report = {};
        golfie = 'accountNotificationSettings';
        report['key'] = golfie;
        golfie = function() { // Original name: get
            entity = _closure1_slot25;
            return entity;
        };
        report['get'] = golfie;
        entity[41] = report;
        report = {};
        golfie = 'useNewNotifications';
        report['key'] = golfie;
        golfie = function() { // Original name: get
            entity = _closure1_slot23;
            return entity;
        };
        report['get'] = golfie;
        entity[42] = report;
        report = {};
        golfie = 'getGuildUnreadSetting';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00083: for(var _fun00084_ip = 0; ; ) switch(_fun00084_ip) {
 0:
                report = this;
                entity = _closure1_slot48;
                tangon = undefined;
                entity = entity.bind(tangon)();
                if(entity) { _fun00084_ip = 31; continue _fun00083 }
 19:
                entity = _closure1_slot18;
                entity = entity.ALL_MESSAGES;
                return entity;
 31:
                zuuluu = report.getGuildFlags;
                entity = argFoo;
                report = zuuluu.bind(report)(entity);
                zuuluu = _closure1_slot2;
                entity = _closure1_slot3;
                oscard = 17;
                entity = entity[oscard];
                golfie = zuuluu.bind(tangon)(entity);
                zuuluu = golfie.hasFlag;
                entity = _closure1_slot20;
                entity = entity.UNREADS_ALL_MESSAGES;
                entity = zuuluu.bind(golfie)(report, entity);
                if(entity) { _fun00084_ip = 152; continue _fun00083 }
 90:
                zuuluu = _closure1_slot2;
                entity = _closure1_slot3;
                entity = entity[oscard];
                tangon = zuuluu.bind(tangon)(entity);
                zuuluu = tangon.hasFlag;
                entity = _closure1_slot20;
                entity = entity.UNREADS_ONLY_MENTIONS;
                entity = zuuluu.bind(tangon)(report, entity);
                zuuluu = _closure1_slot18;
                if(entity) { _fun00084_ip = 144; continue _fun00083 }
 136:
                entity = zuuluu.UNSET;
                _fun00084_ip = 150; continue _fun00083;
 144:
                entity = zuuluu.ONLY_MENTIONS;
 150:
                _fun00084_ip = 162; continue _fun00083;
 152:
                michal = _closure1_slot18;
                entity = michal.ALL_MESSAGES;
 162:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[43] = report;
        report = {};
        golfie = 'resolveGuildUnreadSetting';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00085: for(var _fun00086_ip = 0; ; ) switch(_fun00086_ip) {
 0:
                michal = argFoo;
                tangon = this;
                zuuluu = tangon.getGuildFlags;
                entity = michal.id;
                golfie = zuuluu.bind(tangon)(entity);
                entity = _closure1_slot48;
                oscard = undefined;
                entity = entity.bind(oscard)();
                if(entity) { _fun00086_ip = 53; continue _fun00085 }
 38:
                entity = _closure1_slot18;
                entity = entity.ALL_MESSAGES;
                _fun00086_ip = 209; continue _fun00085;
 53:
                report = _closure1_slot2;
                tangon = _closure1_slot3;
                option = 17;
                tangon = tangon[option];
                verify = report.bind(oscard)(tangon);
                report = verify.hasFlag;
                tangon = _closure1_slot20;
                tangon = tangon.UNREADS_ALL_MESSAGES;
                tangon = report.bind(verify)(golfie, tangon);
                if(tangon) { _fun00086_ip = 196; continue _fun00085 }
 98:
                report = _closure1_slot2;
                tangon = _closure1_slot3;
                tangon = tangon[option];
                oscard = report.bind(oscard)(tangon);
                report = oscard.hasFlag;
                tangon = _closure1_slot20;
                tangon = tangon.UNREADS_ONLY_MENTIONS;
                tangon = report.bind(oscard)(golfie, tangon);
                if(tangon) { _fun00086_ip = 184; continue _fun00085 }
 140:
                tangon = michal.defaultMessageNotifications;
                michal = _closure1_slot16;
                michal = michal.ALL_MESSAGES;
                if(!(tangon !== michal)) { _fun00086_ip = 172; continue _fun00085 }
 160:
                michal = _closure1_slot18;
                michal = michal.ONLY_MENTIONS;
                _fun00086_ip = 182; continue _fun00085;
 172:
                tangon = _closure1_slot18;
                michal = tangon.ALL_MESSAGES;
 182:
                _fun00086_ip = 194; continue _fun00085;
 184:
                tangon = _closure1_slot18;
                michal = tangon.ONLY_MENTIONS;
 194:
                _fun00086_ip = 206; continue _fun00085;
 196:
                zuuluu = _closure1_slot18;
                michal = zuuluu.ALL_MESSAGES;
 206:
                entity = michal;
 209:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[44] = report;
        report = {};
        golfie = 'getChannelRecordUnreadSetting';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            entity = argFoo;
            tangon = this;
            zuuluu = tangon.getChannelUnreadSetting;
            michal = entity.guild_id;
            entity = entity.id;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        report['value'] = golfie;
        entity[45] = report;
        report = {};
        golfie = 'getChannelUnreadSetting';
        report['key'] = golfie;
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00087: for(var _fun00088_ip = 0; ; ) switch(_fun00088_ip) {
 0:
                tangon = this;
                zuuluu = tangon.getChannelIdFlags;
                michal = argFoo;
                entity = argBar;
                report = zuuluu.bind(tangon)(michal, entity);
                zuuluu = _closure1_slot2;
                entity = _closure1_slot3;
                oscard = 17;
                entity = entity[oscard];
                tangon = undefined;
                golfie = zuuluu.bind(tangon)(entity);
                zuuluu = golfie.hasFlag;
                entity = _closure1_slot19;
                entity = entity.UNREADS_ALL_MESSAGES;
                entity = zuuluu.bind(golfie)(report, entity);
                if(entity) { _fun00088_ip = 133; continue _fun00087 }
 71:
                zuuluu = _closure1_slot2;
                entity = _closure1_slot3;
                entity = entity[oscard];
                tangon = zuuluu.bind(tangon)(entity);
                zuuluu = tangon.hasFlag;
                entity = _closure1_slot19;
                entity = entity.UNREADS_ONLY_MENTIONS;
                entity = zuuluu.bind(tangon)(report, entity);
                zuuluu = _closure1_slot18;
                if(entity) { _fun00088_ip = 125; continue _fun00087 }
 117:
                entity = zuuluu.UNSET;
                _fun00088_ip = 131; continue _fun00087;
 125:
                entity = zuuluu.ONLY_MENTIONS;
 131:
                _fun00088_ip = 143; continue _fun00087;
 133:
                michal = _closure1_slot18;
                entity = michal.ALL_MESSAGES;
 143:
                return entity;
            }
        };
        report['value'] = oscard;
        entity[46] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    offset = report.bind(entity)(offset);
    report = 'UserGuildSettingsStore';
    offset['displayName'] = report;
    report = 'collapsedGuilds';
    offset['persistKey'] = report;
    report = 18;
    report = option[report];
    update = verify.bind(entity)(report);
    report = {};
    romeon = function(argFoo) { // Original name: handleUserGuildSettingsFullUpdate
        entity = argFoo;
        zuuluu = entity.userGuildSettings;
        michal = zuuluu.forEach;
        entity = function(argFoo) {
            entity = argFoo;
            tangon = _closure1_slot36;
            zuuluu = entity.guild_id;
            michal = {};
            report = {};
            michal['channel_overrides'] = report;
            golfie = michal;
            oscard = entity;
            entity = copyDataProperties(golfie, oscard);
            entity = undefined;
            michal = tangon.bind(entity)(zuuluu, michal);
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        entity = undefined;
        return entity;
    };
    report['USER_GUILD_SETTINGS_FULL_UPDATE'] = romeon;
    romeon = function(argFoo) { // Original name: handleUserGuildSettingsGuildUpdate
        entity = argFoo;
        tangon = entity.guildId;
        zuuluu = entity.settings;
        michal = _closure1_slot38;
        entity = undefined;
        michal = michal.bind(entity)(tangon, zuuluu);
        return entity;
    };
    report['USER_GUILD_SETTINGS_GUILD_UPDATE'] = romeon;
    romeon = function(argFoo) { // Original name: handleUserGuildSettingsGuildAndChannelsUpdate
        entity = argFoo;
        tangon = entity.guildId;
        michal = entity.settings;
        report = _closure1_slot38;
        entity = undefined;
        report = report.bind(entity)(tangon, michal);
        zuuluu = _closure1_slot40;
        michal = michal.channel_overrides;
        michal = zuuluu.bind(entity)(tangon, michal);
        return entity;
    };
    report['USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE'] = romeon;
    romeon = function(argFoo) { // Original name: handleUserGuildSettingsChannelUpdate
        _fun00089: for(var _fun00090_ip = 0; ; ) switch(_fun00090_ip) {
 0:
            entity = argFoo;
            report = entity.guildId;
            tangon = entity.channelId;
            zuuluu = entity.settings;
            oscard = null;
            entity = oscard != report;
            if(!entity) { _fun00090_ip = 37; continue _fun00089 }
 28:
            michal = zuuluu.flags;
            entity = oscard != michal;
 37:
            if(!entity) { _fun00090_ip = 80; continue _fun00089 }
 40:
            michal = _closure1_slot33;
            entity = {};
            verify = michal[report];
            offset = entity;
            oscard = copyDataProperties(offset, verify);
            oscard = {};
            golfie = zuuluu.flags;
            oscard['flags'] = golfie;
            entity[tangon] = oscard;
            michal[report] = entity;
 80:
            michal = _closure1_slot39;
            entity = undefined;
            michal = michal.bind(entity)(report, tangon, zuuluu);
            return entity;
        }
    };
    report['USER_GUILD_SETTINGS_CHANNEL_UPDATE'] = romeon;
    romeon = function(argFoo) { // Original name: handleUserGuildSettingsChannelUpdateBulk
        _fun00091: for(var _fun00092_ip = 0; ; ) switch(_fun00092_ip) {
 0:
            entity = argFoo;
            report = entity.guildId;
            tangon = entity.overrides;
            entity = null;
            entity = entity != report;
            if(!entity) { _fun00092_ip = 44; continue _fun00091 }
 23:
            zuuluu = _closure1_slot9;
            michal = zuuluu.isFullServerPreview;
            michal = michal.bind(zuuluu)(report);
            entity = !michal;
 44:
            if(!entity) { _fun00092_ip = 64; continue _fun00091 }
 47:
            zuuluu = _closure1_slot40;
            michal = undefined;
            michal = zuuluu.bind(michal)(report, tangon);
            entity = true;
 64:
            return entity;
        }
    };
    report['USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK'] = romeon;
    romeon = function(argFoo) { // Original name: handleConnectionOpen
        _fun00093: for(var _fun00094_ip = 0; ; ) switch(_fun00094_ip) {
 0:
            verify = argFoo;
            tangon = _closure1_slot46;
            zuuluu = verify.notificationSettings;
            entity = undefined;
            zuuluu = tangon.bind(entity)(zuuluu);
            tangon = _closure1_slot26;
            zuuluu = tangon.reset;
            zuuluu = zuuluu.bind(tangon)();
            tangon = _closure1_slot27;
            zuuluu = tangon.reset;
            zuuluu = zuuluu.bind(tangon)();
            zuuluu = verify.userGuildSettings;
            zuuluu = zuuluu.partial;
            if(zuuluu) { _fun00094_ip = 86; continue _fun00093 }
 68:
            zuuluu = {};
            _closure1_slot21 = zuuluu;
            zuuluu = {};
            _closure1_slot29 = zuuluu;
            zuuluu = {};
            _closure1_slot30 = zuuluu;
 86:
            zuuluu = global;
            zuuluu = zuuluu.Set;
            tangon = zuuluu.prototype;
            tangon = Object.create(tangon, {constructor: {value: zuuluu}});
            backup = tangon;
            zuuluu = new backup[zuuluu](foxtra);
            golfie = zuuluu instanceof Object ? zuuluu : tangon;
            var _closure2_slot0 = golfie;
            verify = verify.userGuildSettings;
            offset = verify.entries;
            verify = offset.forEach;
            michal = function(argFoo) {
                _fun00095: for(var _fun00096_ip = 0; ; ) switch(_fun00096_ip) {
 0:
                    michal = argFoo;
                    entity = 'channel_overrides';
                    entity = entity in michal;
                    if(entity) { _fun00096_ip = 22; continue _fun00095 }
 14:
                    entity = {};
                    michal['channel_overrides'] = entity;
 22:
                    tangon = _closure1_slot36;
                    zuuluu = michal.guild_id;
                    entity = undefined;
                    zuuluu = tangon.bind(entity)(zuuluu, michal);
                    tangon = michal.guild_id;
                    zuuluu = null;
                    if(!(zuuluu != tangon)) { _fun00096_ip = 75; continue _fun00095 }
 53:
                    tangon = _closure2_slot0;
                    zuuluu = tangon.add;
                    michal = michal.guild_id;
                    michal = zuuluu.bind(tangon)(michal);
 75:
                    return entity;
                }
            };
            michal = verify.bind(offset)(michal);
            report = _closure1_slot21;
            for(michal in report)
 157:
            {
 166:
                yankee = michal;
                verify = golfie.has;
                verify = verify.bind(golfie)(yankee);
                if(verify) { _fun00094_ip = 157; continue _fun00093 }
 182:
                offset = _closure1_slot37;
                verify = _closure1_slot21;
                verify = verify[yankee];
                verify = offset.bind(entity)(yankee, verify);
                _fun00094_ip = 157; continue _fun00093;
            }
 202:
            return entity;
        }
    };
    report['CONNECTION_OPEN'] = romeon;
    romeon = function(argFoo) { // Original name: handleCacheLoaded
        _fun00097: for(var _fun00098_ip = 0; ; ) switch(_fun00098_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.userGuildSettings;
            michal = null;
            michal = michal != zuuluu;
            if(!michal) { _fun00098_ip = 35; continue _fun00097 }
 18:
            zuuluu = entity.userGuildSettings;
            tangon = zuuluu.length;
            zuuluu = 0;
            michal = zuuluu !== tangon;
 35:
            if(!michal) { _fun00098_ip = 82; continue _fun00097 }
 38:
            michal = {};
            _closure1_slot21 = michal;
            michal = {};
            _closure1_slot29 = michal;
            michal = {};
            _closure1_slot30 = michal;
            zuuluu = entity.userGuildSettings;
            michal = zuuluu.forEach;
            entity = function(argFoo) {
                _fun00099: for(var _fun00100_ip = 0; ; ) switch(_fun00100_ip) {
 0:
                    kiloes = argFoo;
                    tangon = kiloes.guild_id;
                    entity = _closure1_slot21;
                    entity[tangon] = kiloes;
                    entity = global;
                    zuuluu = entity.Set;
                    report = zuuluu.prototype;
                    report = Object.create(report, {constructor: {value: zuuluu}});
                    sequen = report;
                    zuuluu = new sequen[zuuluu](vacuum);
                    oscard = zuuluu instanceof Object ? zuuluu : report;
                    entity = entity.Set;
                    zuuluu = entity.prototype;
                    zuuluu = Object.create(zuuluu, {constructor: {value: entity}});
                    sequen = zuuluu;
                    entity = new sequen[entity](vacuum);
                    zuuluu = entity instanceof Object ? entity : zuuluu;
                    foxtra = kiloes.channel_overrides;
                    verify = 17;
                    entity = undefined;
                    option = null;
                    report = 15;
                    for(offset in foxtra)
 100:
                    {
 112:
                        output = offset;
                        sizing = kiloes.channel_overrides;
                        sizing = sizing[output];
                        echoed = _closure1_slot0;
                        result = _closure1_slot3;
                        result = result[report];
                        echoed = echoed.bind(entity)(result);
                        result = echoed.computeIsMuted;
                        result = result.bind(echoed)(sizing);
                        if(!result) { _fun00100_ip = 166; continue _fun00099 }
 156:
                        result = oscard.add;
                        result = result.bind(oscard)(output);
 166:
                        echoed = _closure1_slot2;
                        result = _closure1_slot3;
                        result = result[verify];
                        update = echoed.bind(entity)(result);
                        echoed = update.hasFlag;
                        sizing = sizing.flags;
                        source = option != sizing;
                        result = 0;
                        if(!source) { _fun00100_ip = 206; continue _fun00099 }
 203:
                        result = sizing;
 206:
                        sizing = _closure1_slot19;
                        sizing = sizing.OPT_IN_ENABLED;
                        sizing = echoed.bind(update)(result, sizing);
                        if(!sizing) { _fun00100_ip = 100; continue _fun00099 }
 225:
                        sizing = zuuluu.add;
                        sizing = sizing.bind(zuuluu)(output);
                        _fun00100_ip = 100; continue _fun00099;
                    }
 240:
                    report = _closure1_slot29;
                    report[tangon] = oscard;
                    michal = _closure1_slot30;
                    michal[tangon] = zuuluu;
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
 82:
            entity = undefined;
            return entity;
        }
    };
    report['CACHE_LOADED'] = romeon;
    romeon = function(argFoo) { // Original name: handleOverlayInitialize
        entity = argFoo;
        zuuluu = entity.allUserGuildSettings;
        offset = zuuluu.userGuildSettings;
        verify = zuuluu.mutedChannels;
        var _closure2_slot0 = verify;
        report = zuuluu.optedInChannelsByGuild;
        var _closure2_slot1 = report;
        zuuluu = {};
        yankee = zuuluu;
        entity = copyDataProperties(yankee, offset);
        _closure1_slot21 = zuuluu;
        zuuluu = {};
        _closure1_slot29 = zuuluu;
        zuuluu = {};
        _closure1_slot30 = zuuluu;
        tangon = _closure1_slot1;
        oscard = _closure1_slot3;
        zuuluu = 19;
        golfie = oscard[zuuluu];
        entity = undefined;
        option = tangon.bind(entity)(golfie);
        golfie = option.keys;
        verify = golfie.bind(option)(verify);
        option = verify.forEach;
        golfie = function(argFoo) {
            zuuluu = argFoo;
            michal = _closure1_slot29;
            entity = global;
            report = entity.Set;
            entity = _closure2_slot0;
            oscard = entity[zuuluu];
            tangon = report.prototype;
            tangon = Object.create(tangon, {constructor: {value: report}});
            golfie = tangon;
            entity = new golfie[report](oscard, report);
            entity = entity instanceof Object ? entity : tangon;
            michal[zuuluu] = entity;
            entity = undefined;
            return entity;
        };
        golfie = option.bind(verify)(golfie);
        zuuluu = oscard[zuuluu];
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.keys;
        tangon = zuuluu.bind(tangon)(report);
        zuuluu = tangon.forEach;
        michal = function(argFoo) {
            zuuluu = argFoo;
            michal = _closure1_slot30;
            entity = global;
            report = entity.Set;
            entity = _closure2_slot1;
            oscard = entity[zuuluu];
            tangon = report.prototype;
            tangon = Object.create(tangon, {constructor: {value: report}});
            golfie = tangon;
            entity = new golfie[report](oscard, report);
            entity = entity instanceof Object ? entity : tangon;
            michal[zuuluu] = entity;
            entity = undefined;
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    report['OVERLAY_INITIALIZE'] = romeon;
    report['GUILD_CREATE'] = yankee;
    report['GUILD_UPDATE'] = yankee;
    romeon = function(argFoo) { // Original name: handleToggleCollapseMuted
        _fun00101: for(var _fun00102_ip = 0; ; ) switch(_fun00102_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.guildId;
            michal = _closure1_slot21;
            tangon = michal[zuuluu];
            michal = null;
            if(!(michal != tangon)) { _fun00102_ip = 35; continue _fun00101 }
 25:
            michal = _closure1_slot21;
            tangon = michal[zuuluu];
            _fun00102_ip = 46; continue _fun00101;
 35:
            report = _closure1_slot43;
            michal = undefined;
            tangon = report.bind(michal)(zuuluu);
 46:
            michal = _closure1_slot21;
            entity = {};
            golfie = entity;
            oscard = tangon;
            report = copyDataProperties(golfie, oscard);
            report = 'guild_id';
            entity[report] = zuuluu;
            report = tangon.hide_muted_channels;
            tangon = true;
            tangon = tangon === report;
            report = !tangon;
            tangon = 'hide_muted_channels';
            entity[tangon] = report;
            michal[zuuluu] = entity;
            entity = undefined;
            return entity;
        }
    };
    report['GUILD_TOGGLE_COLLAPSE_MUTED'] = romeon;
    report['IMPERSONATE_UPDATE'] = yankee;
    report['IMPERSONATE_STOP'] = yankee;
    yankee = function(argFoo) { // Original name: handleRemovePendingUpdates
        _fun00103: for(var _fun00104_ip = 0; ; ) switch(_fun00104_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.guildId;
            offset = entity.updates;
            entity = null;
            if(!(entity != zuuluu)) { _fun00104_ip = 115; continue _fun00103 }
 20:
            michal = _closure1_slot33;
            option = michal[zuuluu];
            if(!(entity != option)) { _fun00104_ip = 111; continue _fun00103 }
 35:
            oscard = offset;
            michal = 16;
            entity = undefined;
            for(zuuluu in oscard)
 51:
            {
 60:
                yankee = zuuluu;
                foxtra = _closure1_slot1;
                romeon = _closure1_slot3;
                romeon = romeon[michal];
                kiloes = foxtra.bind(entity)(romeon);
                backup = kiloes.isEqual;
                foxtra = offset[yankee];
                romeon = option[yankee];
                romeon = backup.bind(kiloes)(foxtra, romeon);
                if(!romeon) { _fun00104_ip = 51; continue _fun00103 }
 103:
                yankee = delete option[yankee];
                _fun00104_ip = 51; continue _fun00103;
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
        _fun00105: for(var _fun00106_ip = 0; ; ) switch(_fun00106_ip) {
 0:
            entity = argFoo;
            michal = entity.guildId;
            entity = null;
            if(!(entity != michal)) { _fun00106_ip = 37; continue _fun00105 }
 14:
            zuuluu = _closure1_slot33;
            zuuluu = delete zuuluu[michal];
            entity = _closure1_slot34;
            entity = delete entity[michal];
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
        zuuluu = entity.settings;
        michal = _closure1_slot46;
        entity = undefined;
        michal = michal.bind(entity)(zuuluu);
        return entity;
    };
    report['NOTIFICATION_SETTINGS_UPDATE'] = yankee;
    yankee = function() { // Original name: GUILD_MUTE_EXPIRED
        entity = true;
        return entity;
    };
    report['GUILD_MUTE_EXPIRED'] = yankee;
    oscard = function() { // Original name: CHANNEL_MUTE_EXPIRED
        entity = true;
        return entity;
    };
    report['CHANNEL_MUTE_EXPIRED'] = oscard;
    oscard = offset.prototype;
    oscard = Object.create(oscard, {constructor: {value: offset}});
    source = oscard;
    echoed = report;
    report = new source[offset](update, echoed, result);
    report = report instanceof Object ? report : oscard;
    oscard = 22;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'stores/UserGuildSettingsStore.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['default'] = report;
    zuuluu['getGuildDefaults'] = tangon;
    zuuluu['convertChannelOverridesToMap'] = michal;
    return entity;
})();