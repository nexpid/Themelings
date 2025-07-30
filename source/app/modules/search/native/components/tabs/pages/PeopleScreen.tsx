// app/modules/search/native/components/tabs/pages/PeopleScreen.tsx
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
    var4 = var5.bind(var1)(var4);
    var8 = var4.SearchListItemTypes;
    var _closure1_slot6 = var8;
    var4 = var4.USER_ESTIMATED_ITEM_SIZE;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot8 = var4;
    var4 = var7.memo;
    var2 = function PeopleScreen(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var6 = var2.searchContext;
            var _closure2_slot0 = var6;
            var7 = var2.onViewableItemsChanged;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var5 = 5;
            var8 = var4[var5];
            var5 = undefined;
            var9 = var3.bind(var5)(var8);
            var8 = var9.usePeopleSearchResults;
            var11 = var8.bind(var9)();
            var _closure2_slot1 = var11;
            var10 = _closure1_slot5;
            var9 = var10.useState;
            var8 = function(arg1) {
                var2 = arg1;
                var1 = var2.isInitialSearchQuery;
                var1 = var1.bind(var2)();
                return var1;
            };
            var13 = var9.bind(var10)(var6, var8);
            var _closure2_slot2 = var13;
            var8 = 6;
            var8 = var4[var8];
            var10 = var3.bind(var5)(var8);
            var9 = var10.useFullscreenPlaceholderCount;
            var8 = {};
            var12 = _closure1_slot7;
            var8['placeholderHeight'] = var12;
            var12 = 1;
            var8['numColumns'] = var12;
            var12 = var9.bind(var10)(var8);
            var _closure2_slot3 = var12;
            var9 = 7;
            var8 = var4[var9];
            var14 = var3.bind(var5)(var8);
            var10 = var14.useOnPressGroupDMItem;
            var8 = {};
            var8['searchContext'] = var6;
            var8 = var10.bind(var14)(var8);
            var _closure2_slot4 = var8;
            var9 = var4[var9];
            var14 = var3.bind(var5)(var9);
            var10 = var14.useOnPressDMItem;
            var9 = {};
            var9['searchContext'] = var6;
            var16 = var10.bind(var14)(var9);
            var _closure2_slot5 = var16;
            var10 = _closure1_slot4;
            var15 = var10.useCallback;
            var9 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* (arg1, arg2) {
                    var1 = function* anon_0_(arg1, arg2) {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                            StartGenerator();
                            var5 = arg1;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0002_ip = 162; continue _fun0002 }
 13:
                            var6 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var2 = 8;
                            var2 = var3[var2];
                            var3 = undefined;
                            var6 = var6.bind(var3)(var2);
                            var2 = var6.getOrEnsurePrivateChannel;
                            var2 = var2.bind(var6)(var5);
                            SaveGenerator(address=53);
 51:
                            return var2;
 53:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                            if(var6) { _fun0002_ip = 159; continue _fun0002 }
 59:
                            var10 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var4 = 9;
                            var4 = var11[var4];
                            var8 = var10.bind(var3)(var4);
                            var7 = var8.trackSearchResultClicked;
                            var6 = {};
                            var9 = _closure2_slot0;
                            var6['searchContext'] = var9;
                            var6['channelId'] = var2;
                            var6['userId'] = var5;
                            var9 = arg2;
                            var6['index'] = var9;
                            var9 = 5;
                            var9 = var11[var9];
                            var10 = var10.bind(var3)(var9);
                            var9 = var10.getPeopleSearchResultsCount;
                            var9 = var9.bind(var10)();
                            var6['totalSearchResults'] = var9;
                            var6 = var7.bind(var8)(var6);
                            var4 = _closure2_slot5;
                            var4 = var4.bind(var3)(var5, var2);
                            return var3;
 159:
                            return var2;
 162:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var14 = var9.bind(var5)();
            var9 = new Array(2);
            var9[0] = var16;
            var9[1] = var6;
            var15 = var15.bind(var10)(var14, var9);
            var _closure2_slot6 = var15;
            var14 = var10.useCallback;
            var9 = new Array(2);
            var9[0] = var8;
            var9[1] = var6;
            var8 = function(arg1, arg2) {
                var3 = arg1;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 9;
                var2 = var9[var1];
                var1 = undefined;
                var6 = var8.bind(var1)(var2);
                var5 = var6.trackSearchResultClicked;
                var4 = {};
                var7 = _closure2_slot0;
                var4['searchContext'] = var7;
                var4['channelId'] = var3;
                var7 = arg2;
                var4['index'] = var7;
                var7 = 5;
                var7 = var9[var7];
                var8 = var8.bind(var1)(var7);
                var7 = var8.getPeopleSearchResultsCount;
                var7 = var7.bind(var8)();
                var4['totalSearchResults'] = var7;
                var4 = var5.bind(var6)(var4);
                var2 = _closure2_slot4;
                var2 = var2.bind(var1)(var3);
                return var1;
            };
            var14 = var14.bind(var10)(var8, var9);
            var _closure2_slot7 = var14;
            var9 = var10.useMemo;
            var8 = new Array(5);
            var8[0] = var15;
            var8[1] = var14;
            var8[2] = var13;
            var8[3] = var12;
            var8[4] = var11;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = new Array(0);
                    var _closure3_slot0 = var1;
                    var4 = _closure2_slot1;
                    var3 = var4.forEach;
                    var2 = function(arg1) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            var2 = arg1;
                            var4 = var2.title;
                            var _closure4_slot0 = var4;
                            var3 = var2.items;
                            var2 = null;
                            if(!(var2 != var4)) { _fun0004_ip = 83; continue _fun0004 }
 26:
                            var5 = var3.length;
                            var2 = 0;
                            if(!(var5 > var2)) { _fun0004_ip = 83; continue _fun0004 }
 37:
                            var5 = {};
                            var2 = _closure1_slot6;
                            var2 = var2.SECTION;
                            var5['type'] = var2;
                            var2 = {};
                            var2['title'] = var4;
                            var5['props'] = var2;
                            var4 = _closure3_slot0;
                            var2 = var4.push;
                            var2 = var2.bind(var4)(var5);
 83:
                            var2 = var3.forEach;
                            var1 = function(arg1, arg2) {
                                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                                    var2 = arg1;
                                    var1 = arg2;
                                    var _closure5_slot0 = var1;
                                    var1 = 'user';
                                    var3 = var1 in var2;
                                    if(var3) { _fun0005_ip = 93; continue _fun0005 }
 26:
                                    var6 = _closure3_slot0;
                                    var4 = var6.push;
                                    var3 = {};
                                    var7 = _closure1_slot6;
                                    var7 = var7.GROUP_DM;
                                    var3['type'] = var7;
                                    var7 = _closure4_slot0;
                                    var3['section'] = var7;
                                    var7 = {};
                                    var7['channel'] = var2;
                                    var8 = function onPress(arg1) {
                                        var4 = _closure2_slot7;
                                        var3 = _closure5_slot0;
                                        var2 = undefined;
                                        var1 = arg1;
                                        var1 = var4.bind(var2)(var1, var3);
                                        return var1;
                                    };
                                    var7['onPress'] = var8;
                                    var3['props'] = var7;
                                    var3 = var4.bind(var6)(var3);
                                    _fun0005_ip = 197; continue _fun0005;
 93:
                                    var8 = var2.type;
                                    var6 = var2.user;
                                    var7 = var2.firstMatch;
                                    var3 = _closure3_slot0;
                                    var2 = var3.push;
                                    var1 = {};
                                    var4 = _closure1_slot6;
                                    var4 = var4.DM;
                                    var1['type'] = var4;
                                    var4 = _closure4_slot0;
                                    var1['section'] = var4;
                                    var4 = {};
                                    var4['type'] = var8;
                                    var4['user'] = var6;
                                    var8 = var6.username;
                                    var6 = undefined;
                                    if(!(var8 !== var7)) { _fun0005_ip = 172; continue _fun0005 }
 169:
                                    var6 = var7;
 172:
                                    var4['nickname'] = var6;
                                    var5 = function onPress(arg1) {
                                        var4 = _closure2_slot6;
                                        var3 = _closure5_slot0;
                                        var2 = undefined;
                                        var1 = arg1;
                                        var1 = var4.bind(var2)(var1, var3);
                                        return var1;
                                    };
                                    var4['onPress'] = var5;
                                    var1['props'] = var4;
                                    var1 = var2.bind(var3)(var1);
 197:
                                    var1 = undefined;
                                    return var1;
                                }
                            };
                            var1 = var2.bind(var3)(var1);
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
                    var2 = _closure2_slot2;
                    if(var2) { _fun0003_ip = 133; continue _fun0003 }
 41:
                    var2 = var1.length;
                    var6 = 0;
                    if(!(var6 === var2)) { _fun0003_ip = 133; continue _fun0003 }
 52:
                    var2 = _closure2_slot3;
                    var2 = var6 < var2;
                    var4 = global;
                    var3 = 'message-placeholder-';
                    var6 = 0;
                    if(!var2) { _fun0003_ip = 133; continue _fun0003 }
 76:
                    var8 = var1.push;
                    var2 = {};
                    var9 = _closure1_slot6;
                    var9 = var9.MESSAGE_PLACEHOLDER;
                    var2['type'] = var9;
                    var9 = var4.HermesInternal;
                    var9 = var9.concat;
                    var9 = var9.bind(var3)(var6);
                    var2['key'] = var9;
                    var2 = var8.bind(var1)(var2);
                    var6 = var6 + 1;
                    var2 = _closure2_slot3;
                    if(var6 < var2) { _fun0003_ip = 76; continue _fun0003 }
 133:
                    return var1;
                }
            };
            var8 = var9.bind(var10)(var1, var8);
            var1 = 10;
            var1 = var4[var1];
            var4 = var3.bind(var5)(var1);
            var3 = var4.useMessageTabCountsErrorText;
            var1 = {};
            var1['searchContext'] = var6;
            var6 = var3.bind(var4)(var1);
            var1 = null;
            if(!(var1 == var6)) { _fun0001_ip = 403; continue _fun0001 }
 351:
            var4 = _closure1_slot8;
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 12;
            var1 = var9[var1];
            var3 = var3.bind(var5)(var1);
            var1 = {};
            var9 = _closure1_slot7;
            var1['estimatedItemSize'] = var9;
            var1['data'] = var8;
            var1['onViewableItemsChanged'] = var7;
            var1 = var4.bind(var5)(var3, var1);
            _fun0001_ip = 439; continue _fun0001;
 403:
            var4 = _closure1_slot8;
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 11;
            var2 = var7[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['text'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 439:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search/native/components/tabs/pages/PeopleScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();