// app/hooks/useMountEffect.tsx
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
    tangon = 'hooks/useMountEffect.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: useMountEffect
        tangon = _closure1_slot0;
        zuuluu = tangon.useRef;
        michal = argFoo;
        michal = zuuluu.bind(tangon)(michal);
        var _closure2_slot0 = michal;
        zuuluu = tangon.useEffect;
        michal = function() {
            michal = _closure2_slot0;
            entity = michal.current;
            entity = entity.bind(michal)();
            return entity;
        };
        entity = new Array(0);
        entity = zuuluu.bind(tangon)(michal, entity);
        entity = undefined;
        return entity;
    };
    zuuluu['default'] = tangon;
    tangon = function(argFoo) { // Original name: useMountLayoutEffect
        tangon = _closure1_slot0;
        zuuluu = tangon.useRef;
        michal = argFoo;
        michal = zuuluu.bind(tangon)(michal);
        var _closure2_slot0 = michal;
        zuuluu = tangon.useLayoutEffect;
        michal = function() {
            michal = _closure2_slot0;
            entity = michal.current;
            entity = entity.bind(michal)();
            return entity;
        };
        entity = new Array(0);
        entity = zuuluu.bind(tangon)(michal, entity);
        entity = undefined;
        return entity;
    };
    zuuluu['useMountLayoutEffect'] = tangon;
    michal = function(argFoo) { // Original name: useUnmountEffect
        zuuluu = argFoo;
        var _closure2_slot0 = zuuluu;
        tangon = _closure1_slot0;
        michal = tangon.useRef;
        michal = michal.bind(tangon)(zuuluu);
        var _closure2_slot1 = michal;
        zuuluu = tangon.useEffect;
        michal = function() {
            michal = _closure2_slot1;
            entity = _closure2_slot0;
            michal['current'] = entity;
            entity = undefined;
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        zuuluu = tangon.useEffect;
        michal = function() {
            entity = function() {
                michal = _closure2_slot1;
                entity = michal.current;
                entity = entity.bind(michal)();
                entity = undefined;
                return entity;
            };
            return entity;
        };
        entity = new Array(0);
        entity = zuuluu.bind(tangon)(michal, entity);
        entity = undefined;
        return entity;
    };
    zuuluu['useUnmountEffect'] = michal;
    return entity;
})();