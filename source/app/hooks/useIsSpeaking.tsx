// app/hooks/useIsSpeaking.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _checkIsSpeaking
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            zulu = argBar;
            mike = argBaz;
            if(entity) { _fun00002_ip = 15; continue _fun00001 }
 12:
            entity = zulu;
 15:
            if(entity) { _fun00002_ip = 21; continue _fun00001 }
 18:
            entity = mike;
 21:
            return entity;
        }
    };
    var _closure1_slot6 = entity;
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
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'hooks/useIsSpeaking.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: useIsSpeaking
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zulu = argFoo;
            mike = zulu.userId;
            var _closure2_slot0 = mike;
            mike = zulu.checkSoundSharing;
            report = undefined;
            if(!(mike === report)) { _fun00004_ip = 28; continue _fun00003 }
 26:
            mike = false;
 28:
            var _closure2_slot1 = mike;
            mike = zulu.checkSoundboardSounds;
            if(!(mike === report)) { _fun00004_ip = 44; continue _fun00003 }
 42:
            mike = true;
 44:
            var _closure2_slot2 = mike;
            mike = zulu.checkIsMuted;
            if(!(mike === report)) { _fun00004_ip = 60; continue _fun00003 }
 58:
            mike = false;
 60:
            zulu = zulu.context;
            var _closure2_slot3 = zulu;
            var _closure2_slot4 = report;
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            verify = 4;
            zulu = zulu[verify];
            options = tango.bind(report)(zulu);
            golf = options.useStateFromStores;
            zulu = _closure1_slot5;
            tango = new Array(2);
            tango[0] = zulu;
            zulu = _closure1_slot3;
            tango[1] = zulu;
            zulu = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zulu = _closure1_slot3;
                    entity = zulu.getVoiceChannelId;
                    report = entity.bind(zulu)();
                    entity = null;
                    zulu = entity != report;
                    if(!zulu) { _fun00006_ip = 49; continue _fun00005 }
 26:
                    tango = _closure1_slot5;
                    zulu = tango.getVoiceStateForChannel;
                    mike = _closure2_slot0;
                    entity = zulu.bind(tango)(report, mike);
 49:
                    return entity;
                }
            };
            golf = golf.bind(options)(tango, zulu);
            if(!mike) { _fun00004_ip = 176; continue _fun00003 }
 135:
            tango = null;
            options = tango == golf;
            zulu = undefined;
            if(options) { _fun00004_ip = 152; continue _fun00003 }
 146:
            zulu = golf.mute;
 152:
            if(zulu) { _fun00004_ip = 173; continue _fun00003 }
 155:
            options = tango == golf;
            tango = undefined;
            if(options) { _fun00004_ip = 170; continue _fun00003 }
 164:
            tango = golf.selfMute;
 170:
            zulu = tango;
 173:
            mike = zulu;
 176:
            _closure2_slot4 = mike;
            options = _closure1_slot0;
            golf = _closure1_slot1;
            mike = golf[verify];
            yankee = options.bind(report)(mike);
            offset = yankee.useStateFromStores;
            mike = _closure1_slot4;
            tango = new Array(1);
            tango[0] = mike;
            zulu = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    report = _closure1_slot4;
                    tango = report.isSpeaking;
                    zulu = _closure2_slot0;
                    entity = _closure2_slot3;
                    entity = tango.bind(report)(zulu, entity);
                    if(!entity) { _fun00008_ip = 40; continue _fun00007 }
 33:
                    mike = _closure2_slot4;
                    entity = !mike;
 40:
                    return entity;
                }
            };
            tango = offset.bind(yankee)(tango, zulu);
            zulu = golf[verify];
            yankee = options.bind(report)(zulu);
            offset = yankee.useStateFromStores;
            zulu = new Array(1);
            zulu[0] = mike;
            mike = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    tango = _closure1_slot4;
                    zulu = tango.isSoundSharing;
                    entity = _closure2_slot0;
                    entity = zulu.bind(tango)(entity);
                    if(!entity) { _fun00010_ip = 32; continue _fun00009 }
 28:
                    entity = _closure2_slot1;
 32:
                    return entity;
                }
            };
            zulu = offset.bind(yankee)(zulu, mike);
            mike = _closure1_slot6;
            golf = golf[verify];
            options = options.bind(report)(golf);
            golf = options.useStateFromStores;
            verify = _closure1_slot2;
            oscar = new Array(1);
            oscar[0] = verify;
            entity = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    tango = _closure1_slot2;
                    zulu = tango.isUserPlayingSounds;
                    entity = _closure2_slot0;
                    entity = zulu.bind(tango)(entity);
                    if(!entity) { _fun00012_ip = 32; continue _fun00011 }
 28:
                    entity = _closure2_slot2;
 32:
                    return entity;
                }
            };
            entity = golf.bind(options)(oscar, entity);
            entity = mike.bind(report)(tango, entity, zulu);
            return entity;
        }
    };
    zulu['default'] = tango;
    mike = function(argFoo) { // Original name: getIsSpeaking
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = argFoo;
            options = entity.userId;
            mike = entity.checkSoundSharing;
            report = undefined;
            if(!(mike === report)) { _fun00014_ip = 22; continue _fun00013 }
 20:
            mike = false;
 22:
            oscar = entity.checkSoundboardSounds;
            if(!(oscar === report)) { _fun00014_ip = 34; continue _fun00013 }
 32:
            oscar = true;
 34:
            zulu = entity.checkIsMuted;
            if(!(zulu === report)) { _fun00014_ip = 46; continue _fun00013 }
 44:
            zulu = false;
 46:
            verify = entity.context;
            golf = _closure1_slot3;
            tango = golf.getVoiceChannelId;
            romeo = tango.bind(golf)();
            golf = null;
            tango = golf != romeo;
            offset = null;
            if(!tango) { _fun00014_ip = 95; continue _fun00013 }
 79:
            yankee = _closure1_slot5;
            tango = yankee.getVoiceStateForChannel;
            offset = tango.bind(yankee)(romeo, options);
 95:
            if(!zulu) { _fun00014_ip = 137; continue _fun00013 }
 98:
            yankee = golf == offset;
            tango = undefined;
            if(yankee) { _fun00014_ip = 113; continue _fun00013 }
 107:
            tango = offset.mute;
 113:
            if(tango) { _fun00014_ip = 134; continue _fun00013 }
 116:
            yankee = golf == offset;
            golf = undefined;
            if(yankee) { _fun00014_ip = 131; continue _fun00013 }
 125:
            golf = offset.selfMute;
 131:
            tango = golf;
 134:
            zulu = tango;
 137:
            golf = _closure1_slot4;
            tango = golf.isSpeaking;
            tango = tango.bind(golf)(options, verify);
            if(!tango) { _fun00014_ip = 159; continue _fun00013 }
 156:
            tango = !zulu;
 159:
            golf = _closure1_slot4;
            zulu = golf.isSoundSharing;
            zulu = zulu.bind(golf)(options);
            if(!zulu) { _fun00014_ip = 180; continue _fun00013 }
 177:
            zulu = mike;
 180:
            mike = _closure1_slot6;
            golf = _closure1_slot2;
            entity = golf.isUserPlayingSounds;
            entity = entity.bind(golf)(options);
            if(!entity) { _fun00014_ip = 205; continue _fun00013 }
 202:
            entity = oscar;
 205:
            entity = mike.bind(report)(tango, entity, zulu);
            return entity;
        }
    };
    zulu['getIsSpeaking'] = mike;
    return entity;
})();