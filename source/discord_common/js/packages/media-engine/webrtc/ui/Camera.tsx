// discord_common/js/packages/media-engine/webrtc/ui/Camera.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: _getStream
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot4;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    michal = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 180; continue _fun00001 }
 13:
                    golfie = michal.deviceId;
                    offset = michal.width;
                    verify = michal.height;
                    zuuluu = michal.disabled;
                    michal = undefined;
                    SaveGenerator(address=40);
 38:
                    return michal;
 40:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 177; continue _fun00001 }
 49:
                    if(zuuluu) { _fun00002_ip = 172; continue _fun00001 }
 52: // try_start_0
                    option = global;
                    zuuluu = option.navigator;
                    report = zuuluu.mediaDevices;
                    tangon = report.getUserMedia;
                    zuuluu = {};
                    oscard = false;
                    zuuluu['audio'] = oscard;
                    oscard = {};
                    yankee = offset;
                    offset = option.window;
                    offset = offset.devicePixelRatio;
                    offset = yankee * offset;
                    oscard['width'] = offset;
                    option = option.window;
                    option = option.devicePixelRatio;
                    option = verify * option;
                    oscard['height'] = option;
                    option = 30;
                    oscard['frameRate'] = option;
                    oscard['deviceId'] = golfie;
                    zuuluu['video'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
                    SaveGenerator(address=153);
 151:
                    return zuuluu;
 153:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 162; continue _fun00001 }
 159: // try_end0
                    return zuuluu;
 162:
                    return zuuluu;
 165: // catch_target0
                    CatchBlockStart(arg_register=2);
                    zuuluu = null;
                    return zuuluu;
 172:
                    zuuluu = null;
                    return zuuluu;
 177:
                    return michal;
 180:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot7 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot7 = entity;
    michal = function(argFoo) { // Original name: Camera
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            yankee = michal.deviceId;
            var _closure2_slot0 = yankee;
            golfie = michal.width;
            var _closure2_slot1 = golfie;
            oscard = michal.height;
            var _closure2_slot2 = oscard;
            offset = michal.disabled;
            var _closure2_slot3 = offset;
            tangon = _closure1_slot5;
            zuuluu = tangon.useState;
            option = zuuluu.bind(tangon)();
            tangon = _closure1_slot3;
            report = undefined;
            zuuluu = 2;
            tangon = tangon.bind(report)(option, zuuluu);
            zuuluu = 0;
            option = tangon[zuuluu];
            zuuluu = 1;
            zuuluu = tangon[zuuluu];
            var _closure2_slot4 = zuuluu;
            verify = _closure1_slot5;
            tangon = verify.useEffect;
            zuuluu = new Array(4);
            zuuluu[0] = yankee;
            zuuluu[1] = golfie;
            zuuluu[2] = oscard;
            zuuluu[3] = offset;
            entity = function() {
                tangon = {};
                zuuluu = _closure2_slot0;
                tangon['deviceId'] = zuuluu;
                zuuluu = _closure2_slot1;
                tangon['width'] = zuuluu;
                zuuluu = _closure2_slot2;
                tangon['height'] = zuuluu;
                michal = _closure2_slot3;
                tangon['disabled'] = michal;
                zuuluu = function() { // Original name: getStream
                    entity = undefined;
                    tangon = _closure1_slot7;
                    zuuluu = tangon.apply;
                    entity = arguments;
                    michal = entity;
                    entity = this;
                    entity = zuuluu.bind(tangon)(entity, michal);
                    return entity;
                };
                michal = undefined;
                tangon = zuuluu.bind(michal)(tangon);
                zuuluu = tangon.then;
                michal = function(argFoo) {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        zuuluu = argFoo;
                        michal = null;
                        entity = michal != zuuluu;
                        if(!entity) { _fun00006_ip = 48; continue _fun00005 }
 12:
                        report = _closure1_slot0;
                        tangon = _closure1_slot2;
                        entity = 4;
                        tangon = tangon[entity];
                        entity = undefined;
                        tangon = report.bind(entity)(tangon);
                        entity = tangon.registerVideoStream;
                        michal = entity.bind(tangon)(zuuluu);
 48:
                        tangon = _closure2_slot4;
                        entity = undefined;
                        entity = tangon.bind(entity)(michal);
                        entity = {};
                        entity['stream'] = zuuluu;
                        entity['streamId'] = michal;
                        return entity;
                    }
                };
                michal = zuuluu.bind(tangon)(michal);
                var _closure3_slot0 = michal;
                entity = function() {
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.then;
                    entity = function(argFoo) {
                        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                            entity = argFoo;
                            zuuluu = entity.stream;
                            tangon = entity.streamId;
                            michal = function(argFoo) { // Original name: stopStream
                                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                                    michal = argFoo;
                                    entity = null;
                                    if(!(entity != michal)) { _fun00010_ip = 36; continue _fun00009 }
 9:
                                    entity = michal.getTracks;
                                    zuuluu = entity.bind(michal)();
                                    michal = zuuluu.forEach;
                                    entity = function(argFoo) {
                                        michal = argFoo;
                                        entity = michal.stop;
                                        entity = entity.bind(michal)();
                                        return entity;
                                    };
                                    entity = michal.bind(zuuluu)(entity);
 36:
                                    entity = undefined;
                                    return entity;
                                }
                            };
                            entity = undefined;
                            michal = michal.bind(entity)(zuuluu);
                            michal = null;
                            if(!(michal != tangon)) { _fun00008_ip = 69; continue _fun00007 }
 35:
                            zuuluu = _closure1_slot0;
                            report = _closure1_slot2;
                            michal = 4;
                            michal = report[michal];
                            zuuluu = zuuluu.bind(entity)(michal);
                            michal = zuuluu.unregisterVideoStream;
                            michal = michal.bind(zuuluu)(tangon);
 69:
                            return entity;
                        }
                    };
                    entity = michal.bind(zuuluu)(entity);
                    entity = undefined;
                    return entity;
                };
                return entity;
            };
            entity = tangon.bind(verify)(entity, zuuluu);
            entity = null;
            if(!(entity != option)) { _fun00004_ip = 189; continue _fun00003 }
 136:
            tangon = _closure1_slot6;
            zuuluu = _closure1_slot1;
            verify = _closure1_slot2;
            entity = 5;
            entity = verify[entity];
            zuuluu = zuuluu.bind(report)(entity);
            entity = {};
            entity['streamId'] = option;
            option = {};
            option['width'] = golfie;
            option['height'] = oscard;
            entity['style'] = option;
            entity = tangon.bind(report)(zuuluu, entity);
            _fun00004_ip = 230; continue _fun00003;
 189:
            tangon = _closure1_slot6;
            zuuluu = {};
            michal = 'media-engine-video';
            zuuluu['className'] = michal;
            michal = {};
            michal['width'] = golfie;
            michal['height'] = oscard;
            zuuluu['style'] = michal;
            michal = 'div';
            entity = tangon.bind(report)(michal, zuuluu);
 230:
            return entity;
        }
    };
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = option.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    option = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot6 = tangon;
    tangon = {'disabled': false, 'width': 320, 'height': 180};
    michal['defaultProps'] = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = '../discord_common/js/packages/media-engine/webrtc/ui/Camera.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();