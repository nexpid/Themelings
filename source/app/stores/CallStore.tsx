// app/stores/CallStore.tsx
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
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot15;
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
    var _closure1_slot14 = entity;
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
            _closure1_slot15 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = function() { // Original name: callConnect
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            mike = arguments[0];
            tango = arguments[1];
            zulu = undefined;
            if(!(mike === zulu)) { _fun00006_ip = 14; continue _fun00005 }
 12:
            mike = false;
 14:
            if(!(tango === zulu)) { _fun00006_ip = 35; continue _fun00005 }
 18:
            report = _closure1_slot9;
            entity = report.getChannelId;
            tango = entity.bind(report)();
 35:
            oscar = _closure1_slot8;
            report = oscar.getChannel;
            golf = report.bind(oscar)(tango);
            oscar = null;
            if(!(oscar != golf)) { _fun00006_ip = 91; continue _fun00005 }
 58:
            report = golf.getGuildId;
            report = report.bind(golf)();
            if(!(oscar == report)) { _fun00006_ip = 91; continue _fun00005 }
 72:
            if(!(oscar != tango)) { _fun00006_ip = 91; continue _fun00005 }
 76:
            report = _closure1_slot12;
            report = report[tango];
            if(!(oscar != report)) { _fun00006_ip = 95; continue _fun00005 }
 88:
            if(mike) { _fun00006_ip = 95; continue _fun00005 }
 91:
            mike = false;
            return mike;
 95:
            report = _closure1_slot12;
            mike = report[tango];
            if(!(oscar == mike)) { _fun00006_ip = 125; continue _fun00005 }
 107:
            oscar = {};
            oscar['channelId'] = tango;
            golf = new Array(0);
            oscar['ringing'] = golf;
            mike = oscar;
 125:
            report[tango] = mike;
            mike = _closure1_slot1;
            report = _closure1_slot2;
            entity = 9;
            entity = report[entity];
            zulu = mike.bind(zulu)(entity);
            mike = zulu.dispatch;
            entity = {};
            report = 'CALL_CONNECT';
            entity['type'] = report;
            entity['channelId'] = tango;
            entity = mike.bind(zulu)(entity);
            entity = true;
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, mike);
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
    mike = mike.Endpoints;
    var _closure1_slot11 = mike;
    mike = {};
    var _closure1_slot12 = mike;
    mike = {};
    var _closure1_slot13 = mike;
    mike = 12;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    options = mike.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: CallStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot3;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot14;
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
            tango = this;
            zulu = tango.waitFor;
            mike = _closure1_slot10;
            entity = _closure1_slot9;
            entity = zulu.bind(tango)(mike, entity);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(7);
        entity[0] = report;
        report = {};
        golf = 'getCall';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            mike = _closure1_slot12;
            entity = argFoo;
            entity = mike[entity];
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getCalls';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = global;
            zulu = entity.Object;
            mike = zulu.values;
            entity = _closure1_slot12;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'getMessageId';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                zulu = this;
                mike = zulu.getCall;
                entity = argFoo;
                mike = mike.bind(zulu)(entity);
                entity = null;
                zulu = entity != mike;
                if(!zulu) { _fun00008_ip = 31; continue _fun00007 }
 26:
                entity = mike.messageId;
 31:
                return entity;
            }
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'isCallActive';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                tango = argBar;
                mike = _closure1_slot12;
                entity = argFoo;
                zulu = mike[entity];
                report = null;
                entity = report != zulu;
                if(!entity) { _fun00010_ip = 35; continue _fun00009 }
 26:
                mike = zulu.unavailable;
                entity = !mike;
 35:
                if(!entity) { _fun00010_ip = 66; continue _fun00009 }
 38:
                if(!(report == tango)) { _fun00010_ip = 54; continue _fun00009 }
 42:
                mike = zulu.region;
                mike = report != mike;
                _fun00010_ip = 63; continue _fun00009;
 54:
                zulu = zulu.messageId;
                mike = zulu === tango;
 63:
                entity = mike;
 66:
                return entity;
            }
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'isCallUnavailable';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                mike = _closure1_slot12;
                entity = argFoo;
                mike = mike[entity];
                entity = null;
                entity = entity != mike;
                if(!entity) { _fun00012_ip = 29; continue _fun00011 }
 23:
                entity = mike.unavailable;
 29:
                return entity;
            }
        };
        report['value'] = golf;
        entity[5] = report;
        report = {};
        golf = 'getInternalState';
        report['key'] = golf;
        oscar = function() { // Original name: value
            entity = {};
            zulu = _closure1_slot12;
            entity['calls'] = zulu;
            mike = _closure1_slot13;
            entity['enqueuedRings'] = mike;
            return entity;
        };
        report['value'] = oscar;
        entity[6] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = mike.bind(entity)(options);
    mike = 'CallStore';
    options['displayName'] = mike;
    mike = 9;
    mike = oscar[mike];
    romeo = golf.bind(entity)(mike);
    mike = {};
    verify = function() { // Original name: handleConnectionOpen
        zulu = _closure1_slot16;
        mike = undefined;
        entity = true;
        entity = zulu.bind(mike)(entity);
        return entity;
    };
    mike['CONNECTION_OPEN'] = verify;
    verify = function() { // Original name: handleConnectionClosed
        entity = {};
        _closure1_slot12 = entity;
        entity = {};
        _closure1_slot13 = entity;
        entity = undefined;
        return entity;
    };
    mike['CONNECTION_CLOSED'] = verify;
    verify = function(argFoo) { // Original name: handleOverlayInitialize
        entity = argFoo;
        zulu = entity.callStoreInternalState;
        entity = {};
        tango = zulu.calls;
        report = entity;
        mike = copyDataProperties(report, tango);
        _closure1_slot12 = entity;
        entity = {};
        tango = zulu.enqueuedRings;
        report = entity;
        zulu = copyDataProperties(report, tango);
        _closure1_slot13 = entity;
        entity = undefined;
        return entity;
    };
    mike['OVERLAY_INITIALIZE'] = verify;
    verify = function() { // Original name: handleConnectionResumed
        zulu = _closure1_slot16;
        mike = undefined;
        entity = true;
        entity = zulu.bind(mike)(entity);
        return entity;
    };
    mike['CONNECTION_RESUMED'] = verify;
    verify = function(argFoo) { // Original name: handleChannelSelect
        entity = argFoo;
        tango = entity.channelId;
        zulu = _closure1_slot16;
        mike = undefined;
        entity = false;
        entity = zulu.bind(mike)(entity, tango);
        return entity;
    };
    mike['CHANNEL_SELECT'] = verify;
    verify = function(argFoo) { // Original name: handleChannelDelete
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = argFoo;
            entity = entity.channel;
            tango = _closure1_slot13;
            zulu = entity.id;
            zulu = tango[zulu];
            tango = null;
            if(!(tango != zulu)) { _fun00014_ip = 43; continue _fun00013 }
 30:
            report = _closure1_slot13;
            zulu = entity.id;
            zulu = delete report[zulu];
 43:
            report = _closure1_slot12;
            zulu = entity.id;
            zulu = report[zulu];
            if(!(tango != zulu)) { _fun00014_ip = 77; continue _fun00013 }
 60:
            mike = _closure1_slot12;
            entity = entity.id;
            entity = delete mike[entity];
            entity = undefined;
            return entity;
 77:
            entity = false;
            return entity;
        }
    };
    mike['CHANNEL_DELETE'] = verify;
    verify = function(argFoo) { // Original name: handleCallCreate
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = argFoo;
            golf = entity.channelId;
            oscar = entity.messageId;
            report = entity.region;
            zulu = entity.ringing;
            mike = _closure1_slot12;
            entity = {};
            entity['channelId'] = golf;
            entity['messageId'] = oscar;
            entity['region'] = report;
            entity['ringing'] = zulu;
            zulu = false;
            entity['unavailable'] = zulu;
            entity['regionUpdated'] = zulu;
            mike[golf] = entity;
            entity = _closure1_slot13;
            mike = entity[golf];
            entity = null;
            if(!(entity != mike)) { _fun00016_ip = 202; continue _fun00015 }
 82:
            mike = _closure1_slot13;
            report = mike[golf];
            mike = _closure1_slot13;
            mike = delete mike[golf];
            zulu = report.indexOf;
            mike = 'all';
            zulu = zulu.bind(report)(mike);
            mike = 1;
            if(!(mike !== zulu)) { _fun00016_ip = 121; continue _fun00015 }
 119:
            report = null;
 121:
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 10;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            zulu = entity.HTTP;
            mike = zulu.post;
            entity = {};
            oscar = _closure1_slot11;
            tango = oscar.CALL_RING;
            tango = tango.bind(oscar)(golf);
            entity['url'] = tango;
            tango = {};
            tango['recipients'] = report;
            entity['body'] = tango;
            tango = true;
            entity['oldFormErrors'] = tango;
            entity['rejectWithError'] = tango;
            entity = mike.bind(zulu)(entity);
 202:
            entity = undefined;
            return entity;
        }
    };
    mike['CALL_CREATE'] = verify;
    verify = function(argFoo) { // Original name: handleCallUpdate
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            entity = argFoo;
            zulu = entity.channelId;
            options = entity.messageId;
            golf = entity.region;
            oscar = entity.ringing;
            mike = _closure1_slot12;
            tango = mike[zulu];
            mike = null;
            report = mike != tango;
            if(!report) { _fun00018_ip = 67; continue _fun00017 }
 45:
            mike = tango.regionUpdated;
            if(mike) { _fun00018_ip = 64; continue _fun00017 }
 54:
            tango = tango.region;
            mike = tango !== golf;
 64:
            report = mike;
 67:
            mike = _closure1_slot12;
            entity = {};
            offset = mike[zulu];
            yankee = entity;
            tango = copyDataProperties(yankee, offset);
            tango = 'messageId';
            entity[tango] = options;
            tango = 'region';
            entity[tango] = golf;
            tango = 'ringing';
            entity[tango] = oscar;
            tango = 'regionUpdated';
            entity[tango] = report;
            mike[zulu] = entity;
            entity = undefined;
            return entity;
        }
    };
    mike['CALL_UPDATE'] = verify;
    verify = function(argFoo) { // Original name: handleCallDelete
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            entity = argFoo;
            mike = entity.channelId;
            golf = entity.unavailable;
            zulu = _closure1_slot12;
            oscar = zulu[mike];
            tango = _closure1_slot12;
            zulu = true;
            if(!(zulu === golf)) { _fun00020_ip = 41; continue _fun00019 }
 35:
            zulu = null;
            if(!(zulu == oscar)) { _fun00020_ip = 74; continue _fun00019 }
 41:
            zulu = {'channelId': null, 'ringing': null, 'messageId': null, 'region': null, 'regionUpdated': false};
            zulu['channelId'] = mike;
            report = new Array(0);
            zulu['ringing'] = report;
            zulu['unavailable'] = golf;
            _fun00020_ip = 98; continue _fun00019;
 74:
            report = {};
            verify = report;
            options = oscar;
            oscar = copyDataProperties(verify, options);
            oscar = 'unavailable';
            report[oscar] = golf;
            zulu = report;
 98:
            tango[mike] = zulu;
            zulu = _closure1_slot13;
            tango = zulu[mike];
            zulu = null;
            if(!(zulu != tango)) { _fun00020_ip = 124; continue _fun00019 }
 116:
            entity = _closure1_slot13;
            entity = delete entity[mike];
 124:
            entity = undefined;
            return entity;
        }
    };
    mike['CALL_DELETE'] = verify;
    verify = function(argFoo) { // Original name: handleCallEnqueueRing
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            entity = argFoo;
            tango = entity.channelId;
            golf = entity.recipients;
            zulu = _closure1_slot13;
            oscar = _closure1_slot1;
            report = _closure1_slot2;
            entity = 11;
            report = report[entity];
            entity = undefined;
            oscar = oscar.bind(entity)(report);
            report = oscar.union;
            mike = _closure1_slot13;
            mike = mike[tango];
            options = null;
            if(!(options == mike)) { _fun00022_ip = 67; continue _fun00021 }
 63:
            mike = new Array(0);
 67:
            if(!(options == golf)) { _fun00022_ip = 81; continue _fun00021 }
 71:
            golf = ['all'];
 81:
            mike = report.bind(oscar)(mike, golf);
            zulu[tango] = mike;
            return entity;
        }
    };
    mike['CALL_ENQUEUE_RING'] = verify;
    tango = function(argFoo) { // Original name: handleVoiceChannelSelect
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            entity = argFoo;
            mike = entity.channelId;
            entity = null;
            if(!(entity == mike)) { _fun00024_ip = 23; continue _fun00023 }
 14:
            entity = {};
            _closure1_slot13 = entity;
 23:
            entity = undefined;
            return entity;
        }
    };
    mike['VOICE_CHANNEL_SELECT'] = tango;
    tango = options.prototype;
    tango = Object.create(tango, {constructor: {value: options}});
    foxtrot = tango;
    yankee = mike;
    mike = new foxtrot[options](romeo, yankee, offset);
    mike = mike instanceof Object ? mike : tango;
    tango = 13;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'stores/CallStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();