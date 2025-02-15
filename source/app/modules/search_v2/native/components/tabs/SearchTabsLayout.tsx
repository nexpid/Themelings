// app/modules/search_v2/native/components/tabs/SearchTabsLayout.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    golf = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = options.bind(entity)(tango);
    var _closure1_slot3 = tango;
    yankee = 1;
    golf = oscar[yankee];
    tango = argCorge;
    golf = tango.bind(entity)(golf);
    var _closure1_slot4 = golf;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.getSearchQueryString;
    var _closure1_slot7 = options;
    tango = tango.subscribeSearchTabsLayout;
    var _closure1_slot8 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.MESSAGE_SEARCH_RESULT_TABS_SET;
    var _closure1_slot9 = options;
    options = tango.SEARCH_MESSAGE_TAB_SENTINEL;
    var _closure1_slot10 = options;
    tango = tango.SearchTabs;
    var _closure1_slot11 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ComponentActions;
    var _closure1_slot12 = tango;
    tango = 7;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.jsx;
    var _closure1_slot13 = options;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.jsxs;
    var _closure1_slot14 = options;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Fragment;
    var _closure1_slot15 = tango;
    tango = 8;
    tango = oscar[tango];
    verify = report.bind(entity)(tango);
    options = verify.createStyles;
    tango = {};
    offset = {'flex': 0, 'minHeight': 32};
    tango['controls'] = offset;
    offset = {};
    offset['flex'] = yankee;
    tango['pages'] = offset;
    tango = options.bind(verify)(tango);
    var _closure1_slot16 = tango;
    tango = {};
    options = 'function SearchTabsLayoutTsx1({contentOffset:contentOffset}){const{isDragging,swipeForMemberListContext}=this.__closure;var _swipeForMemberListCo;isDragging.set(true);(_swipeForMemberListCo=swipeForMemberListContext)===null||_swipeForMemberListCo===void 0||_swipeForMemberListCo.disallowGesture.set(contentOffset.x>0);}';
    tango['code'] = options;
    var _closure1_slot17 = tango;
    tango = {};
    options = 'function SearchTabsLayoutTsx2(){const{isDragging,swipeForMemberListContext}=this.__closure;var _swipeForMemberListCo;isDragging.set(false);(_swipeForMemberListCo=swipeForMemberListContext)===null||_swipeForMemberListCo===void 0||_swipeForMemberListCo.disallowGesture.set(false);}';
    tango['code'] = options;
    var _closure1_slot18 = tango;
    tango = {};
    options = 'function SearchTabsLayoutTsx3({contentOffset:contentOffset}){const{isDragging,swipeForMemberListContext}=this.__closure;if(isDragging.get()){var _swipeForMemberListCo;(_swipeForMemberListCo=swipeForMemberListContext)===null||_swipeForMemberListCo===void 0||_swipeForMemberListCo.disallowGesture.set(contentOffset.x>0);}}';
    tango['code'] = options;
    var _closure1_slot19 = tango;
    tango = golf.memo;
    mike = function(argFoo) { // Original name: SearchTabsLayout
        _fun113119: for(var _fun113119_ip = 0; ; ) switch(_fun113119_ip) {
 0:
            mike = argFoo;
            yankee = mike.searchContext;
            var _closure2_slot0 = yankee;
            zulu = mike.searchTabCounts;
            var _closure2_slot1 = zulu;
            report = undefined;
            var _closure2_slot10 = report;
            var _closure2_slot11 = report;
            mike = _closure1_slot16;
            offset = mike.bind(report)();
            foxtrot = _closure1_slot4;
            golf = foxtrot.useMemo;
            tango = new Array(1);
            tango[0] = yankee;
            mike = function() {
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 11;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                tango = _closure2_slot0;
                mike = zulu.prototype;
                mike = Object.create(mike, {constructor: {value: zulu}});
                report = mike;
                entity = new report[zulu](tango, zulu);
                entity = entity instanceof Object ? entity : mike;
                return entity;
            };
            options = golf.bind(foxtrot)(mike, tango);
            var _closure2_slot2 = options;
            tango = foxtrot.useState;
            mike = options.getSegmentedControlItems;
            mike = mike.bind(options)();
            golf = tango.bind(foxtrot)(mike);
            tango = _closure1_slot3;
            mike = 2;
            golf = tango.bind(report)(golf, mike);
            mike = 0;
            romeo = golf[mike];
            tango = 1;
            tango = golf[tango];
            var _closure2_slot3 = tango;
            verify = foxtrot.useLayoutEffect;
            golf = new Array(1);
            golf[0] = options;
            tango = function() {
                zulu = _closure2_slot3;
                mike = _closure2_slot2;
                entity = mike.getSegmentedControlItems;
                mike = entity.bind(mike)();
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            tango = verify.bind(foxtrot)(tango, golf);
            golf = foxtrot.useLayoutEffect;
            tango = new Array(3);
            tango[0] = options;
            tango[1] = yankee;
            tango[2] = zulu;
            zulu = function() {
                tango = _closure1_slot8;
                zulu = _closure2_slot0;
                mike = undefined;
                entity = function(argFoo) {
                    _fun113123: for(var _fun113123_ip = 0; ; ) switch(_fun113123_ip) {
 0:
                        entity = argFoo;
                        oscar = entity.isInitialSearchQuery;
                        report = entity.isPendingSearchResults;
                        tango = _closure2_slot2;
                        zulu = tango.computeState;
                        mike = {};
                        mike['isInitialSearchQuery'] = oscar;
                        mike['isPendingSearchResults'] = report;
                        report = _closure2_slot1;
                        mike['searchTabCounts'] = report;
                        mike = zulu.bind(tango)(mike);
                        if(!mike) { _fun113123_ip = 82; continue _fun113123 }
 57:
                        zulu = _closure2_slot3;
                        mike = _closure2_slot2;
                        entity = mike.getSegmentedControlItems;
                        mike = entity.bind(mike)();
                        entity = undefined;
                        entity = zulu.bind(entity)(mike);
 82:
                        entity = undefined;
                        return entity;
                    }
                };
                entity = tango.bind(mike)(zulu, entity);
                return entity;
            };
            zulu = golf.bind(foxtrot)(zulu, tango);
            golf = foxtrot.useCallback;
            tango = new Array(1);
            tango[0] = yankee;
            zulu = function(argFoo) {
                _fun113124: for(var _fun113124_ip = 0; ; ) switch(_fun113124_ip) {
 0:
                    options = argFoo;
                    entity = null;
                    if(!(entity != options)) { _fun113124_ip = 207; continue _fun113124 }
 12:
                    zulu = _closure1_slot1;
                    oscar = _closure1_slot2;
                    entity = 12;
                    entity = oscar[entity];
                    tango = undefined;
                    report = zulu.bind(tango)(entity);
                    zulu = report.setSelectedSearchTab;
                    verify = _closure2_slot0;
                    zulu = zulu.bind(report)(verify, options);
                    zulu = function(argFoo) {
                        entity = argFoo;
                        var _closure4_slot0 = entity;
                        tango = _closure1_slot0;
                        zulu = _closure1_slot2;
                        entity = 9;
                        zulu = zulu[entity];
                        entity = undefined;
                        report = tango.bind(entity)(zulu);
                        tango = report.debounce;
                        zulu = function() {
                            zulu = _closure1_slot0;
                            mike = _closure1_slot2;
                            entity = 10;
                            mike = mike[entity];
                            entity = undefined;
                            zulu = zulu.bind(entity)(mike);
                            mike = zulu.trackSearchTabSelected;
                            entity = {};
                            tango = _closure4_slot0;
                            entity['searchContext'] = tango;
                            entity = mike.bind(zulu)(entity);
                            return entity;
                        };
                        mike = 500;
                        mike = tango.bind(report)(zulu, mike);
                        return entity;
                    };
                    zulu = zulu.bind(tango)(verify);
                    zulu = _closure1_slot7;
                    golf = zulu.bind(tango)(verify);
                    report = _closure1_slot0;
                    zulu = 13;
                    zulu = oscar[zulu];
                    oscar = report.bind(tango)(zulu);
                    report = oscar.getSearchTabFetchId;
                    zulu = _closure1_slot10;
                    golf = report.bind(oscar)(verify, zulu, golf);
                    oscar = _closure1_slot6;
                    zulu = oscar.getIsFetching;
                    report = zulu.bind(oscar)(golf);
                    zulu = oscar.getIsInitialFetchComplete;
                    oscar = zulu.bind(oscar)(golf);
                    golf = _closure1_slot9;
                    zulu = golf.has;
                    zulu = zulu.bind(golf)(options);
                    zulu = !zulu;
                    if(zulu) { _fun113124_ip = 163; continue _fun113124 }
 160:
                    zulu = oscar;
 163:
                    if(zulu) { _fun113124_ip = 169; continue _fun113124 }
 166:
                    zulu = report;
 169:
                    if(zulu) { _fun113124_ip = 207; continue _fun113124 }
 172:
                    zulu = _closure1_slot1;
                    report = _closure1_slot2;
                    mike = 14;
                    mike = report[mike];
                    zulu = zulu.bind(tango)(mike);
                    mike = zulu.fetchInitialMessages;
                    entity = _closure2_slot0;
                    entity = mike.bind(zulu)(entity);
 207:
                    entity = undefined;
                    return entity;
                }
            };
            options = golf.bind(foxtrot)(zulu, tango);
            verify = _closure1_slot0;
            backup = _closure1_slot2;
            zulu = 15;
            zulu = backup[zulu];
            golf = verify.bind(report)(zulu);
            tango = golf.useSearchSegmentedControlState;
            zulu = {};
            zulu['items'] = romeo;
            zulu['onSetActiveIndex'] = options;
            zulu = tango.bind(golf)(zulu);
            update = zulu.segmentedControlState;
            var _closure2_slot4 = update;
            tango = zulu.selectedTab;
            var _closure2_slot5 = tango;
            options = foxtrot.useMemo;
            zulu = update.items;
            golf = new Array(1);
            golf[0] = zulu;
            zulu = function() {
                entity = _closure2_slot4;
                zulu = entity.items;
                mike = zulu.map;
                entity = function(argFoo) {
                    entity = argFoo;
                    entity = entity.id;
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            zulu = options.bind(foxtrot)(zulu, golf);
            var _closure2_slot6 = zulu;
            options = update.setActiveIndex;
            var _closure2_slot7 = options;
            romeo = {};
            romeo['searchTabs'] = zulu;
            romeo['setActiveIndex'] = options;
            golf = function(argFoo) { // Original name: useSelectMediaTab
                mike = argFoo;
                oscar = mike.searchTabs;
                var _closure3_slot0 = oscar;
                mike = mike.setActiveIndex;
                var _closure3_slot1 = mike;
                tango = _closure1_slot4;
                report = tango.useRef;
                zulu = function() {
                    tango = _closure3_slot0;
                    zulu = tango.findIndex;
                    mike = function(argFoo) {
                        entity = _closure1_slot11;
                        mike = entity.MEDIA;
                        entity = argFoo;
                        entity = entity === mike;
                        return entity;
                    };
                    zulu = zulu.bind(tango)(mike);
                    mike = _closure3_slot1;
                    entity = undefined;
                    mike = mike.bind(entity)(zulu);
                    return entity;
                };
                zulu = report.bind(tango)(zulu);
                var _closure3_slot2 = zulu;
                report = tango.useEffect;
                zulu = new Array(2);
                zulu[0] = oscar;
                zulu[1] = mike;
                mike = function() {
                    mike = _closure3_slot2;
                    entity = function() {
                        tango = _closure3_slot0;
                        zulu = tango.findIndex;
                        mike = function(argFoo) {
                            entity = _closure1_slot11;
                            mike = entity.MEDIA;
                            entity = argFoo;
                            entity = entity === mike;
                            return entity;
                        };
                        zulu = zulu.bind(tango)(mike);
                        mike = _closure3_slot1;
                        entity = undefined;
                        mike = mike.bind(entity)(zulu);
                        return entity;
                    };
                    mike['current'] = entity;
                    entity = undefined;
                    return entity;
                };
                mike = report.bind(tango)(mike, zulu);
                zulu = tango.useCallback;
                mike = function() {
                    mike = _closure3_slot2;
                    entity = mike.current;
                    entity = entity.bind(mike)();
                    return entity;
                };
                entity = new Array(0);
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            kilo = golf.bind(report)(romeo);
            var _closure2_slot8 = kilo;
            romeo = foxtrot.useMemo;
            golf = new Array(2);
            golf[0] = kilo;
            golf[1] = tango;
            tango = function() {
                entity = {};
                zulu = _closure2_slot5;
                entity['selectedTab'] = zulu;
                mike = _closure2_slot8;
                entity['selectMediaTab'] = mike;
                return entity;
            };
            romeo = romeo.bind(foxtrot)(tango, golf);
            golf = foxtrot.useContext;
            tango = 16;
            tango = backup[tango];
            tango = verify.bind(report)(tango);
            tango = tango.SwipeForMemberListContext;
            sizing = golf.bind(foxtrot)(tango);
            var _closure2_slot9 = sizing;
            verify = foxtrot.useMemo;
            backup = null;
            golf = backup == sizing;
            tango = undefined;
            if(golf) { _fun113119_ip = 440; continue _fun113119 }
 434:
            tango = sizing.gestureRef;
 440:
            golf = new Array(1);
            golf[0] = tango;
            tango = function() {
                _fun113137: for(var _fun113137_ip = 0; ; ) switch(_fun113137_ip) {
 0:
                    entity = _closure2_slot9;
                    golf = null;
                    zulu = golf == entity;
                    mike = undefined;
                    entity = undefined;
                    if(zulu) { _fun113137_ip = 30; continue _fun113137 }
 20:
                    zulu = _closure2_slot9;
                    entity = zulu.gestureRef;
 30:
                    zulu = golf != entity;
                    entity = undefined;
                    if(!zulu) { _fun113137_ip = 112; continue _fun113137 }
 39:
                    tango = _closure1_slot0;
                    oscar = _closure1_slot2;
                    zulu = 17;
                    zulu = oscar[zulu];
                    zulu = tango.bind(mike)(zulu);
                    tango = zulu.Gesture;
                    zulu = tango.Native;
                    tango = zulu.bind(tango)();
                    zulu = tango.simultaneousWithExternalGesture;
                    oscar = _closure2_slot9;
                    oscar = golf == oscar;
                    mike = undefined;
                    if(oscar) { _fun113137_ip = 107; continue _fun113137 }
 97:
                    report = _closure2_slot9;
                    mike = report.gestureRef;
 107:
                    entity = zulu.bind(tango)(mike);
 112:
                    return entity;
                }
            };
            output = verify.bind(foxtrot)(tango, golf);
            golf = _closure1_slot0;
            verify = _closure1_slot2;
            tango = 18;
            tango = verify[tango];
            golf = golf.bind(report)(tango);
            tango = golf.useSharedValue;
            verify = false;
            source = tango.bind(golf)(verify);
            _closure2_slot10 = source;
            golf = _closure1_slot4;
            kilo = golf.useCallback;
            foxtrot = function(argFoo) { // Original name: R
                _fun113138: for(var _fun113138_ip = 0; ; ) switch(_fun113138_ip) {
 0:
                    entity = argFoo;
                    entity = entity.contentOffset;
                    report = _closure2_slot10;
                    tango = report.set;
                    zulu = true;
                    zulu = tango.bind(report)(zulu);
                    tango = _closure2_slot9;
                    zulu = null;
                    if(!(zulu != tango)) { _fun113138_ip = 69; continue _fun113138 }
 38:
                    mike = _closure2_slot9;
                    zulu = mike.disallowGesture;
                    mike = zulu.set;
                    tango = entity.x;
                    entity = 0;
                    entity = tango > entity;
                    entity = mike.bind(zulu)(entity);
 69:
                    entity = undefined;
                    return entity;
                }
            };
            tango = {};
            tango['isDragging'] = source;
            tango['swipeForMemberListContext'] = sizing;
            foxtrot['__closure'] = tango;
            tango = 16774879616201.0;
            foxtrot['__workletHash'] = tango;
            tango = _closure1_slot17;
            foxtrot['__initData'] = tango;
            tango = new Array(2);
            tango[0] = sizing;
            tango[1] = source;
            echo = kilo.bind(golf)(foxtrot, tango);
            kilo = golf.useCallback;
            foxtrot = function() { // Original name: y
                _fun113139: for(var _fun113139_ip = 0; ; ) switch(_fun113139_ip) {
 0:
                    tango = _closure2_slot10;
                    mike = tango.set;
                    zulu = false;
                    mike = mike.bind(tango)(zulu);
                    tango = _closure2_slot9;
                    mike = null;
                    if(!(mike != tango)) { _fun113139_ip = 49; continue _fun113139 }
 29:
                    entity = _closure2_slot9;
                    mike = entity.disallowGesture;
                    entity = mike.set;
                    entity = entity.bind(mike)(zulu);
 49:
                    entity = undefined;
                    return entity;
                }
            };
            tango = {};
            tango['isDragging'] = source;
            tango['swipeForMemberListContext'] = sizing;
            foxtrot['__closure'] = tango;
            tango = 2636099439516.0;
            foxtrot['__workletHash'] = tango;
            tango = _closure1_slot18;
            foxtrot['__initData'] = tango;
            tango = new Array(2);
            tango[0] = sizing;
            tango[1] = source;
            result = kilo.bind(golf)(foxtrot, tango);
            kilo = golf.useCallback;
            foxtrot = function(argFoo) { // Original name: k
                _fun113140: for(var _fun113140_ip = 0; ; ) switch(_fun113140_ip) {
 0:
                    entity = argFoo;
                    entity = entity.contentOffset;
                    tango = _closure2_slot10;
                    zulu = tango.get;
                    zulu = zulu.bind(tango)();
                    if(!zulu) { _fun113140_ip = 69; continue _fun113140 }
 28:
                    tango = _closure2_slot9;
                    zulu = null;
                    if(!(zulu != tango)) { _fun113140_ip = 69; continue _fun113140 }
 38:
                    mike = _closure2_slot9;
                    zulu = mike.disallowGesture;
                    mike = zulu.set;
                    tango = entity.x;
                    entity = 0;
                    entity = tango > entity;
                    entity = mike.bind(zulu)(entity);
 69:
                    entity = undefined;
                    return entity;
                }
            };
            tango = {};
            tango['isDragging'] = source;
            tango['swipeForMemberListContext'] = sizing;
            foxtrot['__closure'] = tango;
            tango = 9916830801786.0;
            foxtrot['__workletHash'] = tango;
            tango = _closure1_slot19;
            foxtrot['__initData'] = tango;
            tango = new Array(2);
            tango[0] = sizing;
            tango[1] = source;
            kilo = kilo.bind(golf)(foxtrot, tango);
            source = golf.useEffect;
            foxtrot = new Array(1);
            foxtrot[0] = yankee;
            tango = function() {
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 12;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.initialize;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                entity = function() {
                    tango = _closure1_slot0;
                    report = _closure1_slot2;
                    entity = 10;
                    zulu = report[entity];
                    entity = undefined;
                    golf = tango.bind(entity)(zulu);
                    oscar = golf.trackSearchClosed;
                    zulu = {};
                    tango = _closure2_slot0;
                    zulu['searchContext'] = tango;
                    zulu = oscar.bind(golf)(zulu);
                    zulu = _closure1_slot1;
                    mike = 19;
                    mike = report[mike];
                    oscar = zulu.bind(entity)(mike);
                    mike = oscar.cancelInFlightRequests;
                    mike = mike.bind(oscar)(tango);
                    mike = 14;
                    mike = report[mike];
                    oscar = zulu.bind(entity)(mike);
                    mike = oscar.clearSearchRecentMessages;
                    mike = mike.bind(oscar)();
                    mike = 12;
                    mike = report[mike];
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.terminate;
                    mike = mike.bind(zulu)(tango);
                    return entity;
                };
                return entity;
            };
            tango = source.bind(golf)(tango, foxtrot);
            tango = golf.useRef;
            tango = tango.bind(golf)(verify);
            _closure2_slot11 = tango;
            verify = golf.useEffect;
            tango = new Array(2);
            tango[0] = yankee;
            tango[1] = zulu;
            zulu = function() {
                _fun113143: for(var _fun113143_ip = 0; ; ) switch(_fun113143_ip) {
 0:
                    entity = _closure2_slot11;
                    entity = entity.current;
                    if(entity) { _fun113143_ip = 30; continue _fun113143 }
 15:
                    mike = _closure2_slot6;
                    zulu = mike.length;
                    mike = 0;
                    entity = mike === zulu;
 30:
                    if(entity) { _fun113143_ip = 101; continue _fun113143 }
 33:
                    mike = _closure2_slot11;
                    entity = true;
                    mike['current'] = entity;
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 10;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.trackSearchOpened;
                    entity = {};
                    report = _closure2_slot0;
                    entity['searchContext'] = report;
                    tango = _closure2_slot6;
                    entity['visibleSearchTabs'] = tango;
                    entity = mike.bind(zulu)(entity);
 101:
                    entity = undefined;
                    return entity;
                }
            };
            zulu = verify.bind(golf)(zulu, tango);
            tango = golf.useEffect;
            zulu = new Array(2);
            zulu[0] = options;
            zulu[1] = sizing;
            entity = function() {
                report = function(argFoo) { // Original name: resetTabSelection
                    _fun113145: for(var _fun113145_ip = 0; ; ) switch(_fun113145_ip) {
 0:
                        entity = argFoo;
                        tango = entity.channelId;
                        report = entity.screenIndex;
                        entity = _closure2_slot9;
                        oscar = null;
                        golf = oscar == entity;
                        entity = undefined;
                        zulu = undefined;
                        if(golf) { _fun113145_ip = 43; continue _fun113145 }
 34:
                        golf = _closure2_slot9;
                        zulu = golf.channelId;
 43:
                        zulu = tango === zulu;
                        if(!zulu) { _fun113145_ip = 77; continue _fun113145 }
 50:
                        tango = _closure2_slot9;
                        oscar = oscar == tango;
                        tango = undefined;
                        if(oscar) { _fun113145_ip = 73; continue _fun113145 }
 63:
                        oscar = _closure2_slot9;
                        tango = oscar.screenIndex;
 73:
                        zulu = report === tango;
 77:
                        if(!zulu) { _fun113145_ip = 94; continue _fun113145 }
 80:
                        tango = _closure2_slot7;
                        zulu = 0;
                        mike = false;
                        mike = tango.bind(entity)(zulu, mike);
 94:
                        return entity;
                    }
                };
                var _closure3_slot0 = report;
                oscar = _closure1_slot0;
                tango = _closure1_slot2;
                zulu = 20;
                tango = tango[zulu];
                zulu = undefined;
                zulu = oscar.bind(zulu)(tango);
                tango = zulu.ComponentDispatch;
                zulu = tango.subscribe;
                mike = _closure1_slot12;
                mike = mike.SEARCH_TABS_RESET;
                mike = zulu.bind(tango)(mike, report);
                entity = function() {
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    entity = 20;
                    zulu = zulu[entity];
                    entity = undefined;
                    zulu = tango.bind(entity)(zulu);
                    report = zulu.ComponentDispatch;
                    tango = report.unsubscribe;
                    mike = _closure1_slot12;
                    zulu = mike.SEARCH_TABS_RESET;
                    mike = _closure3_slot0;
                    mike = tango.bind(report)(zulu, mike);
                    return entity;
                };
                return entity;
            };
            entity = tango.bind(golf)(entity, zulu);
            entity = update.items;
            entity = entity.length;
            if(!(mike !== entity)) { _fun113119_ip = 1134; continue _fun113119 }
 841:
            zulu = _closure1_slot14;
            mike = _closure1_slot15;
            entity = {};
            verify = _closure1_slot5;
            tango = {};
            golf = offset.controls;
            tango['style'] = golf;
            options = _closure1_slot13;
            foxtrot = _closure1_slot1;
            source = _closure1_slot2;
            golf = 23;
            golf = source[golf];
            yankee = foxtrot.bind(report)(golf);
            golf = {};
            golf['state'] = update;
            yankee = options.bind(report)(yankee, golf);
            golf = new Array(2);
            golf[0] = yankee;
            yankee = 24;
            yankee = source[yankee];
            foxtrot = foxtrot.bind(report)(yankee);
            yankee = {};
            yankee['state'] = update;
            yankee = options.bind(report)(foxtrot, yankee);
            golf[1] = yankee;
            tango['children'] = golf;
            golf = zulu.bind(report)(verify, tango);
            tango = new Array(2);
            tango[0] = golf;
            golf = {};
            offset = offset.pages;
            golf['style'] = offset;
            foxtrot = _closure1_slot0;
            offset = 25;
            offset = source[offset];
            offset = foxtrot.bind(report)(offset);
            offset = offset.SearchTabsPageContext;
            yankee = offset.Provider;
            offset = {};
            offset['value'] = romeo;
            romeo = 26;
            romeo = source[romeo];
            romeo = foxtrot.bind(report)(romeo);
            foxtrot = romeo.SegmentedControlPages;
            romeo = {};
            romeo['state'] = update;
            update = backup == sizing;
            romeo['bounces'] = update;
            romeo['nativeGesture'] = output;
            update = backup != sizing;
            output = undefined;
            if(!update) { _fun113119_ip = 1053; continue _fun113119 }
 1050:
            output = echo;
 1053:
            romeo['onBeginDragWorklet'] = output;
            echo = backup != sizing;
            output = undefined;
            if(!echo) { _fun113119_ip = 1070; continue _fun113119 }
 1067:
            output = result;
 1070:
            romeo['onEndDragWorklet'] = output;
            sizing = backup != sizing;
            backup = undefined;
            if(!sizing) { _fun113119_ip = 1087; continue _fun113119 }
 1084:
            backup = kilo;
 1087:
            romeo['onScrollWorklet'] = backup;
            romeo = options.bind(report)(foxtrot, romeo);
            offset['children'] = romeo;
            offset = options.bind(report)(yankee, offset);
            golf['children'] = offset;
            golf = options.bind(report)(verify, golf);
            tango[1] = golf;
            entity['children'] = tango;
            entity = zulu.bind(report)(mike, entity);
            _fun113119_ip = 1221; continue _fun113119;
 1134:
            tango = _closure1_slot13;
            zulu = _closure1_slot1;
            offset = _closure1_slot2;
            mike = 21;
            mike = offset[mike];
            zulu = zulu.bind(report)(mike);
            mike = {};
            verify = _closure1_slot0;
            oscar = 22;
            golf = offset[oscar];
            golf = verify.bind(report)(golf);
            options = golf.intl;
            golf = options.string;
            oscar = offset[oscar];
            oscar = verify.bind(report)(oscar);
            oscar = oscar.t;
            oscar = oscar.V6nAfH;
            oscar = golf.bind(options)(oscar);
            mike['text'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 1221:
            return entity;
        }
    };
    mike = tango.bind(golf)(mike);
    tango = 27;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/search_v2/native/components/tabs/SearchTabsLayout.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();