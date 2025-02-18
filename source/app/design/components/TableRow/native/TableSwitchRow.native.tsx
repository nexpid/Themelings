// app/design/components/TableRow/native/TableSwitchRow.native.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
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
    tangon = argBaz;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot2 = tangon;
    tangon = 1;
    golfie = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot4 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'design/components/TableRow/native/TableSwitchRow.native.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: TableSwitchRow
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            offset = report.value;
            var _closure2_slot0 = offset;
            entity = report.onValueChange;
            var _closure2_slot1 = entity;
            result = report.label;
            sizing = report.subLabel;
            option = report.disabled;
            tangon = undefined;
            if(!(option === tangon)) { _fun00002_ip = 48; continue _fun00001 }
 46:
            option = false;
 48:
            foxtra = report.accessibilityHint;
            zuuluu = {'value': 0, 'onValueChange': 0, 'label': 0, 'subLabel': 0, 'disabled': 0, 'accessibilityHint': 0};
            backup = null;
            sequen = zuuluu;
            vacuum = null;
            entity = silentSetPrototypeOf(sequen, vacuum);
            entity = 0;
            sequen = {};
            vacuum = report;
            ctrled = zuuluu;
            kiloes = copyDataProperties(sequen, vacuum, ctrled);
            var _closure2_slot2 = tangon;
            michal = _closure1_slot0;
            echoed = _closure1_slot1;
            zuuluu = 3;
            zuuluu = echoed[zuuluu];
            golfie = michal.bind(tangon)(zuuluu);
            zuuluu = golfie.isAndroid;
            golfie = zuuluu.bind(golfie)();
            verify = function() { // Original name: handleOnPress
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = _closure2_slot1;
                    entity = null;
                    zuuluu = entity == zuuluu;
                    tangon = undefined;
                    entity = undefined;
                    if(zuuluu) { _fun00004_ip = 36; continue _fun00003 }
 20:
                    zuuluu = _closure2_slot1;
                    michal = _closure2_slot0;
                    michal = !michal;
                    entity = zuuluu.bind(tangon)(michal);
 36:
                    return entity;
                }
            };
            zuuluu = 4;
            yankee = echoed[zuuluu];
            romeon = michal.bind(tangon)(yankee);
            yankee = romeon.getNodeText;
            output = yankee.bind(romeon)(result);
            zuuluu = echoed[zuuluu];
            yankee = michal.bind(tangon)(zuuluu);
            zuuluu = yankee.getNodeText;
            romeon = zuuluu.bind(yankee)(sizing);
            source = _closure1_slot3;
            zuuluu = source.useState;
            update = zuuluu.bind(source)(offset);
            yankee = _closure1_slot2;
            zuuluu = 2;
            zuuluu = yankee.bind(tangon)(update, zuuluu);
            yankee = zuuluu[entity];
            entity = 1;
            entity = zuuluu[entity];
            _closure2_slot2 = entity;
            update = source.useEffect;
            zuuluu = new Array(1);
            zuuluu[0] = offset;
            entity = function() {
                zuuluu = _closure2_slot2;
                michal = _closure2_slot0;
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            entity = update.bind(source)(entity, zuuluu);
            zuuluu = _closure1_slot4;
            entity = 5;
            entity = echoed[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.TableRow;
            entity = {};
            sequen = entity;
            vacuum = kiloes;
            kiloes = copyDataProperties(sequen, vacuum);
            echoed = false;
            kiloes = 'arrow';
            entity[kiloes] = echoed;
            kiloes = 'label';
            entity[kiloes] = result;
            kiloes = 'subLabel';
            entity[kiloes] = sizing;
            kiloes = 'disabled';
            entity[kiloes] = option;
            kiloes = {};
            kiloes['disabled'] = option;
            kiloes['checked'] = yankee;
            yankee = 'accessibilityState';
            entity[yankee] = kiloes;
            yankee = true;
            kiloes = 'accessible';
            entity[kiloes] = yankee;
            sizing = 'switch';
            kiloes = 'accessibilityRole';
            entity[kiloes] = sizing;
            backup = backup != romeon;
            sizing = '';
            kiloes = sizing;
            if(!backup) { _fun00002_ip = 376; continue _fun00001 }
 373:
            kiloes = romeon;
 376:
            romeon = global;
            romeon = romeon.HermesInternal;
            backup = romeon.concat;
            romeon = ', ';
            backup = backup.bind(sizing)(output, romeon, kiloes);
            romeon = 'accessibilityLabel';
            entity[romeon] = backup;
            romeon = 'accessibilityHint';
            entity[romeon] = foxtra;
            romeon = undefined;
            if(!golfie) { _fun00002_ip = 428; continue _fun00001 }
 425:
            romeon = verify;
 428:
            golfie = 'onPress';
            entity[golfie] = romeon;
            golfie = function() { // Original name: onAccessibilityTap
                zuuluu = _closure2_slot2;
                entity = _closure2_slot0;
                michal = !entity;
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                michal = global;
                zuuluu = michal.setTimeout;
                michal = function() {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        zuuluu = _closure2_slot1;
                        michal = null;
                        if(!(michal != zuuluu)) { _fun00006_ip = 31; continue _fun00005 }
 13:
                        zuuluu = _closure2_slot1;
                        entity = _closure2_slot0;
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
            oscard = 'onAccessibilityTap';
            entity[oscard] = golfie;
            golfie = _closure1_slot4;
            oscard = _closure1_slot0;
            romeon = _closure1_slot1;
            report = 6;
            report = romeon[report];
            report = oscard.bind(tangon)(report);
            oscard = report.FormSwitch;
            report = {};
            report['aria-hidden'] = yankee;
            report['value'] = offset;
            report['onValueChange'] = verify;
            report['disabled'] = option;
            oscard = golfie.bind(tangon)(oscard, report);
            report = 'trailing';
            entity[report] = oscard;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['TableSwitchRow'] = michal;
    return entity;
})();