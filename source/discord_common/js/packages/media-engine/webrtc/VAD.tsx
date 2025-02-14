// discord_common/js/packages/media-engine/webrtc/VAD.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = report[entity];
    entity = undefined;
    tango = oscar.bind(entity)(tango);
    var _closure1_slot0 = tango;
    tango = 1;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot1 = tango;
    mike = function() {
        tango = _closure1_slot1;
        zulu = function(argFoo, argBar, argBaz) { // Original name: VAD
            _fun51144: for(var _fun51144_ip = 0; ; ) switch(_fun51144_ip) {
 0:
                oscar = argFoo;
                mike = arguments[3];
                verify = arguments[4];
                zulu = this;
                var _closure3_slot0 = zulu;
                entity = undefined;
                if(!(mike === entity)) { _fun51144_ip = 34; continue _fun51144 }
 24:
                mike = 0.1;
 34:
                if(!(verify === entity)) { _fun51144_ip = 41; continue _fun51144 }
 38:
                verify = 10;
 41:
                report = _closure1_slot0;
                tango = _closure2_slot0;
                tango = report.bind(entity)(zulu, tango);
                options = 0;
                zulu['currentVolume'] = options;
                zulu['speakingHistoryIndex'] = options;
                zulu['speakingCounter'] = options;
                tango = null;
                zulu['onProcess'] = tango;
                tango = oscar.createAnalyser;
                report = tango.bind(oscar)();
                tango = 512;
                report['fftSize'] = tango;
                report['smoothingTimeConstant'] = mike;
                tango = oscar.createMediaStreamSource;
                mike = argBar;
                tango = tango.bind(oscar)(mike);
                mike = tango.connect;
                mike = mike.bind(tango)(report);
                mike = new Array(0);
                offset = options < verify;
                oscar = false;
                if(!offset) { _fun51144_ip = 176; continue _fun51144 }
 159:
                offset = mike.push;
                offset = offset.bind(mike)(oscar);
                options = options + 1;
                if(options < verify) { _fun51144_ip = 159; continue _fun51144 }
 176:
                oscar = global;
                offset = oscar.window;
                verify = offset.setInterval;
                options = function() {
                    _fun51145: for(var _fun51145_ip = 0; ; ) switch(_fun51145_ip) {
 0:
                        mike = _closure3_slot0;
                        zulu = mike.update;
                        zulu = zulu.bind(mike)();
                        report = mike.onProcess;
                        mike = null;
                        if(!(mike != report)) { _fun51145_ip = 57; continue _fun51145 }
 29:
                        tango = report.call;
                        zulu = _closure3_slot0;
                        mike = zulu.speaking;
                        entity = zulu.currentVolume;
                        entity = tango.bind(report)(zulu, mike, entity);
 57:
                        entity = undefined;
                        return entity;
                    }
                };
                golf = 20;
                golf = verify.bind(offset)(options, golf);
                options = argBaz;
                zulu['threshold'] = options;
                zulu['analyser'] = report;
                zulu['interval'] = golf;
                golf = oscar.Float32Array;
                romeo = report.fftSize;
                oscar = golf.prototype;
                oscar = Object.create(oscar, {constructor: {value: golf}});
                foxtrot = oscar;
                report = new foxtrot[golf](romeo, yankee);
                report = report instanceof Object ? report : oscar;
                zulu['fftBins'] = report;
                zulu['source'] = tango;
                zulu['speakingHistory'] = mike;
                mike = zulu.speakingHistory;
                mike = mike.length;
                zulu['silenceThreshold'] = mike;
                mike = zulu.silenceThreshold;
                zulu['silentFrames'] = mike;
                return entity;
            }
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'stop';
        entity['key'] = mike;
        mike = function() { // Original name: value
            zulu = this;
            mike = zulu.source;
            entity = mike.disconnect;
            entity = entity.bind(mike)();
            entity = global;
            tango = entity.clearInterval;
            mike = zulu.interval;
            entity = undefined;
            mike = tango.bind(entity)(mike);
            mike = 0;
            zulu['speakingCounter'] = mike;
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(3);
        mike[0] = entity;
        entity = {};
        oscar = 'speaking';
        entity['key'] = oscar;
        oscar = function() { // Original name: get
            _fun51147: for(var _fun51147_ip = 0; ; ) switch(_fun51147_ip) {
 0:
                mike = this;
                zulu = mike.speakingCounter;
                entity = 0;
                entity = zulu > entity;
                if(entity) { _fun51147_ip = 34; continue _fun51147 }
 18:
                zulu = mike.silentFrames;
                mike = mike.silenceThreshold;
                entity = zulu < mike;
 34:
                return entity;
            }
        };
        entity['get'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'update';
        entity['key'] = oscar;
        report = function() { // Original name: value
            _fun51148: for(var _fun51148_ip = 0; ; ) switch(_fun51148_ip) {
 0:
                mike = this;
                zulu = mike.analyser;
                golf = mike.fftBins;
                entity = zulu.getFloatFrequencyData;
                entity = entity.bind(zulu)(golf);
                entity = golf.length;
                oscar = 4;
                tango = oscar < entity;
                report = -inf;
                entity = 0;
                zulu = report;
                if(!tango) { _fun51148_ip = 99; continue _fun51148 }
 58:
                tango = golf[oscar];
                tango = tango > report;
                if(!tango) { _fun51148_ip = 77; continue _fun51148 }
 69:
                options = golf[oscar];
                tango = options < entity;
 77:
                if(!tango) { _fun51148_ip = 84; continue _fun51148 }
 80:
                report = golf[oscar];
 84:
                oscar = oscar + 1;
                tango = golf.length;
                zulu = report;
                if(oscar < tango) { _fun51148_ip = 58; continue _fun51148 }
 99:
                mike['currentVolume'] = zulu;
                tango = mike.speakingHistory;
                zulu = mike.speakingHistoryIndex;
                zulu = tango[zulu];
                if(!zulu) { _fun51148_ip = 139; continue _fun51148 }
 124:
                zulu = mike.speakingCounter;
                zulu = zulu - 1;
                mike['speakingCounter'] = zulu;
 139:
                tango = mike.currentVolume;
                zulu = mike.threshold;
                zulu = tango > zulu;
                report = mike.speakingHistory;
                tango = mike.speakingHistoryIndex;
                report[tango] = zulu;
                if(!zulu) { _fun51148_ip = 189; continue _fun51148 }
 174:
                zulu = mike.speakingCounter;
                zulu = zulu + 1;
                mike['speakingCounter'] = zulu;
 189:
                zulu = mike.speakingHistoryIndex;
                tango = zulu + 1;
                mike['speakingHistoryIndex'] = tango;
                zulu = mike.speakingHistory;
                zulu = zulu.length;
                if(!(tango === zulu)) { _fun51148_ip = 225; continue _fun51148 }
 219:
                mike['speakingHistoryIndex'] = entity;
 225:
                zulu = mike.speakingCounter;
                if(!(!(zulu > entity))) { _fun51148_ip = 252; continue _fun51148 }
 235:
                zulu = mike.silentFrames;
                zulu = zulu + 1;
                mike['silentFrames'] = zulu;
                _fun51148_ip = 258; continue _fun51148;
 252:
                mike['silentFrames'] = entity;
 258:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = report;
        mike[2] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = 2;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = '../discord_common/js/packages/media-engine/webrtc/VAD.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();