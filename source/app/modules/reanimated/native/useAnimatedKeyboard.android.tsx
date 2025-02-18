// app/modules/reanimated/native/useAnimatedKeyboard.android.tsx
export default (function(_, argBar, argBaz, argCor, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
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
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/reanimated/native/useAnimatedKeyboard.android.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: useAnimatedKeyboard
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = arguments[0];
            report = undefined;
            if(!(entity === report)) { _fun00002_ip = 18; continue _fun00001 }
 11:
            entity = _closure1_slot5;
 18:
            oscard = entity.android_reportSystemKeyboardHeight;
            var _closure2_slot0 = oscard;
            var _closure2_slot1 = report;
            tangon = _closure1_slot0;
            golfie = _closure1_slot1;
            entity = 3;
            entity = golfie[entity];
            report = tangon.bind(report)(entity);
            tangon = report.useSharedValue;
            entity = _closure1_slot3;
            option = entity.keyboardType;
            entity = _closure1_slot4;
            golfie = entity.SYSTEM;
            entity = 0;
            if(!(option !== golfie)) { _fun00002_ip = 96; continue _fun00001 }
 86:
            golfie = _closure1_slot3;
            entity = golfie.customKeyboardHeight;
 96:
            entity = tangon.bind(report)(entity);
            _closure2_slot1 = entity;
            report = _closure1_slot2;
            tangon = report.useEffect;
            zuuluu = new Array(2);
            zuuluu[0] = entity;
            zuuluu[1] = oscard;
            michal = function() {
                tangon = function() { // Original name: handleStoreChange
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        zuuluu = _closure1_slot3;
                        oscard = zuuluu.keyboardType;
                        entity = zuuluu.keyboardOpen;
                        report = zuuluu.customKeyboardHeight;
                        tangon = zuuluu.keyboardHeight;
                        zuuluu = _closure1_slot4;
                        zuuluu = zuuluu.SYSTEM;
                        if(!(oscard === zuuluu)) { _fun00004_ip = 48; continue _fun00003 }
 45:
                        if(entity) { _fun00004_ip = 107; continue _fun00003 }
 48:
                        entity = _closure1_slot4;
                        entity = entity.SYSTEM;
                        zuuluu = 0;
                        if(!(oscard !== entity)) { _fun00004_ip = 105; continue _fun00003 }
 64:
                        golfie = _closure1_slot0;
                        oscard = _closure1_slot1;
                        entity = 4;
                        oscard = oscard[entity];
                        entity = undefined;
                        oscard = golfie.bind(entity)(oscard);
                        entity = oscard.getSafeAreaInsets;
                        entity = entity.bind(oscard)();
                        entity = entity.bottom;
                        zuuluu = report + entity;
 105:
                        _fun00004_ip = 163; continue _fun00003;
 107:
                        report = _closure2_slot0;
                        entity = 0;
                        if(!report) { _fun00004_ip = 160; continue _fun00003 }
 119:
                        oscard = _closure1_slot0;
                        report = _closure1_slot1;
                        michal = 4;
                        report = report[michal];
                        michal = undefined;
                        report = oscard.bind(michal)(report);
                        michal = report.getSafeAreaInsets;
                        michal = michal.bind(report)();
                        michal = michal.bottom;
                        entity = tangon + michal;
 160:
                        zuuluu = entity;
 163:
                        michal = _closure2_slot1;
                        entity = michal.set;
                        entity = entity.bind(michal)(zuuluu);
                        entity = undefined;
                        return entity;
                    }
                };
                var _closure3_slot0 = tangon;
                zuuluu = _closure1_slot3;
                michal = zuuluu.addReactChangeListener;
                michal = michal.bind(zuuluu)(tangon);
                entity = function() {
                    zuuluu = _closure1_slot3;
                    michal = zuuluu.removeReactChangeListener;
                    entity = _closure3_slot0;
                    entity = michal.bind(zuuluu)(entity);
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