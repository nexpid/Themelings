// app/modules/global_discovery_servers/native/components/GlobalDiscoveryServersCategories.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar) { // Original name: getOnPressHandler
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = argBar;
        var _closure2_slot1 = mike;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 5;
                zulu = zulu[entity];
                entity = undefined;
                report = tango.bind(entity)(zulu);
                tango = report.getCategoryIdFromServerTab;
                zulu = _closure2_slot1;
                golf = tango.bind(report)(zulu);
                report = _closure1_slot4;
                tango = report.getError;
                zulu = {};
                zulu['categoryId'] = golf;
                report = tango.bind(report)(zulu);
                options = _closure1_slot4;
                tango = options.getIsFetching;
                zulu = {};
                zulu['categoryId'] = golf;
                tango = tango.bind(options)(zulu);
                verify = _closure1_slot4;
                options = verify.getIsInitialFetchComplete;
                zulu = {};
                zulu['categoryId'] = golf;
                zulu = options.bind(verify)(zulu);
                if(zulu) { _fun00002_ip = 155; continue _fun00001 }
 112:
                if(tango) { _fun00002_ip = 155; continue _fun00001 }
 115:
                verify = _closure1_slot1;
                offset = _closure1_slot2;
                options = 6;
                options = offset[options];
                offset = verify.bind(entity)(options);
                verify = offset.fetchCategoryFeaturedGuilds;
                options = {};
                options['categoryId'] = golf;
                options = verify.bind(offset)(options);
                _fun00002_ip = 218; continue _fun00001;
 155:
                if(!zulu) { _fun00002_ip = 161; continue _fun00001 }
 158:
                zulu = !tango;
 161:
                if(!zulu) { _fun00002_ip = 170; continue _fun00001 }
 164:
                tango = null;
                zulu = tango != report;
 170:
                if(!zulu) { _fun00002_ip = 218; continue _fun00001 }
 173:
                tango = _closure1_slot1;
                report = _closure1_slot2;
                zulu = 6;
                zulu = report[zulu];
                report = tango.bind(entity)(zulu);
                tango = report.fetchCategoryFeaturedGuilds;
                zulu = {};
                zulu['categoryId'] = golf;
                options = true;
                zulu['forceRefresh'] = options;
                zulu = tango.bind(report)(zulu);
 218:
                tango = _closure1_slot0;
                report = _closure1_slot2;
                zulu = 7;
                zulu = report[zulu];
                report = tango.bind(entity)(zulu);
                tango = report.trackGlobalDiscoveryServersViewed;
                zulu = {};
                zulu['selectedCategoryId'] = golf;
                zulu = tango.bind(report)(zulu);
                report = _closure2_slot0;
                tango = report.navigate;
                mike = _closure1_slot6;
                zulu = mike.SERVERS_CATEGORY;
                mike = {};
                oscar = _closure2_slot1;
                mike['tab'] = oscar;
                mike = tango.bind(report)(zulu, mike);
                return entity;
            }
        };
        return entity;
    };
    var _closure1_slot8 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    options = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(options);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.GlobalDiscoveryServerTab;
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.GlobalDiscoveryRoutes;
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot7 = tango;
    tango = 16;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/global_discovery_servers/native/components/GlobalDiscoveryServersCategories.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: GlobalDiscoveryServersCategories
        entity = argFoo;
        report = entity.containerStyle;
        oscar = _closure1_slot0;
        golf = _closure1_slot2;
        zulu = 14;
        zulu = golf[zulu];
        tango = undefined;
        oscar = oscar.bind(tango)(zulu);
        zulu = oscar.useStackNavigation;
        verify = zulu.bind(oscar)();
        var _closure2_slot0 = verify;
        options = _closure1_slot3;
        oscar = options.useMemo;
        zulu = new Array(1);
        zulu[0] = verify;
        mike = function() {
            oscar = _closure2_slot0;
            mike = {};
            options = _closure1_slot0;
            verify = _closure1_slot2;
            golf = 8;
            zulu = verify[golf];
            report = undefined;
            zulu = options.bind(report)(zulu);
            offset = zulu.intl;
            tango = offset.string;
            zulu = verify[golf];
            zulu = options.bind(report)(zulu);
            zulu = zulu.t;
            zulu = zulu.CD/USE;
            zulu = tango.bind(offset)(zulu);
            mike['title'] = zulu;
            zulu = 9;
            zulu = verify[zulu];
            zulu = options.bind(report)(zulu);
            zulu = zulu.GameControllerIcon;
            mike['icon'] = zulu;
            tango = _closure1_slot8;
            zulu = _closure1_slot5;
            entity = zulu.GAMING;
            entity = tango.bind(report)(oscar, entity);
            mike['onPress'] = entity;
            entity = new Array(5);
            entity[0] = mike;
            mike = {};
            offset = verify[golf];
            offset = options.bind(report)(offset);
            romeo = offset.intl;
            yankee = romeo.string;
            offset = verify[golf];
            offset = options.bind(report)(offset);
            offset = offset.t;
            offset = offset.nt9PLy;
            offset = yankee.bind(romeo)(offset);
            mike['title'] = offset;
            offset = 10;
            offset = verify[offset];
            offset = options.bind(report)(offset);
            offset = offset.MusicIcon;
            mike['icon'] = offset;
            offset = zulu.MUSIC;
            offset = tango.bind(report)(oscar, offset);
            mike['onPress'] = offset;
            entity[1] = mike;
            mike = {};
            offset = verify[golf];
            offset = options.bind(report)(offset);
            romeo = offset.intl;
            yankee = romeo.string;
            offset = verify[golf];
            offset = options.bind(report)(offset);
            offset = offset.t;
            offset = offset.gSbmdn;
            offset = yankee.bind(romeo)(offset);
            mike['title'] = offset;
            offset = 11;
            offset = verify[offset];
            offset = options.bind(report)(offset);
            offset = offset.TvIcon;
            mike['icon'] = offset;
            offset = zulu.ENTERTAINMENT;
            offset = tango.bind(report)(oscar, offset);
            mike['onPress'] = offset;
            entity[2] = mike;
            mike = {};
            offset = verify[golf];
            offset = options.bind(report)(offset);
            romeo = offset.intl;
            yankee = romeo.string;
            offset = verify[golf];
            offset = options.bind(report)(offset);
            offset = offset.t;
            offset = offset.0A0By8;
            offset = yankee.bind(romeo)(offset);
            mike['title'] = offset;
            offset = 12;
            offset = verify[offset];
            offset = options.bind(report)(offset);
            offset = offset.ScienceIcon;
            mike['icon'] = offset;
            offset = zulu.TECH;
            offset = tango.bind(report)(oscar, offset);
            mike['onPress'] = offset;
            entity[3] = mike;
            mike = {};
            offset = verify[golf];
            offset = options.bind(report)(offset);
            yankee = offset.intl;
            offset = yankee.string;
            golf = verify[golf];
            golf = options.bind(report)(golf);
            golf = golf.t;
            golf = golf.Gy9woq;
            golf = offset.bind(yankee)(golf);
            mike['title'] = golf;
            golf = 13;
            golf = verify[golf];
            golf = options.bind(report)(golf);
            golf = golf.EducationIcon;
            mike['icon'] = golf;
            zulu = zulu.EDUCATION;
            zulu = tango.bind(report)(oscar, zulu);
            mike['onPress'] = zulu;
            entity[4] = mike;
            return entity;
        };
        oscar = oscar.bind(options)(mike, zulu);
        zulu = _closure1_slot7;
        mike = _closure1_slot1;
        entity = 15;
        entity = golf[entity];
        mike = mike.bind(tango)(entity);
        entity = {};
        entity['items'] = oscar;
        entity['containerStyle'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();