// app/modules/launchpad/native/shared/renderChannelItem.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function LaunchpadChannelIcon(arg1) {
        var2 = arg1;
        var9 = var2.channel;
        var _closure2_slot0 = var9;
        var2 = _closure1_slot11;
        var4 = undefined;
        var12 = var2.bind(var4)();
        var13 = _closure1_slot1;
        var10 = _closure1_slot2;
        var2 = 10;
        var2 = var10[var2];
        var2 = var13.bind(var4)(var2);
        var15 = var2.bind(var4)();
        var7 = _closure1_slot0;
        var2 = 11;
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
        var3 = _closure1_slot10;
        var2 = _closure1_slot9;
        var1 = {};
        var11 = _closure1_slot8;
        var8 = _closure1_slot3;
        var5 = {};
        var12 = var12.guildBadgeIcon;
        var5['style'] = var12;
        var14 = _closure1_slot8;
        var12 = 12;
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
        var8 = _closure1_slot8;
        var6 = 13;
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
    var4 = function() {
        var1 = {};
        var2 = {'position': 'absolute', 'zIndex': 1, 'bottom': 4294967292, 'right': 4294967292, 'borderColor': null, 'borderWidth': 2, 'borderRadius': 6};
        var5 = _closure1_slot1;
        var4 = _closure1_slot2;
        var3 = 9;
        var4 = var4[var3];
        var3 = undefined;
        var3 = var5.bind(var3)(var4);
        var3 = var3.colors;
        var3 = var3.BACKGROUND_BASE_LOW;
        var2['borderColor'] = var3;
        var1['guildBadgeIcon'] = var2;
        return var1;
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/launchpad/native/shared/renderChannelItem.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function renderChannelItem(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var21 = var1.channel;
            var20 = var1.channelCategoryName;
            var26 = var1.subtitle;
            var10 = var1.unreadBadge;
            var15 = var1.mentionBadge;
            var19 = var1.locked;
            var4 = undefined;
            if(!(var19 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var19 = false;
case 2:
            var25 = var1.unread;
            if(!(var25 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var25 = false;
case 4:
            var24 = var1.resolvedUnreadSetting;
            if(!(var24 === var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = _closure1_slot7;
            var24 = var2.ONLY_MENTIONS;
case 6:
            var17 = var1.live;
            if(!(var17 === var4)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var17 = false;
case 8:
            var23 = var1.muted;
            if(!(var23 === var4)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var23 = false;
case 10:
            var3 = var1.latestMessageTimestamp;
            var12 = var1.end;
            var18 = var1.connected;
            var16 = var1.mentionCount;
            var27 = var1.channelName;
            var5 = var1.fontScale;
            var14 = var1.isSubscriptionGated;
            if(!(var14 === var4)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var14 = false;
case 12:
            var13 = var1.needSubscriptionToAccess;
            if(!(var13 === var4)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var13 = false;
case 14:
            var8 = null;
            var1 = var8 == var3;
            var22 = null;
            if(var1) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var22 = null;
            if(var23) { _fun0001_ip = 16; continue _fun0001 }
case 18:
            var2 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 14;
            var1 = var6[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.getRelativeTimestamp;
            var22 = var1.bind(var2)(var3);
case 16:
            var31 = _closure1_slot1;
            var32 = _closure1_slot2;
            var1 = 10;
            var1 = var32[var1];
            var1 = var31.bind(var4)(var1);
            var33 = var1.bind(var4)();
            var1 = 15;
            var1 = var32[var1];
            var3 = var31.bind(var4)(var1);
            var6 = _closure1_slot10;
            var2 = _closure1_slot9;
            var1 = {};
            var7 = new Array(4);
            var7[0] = var10;
            var28 = _closure1_slot8;
            var11 = _closure1_slot3;
            var10 = {};
            var29 = {'position': 'relative', 'borderRadius': null, 'justifyContent': 'center', 'alignItems': 'center', 'flexShrink': 0, 'flexGrow': 0};
            var30 = 9;
            var30 = var32[var30];
            var30 = var31.bind(var4)(var30);
            var30 = var30.radii;
            var30 = var30.round;
            var29['borderRadius'] = var30;
            var30 = var33.icon;
            var30 = var30.wrapper;
            var30 = var30.size;
            var29['width'] = var30;
            var30 = var33.icon;
            var30 = var30.wrapper;
            var30 = var30.size;
            var29['height'] = var30;
            var30 = var33.icon;
            var36 = var30.margin;
            var37 = var29;
            var30 = copyDataProperties(var37, var36);
            var10['style'] = var29;
            var29 = var21.isGroupDM;
            var29 = var29.bind(var21)();
            var32 = _closure1_slot8;
            if(var29) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var30 = _closure1_slot12;
            var29 = {};
            var29['channel'] = var21;
            var29 = var32.bind(var4)(var30, var29);
            _fun0001_ip = 21; continue _fun0001;
case 19:
            var31 = _closure1_slot1;
            var34 = _closure1_slot2;
            var30 = 16;
            var30 = var34[var30];
            var31 = var31.bind(var4)(var30);
            var30 = {};
            var30['channel'] = var21;
            var33 = var33.icon;
            var33 = var33.avatarSize;
            var30['size'] = var33;
            var29 = var32.bind(var4)(var31, var30);
case 21:
            var10['children'] = var29;
            var10 = var28.bind(var4)(var11, var10);
            var7[1] = var10;
            var11 = _closure1_slot1;
            var28 = _closure1_slot2;
            var10 = 17;
            var10 = var28[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            if(!(var8 == var27)) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var29 = _closure1_slot0;
            var30 = _closure1_slot2;
            var28 = 18;
            var28 = var30[var28];
            var31 = var29.bind(var4)(var28);
            var30 = var31.computeChannelName;
            var29 = _closure1_slot6;
            var28 = _closure1_slot5;
            var27 = var30.bind(var31)(var21, var29, var28);
case 22:
            var10['name'] = var27;
            var10['subtitle'] = var26;
            var10['unread'] = var25;
            var10['resolvedUnreadSetting'] = var24;
            var10['muted'] = var23;
            var10['lastMessageTimestampString'] = var22;
            var10['channel'] = var21;
            var10['channelCategoryName'] = var20;
            var10['locked'] = var19;
            var10['connected'] = var18;
            var10['live'] = var17;
            var10['mentionCount'] = var16;
            var10['mentionBadge'] = var15;
            var10['isSubscriptionGated'] = var14;
            var10['needSubscriptionToAccess'] = var13;
            var10 = var11.bind(var4)(var10);
            var7[2] = var10;
            var10 = var8 != var12;
            var8 = null;
            if(!var10) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var11 = _closure1_slot8;
            var10 = _closure1_slot3;
            var9 = {};
            var13 = {};
            var14 = 8;
            var13['paddingLeft'] = var14;
            var9['style'] = var13;
            var9['children'] = var12;
            var8 = var11.bind(var4)(var10, var9);
case 24:
            var7[3] = var8;
            var1['children'] = var7;
            var2 = var6.bind(var4)(var2, var1);
            var1 = {};
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
    var3['getChannelAccessibilityProps'] = var2;
    return var1;
})();