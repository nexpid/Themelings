// app/modules/app_launcher/native/screens/search/SearchLocalAndGlobalContentView.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    romeon = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = romeon;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: getApplicationIdFromApplicationItem
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            report = michal.type;
            entity = _closure1_slot13;
            zuuluu = entity.PLACERHOLDER;
            entity = undefined;
            if(!(report !== zuuluu)) { _fun00002_ip = 53; continue _fun00001 }
 27:
            report = michal.application;
            zuuluu = null;
            zuuluu = zuuluu != report;
            entity = undefined;
            if(!zuuluu) { _fun00002_ip = 53; continue _fun00001 }
 43:
            michal = michal.application;
            entity = michal.id;
 53:
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = function(argFoo) { // Original name: getImpressionPropsFromApplicationItem
        entity = {};
        tangon = _closure1_slot18;
        zuuluu = undefined;
        michal = argFoo;
        michal = tangon.bind(zuuluu)(michal);
        entity['applicationId'] = michal;
        return entity;
    };
    var _closure1_slot19 = entity;
    entity = function(argFoo) { // Original name: CommandRow
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            romeon = entity.context;
            foxtra = entity.command;
            output = entity.application;
            oscard = entity.onPress;
            backup = entity.isFirstRow;
            golfie = entity.isLastRow;
            yankee = entity.beforeExecuteCommand;
            option = entity.onExecuteCommand;
            michal = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 9;
            entity = zuuluu[entity];
            tangon = undefined;
            michal = michal.bind(tangon)(entity);
            entity = michal.getAppLauncherIconSource;
            verify = entity.bind(michal)(output);
            entity = null;
            kiloes = entity != verify;
            if(!kiloes) { _fun00004_ip = 130; continue _fun00003 }
 93:
            zuuluu = _closure1_slot10;
            michal = _closure1_slot1;
            offset = _closure1_slot2;
            entity = 10;
            entity = offset[entity];
            michal = michal.bind(tangon)(entity);
            entity = {};
            entity['iconSource'] = verify;
            kiloes = zuuluu.bind(tangon)(michal, entity);
 130:
            zuuluu = _closure1_slot10;
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            entity = 11;
            entity = offset[entity];
            entity = verify.bind(tangon)(entity);
            michal = entity.TableRow;
            entity = {};
            entity['icon'] = kiloes;
            kiloes = foxtra.displayName;
            entity['label'] = kiloes;
            kiloes = 12;
            kiloes = offset[kiloes];
            sizing = verify.bind(tangon)(kiloes);
            kiloes = sizing.getSectionName;
            kiloes = kiloes.bind(sizing)(output);
            entity['subLabel'] = kiloes;
            kiloes = 1;
            entity['subLabelLineClamp'] = kiloes;
            entity['start'] = backup;
            entity['end'] = golfie;
            entity['onPress'] = oscard;
            golfie = _closure1_slot10;
            oscard = _closure1_slot1;
            report = 13;
            report = offset[report];
            oscard = oscard.bind(tangon)(report);
            report = {};
            report['command'] = foxtra;
            report['context'] = romeon;
            report['beforeExecuteCommand'] = yankee;
            report['onExecuteCommand'] = option;
            option = 14;
            option = offset[option];
            option = verify.bind(tangon)(option);
            option = option.AppLauncherSectionName;
            option = option.SEARCH;
            report['sectionName'] = option;
            report = golfie.bind(tangon)(oscard, report);
            entity['trailing'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    entity = function(argFoo) { // Original name: PlaceholderCommandRow
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            oscard = entity.isFirstRow;
            tangon = undefined;
            if(!(oscard === tangon)) { _fun00006_ip = 17; continue _fun00005 }
 15:
            oscard = false;
 17:
            report = entity.isLastRow;
            if(!(report === tangon)) { _fun00006_ip = 29; continue _fun00005 }
 27:
            report = false;
 29:
            entity = _closure1_slot17;
            offset = entity.bind(tangon)();
            michal = _closure1_slot0;
            option = _closure1_slot2;
            entity = 15;
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
            zuuluu = _closure1_slot10;
            entity = 11;
            entity = option[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.TableRow;
            entity = {};
            yankee = _closure1_slot10;
            verify = _closure1_slot5;
            option = {};
            romeon = offset.loadingCommandAppIcon;
            option['style'] = romeon;
            option = yankee.bind(tangon)(verify, option);
            entity['icon'] = option;
            yankee = _closure1_slot10;
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
            verify = _closure1_slot10;
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
            report = function() { // Original name: onPress
                entity = undefined;
                return entity;
            };
            entity['onPress'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot21 = entity;
    entity = function(argFoo, argBar) { // Original name: keyExtractor
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            zuuluu = argBar;
            tangon = entity.type;
            michal = _closure1_slot13;
            michal = michal.PLACERHOLDER;
            if(!(tangon !== michal)) { _fun00008_ip = 40; continue _fun00007 }
 28:
            entity = entity.application;
            entity = entity.id;
            _fun00008_ip = 49; continue _fun00007;
 40:
            michal = zuuluu.toString;
            entity = michal.bind(zuuluu)();
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
        golfie = entity.onPressCommand;
        var _closure2_slot3 = golfie;
        option = entity.onExecuteCommand;
        var _closure2_slot4 = option;
        report = entity.expanded;
        oscard = _closure1_slot4;
        tangon = oscard.useMemo;
        zuuluu = new Array(5);
        zuuluu[0] = yankee;
        zuuluu[1] = offset;
        zuuluu[2] = verify;
        zuuluu[3] = option;
        zuuluu[4] = golfie;
        michal = function() {
            zuuluu = _closure2_slot0;
            michal = zuuluu.map;
            entity = function(argFoo, argBar) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    michal = argFoo;
                    zuuluu = argBar;
                    var _closure4_slot0 = zuuluu;
                    zuuluu = _closure1_slot14;
                    if(!(michal !== zuuluu)) { _fun00010_ip = 51; continue _fun00009 }
 23:
                    zuuluu = michal.command;
                    var _closure4_slot1 = zuuluu;
                    michal = michal.application;
                    var _closure4_slot2 = michal;
                    michal = function(argFoo) {
                        entity = argFoo;
                        oscard = entity.isLastRow;
                        tangon = _closure1_slot10;
                        zuuluu = _closure1_slot20;
                        michal = {};
                        golfie = _closure2_slot1;
                        michal['context'] = golfie;
                        option = _closure4_slot1;
                        michal['command'] = option;
                        option = _closure4_slot2;
                        michal['application'] = option;
                        option = function() { // Original name: onPress
                            tangon = _closure2_slot3;
                            zuuluu = _closure4_slot1;
                            michal = _closure4_slot0;
                            entity = undefined;
                            entity = tangon.bind(entity)(zuuluu, michal);
                            return entity;
                        };
                        michal['onPress'] = option;
                        option = _closure4_slot0;
                        golfie = 0;
                        golfie = golfie === option;
                        michal['isFirstRow'] = golfie;
                        michal['isLastRow'] = oscard;
                        report = function() { // Original name: beforeExecuteCommand
                            zuuluu = _closure2_slot2;
                            michal = {};
                            tangon = _closure4_slot1;
                            michal['command'] = tangon;
                            entity = _closure4_slot0;
                            michal['searchResultsPosition'] = entity;
                            entity = undefined;
                            entity = zuuluu.bind(entity)(michal);
                            return entity;
                        };
                        michal['beforeExecuteCommand'] = report;
                        entity = _closure2_slot4;
                        michal['onExecuteCommand'] = entity;
                        entity = undefined;
                        entity = tangon.bind(entity)(zuuluu, michal);
                        return entity;
                    };
                    return michal;
 51:
                    entity = function(argFoo) {
                        entity = argFoo;
                        entity = entity.isLastRow;
                        tangon = _closure1_slot10;
                        zuuluu = _closure1_slot21;
                        michal = {};
                        oscard = _closure4_slot0;
                        report = 0;
                        report = report === oscard;
                        michal['isFirstRow'] = report;
                        michal['isLastRow'] = entity;
                        entity = undefined;
                        entity = tangon.bind(entity)(zuuluu, michal);
                        return entity;
                    };
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        oscard = tangon.bind(oscard)(michal, zuuluu);
        tangon = _closure1_slot10;
        michal = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 30;
        entity = zuuluu[entity];
        zuuluu = undefined;
        michal = michal.bind(zuuluu)(entity);
        entity = {};
        entity['items'] = oscard;
        entity['expandedOverride'] = report;
        report = false;
        entity['showsExpandCTAOverride'] = report;
        entity = tangon.bind(zuuluu)(michal, entity);
        return entity;
    };
    var _closure1_slot23 = entity;
    tangon = global;
    verify = tangon.Object;
    option = verify.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, golfie);
    sizing = 0;
    golfie = oscard[sizing];
    entity = undefined;
    golfie = romeon.bind(entity)(golfie);
    var _closure1_slot3 = golfie;
    backup = 1;
    option = oscard[backup];
    golfie = argCor;
    golfie = golfie.bind(entity)(option);
    var _closure1_slot4 = golfie;
    yankee = 2;
    option = oscard[yankee];
    option = report.bind(entity)(option);
    option = option.View;
    var _closure1_slot5 = option;
    verify = 3;
    option = oscard[verify];
    option = report.bind(entity)(option);
    option = option.getSection;
    var _closure1_slot6 = option;
    option = 4;
    option = oscard[option];
    option = report.bind(entity)(option);
    option = option.FetchState;
    var _closure1_slot7 = option;
    option = 5;
    option = oscard[option];
    option = report.bind(entity)(option);
    foxtra = option.DEFAULT_CONTENT_PADDING;
    var _closure1_slot8 = foxtra;
    option = option.useAppLauncherNavigation;
    var _closure1_slot9 = option;
    kiloes = 6;
    option = oscard[kiloes];
    option = report.bind(entity)(option);
    offset = option.jsx;
    var _closure1_slot10 = offset;
    offset = option.jsxs;
    var _closure1_slot11 = offset;
    option = option.Fragment;
    var _closure1_slot12 = option;
    offset = {};
    offset['PLACERHOLDER'] = sizing;
    option = 'PLACERHOLDER';
    offset[sizing] = option;
    offset['LOCAL_APPLICATION'] = backup;
    option = 'LOCAL_APPLICATION';
    offset[backup] = option;
    offset['GLOBAL_APPLICATION'] = yankee;
    option = 'GLOBAL_APPLICATION';
    offset[yankee] = option;
    var _closure1_slot13 = offset;
    backup = 'placeholder';
    var _closure1_slot14 = backup;
    option = tangon.Array;
    yankee = option.prototype;
    yankee = Object.create(yankee, {constructor: {value: option}});
    update = yankee;
    echoed = kiloes;
    option = new update[option](echoed, result);
    yankee = option instanceof Object ? option : yankee;
    option = yankee.fill;
    option = option.bind(yankee)(backup);
    var _closure1_slot15 = option;
    tangon = tangon.Array;
    option = tangon.prototype;
    option = Object.create(option, {constructor: {value: tangon}});
    update = option;
    echoed = verify;
    tangon = new update[tangon](echoed, result);
    verify = tangon instanceof Object ? tangon : option;
    option = verify.fill;
    tangon = {};
    offset = offset.PLACERHOLDER;
    tangon['type'] = offset;
    tangon = option.bind(verify)(tangon);
    var _closure1_slot16 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    verify = report.bind(entity)(tangon);
    option = verify.createStyles;
    tangon = {};
    offset = {};
    yankee = 8;
    offset['marginBottom'] = yankee;
    tangon['sectionHeader'] = offset;
    offset = {};
    offset['paddingHorizontal'] = foxtra;
    foxtra = oscard[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.colors;
    foxtra = foxtra.BG_BASE_SECONDARY;
    offset['backgroundColor'] = foxtra;
    tangon['list'] = offset;
    offset = {'width': 32, 'height': 32};
    foxtra = oscard[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.radii;
    foxtra = foxtra.sm;
    offset['borderRadius'] = foxtra;
    foxtra = oscard[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.colors;
    foxtra = foxtra.BG_MOD_SUBTLE;
    offset['backgroundColor'] = foxtra;
    tangon['loadingCommandAppIcon'] = offset;
    offset = {'backgroundColor': null, 'height': 16, 'marginBottom': 4, 'borderRadius': null, 'alignSelf': 'flex-start'};
    foxtra = oscard[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.colors;
    foxtra = foxtra.BG_MOD_SUBTLE;
    offset['backgroundColor'] = foxtra;
    backup = 16;
    foxtra = oscard[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.radii;
    foxtra = foxtra.lg;
    offset['borderRadius'] = foxtra;
    foxtra = 'flex-start';
    tangon['loadingTextPlaceholder'] = offset;
    offset = {};
    kiloes = oscard[yankee];
    kiloes = romeon.bind(entity)(kiloes);
    kiloes = kiloes.colors;
    kiloes = kiloes.BG_MOD_SUBTLE;
    offset['backgroundColor'] = kiloes;
    offset['height'] = backup;
    backup = oscard[yankee];
    backup = romeon.bind(entity)(backup);
    backup = backup.radii;
    backup = backup.lg;
    offset['borderRadius'] = backup;
    offset['alignSelf'] = foxtra;
    tangon['loadingTextPlaceholderSmall'] = offset;
    offset = {};
    foxtra = oscard[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.spacing;
    foxtra = foxtra.PX_16;
    offset['marginTop'] = foxtra;
    tangon['divider'] = offset;
    offset = {'justifyContent': 'space-between', 'flexDirection': 'row'};
    tangon['commandsHeaderContainer'] = offset;
    offset = {};
    foxtra = oscard[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.radii;
    foxtra = foxtra.sm;
    offset['borderRadius'] = foxtra;
    foxtra = oscard[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.spacing;
    foxtra = foxtra.PX_4;
    offset['paddingHorizontal'] = foxtra;
    foxtra = oscard[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.spacing;
    foxtra = foxtra.PX_4;
    offset['marginBottom'] = foxtra;
    foxtra = 'center';
    offset['justifyContent'] = foxtra;
    tangon['commandsCTA'] = offset;
    offset = {};
    yankee = oscard[yankee];
    yankee = romeon.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.BG_SURFACE_RAISED;
    offset['color'] = yankee;
    tangon['commandsCTAUnderlayColor'] = offset;
    tangon = option.bind(verify)(tangon);
    var _closure1_slot17 = tangon;
    tangon = golfie.forwardRef;
    michal = function(argFoo, argBar) {
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            variable39 = entity.context;
            var _closure2_slot0 = variable39;
            golfie = entity.onScroll;
            var _closure2_slot1 = golfie;
            variable36 = entity.onSend;
            record = entity.entrypoint;
            var _closure2_slot2 = record;
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
            var _closure2_slot3 = target;
            tangon = _closure1_slot1;
            verify = _closure1_slot2;
            entity = 16;
            entity = verify[entity];
            entity = tangon.bind(report)(entity);
            entity = entity.bind(report)();
            zuuluu = entity.bottom;
            entity = 17;
            entity = verify[entity];
            entity = tangon.bind(report)(entity);
            entity = entity.bind(report)();
            echoed = entity.width;
            var _closure2_slot4 = echoed;
            entity = 18;
            entity = verify[entity];
            entity = tangon.bind(report)(entity);
            yankee = entity.bind(report)();
            var _closure2_slot5 = yankee;
            entity = _closure1_slot9;
            entity = entity.bind(report)();
            var _closure2_slot6 = entity;
            option = _closure1_slot4;
            oscard = option.useState;
            tangon = '';
            option = oscard.bind(option)(tangon);
            oscard = _closure1_slot3;
            tangon = 2;
            option = oscard.bind(report)(option, tangon);
            config = 0;
            tangon = option[config];
            var _closure2_slot7 = tangon;
            oscard = 1;
            oscard = option[oscard];
            var _closure2_slot8 = oscard;
            romeon = _closure1_slot4;
            offset = romeon.useImperativeHandle;
            option = argBar;
            oscard = function() {
                entity = {};
                michal = _closure2_slot8;
                entity['setQuery'] = michal;
                return entity;
            };
            oscard = offset.bind(romeon)(option, oscard);
            option = _closure1_slot0;
            oscard = 19;
            oscard = verify[oscard];
            verify = option.bind(report)(oscard);
            option = verify.useIsActivitiesInTextEnabled;
            romeon = variable39.type;
            offset = 'channel';
            oscard = undefined;
            if(!(offset === romeon)) { _fun00012_ip = 308; continue _fun00011 }
 298:
            offset = variable39.channel;
            oscard = offset.id;
 308:
            romeon = option.bind(verify)(oscard);
            kiloes = _closure1_slot0;
            offset = _closure1_slot2;
            oscard = 20;
            option = offset[oscard];
            backup = kiloes.bind(report)(option);
            verify = backup.useLocalSearchResults;
            option = {};
            option['context'] = variable39;
            option['query'] = tangon;
            option['commandLimit'] = oscard;
            sizing = 10;
            option['applicationLimit'] = sizing;
            papara = 14;
            offset = offset[papara];
            offset = kiloes.bind(report)(offset);
            offset = offset.AppLauncherEntrypoint;
            offset = offset.VOICE;
            offset = record === offset;
            if(offset) { _fun00012_ip = 396; continue _fun00011 }
 393:
            offset = romeon;
 396:
            option['searchesActivities'] = offset;
            offset = _closure1_slot0;
            romeon = _closure1_slot2;
            kiloes = romeon[papara];
            kiloes = offset.bind(report)(kiloes);
            kiloes = kiloes.AppLauncherEntrypoint;
            kiloes = kiloes.TEXT;
            kiloes = record === kiloes;
            option['searchesCommands'] = kiloes;
            kiloes = romeon[papara];
            kiloes = offset.bind(report)(kiloes);
            kiloes = kiloes.AppLauncherEntrypoint;
            kiloes = kiloes.TEXT;
            kiloes = record === kiloes;
            option['searchesBots'] = kiloes;
            option = verify.bind(backup)(option);
            kiloes = option.loading;
            _closure2_slot9 = kiloes;
            verify = option.commandResults;
            _closure2_slot10 = verify;
            output = option.applicationResults;
            _closure2_slot11 = output;
            oscard = romeon[oscard];
            sizing = offset.bind(report)(oscard);
            backup = sizing.useGlobalSearchResults;
            oscard = {};
            oscard['query'] = tangon;
            oscard['context'] = variable39;
            option = true;
            oscard['fetches'] = option;
            oscard['entrypoint'] = record;
            backup = backup.bind(sizing)(oscard);
            oscard = backup.fetchState;
            _closure2_slot12 = oscard;
            sizing = backup.applicationResults;
            _closure2_slot13 = sizing;
            result = backup.fetchNextPage;
            _closure2_slot14 = result;
            backup = function(argFoo) { // Original name: useCommandsExpanded
                report = _closure1_slot4;
                tangon = report.useState;
                entity = false;
                oscard = tangon.bind(report)(entity);
                report = _closure1_slot3;
                tangon = undefined;
                entity = 2;
                report = report.bind(tangon)(oscard, entity);
                entity = 0;
                tangon = report[entity];
                entity = 1;
                entity = report[entity];
                var _closure3_slot0 = entity;
                golfie = _closure1_slot4;
                oscard = golfie.useEffect;
                report = new Array(1);
                entity = argFoo;
                report[0] = entity;
                entity = function() {
                    zuuluu = _closure3_slot0;
                    entity = undefined;
                    michal = false;
                    michal = zuuluu.bind(entity)(michal);
                    return entity;
                };
                entity = oscard.bind(golfie)(entity, report);
                entity = {};
                entity['isCommandsExpanded'] = tangon;
                report = _closure1_slot4;
                tangon = report.useCallback;
                zuuluu = function() {
                    zuuluu = _closure3_slot0;
                    entity = undefined;
                    michal = function(argFoo) {
                        entity = argFoo;
                        entity = !entity;
                        return entity;
                    };
                    michal = zuuluu.bind(entity)(michal);
                    return entity;
                };
                michal = new Array(0);
                michal = tangon.bind(report)(zuuluu, michal);
                entity['toggleCommandsExpanded'] = michal;
                return entity;
            };
            backup = backup.bind(report)(tangon);
            quebec = backup.isCommandsExpanded;
            variable43 = backup.toggleCommandsExpanded;
            ctrled = _closure1_slot4;
            source = ctrled.useCallback;
            update = new Array(4);
            update[0] = variable39;
            update[1] = record;
            update[2] = entity;
            update[3] = tangon;
            backup = function(argFoo, argBar) {
                oscard = argFoo;
                tangon = _closure1_slot6;
                offset = _closure2_slot0;
                zuuluu = oscard.applicationId;
                entity = undefined;
                zuuluu = tangon.bind(entity)(offset, zuuluu);
                verify = zuuluu.descriptor;
                golfie = _closure1_slot0;
                option = _closure1_slot2;
                michal = 9;
                michal = option[michal];
                tangon = golfie.bind(entity)(michal);
                zuuluu = tangon.handleApplicationCommandSelected;
                michal = {};
                yankee = 21;
                yankee = option[yankee];
                yankee = golfie.bind(entity)(yankee);
                yankee = yankee.ApplicationCommandTriggerLocations;
                yankee = yankee.APP_LAUNCHER_HOME_SEARCH;
                michal['location'] = yankee;
                michal['context'] = offset;
                michal['command'] = oscard;
                michal['section'] = verify;
                oscard = new Array(1);
                oscard[0] = verify;
                michal['sectionDescriptors'] = oscard;
                oscard = _closure2_slot7;
                michal['query'] = oscard;
                oscard = _closure2_slot6;
                michal['navigation'] = oscard;
                oscard = 14;
                oscard = option[oscard];
                oscard = golfie.bind(entity)(oscard);
                oscard = oscard.AppLauncherSectionName;
                oscard = oscard.SEARCH;
                michal['sectionName'] = oscard;
                oscard = argBar;
                michal['searchResultsPosition'] = oscard;
                report = _closure2_slot2;
                michal['entrypoint'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            variable37 = source.bind(ctrled)(backup, update);
            ctrled = _closure1_slot4;
            source = ctrled.useCallback;
            update = new Array(2);
            update[0] = variable39;
            update[1] = tangon;
            backup = function(argFoo) {
                entity = argFoo;
                offset = entity.command;
                report = entity.searchResultsPosition;
                golfie = _closure1_slot6;
                tangon = _closure2_slot0;
                zuuluu = offset.applicationId;
                entity = undefined;
                zuuluu = golfie.bind(entity)(tangon, zuuluu);
                yankee = zuuluu.descriptor;
                option = _closure1_slot0;
                verify = _closure1_slot2;
                golfie = 22;
                michal = verify[golfie];
                tangon = option.bind(entity)(michal);
                zuuluu = tangon.trackCommandSelected;
                michal = {};
                michal['command'] = offset;
                offset = 21;
                offset = verify[offset];
                offset = option.bind(entity)(offset);
                offset = offset.ApplicationCommandTriggerLocations;
                offset = offset.APP_LAUNCHER_HOME_SEARCH;
                michal['location'] = offset;
                golfie = verify[golfie];
                offset = option.bind(entity)(golfie);
                golfie = offset.getCommandTriggerSection;
                golfie = golfie.bind(offset)(yankee);
                michal['triggerSection'] = golfie;
                oscard = _closure2_slot7;
                golfie = oscard.length;
                michal['queryLength'] = golfie;
                golfie = 14;
                golfie = verify[golfie];
                golfie = option.bind(entity)(golfie);
                golfie = golfie.AppLauncherSectionName;
                golfie = golfie.SEARCH;
                michal['sectionName'] = golfie;
                michal['query'] = oscard;
                michal['searchResultsPosition'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            variable38 = source.bind(ctrled)(backup, update);
            source = _closure1_slot4;
            update = source.useCallback;
            backup = new Array(4);
            backup[0] = entity;
            backup[1] = variable39;
            backup[2] = tangon;
            backup[3] = record;
            entity = function(argFoo) {
                entity = argFoo;
                report = entity.section;
                golfie = entity.installOnDemand;
                oscard = entity.searchResultsPosition;
                verify = _closure1_slot0;
                offset = _closure1_slot2;
                entity = 9;
                michal = offset[entity];
                entity = undefined;
                tangon = verify.bind(entity)(michal);
                zuuluu = tangon.handleApplicationSelected;
                michal = {};
                option = 21;
                option = offset[option];
                option = verify.bind(entity)(option);
                option = option.ApplicationCommandTriggerLocations;
                option = option.APP_LAUNCHER_HOME_SEARCH;
                michal['location'] = option;
                michal['application'] = report;
                option = _closure2_slot6;
                michal['navigation'] = option;
                option = _closure2_slot0;
                michal['context'] = option;
                option = 14;
                option = offset[option];
                option = verify.bind(entity)(option);
                option = option.AppLauncherSectionName;
                option = option.SEARCH;
                michal['sectionName'] = option;
                michal['installOnDemand'] = golfie;
                golfie = _closure2_slot7;
                michal['query'] = golfie;
                michal['searchResultsPosition'] = oscard;
                report = _closure2_slot2;
                michal['entrypoint'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            entity = update.bind(source)(entity, backup);
            _closure2_slot15 = entity;
            source = _closure1_slot4;
            update = source.useMemo;
            backup = new Array(2);
            backup[0] = kiloes;
            backup[1] = verify;
            verify = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    michal = _closure2_slot9;
                    if(michal) { _fun00014_ip = 16; continue _fun00013 }
 10:
                    entity = _closure2_slot10;
                    _fun00014_ip = 23; continue _fun00013;
 16:
                    entity = _closure1_slot15;
 23:
                    return entity;
                }
            };
            vacuum = update.bind(source)(verify, backup);
            _closure2_slot16 = vacuum;
            verify = 23;
            verify = romeon[verify];
            backup = offset.bind(report)(verify);
            romeon = backup.useTrackSearchItems;
            offset = _closure1_slot18;
            verify = _closure1_slot19;
            verify = romeon.bind(backup)(offset, verify, tangon);
            verify = verify.handleViewableItemsChanged;
            backup = _closure1_slot4;
            romeon = backup.useMemo;
            offset = new Array(4);
            offset[0] = output;
            offset[1] = sizing;
            offset[2] = kiloes;
            offset[3] = oscard;
            oscard = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    report = _closure2_slot11;
                    tangon = report.map;
                    zuuluu = function(argFoo) {
                        entity = {};
                        michal = _closure1_slot13;
                        michal = michal.LOCAL_APPLICATION;
                        entity['type'] = michal;
                        michal = argFoo;
                        entity['application'] = michal;
                        return entity;
                    };
                    report = tangon.bind(report)(zuuluu);
                    zuuluu = global;
                    oscard = zuuluu.Set;
                    golfie = _closure2_slot11;
                    tangon = golfie.map;
                    zuuluu = function(argFoo) {
                        entity = argFoo;
                        entity = entity.id;
                        return entity;
                    };
                    offset = tangon.bind(golfie)(zuuluu);
                    tangon = oscard.prototype;
                    tangon = Object.create(tangon, {constructor: {value: oscard}});
                    yankee = tangon;
                    zuuluu = new yankee[oscard](offset, verify);
                    zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
                    var _closure3_slot0 = zuuluu;
                    tangon = _closure2_slot13;
                    zuuluu = null;
                    if(!(zuuluu == tangon)) { _fun00016_ip = 95; continue _fun00015 }
 89:
                    golfie = new Array(0);
                    _fun00016_ip = 99; continue _fun00015;
 95:
                    golfie = _closure2_slot13;
 99:
                    oscard = golfie.filter;
                    tangon = function(argFoo) {
                        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                            michal = argFoo;
                            zuuluu = michal.type;
                            report = _closure1_slot0;
                            tangon = _closure1_slot2;
                            entity = 24;
                            tangon = tangon[entity];
                            entity = undefined;
                            entity = report.bind(entity)(tangon);
                            entity = entity.ApplicationDirectorySearchResultType;
                            entity = entity.CONNECTION;
                            entity = zuuluu !== entity;
                            if(!entity) { _fun00018_ip = 82; continue _fun00017 }
 52:
                            tangon = _closure3_slot0;
                            zuuluu = tangon.has;
                            michal = michal.data;
                            michal = michal.id;
                            michal = zuuluu.bind(tangon)(michal);
                            entity = !michal;
 82:
                            return entity;
                        }
                    };
                    oscard = oscard.bind(golfie)(tangon);
                    tangon = oscard.map;
                    michal = function(argFoo) {
                        entity = {};
                        michal = _closure1_slot13;
                        michal = michal.GLOBAL_APPLICATION;
                        entity['type'] = michal;
                        michal = argFoo;
                        michal = michal.data;
                        entity['application'] = michal;
                        return entity;
                    };
                    tangon = tangon.bind(oscard)(michal);
                    michal = _closure2_slot9;
                    if(michal) { _fun00016_ip = 242; continue _fun00015 }
 140:
                    michal = _closure2_slot12;
                    if(!(zuuluu != michal)) { _fun00016_ip = 197; continue _fun00015 }
 148:
                    michal = _closure2_slot12;
                    entity = _closure1_slot7;
                    entity = entity.FETCHING;
                    if(!(michal !== entity)) { _fun00016_ip = 197; continue _fun00015 }
 169:
                    entity = new Array(0);
                    option = 0;
                    offset = entity;
                    verify = report;
                    option = arraySpread(offset, verify, option);
                    offset = entity;
                    verify = tangon;
                    michal = arraySpread(offset, verify, option);
                    _fun00016_ip = 240; continue _fun00015;
 197:
                    michal = new Array(0);
                    option = 0;
                    offset = michal;
                    verify = report;
                    option = arraySpread(offset, verify, option);
                    offset = michal;
                    verify = tangon;
                    option = arraySpread(offset, verify, option);
                    verify = _closure1_slot16;
                    offset = michal;
                    zuuluu = arraySpread(offset, verify, option);
                    entity = michal;
 240:
                    _fun00016_ip = 249; continue _fun00015;
 242:
                    entity = _closure1_slot16;
 249:
                    return entity;
                }
            };
            romeon = romeon.bind(backup)(oscard, offset);
            _closure2_slot17 = romeon;
            oscard = vacuum.length;
            ctrled = config === oscard;
            if(!ctrled) { _fun00012_ip = 866; continue _fun00011 }
 857:
            oscard = romeon.length;
            ctrled = config === oscard;
 866:
            backup = _closure1_slot4;
            offset = backup.useCallback;
            kiloes = romeon.length;
            oscard = new Array(3);
            oscard[0] = kiloes;
            oscard[1] = entity;
            oscard[2] = yankee;
            entity = function(argFoo) {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    entity = argFoo;
                    michal = entity.item;
                    var _closure3_slot0 = michal;
                    golfie = entity.index;
                    var _closure3_slot1 = golfie;
                    tangon = undefined;
                    var _closure3_slot2 = tangon;
                    report = michal.type;
                    zuuluu = _closure1_slot13;
                    zuuluu = zuuluu.PLACERHOLDER;
                    if(!(report !== zuuluu)) { _fun00020_ip = 185; continue _fun00019 }
 54:
                    verify = michal.application;
                    _closure3_slot2 = verify;
                    zuuluu = _closure1_slot0;
                    offset = _closure1_slot2;
                    michal = 9;
                    michal = offset[michal];
                    report = zuuluu.bind(tangon)(michal);
                    michal = report.getAppLauncherIconSource;
                    option = michal.bind(report)(verify);
                    report = _closure1_slot10;
                    michal = 26;
                    michal = offset[michal];
                    michal = zuuluu.bind(tangon)(michal);
                    zuuluu = michal.BaseAppRow;
                    michal = {};
                    michal['application'] = verify;
                    michal['iconSource'] = option;
                    oscard = function() { // Original name: onPress
                        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                            zuuluu = _closure2_slot15;
                            michal = {};
                            tangon = _closure3_slot2;
                            michal['section'] = tangon;
                            tangon = _closure3_slot0;
                            oscard = tangon.type;
                            tangon = _closure1_slot13;
                            tangon = tangon.GLOBAL_APPLICATION;
                            tangon = oscard === tangon;
                            if(tangon) { _fun00022_ip = 72; continue _fun00021 }
 49:
                            oscard = _closure3_slot0;
                            oscard = oscard.type;
                            report = _closure1_slot13;
                            report = report.LOCAL_APPLICATION;
                            tangon = oscard === report;
 72:
                            michal['installOnDemand'] = tangon;
                            entity = _closure3_slot1;
                            michal['searchResultsPosition'] = entity;
                            entity = undefined;
                            entity = zuuluu.bind(entity)(michal);
                            return entity;
                        }
                    };
                    michal['onPress'] = oscard;
                    oscard = 0;
                    oscard = oscard === golfie;
                    michal['isFirstRow'] = oscard;
                    oscard = _closure2_slot17;
                    option = oscard.length;
                    oscard = 1;
                    oscard = option - oscard;
                    oscard = golfie === oscard;
                    michal['isLastRow'] = oscard;
                    michal = report.bind(tangon)(zuuluu, michal);
                    return michal;
 185:
                    zuuluu = _closure1_slot10;
                    michal = _closure1_slot1;
                    report = _closure1_slot2;
                    entity = 25;
                    entity = report[entity];
                    michal = michal.bind(tangon)(entity);
                    entity = {};
                    report = 0;
                    report = report === golfie;
                    entity['isFirstRow'] = report;
                    report = _closure2_slot17;
                    option = report.length;
                    report = 1;
                    report = option - report;
                    report = golfie === report;
                    entity['isLastRow'] = report;
                    report = {};
                    oscard = _closure2_slot5;
                    report['height'] = oscard;
                    entity['style'] = report;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
                }
            };
            backup = offset.bind(backup)(entity, oscard);
            entity = _closure1_slot8;
            zuuluu = zuuluu + entity;
            _closure2_slot18 = zuuluu;
            offset = _closure1_slot0;
            output = _closure1_slot2;
            entity = 27;
            oscard = output[entity];
            offset = offset.bind(report)(oscard);
            oscard = offset.useAppLauncherFlashListProps;
            oscard = oscard.bind(offset)();
            sizing = _closure1_slot4;
            kiloes = sizing.useCallback;
            offset = new Array(3);
            offset[0] = result;
            offset[1] = golfie;
            offset[2] = yankee;
            golfie = function(argFoo) {
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    zuuluu = argFoo;
                    entity = zuuluu.nativeEvent;
                    michal = entity.layoutMeasurement;
                    tangon = michal.height;
                    michal = entity.contentOffset;
                    michal = michal.y;
                    tangon = tangon + michal;
                    entity = entity.contentSize;
                    report = entity.height;
                    oscard = _closure2_slot5;
                    michal = 3;
                    michal = michal * oscard;
                    michal = report - michal;
                    if(!(tangon >= michal)) { _fun00024_ip = 77; continue _fun00023 }
 67:
                    tangon = _closure2_slot14;
                    michal = undefined;
                    michal = tangon.bind(michal)();
 77:
                    tangon = _closure2_slot1;
                    michal = null;
                    if(!(michal != tangon)) { _fun00024_ip = 98; continue _fun00023 }
 87:
                    michal = _closure2_slot1;
                    entity = undefined;
                    entity = michal.bind(entity)(zuuluu);
 98:
                    entity = undefined;
                    return entity;
                }
            };
            golfie = kiloes.bind(sizing)(golfie, offset);
            result = _closure1_slot4;
            sizing = result.useMemo;
            offset = target.list;
            kiloes = new Array(2);
            kiloes[0] = offset;
            kiloes[1] = zuuluu;
            offset = function() {
                entity = {};
                zuuluu = _closure2_slot3;
                tangon = zuuluu.list;
                report = entity;
                zuuluu = copyDataProperties(report, tangon);
                zuuluu = _closure2_slot18;
                michal = 'paddingBottom';
                entity[michal] = zuuluu;
                return entity;
            };
            sizing = sizing.bind(result)(offset, kiloes);
            result = _closure1_slot4;
            kiloes = result.useMemo;
            offset = new Array(1);
            offset[0] = zuuluu;
            zuuluu = function() {
                entity = {};
                michal = _closure2_slot18;
                entity['bottom'] = michal;
                return entity;
            };
            kiloes = kiloes.bind(result)(zuuluu, offset);
            result = _closure1_slot4;
            offset = result.useMemo;
            zuuluu = new Array(4);
            zuuluu[0] = yankee;
            update = romeon.length;
            zuuluu[1] = update;
            update = vacuum.length;
            zuuluu[2] = update;
            zuuluu[3] = echoed;
            michal = function() {
                entity = {};
                tangon = _closure2_slot5;
                zuuluu = _closure2_slot17;
                report = zuuluu.length;
                zuuluu = _closure2_slot16;
                zuuluu = zuuluu.length;
                zuuluu = report + zuuluu;
                zuuluu = tangon * zuuluu;
                entity['height'] = zuuluu;
                michal = _closure2_slot4;
                entity['width'] = michal;
                return entity;
            };
            offset = offset.bind(result)(michal, zuuluu);
            zuuluu = _closure1_slot10;
            michal = _closure1_slot1;
            entity = output[entity];
            michal = michal.bind(report)(entity);
            entity = {};
            echoed = _closure1_slot11;
            result = _closure1_slot12;
            output = {};
            update = vacuum.length;
            sequen = null;
            if(!(config !== update)) { _fun00012_ip = 1676; continue _fun00011 }
 1154:
            status = _closure1_slot11;
            cntext = _closure1_slot12;
            update = {};
            limora = _closure1_slot5;
            sierra = {};
            whisks = target.commandsHeaderContainer;
            sierra['style'] = whisks;
            variable40 = _closure1_slot10;
            variable41 = _closure1_slot0;
            variable42 = _closure1_slot2;
            variable46 = 28;
            whisks = variable42[variable46];
            whisks = variable41.bind(report)(whisks);
            equals = whisks.Text;
            whisks = {'variant': 'text-md/medium', 'color': 'header-secondary'};
            variable44 = target.sectionHeader;
            whisks['style'] = variable44;
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
            whisks['children'] = variable44;
            equals = variable40.bind(report)(equals, whisks);
            whisks = new Array(2);
            whisks[0] = equals;
            variable40 = vacuum.length;
            equals = 30;
            equals = variable42[equals];
            equals = variable41.bind(report)(equals);
            equals = equals.COLLAPSED_LIST_ITEM_MAX;
            variable40 = variable40 > equals;
            equals = null;
            if(!variable40) { _fun00012_ip = 1595; continue _fun00011 }
 1333:
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
            if(quebec) { _fun00012_ip = 1448; continue _fun00011 }
 1435:
            variable44 = variable45.xal319;
            variable44 = variable47.bind(variable48)(variable44);
            _fun00012_ip = 1459; continue _fun00011;
 1448:
            variable45 = variable45.nPGLFR;
            variable44 = variable47.bind(variable48)(variable45);
 1459:
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
            if(quebec) { _fun00012_ip = 1564; continue _fun00011 }
 1551:
            variable46 = variable47.xal319;
            variable46 = variable48.bind(variable49)(variable46);
            _fun00012_ip = 1575; continue _fun00011;
 1564:
            variable47 = variable47.nPGLFR;
            variable46 = variable48.bind(variable49)(variable47);
 1575:
            variable43['children'] = variable46;
            variable43 = variable45.bind(report)(variable44, variable43);
            variable40['children'] = variable43;
            equals = variable42.bind(report)(variable41, variable40);
 1595:
            whisks[1] = equals;
            sierra['children'] = whisks;
            limora = status.bind(report)(limora, sierra);
            sierra = new Array(2);
            sierra[0] = limora;
            equals = _closure1_slot10;
            whisks = _closure1_slot23;
            limora = {};
            limora['commandData'] = vacuum;
            limora['context'] = variable39;
            limora['beforeExecuteCommand'] = variable38;
            limora['onPressCommand'] = variable37;
            limora['onExecuteCommand'] = variable36;
            limora['expanded'] = quebec;
            limora = equals.bind(report)(whisks, limora);
            sierra[1] = limora;
            update['children'] = sierra;
            sequen = status.bind(report)(cntext, update);
 1676:
            update = new Array(4);
            update[0] = sequen;
            vacuum = vacuum.length;
            sequen = vacuum > config;
            vacuum = null;
            if(!sequen) { _fun00012_ip = 1738; continue _fun00011 }
 1698:
            sequen = romeon.length;
            sequen = sequen > config;
            vacuum = null;
            if(!sequen) { _fun00012_ip = 1738; continue _fun00011 }
 1712:
            status = _closure1_slot10;
            cntext = _closure1_slot5;
            sequen = {};
            sierra = target.divider;
            sequen['style'] = sierra;
            vacuum = status.bind(report)(cntext, sequen);
 1738:
            update[1] = vacuum;
            sequen = romeon.length;
            vacuum = null;
            if(!(config !== sequen)) { _fun00012_ip = 1863; continue _fun00011 }
 1753:
            cntext = _closure1_slot10;
            limora = _closure1_slot0;
            whisks = _closure1_slot2;
            sequen = 28;
            sequen = whisks[sequen];
            sequen = limora.bind(report)(sequen);
            config = sequen.Text;
            sequen = {'variant': 'text-md/medium', 'color': 'header-secondary'};
            target = target.sectionHeader;
            sequen['style'] = target;
            target = 29;
            status = whisks[target];
            status = limora.bind(report)(status);
            sierra = status.intl;
            status = sierra.string;
            target = whisks[target];
            target = limora.bind(report)(target);
            target = target.t;
            target = target.PHjkRE;
            target = status.bind(sierra)(target);
            sequen['children'] = target;
            vacuum = cntext.bind(report)(config, sequen);
 1863:
            update[2] = vacuum;
            source = null;
            if(!ctrled) { _fun00012_ip = 1942; continue _fun00011 }
 1872:
            sequen = _closure1_slot10;
            vacuum = _closure1_slot1;
            config = _closure1_slot2;
            ctrled = 32;
            ctrled = config[ctrled];
            vacuum = vacuum.bind(report)(ctrled);
            ctrled = {};
            ctrled['query'] = tangon;
            cntext = _closure1_slot0;
            config = config[papara];
            config = cntext.bind(report)(config);
            config = config.AppLauncherEntrypoint;
            config = config.VOICE;
            config = record === config;
            ctrled['showsGenericMessage'] = config;
            source = sequen.bind(report)(vacuum, ctrled);
 1942:
            update[3] = source;
            output['children'] = update;
            output = echoed.bind(report)(result, output);
            entity['ListHeaderComponent'] = output;
            entity['contentContainerStyle'] = sizing;
            entity['scrollIndicatorInsets'] = kiloes;
            entity['renderItem'] = backup;
            foxtra = _closure1_slot22;
            entity['keyExtractor'] = foxtra;
            entity['data'] = romeon;
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
            entity['preserveScrollMomentum'] = option;
            entity['onScroll'] = golfie;
            golfie = oscard.onScroll;
            entity['animatedOnScroll'] = golfie;
            golfie = oscard.scrollerRef;
            entity['ref'] = golfie;
            golfie = oscard.gestureRef;
            entity['simultaneousHandlers'] = golfie;
            oscard = oscard.animatedProps;
            entity['animatedProps'] = oscard;
            entity = zuuluu.bind(report)(michal, entity, tangon);
            return entity;
        }
    };
    michal = tangon.bind(golfie)(michal);
    tangon = 33;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/app_launcher/native/screens/search/SearchLocalAndGlobalContentView.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['SearchLocalAndGlobalContentView'] = michal;
    return entity;
})();