// app/modules/reanimated/native/useAnimatedKeyboard.android.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = function(argFoo) { // Original name: getKeyboardHeight
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = _closure1_slot0;
            tangon = _closure1_slot1;
            entity = 3;
            entity = tangon[entity];
            report = undefined;
            michal = michal.bind(report)(entity);
            entity = michal.getKeyboardType;
            michal = entity.bind(michal)();
            entity = _closure1_slot4;
            entity = entity.SYSTEM;
            if(!(michal !== entity)) { _fun00002_ip = 112; continue _fun00001 }
 49:
            tangon = _closure1_slot0;
            oscard = _closure1_slot1;
            entity = 5;
            entity = oscard[entity];
            michal = tangon.bind(report)(entity);
            entity = michal.getCustomKeyboardHeight;
            michal = entity.bind(michal)();
            entity = 6;
            entity = oscard[entity];
            tangon = tangon.bind(report)(entity);
            entity = tangon.getSafeAreaInsets;
            entity = entity.bind(tangon)();
            entity = entity.bottom;
            entity = michal + entity;
            _fun00002_ip = 153; continue _fun00001;
 112:
            tangon = argFoo;
            michal = 0;
            if(!tangon) { _fun00002_ip = 150; continue _fun00001 }
 120:
            tangon = _closure1_slot0;
            oscard = _closure1_slot1;
            zuuluu = 4;
            zuuluu = oscard[zuuluu];
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = tangon.getSystemKeyboardHeight;
            michal = zuuluu.bind(tangon)();
 150:
            entity = michal;
 153:
            return entity;
        }
    };
    var _closure1_slot6 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    golfie = true;
    tangon['value'] = golfie;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    option = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot2 = tangon;
    tangon = 1;
    option = oscard[tangon];
    tangon = argBaz;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.KeyboardTypes;
    var _closure1_slot4 = tangon;
    tangon = {};
    tangon['android_reportSystemKeyboardHeight'] = golfie;
    var _closure1_slot5 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/reanimated/native/useAnimatedKeyboard.android.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: useAnimatedKeyboard
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = arguments[0];
            golfie = undefined;
            if(!(entity === golfie)) { _fun00004_ip = 18; continue _fun00003 }
 11:
            entity = _closure1_slot5;
 18:
            oscard = entity.android_reportSystemKeyboardHeight;
            if(!(oscard === golfie)) { _fun00004_ip = 30; continue _fun00003 }
 28:
            oscard = true;
 30:
            var _closure2_slot0 = oscard;
            var _closure2_slot1 = golfie;
            tangon = _closure1_slot0;
            report = _closure1_slot1;
            entity = 7;
            entity = report[entity];
            report = tangon.bind(golfie)(entity);
            tangon = report.useSharedValue;
            entity = _closure1_slot6;
            entity = entity.bind(golfie)(oscard);
            entity = tangon.bind(report)(entity);
            _closure2_slot1 = entity;
            report = _closure1_slot2;
            tangon = report.useEffect;
            zuuluu = new Array(2);
            zuuluu[0] = entity;
            zuuluu[1] = oscard;
            michal = function() {
                zuuluu = _closure1_slot3;
                michal = undefined;
                entity = function() {
                    tangon = _closure2_slot1;
                    zuuluu = tangon.set;
                    report = _closure1_slot6;
                    michal = _closure2_slot0;
                    entity = undefined;
                    michal = report.bind(entity)(michal);
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                };
                entity = zuuluu.bind(michal)(entity);
                return entity;
            };
            michal = tangon.bind(report)(michal, zuuluu);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();