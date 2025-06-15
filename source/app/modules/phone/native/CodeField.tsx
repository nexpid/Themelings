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
            result = entity.loading;
            tangon = undefined;
            if(!(result === tangon)) { _fun00002_ip = 19; continue _fun00001 }
 17:
            result = false;
 19:
            output = entity.error;
            kiloes = entity.count;
            if(!(kiloes === tangon)) { _fun00002_ip = 36; continue _fun00001 }
 33:
            kiloes = 6;
 36:
            update = entity.codeType;
            if(!(update === tangon)) { _fun00002_ip = 59; continue _fun00001 }
 46:
            michal = _closure1_slot10;
            update = michal.NUMERIC;
 59:
            var _closure2_slot0 = update;
            michal = entity.onCodeEntered;
            var _closure2_slot1 = michal;
            backup = entity.disabled;
            foxtra = entity.code;
            var _closure2_slot2 = foxtra;
            michal = entity.setCode;
            var _closure2_slot3 = michal;
            oscard = entity.streamlineErrorsCTAsEnabled;
            entity = _closure1_slot11;
            yankee = entity.bind(tangon)();
            michal = _closure1_slot4;
            entity = michal.useRef;
            romeon = null;
            echoed = entity.bind(michal)(romeon);
            michal = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 10;
            entity = zuuluu[entity];
            michal = michal.bind(tangon)(entity);
            entity = {};
            entity['inputRef'] = echoed;
            zuuluu = oscard;
            if(!zuuluu) { _fun00002_ip = 171; continue _fun00001 }
 163:
            report = _closure1_slot7;
            zuuluu = report.bind(tangon)();
 171:
            entity['enabled'] = zuuluu;
            entity = michal.bind(tangon)(entity);
            zuuluu = _closure1_slot9;
            michal = _closure1_slot5;
            entity = {};
            report = yankee.singleInputWrapper;
            entity['style'] = report;
            option = _closure1_slot8;
            vacuum = _closure1_slot0;
            verify = _closure1_slot2;
            report = 11;
            report = verify[report];
            report = vacuum.bind(tangon)(report);
            golfie = report.TextInput;
            report = {};
            report['ref'] = echoed;
            report['errorMessage'] = output;
            report['value'] = foxtra;
            echoed = 'characters';
            report['autoCapitalize'] = echoed;
            report['maxLength'] = kiloes;
            source = 12;
            echoed = verify[source];
            echoed = vacuum.bind(tangon)(echoed);
            ctrled = echoed.intl;
            echoed = ctrled.string;
            verify = verify[source];
            verify = vacuum.bind(tangon)(verify);
            verify = verify.t;
            verify = verify.ysthAw;
            verify = echoed.bind(ctrled)(verify);
            report['accessibilityLabel'] = verify;
            verify = 'oneTimeCode';
            report['textContentType'] = verify;
            verify = _closure1_slot10;
            echoed = verify.NUMERIC;
            verify = 'default';
            if(!(update === echoed)) { _fun00002_ip = 349; continue _fun00001 }
 343:
            verify = 'number-pad';
 349:
            report['keyboardType'] = verify;
            verify = function(argFoo) { // Original name: onChange
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
            report['onChange'] = verify;
            report['isDisabled'] = backup;
            verify = true;
            report['isClearable'] = verify;
            verify = !oscard;
            report['autoFocus'] = verify;
            verify = undefined;
            if(!oscard) { _fun00002_ip = 417; continue _fun00001 }
 391:
            echoed = _closure1_slot7;
            echoed = echoed.bind(tangon)();
            verify = undefined;
            if(!echoed) { _fun00002_ip = 417; continue _fun00001 }
 404:
            romeon = romeon != output;
            verify = undefined;
            if(!romeon) { _fun00002_ip = 417; continue _fun00001 }
 413:
            verify = 'error';
 417:
            report['status'] = verify;
            golfie = option.bind(tangon)(golfie, report);
            report = new Array(2);
            report[0] = golfie;
            oscard = !oscard;
            if(!oscard) { _fun00002_ip = 608; continue _fun00001 }
 444:
            verify = _closure1_slot8;
            option = _closure1_slot5;
            golfie = {};
            yankee = yankee.singleInputButton;
            golfie['style'] = yankee;
            romeon = _closure1_slot8;
            update = _closure1_slot0;
            output = _closure1_slot2;
            offset = 13;
            offset = output[offset];
            offset = update.bind(tangon)(offset);
            yankee = offset.Button;
            offset = {'loading': null, 'variant': 'primary', 'size': 'lg'};
            offset['loading'] = result;
            result = output[source];
            result = update.bind(tangon)(result);
            echoed = result.intl;
            result = echoed.string;
            output = output[source];
            output = update.bind(tangon)(output);
            output = output.t;
            output = output.13ofGh;
            output = result.bind(echoed)(output);
            offset['text'] = output;
            sizing = function() { // Original name: onPress
                zuuluu = _closure2_slot1;
                michal = _closure2_slot2;
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
                return entity;
            };
            offset['onPress'] = sizing;
            foxtra = foxtra.length;
            foxtra = foxtra !== kiloes;
            if(foxtra) { _fun00002_ip = 588; continue _fun00001 }
 585:
            foxtra = backup;
 588:
            offset['disabled'] = foxtra;
            offset = romeon.bind(tangon)(yankee, offset);
            golfie['children'] = offset;
            oscard = verify.bind(tangon)(option, golfie);
 608:
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
            vacuum = entity.description;
            target = entity.error;
            papara = entity.onCodeEntered;
            var _closure2_slot0 = papara;
            output = entity.loading;
            tangon = undefined;
            if(!(output === tangon)) { _fun00006_ip = 44; continue _fun00005 }
 42:
            output = false;
 44:
            sizing = entity.count;
            if(!(sizing === tangon)) { _fun00006_ip = 56; continue _fun00005 }
 53:
            sizing = 6;
 56:
            cntext = entity.codeType;
            if(!(cntext === tangon)) { _fun00006_ip = 79; continue _fun00005 }
 66:
            michal = _closure1_slot10;
            cntext = michal.NUMERIC;
 79:
            echoed = entity.actions;
            romeon = entity.footer;
            oscard = entity.backgroundStyle;
            kiloes = entity.disabled;
            offset = entity.streamlineErrorsCTAsEnabled;
            var _closure2_slot1 = tangon;
            entity = _closure1_slot11;
            foxtra = entity.bind(tangon)();
            zuuluu = _closure1_slot4;
            michal = zuuluu.useState;
            entity = '';
            zuuluu = michal.bind(zuuluu)(entity);
            michal = _closure1_slot3;
            entity = 2;
            michal = michal.bind(tangon)(zuuluu, entity);
            entity = 0;
            backup = michal[entity];
            _closure2_slot1 = backup;
            entity = 1;
            record = michal[entity];
            zuuluu = _closure1_slot9;
            michal = _closure1_slot6;
            entity = {};
            golfie = foxtra.background;
            report = new Array(2);
            report[0] = golfie;
            report[1] = oscard;
            entity['style'] = report;
            report = foxtra.backgroundFlex;
            entity['contentContainerStyle'] = report;
            report = 'handled';
            entity['keyboardShouldPersistTaps'] = report;
            report = false;
            entity['alwaysBounceVertical'] = report;
            golfie = _closure1_slot9;
            oscard = _closure1_slot5;
            report = {};
            option = foxtra.container;
            report['style'] = option;
            sequen = _closure1_slot8;
            source = _closure1_slot0;
            verify = _closure1_slot2;
            update = 14;
            option = verify[update];
            option = source.bind(tangon)(option);
            ctrled = option.Text;
            option = {'style': null, 'accessibilityRole': 'header', 'variant': 'heading-xl/extrabold', 'color': 'header-primary'};
            status = foxtra.title;
            option['style'] = status;
            option['children'] = config;
            ctrled = sequen.bind(tangon)(ctrled, option);
            option = new Array(4);
            option[0] = ctrled;
            ctrled = _closure1_slot8;
            update = verify[update];
            update = source.bind(tangon)(update);
            source = update.Text;
            update = {'style': null, 'variant': 'text-sm/medium', 'color': 'header-secondary'};
            sequen = foxtra.subtitle;
            update['style'] = sequen;
            update['children'] = vacuum;
            update = ctrled.bind(tangon)(source, update);
            option[1] = update;
            ctrled = _closure1_slot8;
            source = _closure1_slot5;
            update = {};
            vacuum = foxtra.inputContainer;
            update['style'] = vacuum;
            config = _closure1_slot8;
            sequen = _closure1_slot12;
            vacuum = {};
            vacuum['loading'] = output;
            vacuum['error'] = target;
            vacuum['count'] = sizing;
            vacuum['onCodeEntered'] = papara;
            vacuum['codeType'] = cntext;
            vacuum['disabled'] = kiloes;
            vacuum['streamlineErrorsCTAsEnabled'] = offset;
            vacuum['code'] = backup;
            vacuum['setCode'] = record;
            vacuum = config.bind(tangon)(sequen, vacuum);
            update['children'] = vacuum;
            update = ctrled.bind(tangon)(source, update);
            option[2] = update;
            option[3] = echoed;
            report['children'] = option;
            oscard = golfie.bind(tangon)(oscard, report);
            report = new Array(2);
            report[0] = oscard;
            option = _closure1_slot9;
            golfie = _closure1_slot1;
            oscard = 15;
            oscard = verify[oscard];
            golfie = golfie.bind(tangon)(oscard);
            oscard = {};
            if(offset) { _fun00006_ip = 521; continue _fun00005 }
 517:
            verify = {};
            _fun00006_ip = 527; continue _fun00005;
 521:
            verify = foxtra.bottomSpace;
 527:
            oscard['style'] = verify;
            verify = new Array(2);
            verify[0] = romeon;
            if(!offset) { _fun00006_ip = 550; continue _fun00005 }
 542:
            romeon = _closure1_slot7;
            offset = romeon.bind(tangon)();
 550:
            if(!offset) { _fun00006_ip = 620; continue _fun00005 }
 553:
            foxtra = _closure1_slot8;
            romeon = _closure1_slot1;
            echoed = _closure1_slot2;
            yankee = 16;
            yankee = echoed[yankee];
            romeon = romeon.bind(tangon)(yankee);
            yankee = {};
            result = function() { // Original name: onPress
                zuuluu = _closure2_slot0;
                michal = _closure2_slot1;
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
                return entity;
            };
            yankee['onPress'] = result;
            yankee['loading'] = output;
            backup = backup.length;
            backup = backup !== sizing;
            if(backup) { _fun00006_ip = 610; continue _fun00005 }
 607:
            backup = kiloes;
 610:
            yankee['disabled'] = backup;
            offset = foxtra.bind(tangon)(romeon, yankee);
 620:
            verify[1] = offset;
            oscard['children'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
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
    foxtra = 4;
    tangon = golfie[foxtra];
    tangon = oscard.bind(entity)(tangon);
    kiloes = tangon.Fonts;
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
    verify = oscard.bind(entity)(report);
    option = verify.createStyles;
    report = {};
    offset = {};
    offset['flex'] = yankee;
    report['viewWrapper'] = offset;
    offset = {};
    romeon = 7;
    sizing = golfie[romeon];
    sizing = backup.bind(entity)(sizing);
    sizing = sizing.colors;
    sizing = sizing.BACKGROUND_MOBILE_SECONDARY;
    offset['backgroundColor'] = sizing;
    offset['flex'] = yankee;
    report['background'] = offset;
    offset = {'flex': 1, 'justifyContent': 'space-between'};
    report['backgroundFlex'] = offset;
    offset = {};
    yankee = 16;
    offset['padding'] = yankee;
    report['container'] = offset;
    output = 'center';
    offset = {'height': 190, 'alignSelf': 'center', 'resizeMode': 'contain'};
    report['image'] = offset;
    offset = {};
    offset['textAlign'] = output;
    report['title'] = offset;
    sizing = 8;
    offset = {'marginTop': 8, 'lineHeight': 18, 'textAlign': 'center'};
    report['subtitle'] = offset;
    offset = {'color': null, 'textAlign': 'center', 'marginTop': 8};
    yankee = golfie[romeon];
    yankee = backup.bind(entity)(yankee);
    yankee = yankee.unsafe_rawColors;
    yankee = yankee.RED_400;
    offset['color'] = yankee;
    report['bodyError'] = offset;
    yankee = '100%';
    offset = {'marginTop': 20, 'width': '100%', 'alignItems': 'center'};
    report['inputContainer'] = offset;
    offset = {'maxWidth': 336, 'width': '100%', 'flexDirection': 'row', 'justifyContent': 'space-around'};
    report['codeContainer'] = offset;
    offset = {};
    offset['width'] = foxtra;
    report['spacer'] = offset;
    offset = {'borderWidth': 1, 'borderRadius': 5, 'alignItems': 'center'};
    result = golfie[romeon];
    result = backup.bind(entity)(result);
    result = result.colors;
    result = result.BACKGROUND_TERTIARY;
    offset['backgroundColor'] = result;
    result = golfie[romeon];
    result = backup.bind(entity)(result);
    result = result.colors;
    result = result.BACKGROUND_TERTIARY;
    offset['borderColor'] = result;
    report['inputWrapper'] = offset;
    offset = {};
    result = golfie[romeon];
    result = backup.bind(entity)(result);
    result = result.unsafe_rawColors;
    result = result.RED_400;
    offset['borderColor'] = result;
    report['inputWrapperError'] = offset;
    offset = {};
    offset['textAlign'] = output;
    report['input'] = offset;
    offset = {};
    sizing = golfie[sizing];
    sizing = backup.bind(entity)(sizing);
    kiloes = kiloes.PRIMARY_MEDIUM;
    romeon = golfie[romeon];
    romeon = backup.bind(entity)(romeon);
    romeon = romeon.colors;
    backup = romeon.TEXT_NORMAL;
    romeon = 14;
    update = sizing.bind(entity)(kiloes, backup, romeon);
    source = offset;
    romeon = copyDataProperties(source, update);
    romeon = 'marginHorizontal';
    offset[romeon] = foxtra;
    report['actionSeparator'] = offset;
    offset = {};
    offset['width'] = yankee;
    report['singleInputWrapper'] = offset;
    offset = {};
    yankee = 42;
    offset['height'] = yankee;
    report['singleInput'] = offset;
    offset = {'marginTop': 8, 'justifyContent': 'flex-end'};
    report['singleInputButton'] = offset;
    offset = {};
    yankee = 70;
    offset['paddingBottom'] = yankee;
    report['bottomSpace'] = offset;
    report = option.bind(verify)(report);
    var _closure1_slot11 = report;
    report = 17;
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
            entity = 15;
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
            if(!option) { _fun00010_ip = 330; continue _fun00009 }
 318:
            option = michal.bind(tangon)(zuuluu);
            zuuluu = zuuluu + 1;
            if(zuuluu < golfie) { _fun00010_ip = 318; continue _fun00009 }
 330:
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