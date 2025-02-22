// app/modules/devtools/native/components/screens/DevToolsTogglesScreen.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    yankee = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar, argBaz) { // Original name: fuzzySearchToggle
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            offset = argBar;
            golfie = argBaz;
            michal = tangon.length;
            entity = 0;
            entity = entity === michal;
            if(entity) { _fun00002_ip = 123; continue _fun00001 }
 23:
            report = _closure1_slot1;
            michal = _closure1_slot2;
            option = 6;
            michal = michal[option];
            oscard = undefined;
            verify = report.bind(oscard)(michal);
            michal = tangon.toLowerCase;
            report = michal.bind(tangon)();
            michal = offset.toLowerCase;
            michal = michal.bind(offset)();
            michal = verify.bind(oscard)(report, michal);
            if(michal) { _fun00002_ip = 120; continue _fun00001 }
 77:
            report = _closure1_slot1;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[option];
            report = report.bind(oscard)(zuuluu);
            zuuluu = tangon.toLowerCase;
            tangon = zuuluu.bind(tangon)();
            zuuluu = golfie.toLowerCase;
            zuuluu = zuuluu.bind(golfie)();
            michal = report.bind(oscard)(tangon, zuuluu);
 120:
            entity = michal;
 123:
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo) { // Original name: ToggleTableRow
        entity = argFoo;
        report = entity.toggleName;
        var _closure2_slot0 = report;
        romeon = entity.description;
        var _closure2_slot1 = romeon;
        offset = entity.value;
        verify = entity.onValueChange;
        tangon = _closure1_slot9;
        golfie = _closure1_slot0;
        yankee = _closure1_slot2;
        entity = 9;
        entity = yankee[entity];
        zuuluu = undefined;
        entity = golfie.bind(zuuluu)(entity);
        michal = entity.TableRow;
        entity = {};
        entity['label'] = romeon;
        romeon = 1;
        entity['labelLineClamp'] = romeon;
        entity['subLabel'] = report;
        entity['subLabelLineClamp'] = romeon;
        option = function() { // Original name: onPress
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 10;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.open;
            michal = {};
            oscard = _closure2_slot1;
            michal['content'] = oscard;
            report = _closure2_slot0;
            michal['key'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        entity['onPress'] = option;
        option = _closure1_slot9;
        oscard = 11;
        oscard = yankee[oscard];
        oscard = golfie.bind(zuuluu)(oscard);
        golfie = oscard.FormSwitch;
        oscard = {};
        oscard['value'] = offset;
        oscard['onValueChange'] = verify;
        oscard = option.bind(zuuluu)(golfie, oscard);
        entity['trailing'] = oscard;
        entity = tangon.bind(zuuluu)(michal, entity, report);
        return entity;
    };
    var _closure1_slot13 = entity;
    entity = function(argFoo, argBar) { // Original name: useFilteredDevTogglesForCategory
        offset = argFoo;
        yankee = argBar;
        var _closure2_slot0 = offset;
        var _closure2_slot1 = yankee;
        option = _closure1_slot0;
        verify = _closure1_slot2;
        michal = 12;
        tangon = verify[michal];
        golfie = undefined;
        oscard = option.bind(golfie)(tangon);
        report = oscard.useStateFromStores;
        zuuluu = _closure1_slot7;
        tangon = new Array(1);
        tangon[0] = zuuluu;
        zuuluu = new Array(2);
        zuuluu[0] = yankee;
        zuuluu[1] = offset;
        michal = verify[michal];
        michal = option.bind(golfie)(michal);
        romeon = michal.statesWillNeverBeEqual;
        backup = function() {
            zuuluu = _closure1_slot7;
            michal = zuuluu.allByCategory;
            entity = _closure2_slot0;
            zuuluu = michal.bind(zuuluu)(entity);
            michal = zuuluu.filter;
            entity = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    golfie = argFoo;
                    michal = golfie[Symbol.iterator];
                    golfie = michal().next;
                    option = undefined;
                    zuuluu = undefined;
                    oscard = undefined;
                    verify = golfie().value;
                    offset = michal;
                    offset = offset === option;
                    zuuluu = offset;
                    if(offset) { _fun00004_ip = 32; continue _fun00003 }
 29:
                    oscard = verify;
 32:
                    report = oscard;
                    oscard = undefined;
                    verify = zuuluu;
                    if(verify) { _fun00004_ip = 63; continue _fun00003 }
 43:
                    verify = golfie().value;
                    offset = michal;
                    offset = offset === option;
                    zuuluu = offset;
                    if(offset) { _fun00004_ip = 63; continue _fun00003 }
 60:
                    oscard = verify;
 63:
                    oscard = undefined;
                    verify = zuuluu;
                    if(verify) { _fun00004_ip = 91; continue _fun00003 }
 71:
                    golfie = golfie().value;
                    verify = michal;
                    verify = verify === option;
                    zuuluu = verify;
                    if(verify) { _fun00004_ip = 91; continue _fun00003 }
 88:
                    oscard = golfie;
 91: // try_start_0
                    tangon = oscard.label;
 96: // try_end0
                    oscard = zuuluu;
                    if(oscard) { _fun00004_ip = 105; continue _fun00003 }
 102:
                    michal.return();
 105:
                    golfie = _closure1_slot12;
                    oscard = _closure2_slot1;
                    tangon = golfie.bind(option)(oscard, report, tangon);
                    return tangon;
 128: // catch_target0
                    CatchBlockStart(arg_register=0);
                    _fun00004_ip = 134; continue _fun00003;
 132:
                    CatchBlockStart(arg_register=0);
 134:
                    if(zuuluu) { _fun00004_ip = 140; continue _fun00003 }
 137:
                    michal.return();
 140:
                    throw entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        sizing = oscard;
        kiloes = tangon;
        foxtra = zuuluu;
        entity = sizing[report](kiloes, backup, foxtra, romeon, yankee);
        return entity;
    };
    var _closure1_slot14 = entity;
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
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    golfie = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ScrollView;
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    golfie = oscard[tangon];
    golfie = yankee.bind(entity)(golfie);
    var _closure1_slot7 = golfie;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.DevSettingsCategory;
    var _closure1_slot8 = tangon;
    tangon = 5;
    golfie = oscard[tangon];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.jsx;
    var _closure1_slot9 = golfie;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsxs;
    var _closure1_slot10 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {};
    offset = 8;
    romeon = oscard[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.colors;
    romeon = romeon.BACKGROUND_PRIMARY;
    verify['backgroundColor'] = romeon;
    romeon = oscard[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.spacing;
    romeon = romeon.PX_16;
    verify['paddingHorizontal'] = romeon;
    tangon['wrap'] = verify;
    verify = {};
    offset = oscard[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.spacing;
    offset = offset.PX_16;
    verify['paddingVertical'] = offset;
    tangon['container'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot11 = tangon;
    tangon = 20;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/devtools/native/components/screens/DevToolsTogglesScreen.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: DevToolsTogglesScreen
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = _closure1_slot11;
            tangon = undefined;
            report = entity.bind(tangon)();
            offset = _closure1_slot1;
            record = _closure1_slot2;
            entity = 13;
            entity = record[entity];
            entity = offset.bind(tangon)(entity);
            option = entity.bind(tangon)();
            zuuluu = _closure1_slot4;
            michal = zuuluu.useState;
            entity = '';
            zuuluu = michal.bind(zuuluu)(entity);
            michal = _closure1_slot3;
            entity = 2;
            michal = michal.bind(tangon)(zuuluu, entity);
            yankee = 0;
            zuuluu = michal[yankee];
            var _closure2_slot0 = zuuluu;
            entity = 1;
            config = michal[entity];
            echoed = _closure1_slot0;
            entity = 12;
            michal = record[entity];
            backup = echoed.bind(tangon)(michal);
            romeon = backup.useStateFromStores;
            michal = _closure1_slot6;
            verify = new Array(1);
            verify[0] = michal;
            golfie = new Array(1);
            golfie[0] = zuuluu;
            entity = record[entity];
            entity = echoed.bind(tangon)(entity);
            cntext = entity.statesWillNeverBeEqual;
            target = function() {
                michal = _closure1_slot6;
                entity = michal.allWithDescriptions;
                zuuluu = entity.bind(michal)();
                michal = zuuluu.filter;
                entity = function(argFoo) {
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        oscard = argFoo;
                        entity = oscard[Symbol.iterator];
                        oscard = entity().next;
                        zuuluu = oscard().value;
                        michal = entity;
                        report = undefined;
                        michal = michal === report;
                        tangon = undefined;
                        if(michal) { _fun00008_ip = 27; continue _fun00007 }
 24:
                        tangon = zuuluu;
 27:
                        if(michal) { _fun00008_ip = 41; continue _fun00007 }
 30:
                        zuuluu = oscard().value;
                        zuuluu = entity;
                        michal = zuuluu === report;
 41:
                        zuuluu = undefined;
                        if(michal) { _fun00008_ip = 71; continue _fun00007 }
 46:
                        golfie = oscard().value;
                        oscard = entity;
                        oscard = oscard === report;
                        zuuluu = undefined;
                        michal = oscard;
                        if(oscard) { _fun00008_ip = 71; continue _fun00007 }
 65:
                        zuuluu = golfie;
                        michal = oscard;
 71:
                        if(michal) { _fun00008_ip = 77; continue _fun00007 }
 74:
                        entity.return();
 77:
                        michal = _closure1_slot12;
                        entity = _closure2_slot0;
                        entity = michal.bind(report)(entity, tangon, zuuluu);
                        return entity;
                    }
                };
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            sierra = backup;
            status = verify;
            papara = golfie;
            vacuum = sierra[romeon](status, target, papara, cntext, record);
            michal = _closure1_slot14;
            entity = _closure1_slot8;
            golfie = entity.OVERLAYS;
            source = michal.bind(tangon)(golfie, zuuluu);
            golfie = entity.MESSAGING;
            update = michal.bind(tangon)(golfie, zuuluu);
            golfie = entity.REPORTING;
            ctrled = michal.bind(tangon)(golfie, zuuluu);
            entity = entity.APP_COLLECTIONS;
            kiloes = michal.bind(tangon)(entity, zuuluu);
            zuuluu = _closure1_slot10;
            michal = _closure1_slot5;
            entity = {};
            golfie = report.wrap;
            entity['style'] = golfie;
            golfie = report.container;
            report = new Array(2);
            report[0] = golfie;
            golfie = {};
            verify = 8;
            verify = record[verify];
            verify = offset.bind(tangon)(verify);
            verify = verify.spacing;
            verify = verify.PX_16;
            option = option.bottom;
            option = verify + option;
            golfie['paddingBottom'] = option;
            report[1] = golfie;
            entity['contentContainerStyle'] = report;
            report = 14;
            report = record[report];
            report = echoed.bind(tangon)(report);
            golfie = report.Stack;
            report = {};
            option = 16;
            report['spacing'] = option;
            backup = 15;
            option = record[backup];
            option = echoed.bind(tangon)(option);
            verify = option.TableRowGroup;
            option = {};
            offset = 'Actions';
            option['title'] = offset;
            output = _closure1_slot9;
            romeon = 9;
            offset = record[romeon];
            offset = echoed.bind(tangon)(offset);
            sizing = offset.TableRow;
            offset = {'label': 'Clear All', 'variant': 'danger', 'onPress': null, 'arrow': true};
            result = function() { // Original name: onPress
                zuuluu = _closure1_slot0;
                tangon = _closure1_slot2;
                entity = 16;
                michal = tangon[entity];
                entity = undefined;
                report = zuuluu.bind(entity)(michal);
                michal = report.clearAll;
                michal = michal.bind(report)();
                michal = 17;
                michal = tangon[michal];
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.clearAll;
                michal = michal.bind(zuuluu)();
                return entity;
            };
            offset['onPress'] = result;
            sizing = output.bind(tangon)(sizing, offset);
            offset = new Array(2);
            offset[0] = sizing;
            output = _closure1_slot9;
            romeon = record[romeon];
            romeon = echoed.bind(tangon)(romeon);
            sizing = romeon.TableRow;
            romeon = {};
            sequen = _closure1_slot9;
            result = 18;
            result = record[result];
            result = echoed.bind(tangon)(result);
            echoed = result.SearchField;
            result = {'size': 'md', 'placeholder': 'Search design toggles'};
            result['onChange'] = config;
            result = sequen.bind(tangon)(echoed, result);
            romeon['label'] = result;
            romeon = output.bind(tangon)(sizing, romeon);
            offset[1] = romeon;
            option['children'] = offset;
            verify = zuuluu.bind(tangon)(verify, option);
            option = new Array(6);
            option[0] = verify;
            verify = vacuum.length;
            romeon = verify > yankee;
            offset = null;
            if(!romeon) { _fun00006_ip = 596; continue _fun00005 }
 530:
            output = _closure1_slot9;
            sizing = _closure1_slot0;
            romeon = _closure1_slot2;
            romeon = romeon[backup];
            romeon = sizing.bind(tangon)(romeon);
            sizing = romeon.TableRowGroup;
            romeon = {};
            result = 'Design Toggles';
            romeon['title'] = result;
            echoed = vacuum.map;
            result = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zuuluu = argFoo;
                    entity = zuuluu[Symbol.iterator];
                    zuuluu = entity().next;
                    golfie = zuuluu().value;
                    michal = entity;
                    report = undefined;
                    michal = michal === report;
                    tangon = undefined;
                    if(michal) { _fun00010_ip = 29; continue _fun00009 }
 26:
                    tangon = golfie;
 29:
                    var _closure3_slot0 = tangon;
                    golfie = undefined;
                    if(michal) { _fun00010_ip = 63; continue _fun00009 }
 38:
                    verify = zuuluu().value;
                    option = entity;
                    option = option === report;
                    golfie = undefined;
                    michal = option;
                    if(option) { _fun00010_ip = 63; continue _fun00009 }
 57:
                    golfie = verify;
                    michal = option;
 63:
                    option = undefined;
                    if(michal) { _fun00010_ip = 93; continue _fun00009 }
 68:
                    verify = zuuluu().value;
                    zuuluu = entity;
                    zuuluu = zuuluu === report;
                    option = undefined;
                    michal = zuuluu;
                    if(zuuluu) { _fun00010_ip = 93; continue _fun00009 }
 87:
                    option = verify;
                    michal = zuuluu;
 93:
                    if(michal) { _fun00010_ip = 99; continue _fun00009 }
 96:
                    entity.return();
 99:
                    zuuluu = _closure1_slot9;
                    michal = _closure1_slot13;
                    entity = {};
                    entity['toggleName'] = tangon;
                    entity['description'] = option;
                    entity['value'] = golfie;
                    oscard = function(argFoo) { // Original name: onValueChange
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 16;
                        michal = michal[entity];
                        entity = undefined;
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.toggle;
                        michal = _closure3_slot0;
                        entity = argFoo;
                        entity = zuuluu.bind(tangon)(michal, entity);
                        return entity;
                    };
                    entity['onValueChange'] = oscard;
                    entity = zuuluu.bind(report)(michal, entity, tangon);
                    return entity;
                }
            };
            result = echoed.bind(vacuum)(result);
            romeon['children'] = result;
            offset = output.bind(tangon)(sizing, romeon);
 596:
            option[1] = offset;
            offset = ctrled.length;
            romeon = offset > yankee;
            offset = null;
            if(!romeon) { _fun00006_ip = 680; continue _fun00005 }
 614:
            output = _closure1_slot9;
            sizing = _closure1_slot0;
            romeon = _closure1_slot2;
            romeon = romeon[backup];
            romeon = sizing.bind(tangon)(romeon);
            sizing = romeon.TableRowGroup;
            romeon = {};
            result = 'Reporting Toggles';
            romeon['title'] = result;
            echoed = ctrled.map;
            result = function(argFoo) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    oscard = argFoo;
                    michal = oscard[Symbol.iterator];
                    oscard = michal().next;
                    option = undefined;
                    zuuluu = undefined;
                    report = undefined;
                    golfie = oscard().value;
                    romeon = michal;
                    romeon = romeon === option;
                    zuuluu = romeon;
                    if(romeon) { _fun00012_ip = 34; continue _fun00011 }
 31:
                    report = golfie;
 34:
                    golfie = report;
                    tangon = golfie;
                    var _closure3_slot0 = golfie;
                    report = undefined;
                    golfie = zuuluu;
                    if(golfie) { _fun00012_ip = 72; continue _fun00011 }
 52:
                    golfie = oscard().value;
                    romeon = michal;
                    romeon = romeon === option;
                    zuuluu = romeon;
                    if(romeon) { _fun00012_ip = 72; continue _fun00011 }
 69:
                    report = golfie;
 72:
                    offset = report;
                    report = undefined;
                    golfie = zuuluu;
                    if(golfie) { _fun00012_ip = 103; continue _fun00011 }
 83:
                    oscard = oscard().value;
                    golfie = michal;
                    golfie = golfie === option;
                    zuuluu = golfie;
                    if(golfie) { _fun00012_ip = 103; continue _fun00011 }
 100:
                    report = oscard;
 103: // try_start_0
                    yankee = report.label;
 108: // try_end0
                    report = zuuluu;
                    if(report) { _fun00012_ip = 117; continue _fun00011 }
 114:
                    michal.return();
 117:
                    golfie = _closure1_slot9;
                    oscard = _closure1_slot13;
                    report = {};
                    report['toggleName'] = tangon;
                    report['description'] = yankee;
                    report['value'] = offset;
                    verify = function(argFoo) { // Original name: onValueChange
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 17;
                        michal = michal[entity];
                        entity = undefined;
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.toggle;
                        michal = _closure3_slot0;
                        entity = argFoo;
                        entity = zuuluu.bind(tangon)(michal, entity);
                        return entity;
                    };
                    report['onValueChange'] = verify;
                    tangon = golfie.bind(option)(oscard, report, tangon);
                    return tangon;
 164: // catch_target0
                    CatchBlockStart(arg_register=0);
                    _fun00012_ip = 170; continue _fun00011;
 168:
                    CatchBlockStart(arg_register=0);
 170:
                    if(zuuluu) { _fun00012_ip = 176; continue _fun00011 }
 173:
                    michal.return();
 176:
                    throw entity;
                }
            };
            result = echoed.bind(ctrled)(result);
            romeon['children'] = result;
            offset = output.bind(tangon)(sizing, romeon);
 680:
            option[2] = offset;
            offset = source.length;
            romeon = offset > yankee;
            offset = null;
            if(!romeon) { _fun00006_ip = 764; continue _fun00005 }
 698:
            output = _closure1_slot9;
            sizing = _closure1_slot0;
            romeon = _closure1_slot2;
            romeon = romeon[backup];
            romeon = sizing.bind(tangon)(romeon);
            sizing = romeon.TableRowGroup;
            romeon = {};
            result = 'Dev Overlays';
            romeon['title'] = result;
            echoed = source.map;
            result = function(argFoo) {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    oscard = argFoo;
                    michal = oscard[Symbol.iterator];
                    oscard = michal().next;
                    option = undefined;
                    zuuluu = undefined;
                    report = undefined;
                    golfie = oscard().value;
                    romeon = michal;
                    romeon = romeon === option;
                    zuuluu = romeon;
                    if(romeon) { _fun00014_ip = 34; continue _fun00013 }
 31:
                    report = golfie;
 34:
                    golfie = report;
                    tangon = golfie;
                    var _closure3_slot0 = golfie;
                    report = undefined;
                    golfie = zuuluu;
                    if(golfie) { _fun00014_ip = 72; continue _fun00013 }
 52:
                    golfie = oscard().value;
                    romeon = michal;
                    romeon = romeon === option;
                    zuuluu = romeon;
                    if(romeon) { _fun00014_ip = 72; continue _fun00013 }
 69:
                    report = golfie;
 72:
                    offset = report;
                    report = undefined;
                    golfie = zuuluu;
                    if(golfie) { _fun00014_ip = 103; continue _fun00013 }
 83:
                    oscard = oscard().value;
                    golfie = michal;
                    golfie = golfie === option;
                    zuuluu = golfie;
                    if(golfie) { _fun00014_ip = 103; continue _fun00013 }
 100:
                    report = oscard;
 103: // try_start_0
                    yankee = report.label;
 108: // try_end0
                    report = zuuluu;
                    if(report) { _fun00014_ip = 117; continue _fun00013 }
 114:
                    michal.return();
 117:
                    golfie = _closure1_slot9;
                    oscard = _closure1_slot13;
                    report = {};
                    report['toggleName'] = tangon;
                    report['description'] = yankee;
                    report['value'] = offset;
                    verify = function(argFoo) { // Original name: onValueChange
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 17;
                        michal = michal[entity];
                        entity = undefined;
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.toggle;
                        michal = _closure3_slot0;
                        entity = argFoo;
                        entity = zuuluu.bind(tangon)(michal, entity);
                        return entity;
                    };
                    report['onValueChange'] = verify;
                    tangon = golfie.bind(option)(oscard, report, tangon);
                    return tangon;
 164: // catch_target0
                    CatchBlockStart(arg_register=0);
                    _fun00014_ip = 170; continue _fun00013;
 168:
                    CatchBlockStart(arg_register=0);
 170:
                    if(zuuluu) { _fun00014_ip = 176; continue _fun00013 }
 173:
                    michal.return();
 176:
                    throw entity;
                }
            };
            result = echoed.bind(source)(result);
            romeon['children'] = result;
            offset = output.bind(tangon)(sizing, romeon);
 764:
            option[3] = offset;
            offset = update.length;
            romeon = offset > yankee;
            offset = null;
            if(!romeon) { _fun00006_ip = 848; continue _fun00005 }
 782:
            output = _closure1_slot9;
            sizing = _closure1_slot0;
            romeon = _closure1_slot2;
            romeon = romeon[backup];
            romeon = sizing.bind(tangon)(romeon);
            sizing = romeon.TableRowGroup;
            romeon = {};
            result = 'Messaging Toggles';
            romeon['title'] = result;
            echoed = update.map;
            result = function(argFoo) {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    oscard = argFoo;
                    michal = oscard[Symbol.iterator];
                    oscard = michal().next;
                    option = undefined;
                    zuuluu = undefined;
                    report = undefined;
                    golfie = oscard().value;
                    romeon = michal;
                    romeon = romeon === option;
                    zuuluu = romeon;
                    if(romeon) { _fun00016_ip = 34; continue _fun00015 }
 31:
                    report = golfie;
 34:
                    golfie = report;
                    tangon = golfie;
                    var _closure3_slot0 = golfie;
                    report = undefined;
                    golfie = zuuluu;
                    if(golfie) { _fun00016_ip = 72; continue _fun00015 }
 52:
                    golfie = oscard().value;
                    romeon = michal;
                    romeon = romeon === option;
                    zuuluu = romeon;
                    if(romeon) { _fun00016_ip = 72; continue _fun00015 }
 69:
                    report = golfie;
 72:
                    offset = report;
                    report = undefined;
                    golfie = zuuluu;
                    if(golfie) { _fun00016_ip = 103; continue _fun00015 }
 83:
                    oscard = oscard().value;
                    golfie = michal;
                    golfie = golfie === option;
                    zuuluu = golfie;
                    if(golfie) { _fun00016_ip = 103; continue _fun00015 }
 100:
                    report = oscard;
 103: // try_start_0
                    yankee = report.label;
 108: // try_end0
                    report = zuuluu;
                    if(report) { _fun00016_ip = 117; continue _fun00015 }
 114:
                    michal.return();
 117:
                    golfie = _closure1_slot9;
                    oscard = _closure1_slot13;
                    report = {};
                    report['toggleName'] = tangon;
                    report['description'] = yankee;
                    report['value'] = offset;
                    verify = function(argFoo) { // Original name: onValueChange
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 17;
                        michal = michal[entity];
                        entity = undefined;
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.toggle;
                        michal = _closure3_slot0;
                        entity = argFoo;
                        entity = zuuluu.bind(tangon)(michal, entity);
                        return entity;
                    };
                    report['onValueChange'] = verify;
                    tangon = golfie.bind(option)(oscard, report, tangon);
                    return tangon;
 164: // catch_target0
                    CatchBlockStart(arg_register=0);
                    _fun00016_ip = 170; continue _fun00015;
 168:
                    CatchBlockStart(arg_register=0);
 170:
                    if(zuuluu) { _fun00016_ip = 176; continue _fun00015 }
 173:
                    michal.return();
 176:
                    throw entity;
                }
            };
            result = echoed.bind(update)(result);
            romeon['children'] = result;
            offset = output.bind(tangon)(sizing, romeon);
 848:
            option[4] = offset;
            offset = kiloes.length;
            offset = offset > yankee;
            verify = null;
            if(!offset) { _fun00006_ip = 932; continue _fun00005 }
 866:
            romeon = _closure1_slot9;
            yankee = _closure1_slot0;
            offset = _closure1_slot2;
            offset = offset[backup];
            offset = yankee.bind(tangon)(offset);
            yankee = offset.TableRowGroup;
            offset = {};
            backup = 'App Collections Toggles';
            offset['title'] = backup;
            backup = kiloes.map;
            foxtra = function(argFoo) {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    oscard = argFoo;
                    michal = oscard[Symbol.iterator];
                    oscard = michal().next;
                    option = undefined;
                    zuuluu = undefined;
                    report = undefined;
                    golfie = oscard().value;
                    romeon = michal;
                    romeon = romeon === option;
                    zuuluu = romeon;
                    if(romeon) { _fun00018_ip = 34; continue _fun00017 }
 31:
                    report = golfie;
 34:
                    golfie = report;
                    tangon = golfie;
                    var _closure3_slot0 = golfie;
                    report = undefined;
                    golfie = zuuluu;
                    if(golfie) { _fun00018_ip = 72; continue _fun00017 }
 52:
                    golfie = oscard().value;
                    romeon = michal;
                    romeon = romeon === option;
                    zuuluu = romeon;
                    if(romeon) { _fun00018_ip = 72; continue _fun00017 }
 69:
                    report = golfie;
 72:
                    offset = report;
                    report = undefined;
                    golfie = zuuluu;
                    if(golfie) { _fun00018_ip = 103; continue _fun00017 }
 83:
                    oscard = oscard().value;
                    golfie = michal;
                    golfie = golfie === option;
                    zuuluu = golfie;
                    if(golfie) { _fun00018_ip = 103; continue _fun00017 }
 100:
                    report = oscard;
 103: // try_start_0
                    yankee = report.label;
 108: // try_end0
                    report = zuuluu;
                    if(report) { _fun00018_ip = 117; continue _fun00017 }
 114:
                    michal.return();
 117:
                    golfie = _closure1_slot9;
                    oscard = _closure1_slot13;
                    report = {};
                    report['toggleName'] = tangon;
                    report['description'] = yankee;
                    report['value'] = offset;
                    verify = function(argFoo) { // Original name: onValueChange
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 17;
                        michal = michal[entity];
                        entity = undefined;
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.toggle;
                        michal = _closure3_slot0;
                        entity = argFoo;
                        entity = zuuluu.bind(tangon)(michal, entity);
                        return entity;
                    };
                    report['onValueChange'] = verify;
                    tangon = golfie.bind(option)(oscard, report, tangon);
                    return tangon;
 164: // catch_target0
                    CatchBlockStart(arg_register=0);
                    _fun00018_ip = 170; continue _fun00017;
 168:
                    CatchBlockStart(arg_register=0);
 170:
                    if(zuuluu) { _fun00018_ip = 176; continue _fun00017 }
 173:
                    michal.return();
 176:
                    throw entity;
                }
            };
            foxtra = backup.bind(kiloes)(foxtra);
            offset['children'] = foxtra;
            verify = romeon.bind(tangon)(yankee, offset);
 932:
            option[5] = verify;
            report['children'] = option;
            golfie = zuuluu.bind(tangon)(golfie, report);
            report = new Array(2);
            report[0] = golfie;
            option = _closure1_slot9;
            golfie = _closure1_slot1;
            verify = _closure1_slot2;
            oscard = 19;
            oscard = verify[oscard];
            golfie = golfie.bind(tangon)(oscard);
            oscard = {};
            oscard = option.bind(tangon)(golfie, oscard);
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();