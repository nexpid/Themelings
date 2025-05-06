// app/modules/interaction_components/native/components/SelectComponentActionSheet.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    yankee = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: SelectionHeader
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            entity = michal.renderIcon;
            var _closure2_slot0 = entity;
            ctrled = michal.selectionActionComponent;
            update = michal.selectButtonDisabled;
            golfie = michal.selectedOptions;
            var _closure2_slot1 = golfie;
            echoed = michal.submitSelection;
            zuuluu = michal.onPressOptionItem;
            var _closure2_slot2 = zuuluu;
            oscard = michal.onQueryChange;
            var _closure2_slot3 = oscard;
            michal = _closure1_slot11;
            tangon = undefined;
            romeon = michal.bind(tangon)();
            var _closure2_slot4 = romeon;
            zuuluu = ctrled.maxValues;
            michal = 1;
            backup = zuuluu > michal;
            zuuluu = _closure1_slot3;
            michal = zuuluu.useRef;
            option = null;
            michal = michal.bind(zuuluu)(option);
            var _closure2_slot5 = michal;
            report = _closure1_slot3;
            zuuluu = report.useMemo;
            michal = new Array(3);
            michal[0] = golfie;
            michal[1] = romeon;
            michal[2] = entity;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = _closure2_slot1;
                    michal = null;
                    tangon = michal == entity;
                    entity = undefined;
                    if(tangon) { _fun00004_ip = 41; continue _fun00003 }
 18:
                    report = _closure2_slot1;
                    tangon = report.map;
                    zuuluu = function(argFoo) {
                        offset = argFoo;
                        entity = {};
                        michal = offset.value;
                        entity['id'] = michal;
                        michal = offset.label;
                        entity['text'] = michal;
                        report = _closure1_slot8;
                        tangon = _closure1_slot4;
                        zuuluu = {};
                        verify = _closure2_slot4;
                        golfie = verify.tagListIconWrapper;
                        zuuluu['style'] = golfie;
                        option = _closure1_slot8;
                        golfie = _closure1_slot4;
                        oscard = {};
                        verify = verify.tagListIcon;
                        oscard['style'] = verify;
                        verify = _closure2_slot0;
                        michal = undefined;
                        verify = verify.bind(michal)(offset);
                        oscard['children'] = verify;
                        oscard = option.bind(michal)(golfie, oscard);
                        zuuluu['children'] = oscard;
                        michal = report.bind(michal)(tangon, zuuluu);
                        entity['icon'] = michal;
                        return entity;
                    };
                    entity = tangon.bind(report)(zuuluu);
 41:
                    if(!(michal == entity)) { _fun00004_ip = 49; continue _fun00003 }
 45:
                    entity = new Array(0);
 49:
                    return entity;
                }
            };
            yankee = zuuluu.bind(report)(entity, michal);
            zuuluu = _closure1_slot10;
            michal = _closure1_slot9;
            entity = {};
            verify = _closure1_slot8;
            golfie = _closure1_slot0;
            kiloes = _closure1_slot2;
            report = 8;
            report = kiloes[report];
            report = golfie.bind(tangon)(report);
            golfie = report.BottomSheetTitleHeader;
            report = {};
            kiloes = ctrled.placeholder;
            report['title'] = kiloes;
            kiloes = undefined;
            if(!backup) { _fun00002_ip = 293; continue _fun00001 }
 208:
            output = ctrled.minValues;
            sizing = 0;
            sizing = output > sizing;
            kiloes = undefined;
            if(!sizing) { _fun00002_ip = 293; continue _fun00001 }
 225:
            output = _closure1_slot0;
            vacuum = _closure1_slot2;
            sizing = 9;
            result = vacuum[sizing];
            result = output.bind(tangon)(result);
            source = result.intl;
            result = source.formatToPlainString;
            sizing = vacuum[sizing];
            sizing = output.bind(tangon)(sizing);
            sizing = sizing.t;
            output = sizing.Jmwzd3;
            sizing = {};
            ctrled = ctrled.minValues;
            sizing['count'] = ctrled;
            kiloes = result.bind(source)(output, sizing);
 293:
            report['subtitle'] = kiloes;
            kiloes = undefined;
            if(!backup) { _fun00002_ip = 434; continue _fun00001 }
 306:
            result = _closure1_slot8;
            output = _closure1_slot0;
            source = _closure1_slot2;
            sizing = 10;
            sizing = source[sizing];
            sizing = output.bind(tangon)(sizing);
            output = sizing.Button;
            sizing = {};
            source = 'sm';
            sizing['size'] = source;
            source = 'primary';
            if(!update) { _fun00002_ip = 357; continue _fun00001 }
 353:
            source = 'secondary';
 357:
            sizing['variant'] = source;
            sizing['disabled'] = update;
            sizing['onPress'] = echoed;
            ctrled = _closure1_slot0;
            vacuum = _closure1_slot2;
            echoed = 9;
            update = vacuum[echoed];
            update = ctrled.bind(tangon)(update);
            source = update.intl;
            update = source.string;
            echoed = vacuum[echoed];
            echoed = ctrled.bind(tangon)(echoed);
            echoed = echoed.t;
            echoed = echoed.XqMe3N;
            echoed = update.bind(source)(echoed);
            sizing['text'] = echoed;
            kiloes = result.bind(tangon)(output, sizing);
 434:
            report['trailing'] = kiloes;
            golfie = verify.bind(tangon)(golfie, report);
            report = new Array(2);
            report[0] = golfie;
            golfie = option != oscard;
            oscard = null;
            if(!golfie) { _fun00002_ip = 590; continue _fun00001 }
 465:
            golfie = option != yankee;
            oscard = null;
            if(!golfie) { _fun00002_ip = 590; continue _fun00001 }
 474:
            verify = _closure1_slot8;
            option = _closure1_slot1;
            kiloes = _closure1_slot2;
            golfie = 11;
            golfie = kiloes[golfie];
            option = option.bind(tangon)(golfie);
            golfie = {};
            kiloes = true;
            golfie['inActionSheet'] = kiloes;
            romeon = romeon.textInputWrapper;
            golfie['style'] = romeon;
            romeon = undefined;
            if(!backup) { _fun00002_ip = 551; continue _fun00001 }
 522:
            kiloes = yankee.length;
            backup = 0;
            romeon = undefined;
            if(!(backup !== kiloes)) { _fun00002_ip = 551; continue _fun00001 }
 535:
            kiloes = _closure1_slot8;
            backup = _closure1_slot4;
            foxtra = {};
            romeon = kiloes.bind(tangon)(backup, foxtra);
 551:
            golfie['icon'] = romeon;
            golfie['tags'] = yankee;
            yankee = function(argFoo) { // Original name: onRemove
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    tangon = argFoo;
                    entity = _closure2_slot1;
                    report = null;
                    oscard = report == entity;
                    entity = undefined;
                    zuuluu = undefined;
                    if(oscard) { _fun00006_ip = 31; continue _fun00005 }
 23:
                    oscard = _closure2_slot1;
                    zuuluu = oscard[tangon];
 31:
                    if(!(report != zuuluu)) { _fun00006_ip = 45; continue _fun00005 }
 35:
                    michal = _closure2_slot2;
                    michal = michal.bind(entity)(tangon, zuuluu);
 45:
                    return entity;
                }
            };
            golfie['onRemove'] = yankee;
            offset = function(argFoo) { // Original name: onChangeText
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    michal = _closure2_slot5;
                    tangon = michal.current;
                    michal = null;
                    if(!(michal != tangon)) { _fun00008_ip = 43; continue _fun00007 }
 18:
                    zuuluu = tangon.scrollTo;
                    michal = {'y': 0, 'animated': false};
                    michal = zuuluu.bind(tangon)(michal);
 43:
                    zuuluu = _closure2_slot3;
                    entity = undefined;
                    michal = argFoo;
                    michal = zuuluu.bind(entity)(michal);
                    return entity;
                }
            };
            golfie['onChangeText'] = offset;
            oscard = verify.bind(tangon)(option, golfie);
 590:
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo) { // Original name: SelectionOptionItem
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            backup = entity.item;
            var _closure2_slot0 = backup;
            michal = entity.onPressOptionItem;
            var _closure2_slot1 = michal;
            yankee = entity.clearable;
            foxtra = entity.selected;
            oscard = entity.disabled;
            michal = entity.index;
            var _closure2_slot2 = michal;
            sizing = entity.start;
            kiloes = entity.end;
            echoed = entity.iconContainerStyle;
            source = entity.itemAccessibilityLabel;
            golfie = entity.skipIcon;
            update = entity.multi;
            romeon = entity.renderDescription;
            output = entity.renderIcon;
            option = entity.renderOptionSuffix;
            entity = _closure1_slot11;
            tangon = undefined;
            result = entity.bind(tangon)();
            zuuluu = _closure1_slot8;
            michal = _closure1_slot0;
            verify = _closure1_slot2;
            entity = 12;
            entity = verify[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.TableRow;
            entity = {};
            verify = 'radio';
            if(!update) { _fun00010_ip = 158; continue _fun00009 }
 154:
            verify = 'checkbox';
 158:
            entity['accessibilityRole'] = verify;
            verify = null;
            ctrled = verify == source;
            update = undefined;
            if(ctrled) { _fun00010_ip = 178; continue _fun00009 }
 173:
            update = source.bind(tangon)(backup);
 178:
            entity['accessibilityLabel'] = update;
            update = {};
            update['disabled'] = oscard;
            update['checked'] = foxtra;
            entity['accessibilityState'] = update;
            entity['start'] = sizing;
            entity['end'] = kiloes;
            entity['disabled'] = oscard;
            oscard = null;
            if(golfie) { _fun00010_ip = 262; continue _fun00009 }
 215:
            sizing = _closure1_slot8;
            kiloes = _closure1_slot4;
            golfie = {};
            update = result.selectionOptionItemIconWrapper;
            result = new Array(2);
            result[0] = update;
            result[1] = echoed;
            golfie['style'] = result;
            output = output.bind(tangon)(backup);
            golfie['children'] = output;
            oscard = sizing.bind(tangon)(kiloes, golfie);
 262:
            entity['icon'] = oscard;
            oscard = backup.label;
            entity['label'] = oscard;
            oscard = 1;
            entity['labelLineClamp'] = oscard;
            kiloes = verify == romeon;
            golfie = undefined;
            if(kiloes) { _fun00010_ip = 297; continue _fun00009 }
 292:
            golfie = romeon.bind(tangon)(backup);
 297:
            entity['subLabel'] = golfie;
            entity['subLabelLineClamp'] = oscard;
            report = function() { // Original name: onPress
                tangon = _closure2_slot1;
                zuuluu = _closure2_slot2;
                michal = _closure2_slot0;
                entity = undefined;
                entity = tangon.bind(entity)(zuuluu, michal);
                return entity;
            };
            entity['onPress'] = report;
            golfie = _closure1_slot10;
            oscard = _closure1_slot4;
            report = {};
            romeon = {};
            kiloes = 'row';
            romeon['flexDirection'] = kiloes;
            report['style'] = romeon;
            kiloes = verify == option;
            romeon = undefined;
            if(kiloes) { _fun00010_ip = 356; continue _fun00009 }
 351:
            romeon = option.bind(tangon)(backup);
 356:
            option = new Array(2);
            option[0] = romeon;
            if(yankee) { _fun00010_ip = 425; continue _fun00009 }
 367:
            yankee = true;
            verify = null;
            if(!(yankee === foxtra)) { _fun00010_ip = 423; continue _fun00009 }
 375:
            backup = _closure1_slot8;
            romeon = _closure1_slot0;
            kiloes = _closure1_slot2;
            yankee = 14;
            yankee = kiloes[yankee];
            yankee = romeon.bind(tangon)(yankee);
            romeon = yankee.CheckmarkSmallBoldIcon;
            yankee = {};
            kiloes = 'text-brand';
            yankee['color'] = kiloes;
            verify = backup.bind(tangon)(romeon, yankee);
 423:
            _fun00010_ip = 473; continue _fun00009;
 425:
            romeon = _closure1_slot8;
            yankee = _closure1_slot0;
            backup = _closure1_slot2;
            offset = 13;
            offset = backup[offset];
            offset = yankee.bind(tangon)(offset);
            yankee = offset.FormCheckbox;
            offset = {};
            if(foxtra) { _fun00010_ip = 462; continue _fun00009 }
 460:
            foxtra = false;
 462:
            offset['checked'] = foxtra;
            verify = romeon.bind(tangon)(yankee, offset);
 473:
            option[1] = verify;
            report['children'] = option;
            report = golfie.bind(tangon)(oscard, report);
            entity['trailing'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot13 = entity;
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
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ACTION_SHEET_START_HEIGHT_RATIO;
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.jsx;
    var _closure1_slot8 = golfie;
    golfie = tangon.Fragment;
    var _closure1_slot9 = golfie;
    tangon = tangon.jsxs;
    var _closure1_slot10 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {};
    offset = 7;
    romeon = oscard[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.spacing;
    romeon = romeon.PX_32;
    verify['width'] = romeon;
    romeon = 'center';
    verify['alignItems'] = romeon;
    tangon['selectionOptionItemIconWrapper'] = verify;
    verify = {};
    romeon = oscard[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.spacing;
    romeon = romeon.PX_16;
    verify['width'] = romeon;
    romeon = oscard[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.spacing;
    romeon = romeon.PX_16;
    verify['height'] = romeon;
    tangon['tagListIconWrapper'] = verify;
    verify = {};
    foxtra = {};
    romeon = 0.75;
    foxtra['scale'] = romeon;
    romeon = new Array(1);
    romeon[0] = foxtra;
    verify['transform'] = romeon;
    romeon = oscard[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.spacing;
    romeon = romeon.PX_4;
    romeon = -romeon;
    verify['top'] = romeon;
    romeon = oscard[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.spacing;
    romeon = romeon.PX_4;
    romeon = -romeon;
    verify['left'] = romeon;
    tangon['tagListIcon'] = verify;
    verify = {};
    romeon = oscard[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.spacing;
    romeon = romeon.PX_4;
    verify['paddingHorizontal'] = romeon;
    romeon = oscard[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.spacing;
    romeon = romeon.PX_16;
    verify['marginTop'] = romeon;
    offset = oscard[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.spacing;
    offset = offset.PX_16;
    verify['marginHorizontal'] = offset;
    tangon['textInputWrapper'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot11 = tangon;
    tangon = 24;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/interaction_components/native/components/SelectComponentActionSheet.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: SelectComponentActionSheet
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            michal = argFoo;
            ctrled = michal.selectionActionComponent;
            var _closure2_slot0 = ctrled;
            output = michal.onPressOptionItem;
            var _closure2_slot1 = output;
            update = michal.selectedOptions;
            vacuum = michal.selectedCount;
            var _closure2_slot2 = vacuum;
            foxtra = michal.renderIcon;
            var _closure2_slot3 = foxtra;
            kiloes = michal.renderHeaderIcon;
            record = michal.iconContainerStyle;
            var _closure2_slot4 = record;
            config = michal.skipIcon;
            var _closure2_slot5 = config;
            sequen = michal.renderDescription;
            var _closure2_slot6 = sequen;
            sizing = michal.renderOptionSuffix;
            var _closure2_slot7 = sizing;
            result = michal.onQueryChange;
            romeon = michal.options;
            var _closure2_slot8 = romeon;
            cntext = michal.itemStyle;
            var _closure2_slot9 = cntext;
            papara = michal.isSelected;
            var _closure2_slot10 = papara;
            echoed = michal.submitSelection;
            entity = michal.itemAccessibilityLabel;
            var _closure2_slot11 = entity;
            target = michal.channelId;
            var _closure2_slot12 = target;
            report = michal.expanded;
            zuuluu = _closure1_slot1;
            source = _closure1_slot2;
            michal = 15;
            michal = source[michal];
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = {};
            oscard = false;
            michal['isKeyboardAwareOnAndroid'] = oscard;
            michal = zuuluu.bind(tangon)(michal);
            offset = michal.insets;
            golfie = _closure1_slot3;
            oscard = golfie.useEffect;
            zuuluu = function() {
                golfie = _closure1_slot0;
                option = _closure1_slot2;
                entity = 16;
                michal = option[entity];
                entity = undefined;
                michal = golfie.bind(entity)(michal);
                tangon = michal.AccessibilityAnnouncer;
                zuuluu = tangon.announce;
                michal = 9;
                report = option[michal];
                report = golfie.bind(entity)(report);
                oscard = report.intl;
                report = oscard.string;
                michal = option[michal];
                michal = golfie.bind(entity)(michal);
                michal = michal.t;
                michal = michal.7gxe9v;
                michal = report.bind(oscard)(michal);
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            michal = new Array(0);
            michal = oscard.bind(golfie)(zuuluu, michal);
            golfie = _closure1_slot3;
            oscard = golfie.useMemo;
            zuuluu = function() {
                oscard = _closure1_slot0;
                golfie = _closure1_slot2;
                michal = 17;
                michal = golfie[michal];
                report = undefined;
                zuuluu = oscard.bind(report)(michal);
                michal = zuuluu.getSafeAreaInsets;
                michal = michal.bind(zuuluu)();
                zuuluu = 18;
                zuuluu = golfie[zuuluu];
                tangon = oscard.bind(report)(zuuluu);
                zuuluu = tangon.getWindowDimensions;
                zuuluu = zuuluu.bind(tangon)();
                tangon = zuuluu.height;
                zuuluu = 19;
                zuuluu = golfie[zuuluu];
                zuuluu = oscard.bind(report)(zuuluu);
                zuuluu = zuuluu.NAV_BAR_HEIGHT_MULTILINE;
                zuuluu = tangon - zuuluu;
                michal = michal.top;
                michal = zuuluu - michal;
                entity = _closure1_slot7;
                entity = entity * michal;
                return entity;
            };
            michal = new Array(0);
            oscard = oscard.bind(golfie)(zuuluu, michal);
            michal = _closure1_slot0;
            zuuluu = 20;
            zuuluu = source[zuuluu];
            verify = michal.bind(tangon)(zuuluu);
            option = verify.useStateFromStores;
            zuuluu = _closure1_slot6;
            golfie = new Array(1);
            golfie[0] = zuuluu;
            zuuluu = function() {
                michal = _closure1_slot6;
                entity = michal.getChannelId;
                entity = entity.bind(michal)();
                return entity;
            };
            status = option.bind(verify)(golfie, zuuluu);
            var _closure2_slot13 = status;
            golfie = _closure1_slot5;
            zuuluu = golfie.getChannel;
            zuuluu = zuuluu.bind(golfie)(target);
            var _closure2_slot14 = zuuluu;
            verify = _closure1_slot3;
            option = verify.useEffect;
            golfie = new Array(3);
            golfie[0] = status;
            golfie[1] = target;
            golfie[2] = zuuluu;
            zuuluu = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    entity = _closure2_slot14;
                    tangon = null;
                    entity = tangon != entity;
                    if(!entity) { _fun00014_ip = 30; continue _fun00013 }
 16:
                    report = _closure2_slot14;
                    zuuluu = report.isGuildVoice;
                    entity = zuuluu.bind(report)();
 30:
                    if(entity) { _fun00014_ip = 41; continue _fun00013 }
 33:
                    zuuluu = _closure2_slot12;
                    entity = tangon == zuuluu;
 41:
                    if(entity) { _fun00014_ip = 56; continue _fun00013 }
 44:
                    zuuluu = _closure2_slot13;
                    michal = _closure2_slot12;
                    entity = zuuluu === michal;
 56:
                    if(entity) { _fun00014_ip = 94; continue _fun00013 }
 59:
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 21;
                    michal = michal[entity];
                    entity = undefined;
                    michal = zuuluu.bind(entity)(michal);
                    entity = michal.hideActionSheet;
                    entity = entity.bind(michal)();
 94:
                    entity = undefined;
                    return entity;
                }
            };
            zuuluu = option.bind(verify)(zuuluu, golfie);
            verify = _closure1_slot3;
            option = verify.useMemo;
            golfie = new Array(1);
            golfie[0] = ctrled;
            zuuluu = function() {
                entity = _closure2_slot0;
                michal = entity.maxValues;
                entity = 1;
                entity = michal > entity;
                return entity;
            };
            verify = option.bind(verify)(zuuluu, golfie);
            var _closure2_slot15 = verify;
            option = _closure1_slot3;
            golfie = option.useCallback;
            zuuluu = new Array(14);
            zuuluu[0] = papara;
            zuuluu[1] = verify;
            papara = ctrled.minValues;
            zuuluu[2] = papara;
            papara = ctrled.maxValues;
            zuuluu[3] = papara;
            zuuluu[4] = cntext;
            zuuluu[5] = vacuum;
            cntext = romeon.length;
            zuuluu[6] = cntext;
            zuuluu[7] = output;
            zuuluu[8] = foxtra;
            zuuluu[9] = record;
            zuuluu[10] = config;
            zuuluu[11] = sequen;
            zuuluu[12] = sizing;
            zuuluu[13] = entity;
            entity = function(argFoo) {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    entity = argFoo;
                    oscard = entity.item;
                    verify = entity.index;
                    entity = _closure2_slot10;
                    tangon = undefined;
                    option = entity.bind(tangon)(oscard, verify);
                    entity = _closure2_slot15;
                    golfie = !entity;
                    if(!golfie) { _fun00016_ip = 41; continue _fun00015 }
 38:
                    golfie = option;
 41:
                    if(!golfie) { _fun00016_ip = 60; continue _fun00015 }
 44:
                    entity = _closure2_slot0;
                    michal = entity.minValues;
                    entity = 0;
                    golfie = michal > entity;
 60:
                    zuuluu = _closure1_slot8;
                    michal = _closure1_slot13;
                    entity = {};
                    offset = _closure2_slot9;
                    entity['itemStyle'] = offset;
                    entity['item'] = oscard;
                    entity['index'] = verify;
                    offset = 0;
                    oscard = offset === verify;
                    entity['start'] = oscard;
                    oscard = _closure2_slot8;
                    yankee = oscard.length;
                    oscard = 1;
                    oscard = yankee - oscard;
                    oscard = verify === oscard;
                    entity['end'] = oscard;
                    oscard = _closure2_slot15;
                    if(oscard) { _fun00016_ip = 145; continue _fun00015 }
 131:
                    verify = _closure2_slot0;
                    verify = verify.minValues;
                    oscard = offset === verify;
 145:
                    entity['clearable'] = oscard;
                    entity['selected'] = option;
                    oscard = _closure2_slot15;
                    if(!oscard) { _fun00016_ip = 180; continue _fun00015 }
 162:
                    offset = _closure2_slot2;
                    verify = _closure2_slot0;
                    verify = verify.maxValues;
                    oscard = offset >= verify;
 180:
                    if(!oscard) { _fun00016_ip = 186; continue _fun00015 }
 183:
                    oscard = !option;
 186:
                    if(oscard) { _fun00016_ip = 192; continue _fun00015 }
 189:
                    oscard = golfie;
 192:
                    entity['disabled'] = oscard;
                    oscard = _closure2_slot1;
                    entity['onPressOptionItem'] = oscard;
                    oscard = _closure2_slot4;
                    entity['iconContainerStyle'] = oscard;
                    oscard = _closure2_slot5;
                    entity['skipIcon'] = oscard;
                    oscard = _closure2_slot6;
                    entity['renderDescription'] = oscard;
                    oscard = _closure2_slot3;
                    entity['renderIcon'] = oscard;
                    oscard = _closure2_slot7;
                    entity['renderOptionSuffix'] = oscard;
                    oscard = _closure2_slot11;
                    entity['itemAccessibilityLabel'] = oscard;
                    report = _closure2_slot15;
                    entity['multi'] = report;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
                }
            };
            option = golfie.bind(option)(entity, zuuluu);
            zuuluu = _closure1_slot3;
            entity = zuuluu.useRef;
            sizing = null;
            golfie = entity.bind(zuuluu)(sizing);
            zuuluu = _closure1_slot8;
            entity = 22;
            entity = source[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.BottomSheet;
            entity = {};
            source = true;
            entity['scrollable'] = source;
            entity['ref'] = golfie;
            entity['startHeight'] = oscard;
            entity['startExpanded'] = report;
            golfie = _closure1_slot8;
            oscard = _closure1_slot12;
            report = {};
            report['selectionActionComponent'] = ctrled;
            source = ctrled.maxValues;
            source = vacuum > source;
            if(source) { _fun00012_ip = 598; continue _fun00011 }
 588:
            ctrled = ctrled.minValues;
            source = vacuum < ctrled;
 598:
            report['selectButtonDisabled'] = source;
            report['selectedOptions'] = update;
            report['submitSelection'] = echoed;
            report['onQueryChange'] = result;
            report['onPressOptionItem'] = output;
            if(!(sizing != kiloes)) { _fun00012_ip = 630; continue _fun00011 }
 627:
            foxtra = kiloes;
 630:
            report['renderIcon'] = foxtra;
            report = golfie.bind(tangon)(oscard, report);
            entity['header'] = report;
            golfie = _closure1_slot8;
            oscard = _closure1_slot0;
            foxtra = _closure1_slot2;
            report = 23;
            report = foxtra[report];
            report = oscard.bind(tangon)(report);
            oscard = report.BottomSheetFlatList;
            report = {};
            backup = function(argFoo, argBar) { // Original name: keyExtractor
                entity = global;
                entity = entity.HermesInternal;
                zuuluu = entity.concat;
                michal = '';
                entity = argBar;
                entity = zuuluu.bind(michal)(entity);
                return entity;
            };
            report['keyExtractor'] = backup;
            report['data'] = romeon;
            report['renderItem'] = option;
            option = {};
            romeon = _closure1_slot1;
            yankee = 7;
            backup = foxtra[yankee];
            backup = romeon.bind(tangon)(backup);
            backup = backup.spacing;
            backup = backup.PX_16;
            option['paddingHorizontal'] = backup;
            yankee = foxtra[yankee];
            yankee = romeon.bind(tangon)(yankee);
            yankee = yankee.spacing;
            yankee = yankee.PX_16;
            offset = offset.bottom;
            offset = yankee + offset;
            option['paddingBottom'] = offset;
            report['contentContainerStyle'] = option;
            option = 'always';
            report['keyboardShouldPersistTaps'] = option;
            option = 'radiogroup';
            if(!verify) { _fun00012_ip = 792; continue _fun00011 }
 788:
            option = 'none';
 792:
            report['accessibilityRole'] = option;
            report = golfie.bind(tangon)(oscard, report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();