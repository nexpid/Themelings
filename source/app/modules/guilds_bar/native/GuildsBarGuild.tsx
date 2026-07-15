// app/modules/guilds_bar/native/GuildsBarGuild.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.getGuildIconSource;
    var _closure1_slot5 = var8;
    var4 = var4.getGuildIconURL;
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
    var4 = var12.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useItemDragState;
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.TRANSITION_PHYSICS;
    var _closure1_slot13 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot14 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.Fragment;
    var _closure1_slot15 = var8;
    var8 = var4.jsxs;
    var _closure1_slot16 = var8;
    var4 = var4.jsx;
    var _closure1_slot17 = var4;
    var4 = {};
    var8 = 12;
    var9 = var6[var8];
    var11 = var5.bind(var1)(var9);
    var9 = var11.makeMutable;
    var10 = -1;
    var9 = var9.bind(var11)(var10);
    var4['pan'] = var9;
    var9 = var6[var8];
    var13 = var5.bind(var1)(var9);
    var11 = var13.makeMutable;
    var9 = new Array(0);
    var9 = var11.bind(var13)(var9);
    var4['itemMeasurements'] = var9;
    var8 = var6[var8];
    var9 = var5.bind(var1)(var8);
    var8 = var9.makeMutable;
    var8 = var8.bind(var9)(var10);
    var4['activeIndex'] = var8;
    var _closure1_slot18 = var4;
    var4 = 13;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var11 = 14;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.modules;
    var13 = var13.mobile;
    var13 = var13.GUILD_BAR_ITEM_SIZE;
    var10['width'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.modules;
    var11 = var11.mobile;
    var11 = var11.GUILD_BAR_ITEM_SIZE;
    var10['height'] = var11;
    var4['guildIcon'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot19 = var4;
    var4 = {};
    var8 = "function GuildsBarGuildTsx1(values){const{dragDropInProgress,sharedId,guildId,isDragTarget,withSpring,TRANSITION_PHYSICS}=this.__closure;var _guildId;const shouldAnimate=dragDropInProgress.get()&&sharedId.get()===guildId&&!isDragTarget;sharedId.set((_guildId=guildId)!==null&&_guildId!==void 0?_guildId:null);return{animations:{originY:shouldAnimate?withSpring(values.targetOriginY,TRANSITION_PHYSICS,'animate-always'):values.targetOriginY,height:shouldAnimate?withSpring(values.targetHeight,TRANSITION_PHYSICS,'animate-always'):values.targetHeight},initialValues:{originY:values.currentOriginY,height:values.currentHeight}};}";
    var4['code'] = var8;
    var _closure1_slot20 = var4;
    var4 = var7.memo;
    var2 = function GuildsBarGuild(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var16 = var1.guildId;
            var _closure2_slot0 = var16;
            var10 = var1.isDragPreview;
            var4 = undefined;
            if(!(var10 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var10 = false;
case 2:
            var8 = var1.hideExpandedChildren;
            if(!(var8 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var8 = false;
case 4:
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var _closure2_slot12 = var4;
            var _closure2_slot13 = var4;
            var _closure2_slot14 = var4;
            var2 = _closure1_slot1;
            var33 = _closure1_slot2;
            var1 = 15;
            var1 = var33[var1];
            var5 = var2.bind(var4)(var1);
            var1 = 'GuildsBarGuild';
            var25 = var5.bind(var4)(var1);
            var1 = _closure1_slot19;
            var9 = var1.bind(var4)();
            var38 = _closure1_slot0;
            var1 = 16;
            var1 = var33[var1];
            var7 = var38.bind(var4)(var1);
            var5 = var7.useToken;
            var1 = 14;
            var1 = var33[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.modules;
            var1 = var1.mobile;
            var1 = var1.GUILD_BAR_ITEM_SIZE;
            var31 = var5.bind(var7)(var1);
            _closure2_slot1 = var31;
            var1 = 17;
            var5 = var33[var1];
            var11 = var38.bind(var4)(var5);
            var7 = var11.useGuildsBarAnimatedWrapperStyles;
            var5 = {'disableSelectedColor': true, 'disableBGColor': true};
            var18 = var7.bind(var11)(var5);
            var5 = 18;
            var5 = var33[var5];
            var5 = var38.bind(var4)(var5);
            var11 = var5.MobileHomeDrawerExperiment;
            var7 = var11.useConfig;
            var5 = {};
            var12 = 'guilds';
            var5['location'] = var12;
            var5 = var7.bind(var11)(var5);
            var27 = var5.enableHome;
            var5 = 19;
            var5 = var33[var5];
            var7 = var38.bind(var4)(var5);
            var5 = var7.useDrawerOpen;
            var21 = var5.bind(var7)(var27);
            _closure2_slot2 = var21;
            var35 = _closure1_slot3;
            var7 = var35.useRef;
            var17 = 20;
            var5 = var33[var17];
            var5 = var38.bind(var4)(var5);
            var5 = var5.HomeDrawerActiveHook;
            var5 = var5.NONE;
            var5 = var7.bind(var35)(var5);
            _closure2_slot3 = var5;
            var11 = var35.useCallback;
            var7 = function(arg1) {
                var2 = _closure2_slot3;
                var1 = arg1;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var5 = new Array(0);
            var15 = var11.bind(var35)(var7, var5);
            var7 = 21;
            var5 = var33[var7];
            var14 = var38.bind(var4)(var5);
            var13 = var14.useStateFromStoresObject;
            var5 = _closure1_slot10;
            var12 = new Array(4);
            var12[0] = var5;
            var5 = _closure1_slot7;
            var12[1] = var5;
            var5 = _closure1_slot8;
            var12[2] = var5;
            var5 = _closure1_slot4;
            var12[3] = var5;
            var11 = new Array(1);
            var11[0] = var16;
            var5 = function() {
                var1 = {};
                var4 = _closure1_slot10;
                var3 = var4.getGuildId;
                var3 = var3.bind(var4)();
                var4 = _closure2_slot0;
                var3 = var3 === var4;
                var1['selected'] = var3;
                var5 = _closure1_slot7;
                var3 = var5.isUnavailable;
                var3 = var3.bind(var5)(var4);
                var1['isUnavailable'] = var3;
                var5 = _closure1_slot8;
                var3 = var5.hasUnread;
                var3 = var3.bind(var5)(var4);
                var1['unread'] = var3;
                var3 = var5.getMentionCount;
                var3 = var3.bind(var5)(var4);
                var1['mentionCount'] = var3;
                var3 = var5.getIsMentionLowImportance;
                var3 = var3.bind(var5)(var4);
                var1['isMentionLowImportance'] = var3;
                var3 = _closure1_slot4;
                var2 = var3.isLurking;
                var2 = var2.bind(var3)(var4);
                var1['isLurking'] = var2;
                return var1;
            };
            var11 = var13.bind(var14)(var12, var5, var11);
            var12 = var11.selected;
            _closure2_slot4 = var12;
            var5 = var11.isUnavailable;
            _closure2_slot5 = var5;
            var28 = var11.mentionCount;
            _closure2_slot6 = var28;
            var23 = var11.unread;
            _closure2_slot7 = var23;
            var19 = var11.isMentionLowImportance;
            var29 = var11.isLurking;
            _closure2_slot8 = var29;
            var11 = var33[var7];
            var24 = var38.bind(var4)(var11);
            var22 = var24.useStateFromStores;
            var11 = _closure1_slot9;
            var20 = new Array(1);
            var20[0] = var11;
            var14 = new Array(3);
            var14[0] = var16;
            var14[1] = var31;
            var14[2] = var12;
            var11 = 23;
            var11 = var33[var11];
            var39 = var2.bind(var4)(var11);
            var41 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var5 = _closure1_slot9;
                    var2 = var5.getGuild;
                    var1 = _closure2_slot0;
                    var7 = var2.bind(var5)(var1);
                    var5 = null;
                    var1 = var5 != var7;
                    var6 = undefined;
                    var2 = undefined;
                    if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 5:
                    var9 = _closure1_slot6;
                    var8 = _closure2_slot1;
                    var1 = _closure2_slot4;
                    var2 = var9.bind(var6)(var7, var8, var1);
case 6:
                    var1 = {};
                    var9 = var5 == var7;
                    var8 = undefined;
                    if(var9) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                    var8 = var7.name;
case 7:
                    var1['guildName'] = var8;
                    var1['icon'] = var2;
                    var8 = var5 != var2;
                    var2 = undefined;
                    if(!var8) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                    var5 = var5 != var7;
                    var2 = undefined;
                    if(!var5) { _fun0002_ip = 9; continue _fun0002 }
case 11:
                    var5 = _closure1_slot5;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var4 = 22;
                    var8 = var10[var4];
                    var8 = var9.bind(var6)(var8);
                    var8 = var8.ImageSizes;
                    var4 = var10[var4];
                    var4 = var9.bind(var6)(var4);
                    var4 = var4.GuildIconSizes;
                    var4 = var4.LARGE;
                    var4 = var8[var4];
                    var3 = _closure2_slot4;
                    var2 = var5.bind(var6)(var7, var4, var3);
case 9:
                    var1['asset'] = var2;
                    return var1;
                }
            };
            var43 = var24;
            var42 = var20;
            var40 = var14;
            var11 = var43[var22](var42, var41, var40, var39, var38);
            var24 = var11.asset;
            var13 = var11.icon;
            var14 = var11.guildName;
            _closure2_slot9 = var14;
            var11 = 24;
            var11 = var33[var11];
            var11 = var2.bind(var4)(var11);
            var11 = var11.bind(var4)(var16, var28, var19);
            var20 = var11.badgeTopRight;
            var19 = var11.badgeBottomRight;
            var30 = var11.cutouts;
            var11 = var11.mediaState;
            _closure2_slot10 = var11;
            var26 = var35.useMemo;
            var22 = new Array(5);
            var22[0] = var16;
            var22[1] = var31;
            var22[2] = var29;
            var22[3] = var5;
            var22[4] = var21;
            var21 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = {};
                    var2 = function onPress() {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            var5 = _closure1_slot9;
                            var3 = var5.getGuild;
                            var1 = _closure2_slot0;
                            var3 = var3.bind(var5)(var1);
                            var1 = null;
                            if(!(var1 != var3)) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                            var1 = _closure2_slot5;
                            if(var1) { _fun0004_ip = 12; continue _fun0004 }
case 14:
                            var3 = _closure1_slot11;
                            var1 = var3.getGuildFolders;
                            var5 = var1.bind(var3)();
                            var3 = var5.findIndex;
                            var1 = function(arg1) {
                                var1 = arg1;
                                var3 = var1.guildIds;
                                var2 = var3.includes;
                                var1 = _closure2_slot0;
                                var1 = var2.bind(var3)(var1);
                                return var1;
                            };
                            var7 = var3.bind(var5)(var1);
                            var1 = -1;
                            if(!(var7 > var1)) { _fun0004_ip = 15; continue _fun0004 }
case 10:
                            var3 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var6 = 27;
                            var1 = var1[var6];
                            var5 = undefined;
                            var9 = var3.bind(var5)(var1);
                            var8 = var9.track;
                            var1 = _closure1_slot14;
                            var3 = var1.GUILD_CLICKED;
                            var1 = {};
                            var10 = _closure2_slot0;
                            var1['guild_id'] = var10;
                            var1['index'] = var7;
                            var1 = var8.bind(var9)(var3, var1);
                            var1 = _closure2_slot2;
                            if(!var1) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                            var3 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var1 = var1[var6];
                            var6 = var3.bind(var5)(var1);
                            var5 = var6.track;
                            var1 = _closure1_slot14;
                            var3 = var1.HOME_DRAWER_GUILD_CLICKED;
                            var1 = {};
                            var8 = _closure2_slot0;
                            var1['guild_id'] = var8;
                            var1['index'] = var7;
                            var7 = _closure2_slot3;
                            var7 = var7.current;
                            var1['active_hook'] = var7;
                            var1 = var5.bind(var6)(var3, var1);
case 15:
                            var1 = _closure2_slot8;
                            if(!var1) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 28;
                            var3 = var3[var1];
                            var1 = undefined;
                            var5 = var5.bind(var1)(var3);
                            var3 = var5.trackGuildIconClicked;
                            var1 = _closure2_slot0;
                            var1 = var3.bind(var5)(var1);
case 17:
                            var5 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 29;
                            var3 = var3[var1];
                            var1 = undefined;
                            var3 = var5.bind(var1)(var3);
                            var2 = _closure2_slot0;
                            var2 = var3.bind(var1)(var2);
                            return var1;
case 12:
                            var2 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var1 = 25;
                            var1 = var9[var1];
                            var8 = undefined;
                            var3 = var2.bind(var8)(var1);
                            var2 = var3.show;
                            var1 = {};
                            var7 = _closure1_slot0;
                            var4 = 26;
                            var5 = var9[var4];
                            var5 = var7.bind(var8)(var5);
                            var10 = var5.intl;
                            var6 = var10.string;
                            var5 = var9[var4];
                            var5 = var7.bind(var8)(var5);
                            var5 = var5.t;
                            var5 = var5.R0RpRX;
                            var5 = var6.bind(var10)(var5);
                            var1['title'] = var5;
                            var5 = var9[var4];
                            var5 = var7.bind(var8)(var5);
                            var6 = var5.intl;
                            var5 = var6.string;
                            var4 = var9[var4];
                            var4 = var7.bind(var8)(var4);
                            var4 = var4.t;
                            var4 = var4.m9gRVN;
                            var4 = var5.bind(var6)(var4);
                            var1['body'] = var4;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        }
                    };
                    var1['onPress'] = var2;
                    var4 = _closure2_slot8;
                    var2 = undefined;
                    if(!var4) { _fun0003_ip = 13; continue _fun0003 }
case 19:
                    var2 = function(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var5 = _closure1_slot9;
                            var3 = var5.getGuild;
                            var2 = _closure2_slot0;
                            var9 = var3.bind(var5)(var2);
                            var2 = null;
                            if(!(var2 != var9)) { _fun0005_ip = 20; continue _fun0005 }
case 21:
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 30;
                            var2 = var3[var2];
                            var3 = undefined;
                            var5 = var5.bind(var3)(var2);
                            var2 = var5.getIsScreenReaderEnabled;
                            var2 = var2.bind(var5)();
                            if(var2) { _fun0005_ip = 20; continue _fun0005 }
case 22:
                            var5 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var2 = 31;
                            var2 = var7[var2];
                            var7 = var5.bind(var3)(var2);
                            var5 = _closure2_slot0;
                            var8 = _closure1_slot11;
                            var2 = var8.getGuildsTree;
                            var2 = var2.bind(var8)();
                            var2 = var2.version;
                            var7 = var7.bind(var3)(var5, var2);
                            var _closure4_slot0 = var7;
                            var5 = var7.length;
                            var2 = 0;
                            if(!(var2 !== var5)) { _fun0005_ip = 20; continue _fun0005 }
case 23:
                            var2 = arg1;
                            var2 = var2.nativeEvent;
                            var8 = var2.pageY;
                            var5 = _closure1_slot18;
                            var11 = var5.activeIndex;
                            var10 = var11.set;
                            var2 = -1;
                            var2 = var10.bind(var11)(var2);
                            var2 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var1 = 32;
                            var1 = var10[var1];
                            var3 = var2.bind(var3)(var1);
                            var2 = var3.showContextMenu;
                            var1 = {};
                            var10 = _closure2_slot0;
                            var1['key'] = var10;
                            var9 = var9.name;
                            var1['title'] = var9;
                            var1['items'] = var7;
                            var7 = _closure2_slot1;
                            var9 = 12;
                            var7 = var9 + var7;
                            var7 = var7 + var9;
                            var1['x'] = var7;
                            var9 = _closure2_slot1;
                            var7 = 2;
                            var7 = var9 / var7;
                            var7 = var8 - var7;
                            var1['y'] = var7;
                            var7 = 'left';
                            var1['positionX'] = var7;
                            var7 = 'below';
                            var1['positionY'] = var7;
                            var7 = _closure2_slot1;
                            var1['width'] = var7;
                            var6 = _closure2_slot1;
                            var1['height'] = var6;
                            var1['state'] = var5;
                            var5 = new Array(0);
                            var1['dividerIndexes'] = var5;
                            var5 = 'never';
                            var1['keyboardShouldPersistTaps'] = var5;
                            var5 = function requestClose(arg1) {
                                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                                    var1 = arg1;
                                    if(var1) { _fun0006_ip = 24; continue _fun0006 }
case 25:
                                    var2 = _closure4_slot0;
                                    var1 = _closure1_slot18;
                                    var3 = var1.activeIndex;
                                    var1 = var3.get;
                                    var1 = var1.bind(var3)();
                                    var2 = var2[var1];
                                    var1 = null;
                                    if(!(var1 != var2)) { _fun0006_ip = 24; continue _fun0006 }
case 26:
                                    var1 = var2.action;
                                    var1 = var1.bind(var2)();
case 24:
                                    var2 = _closure1_slot18;
                                    var4 = var2.activeIndex;
                                    var3 = var4.set;
                                    var2 = -1;
                                    var2 = var3.bind(var4)(var2);
                                    var3 = _closure1_slot0;
                                    var2 = _closure1_slot2;
                                    var1 = 32;
                                    var2 = var2[var1];
                                    var1 = undefined;
                                    var3 = var3.bind(var1)(var2);
                                    var2 = var3.hideContextMenu;
                                    var2 = var2.bind(var3)();
                                    return var1;
                                }
                            };
                            var1['requestClose'] = var5;
                            var4 = function onClose() {
                                var1 = undefined;
                                return var1;
                            };
                            var1['onClose'] = var4;
                            var1 = var2.bind(var3)(var1);
case 20:
                            var1 = undefined;
                            return var1;
                        }
                    };
case 13:
                    var1['onLongPress'] = var2;
                    return var1;
                }
            };
            var21 = var26.bind(var35)(var21, var22);
            var26 = var35.useMemo;
            var22 = new Array(4);
            var22[0] = var14;
            var22[1] = var28;
            var22[2] = var23;
            var22[3] = var11;
            var11 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = _closure2_slot6;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0007_ip = 3; continue _fun0007 }
case 27:
                    var3 = _closure2_slot6;
                    var2 = 0;
                    if(!(!(var3 > var2))) { _fun0007_ip = 28; continue _fun0007 }
case 3:
                    var3 = _closure2_slot7;
                    var2 = true;
                    if(!(var2 !== var3)) { _fun0007_ip = 29; continue _fun0007 }
case 21:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 26;
                    var4 = var7[var2];
                    var3 = undefined;
                    var4 = var6.bind(var3)(var4);
                    var5 = var4.intl;
                    var4 = var5.formatToPlainString;
                    var2 = var7[var2];
                    var2 = var6.bind(var3)(var2);
                    var2 = var2.t;
                    var3 = var2["/uzRss"];
                    var2 = {};
                    var6 = _closure2_slot9;
                    var2['guildName'] = var6;
                    var6 = _closure2_slot6;
                    var2['mentions'] = var6;
                    var6 = var4.bind(var5)(var3, var2);
                    _fun0007_ip = 30; continue _fun0007;
case 29:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 26;
                    var4 = var8[var2];
                    var3 = undefined;
                    var4 = var7.bind(var3)(var4);
                    var5 = var4.intl;
                    var4 = var5.formatToPlainString;
                    var2 = var8[var2];
                    var2 = var7.bind(var3)(var2);
                    var2 = var2.t;
                    var3 = var2.lzqe42;
                    var2 = {};
                    var7 = _closure2_slot9;
                    var2['guildName'] = var7;
                    var6 = var4.bind(var5)(var3, var2);
case 30:
                    _fun0007_ip = 31; continue _fun0007;
case 28:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 26;
                    var4 = var8[var2];
                    var3 = undefined;
                    var4 = var7.bind(var3)(var4);
                    var5 = var4.intl;
                    var4 = var5.formatToPlainString;
                    var2 = var8[var2];
                    var2 = var7.bind(var3)(var2);
                    var2 = var2.t;
                    var3 = var2["/uzRss"];
                    var2 = {};
                    var7 = _closure2_slot9;
                    var2['guildName'] = var7;
                    var7 = _closure2_slot6;
                    var2['mentions'] = var7;
                    var6 = var4.bind(var5)(var3, var2);
case 31:
                    var4 = new Array(0);
                    var2 = _closure2_slot10;
                    var2 = var2.activeEvent;
                    if(!var2) { _fun0007_ip = 32; continue _fun0007 }
case 33:
                    var3 = var4.push;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var2 = 26;
                    var5 = var10[var2];
                    var8 = undefined;
                    var5 = var9.bind(var8)(var5);
                    var7 = var5.intl;
                    var5 = var7.string;
                    var2 = var10[var2];
                    var2 = var9.bind(var8)(var2);
                    var2 = var2.t;
                    var2 = var2.dHvJ2p;
                    var2 = var5.bind(var7)(var2);
                    var2 = var3.bind(var4)(var2);
case 32:
                    var2 = _closure2_slot10;
                    var2 = var2.liveStage;
                    if(!var2) { _fun0007_ip = 34; continue _fun0007 }
case 35:
                    var3 = var4.push;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var2 = 26;
                    var5 = var10[var2];
                    var8 = undefined;
                    var5 = var9.bind(var8)(var5);
                    var7 = var5.intl;
                    var5 = var7.string;
                    var2 = var10[var2];
                    var2 = var9.bind(var8)(var2);
                    var2 = var2.t;
                    var2 = var2.OO7ndG;
                    var2 = var5.bind(var7)(var2);
                    var2 = var3.bind(var4)(var2);
case 34:
                    var2 = _closure2_slot10;
                    var2 = var2.screenshare;
                    if(!var2) { _fun0007_ip = 36; continue _fun0007 }
case 37:
                    var3 = var4.push;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var2 = 26;
                    var5 = var10[var2];
                    var8 = undefined;
                    var5 = var9.bind(var8)(var5);
                    var7 = var5.intl;
                    var5 = var7.string;
                    var2 = var10[var2];
                    var2 = var9.bind(var8)(var2);
                    var2 = var2.t;
                    var2 = var2.wsHMZ7;
                    var2 = var5.bind(var7)(var2);
                    var2 = var3.bind(var4)(var2);
case 36:
                    var2 = _closure2_slot10;
                    var2 = var2.video;
                    if(!var2) { _fun0007_ip = 38; continue _fun0007 }
case 39:
                    var3 = var4.push;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var2 = 26;
                    var5 = var10[var2];
                    var8 = undefined;
                    var5 = var9.bind(var8)(var5);
                    var7 = var5.intl;
                    var5 = var7.string;
                    var2 = var10[var2];
                    var2 = var9.bind(var8)(var2);
                    var2 = var2.t;
                    var2 = var2.BrLCS0;
                    var2 = var5.bind(var7)(var2);
                    var2 = var3.bind(var4)(var2);
case 38:
                    var2 = _closure2_slot10;
                    var2 = var2.audio;
                    if(!var2) { _fun0007_ip = 40; continue _fun0007 }
case 41:
                    var3 = var4.push;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var2 = 26;
                    var5 = var10[var2];
                    var8 = undefined;
                    var5 = var9.bind(var8)(var5);
                    var7 = var5.intl;
                    var5 = var7.string;
                    var2 = var10[var2];
                    var2 = var9.bind(var8)(var2);
                    var2 = var2.t;
                    var2 = var2.jPBhKy;
                    var2 = var5.bind(var7)(var2);
                    var2 = var3.bind(var4)(var2);
case 40:
                    var1 = _closure2_slot10;
                    var1 = var1.activity;
                    if(!var1) { _fun0007_ip = 42; continue _fun0007 }
case 43:
                    var2 = var4.push;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var1 = 26;
                    var3 = var9[var1];
                    var7 = undefined;
                    var3 = var8.bind(var7)(var3);
                    var5 = var3.intl;
                    var3 = var5.string;
                    var1 = var9[var1];
                    var1 = var8.bind(var7)(var1);
                    var1 = var1.t;
                    var1 = var1.Y3Gii5;
                    var1 = var3.bind(var5)(var1);
                    var1 = var2.bind(var4)(var1);
case 42:
                    var3 = var4.length;
                    var2 = 0;
                    var1 = var6;
                    if(!(var3 > var2)) { _fun0007_ip = 44; continue _fun0007 }
case 45:
                    var3 = var4.join;
                    var2 = ' ';
                    var5 = var3.bind(var4)(var2);
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var4 = var2.concat;
                    var3 = '';
                    var2 = ', ';
                    var1 = var4.bind(var3)(var6, var2, var5);
case 44:
                    return var1;
                }
            };
            var22 = var26.bind(var35)(var11, var22);
            var11 = 33;
            var11 = var33[var11];
            var11 = var2.bind(var4)(var11);
            var11 = var11.bind(var4)(var16, var13, var24);
            var13 = _closure1_slot12;
            var26 = var13.bind(var4)(var16, var10);
            var13 = var26.isDragTarget;
            _closure2_slot11 = var13;
            var28 = var26.dragState;
            var24 = var26.overState;
            var32 = var26.itemSize;
            var36 = var26.dragDropInProgress;
            _closure2_slot12 = var36;
            var7 = var33[var7];
            var31 = var38.bind(var4)(var7);
            var29 = var31.useStateFromStores;
            var7 = _closure1_slot11;
            var26 = new Array(1);
            var26[0] = var7;
            var7 = function() {
                var2 = _closure1_slot11;
                var1 = var2.getGuildsTree;
                var1 = var1.bind(var2)();
                var1 = var1.version;
                return var1;
            };
            var7 = var29.bind(var31)(var26, var7);
            _closure2_slot13 = var7;
            var29 = var35.useMemo;
            var26 = new Array(2);
            var26[0] = var16;
            var26[1] = var7;
            var7 = function() {
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 31;
                var1 = var8[var1];
                var6 = undefined;
                var4 = var7.bind(var6)(var1);
                var5 = _closure2_slot0;
                var3 = _closure2_slot13;
                var4 = var4.bind(var6)(var5, var3);
                var3 = 34;
                var3 = var8[var3];
                var3 = var7.bind(var6)(var3);
                var1 = _closure2_slot13;
                var6 = var3.bind(var6)(var5, var1);
                var3 = var4.map;
                var1 = function(arg1) {
                    var2 = arg1;
                    var1 = {};
                    var3 = var2.label;
                    var1['name'] = var3;
                    var3 = var2.label;
                    var1['label'] = var3;
                    var2 = var2.action;
                    var1['action'] = var2;
                    return var1;
                };
                var10 = var3.bind(var4)(var1);
                var5 = new Array(0);
                var9 = 0;
                var11 = var5;
                var9 = arraySpread(var11, var10, var9);
                var4 = var6.map;
                var1 = function(arg1) {
                    var2 = arg1;
                    var1 = {};
                    var3 = var2.name;
                    var1['name'] = var3;
                    var3 = var2.label;
                    var1['label'] = var3;
                    var2 = var2.action;
                    var1['action'] = var2;
                    return var1;
                };
                var10 = var4.bind(var6)(var1);
                var11 = var5;
                var1 = arraySpread(var11, var10, var9);
                var _closure3_slot0 = var5;
                var1 = {};
                var4 = var5.map;
                var3 = function(arg1) {
                    var1 = arg1;
                    var3 = var1.name;
                    var2 = var1.label;
                    var1 = {};
                    var1['name'] = var3;
                    var1['label'] = var2;
                    return var1;
                };
                var3 = var4.bind(var5)(var3);
                var1['accessibilityActions'] = var3;
                var2 = function onAccessibilityAction(arg1) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var2 = arg1;
                        var _closure4_slot0 = var2;
                        var3 = _closure3_slot0;
                        var2 = var3.find;
                        var1 = function(arg1) {
                            var1 = arg1;
                            var2 = var1.name;
                            var1 = _closure4_slot0;
                            var1 = var1.nativeEvent;
                            var1 = var1.actionName;
                            var1 = var2 === var1;
                            return var1;
                        };
                        var2 = var2.bind(var3)(var1);
                        var4 = null;
                        var1 = var4 == var2;
                        if(var1) { _fun0008_ip = 46; continue _fun0008 }
case 47:
                        var3 = var2.action;
                        var1 = var4 == var3;
case 46:
                        if(var1) { _fun0008_ip = 48; continue _fun0008 }
case 49:
                        var1 = var2.action;
                        var1 = var1.bind(var2)();
case 48:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['onAccessibilityAction'] = var2;
                return var1;
            };
            var7 = var29.bind(var35)(var7, var26);
            var31 = var7.accessibilityActions;
            var29 = var7.onAccessibilityAction;
            var7 = 12;
            var7 = var33[var7];
            var26 = var38.bind(var4)(var7);
            var7 = var26.useSharedValue;
            var26 = var7.bind(var26)(var16);
            _closure2_slot14 = var26;
            var34 = var35.useCallback;
            var7 = function R(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var3 = arg1;
                    var2 = _closure2_slot12;
                    var1 = var2.get;
                    var4 = var1.bind(var2)();
                    if(!var4) { _fun0009_ip = 47; continue _fun0009 }
case 50:
                    var2 = _closure2_slot14;
                    var1 = var2.get;
                    var2 = var1.bind(var2)();
                    var1 = _closure2_slot0;
                    var4 = var2 === var1;
case 47:
                    if(!var4) { _fun0009_ip = 46; continue _fun0009 }
case 51:
                    var1 = _closure2_slot11;
                    var4 = !var1;
case 46:
                    var5 = _closure2_slot14;
                    var2 = var5.set;
                    var7 = _closure2_slot0;
                    var1 = null;
                    var7 = var1 != var7;
                    if(!var7) { _fun0009_ip = 52; continue _fun0009 }
case 53:
                    var1 = _closure2_slot0;
case 52:
                    var1 = var2.bind(var5)(var1);
                    var1 = {};
                    var2 = {};
                    if(var4) { _fun0009_ip = 54; continue _fun0009 }
case 10:
                    var5 = var3.targetOriginY;
                    _fun0009_ip = 55; continue _fun0009;
case 54:
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var7 = 35;
                    var8 = var8[var7];
                    var7 = undefined;
                    var10 = var9.bind(var7)(var8);
                    var9 = var10.withSpring;
                    var8 = var3.targetOriginY;
                    var7 = _closure1_slot13;
                    var6 = 'animate-always';
                    var5 = var9.bind(var10)(var8, var7, var6);
case 55:
                    var2['originY'] = var5;
                    if(var4) { _fun0009_ip = 56; continue _fun0009 }
case 57:
                    var4 = var3.targetHeight;
                    _fun0009_ip = 58; continue _fun0009;
case 56:
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var6 = 35;
                    var7 = var7[var6];
                    var6 = undefined;
                    var9 = var8.bind(var6)(var7);
                    var8 = var9.withSpring;
                    var7 = var3.targetHeight;
                    var6 = _closure1_slot13;
                    var5 = 'animate-always';
                    var4 = var8.bind(var9)(var7, var6, var5);
case 58:
                    var2['height'] = var4;
                    var1['animations'] = var2;
                    var2 = {};
                    var4 = var3.currentOriginY;
                    var2['originY'] = var4;
                    var3 = var3.currentHeight;
                    var2['height'] = var3;
                    var1['initialValues'] = var2;
                    return var1;
                }
            };
            var3 = {};
            var3['dragDropInProgress'] = var36;
            var3['sharedId'] = var26;
            var3['guildId'] = var16;
            var3['isDragTarget'] = var13;
            var37 = 35;
            var37 = var33[var37];
            var37 = var38.bind(var4)(var37);
            var37 = var37.withSpring;
            var3['withSpring'] = var37;
            var37 = _closure1_slot13;
            var3['TRANSITION_PHYSICS'] = var37;
            var7['__closure'] = var3;
            var3 = 14096669603718.0;
            var7['__workletHash'] = var3;
            var3 = _closure1_slot20;
            var7['__initData'] = var3;
            var3 = new Array(4);
            var3[0] = var16;
            var3[1] = var26;
            var3[2] = var13;
            var3[3] = var36;
            var7 = var34.bind(var35)(var7, var3);
            var3 = _closure1_slot17;
            var1 = var33[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['id'] = var16;
            var1['draggedItemSize'] = var32;
            var1['accessibilityActions'] = var31;
            var1['onAccessibilityAction'] = var29;
            var29 = undefined;
            if(var13) { _fun0001_ip = 59; continue _fun0001 }
case 60:
            var29 = var30;
case 59:
            var1['cutouts'] = var29;
            var1['selected'] = var12;
            var1['isDragTarget'] = var13;
            var1['dragState'] = var28;
            var1['sharedId'] = var26;
            var25 = !var25;
            if(!var25) { _fun0001_ip = 61; continue _fun0001 }
case 62:
            var26 = !var12;
            if(!var26) { _fun0001_ip = 63; continue _fun0001 }
case 64:
            var26 = !var27;
case 63:
            var25 = var26;
case 61:
            var1['circle'] = var25;
            var1['overState'] = var24;
            var1['unread'] = var23;
            var1['label'] = var22;
            var1['config'] = var21;
            var1['styles'] = var18;
            if(var10) { _fun0001_ip = 65; continue _fun0001 }
case 66:
            var10 = var13;
case 65:
            var1['isDragPreview'] = var10;
            var1['layout'] = var7;
            var13 = _closure1_slot16;
            var10 = _closure1_slot15;
            var7 = {};
            var18 = new Array(2);
            var18[0] = var20;
            var18[1] = var19;
            var7['children'] = var18;
            var7 = var13.bind(var4)(var10, var7);
            var1['externalChildren'] = var7;
            var7 = undefined;
            if(var8) { _fun0001_ip = 67; continue _fun0001 }
case 68:
            var13 = _closure1_slot17;
            var10 = _closure1_slot1;
            var8 = _closure1_slot2;
            var8 = var8[var17];
            var10 = var10.bind(var4)(var8);
            var8 = {};
            var8['guildId'] = var16;
            var8['onActiveHookChange'] = var15;
            var7 = var13.bind(var4)(var10, var8);
case 67:
            var1['expandedChildren'] = var7;
            if(var5) { _fun0001_ip = 69; continue _fun0001 }
case 70:
            var5 = null;
            if(!(var5 == var11)) { _fun0001_ip = 71; continue _fun0001 }
case 72:
            var8 = _closure1_slot17;
            var7 = _closure1_slot1;
            var13 = _closure1_slot2;
            var10 = 22;
            var5 = var13[var10];
            var7 = var7.bind(var4)(var5);
            var5 = {};
            var5['value'] = var14;
            var5['selected'] = var12;
            var5['animate'] = var12;
            var12 = _closure1_slot0;
            var10 = var13[var10];
            var10 = var12.bind(var4)(var10);
            var10 = var10.GuildIconSizes;
            var10 = var10.LARGE;
            var5['size'] = var10;
            var5 = var8.bind(var4)(var7, var5);
            _fun0001_ip = 73; continue _fun0001;
case 71:
            var10 = _closure1_slot17;
            var8 = _closure1_slot1;
            var12 = _closure1_slot2;
            var7 = 36;
            var7 = var12[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var7['source'] = var11;
            var11 = var9.guildIcon;
            var7['style'] = var11;
            var5 = var10.bind(var4)(var8, var7);
case 73:
            _fun0001_ip = 74; continue _fun0001;
case 69:
            var8 = _closure1_slot17;
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var6 = 36;
            var6 = var12[var6];
            var7 = var11.bind(var4)(var6);
            var6 = {};
            var10 = 37;
            var10 = var12[var10];
            var10 = var11.bind(var4)(var10);
            var6['source'] = var10;
            var9 = var9.guildIcon;
            var6['style'] = var9;
            var5 = var8.bind(var4)(var7, var6);
case 74:
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 38;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guilds_bar/native/GuildsBarGuild.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();