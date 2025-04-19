// app/modules/perceptual_volume/PerceptualVolumeUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    zuuluu = argFre;
    entity = global;
    oscard = entity.Object;
    report = oscard.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscard)(zuuluu, entity, tangon);
    tangon = argPlu;
    entity = 0;
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
            entity = undefined;
            if(!(zuuluu === entity)) { _fun00002_ip = 15; continue _fun00001 }
 12:
            zuuluu = 100;
 15:
            entity = 0;
            if(!(entity !== michal)) { _fun00002_ip = 111; continue _fun00001 }
 21:
            golfie = michal / zuuluu;
            michal = 1;
            if(!(!(golfie < michal))) { _fun00002_ip = 75; continue _fun00001 }
 32:
            tangon = global;
            oscard = tangon.Math;
            report = oscard.pow;
            option = golfie - michal;
            tangon = 10;
            michal = 6;
            option = michal * option;
            michal = 20;
            michal = option / michal;
            michal = report.bind(oscard)(tangon, michal);
            _fun00002_ip = 105; continue _fun00001;
 75:
            tangon = global;
            oscard = tangon.Math;
            report = oscard.pow;
            tangon = 2.8;
            michal = report.bind(oscard)(golfie, tangon);
 105:
            michal = michal * zuuluu;
            return michal;
 111:
            return entity;
        }
    };
    zuuluu['perceptualToAmplitude'] = tangon;
    michal = function(argFoo) { // Original name: amplitudeToPerceptual
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            zuuluu = arguments[1];
            entity = undefined;
            if(!(zuuluu === entity)) { _fun00004_ip = 15; continue _fun00003 }
 12:
            zuuluu = 100;
 15:
            entity = 0;
            if(!(entity !== michal)) { _fun00004_ip = 107; continue _fun00003 }
 21:
            golfie = michal / zuuluu;
            tangon = 1;
            if(!(!(golfie < tangon))) { _fun00004_ip = 71; continue _fun00003 }
 32:
            michal = global;
            report = michal.Math;
            michal = report.log10;
            report = michal.bind(report)(golfie);
            michal = 20;
            report = michal * report;
            michal = 6;
            michal = report / michal;
            michal = michal + tangon;
            _fun00004_ip = 101; continue _fun00003;
 71:
            tangon = global;
            oscard = tangon.Math;
            report = oscard.pow;
            tangon = 0.35714285714285715;
            michal = report.bind(oscard)(golfie, tangon);
 101:
            michal = michal * zuuluu;
            return michal;
 107:
            return entity;
        }
    };
    zuuluu['amplitudeToPerceptual'] = michal;
    return entity;
})();