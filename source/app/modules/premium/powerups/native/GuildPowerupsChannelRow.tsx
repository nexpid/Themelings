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
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 7;
            var2 = var8[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.Badge;
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
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/native/GuildPowerupsChannelRow.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildPowerupsChannelRow(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var14 = var2.guildId;
            var _closure2_slot0 = var14;
            var4 = undefined;
            var _closure2_slot1 = var4;
            var2 = _closure1_slot6;
            var18 = var2.bind(var4)();
            var3 = _closure1_slot3;
            var2 = var3.useRef;
            var12 = null;
            var5 = var2.bind(var3)(var12);
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 9;
            var2 = var6[var2];
            var2 = var3.bind(var4)(var2);
            var13 = var2.bind(var4)(var14);
            var2 = 10;
            var2 = var6[var2];
            var3 = var3.bind(var4)(var2);
            var6 = var12 == var13;
            var2 = undefined;
            if(var6) { _fun0002_ip = 6; continue _fun0002 }
case 8:
            var2 = var13.popout;
case 6:
            var2 = var3.bind(var4)(var5, var14, var2);
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 11;
            var2 = var6[var2];
            var3 = var3.bind(var4)(var2);
            var6 = var12 == var13;
            var2 = undefined;
            if(var6) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var2 = var13.indicator;
case 9:
            var2 = var12 != var2;
            if(var2) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var7 = var12 == var13;
            var6 = undefined;
            if(var7) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var6 = var13.popout;
case 13:
            var2 = var12 != var6;
case 11:
            var2 = var3.bind(var4)(var14, var2);
            var8 = var2.showNewBadgeOnRow;
            var7 = var2.dismissNewBadgeIfShown;
            _closure2_slot1 = var7;
            var3 = var12 == var13;
            var2 = undefined;
            if(var3) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var2 = var13.showUnread;
case 15:
            var16 = true;
            var11 = var16 === var2;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var10 = 12;
            var2 = var2[var10];
            var2 = var3.bind(var4)(var2);
            var2 = var2.ChannelModes;
            if(var11) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var15 = var2.DEFAULT;
            _fun0002_ip = 19; continue _fun0002;
case 17:
            var15 = var2.UNREAD_IMPORTANT;
case 19:
            var6 = _closure1_slot3;
            var3 = var6.useCallback;
            var2 = new Array(2);
            var2[0] = var14;
            var2[1] = var7;
            var1 = function() {
                var2 = _closure2_slot1;
                var1 = undefined;
                var2 = var2.bind(var1)();
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 13;
                var2 = var6[var2];
                var3 = var5.bind(var1)(var2);
                var2 = {};
                var4 = _closure2_slot0;
                var2['guildId'] = var4;
                var4 = 14;
                var4 = var6[var4];
                var4 = var5.bind(var1)(var4);
                var4 = var4.GUILD_POWERUPS_CHANNEL_LIST_ROW;
                var2['analyticsLocation'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var19 = var3.bind(var6)(var1, var2);
            var3 = _closure1_slot5;
            var2 = _closure1_slot4;
            var1 = {};
            var1['ref'] = var5;
            var14 = false;
            var1['collapsable'] = var14;
            var7 = _closure1_slot5;
            var22 = _closure1_slot1;
            var17 = _closure1_slot2;
            var5 = var17[var10];
            var6 = var22.bind(var4)(var5);
            var5 = {};
            var5['onPress'] = var19;
            var18 = var18.container;
            var5['style'] = var18;
            var5['accessible'] = var16;
            var5['mode'] = var15;
            var5['unread'] = var11;
            var16 = _closure1_slot0;
            var20 = 15;
            var11 = var17[var20];
            var11 = var16.bind(var4)(var11);
            var21 = var11.intl;
            var18 = var21.string;
            var19 = 16;
            var11 = var17[var19];
            var11 = var22.bind(var4)(var11);
            var11 = var11.yv3DJJ;
            var11 = var18.bind(var21)(var11);
            var5['accessibilityLabel'] = var11;
            var11 = {};
            var11['selected'] = var14;
            var5['accessibilityState'] = var11;
            var18 = _closure1_slot5;
            var11 = var17[var10];
            var11 = var16.bind(var4)(var11);
            var14 = var11.BaseChannelName;
            var11 = {};
            var20 = var17[var20];
            var20 = var16.bind(var4)(var20);
            var21 = var20.intl;
            var20 = var21.string;
            var19 = var17[var19];
            var19 = var22.bind(var4)(var19);
            var19 = var19.yv3DJJ;
            var19 = var20.bind(var21)(var19);
            var11['name'] = var19;
            var11['mode'] = var15;
            var11 = var18.bind(var4)(var14, var11);
            var5['name'] = var11;
            var14 = _closure1_slot5;
            var10 = var17[var10];
            var10 = var16.bind(var4)(var10);
            var11 = var10.BaseChannelIcon;
            var10 = {};
            var10['mode'] = var15;
            var15 = 17;
            var15 = var17[var15];
            var15 = var16.bind(var4)(var15);
            var15 = var15.BoostTier2Icon;
            var10['IconComponent'] = var15;
            var10 = var14.bind(var4)(var11, var10);
            var5['icon'] = var10;
            var11 = _closure1_slot5;
            if(var8) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var10 = _closure1_slot7;
            var8 = {};
            var14 = var12 == var13;
            var12 = undefined;
            if(var14) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var12 = var13.indicator;
case 22:
            var8['indicator'] = var12;
            var8 = var11.bind(var4)(var10, var8);
            _fun0002_ip = 24; continue _fun0002;
case 20:
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var9 = 18;
            var9 = var12[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.NewBadge;
            var9 = {};
            var8 = var11.bind(var4)(var10, var9);
case 24:
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