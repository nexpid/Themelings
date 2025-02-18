// app/modules/perceptual_volume/PerceptualVolumeUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    zuuluu = argFre;
    tangon = argPlu;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = tangon;
    entity = global;
    golfie = entity.Object;
    oscard = golfie.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(golfie)(zuuluu, entity, report);
    entity = 1;
    report = tangon[entity];
    tangon = argBar;
    entity = undefined;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/perceptual_volume/PerceptualVolumeUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: perceptualToAmplitude
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            zuuluu = arguments[1];
            report = undefined;
            if(!(zuuluu === report)) { _fun00002_ip = 15; continue _fun00001 }
 12:
            zuuluu = 100;
 15:
            entity = 0;
            if(!(entity !== michal)) { _fun00002_ip = 176; continue _fun00001 }
 24:
            golfie = michal / zuuluu;
            tangon = _closure1_slot0;
            michal = _closure1_slot1;
            michal = michal[entity];
            report = tangon.bind(report)(michal);
            tangon = report.getCurrentConfig;
            michal = {};
            oscard = 'perceptualToAmplitude';
            michal['location'] = oscard;
            tangon = tangon.bind(report)(michal);
            michal = 1;
            if(!(golfie < michal)) { _fun00002_ip = 86; continue _fun00001 }
 76:
            report = tangon.gamma;
            if(!(!(report >= entity))) { _fun00002_ip = 144; continue _fun00001 }
 86:
            report = golfie - michal;
            if(!(!(golfie > michal))) { _fun00002_ip = 102; continue _fun00001 }
 94:
            michal = tangon.attenuationRange;
            _fun00002_ip = 108; continue _fun00001;
 102:
            michal = tangon.boostRange;
 108:
            verify = report * michal;
            michal = global;
            option = michal.Math;
            oscard = option.pow;
            report = 10;
            michal = 20;
            michal = verify / michal;
            michal = oscard.bind(option)(report, michal);
            _fun00002_ip = 170; continue _fun00001;
 144:
            report = global;
            oscard = report.Math;
            report = oscard.pow;
            tangon = tangon.gamma;
            michal = report.bind(oscard)(golfie, tangon);
 170:
            michal = michal * zuuluu;
            return michal;
 176:
            return entity;
        }
    };
    zuuluu['perceptualToAmplitude'] = tangon;
    michal = function(argFoo) { // Original name: amplitudeToPerceptual
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            zuuluu = arguments[1];
            report = undefined;
            if(!(zuuluu === report)) { _fun00004_ip = 15; continue _fun00003 }
 12:
            zuuluu = 100;
 15:
            entity = 0;
            if(!(entity !== michal)) { _fun00004_ip = 176; continue _fun00003 }
 24:
            golfie = michal / zuuluu;
            tangon = _closure1_slot0;
            michal = _closure1_slot1;
            michal = michal[entity];
            report = tangon.bind(report)(michal);
            tangon = report.getCurrentConfig;
            michal = {};
            oscard = 'amplitudeToPerceptual';
            michal['location'] = oscard;
            tangon = tangon.bind(report)(michal);
            option = 1;
            if(!(golfie < option)) { _fun00004_ip = 86; continue _fun00003 }
 76:
            michal = tangon.gamma;
            if(!(!(michal >= entity))) { _fun00004_ip = 140; continue _fun00003 }
 86:
            michal = global;
            report = michal.Math;
            michal = report.log10;
            report = michal.bind(report)(golfie);
            michal = 20;
            report = michal * report;
            if(!(!(report > entity))) { _fun00004_ip = 124; continue _fun00003 }
 116:
            michal = tangon.attenuationRange;
            _fun00004_ip = 130; continue _fun00003;
 124:
            michal = tangon.boostRange;
 130:
            michal = report / michal;
            michal = michal + option;
            _fun00004_ip = 170; continue _fun00003;
 140:
            report = global;
            oscard = report.Math;
            report = oscard.pow;
            tangon = tangon.gamma;
            tangon = option / tangon;
            michal = report.bind(oscard)(golfie, tangon);
 170:
            michal = michal * zuuluu;
            return michal;
 176:
            return entity;
        }
    };
    zuuluu['amplitudeToPerceptual'] = michal;
    return entity;
})();