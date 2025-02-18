// app/modules/user_limited_access/UserLimitedAccessUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
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
    tangon = tangon.AbortCodes;
    var _closure1_slot0 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/user_limited_access/UserLimitedAccessUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: isLimitedAccessErrorCode
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            zuuluu = argBar;
            entity = 400;
            entity = tangon >= entity;
            if(!entity) { _fun00002_ip = 29; continue _fun00001 }
 19:
            michal = 500;
            entity = tangon < michal;
 29:
            if(!entity) { _fun00002_ip = 38; continue _fun00001 }
 32:
            michal = null;
            entity = michal != zuuluu;
 38:
            if(!entity) { _fun00002_ip = 58; continue _fun00001 }
 41:
            michal = _closure1_slot0;
            michal = michal.USER_LIMITED_ACCESS_DEFAULT;
            entity = zuuluu >= michal;
 58:
            if(!entity) { _fun00002_ip = 78; continue _fun00001 }
 61:
            michal = _closure1_slot0;
            michal = michal.USER_LIMITED_ACCESS_MAX;
            entity = zuuluu <= michal;
 78:
            return entity;
        }
    };
    zuuluu['isLimitedAccessErrorCode'] = michal;
    return entity;
})();