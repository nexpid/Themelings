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
            var18 = var1.style;
            var4 = undefined;
            var _closure2_slot16 = var4;
            var _closure2_slot17 = var4;
            var1 = _closure1_slot12;
            var8 = var1.bind(var4)();
            var _closure2_slot0 = var8;
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var1 = 9;
            var2 = var14[var1];
            var5 = var13.bind(var4)(var2);
            var2 = 10;
            var2 = var14[var2];
            var2 = var13.bind(var4)(var2);
            var2 = var2.MESSAGES;
            var2 = var5.bind(var4)(var2);
            var5 = var2.analyticsLocations;
            var10 = _closure1_slot0;
            var6 = 11;
            var2 = var14[var6];
            var11 = var10.bind(var4)(var2);
            var7 = var11.useSharedValue;
            var2 = 0;
            var15 = var7.bind(var11)(var2);
            var _closure2_slot1 = var15;
            var2 = _closure1_slot9;
            var7 = var2.bind(var4)();
            var2 = 12;
            var2 = var14[var2];
            var11 = var10.bind(var4)(var2);
            var2 = var11.useMobileQuestDockHeight;
            var2 = var2.bind(var11)();
            var30 = var7 + var2;
            var2 = 13;
            var2 = var14[var2];
            var2 = var13.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var16 = var2.headerSize;
            var12 = var2.listItemSizes;
            var33 = var12.height;
            var _closure2_slot2 = var33;
            var11 = _closure1_slot4;
            var7 = _closure1_slot3;
            var7 = var11.bind(var4)(var12, var7);
            var _closure2_slot3 = var7;
            var27 = var2.listItemSuggestedFriendHeight;
            var _closure2_slot4 = var27;
            var19 = var2.listLeft;
            var _closure2_slot5 = var19;
            var35 = var2.listTop;
            var _closure2_slot6 = var35;
            var22 = var2.scrollIndicatorInsetEnd;
            var2 = 14;
            var2 = var14[var2];
            var2 = var13.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var32 = var2.channels;
            var _closure2_slot7 = var32;
            var21 = var2.channelFavorites;
            var _closure2_slot8 = var21;
            var28 = var2.dataKey;
            var _closure2_slot9 = var28;
            var36 = var2.friendSuggestions;
            var _closure2_slot10 = var36;
            var34 = var2.renderHeader;
            var _closure2_slot11 = var34;
            var24 = var2.renderFooter;
            var _closure2_slot12 = var24;
            var20 = var2.sections;
            var _closure2_slot13 = var20;
            var25 = var2.setAddedFriendSuggestions;
            var _closure2_slot14 = var25;
            var11 = var2.showFullscreenEmptyState;
            var17 = _closure1_slot5;
            var2 = var17.useRef;
            var12 = null;
            var26 = var2.bind(var17)(var12);
            var2 = var17.useRef;
            var29 = var2.bind(var17)(var12);
            var _closure2_slot15 = var29;
            var2 = 15;
            var2 = var14[var2];
            var10 = var10.bind(var4)(var2);
            var2 = var10.useYouBarEnabled;
            var23 = 'Messages Tab';
            var10 = var2.bind(var10)(var23);
            var2 = 16;
            var2 = var14[var2];
            var14 = var13.bind(var4)(var2);
            var13 = var14.useConfig;
            var2 = {};
            var17 = 'Messages Tab No YouBar Do Not Use';
            if(!var10) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var17 = var23;
case 2:
            var2['location'] = var17;
            var2 = var13.bind(var14)(var2);
            var13 = var2.enabled;
            var14 = _closure1_slot1;
            var17 = _closure1_slot2;
            var2 = 17;
            var2 = var17[var2];
            var23 = var14.bind(var4)(var2);
            var2 = {};
            var2['listRef'] = var26;
            var2['listRefHappeningNow'] = var29;
            var2 = var23.bind(var4)(var2);
            var2 = 18;
            var2 = var17[var2];
            var2 = var14.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var2 = _closure1_slot0;
            var23 = 19;
            var23 = var17[var23];
            var31 = var2.bind(var4)(var23);
            var29 = var31.useCommonTriggerPoint;
            var23 = 20;
            var23 = var17[var23];
            var23 = var2.bind(var4)(var23);
            var23 = var23.DmGdmListRenderTriggerPoint;
            var23 = var29.bind(var31)(var23);
            var23 = 21;
            var23 = var17[var23];
            var29 = var14.bind(var4)(var23);
            var23 = 'Messages';
            var23 = var29.bind(var4)(var23);
            _closure2_slot16 = var23;
            var31 = _closure1_slot5;
            var37 = var31.useEffect;
            var29 = new Array(1);
            var29[0] = var28;
            var28 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot9;
                    var5 = null;
                    if(!(var5 != var1)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 22;
                    var2 = var3[var2];
                    var3 = undefined;
                    var4 = var4.bind(var3)(var2);
                    var2 = var4.isAndroid;
                    var2 = var2.bind(var4)();
                    if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 6:
                    var2 = _closure1_slot7;
                    var2 = var2.useReducedMotion;
                    if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 7:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var9 = 23;
                    var2 = var2[var9];
                    var4 = var4.bind(var3)(var2);
                    var2 = var4.getRootNavigationRef;
                    var6 = var2.bind(var4)();
                    var2 = var5 != var6;
                    if(!var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var4 = var6.isReady;
                    var2 = var4.bind(var6)();
case 8:
                    if(!var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var8 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var6 = 24;
                    var6 = var4[var6];
                    var7 = var8.bind(var3)(var6);
                    var6 = var7.coerceGuildsRoute;
                    var4 = var4[var9];
                    var8 = var8.bind(var3)(var4);
                    var4 = var8.getRootNavigationRef;
                    var9 = var4.bind(var8)();
                    var8 = var5 == var9;
                    var4 = undefined;
                    if(var8) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var8 = var9.getCurrentRoute;
                    var4 = var8.bind(var9)();
case 12:
                    var4 = var6.bind(var7)(var4);
                    var2 = var5 != var4;
case 10:
                    if(!var2) { _fun0002_ip = 4; continue _fun0002 }
case 14:
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 25;
                    var1 = var4[var1];
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.DeprecatedLayoutAnimation;
                    var1 = var1.bind(var2)();
case 4:
                    var1 = undefined;
                    return var1;
                }
            };
            var28 = var37.bind(var31)(var28, var29);
            var29 = var31.useLayoutEffect;
            var28 = function() {
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 26;
                var3 = var5[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.trackAppUIViewed;
                var3 = var3.bind(var4)();
                var4 = _closure1_slot1;
                var3 = 27;
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
            var28 = var29.bind(var31)(var28);
            var37 = var31.useEffect;
            var29 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 28;
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
            var28 = new Array(0);
            var28 = var37.bind(var31)(var29, var28);
            var29 = var31.useCallback;
            var28 = new Array(6);
            var28[0] = var21;
            var28[1] = var33;
            var28[2] = var32;
            var28[3] = var36;
            var28[4] = var25;
            var28[5] = var27;
            var25 = function(arg1, arg2) {
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
                    if(!(var2 !== var8)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var2 = var3.bind(var4)(var2);
                    var2 = var2.MessagesDataSections;
                    var2 = var2.Channels;
                    if(!(var2 !== var8)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var2 = var3.bind(var4)(var2);
                    var2 = var2.MessagesDataSections;
                    var2 = var2.Separator;
                    if(!(var2 !== var8)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var2 = var3.bind(var4)(var2);
                    var2 = var2.MessagesDataSections;
                    var2 = var2.SuggestedFriends;
                    if(!(var2 !== var8)) { _fun0003_ip = 21; continue _fun0003 }
case 22:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var2 = var3.bind(var4)(var2);
                    var2 = var2.MessagesDataSections;
                    var2 = var2.Placeholders;
                    if(!(var2 !== var8)) { _fun0003_ip = 23; continue _fun0003 }
case 24:
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
case 23:
                    var6 = _closure1_slot10;
                    var3 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var2 = 32;
                    var2 = var7[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var2['row'] = var5;
                    var7 = _closure2_slot2;
                    var2['height'] = var7;
                    var2 = var6.bind(var4)(var3, var2);
                    return var2;
case 21:
                    var7 = {};
                    var2 = _closure2_slot10;
                    var2 = var2[var5];
                    var7['suggestedFriend'] = var2;
                    var2 = _closure2_slot14;
                    var7['onAddFriendSuggestions'] = var2;
                    var6 = _closure1_slot10;
                    var3 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var2 = 31;
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
case 19:
                    var6 = _closure1_slot10;
                    var3 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var2 = 30;
                    var2 = var7[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
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
                    var8 = _closure2_slot7;
                    var8 = var8[var5];
                    var8 = var8.channelId;
                    var2['channelId'] = var8;
                    var7 = _closure2_slot2;
                    var2['placeholderHeight'] = var7;
                    var2['row'] = var5;
                    var2 = var6.bind(var4)(var3, var2);
                    return var2;
case 15:
                    var3 = _closure1_slot10;
                    var2 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var1 = 29;
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
            var25 = var29.bind(var31)(var25, var28);
            var29 = var31.useMemo;
            var28 = new Array(3);
            var28[0] = var35;
            var28[1] = var19;
            var28[2] = var15;
            var19 = function() {
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
                        if(!(var3 === var4)) { _fun0004_ip = 25; continue _fun0004 }
case 26:
                        var4 = _closure1_slot10;
                        var3 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var2 = 33;
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
case 25:
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
                        if(!(var3 === var5)) { _fun0005_ip = 27; continue _fun0005 }
case 26:
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var2 = 33;
                        var2 = var5[var2];
                        var2 = var3.bind(var4)(var2);
                        var1 = var2.MESSAGES_ITEM_SUGGESTED_FRIENDS_HEADER_HEIGHT;
case 27:
                        return var1;
                    }
                };
                var1['getSize'] = var2;
                return var1;
            };
            var19 = var29.bind(var31)(var19, var28);
            var29 = var31.useMemo;
            var28 = new Array(2);
            var28[0] = var34;
            var28[1] = var23;
            var23 = function() {
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
                        if(!(var2 !== var3)) { _fun0006_ip = 28; continue _fun0006 }
case 29:
                        var6 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var2 = var2[var7];
                        var2 = var6.bind(var4)(var2);
                        var2 = var2.MessagesDataHeader;
                        var2 = var2.EmptyState;
                        if(!(var2 !== var3)) { _fun0006_ip = 30; continue _fun0006 }
case 31:
                        var2 = null;
                        return var2;
case 30:
                        var6 = _closure1_slot10;
                        var3 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var2 = 35;
                        var2 = var7[var2];
                        var3 = var3.bind(var4)(var2);
                        var2 = {};
                        var2 = var6.bind(var4)(var3, var2);
                        return var2;
case 28:
                        var3 = _closure1_slot10;
                        var2 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var1 = 34;
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
                        if(!(var3 !== var5)) { _fun0007_ip = 32; continue _fun0007 }
case 29:
                        var6 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var3 = var3[var7];
                        var3 = var6.bind(var4)(var3);
                        var3 = var3.MessagesDataHeader;
                        var3 = var3.EmptyState;
                        if(!(var3 !== var5)) { _fun0007_ip = 30; continue _fun0007 }
case 31:
                        var3 = 0;
                        return var3;
case 30:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var3 = 35;
                        var3 = var6[var3];
                        var3 = var5.bind(var4)(var3);
                        var3 = var3.MESSAGES_ITEM_EMPTY_STATE_HEIGHT;
                        return var3;
case 32:
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var2 = 34;
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
            var23 = var29.bind(var31)(var23, var28);
            var29 = var31.useMemo;
            var28 = new Array(1);
            var28[0] = var24;
            var24 = function() {
                var1 = {};
                var3 = function getComponent() {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var2 = _closure2_slot12;
                        var1 = null;
                        if(!var2) { _fun0008_ip = 33; continue _fun0008 }
case 34:
                        var5 = _closure1_slot10;
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 36;
                        var2 = var4[var2];
                        var4 = undefined;
                        var3 = var3.bind(var4)(var2);
                        var2 = {};
                        var1 = var5.bind(var4)(var3, var2);
case 33:
                        return var1;
                    }
                };
                var1['getComponent'] = var3;
                var2 = function getSize() {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var2 = _closure2_slot12;
                        var1 = 0;
                        if(!var2) { _fun0009_ip = 35; continue _fun0009 }
case 34:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 36;
                        var3 = var3[var2];
                        var2 = undefined;
                        var2 = var4.bind(var2)(var3);
                        var1 = var2.MESSAGES_ITEM_ADD_FRIENDS_WIDGET_HEIGHT;
case 35:
                        return var1;
                    }
                };
                var1['getSize'] = var2;
                return var1;
            };
            var24 = var29.bind(var31)(var24, var28);
            var29 = var31.useCallback;
            var28 = new Array(2);
            var28[0] = var33;
            var28[1] = var27;
            var27 = function(arg1) {
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
                    if(!(var2 !== var7)) { _fun0010_ip = 36; continue _fun0010 }
case 37:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var5];
                    var2 = var4.bind(var3)(var2);
                    var2 = var2.MessagesDataSections;
                    var2 = var2.Channels;
                    if(!(var2 !== var7)) { _fun0010_ip = 36; continue _fun0010 }
case 38:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var5];
                    var2 = var4.bind(var3)(var2);
                    var2 = var2.MessagesDataSections;
                    var2 = var2.Placeholders;
                    if(!(var2 !== var7)) { _fun0010_ip = 36; continue _fun0010 }
case 28:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var5];
                    var2 = var4.bind(var3)(var2);
                    var2 = var2.MessagesDataSections;
                    var2 = var2.SuggestedFriends;
                    if(!(var2 !== var7)) { _fun0010_ip = 39; continue _fun0010 }
case 40:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var5];
                    var2 = var4.bind(var3)(var2);
                    var2 = var2.MessagesDataSections;
                    var2 = var2.Separator;
                    if(!(var2 !== var7)) { _fun0010_ip = 41; continue _fun0010 }
case 42:
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
case 41:
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 30;
                    var1 = var4[var1];
                    var1 = var2.bind(var3)(var1);
                    var1 = var1.MESSAGES_ITEM_SEPERATOR_HEIGHT;
                    return var1;
case 39:
                    var1 = _closure2_slot4;
                    return var1;
case 36:
                    var1 = _closure2_slot2;
                    return var1;
                }
            };
            var28 = var29.bind(var31)(var27, var28);
            var29 = var31.useCallback;
            var27 = new Array(2);
            var27[0] = var32;
            var27[1] = var21;
            var21 = function(arg1, arg2, arg3) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var6 = arg1;
                    var4 = arg2;
                    var3 = arg3;
                    var7 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var8 = 37;
                    var5 = var1[var8];
                    var1 = undefined;
                    var5 = var7.bind(var1)(var5);
                    var5 = var5.SECTION_HEADER;
                    if(!(var5 !== var6)) { _fun0011_ip = 43; continue _fun0011 }
case 37:
                    var7 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var5 = var5[var8];
                    var5 = var7.bind(var1)(var5);
                    var5 = var5.SECTION_FOOTER;
                    if(!(var5 !== var6)) { _fun0011_ip = 43; continue _fun0011 }
case 44:
                    var7 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var5 = var5[var8];
                    var5 = var7.bind(var1)(var5);
                    var5 = var5.ITEM;
                    if(!(var5 !== var6)) { _fun0011_ip = 45; continue _fun0011 }
case 46:
                    return var1;
case 45:
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var6 = 14;
                    var5 = var5[var6];
                    var5 = var7.bind(var1)(var5);
                    var5 = var5.MessagesDataSections;
                    var5 = var5.FavoriteChannels;
                    if(!(var5 !== var4)) { _fun0011_ip = 47; continue _fun0011 }
case 48:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var2 = var5.bind(var1)(var2);
                    var2 = var2.MessagesDataSections;
                    var2 = var2.Channels;
                    if(!(var2 !== var4)) { _fun0011_ip = 13; continue _fun0011 }
case 49:
                    return var1;
case 13:
                    var2 = _closure2_slot7;
                    var2 = var2[var3];
                    var2 = var2.channelId;
                    return var2;
case 47:
                    var2 = _closure2_slot8;
                    var2 = var2[var3];
                    var2 = var2.channelId;
                    return var2;
case 43:
                    return var1;
                }
            };
            var29 = var29.bind(var31)(var21, var27);
            var27 = var31.useMemo;
            var21 = new Array(2);
            var21[0] = var8;
            var21[1] = var7;
            var7 = function() {
                var1 = {};
                var2 = {};
                var10 = _closure1_slot0;
                var7 = _closure1_slot2;
                var9 = 38;
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
            var27 = var27.bind(var31)(var7, var21);
            var7 = 39;
            var7 = var17[var7];
            var31 = var2.bind(var4)(var7);
            var21 = var31.useExternalScrollEventHandler;
            var7 = {};
            var32 = 'messages';
            var7['id'] = var32;
            var31 = var21.bind(var31)(var7);
            _closure2_slot17 = var31;
            var6 = var17[var6];
            var7 = var2.bind(var4)(var6);
            var6 = var7.useAnimatedScrollHandler;
            var3 = function Q(arg1) {
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
            var21 = {};
            var21['scrollPosition'] = var15;
            var21['handleGuildsNavigationScroll'] = var31;
            var3['__closure'] = var21;
            var21 = 5461403437592.0;
            var3['__workletHash'] = var21;
            var21 = _closure1_slot13;
            var3['__initData'] = var21;
            var21 = var6.bind(var7)(var3);
            var3 = _closure1_slot10;
            var1 = var17[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.AnalyticsLocationProvider;
            var1 = {};
            var1['value'] = var5;
            var7 = _closure1_slot11;
            var6 = _closure1_slot6;
            var5 = {};
            var31 = var8.container;
            var8 = new Array(2);
            var8[0] = var31;
            var8[1] = var18;
            var5['style'] = var8;
            var8 = 40;
            var8 = var17[var8];
            var14 = var14.bind(var4)(var8);
            var8 = {};
            var8['height'] = var16;
            var8['scrollPosition'] = var15;
            var14 = var3.bind(var4)(var14, var8);
            var8 = new Array(4);
            var8[0] = var14;
            var17 = _closure1_slot10;
            var16 = _closure1_slot1;
            var18 = _closure1_slot2;
            if(var11) { _fun0001_ip = 50; continue _fun0001 }
case 51:
            var14 = 42;
            var14 = var18[var14];
            var15 = var16.bind(var4)(var14);
            var14 = {};
            var14['insetEnd'] = var30;
            var33 = _closure1_slot0;
            var30 = 43;
            var31 = var18[var30];
            var31 = var33.bind(var4)(var31);
            var32 = var31.intl;
            var31 = var32.string;
            var30 = var18[var30];
            var30 = var33.bind(var4)(var30);
            var30 = var30.t;
            var30 = var30.OIgYlQ;
            var30 = var31.bind(var32)(var30);
            var14['accessibilityLabel'] = var30;
            var30 = 'windowSize';
            var14['estimatedListSize'] = var30;
            var14['keyExtractor'] = var29;
            var14['itemSize'] = var28;
            var28 = 'dm-messages-list';
            var14['listId'] = var28;
            var28 = var24.getSize;
            var14['listFooterSize'] = var28;
            var28 = true;
            var14['listFooterAlwaysMounted'] = var28;
            var29 = var23.getSize;
            var14['listHeaderSize'] = var29;
            var14['listHeaderAlwaysMounted'] = var28;
            var14['placeholderConfig'] = var27;
            var14['ref'] = var26;
            var14['renderItem'] = var25;
            var24 = var24.getComponent;
            var14['renderListFooter'] = var24;
            var23 = var23.getComponent;
            var14['renderListHeader'] = var23;
            var23 = var19.getComponent;
            var14['renderSectionHeader'] = var23;
            var14['scrollIndicatorInsetEnd'] = var22;
            var22 = 'animatedCallbacks';
            var14['scrollReporting'] = var22;
            var14['scrollHandlerAnimated'] = var21;
            var14['sections'] = var20;
            var19 = var19.getSize;
            var14['sectionHeaderSize'] = var19;
            var14 = var17.bind(var4)(var15, var14);
            _fun0001_ip = 52; continue _fun0001;
case 50:
            var15 = 41;
            var15 = var18[var15];
            var16 = var16.bind(var4)(var15);
            var15 = {};
            var14 = var17.bind(var4)(var16, var15);
case 52:
            var8[1] = var14;
            if(!var10) { _fun0001_ip = 53; continue _fun0001 }
case 54:
            var10 = null;
            if(var13) { _fun0001_ip = 55; continue _fun0001 }
case 53:
            var10 = null;
            if(var11) { _fun0001_ip = 55; continue _fun0001 }
case 56:
            var13 = _closure1_slot10;
            var12 = _closure1_slot1;
            var14 = _closure1_slot2;
            var11 = 44;
            var11 = var14[var11];
            var12 = var12.bind(var4)(var11);
            var11 = {};
            var10 = var13.bind(var4)(var12, var11);
case 55:
            var8[2] = var10;
            var11 = _closure1_slot10;
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var9 = 45;
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
    var4 = 46;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/tabs/messages/Messages.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();