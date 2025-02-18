// app/modules/voice_calls/native/audio_output_selector/showAudioOutputSelector.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    tangon = tangon.NativeModules;
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.VOICE_PANEL_AUDIO_OUTPUT_ACTION_SHEET_KEY;
    var _closure1_slot4 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/voice_calls/native/audio_output_selector/showAudioOutputSelector.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: showAudioOutputSelector
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 2;
            zuuluu = zuuluu[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.isAndroid;
            zuuluu = zuuluu.bind(tangon)();
            if(zuuluu) { _fun00002_ip = 67; continue _fun00001 }
 37:
            zuuluu = _closure1_slot3;
            tangon = zuuluu.AudioRoutePicker;
            zuuluu = null;
            if(!(zuuluu != tangon)) { _fun00002_ip = 155; continue _fun00001 }
 53:
            zuuluu = tangon.showAudioPicker;
            zuuluu = zuuluu.bind(tangon)();
            _fun00002_ip = 155; continue _fun00001;
 67:
            report = _closure1_slot1;
            zuuluu = _closure1_slot2;
            tangon = 3;
            tangon = zuuluu[tangon];
            oscard = report.bind(entity)(tangon);
            report = oscard.openLazy;
            golfie = _closure1_slot0;
            tangon = 5;
            tangon = zuuluu[tangon];
            golfie = golfie.bind(entity)(tangon);
            tangon = 4;
            tangon = zuuluu[tangon];
            zuuluu = zuuluu.paths;
            tangon = golfie.bind(entity)(tangon, zuuluu);
            zuuluu = _closure1_slot4;
            michal = {};
            golfie = argFoo;
            michal['channelId'] = golfie;
            golfie = argBar;
            michal['isConnectedToVoiceChannel'] = golfie;
            michal = report.bind(oscard)(tangon, zuuluu, michal);
 155:
            return entity;
        }
    };
    zuuluu['showAudioOutputSelector'] = michal;
    return entity;
})();