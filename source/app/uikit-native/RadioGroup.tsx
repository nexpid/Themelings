// app/uikit-native/RadioGroup.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    golf = argBar;
    backup = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = backup;
    var _closure1_slot1 = options;
    entity = function(argFoo) { // Original name: RadioBar
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            kilo = entity.checked;
            report = entity.option;
            foxtrot = entity.style;
            golf = entity.size;
            verify = entity.disabled;
            offset = entity.indicatorLeft;
            options = entity.showIndicator;
            backup = entity.onPress;
            mike = _closure1_slot9;
            tango = undefined;
            yankee = mike.bind(tango)();
            oscar = _closure1_slot5;
            zulu = _closure1_slot14;
            mike = {};
            mike['size'] = golf;
            mike['active'] = kilo;
            golf = oscar.bind(tango)(zulu, mike);
            if(kilo) { _fun00002_ip = 96; continue _fun00001 }
 88:
            romeo = yankee.collapsibleBackground;
            _fun00002_ip = 102; continue _fun00001;
 96:
            romeo = yankee.collapsibleBackgroundSelected;
 102:
            zulu = _closure1_slot5;
            mike = _closure1_slot0;
            oscar = _closure1_slot1;
            entity = 7;
            entity = oscar[entity];
            mike = mike.bind(tango)(entity);
            entity = {};
            oscar = 'radio';
            entity['accessibilityRole'] = oscar;
            oscar = {};
            oscar['selected'] = kilo;
            oscar['disabled'] = verify;
            entity['accessibilityState'] = oscar;
            entity['disabled'] = verify;
            oscar = undefined;
            if(verify) { _fun00002_ip = 164; continue _fun00001 }
 161:
            oscar = backup;
 164:
            entity['onPress'] = oscar;
            oscar = new Array(3);
            oscar[0] = foxtrot;
            if(!verify) { _fun00002_ip = 184; continue _fun00001 }
 179:
            verify = yankee.disabled;
 184:
            oscar[1] = verify;
            yankee = report.collapsibleContent;
            verify = null;
            yankee = verify != yankee;
            if(!yankee) { _fun00002_ip = 206; continue _fun00001 }
 203:
            yankee = romeo;
 206:
            oscar[2] = yankee;
            entity['DEPRECATED_style'] = oscar;
            oscar = report.name;
            entity['label'] = oscar;
            oscar = report.desc;
            entity['subLabel'] = oscar;
            oscar = null;
            if(offset) { _fun00002_ip = 248; continue _fun00001 }
 240:
            oscar = null;
            if(!options) { _fun00002_ip = 248; continue _fun00001 }
 245:
            oscar = golf;
 248:
            entity['trailing'] = oscar;
            oscar = report.leading;
            if(!(verify != oscar)) { _fun00002_ip = 271; continue _fun00001 }
 263:
            report = report.leading;
            _fun00002_ip = 287; continue _fun00001;
 271:
            oscar = null;
            if(!offset) { _fun00002_ip = 284; continue _fun00001 }
 276:
            oscar = null;
            if(!options) { _fun00002_ip = 284; continue _fun00001 }
 281:
            oscar = golf;
 284:
            report = oscar;
 287:
            entity['leading'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    mike = function(argFoo) { // Original name: RadioItem
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            yankee = entity.option;
            var _closure2_slot0 = yankee;
            romeo = entity.checked;
            var _closure2_slot1 = romeo;
            kilo = entity.style;
            var _closure2_slot2 = kilo;
            backup = entity.size;
            var _closure2_slot3 = backup;
            foxtrot = entity.disabled;
            golf = entity.indicatorLeft;
            var _closure2_slot4 = golf;
            tango = entity.showIndicator;
            var _closure2_slot5 = tango;
            entity = entity.onPress;
            var _closure2_slot6 = entity;
            report = undefined;
            var _closure2_slot8 = report;
            entity = _closure1_slot9;
            offset = entity.bind(report)();
            options = function(argFoo) { // Original name: handlePress
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    mike = argFoo;
                    entity = mike.preventDefault;
                    entity = entity.bind(mike)();
                    zulu = _closure2_slot6;
                    entity = null;
                    zulu = entity == zulu;
                    tango = undefined;
                    entity = undefined;
                    if(zulu) { _fun00006_ip = 46; continue _fun00005 }
 33:
                    zulu = _closure2_slot6;
                    mike = _closure2_slot0;
                    entity = zulu.bind(tango)(mike);
 46:
                    return entity;
                }
            };
            var _closure2_slot7 = options;
            if(foxtrot) { _fun00004_ip = 111; continue _fun00003 }
 106:
            foxtrot = yankee.disabled;
 111:
            _closure2_slot8 = foxtrot;
            mike = yankee.collapsibleContent;
            entity = null;
            if(!(entity == mike)) { _fun00004_ip = 187; continue _fun00003 }
 127:
            zulu = _closure1_slot5;
            mike = _closure1_slot15;
            entity = {};
            entity['option'] = yankee;
            entity['checked'] = romeo;
            entity['style'] = kilo;
            entity['size'] = backup;
            foxtrot = !foxtrot;
            foxtrot = !foxtrot;
            entity['disabled'] = foxtrot;
            entity['onPress'] = options;
            entity['indicatorLeft'] = golf;
            entity['showIndicator'] = tango;
            entity = zulu.bind(report)(mike, entity);
            _fun00004_ip = 284; continue _fun00003;
 187:
            tango = _closure1_slot5;
            zulu = _closure1_slot3;
            mike = {};
            golf = offset.collapsibleContainer;
            mike['style'] = golf;
            options = _closure1_slot5;
            golf = _closure1_slot0;
            foxtrot = _closure1_slot1;
            oscar = 8;
            oscar = foxtrot[oscar];
            golf = golf.bind(report)(oscar);
            oscar = {};
            oscar['isExpanded'] = romeo;
            yankee = yankee.collapsibleContent;
            oscar['collapsibleContent'] = yankee;
            offset = offset.collapsibleStyle;
            oscar['style'] = offset;
            verify = function(argFoo) { // Original name: children
                entity = argFoo;
                entity = entity.onPress;
                var _closure3_slot0 = entity;
                tango = _closure1_slot5;
                zulu = _closure1_slot15;
                mike = {};
                oscar = _closure2_slot0;
                mike['option'] = oscar;
                oscar = _closure2_slot1;
                mike['checked'] = oscar;
                oscar = _closure2_slot2;
                mike['style'] = oscar;
                oscar = _closure2_slot3;
                mike['size'] = oscar;
                oscar = _closure2_slot8;
                oscar = !oscar;
                oscar = !oscar;
                mike['disabled'] = oscar;
                report = function(argFoo) { // Original name: onPress
                    zulu = argFoo;
                    mike = _closure2_slot7;
                    entity = undefined;
                    mike = mike.bind(entity)(zulu);
                    mike = _closure3_slot0;
                    mike = mike.bind(entity)(zulu);
                    return entity;
                };
                mike['onPress'] = report;
                report = _closure2_slot4;
                mike['indicatorLeft'] = report;
                entity = _closure2_slot5;
                mike['showIndicator'] = entity;
                entity = undefined;
                entity = tango.bind(entity)(zulu, mike);
                return entity;
            };
            oscar['children'] = verify;
            oscar = options.bind(report)(golf, oscar);
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 284:
            return entity;
        }
    };
    var _closure1_slot16 = mike;
    report = function(argFoo) { // Original name: RadioGroup
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            mike = entity.value;
            tango = undefined;
            if(!(mike === tango)) { _fun00008_ip = 18; continue _fun00007 }
 16:
            mike = null;
 18:
            var _closure2_slot0 = mike;
            golf = entity.options;
            if(!(golf === tango)) { _fun00008_ip = 35; continue _fun00007 }
 31:
            golf = new Array(0);
 35:
            var _closure2_slot1 = golf;
            mike = entity.style;
            var _closure2_slot2 = mike;
            mike = entity.size;
            if(!(mike === tango)) { _fun00008_ip = 70; continue _fun00007 }
 57:
            zulu = _closure1_slot7;
            mike = zulu.MEDIUM;
 70:
            var _closure2_slot3 = mike;
            mike = entity.disabled;
            if(!(mike === tango)) { _fun00008_ip = 85; continue _fun00007 }
 83:
            mike = false;
 85:
            var _closure2_slot4 = mike;
            mike = entity.withSpacing;
            if(!(mike === tango)) { _fun00008_ip = 101; continue _fun00007 }
 99:
            mike = false;
 101:
            var _closure2_slot5 = mike;
            mike = entity.indicatorLeft;
            if(!(mike === tango)) { _fun00008_ip = 117; continue _fun00007 }
 115:
            mike = false;
 117:
            var _closure2_slot6 = mike;
            mike = entity.showIndicator;
            if(!(mike === tango)) { _fun00008_ip = 133; continue _fun00007 }
 131:
            mike = true;
 133:
            var _closure2_slot7 = mike;
            mike = entity.withDividers;
            if(!(mike === tango)) { _fun00008_ip = 149; continue _fun00007 }
 147:
            mike = true;
 149:
            var _closure2_slot8 = mike;
            entity = entity.onChange;
            if(!(entity === tango)) { _fun00008_ip = 170; continue _fun00007 }
 163:
            entity = _closure1_slot4;
 170:
            var _closure2_slot9 = entity;
            var _closure2_slot10 = tango;
            mike = _closure1_slot9;
            mike = mike.bind(tango)();
            _closure2_slot10 = mike;
            zulu = _closure1_slot5;
            mike = _closure1_slot3;
            entity = {};
            oscar = golf.map;
            report = function(argFoo, argBar) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    oscar = argFoo;
                    verify = argBar;
                    report = _closure1_slot6;
                    entity = _closure1_slot2;
                    tango = entity.Fragment;
                    zulu = {};
                    sizing = _closure1_slot5;
                    backup = _closure1_slot16;
                    yankee = {};
                    yankee['option'] = oscar;
                    mike = _closure2_slot0;
                    entity = oscar.value;
                    entity = mike === entity;
                    yankee['checked'] = entity;
                    mike = _closure2_slot2;
                    entity = new Array(2);
                    entity[0] = mike;
                    mike = _closure2_slot1;
                    mike = mike.length;
                    foxtrot = 1;
                    mike = mike - foxtrot;
                    if(!(verify !== mike)) { _fun00010_ip = 117; continue _fun00009 }
 92:
                    mike = _closure2_slot5;
                    if(mike) { _fun00010_ip = 103; continue _fun00009 }
 99:
                    mike = {};
                    _fun00010_ip = 115; continue _fun00009;
 103:
                    golf = {};
                    options = 8;
                    golf['marginBottom'] = options;
                    mike = golf;
 115:
                    _fun00010_ip = 128; continue _fun00009;
 117:
                    golf = {};
                    options = 0;
                    golf['marginBottom'] = options;
                    mike = golf;
 128:
                    entity[1] = mike;
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
                    options = entity.JSON;
                    golf = options.stringify;
                    mike = oscar.value;
                    offset = golf.bind(options)(mike);
                    mike = entity.HermesInternal;
                    mike = mike.concat;
                    options = 'radio-option-';
                    golf = '-';
                    offset = mike.bind(options)(offset, golf, verify);
                    mike = undefined;
                    yankee = sizing.bind(mike)(backup, yankee, offset);
                    offset = new Array(2);
                    offset[0] = yankee;
                    yankee = _closure2_slot1;
                    yankee = yankee.length;
                    foxtrot = yankee - foxtrot;
                    yankee = null;
                    if(!(verify !== foxtrot)) { _fun00010_ip = 305; continue _fun00009 }
 266:
                    foxtrot = _closure2_slot8;
                    yankee = null;
                    if(!foxtrot) { _fun00010_ip = 305; continue _fun00009 }
 275:
                    backup = _closure1_slot5;
                    foxtrot = _closure1_slot3;
                    romeo = {};
                    kilo = _closure2_slot10;
                    kilo = kilo.divider;
                    romeo['style'] = kilo;
                    yankee = backup.bind(mike)(foxtrot, romeo);
 305:
                    offset[1] = yankee;
                    zulu['children'] = offset;
                    yankee = entity.JSON;
                    offset = yankee.stringify;
                    oscar = oscar.value;
                    oscar = offset.bind(yankee)(oscar);
                    entity = entity.HermesInternal;
                    entity = entity.concat;
                    entity = entity.bind(options)(oscar, golf, verify);
                    entity = report.bind(mike)(tango, zulu, entity);
                    return entity;
                }
            };
            report = oscar.bind(golf)(report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    entity = global;
    offset = entity.Object;
    oscar = offset.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(offset)(zulu, entity, tango);
    entity = 0;
    oscar = options[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(oscar);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = options[tango];
    tango = golf.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot3 = tango;
    romeo = 2;
    tango = options[romeo];
    tango = golf.bind(entity)(tango);
    kilo = tango.Fonts;
    tango = tango.NOOP;
    var _closure1_slot4 = tango;
    yankee = 3;
    tango = options[yankee];
    tango = golf.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot5 = tango;
    tango = options[yankee];
    tango = golf.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot6 = tango;
    oscar = {};
    offset = 8;
    oscar['SMALL'] = offset;
    tango = 'SMALL';
    oscar[offset] = tango;
    offset = 10;
    oscar['MEDIUM'] = offset;
    tango = 'MEDIUM';
    oscar[offset] = tango;
    offset = 12;
    oscar['LARGE'] = offset;
    tango = 'LARGE';
    oscar[offset] = tango;
    var _closure1_slot7 = oscar;
    offset = {};
    tango = oscar.SMALL;
    offset[tango] = romeo;
    tango = oscar.MEDIUM;
    offset[tango] = yankee;
    yankee = oscar.LARGE;
    tango = 4;
    offset[yankee] = tango;
    var _closure1_slot8 = offset;
    tango = options[tango];
    yankee = golf.bind(entity)(tango);
    offset = yankee.createStyles;
    tango = {};
    romeo = {'flex': 0, 'marginRight': 8, 'borderRadius': null, 'borderColor': null, 'borderWidth': 2};
    foxtrot = 5;
    sizing = options[foxtrot];
    sizing = backup.bind(entity)(sizing);
    sizing = sizing.radii;
    sizing = sizing.round;
    romeo['borderRadius'] = sizing;
    sizing = options[foxtrot];
    sizing = backup.bind(entity)(sizing);
    sizing = sizing.colors;
    sizing = sizing.TEXT_MUTED;
    romeo['borderColor'] = sizing;
    tango['radioIcon'] = romeo;
    romeo = {};
    sizing = options[foxtrot];
    sizing = backup.bind(entity)(sizing);
    sizing = sizing.colors;
    sizing = sizing.INTERACTIVE_ACTIVE;
    romeo['borderColor'] = sizing;
    tango['radioIconSelected'] = romeo;
    romeo = {};
    sizing = options[foxtrot];
    sizing = backup.bind(entity)(sizing);
    sizing = sizing.radii;
    sizing = sizing.round;
    romeo['borderRadius'] = sizing;
    sizing = options[foxtrot];
    sizing = backup.bind(entity)(sizing);
    sizing = sizing.colors;
    sizing = sizing.CONTROL_BRAND_FOREGROUND;
    romeo['backgroundColor'] = sizing;
    tango['radioTick'] = romeo;
    romeo = {'flex': 1, 'flexGrow': 1, 'flexDirection': 'column'};
    tango['radioBarInternal'] = romeo;
    romeo = {};
    sizing = 6;
    output = options[sizing];
    update = backup.bind(entity)(output);
    echo = kilo.PRIMARY_MEDIUM;
    output = options[foxtrot];
    output = backup.bind(entity)(output);
    output = output.colors;
    result = output.INTERACTIVE_NORMAL;
    output = 16;
    control = update.bind(entity)(echo, result, output);
    vacuum = romeo;
    output = copyDataProperties(vacuum, control);
    tango['radioOptionName'] = romeo;
    romeo = {};
    output = options[foxtrot];
    output = backup.bind(entity)(output);
    output = output.colors;
    output = output.INTERACTIVE_ACTIVE;
    romeo['color'] = output;
    tango['radioOptionSelected'] = romeo;
    romeo = {};
    sizing = options[sizing];
    result = backup.bind(entity)(sizing);
    output = kilo.PRIMARY_MEDIUM;
    kilo = options[foxtrot];
    kilo = backup.bind(entity)(kilo);
    kilo = kilo.colors;
    sizing = kilo.INTERACTIVE_NORMAL;
    kilo = 14;
    control = result.bind(entity)(output, sizing, kilo);
    vacuum = romeo;
    kilo = copyDataProperties(vacuum, control);
    tango['radioOptionDesc'] = romeo;
    romeo = {};
    kilo = 0.3;
    romeo['opacity'] = kilo;
    tango['disabled'] = romeo;
    romeo = {'height': 1, 'alignSelf': 'stretch', 'backgroundColor': null, 'marginLeft': 16};
    kilo = options[foxtrot];
    kilo = backup.bind(entity)(kilo);
    kilo = kilo.colors;
    kilo = kilo.BACKGROUND_MODIFIER_ACCENT;
    romeo['backgroundColor'] = kilo;
    tango['divider'] = romeo;
    romeo = {};
    kilo = options[foxtrot];
    kilo = backup.bind(entity)(kilo);
    kilo = kilo.radii;
    kilo = kilo.sm;
    romeo['borderRadius'] = kilo;
    kilo = 'hidden';
    romeo['overflow'] = kilo;
    tango['collapsibleStyle'] = romeo;
    romeo = {};
    kilo = options[foxtrot];
    kilo = backup.bind(entity)(kilo);
    kilo = kilo.colors;
    kilo = kilo.BACKGROUND_TERTIARY;
    romeo['backgroundColor'] = kilo;
    tango['collapsibleBackgroundSelected'] = romeo;
    romeo = {};
    foxtrot = options[foxtrot];
    foxtrot = backup.bind(entity)(foxtrot);
    foxtrot = foxtrot.colors;
    foxtrot = foxtrot.BACKGROUND_SECONDARY;
    romeo['backgroundColor'] = foxtrot;
    tango['collapsibleBackground'] = romeo;
    romeo = {'paddingVertical': 4, 'paddingHorizontal': 12};
    tango['collapsibleContainer'] = romeo;
    tango = offset.bind(yankee)(tango);
    var _closure1_slot9 = tango;
    tango = function() { // Original name: getOuterStylesFromSize
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            zulu = arguments[0];
            entity = undefined;
            if(!(zulu === entity)) { _fun00012_ip = 22; continue _fun00011 }
 9:
            entity = _closure1_slot7;
            zulu = entity.MEDIUM;
 22:
            entity = {};
            mike = 2;
            tango = mike * zulu;
            entity['width'] = tango;
            mike = mike * zulu;
            entity['height'] = mike;
            mike = _closure1_slot8;
            mike = mike[zulu];
            entity['padding'] = mike;
            return entity;
        }
    };
    var _closure1_slot10 = tango;
    tango = function() { // Original name: getTickStylesFromSize
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            mike = arguments[0];
            entity = undefined;
            if(!(mike === entity)) { _fun00014_ip = 22; continue _fun00013 }
 9:
            entity = _closure1_slot7;
            mike = entity.MEDIUM;
 22:
            entity = {};
            entity['width'] = mike;
            entity['height'] = mike;
            return entity;
        }
    };
    var _closure1_slot11 = tango;
    tango = function(argFoo) { // Original name: RadioEmpty
        entity = argFoo;
        options = entity.size;
        oscar = entity.style;
        entity = _closure1_slot9;
        tango = undefined;
        report = entity.bind(tango)();
        zulu = _closure1_slot5;
        mike = _closure1_slot3;
        entity = {};
        verify = report.radioIcon;
        report = new Array(3);
        report[0] = verify;
        golf = _closure1_slot10;
        golf = golf.bind(tango)(options);
        report[1] = golf;
        report[2] = oscar;
        entity['style'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot12 = tango;
    tango = function(argFoo) { // Original name: RadioSelected
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = argFoo;
            offset = entity.size;
            golf = entity.active;
            oscar = entity.style;
            entity = _closure1_slot9;
            tango = undefined;
            options = entity.bind(tango)();
            zulu = _closure1_slot5;
            mike = _closure1_slot3;
            entity = {};
            yankee = options.radioIcon;
            report = new Array(4);
            report[0] = yankee;
            yankee = _closure1_slot10;
            yankee = yankee.bind(tango)(offset);
            report[1] = yankee;
            if(!golf) { _fun00016_ip = 78; continue _fun00015 }
 72:
            golf = options.radioIconSelected;
 78:
            report[2] = golf;
            report[3] = oscar;
            entity['style'] = report;
            golf = _closure1_slot5;
            oscar = _closure1_slot3;
            report = {};
            yankee = options.radioTick;
            options = new Array(2);
            options[0] = yankee;
            verify = _closure1_slot11;
            verify = verify.bind(tango)(offset);
            options[1] = verify;
            report['style'] = options;
            report = golf.bind(tango)(oscar, report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot13 = tango;
    tango = function(argFoo) { // Original name: RadioIndicator
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            entity = argFoo;
            golf = entity.size;
            oscar = entity.active;
            mike = entity.style;
            report = _closure1_slot5;
            if(oscar) { _fun00018_ip = 53; continue _fun00017 }
 29:
            options = _closure1_slot12;
            tango = {};
            tango['size'] = golf;
            tango['style'] = mike;
            entity = undefined;
            entity = report.bind(entity)(options, tango);
            _fun00018_ip = 80; continue _fun00017;
 53:
            tango = _closure1_slot13;
            zulu = {};
            zulu['size'] = golf;
            zulu['active'] = oscar;
            zulu['style'] = mike;
            mike = undefined;
            entity = report.bind(mike)(tango, zulu);
 80:
            return entity;
        }
    };
    var _closure1_slot14 = tango;
    tango['Sizes'] = oscar;
    report['Sizes'] = oscar;
    oscar = 9;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'uikit-native/RadioGroup.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['default'] = report;
    zulu['RadioIndicator'] = tango;
    zulu['RadioItem'] = mike;
    return entity;
})();