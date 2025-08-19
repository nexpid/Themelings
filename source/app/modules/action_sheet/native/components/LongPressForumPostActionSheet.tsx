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
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticsObjectTypes;
    var _closure1_slot7 = var7;
    var7 = var4.AnalyticsObjects;
    var _closure1_slot8 = var7;
    var7 = var4.AnalyticsSections;
    var _closure1_slot9 = var7;
    var4 = var4.ChannelSettingsSections;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ChannelFlags;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot12 = var4;
    var4 = 53;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/action_sheet/native/components/LongPressForumPostActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ForumPostLongPressActionSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var19 = var1.thread;
            var _closure2_slot0 = var19;
            var18 = var1.parentChannel;
            var1 = var1.onClose;
            var _closure2_slot1 = var1;
            var1 = var19.getGuildId;
            var1 = var1.bind(var19)();
            var _closure2_slot2 = var1;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 42;
            var2 = var10[var3];
            var4 = undefined;
            var8 = var9.bind(var4)(var2);
            var7 = var8.useStateFromStores;
            var2 = _closure1_slot6;
            var6 = new Array(1);
            var6[0] = var2;
            var2 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getGuild;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var23 = var7.bind(var8)(var6, var2);
            var2 = var10[var3];
            var11 = var9.bind(var4)(var2);
            var8 = var11.useStateFromStores;
            var2 = _closure1_slot3;
            var7 = new Array(1);
            var7[0] = var2;
            var6 = function() {
                var3 = _closure1_slot3;
                var2 = var3.hasJoined;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var17 = var8.bind(var11)(var7, var6);
            var6 = var10[var3];
            var8 = var9.bind(var4)(var6);
            var7 = var8.useStateFromStores;
            var6 = new Array(1);
            var6[0] = var2;
            var2 = function() {
                var3 = _closure1_slot3;
                var2 = var3.isMuted;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var16 = var7.bind(var8)(var6, var2);
            var2 = 43;
            var2 = var10[var2];
            var6 = var9.bind(var4)(var2);
            var2 = var6.useFirstForumPostMessage;
            var2 = var2.bind(var6)(var19);
            var6 = var2.firstMessage;
            var2 = 44;
            var7 = var10[var2];
            var8 = var9.bind(var4)(var7);
            var7 = var8.useIsThreadModerator;
            var15 = var7.bind(var8)(var18);
            var7 = var10[var2];
            var8 = var9.bind(var4)(var7);
            var7 = var8.useCanManageThread;
            var12 = var7.bind(var8)(var19);
            var2 = var10[var2];
            var7 = var9.bind(var4)(var2);
            var2 = var7.useCanUnarchiveThread;
            var2 = var2.bind(var7)(var19);
            var7 = 45;
            var7 = var10[var7];
            var8 = var9.bind(var4)(var7);
            var7 = var8.useExistingPin;
            var8 = var7.bind(var8)(var19);
            var7 = var10[var3];
            var14 = var9.bind(var4)(var7);
            var13 = var14.useStateFromStores;
            var7 = _closure1_slot4;
            var11 = new Array(1);
            var11[0] = var7;
            var7 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure1_slot4;
                    var2 = var3.getCount;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    var3 = var1 != var2;
                    var1 = 0;
                    if(!var3) { _fun0002_ip = 44; continue _fun0002 }
 41:
                    var1 = var2;
 44:
                    return var1;
                }
            };
            var7 = var13.bind(var14)(var11, var7);
            var11 = 46;
            var11 = var10[var11];
            var11 = var9.bind(var4)(var11);
            var13 = var11.DeveloperMode;
            var11 = var13.useSetting;
            var11 = var11.bind(var13)();
            var3 = var10[var3];
            var13 = var9.bind(var4)(var3);
            var10 = var13.useStateFromStores;
            var3 = _closure1_slot5;
            var9 = new Array(1);
            var9[0] = var3;
            var3 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var14 = var10.bind(var13)(var9, var3);
            var3 = null;
            var9 = var3 == var6;
            var13 = undefined;
            if(var9) { _fun0001_ip = 417; continue _fun0001 }
 406:
            var6 = var6.author;
            var13 = var6.id;
 417:
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var6 = 47;
            var6 = var10[var6];
            var9 = var9.bind(var4)(var6);
            var6 = true;
            var10 = var9.bind(var4)(var19, var6);
            if(!(var3 == var23)) { _fun0001_ip = 516; continue _fun0001 }
 449:
            var20 = _closure1_slot12;
            var9 = _closure1_slot1;
            var24 = _closure1_slot2;
            var21 = 49;
            var3 = var24[var21];
            var9 = var9.bind(var4)(var3);
            var3 = {};
            var22 = _closure1_slot0;
            var21 = var24[var21];
            var21 = var22.bind(var4)(var21);
            var21 = var21.AvatarSizes;
            var21 = var21.LARGE;
            var3['size'] = var21;
            var3['channel'] = var19;
            var9 = var20.bind(var4)(var9, var3);
            _fun0001_ip = 581; continue _fun0001;
 516:
            var21 = _closure1_slot12;
            var20 = _closure1_slot1;
            var24 = _closure1_slot2;
            var22 = 48;
            var3 = var24[var22];
            var20 = var20.bind(var4)(var3);
            var3 = {};
            var3['guild'] = var23;
            var23 = _closure1_slot0;
            var22 = var24[var22];
            var22 = var23.bind(var4)(var22);
            var22 = var22.GuildIconSizes;
            var22 = var22.LARGE;
            var3['size'] = var22;
            var9 = var21.bind(var4)(var20, var3);
 581:
            var3 = {};
            var3['thread'] = var19;
            var3['parentChannel'] = var18;
            var3['hasJoinedPost'] = var17;
            var3['muted'] = var16;
            var3['isModerator'] = var15;
            var13 = var14 === var13;
            var3['isAuthor'] = var13;
            var3['canManageThread'] = var12;
            var3['developerModeEnabled'] = var11;
            var3['existingPin'] = var8;
            var3['messageCount'] = var7;
            var3['canUnarchiveThread'] = var2;
            var2 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = arg1;
                    var15 = var1.thread;
                    var _closure3_slot0 = var15;
                    var27 = var1.hasJoinedPost;
                    var20 = var1.muted;
                    var _closure3_slot1 = var20;
                    var3 = var1.isModerator;
                    var _closure3_slot2 = var3;
                    var11 = var1.isAuthor;
                    var _closure3_slot3 = var11;
                    var12 = var1.canManageThread;
                    var _closure3_slot4 = var12;
                    var2 = var1.developerModeEnabled;
                    var5 = var1.existingPin;
                    var _closure3_slot5 = var5;
                    var5 = var1.parentChannel;
                    var _closure3_slot6 = var5;
                    var7 = var1.messageCount;
                    var13 = var1.canUnarchiveThread;
                    var8 = undefined;
                    var _closure3_slot7 = var8;
                    var1 = new Array(0);
                    var6 = var15.threadMetadata;
                    var9 = null;
                    var10 = var9 == var6;
                    var14 = undefined;
                    if(var10) { _fun0003_ip = 132; continue _fun0003 }
 126:
                    var14 = var6.archived;
 132:
                    var6 = var15.threadMetadata;
                    var9 = var9 == var6;
                    var24 = undefined;
                    if(var9) { _fun0003_ip = 153; continue _fun0003 }
 147:
                    var24 = var6.locked;
 153:
                    var10 = var15.hasFlag;
                    var6 = _closure1_slot11;
                    var6 = var6.PINNED;
                    var19 = var10.bind(var15)(var6);
                    var16 = var1.push;
                    var10 = {};
                    var6 = 'mark-as-read';
                    var10['sectionKey'] = var6;
                    var18 = {};
                    var21 = _closure1_slot0;
                    var22 = _closure1_slot2;
                    var6 = 8;
                    var17 = var22[var6];
                    var17 = var21.bind(var8)(var17);
                    var25 = var17.intl;
                    var23 = var25.string;
                    var17 = var22[var6];
                    var17 = var21.bind(var8)(var17);
                    var17 = var17.t;
                    var17 = var17.e6RscX;
                    var17 = var23.bind(var25)(var17);
                    var18['label'] = var17;
                    var17 = 9;
                    var17 = var22[var17];
                    var17 = var21.bind(var8)(var17);
                    var17 = var17.EyeIcon;
                    var18['IconComponent'] = var17;
                    var17 = function onPress() {
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 10;
                        var3 = var3[var1];
                        var1 = undefined;
                        var6 = var4.bind(var1)(var3);
                        var5 = var6.ack;
                        var3 = _closure3_slot0;
                        var11 = var3.id;
                        var3 = {};
                        var7 = _closure1_slot8;
                        var7 = var7.MARK_FORUM_POST_AS_READ_BUTTON;
                        var3['object'] = var7;
                        var2 = _closure1_slot7;
                        var2 = var2.ACK_MANUAL;
                        var3['objectType'] = var2;
                        var12 = var6;
                        var10 = var3;
                        var9 = true;
                        var8 = true;
                        var2 = var12[var5](var11, var10, var9, var8, var7);
                        return var1;
                    };
                    var18['onPress'] = var17;
                    var17 = new Array(1);
                    var17[0] = var18;
                    var10['buttons'] = var17;
                    var10 = var16.bind(var1)(var10);
                    var10 = {};
                    var16 = 'channel-actions';
                    var10['sectionKey'] = var16;
                    var16 = new Array(0);
                    var10['buttons'] = var16;
                    var18 = var10.buttons;
                    var17 = var18.push;
                    var16 = {};
                    var22 = _closure1_slot0;
                    var23 = _closure1_slot2;
                    var21 = var23[var6];
                    var21 = var22.bind(var8)(var21);
                    var26 = var21.intl;
                    var25 = var26.string;
                    var21 = var23[var6];
                    var21 = var22.bind(var8)(var21);
                    var21 = var21.t;
                    if(var27) { _fun0003_ip = 441; continue _fun0003 }
 386:
                    var27 = var21.ihLPiI;
                    var27 = var25.bind(var26)(var27);
                    var16['label'] = var27;
                    var27 = 13;
                    var27 = var23[var27];
                    var27 = var22.bind(var8)(var27);
                    var27 = var27.BellIcon;
                    var16['IconComponent'] = var27;
                    var27 = function onPress() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 12;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.joinThread;
                        var2 = _closure3_slot0;
                        var1 = 'Context Menu';
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var16['onPress'] = var27;
                    var27 = var17.bind(var18)(var16);
                    _fun0003_ip = 494; continue _fun0003;
 441:
                    var21 = var21.2LsZdX;
                    var21 = var25.bind(var26)(var21);
                    var16['label'] = var21;
                    var21 = 11;
                    var21 = var23[var21];
                    var21 = var22.bind(var8)(var21);
                    var21 = var21.UserMinusIcon;
                    var16['IconComponent'] = var21;
                    var21 = function onPress() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 12;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.leaveThread;
                        var2 = _closure3_slot0;
                        var1 = 'Context Menu';
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var16['onPress'] = var21;
                    var16 = var17.bind(var18)(var16);
 494:
                    if(var14) { _fun0003_ip = 612; continue _fun0003 }
 497:
                    if(!var12) { _fun0003_ip = 722; continue _fun0003 }
 503:
                    var17 = var10.buttons;
                    var16 = var17.push;
                    var14 = {};
                    var21 = _closure1_slot0;
                    var22 = _closure1_slot2;
                    var18 = var22[var6];
                    var18 = var21.bind(var8)(var18);
                    var25 = var18.intl;
                    var23 = var25.string;
                    var18 = var22[var6];
                    var18 = var21.bind(var8)(var18);
                    var18 = var18.t;
                    var18 = var18.BTs4KS;
                    var18 = var23.bind(var25)(var18);
                    var14['label'] = var18;
                    var18 = 15;
                    var18 = var22[var18];
                    var18 = var21.bind(var8)(var18);
                    var18 = var18.XLargeIcon;
                    var14['IconComponent'] = var18;
                    var18 = function onPress() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 12;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.archiveThread;
                        var3 = _closure3_slot0;
                        var2 = false;
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    var14['onPress'] = var18;
                    var14 = var16.bind(var17)(var14);
                    _fun0003_ip = 722; continue _fun0003;
 612:
                    if(!var13) { _fun0003_ip = 722; continue _fun0003 }
 615:
                    var16 = var10.buttons;
                    var14 = var16.push;
                    var13 = {};
                    var18 = _closure1_slot0;
                    var21 = _closure1_slot2;
                    var17 = var21[var6];
                    var17 = var18.bind(var8)(var17);
                    var23 = var17.intl;
                    var22 = var23.string;
                    var17 = var21[var6];
                    var17 = var18.bind(var8)(var17);
                    var17 = var17.t;
                    var17 = var17.cnRubW;
                    var17 = var22.bind(var23)(var17);
                    var13['label'] = var17;
                    var17 = 14;
                    var17 = var21[var17];
                    var17 = var18.bind(var8)(var17);
                    var17 = var17.ClockIcon;
                    var13['IconComponent'] = var17;
                    var17 = function onPress() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 12;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.unarchiveThread;
                        var3 = _closure3_slot0;
                        var2 = false;
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    var13['onPress'] = var17;
                    var13 = var14.bind(var16)(var13);
 722:
                    if(!var12) { _fun0003_ip = 893; continue _fun0003 }
 728:
                    var16 = var10.buttons;
                    var14 = var16.push;
                    var13 = {};
                    var18 = _closure1_slot0;
                    var21 = _closure1_slot2;
                    var17 = var21[var6];
                    var17 = var18.bind(var8)(var17);
                    var23 = var17.intl;
                    var22 = var23.string;
                    var17 = var21[var6];
                    var17 = var18.bind(var8)(var17);
                    var17 = var17.t;
                    if(var24) { _fun0003_ip = 840; continue _fun0003 }
 785:
                    var24 = var17.Ur/0NT;
                    var24 = var22.bind(var23)(var24);
                    var13['label'] = var24;
                    var24 = 17;
                    var24 = var21[var24];
                    var24 = var18.bind(var8)(var24);
                    var24 = var24.LockIcon;
                    var13['IconComponent'] = var24;
                    var24 = function onPress() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 12;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.lockThread;
                        var2 = _closure3_slot0;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var13['onPress'] = var24;
                    var24 = var14.bind(var16)(var13);
                    _fun0003_ip = 893; continue _fun0003;
 840:
                    var17 = var17./OKSxs;
                    var17 = var22.bind(var23)(var17);
                    var13['label'] = var17;
                    var17 = 16;
                    var17 = var21[var17];
                    var17 = var18.bind(var8)(var17);
                    var17 = var17.LockUnlockedIcon;
                    var13['IconComponent'] = var17;
                    var17 = function onPress() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 12;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.unlockThread;
                        var2 = _closure3_slot0;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var13['onPress'] = var17;
                    var13 = var14.bind(var16)(var13);
 893:
                    var14 = !var3;
                    if(!var14) { _fun0003_ip = 909; continue _fun0003 }
 899:
                    var13 = var15.isLockedThread;
                    var14 = var13.bind(var15)();
 909:
                    var13 = var11;
                    if(!var11) { _fun0003_ip = 918; continue _fun0003 }
 915:
                    var13 = !var14;
 918:
                    if(!var13) { _fun0003_ip = 1028; continue _fun0003 }
 921:
                    var15 = var10.buttons;
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
                    var16 = var16.NP1yHB;
                    var16 = var21.bind(var22)(var16);
                    var13['label'] = var16;
                    var16 = 18;
                    var16 = var18[var16];
                    var16 = var17.bind(var8)(var16);
                    var16 = var16.PencilIcon;
                    var13['IconComponent'] = var16;
                    var16 = function onPress() {
                        var3 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var1 = 19;
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
                        var7 = 20;
                        var7 = var9[var7];
                        var10 = var8.bind(var1)(var7);
                        var7 = var10.castChannelIdAsMessageId;
                        var5 = var5.id;
                        var5 = var7.bind(var10)(var5);
                        var2['messageId'] = var5;
                        var5 = true;
                        var2['isEdit'] = var5;
                        var7 = 21;
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
                        var7 = _closure1_slot9;
                        var7 = var7.CHANNEL_LIST;
                        var5['section'] = var7;
                        var6 = _closure1_slot8;
                        var6 = var6.CONTEXT_MENU;
                        var5['object'] = var6;
                        var2['analyticsLocationObject'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var13['onPress'] = var16;
                    var13 = var14.bind(var15)(var13);
 1028:
                    if(!var12) { _fun0003_ip = 1267; continue _fun0003 }
 1034:
                    var14 = var10.buttons;
                    var13 = var14.push;
                    var12 = {};
                    var16 = _closure1_slot0;
                    var17 = _closure1_slot2;
                    var15 = var17[var6];
                    var15 = var16.bind(var8)(var15);
                    var21 = var15.intl;
                    var18 = var21.string;
                    var15 = var17[var6];
                    var15 = var16.bind(var8)(var15);
                    var15 = var15.t;
                    var15 = var15.SGuVbW;
                    var15 = var18.bind(var21)(var15);
                    var12['label'] = var15;
                    var15 = 22;
                    var15 = var17[var15];
                    var15 = var16.bind(var8)(var15);
                    var15 = var15.SettingsIcon;
                    var12['IconComponent'] = var15;
                    var15 = function onPress() {
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 23;
                        var6 = var4[var2];
                        var1 = undefined;
                        var7 = var3.bind(var1)(var6);
                        var6 = var7.setSection;
                        var5 = _closure1_slot10;
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
                    var12['onPress'] = var15;
                    var12 = var13.bind(var14)(var12);
                    var5 = var5.availableTags;
                    var12 = var5.length;
                    var5 = 0;
                    if(!(var12 > var5)) { _fun0003_ip = 1267; continue _fun0003 }
 1160:
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
                    var14 = var14.436ZFx;
                    var14 = var17.bind(var18)(var14);
                    var5['label'] = var14;
                    var14 = 24;
                    var14 = var16[var14];
                    var14 = var15.bind(var8)(var14);
                    var14 = var14.TagsIcon;
                    var5['IconComponent'] = var14;
                    var14 = function onPress() {
                        var5 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 25;
                        var4 = var2[var1];
                        var1 = undefined;
                        var6 = var5.bind(var1)(var4);
                        var5 = var6.openLazy;
                        var4 = _closure1_slot0;
                        var3 = 27;
                        var3 = var2[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = 26;
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
                    var5['onPress'] = var14;
                    var5 = var12.bind(var13)(var5);
 1267:
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
                    var14 = var14.WqhZsr;
                    var14 = var17.bind(var18)(var14);
                    var5['label'] = var14;
                    var14 = 28;
                    var14 = var16[var14];
                    var14 = var15.bind(var8)(var14);
                    var14 = var14.LinkIcon;
                    var5['IconComponent'] = var14;
                    var14 = function onPress() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 29;
                        var2 = var2[var1];
                        var1 = undefined;
                        var6 = var3.bind(var1)(var2);
                        var5 = var6.handleCopyLinkForumPost;
                        var2 = _closure3_slot0;
                        var4 = var2.guild_id;
                        var3 = var2.id;
                        var2 = {};
                        var7 = _closure1_slot9;
                        var7 = var7.CONTEXT_MENU;
                        var2['section'] = var7;
                        var2 = var5.bind(var6)(var4, var3, var2);
                        return var1;
                    };
                    var5['onPress'] = var14;
                    var5 = var12.bind(var13)(var5);
                    var5 = var1.push;
                    var5 = var5.bind(var1)(var10);
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
                    if(var20) { _fun0003_ip = 1516; continue _fun0003 }
 1461:
                    var20 = var14.nP+YkZ;
                    var20 = var17.bind(var18)(var20);
                    var5['label'] = var20;
                    var20 = 30;
                    var20 = var16[var20];
                    var20 = var15.bind(var8)(var20);
                    var20 = var20.BellSlashIcon;
                    var5['IconComponent'] = var20;
                    var20 = function onPress() {
                        var5 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 25;
                        var4 = var2[var1];
                        var1 = undefined;
                        var6 = var5.bind(var1)(var4);
                        var5 = var6.openLazy;
                        var4 = _closure1_slot0;
                        var3 = 27;
                        var3 = var2[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = 31;
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
                    _fun0003_ip = 1569; continue _fun0003;
 1516:
                    var14 = var14.0JQfsL;
                    var14 = var17.bind(var18)(var14);
                    var5['label'] = var14;
                    var14 = 13;
                    var14 = var16[var14];
                    var14 = var15.bind(var8)(var14);
                    var14 = var14.BellIcon;
                    var5['IconComponent'] = var14;
                    var14 = function onPress() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 12;
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
 1569:
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
                    var14 = var14.HcoRu7;
                    var14 = var17.bind(var18)(var14);
                    var5['label'] = var14;
                    var14 = 32;
                    var14 = var16[var14];
                    var14 = var15.bind(var8)(var14);
                    var14 = var14.ChannelNotificationIcon;
                    var5['IconComponent'] = var14;
                    var14 = function onPress() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 33;
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
                    var5 = {};
                    var10 = 'admin-actions';
                    var5['sectionKey'] = var10;
                    var10 = new Array(0);
                    var5['buttons'] = var10;
                    if(!var3) { _fun0003_ip = 1890; continue _fun0003 }
 1721:
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
                    if(var19) { _fun0003_ip = 1835; continue _fun0003 }
 1778:
                    var19 = var14.EnaWho;
                    var19 = var17.bind(var18)(var19);
                    var10['label'] = var19;
                    var19 = 34;
                    var19 = var16[var19];
                    var19 = var15.bind(var8)(var19);
                    var19 = var19.PinIcon;
                    var10['IconComponent'] = var19;
                    var19 = function onPress() {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            var3 = _closure3_slot5;
                            var2 = null;
                            if(!(var2 == var3)) { _fun0004_ip = 58; continue _fun0004 }
 13:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var2 = 12;
                            var3 = var3[var2];
                            var2 = undefined;
                            var3 = var4.bind(var2)(var3);
                            var2 = var3.pin;
                            var1 = _closure3_slot0;
                            var1 = var2.bind(var3)(var1);
                            _fun0004_ip = 315; continue _fun0004;
 58:
                            var2 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var1 = 35;
                            var1 = var9[var1];
                            var8 = undefined;
                            var3 = var2.bind(var8)(var1);
                            var2 = var3.show;
                            var1 = {};
                            var7 = _closure1_slot0;
                            var4 = 8;
                            var5 = var9[var4];
                            var5 = var7.bind(var8)(var5);
                            var10 = var5.intl;
                            var6 = var10.string;
                            var5 = var9[var4];
                            var5 = var7.bind(var8)(var5);
                            var5 = var5.t;
                            var5 = var5.IMbjxs;
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
                            var5 = var5.gm1Ven;
                            var5 = var6.bind(var10)(var5);
                            var1['cancelText'] = var5;
                            var5 = var9[var4];
                            var5 = var7.bind(var8)(var5);
                            var6 = var5.intl;
                            var5 = var6.string;
                            var4 = var9[var4];
                            var4 = var7.bind(var8)(var4);
                            var4 = var4.t;
                            var4 = var4.p89ACg;
                            var4 = var5.bind(var6)(var4);
                            var1['confirmText'] = var4;
                            var4 = function onConfirm() {
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var1 = 12;
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
 315:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var10['onPress'] = var19;
                    var19 = var12.bind(var13)(var10);
                    _fun0003_ip = 1890; continue _fun0003;
 1835:
                    var14 = var14.trD8am;
                    var14 = var17.bind(var18)(var14);
                    var10['label'] = var14;
                    var14 = 34;
                    var14 = var16[var14];
                    var14 = var15.bind(var8)(var14);
                    var14 = var14.PinIcon;
                    var10['IconComponent'] = var14;
                    var14 = function onPress() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 12;
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
 1890:
                    if(var3) { _fun0003_ip = 1899; continue _fun0003 }
 1893:
                    if(!var11) { _fun0003_ip = 2049; continue _fun0003 }
 1899:
                    if(!var11) { _fun0003_ip = 1905; continue _fun0003 }
 1902:
                    var11 = !var3;
 1905:
                    if(!var11) { _fun0003_ip = 1914; continue _fun0003 }
 1908:
                    var3 = 0;
                    var11 = var7 > var3;
 1914:
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
                    if(var11) { _fun0003_ip = 1988; continue _fun0003 }
 1975:
                    var11 = var12.nEOg1N;
                    var11 = var13.bind(var14)(var11);
                    _fun0003_ip = 1999; continue _fun0003;
 1988:
                    var12 = var12.xwMqDw;
                    var11 = var13.bind(var14)(var12);
 1999:
                    var3['label'] = var11;
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var11 = 36;
                    var11 = var13[var11];
                    var11 = var12.bind(var8)(var11);
                    var11 = var11.TrashIcon;
                    var3['IconComponent'] = var11;
                    var11 = function onPress() {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var5 = 8;
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
                            var4 = var2.su3voK;
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
                            if(var2) { _fun0005_ip = 275; continue _fun0005 }
 156:
                            var2 = _closure3_slot3;
                            if(!var2) { _fun0005_ip = 170; continue _fun0005 }
 163:
                            var7 = _closure3_slot2;
                            var2 = !var7;
 170:
                            var9 = var3;
                            var8 = var4;
                            if(!var2) { _fun0005_ip = 373; continue _fun0005 }
 182:
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var7 = var2[var5];
                            var7 = var4.bind(var1)(var7);
                            var10 = var7.intl;
                            var7 = var10.format;
                            var2 = var2[var5];
                            var2 = var4.bind(var1)(var2);
                            var2 = var2.t;
                            var4 = var2.6/pY29;
                            var2 = {};
                            var12 = _closure3_slot0;
                            var12 = var12.name;
                            var11 = var11.HermesInternal;
                            var11 = var11.concat;
                            var11 = var11.bind(var13)(var12, var13);
                            var2['postName'] = var11;
                            var8 = var7.bind(var10)(var4, var2);
                            var9 = var3;
                            _fun0005_ip = 373; continue _fun0005;
 275:
                            var10 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var3 = var2[var5];
                            var3 = var10.bind(var1)(var3);
                            var7 = var3.intl;
                            var4 = var7.string;
                            var3 = var2[var5];
                            var3 = var10.bind(var1)(var3);
                            var3 = var3.t;
                            var3 = var3.xwMqDw;
                            var9 = var4.bind(var7)(var3);
                            var4 = var2[var5];
                            var4 = var10.bind(var1)(var4);
                            var7 = var4.intl;
                            var4 = var7.string;
                            var2 = var2[var5];
                            var2 = var10.bind(var1)(var2);
                            var2 = var2.t;
                            var2 = var2.RUHcys;
                            var8 = var4.bind(var7)(var2);
 373:
                            var3 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var2 = 35;
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
                            var8 = var8.gm1Ven;
                            var8 = var9.bind(var10)(var8);
                            var2['cancelText'] = var8;
                            var8 = var7[var5];
                            var8 = var6.bind(var1)(var8);
                            var9 = var8.intl;
                            var8 = var9.string;
                            var5 = var7[var5];
                            var5 = var6.bind(var1)(var5);
                            var5 = var5.t;
                            var5 = var5.p89ACg;
                            var5 = var8.bind(var9)(var5);
                            var2['confirmText'] = var5;
                            var5 = function onConfirm() {
                                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                                    var2 = _closure3_slot7;
                                    var7 = _closure1_slot1;
                                    var8 = _closure1_slot2;
                                    if(var2) { _fun0006_ip = 57; continue _fun0006 }
 21:
                                    var2 = 23;
                                    var3 = var8[var2];
                                    var2 = undefined;
                                    var4 = var7.bind(var2)(var3);
                                    var3 = var4.deleteChannel;
                                    var2 = _closure3_slot0;
                                    var2 = var2.id;
                                    var2 = var3.bind(var4)(var2);
                                    _fun0006_ip = 120; continue _fun0006;
 57:
                                    var2 = 37;
                                    var2 = var8[var2];
                                    var6 = undefined;
                                    var4 = var7.bind(var6)(var2);
                                    var3 = var4.deleteMessage;
                                    var1 = _closure3_slot0;
                                    var2 = var1.id;
                                    var5 = 20;
                                    var5 = var8[var5];
                                    var6 = var7.bind(var6)(var5);
                                    var5 = var6.castChannelIdAsMessageId;
                                    var1 = var1.id;
                                    var1 = var5.bind(var6)(var1);
                                    var1 = var3.bind(var4)(var2, var1);
 120:
                                    var1 = undefined;
                                    return var1;
                                }
                            };
                            var2['onConfirm'] = var5;
                            var5 = 38;
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
 2049:
                    var3 = var1.push;
                    var3 = var3.bind(var1)(var5);
                    if(!var2) { _fun0003_ip = 2192; continue _fun0003 }
 2065:
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
                    var6 = var6.DQ797u;
                    var6 = var10.bind(var11)(var6);
                    var5['label'] = var6;
                    var6 = 39;
                    var6 = var9[var6];
                    var6 = var7.bind(var8)(var6);
                    var6 = var6.IdIcon;
                    var5['IconComponent'] = var6;
                    var4 = function onPress() {
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 40;
                        var2 = var4[var1];
                        var1 = undefined;
                        var6 = var3.bind(var1)(var2);
                        var5 = var6.copy;
                        var2 = _closure3_slot0;
                        var2 = var2.id;
                        var2 = var5.bind(var6)(var2);
                        var2 = 41;
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
 2192:
                    return var1;
                }
            };
            var7 = var2.bind(var4)(var3);
            var3 = _closure1_slot12;
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 50;
            var1 = var11[var1];
            var1 = var8.bind(var4)(var1);
            var2 = var1.ActionSheet;
            var1 = {};
            var1['showGradient'] = var6;
            var6 = 51;
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
                var4 = _closure1_slot12;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 52;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var1 = var1.ActionSheetRow;
                var2 = var1.Group;
                var1 = {};
                var7 = var8.map;
                var6 = function(arg1, arg2) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                        var2 = arg1;
                        var6 = var2.label;
                        var11 = var2.IconComponent;
                        var3 = var2.onPress;
                        var _closure4_slot0 = var3;
                        var10 = var2.disableColor;
                        var8 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var12 = 8;
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
                        var9 = var6 === var2;
                        if(var9) { _fun0007_ip = 153; continue _fun0007 }
 97:
                        var8 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var3 = var2[var12];
                        var3 = var8.bind(var5)(var3);
                        var4 = var3.intl;
                        var3 = var4.string;
                        var2 = var2[var12];
                        var2 = var8.bind(var5)(var2);
                        var2 = var2.t;
                        var2 = var2.xwMqDw;
                        var2 = var3.bind(var4)(var2);
                        var9 = var6 === var2;
 153:
                        var4 = _closure1_slot12;
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var12 = 52;
                        var2 = var2[var12];
                        var2 = var3.bind(var5)(var2);
                        var3 = var2.ActionSheetRow;
                        var2 = {};
                        var8 = undefined;
                        if(!var9) { _fun0007_ip = 194; continue _fun0007 }
 190:
                        var8 = 'danger';
 194:
                        var2['variant'] = var8;
                        var9 = _closure1_slot12;
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