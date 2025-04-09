// app/modules/phone/native/CodeField.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    sizing = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = sizing;
    var _closure1_slot2 = golfie;
    entity = function(argFoo) { // Original name: SingleCodeInput
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            result = entity.loading;
            tangon = undefined;
            if(!(result === tangon)) { _fun00002_ip = 19; continue _fun00001 }
 17:
            result = false;
 19:
            offset = entity.error;
            backup = entity.count;
            if(!(backup === tangon)) { _fun00002_ip = 36; continue _fun00001 }
 33:
            backup = 6;
 36:
            yankee = entity.codeType;
            if(!(yankee === tangon)) { _fun00002_ip = 59; continue _fun00001 }
 46:
            michal = _closure1_slot10;
            yankee = michal.NUMERIC;
 59:
            var _closure2_slot0 = yankee;
            michal = entity.onCodeEntered;
            var _closure2_slot1 = michal;
            foxtra = entity.disabled;
            var _closure2_slot2 = tangon;
            var _closure2_slot3 = tangon;
            entity = _closure1_slot11;
            verify = entity.bind(tangon)();
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
            michal = _closure1_slot1;
            report = _closure1_slot2;
            entity = 10;
            entity = report[entity];
            zuuluu = michal.bind(tangon)(entity);
            entity = {};
            oscard = 'PhoneVerification';
            entity['location'] = oscard;
            entity = zuuluu.bind(tangon)(entity);
            sizing = entity.streamlineErrorsCTAsEnabled;
            zuuluu = _closure1_slot0;
            entity = 11;
            entity = report[entity];
            zuuluu = zuuluu.bind(tangon)(entity);
            entity = zuuluu.useNavigation;
            zuuluu = entity.bind(zuuluu)();
            golfie = _closure1_slot4;
            oscard = golfie.useRef;
            entity = null;
            echoed = oscard.bind(golfie)(entity);
            entity = 12;
            entity = report[entity];
            michal = michal.bind(tangon)(entity);
            entity = {};
            entity['navigation'] = zuuluu;
            entity['inputRef'] = echoed;
            zuuluu = sizing;
            if(!zuuluu) { _fun00002_ip = 272; continue _fun00001 }
 264:
            report = _closure1_slot7;
            zuuluu = report.bind(tangon)();
 272:
            entity['enabled'] = zuuluu;
            entity = michal.bind(tangon)(entity);
            zuuluu = _closure1_slot9;
            michal = _closure1_slot5;
            entity = {};
            report = verify.singleInputWrapper;
            entity['style'] = report;
            golfie = _closure1_slot8;
            update = _closure1_slot0;
            option = _closure1_slot2;
            report = 13;
            report = option[report];
            report = update.bind(tangon)(report);
            oscard = report.TextInput;
            report = {};
            report['ref'] = echoed;
            report['errorMessage'] = offset;
            report['value'] = romeon;
            offset = 'characters';
            report['autoCapitalize'] = offset;
            report['maxLength'] = backup;
            source = 14;
            offset = option[source];
            offset = update.bind(tangon)(offset);
            echoed = offset.intl;
            offset = echoed.string;
            option = option[source];
            option = update.bind(tangon)(option);
            option = option.t;
            option = option.ysthAw;
            option = offset.bind(echoed)(option);
            report['accessibilityLabel'] = option;
            option = 'oneTimeCode';
            report['textContentType'] = option;
            option = _closure1_slot10;
            offset = option.NUMERIC;
            option = 'default';
            if(!(yankee === offset)) { _fun00002_ip = 450; continue _fun00001 }
 444:
            option = 'number-pad';
 450:
            report['keyboardType'] = option;
            option = function(argFoo) { // Original name: onChange
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    report = argFoo;
                    zuuluu = _closure2_slot0;
                    michal = _closure1_slot10;
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
            report['onChange'] = option;
            report['isDisabled'] = foxtra;
            option = true;
            report['isClearable'] = option;
            option = !sizing;
            report['autoFocus'] = option;
            oscard = golfie.bind(tangon)(oscard, report);
            report = new Array(2);
            report[0] = oscard;
            option = _closure1_slot8;
            golfie = _closure1_slot5;
            oscard = {};
            verify = verify.singleInputButton;
            oscard['style'] = verify;
            yankee = _closure1_slot8;
            offset = _closure1_slot0;
            echoed = _closure1_slot2;
            verify = 15;
            verify = echoed[verify];
            verify = offset.bind(tangon)(verify);
            offset = verify.Button;
            verify = {'loading': null, 'variant': 'primary', 'size': 'lg'};
            verify['loading'] = result;
            if(!sizing) { _fun00002_ip = 583; continue _fun00001 }
 572:
            sizing = _closure1_slot7;
            sizing = sizing.bind(tangon)();
            if(sizing) { _fun00002_ip = 637; continue _fun00001 }
 583:
            update = _closure1_slot0;
            sizing = _closure1_slot2;
            result = sizing[source];
            result = update.bind(tangon)(result);
            echoed = result.intl;
            result = echoed.string;
            sizing = sizing[source];
            sizing = update.bind(tangon)(sizing);
            sizing = sizing.t;
            sizing = sizing.13ofGh;
            sizing = result.bind(echoed)(sizing);
            _fun00002_ip = 689; continue _fun00001;
 637:
            update = _closure1_slot0;
            output = _closure1_slot2;
            result = output[source];
            result = update.bind(tangon)(result);
            echoed = result.intl;
            result = echoed.string;
            output = output[source];
            output = update.bind(tangon)(output);
            output = output.t;
            output = output.PDTjLC;
            sizing = result.bind(echoed)(output);
 689:
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
            if(romeon) { _fun00002_ip = 717; continue _fun00001 }
 714:
            romeon = foxtra;
 717:
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
            if(!(update === tangon)) { _fun00006_ip = 50; continue _fun00005 }
 47:
            update = 6;
 50:
            result = entity.codeType;
            if(!(result === tangon)) { _fun00006_ip = 73; continue _fun00005 }
 60:
            michal = _closure1_slot10;
            result = michal.NUMERIC;
 73:
            offset = entity.actions;
            oscard = entity.footer;
            golfie = entity.backgroundStyle;
            output = entity.disabled;
            entity = _closure1_slot11;
            kiloes = entity.bind(tangon)();
            zuuluu = _closure1_slot9;
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
            option = _closure1_slot9;
            golfie = _closure1_slot5;
            report = {};
            verify = kiloes.container;
            report['style'] = verify;
            sequen = _closure1_slot8;
            romeon = _closure1_slot0;
            vacuum = _closure1_slot2;
            yankee = 16;
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
            foxtra = _closure1_slot8;
            yankee = vacuum[yankee];
            yankee = romeon.bind(tangon)(yankee);
            romeon = yankee.Text;
            yankee = {'style': null, 'variant': 'text-sm/medium', 'color': 'header-secondary'};
            vacuum = kiloes.subtitle;
            yankee['style'] = vacuum;
            yankee['children'] = sizing;
            yankee = foxtra.bind(tangon)(romeon, yankee);
            verify[1] = yankee;
            foxtra = _closure1_slot8;
            romeon = _closure1_slot5;
            yankee = {};
            kiloes = kiloes.inputContainer;
            yankee['style'] = kiloes;
            sizing = _closure1_slot8;
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
    tangon = sizing.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    yankee = 1;
    report = golfie[yankee];
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
    tangon = tangon.doesRegistrationHaveIdentityType;
    var _closure1_slot7 = tangon;
    kiloes = 4;
    tangon = golfie[kiloes];
    tangon = oscard.bind(entity)(tangon);
    output = tangon.Fonts;
    tangon = 5;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    report = tangon.jsx;
    var _closure1_slot8 = report;
    tangon = tangon.jsxs;
    var _closure1_slot9 = tangon;
    tangon = {};
    report = 'numeric';
    tangon['NUMERIC'] = report;
    report = 'alphanumeric';
    tangon['ALPHANUMERIC'] = report;
    var _closure1_slot10 = tangon;
    report = 6;
    report = golfie[report];
    offset = oscard.bind(entity)(report);
    verify = offset.createStyles;
    option = {};
    report = {};
    report['flex'] = yankee;
    option['viewWrapper'] = report;
    report = {};
    backup = 7;
    yankee = golfie[backup];
    yankee = sizing.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.BACKGROUND_MOBILE_SECONDARY;
    report['backgroundColor'] = yankee;
    option['background'] = report;
    report = {'flex': 1, 'justifyContent': 'space-between'};
    option['backgroundFlex'] = report;
    report = {};
    yankee = 16;
    report['padding'] = yankee;
    option['container'] = report;
    result = 'center';
    report = {'height': 190, 'alignSelf': 'center', 'resizeMode': 'contain'};
    option['image'] = report;
    report = {};
    report['textAlign'] = result;
    option['title'] = report;
    romeon = 8;
    report = 18;
    yankee = {'marginTop': 8, 'lineHeight': 18, 'textAlign': 'center'};
    option['subtitle'] = yankee;
    yankee = {'color': null, 'textAlign': 'center', 'marginTop': 8};
    foxtra = golfie[backup];
    foxtra = sizing.bind(entity)(foxtra);
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
    echoed = golfie[backup];
    echoed = sizing.bind(entity)(echoed);
    echoed = echoed.colors;
    echoed = echoed.BACKGROUND_TERTIARY;
    yankee['backgroundColor'] = echoed;
    echoed = golfie[backup];
    echoed = sizing.bind(entity)(echoed);
    echoed = echoed.colors;
    echoed = echoed.BACKGROUND_TERTIARY;
    yankee['borderColor'] = echoed;
    option['inputWrapper'] = yankee;
    yankee = {};
    echoed = golfie[backup];
    echoed = sizing.bind(entity)(echoed);
    echoed = echoed.unsafe_rawColors;
    echoed = echoed.RED_400;
    yankee['borderColor'] = echoed;
    option['inputWrapperError'] = yankee;
    yankee = {};
    yankee['textAlign'] = result;
    option['input'] = yankee;
    yankee = {};
    result = golfie[romeon];
    result = sizing.bind(entity)(result);
    output = output.PRIMARY_MEDIUM;
    backup = golfie[backup];
    backup = sizing.bind(entity)(backup);
    backup = backup.colors;
    sizing = backup.TEXT_NORMAL;
    backup = 14;
    source = result.bind(entity)(output, sizing, backup);
    ctrled = yankee;
    backup = copyDataProperties(ctrled, source);
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
            tangon = _closure1_slot8;
            if(entity) { _fun00008_ip = 99; continue _fun00007 }
 29:
            zuuluu = _closure1_slot1;
            option = _closure1_slot2;
            entity = 17;
            entity = option[entity];
            zuuluu = zuuluu.bind(report)(entity);
            entity = {};
            golfie = golfie.viewWrapper;
            entity['style'] = golfie;
            verify = _closure1_slot8;
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
            if(!(golfie === tangon)) { _fun00010_ip = 39; continue _fun00009 }
 36:
            golfie = 6;
 39:
            var _closure2_slot2 = golfie;
            entity = entity.codeType;
            if(!(entity === tangon)) { _fun00010_ip = 66; continue _fun00009 }
 53:
            zuuluu = _closure1_slot10;
            entity = zuuluu.NUMERIC;
 66:
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
                    if(!zuuluu) { _fun00012_ip = 56; continue _fun00011 }
 24:
                    tangon = _closure2_slot8;
                    zuuluu = tangon.current;
                    oscard = _closure2_slot5;
                    report = oscard.join;
                    michal = '';
                    michal = report.bind(oscard)(michal);
                    michal = zuuluu.bind(tangon)(michal);
 56:
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
                    option = _closure1_slot8;
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
                    oscard = _closure1_slot8;
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
                    offset = _closure1_slot8;
                    verify = _closure1_slot0;
                    option = _closure1_slot2;
                    entity = 9;
                    option = option[entity];
                    entity = undefined;
                    option = verify.bind(entity)(option);
                    verify = option.TextInput;
                    option = {};
                    backup = function(argFoo) { // Original name: ref
                        entity = _closure2_slot7;
                        zuuluu = entity.current;
                        michal = _closure3_slot0;
                        entity = argFoo;
                        zuuluu[michal] = entity;
                        entity = undefined;
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
                    foxtra = _closure1_slot10;
                    backup = foxtra.NUMERIC;
                    foxtra = 'default';
                    if(!(kiloes === backup)) { _fun00014_ip = 269; continue _fun00013 }
 263:
                    foxtra = 'phone-pad';
 269:
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
            if(!option) { _fun00010_ip = 324; continue _fun00009 }
 312:
            option = michal.bind(tangon)(zuuluu);
            zuuluu = zuuluu + 1;
            if(zuuluu < golfie) { _fun00010_ip = 312; continue _fun00009 }
 324:
            zuuluu = _closure1_slot8;
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