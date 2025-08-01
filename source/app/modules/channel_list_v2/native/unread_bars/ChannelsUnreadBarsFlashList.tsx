// app/modules/channel_list_v2/native/unread_bars/ChannelsUnreadBarsFlashList.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var11 = 1;
    var4 = var6[var11];
    var4 = var5.bind(var1)(var4);
    var8 = var4.View;
    var _closure1_slot4 = var8;
    var10 = var4.StyleSheet;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var14 = var10.absoluteFillObject;
    var15 = var9;
    var10 = copyDataProperties(var15, var14);
    var12 = 'hidden';
    var10 = 'overflow';
    var9[var10] = var12;
    var10 = 'zIndex';
    var9[var10] = var11;
    var4['container'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/channel_list_v2/native/unread_bars/ChannelsUnreadBarsFlashList.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ChannelsUnreadBars(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var3 = var2.guild;
            var21 = var2.guildId;
            var10 = var2.listRef;
            var _closure2_slot0 = var10;
            var20 = var2.data;
            var15 = var2.viewableIndices;
            var13 = var2.guildChannelsListUnreadBarInsetEnd;
            var17 = var2.selectedChannelId;
            var12 = var2.scrollPosition;
            var11 = var2.listPaddingTop;
            var9 = var2.endReachedCounter;
            var2 = _closure1_slot8;
            var4 = undefined;
            var8 = var2.bind(var4)();
            var _closure2_slot1 = var8;
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var7 = 5;
            var7 = var5[var7];
            var18 = var2.bind(var4)(var7);
            var16 = var18.useStateFromStores;
            var7 = _closure1_slot5;
            var14 = new Array(1);
            var14[0] = var7;
            var7 = function() {
                var1 = _closure1_slot5;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var19 = var16.bind(var18)(var14, var7);
            var _closure2_slot2 = var19;
            var7 = _closure1_slot1;
            var14 = 6;
            var14 = var5[var14];
            var14 = var7.bind(var4)(var14);
            var18 = var14.bind(var4)(var15);
            var14 = 7;
            var14 = var5[var14];
            var16 = var2.bind(var4)(var14);
            var15 = var16.useChannelsUnreadBarsDataFlashList;
            var14 = {};
            var14['guildId'] = var21;
            var14['data'] = var20;
            var14['viewableIndices'] = var18;
            var14['selectedChannelId'] = var17;
            var14 = var15.bind(var16)(var14);
            var20 = var14.top;
            var _closure2_slot3 = var20;
            var15 = var14.bottom;
            var _closure2_slot4 = var15;
            var17 = _closure1_slot3;
            var18 = var17.useCallback;
            var16 = new Array(3);
            var16[0] = var20;
            var16[1] = var19;
            var16[2] = var10;
            var14 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot3;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0002_ip = 140; continue _fun0002 }
 16:
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 8;
                    var3 = var8[var3];
                    var7 = undefined;
                    var5 = var5.bind(var7)(var3);
                    var3 = var5.triggerHapticFeedback;
                    var6 = _closure1_slot1;
                    var2 = 9;
                    var2 = var8[var2];
                    var2 = var6.bind(var7)(var2);
                    var2 = var2.IMPACT_LIGHT;
                    var2 = var3.bind(var5)(var2);
                    var2 = _closure2_slot0;
                    var3 = var2.current;
                    if(!(var1 != var3)) { _fun0002_ip = 140; continue _fun0002 }
 87:
                    var2 = var3.scrollToIndex;
                    var1 = {};
                    var5 = _closure2_slot3;
                    var5 = var5.index;
                    var1['index'] = var5;
                    var4 = _closure2_slot2;
                    var4 = !var4;
                    var1['animated'] = var4;
                    var4 = 0.5;
                    var1['viewPosition'] = var4;
                    var1 = var2.bind(var3)(var1);
 140:
                    var1 = undefined;
                    return var1;
                }
            };
            var14 = var18.bind(var17)(var14, var16);
            var18 = var17.useCallback;
            var16 = new Array(3);
            var16[0] = var15;
            var16[1] = var19;
            var16[2] = var10;
            var10 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot4;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0003_ip = 140; continue _fun0003 }
 16:
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 8;
                    var3 = var8[var3];
                    var7 = undefined;
                    var5 = var5.bind(var7)(var3);
                    var3 = var5.triggerHapticFeedback;
                    var6 = _closure1_slot1;
                    var2 = 9;
                    var2 = var8[var2];
                    var2 = var6.bind(var7)(var2);
                    var2 = var2.IMPACT_LIGHT;
                    var2 = var3.bind(var5)(var2);
                    var2 = _closure2_slot0;
                    var3 = var2.current;
                    if(!(var1 != var3)) { _fun0003_ip = 140; continue _fun0003 }
 87:
                    var2 = var3.scrollToIndex;
                    var1 = {};
                    var5 = _closure2_slot4;
                    var5 = var5.index;
                    var1['index'] = var5;
                    var4 = _closure2_slot2;
                    var4 = !var4;
                    var1['animated'] = var4;
                    var4 = 0.5;
                    var1['viewPosition'] = var4;
                    var1 = var2.bind(var3)(var1);
 140:
                    var1 = undefined;
                    return var1;
                }
            };
            var16 = var18.bind(var17)(var10, var16);
            var19 = var17.useMemo;
            var18 = new Array(2);
            var18[0] = var20;
            var18[1] = var15;
            var10 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = _closure2_slot3;
                    var4 = null;
                    if(!(var4 != var1)) { _fun0004_ip = 30; continue _fun0004 }
 13:
                    var1 = _closure2_slot3;
                    var2 = var1.isMention;
                    var1 = 'top';
                    if(var2) { _fun0004_ip = 96; continue _fun0004 }
 30:
                    var2 = _closure2_slot4;
                    if(!(var4 != var2)) { _fun0004_ip = 55; continue _fun0004 }
 38:
                    var2 = _closure2_slot4;
                    var3 = var2.isMention;
                    var2 = 'bottom';
                    if(var3) { _fun0004_ip = 93; continue _fun0004 }
 55:
                    var3 = _closure2_slot3;
                    var6 = var4 != var3;
                    var3 = 'top';
                    if(var6) { _fun0004_ip = 90; continue _fun0004 }
 70:
                    var5 = _closure2_slot4;
                    var5 = var4 != var5;
                    var4 = null;
                    if(!var5) { _fun0004_ip = 87; continue _fun0004 }
 83:
                    var4 = 'bottom';
 87:
                    var3 = var4;
 90:
                    var2 = var3;
 93:
                    var1 = var2;
 96:
                    return var1;
                }
            };
            var18 = var19.bind(var17)(var10, var18);
            var10 = 10;
            var10 = var5[var10];
            var19 = var2.bind(var4)(var10);
            var10 = var19.useMobileQuestDockHeight;
            var19 = var10.bind(var19)();
            var _closure2_slot5 = var19;
            var10 = 11;
            var10 = var5[var10];
            var10 = var7.bind(var4)(var10);
            var21 = var10.bind(var4)();
            var _closure2_slot6 = var21;
            var10 = var17.useMemo;
            var22 = var8.container;
            var8 = new Array(3);
            var8[0] = var22;
            var8[1] = var21;
            var8[2] = var19;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = _closure2_slot1;
                    var2 = var1.container;
                    var1 = new Array(2);
                    var1[0] = var2;
                    var2 = {};
                    var5 = _closure2_slot6;
                    var3 = 0;
                    if(var5) { _fun0005_ip = 35; continue _fun0005 }
 31:
                    var3 = _closure2_slot5;
 35:
                    var2['bottom'] = var3;
                    var1[1] = var2;
                    return var1;
                }
            };
            var8 = var10.bind(var17)(var1, var8);
            var1 = 12;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useRedesignGuildHeaderHeight;
            var10 = var1.bind(var2)(var3);
            var3 = _closure1_slot7;
            var2 = _closure1_slot4;
            var1 = {};
            var1['style'] = var8;
            var8 = 'box-none';
            var1['pointerEvents'] = var8;
            var8 = _closure1_slot6;
            var17 = 13;
            var5 = var5[var17];
            var7 = var7.bind(var4)(var5);
            var5 = {};
            var19 = 'top';
            var5['position'] = var19;
            var19 = var19 === var18;
            var5['shown'] = var19;
            var5['onPress'] = var14;
            var14 = null;
            var21 = var14 == var20;
            var19 = undefined;
            if(var21) { _fun0001_ip = 510; continue _fun0001 }
 504:
            var19 = var20.isMention;
 510:
            var5['isMention'] = var19;
            var5['scrollPosition'] = var12;
            var5['listPaddingTop'] = var11;
            var5['headerHeight'] = var10;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot6;
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var6 = var6[var17];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var17 = 'bottom';
            var6['position'] = var17;
            var17 = var17 === var18;
            var6['shown'] = var17;
            var6['onPress'] = var16;
            var16 = var14 == var15;
            var14 = undefined;
            if(var16) { _fun0001_ip = 603; continue _fun0001 }
 597:
            var14 = var15.isMention;
 603:
            var6['isMention'] = var14;
            var6['guildChannelsListUnreadBarInsetEnd'] = var13;
            var6['scrollPosition'] = var12;
            var6['listPaddingTop'] = var11;
            var6['headerHeight'] = var10;
            var6['endReachedCounter'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();