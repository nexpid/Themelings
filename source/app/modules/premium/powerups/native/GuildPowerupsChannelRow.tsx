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
    var _closure1_slot8 = var1;
    var1 = function GuildPowerupsCoachmarkHost(arg1) {
        var1 = arg1;
        var5 = var1.targetRef;
        var4 = var1.guildId;
        var3 = var1.popout;
        var6 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 9;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var6.bind(var2)(var1);
        var1 = var1.bind(var2)(var5, var4, var3);
        var1 = null;
        return var1;
    };
    var _closure1_slot9 = var1;
    var1 = function GuildPowerupsCoachmark(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var9 = var1.targetRef;
            var8 = var1.guildId;
            var6 = var1.popout;
            var4 = _closure1_slot3;
            var3 = var4.useContext;
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 10;
            var1 = var5[var1];
            var5 = undefined;
            var1 = var7.bind(var5)(var1);
            var1 = var1.SidebarCoachmarkOverlayContext;
            var7 = var3.bind(var4)(var1);
            var4 = _closure1_slot5;
            var3 = _closure1_slot9;
            var1 = {};
            var1['targetRef'] = var9;
            var1['guildId'] = var8;
            var1['popout'] = var6;
            var6 = var4.bind(var5)(var3, var1);
            var3 = null;
            var1 = var6;
            if(!(var3 != var7)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var4 = _closure1_slot5;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 11;
            var2 = var8[var2];
            var2 = var3.bind(var5)(var2);
            var2 = var2.LayerContext;
            var3 = var2.Provider;
            var2 = {};
            var2['value'] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 8:
            return var1;
        }
    };
    var _closure1_slot10 = var1;
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
    var7 = var4.jsx;
    var _closure1_slot5 = var7;
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
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
    var _closure1_slot7 = var4;
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/native/GuildPowerupsChannelRow.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildPowerupsChannelRow(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var8 = var2.guildId;
            var _closure2_slot0 = var8;
            var4 = undefined;
            var _closure2_slot1 = var4;
            var2 = _closure1_slot7;
            var19 = var2.bind(var4)();
            var3 = _closure1_slot3;
            var2 = var3.useRef;
            var13 = null;
            var18 = var2.bind(var3)(var13);
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 12;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var14 = var2.bind(var4)(var8);
            var2 = 13;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var5 = var13 == var14;
            var2 = undefined;
            if(var5) { _fun0003_ip = 6; continue _fun0003 }
case 10:
            var2 = var14.indicator;
case 6:
            var2 = var13 != var2;
            if(var2) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var6 = var13 == var14;
            var5 = undefined;
            if(var6) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var5 = var14.popout;
case 13:
            var2 = var13 != var5;
case 11:
            var2 = var3.bind(var4)(var8, var2);
            var9 = var2.showNewBadgeOnRow;
            var6 = var2.dismissNewBadgeIfShown;
            _closure2_slot1 = var6;
            var3 = var13 == var14;
            var2 = undefined;
            if(var3) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var2 = var14.showUnread;
case 15:
            var17 = true;
            var12 = var17 === var2;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var11 = 14;
            var2 = var2[var11];
            var2 = var3.bind(var4)(var2);
            var2 = var2.ChannelModes;
            if(var12) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var16 = var2.DEFAULT;
            _fun0003_ip = 19; continue _fun0003;
case 17:
            var16 = var2.UNREAD_IMPORTANT;
case 19:
            var5 = _closure1_slot3;
            var3 = var5.useCallback;
            var2 = new Array(2);
            var2[0] = var8;
            var2[1] = var6;
            var1 = function() {
                var2 = _closure2_slot1;
                var1 = undefined;
                var2 = var2.bind(var1)();
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 15;
                var2 = var6[var2];
                var3 = var5.bind(var1)(var2);
                var2 = {};
                var4 = _closure2_slot0;
                var2['guildId'] = var4;
                var4 = 16;
                var4 = var6[var4];
                var4 = var5.bind(var1)(var4);
                var4 = var4.GUILD_POWERUPS_CHANNEL_LIST_ROW;
                var2['analyticsLocation'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var20 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot6;
            var2 = _closure1_slot4;
            var1 = {};
            var1['ref'] = var18;
            var15 = false;
            var1['collapsable'] = var15;
            var7 = _closure1_slot5;
            var6 = _closure1_slot10;
            var5 = {};
            var5['targetRef'] = var18;
            var5['guildId'] = var8;
            var18 = var13 == var14;
            var8 = undefined;
            if(var18) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var8 = var14.popout;
case 20:
            var5['popout'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot5;
            var23 = _closure1_slot1;
            var18 = _closure1_slot2;
            var6 = var18[var11];
            var7 = var23.bind(var4)(var6);
            var6 = {};
            var6['onPress'] = var20;
            var19 = var19.container;
            var6['style'] = var19;
            var6['accessible'] = var17;
            var6['mode'] = var16;
            var6['unread'] = var12;
            var17 = _closure1_slot0;
            var21 = 17;
            var12 = var18[var21];
            var12 = var17.bind(var4)(var12);
            var22 = var12.intl;
            var19 = var22.string;
            var20 = 18;
            var12 = var18[var20];
            var12 = var23.bind(var4)(var12);
            var12 = var12.yv3DJJ;
            var12 = var19.bind(var22)(var12);
            var6['accessibilityLabel'] = var12;
            var12 = {};
            var12['selected'] = var15;
            var6['accessibilityState'] = var12;
            var19 = _closure1_slot5;
            var12 = var18[var11];
            var12 = var17.bind(var4)(var12);
            var15 = var12.BaseChannelName;
            var12 = {};
            var21 = var18[var21];
            var21 = var17.bind(var4)(var21);
            var22 = var21.intl;
            var21 = var22.string;
            var20 = var18[var20];
            var20 = var23.bind(var4)(var20);
            var20 = var20.yv3DJJ;
            var20 = var21.bind(var22)(var20);
            var12['name'] = var20;
            var12['mode'] = var16;
            var12 = var19.bind(var4)(var15, var12);
            var6['name'] = var12;
            var15 = _closure1_slot5;
            var11 = var18[var11];
            var11 = var17.bind(var4)(var11);
            var12 = var11.BaseChannelIcon;
            var11 = {};
            var11['mode'] = var16;
            var16 = 19;
            var16 = var18[var16];
            var16 = var17.bind(var4)(var16);
            var16 = var16.BoostTier2Icon;
            var11['IconComponent'] = var16;
            var11 = var15.bind(var4)(var12, var11);
            var6['icon'] = var11;
            var12 = _closure1_slot5;
            if(var9) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var11 = _closure1_slot8;
            var9 = {};
            var15 = var13 == var14;
            var13 = undefined;
            if(var15) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var13 = var14.indicator;
case 24:
            var9['indicator'] = var13;
            var9 = var12.bind(var4)(var11, var9);
            _fun0003_ip = 26; continue _fun0003;
case 22:
            var11 = _closure1_slot0;
            var13 = _closure1_slot2;
            var10 = 20;
            var10 = var13[var10];
            var10 = var11.bind(var4)(var10);
            var11 = var10.NewBadge;
            var10 = {};
            var9 = var12.bind(var4)(var11, var10);
case 26:
            var6['channelInfo'] = var9;
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