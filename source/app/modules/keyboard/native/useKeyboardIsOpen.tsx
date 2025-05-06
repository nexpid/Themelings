// app/modules/keyboard/native/useKeyboardIsOpen.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    entity = argBaz;
    var _closure1_slot0 = entity;
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
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    tangon = tangon.KeyboardTypes;
    var _closure1_slot2 = tangon;
    tangon = {};
    var _closure1_slot3 = tangon;
    tangon = function(argFoo) { // Original name: KEYBOARD_OPEN_GETTER
        entity = argFoo;
        entity = entity.keyboardOpen;
        return entity;
    };
    var _closure1_slot4 = tangon;
    tangon = function(argFoo) { // Original name: KEYBOARD_OPEN_OR_CUSTOM_KEYBOARD_OPEN_GETTER
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            entity = michal.keyboardOpen;
            if(entity) { _fun00002_ip = 35; continue _fun00001 }
 12:
            zuuluu = michal.keyboardType;
            michal = _closure1_slot2;
            michal = michal.SYSTEM;
            entity = zuuluu !== michal;
 35:
            return entity;
        }
    };
    var _closure1_slot5 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
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
            report = _closure1_slot0;
            oscard = _closure1_slot1;
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
            tangon = _closure1_slot0;
            entity = _closure1_slot1;
            golfie = 1;
            entity = entity[golfie];
            tangon = tangon.bind(oscard)(entity);
            entity = tangon.getState;
            entity = entity.bind(tangon)();
            tangon = entity.keyboardOpen;
            entity = tangon;
            if(!michal) { _fun00006_ip = 129; continue _fun00005 }
 73:
            michal = tangon;
            if(tangon) { _fun00006_ip = 126; continue _fun00005 }
 79:
            report = _closure1_slot0;
            tangon = _closure1_slot1;
            tangon = tangon[golfie];
            report = report.bind(oscard)(tangon);
            tangon = report.getState;
            tangon = tangon.bind(report)();
            tangon = tangon.keyboardType;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu.SYSTEM;
            michal = tangon !== zuuluu;
 126:
            entity = michal;
 129:
            return entity;
        }
    };
    zuuluu['getKeyboardIsOpen'] = michal;
    return entity;
})();