// app/modules/search/native/components/layout/autocomplete/AutocompleteScreen.tsx
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
            var3 = _closure1_slot8;
            var8 = new Array(1);
            var8[0] = var3;
            var4 = new Array(1);
            var4[0] = var10;
            var1 = var9[var1];
            var1 = var7.bind(var5)(var1);
            var21 = var1.statesWillNeverBeEqual;
            var23 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getState;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                var1 = var1.autocompletes;
                return var1;
            };
            var25 = var12;
            var24 = var8;
            var22 = var4;
            var16 = var25[var11](var24, var23, var22, var21, var20);
            var _closure2_slot1 = var16;
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
            var13 = _closure1_slot9;
            var8 = var13.useState;
            var3 = function(arg1) {
                var2 = arg1;
                var1 = var2.isTextInputValueEmpty;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var8.bind(var13)(var10, var3);
            var _closure2_slot6 = var3;
            var11 = var13.useState;
            var8 = function(arg1) {
                var2 = arg1;
                var1 = var2.getPrefixTag;
                var1 = var1.bind(var2)();
                return var1;
            };
            var19 = var11.bind(var13)(var10, var8);
            var _closure2_slot7 = var19;
            var8 = 11;
            var8 = var9[var8];
            var13 = var7.bind(var5)(var8);
            var11 = var13.useFullscreenPlaceholderCount;
            var8 = {};
            var15 = _closure1_slot12;
            var8['placeholderHeight'] = var15;
            var8['numColumns'] = var14;
            var17 = var11.bind(var13)(var8);
            var _closure2_slot8 = var17;
            var13 = var12.useCallback;
            var11 = new Array(1);
            var11[0] = var10;
            var8 = function() {
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 12;
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
            var8 = var13.bind(var12)(var8, var11);
            var _closure2_slot9 = var8;
            var14 = var12.useCallback;
            var13 = new Array(2);
            var13[0] = var8;
            var13[1] = var10;
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
                    var2 = 13;
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
                    var1 = _closure2_slot9;
                    var1 = var1.bind(var2)();
 143:
                    var1 = undefined;
                    return var1;
                }
            };
            var13 = var14.bind(var12)(var11, var13);
            var _closure2_slot10 = var13;
            var15 = var12.useCallback;
            var14 = new Array(2);
            var14[0] = var8;
            var14[1] = var10;
            var11 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var5 = _closure1_slot7;
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
                        var1 = 14;
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
                    var2 = 13;
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
                    var1 = _closure2_slot9;
                    var1 = var1.bind(var2)();
 165:
                    var1 = undefined;
                    return var1;
                }
            };
            var15 = var15.bind(var12)(var11, var14);
            var _closure2_slot11 = var15;
            var14 = var12.useCallback;
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
                    var2 = 13;
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
                    var1 = _closure2_slot9;
                    var1 = var1.bind(var2)();
 168:
                    var1 = undefined;
                    return var1;
                }
            };
            var14 = var14.bind(var12)(var8, var11);
            var _closure2_slot12 = var14;
            var20 = var12.useEffect;
            var11 = new Array(4);
            var11[0] = var10;
            var11[1] = var14;
            var11[2] = var13;
            var11[3] = var15;
            var8 = function() {
                var6 = _closure1_slot9;
                var5 = var6.subscribeState;
                var10 = _closure2_slot0;
                var3 = {};
                var2 = true;
                var3['fireImmediately'] = var2;
                var9 = function(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                        var3 = arg1;
                        var1 = {};
                        var2 = var3.getTextInputValue;
                        var2 = var2.bind(var3)();
                        var1['textInputValue'] = var2;
                        var2 = var3.getPrefixTag;
                        var3 = var2.bind(var3)();
                        var2 = null;
                        var4 = var2 != var3;
                        if(!var4) { _fun0006_ip = 42; continue _fun0006 }
 39:
                        var2 = var3;
 42:
                        var1['prefixTag'] = var2;
                        return var1;
                    }
                };
                var8 = function(arg1, arg2) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                        var2 = arg1;
                        var5 = arg2;
                        var4 = null;
                        if(!(var4 != var2)) { _fun0007_ip = 531; continue _fun0007 }
 17:
                        var13 = var2.textInputValue;
                        var8 = var2.prefixTag;
                        var6 = var4 == var5;
                        var3 = undefined;
                        var2 = undefined;
                        if(var6) { _fun0007_ip = 46; continue _fun0007 }
 40:
                        var2 = var5.textInputValue;
 46:
                        var6 = var4 == var5;
                        var4 = undefined;
                        if(var6) { _fun0007_ip = 61; continue _fun0007 }
 55:
                        var4 = var5.prefixTag;
 61:
                        var2 = var13 === var2;
                        if(!var2) { _fun0007_ip = 72; continue _fun0007 }
 68:
                        var2 = var8 === var4;
 72:
                        if(var2) { _fun0007_ip = 89; continue _fun0007 }
 75:
                        var4 = _closure2_slot5;
                        var2 = true;
                        var2 = var4.bind(var3)(var2);
 89:
                        var2 = new Array(0);
                        var _closure4_slot0 = var2;
                        var5 = function addItem(arg1) {
                            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                                var3 = arg1;
                                var1 = null;
                                if(!(var1 != var3)) { _fun0008_ip = 26; continue _fun0008 }
 9:
                                var2 = _closure4_slot0;
                                var1 = var2.push;
                                var1 = var1.bind(var2)(var3);
 26:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var _closure4_slot1 = var5;
                        var4 = var13.trim;
                        var6 = var4.bind(var13)();
                        var4 = '';
                        if(!(var4 !== var6)) { _fun0007_ip = 347; continue _fun0007 }
 129:
                        var7 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var10 = 15;
                        var6 = var6[var10];
                        var7 = var7.bind(var3)(var6);
                        var6 = var7.isUserFilterPrefixAutocomplete;
                        var6 = var6.bind(var7)(var8);
                        if(!var6) { _fun0007_ip = 233; continue _fun0007 }
 166:
                        var9 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var6 = var7[var10];
                        var14 = var9.bind(var3)(var6);
                        var11 = var14.getUserExactMatch;
                        var12 = _closure2_slot0;
                        var11 = var11.bind(var14)(var12, var13);
                        var7 = var7[var10];
                        var9 = var9.bind(var3)(var7);
                        var7 = var9.toSearchListUserItem;
                        var6 = _closure2_slot11;
                        var6 = var7.bind(var9)(var12, var11, var6);
                        var6 = var5.bind(var3)(var6);
 233:
                        var7 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var6 = var6[var10];
                        var7 = var7.bind(var3)(var6);
                        var6 = var7.isChannelFilterPrefixAutocomplete;
                        var6 = var6.bind(var7)(var8);
                        if(!var6) { _fun0007_ip = 330; continue _fun0007 }
 264:
                        var7 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var4 = var6[var10];
                        var12 = var7.bind(var3)(var4);
                        var11 = var12.getChannelExactMatch;
                        var9 = _closure2_slot0;
                        var9 = var11.bind(var12)(var9, var13);
                        var6 = var6[var10];
                        var7 = var7.bind(var3)(var6);
                        var6 = var7.toSearchListChannelItem;
                        var4 = _closure2_slot12;
                        var4 = var6.bind(var7)(var9, var4);
                        var4 = var5.bind(var3)(var4);
 330:
                        var4 = _closure2_slot3;
                        var4 = var4.bind(var3)(var2);
                        _fun0007_ip = 531; continue _fun0007;
 347:
                        var7 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var6 = 15;
                        var5 = var5[var6];
                        var7 = var7.bind(var3)(var5);
                        var5 = var7.isUserFilterPrefixAutocomplete;
                        var5 = var5.bind(var7)(var8);
                        if(!var5) { _fun0007_ip = 436; continue _fun0007 }
 384:
                        var7 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var5 = var5[var6];
                        var9 = var7.bind(var3)(var5);
                        var7 = var9.getUserEmptyState;
                        var5 = _closure2_slot0;
                        var9 = var7.bind(var9)(var5);
                        var7 = var9.forEach;
                        var5 = function(arg1) {
                            var3 = _closure4_slot1;
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 15;
                            var1 = var2[var1];
                            var2 = undefined;
                            var7 = var4.bind(var2)(var1);
                            var6 = var7.toSearchListUserItem;
                            var5 = _closure2_slot0;
                            var4 = _closure2_slot11;
                            var1 = arg1;
                            var1 = var6.bind(var7)(var5, var1, var4);
                            var1 = var3.bind(var2)(var1);
                            return var1;
                        };
                        var5 = var7.bind(var9)(var5);
 436:
                        var7 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var5 = var5[var6];
                        var7 = var7.bind(var3)(var5);
                        var5 = var7.isChannelFilterPrefixAutocomplete;
                        var5 = var5.bind(var7)(var8);
                        if(!var5) { _fun0007_ip = 519; continue _fun0007 }
 467:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var4 = var4[var6];
                        var6 = var5.bind(var3)(var4);
                        var5 = var6.getChannelEmptyState;
                        var4 = _closure2_slot0;
                        var5 = var5.bind(var6)(var4);
                        var4 = var5.forEach;
                        var1 = function(arg1) {
                            var3 = _closure4_slot1;
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 15;
                            var1 = var2[var1];
                            var2 = undefined;
                            var6 = var4.bind(var2)(var1);
                            var5 = var6.toSearchListChannelItem;
                            var4 = _closure2_slot12;
                            var1 = arg1;
                            var1 = var5.bind(var6)(var1, var4);
                            var1 = var3.bind(var2)(var1);
                            return var1;
                        };
                        var1 = var4.bind(var5)(var1);
 519:
                        var1 = _closure2_slot3;
                        var1 = var1.bind(var3)(var2);
 531:
                        var1 = undefined;
                        return var1;
                    }
                };
                var11 = var6;
                var7 = var3;
                var1 = var11[var5](var10, var9, var8, var7, var6);
                return var1;
            };
            var8 = var20.bind(var12)(var8, var11);
            var20 = var12.useEffect;
            var11 = new Array(1);
            var11[0] = var16;
            var8 = function() {
                var3 = _closure2_slot5;
                var1 = undefined;
                var2 = false;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var8 = var20.bind(var12)(var8, var11);
            var11 = var12.useMemo;
            var8 = new Array(10);
            var8[0] = var1;
            var8[1] = var10;
            var8[2] = var19;
            var8[3] = var3;
            var8[4] = var18;
            var8[5] = var17;
            var8[6] = var16;
            var8[7] = var15;
            var8[8] = var14;
            var8[9] = var13;
            var6 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var1 = new Array(0);
                    var _closure3_slot0 = var1;
                    var3 = _closure2_slot4;
                    if(var3) { _fun0009_ip = 270; continue _fun0009 }
 23:
                    var9 = global;
                    var13 = var9.Set;
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 15;
                    var10 = var8[var4];
                    var5 = undefined;
                    var11 = var6.bind(var5)(var10);
                    var10 = var11.getSearchQueryUserIds;
                    var12 = _closure2_slot0;
                    var14 = var10.bind(var11)(var12);
                    var11 = var13.prototype;
                    var11 = Object.create(var11, {constructor: {value: var13}});
                    var15 = var11;
                    var10 = new var15[var13](var14, var13);
                    var10 = var10 instanceof Object ? var10 : var11;
                    var _closure3_slot1 = var10;
                    var11 = var9.Set;
                    var9 = var8[var4];
                    var10 = var6.bind(var5)(var9);
                    var9 = var10.getSearchQueryChannelIds;
                    var14 = var9.bind(var10)(var12);
                    var10 = var11.prototype;
                    var10 = Object.create(var10, {constructor: {value: var11}});
                    var15 = var10;
                    var9 = new var15[var11](var14, var13);
                    var9 = var9 instanceof Object ? var9 : var10;
                    var _closure3_slot2 = var9;
                    var9 = function maybeAddUserItem(arg1) {
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
                            var2 = var2.user;
                            var6 = var2.id;
 31:
                            var2 = var3 == var4;
                            if(var2) { _fun0010_ip = 42; continue _fun0010 }
 38:
                            var2 = var3 == var6;
 42:
                            if(var2) { _fun0010_ip = 62; continue _fun0010 }
 45:
                            var5 = _closure3_slot1;
                            var3 = var5.has;
                            var2 = var3.bind(var5)(var6);
 62:
                            if(var2) { _fun0010_ip = 83; continue _fun0010 }
 65:
                            var5 = _closure1_slot6;
                            var3 = var5.isBlockedOrIgnored;
                            var2 = var3.bind(var5)(var6);
 83:
                            if(var2) { _fun0010_ip = 117; continue _fun0010 }
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
                    var _closure3_slot3 = var9;
                    var9 = function maybeAddChannelItem(arg1) {
                        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                            var4 = arg1;
                            var3 = null;
                            var2 = var3 == var4;
                            var1 = undefined;
                            var6 = undefined;
                            if(var2) { _fun0011_ip = 31; continue _fun0011 }
 16:
                            var2 = var4.props;
                            var2 = var2.channel;
                            var6 = var2.id;
 31:
                            var2 = var3 == var4;
                            if(var2) { _fun0011_ip = 42; continue _fun0011 }
 38:
                            var2 = var3 == var6;
 42:
                            if(var2) { _fun0011_ip = 62; continue _fun0011 }
 45:
                            var5 = _closure3_slot2;
                            var3 = var5.has;
                            var2 = var3.bind(var5)(var6);
 62:
                            if(var2) { _fun0011_ip = 96; continue _fun0011 }
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
                    var _closure3_slot4 = var9;
                    var4 = var8[var4];
                    var6 = var6.bind(var5)(var4);
                    var5 = var6.isHasFilterPrefixAutocomplete;
                    var4 = _closure2_slot7;
                    var5 = var5.bind(var6)(var4);
                    var _closure3_slot5 = var5;
                    var4 = _closure2_slot6;
                    if(!var4) { _fun0009_ip = 205; continue _fun0009 }
 202:
                    var4 = !var5;
 205:
                    if(var4) { _fun0009_ip = 229; continue _fun0009 }
 208:
                    var6 = _closure2_slot1;
                    var5 = var6.forEach;
                    var4 = function(arg1) {
                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                            var3 = arg1;
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var1 = 16;
                            var4 = var4[var1];
                            var1 = undefined;
                            var5 = var5.bind(var1)(var4);
                            var4 = var5.isNonEmptyAutocompleteGroup;
                            var4 = var4.bind(var5)(var3);
                            if(!var4) { _fun0012_ip = 108; continue _fun0012 }
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
                            if(!var2) { _fun0012_ip = 108; continue _fun0012 }
 89:
                            var3 = var4.forEach;
                            var2 = function(arg1) {
                                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                                    var1 = arg1;
                                    var13 = var1.user;
                                    var8 = var1.channel;
                                    var9 = var1.text;
                                    var4 = _closure1_slot0;
                                    var3 = _closure1_slot2;
                                    var10 = 15;
                                    var2 = var3[var10];
                                    var1 = undefined;
                                    var12 = var4.bind(var1)(var2);
                                    var11 = var12.toSearchListUserItem;
                                    var5 = _closure2_slot0;
                                    var2 = _closure2_slot11;
                                    var11 = var11.bind(var12)(var5, var13, var2);
                                    var5 = _closure3_slot3;
                                    var5 = var5.bind(var1)(var11);
                                    var3 = var3[var10];
                                    var5 = var4.bind(var1)(var3);
                                    var4 = var5.toSearchListChannelItem;
                                    var3 = _closure2_slot12;
                                    var4 = var4.bind(var5)(var8, var3);
                                    var3 = _closure3_slot4;
                                    var3 = var3.bind(var1)(var4);
                                    var3 = _closure3_slot5;
                                    if(!var3) { _fun0013_ip = 126; continue _fun0013 }
 120:
                                    var4 = null;
                                    var3 = var4 != var9;
 126:
                                    if(!var3) { _fun0013_ip = 209; continue _fun0013 }
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
                                    var6 = _closure2_slot10;
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
 229:
                    var5 = _closure2_slot2;
                    var4 = var5.forEach;
                    var2 = function(arg1) {
                        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                            var3 = arg1;
                            var4 = var3.type;
                            var2 = _closure1_slot10;
                            var2 = var2.DM;
                            if(!(var4 !== var2)) { _fun0014_ip = 60; continue _fun0014 }
 25:
                            var2 = var3.type;
                            var1 = _closure1_slot10;
                            var1 = var1.GUILD_TEXT_CHANNEL;
                            if(!(var2 === var1)) { _fun0014_ip = 74; continue _fun0014 }
 44:
                            var2 = _closure3_slot4;
                            var1 = undefined;
                            var1 = var2.bind(var1)(var3);
                            _fun0014_ip = 74; continue _fun0014;
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
                    if(!(!(var5 > var4))) { _fun0009_ip = 268; continue _fun0009 }
 264:
                    var2 = _closure1_slot15;
 268:
                    return var2;
 270:
                    var2 = _closure2_slot8;
                    var6 = 0;
                    var2 = var6 < var2;
                    var4 = global;
                    var3 = 'message-placeholder-';
                    if(!var2) { _fun0009_ip = 351; continue _fun0009 }
 294:
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
                    var2 = _closure2_slot8;
                    if(var6 < var2) { _fun0009_ip = 294; continue _fun0009 }
 351:
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
            if(!(var7 == var6)) { _fun0001_ip = 837; continue _fun0001 }
 578:
            if(!var3) { _fun0001_ip = 593; continue _fun0001 }
 581:
            var7 = var8.length;
            if(!(var4 !== var7)) { _fun0001_ip = 746; continue _fun0001 }
 593:
            if(var3) { _fun0001_ip = 699; continue _fun0001 }
 596:
            var3 = var8.length;
            if(!(var4 === var3)) { _fun0001_ip = 699; continue _fun0001 }
 605:
            if(var1) { _fun0001_ip = 699; continue _fun0001 }
 608:
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
            _fun0001_ip = 744; continue _fun0001;
 699:
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
 744:
            _fun0001_ip = 835; continue _fun0001;
 746:
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
 835:
            _fun0001_ip = 873; continue _fun0001;
 837:
            var4 = _closure1_slot14;
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 18;
            var2 = var7[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['text'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 873:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search/native/components/layout/autocomplete/AutocompleteScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();