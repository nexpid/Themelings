// app/modules/quests/native/QuestHome.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    foxtrot = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = foxtrot;
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
    golf = tango.bind(entity)(golf);
    var _closure1_slot3 = golf;
    romeo = 1;
    tango = oscar[romeo];
    tango = report.bind(entity)(tango);
    options = tango.View;
    var _closure1_slot4 = options;
    options = tango.ActivityIndicator;
    var _closure1_slot5 = options;
    yankee = tango.StyleSheet;
    tango = tango.ScrollView;
    var _closure1_slot6 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = foxtrot.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.QuestsExperimentLocations;
    var _closure1_slot8 = tango;
    tango = 4;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.jsx;
    var _closure1_slot9 = options;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot10 = tango;
    tango = 5;
    tango = oscar[tango];
    verify = report.bind(entity)(tango);
    options = verify.createStyles;
    tango = {};
    offset = {};
    offset['flex'] = romeo;
    romeo = 6;
    romeo = oscar[romeo];
    romeo = foxtrot.bind(entity)(romeo);
    romeo = romeo.spacing;
    romeo = romeo.PX_16;
    offset['padding'] = romeo;
    tango['container'] = offset;
    offset = {};
    kilo = yankee.absoluteFillObject;
    sizing = offset;
    yankee = copyDataProperties(sizing, kilo);
    romeo = 'center';
    yankee = 'justifyContent';
    offset[yankee] = romeo;
    yankee = 'alignItems';
    offset[yankee] = romeo;
    tango['loadingContainer'] = offset;
    tango = options.bind(verify)(tango);
    var _closure1_slot11 = tango;
    tango = golf.forwardRef;
    mike = function(argFoo, argBar) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            verify = mike.containerStyle;
            romeo = mike.isNavigationComplete;
            entity = mike.scrollToQuestId;
            report = mike.ListEmptyComponent;
            backup = mike.ListFooterComponent;
            yankee = _closure1_slot0;
            foxtrot = _closure1_slot2;
            mike = 9;
            mike = foxtrot[mike];
            oscar = undefined;
            tango = yankee.bind(oscar)(mike);
            zulu = tango.useIsEligibleForQuests;
            mike = {};
            options = _closure1_slot8;
            options = options.QUEST_HOME_MOBILE;
            mike['location'] = options;
            zulu = zulu.bind(tango)(mike);
            mike = _closure1_slot11;
            options = mike.bind(oscar)();
            tango = _closure1_slot1;
            mike = 10;
            mike = foxtrot[mike];
            mike = tango.bind(oscar)(mike);
            mike = mike.bind(oscar)();
            sizing = mike.bottom;
            tango = 11;
            mike = foxtrot[tango];
            output = yankee.bind(oscar)(mike);
            kilo = output.useFilteredQuests;
            mike = foxtrot[tango];
            mike = yankee.bind(oscar)(mike);
            mike = mike.QuestTabs;
            mike = mike.ALL;
            mike = kilo.bind(output)(mike);
            kilo = mike.quests;
            var _closure2_slot0 = kilo;
            mike = mike.isFetchingCurrentQuests;
            tango = foxtrot[tango];
            yankee = yankee.bind(oscar)(tango);
            tango = yankee.useExpiredQuestsMap;
            tango = tango.bind(yankee)();
            var _closure2_slot1 = tango;
            echo = _closure1_slot3;
            foxtrot = echo.useMemo;
            yankee = new Array(2);
            yankee[0] = kilo;
            yankee[1] = tango;
            tango = function() {
                zulu = _closure2_slot0;
                mike = zulu.filter;
                entity = function(argFoo) {
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        zulu = argFoo;
                        tango = zulu.userStatus;
                        entity = null;
                        report = entity == tango;
                        mike = undefined;
                        if(report) { _fun00004_ip = 26; continue _fun00003 }
 20:
                        mike = tango.completedAt;
 26:
                        mike = entity != mike;
                        report = _closure2_slot1;
                        tango = report.get;
                        zulu = zulu.id;
                        zulu = tango.bind(report)(zulu);
                        entity = entity != zulu;
                        if(!entity) { _fun00004_ip = 62; continue _fun00003 }
 59:
                        entity = zulu;
 62:
                        entity = !entity;
                        if(entity) { _fun00004_ip = 71; continue _fun00003 }
 68:
                        entity = mike;
 71:
                        return entity;
                    }
                };
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            kilo = foxtrot.bind(echo)(tango, yankee);
            tango = {};
            tango['scrollToQuestId'] = entity;
            entity = function(argFoo) {
                mike = argFoo;
                yankee = mike.scrollToQuestId;
                var _closure3_slot0 = yankee;
                report = _closure1_slot0;
                tango = _closure1_slot2;
                zulu = 7;
                tango = tango[zulu];
                zulu = undefined;
                oscar = report.bind(zulu)(tango);
                report = oscar.useStateFromStores;
                zulu = _closure1_slot7;
                tango = new Array(1);
                tango[0] = zulu;
                zulu = function() {
                    entity = _closure1_slot7;
                    entity = entity.useReducedMotion;
                    return entity;
                };
                verify = report.bind(oscar)(tango, zulu);
                var _closure3_slot1 = verify;
                options = _closure1_slot3;
                zulu = options.useRef;
                mike = null;
                oscar = zulu.bind(options)(mike);
                var _closure3_slot2 = oscar;
                zulu = options.useRef;
                mike = {};
                tango = {};
                report = 0;
                tango['scrollY'] = report;
                mike['parent'] = tango;
                tango = {};
                mike['children'] = tango;
                tango = zulu.bind(options)(mike);
                var _closure3_slot3 = tango;
                report = options.useCallback;
                zulu = function(argFoo) {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        options = argFoo;
                        entity = global;
                        zulu = entity.Object;
                        mike = zulu.keys;
                        entity = _closure3_slot3;
                        entity = entity.current;
                        entity = entity.children;
                        oscar = mike.bind(zulu)(entity);
                        entity = oscar.length;
                        report = 0;
                        mike = report < entity;
                        entity = undefined;
                        tango = null;
                        zulu = undefined;
                        if(!mike) { _fun00006_ip = 139; continue _fun00005 }
 58:
                        offset = oscar[report];
                        mike = tango != options;
                        if(!mike) { _fun00006_ip = 73; continue _fun00005 }
 69:
                        mike = offset !== options;
 73:
                        if(mike) { _fun00006_ip = 101; continue _fun00005 }
 76:
                        verify = _closure3_slot3;
                        verify = verify.current;
                        verify = verify.children;
                        verify = verify[offset];
                        mike = tango == verify;
                        zulu = verify;
 101:
                        if(mike) { _fun00006_ip = 114; continue _fun00005 }
 104:
                        verify = zulu.calculateVisibility;
                        mike = tango == verify;
 114:
                        if(mike) { _fun00006_ip = 127; continue _fun00005 }
 117:
                        mike = zulu.calculateVisibility;
                        mike = mike.bind(zulu)();
 127:
                        report = report + 1;
                        mike = oscar.length;
                        if(report < mike) { _fun00006_ip = 58; continue _fun00005 }
 139:
                        return entity;
                    }
                };
                mike = new Array(0);
                offset = report.bind(options)(zulu, mike);
                var _closure3_slot4 = offset;
                report = options.useCallback;
                zulu = new Array(1);
                zulu[0] = offset;
                mike = function(argFoo) {
                    mike = _closure3_slot3;
                    mike = mike.current;
                    zulu = mike.parent;
                    mike = argFoo;
                    mike = mike.nativeEvent;
                    mike = mike.contentOffset;
                    mike = mike.y;
                    zulu['scrollY'] = mike;
                    mike = _closure3_slot4;
                    entity = undefined;
                    mike = mike.bind(entity)();
                    return entity;
                };
                report = report.bind(options)(mike, zulu);
                golf = options.useCallback;
                zulu = new Array(1);
                zulu[0] = offset;
                mike = function(argFoo) {
                    mike = _closure3_slot3;
                    mike = mike.current;
                    zulu = mike.parent;
                    mike = argFoo;
                    mike = mike.nativeEvent;
                    mike = mike.layout;
                    zulu['layout'] = mike;
                    mike = _closure3_slot4;
                    entity = undefined;
                    mike = mike.bind(entity)();
                    return entity;
                };
                zulu = golf.bind(options)(mike, zulu);
                golf = options.useCallback;
                mike = new Array(3);
                mike[0] = yankee;
                mike[1] = offset;
                mike[2] = verify;
                entity = function(argFoo, argBar) {
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        report = argFoo;
                        zulu = argBar;
                        mike = _closure3_slot0;
                        if(!(zulu === mike)) { _fun00008_ip = 126; continue _fun00007 }
 17:
                        mike = _closure3_slot2;
                        oscar = mike.current;
                        mike = null;
                        if(!(mike != oscar)) { _fun00008_ip = 126; continue _fun00007 }
 32:
                        tango = oscar.scrollTo;
                        mike = {};
                        golf = report.nativeEvent;
                        golf = golf.layout;
                        options = golf.y;
                        offset = _closure1_slot0;
                        verify = _closure1_slot2;
                        golf = 8;
                        verify = verify[golf];
                        golf = undefined;
                        golf = offset.bind(golf)(verify);
                        verify = golf.QUEST_CARD_SPACING;
                        golf = 0.5;
                        golf = golf * verify;
                        golf = options + golf;
                        mike['y'] = golf;
                        golf = _closure3_slot1;
                        golf = !golf;
                        mike['animated'] = golf;
                        mike = tango.bind(oscar)(mike);
 126:
                        oscar = _closure3_slot3;
                        mike = oscar.current;
                        tango = mike.children;
                        mike = {};
                        oscar = oscar.current;
                        oscar = oscar.children;
                        yankee = oscar[zulu];
                        romeo = mike;
                        oscar = copyDataProperties(romeo, yankee);
                        report = report.nativeEvent;
                        oscar = report.layout;
                        report = 'layout';
                        mike[report] = oscar;
                        tango[zulu] = mike;
                        mike = _closure3_slot4;
                        entity = undefined;
                        mike = mike.bind(entity)(zulu);
                        return entity;
                    }
                };
                mike = golf.bind(options)(entity, mike);
                entity = {};
                entity['scrollViewRef'] = oscar;
                entity['onScroll'] = report;
                entity['visibilityRef'] = tango;
                entity['onLayout'] = zulu;
                entity['onQuestCardLayout'] = mike;
                return entity;
            };
            entity = entity.bind(oscar)(tango);
            result = entity.scrollViewRef;
            var _closure2_slot2 = result;
            output = entity.onScroll;
            foxtrot = entity.onLayout;
            tango = entity.onQuestCardLayout;
            var _closure2_slot3 = tango;
            entity = entity.visibilityRef;
            var _closure2_slot4 = entity;
            yankee = echo.useImperativeHandle;
            tango = argBar;
            entity = function() {
                entity = {};
                mike = function(argFoo) { // Original name: scrollTo
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        entity = _closure2_slot2;
                        zulu = entity.current;
                        entity = null;
                        if(!(entity != zulu)) { _fun00010_ip = 32; continue _fun00009 }
 18:
                        mike = zulu.scrollTo;
                        entity = argFoo;
                        entity = mike.bind(zulu)(entity);
 32:
                        entity = undefined;
                        return entity;
                    }
                };
                entity['scrollTo'] = mike;
                return entity;
            };
            entity = yankee.bind(echo)(tango, entity);
            yankee = null;
            entity = null;
            if(!zulu) { _fun00002_ip = 562; continue _fun00001 }
 330:
            if(!romeo) { _fun00002_ip = 498; continue _fun00001 }
 336:
            if(mike) { _fun00002_ip = 498; continue _fun00001 }
 342:
            zulu = kilo.length;
            mike = 0;
            if(!(mike !== zulu)) { _fun00002_ip = 484; continue _fun00001 }
 356:
            tango = _closure1_slot10;
            zulu = _closure1_slot6;
            mike = {};
            update = options.container;
            echo = new Array(2);
            echo[0] = update;
            echo[1] = verify;
            mike['style'] = echo;
            mike['ref'] = result;
            mike['onScroll'] = output;
            mike['onLayout'] = foxtrot;
            foxtrot = 16;
            mike['scrollEventThrottle'] = foxtrot;
            foxtrot = {};
            foxtrot['paddingBottom'] = sizing;
            mike['contentContainerStyle'] = foxtrot;
            if(!romeo) { _fun00002_ip = 441; continue _fun00001 }
 424:
            foxtrot = kilo.map;
            offset = function(argFoo, argBar) {
                entity = argFoo;
                var _closure3_slot0 = entity;
                mike = argBar;
                var _closure3_slot1 = mike;
                report = _closure1_slot9;
                options = _closure1_slot0;
                verify = _closure1_slot2;
                mike = 12;
                mike = verify[mike];
                tango = undefined;
                mike = options.bind(tango)(mike);
                zulu = mike.QuestContentImpressionTrackerNative;
                mike = {};
                mike['questOrQuests'] = entity;
                golf = 13;
                golf = verify[golf];
                golf = options.bind(tango)(golf);
                golf = golf.QuestContent;
                golf = golf.QUEST_HOME_MOBILE;
                mike['questContent'] = golf;
                golf = false;
                mike['trackGuildAndChannelMetadata'] = golf;
                golf = _closure2_slot4;
                mike['visibilityRef'] = golf;
                oscar = function() { // Original name: children
                    report = _closure1_slot9;
                    mike = _closure1_slot0;
                    zulu = _closure1_slot2;
                    entity = 8;
                    entity = zulu[entity];
                    tango = undefined;
                    entity = mike.bind(tango)(entity);
                    zulu = entity.QuestCard;
                    mike = {};
                    entity = _closure3_slot0;
                    mike['quest'] = entity;
                    oscar = _closure3_slot1;
                    mike['questContentPosition'] = oscar;
                    oscar = _closure2_slot3;
                    mike['onLayout'] = oscar;
                    entity = entity.id;
                    entity = report.bind(tango)(zulu, mike, entity);
                    return entity;
                };
                mike['children'] = oscar;
                entity = entity.id;
                entity = report.bind(tango)(zulu, mike, entity);
                return entity;
            };
            romeo = foxtrot.bind(kilo)(offset);
 441:
            offset = new Array(2);
            offset[0] = romeo;
            yankee = yankee != backup;
            if(!yankee) { _fun00002_ip = 468; continue _fun00001 }
 456:
            foxtrot = _closure1_slot9;
            romeo = {};
            yankee = foxtrot.bind(oscar)(backup, romeo);
 468:
            offset[1] = yankee;
            mike['children'] = offset;
            mike = tango.bind(oscar)(zulu, mike);
            _fun00002_ip = 496; continue _fun00001;
 484:
            tango = _closure1_slot9;
            zulu = {};
            mike = tango.bind(oscar)(report, zulu);
 496:
            _fun00002_ip = 559; continue _fun00001;
 498:
            report = _closure1_slot9;
            tango = _closure1_slot4;
            zulu = {};
            offset = options.loadingContainer;
            options = new Array(2);
            options[0] = offset;
            options[1] = verify;
            zulu['style'] = options;
            options = _closure1_slot5;
            golf = {};
            verify = true;
            golf['animating'] = verify;
            golf = report.bind(oscar)(options, golf);
            zulu['children'] = golf;
            mike = report.bind(oscar)(tango, zulu);
 559:
            entity = mike;
 562:
            return entity;
        }
    };
    tango = tango.bind(golf)(mike);
    mike = golf.memo;
    mike = mike.bind(golf)(tango);
    tango = 14;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/quests/native/QuestHome.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();