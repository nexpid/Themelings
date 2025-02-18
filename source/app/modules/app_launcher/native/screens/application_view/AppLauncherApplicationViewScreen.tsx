// app/modules/app_launcher/native/screens/application_view/AppLauncherApplicationViewScreen.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: AppLauncherApplicationViewScreenInner
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.channelId;
            var _closure2_slot0 = zuuluu;
            foxtra = entity.application;
            var _closure2_slot1 = foxtra;
            romeon = entity.lockableScrollableContentOffsetY;
            echoed = entity.initiallyExpanded;
            yankee = entity.installOnDemand;
            offset = entity.sectionName;
            verify = entity.onPressBack;
            option = entity.onActivityItemSelected;
            golfie = entity.entrypoint;
            result = entity.expandBottomSheet;
            var _closure2_slot2 = result;
            oscard = entity.onCommandExecuted;
            tangon = undefined;
            var _closure2_slot6 = tangon;
            kiloes = _closure1_slot0;
            update = _closure1_slot2;
            zuuluu = 9;
            zuuluu = update[zuuluu];
            sizing = kiloes.bind(tangon)(zuuluu);
            backup = sizing.useStateFromStores;
            zuuluu = _closure1_slot7;
            report = new Array(1);
            report[0] = zuuluu;
            zuuluu = function() {
                zuuluu = _closure1_slot7;
                michal = zuuluu.getChannel;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            backup = backup.bind(sizing)(report, zuuluu);
            sizing = _closure1_slot1;
            zuuluu = 10;
            zuuluu = update[zuuluu];
            source = sizing.bind(tangon)(zuuluu);
            report = null;
            output = report != backup;
            zuuluu = 'channel should not be null';
            zuuluu = source.bind(tangon)(output, zuuluu);
            zuuluu = 11;
            zuuluu = update[zuuluu];
            kiloes = kiloes.bind(tangon)(zuuluu);
            zuuluu = kiloes.useRequiredAppLauncherContext;
            zuuluu = zuuluu.bind(kiloes)();
            output = zuuluu.bottomSheetExpandReasonRef;
            var _closure2_slot3 = output;
            zuuluu = zuuluu.chatInputRef;
            var _closure2_slot4 = zuuluu;
            kiloes = 12;
            kiloes = update[kiloes];
            kiloes = sizing.bind(tangon)(kiloes);
            update = kiloes.bind(tangon)();
            var _closure2_slot5 = update;
            if(!(report == echoed)) { _fun00002_ip = 271; continue _fun00001 }
 240:
            kiloes = _closure1_slot0;
            sizing = _closure1_slot2;
            report = 13;
            report = sizing[report];
            kiloes = kiloes.bind(tangon)(report);
            report = kiloes.isEmbeddedApp;
            echoed = report.bind(kiloes)(foxtra);
 271:
            _closure2_slot6 = echoed;
            sizing = _closure1_slot3;
            kiloes = sizing.useCallback;
            report = new Array(2);
            report[0] = foxtra;
            report[1] = zuuluu;
            zuuluu = function() {
                entity = _closure2_slot4;
                zuuluu = entity.current;
                michal = zuuluu.openCustomKeyboard;
                entity = {};
                tangon = _closure1_slot10;
                tangon = tangon.APP_LAUNCHER;
                entity['keyboardType'] = tangon;
                tangon = {};
                oscard = _closure1_slot8;
                oscard = oscard.APPLICATION_VIEW;
                tangon['initialRouteName'] = oscard;
                report = _closure2_slot1;
                tangon['application'] = report;
                entity['context'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            };
            report = kiloes.bind(sizing)(zuuluu, report);
            sizing = _closure1_slot3;
            kiloes = sizing.useEffect;
            zuuluu = new Array(4);
            zuuluu[0] = update;
            zuuluu[1] = echoed;
            zuuluu[2] = result;
            zuuluu[3] = output;
            michal = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot6;
                    if(!michal) { _fun00004_ip = 14; continue _fun00003 }
 10:
                    michal = _closure2_slot5;
 14:
                    if(!michal) { _fun00004_ip = 82; continue _fun00003 }
 17:
                    tangon = _closure2_slot3;
                    report = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 11;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    zuuluu = report.bind(michal)(zuuluu);
                    zuuluu = zuuluu.AppLauncherBottomSheetExpandReason;
                    zuuluu = zuuluu.APP_VIEW;
                    tangon['current'] = zuuluu;
                    tangon = _closure2_slot2;
                    zuuluu = null;
                    if(!(zuuluu != tangon)) { _fun00004_ip = 82; continue _fun00003 }
 74:
                    entity = _closure2_slot2;
                    entity = entity.bind(michal)();
 82:
                    entity = undefined;
                    return entity;
                }
            };
            michal = kiloes.bind(sizing)(michal, zuuluu);
            zuuluu = _closure1_slot11;
            michal = _closure1_slot1;
            kiloes = _closure1_slot2;
            entity = 14;
            entity = kiloes[entity];
            michal = michal.bind(tangon)(entity);
            entity = {};
            entity['application'] = foxtra;
            foxtra = {};
            foxtra['channel'] = backup;
            backup = 'channel';
            foxtra['type'] = backup;
            entity['context'] = foxtra;
            entity['lockableScrollableContentOffsetY'] = romeon;
            entity['installOnDemand'] = yankee;
            entity['sectionName'] = offset;
            entity['onPressBack'] = verify;
            entity['onActivityItemSelected'] = option;
            entity['entrypoint'] = golfie;
            entity['onCommandExecuted'] = oscard;
            entity['onAauth2Cancel'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    option = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot3 = tangon;
    offset = 1;
    tangon = oscard[offset];
    tangon = report.bind(entity)(tangon);
    option = tangon.ActivityIndicator;
    var _closure1_slot4 = option;
    tangon = tangon.View;
    var _closure1_slot5 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.AppLauncherRouteName;
    var _closure1_slot8 = golfie;
    yankee = tangon.SCREEN_BACKGROUND_COLOR;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.BuiltInSectionId;
    var _closure1_slot9 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.KeyboardTypes;
    var _closure1_slot10 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot11 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {};
    verify['backgroundColor'] = yankee;
    verify['flex'] = offset;
    tangon['container'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot12 = tangon;
    tangon = 18;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/app_launcher/native/screens/application_view/AppLauncherApplicationViewScreen.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: AppLauncherApplicationViewScreen
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            entity = michal.route;
            zuuluu = entity.params;
            result = zuuluu.application;
            entity = zuuluu.applicationId;
            tangon = zuuluu.onPressBack;
            var _closure2_slot0 = tangon;
            echoed = zuuluu.channelId;
            var _closure2_slot1 = echoed;
            sizing = zuuluu.initiallyExpanded;
            kiloes = zuuluu.installOnDemand;
            var _closure2_slot2 = kiloes;
            backup = zuuluu.sectionName;
            offset = zuuluu.expandBottomSheet;
            verify = zuuluu.onCommandExecuted;
            michal = michal.navigation;
            var _closure2_slot3 = michal;
            tangon = undefined;
            var _closure2_slot6 = tangon;
            zuuluu = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 9;
            michal = golfie[michal];
            yankee = zuuluu.bind(tangon)(michal);
            option = yankee.useStateFromStores;
            michal = _closure1_slot7;
            report = new Array(1);
            report[0] = michal;
            michal = function() {
                zuuluu = _closure1_slot7;
                michal = zuuluu.getChannel;
                entity = _closure2_slot1;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            michal = option.bind(yankee)(report, michal);
            option = _closure1_slot1;
            report = 10;
            report = golfie[report];
            yankee = option.bind(tangon)(report);
            report = null;
            option = report != michal;
            michal = 'channel should not be null';
            michal = yankee.bind(tangon)(option, michal);
            michal = 11;
            michal = golfie[michal];
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.useRequiredAppLauncherContext;
            michal = michal.bind(zuuluu)();
            zuuluu = michal.chatInputRef;
            var _closure2_slot4 = zuuluu;
            yankee = michal.entrypoint;
            romeon = michal.onActivityItemSelected;
            michal = michal.keyboardCloseReasonRef;
            var _closure2_slot5 = michal;
            michal = _closure1_slot12;
            golfie = michal.bind(tangon)();
            zuuluu = report == result;
            michal = undefined;
            if(zuuluu) { _fun00006_ip = 259; continue _fun00005 }
 254:
            michal = result.id;
 259:
            if(!(report != michal)) { _fun00006_ip = 266; continue _fun00005 }
 263:
            entity = michal;
 266:
            _closure2_slot6 = entity;
            zuuluu = _closure1_slot0;
            option = _closure1_slot2;
            michal = 15;
            michal = option[michal];
            option = zuuluu.bind(tangon)(michal);
            zuuluu = option.useGetOrFetchApplication;
            michal = _closure1_slot9;
            output = michal.BUILT_IN;
            michal = null;
            if(!(entity !== output)) { _fun00006_ip = 315; continue _fun00005 }
 312:
            michal = entity;
 315:
            michal = zuuluu.bind(option)(michal);
            zuuluu = _closure1_slot9;
            zuuluu = zuuluu.BUILT_IN;
            if(!(entity !== zuuluu)) { _fun00006_ip = 343; continue _fun00005 }
 334:
            if(!(report != michal)) { _fun00006_ip = 341; continue _fun00005 }
 338:
            result = michal;
 341:
            _fun00006_ip = 369; continue _fun00005;
 343:
            zuuluu = _closure1_slot0;
            option = _closure1_slot2;
            michal = 13;
            michal = option[michal];
            michal = zuuluu.bind(tangon)(michal);
            result = michal.FAKE_BUILT_IN_APP;
 369:
            zuuluu = _closure1_slot0;
            option = _closure1_slot2;
            michal = 16;
            michal = option[michal];
            option = zuuluu.bind(tangon)(michal);
            zuuluu = option.useSharedValue;
            michal = 0;
            output = zuuluu.bind(option)(michal);
            option = _closure1_slot3;
            zuuluu = option.useEffect;
            michal = new Array(3);
            michal[0] = entity;
            michal[1] = echoed;
            michal[2] = kiloes;
            entity = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zuuluu = _closure2_slot6;
                    michal = null;
                    michal = michal != zuuluu;
                    if(!michal) { _fun00008_ip = 20; continue _fun00007 }
 16:
                    michal = _closure2_slot2;
 20:
                    if(!michal) { _fun00008_ip = 52; continue _fun00007 }
 23:
                    tangon = _closure1_slot6;
                    zuuluu = tangon.queryInstallOnDemandApp;
                    michal = _closure2_slot6;
                    entity = _closure2_slot1;
                    entity = zuuluu.bind(tangon)(michal, entity);
 52:
                    entity = undefined;
                    return entity;
                }
            };
            entity = zuuluu.bind(option)(entity, michal);
            zuuluu = _closure1_slot11;
            michal = _closure1_slot5;
            entity = {};
            golfie = golfie.container;
            entity['style'] = golfie;
            if(!(report == result)) { _fun00006_ip = 537; continue _fun00005 }
 462:
            option = _closure1_slot11;
            golfie = _closure1_slot5;
            report = {};
            update = {};
            ctrled = _closure1_slot0;
            vacuum = _closure1_slot2;
            source = 17;
            source = vacuum[source];
            source = ctrled.bind(tangon)(source);
            source = source.EXPANDED_HEADER_HEIGHT;
            update['paddingTop'] = source;
            report['style'] = update;
            ctrled = _closure1_slot11;
            source = _closure1_slot4;
            update = {};
            update = ctrled.bind(tangon)(source, update);
            report['children'] = update;
            report = option.bind(tangon)(golfie, report);
            _fun00006_ip = 613; continue _fun00005;
 537:
            option = _closure1_slot11;
            golfie = _closure1_slot13;
            oscard = {};
            oscard['channelId'] = echoed;
            oscard['application'] = result;
            oscard['lockableScrollableContentOffsetY'] = output;
            oscard['initiallyExpanded'] = sizing;
            oscard['installOnDemand'] = kiloes;
            oscard['sectionName'] = backup;
            foxtra = function() { // Original name: onPressBack
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zuuluu = _closure2_slot0;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00010_ip = 23; continue _fun00009 }
 13:
                    tangon = _closure2_slot0;
                    zuuluu = undefined;
                    zuuluu = tangon.bind(zuuluu)();
 23:
                    tangon = _closure2_slot3;
                    zuuluu = tangon.canGoBack;
                    zuuluu = zuuluu.bind(tangon)();
                    if(zuuluu) { _fun00010_ip = 112; continue _fun00009 }
 40:
                    tangon = _closure2_slot5;
                    oscard = _closure1_slot0;
                    report = _closure1_slot2;
                    zuuluu = 11;
                    report = report[zuuluu];
                    zuuluu = undefined;
                    zuuluu = oscard.bind(zuuluu)(report);
                    zuuluu = zuuluu.AppLauncherKeyboardCloseReason;
                    zuuluu = zuuluu.BACK;
                    tangon['current'] = zuuluu;
                    zuuluu = _closure2_slot4;
                    zuuluu = zuuluu.current;
                    if(!(michal != zuuluu)) { _fun00010_ip = 126; continue _fun00009 }
 100:
                    michal = zuuluu.closeCustomKeyboard;
                    michal = michal.bind(zuuluu)();
                    _fun00010_ip = 126; continue _fun00009;
 112:
                    michal = _closure2_slot3;
                    entity = michal.pop;
                    entity = entity.bind(michal)();
 126:
                    entity = undefined;
                    return entity;
                }
            };
            oscard['onPressBack'] = foxtra;
            oscard['onActivityItemSelected'] = romeon;
            oscard['entrypoint'] = yankee;
            oscard['expandBottomSheet'] = offset;
            oscard['onCommandExecuted'] = verify;
            report = option.bind(tangon)(golfie, oscard);
 613:
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();