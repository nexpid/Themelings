// app/modules/app_launcher/native/screens/home/InThisServerSection.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    foxtrot = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = foxtrot;
    var _closure1_slot2 = golf;
    entity = function(argFoo) { // Original name: AppInThisServer
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            entity = mike.appItem;
            mike = mike.onAppSelected;
            var _closure2_slot0 = mike;
            mike = _closure1_slot7;
            report = undefined;
            yankee = mike.bind(report)();
            entity = entity.application;
            var _closure2_slot1 = entity;
            zulu = _closure1_slot0;
            options = _closure1_slot2;
            mike = 10;
            mike = options[mike];
            tango = zulu.bind(report)(mike);
            mike = tango.getAppLauncherIconSource;
            romeo = mike.bind(tango)(entity);
            tango = _closure1_slot6;
            mike = 9;
            mike = options[mike];
            mike = zulu.bind(report)(mike);
            zulu = mike.PressableOpacity;
            mike = {};
            oscar = function() { // Original name: onPress
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = _closure2_slot0;
                    tango = null;
                    mike = tango != mike;
                    if(!mike) { _fun00004_ip = 24; continue _fun00003 }
 16:
                    zulu = _closure2_slot1;
                    mike = tango != zulu;
 24:
                    if(!mike) { _fun00004_ip = 88; continue _fun00003 }
 27:
                    zulu = _closure2_slot0;
                    mike = {};
                    entity = _closure2_slot1;
                    mike['application'] = entity;
                    report = _closure1_slot0;
                    tango = _closure1_slot2;
                    entity = 11;
                    tango = tango[entity];
                    entity = undefined;
                    tango = report.bind(entity)(tango);
                    tango = tango.AppLauncherSectionName;
                    tango = tango.APPS_IN_THIS_SERVER;
                    mike['sectionName'] = tango;
                    entity = zulu.bind(entity)(mike);
 88:
                    entity = undefined;
                    return entity;
                }
            };
            mike['onPress'] = oscar;
            oscar = yankee.appCardContainer;
            mike['style'] = oscar;
            options = null;
            oscar = options != romeo;
            if(!oscar) { _fun00002_ip = 184; continue _fun00001 }
 128:
            offset = _closure1_slot5;
            verify = _closure1_slot1;
            foxtrot = _closure1_slot2;
            oscar = 12;
            oscar = foxtrot[oscar];
            verify = verify.bind(report)(oscar);
            oscar = {};
            oscar['iconSource'] = romeo;
            yankee = yankee.iconContainer;
            oscar['wrapperStyle'] = yankee;
            yankee = 36;
            oscar['iconSize'] = yankee;
            options = offset.bind(report)(verify, oscar);
 184:
            oscar = new Array(2);
            oscar[0] = options;
            verify = _closure1_slot5;
            options = _closure1_slot0;
            offset = _closure1_slot2;
            golf = 7;
            golf = offset[golf];
            golf = options.bind(report)(golf);
            options = golf.Text;
            golf = {'variant': 'text-md/semibold', 'color': 'header-primary', 'lineClamp': 1};
            offset = entity.name;
            golf['children'] = offset;
            golf = verify.bind(report)(options, golf);
            oscar[1] = golf;
            mike['children'] = oscar;
            entity = entity.id;
            entity = tango.bind(report)(zulu, mike, entity);
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = global;
    options = entity.Object;
    report = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = report.bind(options)(zulu, entity, mike);
    entity = 0;
    report = golf[entity];
    mike = argCorge;
    entity = undefined;
    mike = mike.bind(entity)(report);
    mike = 1;
    mike = golf[mike];
    mike = oscar.bind(entity)(mike);
    report = mike.View;
    var _closure1_slot3 = report;
    mike = mike.ScrollView;
    var _closure1_slot4 = mike;
    mike = 2;
    report = golf[mike];
    report = oscar.bind(entity)(report);
    report = report.jsx;
    var _closure1_slot5 = report;
    mike = golf[mike];
    mike = oscar.bind(entity)(mike);
    mike = mike.jsxs;
    var _closure1_slot6 = mike;
    mike = 3;
    mike = golf[mike];
    verify = oscar.bind(entity)(mike);
    options = verify.createStyles;
    report = {};
    mike = {};
    offset = 16;
    mike['marginBottom'] = offset;
    report['container'] = mike;
    mike = {};
    romeo = 'center';
    mike['justifyContent'] = romeo;
    report['headerContainer'] = mike;
    mike = {'position': 'absolute', 'right': 0};
    report['viewAll'] = mike;
    mike = 8;
    offset = {'marginTop': 8, 'overflow': 'visible'};
    report['scrollView'] = offset;
    offset = {};
    offset['gap'] = mike;
    report['scrollViewContentContainer'] = offset;
    offset = {};
    yankee = 4;
    backup = golf[yankee];
    backup = foxtrot.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.CARD_PRIMARY_BG;
    offset['backgroundColor'] = backup;
    backup = golf[yankee];
    backup = foxtrot.bind(entity)(backup);
    backup = backup.radii;
    backup = backup.lg;
    offset['borderRadius'] = backup;
    yankee = golf[yankee];
    yankee = foxtrot.bind(entity)(yankee);
    yankee = yankee.shadows;
    sizing = yankee.SHADOW_LOW;
    output = offset;
    yankee = copyDataProperties(output, sizing);
    foxtrot = 12;
    yankee = 'paddingLeft';
    offset[yankee] = foxtrot;
    yankee = 'paddingRight';
    offset[yankee] = foxtrot;
    yankee = 'paddingVertical';
    offset[yankee] = foxtrot;
    foxtrot = 'row';
    yankee = 'flexDirection';
    offset[yankee] = foxtrot;
    yankee = 'justifyContent';
    offset[yankee] = romeo;
    yankee = 'alignItems';
    offset[yankee] = romeo;
    report['appCardContainer'] = offset;
    offset = {'marginEnd': 12, 'justifyContent': 'space-around'};
    report['iconContainer'] = offset;
    report = options.bind(verify)(report);
    var _closure1_slot7 = report;
    report = 13;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/app_launcher/native/screens/home/InThisServerSection.tsx';
    report = oscar.bind(golf)(report);
    tango = function(argFoo) { // Original name: InThisServerSection
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            golf = entity.items;
            mike = entity.onAppSelected;
            var _closure2_slot0 = mike;
            entity = entity.onViewAllSelected;
            var _closure2_slot1 = entity;
            tango = undefined;
            var _closure2_slot2 = tango;
            var _closure2_slot4 = tango;
            entity = _closure1_slot7;
            offset = entity.bind(tango)();
            zulu = new Array(0);
            var _closure2_slot3 = zulu;
            entity = golf.length;
            mike = 0;
            if(!(mike !== entity)) { _fun00006_ip = 596; continue _fun00005 }
 74:
            report = golf.forEach;
            entity = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zulu = argFoo;
                    report = zulu.type;
                    golf = _closure1_slot0;
                    entity = _closure1_slot2;
                    oscar = 5;
                    tango = entity[oscar];
                    entity = undefined;
                    tango = golf.bind(entity)(tango);
                    tango = tango.AppLauncherHomeListItemType;
                    tango = tango.RECOMMENDATION_APP;
                    if(!(report === tango)) { _fun00008_ip = 66; continue _fun00007 }
 49:
                    report = _closure2_slot3;
                    tango = report.push;
                    tango = tango.bind(report)(zulu);
 66:
                    tango = zulu.type;
                    report = _closure1_slot0;
                    mike = _closure1_slot2;
                    mike = mike[oscar];
                    mike = report.bind(entity)(mike);
                    mike = mike.AppLauncherHomeListItemType;
                    mike = mike.VIEW_ALL;
                    if(!(tango === mike)) { _fun00008_ip = 111; continue _fun00007 }
 104:
                    _closure2_slot2 = zulu;
 111:
                    return entity;
                }
            };
            entity = report.bind(golf)(entity);
            entity = zulu.slice;
            control = 8;
            zulu = entity.bind(zulu)(mike, control);
            mike = zulu.map;
            entity = function(argFoo) {
                entity = argFoo;
                report = _closure1_slot5;
                tango = _closure1_slot8;
                zulu = {};
                zulu['appItem'] = entity;
                mike = _closure2_slot0;
                zulu['onAppSelected'] = mike;
                entity = entity.application;
                mike = entity.id;
                entity = undefined;
                entity = report.bind(entity)(tango, zulu, mike);
                return entity;
            };
            zulu = mike.bind(zulu)(entity);
            mike = zulu.filter;
            report = _closure1_slot0;
            golf = _closure1_slot2;
            entity = 6;
            entity = golf[entity];
            entity = report.bind(tango)(entity);
            entity = entity.isNotNullish;
            verify = mike.bind(zulu)(entity);
            mike = _closure2_slot2;
            romeo = null;
            zulu = romeo == mike;
            entity = undefined;
            if(zulu) { _fun00006_ip = 196; continue _fun00005 }
 173:
            report = mike.applications;
            zulu = report.map;
            mike = function(argFoo) {
                entity = argFoo;
                return entity;
            };
            entity = zulu.bind(report)(mike);
 196:
            _closure2_slot4 = entity;
            zulu = _closure1_slot6;
            mike = _closure1_slot3;
            entity = {};
            report = offset.container;
            entity['style'] = report;
            golf = _closure1_slot6;
            report = {};
            options = offset.headerContainer;
            report['style'] = options;
            foxtrot = _closure1_slot5;
            echo = _closure1_slot0;
            backup = _closure1_slot2;
            kilo = 7;
            options = backup[kilo];
            options = echo.bind(tango)(options);
            yankee = options.Text;
            options = {'variant': 'text-lg/bold', 'color': 'header-primary'};
            output = backup[control];
            output = echo.bind(tango)(output);
            result = output.intl;
            output = result.string;
            backup = backup[control];
            backup = echo.bind(tango)(backup);
            backup = backup.t;
            backup = backup.oJyzCg;
            backup = output.bind(result)(backup);
            options['children'] = backup;
            yankee = foxtrot.bind(tango)(yankee, options);
            options = new Array(2);
            options[0] = yankee;
            yankee = _closure2_slot2;
            yankee = romeo != yankee;
            if(!yankee) { _fun00006_ip = 503; continue _fun00005 }
 354:
            backup = _closure1_slot5;
            source = _closure1_slot0;
            result = _closure1_slot2;
            romeo = 9;
            romeo = result[romeo];
            romeo = source.bind(tango)(romeo);
            foxtrot = romeo.PressableOpacity;
            romeo = {};
            output = offset.viewAll;
            romeo['style'] = output;
            sizing = function() { // Original name: onPress
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zulu = _closure2_slot4;
                    entity = null;
                    entity = entity != zulu;
                    if(!entity) { _fun00010_ip = 26; continue _fun00009 }
 16:
                    zulu = _closure2_slot1;
                    mike = undefined;
                    entity = zulu.bind(mike)();
 26:
                    return entity;
                }
            };
            romeo['onPress'] = sizing;
            output = _closure1_slot5;
            kilo = result[kilo];
            kilo = source.bind(tango)(kilo);
            sizing = kilo.Text;
            kilo = {'variant': 'text-sm/medium', 'color': 'text-brand'};
            echo = result[control];
            echo = source.bind(tango)(echo);
            update = echo.intl;
            echo = update.string;
            result = result[control];
            result = source.bind(tango)(result);
            result = result.t;
            result = result./qG8v7;
            result = echo.bind(update)(result);
            kilo['children'] = result;
            kilo = output.bind(tango)(sizing, kilo);
            romeo['children'] = kilo;
            yankee = backup.bind(tango)(foxtrot, romeo);
 503:
            options[1] = yankee;
            report['children'] = options;
            golf = golf.bind(tango)(mike, report);
            report = new Array(2);
            report[0] = golf;
            options = _closure1_slot5;
            golf = _closure1_slot4;
            oscar = {};
            yankee = offset.scrollView;
            oscar['style'] = yankee;
            offset = offset.scrollViewContentContainer;
            oscar['contentContainerStyle'] = offset;
            offset = true;
            oscar['horizontal'] = offset;
            offset = false;
            oscar['showsHorizontalScrollIndicator'] = offset;
            oscar['children'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
 596:
            entity = null;
            return entity;
        }
    };
    zulu['default'] = tango;
    zulu['IN_THIS_SERVER_ITEM_MAX'] = mike;
    return entity;
})();