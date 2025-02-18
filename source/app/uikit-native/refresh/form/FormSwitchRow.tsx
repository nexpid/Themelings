// app/uikit-native/refresh/form/FormSwitchRow.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: FormSwitchRow
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            verify = report.onValueChange;
            var _closure2_slot0 = verify;
            offset = report.value;
            var _closure2_slot1 = offset;
            yankee = report.disabled;
            tangon = undefined;
            if(!(yankee === tangon)) { _fun00002_ip = 37; continue _fun00001 }
 35:
            yankee = false;
 37:
            sequen = report.label;
            sizing = report.subLabel;
            golfie = report.accessibilityHint;
            source = report.trailing;
            config = report.numberOfLines;
            option = report.switchProps;
            if(!(option === tangon)) { _fun00002_ip = 78; continue _fun00001 }
 76:
            option = {};
 78:
            zuuluu = {'onValueChange': 0, 'value': 0, 'disabled': 0, 'label': 0, 'subLabel': 0, 'accessibilityHint': 0, 'trailing': 0, 'numberOfLines': 0, 'switchProps': 0};
            update = null;
            target = zuuluu;
            papara = null;
            entity = silentSetPrototypeOf(target, papara);
            entity = 0;
            target = {};
            papara = report;
            cntext = zuuluu;
            kiloes = copyDataProperties(target, papara, cntext);
            var _closure2_slot2 = tangon;
            var _closure2_slot3 = tangon;
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot2;
            michal = 4;
            michal = oscard[michal];
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.isAndroid;
            backup = michal.bind(zuuluu)();
            zuuluu = _closure1_slot4;
            michal = zuuluu.useState;
            oscard = michal.bind(zuuluu)(offset);
            zuuluu = _closure1_slot3;
            michal = 2;
            michal = zuuluu.bind(tangon)(oscard, michal);
            oscard = michal[entity];
            _closure2_slot2 = oscard;
            entity = 1;
            entity = michal[entity];
            _closure2_slot3 = entity;
            foxtra = _closure1_slot4;
            zuuluu = foxtra.useEffect;
            michal = new Array(1);
            michal[0] = offset;
            entity = function() {
                zuuluu = _closure2_slot3;
                michal = _closure2_slot1;
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            entity = zuuluu.bind(foxtra)(entity, michal);
            foxtra = 'string';
            entity = typeof sequen;
            michal = undefined;
            if(!(foxtra === entity)) { _fun00002_ip = 247; continue _fun00001 }
 244:
            michal = sequen;
 247:
            entity = update != michal;
            if(!entity) { _fun00002_ip = 261; continue _fun00001 }
 254:
            zuuluu = typeof sizing;
            entity = foxtra === zuuluu;
 261:
            foxtra = michal;
            if(!entity) { _fun00002_ip = 293; continue _fun00001 }
 267:
            entity = global;
            entity = entity.HermesInternal;
            zuuluu = entity.concat;
            entity = ' ';
            entity = zuuluu.bind(entity)(sizing);
            foxtra = michal + entity;
 293:
            zuuluu = _closure1_slot6;
            ctrled = _closure1_slot1;
            record = _closure1_slot2;
            entity = 5;
            entity = record[entity];
            michal = ctrled.bind(tangon)(entity);
            entity = {};
            target = entity;
            papara = kiloes;
            kiloes = copyDataProperties(target, papara);
            result = _closure1_slot7;
            output = _closure1_slot5;
            kiloes = {};
            echoed = _closure1_slot8;
            echoed = echoed.trailing;
            kiloes['style'] = echoed;
            vacuum = _closure1_slot6;
            echoed = 6;
            echoed = record[echoed];
            ctrled = ctrled.bind(tangon)(echoed);
            echoed = {};
            echoed['numberOfLines'] = config;
            echoed['text'] = sequen;
            ctrled = vacuum.bind(tangon)(ctrled, echoed);
            echoed = new Array(2);
            echoed[0] = ctrled;
            update = update != source;
            if(!update) { _fun00002_ip = 404; continue _fun00001 }
 401:
            update = source;
 404:
            echoed[1] = update;
            kiloes['children'] = echoed;
            output = result.bind(tangon)(output, kiloes);
            kiloes = 'label';
            entity[kiloes] = output;
            kiloes = 'subLabel';
            entity[kiloes] = sizing;
            kiloes = 'disabled';
            entity[kiloes] = yankee;
            kiloes = undefined;
            if(!backup) { _fun00002_ip = 455; continue _fun00001 }
 450:
            kiloes = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot0;
                    tangon = null;
                    michal = tangon != michal;
                    if(!michal) { _fun00004_ip = 24; continue _fun00003 }
 16:
                    zuuluu = _closure2_slot1;
                    michal = tangon != zuuluu;
 24:
                    if(!michal) { _fun00004_ip = 45; continue _fun00003 }
 27:
                    zuuluu = _closure2_slot0;
                    entity = _closure2_slot1;
                    michal = !entity;
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
 45:
                    entity = undefined;
                    return entity;
                }
            };
 455:
            backup = 'onPress';
            entity[backup] = kiloes;
            kiloes = true;
            backup = 'accessible';
            entity[backup] = kiloes;
            backup = function() { // Original name: onAccessibilityTap
                zuuluu = _closure2_slot3;
                entity = _closure2_slot2;
                michal = !entity;
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                michal = global;
                zuuluu = michal.setTimeout;
                michal = function() {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        zuuluu = _closure2_slot0;
                        michal = null;
                        if(!(michal != zuuluu)) { _fun00006_ip = 31; continue _fun00005 }
 13:
                        zuuluu = _closure2_slot0;
                        entity = _closure2_slot2;
                        michal = !entity;
                        entity = undefined;
                        entity = zuuluu.bind(entity)(michal);
 31:
                        entity = undefined;
                        return entity;
                    }
                };
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            romeon = 'onAccessibilityTap';
            entity[romeon] = backup;
            backup = 'switch';
            romeon = 'accessibilityRole';
            entity[romeon] = backup;
            romeon = 'accessibilityLabel';
            entity[romeon] = foxtra;
            romeon = {};
            romeon['disabled'] = yankee;
            romeon['checked'] = oscard;
            oscard = 'accessibilityState';
            entity[oscard] = romeon;
            oscard = 'accessibilityHint';
            entity[oscard] = golfie;
            golfie = _closure1_slot6;
            oscard = _closure1_slot1;
            romeon = _closure1_slot2;
            report = 7;
            report = romeon[report];
            oscard = oscard.bind(tangon)(report);
            report = {};
            report['disabled'] = yankee;
            report['value'] = offset;
            report['onValueChange'] = verify;
            target = report;
            papara = option;
            option = copyDataProperties(target, papara);
            oscard = golfie.bind(tangon)(oscard, report);
            report = 'trailing';
            entity[report] = oscard;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot9 = entity;
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
    tangon = 1;
    golfie = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.View;
    var _closure1_slot5 = golfie;
    option = tangon.StyleSheet;
    tangon = 3;
    golfie = oscard[tangon];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.jsx;
    var _closure1_slot6 = golfie;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsxs;
    var _closure1_slot7 = tangon;
    golfie = option.create;
    tangon = {};
    verify = {'flex': 1, 'flexDirection': 'row', 'width': '100%', 'alignItems': 'center'};
    tangon['trailing'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'uikit-native/refresh/form/FormSwitchRow.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: FormSwitchRowContainer
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            verify = argFoo;
            zuuluu = _closure1_slot4;
            michal = zuuluu.useContext;
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            entity = 8;
            entity = report[entity];
            report = undefined;
            entity = tangon.bind(report)(entity);
            entity = entity.RedesignCompatContext;
            entity = michal.bind(zuuluu)(entity);
            tangon = _closure1_slot6;
            if(entity) { _fun00008_ip = 80; continue _fun00007 }
 56:
            michal = _closure1_slot9;
            entity = {};
            romeon = entity;
            yankee = verify;
            zuuluu = copyDataProperties(romeon, yankee);
            entity = tangon.bind(report)(michal, entity);
            _fun00008_ip = 174; continue _fun00007;
 80:
            zuuluu = _closure1_slot5;
            michal = {};
            golfie = verify.DEPRECATED_style;
            michal['style'] = golfie;
            option = _closure1_slot6;
            golfie = _closure1_slot0;
            offset = _closure1_slot2;
            oscard = 9;
            oscard = offset[oscard];
            oscard = golfie.bind(report)(oscard);
            golfie = oscard.TableSwitchRow;
            oscard = {};
            offset = verify.value;
            oscard['value'] = offset;
            offset = verify.onValueChange;
            oscard['onValueChange'] = offset;
            romeon = oscard;
            yankee = verify;
            verify = copyDataProperties(romeon, yankee);
            oscard = option.bind(report)(golfie, oscard);
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 174:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();