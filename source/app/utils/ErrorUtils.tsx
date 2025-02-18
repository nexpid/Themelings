// app/utils/ErrorUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    zuuluu = argFre;
    entity = function(argFoo) { // Original name: getUnderlyingIOSExceptionRecursively
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            entity = michal.userInfo;
            entity = entity.NSUnderlyingError;
            zuuluu = null;
            if(!(zuuluu != entity)) { _fun00002_ip = 51; continue _fun00001 }
 21:
            report = _closure1_slot0;
            entity = michal.userInfo;
            tangon = entity.NSUnderlyingError;
            entity = undefined;
            entity = report.bind(entity)(tangon);
            if(!(zuuluu == entity)) { _fun00002_ip = 67; continue _fun00001 }
 51:
            michal = michal.userInfo;
            michal = michal.NSLocalizedDescription;
            return michal;
 67:
            return entity;
        }
    };
    var _closure1_slot0 = entity;
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
    tangon = 'utils/ErrorUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: getUnderlyingIOSError
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            tangon = undefined;
            michal = undefined;
 7: // try_start_0
            zuuluu = _closure1_slot0;
            zuuluu = zuuluu.bind(tangon)(entity);
            michal = zuuluu;
            entity = null;
            zuuluu = entity != zuuluu;
            if(!zuuluu) { _fun00004_ip = 34; continue _fun00003 }
 31:
            entity = michal;
 34: // try_end0
            return entity;
 36: // catch_target0
            CatchBlockStart(arg_register=0);
            entity = null;
            return entity;
        }
    };
    zuuluu['getUnderlyingIOSError'] = michal;
    return entity;
})();