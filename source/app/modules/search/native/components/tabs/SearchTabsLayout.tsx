// app/modules/search/native/components/tabs/SearchTabsLayout.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.trackSearchResultEmpty;
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
        var1 = 10;
        var1 = var9[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = {};
        var8 = _closure1_slot0;
        var5 = 11;
        var6 = var9[var5];
        var6 = var8.bind(var3)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var3)(var5);
        var5 = var5.t;
        var5 = var5.V6nAfH;
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
    var4 = native4;
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
    var4 = var5.bind(var1)(var4);
    var7 = var4.MESSAGE_SEARCH_RESULT_TABS_SET;
    var _closure1_slot7 = var7;
    var7 = var4.SEARCH_MESSAGE_TAB_SENTINEL;
    var _closure1_slot8 = var7;
    var7 = var4.SEARCH_TYPE_TO_SEARCH_INITIAL_TABS;
    var _closure1_slot9 = var7;
    var4 = var4.SearchTabs;
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ComponentActions;
    var _closure1_slot11 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot12 = var7;
    var7 = var4.jsxs;
    var _closure1_slot13 = var7;
    var4 = var4.Fragment;
    var _closure1_slot14 = var4;
    var4 = 7;
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
    var4 = 8;
    var4 = var6[var4];
    var10 = var5.bind(var1)(var4);
    var9 = var10.debounce;
    var7 = function(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 9;
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
 0:
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
            var _closure2_slot13 = var5;
            var _closure2_slot14 = var5;
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
 0:
                        var8 = arg1;
                        var4 = _closure3_slot0;
                        var3 = var4.push;
                        var2 = {};
                        var9 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var1 = 12;
                        var6 = var7[var1];
                        var1 = undefined;
                        var9 = var9.bind(var1)(var6);
                        var6 = var9.getTabTitle;
                        var6 = var6.bind(var9)(var8);
                        var2['label'] = var6;
                        var2['id'] = var8;
                        var9 = _closure1_slot12;
                        var6 = _closure1_slot1;
                        var5 = 13;
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
                        if(var9) { _fun0002_ip = 134; continue _fun0002 }
 126:
                        var7 = _closure2_slot2;
                        var6 = var7[var8];
 134:
                        var7 = var5 != var6;
                        var5 = undefined;
                        if(!var7) { _fun0002_ip = 146; continue _fun0002 }
 143:
                        var5 = var6;
 146:
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
 0:
                    var8 = arg1;
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var1 = 14;
                    var2 = var6[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var2);
                    var4 = var5.setSelectedSearchTab;
                    var9 = _closure2_slot0;
                    var4 = var4.bind(var5)(var9, var8);
                    var4 = _closure1_slot16;
                    var4 = var4.bind(var1)(var9);
                    var7 = _closure1_slot6;
                    var5 = var7.getState;
                    var4 = function(arg1) {
                        var2 = arg1;
                        var1 = var2.getQueryString;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var7 = var5.bind(var7)(var9, var4);
                    var5 = _closure1_slot0;
                    var4 = 12;
                    var4 = var6[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.getSearchTabFetchId;
                    var4 = _closure1_slot8;
                    var7 = var5.bind(var6)(var9, var4, var7);
                    var6 = _closure1_slot5;
                    var4 = var6.getIsFetching;
                    var5 = var4.bind(var6)(var7);
                    var4 = var6.getIsInitialFetchComplete;
                    var6 = var4.bind(var6)(var7);
                    var7 = _closure1_slot7;
                    var4 = var7.has;
                    var4 = var4.bind(var7)(var8);
                    var4 = !var4;
                    if(var4) { _fun0003_ip = 165; continue _fun0003 }
 162:
                    var4 = var6;
 165:
                    if(var4) { _fun0003_ip = 171; continue _fun0003 }
 168:
                    var4 = var5;
 171:
                    if(var4) { _fun0003_ip = 209; continue _fun0003 }
 174:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 15;
                    var3 = var5[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.fetchInitialMessages;
                    var2 = _closure2_slot0;
                    var2 = var3.bind(var4)(var2);
 209:
                    return var1;
                }
            };
            var13 = var8.bind(var9)(var3, var7);
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 16;
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
            var3 = 17;
            var3 = var10[var3];
            var3 = var8.bind(var5)(var3);
            var3 = var3.SwipeForMemberListContext;
            var19 = var4.bind(var7)(var3);
            var _closure2_slot6 = var19;
            var17 = null;
            var4 = var19;
            if(!(var17 == var4)) { _fun0001_ip = 341; continue _fun0001 }
 339:
            var4 = {};
 341:
            var3 = var4.gesture;
            _closure2_slot7 = var3;
            var16 = var4.disallowGesture;
            _closure2_slot8 = var16;
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
 0:
                    var3 = _closure2_slot7;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0004_ip = 17; continue _fun0004 }
 13:
                    var2 = undefined;
                    return var2;
 17:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 18;
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
            var3 = 19;
            var3 = var7[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.useSharedValue;
            var7 = false;
            var15 = var3.bind(var4)(var7);
            _closure2_slot11 = var15;
            var13 = _closure1_slot3;
            var8 = var13.useCallback;
            var4 = function I(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = arg1;
                    var1 = var1.contentOffset;
                    var5 = _closure2_slot11;
                    var4 = var5.set;
                    var3 = true;
                    var3 = var4.bind(var5)(var3);
                    var4 = _closure2_slot8;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0005_ip = 63; continue _fun0005 }
 38:
                    var3 = _closure2_slot8;
                    var2 = var3.set;
                    var4 = var1.x;
                    var1 = 0;
                    var1 = var4 > var1;
                    var1 = var2.bind(var3)(var1);
 63:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = {};
            var3['isDragging'] = var15;
            var3['disallowMemberListGesture'] = var16;
            var4['__closure'] = var3;
            var3 = 766628353255.0;
            var4['__workletHash'] = var3;
            var3 = _closure1_slot17;
            var4['__initData'] = var3;
            var3 = new Array(2);
            var3[0] = var16;
            var3[1] = var15;
            var22 = var8.bind(var13)(var4, var3);
            var13 = _closure1_slot3;
            var8 = var13.useCallback;
            var4 = function A() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var4 = _closure2_slot11;
                    var2 = var4.set;
                    var3 = false;
                    var2 = var2.bind(var4)(var3);
                    var4 = _closure2_slot8;
                    var2 = null;
                    if(!(var2 != var4)) { _fun0006_ip = 43; continue _fun0006 }
 29:
                    var2 = _closure2_slot8;
                    var1 = var2.set;
                    var1 = var1.bind(var2)(var3);
 43:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = {};
            var3['isDragging'] = var15;
            var3['disallowMemberListGesture'] = var16;
            var4['__closure'] = var3;
            var3 = 5683301645106.0;
            var4['__workletHash'] = var3;
            var3 = _closure1_slot18;
            var4['__initData'] = var3;
            var3 = new Array(2);
            var3[0] = var16;
            var3[1] = var15;
            var21 = var8.bind(var13)(var4, var3);
            var13 = _closure1_slot3;
            var8 = var13.useCallback;
            var4 = function G(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var1 = arg1;
                    var1 = var1.contentOffset;
                    var4 = _closure2_slot11;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    if(!var3) { _fun0007_ip = 63; continue _fun0007 }
 28:
                    var4 = _closure2_slot8;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0007_ip = 63; continue _fun0007 }
 38:
                    var3 = _closure2_slot8;
                    var2 = var3.set;
                    var4 = var1.x;
                    var1 = 0;
                    var1 = var4 > var1;
                    var1 = var2.bind(var3)(var1);
 63:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = {};
            var3['isDragging'] = var15;
            var3['disallowMemberListGesture'] = var16;
            var4['__closure'] = var3;
            var3 = 229712012692.0;
            var4['__workletHash'] = var3;
            var3 = _closure1_slot19;
            var4['__initData'] = var3;
            var3 = new Array(2);
            var3[0] = var16;
            var3[1] = var15;
            var18 = var8.bind(var13)(var4, var3);
            var4 = _closure1_slot3;
            var3 = var4.useRef;
            var3 = var3.bind(var4)(var7);
            _closure2_slot12 = var3;
            var8 = _closure1_slot3;
            var7 = var8.useCallback;
            var4 = new Array(1);
            var4[0] = var6;
            var3 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var3 = _closure1_slot9;
                    var8 = _closure2_slot0;
                    var1 = var8.type;
                    var3 = var3[var1];
                    var1 = 0;
                    var4 = var3[var1];
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var1 = 20;
                    var3 = var7[var1];
                    var1 = undefined;
                    var10 = var6.bind(var1)(var3);
                    var3 = null;
                    var9 = var3 != var4;
                    var13 = var8.type;
                    var3 = global;
                    var3 = var3.HermesInternal;
                    var12 = var3.concat;
                    var11 = '[SearchTabsLayout] Missing initial tab for search context: ';
                    var3 = '.';
                    var3 = var12.bind(var11)(var13, var3);
                    var3 = var10.bind(var1)(var9, var3);
                    var3 = 14;
                    var3 = var7[var3];
                    var7 = var6.bind(var1)(var3);
                    var6 = var7.initialize;
                    var3 = {};
                    var3['searchContext'] = var8;
                    var3['initialTab'] = var4;
                    var4 = true;
                    var3['initializeSearchQueryId'] = var4;
                    var3 = var6.bind(var7)(var3);
                    var3 = _closure2_slot12;
                    var3 = var3.current;
                    if(var3) { _fun0008_ip = 241; continue _fun0008 }
 151:
                    var3 = _closure2_slot12;
                    var3['current'] = var4;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 21;
                    var2 = var4[var2];
                    var6 = var3.bind(var1)(var2);
                    var2 = var6.createSearchTabsLayoutManager;
                    var5 = _closure2_slot0;
                    var6 = var2.bind(var6)(var5);
                    var2 = 9;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.trackSearchOpened;
                    var2 = {};
                    var2['searchContext'] = var5;
                    var5 = var6.getVisibleTabs;
                    var5 = var5.bind(var6)();
                    var2['visibleSearchTabs'] = var5;
                    var2 = var3.bind(var4)(var2);
 241:
                    return var1;
                }
            };
            var3 = var7.bind(var8)(var3, var4);
            _closure2_slot13 = var3;
            var13 = _closure1_slot3;
            var8 = var13.useCallback;
            var7 = new Array(1);
            var7[0] = var6;
            var4 = function() {
                var2 = _closure2_slot12;
                var1 = false;
                var2['current'] = var1;
                var3 = _closure1_slot6;
                var1 = var3.deleteState;
                var4 = _closure2_slot0;
                var1 = var1.bind(var3)(var4);
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var6 = 22;
                var7 = var5[var6];
                var1 = undefined;
                var8 = var3.bind(var1)(var7);
                var7 = var8.clearAllSearchMesssages;
                var7 = var7.bind(var8)();
                var6 = var5[var6];
                var7 = var3.bind(var1)(var6);
                var6 = var7.clearSearchRecentMessages;
                var6 = var6.bind(var7)();
                var6 = _closure1_slot0;
                var2 = 12;
                var2 = var5[var2];
                var7 = var6.bind(var1)(var2);
                var2 = var7.getSearchContextId;
                var8 = var2.bind(var7)(var4);
                var2 = 23;
                var2 = var5[var2];
                var7 = var3.bind(var1)(var2);
                var2 = var7.cleanUp;
                var2 = var2.bind(var7)(var8);
                var2 = 24;
                var2 = var5[var2];
                var2 = var6.bind(var1)(var2);
                var7 = var2.SearchItemViewedAnalyticsManager;
                var2 = var7.flushAnalytics;
                var2 = var2.bind(var7)(var4);
                var2 = 9;
                var2 = var5[var2];
                var7 = var6.bind(var1)(var2);
                var6 = var7.trackSearchClosed;
                var2 = {};
                var2['searchContext'] = var4;
                var2 = var6.bind(var7)(var2);
                var2 = 14;
                var2 = var5[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.terminate;
                var2 = var2.bind(var3)(var4);
                return var1;
            };
            var8 = var8.bind(var13)(var4, var7);
            _closure2_slot14 = var8;
            var15 = _closure1_slot3;
            var13 = var15.useEffect;
            var7 = new Array(3);
            var7[0] = var3;
            var7[1] = var19;
            var7[2] = var8;
            var4 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var3 = _closure2_slot6;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0009_ip = 17; continue _fun0009 }
 13:
                    var2 = undefined;
                    return var2;
 17:
                    var2 = _closure2_slot13;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
                    var1 = function() {
                        var2 = _closure2_slot14;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
                        return var1;
                    };
                    return var1;
                }
            };
            var4 = var13.bind(var15)(var4, var7);
            var13 = _closure1_slot3;
            var7 = var13.useEffect;
            var4 = new Array(4);
            var4[0] = var3;
            var4[1] = var12;
            var4[2] = var10;
            var4[3] = var19;
            var3 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var5 = function handleChannelDetailsShown(arg1) {
                        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                            var1 = arg1;
                            var3 = var1.channelId;
                            var4 = var1.screenIndex;
                            var2 = _closure2_slot9;
                            var2 = var3 === var2;
                            if(!var2) { _fun0011_ip = 36; continue _fun0011 }
 28:
                            var3 = _closure2_slot10;
                            var2 = var4 === var3;
 36:
                            if(!var2) { _fun0011_ip = 49; continue _fun0011 }
 39:
                            var2 = _closure2_slot13;
                            var1 = undefined;
                            var1 = var2.bind(var1)();
 49:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var _closure3_slot0 = var5;
                    var3 = _closure2_slot6;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0010_ip = 30; continue _fun0010 }
 26:
                    var2 = undefined;
                    return var2;
 30:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 25;
                    var4 = var4[var3];
                    var3 = undefined;
                    var3 = var6.bind(var3)(var4);
                    var4 = var3.ComponentDispatch;
                    var3 = var4.subscribe;
                    var2 = _closure1_slot11;
                    var2 = var2.CHANNEL_DETAILS_SHOWN;
                    var2 = var3.bind(var4)(var2, var5);
                    var1 = function() {
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 25;
                        var3 = var3[var1];
                        var1 = undefined;
                        var3 = var4.bind(var1)(var3);
                        var5 = var3.ComponentDispatch;
                        var4 = var5.unsubscribe;
                        var2 = _closure1_slot11;
                        var3 = var2.CHANNEL_DETAILS_SHOWN;
                        var2 = _closure3_slot0;
                        var2 = var4.bind(var5)(var3, var2);
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
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var5 = function handleChannelDetailsHidden(arg1) {
                        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                            var1 = arg1;
                            var3 = var1.channelId;
                            var4 = var1.screenIndex;
                            var2 = _closure2_slot9;
                            var2 = var3 === var2;
                            if(!var2) { _fun0013_ip = 36; continue _fun0013 }
 28:
                            var3 = _closure2_slot10;
                            var2 = var4 === var3;
 36:
                            if(!var2) { _fun0013_ip = 63; continue _fun0013 }
 39:
                            var5 = _closure2_slot4;
                            var2 = undefined;
                            var4 = 0;
                            var3 = false;
                            var3 = var5.bind(var2)(var4, var3);
                            var1 = _closure2_slot14;
                            var1 = var1.bind(var2)();
 63:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var _closure3_slot0 = var5;
                    var3 = _closure2_slot6;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0012_ip = 30; continue _fun0012 }
 26:
                    var2 = undefined;
                    return var2;
 30:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 25;
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
                        var1 = 25;
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
            if(!(var1 !== var3)) { _fun0001_ip = 1221; continue _fun0001 }
 912:
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
            var8 = 26;
            var8 = var24[var8];
            var9 = var12.bind(var5)(var8);
            var8 = {};
            var8['state'] = var23;
            var9 = var13.bind(var5)(var9, var8);
            var8 = new Array(2);
            var8[0] = var9;
            var13 = _closure1_slot12;
            var9 = 27;
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
            var11 = 13;
            var11 = var24[var11];
            var11 = var15.bind(var5)(var11);
            var11 = var11.SearchTabsPageContext;
            var12 = var11.Provider;
            var11 = {};
            var11['value'] = var14;
            var16 = _closure1_slot12;
            var14 = 28;
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
            if(!var23) { _fun0001_ip = 1140; continue _fun0001 }
 1137:
            var20 = var22;
 1140:
            var14['onBeginDragWorklet'] = var20;
            var22 = var17 != var19;
            var20 = undefined;
            if(!var22) { _fun0001_ip = 1157; continue _fun0001 }
 1154:
            var20 = var21;
 1157:
            var14['onEndDragWorklet'] = var20;
            var19 = var17 != var19;
            var17 = undefined;
            if(!var19) { _fun0001_ip = 1174; continue _fun0001 }
 1171:
            var17 = var18;
 1174:
            var14['onScrollWorklet'] = var17;
            var14 = var16.bind(var5)(var15, var14);
            var11['children'] = var14;
            var11 = var13.bind(var5)(var12, var11);
            var8['children'] = var11;
            var8 = var9.bind(var5)(var10, var8);
            var7[1] = var8;
            var1['children'] = var7;
            var1 = var4.bind(var5)(var3, var1);
            _fun0001_ip = 1242; continue _fun0001;
 1221:
            var4 = _closure1_slot12;
            var3 = _closure1_slot21;
            var2 = {};
            var2['searchContext'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 1242:
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot20 = var4;
    var4 = 30;
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
        var2 = 21;
        var2 = var9[var2];
        var4 = undefined;
        var6 = var3.bind(var4)(var2);
        var2 = var6.useVisibleSearchTabs;
        var2 = var2.bind(var6)(var8);
        var7 = var2.visibleTabs;
        var6 = var2.visibleTabCounts;
        var2 = 29;
        var2 = var9[var2];
        var9 = var3.bind(var4)(var2);
        var3 = var9.useAutoTrackSearchTabCountsViewedAnalytics;
        var2 = {};
        var2['searchContext'] = var8;
        var2['visibleTabCounts'] = var6;
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