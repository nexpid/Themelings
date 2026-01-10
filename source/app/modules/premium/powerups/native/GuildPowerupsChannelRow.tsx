// app/modules/premium/powerups/native/GuildPowerupsChannelRow.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function GuildPowerupsChannelRowIndicator(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var7 = var1.indicator;
            var1 = null;
            if(!(var1 != var7)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var7.type;
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var8 = 4;
            var2 = var2[var8];
            var5 = undefined;
            var2 = var4.bind(var5)(var2);
            var2 = var2.GuildPowerupNotificationIndicatorType;
            var2 = var2.WARNING;
            if(!(var2 !== var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var4.bind(var5)(var2);
            var2 = var2.GuildPowerupNotificationIndicatorType;
            var2 = var2.UNREAD;
            if(!(var2 !== var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            return var1;
case 6:
            var4 = _closure1_slot5;
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 7;
            var2 = var8[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var7 = var7.count;
            var2['value'] = var7;
            var7 = true;
            var2['isMentionLowImportance'] = var7;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 4:
            var4 = _closure1_slot5;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 5;
            var2 = var8[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.CircleErrorIcon;
            var2 = {};
            var7 = _closure1_slot1;
            var6 = 6;
            var6 = var8[var6];
            var6 = var7.bind(var5)(var6);
            var6 = var6.colors;
            var6 = var6.STATUS_WARNING;
            var2['color'] = var6;
            var6 = 'sm';
            var2['size'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 2:
            return var1;
        }
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
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var12 = var4.CHANNEL_MARGIN_VERTICAL;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var10 = 8;
    var4 = var6[var10];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['marginVertical'] = var12;
    var9['marginHorizontal'] = var10;
    var10 = 6;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.radii;
    var10 = var10.md;
    var9['borderRadius'] = var10;
    var4['container'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/native/GuildPowerupsChannelRow.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildPowerupsChannelRow(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var3 = var2.guildId;
            var _closure2_slot0 = var3;
            var2 = _closure1_slot6;
            var4 = undefined;
            var10 = var2.bind(var4)();
            var7 = _closure1_slot3;
            var2 = var7.useRef;
            var11 = null;
            var5 = var2.bind(var7)(var11);
            var6 = var7.useCallback;
            var2 = new Array(1);
            var2[0] = var3;
            var1 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = {};
                var4 = _closure2_slot0;
                var2['guildId'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var15 = var6.bind(var7)(var1, var2);
            var2 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 10;
            var1 = var6[var1];
            var1 = var2.bind(var4)(var1);
            var12 = var1.bind(var4)(var3);
            var1 = 11;
            var1 = var6[var1];
            var2 = var2.bind(var4)(var1);
            var6 = var11 == var12;
            var1 = undefined;
            if(var6) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var1 = var12.popout;
case 8:
            var1 = var2.bind(var4)(var5, var3, var1);
            if(!(var11 != var12)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var1 = var12.showUnread;
            if(var1) { _fun0002_ip = 12; continue _fun0002 }
case 10:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 12;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.ChannelModes;
            var14 = var1.DEFAULT;
            _fun0002_ip = 13; continue _fun0002;
case 12:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 12;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.ChannelModes;
            var14 = var1.UNREAD_IMPORTANT;
case 13:
            var3 = _closure1_slot5;
            var2 = _closure1_slot4;
            var1 = {};
            var1['ref'] = var5;
            var13 = false;
            var1['collapsable'] = var13;
            var7 = _closure1_slot5;
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var9 = 12;
            var5 = var5[var9];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var5['onPress'] = var15;
            var10 = var10.container;
            var5['style'] = var10;
            var10 = true;
            var5['accessible'] = var10;
            var5['mode'] = var14;
            var15 = var11 == var12;
            var10 = undefined;
            if(var15) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var10 = var12.showUnread;
case 14:
            var5['unread'] = var10;
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var19 = 13;
            var10 = var16[var19];
            var10 = var15.bind(var4)(var10);
            var20 = var10.intl;
            var17 = var20.string;
            var21 = _closure1_slot1;
            var18 = 14;
            var10 = var16[var18];
            var10 = var21.bind(var4)(var10);
            var10 = var10.yv3DJJ;
            var10 = var17.bind(var20)(var10);
            var5['accessibilityLabel'] = var10;
            var10 = {};
            var10['selected'] = var13;
            var5['accessibilityState'] = var10;
            var17 = _closure1_slot5;
            var10 = var16[var9];
            var10 = var15.bind(var4)(var10);
            var13 = var10.BaseChannelName;
            var10 = {};
            var19 = var16[var19];
            var19 = var15.bind(var4)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var18 = var16[var18];
            var18 = var21.bind(var4)(var18);
            var18 = var18.yv3DJJ;
            var18 = var19.bind(var20)(var18);
            var10['name'] = var18;
            var10['mode'] = var14;
            var10 = var17.bind(var4)(var13, var10);
            var5['name'] = var10;
            var13 = _closure1_slot5;
            var9 = var16[var9];
            var9 = var15.bind(var4)(var9);
            var10 = var9.BaseChannelIcon;
            var9 = {};
            var9['mode'] = var14;
            var14 = 15;
            var14 = var16[var14];
            var14 = var15.bind(var4)(var14);
            var14 = var14.BoostTier2Icon;
            var9['IconComponent'] = var14;
            var9 = var13.bind(var4)(var10, var9);
            var5['icon'] = var9;
            var10 = _closure1_slot5;
            var9 = _closure1_slot7;
            var8 = {};
            var13 = var11 == var12;
            var11 = undefined;
            if(var13) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var11 = var12.indicator;
case 16:
            var8['indicator'] = var11;
            var8 = var10.bind(var4)(var9, var8);
            var5['channelInfo'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();