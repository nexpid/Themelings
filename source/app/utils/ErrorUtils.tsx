// app/utils/ErrorUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    tangon = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tangon;
    entity = function(argFoo) { // Original name: getUnderlyingIOSExceptionRecursively
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            entity = michal.userInfo;
            entity = entity.NSUnderlyingError;
            zuuluu = null;
            if(!(zuuluu != entity)) { _fun00002_ip = 51; continue _fun00001 }
 21:
            report = _closure1_slot2;
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
    var _closure1_slot2 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, oscard);
    entity = 1;
    tangon = tangon[entity];
    entity = undefined;
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'utils/ErrorUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: getUnderlyingIOSError
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            tangon = undefined;
            michal = undefined;
 7: // try_start_0
            zuuluu = _closure1_slot2;
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
    zuuluu['getUnderlyingIOSError'] = tangon;
    michal = function(argFoo) { // Original name: serializeError
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = argFoo;
            entity = global;
            michal = entity.Boolean;
            oscard = undefined;
            michal = michal.bind(oscard)(zuuluu);
            if(michal) { _fun00006_ip = 53; continue _fun00005 }
 21:
            report = entity.Error;
            michal = report.prototype;
            tangon = Object.create(michal, {constructor: {value: report}});
            option = 'unknown error';
            verify = tangon;
            michal = new verify[report](option, golfie);
            zuuluu = michal instanceof Object ? michal : tangon;
 53:
            tangon = 'object';
            michal = typeof zuuluu;
            report = zuuluu;
            if(!(tangon !== michal)) { _fun00006_ip = 104; continue _fun00005 }
 67:
            tangon = entity.Error;
            michal = entity.String;
            option = michal.bind(oscard)(zuuluu);
            zuuluu = tangon.prototype;
            zuuluu = Object.create(zuuluu, {constructor: {value: tangon}});
            verify = zuuluu;
            michal = new verify[tangon](option, golfie);
            report = michal instanceof Object ? michal : zuuluu;
 104:
            tangon = entity.window;
            michal = null;
            golfie = michal == tangon;
            zuuluu = undefined;
            if(golfie) { _fun00006_ip = 141; continue _fun00005 }
 121:
            tangon = tangon.location;
            golfie = michal == tangon;
            zuuluu = undefined;
            if(golfie) { _fun00006_ip = 141; continue _fun00005 }
 135:
            zuuluu = tangon.href;
 141:
            tangon = michal != zuuluu;
            michal = null;
            if(!tangon) { _fun00006_ip = 153; continue _fun00005 }
 150:
            michal = zuuluu;
 153:
            report['location'] = michal;
            zuuluu = entity.JSON;
            michal = zuuluu.stringify;
            tangon = _closure1_slot0;
            golfie = _closure1_slot1;
            entity = 0;
            entity = golfie[entity];
            tangon = tangon.bind(oscard)(entity);
            entity = tangon.normalizeToSize;
            entity = entity.bind(tangon)(report);
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    zuuluu['serializeError'] = michal;
    return entity;
})();