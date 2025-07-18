// app/modules/search_v2/native/components/layout/autocomplete/AutocompleteScreen.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var8 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
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
    var7 = var6[var4];
    var4 = native4;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
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
    var8 = var4.SearchListItemTypes;
    var _closure1_slot10 = var8;
    var8 = var4.SearchQueryTagTypes;
    var _closure1_slot11 = var8;
    var4 = var4.USER_ESTIMATED_ITEM_SIZE;
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SearchTokenTypes;
    var _closure1_slot13 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot14 = var4;
    var4 = new Array(0);
    var _closure1_slot15 = var4;
    var4 = var7.memo;
    var2 = function AutocompleteScreen(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var10 = var1.searchContext;
            var _closure2_slot0 = var10;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 10;
            var3 = var9[var1];
            var5 = undefined;
            var12 = var7.bind(var5)(var3);
            var11 = var12.useStateFromStores;
            var3 = _closure1_slot7;
            var8 = new Array(1);
            var8[0] = var3;
            var4 = new Array(1);
            var4[0] = var10;
            var1 = var9[var1];
            var1 = var7.bind(var5)(var1);
            var20 = var1.statesWillNeverBeEqual;
            var22 = function() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 11;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.getBackwardCompatibilitySearchId;
                var2 = _closure2_slot0;
                var3 = var3.bind(var4)(var2);
                var2 = _closure1_slot7;
                var1 = var2.getState;
                var1 = var1.bind(var2)(var3);
                var1 = var1.autocompletes;
                return var1;
            };
            var24 = var12;
            var23 = var8;
            var21 = var4;
            var17 = var24[var11](var23, var22, var21, var20, var19);
            var _closure2_slot1 = var17;
            var12 = _closure1_slot4;
            var3 = var12.useState;
            var1 = new Array(0);
            var1 = var3.bind(var12)(var1);
            var8 = _closure1_slot3;
            var3 = 2;
            var1 = var8.bind(var5)(var1, var3);
            var4 = 0;
            var18 = var1[var4];
            var _closure2_slot2 = var18;
            var14 = 1;
            var1 = var1[var14];
            var _closure2_slot3 = var1;
            var11 = var12.useState;
            var1 = false;
            var1 = var11.bind(var12)(var1);
            var3 = var8.bind(var5)(var1, var3);
            var1 = var3[var4];
            var _closure2_slot4 = var1;
            var3 = var3[var14];
            var _closure2_slot5 = var3;
            var11 = _closure1_slot9;
            var8 = var11.useState;
            var3 = function(arg1) {
                var2 = arg1;
                var1 = var2.isTextInputValueEmpty;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var8.bind(var11)(var10, var3);
            var _closure2_slot6 = var3;
            var8 = 12;
            var8 = var9[var8];
            var13 = var7.bind(var5)(var8);
            var11 = var13.useFullscreenPlaceholderCount;
            var8 = {};
            var15 = _closure1_slot12;
            var8['placeholderHeight'] = var15;
            var8['numColumns'] = var14;
            var13 = var11.bind(var13)(var8);
            var _closure2_slot7 = var13;
            var14 = var12.useCallback;
            var11 = new Array(1);
            var11[0] = var10;
            var8 = function() {
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 13;
                var4 = var5[var2];
                var1 = undefined;
                var7 = var3.bind(var1)(var4);
                var6 = var7.syncAutocomplete;
                var4 = _closure2_slot0;
                var6 = var6.bind(var7)(var4);
                var2 = var5[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.fetchInitialMessages;
                var2 = var2.bind(var3)(var4);
                return var1;
            };
            var8 = var14.bind(var12)(var8, var11);
            var _closure2_slot8 = var8;
            var15 = var12.useCallback;
            var14 = new Array(2);
            var14[0] = var8;
            var14[1] = var10;
            var11 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = arg1;
                    var _closure3_slot0 = var1;
                    var7 = _closure1_slot9;
                    var6 = var7.getState;
                    var5 = _closure2_slot0;
                    var4 = function(arg1) {
                        var2 = arg1;
                        var1 = var2.getPrefixTag;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var6 = var6.bind(var7)(var5, var4);
                    var4 = null;
                    if(!(var4 != var6)) { _fun0002_ip = 143; continue _fun0002 }
 48:
                    var5 = _closure1_slot9;
                    var4 = var5.setState;
                    var7 = _closure2_slot0;
                    var3 = function(arg1) {
                        var3 = arg1;
                        var2 = var3.setTextInputValue;
                        var1 = '';
                        var1 = var2.bind(var3)(var1);
                        var2 = var3.addTag;
                        var1 = {};
                        var4 = _closure1_slot11;
                        var4 = var4.ANSWER;
                        var1['type'] = var4;
                        var4 = _closure3_slot0;
                        var1['text'] = var4;
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    };
                    var3 = var4.bind(var5)(var7, var3);
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 14;
                    var3 = var3[var2];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.trackSearchFilterAdd;
                    var3 = {};
                    var3['searchContext'] = var7;
                    var7 = var6.searchTokenType;
                    var3['searchTokenType'] = var7;
                    var6 = var6.location;
                    var3['location'] = var6;
                    var3 = var4.bind(var5)(var3);
                    var1 = _closure2_slot8;
                    var1 = var1.bind(var2)();
 143:
                    var1 = undefined;
                    return var1;
                }
            };
            var15 = var15.bind(var12)(var11, var14);
            var _closure2_slot9 = var15;
            var16 = var12.useCallback;
            var14 = new Array(2);
            var14[0] = var8;
            var14[1] = var10;
            var11 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var5 = _closure1_slot8;
                    var4 = var5.getUser;
                    var1 = arg1;
                    var1 = var4.bind(var5)(var1);
                    var _closure3_slot0 = var1;
                    var4 = null;
                    if(!(var4 != var1)) { _fun0003_ip = 165; continue _fun0003 }
 36:
                    var8 = _closure1_slot9;
                    var7 = var8.getState;
                    var6 = _closure2_slot0;
                    var5 = function(arg1) {
                        var2 = arg1;
                        var1 = var2.getPrefixTag;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var6 = var7.bind(var8)(var6, var5);
                    if(!(var4 != var6)) { _fun0003_ip = 165; continue _fun0003 }
 70:
                    var5 = _closure1_slot9;
                    var4 = var5.setState;
                    var7 = _closure2_slot0;
                    var3 = function(arg1) {
                        var4 = arg1;
                        var2 = var4.setTextInputValue;
                        var1 = '';
                        var1 = var2.bind(var4)(var1);
                        var3 = var4.addTag;
                        var2 = {};
                        var5 = _closure1_slot11;
                        var5 = var5.ANSWER;
                        var2['type'] = var5;
                        var6 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var1 = 15;
                        var5 = var5[var1];
                        var1 = undefined;
                        var7 = var6.bind(var1)(var5);
                        var6 = var7.getUserTag;
                        var5 = _closure3_slot0;
                        var6 = var6.bind(var7)(var5);
                        var2['text'] = var6;
                        var5 = var5.id;
                        var2['userId'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var3 = var4.bind(var5)(var7, var3);
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 14;
                    var3 = var3[var2];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.trackSearchFilterAdd;
                    var3 = {};
                    var3['searchContext'] = var7;
                    var7 = var6.searchTokenType;
                    var3['searchTokenType'] = var7;
                    var6 = var6.location;
                    var3['location'] = var6;
                    var3 = var4.bind(var5)(var3);
                    var1 = _closure2_slot8;
                    var1 = var1.bind(var2)();
 165:
                    var1 = undefined;
                    return var1;
                }
            };
            var14 = var16.bind(var12)(var11, var14);
            var _closure2_slot10 = var14;
            var16 = var12.useCallback;
            var11 = new Array(2);
            var11[0] = var8;
            var11[1] = var10;
            var8 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var5 = arg1;
                    var _closure3_slot0 = var5;
                    var4 = _closure1_slot5;
                    var1 = var4.getChannel;
                    var1 = var1.bind(var4)(var5);
                    var _closure3_slot1 = var1;
                    var4 = null;
                    if(!(var4 != var1)) { _fun0004_ip = 168; continue _fun0004 }
 39:
                    var8 = _closure1_slot9;
                    var7 = var8.getState;
                    var6 = _closure2_slot0;
                    var5 = function(arg1) {
                        var2 = arg1;
                        var1 = var2.getPrefixTag;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var6 = var7.bind(var8)(var6, var5);
                    if(!(var4 != var6)) { _fun0004_ip = 168; continue _fun0004 }
 73:
                    var5 = _closure1_slot9;
                    var4 = var5.setState;
                    var7 = _closure2_slot0;
                    var3 = function(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                            var3 = arg1;
                            var2 = var3.setTextInputValue;
                            var1 = '';
                            var1 = var2.bind(var3)(var1);
                            var2 = var3.addTag;
                            var1 = {};
                            var4 = _closure1_slot11;
                            var4 = var4.ANSWER;
                            var1['type'] = var4;
                            var5 = _closure3_slot1;
                            var7 = var5.name;
                            var6 = var7.includes;
                            var5 = ' ';
                            var5 = var6.bind(var7)(var5);
                            var6 = _closure3_slot1;
                            var8 = var6.name;
                            if(var5) { _fun0005_ip = 86; continue _fun0005 }
 81:
                            var5 = var8;
                            _fun0005_ip = 109; continue _fun0005;
 86:
                            var6 = global;
                            var6 = var6.HermesInternal;
                            var7 = var6.concat;
                            var6 = '"';
                            var5 = var7.bind(var6)(var8, var6);
 109:
                            var1['text'] = var5;
                            var4 = _closure3_slot0;
                            var1['channelId'] = var4;
                            var1 = var2.bind(var3)(var1);
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var3 = var4.bind(var5)(var7, var3);
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 14;
                    var3 = var3[var2];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.trackSearchFilterAdd;
                    var3 = {};
                    var3['searchContext'] = var7;
                    var7 = var6.searchTokenType;
                    var3['searchTokenType'] = var7;
                    var6 = var6.location;
                    var3['location'] = var6;
                    var3 = var4.bind(var5)(var3);
                    var1 = _closure2_slot8;
                    var1 = var1.bind(var2)();
 168:
                    var1 = undefined;
                    return var1;
                }
            };
            var16 = var16.bind(var12)(var8, var11);
            var _closure2_slot11 = var16;
            var19 = var12.useEffect;
            var11 = new Array(4);
            var11[0] = var10;
            var11[1] = var16;
            var11[2] = var15;
            var11[3] = var14;
            var8 = function() {
                var5 = _closure1_slot9;
                var4 = var5.subscribeTextInputValue;
                var3 = _closure2_slot0;
                var2 = {};
                var1 = true;
                var2['fireImmediately'] = var1;
                var1 = function(arg1, arg2) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                        var12 = arg1;
                        var1 = arg2;
                        if(!(var12 !== var1)) { _fun0006_ip = 28; continue _fun0006 }
 12:
                        var3 = _closure2_slot5;
                        var2 = undefined;
                        var1 = true;
                        var1 = var3.bind(var2)(var1);
 28:
                        var3 = new Array(0);
                        var _closure4_slot0 = var3;
                        var6 = function addItem(arg1) {
                            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                                var3 = arg1;
                                var1 = null;
                                if(!(var1 != var3)) { _fun0007_ip = 26; continue _fun0007 }
 9:
                                var2 = _closure4_slot0;
                                var1 = var2.push;
                                var1 = var1.bind(var2)(var3);
 26:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var _closure4_slot1 = var6;
                        var1 = var12.trim;
                        var2 = var1.bind(var12)();
                        var1 = '';
                        if(!(var1 !== var2)) { _fun0006_ip = 290; continue _fun0006 }
 68:
                        var7 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var8 = 16;
                        var1 = var1[var8];
                        var2 = undefined;
                        var10 = var7.bind(var2)(var1);
                        var9 = var10.isUserFilterPrefixAutocomplete;
                        var7 = _closure2_slot0;
                        var7 = var9.bind(var10)(var7);
                        if(!var7) { _fun0006_ip = 178; continue _fun0006 }
 114:
                        var9 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var10 = var7[var8];
                        var11 = var9.bind(var2)(var10);
                        var10 = var11.getUserExactMatch;
                        var13 = _closure2_slot0;
                        var11 = var10.bind(var11)(var13, var12);
                        var7 = var7[var8];
                        var10 = var9.bind(var2)(var7);
                        var9 = var10.toSearchListUserItem;
                        var7 = _closure2_slot10;
                        var7 = var9.bind(var10)(var13, var11, var7);
                        var7 = var6.bind(var2)(var7);
 178:
                        var9 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var7 = var7[var8];
                        var10 = var9.bind(var2)(var7);
                        var9 = var10.isChannelFilterPrefixAutocomplete;
                        var7 = _closure2_slot0;
                        var7 = var9.bind(var10)(var7);
                        if(!var7) { _fun0006_ip = 276; continue _fun0006 }
 213:
                        var7 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var9 = var5[var8];
                        var11 = var7.bind(var2)(var9);
                        var10 = var11.getChannelExactMatch;
                        var9 = _closure2_slot0;
                        var9 = var10.bind(var11)(var9, var12);
                        var5 = var5[var8];
                        var8 = var7.bind(var2)(var5);
                        var7 = var8.toSearchListChannelItem;
                        var5 = _closure2_slot11;
                        var5 = var7.bind(var8)(var9, var5);
                        var5 = var6.bind(var2)(var5);
 276:
                        var1 = _closure2_slot3;
                        var1 = var1.bind(var2)(var3);
                        _fun0006_ip = 478; continue _fun0006;
 290:
                        var6 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var7 = 16;
                        var1 = var1[var7];
                        var2 = undefined;
                        var9 = var6.bind(var2)(var1);
                        var8 = var9.isUserFilterPrefixAutocomplete;
                        var6 = _closure2_slot0;
                        var6 = var8.bind(var9)(var6);
                        if(!var6) { _fun0006_ip = 385; continue _fun0006 }
 336:
                        var8 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var6 = var6[var7];
                        var9 = var8.bind(var2)(var6);
                        var8 = var9.getUserEmptyState;
                        var6 = _closure2_slot0;
                        var9 = var8.bind(var9)(var6);
                        var8 = var9.forEach;
                        var6 = function(arg1) {
                            var3 = _closure4_slot1;
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 16;
                            var1 = var2[var1];
                            var2 = undefined;
                            var7 = var4.bind(var2)(var1);
                            var6 = var7.toSearchListUserItem;
                            var5 = _closure2_slot0;
                            var4 = _closure2_slot10;
                            var1 = arg1;
                            var1 = var6.bind(var7)(var5, var1, var4);
                            var1 = var3.bind(var2)(var1);
                            return var1;
                        };
                        var6 = var8.bind(var9)(var6);
 385:
                        var8 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var6 = var6[var7];
                        var9 = var8.bind(var2)(var6);
                        var8 = var9.isChannelFilterPrefixAutocomplete;
                        var6 = _closure2_slot0;
                        var6 = var8.bind(var9)(var6);
                        if(!var6) { _fun0006_ip = 469; continue _fun0006 }
 420:
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var5 = var5[var7];
                        var7 = var6.bind(var2)(var5);
                        var6 = var7.getChannelEmptyState;
                        var5 = _closure2_slot0;
                        var6 = var6.bind(var7)(var5);
                        var5 = var6.forEach;
                        var4 = function(arg1) {
                            var3 = _closure4_slot1;
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 16;
                            var1 = var2[var1];
                            var2 = undefined;
                            var6 = var4.bind(var2)(var1);
                            var5 = var6.toSearchListChannelItem;
                            var4 = _closure2_slot11;
                            var1 = arg1;
                            var1 = var5.bind(var6)(var1, var4);
                            var1 = var3.bind(var2)(var1);
                            return var1;
                        };
                        var4 = var5.bind(var6)(var4);
 469:
                        var1 = _closure2_slot3;
                        var1 = var1.bind(var2)(var3);
 478:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = var4.bind(var5)(var3, var1, var2);
                return var1;
            };
            var8 = var19.bind(var12)(var8, var11);
            var19 = var12.useEffect;
            var11 = new Array(1);
            var11[0] = var17;
            var8 = function() {
                var3 = _closure2_slot5;
                var1 = undefined;
                var2 = false;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var8 = var19.bind(var12)(var8, var11);
            var11 = var12.useMemo;
            var8 = new Array(9);
            var8[0] = var18;
            var8[1] = var17;
            var8[2] = var16;
            var8[3] = var15;
            var8[4] = var14;
            var8[5] = var3;
            var8[6] = var1;
            var8[7] = var13;
            var8[8] = var10;
            var6 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var1 = new Array(0);
                    var _closure3_slot0 = var1;
                    var3 = _closure2_slot4;
                    if(var3) { _fun0008_ip = 266; continue _fun0008 }
 23:
                    var10 = global;
                    var13 = var10.Set;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var4 = 16;
                    var6 = var9[var4];
                    var5 = undefined;
                    var12 = var8.bind(var5)(var6);
                    var11 = var12.getSearchQueryUserIds;
                    var6 = _closure2_slot0;
                    var14 = var11.bind(var12)(var6);
                    var12 = var13.prototype;
                    var12 = Object.create(var12, {constructor: {value: var13}});
                    var15 = var12;
                    var11 = new var15[var13](var14, var13);
                    var11 = var11 instanceof Object ? var11 : var12;
                    var _closure3_slot1 = var11;
                    var12 = var10.Set;
                    var10 = var9[var4];
                    var11 = var8.bind(var5)(var10);
                    var10 = var11.getSearchQueryChannelIds;
                    var14 = var10.bind(var11)(var6);
                    var11 = var12.prototype;
                    var11 = Object.create(var11, {constructor: {value: var12}});
                    var15 = var11;
                    var10 = new var15[var12](var14, var13);
                    var10 = var10 instanceof Object ? var10 : var11;
                    var _closure3_slot2 = var10;
                    var10 = function maybeAddUserItem(arg1) {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                            var4 = arg1;
                            var3 = null;
                            var2 = var3 == var4;
                            var1 = undefined;
                            var6 = undefined;
                            if(var2) { _fun0009_ip = 31; continue _fun0009 }
 16:
                            var2 = var4.props;
                            var2 = var2.user;
                            var6 = var2.id;
 31:
                            var2 = var3 == var4;
                            if(var2) { _fun0009_ip = 42; continue _fun0009 }
 38:
                            var2 = var3 == var6;
 42:
                            if(var2) { _fun0009_ip = 62; continue _fun0009 }
 45:
                            var5 = _closure3_slot1;
                            var3 = var5.has;
                            var2 = var3.bind(var5)(var6);
 62:
                            if(var2) { _fun0009_ip = 83; continue _fun0009 }
 65:
                            var5 = _closure1_slot6;
                            var3 = var5.isBlockedOrIgnored;
                            var2 = var3.bind(var5)(var6);
 83:
                            if(var2) { _fun0009_ip = 117; continue _fun0009 }
 86:
                            var5 = _closure3_slot1;
                            var3 = var5.add;
                            var3 = var3.bind(var5)(var6);
                            var3 = _closure3_slot0;
                            var2 = var3.push;
                            var2 = var2.bind(var3)(var4);
 117:
                            return var1;
                        }
                    };
                    var _closure3_slot3 = var10;
                    var10 = function maybeAddChannelItem(arg1) {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                            var4 = arg1;
                            var3 = null;
                            var2 = var3 == var4;
                            var1 = undefined;
                            var6 = undefined;
                            if(var2) { _fun0010_ip = 31; continue _fun0010 }
 16:
                            var2 = var4.props;
                            var2 = var2.channel;
                            var6 = var2.id;
 31:
                            var2 = var3 == var4;
                            if(var2) { _fun0010_ip = 42; continue _fun0010 }
 38:
                            var2 = var3 == var6;
 42:
                            if(var2) { _fun0010_ip = 62; continue _fun0010 }
 45:
                            var5 = _closure3_slot2;
                            var3 = var5.has;
                            var2 = var3.bind(var5)(var6);
 62:
                            if(var2) { _fun0010_ip = 96; continue _fun0010 }
 65:
                            var5 = _closure3_slot2;
                            var3 = var5.add;
                            var3 = var3.bind(var5)(var6);
                            var3 = _closure3_slot0;
                            var2 = var3.push;
                            var2 = var2.bind(var3)(var4);
 96:
                            return var1;
                        }
                    };
                    var _closure3_slot4 = var10;
                    var4 = var9[var4];
                    var5 = var8.bind(var5)(var4);
                    var4 = var5.isHasFilterPrefixAutocomplete;
                    var5 = var4.bind(var5)(var6);
                    var _closure3_slot5 = var5;
                    var4 = _closure2_slot6;
                    if(!var4) { _fun0008_ip = 201; continue _fun0008 }
 198:
                    var4 = !var5;
 201:
                    if(var4) { _fun0008_ip = 225; continue _fun0008 }
 204:
                    var6 = _closure2_slot1;
                    var5 = var6.forEach;
                    var4 = function(arg1) {
                        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                            var3 = arg1;
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var1 = 11;
                            var4 = var4[var1];
                            var1 = undefined;
                            var5 = var5.bind(var1)(var4);
                            var4 = var5.isNonEmptyAutocompleteGroup;
                            var4 = var4.bind(var5)(var3);
                            if(!var4) { _fun0011_ip = 108; continue _fun0011 }
 42:
                            var5 = var3.group;
                            var4 = var3.results;
                            var3 = global;
                            var6 = var3.Object;
                            var3 = var6.values;
                            var2 = _closure1_slot13;
                            var3 = var3.bind(var6)(var2);
                            var2 = var3.includes;
                            var2 = var2.bind(var3)(var5);
                            if(!var2) { _fun0011_ip = 108; continue _fun0011 }
 89:
                            var3 = var4.forEach;
                            var2 = function(arg1) {
                                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                                    var1 = arg1;
                                    var13 = var1.user;
                                    var8 = var1.channel;
                                    var9 = var1.text;
                                    var4 = _closure1_slot0;
                                    var3 = _closure1_slot2;
                                    var10 = 16;
                                    var2 = var3[var10];
                                    var1 = undefined;
                                    var12 = var4.bind(var1)(var2);
                                    var11 = var12.toSearchListUserItem;
                                    var5 = _closure2_slot0;
                                    var2 = _closure2_slot10;
                                    var11 = var11.bind(var12)(var5, var13, var2);
                                    var5 = _closure3_slot3;
                                    var5 = var5.bind(var1)(var11);
                                    var3 = var3[var10];
                                    var5 = var4.bind(var1)(var3);
                                    var4 = var5.toSearchListChannelItem;
                                    var3 = _closure2_slot11;
                                    var4 = var4.bind(var5)(var8, var3);
                                    var3 = _closure3_slot4;
                                    var3 = var3.bind(var1)(var4);
                                    var3 = _closure3_slot5;
                                    if(!var3) { _fun0012_ip = 126; continue _fun0012 }
 120:
                                    var4 = null;
                                    var3 = var4 != var9;
 126:
                                    if(!var3) { _fun0012_ip = 209; continue _fun0012 }
 129:
                                    var4 = _closure3_slot0;
                                    var3 = var4.push;
                                    var2 = {};
                                    var5 = _closure1_slot10;
                                    var5 = var5.GENERIC;
                                    var2['type'] = var5;
                                    var5 = {};
                                    var5['text'] = var9;
                                    var8 = _closure1_slot0;
                                    var7 = _closure1_slot2;
                                    var7 = var7[var10];
                                    var8 = var8.bind(var1)(var7);
                                    var7 = var8.getSearchFilterHasIcon;
                                    var7 = var7.bind(var8)(var9);
                                    var5['icon'] = var7;
                                    var6 = _closure2_slot9;
                                    var5['onPress'] = var6;
                                    var2['props'] = var5;
                                    var2 = var3.bind(var4)(var2);
 209:
                                    return var1;
                                }
                            };
                            var2 = var3.bind(var4)(var2);
 108:
                            return var1;
                        }
                    };
                    var4 = var5.bind(var6)(var4);
 225:
                    var5 = _closure2_slot2;
                    var4 = var5.forEach;
                    var2 = function(arg1) {
                        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                            var3 = arg1;
                            var4 = var3.type;
                            var2 = _closure1_slot10;
                            var2 = var2.DM;
                            if(!(var4 !== var2)) { _fun0013_ip = 60; continue _fun0013 }
 25:
                            var2 = var3.type;
                            var1 = _closure1_slot10;
                            var1 = var1.GUILD_TEXT_CHANNEL;
                            if(!(var2 === var1)) { _fun0013_ip = 74; continue _fun0013 }
 44:
                            var2 = _closure3_slot4;
                            var1 = undefined;
                            var1 = var2.bind(var1)(var3);
                            _fun0013_ip = 74; continue _fun0013;
 60:
                            var2 = _closure3_slot3;
                            var1 = undefined;
                            var1 = var2.bind(var1)(var3);
 74:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2 = var4.bind(var5)(var2);
                    var5 = var1.length;
                    var4 = 0;
                    var2 = var1;
                    if(!(!(var5 > var4))) { _fun0008_ip = 264; continue _fun0008 }
 260:
                    var2 = _closure1_slot15;
 264:
                    return var2;
 266:
                    var2 = _closure2_slot7;
                    var6 = 0;
                    var2 = var6 < var2;
                    var4 = global;
                    var3 = 'message-placeholder-';
                    if(!var2) { _fun0008_ip = 347; continue _fun0008 }
 290:
                    var8 = var1.push;
                    var2 = {};
                    var9 = _closure1_slot10;
                    var9 = var9.MESSAGE_PLACEHOLDER;
                    var2['type'] = var9;
                    var9 = var4.HermesInternal;
                    var9 = var9.concat;
                    var9 = var9.bind(var3)(var6);
                    var2['key'] = var9;
                    var2 = var8.bind(var1)(var2);
                    var6 = var6 + 1;
                    var2 = _closure2_slot7;
                    if(var6 < var2) { _fun0008_ip = 290; continue _fun0008 }
 347:
                    return var1;
                }
            };
            var8 = var11.bind(var12)(var6, var8);
            var6 = 17;
            var6 = var9[var6];
            var9 = var7.bind(var5)(var6);
            var7 = var9.useMessageTabCountsErrorText;
            var6 = {};
            var6['searchContext'] = var10;
            var6 = var7.bind(var9)(var6);
            var7 = null;
            if(!(var7 == var6)) { _fun0001_ip = 811; continue _fun0001 }
 552:
            if(!var3) { _fun0001_ip = 567; continue _fun0001 }
 555:
            var7 = var8.length;
            if(!(var4 !== var7)) { _fun0001_ip = 720; continue _fun0001 }
 567:
            if(var3) { _fun0001_ip = 673; continue _fun0001 }
 570:
            var3 = var8.length;
            if(!(var4 === var3)) { _fun0001_ip = 673; continue _fun0001 }
 579:
            if(var1) { _fun0001_ip = 673; continue _fun0001 }
 582:
            var4 = _closure1_slot14;
            var3 = _closure1_slot1;
            var12 = _closure1_slot2;
            var1 = 18;
            var1 = var12[var1];
            var3 = var3.bind(var5)(var1);
            var1 = {};
            var11 = _closure1_slot0;
            var7 = 19;
            var9 = var12[var7];
            var9 = var11.bind(var5)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var7 = var12[var7];
            var7 = var11.bind(var5)(var7);
            var7 = var7.t;
            var7 = var7.Dr1vkp;
            var7 = var9.bind(var10)(var7);
            var1['text'] = var7;
            var1 = var4.bind(var5)(var3, var1);
            _fun0001_ip = 718; continue _fun0001;
 673:
            var7 = _closure1_slot14;
            var4 = _closure1_slot1;
            var9 = _closure1_slot2;
            var3 = 20;
            var3 = var9[var3];
            var4 = var4.bind(var5)(var3);
            var3 = {};
            var9 = _closure1_slot12;
            var3['estimatedItemSize'] = var9;
            var3['data'] = var8;
            var1 = var7.bind(var5)(var4, var3);
 718:
            _fun0001_ip = 809; continue _fun0001;
 720:
            var7 = _closure1_slot14;
            var4 = _closure1_slot1;
            var12 = _closure1_slot2;
            var3 = 18;
            var3 = var12[var3];
            var4 = var4.bind(var5)(var3);
            var3 = {};
            var11 = _closure1_slot0;
            var8 = 19;
            var9 = var12[var8];
            var9 = var11.bind(var5)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var5)(var8);
            var8 = var8.t;
            var8 = var8.E4HqQ0;
            var8 = var9.bind(var10)(var8);
            var3['text'] = var8;
            var1 = var7.bind(var5)(var4, var3);
 809:
            _fun0001_ip = 847; continue _fun0001;
 811:
            var4 = _closure1_slot14;
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 18;
            var2 = var7[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['text'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 847:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search_v2/native/components/layout/autocomplete/AutocompleteScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();