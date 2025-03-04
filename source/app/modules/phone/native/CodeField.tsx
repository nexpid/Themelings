// app/modules/phone/native/CodeField.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    backup = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = backup;
    var _closure1_slot2 = golfie;
    entity = function(argFoo) { // Original name: SingleCodeInput
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            output = entity.loading;
            tangon = undefined;
            if(!(output === tangon)) { _fun00002_ip = 19; continue _fun00001 }
 17:
            output = false;
 19:
            sizing = entity.error;
            backup = entity.count;
            if(!(backup === tangon)) { _fun00002_ip = 40; continue _fun00001 }
 33:
            backup = _closure1_slot10;
 40:
            result = entity.codeType;
            if(!(result === tangon)) { _fun00002_ip = 63; continue _fun00001 }
 50:
            michal = _closure1_slot9;
            result = michal.NUMERIC;
 63:
            var _closure2_slot0 = result;
            michal = entity.onCodeEntered;
            var _closure2_slot1 = michal;
            foxtra = entity.disabled;
            var _closure2_slot2 = tangon;
            var _closure2_slot3 = tangon;
            entity = _closure1_slot11;
            offset = entity.bind(tangon)();
            zuuluu = _closure1_slot4;
            michal = zuuluu.useState;
            entity = '';
            zuuluu = michal.bind(zuuluu)(entity);
            michal = _closure1_slot3;
            entity = 2;
            michal = michal.bind(tangon)(zuuluu, entity);
            entity = 0;
            romeon = michal[entity];
            _closure2_slot2 = romeon;
            entity = 1;
            entity = michal[entity];
            _closure2_slot3 = entity;
            zuuluu = _closure1_slot8;
            michal = _closure1_slot5;
            entity = {};
            report = offset.singleInputWrapper;
            entity['style'] = report;
            golfie = _closure1_slot7;
            source = _closure1_slot0;
            yankee = _closure1_slot2;
            report = 9;
            report = yankee[report];
            report = source.bind(tangon)(report);
            oscard = report.TextInput;
            report = {};
            option = true;
            report['autoFocus'] = option;
            report['errorMessage'] = sizing;
            report['value'] = romeon;
            sizing = 'characters';
            report['autoCapitalize'] = sizing;
            report['maxLength'] = backup;
            update = 10;
            sizing = yankee[update];
            sizing = source.bind(tangon)(sizing);
            echoed = sizing.intl;
            sizing = echoed.string;
            yankee = yankee[update];
            yankee = source.bind(tangon)(yankee);
            yankee = yankee.t;
            yankee = yankee.ysthAw;
            yankee = sizing.bind(echoed)(yankee);
            report['accessibilityLabel'] = yankee;
            yankee = 'oneTimeCode';
            report['textContentType'] = yankee;
            yankee = _closure1_slot9;
            sizing = yankee.NUMERIC;
            yankee = 'default';
            if(!(result === sizing)) { _fun00002_ip = 325; continue _fun00001 }
 319:
            yankee = 'number-pad';
 325:
            report['keyboardType'] = yankee;
            yankee = function(argFoo) { // Original name: onChange
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    report = argFoo;
                    zuuluu = _closure2_slot0;
                    michal = _closure1_slot9;
                    michal = michal.NUMERIC;
                    if(!(zuuluu !== michal)) { _fun00004_ip = 43; continue _fun00003 }
 27:
                    tangon = /[^A-Z0-9]/g;
                    _fun00004_ip = 57; continue _fun00003;
 43:
                    tangon = /\D/g;
 57:
                    zuuluu = report.replace;
                    michal = '';
                    zuuluu = zuuluu.bind(report)(tangon, michal);
                    michal = _closure2_slot3;
                    entity = undefined;
                    michal = michal.bind(entity)(zuuluu);
                    return entity;
                }
            };
            report['onChange'] = yankee;
            yankee = !foxtra;
            report['editable'] = yankee;
            report['isClearable'] = option;
            oscard = golfie.bind(tangon)(oscard, report);
            report = new Array(2);
            report[0] = oscard;
            option = _closure1_slot7;
            golfie = _closure1_slot5;
            oscard = {};
            offset = offset.singleInputButton;
            oscard['style'] = offset;
            yankee = _closure1_slot7;
            echoed = _closure1_slot0;
            sizing = _closure1_slot2;
            verify = 11;
            verify = sizing[verify];
            verify = echoed.bind(tangon)(verify);
            offset = verify.Button;
            verify = {'loading': null, 'variant': 'primary', 'size': 'lg'};
            verify['loading'] = output;
            output = sizing[update];
            output = echoed.bind(tangon)(output);
            result = output.intl;
            output = result.string;
            sizing = sizing[update];
            sizing = echoed.bind(tangon)(sizing);
            sizing = sizing.t;
            sizing = sizing.13ofGh;
            sizing = output.bind(result)(sizing);
            verify['text'] = sizing;
            kiloes = function() { // Original name: onPress
                zuuluu = _closure2_slot1;
                michal = _closure2_slot2;
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
                return entity;
            };
            verify['onPress'] = kiloes;
            romeon = romeon.length;
            romeon = romeon !== backup;
            if(romeon) { _fun00002_ip = 513; continue _fun00001 }
 510:
            romeon = foxtra;
 513:
            verify['disabled'] = romeon;
            verify = yankee.bind(tangon)(offset, verify);
            oscard['children'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo) { // Original name: CodeFieldInner
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            config = entity.title;
            sizing = entity.description;
            source = entity.error;
            echoed = entity.onCodeEntered;
            ctrled = entity.loading;
            tangon = undefined;
            if(!(ctrled === tangon)) { _fun00006_ip = 38; continue _fun00005 }
 36:
            ctrled = false;
 38:
            update = entity.count;
            if(!(update === tangon)) { _fun00006_ip = 54; continue _fun00005 }
 47:
            update = _closure1_slot10;
 54:
            result = entity.codeType;
            if(!(result === tangon)) { _fun00006_ip = 77; continue _fun00005 }
 64:
            michal = _closure1_slot9;
            result = michal.NUMERIC;
 77:
            offset = entity.actions;
            oscard = entity.footer;
            golfie = entity.backgroundStyle;
            output = entity.disabled;
            entity = _closure1_slot11;
            kiloes = entity.bind(tangon)();
            zuuluu = _closure1_slot8;
            michal = _closure1_slot6;
            entity = {};
            option = kiloes.background;
            report = new Array(2);
            report[0] = option;
            report[1] = golfie;
            entity['style'] = report;
            report = kiloes.backgroundFlex;
            entity['contentContainerStyle'] = report;
            report = 'handled';
            entity['keyboardShouldPersistTaps'] = report;
            report = false;
            entity['alwaysBounceVertical'] = report;
            option = _closure1_slot8;
            golfie = _closure1_slot5;
            report = {};
            verify = kiloes.container;
            report['style'] = verify;
            sequen = _closure1_slot7;
            romeon = _closure1_slot0;
            vacuum = _closure1_slot2;
            yankee = 12;
            verify = vacuum[yankee];
            verify = romeon.bind(tangon)(verify);
            foxtra = verify.Text;
            verify = {'style': null, 'accessibilityRole': 'header', 'variant': 'heading-xl/extrabold', 'color': 'header-primary'};
            record = kiloes.title;
            verify['style'] = record;
            verify['children'] = config;
            foxtra = sequen.bind(tangon)(foxtra, verify);
            verify = new Array(4);
            verify[0] = foxtra;
            foxtra = _closure1_slot7;
            yankee = vacuum[yankee];
            yankee = romeon.bind(tangon)(yankee);
            romeon = yankee.Text;
            yankee = {'style': null, 'variant': 'text-sm/medium', 'color': 'header-secondary'};
            vacuum = kiloes.subtitle;
            yankee['style'] = vacuum;
            yankee['children'] = sizing;
            yankee = foxtra.bind(tangon)(romeon, yankee);
            verify[1] = yankee;
            foxtra = _closure1_slot7;
            romeon = _closure1_slot5;
            yankee = {};
            kiloes = kiloes.inputContainer;
            yankee['style'] = kiloes;
            sizing = _closure1_slot7;
            kiloes = _closure1_slot12;
            backup = {};
            backup['loading'] = ctrled;
            backup['error'] = source;
            backup['count'] = update;
            backup['onCodeEntered'] = echoed;
            backup['codeType'] = result;
            backup['disabled'] = output;
            backup = sizing.bind(tangon)(kiloes, backup);
            yankee['children'] = backup;
            yankee = foxtra.bind(tangon)(romeon, yankee);
            verify[2] = yankee;
            verify[3] = offset;
            report['children'] = verify;
            golfie = option.bind(tangon)(golfie, report);
            report = new Array(2);
            report[0] = golfie;
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = global;
    option = entity.Object;
    report = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    tangon = backup.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    romeon = 1;
    report = golfie[romeon];
    tangon = argCor;
    tangon = tangon.bind(entity)(report);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    report = tangon.View;
    var _closure1_slot5 = report;
    tangon = tangon.ScrollView;
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    sizing = tangon.Fonts;
    kiloes = 4;
    tangon = golfie[kiloes];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot7 = tangon;
    tangon = golfie[kiloes];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.jsxs;
    var _closure1_slot8 = tangon;
    tangon = {};
    report = 'numeric';
    tangon['NUMERIC'] = report;
    report = 'alphanumeric';
    tangon['ALPHANUMERIC'] = report;
    var _closure1_slot9 = tangon;
    report = 6;
    var _closure1_slot10 = report;
    option = 5;
    option = golfie[option];
    offset = oscard.bind(entity)(option);
    verify = offset.createStyles;
    option = {};
    yankee = {};
    yankee['flex'] = romeon;
    option['viewWrapper'] = yankee;
    yankee = {};
    romeon = golfie[report];
    romeon = backup.bind(entity)(romeon);
    romeon = romeon.colors;
    romeon = romeon.BACKGROUND_MOBILE_SECONDARY;
    yankee['backgroundColor'] = romeon;
    option['background'] = yankee;
    yankee = {'flex': 1, 'justifyContent': 'space-between'};
    option['backgroundFlex'] = yankee;
    yankee = {};
    romeon = 16;
    yankee['padding'] = romeon;
    option['container'] = yankee;
    output = 'center';
    yankee = {'height': 190, 'alignSelf': 'center', 'resizeMode': 'contain'};
    option['image'] = yankee;
    yankee = {};
    yankee['textAlign'] = output;
    option['title'] = yankee;
    romeon = 8;
    yankee = {'marginTop': 8, 'lineHeight': 18, 'textAlign': 'center'};
    option['subtitle'] = yankee;
    yankee = {'color': null, 'textAlign': 'center', 'marginTop': 8};
    foxtra = golfie[report];
    foxtra = backup.bind(entity)(foxtra);
    foxtra = foxtra.unsafe_rawColors;
    foxtra = foxtra.RED_400;
    yankee['color'] = foxtra;
    option['bodyError'] = yankee;
    foxtra = '100%';
    yankee = {'marginTop': 20, 'width': '100%', 'alignItems': 'center'};
    option['inputContainer'] = yankee;
    yankee = {'maxWidth': 336, 'width': '100%', 'flexDirection': 'row', 'justifyContent': 'space-around'};
    option['codeContainer'] = yankee;
    yankee = {};
    yankee['width'] = kiloes;
    option['spacer'] = yankee;
    yankee = {'borderWidth': 1, 'borderRadius': 5, 'alignItems': 'center'};
    result = golfie[report];
    result = backup.bind(entity)(result);
    result = result.colors;
    result = result.BACKGROUND_TERTIARY;
    yankee['backgroundColor'] = result;
    result = golfie[report];
    result = backup.bind(entity)(result);
    result = result.colors;
    result = result.BACKGROUND_TERTIARY;
    yankee['borderColor'] = result;
    option['inputWrapper'] = yankee;
    yankee = {};
    result = golfie[report];
    result = backup.bind(entity)(result);
    result = result.unsafe_rawColors;
    result = result.RED_400;
    yankee['borderColor'] = result;
    option['inputWrapperError'] = yankee;
    yankee = {};
    yankee['textAlign'] = output;
    option['input'] = yankee;
    yankee = {};
    output = 7;
    output = golfie[output];
    output = backup.bind(entity)(output);
    sizing = sizing.PRIMARY_MEDIUM;
    report = golfie[report];
    report = backup.bind(entity)(report);
    report = report.colors;
    backup = report.TEXT_NORMAL;
    report = 14;
    update = output.bind(entity)(sizing, backup, report);
    source = yankee;
    backup = copyDataProperties(source, update);
    backup = 'marginHorizontal';
    yankee[backup] = kiloes;
    option['actionSeparator'] = yankee;
    yankee = {};
    yankee['width'] = foxtra;
    option['singleInputWrapper'] = yankee;
    yankee = {};
    foxtra = 42;
    yankee['height'] = foxtra;
    option['singleInput'] = yankee;
    yankee = {};
    yankee['marginTop'] = romeon;
    option['singleInputButton'] = yankee;
    option = verify.bind(offset)(option);
    var _closure1_slot11 = option;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/phone/native/CodeField.tsx';
    report = oscard.bind(golfie)(report);
    report = function(argFoo) { // Original name: CodeField
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            oscard = argFoo;
            entity = _closure1_slot11;
            report = undefined;
            golfie = entity.bind(report)();
            entity = oscard.disableKeyboardAvoidingView;
            tangon = _closure1_slot7;
            if(entity) { _fun00008_ip = 99; continue _fun00007 }
 29:
            zuuluu = _closure1_slot1;
            option = _closure1_slot2;
            entity = 13;
            entity = option[entity];
            zuuluu = zuuluu.bind(report)(entity);
            entity = {};
            golfie = golfie.viewWrapper;
            entity['style'] = golfie;
            verify = _closure1_slot7;
            option = _closure1_slot13;
            golfie = {};
            romeon = golfie;
            yankee = oscard;
            offset = copyDataProperties(romeon, yankee);
            golfie = verify.bind(report)(option, golfie);
            entity['children'] = golfie;
            entity = tangon.bind(report)(zuuluu, entity);
            _fun00008_ip = 121; continue _fun00007;
 99:
            zuuluu = _closure1_slot13;
            michal = {};
            romeon = michal;
            yankee = oscard;
            oscard = copyDataProperties(romeon, yankee);
            entity = tangon.bind(report)(zuuluu, michal);
 121:
            return entity;
        }
    };
    zuuluu['default'] = report;
    zuuluu['CodeType'] = tangon;
    michal = function(argFoo) { // Original name: CodeBlocks
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.hasError;
            var _closure2_slot0 = zuuluu;
            offset = entity.onCodeEntered;
            var _closure2_slot1 = offset;
            golfie = entity.count;
            tangon = undefined;
            if(!(golfie === tangon)) { _fun00010_ip = 43; continue _fun00009 }
 36:
            golfie = _closure1_slot10;
 43:
            var _closure2_slot2 = golfie;
            entity = entity.codeType;
            if(!(entity === tangon)) { _fun00010_ip = 70; continue _fun00009 }
 57:
            zuuluu = _closure1_slot9;
            entity = zuuluu.NUMERIC;
 70:
            var _closure2_slot3 = entity;
            var _closure2_slot4 = tangon;
            var _closure2_slot5 = tangon;
            var _closure2_slot6 = tangon;
            var _closure2_slot7 = tangon;
            var _closure2_slot8 = tangon;
            var _closure2_slot9 = tangon;
            zuuluu = _closure1_slot11;
            oscard = zuuluu.bind(tangon)();
            _closure2_slot4 = oscard;
            verify = _closure1_slot4;
            report = verify.useState;
            option = global;
            zuuluu = option.Array;
            romeon = zuuluu.bind(tangon)(golfie);
            yankee = romeon.fill;
            zuuluu = '';
            zuuluu = yankee.bind(romeon)(zuuluu);
            verify = report.bind(verify)(zuuluu);
            report = _closure1_slot3;
            zuuluu = 2;
            yankee = report.bind(tangon)(verify, zuuluu);
            zuuluu = 0;
            report = yankee[zuuluu];
            _closure2_slot5 = report;
            verify = 1;
            verify = yankee[verify];
            _closure2_slot6 = verify;
            yankee = _closure1_slot4;
            verify = yankee.useRef;
            option = option.Array;
            foxtra = option.bind(tangon)(golfie);
            romeon = foxtra.fill;
            option = null;
            option = romeon.bind(foxtra)(option);
            option = verify.bind(yankee)(option);
            _closure2_slot7 = option;
            verify = _closure1_slot4;
            option = verify.useRef;
            option = option.bind(verify)(offset);
            _closure2_slot8 = option;
            offset = _closure1_slot4;
            verify = offset.useEffect;
            option = function() {
                michal = _closure2_slot8;
                entity = _closure2_slot1;
                michal['current'] = entity;
                entity = undefined;
                return entity;
            };
            option = verify.bind(offset)(option);
            offset = _closure1_slot4;
            verify = offset.useEffect;
            option = new Array(1);
            option[0] = report;
            report = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    tangon = _closure2_slot5;
                    zuuluu = function(argFoo) { // Original name: isCodeEntered
                        zuuluu = argFoo;
                        michal = zuuluu.every;
                        entity = function(argFoo) {
                            michal = argFoo;
                            entity = michal.trim;
                            michal = entity.bind(michal)();
                            entity = '';
                            entity = entity !== michal;
                            return entity;
                        };
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(tangon);
                    if(!zuuluu) { _fun00012_ip = 58; continue _fun00011 }
 26:
                    tangon = _closure2_slot8;
                    zuuluu = tangon.current;
                    oscard = _closure2_slot5;
                    report = oscard.join;
                    michal = '';
                    michal = report.bind(oscard)(michal);
                    michal = zuuluu.bind(tangon)(michal);
 58:
                    return entity;
                }
            };
            report = verify.bind(offset)(report, option);
            report = new Array(0);
            _closure2_slot9 = report;
            michal = function(argFoo) { // Original name: _loop
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    golfie = argFoo;
                    var _closure3_slot0 = golfie;
                    michal = _closure2_slot2;
                    entity = 2;
                    entity = michal / entity;
                    if(!(golfie === entity)) { _fun00014_ip = 81; continue _fun00013 }
 27:
                    zuuluu = _closure2_slot9;
                    michal = zuuluu.push;
                    option = _closure1_slot7;
                    oscard = _closure1_slot5;
                    report = {};
                    entity = _closure2_slot4;
                    entity = entity.spacer;
                    report['style'] = entity;
                    tangon = undefined;
                    entity = 'spacer';
                    entity = option.bind(tangon)(oscard, report, entity);
                    entity = michal.bind(zuuluu)(entity);
 81:
                    tangon = _closure2_slot9;
                    zuuluu = tangon.push;
                    oscard = _closure1_slot7;
                    report = _closure1_slot5;
                    michal = {};
                    entity = _closure2_slot4;
                    option = entity.inputWrapper;
                    entity = new Array(2);
                    entity[0] = option;
                    verify = _closure2_slot0;
                    option = null;
                    if(!verify) { _fun00014_ip = 140; continue _fun00013 }
 130:
                    verify = _closure2_slot4;
                    option = verify.inputWrapperError;
 140:
                    entity[1] = option;
                    michal['style'] = entity;
                    offset = _closure1_slot7;
                    verify = _closure1_slot0;
                    option = _closure1_slot2;
                    entity = 8;
                    option = option[entity];
                    entity = undefined;
                    option = verify.bind(entity)(option);
                    verify = option.TextInput;
                    option = {};
                    backup = function(argFoo) { // Original name: ref
                        entity = argFoo;
                        michal = _closure2_slot7;
                        zuuluu = michal.current;
                        michal = _closure3_slot0;
                        zuuluu[michal] = entity;
                        return entity;
                    };
                    option['ref'] = backup;
                    kiloes = {};
                    backup = 42;
                    kiloes['height'] = backup;
                    sizing = _closure2_slot2;
                    backup = 252;
                    backup = backup / sizing;
                    kiloes['width'] = backup;
                    backup = new Array(2);
                    backup[0] = kiloes;
                    kiloes = _closure2_slot4;
                    kiloes = kiloes.input;
                    backup[1] = kiloes;
                    option['style'] = backup;
                    kiloes = _closure2_slot3;
                    foxtra = _closure1_slot9;
                    backup = foxtra.NUMERIC;
                    foxtra = 'default';
                    if(!(kiloes === backup)) { _fun00014_ip = 271; continue _fun00013 }
 265:
                    foxtra = 'phone-pad';
 271:
                    option['keyboardType'] = foxtra;
                    foxtra = 0;
                    foxtra = foxtra === golfie;
                    option['autoFocus'] = foxtra;
                    foxtra = _closure2_slot5;
                    foxtra = foxtra[golfie];
                    option['value'] = foxtra;
                    foxtra = function(argFoo) { // Original name: onKeyPress
                        tangon = _closure3_slot0;
                        zuuluu = function(argFoo, argBar) { // Original name: onKeyPress
                            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                                zuuluu = argFoo;
                                entity = argBar;
                                entity = entity.nativeEvent;
                                michal = entity.key;
                                entity = 'Backspace';
                                if(!(entity === michal)) { _fun00016_ip = 119; continue _fun00015 }
 26:
                                entity = _closure2_slot5;
                                entity = entity[zuuluu];
                                golfie = '';
                                if(!(golfie === entity)) { _fun00016_ip = 158; continue _fun00015 }
 45:
                                oscard = _closure2_slot6;
                                yankee = _closure2_slot5;
                                entity = 1;
                                tangon = zuuluu - entity;
                                report = new Array(0);
                                offset = 0;
                                romeon = report;
                                option = arraySpread(romeon, yankee, offset);
                                report[tangon] = golfie;
                                tangon = undefined;
                                tangon = oscard.bind(tangon)(report);
                                michal = _closure2_slot7;
                                michal = michal.current;
                                entity = zuuluu - entity;
                                michal = michal[entity];
                                entity = null;
                                if(!(entity != michal)) { _fun00016_ip = 158; continue _fun00015 }
 107:
                                entity = michal.focus;
                                entity = entity.bind(michal)();
                                _fun00016_ip = 158; continue _fun00015;
 119:
                                entity = _closure2_slot7;
                                michal = entity.current;
                                entity = 1;
                                entity = zuuluu + entity;
                                michal = michal[entity];
                                entity = null;
                                if(!(entity != michal)) { _fun00016_ip = 158; continue _fun00015 }
 148:
                                entity = michal.focus;
                                entity = entity.bind(michal)();
 158:
                                entity = undefined;
                                return entity;
                            }
                        };
                        entity = undefined;
                        michal = argFoo;
                        michal = zuuluu.bind(entity)(tangon, michal);
                        return entity;
                    };
                    option['onKeyPress'] = foxtra;
                    yankee = function(argFoo) { // Original name: onChangeText
                        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                            tangon = argFoo;
                            oscard = _closure3_slot0;
                            report = 0;
                            zuuluu = tangon[report];
                            michal = _closure2_slot5;
                            michal = michal[oscard];
                            golfie = tangon;
                            if(!(zuuluu === michal)) { _fun00018_ip = 47; continue _fun00017 }
 34:
                            zuuluu = tangon.slice;
                            michal = 1;
                            golfie = zuuluu.bind(tangon)(michal);
 47:
                            tangon = golfie.replace;
                            michal = '-';
                            zuuluu = '';
                            tangon = tangon.bind(golfie)(michal, zuuluu);
                            michal = tangon.trim;
                            tangon = michal.bind(tangon)();
                            michal = tangon.toUpperCase;
                            michal = michal.bind(tangon)();
                            tangon = michal.split;
                            golfie = tangon.bind(michal)(zuuluu);
                            if(!(zuuluu === michal)) { _fun00018_ip = 110; continue _fun00017 }
 100:
                            golfie = [''];
 110:
                            verify = _closure2_slot5;
                            tangon = new Array(0);
                            offset = tangon;
                            option = 0;
                            michal = arraySpread(offset, verify, option);
                            zuuluu = tangon.splice;
                            michal = new Array(2);
                            michal[0] = oscard;
                            oscard = 1;
                            michal[1] = oscard;
                            option = 2;
                            offset = michal;
                            verify = golfie;
                            oscard = arraySpread(offset, verify, option);
                            offset = zuuluu;
                            verify = michal;
                            option = tangon;
                            michal = apply(offset, verify, option);
                            zuuluu = _closure2_slot6;
                            michal = tangon.slice;
                            entity = _closure2_slot2;
                            michal = michal.bind(tangon)(report, entity);
                            entity = undefined;
                            michal = zuuluu.bind(entity)(michal);
                            return entity;
                        }
                    };
                    option['onChangeText'] = yankee;
                    yankee = {};
                    foxtra = _closure2_slot5;
                    foxtra = foxtra[golfie];
                    foxtra = foxtra.length;
                    yankee['start'] = foxtra;
                    romeon = _closure2_slot5;
                    romeon = romeon[golfie];
                    romeon = romeon.length;
                    yankee['end'] = romeon;
                    option['selection'] = yankee;
                    yankee = 'characters';
                    option['autoCapitalize'] = yankee;
                    yankee = false;
                    option['autoCorrect'] = yankee;
                    option = offset.bind(entity)(verify, option);
                    michal['children'] = option;
                    michal = oscard.bind(entity)(report, michal, golfie);
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                }
            };
            option = zuuluu < golfie;
            if(!option) { _fun00010_ip = 334; continue _fun00009 }
 322:
            option = michal.bind(tangon)(zuuluu);
            zuuluu = zuuluu + 1;
            if(zuuluu < golfie) { _fun00010_ip = 322; continue _fun00009 }
 334:
            zuuluu = _closure1_slot7;
            michal = _closure1_slot5;
            entity = {};
            oscard = oscard.codeContainer;
            entity['style'] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['CodeBlocks'] = michal;
    return entity;
})();