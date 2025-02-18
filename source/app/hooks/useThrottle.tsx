// app/hooks/useThrottle.tsx
export default (function(argFoo, argBar, _, argCor, __, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    entity = global;
    option = entity.Object;
    report = option.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = report.bind(option)(zuuluu, entity, michal);
    entity = 0;
    report = golfie[entity];
    michal = argCor;
    entity = undefined;
    michal = michal.bind(entity)(report);
    var _closure1_slot2 = michal;
    michal = function(argFoo) { // Original name: throttleStateFn
        entity = argFoo;
        return entity;
    };
    var _closure1_slot3 = michal;
    michal = function(argFoo, argBar) { // Original name: useThrottledFunction
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            verify = argFoo;
            option = argBar;
            golfie = arguments[2];
            oscard = arguments[3];
            var _closure2_slot0 = verify;
            var _closure2_slot1 = option;
            offset = undefined;
            if(!(golfie === offset)) { _fun00002_ip = 32; continue _fun00001 }
 28:
            golfie = new Array(0);
 32:
            var _closure2_slot2 = oscard;
            var _closure2_slot3 = offset;
            report = _closure1_slot2;
            zuuluu = report.useRef;
            tangon = _closure1_slot0;
            yankee = _closure1_slot1;
            entity = 1;
            entity = yankee[entity];
            tangon = tangon.bind(offset)(entity);
            entity = tangon.throttle;
            entity = entity.bind(tangon)(verify, option, oscard);
            entity = zuuluu.bind(report)(entity);
            _closure2_slot3 = entity;
            tangon = report.useEffect;
            zuuluu = new Array(3);
            zuuluu[0] = verify;
            zuuluu[1] = option;
            zuuluu[2] = oscard;
            romeon = 3;
            backup = zuuluu;
            foxtra = golfie;
            oscard = arraySpread(backup, foxtra, romeon);
            michal = function() {
                michal = _closure2_slot3;
                report = _closure1_slot0;
                tangon = _closure1_slot1;
                zuuluu = 1;
                tangon = tangon[zuuluu];
                zuuluu = undefined;
                oscard = report.bind(zuuluu)(tangon);
                report = oscard.throttle;
                tangon = _closure2_slot0;
                zuuluu = _closure2_slot1;
                entity = _closure2_slot2;
                entity = report.bind(oscard)(tangon, zuuluu, entity);
                michal['current'] = entity;
                entity = function() {
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        entity = _closure2_slot3;
                        michal = entity.current;
                        entity = null;
                        if(!(entity != michal)) { _fun00004_ip = 28; continue _fun00003 }
 18:
                        entity = michal.cancel;
                        entity = entity.bind(michal)();
 28:
                        entity = undefined;
                        return entity;
                    }
                };
                return entity;
            };
            michal = tangon.bind(report)(michal, zuuluu);
            entity = entity.current;
            return entity;
        }
    };
    var _closure1_slot4 = michal;
    report = 2;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'hooks/useThrottle.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function(argFoo, argBar) {
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            tangon = argBar;
            verify = arguments[2];
            var _closure2_slot0 = entity;
            option = undefined;
            if(!(verify === option)) { _fun00006_ip = 25; continue _fun00005 }
 21:
            verify = new Array(0);
 25:
            var _closure2_slot1 = option;
            var _closure2_slot2 = option;
            golfie = _closure1_slot4;
            foxtra = _closure1_slot3;
            offset = arguments[3];
            backup = undefined;
            romeon = tangon;
            yankee = verify;
            option = backup[golfie](foxtra, romeon, yankee, offset, verify);
            _closure2_slot1 = option;
            golfie = _closure1_slot2;
            michal = golfie.useRef;
            michal = michal.bind(golfie)(entity);
            _closure2_slot2 = michal;
            oscard = golfie.useEffect;
            report = new Array(2);
            report[0] = entity;
            report[1] = option;
            zuuluu = function() {
                tangon = _closure2_slot1;
                zuuluu = _closure2_slot0;
                entity = undefined;
                zuuluu = tangon.bind(entity)(zuuluu);
                michal = _closure2_slot2;
                michal['current'] = zuuluu;
                return entity;
            };
            zuuluu = oscard.bind(golfie)(zuuluu, report);
            zuuluu = 0;
            if(!(zuuluu !== tangon)) { _fun00006_ip = 122; continue _fun00005 }
 117:
            entity = michal.current;
 122:
            return entity;
        }
    };
    zuuluu['useThrottledState'] = tangon;
    zuuluu['useThrottledFunction'] = michal;
    return entity;
})();