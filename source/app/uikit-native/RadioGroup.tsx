// app/uikit-native/RadioGroup.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    golfie = argBar;
    backup = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = backup;
    var _closure1_slot1 = option;
    entity = function(argFoo) { // Original name: RadioBar
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            kiloes = entity.checked;
            report = entity.option;
            foxtra = entity.style;
            golfie = entity.size;
            verify = entity.disabled;
            offset = entity.indicatorLeft;
            option = entity.showIndicator;
            backup = entity.onPress;
            michal = _closure1_slot9;
            tangon = undefined;
            yankee = michal.bind(tangon)();
            oscard = _closure1_slot5;
            zuuluu = _closure1_slot14;
            michal = {};
            michal['size'] = golfie;
            michal['active'] = kiloes;
            golfie = oscard.bind(tangon)(zuuluu, michal);
            if(kiloes) { _fun00002_ip = 96; continue _fun00001 }
 88:
            romeon = yankee.collapsibleBackground;
            _fun00002_ip = 102; continue _fun00001;
 96:
            romeon = yankee.collapsibleBackgroundSelected;
 102:
            zuuluu = _closure1_slot5;
            michal = _closure1_slot0;
            oscard = _closure1_slot1;
            entity = 7;
            entity = oscard[entity];
            michal = michal.bind(tangon)(entity);
            entity = {};
            oscard = 'radio';
            entity['accessibilityRole'] = oscard;
            oscard = {};
            oscard['selected'] = kiloes;
            oscard['disabled'] = verify;
            entity['accessibilityState'] = oscard;
            entity['disabled'] = verify;
            oscard = undefined;
            if(verify) { _fun00002_ip = 164; continue _fun00001 }
 161:
            oscard = backup;
 164:
            entity['onPress'] = oscard;
            oscard = new Array(3);
            oscard[0] = foxtra;
            if(!verify) { _fun00002_ip = 184; continue _fun00001 }
 179:
            verify = yankee.disabled;
 184:
            oscard[1] = verify;
            yankee = report.collapsibleContent;
            verify = null;
            yankee = verify != yankee;
            if(!yankee) { _fun00002_ip = 206; continue _fun00001 }
 203:
            yankee = romeon;
 206:
            oscard[2] = yankee;
            entity['DEPRECATED_style'] = oscard;
            oscard = report.name;
            entity['label'] = oscard;
            oscard = report.desc;
            entity['subLabel'] = oscard;
            oscard = null;
            if(offset) { _fun00002_ip = 248; continue _fun00001 }
 240:
            oscard = null;
            if(!option) { _fun00002_ip = 248; continue _fun00001 }
 245:
            oscard = golfie;
 248:
            entity['trailing'] = oscard;
            oscard = report.leading;
            if(!(verify != oscard)) { _fun00002_ip = 271; continue _fun00001 }
 263:
            report = report.leading;
            _fun00002_ip = 287; continue _fun00001;
 271:
            oscard = null;
            if(!offset) { _fun00002_ip = 284; continue _fun00001 }
 276:
            oscard = null;
            if(!option) { _fun00002_ip = 284; continue _fun00001 }
 281:
            oscard = golfie;
 284:
            report = oscard;
 287:
            entity['leading'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    michal = function(argFoo) { // Original name: RadioItem
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            yankee = entity.option;
            var _closure2_slot0 = yankee;
            romeon = entity.checked;
            var _closure2_slot1 = romeon;
            kiloes = entity.style;
            var _closure2_slot2 = kiloes;
            backup = entity.size;
            var _closure2_slot3 = backup;
            foxtra = entity.disabled;
            golfie = entity.indicatorLeft;
            var _closure2_slot4 = golfie;
            tangon = entity.showIndicator;
            var _closure2_slot5 = tangon;
            entity = entity.onPress;
            var _closure2_slot6 = entity;
            report = undefined;
            var _closure2_slot8 = report;
            entity = _closure1_slot9;
            offset = entity.bind(report)();
            option = function(argFoo) { // Original name: handlePress
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    michal = argFoo;
                    entity = michal.preventDefault;
                    entity = entity.bind(michal)();
                    zuuluu = _closure2_slot6;
                    entity = null;
                    zuuluu = entity == zuuluu;
                    tangon = undefined;
                    entity = undefined;
                    if(zuuluu) { _fun00006_ip = 46; continue _fun00005 }
 33:
                    zuuluu = _closure2_slot6;
                    michal = _closure2_slot0;
                    entity = zuuluu.bind(tangon)(michal);
 46:
                    return entity;
                }
            };
            var _closure2_slot7 = option;
            if(foxtra) { _fun00004_ip = 111; continue _fun00003 }
 106:
            foxtra = yankee.disabled;
 111:
            _closure2_slot8 = foxtra;
            michal = yankee.collapsibleContent;
            entity = null;
            if(!(entity == michal)) { _fun00004_ip = 187; continue _fun00003 }
 127:
            zuuluu = _closure1_slot5;
            michal = _closure1_slot15;
            entity = {};
            entity['option'] = yankee;
            entity['checked'] = romeon;
            entity['style'] = kiloes;
            entity['size'] = backup;
            foxtra = !foxtra;
            foxtra = !foxtra;
            entity['disabled'] = foxtra;
            entity['onPress'] = option;
            entity['indicatorLeft'] = golfie;
            entity['showIndicator'] = tangon;
            entity = zuuluu.bind(report)(michal, entity);
            _fun00004_ip = 284; continue _fun00003;
 187:
            tangon = _closure1_slot5;
            zuuluu = _closure1_slot3;
            michal = {};
            golfie = offset.collapsibleContainer;
            michal['style'] = golfie;
            option = _closure1_slot5;
            golfie = _closure1_slot0;
            foxtra = _closure1_slot1;
            oscard = 8;
            oscard = foxtra[oscard];
            golfie = golfie.bind(report)(oscard);
            oscard = {};
            oscard['isExpanded'] = romeon;
            yankee = yankee.collapsibleContent;
            oscard['collapsibleContent'] = yankee;
            offset = offset.collapsibleStyle;
            oscard['style'] = offset;
            verify = function(argFoo) { // Original name: children
                entity = argFoo;
                entity = entity.onPress;
                var _closure3_slot0 = entity;
                tangon = _closure1_slot5;
                zuuluu = _closure1_slot15;
                michal = {};
                oscard = _closure2_slot0;
                michal['option'] = oscard;
                oscard = _closure2_slot1;
                michal['checked'] = oscard;
                oscard = _closure2_slot2;
                michal['style'] = oscard;
                oscard = _closure2_slot3;
                michal['size'] = oscard;
                oscard = _closure2_slot8;
                oscard = !oscard;
                oscard = !oscard;
                michal['disabled'] = oscard;
                report = function(argFoo) { // Original name: onPress
                    zuuluu = argFoo;
                    michal = _closure2_slot7;
                    entity = undefined;
                    michal = michal.bind(entity)(zuuluu);
                    michal = _closure3_slot0;
                    michal = michal.bind(entity)(zuuluu);
                    return entity;
                };
                michal['onPress'] = report;
                report = _closure2_slot4;
                michal['indicatorLeft'] = report;
                entity = _closure2_slot5;
                michal['showIndicator'] = entity;
                entity = undefined;
                entity = tangon.bind(entity)(zuuluu, michal);
                return entity;
            };
            oscard['children'] = verify;
            oscard = option.bind(report)(golfie, oscard);
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 284:
            return entity;
        }
    };
    var _closure1_slot16 = michal;
    report = function(argFoo) { // Original name: RadioGroup
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            michal = entity.value;
            tangon = undefined;
            if(!(michal === tangon)) { _fun00008_ip = 18; continue _fun00007 }
 16:
            michal = null;
 18:
            var _closure2_slot0 = michal;
            golfie = entity.options;
            if(!(golfie === tangon)) { _fun00008_ip = 35; continue _fun00007 }
 31:
            golfie = new Array(0);
 35:
            var _closure2_slot1 = golfie;
            michal = entity.style;
            var _closure2_slot2 = michal;
            michal = entity.size;
            if(!(michal === tangon)) { _fun00008_ip = 70; continue _fun00007 }
 57:
            zuuluu = _closure1_slot7;
            michal = zuuluu.MEDIUM;
 70:
            var _closure2_slot3 = michal;
            michal = entity.disabled;
            if(!(michal === tangon)) { _fun00008_ip = 85; continue _fun00007 }
 83:
            michal = false;
 85:
            var _closure2_slot4 = michal;
            michal = entity.withSpacing;
            if(!(michal === tangon)) { _fun00008_ip = 101; continue _fun00007 }
 99:
            michal = false;
 101:
            var _closure2_slot5 = michal;
            michal = entity.indicatorLeft;
            if(!(michal === tangon)) { _fun00008_ip = 117; continue _fun00007 }
 115:
            michal = false;
 117:
            var _closure2_slot6 = michal;
            michal = entity.showIndicator;
            if(!(michal === tangon)) { _fun00008_ip = 133; continue _fun00007 }
 131:
            michal = true;
 133:
            var _closure2_slot7 = michal;
            michal = entity.withDividers;
            if(!(michal === tangon)) { _fun00008_ip = 149; continue _fun00007 }
 147:
            michal = true;
 149:
            var _closure2_slot8 = michal;
            entity = entity.onChange;
            if(!(entity === tangon)) { _fun00008_ip = 170; continue _fun00007 }
 163:
            entity = _closure1_slot4;
 170:
            var _closure2_slot9 = entity;
            var _closure2_slot10 = tangon;
            michal = _closure1_slot9;
            michal = michal.bind(tangon)();
            _closure2_slot10 = michal;
            zuuluu = _closure1_slot5;
            michal = _closure1_slot3;
            entity = {};
            oscard = golfie.map;
            report = function(argFoo, argBar) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    oscard = argFoo;
                    verify = argBar;
                    report = _closure1_slot6;
                    entity = _closure1_slot2;
                    tangon = entity.Fragment;
                    zuuluu = {};
                    sizing = _closure1_slot5;
                    backup = _closure1_slot16;
                    yankee = {};
                    yankee['option'] = oscard;
                    michal = _closure2_slot0;
                    entity = oscard.value;
                    entity = michal === entity;
                    yankee['checked'] = entity;
                    michal = _closure2_slot2;
                    entity = new Array(2);
                    entity[0] = michal;
                    michal = _closure2_slot1;
                    michal = michal.length;
                    foxtra = 1;
                    michal = michal - foxtra;
                    if(!(verify !== michal)) { _fun00010_ip = 117; continue _fun00009 }
 92:
                    michal = _closure2_slot5;
                    if(michal) { _fun00010_ip = 103; continue _fun00009 }
 99:
                    michal = {};
                    _fun00010_ip = 115; continue _fun00009;
 103:
                    golfie = {};
                    option = 8;
                    golfie['marginBottom'] = option;
                    michal = golfie;
 115:
                    _fun00010_ip = 128; continue _fun00009;
 117:
                    golfie = {};
                    option = 0;
                    golfie['marginBottom'] = option;
                    michal = golfie;
 128:
                    entity[1] = michal;
                    yankee['style'] = entity;
                    entity = _closure2_slot3;
                    yankee['size'] = entity;
                    entity = _closure2_slot4;
                    yankee['disabled'] = entity;
                    entity = _closure2_slot9;
                    yankee['onPress'] = entity;
                    entity = _closure2_slot6;
                    yankee['indicatorLeft'] = entity;
                    entity = _closure2_slot7;
                    yankee['showIndicator'] = entity;
                    entity = global;
                    option = entity.JSON;
                    golfie = option.stringify;
                    michal = oscard.value;
                    offset = golfie.bind(option)(michal);
                    michal = entity.HermesInternal;
                    michal = michal.concat;
                    option = 'radio-option-';
                    golfie = '-';
                    offset = michal.bind(option)(offset, golfie, verify);
                    michal = undefined;
                    yankee = sizing.bind(michal)(backup, yankee, offset);
                    offset = new Array(2);
                    offset[0] = yankee;
                    yankee = _closure2_slot1;
                    yankee = yankee.length;
                    foxtra = yankee - foxtra;
                    yankee = null;
                    if(!(verify !== foxtra)) { _fun00010_ip = 305; continue _fun00009 }
 266:
                    foxtra = _closure2_slot8;
                    yankee = null;
                    if(!foxtra) { _fun00010_ip = 305; continue _fun00009 }
 275:
                    backup = _closure1_slot5;
                    foxtra = _closure1_slot3;
                    romeon = {};
                    kiloes = _closure2_slot10;
                    kiloes = kiloes.divider;
                    romeon['style'] = kiloes;
                    yankee = backup.bind(michal)(foxtra, romeon);
 305:
                    offset[1] = yankee;
                    zuuluu['children'] = offset;
                    yankee = entity.JSON;
                    offset = yankee.stringify;
                    oscard = oscard.value;
                    oscard = offset.bind(yankee)(oscard);
                    entity = entity.HermesInternal;
                    entity = entity.concat;
                    entity = entity.bind(option)(oscard, golfie, verify);
                    entity = report.bind(michal)(tangon, zuuluu, entity);
                    return entity;
                }
            };
            report = oscard.bind(golfie)(report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    entity = global;
    offset = entity.Object;
    oscard = offset.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(offset)(zuuluu, entity, tangon);
    entity = 0;
    oscard = option[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(oscard);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = option[tangon];
    tangon = golfie.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot3 = tangon;
    romeon = 2;
    tangon = option[romeon];
    tangon = golfie.bind(entity)(tangon);
    kiloes = tangon.Fonts;
    tangon = tangon.NOOP;
    var _closure1_slot4 = tangon;
    yankee = 3;
    tangon = option[yankee];
    tangon = golfie.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot5 = tangon;
    tangon = option[yankee];
    tangon = golfie.bind(entity)(tangon);
    tangon = tangon.jsxs;
    var _closure1_slot6 = tangon;
    oscard = {};
    offset = 8;
    oscard['SMALL'] = offset;
    tangon = 'SMALL';
    oscard[offset] = tangon;
    offset = 10;
    oscard['MEDIUM'] = offset;
    tangon = 'MEDIUM';
    oscard[offset] = tangon;
    offset = 12;
    oscard['LARGE'] = offset;
    tangon = 'LARGE';
    oscard[offset] = tangon;
    var _closure1_slot7 = oscard;
    offset = {};
    tangon = oscard.SMALL;
    offset[tangon] = romeon;
    tangon = oscard.MEDIUM;
    offset[tangon] = yankee;
    yankee = oscard.LARGE;
    tangon = 4;
    offset[yankee] = tangon;
    var _closure1_slot8 = offset;
    tangon = option[tangon];
    yankee = golfie.bind(entity)(tangon);
    offset = yankee.createStyles;
    tangon = {};
    romeon = {'flex': 0, 'marginRight': 8, 'borderRadius': null, 'borderColor': null, 'borderWidth': 2};
    foxtra = 5;
    sizing = option[foxtra];
    sizing = backup.bind(entity)(sizing);
    sizing = sizing.radii;
    sizing = sizing.round;
    romeon['borderRadius'] = sizing;
    sizing = option[foxtra];
    sizing = backup.bind(entity)(sizing);
    sizing = sizing.colors;
    sizing = sizing.TEXT_MUTED;
    romeon['borderColor'] = sizing;
    tangon['radioIcon'] = romeon;
    romeon = {};
    sizing = option[foxtra];
    sizing = backup.bind(entity)(sizing);
    sizing = sizing.colors;
    sizing = sizing.INTERACTIVE_ACTIVE;
    romeon['borderColor'] = sizing;
    tangon['radioIconSelected'] = romeon;
    romeon = {};
    sizing = option[foxtra];
    sizing = backup.bind(entity)(sizing);
    sizing = sizing.radii;
    sizing = sizing.round;
    romeon['borderRadius'] = sizing;
    sizing = option[foxtra];
    sizing = backup.bind(entity)(sizing);
    sizing = sizing.colors;
    sizing = sizing.CONTROL_BRAND_FOREGROUND;
    romeon['backgroundColor'] = sizing;
    tangon['radioTick'] = romeon;
    romeon = {'flex': 1, 'flexGrow': 1, 'flexDirection': 'column'};
    tangon['radioBarInternal'] = romeon;
    romeon = {};
    sizing = 6;
    output = option[sizing];
    update = backup.bind(entity)(output);
    echoed = kiloes.PRIMARY_MEDIUM;
    output = option[foxtra];
    output = backup.bind(entity)(output);
    output = output.colors;
    result = output.INTERACTIVE_NORMAL;
    output = 16;
    ctrled = update.bind(entity)(echoed, result, output);
    vacuum = romeon;
    output = copyDataProperties(vacuum, ctrled);
    tangon['radioOptionName'] = romeon;
    romeon = {};
    output = option[foxtra];
    output = backup.bind(entity)(output);
    output = output.colors;
    output = output.INTERACTIVE_ACTIVE;
    romeon['color'] = output;
    tangon['radioOptionSelected'] = romeon;
    romeon = {};
    sizing = option[sizing];
    result = backup.bind(entity)(sizing);
    output = kiloes.PRIMARY_MEDIUM;
    kiloes = option[foxtra];
    kiloes = backup.bind(entity)(kiloes);
    kiloes = kiloes.colors;
    sizing = kiloes.INTERACTIVE_NORMAL;
    kiloes = 14;
    ctrled = result.bind(entity)(output, sizing, kiloes);
    vacuum = romeon;
    kiloes = copyDataProperties(vacuum, ctrled);
    tangon['radioOptionDesc'] = romeon;
    romeon = {};
    kiloes = 0.3;
    romeon['opacity'] = kiloes;
    tangon['disabled'] = romeon;
    romeon = {'height': 1, 'alignSelf': 'stretch', 'backgroundColor': null, 'marginLeft': 16};
    kiloes = option[foxtra];
    kiloes = backup.bind(entity)(kiloes);
    kiloes = kiloes.colors;
    kiloes = kiloes.BACKGROUND_MODIFIER_ACCENT;
    romeon['backgroundColor'] = kiloes;
    tangon['divider'] = romeon;
    romeon = {};
    kiloes = option[foxtra];
    kiloes = backup.bind(entity)(kiloes);
    kiloes = kiloes.radii;
    kiloes = kiloes.sm;
    romeon['borderRadius'] = kiloes;
    kiloes = 'hidden';
    romeon['overflow'] = kiloes;
    tangon['collapsibleStyle'] = romeon;
    romeon = {};
    kiloes = option[foxtra];
    kiloes = backup.bind(entity)(kiloes);
    kiloes = kiloes.colors;
    kiloes = kiloes.BACKGROUND_TERTIARY;
    romeon['backgroundColor'] = kiloes;
    tangon['collapsibleBackgroundSelected'] = romeon;
    romeon = {};
    foxtra = option[foxtra];
    foxtra = backup.bind(entity)(foxtra);
    foxtra = foxtra.colors;
    foxtra = foxtra.BACKGROUND_SECONDARY;
    romeon['backgroundColor'] = foxtra;
    tangon['collapsibleBackground'] = romeon;
    romeon = {'paddingVertical': 4, 'paddingHorizontal': 12};
    tangon['collapsibleContainer'] = romeon;
    tangon = offset.bind(yankee)(tangon);
    var _closure1_slot9 = tangon;
    tangon = function() { // Original name: getOuterStylesFromSize
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            zuuluu = arguments[0];
            entity = undefined;
            if(!(zuuluu === entity)) { _fun00012_ip = 22; continue _fun00011 }
 9:
            entity = _closure1_slot7;
            zuuluu = entity.MEDIUM;
 22:
            entity = {};
            michal = 2;
            tangon = michal * zuuluu;
            entity['width'] = tangon;
            michal = michal * zuuluu;
            entity['height'] = michal;
            michal = _closure1_slot8;
            michal = michal[zuuluu];
            entity['padding'] = michal;
            return entity;
        }
    };
    var _closure1_slot10 = tangon;
    tangon = function() { // Original name: getTickStylesFromSize
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            michal = arguments[0];
            entity = undefined;
            if(!(michal === entity)) { _fun00014_ip = 22; continue _fun00013 }
 9:
            entity = _closure1_slot7;
            michal = entity.MEDIUM;
 22:
            entity = {};
            entity['width'] = michal;
            entity['height'] = michal;
            return entity;
        }
    };
    var _closure1_slot11 = tangon;
    tangon = function(argFoo) { // Original name: RadioEmpty
        entity = argFoo;
        option = entity.size;
        oscard = entity.style;
        entity = _closure1_slot9;
        tangon = undefined;
        report = entity.bind(tangon)();
        zuuluu = _closure1_slot5;
        michal = _closure1_slot3;
        entity = {};
        verify = report.radioIcon;
        report = new Array(3);
        report[0] = verify;
        golfie = _closure1_slot10;
        golfie = golfie.bind(tangon)(option);
        report[1] = golfie;
        report[2] = oscard;
        entity['style'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot12 = tangon;
    tangon = function(argFoo) { // Original name: RadioSelected
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = argFoo;
            offset = entity.size;
            golfie = entity.active;
            oscard = entity.style;
            entity = _closure1_slot9;
            tangon = undefined;
            option = entity.bind(tangon)();
            zuuluu = _closure1_slot5;
            michal = _closure1_slot3;
            entity = {};
            yankee = option.radioIcon;
            report = new Array(4);
            report[0] = yankee;
            yankee = _closure1_slot10;
            yankee = yankee.bind(tangon)(offset);
            report[1] = yankee;
            if(!golfie) { _fun00016_ip = 78; continue _fun00015 }
 72:
            golfie = option.radioIconSelected;
 78:
            report[2] = golfie;
            report[3] = oscard;
            entity['style'] = report;
            golfie = _closure1_slot5;
            oscard = _closure1_slot3;
            report = {};
            yankee = option.radioTick;
            option = new Array(2);
            option[0] = yankee;
            verify = _closure1_slot11;
            verify = verify.bind(tangon)(offset);
            option[1] = verify;
            report['style'] = option;
            report = golfie.bind(tangon)(oscard, report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot13 = tangon;
    tangon = function(argFoo) { // Original name: RadioIndicator
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            entity = argFoo;
            golfie = entity.size;
            oscard = entity.active;
            michal = entity.style;
            report = _closure1_slot5;
            if(oscard) { _fun00018_ip = 53; continue _fun00017 }
 29:
            option = _closure1_slot12;
            tangon = {};
            tangon['size'] = golfie;
            tangon['style'] = michal;
            entity = undefined;
            entity = report.bind(entity)(option, tangon);
            _fun00018_ip = 80; continue _fun00017;
 53:
            tangon = _closure1_slot13;
            zuuluu = {};
            zuuluu['size'] = golfie;
            zuuluu['active'] = oscard;
            zuuluu['style'] = michal;
            michal = undefined;
            entity = report.bind(michal)(tangon, zuuluu);
 80:
            return entity;
        }
    };
    var _closure1_slot14 = tangon;
    tangon['Sizes'] = oscard;
    report['Sizes'] = oscard;
    oscard = 9;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'uikit-native/RadioGroup.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['default'] = report;
    zuuluu['RadioIndicator'] = tangon;
    zuuluu['RadioItem'] = michal;
    return entity;
})();