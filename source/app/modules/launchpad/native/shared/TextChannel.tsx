// app/modules/launchpad/native/shared/TextChannel.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.getThemedRippleConfig;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UnreadSetting;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot10 = var8;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = function() {
        var1 = {};
        var2 = {'flex': 1, 'borderRadius': null, 'marginBottom': 1};
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var3 = 9;
        var3 = var6[var3];
        var4 = undefined;
        var3 = var5.bind(var4)(var3);
        var3 = var3.bind(var4)();
        var3 = var3.container;
        var3 = var3.borderRadius;
        var2['borderRadius'] = var3;
        var1['pressable'] = var2;
        var2 = {'position': 'absolute', 'top': 0, 'bottom': 0, 'left': 0, 'right': 0, 'borderWidth': 1};
        var3 = 10;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.colors;
        var7 = var7.BORDER_MUTED;
        var2['borderColor'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.radii;
        var7 = var7.md;
        var2['borderRadius'] = var7;
        var1['selectedBorder'] = var2;
        var2 = {};
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.radii;
        var7 = var7.md;
        var2['borderRadius'] = var7;
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.colors;
        var3 = var3.BACKGROUND_MOD_MUTED;
        var2['backgroundColor'] = var3;
        var1['rowSelected'] = var2;
        return var1;
    };
    var4 = var8.bind(var9)(var4);
    var _closure1_slot12 = var4;
    var4 = var7.memo;
    var2 = function TextChannel(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var17 = var2.channel;
            var _closure2_slot0 = var17;
            var11 = var2.subtitle;
            var18 = var2.muted;
            var3 = undefined;
            if(!(var18 === var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var18 = false;
case 2:
            var37 = var2.navigationReplace;
            if(!(var37 === var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var37 = false;
case 4:
            var12 = var2.showGuildBadgeIcon;
            var8 = var2.selected;
            if(!(var8 === var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var8 = false;
case 6:
            var _closure2_slot1 = var3;
            var _closure2_slot2 = var3;
            var7 = var17.id;
            var2 = var17.isForumLikeChannel;
            var30 = var2.bind(var17)();
            var6 = var17.guild_id;
            var9 = _closure1_slot0;
            var2 = _closure1_slot2;
            var4 = 11;
            var4 = var2[var4];
            var5 = var9.bind(var3)(var4);
            var4 = var5.useChannelUnreadBadgeState;
            var4 = var4.bind(var5)(var17, var18);
            var31 = var4.newChannel;
            var32 = var4.optInEnabled;
            var22 = var4.unread;
            var21 = var4.resolvedUnreadSetting;
            var20 = var4.mentionCount;
            var26 = var4.isMentionLowImportance;
            var4 = _closure1_slot12;
            var36 = var4.bind(var3)(var18, var22);
            var4 = 12;
            var4 = var2[var4];
            var5 = var9.bind(var3)(var4);
            var4 = var5.useHasActiveThreads;
            var4 = var4.bind(var5)(var17);
            var23 = var4.hasActiveThreads;
            var4 = 13;
            var5 = var2[var4];
            var14 = var9.bind(var3)(var5);
            var13 = var14.useStateFromStores;
            var5 = _closure1_slot5;
            var10 = new Array(1);
            var10[0] = var5;
            var5 = function() {
                var4 = _closure1_slot5;
                var3 = var4.getNewThreadCount;
                var1 = _closure2_slot0;
                var2 = var1.guild_id;
                var1 = var1.id;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var27 = var13.bind(var14)(var10, var5);
            var5 = var2[var4];
            var13 = var9.bind(var3)(var5);
            var10 = var13.useStateFromStores;
            var5 = _closure1_slot7;
            var9 = new Array(1);
            var9[0] = var5;
            var5 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var1.parent_id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5 = var10.bind(var13)(var9, var5);
            var9 = _closure1_slot1;
            var19 = 14;
            var2 = var2[var19];
            var2 = var9.bind(var3)(var2);
            var2 = var2.bind(var3)(var5);
            var9 = null;
            var5 = var9 != var2;
            var35 = undefined;
            if(!var5) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var35 = var2;
case 8:
            var5 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 15;
            var2 = var10[var2];
            var14 = var5.bind(var3)(var2);
            var13 = var14.useUnreadThreadsCountForParent;
            var5 = var17.guild_id;
            var2 = var17.id;
            var29 = var13.bind(var14)(var5, var2);
            var5 = _closure1_slot1;
            var2 = 16;
            var2 = var10[var2];
            var5 = var5.bind(var3)(var2);
            var2 = {};
            var10 = var22;
            if(!var10) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var10 = !var18;
case 10:
            var2['unread'] = var10;
            var28 = var5.bind(var3)(var17, var2);
            var5 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 17;
            var2 = var10[var2];
            var13 = var5.bind(var3)(var2);
            var2 = var13.useIsChannelSpoilerGated;
            var2 = var2.bind(var13)(var17);
            var13 = 18;
            var13 = var10[var13];
            var14 = var5.bind(var3)(var13);
            var13 = var14.useFontScale;
            var15 = var13.bind(var14)();
            var4 = var10[var4];
            var14 = var5.bind(var3)(var4);
            var13 = var14.useStateFromStores;
            var4 = _closure1_slot6;
            var5 = new Array(1);
            var5[0] = var4;
            var4 = function() {
                var1 = _closure1_slot6;
                var1 = var1.locale;
                return var1;
            };
            var25 = var13.bind(var14)(var5, var4);
            var5 = _closure1_slot1;
            var4 = 19;
            var4 = var10[var4];
            var4 = var5.bind(var3)(var4);
            var24 = var4.bind(var3)();
            var4 = 20;
            var4 = var10[var4];
            var13 = var5.bind(var3)(var4);
            var4 = var17.id;
            var4 = var13.bind(var3)(var4);
            var14 = var4.isSubscriptionGated;
            var13 = var4.needSubscriptionToAccess;
            var4 = 21;
            var4 = var10[var4];
            var4 = var5.bind(var3)(var4);
            var10 = var4.bind(var3)(var17);
            _closure2_slot1 = var10;
            if(!(var9 != var28)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            if(var2) { _fun0001_ip = 12; continue _fun0001 }
case 14:
            var5 = _closure1_slot10;
            var33 = _closure1_slot0;
            var34 = _closure1_slot2;
            var2 = 22;
            var2 = var34[var2];
            var2 = var33.bind(var3)(var2);
            var4 = var2.ChannelRowPreview;
            var2 = {};
            var2['channel'] = var17;
            var2['message'] = var28;
            var28 = 'text-muted';
            var2['color'] = var28;
            var2['muted'] = var18;
            var28 = 23;
            var28 = var34[var28];
            var28 = var33.bind(var3)(var28);
            var28 = var28.ChannelListLayoutTypes;
            var28 = var28.COMPACT;
            var2['layout'] = var28;
            var34 = var5.bind(var3)(var4, var2);
            _fun0001_ip = 15; continue _fun0001;
case 12:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 24;
            var2 = var5[var2];
            var5 = var4.bind(var3)(var2);
            var4 = var5.renderChannelSubtitle;
            var2 = {};
            var2['subtitle'] = var11;
            var2['muted'] = var18;
            var2['channelId'] = var7;
            var2['guildId'] = var6;
            var34 = var4.bind(var5)(var2);
case 15:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 25;
            var2 = var6[var2];
            var7 = var4.bind(var3)(var2);
            var5 = var7.useIsActivitiesInTextEnabled;
            var2 = var17.id;
            var11 = var5.bind(var7)(var2);
            var2 = var10.length;
            var28 = 0;
            var33 = var2 > var28;
            _closure2_slot2 = var33;
            var7 = _closure1_slot3;
            var5 = var7.useMemo;
            var2 = new Array(2);
            var2[0] = var33;
            var2[1] = var10;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot2;
                    var1 = null;
                    if(!var2) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                    var5 = _closure1_slot10;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 26;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var6 = _closure2_slot1;
                    var2['embeddedApps'] = var6;
                    var1 = var5.bind(var4)(var3, var2);
case 16:
                    return var1;
                }
            };
            var10 = var5.bind(var7)(var1, var2);
            var2 = _closure1_slot1;
            var1 = 27;
            var1 = var6[var1];
            var2 = var2.bind(var3)(var1);
            var5 = _closure1_slot11;
            var1 = 28;
            var1 = var6[var1];
            var1 = var4.bind(var3)(var1);
            var4 = var1.PressableHighlight;
            var1 = {};
            var7 = var36.pressable;
            var6 = new Array(2);
            var6[0] = var7;
            var7 = undefined;
            if(!var8) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = var36.rowSelected;
case 18:
            var6[1] = var7;
            var1['style'] = var6;
            var1['underlayColor'] = var24;
            var7 = _closure1_slot8;
            var6 = {};
            var6['color'] = var24;
            var6 = var7.bind(var3)(var6);
            var1['androidRippleConfig'] = var6;
            var24 = _closure1_slot0;
            var7 = _closure1_slot2;
            var6 = 29;
            var6 = var7[var6];
            var33 = var24.bind(var3)(var6);
            var6 = var33.useTextChannelPressEvents;
            var39 = var6.bind(var33)(var17, var37);
            var40 = var1;
            var6 = copyDataProperties(var40, var39);
            var6 = 30;
            var7 = var7[var6];
            var33 = var24.bind(var3)(var7);
            var24 = var33.getChannelAccessibilityProps;
            var7 = {};
            var7['channel'] = var17;
            var7['unread'] = var22;
            var7['mentionCount'] = var20;
            var39 = var24.bind(var33)(var7);
            var40 = var1;
            var7 = copyDataProperties(var40, var39);
            if(!var8) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var33 = _closure1_slot10;
            var24 = _closure1_slot4;
            var7 = {};
            var36 = var36.selectedBorder;
            var7['style'] = var36;
            var36 = 'none';
            var7['pointerEvents'] = var36;
            var8 = var33.bind(var3)(var24, var7);
case 20:
            var7 = new Array(2);
            var7[0] = var8;
            var24 = _closure1_slot1;
            var33 = _closure1_slot2;
            var6 = var33[var6];
            var8 = var24.bind(var3)(var6);
            var6 = {};
            var6['channel'] = var17;
            var6['channelCategoryName'] = var35;
            var6['subtitle'] = var34;
            var6['hasActiveThreads'] = var23;
            var35 = _closure1_slot10;
            var23 = 31;
            var23 = var33[var23];
            var34 = var24.bind(var3)(var23);
            var23 = {};
            var23['unread'] = var22;
            var23['resolvedUnreadSetting'] = var21;
            var36 = var17.isThread;
            var36 = var36.bind(var17)();
            var23['isThread'] = var36;
            var23['muted'] = var18;
            var23 = var35.bind(var3)(var34, var23);
            var6['unreadBadge'] = var23;
            var23 = 32;
            var23 = var33[var23];
            var24 = var24.bind(var3)(var23);
            var23 = {};
            if(!var31) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var31 = var32;
case 22:
            var23['newChannel'] = var31;
            var23['mentionCount'] = var20;
            var23['isMentionLowImportance'] = var26;
            var26 = undefined;
            if(!var30) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var31 = var29 > var28;
            var26 = undefined;
            if(!var31) { _fun0001_ip = 24; continue _fun0001 }
case 26:
            var26 = undefined;
            if(var18) { _fun0001_ip = 24; continue _fun0001 }
case 27:
            var31 = _closure1_slot9;
            var31 = var31.ALL_MESSAGES;
            var26 = undefined;
            if(!(var21 === var31)) { _fun0001_ip = 24; continue _fun0001 }
case 28:
            var26 = var29;
case 24:
            var23['postsWithUnreadsCount'] = var26;
            var26 = undefined;
            if(!var30) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var28 = var29 > var28;
            var26 = undefined;
            if(!var28) { _fun0001_ip = 29; continue _fun0001 }
case 31:
            var26 = undefined;
            if(var18) { _fun0001_ip = 29; continue _fun0001 }
case 32:
            var26 = var27;
case 29:
            var23['newPostCount'] = var26;
            var23['locale'] = var25;
            var23 = var24.bind(var3)(var23);
            var6['mentionBadge'] = var23;
            var6['unread'] = var22;
            var6['resolvedUnreadSetting'] = var21;
            var6['mentionCount'] = var20;
            var6['muted'] = var18;
            var18 = _closure1_slot1;
            var16 = _closure1_slot2;
            var16 = var16[var19];
            var16 = var18.bind(var3)(var16);
            var16 = var16.bind(var3)(var17);
            var6['channelName'] = var16;
            var6['fontScale'] = var15;
            var6['isSubscriptionGated'] = var14;
            var6['needSubscriptionToAccess'] = var13;
            var6['showGuildBadgeIcon'] = var12;
            var9 = null;
            if(!var11) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var9 = var10;
case 33:
            var6['end'] = var9;
            var6 = var8.bind(var3)(var6);
            var7[1] = var6;
            var6 = 'children';
            var1[5] = var7;
            var1 = var5.bind(var3)(var4, var1);
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 33;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/launchpad/native/shared/TextChannel.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();