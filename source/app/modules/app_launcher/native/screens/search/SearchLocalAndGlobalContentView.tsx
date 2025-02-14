// app/modules/app_launcher/native/screens/search/SearchLocalAndGlobalContentView.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    romeo = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = romeo;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: getApplicationIdFromApplicationItem
        _fun118808: for(var _fun118808_ip = 0; ; ) switch(_fun118808_ip) {
 0:
            mike = argFoo;
            report = mike.type;
            entity = _closure1_slot13;
            zulu = entity.PLACERHOLDER;
            entity = undefined;
            if(!(report !== zulu)) { _fun118808_ip = 53; continue _fun118808 }
 27:
            report = mike.application;
            zulu = null;
            zulu = zulu != report;
            entity = undefined;
            if(!zulu) { _fun118808_ip = 53; continue _fun118808 }
 43:
            mike = mike.application;
            entity = mike.id;
 53:
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = function(argFoo) { // Original name: getImpressionPropsFromApplicationItem
        entity = {};
        tango = _closure1_slot18;
        zulu = undefined;
        mike = argFoo;
        mike = tango.bind(zulu)(mike);
        entity['applicationId'] = mike;
        return entity;
    };
    var _closure1_slot19 = entity;
    entity = function(argFoo) { // Original name: CommandRow
        _fun118810: for(var _fun118810_ip = 0; ; ) switch(_fun118810_ip) {
 0:
            entity = argFoo;
            romeo = entity.context;
            foxtrot = entity.command;
            output = entity.application;
            oscar = entity.onPress;
            backup = entity.isFirstRow;
            golf = entity.isLastRow;
            yankee = entity.beforeExecuteCommand;
            options = entity.onExecuteCommand;
            mike = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 9;
            entity = zulu[entity];
            tango = undefined;
            mike = mike.bind(tango)(entity);
            entity = mike.getAppLauncherIconSource;
            verify = entity.bind(mike)(output);
            entity = null;
            kilo = entity != verify;
            if(!kilo) { _fun118810_ip = 130; continue _fun118810 }
 93:
            zulu = _closure1_slot10;
            mike = _closure1_slot1;
            offset = _closure1_slot2;
            entity = 10;
            entity = offset[entity];
            mike = mike.bind(tango)(entity);
            entity = {};
            entity['iconSource'] = verify;
            kilo = zulu.bind(tango)(mike, entity);
 130:
            zulu = _closure1_slot10;
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            entity = 11;
            entity = offset[entity];
            entity = verify.bind(tango)(entity);
            mike = entity.TableRow;
            entity = {};
            entity['icon'] = kilo;
            kilo = foxtrot.displayName;
            entity['label'] = kilo;
            kilo = 12;
            kilo = offset[kilo];
            sizing = verify.bind(tango)(kilo);
            kilo = sizing.getSectionName;
            kilo = kilo.bind(sizing)(output);
            entity['subLabel'] = kilo;
            kilo = 1;
            entity['subLabelLineClamp'] = kilo;
            entity['start'] = backup;
            entity['end'] = golf;
            entity['onPress'] = oscar;
            golf = _closure1_slot10;
            oscar = _closure1_slot1;
            report = 13;
            report = offset[report];
            oscar = oscar.bind(tango)(report);
            report = {};
            report['command'] = foxtrot;
            report['context'] = romeo;
            report['beforeExecuteCommand'] = yankee;
            report['onExecuteCommand'] = options;
            options = 14;
            options = offset[options];
            options = verify.bind(tango)(options);
            options = options.AppLauncherSectionName;
            options = options.SEARCH;
            report['sectionName'] = options;
            report = golf.bind(tango)(oscar, report);
            entity['trailing'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    entity = function(argFoo) { // Original name: PlaceholderCommandRow
        _fun118811: for(var _fun118811_ip = 0; ; ) switch(_fun118811_ip) {
 0:
            entity = argFoo;
            oscar = entity.isFirstRow;
            tango = undefined;
            if(!(oscar === tango)) { _fun118811_ip = 17; continue _fun118811 }
 15:
            oscar = false;
 17:
            report = entity.isLastRow;
            if(!(report === tango)) { _fun118811_ip = 29; continue _fun118811 }
 27:
            report = false;
 29:
            entity = _closure1_slot17;
            offset = entity.bind(tango)();
            mike = _closure1_slot0;
            options = _closure1_slot2;
            entity = 15;
            zulu = options[entity];
            romeo = mike.bind(tango)(zulu);
            yankee = romeo.usePlaceholderWidth;
            verify = 10;
            zulu = 50;
            echo = yankee.bind(romeo)(verify, zulu);
            entity = options[entity];
            yankee = mike.bind(tango)(entity);
            verify = yankee.usePlaceholderWidth;
            zulu = 30;
            entity = 90;
            kilo = verify.bind(yankee)(zulu, entity);
            zulu = _closure1_slot10;
            entity = 11;
            entity = options[entity];
            entity = mike.bind(tango)(entity);
            mike = entity.TableRow;
            entity = {};
            yankee = _closure1_slot10;
            verify = _closure1_slot5;
            options = {};
            romeo = offset.loadingCommandAppIcon;
            options['style'] = romeo;
            options = yankee.bind(tango)(verify, options);
            entity['icon'] = options;
            yankee = _closure1_slot10;
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
            verify = _closure1_slot10;
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
            report = function() { // Original name: onPress
                entity = undefined;
                return entity;
            };
            entity['onPress'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot21 = entity;
    entity = function(argFoo, argBar) { // Original name: keyExtractor
        _fun118813: for(var _fun118813_ip = 0; ; ) switch(_fun118813_ip) {
 0:
            entity = argFoo;
            zulu = argBar;
            tango = entity.type;
            mike = _closure1_slot13;
            mike = mike.PLACERHOLDER;
            if(!(tango !== mike)) { _fun118813_ip = 40; continue _fun118813 }
 28:
            entity = entity.application;
            entity = entity.id;
            _fun118813_ip = 49; continue _fun118813;
 40:
            mike = zulu.toString;
            entity = mike.bind(zulu)();
 49:
            return entity;
        }
    };
    var _closure1_slot22 = entity;
    entity = function(argFoo) { // Original name: CommandsExpandableList
        entity = argFoo;
        verify = entity.commandData;
        var _closure2_slot0 = verify;
        offset = entity.context;
        var _closure2_slot1 = offset;
        yankee = entity.beforeExecuteCommand;
        var _closure2_slot2 = yankee;
        golf = entity.onPressCommand;
        var _closure2_slot3 = golf;
        options = entity.onExecuteCommand;
        var _closure2_slot4 = options;
        report = entity.expanded;
        oscar = _closure1_slot4;
        tango = oscar.useMemo;
        zulu = new Array(5);
        zulu[0] = yankee;
        zulu[1] = offset;
        zulu[2] = verify;
        zulu[3] = options;
        zulu[4] = golf;
        mike = function() {
            zulu = _closure2_slot0;
            mike = zulu.map;
            entity = function(argFoo, argBar) {
                _fun118816: for(var _fun118816_ip = 0; ; ) switch(_fun118816_ip) {
 0:
                    mike = argFoo;
                    zulu = argBar;
                    var _closure4_slot0 = zulu;
                    zulu = _closure1_slot14;
                    if(!(mike !== zulu)) { _fun118816_ip = 51; continue _fun118816 }
 23:
                    zulu = mike.command;
                    var _closure4_slot1 = zulu;
                    mike = mike.application;
                    var _closure4_slot2 = mike;
                    mike = function(argFoo) {
                        entity = argFoo;
                        oscar = entity.isLastRow;
                        tango = _closure1_slot10;
                        zulu = _closure1_slot20;
                        mike = {};
                        golf = _closure2_slot1;
                        mike['context'] = golf;
                        options = _closure4_slot1;
                        mike['command'] = options;
                        options = _closure4_slot2;
                        mike['application'] = options;
                        options = function() { // Original name: onPress
                            tango = _closure2_slot3;
                            zulu = _closure4_slot1;
                            mike = _closure4_slot0;
                            entity = undefined;
                            entity = tango.bind(entity)(zulu, mike);
                            return entity;
                        };
                        mike['onPress'] = options;
                        options = _closure4_slot0;
                        golf = 0;
                        golf = golf === options;
                        mike['isFirstRow'] = golf;
                        mike['isLastRow'] = oscar;
                        report = function() { // Original name: beforeExecuteCommand
                            zulu = _closure2_slot2;
                            mike = {};
                            tango = _closure4_slot1;
                            mike['command'] = tango;
                            entity = _closure4_slot0;
                            mike['searchResultsPosition'] = entity;
                            entity = undefined;
                            entity = zulu.bind(entity)(mike);
                            return entity;
                        };
                        mike['beforeExecuteCommand'] = report;
                        entity = _closure2_slot4;
                        mike['onExecuteCommand'] = entity;
                        entity = undefined;
                        entity = tango.bind(entity)(zulu, mike);
                        return entity;
                    };
                    return mike;
 51:
                    entity = function(argFoo) {
                        entity = argFoo;
                        entity = entity.isLastRow;
                        tango = _closure1_slot10;
                        zulu = _closure1_slot21;
                        mike = {};
                        oscar = _closure4_slot0;
                        report = 0;
                        report = report === oscar;
                        mike['isFirstRow'] = report;
                        mike['isLastRow'] = entity;
                        entity = undefined;
                        entity = tango.bind(entity)(zulu, mike);
                        return entity;
                    };
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        oscar = tango.bind(oscar)(mike, zulu);
        tango = _closure1_slot10;
        mike = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 30;
        entity = zulu[entity];
        zulu = undefined;
        mike = mike.bind(zulu)(entity);
        entity = {};
        entity['items'] = oscar;
        entity['expandedOverride'] = report;
        report = false;
        entity['showsExpandCTAOverride'] = report;
        entity = tango.bind(zulu)(mike, entity);
        return entity;
    };
    var _closure1_slot23 = entity;
    tango = global;
    verify = tango.Object;
    options = verify.defineProperty;
    golf = {};
    entity = true;
    golf['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, golf);
    sizing = 0;
    golf = oscar[sizing];
    entity = undefined;
    golf = romeo.bind(entity)(golf);
    var _closure1_slot3 = golf;
    backup = 1;
    options = oscar[backup];
    golf = argCorge;
    golf = golf.bind(entity)(options);
    var _closure1_slot4 = golf;
    yankee = 2;
    options = oscar[yankee];
    options = report.bind(entity)(options);
    options = options.View;
    var _closure1_slot5 = options;
    verify = 3;
    options = oscar[verify];
    options = report.bind(entity)(options);
    options = options.getSectionFromChannel;
    var _closure1_slot6 = options;
    options = 4;
    options = oscar[options];
    options = report.bind(entity)(options);
    options = options.FetchState;
    var _closure1_slot7 = options;
    options = 5;
    options = oscar[options];
    options = report.bind(entity)(options);
    foxtrot = options.DEFAULT_CONTENT_PADDING;
    var _closure1_slot8 = foxtrot;
    options = options.useAppLauncherNavigation;
    var _closure1_slot9 = options;
    kilo = 6;
    options = oscar[kilo];
    options = report.bind(entity)(options);
    options = options.jsx;
    var _closure1_slot10 = options;
    options = oscar[kilo];
    options = report.bind(entity)(options);
    options = options.jsxs;
    var _closure1_slot11 = options;
    options = oscar[kilo];
    options = report.bind(entity)(options);
    options = options.Fragment;
    var _closure1_slot12 = options;
    offset = {};
    offset['PLACERHOLDER'] = sizing;
    options = 'PLACERHOLDER';
    offset[sizing] = options;
    offset['LOCAL_APPLICATION'] = backup;
    options = 'LOCAL_APPLICATION';
    offset[backup] = options;
    offset['GLOBAL_APPLICATION'] = yankee;
    options = 'GLOBAL_APPLICATION';
    offset[yankee] = options;
    var _closure1_slot13 = offset;
    backup = 'placeholder';
    var _closure1_slot14 = backup;
    options = tango.Array;
    yankee = options.prototype;
    yankee = Object.create(yankee, {constructor: {value: options}});
    update = yankee;
    echo = kilo;
    options = new update[options](echo, result);
    yankee = options instanceof Object ? options : yankee;
    options = yankee.fill;
    options = options.bind(yankee)(backup);
    var _closure1_slot15 = options;
    tango = tango.Array;
    options = tango.prototype;
    options = Object.create(options, {constructor: {value: tango}});
    update = options;
    echo = verify;
    tango = new update[tango](echo, result);
    verify = tango instanceof Object ? tango : options;
    options = verify.fill;
    tango = {};
    offset = offset.PLACERHOLDER;
    tango['type'] = offset;
    tango = options.bind(verify)(tango);
    var _closure1_slot16 = tango;
    tango = 7;
    tango = oscar[tango];
    verify = report.bind(entity)(tango);
    options = verify.createStyles;
    tango = {};
    offset = {};
    yankee = 8;
    offset['marginBottom'] = yankee;
    tango['sectionHeader'] = offset;
    offset = {};
    offset['paddingHorizontal'] = foxtrot;
    foxtrot = oscar[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.colors;
    foxtrot = foxtrot.BG_BASE_SECONDARY;
    offset['backgroundColor'] = foxtrot;
    tango['list'] = offset;
    offset = {'width': 32, 'height': 32};
    foxtrot = oscar[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.radii;
    foxtrot = foxtrot.sm;
    offset['borderRadius'] = foxtrot;
    foxtrot = oscar[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.colors;
    foxtrot = foxtrot.BG_MOD_SUBTLE;
    offset['backgroundColor'] = foxtrot;
    tango['loadingCommandAppIcon'] = offset;
    offset = {'backgroundColor': null, 'height': 16, 'marginBottom': 4, 'borderRadius': null, 'alignSelf': 'flex-start'};
    foxtrot = oscar[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.colors;
    foxtrot = foxtrot.BG_MOD_SUBTLE;
    offset['backgroundColor'] = foxtrot;
    backup = 16;
    foxtrot = oscar[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.radii;
    foxtrot = foxtrot.lg;
    offset['borderRadius'] = foxtrot;
    foxtrot = 'flex-start';
    tango['loadingTextPlaceholder'] = offset;
    offset = {};
    kilo = oscar[yankee];
    kilo = romeo.bind(entity)(kilo);
    kilo = kilo.colors;
    kilo = kilo.BG_MOD_SUBTLE;
    offset['backgroundColor'] = kilo;
    offset['height'] = backup;
    backup = oscar[yankee];
    backup = romeo.bind(entity)(backup);
    backup = backup.radii;
    backup = backup.lg;
    offset['borderRadius'] = backup;
    offset['alignSelf'] = foxtrot;
    tango['loadingTextPlaceholderSmall'] = offset;
    offset = {};
    foxtrot = oscar[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.spacing;
    foxtrot = foxtrot.PX_16;
    offset['marginTop'] = foxtrot;
    tango['divider'] = offset;
    offset = {'justifyContent': 'space-between', 'flexDirection': 'row'};
    tango['commandsHeaderContainer'] = offset;
    offset = {};
    foxtrot = oscar[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.radii;
    foxtrot = foxtrot.sm;
    offset['borderRadius'] = foxtrot;
    foxtrot = oscar[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.spacing;
    foxtrot = foxtrot.PX_4;
    offset['paddingHorizontal'] = foxtrot;
    foxtrot = oscar[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.spacing;
    foxtrot = foxtrot.PX_4;
    offset['marginBottom'] = foxtrot;
    foxtrot = 'center';
    offset['justifyContent'] = foxtrot;
    tango['commandsCTA'] = offset;
    offset = {};
    yankee = oscar[yankee];
    yankee = romeo.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.BG_SURFACE_RAISED;
    offset['color'] = yankee;
    tango['commandsCTAUnderlayColor'] = offset;
    tango = options.bind(verify)(tango);
    var _closure1_slot17 = tango;
    tango = golf.forwardRef;
    mike = function(argFoo, argBar) {
        _fun118821: for(var _fun118821_ip = 0; ; ) switch(_fun118821_ip) {
 0:
            entity = argFoo;
            variable39 = entity.context;
            golf = entity.onScroll;
            var _closure2_slot0 = golf;
            variable36 = entity.onSend;
            record = entity.entrypoint;
            var _closure2_slot1 = record;
            report = undefined;
            var _closure2_slot9 = report;
            var _closure2_slot10 = report;
            var _closure2_slot11 = report;
            var _closure2_slot12 = report;
            var _closure2_slot13 = report;
            var _closure2_slot14 = report;
            var _closure2_slot15 = report;
            var _closure2_slot16 = report;
            var _closure2_slot17 = report;
            var _closure2_slot18 = report;
            entity = _closure1_slot17;
            target = entity.bind(report)();
            var _closure2_slot2 = target;
            tango = _closure1_slot1;
            offset = _closure1_slot2;
            entity = 16;
            entity = offset[entity];
            entity = tango.bind(report)(entity);
            entity = entity.bind(report)();
            zulu = entity.bottom;
            entity = 17;
            entity = offset[entity];
            entity = tango.bind(report)(entity);
            entity = entity.bind(report)();
            echo = entity.width;
            var _closure2_slot3 = echo;
            entity = 18;
            entity = offset[entity];
            entity = tango.bind(report)(entity);
            yankee = entity.bind(report)();
            var _closure2_slot4 = yankee;
            entity = _closure1_slot9;
            control = entity.bind(report)();
            var _closure2_slot5 = control;
            entity = variable39.channel;
            var _closure2_slot6 = entity;
            options = _closure1_slot4;
            oscar = options.useState;
            tango = '';
            options = oscar.bind(options)(tango);
            oscar = _closure1_slot3;
            tango = 2;
            options = oscar.bind(report)(options, tango);
            config = 0;
            tango = options[config];
            var _closure2_slot7 = tango;
            oscar = 1;
            oscar = options[oscar];
            var _closure2_slot8 = oscar;
            romeo = _closure1_slot4;
            verify = romeo.useImperativeHandle;
            options = argBar;
            oscar = function() {
                entity = {};
                mike = _closure2_slot8;
                entity['setQuery'] = mike;
                return entity;
            };
            oscar = verify.bind(romeo)(options, oscar);
            kilo = _closure1_slot0;
            oscar = 19;
            oscar = offset[oscar];
            verify = kilo.bind(report)(oscar);
            options = verify.useIsActivitiesInTextEnabled;
            oscar = entity.id;
            romeo = options.bind(verify)(oscar);
            oscar = 20;
            options = offset[oscar];
            backup = kilo.bind(report)(options);
            verify = backup.useLocalSearchResults;
            options = {};
            options['context'] = variable39;
            options['query'] = tango;
            options['commandLimit'] = oscar;
            sizing = 10;
            options['applicationLimit'] = sizing;
            papa = 14;
            offset = offset[papa];
            offset = kilo.bind(report)(offset);
            offset = offset.AppLauncherEntrypoint;
            offset = offset.VOICE;
            offset = record === offset;
            if(offset) { _fun118821_ip = 373; continue _fun118821 }
 370:
            offset = romeo;
 373:
            options['searchesActivities'] = offset;
            offset = _closure1_slot0;
            romeo = _closure1_slot2;
            kilo = romeo[papa];
            kilo = offset.bind(report)(kilo);
            kilo = kilo.AppLauncherEntrypoint;
            kilo = kilo.TEXT;
            kilo = record === kilo;
            options['searchesCommands'] = kilo;
            kilo = romeo[papa];
            kilo = offset.bind(report)(kilo);
            kilo = kilo.AppLauncherEntrypoint;
            kilo = kilo.TEXT;
            kilo = record === kilo;
            options['searchesBots'] = kilo;
            options = verify.bind(backup)(options);
            kilo = options.loading;
            _closure2_slot9 = kilo;
            verify = options.commandResults;
            _closure2_slot10 = verify;
            output = options.applicationResults;
            _closure2_slot11 = output;
            oscar = romeo[oscar];
            sizing = offset.bind(report)(oscar);
            backup = sizing.useGlobalSearchResults;
            oscar = {};
            oscar['query'] = tango;
            options = {};
            options['channel'] = entity;
            result = 'channel';
            options['type'] = result;
            oscar['context'] = options;
            options = true;
            oscar['fetches'] = options;
            oscar['entrypoint'] = record;
            backup = backup.bind(sizing)(oscar);
            oscar = backup.fetchState;
            _closure2_slot12 = oscar;
            sizing = backup.applicationResults;
            _closure2_slot13 = sizing;
            result = backup.fetchNextPage;
            _closure2_slot14 = result;
            backup = function(argFoo) { // Original name: useCommandsExpanded
                report = _closure1_slot4;
                tango = report.useState;
                entity = false;
                oscar = tango.bind(report)(entity);
                report = _closure1_slot3;
                tango = undefined;
                entity = 2;
                report = report.bind(tango)(oscar, entity);
                entity = 0;
                tango = report[entity];
                entity = 1;
                entity = report[entity];
                var _closure3_slot0 = entity;
                golf = _closure1_slot4;
                oscar = golf.useEffect;
                report = new Array(1);
                entity = argFoo;
                report[0] = entity;
                entity = function() {
                    zulu = _closure3_slot0;
                    entity = undefined;
                    mike = false;
                    mike = zulu.bind(entity)(mike);
                    return entity;
                };
                entity = oscar.bind(golf)(entity, report);
                entity = {};
                entity['isCommandsExpanded'] = tango;
                report = _closure1_slot4;
                tango = report.useCallback;
                zulu = function() {
                    zulu = _closure3_slot0;
                    entity = undefined;
                    mike = function(argFoo) {
                        entity = argFoo;
                        entity = !entity;
                        return entity;
                    };
                    mike = zulu.bind(entity)(mike);
                    return entity;
                };
                mike = new Array(0);
                mike = tango.bind(report)(zulu, mike);
                entity['toggleCommandsExpanded'] = mike;
                return entity;
            };
            backup = backup.bind(report)(tango);
            quebec = backup.isCommandsExpanded;
            variable43 = backup.toggleCommandsExpanded;
            vacuum = _closure1_slot4;
            source = vacuum.useCallback;
            update = new Array(4);
            update[0] = entity;
            update[1] = record;
            update[2] = control;
            update[3] = tango;
            backup = function(argFoo, argBar) {
                oscar = argFoo;
                tango = _closure1_slot6;
                offset = _closure2_slot6;
                zulu = oscar.applicationId;
                entity = undefined;
                zulu = tango.bind(entity)(offset, zulu);
                verify = zulu.descriptor;
                golf = _closure1_slot0;
                options = _closure1_slot2;
                mike = 9;
                mike = options[mike];
                tango = golf.bind(entity)(mike);
                zulu = tango.handleApplicationCommandSelected;
                mike = {};
                yankee = 21;
                yankee = options[yankee];
                yankee = golf.bind(entity)(yankee);
                yankee = yankee.ApplicationCommandTriggerLocations;
                yankee = yankee.APP_LAUNCHER_HOME_SEARCH;
                mike['location'] = yankee;
                mike['channel'] = offset;
                mike['command'] = oscar;
                mike['section'] = verify;
                oscar = new Array(1);
                oscar[0] = verify;
                mike['sectionDescriptors'] = oscar;
                oscar = _closure2_slot7;
                mike['query'] = oscar;
                oscar = _closure2_slot5;
                mike['navigation'] = oscar;
                oscar = 14;
                oscar = options[oscar];
                oscar = golf.bind(entity)(oscar);
                oscar = oscar.AppLauncherSectionName;
                oscar = oscar.SEARCH;
                mike['sectionName'] = oscar;
                oscar = argBar;
                mike['searchResultsPosition'] = oscar;
                report = _closure2_slot1;
                mike['entrypoint'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            variable37 = source.bind(vacuum)(backup, update);
            vacuum = _closure1_slot4;
            source = vacuum.useCallback;
            update = new Array(2);
            update[0] = entity;
            update[1] = tango;
            backup = function(argFoo) {
                entity = argFoo;
                offset = entity.command;
                report = entity.searchResultsPosition;
                golf = _closure1_slot6;
                tango = _closure2_slot6;
                zulu = offset.applicationId;
                entity = undefined;
                zulu = golf.bind(entity)(tango, zulu);
                yankee = zulu.descriptor;
                options = _closure1_slot0;
                verify = _closure1_slot2;
                golf = 22;
                mike = verify[golf];
                tango = options.bind(entity)(mike);
                zulu = tango.trackCommandSelected;
                mike = {};
                mike['command'] = offset;
                offset = 21;
                offset = verify[offset];
                offset = options.bind(entity)(offset);
                offset = offset.ApplicationCommandTriggerLocations;
                offset = offset.APP_LAUNCHER_HOME_SEARCH;
                mike['location'] = offset;
                golf = verify[golf];
                offset = options.bind(entity)(golf);
                golf = offset.getCommandTriggerSection;
                golf = golf.bind(offset)(yankee);
                mike['triggerSection'] = golf;
                oscar = _closure2_slot7;
                golf = oscar.length;
                mike['queryLength'] = golf;
                golf = 14;
                golf = verify[golf];
                golf = options.bind(entity)(golf);
                golf = golf.AppLauncherSectionName;
                golf = golf.SEARCH;
                mike['sectionName'] = golf;
                mike['query'] = oscar;
                mike['searchResultsPosition'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            variable38 = source.bind(vacuum)(backup, update);
            source = _closure1_slot4;
            update = source.useCallback;
            backup = new Array(4);
            backup[0] = control;
            entity = entity.id;
            backup[1] = entity;
            backup[2] = tango;
            backup[3] = record;
            entity = function(argFoo) {
                entity = argFoo;
                report = entity.section;
                golf = entity.installOnDemand;
                oscar = entity.searchResultsPosition;
                verify = _closure1_slot0;
                offset = _closure1_slot2;
                entity = 9;
                mike = offset[entity];
                entity = undefined;
                tango = verify.bind(entity)(mike);
                zulu = tango.handleApplicationSelected;
                mike = {};
                options = 21;
                options = offset[options];
                options = verify.bind(entity)(options);
                options = options.ApplicationCommandTriggerLocations;
                options = options.APP_LAUNCHER_HOME_SEARCH;
                mike['location'] = options;
                mike['application'] = report;
                options = _closure2_slot5;
                mike['navigation'] = options;
                options = _closure2_slot6;
                options = options.id;
                mike['channelId'] = options;
                options = 14;
                options = offset[options];
                options = verify.bind(entity)(options);
                options = options.AppLauncherSectionName;
                options = options.SEARCH;
                mike['sectionName'] = options;
                mike['installOnDemand'] = golf;
                golf = _closure2_slot7;
                mike['query'] = golf;
                mike['searchResultsPosition'] = oscar;
                report = _closure2_slot1;
                mike['entrypoint'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            entity = update.bind(source)(entity, backup);
            _closure2_slot15 = entity;
            source = _closure1_slot4;
            update = source.useMemo;
            backup = new Array(2);
            backup[0] = kilo;
            backup[1] = verify;
            verify = function() {
                _fun118830: for(var _fun118830_ip = 0; ; ) switch(_fun118830_ip) {
 0:
                    mike = _closure2_slot9;
                    if(mike) { _fun118830_ip = 16; continue _fun118830 }
 10:
                    entity = _closure2_slot10;
                    _fun118830_ip = 23; continue _fun118830;
 16:
                    entity = _closure1_slot15;
 23:
                    return entity;
                }
            };
            vacuum = update.bind(source)(verify, backup);
            _closure2_slot16 = vacuum;
            verify = 23;
            verify = romeo[verify];
            backup = offset.bind(report)(verify);
            romeo = backup.useTrackSearchItems;
            offset = _closure1_slot18;
            verify = _closure1_slot19;
            verify = romeo.bind(backup)(offset, verify, tango);
            verify = verify.handleViewableItemsChanged;
            backup = _closure1_slot4;
            romeo = backup.useMemo;
            offset = new Array(4);
            offset[0] = output;
            offset[1] = sizing;
            offset[2] = kilo;
            offset[3] = oscar;
            oscar = function() {
                _fun118831: for(var _fun118831_ip = 0; ; ) switch(_fun118831_ip) {
 0:
                    report = _closure2_slot11;
                    tango = report.map;
                    zulu = function(argFoo) {
                        entity = {};
                        mike = _closure1_slot13;
                        mike = mike.LOCAL_APPLICATION;
                        entity['type'] = mike;
                        mike = argFoo;
                        entity['application'] = mike;
                        return entity;
                    };
                    report = tango.bind(report)(zulu);
                    zulu = global;
                    oscar = zulu.Set;
                    golf = _closure2_slot11;
                    tango = golf.map;
                    zulu = function(argFoo) {
                        entity = argFoo;
                        entity = entity.id;
                        return entity;
                    };
                    offset = tango.bind(golf)(zulu);
                    tango = oscar.prototype;
                    tango = Object.create(tango, {constructor: {value: oscar}});
                    yankee = tango;
                    zulu = new yankee[oscar](offset, verify);
                    zulu = zulu instanceof Object ? zulu : tango;
                    var _closure3_slot0 = zulu;
                    tango = _closure2_slot13;
                    zulu = null;
                    if(!(zulu == tango)) { _fun118831_ip = 95; continue _fun118831 }
 89:
                    golf = new Array(0);
                    _fun118831_ip = 99; continue _fun118831;
 95:
                    golf = _closure2_slot13;
 99:
                    oscar = golf.filter;
                    tango = function(argFoo) {
                        _fun118834: for(var _fun118834_ip = 0; ; ) switch(_fun118834_ip) {
 0:
                            mike = argFoo;
                            zulu = mike.type;
                            report = _closure1_slot0;
                            tango = _closure1_slot2;
                            entity = 24;
                            tango = tango[entity];
                            entity = undefined;
                            entity = report.bind(entity)(tango);
                            entity = entity.ApplicationDirectorySearchResultType;
                            entity = entity.CONNECTION;
                            entity = zulu !== entity;
                            if(!entity) { _fun118834_ip = 82; continue _fun118834 }
 52:
                            tango = _closure3_slot0;
                            zulu = tango.has;
                            mike = mike.data;
                            mike = mike.id;
                            mike = zulu.bind(tango)(mike);
                            entity = !mike;
 82:
                            return entity;
                        }
                    };
                    oscar = oscar.bind(golf)(tango);
                    tango = oscar.map;
                    mike = function(argFoo) {
                        entity = {};
                        mike = _closure1_slot13;
                        mike = mike.GLOBAL_APPLICATION;
                        entity['type'] = mike;
                        mike = argFoo;
                        mike = mike.data;
                        entity['application'] = mike;
                        return entity;
                    };
                    tango = tango.bind(oscar)(mike);
                    mike = _closure2_slot9;
                    if(mike) { _fun118831_ip = 242; continue _fun118831 }
 140:
                    mike = _closure2_slot12;
                    if(!(zulu != mike)) { _fun118831_ip = 197; continue _fun118831 }
 148:
                    mike = _closure2_slot12;
                    entity = _closure1_slot7;
                    entity = entity.FETCHING;
                    if(!(mike !== entity)) { _fun118831_ip = 197; continue _fun118831 }
 169:
                    entity = new Array(0);
                    options = 0;
                    offset = entity;
                    verify = report;
                    options = arraySpread(offset, verify, options);
                    offset = entity;
                    verify = tango;
                    mike = arraySpread(offset, verify, options);
                    _fun118831_ip = 240; continue _fun118831;
 197:
                    mike = new Array(0);
                    options = 0;
                    offset = mike;
                    verify = report;
                    options = arraySpread(offset, verify, options);
                    offset = mike;
                    verify = tango;
                    options = arraySpread(offset, verify, options);
                    verify = _closure1_slot16;
                    offset = mike;
                    zulu = arraySpread(offset, verify, options);
                    entity = mike;
 240:
                    _fun118831_ip = 249; continue _fun118831;
 242:
                    entity = _closure1_slot16;
 249:
                    return entity;
                }
            };
            romeo = romeo.bind(backup)(oscar, offset);
            _closure2_slot17 = romeo;
            oscar = vacuum.length;
            control = config === oscar;
            if(!control) { _fun118821_ip = 862; continue _fun118821 }
 853:
            oscar = romeo.length;
            control = config === oscar;
 862:
            backup = _closure1_slot4;
            offset = backup.useCallback;
            kilo = romeo.length;
            oscar = new Array(3);
            oscar[0] = kilo;
            oscar[1] = entity;
            oscar[2] = yankee;
            entity = function(argFoo) {
                _fun118836: for(var _fun118836_ip = 0; ; ) switch(_fun118836_ip) {
 0:
                    entity = argFoo;
                    mike = entity.item;
                    var _closure3_slot0 = mike;
                    golf = entity.index;
                    var _closure3_slot1 = golf;
                    tango = undefined;
                    var _closure3_slot2 = tango;
                    report = mike.type;
                    zulu = _closure1_slot13;
                    zulu = zulu.PLACERHOLDER;
                    if(!(report !== zulu)) { _fun118836_ip = 185; continue _fun118836 }
 54:
                    verify = mike.application;
                    _closure3_slot2 = verify;
                    zulu = _closure1_slot0;
                    offset = _closure1_slot2;
                    mike = 9;
                    mike = offset[mike];
                    report = zulu.bind(tango)(mike);
                    mike = report.getAppLauncherIconSource;
                    options = mike.bind(report)(verify);
                    report = _closure1_slot10;
                    mike = 26;
                    mike = offset[mike];
                    mike = zulu.bind(tango)(mike);
                    zulu = mike.BaseAppRow;
                    mike = {};
                    mike['application'] = verify;
                    mike['iconSource'] = options;
                    oscar = function() { // Original name: onPress
                        _fun118837: for(var _fun118837_ip = 0; ; ) switch(_fun118837_ip) {
 0:
                            zulu = _closure2_slot15;
                            mike = {};
                            tango = _closure3_slot2;
                            mike['section'] = tango;
                            tango = _closure3_slot0;
                            oscar = tango.type;
                            tango = _closure1_slot13;
                            tango = tango.GLOBAL_APPLICATION;
                            tango = oscar === tango;
                            if(tango) { _fun118837_ip = 72; continue _fun118837 }
 49:
                            oscar = _closure3_slot0;
                            oscar = oscar.type;
                            report = _closure1_slot13;
                            report = report.LOCAL_APPLICATION;
                            tango = oscar === report;
 72:
                            mike['installOnDemand'] = tango;
                            entity = _closure3_slot1;
                            mike['searchResultsPosition'] = entity;
                            entity = undefined;
                            entity = zulu.bind(entity)(mike);
                            return entity;
                        }
                    };
                    mike['onPress'] = oscar;
                    oscar = 0;
                    oscar = oscar === golf;
                    mike['isFirstRow'] = oscar;
                    oscar = _closure2_slot17;
                    options = oscar.length;
                    oscar = 1;
                    oscar = options - oscar;
                    oscar = golf === oscar;
                    mike['isLastRow'] = oscar;
                    mike = report.bind(tango)(zulu, mike);
                    return mike;
 185:
                    zulu = _closure1_slot10;
                    mike = _closure1_slot1;
                    report = _closure1_slot2;
                    entity = 25;
                    entity = report[entity];
                    mike = mike.bind(tango)(entity);
                    entity = {};
                    report = 0;
                    report = report === golf;
                    entity['isFirstRow'] = report;
                    report = _closure2_slot17;
                    options = report.length;
                    report = 1;
                    report = options - report;
                    report = golf === report;
                    entity['isLastRow'] = report;
                    report = {};
                    oscar = _closure2_slot4;
                    report['height'] = oscar;
                    entity['style'] = report;
                    entity = zulu.bind(tango)(mike, entity);
                    return entity;
                }
            };
            backup = offset.bind(backup)(entity, oscar);
            entity = _closure1_slot8;
            zulu = zulu + entity;
            _closure2_slot18 = zulu;
            offset = _closure1_slot0;
            output = _closure1_slot2;
            entity = 27;
            oscar = output[entity];
            offset = offset.bind(report)(oscar);
            oscar = offset.useAppLauncherFlashListProps;
            oscar = oscar.bind(offset)();
            sizing = _closure1_slot4;
            kilo = sizing.useCallback;
            offset = new Array(3);
            offset[0] = result;
            offset[1] = golf;
            offset[2] = yankee;
            golf = function(argFoo) {
                _fun118838: for(var _fun118838_ip = 0; ; ) switch(_fun118838_ip) {
 0:
                    zulu = argFoo;
                    entity = zulu.nativeEvent;
                    mike = entity.layoutMeasurement;
                    tango = mike.height;
                    mike = entity.contentOffset;
                    mike = mike.y;
                    tango = tango + mike;
                    entity = entity.contentSize;
                    report = entity.height;
                    oscar = _closure2_slot4;
                    mike = 3;
                    mike = mike * oscar;
                    mike = report - mike;
                    if(!(tango >= mike)) { _fun118838_ip = 77; continue _fun118838 }
 67:
                    tango = _closure2_slot14;
                    mike = undefined;
                    mike = tango.bind(mike)();
 77:
                    tango = _closure2_slot0;
                    mike = null;
                    if(!(mike != tango)) { _fun118838_ip = 98; continue _fun118838 }
 87:
                    mike = _closure2_slot0;
                    entity = undefined;
                    entity = mike.bind(entity)(zulu);
 98:
                    entity = undefined;
                    return entity;
                }
            };
            golf = kilo.bind(sizing)(golf, offset);
            result = _closure1_slot4;
            sizing = result.useMemo;
            offset = target.list;
            kilo = new Array(2);
            kilo[0] = offset;
            kilo[1] = zulu;
            offset = function() {
                entity = {};
                zulu = _closure2_slot2;
                tango = zulu.list;
                report = entity;
                zulu = copyDataProperties(report, tango);
                zulu = _closure2_slot18;
                mike = 'paddingBottom';
                entity[mike] = zulu;
                return entity;
            };
            sizing = sizing.bind(result)(offset, kilo);
            result = _closure1_slot4;
            kilo = result.useMemo;
            offset = new Array(1);
            offset[0] = zulu;
            zulu = function() {
                entity = {};
                mike = _closure2_slot18;
                entity['bottom'] = mike;
                return entity;
            };
            kilo = kilo.bind(result)(zulu, offset);
            result = _closure1_slot4;
            offset = result.useMemo;
            zulu = new Array(4);
            zulu[0] = yankee;
            update = romeo.length;
            zulu[1] = update;
            update = vacuum.length;
            zulu[2] = update;
            zulu[3] = echo;
            mike = function() {
                entity = {};
                tango = _closure2_slot4;
                zulu = _closure2_slot17;
                report = zulu.length;
                zulu = _closure2_slot16;
                zulu = zulu.length;
                zulu = report + zulu;
                zulu = tango * zulu;
                entity['height'] = zulu;
                mike = _closure2_slot3;
                entity['width'] = mike;
                return entity;
            };
            offset = offset.bind(result)(mike, zulu);
            zulu = _closure1_slot10;
            mike = _closure1_slot1;
            entity = output[entity];
            mike = mike.bind(report)(entity);
            entity = {};
            echo = _closure1_slot11;
            result = _closure1_slot12;
            output = {};
            update = vacuum.length;
            sequence = null;
            if(!(config !== update)) { _fun118821_ip = 1672; continue _fun118821 }
 1150:
            status = _closure1_slot11;
            context = _closure1_slot12;
            update = {};
            lima = _closure1_slot5;
            sierra = {};
            whiskey = target.commandsHeaderContainer;
            sierra['style'] = whiskey;
            variable40 = _closure1_slot10;
            variable41 = _closure1_slot0;
            variable42 = _closure1_slot2;
            variable46 = 28;
            whiskey = variable42[variable46];
            whiskey = variable41.bind(report)(whiskey);
            equality = whiskey.Text;
            whiskey = {'variant': 'text-md/medium', 'color': 'header-secondary'};
            variable44 = target.sectionHeader;
            whiskey['style'] = variable44;
            variable50 = 29;
            variable44 = variable42[variable50];
            variable44 = variable41.bind(report)(variable44);
            variable47 = variable44.intl;
            variable45 = variable47.string;
            variable44 = variable42[variable50];
            variable44 = variable41.bind(report)(variable44);
            variable44 = variable44.t;
            variable44 = variable44.0hKkS0;
            variable44 = variable45.bind(variable47)(variable44);
            whiskey['children'] = variable44;
            equality = variable40.bind(report)(equality, whiskey);
            whiskey = new Array(2);
            whiskey[0] = equality;
            variable40 = vacuum.length;
            equality = 30;
            equality = variable42[equality];
            equality = variable41.bind(report)(equality);
            equality = equality.COLLAPSED_LIST_ITEM_MAX;
            variable40 = variable40 > equality;
            equality = null;
            if(!variable40) { _fun118821_ip = 1591; continue _fun118821 }
 1329:
            variable42 = _closure1_slot10;
            variable41 = _closure1_slot0;
            variable44 = _closure1_slot2;
            variable40 = 31;
            variable40 = variable44[variable40];
            variable40 = variable41.bind(report)(variable40);
            variable41 = variable40.AnimatedPressableHighlight;
            variable40 = {};
            variable44 = target.commandsCTA;
            variable40['style'] = variable44;
            variable44 = target.commandsCTAUnderlayColor;
            variable44 = variable44.color;
            variable40['underlayColor'] = variable44;
            variable45 = _closure1_slot0;
            variable44 = _closure1_slot2;
            variable47 = variable44[variable50];
            variable47 = variable45.bind(report)(variable47);
            variable48 = variable47.intl;
            variable47 = variable48.string;
            variable44 = variable44[variable50];
            variable44 = variable45.bind(report)(variable44);
            variable45 = variable44.t;
            if(quebec) { _fun118821_ip = 1444; continue _fun118821 }
 1431:
            variable44 = variable45.xal319;
            variable44 = variable47.bind(variable48)(variable44);
            _fun118821_ip = 1455; continue _fun118821;
 1444:
            variable45 = variable45.nPGLFR;
            variable44 = variable47.bind(variable48)(variable45);
 1455:
            variable40['accessibilityLabel'] = variable44;
            variable40['onPress'] = variable43;
            variable45 = _closure1_slot10;
            variable44 = _closure1_slot0;
            variable43 = _closure1_slot2;
            variable43 = variable43[variable46];
            variable43 = variable44.bind(report)(variable43);
            variable44 = variable43.Text;
            variable43 = {'color': 'text-brand', 'variant': 'text-md/semibold'};
            variable47 = _closure1_slot0;
            variable46 = _closure1_slot2;
            variable48 = variable46[variable50];
            variable48 = variable47.bind(report)(variable48);
            variable49 = variable48.intl;
            variable48 = variable49.string;
            variable46 = variable46[variable50];
            variable46 = variable47.bind(report)(variable46);
            variable47 = variable46.t;
            if(quebec) { _fun118821_ip = 1560; continue _fun118821 }
 1547:
            variable46 = variable47.xal319;
            variable46 = variable48.bind(variable49)(variable46);
            _fun118821_ip = 1571; continue _fun118821;
 1560:
            variable47 = variable47.nPGLFR;
            variable46 = variable48.bind(variable49)(variable47);
 1571:
            variable43['children'] = variable46;
            variable43 = variable45.bind(report)(variable44, variable43);
            variable40['children'] = variable43;
            equality = variable42.bind(report)(variable41, variable40);
 1591:
            whiskey[1] = equality;
            sierra['children'] = whiskey;
            lima = status.bind(report)(lima, sierra);
            sierra = new Array(2);
            sierra[0] = lima;
            equality = _closure1_slot10;
            whiskey = _closure1_slot23;
            lima = {};
            lima['commandData'] = vacuum;
            lima['context'] = variable39;
            lima['beforeExecuteCommand'] = variable38;
            lima['onPressCommand'] = variable37;
            lima['onExecuteCommand'] = variable36;
            lima['expanded'] = quebec;
            lima = equality.bind(report)(whiskey, lima);
            sierra[1] = lima;
            update['children'] = sierra;
            sequence = status.bind(report)(context, update);
 1672:
            update = new Array(4);
            update[0] = sequence;
            vacuum = vacuum.length;
            sequence = vacuum > config;
            vacuum = null;
            if(!sequence) { _fun118821_ip = 1734; continue _fun118821 }
 1694:
            sequence = romeo.length;
            sequence = sequence > config;
            vacuum = null;
            if(!sequence) { _fun118821_ip = 1734; continue _fun118821 }
 1708:
            status = _closure1_slot10;
            context = _closure1_slot5;
            sequence = {};
            sierra = target.divider;
            sequence['style'] = sierra;
            vacuum = status.bind(report)(context, sequence);
 1734:
            update[1] = vacuum;
            sequence = romeo.length;
            vacuum = null;
            if(!(config !== sequence)) { _fun118821_ip = 1859; continue _fun118821 }
 1749:
            context = _closure1_slot10;
            lima = _closure1_slot0;
            whiskey = _closure1_slot2;
            sequence = 28;
            sequence = whiskey[sequence];
            sequence = lima.bind(report)(sequence);
            config = sequence.Text;
            sequence = {'variant': 'text-md/medium', 'color': 'header-secondary'};
            target = target.sectionHeader;
            sequence['style'] = target;
            target = 29;
            status = whiskey[target];
            status = lima.bind(report)(status);
            sierra = status.intl;
            status = sierra.string;
            target = whiskey[target];
            target = lima.bind(report)(target);
            target = target.t;
            target = target.PHjkRE;
            target = status.bind(sierra)(target);
            sequence['children'] = target;
            vacuum = context.bind(report)(config, sequence);
 1859:
            update[2] = vacuum;
            source = null;
            if(!control) { _fun118821_ip = 1938; continue _fun118821 }
 1868:
            sequence = _closure1_slot10;
            vacuum = _closure1_slot1;
            config = _closure1_slot2;
            control = 32;
            control = config[control];
            vacuum = vacuum.bind(report)(control);
            control = {};
            control['query'] = tango;
            context = _closure1_slot0;
            config = config[papa];
            config = context.bind(report)(config);
            config = config.AppLauncherEntrypoint;
            config = config.VOICE;
            config = record === config;
            control['showsGenericMessage'] = config;
            source = sequence.bind(report)(vacuum, control);
 1938:
            update[3] = source;
            output['children'] = update;
            output = echo.bind(report)(result, output);
            entity['ListHeaderComponent'] = output;
            entity['contentContainerStyle'] = sizing;
            entity['scrollIndicatorInsets'] = kilo;
            entity['renderItem'] = backup;
            foxtrot = _closure1_slot22;
            entity['keyExtractor'] = foxtrot;
            entity['data'] = romeo;
            entity['estimatedItemSize'] = yankee;
            entity['estimatedListSize'] = offset;
            offset = 'on-drag';
            entity['keyboardDismissMode'] = offset;
            offset = 'always';
            entity['keyboardShouldPersistTaps'] = offset;
            offset = false;
            entity['automaticallyAdjustsScrollIndicatorInsets'] = offset;
            entity['showsVerticalScrollIndicator'] = offset;
            entity['onViewableItemsChanged'] = verify;
            entity['preserveScrollMomentum'] = options;
            entity['onScroll'] = golf;
            golf = oscar.onScroll;
            entity['animatedOnScroll'] = golf;
            golf = oscar.scrollerRef;
            entity['ref'] = golf;
            golf = oscar.gestureRef;
            entity['simultaneousHandlers'] = golf;
            oscar = oscar.animatedProps;
            entity['animatedProps'] = oscar;
            entity = zulu.bind(report)(mike, entity, tango);
            return entity;
        }
    };
    mike = tango.bind(golf)(mike);
    tango = 33;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/app_launcher/native/screens/search/SearchLocalAndGlobalContentView.tsx';
    tango = report.bind(oscar)(tango);
    zulu['SearchLocalAndGlobalContentView'] = mike;
    return entity;
})();