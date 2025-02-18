// app/design/components/TableRow/native/TableRadioRow.native.tsx
export default (function(argFoo, argBar, _, argCor, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
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
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot3 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'design/components/TableRow/native/TableRadioRow.native.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: TableRadioRow
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            michal = report.value;
            var _closure2_slot0 = michal;
            kiloes = report.label;
            backup = report.subLabel;
            yankee = report.disabled;
            tangon = undefined;
            if(!(yankee === tangon)) { _fun00002_ip = 38; continue _fun00001 }
 36:
            yankee = false;
 38:
            verify = report.accessibilityHint;
            option = report.legacyCompat_selected;
            entity = report.legacyCompat_onPress;
            var _closure2_slot1 = entity;
            zuuluu = {'value': 0, 'label': 0, 'subLabel': 0, 'disabled': 0, 'accessibilityHint': 0, 'legacyCompat_selected': 0, 'legacyCompat_onPress': 0};
            offset = null;
            echoed = zuuluu;
            result = null;
            entity = silentSetPrototypeOf(echoed, result);
            echoed = {};
            result = report;
            output = zuuluu;
            romeon = copyDataProperties(echoed, result, output);
            var _closure2_slot2 = tangon;
            golfie = _closure1_slot2;
            zuuluu = golfie.useContext;
            foxtra = _closure1_slot0;
            sizing = _closure1_slot1;
            entity = 2;
            entity = sizing[entity];
            entity = foxtra.bind(tangon)(entity);
            entity = entity.TableRadioGroupContext;
            zuuluu = zuuluu.bind(golfie)(entity);
            entity = zuuluu.selectedValue;
            zuuluu = zuuluu.onSelect;
            _closure2_slot2 = zuuluu;
            if(!(offset == option)) { _fun00002_ip = 169; continue _fun00001 }
 165:
            option = entity === michal;
 169:
            michal = _closure1_slot0;
            sizing = _closure1_slot1;
            entity = 3;
            zuuluu = sizing[entity];
            golfie = michal.bind(tangon)(zuuluu);
            zuuluu = golfie.getNodeText;
            foxtra = zuuluu.bind(golfie)(kiloes);
            entity = sizing[entity];
            zuuluu = michal.bind(tangon)(entity);
            entity = zuuluu.getNodeText;
            golfie = entity.bind(zuuluu)(backup);
            zuuluu = _closure1_slot3;
            entity = 4;
            entity = sizing[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.TableRow;
            entity = {};
            echoed = entity;
            result = romeon;
            romeon = copyDataProperties(echoed, result);
            sizing = false;
            romeon = 'arrow';
            entity[romeon] = sizing;
            romeon = 'label';
            entity[romeon] = kiloes;
            romeon = 'subLabel';
            entity[romeon] = backup;
            romeon = 'disabled';
            entity[romeon] = yankee;
            romeon = {};
            romeon['disabled'] = yankee;
            romeon['selected'] = option;
            yankee = 'accessibilityState';
            entity[yankee] = romeon;
            romeon = true;
            yankee = 'accessible';
            entity[yankee] = romeon;
            romeon = 'radio';
            yankee = 'accessibilityRole';
            entity[yankee] = romeon;
            offset = offset != golfie;
            romeon = '';
            yankee = romeon;
            if(!offset) { _fun00002_ip = 353; continue _fun00001 }
 350:
            yankee = golfie;
 353:
            golfie = global;
            golfie = golfie.HermesInternal;
            offset = golfie.concat;
            golfie = ', ';
            offset = offset.bind(romeon)(foxtra, golfie, yankee);
            golfie = 'accessibilityLabel';
            entity[golfie] = offset;
            golfie = 'accessibilityHint';
            entity[golfie] = verify;
            golfie = function(argFoo) { // Original name: onPress
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = _closure2_slot1;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00004_ip = 27; continue _fun00003 }
 13:
                    tangon = _closure2_slot1;
                    zuuluu = undefined;
                    michal = argFoo;
                    michal = tangon.bind(zuuluu)(michal);
 27:
                    zuuluu = _closure2_slot2;
                    michal = _closure2_slot0;
                    entity = undefined;
                    michal = zuuluu.bind(entity)(michal);
                    return entity;
                }
            };
            oscard = 'onPress';
            entity[oscard] = golfie;
            golfie = _closure1_slot3;
            oscard = _closure1_slot0;
            verify = _closure1_slot1;
            report = 5;
            report = verify[report];
            report = oscard.bind(tangon)(report);
            oscard = report.FormRadio;
            report = {};
            report['selected'] = option;
            oscard = golfie.bind(tangon)(oscard, report);
            report = 'trailing';
            entity[report] = oscard;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['TableRadioRow'] = michal;
    return entity;
})();