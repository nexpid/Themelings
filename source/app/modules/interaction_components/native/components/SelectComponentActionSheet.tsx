// app/modules/interaction_components/native/components/SelectComponentActionSheet.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    yankee = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: SelectionHeader
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            entity = mike.renderIcon;
            var _closure2_slot0 = entity;
            control = mike.selectionActionComponent;
            update = mike.selectButtonDisabled;
            golf = mike.selectedOptions;
            var _closure2_slot1 = golf;
            echo = mike.submitSelection;
            zulu = mike.onPressOptionItem;
            var _closure2_slot2 = zulu;
            oscar = mike.onQueryChange;
            var _closure2_slot3 = oscar;
            mike = _closure1_slot12;
            tango = undefined;
            romeo = mike.bind(tango)();
            var _closure2_slot4 = romeo;
            zulu = control.maxValues;
            mike = 1;
            backup = zulu > mike;
            zulu = _closure1_slot3;
            mike = zulu.useRef;
            options = null;
            mike = mike.bind(zulu)(options);
            var _closure2_slot5 = mike;
            report = _closure1_slot3;
            zulu = report.useMemo;
            mike = new Array(3);
            mike[0] = golf;
            mike[1] = romeo;
            mike[2] = entity;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = _closure2_slot1;
                    mike = null;
                    tango = mike == entity;
                    entity = undefined;
                    if(tango) { _fun00004_ip = 41; continue _fun00003 }
 18:
                    report = _closure2_slot1;
                    tango = report.map;
                    zulu = function(argFoo) {
                        offset = argFoo;
                        entity = {};
                        mike = offset.value;
                        entity['id'] = mike;
                        mike = offset.label;
                        entity['text'] = mike;
                        report = _closure1_slot9;
                        tango = _closure1_slot4;
                        zulu = {};
                        verify = _closure2_slot4;
                        golf = verify.tagListIconWrapper;
                        zulu['style'] = golf;
                        options = _closure1_slot9;
                        golf = _closure1_slot4;
                        oscar = {};
                        verify = verify.tagListIcon;
                        oscar['style'] = verify;
                        verify = _closure2_slot0;
                        mike = undefined;
                        verify = verify.bind(mike)(offset);
                        oscar['children'] = verify;
                        oscar = options.bind(mike)(golf, oscar);
                        zulu['children'] = oscar;
                        mike = report.bind(mike)(tango, zulu);
                        entity['icon'] = mike;
                        return entity;
                    };
                    entity = tango.bind(report)(zulu);
 41:
                    if(!(mike == entity)) { _fun00004_ip = 49; continue _fun00003 }
 45:
                    entity = new Array(0);
 49:
                    return entity;
                }
            };
            yankee = zulu.bind(report)(entity, mike);
            zulu = _closure1_slot11;
            mike = _closure1_slot10;
            entity = {};
            verify = _closure1_slot9;
            golf = _closure1_slot0;
            kilo = _closure1_slot2;
            report = 9;
            report = kilo[report];
            report = golf.bind(tango)(report);
            golf = report.BottomSheetTitleHeader;
            report = {};
            kilo = control.placeholder;
            report['title'] = kilo;
            kilo = undefined;
            if(!backup) { _fun00002_ip = 293; continue _fun00001 }
 208:
            output = control.minValues;
            sizing = 0;
            sizing = output > sizing;
            kilo = undefined;
            if(!sizing) { _fun00002_ip = 293; continue _fun00001 }
 225:
            output = _closure1_slot0;
            vacuum = _closure1_slot2;
            sizing = 10;
            result = vacuum[sizing];
            result = output.bind(tango)(result);
            source = result.intl;
            result = source.formatToPlainString;
            sizing = vacuum[sizing];
            sizing = output.bind(tango)(sizing);
            sizing = sizing.t;
            output = sizing.Jmwzd3;
            sizing = {};
            control = control.minValues;
            sizing['count'] = control;
            kilo = result.bind(source)(output, sizing);
 293:
            report['subtitle'] = kilo;
            kilo = undefined;
            if(!backup) { _fun00002_ip = 434; continue _fun00001 }
 306:
            result = _closure1_slot9;
            output = _closure1_slot0;
            source = _closure1_slot2;
            sizing = 11;
            sizing = source[sizing];
            sizing = output.bind(tango)(sizing);
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
            sizing['onPress'] = echo;
            control = _closure1_slot0;
            vacuum = _closure1_slot2;
            echo = 10;
            update = vacuum[echo];
            update = control.bind(tango)(update);
            source = update.intl;
            update = source.string;
            echo = vacuum[echo];
            echo = control.bind(tango)(echo);
            echo = echo.t;
            echo = echo.XqMe3N;
            echo = update.bind(source)(echo);
            sizing['text'] = echo;
            kilo = result.bind(tango)(output, sizing);
 434:
            report['trailing'] = kilo;
            golf = verify.bind(tango)(golf, report);
            report = new Array(2);
            report[0] = golf;
            golf = options != oscar;
            oscar = null;
            if(!golf) { _fun00002_ip = 580; continue _fun00001 }
 462:
            golf = options != yankee;
            oscar = null;
            if(!golf) { _fun00002_ip = 580; continue _fun00001 }
 471:
            verify = _closure1_slot9;
            options = _closure1_slot1;
            kilo = _closure1_slot2;
            golf = 12;
            golf = kilo[golf];
            options = options.bind(tango)(golf);
            golf = {};
            romeo = romeo.textInputWrapper;
            golf['style'] = romeo;
            romeo = undefined;
            if(!backup) { _fun00002_ip = 541; continue _fun00001 }
 512:
            kilo = yankee.length;
            backup = 0;
            romeo = undefined;
            if(!(backup !== kilo)) { _fun00002_ip = 541; continue _fun00001 }
 525:
            kilo = _closure1_slot9;
            backup = _closure1_slot4;
            foxtrot = {};
            romeo = kilo.bind(tango)(backup, foxtrot);
 541:
            golf['icon'] = romeo;
            golf['tags'] = yankee;
            yankee = function(argFoo) { // Original name: onRemove
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    tango = argFoo;
                    entity = _closure2_slot1;
                    report = null;
                    oscar = report == entity;
                    entity = undefined;
                    zulu = undefined;
                    if(oscar) { _fun00006_ip = 31; continue _fun00005 }
 23:
                    oscar = _closure2_slot1;
                    zulu = oscar[tango];
 31:
                    if(!(report != zulu)) { _fun00006_ip = 45; continue _fun00005 }
 35:
                    mike = _closure2_slot2;
                    mike = mike.bind(entity)(tango, zulu);
 45:
                    return entity;
                }
            };
            golf['onRemove'] = yankee;
            offset = function(argFoo) { // Original name: onChangeText
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    mike = _closure2_slot5;
                    tango = mike.current;
                    mike = null;
                    if(!(mike != tango)) { _fun00008_ip = 39; continue _fun00007 }
 18:
                    zulu = tango.scrollTo;
                    mike = {'y': 0, 'animated': false};
                    mike = zulu.bind(tango)(mike);
 39:
                    zulu = _closure2_slot3;
                    entity = undefined;
                    mike = argFoo;
                    mike = zulu.bind(entity)(mike);
                    return entity;
                }
            };
            golf['onChangeText'] = offset;
            oscar = verify.bind(tango)(options, golf);
 580:
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function(argFoo) { // Original name: SelectionOptionItem
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            backup = entity.item;
            var _closure2_slot0 = backup;
            mike = entity.onPressOptionItem;
            var _closure2_slot1 = mike;
            yankee = entity.clearable;
            foxtrot = entity.selected;
            oscar = entity.disabled;
            mike = entity.index;
            var _closure2_slot2 = mike;
            sizing = entity.start;
            kilo = entity.end;
            echo = entity.iconContainerStyle;
            source = entity.itemAccessibilityLabel;
            golf = entity.skipIcon;
            update = entity.multi;
            romeo = entity.renderDescription;
            output = entity.renderIcon;
            options = entity.renderOptionSuffix;
            entity = _closure1_slot12;
            tango = undefined;
            result = entity.bind(tango)();
            zulu = _closure1_slot9;
            mike = _closure1_slot0;
            verify = _closure1_slot2;
            entity = 13;
            entity = verify[entity];
            entity = mike.bind(tango)(entity);
            mike = entity.TableRow;
            entity = {};
            verify = 'radio';
            if(!update) { _fun00010_ip = 158; continue _fun00009 }
 154:
            verify = 'checkbox';
 158:
            entity['accessibilityRole'] = verify;
            verify = null;
            control = verify == source;
            update = undefined;
            if(control) { _fun00010_ip = 178; continue _fun00009 }
 173:
            update = source.bind(tango)(backup);
 178:
            entity['accessibilityLabel'] = update;
            update = {};
            update['disabled'] = oscar;
            update['checked'] = foxtrot;
            entity['accessibilityState'] = update;
            entity['start'] = sizing;
            entity['end'] = kilo;
            entity['disabled'] = oscar;
            oscar = null;
            if(golf) { _fun00010_ip = 262; continue _fun00009 }
 215:
            sizing = _closure1_slot9;
            kilo = _closure1_slot4;
            golf = {};
            update = result.selectionOptionItemIconWrapper;
            result = new Array(2);
            result[0] = update;
            result[1] = echo;
            golf['style'] = result;
            output = output.bind(tango)(backup);
            golf['children'] = output;
            oscar = sizing.bind(tango)(kilo, golf);
 262:
            entity['icon'] = oscar;
            oscar = backup.label;
            entity['label'] = oscar;
            oscar = 1;
            entity['labelLineClamp'] = oscar;
            kilo = verify == romeo;
            golf = undefined;
            if(kilo) { _fun00010_ip = 297; continue _fun00009 }
 292:
            golf = romeo.bind(tango)(backup);
 297:
            entity['subLabel'] = golf;
            entity['subLabelLineClamp'] = oscar;
            report = function() { // Original name: onPress
                tango = _closure2_slot1;
                zulu = _closure2_slot2;
                mike = _closure2_slot0;
                entity = undefined;
                entity = tango.bind(entity)(zulu, mike);
                return entity;
            };
            entity['onPress'] = report;
            golf = _closure1_slot11;
            oscar = _closure1_slot4;
            report = {};
            romeo = {};
            kilo = 'row';
            romeo['flexDirection'] = kilo;
            report['style'] = romeo;
            kilo = verify == options;
            romeo = undefined;
            if(kilo) { _fun00010_ip = 356; continue _fun00009 }
 351:
            romeo = options.bind(tango)(backup);
 356:
            options = new Array(2);
            options[0] = romeo;
            if(yankee) { _fun00010_ip = 425; continue _fun00009 }
 367:
            yankee = true;
            verify = null;
            if(!(yankee === foxtrot)) { _fun00010_ip = 423; continue _fun00009 }
 375:
            backup = _closure1_slot9;
            romeo = _closure1_slot0;
            kilo = _closure1_slot2;
            yankee = 15;
            yankee = kilo[yankee];
            yankee = romeo.bind(tango)(yankee);
            romeo = yankee.CheckmarkSmallBoldIcon;
            yankee = {};
            kilo = 'text-brand';
            yankee['color'] = kilo;
            verify = backup.bind(tango)(romeo, yankee);
 423:
            _fun00010_ip = 473; continue _fun00009;
 425:
            romeo = _closure1_slot9;
            yankee = _closure1_slot0;
            backup = _closure1_slot2;
            offset = 14;
            offset = backup[offset];
            offset = yankee.bind(tango)(offset);
            yankee = offset.FormCheckbox;
            offset = {};
            if(foxtrot) { _fun00010_ip = 462; continue _fun00009 }
 460:
            foxtrot = false;
 462:
            offset['checked'] = foxtrot;
            verify = romeo.bind(tango)(yankee, offset);
 473:
            options[1] = verify;
            report['children'] = options;
            report = golf.bind(tango)(oscar, report);
            entity['trailing'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ACTION_SHEET_START_HEIGHT_RATIO;
    var _closure1_slot8 = tango;
    tango = 6;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot9 = golf;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.Fragment;
    var _closure1_slot10 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot11 = tango;
    tango = 7;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {};
    offset = 8;
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.spacing;
    romeo = romeo.PX_32;
    verify['width'] = romeo;
    romeo = 'center';
    verify['alignItems'] = romeo;
    tango['selectionOptionItemIconWrapper'] = verify;
    verify = {};
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.spacing;
    romeo = romeo.PX_16;
    verify['width'] = romeo;
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.spacing;
    romeo = romeo.PX_16;
    verify['height'] = romeo;
    tango['tagListIconWrapper'] = verify;
    verify = {};
    foxtrot = {};
    romeo = 0.75;
    foxtrot['scale'] = romeo;
    romeo = new Array(1);
    romeo[0] = foxtrot;
    verify['transform'] = romeo;
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.spacing;
    romeo = romeo.PX_4;
    romeo = -romeo;
    verify['top'] = romeo;
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.spacing;
    romeo = romeo.PX_4;
    romeo = -romeo;
    verify['left'] = romeo;
    tango['tagListIcon'] = verify;
    verify = {};
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.spacing;
    romeo = romeo.PX_4;
    verify['paddingHorizontal'] = romeo;
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.spacing;
    romeo = romeo.PX_16;
    verify['marginTop'] = romeo;
    offset = oscar[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.spacing;
    offset = offset.PX_16;
    verify['marginHorizontal'] = offset;
    tango['textInputWrapper'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot12 = tango;
    tango = 25;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/interaction_components/native/components/SelectComponentActionSheet.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: SelectComponentActionSheet
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            mike = argFoo;
            control = mike.selectionActionComponent;
            var _closure2_slot0 = control;
            output = mike.onPressOptionItem;
            var _closure2_slot1 = output;
            update = mike.selectedOptions;
            vacuum = mike.selectedCount;
            var _closure2_slot2 = vacuum;
            foxtrot = mike.renderIcon;
            var _closure2_slot3 = foxtrot;
            kilo = mike.renderHeaderIcon;
            record = mike.iconContainerStyle;
            var _closure2_slot4 = record;
            config = mike.skipIcon;
            var _closure2_slot5 = config;
            sequence = mike.renderDescription;
            var _closure2_slot6 = sequence;
            sizing = mike.renderOptionSuffix;
            var _closure2_slot7 = sizing;
            result = mike.onQueryChange;
            romeo = mike.options;
            var _closure2_slot8 = romeo;
            context = mike.itemStyle;
            var _closure2_slot9 = context;
            papa = mike.isSelected;
            var _closure2_slot10 = papa;
            echo = mike.submitSelection;
            entity = mike.itemAccessibilityLabel;
            var _closure2_slot11 = entity;
            target = mike.channelId;
            var _closure2_slot12 = target;
            report = mike.expanded;
            tango = undefined;
            var _closure2_slot17 = tango;
            zulu = _closure1_slot1;
            source = _closure1_slot2;
            mike = 16;
            mike = source[mike];
            mike = zulu.bind(tango)(mike);
            mike = mike.bind(tango)();
            offset = mike.insets;
            mike = _closure1_slot0;
            zulu = 17;
            oscar = source[zulu];
            verify = mike.bind(tango)(oscar);
            options = verify.useStateFromStores;
            oscar = _closure1_slot7;
            golf = new Array(1);
            golf[0] = oscar;
            oscar = function() {
                entity = _closure1_slot7;
                entity = entity.keyboardHeight;
                return entity;
            };
            oscar = options.bind(verify)(golf, oscar);
            var _closure2_slot13 = oscar;
            verify = _closure1_slot3;
            options = verify.useEffect;
            golf = new Array(1);
            golf[0] = oscar;
            oscar = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zulu = _closure2_slot13;
                    mike = 0;
                    if(!(zulu > mike)) { _fun00014_ip = 38; continue _fun00013 }
 13:
                    entity = _closure2_slot17;
                    mike = entity.current;
                    entity = null;
                    if(!(entity != mike)) { _fun00014_ip = 38; continue _fun00013 }
 28:
                    entity = mike.expandActionSheet;
                    entity = entity.bind(mike)();
 38:
                    entity = undefined;
                    return entity;
                }
            };
            oscar = options.bind(verify)(oscar, golf);
            verify = _closure1_slot3;
            options = verify.useEffect;
            golf = function() {
                golf = _closure1_slot0;
                options = _closure1_slot2;
                entity = 18;
                mike = options[entity];
                entity = undefined;
                mike = golf.bind(entity)(mike);
                tango = mike.AccessibilityAnnouncer;
                zulu = tango.announce;
                mike = 10;
                report = options[mike];
                report = golf.bind(entity)(report);
                oscar = report.intl;
                report = oscar.string;
                mike = options[mike];
                mike = golf.bind(entity)(mike);
                mike = mike.t;
                mike = mike.7gxe9v;
                mike = report.bind(oscar)(mike);
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            oscar = new Array(0);
            oscar = options.bind(verify)(golf, oscar);
            verify = _closure1_slot3;
            options = verify.useMemo;
            golf = function() {
                oscar = _closure1_slot0;
                golf = _closure1_slot2;
                mike = 19;
                mike = golf[mike];
                report = undefined;
                zulu = oscar.bind(report)(mike);
                mike = zulu.getSafeAreaInsets;
                mike = mike.bind(zulu)();
                zulu = 20;
                zulu = golf[zulu];
                tango = oscar.bind(report)(zulu);
                zulu = tango.getWindowDimensions;
                zulu = zulu.bind(tango)();
                tango = zulu.height;
                zulu = 21;
                zulu = golf[zulu];
                zulu = oscar.bind(report)(zulu);
                zulu = zulu.NAV_BAR_HEIGHT_MULTILINE;
                zulu = tango - zulu;
                mike = mike.top;
                mike = zulu - mike;
                entity = _closure1_slot8;
                entity = entity * mike;
                return entity;
            };
            oscar = new Array(0);
            oscar = options.bind(verify)(golf, oscar);
            zulu = source[zulu];
            verify = mike.bind(tango)(zulu);
            options = verify.useStateFromStores;
            zulu = _closure1_slot6;
            golf = new Array(1);
            golf[0] = zulu;
            zulu = function() {
                mike = _closure1_slot6;
                entity = mike.getChannelId;
                entity = entity.bind(mike)();
                return entity;
            };
            status = options.bind(verify)(golf, zulu);
            var _closure2_slot14 = status;
            golf = _closure1_slot5;
            zulu = golf.getChannel;
            zulu = zulu.bind(golf)(target);
            var _closure2_slot15 = zulu;
            verify = _closure1_slot3;
            options = verify.useEffect;
            golf = new Array(3);
            golf[0] = status;
            golf[1] = target;
            golf[2] = zulu;
            zulu = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    entity = _closure2_slot15;
                    tango = null;
                    entity = tango != entity;
                    if(!entity) { _fun00016_ip = 30; continue _fun00015 }
 16:
                    report = _closure2_slot15;
                    zulu = report.isGuildVoice;
                    entity = zulu.bind(report)();
 30:
                    if(entity) { _fun00016_ip = 41; continue _fun00015 }
 33:
                    zulu = _closure2_slot12;
                    entity = tango == zulu;
 41:
                    if(entity) { _fun00016_ip = 56; continue _fun00015 }
 44:
                    zulu = _closure2_slot14;
                    mike = _closure2_slot12;
                    entity = zulu === mike;
 56:
                    if(entity) { _fun00016_ip = 94; continue _fun00015 }
 59:
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 22;
                    mike = mike[entity];
                    entity = undefined;
                    mike = zulu.bind(entity)(mike);
                    entity = mike.hideActionSheet;
                    entity = entity.bind(mike)();
 94:
                    entity = undefined;
                    return entity;
                }
            };
            zulu = options.bind(verify)(zulu, golf);
            verify = _closure1_slot3;
            options = verify.useMemo;
            golf = new Array(1);
            golf[0] = control;
            zulu = function() {
                entity = _closure2_slot0;
                mike = entity.maxValues;
                entity = 1;
                entity = mike > entity;
                return entity;
            };
            verify = options.bind(verify)(zulu, golf);
            var _closure2_slot16 = verify;
            options = _closure1_slot3;
            golf = options.useCallback;
            zulu = new Array(14);
            zulu[0] = papa;
            zulu[1] = verify;
            papa = control.minValues;
            zulu[2] = papa;
            papa = control.maxValues;
            zulu[3] = papa;
            zulu[4] = context;
            zulu[5] = vacuum;
            context = romeo.length;
            zulu[6] = context;
            zulu[7] = output;
            zulu[8] = foxtrot;
            zulu[9] = record;
            zulu[10] = config;
            zulu[11] = sequence;
            zulu[12] = sizing;
            zulu[13] = entity;
            entity = function(argFoo) {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    entity = argFoo;
                    oscar = entity.item;
                    verify = entity.index;
                    entity = _closure2_slot10;
                    tango = undefined;
                    options = entity.bind(tango)(oscar, verify);
                    entity = _closure2_slot16;
                    golf = !entity;
                    if(!golf) { _fun00018_ip = 41; continue _fun00017 }
 38:
                    golf = options;
 41:
                    if(!golf) { _fun00018_ip = 60; continue _fun00017 }
 44:
                    entity = _closure2_slot0;
                    mike = entity.minValues;
                    entity = 0;
                    golf = mike > entity;
 60:
                    zulu = _closure1_slot9;
                    mike = _closure1_slot14;
                    entity = {};
                    offset = _closure2_slot9;
                    entity['itemStyle'] = offset;
                    entity['item'] = oscar;
                    entity['index'] = verify;
                    offset = 0;
                    oscar = offset === verify;
                    entity['start'] = oscar;
                    oscar = _closure2_slot8;
                    yankee = oscar.length;
                    oscar = 1;
                    oscar = yankee - oscar;
                    oscar = verify === oscar;
                    entity['end'] = oscar;
                    oscar = _closure2_slot16;
                    if(oscar) { _fun00018_ip = 145; continue _fun00017 }
 131:
                    verify = _closure2_slot0;
                    verify = verify.minValues;
                    oscar = offset === verify;
 145:
                    entity['clearable'] = oscar;
                    entity['selected'] = options;
                    oscar = _closure2_slot16;
                    if(!oscar) { _fun00018_ip = 180; continue _fun00017 }
 162:
                    offset = _closure2_slot2;
                    verify = _closure2_slot0;
                    verify = verify.maxValues;
                    oscar = offset >= verify;
 180:
                    if(!oscar) { _fun00018_ip = 186; continue _fun00017 }
 183:
                    oscar = !options;
 186:
                    if(oscar) { _fun00018_ip = 192; continue _fun00017 }
 189:
                    oscar = golf;
 192:
                    entity['disabled'] = oscar;
                    oscar = _closure2_slot1;
                    entity['onPressOptionItem'] = oscar;
                    oscar = _closure2_slot4;
                    entity['iconContainerStyle'] = oscar;
                    oscar = _closure2_slot5;
                    entity['skipIcon'] = oscar;
                    oscar = _closure2_slot6;
                    entity['renderDescription'] = oscar;
                    oscar = _closure2_slot3;
                    entity['renderIcon'] = oscar;
                    oscar = _closure2_slot7;
                    entity['renderOptionSuffix'] = oscar;
                    oscar = _closure2_slot11;
                    entity['itemAccessibilityLabel'] = oscar;
                    report = _closure2_slot16;
                    entity['multi'] = report;
                    entity = zulu.bind(tango)(mike, entity);
                    return entity;
                }
            };
            options = golf.bind(options)(entity, zulu);
            zulu = _closure1_slot3;
            entity = zulu.useRef;
            sizing = null;
            golf = entity.bind(zulu)(sizing);
            _closure2_slot17 = golf;
            zulu = _closure1_slot9;
            entity = 23;
            entity = source[entity];
            entity = mike.bind(tango)(entity);
            mike = entity.BottomSheet;
            entity = {};
            source = true;
            entity['scrollable'] = source;
            entity['ref'] = golf;
            entity['startHeight'] = oscar;
            entity['startExpanded'] = report;
            golf = _closure1_slot9;
            oscar = _closure1_slot13;
            report = {};
            report['selectionActionComponent'] = control;
            source = control.maxValues;
            source = vacuum > source;
            if(source) { _fun00012_ip = 669; continue _fun00011 }
 659:
            control = control.minValues;
            source = vacuum < control;
 669:
            report['selectButtonDisabled'] = source;
            report['selectedOptions'] = update;
            report['submitSelection'] = echo;
            report['onQueryChange'] = result;
            report['onPressOptionItem'] = output;
            if(!(sizing != kilo)) { _fun00012_ip = 701; continue _fun00011 }
 698:
            foxtrot = kilo;
 701:
            report['renderIcon'] = foxtrot;
            report = golf.bind(tango)(oscar, report);
            entity['header'] = report;
            golf = _closure1_slot9;
            oscar = _closure1_slot0;
            foxtrot = _closure1_slot2;
            report = 24;
            report = foxtrot[report];
            report = oscar.bind(tango)(report);
            oscar = report.BottomSheetFlatList;
            report = {};
            backup = function(argFoo, argBar) { // Original name: keyExtractor
                entity = global;
                entity = entity.HermesInternal;
                zulu = entity.concat;
                mike = '';
                entity = argBar;
                entity = zulu.bind(mike)(entity);
                return entity;
            };
            report['keyExtractor'] = backup;
            report['data'] = romeo;
            report['renderItem'] = options;
            options = {};
            romeo = _closure1_slot1;
            yankee = 8;
            backup = foxtrot[yankee];
            backup = romeo.bind(tango)(backup);
            backup = backup.spacing;
            backup = backup.PX_16;
            options['paddingHorizontal'] = backup;
            yankee = foxtrot[yankee];
            yankee = romeo.bind(tango)(yankee);
            yankee = yankee.spacing;
            yankee = yankee.PX_16;
            offset = offset.bottom;
            offset = yankee + offset;
            options['paddingBottom'] = offset;
            report['contentContainerStyle'] = options;
            options = 'always';
            report['keyboardShouldPersistTaps'] = options;
            options = 'radiogroup';
            if(!verify) { _fun00012_ip = 865; continue _fun00011 }
 861:
            options = 'none';
 865:
            report['accessibilityRole'] = options;
            report = golf.bind(tango)(oscar, report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();