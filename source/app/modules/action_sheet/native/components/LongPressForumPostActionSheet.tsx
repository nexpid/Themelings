// app/modules/action_sheet/native/components/LongPressForumPostActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var4 = var7.bind(var1)(var4);
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticsObjectTypes;
    var _closure1_slot8 = var7;
    var7 = var4.AnalyticsObjects;
    var _closure1_slot9 = var7;
    var7 = var4.AnalyticsSections;
    var _closure1_slot10 = var7;
    var4 = var4.ChannelSettingsSections;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ChannelFlags;
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot13 = var4;
    var4 = 56;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/action_sheet/native/components/LongPressForumPostActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ForumPostLongPressActionSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var21 = var1.thread;
            var _closure2_slot0 = var21;
            var20 = var1.parentChannel;
            var1 = var1.onClose;
            var _closure2_slot1 = var1;
            var1 = var21.getGuildId;
            var1 = var1.bind(var21)();
            var _closure2_slot2 = var1;
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 44;
            var2 = var9[var3];
            var4 = undefined;
            var10 = var6.bind(var4)(var2);
            var8 = var10.useStateFromStores;
            var2 = _closure1_slot7;
            var7 = new Array(1);
            var7[0] = var2;
            var2 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getGuild;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var25 = var8.bind(var10)(var7, var2);
            var2 = var9[var3];
            var11 = var6.bind(var4)(var2);
            var10 = var11.useStateFromStores;
            var2 = _closure1_slot4;
            var8 = new Array(1);
            var8[0] = var2;
            var7 = function() {
                var3 = _closure1_slot4;
                var2 = var3.hasJoined;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var19 = var10.bind(var11)(var8, var7);
            var7 = var9[var3];
            var10 = var6.bind(var4)(var7);
            var8 = var10.useStateFromStores;
            var7 = new Array(1);
            var7[0] = var2;
            var2 = function() {
                var3 = _closure1_slot4;
                var2 = var3.isMuted;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var18 = var8.bind(var10)(var7, var2);
            var2 = var9[var3];
            var10 = var6.bind(var4)(var2);
            var8 = var10.useStateFromStores;
            var2 = _closure1_slot3;
            var7 = new Array(1);
            var7[0] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var4 = _closure1_slot3;
                    var3 = var4.isLurking;
                    var2 = _closure2_slot2;
                    var1 = var3.bind(var4)(var2);
case 2:
                    return var1;
                }
            };
            var7 = var8.bind(var10)(var7, var2);
            var2 = 45;
            var2 = var9[var2];
            var8 = var6.bind(var4)(var2);
            var2 = var8.useFirstForumPostMessage;
            var2 = var2.bind(var8)(var21);
            var2 = var2.firstMessage;
            var8 = 46;
            var10 = var9[var8];
            var11 = var6.bind(var4)(var10);
            var10 = var11.useIsThreadModerator;
            var17 = var10.bind(var11)(var20);
            var10 = var9[var8];
            var11 = var6.bind(var4)(var10);
            var10 = var11.useCanManageThread;
            var14 = var10.bind(var11)(var21);
            var8 = var9[var8];
            var10 = var6.bind(var4)(var8);
            var8 = var10.useCanUnarchiveThread;
            var8 = var8.bind(var10)(var21);
            var10 = 47;
            var10 = var9[var10];
            var11 = var6.bind(var4)(var10);
            var10 = var11.useExistingPin;
            var12 = var10.bind(var11)(var21);
            var10 = var9[var3];
            var15 = var6.bind(var4)(var10);
            var13 = var15.useStateFromStores;
            var10 = _closure1_slot5;
            var11 = new Array(1);
            var11[0] = var10;
            var10 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure1_slot5;
                    var2 = var3.getCount;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    var3 = var1 != var2;
                    var1 = 0;
                    if(!var3) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                    var1 = var2;
case 4:
                    return var1;
                }
            };
            var11 = var13.bind(var15)(var11, var10);
            var10 = 48;
            var10 = var9[var10];
            var10 = var6.bind(var4)(var10);
            var13 = var10.DeveloperMode;
            var10 = var13.useSetting;
            var13 = var10.bind(var13)();
            var3 = var9[var3];
            var10 = var6.bind(var4)(var3);
            var9 = var10.useStateFromStores;
            var3 = _closure1_slot6;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                var2 = _closure1_slot6;
                var1 = var2.getId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var16 = var9.bind(var10)(var6, var3);
            var3 = null;
            var6 = var3 == var2;
            var15 = undefined;
            if(var6) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = var2.author;
            var15 = var2.id;
case 6:
            var9 = _closure1_slot1;
            var22 = _closure1_slot2;
            var2 = 49;
            var2 = var22[var2];
            var2 = var9.bind(var4)(var2);
            var6 = true;
            var10 = var2.bind(var4)(var21, var6);
            var2 = 50;
            var2 = var22[var2];
            var9 = var9.bind(var4)(var2);
            var2 = 'ForumPostLongPressActionSheet';
            var2 = var9.bind(var4)(var21, var2);
            if(!(var3 == var25)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var22 = _closure1_slot13;
            var24 = _closure1_slot0;
            var26 = _closure1_slot2;
            var23 = 40;
            var3 = var26[var23];
            var3 = var24.bind(var4)(var3);
            var9 = var3.Avatar;
            var3 = {};
            var23 = var26[var23];
            var23 = var24.bind(var4)(var23);
            var23 = var23.AvatarSizes;
            var23 = var23.LARGE;
            var3['size'] = var23;
            var3['channel'] = var21;
            var9 = var22.bind(var4)(var9, var3);
            _fun0001_ip = 10; continue _fun0001;
case 8:
            var23 = _closure1_slot13;
            var22 = _closure1_slot1;
            var26 = _closure1_slot2;
            var24 = 51;
            var3 = var26[var24];
            var22 = var22.bind(var4)(var3);
            var3 = {};
            var3['guild'] = var25;
            var25 = _closure1_slot0;
            var24 = var26[var24];
            var24 = var25.bind(var4)(var24);
            var24 = var24.GuildIconSizes;
            var24 = var24.LARGE;
            var3['size'] = var24;
            var9 = var23.bind(var4)(var22, var3);
case 10:
            var3 = {};
            var3['thread'] = var21;
            var3['parentChannel'] = var20;
            var3['hasJoinedPost'] = var19;
            var3['muted'] = var18;
            var3['isModerator'] = var17;
            var15 = var16 === var15;
            var3['isAuthor'] = var15;
            var3['canManageThread'] = var14;
            var3['developerModeEnabled'] = var13;
            var3['existingPin'] = var12;
            var3['messageCount'] = var11;
            var3['canUnarchiveThread'] = var8;
            var3['isLurking'] = var7;
            var3['favorites'] = var2;
            var2 = function getActionSheetButtons(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = arg1;
                    var16 = var1.thread;
                    var _closure3_slot0 = var16;
                    var28 = var1.hasJoinedPost;
                    var20 = var1.muted;
                    var _closure3_slot1 = var20;
                    var3 = var1.isModerator;
                    var _closure3_slot2 = var3;
                    var11 = var1.isAuthor;
                    var _closure3_slot3 = var11;
                    var13 = var1.canManageThread;
                    var _closure3_slot4 = var13;
                    var2 = var1.developerModeEnabled;
                    var5 = var1.existingPin;
                    var _closure3_slot5 = var5;
                    var10 = var1.parentChannel;
                    var _closure3_slot6 = var10;
                    var7 = var1.messageCount;
                    var14 = var1.canUnarchiveThread;
                    var5 = var1.isLurking;
                    var17 = var1.favorites;
                    var8 = undefined;
                    var _closure3_slot7 = var8;
                    var1 = new Array(0);
                    var9 = var16.threadMetadata;
                    var6 = null;
                    var12 = var6 == var9;
                    var15 = undefined;
                    if(var12) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                    var15 = var9.archived;
case 11:
                    var9 = var16.threadMetadata;
                    var12 = var6 == var9;
                    var25 = undefined;
                    if(var12) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                    var25 = var9.locked;
case 13:
                    var18 = var16.hasFlag;
                    var12 = _closure1_slot12;
                    var12 = var12.PINNED;
                    var19 = var18.bind(var16)(var12);
                    var18 = _closure1_slot1;
                    var21 = _closure1_slot2;
                    var12 = 9;
                    var12 = var21[var12];
                    var12 = var18.bind(var8)(var12);
                    var18 = var12.bind(var8)(var17);
                    if(!(var6 != var18)) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                    var12 = var1.push;
                    var6 = {};
                    var17 = 'favorites';
                    var6['sectionKey'] = var17;
                    var17 = new Array(1);
                    var17[0] = var18;
                    var6['buttons'] = var17;
                    var6 = var12.bind(var1)(var6);
case 15:
                    var17 = var1.push;
                    var12 = {};
                    var6 = 'mark-as-read';
                    var12['sectionKey'] = var6;
                    var21 = {};
                    var22 = _closure1_slot0;
                    var23 = _closure1_slot2;
                    var6 = 10;
                    var18 = var23[var6];
                    var18 = var22.bind(var8)(var18);
                    var26 = var18.intl;
                    var24 = var26.string;
                    var18 = var23[var6];
                    var18 = var22.bind(var8)(var18);
                    var18 = var18.t;
                    var18 = var18.e6RscS;
                    var18 = var24.bind(var26)(var18);
                    var21['label'] = var18;
                    var18 = 11;
                    var18 = var23[var18];
                    var18 = var22.bind(var8)(var18);
                    var18 = var18.EyeIcon;
                    var21['IconComponent'] = var18;
                    var18 = function onPress() {
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 12;
                        var3 = var3[var1];
                        var1 = undefined;
                        var6 = var4.bind(var1)(var3);
                        var5 = var6.ack;
                        var3 = _closure3_slot0;
                        var11 = var3.id;
                        var3 = {};
                        var7 = _closure1_slot9;
                        var7 = var7.MARK_FORUM_POST_AS_READ_BUTTON;
                        var3['object'] = var7;
                        var2 = _closure1_slot8;
                        var2 = var2.ACK_MANUAL;
                        var3['objectType'] = var2;
                        var12 = var6;
                        var10 = var3;
                        var9 = true;
                        var8 = true;
                        var2 = var12[var5](var11, var10, var9, var8, var7);
                        return var1;
                    };
                    var21['onPress'] = var18;
                    var18 = new Array(1);
                    var18[0] = var21;
                    var12['buttons'] = var18;
                    var12 = var17.bind(var1)(var12);
                    var12 = {};
                    var17 = 'channel-actions';
                    var12['sectionKey'] = var17;
                    var17 = new Array(0);
                    var12['buttons'] = var17;
                    if(var5) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                    var21 = var12.buttons;
                    var18 = var21.push;
                    var17 = {};
                    var23 = _closure1_slot0;
                    var24 = _closure1_slot2;
                    var22 = var24[var6];
                    var22 = var23.bind(var8)(var22);
                    var27 = var22.intl;
                    var26 = var27.string;
                    var22 = var24[var6];
                    var22 = var23.bind(var8)(var22);
                    var22 = var22.t;
                    if(var28) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                    var28 = var22.ihLPiO;
                    var28 = var26.bind(var27)(var28);
                    var17['label'] = var28;
                    var28 = 15;
                    var28 = var24[var28];
                    var28 = var23.bind(var8)(var28);
                    var28 = var28.BellIcon;
                    var17['IconComponent'] = var28;
                    var28 = function onPress() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 14;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.joinThread;
                        var2 = _closure3_slot0;
                        var1 = 'Context Menu';
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var17['onPress'] = var28;
                    var28 = var18.bind(var21)(var17);
                    _fun0004_ip = 17; continue _fun0004;
case 19:
                    var22 = var22["2LsZdT"];
                    var22 = var26.bind(var27)(var22);
                    var17['label'] = var22;
                    var22 = 13;
                    var22 = var24[var22];
                    var22 = var23.bind(var8)(var22);
                    var22 = var22.UserMinusIcon;
                    var17['IconComponent'] = var22;
                    var22 = function onPress() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 14;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.leaveThread;
                        var2 = _closure3_slot0;
                        var1 = 'Context Menu';
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var17['onPress'] = var22;
                    var17 = var18.bind(var21)(var17);
case 17:
                    if(var15) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                    if(!var13) { _fun0004_ip = 23; continue _fun0004 }
case 24:
                    var18 = var12.buttons;
                    var17 = var18.push;
                    var15 = {};
                    var22 = _closure1_slot0;
                    var23 = _closure1_slot2;
                    var21 = var23[var6];
                    var21 = var22.bind(var8)(var21);
                    var26 = var21.intl;
                    var24 = var26.string;
                    var21 = var23[var6];
                    var21 = var22.bind(var8)(var21);
                    var21 = var21.t;
                    var21 = var21.BTs4Kb;
                    var21 = var24.bind(var26)(var21);
                    var15['label'] = var21;
                    var21 = 17;
                    var21 = var23[var21];
                    var21 = var22.bind(var8)(var21);
                    var21 = var21.XLargeIcon;
                    var15['IconComponent'] = var21;
                    var21 = function onPress() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 14;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.archiveThread;
                        var3 = _closure3_slot0;
                        var2 = false;
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    var15['onPress'] = var21;
                    var15 = var17.bind(var18)(var15);
                    _fun0004_ip = 23; continue _fun0004;
case 21:
                    if(!var14) { _fun0004_ip = 23; continue _fun0004 }
case 25:
                    var17 = var12.buttons;
                    var15 = var17.push;
                    var14 = {};
                    var21 = _closure1_slot0;
                    var22 = _closure1_slot2;
                    var18 = var22[var6];
                    var18 = var21.bind(var8)(var18);
                    var24 = var18.intl;
                    var23 = var24.string;
                    var18 = var22[var6];
                    var18 = var21.bind(var8)(var18);
                    var18 = var18.t;
                    var18 = var18.cnRubV;
                    var18 = var23.bind(var24)(var18);
                    var14['label'] = var18;
                    var18 = 16;
                    var18 = var22[var18];
                    var18 = var21.bind(var8)(var18);
                    var18 = var18.ClockIcon;
                    var14['IconComponent'] = var18;
                    var18 = function onPress() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 14;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.unarchiveThread;
                        var3 = _closure3_slot0;
                        var2 = false;
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    var14['onPress'] = var18;
                    var14 = var15.bind(var17)(var14);
case 23:
                    if(!var13) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                    var17 = var12.buttons;
                    var15 = var17.push;
                    var14 = {};
                    var21 = _closure1_slot0;
                    var22 = _closure1_slot2;
                    var18 = var22[var6];
                    var18 = var21.bind(var8)(var18);
                    var24 = var18.intl;
                    var23 = var24.string;
                    var18 = var22[var6];
                    var18 = var21.bind(var8)(var18);
                    var18 = var18.t;
                    if(var25) { _fun0004_ip = 28; continue _fun0004 }
case 29:
                    var25 = var18.Ur/0Na;
                    var25 = var23.bind(var24)(var25);
                    var14['label'] = var25;
                    var25 = 19;
                    var25 = var22[var25];
                    var25 = var21.bind(var8)(var25);
                    var25 = var25.LockIcon;
                    var14['IconComponent'] = var25;
                    var25 = function onPress() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 14;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.lockThread;
                        var2 = _closure3_slot0;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var14['onPress'] = var25;
                    var25 = var15.bind(var17)(var14);
                    _fun0004_ip = 26; continue _fun0004;
case 28:
                    var18 = var18["/OKSxp"];
                    var18 = var23.bind(var24)(var18);
                    var14['label'] = var18;
                    var18 = 18;
                    var18 = var22[var18];
                    var18 = var21.bind(var8)(var18);
                    var18 = var18.LockUnlockedIcon;
                    var14['IconComponent'] = var18;
                    var18 = function onPress() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 14;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.unlockThread;
                        var2 = _closure3_slot0;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var14['onPress'] = var18;
                    var14 = var15.bind(var17)(var14);
case 26:
                    var15 = !var3;
                    if(!var15) { _fun0004_ip = 30; continue _fun0004 }
case 31:
                    var14 = var16.isLockedThread;
                    var15 = var14.bind(var16)();
case 30:
                    var14 = var11;
                    if(!var11) { _fun0004_ip = 32; continue _fun0004 }
case 33:
                    var14 = !var15;
case 32:
                    if(!var14) { _fun0004_ip = 34; continue _fun0004 }
case 35:
                    var16 = var12.buttons;
                    var15 = var16.push;
                    var14 = {};
                    var18 = _closure1_slot0;
                    var21 = _closure1_slot2;
                    var17 = var21[var6];
                    var17 = var18.bind(var8)(var17);
                    var23 = var17.intl;
                    var22 = var23.string;
                    var17 = var21[var6];
                    var17 = var18.bind(var8)(var17);
                    var17 = var17.t;
                    var17 = var17.NP1yHG;
                    var17 = var22.bind(var23)(var17);
                    var14['label'] = var17;
                    var17 = 20;
                    var17 = var21[var17];
                    var17 = var18.bind(var8)(var17);
                    var17 = var17.PencilIcon;
                    var14['IconComponent'] = var17;
                    var17 = function onPress() {
                        var3 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var1 = 21;
                        var2 = var9[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.openCreateForumPostModal;
                        var2 = {};
                        var7 = _closure3_slot6;
                        var8 = var7.guild_id;
                        var2['guildId'] = var8;
                        var7 = var7.id;
                        var2['parentChannelId'] = var7;
                        var5 = _closure3_slot0;
                        var7 = var5.id;
                        var2['threadId'] = var7;
                        var8 = _closure1_slot1;
                        var7 = 22;
                        var7 = var9[var7];
                        var10 = var8.bind(var1)(var7);
                        var7 = var10.castChannelIdAsMessageId;
                        var5 = var5.id;
                        var5 = var7.bind(var10)(var5);
                        var2['messageId'] = var5;
                        var5 = true;
                        var2['isEdit'] = var5;
                        var7 = 23;
                        var5 = var9[var7];
                        var5 = var8.bind(var1)(var5);
                        var10 = var5.FORUM_CHANNEL;
                        var5 = new Array(2);
                        var5[0] = var10;
                        var7 = var9[var7];
                        var7 = var8.bind(var1)(var7);
                        var7 = var7.GUILD_CHANNEL;
                        var5[1] = var7;
                        var2['analyticsLocations'] = var5;
                        var5 = {};
                        var7 = _closure1_slot10;
                        var7 = var7.CHANNEL_LIST;
                        var5['section'] = var7;
                        var6 = _closure1_slot9;
                        var6 = var6.CONTEXT_MENU;
                        var5['object'] = var6;
                        var2['analyticsLocationObject'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var14['onPress'] = var17;
                    var14 = var15.bind(var16)(var14);
case 34:
                    if(!var13) { _fun0004_ip = 36; continue _fun0004 }
case 37:
                    var15 = var12.buttons;
                    var14 = var15.push;
                    var13 = {};
                    var17 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    var16 = var18[var6];
                    var16 = var17.bind(var8)(var16);
                    var22 = var16.intl;
                    var21 = var22.string;
                    var16 = var18[var6];
                    var16 = var17.bind(var8)(var16);
                    var16 = var16.t;
                    var16 = var16.SGuVbR;
                    var16 = var21.bind(var22)(var16);
                    var13['label'] = var16;
                    var16 = 24;
                    var16 = var18[var16];
                    var16 = var17.bind(var8)(var16);
                    var16 = var16.SettingsIcon;
                    var13['IconComponent'] = var16;
                    var16 = function onPress() {
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 25;
                        var6 = var4[var2];
                        var1 = undefined;
                        var7 = var3.bind(var1)(var6);
                        var6 = var7.setSection;
                        var5 = _closure1_slot11;
                        var5 = var5.OVERVIEW;
                        var5 = var6.bind(var7)(var5);
                        var2 = var4[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.open;
                        var2 = _closure3_slot0;
                        var2 = var2.id;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var13['onPress'] = var16;
                    var13 = var14.bind(var15)(var13);
                    var10 = var10.availableTags;
                    var13 = var10.length;
                    var10 = 0;
                    if(!(var13 > var10)) { _fun0004_ip = 36; continue _fun0004 }
case 38:
                    var14 = var12.buttons;
                    var13 = var14.push;
                    var10 = {};
                    var16 = _closure1_slot0;
                    var17 = _closure1_slot2;
                    var15 = var17[var6];
                    var15 = var16.bind(var8)(var15);
                    var21 = var15.intl;
                    var18 = var21.string;
                    var15 = var17[var6];
                    var15 = var16.bind(var8)(var15);
                    var15 = var15.t;
                    var15 = var15["436ZFw"];
                    var15 = var18.bind(var21)(var15);
                    var10['label'] = var15;
                    var15 = 26;
                    var15 = var17[var15];
                    var15 = var16.bind(var8)(var15);
                    var15 = var15.TagsIcon;
                    var10['IconComponent'] = var15;
                    var15 = function onPress() {
                        var5 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 27;
                        var4 = var2[var1];
                        var1 = undefined;
                        var6 = var5.bind(var1)(var4);
                        var5 = var6.openLazy;
                        var4 = _closure1_slot0;
                        var3 = 29;
                        var3 = var2[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = 28;
                        var3 = var2[var3];
                        var2 = var2.paths;
                        var4 = var4.bind(var1)(var3, var2);
                        var3 = {};
                        var7 = _closure3_slot0;
                        var3['thread'] = var7;
                        var7 = _closure3_slot6;
                        var3['parentChannel'] = var7;
                        var2 = _closure3_slot4;
                        var3['canManageThread'] = var2;
                        var2 = 'ForumPostTagsActionSheet';
                        var2 = var5.bind(var6)(var4, var2, var3);
                        return var1;
                    };
                    var10['onPress'] = var15;
                    var10 = var13.bind(var14)(var10);
case 36:
                    var14 = var12.buttons;
                    var13 = var14.push;
                    var10 = {};
                    var16 = _closure1_slot0;
                    var17 = _closure1_slot2;
                    var15 = var17[var6];
                    var15 = var16.bind(var8)(var15);
                    var21 = var15.intl;
                    var18 = var21.string;
                    var15 = var17[var6];
                    var15 = var16.bind(var8)(var15);
                    var15 = var15.t;
                    var15 = var15.WqhZss;
                    var15 = var18.bind(var21)(var15);
                    var10['label'] = var15;
                    var15 = 30;
                    var15 = var17[var15];
                    var15 = var16.bind(var8)(var15);
                    var15 = var15.LinkIcon;
                    var10['IconComponent'] = var15;
                    var15 = function onPress() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 31;
                        var2 = var2[var1];
                        var1 = undefined;
                        var6 = var3.bind(var1)(var2);
                        var5 = var6.handleCopyLinkForumPost;
                        var2 = _closure3_slot0;
                        var4 = var2.guild_id;
                        var3 = var2.id;
                        var2 = {};
                        var7 = _closure1_slot10;
                        var7 = var7.CONTEXT_MENU;
                        var2['section'] = var7;
                        var2 = var5.bind(var6)(var4, var3, var2);
                        return var1;
                    };
                    var10['onPress'] = var15;
                    var10 = var13.bind(var14)(var10);
                    var10 = var1.push;
                    var10 = var10.bind(var1)(var12);
                    if(var5) { _fun0004_ip = 39; continue _fun0004 }
case 40:
                    var10 = {};
                    var5 = 'notifications';
                    var10['sectionKey'] = var5;
                    var5 = new Array(0);
                    var10['buttons'] = var5;
                    var13 = var10.buttons;
                    var12 = var13.push;
                    var5 = {};
                    var15 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var14 = var16[var6];
                    var14 = var15.bind(var8)(var14);
                    var18 = var14.intl;
                    var17 = var18.string;
                    var14 = var16[var6];
                    var14 = var15.bind(var8)(var14);
                    var14 = var14.t;
                    if(var20) { _fun0004_ip = 41; continue _fun0004 }
case 42:
                    var20 = var14.nP+Ykd;
                    var20 = var17.bind(var18)(var20);
                    var5['label'] = var20;
                    var20 = 32;
                    var20 = var16[var20];
                    var20 = var15.bind(var8)(var20);
                    var20 = var20.BellSlashIcon;
                    var5['IconComponent'] = var20;
                    var20 = function onPress() {
                        var5 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 27;
                        var4 = var2[var1];
                        var1 = undefined;
                        var6 = var5.bind(var1)(var4);
                        var5 = var6.openLazy;
                        var4 = _closure1_slot0;
                        var3 = 29;
                        var3 = var2[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = 33;
                        var3 = var2[var3];
                        var2 = var2.paths;
                        var4 = var4.bind(var1)(var3, var2);
                        var7 = _closure3_slot0;
                        var8 = var7.id;
                        var2 = global;
                        var2 = var2.HermesInternal;
                        var3 = var2.concat;
                        var2 = 'muteSettings';
                        var3 = var3.bind(var2)(var8);
                        var2 = {};
                        var8 = var7.getGuildId;
                        var8 = var8.bind(var7)();
                        var2['guildId'] = var8;
                        var7 = var7.id;
                        var2['channelId'] = var7;
                        var2 = var5.bind(var6)(var4, var3, var2);
                        return var1;
                    };
                    var5['onPress'] = var20;
                    var20 = var12.bind(var13)(var5);
                    _fun0004_ip = 43; continue _fun0004;
case 41:
                    var14 = var14["0JQfsP"];
                    var14 = var17.bind(var18)(var14);
                    var5['label'] = var14;
                    var14 = 15;
                    var14 = var16[var14];
                    var14 = var15.bind(var8)(var14);
                    var14 = var14.BellIcon;
                    var5['IconComponent'] = var14;
                    var14 = function onPress() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 14;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.setNotificationSettings;
                        var2 = _closure3_slot0;
                        var1 = {};
                        var5 = _closure3_slot1;
                        var5 = !var5;
                        var1['muted'] = var5;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var5['onPress'] = var14;
                    var5 = var12.bind(var13)(var5);
case 43:
                    var13 = var10.buttons;
                    var12 = var13.push;
                    var5 = {};
                    var15 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var14 = var16[var6];
                    var14 = var15.bind(var8)(var14);
                    var18 = var14.intl;
                    var17 = var18.string;
                    var14 = var16[var6];
                    var14 = var15.bind(var8)(var14);
                    var14 = var14.t;
                    var14 = var14.HcoRu0;
                    var14 = var17.bind(var18)(var14);
                    var5['label'] = var14;
                    var14 = 34;
                    var14 = var16[var14];
                    var14 = var15.bind(var8)(var14);
                    var14 = var14.ChannelNotificationIcon;
                    var5['IconComponent'] = var14;
                    var14 = function onPress() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 35;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.showThreadNotificationsBottomSheet;
                        var1 = _closure3_slot0;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var5['onPress'] = var14;
                    var14 = true;
                    var5['disableColor'] = var14;
                    var5 = var12.bind(var13)(var5);
                    var5 = var1.push;
                    var5 = var5.bind(var1)(var10);
case 39:
                    var5 = {};
                    var10 = 'admin-actions';
                    var5['sectionKey'] = var10;
                    var10 = new Array(0);
                    var5['buttons'] = var10;
                    if(!var3) { _fun0004_ip = 44; continue _fun0004 }
case 45:
                    var13 = var5.buttons;
                    var12 = var13.push;
                    var10 = {};
                    var15 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var14 = var16[var6];
                    var14 = var15.bind(var8)(var14);
                    var18 = var14.intl;
                    var17 = var18.string;
                    var14 = var16[var6];
                    var14 = var15.bind(var8)(var14);
                    var14 = var14.t;
                    if(var19) { _fun0004_ip = 46; continue _fun0004 }
case 47:
                    var19 = var14.EnaWhu;
                    var19 = var17.bind(var18)(var19);
                    var10['label'] = var19;
                    var19 = 36;
                    var19 = var16[var19];
                    var19 = var15.bind(var8)(var19);
                    var19 = var19.PinIcon;
                    var10['IconComponent'] = var19;
                    var19 = function onPress() {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var3 = _closure3_slot5;
                            var2 = null;
                            if(!(var2 == var3)) { _fun0005_ip = 48; continue _fun0005 }
case 49:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var2 = 14;
                            var3 = var3[var2];
                            var2 = undefined;
                            var3 = var4.bind(var2)(var3);
                            var2 = var3.pin;
                            var1 = _closure3_slot0;
                            var1 = var2.bind(var3)(var1);
                            _fun0005_ip = 50; continue _fun0005;
case 48:
                            var2 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var1 = 37;
                            var1 = var9[var1];
                            var8 = undefined;
                            var3 = var2.bind(var8)(var1);
                            var2 = var3.show;
                            var1 = {};
                            var7 = _closure1_slot0;
                            var4 = 10;
                            var5 = var9[var4];
                            var5 = var7.bind(var8)(var5);
                            var10 = var5.intl;
                            var6 = var10.string;
                            var5 = var9[var4];
                            var5 = var7.bind(var8)(var5);
                            var5 = var5.t;
                            var5 = var5.IMbjxo;
                            var5 = var6.bind(var10)(var5);
                            var1['title'] = var5;
                            var5 = var9[var4];
                            var5 = var7.bind(var8)(var5);
                            var10 = var5.intl;
                            var6 = var10.string;
                            var5 = var9[var4];
                            var5 = var7.bind(var8)(var5);
                            var5 = var5.t;
                            var5 = var5.mi5+Vl;
                            var5 = var6.bind(var10)(var5);
                            var1['body'] = var5;
                            var5 = var9[var4];
                            var5 = var7.bind(var8)(var5);
                            var10 = var5.intl;
                            var6 = var10.string;
                            var5 = var9[var4];
                            var5 = var7.bind(var8)(var5);
                            var5 = var5.t;
                            var5 = var5.gm1Vej;
                            var5 = var6.bind(var10)(var5);
                            var1['cancelText'] = var5;
                            var5 = var9[var4];
                            var5 = var7.bind(var8)(var5);
                            var6 = var5.intl;
                            var5 = var6.string;
                            var4 = var9[var4];
                            var4 = var7.bind(var8)(var4);
                            var4 = var4.t;
                            var4 = var4.p89ACt;
                            var4 = var5.bind(var6)(var4);
                            var1['confirmText'] = var4;
                            var4 = function onConfirm() {
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var1 = 14;
                                var2 = var2[var1];
                                var1 = undefined;
                                var5 = var3.bind(var1)(var2);
                                var4 = var5.replacePin;
                                var3 = _closure3_slot5;
                                var2 = _closure3_slot0;
                                var2 = var4.bind(var5)(var3, var2);
                                return var1;
                            };
                            var1['onConfirm'] = var4;
                            var1 = var2.bind(var3)(var1);
case 50:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var10['onPress'] = var19;
                    var19 = var12.bind(var13)(var10);
                    _fun0004_ip = 44; continue _fun0004;
case 46:
                    var14 = var14.trD8ao;
                    var14 = var17.bind(var18)(var14);
                    var10['label'] = var14;
                    var14 = 36;
                    var14 = var16[var14];
                    var14 = var15.bind(var8)(var14);
                    var14 = var14.PinIcon;
                    var10['IconComponent'] = var14;
                    var14 = function onPress() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 14;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.unpin;
                        var1 = _closure3_slot0;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var10['onPress'] = var14;
                    var10 = var12.bind(var13)(var10);
case 44:
                    if(var3) { _fun0004_ip = 51; continue _fun0004 }
case 52:
                    if(!var11) { _fun0004_ip = 53; continue _fun0004 }
case 51:
                    if(!var11) { _fun0004_ip = 54; continue _fun0004 }
case 55:
                    var11 = !var3;
case 54:
                    if(!var11) { _fun0004_ip = 56; continue _fun0004 }
case 57:
                    var3 = 0;
                    var11 = var7 > var3;
case 56:
                    _closure3_slot7 = var11;
                    var10 = var5.buttons;
                    var7 = var10.push;
                    var3 = {};
                    var15 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var13 = var12[var6];
                    var13 = var15.bind(var8)(var13);
                    var14 = var13.intl;
                    var13 = var14.string;
                    var12 = var12[var6];
                    var12 = var15.bind(var8)(var12);
                    var12 = var12.t;
                    if(var11) { _fun0004_ip = 58; continue _fun0004 }
case 59:
                    var11 = var12.nEOg1N;
                    var11 = var13.bind(var14)(var11);
                    _fun0004_ip = 60; continue _fun0004;
case 58:
                    var12 = var12.xwMqD7;
                    var11 = var13.bind(var14)(var12);
case 60:
                    var3['label'] = var11;
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var11 = 38;
                    var11 = var13[var11];
                    var11 = var12.bind(var8)(var11);
                    var11 = var11.TrashIcon;
                    var3['IconComponent'] = var11;
                    var11 = function onPress() {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var5 = 10;
                            var3 = var2[var5];
                            var1 = undefined;
                            var3 = var4.bind(var1)(var3);
                            var8 = var3.intl;
                            var7 = var8.string;
                            var3 = var2[var5];
                            var3 = var4.bind(var1)(var3);
                            var3 = var3.t;
                            var3 = var3.nEOg1N;
                            var3 = var7.bind(var8)(var3);
                            var7 = var2[var5];
                            var7 = var4.bind(var1)(var7);
                            var8 = var7.intl;
                            var7 = var8.format;
                            var2 = var2[var5];
                            var2 = var4.bind(var1)(var2);
                            var2 = var2.t;
                            var4 = var2.su3voL;
                            var2 = {};
                            var9 = _closure3_slot0;
                            var10 = var9.name;
                            var11 = global;
                            var9 = var11.HermesInternal;
                            var9 = var9.concat;
                            var13 = '"';
                            var9 = var9.bind(var13)(var10, var13);
                            var2['postName'] = var9;
                            var4 = var7.bind(var8)(var4, var2);
                            var2 = _closure3_slot7;
                            if(var2) { _fun0006_ip = 61; continue _fun0006 }
case 62:
                            var2 = _closure3_slot3;
                            if(!var2) { _fun0006_ip = 63; continue _fun0006 }
case 64:
                            var7 = _closure3_slot2;
                            var2 = !var7;
case 63:
                            var9 = var3;
                            var8 = var4;
                            if(!var2) { _fun0006_ip = 65; continue _fun0006 }
case 66:
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var7 = var2[var5];
                            var7 = var4.bind(var1)(var7);
                            var10 = var7.intl;
                            var7 = var10.format;
                            var2 = var2[var5];
                            var2 = var4.bind(var1)(var2);
                            var2 = var2.t;
                            var4 = var2["6/pY2+"];
                            var2 = {};
                            var12 = _closure3_slot0;
                            var12 = var12.name;
                            var11 = var11.HermesInternal;
                            var11 = var11.concat;
                            var11 = var11.bind(var13)(var12, var13);
                            var2['postName'] = var11;
                            var8 = var7.bind(var10)(var4, var2);
                            var9 = var3;
                            _fun0006_ip = 65; continue _fun0006;
case 61:
                            var10 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var3 = var2[var5];
                            var3 = var10.bind(var1)(var3);
                            var7 = var3.intl;
                            var4 = var7.string;
                            var3 = var2[var5];
                            var3 = var10.bind(var1)(var3);
                            var3 = var3.t;
                            var3 = var3.xwMqD7;
                            var9 = var4.bind(var7)(var3);
                            var4 = var2[var5];
                            var4 = var10.bind(var1)(var4);
                            var7 = var4.intl;
                            var4 = var7.string;
                            var2 = var2[var5];
                            var2 = var10.bind(var1)(var2);
                            var2 = var2.t;
                            var2 = var2.RUHcyk;
                            var8 = var4.bind(var7)(var2);
case 65:
                            var3 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var2 = 37;
                            var2 = var7[var2];
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.show;
                            var2 = {};
                            var2['title'] = var9;
                            var2['body'] = var8;
                            var6 = _closure1_slot0;
                            var8 = var7[var5];
                            var8 = var6.bind(var1)(var8);
                            var10 = var8.intl;
                            var9 = var10.string;
                            var8 = var7[var5];
                            var8 = var6.bind(var1)(var8);
                            var8 = var8.t;
                            var8 = var8.gm1Vej;
                            var8 = var9.bind(var10)(var8);
                            var2['cancelText'] = var8;
                            var8 = var7[var5];
                            var8 = var6.bind(var1)(var8);
                            var9 = var8.intl;
                            var8 = var9.string;
                            var5 = var7[var5];
                            var5 = var6.bind(var1)(var5);
                            var5 = var5.t;
                            var5 = var5.p89ACt;
                            var5 = var8.bind(var9)(var5);
                            var2['confirmText'] = var5;
                            var5 = function onConfirm() {
                                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                                    var2 = _closure3_slot7;
                                    var7 = _closure1_slot1;
                                    var8 = _closure1_slot2;
                                    if(var2) { _fun0007_ip = 67; continue _fun0007 }
case 68:
                                    var2 = 25;
                                    var3 = var8[var2];
                                    var2 = undefined;
                                    var4 = var7.bind(var2)(var3);
                                    var3 = var4.deleteChannel;
                                    var2 = _closure3_slot0;
                                    var2 = var2.id;
                                    var2 = var3.bind(var4)(var2);
                                    _fun0007_ip = 69; continue _fun0007;
case 67:
                                    var2 = 39;
                                    var2 = var8[var2];
                                    var6 = undefined;
                                    var4 = var7.bind(var6)(var2);
                                    var3 = var4.deleteMessage;
                                    var1 = _closure3_slot0;
                                    var2 = var1.id;
                                    var5 = 22;
                                    var5 = var8[var5];
                                    var6 = var7.bind(var6)(var5);
                                    var5 = var6.castChannelIdAsMessageId;
                                    var1 = var1.id;
                                    var1 = var5.bind(var6)(var1);
                                    var1 = var3.bind(var4)(var2, var1);
case 69:
                                    var1 = undefined;
                                    return var1;
                                }
                            };
                            var2['onConfirm'] = var5;
                            var5 = 40;
                            var5 = var7[var5];
                            var5 = var6.bind(var1)(var5);
                            var5 = var5.ButtonColors;
                            var5 = var5.RED;
                            var2['confirmColor'] = var5;
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        }
                    };
                    var3['onPress'] = var11;
                    var3 = var7.bind(var10)(var3);
case 53:
                    var3 = var1.push;
                    var3 = var3.bind(var1)(var5);
                    if(!var2) { _fun0004_ip = 70; continue _fun0004 }
case 71:
                    var3 = var1.push;
                    var2 = {};
                    var5 = 'developer-actions';
                    var2['sectionKey'] = var5;
                    var5 = {};
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var10 = var9[var6];
                    var10 = var7.bind(var8)(var10);
                    var11 = var10.intl;
                    var10 = var11.string;
                    var6 = var9[var6];
                    var6 = var7.bind(var8)(var6);
                    var6 = var6.t;
                    var6 = var6.DQ797g;
                    var6 = var10.bind(var11)(var6);
                    var5['label'] = var6;
                    var6 = 41;
                    var6 = var9[var6];
                    var6 = var7.bind(var8)(var6);
                    var6 = var6.IdIcon;
                    var5['IconComponent'] = var6;
                    var4 = function onPress() {
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 42;
                        var2 = var4[var1];
                        var1 = undefined;
                        var6 = var3.bind(var1)(var2);
                        var5 = var6.copy;
                        var2 = _closure3_slot0;
                        var2 = var2.id;
                        var2 = var5.bind(var6)(var2);
                        var2 = 43;
                        var2 = var4[var2];
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.presentPostIdCopied;
                        var2 = var2.bind(var3)();
                        return var1;
                    };
                    var5['onPress'] = var4;
                    var4 = new Array(1);
                    var4[0] = var5;
                    var2['buttons'] = var4;
                    var2 = var3.bind(var1)(var2);
case 70:
                    return var1;
                }
            };
            var7 = var2.bind(var4)(var3);
            var3 = _closure1_slot13;
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 52;
            var1 = var11[var1];
            var1 = var8.bind(var4)(var1);
            var2 = var1.ActionSheet;
            var1 = {};
            var1['showGradient'] = var6;
            var6 = 53;
            var6 = var11[var6];
            var12 = var8.bind(var4)(var6);
            var6 = var12.isMetaQuest;
            var6 = var6.bind(var12)();
            var1['startExpanded'] = var6;
            var6 = 54;
            var6 = var11[var6];
            var6 = var8.bind(var4)(var6);
            var8 = var6.ActionSheetIconHeader;
            var6 = {};
            var6['title'] = var10;
            var6['icon'] = var9;
            var6 = var3.bind(var4)(var8, var6);
            var1['header'] = var6;
            var6 = var7.map;
            var5 = function(arg1) {
                var1 = arg1;
                var5 = var1.sectionKey;
                var8 = var1.buttons;
                var4 = _closure1_slot13;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 55;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var1 = var1.ActionSheetRow;
                var2 = var1.Group;
                var1 = {};
                var6 = true;
                var1['hasIcons'] = var6;
                var7 = var8.map;
                var6 = function(arg1, arg2) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var2 = arg1;
                        var6 = var2.label;
                        var11 = var2.IconComponent;
                        var3 = var2.onPress;
                        var _closure4_slot0 = var3;
                        var10 = var2.disableColor;
                        var13 = var2.isDestructive;
                        var8 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var12 = 10;
                        var3 = var2[var12];
                        var5 = undefined;
                        var3 = var8.bind(var5)(var3);
                        var4 = var3.intl;
                        var3 = var4.string;
                        var2 = var2[var12];
                        var2 = var8.bind(var5)(var2);
                        var2 = var2.t;
                        var2 = var2.nEOg1N;
                        var2 = var3.bind(var4)(var2);
                        var8 = var6 === var2;
                        if(var8) { _fun0008_ip = 14; continue _fun0008 }
case 72:
                        var9 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var3 = var2[var12];
                        var3 = var9.bind(var5)(var3);
                        var4 = var3.intl;
                        var3 = var4.string;
                        var2 = var2[var12];
                        var2 = var9.bind(var5)(var2);
                        var2 = var2.t;
                        var2 = var2.xwMqD7;
                        var2 = var3.bind(var4)(var2);
                        var8 = var6 === var2;
case 14:
                        var4 = _closure1_slot13;
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var12 = 55;
                        var2 = var2[var12];
                        var2 = var3.bind(var5)(var2);
                        var3 = var2.ActionSheetRow;
                        var2 = {};
                        if(var8) { _fun0008_ip = 73; continue _fun0008 }
case 74:
                        var9 = true;
                        var8 = undefined;
                        if(!(var9 === var13)) { _fun0008_ip = 75; continue _fun0008 }
case 73:
                        var8 = 'danger';
case 75:
                        var2['variant'] = var8;
                        var9 = _closure1_slot13;
                        var8 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var7 = var7[var12];
                        var7 = var8.bind(var5)(var7);
                        var7 = var7.ActionSheetRow;
                        var8 = var7.Icon;
                        var7 = {};
                        var7['IconComponent'] = var11;
                        var7['disableColor'] = var10;
                        var7 = var9.bind(var5)(var8, var7);
                        var2['icon'] = var7;
                        var2['label'] = var6;
                        var1 = function onPress() {
                            var2 = _closure4_slot0;
                            var1 = undefined;
                            var2 = var2.bind(var1)();
                            var2 = _closure2_slot1;
                            var2 = var2.bind(var1)();
                            return var1;
                        };
                        var2['onPress'] = var1;
                        var1 = arg2;
                        var1 = var4.bind(var5)(var3, var2, var1);
                        return var1;
                    }
                };
                var6 = var7.bind(var8)(var6);
                var1['children'] = var6;
                var1 = var4.bind(var3)(var2, var1, var5);
                return var1;
            };
            var5 = var6.bind(var7)(var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();