// app/modules/routing/native/useBackPressHandler.tsx
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
    michal = 1;
    michal = golfie[michal];
    michal = oscard.bind(entity)(michal);
    report = michal.BackHandler;
    var _closure1_slot3 = report;
    michal = michal.NativeModules;
    var _closure1_slot4 = michal;
    michal = {};
    report = function() { // Original name: minimize
        entity = _closure1_slot4;
        michal = entity.MinimizeApp;
        entity = michal.minimizeApp;
        entity = entity.bind(michal)();
        entity = true;
        return entity;
    };
    michal['minimize'] = report;
    report = 3;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/routing/native/useBackPressHandler.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function(argFoo) { // Original name: useBackPressHandler
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            oscard = arguments[1];
            var _closure2_slot0 = tangon;
            entity = undefined;
            if(!(oscard === entity)) { _fun00002_ip = 20; continue _fun00001 }
 18:
            oscard = true;
 20:
            var _closure2_slot1 = oscard;
            var _closure2_slot2 = entity;
            report = _closure1_slot2;
            zuuluu = report.useRef;
            zuuluu = zuuluu.bind(report)(tangon);
            _closure2_slot2 = zuuluu;
            tangon = report.useLayoutEffect;
            zuuluu = function() {
                michal = _closure2_slot2;
                entity = _closure2_slot0;
                michal['current'] = entity;
                entity = undefined;
                return entity;
            };
            zuuluu = tangon.bind(report)(zuuluu);
            tangon = report.useEffect;
            zuuluu = new Array(1);
            zuuluu[0] = oscard;
            michal = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    report = _closure1_slot0;
                    tangon = _closure1_slot1;
                    entity = 2;
                    tangon = tangon[entity];
                    entity = undefined;
                    report = report.bind(entity)(tangon);
                    tangon = report.isIOS;
                    tangon = tangon.bind(report)();
                    if(tangon) { _fun00004_ip = 88; continue _fun00003 }
 40:
                    tangon = _closure2_slot1;
                    if(!tangon) { _fun00004_ip = 88; continue _fun00003 }
 50:
                    oscard = _closure1_slot3;
                    report = oscard.addEventListener;
                    tangon = 'hardwareBackPress';
                    zuuluu = function() {
                        michal = _closure2_slot2;
                        entity = michal.current;
                        entity = entity.bind(michal)();
                        return entity;
                    };
                    zuuluu = report.bind(oscard)(tangon, zuuluu);
                    var _closure3_slot0 = zuuluu;
                    michal = function() {
                        michal = _closure3_slot0;
                        entity = michal.remove;
                        entity = entity.bind(michal)();
                        return entity;
                    };
                    return michal;
 88:
                    return entity;
                }
            };
            michal = tangon.bind(report)(michal, zuuluu);
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    zuuluu['BackPressHandler'] = michal;
    return entity;
})();