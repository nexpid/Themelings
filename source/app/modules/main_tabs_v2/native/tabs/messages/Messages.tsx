// app/modules/main_tabs_v2/native/tabs/messages/Messages.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = ['height'];
    var _closure1_slot3 = var1;
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
    var _closure1_slot4 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
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
    var4 = var8.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useYouBarTotalHeight;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot10 = var8;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = function() {
        var1 = {};
        var2 = {};
        var3 = 1;
        var2['flex'] = var3;
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var3 = 8;
        var7 = var6[var3];
        var4 = undefined;
        var7 = var5.bind(var4)(var7);
        var7 = var7.colors;
        var7 = var7.PANEL_BG;
        var2['backgroundColor'] = var7;
        var1['container'] = var2;
        var2 = {};
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.colors;
        var3 = var3.BORDER_SUBTLE;
        var2['backgroundColor'] = var3;
        var1['placeholder'] = var2;
        return var1;
    };
    var4 = var8.bind(var9)(var4);
    var _closure1_slot12 = var4;
    var4 = {};
    var8 = 'function MessagesTsx1(event){const{scrollPosition,handleGuildsNavigationScroll}=this.__closure;scrollPosition.set(event.contentOffset.y);handleGuildsNavigationScroll(event.contentOffset.y,event.contentSize.height,event.layoutMeasurement.height);}';
    var4['code'] = var8;
    var _closure1_slot13 = var4;
    var4 = var7.memo;
    var2 = function Messages(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var17 = var1.style;
            var1 = _closure1_slot12;
            var4 = undefined;
            var8 = var1.bind(var4)();
            var _closure2_slot0 = var8;
            var10 = _closure1_slot1;
            var16 = _closure1_slot2;
            var1 = 9;
            var2 = var16[var1];
            var5 = var10.bind(var4)(var2);
            var2 = 10;
            var2 = var16[var2];
            var2 = var10.bind(var4)(var2);
            var2 = var2.MESSAGES;
            var2 = var5.bind(var4)(var2);
            var5 = var2.analyticsLocations;
            var2 = _closure1_slot0;
            var6 = 11;
            var7 = var16[var6];
            var12 = var2.bind(var4)(var7);
            var11 = var12.useSharedValue;
            var7 = 0;
            var14 = var11.bind(var12)(var7);
            var _closure2_slot1 = var14;
            var7 = _closure1_slot9;
            var11 = var7.bind(var4)();
            var7 = 12;
            var7 = var16[var7];
            var12 = var2.bind(var4)(var7);
            var7 = var12.useMobileQuestDockHeight;
            var7 = var7.bind(var12)();
            var29 = var11 + var7;
            var7 = 13;
            var7 = var16[var7];
            var7 = var10.bind(var4)(var7);
            var11 = var7.bind(var4)();
            var15 = var11.headerSize;
            var13 = var11.listItemSizes;
            var32 = var13.height;
            var _closure2_slot2 = var32;
            var12 = _closure1_slot4;
            var7 = _closure1_slot3;
            var7 = var12.bind(var4)(var13, var7);
            var _closure2_slot3 = var7;
            var26 = var11.listItemSuggestedFriendHeight;
            var _closure2_slot4 = var26;
            var18 = var11.listLeft;
            var _closure2_slot5 = var18;
            var34 = var11.listTop;
            var _closure2_slot6 = var34;
            var21 = var11.scrollIndicatorInsetEnd;
            var11 = 14;
            var11 = var16[var11];
            var11 = var10.bind(var4)(var11);
            var11 = var11.bind(var4)();
            var31 = var11.channels;
            var _closure2_slot7 = var31;
            var20 = var11.channelFavorites;
            var _closure2_slot8 = var20;
            var27 = var11.dataKey;
            var _closure2_slot9 = var27;
            var35 = var11.friendSuggestions;
            var _closure2_slot10 = var35;
            var33 = var11.renderHeader;
            var _closure2_slot11 = var33;
            var23 = var11.renderFooter;
            var _closure2_slot12 = var23;
            var19 = var11.sections;
            var _closure2_slot13 = var19;
            var24 = var11.setAddedFriendSuggestions;
            var _closure2_slot14 = var24;
            var11 = var11.showFullscreenEmptyState;
            var30 = _closure1_slot5;
            var13 = var30.useRef;
            var12 = null;
            var25 = var13.bind(var30)(var12);
            var13 = var30.useRef;
            var36 = var13.bind(var30)(var12);
            var _closure2_slot15 = var36;
            var13 = 15;
            var13 = var16[var13];
            var28 = var10.bind(var4)(var13);
            var22 = var28.useConfig;
            var13 = {};
            var37 = 'Messages Tab';
            var13['location'] = var37;
            var13 = var22.bind(var28)(var13);
            var13 = var13.enabled;
            var22 = 16;
            var22 = var16[var22];
            var28 = var10.bind(var4)(var22);
            var22 = {};
            var22['listRef'] = var25;
            var22['listRefHappeningNow'] = var36;
            var22 = var28.bind(var4)(var22);
            var22 = 17;
            var22 = var16[var22];
            var22 = var10.bind(var4)(var22);
            var22 = var22.bind(var4)();
            var22 = 18;
            var22 = var16[var22];
            var36 = var2.bind(var4)(var22);
            var28 = var36.useCommonTriggerPoint;
            var22 = 19;
            var22 = var16[var22];
            var22 = var2.bind(var4)(var22);
            var22 = var22.DmGdmListRenderTriggerPoint;
            var22 = var28.bind(var36)(var22);
            var22 = 20;
            var22 = var16[var22];
            var28 = var10.bind(var4)(var22);
            var22 = 'Messages';
            var22 = var28.bind(var4)(var22);
            var _closure2_slot16 = var22;
            var36 = var30.useEffect;
            var28 = new Array(1);
            var28[0] = var27;
            var27 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot9;
                    var5 = null;
                    if(!(var5 != var1)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 21;
                    var2 = var3[var2];
                    var3 = undefined;
                    var4 = var4.bind(var3)(var2);
                    var2 = var4.isAndroid;
                    var2 = var2.bind(var4)();
                    if(var2) { _fun0002_ip = 2; continue _fun0002 }
case 4:
                    var2 = _closure1_slot7;
                    var2 = var2.useReducedMotion;
                    if(var2) { _fun0002_ip = 2; continue _fun0002 }
case 5:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var9 = 22;
                    var2 = var2[var9];
                    var4 = var4.bind(var3)(var2);
                    var2 = var4.getRootNavigationRef;
                    var6 = var2.bind(var4)();
                    var2 = var5 != var6;
                    if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var4 = var6.isReady;
                    var2 = var4.bind(var6)();
case 6:
                    if(!var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var8 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var6 = 23;
                    var6 = var4[var6];
                    var7 = var8.bind(var3)(var6);
                    var6 = var7.coerceGuildsRoute;
                    var4 = var4[var9];
                    var8 = var8.bind(var3)(var4);
                    var4 = var8.getRootNavigationRef;
                    var9 = var4.bind(var8)();
                    var8 = var5 == var9;
                    var4 = undefined;
                    if(var8) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var8 = var9.getCurrentRoute;
                    var4 = var8.bind(var9)();
case 10:
                    var4 = var6.bind(var7)(var4);
                    var2 = var5 != var4;
case 8:
                    if(!var2) { _fun0002_ip = 2; continue _fun0002 }
case 12:
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 24;
                    var1 = var4[var1];
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.DeprecatedLayoutAnimation;
                    var1 = var1.bind(var2)();
case 2:
                    var1 = undefined;
                    return var1;
                }
            };
            var27 = var36.bind(var30)(var27, var28);
            var28 = var30.useLayoutEffect;
            var27 = function() {
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 25;
                var3 = var5[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.trackAppUIViewed;
                var3 = var3.bind(var4)();
                var4 = _closure1_slot1;
                var3 = 26;
                var3 = var5[var3];
                var5 = var4.bind(var1)(var3);
                var4 = var5.recordRender;
                var8 = _closure2_slot13;
                var7 = var8.reduce;
                var6 = function(arg1, arg2) {
                    var2 = arg1;
                    var1 = arg2;
                    var1 = var2 + var1;
                    return var1;
                };
                var3 = 0;
                var3 = var7.bind(var8)(var6, var3);
                var6 = _closure1_slot8;
                var2 = var6.isConnected;
                var2 = var2.bind(var6)();
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var27 = var28.bind(var30)(var27);
            var36 = var30.useEffect;
            var28 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 27;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var4 = var2.ReplyNudgeExperiment;
                var3 = var4.getConfig;
                var2 = {};
                var5 = 'DM List';
                var2['location'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var27 = new Array(0);
            var27 = var36.bind(var30)(var28, var27);
            var28 = var30.useCallback;
            var27 = new Array(6);
            var27[0] = var20;
            var27[1] = var32;
            var27[2] = var31;
            var27[3] = var35;
            var27[4] = var24;
            var27[5] = var26;
            var24 = function(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var8 = arg1;
                    var5 = arg2;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var6 = 14;
                    var2 = var2[var6];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var2 = var2.MessagesDataSections;
                    var2 = var2.FavoriteChannels;
                    if(!(var2 !== var8)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var2 = var3.bind(var4)(var2);
                    var2 = var2.MessagesDataSections;
                    var2 = var2.Channels;
                    if(!(var2 !== var8)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var2 = var3.bind(var4)(var2);
                    var2 = var2.MessagesDataSections;
                    var2 = var2.Separator;
                    if(!(var2 !== var8)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var2 = var3.bind(var4)(var2);
                    var2 = var2.MessagesDataSections;
                    var2 = var2.SuggestedFriends;
                    if(!(var2 !== var8)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var2 = var3.bind(var4)(var2);
                    var2 = var2.MessagesDataSections;
                    var2 = var2.Placeholders;
                    if(!(var2 !== var8)) { _fun0003_ip = 21; continue _fun0003 }
case 22:
                    var2 = global;
                    var6 = var2.Error;
                    var2 = var2.HermesInternal;
                    var7 = var2.concat;
                    var3 = 'Invalid section ';
                    var2 = ' in Messages renderItem';
                    var11 = var7.bind(var3)(var8, var2);
                    var3 = var6.prototype;
                    var3 = Object.create(var3, {constructor: {value: var6}});
                    var12 = var3;
                    var2 = new var12[var6](var11, var10);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
case 21:
                    var6 = _closure1_slot10;
                    var3 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var2 = 31;
                    var2 = var7[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var2['row'] = var5;
                    var7 = _closure2_slot2;
                    var2['height'] = var7;
                    var2 = var6.bind(var4)(var3, var2);
                    return var2;
case 19:
                    var7 = {};
                    var2 = _closure2_slot10;
                    var2 = var2[var5];
                    var7['suggestedFriend'] = var2;
                    var2 = _closure2_slot14;
                    var7['onAddFriendSuggestions'] = var2;
                    var6 = _closure1_slot10;
                    var3 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var2 = 30;
                    var2 = var9[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var8 = _closure2_slot4;
                    var2['height'] = var8;
                    var11 = var2;
                    var10 = var7;
                    var7 = copyDataProperties(var11, var10);
                    var2 = var6.bind(var4)(var3, var2);
                    return var2;
case 17:
                    var6 = _closure1_slot10;
                    var3 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var2 = 29;
                    var2 = var7[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var2 = var6.bind(var4)(var3, var2);
                    return var2;
case 15:
                    var6 = _closure1_slot10;
                    var3 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var2 = 28;
                    var2 = var7[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var8 = _closure2_slot7;
                    var8 = var8[var5];
                    var8 = var8.channelId;
                    var2['channelId'] = var8;
                    var7 = _closure2_slot2;
                    var2['placeholderHeight'] = var7;
                    var2['row'] = var5;
                    var2 = var6.bind(var4)(var3, var2);
                    return var2;
case 13:
                    var3 = _closure1_slot10;
                    var2 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var1 = 28;
                    var1 = var6[var1];
                    var2 = var2.bind(var4)(var1);
                    var1 = {};
                    var7 = _closure2_slot8;
                    var7 = var7[var5];
                    var7 = var7.channelId;
                    var1['channelId'] = var7;
                    var6 = _closure2_slot2;
                    var1['placeholderHeight'] = var6;
                    var1['row'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var24 = var28.bind(var30)(var24, var27);
            var28 = var30.useMemo;
            var27 = new Array(3);
            var27[0] = var34;
            var27[1] = var18;
            var27[2] = var14;
            var18 = function() {
                var1 = {};
                var3 = function getComponent(arg1, arg2, arg3) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 14;
                        var1 = var4[var1];
                        var5 = undefined;
                        var1 = var3.bind(var5)(var1);
                        var1 = var1.MessagesDataSections;
                        var4 = var1.SuggestedFriends;
                        var3 = arg1;
                        var1 = null;
                        if(!(var3 === var4)) { _fun0004_ip = 23; continue _fun0004 }
case 24:
                        var4 = _closure1_slot10;
                        var3 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var2 = 32;
                        var2 = var6[var2];
                        var3 = var3.bind(var5)(var2);
                        var2 = {};
                        var7 = _closure2_slot1;
                        var2['scrollPosition'] = var7;
                        var7 = arg3;
                        var2['stickyAt'] = var7;
                        var7 = _closure2_slot6;
                        var2['stickyTop'] = var7;
                        var6 = _closure2_slot5;
                        var2['stickyLeft'] = var6;
                        var1 = var4.bind(var5)(var3, var2);
case 23:
                        return var1;
                    }
                };
                var1['getComponent'] = var3;
                var2 = function getSize(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 14;
                        var1 = var4[var1];
                        var4 = undefined;
                        var1 = var3.bind(var4)(var1);
                        var1 = var1.MessagesDataSections;
                        var5 = var1.SuggestedFriends;
                        var3 = arg1;
                        var1 = 0;
                        if(!(var3 === var5)) { _fun0005_ip = 25; continue _fun0005 }
case 24:
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var2 = 32;
                        var2 = var5[var2];
                        var2 = var3.bind(var4)(var2);
                        var1 = var2.MESSAGES_ITEM_SUGGESTED_FRIENDS_HEADER_HEIGHT;
case 25:
                        return var1;
                    }
                };
                var1['getSize'] = var2;
                return var1;
            };
            var18 = var28.bind(var30)(var18, var27);
            var28 = var30.useMemo;
            var27 = new Array(2);
            var27[0] = var33;
            var27[1] = var22;
            var22 = function() {
                var1 = {};
                var3 = function getComponent() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var3 = _closure2_slot11;
                        var6 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var7 = 14;
                        var2 = var2[var7];
                        var4 = undefined;
                        var2 = var6.bind(var4)(var2);
                        var2 = var2.MessagesDataHeader;
                        var2 = var2.HappeningNow;
                        if(!(var2 !== var3)) { _fun0006_ip = 26; continue _fun0006 }
case 27:
                        var6 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var2 = var2[var7];
                        var2 = var6.bind(var4)(var2);
                        var2 = var2.MessagesDataHeader;
                        var2 = var2.EmptyState;
                        if(!(var2 !== var3)) { _fun0006_ip = 28; continue _fun0006 }
case 29:
                        var2 = null;
                        return var2;
case 28:
                        var6 = _closure1_slot10;
                        var3 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var2 = 34;
                        var2 = var7[var2];
                        var3 = var3.bind(var4)(var2);
                        var2 = {};
                        var2 = var6.bind(var4)(var3, var2);
                        return var2;
case 26:
                        var3 = _closure1_slot10;
                        var2 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var1 = 33;
                        var1 = var6[var1];
                        var2 = var2.bind(var4)(var1);
                        var1 = {};
                        var5 = _closure2_slot15;
                        var1['listRef'] = var5;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    }
                };
                var1['getComponent'] = var3;
                var2 = function getSize() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var5 = _closure2_slot11;
                        var6 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var7 = 14;
                        var3 = var3[var7];
                        var4 = undefined;
                        var3 = var6.bind(var4)(var3);
                        var3 = var3.MessagesDataHeader;
                        var3 = var3.HappeningNow;
                        if(!(var3 !== var5)) { _fun0007_ip = 30; continue _fun0007 }
case 27:
                        var6 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var3 = var3[var7];
                        var3 = var6.bind(var4)(var3);
                        var3 = var3.MessagesDataHeader;
                        var3 = var3.EmptyState;
                        if(!(var3 !== var5)) { _fun0007_ip = 28; continue _fun0007 }
case 29:
                        var3 = 0;
                        return var3;
case 28:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var3 = 34;
                        var3 = var6[var3];
                        var3 = var5.bind(var4)(var3);
                        var3 = var3.MESSAGES_ITEM_EMPTY_STATE_HEIGHT;
                        return var3;
case 30:
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var2 = 33;
                        var2 = var5[var2];
                        var3 = var3.bind(var4)(var2);
                        var2 = var3.getMessagesItemHappeningNowHeight;
                        var1 = _closure2_slot16;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    }
                };
                var1['getSize'] = var2;
                return var1;
            };
            var22 = var28.bind(var30)(var22, var27);
            var28 = var30.useMemo;
            var27 = new Array(1);
            var27[0] = var23;
            var23 = function() {
                var1 = {};
                var3 = function getComponent() {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var2 = _closure2_slot12;
                        var1 = null;
                        if(!var2) { _fun0008_ip = 31; continue _fun0008 }
case 32:
                        var5 = _closure1_slot10;
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 35;
                        var2 = var4[var2];
                        var4 = undefined;
                        var3 = var3.bind(var4)(var2);
                        var2 = {};
                        var1 = var5.bind(var4)(var3, var2);
case 31:
                        return var1;
                    }
                };
                var1['getComponent'] = var3;
                var2 = function getSize() {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var2 = _closure2_slot12;
                        var1 = 0;
                        if(!var2) { _fun0009_ip = 33; continue _fun0009 }
case 32:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 35;
                        var3 = var3[var2];
                        var2 = undefined;
                        var2 = var4.bind(var2)(var3);
                        var1 = var2.MESSAGES_ITEM_ADD_FRIENDS_WIDGET_HEIGHT;
case 33:
                        return var1;
                    }
                };
                var1['getSize'] = var2;
                return var1;
            };
            var23 = var28.bind(var30)(var23, var27);
            var28 = var30.useCallback;
            var27 = new Array(2);
            var27[0] = var32;
            var27[1] = var26;
            var26 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var7 = arg1;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var5 = 14;
                    var2 = var2[var5];
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var2 = var2.MessagesDataSections;
                    var2 = var2.FavoriteChannels;
                    if(!(var2 !== var7)) { _fun0010_ip = 34; continue _fun0010 }
case 35:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var5];
                    var2 = var4.bind(var3)(var2);
                    var2 = var2.MessagesDataSections;
                    var2 = var2.Channels;
                    if(!(var2 !== var7)) { _fun0010_ip = 34; continue _fun0010 }
case 36:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var5];
                    var2 = var4.bind(var3)(var2);
                    var2 = var2.MessagesDataSections;
                    var2 = var2.Placeholders;
                    if(!(var2 !== var7)) { _fun0010_ip = 34; continue _fun0010 }
case 26:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var5];
                    var2 = var4.bind(var3)(var2);
                    var2 = var2.MessagesDataSections;
                    var2 = var2.SuggestedFriends;
                    if(!(var2 !== var7)) { _fun0010_ip = 37; continue _fun0010 }
case 38:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var5];
                    var2 = var4.bind(var3)(var2);
                    var2 = var2.MessagesDataSections;
                    var2 = var2.Separator;
                    if(!(var2 !== var7)) { _fun0010_ip = 39; continue _fun0010 }
case 40:
                    var2 = global;
                    var5 = var2.Error;
                    var2 = var2.HermesInternal;
                    var6 = var2.concat;
                    var4 = 'Invalid section ';
                    var2 = ' in Messages renderItem';
                    var9 = var6.bind(var4)(var7, var2);
                    var4 = var5.prototype;
                    var4 = Object.create(var4, {constructor: {value: var5}});
                    var10 = var4;
                    var2 = new var10[var5](var9, var8);
                    var2 = var2 instanceof Object ? var2 : var4;
                    throw var2;
case 39:
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 29;
                    var1 = var4[var1];
                    var1 = var2.bind(var3)(var1);
                    var1 = var1.MESSAGES_ITEM_SEPERATOR_HEIGHT;
                    return var1;
case 37:
                    var1 = _closure2_slot4;
                    return var1;
case 34:
                    var1 = _closure2_slot2;
                    return var1;
                }
            };
            var27 = var28.bind(var30)(var26, var27);
            var28 = var30.useCallback;
            var26 = new Array(2);
            var26[0] = var31;
            var26[1] = var20;
            var20 = function(arg1, arg2, arg3) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var6 = arg1;
                    var4 = arg2;
                    var3 = arg3;
                    var7 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var8 = 36;
                    var5 = var1[var8];
                    var1 = undefined;
                    var5 = var7.bind(var1)(var5);
                    var5 = var5.SECTION_HEADER;
                    if(!(var5 !== var6)) { _fun0011_ip = 41; continue _fun0011 }
case 35:
                    var7 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var5 = var5[var8];
                    var5 = var7.bind(var1)(var5);
                    var5 = var5.SECTION_FOOTER;
                    if(!(var5 !== var6)) { _fun0011_ip = 41; continue _fun0011 }
case 42:
                    var7 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var5 = var5[var8];
                    var5 = var7.bind(var1)(var5);
                    var5 = var5.ITEM;
                    if(!(var5 !== var6)) { _fun0011_ip = 43; continue _fun0011 }
case 44:
                    return var1;
case 43:
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var6 = 14;
                    var5 = var5[var6];
                    var5 = var7.bind(var1)(var5);
                    var5 = var5.MessagesDataSections;
                    var5 = var5.FavoriteChannels;
                    if(!(var5 !== var4)) { _fun0011_ip = 45; continue _fun0011 }
case 46:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var2 = var5.bind(var1)(var2);
                    var2 = var2.MessagesDataSections;
                    var2 = var2.Channels;
                    if(!(var2 !== var4)) { _fun0011_ip = 11; continue _fun0011 }
case 47:
                    return var1;
case 11:
                    var2 = _closure2_slot7;
                    var2 = var2[var3];
                    var2 = var2.channelId;
                    return var2;
case 45:
                    var2 = _closure2_slot8;
                    var2 = var2[var3];
                    var2 = var2.channelId;
                    return var2;
case 41:
                    return var1;
                }
            };
            var28 = var28.bind(var30)(var20, var26);
            var26 = var30.useMemo;
            var20 = new Array(2);
            var20[0] = var8;
            var20[1] = var7;
            var7 = function() {
                var1 = {};
                var2 = {};
                var10 = _closure1_slot0;
                var7 = _closure1_slot2;
                var9 = 37;
                var3 = var7[var9];
                var6 = undefined;
                var3 = var10.bind(var6)(var3);
                var3 = var3.FastestListPropsPlaceholderType;
                var3 = var3.SHAPE;
                var2['type'] = var3;
                var8 = _closure2_slot0;
                var5 = var8.placeholder;
                var5 = var5.backgroundColor;
                var2['colorHex'] = var5;
                var5 = 'rect';
                var2['shape'] = var5;
                var5 = _closure1_slot1;
                var4 = 8;
                var11 = var7[var4];
                var11 = var5.bind(var6)(var11);
                var11 = var11.radii;
                var11 = var11.lg;
                var2['borderRadius'] = var11;
                var11 = var7[var4];
                var11 = var5.bind(var6)(var11);
                var11 = var11.spacing;
                var11 = var11.PX_8;
                var2['paddingHorizontal'] = var11;
                var11 = var7[var4];
                var11 = var5.bind(var6)(var11);
                var11 = var11.spacing;
                var11 = var11.PX_4;
                var2['paddingVertical'] = var11;
                var1['listHeader'] = var2;
                var2 = {};
                var9 = var7[var9];
                var9 = var10.bind(var6)(var9);
                var9 = var9.FastestListPropsPlaceholderType;
                var9 = var9.FEED_ITEM;
                var2['type'] = var9;
                var8 = var8.placeholder;
                var8 = var8.backgroundColor;
                var2['colorHex'] = var8;
                var8 = var7[var4];
                var8 = var5.bind(var6)(var8);
                var8 = var8.spacing;
                var8 = var8.PX_4;
                var2['labelPadding'] = var8;
                var3 = _closure2_slot3;
                var8 = var3.label;
                var2['labelSize'] = var8;
                var8 = var3.labelSecondary;
                var2['labelSecondarySize'] = var8;
                var4 = var7[var4];
                var4 = var5.bind(var6)(var4);
                var4 = var4.spacing;
                var4 = var4.PX_16;
                var2['padding'] = var4;
                var4 = 'circle';
                var2['shape'] = var4;
                var3 = var3.avatar;
                var2['shapeSize'] = var3;
                var1['sectionItem'] = var2;
                return var1;
            };
            var26 = var26.bind(var30)(var7, var20);
            var7 = 38;
            var7 = var16[var7];
            var30 = var2.bind(var4)(var7);
            var20 = var30.useExternalScrollEventHandler;
            var7 = {};
            var31 = 'messages';
            var7['id'] = var31;
            var30 = var20.bind(var30)(var7);
            var _closure2_slot17 = var30;
            var6 = var16[var6];
            var7 = var2.bind(var4)(var6);
            var6 = var7.useAnimatedScrollHandler;
            var3 = function Y(arg1) {
                var1 = arg1;
                var5 = _closure2_slot1;
                var4 = var5.set;
                var3 = var1.contentOffset;
                var3 = var3.y;
                var3 = var4.bind(var5)(var3);
                var5 = _closure2_slot17;
                var2 = var1.contentOffset;
                var4 = var2.y;
                var2 = var1.contentSize;
                var3 = var2.height;
                var1 = var1.layoutMeasurement;
                var2 = var1.height;
                var1 = undefined;
                var2 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var20 = {};
            var20['scrollPosition'] = var14;
            var20['handleGuildsNavigationScroll'] = var30;
            var3['__closure'] = var20;
            var20 = 5461403437592.0;
            var3['__workletHash'] = var20;
            var20 = _closure1_slot13;
            var3['__initData'] = var20;
            var20 = var6.bind(var7)(var3);
            var3 = _closure1_slot10;
            var1 = var16[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.AnalyticsLocationProvider;
            var1 = {};
            var1['value'] = var5;
            var7 = _closure1_slot11;
            var6 = _closure1_slot6;
            var5 = {};
            var30 = var8.container;
            var8 = new Array(2);
            var8[0] = var30;
            var8[1] = var17;
            var5['style'] = var8;
            var8 = 39;
            var8 = var16[var8];
            var10 = var10.bind(var4)(var8);
            var8 = {};
            var8['height'] = var15;
            var8['scrollPosition'] = var14;
            var10 = var3.bind(var4)(var10, var8);
            var8 = new Array(4);
            var8[0] = var10;
            var16 = _closure1_slot10;
            var15 = _closure1_slot1;
            var17 = _closure1_slot2;
            if(var11) { _fun0001_ip = 48; continue _fun0001 }
case 49:
            var10 = 41;
            var10 = var17[var10];
            var14 = var15.bind(var4)(var10);
            var10 = {};
            var10['insetEnd'] = var29;
            var32 = _closure1_slot0;
            var29 = 42;
            var30 = var17[var29];
            var30 = var32.bind(var4)(var30);
            var31 = var30.intl;
            var30 = var31.string;
            var29 = var17[var29];
            var29 = var32.bind(var4)(var29);
            var29 = var29.t;
            var29 = var29.OIgYlQ;
            var29 = var30.bind(var31)(var29);
            var10['accessibilityLabel'] = var29;
            var29 = 'windowSize';
            var10['estimatedListSize'] = var29;
            var10['keyExtractor'] = var28;
            var10['itemSize'] = var27;
            var27 = 'dm-messages-list';
            var10['listId'] = var27;
            var27 = var23.getSize;
            var10['listFooterSize'] = var27;
            var27 = true;
            var10['listFooterAlwaysMounted'] = var27;
            var28 = var22.getSize;
            var10['listHeaderSize'] = var28;
            var10['listHeaderAlwaysMounted'] = var27;
            var10['placeholderConfig'] = var26;
            var10['ref'] = var25;
            var10['renderItem'] = var24;
            var23 = var23.getComponent;
            var10['renderListFooter'] = var23;
            var22 = var22.getComponent;
            var10['renderListHeader'] = var22;
            var22 = var18.getComponent;
            var10['renderSectionHeader'] = var22;
            var10['scrollIndicatorInsetEnd'] = var21;
            var21 = 'animatedCallbacks';
            var10['scrollReporting'] = var21;
            var10['scrollHandlerAnimated'] = var20;
            var10['sections'] = var19;
            var18 = var18.getSize;
            var10['sectionHeaderSize'] = var18;
            var10 = var16.bind(var4)(var14, var10);
            _fun0001_ip = 50; continue _fun0001;
case 48:
            var14 = 40;
            var14 = var17[var14];
            var15 = var15.bind(var4)(var14);
            var14 = {};
            var10 = var16.bind(var4)(var15, var14);
case 50:
            var8[1] = var10;
            var10 = null;
            if(var13) { _fun0001_ip = 51; continue _fun0001 }
case 52:
            var10 = null;
            if(var11) { _fun0001_ip = 51; continue _fun0001 }
case 53:
            var13 = _closure1_slot10;
            var12 = _closure1_slot1;
            var14 = _closure1_slot2;
            var11 = 43;
            var11 = var14[var11];
            var12 = var12.bind(var4)(var11);
            var11 = {};
            var10 = var13.bind(var4)(var12, var11);
case 51:
            var8[2] = var10;
            var11 = _closure1_slot10;
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var9 = 44;
            var9 = var12[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.TTIFirstContentfulPaint;
            var9 = {};
            var12 = 'messages_tabs';
            var9['label'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var8[3] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 45;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/tabs/messages/Messages.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();