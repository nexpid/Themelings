// app/modules/notifications/settings_unread_notice/UnreadSettingNoticeStore2.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            oscard = argBaz;
            michal = _closure1_slot6;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot5;
            entity = _closure1_slot26;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tangon, oscard);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golfie = global;
            option = golfie.Reflect;
            golfie = option.construct;
            if(oscard) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscard = new Array(0);
 71:
            report = _closure1_slot6;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 92:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot25 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
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
            _fun00004_ip = 76; continue _fun00003;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot26 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot26 = entity;
    entity = function() { // Original name: trackChannel
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = _closure1_slot21;
            entity = null;
            if(!(entity != michal)) { _fun00006_ip = 183; continue _fun00005 }
 16:
            tangon = _closure1_slot30;
            michal = _closure1_slot21;
            entity = undefined;
            michal = tangon.bind(entity)(michal);
            if(michal) { _fun00006_ip = 38; continue _fun00005 }
 34:
            michal = false;
            return michal;
 38:
            tangon = _closure1_slot29;
            michal = _closure1_slot21;
            report = tangon.bind(entity)(michal);
            oscard = report.lastActionTime;
            michal = global;
            golfie = michal.Date;
            tangon = golfie.now;
            golfie = tangon.bind(golfie)();
            option = _closure1_slot1;
            verify = _closure1_slot2;
            tangon = 13;
            tangon = verify[tangon];
            tangon = option.bind(entity)(tangon);
            tangon = tangon.Millis;
            tangon = tangon.DAY;
            tangon = golfie - tangon;
            if(!(oscard > tangon)) { _fun00006_ip = 128; continue _fun00005 }
 114:
            oscard = report.viewDuration;
            tangon = _closure1_slot17;
            if(!(!(oscard > tangon))) { _fun00006_ip = 179; continue _fun00005 }
 128:
            tangon = michal.Date;
            michal = tangon.now;
            michal = michal.bind(tangon)();
            report['lastActionTime'] = michal;
            oscard = report.viewDuration;
            tangon = _closure1_slot22;
            tangon = michal - tangon;
            tangon = oscard + tangon;
            report['viewDuration'] = tangon;
            _closure1_slot22 = michal;
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
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zuuluu = _closure1_slot23;
            entity = 0;
            if(!(entity !== zuuluu)) { _fun00008_ip = 36; continue _fun00007 }
 13:
            zuuluu = global;
            report = zuuluu.clearInterval;
            tangon = _closure1_slot23;
            zuuluu = undefined;
            zuuluu = report.bind(zuuluu)(tangon);
            _closure1_slot23 = entity;
 36:
            entity = _closure1_slot12;
            entity = entity.useNewNotifications;
            if(!entity) { _fun00008_ip = 117; continue _fun00007 }
 49:
            entity = global;
            report = entity.setInterval;
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            entity = 13;
            entity = tangon[entity];
            tangon = undefined;
            entity = zuuluu.bind(tangon)(entity);
            entity = entity.Millis;
            zuuluu = entity.SECOND;
            entity = 15;
            zuuluu = entity * zuuluu;
            entity = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zuuluu = _closure1_slot27;
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)();
                    if(!zuuluu) { _fun00010_ip = 30; continue _fun00009 }
 16:
                    zuuluu = _closure1_slot24;
                    michal = zuuluu.emitChange;
                    michal = michal.bind(zuuluu)();
 30:
                    return entity;
                }
            };
            entity = report.bind(tangon)(entity, zuuluu);
            _closure1_slot23 = entity;
 117:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot28 = entity;
    entity = function(argFoo) { // Original name: getOrCreateChannelState
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            michal = argFoo;
            zuuluu = _closure1_slot19;
            zuuluu = zuuluu.channels;
            zuuluu = michal in zuuluu;
            if(zuuluu) { _fun00012_ip = 47; continue _fun00011 }
 23:
            zuuluu = _closure1_slot19;
            tangon = zuuluu.channels;
            zuuluu = {'lastActionTime': 0, 'viewDuration': 0, 'numSends': 0};
            tangon[michal] = zuuluu;
 47:
            entity = _closure1_slot19;
            entity = entity.channels;
            entity = entity[michal];
            return entity;
        }
    };
    var _closure1_slot29 = entity;
    entity = function(argFoo) { // Original name: shouldTrackChannel
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            tangon = argFoo;
            entity = _closure1_slot12;
            entity = entity.useNewNotifications;
            if(entity) { _fun00014_ip = 23; continue _fun00013 }
 19:
            entity = false;
            return entity;
 23:
            zuuluu = _closure1_slot20;
            entity = zuuluu.has;
            entity = entity.bind(zuuluu)(tangon);
            if(entity) { _fun00014_ip = 250; continue _fun00013 }
 43:
            zuuluu = _closure1_slot9;
            entity = zuuluu.getBasicChannel;
            entity = entity.bind(zuuluu)(tangon);
            tangon = null;
            if(!(tangon != entity)) { _fun00014_ip = 246; continue _fun00013 }
 67:
            zuuluu = entity.guild_id;
            if(!(tangon != zuuluu)) { _fun00014_ip = 246; continue _fun00013 }
 79:
            oscard = _closure1_slot12;
            report = oscard.isGuildOrCategoryOrChannelMuted;
            tangon = entity.guild_id;
            zuuluu = entity.id;
            zuuluu = report.bind(oscard)(tangon, zuuluu);
            if(zuuluu) { _fun00014_ip = 242; continue _fun00013 }
 111:
            report = _closure1_slot31;
            tangon = entity.guild_id;
            zuuluu = entity.id;
            oscard = undefined;
            zuuluu = report.bind(oscard)(tangon, zuuluu);
            if(zuuluu) { _fun00014_ip = 238; continue _fun00013 }
 136:
            report = _closure1_slot31;
            tangon = entity.guild_id;
            zuuluu = entity.parent_id;
            zuuluu = report.bind(oscard)(tangon, zuuluu);
            if(zuuluu) { _fun00014_ip = 234; continue _fun00013 }
 160:
            tangon = _closure1_slot12;
            zuuluu = tangon.resolveUnreadSetting;
            zuuluu = zuuluu.bind(tangon)(entity);
            oscard = _closure1_slot12;
            report = oscard.getChannelUnreadSetting;
            tangon = entity.guild_id;
            entity = entity.id;
            tangon = report.bind(oscard)(tangon, entity);
            entity = _closure1_slot14;
            entity = entity.UNSET;
            entity = tangon === entity;
            if(!entity) { _fun00014_ip = 232; continue _fun00013 }
 218:
            michal = _closure1_slot14;
            michal = michal.ALL_MESSAGES;
            entity = zuuluu !== michal;
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
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            michal = argBar;
            oscard = null;
            if(!(oscard != michal)) { _fun00016_ip = 166; continue _fun00015 }
 12:
            report = _closure1_slot12;
            zuuluu = report.getChannelOverrides;
            entity = argFoo;
            entity = zuuluu.bind(report)(entity);
            report = entity[michal];
            entity = oscard != report;
            if(!entity) { _fun00016_ip = 164; continue _fun00015 }
 44:
            michal = report.message_notifications;
            michal = oscard != michal;
            if(!michal) { _fun00016_ip = 77; continue _fun00015 }
 57:
            golfie = report.message_notifications;
            zuuluu = _closure1_slot13;
            zuuluu = zuuluu.NULL;
            michal = golfie !== zuuluu;
 77:
            if(michal) { _fun00016_ip = 161; continue _fun00015 }
 80:
            zuuluu = report.flags;
            zuuluu = oscard == zuuluu;
            if(zuuluu) { _fun00016_ip = 158; continue _fun00015 }
 92:
            option = _closure1_slot0;
            golfie = _closure1_slot2;
            oscard = 15;
            golfie = golfie[oscard];
            oscard = undefined;
            golfie = option.bind(oscard)(golfie);
            oscard = golfie.hasAnyFlag;
            report = report.flags;
            option = _closure1_slot15;
            option = option.UNREADS_ALL_MESSAGES;
            tangon = _closure1_slot15;
            tangon = tangon.UNREADS_ONLY_MENTIONS;
            tangon = option | tangon;
            tangon = oscard.bind(golfie)(report, tangon);
            zuuluu = !tangon;
 158:
            michal = !zuuluu;
 161:
            entity = michal;
 164:
            return entity;
 166:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot31 = entity;
    option = global;
    offset = option.Object;
    verify = offset.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, michal);
    michal = 0;
    verify = oscard[michal];
    entity = undefined;
    verify = golfie.bind(entity)(verify);
    var _closure1_slot3 = verify;
    foxtra = 1;
    verify = oscard[foxtra];
    verify = golfie.bind(entity)(verify);
    var _closure1_slot4 = verify;
    sizing = 2;
    verify = oscard[sizing];
    verify = golfie.bind(entity)(verify);
    var _closure1_slot5 = verify;
    verify = 3;
    verify = oscard[verify];
    verify = golfie.bind(entity)(verify);
    var _closure1_slot6 = verify;
    verify = 4;
    verify = oscard[verify];
    verify = golfie.bind(entity)(verify);
    var _closure1_slot7 = verify;
    yankee = 5;
    verify = oscard[yankee];
    verify = golfie.bind(entity)(verify);
    var _closure1_slot8 = verify;
    verify = 6;
    verify = oscard[verify];
    verify = golfie.bind(entity)(verify);
    var _closure1_slot9 = verify;
    verify = 7;
    verify = oscard[verify];
    verify = golfie.bind(entity)(verify);
    var _closure1_slot10 = verify;
    verify = 8;
    verify = oscard[verify];
    verify = golfie.bind(entity)(verify);
    var _closure1_slot11 = verify;
    verify = 9;
    verify = oscard[verify];
    verify = golfie.bind(entity)(verify);
    var _closure1_slot12 = verify;
    backup = 10;
    verify = oscard[backup];
    verify = report.bind(entity)(verify);
    verify = verify.UserNotificationSettings;
    var _closure1_slot13 = verify;
    verify = 11;
    verify = oscard[verify];
    verify = report.bind(entity)(verify);
    verify = verify.UnreadSetting;
    var _closure1_slot14 = verify;
    verify = 12;
    verify = oscard[verify];
    verify = report.bind(entity)(verify);
    verify = verify.ChannelNotificationSettingsFlags;
    var _closure1_slot15 = verify;
    offset = {};
    verify = 13;
    romeon = oscard[verify];
    romeon = golfie.bind(entity)(romeon);
    romeon = romeon.Millis;
    romeon = romeon.HOUR;
    romeon = foxtra * romeon;
    offset['timeSinceJoin'] = romeon;
    offset['sends'] = foxtra;
    romeon = oscard[verify];
    romeon = golfie.bind(entity)(romeon);
    romeon = romeon.Millis;
    romeon = romeon.MINUTE;
    romeon = foxtra * romeon;
    offset['viewTime'] = romeon;
    romeon = new Array(4);
    romeon[0] = offset;
    offset = {};
    kiloes = oscard[verify];
    kiloes = golfie.bind(entity)(kiloes);
    kiloes = kiloes.Millis;
    kiloes = kiloes.DAY;
    kiloes = foxtra * kiloes;
    offset['timeSinceJoin'] = kiloes;
    offset['sends'] = sizing;
    kiloes = oscard[verify];
    kiloes = golfie.bind(entity)(kiloes);
    kiloes = kiloes.Millis;
    kiloes = kiloes.MINUTE;
    kiloes = sizing * kiloes;
    offset['viewTime'] = kiloes;
    romeon[1] = offset;
    offset = {};
    kiloes = oscard[verify];
    kiloes = golfie.bind(entity)(kiloes);
    kiloes = kiloes.Millis;
    kiloes = kiloes.WEEK;
    kiloes = foxtra * kiloes;
    offset['timeSinceJoin'] = kiloes;
    offset['sends'] = yankee;
    kiloes = oscard[verify];
    kiloes = golfie.bind(entity)(kiloes);
    kiloes = kiloes.Millis;
    kiloes = kiloes.MINUTE;
    kiloes = yankee * kiloes;
    offset['viewTime'] = kiloes;
    romeon[2] = offset;
    offset = {};
    kiloes = oscard[verify];
    kiloes = golfie.bind(entity)(kiloes);
    kiloes = kiloes.Millis;
    kiloes = kiloes.DAYS_30;
    kiloes = foxtra * kiloes;
    offset['timeSinceJoin'] = kiloes;
    offset['sends'] = backup;
    backup = oscard[verify];
    backup = golfie.bind(entity)(backup);
    backup = backup.Millis;
    kiloes = backup.MINUTE;
    backup = 30;
    backup = backup * kiloes;
    offset['viewTime'] = backup;
    romeon[3] = offset;
    var _closure1_slot16 = romeon;
    offset = romeon.length;
    offset = offset - foxtra;
    offset = romeon[offset];
    offset = offset.viewTime;
    offset = yankee * offset;
    var _closure1_slot17 = offset;
    verify = oscard[verify];
    verify = golfie.bind(entity)(verify);
    verify = verify.Millis;
    verify = verify.WEEK;
    var _closure1_slot18 = verify;
    verify = {};
    offset = {};
    verify['channels'] = offset;
    var _closure1_slot19 = verify;
    option = option.Set;
    verify = option.prototype;
    verify = Object.create(verify, {constructor: {value: option}});
    update = verify;
    option = new update[option](echoed);
    option = option instanceof Object ? option : verify;
    var _closure1_slot20 = option;
    option = null;
    var _closure1_slot21 = option;
    var _closure1_slot22 = michal;
    var _closure1_slot23 = michal;
    michal = 17;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    option = michal.PersistedStore;
    michal = function(argFoo) {
        tangon = function() { // Original name: UnreadSettingNoticeStore2Class
            report = this;
            tangon = undefined;
            entity = undefined;
            oscard = _closure1_slot3;
            zuuluu = _closure2_slot0;
            oscard = oscard.bind(tangon)(report, zuuluu);
            michal = _closure1_slot25;
            entity = arguments;
            entity = michal.bind(tangon)(report, zuuluu, entity);
            return entity;
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
        entity = function(argFoo) { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                entity = argFoo;
                report = this;
                michal = null;
                if(!(michal != entity)) { _fun00018_ip = 31; continue _fun00017 }
 12:
                michal = _closure1_slot19;
                entity = entity.channels;
                michal['channels'] = entity;
 31:
                tangon = report.syncWith;
                michal = _closure1_slot12;
                zuuluu = new Array(1);
                zuuluu[0] = michal;
                michal = _closure1_slot28;
                michal = tangon.bind(report)(zuuluu, michal);
                tangon = report.waitFor;
                zuuluu = _closure1_slot12;
                michal = _closure1_slot11;
                entity = _closure1_slot9;
                entity = tangon.bind(report)(zuuluu, michal, entity);
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(4);
        entity[0] = report;
        report = {};
        golfie = 'getState';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot19;
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'getLastActionTime';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                entity = _closure1_slot19;
                michal = entity.channels;
                entity = argFoo;
                zuuluu = michal[entity];
                entity = null;
                tangon = entity == zuuluu;
                michal = undefined;
                if(tangon) { _fun00020_ip = 37; continue _fun00019 }
 31:
                michal = zuuluu.lastActionTime;
 37:
                zuuluu = entity != michal;
                entity = 0;
                if(!zuuluu) { _fun00020_ip = 49; continue _fun00019 }
 46:
                entity = michal;
 49:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'maybeAutoUpgradeChannel';
        report['key'] = golfie;
        oscard = function(argFoo) { // Original name: value
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                option = argFoo;
                entity = _closure1_slot30;
                golfie = undefined;
                entity = entity.bind(golfie)(option);
                if(entity) { _fun00022_ip = 24; continue _fun00021 }
 20:
                entity = false;
                return entity;
 24:
                michal = _closure1_slot9;
                entity = michal.getBasicChannel;
                tangon = entity.bind(michal)(option);
                report = null;
                entity = report != tangon;
                if(!entity) { _fun00022_ip = 57; continue _fun00021 }
 48:
                michal = tangon.guild_id;
                entity = report != michal;
 57:
                if(!entity) { _fun00022_ip = 470; continue _fun00021 }
 63:
                verify = _closure1_slot10;
                oscard = verify.getGuild;
                michal = tangon.guild_id;
                michal = oscard.bind(verify)(michal);
                oscard = report == michal;
                offset = undefined;
                if(oscard) { _fun00022_ip = 97; continue _fun00021 }
 91:
                offset = michal.joinedAt;
 97:
                if(!(report == offset)) { _fun00022_ip = 129; continue _fun00021 }
 101:
                michal = global;
                michal = michal.Date;
                oscard = michal.prototype;
                oscard = Object.create(oscard, {constructor: {value: michal}});
                echoed = oscard;
                michal = new echoed[michal](result);
                offset = michal instanceof Object ? michal : oscard;
 129:
                oscard = _closure1_slot1;
                verify = _closure1_slot2;
                michal = 14;
                michal = verify[michal];
                verify = oscard.bind(golfie)(michal);
                oscard = verify.age;
                michal = tangon.id;
                yankee = oscard.bind(verify)(michal);
                michal = global;
                verify = michal.Date;
                oscard = verify.now;
                verify = oscard.bind(verify)();
                oscard = offset.getTime;
                oscard = oscard.bind(offset)();
                offset = verify - oscard;
                verify = michal.Math;
                oscard = verify.min;
                foxtra = oscard.bind(verify)(yankee, offset);
                oscard = _closure1_slot19;
                verify = oscard.channels;
                oscard = tangon.id;
                romeon = verify[oscard];
                oscard = report == romeon;
                report = false;
                if(oscard) { _fun00022_ip = 375; continue _fun00021 }
 244:
                oscard = romeon.lastActionTime;
                verify = michal.Date;
                michal = verify.now;
                verify = michal.bind(verify)();
                michal = _closure1_slot18;
                michal = verify - michal;
                michal = oscard < michal;
                report = false;
                if(michal) { _fun00022_ip = 375; continue _fun00021 }
 282:
                offset = _closure1_slot16;
                michal = offset.length;
                verify = 0;
                michal = verify < michal;
                report = false;
                if(!michal) { _fun00022_ip = 375; continue _fun00021 }
 302:
                michal = offset[verify];
                backup = michal.timeSinceJoin;
                if(!(foxtra < backup)) { _fun00022_ip = 358; continue _fun00021 }
 316:
                kiloes = romeon.numSends;
                backup = michal.sends;
                backup = kiloes >= backup;
                report = true;
                if(backup) { _fun00022_ip = 375; continue _fun00021 }
 337:
                backup = romeon.viewDuration;
                michal = michal.viewTime;
                michal = backup >= michal;
                report = true;
                if(michal) { _fun00022_ip = 375; continue _fun00021 }
 358:
                verify = verify + 1;
                michal = offset.length;
                michal = verify < michal;
                report = false;
                if(michal) { _fun00022_ip = 302; continue _fun00021 }
 375:
                michal = !report;
                michal = !michal;
                if(!report) { _fun00022_ip = 467; continue _fun00021 }
 384:
                report = _closure1_slot19;
                report = report.channels;
                report = delete report[option];
                oscard = _closure1_slot20;
                report = oscard.add;
                report = report.bind(oscard)(option);
                oscard = _closure1_slot0;
                option = _closure1_slot2;
                report = 16;
                report = option[report];
                golfie = oscard.bind(golfie)(report);
                oscard = golfie.updateChannelUnreadSetting;
                report = tangon.guild_id;
                tangon = tangon.id;
                zuuluu = _closure1_slot14;
                zuuluu = zuuluu.ALL_MESSAGES;
                zuuluu = oscard.bind(golfie)(report, tangon, zuuluu);
                michal = true;
 467:
                entity = michal;
 470:
                return entity;
            }
        };
        report['value'] = oscard;
        entity[3] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    verify = michal.bind(entity)(option);
    michal = 'UnreadSettingNoticeStore2';
    verify['displayName'] = michal;
    verify['persistKey'] = michal;
    michal = 18;
    michal = oscard[michal];
    echoed = golfie.bind(entity)(michal);
    michal = {};
    golfie = function() { // Original name: handleChannelSelect
        michal = _closure1_slot27;
        entity = undefined;
        entity = michal.bind(entity)();
        tangon = _closure1_slot11;
        michal = tangon.getChannelId;
        michal = michal.bind(tangon)();
        _closure1_slot21 = michal;
        michal = global;
        tangon = michal.Date;
        michal = tangon.now;
        michal = michal.bind(tangon)();
        _closure1_slot22 = michal;
        return entity;
    };
    michal['CHANNEL_SELECT'] = golfie;
    golfie = function() { // Original name: handleConnectionOpen
        tangon = _closure1_slot11;
        entity = tangon.getChannelId;
        entity = entity.bind(tangon)();
        _closure1_slot21 = entity;
        tangon = global;
        report = tangon.Date;
        entity = report.now;
        entity = entity.bind(report)();
        _closure1_slot22 = entity;
        report = _closure1_slot28;
        entity = undefined;
        report = report.bind(entity)();
        report = tangon.Date;
        tangon = report.now;
        report = tangon.bind(report)();
        tangon = _closure1_slot18;
        tangon = report - tangon;
        var _closure2_slot0 = tangon;
        report = _closure1_slot1;
        oscard = _closure1_slot2;
        tangon = 14;
        tangon = oscard[tangon];
        report = report.bind(entity)(tangon);
        tangon = report.forEach;
        zuuluu = _closure1_slot19;
        zuuluu = zuuluu.channels;
        michal = function(argFoo, argBar) {
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                entity = argFoo;
                michal = entity.lastActionTime;
                entity = _closure2_slot0;
                if(!(michal < entity)) { _fun00024_ip = 40; continue _fun00023 }
 20:
                entity = _closure1_slot19;
                michal = entity.channels;
                entity = argBar;
                entity = delete michal[entity];
 40:
                entity = undefined;
                return entity;
            }
        };
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    michal['CONNECTION_OPEN'] = golfie;
    golfie = function(argFoo) { // Original name: handleMessageCreate
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            michal = argFoo;
            entity = michal.optimistic;
            if(entity) { _fun00026_ip = 156; continue _fun00025 }
 15:
            entity = michal.isPushNotification;
            if(entity) { _fun00026_ip = 156; continue _fun00025 }
 27:
            entity = michal.message;
            zuuluu = entity.author;
            entity = null;
            tangon = entity == zuuluu;
            entity = undefined;
            report = undefined;
            if(tangon) { _fun00026_ip = 56; continue _fun00025 }
 51:
            report = zuuluu.id;
 56:
            oscard = _closure1_slot8;
            tangon = oscard.getId;
            tangon = tangon.bind(oscard)();
            if(!(report === tangon)) { _fun00026_ip = 152; continue _fun00025 }
 77:
            report = _closure1_slot30;
            tangon = michal.channelId;
            tangon = report.bind(entity)(tangon);
            if(tangon) { _fun00026_ip = 98; continue _fun00025 }
 94:
            tangon = false;
            return tangon;
 98:
            zuuluu = _closure1_slot29;
            michal = michal.channelId;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = global;
            tangon = michal.Date;
            michal = tangon.now;
            michal = michal.bind(tangon)();
            zuuluu['lastActionTime'] = michal;
            michal = zuuluu.numSends;
            michal = michal + 1;
            zuuluu['numSends'] = michal;
            return entity;
 152:
            entity = false;
            return entity;
 156:
            entity = false;
            return entity;
        }
    };
    michal['MESSAGE_CREATE'] = golfie;
    golfie = verify.prototype;
    golfie = Object.create(golfie, {constructor: {value: verify}});
    update = golfie;
    result = michal;
    michal = new update[verify](echoed, result, output);
    michal = michal instanceof Object ? michal : golfie;
    var _closure1_slot24 = michal;
    tangon = 19;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/notifications/settings_unread_notice/UnreadSettingNoticeStore2.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();