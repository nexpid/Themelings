// app/modules/messages/MessageRoundtripTrackerStore.tsx
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
            _closure1_slot14 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo) { // Original name: isCompleted
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            entity = michal.apiResponseTimestamp;
            zuuluu = null;
            entity = zuuluu != entity;
            if(!entity) { _fun00004_ip = 28; continue _fun00003 }
 18:
            michal = michal.gatewaySeenTimestamp;
            entity = zuuluu != michal;
 28:
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo) { // Original name: trackRoundtrip
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            tangon = _closure1_slot8;
            zuuluu = tangon.getBasicChannel;
            michal = entity.channelId;
            option = zuuluu.bind(tangon)(michal);
            report = null;
            if(!(report == option)) { _fun00006_ip = 87; continue _fun00005 }
 32:
            tangon = _closure1_slot12;
            zuuluu = tangon.warn;
            offset = entity.channelId;
            michal = global;
            michal = michal.HermesInternal;
            verify = michal.concat;
            golfie = 'Ignoring a messageData for channel ';
            michal = " because we can't find that channel.";
            michal = verify.bind(golfie)(offset, michal);
            michal = zuuluu.bind(tangon)(michal);
            _fun00006_ip = 423; continue _fun00005;
 87:
            michal = global;
            zuuluu = michal.Math;
            michal = zuuluu.random;
            zuuluu = michal.bind(zuuluu)();
            michal = 0.1;
            if(!(!(zuuluu > michal))) { _fun00006_ip = 423; continue _fun00005 }
 122:
            michal = entity.apiResponseTimestamp;
            michal = report == michal;
            yankee = null;
            if(michal) { _fun00006_ip = 153; continue _fun00005 }
 137:
            zuuluu = entity.apiResponseTimestamp;
            michal = entity.initialSendTimestamp;
            yankee = zuuluu - michal;
 153:
            michal = entity.gatewaySeenTimestamp;
            michal = report == michal;
            offset = null;
            if(michal) { _fun00006_ip = 184; continue _fun00005 }
 168:
            michal = entity.gatewaySeenTimestamp;
            entity = entity.initialSendTimestamp;
            offset = michal - entity;
 184:
            michal = _closure1_slot0;
            backup = _closure1_slot2;
            entity = 10;
            entity = backup[entity];
            romeon = undefined;
            michal = michal.bind(romeon)(entity);
            entity = michal.getSignalStrength;
            golfie = entity.bind(michal)();
            foxtra = _closure1_slot1;
            entity = 11;
            entity = backup[entity];
            tangon = foxtra.bind(romeon)(entity);
            zuuluu = tangon.track;
            entity = _closure1_slot11;
            michal = entity.SEND_MESSAGE_ROUNDTRIP;
            entity = {};
            verify = 12;
            verify = backup[verify];
            verify = foxtra.bind(romeon)(verify);
            kiloes = verify.bind(romeon)();
            sizing = entity;
            verify = copyDataProperties(sizing, kiloes);
            verify = 'api_latency_ms';
            entity[verify] = yankee;
            verify = 'gateway_latency_ms';
            entity[verify] = offset;
            offset = option.id;
            verify = 'channel_id';
            entity[verify] = offset;
            offset = option.type;
            verify = 'channel_type';
            entity[verify] = offset;
            offset = option.guild_id;
            verify = 'guild_id';
            entity[verify] = offset;
            offset = _closure1_slot9;
            verify = offset.getMemberCount;
            option = option.guild_id;
            verify = verify.bind(offset)(option);
            option = 'guild_size';
            entity[option] = verify;
            option = _closure1_slot10;
            oscard = option.getType;
            option = oscard.bind(option)();
            oscard = 'mobile_network_type';
            entity[oscard] = option;
            report = report != golfie;
            if(!report) { _fun00006_ip = 407; continue _fun00005 }
 397:
            oscard = {};
            oscard['mobile_signal_strength_level'] = golfie;
            report = oscard;
 407:
            sizing = entity;
            kiloes = report;
            report = copyDataProperties(sizing, kiloes);
            entity = zuuluu.bind(tangon)(michal, entity);
 423:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, michal);
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
    michal = michal.AnalyticEvents;
    var _closure1_slot11 = michal;
    michal = 9;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    verify = michal.Logger;
    michal = verify.prototype;
    option = Object.create(michal, {constructor: {value: verify}});
    romeon = 'MessageRoundtripTrackerStore';
    foxtra = option;
    michal = new foxtra[verify](romeon, yankee);
    michal = michal instanceof Object ? michal : option;
    var _closure1_slot12 = michal;
    michal = 13;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    option = michal.Store;
    michal = function(argFoo) {
        tangon = function(argFoo) { // Original name: MessageRoundtripTrackerStoreClass
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                tangon = this;
                romeon = 0;
                entity = copyRestArgs(romeon);
                golfie = _closure1_slot3;
                michal = _closure2_slot0;
                zuuluu = undefined;
                golfie = golfie.bind(zuuluu)(tangon, michal);
                verify = new Array(0);
                romeon = verify;
                yankee = entity;
                offset = 0;
                entity = arraySpread(romeon, yankee, offset);
                entity = _closure1_slot6;
                option = entity.bind(zuuluu)(michal);
                michal = _closure1_slot5;
                entity = _closure1_slot14;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00008_ip = 84; continue _fun00007 }
 71:
                entity = option.apply;
                entity = entity.bind(option)(tangon, verify);
                _fun00008_ip = 118; continue _fun00007;
 84:
                oscard = global;
                golfie = oscard.Reflect;
                oscard = golfie.construct;
                report = _closure1_slot6;
                report = report.bind(zuuluu)(tangon);
                report = report.constructor;
                entity = oscard.bind(golfie)(option, verify, report);
 118:
                entity = michal.bind(zuuluu)(tangon, entity);
                michal = global;
                michal = michal.Map;
                zuuluu = michal.prototype;
                zuuluu = Object.create(zuuluu, {constructor: {value: michal}});
                foxtra = zuuluu;
                michal = new foxtra[michal](romeon);
                michal = michal instanceof Object ? michal : zuuluu;
                entity['pendingMessages'] = michal;
                return entity;
            }
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot7;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot4;
        report = {};
        entity = 'recordMessageSendAttempt';
        report['key'] = entity;
        entity = function(argFoo, argBar) { // Original name: value
            oscard = argBar;
            zuuluu = this;
            var _closure3_slot0 = zuuluu;
            var _closure3_slot1 = oscard;
            report = {'initialSendTimestamp': null, 'apiResponseTimestamp': null, 'gatewaySeenTimestamp': null};
            entity = global;
            golfie = entity.Date;
            tangon = golfie.now;
            tangon = tangon.bind(golfie)();
            report['initialSendTimestamp'] = tangon;
            tangon = argFoo;
            report['channelId'] = tangon;
            tangon = zuuluu.pendingMessages;
            zuuluu = tangon.set;
            zuuluu = zuuluu.bind(tangon)(oscard, report);
            tangon = entity.setTimeout;
            entity = undefined;
            zuuluu = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    michal = _closure3_slot0;
                    tangon = michal.pendingMessages;
                    zuuluu = tangon.get;
                    michal = _closure3_slot1;
                    tangon = zuuluu.bind(tangon)(michal);
                    michal = null;
                    if(!(michal != tangon)) { _fun00010_ip = 71; continue _fun00009 }
 33:
                    zuuluu = _closure1_slot16;
                    michal = undefined;
                    michal = zuuluu.bind(michal)(tangon);
                    michal = _closure3_slot0;
                    zuuluu = michal.pendingMessages;
                    michal = zuuluu.delete;
                    entity = _closure3_slot1;
                    entity = michal.bind(zuuluu)(entity);
 71:
                    entity = undefined;
                    return entity;
                }
            };
            michal = 30000;
            michal = tangon.bind(entity)(zuuluu, michal);
            return entity;
        };
        report['value'] = entity;
        entity = new Array(3);
        entity[0] = report;
        report = {};
        golfie = 'recordMessageSendApiResponse';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                zuuluu = argFoo;
                entity = this;
                tangon = entity.pendingMessages;
                michal = tangon.get;
                michal = michal.bind(tangon)(zuuluu);
                tangon = null;
                if(!(tangon != michal)) { _fun00012_ip = 127; continue _fun00011 }
 28:
                report = {};
                verify = report;
                option = michal;
                michal = copyDataProperties(verify, option);
                michal = global;
                tangon = michal.Date;
                michal = tangon.now;
                tangon = michal.bind(tangon)();
                michal = 'apiResponseTimestamp';
                report[michal] = tangon;
                oscard = _closure1_slot15;
                tangon = undefined;
                oscard = oscard.bind(tangon)(report);
                if(oscard) { _fun00012_ip = 102; continue _fun00011 }
 83:
                golfie = entity.pendingMessages;
                oscard = golfie.set;
                oscard = oscard.bind(golfie)(zuuluu, report);
                _fun00012_ip = 127; continue _fun00011;
 102:
                michal = _closure1_slot16;
                michal = michal.bind(tangon)(report);
                michal = entity.pendingMessages;
                entity = michal.delete;
                entity = entity.bind(michal)(zuuluu);
 127:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'recordGatewayResponse';
        report['key'] = golfie;
        oscard = function(argFoo) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                zuuluu = argFoo;
                entity = this;
                tangon = entity.pendingMessages;
                michal = tangon.get;
                michal = michal.bind(tangon)(zuuluu);
                tangon = null;
                if(!(tangon != michal)) { _fun00014_ip = 127; continue _fun00013 }
 28:
                report = {};
                verify = report;
                option = michal;
                michal = copyDataProperties(verify, option);
                michal = global;
                tangon = michal.Date;
                michal = tangon.now;
                tangon = michal.bind(tangon)();
                michal = 'gatewaySeenTimestamp';
                report[michal] = tangon;
                oscard = _closure1_slot15;
                tangon = undefined;
                oscard = oscard.bind(tangon)(report);
                if(oscard) { _fun00014_ip = 102; continue _fun00013 }
 83:
                golfie = entity.pendingMessages;
                oscard = golfie.set;
                oscard = oscard.bind(golfie)(zuuluu, report);
                _fun00014_ip = 127; continue _fun00013;
 102:
                michal = _closure1_slot16;
                michal = michal.bind(tangon)(report);
                michal = entity.pendingMessages;
                entity = michal.delete;
                entity = entity.bind(michal)(zuuluu);
 127:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = oscard;
        entity[2] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    verify = michal.bind(entity)(option);
    michal = 14;
    michal = oscard[michal];
    romeon = golfie.bind(entity)(michal);
    michal = {};
    golfie = function(argFoo) { // Original name: handleMessageCreate
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            michal = argFoo;
            entity = michal.optimistic;
            michal = michal.message;
            zuuluu = michal.nonce;
            if(entity) { _fun00016_ip = 29; continue _fun00015 }
 23:
            michal = null;
            entity = michal == zuuluu;
 29:
            if(entity) { _fun00016_ip = 52; continue _fun00015 }
 32:
            michal = _closure1_slot13;
            entity = michal.recordGatewayResponse;
            entity = entity.bind(michal)(zuuluu);
 52:
            entity = undefined;
            return entity;
        }
    };
    michal['MESSAGE_CREATE'] = golfie;
    golfie = verify.prototype;
    golfie = Object.create(golfie, {constructor: {value: verify}});
    foxtra = golfie;
    yankee = michal;
    michal = new foxtra[verify](romeon, yankee, offset);
    michal = michal instanceof Object ? michal : golfie;
    var _closure1_slot13 = michal;
    tangon = 15;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/messages/MessageRoundtripTrackerStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();