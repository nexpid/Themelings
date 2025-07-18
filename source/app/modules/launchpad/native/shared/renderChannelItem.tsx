// app/modules/launchpad/native/shared/renderChannelItem.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function LaunchpadChannelIcon(arg1) {
        var2 = arg1;
        var9 = var2.channel;
        var _closure2_slot0 = var9;
        var2 = _closure1_slot9;
        var4 = undefined;
        var12 = var2.bind(var4)();
        var13 = _closure1_slot1;
        var10 = _closure1_slot2;
        var2 = 8;
        var2 = var10[var2];
        var2 = var13.bind(var4)(var2);
        var15 = var2.bind(var4)();
        var7 = _closure1_slot0;
        var2 = 9;
        var2 = var10[var2];
        var5 = var7.bind(var4)(var2);
        var3 = var5.useStateFromStores;
        var8 = _closure1_slot4;
        var2 = new Array(1);
        var2[0] = var8;
        var1 = function() {
            var3 = _closure1_slot4;
            var2 = var3.getGuild;
            var1 = _closure2_slot0;
            var1 = var1.guild_id;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var16 = var3.bind(var5)(var2, var1);
        var3 = _closure1_slot8;
        var2 = _closure1_slot7;
        var1 = {};
        var11 = _closure1_slot6;
        var8 = _closure1_slot3;
        var5 = {};
        var12 = var12.guildBadgeIcon;
        var5['style'] = var12;
        var14 = _closure1_slot6;
        var12 = 10;
        var12 = var10[var12];
        var13 = var13.bind(var4)(var12);
        var12 = {};
        var12['guild'] = var16;
        var15 = var15.icon;
        var15 = var15.guildBadgeIconSize;
        var12['size'] = var15;
        var12 = var14.bind(var4)(var13, var12);
        var5['children'] = var12;
        var8 = var11.bind(var4)(var8, var5);
        var5 = new Array(2);
        var5[0] = var8;
        var8 = _closure1_slot6;
        var6 = 11;
        var6 = var10[var6];
        var6 = var7.bind(var4)(var6);
        var7 = var6.ChannelIcon;
        var6 = {'channel': null, 'size': 'sm', 'wrapperSize': 32};
        var6['channel'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
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
    var4 = function() {
        var1 = {};
        var2 = {'position': 'absolute', 'zIndex': 1, 'bottom': 4294967292, 'right': 4294967292, 'borderColor': null, 'borderWidth': 2, 'borderRadius': 6};
        var5 = _closure1_slot1;
        var4 = _closure1_slot2;
        var3 = 7;
        var4 = var4[var3];
        var3 = undefined;
        var3 = var5.bind(var3)(var4);
        var3 = var3.colors;
        var3 = var3.BG_BASE_PRIMARY;
        var2['borderColor'] = var3;
        var1['guildBadgeIcon'] = var2;
        return var1;
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/launchpad/native/shared/renderChannelItem.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function renderChannelItem(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var6 = var1.channel;
            var22 = var1.channelCategoryName;
            var27 = var1.subtitle;
            var11 = var1.unreadBadge;
            var17 = var1.mentionBadge;
            var21 = var1.locked;
            var4 = undefined;
            if(!(var21 === var4)) { _fun0001_ip = 46; continue _fun0001 }
 44:
            var21 = false;
 46:
            var26 = var1.unread;
            if(!(var26 === var4)) { _fun0001_ip = 58; continue _fun0001 }
 56:
            var26 = false;
 58:
            var25 = var1.resolvedUnreadSetting;
            if(!(var25 === var4)) { _fun0001_ip = 81; continue _fun0001 }
 68:
            var2 = _closure1_slot5;
            var25 = var2.ONLY_MENTIONS;
 81:
            var19 = var1.live;
            if(!(var19 === var4)) { _fun0001_ip = 93; continue _fun0001 }
 91:
            var19 = false;
 93:
            var24 = var1.muted;
            if(!(var24 === var4)) { _fun0001_ip = 105; continue _fun0001 }
 103:
            var24 = false;
 105:
            var3 = var1.latestMessageTimestamp;
            var13 = var1.end;
            var20 = var1.connected;
            var18 = var1.mentionCount;
            var28 = var1.channelName;
            var5 = var1.fontScale;
            var16 = var1.isSubscriptionGated;
            if(!(var16 === var4)) { _fun0001_ip = 152; continue _fun0001 }
 150:
            var16 = false;
 152:
            var14 = var1.needSubscriptionToAccess;
            if(!(var14 === var4)) { _fun0001_ip = 164; continue _fun0001 }
 162:
            var14 = false;
 164:
            var9 = null;
            var1 = var9 == var3;
            var23 = null;
            if(var1) { _fun0001_ip = 214; continue _fun0001 }
 175:
            var23 = null;
            if(var24) { _fun0001_ip = 214; continue _fun0001 }
 180:
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 12;
            var1 = var7[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.getRelativeTimestamp;
            var23 = var1.bind(var2)(var3);
 214:
            var32 = _closure1_slot1;
            var33 = _closure1_slot2;
            var15 = 8;
            var1 = var33[var15];
            var1 = var32.bind(var4)(var1);
            var34 = var1.bind(var4)();
            var1 = 13;
            var1 = var33[var1];
            var3 = var32.bind(var4)(var1);
            var7 = _closure1_slot8;
            var2 = _closure1_slot7;
            var1 = {};
            var8 = new Array(4);
            var8[0] = var11;
            var29 = _closure1_slot6;
            var12 = _closure1_slot3;
            var11 = {};
            var30 = {'position': 'relative', 'borderRadius': null, 'justifyContent': 'center', 'alignItems': 'center', 'flexShrink': 0, 'flexGrow': 0};
            var31 = 7;
            var31 = var33[var31];
            var31 = var32.bind(var4)(var31);
            var31 = var31.radii;
            var31 = var31.round;
            var30['borderRadius'] = var31;
            var31 = var34.icon;
            var31 = var31.wrapper;
            var31 = var31.size;
            var30['width'] = var31;
            var31 = var34.icon;
            var31 = var31.wrapper;
            var31 = var31.size;
            var30['height'] = var31;
            var31 = var34.icon;
            var36 = var31.margin;
            var37 = var30;
            var31 = copyDataProperties(var37, var36);
            var11['style'] = var30;
            var30 = var6.isGroupDM;
            var30 = var30.bind(var6)();
            var33 = _closure1_slot6;
            if(var30) { _fun0001_ip = 420; continue _fun0001 }
 402:
            var31 = _closure1_slot10;
            var30 = {};
            var30['channel'] = var6;
            var30 = var33.bind(var4)(var31, var30);
            _fun0001_ip = 467; continue _fun0001;
 420:
            var32 = _closure1_slot1;
            var35 = _closure1_slot2;
            var31 = 14;
            var31 = var35[var31];
            var32 = var32.bind(var4)(var31);
            var31 = {};
            var31['channel'] = var6;
            var34 = var34.icon;
            var34 = var34.avatarSize;
            var31['size'] = var34;
            var30 = var33.bind(var4)(var32, var31);
 467:
            var11['children'] = var30;
            var11 = var29.bind(var4)(var12, var11);
            var8[1] = var11;
            var12 = _closure1_slot1;
            var29 = _closure1_slot2;
            var11 = 15;
            var11 = var29[var11];
            var12 = var12.bind(var4)(var11);
            var11 = {};
            if(!(var9 == var28)) { _fun0001_ip = 512; continue _fun0001 }
 507:
            var28 = var6.name;
 512:
            var11['name'] = var28;
            var11['subtitle'] = var27;
            var11['unread'] = var26;
            var11['resolvedUnreadSetting'] = var25;
            var11['muted'] = var24;
            var11['lastMessageTimestampString'] = var23;
            var11['channel'] = var6;
            var11['channelCategoryName'] = var22;
            var11['locked'] = var21;
            var11['connected'] = var20;
            var11['live'] = var19;
            var11['mentionCount'] = var18;
            var11['mentionBadge'] = var17;
            var11['isSubscriptionGated'] = var16;
            var11['needSubscriptionToAccess'] = var14;
            var11 = var12.bind(var4)(var11);
            var8[2] = var11;
            var11 = var9 != var13;
            var9 = null;
            if(!var11) { _fun0001_ip = 634; continue _fun0001 }
 603:
            var12 = _closure1_slot6;
            var11 = _closure1_slot3;
            var10 = {};
            var14 = {};
            var14['paddingLeft'] = var15;
            var10['style'] = var14;
            var10['children'] = var13;
            var9 = var12.bind(var4)(var11, var10);
 634:
            var8[3] = var9;
            var1['children'] = var8;
            var2 = var7.bind(var4)(var2, var1);
            var1 = {};
            var1['channel'] = var6;
            var1['fontScale'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function getChannelAccessibilityProps(arg1) {
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
    var3['getChannelAccessibilityProps'] = var2;
    return var1;
})();