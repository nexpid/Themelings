// app/modules/voice_calls/native/AudioSessionModeManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot5;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot4;
            entity = _closure1_slot20;
            entity = entity.bind(zulu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot5;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
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
 72: // try_end0
            _fun00004_ip = 76; continue _fun00003;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot20 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    entity = function() { // Original name: handleAVAudioSessionMode
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tango = _closure1_slot11;
            zulu = tango.getChannel;
            report = _closure1_slot13;
            mike = report.getVoiceChannelId;
            mike = mike.bind(report)();
            mike = zulu.bind(tango)(mike);
            report = null;
            if(!(report != mike)) { _fun00006_ip = 235; continue _fun00005 }
 40:
            tango = _closure1_slot9;
            zulu = tango.getAllActiveStreams;
            zulu = zulu.bind(tango)();
            tango = zulu.length;
            zulu = 0;
            tango = tango > zulu;
            if(tango) { _fun00006_ip = 88; continue _fun00005 }
 68:
            golf = _closure1_slot14;
            oscar = golf.hasVideo;
            zulu = mike.id;
            tango = oscar.bind(golf)(zulu);
 88:
            if(tango) { _fun00006_ip = 105; continue _fun00005 }
 91:
            oscar = _closure1_slot12;
            zulu = oscar.isVideoEnabled;
            tango = zulu.bind(oscar)();
 105:
            golf = _closure1_slot7;
            oscar = golf.getSelfEmbeddedActivityForChannel;
            zulu = mike.id;
            zulu = oscar.bind(golf)(zulu);
            zulu = report != zulu;
            if(tango) { _fun00006_ip = 217; continue _fun00005 }
 132:
            if(zulu) { _fun00006_ip = 217; continue _fun00005 }
 135:
            report = _closure1_slot0;
            tango = _closure1_slot1;
            zulu = 16;
            tango = tango[zulu];
            zulu = undefined;
            report = report.bind(zulu)(tango);
            tango = report.shouldImmediatelyRequestVoicePermissions;
            oscar = _closure1_slot10;
            zulu = oscar.getId;
            zulu = zulu.bind(oscar)();
            mike = mike.id;
            zulu = tango.bind(report)(zulu, mike);
            mike = _closure1_slot17;
            mike = mike.AVAudioSessionMode;
            if(zulu) { _fun00006_ip = 209; continue _fun00005 }
 201:
            zulu = mike.LISTEN;
            _fun00006_ip = 215; continue _fun00005;
 209:
            zulu = mike.VOICE;
 215:
            _fun00006_ip = 233; continue _fun00005;
 217:
            mike = _closure1_slot17;
            mike = mike.AVAudioSessionMode;
            zulu = mike.VIDEO;
 233:
            _fun00006_ip = 251; continue _fun00005;
 235:
            mike = _closure1_slot17;
            mike = mike.AVAudioSessionMode;
            zulu = mike.DEFAULT;
 251:
            mike = _closure1_slot18;
            mike = mike !== zulu;
            if(!mike) { _fun00006_ip = 290; continue _fun00005 }
 262:
            report = _closure1_slot15;
            tango = report.getState;
            report = tango.bind(report)();
            tango = _closure1_slot16;
            tango = tango.ACTIVE;
            mike = report === tango;
 290:
            if(!mike) { _fun00006_ip = 314; continue _fun00005 }
 293:
            _closure1_slot18 = zulu;
            mike = _closure1_slot17;
            entity = mike.setAVAudioSessionMode;
            entity = entity.bind(mike)(zulu);
 314:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot21 = entity;
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
    tango = report.bind(entity)(tango);
    tango = tango.NativeModules;
    options = 6;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot7 = options;
    options = 7;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot8 = options;
    options = 8;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot9 = options;
    options = 9;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot10 = options;
    options = 10;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot11 = options;
    options = 11;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot12 = options;
    options = 12;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot13 = options;
    options = 13;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot14 = options;
    options = 14;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot15 = options;
    options = 15;
    options = oscar[options];
    options = report.bind(entity)(options);
    options = options.AppStates;
    var _closure1_slot16 = options;
    tango = tango.VoiceEngine;
    var _closure1_slot17 = tango;
    tango = tango.AVAudioSessionMode;
    tango = tango.VOICE;
    var _closure1_slot18 = tango;
    tango = 17;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    mike = function(argFoo) {
        zulu = function(argFoo) { // Original name: AudioSessionModeManager
            oscar = this;
            yankee = 0;
            golf = copyRestArgs(yankee);
            entity = _closure1_slot3;
            report = _closure2_slot0;
            tango = undefined;
            entity = entity.bind(tango)(oscar, report);
            zulu = _closure1_slot19;
            entity = new Array(0);
            yankee = entity;
            offset = golf;
            verify = 0;
            golf = arraySpread(yankee, offset, verify);
            entity = zulu.bind(tango)(oscar, report, entity);
            zulu = global;
            zulu = zulu.Map;
            tango = zulu.prototype;
            tango = Object.create(tango, {constructor: {value: zulu}});
            romeo = tango;
            zulu = new romeo[zulu](yankee);
            oscar = zulu instanceof Object ? zulu : tango;
            tango = oscar.set;
            zulu = _closure1_slot9;
            report = _closure1_slot21;
            oscar = tango.bind(oscar)(zulu, report);
            tango = oscar.set;
            zulu = _closure1_slot14;
            oscar = tango.bind(oscar)(zulu, report);
            tango = oscar.set;
            zulu = _closure1_slot12;
            oscar = tango.bind(oscar)(zulu, report);
            tango = oscar.set;
            zulu = _closure1_slot8;
            tango = tango.bind(oscar)(zulu, report);
            zulu = tango.set;
            mike = _closure1_slot7;
            mike = zulu.bind(tango)(mike, report);
            entity['stores'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        report = _closure1_slot6;
        mike = undefined;
        tango = argFoo;
        tango = report.bind(mike)(zulu, tango);
        entity = _closure1_slot2;
        entity = entity.bind(mike)(zulu);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    foxtrot = tango;
    mike = new foxtrot[mike](romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 18;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/voice_calls/native/AudioSessionModeManager.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();