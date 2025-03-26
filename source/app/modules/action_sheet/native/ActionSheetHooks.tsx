// app/modules/action_sheet/native/ActionSheetHooks.tsx
export default (function(_, argBar, argBaz, __, ___, argFre, argPlu) {
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
    entity = 5;
    tangon = tangon[entity];
    entity = undefined;
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/action_sheet/native/ActionSheetHooks.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: useKeyboardActionSheetHeight
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = _closure1_slot1;
            option = _closure1_slot2;
            zuuluu = 0;
            entity = option[zuuluu];
            golfie = undefined;
            entity = oscard.bind(golfie)(entity);
            entity = entity.bind(golfie)();
            report = entity.top;
            tangon = entity.bottom;
            entity = 1;
            entity = option[entity];
            verify = oscard.bind(golfie)(entity);
            entity = {};
            offset = true;
            entity['ignoreKeyboard'] = offset;
            entity = verify.bind(golfie)(entity);
            verify = entity.height;
            entity = 2;
            entity = option[entity];
            entity = oscard.bind(golfie)(entity);
            entity = entity.bind(golfie)();
            oscard = _closure1_slot0;
            michal = 3;
            michal = option[michal];
            michal = oscard.bind(golfie)(michal);
            michal = michal.NAV_BAR_HEIGHT_MULTILINE;
            michal = verify - michal;
            michal = michal - report;
            report = 4;
            report = option[report];
            oscard = oscard.bind(golfie)(report);
            report = oscard.isAndroid;
            report = report.bind(oscard)();
            if(!report) { _fun00002_ip = 142; continue _fun00001 }
 139:
            zuuluu = tangon;
 142:
            zuuluu = entity + zuuluu;
            if(!(zuuluu >= michal)) { _fun00002_ip = 153; continue _fun00001 }
 150:
            michal = zuuluu;
 153:
            entity = {};
            entity['minimum'] = zuuluu;
            entity['maximum'] = michal;
            return entity;
        }
    };
    zuuluu['useKeyboardActionSheetHeight'] = michal;
    return entity;
})();