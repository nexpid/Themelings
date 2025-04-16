// app/modules/screen/useWindowDimensions.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
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
    tangon = argBaz;
    entity = undefined;
    tangon = tangon.bind(entity)(oscard);
    var _closure1_slot0 = tangon;
    tangon = {};
    oscard = false;
    tangon['ignoreKeyboard'] = oscard;
    var _closure1_slot1 = tangon;
    tangon = function(argFoo) { // Original name: WINDOW_DIMENSIONS_GETTER
        entity = argFoo;
        entity = entity.windowDimensions;
        return entity;
    };
    var _closure1_slot2 = tangon;
    tangon = function(argFoo) { // Original name: WINDOW_DIMENSIONS_GETTER_IGNORING_KEYBOARD
        entity = argFoo;
        entity = entity.windowDimensionsIgnoringKeyboard;
        return entity;
    };
    var _closure1_slot3 = tangon;
    tangon = 1;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/screen/useWindowDimensions.native.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: useWindowDimensions
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = arguments[0];
            zuuluu = undefined;
            if(!(entity === zuuluu)) { _fun00002_ip = 16; continue _fun00001 }
 9:
            entity = _closure1_slot1;
 16:
            entity = entity.ignoreKeyboard;
            if(!(entity === zuuluu)) { _fun00002_ip = 28; continue _fun00001 }
 26:
            entity = false;
 28:
            michal = _closure1_slot0;
            if(entity) { _fun00002_ip = 44; continue _fun00001 }
 38:
            entity = _closure1_slot2;
            _fun00002_ip = 48; continue _fun00001;
 44:
            entity = _closure1_slot3;
 48:
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    michal = function() { // Original name: getWindowDimensions
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = arguments[0];
            michal = undefined;
            if(!(entity === michal)) { _fun00004_ip = 16; continue _fun00003 }
 9:
            entity = _closure1_slot1;
 16:
            entity = entity.ignoreKeyboard;
            if(!(entity === michal)) { _fun00004_ip = 28; continue _fun00003 }
 26:
            entity = false;
 28:
            zuuluu = _closure1_slot0;
            michal = zuuluu.getState;
            michal = michal.bind(zuuluu)();
            if(entity) { _fun00004_ip = 56; continue _fun00003 }
 48:
            entity = michal.windowDimensions;
            _fun00004_ip = 62; continue _fun00003;
 56:
            entity = michal.windowDimensionsIgnoringKeyboard;
 62:
            return entity;
        }
    };
    zuuluu['getWindowDimensions'] = michal;
    return entity;
})();