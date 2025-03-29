// app/modules/calls/NativeMuteManager.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
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
    tangon = report.bind(entity)(tangon);
    tangon = tangon.MediaEngineContextTypes;
    var _closure1_slot7 = tangon;
    tangon = function() {
        tangon = _closure1_slot4;
        zuuluu = function() { // Original name: NativeMuteManager
            michal = this;
            var _closure3_slot0 = michal;
            oscard = _closure1_slot3;
            report = _closure2_slot0;
            entity = undefined;
            report = oscard.bind(entity)(michal, report);
            report = false;
            michal['ignoreForNativeUnmute'] = report;
            michal['needToUnmuteNative'] = report;
            michal['ignoreForAudioRouteChange'] = report;
            golfie = _closure1_slot0;
            report = _closure1_slot2;
            oscard = 5;
            oscard = report[oscard];
            oscard = golfie.bind(entity)(oscard);
            oscard = oscard.Timeout;
            golfie = oscard.prototype;
            golfie = Object.create(golfie, {constructor: {value: oscard}});
            offset = golfie;
            oscard = new offset[oscard](verify);
            oscard = oscard instanceof Object ? oscard : golfie;
            michal['audioRouteChangeIgnoreTimer'] = oscard;
            oscard = 300;
            michal['AUDIO_ROUTE_CHANGE_IGNORE_DURATION_MS'] = oscard;
            tangon = function() {
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    michal = _closure3_slot0;
                    zuuluu = michal.audioRouteChangeIgnoreTimer;
                    michal = zuuluu.isStarted;
                    michal = michal.bind(zuuluu)();
                    if(!michal) { _fun00002_ip = 46; continue _fun00001 }
 26:
                    michal = _closure3_slot0;
                    zuuluu = michal.audioRouteChangeIgnoreTimer;
                    michal = zuuluu.stop;
                    michal = michal.bind(zuuluu)();
 46:
                    entity = _closure3_slot0;
                    michal = true;
                    entity['ignoreForAudioRouteChange'] = michal;
                    tangon = entity.audioRouteChangeIgnoreTimer;
                    zuuluu = tangon.start;
                    michal = entity.AUDIO_ROUTE_CHANGE_IGNORE_DURATION_MS;
                    entity = function() {
                        michal = _closure3_slot0;
                        entity = false;
                        michal['ignoreForAudioRouteChange'] = entity;
                        entity = undefined;
                        return entity;
                    };
                    entity = zuuluu.bind(tangon)(michal, entity);
                    entity = undefined;
                    return entity;
                }
            };
            michal['handleAudioRouteChange'] = tangon;
            golfie = _closure1_slot5;
            oscard = golfie.addChangeListener;
            tangon = michal.handleAudioRouteChange;
            tangon = oscard.bind(golfie)(tangon);
            tangon = _closure1_slot1;
            zuuluu = 6;
            zuuluu = report[zuuluu];
            report = tangon.bind(entity)(zuuluu);
            tangon = report.subscribe;
            zuuluu = michal.handleVoiceChannelSelect;
            michal = 'VOICE_CHANNEL_SELECT';
            michal = tangon.bind(report)(michal, zuuluu);
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'nativeMuteChanged';
        entity['key'] = michal;
        michal = function(argFoo) { // Original name: value
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zuuluu = this;
                tangon = _closure1_slot6;
                michal = tangon.hasActiveCallKitCall;
                michal = michal.bind(tangon)();
                if(michal) { _fun00004_ip = 109; continue _fun00003 }
 23:
                michal = zuuluu.ignoreForNativeUnmute;
                if(michal) { _fun00004_ip = 97; continue _fun00003 }
 32:
                michal = zuuluu.ignoreForAudioRouteChange;
                if(michal) { _fun00004_ip = 93; continue _fun00003 }
 41:
                michal = true;
                zuuluu['needToUnmuteNative'] = michal;
                report = _closure1_slot1;
                tangon = _closure1_slot2;
                michal = 7;
                tangon = tangon[michal];
                michal = undefined;
                report = report.bind(michal)(tangon);
                tangon = report.toggleSelfMute;
                michal = {};
                oscard = false;
                michal['playSoundEffect'] = oscard;
                michal = tangon.bind(report)(michal);
                _fun00004_ip = 159; continue _fun00003;
 93:
                michal = undefined;
                return michal;
 97:
                michal = false;
                zuuluu['ignoreForNativeUnmute'] = michal;
                michal = undefined;
                return michal;
 109:
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                michal = 7;
                zuuluu = zuuluu[michal];
                michal = undefined;
                report = tangon.bind(michal)(zuuluu);
                tangon = report.setSelfMute;
                entity = _closure1_slot7;
                zuuluu = entity.DEFAULT;
                michal = argFoo;
                entity = false;
                entity = tangon.bind(report)(zuuluu, michal, entity);
 159:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = michal;
        michal = new Array(3);
        michal[0] = entity;
        entity = {};
        oscard = 'updateNativeMute';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                zuuluu = this;
                tangon = _closure1_slot6;
                michal = tangon.hasActiveCallKitCall;
                michal = michal.bind(tangon)();
                if(michal) { _fun00006_ip = 109; continue _fun00005 }
 23:
                michal = zuuluu.needToUnmuteNative;
                if(michal) { _fun00006_ip = 36; continue _fun00005 }
 32:
                michal = undefined;
                return michal;
 36:
                report = false;
                zuuluu['needToUnmuteNative'] = report;
                michal = true;
                zuuluu['ignoreForNativeUnmute'] = michal;
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                michal = 8;
                zuuluu = zuuluu[michal];
                michal = undefined;
                zuuluu = tangon.bind(michal)(zuuluu);
                michal = zuuluu.getVoiceEngine;
                tangon = michal.bind(zuuluu)();
                zuuluu = tangon.setNativeMuteState;
                michal = null;
                if(!(michal != zuuluu)) { _fun00006_ip = 178; continue _fun00005 }
 96:
                michal = zuuluu.call;
                michal = michal.bind(zuuluu)(tangon, report);
                _fun00006_ip = 178; continue _fun00005;
 109:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                michal = 8;
                zuuluu = zuuluu[michal];
                michal = undefined;
                zuuluu = tangon.bind(michal)(zuuluu);
                michal = zuuluu.getVoiceEngine;
                tangon = michal.bind(zuuluu)();
                zuuluu = tangon.setNativeMuteState;
                michal = null;
                if(!(michal != zuuluu)) { _fun00006_ip = 178; continue _fun00005 }
 153:
                michal = zuuluu.call;
                report = _closure1_slot6;
                entity = report.isSelfMute;
                entity = entity.bind(report)();
                entity = michal.bind(zuuluu)(tangon, entity);
 178:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'handleVoiceChannelSelect';
        entity['key'] = oscard;
        report = function(argFoo) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                entity = argFoo;
                michal = entity.channelId;
                entity = null;
                if(!(entity == michal)) { _fun00008_ip = 72; continue _fun00007 }
 14:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                michal = 8;
                zuuluu = zuuluu[michal];
                michal = undefined;
                zuuluu = tangon.bind(michal)(zuuluu);
                michal = zuuluu.getVoiceEngine;
                tangon = michal.bind(zuuluu)();
                zuuluu = tangon.setNativeMuteState;
                if(!(entity != zuuluu)) { _fun00008_ip = 72; continue _fun00007 }
 59:
                michal = zuuluu.call;
                entity = false;
                entity = michal.bind(zuuluu)(tangon, entity);
 72:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = report;
        michal[2] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    tangon = tangon.bind(entity)();
    golfie = tangon.prototype;
    golfie = Object.create(golfie, {constructor: {value: tangon}});
    foxtra = golfie;
    tangon = new foxtra[tangon](romeon);
    tangon = tangon instanceof Object ? tangon : golfie;
    var _closure1_slot8 = tangon;
    michal = function() {
        tangon = _closure1_slot4;
        zuuluu = function() { // Original name: NativeMuteManagerWrapper
            tangon = _closure1_slot3;
            zuuluu = _closure2_slot0;
            entity = undefined;
            michal = this;
            michal = tangon.bind(entity)(michal, zuuluu);
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'nativeMuteChanged';
        entity['key'] = michal;
        michal = function(argFoo) { // Original name: value
            zuuluu = _closure1_slot8;
            michal = zuuluu.nativeMuteChanged;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = michal;
        michal = new Array(2);
        michal[0] = entity;
        entity = {};
        oscard = 'updateNativeMute';
        entity['key'] = oscard;
        report = function() { // Original name: value
            michal = _closure1_slot8;
            entity = michal.updateNativeMute;
            entity = entity.bind(michal)();
            entity = undefined;
            return entity;
        };
        entity['value'] = report;
        michal[1] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    tangon = michal.prototype;
    tangon = Object.create(tangon, {constructor: {value: michal}});
    foxtra = tangon;
    michal = new foxtra[michal](romeon);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 9;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/calls/NativeMuteManager.native.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();