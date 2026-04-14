// app/modules/search/native/components/tabs/SearchTabsLayout.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function NoSearchResultsScreen(arg1) {
        var2 = arg1;
        var6 = var2.searchContext;
        var _closure2_slot0 = var6;
        var4 = _closure1_slot3;
        var3 = var4.useEffect;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 10;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.trackSearchEmptyResult;
            var2 = {};
            var5 = _closure2_slot0;
            var2['searchContext'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        var4 = _closure1_slot12;
        var2 = _closure1_slot1;
        var9 = _closure1_slot2;
        var1 = 11;
        var1 = var9[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = {};
        var8 = _closure1_slot0;
        var5 = 12;
        var6 = var9[var5];
        var6 = var8.bind(var3)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var3)(var5);
        var5 = var5.t;
        var5 = var5.V6nAfF;
        var5 = var6.bind(var7)(var5);
        var1['text'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot21 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var8 = var4.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var11 = 1;
    var4 = var6[var11];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.MESSAGE_SEARCH_RESULT_TABS_SET;
    var _closure1_slot8 = var7;
    var7 = var4.SEARCH_MESSAGE_TAB_SENTINEL;
    var _closure1_slot9 = var7;
    var4 = var4.SearchTabs;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ComponentActions;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot12 = var7;
    var7 = var4.jsxs;
    var _closure1_slot13 = var7;
    var4 = var4.Fragment;
    var _closure1_slot14 = var4;
    var4 = 8;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var7 = var9.createStyles;
    var4 = {};
    var10 = {'flex': 0, 'minHeight': 32};
    var4['controls'] = var10;
    var10 = {};
    var10['flex'] = var11;
    var4['pages'] = var10;
    var4 = var7.bind(var9)(var4);
    var _closure1_slot15 = var4;
    var4 = 9;
    var4 = var6[var4];
    var10 = var5.bind(var1)(var4);
    var9 = var10.debounce;
    var7 = function(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 10;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.trackSearchTabSelected;
        var1 = {};
        var4 = arg1;
        var1['searchContext'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4 = 500;
    var4 = var9.bind(var10)(var7, var4);
    var _closure1_slot16 = var4;
    var4 = {};
    var7 = 'function SearchTabsLayoutTsx1({contentOffset:contentOffset}){const{isDragging,disallowMemberListGesture}=this.__closure;var _disallowMemberListGe;isDragging.set(true);(_disallowMemberListGe=disallowMemberListGesture)===null||_disallowMemberListGe===void 0||_disallowMemberListGe.set(contentOffset.x>0);}';
    var4['code'] = var7;
    var _closure1_slot17 = var4;
    var4 = {};
    var7 = 'function SearchTabsLayoutTsx2(){const{isDragging,disallowMemberListGesture}=this.__closure;var _disallowMemberListGe;isDragging.set(false);(_disallowMemberListGe=disallowMemberListGesture)===null||_disallowMemberListGe===void 0||_disallowMemberListGe.set(false);}';
    var4['code'] = var7;
    var _closure1_slot18 = var4;
    var4 = {};
    var7 = 'function SearchTabsLayoutTsx3({contentOffset:contentOffset}){const{isDragging,disallowMemberListGesture}=this.__closure;if(isDragging.get()){var _disallowMemberListGe;(_disallowMemberListGe=disallowMemberListGesture)===null||_disallowMemberListGe===void 0||_disallowMemberListGe.set(contentOffset.x>0);}}';
    var4['code'] = var7;
    var _closure1_slot19 = var4;
    var7 = var8.memo;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var6 = var2.searchContext;
            var _closure2_slot0 = var6;
            var4 = var2.visibleTabs;
            var _closure2_slot1 = var4;
            var3 = var2.visibleTabCounts;
            var _closure2_slot2 = var3;
            var12 = var2.width;
            var5 = undefined;
            var _closure2_slot7 = var5;
            var _closure2_slot8 = var5;
            var _closure2_slot9 = var5;
            var _closure2_slot10 = var5;
            var _closure2_slot11 = var5;
            var _closure2_slot12 = var5;
            var7 = _closure1_slot15;
            var11 = var7.bind(var5)();
            var9 = _closure1_slot3;
            var8 = var9.useMemo;
            var7 = new Array(3);
            var7[0] = var3;
            var7[1] = var4;
            var7[2] = var6;
            var3 = function() {
                var1 = new Array(0);
                var _closure3_slot0 = var1;
                var4 = _closure2_slot1;
                var3 = var4.forEach;
                var2 = function(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var8 = arg1;
                        var4 = _closure3_slot0;
                        var3 = var4.push;
                        var2 = {};
                        var9 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var1 = 13;
                        var6 = var7[var1];
                        var1 = undefined;
                        var9 = var9.bind(var1)(var6);
                        var6 = var9.getTabTitle;
                        var6 = var6.bind(var9)(var8);
                        var2['label'] = var6;
                        var2['id'] = var8;
                        var9 = _closure1_slot12;
                        var6 = _closure1_slot1;
                        var5 = 14;
                        var5 = var7[var5];
                        var6 = var6.bind(var1)(var5);
                        var5 = {};
                        var5['tab'] = var8;
                        var10 = _closure2_slot0;
                        var5['searchContext'] = var10;
                        var5 = var9.bind(var1)(var6, var5);
                        var2['page'] = var5;
                        var6 = _closure2_slot2;
                        var5 = null;
                        var9 = var5 == var6;
                        var6 = undefined;
                        if(var9) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                        var7 = _closure2_slot2;
                        var6 = var7[var8];
case 2:
                        var7 = var5 != var6;
                        var5 = undefined;
                        if(!var7) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                        var5 = var6;
case 4:
                        var2['count'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var14 = var8.bind(var9)(var3, var7);
            var9 = _closure1_slot3;
            var8 = var9.useCallback;
            var7 = new Array(1);
            var7[0] = var6;
            var3 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var8 = arg1;
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var1 = 15;
                    var2 = var6[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var2);
                    var4 = var5.setSelectedTab;
                    var9 = _closure2_slot0;
                    var4 = var4.bind(var5)(var9, var8);
                    var4 = _closure1_slot16;
                    var4 = var4.bind(var1)(var9);
                    var5 = _closure1_slot6;
                    var4 = var5.getQueryString;
                    var7 = var4.bind(var5)(var9);
                    var5 = _closure1_slot0;
                    var4 = 13;
                    var4 = var6[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.getSearchTabFetchId;
                    var4 = _closure1_slot9;
                    var7 = var5.bind(var6)(var9, var4, var7);
                    var6 = _closure1_slot5;
                    var4 = var6.getIsFetching;
                    var5 = var4.bind(var6)(var7);
                    var4 = var6.getIsInitialFetchComplete;
                    var6 = var4.bind(var6)(var7);
                    var7 = _closure1_slot8;
                    var4 = var7.has;
                    var4 = var4.bind(var7)(var8);
                    var4 = !var4;
                    if(var4) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var4 = var6;
case 6:
                    if(var4) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var4 = var5;
case 8:
                    if(var4) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 16;
                    var3 = var5[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.fetchInitialMessagesDebounced;
                    var2 = _closure2_slot0;
                    var2 = var3.bind(var4)(var2);
case 10:
                    return var1;
                }
            };
            var13 = var8.bind(var9)(var3, var7);
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 17;
            var3 = var10[var3];
            var9 = var8.bind(var5)(var3);
            var7 = var9.useSearchSegmentedControlState;
            var3 = {};
            var3['items'] = var14;
            var3['visibleTabs'] = var4;
            var3['onSelectedTabChange'] = var13;
            var3['width'] = var12;
            var3 = var7.bind(var9)(var3);
            var23 = var3.segmentedControlState;
            var3 = var3.selectedTab;
            var _closure2_slot3 = var3;
            var9 = var23.setActiveIndex;
            var _closure2_slot4 = var9;
            var7 = {};
            var7['searchTabs'] = var4;
            var7['setActiveIndex'] = var9;
            var4 = function useSelectMediaTab(arg1) {
                var2 = arg1;
                var7 = var2.searchTabs;
                var _closure3_slot0 = var7;
                var3 = var2.setActiveIndex;
                var _closure3_slot1 = var3;
                var6 = _closure1_slot3;
                var5 = var6.useRef;
                var4 = function() {
                    var4 = _closure3_slot0;
                    var3 = var4.findIndex;
                    var2 = function(arg1) {
                        var1 = _closure1_slot10;
                        var2 = var1.MEDIA;
                        var1 = arg1;
                        var1 = var1 === var2;
                        return var1;
                    };
                    var3 = var3.bind(var4)(var2);
                    var2 = _closure3_slot1;
                    var1 = undefined;
                    var2 = var2.bind(var1)(var3);
                    return var1;
                };
                var4 = var5.bind(var6)(var4);
                var _closure3_slot2 = var4;
                var6 = _closure1_slot3;
                var5 = var6.useEffect;
                var4 = new Array(2);
                var4[0] = var7;
                var4[1] = var3;
                var3 = function() {
                    var2 = _closure3_slot2;
                    var1 = function() {
                        var4 = _closure3_slot0;
                        var3 = var4.findIndex;
                        var2 = function(arg1) {
                            var1 = _closure1_slot10;
                            var2 = var1.MEDIA;
                            var1 = arg1;
                            var1 = var1 === var2;
                            return var1;
                        };
                        var3 = var3.bind(var4)(var2);
                        var2 = _closure3_slot1;
                        var1 = undefined;
                        var2 = var2.bind(var1)(var3);
                        return var1;
                    };
                    var2['current'] = var1;
                    var1 = undefined;
                    return var1;
                };
                var3 = var5.bind(var6)(var3, var4);
                var4 = _closure1_slot3;
                var3 = var4.useCallback;
                var2 = function() {
                    var2 = _closure3_slot2;
                    var1 = var2.current;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var1 = new Array(0);
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var13 = var4.bind(var5)(var7);
            var _closure2_slot5 = var13;
            var12 = _closure1_slot3;
            var7 = var12.useMemo;
            var4 = new Array(2);
            var4[0] = var13;
            var4[1] = var3;
            var3 = function() {
                var1 = {};
                var3 = _closure2_slot3;
                var1['selectedTab'] = var3;
                var2 = _closure2_slot5;
                var1['selectMediaTab'] = var2;
                return var1;
            };
            var14 = var7.bind(var12)(var3, var4);
            var7 = _closure1_slot3;
            var4 = var7.useContext;
            var3 = 18;
            var3 = var10[var3];
            var3 = var8.bind(var5)(var3);
            var3 = var3.SwipeForMemberListContext;
            var19 = var4.bind(var7)(var3);
            var _closure2_slot6 = var19;
            var17 = null;
            var4 = var19;
            if(!(var17 == var4)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var4 = {};
case 12:
            var3 = var4.gesture;
            _closure2_slot7 = var3;
            var15 = var4.disallowGesture;
            _closure2_slot8 = var15;
            var12 = var4.channelId;
            _closure2_slot9 = var12;
            var10 = var4.screenIndex;
            _closure2_slot10 = var10;
            var8 = _closure1_slot3;
            var7 = var8.useMemo;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot7;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                    var2 = undefined;
                    return var2;
case 14:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 19;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var3 = var2.Gesture;
                    var2 = var3.Native;
                    var3 = var2.bind(var3)();
                    var2 = var3.simultaneousWithExternalGesture;
                    var1 = _closure2_slot7;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var20 = var7.bind(var8)(var3, var4);
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 20;
            var3 = var7[var3];
            var7 = var4.bind(var5)(var3);
            var4 = var7.useSharedValue;
            var3 = false;
            var13 = var4.bind(var7)(var3);
            _closure2_slot11 = var13;
            var8 = _closure1_slot3;
            var7 = var8.useCallback;
            var4 = function D(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.contentOffset;
                    var5 = _closure2_slot11;
                    var4 = var5.set;
                    var3 = true;
                    var3 = var4.bind(var5)(var3);
                    var4 = _closure2_slot8;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0005_ip = 16; continue _fun0005 }
case 17:
                    var3 = _closure2_slot8;
                    var2 = var3.set;
                    var4 = var1.x;
                    var1 = 0;
                    var1 = var4 > var1;
                    var1 = var2.bind(var3)(var1);
case 16:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = {};
            var3['isDragging'] = var13;
            var3['disallowMemberListGesture'] = var15;
            var4['__closure'] = var3;
            var3 = 766628353255.0;
            var4['__workletHash'] = var3;
            var3 = _closure1_slot17;
            var4['__initData'] = var3;
            var3 = new Array(2);
            var3[0] = var15;
            var3[1] = var13;
            var22 = var7.bind(var8)(var4, var3);
            var8 = _closure1_slot3;
            var7 = var8.useCallback;
            var4 = function G() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var4 = _closure2_slot11;
                    var2 = var4.set;
                    var3 = false;
                    var2 = var2.bind(var4)(var3);
                    var4 = _closure2_slot8;
                    var2 = null;
                    if(!(var2 != var4)) { _fun0006_ip = 18; continue _fun0006 }
case 19:
                    var2 = _closure2_slot8;
                    var1 = var2.set;
                    var1 = var1.bind(var2)(var3);
case 18:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = {};
            var3['isDragging'] = var13;
            var3['disallowMemberListGesture'] = var15;
            var4['__closure'] = var3;
            var3 = 5683301645106.0;
            var4['__workletHash'] = var3;
            var3 = _closure1_slot18;
            var4['__initData'] = var3;
            var3 = new Array(2);
            var3[0] = var15;
            var3[1] = var13;
            var21 = var7.bind(var8)(var4, var3);
            var8 = _closure1_slot3;
            var7 = var8.useCallback;
            var4 = function A(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.contentOffset;
                    var4 = _closure2_slot11;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    if(!var3) { _fun0007_ip = 16; continue _fun0007 }
case 20:
                    var4 = _closure2_slot8;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0007_ip = 16; continue _fun0007 }
case 17:
                    var3 = _closure2_slot8;
                    var2 = var3.set;
                    var4 = var1.x;
                    var1 = 0;
                    var1 = var4 > var1;
                    var1 = var2.bind(var3)(var1);
case 16:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = {};
            var3['isDragging'] = var13;
            var3['disallowMemberListGesture'] = var15;
            var4['__closure'] = var3;
            var3 = 229712012692.0;
            var4['__workletHash'] = var3;
            var3 = _closure1_slot19;
            var4['__initData'] = var3;
            var3 = new Array(2);
            var3[0] = var15;
            var3[1] = var13;
            var18 = var7.bind(var8)(var4, var3);
            var8 = _closure1_slot3;
            var7 = var8.useCallback;
            var4 = new Array(1);
            var4[0] = var6;
            var3 = function() {
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 21;
                var4 = var5[var1];
                var1 = undefined;
                var7 = var3.bind(var1)(var4);
                var4 = var7.deleteSearchQuery;
                var6 = _closure2_slot0;
                var4 = var4.bind(var7)(var6);
                var4 = 22;
                var7 = var5[var4];
                var8 = var3.bind(var1)(var7);
                var7 = var8.clearAllSearchMesssages;
                var7 = var7.bind(var8)();
                var4 = var5[var4];
                var7 = var3.bind(var1)(var4);
                var4 = var7.clearSearchRecentMessages;
                var4 = var4.bind(var7)();
                var4 = _closure1_slot0;
                var2 = 13;
                var2 = var5[var2];
                var4 = var4.bind(var1)(var2);
                var2 = var4.getSearchContextId;
                var4 = var2.bind(var4)(var6);
                var2 = 23;
                var2 = var5[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.cleanUp;
                var2 = var2.bind(var3)(var4);
                return var1;
            };
            var8 = var7.bind(var8)(var3, var4);
            _closure2_slot12 = var8;
            var13 = _closure1_slot3;
            var7 = var13.useEffect;
            var4 = new Array(2);
            var4[0] = var19;
            var4[1] = var8;
            var3 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var2 = _closure2_slot6;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0008_ip = 14; continue _fun0008 }
case 15:
                    var1 = undefined;
                    return var1;
case 14:
                    var1 = function() {
                        var2 = _closure2_slot12;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
                        return var1;
                    };
                    return var1;
                }
            };
            var3 = var7.bind(var13)(var3, var4);
            var7 = _closure1_slot3;
            var4 = var7.useEffect;
            var3 = new Array(5);
            var3[0] = var12;
            var3[1] = var10;
            var3[2] = var9;
            var3[3] = var19;
            var3[4] = var8;
            var1 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var5 = function handleChannelDetailsHidden(arg1) {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                            var1 = arg1;
                            var3 = var1.channelId;
                            var4 = var1.screenIndex;
                            var2 = _closure2_slot9;
                            var2 = var3 === var2;
                            if(!var2) { _fun0010_ip = 21; continue _fun0010 }
case 20:
                            var3 = _closure2_slot10;
                            var2 = var4 === var3;
case 21:
                            if(!var2) { _fun0010_ip = 22; continue _fun0010 }
case 23:
                            var6 = _closure2_slot4;
                            var2 = undefined;
                            var5 = 0;
                            var4 = false;
                            var3 = true;
                            var3 = var6.bind(var2)(var5, var4, var3);
                            var1 = _closure2_slot12;
                            var1 = var1.bind(var2)();
case 22:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var _closure3_slot0 = var5;
                    var3 = _closure2_slot6;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0009_ip = 24; continue _fun0009 }
case 25:
                    var2 = undefined;
                    return var2;
case 24:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 24;
                    var4 = var4[var3];
                    var3 = undefined;
                    var3 = var6.bind(var3)(var4);
                    var4 = var3.ComponentDispatch;
                    var3 = var4.subscribe;
                    var2 = _closure1_slot11;
                    var2 = var2.CHANNEL_DETAILS_HIDDEN;
                    var2 = var3.bind(var4)(var2, var5);
                    var1 = function() {
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 24;
                        var3 = var3[var1];
                        var1 = undefined;
                        var3 = var4.bind(var1)(var3);
                        var5 = var3.ComponentDispatch;
                        var4 = var5.unsubscribe;
                        var2 = _closure1_slot11;
                        var3 = var2.CHANNEL_DETAILS_HIDDEN;
                        var2 = _closure3_slot0;
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    return var1;
                }
            };
            var1 = var4.bind(var7)(var1, var3);
            var1 = var23.items;
            var3 = var1.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var4 = _closure1_slot13;
            var3 = _closure1_slot14;
            var1 = {};
            var10 = _closure1_slot4;
            var7 = {};
            var8 = var11.controls;
            var7['style'] = var8;
            var13 = _closure1_slot12;
            var12 = _closure1_slot1;
            var24 = _closure1_slot2;
            var8 = 25;
            var8 = var24[var8];
            var9 = var12.bind(var5)(var8);
            var8 = {};
            var8['state'] = var23;
            var9 = var13.bind(var5)(var9, var8);
            var8 = new Array(2);
            var8[0] = var9;
            var13 = _closure1_slot12;
            var9 = 26;
            var9 = var24[var9];
            var12 = var12.bind(var5)(var9);
            var9 = {};
            var9['state'] = var23;
            var9 = var13.bind(var5)(var12, var9);
            var8[1] = var9;
            var7['children'] = var8;
            var8 = var4.bind(var5)(var10, var7);
            var7 = new Array(2);
            var7[0] = var8;
            var9 = _closure1_slot12;
            var8 = {};
            var11 = var11.pages;
            var8['style'] = var11;
            var13 = _closure1_slot12;
            var15 = _closure1_slot0;
            var11 = 14;
            var11 = var24[var11];
            var11 = var15.bind(var5)(var11);
            var11 = var11.SearchTabsPageContext;
            var12 = var11.Provider;
            var11 = {};
            var11['value'] = var14;
            var16 = _closure1_slot12;
            var14 = 27;
            var14 = var24[var14];
            var14 = var15.bind(var5)(var14);
            var15 = var14.SegmentedControlPages;
            var14 = {};
            var14['state'] = var23;
            var23 = var17 == var19;
            var14['bounces'] = var23;
            var14['nativeGesture'] = var20;
            var23 = var17 != var19;
            var20 = undefined;
            if(!var23) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var20 = var22;
case 28:
            var14['onBeginDragWorklet'] = var20;
            var22 = var17 != var19;
            var20 = undefined;
            if(!var22) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var20 = var21;
case 30:
            var14['onEndDragWorklet'] = var20;
            var19 = var17 != var19;
            var17 = undefined;
            if(!var19) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var17 = var18;
case 32:
            var14['onScrollWorklet'] = var17;
            var14 = var16.bind(var5)(var15, var14);
            var11['children'] = var14;
            var11 = var13.bind(var5)(var12, var11);
            var8['children'] = var11;
            var8 = var9.bind(var5)(var10, var8);
            var7[1] = var8;
            var1['children'] = var7;
            var1 = var4.bind(var5)(var3, var1);
            _fun0001_ip = 34; continue _fun0001;
case 26:
            var4 = _closure1_slot12;
            var3 = _closure1_slot21;
            var2 = {};
            var2['searchContext'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 34:
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot20 = var4;
    var4 = 33;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search/native/components/tabs/SearchTabsLayout.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ConnectedSearchTabsLayout(arg1) {
        var1 = arg1;
        var8 = var1.searchContext;
        var5 = var1.width;
        var3 = _closure1_slot0;
        var9 = _closure1_slot2;
        var4 = 28;
        var6 = var9[var4];
        var4 = undefined;
        var11 = var3.bind(var4)(var6);
        var10 = var11.useStateFromStoresObject;
        var6 = _closure1_slot7;
        var7 = new Array(1);
        var7[0] = var6;
        var6 = function() {
            var1 = {};
            var3 = _closure1_slot7;
            var2 = var3.getVisibleTabs;
            var2 = var2.bind(var3)();
            var1['visibleTabs'] = var2;
            var2 = var3.getVisibleTabCounts;
            var2 = var2.bind(var3)();
            var1['visibleTabCounts'] = var2;
            var2 = var3.getCandidateTabs;
            var2 = var2.bind(var3)();
            var1['candidateTabs'] = var2;
            return var1;
        };
        var10 = var10.bind(var11)(var7, var6);
        var7 = var10.visibleTabs;
        var6 = var10.visibleTabCounts;
        var13 = var10.candidateTabs;
        var _closure2_slot0 = var13;
        var12 = _closure1_slot3;
        var11 = var12.useMemo;
        var10 = new Array(1);
        var10[0] = var13;
        var2 = function() {
            var1 = global;
            var3 = var1.Set;
            var4 = _closure2_slot0;
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var5 = var2;
            var1 = new var5[var3](var4, var3);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var13 = var11.bind(var12)(var2, var10);
        var2 = 29;
        var2 = var9[var2];
        var12 = var3.bind(var4)(var2);
        var11 = var12.useAutoSearchGuildChannelTab;
        var14 = var13.has;
        var2 = _closure1_slot10;
        var10 = var2.GUILD_CHANNELS;
        var10 = var14.bind(var13)(var10);
        var10 = !var10;
        var10 = var11.bind(var12)(var8, var10);
        var10 = 30;
        var10 = var9[var10];
        var12 = var3.bind(var4)(var10);
        var11 = var12.useAutoSearchMembersTab;
        var14 = var13.has;
        var10 = var2.MEMBERS;
        var10 = var14.bind(var13)(var10);
        var10 = !var10;
        var10 = var11.bind(var12)(var8, var10);
        var10 = 31;
        var10 = var9[var10];
        var11 = var3.bind(var4)(var10);
        var10 = var11.useAutoSearchPeopleTab;
        var12 = var13.has;
        var2 = var2.PEOPLE;
        var2 = var12.bind(var13)(var2);
        var2 = !var2;
        var2 = var10.bind(var11)(var8, var2);
        var2 = 32;
        var2 = var9[var2];
        var9 = var3.bind(var4)(var2);
        var3 = var9.useAutoTrackSearchTabCountsViewedAnalytics;
        var2 = {};
        var2['searchContext'] = var8;
        var2['visibleTabCounts'] = var6;
        var2['visibleTabs'] = var7;
        var2 = var3.bind(var9)(var2);
        var3 = _closure1_slot12;
        var2 = _closure1_slot20;
        var1 = {};
        var1['searchContext'] = var8;
        var1['visibleTabs'] = var7;
        var1['visibleTabCounts'] = var6;
        var1['width'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();