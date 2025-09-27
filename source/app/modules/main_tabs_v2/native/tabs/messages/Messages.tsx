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
            var10 = var11.useSharedValue;
            var7 = 0;
            var13 = var10.bind(var11)(var7);
            var _closure2_slot1 = var13;
            var7 = _closure1_slot9;
            var10 = var7.bind(var4)();
            var7 = 12;
            var7 = var15[var7];
            var11 = var2.bind(var4)(var7);
            var7 = var11.useMobileQuestDockHeight;
            var7 = var7.bind(var11)();
            var28 = var10 + var7;
            var7 = 13;
            var7 = var15[var7];
            var7 = var12.bind(var4)(var7);
            var10 = var7.bind(var4)();
            var14 = var10.headerSize;
            var17 = var10.listItemSizes;
            var33 = var17.height;
            var _closure2_slot2 = var33;
            var11 = _closure1_slot4;
            var7 = _closure1_slot3;
            var7 = var11.bind(var4)(var17, var7);
            var _closure2_slot3 = var7;
            var32 = var10.listItemSuggestedFriendHeight;
            var _closure2_slot4 = var32;
            var31 = var10.listItemIncomingRequestsHeight;
            var _closure2_slot5 = var31;
            var25 = var10.listItemNotificationNudgeHeight;
            var _closure2_slot6 = var25;
            var17 = var10.listLeft;
            var _closure2_slot7 = var17;
            var34 = var10.listTop;
            var _closure2_slot8 = var34;
            var20 = var10.scrollIndicatorInsetEnd;
            var10 = 14;
            var10 = var15[var10];
            var10 = var12.bind(var4)(var10);
            var10 = var10.bind(var4)();
            var30 = var10.channels;
            var _closure2_slot9 = var30;
            var19 = var10.channelFavorites;
            var _closure2_slot10 = var19;
            var26 = var10.dataKey;
            var _closure2_slot11 = var26;
            var35 = var10.friendSuggestions;
            var _closure2_slot12 = var35;
            var21 = var10.renderHeader;
            var _closure2_slot13 = var21;
            var22 = var10.renderFooter;
            var _closure2_slot14 = var22;
            var18 = var10.sections;
            var _closure2_slot15 = var18;
            var23 = var10.setAddedFriendSuggestions;
            var _closure2_slot16 = var23;
            var11 = var10.showFullscreenEmptyState;
            var29 = _closure1_slot5;
            var24 = var29.useRef;
            var10 = null;
            var24 = var24.bind(var29)(var10);
            var27 = var29.useRef;
            var37 = var27.bind(var29)(var10);
            var _closure2_slot17 = var37;
            var27 = 15;
            var27 = var15[var27];
            var36 = var12.bind(var4)(var27);
            var27 = {};
            var27['listRef'] = var24;
            var27['listRefHappeningNow'] = var37;
            var27 = var36.bind(var4)(var27);
            var27 = 16;
            var27 = var15[var27];
            var27 = var12.bind(var4)(var27);
            var27 = var27.bind(var4)();
            var27 = 17;
            var27 = var15[var27];
            var37 = var2.bind(var4)(var27);
            var36 = var37.useCommonTriggerPoint;
            var27 = 18;
            var27 = var15[var27];
            var27 = var2.bind(var4)(var27);
            var27 = var27.DmGdmListRenderTriggerPoint;
            var27 = var36.bind(var37)(var27);
            var36 = var29.useEffect;
            var27 = new Array(1);
            var27[0] = var26;
            var26 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot11;
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
            var26 = var36.bind(var29)(var26, var27);
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
                var8 = _closure2_slot15;
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
            var26 = new Array(8);
            var26[0] = var25;
            var26[1] = var31;
            var26[2] = var19;
            var26[3] = var33;
            var26[4] = var30;
            var26[5] = var35;
            var26[6] = var23;
            var26[7] = var32;
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
                    var2 = var2.NotificationsNudge;
                    if(!(var2 !== var8)) { _fun0003_ip = 702; continue _fun0003 }
 50:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var5];
                    var2 = var3.bind(var4)(var2);
                    var2 = var2.MessagesDataSections;
                    var2 = var2.IncomingRequests;
                    if(!(var2 !== var8)) { _fun0003_ip = 657; continue _fun0003 }
 86:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var5];
                    var2 = var3.bind(var4)(var2);
                    var2 = var2.MessagesDataSections;
                    var2 = var2.FavoriteChannels;
                    if(!(var2 !== var8)) { _fun0003_ip = 589; continue _fun0003 }
 122:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var5];
                    var2 = var3.bind(var4)(var2);
                    var2 = var2.MessagesDataSections;
                    var2 = var2.Channels;
                    if(!(var2 !== var8)) { _fun0003_ip = 521; continue _fun0003 }
 158:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var5];
                    var2 = var3.bind(var4)(var2);
                    var2 = var2.MessagesDataSections;
                    var2 = var2.NotificationsNudgeSeparator;
                    if(!(var2 !== var8)) { _fun0003_ip = 487; continue _fun0003 }
 194:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var5];
                    var2 = var3.bind(var4)(var2);
                    var2 = var2.MessagesDataSections;
                    var2 = var2.Separator;
                    if(!(var2 !== var8)) { _fun0003_ip = 487; continue _fun0003 }
 230:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var5];
                    var2 = var3.bind(var4)(var2);
                    var2 = var2.MessagesDataSections;
                    var2 = var2.SuggestedFriends;
                    if(!(var2 !== var8)) { _fun0003_ip = 408; continue _fun0003 }
 266:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var5];
                    var2 = var3.bind(var4)(var2);
                    var2 = var2.MessagesDataSections;
                    var2 = var2.Placeholders;
                    if(!(var2 !== var8)) { _fun0003_ip = 358; continue _fun0003 }
 299:
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
 358:
                    var5 = _closure1_slot10;
                    var3 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var2 = 30;
                    var2 = var7[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var2['row'] = var6;
                    var7 = _closure2_slot2;
                    var2['height'] = var7;
                    var2 = var5.bind(var4)(var3, var2);
                    return var2;
 408:
                    var7 = {};
                    var2 = _closure2_slot12;
                    var2 = var2[var6];
                    var7['suggestedFriend'] = var2;
                    var2 = _closure2_slot16;
                    var7['onAddFriendSuggestions'] = var2;
                    var5 = _closure1_slot10;
                    var3 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var2 = 29;
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
 487:
                    var5 = _closure1_slot10;
                    var3 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var2 = 28;
                    var2 = var7[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var2 = var5.bind(var4)(var3, var2);
                    return var2;
 521:
                    var5 = _closure1_slot10;
                    var3 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var2 = 27;
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
 589:
                    var5 = _closure1_slot10;
                    var3 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var2 = 27;
                    var2 = var7[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var8 = _closure2_slot10;
                    var8 = var8[var6];
                    var8 = var8.channelId;
                    var2['channelId'] = var8;
                    var7 = _closure2_slot2;
                    var2['placeholderHeight'] = var7;
                    var2['row'] = var6;
                    var2 = var5.bind(var4)(var3, var2);
                    return var2;
 657:
                    var5 = _closure1_slot10;
                    var3 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 26;
                    var2 = var6[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var6 = _closure2_slot5;
                    var2['height'] = var6;
                    var2 = var5.bind(var4)(var3, var2);
                    return var2;
 702:
                    var3 = _closure1_slot10;
                    var2 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var1 = 25;
                    var1 = var5[var1];
                    var2 = var2.bind(var4)(var1);
                    var1 = {};
                    var5 = _closure2_slot6;
                    var1['height'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var23 = var27.bind(var29)(var23, var26);
            var27 = var29.useMemo;
            var26 = new Array(3);
            var26[0] = var34;
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
                        var2 = 31;
                        var2 = var6[var2];
                        var3 = var3.bind(var5)(var2);
                        var2 = {};
                        var7 = _closure2_slot1;
                        var2['scrollPosition'] = var7;
                        var7 = arg3;
                        var2['stickyAt'] = var7;
                        var7 = _closure2_slot8;
                        var2['stickyTop'] = var7;
                        var6 = _closure2_slot7;
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
                        var2 = 31;
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
                        var3 = _closure2_slot13;
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
                        var2 = 33;
                        var2 = var7[var2];
                        var3 = var3.bind(var4)(var2);
                        var2 = {};
                        var2 = var6.bind(var4)(var3, var2);
                        return var2;
 119:
                        var3 = _closure1_slot10;
                        var2 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var1 = 32;
                        var1 = var6[var1];
                        var2 = var2.bind(var4)(var1);
                        var1 = {};
                        var5 = _closure2_slot17;
                        var1['listRef'] = var5;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    }
                };
                var1['getComponent'] = var3;
                var2 = function getSize() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                        var4 = _closure2_slot13;
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
                        var2 = 33;
                        var2 = var5[var2];
                        var2 = var4.bind(var3)(var2);
                        var2 = var2.MESSAGES_ITEM_EMPTY_STATE_HEIGHT;
                        return var2;
 113:
                        var2 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 32;
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
                        var2 = _closure2_slot14;
                        var1 = null;
                        if(!var2) { _fun0008_ip = 49; continue _fun0008 }
 12:
                        var5 = _closure1_slot10;
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 34;
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
                        var2 = _closure2_slot14;
                        var1 = 0;
                        if(!var2) { _fun0009_ip = 43; continue _fun0009 }
 12:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 34;
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
            var26 = new Array(4);
            var26[0] = var33;
            var26[1] = var32;
            var26[2] = var31;
            var26[3] = var25;
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
                    var2 = var2.NotificationsNudge;
                    if(!(var2 !== var7)) { _fun0010_ip = 407; continue _fun0010 }
 47:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var5];
                    var2 = var4.bind(var3)(var2);
                    var2 = var2.MessagesDataSections;
                    var2 = var2.FavoriteChannels;
                    if(!(var2 !== var7)) { _fun0010_ip = 398; continue _fun0010 }
 83:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var5];
                    var2 = var4.bind(var3)(var2);
                    var2 = var2.MessagesDataSections;
                    var2 = var2.Channels;
                    if(!(var2 !== var7)) { _fun0010_ip = 398; continue _fun0010 }
 119:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var5];
                    var2 = var4.bind(var3)(var2);
                    var2 = var2.MessagesDataSections;
                    var2 = var2.Placeholders;
                    if(!(var2 !== var7)) { _fun0010_ip = 398; continue _fun0010 }
 155:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var5];
                    var2 = var4.bind(var3)(var2);
                    var2 = var2.MessagesDataSections;
                    var2 = var2.SuggestedFriends;
                    if(!(var2 !== var7)) { _fun0010_ip = 389; continue _fun0010 }
 191:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var5];
                    var2 = var4.bind(var3)(var2);
                    var2 = var2.MessagesDataSections;
                    var2 = var2.NotificationsNudgeSeparator;
                    if(!(var2 !== var7)) { _fun0010_ip = 361; continue _fun0010 }
 227:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var5];
                    var2 = var4.bind(var3)(var2);
                    var2 = var2.MessagesDataSections;
                    var2 = var2.Separator;
                    if(!(var2 !== var7)) { _fun0010_ip = 361; continue _fun0010 }
 260:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var5];
                    var2 = var4.bind(var3)(var2);
                    var2 = var2.MessagesDataSections;
                    var2 = var2.IncomingRequests;
                    if(!(var2 !== var7)) { _fun0010_ip = 352; continue _fun0010 }
 293:
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
 352:
                    var2 = _closure2_slot5;
                    return var2;
 361:
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 28;
                    var1 = var4[var1];
                    var1 = var2.bind(var3)(var1);
                    var1 = var1.MESSAGES_ITEM_SEPERATOR_HEIGHT;
                    return var1;
 389:
                    var1 = _closure2_slot4;
                    return var1;
 398:
                    var1 = _closure2_slot2;
                    return var1;
 407:
                    var1 = _closure2_slot6;
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
                    var8 = 35;
                    var5 = var1[var8];
                    var1 = undefined;
                    var5 = var7.bind(var1)(var5);
                    var5 = var5.SECTION_HEADER;
                    if(!(var5 !== var6)) { _fun0011_ip = 298; continue _fun0011 }
 47:
                    var7 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var5 = var5[var8];
                    var5 = var7.bind(var1)(var5);
                    var5 = var5.SECTION_FOOTER;
                    if(!(var5 !== var6)) { _fun0011_ip = 298; continue _fun0011 }
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
                    var5 = var5.NotificationsNudge;
                    if(!(var5 !== var4)) { _fun0011_ip = 290; continue _fun0011 }
 145:
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var6];
                    var5 = var7.bind(var1)(var5);
                    var5 = var5.MessagesDataSections;
                    var5 = var5.FavoriteChannels;
                    if(!(var5 !== var4)) { _fun0011_ip = 272; continue _fun0011 }
 178:
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var6];
                    var5 = var7.bind(var1)(var5);
                    var5 = var5.MessagesDataSections;
                    var5 = var5.Channels;
                    if(!(var5 !== var4)) { _fun0011_ip = 254; continue _fun0011 }
 211:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var2 = var5.bind(var1)(var2);
                    var2 = var2.MessagesDataSections;
                    var2 = var2.IncomingRequests;
                    if(!(var2 !== var4)) { _fun0011_ip = 246; continue _fun0011 }
 244:
                    return var1;
 246:
                    var2 = 'incoming-requests';
                    return var2;
 254:
                    var2 = _closure2_slot9;
                    var2 = var2[var3];
                    var2 = var2.channelId;
                    return var2;
 272:
                    var2 = _closure2_slot10;
                    var2 = var2[var3];
                    var2 = var2.channelId;
                    return var2;
 290:
                    var2 = 'notifications-nudge';
                    return var2;
 298:
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
            var7 = 37;
            var7 = var15[var7];
            var29 = var2.bind(var4)(var7);
            var19 = var29.useExternalScrollEventHandler;
            var7 = {};
            var30 = 'messages';
            var7['id'] = var30;
            var29 = var19.bind(var29)(var7);
            var _closure2_slot18 = var29;
            var6 = var15[var6];
            var7 = var2.bind(var4)(var6);
            var6 = var7.useAnimatedScrollHandler;
            var3 = function U(arg1) {
                var1 = arg1;
                var5 = _closure2_slot1;
                var4 = var5.set;
                var3 = var1.contentOffset;
                var3 = var3.y;
                var3 = var4.bind(var5)(var3);
                var5 = _closure2_slot18;
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
            var8 = 38;
            var8 = var15[var8];
            var12 = var12.bind(var4)(var8);
            var8 = {};
            var8['height'] = var14;
            var8['scrollPosition'] = var13;
            var12 = var3.bind(var4)(var12, var8);
            var8 = new Array(4);
            var8[0] = var12;
            var15 = _closure1_slot10;
            var14 = _closure1_slot1;
            var16 = _closure1_slot2;
            if(var11) { _fun0001_ip = 1204; continue _fun0001 }
 974:
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
            _fun0001_ip = 1224; continue _fun0001;
 1204:
            var13 = 39;
            var13 = var16[var13];
            var14 = var14.bind(var4)(var13);
            var13 = {};
            var12 = var15.bind(var4)(var14, var13);
 1224:
            var8[1] = var12;
            var10 = null;
            if(var11) { _fun0001_ip = 1265; continue _fun0001 }
 1233:
            var13 = _closure1_slot10;
            var12 = _closure1_slot1;
            var14 = _closure1_slot2;
            var11 = 42;
            var11 = var14[var11];
            var12 = var12.bind(var4)(var11);
            var11 = {};
            var10 = var13.bind(var4)(var12, var11);
 1265:
            var8[2] = var10;
            var11 = _closure1_slot10;
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var9 = 43;
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
    var4 = 44;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/tabs/messages/Messages.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();