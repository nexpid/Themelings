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
    tangon = report.bind(entity)(tangon);
    tangon = tangon.MediaEngineContextTypes;
    var _closure1_slot6 = tangon;
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
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            report = 4;
            report = golfie[report];
            report = oscard.bind(entity)(report);
            report = report.Timeout;
            oscard = report.prototype;
            oscard = Object.create(oscard, {constructor: {value: report}});
            offset = oscard;
            report = new offset[report](verify);
            report = report instanceof Object ? report : oscard;
            michal['audioRouteChangeIgnoreTimer'] = report;
            report = 300;
            michal['AUDIO_ROUTE_CHANGE_IGNORE_DURATION_MS'] = report;
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
            tangon = _closure1_slot5;
            zuuluu = tangon.addChangeListener;
            michal = michal.handleAudioRouteChange;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'nativeMuteChanged';
        entity['key'] = michal;
        michal = function(argFoo) { // Original name: value
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                tangon = this;
                report = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 5;
                zuuluu = zuuluu[entity];
                entity = undefined;
                report = report.bind(entity)(zuuluu);
                zuuluu = report.hasActiveCall;
                zuuluu = zuuluu.bind(report)();
                if(zuuluu) { _fun00004_ip = 121; continue _fun00003 }
 41:
                zuuluu = tangon.ignoreForNativeUnmute;
                if(zuuluu) { _fun00004_ip = 111; continue _fun00003 }
 50:
                zuuluu = tangon.ignoreForAudioRouteChange;
                if(zuuluu) { _fun00004_ip = 109; continue _fun00003 }
 59:
                zuuluu = true;
                tangon['needToUnmuteNative'] = zuuluu;
                report = _closure1_slot1;
                oscard = _closure1_slot2;
                zuuluu = 6;
                zuuluu = oscard[zuuluu];
                oscard = report.bind(entity)(zuuluu);
                report = oscard.toggleSelfMute;
                zuuluu = {};
                golfie = false;
                zuuluu['playSoundEffect'] = golfie;
                zuuluu = report.bind(oscard)(zuuluu);
                _fun00004_ip = 166; continue _fun00003;
 109:
                return entity;
 111:
                zuuluu = false;
                tangon['ignoreForNativeUnmute'] = zuuluu;
                return entity;
 121:
                tangon = _closure1_slot1;
                report = _closure1_slot2;
                zuuluu = 6;
                zuuluu = report[zuuluu];
                report = tangon.bind(entity)(zuuluu);
                tangon = report.setSelfMute;
                michal = _closure1_slot6;
                zuuluu = michal.DEFAULT;
                michal = argFoo;
                michal = tangon.bind(report)(zuuluu, michal);
 166:
                return entity;
            }
        };
        entity['value'] = michal;
        michal = new Array(2);
        michal[0] = entity;
        entity = {};
        oscard = 'updateNativeMute';
        entity['key'] = oscard;
        report = function() { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                report = this;
                entity = report.needToUnmuteNative;
                if(!entity) { _fun00006_ip = 121; continue _fun00005 }
 12:
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                michal = 5;
                michal = zuuluu[michal];
                zuuluu = undefined;
                tangon = tangon.bind(zuuluu)(michal);
                michal = tangon.hasActiveCall;
                michal = michal.bind(tangon)();
                if(michal) { _fun00006_ip = 121; continue _fun00005 }
 50:
                tangon = false;
                report['needToUnmuteNative'] = tangon;
                michal = true;
                report['ignoreForNativeUnmute'] = michal;
                michal = _closure1_slot0;
                report = _closure1_slot2;
                entity = 7;
                entity = report[entity];
                michal = michal.bind(zuuluu)(entity);
                entity = michal.getVoiceEngine;
                zuuluu = entity.bind(michal)();
                michal = zuuluu.setNativeMuteState;
                entity = null;
                if(!(entity != michal)) { _fun00006_ip = 121; continue _fun00005 }
 110:
                entity = michal.call;
                entity = entity.bind(michal)(zuuluu, tangon);
 121:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = report;
        michal[1] = entity;
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
    var _closure1_slot7 = tangon;
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
            zuuluu = _closure1_slot7;
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
            michal = _closure1_slot7;
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
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/calls/NativeMuteManager.native.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();