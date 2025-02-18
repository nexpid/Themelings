// app/modules/auth/getAuthenticationErrorsFromAPIError.tsx
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
    tangon = 'modules/auth/getAuthenticationErrorsFromAPIError.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: getAuthenticationErrorsFromAPIError
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            entity = {};
            michal = report.code;
            entity['error_code'] = michal;
            michal = report.errors;
            zuuluu = null;
            if(!(zuuluu == michal)) { _fun00002_ip = 63; continue _fun00001 }
 28:
            michal = report.message;
            entity['message'] = michal;
            michal = report.retryAfter;
            if(!(zuuluu != michal)) { _fun00002_ip = 61; continue _fun00001 }
 49:
            michal = report.retryAfter;
            entity['retry_after'] = michal;
 61:
            return entity;
 63:
            michal = global;
            tangon = michal.Object;
            zuuluu = tangon.keys;
            michal = report.errors;
            tangon = zuuluu.bind(tangon)(michal);
            michal = tangon.length;
            zuuluu = 0;
            michal = zuuluu < michal;
            if(!michal) { _fun00002_ip = 140; continue _fun00001 }
 101:
            oscard = tangon[zuuluu];
            michal = report.getFirstFieldErrorMessage;
            golfie = michal.bind(report)(oscard);
            michal = new Array(1);
            michal[0] = golfie;
            entity[oscard] = michal;
            zuuluu = zuuluu + 1;
            michal = tangon.length;
            if(zuuluu < michal) { _fun00002_ip = 101; continue _fun00001 }
 140:
            return entity;
        }
    };
    zuuluu['getAuthenticationErrorsFromAPIError'] = tangon;
    michal = function(argFoo) { // Original name: getAuthenticationErrorsFromV6OrEarlierAPIError
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            michal = global;
            tangon = michal.Object;
            zuuluu = tangon.keys;
            michal = entity.fields;
            michal = zuuluu.bind(tangon)(michal);
            zuuluu = michal.length;
            michal = 0;
            if(!(!(zuuluu > michal))) { _fun00004_ip = 75; continue _fun00003 }
 38:
            michal = {};
            zuuluu = entity.message;
            michal['message'] = zuuluu;
            tangon = entity.retryAfter;
            zuuluu = null;
            if(!(zuuluu != tangon)) { _fun00004_ip = 73; continue _fun00003 }
 61:
            zuuluu = entity.retryAfter;
            michal['retry_after'] = zuuluu;
 73:
            return michal;
 75:
            entity = entity.fields;
            return entity;
        }
    };
    zuuluu['getAuthenticationErrorsFromV6OrEarlierAPIError'] = michal;
    return entity;
})();