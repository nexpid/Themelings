// discord_common/js/packages/media-engine/webrtc/ui/Camera.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    var _closure1_slot2 = oscar;
    entity = function() { // Original name: _getStream
        report = undefined;
        entity = undefined;
        tango = _closure1_slot4;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun50938: for(var _fun50938_ip = 0; ; ) switch(_fun50938_ip) {
 0:
                    StartGenerator();
                    mike = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun50938_ip = 180; continue _fun50938 }
 13:
                    golf = mike.deviceId;
                    offset = mike.width;
                    verify = mike.height;
                    zulu = mike.disabled;
                    mike = undefined;
                    SaveGenerator(address=40);
 38:
                    return mike;
 40:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun50938_ip = 177; continue _fun50938 }
 49:
                    if(zulu) { _fun50938_ip = 172; continue _fun50938 }
 52: // try_start_0
                    options = global;
                    zulu = options.navigator;
                    report = zulu.mediaDevices;
                    tango = report.getUserMedia;
                    zulu = {};
                    oscar = false;
                    zulu['audio'] = oscar;
                    oscar = {};
                    yankee = offset;
                    offset = options.window;
                    offset = offset.devicePixelRatio;
                    offset = yankee * offset;
                    oscar['width'] = offset;
                    options = options.window;
                    options = options.devicePixelRatio;
                    options = verify * options;
                    oscar['height'] = options;
                    options = 30;
                    oscar['frameRate'] = options;
                    oscar['deviceId'] = golf;
                    zulu['video'] = oscar;
                    zulu = tango.bind(report)(zulu);
                    SaveGenerator(address=153);
 151:
                    return zulu;
 153:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tango) { _fun50938_ip = 162; continue _fun50938 }
 159: // try_end0
                    return zulu;
 162:
                    return zulu;
 165: // catch_target0
                    CatchBlockStart(arg_register=2);
                    zulu = null;
                    return zulu;
 172:
                    zulu = null;
                    return zulu;
 177:
                    return mike;
 180:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot7 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot7 = entity;
    mike = function(argFoo) { // Original name: Camera
        _fun50939: for(var _fun50939_ip = 0; ; ) switch(_fun50939_ip) {
 0:
            mike = argFoo;
            yankee = mike.deviceId;
            var _closure2_slot0 = yankee;
            golf = mike.width;
            var _closure2_slot1 = golf;
            oscar = mike.height;
            var _closure2_slot2 = oscar;
            offset = mike.disabled;
            var _closure2_slot3 = offset;
            tango = _closure1_slot5;
            zulu = tango.useState;
            options = zulu.bind(tango)();
            tango = _closure1_slot3;
            report = undefined;
            zulu = 2;
            tango = tango.bind(report)(options, zulu);
            zulu = 0;
            options = tango[zulu];
            zulu = 1;
            zulu = tango[zulu];
            var _closure2_slot4 = zulu;
            verify = _closure1_slot5;
            tango = verify.useEffect;
            zulu = new Array(4);
            zulu[0] = yankee;
            zulu[1] = golf;
            zulu[2] = oscar;
            zulu[3] = offset;
            entity = function() {
                tango = {};
                zulu = _closure2_slot0;
                tango['deviceId'] = zulu;
                zulu = _closure2_slot1;
                tango['width'] = zulu;
                zulu = _closure2_slot2;
                tango['height'] = zulu;
                mike = _closure2_slot3;
                tango['disabled'] = mike;
                zulu = function() { // Original name: getStream
                    entity = undefined;
                    tango = _closure1_slot7;
                    zulu = tango.apply;
                    entity = arguments;
                    mike = entity;
                    entity = this;
                    entity = zulu.bind(tango)(entity, mike);
                    return entity;
                };
                mike = undefined;
                tango = zulu.bind(mike)(tango);
                zulu = tango.then;
                mike = function(argFoo) {
                    _fun50942: for(var _fun50942_ip = 0; ; ) switch(_fun50942_ip) {
 0:
                        zulu = argFoo;
                        mike = null;
                        entity = mike != zulu;
                        if(!entity) { _fun50942_ip = 48; continue _fun50942 }
 12:
                        report = _closure1_slot0;
                        tango = _closure1_slot2;
                        entity = 4;
                        tango = tango[entity];
                        entity = undefined;
                        tango = report.bind(entity)(tango);
                        entity = tango.registerVideoStream;
                        mike = entity.bind(tango)(zulu);
 48:
                        tango = _closure2_slot4;
                        entity = undefined;
                        entity = tango.bind(entity)(mike);
                        entity = {};
                        entity['stream'] = zulu;
                        entity['streamId'] = mike;
                        return entity;
                    }
                };
                mike = zulu.bind(tango)(mike);
                var _closure3_slot0 = mike;
                entity = function() {
                    zulu = _closure3_slot0;
                    mike = zulu.then;
                    entity = function(argFoo) {
                        _fun50944: for(var _fun50944_ip = 0; ; ) switch(_fun50944_ip) {
 0:
                            entity = argFoo;
                            zulu = entity.stream;
                            tango = entity.streamId;
                            mike = function(argFoo) { // Original name: stopStream
                                _fun50945: for(var _fun50945_ip = 0; ; ) switch(_fun50945_ip) {
 0:
                                    mike = argFoo;
                                    entity = null;
                                    if(!(entity != mike)) { _fun50945_ip = 36; continue _fun50945 }
 9:
                                    entity = mike.getTracks;
                                    zulu = entity.bind(mike)();
                                    mike = zulu.forEach;
                                    entity = function(argFoo) {
                                        mike = argFoo;
                                        entity = mike.stop;
                                        entity = entity.bind(mike)();
                                        return entity;
                                    };
                                    entity = mike.bind(zulu)(entity);
 36:
                                    entity = undefined;
                                    return entity;
                                }
                            };
                            entity = undefined;
                            mike = mike.bind(entity)(zulu);
                            mike = null;
                            if(!(mike != tango)) { _fun50944_ip = 69; continue _fun50944 }
 35:
                            zulu = _closure1_slot0;
                            report = _closure1_slot2;
                            mike = 4;
                            mike = report[mike];
                            zulu = zulu.bind(entity)(mike);
                            mike = zulu.unregisterVideoStream;
                            mike = mike.bind(zulu)(tango);
 69:
                            return entity;
                        }
                    };
                    entity = mike.bind(zulu)(entity);
                    entity = undefined;
                    return entity;
                };
                return entity;
            };
            entity = tango.bind(verify)(entity, zulu);
            entity = null;
            if(!(entity != options)) { _fun50939_ip = 189; continue _fun50939 }
 136:
            tango = _closure1_slot6;
            zulu = _closure1_slot1;
            verify = _closure1_slot2;
            entity = 5;
            entity = verify[entity];
            zulu = zulu.bind(report)(entity);
            entity = {};
            entity['streamId'] = options;
            options = {};
            options['width'] = golf;
            options['height'] = oscar;
            entity['style'] = options;
            entity = tango.bind(report)(zulu, entity);
            _fun50939_ip = 230; continue _fun50939;
 189:
            tango = _closure1_slot6;
            zulu = {};
            mike = 'media-engine-video';
            zulu['className'] = mike;
            mike = {};
            mike['width'] = golf;
            mike['height'] = oscar;
            zulu['style'] = mike;
            mike = 'div';
            entity = tango.bind(report)(mike, zulu);
 230:
            return entity;
        }
    };
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = options.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    options = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(options);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot6 = tango;
    tango = {'disabled': false, 'width': 320, 'height': 180};
    mike['defaultProps'] = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = '../discord_common/js/packages/media-engine/webrtc/ui/Camera.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();