// app/modules/voice_calls/CallIdleManager.tsx
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
            entity = _closure1_slot13;
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
    var _closure1_slot12 = entity;
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
            _closure1_slot13 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function() { // Original name: isIdle
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = _closure1_slot10;
            entity = michal.getCurrentClientVoiceChannelId;
            report = null;
            golfie = entity.bind(michal)(report);
            if(!(report != golfie)) { _fun00006_ip = 140; continue _fun00005 }
 24:
            michal = _closure1_slot9;
            entity = michal.getChannel;
            michal = entity.bind(michal)(golfie);
            zuuluu = report == michal;
            if(zuuluu) { _fun00006_ip = 58; continue _fun00005 }
 45:
            entity = michal.isPrivate;
            entity = entity.bind(michal)();
            zuuluu = !entity;
 58:
            entity = !zuuluu;
            if(zuuluu) { _fun00006_ip = 138; continue _fun00005 }
 64:
            michal = michal.recipients;
            michal = michal.length;
            oscard = 1;
            zuuluu = michal > oscard;
            michal = !zuuluu;
            if(zuuluu) { _fun00006_ip = 135; continue _fun00005 }
 88:
            option = _closure1_slot11;
            zuuluu = option.countVoiceStatesForChannel;
            zuuluu = zuuluu.bind(option)(golfie);
            oscard = zuuluu > oscard;
            zuuluu = !oscard;
            if(oscard) { _fun00006_ip = 132; continue _fun00005 }
 113:
            oscard = _closure1_slot8;
            tangon = oscard.getSelfEmbeddedActivityForChannel;
            tangon = tangon.bind(oscard)(golfie);
            zuuluu = report == tangon;
 132:
            michal = zuuluu;
 135:
            entity = michal;
 138:
            return entity;
 140:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function() { // Original name: disconnect
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zuuluu = _closure1_slot14;
            entity = undefined;
            zuuluu = zuuluu.bind(entity)();
            if(!zuuluu) { _fun00008_ip = 159; continue _fun00007 }
 19:
            report = _closure1_slot10;
            zuuluu = report.getCurrentClientVoiceChannelId;
            tangon = null;
            option = zuuluu.bind(report)(tangon);
            if(!(tangon != option)) { _fun00008_ip = 159; continue _fun00007 }
 40:
            zuuluu = _closure1_slot1;
            report = _closure1_slot2;
            oscard = 9;
            oscard = report[oscard];
            golfie = zuuluu.bind(entity)(oscard);
            oscard = golfie.sendBotMessage;
            verify = _closure1_slot0;
            michal = 10;
            offset = report[michal];
            offset = verify.bind(entity)(offset);
            yankee = offset.intl;
            offset = yankee.formatToPlainString;
            michal = report[michal];
            michal = verify.bind(entity)(michal);
            michal = michal.t;
            verify = michal.XYof5O;
            michal = {};
            romeon = 3;
            michal['number'] = romeon;
            michal = offset.bind(yankee)(verify, michal);
            michal = oscard.bind(golfie)(option, michal);
            michal = 11;
            michal = report[michal];
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.selectVoiceChannel;
            michal = michal.bind(zuuluu)(tangon);
 159:
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot10 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot11 = tangon;
    tangon = 13;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    michal = function(argFoo) {
        zuuluu = function(argFoo) { // Original name: CallIdleManager
            golfie = this;
            romeon = 0;
            option = copyRestArgs(romeon);
            entity = _closure1_slot4;
            oscard = _closure2_slot0;
            report = undefined;
            entity = entity.bind(report)(golfie, oscard);
            tangon = _closure1_slot12;
            entity = new Array(0);
            romeon = entity;
            yankee = option;
            offset = 0;
            option = arraySpread(romeon, yankee, offset);
            entity = tangon.bind(report)(golfie, oscard, entity);
            var _closure3_slot0 = entity;
            tangon = _closure1_slot0;
            oscard = _closure1_slot2;
            zuuluu = 12;
            zuuluu = oscard[zuuluu];
            zuuluu = tangon.bind(report)(zuuluu);
            zuuluu = zuuluu.Timeout;
            tangon = zuuluu.prototype;
            tangon = Object.create(tangon, {constructor: {value: zuuluu}});
            foxtra = tangon;
            zuuluu = new foxtra[zuuluu](romeon);
            zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
            entity['idleTimeout'] = zuuluu;
            zuuluu = function() {
                entity = _closure3_slot0;
                michal = entity.idleTimeout;
                entity = michal.stop;
                entity = entity.bind(michal)();
                entity = undefined;
                return entity;
            };
            entity['handleConnectionClosed'] = zuuluu;
            zuuluu = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zuuluu = _closure1_slot14;
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)();
                    if(!zuuluu) { _fun00010_ip = 53; continue _fun00009 }
 16:
                    zuuluu = _closure3_slot0;
                    oscard = zuuluu.idleTimeout;
                    report = oscard.start;
                    tangon = _closure1_slot15;
                    zuuluu = 180000;
                    michal = true;
                    michal = report.bind(oscard)(zuuluu, tangon, michal);
 53:
                    return entity;
                }
            };
            entity['handleEmbeddedActivityDisconnect'] = zuuluu;
            michal = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    zuuluu = _closure1_slot14;
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)();
                    tangon = _closure3_slot0;
                    oscard = tangon.idleTimeout;
                    if(zuuluu) { _fun00012_ip = 41; continue _fun00011 }
 29:
                    zuuluu = oscard.stop;
                    zuuluu = zuuluu.bind(oscard)();
                    _fun00012_ip = 65; continue _fun00011;
 41:
                    report = oscard.start;
                    tangon = _closure1_slot15;
                    zuuluu = 180000;
                    michal = false;
                    michal = report.bind(oscard)(zuuluu, tangon, michal);
 65:
                    return entity;
                }
            };
            entity['handleVoiceStateUpdates'] = michal;
            michal = {};
            zuuluu = entity.handleVoiceStateUpdates;
            michal['VOICE_STATE_UPDATES'] = zuuluu;
            zuuluu = entity.handleConnectionClosed;
            michal['CONNECTION_CLOSED'] = zuuluu;
            zuuluu = entity.handleEmbeddedActivityDisconnect;
            michal['EMBEDDED_ACTIVITY_CLOSE'] = zuuluu;
            entity['actions'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        report = _closure1_slot7;
        michal = undefined;
        tangon = argFoo;
        tangon = report.bind(michal)(zuuluu, tangon);
        entity = _closure1_slot3;
        entity = entity.bind(michal)(zuuluu);
        return entity;
    };
    michal = michal.bind(entity)(tangon);
    tangon = michal.prototype;
    tangon = Object.create(tangon, {constructor: {value: michal}});
    foxtra = tangon;
    michal = new foxtra[michal](romeon);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 14;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/voice_calls/CallIdleManager.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();