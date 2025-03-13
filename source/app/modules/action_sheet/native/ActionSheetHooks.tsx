// app/modules/action_sheet/native/ActionSheetHooks.tsx
export default (function(_, argBar, argBaz, __, ___, argFre, argPlu) {
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
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/action_sheet/native/ActionSheetHooks.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: useKeyboardActionSheetHeight
        tangon = _closure1_slot1;
        oscard = _closure1_slot2;
        zuuluu = 1;
        zuuluu = oscard[zuuluu];
        report = undefined;
        zuuluu = tangon.bind(report)(zuuluu);
        zuuluu = zuuluu.bind(report)();
        golfie = zuuluu.top;
        var _closure2_slot0 = golfie;
        zuuluu = zuuluu.bottom;
        var _closure2_slot1 = zuuluu;
        zuuluu = 2;
        zuuluu = oscard[zuuluu];
        golfie = tangon.bind(report)(zuuluu);
        zuuluu = {};
        option = true;
        zuuluu['ignoreKeyboard'] = option;
        zuuluu = golfie.bind(report)(zuuluu);
        zuuluu = zuuluu.height;
        var _closure2_slot2 = zuuluu;
        zuuluu = 3;
        zuuluu = oscard[zuuluu];
        zuuluu = tangon.bind(report)(zuuluu);
        zuuluu = zuuluu.bind(report)();
        zuuluu = zuuluu.height;
        var _closure2_slot3 = zuuluu;
        tangon = _closure1_slot0;
        zuuluu = 4;
        zuuluu = oscard[zuuluu];
        tangon = tangon.bind(report)(zuuluu);
        zuuluu = tangon.useStateFromStoresObject;
        report = _closure1_slot3;
        michal = new Array(1);
        michal[0] = report;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zuuluu = _closure2_slot2;
                report = _closure1_slot0;
                oscard = _closure1_slot2;
                michal = 5;
                michal = oscard[michal];
                oscard = undefined;
                michal = report.bind(oscard)(michal);
                michal = michal.NAV_BAR_HEIGHT_MULTILINE;
                zuuluu = zuuluu - michal;
                michal = _closure2_slot0;
                michal = zuuluu - michal;
                zuuluu = _closure1_slot3;
                output = zuuluu.systemKeyboardHeight;
                report = 0;
                if(!(report === output)) { _fun00002_ip = 96; continue _fun00001 }
 66:
                golfie = _closure1_slot0;
                option = _closure1_slot2;
                zuuluu = 6;
                zuuluu = option[zuuluu];
                golfie = golfie.bind(oscard)(zuuluu);
                zuuluu = golfie.getEstimatedKeyboardHeight;
                output = zuuluu.bind(golfie)();
 96:
                golfie = _closure1_slot0;
                option = _closure1_slot2;
                zuuluu = 7;
                zuuluu = option[zuuluu];
                golfie = golfie.bind(oscard)(zuuluu);
                zuuluu = golfie.isAndroid;
                golfie = zuuluu.bind(golfie)();
                zuuluu = 0;
                if(!golfie) { _fun00002_ip = 134; continue _fun00001 }
 130:
                zuuluu = _closure2_slot1;
 134:
                zuuluu = output + zuuluu;
                if(!(zuuluu >= michal)) { _fun00002_ip = 145; continue _fun00001 }
 142:
                michal = zuuluu;
 145:
                if(!(zuuluu <= report)) { _fun00002_ip = 264; continue _fun00001 }
 149:
                report = _closure1_slot1;
                golfie = _closure1_slot2;
                tangon = 8;
                tangon = golfie[tangon];
                report = report.bind(oscard)(tangon);
                tangon = report.captureMessage;
                sequen = _closure2_slot2;
                ctrled = _closure2_slot3;
                update = _closure2_slot0;
                result = _closure2_slot1;
                entity = global;
                entity = entity.HermesInternal;
                romeon = entity.concat;
                sierra = "Invalid keyboard height: minimum: '";
                target = "', maximum: ";
                cntext = ', systemKeyboardHeight: ';
                config = ' windowHeight: ';
                vacuum = ' screenHeight: ';
                source = ' safeAreaTop: ';
                echoed = ' safeAreaBottom: ';
                status = zuuluu;
                papara = michal;
                record = output;
                entity = sierra[romeon](status, target, papara, cntext, record, config, sequen, vacuum, ctrled, source, update, echoed, result, output);
                entity = tangon.bind(report)(entity);
 264:
                entity = {};
                entity['minimum'] = zuuluu;
                entity['maximum'] = michal;
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['useKeyboardActionSheetHeight'] = michal;
    return entity;
})();