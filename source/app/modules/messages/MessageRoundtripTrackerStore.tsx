// app/modules/messages/MessageRoundtripTrackerStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun66816: for(var _fun66816_ip = 0; ; ) switch(_fun66816_ip) {
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
            if(entity) { _fun66816_ip = 51; continue _fun66816 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun66816_ip = 92; continue _fun66816;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun66816_ip = 71; continue _fun66816 }
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
        _fun66817: for(var _fun66817_ip = 0; ; ) switch(_fun66817_ip) {
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
            _fun66817_ip = 76; continue _fun66817;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
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
    entity = function(argFoo) { // Original name: isCompleted
        _fun66820: for(var _fun66820_ip = 0; ; ) switch(_fun66820_ip) {
 0:
            mike = argFoo;
            entity = mike.apiResponseTimestamp;
            zulu = null;
            entity = zulu != entity;
            if(!entity) { _fun66820_ip = 28; continue _fun66820 }
 18:
            mike = mike.gatewaySeenTimestamp;
            entity = zulu != mike;
 28:
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo) { // Original name: trackRoundtrip
        _fun66821: for(var _fun66821_ip = 0; ; ) switch(_fun66821_ip) {
 0:
            entity = argFoo;
            tango = _closure1_slot8;
            zulu = tango.getBasicChannel;
            mike = entity.channelId;
            options = zulu.bind(tango)(mike);
            report = null;
            if(!(report == options)) { _fun66821_ip = 87; continue _fun66821 }
 32:
            tango = _closure1_slot12;
            zulu = tango.warn;
            offset = entity.channelId;
            mike = global;
            mike = mike.HermesInternal;
            verify = mike.concat;
            golf = 'Ignoring a messageData for channel ';
            mike = " because we can't find that channel.";
            mike = verify.bind(golf)(offset, mike);
            mike = zulu.bind(tango)(mike);
            _fun66821_ip = 423; continue _fun66821;
 87:
            mike = global;
            zulu = mike.Math;
            mike = zulu.random;
            zulu = mike.bind(zulu)();
            mike = 0.1;
            if(!(!(zulu > mike))) { _fun66821_ip = 423; continue _fun66821 }
 122:
            mike = entity.apiResponseTimestamp;
            mike = report == mike;
            yankee = null;
            if(mike) { _fun66821_ip = 153; continue _fun66821 }
 137:
            zulu = entity.apiResponseTimestamp;
            mike = entity.initialSendTimestamp;
            yankee = zulu - mike;
 153:
            mike = entity.gatewaySeenTimestamp;
            mike = report == mike;
            offset = null;
            if(mike) { _fun66821_ip = 184; continue _fun66821 }
 168:
            mike = entity.gatewaySeenTimestamp;
            entity = entity.initialSendTimestamp;
            offset = mike - entity;
 184:
            mike = _closure1_slot0;
            backup = _closure1_slot2;
            entity = 10;
            entity = backup[entity];
            romeo = undefined;
            mike = mike.bind(romeo)(entity);
            entity = mike.getSignalStrength;
            golf = entity.bind(mike)();
            foxtrot = _closure1_slot1;
            entity = 11;
            entity = backup[entity];
            tango = foxtrot.bind(romeo)(entity);
            zulu = tango.track;
            entity = _closure1_slot11;
            mike = entity.SEND_MESSAGE_ROUNDTRIP;
            entity = {};
            verify = 12;
            verify = backup[verify];
            verify = foxtrot.bind(romeo)(verify);
            kilo = verify.bind(romeo)();
            sizing = entity;
            verify = copyDataProperties(sizing, kilo);
            verify = 'api_latency_ms';
            entity[verify] = yankee;
            verify = 'gateway_latency_ms';
            entity[verify] = offset;
            offset = options.id;
            verify = 'channel_id';
            entity[verify] = offset;
            offset = options.type;
            verify = 'channel_type';
            entity[verify] = offset;
            offset = options.guild_id;
            verify = 'guild_id';
            entity[verify] = offset;
            offset = _closure1_slot9;
            verify = offset.getMemberCount;
            options = options.guild_id;
            verify = verify.bind(offset)(options);
            options = 'guild_size';
            entity[options] = verify;
            options = _closure1_slot10;
            oscar = options.getType;
            options = oscar.bind(options)();
            oscar = 'mobile_network_type';
            entity[oscar] = options;
            report = report != golf;
            if(!report) { _fun66821_ip = 407; continue _fun66821 }
 397:
            oscar = {};
            oscar['mobile_signal_strength_level'] = golf;
            report = oscar;
 407:
            sizing = entity;
            kilo = report;
            report = copyDataProperties(sizing, kilo);
            entity = zulu.bind(tango)(mike, entity);
 423:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot17 = entity;
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
    mike = mike.AnalyticEvents;
    var _closure1_slot11 = mike;
    mike = 9;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    verify = mike.Logger;
    mike = verify.prototype;
    options = Object.create(mike, {constructor: {value: verify}});
    romeo = 'MessageRoundtripTrackerStore';
    foxtrot = options;
    mike = new foxtrot[verify](romeo, yankee);
    mike = mike instanceof Object ? mike : options;
    var _closure1_slot12 = mike;
    mike = 13;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    options = mike.Store;
    mike = function(argFoo) {
        tango = function(argFoo) { // Original name: MessageRoundtripTrackerStoreClass
            report = this;
            offset = 0;
            oscar = copyRestArgs(offset);
            mike = _closure1_slot3;
            tango = _closure2_slot0;
            zulu = undefined;
            mike = mike.bind(zulu)(report, tango);
            mike = _closure1_slot14;
            entity = new Array(0);
            offset = entity;
            verify = oscar;
            options = 0;
            oscar = arraySpread(offset, verify, options);
            entity = mike.bind(zulu)(report, tango, entity);
            mike = global;
            mike = mike.Map;
            zulu = mike.prototype;
            zulu = Object.create(zulu, {constructor: {value: mike}});
            yankee = zulu;
            mike = new yankee[mike](offset);
            mike = mike instanceof Object ? mike : zulu;
            entity['pendingMessages'] = mike;
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot7;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot4;
        report = {};
        entity = 'recordMessageSendAttempt';
        report['key'] = entity;
        entity = function(argFoo, argBar) { // Original name: value
            oscar = argBar;
            zulu = this;
            var _closure3_slot0 = zulu;
            var _closure3_slot1 = oscar;
            report = {'initialSendTimestamp': null, 'apiResponseTimestamp': null, 'gatewaySeenTimestamp': null};
            entity = global;
            golf = entity.Date;
            tango = golf.now;
            tango = tango.bind(golf)();
            report['initialSendTimestamp'] = tango;
            tango = argFoo;
            report['channelId'] = tango;
            tango = zulu.pendingMessages;
            zulu = tango.set;
            zulu = zulu.bind(tango)(oscar, report);
            tango = entity.setTimeout;
            entity = undefined;
            zulu = function() {
                _fun66825: for(var _fun66825_ip = 0; ; ) switch(_fun66825_ip) {
 0:
                    mike = _closure3_slot0;
                    tango = mike.pendingMessages;
                    zulu = tango.get;
                    mike = _closure3_slot1;
                    tango = zulu.bind(tango)(mike);
                    mike = null;
                    if(!(mike != tango)) { _fun66825_ip = 71; continue _fun66825 }
 33:
                    zulu = _closure1_slot17;
                    mike = undefined;
                    mike = zulu.bind(mike)(tango);
                    mike = _closure3_slot0;
                    zulu = mike.pendingMessages;
                    mike = zulu.delete;
                    entity = _closure3_slot1;
                    entity = mike.bind(zulu)(entity);
 71:
                    entity = undefined;
                    return entity;
                }
            };
            mike = 30000;
            mike = tango.bind(entity)(zulu, mike);
            return entity;
        };
        report['value'] = entity;
        entity = new Array(3);
        entity[0] = report;
        report = {};
        golf = 'recordMessageSendApiResponse';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun66826: for(var _fun66826_ip = 0; ; ) switch(_fun66826_ip) {
 0:
                zulu = argFoo;
                entity = this;
                tango = entity.pendingMessages;
                mike = tango.get;
                mike = mike.bind(tango)(zulu);
                tango = null;
                if(!(tango != mike)) { _fun66826_ip = 127; continue _fun66826 }
 28:
                report = {};
                verify = report;
                options = mike;
                mike = copyDataProperties(verify, options);
                mike = global;
                tango = mike.Date;
                mike = tango.now;
                tango = mike.bind(tango)();
                mike = 'apiResponseTimestamp';
                report[mike] = tango;
                oscar = _closure1_slot16;
                tango = undefined;
                oscar = oscar.bind(tango)(report);
                if(oscar) { _fun66826_ip = 102; continue _fun66826 }
 83:
                golf = entity.pendingMessages;
                oscar = golf.set;
                oscar = oscar.bind(golf)(zulu, report);
                _fun66826_ip = 127; continue _fun66826;
 102:
                mike = _closure1_slot17;
                mike = mike.bind(tango)(report);
                mike = entity.pendingMessages;
                entity = mike.delete;
                entity = entity.bind(mike)(zulu);
 127:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'recordGatewayResponse';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            _fun66827: for(var _fun66827_ip = 0; ; ) switch(_fun66827_ip) {
 0:
                zulu = argFoo;
                entity = this;
                tango = entity.pendingMessages;
                mike = tango.get;
                mike = mike.bind(tango)(zulu);
                tango = null;
                if(!(tango != mike)) { _fun66827_ip = 127; continue _fun66827 }
 28:
                report = {};
                verify = report;
                options = mike;
                mike = copyDataProperties(verify, options);
                mike = global;
                tango = mike.Date;
                mike = tango.now;
                tango = mike.bind(tango)();
                mike = 'gatewaySeenTimestamp';
                report[mike] = tango;
                oscar = _closure1_slot16;
                tango = undefined;
                oscar = oscar.bind(tango)(report);
                if(oscar) { _fun66827_ip = 102; continue _fun66827 }
 83:
                golf = entity.pendingMessages;
                oscar = golf.set;
                oscar = oscar.bind(golf)(zulu, report);
                _fun66827_ip = 127; continue _fun66827;
 102:
                mike = _closure1_slot17;
                mike = mike.bind(tango)(report);
                mike = entity.pendingMessages;
                entity = mike.delete;
                entity = entity.bind(mike)(zulu);
 127:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = oscar;
        entity[2] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    verify = mike.bind(entity)(options);
    mike = 14;
    mike = oscar[mike];
    romeo = golf.bind(entity)(mike);
    mike = {};
    golf = function(argFoo) { // Original name: handleMessageCreate
        _fun66828: for(var _fun66828_ip = 0; ; ) switch(_fun66828_ip) {
 0:
            mike = argFoo;
            entity = mike.optimistic;
            mike = mike.message;
            zulu = mike.nonce;
            if(entity) { _fun66828_ip = 29; continue _fun66828 }
 23:
            mike = null;
            entity = mike == zulu;
 29:
            if(entity) { _fun66828_ip = 52; continue _fun66828 }
 32:
            mike = _closure1_slot13;
            entity = mike.recordGatewayResponse;
            entity = entity.bind(mike)(zulu);
 52:
            entity = undefined;
            return entity;
        }
    };
    mike['MESSAGE_CREATE'] = golf;
    golf = verify.prototype;
    golf = Object.create(golf, {constructor: {value: verify}});
    foxtrot = golf;
    yankee = mike;
    mike = new foxtrot[verify](romeo, yankee, offset);
    mike = mike instanceof Object ? mike : golf;
    var _closure1_slot13 = mike;
    tango = 15;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/messages/MessageRoundtripTrackerStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();