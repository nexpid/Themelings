// app/modules/main_tabs_v2/native/shared_components/guild_channels/ChannelItem.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function LaunchpadChannelIcon(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var14 = var2.channel;
            var _closure2_slot0 = var14;
            var11 = var2.layout;
            var2 = _closure1_slot9;
            var4 = undefined;
            var8 = var2.bind(var4)(var11);
            var13 = _closure1_slot0;
            var10 = _closure1_slot2;
            var12 = 8;
            var2 = var10[var12];
            var3 = var13.bind(var4)(var2);
            var2 = var3.getLayoutStyles;
            var17 = var2.bind(var3)(var11);
            var2 = 9;
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
            var3 = _closure1_slot8;
            var2 = _closure1_slot7;
            var1 = {};
            var7 = _closure1_slot6;
            var6 = _closure1_slot3;
            var5 = {};
            var8 = var8.guildBadgeIcon;
            var5['style'] = var8;
            var16 = _closure1_slot6;
            var15 = _closure1_slot1;
            var8 = 10;
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
            var8 = _closure1_slot6;
            var6 = 11;
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
            if(!var13) { _fun0001_ip = 261; continue _fun0001 }
 257:
            var10 = 'md';
 261:
            var6['size'] = var10;
            var10 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var12];
            var10 = var10.bind(var4)(var9);
            var9 = var10.isLayoutCozy;
            var10 = var9.bind(var10)(var11);
            var9 = 32;
            if(!var10) { _fun0001_ip = 302; continue _fun0001 }
 299:
            var9 = 48;
 302:
            var6['wrapperSize'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot10 = var1;
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
    var4 = native4;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.UnreadSetting;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var7 = var4.Fragment;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = {};
            var2 = {'position': 'absolute', 'zIndex': 1, 'bottom': 4294967292, 'right': 4294967292, 'borderColor': null, 'borderWidth': 2};
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var4 = 7;
            var4 = var6[var4];
            var5 = undefined;
            var4 = var7.bind(var5)(var4);
            var4 = var4.colors;
            var4 = var4.BG_BASE_PRIMARY;
            var2['borderColor'] = var4;
            var4 = _closure1_slot0;
            var3 = 8;
            var3 = var6[var3];
            var5 = var4.bind(var5)(var3);
            var4 = var5.isLayoutCozy;
            var3 = arg1;
            var4 = var4.bind(var5)(var3);
            var3 = 6;
            if(!var4) { _fun0002_ip = 97; continue _fun0002 }
 94:
            var3 = 9;
 97:
            var2['borderRadius'] = var3;
            var1['guildBadgeIcon'] = var2;
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 16;
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
        var6 = var1.userCount;
        var5 = var1.embeddedActivitiesCount;
        var1 = {'accessible': true, 'accessibilityRole': 'button'};
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var2 = 5;
        var2 = var4[var2];
        var4 = undefined;
        var3 = var3.bind(var4)(var2);
        var2 = {};
        var2['channel'] = var9;
        var2['unread'] = var8;
        var2['mentionCount'] = var7;
        var2['userCount'] = var6;
        var2['embeddedActivitiesCount'] = var5;
        var2 = var3.bind(var4)(var2);
        var1['accessibilityLabel'] = var2;
        return var1;
    };
    var3['getChannelAccessibilityProps'] = var4;
    var2 = function renderChannelItem(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var9 = var1.channel;
            var31 = var1.subtitle;
            var15 = var1.unreadBadge;
            var22 = var1.mentionBadge;
            var26 = var1.locked;
            var11 = undefined;
            if(!(var26 === var11)) { _fun0003_ip = 40; continue _fun0003 }
 38:
            var26 = false;
 40:
            var30 = var1.unread;
            if(!(var30 === var11)) { _fun0003_ip = 52; continue _fun0003 }
 50:
            var30 = false;
 52:
            var29 = var1.resolvedUnreadSetting;
            if(!(var29 === var11)) { _fun0003_ip = 75; continue _fun0003 }
 62:
            var2 = _closure1_slot5;
            var29 = var2.ONLY_MENTIONS;
 75:
            var24 = var1.live;
            if(!(var24 === var11)) { _fun0003_ip = 87; continue _fun0003 }
 85:
            var24 = false;
 87:
            var28 = var1.muted;
            if(!(var28 === var11)) { _fun0003_ip = 99; continue _fun0003 }
 97:
            var28 = false;
 99:
            var3 = var1.latestMessageTimestamp;
            var8 = var1.layout;
            var17 = var1.end;
            var25 = var1.connected;
            var23 = var1.mentionCount;
            var7 = var1.launchpad;
            var32 = var1.channelName;
            var6 = var1.fontScale;
            var21 = var1.isSubscriptionGated;
            if(!(var21 === var11)) { _fun0003_ip = 158; continue _fun0003 }
 156:
            var21 = false;
 158:
            var20 = var1.needSubscriptionToAccess;
            if(!(var20 === var11)) { _fun0003_ip = 170; continue _fun0003 }
 168:
            var20 = false;
 170:
            var5 = var1.panelVariant;
            if(!(var5 === var11)) { _fun0003_ip = 182; continue _fun0003 }
 180:
            var5 = false;
 182:
            var13 = null;
            var1 = var13 == var3;
            var27 = null;
            if(var1) { _fun0003_ip = 232; continue _fun0003 }
 193:
            var27 = null;
            if(var28) { _fun0003_ip = 232; continue _fun0003 }
 198:
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 12;
            var1 = var4[var1];
            var2 = var2.bind(var11)(var1);
            var1 = var2.getRelativeTimestamp;
            var27 = var1.bind(var2)(var3);
 232:
            var35 = _closure1_slot0;
            var34 = _closure1_slot2;
            var19 = 8;
            var1 = var34[var19];
            var2 = var35.bind(var11)(var1);
            var1 = var2.getLayoutStyles;
            var37 = var1.bind(var2)(var8);
            var1 = 13;
            var1 = var34[var1];
            var4 = var35.bind(var11)(var1);
            var3 = var4.renderChannelWrapper;
            var10 = _closure1_slot8;
            var2 = _closure1_slot7;
            var1 = {};
            var12 = new Array(4);
            var12[0] = var15;
            var18 = _closure1_slot6;
            var16 = _closure1_slot3;
            var15 = {};
            var33 = {'position': 'relative', 'borderRadius': null, 'justifyContent': 'center', 'alignItems': 'center', 'flexShrink': 0, 'flexGrow': 0};
            var38 = _closure1_slot1;
            var36 = 7;
            var36 = var34[var36];
            var36 = var38.bind(var11)(var36);
            var36 = var36.radii;
            var36 = var36.round;
            var33['borderRadius'] = var36;
            var34 = var34[var19];
            var36 = var35.bind(var11)(var34);
            var35 = var36.makeSizeStyle;
            var34 = var37.icon;
            var34 = var34.wrapper;
            var34 = var34.size;
            var39 = var35.bind(var36)(var34);
            var40 = var33;
            var34 = copyDataProperties(var40, var39);
            var34 = var37.icon;
            var39 = var34.margin;
            var40 = var33;
            var34 = copyDataProperties(var40, var39);
            var15['style'] = var33;
            var33 = var9.isGroupDM;
            var33 = var33.bind(var9)();
            var36 = _closure1_slot6;
            if(var33) { _fun0003_ip = 463; continue _fun0003 }
 440:
            var34 = _closure1_slot10;
            var33 = {};
            var33['channel'] = var9;
            var33['layout'] = var8;
            var33 = var36.bind(var11)(var34, var33);
            _fun0003_ip = 510; continue _fun0003;
 463:
            var35 = _closure1_slot1;
            var38 = _closure1_slot2;
            var34 = 14;
            var34 = var38[var34];
            var35 = var35.bind(var11)(var34);
            var34 = {};
            var34['channel'] = var9;
            var37 = var37.icon;
            var37 = var37.avatarSize;
            var34['size'] = var37;
            var33 = var36.bind(var11)(var35, var34);
 510:
            var15['children'] = var33;
            var15 = var18.bind(var11)(var16, var15);
            var12[1] = var15;
            var16 = _closure1_slot0;
            var18 = _closure1_slot2;
            var15 = 15;
            var15 = var18[var15];
            var18 = var16.bind(var11)(var15);
            var16 = var18.renderChannelContent;
            var15 = {};
            var15['layout'] = var8;
            if(!(var13 == var32)) { _fun0003_ip = 566; continue _fun0003 }
 561:
            var32 = var9.name;
 566:
            var15['name'] = var32;
            var15['subtitle'] = var31;
            var15['unread'] = var30;
            var15['resolvedUnreadSetting'] = var29;
            var15['muted'] = var28;
            var15['lastMessageTimestampString'] = var27;
            var15['channel'] = var9;
            var15['locked'] = var26;
            var15['connected'] = var25;
            var15['live'] = var24;
            var15['mentionCount'] = var23;
            var15['mentionBadge'] = var22;
            var15['isSubscriptionGated'] = var21;
            var15['needSubscriptionToAccess'] = var20;
            var15 = var16.bind(var18)(var15);
            var12[2] = var15;
            var15 = var13 != var17;
            var13 = null;
            if(!var15) { _fun0003_ip = 683; continue _fun0003 }
 652:
            var16 = _closure1_slot6;
            var15 = _closure1_slot3;
            var14 = {};
            var18 = {};
            var18['paddingLeft'] = var19;
            var14['style'] = var18;
            var14['children'] = var17;
            var13 = var16.bind(var11)(var15, var14);
 683:
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