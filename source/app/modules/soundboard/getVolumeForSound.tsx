// app/modules/soundboard/getVolumeForSound.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
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
    golfie = oscard[entity];
    tangon = argBaz;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot2 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/soundboard/getVolumeForSound.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: getVolumeForSound
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = arguments[1];
            oscard = undefined;
            if(!(report === oscard)) { _fun00002_ip = 81; continue _fun00001 }
 9:
            michal = _closure1_slot0;
            zuuluu = _closure1_slot1;
            entity = 2;
            entity = zuuluu[entity];
            entity = michal.bind(oscard)(entity);
            michal = entity.SoundboardSettings;
            entity = michal.getSetting;
            zuuluu = entity.bind(michal)();
            entity = null;
            tangon = entity == zuuluu;
            michal = undefined;
            if(tangon) { _fun00002_ip = 65; continue _fun00001 }
 59:
            michal = zuuluu.volume;
 65:
            zuuluu = entity != michal;
            entity = 100;
            if(!zuuluu) { _fun00002_ip = 78; continue _fun00001 }
 75:
            entity = michal;
 78:
            report = entity;
 81:
            zuuluu = _closure1_slot0;
            entity = _closure1_slot1;
            tangon = 1;
            entity = entity[tangon];
            zuuluu = zuuluu.bind(oscard)(entity);
            entity = zuuluu.amplitudeToPerceptual;
            entity = entity.bind(zuuluu)(report);
            golfie = 100;
            oscard = entity / golfie;
            entity = global;
            report = entity.Math;
            zuuluu = report.min;
            option = _closure1_slot2;
            michal = option.getOutputVolume;
            michal = michal.bind(option)();
            michal = michal / golfie;
            report = zuuluu.bind(report)(michal, tangon);
            zuuluu = entity.Math;
            michal = zuuluu.min;
            entity = argFoo;
            entity = entity * oscard;
            entity = entity * report;
            entity = michal.bind(zuuluu)(entity, tangon);
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    michal = function(argFoo) { // Original name: getPerceptualSoundboardVolume
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = argFoo;
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 1;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.amplitudeToPerceptual;
            entity = null;
            oscard = entity != report;
            michal = 100;
            entity = michal;
            if(!oscard) { _fun00004_ip = 52; continue _fun00003 }
 49:
            entity = report;
 52:
            entity = zuuluu.bind(tangon)(entity);
            entity = entity / michal;
            return entity;
        }
    };
    zuuluu['getPerceptualSoundboardVolume'] = michal;
    return entity;
})();