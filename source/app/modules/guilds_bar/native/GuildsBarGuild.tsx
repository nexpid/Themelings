// app/modules/guilds_bar/native/GuildsBarGuild.tsx
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
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.StyleSheet;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var10 = var4.getGuildIconSource;
    var _closure1_slot4 = var10;
    var4 = var4.getGuildIconURL;
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
    var4 = var8.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useItemDragState;
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var11 = var4.GUILD_ITEM_SIZE;
    var _closure1_slot12 = var11;
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
    var8 = var9.create;
    var4 = {};
    var10 = {};
    var10['width'] = var11;
    var10['height'] = var11;
    var4['guildIcon'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot18 = var4;
    var4 = {};
    var8 = "function GuildsBarGuildTsx1(values){const{dragDropInProgress,sharedId,guildId,isDragTarget,withSpring,TRANSITION_PHYSICS}=this.__closure;var _guildId;const shouldAnimate=dragDropInProgress.get()&&sharedId.get()===guildId&&!isDragTarget;sharedId.set((_guildId=guildId)!==null&&_guildId!==void 0?_guildId:null);return{animations:{originY:shouldAnimate?withSpring(values.targetOriginY,TRANSITION_PHYSICS,'animate-always'):values.targetOriginY,height:shouldAnimate?withSpring(values.targetHeight,TRANSITION_PHYSICS,'animate-always'):values.targetHeight},initialValues:{originY:values.currentOriginY,height:values.currentHeight}};}";
    var4['code'] = var8;
    var _closure1_slot19 = var4;
    var4 = var7.memo;
    var2 = function GuildsBarGuild(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var12 = var1.guildId;
            var _closure2_slot0 = var12;
            var7 = var1.isDragPreview;
            var4 = undefined;
            if(!(var7 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = false;
case 2:
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var31 = _closure1_slot0;
            var26 = _closure1_slot2;
            var1 = 12;
            var2 = var26[var1];
            var6 = var31.bind(var4)(var2);
            var5 = var6.useGuildsBarAnimatedWrapperStyles;
            var2 = true;
            var8 = var5.bind(var6)(var2, var2);
            var2 = 13;
            var5 = var26[var2];
            var13 = var31.bind(var4)(var5);
            var11 = var13.useStateFromStoresObject;
            var5 = _closure1_slot9;
            var10 = new Array(3);
            var10[0] = var5;
            var5 = _closure1_slot6;
            var10[1] = var5;
            var5 = _closure1_slot7;
            var10[2] = var5;
            var6 = new Array(1);
            var6[0] = var12;
            var5 = function() {
                var1 = {};
                var4 = _closure1_slot9;
                var3 = var4.getGuildId;
                var3 = var3.bind(var4)();
                var4 = _closure2_slot0;
                var3 = var3 === var4;
                var1['selected'] = var3;
                var5 = _closure1_slot6;
                var3 = var5.isUnavailable;
                var3 = var3.bind(var5)(var4);
                var1['isUnavailable'] = var3;
                var3 = _closure1_slot7;
                var2 = var3.hasUnread;
                var2 = var2.bind(var3)(var4);
                var1['unread'] = var2;
                var2 = var3.getMentionCount;
                var2 = var2.bind(var3)(var4);
                var1['mentionCount'] = var2;
                var2 = var3.getIsMentionLowImportance;
                var2 = var2.bind(var3)(var4);
                var1['isMentionLowImportance'] = var2;
                return var1;
            };
            var10 = var11.bind(var13)(var10, var5, var6);
            var11 = var10.selected;
            _closure2_slot1 = var11;
            var5 = var10.isUnavailable;
            _closure2_slot2 = var5;
            var6 = var10.mentionCount;
            _closure2_slot3 = var6;
            var18 = var10.unread;
            _closure2_slot4 = var18;
            var15 = var10.isMentionLowImportance;
            var2 = var26[var2];
            var19 = var31.bind(var4)(var2);
            var17 = var19.useStateFromStores;
            var2 = _closure1_slot8;
            var16 = new Array(1);
            var16[0] = var2;
            var14 = new Array(2);
            var14[0] = var12;
            var14[1] = var11;
            var2 = _closure1_slot1;
            var10 = 15;
            var10 = var26[var10];
            var32 = var2.bind(var4)(var10);
            var34 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var5 = _closure1_slot8;
                    var2 = var5.getGuild;
                    var1 = _closure2_slot0;
                    var7 = var2.bind(var5)(var1);
                    var5 = null;
                    var1 = var5 != var7;
                    var6 = undefined;
                    var2 = undefined;
                    if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var9 = _closure1_slot5;
                    var8 = _closure1_slot12;
                    var1 = _closure2_slot1;
                    var2 = var9.bind(var6)(var7, var8, var1);
case 4:
                    var1 = {};
                    var9 = var5 == var7;
                    var8 = undefined;
                    if(var9) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var8 = var7.name;
case 6:
                    var1['guildName'] = var8;
                    var1['icon'] = var2;
                    var8 = var5 != var2;
                    var2 = undefined;
                    if(!var8) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var5 = var5 != var7;
                    var2 = undefined;
                    if(!var5) { _fun0002_ip = 8; continue _fun0002 }
case 10:
                    var5 = _closure1_slot4;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var4 = 14;
                    var8 = var10[var4];
                    var8 = var9.bind(var6)(var8);
                    var8 = var8.ImageSizes;
                    var4 = var10[var4];
                    var4 = var9.bind(var6)(var4);
                    var4 = var4.GuildIconSizes;
                    var4 = var4.LARGE;
                    var4 = var8[var4];
                    var3 = _closure2_slot1;
                    var2 = var5.bind(var6)(var7, var4, var3);
case 8:
                    var1['asset'] = var2;
                    return var1;
                }
            };
            var36 = var19;
            var35 = var16;
            var33 = var14;
            var13 = var36[var17](var35, var34, var33, var32, var31);
            var19 = var13.asset;
            var10 = var13.icon;
            var13 = var13.guildName;
            _closure2_slot5 = var13;
            var14 = 16;
            var14 = var26[var14];
            var14 = var2.bind(var4)(var14);
            var14 = var14.bind(var4)(var12, var6, var15);
            var16 = var14.badgeTopRight;
            var15 = var14.badgeBottomRight;
            var23 = var14.cutouts;
            var28 = _closure1_slot3;
            var20 = var28.useMemo;
            var17 = new Array(2);
            var17[0] = var12;
            var17[1] = var5;
            var14 = function() {
                var1 = {};
                var2 = function onPress() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var5 = _closure1_slot8;
                        var3 = var5.getGuild;
                        var1 = _closure2_slot0;
                        var3 = var3.bind(var5)(var1);
                        var1 = null;
                        if(!(var1 != var3)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                        var1 = _closure2_slot2;
                        if(var1) { _fun0003_ip = 11; continue _fun0003 }
case 13:
                        var3 = _closure1_slot10;
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
                        if(!(var7 > var1)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                        var5 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 19;
                        var3 = var3[var1];
                        var1 = undefined;
                        var6 = var5.bind(var1)(var3);
                        var5 = var6.track;
                        var1 = _closure1_slot14;
                        var3 = var1.GUILD_CLICKED;
                        var1 = {};
                        var8 = _closure2_slot0;
                        var1['guild_id'] = var8;
                        var1['index'] = var7;
                        var1 = var5.bind(var6)(var3, var1);
case 14:
                        var5 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 20;
                        var3 = var3[var1];
                        var1 = undefined;
                        var3 = var5.bind(var1)(var3);
                        var2 = _closure2_slot0;
                        var2 = var3.bind(var1)(var2);
                        return var1;
case 11:
                        var2 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var1 = 17;
                        var1 = var9[var1];
                        var8 = undefined;
                        var3 = var2.bind(var8)(var1);
                        var2 = var3.show;
                        var1 = {};
                        var7 = _closure1_slot0;
                        var4 = 18;
                        var5 = var9[var4];
                        var5 = var7.bind(var8)(var5);
                        var10 = var5.intl;
                        var6 = var10.string;
                        var5 = var9[var4];
                        var5 = var7.bind(var8)(var5);
                        var5 = var5.t;
                        var5 = var5.R0RpRU;
                        var5 = var6.bind(var10)(var5);
                        var1['title'] = var5;
                        var5 = var9[var4];
                        var5 = var7.bind(var8)(var5);
                        var6 = var5.intl;
                        var5 = var6.string;
                        var4 = var9[var4];
                        var4 = var7.bind(var8)(var4);
                        var4 = var4.t;
                        var4 = var4.m9gRVF;
                        var4 = var5.bind(var6)(var4);
                        var1['body'] = var4;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    }
                };
                var1['onPress'] = var2;
                return var1;
            };
            var14 = var20.bind(var28)(var14, var17);
            var20 = var28.useMemo;
            var17 = new Array(3);
            var17[0] = var13;
            var17[1] = var6;
            var17[2] = var18;
            var6 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot3;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0004_ip = 3; continue _fun0004 }
case 16:
                    var2 = _closure2_slot3;
                    var1 = 0;
                    if(!(!(var2 > var1))) { _fun0004_ip = 17; continue _fun0004 }
case 3:
                    var2 = _closure2_slot4;
                    var1 = true;
                    if(!(var1 !== var2)) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 18;
                    var3 = var7[var1];
                    var2 = undefined;
                    var3 = var5.bind(var2)(var3);
                    var4 = var3.intl;
                    var3 = var4.formatToPlainString;
                    var1 = var7[var1];
                    var1 = var5.bind(var2)(var1);
                    var1 = var1.t;
                    var2 = var1./uzRsr;
                    var1 = {};
                    var5 = _closure2_slot5;
                    var1['guildName'] = var5;
                    var5 = _closure2_slot3;
                    var1['mentions'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    _fun0004_ip = 20; continue _fun0004;
case 18:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 18;
                    var4 = var8[var2];
                    var3 = undefined;
                    var4 = var7.bind(var3)(var4);
                    var5 = var4.intl;
                    var4 = var5.formatToPlainString;
                    var2 = var8[var2];
                    var2 = var7.bind(var3)(var2);
                    var2 = var2.t;
                    var3 = var2.lzqe4+;
                    var2 = {};
                    var7 = _closure2_slot5;
                    var2['guildName'] = var7;
                    var1 = var4.bind(var5)(var3, var2);
case 20:
                    _fun0004_ip = 21; continue _fun0004;
case 17:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 18;
                    var4 = var8[var2];
                    var3 = undefined;
                    var4 = var7.bind(var3)(var4);
                    var5 = var4.intl;
                    var4 = var5.formatToPlainString;
                    var2 = var8[var2];
                    var2 = var7.bind(var3)(var2);
                    var2 = var2.t;
                    var3 = var2./uzRsr;
                    var2 = {};
                    var7 = _closure2_slot5;
                    var2['guildName'] = var7;
                    var6 = _closure2_slot3;
                    var2['mentions'] = var6;
                    var1 = var4.bind(var5)(var3, var2);
case 21:
                    return var1;
                }
            };
            var17 = var20.bind(var28)(var6, var17);
            var6 = 21;
            var6 = var26[var6];
            var6 = var2.bind(var4)(var6);
            var10 = var6.bind(var4)(var12, var10, var19);
            var6 = _closure1_slot11;
            var6 = var6.bind(var4)(var12, var7);
            var7 = var6.isDragTarget;
            _closure2_slot6 = var7;
            var21 = var6.dragState;
            var19 = var6.overState;
            var25 = var6.itemSize;
            var29 = var6.dragDropInProgress;
            _closure2_slot7 = var29;
            var22 = var28.useMemo;
            var20 = new Array(1);
            var20[0] = var12;
            var6 = function() {
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 22;
                var1 = var4[var1];
                var4 = undefined;
                var3 = var3.bind(var4)(var1);
                var1 = _closure2_slot0;
                var5 = var3.bind(var4)(var1);
                var _closure3_slot0 = var5;
                var1 = {};
                var4 = var5.map;
                var3 = function(arg1) {
                    var2 = arg1;
                    var1 = {};
                    var3 = var2.label;
                    var1['name'] = var3;
                    var2 = var2.label;
                    var1['label'] = var2;
                    return var1;
                };
                var3 = var4.bind(var5)(var3);
                var1['accessibilityActions'] = var3;
                var2 = function onAccessibilityAction(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var2 = arg1;
                        var _closure4_slot0 = var2;
                        var3 = _closure3_slot0;
                        var2 = var3.find;
                        var1 = function(arg1) {
                            var1 = arg1;
                            var2 = var1.label;
                            var1 = _closure4_slot0;
                            var1 = var1.nativeEvent;
                            var1 = var1.actionName;
                            var1 = var2 === var1;
                            return var1;
                        };
                        var2 = var2.bind(var3)(var1);
                        var4 = null;
                        var1 = var4 == var2;
                        if(var1) { _fun0005_ip = 22; continue _fun0005 }
case 13:
                        var3 = var2.action;
                        var1 = var4 == var3;
case 22:
                        if(var1) { _fun0005_ip = 23; continue _fun0005 }
case 24:
                        var1 = var2.action;
                        var1 = var1.bind(var2)();
case 23:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['onAccessibilityAction'] = var2;
                return var1;
            };
            var6 = var22.bind(var28)(var6, var20);
            var24 = var6.accessibilityActions;
            var22 = var6.onAccessibilityAction;
            var6 = 23;
            var6 = var26[var6];
            var20 = var31.bind(var4)(var6);
            var6 = var20.useSharedValue;
            var20 = var6.bind(var20)(var12);
            _closure2_slot8 = var20;
            var27 = var28.useCallback;
            var6 = function _(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = arg1;
                    var2 = _closure2_slot7;
                    var1 = var2.get;
                    var4 = var1.bind(var2)();
                    if(!var4) { _fun0006_ip = 13; continue _fun0006 }
case 25:
                    var2 = _closure2_slot8;
                    var1 = var2.get;
                    var2 = var1.bind(var2)();
                    var1 = _closure2_slot0;
                    var4 = var2 === var1;
case 13:
                    if(!var4) { _fun0006_ip = 26; continue _fun0006 }
case 27:
                    var1 = _closure2_slot6;
                    var4 = !var1;
case 26:
                    var5 = _closure2_slot8;
                    var2 = var5.set;
                    var7 = _closure2_slot0;
                    var1 = null;
                    var7 = var1 != var7;
                    if(!var7) { _fun0006_ip = 28; continue _fun0006 }
case 29:
                    var1 = _closure2_slot0;
case 28:
                    var1 = var2.bind(var5)(var1);
                    var1 = {};
                    var2 = {};
                    if(var4) { _fun0006_ip = 10; continue _fun0006 }
case 30:
                    var5 = var3.targetOriginY;
                    _fun0006_ip = 31; continue _fun0006;
case 10:
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var7 = 24;
                    var8 = var8[var7];
                    var7 = undefined;
                    var10 = var9.bind(var7)(var8);
                    var9 = var10.withSpring;
                    var8 = var3.targetOriginY;
                    var7 = _closure1_slot13;
                    var6 = 'animate-always';
                    var5 = var9.bind(var10)(var8, var7, var6);
case 31:
                    var2['originY'] = var5;
                    if(var4) { _fun0006_ip = 32; continue _fun0006 }
case 33:
                    var4 = var3.targetHeight;
                    _fun0006_ip = 34; continue _fun0006;
case 32:
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var6 = 24;
                    var7 = var7[var6];
                    var6 = undefined;
                    var9 = var8.bind(var6)(var7);
                    var8 = var9.withSpring;
                    var7 = var3.targetHeight;
                    var6 = _closure1_slot13;
                    var5 = 'animate-always';
                    var4 = var8.bind(var9)(var7, var6, var5);
case 34:
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
            var3['dragDropInProgress'] = var29;
            var3['sharedId'] = var20;
            var3['guildId'] = var12;
            var3['isDragTarget'] = var7;
            var30 = 24;
            var30 = var26[var30];
            var30 = var31.bind(var4)(var30);
            var30 = var30.withSpring;
            var3['withSpring'] = var30;
            var30 = _closure1_slot13;
            var3['TRANSITION_PHYSICS'] = var30;
            var6['__closure'] = var3;
            var3 = 14096669603718.0;
            var6['__workletHash'] = var3;
            var3 = _closure1_slot19;
            var6['__initData'] = var3;
            var3 = new Array(4);
            var3[0] = var12;
            var3[1] = var20;
            var3[2] = var7;
            var3[3] = var29;
            var6 = var27.bind(var28)(var6, var3);
            var3 = _closure1_slot17;
            var1 = var26[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['id'] = var12;
            var1['draggedItemSize'] = var25;
            var1['accessibilityActions'] = var24;
            var1['onAccessibilityAction'] = var22;
            var22 = undefined;
            if(var7) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var22 = var23;
case 35:
            var1['cutouts'] = var22;
            var1['selected'] = var11;
            var1['isDragTarget'] = var7;
            var1['dragState'] = var21;
            var1['sharedId'] = var20;
            var20 = !var11;
            var1['circle'] = var20;
            var1['overState'] = var19;
            var1['unread'] = var18;
            var1['label'] = var17;
            var1['config'] = var14;
            var1['styles'] = var8;
            var1['isDragPreview'] = var7;
            var1['layout'] = var6;
            var8 = _closure1_slot16;
            var7 = _closure1_slot15;
            var6 = {};
            var14 = new Array(2);
            var14[0] = var16;
            var14[1] = var15;
            var6['children'] = var14;
            var6 = var8.bind(var4)(var7, var6);
            var1['externalChildren'] = var6;
            var8 = _closure1_slot17;
            var7 = _closure1_slot1;
            var14 = _closure1_slot2;
            var6 = 25;
            var6 = var14[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var6['guildId'] = var12;
            var6 = var8.bind(var4)(var7, var6);
            var1['expandedChildren'] = var6;
            if(var5) { _fun0001_ip = 37; continue _fun0001 }
case 38:
            var5 = null;
            if(!(var5 == var10)) { _fun0001_ip = 39; continue _fun0001 }
case 40:
            var7 = _closure1_slot17;
            var6 = _closure1_slot1;
            var12 = _closure1_slot2;
            var8 = 14;
            var5 = var12[var8];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var5['value'] = var13;
            var5['selected'] = var11;
            var5['animate'] = var11;
            var11 = _closure1_slot0;
            var8 = var12[var8];
            var8 = var11.bind(var4)(var8);
            var8 = var8.GuildIconSizes;
            var8 = var8.LARGE;
            var5['size'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            _fun0001_ip = 41; continue _fun0001;
case 39:
            var8 = _closure1_slot17;
            var7 = _closure1_slot1;
            var11 = _closure1_slot2;
            var6 = 26;
            var6 = var11[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var6['source'] = var10;
            var10 = _closure1_slot18;
            var10 = var10.guildIcon;
            var6['style'] = var10;
            var5 = var8.bind(var4)(var7, var6);
case 41:
            _fun0001_ip = 42; continue _fun0001;
case 37:
            var8 = _closure1_slot17;
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var6 = 26;
            var6 = var12[var6];
            var7 = var11.bind(var4)(var6);
            var6 = {};
            var10 = 27;
            var10 = var12[var10];
            var10 = var11.bind(var4)(var10);
            var6['source'] = var10;
            var9 = _closure1_slot18;
            var9 = var9.guildIcon;
            var6['style'] = var9;
            var5 = var8.bind(var4)(var7, var6);
case 42:
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 28;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guilds_bar/native/GuildsBarGuild.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();