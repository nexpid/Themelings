// app/utils/native/TimeUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    zuuluu = argFre;
    entity = global;
    report = entity.Object;
    tangon = report.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = tangon.bind(report)(zuuluu, entity, michal);
    michal = argPlu;
    entity = 0;
    tangon = michal[entity];
    michal = argBar;
    entity = undefined;
    report = michal.bind(entity)(tangon);
    tangon = report.fileFinishedImporting;
    michal = 'utils/native/TimeUtils.tsx';
    michal = tangon.bind(report)(michal);
    michal = function(argFoo, argBar) { // Original name: getTimeFormat
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argBar;
            entity = argFoo;
            entity = entity | 0;
            michal = 60;
            option = entity % michal;
            entity = entity - option;
            report = entity / michal;
            michal = null;
            oscard = michal == zuuluu;
            tangon = undefined;
            entity = undefined;
            if(oscard) { _fun00002_ip = 43; continue _fun00001 }
 37:
            entity = zuuluu.padMinutes;
 43:
            if(!(michal != entity)) { _fun00002_ip = 50; continue _fun00001 }
 47:
            if(entity) { _fun00002_ip = 123; continue _fun00001 }
 50:
            entity = global;
            michal = entity.String;
            golfie = michal.bind(tangon)(report);
            michal = entity.String;
            verify = michal.bind(tangon)(option);
            oscard = verify.padStart;
            zuuluu = 2;
            michal = '0';
            oscard = oscard.bind(verify)(zuuluu, michal);
            entity = entity.HermesInternal;
            zuuluu = entity.concat;
            michal = '';
            entity = ':';
            entity = zuuluu.bind(michal)(golfie, entity, oscard);
            _fun00002_ip = 206; continue _fun00001;
 123:
            michal = global;
            zuuluu = michal.String;
            oscard = zuuluu.bind(tangon)(report);
            zuuluu = oscard.padStart;
            golfie = 2;
            report = '0';
            oscard = zuuluu.bind(oscard)(golfie, report);
            zuuluu = michal.String;
            tangon = zuuluu.bind(tangon)(option);
            zuuluu = tangon.padStart;
            report = zuuluu.bind(tangon)(golfie, report);
            michal = michal.HermesInternal;
            tangon = michal.concat;
            zuuluu = '';
            michal = ':';
            entity = tangon.bind(zuuluu)(oscard, michal, report);
 206:
            return entity;
        }
    };
    zuuluu['getTimeFormat'] = michal;
    return entity;
})();