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
 0:
            var1 = arg1;
            var24 = var1.guildId;
            var _closure2_slot0 = var24;
            var6 = var1.isDragPreview;
            var4 = undefined;
            if(!(var6 === var4)) { _fun0001_ip = 28; continue _fun0001 }
 26:
            var6 = false;
 28:
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var30 = _closure1_slot0;
            var25 = _closure1_slot2;
            var1 = 12;
            var2 = var25[var1];
            var7 = var30.bind(var4)(var2);
            var5 = var7.useGuildsBarAnimatedWrapperStyles;
            var2 = true;
            var7 = var5.bind(var7)(var2, var2);
            var2 = 13;
            var5 = var25[var2];
            var12 = var30.bind(var4)(var5);
            var11 = var12.useStateFromStoresObject;
            var5 = _closure1_slot9;
            var10 = new Array(3);
            var10[0] = var5;
            var5 = _closure1_slot6;
            var10[1] = var5;
            var5 = _closure1_slot7;
            var10[2] = var5;
            var8 = new Array(1);
            var8[0] = var24;
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
            var8 = var11.bind(var12)(var10, var5, var8);
            var11 = var8.selected;
            _closure2_slot1 = var11;
            var5 = var8.mentionCount;
            _closure2_slot2 = var5;
            var16 = var8.unread;
            _closure2_slot3 = var16;
            var12 = var8.isMentionLowImportance;
            var2 = var25[var2];
            var17 = var30.bind(var4)(var2);
            var15 = var17.useStateFromStores;
            var2 = _closure1_slot8;
            var14 = new Array(1);
            var14[0] = var2;
            var13 = new Array(2);
            var13[0] = var24;
            var13[1] = var11;
            var2 = _closure1_slot1;
            var8 = 15;
            var8 = var25[var8];
            var31 = var2.bind(var4)(var8);
            var33 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var5 = _closure1_slot8;
                    var2 = var5.getGuild;
                    var1 = _closure2_slot0;
                    var7 = var2.bind(var5)(var1);
                    var5 = null;
                    var1 = var5 != var7;
                    var6 = undefined;
                    var2 = undefined;
                    if(!var1) { _fun0002_ip = 56; continue _fun0002 }
 37:
                    var9 = _closure1_slot5;
                    var8 = _closure1_slot12;
                    var1 = _closure2_slot1;
                    var2 = var9.bind(var6)(var7, var8, var1);
 56:
                    var1 = {};
                    var9 = var5 == var7;
                    var8 = undefined;
                    if(var9) { _fun0002_ip = 72; continue _fun0002 }
 67:
                    var8 = var7.name;
 72:
                    var1['guildName'] = var8;
                    var1['icon'] = var2;
                    var8 = var5 != var2;
                    var2 = undefined;
                    if(!var8) { _fun0002_ip = 165; continue _fun0002 }
 90:
                    var5 = var5 != var7;
                    var2 = undefined;
                    if(!var5) { _fun0002_ip = 165; continue _fun0002 }
 99:
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
 165:
                    var1['asset'] = var2;
                    return var1;
                }
            };
            var35 = var17;
            var34 = var14;
            var32 = var13;
            var8 = var35[var15](var34, var33, var32, var31, var30);
            var17 = var8.asset;
            var10 = var8.icon;
            var13 = var8.guildName;
            _closure2_slot4 = var13;
            var8 = 16;
            var8 = var25[var8];
            var8 = var2.bind(var4)(var8);
            var8 = var8.bind(var4)(var24, var5, var12);
            var14 = var8.badgeTopRight;
            var12 = var8.badgeBottomRight;
            var21 = var8.cutouts;
            var27 = _closure1_slot3;
            var18 = var27.useMemo;
            var15 = new Array(1);
            var15[0] = var24;
            var8 = function() {
                var1 = {};
                var2 = function onPress() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var3 = _closure1_slot10;
                        var2 = var3.getGuildFolders;
                        var4 = var2.bind(var3)();
                        var3 = var4.findIndex;
                        var2 = function(arg1) {
                            var1 = arg1;
                            var3 = var1.guildIds;
                            var2 = var3.includes;
                            var1 = _closure2_slot0;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var6 = var3.bind(var4)(var2);
                        var2 = -1;
                        if(!(var6 > var2)) { _fun0003_ip = 107; continue _fun0003 }
 47:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 17;
                        var3 = var3[var2];
                        var2 = undefined;
                        var5 = var4.bind(var2)(var3);
                        var4 = var5.track;
                        var2 = _closure1_slot14;
                        var3 = var2.GUILD_CLICKED;
                        var2 = {};
                        var7 = _closure2_slot0;
                        var2['guild_id'] = var7;
                        var2['index'] = var6;
                        var2 = var4.bind(var5)(var3, var2);
 107:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 18;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = _closure2_slot0;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    }
                };
                var1['onPress'] = var2;
                return var1;
            };
            var8 = var18.bind(var27)(var8, var15);
            var18 = var27.useMemo;
            var15 = new Array(3);
            var15[0] = var13;
            var15[1] = var5;
            var15[2] = var16;
            var5 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = _closure2_slot2;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0004_ip = 26; continue _fun0004 }
 13:
                    var2 = _closure2_slot2;
                    var1 = 0;
                    if(!(!(var2 > var1))) { _fun0004_ip = 193; continue _fun0004 }
 26:
                    var2 = _closure2_slot3;
                    var1 = true;
                    if(!(var1 !== var2)) { _fun0004_ip = 119; continue _fun0004 }
 36:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 19;
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
                    var5 = _closure2_slot4;
                    var1['guildName'] = var5;
                    var5 = _closure2_slot2;
                    var1['mentions'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    _fun0004_ip = 191; continue _fun0004;
 119:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 19;
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
                    var7 = _closure2_slot4;
                    var2['guildName'] = var7;
                    var1 = var4.bind(var5)(var3, var2);
 191:
                    _fun0004_ip = 274; continue _fun0004;
 193:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 19;
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
                    var7 = _closure2_slot4;
                    var2['guildName'] = var7;
                    var6 = _closure2_slot2;
                    var2['mentions'] = var6;
                    var1 = var4.bind(var5)(var3, var2);
 274:
                    return var1;
                }
            };
            var15 = var18.bind(var27)(var5, var15);
            var5 = 20;
            var5 = var25[var5];
            var5 = var2.bind(var4)(var5);
            var10 = var5.bind(var4)(var24, var10, var17);
            var5 = _closure1_slot11;
            var5 = var5.bind(var4)(var24, var6);
            var6 = var5.isDragTarget;
            _closure2_slot5 = var6;
            var19 = var5.dragState;
            var17 = var5.overState;
            var23 = var5.itemSize;
            var28 = var5.dragDropInProgress;
            _closure2_slot6 = var28;
            var20 = var27.useMemo;
            var18 = new Array(1);
            var18[0] = var24;
            var5 = function() {
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 21;
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
 0:
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
                        if(var1) { _fun0005_ip = 52; continue _fun0005 }
 43:
                        var3 = var2.action;
                        var1 = var4 == var3;
 52:
                        if(var1) { _fun0005_ip = 64; continue _fun0005 }
 55:
                        var1 = var2.action;
                        var1 = var1.bind(var2)();
 64:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['onAccessibilityAction'] = var2;
                return var1;
            };
            var5 = var20.bind(var27)(var5, var18);
            var22 = var5.accessibilityActions;
            var20 = var5.onAccessibilityAction;
            var5 = 22;
            var5 = var25[var5];
            var18 = var30.bind(var4)(var5);
            var5 = var18.useSharedValue;
            var18 = var5.bind(var18)(var24);
            _closure2_slot7 = var18;
            var26 = var27.useCallback;
            var5 = function _(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var3 = arg1;
                    var2 = _closure2_slot6;
                    var1 = var2.get;
                    var4 = var1.bind(var2)();
                    if(!var4) { _fun0006_ip = 43; continue _fun0006 }
 22:
                    var2 = _closure2_slot7;
                    var1 = var2.get;
                    var2 = var1.bind(var2)();
                    var1 = _closure2_slot0;
                    var4 = var2 === var1;
 43:
                    if(!var4) { _fun0006_ip = 53; continue _fun0006 }
 46:
                    var1 = _closure2_slot5;
                    var4 = !var1;
 53:
                    var5 = _closure2_slot7;
                    var2 = var5.set;
                    var7 = _closure2_slot0;
                    var1 = null;
                    var7 = var1 != var7;
                    if(!var7) { _fun0006_ip = 79; continue _fun0006 }
 75:
                    var1 = _closure2_slot0;
 79:
                    var1 = var2.bind(var5)(var1);
                    var1 = {};
                    var2 = {};
                    if(var4) { _fun0006_ip = 99; continue _fun0006 }
 91:
                    var5 = var3.targetOriginY;
                    _fun0006_ip = 152; continue _fun0006;
 99:
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var7 = 23;
                    var8 = var8[var7];
                    var7 = undefined;
                    var10 = var9.bind(var7)(var8);
                    var9 = var10.withSpring;
                    var8 = var3.targetOriginY;
                    var7 = _closure1_slot13;
                    var6 = 'animate-always';
                    var5 = var9.bind(var10)(var8, var7, var6);
 152:
                    var2['originY'] = var5;
                    if(var4) { _fun0006_ip = 168; continue _fun0006 }
 160:
                    var4 = var3.targetHeight;
                    _fun0006_ip = 221; continue _fun0006;
 168:
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var6 = 23;
                    var7 = var7[var6];
                    var6 = undefined;
                    var9 = var8.bind(var6)(var7);
                    var8 = var9.withSpring;
                    var7 = var3.targetHeight;
                    var6 = _closure1_slot13;
                    var5 = 'animate-always';
                    var4 = var8.bind(var9)(var7, var6, var5);
 221:
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
            var3['dragDropInProgress'] = var28;
            var3['sharedId'] = var18;
            var3['guildId'] = var24;
            var3['isDragTarget'] = var6;
            var29 = 23;
            var29 = var25[var29];
            var29 = var30.bind(var4)(var29);
            var29 = var29.withSpring;
            var3['withSpring'] = var29;
            var29 = _closure1_slot13;
            var3['TRANSITION_PHYSICS'] = var29;
            var5['__closure'] = var3;
            var3 = 14096669603718.0;
            var5['__workletHash'] = var3;
            var3 = _closure1_slot19;
            var5['__initData'] = var3;
            var3 = new Array(4);
            var3[0] = var24;
            var3[1] = var18;
            var3[2] = var6;
            var3[3] = var28;
            var5 = var26.bind(var27)(var5, var3);
            var3 = _closure1_slot17;
            var1 = var25[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['id'] = var24;
            var1['draggedItemSize'] = var23;
            var1['accessibilityActions'] = var22;
            var1['onAccessibilityAction'] = var20;
            var20 = undefined;
            if(var6) { _fun0001_ip = 688; continue _fun0001 }
 685:
            var20 = var21;
 688:
            var1['cutouts'] = var20;
            var1['selected'] = var11;
            var1['isDragTarget'] = var6;
            var1['dragState'] = var19;
            var1['sharedId'] = var18;
            var18 = !var11;
            var1['circle'] = var18;
            var1['overState'] = var17;
            var1['unread'] = var16;
            var1['label'] = var15;
            var1['config'] = var8;
            var1['styles'] = var7;
            var1['isDragPreview'] = var6;
            var1['layout'] = var5;
            var7 = _closure1_slot16;
            var6 = _closure1_slot15;
            var5 = {};
            var8 = new Array(2);
            var8[0] = var14;
            var8[1] = var12;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['externalChildren'] = var5;
            var5 = null;
            if(!(var5 == var10)) { _fun0001_ip = 874; continue _fun0001 }
 797:
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
            _fun0001_ip = 924; continue _fun0001;
 874:
            var8 = _closure1_slot17;
            var7 = _closure1_slot1;
            var11 = _closure1_slot2;
            var6 = 24;
            var6 = var11[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var6['source'] = var10;
            var9 = _closure1_slot18;
            var9 = var9.guildIcon;
            var6['style'] = var9;
            var5 = var8.bind(var4)(var7, var6);
 924:
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 25;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guilds_bar/native/GuildsBarGuild.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();