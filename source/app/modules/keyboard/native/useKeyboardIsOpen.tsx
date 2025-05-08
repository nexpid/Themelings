// app/modules/keyboard/native/useKeyboardIsOpen.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    tangon = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = tangon;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, oscard);
    entity = {};
    var _closure1_slot3 = entity;
    entity = function(argFoo) { // Original name: KEYBOARD_OPEN_GETTER
        entity = argFoo;
        entity = entity.keyboardOpen;
        return entity;
    };
    var _closure1_slot4 = entity;
    entity = function(argFoo) { // Original name: KEYBOARD_OPEN_OR_CUSTOM_KEYBOARD_OPEN_GETTER
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            entity = michal.keyboardOpen;
            if(entity) { _fun00002_ip = 58; continue _fun00001 }
 12:
            zuuluu = michal.keyboardType;
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 0;
            tangon = tangon[michal];
            michal = undefined;
            michal = report.bind(michal)(tangon);
            michal = michal.KeyboardTypes;
            michal = michal.SYSTEM;
            entity = zuuluu !== michal;
 58:
            return entity;
        }
    };
    var _closure1_slot5 = entity;
    entity = 2;
    tangon = tangon[entity];
    entity = undefined;
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/keyboard/native/useKeyboardIsOpen.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: useKeyboardIsOpen
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = arguments[0];
            zuuluu = undefined;
            if(!(entity === zuuluu)) { _fun00004_ip = 16; continue _fun00003 }
 9:
            entity = _closure1_slot3;
 16:
            entity = entity.includeCustomKeyboard;
            if(!(entity === zuuluu)) { _fun00004_ip = 28; continue _fun00003 }
 26:
            entity = false;
 28:
            report = _closure1_slot1;
            oscard = _closure1_slot2;
            michal = 1;
            michal = oscard[michal];
            michal = report.bind(zuuluu)(michal);
            if(entity) { _fun00004_ip = 60; continue _fun00003 }
 54:
            entity = _closure1_slot4;
            _fun00004_ip = 64; continue _fun00003;
 60:
            entity = _closure1_slot5;
 64:
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    michal = function() { // Original name: getKeyboardIsOpen
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = arguments[0];
            oscard = undefined;
            if(!(entity === oscard)) { _fun00006_ip = 16; continue _fun00005 }
 9:
            entity = _closure1_slot3;
 16:
            michal = entity.includeCustomKeyboard;
            if(!(michal === oscard)) { _fun00006_ip = 28; continue _fun00005 }
 26:
            michal = false;
 28:
            report = _closure1_slot1;
            entity = _closure1_slot2;
            tangon = 1;
            entity = entity[tangon];
            report = report.bind(oscard)(entity);
            entity = report.getState;
            entity = entity.bind(report)();
            report = entity.keyboardOpen;
            entity = report;
            if(!michal) { _fun00006_ip = 146; continue _fun00005 }
 73:
            michal = report;
            if(report) { _fun00006_ip = 143; continue _fun00005 }
 79:
            report = _closure1_slot1;
            golfie = _closure1_slot2;
            tangon = golfie[tangon];
            report = report.bind(oscard)(tangon);
            tangon = report.getState;
            tangon = tangon.bind(report)();
            tangon = tangon.keyboardType;
            report = _closure1_slot0;
            zuuluu = 0;
            zuuluu = golfie[zuuluu];
            zuuluu = report.bind(oscard)(zuuluu);
            zuuluu = zuuluu.KeyboardTypes;
            zuuluu = zuuluu.SYSTEM;
            michal = tangon !== zuuluu;
 143:
            entity = michal;
 146:
            return entity;
        }
    };
    zuuluu['getKeyboardIsOpen'] = michal;
    return entity;
})();