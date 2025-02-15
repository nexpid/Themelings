// app/modules/activate_device/native/ActivateDevice.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    romeo = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = romeo;
    var _closure1_slot2 = oscar;
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
    tango = romeo.bind(entity)(tango);
    var _closure1_slot3 = tango;
    yankee = 1;
    golf = oscar[yankee];
    tango = argCorge;
    tango = tango.bind(entity)(golf);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.View;
    var _closure1_slot5 = golf;
    golf = tango.ImageBackground;
    var _closure1_slot6 = golf;
    golf = tango.ActivityIndicator;
    var _closure1_slot7 = golf;
    tango = tango.ScrollView;
    var _closure1_slot8 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot9 = tango;
    offset = 4;
    tango = oscar[offset];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {};
    verify['flex'] = yankee;
    tango['background'] = verify;
    verify = {'marginVertical': 0, 'resizeMode': 'cover'};
    yankee = 5;
    foxtrot = oscar[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.colors;
    foxtrot = foxtrot.TEXT_BRAND;
    verify['backgroundColor'] = foxtrot;
    tango['imageStyle'] = verify;
    verify = {'flex': 1, 'justifyContent': 'center', 'alignItems': 'center'};
    tango['safeArea'] = verify;
    verify = {'maxWidth': 480, 'backgroundColor': null, 'alignItems': 'center', 'justifyContent': 'center', 'borderRadius': null, 'padding': 24, 'marginHorizontal': 24, 'marginVertical': 36, 'shadowColor': null, 'shadowOpacity': 0.2};
    foxtrot = oscar[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.colors;
    foxtrot = foxtrot.PANEL_BG;
    verify['backgroundColor'] = foxtrot;
    foxtrot = oscar[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.radii;
    foxtrot = foxtrot.lg;
    verify['borderRadius'] = foxtrot;
    yankee = oscar[yankee];
    yankee = romeo.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.BLACK;
    verify['shadowColor'] = yankee;
    yankee = {'width': 0, 'height': 4};
    verify['shadowOffset'] = yankee;
    verify['shadowRadius'] = offset;
    tango['content'] = verify;
    verify = {'alignSelf': 'stretch', 'flexGrow': 0};
    tango['scroller'] = verify;
    verify = {'flexDirection': 'column', 'gap': 16};
    tango['scrollerContent'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot10 = tango;
    tango = 20;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/activate_device/native/ActivateDevice.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) {
        _fun107481: for(var _fun107481_ip = 0; ; ) switch(_fun107481_ip) {
 0:
            entity = argFoo;
            report = entity.onClose;
            options = entity.prefilledUserCode;
            entity = _closure1_slot10;
            tango = undefined;
            romeo = entity.bind(tango)();
            sizing = _closure1_slot4;
            oscar = sizing.useState;
            entity = 'user-code-input';
            offset = true;
            zulu = {'type': 'user-code-input', 'usePrefilledCode': true};
            zulu = oscar.bind(sizing)(zulu);
            output = _closure1_slot3;
            kilo = 2;
            zulu = output.bind(tango)(zulu, kilo);
            foxtrot = 0;
            golf = zulu[foxtrot];
            var _closure2_slot0 = golf;
            backup = 1;
            oscar = zulu[backup];
            var _closure2_slot1 = oscar;
            yankee = sizing.useState;
            zulu = null;
            yankee = yankee.bind(sizing)(zulu);
            yankee = output.bind(tango)(yankee, kilo);
            foxtrot = yankee[foxtrot];
            var _closure2_slot2 = foxtrot;
            yankee = yankee[backup];
            var _closure2_slot3 = yankee;
            yankee = _closure1_slot0;
            result = _closure1_slot2;
            backup = 6;
            backup = result[backup];
            kilo = yankee.bind(tango)(backup);
            backup = kilo.useActivateDeviceStepTracking;
            backup = backup.bind(kilo)(golf);
            output = sizing.useCallback;
            kilo = new Array(1);
            kilo[0] = oscar;
            backup = function() {
                zulu = _closure2_slot1;
                mike = {};
                entity = 'user-code-input';
                mike['type'] = entity;
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            backup = output.bind(sizing)(backup, kilo);
            echo = sizing.useCallback;
            output = new Array(1);
            output[0] = oscar;
            kilo = function(argFoo) {
                zulu = _closure2_slot1;
                mike = {};
                entity = 'success';
                mike['type'] = entity;
                entity = argFoo;
                mike['userCodeData'] = entity;
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            output = echo.bind(sizing)(kilo, output);
            echo = sizing.useCallback;
            kilo = new Array(1);
            kilo[0] = oscar;
            oscar = function(argFoo) {
                zulu = _closure2_slot1;
                mike = {};
                entity = 'error';
                mike['type'] = entity;
                entity = argFoo;
                mike['userCodeData'] = entity;
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            kilo = echo.bind(sizing)(oscar, kilo);
            oscar = 7;
            oscar = result[oscar];
            yankee = yankee.bind(tango)(oscar);
            oscar = yankee.useDeviceCodeAuthorizeCallback;
            oscar = oscar.bind(yankee)(backup, kilo, output);
            var _closure2_slot4 = oscar;
            kilo = sizing.useCallback;
            yankee = new Array(1);
            yankee[0] = oscar;
            oscar = function(argFoo) {
                oscar = argFoo;
                var _closure3_slot0 = oscar;
                zulu = _closure2_slot1;
                mike = {};
                entity = 'authorization';
                mike['type'] = entity;
                mike['userCodeData'] = oscar;
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                zulu = _closure1_slot0;
                tango = _closure1_slot2;
                mike = 8;
                mike = tango[mike];
                tango = zulu.bind(entity)(mike);
                zulu = tango.openOAuth2Modal;
                mike = {'clientId': null, 'scopes': null, 'responseType': 'code', 'isTrustedName': true, 'isEmbeddedFlow': true, 'withBackPressHandler': false};
                golf = oscar.clientId;
                mike['clientId'] = golf;
                oscar = oscar.scopes;
                mike['scopes'] = oscar;
                report = function(argFoo) { // Original name: callbackWithoutPost
                    tango = _closure2_slot4;
                    zulu = _closure3_slot0;
                    mike = undefined;
                    entity = argFoo;
                    entity = tango.bind(mike)(zulu, entity);
                    return entity;
                };
                mike['callbackWithoutPost'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            oscar = kilo.bind(sizing)(oscar, yankee);
            output = sizing.useEffect;
            kilo = new Array(1);
            kilo[0] = golf;
            yankee = function() {
                _fun107487: for(var _fun107487_ip = 0; ; ) switch(_fun107487_ip) {
 0:
                    zulu = _closure2_slot0;
                    entity = 'userCodeData';
                    entity = entity in zulu;
                    if(!entity) { _fun107487_ip = 231; continue _fun107487 }
 21:
                    entity = _closure2_slot0;
                    tango = entity.userCodeData;
                    oscar = _closure1_slot0;
                    options = _closure1_slot2;
                    report = 9;
                    golf = options[report];
                    zulu = undefined;
                    golf = oscar.bind(zulu)(golf);
                    golf = golf.ConsoleOAuthApplications;
                    verify = golf.PLAYSTATION_APPLICATION_ID;
                    golf = new Array(2);
                    golf[0] = verify;
                    report = options[report];
                    report = oscar.bind(zulu)(report);
                    report = report.ConsoleOAuthApplications;
                    report = report.PLAYSTATION_STAGING_APPLICATION_ID;
                    golf[1] = report;
                    oscar = golf.includes;
                    report = tango.clientId;
                    report = oscar.bind(golf)(report);
                    if(report) { _fun107487_ip = 202; continue _fun107487 }
 120:
                    oscar = tango.scopes;
                    report = oscar.includes;
                    golf = _closure1_slot0;
                    options = _closure1_slot2;
                    tango = 11;
                    tango = options[tango];
                    tango = golf.bind(zulu)(tango);
                    tango = tango.OAuth2Scopes;
                    tango = tango.SDK_SOCIAL_LAYER;
                    tango = report.bind(oscar)(tango);
                    if(!tango) { _fun107487_ip = 231; continue _fun107487 }
 171:
                    report = _closure2_slot3;
                    oscar = _closure1_slot1;
                    golf = _closure1_slot2;
                    tango = 12;
                    tango = golf[tango];
                    tango = oscar.bind(zulu)(tango);
                    tango = report.bind(zulu)(tango);
                    _fun107487_ip = 231; continue _fun107487;
 202:
                    mike = _closure2_slot3;
                    tango = _closure1_slot1;
                    report = _closure1_slot2;
                    entity = 10;
                    entity = report[entity];
                    entity = tango.bind(zulu)(entity);
                    entity = mike.bind(zulu)(entity);
 231:
                    entity = undefined;
                    return entity;
                }
            };
            yankee = output.bind(sizing)(yankee, kilo);
            kilo = sizing.useEffect;
            yankee = new Array(1);
            yankee[0] = foxtrot;
            mike = function() {
                _fun107488: for(var _fun107488_ip = 0; ; ) switch(_fun107488_ip) {
 0:
                    zulu = _closure2_slot2;
                    mike = null;
                    if(!(mike != zulu)) { _fun107488_ip = 53; continue _fun107488 }
 13:
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    mike = 13;
                    zulu = zulu[mike];
                    mike = undefined;
                    zulu = tango.bind(mike)(zulu);
                    mike = zulu.preload;
                    entity = _closure2_slot2;
                    entity = mike.bind(zulu)(entity);
 53:
                    entity = undefined;
                    return entity;
                }
            };
            mike = kilo.bind(sizing)(mike, yankee);
            mike = golf.type;
            if(!(entity !== mike)) { _fun107481_ip = 525; continue _fun107481 }
 362:
            entity = 'authorization';
            if(!(entity !== mike)) { _fun107481_ip = 502; continue _fun107481 }
 373:
            entity = 'success';
            if(!(entity !== mike)) { _fun107481_ip = 442; continue _fun107481 }
 381:
            entity = 'error';
            yankee = null;
            if(!(entity === mike)) { _fun107481_ip = 592; continue _fun107481 }
 394:
            zulu = _closure1_slot9;
            mike = _closure1_slot0;
            kilo = _closure1_slot2;
            entity = 16;
            entity = kilo[entity];
            entity = mike.bind(tango)(entity);
            mike = entity.ActivateDeviceError;
            entity = {};
            entity['onRetry'] = backup;
            yankee = zulu.bind(tango)(mike, entity);
            _fun107481_ip = 592; continue _fun107481;
 442:
            zulu = _closure1_slot9;
            mike = _closure1_slot0;
            backup = _closure1_slot2;
            entity = 15;
            entity = backup[entity];
            entity = mike.bind(tango)(entity);
            mike = entity.ActivateDeviceSuccess;
            entity = {};
            entity['onComplete'] = report;
            backup = golf.userCodeData;
            entity['data'] = backup;
            entity['successImage'] = foxtrot;
            yankee = zulu.bind(tango)(mike, entity);
            _fun107481_ip = 592; continue _fun107481;
 502:
            zulu = _closure1_slot9;
            mike = _closure1_slot7;
            entity = {};
            entity['animating'] = offset;
            yankee = zulu.bind(tango)(mike, entity);
            _fun107481_ip = 592; continue _fun107481;
 525:
            zulu = _closure1_slot9;
            mike = _closure1_slot0;
            offset = _closure1_slot2;
            entity = 14;
            entity = offset[entity];
            entity = mike.bind(tango)(entity);
            mike = entity.UserCodeInput;
            entity = {};
            offset = golf.usePrefilledCode;
            golf = undefined;
            if(!offset) { _fun107481_ip = 571; continue _fun107481 }
 568:
            golf = options;
 571:
            entity['prefilledUserCode'] = golf;
            entity['onUserCodeAccepted'] = oscar;
            entity['onClose'] = report;
            yankee = zulu.bind(tango)(mike, entity);
 592:
            zulu = _closure1_slot9;
            mike = _closure1_slot6;
            entity = {};
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            report = 17;
            report = golf[report];
            offset = oscar.bind(tango)(report);
            options = offset.makeSource;
            foxtrot = _closure1_slot1;
            report = 18;
            report = golf[report];
            report = foxtrot.bind(tango)(report);
            report = options.bind(offset)(report);
            entity['source'] = report;
            report = romeo.imageStyle;
            entity['imageStyle'] = report;
            options = romeo.background;
            report = new Array(1);
            report[0] = options;
            entity['style'] = report;
            report = 19;
            report = golf[report];
            report = oscar.bind(tango)(report);
            oscar = report.SafeAreaPaddingView;
            report = {'bottom': true, 'top': true};
            golf = romeo.safeArea;
            report['style'] = golf;
            options = _closure1_slot5;
            golf = {};
            offset = romeo.content;
            golf['style'] = offset;
            offset = _closure1_slot8;
            verify = {};
            foxtrot = false;
            verify['bounces'] = foxtrot;
            foxtrot = romeo.scroller;
            verify['style'] = foxtrot;
            romeo = romeo.scrollerContent;
            verify['contentContainerStyle'] = romeo;
            verify['children'] = yankee;
            verify = zulu.bind(tango)(offset, verify);
            golf['children'] = verify;
            golf = zulu.bind(tango)(options, golf);
            report['children'] = golf;
            report = zulu.bind(tango)(oscar, report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['ActivateDevice'] = mike;
    return entity;
})();