// app/modules/main_tabs_v2/native/tabs/guilds/HomePanelContent.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    report = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    var _closure1_slot2 = golf;
    entity = function() { // Original name: useHomePanelData
        oscar = _closure1_slot0;
        options = _closure1_slot2;
        tango = 8;
        entity = options[tango];
        report = undefined;
        offset = oscar.bind(report)(entity);
        verify = offset.useStateFromStoresArray;
        entity = _closure1_slot5;
        golf = new Array(1);
        golf[0] = entity;
        entity = function() {
            entity = global;
            zulu = entity.Object;
            mike = zulu.values;
            tango = _closure1_slot5;
            entity = tango.allSummaries;
            entity = entity.bind(tango)();
            mike = mike.bind(zulu)(entity);
            entity = mike.flat;
            entity = entity.bind(mike)();
            return entity;
        };
        entity = verify.bind(offset)(golf, entity);
        var _closure2_slot0 = entity;
        golf = options[tango];
        yankee = oscar.bind(report)(golf);
        offset = yankee.useStateFromStoresArray;
        golf = _closure1_slot6;
        verify = new Array(1);
        verify[0] = golf;
        golf = new Array(1);
        golf[0] = entity;
        entity = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 9;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.sortBy;
            mike = _closure2_slot0;
            entity = function(argFoo) {
                mike = argFoo;
                tango = _closure1_slot0;
                oscar = _closure1_slot2;
                entity = 9;
                entity = oscar[entity];
                report = undefined;
                options = tango.bind(report)(entity);
                golf = options.maxBy;
                tango = mike.people;
                entity = function(argFoo) {
                    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                        zulu = _closure1_slot6;
                        mike = zulu.getUserAffinity;
                        entity = argFoo;
                        zulu = mike.bind(zulu)(entity);
                        entity = null;
                        tango = entity == zulu;
                        mike = undefined;
                        if(tango) { _fun00002_ip = 38; continue _fun00001 }
 32:
                        mike = zulu.affinity;
 38:
                        zulu = entity != mike;
                        entity = 0;
                        if(!zulu) { _fun00002_ip = 50; continue _fun00001 }
 47:
                        entity = mike;
 50:
                        return entity;
                    }
                };
                tango = golf.bind(options)(tango, entity);
                entity = new Array(2);
                entity[0] = tango;
                tango = _closure1_slot1;
                zulu = 10;
                zulu = oscar[zulu];
                tango = tango.bind(report)(zulu);
                zulu = tango.extractTimestamp;
                mike = mike.endId;
                mike = zulu.bind(tango)(mike);
                entity[1] = mike;
                return entity;
            };
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        golf = offset.bind(yankee)(verify, entity, golf);
        var _closure2_slot1 = golf;
        entity = {};
        tango = options[tango];
        oscar = oscar.bind(report)(tango);
        report = oscar.useStateFromStoresObject;
        zulu = _closure1_slot7;
        tango = new Array(1);
        tango[0] = zulu;
        zulu = new Array(1);
        zulu[0] = golf;
        mike = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 9;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.keyBy;
            mike = _closure2_slot1;
            entity = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zulu = _closure1_slot7;
                    mike = zulu.getChannel;
                    entity = argFoo;
                    entity = entity.channelId;
                    zulu = mike.bind(zulu)(entity);
                    entity = null;
                    tango = entity == zulu;
                    mike = undefined;
                    if(tango) { _fun00004_ip = 41; continue _fun00003 }
 36:
                    mike = zulu.guild_id;
 41:
                    zulu = entity != mike;
                    entity = -1;
                    if(!zulu) { _fun00004_ip = 57; continue _fun00003 }
 54:
                    entity = mike;
 57:
                    return entity;
                }
            };
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        mike = report.bind(oscar)(tango, mike, zulu);
        entity['topicsByGuild'] = mike;
        return entity;
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo) { // Original name: HomePanelContextProvider
        entity = argFoo;
        report = entity.children;
        tango = _closure1_slot8;
        mike = _closure1_slot10;
        zulu = mike.Provider;
        mike = {};
        oscar = _closure1_slot12;
        entity = undefined;
        oscar = oscar.bind(entity)();
        mike['value'] = oscar;
        mike['children'] = report;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    var _closure1_slot13 = entity;
    entity = function(argFoo) { // Original name: MockHomePanelContextProvider
        entity = argFoo;
        entity = entity.children;
        oscar = _closure1_slot3;
        report = oscar.useMemo;
        tango = function() {
            entity = {};
            mike = {};
            entity['topicsByGuild'] = mike;
            return entity;
        };
        zulu = new Array(0);
        report = report.bind(oscar)(tango, zulu);
        tango = _closure1_slot8;
        mike = _closure1_slot10;
        zulu = mike.Provider;
        mike = {};
        mike['value'] = report;
        mike['children'] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    var _closure1_slot14 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    options = golf[entity];
    tango = argCorge;
    entity = undefined;
    options = tango.bind(entity)(options);
    var _closure1_slot3 = options;
    romeo = 1;
    tango = golf[romeo];
    tango = oscar.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot4 = tango;
    tango = 2;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    yankee = tango.DM_WIDTH;
    tango = 6;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot8 = tango;
    tango = 7;
    tango = golf[tango];
    verify = oscar.bind(entity)(tango);
    report = verify.createStyles;
    tango = {};
    offset = {};
    offset['flex'] = romeo;
    tango['container'] = offset;
    offset = {};
    offset['flex'] = romeo;
    tango['guildsListContainerGestured'] = offset;
    offset = {};
    offset['flex'] = romeo;
    offset['width'] = yankee;
    tango['guildLisetContainerDefault'] = offset;
    tango = report.bind(verify)(tango);
    var _closure1_slot9 = tango;
    report = options.createContext;
    tango = {};
    verify = {};
    tango['topicsByGuild'] = verify;
    tango = report.bind(options)(tango);
    var _closure1_slot10 = tango;
    report = {};
    verify = "function HomePanelContentTsx1(){const{withSpring,gestureState,panelX,drawerState,HOME_GESTURE_DRAG_PHYSICS,HOME_DRAWER_FLING_PHYSICS,serverGestureEnabled,safeArea,PEEK_SIZE}=this.__closure;return{transform:[{translateX:withSpring(gestureState.get().active&&gestureState.get().requiresPop?panelX.get():drawerState.get()==='open'?Math.max(0,Math.min(8,panelX.get())):0,gestureState.get().active&&gestureState.get().requiresPop?HOME_GESTURE_DRAG_PHYSICS:HOME_DRAWER_FLING_PHYSICS,'animate-always')}],marginRight:serverGestureEnabled?safeArea.get().right+PEEK_SIZE+8:0};}";
    report['code'] = verify;
    var _closure1_slot11 = report;
    report = options.memo;
    mike = function() {
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            yankee = _closure1_slot1;
            foxtrot = _closure1_slot2;
            mike = 11;
            mike = foxtrot[mike];
            tango = undefined;
            report = yankee.bind(tango)(mike);
            mike = 'nav_experiment_server_drawer_enabled';
            mike = report.bind(tango)(mike);
            var _closure2_slot0 = mike;
            golf = _closure1_slot3;
            oscar = golf.useContext;
            verify = _closure1_slot0;
            options = 12;
            report = foxtrot[options];
            report = verify.bind(tango)(report);
            report = report.HomeDrawerStateContext;
            report = oscar.bind(golf)(report);
            backup = report.drawerState;
            var _closure2_slot1 = backup;
            romeo = report.safeArea;
            var _closure2_slot2 = romeo;
            output = report.gestureState;
            var _closure2_slot3 = output;
            sizing = report.panelX;
            var _closure2_slot4 = sizing;
            report = _closure1_slot9;
            kilo = report.bind(tango)();
            offset = 13;
            report = foxtrot[offset];
            oscar = verify.bind(tango)(report);
            report = oscar.useAnimatedStyle;
            zulu = function() { // Original name: o
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    entity = {};
                    report = {};
                    tango = _closure1_slot0;
                    oscar = _closure1_slot2;
                    mike = 14;
                    mike = oscar[mike];
                    oscar = undefined;
                    offset = tango.bind(oscar)(mike);
                    verify = offset.withSpring;
                    golf = _closure2_slot3;
                    mike = golf.get;
                    mike = mike.bind(golf)();
                    mike = mike.active;
                    if(!mike) { _fun00008_ip = 81; continue _fun00007 }
 59:
                    golf = _closure2_slot3;
                    mike = golf.get;
                    mike = mike.bind(golf)();
                    mike = mike.requiresPop;
                    if(mike) { _fun00008_ip = 160; continue _fun00007 }
 81:
                    golf = _closure2_slot1;
                    mike = golf.get;
                    golf = mike.bind(golf)();
                    romeo = 0;
                    mike = 'open';
                    options = 0;
                    if(!(mike === golf)) { _fun00008_ip = 158; continue _fun00007 }
 106:
                    mike = global;
                    yankee = mike.Math;
                    golf = yankee.max;
                    kilo = mike.Math;
                    backup = kilo.min;
                    foxtrot = _closure2_slot4;
                    mike = foxtrot.get;
                    foxtrot = mike.bind(foxtrot)();
                    mike = 8;
                    mike = backup.bind(kilo)(mike, foxtrot);
                    options = golf.bind(yankee)(romeo, mike);
 158:
                    _fun00008_ip = 173; continue _fun00007;
 160:
                    golf = _closure2_slot4;
                    mike = golf.get;
                    options = mike.bind(golf)();
 173:
                    golf = _closure2_slot3;
                    mike = golf.get;
                    mike = mike.bind(golf)();
                    mike = mike.active;
                    if(!mike) { _fun00008_ip = 217; continue _fun00007 }
 195:
                    golf = _closure2_slot3;
                    mike = golf.get;
                    mike = mike.bind(golf)();
                    mike = mike.requiresPop;
                    if(mike) { _fun00008_ip = 245; continue _fun00007 }
 217:
                    golf = _closure1_slot0;
                    yankee = _closure1_slot2;
                    mike = 12;
                    mike = yankee[mike];
                    mike = golf.bind(oscar)(mike);
                    golf = mike.HOME_DRAWER_FLING_PHYSICS;
                    _fun00008_ip = 271; continue _fun00007;
 245:
                    yankee = _closure1_slot0;
                    romeo = _closure1_slot2;
                    mike = 12;
                    mike = romeo[mike];
                    mike = yankee.bind(oscar)(mike);
                    golf = mike.HOME_GESTURE_DRAG_PHYSICS;
 271:
                    mike = 'animate-always';
                    mike = verify.bind(offset)(options, golf, mike);
                    report['translateX'] = mike;
                    mike = new Array(1);
                    mike[0] = report;
                    entity['transform'] = mike;
                    report = _closure2_slot0;
                    mike = 0;
                    if(!report) { _fun00008_ip = 365; continue _fun00007 }
 310:
                    report = _closure2_slot2;
                    tango = report.get;
                    tango = tango.bind(report)();
                    tango = tango.right;
                    report = _closure1_slot0;
                    golf = _closure1_slot2;
                    zulu = 12;
                    zulu = golf[zulu];
                    zulu = report.bind(oscar)(zulu);
                    zulu = zulu.PEEK_SIZE;
                    tango = tango + zulu;
                    zulu = 8;
                    mike = tango + zulu;
 365:
                    entity['marginRight'] = mike;
                    return entity;
                }
            };
            golf = {};
            result = 14;
            result = foxtrot[result];
            result = verify.bind(tango)(result);
            result = result.withSpring;
            golf['withSpring'] = result;
            golf['gestureState'] = output;
            golf['panelX'] = sizing;
            golf['drawerState'] = backup;
            backup = foxtrot[options];
            backup = verify.bind(tango)(backup);
            backup = backup.HOME_GESTURE_DRAG_PHYSICS;
            golf['HOME_GESTURE_DRAG_PHYSICS'] = backup;
            backup = foxtrot[options];
            backup = verify.bind(tango)(backup);
            backup = backup.HOME_DRAWER_FLING_PHYSICS;
            golf['HOME_DRAWER_FLING_PHYSICS'] = backup;
            golf['serverGestureEnabled'] = mike;
            golf['safeArea'] = romeo;
            options = foxtrot[options];
            options = verify.bind(tango)(options);
            options = options.PEEK_SIZE;
            golf['PEEK_SIZE'] = options;
            zulu['__closure'] = golf;
            golf = 10692769092476.0;
            zulu['__workletHash'] = golf;
            golf = _closure1_slot11;
            zulu['__initData'] = golf;
            backup = report.bind(oscar)(zulu);
            oscar = _closure1_slot8;
            zulu = _closure1_slot10;
            report = zulu.Provider;
            zulu = {};
            golf = _closure1_slot12;
            golf = golf.bind(tango)();
            zulu['value'] = golf;
            verify = _closure1_slot8;
            options = _closure1_slot4;
            golf = {};
            romeo = kilo.container;
            golf['style'] = romeo;
            romeo = _closure1_slot8;
            offset = foxtrot[offset];
            offset = yankee.bind(tango)(offset);
            yankee = offset.View;
            offset = {};
            foxtrot = new Array(2);
            foxtrot[0] = backup;
            if(mike) { _fun00006_ip = 385; continue _fun00005 }
 377:
            backup = kilo.guildLisetContainerDefault;
            _fun00006_ip = 391; continue _fun00005;
 385:
            backup = kilo.guildsListContainerGestured;
 391:
            foxtrot[1] = backup;
            offset['style'] = foxtrot;
            kilo = _closure1_slot8;
            backup = _closure1_slot1;
            sizing = _closure1_slot2;
            foxtrot = 15;
            foxtrot = sizing[foxtrot];
            backup = backup.bind(tango)(foxtrot);
            foxtrot = {};
            foxtrot = kilo.bind(tango)(backup, foxtrot);
            offset['children'] = foxtrot;
            offset = romeo.bind(tango)(yankee, offset);
            golf['children'] = offset;
            golf = verify.bind(tango)(options, golf);
            zulu['children'] = golf;
            report = oscar.bind(tango)(report, zulu);
            zulu = _closure1_slot8;
            if(mike) { _fun00006_ip = 474; continue _fun00005 }
 468:
            mike = _closure1_slot14;
            _fun00006_ip = 478; continue _fun00005;
 474:
            mike = _closure1_slot13;
 478:
            entity = {};
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    mike = report.bind(options)(mike);
    report = 16;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/main_tabs_v2/native/tabs/guilds/HomePanelContent.tsx';
    report = oscar.bind(golf)(report);
    zulu['HomePanelContext'] = tango;
    zulu['HomePanelContent'] = mike;
    return entity;
})();