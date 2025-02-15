// app/stores/native/InAppNotificationStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot4;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot3;
            entity = _closure1_slot27;
            entity = entity.bind(zulu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot4;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot26 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
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
            _fun00004_ip = 76; continue _fun00003;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot27 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot27 = entity;
    offset = function() { // Original name: handleAlertMessage
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            mike = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 24;
            entity = zulu[entity];
            tango = undefined;
            mike = mike.bind(tango)(entity);
            entity = mike.allowInAppNotifications;
            entity = entity.bind(mike)();
            if(entity) { _fun00006_ip = 44; continue _fun00005 }
 40:
            entity = false;
            return entity;
 44:
            mike = _closure1_slot0;
            entity = _closure1_slot2;
            romeo = 30;
            entity = entity[romeo];
            mike = mike.bind(tango)(entity);
            entity = mike.shouldShowRaidInAppNotification;
            mike = entity.bind(mike)();
            entity = mike.show;
            foxtrot = mike.guildId;
            if(!entity) { _fun00006_ip = 335; continue _fun00005 }
 91:
            entity = null;
            if(!(entity != foxtrot)) { _fun00006_ip = 335; continue _fun00005 }
 100:
            zulu = _closure1_slot15;
            mike = zulu.getGuild;
            options = mike.bind(zulu)(foxtrot);
            var _closure2_slot0 = options;
            if(!(entity != options)) { _fun00006_ip = 331; continue _fun00005 }
 125:
            report = _closure1_slot14;
            zulu = report.getChannel;
            mike = options.getSafetyAlertsChannelId;
            mike = mike.bind(options)();
            verify = zulu.bind(report)(mike);
            var _closure2_slot1 = verify;
            entity = entity != verify;
            if(!entity) { _fun00006_ip = 329; continue _fun00005 }
 163:
            zulu = _closure1_slot17;
            mike = zulu.getChannelId;
            zulu = mike.bind(zulu)();
            mike = verify.id;
            mike = zulu !== mike;
            if(!mike) { _fun00006_ip = 326; continue _fun00005 }
 192:
            oscar = _closure1_slot23;
            report = oscar.wasRecentlyDismissed;
            zulu = {};
            zulu['guild'] = options;
            zulu['channel'] = verify;
            zulu = report.bind(oscar)(zulu);
            zulu = !zulu;
            if(!zulu) { _fun00006_ip = 323; continue _fun00005 }
 225:
            oscar = _closure1_slot29;
            report = {};
            golf = {};
            backup = _closure1_slot20;
            backup = backup.ALERT;
            golf['type'] = backup;
            golf['key'] = foxtrot;
            foxtrot = _closure1_slot1;
            backup = _closure1_slot2;
            yankee = 31;
            yankee = backup[yankee];
            yankee = foxtrot.bind(tango)(yankee);
            yankee = yankee.Millis;
            yankee = yankee.SECOND;
            yankee = romeo * yankee;
            golf['duration'] = yankee;
            offset = function() { // Original name: onDismiss
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 29;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.clearNotification;
                zulu = zulu.bind(tango)();
                tango = _closure1_slot23;
                zulu = tango.dismissNotification;
                mike = {};
                oscar = _closure2_slot0;
                mike['guild'] = oscar;
                report = _closure2_slot1;
                mike['channel'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            golf['onDismiss'] = offset;
            golf['channel'] = verify;
            golf['guild'] = options;
            report['notification'] = golf;
            report = oscar.bind(tango)(report);
            zulu = undefined;
 323:
            mike = zulu;
 326:
            entity = mike;
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
    var _closure1_slot28 = offset;
    verify = function(argFoo) { // Original name: handleEnqueueNotification
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            tango = entity.notification;
            zulu = _closure1_slot25;
            mike = zulu.enqueue;
            mike = mike.bind(zulu)(tango);
            zulu = _closure1_slot24;
            mike = null;
            if(!(mike == zulu)) { _fun00008_ip = 47; continue _fun00007 }
 37:
            mike = _closure1_slot30;
            entity = undefined;
            entity = mike.bind(entity)();
 47:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot29 = verify;
    entity = function() { // Original name: showNextNotification
        zulu = _closure1_slot25;
        entity = zulu.tryDrain;
        entity = entity.bind(zulu)();
        _closure1_slot24 = entity;
        entity = undefined;
        return entity;
    };
    var _closure1_slot30 = entity;
    entity = function(argFoo) { // Original name: rejectNotifications
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            report = argFoo;
            zulu = _closure1_slot25;
            mike = zulu.removeAll;
            mike = mike.bind(zulu)(report);
            mike = _closure1_slot24;
            zulu = null;
            if(!(zulu != mike)) { _fun00010_ip = 47; continue _fun00009 }
 33:
            tango = _closure1_slot24;
            mike = undefined;
            tango = report.bind(mike)(tango);
            if(tango) { _fun00010_ip = 71; continue _fun00009 }
 47:
            tango = _closure1_slot24;
            if(!(zulu == tango)) { _fun00010_ip = 67; continue _fun00009 }
 55:
            report = _closure1_slot30;
            tango = undefined;
            tango = report.bind(tango)();
            _fun00010_ip = 83; continue _fun00009;
 67:
            tango = false;
            return tango;
 71:
            _closure1_slot24 = zulu;
            entity = _closure1_slot30;
            entity = entity.bind(mike)();
 83:
            entity = true;
            return entity;
        }
    };
    var _closure1_slot31 = entity;
    entity = global;
    yankee = entity.Object;
    options = yankee.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(yankee)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 3;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 4;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot7 = mike;
    mike = 5;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot8 = mike;
    mike = 6;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot9 = mike;
    mike = 7;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot10 = mike;
    mike = 8;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.trackMessageNotificationTimestamps;
    var _closure1_slot11 = mike;
    mike = 9;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot12 = mike;
    mike = 10;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot13 = mike;
    mike = 11;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot14 = mike;
    mike = 12;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot15 = mike;
    mike = 13;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot16 = mike;
    mike = 14;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot17 = mike;
    mike = 15;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot18 = mike;
    mike = 16;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    options = mike.ChannelTypes;
    var _closure1_slot19 = options;
    options = mike.InAppNotificationTypes;
    var _closure1_slot20 = options;
    mike = mike.MessageTypesSets;
    var _closure1_slot21 = mike;
    mike = 17;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.ActivityPanelModes;
    var _closure1_slot22 = mike;
    mike = function() {
        tango = _closure1_slot7;
        zulu = function() { // Original name: AlertDismissalHandler
            zulu = this;
            report = _closure1_slot6;
            mike = _closure2_slot0;
            entity = undefined;
            mike = report.bind(entity)(zulu, mike);
            mike = {};
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            report = 18;
            tango = golf[report];
            tango = oscar.bind(entity)(tango);
            tango = tango.GuildIncidentAlertTypes;
            verify = tango.JOIN_RAID;
            tango = global;
            options = tango.Map;
            offset = options.prototype;
            offset = Object.create(offset, {constructor: {value: options}});
            foxtrot = offset;
            options = new foxtrot[options](romeo);
            options = options instanceof Object ? options : offset;
            mike[verify] = options;
            report = golf[report];
            report = oscar.bind(entity)(report);
            report = report.GuildIncidentAlertTypes;
            report = report.DM_RAID;
            tango = tango.Map;
            oscar = tango.prototype;
            oscar = Object.create(oscar, {constructor: {value: tango}});
            foxtrot = oscar;
            tango = new foxtrot[tango](romeo);
            tango = tango instanceof Object ? tango : oscar;
            mike[report] = tango;
            zulu['dissmissedAlertsMap'] = mike;
            mike = {'amount': 1, 'unitOfTime': 'hour'};
            zulu['threshold'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'key';
        entity['key'] = mike;
        mike = function(argFoo) { // Original name: value
            entity = argFoo;
            mike = entity.guild;
            entity = entity.channel;
            mike = mike.id;
            entity = entity.id;
            entity = mike + entity;
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(3);
        mike[0] = entity;
        entity = {};
        oscar = 'dismissNotification';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                entity = argFoo;
                zulu = this;
                options = entity.guild;
                golf = entity.channel;
                report = _closure1_slot0;
                tango = _closure1_slot2;
                entity = 19;
                tango = tango[entity];
                entity = undefined;
                oscar = report.bind(entity)(tango);
                report = oscar.getIncidentAlertType;
                offset = _closure1_slot10;
                verify = offset.getGuildIncident;
                tango = options.id;
                tango = verify.bind(offset)(tango);
                tango = report.bind(oscar)(tango);
                report = null;
                if(!(report != tango)) { _fun00012_ip = 143; continue _fun00011 }
 78:
                oscar = zulu.key;
                report = {};
                report['guild'] = options;
                report['channel'] = golf;
                report = oscar.bind(zulu)(report);
                zulu = zulu.dissmissedAlertsMap;
                tango = zulu[tango];
                zulu = tango.set;
                oscar = _closure1_slot1;
                golf = _closure1_slot2;
                mike = 20;
                mike = golf[mike];
                mike = oscar.bind(entity)(mike);
                mike = mike.bind(entity)();
                mike = zulu.bind(tango)(report, mike);
 143:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'wasRecentlyDismissed';
        entity['key'] = oscar;
        report = function(argFoo) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                entity = argFoo;
                mike = this;
                options = entity.guild;
                oscar = entity.channel;
                tango = _closure1_slot0;
                report = _closure1_slot2;
                entity = 19;
                entity = report[entity];
                golf = undefined;
                report = tango.bind(golf)(entity);
                tango = report.getIncidentAlertType;
                offset = _closure1_slot10;
                verify = offset.getGuildIncident;
                entity = options.id;
                entity = verify.bind(offset)(entity);
                tango = tango.bind(report)(entity);
                entity = null;
                if(!(entity != tango)) { _fun00014_ip = 208; continue _fun00013 }
 81:
                report = mike.key;
                entity = {};
                entity['guild'] = options;
                entity['channel'] = oscar;
                report = report.bind(mike)(entity);
                entity = mike.dissmissedAlertsMap;
                tango = entity[tango];
                entity = tango.get;
                tango = entity.bind(tango)(report);
                entity = golf !== tango;
                if(!entity) { _fun00014_ip = 206; continue _fun00013 }
 128:
                options = _closure1_slot1;
                verify = _closure1_slot2;
                zulu = 20;
                report = verify[zulu];
                report = options.bind(golf)(report);
                oscar = report.bind(golf)();
                report = oscar.diff;
                zulu = verify[zulu];
                zulu = options.bind(golf)(zulu);
                tango = zulu.bind(golf)(tango);
                zulu = mike.threshold;
                zulu = zulu.unitOfTime;
                zulu = report.bind(oscar)(tango, zulu);
                mike = mike.threshold;
                mike = mike.amount;
                entity = zulu < mike;
 206:
                return entity;
 208:
                entity = false;
                return entity;
            }
        };
        entity['value'] = report;
        mike[2] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    options = mike.prototype;
    options = Object.create(options, {constructor: {value: mike}});
    kilo = options;
    mike = new kilo[mike](backup);
    mike = mike instanceof Object ? mike : options;
    var _closure1_slot23 = mike;
    mike = null;
    var _closure1_slot24 = mike;
    mike = function() {
        tango = _closure1_slot7;
        zulu = function() { // Original name: NotificationQueue
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                zulu = arguments[0];
                mike = this;
                entity = undefined;
                if(!(zulu === entity)) { _fun00016_ip = 15; continue _fun00015 }
 12:
                zulu = 2;
 15:
                report = _closure1_slot6;
                tango = _closure2_slot0;
                tango = report.bind(entity)(mike, tango);
                tango = new Array(0);
                mike['queue'] = tango;
                mike['maxSize'] = zulu;
                return entity;
            }
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'enqueue';
        entity['key'] = mike;
        mike = function(argFoo) { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                entity = this;
                mike = entity.isFull;
                mike = mike.bind(entity)();
                if(!mike) { _fun00018_ip = 34; continue _fun00017 }
 18:
                zulu = entity.queue;
                mike = zulu.shift;
                mike = mike.bind(zulu)();
 34:
                zulu = entity.queue;
                mike = zulu.push;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = mike;
        mike = new Array(4);
        mike[0] = entity;
        entity = {};
        oscar = 'tryDrain';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = this;
            mike = entity.queue;
            entity = mike.shift;
            entity = entity.bind(mike)();
            return entity;
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'isFull';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = this;
            mike = entity.queue;
            mike = mike.length;
            entity = entity.maxSize;
            entity = mike >= entity;
            return entity;
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = 'removeAll';
        entity['key'] = oscar;
        report = function(argFoo) { // Original name: value
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 21;
            mike = mike[entity];
            entity = undefined;
            report = zulu.bind(entity)(mike);
            tango = report.remove;
            mike = this;
            zulu = mike.queue;
            mike = argFoo;
            mike = tango.bind(report)(zulu, mike);
            return entity;
        };
        entity['value'] = report;
        mike[3] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    options = mike.prototype;
    options = Object.create(options, {constructor: {value: mike}});
    kilo = options;
    mike = new kilo[mike](backup);
    mike = mike instanceof Object ? mike : options;
    var _closure1_slot25 = mike;
    mike = 38;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    options = mike.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: InAppNotificationStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot6;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot26;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot5;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot7;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            tango = this;
            verify = tango.waitFor;
            kilo = _closure1_slot18;
            backup = _closure1_slot14;
            foxtrot = _closure1_slot15;
            romeo = _closure1_slot16;
            yankee = _closure1_slot12;
            report = _closure1_slot10;
            sizing = tango;
            offset = report;
            mike = sizing[verify](kilo, backup, foxtrot, romeo, yankee, offset, verify);
            zulu = tango.syncWith;
            mike = new Array(1);
            mike[0] = report;
            entity = _closure1_slot28;
            entity = zulu.bind(tango)(mike, entity);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(2);
        entity[0] = report;
        report = {};
        golf = 'getCurrentNotification';
        report['key'] = golf;
        oscar = function() { // Original name: value
            entity = _closure1_slot24;
            return entity;
        };
        report['value'] = oscar;
        entity[1] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = mike.bind(entity)(options);
    mike = 'InAppNotificationStore';
    options['displayName'] = mike;
    mike = 39;
    mike = oscar[mike];
    backup = golf.bind(entity)(mike);
    mike = {};
    mike['POST_CONNECTION_OPEN'] = offset;
    mike['GUILD_UPDATE'] = offset;
    offset = function(argFoo) { // Original name: handleIncomingMessage
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            entity = argFoo;
            tango = entity.message;
            mike = entity.optimistic;
            report = tango.channel_id;
            golf = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 22;
            zulu = zulu[entity];
            entity = undefined;
            golf = golf.bind(entity)(zulu);
            zulu = golf.canViewPotentiallyNSFWChannel;
            zulu = zulu.bind(golf)(report);
            if(zulu) { _fun00020_ip = 62; continue _fun00019 }
 58:
            zulu = false;
            return zulu;
 62:
            golf = _closure1_slot1;
            options = _closure1_slot2;
            zulu = 23;
            zulu = options[zulu];
            zulu = golf.bind(entity)(zulu);
            zulu = zulu.bind(entity)(tango);
            if(!zulu) { _fun00020_ip = 122; continue _fun00019 }
 90:
            zulu = _closure1_slot21;
            options = zulu.SELF_MENTIONABLE_SYSTEM;
            golf = options.has;
            zulu = tango.type;
            zulu = golf.bind(options)(zulu);
            if(zulu) { _fun00020_ip = 122; continue _fun00019 }
 118:
            zulu = false;
            return zulu;
 122:
            if(mike) { _fun00020_ip = 630; continue _fun00019 }
 128:
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            options = 24;
            mike = mike[options];
            zulu = zulu.bind(entity)(mike);
            mike = zulu.allowInAppNotifications;
            mike = mike.bind(zulu)();
            if(!mike) { _fun00020_ip = 630; continue _fun00019 }
 164:
            zulu = _closure1_slot1;
            golf = _closure1_slot2;
            mike = 25;
            mike = golf[mike];
            zulu = zulu.bind(entity)(mike);
            mike = zulu.isEnabled;
            mike = mike.bind(zulu)();
            if(mike) { _fun00020_ip = 630; continue _fun00019 }
 200:
            zulu = _closure1_slot9;
            mike = zulu.getChatOpen;
            mike = mike.bind(zulu)(report);
            if(mike) { _fun00020_ip = 630; continue _fun00019 }
 221:
            zulu = _closure1_slot13;
            mike = zulu.getState;
            zulu = mike.bind(zulu)();
            mike = zulu.isVoicePanelFullscreen;
            mike = mike.bind(zulu)();
            golf = true;
            if(mike) { _fun00020_ip = 392; continue _fun00019 }
 253:
            zulu = _closure1_slot8;
            mike = zulu.getConnectedActivityChannelId;
            zulu = mike.bind(zulu)();
            mike = null;
            if(!(mike != zulu)) { _fun00020_ip = 303; continue _fun00019 }
 273:
            verify = _closure1_slot8;
            zulu = verify.getActivityPanelMode;
            verify = zulu.bind(verify)();
            zulu = _closure1_slot22;
            zulu = zulu.PANEL;
            golf = true;
            if(!(verify !== zulu)) { _fun00020_ip = 392; continue _fun00019 }
 303:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            zulu = 26;
            zulu = offset[zulu];
            verify = verify.bind(entity)(zulu);
            zulu = verify.getRootNavigationRef;
            verify = zulu.bind(verify)();
            mike = mike == verify;
            if(mike) { _fun00020_ip = 353; continue _fun00019 }
 340:
            zulu = verify.isReady;
            zulu = zulu.bind(verify)();
            mike = !zulu;
 353:
            if(mike) { _fun00020_ip = 389; continue _fun00019 }
 356:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            zulu = 27;
            zulu = offset[zulu];
            verify = verify.bind(entity)(zulu);
            zulu = verify.isChannelFocused;
            zulu = zulu.bind(verify)();
            mike = !zulu;
 389:
            golf = mike;
 392:
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[options];
            zulu = zulu.bind(entity)(mike);
            mike = zulu.shouldNotify;
            mike = mike.bind(zulu)(tango, report, golf);
            if(mike) { _fun00020_ip = 429; continue _fun00019 }
 425:
            mike = false;
            return mike;
 429:
            zulu = _closure1_slot14;
            mike = zulu.getChannel;
            report = mike.bind(zulu)(report);
            mike = null;
            if(!(mike != report)) { _fun00020_ip = 626; continue _fun00019 }
 452:
            zulu = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 28;
            mike = golf[mike];
            zulu = zulu.bind(entity)(mike);
            mike = zulu.createMessageRecord;
            golf = mike.bind(zulu)(tango);
            zulu = _closure1_slot11;
            mike = report.guild_id;
            mike = zulu.bind(entity)(tango, mike);
            zulu = _closure1_slot29;
            mike = {};
            tango = {};
            options = _closure1_slot20;
            options = options.MESSAGE;
            tango['type'] = options;
            offset = _closure1_slot15;
            verify = offset.getGuild;
            options = report.getGuildId;
            options = options.bind(report)();
            options = verify.bind(offset)(options);
            tango['guild'] = options;
            tango['channel'] = report;
            tango['message'] = golf;
            golf = golf.id;
            tango['key'] = golf;
            golf = 5000;
            tango['duration'] = golf;
            golf = function() { // Original name: onDismiss
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 29;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.clearNotification;
                mike = mike.bind(zulu)();
                return entity;
            };
            tango['onDismiss'] = golf;
            golf = _closure1_slot14;
            oscar = golf.getChannel;
            report = report.parent_id;
            report = oscar.bind(golf)(report);
            tango['parentChannel'] = report;
            mike['notification'] = tango;
            mike = zulu.bind(entity)(mike);
            return entity;
 626:
            entity = false;
            return entity;
 630:
            entity = false;
            return entity;
        }
    };
    mike['MESSAGE_CREATE'] = offset;
    offset = function(argFoo) { // Original name: handleReactionNotification
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            mike = argFoo;
            offset = mike.message;
            report = mike.route;
            entity = mike.emoji;
            var _closure2_slot0 = entity;
            backup = mike.reactorUserId;
            tango = null;
            if(!(tango != offset)) { _fun00022_ip = 782; continue _fun00021 }
 41:
            mike = offset.reactions;
            if(!(tango != mike)) { _fun00022_ip = 782; continue _fun00021 }
 54:
            if(!(tango != entity)) { _fun00022_ip = 782; continue _fun00021 }
 61:
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 24;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.allowInAppNotifications;
            mike = mike.bind(zulu)();
            if(!mike) { _fun00022_ip = 782; continue _fun00021 }
 102:
            zulu = _closure1_slot0;
            oscar = _closure1_slot2;
            mike = 32;
            mike = oscar[mike];
            zulu = zulu.bind(entity)(mike);
            mike = zulu.tryParseChannelPath;
            mike = mike.bind(zulu)(report);
            if(!(tango == mike)) { _fun00022_ip = 147; continue _fun00021 }
 137:
            mike = {'channelId': null, 'guildId': null};
 147:
            yankee = mike.channelId;
            mike = mike.guildId;
            if(!(tango != yankee)) { _fun00022_ip = 778; continue _fun00021 }
 164:
            report = _closure1_slot17;
            zulu = report.getCurrentlySelectedChannelId;
            zulu = zulu.bind(report)();
            if(!(zulu !== yankee)) { _fun00022_ip = 778; continue _fun00021 }
 185:
            if(!(tango != mike)) { _fun00022_ip = 778; continue _fun00021 }
 192:
            oscar = _closure1_slot0;
            options = _closure1_slot2;
            zulu = 33;
            zulu = options[zulu];
            zulu = oscar.bind(entity)(zulu);
            report = zulu.ReactionNotifications;
            zulu = report.getSetting;
            report = zulu.bind(report)();
            zulu = 34;
            zulu = options[zulu];
            zulu = oscar.bind(entity)(zulu);
            zulu = zulu.ReactionNotificationType;
            zulu = zulu.NOTIFICATIONS_DISABLED;
            if(!(report !== zulu)) { _fun00022_ip = 774; continue _fun00021 }
 259:
            report = _closure1_slot14;
            zulu = report.getChannel;
            oscar = zulu.bind(report)(yankee);
            report = tango == oscar;
            zulu = undefined;
            if(report) { _fun00022_ip = 287; continue _fun00021 }
 282:
            zulu = oscar.type;
 287:
            foxtrot = tango != zulu;
            if(!foxtrot) { _fun00022_ip = 313; continue _fun00021 }
 294:
            report = oscar.type;
            zulu = _closure1_slot19;
            zulu = zulu.GUILD_ANNOUNCEMENT;
            foxtrot = report === zulu;
 313:
            report = _closure1_slot0;
            options = _closure1_slot2;
            zulu = 35;
            zulu = options[zulu];
            verify = report.bind(entity)(zulu);
            options = verify.isReactionMilestoneNotification;
            report = offset.reactions;
            kilo = tango == oscar;
            zulu = undefined;
            if(kilo) { _fun00022_ip = 359; continue _fun00021 }
 354:
            zulu = oscar.type;
 359:
            zulu = options.bind(verify)(report, zulu);
            options = _closure1_slot15;
            report = options.getGuild;
            verify = report.bind(options)(mike);
            options = _closure1_slot18;
            report = options.getUser;
            options = report.bind(options)(backup);
            if(!(tango != oscar)) { _fun00022_ip = 770; continue _fun00021 }
 401:
            if(!(tango == options)) { _fun00022_ip = 411; continue _fun00021 }
 405:
            if(!foxtrot) { _fun00022_ip = 770; continue _fun00021 }
 411:
            kilo = offset.reactions;
            backup = kilo.find;
            report = function(argFoo) {
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    zulu = argFoo;
                    entity = zulu.emoji;
                    tango = entity.id;
                    entity = _closure2_slot0;
                    entity = entity.id;
                    entity = tango === entity;
                    if(!entity) { _fun00024_ip = 48; continue _fun00023 }
 33:
                    tango = _closure2_slot0;
                    report = tango.id;
                    tango = null;
                    entity = tango != report;
 48:
                    if(entity) { _fun00024_ip = 75; continue _fun00023 }
 51:
                    zulu = zulu.emoji;
                    zulu = zulu.name;
                    mike = _closure2_slot0;
                    mike = mike.name;
                    entity = zulu === mike;
 75:
                    return entity;
                }
            };
            backup = backup.bind(kilo)(report);
            kilo = tango != backup;
            report = undefined;
            if(!kilo) { _fun00022_ip = 446; continue _fun00021 }
 443:
            report = backup;
 446:
            if(!(tango == report)) { _fun00022_ip = 460; continue _fun00021 }
 450:
            if(foxtrot) { _fun00022_ip = 460; continue _fun00021 }
 453:
            if(zulu) { _fun00022_ip = 460; continue _fun00021 }
 456:
            zulu = false;
            return zulu;
 460:
            backup = _closure1_slot0;
            zulu = _closure1_slot2;
            foxtrot = 36;
            zulu = zulu[foxtrot];
            zulu = backup.bind(entity)(zulu);
            output = zulu.InAppReactionNotificationGuildExperiment;
            sizing = output.getCurrentConfig;
            kilo = {};
            kilo['guildId'] = mike;
            mike = 'handleReactionAdd';
            kilo['location'] = mike;
            zulu = {};
            backup = true;
            zulu['autoTrackExposure'] = backup;
            zulu = sizing.bind(output)(kilo, zulu);
            zulu = zulu.enableInAppNotifications;
            if(!(tango != verify)) { _fun00022_ip = 540; continue _fun00021 }
 533:
            if(zulu) { _fun00022_ip = 540; continue _fun00021 }
 536:
            zulu = false;
            return zulu;
 540:
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            zulu = zulu[foxtrot];
            foxtrot = tango.bind(entity)(zulu);
            tango = foxtrot.getCurrentConfig;
            zulu = {};
            zulu['location'] = mike;
            mike = {};
            mike['autoTrackExposure'] = backup;
            mike = tango.bind(foxtrot)(zulu, mike);
            zulu = mike.enableInAppNotifications;
            mike = mike.enableNotificationsForAllReactions;
            if(!zulu) { _fun00022_ip = 600; continue _fun00021 }
 597:
            if(mike) { _fun00022_ip = 604; continue _fun00021 }
 600:
            mike = false;
            return mike;
 604:
            zulu = _closure1_slot29;
            mike = {};
            tango = {};
            foxtrot = _closure1_slot20;
            foxtrot = foxtrot.REACTION;
            tango['type'] = foxtrot;
            tango['key'] = yankee;
            backup = _closure1_slot1;
            yankee = _closure1_slot2;
            foxtrot = 31;
            foxtrot = yankee[foxtrot];
            foxtrot = backup.bind(entity)(foxtrot);
            foxtrot = foxtrot.Millis;
            backup = foxtrot.SECOND;
            foxtrot = 5;
            foxtrot = foxtrot * backup;
            tango['duration'] = foxtrot;
            romeo = function() { // Original name: onDismiss
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 29;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.clearNotification;
                mike = mike.bind(zulu)();
                return entity;
            };
            tango['onDismiss'] = romeo;
            tango['channel'] = oscar;
            tango['guild'] = verify;
            tango['user'] = options;
            verify = _closure1_slot0;
            options = 28;
            options = yankee[options];
            verify = verify.bind(entity)(options);
            options = verify.createMessageRecord;
            options = options.bind(verify)(offset);
            tango['message'] = options;
            options = _closure1_slot14;
            golf = options.getChannel;
            oscar = oscar.parent_id;
            oscar = golf.bind(options)(oscar);
            tango['parentChannel'] = oscar;
            tango['reaction'] = report;
            mike['notification'] = tango;
            mike = zulu.bind(entity)(mike);
            return entity;
 770:
            entity = false;
            return entity;
 774:
            entity = false;
            return entity;
 778:
            entity = false;
            return entity;
 782:
            entity = false;
            return entity;
        }
    };
    mike['REACTION_NOTIFICATION_SENT'] = offset;
    offset = function(argFoo) { // Original name: handleMessageReminderDue
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            entity = argFoo;
            report = entity.savedMessage;
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 37;
            mike = mike[entity];
            entity = undefined;
            oscar = zulu.bind(entity)(mike);
            tango = oscar.getCurrentConfig;
            zulu = {};
            mike = 'inAppNotificationStore';
            zulu['location'] = mike;
            mike = {};
            options = false;
            mike['autoTrackExposure'] = options;
            mike = tango.bind(oscar)(zulu, mike);
            mike = mike.enabled;
            if(!mike) { _fun00026_ip = 292; continue _fun00025 }
 78:
            zulu = report.message;
            mike = null;
            if(!(mike != zulu)) { _fun00026_ip = 292; continue _fun00025 }
 92:
            oscar = _closure1_slot14;
            tango = oscar.getChannel;
            zulu = report.saveData;
            zulu = zulu.channelId;
            oscar = tango.bind(oscar)(zulu);
            if(!(mike != oscar)) { _fun00026_ip = 292; continue _fun00025 }
 124:
            zulu = _closure1_slot29;
            mike = {};
            tango = {};
            options = _closure1_slot20;
            options = options.MESSAGE_REMINDER;
            tango['type'] = options;
            options = report.saveData;
            romeo = options.channelId;
            options = report.saveData;
            yankee = options.messageId;
            options = global;
            options = options.HermesInternal;
            offset = options.concat;
            verify = '';
            options = '-';
            options = offset.bind(verify)(romeo, options, yankee);
            tango['key'] = options;
            options = _closure1_slot1;
            verify = _closure1_slot2;
            golf = 31;
            golf = verify[golf];
            golf = options.bind(entity)(golf);
            golf = golf.Millis;
            options = golf.SECOND;
            golf = 10;
            golf = golf * options;
            tango['duration'] = golf;
            golf = function() { // Original name: onDismiss
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 29;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.clearNotification;
                mike = mike.bind(zulu)();
                return entity;
            };
            tango['onDismiss'] = golf;
            tango['channel'] = oscar;
            oscar = report.message;
            oscar = oscar.author;
            tango['author'] = oscar;
            tango['savedMessage'] = report;
            mike['notification'] = tango;
            mike = zulu.bind(entity)(mike);
 292:
            return entity;
        }
    };
    mike['MESSAGE_REMINDER_DUE'] = offset;
    offset = function(argFoo) { // Original name: handleThreadCreate
        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
            entity = argFoo;
            report = entity.channel;
            entity = entity.isNewlyCreated;
            tango = _closure1_slot14;
            zulu = tango.getChannel;
            mike = report.parent_id;
            golf = zulu.bind(tango)(mike);
            mike = null;
            if(!(mike != golf)) { _fun00028_ip = 308; continue _fun00027 }
 46:
            zulu = golf.isForumLikeChannel;
            zulu = zulu.bind(golf)();
            if(!zulu) { _fun00028_ip = 308; continue _fun00027 }
 62:
            if(entity) { _fun00028_ip = 69; continue _fun00027 }
 65:
            entity = false;
            return entity;
 69:
            oscar = _closure1_slot0;
            entity = _closure1_slot2;
            zulu = 24;
            tango = entity[zulu];
            entity = undefined;
            oscar = oscar.bind(entity)(tango);
            tango = oscar.allowInAppNotifications;
            tango = tango.bind(oscar)();
            if(!tango) { _fun00028_ip = 162; continue _fun00027 }
 104:
            options = _closure1_slot0;
            offset = _closure1_slot2;
            zulu = offset[zulu];
            oscar = options.bind(entity)(zulu);
            tango = oscar.shouldNotifyForForumThreadCreation;
            zulu = 27;
            zulu = offset[zulu];
            options = options.bind(entity)(zulu);
            zulu = options.isChannelFocused;
            zulu = zulu.bind(options)();
            zulu = !zulu;
            zulu = tango.bind(oscar)(report, golf, zulu);
            if(zulu) { _fun00028_ip = 166; continue _fun00027 }
 162:
            zulu = false;
            return zulu;
 166:
            oscar = _closure1_slot18;
            tango = oscar.getUser;
            zulu = report.ownerId;
            options = tango.bind(oscar)(zulu);
            if(!(mike != options)) { _fun00028_ip = 304; continue _fun00027 }
 191:
            oscar = _closure1_slot15;
            tango = oscar.getGuild;
            zulu = golf.guild_id;
            oscar = tango.bind(oscar)(zulu);
            if(!(mike != oscar)) { _fun00028_ip = 300; continue _fun00027 }
 214:
            zulu = _closure1_slot29;
            mike = {};
            tango = {};
            verify = _closure1_slot20;
            verify = verify.FORUM_THREAD_CREATED;
            tango['type'] = verify;
            tango['thread'] = report;
            tango['threadCreator'] = options;
            tango['parentChannel'] = golf;
            tango['guild'] = oscar;
            report = report.id;
            tango['key'] = report;
            report = 5000;
            tango['duration'] = report;
            report = function() { // Original name: onDismiss
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 29;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.clearNotification;
                mike = mike.bind(zulu)();
                return entity;
            };
            tango['onDismiss'] = report;
            mike['notification'] = tango;
            mike = zulu.bind(entity)(mike);
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
    mike['THREAD_CREATE'] = offset;
    offset = function() { // Original name: handleClearInAppNotification
        mike = null;
        _closure1_slot24 = mike;
        mike = _closure1_slot30;
        entity = undefined;
        mike = mike.bind(entity)();
        return entity;
    };
    mike['CLEAR_IN_APP_NOTIFICATION'] = offset;
    mike['ENQUEUE_IN_APP_NOTIFICATION'] = verify;
    verify = function(argFoo) { // Original name: handleChannelSelect
        mike = argFoo;
        mike = mike.channelId;
        var _closure2_slot0 = mike;
        zulu = _closure1_slot31;
        mike = undefined;
        entity = function(argFoo) {
            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                zulu = argFoo;
                tango = zulu.type;
                entity = _closure1_slot20;
                entity = entity.MESSAGE;
                entity = tango === entity;
                if(!entity) { _fun00030_ip = 49; continue _fun00029 }
 28:
                tango = zulu.channel;
                report = tango.id;
                tango = _closure2_slot0;
                entity = report === tango;
 49:
                if(entity) { _fun00030_ip = 93; continue _fun00029 }
 52:
                report = zulu.type;
                tango = _closure1_slot20;
                tango = tango.MESSAGE_FAILED_TO_SEND;
                tango = report === tango;
                if(!tango) { _fun00030_ip = 90; continue _fun00029 }
 74:
                oscar = zulu.channelId;
                report = _closure2_slot0;
                tango = oscar === report;
 90:
                entity = tango;
 93:
                if(entity) { _fun00030_ip = 142; continue _fun00029 }
 96:
                tango = zulu.type;
                mike = _closure1_slot20;
                mike = mike.ALERT;
                mike = tango === mike;
                if(!mike) { _fun00030_ip = 139; continue _fun00029 }
 118:
                zulu = zulu.channel;
                tango = zulu.id;
                zulu = _closure2_slot0;
                mike = tango === zulu;
 139:
                entity = mike;
 142:
                return entity;
            }
        };
        entity = zulu.bind(mike)(entity);
        return entity;
    };
    mike['CHANNEL_SELECT'] = verify;
    verify = function(argFoo) { // Original name: handleVoiceChatOpen
        mike = argFoo;
        zulu = mike.channelId;
        var _closure2_slot0 = zulu;
        mike = mike.chatOpen;
        var _closure2_slot1 = mike;
        zulu = _closure1_slot31;
        mike = undefined;
        entity = function(argFoo) {
            _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                mike = argFoo;
                zulu = mike.type;
                entity = _closure1_slot20;
                entity = entity.MESSAGE;
                entity = zulu === entity;
                if(!entity) { _fun00032_ip = 49; continue _fun00031 }
 28:
                mike = mike.channel;
                zulu = mike.id;
                mike = _closure2_slot0;
                entity = zulu === mike;
 49:
                if(!entity) { _fun00032_ip = 59; continue _fun00031 }
 52:
                entity = _closure2_slot1;
 59:
                return entity;
            }
        };
        entity = zulu.bind(mike)(entity);
        return entity;
    };
    mike['CHANNEL_RTC_UPDATE_CHAT_OPEN'] = verify;
    tango = function() { // Original name: handleUserSettingsUpdate
        zulu = _closure1_slot31;
        mike = undefined;
        entity = function(argFoo) {
            entity = argFoo;
            mike = entity.type;
            entity = _closure1_slot20;
            entity = entity.MESSAGE;
            entity = mike === entity;
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        return entity;
    };
    mike['USER_SETTINGS_PROTO_UPDATE'] = tango;
    tango = options.prototype;
    tango = Object.create(tango, {constructor: {value: options}});
    kilo = tango;
    foxtrot = mike;
    mike = new kilo[options](backup, foxtrot, romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 40;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'stores/native/InAppNotificationStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();