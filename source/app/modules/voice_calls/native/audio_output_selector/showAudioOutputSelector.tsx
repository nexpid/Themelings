// app/modules/voice_calls/native/audio_output_selector/showAudioOutputSelector.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    tango = tango.NativeModules;
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.VOICE_PANEL_AUDIO_OUTPUT_ACTION_SHEET_KEY;
    var _closure1_slot4 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/voice_calls/native/audio_output_selector/showAudioOutputSelector.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar) { // Original name: showAudioOutputSelector
        _fun103337: for(var _fun103337_ip = 0; ; ) switch(_fun103337_ip) {
 0:
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 2;
            zulu = zulu[entity];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = tango.isAndroid;
            zulu = zulu.bind(tango)();
            if(zulu) { _fun103337_ip = 67; continue _fun103337 }
 37:
            zulu = _closure1_slot3;
            tango = zulu.AudioRoutePicker;
            zulu = null;
            if(!(zulu != tango)) { _fun103337_ip = 155; continue _fun103337 }
 53:
            zulu = tango.showAudioPicker;
            zulu = zulu.bind(tango)();
            _fun103337_ip = 155; continue _fun103337;
 67:
            report = _closure1_slot1;
            zulu = _closure1_slot2;
            tango = 3;
            tango = zulu[tango];
            oscar = report.bind(entity)(tango);
            report = oscar.openLazy;
            golf = _closure1_slot0;
            tango = 5;
            tango = zulu[tango];
            golf = golf.bind(entity)(tango);
            tango = 4;
            tango = zulu[tango];
            zulu = zulu.paths;
            tango = golf.bind(entity)(tango, zulu);
            zulu = _closure1_slot4;
            mike = {};
            golf = argFoo;
            mike['channelId'] = golf;
            golf = argBar;
            mike['isConnectedToVoiceChannel'] = golf;
            mike = report.bind(oscar)(tango, zulu, mike);
 155:
            return entity;
        }
    };
    zulu['showAudioOutputSelector'] = mike;
    return entity;
})();