// app/modules/shared_space_warnings/SharedSpacesWarningManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot5;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot4;
            entity = _closure1_slot17;
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
            report = _closure1_slot5;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot16 = entity;
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
            _closure1_slot17 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo) { // Original name: handleChannelSelect
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            oscar = entity.channelId;
            tango = null;
            if(!(tango != oscar)) { _fun00006_ip = 232; continue _fun00005 }
 19:
            report = _closure1_slot7;
            mike = report.getChannel;
            mike = mike.bind(report)(oscar);
            if(!(tango != mike)) { _fun00006_ip = 232; continue _fun00005 }
 43:
            tango = mike.isGroupDM;
            tango = tango.bind(mike)();
            if(!tango) { _fun00006_ip = 232; continue _fun00005 }
 59:
            golf = mike.recipients;
            report = golf.filter;
            tango = function(argFoo) {
                zulu = _closure1_slot9;
                mike = zulu.isBlocked;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            report = report.bind(golf)(tango);
            golf = mike.recipients;
            tango = golf.filter;
            zulu = function(argFoo) {
                zulu = _closure1_slot9;
                mike = zulu.isIgnored;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            tango = tango.bind(golf)(zulu);
            zulu = report.length;
            options = 0;
            zulu = zulu > options;
            if(zulu) { _fun00006_ip = 128; continue _fun00005 }
 119:
            golf = tango.length;
            zulu = golf > options;
 128:
            if(!zulu) { _fun00006_ip = 232; continue _fun00005 }
 131:
            mike = mike.blockedUserWarningDismissed;
            if(mike) { _fun00006_ip = 180; continue _fun00005 }
 140:
            golf = _closure1_slot10;
            zulu = undefined;
            golf = golf.bind(zulu)(oscar);
            zulu = global;
            options = zulu.Date;
            zulu = options.now;
            options = zulu.bind(options)();
            zulu = _closure1_slot15;
            zulu = options - zulu;
            mike = golf > zulu;
 180:
            if(mike) { _fun00006_ip = 232; continue _fun00005 }
 183:
            zulu = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 11;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.showGdmBlockedUserModal;
            entity = {};
            entity['channelId'] = oscar;
            entity['blockedUserIds'] = report;
            entity['ignoredUserIds'] = tango;
            entity = mike.bind(zulu)(entity);
 232:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = function(argFoo) { // Original name: handleAppStateChanged
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            tango = entity.state;
            report = _closure1_slot0;
            zulu = _closure1_slot1;
            entity = 12;
            zulu = zulu[entity];
            entity = undefined;
            zulu = report.bind(entity)(zulu);
            zulu = zulu.AppStates;
            zulu = zulu.ACTIVE;
            if(!(tango === zulu)) { _fun00008_ip = 230; continue _fun00007 }
 52:
            tango = _closure1_slot8;
            zulu = tango.getChannelId;
            oscar = zulu.bind(tango)();
            zulu = null;
            if(!(zulu == oscar)) { _fun00008_ip = 85; continue _fun00007 }
 72:
            zulu = _closure1_slot12;
            zulu = zulu.bind(entity)();
            _fun00008_ip = 230; continue _fun00007;
 85:
            tango = _closure1_slot13;
            zulu = tango.getBlockedUsersForVoiceChannel;
            options = zulu.bind(tango)(oscar);
            tango = _closure1_slot13;
            zulu = tango.getIgnoredUsersForVoiceChannel;
            verify = zulu.bind(tango)(oscar);
            zulu = options.size;
            golf = 0;
            if(!(!(zulu > golf))) { _fun00008_ip = 135; continue _fun00007 }
 126:
            zulu = verify.size;
            if(!(zulu > golf)) { _fun00008_ip = 222; continue _fun00007 }
 135:
            zulu = _closure1_slot11;
            zulu = zulu.bind(entity)();
            if(!zulu) { _fun00008_ip = 222; continue _fun00007 }
 146:
            zulu = _closure1_slot20;
            zulu = zulu.bind(entity)(oscar);
            if(zulu) { _fun00008_ip = 222; continue _fun00007 }
 158:
            tango = _closure1_slot0;
            report = _closure1_slot1;
            zulu = 13;
            zulu = report[zulu];
            report = tango.bind(entity)(zulu);
            tango = report.showVoiceChannelBlockedUserWarning;
            zulu = new Array(0);
            romeo = zulu;
            yankee = options;
            offset = 0;
            offset = arraySpread(romeo, yankee, offset);
            romeo = zulu;
            yankee = verify;
            options = arraySpread(romeo, yankee, offset);
            zulu = zulu[golf];
            zulu = tango.bind(report)(oscar, zulu);
            _fun00008_ip = 230; continue _fun00007;
 222:
            mike = _closure1_slot12;
            mike = mike.bind(entity)();
 230:
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    mike = function(argFoo) { // Original name: voiceBlockedWarningInCooldown
        tango = _closure1_slot10;
        zulu = undefined;
        mike = argFoo;
        mike = tango.bind(zulu)(mike);
        zulu = global;
        tango = zulu.Date;
        zulu = tango.now;
        zulu = zulu.bind(tango)();
        entity = _closure1_slot14;
        entity = zulu - entity;
        entity = mike > entity;
        return entity;
    };
    var _closure1_slot20 = mike;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = options.bind(entity)(report);
    var _closure1_slot2 = report;
    yankee = 1;
    report = golf[yankee];
    report = options.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 2;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot4 = report;
    verify = 3;
    report = golf[verify];
    report = options.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 4;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 5;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot7 = report;
    report = 6;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot8 = report;
    report = 7;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot9 = report;
    report = 8;
    report = golf[report];
    report = oscar.bind(entity)(report);
    offset = report.getDismissTimestamp;
    var _closure1_slot10 = offset;
    offset = report.isBlockedWarningQueued;
    var _closure1_slot11 = offset;
    report = report.dequeueBlockWarning;
    var _closure1_slot12 = report;
    report = 9;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot13 = report;
    report = 10;
    offset = golf[report];
    offset = options.bind(entity)(offset);
    offset = offset.Millis;
    offset = offset.HOUR;
    offset = yankee * offset;
    var _closure1_slot14 = offset;
    report = golf[report];
    report = options.bind(entity)(report);
    report = report.Millis;
    report = report.DAY;
    report = verify * report;
    var _closure1_slot15 = report;
    report = 14;
    report = golf[report];
    report = options.bind(entity)(report);
    tango = function(argFoo) {
        tango = function(argFoo) { // Original name: SharedSpacesWarningManager
            oscar = this;
            yankee = 0;
            golf = copyRestArgs(yankee);
            entity = _closure1_slot2;
            report = _closure2_slot0;
            tango = undefined;
            entity = entity.bind(tango)(oscar, report);
            mike = _closure1_slot16;
            entity = new Array(0);
            yankee = entity;
            offset = golf;
            verify = 0;
            golf = arraySpread(yankee, offset, verify);
            entity = mike.bind(tango)(oscar, report, entity);
            mike = {};
            tango = _closure1_slot18;
            mike['CHANNEL_SELECT'] = tango;
            zulu = _closure1_slot19;
            mike['APP_STATE_UPDATE'] = zulu;
            entity['actions'] = mike;
            return entity;
        };
        var _closure2_slot0 = tango;
        oscar = _closure1_slot6;
        zulu = undefined;
        report = argFoo;
        report = oscar.bind(zulu)(tango, report);
        mike = _closure1_slot3;
        report = {};
        oscar = 'handleBlockedOrIgnoredUserVoiceChannelJoin';
        report['key'] = oscar;
        entity = function(argFoo, argBar) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                report = argFoo;
                zulu = _closure1_slot8;
                mike = zulu.getChannelId;
                tango = mike.bind(zulu)();
                if(!(report === tango)) { _fun00010_ip = 93; continue _fun00009 }
 24:
                zulu = _closure1_slot7;
                mike = zulu.getChannel;
                zulu = mike.bind(zulu)(report);
                mike = null;
                if(!(mike != zulu)) { _fun00010_ip = 93; continue _fun00009 }
 44:
                mike = _closure1_slot20;
                zulu = undefined;
                mike = mike.bind(zulu)(report);
                if(mike) { _fun00010_ip = 93; continue _fun00009 }
 58:
                mike = _closure1_slot0;
                report = _closure1_slot1;
                entity = 13;
                entity = report[entity];
                zulu = mike.bind(zulu)(entity);
                mike = zulu.showVoiceChannelBlockedUserWarning;
                entity = argBar;
                entity = mike.bind(zulu)(tango, entity);
 93:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(1);
        entity[0] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    tango = tango.bind(entity)(report);
    report = tango.prototype;
    report = Object.create(report, {constructor: {value: tango}});
    kilo = report;
    tango = new kilo[tango](backup);
    tango = tango instanceof Object ? tango : report;
    report = 15;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/shared_space_warnings/SharedSpacesWarningManager.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    zulu['voiceBlockedWarningInCooldown'] = mike;
    return entity;
})();