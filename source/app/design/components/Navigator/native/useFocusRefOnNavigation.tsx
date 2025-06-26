// app/design/components/Navigator/native/useFocusRefOnNavigation.tsx
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
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'design/components/Navigator/native/useFocusRefOnNavigation.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useFocusRefOnNavigation
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            golfie = entity.inputRef;
            var _closure2_slot0 = golfie;
            option = entity.enabled;
            entity = undefined;
            if(!(option === entity)) { _fun00002_ip = 28; continue _fun00001 }
 26:
            option = true;
 28:
            var _closure2_slot1 = option;
            var _closure2_slot2 = entity;
            report = _closure1_slot0;
            oscard = _closure1_slot1;
            tangon = 1;
            tangon = oscard[tangon];
            report = report.bind(entity)(tangon);
            tangon = report.useIsFocused;
            oscard = tangon.bind(report)();
            _closure2_slot2 = oscard;
            report = _closure1_slot2;
            tangon = report.useEffect;
            zuuluu = new Array(3);
            zuuluu[0] = option;
            zuuluu[1] = golfie;
            zuuluu[2] = oscard;
            michal = function() {
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot1;
                michal = 2;
                zuuluu = zuuluu[michal];
                michal = undefined;
                tangon = tangon.bind(michal)(zuuluu);
                zuuluu = tangon.runAfterInteractions;
                michal = function() {
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        michal = _closure2_slot1;
                        if(!michal) { _fun00004_ip = 14; continue _fun00003 }
 10:
                        michal = _closure2_slot2;
 14:
                        if(!michal) { _fun00004_ip = 42; continue _fun00003 }
 17:
                        entity = _closure2_slot0;
                        michal = entity.current;
                        entity = null;
                        if(!(entity != michal)) { _fun00004_ip = 42; continue _fun00003 }
 32:
                        entity = michal.focus;
                        entity = entity.bind(michal)();
 42:
                        entity = undefined;
                        return entity;
                    }
                };
                michal = zuuluu.bind(tangon)(michal);
                var _closure3_slot0 = michal;
                entity = function() {
                    michal = _closure3_slot0;
                    entity = michal.cancel;
                    entity = entity.bind(michal)();
                    entity = undefined;
                    return entity;
                };
                return entity;
            };
            michal = tangon.bind(report)(michal, zuuluu);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();