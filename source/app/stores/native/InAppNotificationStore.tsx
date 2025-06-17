// app/stores/native/InAppNotificationStore.tsx
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
            _closure1_slot26 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot26 = entity;
    offset = function() { // Original name: handleAlertMessage
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 24;
            entity = zuuluu[entity];
            tangon = undefined;
            michal = michal.bind(tangon)(entity);
            entity = michal.allowInAppNotifications;
            entity = entity.bind(michal)();
            if(entity) { _fun00004_ip = 44; continue _fun00003 }
 40:
            entity = false;
            return entity;
 44:
            michal = _closure1_slot0;
            entity = _closure1_slot2;
            romeon = 30;
            entity = entity[romeon];
            michal = michal.bind(tangon)(entity);
            entity = michal.shouldShowRaidInAppNotification;
            michal = entity.bind(michal)();
            entity = michal.show;
            foxtra = michal.guildId;
            if(!entity) { _fun00004_ip = 335; continue _fun00003 }
 91:
            entity = null;
            if(!(entity != foxtra)) { _fun00004_ip = 335; continue _fun00003 }
 100:
            zuuluu = _closure1_slot15;
            michal = zuuluu.getGuild;
            option = michal.bind(zuuluu)(foxtra);
            var _closure2_slot0 = option;
            if(!(entity != option)) { _fun00004_ip = 331; continue _fun00003 }
 125:
            report = _closure1_slot14;
            zuuluu = report.getChannel;
            michal = option.getSafetyAlertsChannelId;
            michal = michal.bind(option)();
            verify = zuuluu.bind(report)(michal);
            var _closure2_slot1 = verify;
            entity = entity != verify;
            if(!entity) { _fun00004_ip = 329; continue _fun00003 }
 163:
            zuuluu = _closure1_slot17;
            michal = zuuluu.getChannelId;
            zuuluu = michal.bind(zuuluu)();
            michal = verify.id;
            michal = zuuluu !== michal;
            if(!michal) { _fun00004_ip = 326; continue _fun00003 }
 192:
            oscard = _closure1_slot23;
            report = oscard.wasRecentlyDismissed;
            zuuluu = {};
            zuuluu['guild'] = option;
            zuuluu['channel'] = verify;
            zuuluu = report.bind(oscard)(zuuluu);
            zuuluu = !zuuluu;
            if(!zuuluu) { _fun00004_ip = 323; continue _fun00003 }
 225:
            oscard = _closure1_slot28;
            report = {};
            golfie = {};
            backup = _closure1_slot20;
            backup = backup.ALERT;
            golfie['type'] = backup;
            golfie['key'] = foxtra;
            foxtra = _closure1_slot1;
            backup = _closure1_slot2;
            yankee = 31;
            yankee = backup[yankee];
            yankee = foxtra.bind(tangon)(yankee);
            yankee = yankee.Millis;
            yankee = yankee.SECOND;
            yankee = romeon * yankee;
            golfie['duration'] = yankee;
            offset = function() { // Original name: onDismiss
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 29;
                zuuluu = zuuluu[entity];
                entity = undefined;
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = tangon.clearNotification;
                zuuluu = zuuluu.bind(tangon)();
                tangon = _closure1_slot23;
                zuuluu = tangon.dismissNotification;
                michal = {};
                oscard = _closure2_slot0;
                michal['guild'] = oscard;
                report = _closure2_slot1;
                michal['channel'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            golfie['onDismiss'] = offset;
            golfie['channel'] = verify;
            golfie['guild'] = option;
            report['notification'] = golfie;
            report = oscard.bind(tangon)(report);
            zuuluu = undefined;
 323:
            michal = zuuluu;
 326:
            entity = michal;
 329:
            return entity;
 331:
            entity = false;
            return entity;
 335:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot27 = offset;
    verify = function(argFoo) { // Original name: handleEnqueueNotification
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            tangon = entity.notification;
            zuuluu = _closure1_slot25;
            michal = zuuluu.enqueue;
            michal = michal.bind(zuuluu)(tangon);
            zuuluu = _closure1_slot24;
            michal = null;
            if(!(michal == zuuluu)) { _fun00006_ip = 47; continue _fun00005 }
 37:
            michal = _closure1_slot29;
            entity = undefined;
            entity = michal.bind(entity)();
 47:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot28 = verify;
    entity = function() { // Original name: showNextNotification
        zuuluu = _closure1_slot25;
        entity = zuuluu.tryDrain;
        entity = entity.bind(zuuluu)();
        _closure1_slot24 = entity;
        entity = undefined;
        return entity;
    };
    var _closure1_slot29 = entity;
    entity = function(argFoo) { // Original name: rejectNotifications
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            report = argFoo;
            zuuluu = _closure1_slot25;
            michal = zuuluu.removeAll;
            michal = michal.bind(zuuluu)(report);
            michal = _closure1_slot24;
            zuuluu = null;
            if(!(zuuluu != michal)) { _fun00008_ip = 47; continue _fun00007 }
 33:
            tangon = _closure1_slot24;
            michal = undefined;
            tangon = report.bind(michal)(tangon);
            if(tangon) { _fun00008_ip = 71; continue _fun00007 }
 47:
            tangon = _closure1_slot24;
            if(!(zuuluu == tangon)) { _fun00008_ip = 67; continue _fun00007 }
 55:
            report = _closure1_slot29;
            tangon = undefined;
            tangon = report.bind(tangon)();
            _fun00008_ip = 83; continue _fun00007;
 67:
            tangon = false;
            return tangon;
 71:
            _closure1_slot24 = zuuluu;
            entity = _closure1_slot29;
            entity = entity.bind(michal)();
 83:
            entity = true;
            return entity;
        }
    };
    var _closure1_slot30 = entity;
    entity = global;
    yankee = entity.Object;
    option = yankee.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(yankee)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
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
    michal = report.bind(entity)(michal);
    michal = michal.trackMessageNotificationTimestamps;
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
    michal = golfie.bind(entity)(michal);
    var _closure1_slot17 = michal;
    michal = 15;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot18 = michal;
    michal = 16;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    option = michal.ChannelTypes;
    var _closure1_slot19 = option;
    option = michal.InAppNotificationTypes;
    var _closure1_slot20 = option;
    michal = michal.MessageTypesSets;
    var _closure1_slot21 = michal;
    michal = 17;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.ActivityPanelModes;
    var _closure1_slot22 = michal;
    michal = function() {
        tangon = _closure1_slot7;
        zuuluu = function() { // Original name: AlertDismissalHandler
            zuuluu = this;
            report = _closure1_slot6;
            michal = _closure2_slot0;
            entity = undefined;
            michal = report.bind(entity)(zuuluu, michal);
            michal = {};
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            report = 18;
            tangon = golfie[report];
            tangon = oscard.bind(entity)(tangon);
            tangon = tangon.GuildIncidentAlertTypes;
            verify = tangon.JOIN_RAID;
            tangon = global;
            option = tangon.Map;
            offset = option.prototype;
            offset = Object.create(offset, {constructor: {value: option}});
            foxtra = offset;
            option = new foxtra[option](romeon);
            option = option instanceof Object ? option : offset;
            michal[verify] = option;
            report = golfie[report];
            report = oscard.bind(entity)(report);
            report = report.GuildIncidentAlertTypes;
            report = report.DM_RAID;
            tangon = tangon.Map;
            oscard = tangon.prototype;
            oscard = Object.create(oscard, {constructor: {value: tangon}});
            foxtra = oscard;
            tangon = new foxtra[tangon](romeon);
            tangon = tangon instanceof Object ? tangon : oscard;
            michal[report] = tangon;
            zuuluu['dissmissedAlertsMap'] = michal;
            michal = {'amount': 1, 'unitOfTime': 'hour'};
            zuuluu['threshold'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'key';
        entity['key'] = michal;
        michal = function(argFoo) { // Original name: value
            entity = argFoo;
            michal = entity.guild;
            entity = entity.channel;
            michal = michal.id;
            entity = entity.id;
            entity = michal + entity;
            return entity;
        };
        entity['value'] = michal;
        michal = new Array(3);
        michal[0] = entity;
        entity = {};
        oscard = 'dismissNotification';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                entity = argFoo;
                zuuluu = this;
                option = entity.guild;
                golfie = entity.channel;
                report = _closure1_slot0;
                tangon = _closure1_slot2;
                entity = 19;
                tangon = tangon[entity];
                entity = undefined;
                oscard = report.bind(entity)(tangon);
                report = oscard.getIncidentAlertType;
                offset = _closure1_slot10;
                verify = offset.getGuildIncident;
                tangon = option.id;
                tangon = verify.bind(offset)(tangon);
                tangon = report.bind(oscard)(tangon);
                report = null;
                if(!(report != tangon)) { _fun00010_ip = 143; continue _fun00009 }
 78:
                oscard = zuuluu.key;
                report = {};
                report['guild'] = option;
                report['channel'] = golfie;
                report = oscard.bind(zuuluu)(report);
                zuuluu = zuuluu.dissmissedAlertsMap;
                tangon = zuuluu[tangon];
                zuuluu = tangon.set;
                oscard = _closure1_slot1;
                golfie = _closure1_slot2;
                michal = 20;
                michal = golfie[michal];
                michal = oscard.bind(entity)(michal);
                michal = michal.bind(entity)();
                michal = zuuluu.bind(tangon)(report, michal);
 143:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'wasRecentlyDismissed';
        entity['key'] = oscard;
        report = function(argFoo) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                entity = argFoo;
                michal = this;
                option = entity.guild;
                oscard = entity.channel;
                tangon = _closure1_slot0;
                report = _closure1_slot2;
                entity = 19;
                entity = report[entity];
                golfie = undefined;
                report = tangon.bind(golfie)(entity);
                tangon = report.getIncidentAlertType;
                offset = _closure1_slot10;
                verify = offset.getGuildIncident;
                entity = option.id;
                entity = verify.bind(offset)(entity);
                tangon = tangon.bind(report)(entity);
                entity = null;
                if(!(entity != tangon)) { _fun00012_ip = 208; continue _fun00011 }
 81:
                report = michal.key;
                entity = {};
                entity['guild'] = option;
                entity['channel'] = oscard;
                report = report.bind(michal)(entity);
                entity = michal.dissmissedAlertsMap;
                tangon = entity[tangon];
                entity = tangon.get;
                tangon = entity.bind(tangon)(report);
                entity = golfie !== tangon;
                if(!entity) { _fun00012_ip = 206; continue _fun00011 }
 128:
                option = _closure1_slot1;
                verify = _closure1_slot2;
                zuuluu = 20;
                report = verify[zuuluu];
                report = option.bind(golfie)(report);
                oscard = report.bind(golfie)();
                report = oscard.diff;
                zuuluu = verify[zuuluu];
                zuuluu = option.bind(golfie)(zuuluu);
                tangon = zuuluu.bind(golfie)(tangon);
                zuuluu = michal.threshold;
                zuuluu = zuuluu.unitOfTime;
                zuuluu = report.bind(oscard)(tangon, zuuluu);
                michal = michal.threshold;
                michal = michal.amount;
                entity = zuuluu < michal;
 206:
                return entity;
 208:
                entity = false;
                return entity;
            }
        };
        entity['value'] = report;
        michal[2] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    option = michal.prototype;
    option = Object.create(option, {constructor: {value: michal}});
    kiloes = option;
    michal = new kiloes[michal](backup);
    michal = michal instanceof Object ? michal : option;
    var _closure1_slot23 = michal;
    michal = null;
    var _closure1_slot24 = michal;
    michal = function() {
        tangon = _closure1_slot7;
        zuuluu = function() { // Original name: NotificationQueue
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                zuuluu = arguments[0];
                michal = this;
                entity = undefined;
                if(!(zuuluu === entity)) { _fun00014_ip = 15; continue _fun00013 }
 12:
                zuuluu = 2;
 15:
                report = _closure1_slot6;
                tangon = _closure2_slot0;
                tangon = report.bind(entity)(michal, tangon);
                tangon = new Array(0);
                michal['queue'] = tangon;
                michal['maxSize'] = zuuluu;
                return entity;
            }
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'enqueue';
        entity['key'] = michal;
        michal = function(argFoo) { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                entity = this;
                michal = entity.isFull;
                michal = michal.bind(entity)();
                if(!michal) { _fun00016_ip = 34; continue _fun00015 }
 18:
                zuuluu = entity.queue;
                michal = zuuluu.shift;
                michal = michal.bind(zuuluu)();
 34:
                zuuluu = entity.queue;
                michal = zuuluu.push;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = michal;
        michal = new Array(4);
        michal[0] = entity;
        entity = {};
        oscard = 'tryDrain';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            entity = this;
            michal = entity.queue;
            entity = michal.shift;
            entity = entity.bind(michal)();
            return entity;
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'isFull';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            entity = this;
            michal = entity.queue;
            michal = michal.length;
            entity = entity.maxSize;
            entity = michal >= entity;
            return entity;
        };
        entity['value'] = oscard;
        michal[2] = entity;
        entity = {};
        oscard = 'removeAll';
        entity['key'] = oscard;
        report = function(argFoo) { // Original name: value
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 21;
            michal = michal[entity];
            entity = undefined;
            report = zuuluu.bind(entity)(michal);
            tangon = report.remove;
            michal = this;
            zuuluu = michal.queue;
            michal = argFoo;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        };
        entity['value'] = report;
        michal[3] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    option = michal.prototype;
    option = Object.create(option, {constructor: {value: michal}});
    kiloes = option;
    michal = new kiloes[michal](backup);
    michal = michal instanceof Object ? michal : option;
    var _closure1_slot25 = michal;
    michal = 38;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    option = michal.Store;
    michal = function(argFoo) {
        tangon = function() { // Original name: InAppNotificationStore
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                tangon = this;
                zuuluu = undefined;
                report = undefined;
                entity = _closure1_slot6;
                michal = _closure2_slot0;
                entity = entity.bind(zuuluu)(tangon, michal);
                entity = _closure1_slot4;
                verify = entity.bind(zuuluu)(michal);
                michal = _closure1_slot3;
                entity = _closure1_slot26;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00018_ip = 69; continue _fun00017 }
 51:
                golfie = verify.apply;
                report = arguments;
                entity = report;
                entity = golfie.bind(verify)(tangon, entity);
                _fun00018_ip = 105; continue _fun00017;
 69:
                golfie = global;
                option = golfie.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot4;
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
        report = _closure1_slot5;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot7;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            tangon = this;
            verify = tangon.waitFor;
            kiloes = _closure1_slot18;
            backup = _closure1_slot14;
            foxtra = _closure1_slot15;
            romeon = _closure1_slot16;
            yankee = _closure1_slot12;
            report = _closure1_slot10;
            sizing = tangon;
            offset = report;
            michal = sizing[verify](kiloes, backup, foxtra, romeon, yankee, offset, verify);
            zuuluu = tangon.syncWith;
            michal = new Array(1);
            michal[0] = report;
            entity = _closure1_slot27;
            entity = zuuluu.bind(tangon)(michal, entity);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(2);
        entity[0] = report;
        report = {};
        golfie = 'getCurrentNotification';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            entity = _closure1_slot24;
            return entity;
        };
        report['value'] = oscard;
        entity[1] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    option = michal.bind(entity)(option);
    michal = 'InAppNotificationStore';
    option['displayName'] = michal;
    michal = 39;
    michal = oscard[michal];
    backup = golfie.bind(entity)(michal);
    michal = {};
    michal['POST_CONNECTION_OPEN'] = offset;
    michal['GUILD_UPDATE'] = offset;
    offset = function(argFoo) { // Original name: handleIncomingMessage
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            entity = argFoo;
            tangon = entity.message;
            michal = entity.optimistic;
            report = tangon.channel_id;
            golfie = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 22;
            zuuluu = zuuluu[entity];
            entity = undefined;
            golfie = golfie.bind(entity)(zuuluu);
            zuuluu = golfie.canViewPotentiallyNSFWChannel;
            zuuluu = zuuluu.bind(golfie)(report);
            if(zuuluu) { _fun00020_ip = 62; continue _fun00019 }
 58:
            zuuluu = false;
            return zuuluu;
 62:
            golfie = _closure1_slot1;
            option = _closure1_slot2;
            zuuluu = 23;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(entity)(zuuluu);
            zuuluu = zuuluu.bind(entity)(tangon);
            if(!zuuluu) { _fun00020_ip = 122; continue _fun00019 }
 90:
            zuuluu = _closure1_slot21;
            option = zuuluu.SELF_MENTIONABLE_SYSTEM;
            golfie = option.has;
            zuuluu = tangon.type;
            zuuluu = golfie.bind(option)(zuuluu);
            if(zuuluu) { _fun00020_ip = 122; continue _fun00019 }
 118:
            zuuluu = false;
            return zuuluu;
 122:
            if(michal) { _fun00020_ip = 630; continue _fun00019 }
 128:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            option = 24;
            michal = michal[option];
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.allowInAppNotifications;
            michal = michal.bind(zuuluu)();
            if(!michal) { _fun00020_ip = 630; continue _fun00019 }
 164:
            zuuluu = _closure1_slot1;
            golfie = _closure1_slot2;
            michal = 25;
            michal = golfie[michal];
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.isEnabled;
            michal = michal.bind(zuuluu)();
            if(michal) { _fun00020_ip = 630; continue _fun00019 }
 200:
            zuuluu = _closure1_slot9;
            michal = zuuluu.getChatOpen;
            michal = michal.bind(zuuluu)(report);
            if(michal) { _fun00020_ip = 630; continue _fun00019 }
 221:
            zuuluu = _closure1_slot13;
            michal = zuuluu.getState;
            zuuluu = michal.bind(zuuluu)();
            michal = zuuluu.isVoicePanelFullscreen;
            michal = michal.bind(zuuluu)();
            golfie = true;
            if(michal) { _fun00020_ip = 392; continue _fun00019 }
 253:
            zuuluu = _closure1_slot8;
            michal = zuuluu.getConnectedActivityLocation;
            zuuluu = michal.bind(zuuluu)();
            michal = null;
            if(!(michal != zuuluu)) { _fun00020_ip = 303; continue _fun00019 }
 273:
            verify = _closure1_slot8;
            zuuluu = verify.getActivityPanelMode;
            verify = zuuluu.bind(verify)();
            zuuluu = _closure1_slot22;
            zuuluu = zuuluu.PANEL;
            golfie = true;
            if(!(verify !== zuuluu)) { _fun00020_ip = 392; continue _fun00019 }
 303:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            zuuluu = 26;
            zuuluu = offset[zuuluu];
            verify = verify.bind(entity)(zuuluu);
            zuuluu = verify.getRootNavigationRef;
            verify = zuuluu.bind(verify)();
            michal = michal == verify;
            if(michal) { _fun00020_ip = 353; continue _fun00019 }
 340:
            zuuluu = verify.isReady;
            zuuluu = zuuluu.bind(verify)();
            michal = !zuuluu;
 353:
            if(michal) { _fun00020_ip = 389; continue _fun00019 }
 356:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            zuuluu = 27;
            zuuluu = offset[zuuluu];
            verify = verify.bind(entity)(zuuluu);
            zuuluu = verify.isChannelFocused;
            zuuluu = zuuluu.bind(verify)();
            michal = !zuuluu;
 389:
            golfie = michal;
 392:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[option];
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.shouldNotify;
            michal = michal.bind(zuuluu)(tangon, report, golfie);
            if(michal) { _fun00020_ip = 429; continue _fun00019 }
 425:
            michal = false;
            return michal;
 429:
            zuuluu = _closure1_slot14;
            michal = zuuluu.getChannel;
            report = michal.bind(zuuluu)(report);
            michal = null;
            if(!(michal != report)) { _fun00020_ip = 626; continue _fun00019 }
 452:
            zuuluu = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 28;
            michal = golfie[michal];
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.createMessageRecord;
            golfie = michal.bind(zuuluu)(tangon);
            zuuluu = _closure1_slot11;
            michal = report.guild_id;
            michal = zuuluu.bind(entity)(tangon, michal);
            zuuluu = _closure1_slot28;
            michal = {};
            tangon = {};
            option = _closure1_slot20;
            option = option.MESSAGE;
            tangon['type'] = option;
            offset = _closure1_slot15;
            verify = offset.getGuild;
            option = report.getGuildId;
            option = option.bind(report)();
            option = verify.bind(offset)(option);
            tangon['guild'] = option;
            tangon['channel'] = report;
            tangon['message'] = golfie;
            golfie = golfie.id;
            tangon['key'] = golfie;
            golfie = 5000;
            tangon['duration'] = golfie;
            golfie = function() { // Original name: onDismiss
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 29;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.clearNotification;
                michal = michal.bind(zuuluu)();
                return entity;
            };
            tangon['onDismiss'] = golfie;
            golfie = _closure1_slot14;
            oscard = golfie.getChannel;
            report = report.parent_id;
            report = oscard.bind(golfie)(report);
            tangon['parentChannel'] = report;
            michal['notification'] = tangon;
            michal = zuuluu.bind(entity)(michal);
            return entity;
 626:
            entity = false;
            return entity;
 630:
            entity = false;
            return entity;
        }
    };
    michal['MESSAGE_CREATE'] = offset;
    offset = function(argFoo) { // Original name: handleReactionNotification
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            michal = argFoo;
            offset = michal.message;
            oscard = michal.route;
            entity = michal.emoji;
            var _closure2_slot0 = entity;
            foxtra = michal.reactorUserId;
            tangon = null;
            if(!(tangon != offset)) { _fun00022_ip = 753; continue _fun00021 }
 41:
            michal = offset.reactions;
            if(!(tangon != michal)) { _fun00022_ip = 753; continue _fun00021 }
 54:
            if(!(tangon != entity)) { _fun00022_ip = 753; continue _fun00021 }
 61:
            zuuluu = _closure1_slot0;
            entity = _closure1_slot2;
            report = 24;
            michal = entity[report];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.allowInAppNotifications;
            michal = michal.bind(zuuluu)();
            if(!michal) { _fun00022_ip = 753; continue _fun00021 }
 102:
            zuuluu = _closure1_slot0;
            option = _closure1_slot2;
            michal = 32;
            michal = option[michal];
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.tryParseChannelPath;
            michal = michal.bind(zuuluu)(oscard);
            if(!(tangon == michal)) { _fun00022_ip = 151; continue _fun00021 }
 137:
            michal = {'channelId': null, 'guildId': null};
 151:
            yankee = michal.channelId;
            verify = michal.guildId;
            if(!(tangon != yankee)) { _fun00022_ip = 749; continue _fun00021 }
 168:
            zuuluu = _closure1_slot17;
            michal = zuuluu.getCurrentlySelectedChannelId;
            michal = michal.bind(zuuluu)();
            if(!(michal !== yankee)) { _fun00022_ip = 749; continue _fun00021 }
 189:
            if(!(tangon != verify)) { _fun00022_ip = 749; continue _fun00021 }
 196:
            oscard = _closure1_slot0;
            option = _closure1_slot2;
            michal = 33;
            michal = option[michal];
            michal = oscard.bind(entity)(michal);
            zuuluu = michal.ReactionNotifications;
            michal = zuuluu.getSetting;
            zuuluu = michal.bind(zuuluu)();
            michal = 34;
            michal = option[michal];
            michal = oscard.bind(entity)(michal);
            michal = michal.ReactionNotificationType;
            michal = michal.NOTIFICATIONS_DISABLED;
            if(!(zuuluu !== michal)) { _fun00022_ip = 745; continue _fun00021 }
 263:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[report];
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.shouldNotify;
            michal = michal.bind(zuuluu)(offset, yankee);
            if(michal) { _fun00022_ip = 299; continue _fun00021 }
 295:
            michal = false;
            return michal;
 299:
            zuuluu = _closure1_slot14;
            michal = zuuluu.getChannel;
            oscard = michal.bind(zuuluu)(yankee);
            zuuluu = tangon == oscard;
            michal = undefined;
            if(zuuluu) { _fun00022_ip = 327; continue _fun00021 }
 322:
            michal = oscard.type;
 327:
            zuuluu = tangon != michal;
            if(!zuuluu) { _fun00022_ip = 353; continue _fun00021 }
 334:
            report = oscard.type;
            michal = _closure1_slot19;
            michal = michal.GUILD_ANNOUNCEMENT;
            zuuluu = report === michal;
 353:
            report = _closure1_slot0;
            option = _closure1_slot2;
            michal = 35;
            michal = option[michal];
            backup = report.bind(entity)(michal);
            option = backup.isReactionMilestoneNotification;
            report = offset.reactions;
            kiloes = tangon == oscard;
            michal = undefined;
            if(kiloes) { _fun00022_ip = 399; continue _fun00021 }
 394:
            michal = oscard.type;
 399:
            michal = option.bind(backup)(report, michal);
            option = _closure1_slot15;
            report = option.getGuild;
            verify = report.bind(option)(verify);
            option = _closure1_slot18;
            report = option.getUser;
            option = report.bind(option)(foxtra);
            if(!(tangon != oscard)) { _fun00022_ip = 741; continue _fun00021 }
 441:
            if(!(tangon == option)) { _fun00022_ip = 451; continue _fun00021 }
 445:
            if(!zuuluu) { _fun00022_ip = 741; continue _fun00021 }
 451:
            backup = offset.reactions;
            foxtra = backup.find;
            report = function(argFoo) {
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    zuuluu = argFoo;
                    entity = zuuluu.emoji;
                    tangon = entity.id;
                    entity = _closure2_slot0;
                    entity = entity.id;
                    entity = tangon === entity;
                    if(!entity) { _fun00024_ip = 48; continue _fun00023 }
 33:
                    tangon = _closure2_slot0;
                    report = tangon.id;
                    tangon = null;
                    entity = tangon != report;
 48:
                    if(entity) { _fun00024_ip = 75; continue _fun00023 }
 51:
                    zuuluu = zuuluu.emoji;
                    zuuluu = zuuluu.name;
                    michal = _closure2_slot0;
                    michal = michal.name;
                    entity = zuuluu === michal;
 75:
                    return entity;
                }
            };
            foxtra = foxtra.bind(backup)(report);
            backup = tangon != foxtra;
            report = undefined;
            if(!backup) { _fun00022_ip = 486; continue _fun00021 }
 483:
            report = foxtra;
 486:
            if(!(tangon == report)) { _fun00022_ip = 500; continue _fun00021 }
 490:
            if(zuuluu) { _fun00022_ip = 500; continue _fun00021 }
 493:
            if(michal) { _fun00022_ip = 500; continue _fun00021 }
 496:
            michal = false;
            return michal;
 500:
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 36;
            michal = tangon[michal];
            foxtra = zuuluu.bind(entity)(michal);
            tangon = foxtra.getCurrentConfig;
            zuuluu = {};
            michal = 'handleReactionAdd';
            zuuluu['location'] = michal;
            michal = {};
            backup = true;
            michal['autoTrackExposure'] = backup;
            michal = tangon.bind(foxtra)(zuuluu, michal);
            zuuluu = michal.enableInAppNotifications;
            michal = michal.enableNotificationsForAllReactions;
            if(!zuuluu) { _fun00022_ip = 571; continue _fun00021 }
 568:
            if(michal) { _fun00022_ip = 575; continue _fun00021 }
 571:
            michal = false;
            return michal;
 575:
            zuuluu = _closure1_slot28;
            michal = {};
            tangon = {};
            foxtra = _closure1_slot20;
            foxtra = foxtra.REACTION;
            tangon['type'] = foxtra;
            tangon['key'] = yankee;
            backup = _closure1_slot1;
            yankee = _closure1_slot2;
            foxtra = 31;
            foxtra = yankee[foxtra];
            foxtra = backup.bind(entity)(foxtra);
            foxtra = foxtra.Millis;
            backup = foxtra.SECOND;
            foxtra = 5;
            foxtra = foxtra * backup;
            tangon['duration'] = foxtra;
            romeon = function() { // Original name: onDismiss
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 29;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.clearNotification;
                michal = michal.bind(zuuluu)();
                return entity;
            };
            tangon['onDismiss'] = romeon;
            tangon['channel'] = oscard;
            tangon['guild'] = verify;
            tangon['user'] = option;
            verify = _closure1_slot0;
            option = 28;
            option = yankee[option];
            verify = verify.bind(entity)(option);
            option = verify.createMessageRecord;
            option = option.bind(verify)(offset);
            tangon['message'] = option;
            option = _closure1_slot14;
            golfie = option.getChannel;
            oscard = oscard.parent_id;
            oscard = golfie.bind(option)(oscard);
            tangon['parentChannel'] = oscard;
            tangon['reaction'] = report;
            michal['notification'] = tangon;
            michal = zuuluu.bind(entity)(michal);
            return entity;
 741:
            entity = false;
            return entity;
 745:
            entity = false;
            return entity;
 749:
            entity = false;
            return entity;
 753:
            entity = false;
            return entity;
        }
    };
    michal['REACTION_NOTIFICATION_SENT'] = offset;
    offset = function(argFoo) { // Original name: handleMessageReminderDue
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            entity = argFoo;
            report = entity.savedMessage;
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 37;
            michal = michal[entity];
            entity = undefined;
            oscard = zuuluu.bind(entity)(michal);
            tangon = oscard.getCurrentConfig;
            zuuluu = {};
            michal = 'inAppNotificationStore';
            zuuluu['location'] = michal;
            michal = {};
            option = false;
            michal['autoTrackExposure'] = option;
            michal = tangon.bind(oscard)(zuuluu, michal);
            michal = michal.enabled;
            if(!michal) { _fun00026_ip = 292; continue _fun00025 }
 78:
            zuuluu = report.message;
            michal = null;
            if(!(michal != zuuluu)) { _fun00026_ip = 292; continue _fun00025 }
 92:
            oscard = _closure1_slot14;
            tangon = oscard.getChannel;
            zuuluu = report.saveData;
            zuuluu = zuuluu.channelId;
            oscard = tangon.bind(oscard)(zuuluu);
            if(!(michal != oscard)) { _fun00026_ip = 292; continue _fun00025 }
 124:
            zuuluu = _closure1_slot28;
            michal = {};
            tangon = {};
            option = _closure1_slot20;
            option = option.MESSAGE_REMINDER;
            tangon['type'] = option;
            option = report.saveData;
            romeon = option.channelId;
            option = report.saveData;
            yankee = option.messageId;
            option = global;
            option = option.HermesInternal;
            offset = option.concat;
            verify = '';
            option = '-';
            option = offset.bind(verify)(romeon, option, yankee);
            tangon['key'] = option;
            option = _closure1_slot1;
            verify = _closure1_slot2;
            golfie = 31;
            golfie = verify[golfie];
            golfie = option.bind(entity)(golfie);
            golfie = golfie.Millis;
            option = golfie.SECOND;
            golfie = 10;
            golfie = golfie * option;
            tangon['duration'] = golfie;
            golfie = function() { // Original name: onDismiss
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 29;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.clearNotification;
                michal = michal.bind(zuuluu)();
                return entity;
            };
            tangon['onDismiss'] = golfie;
            tangon['channel'] = oscard;
            oscard = report.message;
            oscard = oscard.author;
            tangon['author'] = oscard;
            tangon['savedMessage'] = report;
            michal['notification'] = tangon;
            michal = zuuluu.bind(entity)(michal);
 292:
            return entity;
        }
    };
    michal['MESSAGE_REMINDER_DUE'] = offset;
    offset = function(argFoo) { // Original name: handleThreadCreate
        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
            entity = argFoo;
            report = entity.channel;
            entity = entity.isNewlyCreated;
            tangon = _closure1_slot14;
            zuuluu = tangon.getChannel;
            michal = report.parent_id;
            golfie = zuuluu.bind(tangon)(michal);
            michal = null;
            if(!(michal != golfie)) { _fun00028_ip = 308; continue _fun00027 }
 46:
            zuuluu = golfie.isForumLikeChannel;
            zuuluu = zuuluu.bind(golfie)();
            if(!zuuluu) { _fun00028_ip = 308; continue _fun00027 }
 62:
            if(entity) { _fun00028_ip = 69; continue _fun00027 }
 65:
            entity = false;
            return entity;
 69:
            oscard = _closure1_slot0;
            entity = _closure1_slot2;
            zuuluu = 24;
            tangon = entity[zuuluu];
            entity = undefined;
            oscard = oscard.bind(entity)(tangon);
            tangon = oscard.allowInAppNotifications;
            tangon = tangon.bind(oscard)();
            if(!tangon) { _fun00028_ip = 162; continue _fun00027 }
 104:
            option = _closure1_slot0;
            offset = _closure1_slot2;
            zuuluu = offset[zuuluu];
            oscard = option.bind(entity)(zuuluu);
            tangon = oscard.shouldNotifyForForumThreadCreation;
            zuuluu = 27;
            zuuluu = offset[zuuluu];
            option = option.bind(entity)(zuuluu);
            zuuluu = option.isChannelFocused;
            zuuluu = zuuluu.bind(option)();
            zuuluu = !zuuluu;
            zuuluu = tangon.bind(oscard)(report, golfie, zuuluu);
            if(zuuluu) { _fun00028_ip = 166; continue _fun00027 }
 162:
            zuuluu = false;
            return zuuluu;
 166:
            oscard = _closure1_slot18;
            tangon = oscard.getUser;
            zuuluu = report.ownerId;
            option = tangon.bind(oscard)(zuuluu);
            if(!(michal != option)) { _fun00028_ip = 304; continue _fun00027 }
 191:
            oscard = _closure1_slot15;
            tangon = oscard.getGuild;
            zuuluu = golfie.guild_id;
            oscard = tangon.bind(oscard)(zuuluu);
            if(!(michal != oscard)) { _fun00028_ip = 300; continue _fun00027 }
 214:
            zuuluu = _closure1_slot28;
            michal = {};
            tangon = {};
            verify = _closure1_slot20;
            verify = verify.FORUM_THREAD_CREATED;
            tangon['type'] = verify;
            tangon['thread'] = report;
            tangon['threadCreator'] = option;
            tangon['parentChannel'] = golfie;
            tangon['guild'] = oscard;
            report = report.id;
            tangon['key'] = report;
            report = 5000;
            tangon['duration'] = report;
            report = function() { // Original name: onDismiss
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 29;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.clearNotification;
                michal = michal.bind(zuuluu)();
                return entity;
            };
            tangon['onDismiss'] = report;
            michal['notification'] = tangon;
            michal = zuuluu.bind(entity)(michal);
            return entity;
 300:
            entity = false;
            return entity;
 304:
            entity = false;
            return entity;
 308:
            entity = false;
            return entity;
        }
    };
    michal['THREAD_CREATE'] = offset;
    offset = function() { // Original name: handleClearInAppNotification
        michal = null;
        _closure1_slot24 = michal;
        michal = _closure1_slot29;
        entity = undefined;
        michal = michal.bind(entity)();
        return entity;
    };
    michal['CLEAR_IN_APP_NOTIFICATION'] = offset;
    michal['ENQUEUE_IN_APP_NOTIFICATION'] = verify;
    verify = function(argFoo) { // Original name: handleChannelSelect
        michal = argFoo;
        michal = michal.channelId;
        var _closure2_slot0 = michal;
        zuuluu = _closure1_slot30;
        michal = undefined;
        entity = function(argFoo) {
            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                zuuluu = argFoo;
                tangon = zuuluu.type;
                entity = _closure1_slot20;
                entity = entity.MESSAGE;
                entity = tangon === entity;
                if(!entity) { _fun00030_ip = 49; continue _fun00029 }
 28:
                tangon = zuuluu.channel;
                report = tangon.id;
                tangon = _closure2_slot0;
                entity = report === tangon;
 49:
                if(entity) { _fun00030_ip = 93; continue _fun00029 }
 52:
                report = zuuluu.type;
                tangon = _closure1_slot20;
                tangon = tangon.MESSAGE_FAILED_TO_SEND;
                tangon = report === tangon;
                if(!tangon) { _fun00030_ip = 90; continue _fun00029 }
 74:
                oscard = zuuluu.channelId;
                report = _closure2_slot0;
                tangon = oscard === report;
 90:
                entity = tangon;
 93:
                if(entity) { _fun00030_ip = 142; continue _fun00029 }
 96:
                tangon = zuuluu.type;
                michal = _closure1_slot20;
                michal = michal.ALERT;
                michal = tangon === michal;
                if(!michal) { _fun00030_ip = 139; continue _fun00029 }
 118:
                zuuluu = zuuluu.channel;
                tangon = zuuluu.id;
                zuuluu = _closure2_slot0;
                michal = tangon === zuuluu;
 139:
                entity = michal;
 142:
                return entity;
            }
        };
        entity = zuuluu.bind(michal)(entity);
        return entity;
    };
    michal['CHANNEL_SELECT'] = verify;
    verify = function(argFoo) { // Original name: handleVoiceChatOpen
        michal = argFoo;
        zuuluu = michal.channelId;
        var _closure2_slot0 = zuuluu;
        michal = michal.chatOpen;
        var _closure2_slot1 = michal;
        zuuluu = _closure1_slot30;
        michal = undefined;
        entity = function(argFoo) {
            _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                michal = argFoo;
                zuuluu = michal.type;
                entity = _closure1_slot20;
                entity = entity.MESSAGE;
                entity = zuuluu === entity;
                if(!entity) { _fun00032_ip = 49; continue _fun00031 }
 28:
                michal = michal.channel;
                zuuluu = michal.id;
                michal = _closure2_slot0;
                entity = zuuluu === michal;
 49:
                if(!entity) { _fun00032_ip = 59; continue _fun00031 }
 52:
                entity = _closure2_slot1;
 59:
                return entity;
            }
        };
        entity = zuuluu.bind(michal)(entity);
        return entity;
    };
    michal['CHANNEL_RTC_UPDATE_CHAT_OPEN'] = verify;
    tangon = function() { // Original name: handleUserSettingsUpdate
        zuuluu = _closure1_slot30;
        michal = undefined;
        entity = function(argFoo) {
            entity = argFoo;
            michal = entity.type;
            entity = _closure1_slot20;
            entity = entity.MESSAGE;
            entity = michal === entity;
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        return entity;
    };
    michal['USER_SETTINGS_PROTO_UPDATE'] = tangon;
    tangon = option.prototype;
    tangon = Object.create(tangon, {constructor: {value: option}});
    kiloes = tangon;
    foxtra = michal;
    michal = new kiloes[option](backup, foxtra, romeon);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 40;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'stores/native/InAppNotificationStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();