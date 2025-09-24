// app/modules/search/native/components/tabs/pages/RecentScreen.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 46; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 46:
            if(var2) { _fun0001_ip = 55; continue _fun0001 }
 49:
            var2 = var3.@@iterator;
 55:
            if(var2) { _fun0001_ip = 345; continue _fun0001 }
 61:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 323; continue _fun0001 }
 86:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 283; continue _fun0001 }
 96:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 270; continue _fun0001 }
 110:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 163; continue _fun0001 }
 158:
            var7 = var3.constructor;
 163:
            var10 = var9;
            if(!var7) { _fun0001_ip = 179; continue _fun0001 }
 169:
            var7 = var3.constructor;
            var10 = var7.name;
 179:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 187:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 195:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 234; continue _fun0001 }
 205:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 247; continue _fun0001 }
 234:
            var9 = _closure1_slot24;
            var7 = var9.bind(var8)(var3, var8);
 247:
            _fun0001_ip = 265; continue _fun0001;
 249:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 265:
            var6 = var7;
            _fun0001_ip = 283; continue _fun0001;
 270:
            var7 = _closure1_slot24;
            var6 = var7.bind(var8)(var3, var8);
 283:
            var4 = var6;
            if(var4) { _fun0001_ip = 323; continue _fun0001 }
 289:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 323:
            if(!var4) { _fun0001_ip = 330; continue _fun0001 }
 326:
            _closure2_slot0 = var4;
 330:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 56; continue _fun0002 }
 20:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 67; continue _fun0002;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 345:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 70; continue _fun0003 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 55; continue _fun0003 }
 70:
            return var1;
        }
    };
    var _closure1_slot24 = var1;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.EMPTY_MEDIA_RESULTS;
    var _closure1_slot10 = var8;
    var8 = var4.EMPTY_SEARCH_QUERY_STRING;
    var _closure1_slot11 = var8;
    var8 = var4.MESSAGE_PLACEHOLDER_ITEM_SIZE;
    var _closure1_slot12 = var8;
    var8 = var4.RECENTS_ESTIMATED_ITEM_SIZE;
    var _closure1_slot13 = var8;
    var8 = var4.SearchListItemTypes;
    var _closure1_slot14 = var8;
    var4 = var4.SearchTabs;
    var _closure1_slot15 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SearchTypes;
    var _closure1_slot16 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot17 = var4;
    var4 = function ClearAllHistory(arg1) {
        var1 = arg1;
        var1 = var1.searchContext;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot17;
        var10 = _closure1_slot0;
        var11 = _closure1_slot2;
        var1 = 10;
        var1 = var11[var1];
        var3 = undefined;
        var1 = var10.bind(var3)(var1);
        var2 = var1.PressableHighlight;
        var1 = {'onPress': null, 'accessibilityRole': 'button', 'unstable_pressDelay': 130};
        var5 = function onPress() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 11;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.clearSearchHistory;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['onPress'] = var5;
        var7 = 12;
        var5 = var11[var7];
        var5 = var10.bind(var3)(var5);
        var8 = var5.intl;
        var6 = var8.string;
        var5 = var11[var7];
        var5 = var10.bind(var3)(var5);
        var5 = var5.t;
        var5 = var5.LFTAUl;
        var5 = var6.bind(var8)(var5);
        var1['accessibilityLabel'] = var5;
        var5 = 13;
        var5 = var11[var5];
        var5 = var10.bind(var3)(var5);
        var6 = var5.Text;
        var5 = {'variant': 'text-sm/semibold', 'color': 'text-brand'};
        var8 = var11[var7];
        var8 = var10.bind(var3)(var8);
        var9 = var8.intl;
        var8 = var9.string;
        var7 = var11[var7];
        var7 = var10.bind(var3)(var7);
        var7 = var7.t;
        var7 = var7.LFTAUl;
        var7 = var8.bind(var9)(var7);
        var5['children'] = var7;
        var5 = var4.bind(var3)(var6, var5);
        var1['children'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot18 = var4;
    var4 = function ViewAll(arg1) {
        var1 = arg1;
        var5 = var1.onJumpToMedia;
        var4 = _closure1_slot17;
        var10 = _closure1_slot0;
        var11 = _closure1_slot2;
        var1 = 10;
        var1 = var11[var1];
        var3 = undefined;
        var1 = var10.bind(var3)(var1);
        var2 = var1.PressableHighlight;
        var1 = {'onPress': null, 'accessibilityRole': 'button', 'unstable_pressDelay': 130};
        var1['onPress'] = var5;
        var7 = 12;
        var5 = var11[var7];
        var5 = var10.bind(var3)(var5);
        var8 = var5.intl;
        var6 = var8.string;
        var5 = var11[var7];
        var5 = var10.bind(var3)(var5);
        var5 = var5.t;
        var5 = var5.Ofpgws;
        var5 = var6.bind(var8)(var5);
        var1['accessibilityLabel'] = var5;
        var5 = 13;
        var5 = var11[var5];
        var5 = var10.bind(var3)(var5);
        var6 = var5.Text;
        var5 = {'variant': 'text-sm/semibold', 'color': 'text-brand'};
        var8 = var11[var7];
        var8 = var10.bind(var3)(var8);
        var9 = var8.intl;
        var8 = var9.string;
        var7 = var11[var7];
        var7 = var10.bind(var3)(var7);
        var7 = var7.t;
        var7 = var7.Ofpgws;
        var7 = var8.bind(var9)(var7);
        var5['children'] = var7;
        var5 = var4.bind(var3)(var6, var5);
        var1['children'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot19 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        var2 = arg1;
        var13 = var2.searchContext;
        var _closure2_slot0 = var13;
        var15 = var2.onJumpToMedia;
        var _closure2_slot1 = var15;
        var3 = var2.suggestedData;
        var _closure2_slot2 = var3;
        var17 = _closure1_slot9;
        var4 = var17.useState;
        var2 = function(arg1) {
            var2 = arg1;
            var1 = var2.getSearchResultsQuery;
            var1 = var1.bind(var2)();
            return var1;
        };
        var11 = var4.bind(var17)(var13, var2);
        var6 = _closure1_slot0;
        var8 = _closure1_slot2;
        var2 = 18;
        var5 = var8[var2];
        var4 = undefined;
        var10 = var6.bind(var4)(var5);
        var9 = var10.getSearchTabFetchId;
        var5 = _closure1_slot15;
        var5 = var5.MEDIA;
        var5 = var9.bind(var10)(var13, var5, var11);
        var _closure2_slot3 = var5;
        var9 = 19;
        var5 = var8[var9];
        var14 = var6.bind(var4)(var5);
        var12 = var14.useStateFromStores;
        var5 = _closure1_slot6;
        var11 = new Array(1);
        var11[0] = var5;
        var10 = function() {
            var3 = _closure1_slot6;
            var2 = var3.getMessages;
            var1 = _closure2_slot3;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var19 = var12.bind(var14)(var11, var10);
        var _closure2_slot4 = var19;
        var9 = var8[var9];
        var11 = var6.bind(var4)(var9);
        var10 = var11.useStateFromStores;
        var9 = new Array(1);
        var9[0] = var5;
        var5 = function() {
            var3 = _closure1_slot6;
            var2 = var3.getIsInitialFetchComplete;
            var1 = _closure2_slot3;
            var1 = var2.bind(var3)(var1);
            var1 = !var1;
            return var1;
        };
        var11 = var10.bind(var11)(var9, var5);
        var _closure2_slot5 = var11;
        var2 = var8[var2];
        var5 = var6.bind(var4)(var2);
        var2 = var5.getSearchContextId;
        var5 = var2.bind(var5)(var13);
        var2 = function useSearchHistory(arg1) {
            var8 = arg1;
            var _closure3_slot0 = var8;
            var7 = _closure1_slot5;
            var4 = var7.useState;
            var1 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getSearchHistory;
                var1 = _closure3_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var4.bind(var7)(var1);
            var4 = _closure1_slot3;
            var5 = undefined;
            var1 = 2;
            var6 = var4.bind(var5)(var6, var1);
            var1 = 0;
            var1 = var6[var1];
            var4 = 1;
            var4 = var6[var4];
            var _closure3_slot1 = var4;
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 20;
            var3 = var6[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.useFocusEffect;
            var6 = var7.useCallback;
            var5 = new Array(1);
            var5[0] = var8;
            var2 = function() {
                var4 = function handleChange() {
                    var3 = _closure3_slot1;
                    var4 = _closure1_slot8;
                    var2 = var4.getSearchHistory;
                    var1 = _closure3_slot0;
                    var2 = var2.bind(var4)(var1);
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var _closure4_slot0 = var4;
                var2 = undefined;
                var2 = var4.bind(var2)();
                var3 = _closure1_slot8;
                var2 = var3.addReactChangeListener;
                var2 = var2.bind(var3)(var4);
                var1 = function() {
                    var3 = _closure1_slot8;
                    var2 = var3.removeReactChangeListener;
                    var1 = _closure4_slot0;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                return var1;
            };
            var2 = var6.bind(var7)(var2, var5);
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var12 = var2.bind(var4)(var5);
        var _closure2_slot6 = var12;
        var2 = _closure1_slot1;
        var5 = 21;
        var5 = var8[var5];
        var5 = var2.bind(var4)(var5);
        var10 = var5.bind(var4)();
        var _closure2_slot7 = var10;
        var9 = _closure1_slot5;
        var16 = var9.useMemo;
        var14 = new Array(1);
        var14[0] = var19;
        var5 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var3 = _closure2_slot4;
                var1 = null;
                if(!(var1 != var3)) { _fun0004_ip = 153; continue _fun0004 }
 18:
                var1 = _closure2_slot4;
                var3 = var1.length;
                var1 = 0;
                if(!(var1 !== var3)) { _fun0004_ip = 153; continue _fun0004 }
 33:
                var1 = new Array(0);
                var _closure3_slot0 = var1;
                var3 = _closure1_slot23;
                var2 = _closure2_slot4;
                var7 = undefined;
                var6 = var3.bind(var7)(var2);
                var3 = var6.bind(var7)();
                var2 = var3.done;
                var5 = 18;
                var4 = 9;
                if(var2) { _fun0004_ip = 151; continue _fun0004 }
 77:
                var11 = var3.value;
                var10 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var5];
                var10 = var10.bind(var7)(var2);
                var2 = var10.getMedia;
                var11 = var2.bind(var10)(var11);
                var10 = var11.forEach;
                var2 = function(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.push;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var2 = var10.bind(var11)(var2);
                var2 = var1.length;
                if(!(!(var2 >= var4))) { _fun0004_ip = 151; continue _fun0004 }
 136:
                var10 = var6.bind(var7)();
                var2 = var10.done;
                var3 = var10;
                if(!var2) { _fun0004_ip = 77; continue _fun0004 }
 151:
                return var1;
 153:
                var1 = _closure1_slot10;
                return var1;
            }
        };
        var16 = var16.bind(var9)(var5, var14);
        var _closure2_slot8 = var16;
        var5 = 15;
        var5 = var8[var5];
        var18 = var6.bind(var4)(var5);
        var14 = var18.useOnPressMediaItem;
        var5 = {};
        var5['searchContext'] = var13;
        var5['mediaResults'] = var16;
        var5 = var14.bind(var18)(var5);
        var _closure2_slot9 = var5;
        var18 = var9.useCallback;
        var14 = new Array(4);
        var14[0] = var16;
        var14[1] = var19;
        var14[2] = var5;
        var14[3] = var13;
        var5 = function(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var1 = arg1;
                var4 = var1.media;
                var _closure3_slot0 = var4;
                var3 = var1.originView;
                var5 = _closure2_slot4;
                var1 = null;
                var5 = var1 == var5;
                var1 = undefined;
                var8 = undefined;
                if(var5) { _fun0005_ip = 62; continue _fun0005 }
 41:
                var7 = _closure2_slot4;
                var6 = var7.find;
                var5 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.id;
                    var1 = _closure3_slot0;
                    var1 = var1.messageId;
                    var1 = var2 === var1;
                    return var1;
                };
                var8 = var6.bind(var7)(var5);
 62:
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 22;
                var6 = var9[var6];
                var7 = var7.bind(var1)(var6);
                var6 = var7.shouldAgeVerifyForSearchMedia;
                var6 = var6.bind(var7)(var4, var8);
                if(var6) { _fun0005_ip = 279; continue _fun0005 }
 103:
                var8 = _closure1_slot9;
                var7 = var8.getState;
                var11 = _closure2_slot0;
                var6 = function(arg1) {
                    var2 = arg1;
                    var1 = var2.getSearchResultsQuery;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var13 = var7.bind(var8)(var11, var6);
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var6 = 18;
                var6 = var8[var6];
                var12 = var7.bind(var1)(var6);
                var9 = var12.getSearchTabFetchId;
                var6 = _closure1_slot15;
                var6 = var6.MEDIA;
                var12 = var9.bind(var12)(var11, var6, var13);
                var9 = _closure1_slot6;
                var6 = var9.getTotalCount;
                var9 = var6.bind(var9)(var12);
                var6 = 17;
                var6 = var8[var6];
                var8 = var7.bind(var1)(var6);
                var7 = var8.trackSearchResultClicked;
                var6 = {};
                var6['searchContext'] = var11;
                var11 = var4.channelId;
                var6['channelId'] = var11;
                var11 = var4.messageId;
                var6['messageId'] = var11;
                var12 = _closure2_slot8;
                var11 = var12.findIndex;
                var10 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.messageId;
                    var1 = _closure3_slot0;
                    var1 = var1.messageId;
                    var1 = var2 === var1;
                    return var1;
                };
                var10 = var11.bind(var12)(var10);
                var6['index'] = var10;
                var6['totalSearchResults'] = var9;
                var6 = var7.bind(var8)(var6);
                var2 = _closure2_slot9;
                var2 = var2.bind(var1)(var4, var3);
                _fun0005_ip = 345; continue _fun0005;
 279:
                var3 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 23;
                var2 = var7[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.showAgeVerificationGetStartedModal;
                var2 = {};
                var6 = _closure1_slot0;
                var5 = 24;
                var5 = var7[var5];
                var5 = var6.bind(var1)(var5);
                var5 = var5.AgeVerificationModalEntryPoint;
                var5 = var5.SEARCH_MEDIA_PREVIEW;
                var2['entryPoint'] = var5;
                var2 = var3.bind(var4)(var2);
 345:
                return var1;
            }
        };
        var18 = var18.bind(var9)(var5, var14);
        var _closure2_slot10 = var18;
        var14 = var17.useState;
        var5 = function(arg1) {
            var2 = arg1;
            var1 = var2.isInitialSearchQuery;
            var1 = var1.bind(var2)();
            return var1;
        };
        var17 = var14.bind(var17)(var13, var5);
        var _closure2_slot11 = var17;
        var5 = 25;
        var5 = var8[var5];
        var14 = var6.bind(var4)(var5);
        var6 = var14.useFullscreenPlaceholderCount;
        var5 = {};
        var19 = _closure1_slot12;
        var5['placeholderHeight'] = var19;
        var19 = 1;
        var5['numColumns'] = var19;
        var14 = var6.bind(var14)(var5);
        var _closure2_slot12 = var14;
        var6 = var9.useMemo;
        var5 = new Array(9);
        var5[0] = var18;
        var5[1] = var17;
        var5[2] = var16;
        var5[3] = var10;
        var5[4] = var15;
        var5[5] = var14;
        var5[6] = var13;
        var5[7] = var12;
        var5[8] = var3;
        var3 = function() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var1 = new Array(0);
                var _closure3_slot0 = var1;
                var3 = _closure2_slot11;
                if(var3) { _fun0006_ip = 114; continue _fun0006 }
 20:
                var3 = var1.length;
                var8 = 0;
                if(!(var8 === var3)) { _fun0006_ip = 114; continue _fun0006 }
 31:
                var3 = _closure2_slot12;
                var3 = var8 < var3;
                var6 = global;
                var4 = 'message-placeholder-';
                var8 = 0;
                if(!var3) { _fun0006_ip = 112; continue _fun0006 }
 55:
                var9 = var1.push;
                var3 = {};
                var10 = _closure1_slot14;
                var10 = var10.MESSAGE_PLACEHOLDER;
                var3['type'] = var10;
                var10 = var6.HermesInternal;
                var10 = var10.concat;
                var10 = var10.bind(var4)(var8);
                var3['key'] = var10;
                var3 = var9.bind(var1)(var3);
                var8 = var8 + 1;
                var3 = _closure2_slot12;
                if(var8 < var3) { _fun0006_ip = 55; continue _fun0006 }
 112:
                return var1;
 114:
                var3 = _closure2_slot6;
                var3 = var3.length;
                var9 = 0;
                if(!(var3 > var9)) { _fun0006_ip = 281; continue _fun0006 }
 132:
                var4 = var1.push;
                var3 = {};
                var6 = _closure1_slot14;
                var6 = var6.SECTION;
                var3['type'] = var6;
                var6 = {};
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var8 = 12;
                var10 = var14[var8];
                var11 = undefined;
                var10 = var13.bind(var11)(var10);
                var12 = var10.intl;
                var10 = var12.string;
                var8 = var14[var8];
                var8 = var13.bind(var11)(var8);
                var8 = var8.t;
                var8 = var8.ZZpBr6;
                var8 = var10.bind(var12)(var8);
                var6['title'] = var8;
                var10 = _closure1_slot17;
                var8 = _closure1_slot18;
                var7 = {};
                var12 = _closure2_slot0;
                var7['searchContext'] = var12;
                var7 = var10.bind(var11)(var8, var7);
                var6['trailing'] = var7;
                var3['props'] = var6;
                var3 = var4.bind(var1)(var3);
                var6 = _closure2_slot6;
                var4 = var6.forEach;
                var3 = function(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.push;
                    var1 = {};
                    var4 = _closure1_slot14;
                    var4 = var4.SEARCH_HISTORY_ITEM;
                    var1['type'] = var4;
                    var4 = {};
                    var5 = arg1;
                    var4['searchHistoryItem'] = var5;
                    var5 = _closure2_slot0;
                    var4['searchContext'] = var5;
                    var1['props'] = var4;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var3 = var4.bind(var6)(var3);
 281:
                var4 = _closure2_slot2;
                var3 = null;
                if(!(var3 != var4)) { _fun0006_ip = 312; continue _fun0006 }
 291:
                var4 = _closure2_slot2;
                var3 = var4.forEach;
                var2 = function(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.push;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
 312:
                var2 = _closure2_slot8;
                var2 = var2.length;
                if(!(var2 > var9)) { _fun0006_ip = 529; continue _fun0006 }
 328:
                var3 = var1.push;
                var2 = {};
                var4 = _closure1_slot14;
                var6 = var4.SECTION;
                var2['type'] = var6;
                var6 = {};
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var8 = 12;
                var10 = var14[var8];
                var11 = undefined;
                var10 = var13.bind(var11)(var10);
                var12 = var10.intl;
                var10 = var12.string;
                var8 = var14[var8];
                var8 = var13.bind(var11)(var8);
                var8 = var8.t;
                var8 = var8.LBYpDA;
                var8 = var10.bind(var12)(var8);
                var6['title'] = var8;
                var10 = _closure1_slot17;
                var8 = _closure1_slot19;
                var7 = {};
                var12 = _closure2_slot1;
                var7['onJumpToMedia'] = var12;
                var7 = var10.bind(var11)(var8, var7);
                var6['trailing'] = var7;
                var2['props'] = var6;
                var2 = var3.bind(var1)(var2);
                var3 = var1.push;
                var2 = {};
                var4 = var4.MEDIA_GRID;
                var2['type'] = var4;
                var4 = {};
                var8 = _closure2_slot8;
                var7 = var8.slice;
                var6 = 9;
                var6 = var7.bind(var8)(var9, var6);
                var4['media'] = var6;
                var6 = _closure2_slot7;
                var4['mediaSize'] = var6;
                var5 = _closure2_slot10;
                var4['onPress'] = var5;
                var5 = true;
                var4['animate'] = var5;
                var2['props'] = var4;
                var2 = var3.bind(var1)(var2);
 529:
                return var1;
            }
        };
        var6 = var6.bind(var9)(var3, var5);
        var5 = var9.useMemo;
        var3 = new Array(2);
        var3[0] = var11;
        var3[1] = var10;
        var1 = function() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var2 = _closure2_slot5;
                var1 = null;
                if(!var2) { _fun0007_ip = 21; continue _fun0007 }
 12:
                var1 = function() {
                    var4 = _closure1_slot17;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 26;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.RecentsMediaGridPlaceholder;
                    var1 = {'numRows': 3, 'visible': true};
                    var5 = _closure2_slot7;
                    var1['size'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                };
 21:
                return var1;
            }
        };
        var5 = var5.bind(var9)(var1, var3);
        var3 = _closure1_slot17;
        var1 = 27;
        var1 = var8[var1];
        var2 = var2.bind(var4)(var1);
        var1 = {};
        var7 = _closure1_slot13;
        var1['estimatedItemSize'] = var7;
        var1['data'] = var6;
        var1['ListFooterComponent'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot20 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        var5 = arg1;
        var2 = {};
        var1 = var5.searchContext;
        var2['searchContext'] = var1;
        var1 = function useSuggestedUsersData(arg1) {
            var2 = arg1;
            var7 = var2.searchContext;
            var _closure3_slot0 = var7;
            var5 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 14;
            var4 = var8[var3];
            var3 = undefined;
            var5 = var5.bind(var3)(var4);
            var4 = {'query': null, 'withGuildMembers': false, 'withAffinitySuggestions': true, 'affinitySuggestionsLimit': 3, 'withFriends': false, 'withFriendSuggestions': false, 'withFriendRequests': false, 'withFriendRequestsIncoming': false, 'withFriendRequestsOutgoing': false, 'excludeCurrentUser': true};
            var6 = _closure1_slot11;
            var4['query'] = var6;
            var5 = var5.bind(var3)(var4);
            var _closure3_slot1 = var5;
            var6 = _closure1_slot0;
            var4 = 15;
            var4 = var8[var4];
            var8 = var6.bind(var3)(var4);
            var6 = var8.useOnPressDMItem;
            var4 = {};
            var4['searchContext'] = var7;
            var8 = var6.bind(var8)(var4);
            var _closure3_slot2 = var8;
            var4 = _closure1_slot5;
            var6 = var4.useCallback;
            var2 = function() {
                var4 = _closure1_slot4;
                var3 = undefined;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                            StartGenerator();
                            var5 = arg1;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0008_ip = 121; continue _fun0008 }
 10:
                            var6 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var2 = 16;
                            var2 = var3[var2];
                            var3 = undefined;
                            var6 = var6.bind(var3)(var2);
                            var2 = var6.getOrEnsurePrivateChannel;
                            var2 = var2.bind(var6)(var5);
                            SaveGenerator(address=50);
 48:
                            return var2;
 50:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                            if(var6) { _fun0008_ip = 118; continue _fun0008 }
 56:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var4 = 17;
                            var4 = var7[var4];
                            var8 = var6.bind(var3)(var4);
                            var7 = var8.trackSuggestedSearchClicked;
                            var6 = {};
                            var9 = _closure3_slot0;
                            var6['searchContext'] = var9;
                            var6['channelId'] = var2;
                            var6 = var7.bind(var8)(var6);
                            var4 = _closure3_slot2;
                            var4 = var4.bind(var3)(var5, var2);
                            return var3;
 118:
                            return var2;
 121:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure4_slot0 = var2;
                var1 = function() {
                    var1 = undefined;
                    var4 = _closure4_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var3 = var2.bind(var3)();
            var2 = new Array(2);
            var2[0] = var8;
            var2[1] = var7;
            var6 = var6.bind(var4)(var3, var2);
            var _closure3_slot3 = var6;
            var3 = var4.useMemo;
            var2 = new Array(2);
            var2[0] = var6;
            var2[1] = var5;
            var1 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var1 = new Array(0);
                    var _closure4_slot0 = var1;
                    var4 = _closure3_slot1;
                    var5 = var4.length;
                    var4 = 0;
                    if(!(var4 !== var5)) { _fun0009_ip = 49; continue _fun0009 }
 28:
                    var4 = _closure3_slot1;
                    var3 = var4.forEach;
                    var2 = function(arg1) {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                            var1 = arg1;
                            var6 = var1.title;
                            var3 = var1.items;
                            var2 = var3.length;
                            var1 = 0;
                            var1 = var1 !== var2;
                            if(!var1) { _fun0010_ip = 34; continue _fun0010 }
 28:
                            var2 = null;
                            var1 = var2 != var6;
 34:
                            if(!var1) { _fun0010_ip = 102; continue _fun0010 }
 37:
                            var4 = _closure4_slot0;
                            var2 = var4.push;
                            var1 = {};
                            var5 = _closure1_slot14;
                            var5 = var5.SECTION;
                            var1['type'] = var5;
                            var5 = {};
                            var5['title'] = var6;
                            var1['props'] = var5;
                            var1 = var2.bind(var4)(var1);
                            var2 = var3.forEach;
                            var1 = function(arg1) {
                                var3 = _closure4_slot0;
                                var2 = var3.push;
                                var1 = {};
                                var4 = _closure1_slot14;
                                var4 = var4.DM;
                                var1['type'] = var4;
                                var4 = {};
                                var5 = arg1;
                                var5 = var5.user;
                                var4['user'] = var5;
                                var5 = _closure3_slot3;
                                var4['onPress'] = var5;
                                var1['props'] = var4;
                                var1 = var2.bind(var3)(var1);
                                var1 = undefined;
                                return var1;
                            };
                            var1 = var2.bind(var3)(var1);
 102:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
 49:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var4 = undefined;
        var6 = var1.bind(var4)(var2);
        var3 = _closure1_slot17;
        var2 = _closure1_slot20;
        var1 = {};
        var8 = var1;
        var7 = var5;
        var5 = copyDataProperties(var8, var7);
        var5 = 'suggestedData';
        var1[var5] = var6;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot21 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        var5 = arg1;
        var2 = {};
        var1 = var5.searchContext;
        var2['searchContext'] = var1;
        var1 = function useSuggestedChannelsData(arg1) {
            var2 = arg1;
            var2 = var2.searchContext;
            var _closure3_slot0 = var2;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 18;
            var3 = var8[var3];
            var6 = undefined;
            var5 = var7.bind(var6)(var3);
            var3 = var5.getSearchContextId;
            var3 = var3.bind(var5)(var2);
            var _closure3_slot1 = var3;
            var3 = 19;
            var3 = var8[var3];
            var10 = var7.bind(var6)(var3);
            var9 = var10.useStateFromStores;
            var3 = _closure1_slot7;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getTextChannels;
                var1 = _closure3_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var9.bind(var10)(var5, var3);
            var _closure3_slot2 = var3;
            var5 = 15;
            var5 = var8[var5];
            var7 = var7.bind(var6)(var5);
            var6 = var7.useOnPressGuildTextChannel;
            var5 = {};
            var5['searchContext'] = var2;
            var7 = var6.bind(var7)(var5);
            var _closure3_slot3 = var7;
            var4 = _closure1_slot5;
            var6 = var4.useMemo;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var4 = _closure3_slot2;
                var3 = var4.slice;
                var2 = 0;
                var1 = 3;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var5 = var6.bind(var4)(var3, var5);
            var _closure3_slot4 = var5;
            var6 = var4.useCallback;
            var3 = new Array(2);
            var3[0] = var7;
            var3[1] = var2;
            var2 = function(arg1) {
                var3 = arg1;
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var6 = var4.bind(var1)(var2);
                var5 = var6.trackSuggestedSearchClicked;
                var4 = {};
                var7 = _closure3_slot0;
                var4['searchContext'] = var7;
                var4['channelId'] = var3;
                var4 = var5.bind(var6)(var4);
                var2 = _closure3_slot3;
                var2 = var2.bind(var1)(var3);
                return var1;
            };
            var6 = var6.bind(var4)(var2, var3);
            var _closure3_slot5 = var6;
            var3 = var4.useMemo;
            var2 = new Array(2);
            var2[0] = var6;
            var2[1] = var5;
            var1 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var1 = new Array(0);
                    var _closure4_slot0 = var1;
                    var4 = _closure3_slot4;
                    var5 = var4.length;
                    var4 = 0;
                    if(!(var4 !== var5)) { _fun0011_ip = 145; continue _fun0011 }
 28:
                    var5 = var1.push;
                    var4 = {};
                    var6 = _closure1_slot14;
                    var6 = var6.SECTION;
                    var4['type'] = var6;
                    var6 = {};
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var7 = 12;
                    var8 = var12[var7];
                    var10 = undefined;
                    var8 = var11.bind(var10)(var8);
                    var9 = var8.intl;
                    var8 = var9.string;
                    var7 = var12[var7];
                    var7 = var11.bind(var10)(var7);
                    var7 = var7.t;
                    var7 = var7.HbJ7eH;
                    var7 = var8.bind(var9)(var7);
                    var6['title'] = var7;
                    var4['props'] = var6;
                    var4 = var5.bind(var1)(var4);
                    var4 = _closure3_slot4;
                    var3 = var4.forEach;
                    var2 = function(arg1) {
                        var5 = arg1;
                        var3 = _closure4_slot0;
                        var2 = var3.push;
                        var1 = {};
                        var4 = _closure1_slot14;
                        var4 = var4.GUILD_TEXT_CHANNEL;
                        var1['type'] = var4;
                        var4 = {};
                        var6 = var5.channel;
                        var4['channel'] = var6;
                        var5 = var5.lastMessageId;
                        var4['lastMessageId'] = var5;
                        var5 = _closure3_slot5;
                        var4['onPress'] = var5;
                        var1['props'] = var4;
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    };
                    var2 = var3.bind(var4)(var2);
 145:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var4 = undefined;
        var6 = var1.bind(var4)(var2);
        var3 = _closure1_slot17;
        var2 = _closure1_slot20;
        var1 = {};
        var8 = var1;
        var7 = var5;
        var5 = copyDataProperties(var8, var7);
        var5 = 'suggestedData';
        var1[var5] = var6;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot22 = var4;
    var4 = var7.memo;
    var2 = function RecentScreenContainer(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var1 = arg1;
            var5 = var1.searchContext;
            var1 = var1.onJumpToMedia;
            var4 = var5.type;
            var3 = _closure1_slot16;
            var3 = var3.DMS;
            if(!(var3 !== var4)) { _fun0012_ip = 143; continue _fun0012 }
 37:
            var3 = _closure1_slot16;
            var3 = var3.GUILD;
            if(!(var3 !== var4)) { _fun0012_ip = 113; continue _fun0012 }
 51:
            var3 = _closure1_slot16;
            var3 = var3.GUILD_CHANNEL;
            if(!(var3 !== var4)) { _fun0012_ip = 83; continue _fun0012 }
 65:
            var3 = _closure1_slot16;
            var3 = var3.CHANNEL;
            if(!(var3 !== var4)) { _fun0012_ip = 83; continue _fun0012 }
 79:
            var3 = null;
            return var3;
 83:
            var7 = _closure1_slot17;
            var6 = _closure1_slot20;
            var4 = {};
            var4['searchContext'] = var5;
            var4['onJumpToMedia'] = var1;
            var3 = undefined;
            var3 = var7.bind(var3)(var6, var4);
            return var3;
 113:
            var7 = _closure1_slot17;
            var6 = _closure1_slot22;
            var4 = {};
            var4['searchContext'] = var5;
            var4['onJumpToMedia'] = var1;
            var3 = undefined;
            var3 = var7.bind(var3)(var6, var4);
            return var3;
 143:
            var4 = _closure1_slot17;
            var3 = _closure1_slot21;
            var2 = {};
            var2['searchContext'] = var5;
            var2['onJumpToMedia'] = var1;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 28;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search/native/components/tabs/pages/RecentScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();