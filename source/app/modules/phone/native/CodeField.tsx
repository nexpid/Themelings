// app/modules/phone/native/CodeField.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    backup = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = backup;
    var _closure1_slot2 = golf;
    entity = function(argFoo) { // Original name: SingleCodeInput
        _fun88814: for(var _fun88814_ip = 0; ; ) switch(_fun88814_ip) {
 0:
            entity = argFoo;
            output = entity.loading;
            tango = undefined;
            if(!(output === tango)) { _fun88814_ip = 19; continue _fun88814 }
 17:
            output = false;
 19:
            sizing = entity.error;
            backup = entity.count;
            if(!(backup === tango)) { _fun88814_ip = 40; continue _fun88814 }
 33:
            backup = _closure1_slot10;
 40:
            result = entity.codeType;
            if(!(result === tango)) { _fun88814_ip = 63; continue _fun88814 }
 50:
            mike = _closure1_slot9;
            result = mike.NUMERIC;
 63:
            var _closure2_slot0 = result;
            mike = entity.onCodeEntered;
            var _closure2_slot1 = mike;
            foxtrot = entity.disabled;
            var _closure2_slot2 = tango;
            var _closure2_slot3 = tango;
            entity = _closure1_slot11;
            offset = entity.bind(tango)();
            zulu = _closure1_slot4;
            mike = zulu.useState;
            entity = '';
            zulu = mike.bind(zulu)(entity);
            mike = _closure1_slot3;
            entity = 2;
            mike = mike.bind(tango)(zulu, entity);
            entity = 0;
            romeo = mike[entity];
            _closure2_slot2 = romeo;
            entity = 1;
            entity = mike[entity];
            _closure2_slot3 = entity;
            zulu = _closure1_slot8;
            mike = _closure1_slot5;
            entity = {};
            report = offset.singleInputWrapper;
            entity['style'] = report;
            golf = _closure1_slot7;
            source = _closure1_slot0;
            yankee = _closure1_slot2;
            report = 9;
            report = yankee[report];
            report = source.bind(tango)(report);
            oscar = report.TextInput;
            report = {};
            options = true;
            report['autoFocus'] = options;
            report['errorMessage'] = sizing;
            report['value'] = romeo;
            sizing = 'characters';
            report['autoCapitalize'] = sizing;
            report['maxLength'] = backup;
            update = 10;
            sizing = yankee[update];
            sizing = source.bind(tango)(sizing);
            echo = sizing.intl;
            sizing = echo.string;
            yankee = yankee[update];
            yankee = source.bind(tango)(yankee);
            yankee = yankee.t;
            yankee = yankee.ysthAw;
            yankee = sizing.bind(echo)(yankee);
            report['accessibilityLabel'] = yankee;
            yankee = 'oneTimeCode';
            report['textContentType'] = yankee;
            yankee = _closure1_slot9;
            sizing = yankee.NUMERIC;
            yankee = 'default';
            if(!(result === sizing)) { _fun88814_ip = 323; continue _fun88814 }
 317:
            yankee = 'number-pad';
 323:
            report['keyboardType'] = yankee;
            yankee = function(argFoo) { // Original name: onChange
                _fun88815: for(var _fun88815_ip = 0; ; ) switch(_fun88815_ip) {
 0:
                    report = argFoo;
                    zulu = _closure2_slot0;
                    mike = _closure1_slot9;
                    mike = mike.NUMERIC;
                    if(!(zulu !== mike)) { _fun88815_ip = 43; continue _fun88815 }
 27:
                    tango = /[^A-Z0-9]/g;
                    _fun88815_ip = 57; continue _fun88815;
 43:
                    tango = /\D/g;
 57:
                    zulu = report.replace;
                    mike = '';
                    zulu = zulu.bind(report)(tango, mike);
                    mike = _closure2_slot3;
                    entity = undefined;
                    mike = mike.bind(entity)(zulu);
                    return entity;
                }
            };
            report['onChange'] = yankee;
            yankee = !foxtrot;
            report['editable'] = yankee;
            report['isClearable'] = options;
            oscar = golf.bind(tango)(oscar, report);
            report = new Array(2);
            report[0] = oscar;
            options = _closure1_slot7;
            golf = _closure1_slot5;
            oscar = {};
            offset = offset.singleInputButton;
            oscar['style'] = offset;
            yankee = _closure1_slot7;
            echo = _closure1_slot0;
            sizing = _closure1_slot2;
            verify = 11;
            verify = sizing[verify];
            verify = echo.bind(tango)(verify);
            offset = verify.Button;
            verify = {'loading': null, 'variant': 'primary', 'size': 'lg'};
            verify['loading'] = output;
            output = sizing[update];
            output = echo.bind(tango)(output);
            result = output.intl;
            output = result.string;
            sizing = sizing[update];
            sizing = echo.bind(tango)(sizing);
            sizing = sizing.t;
            sizing = sizing.13ofGh;
            sizing = output.bind(result)(sizing);
            verify['text'] = sizing;
            kilo = function() { // Original name: onPress
                zulu = _closure2_slot1;
                mike = _closure2_slot2;
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                return entity;
            };
            verify['onPress'] = kilo;
            romeo = romeo.length;
            romeo = romeo !== backup;
            if(romeo) { _fun88814_ip = 507; continue _fun88814 }
 504:
            romeo = foxtrot;
 507:
            verify['disabled'] = romeo;
            verify = yankee.bind(tango)(offset, verify);
            oscar['children'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo) { // Original name: CodeFieldInner
        _fun88817: for(var _fun88817_ip = 0; ; ) switch(_fun88817_ip) {
 0:
            entity = argFoo;
            config = entity.title;
            sizing = entity.description;
            source = entity.error;
            echo = entity.onCodeEntered;
            control = entity.loading;
            tango = undefined;
            if(!(control === tango)) { _fun88817_ip = 38; continue _fun88817 }
 36:
            control = false;
 38:
            update = entity.count;
            if(!(update === tango)) { _fun88817_ip = 54; continue _fun88817 }
 47:
            update = _closure1_slot10;
 54:
            result = entity.codeType;
            if(!(result === tango)) { _fun88817_ip = 77; continue _fun88817 }
 64:
            mike = _closure1_slot9;
            result = mike.NUMERIC;
 77:
            offset = entity.actions;
            oscar = entity.footer;
            golf = entity.backgroundStyle;
            output = entity.disabled;
            entity = _closure1_slot11;
            kilo = entity.bind(tango)();
            zulu = _closure1_slot8;
            mike = _closure1_slot6;
            entity = {};
            options = kilo.background;
            report = new Array(2);
            report[0] = options;
            report[1] = golf;
            entity['style'] = report;
            report = kilo.backgroundFlex;
            entity['contentContainerStyle'] = report;
            report = 'handled';
            entity['keyboardShouldPersistTaps'] = report;
            report = false;
            entity['alwaysBounceVertical'] = report;
            options = _closure1_slot8;
            golf = _closure1_slot5;
            report = {};
            verify = kilo.container;
            report['style'] = verify;
            sequence = _closure1_slot7;
            romeo = _closure1_slot0;
            vacuum = _closure1_slot2;
            yankee = 12;
            verify = vacuum[yankee];
            verify = romeo.bind(tango)(verify);
            foxtrot = verify.Text;
            verify = {'style': null, 'accessibilityRole': 'header', 'variant': 'heading-xl/extrabold', 'color': 'header-primary'};
            record = kilo.title;
            verify['style'] = record;
            verify['children'] = config;
            foxtrot = sequence.bind(tango)(foxtrot, verify);
            verify = new Array(4);
            verify[0] = foxtrot;
            foxtrot = _closure1_slot7;
            yankee = vacuum[yankee];
            yankee = romeo.bind(tango)(yankee);
            romeo = yankee.Text;
            yankee = {'style': null, 'variant': 'text-sm/medium', 'color': 'header-secondary'};
            vacuum = kilo.subtitle;
            yankee['style'] = vacuum;
            yankee['children'] = sizing;
            yankee = foxtrot.bind(tango)(romeo, yankee);
            verify[1] = yankee;
            foxtrot = _closure1_slot7;
            romeo = _closure1_slot5;
            yankee = {};
            kilo = kilo.inputContainer;
            yankee['style'] = kilo;
            sizing = _closure1_slot7;
            kilo = _closure1_slot12;
            backup = {};
            backup['loading'] = control;
            backup['error'] = source;
            backup['count'] = update;
            backup['onCodeEntered'] = echo;
            backup['codeType'] = result;
            backup['disabled'] = output;
            backup = sizing.bind(tango)(kilo, backup);
            yankee['children'] = backup;
            yankee = foxtrot.bind(tango)(romeo, yankee);
            verify[2] = yankee;
            verify[3] = offset;
            report['children'] = verify;
            golf = options.bind(tango)(golf, report);
            report = new Array(2);
            report[0] = golf;
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = global;
    options = entity.Object;
    report = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = golf[entity];
    entity = undefined;
    tango = backup.bind(entity)(tango);
    var _closure1_slot3 = tango;
    romeo = 1;
    report = golf[romeo];
    tango = argCorge;
    tango = tango.bind(entity)(report);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    report = tango.View;
    var _closure1_slot5 = report;
    tango = tango.ScrollView;
    var _closure1_slot6 = tango;
    tango = 3;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    sizing = tango.Fonts;
    kilo = 4;
    tango = golf[kilo];
    tango = oscar.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot7 = tango;
    tango = golf[kilo];
    tango = oscar.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot8 = tango;
    tango = {};
    report = 'numeric';
    tango['NUMERIC'] = report;
    report = 'alphanumeric';
    tango['ALPHANUMERIC'] = report;
    var _closure1_slot9 = tango;
    report = 6;
    var _closure1_slot10 = report;
    options = 5;
    options = golf[options];
    offset = oscar.bind(entity)(options);
    verify = offset.createStyles;
    options = {};
    yankee = {};
    yankee['flex'] = romeo;
    options['viewWrapper'] = yankee;
    yankee = {};
    romeo = golf[report];
    romeo = backup.bind(entity)(romeo);
    romeo = romeo.colors;
    romeo = romeo.BACKGROUND_MOBILE_SECONDARY;
    yankee['backgroundColor'] = romeo;
    options['background'] = yankee;
    yankee = {'flex': 1, 'justifyContent': 'space-between'};
    options['backgroundFlex'] = yankee;
    yankee = {};
    romeo = 16;
    yankee['padding'] = romeo;
    options['container'] = yankee;
    output = 'center';
    yankee = {'height': 190, 'alignSelf': 'center', 'resizeMode': 'contain'};
    options['image'] = yankee;
    yankee = {};
    yankee['textAlign'] = output;
    options['title'] = yankee;
    romeo = 8;
    yankee = {'marginTop': 8, 'lineHeight': 18, 'textAlign': 'center'};
    options['subtitle'] = yankee;
    yankee = {'color': null, 'textAlign': 'center', 'marginTop': 8};
    foxtrot = golf[report];
    foxtrot = backup.bind(entity)(foxtrot);
    foxtrot = foxtrot.unsafe_rawColors;
    foxtrot = foxtrot.RED_400;
    yankee['color'] = foxtrot;
    options['bodyError'] = yankee;
    foxtrot = '100%';
    yankee = {'marginTop': 20, 'width': '100%', 'alignItems': 'center'};
    options['inputContainer'] = yankee;
    yankee = {'maxWidth': 336, 'width': '100%', 'flexDirection': 'row', 'justifyContent': 'space-around'};
    options['codeContainer'] = yankee;
    yankee = {};
    yankee['width'] = kilo;
    options['spacer'] = yankee;
    yankee = {'borderWidth': 1, 'borderRadius': 5, 'alignItems': 'center'};
    result = golf[report];
    result = backup.bind(entity)(result);
    result = result.colors;
    result = result.BACKGROUND_TERTIARY;
    yankee['backgroundColor'] = result;
    result = golf[report];
    result = backup.bind(entity)(result);
    result = result.colors;
    result = result.BACKGROUND_TERTIARY;
    yankee['borderColor'] = result;
    options['inputWrapper'] = yankee;
    yankee = {};
    result = golf[report];
    result = backup.bind(entity)(result);
    result = result.unsafe_rawColors;
    result = result.RED_400;
    yankee['borderColor'] = result;
    options['inputWrapperError'] = yankee;
    yankee = {};
    yankee['textAlign'] = output;
    options['input'] = yankee;
    yankee = {};
    output = 7;
    output = golf[output];
    output = backup.bind(entity)(output);
    sizing = sizing.PRIMARY_MEDIUM;
    report = golf[report];
    report = backup.bind(entity)(report);
    report = report.colors;
    backup = report.TEXT_NORMAL;
    report = 14;
    update = output.bind(entity)(sizing, backup, report);
    source = yankee;
    backup = copyDataProperties(source, update);
    backup = 'marginHorizontal';
    yankee[backup] = kilo;
    options['actionSeparator'] = yankee;
    yankee = {};
    yankee['width'] = foxtrot;
    options['singleInputWrapper'] = yankee;
    yankee = {};
    foxtrot = 42;
    yankee['height'] = foxtrot;
    options['singleInput'] = yankee;
    yankee = {};
    yankee['marginTop'] = romeo;
    options['singleInputButton'] = yankee;
    options = verify.bind(offset)(options);
    var _closure1_slot11 = options;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/phone/native/CodeField.tsx';
    report = oscar.bind(golf)(report);
    report = function(argFoo) { // Original name: CodeField
        _fun88818: for(var _fun88818_ip = 0; ; ) switch(_fun88818_ip) {
 0:
            oscar = argFoo;
            entity = _closure1_slot11;
            report = undefined;
            golf = entity.bind(report)();
            entity = oscar.disableKeyboardAvoidingView;
            tango = _closure1_slot7;
            if(entity) { _fun88818_ip = 99; continue _fun88818 }
 29:
            zulu = _closure1_slot1;
            options = _closure1_slot2;
            entity = 13;
            entity = options[entity];
            zulu = zulu.bind(report)(entity);
            entity = {};
            golf = golf.viewWrapper;
            entity['style'] = golf;
            verify = _closure1_slot7;
            options = _closure1_slot13;
            golf = {};
            romeo = golf;
            yankee = oscar;
            offset = copyDataProperties(romeo, yankee);
            golf = verify.bind(report)(options, golf);
            entity['children'] = golf;
            entity = tango.bind(report)(zulu, entity);
            _fun88818_ip = 121; continue _fun88818;
 99:
            zulu = _closure1_slot13;
            mike = {};
            romeo = mike;
            yankee = oscar;
            oscar = copyDataProperties(romeo, yankee);
            entity = tango.bind(report)(zulu, mike);
 121:
            return entity;
        }
    };
    zulu['default'] = report;
    zulu['CodeType'] = tango;
    mike = function(argFoo) { // Original name: CodeBlocks
        _fun88819: for(var _fun88819_ip = 0; ; ) switch(_fun88819_ip) {
 0:
            entity = argFoo;
            zulu = entity.hasError;
            var _closure2_slot0 = zulu;
            offset = entity.onCodeEntered;
            var _closure2_slot1 = offset;
            golf = entity.count;
            tango = undefined;
            if(!(golf === tango)) { _fun88819_ip = 43; continue _fun88819 }
 36:
            golf = _closure1_slot10;
 43:
            var _closure2_slot2 = golf;
            entity = entity.codeType;
            if(!(entity === tango)) { _fun88819_ip = 70; continue _fun88819 }
 57:
            zulu = _closure1_slot9;
            entity = zulu.NUMERIC;
 70:
            var _closure2_slot3 = entity;
            var _closure2_slot4 = tango;
            var _closure2_slot5 = tango;
            var _closure2_slot6 = tango;
            var _closure2_slot7 = tango;
            var _closure2_slot8 = tango;
            var _closure2_slot9 = tango;
            zulu = _closure1_slot11;
            oscar = zulu.bind(tango)();
            _closure2_slot4 = oscar;
            verify = _closure1_slot4;
            report = verify.useState;
            options = global;
            zulu = options.Array;
            romeo = zulu.bind(tango)(golf);
            yankee = romeo.fill;
            zulu = '';
            zulu = yankee.bind(romeo)(zulu);
            verify = report.bind(verify)(zulu);
            report = _closure1_slot3;
            zulu = 2;
            yankee = report.bind(tango)(verify, zulu);
            zulu = 0;
            report = yankee[zulu];
            _closure2_slot5 = report;
            verify = 1;
            verify = yankee[verify];
            _closure2_slot6 = verify;
            yankee = _closure1_slot4;
            verify = yankee.useRef;
            options = options.Array;
            foxtrot = options.bind(tango)(golf);
            romeo = foxtrot.fill;
            options = null;
            options = romeo.bind(foxtrot)(options);
            options = verify.bind(yankee)(options);
            _closure2_slot7 = options;
            verify = _closure1_slot4;
            options = verify.useRef;
            options = options.bind(verify)(offset);
            _closure2_slot8 = options;
            offset = _closure1_slot4;
            verify = offset.useEffect;
            options = function() {
                mike = _closure2_slot8;
                entity = _closure2_slot1;
                mike['current'] = entity;
                entity = undefined;
                return entity;
            };
            options = verify.bind(offset)(options);
            offset = _closure1_slot4;
            verify = offset.useEffect;
            options = new Array(1);
            options[0] = report;
            report = function() {
                _fun88821: for(var _fun88821_ip = 0; ; ) switch(_fun88821_ip) {
 0:
                    tango = _closure2_slot5;
                    zulu = function(argFoo) { // Original name: isCodeEntered
                        zulu = argFoo;
                        mike = zulu.every;
                        entity = function(argFoo) {
                            mike = argFoo;
                            entity = mike.trim;
                            mike = entity.bind(mike)();
                            entity = '';
                            entity = entity !== mike;
                            return entity;
                        };
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    entity = undefined;
                    zulu = zulu.bind(entity)(tango);
                    if(!zulu) { _fun88821_ip = 58; continue _fun88821 }
 26:
                    tango = _closure2_slot8;
                    zulu = tango.current;
                    oscar = _closure2_slot5;
                    report = oscar.join;
                    mike = '';
                    mike = report.bind(oscar)(mike);
                    mike = zulu.bind(tango)(mike);
 58:
                    return entity;
                }
            };
            report = verify.bind(offset)(report, options);
            report = new Array(0);
            _closure2_slot9 = report;
            mike = function(argFoo) { // Original name: _loop
                _fun88824: for(var _fun88824_ip = 0; ; ) switch(_fun88824_ip) {
 0:
                    golf = argFoo;
                    var _closure3_slot0 = golf;
                    mike = _closure2_slot2;
                    entity = 2;
                    entity = mike / entity;
                    if(!(golf === entity)) { _fun88824_ip = 81; continue _fun88824 }
 27:
                    zulu = _closure2_slot9;
                    mike = zulu.push;
                    options = _closure1_slot7;
                    oscar = _closure1_slot5;
                    report = {};
                    entity = _closure2_slot4;
                    entity = entity.spacer;
                    report['style'] = entity;
                    tango = undefined;
                    entity = 'spacer';
                    entity = options.bind(tango)(oscar, report, entity);
                    entity = mike.bind(zulu)(entity);
 81:
                    tango = _closure2_slot9;
                    zulu = tango.push;
                    oscar = _closure1_slot7;
                    report = _closure1_slot5;
                    mike = {};
                    entity = _closure2_slot4;
                    options = entity.inputWrapper;
                    entity = new Array(2);
                    entity[0] = options;
                    verify = _closure2_slot0;
                    options = null;
                    if(!verify) { _fun88824_ip = 140; continue _fun88824 }
 130:
                    verify = _closure2_slot4;
                    options = verify.inputWrapperError;
 140:
                    entity[1] = options;
                    mike['style'] = entity;
                    offset = _closure1_slot7;
                    verify = _closure1_slot0;
                    options = _closure1_slot2;
                    entity = 8;
                    options = options[entity];
                    entity = undefined;
                    options = verify.bind(entity)(options);
                    verify = options.TextInput;
                    options = {};
                    backup = function(argFoo) { // Original name: ref
                        entity = argFoo;
                        mike = _closure2_slot7;
                        zulu = mike.current;
                        mike = _closure3_slot0;
                        zulu[mike] = entity;
                        return entity;
                    };
                    options['ref'] = backup;
                    kilo = {};
                    backup = 42;
                    kilo['height'] = backup;
                    sizing = _closure2_slot2;
                    backup = 252;
                    backup = backup / sizing;
                    kilo['width'] = backup;
                    backup = new Array(2);
                    backup[0] = kilo;
                    kilo = _closure2_slot4;
                    kilo = kilo.input;
                    backup[1] = kilo;
                    options['style'] = backup;
                    kilo = _closure2_slot3;
                    foxtrot = _closure1_slot9;
                    backup = foxtrot.NUMERIC;
                    foxtrot = 'default';
                    if(!(kilo === backup)) { _fun88824_ip = 271; continue _fun88824 }
 265:
                    foxtrot = 'phone-pad';
 271:
                    options['keyboardType'] = foxtrot;
                    foxtrot = 0;
                    foxtrot = foxtrot === golf;
                    options['autoFocus'] = foxtrot;
                    foxtrot = _closure2_slot5;
                    foxtrot = foxtrot[golf];
                    options['value'] = foxtrot;
                    foxtrot = function(argFoo) { // Original name: onKeyPress
                        tango = _closure3_slot0;
                        zulu = function(argFoo, argBar) { // Original name: onKeyPress
                            _fun88827: for(var _fun88827_ip = 0; ; ) switch(_fun88827_ip) {
 0:
                                zulu = argFoo;
                                entity = argBar;
                                entity = entity.nativeEvent;
                                mike = entity.key;
                                entity = 'Backspace';
                                if(!(entity === mike)) { _fun88827_ip = 119; continue _fun88827 }
 26:
                                entity = _closure2_slot5;
                                entity = entity[zulu];
                                golf = '';
                                if(!(golf === entity)) { _fun88827_ip = 158; continue _fun88827 }
 45:
                                oscar = _closure2_slot6;
                                yankee = _closure2_slot5;
                                entity = 1;
                                tango = zulu - entity;
                                report = new Array(0);
                                offset = 0;
                                romeo = report;
                                options = arraySpread(romeo, yankee, offset);
                                report[tango] = golf;
                                tango = undefined;
                                tango = oscar.bind(tango)(report);
                                mike = _closure2_slot7;
                                mike = mike.current;
                                entity = zulu - entity;
                                mike = mike[entity];
                                entity = null;
                                if(!(entity != mike)) { _fun88827_ip = 158; continue _fun88827 }
 107:
                                entity = mike.focus;
                                entity = entity.bind(mike)();
                                _fun88827_ip = 158; continue _fun88827;
 119:
                                entity = _closure2_slot7;
                                mike = entity.current;
                                entity = 1;
                                entity = zulu + entity;
                                mike = mike[entity];
                                entity = null;
                                if(!(entity != mike)) { _fun88827_ip = 158; continue _fun88827 }
 148:
                                entity = mike.focus;
                                entity = entity.bind(mike)();
 158:
                                entity = undefined;
                                return entity;
                            }
                        };
                        entity = undefined;
                        mike = argFoo;
                        mike = zulu.bind(entity)(tango, mike);
                        return entity;
                    };
                    options['onKeyPress'] = foxtrot;
                    yankee = function(argFoo) { // Original name: onChangeText
                        _fun88828: for(var _fun88828_ip = 0; ; ) switch(_fun88828_ip) {
 0:
                            tango = argFoo;
                            oscar = _closure3_slot0;
                            report = 0;
                            zulu = tango[report];
                            mike = _closure2_slot5;
                            mike = mike[oscar];
                            golf = tango;
                            if(!(zulu === mike)) { _fun88828_ip = 47; continue _fun88828 }
 34:
                            zulu = tango.slice;
                            mike = 1;
                            golf = zulu.bind(tango)(mike);
 47:
                            tango = golf.replace;
                            mike = '-';
                            zulu = '';
                            tango = tango.bind(golf)(mike, zulu);
                            mike = tango.trim;
                            tango = mike.bind(tango)();
                            mike = tango.toUpperCase;
                            mike = mike.bind(tango)();
                            tango = mike.split;
                            golf = tango.bind(mike)(zulu);
                            if(!(zulu === mike)) { _fun88828_ip = 110; continue _fun88828 }
 100:
                            golf = [''];
 110:
                            verify = _closure2_slot5;
                            tango = new Array(0);
                            offset = tango;
                            options = 0;
                            mike = arraySpread(offset, verify, options);
                            zulu = tango.splice;
                            mike = new Array(2);
                            mike[0] = oscar;
                            oscar = 1;
                            mike[1] = oscar;
                            options = 2;
                            offset = mike;
                            verify = golf;
                            oscar = arraySpread(offset, verify, options);
                            offset = zulu;
                            verify = mike;
                            options = tango;
                            mike = apply(offset, verify, options);
                            zulu = _closure2_slot6;
                            mike = tango.slice;
                            entity = _closure2_slot2;
                            mike = mike.bind(tango)(report, entity);
                            entity = undefined;
                            mike = zulu.bind(entity)(mike);
                            return entity;
                        }
                    };
                    options['onChangeText'] = yankee;
                    yankee = {};
                    foxtrot = _closure2_slot5;
                    foxtrot = foxtrot[golf];
                    foxtrot = foxtrot.length;
                    yankee['start'] = foxtrot;
                    romeo = _closure2_slot5;
                    romeo = romeo[golf];
                    romeo = romeo.length;
                    yankee['end'] = romeo;
                    options['selection'] = yankee;
                    yankee = 'characters';
                    options['autoCapitalize'] = yankee;
                    yankee = false;
                    options['autoCorrect'] = yankee;
                    options = offset.bind(entity)(verify, options);
                    mike['children'] = options;
                    mike = oscar.bind(entity)(report, mike, golf);
                    mike = zulu.bind(tango)(mike);
                    return entity;
                }
            };
            options = zulu < golf;
            if(!options) { _fun88819_ip = 334; continue _fun88819 }
 322:
            options = mike.bind(tango)(zulu);
            zulu = zulu + 1;
            if(zulu < golf) { _fun88819_ip = 322; continue _fun88819 }
 334:
            zulu = _closure1_slot7;
            mike = _closure1_slot5;
            entity = {};
            oscar = oscar.codeContainer;
            entity['style'] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['CodeBlocks'] = mike;
    return entity;
})();