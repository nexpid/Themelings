// app/design/components/Navigator/native/useFocusRefOnNavigationTransitionEnd.tsx
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
    tangon = 'design/components/Navigator/native/useFocusRefOnNavigationTransitionEnd.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useFocusRefOnNavigationTransitionEnd
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            oscard = entity.navigation;
            var _closure2_slot0 = oscard;
            golfie = entity.inputRef;
            var _closure2_slot1 = golfie;
            option = entity.enabled;
            entity = undefined;
            if(!(option === entity)) { _fun00002_ip = 38; continue _fun00001 }
 36:
            option = true;
 38:
            var _closure2_slot2 = option;
            report = _closure1_slot0;
            tangon = report.useEffect;
            zuuluu = new Array(3);
            zuuluu[0] = option;
            zuuluu[1] = golfie;
            zuuluu[2] = oscard;
            michal = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = _closure2_slot2;
                    if(zuuluu) { _fun00004_ip = 16; continue _fun00003 }
 12:
                    zuuluu = undefined;
                    return zuuluu;
 16:
                    report = _closure2_slot0;
                    tangon = report.addListener;
                    zuuluu = 'transitionEnd';
                    michal = function() {
                        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                            entity = _closure2_slot1;
                            michal = entity.current;
                            entity = null;
                            if(!(entity != michal)) { _fun00006_ip = 28; continue _fun00005 }
 18:
                            entity = michal.focus;
                            entity = entity.bind(michal)();
 28:
                            entity = undefined;
                            return entity;
                        }
                    };
                    michal = tangon.bind(report)(zuuluu, michal);
                    var _closure3_slot0 = michal;
                    entity = function() {
                        michal = _closure3_slot0;
                        entity = undefined;
                        entity = michal.bind(entity)();
                        return entity;
                    };
                    return entity;
                }
            };
            michal = tangon.bind(report)(michal, zuuluu);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();