// app/modules/voice_calls/native/AudioSessionModeManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            oscard = argBaz;
            michal = _closure1_slot5;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot4;
            entity = _closure1_slot20;
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
            report = _closure1_slot5;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 92:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot19 = entity;
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
            _closure1_slot20 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    entity = function() { // Original name: handleAVAudioSessionMode
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = _closure1_slot11;
            zuuluu = tangon.getChannel;
            report = _closure1_slot13;
            michal = report.getVoiceChannelId;
            michal = michal.bind(report)();
            michal = zuuluu.bind(tangon)(michal);
            report = null;
            if(!(report != michal)) { _fun00006_ip = 235; continue _fun00005 }
 40:
            tangon = _closure1_slot9;
            zuuluu = tangon.getAllActiveStreams;
            zuuluu = zuuluu.bind(tangon)();
            tangon = zuuluu.length;
            zuuluu = 0;
            tangon = tangon > zuuluu;
            if(tangon) { _fun00006_ip = 88; continue _fun00005 }
 68:
            golfie = _closure1_slot14;
            oscard = golfie.hasVideo;
            zuuluu = michal.id;
            tangon = oscard.bind(golfie)(zuuluu);
 88:
            if(tangon) { _fun00006_ip = 105; continue _fun00005 }
 91:
            oscard = _closure1_slot12;
            zuuluu = oscard.isVideoEnabled;
            tangon = zuuluu.bind(oscard)();
 105:
            golfie = _closure1_slot7;
            oscard = golfie.getSelfEmbeddedActivityForChannel;
            zuuluu = michal.id;
            zuuluu = oscard.bind(golfie)(zuuluu);
            zuuluu = report != zuuluu;
            if(tangon) { _fun00006_ip = 217; continue _fun00005 }
 132:
            if(zuuluu) { _fun00006_ip = 217; continue _fun00005 }
 135:
            report = _closure1_slot0;
            tangon = _closure1_slot1;
            zuuluu = 16;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            report = report.bind(zuuluu)(tangon);
            tangon = report.shouldImmediatelyRequestVoicePermissions;
            oscard = _closure1_slot10;
            zuuluu = oscard.getId;
            zuuluu = zuuluu.bind(oscard)();
            michal = michal.id;
            zuuluu = tangon.bind(report)(zuuluu, michal);
            michal = _closure1_slot17;
            michal = michal.AVAudioSessionMode;
            if(zuuluu) { _fun00006_ip = 209; continue _fun00005 }
 201:
            zuuluu = michal.LISTEN;
            _fun00006_ip = 215; continue _fun00005;
 209:
            zuuluu = michal.VOICE;
 215:
            _fun00006_ip = 233; continue _fun00005;
 217:
            michal = _closure1_slot17;
            michal = michal.AVAudioSessionMode;
            zuuluu = michal.VIDEO;
 233:
            _fun00006_ip = 251; continue _fun00005;
 235:
            michal = _closure1_slot17;
            michal = michal.AVAudioSessionMode;
            zuuluu = michal.DEFAULT;
 251:
            michal = _closure1_slot18;
            michal = michal !== zuuluu;
            if(!michal) { _fun00006_ip = 290; continue _fun00005 }
 262:
            report = _closure1_slot15;
            tangon = report.getState;
            report = tangon.bind(report)();
            tangon = _closure1_slot16;
            tangon = tangon.ACTIVE;
            michal = report === tangon;
 290:
            if(!michal) { _fun00006_ip = 314; continue _fun00005 }
 293:
            _closure1_slot18 = zuuluu;
            michal = _closure1_slot17;
            entity = michal.setAVAudioSessionMode;
            entity = entity.bind(michal)(zuuluu);
 314:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot21 = entity;
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
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.NativeModules;
    option = 6;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot7 = option;
    option = 7;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot8 = option;
    option = 8;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot9 = option;
    option = 9;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot10 = option;
    option = 10;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot11 = option;
    option = 11;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot12 = option;
    option = 12;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot13 = option;
    option = 13;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot14 = option;
    option = 14;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot15 = option;
    option = 15;
    option = oscard[option];
    option = report.bind(entity)(option);
    option = option.AppStates;
    var _closure1_slot16 = option;
    tangon = tangon.VoiceEngine;
    var _closure1_slot17 = tangon;
    tangon = tangon.AVAudioSessionMode;
    tangon = tangon.VOICE;
    var _closure1_slot18 = tangon;
    tangon = 17;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    michal = function(argFoo) {
        zuuluu = function(argFoo) { // Original name: AudioSessionModeManager
            oscard = this;
            yankee = 0;
            golfie = copyRestArgs(yankee);
            entity = _closure1_slot3;
            report = _closure2_slot0;
            tangon = undefined;
            entity = entity.bind(tangon)(oscard, report);
            zuuluu = _closure1_slot19;
            entity = new Array(0);
            yankee = entity;
            offset = golfie;
            verify = 0;
            golfie = arraySpread(yankee, offset, verify);
            entity = zuuluu.bind(tangon)(oscard, report, entity);
            zuuluu = global;
            zuuluu = zuuluu.Map;
            tangon = zuuluu.prototype;
            tangon = Object.create(tangon, {constructor: {value: zuuluu}});
            romeon = tangon;
            zuuluu = new romeon[zuuluu](yankee);
            oscard = zuuluu instanceof Object ? zuuluu : tangon;
            tangon = oscard.set;
            zuuluu = _closure1_slot9;
            report = _closure1_slot21;
            oscard = tangon.bind(oscard)(zuuluu, report);
            tangon = oscard.set;
            zuuluu = _closure1_slot14;
            oscard = tangon.bind(oscard)(zuuluu, report);
            tangon = oscard.set;
            zuuluu = _closure1_slot12;
            oscard = tangon.bind(oscard)(zuuluu, report);
            tangon = oscard.set;
            zuuluu = _closure1_slot8;
            tangon = tangon.bind(oscard)(zuuluu, report);
            zuuluu = tangon.set;
            michal = _closure1_slot7;
            michal = zuuluu.bind(tangon)(michal, report);
            entity['stores'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        report = _closure1_slot6;
        michal = undefined;
        tangon = argFoo;
        tangon = report.bind(michal)(zuuluu, tangon);
        entity = _closure1_slot2;
        entity = entity.bind(michal)(zuuluu);
        return entity;
    };
    michal = michal.bind(entity)(tangon);
    tangon = michal.prototype;
    tangon = Object.create(tangon, {constructor: {value: michal}});
    foxtra = tangon;
    michal = new foxtra[michal](romeon);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 18;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/voice_calls/native/AudioSessionModeManager.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();