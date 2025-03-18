// app/modules/app_launcher/native/screens/application_view/app/AppDetailContent.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    result = argBaz;
    verify = argCor;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = result;
    var _closure1_slot2 = verify;
    var _closure1_slot3 = golfie;
    entity = function(argFoo) { // Original name: PlaceholderCommandRow
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            oscard = entity.isFirstRow;
            tangon = undefined;
            if(!(oscard === tangon)) { _fun00002_ip = 17; continue _fun00001 }
 15:
            oscard = false;
 17:
            report = entity.isLastRow;
            if(!(report === tangon)) { _fun00002_ip = 29; continue _fun00001 }
 27:
            report = false;
 29:
            entity = _closure1_slot15;
            offset = entity.bind(tangon)();
            michal = _closure1_slot0;
            option = _closure1_slot3;
            entity = 10;
            zuuluu = option[entity];
            yankee = michal.bind(tangon)(zuuluu);
            verify = yankee.usePlaceholderWidth;
            zuuluu = 50;
            echoed = verify.bind(yankee)(entity, zuuluu);
            entity = option[entity];
            yankee = michal.bind(tangon)(entity);
            verify = yankee.usePlaceholderWidth;
            zuuluu = 30;
            entity = 90;
            kiloes = verify.bind(yankee)(zuuluu, entity);
            zuuluu = _closure1_slot12;
            entity = 11;
            entity = option[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.TableRow;
            entity = {};
            yankee = _closure1_slot12;
            verify = _closure1_slot5;
            option = {};
            romeon = offset.loadingTextPlaceholder;
            sizing = new Array(2);
            sizing[0] = romeon;
            output = {};
            romeon = global;
            foxtra = romeon.HermesInternal;
            result = foxtra.concat;
            backup = '';
            foxtra = '%';
            result = result.bind(backup)(echoed, foxtra);
            output['width'] = result;
            sizing[1] = output;
            option['style'] = sizing;
            option = yankee.bind(tangon)(verify, option);
            entity['label'] = option;
            verify = _closure1_slot12;
            option = _closure1_slot5;
            golfie = {};
            yankee = offset.loadingTextPlaceholderSmall;
            offset = new Array(2);
            offset[0] = yankee;
            yankee = {};
            romeon = romeon.HermesInternal;
            romeon = romeon.concat;
            romeon = romeon.bind(backup)(kiloes, foxtra);
            yankee['width'] = romeon;
            offset[1] = yankee;
            golfie['style'] = offset;
            golfie = verify.bind(tangon)(option, golfie);
            entity['subLabel'] = golfie;
            golfie = 1;
            entity['subLabelLineClamp'] = golfie;
            entity['start'] = oscard;
            entity['end'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    michal = function(argFoo) { // Original name: CommandRow
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            foxtra = entity.command;
            var _closure2_slot0 = foxtra;
            michal = entity.onPressCommand;
            var _closure2_slot1 = michal;
            kiloes = entity.isFirstRow;
            golfie = entity.isLastRow;
            romeon = entity.context;
            var _closure2_slot2 = romeon;
            verify = entity.onExecuteCommand;
            michal = entity.section;
            var _closure2_slot3 = michal;
            michal = entity.location;
            var _closure2_slot4 = michal;
            yankee = entity.installOnDemand;
            option = entity.sectionName;
            var _closure2_slot5 = option;
            oscard = entity.icon;
            michal = _closure1_slot0;
            backup = _closure1_slot3;
            entity = 12;
            entity = backup[entity];
            tangon = undefined;
            zuuluu = michal.bind(tangon)(entity);
            entity = zuuluu.useAppLauncherContext;
            entity = entity.bind(zuuluu)();
            entity = entity.entrypoint;
            var _closure2_slot6 = entity;
            entity = _closure1_slot7;
            zuuluu = true;
            entity = entity.bind(tangon)(zuuluu, zuuluu);
            entity = _closure1_slot6;
            entity = entity.bind(tangon)(romeon, zuuluu, zuuluu);
            zuuluu = _closure1_slot12;
            entity = 11;
            entity = backup[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.TableRow;
            entity = {};
            entity['start'] = kiloes;
            entity['end'] = golfie;
            golfie = foxtra.displayName;
            entity['label'] = golfie;
            golfie = 1;
            entity['labelLineClamp'] = golfie;
            kiloes = foxtra.displayDescription;
            entity['subLabel'] = kiloes;
            entity['subLabelLineClamp'] = golfie;
            entity['icon'] = oscard;
            oscard = function() { // Original name: onPress
                report = _closure2_slot1;
                tangon = _closure2_slot0;
                zuuluu = _closure2_slot3;
                michal = _closure2_slot4;
                entity = undefined;
                entity = report.bind(entity)(tangon, zuuluu, michal);
                return entity;
            };
            entity['onPress'] = oscard;
            golfie = _closure1_slot12;
            oscard = _closure1_slot1;
            report = 13;
            report = backup[report];
            oscard = oscard.bind(tangon)(report);
            report = {};
            report['command'] = foxtra;
            report['context'] = romeon;
            romeon = function() { // Original name: beforeExecuteCommand
                golfie = _closure1_slot0;
                option = _closure1_slot3;
                report = 14;
                entity = option[report];
                oscard = undefined;
                zuuluu = golfie.bind(oscard)(entity);
                michal = zuuluu.trackCommandSelected;
                entity = {};
                verify = _closure2_slot0;
                entity['command'] = verify;
                verify = _closure2_slot4;
                entity['location'] = verify;
                report = option[report];
                golfie = golfie.bind(oscard)(report);
                oscard = golfie.getCommandTriggerSection;
                report = _closure2_slot3;
                report = oscard.bind(golfie)(report);
                entity['triggerSection'] = report;
                tangon = _closure2_slot5;
                entity['sectionName'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            report['beforeExecuteCommand'] = romeon;
            report['onExecuteCommand'] = verify;
            verify = undefined;
            if(!yankee) { _fun00004_ip = 299; continue _fun00003 }
 292:
            verify = function(argFoo) {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot3;
                entity = 15;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.installApplicationOnDemandIfNeeded;
                michal = {};
                oscard = _closure2_slot0;
                oscard = oscard.applicationId;
                michal['applicationId'] = oscard;
                oscard = _closure2_slot2;
                oscard = oscard.channel;
                michal['channel'] = oscard;
                oscard = argFoo;
                michal['onSuccess'] = oscard;
                oscard = _closure2_slot5;
                michal['sectionName'] = oscard;
                oscard = _closure2_slot4;
                michal['location'] = oscard;
                report = _closure2_slot6;
                michal['entrypoint'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
 299:
            report['tryExecuteCommand'] = verify;
            report['sectionName'] = option;
            report = golfie.bind(tangon)(oscard, report);
            entity['trailing'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot19 = michal;
    report = global;
    yankee = report.Object;
    offset = yankee.defineProperty;
    option = {};
    entity = true;
    option['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zuuluu, entity, option);
    romeon = 0;
    option = golfie[romeon];
    entity = undefined;
    option = verify.bind(entity)(option);
    var _closure1_slot4 = option;
    yankee = 1;
    option = golfie[yankee];
    option = oscard.bind(entity)(option);
    option = option.View;
    var _closure1_slot5 = option;
    option = 2;
    option = golfie[option];
    option = oscard.bind(entity)(option);
    verify = option.useContextIndexState;
    var _closure1_slot6 = verify;
    option = option.useUserIndexState;
    var _closure1_slot7 = option;
    option = 3;
    option = golfie[option];
    option = oscard.bind(entity)(option);
    kiloes = option.DEFAULT_CONTENT_PADDING;
    var _closure1_slot8 = kiloes;
    sizing = option.SCREEN_BACKGROUND_COLOR;
    option = option.useAppLauncherNavigation;
    var _closure1_slot9 = option;
    option = 4;
    option = golfie[option];
    option = oscard.bind(entity)(option);
    option = option.AnalyticEvents;
    var _closure1_slot10 = option;
    option = 5;
    option = golfie[option];
    option = oscard.bind(entity)(option);
    option = option.DISCOVERY_COMMANDS_QUERY_LIMIT;
    var _closure1_slot11 = option;
    verify = 6;
    option = golfie[verify];
    option = oscard.bind(entity)(option);
    option = option.jsx;
    var _closure1_slot12 = option;
    option = golfie[verify];
    option = oscard.bind(entity)(option);
    option = option.jsxs;
    var _closure1_slot13 = option;
    option = golfie[verify];
    option = oscard.bind(entity)(option);
    option = option.Fragment;
    var _closure1_slot14 = option;
    option = 7;
    option = golfie[option];
    foxtra = oscard.bind(entity)(option);
    offset = foxtra.createStyles;
    option = {};
    backup = {};
    backup['backgroundColor'] = sizing;
    backup['flex'] = yankee;
    option['container'] = backup;
    backup = {};
    sizing = 8;
    output = golfie[sizing];
    output = oscard.bind(entity)(output);
    output = output.EXPANDED_HEADER_HEIGHT;
    sizing = golfie[sizing];
    sizing = oscard.bind(entity)(sizing);
    sizing = sizing.SHEET_HANDLE_CONTAINER_HEIGHT;
    sizing = output - sizing;
    backup['height'] = sizing;
    option['headerSpacer'] = backup;
    backup = {};
    backup['paddingHorizontal'] = kiloes;
    option['list'] = backup;
    kiloes = 'center';
    backup = {'flexDirection': 'row', 'justifyContent': 'space-between', 'alignItems': 'center', 'marginBottom': 8};
    option['commandsHeaderContainer'] = backup;
    backup = {'alignItems': 'center', 'flexDirection': 'row', 'gap': 8};
    option['commandsHeaderTextContainer'] = backup;
    backup = {};
    output = 9;
    sizing = golfie[output];
    sizing = result.bind(entity)(sizing);
    sizing = sizing.radii;
    sizing = sizing.lg;
    backup['borderRadius'] = sizing;
    option['viewContainerStyle'] = backup;
    backup = {'backgroundColor': null, 'paddingHorizontal': 12, 'paddingVertical': 16};
    sizing = golfie[output];
    sizing = result.bind(entity)(sizing);
    sizing = sizing.colors;
    sizing = sizing.CARD_PRIMARY_BG;
    backup['backgroundColor'] = sizing;
    echoed = 16;
    option['mainContainerStyle'] = backup;
    backup = {'right': 16, 'bottom': 16};
    option['expandDescriptionCTAStyle'] = backup;
    backup = {};
    sizing = golfie[output];
    sizing = result.bind(entity)(sizing);
    sizing = sizing.spacing;
    sizing = sizing.PX_4;
    backup['marginLeft'] = sizing;
    option['monetizationDisclosureTextStyle'] = backup;
    backup = {'flexDirection': 'row', 'alignItems': 'center'};
    sizing = golfie[output];
    sizing = result.bind(entity)(sizing);
    sizing = sizing.spacing;
    sizing = sizing.PX_24;
    backup['marginBottom'] = sizing;
    sizing = golfie[output];
    sizing = result.bind(entity)(sizing);
    sizing = sizing.spacing;
    sizing = sizing.PX_16;
    backup['gap'] = sizing;
    option['monetizationDisclosureContainerStyle'] = backup;
    backup = {'flexDirection': 'row', 'alignItems': 'center'};
    option['monetizationDisclosureStyle'] = backup;
    backup = {'backgroundColor': null, 'height': 16, 'marginBottom': 4, 'borderRadius': null, 'alignSelf': 'flex-start'};
    sizing = golfie[output];
    sizing = result.bind(entity)(sizing);
    sizing = sizing.colors;
    sizing = sizing.BG_MOD_SUBTLE;
    backup['backgroundColor'] = sizing;
    sizing = golfie[output];
    sizing = result.bind(entity)(sizing);
    sizing = sizing.radii;
    sizing = sizing.lg;
    backup['borderRadius'] = sizing;
    sizing = 'flex-start';
    option['loadingTextPlaceholder'] = backup;
    backup = {};
    update = golfie[output];
    update = result.bind(entity)(update);
    update = update.colors;
    update = update.BG_MOD_SUBTLE;
    backup['backgroundColor'] = update;
    backup['height'] = echoed;
    output = golfie[output];
    output = result.bind(entity)(output);
    output = output.radii;
    output = output.lg;
    backup['borderRadius'] = output;
    backup['alignSelf'] = sizing;
    option['loadingTextPlaceholderSmall'] = backup;
    backup = {};
    backup['alignItems'] = kiloes;
    option['noCommandsTextContainer'] = backup;
    option = offset.bind(foxtra)(option);
    var _closure1_slot15 = option;
    offset = {};
    offset['PLACEHOLDER'] = romeon;
    option = 'PLACEHOLDER';
    offset[romeon] = option;
    offset['COMMAND'] = yankee;
    option = 'COMMAND';
    offset[yankee] = option;
    var _closure1_slot16 = offset;
    report = report.Array;
    option = report.prototype;
    option = Object.create(option, {constructor: {value: report}});
    sequen = option;
    vacuum = verify;
    report = new sequen[report](vacuum, ctrled);
    verify = report instanceof Object ? report : option;
    option = verify.fill;
    report = {};
    offset = offset.PLACEHOLDER;
    report['type'] = offset;
    report = option.bind(verify)(report);
    var _closure1_slot17 = report;
    report = 40;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/app_launcher/native/screens/application_view/app/AppDetailContent.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function(argFoo) { // Original name: AppDetailContent
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            variable42 = michal.context;
            var _closure2_slot0 = variable42;
            foxtra = michal.application;
            var _closure2_slot1 = foxtra;
            yankee = michal.lockableScrollableContentOffsetY;
            romeon = michal.onPressBack;
            variable37 = michal.installOnDemand;
            var _closure2_slot2 = variable37;
            variable36 = michal.sectionName;
            var _closure2_slot3 = variable36;
            variable47 = michal.onActivityItemSelected;
            variable45 = michal.entrypoint;
            var _closure2_slot4 = variable45;
            entity = michal.onCommandExecuted;
            var _closure2_slot5 = entity;
            michal = michal.onAauth2Cancel;
            var _closure2_slot6 = michal;
            tangon = undefined;
            var _closure2_slot15 = tangon;
            var _closure2_slot16 = tangon;
            var _closure2_slot17 = tangon;
            var _closure2_slot18 = tangon;
            var _closure2_slot19 = tangon;
            var _closure2_slot20 = tangon;
            var _closure2_slot21 = tangon;
            michal = _closure1_slot15;
            whisks = michal.bind(tangon)();
            var _closure2_slot7 = whisks;
            option = _closure1_slot1;
            echoed = _closure1_slot3;
            michal = 17;
            michal = echoed[michal];
            michal = option.bind(tangon)(michal);
            michal = michal.bind(tangon)();
            michal = michal.bottom;
            sizing = _closure1_slot0;
            zuuluu = 12;
            zuuluu = echoed[zuuluu];
            report = sizing.bind(tangon)(zuuluu);
            zuuluu = report.useRequiredAppLauncherContext;
            zuuluu = zuuluu.bind(report)();
            output = zuuluu.chatInputRef;
            var _closure2_slot8 = output;
            backup = zuuluu.keyboardCloseReasonRef;
            var _closure2_slot9 = backup;
            zuuluu = 16;
            zuuluu = echoed[zuuluu];
            report = sizing.bind(tangon)(zuuluu);
            zuuluu = report.useFontScale;
            zuuluu = zuuluu.bind(report)();
            report = global;
            golfie = report.Math;
            report = golfie.max;
            quebec = 36;
            zuuluu = zuuluu * quebec;
            zuuluu = zuuluu - quebec;
            variable46 = 0;
            report = report.bind(golfie)(zuuluu, variable46);
            zuuluu = 60;
            result = zuuluu + report;
            report = _closure1_slot2;
            zuuluu = 18;
            zuuluu = echoed[zuuluu];
            golfie = report.bind(tangon)(zuuluu);
            report = golfie.useDiscovery;
            zuuluu = {};
            zuuluu['context'] = variable42;
            offset = {};
            kiloes = 19;
            kiloes = echoed[kiloes];
            kiloes = sizing.bind(tangon)(kiloes);
            kiloes = kiloes.ApplicationCommandType;
            sizing = kiloes.CHAT;
            kiloes = new Array(1);
            kiloes[0] = sizing;
            offset['commandTypes'] = kiloes;
            zuuluu['filters'] = offset;
            offset = {'placeholderCount': 0, 'limit': null, 'includeFrecency': true};
            kiloes = _closure1_slot11;
            offset['limit'] = kiloes;
            sizing = true;
            offset['allowApplicationState'] = variable37;
            offset['installOnDemand'] = variable37;
            kiloes = foxtra.id;
            offset['applicationId'] = kiloes;
            zuuluu['options'] = offset;
            zuuluu['allowFetch'] = sizing;
            report = report.bind(golfie)(zuuluu);
            zuuluu = report.filterSection;
            var _closure2_slot10 = zuuluu;
            offset = report.commandsByActiveSection;
            golfie = report.sectionDescriptors;
            var _closure2_slot11 = golfie;
            kiloes = report.loading;
            var _closure2_slot12 = kiloes;
            report = 20;
            report = echoed[report];
            option = option.bind(tangon)(report);
            report = {};
            echoed = foxtra.id;
            report['sectionId'] = echoed;
            report['commandsByActiveSection'] = offset;
            report = option.bind(tangon)(report);
            equals = report.sortOrder;
            option = report.setSortOrder;
            var _closure2_slot13 = option;
            variable41 = report.commands;
            var _closure2_slot14 = variable41;
            status = report.canSort;
            report = _closure1_slot7;
            report = report.bind(tangon)(sizing, sizing);
            option = report.result;
            config = null;
            offset = config == option;
            report = undefined;
            if(offset) { _fun00006_ip = 547; continue _fun00005 }
 532:
            offset = option.sections;
            option = foxtra.id;
            report = offset[option];
 547:
            report = config == report;
            record = !kiloes;
            if(!record) { _fun00006_ip = 566; continue _fun00005 }
 557:
            option = variable41.length;
            record = variable46 === option;
 566:
            offset = record;
            if(!offset) { _fun00006_ip = 575; continue _fun00005 }
 572:
            offset = report;
 575:
            if(!offset) { _fun00006_ip = 612; continue _fun00005 }
 578:
            option = _closure1_slot0;
            echoed = _closure1_slot3;
            report = 21;
            report = echoed[report];
            option = option.bind(tangon)(report);
            report = option.isEmbeddedApp;
            report = report.bind(option)(foxtra);
            offset = !report;
 612:
            report = _closure1_slot4;
            update = report.useMemo;
            echoed = new Array(2);
            echoed[0] = kiloes;
            echoed[1] = variable41;
            option = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    michal = _closure2_slot12;
                    if(michal) { _fun00008_ip = 35; continue _fun00007 }
 10:
                    zuuluu = _closure2_slot14;
                    michal = zuuluu.map;
                    entity = function(argFoo) {
                        entity = {};
                        michal = _closure1_slot16;
                        michal = michal.COMMAND;
                        entity['type'] = michal;
                        michal = argFoo;
                        entity['command'] = michal;
                        return entity;
                    };
                    entity = michal.bind(zuuluu)(entity);
                    _fun00008_ip = 42; continue _fun00007;
 35:
                    entity = _closure1_slot17;
 42:
                    return entity;
                }
            };
            echoed = update.bind(report)(option, echoed);
            update = report.useEffect;
            source = foxtra.id;
            option = new Array(2);
            option[0] = source;
            option[1] = zuuluu;
            zuuluu = function() {
                zuuluu = _closure2_slot10;
                entity = _closure2_slot1;
                michal = entity.id;
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            zuuluu = update.bind(report)(zuuluu, option);
            zuuluu = _closure1_slot9;
            zuuluu = zuuluu.bind(tangon)();
            _closure2_slot15 = zuuluu;
            update = report.useCallback;
            option = new Array(7);
            option[0] = variable42;
            option[1] = variable45;
            option[2] = variable37;
            option[3] = zuuluu;
            option[4] = entity;
            option[5] = golfie;
            option[6] = variable36;
            zuuluu = function(argFoo, argBar) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    report = arguments[2];
                    entity = undefined;
                    if(!(report === entity)) { _fun00010_ip = 44; continue _fun00009 }
 9:
                    zuuluu = _closure1_slot0;
                    tangon = _closure1_slot3;
                    michal = 22;
                    michal = tangon[michal];
                    michal = zuuluu.bind(entity)(michal);
                    michal = michal.ApplicationCommandTriggerLocations;
                    report = michal.APP_LAUNCHER_APPLICATION_VIEW;
 44:
                    zuuluu = _closure1_slot0;
                    tangon = _closure1_slot3;
                    michal = 23;
                    michal = tangon[michal];
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.handleApplicationCommandSelected;
                    michal = {};
                    michal['location'] = report;
                    oscard = _closure2_slot0;
                    oscard = oscard.channel;
                    michal['channel'] = oscard;
                    oscard = argFoo;
                    michal['command'] = oscard;
                    oscard = argBar;
                    michal['section'] = oscard;
                    oscard = _closure2_slot11;
                    michal['sectionDescriptors'] = oscard;
                    oscard = '';
                    michal['query'] = oscard;
                    oscard = _closure2_slot15;
                    michal['navigation'] = oscard;
                    oscard = _closure2_slot2;
                    michal['installOnDemand'] = oscard;
                    oscard = _closure2_slot3;
                    michal['sectionName'] = oscard;
                    oscard = _closure2_slot4;
                    michal['entrypoint'] = oscard;
                    report = _closure2_slot5;
                    michal['onCommandExecuted'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                }
            };
            variable40 = update.bind(report)(zuuluu, option);
            _closure2_slot16 = variable40;
            option = report.useCallback;
            zuuluu = new Array(3);
            zuuluu[0] = output;
            zuuluu[1] = backup;
            zuuluu[2] = entity;
            entity = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    entity = _closure2_slot8;
                    zuuluu = entity.current;
                    tangon = null;
                    if(!(tangon != zuuluu)) { _fun00012_ip = 28; continue _fun00011 }
 18:
                    entity = zuuluu.closeCustomKeyboard;
                    entity = entity.bind(zuuluu)();
 28:
                    report = _closure2_slot9;
                    oscard = _closure1_slot0;
                    zuuluu = _closure1_slot3;
                    entity = 12;
                    zuuluu = zuuluu[entity];
                    entity = undefined;
                    zuuluu = oscard.bind(entity)(zuuluu);
                    zuuluu = zuuluu.AppLauncherKeyboardCloseReason;
                    zuuluu = zuuluu.COMMAND;
                    report['current'] = zuuluu;
                    zuuluu = _closure2_slot5;
                    if(!(tangon != zuuluu)) { _fun00012_ip = 91; continue _fun00011 }
 83:
                    michal = _closure2_slot5;
                    michal = michal.bind(entity)();
 91:
                    return entity;
                }
            };
            variable38 = option.bind(report)(entity, zuuluu);
            _closure2_slot17 = variable38;
            zuuluu = golfie.find;
            entity = function(argFoo) {
                entity = argFoo;
                michal = entity.id;
                entity = _closure2_slot1;
                entity = entity.id;
                entity = michal === entity;
                return entity;
            };
            variable39 = zuuluu.bind(golfie)(entity);
            _closure2_slot18 = variable39;
            golfie = report.useCallback;
            zuuluu = new Array(7);
            zuuluu[0] = variable40;
            entity = variable41.length;
            zuuluu[1] = entity;
            zuuluu[2] = variable42;
            zuuluu[3] = variable38;
            zuuluu[4] = variable39;
            zuuluu[5] = variable37;
            zuuluu[6] = variable36;
            entity = function(argFoo) {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    entity = argFoo;
                    zuuluu = entity.item;
                    oscard = entity.index;
                    tangon = zuuluu.type;
                    entity = _closure1_slot16;
                    entity = entity.PLACEHOLDER;
                    if(!(tangon !== entity)) { _fun00014_ip = 220; continue _fun00013 }
 38:
                    report = zuuluu.type;
                    entity = _closure1_slot16;
                    tangon = entity.COMMAND;
                    entity = null;
                    if(!(report === tangon)) { _fun00014_ip = 218; continue _fun00013 }
 62:
                    golfie = _closure1_slot12;
                    report = _closure1_slot19;
                    tangon = {};
                    zuuluu = zuuluu.command;
                    tangon['command'] = zuuluu;
                    zuuluu = _closure2_slot16;
                    tangon['onPressCommand'] = zuuluu;
                    zuuluu = 0;
                    zuuluu = zuuluu === oscard;
                    tangon['isFirstRow'] = zuuluu;
                    zuuluu = _closure2_slot14;
                    verify = zuuluu.length;
                    zuuluu = 1;
                    zuuluu = verify - zuuluu;
                    zuuluu = oscard === zuuluu;
                    tangon['isLastRow'] = zuuluu;
                    zuuluu = _closure2_slot0;
                    tangon['context'] = zuuluu;
                    zuuluu = _closure2_slot17;
                    tangon['onExecuteCommand'] = zuuluu;
                    zuuluu = _closure2_slot18;
                    tangon['section'] = zuuluu;
                    offset = _closure1_slot0;
                    verify = _closure1_slot3;
                    zuuluu = 22;
                    verify = verify[zuuluu];
                    zuuluu = undefined;
                    verify = offset.bind(zuuluu)(verify);
                    verify = verify.ApplicationCommandTriggerLocations;
                    verify = verify.APP_LAUNCHER_APPLICATION_VIEW;
                    tangon['location'] = verify;
                    verify = _closure2_slot2;
                    tangon['installOnDemand'] = verify;
                    option = _closure2_slot3;
                    tangon['sectionName'] = option;
                    entity = golfie.bind(zuuluu)(report, tangon);
 218:
                    _fun00014_ip = 274; continue _fun00013;
 220:
                    report = _closure1_slot12;
                    tangon = _closure1_slot18;
                    zuuluu = {};
                    golfie = 0;
                    golfie = golfie === oscard;
                    zuuluu['isFirstRow'] = golfie;
                    michal = _closure1_slot17;
                    golfie = michal.length;
                    michal = 1;
                    michal = golfie - michal;
                    michal = oscard === michal;
                    zuuluu['isLastRow'] = michal;
                    michal = undefined;
                    entity = report.bind(michal)(tangon, zuuluu);
 274:
                    return entity;
                }
            };
            update = golfie.bind(report)(entity, zuuluu);
            entity = _closure1_slot8;
            michal = michal + entity;
            _closure2_slot19 = michal;
            option = _closure1_slot1;
            papara = _closure1_slot3;
            variable43 = 24;
            entity = papara[variable43];
            entity = option.bind(tangon)(entity);
            entity = entity.bind(tangon)();
            golfie = entity.width;
            _closure2_slot20 = golfie;
            target = _closure1_slot0;
            entity = 25;
            entity = papara[entity];
            zuuluu = target.bind(tangon)(entity);
            entity = zuuluu.useKeyboardActionSheetHeight;
            entity = entity.bind(zuuluu)();
            entity = entity.maximum;
            _closure2_slot21 = entity;
            output = report.useMemo;
            backup = new Array(4);
            backup[0] = foxtra;
            zuuluu = whisks.monetizationDisclosureContainerStyle;
            backup[1] = zuuluu;
            zuuluu = whisks.monetizationDisclosureStyle;
            backup[2] = zuuluu;
            zuuluu = whisks.monetizationDisclosureTextStyle;
            backup[3] = zuuluu;
            zuuluu = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    zuuluu = _closure1_slot0;
                    tangon = _closure1_slot3;
                    entity = 26;
                    entity = tangon[entity];
                    report = undefined;
                    zuuluu = zuuluu.bind(report)(entity);
                    entity = zuuluu.isAndroid;
                    tangon = entity.bind(zuuluu)();
                    if(!tangon) { _fun00016_ip = 75; continue _fun00015 }
 37:
                    zuuluu = _closure1_slot0;
                    oscard = _closure1_slot3;
                    entity = 21;
                    entity = oscard[entity];
                    oscard = zuuluu.bind(report)(entity);
                    zuuluu = oscard.isApplicationMonetizedWithIAP;
                    entity = _closure2_slot1;
                    tangon = zuuluu.bind(oscard)(entity);
 75:
                    zuuluu = _closure1_slot0;
                    oscard = _closure1_slot3;
                    entity = 21;
                    entity = oscard[entity];
                    golfie = zuuluu.bind(report)(entity);
                    zuuluu = golfie.isApplicationAdSupported;
                    entity = _closure2_slot1;
                    zuuluu = zuuluu.bind(golfie)(entity);
                    golfie = null;
                    if(!zuuluu) { _fun00016_ip = 323; continue _fun00015 }
 121:
                    offset = _closure1_slot13;
                    verify = _closure1_slot5;
                    option = {};
                    kiloes = _closure2_slot7;
                    yankee = kiloes.monetizationDisclosureStyle;
                    option['style'] = yankee;
                    foxtra = _closure1_slot12;
                    result = _closure1_slot0;
                    echoed = _closure1_slot3;
                    yankee = 27;
                    yankee = echoed[yankee];
                    yankee = result.bind(report)(yankee);
                    romeon = yankee.BillIcon;
                    yankee = {'size': 'sm', 'color': 'interactive-muted'};
                    romeon = foxtra.bind(report)(romeon, yankee);
                    yankee = new Array(2);
                    yankee[0] = romeon;
                    backup = _closure1_slot12;
                    romeon = 28;
                    romeon = echoed[romeon];
                    romeon = result.bind(report)(romeon);
                    foxtra = romeon.Text;
                    romeon = {'style': null, 'variant': 'text-xs/normal', 'color': 'text-secondary', 'lineClamp': 1};
                    kiloes = kiloes.monetizationDisclosureTextStyle;
                    romeon['style'] = kiloes;
                    kiloes = 29;
                    sizing = echoed[kiloes];
                    sizing = result.bind(report)(sizing);
                    output = sizing.intl;
                    sizing = output.string;
                    kiloes = echoed[kiloes];
                    kiloes = result.bind(report)(kiloes);
                    kiloes = kiloes.t;
                    kiloes = kiloes.5khEk5;
                    kiloes = sizing.bind(output)(kiloes);
                    romeon['children'] = kiloes;
                    romeon = backup.bind(report)(foxtra, romeon);
                    yankee[1] = romeon;
                    option['children'] = yankee;
                    golfie = offset.bind(report)(verify, option);
 323:
                    option = null;
                    if(!tangon) { _fun00016_ip = 533; continue _fun00015 }
 331:
                    yankee = _closure1_slot13;
                    offset = _closure1_slot5;
                    verify = {};
                    sizing = _closure2_slot7;
                    romeon = sizing.monetizationDisclosureStyle;
                    verify['style'] = romeon;
                    backup = _closure1_slot12;
                    echoed = _closure1_slot0;
                    update = _closure1_slot3;
                    romeon = 30;
                    romeon = update[romeon];
                    romeon = echoed.bind(report)(romeon);
                    foxtra = romeon.ShopIcon;
                    romeon = {'size': 'sm', 'color': 'interactive-muted'};
                    foxtra = backup.bind(report)(foxtra, romeon);
                    romeon = new Array(2);
                    romeon[0] = foxtra;
                    kiloes = _closure1_slot12;
                    foxtra = 28;
                    foxtra = update[foxtra];
                    foxtra = echoed.bind(report)(foxtra);
                    backup = foxtra.Text;
                    foxtra = {'style': null, 'variant': 'text-xs/normal', 'color': 'text-secondary', 'lineClamp': 1};
                    sizing = sizing.monetizationDisclosureTextStyle;
                    foxtra['style'] = sizing;
                    sizing = 29;
                    output = update[sizing];
                    output = echoed.bind(report)(output);
                    result = output.intl;
                    output = result.string;
                    sizing = update[sizing];
                    sizing = echoed.bind(report)(sizing);
                    sizing = sizing.t;
                    sizing = sizing.8z5B2d;
                    sizing = output.bind(result)(sizing);
                    foxtra['children'] = sizing;
                    foxtra = kiloes.bind(report)(backup, foxtra);
                    romeon[1] = foxtra;
                    verify['children'] = romeon;
                    option = yankee.bind(report)(offset, verify);
 533:
                    if(tangon) { _fun00016_ip = 541; continue _fun00015 }
 536:
                    entity = null;
                    if(!zuuluu) { _fun00016_ip = 587; continue _fun00015 }
 541:
                    tangon = _closure1_slot13;
                    zuuluu = _closure1_slot5;
                    michal = {};
                    oscard = _closure2_slot7;
                    oscard = oscard.monetizationDisclosureContainerStyle;
                    michal['style'] = oscard;
                    oscard = new Array(2);
                    oscard[0] = option;
                    oscard[1] = golfie;
                    michal['children'] = oscard;
                    entity = tangon.bind(report)(zuuluu, michal);
 587:
                    return entity;
                }
            };
            cntext = output.bind(report)(zuuluu, backup);
            output = report.useMemo;
            backup = new Array(2);
            backup[0] = michal;
            zuuluu = whisks.list;
            backup[1] = zuuluu;
            zuuluu = function() {
                entity = {};
                zuuluu = _closure2_slot7;
                tangon = zuuluu.list;
                report = entity;
                zuuluu = copyDataProperties(report, tangon);
                zuuluu = _closure2_slot19;
                michal = 'paddingBottom';
                entity[michal] = zuuluu;
                return entity;
            };
            ctrled = output.bind(report)(zuuluu, backup);
            backup = report.useMemo;
            zuuluu = new Array(1);
            zuuluu[0] = michal;
            michal = function() {
                entity = {};
                michal = _closure2_slot19;
                entity['bottom'] = michal;
                return entity;
            };
            source = backup.bind(report)(michal, zuuluu);
            zuuluu = report.useMemo;
            michal = new Array(2);
            michal[0] = golfie;
            michal[1] = entity;
            entity = function() {
                entity = {};
                zuuluu = _closure2_slot20;
                entity['width'] = zuuluu;
                michal = _closure2_slot21;
                entity['height'] = michal;
                return entity;
            };
            output = zuuluu.bind(report)(entity, michal);
            golfie = 31;
            entity = papara[golfie];
            michal = target.bind(tangon)(entity);
            entity = michal.useAppLauncherFlashListProps;
            report = entity.bind(michal)();
            zuuluu = _closure1_slot13;
            michal = _closure1_slot14;
            entity = {};
            backup = _closure1_slot12;
            golfie = papara[golfie];
            option = option.bind(tangon)(golfie);
            golfie = {};
            vacuum = {};
            limora = _closure1_slot12;
            sierra = _closure1_slot5;
            sequen = {};
            variable44 = whisks.headerSpacer;
            sequen['style'] = variable44;
            sierra = limora.bind(tangon)(sierra, sequen);
            sequen = new Array(7);
            sequen[0] = sierra;
            sierra = 21;
            papara = papara[sierra];
            target = target.bind(tangon)(papara);
            papara = target.isEmbeddedApp;
            papara = papara.bind(target)(foxtra);
            variable44 = _closure1_slot12;
            limora = _closure1_slot1;
            variable48 = _closure1_slot3;
            if(papara) { _fun00006_ip = 1270; continue _fun00005 }
 1211:
            papara = 33;
            papara = variable48[papara];
            target = limora.bind(tangon)(papara);
            papara = {};
            papara['application'] = foxtra;
            variable49 = whisks.viewContainerStyle;
            papara['viewContainerStyle'] = variable49;
            variable49 = whisks.mainContainerStyle;
            papara['mainContainerStyle'] = variable49;
            variable49 = whisks.expandDescriptionCTAStyle;
            papara['expandDescriptionCTAStyle'] = variable49;
            papara = variable44.bind(tangon)(target, papara);
            _fun00006_ip = 1327; continue _fun00005;
 1270:
            target = 32;
            target = variable48[target];
            limora = limora.bind(tangon)(target);
            target = {};
            target['application'] = foxtra;
            target['context'] = variable42;
            target['sectionName'] = variable36;
            target['onActivityItemSelected'] = variable47;
            target['entrypoint'] = variable45;
            variable45 = variable41.length;
            variable45 = variable45 > variable46;
            target['hasCommands'] = variable45;
            papara = variable44.bind(tangon)(limora, target);
 1327:
            sequen[1] = papara;
            limora = _closure1_slot12;
            target = _closure1_slot1;
            variable44 = _closure1_slot3;
            papara = 34;
            papara = variable44[papara];
            target = target.bind(tangon)(papara);
            papara = {};
            variable44 = config == cntext;
            if(variable44) { _fun00006_ip = 1394; continue _fun00005 }
 1364:
            variable45 = _closure1_slot1;
            variable46 = _closure1_slot3;
            variable44 = 9;
            variable44 = variable46[variable44];
            variable44 = variable45.bind(tangon)(variable44);
            variable44 = variable44.spacing;
            variable43 = variable44.PX_16;
 1394:
            papara['size'] = variable43;
            papara = limora.bind(tangon)(target, papara);
            sequen[2] = papara;
            sequen[3] = cntext;
            papara = variable41.length;
            cntext = 1;
            cntext = papara > cntext;
            if(!cntext) { _fun00006_ip = 1430; continue _fun00005 }
 1427:
            cntext = !kiloes;
 1430:
            if(!cntext) { _fun00006_ip = 1498; continue _fun00005 }
 1433:
            limora = _closure1_slot12;
            target = _closure1_slot1;
            variable43 = _closure1_slot3;
            papara = 35;
            papara = variable43[papara];
            target = target.bind(tangon)(papara);
            papara = {};
            papara['context'] = variable42;
            papara['allCommands'] = variable41;
            papara['onPressCommand'] = variable40;
            papara['section'] = variable39;
            papara['onExecuteCommand'] = variable38;
            papara['installOnDemand'] = variable37;
            papara['sectionName'] = variable36;
            cntext = limora.bind(tangon)(target, papara);
 1498:
            sequen[4] = cntext;
            cntext = null;
            if(!record) { _fun00006_ip = 1678; continue _fun00005 }
 1510:
            target = _closure1_slot0;
            papara = _closure1_slot3;
            papara = papara[sierra];
            target = target.bind(tangon)(papara);
            papara = target.isEmbeddedApp;
            papara = papara.bind(target)(foxtra);
            cntext = null;
            if(papara) { _fun00006_ip = 1678; continue _fun00005 }
 1546:
            sierra = _closure1_slot12;
            target = _closure1_slot5;
            papara = {};
            limora = whisks.noCommandsTextContainer;
            papara['style'] = limora;
            variable37 = _closure1_slot12;
            variable41 = _closure1_slot0;
            variable42 = _closure1_slot3;
            limora = 28;
            limora = variable42[limora];
            limora = variable41.bind(tangon)(limora);
            variable36 = limora.Text;
            limora = {'variant': 'text-sm/normal', 'color': 'header-secondary'};
            variable38 = 29;
            variable39 = variable42[variable38];
            variable39 = variable41.bind(tangon)(variable39);
            variable40 = variable39.intl;
            variable39 = variable40.string;
            variable38 = variable42[variable38];
            variable38 = variable41.bind(tangon)(variable38);
            variable38 = variable38.t;
            variable38 = variable38.w8+YDA;
            variable38 = variable39.bind(variable40)(variable38);
            limora['children'] = variable38;
            limora = variable37.bind(tangon)(variable36, limora);
            papara['children'] = limora;
            cntext = sierra.bind(tangon)(target, papara);
 1678:
            sequen[5] = cntext;
            config = null;
            if(record) { _fun00006_ip = 1913; continue _fun00005 }
 1690:
            papara = _closure1_slot13;
            cntext = _closure1_slot5;
            record = {};
            target = whisks.commandsHeaderContainer;
            record['style'] = target;
            limora = _closure1_slot12;
            sierra = _closure1_slot5;
            target = {};
            whisks = whisks.commandsHeaderTextContainer;
            target['style'] = whisks;
            variable37 = _closure1_slot12;
            variable41 = _closure1_slot0;
            variable42 = _closure1_slot3;
            whisks = 28;
            whisks = variable42[whisks];
            whisks = variable41.bind(tangon)(whisks);
            variable36 = whisks.Text;
            whisks = {'variant': 'text-md/medium', 'color': 'text-normal'};
            variable38 = 29;
            variable39 = variable42[variable38];
            variable39 = variable41.bind(tangon)(variable39);
            variable40 = variable39.intl;
            variable39 = variable40.string;
            variable38 = variable42[variable38];
            variable38 = variable41.bind(tangon)(variable38);
            variable38 = variable38.t;
            variable38 = variable38.GOXqkp;
            variable38 = variable39.bind(variable40)(variable38);
            whisks['children'] = variable38;
            whisks = variable37.bind(tangon)(variable36, whisks);
            target['children'] = whisks;
            sierra = limora.bind(tangon)(sierra, target);
            target = new Array(2);
            target[0] = sierra;
            if(!status) { _fun00006_ip = 1899; continue _fun00005 }
 1853:
            whisks = _closure1_slot12;
            limora = _closure1_slot1;
            sierra = _closure1_slot3;
            sierra = sierra[quebec];
            limora = limora.bind(tangon)(sierra);
            sierra = {};
            sierra['sortOrder'] = equals;
            equals = function(argFoo) { // Original name: onSortOptionPress
                zuuluu = _closure2_slot13;
                entity = undefined;
                michal = argFoo;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            sierra['onSortOptionPress'] = equals;
            status = whisks.bind(tangon)(limora, sierra);
 1899:
            target[1] = status;
            record['children'] = target;
            config = papara.bind(tangon)(cntext, record);
 1913:
            sequen[6] = config;
            vacuum['children'] = sequen;
            vacuum = zuuluu.bind(tangon)(michal, vacuum);
            golfie['ListHeaderComponent'] = vacuum;
            golfie['contentContainerStyle'] = ctrled;
            golfie['scrollIndicatorInsets'] = source;
            golfie['renderItem'] = update;
            golfie['data'] = echoed;
            golfie['estimatedItemSize'] = result;
            golfie['estimatedListSize'] = output;
            golfie['preserveScrollMomentum'] = sizing;
            golfie['lockableScrollableContentOffsetY'] = yankee;
            sizing = false;
            golfie['automaticallyAdjustsScrollIndicatorInsets'] = sizing;
            sizing = 'none';
            golfie['keyboardDismissMode'] = sizing;
            sizing = report.onScroll;
            golfie['animatedOnScroll'] = sizing;
            sizing = report.scrollerRef;
            golfie['ref'] = sizing;
            sizing = report.gestureRef;
            golfie['simultaneousHandlers'] = sizing;
            report = report.animatedProps;
            golfie['animatedProps'] = report;
            report = undefined;
            if(!kiloes) { _fun00006_ip = 2039; continue _fun00005 }
 2035:
            report = 'loading';
 2039:
            golfie = backup.bind(tangon)(option, golfie, report);
            report = new Array(2);
            report[0] = golfie;
            option = _closure1_slot12;
            golfie = _closure1_slot1;
            backup = _closure1_slot3;
            oscard = 8;
            oscard = backup[oscard];
            golfie = golfie.bind(tangon)(oscard);
            oscard = {};
            oscard['application'] = foxtra;
            oscard['onPressBack'] = romeon;
            oscard['scrollOffsetY'] = yankee;
            oscard['showsAddCTA'] = offset;
            verify = function(argFoo) { // Original name: onAddAppMenuClick
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    entity = argFoo;
                    oscard = entity.installAppProps;
                    entity = undefined;
                    var _closure3_slot0 = entity;
                    tangon = _closure1_slot1;
                    verify = _closure1_slot3;
                    zuuluu = 37;
                    zuuluu = verify[zuuluu];
                    tangon = tangon.bind(entity)(zuuluu);
                    zuuluu = tangon.hideActionSheet;
                    zuuluu = zuuluu.bind(tangon)();
                    golfie = _closure2_slot9;
                    option = _closure1_slot0;
                    tangon = 12;
                    tangon = verify[tangon];
                    tangon = option.bind(entity)(tangon);
                    tangon = tangon.AppLauncherKeyboardCloseReason;
                    tangon = tangon.OAUTH_MODAL;
                    golfie['current'] = tangon;
                    tangon = _closure2_slot8;
                    option = tangon.current;
                    tangon = null;
                    if(!(tangon != option)) { _fun00018_ip = 116; continue _fun00017 }
 106:
                    golfie = option.closeCustomKeyboard;
                    golfie = golfie.bind(option)();
 116:
                    option = {};
                    verify = _closure1_slot0;
                    offset = _closure1_slot3;
                    golfie = 22;
                    golfie = offset[golfie];
                    golfie = verify.bind(entity)(golfie);
                    golfie = golfie.ApplicationCommandTriggerLocations;
                    golfie = golfie.APP_LAUNCHER_APPLICATION_VIEW_MORE_MENU;
                    option['location'] = golfie;
                    golfie = _closure2_slot1;
                    golfie = golfie.id;
                    option['application_id'] = golfie;
                    golfie = _closure2_slot3;
                    option['section_name'] = golfie;
                    zuuluu = _closure2_slot4;
                    option['source'] = zuuluu;
                    _closure3_slot0 = option;
                    zuuluu = oscard.customInstallUrl;
                    if(!(tangon == zuuluu)) { _fun00018_ip = 241; continue _fun00017 }
 199:
                    tangon = _closure1_slot0;
                    golfie = _closure1_slot3;
                    zuuluu = 38;
                    zuuluu = golfie[zuuluu];
                    golfie = tangon.bind(entity)(zuuluu);
                    tangon = golfie.trackWithMetadata;
                    zuuluu = _closure1_slot10;
                    zuuluu = zuuluu.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED;
                    zuuluu = tangon.bind(golfie)(zuuluu, option);
 241:
                    zuuluu = _closure1_slot0;
                    tangon = _closure1_slot3;
                    michal = 39;
                    michal = tangon[michal];
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.installApplication;
                    michal = {};
                    romeon = michal;
                    yankee = oscard;
                    oscard = copyDataProperties(romeon, yankee);
                    golfie = 'app_launcher_app_details';
                    oscard = 'source';
                    michal[oscard] = golfie;
                    oscard = function(argFoo) { // Original name: oauth2Callback
                        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                            entity = argFoo;
                            michal = entity.canceled;
                            entity = entity.location;
                            zuuluu = null;
                            if(michal) { _fun00020_ip = 79; continue _fun00019 }
 19:
                            if(!(zuuluu != entity)) { _fun00020_ip = 100; continue _fun00019 }
 23:
                            report = _closure1_slot0;
                            tangon = _closure1_slot3;
                            michal = 38;
                            tangon = tangon[michal];
                            michal = undefined;
                            report = report.bind(michal)(tangon);
                            tangon = report.trackWithMetadata;
                            entity = _closure1_slot10;
                            michal = entity.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED;
                            entity = _closure3_slot0;
                            entity = tangon.bind(report)(michal, entity);
                            _fun00020_ip = 100; continue _fun00019;
 79:
                            michal = _closure2_slot6;
                            if(!(zuuluu != michal)) { _fun00020_ip = 100; continue _fun00019 }
 90:
                            michal = _closure2_slot6;
                            entity = undefined;
                            entity = michal.bind(entity)();
 100:
                            entity = undefined;
                            return entity;
                        }
                    };
                    report = 'oauth2Callback';
                    michal[report] = oscard;
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                }
            };
            oscard['onAddAppMenuClick'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    tangon = 24;
    zuuluu['BETWEEN_SECTIONS_MARGIN'] = tangon;
    zuuluu['CommandRow'] = michal;
    return entity;
})();