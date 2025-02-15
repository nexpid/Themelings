// app/modules/app_launcher/native/screens/application_view/app/AppDetailContent.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    result = argBaz;
    verify = argCorge;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = result;
    var _closure1_slot2 = verify;
    var _closure1_slot3 = golf;
    entity = function(argFoo) { // Original name: PlaceholderCommandRow
        _fun118931: for(var _fun118931_ip = 0; ; ) switch(_fun118931_ip) {
 0:
            entity = argFoo;
            oscar = entity.isFirstRow;
            tango = undefined;
            if(!(oscar === tango)) { _fun118931_ip = 17; continue _fun118931 }
 15:
            oscar = false;
 17:
            report = entity.isLastRow;
            if(!(report === tango)) { _fun118931_ip = 29; continue _fun118931 }
 27:
            report = false;
 29:
            entity = _closure1_slot15;
            offset = entity.bind(tango)();
            mike = _closure1_slot0;
            options = _closure1_slot3;
            entity = 10;
            zulu = options[entity];
            yankee = mike.bind(tango)(zulu);
            verify = yankee.usePlaceholderWidth;
            zulu = 50;
            echo = verify.bind(yankee)(entity, zulu);
            entity = options[entity];
            yankee = mike.bind(tango)(entity);
            verify = yankee.usePlaceholderWidth;
            zulu = 30;
            entity = 90;
            kilo = verify.bind(yankee)(zulu, entity);
            zulu = _closure1_slot12;
            entity = 11;
            entity = options[entity];
            entity = mike.bind(tango)(entity);
            mike = entity.TableRow;
            entity = {};
            yankee = _closure1_slot12;
            verify = _closure1_slot5;
            options = {};
            romeo = offset.loadingTextPlaceholder;
            sizing = new Array(2);
            sizing[0] = romeo;
            output = {};
            romeo = global;
            foxtrot = romeo.HermesInternal;
            result = foxtrot.concat;
            backup = '';
            foxtrot = '%';
            result = result.bind(backup)(echo, foxtrot);
            output['width'] = result;
            sizing[1] = output;
            options['style'] = sizing;
            options = yankee.bind(tango)(verify, options);
            entity['label'] = options;
            verify = _closure1_slot12;
            options = _closure1_slot5;
            golf = {};
            yankee = offset.loadingTextPlaceholderSmall;
            offset = new Array(2);
            offset[0] = yankee;
            yankee = {};
            romeo = romeo.HermesInternal;
            romeo = romeo.concat;
            romeo = romeo.bind(backup)(kilo, foxtrot);
            yankee['width'] = romeo;
            offset[1] = yankee;
            golf['style'] = offset;
            golf = verify.bind(tango)(options, golf);
            entity['subLabel'] = golf;
            golf = 1;
            entity['subLabelLineClamp'] = golf;
            entity['start'] = oscar;
            entity['end'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    mike = function(argFoo) { // Original name: CommandRow
        _fun118932: for(var _fun118932_ip = 0; ; ) switch(_fun118932_ip) {
 0:
            entity = argFoo;
            foxtrot = entity.command;
            var _closure2_slot0 = foxtrot;
            mike = entity.onPressCommand;
            var _closure2_slot1 = mike;
            kilo = entity.isFirstRow;
            golf = entity.isLastRow;
            romeo = entity.context;
            var _closure2_slot2 = romeo;
            verify = entity.onExecuteCommand;
            mike = entity.section;
            var _closure2_slot3 = mike;
            mike = entity.location;
            var _closure2_slot4 = mike;
            yankee = entity.installOnDemand;
            options = entity.sectionName;
            var _closure2_slot5 = options;
            oscar = entity.icon;
            mike = _closure1_slot0;
            backup = _closure1_slot3;
            entity = 12;
            entity = backup[entity];
            tango = undefined;
            zulu = mike.bind(tango)(entity);
            entity = zulu.useAppLauncherContext;
            entity = entity.bind(zulu)();
            entity = entity.entrypoint;
            var _closure2_slot6 = entity;
            entity = _closure1_slot7;
            zulu = true;
            entity = entity.bind(tango)(zulu, zulu);
            entity = _closure1_slot6;
            entity = entity.bind(tango)(romeo, zulu, zulu);
            zulu = _closure1_slot12;
            entity = 11;
            entity = backup[entity];
            entity = mike.bind(tango)(entity);
            mike = entity.TableRow;
            entity = {};
            entity['start'] = kilo;
            entity['end'] = golf;
            golf = foxtrot.displayName;
            entity['label'] = golf;
            golf = 1;
            entity['labelLineClamp'] = golf;
            kilo = foxtrot.displayDescription;
            entity['subLabel'] = kilo;
            entity['subLabelLineClamp'] = golf;
            entity['icon'] = oscar;
            oscar = function() { // Original name: onPress
                report = _closure2_slot1;
                tango = _closure2_slot0;
                zulu = _closure2_slot3;
                mike = _closure2_slot4;
                entity = undefined;
                entity = report.bind(entity)(tango, zulu, mike);
                return entity;
            };
            entity['onPress'] = oscar;
            golf = _closure1_slot12;
            oscar = _closure1_slot1;
            report = 13;
            report = backup[report];
            oscar = oscar.bind(tango)(report);
            report = {};
            report['command'] = foxtrot;
            report['context'] = romeo;
            romeo = function() { // Original name: beforeExecuteCommand
                golf = _closure1_slot0;
                options = _closure1_slot3;
                report = 14;
                entity = options[report];
                oscar = undefined;
                zulu = golf.bind(oscar)(entity);
                mike = zulu.trackCommandSelected;
                entity = {};
                verify = _closure2_slot0;
                entity['command'] = verify;
                verify = _closure2_slot4;
                entity['location'] = verify;
                report = options[report];
                golf = golf.bind(oscar)(report);
                oscar = golf.getCommandTriggerSection;
                report = _closure2_slot3;
                report = oscar.bind(golf)(report);
                entity['triggerSection'] = report;
                tango = _closure2_slot5;
                entity['sectionName'] = tango;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            report['beforeExecuteCommand'] = romeo;
            report['onExecuteCommand'] = verify;
            verify = undefined;
            if(!yankee) { _fun118932_ip = 299; continue _fun118932 }
 292:
            verify = function(argFoo) {
                zulu = _closure1_slot0;
                mike = _closure1_slot3;
                entity = 15;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.installApplicationOnDemandIfNeeded;
                mike = {};
                oscar = _closure2_slot0;
                oscar = oscar.applicationId;
                mike['applicationId'] = oscar;
                oscar = _closure2_slot2;
                oscar = oscar.channel;
                mike['channel'] = oscar;
                oscar = argFoo;
                mike['onSuccess'] = oscar;
                oscar = _closure2_slot5;
                mike['sectionName'] = oscar;
                oscar = _closure2_slot4;
                mike['location'] = oscar;
                report = _closure2_slot6;
                mike['entrypoint'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
 299:
            report['tryExecuteCommand'] = verify;
            report['sectionName'] = options;
            report = golf.bind(tango)(oscar, report);
            entity['trailing'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot19 = mike;
    report = global;
    yankee = report.Object;
    offset = yankee.defineProperty;
    options = {};
    entity = true;
    options['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zulu, entity, options);
    romeo = 0;
    options = golf[romeo];
    entity = undefined;
    options = verify.bind(entity)(options);
    var _closure1_slot4 = options;
    yankee = 1;
    options = golf[yankee];
    options = oscar.bind(entity)(options);
    options = options.View;
    var _closure1_slot5 = options;
    options = 2;
    options = golf[options];
    options = oscar.bind(entity)(options);
    verify = options.useContextIndexState;
    var _closure1_slot6 = verify;
    options = options.useUserIndexState;
    var _closure1_slot7 = options;
    options = 3;
    options = golf[options];
    options = oscar.bind(entity)(options);
    kilo = options.DEFAULT_CONTENT_PADDING;
    var _closure1_slot8 = kilo;
    sizing = options.SCREEN_BACKGROUND_COLOR;
    options = options.useAppLauncherNavigation;
    var _closure1_slot9 = options;
    options = 4;
    options = golf[options];
    options = oscar.bind(entity)(options);
    options = options.AnalyticEvents;
    var _closure1_slot10 = options;
    options = 5;
    options = golf[options];
    options = oscar.bind(entity)(options);
    options = options.DISCOVERY_COMMANDS_QUERY_LIMIT;
    var _closure1_slot11 = options;
    verify = 6;
    options = golf[verify];
    options = oscar.bind(entity)(options);
    options = options.jsx;
    var _closure1_slot12 = options;
    options = golf[verify];
    options = oscar.bind(entity)(options);
    options = options.jsxs;
    var _closure1_slot13 = options;
    options = golf[verify];
    options = oscar.bind(entity)(options);
    options = options.Fragment;
    var _closure1_slot14 = options;
    options = 7;
    options = golf[options];
    foxtrot = oscar.bind(entity)(options);
    offset = foxtrot.createStyles;
    options = {};
    backup = {};
    backup['backgroundColor'] = sizing;
    backup['flex'] = yankee;
    options['container'] = backup;
    backup = {};
    sizing = 8;
    output = golf[sizing];
    output = oscar.bind(entity)(output);
    output = output.EXPANDED_HEADER_HEIGHT;
    sizing = golf[sizing];
    sizing = oscar.bind(entity)(sizing);
    sizing = sizing.SHEET_HANDLE_CONTAINER_HEIGHT;
    sizing = output - sizing;
    backup['height'] = sizing;
    options['headerSpacer'] = backup;
    backup = {};
    backup['paddingHorizontal'] = kilo;
    options['list'] = backup;
    kilo = 'center';
    backup = {'flexDirection': 'row', 'justifyContent': 'space-between', 'alignItems': 'center', 'marginBottom': 8};
    options['commandsHeaderContainer'] = backup;
    backup = {'alignItems': 'center', 'flexDirection': 'row', 'gap': 8};
    options['commandsHeaderTextContainer'] = backup;
    backup = {};
    output = 9;
    sizing = golf[output];
    sizing = result.bind(entity)(sizing);
    sizing = sizing.radii;
    sizing = sizing.lg;
    backup['borderRadius'] = sizing;
    options['viewContainerStyle'] = backup;
    backup = {'backgroundColor': null, 'paddingHorizontal': 12, 'paddingVertical': 16};
    sizing = golf[output];
    sizing = result.bind(entity)(sizing);
    sizing = sizing.colors;
    sizing = sizing.CARD_PRIMARY_BG;
    backup['backgroundColor'] = sizing;
    echo = 16;
    options['mainContainerStyle'] = backup;
    backup = {'right': 16, 'bottom': 16};
    options['expandDescriptionCTAStyle'] = backup;
    backup = {};
    sizing = golf[output];
    sizing = result.bind(entity)(sizing);
    sizing = sizing.spacing;
    sizing = sizing.PX_4;
    backup['marginLeft'] = sizing;
    options['monetizationDisclosureTextStyle'] = backup;
    backup = {'flexDirection': 'row', 'alignItems': 'center'};
    sizing = golf[output];
    sizing = result.bind(entity)(sizing);
    sizing = sizing.spacing;
    sizing = sizing.PX_24;
    backup['marginBottom'] = sizing;
    sizing = golf[output];
    sizing = result.bind(entity)(sizing);
    sizing = sizing.spacing;
    sizing = sizing.PX_16;
    backup['gap'] = sizing;
    options['monetizationDisclosureContainerStyle'] = backup;
    backup = {'flexDirection': 'row', 'alignItems': 'center'};
    options['monetizationDisclosureStyle'] = backup;
    backup = {'backgroundColor': null, 'height': 16, 'marginBottom': 4, 'borderRadius': null, 'alignSelf': 'flex-start'};
    sizing = golf[output];
    sizing = result.bind(entity)(sizing);
    sizing = sizing.colors;
    sizing = sizing.BG_MOD_SUBTLE;
    backup['backgroundColor'] = sizing;
    sizing = golf[output];
    sizing = result.bind(entity)(sizing);
    sizing = sizing.radii;
    sizing = sizing.lg;
    backup['borderRadius'] = sizing;
    sizing = 'flex-start';
    options['loadingTextPlaceholder'] = backup;
    backup = {};
    update = golf[output];
    update = result.bind(entity)(update);
    update = update.colors;
    update = update.BG_MOD_SUBTLE;
    backup['backgroundColor'] = update;
    backup['height'] = echo;
    output = golf[output];
    output = result.bind(entity)(output);
    output = output.radii;
    output = output.lg;
    backup['borderRadius'] = output;
    backup['alignSelf'] = sizing;
    options['loadingTextPlaceholderSmall'] = backup;
    backup = {};
    backup['alignItems'] = kilo;
    options['noCommandsTextContainer'] = backup;
    options = offset.bind(foxtrot)(options);
    var _closure1_slot15 = options;
    offset = {};
    offset['PLACEHOLDER'] = romeo;
    options = 'PLACEHOLDER';
    offset[romeo] = options;
    offset['COMMAND'] = yankee;
    options = 'COMMAND';
    offset[yankee] = options;
    var _closure1_slot16 = offset;
    report = report.Array;
    options = report.prototype;
    options = Object.create(options, {constructor: {value: report}});
    sequence = options;
    vacuum = verify;
    report = new sequence[report](vacuum, control);
    verify = report instanceof Object ? report : options;
    options = verify.fill;
    report = {};
    offset = offset.PLACEHOLDER;
    report['type'] = offset;
    report = options.bind(verify)(report);
    var _closure1_slot17 = report;
    report = 40;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/app_launcher/native/screens/application_view/app/AppDetailContent.tsx';
    report = oscar.bind(golf)(report);
    tango = function(argFoo) { // Original name: AppDetailContent
        _fun118936: for(var _fun118936_ip = 0; ; ) switch(_fun118936_ip) {
 0:
            mike = argFoo;
            variable42 = mike.context;
            var _closure2_slot0 = variable42;
            foxtrot = mike.application;
            var _closure2_slot1 = foxtrot;
            yankee = mike.lockableScrollableContentOffsetY;
            romeo = mike.onPressBack;
            variable37 = mike.installOnDemand;
            var _closure2_slot2 = variable37;
            variable36 = mike.sectionName;
            var _closure2_slot3 = variable36;
            variable47 = mike.onActivityItemSelected;
            variable45 = mike.entrypoint;
            var _closure2_slot4 = variable45;
            entity = mike.onCommandExecuted;
            var _closure2_slot5 = entity;
            mike = mike.onAauth2Cancel;
            var _closure2_slot6 = mike;
            tango = undefined;
            var _closure2_slot15 = tango;
            var _closure2_slot16 = tango;
            var _closure2_slot17 = tango;
            var _closure2_slot18 = tango;
            var _closure2_slot19 = tango;
            var _closure2_slot20 = tango;
            var _closure2_slot21 = tango;
            mike = _closure1_slot15;
            whiskey = mike.bind(tango)();
            var _closure2_slot7 = whiskey;
            options = _closure1_slot1;
            echo = _closure1_slot3;
            mike = 17;
            mike = echo[mike];
            mike = options.bind(tango)(mike);
            mike = mike.bind(tango)();
            mike = mike.bottom;
            sizing = _closure1_slot0;
            zulu = 12;
            zulu = echo[zulu];
            report = sizing.bind(tango)(zulu);
            zulu = report.useRequiredAppLauncherContext;
            zulu = zulu.bind(report)();
            output = zulu.chatInputRef;
            var _closure2_slot8 = output;
            backup = zulu.keyboardCloseReasonRef;
            var _closure2_slot9 = backup;
            zulu = 16;
            zulu = echo[zulu];
            report = sizing.bind(tango)(zulu);
            zulu = report.useFontScale;
            zulu = zulu.bind(report)();
            report = global;
            golf = report.Math;
            report = golf.max;
            quebec = 36;
            zulu = zulu * quebec;
            zulu = zulu - quebec;
            variable46 = 0;
            report = report.bind(golf)(zulu, variable46);
            zulu = 60;
            result = zulu + report;
            report = _closure1_slot2;
            zulu = 18;
            zulu = echo[zulu];
            golf = report.bind(tango)(zulu);
            report = golf.useDiscovery;
            zulu = {};
            zulu['context'] = variable42;
            offset = {};
            kilo = 19;
            kilo = echo[kilo];
            kilo = sizing.bind(tango)(kilo);
            kilo = kilo.ApplicationCommandType;
            sizing = kilo.CHAT;
            kilo = new Array(1);
            kilo[0] = sizing;
            offset['commandTypes'] = kilo;
            zulu['filters'] = offset;
            offset = {'placeholderCount': 0, 'limit': null, 'includeFrecency': true};
            kilo = _closure1_slot11;
            offset['limit'] = kilo;
            sizing = true;
            offset['allowApplicationState'] = variable37;
            offset['installOnDemand'] = variable37;
            kilo = foxtrot.id;
            offset['applicationId'] = kilo;
            zulu['options'] = offset;
            zulu['allowFetch'] = sizing;
            report = report.bind(golf)(zulu);
            zulu = report.filterSection;
            var _closure2_slot10 = zulu;
            offset = report.commandsByActiveSection;
            golf = report.sectionDescriptors;
            var _closure2_slot11 = golf;
            kilo = report.loading;
            var _closure2_slot12 = kilo;
            report = 20;
            report = echo[report];
            options = options.bind(tango)(report);
            report = {};
            echo = foxtrot.id;
            report['sectionId'] = echo;
            report['commandsByActiveSection'] = offset;
            report = options.bind(tango)(report);
            equality = report.sortOrder;
            options = report.setSortOrder;
            var _closure2_slot13 = options;
            variable41 = report.commands;
            var _closure2_slot14 = variable41;
            status = report.canSort;
            report = _closure1_slot7;
            report = report.bind(tango)(sizing, sizing);
            options = report.result;
            config = null;
            offset = config == options;
            report = undefined;
            if(offset) { _fun118936_ip = 547; continue _fun118936 }
 532:
            offset = options.sections;
            options = foxtrot.id;
            report = offset[options];
 547:
            report = config == report;
            record = !kilo;
            if(!record) { _fun118936_ip = 566; continue _fun118936 }
 557:
            options = variable41.length;
            record = variable46 === options;
 566:
            offset = record;
            if(!offset) { _fun118936_ip = 575; continue _fun118936 }
 572:
            offset = report;
 575:
            if(!offset) { _fun118936_ip = 612; continue _fun118936 }
 578:
            options = _closure1_slot0;
            echo = _closure1_slot3;
            report = 21;
            report = echo[report];
            options = options.bind(tango)(report);
            report = options.isEmbeddedApp;
            report = report.bind(options)(foxtrot);
            offset = !report;
 612:
            report = _closure1_slot4;
            update = report.useMemo;
            echo = new Array(2);
            echo[0] = kilo;
            echo[1] = variable41;
            options = function() {
                _fun118937: for(var _fun118937_ip = 0; ; ) switch(_fun118937_ip) {
 0:
                    mike = _closure2_slot12;
                    if(mike) { _fun118937_ip = 35; continue _fun118937 }
 10:
                    zulu = _closure2_slot14;
                    mike = zulu.map;
                    entity = function(argFoo) {
                        entity = {};
                        mike = _closure1_slot16;
                        mike = mike.COMMAND;
                        entity['type'] = mike;
                        mike = argFoo;
                        entity['command'] = mike;
                        return entity;
                    };
                    entity = mike.bind(zulu)(entity);
                    _fun118937_ip = 42; continue _fun118937;
 35:
                    entity = _closure1_slot17;
 42:
                    return entity;
                }
            };
            echo = update.bind(report)(options, echo);
            update = report.useEffect;
            source = foxtrot.id;
            options = new Array(2);
            options[0] = source;
            options[1] = zulu;
            zulu = function() {
                zulu = _closure2_slot10;
                entity = _closure2_slot1;
                mike = entity.id;
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            zulu = update.bind(report)(zulu, options);
            zulu = _closure1_slot9;
            zulu = zulu.bind(tango)();
            _closure2_slot15 = zulu;
            update = report.useCallback;
            options = new Array(7);
            options[0] = variable42;
            options[1] = variable45;
            options[2] = variable37;
            options[3] = zulu;
            options[4] = entity;
            options[5] = golf;
            options[6] = variable36;
            zulu = function(argFoo, argBar) {
                _fun118940: for(var _fun118940_ip = 0; ; ) switch(_fun118940_ip) {
 0:
                    report = arguments[2];
                    entity = undefined;
                    if(!(report === entity)) { _fun118940_ip = 44; continue _fun118940 }
 9:
                    zulu = _closure1_slot0;
                    tango = _closure1_slot3;
                    mike = 22;
                    mike = tango[mike];
                    mike = zulu.bind(entity)(mike);
                    mike = mike.ApplicationCommandTriggerLocations;
                    report = mike.APP_LAUNCHER_APPLICATION_VIEW;
 44:
                    zulu = _closure1_slot0;
                    tango = _closure1_slot3;
                    mike = 23;
                    mike = tango[mike];
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.handleApplicationCommandSelected;
                    mike = {};
                    mike['location'] = report;
                    oscar = _closure2_slot0;
                    oscar = oscar.channel;
                    mike['channel'] = oscar;
                    oscar = argFoo;
                    mike['command'] = oscar;
                    oscar = argBar;
                    mike['section'] = oscar;
                    oscar = _closure2_slot11;
                    mike['sectionDescriptors'] = oscar;
                    oscar = '';
                    mike['query'] = oscar;
                    oscar = _closure2_slot15;
                    mike['navigation'] = oscar;
                    oscar = _closure2_slot2;
                    mike['installOnDemand'] = oscar;
                    oscar = _closure2_slot3;
                    mike['sectionName'] = oscar;
                    oscar = _closure2_slot4;
                    mike['entrypoint'] = oscar;
                    report = _closure2_slot5;
                    mike['onCommandExecuted'] = report;
                    mike = zulu.bind(tango)(mike);
                    return entity;
                }
            };
            variable40 = update.bind(report)(zulu, options);
            _closure2_slot16 = variable40;
            options = report.useCallback;
            zulu = new Array(3);
            zulu[0] = output;
            zulu[1] = backup;
            zulu[2] = entity;
            entity = function() {
                _fun118941: for(var _fun118941_ip = 0; ; ) switch(_fun118941_ip) {
 0:
                    entity = _closure2_slot8;
                    zulu = entity.current;
                    tango = null;
                    if(!(tango != zulu)) { _fun118941_ip = 28; continue _fun118941 }
 18:
                    entity = zulu.closeCustomKeyboard;
                    entity = entity.bind(zulu)();
 28:
                    report = _closure2_slot9;
                    oscar = _closure1_slot0;
                    zulu = _closure1_slot3;
                    entity = 12;
                    zulu = zulu[entity];
                    entity = undefined;
                    zulu = oscar.bind(entity)(zulu);
                    zulu = zulu.AppLauncherKeyboardCloseReason;
                    zulu = zulu.COMMAND;
                    report['current'] = zulu;
                    zulu = _closure2_slot5;
                    if(!(tango != zulu)) { _fun118941_ip = 91; continue _fun118941 }
 83:
                    mike = _closure2_slot5;
                    mike = mike.bind(entity)();
 91:
                    return entity;
                }
            };
            variable38 = options.bind(report)(entity, zulu);
            _closure2_slot17 = variable38;
            zulu = golf.find;
            entity = function(argFoo) {
                entity = argFoo;
                mike = entity.id;
                entity = _closure2_slot1;
                entity = entity.id;
                entity = mike === entity;
                return entity;
            };
            variable39 = zulu.bind(golf)(entity);
            _closure2_slot18 = variable39;
            golf = report.useCallback;
            zulu = new Array(7);
            zulu[0] = variable40;
            entity = variable41.length;
            zulu[1] = entity;
            zulu[2] = variable42;
            zulu[3] = variable38;
            zulu[4] = variable39;
            zulu[5] = variable37;
            zulu[6] = variable36;
            entity = function(argFoo) {
                _fun118943: for(var _fun118943_ip = 0; ; ) switch(_fun118943_ip) {
 0:
                    entity = argFoo;
                    zulu = entity.item;
                    oscar = entity.index;
                    tango = zulu.type;
                    entity = _closure1_slot16;
                    entity = entity.PLACEHOLDER;
                    if(!(tango !== entity)) { _fun118943_ip = 220; continue _fun118943 }
 38:
                    report = zulu.type;
                    entity = _closure1_slot16;
                    tango = entity.COMMAND;
                    entity = null;
                    if(!(report === tango)) { _fun118943_ip = 218; continue _fun118943 }
 62:
                    golf = _closure1_slot12;
                    report = _closure1_slot19;
                    tango = {};
                    zulu = zulu.command;
                    tango['command'] = zulu;
                    zulu = _closure2_slot16;
                    tango['onPressCommand'] = zulu;
                    zulu = 0;
                    zulu = zulu === oscar;
                    tango['isFirstRow'] = zulu;
                    zulu = _closure2_slot14;
                    verify = zulu.length;
                    zulu = 1;
                    zulu = verify - zulu;
                    zulu = oscar === zulu;
                    tango['isLastRow'] = zulu;
                    zulu = _closure2_slot0;
                    tango['context'] = zulu;
                    zulu = _closure2_slot17;
                    tango['onExecuteCommand'] = zulu;
                    zulu = _closure2_slot18;
                    tango['section'] = zulu;
                    offset = _closure1_slot0;
                    verify = _closure1_slot3;
                    zulu = 22;
                    verify = verify[zulu];
                    zulu = undefined;
                    verify = offset.bind(zulu)(verify);
                    verify = verify.ApplicationCommandTriggerLocations;
                    verify = verify.APP_LAUNCHER_APPLICATION_VIEW;
                    tango['location'] = verify;
                    verify = _closure2_slot2;
                    tango['installOnDemand'] = verify;
                    options = _closure2_slot3;
                    tango['sectionName'] = options;
                    entity = golf.bind(zulu)(report, tango);
 218:
                    _fun118943_ip = 274; continue _fun118943;
 220:
                    report = _closure1_slot12;
                    tango = _closure1_slot18;
                    zulu = {};
                    golf = 0;
                    golf = golf === oscar;
                    zulu['isFirstRow'] = golf;
                    mike = _closure1_slot17;
                    golf = mike.length;
                    mike = 1;
                    mike = golf - mike;
                    mike = oscar === mike;
                    zulu['isLastRow'] = mike;
                    mike = undefined;
                    entity = report.bind(mike)(tango, zulu);
 274:
                    return entity;
                }
            };
            update = golf.bind(report)(entity, zulu);
            entity = _closure1_slot8;
            mike = mike + entity;
            _closure2_slot19 = mike;
            options = _closure1_slot1;
            papa = _closure1_slot3;
            variable43 = 24;
            entity = papa[variable43];
            entity = options.bind(tango)(entity);
            entity = entity.bind(tango)();
            golf = entity.width;
            _closure2_slot20 = golf;
            target = _closure1_slot0;
            entity = 25;
            entity = papa[entity];
            zulu = target.bind(tango)(entity);
            entity = zulu.useKeyboardActionSheetHeight;
            entity = entity.bind(zulu)();
            entity = entity.maximum;
            _closure2_slot21 = entity;
            output = report.useMemo;
            backup = new Array(4);
            backup[0] = foxtrot;
            zulu = whiskey.monetizationDisclosureContainerStyle;
            backup[1] = zulu;
            zulu = whiskey.monetizationDisclosureStyle;
            backup[2] = zulu;
            zulu = whiskey.monetizationDisclosureTextStyle;
            backup[3] = zulu;
            zulu = function() {
                _fun118944: for(var _fun118944_ip = 0; ; ) switch(_fun118944_ip) {
 0:
                    zulu = _closure1_slot0;
                    tango = _closure1_slot3;
                    entity = 26;
                    entity = tango[entity];
                    report = undefined;
                    zulu = zulu.bind(report)(entity);
                    entity = zulu.isAndroid;
                    tango = entity.bind(zulu)();
                    if(!tango) { _fun118944_ip = 75; continue _fun118944 }
 37:
                    zulu = _closure1_slot0;
                    oscar = _closure1_slot3;
                    entity = 21;
                    entity = oscar[entity];
                    oscar = zulu.bind(report)(entity);
                    zulu = oscar.isApplicationMonetizedWithIAP;
                    entity = _closure2_slot1;
                    tango = zulu.bind(oscar)(entity);
 75:
                    zulu = _closure1_slot0;
                    oscar = _closure1_slot3;
                    entity = 21;
                    entity = oscar[entity];
                    golf = zulu.bind(report)(entity);
                    zulu = golf.isApplicationAdSupported;
                    entity = _closure2_slot1;
                    zulu = zulu.bind(golf)(entity);
                    golf = null;
                    if(!zulu) { _fun118944_ip = 321; continue _fun118944 }
 121:
                    offset = _closure1_slot13;
                    verify = _closure1_slot5;
                    options = {};
                    kilo = _closure2_slot7;
                    yankee = kilo.monetizationDisclosureStyle;
                    options['style'] = yankee;
                    foxtrot = _closure1_slot12;
                    result = _closure1_slot0;
                    echo = _closure1_slot3;
                    yankee = 27;
                    yankee = echo[yankee];
                    yankee = result.bind(report)(yankee);
                    romeo = yankee.BillIcon;
                    yankee = {'size': 'sm', 'color': 'interactive-muted'};
                    romeo = foxtrot.bind(report)(romeo, yankee);
                    yankee = new Array(2);
                    yankee[0] = romeo;
                    backup = _closure1_slot12;
                    romeo = 28;
                    romeo = echo[romeo];
                    romeo = result.bind(report)(romeo);
                    foxtrot = romeo.Text;
                    romeo = {'style': null, 'variant': 'text-xs/normal', 'color': 'text-secondary', 'lineClamp': 1};
                    kilo = kilo.monetizationDisclosureTextStyle;
                    romeo['style'] = kilo;
                    kilo = 29;
                    sizing = echo[kilo];
                    sizing = result.bind(report)(sizing);
                    output = sizing.intl;
                    sizing = output.string;
                    kilo = echo[kilo];
                    kilo = result.bind(report)(kilo);
                    kilo = kilo.t;
                    kilo = kilo.5khEk5;
                    kilo = sizing.bind(output)(kilo);
                    romeo['children'] = kilo;
                    romeo = backup.bind(report)(foxtrot, romeo);
                    yankee[1] = romeo;
                    options['children'] = yankee;
                    golf = offset.bind(report)(verify, options);
 321:
                    options = null;
                    if(!tango) { _fun118944_ip = 529; continue _fun118944 }
 329:
                    yankee = _closure1_slot13;
                    offset = _closure1_slot5;
                    verify = {};
                    sizing = _closure2_slot7;
                    romeo = sizing.monetizationDisclosureStyle;
                    verify['style'] = romeo;
                    backup = _closure1_slot12;
                    echo = _closure1_slot0;
                    update = _closure1_slot3;
                    romeo = 30;
                    romeo = update[romeo];
                    romeo = echo.bind(report)(romeo);
                    foxtrot = romeo.ShopIcon;
                    romeo = {'size': 'sm', 'color': 'interactive-muted'};
                    foxtrot = backup.bind(report)(foxtrot, romeo);
                    romeo = new Array(2);
                    romeo[0] = foxtrot;
                    kilo = _closure1_slot12;
                    foxtrot = 28;
                    foxtrot = update[foxtrot];
                    foxtrot = echo.bind(report)(foxtrot);
                    backup = foxtrot.Text;
                    foxtrot = {'style': null, 'variant': 'text-xs/normal', 'color': 'text-secondary', 'lineClamp': 1};
                    sizing = sizing.monetizationDisclosureTextStyle;
                    foxtrot['style'] = sizing;
                    sizing = 29;
                    output = update[sizing];
                    output = echo.bind(report)(output);
                    result = output.intl;
                    output = result.string;
                    sizing = update[sizing];
                    sizing = echo.bind(report)(sizing);
                    sizing = sizing.t;
                    sizing = sizing.8z5B2d;
                    sizing = output.bind(result)(sizing);
                    foxtrot['children'] = sizing;
                    foxtrot = kilo.bind(report)(backup, foxtrot);
                    romeo[1] = foxtrot;
                    verify['children'] = romeo;
                    options = yankee.bind(report)(offset, verify);
 529:
                    if(tango) { _fun118944_ip = 537; continue _fun118944 }
 532:
                    entity = null;
                    if(!zulu) { _fun118944_ip = 583; continue _fun118944 }
 537:
                    tango = _closure1_slot13;
                    zulu = _closure1_slot5;
                    mike = {};
                    oscar = _closure2_slot7;
                    oscar = oscar.monetizationDisclosureContainerStyle;
                    mike['style'] = oscar;
                    oscar = new Array(2);
                    oscar[0] = options;
                    oscar[1] = golf;
                    mike['children'] = oscar;
                    entity = tango.bind(report)(zulu, mike);
 583:
                    return entity;
                }
            };
            context = output.bind(report)(zulu, backup);
            output = report.useMemo;
            backup = new Array(2);
            backup[0] = mike;
            zulu = whiskey.list;
            backup[1] = zulu;
            zulu = function() {
                entity = {};
                zulu = _closure2_slot7;
                tango = zulu.list;
                report = entity;
                zulu = copyDataProperties(report, tango);
                zulu = _closure2_slot19;
                mike = 'paddingBottom';
                entity[mike] = zulu;
                return entity;
            };
            control = output.bind(report)(zulu, backup);
            backup = report.useMemo;
            zulu = new Array(1);
            zulu[0] = mike;
            mike = function() {
                entity = {};
                mike = _closure2_slot19;
                entity['bottom'] = mike;
                return entity;
            };
            source = backup.bind(report)(mike, zulu);
            zulu = report.useMemo;
            mike = new Array(2);
            mike[0] = golf;
            mike[1] = entity;
            entity = function() {
                entity = {};
                zulu = _closure2_slot20;
                entity['width'] = zulu;
                mike = _closure2_slot21;
                entity['height'] = mike;
                return entity;
            };
            output = zulu.bind(report)(entity, mike);
            golf = 31;
            entity = papa[golf];
            mike = target.bind(tango)(entity);
            entity = mike.useAppLauncherFlashListProps;
            report = entity.bind(mike)();
            zulu = _closure1_slot13;
            mike = _closure1_slot14;
            entity = {};
            backup = _closure1_slot12;
            golf = papa[golf];
            options = options.bind(tango)(golf);
            golf = {};
            vacuum = {};
            lima = _closure1_slot12;
            sierra = _closure1_slot5;
            sequence = {};
            variable44 = whiskey.headerSpacer;
            sequence['style'] = variable44;
            sierra = lima.bind(tango)(sierra, sequence);
            sequence = new Array(7);
            sequence[0] = sierra;
            sierra = 21;
            papa = papa[sierra];
            target = target.bind(tango)(papa);
            papa = target.isEmbeddedApp;
            papa = papa.bind(target)(foxtrot);
            variable44 = _closure1_slot12;
            lima = _closure1_slot1;
            variable48 = _closure1_slot3;
            if(papa) { _fun118936_ip = 1270; continue _fun118936 }
 1211:
            papa = 33;
            papa = variable48[papa];
            target = lima.bind(tango)(papa);
            papa = {};
            papa['application'] = foxtrot;
            variable49 = whiskey.viewContainerStyle;
            papa['viewContainerStyle'] = variable49;
            variable49 = whiskey.mainContainerStyle;
            papa['mainContainerStyle'] = variable49;
            variable49 = whiskey.expandDescriptionCTAStyle;
            papa['expandDescriptionCTAStyle'] = variable49;
            papa = variable44.bind(tango)(target, papa);
            _fun118936_ip = 1327; continue _fun118936;
 1270:
            target = 32;
            target = variable48[target];
            lima = lima.bind(tango)(target);
            target = {};
            target['application'] = foxtrot;
            target['context'] = variable42;
            target['sectionName'] = variable36;
            target['onActivityItemSelected'] = variable47;
            target['entrypoint'] = variable45;
            variable45 = variable41.length;
            variable45 = variable45 > variable46;
            target['hasCommands'] = variable45;
            papa = variable44.bind(tango)(lima, target);
 1327:
            sequence[1] = papa;
            lima = _closure1_slot12;
            target = _closure1_slot1;
            variable44 = _closure1_slot3;
            papa = 34;
            papa = variable44[papa];
            target = target.bind(tango)(papa);
            papa = {};
            variable44 = config == context;
            if(variable44) { _fun118936_ip = 1395; continue _fun118936 }
 1364:
            variable45 = _closure1_slot1;
            variable46 = _closure1_slot3;
            variable44 = 9;
            variable44 = variable46[variable44];
            variable44 = variable45.bind(tango)(variable44);
            variable44 = variable44.spacing;
            variable43 = variable44.PX_16;
 1395:
            papa['size'] = variable43;
            papa = lima.bind(tango)(target, papa);
            sequence[2] = papa;
            sequence[3] = context;
            papa = variable41.length;
            context = 1;
            context = papa > context;
            if(!context) { _fun118936_ip = 1431; continue _fun118936 }
 1428:
            context = !kilo;
 1431:
            if(!context) { _fun118936_ip = 1499; continue _fun118936 }
 1434:
            lima = _closure1_slot12;
            target = _closure1_slot1;
            variable43 = _closure1_slot3;
            papa = 35;
            papa = variable43[papa];
            target = target.bind(tango)(papa);
            papa = {};
            papa['context'] = variable42;
            papa['allCommands'] = variable41;
            papa['onPressCommand'] = variable40;
            papa['section'] = variable39;
            papa['onExecuteCommand'] = variable38;
            papa['installOnDemand'] = variable37;
            papa['sectionName'] = variable36;
            context = lima.bind(tango)(target, papa);
 1499:
            sequence[4] = context;
            context = null;
            if(!record) { _fun118936_ip = 1677; continue _fun118936 }
 1511:
            target = _closure1_slot0;
            papa = _closure1_slot3;
            papa = papa[sierra];
            target = target.bind(tango)(papa);
            papa = target.isEmbeddedApp;
            papa = papa.bind(target)(foxtrot);
            context = null;
            if(papa) { _fun118936_ip = 1677; continue _fun118936 }
 1547:
            sierra = _closure1_slot12;
            target = _closure1_slot5;
            papa = {};
            lima = whiskey.noCommandsTextContainer;
            papa['style'] = lima;
            variable37 = _closure1_slot12;
            variable41 = _closure1_slot0;
            variable42 = _closure1_slot3;
            lima = 28;
            lima = variable42[lima];
            lima = variable41.bind(tango)(lima);
            variable36 = lima.Text;
            lima = {'variant': 'text-sm/normal', 'color': 'header-secondary'};
            variable38 = 29;
            variable39 = variable42[variable38];
            variable39 = variable41.bind(tango)(variable39);
            variable40 = variable39.intl;
            variable39 = variable40.string;
            variable38 = variable42[variable38];
            variable38 = variable41.bind(tango)(variable38);
            variable38 = variable38.t;
            variable38 = variable38.w8+YDA;
            variable38 = variable39.bind(variable40)(variable38);
            lima['children'] = variable38;
            lima = variable37.bind(tango)(variable36, lima);
            papa['children'] = lima;
            context = sierra.bind(tango)(target, papa);
 1677:
            sequence[5] = context;
            config = null;
            if(record) { _fun118936_ip = 1910; continue _fun118936 }
 1689:
            papa = _closure1_slot13;
            context = _closure1_slot5;
            record = {};
            target = whiskey.commandsHeaderContainer;
            record['style'] = target;
            lima = _closure1_slot12;
            sierra = _closure1_slot5;
            target = {};
            whiskey = whiskey.commandsHeaderTextContainer;
            target['style'] = whiskey;
            variable37 = _closure1_slot12;
            variable41 = _closure1_slot0;
            variable42 = _closure1_slot3;
            whiskey = 28;
            whiskey = variable42[whiskey];
            whiskey = variable41.bind(tango)(whiskey);
            variable36 = whiskey.Text;
            whiskey = {'variant': 'text-md/medium', 'color': 'text-normal'};
            variable38 = 29;
            variable39 = variable42[variable38];
            variable39 = variable41.bind(tango)(variable39);
            variable40 = variable39.intl;
            variable39 = variable40.string;
            variable38 = variable42[variable38];
            variable38 = variable41.bind(tango)(variable38);
            variable38 = variable38.t;
            variable38 = variable38.GOXqkp;
            variable38 = variable39.bind(variable40)(variable38);
            whiskey['children'] = variable38;
            whiskey = variable37.bind(tango)(variable36, whiskey);
            target['children'] = whiskey;
            sierra = lima.bind(tango)(sierra, target);
            target = new Array(2);
            target[0] = sierra;
            if(!status) { _fun118936_ip = 1896; continue _fun118936 }
 1850:
            whiskey = _closure1_slot12;
            lima = _closure1_slot1;
            sierra = _closure1_slot3;
            sierra = sierra[quebec];
            lima = lima.bind(tango)(sierra);
            sierra = {};
            sierra['sortOrder'] = equality;
            equality = function(argFoo) { // Original name: onSortOptionPress
                zulu = _closure2_slot13;
                entity = undefined;
                mike = argFoo;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            sierra['onSortOptionPress'] = equality;
            status = whiskey.bind(tango)(lima, sierra);
 1896:
            target[1] = status;
            record['children'] = target;
            config = papa.bind(tango)(context, record);
 1910:
            sequence[6] = config;
            vacuum['children'] = sequence;
            vacuum = zulu.bind(tango)(mike, vacuum);
            golf['ListHeaderComponent'] = vacuum;
            golf['contentContainerStyle'] = control;
            golf['scrollIndicatorInsets'] = source;
            golf['renderItem'] = update;
            golf['data'] = echo;
            golf['estimatedItemSize'] = result;
            golf['estimatedListSize'] = output;
            golf['preserveScrollMomentum'] = sizing;
            golf['lockableScrollableContentOffsetY'] = yankee;
            sizing = false;
            golf['automaticallyAdjustsScrollIndicatorInsets'] = sizing;
            sizing = 'none';
            golf['keyboardDismissMode'] = sizing;
            sizing = report.onScroll;
            golf['animatedOnScroll'] = sizing;
            sizing = report.scrollerRef;
            golf['ref'] = sizing;
            sizing = report.gestureRef;
            golf['simultaneousHandlers'] = sizing;
            report = report.animatedProps;
            golf['animatedProps'] = report;
            report = undefined;
            if(!kilo) { _fun118936_ip = 2036; continue _fun118936 }
 2032:
            report = 'loading';
 2036:
            golf = backup.bind(tango)(options, golf, report);
            report = new Array(2);
            report[0] = golf;
            options = _closure1_slot12;
            golf = _closure1_slot1;
            backup = _closure1_slot3;
            oscar = 8;
            oscar = backup[oscar];
            golf = golf.bind(tango)(oscar);
            oscar = {};
            oscar['application'] = foxtrot;
            oscar['onPressBack'] = romeo;
            oscar['scrollOffsetY'] = yankee;
            oscar['showsAddCTA'] = offset;
            verify = function(argFoo) { // Original name: onAddAppMenuClick
                _fun118949: for(var _fun118949_ip = 0; ; ) switch(_fun118949_ip) {
 0:
                    entity = argFoo;
                    oscar = entity.installAppProps;
                    entity = undefined;
                    var _closure3_slot0 = entity;
                    tango = _closure1_slot1;
                    verify = _closure1_slot3;
                    zulu = 37;
                    zulu = verify[zulu];
                    tango = tango.bind(entity)(zulu);
                    zulu = tango.hideActionSheet;
                    zulu = zulu.bind(tango)();
                    golf = _closure2_slot9;
                    options = _closure1_slot0;
                    tango = 12;
                    tango = verify[tango];
                    tango = options.bind(entity)(tango);
                    tango = tango.AppLauncherKeyboardCloseReason;
                    tango = tango.OAUTH_MODAL;
                    golf['current'] = tango;
                    tango = _closure2_slot8;
                    options = tango.current;
                    tango = null;
                    if(!(tango != options)) { _fun118949_ip = 116; continue _fun118949 }
 106:
                    golf = options.closeCustomKeyboard;
                    golf = golf.bind(options)();
 116:
                    options = {};
                    verify = _closure1_slot0;
                    offset = _closure1_slot3;
                    golf = 22;
                    golf = offset[golf];
                    golf = verify.bind(entity)(golf);
                    golf = golf.ApplicationCommandTriggerLocations;
                    golf = golf.APP_LAUNCHER_APPLICATION_VIEW_MORE_MENU;
                    options['location'] = golf;
                    golf = _closure2_slot1;
                    golf = golf.id;
                    options['application_id'] = golf;
                    golf = _closure2_slot3;
                    options['section_name'] = golf;
                    zulu = _closure2_slot4;
                    options['source'] = zulu;
                    _closure3_slot0 = options;
                    zulu = oscar.customInstallUrl;
                    if(!(tango == zulu)) { _fun118949_ip = 241; continue _fun118949 }
 199:
                    tango = _closure1_slot0;
                    golf = _closure1_slot3;
                    zulu = 38;
                    zulu = golf[zulu];
                    golf = tango.bind(entity)(zulu);
                    tango = golf.trackWithMetadata;
                    zulu = _closure1_slot10;
                    zulu = zulu.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED;
                    zulu = tango.bind(golf)(zulu, options);
 241:
                    zulu = _closure1_slot0;
                    tango = _closure1_slot3;
                    mike = 39;
                    mike = tango[mike];
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.installApplication;
                    mike = {};
                    romeo = mike;
                    yankee = oscar;
                    oscar = copyDataProperties(romeo, yankee);
                    golf = 'app_launcher_app_details';
                    oscar = 'source';
                    mike[oscar] = golf;
                    oscar = function(argFoo) { // Original name: oauth2Callback
                        _fun118950: for(var _fun118950_ip = 0; ; ) switch(_fun118950_ip) {
 0:
                            entity = argFoo;
                            mike = entity.canceled;
                            entity = entity.location;
                            zulu = null;
                            if(mike) { _fun118950_ip = 79; continue _fun118950 }
 19:
                            if(!(zulu != entity)) { _fun118950_ip = 100; continue _fun118950 }
 23:
                            report = _closure1_slot0;
                            tango = _closure1_slot3;
                            mike = 38;
                            tango = tango[mike];
                            mike = undefined;
                            report = report.bind(mike)(tango);
                            tango = report.trackWithMetadata;
                            entity = _closure1_slot10;
                            mike = entity.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED;
                            entity = _closure3_slot0;
                            entity = tango.bind(report)(mike, entity);
                            _fun118950_ip = 100; continue _fun118950;
 79:
                            mike = _closure2_slot6;
                            if(!(zulu != mike)) { _fun118950_ip = 100; continue _fun118950 }
 90:
                            mike = _closure2_slot6;
                            entity = undefined;
                            entity = mike.bind(entity)();
 100:
                            entity = undefined;
                            return entity;
                        }
                    };
                    report = 'oauth2Callback';
                    mike[report] = oscar;
                    mike = zulu.bind(tango)(mike);
                    return entity;
                }
            };
            oscar['onAddAppMenuClick'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = tango;
    tango = 24;
    zulu['BETWEEN_SECTIONS_MARGIN'] = tango;
    zulu['CommandRow'] = mike;
    return entity;
})();