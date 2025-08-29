// app/modules/search/native/components/layout/autocomplete/AutocompleteScreen.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
    var4 = metroImportAll;
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
    var8 = var4.SearchPopoutModes;
    var _closure1_slot13 = var8;
    var4 = var4.SearchTokenTypes;
    var _closure1_slot14 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot15 = var4;
    var4 = new Array(0);
    var _closure1_slot16 = var4;
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
            var19 = var1.statesWillNeverBeEqual;
            var21 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getState;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var23 = var12;
            var22 = var8;
            var20 = var4;
            var16 = var23[var11](var22, var21, var20, var19, var18);
            var _closure2_slot1 = var16;
            var12 = _closure1_slot4;
            var3 = var12.useState;
            var1 = false;
            var4 = var3.bind(var12)(var1);
            var3 = _closure1_slot3;
            var1 = 2;
            var3 = var3.bind(var5)(var4, var1);
            var4 = 0;
            var1 = var3[var4];
            var _closure2_slot2 = var1;
            var14 = 1;
            var3 = var3[var14];
            var _closure2_slot3 = var3;
            var11 = _closure1_slot9;
            var8 = var11.useState;
            var3 = function(arg1) {
                var2 = arg1;
                var1 = var2.isTextInputValueEmpty;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var8.bind(var11)(var10, var3);
            var8 = 11;
            var8 = var9[var8];
            var13 = var7.bind(var5)(var8);
            var11 = var13.useFullscreenPlaceholderCount;
            var8 = {};
            var15 = _closure1_slot12;
            var8['placeholderHeight'] = var15;
            var8['numColumns'] = var14;
            var17 = var11.bind(var13)(var8);
            var _closure2_slot4 = var17;
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
            var _closure2_slot5 = var8;
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
                    var1 = _closure2_slot5;
                    var1 = var1.bind(var2)();
 143:
                    var1 = undefined;
                    return var1;
                }
            };
            var13 = var14.bind(var12)(var11, var13);
            var _closure2_slot6 = var13;
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
                    var1 = _closure2_slot5;
                    var1 = var1.bind(var2)();
 165:
                    var1 = undefined;
                    return var1;
                }
            };
            var15 = var15.bind(var12)(var11, var14);
            var _closure2_slot7 = var15;
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
                    var9 = var1.bind(var4)(var5);
                    var4 = null;
                    if(!(var4 != var9)) { _fun0004_ip = 321; continue _fun0004 }
 35:
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
                    if(!(var4 != var6)) { _fun0004_ip = 321; continue _fun0004 }
 72:
                    var5 = var9.name;
                    var _closure3_slot1 = var5;
                    var5 = var9.isGroupDM;
                    var5 = var5.bind(var9)();
                    if(var5) { _fun0004_ip = 179; continue _fun0004 }
 94:
                    var5 = var9.isDM;
                    var5 = var5.bind(var9)();
                    if(!var5) { _fun0004_ip = 226; continue _fun0004 }
 107:
                    var5 = var9.getRecipientId;
                    var8 = var5.bind(var9)();
                    var7 = _closure1_slot7;
                    var5 = var7.getUser;
                    var7 = var5.bind(var7)(var8);
                    if(!(var4 != var7)) { _fun0004_ip = 175; continue _fun0004 }
 136:
                    var8 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var4 = 14;
                    var5 = var5[var4];
                    var4 = undefined;
                    var5 = var8.bind(var4)(var5);
                    var4 = var5.getUserTag;
                    var4 = var4.bind(var5)(var7);
                    _closure3_slot1 = var4;
                    _fun0004_ip = 226; continue _fun0004;
 175:
                    var4 = undefined;
                    return var4;
 179:
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 15;
                    var5 = var5[var4];
                    var4 = undefined;
                    var8 = var7.bind(var4)(var5);
                    var7 = var8.computeChannelName;
                    var5 = _closure1_slot7;
                    var4 = _closure1_slot6;
                    var4 = var7.bind(var8)(var9, var5, var4);
                    _closure3_slot1 = var4;
 226:
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
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 16;
                        var5 = var5[var1];
                        var1 = undefined;
                        var8 = var6.bind(var1)(var5);
                        var7 = var8.quoteChannelName;
                        var6 = _closure3_slot1;
                        var6 = var7.bind(var8)(var6);
                        var2['text'] = var6;
                        var5 = _closure3_slot0;
                        var2['channelId'] = var5;
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
                    var1 = _closure2_slot5;
                    var1 = var1.bind(var2)();
 321:
                    var1 = undefined;
                    return var1;
                }
            };
            var14 = var14.bind(var12)(var8, var11);
            var _closure2_slot8 = var14;
            var18 = var12.useEffect;
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
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var3 = arg1;
                        var1 = {};
                        var2 = var3.isAutocompleteVisible;
                        var2 = var2.bind(var3)();
                        var1['isAutocompleteVisible'] = var2;
                        var2 = var3.getTextInputValue;
                        var2 = var2.bind(var3)();
                        var1['textInputValue'] = var2;
                        var2 = var3.getPrefixTag;
                        var3 = var2.bind(var3)();
                        var2 = null;
                        var4 = var2 != var3;
                        if(!var4) { _fun0005_ip = 57; continue _fun0005 }
 54:
                        var2 = var3;
 57:
                        var1['prefixTag'] = var2;
                        return var1;
                    }
                };
                var8 = function(arg1, arg2) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                        var1 = arg1;
                        var7 = arg2;
                        var2 = null;
                        if(!(var2 != var1)) { _fun0006_ip = 93; continue _fun0006 }
 12:
                        var5 = var1.textInputValue;
                        var4 = var1.prefixTag;
                        var6 = var1.isAutocompleteVisible;
                        var8 = var2 == var7;
                        var3 = undefined;
                        var1 = undefined;
                        if(var8) { _fun0006_ip = 47; continue _fun0006 }
 41:
                        var1 = var7.textInputValue;
 47:
                        var8 = var2 == var7;
                        var2 = undefined;
                        if(var8) { _fun0006_ip = 62; continue _fun0006 }
 56:
                        var2 = var7.prefixTag;
 62:
                        if(!var6) { _fun0006_ip = 93; continue _fun0006 }
 65:
                        var1 = var5 === var1;
                        if(!var1) { _fun0006_ip = 76; continue _fun0006 }
 72:
                        var1 = var4 === var2;
 76:
                        if(var1) { _fun0006_ip = 93; continue _fun0006 }
 79:
                        var2 = _closure2_slot3;
                        var1 = true;
                        var1 = var2.bind(var3)(var1);
 93:
                        var1 = undefined;
                        return var1;
                    }
                };
                var11 = var6;
                var7 = var3;
                var1 = var11[var5](var10, var9, var8, var7, var6);
                return var1;
            };
            var8 = var18.bind(var12)(var8, var11);
            var18 = var12.useEffect;
            var8 = var16.autocompletes;
            var11 = new Array(1);
            var11[0] = var8;
            var8 = function() {
                var3 = _closure2_slot3;
                var1 = undefined;
                var2 = false;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var8 = var18.bind(var12)(var8, var11);
            var11 = var12.useMemo;
            var8 = new Array(7);
            var8[0] = var1;
            var8[1] = var10;
            var8[2] = var17;
            var8[3] = var16;
            var8[4] = var15;
            var8[5] = var14;
            var8[6] = var13;
            var6 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var1 = new Array(0);
                    var _closure3_slot0 = var1;
                    var3 = _closure2_slot2;
                    if(var3) { _fun0007_ip = 593; continue _fun0007 }
 23:
                    var6 = global;
                    var12 = var6.Set;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var13 = 17;
                    var8 = var4[var13];
                    var10 = undefined;
                    var11 = var5.bind(var10)(var8);
                    var9 = var11.getSearchQueryUserIds;
                    var8 = _closure2_slot0;
                    var17 = var9.bind(var11)(var8);
                    var11 = var12.prototype;
                    var11 = Object.create(var11, {constructor: {value: var12}});
                    var18 = var11;
                    var9 = new var18[var12](var17, var16);
                    var9 = var9 instanceof Object ? var9 : var11;
                    var _closure3_slot1 = var9;
                    var6 = var6.Set;
                    var4 = var4[var13];
                    var5 = var5.bind(var10)(var4);
                    var4 = var5.getSearchQueryChannelIds;
                    var17 = var4.bind(var5)(var8);
                    var5 = var6.prototype;
                    var5 = Object.create(var5, {constructor: {value: var6}});
                    var18 = var5;
                    var4 = new var18[var6](var17, var16);
                    var4 = var4 instanceof Object ? var4 : var5;
                    var _closure3_slot2 = var4;
                    var11 = function maybeAddUserItem(arg1, arg2) {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                            var5 = arg1;
                            var3 = arg2;
                            var2 = null;
                            var1 = var2 == var3;
                            if(var1) { _fun0008_ip = 19; continue _fun0008 }
 15:
                            var1 = var2 == var5;
 19:
                            if(var1) { _fun0008_ip = 39; continue _fun0008 }
 22:
                            var4 = _closure3_slot1;
                            var2 = var4.has;
                            var1 = var2.bind(var4)(var5);
 39:
                            if(var1) { _fun0008_ip = 60; continue _fun0008 }
 42:
                            var4 = _closure1_slot6;
                            var2 = var4.isBlockedOrIgnored;
                            var1 = var2.bind(var4)(var5);
 60:
                            if(var1) { _fun0008_ip = 94; continue _fun0008 }
 63:
                            var4 = _closure3_slot1;
                            var2 = var4.add;
                            var2 = var2.bind(var4)(var5);
                            var2 = _closure3_slot0;
                            var1 = var2.push;
                            var1 = var1.bind(var2)(var3);
 94:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var _closure3_slot3 = var11;
                    var4 = function maybeAddChannelItem(arg1, arg2) {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                            var5 = arg1;
                            var3 = arg2;
                            var2 = null;
                            var1 = var2 == var3;
                            if(var1) { _fun0009_ip = 19; continue _fun0009 }
 15:
                            var1 = var2 == var5;
 19:
                            if(var1) { _fun0009_ip = 39; continue _fun0009 }
 22:
                            var4 = _closure3_slot2;
                            var2 = var4.has;
                            var1 = var2.bind(var4)(var5);
 39:
                            if(var1) { _fun0009_ip = 73; continue _fun0009 }
 42:
                            var4 = _closure3_slot2;
                            var2 = var4.add;
                            var2 = var2.bind(var4)(var5);
                            var2 = _closure3_slot0;
                            var1 = var2.push;
                            var1 = var1.bind(var2)(var3);
 73:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var _closure3_slot4 = var4;
                    var4 = _closure2_slot1;
                    var9 = var4.autocompletes;
                    var6 = var4.tokens;
                    var4 = var4.mode;
                    var _closure3_slot5 = var4;
                    var8 = var9.forEach;
                    var5 = function(arg1) {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                            var2 = arg1;
                            var3 = _closure3_slot5;
                            var4 = var3.type;
                            var3 = _closure1_slot13;
                            var3 = var3.FILTER;
                            if(!(var4 === var3)) { _fun0010_ip = 78; continue _fun0010 }
 34:
                            var3 = var2.results;
                            var2 = var2.group;
                            var _closure4_slot0 = var2;
                            var4 = var3.length;
                            var2 = 0;
                            if(!(var2 !== var4)) { _fun0010_ip = 78; continue _fun0010 }
 61:
                            var2 = var3.forEach;
                            var1 = function(arg1) {
                                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                                    var1 = arg1;
                                    var12 = var1.user;
                                    var11 = var1.channel;
                                    var9 = var1.text;
                                    var3 = _closure1_slot0;
                                    var1 = _closure1_slot2;
                                    var10 = 17;
                                    var2 = var1[var10];
                                    var1 = undefined;
                                    var5 = var3.bind(var1)(var2);
                                    var4 = var5.toSearchListUserItem;
                                    var3 = _closure2_slot0;
                                    var2 = _closure2_slot7;
                                    var8 = var4.bind(var5)(var3, var12, var2);
                                    var5 = _closure3_slot3;
                                    var4 = null;
                                    var13 = var4 == var12;
                                    var3 = undefined;
                                    if(var13) { _fun0011_ip = 90; continue _fun0011 }
 85:
                                    var3 = var12.id;
 90:
                                    var3 = var5.bind(var1)(var3, var8);
                                    var5 = _closure1_slot0;
                                    var3 = _closure1_slot2;
                                    var3 = var3[var10];
                                    var8 = var5.bind(var1)(var3);
                                    var5 = var8.toSearchListChannelItem;
                                    var3 = _closure2_slot8;
                                    var8 = var5.bind(var8)(var11, var3);
                                    var5 = _closure3_slot4;
                                    var12 = var4 == var11;
                                    var3 = undefined;
                                    if(var12) { _fun0011_ip = 147; continue _fun0011 }
 142:
                                    var3 = var11.id;
 147:
                                    var3 = var5.bind(var1)(var3, var8);
                                    var8 = _closure4_slot0;
                                    var5 = _closure1_slot14;
                                    var5 = var5.FILTER_HAS;
                                    var5 = var8 === var5;
                                    if(!var5) { _fun0011_ip = 181; continue _fun0011 }
 177:
                                    var5 = var4 != var9;
 181:
                                    if(!var5) { _fun0011_ip = 264; continue _fun0011 }
 184:
                                    var11 = _closure3_slot0;
                                    var8 = var11.push;
                                    var5 = {};
                                    var12 = _closure1_slot10;
                                    var12 = var12.GENERIC;
                                    var5['type'] = var12;
                                    var12 = {};
                                    var12['text'] = var9;
                                    var14 = _closure1_slot0;
                                    var13 = _closure1_slot2;
                                    var13 = var13[var10];
                                    var14 = var14.bind(var1)(var13);
                                    var13 = var14.getSearchFilterHasIcon;
                                    var13 = var13.bind(var14)(var9);
                                    var12['icon'] = var13;
                                    var13 = _closure2_slot6;
                                    var12['onPress'] = var13;
                                    var5['props'] = var12;
                                    var5 = var8.bind(var11)(var5);
 264:
                                    var5 = _closure4_slot0;
                                    var3 = _closure1_slot14;
                                    var3 = var3.FILTER_AUTHOR_TYPE;
                                    var3 = var5 === var3;
                                    if(!var3) { _fun0011_ip = 289; continue _fun0011 }
 285:
                                    var3 = var4 != var9;
 289:
                                    if(!var3) { _fun0011_ip = 372; continue _fun0011 }
 292:
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
                                    var7 = var8.getSearchFilterAuthorTypeIcon;
                                    var7 = var7.bind(var8)(var9);
                                    var5['icon'] = var7;
                                    var6 = _closure2_slot6;
                                    var5['onPress'] = var6;
                                    var2['props'] = var5;
                                    var2 = var3.bind(var4)(var2);
 372:
                                    return var1;
                                }
                            };
                            var1 = var2.bind(var3)(var1);
 78:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var5 = var8.bind(var9)(var5);
                    var8 = var1.length;
                    var5 = 0;
                    if(!(var5 === var8)) { _fun0007_ip = 575; continue _fun0007 }
 223:
                    var8 = var4.type;
                    var4 = _closure1_slot13;
                    var4 = var4.FILTER;
                    if(!(var8 !== var4)) { _fun0007_ip = 575; continue _fun0007 }
 245:
                    var8 = var6.length;
                    var4 = 1;
                    var4 = var8 - var4;
                    var9 = var6[var4];
                    var4 = null;
                    if(!(var4 != var9)) { _fun0007_ip = 575; continue _fun0007 }
 270:
                    var8 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var6 = 18;
                    var6 = var12[var6];
                    var6 = var8.bind(var10)(var6);
                    var6 = var6.Token;
                    var8 = var6.prototype;
                    var8 = Object.create(var8, {constructor: {value: var6}});
                    var18 = var8;
                    var17 = var9;
                    var6 = new var18[var6](var17, var16);
                    var9 = var6 instanceof Object ? var6 : var8;
                    var8 = var9.type;
                    var6 = _closure1_slot14;
                    var6 = var6.ANSWER_USERNAME_FROM;
                    if(!(var8 !== var6)) { _fun0007_ip = 360; continue _fun0007 }
 338:
                    var8 = var9.type;
                    var6 = _closure1_slot14;
                    var6 = var6.ANSWER_USERNAME_MENTIONS;
                    if(!(var8 === var6)) { _fun0007_ip = 486; continue _fun0007 }
 360:
                    var8 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var6 = 19;
                    var6 = var12[var6];
                    var8 = var8.bind(var10)(var6);
                    var6 = var8.isValidUserAutocomplete;
                    var6 = var6.bind(var8)(var9);
                    if(!var6) { _fun0007_ip = 486; continue _fun0007 }
 394:
                    var8 = var9.getData;
                    var6 = 'userId';
                    var12 = var8.bind(var9)(var6);
                    if(!(var4 != var12)) { _fun0007_ip = 486; continue _fun0007 }
 413:
                    var8 = _closure1_slot7;
                    var6 = var8.getUser;
                    var12 = var6.bind(var8)(var12);
                    var8 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var6 = var6[var13];
                    var14 = var8.bind(var10)(var6);
                    var13 = var14.toSearchListUserItem;
                    var8 = _closure2_slot0;
                    var6 = _closure2_slot7;
                    var8 = var13.bind(var14)(var8, var12, var6);
                    var13 = var4 == var12;
                    var6 = undefined;
                    if(var13) { _fun0007_ip = 480; continue _fun0007 }
 475:
                    var6 = var12.id;
 480:
                    var6 = var11.bind(var10)(var6, var8);
 486:
                    var8 = var9.type;
                    var6 = _closure1_slot14;
                    var6 = var6.ANSWER_IN;
                    if(!(var8 === var6)) { _fun0007_ip = 575; continue _fun0007 }
 505:
                    var8 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var6 = 19;
                    var6 = var11[var6];
                    var8 = var8.bind(var10)(var6);
                    var6 = var8.isValidChannelAutocomplete;
                    var6 = var6.bind(var8)(var9);
                    if(!var6) { _fun0007_ip = 575; continue _fun0007 }
 539:
                    var8 = var9.getData;
                    var6 = 'channelIds';
                    var6 = var8.bind(var9)(var6);
                    if(!(var4 != var6)) { _fun0007_ip = 575; continue _fun0007 }
 558:
                    var4 = var6.forEach;
                    var2 = function(arg1) {
                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                            var4 = _closure1_slot5;
                            var3 = var4.getChannel;
                            var2 = arg1;
                            var5 = var3.bind(var4)(var2);
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 17;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.toSearchListChannelItem;
                            var2 = _closure2_slot8;
                            var4 = var3.bind(var4)(var5, var2);
                            var3 = _closure3_slot4;
                            var2 = null;
                            var6 = var2 == var5;
                            var2 = undefined;
                            if(var6) { _fun0012_ip = 84; continue _fun0012 }
 79:
                            var2 = var5.id;
 84:
                            var2 = var3.bind(var1)(var2, var4);
                            return var1;
                        }
                    };
                    var2 = var4.bind(var6)(var2);
 575:
                    var4 = var1.length;
                    var2 = var1;
                    if(!(!(var4 > var5))) { _fun0007_ip = 591; continue _fun0007 }
 587:
                    var2 = _closure1_slot16;
 591:
                    return var2;
 593:
                    var2 = _closure2_slot4;
                    var6 = 0;
                    var2 = var6 < var2;
                    var4 = global;
                    var3 = 'message-placeholder-';
                    if(!var2) { _fun0007_ip = 674; continue _fun0007 }
 617:
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
                    var2 = _closure2_slot4;
                    if(var6 < var2) { _fun0007_ip = 617; continue _fun0007 }
 674:
                    return var1;
                }
            };
            var8 = var11.bind(var12)(var6, var8);
            var6 = 20;
            var6 = var9[var6];
            var9 = var7.bind(var5)(var6);
            var7 = var9.useMessageTabCountsErrorText;
            var6 = {};
            var6['searchContext'] = var10;
            var6 = var7.bind(var9)(var6);
            var7 = null;
            if(!(var7 == var6)) { _fun0001_ip = 769; continue _fun0001 }
 510:
            if(!var3) { _fun0001_ip = 525; continue _fun0001 }
 513:
            var7 = var8.length;
            if(!(var4 !== var7)) { _fun0001_ip = 678; continue _fun0001 }
 525:
            if(var3) { _fun0001_ip = 631; continue _fun0001 }
 528:
            var3 = var8.length;
            if(!(var4 === var3)) { _fun0001_ip = 631; continue _fun0001 }
 537:
            if(var1) { _fun0001_ip = 631; continue _fun0001 }
 540:
            var4 = _closure1_slot15;
            var3 = _closure1_slot1;
            var12 = _closure1_slot2;
            var1 = 21;
            var1 = var12[var1];
            var3 = var3.bind(var5)(var1);
            var1 = {};
            var11 = _closure1_slot0;
            var7 = 22;
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
            _fun0001_ip = 676; continue _fun0001;
 631:
            var7 = _closure1_slot15;
            var4 = _closure1_slot1;
            var9 = _closure1_slot2;
            var3 = 23;
            var3 = var9[var3];
            var4 = var4.bind(var5)(var3);
            var3 = {};
            var9 = _closure1_slot12;
            var3['estimatedItemSize'] = var9;
            var3['data'] = var8;
            var1 = var7.bind(var5)(var4, var3);
 676:
            _fun0001_ip = 767; continue _fun0001;
 678:
            var7 = _closure1_slot15;
            var4 = _closure1_slot1;
            var12 = _closure1_slot2;
            var3 = 21;
            var3 = var12[var3];
            var4 = var4.bind(var5)(var3);
            var3 = {};
            var11 = _closure1_slot0;
            var8 = 22;
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
 767:
            _fun0001_ip = 805; continue _fun0001;
 769:
            var4 = _closure1_slot15;
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 21;
            var2 = var7[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['text'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 805:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 24;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search/native/components/layout/autocomplete/AutocompleteScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();