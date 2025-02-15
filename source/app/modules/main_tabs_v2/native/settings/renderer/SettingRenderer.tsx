// app/modules/main_tabs_v2/native/settings/renderer/SettingRenderer.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    romeo = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = romeo;
    var _closure1_slot2 = golf;
    entity = function(argFoo) { // Original name: formatSettingsRowTrailing
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscar = argFoo;
            entity = null;
            if(!(entity == oscar)) { _fun00002_ip = 13; continue _fun00001 }
 9:
            entity = undefined;
            return entity;
 13:
            mike = 'string';
            entity = typeof oscar;
            if(!(mike !== entity)) { _fun00002_ip = 51; continue _fun00001 }
 24:
            tango = _closure1_slot17;
            zulu = _closure1_slot18;
            mike = {};
            mike['children'] = oscar;
            entity = undefined;
            entity = tango.bind(entity)(zulu, mike);
            _fun00002_ip = 104; continue _fun00001;
 51:
            report = _closure1_slot17;
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            mike = 13;
            mike = tango[mike];
            tango = undefined;
            mike = zulu.bind(tango)(mike);
            mike = mike.TableRow;
            zulu = mike.TrailingText;
            mike = {};
            mike['text'] = oscar;
            entity = report.bind(tango)(zulu, mike);
 104:
            return entity;
        }
    };
    var _closure1_slot32 = entity;
    entity = function(argFoo) { // Original name: SettingSearchResultBreadcrumbs
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            options = entity.breadcrumbs;
            zulu = options.length;
            mike = 0;
            entity = null;
            if(!(mike !== zulu)) { _fun00004_ip = 96; continue _fun00003 }
 22:
            report = _closure1_slot17;
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            mike = 35;
            mike = tango[mike];
            tango = undefined;
            mike = zulu.bind(tango)(mike);
            zulu = mike.Text;
            mike = {'variant': 'text-xs/medium', 'color': 'text-muted'};
            golf = options.join;
            oscar = ' → ';
            oscar = golf.bind(options)(oscar);
            mike['children'] = oscar;
            entity = report.bind(tango)(zulu, mike);
 96:
            return entity;
        }
    };
    var _closure1_slot33 = entity;
    entity = function(argFoo) { // Original name: SettingSearchResultIcon
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            report = entity.IconComponent;
            entity = null;
            if(!(entity != report)) { _fun00006_ip = 71; continue _fun00005 }
 15:
            tango = _closure1_slot17;
            mike = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 13;
            entity = zulu[entity];
            zulu = undefined;
            entity = mike.bind(zulu)(entity);
            entity = entity.TableRow;
            mike = entity.Icon;
            entity = {};
            entity['IconComponent'] = report;
            entity = tango.bind(zulu)(mike, entity);
            _fun00006_ip = 106; continue _fun00005;
 71:
            report = _closure1_slot17;
            tango = _closure1_slot8;
            zulu = {};
            mike = {};
            oscar = _closure1_slot15;
            mike['width'] = oscar;
            zulu['style'] = mike;
            mike = undefined;
            entity = report.bind(mike)(tango, zulu);
 106:
            return entity;
        }
    };
    var _closure1_slot34 = entity;
    entity = function(argFoo) { // Original name: RouteSettingSearchResult
        mike = argFoo;
        zulu = mike.searchResultData;
        romeo = mike.IconComponent;
        verify = mike.title;
        var _closure2_slot0 = verify;
        offset = mike.breadcrumbs;
        backup = mike.setting;
        var _closure2_slot1 = backup;
        oscar = mike.index;
        var _closure2_slot2 = oscar;
        golf = mike.total;
        var _closure2_slot3 = golf;
        mike = _closure1_slot0;
        yankee = _closure1_slot2;
        tango = 14;
        options = yankee[tango];
        tango = undefined;
        foxtrot = mike.bind(tango)(options);
        options = foxtrot.useStackNavigation;
        sizing = options.bind(foxtrot)();
        var _closure2_slot4 = sizing;
        kilo = zulu.screen;
        var _closure2_slot5 = kilo;
        output = zulu.preNavigationAction;
        var _closure2_slot6 = output;
        foxtrot = _closure1_slot7;
        options = foxtrot.useCallback;
        zulu = new Array(7);
        zulu[0] = output;
        zulu[1] = oscar;
        zulu[2] = sizing;
        zulu[3] = kilo;
        zulu[4] = backup;
        zulu[5] = verify;
        zulu[6] = golf;
        entity = function() {
            mike = _closure1_slot11;
            oscar = _closure2_slot1;
            entity = undefined;
            mike = mike.bind(entity)(oscar);
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            mike = 41;
            mike = tango[mike];
            options = zulu.bind(entity)(mike);
            golf = options.trackSettingSearchResultPress;
            mike = {};
            mike['setting'] = oscar;
            oscar = _closure2_slot0;
            mike['title'] = oscar;
            oscar = _closure2_slot5;
            offset = oscar.route;
            mike['route'] = offset;
            verify = _closure1_slot10;
            verify = verify.bind(entity)();
            mike['searchTerm'] = verify;
            verify = _closure2_slot2;
            mike['searchResultPosition'] = verify;
            verify = _closure2_slot3;
            mike['numSearchResults'] = verify;
            mike = golf.bind(options)(mike);
            mike = 16;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.onRouteSettingOnPress;
            mike = {};
            golf = _closure2_slot4;
            mike['navigation'] = golf;
            mike['screen'] = oscar;
            report = _closure2_slot6;
            mike['preNavigationAction'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        options = options.bind(foxtrot)(entity, zulu);
        zulu = _closure1_slot17;
        entity = 13;
        entity = yankee[entity];
        entity = mike.bind(tango)(entity);
        mike = entity.TableRow;
        entity = {};
        entity['label'] = verify;
        entity['onPress'] = options;
        options = true;
        entity['arrow'] = options;
        yankee = _closure1_slot17;
        verify = _closure1_slot34;
        options = {};
        options['IconComponent'] = romeo;
        options = yankee.bind(tango)(verify, options);
        entity['icon'] = options;
        verify = _closure1_slot17;
        options = _closure1_slot33;
        report = {};
        report['breadcrumbs'] = offset;
        report = verify.bind(tango)(options, report);
        entity['subLabel'] = report;
        report = 0;
        report = report === oscar;
        entity['start'] = report;
        report = 1;
        report = golf - report;
        report = oscar === report;
        entity['end'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot35 = entity;
    entity = function(argFoo) { // Original name: PressableSettingSearchResult
        zulu = argFoo;
        mike = zulu.searchResultData;
        foxtrot = zulu.IconComponent;
        offset = zulu.title;
        var _closure2_slot0 = offset;
        yankee = zulu.breadcrumbs;
        romeo = zulu.setting;
        var _closure2_slot1 = romeo;
        golf = zulu.index;
        var _closure2_slot2 = golf;
        options = zulu.total;
        var _closure2_slot3 = options;
        verify = mike.onPress;
        var _closure2_slot4 = verify;
        report = mike.withArrow;
        tango = _closure1_slot7;
        zulu = tango.useCallback;
        mike = new Array(5);
        mike[0] = romeo;
        mike[1] = offset;
        mike[2] = golf;
        mike[3] = options;
        mike[4] = verify;
        entity = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 41;
            mike = mike[entity];
            entity = undefined;
            report = zulu.bind(entity)(mike);
            tango = report.trackSettingSearchResultPress;
            zulu = {};
            golf = _closure2_slot1;
            zulu['setting'] = golf;
            golf = _closure2_slot0;
            zulu['title'] = golf;
            oscar = _closure1_slot10;
            oscar = oscar.bind(entity)();
            zulu['searchTerm'] = oscar;
            oscar = _closure2_slot2;
            zulu['searchResultPosition'] = oscar;
            oscar = _closure2_slot3;
            zulu['numSearchResults'] = oscar;
            zulu = tango.bind(report)(zulu);
            mike = _closure2_slot4;
            mike = mike.bind(entity)();
            return entity;
        };
        verify = zulu.bind(tango)(entity, mike);
        tango = _closure1_slot17;
        mike = _closure1_slot0;
        zulu = _closure1_slot2;
        entity = 13;
        entity = zulu[entity];
        zulu = undefined;
        entity = mike.bind(zulu)(entity);
        mike = entity.TableRow;
        entity = {};
        entity['label'] = offset;
        entity['onPress'] = verify;
        romeo = _closure1_slot17;
        offset = _closure1_slot34;
        verify = {};
        verify['IconComponent'] = foxtrot;
        verify = romeo.bind(zulu)(offset, verify);
        entity['icon'] = verify;
        offset = _closure1_slot17;
        verify = _closure1_slot33;
        oscar = {};
        oscar['breadcrumbs'] = yankee;
        oscar = offset.bind(zulu)(verify, oscar);
        entity['subLabel'] = oscar;
        oscar = 0;
        oscar = oscar === golf;
        entity['start'] = oscar;
        oscar = 1;
        oscar = options - oscar;
        oscar = golf === oscar;
        entity['end'] = oscar;
        entity['arrow'] = report;
        entity = tango.bind(zulu)(mike, entity);
        return entity;
    };
    var _closure1_slot36 = entity;
    entity = function(argFoo) { // Original name: StaticSettingSearchResult
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zulu = argFoo;
            mike = zulu.searchResultData;
            kilo = zulu.IconComponent;
            verify = zulu.title;
            var _closure2_slot0 = verify;
            backup = zulu.breadcrumbs;
            romeo = zulu.setting;
            var _closure2_slot1 = romeo;
            oscar = zulu.index;
            var _closure2_slot2 = oscar;
            golf = zulu.total;
            var _closure2_slot3 = golf;
            tango = undefined;
            var _closure2_slot4 = tango;
            mike = mike.useTrailing;
            report = null;
            zulu = report == mike;
            yankee = undefined;
            if(zulu) { _fun00008_ip = 88; continue _fun00007 }
 84:
            yankee = mike.bind(tango)();
 88:
            _closure2_slot4 = yankee;
            offset = _closure1_slot7;
            zulu = offset.useCallback;
            mike = new Array(5);
            mike[0] = oscar;
            mike[1] = romeo;
            mike[2] = yankee;
            mike[3] = verify;
            mike[4] = golf;
            entity = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zulu = _closure2_slot4;
                    mike = null;
                    if(!(mike != zulu)) { _fun00010_ip = 151; continue _fun00009 }
 16:
                    zulu = _closure1_slot0;
                    tango = _closure1_slot2;
                    mike = 41;
                    report = tango[mike];
                    mike = undefined;
                    golf = zulu.bind(mike)(report);
                    oscar = golf.trackSettingSearchResultPress;
                    report = {};
                    verify = _closure2_slot1;
                    report['setting'] = verify;
                    verify = _closure2_slot0;
                    report['title'] = verify;
                    options = _closure1_slot10;
                    options = options.bind(mike)();
                    report['searchTerm'] = options;
                    options = _closure2_slot2;
                    report['searchResultPosition'] = options;
                    options = _closure2_slot3;
                    report['numSearchResults'] = options;
                    report = oscar.bind(golf)(report);
                    report = 28;
                    report = tango[report];
                    oscar = zulu.bind(mike)(report);
                    report = oscar.copy;
                    entity = _closure2_slot4;
                    entity = report.bind(oscar)(entity);
                    entity = 29;
                    entity = tango[entity];
                    mike = zulu.bind(mike)(entity);
                    entity = mike.presentCopiedToClipboard;
                    entity = entity.bind(mike)();
 151:
                    entity = undefined;
                    return entity;
                }
            };
            offset = zulu.bind(offset)(entity, mike);
            zulu = _closure1_slot17;
            mike = _closure1_slot0;
            entity = _closure1_slot2;
            romeo = 13;
            entity = entity[romeo];
            entity = mike.bind(tango)(entity);
            mike = entity.TableRow;
            entity = {};
            entity['label'] = verify;
            foxtrot = report != yankee;
            verify = undefined;
            if(!foxtrot) { _fun00008_ip = 189; continue _fun00007 }
 186:
            verify = offset;
 189:
            entity['onPress'] = verify;
            foxtrot = _closure1_slot17;
            offset = _closure1_slot34;
            verify = {};
            verify['IconComponent'] = kilo;
            verify = foxtrot.bind(tango)(offset, verify);
            entity['icon'] = verify;
            foxtrot = _closure1_slot17;
            offset = _closure1_slot33;
            verify = {};
            verify['breadcrumbs'] = backup;
            verify = foxtrot.bind(tango)(offset, verify);
            entity['subLabel'] = verify;
            verify = report != yankee;
            report = null;
            if(!verify) { _fun00008_ip = 298; continue _fun00007 }
 253:
            offset = _closure1_slot17;
            verify = _closure1_slot0;
            options = _closure1_slot2;
            options = options[romeo];
            options = verify.bind(tango)(options);
            options = options.TableRow;
            verify = options.TrailingText;
            options = {};
            options['text'] = yankee;
            report = offset.bind(tango)(verify, options);
 298:
            entity['trailing'] = report;
            report = 0;
            report = report === oscar;
            entity['start'] = report;
            report = 1;
            report = golf - report;
            report = oscar === report;
            entity['end'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot37 = entity;
    entity = ['onSlidingComplete', 'step', 'startIcon', 'endIcon', 'minimumValue', 'maximumValue'];
    var _closure1_slot3 = entity;
    entity = ['searchResultData'];
    var _closure1_slot4 = entity;
    entity = global;
    options = entity.Object;
    report = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = golf[entity];
    entity = undefined;
    tango = romeo.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 1;
    tango = golf[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 2;
    report = golf[tango];
    tango = argCorge;
    verify = tango.bind(entity)(report);
    var _closure1_slot7 = verify;
    tango = 3;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot8 = tango;
    tango = 4;
    tango = golf[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 5;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    report = tango.getSettingSearchQuery;
    var _closure1_slot10 = report;
    tango = tango.setSelectedSearchResult;
    var _closure1_slot11 = tango;
    tango = 6;
    tango = golf[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot12 = tango;
    tango = 7;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    report = tango.GUILD_SELECT_ALL_SERVERS_OPTION_ID;
    var _closure1_slot13 = report;
    tango = tango.RendererType;
    var _closure1_slot14 = tango;
    tango = 8;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    tango = tango.TABLE_ROW_ICON_SIZE;
    var _closure1_slot15 = tango;
    tango = 9;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    tango = tango.ContentDismissActionType;
    var _closure1_slot16 = tango;
    tango = 10;
    report = golf[tango];
    report = oscar.bind(entity)(report);
    report = report.jsx;
    var _closure1_slot17 = report;
    report = golf[tango];
    report = oscar.bind(entity)(report);
    report = report.Fragment;
    var _closure1_slot18 = report;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot19 = tango;
    tango = 11;
    tango = golf[tango];
    options = oscar.bind(entity)(tango);
    report = options.createStyles;
    tango = {};
    offset = {};
    yankee = 12;
    foxtrot = golf[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.spacing;
    foxtrot = foxtrot.PX_16;
    offset['marginTop'] = foxtrot;
    foxtrot = golf[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.spacing;
    foxtrot = foxtrot.PX_8;
    offset['marginBottom'] = foxtrot;
    tango['slider'] = offset;
    offset = {'flexDirection': 'row', 'justifyContent': 'space-between'};
    tango['sliderTitle'] = offset;
    offset = {};
    foxtrot = 26;
    offset['top'] = foxtrot;
    tango['radioSettingHighlight'] = offset;
    offset = {'width': 32, 'height': 32, 'backgroundColor': null, 'borderRadius': 10, 'justifyContent': 'center', 'alignItems': 'center'};
    yankee = golf[yankee];
    yankee = romeo.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.BG_BRAND;
    offset['backgroundColor'] = yankee;
    tango['defaultIcon'] = offset;
    tango = report.bind(options)(tango);
    var _closure1_slot20 = tango;
    tango = new Array(0);
    var _closure1_slot21 = tango;
    report = verify.memo;
    tango = function(argFoo) {
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            tango = argFoo;
            zulu = tango.useTrailing;
            mike = tango.useTrailingDismissibleContent;
            result = tango.preNavigationAction;
            var _closure2_slot0 = result;
            echo = tango.screen;
            var _closure2_slot1 = echo;
            kilo = tango.title;
            offset = tango.useDescription;
            golf = tango.useIsDisabled;
            romeo = tango.variant;
            oscar = tango.start;
            report = tango.end;
            sizing = tango.IconComponent;
            tango = undefined;
            var _closure2_slot3 = tango;
            var _closure2_slot4 = tango;
            var _closure2_slot5 = tango;
            yankee = _closure1_slot0;
            foxtrot = _closure1_slot2;
            options = 14;
            options = foxtrot[options];
            yankee = yankee.bind(tango)(options);
            options = yankee.useStackNavigation;
            update = options.bind(yankee)();
            var _closure2_slot2 = update;
            options = null;
            yankee = options == offset;
            backup = undefined;
            if(yankee) { _fun00012_ip = 141; continue _fun00011 }
 137:
            backup = offset.bind(tango)();
 141:
            offset = options == golf;
            foxtrot = undefined;
            if(offset) { _fun00012_ip = 154; continue _fun00011 }
 150:
            foxtrot = golf.bind(tango)();
 154:
            golf = options == zulu;
            offset = undefined;
            if(golf) { _fun00012_ip = 167; continue _fun00011 }
 163:
            offset = zulu.bind(tango)();
 167:
            zulu = options == mike;
            control = undefined;
            if(zulu) { _fun00012_ip = 180; continue _fun00011 }
 176:
            control = mike.bind(tango)();
 180:
            _closure2_slot3 = control;
            output = _closure1_slot7;
            yankee = output.useMemo;
            golf = new Array(1);
            golf[0] = control;
            zulu = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zulu = _closure2_slot3;
                    entity = null;
                    if(!(entity == zulu)) { _fun00014_ip = 22; continue _fun00013 }
 13:
                    entity = _closure1_slot21;
                    _fun00014_ip = 26; continue _fun00013;
 22:
                    entity = _closure2_slot3;
 26:
                    return entity;
                }
            };
            yankee = yankee.bind(output)(zulu, golf);
            golf = _closure1_slot0;
            output = _closure1_slot2;
            zulu = 15;
            zulu = output[zulu];
            golf = golf.bind(tango)(zulu);
            zulu = golf.useSelectedDismissibleContent;
            yankee = zulu.bind(golf)(yankee);
            golf = _closure1_slot6;
            zulu = 2;
            golf = golf.bind(tango)(yankee, zulu);
            zulu = 0;
            source = golf[zulu];
            zulu = 1;
            output = golf[zulu];
            _closure2_slot4 = output;
            yankee = options == mike;
            if(yankee) { _fun00012_ip = 314; continue _fun00011 }
 282:
            mike = options != source;
            if(!mike) { _fun00012_ip = 311; continue _fun00011 }
 289:
            golf = options == control;
            zulu = undefined;
            if(golf) { _fun00012_ip = 308; continue _fun00011 }
 298:
            golf = control.includes;
            zulu = golf.bind(control)(source);
 308:
            mike = zulu;
 311:
            yankee = mike;
 314:
            _closure2_slot5 = yankee;
            golf = _closure1_slot7;
            zulu = golf.useCallback;
            mike = new Array(5);
            mike[0] = yankee;
            mike[1] = update;
            mike[2] = echo;
            mike[3] = result;
            mike[4] = output;
            entity = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    entity = _closure2_slot5;
                    if(!entity) { _fun00016_ip = 34; continue _fun00015 }
 10:
                    zulu = _closure2_slot4;
                    entity = _closure1_slot16;
                    mike = entity.TAKE_ACTION;
                    entity = undefined;
                    entity = zulu.bind(entity)(mike);
 34:
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 16;
                    mike = mike[entity];
                    entity = undefined;
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.onRouteSettingOnPress;
                    mike = {};
                    oscar = _closure2_slot2;
                    mike['navigation'] = oscar;
                    oscar = _closure2_slot1;
                    mike['screen'] = oscar;
                    report = _closure2_slot0;
                    mike['preNavigationAction'] = report;
                    mike = zulu.bind(tango)(mike);
                    return entity;
                }
            };
            golf = zulu.bind(golf)(entity, mike);
            zulu = _closure1_slot17;
            mike = _closure1_slot0;
            entity = _closure1_slot2;
            output = 13;
            entity = entity[output];
            entity = mike.bind(tango)(entity);
            mike = entity.TableRow;
            entity = {};
            entity['label'] = kilo;
            entity['subLabel'] = backup;
            entity['disabled'] = foxtrot;
            foxtrot = true;
            entity['arrow'] = foxtrot;
            entity['variant'] = romeo;
            foxtrot = options != sizing;
            romeo = null;
            if(!foxtrot) { _fun00012_ip = 475; continue _fun00011 }
 429:
            kilo = _closure1_slot17;
            backup = _closure1_slot0;
            foxtrot = _closure1_slot2;
            foxtrot = foxtrot[output];
            foxtrot = backup.bind(tango)(foxtrot);
            foxtrot = foxtrot.TableRow;
            backup = foxtrot.Icon;
            foxtrot = {};
            foxtrot['IconComponent'] = sizing;
            romeo = kilo.bind(tango)(backup, foxtrot);
 475:
            entity['icon'] = romeo;
            options = null;
            if(!yankee) { _fun00012_ip = 493; continue _fun00011 }
 484:
            verify = _closure1_slot32;
            options = verify.bind(tango)(offset);
 493:
            entity['trailing'] = options;
            entity['onPress'] = golf;
            entity['start'] = oscar;
            entity['end'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    tango = report.bind(verify)(tango);
    var _closure1_slot22 = tango;
    tango = function() { // Original name: GuildSelectDefaultIcon
        entity = _closure1_slot20;
        tango = undefined;
        oscar = entity.bind(tango)();
        zulu = _closure1_slot17;
        mike = _closure1_slot8;
        entity = {};
        oscar = oscar.defaultIcon;
        entity['style'] = oscar;
        golf = _closure1_slot17;
        oscar = _closure1_slot0;
        options = _closure1_slot2;
        report = 19;
        report = options[report];
        report = oscar.bind(tango)(report);
        oscar = report.ClydeIcon;
        report = {};
        options = 'white';
        report['color'] = options;
        report = golf.bind(tango)(oscar, report);
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot23 = tango;
    options = verify.memo;
    report = function(argFoo) {
        report = argFoo;
        mike = report.useSelectedGuildId;
        zulu = null;
        tango = Object.create(zulu);
        zulu = 0;
        tango['useSelectedGuildId'] = zulu;
        romeo = {};
        yankee = report;
        offset = tango;
        options = copyDataProperties(romeo, yankee, offset);
        tango = undefined;
        zulu = mike.bind(tango)();
        var _closure2_slot0 = zulu;
        oscar = _closure1_slot0;
        golf = _closure1_slot2;
        mike = 17;
        mike = golf[mike];
        verify = oscar.bind(tango)(mike);
        golf = verify.useStateFromStores;
        mike = _closure1_slot12;
        oscar = new Array(1);
        oscar[0] = mike;
        mike = function() {
            zulu = _closure1_slot12;
            mike = zulu.getGuild;
            entity = _closure2_slot0;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        mike = golf.bind(verify)(oscar, mike);
        var _closure2_slot1 = mike;
        mike = function(argFoo) {
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                zulu = argFoo;
                var _closure3_slot0 = zulu;
                report = _closure1_slot0;
                oscar = _closure1_slot2;
                tango = 17;
                tango = oscar[tango];
                oscar = undefined;
                golf = report.bind(oscar)(tango);
                report = golf.useStateFromStores;
                options = _closure1_slot12;
                tango = new Array(1);
                tango[0] = options;
                entity = function() {
                    zulu = _closure1_slot12;
                    mike = zulu.getGuild;
                    entity = _closure3_slot0;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                tango = report.bind(golf)(tango, entity);
                entity = _closure1_slot13;
                if(!(zulu !== entity)) { _fun00018_ip = 149; continue _fun00017 }
 72:
                zulu = null;
                report = zulu == tango;
                entity = undefined;
                if(report) { _fun00018_ip = 88; continue _fun00017 }
 83:
                entity = tango.name;
 88:
                if(!(zulu == entity)) { _fun00018_ip = 147; continue _fun00017 }
 92:
                golf = _closure1_slot0;
                options = _closure1_slot2;
                zulu = 18;
                tango = options[zulu];
                tango = golf.bind(oscar)(tango);
                report = tango.intl;
                tango = report.string;
                zulu = options[zulu];
                zulu = golf.bind(oscar)(zulu);
                zulu = zulu.t;
                zulu = zulu.XBwns7;
                entity = tango.bind(report)(zulu);
 147:
                _fun00018_ip = 204; continue _fun00017;
 149:
                report = _closure1_slot0;
                golf = _closure1_slot2;
                mike = 18;
                zulu = golf[mike];
                zulu = report.bind(oscar)(zulu);
                tango = zulu.intl;
                zulu = tango.string;
                mike = golf[mike];
                mike = report.bind(oscar)(mike);
                mike = mike.t;
                mike = mike.OMVg29;
                entity = zulu.bind(tango)(mike);
 204:
                return entity;
            }
        };
        golf = mike.bind(tango)(zulu);
        zulu = _closure1_slot7;
        mike = zulu.memo;
        entity = function() {
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                mike = _closure2_slot1;
                entity = null;
                if(!(entity != mike)) { _fun00020_ip = 89; continue _fun00019 }
 13:
                tango = _closure1_slot17;
                mike = _closure1_slot1;
                options = _closure1_slot2;
                oscar = 20;
                entity = options[oscar];
                zulu = undefined;
                mike = mike.bind(zulu)(entity);
                entity = {};
                golf = _closure1_slot0;
                oscar = options[oscar];
                oscar = golf.bind(zulu)(oscar);
                oscar = oscar.GuildIconSizes;
                oscar = oscar.SMALL_32;
                entity['size'] = oscar;
                report = _closure2_slot1;
                entity['guild'] = report;
                entity = tango.bind(zulu)(mike, entity);
                _fun00020_ip = 110; continue _fun00019;
 89:
                report = _closure1_slot17;
                tango = _closure1_slot23;
                zulu = undefined;
                mike = {};
                entity = report.bind(zulu)(tango, mike);
 110:
                return entity;
            }
        };
        oscar = mike.bind(zulu)(entity);
        zulu = _closure1_slot17;
        mike = _closure1_slot25;
        entity = {};
        romeo = entity;
        yankee = options;
        options = copyDataProperties(romeo, yankee);
        report = _closure1_slot14;
        options = report.PRESSABLE;
        report = 'type';
        entity[report] = options;
        report = 'title';
        entity[report] = golf;
        golf = true;
        report = 'withArrow';
        entity[report] = golf;
        report = 'IconComponent';
        entity[report] = oscar;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    report = options.bind(verify)(report);
    var _closure1_slot24 = report;
    options = verify.memo;
    report = function(argFoo) {
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            tango = argFoo;
            options = tango.setting;
            backup = tango.onPress;
            result = tango.title;
            zulu = tango.useDescription;
            mike = tango.useIsDisabled;
            entity = tango.useTrailing;
            echo = tango.variant;
            sizing = tango.withArrow;
            yankee = tango.start;
            offset = tango.end;
            update = tango.IconComponent;
            oscar = _closure1_slot0;
            report = _closure1_slot2;
            tango = 21;
            report = report[tango];
            tango = undefined;
            oscar = oscar.bind(tango)(report);
            report = oscar.useHighlightSettingItem;
            oscar = report.bind(oscar)(options);
            kilo = null;
            report = kilo == zulu;
            output = undefined;
            if(report) { _fun00022_ip = 115; continue _fun00021 }
 111:
            output = zulu.bind(tango)();
 115:
            zulu = kilo == mike;
            romeo = undefined;
            if(zulu) { _fun00022_ip = 128; continue _fun00021 }
 124:
            romeo = mike.bind(tango)();
 128:
            mike = kilo == entity;
            foxtrot = undefined;
            if(mike) { _fun00022_ip = 141; continue _fun00021 }
 137:
            foxtrot = entity.bind(tango)();
 141:
            zulu = _closure1_slot19;
            mike = _closure1_slot18;
            entity = {};
            verify = _closure1_slot17;
            options = _closure1_slot0;
            report = _closure1_slot2;
            source = 13;
            report = report[source];
            report = options.bind(tango)(report);
            options = report.TableRow;
            report = {};
            report['label'] = result;
            report['subLabel'] = output;
            report['arrow'] = sizing;
            report['variant'] = echo;
            sizing = kilo != update;
            kilo = null;
            if(!sizing) { _fun00022_ip = 260; continue _fun00021 }
 210:
            result = _closure1_slot17;
            output = _closure1_slot0;
            sizing = _closure1_slot2;
            sizing = sizing[source];
            sizing = output.bind(tango)(sizing);
            sizing = sizing.TableRow;
            output = sizing.Icon;
            sizing = {};
            sizing['IconComponent'] = update;
            sizing['variant'] = echo;
            kilo = result.bind(tango)(output, sizing);
 260:
            report['icon'] = kilo;
            report['onPress'] = backup;
            report['disabled'] = romeo;
            romeo = _closure1_slot32;
            romeo = romeo.bind(tango)(foxtrot);
            report['trailing'] = romeo;
            report['start'] = yankee;
            report['end'] = offset;
            options = verify.bind(tango)(options, report);
            report = new Array(2);
            report[0] = options;
            if(!oscar) { _fun00022_ip = 351; continue _fun00021 }
 311:
            verify = _closure1_slot17;
            options = _closure1_slot1;
            romeo = _closure1_slot2;
            golf = 22;
            golf = romeo[golf];
            options = options.bind(tango)(golf);
            golf = {};
            golf['start'] = yankee;
            golf['end'] = offset;
            oscar = verify.bind(tango)(options, golf);
 351:
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    report = options.bind(verify)(report);
    var _closure1_slot25 = report;
    options = verify.memo;
    report = function(argFoo) {
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            tango = argFoo;
            options = tango.setting;
            romeo = tango.onValueChange;
            result = tango.title;
            mike = tango.useDescription;
            entity = tango.useIsDisabled;
            zulu = tango.useValue;
            backup = tango.variant;
            yankee = tango.start;
            offset = tango.end;
            update = tango.IconComponent;
            oscar = _closure1_slot0;
            report = _closure1_slot2;
            tango = 21;
            report = report[tango];
            tango = undefined;
            oscar = oscar.bind(tango)(report);
            report = oscar.useHighlightSettingItem;
            oscar = report.bind(oscar)(options);
            kilo = zulu.bind(tango)();
            sizing = null;
            zulu = sizing == mike;
            output = undefined;
            if(zulu) { _fun00024_ip = 114; continue _fun00023 }
 110:
            output = mike.bind(tango)();
 114:
            mike = sizing == entity;
            foxtrot = undefined;
            if(mike) { _fun00024_ip = 127; continue _fun00023 }
 123:
            foxtrot = entity.bind(tango)();
 127:
            zulu = _closure1_slot19;
            mike = _closure1_slot18;
            entity = {};
            verify = _closure1_slot17;
            options = _closure1_slot0;
            echo = _closure1_slot2;
            report = 23;
            report = echo[report];
            report = options.bind(tango)(report);
            options = report.TableSwitchRow;
            report = {};
            report['label'] = result;
            report['subLabel'] = output;
            output = sizing != update;
            sizing = null;
            if(!output) { _fun00024_ip = 240; continue _fun00023 }
 187:
            echo = _closure1_slot17;
            result = _closure1_slot0;
            source = _closure1_slot2;
            output = 13;
            output = source[output];
            output = result.bind(tango)(output);
            output = output.TableRow;
            result = output.Icon;
            output = {};
            output['IconComponent'] = update;
            output['variant'] = backup;
            sizing = echo.bind(tango)(result, output);
 240:
            report['icon'] = sizing;
            report['value'] = kilo;
            report['variant'] = backup;
            report['disabled'] = foxtrot;
            report['onValueChange'] = romeo;
            report['start'] = yankee;
            report['end'] = offset;
            options = verify.bind(tango)(options, report);
            report = new Array(2);
            report[0] = options;
            if(!oscar) { _fun00024_ip = 326; continue _fun00023 }
 286:
            verify = _closure1_slot17;
            options = _closure1_slot1;
            romeo = _closure1_slot2;
            golf = 22;
            golf = romeo[golf];
            options = options.bind(tango)(golf);
            golf = {};
            golf['start'] = yankee;
            golf['end'] = offset;
            oscar = verify.bind(tango)(options, golf);
 326:
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    report = options.bind(verify)(report);
    var _closure1_slot26 = report;
    options = verify.memo;
    report = function(argFoo) {
        entity = argFoo;
        oscar = entity.title;
        offset = entity.setting;
        zulu = entity.useOptions;
        mike = _closure1_slot0;
        options = _closure1_slot2;
        tango = 21;
        golf = options[tango];
        tango = undefined;
        verify = mike.bind(tango)(golf);
        golf = verify.useHighlightSettingItem;
        golf = golf.bind(verify)(offset);
        var _closure2_slot0 = golf;
        golf = zulu.bind(tango)();
        var _closure2_slot1 = golf;
        zulu = _closure1_slot17;
        entity = 24;
        entity = options[entity];
        entity = mike.bind(tango)(entity);
        mike = entity.TableRowGroup;
        entity = {};
        entity['title'] = oscar;
        oscar = false;
        entity['hasIcons'] = oscar;
        oscar = golf.map;
        report = function(argFoo, argBar) {
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                entity = argFoo;
                romeo = argBar;
                report = _closure1_slot19;
                tango = _closure1_slot8;
                zulu = {};
                offset = _closure1_slot17;
                golf = _closure1_slot0;
                oscar = _closure1_slot2;
                mike = 25;
                oscar = oscar[mike];
                mike = undefined;
                oscar = golf.bind(mike)(oscar);
                verify = oscar.TableCheckboxRow;
                golf = {};
                oscar = entity.label;
                golf['label'] = oscar;
                oscar = entity.label;
                golf['accessibilityLabel'] = oscar;
                oscar = entity.subLabel;
                golf['subLabel'] = oscar;
                oscar = entity.checked;
                golf['checked'] = oscar;
                oscar = entity.onPress;
                golf['onPress'] = oscar;
                oscar = 0;
                backup = oscar === romeo;
                golf['start'] = backup;
                oscar = _closure2_slot1;
                oscar = oscar.length;
                foxtrot = 1;
                oscar = oscar - foxtrot;
                oscar = romeo === oscar;
                golf['end'] = oscar;
                oscar = entity.label;
                golf = offset.bind(mike)(verify, golf, oscar);
                oscar = new Array(2);
                oscar[0] = golf;
                golf = _closure2_slot0;
                if(!golf) { _fun00026_ip = 223; continue _fun00025 }
 166:
                offset = _closure1_slot17;
                verify = _closure1_slot1;
                kilo = _closure1_slot2;
                options = 22;
                options = kilo[options];
                verify = verify.bind(mike)(options);
                options = {};
                options['start'] = backup;
                yankee = _closure2_slot1;
                yankee = yankee.length;
                yankee = yankee - foxtrot;
                yankee = romeo === yankee;
                options['end'] = yankee;
                golf = offset.bind(mike)(verify, options);
 223:
                oscar[1] = golf;
                zulu['children'] = oscar;
                entity = entity.label;
                entity = report.bind(mike)(tango, zulu, entity);
                return entity;
            }
        };
        report = oscar.bind(golf)(report);
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    report = options.bind(verify)(report);
    var _closure1_slot27 = report;
    options = verify.memo;
    report = function(argFoo) {
        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
            zulu = argFoo;
            oscar = zulu.setting;
            foxtrot = zulu.title;
            mike = zulu.useValue;
            entity = zulu.useOptions;
            romeo = zulu.onValueChange;
            zulu = _closure1_slot20;
            tango = undefined;
            offset = zulu.bind(tango)();
            report = _closure1_slot0;
            options = _closure1_slot2;
            zulu = 21;
            zulu = options[zulu];
            report = report.bind(tango)(zulu);
            zulu = report.useHighlightSettingItem;
            oscar = zulu.bind(report)(oscar);
            zulu = mike.bind(tango)();
            backup = entity.bind(tango)();
            mike = 'number';
            entity = typeof zulu;
            yankee = zulu;
            if(!(mike === entity)) { _fun00028_ip = 120; continue _fun00027 }
 98:
            entity = global;
            entity = entity.HermesInternal;
            mike = entity.concat;
            entity = '';
            yankee = mike.bind(entity)(zulu);
 120:
            zulu = _closure1_slot19;
            mike = _closure1_slot18;
            entity = {};
            verify = _closure1_slot17;
            options = _closure1_slot0;
            kilo = _closure1_slot2;
            report = 26;
            report = kilo[report];
            report = options.bind(tango)(report);
            options = report.TableRadioGroup;
            report = {};
            report['title'] = foxtrot;
            report['value'] = yankee;
            report['onChange'] = romeo;
            romeo = false;
            report['hasIcons'] = romeo;
            foxtrot = backup.map;
            romeo = function(argFoo) {
                _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                    entity = argFoo;
                    mike = entity.value;
                    zulu = 'number';
                    mike = typeof mike;
                    if(!(zulu !== mike)) { _fun00030_ip = 26; continue _fun00029 }
 19:
                    oscar = entity.value;
                    _fun00030_ip = 53; continue _fun00029;
 26:
                    tango = entity.value;
                    mike = global;
                    mike = mike.HermesInternal;
                    zulu = mike.concat;
                    mike = '';
                    oscar = zulu.bind(mike)(tango);
 53:
                    report = _closure1_slot17;
                    zulu = _closure1_slot0;
                    tango = _closure1_slot2;
                    mike = 27;
                    mike = tango[mike];
                    tango = undefined;
                    mike = zulu.bind(tango)(mike);
                    zulu = mike.TableRadioRow;
                    mike = {};
                    mike['value'] = oscar;
                    oscar = entity.label;
                    mike['label'] = oscar;
                    oscar = entity.subLabel;
                    mike['subLabel'] = oscar;
                    oscar = entity.disabled;
                    mike['disabled'] = oscar;
                    entity = entity.value;
                    entity = report.bind(tango)(zulu, mike, entity);
                    return entity;
                }
            };
            romeo = foxtrot.bind(backup)(romeo);
            report['children'] = romeo;
            options = verify.bind(tango)(options, report, yankee);
            report = new Array(2);
            report[0] = options;
            if(!oscar) { _fun00028_ip = 273; continue _fun00027 }
 223:
            verify = _closure1_slot17;
            options = _closure1_slot1;
            yankee = _closure1_slot2;
            golf = 22;
            golf = yankee[golf];
            options = options.bind(tango)(golf);
            golf = {'start': true, 'end': true};
            offset = offset.radioSettingHighlight;
            golf['style'] = offset;
            oscar = verify.bind(tango)(options, golf);
 273:
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    report = options.bind(verify)(report);
    var _closure1_slot28 = report;
    options = verify.memo;
    report = function(argFoo) {
        _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
            tango = argFoo;
            verify = tango.setting;
            result = tango.title;
            echo = tango.variant;
            report = tango.useTrailing;
            mike = tango.useIsDisabled;
            zulu = tango.useDescription;
            yankee = tango.start;
            offset = tango.end;
            update = tango.IconComponent;
            tango = undefined;
            var _closure2_slot0 = tango;
            options = _closure1_slot0;
            romeo = _closure1_slot2;
            oscar = 21;
            oscar = romeo[oscar];
            options = options.bind(tango)(oscar);
            oscar = options.useHighlightSettingItem;
            oscar = oscar.bind(options)(verify);
            romeo = null;
            options = romeo == report;
            sizing = undefined;
            if(options) { _fun00032_ip = 110; continue _fun00031 }
 106:
            sizing = report.bind(tango)();
 110:
            _closure2_slot0 = sizing;
            report = romeo == zulu;
            backup = undefined;
            if(report) { _fun00032_ip = 127; continue _fun00031 }
 123:
            backup = zulu.bind(tango)();
 127:
            zulu = romeo == mike;
            foxtrot = undefined;
            if(zulu) { _fun00032_ip = 140; continue _fun00031 }
 136:
            foxtrot = mike.bind(tango)();
 140:
            report = _closure1_slot7;
            zulu = report.useCallback;
            mike = new Array(1);
            mike[0] = sizing;
            entity = function() {
                _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                    zulu = _closure2_slot0;
                    mike = null;
                    if(!(mike != zulu)) { _fun00034_ip = 75; continue _fun00033 }
 13:
                    zulu = _closure1_slot0;
                    tango = _closure1_slot2;
                    mike = 28;
                    report = tango[mike];
                    mike = undefined;
                    oscar = zulu.bind(mike)(report);
                    report = oscar.copy;
                    entity = _closure2_slot0;
                    entity = report.bind(oscar)(entity);
                    entity = 29;
                    entity = tango[entity];
                    mike = zulu.bind(mike)(entity);
                    entity = mike.presentCopiedToClipboard;
                    entity = entity.bind(mike)();
 75:
                    entity = undefined;
                    return entity;
                }
            };
            kilo = zulu.bind(report)(entity, mike);
            zulu = _closure1_slot19;
            mike = _closure1_slot18;
            entity = {};
            verify = _closure1_slot17;
            options = _closure1_slot0;
            report = _closure1_slot2;
            output = 13;
            report = report[output];
            report = options.bind(tango)(report);
            options = report.TableRow;
            report = {};
            report['label'] = result;
            report['subLabel'] = backup;
            result = romeo != sizing;
            backup = null;
            if(!result) { _fun00032_ip = 233; continue _fun00031 }
 230:
            backup = kilo;
 233:
            report['onPress'] = backup;
            report['variant'] = echo;
            report['disabled'] = foxtrot;
            backup = romeo != update;
            foxtrot = null;
            if(!backup) { _fun00032_ip = 304; continue _fun00031 }
 254:
            result = _closure1_slot17;
            kilo = _closure1_slot0;
            backup = _closure1_slot2;
            backup = backup[output];
            backup = kilo.bind(tango)(backup);
            backup = backup.TableRow;
            kilo = backup.Icon;
            backup = {};
            backup['IconComponent'] = update;
            backup['variant'] = echo;
            foxtrot = result.bind(tango)(kilo, backup);
 304:
            report['icon'] = foxtrot;
            foxtrot = romeo != sizing;
            romeo = null;
            if(!foxtrot) { _fun00032_ip = 362; continue _fun00031 }
 317:
            kilo = _closure1_slot17;
            backup = _closure1_slot0;
            foxtrot = _closure1_slot2;
            foxtrot = foxtrot[output];
            foxtrot = backup.bind(tango)(foxtrot);
            foxtrot = foxtrot.TableRow;
            backup = foxtrot.TrailingText;
            foxtrot = {};
            foxtrot['text'] = sizing;
            romeo = kilo.bind(tango)(backup, foxtrot);
 362:
            report['trailing'] = romeo;
            report['start'] = yankee;
            report['end'] = offset;
            options = verify.bind(tango)(options, report);
            report = new Array(2);
            report[0] = options;
            if(!oscar) { _fun00032_ip = 432; continue _fun00031 }
 392:
            verify = _closure1_slot17;
            options = _closure1_slot1;
            romeo = _closure1_slot2;
            golf = 22;
            golf = romeo[golf];
            options = options.bind(tango)(golf);
            golf = {};
            golf['start'] = yankee;
            golf['end'] = offset;
            oscar = verify.bind(tango)(options, golf);
 432:
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    report = options.bind(verify)(report);
    var _closure1_slot29 = report;
    options = verify.memo;
    report = function(argFoo) {
        _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
            mike = argFoo;
            report = mike.setting;
            romeo = mike.title;
            entity = mike.useValue;
            result = mike.onValueChange;
            echo = mike.maximum;
            yankee = mike.start;
            offset = mike.end;
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            mike = 21;
            mike = tango[mike];
            tango = undefined;
            zulu = zulu.bind(tango)(mike);
            mike = zulu.useHighlightSettingItem;
            oscar = mike.bind(zulu)(report);
            mike = _closure1_slot20;
            kilo = mike.bind(tango)();
            mike = null;
            mike = mike == entity;
            update = undefined;
            if(mike) { _fun00036_ip = 101; continue _fun00035 }
 97:
            update = entity.bind(tango)();
 101:
            zulu = _closure1_slot19;
            mike = _closure1_slot18;
            entity = {};
            verify = _closure1_slot17;
            options = _closure1_slot0;
            source = _closure1_slot2;
            report = 13;
            report = source[report];
            report = options.bind(tango)(report);
            options = report.TableRow;
            report = {};
            report['label'] = romeo;
            report['start'] = yankee;
            report['end'] = offset;
            backup = _closure1_slot17;
            foxtrot = _closure1_slot8;
            romeo = {};
            kilo = kilo.slider;
            romeo['style'] = kilo;
            output = _closure1_slot17;
            sizing = _closure1_slot1;
            kilo = 30;
            kilo = source[kilo];
            sizing = sizing.bind(tango)(kilo);
            kilo = {};
            kilo['value'] = update;
            kilo['maxVolume'] = echo;
            kilo['onValueChange'] = result;
            kilo = output.bind(tango)(sizing, kilo);
            romeo['children'] = kilo;
            romeo = backup.bind(tango)(foxtrot, romeo);
            report['subLabel'] = romeo;
            options = verify.bind(tango)(options, report);
            report = new Array(2);
            report[0] = options;
            if(!oscar) { _fun00036_ip = 289; continue _fun00035 }
 249:
            verify = _closure1_slot17;
            options = _closure1_slot1;
            romeo = _closure1_slot2;
            golf = 22;
            golf = romeo[golf];
            options = options.bind(tango)(golf);
            golf = {};
            golf['start'] = yankee;
            golf['end'] = offset;
            oscar = verify.bind(tango)(options, golf);
 289:
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    report = options.bind(verify)(report);
    var _closure1_slot30 = report;
    options = verify.memo;
    report = function(argFoo) {
        _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
            entity = argFoo;
            equality = entity.title;
            oscar = entity.start;
            report = entity.end;
            zulu = entity.useProps;
            entity = entity.useTrailing;
            tango = undefined;
            var _closure2_slot1 = tango;
            var _closure2_slot2 = tango;
            var _closure2_slot3 = tango;
            var _closure2_slot4 = tango;
            var _closure2_slot5 = tango;
            var _closure2_slot6 = tango;
            var _closure2_slot7 = tango;
            var _closure2_slot8 = tango;
            offset = zulu.bind(tango)();
            zulu = offset.onSlidingComplete;
            var _closure2_slot0 = zulu;
            golf = offset.step;
            whiskey = 0.1;
            if(!(tango !== golf)) { _fun00038_ip = 103; continue _fun00037 }
 100:
            whiskey = golf;
 103:
            _closure2_slot1 = whiskey;
            target = offset.startIcon;
            config = offset.endIcon;
            golf = offset.minimumValue;
            options = 0;
            sierra = 0;
            if(!(tango !== golf)) { _fun00038_ip = 136; continue _fun00037 }
 133:
            sierra = golf;
 136:
            _closure2_slot2 = sierra;
            golf = offset.maximumValue;
            sizing = 1;
            papa = sizing;
            if(!(tango !== golf)) { _fun00038_ip = 159; continue _fun00037 }
 156:
            papa = golf;
 159:
            _closure2_slot3 = papa;
            verify = _closure1_slot5;
            golf = _closure1_slot3;
            control = verify.bind(tango)(offset, golf);
            _closure2_slot4 = control;
            golf = _closure1_slot20;
            output = golf.bind(tango)();
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            golf = 17;
            golf = offset[golf];
            yankee = verify.bind(tango)(golf);
            offset = yankee.useStateFromStores;
            golf = _closure1_slot9;
            verify = new Array(1);
            verify[0] = golf;
            golf = function() {
                entity = _closure1_slot9;
                entity = entity.locale;
                return entity;
            };
            variable36 = offset.bind(yankee)(verify, golf);
            offset = _closure1_slot7;
            verify = offset.useState;
            golf = function() {
                _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                    entity = _closure2_slot4;
                    mike = entity.value;
                    entity = null;
                    zulu = entity != mike;
                    entity = 1;
                    if(!zulu) { _fun00040_ip = 27; continue _fun00039 }
 24:
                    entity = mike;
 27:
                    return entity;
                }
            };
            golf = verify.bind(offset)(golf);
            offset = _closure1_slot6;
            verify = 2;
            golf = offset.bind(tango)(golf, verify);
            kilo = golf[options];
            _closure2_slot5 = kilo;
            lima = golf[sizing];
            _closure2_slot6 = lima;
            yankee = _closure1_slot7;
            golf = yankee.useState;
            context = false;
            golf = golf.bind(yankee)(context);
            golf = offset.bind(tango)(golf, verify);
            backup = golf[options];
            golf = golf[sizing];
            _closure2_slot7 = golf;
            offset = _closure1_slot7;
            verify = offset.useCallback;
            options = function() {
                zulu = _closure2_slot7;
                entity = undefined;
                mike = true;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            golf = new Array(0);
            sequence = verify.bind(offset)(options, golf);
            offset = _closure1_slot7;
            verify = offset.useCallback;
            options = new Array(1);
            options[0] = zulu;
            golf = function(argFoo) {
                _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                    tango = _closure2_slot7;
                    entity = undefined;
                    zulu = false;
                    zulu = tango.bind(entity)(zulu);
                    tango = _closure2_slot0;
                    zulu = null;
                    if(!(zulu != tango)) { _fun00042_ip = 38; continue _fun00041 }
 26:
                    zulu = _closure2_slot0;
                    mike = argFoo;
                    mike = zulu.bind(entity)(mike);
 38:
                    return entity;
                }
            };
            vacuum = verify.bind(offset)(golf, options);
            verify = _closure1_slot7;
            options = verify.useCallback;
            golf = new Array(1);
            golf[0] = zulu;
            zulu = function(argFoo) {
                _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
                    zulu = argFoo;
                    tango = _closure2_slot6;
                    entity = undefined;
                    tango = tango.bind(entity)(zulu);
                    report = _closure2_slot0;
                    tango = null;
                    if(!(tango != report)) { _fun00044_ip = 36; continue _fun00043 }
 27:
                    mike = _closure2_slot0;
                    mike = mike.bind(entity)(zulu);
 36:
                    return entity;
                }
            };
            verify = options.bind(verify)(zulu, golf);
            _closure2_slot8 = verify;
            offset = _closure1_slot7;
            options = offset.useCallback;
            golf = new Array(1);
            golf[0] = verify;
            zulu = function() {
                zulu = _closure2_slot8;
                mike = undefined;
                entity = 1;
                entity = zulu.bind(mike)(entity);
                return entity;
            };
            romeo = options.bind(offset)(zulu, golf);
            offset = _closure1_slot7;
            options = offset.useCallback;
            golf = new Array(4);
            golf[0] = verify;
            golf[1] = papa;
            golf[2] = whiskey;
            golf[3] = kilo;
            zulu = function() {
                zulu = _closure2_slot8;
                mike = global;
                report = mike.Math;
                tango = report.min;
                mike = _closure2_slot3;
                oscar = _closure2_slot5;
                entity = _closure2_slot1;
                entity = oscar + entity;
                mike = tango.bind(report)(mike, entity);
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                tango = _closure1_slot0;
                oscar = _closure1_slot2;
                zulu = 31;
                zulu = oscar[zulu];
                tango = tango.bind(entity)(zulu);
                zulu = tango.triggerHapticFeedback;
                report = _closure1_slot1;
                mike = 32;
                mike = oscar[mike];
                mike = report.bind(entity)(mike);
                mike = mike.IMPACT_LIGHT;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            record = options.bind(offset)(zulu, golf);
            options = _closure1_slot7;
            golf = options.useCallback;
            zulu = new Array(4);
            zulu[0] = verify;
            zulu[1] = sierra;
            zulu[2] = whiskey;
            zulu[3] = kilo;
            mike = function() {
                zulu = _closure2_slot8;
                mike = global;
                report = mike.Math;
                tango = report.max;
                mike = _closure2_slot2;
                oscar = _closure2_slot5;
                entity = _closure2_slot1;
                entity = oscar - entity;
                mike = tango.bind(report)(mike, entity);
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                tango = _closure1_slot0;
                oscar = _closure1_slot2;
                zulu = 31;
                zulu = oscar[zulu];
                tango = tango.bind(entity)(zulu);
                zulu = tango.triggerHapticFeedback;
                report = _closure1_slot1;
                mike = 32;
                mike = oscar[mike];
                mike = report.bind(entity)(mike);
                mike = mike.IMPACT_LIGHT;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            status = golf.bind(options)(mike, zulu);
            yankee = null;
            mike = yankee == entity;
            source = undefined;
            if(mike) { _fun00038_ip = 545; continue _fun00037 }
 541:
            source = entity.bind(tango)();
 545:
            zulu = _closure1_slot17;
            quebec = _closure1_slot0;
            update = _closure1_slot2;
            entity = 33;
            entity = update[entity];
            entity = quebec.bind(tango)(entity);
            mike = entity.Card;
            entity = {};
            entity['start'] = oscar;
            entity['end'] = report;
            report = 'none';
            entity['shadow'] = report;
            entity['border'] = report;
            golf = _closure1_slot19;
            options = 34;
            report = update[options];
            report = quebec.bind(tango)(report);
            oscar = report.Stack;
            report = {};
            options = update[options];
            options = quebec.bind(tango)(options);
            verify = options.Stack;
            options = {'direction': 'horizontal', 'justify': 'space-between'};
            echo = _closure1_slot8;
            offset = {};
            result = output.sliderTitle;
            offset['style'] = result;
            variable37 = _closure1_slot17;
            result = 35;
            update = update[result];
            update = quebec.bind(tango)(update);
            quebec = update.Text;
            update = {};
            variable38 = 'text-md/semibold';
            update['variant'] = variable38;
            update['children'] = equality;
            quebec = variable37.bind(tango)(quebec, update);
            update = new Array(2);
            update[0] = quebec;
            update[1] = source;
            offset['children'] = update;
            echo = golf.bind(tango)(echo, offset);
            offset = new Array(2);
            offset[0] = echo;
            yankee = yankee != kilo;
            if(!yankee) { _fun00038_ip = 816; continue _fun00037 }
 746:
            update = _closure1_slot17;
            quebec = _closure1_slot0;
            variable37 = _closure1_slot2;
            result = variable37[result];
            result = quebec.bind(tango)(result);
            echo = result.Text;
            result = {'variant': 'text-sm/medium', 'color': 'text-muted'};
            source = 36;
            source = variable37[source];
            quebec = quebec.bind(tango)(source);
            source = quebec.formatPercent;
            source = source.bind(quebec)(variable36, kilo);
            result['children'] = source;
            yankee = update.bind(tango)(echo, result);
 816:
            offset[1] = yankee;
            options['children'] = offset;
            verify = golf.bind(tango)(verify, options);
            options = new Array(3);
            options[0] = verify;
            result = _closure1_slot17;
            yankee = _closure1_slot8;
            verify = {};
            echo = _closure1_slot0;
            update = _closure1_slot2;
            offset = 37;
            offset = update[offset];
            echo = echo.bind(tango)(offset);
            offset = echo.isAndroid;
            echo = offset.bind(echo)();
            offset = undefined;
            if(!echo) { _fun00038_ip = 888; continue _fun00037 }
 882:
            offset = output.slider;
 888:
            verify['style'] = offset;
            source = _closure1_slot17;
            offset = _closure1_slot0;
            output = _closure1_slot2;
            echo = 38;
            echo = output[echo];
            echo = offset.bind(tango)(echo);
            update = echo.Slider;
            echo = {};
            variable40 = echo;
            variable39 = control;
            control = copyDataProperties(variable40, variable39);
            control = 'accessibilityLabel';
            echo[control] = equality;
            control = 'step';
            echo[control] = whiskey;
            control = 'onValueChange';
            echo[control] = lima;
            control = 'value';
            echo[control] = kilo;
            control = 'minimumValue';
            echo[control] = sierra;
            control = 'maximumValue';
            echo[control] = papa;
            control = 'onSlidingStart';
            echo[control] = sequence;
            control = 'onSlidingComplete';
            echo[control] = vacuum;
            papa = _closure1_slot17;
            control = 39;
            vacuum = output[control];
            vacuum = offset.bind(tango)(vacuum);
            sequence = vacuum.PressableOpacity;
            vacuum = {};
            vacuum['accessible'] = context;
            vacuum['onPress'] = status;
            vacuum['children'] = target;
            sequence = papa.bind(tango)(sequence, vacuum);
            vacuum = 'startIcon';
            echo[vacuum] = sequence;
            sequence = _closure1_slot17;
            control = output[control];
            control = offset.bind(tango)(control);
            vacuum = control.PressableOpacity;
            control = {};
            control['accessible'] = context;
            control['onPress'] = record;
            control['children'] = config;
            vacuum = sequence.bind(tango)(vacuum, control);
            control = 'endIcon';
            echo[control] = vacuum;
            echo = source.bind(tango)(update, echo);
            verify['children'] = echo;
            verify = result.bind(tango)(yankee, verify);
            options[1] = verify;
            yankee = _closure1_slot17;
            verify = 40;
            verify = output[verify];
            verify = offset.bind(tango)(verify);
            offset = verify.Button;
            verify = {};
            backup = !backup;
            if(!backup) { _fun00038_ip = 1161; continue _fun00037 }
 1157:
            backup = sizing === kilo;
 1161:
            verify['disabled'] = backup;
            backup = 'secondary';
            verify['variant'] = backup;
            sizing = _closure1_slot0;
            output = _closure1_slot2;
            foxtrot = 18;
            backup = output[foxtrot];
            backup = sizing.bind(tango)(backup);
            kilo = backup.intl;
            backup = kilo.string;
            foxtrot = output[foxtrot];
            foxtrot = sizing.bind(tango)(foxtrot);
            foxtrot = foxtrot.t;
            foxtrot = foxtrot.3b//lJ;
            foxtrot = backup.bind(kilo)(foxtrot);
            verify['text'] = foxtrot;
            verify['onPress'] = romeo;
            verify = yankee.bind(tango)(offset, verify);
            options[2] = verify;
            report['children'] = options;
            report = golf.bind(tango)(oscar, report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    report = options.bind(verify)(report);
    var _closure1_slot31 = report;
    report = 42;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/main_tabs_v2/native/settings/renderer/SettingRenderer.tsx';
    report = oscar.bind(golf)(report);
    zulu['GuildSelectDefaultIcon'] = tango;
    tango = function(argFoo) { // Original name: renderSettingItem
        _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
            mike = argFoo;
            golf = mike.setting;
            entity = mike.settingData;
            oscar = mike.start;
            report = mike.end;
            tango = entity.type;
            zulu = _closure1_slot14;
            zulu = zulu.GUILD_SELECTOR;
            if(!(tango !== zulu)) { _fun00046_ip = 692; continue _fun00045 }
 50:
            tango = _closure1_slot0;
            options = _closure1_slot2;
            zulu = 16;
            zulu = options[zulu];
            verify = undefined;
            options = tango.bind(verify)(zulu);
            tango = options.transformSettingTitle;
            zulu = entity.title;
            yankee = tango.bind(options)(zulu);
            tango = entity.type;
            zulu = _closure1_slot14;
            zulu = zulu.ROUTE;
            if(!(zulu !== tango)) { _fun00046_ip = 637; continue _fun00045 }
 110:
            zulu = _closure1_slot14;
            zulu = zulu.PRESSABLE;
            if(!(zulu !== tango)) { _fun00046_ip = 573; continue _fun00045 }
 127:
            zulu = _closure1_slot14;
            zulu = zulu.TOGGLE;
            if(!(zulu !== tango)) { _fun00046_ip = 509; continue _fun00045 }
 144:
            zulu = _closure1_slot14;
            zulu = zulu.STATIC;
            if(!(zulu !== tango)) { _fun00046_ip = 445; continue _fun00045 }
 161:
            zulu = _closure1_slot14;
            zulu = zulu.VOLUME_SLIDER;
            if(!(zulu !== tango)) { _fun00046_ip = 381; continue _fun00045 }
 178:
            zulu = _closure1_slot14;
            zulu = zulu.RADIO;
            if(!(zulu !== tango)) { _fun00046_ip = 335; continue _fun00045 }
 195:
            zulu = _closure1_slot14;
            zulu = zulu.CHECKBOX;
            if(!(zulu !== tango)) { _fun00046_ip = 289; continue _fun00045 }
 209:
            zulu = _closure1_slot14;
            zulu = zulu.SLIDER;
            if(!(zulu !== tango)) { _fun00046_ip = 225; continue _fun00045 }
 223:
            return verify;
 225:
            options = _closure1_slot17;
            tango = _closure1_slot31;
            zulu = {};
            foxtrot = zulu;
            romeo = entity;
            offset = copyDataProperties(foxtrot, romeo);
            offset = 'title';
            zulu[offset] = yankee;
            offset = 'start';
            zulu[offset] = oscar;
            offset = 'end';
            zulu[offset] = report;
            offset = 'setting';
            zulu[offset] = golf;
            zulu = options.bind(verify)(tango, zulu);
            return zulu;
 289:
            options = _closure1_slot17;
            tango = _closure1_slot27;
            zulu = {};
            foxtrot = zulu;
            romeo = entity;
            offset = copyDataProperties(foxtrot, romeo);
            offset = 'title';
            zulu[offset] = yankee;
            offset = 'setting';
            zulu[offset] = golf;
            zulu = options.bind(verify)(tango, zulu);
            return zulu;
 335:
            options = _closure1_slot17;
            tango = _closure1_slot28;
            zulu = {};
            foxtrot = zulu;
            romeo = entity;
            offset = copyDataProperties(foxtrot, romeo);
            offset = 'title';
            zulu[offset] = yankee;
            offset = 'setting';
            zulu[offset] = golf;
            zulu = options.bind(verify)(tango, zulu);
            return zulu;
 381:
            options = _closure1_slot17;
            tango = _closure1_slot30;
            zulu = {};
            foxtrot = zulu;
            romeo = entity;
            offset = copyDataProperties(foxtrot, romeo);
            offset = 'title';
            zulu[offset] = yankee;
            offset = 'start';
            zulu[offset] = oscar;
            offset = 'end';
            zulu[offset] = report;
            offset = 'setting';
            zulu[offset] = golf;
            zulu = options.bind(verify)(tango, zulu);
            return zulu;
 445:
            options = _closure1_slot17;
            tango = _closure1_slot29;
            zulu = {};
            foxtrot = zulu;
            romeo = entity;
            offset = copyDataProperties(foxtrot, romeo);
            offset = 'title';
            zulu[offset] = yankee;
            offset = 'start';
            zulu[offset] = oscar;
            offset = 'end';
            zulu[offset] = report;
            offset = 'setting';
            zulu[offset] = golf;
            zulu = options.bind(verify)(tango, zulu);
            return zulu;
 509:
            options = _closure1_slot17;
            tango = _closure1_slot26;
            zulu = {};
            foxtrot = zulu;
            romeo = entity;
            offset = copyDataProperties(foxtrot, romeo);
            offset = 'title';
            zulu[offset] = yankee;
            offset = 'start';
            zulu[offset] = oscar;
            offset = 'end';
            zulu[offset] = report;
            offset = 'setting';
            zulu[offset] = golf;
            zulu = options.bind(verify)(tango, zulu);
            return zulu;
 573:
            options = _closure1_slot17;
            tango = _closure1_slot25;
            zulu = {};
            foxtrot = zulu;
            romeo = entity;
            offset = copyDataProperties(foxtrot, romeo);
            offset = 'title';
            zulu[offset] = yankee;
            offset = 'start';
            zulu[offset] = oscar;
            offset = 'end';
            zulu[offset] = report;
            offset = 'setting';
            zulu[offset] = golf;
            zulu = options.bind(verify)(tango, zulu);
            return zulu;
 637:
            options = _closure1_slot17;
            tango = _closure1_slot22;
            zulu = {};
            foxtrot = zulu;
            romeo = entity;
            offset = copyDataProperties(foxtrot, romeo);
            offset = 'title';
            zulu[offset] = yankee;
            offset = 'start';
            zulu[offset] = oscar;
            offset = 'end';
            zulu[offset] = report;
            zulu = options.bind(verify)(tango, zulu);
            return zulu;
 692:
            tango = _closure1_slot17;
            zulu = _closure1_slot24;
            mike = {};
            foxtrot = mike;
            romeo = entity;
            entity = copyDataProperties(foxtrot, romeo);
            entity = 'setting';
            mike[entity] = golf;
            entity = 'start';
            mike[entity] = oscar;
            entity = 'end';
            mike[entity] = report;
            entity = undefined;
            entity = tango.bind(entity)(zulu, mike);
            return entity;
        }
    };
    zulu['renderSettingItem'] = tango;
    mike = function(argFoo) { // Original name: renderSettingSearchResultItem
        _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
            zulu = argFoo;
            oscar = zulu.searchResultData;
            report = _closure1_slot5;
            mike = _closure1_slot4;
            tango = undefined;
            report = report.bind(tango)(zulu, mike);
            golf = oscar.type;
            mike = _closure1_slot14;
            mike = mike.ROUTE;
            if(!(mike !== golf)) { _fun00048_ip = 202; continue _fun00047 }
 50:
            mike = _closure1_slot14;
            mike = mike.PRESSABLE;
            if(!(mike !== golf)) { _fun00048_ip = 169; continue _fun00047 }
 64:
            mike = _closure1_slot14;
            mike = mike.STATIC;
            if(!(mike !== golf)) { _fun00048_ip = 136; continue _fun00047 }
 78:
            mike = global;
            golf = mike.Error;
            options = zulu.setting;
            mike = mike.HermesInternal;
            zulu = mike.concat;
            mike = '[SettingRenderer] Found unsupported renderer type for setting: ';
            offset = zulu.bind(mike)(options);
            zulu = golf.prototype;
            zulu = Object.create(zulu, {constructor: {value: golf}});
            yankee = zulu;
            mike = new yankee[golf](offset, verify);
            mike = mike instanceof Object ? mike : zulu;
            throw mike;
 136:
            golf = _closure1_slot17;
            zulu = _closure1_slot37;
            mike = {};
            mike['searchResultData'] = oscar;
            offset = mike;
            verify = report;
            options = copyDataProperties(offset, verify);
            mike = golf.bind(tango)(zulu, mike);
            return mike;
 169:
            golf = _closure1_slot17;
            zulu = _closure1_slot36;
            mike = {};
            mike['searchResultData'] = oscar;
            offset = mike;
            verify = report;
            options = copyDataProperties(offset, verify);
            mike = golf.bind(tango)(zulu, mike);
            return mike;
 202:
            zulu = _closure1_slot17;
            mike = _closure1_slot35;
            entity = {};
            entity['searchResultData'] = oscar;
            offset = entity;
            verify = report;
            report = copyDataProperties(offset, verify);
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['renderSettingSearchResultItem'] = mike;
    return entity;
})();