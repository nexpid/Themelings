// app/modules/activate_device/native/ActivateDevice.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    romeon = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = romeon;
    var _closure1_slot2 = oscard;
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
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    yankee = 1;
    golfie = oscard[yankee];
    tangon = argCor;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.View;
    var _closure1_slot5 = golfie;
    golfie = tangon.ImageBackground;
    var _closure1_slot6 = golfie;
    golfie = tangon.ActivityIndicator;
    var _closure1_slot7 = golfie;
    tangon = tangon.ScrollView;
    var _closure1_slot8 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot9 = tangon;
    offset = 4;
    tangon = oscard[offset];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {};
    verify['flex'] = yankee;
    tangon['background'] = verify;
    verify = {'marginVertical': 0, 'resizeMode': 'cover'};
    yankee = 5;
    foxtra = oscard[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.colors;
    foxtra = foxtra.TEXT_BRAND;
    verify['backgroundColor'] = foxtra;
    tangon['imageStyle'] = verify;
    verify = {'flex': 1, 'justifyContent': 'center', 'alignItems': 'center'};
    tangon['safeArea'] = verify;
    verify = {'maxWidth': 480, 'backgroundColor': null, 'alignItems': 'center', 'justifyContent': 'center', 'borderRadius': null, 'padding': 24, 'marginHorizontal': 24, 'marginVertical': 36, 'shadowColor': null, 'shadowOpacity': 0.2};
    foxtra = oscard[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.colors;
    foxtra = foxtra.PANEL_BG;
    verify['backgroundColor'] = foxtra;
    foxtra = oscard[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.radii;
    foxtra = foxtra.lg;
    verify['borderRadius'] = foxtra;
    yankee = oscard[yankee];
    yankee = romeon.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.BLACK;
    verify['shadowColor'] = yankee;
    yankee = {'width': 0, 'height': 4};
    verify['shadowOffset'] = yankee;
    verify['shadowRadius'] = offset;
    tangon['content'] = verify;
    verify = {'alignSelf': 'stretch', 'flexGrow': 0};
    tangon['scroller'] = verify;
    verify = {'flexDirection': 'column', 'gap': 16};
    tangon['scrollerContent'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot10 = tangon;
    tangon = 20;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/activate_device/native/ActivateDevice.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            report = entity.onClose;
            option = entity.prefilledUserCode;
            entity = _closure1_slot10;
            tangon = undefined;
            romeon = entity.bind(tangon)();
            sizing = _closure1_slot4;
            oscard = sizing.useState;
            entity = 'user-code-input';
            offset = true;
            zuuluu = {'type': 'user-code-input', 'usePrefilledCode': true};
            zuuluu = oscard.bind(sizing)(zuuluu);
            output = _closure1_slot3;
            kiloes = 2;
            zuuluu = output.bind(tangon)(zuuluu, kiloes);
            foxtra = 0;
            golfie = zuuluu[foxtra];
            var _closure2_slot0 = golfie;
            backup = 1;
            oscard = zuuluu[backup];
            var _closure2_slot1 = oscard;
            yankee = sizing.useState;
            zuuluu = null;
            yankee = yankee.bind(sizing)(zuuluu);
            yankee = output.bind(tangon)(yankee, kiloes);
            foxtra = yankee[foxtra];
            var _closure2_slot2 = foxtra;
            yankee = yankee[backup];
            var _closure2_slot3 = yankee;
            yankee = _closure1_slot0;
            result = _closure1_slot2;
            backup = 6;
            backup = result[backup];
            kiloes = yankee.bind(tangon)(backup);
            backup = kiloes.useActivateDeviceStepTracking;
            backup = backup.bind(kiloes)(golfie);
            output = sizing.useCallback;
            kiloes = new Array(1);
            kiloes[0] = oscard;
            backup = function() {
                zuuluu = _closure2_slot1;
                michal = {};
                entity = 'user-code-input';
                michal['type'] = entity;
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            backup = output.bind(sizing)(backup, kiloes);
            echoed = sizing.useCallback;
            output = new Array(1);
            output[0] = oscard;
            kiloes = function(argFoo) {
                zuuluu = _closure2_slot1;
                michal = {};
                entity = 'success';
                michal['type'] = entity;
                entity = argFoo;
                michal['userCodeData'] = entity;
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            output = echoed.bind(sizing)(kiloes, output);
            echoed = sizing.useCallback;
            kiloes = new Array(1);
            kiloes[0] = oscard;
            oscard = function(argFoo) {
                zuuluu = _closure2_slot1;
                michal = {};
                entity = 'error';
                michal['type'] = entity;
                entity = argFoo;
                michal['userCodeData'] = entity;
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            kiloes = echoed.bind(sizing)(oscard, kiloes);
            oscard = 7;
            oscard = result[oscard];
            yankee = yankee.bind(tangon)(oscard);
            oscard = yankee.useDeviceCodeAuthorizeCallback;
            oscard = oscard.bind(yankee)(backup, kiloes, output);
            var _closure2_slot4 = oscard;
            kiloes = sizing.useCallback;
            yankee = new Array(1);
            yankee[0] = oscard;
            oscard = function(argFoo) {
                oscard = argFoo;
                var _closure3_slot0 = oscard;
                zuuluu = _closure2_slot1;
                michal = {};
                entity = 'authorization';
                michal['type'] = entity;
                michal['userCodeData'] = oscard;
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                zuuluu = _closure1_slot0;
                tangon = _closure1_slot2;
                michal = 8;
                michal = tangon[michal];
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.openOAuth2Modal;
                michal = {'clientId': null, 'scopes': null, 'responseType': 'code', 'isTrustedName': true, 'isEmbeddedFlow': true, 'withBackPressHandler': false};
                golfie = oscard.clientId;
                michal['clientId'] = golfie;
                oscard = oscard.scopes;
                michal['scopes'] = oscard;
                report = function(argFoo) { // Original name: callbackWithoutPost
                    tangon = _closure2_slot4;
                    zuuluu = _closure3_slot0;
                    michal = undefined;
                    entity = argFoo;
                    entity = tangon.bind(michal)(zuuluu, entity);
                    return entity;
                };
                michal['callbackWithoutPost'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            oscard = kiloes.bind(sizing)(oscard, yankee);
            output = sizing.useEffect;
            kiloes = new Array(1);
            kiloes[0] = golfie;
            yankee = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = _closure2_slot0;
                    entity = 'userCodeData';
                    entity = entity in zuuluu;
                    if(!entity) { _fun00004_ip = 231; continue _fun00003 }
 21:
                    entity = _closure2_slot0;
                    tangon = entity.userCodeData;
                    oscard = _closure1_slot0;
                    option = _closure1_slot2;
                    report = 9;
                    golfie = option[report];
                    zuuluu = undefined;
                    golfie = oscard.bind(zuuluu)(golfie);
                    golfie = golfie.ConsoleOAuthApplications;
                    verify = golfie.PLAYSTATION_APPLICATION_ID;
                    golfie = new Array(2);
                    golfie[0] = verify;
                    report = option[report];
                    report = oscard.bind(zuuluu)(report);
                    report = report.ConsoleOAuthApplications;
                    report = report.PLAYSTATION_STAGING_APPLICATION_ID;
                    golfie[1] = report;
                    oscard = golfie.includes;
                    report = tangon.clientId;
                    report = oscard.bind(golfie)(report);
                    if(report) { _fun00004_ip = 202; continue _fun00003 }
 120:
                    oscard = tangon.scopes;
                    report = oscard.includes;
                    golfie = _closure1_slot0;
                    option = _closure1_slot2;
                    tangon = 11;
                    tangon = option[tangon];
                    tangon = golfie.bind(zuuluu)(tangon);
                    tangon = tangon.OAuth2Scopes;
                    tangon = tangon.SDK_SOCIAL_LAYER;
                    tangon = report.bind(oscard)(tangon);
                    if(!tangon) { _fun00004_ip = 231; continue _fun00003 }
 171:
                    report = _closure2_slot3;
                    oscard = _closure1_slot1;
                    golfie = _closure1_slot2;
                    tangon = 12;
                    tangon = golfie[tangon];
                    tangon = oscard.bind(zuuluu)(tangon);
                    tangon = report.bind(zuuluu)(tangon);
                    _fun00004_ip = 231; continue _fun00003;
 202:
                    michal = _closure2_slot3;
                    tangon = _closure1_slot1;
                    report = _closure1_slot2;
                    entity = 10;
                    entity = report[entity];
                    entity = tangon.bind(zuuluu)(entity);
                    entity = michal.bind(zuuluu)(entity);
 231:
                    entity = undefined;
                    return entity;
                }
            };
            yankee = output.bind(sizing)(yankee, kiloes);
            kiloes = sizing.useEffect;
            yankee = new Array(1);
            yankee[0] = foxtra;
            michal = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zuuluu = _closure2_slot2;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00006_ip = 53; continue _fun00005 }
 13:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 13;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    zuuluu = tangon.bind(michal)(zuuluu);
                    michal = zuuluu.preload;
                    entity = _closure2_slot2;
                    entity = michal.bind(zuuluu)(entity);
 53:
                    entity = undefined;
                    return entity;
                }
            };
            michal = kiloes.bind(sizing)(michal, yankee);
            michal = golfie.type;
            if(!(entity !== michal)) { _fun00002_ip = 525; continue _fun00001 }
 362:
            entity = 'authorization';
            if(!(entity !== michal)) { _fun00002_ip = 502; continue _fun00001 }
 373:
            entity = 'success';
            if(!(entity !== michal)) { _fun00002_ip = 442; continue _fun00001 }
 381:
            entity = 'error';
            yankee = null;
            if(!(entity === michal)) { _fun00002_ip = 592; continue _fun00001 }
 394:
            zuuluu = _closure1_slot9;
            michal = _closure1_slot0;
            kiloes = _closure1_slot2;
            entity = 16;
            entity = kiloes[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.ActivateDeviceError;
            entity = {};
            entity['onRetry'] = backup;
            yankee = zuuluu.bind(tangon)(michal, entity);
            _fun00002_ip = 592; continue _fun00001;
 442:
            zuuluu = _closure1_slot9;
            michal = _closure1_slot0;
            backup = _closure1_slot2;
            entity = 15;
            entity = backup[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.ActivateDeviceSuccess;
            entity = {};
            entity['onComplete'] = report;
            backup = golfie.userCodeData;
            entity['data'] = backup;
            entity['successImage'] = foxtra;
            yankee = zuuluu.bind(tangon)(michal, entity);
            _fun00002_ip = 592; continue _fun00001;
 502:
            zuuluu = _closure1_slot9;
            michal = _closure1_slot7;
            entity = {};
            entity['animating'] = offset;
            yankee = zuuluu.bind(tangon)(michal, entity);
            _fun00002_ip = 592; continue _fun00001;
 525:
            zuuluu = _closure1_slot9;
            michal = _closure1_slot0;
            offset = _closure1_slot2;
            entity = 14;
            entity = offset[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.UserCodeInput;
            entity = {};
            offset = golfie.usePrefilledCode;
            golfie = undefined;
            if(!offset) { _fun00002_ip = 571; continue _fun00001 }
 568:
            golfie = option;
 571:
            entity['prefilledUserCode'] = golfie;
            entity['onUserCodeAccepted'] = oscard;
            entity['onClose'] = report;
            yankee = zuuluu.bind(tangon)(michal, entity);
 592:
            zuuluu = _closure1_slot9;
            michal = _closure1_slot6;
            entity = {};
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            report = 17;
            report = golfie[report];
            offset = oscard.bind(tangon)(report);
            option = offset.makeSource;
            foxtra = _closure1_slot1;
            report = 18;
            report = golfie[report];
            report = foxtra.bind(tangon)(report);
            report = option.bind(offset)(report);
            entity['source'] = report;
            report = romeon.imageStyle;
            entity['imageStyle'] = report;
            option = romeon.background;
            report = new Array(1);
            report[0] = option;
            entity['style'] = report;
            report = 19;
            report = golfie[report];
            report = oscard.bind(tangon)(report);
            oscard = report.SafeAreaPaddingView;
            report = {'bottom': true, 'top': true};
            golfie = romeon.safeArea;
            report['style'] = golfie;
            option = _closure1_slot5;
            golfie = {};
            offset = romeon.content;
            golfie['style'] = offset;
            offset = _closure1_slot8;
            verify = {};
            foxtra = false;
            verify['bounces'] = foxtra;
            foxtra = romeon.scroller;
            verify['style'] = foxtra;
            romeon = romeon.scrollerContent;
            verify['contentContainerStyle'] = romeon;
            verify['children'] = yankee;
            verify = zuuluu.bind(tangon)(offset, verify);
            golfie['children'] = verify;
            golfie = zuuluu.bind(tangon)(option, golfie);
            report['children'] = golfie;
            report = zuuluu.bind(tangon)(oscard, report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['ActivateDevice'] = michal;
    return entity;
})();