// app/modules/chat_input/native/ChatInputAppDM.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    yankee = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
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
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    golfie = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    romeon = 4;
    tangon = oscard[romeon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.getSection;
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    foxtra = tangon.CHAT_INPUT_ACTION_BUTTON_SIZE;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AnalyticEvents;
    var _closure1_slot8 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AppLauncherRouteName;
    var _closure1_slot9 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.jsx;
    var _closure1_slot10 = golfie;
    tangon = tangon.jsxs;
    var _closure1_slot11 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {'flexDirection': 'row', 'alignItems': 'center'};
    tangon['container'] = verify;
    verify = {};
    offset = 10;
    backup = oscard[offset];
    backup = yankee.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.CARD_SECONDARY_BG;
    verify['backgroundColor'] = backup;
    tangon['themedChatInput'] = verify;
    verify = {'borderRadius': null, 'backgroundColor': null, 'height': 24, 'width': 24, 'padding': 4, 'alignContent': 'center'};
    backup = oscard[offset];
    backup = yankee.bind(entity)(backup);
    backup = backup.radii;
    backup = backup.round;
    verify['borderRadius'] = backup;
    backup = oscard[offset];
    backup = yankee.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.STATUS_POSITIVE;
    verify['backgroundColor'] = backup;
    tangon['unmutedNotificationContainer'] = verify;
    verify = {'width': 16, 'height': 16};
    tangon['unmutedNotification'] = verify;
    verify = {};
    backup = oscard[offset];
    backup = yankee.bind(entity)(backup);
    backup = backup.radii;
    backup = backup.round;
    verify['borderRadius'] = backup;
    verify['height'] = foxtra;
    verify['width'] = foxtra;
    verify['marginHorizontal'] = romeon;
    offset = oscard[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.REDESIGN_BUTTON_TERTIARY_BACKGROUND;
    verify['backgroundColor'] = offset;
    tangon['loadingButton'] = verify;
    verify = {'flexGrow': 1, 'alignSelf': 'stretch'};
    tangon['loadingLaunchButton'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot12 = tangon;
    tangon = function(argFoo) { // Original name: ChatInputAppDMLaunchButton
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            sizing = entity.context;
            golfie = entity.primaryEntryPointCommand;
            kiloes = entity.application;
            romeon = entity.onOpenButtonPress;
            tangon = _closure1_slot1;
            oscard = _closure1_slot2;
            zuuluu = 14;
            michal = oscard[zuuluu];
            report = undefined;
            tangon = tangon.bind(report)(michal);
            michal = {};
            michal['context'] = sizing;
            michal['primaryEntryPointCommand'] = golfie;
            michal['application'] = kiloes;
            tangon = tangon.bind(report)(michal);
            option = tangon.isExecutingLaunchInteraction;
            golfie = tangon.buttonText;
            michal = tangon.hasActiveMatchingEmbeddedActivity;
            backup = tangon.isEmbeddedApp;
            foxtra = tangon.currentEmbeddedActivity;
            yankee = tangon.channelRecipientUserId;
            offset = tangon.setIsExecutingLaunchInteraction;
            verify = tangon.analyticsLocations;
            tangon = _closure1_slot0;
            zuuluu = oscard[zuuluu];
            oscard = tangon.bind(report)(zuuluu);
            tangon = oscard.useOnEntryPointCommandButtonPress;
            zuuluu = {};
            zuuluu['context'] = sizing;
            zuuluu['application'] = kiloes;
            zuuluu['isEmbeddedApp'] = backup;
            zuuluu['hasActiveMatchingEmbeddedActivity'] = michal;
            zuuluu['currentEmbeddedActivity'] = foxtra;
            zuuluu['onOpenButtonPress'] = romeon;
            zuuluu['channelRecipientUserId'] = yankee;
            zuuluu['setIsExecutingLaunchInteraction'] = offset;
            zuuluu['analyticsLocations'] = verify;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = 'primary';
            if(!michal) { _fun00002_ip = 200; continue _fun00001 }
 194:
            tangon = 'destructive';
 200:
            zuuluu = _closure1_slot10;
            michal = _closure1_slot0;
            verify = _closure1_slot2;
            entity = 15;
            entity = verify[entity];
            entity = michal.bind(report)(entity);
            michal = entity.Button;
            entity = {};
            entity['variant'] = tangon;
            verify = 'md';
            entity['size'] = verify;
            entity['loading'] = option;
            entity['text'] = golfie;
            entity['onPress'] = oscard;
            oscard = true;
            entity['grow'] = oscard;
            entity = zuuluu.bind(report)(michal, entity, tangon);
            return entity;
        }
    };
    var _closure1_slot13 = tangon;
    tangon = 26;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/chat_input/native/ChatInputAppDM.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo, argBar) { // Original name: useChatInputAppDMUIState
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = argFoo;
            offset = argBar;
            var _closure2_slot0 = report;
            var _closure2_slot1 = offset;
            verify = _closure1_slot4;
            zuuluu = verify.useRef;
            michal = false;
            oscard = zuuluu.bind(verify)(michal);
            var _closure2_slot2 = oscard;
            zuuluu = verify.useState;
            michal = true;
            tangon = zuuluu.bind(verify)(michal);
            zuuluu = _closure1_slot3;
            yankee = undefined;
            michal = 2;
            zuuluu = zuuluu.bind(yankee)(tangon, michal);
            michal = 0;
            tangon = zuuluu[michal];
            var _closure2_slot3 = tangon;
            michal = 1;
            michal = zuuluu[michal];
            var _closure2_slot4 = michal;
            option = verify.useCallback;
            zuuluu = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = argFoo;
                    report = entity.visible;
                    zuuluu = entity.willOpenSystemKeyboard;
                    entity = undefined;
                    if(!(zuuluu === entity)) { _fun00006_ip = 23; continue _fun00005 }
 21:
                    zuuluu = false;
 23:
                    tangon = _closure2_slot4;
                    tangon = tangon.bind(entity)(report);
                    michal = _closure2_slot2;
                    michal['current'] = zuuluu;
                    return entity;
                }
            };
            michal = new Array(0);
            michal = option.bind(verify)(zuuluu, michal);
            var _closure2_slot5 = michal;
            verify = _closure1_slot0;
            romeon = _closure1_slot2;
            zuuluu = 11;
            zuuluu = romeon[zuuluu];
            option = verify.bind(yankee)(zuuluu);
            zuuluu = option.useIsChatInputAppDMDisabled;
            option = zuuluu.bind(option)();
            zuuluu = 12;
            zuuluu = romeon[zuuluu];
            romeon = verify.bind(yankee)(zuuluu);
            verify = romeon.useIsAppDM;
            zuuluu = report.id;
            zuuluu = verify.bind(romeon)(zuuluu);
            if(!zuuluu) { _fun00004_ip = 177; continue _fun00003 }
 174:
            zuuluu = !option;
 177:
            var _closure2_slot6 = zuuluu;
            verify = _closure1_slot0;
            romeon = _closure1_slot2;
            option = 13;
            option = romeon[option];
            romeon = verify.bind(yankee)(option);
            yankee = romeon.useStateFromStores;
            option = _closure1_slot6;
            verify = new Array(1);
            verify[0] = option;
            foxtra = report.id;
            option = new Array(2);
            option[0] = foxtra;
            option[1] = zuuluu;
            zuuluu = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    michal = _closure1_slot6;
                    entity = michal.appDMChannelsWithFailedLoads;
                    tangon = entity.bind(michal)();
                    zuuluu = tangon.has;
                    entity = _closure2_slot0;
                    entity = entity.id;
                    entity = zuuluu.bind(tangon)(entity);
                    entity = !entity;
                    if(!entity) { _fun00008_ip = 51; continue _fun00007 }
 47:
                    entity = _closure2_slot6;
 51:
                    return entity;
                }
            };
            zuuluu = yankee.bind(romeon)(verify, zuuluu, option);
            golfie = _closure1_slot4;
            verify = golfie.useEffect;
            option = new Array(3);
            option[0] = tangon;
            option[1] = offset;
            option[2] = oscard;
            oscard = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    michal = _closure2_slot2;
                    michal = michal.current;
                    if(!michal) { _fun00010_ip = 22; continue _fun00009 }
 15:
                    zuuluu = _closure2_slot3;
                    michal = !zuuluu;
 22:
                    if(!michal) { _fun00010_ip = 56; continue _fun00009 }
 25:
                    zuuluu = _closure2_slot2;
                    michal = false;
                    zuuluu['current'] = michal;
                    entity = _closure2_slot1;
                    michal = entity.current;
                    entity = michal.openSystemKeyboard;
                    entity = entity.bind(michal)();
 56:
                    entity = undefined;
                    return entity;
                }
            };
            oscard = verify.bind(golfie)(oscard, option);
            oscard = golfie.useEffect;
            option = report.id;
            report = new Array(2);
            report[0] = option;
            report[1] = michal;
            entity = function() {
                zuuluu = _closure2_slot5;
                michal = {};
                entity = true;
                michal['visible'] = entity;
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            entity = oscard.bind(golfie)(entity, report);
            entity = {};
            entity['appDMsUIEnabled'] = zuuluu;
            if(!zuuluu) { _fun00004_ip = 335; continue _fun00003 }
 332:
            zuuluu = tangon;
 335:
            entity['appDMsUIVisible'] = zuuluu;
            entity['setAppDMsUIVisible'] = michal;
            return entity;
        }
    };
    zuuluu['useChatInputAppDMUIState'] = tangon;
    michal = function(argFoo) {
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            kiloes = entity.context;
            var _closure2_slot0 = kiloes;
            source = entity.chatInputRef;
            var _closure2_slot1 = source;
            michal = entity.setShowAppLaunchButton;
            var _closure2_slot2 = michal;
            entity = _closure1_slot12;
            tangon = undefined;
            offset = entity.bind(tangon)();
            zuuluu = _closure1_slot0;
            result = _closure1_slot2;
            entity = 16;
            entity = result[entity];
            report = zuuluu.bind(tangon)(entity);
            zuuluu = report.useClientThemesOverride;
            entity = offset.themedChatInput;
            romeon = zuuluu.bind(report)(entity);
            zuuluu = _closure1_slot1;
            entity = 17;
            entity = result[entity];
            report = zuuluu.bind(tangon)(entity);
            entity = {};
            entity['context'] = kiloes;
            report = report.bind(tangon)(entity);
            foxtra = report.application;
            var _closure2_slot3 = foxtra;
            entity = report.isInitialLoading;
            backup = report.primaryEntryPointCommand;
            output = report.isProfileFetching;
            sizing = report.wasProfileFetching;
            verify = report.applicationId;
            golfie = report.channelId;
            report = report.commands;
            update = _closure1_slot4;
            echoed = update.useCallback;
            option = new Array(4);
            option[0] = foxtra;
            option[1] = kiloes;
            option[2] = source;
            option[3] = michal;
            michal = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    michal = _closure2_slot3;
                    entity = null;
                    if(!(entity != michal)) { _fun00014_ip = 316; continue _fun00013 }
 18:
                    zuuluu = _closure1_slot7;
                    michal = _closure2_slot0;
                    option = _closure2_slot3;
                    entity = option.id;
                    golfie = undefined;
                    offset = zuuluu.bind(golfie)(michal, entity);
                    michal = _closure2_slot2;
                    entity = {};
                    zuuluu = false;
                    entity['visible'] = zuuluu;
                    entity = michal.bind(golfie)(entity);
                    entity = _closure2_slot1;
                    zuuluu = entity.current;
                    michal = zuuluu.openCustomKeyboard;
                    entity = {};
                    yankee = _closure1_slot0;
                    romeon = _closure1_slot2;
                    tangon = 18;
                    tangon = romeon[tangon];
                    tangon = yankee.bind(golfie)(tangon);
                    tangon = tangon.KeyboardTypes;
                    tangon = tangon.APP_LAUNCHER;
                    entity['type'] = tangon;
                    tangon = {};
                    yankee = _closure1_slot9;
                    yankee = yankee.APPLICATION_VIEW;
                    tangon['initialRouteName'] = yankee;
                    yankee = true;
                    tangon['initiallyExpanded'] = yankee;
                    tangon['application'] = option;
                    option = offset.isGuildInstalled;
                    option = !option;
                    if(!option) { _fun00014_ip = 166; continue _fun00013 }
 157:
                    offset = offset.isUserInstalled;
                    option = !offset;
 166:
                    tangon['installOnDemand'] = option;
                    option = function() { // Original name: onPressBack
                        zuuluu = _closure2_slot2;
                        michal = {};
                        entity = true;
                        michal['visible'] = entity;
                        entity = undefined;
                        michal = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    tangon['onPressBack'] = option;
                    oscard = function() { // Original name: onCommandExecuted
                        zuuluu = _closure2_slot2;
                        michal = {};
                        entity = true;
                        michal['visible'] = entity;
                        entity = undefined;
                        michal = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    tangon['onCommandExecuted'] = oscard;
                    entity['context'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
                    oscard = _closure1_slot0;
                    option = _closure1_slot2;
                    entity = 19;
                    entity = option[entity];
                    tangon = oscard.bind(golfie)(entity);
                    zuuluu = tangon.trackWithMetadata;
                    entity = _closure1_slot8;
                    michal = entity.APPLICATION_COMMAND_SECTION_SELECTED;
                    entity = {};
                    verify = _closure2_slot3;
                    verify = verify.id;
                    entity['application_id'] = verify;
                    verify = _closure1_slot1;
                    report = 20;
                    report = option[report];
                    report = verify.bind(golfie)(report);
                    report = report.APP_DMS_ENTRY_POINT_COMMAND_BUTTON;
                    entity['location'] = report;
                    report = 21;
                    report = option[report];
                    report = oscard.bind(golfie)(report);
                    report = report.AppLauncherEntrypoint;
                    report = report.TEXT;
                    entity['source'] = report;
                    entity = zuuluu.bind(tangon)(michal, entity);
 316:
                    entity = undefined;
                    return entity;
                }
            };
            option = echoed.bind(update)(michal, option);
            michal = 22;
            michal = result[michal];
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = {};
            michal['isProfileFetching'] = output;
            michal['wasProfileFetching'] = sizing;
            michal['applicationId'] = verify;
            michal['channelId'] = golfie;
            michal['commands'] = report;
            michal = zuuluu.bind(tangon)(michal);
            zuuluu = _closure1_slot11;
            michal = _closure1_slot5;
            if(entity) { _fun00012_ip = 511; continue _fun00011 }
 258:
            entity = null;
            if(!(entity != foxtra)) { _fun00012_ip = 511; continue _fun00011 }
 267:
            entity = {};
            report = offset.container;
            entity['style'] = report;
            verify = _closure1_slot10;
            golfie = _closure1_slot13;
            report = {};
            report['context'] = kiloes;
            report['primaryEntryPointCommand'] = backup;
            report['application'] = foxtra;
            report['onOpenButtonPress'] = option;
            golfie = verify.bind(tangon)(golfie, report);
            report = new Array(2);
            report[0] = golfie;
            option = _closure1_slot1;
            kiloes = _closure1_slot2;
            golfie = 23;
            golfie = kiloes[golfie];
            option = option.bind(tangon)(golfie);
            golfie = {};
            golfie['style'] = romeon;
            romeon = true;
            golfie['active'] = romeon;
            backup = _closure1_slot0;
            romeon = 24;
            romeon = kiloes[romeon];
            romeon = backup.bind(tangon)(romeon);
            romeon = romeon.ChatIcon;
            golfie['IconComponent'] = romeon;
            yankee = function() { // Original name: onPress
                zuuluu = _closure2_slot2;
                entity = undefined;
                michal = {'visible': false, 'willOpenSystemKeyboard': true};
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            golfie['onPress'] = yankee;
            yankee = 25;
            romeon = kiloes[yankee];
            romeon = backup.bind(tangon)(romeon);
            sizing = romeon.intl;
            foxtra = sizing.string;
            romeon = kiloes[yankee];
            romeon = backup.bind(tangon)(romeon);
            romeon = romeon.t;
            romeon = romeon.5/5xY2;
            romeon = foxtra.bind(sizing)(romeon);
            golfie['accessibilityLabel'] = romeon;
            romeon = kiloes[yankee];
            romeon = backup.bind(tangon)(romeon);
            foxtra = romeon.intl;
            romeon = foxtra.string;
            yankee = kiloes[yankee];
            yankee = backup.bind(tangon)(yankee);
            yankee = yankee.t;
            yankee = yankee.2d4+Vl;
            yankee = romeon.bind(foxtra)(yankee);
            golfie['accessibilityHint'] = yankee;
            golfie = verify.bind(tangon)(option, golfie);
            report[1] = golfie;
            entity['children'] = report;
            _fun00012_ip = 625; continue _fun00011;
 511:
            report = {};
            golfie = offset.container;
            report['style'] = golfie;
            verify = _closure1_slot10;
            option = _closure1_slot5;
            oscard = {};
            golfie = offset.loadingButton;
            oscard['style'] = golfie;
            golfie = verify.bind(tangon)(option, oscard);
            oscard = new Array(3);
            oscard[0] = golfie;
            golfie = {};
            romeon = offset.loadingLaunchButton;
            yankee = new Array(2);
            yankee[0] = romeon;
            romeon = offset.loadingButton;
            yankee[1] = romeon;
            golfie['style'] = yankee;
            golfie = verify.bind(tangon)(option, golfie);
            oscard[1] = golfie;
            golfie = {};
            offset = offset.loadingButton;
            golfie['style'] = offset;
            golfie = verify.bind(tangon)(option, golfie);
            oscard[2] = golfie;
            report['children'] = oscard;
            entity = report;
 625:
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['ChatInputAppDM'] = michal;
    return entity;
})();