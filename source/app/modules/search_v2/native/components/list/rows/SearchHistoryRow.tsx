// app/modules/search_v2/native/components/list/rows/SearchHistoryRow.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var12 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function SearchHistoryRemoveIcon(arg1) {
        var2 = arg1;
        var7 = var2.searchContext;
        var _closure2_slot0 = var7;
        var6 = var2.searchHistoryItem;
        var _closure2_slot1 = var6;
        var4 = _closure1_slot4;
        var3 = var4.useCallback;
        var2 = new Array(2);
        var2[0] = var7;
        var2[1] = var6;
        var1 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 10;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.removeSearchHistoryItem;
            var3 = _closure2_slot0;
            var2 = _closure2_slot1;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var7 = var3.bind(var4)(var1, var2);
        var4 = _closure1_slot10;
        var6 = _closure1_slot0;
        var8 = _closure1_slot2;
        var1 = 11;
        var1 = var8[var1];
        var3 = undefined;
        var1 = var6.bind(var3)(var1);
        var2 = var1.PressableHighlight;
        var1 = {'onPress': null, 'accessibilityRole': 'button', 'unstable_pressDelay': 130};
        var1['onPress'] = var7;
        var7 = {};
        var9 = 16;
        var7['marginLeft'] = var9;
        var1['style'] = var7;
        var7 = {'bottom': 16, 'left': 16, 'right': 16, 'top': 16};
        var1['hitSlop'] = var7;
        var7 = _closure1_slot10;
        var5 = 12;
        var5 = var8[var5];
        var5 = var6.bind(var3)(var5);
        var6 = var5.XSmallIcon;
        var5 = {'size': 'sm', 'color': 'interactive-normal'};
        var5 = var7.bind(var3)(var6, var5);
        var1['children'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot14 = var1;
    var1 = function SearchHistoryTextRow(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var13 = var1.searchContext;
            var _closure2_slot0 = var13;
            var12 = var1.searchHistoryItem;
            var _closure2_slot1 = var12;
            var1 = _closure1_slot12;
            var4 = undefined;
            var10 = var1.bind(var4)();
            var _closure2_slot2 = var10;
            var2 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 13;
            var1 = var6[var1];
            var5 = var2.bind(var4)(var1);
            var3 = var5.useOnPressSearchHistoryText;
            var1 = {};
            var1['searchContext'] = var13;
            var1 = var3.bind(var5)(var1);
            var _closure2_slot3 = var1;
            var7 = _closure1_slot4;
            var5 = var7.useCallback;
            var3 = new Array(5);
            var3[0] = var1;
            var3[1] = var13;
            var1 = var12.tags;
            var3[2] = var1;
            var1 = var12.text;
            var3[3] = var1;
            var1 = var12.type;
            var3[4] = var1;
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 14;
                var2 = var2[var1];
                var1 = undefined;
                var6 = var3.bind(var1)(var2);
                var5 = var6.trackSearchHistoryClicked;
                var4 = {};
                var2 = _closure2_slot0;
                var4['searchContext'] = var2;
                var2 = _closure2_slot1;
                var7 = var2.type;
                var4['searchHistoryItemType'] = var7;
                var4 = var5.bind(var6)(var4);
                var4 = _closure2_slot3;
                var3 = var2.text;
                var2 = var2.tags;
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var5 = var5.bind(var7)(var1, var3);
            var3 = _closure1_slot10;
            var1 = 15;
            var1 = var6[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.SearchListRow;
            var1 = {};
            var14 = _closure1_slot11;
            var7 = _closure1_slot5;
            var6 = {};
            var9 = var10.textContainer;
            var6['style'] = var9;
            var16 = var12.tags;
            var9 = null;
            var15 = var9 == var16;
            var9 = undefined;
            if(var15) { _fun0001_ip = 224; continue _fun0001 }
 207:
            var15 = var16.map;
            var11 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot10;
                var4 = _closure1_slot5;
                var3 = {};
                var6 = 'button';
                var3['accessibilityRole'] = var6;
                var6 = _closure2_slot2;
                var6 = var6.tag;
                var3['style'] = var6;
                var8 = _closure1_slot10;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 16;
                var6 = var6[var2];
                var2 = undefined;
                var6 = var7.bind(var2)(var6);
                var7 = var6.Text;
                var6 = {'lineClamp': 1, 'variant': 'text-sm/semibold', 'color': 'header-primary'};
                var9 = var1.text;
                var6['children'] = var9;
                var6 = var8.bind(var2)(var7, var6);
                var3['children'] = var6;
                var1 = var1.text;
                var1 = var5.bind(var2)(var4, var3, var1);
                return var1;
            };
            var9 = var15.bind(var16)(var11);
 224:
            var15 = new Array(2);
            var15[0] = var9;
            var18 = _closure1_slot10;
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var16 = 16;
            var16 = var11[var16];
            var16 = var9.bind(var4)(var16);
            var17 = var16.Text;
            var16 = {'lineClamp': 1, 'variant': 'text-md/semibold', 'color': 'header-primary'};
            var19 = var10.text;
            var16['style'] = var19;
            var19 = var12.text;
            var16['children'] = var19;
            var16 = var18.bind(var4)(var17, var16);
            var15[1] = var16;
            var6['children'] = var15;
            var6 = var14.bind(var4)(var7, var6);
            var1['label'] = var6;
            var1['onPress'] = var5;
            var7 = _closure1_slot10;
            var6 = _closure1_slot14;
            var5 = {};
            var5['searchContext'] = var13;
            var5['searchHistoryItem'] = var12;
            var5 = var7.bind(var4)(var6, var5);
            var1['trailing'] = var5;
            var5 = var10.textIconContainer;
            var1['iconContainerStyle'] = var5;
            var7 = _closure1_slot10;
            var6 = _closure1_slot5;
            var5 = {};
            var10 = var10.iconContainer;
            var5['style'] = var10;
            var10 = _closure1_slot10;
            var8 = 17;
            var8 = var11[var8];
            var8 = var9.bind(var4)(var8);
            var9 = var8.MagnifyingGlassIcon;
            var8 = {'size': 'sm', 'color': 'interactive-normal'};
            var8 = var10.bind(var4)(var9, var8);
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['icon'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function SearchHistoryGroupDMRow(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var4 = var2.searchContext;
            var _closure2_slot0 = var4;
            var3 = var2.searchHistoryItem;
            var _closure2_slot1 = var3;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 18;
            var6 = var8[var5];
            var5 = undefined;
            var11 = var7.bind(var5)(var6);
            var10 = var11.useStateFromStores;
            var6 = _closure1_slot6;
            var9 = new Array(1);
            var9[0] = var6;
            var6 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getChannel;
                var1 = _closure2_slot1;
                var1 = var1.channelId;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var10 = var10.bind(var11)(var9, var6);
            var _closure2_slot2 = var10;
            var12 = _closure1_slot4;
            var11 = var12.useEffect;
            var9 = new Array(3);
            var9[0] = var10;
            var9[1] = var4;
            var9[2] = var3;
            var6 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0003_ip = 58; continue _fun0003 }
 13:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 10;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.removeSearchHistoryItem;
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2, var1);
 58:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var11.bind(var12)(var6, var9);
            var6 = 13;
            var6 = var8[var6];
            var8 = var7.bind(var5)(var6);
            var7 = var8.useOnPressGroupDMItem;
            var6 = {};
            var6['searchContext'] = var4;
            var9 = var7.bind(var8)(var6);
            var _closure2_slot3 = var9;
            var8 = _closure1_slot4;
            var7 = var8.useCallback;
            var6 = new Array(3);
            var6[0] = var9;
            var6[1] = var4;
            var9 = var3.type;
            var6[2] = var9;
            var1 = function(arg1) {
                var3 = arg1;
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 14;
                var2 = var2[var1];
                var1 = undefined;
                var6 = var4.bind(var1)(var2);
                var5 = var6.trackSearchHistoryClicked;
                var4 = {};
                var7 = _closure2_slot0;
                var4['searchContext'] = var7;
                var4['channelId'] = var3;
                var7 = _closure2_slot1;
                var7 = var7.type;
                var4['searchHistoryItemType'] = var7;
                var4 = var5.bind(var6)(var4);
                var2 = _closure2_slot3;
                var2 = var2.bind(var1)(var3);
                return var1;
            };
            var9 = var7.bind(var8)(var1, var6);
            var1 = _closure1_slot20;
            var1 = var1.bind(var5)(var4, var3);
            var6 = var1.trailing;
            var8 = var1.accessibilityActions;
            var7 = var1.onAccessibilityAction;
            var1 = null;
            var3 = var1 == var10;
            if(var3) { _fun0002_ip = 291; continue _fun0002 }
 236:
            var4 = _closure1_slot10;
            var3 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = 19;
            var2 = var11[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['channel'] = var10;
            var2['onPress'] = var9;
            var2['accessibilityActions'] = var8;
            var2['onAccessibilityAction'] = var7;
            var2['trailing'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 291:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function SearchHistoryDMRow(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arg1;
            var4 = var2.searchContext;
            var _closure2_slot0 = var4;
            var3 = var2.searchHistoryItem;
            var _closure2_slot1 = var3;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 18;
            var6 = var8[var5];
            var5 = undefined;
            var11 = var7.bind(var5)(var6);
            var10 = var11.useStateFromStores;
            var6 = _closure1_slot8;
            var9 = new Array(1);
            var9[0] = var6;
            var6 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getUser;
                var1 = _closure2_slot1;
                var1 = var1.userId;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var10 = var10.bind(var11)(var9, var6);
            var12 = _closure1_slot4;
            var11 = var12.useEffect;
            var6 = var3.userId;
            var9 = new Array(1);
            var9[0] = var6;
            var6 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 20;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.getUser;
                var2 = _closure2_slot1;
                var2 = var2.userId;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var6 = var11.bind(var12)(var6, var9);
            var6 = 13;
            var6 = var8[var6];
            var8 = var7.bind(var5)(var6);
            var7 = var8.useOnPressDMItem;
            var6 = {};
            var6['searchContext'] = var4;
            var9 = var7.bind(var8)(var6);
            var _closure2_slot2 = var9;
            var8 = _closure1_slot4;
            var7 = var8.useCallback;
            var1 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                            StartGenerator();
                            var5 = arg1;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0005_ip = 138; continue _fun0005 }
 13:
                            var6 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var2 = 21;
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
                            if(var6) { _fun0005_ip = 135; continue _fun0005 }
 59:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var4 = 14;
                            var4 = var7[var4];
                            var8 = var6.bind(var3)(var4);
                            var7 = var8.trackSearchHistoryClicked;
                            var6 = {};
                            var9 = _closure2_slot0;
                            var6['searchContext'] = var9;
                            var6['channelId'] = var2;
                            var9 = _closure2_slot1;
                            var9 = var9.type;
                            var6['searchHistoryItemType'] = var9;
                            var6 = var7.bind(var8)(var6);
                            var4 = _closure2_slot2;
                            var4 = var4.bind(var3)(var5, var2);
                            return var3;
 135:
                            return var2;
 138:
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
            var6 = var1.bind(var5)();
            var1 = new Array(3);
            var1[0] = var9;
            var1[1] = var4;
            var9 = var3.type;
            var1[2] = var9;
            var9 = var7.bind(var8)(var6, var1);
            var1 = _closure1_slot20;
            var1 = var1.bind(var5)(var4, var3);
            var6 = var1.trailing;
            var8 = var1.accessibilityActions;
            var7 = var1.onAccessibilityAction;
            var1 = null;
            var3 = var1 == var10;
            if(var3) { _fun0004_ip = 288; continue _fun0004 }
 233:
            var4 = _closure1_slot10;
            var3 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = 22;
            var2 = var11[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['user'] = var10;
            var2['onPress'] = var9;
            var2['accessibilityActions'] = var8;
            var2['onAccessibilityAction'] = var7;
            var2['trailing'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 288:
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function SearchHistoryGuildVoiceChannelRow(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var2 = arg1;
            var11 = var2.searchContext;
            var _closure2_slot0 = var11;
            var10 = var2.searchHistoryItem;
            var _closure2_slot1 = var10;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 18;
            var2 = var4[var2];
            var5 = undefined;
            var9 = var3.bind(var5)(var2);
            var8 = var9.useStateFromStores;
            var2 = _closure1_slot6;
            var6 = new Array(1);
            var6[0] = var2;
            var2 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getChannel;
                var1 = _closure2_slot1;
                var1 = var1.channelId;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var8.bind(var9)(var6, var2);
            var _closure2_slot2 = var8;
            var12 = _closure1_slot4;
            var9 = var12.useEffect;
            var6 = new Array(3);
            var6[0] = var8;
            var6[1] = var11;
            var6[2] = var10;
            var2 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0007_ip = 58; continue _fun0007 }
 13:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 10;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.removeSearchHistoryItem;
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2, var1);
 58:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var9.bind(var12)(var2, var6);
            var2 = 13;
            var2 = var4[var2];
            var4 = var3.bind(var5)(var2);
            var3 = var4.useOnPressGuildVoiceChannel;
            var2 = {};
            var2['searchContext'] = var11;
            var6 = var3.bind(var4)(var2);
            var _closure2_slot3 = var6;
            var4 = _closure1_slot4;
            var3 = var4.useCallback;
            var2 = new Array(3);
            var2[0] = var6;
            var2[1] = var11;
            var6 = var10.type;
            var2[2] = var6;
            var1 = function(arg1) {
                var3 = arg1;
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 14;
                var2 = var2[var1];
                var1 = undefined;
                var6 = var4.bind(var1)(var2);
                var5 = var6.trackSearchHistoryClicked;
                var4 = {};
                var7 = _closure2_slot0;
                var4['searchContext'] = var7;
                var4['channelId'] = var3;
                var7 = _closure2_slot1;
                var7 = var7.type;
                var4['searchHistoryItemType'] = var7;
                var4 = var5.bind(var6)(var4);
                var2 = _closure2_slot3;
                var2 = var2.bind(var1)(var3);
                return var1;
            };
            var6 = var3.bind(var4)(var1, var2);
            var1 = null;
            var2 = var1 == var8;
            if(var2) { _fun0006_ip = 297; continue _fun0006 }
 208:
            var4 = _closure1_slot10;
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 23;
            var2 = var9[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['channel'] = var8;
            var8 = _closure1_slot13;
            var2['voiceStates'] = var8;
            var8 = _closure1_slot13;
            var2['speakerVoiceStates'] = var8;
            var9 = _closure1_slot10;
            var8 = _closure1_slot14;
            var7 = {};
            var7['searchContext'] = var11;
            var7['searchHistoryItem'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var2['trailing'] = var7;
            var2['onPress'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 297:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function SearchHistoryGuildTextChannelRow(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var2 = arg1;
            var4 = var2.searchContext;
            var _closure2_slot0 = var4;
            var3 = var2.searchHistoryItem;
            var _closure2_slot1 = var3;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 18;
            var9 = var8[var6];
            var5 = undefined;
            var12 = var7.bind(var5)(var9);
            var11 = var12.useStateFromStores;
            var9 = _closure1_slot6;
            var10 = new Array(1);
            var10[0] = var9;
            var9 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getChannel;
                var1 = _closure2_slot1;
                var1 = var1.channelId;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var11 = var11.bind(var12)(var10, var9);
            var _closure2_slot2 = var11;
            var13 = _closure1_slot4;
            var12 = var13.useEffect;
            var10 = new Array(3);
            var10[0] = var11;
            var10[1] = var4;
            var10[2] = var3;
            var9 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var3 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0009_ip = 58; continue _fun0009 }
 13:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 10;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.removeSearchHistoryItem;
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2, var1);
 58:
                    var1 = undefined;
                    return var1;
                }
            };
            var9 = var12.bind(var13)(var9, var10);
            var6 = var8[var6];
            var12 = var7.bind(var5)(var6);
            var10 = var12.useStateFromStores;
            var6 = _closure1_slot7;
            var9 = new Array(1);
            var9[0] = var6;
            var6 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var3 = _closure1_slot7;
                    var2 = var3.lastMessageId;
                    var1 = _closure2_slot1;
                    var1 = var1.channelId;
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    if(!(var1 == var2)) { _fun0010_ip = 62; continue _fun0010 }
 36:
                    var3 = _closure2_slot2;
                    var5 = var1 == var3;
                    var3 = undefined;
                    if(var5) { _fun0010_ip = 59; continue _fun0010 }
 49:
                    var4 = _closure2_slot2;
                    var3 = var4.lastMessageId;
 59:
                    var2 = var3;
 62:
                    var3 = var1 != var2;
                    var1 = null;
                    if(!var3) { _fun0010_ip = 74; continue _fun0010 }
 71:
                    var1 = var2;
 74:
                    return var1;
                }
            };
            var10 = var10.bind(var12)(var9, var6);
            var6 = 13;
            var6 = var8[var6];
            var8 = var7.bind(var5)(var6);
            var7 = var8.useOnPressGuildTextChannel;
            var6 = {};
            var6['searchContext'] = var4;
            var9 = var7.bind(var8)(var6);
            var _closure2_slot3 = var9;
            var8 = _closure1_slot4;
            var7 = var8.useCallback;
            var6 = new Array(3);
            var6[0] = var9;
            var6[1] = var4;
            var9 = var3.type;
            var6[2] = var9;
            var1 = function(arg1) {
                var3 = arg1;
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 14;
                var2 = var2[var1];
                var1 = undefined;
                var6 = var4.bind(var1)(var2);
                var5 = var6.trackSearchHistoryClicked;
                var4 = {};
                var7 = _closure2_slot0;
                var4['searchContext'] = var7;
                var4['channelId'] = var3;
                var7 = _closure2_slot1;
                var7 = var7.type;
                var4['searchHistoryItemType'] = var7;
                var4 = var5.bind(var6)(var4);
                var2 = _closure2_slot3;
                var2 = var2.bind(var1)(var3);
                return var1;
            };
            var9 = var7.bind(var8)(var1, var6);
            var1 = _closure1_slot20;
            var1 = var1.bind(var5)(var4, var3);
            var6 = var1.trailing;
            var8 = var1.accessibilityActions;
            var7 = var1.onAccessibilityAction;
            var1 = null;
            var3 = var1 == var11;
            if(var3) { _fun0008_ip = 335; continue _fun0008 }
 275:
            var4 = _closure1_slot10;
            var3 = _closure1_slot1;
            var12 = _closure1_slot2;
            var2 = 24;
            var2 = var12[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['channel'] = var11;
            var2['lastMessageId'] = var10;
            var2['onPress'] = var9;
            var2['accessibilityActions'] = var8;
            var2['onAccessibilityAction'] = var7;
            var2['trailing'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 335:
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function useClearableSearchHistoryRowProps(arg1, arg2) {
        var6 = arg1;
        var2 = arg2;
        var _closure2_slot0 = var6;
        var _closure2_slot1 = var2;
        var1 = {};
        var9 = _closure1_slot4;
        var8 = var9.useMemo;
        var7 = function() {
            var2 = {};
            var1 = 'remove';
            var2['name'] = var1;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 25;
            var3 = var7[var1];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var1 = var7[var1];
            var1 = var6.bind(var5)(var1);
            var1 = var1.t;
            var1 = var1.Ov3VOz;
            var1 = var3.bind(var4)(var1);
            var2['label'] = var1;
            var1 = new Array(1);
            var1[0] = var2;
            return var1;
        };
        var5 = new Array(0);
        var5 = var8.bind(var9)(var7, var5);
        var1['accessibilityActions'] = var5;
        var8 = _closure1_slot4;
        var7 = var8.useCallback;
        var5 = new Array(2);
        var5[0] = var6;
        var5[1] = var2;
        var4 = function(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var1 = arg1;
                var1 = var1.nativeEvent;
                var2 = var1.actionName;
                var1 = 'remove';
                if(!(var1 === var2)) { _fun0011_ip = 70; continue _fun0011 }
 22:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 10;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.removeSearchHistoryItem;
                var2 = _closure2_slot0;
                var1 = _closure2_slot1;
                var1 = var3.bind(var4)(var2, var1);
 70:
                var1 = undefined;
                return var1;
            }
        };
        var4 = var7.bind(var8)(var4, var5);
        var1['onAccessibilityAction'] = var4;
        var5 = _closure1_slot10;
        var4 = _closure1_slot14;
        var3 = {};
        var3['searchContext'] = var6;
        var3['searchHistoryItem'] = var2;
        var2 = undefined;
        var2 = var5.bind(var2)(var4, var3);
        var1['trailing'] = var2;
        return var1;
    };
    var _closure1_slot20 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var13 = 1;
    var7 = var6[var13];
    var4 = native4;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SearchHistoryItemTypes;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot10 = var8;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'height': 48, 'width': 48, 'borderRadius': null, 'backgroundColor': null, 'alignItems': 'center', 'justifyContent': 'center'};
    var11 = 9;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.xl;
    var10['borderRadius'] = var14;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.INPUT_BACKGROUND;
    var10['backgroundColor'] = var14;
    var4['iconContainer'] = var10;
    var10 = {};
    var10['flexShrink'] = var13;
    var4['text'] = var10;
    var10 = {'flexDirection': 'row', 'alignItems': 'center', 'flexWrap': 'wrap', 'gap': 2};
    var4['textContainer'] = var10;
    var10 = {};
    var13 = 'flex-start';
    var10['alignSelf'] = var13;
    var4['textIconContainer'] = var10;
    var10 = {'paddingHorizontal': 8, 'paddingVertical': 4, 'borderRadius': null, 'overflow': 'hidden', 'margin': 2, 'flexDirection': 'row', 'alignItems': 'center'};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.lg;
    var10['borderRadius'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BG_BASE_TERTIARY;
    var10['backgroundColor'] = var11;
    var4['tag'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot12 = var4;
    var4 = new Array(0);
    var _closure1_slot13 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var4 = arg1;
            var5 = var4.searchHistoryItem;
            var3 = null;
            var2 = Object.create(var3);
            var1 = 0;
            var2['searchHistoryItem'] = var1;
            var10 = {};
            var9 = var4;
            var8 = var2;
            var1 = copyDataProperties(var10, var9, var8);
            var6 = var5.type;
            var4 = _closure1_slot9;
            var4 = var4.GROUP_DM;
            if(!(var4 !== var6)) { _fun0012_ip = 275; continue _fun0012 }
 58:
            var4 = _closure1_slot9;
            var4 = var4.DM;
            if(!(var4 !== var6)) { _fun0012_ip = 236; continue _fun0012 }
 75:
            var4 = _closure1_slot9;
            var4 = var4.TEXT;
            if(!(var4 !== var6)) { _fun0012_ip = 197; continue _fun0012 }
 89:
            var4 = _closure1_slot9;
            var4 = var4.GUILD_TEXT_CHANNEL;
            if(!(var4 !== var6)) { _fun0012_ip = 158; continue _fun0012 }
 103:
            var4 = _closure1_slot9;
            var4 = var4.GUILD_VOICE_CHANNEL;
            if(!(var4 !== var6)) { _fun0012_ip = 119; continue _fun0012 }
 117:
            return var3;
 119:
            var7 = _closure1_slot10;
            var6 = _closure1_slot18;
            var4 = {};
            var10 = var4;
            var9 = var1;
            var3 = copyDataProperties(var10, var9);
            var3 = 'searchHistoryItem';
            var4[var3] = var5;
            var3 = undefined;
            var3 = var7.bind(var3)(var6, var4);
            return var3;
 158:
            var7 = _closure1_slot10;
            var6 = _closure1_slot19;
            var4 = {};
            var10 = var4;
            var9 = var1;
            var3 = copyDataProperties(var10, var9);
            var3 = 'searchHistoryItem';
            var4[var3] = var5;
            var3 = undefined;
            var3 = var7.bind(var3)(var6, var4);
            return var3;
 197:
            var7 = _closure1_slot10;
            var6 = _closure1_slot15;
            var4 = {};
            var10 = var4;
            var9 = var1;
            var3 = copyDataProperties(var10, var9);
            var3 = 'searchHistoryItem';
            var4[var3] = var5;
            var3 = undefined;
            var3 = var7.bind(var3)(var6, var4);
            return var3;
 236:
            var7 = _closure1_slot10;
            var6 = _closure1_slot17;
            var4 = {};
            var10 = var4;
            var9 = var1;
            var3 = copyDataProperties(var10, var9);
            var3 = 'searchHistoryItem';
            var4[var3] = var5;
            var3 = undefined;
            var3 = var7.bind(var3)(var6, var4);
            return var3;
 275:
            var4 = _closure1_slot10;
            var3 = _closure1_slot16;
            var2 = {};
            var10 = var2;
            var9 = var1;
            var1 = copyDataProperties(var10, var9);
            var1 = 'searchHistoryItem';
            var2[var1] = var5;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 26;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search_v2/native/components/list/rows/SearchHistoryRow.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();