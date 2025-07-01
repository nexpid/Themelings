// app/stores/CallStore.tsx
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
    entity = function() { // Original name: callConnect
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = arguments[0];
            tangon = arguments[1];
            zuuluu = undefined;
            if(!(michal === zuuluu)) { _fun00004_ip = 14; continue _fun00003 }
 12:
            michal = false;
 14:
            if(!(tangon === zuuluu)) { _fun00004_ip = 35; continue _fun00003 }
 18:
            report = _closure1_slot9;
            entity = report.getChannelId;
            tangon = entity.bind(report)();
 35:
            oscard = _closure1_slot8;
            report = oscard.getChannel;
            golfie = report.bind(oscard)(tangon);
            oscard = null;
            if(!(oscard != golfie)) { _fun00004_ip = 91; continue _fun00003 }
 58:
            report = golfie.getGuildId;
            report = report.bind(golfie)();
            if(!(oscard == report)) { _fun00004_ip = 91; continue _fun00003 }
 72:
            if(!(oscard != tangon)) { _fun00004_ip = 91; continue _fun00003 }
 76:
            report = _closure1_slot12;
            report = report[tangon];
            if(!(oscard != report)) { _fun00004_ip = 95; continue _fun00003 }
 88:
            if(michal) { _fun00004_ip = 95; continue _fun00003 }
 91:
            michal = false;
            return michal;
 95:
            report = _closure1_slot12;
            michal = report[tangon];
            if(!(oscard == michal)) { _fun00004_ip = 125; continue _fun00003 }
 107:
            oscard = {};
            oscard['channelId'] = tangon;
            golfie = new Array(0);
            oscard['ringing'] = golfie;
            michal = oscard;
 125:
            report[tangon] = michal;
            michal = _closure1_slot1;
            report = _closure1_slot2;
            entity = 9;
            entity = report[entity];
            zuuluu = michal.bind(zuuluu)(entity);
            michal = zuuluu.dispatch;
            entity = {};
            report = 'CALL_CONNECT';
            entity['type'] = report;
            entity['channelId'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            entity = true;
            return entity;
        }
    };
    var _closure1_slot15 = entity;
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
    michal = michal.Endpoints;
    var _closure1_slot11 = michal;
    michal = {};
    var _closure1_slot12 = michal;
    michal = {};
    var _closure1_slot13 = michal;
    michal = 12;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    option = michal.Store;
    michal = function(argFoo) {
        tangon = function() { // Original name: CallStore
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                tangon = this;
                zuuluu = undefined;
                report = undefined;
                entity = _closure1_slot3;
                michal = _closure2_slot0;
                entity = entity.bind(zuuluu)(tangon, michal);
                entity = _closure1_slot6;
                verify = entity.bind(zuuluu)(michal);
                michal = _closure1_slot5;
                entity = _closure1_slot14;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00006_ip = 69; continue _fun00005 }
 51:
                golfie = verify.apply;
                report = arguments;
                entity = report;
                entity = golfie.bind(verify)(tangon, entity);
                _fun00006_ip = 105; continue _fun00005;
 69:
                golfie = global;
                option = golfie.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot6;
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
        report = _closure1_slot7;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot4;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            tangon = this;
            zuuluu = tangon.waitFor;
            michal = _closure1_slot10;
            entity = _closure1_slot9;
            entity = zuuluu.bind(tangon)(michal, entity);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(7);
        entity[0] = report;
        report = {};
        golfie = 'getCall';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            michal = _closure1_slot12;
            entity = argFoo;
            entity = michal[entity];
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'getCalls';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = global;
            zuuluu = entity.Object;
            michal = zuuluu.values;
            entity = _closure1_slot12;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'getMessageId';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                zuuluu = this;
                michal = zuuluu.getCall;
                entity = argFoo;
                michal = michal.bind(zuuluu)(entity);
                entity = null;
                zuuluu = entity != michal;
                if(!zuuluu) { _fun00008_ip = 31; continue _fun00007 }
 26:
                entity = michal.messageId;
 31:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'isCallActive';
        report['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                tangon = argBar;
                michal = _closure1_slot12;
                entity = argFoo;
                zuuluu = michal[entity];
                report = null;
                entity = report != zuuluu;
                if(!entity) { _fun00010_ip = 35; continue _fun00009 }
 26:
                michal = zuuluu.unavailable;
                entity = !michal;
 35:
                if(!entity) { _fun00010_ip = 66; continue _fun00009 }
 38:
                if(!(report == tangon)) { _fun00010_ip = 54; continue _fun00009 }
 42:
                michal = zuuluu.region;
                michal = report != michal;
                _fun00010_ip = 63; continue _fun00009;
 54:
                zuuluu = zuuluu.messageId;
                michal = zuuluu === tangon;
 63:
                entity = michal;
 66:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[4] = report;
        report = {};
        golfie = 'isCallUnavailable';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                michal = _closure1_slot12;
                entity = argFoo;
                michal = michal[entity];
                entity = null;
                entity = entity != michal;
                if(!entity) { _fun00012_ip = 29; continue _fun00011 }
 23:
                entity = michal.unavailable;
 29:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[5] = report;
        report = {};
        golfie = 'getInternalState';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            entity = {};
            zuuluu = _closure1_slot12;
            entity['calls'] = zuuluu;
            michal = _closure1_slot13;
            entity['enqueuedRings'] = michal;
            return entity;
        };
        report['value'] = oscard;
        entity[6] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    option = michal.bind(entity)(option);
    michal = 'CallStore';
    option['displayName'] = michal;
    michal = 9;
    michal = oscard[michal];
    romeon = golfie.bind(entity)(michal);
    michal = {};
    verify = function() { // Original name: handleConnectionOpen
        zuuluu = _closure1_slot15;
        michal = undefined;
        entity = true;
        entity = zuuluu.bind(michal)(entity);
        return entity;
    };
    michal['CONNECTION_OPEN'] = verify;
    verify = function() { // Original name: handleConnectionClosed
        entity = {};
        _closure1_slot12 = entity;
        entity = {};
        _closure1_slot13 = entity;
        entity = undefined;
        return entity;
    };
    michal['CONNECTION_CLOSED'] = verify;
    verify = function(argFoo) { // Original name: handleOverlayInitialize
        entity = argFoo;
        zuuluu = entity.callStoreInternalState;
        entity = {};
        tangon = zuuluu.calls;
        report = entity;
        michal = copyDataProperties(report, tangon);
        _closure1_slot12 = entity;
        entity = {};
        tangon = zuuluu.enqueuedRings;
        report = entity;
        zuuluu = copyDataProperties(report, tangon);
        _closure1_slot13 = entity;
        entity = undefined;
        return entity;
    };
    michal['OVERLAY_INITIALIZE'] = verify;
    verify = function() { // Original name: handleConnectionResumed
        zuuluu = _closure1_slot15;
        michal = undefined;
        entity = true;
        entity = zuuluu.bind(michal)(entity);
        return entity;
    };
    michal['CONNECTION_RESUMED'] = verify;
    verify = function(argFoo) { // Original name: handleChannelSelect
        entity = argFoo;
        tangon = entity.channelId;
        zuuluu = _closure1_slot15;
        michal = undefined;
        entity = false;
        entity = zuuluu.bind(michal)(entity, tangon);
        return entity;
    };
    michal['CHANNEL_SELECT'] = verify;
    verify = function(argFoo) { // Original name: handleChannelDelete
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = argFoo;
            entity = entity.channel;
            tangon = _closure1_slot13;
            zuuluu = entity.id;
            zuuluu = tangon[zuuluu];
            tangon = null;
            if(!(tangon != zuuluu)) { _fun00014_ip = 43; continue _fun00013 }
 30:
            report = _closure1_slot13;
            zuuluu = entity.id;
            zuuluu = delete report[zuuluu];
 43:
            report = _closure1_slot12;
            zuuluu = entity.id;
            zuuluu = report[zuuluu];
            if(!(tangon != zuuluu)) { _fun00014_ip = 77; continue _fun00013 }
 60:
            michal = _closure1_slot12;
            entity = entity.id;
            entity = delete michal[entity];
            entity = undefined;
            return entity;
 77:
            entity = false;
            return entity;
        }
    };
    michal['CHANNEL_DELETE'] = verify;
    verify = function(argFoo) { // Original name: handleCallCreate
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = argFoo;
            golfie = entity.channelId;
            oscard = entity.messageId;
            report = entity.region;
            zuuluu = entity.ringing;
            michal = _closure1_slot12;
            entity = {};
            entity['channelId'] = golfie;
            entity['messageId'] = oscard;
            entity['region'] = report;
            entity['ringing'] = zuuluu;
            zuuluu = false;
            entity['unavailable'] = zuuluu;
            entity['regionUpdated'] = zuuluu;
            michal[golfie] = entity;
            entity = _closure1_slot13;
            michal = entity[golfie];
            entity = null;
            if(!(entity != michal)) { _fun00016_ip = 202; continue _fun00015 }
 82:
            michal = _closure1_slot13;
            report = michal[golfie];
            michal = _closure1_slot13;
            michal = delete michal[golfie];
            zuuluu = report.indexOf;
            michal = 'all';
            zuuluu = zuuluu.bind(report)(michal);
            michal = 1;
            if(!(michal !== zuuluu)) { _fun00016_ip = 121; continue _fun00015 }
 119:
            report = null;
 121:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 10;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            zuuluu = entity.HTTP;
            michal = zuuluu.post;
            entity = {};
            oscard = _closure1_slot11;
            tangon = oscard.CALL_RING;
            tangon = tangon.bind(oscard)(golfie);
            entity['url'] = tangon;
            tangon = {};
            tangon['recipients'] = report;
            entity['body'] = tangon;
            tangon = true;
            entity['oldFormErrors'] = tangon;
            entity['rejectWithError'] = tangon;
            entity = michal.bind(zuuluu)(entity);
 202:
            entity = undefined;
            return entity;
        }
    };
    michal['CALL_CREATE'] = verify;
    verify = function(argFoo) { // Original name: handleCallUpdate
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.channelId;
            option = entity.messageId;
            golfie = entity.region;
            oscard = entity.ringing;
            michal = _closure1_slot12;
            tangon = michal[zuuluu];
            michal = null;
            report = michal != tangon;
            if(!report) { _fun00018_ip = 67; continue _fun00017 }
 45:
            michal = tangon.regionUpdated;
            if(michal) { _fun00018_ip = 64; continue _fun00017 }
 54:
            tangon = tangon.region;
            michal = tangon !== golfie;
 64:
            report = michal;
 67:
            michal = _closure1_slot12;
            entity = {};
            offset = michal[zuuluu];
            yankee = entity;
            tangon = copyDataProperties(yankee, offset);
            tangon = 'messageId';
            entity[tangon] = option;
            tangon = 'region';
            entity[tangon] = golfie;
            tangon = 'ringing';
            entity[tangon] = oscard;
            tangon = 'regionUpdated';
            entity[tangon] = report;
            michal[zuuluu] = entity;
            entity = undefined;
            return entity;
        }
    };
    michal['CALL_UPDATE'] = verify;
    verify = function(argFoo) { // Original name: handleCallDelete
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            entity = argFoo;
            michal = entity.channelId;
            golfie = entity.unavailable;
            zuuluu = _closure1_slot12;
            oscard = zuuluu[michal];
            tangon = _closure1_slot12;
            zuuluu = true;
            if(!(zuuluu === golfie)) { _fun00020_ip = 41; continue _fun00019 }
 35:
            zuuluu = null;
            if(!(zuuluu == oscard)) { _fun00020_ip = 78; continue _fun00019 }
 41:
            zuuluu = {'channelId': null, 'ringing': null, 'messageId': null, 'region': null, 'regionUpdated': false};
            zuuluu['channelId'] = michal;
            report = new Array(0);
            zuuluu['ringing'] = report;
            zuuluu['unavailable'] = golfie;
            _fun00020_ip = 102; continue _fun00019;
 78:
            report = {};
            verify = report;
            option = oscard;
            oscard = copyDataProperties(verify, option);
            oscard = 'unavailable';
            report[oscard] = golfie;
            zuuluu = report;
 102:
            tangon[michal] = zuuluu;
            zuuluu = _closure1_slot13;
            tangon = zuuluu[michal];
            zuuluu = null;
            if(!(zuuluu != tangon)) { _fun00020_ip = 128; continue _fun00019 }
 120:
            entity = _closure1_slot13;
            entity = delete entity[michal];
 128:
            entity = undefined;
            return entity;
        }
    };
    michal['CALL_DELETE'] = verify;
    verify = function(argFoo) { // Original name: handleCallEnqueueRing
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            entity = argFoo;
            tangon = entity.channelId;
            golfie = entity.recipients;
            zuuluu = _closure1_slot13;
            oscard = _closure1_slot1;
            report = _closure1_slot2;
            entity = 11;
            report = report[entity];
            entity = undefined;
            oscard = oscard.bind(entity)(report);
            report = oscard.union;
            michal = _closure1_slot13;
            michal = michal[tangon];
            option = null;
            if(!(option == michal)) { _fun00022_ip = 67; continue _fun00021 }
 63:
            michal = new Array(0);
 67:
            if(!(option == golfie)) { _fun00022_ip = 81; continue _fun00021 }
 71:
            golfie = ['all'];
 81:
            michal = report.bind(oscard)(michal, golfie);
            zuuluu[tangon] = michal;
            return entity;
        }
    };
    michal['CALL_ENQUEUE_RING'] = verify;
    tangon = function(argFoo) { // Original name: handleVoiceChannelSelect
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            entity = argFoo;
            michal = entity.channelId;
            entity = null;
            if(!(entity == michal)) { _fun00024_ip = 23; continue _fun00023 }
 14:
            entity = {};
            _closure1_slot13 = entity;
 23:
            entity = undefined;
            return entity;
        }
    };
    michal['VOICE_CHANNEL_SELECT'] = tangon;
    tangon = option.prototype;
    tangon = Object.create(tangon, {constructor: {value: option}});
    foxtra = tangon;
    yankee = michal;
    michal = new foxtra[option](romeon, yankee, offset);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 13;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'stores/CallStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();