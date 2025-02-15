// discord_common/js/packages/media-engine/webrtc/DesktopInput.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun51649: for(var _fun51649_ip = 0; ; ) switch(_fun51649_ip) {
 0:
            tango = argFoo;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot9;
            entity = entity.bind(zulu)();
            if(entity) { _fun51649_ip = 48; continue _fun51649 }
 35:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, zulu);
            _fun51649_ip = 86; continue _fun51649;
 48:
            oscar = global;
            options = oscar.Reflect;
            golf = options.construct;
            oscar = new Array(0);
            report = _closure1_slot6;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 86:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun51650: for(var _fun51650_ip = 0; ; ) switch(_fun51650_ip) {
 0:
 2: // try_start_0
            mike = global;
            zulu = mike.Boolean;
            zulu = zulu.prototype;
            tango = zulu.valueOf;
            zulu = tango.call;
            options = mike.Reflect;
            golf = options.construct;
            oscar = mike.Boolean;
            report = new Array(0);
            mike = function() {
                entity = undefined;
                return entity;
            };
            mike = golf.bind(options)(oscar, report, mike);
            mike = zulu.bind(tango)(mike);
            mike = !mike;
            var _closure2_slot0 = mike;
 70: // try_end0
            _fun51650_ip = 74; continue _fun51650;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot9 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.EventEmitter;
    mike = function(argFoo) {
        report = function(argFoo) { // Original name: DesktopInput
            tango = argFoo;
            golf = this;
            entity = _closure1_slot3;
            oscar = _closure2_slot1;
            report = undefined;
            entity = entity.bind(report)(golf, oscar);
            entity = _closure1_slot8;
            entity = entity.bind(report)(golf, oscar);
            var _closure3_slot0 = entity;
            oscar = tango.getVideoTracks;
            golf = oscar.bind(tango)();
            oscar = golf.forEach;
            zulu = function(argFoo) {
                mike = function() {
                    zulu = _closure3_slot0;
                    mike = zulu.emit;
                    entity = 'desktopsourceend';
                    entity = mike.bind(zulu)(entity);
                    entity = undefined;
                    return entity;
                };
                entity = argFoo;
                entity['onended'] = mike;
                entity = undefined;
                return entity;
            };
            zulu = oscar.bind(golf)(zulu);
            zulu = tango.getVideoTracks;
            oscar = zulu.bind(tango)();
            zulu = 0;
            zulu = oscar[zulu];
            zulu = zulu.label;
            entity['id'] = zulu;
            entity['stream'] = tango;
            zulu = _closure1_slot0;
            oscar = _closure1_slot1;
            mike = 6;
            mike = oscar[mike];
            zulu = zulu.bind(report)(mike);
            mike = zulu.registerVideoStream;
            mike = mike.bind(zulu)(tango);
            entity['streamId'] = mike;
            return entity;
        };
        var _closure2_slot1 = report;
        zulu = _closure1_slot7;
        tango = undefined;
        mike = argFoo;
        mike = zulu.bind(tango)(report, mike);
        zulu = _closure1_slot4;
        oscar = {};
        mike = 'destroy';
        oscar['key'] = mike;
        mike = function() { // Original name: value
            mike = this;
            entity = mike.removeAllListeners;
            entity = entity.bind(mike)();
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            entity = 6;
            zulu = zulu[entity];
            entity = undefined;
            report = tango.bind(entity)(zulu);
            tango = report.unregisterVideoStream;
            zulu = mike.streamId;
            zulu = tango.bind(report)(zulu);
            zulu = mike.stream;
            mike = zulu.getTracks;
            tango = mike.bind(zulu)();
            zulu = tango.forEach;
            mike = function(argFoo) {
                mike = argFoo;
                entity = mike.stop;
                entity = entity.bind(mike)();
                return entity;
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        oscar['value'] = mike;
        mike = new Array(4);
        mike[0] = oscar;
        oscar = {};
        options = 'reset';
        oscar['key'] = options;
        options = function() { // Original name: value
            mike = this;
            entity = mike.refreshSpeaking;
            entity = entity.bind(mike)();
            entity = undefined;
            return entity;
        };
        oscar['value'] = options;
        mike[1] = oscar;
        oscar = {};
        options = 'getStreamId';
        oscar['key'] = options;
        options = function() { // Original name: value
            entity = this;
            entity = entity.streamId;
            return entity;
        };
        oscar['value'] = options;
        mike[2] = oscar;
        oscar = {};
        options = 'refreshSpeaking';
        oscar['key'] = options;
        options = function() { // Original name: value
            tango = this;
            zulu = tango.emit;
            mike = tango.stream;
            entity = mike.getAudioTracks;
            report = entity.bind(mike)();
            mike = report.some;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.enabled;
                return entity;
            };
            mike = mike.bind(report)(entity);
            entity = 'speaking';
            entity = zulu.bind(tango)(entity, mike);
            entity = undefined;
            return entity;
        };
        oscar['value'] = options;
        mike[3] = oscar;
        oscar = {};
        options = 'get';
        oscar['key'] = options;
        options = _closure1_slot2;
        golf = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun51664: for(var _fun51664_ip = 0; ; ) switch(_fun51664_ip) {
 0:
                    StartGenerator();
                    mike = argBar;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun51664_ip = 198; continue _fun51664 }
 13:
                    report = {};
                    if(!mike) { _fun51664_ip = 28; continue _fun51664 }
 18:
                    mike = {'echoCancellation': false, 'noiseSuppression': false, 'autoGainControl': false};
 28:
                    report['audio'] = mike;
                    mike = {};
                    options = argFoo;
                    verify = mike;
                    zulu = copyDataProperties(verify, options);
                    tango = 30;
                    zulu = 'frameRate';
                    mike[zulu] = tango;
                    report['video'] = mike;
                    mike = global;
                    zulu = mike.navigator;
                    oscar = zulu.mediaDevices;
                    tango = null;
                    golf = tango == oscar;
                    zulu = undefined;
                    if(golf) { _fun51664_ip = 93; continue _fun51664 }
 87:
                    zulu = oscar.getDisplayMedia;
 93:
                    if(!(tango == zulu)) { _fun51664_ip = 129; continue _fun51664 }
 97:
                    oscar = mike.Error;
                    zulu = oscar.prototype;
                    tango = Object.create(zulu, {constructor: {value: oscar}});
                    verify = 'UNKNOWN';
                    offset = tango;
                    zulu = new offset[oscar](verify, options);
                    zulu = zulu instanceof Object ? zulu : tango;
                    throw zulu;
 129:
                    zulu = _closure2_slot1;
                    mike = mike.navigator;
                    tango = mike.mediaDevices;
                    mike = tango.getDisplayMedia;
                    mike = mike.bind(tango)(report);
                    SaveGenerator(address=163);
 161:
                    return mike;
 163:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun51664_ip = 195; continue _fun51664 }
 169:
                    tango = zulu.prototype;
                    tango = Object.create(tango, {constructor: {value: zulu}});
                    offset = tango;
                    verify = mike;
                    zulu = new offset[zulu](verify, options);
                    zulu = zulu instanceof Object ? zulu : tango;
                    return zulu;
 195:
                    return mike;
 198:
                    return entity;
                }
            };
            return entity;
        };
        golf = options.bind(tango)(golf);
        var _closure2_slot0 = golf;
        entity = function() { // Original name: get
            entity = undefined;
            tango = _closure2_slot0;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        oscar['value'] = entity;
        entity = new Array(1);
        entity[0] = oscar;
        entity = zulu.bind(tango)(report, mike, entity);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = 8;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = '../discord_common/js/packages/media-engine/webrtc/DesktopInput.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();