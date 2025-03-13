// app/modules/keyboard/native/useSystemKeyboardHeight.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    zuuluu = argFre;
    tangon = argPlu;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = tangon;
    entity = global;
    golfie = entity.Object;
    oscard = golfie.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(golfie)(zuuluu, entity, report);
    entity = function(argFoo) { // Original name: SYSTEM_KEYBOARD_HEIGHT_GETTER
        entity = argFoo;
        entity = entity.keyboardHeight;
        return entity;
    };
    var _closure1_slot2 = entity;
    entity = function(argFoo) { // Original name: SYSTEM_KEYBOARD_HEIGHT_GETTER_IGNORING_KEYBOARD
        entity = argFoo;
        entity = entity.keyboardHeightExcludingSafeAreaInsets;
        return entity;
    };
    var _closure1_slot3 = entity;
    entity = {};
    report = false;
    entity['excludeSafeAreaInsets'] = report;
    var _closure1_slot4 = entity;
    entity = 1;
    report = tangon[entity];
    tangon = argBar;
    entity = undefined;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/keyboard/native/useSystemKeyboardHeight.native.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: useSystemKeyboardHeight
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = arguments[0];
            zuuluu = undefined;
            if(!(entity === zuuluu)) { _fun00002_ip = 16; continue _fun00001 }
 9:
            entity = _closure1_slot4;
 16:
            entity = entity.excludeSafeAreaInsets;
            if(!(entity === zuuluu)) { _fun00002_ip = 28; continue _fun00001 }
 26:
            entity = false;
 28:
            report = _closure1_slot0;
            oscard = _closure1_slot1;
            michal = 0;
            michal = oscard[michal];
            michal = report.bind(zuuluu)(michal);
            if(entity) { _fun00002_ip = 59; continue _fun00001 }
 53:
            entity = _closure1_slot2;
            _fun00002_ip = 63; continue _fun00001;
 59:
            entity = _closure1_slot3;
 63:
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    michal = function() { // Original name: getSystemKeyboardHeight
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = arguments[0];
            tangon = undefined;
            if(!(entity === tangon)) { _fun00004_ip = 16; continue _fun00003 }
 9:
            entity = _closure1_slot4;
 16:
            entity = entity.excludeSafeAreaInsets;
            zuuluu = _closure1_slot0;
            report = _closure1_slot1;
            michal = 0;
            michal = report[michal];
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.getState;
            michal = michal.bind(zuuluu)();
            if(entity) { _fun00004_ip = 65; continue _fun00003 }
 57:
            entity = michal.keyboardHeight;
            _fun00004_ip = 71; continue _fun00003;
 65:
            entity = michal.keyboardHeightExcludingSafeAreaInsets;
 71:
            return entity;
        }
    };
    zuuluu['getSystemKeyboardHeight'] = michal;
    return entity;
})();