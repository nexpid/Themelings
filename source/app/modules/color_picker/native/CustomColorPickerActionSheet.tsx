// app/modules/color_picker/native/CustomColorPickerActionSheet.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    yankee = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: SuggestedColors
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            options = entity.suggestedColors;
            mike = entity.onSelect;
            var _closure2_slot0 = mike;
            entity = entity.color;
            var _closure2_slot1 = entity;
            entity = _closure1_slot8;
            report = undefined;
            golf = entity.bind(report)();
            var _closure2_slot2 = golf;
            verify = null;
            zulu = verify == options;
            entity = null;
            if(zulu) { _fun00002_ip = 118; continue _fun00001 }
 58:
            tango = options.length;
            zulu = 0;
            entity = null;
            if(!(zulu !== tango)) { _fun00002_ip = 118; continue _fun00001 }
 71:
            tango = _closure1_slot6;
            zulu = _closure1_slot5;
            mike = {};
            golf = golf.suggestedColorsContainer;
            mike['style'] = golf;
            golf = options.map;
            oscar = function(argFoo, argBar) {
                verify = argFoo;
                var _closure3_slot0 = verify;
                report = _closure1_slot6;
                zulu = _closure1_slot1;
                tango = _closure1_slot2;
                mike = 6;
                mike = tango[mike];
                tango = undefined;
                zulu = zulu.bind(tango)(mike);
                mike = {};
                mike['color'] = verify;
                golf = _closure2_slot2;
                golf = golf.suggestedColor;
                mike['style'] = golf;
                oscar = _closure2_slot1;
                oscar = verify === oscar;
                mike['selected'] = oscar;
                entity = function() { // Original name: onSelect
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        zulu = _closure2_slot0;
                        mike = null;
                        if(!(mike != zulu)) { _fun00004_ip = 31; continue _fun00003 }
 13:
                        zulu = _closure2_slot0;
                        mike = _closure3_slot0;
                        entity = undefined;
                        entity = zulu.bind(entity)(mike);
 31:
                        entity = undefined;
                        return entity;
                    }
                };
                mike['onSelect'] = entity;
                entity = global;
                entity = entity.HermesInternal;
                options = entity.concat;
                golf = '';
                oscar = '-';
                entity = argBar;
                entity = options.bind(golf)(verify, oscar, entity);
                entity = report.bind(tango)(zulu, mike, entity);
                return entity;
            };
            oscar = golf.bind(options)(oscar);
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 118:
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = yankee.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    golf = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(golf);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot5 = tango;
    tango = 3;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot6 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot7 = tango;
    tango = 4;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {};
    offset = 5;
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.spacing;
    romeo = romeo.PX_16;
    verify['paddingHorizontal'] = romeo;
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.spacing;
    romeo = romeo.PX_16;
    verify['paddingBottom'] = romeo;
    tango['container'] = verify;
    verify = {'alignItems': 'center', 'justifyContent': 'center'};
    tango['save'] = verify;
    verify = {'minWidth': 32, 'height': 32};
    offset = oscar[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.radii;
    offset = offset.xs;
    verify['borderRadius'] = offset;
    tango['suggestedColor'] = verify;
    verify = {'flexDirection': 'row', 'justifyContent': 'center'};
    tango['suggestedColorsContainer'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot8 = tango;
    tango = 20;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/color_picker/native/CustomColorPickerActionSheet.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: CustomColorPickerActionSheet
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            mike = argFoo;
            report = mike.color;
            entity = mike.onSelect;
            var _closure2_slot0 = entity;
            oscar = mike.suggestedColors;
            tango = undefined;
            var _closure2_slot7 = tango;
            var _closure2_slot8 = tango;
            mike = _closure1_slot8;
            options = mike.bind(tango)();
            zulu = _closure1_slot0;
            offset = _closure1_slot2;
            update = 7;
            mike = offset[update];
            golf = zulu.bind(tango)(mike);
            mike = golf.int2hex;
            yankee = mike.bind(golf)(report);
            mike = offset[update];
            golf = zulu.bind(tango)(mike);
            mike = golf.int2hsv;
            mike = mike.bind(golf)(report);
            kilo = mike.h;
            backup = mike.s;
            golf = mike.v;
            sizing = _closure1_slot4;
            mike = sizing.useState;
            foxtrot = mike.bind(sizing)(yankee);
            yankee = _closure1_slot3;
            mike = 2;
            yankee = yankee.bind(tango)(foxtrot, mike);
            mike = 0;
            echo = yankee[mike];
            var _closure2_slot1 = echo;
            mike = 1;
            mike = yankee[mike];
            var _closure2_slot2 = mike;
            foxtrot = sizing.useMemo;
            yankee = new Array(1);
            yankee[0] = echo;
            mike = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zulu = _closure2_slot1;
                    mike = null;
                    if(!(mike != zulu)) { _fun00008_ip = 99; continue _fun00007 }
 13: // try_start_0
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 7;
                    zulu = zulu[mike];
                    mike = undefined;
                    zulu = tango.bind(mike)(zulu);
                    mike = zulu.hex2int;
                    entity = _closure2_slot1;
                    entity = mike.bind(zulu)(entity);
 53: // try_end0
                    return entity;
 55: // catch_target0
                    CatchBlockStart(arg_register=0);
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 7;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.hex2int;
                    entity = '#000000';
                    entity = mike.bind(zulu)(entity);
                    return entity;
 99:
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 7;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.hex2int;
                    entity = '#000000';
                    entity = mike.bind(zulu)(entity);
                    return entity;
                }
            };
            output = foxtrot.bind(sizing)(mike, yankee);
            var _closure2_slot3 = output;
            mike = 8;
            yankee = offset[mike];
            foxtrot = zulu.bind(tango)(yankee);
            yankee = foxtrot.useSharedValue;
            kilo = yankee.bind(foxtrot)(kilo);
            var _closure2_slot4 = kilo;
            yankee = offset[mike];
            foxtrot = zulu.bind(tango)(yankee);
            yankee = foxtrot.useSharedValue;
            backup = yankee.bind(foxtrot)(backup);
            var _closure2_slot5 = backup;
            mike = offset[mike];
            zulu = zulu.bind(tango)(mike);
            mike = zulu.useSharedValue;
            foxtrot = mike.bind(zulu)(golf);
            var _closure2_slot6 = foxtrot;
            result = null;
            mike = result == oscar;
            vacuum = undefined;
            if(mike) { _fun00006_ip = 301; continue _fun00005 }
 274:
            zulu = oscar.map;
            mike = function(argFoo) {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 7;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.hex2int;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            zulu = zulu.bind(oscar)(mike);
            mike = zulu.concat;
            vacuum = mike.bind(zulu)(report);
 301:
            mike = function(argFoo) { // Original name: updateInputHexValueFromHsv
                zulu = _closure1_slot0;
                tango = _closure1_slot2;
                entity = 9;
                mike = tango[entity];
                entity = undefined;
                oscar = zulu.bind(entity)(mike);
                report = oscar.hsvToRgbWorklet;
                mike = argFoo;
                golf = report.bind(oscar)(mike);
                mike = 10;
                mike = tango[mike];
                oscar = zulu.bind(entity)(mike);
                report = oscar.rgbToHex;
                mike = 0;
                tango = golf[mike];
                mike = 1;
                zulu = golf[mike];
                mike = 2;
                mike = golf[mike];
                zulu = report.bind(oscar)(tango, zulu, mike);
                mike = _closure2_slot2;
                mike = mike.bind(entity)(zulu);
                return entity;
            };
            _closure2_slot7 = mike;
            oscar = _closure1_slot4;
            zulu = oscar.useCallback;
            mike = new Array(6);
            mike[0] = kilo;
            mike[1] = backup;
            mike[2] = foxtrot;
            mike[3] = entity;
            mike[4] = output;
            mike[5] = echo;
            entity = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    mike = _closure2_slot1;
                    tango = null;
                    if(!(tango != mike)) { _fun00010_ip = 57; continue _fun00009 }
 13:
                    report = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 10;
                    mike = zulu[mike];
                    zulu = undefined;
                    oscar = report.bind(zulu)(mike);
                    report = oscar.hex2rgb2hsv;
                    mike = _closure2_slot1;
                    mike = report.bind(oscar)(mike);
                    if(!(tango == mike)) { _fun00010_ip = 155; continue _fun00009 }
 57:
                    report = _closure2_slot0;
                    oscar = _closure1_slot1;
                    tango = _closure1_slot2;
                    mike = 11;
                    mike = tango[mike];
                    tango = undefined;
                    verify = oscar.bind(tango)(mike);
                    options = verify.hsv;
                    oscar = _closure2_slot4;
                    mike = oscar.get;
                    golf = mike.bind(oscar)();
                    oscar = _closure2_slot5;
                    mike = oscar.get;
                    oscar = mike.bind(oscar)();
                    offset = _closure2_slot6;
                    mike = offset.get;
                    mike = mike.bind(offset)();
                    oscar = options.bind(verify)(golf, oscar, mike);
                    mike = oscar.num;
                    mike = mike.bind(oscar)();
                    mike = report.bind(tango)(mike);
                    _fun00010_ip = 168; continue _fun00009;
 155:
                    mike = _closure2_slot0;
                    entity = _closure2_slot3;
                    entity = mike.bind(zulu)(entity);
 168:
                    entity = undefined;
                    return entity;
                }
            };
            report = zulu.bind(oscar)(entity, mike);
            _closure2_slot8 = report;
            zulu = oscar.useCallback;
            mike = new Array(1);
            mike[0] = report;
            entity = function() {
                mike = _closure2_slot8;
                entity = undefined;
                mike = mike.bind(entity)();
                zulu = _closure1_slot1;
                tango = _closure1_slot2;
                mike = 12;
                mike = tango[mike];
                zulu = zulu.bind(entity)(mike);
                mike = zulu.hideActionSheet;
                mike = mike.bind(zulu)();
                return entity;
            };
            control = zulu.bind(oscar)(entity, mike);
            zulu = _closure1_slot6;
            offset = _closure1_slot0;
            sequence = _closure1_slot2;
            entity = 13;
            entity = sequence[entity];
            entity = offset.bind(tango)(entity);
            mike = entity.BottomSheet;
            entity = {};
            entity['onDismiss'] = report;
            report = true;
            entity['startExpanded'] = report;
            golf = _closure1_slot6;
            report = 14;
            report = sequence[report];
            report = offset.bind(tango)(report);
            oscar = report.BottomSheetTitleHeader;
            report = {};
            config = 15;
            yankee = sequence[config];
            yankee = offset.bind(tango)(yankee);
            source = yankee.intl;
            sizing = source.string;
            yankee = sequence[config];
            yankee = offset.bind(tango)(yankee);
            yankee = yankee.t;
            yankee = yankee.WTqQ5e;
            yankee = sizing.bind(source)(yankee);
            report['title'] = yankee;
            source = _closure1_slot6;
            yankee = 16;
            yankee = sequence[yankee];
            yankee = offset.bind(tango)(yankee);
            sizing = yankee.Button;
            yankee = {'variant': 'secondary', 'size': 'sm'};
            record = sequence[config];
            record = offset.bind(tango)(record);
            context = record.intl;
            record = context.string;
            config = sequence[config];
            config = offset.bind(tango)(config);
            config = config.t;
            config = config.XqMe3N;
            config = record.bind(context)(config);
            yankee['text'] = config;
            yankee['onPress'] = control;
            yankee = source.bind(tango)(sizing, yankee);
            report['trailing'] = yankee;
            report = golf.bind(tango)(oscar, report);
            entity['header'] = report;
            golf = _closure1_slot7;
            oscar = _closure1_slot5;
            report = {};
            options = options.container;
            report['style'] = options;
            yankee = _closure1_slot6;
            options = 17;
            options = sequence[options];
            options = offset.bind(tango)(options);
            offset = options.TextInput;
            options = {};
            options['value'] = echo;
            sizing = function(argFoo) { // Original name: onChange
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    mike = argFoo;
                    entity = mike.length;
                    tango = 0;
                    entity = entity > tango;
                    if(!entity) { _fun00012_ip = 36; continue _fun00011 }
 17:
                    zulu = mike.charAt;
                    tango = zulu.bind(mike)(tango);
                    zulu = '#';
                    entity = zulu !== tango;
 36:
                    report = mike;
                    if(!entity) { _fun00012_ip = 50; continue _fun00011 }
 42:
                    entity = '#';
                    report = entity + mike;
 50:
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 10;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.hex2rgb2hsv;
                    mike = mike.bind(zulu)(report);
                    tango = _closure2_slot2;
                    tango = tango.bind(entity)(report);
                    tango = null;
                    if(!(tango != mike)) { _fun00012_ip = 172; continue _fun00011 }
 104:
                    oscar = _closure2_slot4;
                    report = oscar.set;
                    tango = mike.h;
                    tango = report.bind(oscar)(tango);
                    golf = _closure2_slot5;
                    oscar = golf.set;
                    tango = mike.s;
                    report = 100;
                    tango = tango / report;
                    tango = oscar.bind(golf)(tango);
                    tango = _closure2_slot6;
                    zulu = tango.set;
                    mike = mike.v;
                    mike = mike / report;
                    mike = zulu.bind(tango)(mike);
 172:
                    return entity;
                }
            };
            options['onChange'] = sizing;
            options['maxLength'] = update;
            offset = yankee.bind(tango)(offset, options);
            options = new Array(3);
            options[0] = offset;
            sizing = _closure1_slot6;
            yankee = _closure1_slot9;
            offset = {};
            control = _closure1_slot1;
            source = 18;
            source = sequence[source];
            control = control.bind(tango)(source);
            source = control.uniq;
            source = source.bind(control)(vacuum);
            offset['suggestedColors'] = source;
            source = function(argFoo) { // Original name: onSelect
                report = argFoo;
                options = _closure2_slot2;
                tango = _closure1_slot0;
                oscar = _closure1_slot2;
                zulu = 7;
                golf = oscar[zulu];
                entity = undefined;
                verify = tango.bind(entity)(golf);
                golf = verify.int2hex;
                golf = golf.bind(verify)(report);
                golf = options.bind(entity)(golf);
                zulu = oscar[zulu];
                tango = tango.bind(entity)(zulu);
                zulu = tango.int2hsv;
                zulu = zulu.bind(tango)(report);
                golf = zulu.h;
                oscar = zulu.s;
                tango = zulu.v;
                report = _closure2_slot4;
                zulu = report.set;
                zulu = zulu.bind(report)(golf);
                report = _closure2_slot5;
                zulu = report.set;
                zulu = zulu.bind(report)(oscar);
                zulu = _closure2_slot6;
                mike = zulu.set;
                mike = mike.bind(zulu)(tango);
                return entity;
            };
            offset['onSelect'] = source;
            if(!(result == echo)) { _fun00006_ip = 813; continue _fun00005 }
 756:
            echo = _closure1_slot0;
            result = _closure1_slot2;
            result = result[update];
            control = echo.bind(tango)(result);
            source = control.hsv2int;
            result = kilo.get;
            update = result.bind(kilo)();
            result = backup.get;
            echo = result.bind(backup)();
            result = foxtrot.get;
            result = result.bind(foxtrot)();
            output = source.bind(control)(update, echo, result);
 813:
            offset['color'] = output;
            offset = sizing.bind(tango)(yankee, offset);
            options[1] = offset;
            yankee = _closure1_slot6;
            offset = _closure1_slot1;
            sizing = _closure1_slot2;
            verify = 19;
            verify = sizing[verify];
            offset = offset.bind(tango)(verify);
            verify = {};
            verify['hue'] = kilo;
            verify['saturation'] = backup;
            verify['value'] = foxtrot;
            romeo = function() { // Original name: onPanFinalize
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 8;
                mike = mike[entity];
                entity = undefined;
                report = zulu.bind(entity)(mike);
                zulu = report.runOnJS;
                mike = _closure2_slot7;
                zulu = zulu.bind(report)(mike);
                mike = {};
                oscar = _closure2_slot4;
                report = oscar.get;
                report = report.bind(oscar)();
                mike['h'] = report;
                oscar = _closure2_slot5;
                report = oscar.get;
                report = report.bind(oscar)();
                mike['s'] = report;
                report = _closure2_slot6;
                tango = report.get;
                tango = tango.bind(report)();
                mike['v'] = tango;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            verify['onPanFinalize'] = romeo;
            verify = yankee.bind(tango)(offset, verify);
            options[2] = verify;
            report['children'] = options;
            report = golf.bind(tango)(oscar, report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();