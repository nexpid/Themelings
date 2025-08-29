// app/modules/main_tabs_v2/native/tabs/messages/Messages.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = ['height'];
    var _closure1_slot3 = var1;
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
    var _closure1_slot4 = var4;
    var11 = 1;
    var7 = var6[var11];
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
    var4 = var12.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
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
    var4 = {};
    var10 = {};
    var10['flex'] = var11;
    var11 = 8;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.PANEL_BG;
    var10['backgroundColor'] = var13;
    var4['container'] = var10;
    var10 = {};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_MODIFIER_ACCENT;
    var10['backgroundColor'] = var11;
    var4['placeholder'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot12 = var4;
    var4 = {};
    var8 = 'function MessagesTsx1(event){const{scrollPosition,handleGuildsNavigationScroll}=this.__closure;scrollPosition.set(event.contentOffset.y);handleGuildsNavigationScroll(event.contentOffset.y,event.contentSize.height,event.layoutMeasurement.height);}';
    var4['code'] = var8;
    var _closure1_slot13 = var4;
    var4 = var7.memo;
    var2 = function Messages(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var16 = var1.style;
            var1 = _closure1_slot12;
            var4 = undefined;
            var8 = var1.bind(var4)();
            var _closure2_slot0 = var8;
            var12 = _closure1_slot1;
            var15 = _closure1_slot2;
            var1 = 9;
            var2 = var15[var1];
            var5 = var12.bind(var4)(var2);
            var2 = 10;
            var2 = var15[var2];
            var2 = var12.bind(var4)(var2);
            var2 = var2.MESSAGES;
            var2 = var5.bind(var4)(var2);
            var5 = var2.analyticsLocations;
            var2 = _closure1_slot0;
            var6 = 11;
            var7 = var15[var6];
            var11 = var2.bind(var4)(var7);
            var9 = var11.useSharedValue;
            var7 = 0;
            var13 = var9.bind(var11)(var7);
            var _closure2_slot1 = var13;
            var7 = _closure1_slot9;
            var9 = var7.bind(var4)();
            var7 = 12;
            var7 = var15[var7];
            var11 = var2.bind(var4)(var7);
            var7 = var11.useMobileQuestDockHeight;
            var7 = var7.bind(var11)();
            var28 = var9 + var7;
            var7 = 13;
            var7 = var15[var7];
            var7 = var12.bind(var4)(var7);
            var9 = var7.bind(var4)();
            var14 = var9.headerSize;
            var17 = var9.listItemSizes;
            var32 = var17.height;
            var _closure2_slot2 = var32;
            var11 = _closure1_slot4;
            var7 = _closure1_slot3;
            var7 = var11.bind(var4)(var17, var7);
            var _closure2_slot3 = var7;
            var31 = var9.listItemSuggestedFriendHeight;
            var _closure2_slot4 = var31;
            var25 = var9.listItemIncomingRequestsHeight;
            var _closure2_slot5 = var25;
            var17 = var9.listLeft;
            var _closure2_slot6 = var17;
            var33 = var9.listTop;
            var _closure2_slot7 = var33;
            var20 = var9.scrollIndicatorInsetEnd;
            var9 = 14;
            var9 = var15[var9];
            var9 = var12.bind(var4)(var9);
            var9 = var9.bind(var4)();
            var30 = var9.channels;
            var _closure2_slot8 = var30;
            var19 = var9.channelFavorites;
            var _closure2_slot9 = var19;
            var26 = var9.dataKey;
            var _closure2_slot10 = var26;
            var34 = var9.friendSuggestions;
            var _closure2_slot11 = var34;
            var21 = var9.renderHeader;
            var _closure2_slot12 = var21;
            var22 = var9.renderFooter;
            var _closure2_slot13 = var22;
            var18 = var9.sections;
            var _closure2_slot14 = var18;
            var23 = var9.setAddedFriendSuggestions;
            var _closure2_slot15 = var23;
            var11 = var9.showFullscreenEmptyState;
            var29 = _closure1_slot5;
            var24 = var29.useRef;
            var9 = null;
            var24 = var24.bind(var29)(var9);
            var27 = var29.useRef;
            var36 = var27.bind(var29)(var9);
            var _closure2_slot16 = var36;
            var27 = 15;
            var27 = var15[var27];
            var35 = var12.bind(var4)(var27);
            var27 = {};
            var27['listRef'] = var24;
            var27['listRefHappeningNow'] = var36;
            var27 = var35.bind(var4)(var27);
            var27 = 16;
            var27 = var15[var27];
            var27 = var12.bind(var4)(var27);
            var27 = var27.bind(var4)();
            var27 = 17;
            var27 = var15[var27];
            var36 = var2.bind(var4)(var27);
            var35 = var36.useCommonTriggerPoint;
            var27 = 18;
            var27 = var15[var27];
            var27 = var2.bind(var4)(var27);
            var27 = var27.DmGdmListRenderTriggerPoint;
            var27 = var35.bind(var36)(var27);
            var35 = var29.useEffect;
            var27 = new Array(1);
            var27[0] = var26;
            var26 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot10;
                    var5 = null;
                    if(!(var5 != var1)) { _fun0002_ip = 228; continue _fun0002 }
 16:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 19;
                    var2 = var3[var2];
                    var3 = undefined;
                    var4 = var4.bind(var3)(var2);
                    var2 = var4.isAndroid;
                    var2 = var2.bind(var4)();
                    if(var2) { _fun0002_ip = 228; continue _fun0002 }
 56:
                    var2 = _closure1_slot7;
                    var2 = var2.useReducedMotion;
                    if(var2) { _fun0002_ip = 228; continue _fun0002 }
 72:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var9 = 20;
                    var2 = var2[var9];
                    var4 = var4.bind(var3)(var2);
                    var2 = var4.getRootNavigationRef;
                    var6 = var2.bind(var4)();
                    var2 = var5 != var6;
                    if(!var2) { _fun0002_ip = 119; continue _fun0002 }
 109:
                    var4 = var6.isReady;
                    var2 = var4.bind(var6)();
 119:
                    if(!var2) { _fun0002_ip = 195; continue _fun0002 }
 122:
                    var8 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var6 = 21;
                    var6 = var4[var6];
                    var7 = var8.bind(var3)(var6);
                    var6 = var7.coerceGuildsRoute;
                    var4 = var4[var9];
                    var8 = var8.bind(var3)(var4);
                    var4 = var8.getRootNavigationRef;
                    var9 = var4.bind(var8)();
                    var8 = var5 == var9;
                    var4 = undefined;
                    if(var8) { _fun0002_ip = 186; continue _fun0002 }
 176:
                    var8 = var9.getCurrentRoute;
                    var4 = var8.bind(var9)();
 186:
                    var4 = var6.bind(var7)(var4);
                    var2 = var5 != var4;
 195:
                    if(!var2) { _fun0002_ip = 228; continue _fun0002 }
 198:
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 22;
                    var1 = var4[var1];
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.DeprecatedLayoutAnimation;
                    var1 = var1.bind(var2)();
 228:
                    var1 = undefined;
                    return var1;
                }
            };
            var26 = var35.bind(var29)(var26, var27);
            var27 = var29.useLayoutEffect;
            var26 = function() {
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 23;
                var3 = var5[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.trackAppUIViewed;
                var3 = var3.bind(var4)();
                var4 = _closure1_slot1;
                var3 = 24;
                var3 = var5[var3];
                var5 = var4.bind(var1)(var3);
                var4 = var5.recordRender;
                var8 = _closure2_slot14;
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
            var26 = var27.bind(var29)(var26);
            var27 = var29.useCallback;
            var26 = new Array(7);
            var26[0] = var30;
            var26[1] = var19;
            var26[2] = var34;
            var26[3] = var32;
            var26[4] = var25;
            var26[5] = var31;
            var26[6] = var23;
            var23 = function(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var8 = arg1;
                    var6 = arg2;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var5 = 14;
                    var2 = var2[var5];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var2 = var2.MessagesDataSections;
                    var2 = var2.IncomingRequests;
                    if(!(var2 !== var8)) { _fun0003_ip = 585; continue _fun0003 }
 50:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var5];
                    var2 = var3.bind(var4)(var2);
                    var2 = var2.MessagesDataSections;
                    var2 = var2.FavoriteChannels;
                    if(!(var2 !== var8)) { _fun0003_ip = 517; continue _fun0003 }
 86:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var5];
                    var2 = var3.bind(var4)(var2);
                    var2 = var2.MessagesDataSections;
                    var2 = var2.Channels;
                    if(!(var2 !== var8)) { _fun0003_ip = 449; continue _fun0003 }
 122:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var5];
                    var2 = var3.bind(var4)(var2);
                    var2 = var2.MessagesDataSections;
                    var2 = var2.Separator;
                    if(!(var2 !== var8)) { _fun0003_ip = 415; continue _fun0003 }
 158:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var5];
                    var2 = var3.bind(var4)(var2);
                    var2 = var2.MessagesDataSections;
                    var2 = var2.SuggestedFriends;
                    if(!(var2 !== var8)) { _fun0003_ip = 336; continue _fun0003 }
 194:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var5];
                    var2 = var3.bind(var4)(var2);
                    var2 = var2.MessagesDataSections;
                    var2 = var2.Placeholders;
                    if(!(var2 !== var8)) { _fun0003_ip = 286; continue _fun0003 }
 227:
                    var2 = global;
                    var5 = var2.Error;
                    var2 = var2.HermesInternal;
                    var7 = var2.concat;
                    var3 = 'Invalid section ';
                    var2 = ' in Messages renderItem';
                    var11 = var7.bind(var3)(var8, var2);
                    var3 = var5.prototype;
                    var3 = Object.create(var3, {constructor: {value: var5}});
                    var12 = var3;
                    var2 = new var12[var5](var11, var10);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
 286:
                    var5 = _closure1_slot10;
                    var3 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var2 = 29;
                    var2 = var7[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var2['row'] = var6;
                    var7 = _closure2_slot2;
                    var2['height'] = var7;
                    var2 = var5.bind(var4)(var3, var2);
                    return var2;
 336:
                    var7 = {};
                    var2 = _closure2_slot11;
                    var2 = var2[var6];
                    var7['suggestedFriend'] = var2;
                    var2 = _closure2_slot15;
                    var7['onAddFriendSuggestions'] = var2;
                    var5 = _closure1_slot10;
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
                    var2 = var5.bind(var4)(var3, var2);
                    return var2;
 415:
                    var5 = _closure1_slot10;
                    var3 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var2 = 27;
                    var2 = var7[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var2 = var5.bind(var4)(var3, var2);
                    return var2;
 449:
                    var5 = _closure1_slot10;
                    var3 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var2 = 26;
                    var2 = var7[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var8 = _closure2_slot8;
                    var8 = var8[var6];
                    var8 = var8.channelId;
                    var2['channelId'] = var8;
                    var7 = _closure2_slot2;
                    var2['placeholderHeight'] = var7;
                    var2['row'] = var6;
                    var2 = var5.bind(var4)(var3, var2);
                    return var2;
 517:
                    var5 = _closure1_slot10;
                    var3 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var2 = 26;
                    var2 = var7[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var8 = _closure2_slot9;
                    var8 = var8[var6];
                    var8 = var8.channelId;
                    var2['channelId'] = var8;
                    var7 = _closure2_slot2;
                    var2['placeholderHeight'] = var7;
                    var2['row'] = var6;
                    var2 = var5.bind(var4)(var3, var2);
                    return var2;
 585:
                    var3 = _closure1_slot10;
                    var2 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var1 = 25;
                    var1 = var5[var1];
                    var2 = var2.bind(var4)(var1);
                    var1 = {};
                    var5 = _closure2_slot5;
                    var1['height'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var23 = var27.bind(var29)(var23, var26);
            var27 = var29.useMemo;
            var26 = new Array(3);
            var26[0] = var33;
            var26[1] = var17;
            var26[2] = var13;
            var17 = function() {
                var1 = {};
                var3 = function getComponent(arg1, arg2, arg3) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
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
                        if(!(var3 === var4)) { _fun0004_ip = 116; continue _fun0004 }
 46:
                        var4 = _closure1_slot10;
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
                        var7 = _closure2_slot7;
                        var2['stickyTop'] = var7;
                        var6 = _closure2_slot6;
                        var2['stickyLeft'] = var6;
                        var1 = var4.bind(var5)(var3, var2);
 116:
                        return var1;
                    }
                };
                var1['getComponent'] = var3;
                var2 = function getSize(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
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
                        if(!(var3 === var5)) { _fun0005_ip = 72; continue _fun0005 }
 46:
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var2 = 30;
                        var2 = var5[var2];
                        var2 = var3.bind(var4)(var2);
                        var1 = var2.MESSAGES_ITEM_SUGGESTED_FRIENDS_HEADER_HEIGHT;
 72:
                        return var1;
                    }
                };
                var1['getSize'] = var2;
                return var1;
            };
            var17 = var27.bind(var29)(var17, var26);
            var27 = var29.useMemo;
            var26 = new Array(1);
            var26[0] = var21;
            var21 = function() {
                var1 = {};
                var3 = function getComponent() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                        var3 = _closure2_slot12;
                        var6 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var7 = 14;
                        var2 = var2[var7];
                        var4 = undefined;
                        var2 = var6.bind(var4)(var2);
                        var2 = var2.MessagesDataHeader;
                        var2 = var2.HappeningNow;
                        if(!(var2 !== var3)) { _fun0006_ip = 119; continue _fun0006 }
 48:
                        var6 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var2 = var2[var7];
                        var2 = var6.bind(var4)(var2);
                        var2 = var2.MessagesDataHeader;
                        var2 = var2.EmptyState;
                        if(!(var2 !== var3)) { _fun0006_ip = 85; continue _fun0006 }
 81:
                        var2 = null;
                        return var2;
 85:
                        var6 = _closure1_slot10;
                        var3 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var2 = 32;
                        var2 = var7[var2];
                        var3 = var3.bind(var4)(var2);
                        var2 = {};
                        var2 = var6.bind(var4)(var3, var2);
                        return var2;
 119:
                        var3 = _closure1_slot10;
                        var2 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var1 = 31;
                        var1 = var6[var1];
                        var2 = var2.bind(var4)(var1);
                        var1 = {};
                        var5 = _closure2_slot16;
                        var1['listRef'] = var5;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    }
                };
                var1['getComponent'] = var3;
                var2 = function getSize() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                        var4 = _closure2_slot12;
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var6 = 14;
                        var2 = var2[var6];
                        var3 = undefined;
                        var2 = var5.bind(var3)(var2);
                        var2 = var2.MessagesDataHeader;
                        var2 = var2.HappeningNow;
                        if(!(var2 !== var4)) { _fun0007_ip = 113; continue _fun0007 }
 48:
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var2 = var2[var6];
                        var2 = var5.bind(var3)(var2);
                        var2 = var2.MessagesDataHeader;
                        var2 = var2.EmptyState;
                        if(!(var2 !== var4)) { _fun0007_ip = 85; continue _fun0007 }
 81:
                        var2 = 0;
                        return var2;
 85:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var2 = 32;
                        var2 = var5[var2];
                        var2 = var4.bind(var3)(var2);
                        var2 = var2.MESSAGES_ITEM_EMPTY_STATE_HEIGHT;
                        return var2;
 113:
                        var2 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 31;
                        var1 = var4[var1];
                        var1 = var2.bind(var3)(var1);
                        var1 = var1.MESSAGES_ITEM_HAPPENING_NOW_HEIGHT;
                        return var1;
                    }
                };
                var1['getSize'] = var2;
                return var1;
            };
            var21 = var27.bind(var29)(var21, var26);
            var27 = var29.useMemo;
            var26 = new Array(1);
            var26[0] = var22;
            var22 = function() {
                var1 = {};
                var3 = function getComponent() {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                        var2 = _closure2_slot13;
                        var1 = null;
                        if(!var2) { _fun0008_ip = 49; continue _fun0008 }
 12:
                        var5 = _closure1_slot10;
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 33;
                        var2 = var4[var2];
                        var4 = undefined;
                        var3 = var3.bind(var4)(var2);
                        var2 = {};
                        var1 = var5.bind(var4)(var3, var2);
 49:
                        return var1;
                    }
                };
                var1['getComponent'] = var3;
                var2 = function getSize() {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                        var2 = _closure2_slot13;
                        var1 = 0;
                        if(!var2) { _fun0009_ip = 43; continue _fun0009 }
 12:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 33;
                        var3 = var3[var2];
                        var2 = undefined;
                        var2 = var4.bind(var2)(var3);
                        var1 = var2.MESSAGES_ITEM_ADD_FRIENDS_WIDGET_HEIGHT;
 43:
                        return var1;
                    }
                };
                var1['getSize'] = var2;
                return var1;
            };
            var22 = var27.bind(var29)(var22, var26);
            var27 = var29.useCallback;
            var26 = new Array(3);
            var26[0] = var32;
            var26[1] = var31;
            var26[2] = var25;
            var25 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var7 = arg1;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var5 = 14;
                    var2 = var2[var5];
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var2 = var2.MessagesDataSections;
                    var2 = var2.FavoriteChannels;
                    if(!(var2 !== var7)) { _fun0010_ip = 326; continue _fun0010 }
 47:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var5];
                    var2 = var4.bind(var3)(var2);
                    var2 = var2.MessagesDataSections;
                    var2 = var2.Channels;
                    if(!(var2 !== var7)) { _fun0010_ip = 326; continue _fun0010 }
 83:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var5];
                    var2 = var4.bind(var3)(var2);
                    var2 = var2.MessagesDataSections;
                    var2 = var2.Placeholders;
                    if(!(var2 !== var7)) { _fun0010_ip = 326; continue _fun0010 }
 119:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var5];
                    var2 = var4.bind(var3)(var2);
                    var2 = var2.MessagesDataSections;
                    var2 = var2.SuggestedFriends;
                    if(!(var2 !== var7)) { _fun0010_ip = 317; continue _fun0010 }
 155:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var5];
                    var2 = var4.bind(var3)(var2);
                    var2 = var2.MessagesDataSections;
                    var2 = var2.Separator;
                    if(!(var2 !== var7)) { _fun0010_ip = 289; continue _fun0010 }
 188:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var5];
                    var2 = var4.bind(var3)(var2);
                    var2 = var2.MessagesDataSections;
                    var2 = var2.IncomingRequests;
                    if(!(var2 !== var7)) { _fun0010_ip = 280; continue _fun0010 }
 221:
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
 280:
                    var2 = _closure2_slot5;
                    return var2;
 289:
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 27;
                    var1 = var4[var1];
                    var1 = var2.bind(var3)(var1);
                    var1 = var1.MESSAGES_ITEM_SEPERATOR_HEIGHT;
                    return var1;
 317:
                    var1 = _closure2_slot4;
                    return var1;
 326:
                    var1 = _closure2_slot2;
                    return var1;
                }
            };
            var26 = var27.bind(var29)(var25, var26);
            var27 = var29.useCallback;
            var25 = new Array(2);
            var25[0] = var30;
            var25[1] = var19;
            var19 = function(arg1, arg2, arg3) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var6 = arg1;
                    var4 = arg2;
                    var3 = arg3;
                    var7 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var8 = 34;
                    var5 = var1[var8];
                    var1 = undefined;
                    var5 = var7.bind(var1)(var5);
                    var5 = var5.SECTION_HEADER;
                    if(!(var5 !== var6)) { _fun0011_ip = 254; continue _fun0011 }
 47:
                    var7 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var5 = var5[var8];
                    var5 = var7.bind(var1)(var5);
                    var5 = var5.SECTION_FOOTER;
                    if(!(var5 !== var6)) { _fun0011_ip = 254; continue _fun0011 }
 77:
                    var7 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var5 = var5[var8];
                    var5 = var7.bind(var1)(var5);
                    var5 = var5.ITEM;
                    if(!(var5 !== var6)) { _fun0011_ip = 106; continue _fun0011 }
 104:
                    return var1;
 106:
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var6 = 14;
                    var5 = var5[var6];
                    var5 = var7.bind(var1)(var5);
                    var5 = var5.MessagesDataSections;
                    var5 = var5.FavoriteChannels;
                    if(!(var5 !== var4)) { _fun0011_ip = 236; continue _fun0011 }
 142:
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var6];
                    var5 = var7.bind(var1)(var5);
                    var5 = var5.MessagesDataSections;
                    var5 = var5.Channels;
                    if(!(var5 !== var4)) { _fun0011_ip = 218; continue _fun0011 }
 175:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var2 = var5.bind(var1)(var2);
                    var2 = var2.MessagesDataSections;
                    var2 = var2.IncomingRequests;
                    if(!(var2 !== var4)) { _fun0011_ip = 210; continue _fun0011 }
 208:
                    return var1;
 210:
                    var2 = 'incoming-requests';
                    return var2;
 218:
                    var2 = _closure2_slot8;
                    var2 = var2[var3];
                    var2 = var2.channelId;
                    return var2;
 236:
                    var2 = _closure2_slot9;
                    var2 = var2[var3];
                    var2 = var2.channelId;
                    return var2;
 254:
                    return var1;
                }
            };
            var27 = var27.bind(var29)(var19, var25);
            var25 = var29.useMemo;
            var19 = new Array(2);
            var19[0] = var8;
            var19[1] = var7;
            var7 = function() {
                var1 = {};
                var2 = {};
                var10 = _closure1_slot0;
                var7 = _closure1_slot2;
                var9 = 35;
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
            var25 = var25.bind(var29)(var7, var19);
            var7 = 36;
            var7 = var15[var7];
            var29 = var2.bind(var4)(var7);
            var19 = var29.useExternalScrollEventHandler;
            var7 = {};
            var30 = 'messages';
            var7['id'] = var30;
            var29 = var19.bind(var29)(var7);
            var _closure2_slot17 = var29;
            var6 = var15[var6];
            var7 = var2.bind(var4)(var6);
            var6 = var7.useAnimatedScrollHandler;
            var3 = function B(arg1) {
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
            var19 = {};
            var19['scrollPosition'] = var13;
            var19['handleGuildsNavigationScroll'] = var29;
            var3['__closure'] = var19;
            var19 = 5461403437592.0;
            var3['__workletHash'] = var19;
            var19 = _closure1_slot13;
            var3['__initData'] = var19;
            var19 = var6.bind(var7)(var3);
            var3 = _closure1_slot10;
            var1 = var15[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.AnalyticsLocationProvider;
            var1 = {};
            var1['value'] = var5;
            var7 = _closure1_slot11;
            var6 = _closure1_slot6;
            var5 = {};
            var29 = var8.container;
            var8 = new Array(2);
            var8[0] = var29;
            var8[1] = var16;
            var5['style'] = var8;
            var8 = 37;
            var8 = var15[var8];
            var12 = var12.bind(var4)(var8);
            var8 = {};
            var8['height'] = var14;
            var8['scrollPosition'] = var13;
            var12 = var3.bind(var4)(var12, var8);
            var8 = new Array(3);
            var8[0] = var12;
            var15 = _closure1_slot10;
            var14 = _closure1_slot1;
            var16 = _closure1_slot2;
            if(var11) { _fun0001_ip = 1186; continue _fun0001 }
 956:
            var12 = 39;
            var12 = var16[var12];
            var13 = var14.bind(var4)(var12);
            var12 = {};
            var12['insetEnd'] = var28;
            var31 = _closure1_slot0;
            var28 = 40;
            var29 = var16[var28];
            var29 = var31.bind(var4)(var29);
            var30 = var29.intl;
            var29 = var30.string;
            var28 = var16[var28];
            var28 = var31.bind(var4)(var28);
            var28 = var28.t;
            var28 = var28.OIgYlZ;
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
            _fun0001_ip = 1206; continue _fun0001;
 1186:
            var13 = 38;
            var13 = var16[var13];
            var14 = var14.bind(var4)(var13);
            var13 = {};
            var12 = var15.bind(var4)(var14, var13);
 1206:
            var8[1] = var12;
            var9 = null;
            if(var11) { _fun0001_ip = 1247; continue _fun0001 }
 1215:
            var12 = _closure1_slot10;
            var11 = _closure1_slot1;
            var13 = _closure1_slot2;
            var10 = 41;
            var10 = var13[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var9 = var12.bind(var4)(var11, var10);
 1247:
            var8[2] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 42;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/tabs/messages/Messages.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();