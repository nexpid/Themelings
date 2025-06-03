// app/modules/search_v2/native/components/layout/autocomplete/useSearchSuggestionsGesture.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    option = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = {};
    golfie = 'function inBoundingBox_useSearchSuggestionsGestureTsx1(e,coordinates,safeAreaTop){const touch=e.allTouches[0];if(touch==null)return false;return coordinates.left<touch.absoluteX&&touch.absoluteX<coordinates.right&&coordinates.top<touch.absoluteY+safeAreaTop&&touch.absoluteY+safeAreaTop<coordinates.bottom;}';
    tangon['code'] = golfie;
    var _closure1_slot5 = tangon;
    tangon = function() {
        entity = function(argFoo, argBar, argBaz) { // Original name: inBoundingBox
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zuuluu = argBar;
                report = argBaz;
                entity = argFoo;
                michal = entity.allTouches;
                entity = 0;
                tangon = michal[entity];
                entity = null;
                entity = entity != tangon;
                if(!entity) { _fun00002_ip = 110; continue _fun00001 }
 30:
                oscard = zuuluu.left;
                michal = tangon.absoluteX;
                michal = oscard < michal;
                if(!michal) { _fun00002_ip = 63; continue _fun00001 }
 48:
                golfie = tangon.absoluteX;
                oscard = zuuluu.right;
                michal = golfie < oscard;
 63:
                if(!michal) { _fun00002_ip = 85; continue _fun00001 }
 66:
                golfie = zuuluu.top;
                oscard = tangon.absoluteY;
                oscard = oscard + report;
                michal = golfie < oscard;
 85:
                if(!michal) { _fun00002_ip = 107; continue _fun00001 }
 88:
                tangon = tangon.absoluteY;
                tangon = tangon + report;
                zuuluu = zuuluu.bottom;
                michal = tangon < zuuluu;
 107:
                entity = michal;
 110:
                return entity;
            }
        };
        michal = {};
        entity['__closure'] = michal;
        michal = 14606221606756.0;
        entity['__workletHash'] = michal;
        michal = _closure1_slot5;
        entity['__initData'] = michal;
        return entity;
    };
    tangon = tangon.bind(entity)();
    var _closure1_slot6 = tangon;
    tangon = {};
    golfie = 'function useSearchSuggestionsGestureTsx2(e,manager){const{coordinates,inBoundingBox,safeAreaTop,dismissed}=this.__closure;manager.fail();const _coordinates=coordinates.get();if(_coordinates==null||inBoundingBox(e,_coordinates,safeAreaTop))return;dismissed.set(true);}';
    tangon['code'] = golfie;
    var _closure1_slot7 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/search_v2/native/components/layout/autocomplete/useSearchSuggestionsGesture.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useSearchSuggestionsGesture
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            romeon = argFoo;
            var _closure2_slot0 = romeon;
            golfie = _closure1_slot0;
            verify = _closure1_slot2;
            michal = 2;
            zuuluu = verify[michal];
            oscard = undefined;
            option = golfie.bind(oscard)(zuuluu);
            report = option.useSharedValue;
            zuuluu = false;
            option = report.bind(option)(zuuluu);
            var _closure2_slot1 = option;
            michal = verify[michal];
            report = golfie.bind(oscard)(michal);
            zuuluu = report.useSharedValue;
            michal = null;
            michal = zuuluu.bind(report)(michal);
            var _closure2_slot2 = michal;
            yankee = _closure1_slot3;
            offset = yankee.useCallback;
            report = new Array(1);
            report[0] = option;
            zuuluu = function(argFoo, argBar) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    michal = argFoo;
                    entity = argBar;
                    if(!(michal !== entity)) { _fun00006_ip = 29; continue _fun00005 }
 10:
                    zuuluu = _closure2_slot1;
                    michal = zuuluu.set;
                    entity = false;
                    entity = michal.bind(zuuluu)(entity);
 29:
                    entity = undefined;
                    return entity;
                }
            };
            zuuluu = offset.bind(yankee)(zuuluu, report);
            var _closure2_slot3 = zuuluu;
            offset = yankee.useEffect;
            report = new Array(3);
            report[0] = option;
            report[1] = romeon;
            report[2] = zuuluu;
            zuuluu = function() {
                tangon = _closure1_slot4;
                zuuluu = tangon.subscribeTextInputValue;
                michal = _closure2_slot0;
                entity = _closure2_slot3;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            zuuluu = offset.bind(yankee)(zuuluu, report);
            report = _closure1_slot1;
            zuuluu = 3;
            zuuluu = verify[zuuluu];
            zuuluu = report.bind(oscard)(zuuluu);
            zuuluu = zuuluu.bind(oscard)();
            report = zuuluu.top;
            zuuluu = 4;
            zuuluu = verify[zuuluu];
            oscard = golfie.bind(oscard)(zuuluu);
            zuuluu = oscard.isAndroid;
            oscard = zuuluu.bind(oscard)();
            zuuluu = 0;
            if(!oscard) { _fun00004_ip = 197; continue _fun00003 }
 194:
            zuuluu = report;
 197:
            var _closure2_slot4 = zuuluu;
            tangon = _closure1_slot3;
            oscard = tangon.useMemo;
            report = new Array(3);
            report[0] = michal;
            report[1] = zuuluu;
            report[2] = option;
            zuuluu = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 5;
                michal = michal[entity];
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
                michal = entity.Gesture;
                entity = michal.Manual;
                zuuluu = entity.bind(michal)();
                michal = zuuluu.manualActivation;
                entity = true;
                zuuluu = michal.bind(zuuluu)(entity);
                michal = zuuluu.onTouchesDown;
                entity = function(argFoo, argBar) { // Original name: e
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        michal = argBar;
                        entity = michal.fail;
                        entity = entity.bind(michal)();
                        zuuluu = _closure2_slot2;
                        michal = zuuluu.get;
                        golfie = michal.bind(zuuluu)();
                        michal = null;
                        michal = michal == golfie;
                        if(michal) { _fun00008_ip = 61; continue _fun00007 }
 38:
                        oscard = _closure1_slot6;
                        report = _closure2_slot4;
                        tangon = undefined;
                        zuuluu = argFoo;
                        michal = oscard.bind(tangon)(zuuluu, golfie, report);
 61:
                        if(michal) { _fun00008_ip = 80; continue _fun00007 }
 64:
                        zuuluu = _closure2_slot1;
                        michal = zuuluu.set;
                        entity = true;
                        entity = michal.bind(zuuluu)(entity);
 80:
                        entity = undefined;
                        return entity;
                    }
                };
                report = {};
                golfie = _closure2_slot2;
                report['coordinates'] = golfie;
                golfie = _closure1_slot6;
                report['inBoundingBox'] = golfie;
                golfie = _closure2_slot4;
                report['safeAreaTop'] = golfie;
                oscard = _closure2_slot1;
                report['dismissed'] = oscard;
                entity['__closure'] = report;
                report = 2369649298113.0;
                entity['__workletHash'] = report;
                tangon = _closure1_slot7;
                entity['__initData'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            oscard = oscard.bind(tangon)(zuuluu, report);
            var _closure2_slot5 = oscard;
            report = tangon.useCallback;
            zuuluu = new Array(1);
            zuuluu[0] = michal;
            michal = function(argFoo) {
                zuuluu = _closure2_slot2;
                michal = zuuluu.set;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            };
            report = report.bind(tangon)(michal, zuuluu);
            var _closure2_slot6 = report;
            golfie = tangon.useCallback;
            zuuluu = new Array(1);
            zuuluu[0] = option;
            michal = function() {
                zuuluu = _closure2_slot1;
                michal = zuuluu.set;
                entity = true;
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            };
            golfie = golfie.bind(tangon)(michal, zuuluu);
            var _closure2_slot7 = golfie;
            zuuluu = tangon.useMemo;
            michal = new Array(4);
            michal[0] = option;
            michal[1] = golfie;
            michal[2] = oscard;
            michal[3] = report;
            entity = function() {
                entity = {};
                zuuluu = _closure2_slot5;
                entity['gesture'] = zuuluu;
                zuuluu = _closure2_slot1;
                entity['dismissed'] = zuuluu;
                zuuluu = _closure2_slot6;
                entity['onLayoutMeasure'] = zuuluu;
                michal = _closure2_slot7;
                entity['setDismissed'] = michal;
                return entity;
            };
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        }
    };
    zuuluu['useSearchSuggestionsGesture'] = michal;
    return entity;
})();