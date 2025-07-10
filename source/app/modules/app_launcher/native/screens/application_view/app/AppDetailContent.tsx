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
            entity = _closure1_slot16;
            offset = entity.bind(tangon)();
            michal = _closure1_slot0;
            option = _closure1_slot3;
            entity = 11;
            zuuluu = option[entity];
            romeon = michal.bind(tangon)(zuuluu);
            yankee = romeon.usePlaceholderWidth;
            verify = 10;
            zuuluu = 50;
            echoed = yankee.bind(romeon)(verify, zuuluu);
            entity = option[entity];
            yankee = michal.bind(tangon)(entity);
            verify = yankee.usePlaceholderWidth;
            zuuluu = 30;
            entity = 90;
            kiloes = verify.bind(yankee)(zuuluu, entity);
            zuuluu = _closure1_slot13;
            entity = 12;
            entity = option[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.TableRow;
            entity = {};
            yankee = _closure1_slot13;
            verify = _closure1_slot6;
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
            verify = _closure1_slot13;
            option = _closure1_slot6;
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
    var _closure1_slot19 = entity;
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
            entity = 13;
            entity = backup[entity];
            tangon = undefined;
            zuuluu = michal.bind(tangon)(entity);
            entity = zuuluu.useAppLauncherContext;
            entity = entity.bind(zuuluu)();
            entity = entity.entrypoint;
            var _closure2_slot6 = entity;
            entity = _closure1_slot8;
            zuuluu = true;
            entity = entity.bind(tangon)(zuuluu, zuuluu);
            entity = _closure1_slot7;
            entity = entity.bind(tangon)(romeon, zuuluu, zuuluu);
            zuuluu = _closure1_slot13;
            entity = 12;
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
            golfie = _closure1_slot13;
            oscard = _closure1_slot1;
            report = 14;
            report = backup[report];
            oscard = oscard.bind(tangon)(report);
            report = {};
            report['command'] = foxtra;
            report['context'] = romeon;
            romeon = function() { // Original name: beforeExecuteCommand
                golfie = _closure1_slot0;
                option = _closure1_slot3;
                report = 15;
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
            if(!yankee) { _fun00004_ip = 303; continue _fun00003 }
 292:
            offset = function() {
                tangon = _closure1_slot4;
                zuuluu = undefined;
                michal = function* (argFoo) {
                    entity = function* (argFoo) { // Original name: ?anon_0_
                        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(michal) { _fun00006_ip = 176; continue _fun00005 }
 10:
                            tangon = _closure1_slot0;
                            zuuluu = _closure1_slot3;
                            michal = 16;
                            michal = zuuluu[michal];
                            zuuluu = undefined;
                            report = tangon.bind(zuuluu)(michal);
                            tangon = report.installApplicationOnDemandIfNeeded;
                            michal = {};
                            oscard = _closure2_slot0;
                            oscard = oscard.applicationId;
                            michal['applicationId'] = oscard;
                            oscard = _closure2_slot2;
                            verify = oscard.type;
                            option = 'channel';
                            oscard = undefined;
                            if(!(option === verify)) { _fun00006_ip = 87; continue _fun00005 }
 78:
                            option = _closure2_slot2;
                            oscard = option.channel;
 87:
                            michal['channel'] = oscard;
                            oscard = _closure2_slot0;
                            oscard = oscard.integration_types;
                            michal['commandIntegrationTypes'] = oscard;
                            oscard = {};
                            option = _closure2_slot6;
                            oscard['entrypoint'] = option;
                            option = _closure2_slot4;
                            oscard['location'] = option;
                            golfie = _closure2_slot5;
                            oscard['sectionName'] = golfie;
                            michal['appLauncherContext'] = oscard;
                            michal = tangon.bind(report)(michal);
                            SaveGenerator(address=148);
 146:
                            return michal;
 148:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(tangon) { _fun00006_ip = 173; continue _fun00005 }
 154:
                            tangon = michal.isAuthorized;
                            if(!tangon) { _fun00006_ip = 170; continue _fun00005 }
 163:
                            tangon = argFoo;
                            tangon = tangon.bind(zuuluu)();
 170:
                            return zuuluu;
 173:
                            return michal;
 176:
                            return entity;
                        }
                    };
                    return entity;
                };
                michal = tangon.bind(zuuluu)(michal);
                var _closure3_slot0 = michal;
                entity = function() {
                    entity = undefined;
                    tangon = _closure3_slot0;
                    zuuluu = tangon.apply;
                    entity = arguments;
                    michal = entity;
                    entity = this;
                    entity = zuuluu.bind(tangon)(entity, michal);
                    return entity;
                };
                return entity;
            };
            verify = offset.bind(tangon)();
 303:
            report['tryExecuteCommand'] = verify;
            report['sectionName'] = option;
            report = golfie.bind(tangon)(oscard, report);
            entity['trailing'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot20 = michal;
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
    option = result.bind(entity)(option);
    var _closure1_slot4 = option;
    yankee = 1;
    option = golfie[yankee];
    option = verify.bind(entity)(option);
    var _closure1_slot5 = option;
    option = 2;
    option = golfie[option];
    option = oscard.bind(entity)(option);
    option = option.View;
    var _closure1_slot6 = option;
    option = 3;
    option = golfie[option];
    option = oscard.bind(entity)(option);
    verify = option.useContextIndexState;
    var _closure1_slot7 = verify;
    option = option.useUserIndexState;
    var _closure1_slot8 = option;
    option = 4;
    option = golfie[option];
    option = oscard.bind(entity)(option);
    kiloes = option.DEFAULT_CONTENT_PADDING;
    var _closure1_slot9 = kiloes;
    sizing = option.SCREEN_BACKGROUND_COLOR;
    option = option.useAppLauncherNavigation;
    var _closure1_slot10 = option;
    option = 5;
    option = golfie[option];
    option = oscard.bind(entity)(option);
    option = option.AnalyticEvents;
    var _closure1_slot11 = option;
    verify = 6;
    option = golfie[verify];
    option = oscard.bind(entity)(option);
    option = option.DISCOVERY_COMMANDS_QUERY_LIMIT;
    var _closure1_slot12 = option;
    option = 7;
    option = golfie[option];
    option = oscard.bind(entity)(option);
    offset = option.jsx;
    var _closure1_slot13 = offset;
    offset = option.jsxs;
    var _closure1_slot14 = offset;
    option = option.Fragment;
    var _closure1_slot15 = option;
    option = 8;
    option = golfie[option];
    foxtra = oscard.bind(entity)(option);
    offset = foxtra.createStyles;
    option = {};
    backup = {};
    backup['backgroundColor'] = sizing;
    backup['flex'] = yankee;
    option['container'] = backup;
    backup = {};
    sizing = 9;
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
    output = 10;
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
    var _closure1_slot16 = option;
    offset = {};
    offset['PLACEHOLDER'] = romeon;
    option = 'PLACEHOLDER';
    offset[romeon] = option;
    offset['COMMAND'] = yankee;
    option = 'COMMAND';
    offset[yankee] = option;
    var _closure1_slot17 = offset;
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
    var _closure1_slot18 = report;
    report = 41;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/app_launcher/native/screens/application_view/app/AppDetailContent.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function(argFoo) { // Original name: AppDetailContent
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = argFoo;
            record = michal.context;
            var _closure2_slot0 = record;
            foxtra = michal.application;
            var _closure2_slot1 = foxtra;
            yankee = michal.lockableScrollableContentOffsetY;
            romeon = michal.onPressBack;
            variable37 = michal.installOnDemand;
            var _closure2_slot2 = variable37;
            variable36 = michal.sectionName;
            var _closure2_slot3 = variable36;
            variable46 = michal.onActivityItemSelected;
            variable44 = michal.entrypoint;
            var _closure2_slot4 = variable44;
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
            michal = _closure1_slot16;
            whisks = michal.bind(tangon)();
            var _closure2_slot7 = whisks;
            option = _closure1_slot1;
            echoed = _closure1_slot3;
            michal = 18;
            michal = echoed[michal];
            michal = option.bind(tangon)(michal);
            michal = michal.bind(tangon)();
            michal = michal.bottom;
            sizing = _closure1_slot0;
            zuuluu = 13;
            zuuluu = echoed[zuuluu];
            report = sizing.bind(tangon)(zuuluu);
            zuuluu = report.useRequiredAppLauncherContext;
            zuuluu = zuuluu.bind(report)();
            output = zuuluu.chatInputRef;
            var _closure2_slot8 = output;
            backup = zuuluu.keyboardCloseReasonRef;
            var _closure2_slot9 = backup;
            zuuluu = 17;
            zuuluu = echoed[zuuluu];
            report = sizing.bind(tangon)(zuuluu);
            zuuluu = report.useFontScale;
            zuuluu = zuuluu.bind(report)();
            report = global;
            golfie = report.Math;
            report = golfie.max;
            variable42 = 36;
            zuuluu = variable42 * zuuluu;
            zuuluu = zuuluu - variable42;
            variable45 = 0;
            report = report.bind(golfie)(zuuluu, variable45);
            zuuluu = 60;
            result = zuuluu + report;
            report = _closure1_slot2;
            zuuluu = 19;
            zuuluu = echoed[zuuluu];
            golfie = report.bind(tangon)(zuuluu);
            report = golfie.useDiscovery;
            zuuluu = {};
            zuuluu['context'] = record;
            offset = {};
            kiloes = 20;
            kiloes = echoed[kiloes];
            kiloes = sizing.bind(tangon)(kiloes);
            kiloes = kiloes.ApplicationCommandType;
            sizing = kiloes.CHAT;
            kiloes = new Array(1);
            kiloes[0] = sizing;
            offset['commandTypes'] = kiloes;
            zuuluu['filters'] = offset;
            offset = {'placeholderCount': 0, 'limit': null, 'includeFrecency': true};
            kiloes = _closure1_slot12;
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
            report = 21;
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
            report = _closure1_slot8;
            report = report.bind(tangon)(sizing, sizing);
            option = report.result;
            papara = null;
            offset = papara == option;
            report = undefined;
            if(offset) { _fun00008_ip = 547; continue _fun00007 }
 532:
            offset = option.sections;
            option = foxtra.id;
            report = offset[option];
 547:
            report = papara == report;
            cntext = !kiloes;
            if(!cntext) { _fun00008_ip = 566; continue _fun00007 }
 557:
            option = variable41.length;
            cntext = variable45 === option;
 566:
            offset = cntext;
            if(!offset) { _fun00008_ip = 575; continue _fun00007 }
 572:
            offset = report;
 575:
            if(!offset) { _fun00008_ip = 612; continue _fun00007 }
 578:
            option = _closure1_slot0;
            echoed = _closure1_slot3;
            report = 22;
            report = echoed[report];
            option = option.bind(tangon)(report);
            report = option.isEmbeddedApp;
            report = report.bind(option)(foxtra);
            offset = !report;
 612:
            report = _closure1_slot5;
            update = report.useMemo;
            echoed = new Array(3);
            echoed[0] = kiloes;
            echoed[1] = variable41;
            option = record.type;
            echoed[2] = option;
            option = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    michal = _closure2_slot0;
                    zuuluu = michal.type;
                    michal = 'channel';
                    if(!(michal === zuuluu)) { _fun00010_ip = 61; continue _fun00009 }
 20:
                    michal = _closure2_slot12;
                    if(michal) { _fun00010_ip = 52; continue _fun00009 }
 27:
                    zuuluu = _closure2_slot14;
                    michal = zuuluu.map;
                    entity = function(argFoo) {
                        entity = {};
                        michal = _closure1_slot17;
                        michal = michal.COMMAND;
                        entity['type'] = michal;
                        michal = argFoo;
                        entity['command'] = michal;
                        return entity;
                    };
                    entity = michal.bind(zuuluu)(entity);
                    _fun00010_ip = 59; continue _fun00009;
 52:
                    entity = _closure1_slot18;
 59:
                    _fun00010_ip = 65; continue _fun00009;
 61:
                    entity = new Array(0);
 65:
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
            zuuluu = _closure1_slot10;
            zuuluu = zuuluu.bind(tangon)();
            _closure2_slot15 = zuuluu;
            update = report.useCallback;
            option = new Array(7);
            option[0] = record;
            option[1] = variable44;
            option[2] = variable37;
            option[3] = zuuluu;
            option[4] = entity;
            option[5] = golfie;
            option[6] = variable36;
            zuuluu = function(argFoo, argBar) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    report = arguments[2];
                    entity = undefined;
                    if(!(report === entity)) { _fun00012_ip = 44; continue _fun00011 }
 9:
                    zuuluu = _closure1_slot0;
                    tangon = _closure1_slot3;
                    michal = 23;
                    michal = tangon[michal];
                    michal = zuuluu.bind(entity)(michal);
                    michal = michal.ApplicationCommandTriggerLocations;
                    report = michal.APP_LAUNCHER_APPLICATION_VIEW;
 44:
                    zuuluu = _closure1_slot0;
                    tangon = _closure1_slot3;
                    michal = 24;
                    michal = tangon[michal];
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.handleApplicationCommandSelected;
                    michal = {};
                    michal['location'] = report;
                    oscard = _closure2_slot0;
                    michal['context'] = oscard;
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
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    entity = _closure2_slot8;
                    zuuluu = entity.current;
                    tangon = null;
                    if(!(tangon != zuuluu)) { _fun00014_ip = 28; continue _fun00013 }
 18:
                    entity = zuuluu.closeCustomKeyboard;
                    entity = entity.bind(zuuluu)();
 28:
                    report = _closure2_slot9;
                    oscard = _closure1_slot0;
                    zuuluu = _closure1_slot3;
                    entity = 13;
                    zuuluu = zuuluu[entity];
                    entity = undefined;
                    zuuluu = oscard.bind(entity)(zuuluu);
                    zuuluu = zuuluu.AppLauncherKeyboardCloseReason;
                    zuuluu = zuuluu.COMMAND;
                    report['current'] = zuuluu;
                    zuuluu = _closure2_slot5;
                    if(!(tangon != zuuluu)) { _fun00014_ip = 91; continue _fun00013 }
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
            zuuluu[2] = record;
            zuuluu[3] = variable38;
            zuuluu[4] = variable39;
            zuuluu[5] = variable37;
            zuuluu[6] = variable36;
            entity = function(argFoo) {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    entity = argFoo;
                    zuuluu = entity.item;
                    oscard = entity.index;
                    tangon = zuuluu.type;
                    entity = _closure1_slot17;
                    entity = entity.PLACEHOLDER;
                    if(!(tangon !== entity)) { _fun00016_ip = 220; continue _fun00015 }
 38:
                    report = zuuluu.type;
                    entity = _closure1_slot17;
                    tangon = entity.COMMAND;
                    entity = null;
                    if(!(report === tangon)) { _fun00016_ip = 218; continue _fun00015 }
 62:
                    golfie = _closure1_slot13;
                    report = _closure1_slot20;
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
                    zuuluu = 23;
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
                    _fun00016_ip = 274; continue _fun00015;
 220:
                    report = _closure1_slot13;
                    tangon = _closure1_slot19;
                    zuuluu = {};
                    golfie = 0;
                    golfie = golfie === oscard;
                    zuuluu['isFirstRow'] = golfie;
                    michal = _closure1_slot18;
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
            entity = _closure1_slot9;
            michal = michal + entity;
            _closure2_slot19 = michal;
            option = _closure1_slot1;
            target = _closure1_slot3;
            entity = 25;
            entity = target[entity];
            entity = option.bind(tangon)(entity);
            entity = entity.bind(tangon)();
            golfie = entity.width;
            _closure2_slot20 = golfie;
            entity = 26;
            entity = target[entity];
            entity = option.bind(tangon)(entity);
            entity = entity.bind(tangon)();
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
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    zuuluu = _closure1_slot0;
                    tangon = _closure1_slot3;
                    entity = 27;
                    entity = tangon[entity];
                    report = undefined;
                    zuuluu = zuuluu.bind(report)(entity);
                    entity = zuuluu.isAndroid;
                    tangon = entity.bind(zuuluu)();
                    if(!tangon) { _fun00018_ip = 75; continue _fun00017 }
 37:
                    zuuluu = _closure1_slot0;
                    oscard = _closure1_slot3;
                    entity = 22;
                    entity = oscard[entity];
                    oscard = zuuluu.bind(report)(entity);
                    zuuluu = oscard.isApplicationMonetizedWithIAP;
                    entity = _closure2_slot1;
                    tangon = zuuluu.bind(oscard)(entity);
 75:
                    zuuluu = _closure1_slot0;
                    oscard = _closure1_slot3;
                    entity = 22;
                    entity = oscard[entity];
                    golfie = zuuluu.bind(report)(entity);
                    zuuluu = golfie.isApplicationAdSupported;
                    entity = _closure2_slot1;
                    zuuluu = zuuluu.bind(golfie)(entity);
                    golfie = null;
                    if(!zuuluu) { _fun00018_ip = 323; continue _fun00017 }
 121:
                    offset = _closure1_slot14;
                    verify = _closure1_slot6;
                    option = {};
                    kiloes = _closure2_slot7;
                    yankee = kiloes.monetizationDisclosureStyle;
                    option['style'] = yankee;
                    foxtra = _closure1_slot13;
                    result = _closure1_slot0;
                    echoed = _closure1_slot3;
                    yankee = 28;
                    yankee = echoed[yankee];
                    yankee = result.bind(report)(yankee);
                    romeon = yankee.BillIcon;
                    yankee = {'size': 'sm', 'color': 'interactive-muted'};
                    romeon = foxtra.bind(report)(romeon, yankee);
                    yankee = new Array(2);
                    yankee[0] = romeon;
                    backup = _closure1_slot13;
                    romeon = 29;
                    romeon = echoed[romeon];
                    romeon = result.bind(report)(romeon);
                    foxtra = romeon.Text;
                    romeon = {'style': null, 'variant': 'text-xs/normal', 'color': 'text-secondary', 'lineClamp': 1};
                    kiloes = kiloes.monetizationDisclosureTextStyle;
                    romeon['style'] = kiloes;
                    kiloes = 30;
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
                    if(!tangon) { _fun00018_ip = 533; continue _fun00017 }
 331:
                    yankee = _closure1_slot14;
                    offset = _closure1_slot6;
                    verify = {};
                    sizing = _closure2_slot7;
                    romeon = sizing.monetizationDisclosureStyle;
                    verify['style'] = romeon;
                    backup = _closure1_slot13;
                    echoed = _closure1_slot0;
                    update = _closure1_slot3;
                    romeon = 31;
                    romeon = update[romeon];
                    romeon = echoed.bind(report)(romeon);
                    foxtra = romeon.ShopIcon;
                    romeon = {'size': 'sm', 'color': 'interactive-muted'};
                    foxtra = backup.bind(report)(foxtra, romeon);
                    romeon = new Array(2);
                    romeon[0] = foxtra;
                    kiloes = _closure1_slot13;
                    foxtra = 29;
                    foxtra = update[foxtra];
                    foxtra = echoed.bind(report)(foxtra);
                    backup = foxtra.Text;
                    foxtra = {'style': null, 'variant': 'text-xs/normal', 'color': 'text-secondary', 'lineClamp': 1};
                    sizing = sizing.monetizationDisclosureTextStyle;
                    foxtra['style'] = sizing;
                    sizing = 30;
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
                    if(tangon) { _fun00018_ip = 541; continue _fun00017 }
 536:
                    entity = null;
                    if(!zuuluu) { _fun00018_ip = 587; continue _fun00017 }
 541:
                    tangon = _closure1_slot14;
                    zuuluu = _closure1_slot6;
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
            config = output.bind(report)(zuuluu, backup);
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
            sierra = _closure1_slot0;
            golfie = 32;
            entity = target[golfie];
            michal = sierra.bind(tangon)(entity);
            entity = michal.useAppLauncherFlashListProps;
            report = entity.bind(michal)();
            zuuluu = _closure1_slot14;
            michal = _closure1_slot15;
            entity = {};
            backup = _closure1_slot13;
            golfie = target[golfie];
            option = option.bind(tangon)(golfie);
            golfie = {};
            vacuum = {};
            quebec = _closure1_slot13;
            limora = _closure1_slot6;
            sequen = {};
            variable43 = whisks.headerSpacer;
            sequen['style'] = variable43;
            limora = quebec.bind(tangon)(limora, sequen);
            sequen = new Array(7);
            sequen[0] = limora;
            limora = 22;
            target = target[limora];
            sierra = sierra.bind(tangon)(target);
            target = sierra.isEmbeddedApp;
            target = target.bind(sierra)(foxtra);
            variable43 = _closure1_slot13;
            quebec = _closure1_slot1;
            variable47 = _closure1_slot3;
            if(target) { _fun00008_ip = 1273; continue _fun00007 }
 1214:
            target = 34;
            target = variable47[target];
            sierra = quebec.bind(tangon)(target);
            target = {};
            target['application'] = foxtra;
            variable48 = whisks.viewContainerStyle;
            target['viewContainerStyle'] = variable48;
            variable48 = whisks.mainContainerStyle;
            target['mainContainerStyle'] = variable48;
            variable48 = whisks.expandDescriptionCTAStyle;
            target['expandDescriptionCTAStyle'] = variable48;
            target = variable43.bind(tangon)(sierra, target);
            _fun00008_ip = 1330; continue _fun00007;
 1273:
            sierra = 33;
            sierra = variable47[sierra];
            quebec = quebec.bind(tangon)(sierra);
            sierra = {};
            sierra['application'] = foxtra;
            sierra['context'] = record;
            sierra['sectionName'] = variable36;
            sierra['onActivityItemSelected'] = variable46;
            sierra['entrypoint'] = variable44;
            variable44 = variable41.length;
            variable44 = variable44 > variable45;
            sierra['hasCommands'] = variable44;
            target = variable43.bind(tangon)(quebec, sierra);
 1330:
            sequen[1] = target;
            quebec = _closure1_slot13;
            sierra = _closure1_slot1;
            variable43 = _closure1_slot3;
            target = 35;
            target = variable43[target];
            sierra = sierra.bind(tangon)(target);
            target = {};
            variable44 = papara == config;
            variable43 = 24;
            if(variable44) { _fun00008_ip = 1400; continue _fun00007 }
 1370:
            variable45 = _closure1_slot1;
            variable46 = _closure1_slot3;
            variable44 = 10;
            variable44 = variable46[variable44];
            variable44 = variable45.bind(tangon)(variable44);
            variable44 = variable44.spacing;
            variable43 = variable44.PX_16;
 1400:
            target['size'] = variable43;
            target = quebec.bind(tangon)(sierra, target);
            sequen[2] = target;
            sequen[3] = config;
            target = variable41.length;
            config = 1;
            config = target > config;
            if(!config) { _fun00008_ip = 1436; continue _fun00007 }
 1433:
            config = !kiloes;
 1436:
            if(!config) { _fun00008_ip = 1452; continue _fun00007 }
 1439:
            sierra = record.type;
            target = 'channel';
            config = target === sierra;
 1452:
            if(!config) { _fun00008_ip = 1517; continue _fun00007 }
 1455:
            quebec = _closure1_slot13;
            sierra = _closure1_slot1;
            target = _closure1_slot3;
            target = target[variable42];
            sierra = sierra.bind(tangon)(target);
            target = {};
            target['context'] = record;
            target['allCommands'] = variable41;
            target['onPressCommand'] = variable40;
            target['section'] = variable39;
            target['onExecuteCommand'] = variable38;
            target['installOnDemand'] = variable37;
            target['sectionName'] = variable36;
            config = quebec.bind(tangon)(sierra, target);
 1517:
            sequen[4] = config;
            config = null;
            if(!cntext) { _fun00008_ip = 1697; continue _fun00007 }
 1529:
            sierra = _closure1_slot0;
            target = _closure1_slot3;
            target = target[limora];
            sierra = sierra.bind(tangon)(target);
            target = sierra.isEmbeddedApp;
            target = target.bind(sierra)(foxtra);
            config = null;
            if(target) { _fun00008_ip = 1697; continue _fun00007 }
 1565:
            limora = _closure1_slot13;
            sierra = _closure1_slot6;
            target = {};
            quebec = whisks.noCommandsTextContainer;
            target['style'] = quebec;
            variable37 = _closure1_slot13;
            variable41 = _closure1_slot0;
            variable42 = _closure1_slot3;
            quebec = 29;
            quebec = variable42[quebec];
            quebec = variable41.bind(tangon)(quebec);
            variable36 = quebec.Text;
            quebec = {'variant': 'text-sm/normal', 'color': 'header-secondary'};
            variable38 = 30;
            variable39 = variable42[variable38];
            variable39 = variable41.bind(tangon)(variable39);
            variable40 = variable39.intl;
            variable39 = variable40.string;
            variable38 = variable42[variable38];
            variable38 = variable41.bind(tangon)(variable38);
            variable38 = variable38.t;
            variable38 = variable38.w8+YDA;
            variable38 = variable39.bind(variable40)(variable38);
            quebec['children'] = variable38;
            quebec = variable37.bind(tangon)(variable36, quebec);
            target['children'] = quebec;
            config = limora.bind(tangon)(sierra, target);
 1697:
            sequen[5] = config;
            config = null;
            if(cntext) { _fun00008_ip = 1949; continue _fun00007 }
 1709:
            cntext = record.type;
            record = 'channel';
            config = null;
            if(!(record === cntext)) { _fun00008_ip = 1949; continue _fun00007 }
 1727:
            papara = _closure1_slot14;
            cntext = _closure1_slot6;
            record = {};
            target = whisks.commandsHeaderContainer;
            record['style'] = target;
            limora = _closure1_slot13;
            sierra = _closure1_slot6;
            target = {};
            whisks = whisks.commandsHeaderTextContainer;
            target['style'] = whisks;
            variable36 = _closure1_slot13;
            variable40 = _closure1_slot0;
            variable41 = _closure1_slot3;
            whisks = 29;
            whisks = variable41[whisks];
            whisks = variable40.bind(tangon)(whisks);
            quebec = whisks.Text;
            whisks = {'variant': 'text-md/medium', 'color': 'text-normal'};
            variable37 = 30;
            variable38 = variable41[variable37];
            variable38 = variable40.bind(tangon)(variable38);
            variable39 = variable38.intl;
            variable38 = variable39.string;
            variable37 = variable41[variable37];
            variable37 = variable40.bind(tangon)(variable37);
            variable37 = variable37.t;
            variable37 = variable37.GOXqkp;
            variable37 = variable38.bind(variable39)(variable37);
            whisks['children'] = variable37;
            whisks = variable36.bind(tangon)(quebec, whisks);
            target['children'] = whisks;
            sierra = limora.bind(tangon)(sierra, target);
            target = new Array(2);
            target[0] = sierra;
            if(!status) { _fun00008_ip = 1935; continue _fun00007 }
 1886:
            whisks = _closure1_slot13;
            limora = _closure1_slot1;
            quebec = _closure1_slot3;
            sierra = 37;
            sierra = quebec[sierra];
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
 1935:
            target[1] = status;
            record['children'] = target;
            config = papara.bind(tangon)(cntext, record);
 1949:
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
            if(!kiloes) { _fun00008_ip = 2075; continue _fun00007 }
 2071:
            report = 'loading';
 2075:
            golfie = backup.bind(tangon)(option, golfie, report);
            report = new Array(2);
            report[0] = golfie;
            option = _closure1_slot13;
            golfie = _closure1_slot1;
            backup = _closure1_slot3;
            oscard = 9;
            oscard = backup[oscard];
            golfie = golfie.bind(tangon)(oscard);
            oscard = {};
            oscard['application'] = foxtra;
            oscard['onPressBack'] = romeon;
            oscard['scrollOffsetY'] = yankee;
            oscard['showsAddCTA'] = offset;
            verify = function(argFoo) { // Original name: onAddAppMenuClick
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    entity = argFoo;
                    oscard = entity.installAppProps;
                    entity = undefined;
                    var _closure3_slot0 = entity;
                    tangon = _closure1_slot1;
                    verify = _closure1_slot3;
                    zuuluu = 38;
                    zuuluu = verify[zuuluu];
                    tangon = tangon.bind(entity)(zuuluu);
                    zuuluu = tangon.hideActionSheet;
                    zuuluu = zuuluu.bind(tangon)();
                    golfie = _closure2_slot9;
                    option = _closure1_slot0;
                    tangon = 13;
                    tangon = verify[tangon];
                    tangon = option.bind(entity)(tangon);
                    tangon = tangon.AppLauncherKeyboardCloseReason;
                    tangon = tangon.OAUTH_MODAL;
                    golfie['current'] = tangon;
                    tangon = _closure2_slot8;
                    option = tangon.current;
                    tangon = null;
                    if(!(tangon != option)) { _fun00020_ip = 116; continue _fun00019 }
 106:
                    golfie = option.closeCustomKeyboard;
                    golfie = golfie.bind(option)();
 116:
                    option = {};
                    verify = _closure1_slot0;
                    offset = _closure1_slot3;
                    golfie = 23;
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
                    if(!(tangon == zuuluu)) { _fun00020_ip = 241; continue _fun00019 }
 199:
                    tangon = _closure1_slot0;
                    golfie = _closure1_slot3;
                    zuuluu = 39;
                    zuuluu = golfie[zuuluu];
                    golfie = tangon.bind(entity)(zuuluu);
                    tangon = golfie.trackWithMetadata;
                    zuuluu = _closure1_slot11;
                    zuuluu = zuuluu.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED;
                    zuuluu = tangon.bind(golfie)(zuuluu, option);
 241:
                    zuuluu = _closure1_slot0;
                    tangon = _closure1_slot3;
                    michal = 40;
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
                        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                            entity = argFoo;
                            michal = entity.canceled;
                            entity = entity.location;
                            zuuluu = null;
                            if(michal) { _fun00022_ip = 79; continue _fun00021 }
 19:
                            if(!(zuuluu != entity)) { _fun00022_ip = 100; continue _fun00021 }
 23:
                            report = _closure1_slot0;
                            tangon = _closure1_slot3;
                            michal = 39;
                            tangon = tangon[michal];
                            michal = undefined;
                            report = report.bind(michal)(tangon);
                            tangon = report.trackWithMetadata;
                            entity = _closure1_slot11;
                            michal = entity.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED;
                            entity = _closure3_slot0;
                            entity = tangon.bind(report)(michal, entity);
                            _fun00022_ip = 100; continue _fun00021;
 79:
                            michal = _closure2_slot6;
                            if(!(zuuluu != michal)) { _fun00022_ip = 100; continue _fun00021 }
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