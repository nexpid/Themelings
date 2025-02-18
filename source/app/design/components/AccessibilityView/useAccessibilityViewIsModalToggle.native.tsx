// app/design/components/AccessibilityView/useAccessibilityViewIsModalToggle.native.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    zuuluu = argFre;
    report = argPlu;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = report;
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
    var _closure1_slot2 = tangon;
    tangon = 2;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'design/components/AccessibilityView/useAccessibilityViewIsModalToggle.native.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useAccessibilityViewIsModalToggle
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            golfie = zuuluu.accessibilityViewIsModal;
            entity = undefined;
            if(!(golfie === entity)) { _fun00002_ip = 19; continue _fun00001 }
 17:
            golfie = false;
 19:
            var _closure2_slot0 = golfie;
            zuuluu = zuuluu.nativeID;
            var _closure2_slot1 = zuuluu;
            var _closure2_slot2 = entity;
            var _closure2_slot3 = entity;
            report = _closure1_slot2;
            tangon = report.useRef;
            tangon = tangon.bind(report)(entity);
            _closure2_slot2 = tangon;
            oscard = report.useCallback;
            tangon = new Array(2);
            tangon[0] = golfie;
            tangon[1] = zuuluu;
            zuuluu = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = arguments[0];
                    entity = undefined;
                    if(!(michal === entity)) { _fun00004_ip = 16; continue _fun00003 }
 9:
                    michal = _closure2_slot0;
 16:
                    if(michal) { _fun00004_ip = 96; continue _fun00003 }
 22:
                    michal = _closure2_slot2;
                    oscard = michal.current;
                    michal = null;
                    if(!(michal != oscard)) { _fun00004_ip = 181; continue _fun00003 }
 40:
                    michal = _closure2_slot2;
                    michal['current'] = entity;
                    tangon = _closure1_slot0;
                    report = _closure1_slot1;
                    michal = 1;
                    michal = report[michal];
                    report = tangon.bind(entity)(michal);
                    tangon = report.disableAccessibilityFocusLock;
                    michal = new Array(1);
                    michal[0] = oscard;
                    michal = tangon.bind(report)(michal);
                    _fun00004_ip = 181; continue _fun00003;
 96:
                    tangon = _closure2_slot1;
                    michal = null;
                    if(!(michal != tangon)) { _fun00004_ip = 183; continue _fun00003 }
 106:
                    michal = _closure2_slot2;
                    tangon = michal.current;
                    michal = _closure2_slot1;
                    if(!(tangon !== michal)) { _fun00004_ip = 181; continue _fun00003 }
 123:
                    michal = _closure2_slot2;
                    report = _closure2_slot1;
                    michal['current'] = report;
                    zuuluu = _closure1_slot0;
                    tangon = _closure1_slot1;
                    michal = 1;
                    michal = tangon[michal];
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.enableAccessibilityFocusLock;
                    michal = new Array(1);
                    michal[0] = report;
                    michal = zuuluu.bind(tangon)(michal);
 181:
                    return entity;
 183:
                    entity = global;
                    zuuluu = entity.Error;
                    entity = zuuluu.prototype;
                    michal = Object.create(entity, {constructor: {value: zuuluu}});
                    golfie = 'Must have a unique nativeID when accessibilityViewIsModal is enabled.';
                    option = michal;
                    entity = new option[zuuluu](golfie, oscard);
                    entity = entity instanceof Object ? entity : michal;
                    throw entity;
                }
            };
            oscard = oscard.bind(report)(zuuluu, tangon);
            _closure2_slot3 = oscard;
            tangon = report.useEffect;
            zuuluu = new Array(1);
            zuuluu[0] = oscard;
            michal = function() {
                michal = _closure2_slot3;
                entity = undefined;
                entity = michal.bind(entity)();
                entity = function() {
                    zuuluu = _closure2_slot3;
                    entity = undefined;
                    michal = false;
                    michal = zuuluu.bind(entity)(michal);
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