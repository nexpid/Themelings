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
            var8 = 3;
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
            var4 = _closure1_slot4;
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 6;
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
            var4 = _closure1_slot4;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 4;
            var2 = var8[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.CircleErrorIcon;
            var2 = {};
            var7 = _closure1_slot1;
            var6 = 5;
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
    var _closure1_slot6 = var1;
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
    var10 = var4.CHANNEL_MARGIN_VERTICAL;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['marginVertical'] = var10;
    var10 = 8;
    var9['marginHorizontal'] = var10;
    var10 = 5;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.radii;
    var10 = var10.md;
    var9['borderRadius'] = var10;
    var4['container'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot5 = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/native/GuildPowerupsChannelRow.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildPowerupsChannelRow(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var2 = var2.guildId;
            var _closure2_slot0 = var2;
            var3 = _closure1_slot5;
            var4 = undefined;
            var7 = var3.bind(var4)();
            var8 = _closure1_slot3;
            var6 = var8.useCallback;
            var3 = new Array(1);
            var3[0] = var2;
            var1 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = {};
                var4 = _closure2_slot0;
                var2['guildId'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var10 = var6.bind(var8)(var1, var3);
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 9;
            var1 = var6[var1];
            var1 = var3.bind(var4)(var1);
            var9 = var1.bind(var4)(var2);
            var8 = null;
            if(!(var8 != var9)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var1 = var9.showUnread;
            if(var1) { _fun0002_ip = 9; continue _fun0002 }
case 7:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 10;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.ChannelModes;
            var11 = var1.DEFAULT;
            _fun0002_ip = 10; continue _fun0002;
case 9:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 10;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.ChannelModes;
            var11 = var1.UNREAD_IMPORTANT;
case 10:
            var3 = _closure1_slot4;
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var6 = 10;
            var1 = var1[var6];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['onPress'] = var10;
            var7 = var7.container;
            var1['style'] = var7;
            var7 = true;
            var1['accessible'] = var7;
            var1['mode'] = var11;
            var10 = var8 == var9;
            var7 = undefined;
            if(var10) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var7 = var9.showUnread;
case 11:
            var1['unread'] = var7;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var16 = 11;
            var7 = var13[var16];
            var7 = var12.bind(var4)(var7);
            var14 = var7.intl;
            var10 = var14.string;
            var18 = _closure1_slot1;
            var15 = 12;
            var7 = var13[var15];
            var7 = var18.bind(var4)(var7);
            var7 = var7.yv3DJJ;
            var7 = var10.bind(var14)(var7);
            var1['accessibilityLabel'] = var7;
            var7 = {};
            var10 = false;
            var7['selected'] = var10;
            var1['accessibilityState'] = var7;
            var14 = _closure1_slot4;
            var7 = var13[var6];
            var7 = var12.bind(var4)(var7);
            var10 = var7.BaseChannelName;
            var7 = {};
            var16 = var13[var16];
            var16 = var12.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var15 = var13[var15];
            var15 = var18.bind(var4)(var15);
            var15 = var15.yv3DJJ;
            var15 = var16.bind(var17)(var15);
            var7['name'] = var15;
            var7['mode'] = var11;
            var7 = var14.bind(var4)(var10, var7);
            var1['name'] = var7;
            var10 = _closure1_slot4;
            var6 = var13[var6];
            var6 = var12.bind(var4)(var6);
            var7 = var6.BaseChannelIcon;
            var6 = {};
            var6['mode'] = var11;
            var11 = 13;
            var11 = var13[var11];
            var11 = var12.bind(var4)(var11);
            var11 = var11.BoostTier2Icon;
            var6['IconComponent'] = var11;
            var6 = var10.bind(var4)(var7, var6);
            var1['icon'] = var6;
            var7 = _closure1_slot4;
            var6 = _closure1_slot6;
            var5 = {};
            var10 = var8 == var9;
            var8 = undefined;
            if(var10) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var8 = var9.indicator;
case 13:
            var5['indicator'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['channelInfo'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();