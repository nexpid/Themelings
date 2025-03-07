// app/design/components/Navigator/native/useNavigatorBackHandler.native.tsx
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
    tangon = {};
    var _closure1_slot3 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'design/components/Navigator/native/useNavigatorBackHandler.native.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: useNavigatorBackHandler
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = arguments[0];
            report = undefined;
            if(!(michal === report)) { _fun00002_ip = 18; continue _fun00001 }
 11:
            michal = _closure1_slot3;
 18:
            oscard = michal.onBeforeGoBack;
            var _closure2_slot0 = oscard;
            var _closure2_slot1 = report;
            var _closure2_slot2 = report;
            tangon = _closure1_slot0;
            golfie = _closure1_slot1;
            zuuluu = 1;
            zuuluu = golfie[zuuluu];
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = tangon.useNavigation;
            golfie = zuuluu.bind(tangon)();
            _closure2_slot1 = golfie;
            report = _closure1_slot2;
            zuuluu = report.useRef;
            michal = true;
            michal = zuuluu.bind(report)(michal);
            _closure2_slot2 = michal;
            tangon = report.useCallback;
            zuuluu = new Array(1);
            zuuluu[0] = golfie;
            michal = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    tangon = arguments[0];
                    entity = undefined;
                    if(!(tangon === entity)) { _fun00004_ip = 11; continue _fun00003 }
 9:
                    tangon = false;
 11:
                    zuuluu = _closure2_slot2;
                    zuuluu['current'] = tangon;
                    zuuluu = _closure2_slot1;
                    michal = zuuluu.goBack;
                    michal = michal.bind(zuuluu)();
                    return entity;
                }
            };
            michal = tangon.bind(report)(michal, zuuluu);
            tangon = report.useEffect;
            zuuluu = new Array(2);
            zuuluu[0] = golfie;
            zuuluu[1] = oscard;
            entity = function() {
                tangon = _closure2_slot1;
                zuuluu = tangon.addListener;
                michal = 'beforeRemove';
                entity = function(argFoo) {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        zuuluu = argFoo;
                        var _closure4_slot0 = zuuluu;
                        tangon = _closure2_slot2;
                        tangon = tangon.current;
                        if(!tangon) { _fun00006_ip = 170; continue _fun00005 }
 27:
                        zuuluu = zuuluu.data;
                        zuuluu = zuuluu.action;
                        tangon = zuuluu.type;
                        zuuluu = 'POP';
                        if(!(zuuluu === tangon)) { _fun00006_ip = 90; continue _fun00005 }
 52:
                        report = _closure1_slot0;
                        tangon = _closure1_slot1;
                        zuuluu = 2;
                        tangon = tangon[zuuluu];
                        zuuluu = undefined;
                        report = report.bind(zuuluu)(tangon);
                        tangon = report.isIOS;
                        tangon = tangon.bind(report)();
                        if(tangon) { _fun00006_ip = 142; continue _fun00005 }
 90:
                        report = _closure2_slot0;
                        tangon = null;
                        if(!(tangon != report)) { _fun00006_ip = 170; continue _fun00005 }
 100:
                        report = _closure2_slot0;
                        tangon = {};
                        oscard = true;
                        tangon['preventable'] = oscard;
                        oscard = function() { // Original name: preventDefault
                            michal = _closure4_slot0;
                            entity = michal.preventDefault;
                            entity = entity.bind(michal)();
                            return entity;
                        };
                        tangon['preventDefault'] = oscard;
                        michal = function() { // Original name: goBack
                            michal = _closure2_slot1;
                            entity = michal.goBack;
                            entity = entity.bind(michal)();
                            return entity;
                        };
                        tangon['goBack'] = michal;
                        michal = undefined;
                        michal = report.bind(michal)(tangon);
                        _fun00006_ip = 170; continue _fun00005;
 142:
                        tangon = _closure2_slot0;
                        michal = null;
                        if(!(michal != tangon)) { _fun00006_ip = 170; continue _fun00005 }
 152:
                        michal = _closure2_slot0;
                        entity = {};
                        tangon = false;
                        entity['preventable'] = tangon;
                        entity = michal.bind(zuuluu)(entity);
 170:
                        entity = undefined;
                        return entity;
                    }
                };
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            entity = tangon.bind(report)(entity, zuuluu);
            entity = {};
            entity['onGoBack'] = michal;
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();