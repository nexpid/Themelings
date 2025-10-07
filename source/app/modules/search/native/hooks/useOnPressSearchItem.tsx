// app/modules/search/native/hooks/useOnPressSearchItem.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var1 = function addSearchHistoryItem(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var _closure2_slot0 = var2;
            var3 = arg2;
            var _closure2_slot1 = var3;
            var4 = var2.type;
            var3 = _closure1_slot15;
            var3 = var3.DMS;
            if(!(var3 !== var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot15;
            var3 = var3.GUILD;
            if(!(var3 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 2:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 9;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = var3.delayUntilNavigationComplete;
            var1 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 10;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.addSearchHistoryItem;
                var2 = _closure2_slot0;
                var1 = _closure2_slot1;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
case 4:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function addCurrentSearchQueryToSearchHistory(arg1) {
        var4 = arg1;
        var3 = _closure1_slot6;
        var2 = var3.getState;
        var1 = function(arg1) {
            var3 = arg1;
            var1 = {};
            var2 = var3.getTextInputValue;
            var2 = var2.bind(var3)();
            var1['text'] = var2;
            var2 = var3.getTags;
            var2 = var2.bind(var3)();
            var1['tags'] = var2;
            return var1;
        };
        var2 = var2.bind(var3)(var4, var1);
        var1 = var2.tags;
        var5 = var2.text;
        var3 = _closure1_slot17;
        var2 = {};
        var6 = _closure1_slot8;
        var6 = var6.TEXT;
        var2['type'] = var6;
        var2['text'] = var5;
        var2['tags'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var4, var2);
        return var1;
    };
    var _closure1_slot18 = var1;
    var1 = function navigateToSearchPreview(arg1, arg2, arg3, arg4) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var3 = arg2;
            var2 = arg4;
            var _closure2_slot0 = var3;
            var _closure2_slot1 = var2;
            var6 = {};
            var1 = var3.id;
            var6['channelId'] = var1;
            var1 = var3.getGuildId;
            var3 = var1.bind(var3)();
            var1 = null;
            if(!(var1 == var3)) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var3 = _closure1_slot14;
case 5:
            var6['guildId'] = var3;
            var3 = arg3;
            var6['searchContext'] = var3;
            if(!(var1 == var2)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var2 = var4.navigate;
            var1 = _closure1_slot10;
            var1 = var1.SEARCH_CHAT_PREVIEW;
            var1 = var2.bind(var4)(var1, var6);
            _fun0002_ip = 9; continue _fun0002;
case 7:
            var3 = var4.navigate;
            var2 = {};
            var1 = _closure1_slot10;
            var1 = var1.SEARCH_CHAT_PREVIEW;
            var2['screen'] = var1;
            var1 = {};
            var9 = var1;
            var8 = var6;
            var6 = copyDataProperties(var9, var8);
            var6 = function onBeforeJumpToMessage() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 19;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var5 = var3.ComponentDispatch;
                var4 = var5.dispatch;
                var2 = _closure1_slot13;
                var3 = var2.HIDE_CHANNEL_DETAILS;
                var2 = {};
                var7 = _closure2_slot0;
                var7 = var7.id;
                var2['channelId'] = var7;
                var6 = _closure2_slot1;
                var6 = var6.screenIndex;
                var2['screenIndex'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var5 = 'onBeforeJumpToMessage';
            var1[var5] = var6;
            var2['params'] = var1;
            var1 = 'sidebar';
            var1 = var3.bind(var4)(var1, var2);
case 9:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var4 = function handleVoiceOrStageChannelConnectPress() {
        var1 = undefined;
        var4 = _closure1_slot21;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot20 = var4;
    var1 = function _handleVoiceOrStageChannelConnectPress() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    var5 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var2 = var5.isGuildStageVoice;
                    var4 = var2.bind(var5)();
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var3 = 21;
                    var6 = var2[var3];
                    var3 = undefined;
                    var6 = var7.bind(var3)(var6);
                    if(var4) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    var4 = 25;
                    var7 = var2[var4];
                    var4 = var2.paths;
                    var4 = var6.bind(var3)(var7, var4);
                    SaveGenerator(address=73);
case 14:
                    return var4;
case 15:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(var7) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                    var8 = var4.openGuildVoiceModal;
                    var7 = 'Channel List';
                    var7 = var8.bind(var3)(var5, var7);
                    _fun0003_ip = 18; continue _fun0003;
case 16:
                    return var4;
case 12:
                    var4 = 24;
                    var4 = var2[var4];
                    var2 = var2.paths;
                    var2 = var6.bind(var3)(var4, var2);
                    SaveGenerator(address=124);
case 19:
                    return var2;
case 20:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0003_ip = 21; continue _fun0003 }
case 22:
                    var4 = var2.connectAndOpen;
                    var4 = var4.bind(var3)(var5);
case 18:
                    return var3;
case 21:
                    return var2;
case 10:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot21 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot21 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var9 = var7[var5];
    var5 = metroImportAll;
    var5 = var5.bind(var1)(var9);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.SearchMediaTypes;
    var _closure1_slot7 = var8;
    var8 = var5.SearchHistoryItemTypes;
    var _closure1_slot8 = var8;
    var5 = var5.SearchQueryTagTypes;
    var _closure1_slot9 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.SearchNavigatorScreens;
    var _closure1_slot10 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.SearchFilterAddLocations;
    var _closure1_slot11 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.Routes;
    var _closure1_slot12 = var8;
    var8 = var5.ComponentActions;
    var _closure1_slot13 = var8;
    var8 = var5.ME;
    var _closure1_slot14 = var8;
    var5 = var5.SearchTypes;
    var _closure1_slot15 = var5;
    var5 = 8;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.StaticChannelRoute;
    var _closure1_slot16 = var5;
    var5 = 32;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/search/native/hooks/useOnPressSearchItem.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function useOnPressSearchLink(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot4;
        var3 = var4.useCallback;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function(arg1, arg2) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var1 = arg2;
                var _closure3_slot0 = var1;
                var4 = _closure1_slot18;
                var3 = _closure2_slot0;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var6 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 11;
                var4 = var4[var3];
                var7 = var6.bind(var1)(var4);
                var6 = var7.safeParseWithQuery;
                var4 = arg1;
                var7 = var6.bind(var7)(var4);
                var6 = null;
                if(!(var6 != var7)) { _fun0004_ip = 23; continue _fun0004 }
case 24:
                var4 = var7.protocol;
                if(!(var6 != var4)) { _fun0004_ip = 23; continue _fun0004 }
case 25:
                var4 = var7.hostname;
                if(!(var6 == var4)) { _fun0004_ip = 26; continue _fun0004 }
case 23:
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var4 = 12;
                var4 = var12[var4];
                var8 = var11.bind(var1)(var4);
                var6 = var8.presentFailedToast;
                var4 = 13;
                var9 = var12[var4];
                var9 = var11.bind(var1)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var4 = var12[var4];
                var4 = var11.bind(var1)(var4);
                var4 = var4.t;
                var4 = var4.XiqzAg;
                var4 = var9.bind(var10)(var4);
                var4 = var6.bind(var8)(var4);
                _fun0004_ip = 27; continue _fun0004;
case 26:
                var6 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = var4[var3];
                var6 = var6.bind(var1)(var3);
                var3 = var6.format;
                var6 = var3.bind(var6)(var7);
                var _closure3_slot1 = var6;
                var3 = _closure1_slot0;
                var2 = 14;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.handleClick;
                var2 = {};
                var2['href'] = var6;
                var6 = function onConfirm() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 15;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.openURL;
                    var1 = _closure3_slot1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var2['onConfirm'] = var6;
                var5 = function trusted() {
                    var1 = _closure3_slot0;
                    return var1;
                };
                var2['trusted'] = var5;
                var2 = var3.bind(var4)(var2);
case 27:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useOnPressSearchLink'] = var5;
    var5 = function useOnPressMessageItem(arg1) {
        var2 = arg1;
        var6 = var2.searchContext;
        var _closure2_slot0 = var6;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var3 = 16;
        var3 = var9[var3];
        var5 = undefined;
        var4 = var8.bind(var5)(var3);
        var3 = var4.useNavigation;
        var7 = var3.bind(var4)();
        var _closure2_slot1 = var7;
        var4 = _closure1_slot4;
        var3 = var4.useContext;
        var2 = 17;
        var2 = var9[var2];
        var2 = var8.bind(var5)(var2);
        var2 = var2.SwipeForMemberListContext;
        var5 = var3.bind(var4)(var2);
        var _closure2_slot2 = var5;
        var3 = var4.useCallback;
        var2 = new Array(3);
        var2[0] = var7;
        var2[1] = var6;
        var2[2] = var5;
        var1 = function(arg1, arg2) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var8 = arg1;
                var4 = _closure1_slot5;
                var3 = var4.getChannel;
                var4 = var3.bind(var4)(var8);
                var _closure3_slot0 = var4;
                var3 = null;
                if(!(var3 != var4)) { _fun0005_ip = 28; continue _fun0005 }
case 29:
                var5 = _closure1_slot18;
                var3 = _closure2_slot0;
                var4 = undefined;
                var3 = var5.bind(var4)(var3);
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 18;
                var3 = var5[var3];
                var7 = var6.bind(var4)(var3);
                var6 = var7.fetchMessages;
                var3 = arg2;
                var3 = var6.bind(var7)(var8, var3);
                var3 = _closure1_slot0;
                var2 = 9;
                var2 = var5[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.performKeyboardAwareNavigation;
                var1 = function() {
                    var6 = _closure1_slot19;
                    var10 = _closure2_slot1;
                    var9 = _closure3_slot0;
                    var8 = _closure2_slot0;
                    var7 = _closure2_slot2;
                    var1 = undefined;
                    var11 = undefined;
                    var2 = var11[var6](var10, var9, var8, var7, var6);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
case 28:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useOnPressMessageItem'] = var5;
    var5 = function useOnPressMediaItem(arg1) {
        var2 = arg1;
        var10 = var2.searchContext;
        var _closure2_slot0 = var10;
        var7 = var2.allMediaResults;
        var _closure2_slot1 = var7;
        var6 = var2.onEndReached;
        var _closure2_slot2 = var6;
        var5 = var2.onEndReachedThreshold;
        var _closure2_slot3 = var5;
        var11 = _closure1_slot0;
        var12 = _closure1_slot2;
        var3 = 16;
        var3 = var12[var3];
        var8 = undefined;
        var4 = var11.bind(var8)(var3);
        var3 = var4.useNavigation;
        var9 = var3.bind(var4)();
        var _closure2_slot4 = var9;
        var4 = _closure1_slot4;
        var3 = var4.useContext;
        var2 = 17;
        var2 = var12[var2];
        var2 = var11.bind(var8)(var2);
        var2 = var2.SwipeForMemberListContext;
        var8 = var3.bind(var4)(var2);
        var _closure2_slot5 = var8;
        var3 = var4.useCallback;
        var2 = new Array(6);
        var2[0] = var10;
        var2[1] = var9;
        var2[2] = var8;
        var2[3] = var7;
        var2[4] = var6;
        var2[5] = var5;
        var1 = function(arg1, arg2) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var4 = arg1;
                var _closure3_slot0 = var4;
                var1 = arg2;
                var _closure3_slot1 = var1;
                var6 = _closure1_slot18;
                var5 = _closure2_slot0;
                var1 = undefined;
                var5 = var6.bind(var1)(var5);
                var6 = var4.type;
                var5 = _closure1_slot7;
                var5 = var5.AUDIO;
                if(!(var5 !== var6)) { _fun0006_ip = 18; continue _fun0006 }
case 30:
                var5 = _closure1_slot7;
                var5 = var5.ATTACHMENT;
                if(!(var5 !== var6)) { _fun0006_ip = 31; continue _fun0006 }
case 24:
                var5 = _closure1_slot7;
                var5 = var5.EMBED;
                if(!(var5 === var6)) { _fun0006_ip = 32; continue _fun0006 }
case 31:
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var6 = 21;
                var6 = var5[var6];
                var7 = var7.bind(var1)(var6);
                var6 = 20;
                var6 = var5[var6];
                var5 = var5.paths;
                var7 = var7.bind(var1)(var6, var5);
                var6 = var7.then;
                var5 = function(arg1) {
                    var1 = arg1;
                    var4 = var1.openMediaModal;
                    var1 = 0;
                    var _closure4_slot0 = var1;
                    var _closure4_slot1 = var1;
                    var5 = new Array(0);
                    var _closure4_slot2 = var5;
                    var7 = _closure2_slot1;
                    var6 = var7.forEach;
                    var3 = function(arg1) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            var4 = arg1;
                            var3 = var4.type;
                            var1 = _closure1_slot7;
                            var1 = var1.ATTACHMENT;
                            var1 = var3 !== var1;
                            if(!var1) { _fun0007_ip = 33; continue _fun0007 }
case 34:
                            var3 = var4.type;
                            var2 = _closure1_slot7;
                            var2 = var2.EMBED;
                            var1 = var3 !== var2;
case 33:
                            if(var1) { _fun0007_ip = 32; continue _fun0007 }
case 35:
                            var5 = _closure4_slot2;
                            var3 = var5.push;
                            var1 = var4.sources;
                            var1 = var3.bind(var5)(var1);
                            var5 = var4.messageId;
                            var1 = _closure3_slot0;
                            var1 = var1.messageId;
                            var1 = var5 === var1;
                            if(!var1) { _fun0007_ip = 36; continue _fun0007 }
case 37:
                            var4 = var4.mediaIndex;
                            var3 = _closure3_slot0;
                            var3 = var3.mediaIndex;
                            var1 = var4 === var3;
case 36:
                            if(!var1) { _fun0007_ip = 38; continue _fun0007 }
case 39:
                            var1 = _closure4_slot0;
                            _closure4_slot1 = var1;
case 38:
                            var1 = _closure4_slot0;
                            var1 = var1 + 1;
                            _closure4_slot0 = var1;
case 32:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var3 = var6.bind(var7)(var3);
                    var3 = {};
                    var3['initialSources'] = var5;
                    var2 = _closure4_slot1;
                    var3['initialIndex'] = var2;
                    var2 = _closure2_slot2;
                    var3['onEndReached'] = var2;
                    var1 = _closure2_slot3;
                    var3['onEndReachedThreshold'] = var1;
                    var1 = 'Search';
                    var3['analyticsSource'] = var1;
                    var1 = true;
                    var3['disableRemix'] = var1;
                    var2 = _closure3_slot1;
                    var1 = undefined;
                    var2 = var4.bind(var1)(var3, var2);
                    return var1;
                };
                var5 = var6.bind(var7)(var5);
case 32:
                return var1;
case 18:
                var7 = _closure1_slot5;
                var6 = var7.getChannel;
                var5 = var4.channelId;
                var6 = var6.bind(var7)(var5);
                var _closure3_slot2 = var6;
                var5 = null;
                if(!(var5 != var6)) { _fun0006_ip = 40; continue _fun0006 }
case 26:
                var7 = _closure1_slot1;
                var5 = _closure1_slot2;
                var6 = 18;
                var6 = var5[var6];
                var8 = var7.bind(var1)(var6);
                var7 = var8.fetchMessages;
                var6 = var4.channelId;
                var4 = var4.messageId;
                var4 = var7.bind(var8)(var6, var4);
                var4 = _closure1_slot0;
                var3 = 9;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.performKeyboardAwareNavigation;
                var2 = function() {
                    var6 = _closure1_slot19;
                    var10 = _closure2_slot4;
                    var9 = _closure3_slot2;
                    var8 = _closure2_slot0;
                    var7 = _closure2_slot5;
                    var1 = undefined;
                    var11 = undefined;
                    var2 = var11[var6](var10, var9, var8, var7, var6);
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                var2 = undefined;
                return var2;
case 40:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useOnPressMediaItem'] = var5;
    var5 = function useOnPressGroupDMItem(arg1) {
        var2 = arg1;
        var5 = var2.searchContext;
        var _closure2_slot0 = var5;
        var6 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 16;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var6.bind(var3)(var4);
        var3 = var4.useNavigation;
        var6 = var3.bind(var4)();
        var _closure2_slot1 = var6;
        var4 = _closure1_slot4;
        var3 = var4.useCallback;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var8 = arg1;
                var _closure3_slot0 = var8;
                var7 = _closure1_slot17;
                var6 = _closure2_slot0;
                var5 = {};
                var1 = _closure1_slot8;
                var1 = var1.GROUP_DM;
                var5['type'] = var1;
                var5['channelId'] = var8;
                var1 = undefined;
                var5 = var7.bind(var1)(var6, var5);
                var5 = _closure2_slot1;
                var4 = var5.getParent;
                var5 = var4.bind(var5)();
                var4 = null;
                if(!(var4 != var5)) { _fun0008_ip = 41; continue _fun0008 }
case 14:
                var4 = var5.goBack;
                var4 = var4.bind(var5)();
case 41:
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var4 = 22;
                var4 = var5[var4];
                var7 = var6.bind(var1)(var4);
                var6 = var7.preload;
                var4 = _closure1_slot14;
                var4 = var6.bind(var7)(var4, var8);
                var4 = _closure1_slot0;
                var3 = 9;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.performKeyboardAwareNavigation;
                var2 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 23;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.transitionToChannel;
                    var2 = _closure3_slot0;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useOnPressGroupDMItem'] = var5;
    var5 = function useOnPressDMItem(arg1) {
        var2 = arg1;
        var5 = var2.searchContext;
        var _closure2_slot0 = var5;
        var6 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 16;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var6.bind(var3)(var4);
        var3 = var4.useNavigation;
        var6 = var3.bind(var4)();
        var _closure2_slot1 = var6;
        var4 = _closure1_slot4;
        var3 = var4.useCallback;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function(arg1, arg2) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var1 = arg2;
                var _closure3_slot0 = var1;
                var8 = _closure1_slot17;
                var7 = _closure2_slot0;
                var6 = {};
                var5 = _closure1_slot8;
                var5 = var5.DM;
                var6['type'] = var5;
                var5 = arg1;
                var6['userId'] = var5;
                var5 = undefined;
                var6 = var8.bind(var5)(var7, var6);
                var6 = _closure2_slot1;
                var4 = var6.getParent;
                var6 = var4.bind(var6)();
                var4 = null;
                if(!(var4 != var6)) { _fun0009_ip = 31; continue _fun0009 }
case 42:
                var4 = var6.goBack;
                var4 = var4.bind(var6)();
case 31:
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var4 = 22;
                var4 = var6[var4];
                var8 = var7.bind(var5)(var4);
                var7 = var8.preload;
                var4 = _closure1_slot14;
                var4 = var7.bind(var8)(var4, var1);
                var4 = _closure1_slot0;
                var3 = 9;
                var3 = var6[var3];
                var4 = var4.bind(var5)(var3);
                var3 = var4.performKeyboardAwareNavigation;
                var2 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 23;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.transitionToChannel;
                    var2 = _closure3_slot0;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useOnPressDMItem'] = var5;
    var5 = function useOnPressGuildTextChannel(arg1) {
        var2 = arg1;
        var5 = var2.searchContext;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot4;
        var3 = var4.useCallback;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var5 = _closure1_slot5;
                var2 = var5.getChannel;
                var1 = arg1;
                var5 = var2.bind(var5)(var1);
                var _closure3_slot0 = var5;
                var1 = null;
                if(!(var1 != var5)) { _fun0010_ip = 43; continue _fun0010 }
case 44:
                var8 = _closure1_slot17;
                var7 = _closure2_slot0;
                var6 = {};
                var2 = _closure1_slot8;
                var2 = var2.GUILD_TEXT_CHANNEL;
                var6['type'] = var2;
                var2 = var5.id;
                var6['channelId'] = var2;
                var2 = undefined;
                var6 = var8.bind(var2)(var7, var6);
                var8 = _closure1_slot1;
                var6 = _closure1_slot2;
                var7 = 22;
                var7 = var6[var7];
                var9 = var8.bind(var2)(var7);
                var8 = var9.preload;
                var7 = var5.guild_id;
                var5 = var5.id;
                var5 = var8.bind(var9)(var7, var5);
                var5 = _closure1_slot0;
                var4 = 9;
                var4 = var6[var4];
                var5 = var5.bind(var2)(var4);
                var4 = var5.performKeyboardAwareNavigation;
                var3 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 23;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.transitionToChannel;
                    var1 = _closure3_slot0;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3 = var4.bind(var5)(var3);
                return var2;
case 43:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useOnPressGuildTextChannel'] = var5;
    var3['handleVoiceOrStageChannelConnectPress'] = var4;
    var4 = function useOnPressGuildVoiceChannel(arg1) {
        var2 = arg1;
        var5 = var2.searchContext;
        var _closure2_slot0 = var5;
        var6 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 16;
        var3 = var4[var3];
        var4 = undefined;
        var6 = var6.bind(var4)(var3);
        var3 = var6.useNavigation;
        var7 = var3.bind(var6)();
        var _closure2_slot1 = var7;
        var3 = function useVoiceChannelOnPressHandler() {
            var4 = _closure1_slot4;
            var3 = var4.useCallback;
            var2 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                            StartGenerator();
                            var6 = arg1;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0011_ip = 45; continue _fun0011 }
case 46:
                            var _closure6_slot0 = var6;
                            var7 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 26;
                            var4 = var4[var2];
                            var2 = undefined;
                            var8 = var7.bind(var2)(var4);
                            var7 = var8.maybeOpenAgeGateForVoiceChannel;
                            var4 = var6.id;
                            var4 = var7.bind(var8)(var4);
                            if(var4) { _fun0011_ip = 47; continue _fun0011 }
case 48:
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var4 = 27;
                            var4 = var8[var4];
                            var8 = var7.bind(var2)(var4);
                            var7 = var8.getChannelRoleSubscriptionStatus;
                            var4 = var6.id;
                            var4 = var7.bind(var8)(var4);
                            var4 = var4.needSubscriptionToAccess;
                            var7 = var6.getGuildId;
                            var7 = var7.bind(var6)();
                            var8 = null;
                            if(!(var8 != var7)) { _fun0011_ip = 49; continue _fun0011 }
case 20:
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var8 = 28;
                            var8 = var10[var8];
                            var9 = var9.bind(var2)(var8);
                            var8 = var9.shouldShowMembershipVerificationGate;
                            var8 = var8.bind(var9)(var7);
                            if(var8) { _fun0011_ip = 50; continue _fun0011 }
case 49:
                            if(var4) { _fun0011_ip = 51; continue _fun0011 }
case 52:
                            var4 = _closure1_slot20;
                            var4 = var4.bind(var2)(var6);
                            var4 = undefined;
                            _fun0011_ip = 53; continue _fun0011;
case 51:
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var8 = 30;
                            var8 = var10[var8];
                            var9 = var9.bind(var2)(var8);
                            var8 = var9.transitionTo;
                            var12 = _closure1_slot12;
                            var11 = var12.CHANNEL;
                            var10 = var6.guild_id;
                            var6 = _closure1_slot16;
                            var6 = var6.ROLE_SUBSCRIPTIONS;
                            var6 = var11.bind(var12)(var10, var6);
                            var4 = var8.bind(var9)(var6);
case 53:
                            _fun0011_ip = 54; continue _fun0011;
case 50:
                            var8 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var6 = 21;
                            var6 = var3[var6];
                            var8 = var8.bind(var2)(var6);
                            var6 = 29;
                            var6 = var3[var6];
                            var3 = var3.paths;
                            var3 = var8.bind(var2)(var6, var3);
                            SaveGenerator(address=280);
case 55:
                            return var3;
case 56:
                            ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                            if(var6) { _fun0011_ip = 57; continue _fun0011 }
case 58:
                            var6 = var3.openMemberVerificationModal;
                            var5 = function() {
                                var3 = _closure1_slot20;
                                var2 = _closure6_slot0;
                                var1 = undefined;
                                var1 = var3.bind(var1)(var2);
                                return var1;
                            };
                            var4 = var6.bind(var2)(var7, var5);
case 54:
                            return var4;
case 57:
                            return var3;
case 47:
                            return var2;
case 45:
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
            var1 = undefined;
            var2 = var2.bind(var1)();
            var1 = new Array(0);
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var6 = var3.bind(var4)();
        var _closure2_slot2 = var6;
        var4 = _closure1_slot4;
        var3 = var4.useCallback;
        var2 = new Array(3);
        var2[0] = var7;
        var2[1] = var6;
        var2[2] = var5;
        var1 = function(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var5 = _closure1_slot5;
                var2 = var5.getChannel;
                var1 = arg1;
                var2 = var2.bind(var5)(var1);
                var _closure3_slot0 = var2;
                var1 = null;
                if(!(var1 != var2)) { _fun0012_ip = 21; continue _fun0012 }
case 29:
                var8 = _closure1_slot17;
                var7 = _closure2_slot0;
                var6 = {};
                var9 = _closure1_slot8;
                var9 = var9.GUILD_VOICE_CHANNEL;
                var6['type'] = var9;
                var2 = var2.id;
                var6['channelId'] = var2;
                var2 = undefined;
                var6 = var8.bind(var2)(var7, var6);
                var6 = _closure2_slot1;
                var5 = var6.getParent;
                var6 = var5.bind(var6)();
                if(!(var1 != var6)) { _fun0012_ip = 59; continue _fun0012 }
case 60:
                var5 = var6.goBack;
                var5 = var5.bind(var6)();
case 59:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 9;
                var4 = var6[var4];
                var5 = var5.bind(var2)(var4);
                var4 = var5.performKeyboardAwareNavigation;
                var3 = function() {
                    var3 = _closure2_slot2;
                    var2 = _closure3_slot0;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var3 = var4.bind(var5)(var3);
                return var2;
case 21:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useOnPressGuildVoiceChannel'] = var4;
    var2 = function useOnPressSearchHistoryText(arg1) {
        var2 = arg1;
        var5 = var2.searchContext;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot4;
        var3 = var4.useCallback;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function(arg1, arg2) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var1 = arg1;
                var4 = arg2;
                var _closure3_slot0 = var1;
                var _closure3_slot1 = var4;
                var7 = _closure1_slot17;
                var6 = _closure2_slot0;
                var5 = {};
                var8 = _closure1_slot8;
                var8 = var8.TEXT;
                var5['type'] = var8;
                var5['text'] = var1;
                var5['tags'] = var4;
                var1 = undefined;
                var5 = var7.bind(var1)(var6, var5);
                var8 = _closure1_slot6;
                var7 = var8.setState;
                var5 = function(arg1) {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                        var3 = arg1;
                        var4 = _closure3_slot1;
                        var2 = null;
                        if(!(var2 != var4)) { _fun0014_ip = 61; continue _fun0014 }
case 62:
                        var4 = var3.setTags;
                        var2 = _closure3_slot1;
                        var2 = var4.bind(var3)(var2);
case 61:
                        var2 = var3.setTextInputValue;
                        var1 = _closure3_slot0;
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    }
                };
                var5 = var7.bind(var8)(var6, var5);
                var5 = _closure1_slot1;
                var7 = _closure1_slot2;
                var3 = 9;
                var3 = var7[var3];
                var5 = var5.bind(var1)(var3);
                var3 = var5.fetchInitialMessages;
                var3 = var3.bind(var5)(var6);
                var3 = null;
                if(!(var3 != var4)) { _fun0013_ip = 63; continue _fun0013 }
case 64:
                var3 = var4.forEach;
                var2 = function(arg1) {
                    _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                        var5 = arg1;
                        var2 = var5.type;
                        var1 = _closure1_slot9;
                        var1 = var1.COMPLETE;
                        if(!(var2 === var1)) { _fun0015_ip = 37; continue _fun0015 }
case 65:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 31;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.trackSearchFilterAdd;
                        var1 = {};
                        var6 = _closure2_slot0;
                        var1['searchContext'] = var6;
                        var5 = var5.searchTokenType;
                        var1['searchTokenType'] = var5;
                        var4 = _closure1_slot11;
                        var4 = var4.SEARCH_HISTORY;
                        var1['location'] = var4;
                        var1 = var2.bind(var3)(var1);
case 37:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
case 63:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useOnPressSearchHistoryText'] = var2;
    return var1;
})();