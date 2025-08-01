// app/modules/launchpad/native/shared/DMChannel.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function usePrivateChannelPressEvents(arg1, arg2) {
        var3 = arg1;
        var5 = arg2;
        var _closure2_slot0 = var3;
        var _closure2_slot1 = var5;
        var1 = {};
        var8 = _closure1_slot3;
        var7 = var8.useCallback;
        var9 = var3.id;
        var6 = new Array(2);
        var6[0] = var9;
        var6[1] = var5;
        var5 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.transitionToChannel;
            var2 = _closure2_slot0;
            var3 = var2.id;
            var2 = {};
            var6 = _closure2_slot1;
            var2['navigationReplace'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var5 = var7.bind(var8)(var5, var6);
        var1['onPress'] = var5;
        var5 = _closure1_slot3;
        var4 = var5.useCallback;
        var6 = var3.id;
        var3 = new Array(1);
        var3[0] = var6;
        var2 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 4;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.openChannelLongPressActionSheet;
            var1 = _closure2_slot0;
            var1 = var1.id;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var4.bind(var5)(var2, var3);
        var1['onLongPress'] = var2;
        return var1;
    };
    var _closure1_slot7 = var1;
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
    var11 = 1;
    var4 = var6[var11];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UnreadSetting;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 5;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var10['flex'] = var11;
    var4['pressable'] = var10;
    var10 = {};
    var11 = 6;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_MODIFIER_ACTIVE;
    var10['backgroundColor'] = var11;
    var4['pressableUnderlayColor'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot6 = var4;
    var4 = var7.memo;
    var2 = function DMChannel(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var10 = var1.channel;
            var16 = var1.muted;
            var3 = undefined;
            if(!(var16 === var3)) { _fun0001_ip = 22; continue _fun0001 }
 20:
            var16 = false;
 22:
            var7 = var1.navigationReplace;
            if(!(var7 === var3)) { _fun0001_ip = 34; continue _fun0001 }
 32:
            var7 = false;
 34:
            var1 = _closure1_slot6;
            var6 = var1.bind(var3)();
            var2 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 7;
            var1 = var4[var1];
            var1 = var2.bind(var3)(var1);
            var22 = var1.bind(var3)();
            var5 = _closure1_slot0;
            var1 = 8;
            var1 = var4[var1];
            var5 = var5.bind(var3)(var1);
            var1 = var5.useBaseChannelUnreadBadgeState;
            var1 = var1.bind(var5)(var10, var16);
            var19 = var1.unread;
            var13 = var1.mentionCount;
            var1 = 9;
            var1 = var4[var1];
            var1 = var2.bind(var3)(var1);
            var18 = var1.bind(var3)(var10, var19);
            var12 = null;
            var1 = var12 != var18;
            var11 = undefined;
            if(!var1) { _fun0001_ip = 174; continue _fun0001 }
 138:
            var2 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 10;
            var1 = var4[var1];
            var4 = var2.bind(var3)(var1);
            var2 = var4.extractTimestamp;
            var1 = var18.id;
            var11 = var2.bind(var4)(var1);
 174:
            var1 = 'text-muted';
            var17 = var1;
            if(!var19) { _fun0001_ip = 198; continue _fun0001 }
 186:
            var17 = var1;
            if(var16) { _fun0001_ip = 198; continue _fun0001 }
 192:
            var17 = 'text-normal';
 198:
            var4 = _closure1_slot0;
            var20 = _closure1_slot2;
            var1 = 11;
            var1 = var20[var1];
            var2 = var4.bind(var3)(var1);
            var1 = var2.useFontScale;
            var8 = var1.bind(var2)();
            var14 = _closure1_slot1;
            var1 = 12;
            var1 = var20[var1];
            var2 = var14.bind(var3)(var1);
            var5 = _closure1_slot5;
            var1 = 13;
            var1 = var20[var1];
            var1 = var4.bind(var3)(var1);
            var4 = var1.PressableHighlight;
            var1 = {};
            var21 = var6.pressable;
            var15 = new Array(2);
            var15[0] = var21;
            var21 = {};
            var22 = var22.container;
            var22 = var22.borderRadius;
            var21['borderRadius'] = var22;
            var15[1] = var21;
            var1['style'] = var15;
            var6 = var6.pressableUnderlayColor;
            var6 = var6.backgroundColor;
            var1['underlayColor'] = var6;
            var6 = _closure1_slot7;
            var23 = var6.bind(var3)(var10, var7);
            var24 = var1;
            var6 = copyDataProperties(var24, var23);
            var6 = 14;
            var6 = var20[var6];
            var7 = var14.bind(var3)(var6);
            var6 = {};
            var6['channel'] = var10;
            var6['unread'] = var19;
            var15 = _closure1_slot4;
            var21 = var15.ALL_MESSAGES;
            var6['resolvedUnreadSetting'] = var21;
            var6['muted'] = var16;
            var6['mentionCount'] = var13;
            var13 = 15;
            var13 = var20[var13];
            var14 = var14.bind(var3)(var13);
            var13 = {};
            var13['unread'] = var19;
            var15 = var15.ALL_MESSAGES;
            var13['resolvedUnreadSetting'] = var15;
            var13['muted'] = var16;
            var13 = var5.bind(var3)(var14, var13);
            var6['unreadBadge'] = var13;
            var12 = var12 != var18;
            if(!var12) { _fun0001_ip = 495; continue _fun0001 }
 440:
            var15 = _closure1_slot5;
            var14 = _closure1_slot0;
            var19 = _closure1_slot2;
            var13 = 16;
            var13 = var19[var13];
            var13 = var14.bind(var3)(var13);
            var14 = var13.PrivateChannelRowPreview;
            var13 = {};
            var13['channel'] = var10;
            var13['message'] = var18;
            var13['color'] = var17;
            var13['muted'] = var16;
            var12 = var15.bind(var3)(var14, var13);
 495:
            var6['subtitle'] = var12;
            var6['latestMessageTimestamp'] = var11;
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var9 = 17;
            var9 = var12[var9];
            var9 = var11.bind(var3)(var9);
            var9 = var9.bind(var3)(var10);
            var6['channelName'] = var9;
            var6['fontScale'] = var8;
            var7 = var7.bind(var3)(var6);
            var6 = 'children';
            var1[var6] = var7;
            var1 = var5.bind(var3)(var4, var1);
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/launchpad/native/shared/DMChannel.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();