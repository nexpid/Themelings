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
    var4 = var4.SUBTITLE_OPACITY_NORMAL;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UnreadSetting;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.getThemedRippleConfig;
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot11 = var8;
    var4 = var4.jsxs;
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var1 = {};
            var2 = {'flex': 1, 'borderRadius': null, 'marginBottom': 1};
            var3 = 1;
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var8 = 10;
            var9 = var6[var8];
            var8 = undefined;
            var9 = var7.bind(var8)(var9);
            var9 = var9.bind(var8)();
            var9 = var9.container;
            var9 = var9.borderRadius;
            var2['borderRadius'] = var9;
            var1['pressable'] = var2;
            var2 = {'position': 'absolute', 'top': 0, 'bottom': 0, 'left': 0, 'right': 0, 'borderWidth': 1};
            var9 = 11;
            var10 = var6[var9];
            var10 = var7.bind(var8)(var10);
            var10 = var10.colors;
            var10 = var10.BORDER_FAINT;
            var2['borderColor'] = var10;
            var10 = var6[var9];
            var10 = var7.bind(var8)(var10);
            var10 = var10.radii;
            var10 = var10.md;
            var2['borderRadius'] = var10;
            var1['selectedBorder'] = var2;
            var2 = {};
            var10 = var6[var9];
            var10 = var7.bind(var8)(var10);
            var10 = var10.radii;
            var10 = var10.md;
            var2['borderRadius'] = var10;
            var10 = var6[var9];
            var10 = var7.bind(var8)(var10);
            var10 = var10.colors;
            var10 = var10.BG_MOD_FAINT;
            var2['backgroundColor'] = var10;
            var1['rowSelected'] = var2;
            var2 = {};
            var6 = var6[var9];
            var6 = var7.bind(var8)(var6);
            var6 = var6.radii;
            var6 = var6.md;
            var2['borderRadius'] = var6;
            var1['rowSelectedThemed'] = var2;
            var2 = {'flexDirection': 'row', 'alignItems': 'center'};
            var1['subtitleWrapper'] = var2;
            var2 = {'flexGrow': 1, 'flexShrink': 1};
            var1['subtitle'] = var2;
            var2 = {'marginRight': 4, 'marginTop': 1};
            var1['subtitleIcon'] = var2;
            var2 = {};
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var6 = var6[var9];
            var6 = var7.bind(var8)(var6);
            var7 = var6.colors;
            if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = arg2;
            if(var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = var7.TEXT_MUTED;
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var6 = var7.TEXT_PRIMARY;
case 6:
            _fun0001_ip = 7; continue _fun0001;
case 2:
            var6 = var7.INTERACTIVE_MUTED;
case 7:
            var2['tintColor'] = var6;
            if(var5) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = _closure1_slot8;
case 8:
            var2['opacity'] = var3;
            var1['icon'] = var2;
            return var1;
        }
    };
    var4 = var8.bind(var9)(var4);
    var _closure1_slot13 = var4;
    var4 = var7.memo;
    var2 = function TextChannel(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var17 = var2.channel;
            var _closure2_slot0 = var17;
            var27 = var2.subtitle;
            var18 = var2.muted;
            var3 = undefined;
            if(!(var18 === var3)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var18 = false;
case 10:
            var36 = var2.navigationReplace;
            if(!(var36 === var3)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var36 = false;
case 12:
            var12 = var2.showGuildBadgeIcon;
            var8 = var2.selected;
            if(!(var8 === var3)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var8 = false;
case 14:
            var _closure2_slot1 = var3;
            var _closure2_slot2 = var3;
            var11 = var17.id;
            var2 = var17.isForumLikeChannel;
            var29 = var2.bind(var17)();
            var7 = var17.guild_id;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 12;
            var2 = var6[var2];
            var4 = var5.bind(var3)(var2);
            var2 = var4.useChannelUnreadBadgeState;
            var2 = var2.bind(var4)(var17, var18);
            var30 = var2.newChannel;
            var31 = var2.optInEnabled;
            var21 = var2.unread;
            var20 = var2.resolvedUnreadSetting;
            var19 = var2.mentionCount;
            var25 = var2.isMentionLowImportance;
            var2 = _closure1_slot13;
            var35 = var2.bind(var3)(var18, var21);
            var2 = 13;
            var2 = var6[var2];
            var4 = var5.bind(var3)(var2);
            var2 = var4.useHasActiveThreads;
            var2 = var2.bind(var4)(var17);
            var22 = var2.hasActiveThreads;
            var2 = 14;
            var4 = var6[var2];
            var13 = var5.bind(var3)(var4);
            var10 = var13.useStateFromStores;
            var4 = _closure1_slot5;
            var9 = new Array(1);
            var9[0] = var4;
            var4 = function() {
                var4 = _closure1_slot5;
                var3 = var4.getNewThreadCount;
                var1 = _closure2_slot0;
                var2 = var1.guild_id;
                var1 = var1.id;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var26 = var10.bind(var13)(var9, var4);
            var4 = var6[var2];
            var13 = var5.bind(var3)(var4);
            var10 = var13.useStateFromStores;
            var4 = _closure1_slot7;
            var9 = new Array(1);
            var9[0] = var4;
            var4 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure1_slot7;
                    var2 = var3.getChannel;
                    var1 = _closure2_slot0;
                    var1 = var1.parent_id;
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0003_ip = 12; continue _fun0003 }
case 16:
                    var1 = var2.name;
case 12:
                    return var1;
                }
            };
            var34 = var10.bind(var13)(var9, var4);
            var4 = 15;
            var4 = var6[var4];
            var10 = var5.bind(var3)(var4);
            var9 = var10.useUnreadThreadsCountForParent;
            var5 = var17.guild_id;
            var4 = var17.id;
            var28 = var9.bind(var10)(var5, var4);
            var5 = _closure1_slot1;
            var4 = 16;
            var4 = var6[var4];
            var5 = var5.bind(var3)(var4);
            var4 = var21;
            if(!var4) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var4 = !var18;
case 17:
            var6 = var5.bind(var3)(var17, var4);
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var9 = 17;
            var9 = var5[var9];
            var10 = var4.bind(var3)(var9);
            var9 = var10.useFontScale;
            var15 = var9.bind(var10)();
            var2 = var5[var2];
            var10 = var4.bind(var3)(var2);
            var9 = var10.useStateFromStores;
            var2 = _closure1_slot6;
            var4 = new Array(1);
            var4[0] = var2;
            var2 = function() {
                var1 = _closure1_slot6;
                var1 = var1.locale;
                return var1;
            };
            var24 = var9.bind(var10)(var4, var2);
            var4 = _closure1_slot1;
            var2 = 18;
            var2 = var5[var2];
            var2 = var4.bind(var3)(var2);
            var23 = var2.bind(var3)();
            var2 = 19;
            var2 = var5[var2];
            var9 = var4.bind(var3)(var2);
            var2 = var17.id;
            var2 = var9.bind(var3)(var2);
            var14 = var2.isSubscriptionGated;
            var13 = var2.needSubscriptionToAccess;
            var2 = 20;
            var2 = var5[var2];
            var2 = var4.bind(var3)(var2);
            var10 = var2.bind(var3)(var17);
            _closure2_slot1 = var10;
            var9 = null;
            if(!(var9 == var6)) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 23;
            var2 = var5[var2];
            var5 = var4.bind(var3)(var2);
            var4 = var5.renderChannelSubtitle;
            var2 = {};
            var2['subtitle'] = var27;
            var2['muted'] = var18;
            var2['channelId'] = var11;
            var2['guildId'] = var7;
            var33 = var4.bind(var5)(var2);
            _fun0002_ip = 21; continue _fun0002;
case 19:
            var5 = _closure1_slot11;
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 21;
            var2 = var7[var2];
            var2 = var4.bind(var3)(var2);
            var4 = var2.GuildChannelRowPreview;
            var2 = {};
            var7 = var17.guild_id;
            var2['guildId'] = var7;
            var2['channel'] = var17;
            var2['message'] = var6;
            var6 = 'text-muted';
            if(!var18) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var6 = 'interactive-muted';
case 22:
            var2['color'] = var6;
            var2['muted'] = var18;
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 22;
            var6 = var11[var6];
            var6 = var7.bind(var3)(var6);
            var6 = var6.ChannelListLayoutTypes;
            var6 = var6.COMPACT;
            var2['layout'] = var6;
            var33 = var5.bind(var3)(var4, var2);
case 21:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 24;
            var2 = var6[var2];
            var7 = var4.bind(var3)(var2);
            var5 = var7.useIsActivitiesInTextEnabled;
            var2 = var17.id;
            var11 = var5.bind(var7)(var2);
            var2 = var10.length;
            var27 = 0;
            var32 = var2 > var27;
            _closure2_slot2 = var32;
            var7 = _closure1_slot3;
            var5 = var7.useMemo;
            var2 = new Array(2);
            var2[0] = var32;
            var2[1] = var10;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot2;
                    var1 = null;
                    if(!var2) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                    var5 = _closure1_slot11;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 25;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var6 = _closure2_slot1;
                    var2['embeddedApps'] = var6;
                    var1 = var5.bind(var4)(var3, var2);
case 24:
                    return var1;
                }
            };
            var10 = var5.bind(var7)(var1, var2);
            var2 = _closure1_slot1;
            var1 = 26;
            var1 = var6[var1];
            var2 = var2.bind(var3)(var1);
            var5 = _closure1_slot12;
            var1 = 27;
            var1 = var6[var1];
            var1 = var4.bind(var3)(var1);
            var4 = var1.PressableHighlight;
            var1 = {};
            var7 = var35.pressable;
            var6 = new Array(2);
            var6[0] = var7;
            var7 = undefined;
            if(!var8) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var7 = var35.rowSelected;
case 26:
            var6[1] = var7;
            var1['style'] = var6;
            var1['underlayColor'] = var23;
            var7 = _closure1_slot10;
            var6 = {};
            var6['color'] = var23;
            var6 = var7.bind(var3)(var6);
            var1['androidRippleConfig'] = var6;
            var23 = _closure1_slot0;
            var7 = _closure1_slot2;
            var6 = 28;
            var6 = var7[var6];
            var32 = var23.bind(var3)(var6);
            var6 = var32.useTextChannelPressEvents;
            var37 = var6.bind(var32)(var17, var36);
            var38 = var1;
            var6 = copyDataProperties(var38, var37);
            var6 = 29;
            var7 = var7[var6];
            var32 = var23.bind(var3)(var7);
            var23 = var32.getChannelAccessibilityProps;
            var7 = {};
            var7['channel'] = var17;
            var7['unread'] = var21;
            var7['mentionCount'] = var19;
            var37 = var23.bind(var32)(var7);
            var38 = var1;
            var7 = copyDataProperties(var38, var37);
            if(!var8) { _fun0002_ip = 28; continue _fun0002 }
case 29:
            var32 = _closure1_slot11;
            var23 = _closure1_slot4;
            var7 = {};
            var35 = var35.selectedBorder;
            var7['style'] = var35;
            var35 = 'none';
            var7['pointerEvents'] = var35;
            var8 = var32.bind(var3)(var23, var7);
case 28:
            var7 = new Array(2);
            var7[0] = var8;
            var23 = _closure1_slot1;
            var32 = _closure1_slot2;
            var6 = var32[var6];
            var8 = var23.bind(var3)(var6);
            var6 = {};
            var6['channel'] = var17;
            var6['channelCategoryName'] = var34;
            var6['subtitle'] = var33;
            var6['hasActiveThreads'] = var22;
            var34 = _closure1_slot11;
            var22 = 30;
            var22 = var32[var22];
            var33 = var23.bind(var3)(var22);
            var22 = {};
            var22['unread'] = var21;
            var22['resolvedUnreadSetting'] = var20;
            var35 = var17.isThread;
            var35 = var35.bind(var17)();
            var22['isThread'] = var35;
            var22['muted'] = var18;
            var22 = var34.bind(var3)(var33, var22);
            var6['unreadBadge'] = var22;
            var22 = 31;
            var22 = var32[var22];
            var23 = var23.bind(var3)(var22);
            var22 = {};
            if(!var30) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var30 = var31;
case 30:
            var22['newChannel'] = var30;
            var22['mentionCount'] = var19;
            var22['isMentionLowImportance'] = var25;
            var25 = undefined;
            if(!var29) { _fun0002_ip = 32; continue _fun0002 }
case 33:
            var30 = var28 > var27;
            var25 = undefined;
            if(!var30) { _fun0002_ip = 32; continue _fun0002 }
case 34:
            var25 = undefined;
            if(var18) { _fun0002_ip = 32; continue _fun0002 }
case 35:
            var30 = _closure1_slot9;
            var30 = var30.ALL_MESSAGES;
            var25 = undefined;
            if(!(var20 === var30)) { _fun0002_ip = 32; continue _fun0002 }
case 36:
            var25 = var28;
case 32:
            var22['postsWithUnreadsCount'] = var25;
            var25 = undefined;
            if(!var29) { _fun0002_ip = 37; continue _fun0002 }
case 38:
            var27 = var28 > var27;
            var25 = undefined;
            if(!var27) { _fun0002_ip = 37; continue _fun0002 }
case 39:
            var25 = undefined;
            if(var18) { _fun0002_ip = 37; continue _fun0002 }
case 40:
            var25 = var26;
case 37:
            var22['newPostCount'] = var25;
            var22['locale'] = var24;
            var22 = var23.bind(var3)(var22);
            var6['mentionBadge'] = var22;
            var6['unread'] = var21;
            var6['resolvedUnreadSetting'] = var20;
            var6['mentionCount'] = var19;
            var6['muted'] = var18;
            var18 = _closure1_slot1;
            var19 = _closure1_slot2;
            var16 = 32;
            var16 = var19[var16];
            var16 = var18.bind(var3)(var16);
            var16 = var16.bind(var3)(var17);
            var6['channelName'] = var16;
            var6['fontScale'] = var15;
            var6['isSubscriptionGated'] = var14;
            var6['needSubscriptionToAccess'] = var13;
            var6['showGuildBadgeIcon'] = var12;
            var9 = null;
            if(!var11) { _fun0002_ip = 41; continue _fun0002 }
case 42:
            var9 = var10;
case 41:
            var6['end'] = var9;
            var6 = var8.bind(var3)(var6);
            var7[1] = var6;
            var6 = 'children';
            var1[var6] = var7;
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