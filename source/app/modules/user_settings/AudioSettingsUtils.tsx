// app/modules/user_settings/AudioSettingsUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
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
    tangon = tangon.ProtoAudioSettingsContextTypes;
    var _closure1_slot2 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/user_settings/AudioSettingsUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo, argBar) { // Original name: snapVolumeToDefault
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            report = _closure1_slot0;
            michal = _closure1_slot1;
            tangon = 1;
            michal = michal[tangon];
            verify = undefined;
            michal = report.bind(verify)(michal);
            michal = michal.MediaEngineContextTypes;
            report = michal.STREAM;
            michal = argBar;
            if(!(michal !== report)) { _fun00002_ip = 81; continue _fun00001 }
 47:
            report = _closure1_slot0;
            oscard = _closure1_slot1;
            michal = 2;
            michal = oscard[michal];
            michal = report.bind(verify)(michal);
            michal = michal.AudioSettingsDefaultVolumes;
            michal = michal.USER;
            _fun00002_ip = 113; continue _fun00001;
 81:
            oscard = _closure1_slot0;
            golfie = _closure1_slot1;
            report = 2;
            report = golfie[report];
            report = oscard.bind(verify)(report);
            report = report.AudioSettingsDefaultVolumes;
            michal = report.STREAM;
 113:
            report = global;
            oscard = report.Math;
            report = oscard.abs;
            option = _closure1_slot0;
            offset = _closure1_slot1;
            zuuluu = 3;
            golfie = offset[zuuluu];
            yankee = option.bind(verify)(golfie);
            golfie = yankee.amplitudeToPerceptual;
            golfie = golfie.bind(yankee)(michal);
            zuuluu = offset[zuuluu];
            option = option.bind(verify)(zuuluu);
            zuuluu = option.amplitudeToPerceptual;
            zuuluu = zuuluu.bind(option)(entity);
            zuuluu = golfie - zuuluu;
            zuuluu = report.bind(oscard)(zuuluu);
            if(!(zuuluu < tangon)) { _fun00002_ip = 194; continue _fun00001 }
 191:
            entity = michal;
 194:
            return entity;
        }
    };
    zuuluu['snapVolumeToDefault'] = tangon;
    michal = function(argFoo) { // Original name: coerceAudioContextForProto
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = argFoo;
            report = _closure1_slot0;
            michal = _closure1_slot1;
            oscard = 1;
            zuuluu = michal[oscard];
            michal = undefined;
            zuuluu = report.bind(michal)(zuuluu);
            zuuluu = zuuluu.MediaEngineContextTypes;
            zuuluu = zuuluu.DEFAULT;
            if(!(zuuluu !== tangon)) { _fun00004_ip = 91; continue _fun00003 }
 44:
            report = _closure1_slot0;
            zuuluu = _closure1_slot1;
            zuuluu = zuuluu[oscard];
            zuuluu = report.bind(michal)(zuuluu);
            zuuluu = zuuluu.MediaEngineContextTypes;
            zuuluu = zuuluu.STREAM;
            if(!(zuuluu !== tangon)) { _fun00004_ip = 79; continue _fun00003 }
 77:
            return michal;
 79:
            michal = _closure1_slot2;
            michal = michal.STREAM;
            return michal;
 91:
            entity = _closure1_slot2;
            entity = entity.USER;
            return entity;
        }
    };
    zuuluu['coerceAudioContextForProto'] = michal;
    return entity;
})();