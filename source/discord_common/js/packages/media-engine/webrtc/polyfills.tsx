// discord_common/js/packages/media-engine/webrtc/polyfills.tsx
export default (function(argFoo, argBar, argBaz, _, __, ___, argPlu) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        zuuluu = argBar;
        michal = argPlu;
        entity = global;
        oscard = entity.window;
        tangon = entity.window;
        report = tangon.AudioContext;
        tangon = null;
        if(!(tangon == report)) { _fun00002_ip = 44; continue _fun00001 }
 32:
        golfie = entity.window;
        report = golfie.webkitAudioContext;
 44:
        oscard['AudioContext'] = report;
        entity = entity.window;
        entity = entity.RTCPeerConnection;
        if(!(tangon != entity)) { _fun00002_ip = 153; continue _fun00001 }
 66:
        entity = 0;
        report = michal[entity];
        entity = argBaz;
        tangon = undefined;
        entity = entity.bind(tangon)(report);
        report = entity.name;
        entity = 'Chrome';
        if(!(entity === report)) { _fun00002_ip = 153; continue _fun00001 }
 97:
        entity = 1;
        entity = michal[entity];
        tangon = zuuluu.bind(tangon)(entity);
        entity = tangon.platformVersion;
        tangon = entity.bind(tangon)();
        entity = 52;
        if(!(tangon < entity)) { _fun00002_ip = 153; continue _fun00001 }
 126:
        report = ['createOffer', 'createAnswer'];
        tangon = report.forEach;
        entity = function(argFoo) {
            zuuluu = argFoo;
            michal = global;
            tangon = michal.RTCPeerConnection;
            tangon = tangon.prototype;
            tangon = tangon[zuuluu];
            var _closure2_slot0 = tangon;
            michal = michal.RTCPeerConnection;
            michal = michal.prototype;
            entity = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    option = this;
                    zuuluu = 0;
                    offset = 0;
                    michal = copyRestArgs(offset);
                    report = undefined;
                    var _closure3_slot1 = report;
                    var _closure3_slot0 = option;
                    tangon = michal.length;
                    oscard = 1;
                    if(!(!(tangon < oscard))) { _fun00004_ip = 79; continue _fun00003 }
 35:
                    tangon = michal.length;
                    if(!(oscard === tangon)) { _fun00004_ip = 59; continue _fun00003 }
 44:
                    tangon = michal[zuuluu];
                    golfie = 'object';
                    tangon = typeof tangon;
                    if(!(golfie !== tangon)) { _fun00004_ip = 79; continue _fun00003 }
 59:
                    golfie = _closure2_slot0;
                    tangon = golfie.apply;
                    tangon = tangon.bind(golfie)(option, michal);
                    return tangon;
 79:
                    tangon = michal.length;
                    report = undefined;
                    if(!(oscard === tangon)) { _fun00004_ip = 94; continue _fun00003 }
 90:
                    report = michal[zuuluu];
 94:
                    _closure3_slot1 = report;
                    michal = null;
                    if(!(michal != report)) { _fun00004_ip = 210; continue _fun00003 }
 104:
                    michal = {};
                    zuuluu = {};
                    tangon = report.offerToReceiveAudio;
                    if(tangon) { _fun00004_ip = 119; continue _fun00003 }
 117:
                    tangon = false;
 119:
                    zuuluu['OfferToReceiveAudio'] = tangon;
                    tangon = report.offerToReceiveVideo;
                    if(tangon) { _fun00004_ip = 137; continue _fun00003 }
 135:
                    tangon = false;
 137:
                    zuuluu['OfferToReceiveVideo'] = tangon;
                    michal['mandatory'] = zuuluu;
                    tangon = {};
                    zuuluu = report.voiceActivityDetection;
                    if(zuuluu) { _fun00004_ip = 162; continue _fun00003 }
 160:
                    zuuluu = false;
 162:
                    tangon['VoiceActivityDetection'] = zuuluu;
                    zuuluu = new Array(2);
                    zuuluu[0] = tangon;
                    tangon = {};
                    report = report.iceRestart;
                    if(report) { _fun00004_ip = 190; continue _fun00003 }
 188:
                    report = false;
 190:
                    tangon['IceRestart'] = report;
                    zuuluu[1] = tangon;
                    michal['optional'] = zuuluu;
                    _closure3_slot1 = michal;
 210:
                    michal = global;
                    zuuluu = michal.Promise;
                    michal = zuuluu.prototype;
                    michal = Object.create(michal, {constructor: {value: zuuluu}});
                    offset = function(argFoo, argBar) {
                        tangon = _closure2_slot0;
                        zuuluu = tangon.apply;
                        michal = _closure3_slot0;
                        entity = new Array(3);
                        oscard = argFoo;
                        entity[0] = oscard;
                        oscard = argBar;
                        entity[1] = oscard;
                        report = _closure3_slot1;
                        entity[2] = report;
                        entity = zuuluu.bind(tangon)(michal, entity);
                        return entity;
                    };
                    yankee = michal;
                    entity = new yankee[zuuluu](offset, verify);
                    entity = entity instanceof Object ? entity : michal;
                    return entity;
                }
            };
            michal[zuuluu] = entity;
            entity = undefined;
            return entity;
        };
        entity = tangon.bind(report)(entity);
 153:
        entity = 2;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.fileFinishedImporting;
        michal = '../discord_common/js/packages/media-engine/webrtc/polyfills.tsx';
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    }
})();