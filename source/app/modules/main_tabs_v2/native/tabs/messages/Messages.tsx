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
    var8 = var4.jsx;
    var _closure1_slot9 = var8;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 6;
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
        var3 = 7;
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
    var _closure1_slot11 = var4;
    var4 = {};
    var8 = 'function MessagesTsx1(event){const{scrollPosition,handleGuildsNavigationScroll}=this.__closure;scrollPosition.set(event.contentOffset.y);handleGuildsNavigationScroll(event.contentOffset.y,event.contentSize.height,event.layoutMeasurement.height);}';
    var4['code'] = var8;
    var _closure1_slot12 = var4;
    var4 = var7.memo;
    var2 = function Messages(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var9 = var1.style;
            var1 = _closure1_slot11;
            var4 = undefined;
            var10 = var1.bind(var4)();
            var _closure2_slot0 = var10;
            var13 = _closure1_slot1;
            var16 = _closure1_slot2;
            var1 = 8;
            var3 = var16[var1];
            var5 = var13.bind(var4)(var3);
            var3 = 9;
            var3 = var16[var3];
            var3 = var13.bind(var4)(var3);
            var3 = var3.MESSAGES;
            var3 = var5.bind(var4)(var3);
            var5 = var3.analyticsLocations;
            var8 = _closure1_slot0;
            var3 = 10;
            var6 = var16[var3];
            var12 = var8.bind(var4)(var6);
            var7 = var12.useSharedValue;
            var6 = 0;
            var14 = var7.bind(var12)(var6);
            var _closure2_slot1 = var14;
            var6 = 11;
            var7 = var16[var6];
            var12 = var8.bind(var4)(var7);
            var7 = var12.useYouBarTotalHeight;
            var12 = var7.bind(var12)();
            var7 = 12;
            var7 = var16[var7];
            var15 = var8.bind(var4)(var7);
            var7 = var15.useMobileQuestDockHeight;
            var7 = var7.bind(var15)();
            var28 = var12 + var7;
            var6 = var16[var6];
            var12 = var8.bind(var4)(var6);
            var7 = var12.useYouBarTotalHeight;
            var6 = -16;
            var20 = var7.bind(var12)(var6);
            var6 = 13;
            var6 = var16[var6];
            var6 = var13.bind(var4)(var6);
            var7 = var6.bind(var4)();
            var15 = var7.headerSize;
            var17 = var7.listItemSizes;
            var30 = var17.height;
            var _closure2_slot2 = var30;
            var12 = _closure1_slot4;
            var6 = _closure1_slot3;
            var6 = var12.bind(var4)(var17, var6);
            var _closure2_slot3 = var6;
            var19 = var7.listItemSuggestedFriendHeight;
            var _closure2_slot4 = var19;
            var17 = var7.listLeft;
            var _closure2_slot5 = var17;
            var32 = var7.listTop;
            var _closure2_slot6 = var32;
            var7 = 14;
            var7 = var16[var7];
            var7 = var13.bind(var4)(var7);
            var12 = var7.bind(var4)();
            var29 = var12.channels;
            var _closure2_slot7 = var29;
            var7 = var12.channelFavorites;
            var _closure2_slot8 = var7;
            var26 = var12.dataKey;
            var _closure2_slot9 = var26;
            var33 = var12.friendSuggestions;
            var _closure2_slot10 = var33;
            var31 = var12.renderHeader;
            var _closure2_slot11 = var31;
            var22 = var12.renderFooter;
            var _closure2_slot12 = var22;
            var18 = var12.sections;
            var _closure2_slot13 = var18;
            var23 = var12.setAddedFriendSuggestions;
            var _closure2_slot14 = var23;
            var12 = var12.showFullscreenEmptyState;
            var25 = _closure1_slot5;
            var21 = var25.useRef;
            var27 = null;
            var24 = var21.bind(var25)(var27);
            var21 = var25.useRef;
            var34 = var21.bind(var25)(var27);
            var _closure2_slot15 = var34;
            var21 = 15;
            var21 = var16[var21];
            var27 = var13.bind(var4)(var21);
            var21 = {};
            var21['listRef'] = var24;
            var21['listRefHappeningNow'] = var34;
            var21 = var27.bind(var4)(var21);
            var21 = 16;
            var21 = var16[var21];
            var21 = var13.bind(var4)(var21);
            var21 = var21.bind(var4)();
            var21 = 17;
            var21 = var16[var21];
            var34 = var8.bind(var4)(var21);
            var27 = var34.useCommonTriggerPoint;
            var21 = 18;
            var21 = var16[var21];
            var21 = var8.bind(var4)(var21);
            var21 = var21.DmGdmListRenderTriggerPoint;
            var21 = var27.bind(var34)(var21);
            var21 = 19;
            var21 = var16[var21];
            var27 = var13.bind(var4)(var21);
            var21 = 'Messages';
            var21 = var27.bind(var4)(var21);
            var _closure2_slot16 = var21;
            var34 = var25.useEffect;
            var27 = new Array(1);
            var27[0] = var26;
            var26 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot9;
                    var5 = null;
                    if(!(var5 != var1)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 20;
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
                    var9 = 21;
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
                    var6 = 22;
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
                    var1 = 23;
                    var1 = var4[var1];
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.DeprecatedLayoutAnimation;
                    var1 = var1.bind(var2)();
case 2:
                    var1 = undefined;
                    return var1;
                }
            };
            var26 = var34.bind(var25)(var26, var27);
            var27 = var25.useLayoutEffect;
            var26 = function() {
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 24;
                var3 = var5[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.trackAppUIViewed;
                var3 = var3.bind(var4)();
                var4 = _closure1_slot1;
                var3 = 25;
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
            var26 = var27.bind(var25)(var26);
            var27 = var25.useCallback;
            var26 = new Array(6);
            var26[0] = var7;
            var26[1] = var30;
            var26[2] = var29;
            var26[3] = var33;
            var26[4] = var23;
            var26[5] = var19;
            var23 = function(arg1, arg2) {
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
                    var6 = _closure1_slot9;
                    var3 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var2 = 29;
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
                    var6 = _closure1_slot9;
                    var3 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var2 = 28;
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
                    var6 = _closure1_slot9;
                    var3 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var2 = 27;
                    var2 = var7[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var2 = var6.bind(var4)(var3, var2);
                    return var2;
case 15:
                    var6 = _closure1_slot9;
                    var3 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var2 = 26;
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
                    var3 = _closure1_slot9;
                    var2 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var1 = 26;
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
            var23 = var27.bind(var25)(var23, var26);
            var27 = var25.useMemo;
            var26 = new Array(3);
            var26[0] = var32;
            var26[1] = var17;
            var26[2] = var14;
            var17 = function() {
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
                        var4 = _closure1_slot9;
                        var3 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var2 = 30;
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
                        var2 = 30;
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
            var17 = var27.bind(var25)(var17, var26);
            var27 = var25.useMemo;
            var26 = new Array(2);
            var26[0] = var31;
            var26[1] = var21;
            var21 = function() {
                var1 = {};
                var3 = function getComponent() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var2 = _closure2_slot11;
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var6 = 14;
                        var1 = var1[var6];
                        var4 = undefined;
                        var1 = var3.bind(var4)(var1);
                        var1 = var1.MessagesDataHeader;
                        var1 = var1.HappeningNow;
                        if(!(var1 !== var2)) { _fun0006_ip = 26; continue _fun0006 }
case 27:
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var1 = var1[var6];
                        var1 = var3.bind(var4)(var1);
                        var1 = var1.MessagesDataHeader;
                        var1 = var1.EmptyState;
                        if(!(var1 !== var2)) { _fun0006_ip = 28; continue _fun0006 }
case 29:
                        var1 = null;
                        return var1;
case 28:
                        var3 = _closure1_slot9;
                        var2 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var1 = 33;
                        var1 = var6[var1];
                        var2 = var2.bind(var4)(var1);
                        var1 = {};
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
case 26:
                        var3 = _closure1_slot9;
                        var2 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var1 = 31;
                        var1 = var8[var1];
                        var1 = var2.bind(var4)(var1);
                        var2 = var1.CutoutBackgroundProvider;
                        var1 = {};
                        var6 = null;
                        var1['backgroundColor'] = var6;
                        var6 = _closure1_slot1;
                        var5 = 32;
                        var5 = var8[var5];
                        var6 = var6.bind(var4)(var5);
                        var5 = {};
                        var7 = _closure2_slot15;
                        var5['listRef'] = var7;
                        var5 = var3.bind(var4)(var6, var5);
                        var1['children'] = var5;
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
                        var3 = 33;
                        var3 = var6[var3];
                        var3 = var5.bind(var4)(var3);
                        var3 = var3.MESSAGES_ITEM_EMPTY_STATE_HEIGHT;
                        return var3;
case 30:
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var2 = 32;
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
            var21 = var27.bind(var25)(var21, var26);
            var27 = var25.useMemo;
            var26 = new Array(1);
            var26[0] = var22;
            var22 = function() {
                var1 = {};
                var3 = function getComponent() {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var2 = _closure2_slot12;
                        var1 = null;
                        if(!var2) { _fun0008_ip = 31; continue _fun0008 }
case 32:
                        var5 = _closure1_slot9;
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 34;
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
                        var2 = 34;
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
            var22 = var27.bind(var25)(var22, var26);
            var27 = var25.useCallback;
            var26 = new Array(2);
            var26[0] = var30;
            var26[1] = var19;
            var19 = function(arg1) {
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
                    var1 = 27;
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
            var26 = var27.bind(var25)(var19, var26);
            var27 = var25.useCallback;
            var19 = new Array(2);
            var19[0] = var29;
            var19[1] = var7;
            var7 = function(arg1, arg2, arg3) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var6 = arg1;
                    var4 = arg2;
                    var3 = arg3;
                    var7 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var8 = 35;
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
            var27 = var27.bind(var25)(var7, var19);
            var19 = var25.useMemo;
            var7 = new Array(2);
            var7[0] = var10;
            var7[1] = var6;
            var6 = function() {
                var1 = {};
                var2 = {};
                var10 = _closure1_slot0;
                var7 = _closure1_slot2;
                var9 = 36;
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
                var4 = 7;
                var11 = var7[var4];
                var11 = var5.bind(var6)(var11);
                var11 = var11.radii;
                var11 = var11.lg;
                var2['borderRadius'] = var11;
                var11 = var7[var4];
                var11 = var5.bind(var6)(var11);
                var11 = var11.space;
                var11 = var11.PX_8;
                var2['paddingHorizontal'] = var11;
                var11 = var7[var4];
                var11 = var5.bind(var6)(var11);
                var11 = var11.space;
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
                var8 = var8.space;
                var8 = var8.PX_4;
                var2['labelPadding'] = var8;
                var3 = _closure2_slot3;
                var8 = var3.label;
                var2['labelSize'] = var8;
                var8 = var3.labelSecondary;
                var2['labelSecondarySize'] = var8;
                var4 = var7[var4];
                var4 = var5.bind(var6)(var4);
                var4 = var4.space;
                var4 = var4.PX_16;
                var2['padding'] = var4;
                var4 = 'circle';
                var2['shape'] = var4;
                var3 = var3.avatar;
                var2['shapeSize'] = var3;
                var1['sectionItem'] = var2;
                return var1;
            };
            var25 = var19.bind(var25)(var6, var7);
            var6 = 37;
            var6 = var16[var6];
            var19 = var8.bind(var4)(var6);
            var7 = var19.useExternalScrollEventHandler;
            var6 = {};
            var29 = 'messages';
            var6['id'] = var29;
            var19 = var7.bind(var19)(var6);
            var _closure2_slot17 = var19;
            var3 = var16[var3];
            var6 = var8.bind(var4)(var3);
            var3 = var6.useAnimatedScrollHandler;
            var2 = function Y(arg1) {
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
            var7 = {};
            var7['scrollPosition'] = var14;
            var7['handleGuildsNavigationScroll'] = var19;
            var2['__closure'] = var7;
            var7 = 5461403437592.0;
            var2['__workletHash'] = var7;
            var7 = _closure1_slot12;
            var2['__initData'] = var7;
            var19 = var3.bind(var6)(var2);
            var3 = _closure1_slot9;
            var1 = var16[var1];
            var1 = var8.bind(var4)(var1);
            var2 = var1.AnalyticsLocationProvider;
            var1 = {};
            var1['value'] = var5;
            var6 = _closure1_slot6;
            var5 = {};
            var29 = var10.container;
            var7 = new Array(2);
            var7[0] = var29;
            var7[1] = var9;
            var5['style'] = var7;
            var9 = _closure1_slot10;
            var7 = 31;
            var7 = var16[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.CutoutBackgroundProvider;
            var7 = {};
            var10 = var10.container;
            var10 = var10.backgroundColor;
            var7['backgroundColor'] = var10;
            var10 = 38;
            var10 = var16[var10];
            var13 = var13.bind(var4)(var10);
            var10 = {};
            var10['height'] = var15;
            var10['scrollPosition'] = var14;
            var13 = var3.bind(var4)(var13, var10);
            var10 = new Array(3);
            var10[0] = var13;
            var15 = _closure1_slot9;
            var14 = _closure1_slot1;
            var16 = _closure1_slot2;
            if(var12) { _fun0001_ip = 48; continue _fun0001 }
case 49:
            var12 = 40;
            var12 = var16[var12];
            var13 = var14.bind(var4)(var12);
            var12 = {};
            var12['insetEnd'] = var28;
            var31 = _closure1_slot0;
            var28 = 41;
            var29 = var16[var28];
            var29 = var31.bind(var4)(var29);
            var30 = var29.intl;
            var29 = var30.string;
            var28 = var16[var28];
            var28 = var31.bind(var4)(var28);
            var28 = var28.t;
            var28 = var28.OIgYlQ;
            var28 = var29.bind(var30)(var28);
            var12['accessibilityLabel'] = var28;
            var28 = 'windowSize';
            var12['estimatedListSize'] = var28;
            var12['keyExtractor'] = var27;
            var12['itemSize'] = var26;
            var26 = 'dm-messages-list';
            var12['listId'] = var26;
            var26 = var22.getSize;
            var12['listFooterSize'] = var26;
            var26 = true;
            var12['listFooterAlwaysMounted'] = var26;
            var27 = var21.getSize;
            var12['listHeaderSize'] = var27;
            var12['listHeaderAlwaysMounted'] = var26;
            var12['placeholderConfig'] = var25;
            var12['ref'] = var24;
            var12['renderItem'] = var23;
            var22 = var22.getComponent;
            var12['renderListFooter'] = var22;
            var21 = var21.getComponent;
            var12['renderListHeader'] = var21;
            var21 = var17.getComponent;
            var12['renderSectionHeader'] = var21;
            var12['scrollIndicatorInsetEnd'] = var20;
            var20 = 'animatedCallbacks';
            var12['scrollReporting'] = var20;
            var12['scrollHandlerAnimated'] = var19;
            var12['sections'] = var18;
            var17 = var17.getSize;
            var12['sectionHeaderSize'] = var17;
            var12 = var15.bind(var4)(var13, var12);
            _fun0001_ip = 50; continue _fun0001;
case 48:
            var13 = 39;
            var13 = var16[var13];
            var14 = var14.bind(var4)(var13);
            var13 = {};
            var12 = var15.bind(var4)(var14, var13);
case 50:
            var10[1] = var12;
            var13 = _closure1_slot9;
            var12 = _closure1_slot0;
            var14 = _closure1_slot2;
            var11 = 42;
            var11 = var14[var11];
            var11 = var12.bind(var4)(var11);
            var12 = var11.TTIFirstContentfulPaint;
            var11 = {};
            var14 = 'messages_tabs';
            var11['label'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var10[2] = var11;
            var7['children'] = var10;
            var7 = var9.bind(var4)(var8, var7);
            var5['children'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 43;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/tabs/messages/Messages.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();