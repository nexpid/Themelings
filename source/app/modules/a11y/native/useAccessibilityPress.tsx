// app/modules/a11y/native/useAccessibilityPress.tsx
export default (function(argFoo, argBar, _, argCor, __, argFre, argPlu) {
    zuuluu = argFre;
    report = argPlu;
    entity = global;
    golfie = entity.Object;
    oscard = golfie.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(golfie)(zuuluu, entity, tangon);
    entity = 0;
    oscard = report[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(oscard);
    var _closure1_slot0 = tangon;
    tangon = 1;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/a11y/native/useAccessibilityPress.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: useAccessibilityPress
        michal = argFoo;
        report = argBar;
        var _closure2_slot0 = michal;
        var _closure2_slot1 = report;
        tangon = _closure1_slot0;
        zuuluu = tangon.useRef;
        zuuluu = zuuluu.bind(tangon)(michal);
        var _closure2_slot2 = zuuluu;
        oscard = tangon.useEffect;
        zuuluu = new Array(1);
        zuuluu[0] = michal;
        michal = function() {
            michal = _closure2_slot2;
            entity = _closure2_slot0;
            michal['current'] = entity;
            entity = undefined;
            return entity;
        };
        michal = oscard.bind(tangon)(michal, zuuluu);
        zuuluu = tangon.useMemo;
        michal = new Array(1);
        michal[0] = report;
        entity = function() {
            entity = {};
            michal = function(argFoo) { // Original name: onAccessibilityAction
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    entity = argFoo;
                    entity = entity.nativeEvent;
                    michal = entity.actionName;
                    entity = 'activate';
                    if(!(entity === michal)) { _fun00002_ip = 38; continue _fun00001 }
 22:
                    michal = _closure2_slot2;
                    entity = michal.current;
                    entity = entity.bind(michal)();
 38:
                    entity = undefined;
                    return entity;
                }
            };
            entity['onAccessibilityAction'] = michal;
            zuuluu = {};
            michal = 'activate';
            zuuluu['name'] = michal;
            michal = _closure2_slot1;
            zuuluu['label'] = michal;
            michal = new Array(1);
            michal[0] = zuuluu;
            entity['accessibilityActions'] = michal;
            return entity;
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();