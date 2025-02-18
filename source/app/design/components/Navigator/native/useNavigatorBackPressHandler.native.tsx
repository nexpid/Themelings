// app/design/components/Navigator/native/useNavigatorBackPressHandler.native.tsx
export default (function(argFoo, argBar, _, argCor, __, argFre, argPlu) {
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
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.BackHandler;
    var _closure1_slot3 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'design/components/Navigator/native/useNavigatorBackPressHandler.native.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useNavigatorBackPressHandler
        tangon = argFoo;
        var _closure2_slot0 = tangon;
        golfie = _closure1_slot2;
        zuuluu = golfie.useRef;
        zuuluu = zuuluu.bind(golfie)(tangon);
        var _closure2_slot1 = zuuluu;
        tangon = golfie.useLayoutEffect;
        zuuluu = function() {
            michal = _closure2_slot1;
            entity = _closure2_slot0;
            michal['current'] = entity;
            entity = undefined;
            return entity;
        };
        zuuluu = tangon.bind(golfie)(zuuluu);
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        entity = 2;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.useFocusEffect;
        oscard = golfie.useCallback;
        report = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                report = _closure1_slot0;
                tangon = _closure1_slot1;
                entity = 3;
                tangon = tangon[entity];
                entity = undefined;
                report = report.bind(entity)(tangon);
                tangon = report.isIOS;
                tangon = tangon.bind(report)();
                if(tangon) { _fun00002_ip = 78; continue _fun00001 }
 40:
                oscard = _closure1_slot3;
                report = oscard.addEventListener;
                tangon = 'hardwareBackPress';
                zuuluu = function() {
                    michal = _closure2_slot1;
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
 78:
                return entity;
            }
        };
        michal = new Array(0);
        michal = oscard.bind(golfie)(report, michal);
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['useNavigatorBackPressHandler'] = michal;
    return entity;
})();