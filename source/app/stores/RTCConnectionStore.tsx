// app/stores/RTCConnectionStore.tsx
export default (function(argFoo, argBar, argBaz, argCorge, argGrault, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
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
 70: // try_end0
            _fun00004_ip = 74; continue _fun00003;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
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
    entity = function(argFoo, argBar) { // Original name: createRTCConnection
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            golf = argBar;
            entity = _closure1_slot16;
            mike = null;
            if(!(mike != entity)) { _fun00006_ip = 609; continue _fun00005 }
 21:
            report = _closure1_slot9;
            entity = report.getId;
            report = entity.bind(report)();
            offset = _closure1_slot0;
            options = _closure1_slot2;
            entity = 10;
            entity = options[entity];
            oscar = undefined;
            entity = offset.bind(oscar)(entity);
            verify = entity.default;
            entity = {};
            entity['userId'] = report;
            report = _closure1_slot16;
            entity['sessionId'] = report;
            report = argFoo;
            entity['guildId'] = report;
            entity['channelId'] = golf;
            report = verify.prototype;
            report = Object.create(report, {constructor: {value: verify}});
            kilo = report;
            backup = entity;
            entity = new kilo[verify](backup, foxtrot);
            entity = entity instanceof Object ? entity : report;
            var _closure2_slot0 = entity;
            romeo = entity.on;
            report = 11;
            verify = options[report];
            verify = offset.bind(oscar)(verify);
            verify = verify.RTCConnectionEvent;
            yankee = verify.State;
            verify = function(argFoo, argBar, argBaz) {
                entity = argFoo;
                var _closure3_slot0 = entity;
                entity = argBar;
                var _closure3_slot1 = entity;
                entity = argBaz;
                var _closure3_slot2 = entity;
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 12;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.wait;
                mike = function() {
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 12;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.dispatch;
                    entity = {};
                    tango = 'RTC_CONNECTION_STATE';
                    entity['type'] = tango;
                    report = _closure3_slot0;
                    entity['state'] = report;
                    oscar = _closure3_slot1;
                    golf = entity;
                    report = copyDataProperties(golf, oscar);
                    oscar = _closure3_slot2;
                    golf = entity;
                    tango = copyDataProperties(golf, oscar);
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            verify = romeo.bind(entity)(yankee, verify);
            romeo = entity.on;
            verify = options[report];
            verify = offset.bind(oscar)(verify);
            verify = verify.RTCConnectionEvent;
            yankee = verify.Video;
            verify = function(argFoo, argBar, argBaz, argCorge, argGrault) {
                entity = argFoo;
                var _closure3_slot0 = entity;
                entity = argBar;
                var _closure3_slot1 = entity;
                entity = argBaz;
                var _closure3_slot2 = entity;
                entity = argCorge;
                var _closure3_slot3 = entity;
                entity = argGrault;
                var _closure3_slot4 = entity;
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 12;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.wait;
                mike = function() {
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 12;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.dispatch;
                    entity = {};
                    report = 'RTC_CONNECTION_VIDEO';
                    entity['type'] = report;
                    oscar = _closure3_slot0;
                    entity['guildId'] = oscar;
                    oscar = _closure3_slot1;
                    entity['channelId'] = oscar;
                    oscar = _closure3_slot2;
                    entity['userId'] = oscar;
                    oscar = _closure3_slot3;
                    entity['streamId'] = oscar;
                    report = _closure3_slot4;
                    entity['rtcServerId'] = report;
                    tango = _closure1_slot14;
                    tango = tango.DEFAULT;
                    entity['context'] = tango;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            verify = romeo.bind(entity)(yankee, verify);
            romeo = entity.on;
            verify = options[report];
            verify = offset.bind(oscar)(verify);
            verify = verify.RTCConnectionEvent;
            yankee = verify.Ping;
            verify = function(argFoo, argBar) {
                entity = argFoo;
                var _closure3_slot0 = entity;
                entity = argBar;
                var _closure3_slot1 = entity;
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 12;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.wait;
                mike = function() {
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 12;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.dispatch;
                    entity = {};
                    tango = 'RTC_CONNECTION_PING';
                    entity['type'] = tango;
                    report = _closure3_slot0;
                    entity['pings'] = report;
                    tango = _closure3_slot1;
                    entity['quality'] = tango;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            verify = romeo.bind(entity)(yankee, verify);
            romeo = entity.on;
            verify = options[report];
            verify = offset.bind(oscar)(verify);
            verify = verify.RTCConnectionEvent;
            yankee = verify.OutboundLossRate;
            verify = function(argFoo) {
                entity = argFoo;
                var _closure3_slot0 = entity;
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 12;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.wait;
                mike = function() {
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 12;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.dispatch;
                    entity = {};
                    tango = 'RTC_CONNECTION_LOSS_RATE';
                    entity['type'] = tango;
                    tango = _closure3_slot0;
                    entity['lossRate'] = tango;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            verify = romeo.bind(entity)(yankee, verify);
            romeo = entity.on;
            verify = options[report];
            verify = offset.bind(oscar)(verify);
            verify = verify.RTCConnectionEvent;
            yankee = verify.Speaking;
            verify = function(argFoo, argBar) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    tango = _closure1_slot20;
                    entity = null;
                    if(!(entity != tango)) { _fun00008_ip = 31; continue _fun00007 }
 13:
                    zulu = tango.setSpeaking;
                    mike = argFoo;
                    entity = argBar;
                    entity = zulu.bind(tango)(mike, entity);
 31:
                    entity = undefined;
                    return entity;
                }
            };
            verify = romeo.bind(entity)(yankee, verify);
            romeo = entity.on;
            verify = options[report];
            verify = offset.bind(oscar)(verify);
            verify = verify.RTCConnectionEvent;
            yankee = verify.Flags;
            verify = function(argFoo, argBar) {
                entity = argFoo;
                var _closure3_slot0 = entity;
                entity = argBar;
                var _closure3_slot1 = entity;
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 12;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.wait;
                mike = function() {
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 12;
                    mike = mike[entity];
                    entity = undefined;
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.dispatch;
                    mike = {};
                    report = 'RTC_CONNECTION_FLAGS';
                    mike['type'] = report;
                    oscar = _closure3_slot1;
                    mike['flags'] = oscar;
                    report = _closure3_slot0;
                    mike['userId'] = report;
                    oscar = _closure2_slot0;
                    oscar = oscar.guildId;
                    mike['guildId'] = oscar;
                    oscar = _closure2_slot0;
                    oscar = oscar.channelId;
                    mike['channelId'] = oscar;
                    report = _closure2_slot0;
                    report = report.context;
                    mike['context'] = report;
                    mike = zulu.bind(tango)(mike);
                    return entity;
                };
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            verify = romeo.bind(entity)(yankee, verify);
            romeo = entity.on;
            verify = options[report];
            verify = offset.bind(oscar)(verify);
            verify = verify.RTCConnectionEvent;
            yankee = verify.ClientConnect;
            verify = function(argFoo) {
                entity = argFoo;
                var _closure3_slot0 = entity;
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 12;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.wait;
                mike = function() {
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 12;
                    mike = mike[entity];
                    entity = undefined;
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.dispatch;
                    mike = {};
                    report = 'RTC_CONNECTION_CLIENT_CONNECT';
                    mike['type'] = report;
                    report = _closure3_slot0;
                    mike['userIds'] = report;
                    oscar = _closure2_slot0;
                    oscar = oscar.guildId;
                    mike['guildId'] = oscar;
                    oscar = _closure2_slot0;
                    oscar = oscar.channelId;
                    mike['channelId'] = oscar;
                    report = _closure2_slot0;
                    report = report.context;
                    mike['context'] = report;
                    mike = zulu.bind(tango)(mike);
                    return entity;
                };
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            verify = romeo.bind(entity)(yankee, verify);
            romeo = entity.on;
            verify = options[report];
            verify = offset.bind(oscar)(verify);
            verify = verify.RTCConnectionEvent;
            yankee = verify.ClientDisconnect;
            verify = function(argFoo) {
                entity = argFoo;
                var _closure3_slot0 = entity;
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 12;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.wait;
                mike = function() {
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 12;
                    mike = mike[entity];
                    entity = undefined;
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.dispatch;
                    mike = {};
                    report = 'RTC_CONNECTION_CLIENT_DISCONNECT';
                    mike['type'] = report;
                    report = _closure3_slot0;
                    mike['userId'] = report;
                    oscar = _closure2_slot0;
                    oscar = oscar.guildId;
                    mike['guildId'] = oscar;
                    oscar = _closure2_slot0;
                    oscar = oscar.channelId;
                    mike['channelId'] = oscar;
                    report = _closure2_slot0;
                    report = report.context;
                    mike['context'] = report;
                    mike = zulu.bind(tango)(mike);
                    return entity;
                };
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            verify = romeo.bind(entity)(yankee, verify);
            romeo = entity.on;
            verify = options[report];
            verify = offset.bind(oscar)(verify);
            verify = verify.RTCConnectionEvent;
            yankee = verify.Platform;
            verify = function(argFoo, argBar, argBaz) {
                entity = argFoo;
                var _closure3_slot0 = entity;
                entity = argBar;
                var _closure3_slot1 = entity;
                entity = argBaz;
                var _closure3_slot2 = entity;
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 12;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.wait;
                mike = function() {
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 12;
                    mike = mike[entity];
                    entity = undefined;
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.dispatch;
                    mike = {};
                    report = 'RTC_CONNECTION_PLATFORM';
                    mike['type'] = report;
                    oscar = _closure3_slot1;
                    mike['platform'] = oscar;
                    oscar = _closure3_slot0;
                    mike['userId'] = oscar;
                    report = _closure3_slot2;
                    mike['channelId'] = report;
                    mike = zulu.bind(tango)(mike);
                    return entity;
                };
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            verify = romeo.bind(entity)(yankee, verify);
            romeo = entity.on;
            verify = options[report];
            verify = offset.bind(oscar)(verify);
            verify = verify.RTCConnectionEvent;
            yankee = verify.SecureFramesUpdate;
            verify = function() {
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 12;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.wait;
                mike = function() {
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 12;
                    mike = mike[entity];
                    entity = undefined;
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.dispatch;
                    mike = {};
                    report = 'RTC_CONNECTION_SECURE_FRAMES_UPDATE';
                    mike['type'] = report;
                    mike = zulu.bind(tango)(mike);
                    return entity;
                };
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            verify = romeo.bind(entity)(yankee, verify);
            verify = entity.on;
            report = options[report];
            report = offset.bind(oscar)(report);
            report = report.RTCConnectionEvent;
            report = report.RosterMapUpdate;
            tango = function(argFoo) {
                entity = argFoo;
                var _closure3_slot0 = entity;
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 12;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.wait;
                mike = function() {
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 12;
                    mike = mike[entity];
                    entity = undefined;
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.dispatch;
                    mike = {};
                    report = 'RTC_CONNECTION_ROSTER_MAP_UPDATE';
                    mike['type'] = report;
                    report = _closure3_slot0;
                    mike['userIds'] = report;
                    mike = zulu.bind(tango)(mike);
                    return entity;
                };
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            tango = verify.bind(entity)(report, tango);
            report = _closure1_slot1;
            tango = 13;
            tango = options[tango];
            oscar = report.bind(oscar)(tango);
            report = _closure1_slot9;
            tango = report.getId;
            backup = tango.bind(report)();
            report = oscar.prototype;
            report = Object.create(report, {constructor: {value: oscar}});
            kilo = report;
            foxtrot = golf;
            tango = new kilo[oscar](backup, foxtrot, romeo);
            tango = tango instanceof Object ? tango : report;
            _closure1_slot20 = tango;
            _closure1_slot21 = mike;
            mike = false;
            _closure1_slot22 = mike;
            _closure1_slot23 = mike;
            return entity;
 609:
            entity = global;
            zulu = entity.Error;
            entity = zulu.prototype;
            mike = Object.create(entity, {constructor: {value: zulu}});
            backup = 'Creating RTCConnection without session.';
            kilo = mike;
            entity = new kilo[zulu](backup, foxtrot);
            entity = entity instanceof Object ? entity : mike;
            throw entity;
        }
    };
    var _closure1_slot27 = entity;
    entity = function() { // Original name: destroyRTCConnection
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            zulu = _closure1_slot15;
            entity = null;
            if(!(entity != zulu)) { _fun00010_ip = 57; continue _fun00009 }
 13:
            tango = _closure1_slot15;
            zulu = tango.getDuration;
            zulu = zulu.bind(tango)();
            _closure1_slot21 = zulu;
            tango = _closure1_slot15;
            zulu = tango.destroy;
            zulu = zulu.bind(tango)();
            var _closure1_slot15 = entity;
            _closure1_slot20 = entity;
            entity = undefined;
            return entity;
 57:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot28 = entity;
    offset = function() { // Original name: handleClearRemoteDisconnectVoiceChannelId
        entity = null;
        _closure1_slot18 = entity;
        entity = undefined;
        return entity;
    };
    golf = function(argFoo) { // Original name: handleChannelDelete
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            mike = entity.channel;
            tango = _closure1_slot15;
            zulu = null;
            if(!(zulu != tango)) { _fun00012_ip = 51; continue _fun00011 }
 21:
            zulu = _closure1_slot15;
            zulu = zulu.channelId;
            mike = mike.id;
            if(!(zulu === mike)) { _fun00012_ip = 51; continue _fun00011 }
 39:
            mike = _closure1_slot28;
            entity = undefined;
            mike = mike.bind(entity)();
            return entity;
 51:
            entity = false;
            return entity;
        }
    };
    yankee = function() { // Original name: handleRtcAction
        entity = true;
        return entity;
    };
    entity = global;
    romeo = entity.Object;
    verify = romeo.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(romeo)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = options.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 3;
    mike = oscar[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 4;
    mike = oscar[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot7 = mike;
    mike = 5;
    mike = oscar[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot8 = mike;
    mike = 6;
    mike = oscar[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot9 = mike;
    mike = 7;
    mike = oscar[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot10 = mike;
    mike = 8;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    verify = mike.RTCConnectionStates;
    var _closure1_slot11 = verify;
    verify = mike.AppStates;
    var _closure1_slot12 = verify;
    mike = mike.RTCConnectionQuality;
    var _closure1_slot13 = mike;
    mike = 9;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.MediaEngineContextTypes;
    var _closure1_slot14 = mike;
    mike = new Array(0);
    var _closure1_slot17 = mike;
    mike = null;
    var _closure1_slot18 = mike;
    var _closure1_slot19 = mike;
    var _closure1_slot20 = mike;
    var _closure1_slot21 = mike;
    mike = false;
    var _closure1_slot22 = mike;
    var _closure1_slot23 = mike;
    mike = 15;
    mike = oscar[mike];
    mike = options.bind(entity)(mike);
    verify = mike.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: RTCConnectionStore
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
        entity = function() { // Original name: value
            mike = this;
            tango = mike.waitFor;
            zulu = _closure1_slot10;
            zulu = tango.bind(mike)(zulu);
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 14;
            zulu = zulu[entity];
            entity = undefined;
            report = tango.bind(entity)(zulu);
            tango = report.setVideoToggleAnalyticsParams;
            zulu = mike.getRTCConnectionId;
            mike = mike.getMediaSessionId;
            mike = tango.bind(report)(zulu, mike);
            return entity;
        };
        report['value'] = entity;
        entity = new Array(27);
        entity[0] = report;
        report = {};
        golf = 'getRTCConnection';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot15;
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getState';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                zulu = _closure1_slot15;
                entity = null;
                if(!(entity == zulu)) { _fun00014_ip = 25; continue _fun00013 }
 13:
                entity = _closure1_slot11;
                entity = entity.DISCONNECTED;
                _fun00014_ip = 34; continue _fun00013;
 25:
                mike = _closure1_slot15;
                entity = mike.state;
 34:
                return entity;
            }
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'isConnected';
        report['key'] = golf;
        golf = function() { // Original name: value
            mike = this;
            entity = mike.getState;
            mike = entity.bind(mike)();
            entity = _closure1_slot11;
            entity = entity.RTC_CONNECTED;
            entity = mike === entity;
            return entity;
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'isDisconnected';
        report['key'] = golf;
        golf = function() { // Original name: value
            mike = this;
            entity = mike.getState;
            mike = entity.bind(mike)();
            entity = _closure1_slot11;
            entity = entity.DISCONNECTED;
            entity = mike === entity;
            return entity;
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'getRemoteDisconnectVoiceChannelId';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot18;
            return entity;
        };
        report['value'] = golf;
        entity[5] = report;
        report = {};
        golf = 'getLastSessionVoiceChannelId';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot19;
            return entity;
        };
        report['value'] = golf;
        entity[6] = report;
        report = {};
        golf = 'setLastSessionVoiceChannelId';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            entity = argFoo;
            _closure1_slot19 = entity;
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[7] = report;
        report = {};
        golf = 'getGuildId';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                mike = _closure1_slot15;
                entity = null;
                zulu = entity == mike;
                entity = undefined;
                if(zulu) { _fun00016_ip = 23; continue _fun00015 }
 18:
                entity = mike.guildId;
 23:
                return entity;
            }
        };
        report['value'] = golf;
        entity[8] = report;
        report = {};
        golf = 'getChannelId';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                mike = _closure1_slot15;
                entity = null;
                zulu = entity == mike;
                entity = undefined;
                if(zulu) { _fun00018_ip = 23; continue _fun00017 }
 18:
                entity = mike.channelId;
 23:
                return entity;
            }
        };
        report['value'] = golf;
        entity[9] = report;
        report = {};
        golf = 'getHostname';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                zulu = _closure1_slot15;
                entity = null;
                zulu = entity != zulu;
                entity = '';
                if(!zulu) { _fun00020_ip = 30; continue _fun00019 }
 20:
                mike = _closure1_slot15;
                entity = mike.hostname;
 30:
                return entity;
            }
        };
        report['value'] = golf;
        entity[10] = report;
        report = {};
        golf = 'getQuality';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                zulu = _closure1_slot15;
                entity = null;
                if(!(entity == zulu)) { _fun00022_ip = 25; continue _fun00021 }
 13:
                entity = _closure1_slot13;
                entity = entity.UNKNOWN;
                _fun00022_ip = 35; continue _fun00021;
 25:
                mike = _closure1_slot15;
                entity = mike.quality;
 35:
                return entity;
            }
        };
        report['value'] = golf;
        entity[11] = report;
        report = {};
        golf = 'getPings';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                zulu = _closure1_slot15;
                entity = null;
                if(!(entity == zulu)) { _fun00024_ip = 19; continue _fun00023 }
 13:
                entity = _closure1_slot17;
                _fun00024_ip = 33; continue _fun00023;
 19:
                zulu = _closure1_slot15;
                mike = zulu.getPings;
                entity = mike.bind(zulu)();
 33:
                return entity;
            }
        };
        report['value'] = golf;
        entity[12] = report;
        report = {};
        golf = 'getAveragePing';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                entity = _closure1_slot15;
                mike = null;
                tango = mike != entity;
                entity = 0;
                if(!tango) { _fun00026_ip = 44; continue _fun00025 }
 18:
                tango = _closure1_slot15;
                zulu = mike == tango;
                mike = undefined;
                if(zulu) { _fun00026_ip = 41; continue _fun00025 }
 31:
                zulu = tango.getAveragePing;
                mike = zulu.bind(tango)();
 41:
                entity = mike;
 44:
                return entity;
            }
        };
        report['value'] = golf;
        entity[13] = report;
        report = {};
        golf = 'getLastPing';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                zulu = _closure1_slot15;
                entity = null;
                mike = entity == zulu;
                entity = undefined;
                if(mike) { _fun00028_ip = 28; continue _fun00027 }
 18:
                mike = zulu.getLastPing;
                entity = mike.bind(zulu)();
 28:
                return entity;
            }
        };
        report['value'] = golf;
        entity[14] = report;
        report = {};
        golf = 'getOutboundLossRate';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                zulu = _closure1_slot15;
                entity = null;
                mike = entity == zulu;
                entity = undefined;
                if(mike) { _fun00030_ip = 28; continue _fun00029 }
 18:
                mike = zulu.getOutboundLossRate;
                entity = mike.bind(zulu)();
 28:
                return entity;
            }
        };
        report['value'] = golf;
        entity[15] = report;
        report = {};
        golf = 'getMediaSessionId';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                zulu = _closure1_slot15;
                entity = null;
                mike = entity == zulu;
                entity = undefined;
                if(mike) { _fun00032_ip = 28; continue _fun00031 }
 18:
                mike = zulu.getMediaSessionId;
                entity = mike.bind(zulu)();
 28:
                return entity;
            }
        };
        report['value'] = golf;
        entity[16] = report;
        report = {};
        golf = 'getRTCConnectionId';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                zulu = _closure1_slot15;
                entity = null;
                mike = entity == zulu;
                entity = undefined;
                if(mike) { _fun00034_ip = 28; continue _fun00033 }
 18:
                mike = zulu.getRTCConnectionId;
                entity = mike.bind(zulu)();
 28:
                return entity;
            }
        };
        report['value'] = golf;
        entity[17] = report;
        report = {};
        golf = 'getDuration';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                report = _closure1_slot15;
                zulu = null;
                tango = zulu == report;
                entity = undefined;
                if(tango) { _fun00036_ip = 28; continue _fun00035 }
 18:
                tango = report.getDuration;
                entity = tango.bind(report)();
 28:
                if(!(zulu == entity)) { _fun00036_ip = 36; continue _fun00035 }
 32:
                entity = _closure1_slot21;
 36:
                return entity;
            }
        };
        report['value'] = golf;
        entity[18] = report;
        report = {};
        golf = 'getPacketStats';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                zulu = _closure1_slot15;
                entity = null;
                mike = entity == zulu;
                entity = undefined;
                if(mike) { _fun00038_ip = 28; continue _fun00037 }
 18:
                mike = zulu.getPacketStats;
                entity = mike.bind(zulu)();
 28:
                return entity;
            }
        };
        report['value'] = golf;
        entity[19] = report;
        report = {};
        golf = 'getVoiceStateStats';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                zulu = _closure1_slot20;
                entity = null;
                mike = entity == zulu;
                entity = undefined;
                if(mike) { _fun00040_ip = 28; continue _fun00039 }
 18:
                mike = zulu.getStats;
                entity = mike.bind(zulu)();
 28:
                return entity;
            }
        };
        report['value'] = golf;
        entity[20] = report;
        report = {};
        golf = 'getWasEverMultiParticipant';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot22;
            return entity;
        };
        report['value'] = golf;
        entity[21] = report;
        report = {};
        golf = 'getWasEverRtcConnected';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot23;
            return entity;
        };
        report['value'] = golf;
        entity[22] = report;
        report = {};
        golf = 'getUserIds';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                zulu = _closure1_slot15;
                entity = null;
                mike = entity == zulu;
                entity = undefined;
                if(mike) { _fun00042_ip = 28; continue _fun00041 }
 18:
                mike = zulu.getUserIds;
                entity = mike.bind(zulu)();
 28:
                return entity;
            }
        };
        report['value'] = golf;
        entity[23] = report;
        report = {};
        golf = 'isUserConnected';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
                tango = _closure1_slot15;
                entity = null;
                mike = entity == tango;
                entity = undefined;
                if(mike) { _fun00044_ip = 32; continue _fun00043 }
 18:
                zulu = tango.getIsUserConnected;
                mike = argFoo;
                entity = zulu.bind(tango)(mike);
 32:
                return entity;
            }
        };
        report['value'] = golf;
        entity[24] = report;
        report = {};
        golf = 'getSecureFramesState';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
                zulu = _closure1_slot15;
                entity = null;
                mike = entity == zulu;
                entity = undefined;
                if(mike) { _fun00046_ip = 28; continue _fun00045 }
 18:
                mike = zulu.getSecureFramesState;
                entity = mike.bind(zulu)();
 28:
                return entity;
            }
        };
        report['value'] = golf;
        entity[25] = report;
        report = {};
        golf = 'getSecureFramesRosterMapEntry';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
                report = _closure1_slot15;
                mike = null;
                zulu = mike == report;
                tango = undefined;
                if(zulu) { _fun00048_ip = 28; continue _fun00047 }
 18:
                zulu = report.getSecureFramesRosterMap;
                tango = zulu.bind(report)();
 28:
                mike = mike == tango;
                entity = undefined;
                if(mike) { _fun00048_ip = 50; continue _fun00047 }
 37:
                zulu = tango.get;
                mike = argFoo;
                entity = zulu.bind(tango)(mike);
 50:
                return entity;
            }
        };
        report['value'] = oscar;
        entity[26] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    verify = mike.bind(entity)(verify);
    mike = 'RTCConnectionStore';
    verify['displayName'] = mike;
    mike = 12;
    mike = oscar[mike];
    kilo = options.bind(entity)(mike);
    mike = {};
    romeo = function(argFoo) { // Original name: handleConnectionOpen
        entity = argFoo;
        mike = entity.sessionId;
        var _closure1_slot16 = mike;
        mike = null;
        _closure1_slot18 = mike;
        _closure1_slot19 = mike;
        mike = _closure1_slot28;
        entity = undefined;
        entity = mike.bind(entity)();
        entity = false;
        return entity;
    };
    mike['CONNECTION_OPEN'] = romeo;
    romeo = function() { // Original name: handleConnectionClosed
        mike = null;
        _closure1_slot16 = mike;
        _closure1_slot18 = mike;
        _closure1_slot19 = mike;
        mike = _closure1_slot28;
        entity = undefined;
        mike = mike.bind(entity)();
        return entity;
    };
    mike['CONNECTION_CLOSED'] = romeo;
    romeo = function(argFoo) { // Original name: handleRTCConnectionState
        _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
            entity = argFoo;
            zulu = entity.state;
            entity = _closure1_slot11;
            entity = entity.RTC_CONNECTED;
            if(!(zulu === entity)) { _fun00050_ip = 31; continue _fun00049 }
 25:
            entity = true;
            _closure1_slot23 = entity;
 31:
            entity = true;
            return entity;
        }
    };
    mike['RTC_CONNECTION_STATE'] = romeo;
    mike['RTC_CONNECTION_PING'] = yankee;
    mike['RTC_CONNECTION_LOSS_RATE'] = yankee;
    romeo = function(argFoo) { // Original name: handleRtcConnectionUpdateId
        entity = argFoo;
        mike = entity.connection;
        entity = _closure1_slot15;
        entity = mike === entity;
        return entity;
    };
    mike['RTC_CONNECTION_UPDATE_ID'] = romeo;
    mike['RTC_CONNECTION_SECURE_FRAMES_UPDATE'] = yankee;
    mike['RTC_CONNECTION_CLIENT_CONNECT'] = yankee;
    mike['RTC_CONNECTION_CLIENT_DISCONNECT'] = yankee;
    yankee = function(argFoo) { // Original name: handleVideoSizeUpdate
        _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
            entity = argFoo;
            report = entity.streamId;
            tango = entity.width;
            zulu = entity.height;
            mike = _closure1_slot15;
            entity = null;
            if(!(entity != mike)) { _fun00052_ip = 45; continue _fun00051 }
 32:
            entity = mike.setVideoSize;
            entity = entity.bind(mike)(report, tango, zulu);
 45:
            entity = undefined;
            return entity;
        }
    };
    mike['VIDEO_SIZE_UPDATE'] = yankee;
    yankee = function(argFoo) { // Original name: handleVoiceStateUpdates
        entity = argFoo;
        tango = entity.voiceStates;
        zulu = tango.reduce;
        mike = function(argFoo, argBar) {
            _fun00053: for(var _fun00054_ip = 0; ; ) switch(_fun00054_ip) {
 0:
                mike = argBar;
                golf = _closure1_slot20;
                tango = null;
                if(!(tango != golf)) { _fun00054_ip = 40; continue _fun00053 }
 16:
                oscar = golf.updateVoiceStates;
                report = mike.userId;
                zulu = mike.channelId;
                zulu = oscar.bind(golf)(report, zulu);
 40:
                zulu = _closure1_slot22;
                if(zulu) { _fun00054_ip = 95; continue _fun00053 }
 47:
                golf = _closure1_slot20;
                oscar = tango == golf;
                report = undefined;
                if(oscar) { _fun00054_ip = 76; continue _fun00053 }
 60:
                oscar = golf.getStats;
                oscar = oscar.bind(golf)();
                report = oscar.max_voice_state_count;
 76:
                golf = tango != report;
                oscar = 0;
                if(!golf) { _fun00054_ip = 88; continue _fun00053 }
 85:
                oscar = report;
 88:
                report = 1;
                zulu = oscar > report;
 95:
                _closure1_slot22 = zulu;
                report = _closure1_slot9;
                zulu = report.getId;
                report = zulu.bind(report)();
                zulu = mike.userId;
                if(!(report === zulu)) { _fun00054_ip = 596; continue _fun00053 }
 125:
                zulu = _closure1_slot15;
                if(!(tango == zulu)) { _fun00054_ip = 250; continue _fun00053 }
 133:
                report = mike.sessionId;
                zulu = _closure1_slot16;
                if(!(report === zulu)) { _fun00054_ip = 245; continue _fun00053 }
 147:
                zulu = mike.channelId;
                if(!(tango != zulu)) { _fun00054_ip = 245; continue _fun00053 }
 156:
                _closure1_slot18 = tango;
                _closure1_slot19 = tango;
                golf = _closure1_slot27;
                oscar = mike.guildId;
                report = mike.channelId;
                zulu = undefined;
                report = golf.bind(zulu)(oscar, report);
                _closure1_slot15 = report;
                oscar = _closure1_slot20;
                report = tango == oscar;
                if(report) { _fun00054_ip = 217; continue _fun00053 }
 201:
                report = oscar.getStats;
                report = report.bind(oscar)();
                zulu = report.max_voice_state_count;
 217:
                oscar = tango != zulu;
                report = 0;
                if(!oscar) { _fun00054_ip = 229; continue _fun00053 }
 226:
                report = zulu;
 229:
                zulu = 1;
                zulu = report > zulu;
                _closure1_slot22 = zulu;
                _fun00054_ip = 592; continue _fun00053;
 245:
                zulu = argFoo;
                return zulu;
 250:
                report = mike.sessionId;
                zulu = _closure1_slot16;
                if(!(report !== zulu)) { _fun00054_ip = 355; continue _fun00053 }
 264:
                report = mike.guildId;
                zulu = _closure1_slot15;
                zulu = zulu.guildId;
                if(!(report === zulu)) { _fun00054_ip = 592; continue _fun00053 }
 285:
                report = _closure1_slot8;
                zulu = report.getAwaitingRemoteSessionInfo;
                zulu = zulu.bind(report)();
                zulu = tango != zulu;
                if(!zulu) { _fun00054_ip = 324; continue _fun00053 }
 306:
                oscar = _closure1_slot8;
                report = oscar.getRemoteSessionId;
                report = report.bind(oscar)();
                zulu = tango != report;
 324:
                if(zulu) { _fun00054_ip = 340; continue _fun00053 }
 327:
                zulu = _closure1_slot15;
                zulu = zulu.channelId;
                _closure1_slot18 = zulu;
 340:
                report = _closure1_slot28;
                zulu = undefined;
                zulu = report.bind(zulu)();
                _fun00054_ip = 592; continue _fun00053;
 355:
                zulu = mike.guildId;
                if(!(tango != zulu)) { _fun00054_ip = 385; continue _fun00053 }
 364:
                report = mike.guildId;
                zulu = _closure1_slot15;
                zulu = zulu.guildId;
                if(!(report !== zulu)) { _fun00054_ip = 556; continue _fun00053 }
 385:
                zulu = mike.guildId;
                if(!(tango == zulu)) { _fun00054_ip = 415; continue _fun00053 }
 394:
                report = mike.channelId;
                zulu = _closure1_slot15;
                zulu = zulu.channelId;
                if(!(report !== zulu)) { _fun00054_ip = 556; continue _fun00053 }
 415:
                report = mike.guildId;
                zulu = _closure1_slot15;
                zulu = zulu.guildId;
                zulu = report !== zulu;
                if(!zulu) { _fun00054_ip = 445; continue _fun00053 }
 436:
                report = mike.channelId;
                zulu = tango == report;
 445:
                if(zulu) { _fun00054_ip = 458; continue _fun00053 }
 448:
                report = _closure1_slot28;
                zulu = undefined;
                zulu = report.bind(zulu)();
 458:
                zulu = mike.channelId;
                if(!(tango != zulu)) { _fun00054_ip = 592; continue _fun00053 }
 470:
                _closure1_slot18 = tango;
                _closure1_slot19 = tango;
                golf = _closure1_slot27;
                oscar = mike.guildId;
                report = mike.channelId;
                zulu = undefined;
                report = golf.bind(zulu)(oscar, report);
                _closure1_slot15 = report;
                oscar = _closure1_slot20;
                report = tango == oscar;
                if(report) { _fun00054_ip = 531; continue _fun00053 }
 515:
                report = oscar.getStats;
                report = report.bind(oscar)();
                zulu = report.max_voice_state_count;
 531:
                oscar = tango != zulu;
                report = 0;
                if(!oscar) { _fun00054_ip = 543; continue _fun00053 }
 540:
                report = zulu;
 543:
                zulu = 1;
                zulu = report > zulu;
                _closure1_slot22 = zulu;
                _fun00054_ip = 592; continue _fun00053;
 556:
                zulu = mike.channelId;
                if(!(tango != zulu)) { _fun00054_ip = 582; continue _fun00053 }
 565:
                zulu = _closure1_slot15;
                mike = mike.channelId;
                zulu['channelId'] = mike;
                _fun00054_ip = 592; continue _fun00053;
 582:
                mike = _closure1_slot28;
                entity = undefined;
                entity = mike.bind(entity)();
 592:
                entity = true;
                return entity;
 596:
                entity = false;
                return entity;
            }
        };
        entity = false;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    mike['VOICE_STATE_UPDATES'] = yankee;
    yankee = function(argFoo) { // Original name: handleVoiceChannelSelect
        _fun00055: for(var _fun00056_ip = 0; ; ) switch(_fun00056_ip) {
 0:
            entity = argFoo;
            zulu = entity.channelId;
            tango = _closure1_slot15;
            mike = null;
            if(!(mike != tango)) { _fun00056_ip = 50; continue _fun00055 }
 21:
            if(!(mike != zulu)) { _fun00056_ip = 38; continue _fun00055 }
 25:
            mike = _closure1_slot15;
            mike = mike.channelId;
            if(!(mike !== zulu)) { _fun00056_ip = 50; continue _fun00055 }
 38:
            mike = _closure1_slot28;
            entity = undefined;
            mike = mike.bind(entity)();
            return entity;
 50:
            entity = false;
            return entity;
        }
    };
    mike['VOICE_CHANNEL_SELECT'] = yankee;
    yankee = function(argFoo) { // Original name: handleVoiceServerUpdate
        _fun00057: for(var _fun00058_ip = 0; ; ) switch(_fun00058_ip) {
 0:
            tango = argFoo;
            entity = _closure1_slot15;
            oscar = null;
            entity = oscar != entity;
            if(!entity) { _fun00058_ip = 121; continue _fun00057 }
 19:
            mike = tango.guildId;
            mike = oscar == mike;
            if(mike) { _fun00058_ip = 49; continue _fun00057 }
 31:
            golf = tango.guildId;
            zulu = _closure1_slot15;
            zulu = zulu.guildId;
            mike = golf === zulu;
 49:
            if(!mike) { _fun00058_ip = 118; continue _fun00057 }
 52:
            zulu = tango.channelId;
            zulu = oscar == zulu;
            if(zulu) { _fun00058_ip = 82; continue _fun00057 }
 64:
            golf = tango.channelId;
            oscar = _closure1_slot15;
            oscar = oscar.channelId;
            zulu = golf === oscar;
 82:
            if(!zulu) { _fun00058_ip = 115; continue _fun00057 }
 85:
            golf = _closure1_slot15;
            oscar = golf.connect;
            report = tango.endpoint;
            tango = tango.token;
            tango = oscar.bind(golf)(report, tango);
            zulu = undefined;
 115:
            mike = zulu;
 118:
            entity = mike;
 121:
            return entity;
        }
    };
    mike['VOICE_SERVER_UPDATE'] = yankee;
    mike['CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID'] = offset;
    mike['REMOTE_SESSION_CONNECT'] = offset;
    offset = function() { // Original name: handleClearLastSessionVoiceChannelId
        entity = null;
        _closure1_slot19 = entity;
        entity = undefined;
        return entity;
    };
    mike['CLEAR_LAST_SESSION_VOICE_CHANNEL_ID'] = offset;
    offset = function(argFoo) { // Original name: handleGuildDelete
        _fun00059: for(var _fun00060_ip = 0; ; ) switch(_fun00060_ip) {
 0:
            entity = argFoo;
            mike = entity.guild;
            tango = _closure1_slot15;
            zulu = null;
            if(!(zulu != tango)) { _fun00060_ip = 51; continue _fun00059 }
 21:
            zulu = _closure1_slot15;
            zulu = zulu.guildId;
            mike = mike.id;
            if(!(zulu === mike)) { _fun00060_ip = 51; continue _fun00059 }
 39:
            mike = _closure1_slot28;
            entity = undefined;
            mike = mike.bind(entity)();
            return entity;
 51:
            entity = false;
            return entity;
        }
    };
    mike['GUILD_DELETE'] = offset;
    mike['CHANNEL_DELETE'] = golf;
    mike['THREAD_DELETE'] = golf;
    golf = function(argFoo) { // Original name: handleCallDelete
        _fun00061: for(var _fun00062_ip = 0; ; ) switch(_fun00062_ip) {
 0:
            entity = argFoo;
            zulu = entity.channelId;
            tango = _closure1_slot15;
            mike = null;
            if(!(mike != tango)) { _fun00062_ip = 46; continue _fun00061 }
 21:
            mike = _closure1_slot15;
            mike = mike.channelId;
            if(!(mike === zulu)) { _fun00062_ip = 46; continue _fun00061 }
 34:
            mike = _closure1_slot28;
            entity = undefined;
            mike = mike.bind(entity)();
            return entity;
 46:
            entity = false;
            return entity;
        }
    };
    mike['CALL_DELETE'] = golf;
    golf = function(argFoo) { // Original name: handleFocus
        _fun00063: for(var _fun00064_ip = 0; ; ) switch(_fun00064_ip) {
 0:
            entity = argFoo;
            zulu = entity.state;
            mike = _closure1_slot12;
            mike = mike.ACTIVE;
            mike = zulu === mike;
            if(!mike) { _fun00064_ip = 38; continue _fun00063 }
 28:
            tango = _closure1_slot15;
            zulu = null;
            mike = zulu != tango;
 38:
            if(!mike) { _fun00064_ip = 62; continue _fun00063 }
 41:
            zulu = _closure1_slot15;
            mike = zulu.resetBackoff;
            entity = 'App state is active';
            entity = mike.bind(zulu)(entity);
 62:
            entity = false;
            return entity;
        }
    };
    mike['APP_STATE_UPDATE'] = golf;
    golf = function(argFoo) { // Original name: handleSimulcastDebugOverrideChanged
        _fun00065: for(var _fun00066_ip = 0; ; ) switch(_fun00066_ip) {
 0:
            entity = argFoo;
            report = entity.userId;
            tango = entity.context;
            zulu = entity.quality;
            mike = _closure1_slot15;
            entity = null;
            if(!(entity != mike)) { _fun00066_ip = 45; continue _fun00065 }
 32:
            entity = mike.setSimulcastDebugOverride;
            entity = entity.bind(mike)(report, tango, zulu);
 45:
            entity = undefined;
            return entity;
        }
    };
    mike['RTC_DEBUG_SET_SIMULCAST_OVERRIDE'] = golf;
    golf = verify.prototype;
    golf = Object.create(golf, {constructor: {value: verify}});
    sizing = golf;
    backup = mike;
    mike = new sizing[verify](kilo, backup, foxtrot);
    mike = mike instanceof Object ? mike : golf;
    var _closure1_slot24 = mike;
    golf = 17;
    golf = oscar[golf];
    verify = report.bind(entity)(golf);
    golf = 16;
    options = oscar[golf];
    golf = oscar.paths;
    options = verify.bind(entity)(options, golf);
    golf = options.then;
    tango = function(argFoo) {
        entity = argFoo;
        zulu = entity.addExtraAnalyticsDecorator;
        entity = undefined;
        mike = function(argFoo) {
            mike = _closure1_slot24;
            entity = mike.getState;
            mike = entity.bind(mike)();
            entity = argFoo;
            entity['client_rtc_state'] = mike;
            entity = undefined;
            return entity;
        };
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = golf.bind(options)(tango);
    tango = 18;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'stores/RTCConnectionStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();