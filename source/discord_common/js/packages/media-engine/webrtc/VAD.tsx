// discord_common/js/packages/media-engine/webrtc/VAD.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBaz;
    zuuluu = argFre;
    report = argPlu;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = report[entity];
    entity = undefined;
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot0 = tangon;
    tangon = 1;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot1 = tangon;
    michal = function() {
        tangon = _closure1_slot1;
        zuuluu = function(argFoo, argBar, argBaz) { // Original name: VAD
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                oscard = argFoo;
                michal = arguments[3];
                verify = arguments[4];
                zuuluu = this;
                var _closure3_slot0 = zuuluu;
                entity = undefined;
                if(!(michal === entity)) { _fun00002_ip = 34; continue _fun00001 }
 24:
                michal = 0.1;
 34:
                if(!(verify === entity)) { _fun00002_ip = 41; continue _fun00001 }
 38:
                verify = 10;
 41:
                report = _closure1_slot0;
                tangon = _closure2_slot0;
                tangon = report.bind(entity)(zuuluu, tangon);
                option = 0;
                zuuluu['currentVolume'] = option;
                zuuluu['speakingHistoryIndex'] = option;
                zuuluu['speakingCounter'] = option;
                tangon = null;
                zuuluu['onProcess'] = tangon;
                tangon = oscard.createAnalyser;
                report = tangon.bind(oscard)();
                tangon = 512;
                report['fftSize'] = tangon;
                report['smoothingTimeConstant'] = michal;
                tangon = oscard.createMediaStreamSource;
                michal = argBar;
                tangon = tangon.bind(oscard)(michal);
                michal = tangon.connect;
                michal = michal.bind(tangon)(report);
                michal = new Array(0);
                offset = option < verify;
                oscard = false;
                if(!offset) { _fun00002_ip = 172; continue _fun00001 }
 155:
                offset = michal.push;
                offset = offset.bind(michal)(oscard);
                option = option + 1;
                if(option < verify) { _fun00002_ip = 155; continue _fun00001 }
 172:
                oscard = global;
                offset = oscard.window;
                verify = offset.setInterval;
                option = function() {
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        michal = _closure3_slot0;
                        zuuluu = michal.update;
                        zuuluu = zuuluu.bind(michal)();
                        report = michal.onProcess;
                        michal = null;
                        if(!(michal != report)) { _fun00004_ip = 57; continue _fun00003 }
 29:
                        tangon = report.call;
                        zuuluu = _closure3_slot0;
                        michal = zuuluu.speaking;
                        entity = zuuluu.currentVolume;
                        entity = tangon.bind(report)(zuuluu, michal, entity);
 57:
                        entity = undefined;
                        return entity;
                    }
                };
                golfie = 20;
                golfie = verify.bind(offset)(option, golfie);
                option = argBaz;
                zuuluu['threshold'] = option;
                zuuluu['analyser'] = report;
                zuuluu['interval'] = golfie;
                golfie = oscard.Float32Array;
                romeon = report.fftSize;
                oscard = golfie.prototype;
                oscard = Object.create(oscard, {constructor: {value: golfie}});
                foxtra = oscard;
                report = new foxtra[golfie](romeon, yankee);
                report = report instanceof Object ? report : oscard;
                zuuluu['fftBins'] = report;
                zuuluu['source'] = tangon;
                zuuluu['speakingHistory'] = michal;
                michal = zuuluu.speakingHistory;
                michal = michal.length;
                zuuluu['silenceThreshold'] = michal;
                michal = zuuluu.silenceThreshold;
                zuuluu['silentFrames'] = michal;
                return entity;
            }
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'stop';
        entity['key'] = michal;
        michal = function() { // Original name: value
            zuuluu = this;
            michal = zuuluu.source;
            entity = michal.disconnect;
            entity = entity.bind(michal)();
            entity = global;
            tangon = entity.clearInterval;
            michal = zuuluu.interval;
            entity = undefined;
            michal = tangon.bind(entity)(michal);
            michal = 0;
            zuuluu['speakingCounter'] = michal;
            return entity;
        };
        entity['value'] = michal;
        michal = new Array(3);
        michal[0] = entity;
        entity = {};
        oscard = 'speaking';
        entity['key'] = oscard;
        oscard = function() { // Original name: get
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                michal = this;
                zuuluu = michal.speakingCounter;
                entity = 0;
                entity = zuuluu > entity;
                if(entity) { _fun00006_ip = 34; continue _fun00005 }
 18:
                zuuluu = michal.silentFrames;
                michal = michal.silenceThreshold;
                entity = zuuluu < michal;
 34:
                return entity;
            }
        };
        entity['get'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'update';
        entity['key'] = oscard;
        report = function() { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                michal = this;
                zuuluu = michal.analyser;
                golfie = michal.fftBins;
                entity = zuuluu.getFloatFrequencyData;
                entity = entity.bind(zuuluu)(golfie);
                entity = golfie.length;
                oscard = 4;
                tangon = oscard < entity;
                report = -inf;
                entity = 0;
                zuuluu = report;
                if(!tangon) { _fun00008_ip = 97; continue _fun00007 }
 56:
                tangon = golfie[oscard];
                tangon = tangon > report;
                if(!tangon) { _fun00008_ip = 75; continue _fun00007 }
 67:
                option = golfie[oscard];
                tangon = option < entity;
 75:
                if(!tangon) { _fun00008_ip = 82; continue _fun00007 }
 78:
                report = golfie[oscard];
 82:
                oscard = oscard + 1;
                tangon = golfie.length;
                zuuluu = report;
                if(oscard < tangon) { _fun00008_ip = 56; continue _fun00007 }
 97:
                michal['currentVolume'] = zuuluu;
                tangon = michal.speakingHistory;
                zuuluu = michal.speakingHistoryIndex;
                zuuluu = tangon[zuuluu];
                if(!zuuluu) { _fun00008_ip = 137; continue _fun00007 }
 122:
                zuuluu = michal.speakingCounter;
                zuuluu = zuuluu - 1;
                michal['speakingCounter'] = zuuluu;
 137:
                tangon = michal.currentVolume;
                zuuluu = michal.threshold;
                zuuluu = tangon > zuuluu;
                report = michal.speakingHistory;
                tangon = michal.speakingHistoryIndex;
                report[tangon] = zuuluu;
                if(!zuuluu) { _fun00008_ip = 187; continue _fun00007 }
 172:
                zuuluu = michal.speakingCounter;
                zuuluu = zuuluu + 1;
                michal['speakingCounter'] = zuuluu;
 187:
                zuuluu = michal.speakingHistoryIndex;
                tangon = zuuluu + 1;
                michal['speakingHistoryIndex'] = tangon;
                zuuluu = michal.speakingHistory;
                zuuluu = zuuluu.length;
                if(!(tangon === zuuluu)) { _fun00008_ip = 223; continue _fun00007 }
 217:
                michal['speakingHistoryIndex'] = entity;
 223:
                zuuluu = michal.speakingCounter;
                if(!(!(zuuluu > entity))) { _fun00008_ip = 250; continue _fun00007 }
 233:
                zuuluu = michal.silentFrames;
                zuuluu = zuuluu + 1;
                michal['silentFrames'] = zuuluu;
                _fun00008_ip = 256; continue _fun00007;
 250:
                michal['silentFrames'] = entity;
 256:
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
    michal = michal.bind(entity)();
    tangon = 2;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = '../discord_common/js/packages/media-engine/webrtc/VAD.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();