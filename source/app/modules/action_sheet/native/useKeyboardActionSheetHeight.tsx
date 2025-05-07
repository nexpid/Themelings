// app/modules/action_sheet/native/useKeyboardActionSheetHeight.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    tangon = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = tangon;
    entity = function(argFoo, argBar, argBaz) { // Original name: computeKeyboardActionSheetHeight
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            michal = argBar;
            tangon = michal.height;
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            zuuluu = 0;
            michal = golfie[zuuluu];
            report = undefined;
            michal = oscard.bind(report)(michal);
            michal = michal.NAV_BAR_HEIGHT_MULTILINE;
            tangon = tangon - michal;
            michal = entity.top;
            michal = tangon - michal;
            tangon = 1;
            tangon = golfie[tangon];
            report = oscard.bind(report)(tangon);
            tangon = report.isAndroid;
            tangon = tangon.bind(report)();
            if(!tangon) { _fun00002_ip = 83; continue _fun00001 }
 78:
            zuuluu = entity.bottom;
 83:
            entity = argBaz;
            zuuluu = entity + zuuluu;
            if(!(zuuluu >= michal)) { _fun00002_ip = 97; continue _fun00001 }
 94:
            michal = zuuluu;
 97:
            entity = {};
            entity['minimum'] = zuuluu;
            entity['maximum'] = michal;
            return entity;
        }
    };
    var _closure1_slot3 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, oscard);
    entity = 5;
    tangon = tangon[entity];
    entity = undefined;
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/action_sheet/native/useKeyboardActionSheetHeight.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: useKeyboardActionSheetHeight
        report = _closure1_slot3;
        oscard = _closure1_slot1;
        golfie = _closure1_slot2;
        entity = 2;
        entity = golfie[entity];
        tangon = undefined;
        entity = oscard.bind(tangon)(entity);
        zuuluu = entity.bind(tangon)();
        entity = 3;
        entity = golfie[entity];
        michal = oscard.bind(tangon)(entity);
        entity = {};
        option = true;
        entity['ignoreKeyboard'] = option;
        michal = michal.bind(tangon)(entity);
        entity = 4;
        entity = golfie[entity];
        entity = oscard.bind(tangon)(entity);
        entity = entity.bind(tangon)();
        entity = report.bind(tangon)(zuuluu, michal, entity);
        return entity;
    };
    zuuluu['default'] = tangon;
    michal = function() { // Original name: getKeyboardActionSheetHeight
        report = _closure1_slot3;
        oscard = _closure1_slot0;
        golfie = _closure1_slot2;
        entity = 2;
        entity = golfie[entity];
        tangon = undefined;
        michal = oscard.bind(tangon)(entity);
        entity = michal.getSafeAreaInsets;
        zuuluu = entity.bind(michal)();
        entity = 3;
        entity = golfie[entity];
        option = oscard.bind(tangon)(entity);
        michal = option.getWindowDimensions;
        entity = {};
        verify = true;
        entity['ignoreKeyboard'] = verify;
        michal = michal.bind(option)(entity);
        entity = 4;
        entity = golfie[entity];
        oscard = oscard.bind(tangon)(entity);
        entity = oscard.getCustomKeyboardHeight;
        entity = entity.bind(oscard)();
        entity = report.bind(tangon)(zuuluu, michal, entity);
        return entity;
    };
    zuuluu['getKeyboardActionSheetHeight'] = michal;
    return entity;
})();