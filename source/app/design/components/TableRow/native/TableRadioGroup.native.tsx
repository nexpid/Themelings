// app/design/components/TableRow/native/TableRadioGroup.native.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    entity = global;
    option = entity.Object;
    report = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    report = golfie[entity];
    tangon = argBaz;
    entity = undefined;
    tangon = tangon.bind(entity)(report);
    var _closure1_slot2 = tangon;
    tangon = 1;
    report = golfie[tangon];
    tangon = argCor;
    option = tangon.bind(entity)(report);
    var _closure1_slot3 = option;
    tangon = 2;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    verify = tangon.NOOP;
    tangon = 3;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot4 = tangon;
    report = option.createContext;
    tangon = {};
    offset = null;
    tangon['selectedValue'] = offset;
    tangon['onSelect'] = verify;
    tangon = report.bind(option)(tangon);
    var _closure1_slot5 = tangon;
    report = 7;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'design/components/TableRow/native/TableRadioGroup.native.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['TableRadioGroupContext'] = tangon;
    michal = function(argFoo) { // Original name: TableRadioGroup
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            offset = entity.children;
            report = entity.value;
            michal = entity.onChange;
            var _closure2_slot0 = michal;
            yankee = entity.title;
            verify = entity.hasIcons;
            tangon = undefined;
            if(!(verify === tangon)) { _fun00002_ip = 44; continue _fun00001 }
 42:
            verify = true;
 44:
            var _closure2_slot1 = tangon;
            var _closure2_slot2 = tangon;
            var _closure2_slot3 = tangon;
            var _closure2_slot4 = tangon;
            option = _closure1_slot3;
            zuuluu = option.useState;
            oscard = zuuluu.bind(option)(report);
            report = _closure1_slot2;
            zuuluu = 2;
            report = report.bind(tangon)(oscard, zuuluu);
            zuuluu = 0;
            foxtra = report[zuuluu];
            _closure2_slot1 = foxtra;
            zuuluu = 1;
            zuuluu = report[zuuluu];
            _closure2_slot2 = zuuluu;
            report = option.useContext;
            oscard = _closure1_slot0;
            romeon = _closure1_slot1;
            zuuluu = 4;
            zuuluu = romeon[zuuluu];
            zuuluu = oscard.bind(tangon)(zuuluu);
            zuuluu = zuuluu.RedesignCompatContext;
            zuuluu = report.bind(option)(zuuluu);
            _closure2_slot3 = zuuluu;
            report = option.useCallback;
            zuuluu = new Array(1);
            zuuluu[0] = michal;
            michal = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = argFoo;
                    tangon = _closure2_slot2;
                    entity = undefined;
                    tangon = tangon.bind(entity)(zuuluu);
                    report = _closure2_slot0;
                    tangon = null;
                    if(!(tangon != report)) { _fun00004_ip = 36; continue _fun00003 }
 27:
                    michal = _closure2_slot0;
                    michal = michal.bind(entity)(zuuluu);
 36:
                    return entity;
                }
            };
            michal = report.bind(option)(michal, zuuluu);
            _closure2_slot4 = michal;
            report = option.useMemo;
            zuuluu = new Array(2);
            zuuluu[0] = foxtra;
            zuuluu[1] = michal;
            michal = function() {
                entity = {};
                zuuluu = _closure2_slot1;
                entity['selectedValue'] = zuuluu;
                michal = _closure2_slot4;
                entity['onSelect'] = michal;
                return entity;
            };
            report = report.bind(option)(michal, zuuluu);
            zuuluu = _closure1_slot4;
            entity = _closure1_slot5;
            michal = entity.Provider;
            entity = {};
            entity['value'] = report;
            report = 5;
            report = romeon[report];
            report = oscard.bind(tangon)(report);
            oscard = report.TableRowGroup;
            report = {};
            romeon = 'radiogroup';
            report['accessibilityRole'] = romeon;
            report['title'] = yankee;
            report['hasIcons'] = verify;
            verify = option.Children;
            option = verify.map;
            golfie = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    michal = argFoo;
                    tangon = _closure1_slot3;
                    zuuluu = tangon.isValidElement;
                    zuuluu = zuuluu.bind(tangon)(michal);
                    if(!zuuluu) { _fun00006_ip = 61; continue _fun00005 }
 24:
                    zuuluu = michal.type;
                    report = _closure1_slot0;
                    tangon = _closure1_slot1;
                    entity = 6;
                    tangon = tangon[entity];
                    entity = undefined;
                    entity = report.bind(entity)(tangon);
                    entity = entity.TableRadioRow;
                    if(!(zuuluu !== entity)) { _fun00006_ip = 73; continue _fun00005 }
 61:
                    zuuluu = _closure2_slot3;
                    entity = null;
                    if(!zuuluu) { _fun00006_ip = 76; continue _fun00005 }
 73:
                    entity = michal;
 76:
                    return entity;
                }
            };
            golfie = option.bind(verify)(offset, golfie);
            report['children'] = golfie;
            report = zuuluu.bind(tangon)(oscard, report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['TableRadioGroup'] = michal;
    return entity;
})();