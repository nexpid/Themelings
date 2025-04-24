// discord_common/js/packages/media-engine/webrtc/DesktopInput.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
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
            _closure1_slot8 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot8 = entity;
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
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.EventEmitter;
    michal = function(argFoo) {
        report = function(argFoo) { // Original name: DesktopInput
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                tangon = argFoo;
                golfie = this;
                entity = _closure1_slot3;
                oscard = _closure2_slot1;
                report = undefined;
                entity = entity.bind(report)(golfie, oscard);
                entity = _closure1_slot6;
                romeon = entity.bind(report)(oscard);
                oscard = _closure1_slot5;
                entity = _closure1_slot8;
                entity = entity.bind(report)();
                if(entity) { _fun00004_ip = 67; continue _fun00003 }
 54:
                entity = romeon.apply;
                entity = entity.bind(romeon)(golfie, report);
                _fun00004_ip = 105; continue _fun00003;
 67:
                option = global;
                yankee = option.Reflect;
                offset = yankee.construct;
                option = _closure1_slot6;
                option = option.bind(report)(golfie);
                verify = option.constructor;
                option = new Array(0);
                entity = offset.bind(yankee)(romeon, option, verify);
 105:
                entity = oscard.bind(report)(golfie, entity);
                var _closure3_slot0 = entity;
                oscard = tangon.getVideoTracks;
                golfie = oscard.bind(tangon)();
                oscard = golfie.forEach;
                zuuluu = function(argFoo) {
                    michal = function() {
                        zuuluu = _closure3_slot0;
                        michal = zuuluu.emit;
                        entity = 'desktopsourceend';
                        entity = michal.bind(zuuluu)(entity);
                        entity = undefined;
                        return entity;
                    };
                    entity = argFoo;
                    entity['onended'] = michal;
                    entity = undefined;
                    return entity;
                };
                zuuluu = oscard.bind(golfie)(zuuluu);
                zuuluu = tangon.getVideoTracks;
                oscard = zuuluu.bind(tangon)();
                zuuluu = 0;
                zuuluu = oscard[zuuluu];
                zuuluu = zuuluu.label;
                entity['id'] = zuuluu;
                entity['stream'] = tangon;
                zuuluu = _closure1_slot0;
                oscard = _closure1_slot1;
                michal = 6;
                michal = oscard[michal];
                zuuluu = zuuluu.bind(report)(michal);
                michal = zuuluu.registerVideoStream;
                michal = michal.bind(zuuluu)(tangon);
                entity['streamId'] = michal;
                return entity;
            }
        };
        var _closure2_slot1 = report;
        zuuluu = _closure1_slot7;
        tangon = undefined;
        michal = argFoo;
        michal = zuuluu.bind(tangon)(report, michal);
        zuuluu = _closure1_slot4;
        oscard = {};
        michal = 'destroy';
        oscard['key'] = michal;
        michal = function() { // Original name: value
            michal = this;
            entity = michal.removeAllListeners;
            entity = entity.bind(michal)();
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            entity = 6;
            zuuluu = zuuluu[entity];
            entity = undefined;
            report = tangon.bind(entity)(zuuluu);
            tangon = report.unregisterVideoStream;
            zuuluu = michal.streamId;
            zuuluu = tangon.bind(report)(zuuluu);
            zuuluu = michal.stream;
            michal = zuuluu.getTracks;
            tangon = michal.bind(zuuluu)();
            zuuluu = tangon.forEach;
            michal = function(argFoo) {
                michal = argFoo;
                entity = michal.stop;
                entity = entity.bind(michal)();
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        oscard['value'] = michal;
        michal = new Array(4);
        michal[0] = oscard;
        oscard = {};
        option = 'reset';
        oscard['key'] = option;
        option = function() { // Original name: value
            michal = this;
            entity = michal.refreshSpeaking;
            entity = entity.bind(michal)();
            entity = undefined;
            return entity;
        };
        oscard['value'] = option;
        michal[1] = oscard;
        oscard = {};
        option = 'getStreamId';
        oscard['key'] = option;
        option = function() { // Original name: value
            entity = this;
            entity = entity.streamId;
            return entity;
        };
        oscard['value'] = option;
        michal[2] = oscard;
        oscard = {};
        option = 'refreshSpeaking';
        oscard['key'] = option;
        option = function() { // Original name: value
            tangon = this;
            zuuluu = tangon.emit;
            michal = tangon.stream;
            entity = michal.getAudioTracks;
            report = entity.bind(michal)();
            michal = report.some;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.enabled;
                return entity;
            };
            michal = michal.bind(report)(entity);
            entity = 'speaking';
            entity = zuuluu.bind(tangon)(entity, michal);
            entity = undefined;
            return entity;
        };
        oscard['value'] = option;
        michal[3] = oscard;
        oscard = {};
        option = 'get';
        oscard['key'] = option;
        option = _closure1_slot2;
        golfie = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    StartGenerator();
                    michal = argBar;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00006_ip = 202; continue _fun00005 }
 13:
                    report = {};
                    if(!michal) { _fun00006_ip = 32; continue _fun00005 }
 18:
                    michal = {'echoCancellation': false, 'noiseSuppression': false, 'autoGainControl': false};
 32:
                    report['audio'] = michal;
                    michal = {};
                    option = argFoo;
                    verify = michal;
                    zuuluu = copyDataProperties(verify, option);
                    tangon = 30;
                    zuuluu = 'frameRate';
                    michal[zuuluu] = tangon;
                    report['video'] = michal;
                    michal = global;
                    zuuluu = michal.navigator;
                    oscard = zuuluu.mediaDevices;
                    tangon = null;
                    golfie = tangon == oscard;
                    zuuluu = undefined;
                    if(golfie) { _fun00006_ip = 97; continue _fun00005 }
 91:
                    zuuluu = oscard.getDisplayMedia;
 97:
                    if(!(tangon == zuuluu)) { _fun00006_ip = 133; continue _fun00005 }
 101:
                    oscard = michal.Error;
                    zuuluu = oscard.prototype;
                    tangon = Object.create(zuuluu, {constructor: {value: oscard}});
                    verify = 'UNKNOWN';
                    offset = tangon;
                    zuuluu = new offset[oscard](verify, option);
                    zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
                    throw zuuluu;
 133:
                    zuuluu = _closure2_slot1;
                    michal = michal.navigator;
                    tangon = michal.mediaDevices;
                    michal = tangon.getDisplayMedia;
                    michal = michal.bind(tangon)(report);
                    SaveGenerator(address=167);
 165:
                    return michal;
 167:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00006_ip = 199; continue _fun00005 }
 173:
                    tangon = zuuluu.prototype;
                    tangon = Object.create(tangon, {constructor: {value: zuuluu}});
                    offset = tangon;
                    verify = michal;
                    zuuluu = new offset[zuuluu](verify, option);
                    zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
                    return zuuluu;
 199:
                    return michal;
 202:
                    return entity;
                }
            };
            return entity;
        };
        golfie = option.bind(tangon)(golfie);
        var _closure2_slot0 = golfie;
        entity = function() { // Original name: get
            entity = undefined;
            tangon = _closure2_slot0;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        oscard['value'] = entity;
        entity = new Array(1);
        entity[0] = oscard;
        entity = zuuluu.bind(tangon)(report, michal, entity);
        return entity;
    };
    michal = michal.bind(entity)(tangon);
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = '../discord_common/js/packages/media-engine/webrtc/DesktopInput.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();