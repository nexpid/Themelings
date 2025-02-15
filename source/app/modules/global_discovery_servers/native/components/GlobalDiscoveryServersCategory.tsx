// app/modules/global_discovery_servers/native/components/GlobalDiscoveryServersCategory.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    yankee = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
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
    golf = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot3 = tango;
    offset = 1;
    tango = oscar[offset];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.EMPTY_GUILD_IDS;
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.AnalyticsPages;
    var _closure1_slot7 = golf;
    golf = tango.AnalyticsSections;
    var _closure1_slot8 = golf;
    tango = tango.AnalyticsObjects;
    var _closure1_slot9 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot10 = tango;
    tango = 6;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {};
    verify['flex'] = offset;
    offset = 7;
    offset = oscar[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.BG_BASE_PRIMARY;
    verify['backgroundColor'] = offset;
    tango['container'] = verify;
    verify = {};
    offset = 16;
    verify['paddingTop'] = offset;
    tango['content'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot11 = tango;
    tango = 15;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/global_discovery_servers/native/components/GlobalDiscoveryServersCategory.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: GlobalDiscoveryServersCategory
        mike = argFoo;
        backup = mike.loadId;
        mike = _closure1_slot11;
        tango = undefined;
        golf = mike.bind(tango)();
        zulu = _closure1_slot0;
        yankee = _closure1_slot2;
        mike = 8;
        mike = yankee[mike];
        oscar = zulu.bind(tango)(mike);
        mike = oscar.useRoute;
        mike = mike.bind(oscar)();
        mike = mike.params;
        mike = mike.tab;
        var _closure2_slot0 = mike;
        oscar = 9;
        oscar = yankee[oscar];
        options = zulu.bind(tango)(oscar);
        oscar = options.getCategoryIdFromServerTab;
        foxtrot = oscar.bind(options)(mike);
        var _closure2_slot1 = foxtrot;
        options = 10;
        oscar = yankee[options];
        kilo = zulu.bind(tango)(oscar);
        romeo = kilo.useStateFromStores;
        oscar = _closure1_slot5;
        offset = new Array(1);
        offset[0] = oscar;
        verify = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zulu = _closure1_slot5;
                mike = zulu.getIsInitialFetchComplete;
                entity = {};
                tango = _closure2_slot1;
                entity['categoryId'] = tango;
                mike = mike.bind(zulu)(entity);
                entity = null;
                entity = entity != mike;
                if(!entity) { _fun00002_ip = 44; continue _fun00001 }
 41:
                entity = mike;
 44:
                return entity;
            }
        };
        offset = romeo.bind(kilo)(offset, verify);
        var _closure2_slot2 = offset;
        verify = yankee[options];
        sizing = zulu.bind(tango)(verify);
        kilo = sizing.useStateFromStores;
        romeo = new Array(1);
        romeo[0] = oscar;
        verify = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zulu = _closure1_slot5;
                mike = zulu.getIsFetching;
                entity = {};
                tango = _closure2_slot1;
                entity['categoryId'] = tango;
                mike = mike.bind(zulu)(entity);
                entity = null;
                entity = entity != mike;
                if(!entity) { _fun00004_ip = 44; continue _fun00003 }
 41:
                entity = mike;
 44:
                return entity;
            }
        };
        verify = kilo.bind(sizing)(romeo, verify);
        var _closure2_slot3 = verify;
        romeo = yankee[options];
        output = zulu.bind(tango)(romeo);
        sizing = output.useStateFromStores;
        kilo = new Array(1);
        kilo[0] = oscar;
        romeo = function() {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                tango = _closure1_slot5;
                zulu = tango.getGuildIds;
                entity = {};
                report = _closure2_slot1;
                entity['categoryId'] = report;
                entity = zulu.bind(tango)(entity);
                zulu = null;
                if(!(zulu == entity)) { _fun00006_ip = 42; continue _fun00005 }
 38:
                entity = _closure1_slot6;
 42:
                return entity;
            }
        };
        romeo = sizing.bind(output)(kilo, romeo);
        var _closure2_slot4 = romeo;
        options = yankee[options];
        sizing = zulu.bind(tango)(options);
        kilo = sizing.useStateFromStores;
        options = new Array(1);
        options[0] = oscar;
        oscar = function() {
            zulu = _closure1_slot5;
            mike = zulu.getErrorMessage;
            entity = {};
            tango = _closure2_slot1;
            entity['categoryId'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        options = kilo.bind(sizing)(options, oscar);
        oscar = _closure1_slot3;
        sizing = oscar.useEffect;
        kilo = new Array(3);
        kilo[0] = foxtrot;
        kilo[1] = verify;
        kilo[2] = offset;
        offset = function() {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                entity = _closure2_slot2;
                if(entity) { _fun00008_ip = 14; continue _fun00007 }
 10:
                entity = _closure2_slot3;
 14:
                if(entity) { _fun00008_ip = 64; continue _fun00007 }
 17:
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 11;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.fetchCategoryFeaturedGuilds;
                entity = {};
                tango = _closure2_slot1;
                entity['categoryId'] = tango;
                entity = mike.bind(zulu)(entity);
 64:
                entity = undefined;
                return entity;
            }
        };
        offset = sizing.bind(oscar)(offset, kilo);
        offset = 12;
        offset = yankee[offset];
        kilo = zulu.bind(tango)(offset);
        offset = kilo.useStackNavigation;
        sizing = offset.bind(kilo)();
        var _closure2_slot5 = sizing;
        kilo = oscar.useEffect;
        offset = new Array(2);
        offset[0] = sizing;
        offset[1] = mike;
        mike = function() {
            tango = _closure2_slot5;
            zulu = tango.setOptions;
            mike = {};
            golf = _closure1_slot0;
            oscar = _closure1_slot2;
            entity = 9;
            oscar = oscar[entity];
            entity = undefined;
            golf = golf.bind(entity)(oscar);
            oscar = golf.getGlobalDiscoveryServersTabTitle;
            report = _closure2_slot0;
            report = oscar.bind(golf)(report);
            mike['title'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        mike = kilo.bind(oscar)(mike, offset);
        mike = 13;
        mike = yankee[mike];
        offset = zulu.bind(tango)(mike);
        zulu = offset.useGuildCardPressHandler;
        mike = {};
        mike['loadId'] = backup;
        mike['categoryId'] = foxtrot;
        foxtrot = {};
        backup = _closure1_slot7;
        backup = backup.GLOBAL_DISCOVERY;
        foxtrot['page'] = backup;
        backup = _closure1_slot8;
        backup = backup.DISCOVER_POPULAR;
        foxtrot['section'] = backup;
        backup = _closure1_slot9;
        backup = backup.CARD;
        foxtrot['object'] = backup;
        mike['analyticsLocation'] = foxtrot;
        offset = zulu.bind(offset)(mike);
        var _closure2_slot6 = offset;
        zulu = oscar.useMemo;
        mike = new Array(2);
        mike[0] = romeo;
        mike[1] = offset;
        entity = function() {
            entity = new Array(0);
            var _closure3_slot0 = entity;
            tango = _closure2_slot4;
            zulu = tango.forEach;
            mike = function(argFoo, argBar) {
                report = argFoo;
                var _closure4_slot0 = report;
                entity = argBar;
                var _closure4_slot1 = entity;
                zulu = _closure3_slot0;
                mike = zulu.push;
                entity = {};
                options = _closure1_slot0;
                golf = _closure1_slot2;
                oscar = 14;
                golf = golf[oscar];
                oscar = undefined;
                oscar = options.bind(oscar)(golf);
                oscar = oscar.GlobalDiscoveryServerListItemTypes;
                oscar = oscar.CARD;
                entity['type'] = oscar;
                entity['guildId'] = report;
                tango = function() { // Original name: onPress
                    tango = _closure2_slot6;
                    zulu = _closure4_slot0;
                    mike = _closure4_slot1;
                    entity = undefined;
                    entity = tango.bind(entity)(zulu, mike);
                    return entity;
                };
                entity['onPress'] = tango;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        offset = zulu.bind(oscar)(entity, mike);
        zulu = _closure1_slot10;
        mike = _closure1_slot4;
        entity = {};
        oscar = golf.container;
        entity['style'] = oscar;
        oscar = _closure1_slot1;
        report = 14;
        report = yankee[report];
        oscar = oscar.bind(tango)(report);
        report = {};
        report['items'] = offset;
        report['loading'] = verify;
        report['errorMessage'] = options;
        golf = golf.content;
        report['contentContainerStyle'] = golf;
        report = zulu.bind(tango)(oscar, report);
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();