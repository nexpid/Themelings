// app/modules/gif_picker/native/GIFPicker.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var7 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var6;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var11 = 1;
    var4 = var6[var11];
    var7 = var7.bind(var1)(var4);
    var _closure1_slot5 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.AnalyticEvents;
    var _closure1_slot8 = var8;
    var8 = var4.ChatInputComponentViewedTypes;
    var _closure1_slot9 = var8;
    var8 = var4.GIF_FETCH_LIMIT_IOS;
    var _closure1_slot10 = var8;
    var8 = var4.GIFPickerResultTypes;
    var _closure1_slot11 = var8;
    var4 = var4.TooltipNames;
    var _closure1_slot12 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot13 = var8;
    var4 = var4.jsxs;
    var _closure1_slot14 = var4;
    var4 = 6;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var10['flex'] = var11;
    var4['container'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot15 = var4;
    var4 = var7.memo;
    var2 = function GIFPicker(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var8 = var3.channelId;
            var _closure2_slot0 = var8;
            var2 = var3.guildId;
            var _closure2_slot1 = var2;
            var20 = var3.hideFavorites;
            var26 = var3.onPressGIF;
            var _closure2_slot2 = var26;
            var13 = var3.inActionSheet;
            var4 = undefined;
            if(!(var13 === var4)) { _fun0001_ip = 53; continue _fun0001 }
 51:
            var13 = false;
 53:
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var _closure2_slot12 = var4;
            var _closure2_slot13 = var4;
            var _closure2_slot14 = var4;
            var _closure2_slot15 = var4;
            var _closure2_slot16 = var4;
            var3 = _closure1_slot15;
            var5 = var3.bind(var4)();
            var17 = _closure1_slot5;
            var6 = var17.useEffect;
            var3 = new Array(2);
            var3[0] = var8;
            var3[1] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure1_slot2;
                    var2 = _closure1_slot3;
                    var1 = 7;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.initializeSearch;
                    var2 = var2.bind(var3)();
                    var3 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0002_ip = 121; continue _fun0002 }
 48:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var2 = 8;
                    var2 = var4[var2];
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.track;
                    var2 = _closure1_slot8;
                    var3 = var2.CHAT_INPUT_COMPONENT_VIEWED;
                    var2 = {};
                    var7 = _closure1_slot9;
                    var7 = var7.GIF;
                    var2['type'] = var7;
                    var7 = _closure2_slot0;
                    var2['channel_id'] = var7;
                    var6 = _closure2_slot1;
                    var2['guild_id'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
 121:
                    return var1;
                }
            };
            var2 = var6.bind(var17)(var2, var3);
            var8 = _closure1_slot1;
            var25 = _closure1_slot3;
            var2 = 9;
            var2 = var25[var2];
            var2 = var8.bind(var4)(var2);
            var9 = var2.bind(var4)();
            _closure2_slot3 = var9;
            var2 = 10;
            var2 = var25[var2];
            var2 = var8.bind(var4)(var2);
            var2 = var2.bind(var4)();
            _closure2_slot4 = var2;
            var6 = var17.useMemo;
            var3 = new Array(2);
            var3[0] = var9;
            var3[1] = var2;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = _closure2_slot3;
                    var4 = 2;
                    var5 = var4;
                    if(!var1) { _fun0003_ip = 19; continue _fun0003 }
 16:
                    var5 = 3;
 19:
                    var1 = {};
                    var1['columns'] = var5;
                    var2 = _closure2_slot4;
                    var2 = var2.width;
                    var3 = var2 / var5;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var2 = 11;
                    var6 = var6[var2];
                    var2 = undefined;
                    var2 = var7.bind(var2)(var6);
                    var2 = var2.GIF_PICKER_GUTTER_SPACING;
                    var4 = var2 / var4;
                    var2 = 1;
                    var2 = var5 - var2;
                    var2 = var4 * var2;
                    var2 = var3 - var2;
                    var1['columnWidth'] = var2;
                    return var1;
                }
            };
            var2 = var6.bind(var17)(var2, var3);
            var16 = var2.columns;
            var15 = var2.columnWidth;
            var3 = var17.useContext;
            var10 = _closure1_slot0;
            var2 = 12;
            var2 = var25[var2];
            var2 = var10.bind(var4)(var2);
            var2 = var2.PortalKeyboardContext;
            var2 = var3.bind(var17)(var2);
            var21 = var2.searchInputRef;
            _closure2_slot5 = var21;
            var2 = var2.bottomSheetRefs;
            var19 = var2.expression;
            _closure2_slot6 = var19;
            var2 = var17.useState;
            var14 = false;
            var2 = var2.bind(var17)(var14);
            var12 = _closure1_slot4;
            var11 = 2;
            var2 = var12.bind(var4)(var2, var11);
            var9 = 0;
            var6 = var2[var9];
            var3 = 1;
            var2 = var2[var3];
            _closure2_slot7 = var2;
            var18 = var17.useRef;
            var2 = '';
            var2 = var18.bind(var17)(var2);
            _closure2_slot8 = var2;
            var2 = var17.useState;
            var2 = var2.bind(var17)(var14);
            var2 = var12.bind(var4)(var2, var11);
            var14 = var2[var9];
            var2 = var2[var3];
            _closure2_slot9 = var2;
            var18 = var17.useState;
            var2 = _closure1_slot11;
            var2 = var2.SEARCH;
            var2 = var18.bind(var17)(var2);
            var2 = var12.bind(var4)(var2, var11);
            var24 = var2[var9];
            _closure2_slot10 = var24;
            var2 = var2[var3];
            _closure2_slot11 = var2;
            var11 = var17.useCallback;
            var3 = new Array(1);
            var3[0] = var21;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var4 = _closure2_slot7;
                    var1 = undefined;
                    var3 = false;
                    var3 = var4.bind(var1)(var3);
                    var5 = _closure2_slot11;
                    var4 = _closure1_slot11;
                    var4 = var4.SEARCH;
                    var4 = var5.bind(var1)(var4);
                    var4 = _closure1_slot2;
                    var5 = _closure1_slot3;
                    var3 = 7;
                    var3 = var5[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.resetSearch;
                    var3 = var3.bind(var4)();
                    var2 = _closure2_slot5;
                    var3 = var2.current;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0004_ip = 93; continue _fun0004 }
 83:
                    var2 = var3.blur;
                    var2 = var2.bind(var3)();
 93:
                    return var1;
                }
            };
            var23 = var11.bind(var17)(var2, var3);
            var11 = var17.useMemo;
            var3 = function() {
                var3 = _closure1_slot0;
                var6 = _closure1_slot3;
                var2 = 13;
                var2 = var6[var2];
                var5 = undefined;
                var4 = var3.bind(var5)(var2);
                var3 = var4.debounce;
                var2 = _closure1_slot2;
                var1 = 7;
                var1 = var6[var1];
                var1 = var2.bind(var5)(var1);
                var2 = var1.search;
                var1 = 200;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2 = new Array(0);
            var3 = var11.bind(var17)(var3, var2);
            _closure2_slot12 = var3;
            var2 = 11;
            var2 = var25[var2];
            var11 = var10.bind(var4)(var2);
            var2 = var11.useFavoriteGIFsMobile;
            var2 = var2.bind(var11)();
            var11 = var2.favorites;
            _closure2_slot13 = var11;
            var18 = var2.favoritesCategory;
            var2 = 14;
            var2 = var25[var2];
            var12 = var10.bind(var4)(var2);
            var11 = var12.useStateFromStoresObject;
            var2 = _closure1_slot7;
            var10 = new Array(1);
            var10[0] = var2;
            var2 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = {};
                    var5 = _closure2_slot10;
                    var4 = _closure1_slot11;
                    var4 = var4.FAVORITES;
                    if(!(var5 === var4)) { _fun0005_ip = 32; continue _fun0005 }
 26:
                    var3 = _closure2_slot13;
                    _fun0005_ip = 48; continue _fun0005;
 32:
                    var5 = _closure1_slot7;
                    var4 = var5.getResultItems;
                    var3 = var4.bind(var5)();
 48:
                    var1['resultItems'] = var3;
                    var3 = _closure1_slot7;
                    var2 = var3.getResultQuery;
                    var2 = var2.bind(var3)();
                    var1['resultQuery'] = var2;
                    return var1;
                }
            };
            var2 = var11.bind(var12)(var10, var2);
            var12 = var2.resultItems;
            _closure2_slot14 = var12;
            var2 = var2.resultQuery;
            _closure2_slot15 = var2;
            var11 = var17.useCallback;
            var10 = new Array(3);
            var10[0] = var3;
            var10[1] = var21;
            var10[2] = var2;
            var3 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var4 = arg1;
                    var5 = arguments[1];
                    var1 = undefined;
                    if(!(var5 === var1)) { _fun0006_ip = 14; continue _fun0006 }
 12:
                    var5 = true;
 14:
                    var2 = _closure2_slot8;
                    var2 = var2.current;
                    if(!(var2 !== var4)) { _fun0006_ip = 227; continue _fun0006 }
 33:
                    var2 = _closure2_slot8;
                    var2['current'] = var4;
                    var7 = _closure2_slot11;
                    var2 = _closure1_slot11;
                    var2 = var2.SEARCH;
                    var2 = var7.bind(var1)(var2);
                    var2 = var4.trim;
                    var2 = var2.bind(var4)();
                    var7 = var2.length;
                    var2 = 0;
                    var7 = var7 > var2;
                    var8 = _closure2_slot9;
                    var2 = !var7;
                    var2 = !var2;
                    if(!var7) { _fun0006_ip = 107; continue _fun0006 }
 99:
                    var9 = _closure2_slot15;
                    var2 = var9 !== var4;
 107:
                    var2 = var8.bind(var1)(var2);
                    var2 = _closure2_slot7;
                    var2 = var2.bind(var1)(var7);
                    var9 = !var5;
                    if(var9) { _fun0006_ip = 133; continue _fun0006 }
 127:
                    var8 = _closure2_slot12;
                    _fun0006_ip = 159; continue _fun0006;
 133:
                    var7 = _closure1_slot2;
                    var10 = _closure1_slot3;
                    var2 = 7;
                    var2 = var10[var2];
                    var2 = var7.bind(var1)(var2);
                    var8 = var2.search;
 159:
                    var2 = null;
                    var10 = '';
                    var7 = null;
                    if(!(var10 !== var4)) { _fun0006_ip = 181; continue _fun0006 }
 171:
                    var10 = _closure1_slot11;
                    var7 = var10.SEARCH;
 181:
                    var11 = _closure1_slot10;
                    var15 = undefined;
                    var14 = var4;
                    var13 = var7;
                    var12 = var9;
                    var6 = var15[var8](var14, var13, var12, var11, var10);
                    if(var5) { _fun0006_ip = 227; continue _fun0006 }
 203:
                    var3 = _closure2_slot5;
                    var3 = var3.current;
                    if(!(var2 != var3)) { _fun0006_ip = 227; continue _fun0006 }
 216:
                    var2 = var3.setText;
                    var2 = var2.bind(var3)(var4);
 227:
                    return var1;
                }
            };
            var22 = var11.bind(var17)(var3, var10);
            _closure2_slot16 = var22;
            var11 = var17.useEffect;
            var10 = function() {
                var5 = _closure1_slot1;
                var4 = _closure1_slot3;
                var2 = 15;
                var2 = var4[var2];
                var3 = undefined;
                var6 = var5.bind(var3)(var2);
                var5 = var6.acknowledgeTooltip;
                var2 = _closure1_slot12;
                var2 = var2.GIF_PICKER_TOOLTIP;
                var2 = var5.bind(var6)(var2);
                var2 = _closure1_slot2;
                var1 = 7;
                var1 = var4[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.fetchTrendingSearchTerms;
                var1 = var1.bind(var2)();
                var1 = function() {
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var1 = 16;
                    var3 = var6[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.wait;
                    var5 = _closure1_slot2;
                    var2 = 7;
                    var2 = var6[var2];
                    var2 = var5.bind(var1)(var2);
                    var2 = var2.resetSearch;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                return var1;
            };
            var3 = new Array(0);
            var3 = var11.bind(var17)(var10, var3);
            var11 = var17.useEffect;
            var10 = new Array(2);
            var10[0] = var2;
            var10[1] = var21;
            var3 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = _closure2_slot15;
                    var2 = '';
                    if(!(var2 !== var3)) { _fun0007_ip = 55; continue _fun0007 }
 15:
                    var4 = _closure1_slot2;
                    var3 = _closure1_slot3;
                    var2 = 7;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.fetchSuggestions;
                    var2 = _closure2_slot15;
                    var2 = var3.bind(var4)(var2);
 55:
                    var3 = _closure2_slot9;
                    var4 = _closure2_slot15;
                    var1 = _closure2_slot5;
                    var6 = var1.current;
                    var1 = null;
                    var5 = var1 == var6;
                    var1 = undefined;
                    var2 = undefined;
                    if(var5) { _fun0007_ip = 95; continue _fun0007 }
 85:
                    var5 = var6.getText;
                    var2 = var5.bind(var6)();
 95:
                    var2 = var4 !== var2;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var3 = var11.bind(var17)(var3, var10);
            var11 = var17.useMemo;
            var10 = new Array(1);
            var10[0] = var22;
            var3 = function() {
                var4 = _closure1_slot13;
                var2 = _closure1_slot1;
                var3 = _closure1_slot3;
                var1 = 17;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var5 = function onClickSuggestion(arg1) {
                    var4 = _closure2_slot16;
                    var3 = undefined;
                    var2 = arg1;
                    var1 = false;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                };
                var1['onClickSuggestion'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var10 = var11.bind(var17)(var3, var10);
            var11 = var17.useCallback;
            var3 = new Array(3);
            var3[0] = var26;
            var26 = var12.length;
            var3[1] = var26;
            var3[2] = var2;
            var2 = function(arg1, arg2) {
                var3 = arg1;
                var5 = _closure1_slot2;
                var4 = _closure1_slot3;
                var1 = 7;
                var4 = var4[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var5 = var6.trackSelectGIF;
                var4 = {};
                var7 = _closure1_slot11;
                var7 = var7.SEARCH;
                var4['type'] = var7;
                var7 = arg2;
                var4['index'] = var7;
                var7 = 0;
                var4['offset'] = var7;
                var2 = _closure1_slot10;
                var4['limit'] = var2;
                var7 = _closure2_slot14;
                var7 = var7.length;
                var4['results'] = var7;
                var7 = _closure2_slot14;
                var7 = var7.length;
                var4['totalResults'] = var7;
                var7 = _closure2_slot15;
                var4['query'] = var7;
                var7 = var3.id;
                var4['gifId'] = var7;
                var4 = var5.bind(var6)(var4);
                var2 = _closure2_slot2;
                var2 = var2.bind(var1)(var3);
                return var1;
            };
            var11 = var11.bind(var17)(var2, var3);
            var3 = var17.useCallback;
            var2 = new Array(2);
            var2[0] = var19;
            var2[1] = var22;
            var1 = function(arg1, arg2) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var3 = arg1;
                    var2 = _closure1_slot11;
                    var2 = var2.TRENDING_GIFS;
                    if(!(var3 !== var2)) { _fun0008_ip = 83; continue _fun0008 }
 20:
                    var2 = _closure1_slot11;
                    var2 = var2.FAVORITES;
                    if(!(var3 !== var2)) { _fun0008_ip = 56; continue _fun0008 }
 34:
                    var6 = _closure2_slot16;
                    var5 = undefined;
                    var4 = arg2;
                    var2 = false;
                    var2 = var6.bind(var5)(var4, var2);
                    _fun0008_ip = 143; continue _fun0008;
 56:
                    var6 = _closure2_slot7;
                    var4 = undefined;
                    var5 = false;
                    var5 = var6.bind(var4)(var5);
                    var2 = _closure2_slot11;
                    var2 = var2.bind(var4)(var3);
                    _fun0008_ip = 143; continue _fun0008;
 83:
                    var6 = _closure2_slot7;
                    var4 = undefined;
                    var5 = false;
                    var5 = var6.bind(var4)(var5);
                    var2 = _closure2_slot11;
                    var2 = var2.bind(var4)(var3);
                    var3 = _closure1_slot2;
                    var5 = _closure1_slot3;
                    var2 = 7;
                    var2 = var5[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.fetchTrendingGIFs;
                    var1 = _closure1_slot10;
                    var1 = var2.bind(var3)(var1);
 143:
                    var1 = _closure2_slot6;
                    var2 = var1.current;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0008_ip = 171; continue _fun0008 }
 161:
                    var1 = var2.expand;
                    var1 = var1.bind(var2)();
 171:
                    var1 = undefined;
                    return var1;
                }
            };
            var17 = var3.bind(var17)(var1, var2);
            var3 = _closure1_slot14;
            var2 = _closure1_slot6;
            var1 = {};
            var5 = var5.container;
            var1['style'] = var5;
            var19 = _closure1_slot13;
            var5 = 18;
            var5 = var25[var5];
            var8 = var8.bind(var4)(var5);
            var5 = {};
            var5['categoryType'] = var24;
            var5['onQueryClear'] = var23;
            var5['onQueryChange'] = var22;
            var5['searchInputRef'] = var21;
            var8 = var19.bind(var4)(var8, var5);
            var5 = new Array(2);
            var5[0] = var8;
            var8 = var12.length;
            if(!(!(var8 > var9))) { _fun0001_ip = 919; continue _fun0001 }
 851:
            if(var6) { _fun0001_ip = 919; continue _fun0001 }
 854:
            var9 = _closure1_slot13;
            var8 = _closure1_slot1;
            var19 = _closure1_slot3;
            var6 = 20;
            var6 = var19[var6];
            var8 = var8.bind(var4)(var6);
            var6 = {};
            var6['columns'] = var16;
            var6['onSelectCategory'] = var17;
            var19 = true;
            var17 = undefined;
            if(!(var19 !== var20)) { _fun0001_ip = 901; continue _fun0001 }
 898:
            var17 = var18;
 901:
            var6['favoritesCategory'] = var17;
            var6['inActionSheet'] = var13;
            var6 = var9.bind(var4)(var8, var6);
            _fun0001_ip = 986; continue _fun0001;
 919:
            var9 = _closure1_slot13;
            var8 = _closure1_slot1;
            var17 = _closure1_slot3;
            var7 = 19;
            var7 = var17[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var7['columns'] = var16;
            var7['columnWidth'] = var15;
            var7['loading'] = var14;
            var7['inActionSheet'] = var13;
            var7['resultItems'] = var12;
            var7['onPressGIF'] = var11;
            var7['ListFooterComponent'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 986:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/gif_picker/native/GIFPicker.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();