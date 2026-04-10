// app/modules/main_tabs_v2/native/shared_components/guild_channels/ChannelItem.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function LaunchpadChannelIcon(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var14 = var2.channel;
            var _closure2_slot0 = var14;
            var11 = var2.layout;
            var2 = _closure1_slot11;
            var4 = undefined;
            var8 = var2.bind(var4)(var11);
            var13 = _closure1_slot0;
            var10 = _closure1_slot2;
            var12 = 10;
            var2 = var10[var12];
            var3 = var13.bind(var4)(var2);
            var2 = var3.getLayoutStyles;
            var17 = var2.bind(var3)(var11);
            var2 = 11;
            var2 = var10[var2];
            var5 = var13.bind(var4)(var2);
            var3 = var5.useStateFromStores;
            var6 = _closure1_slot4;
            var2 = new Array(1);
            var2[0] = var6;
            var1 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var1.guild_id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var18 = var3.bind(var5)(var2, var1);
            var3 = _closure1_slot10;
            var2 = _closure1_slot9;
            var1 = {};
            var7 = _closure1_slot8;
            var6 = _closure1_slot3;
            var5 = {};
            var8 = var8.guildBadgeIcon;
            var5['style'] = var8;
            var16 = _closure1_slot8;
            var15 = _closure1_slot1;
            var8 = 12;
            var8 = var10[var8];
            var15 = var15.bind(var4)(var8);
            var8 = {};
            var8['guild'] = var18;
            var17 = var17.icon;
            var17 = var17.guildBadgeIconSize;
            var8['size'] = var17;
            var8 = var16.bind(var4)(var15, var8);
            var5['children'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot8;
            var6 = 13;
            var6 = var10[var6];
            var6 = var13.bind(var4)(var6);
            var7 = var6.ChannelIcon;
            var6 = {};
            var6['channel'] = var14;
            var10 = var10[var12];
            var13 = var13.bind(var4)(var10);
            var10 = var13.isLayoutCozy;
            var13 = var10.bind(var13)(var11);
            var10 = 'sm';
            if(!var13) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var10 = 'md';
case 2:
            var6['size'] = var10;
            var10 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var12];
            var10 = var10.bind(var4)(var9);
            var9 = var10.isLayoutCozy;
            var10 = var9.bind(var10)(var11);
            var9 = 32;
            if(!var10) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var9 = 48;
case 4:
            var6['wrapperSize'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot12 = var1;
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UnreadSetting;
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot8 = var7;
    var7 = var4.Fragment;
    var _closure1_slot9 = var7;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = {};
            var2 = {'position': 'absolute', 'zIndex': 1, 'bottom': 4294967292, 'right': 4294967292, 'borderColor': null, 'borderWidth': 2};
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 9;
            var5 = var7[var4];
            var6 = undefined;
            var5 = var8.bind(var6)(var5);
            var5 = var5.colors;
            var5 = var5.BACKGROUND_BASE_LOW;
            var2['borderColor'] = var5;
            var5 = _closure1_slot0;
            var3 = 10;
            var3 = var7[var3];
            var6 = var5.bind(var6)(var3);
            var5 = var6.isLayoutCozy;
            var3 = arg1;
            var5 = var5.bind(var6)(var3);
            var3 = 6;
            if(!var5) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var3 = var4;
case 6:
            var2['borderRadius'] = var3;
            var1['guildBadgeIcon'] = var2;
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/shared_components/guild_channels/ChannelItem.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getChannelAccessibilityProps(arg1) {
        var1 = arg1;
        var9 = var1.channel;
        var8 = var1.unread;
        var7 = var1.mentionCount;
        var6 = var1.voiceStates;
        var5 = var1.embeddedActivitiesCount;
        var1 = {'accessible': true, 'accessibilityRole': 'button'};
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var2 = 7;
        var2 = var4[var2];
        var4 = undefined;
        var3 = var3.bind(var4)(var2);
        var2 = {};
        var2['channel'] = var9;
        var2['unread'] = var8;
        var2['mentionCount'] = var7;
        var2['voiceStates'] = var6;
        var2['embeddedActivitiesCount'] = var5;
        var2 = var3.bind(var4)(var2);
        var1['accessibilityLabel'] = var2;
        return var1;
    };
    var3['getChannelAccessibilityProps'] = var4;
    var2 = function renderChannelItem(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var9 = var1.channel;
            var30 = var1.subtitle;
            var15 = var1.unreadBadge;
            var21 = var1.mentionBadge;
            var25 = var1.locked;
            var11 = undefined;
            if(!(var25 === var11)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var25 = false;
case 8:
            var29 = var1.unread;
            if(!(var29 === var11)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var29 = false;
case 10:
            var28 = var1.resolvedUnreadSetting;
            if(!(var28 === var11)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var2 = _closure1_slot7;
            var28 = var2.ONLY_MENTIONS;
case 12:
            var23 = var1.live;
            if(!(var23 === var11)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var23 = false;
case 14:
            var27 = var1.muted;
            if(!(var27 === var11)) { _fun0003_ip = 16; continue _fun0003 }
case 6:
            var27 = false;
case 16:
            var3 = var1.latestMessageTimestamp;
            var8 = var1.layout;
            var17 = var1.end;
            var24 = var1.connected;
            var22 = var1.mentionCount;
            var7 = var1.launchpad;
            var31 = var1.channelName;
            var6 = var1.fontScale;
            var20 = var1.isSubscriptionGated;
            if(!(var20 === var11)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var20 = false;
case 17:
            var19 = var1.needSubscriptionToAccess;
            if(!(var19 === var11)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var19 = false;
case 19:
            var5 = var1.panelVariant;
            if(!(var5 === var11)) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var5 = false;
case 21:
            var13 = null;
            var1 = var13 == var3;
            var26 = null;
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var26 = null;
            if(var27) { _fun0003_ip = 23; continue _fun0003 }
case 25:
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 14;
            var1 = var4[var1];
            var2 = var2.bind(var11)(var1);
            var1 = var2.getRelativeTimestamp;
            var26 = var1.bind(var2)(var3);
case 23:
            var34 = _closure1_slot0;
            var35 = _closure1_slot2;
            var33 = 10;
            var1 = var35[var33];
            var2 = var34.bind(var11)(var1);
            var1 = var2.getLayoutStyles;
            var36 = var1.bind(var2)(var8);
            var1 = 15;
            var1 = var35[var1];
            var4 = var34.bind(var11)(var1);
            var3 = var4.renderChannelWrapper;
            var10 = _closure1_slot10;
            var2 = _closure1_slot9;
            var1 = {};
            var12 = new Array(4);
            var12[0] = var15;
            var18 = _closure1_slot8;
            var16 = _closure1_slot3;
            var15 = {};
            var32 = {'position': 'relative', 'borderRadius': null, 'justifyContent': 'center', 'alignItems': 'center', 'flexShrink': 0, 'flexGrow': 0};
            var38 = _closure1_slot1;
            var37 = 9;
            var37 = var35[var37];
            var37 = var38.bind(var11)(var37);
            var37 = var37.radii;
            var37 = var37.round;
            var32['borderRadius'] = var37;
            var33 = var35[var33];
            var35 = var34.bind(var11)(var33);
            var34 = var35.makeSizeStyle;
            var33 = var36.icon;
            var33 = var33.wrapper;
            var33 = var33.size;
            var40 = var34.bind(var35)(var33);
            var41 = var32;
            var33 = copyDataProperties(var41, var40);
            var33 = var36.icon;
            var40 = var33.margin;
            var41 = var32;
            var33 = copyDataProperties(var41, var40);
            var15['style'] = var32;
            var32 = var9.isGroupDM;
            var32 = var32.bind(var9)();
            var35 = _closure1_slot8;
            if(var32) { _fun0003_ip = 26; continue _fun0003 }
case 27:
            var33 = _closure1_slot12;
            var32 = {};
            var32['channel'] = var9;
            var32['layout'] = var8;
            var32 = var35.bind(var11)(var33, var32);
            _fun0003_ip = 28; continue _fun0003;
case 26:
            var34 = _closure1_slot1;
            var37 = _closure1_slot2;
            var33 = 16;
            var33 = var37[var33];
            var34 = var34.bind(var11)(var33);
            var33 = {};
            var33['channel'] = var9;
            var36 = var36.icon;
            var36 = var36.avatarSize;
            var33['size'] = var36;
            var32 = var35.bind(var11)(var34, var33);
case 28:
            var15['children'] = var32;
            var15 = var18.bind(var11)(var16, var15);
            var12[1] = var15;
            var16 = _closure1_slot0;
            var18 = _closure1_slot2;
            var15 = 17;
            var15 = var18[var15];
            var18 = var16.bind(var11)(var15);
            var16 = var18.renderChannelContent;
            var15 = {};
            var15['layout'] = var8;
            if(!(var13 == var31)) { _fun0003_ip = 29; continue _fun0003 }
case 30:
            var33 = _closure1_slot0;
            var34 = _closure1_slot2;
            var32 = 18;
            var32 = var34[var32];
            var35 = var33.bind(var11)(var32);
            var34 = var35.computeChannelName;
            var33 = _closure1_slot6;
            var32 = _closure1_slot5;
            var31 = var34.bind(var35)(var9, var33, var32);
case 29:
            var15['name'] = var31;
            var15['subtitle'] = var30;
            var15['unread'] = var29;
            var15['resolvedUnreadSetting'] = var28;
            var15['muted'] = var27;
            var15['lastMessageTimestampString'] = var26;
            var15['channel'] = var9;
            var15['locked'] = var25;
            var15['connected'] = var24;
            var15['live'] = var23;
            var15['mentionCount'] = var22;
            var15['mentionBadge'] = var21;
            var15['isSubscriptionGated'] = var20;
            var15['needSubscriptionToAccess'] = var19;
            var15 = var16.bind(var18)(var15);
            var12[2] = var15;
            var15 = var13 != var17;
            var13 = null;
            if(!var15) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var16 = _closure1_slot8;
            var15 = _closure1_slot3;
            var14 = {};
            var18 = {};
            var19 = 8;
            var18['paddingLeft'] = var19;
            var14['style'] = var18;
            var14['children'] = var17;
            var13 = var16.bind(var11)(var15, var14);
case 31:
            var12[3] = var13;
            var1['children'] = var12;
            var2 = var10.bind(var11)(var2, var1);
            var1 = {};
            var1['channel'] = var9;
            var1['layout'] = var8;
            var1['launchpad'] = var7;
            var1['fontScale'] = var6;
            var1['panelVariant'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['renderChannelItem'] = var2;
    return var1;
})();