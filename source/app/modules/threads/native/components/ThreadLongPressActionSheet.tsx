// app/modules/threads/native/components/ThreadLongPressActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function ThreadLongPressActionSheetConnected(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var17 = var1.channel;
            var _closure2_slot0 = var17;
            var1 = var1.onClose;
            var _closure2_slot1 = var1;
            var4 = undefined;
            var _closure2_slot4 = var4;
            var2 = var17.getGuildId;
            var2 = var2.bind(var17)();
            var _closure2_slot2 = var2;
            var6 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 30;
            var3 = var11[var2];
            var8 = var6.bind(var4)(var3);
            var7 = var8.useStateFromStores;
            var3 = _closure1_slot5;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getGuild;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var22 = var7.bind(var8)(var5, var3);
            var3 = var11[var2];
            var8 = var6.bind(var4)(var3);
            var7 = var8.useStateFromStoresObject;
            var3 = _closure1_slot7;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var1 = {};
                var6 = _closure1_slot7;
                var5 = var6.isMuted;
                var2 = _closure2_slot0;
                var4 = var2.id;
                var4 = var5.bind(var6)(var4);
                var1['isMuted'] = var4;
                var4 = _closure1_slot7;
                var3 = var4.hasJoined;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
                var1['hasJoined'] = var2;
                return var1;
            };
            var3 = var7.bind(var8)(var5, var3);
            var18 = var3.isMuted;
            var8 = var3.hasJoined;
            var3 = 31;
            var5 = var11[var3];
            var7 = var6.bind(var4)(var5);
            var5 = var7.useCanManageThread;
            var21 = var5.bind(var7)(var17);
            var5 = var11[var3];
            var7 = var6.bind(var4)(var5);
            var5 = var7.useIsThreadModerator;
            var20 = var5.bind(var7)(var17);
            var5 = var11[var3];
            var7 = var6.bind(var4)(var5);
            var5 = var7.useCanUnarchiveThread;
            var19 = var5.bind(var7)(var17);
            var3 = var11[var3];
            var5 = var6.bind(var4)(var3);
            var3 = var5.useCanJoinThreadVoice;
            var16 = var3.bind(var5)(var17);
            var3 = var11[var2];
            var9 = var6.bind(var4)(var3);
            var7 = var9.useStateFromStores;
            var3 = _closure1_slot6;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var3 = _closure1_slot6;
                var2 = var3.isInChannel;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var10 = var7.bind(var9)(var5, var3);
            var2 = var11[var2];
            var7 = var6.bind(var4)(var2);
            var5 = var7.useStateFromStores;
            var2 = _closure1_slot6;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 32;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.isEmpty;
                var5 = _closure1_slot6;
                var4 = var5.getVoiceStatesForChannel;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var4.bind(var5)(var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                return var1;
            };
            var5 = var5.bind(var7)(var3, var2);
            var3 = _closure1_slot1;
            var2 = 33;
            var2 = var11[var2];
            var2 = var3.bind(var4)(var2);
            var9 = var2.bind(var4)(var17);
            var2 = 34;
            var2 = var11[var2];
            var2 = var3.bind(var4)(var2);
            var7 = true;
            var12 = var2.bind(var4)(var17, var7);
            var2 = 35;
            var2 = var11[var2];
            var2 = var6.bind(var4)(var2);
            var6 = var2.DeveloperMode;
            var2 = var6.useSetting;
            var6 = var2.bind(var6)();
            var _closure2_slot3 = var6;
            var2 = 36;
            var2 = var11[var2];
            var3 = var3.bind(var4)(var2);
            var2 = 'ThreadLongPressActionSheet';
            var2 = var3.bind(var4)(var17, var2);
            var14 = null;
            if(!(var14 == var22)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var23 = _closure1_slot12;
            var25 = _closure1_slot0;
            var26 = _closure1_slot2;
            var24 = 38;
            var3 = var26[var24];
            var3 = var25.bind(var4)(var3);
            var11 = var3.Avatar;
            var3 = {};
            var24 = var26[var24];
            var24 = var25.bind(var4)(var24);
            var24 = var24.AvatarSizes;
            var24 = var24.LARGE;
            var3['size'] = var24;
            var3['channel'] = var17;
            var11 = var23.bind(var4)(var11, var3);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var24 = _closure1_slot12;
            var23 = _closure1_slot1;
            var27 = _closure1_slot2;
            var25 = 37;
            var3 = var27[var25];
            var23 = var23.bind(var4)(var3);
            var3 = {};
            var3['guild'] = var22;
            var26 = _closure1_slot0;
            var25 = var27[var25];
            var25 = var26.bind(var4)(var25);
            var25 = var25.GuildIconSizes;
            var25 = var25.LARGE;
            var3['size'] = var25;
            var11 = var24.bind(var4)(var23, var3);
case 4:
            var3 = {};
            var3['channel'] = var17;
            var3['guild'] = var22;
            var3['canManageThread'] = var21;
            var3['canModerateThread'] = var20;
            var3['canUnarchiveThread'] = var19;
            var3['isMuted'] = var18;
            var3['hasJoined'] = var8;
            var8 = var17.isForumPost;
            var8 = var8.bind(var17)();
            var3['isForumPost'] = var8;
            var8 = null;
            if(!var16) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var8 = null;
            if(var10) { _fun0001_ip = 5; continue _fun0001 }
case 7:
            var8 = var9;
case 5:
            var3['handleJoinThreadVoice'] = var8;
            var3['hasActiveThreadVoice'] = var5;
            var3['favorites'] = var2;
            var2 = function getActionSheetButtons(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = arg1;
                    var5 = var1.channel;
                    var _closure3_slot0 = var5;
                    var11 = var1.canManageThread;
                    var2 = var1.canModerateThread;
                    var4 = var1.canUnarchiveThread;
                    var14 = var1.isMuted;
                    var _closure3_slot1 = var14;
                    var12 = var1.hasJoined;
                    var8 = var1.isForumPost;
                    var17 = var1.handleJoinThreadVoice;
                    var18 = var1.hasActiveThreadVoice;
                    var13 = var1.favorites;
                    var1 = new Array(0);
                    var15 = var1.push;
                    var3 = {};
                    var7 = 'mark-as-read';
                    var3['sectionKey'] = var7;
                    var20 = {};
                    var21 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var7 = 7;
                    var19 = var16[var7];
                    var9 = undefined;
                    var19 = var21.bind(var9)(var19);
                    var23 = var19.intl;
                    var22 = var23.string;
                    var19 = var16[var7];
                    var19 = var21.bind(var9)(var19);
                    var19 = var19.t;
                    var19 = var19.e6RscS;
                    var19 = var22.bind(var23)(var19);
                    var20['label'] = var19;
                    var19 = 8;
                    var19 = var16[var19];
                    var19 = var21.bind(var9)(var19);
                    var19 = var19.EyeIcon;
                    var20['IconComponent'] = var19;
                    var19 = function onPress() {
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 9;
                        var3 = var3[var1];
                        var1 = undefined;
                        var6 = var4.bind(var1)(var3);
                        var5 = var6.ack;
                        var3 = _closure3_slot0;
                        var11 = var3.id;
                        var3 = {};
                        var7 = _closure1_slot10;
                        var7 = var7.THREAD_ACTION_SHEET;
                        var3['section'] = var7;
                        var7 = _closure1_slot9;
                        var7 = var7.MARK_THREAD_AS_READ_BUTTON;
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
                    var20['onPress'] = var19;
                    var19 = new Array(1);
                    var19[0] = var20;
                    var3['buttons'] = var19;
                    var3 = var15.bind(var1)(var3);
                    var15 = _closure1_slot1;
                    var3 = 10;
                    var3 = var16[var3];
                    var3 = var15.bind(var9)(var3);
                    var19 = var3.bind(var9)(var13);
                    var13 = null;
                    if(!(var13 != var19)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var15 = var1.push;
                    var3 = {};
                    var16 = 'favorites';
                    var3['sectionKey'] = var16;
                    var16 = new Array(1);
                    var16[0] = var19;
                    var3['buttons'] = var16;
                    var3 = var15.bind(var1)(var3);
case 8:
                    var3 = {};
                    var15 = 'channel-actions';
                    var3['sectionKey'] = var15;
                    var15 = new Array(0);
                    var3['buttons'] = var15;
                    var16 = var3.buttons;
                    var15 = var16.push;
                    if(var12) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var12 = {};
                    var20 = _closure1_slot0;
                    var19 = _closure1_slot2;
                    var21 = var19[var7];
                    var21 = var20.bind(var9)(var21);
                    var22 = var21.intl;
                    var21 = var22.string;
                    var19 = var19[var7];
                    var19 = var20.bind(var9)(var19);
                    var20 = var19.t;
                    if(var8) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var19 = var20["10kukS"];
                    var19 = var21.bind(var22)(var19);
                    _fun0002_ip = 14; continue _fun0002;
case 12:
                    var20 = var20.ihLPiO;
                    var19 = var21.bind(var22)(var20);
case 14:
                    var12['label'] = var19;
                    var20 = _closure1_slot0;
                    var21 = _closure1_slot2;
                    var19 = 13;
                    var19 = var21[var19];
                    var19 = var20.bind(var9)(var19);
                    var19 = var19.GroupPlusIcon;
                    var12['IconComponent'] = var19;
                    var19 = function onPress() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 12;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.joinThread;
                        var3 = _closure3_slot0;
                        var2 = 'Context Menu';
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    var12['onPress'] = var19;
                    var12 = var15.bind(var16)(var12);
                    _fun0002_ip = 15; continue _fun0002;
case 10:
                    var12 = {};
                    var20 = _closure1_slot0;
                    var19 = _closure1_slot2;
                    var21 = var19[var7];
                    var21 = var20.bind(var9)(var21);
                    var22 = var21.intl;
                    var21 = var22.string;
                    var19 = var19[var7];
                    var19 = var20.bind(var9)(var19);
                    var20 = var19.t;
                    if(var8) { _fun0002_ip = 16; continue _fun0002 }
case 2:
                    var19 = var20.fa/84m;
                    var19 = var21.bind(var22)(var19);
                    _fun0002_ip = 17; continue _fun0002;
case 16:
                    var20 = var20["2LsZdT"];
                    var19 = var21.bind(var22)(var20);
case 17:
                    var12['label'] = var19;
                    var20 = _closure1_slot0;
                    var21 = _closure1_slot2;
                    var19 = 11;
                    var19 = var21[var19];
                    var19 = var20.bind(var9)(var19);
                    var19 = var19.UserMinusIcon;
                    var12['IconComponent'] = var19;
                    var19 = true;
                    var12['isDestructive'] = var19;
                    var19 = function onPress() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 12;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.leaveThread;
                        var3 = _closure3_slot0;
                        var2 = 'Context Menu';
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    var12['onPress'] = var19;
                    var12 = var15.bind(var16)(var12);
case 15:
                    if(!(var13 != var17)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                    var16 = var3.buttons;
                    var15 = var16.push;
                    var12 = {};
                    var22 = _closure1_slot0;
                    var19 = _closure1_slot2;
                    var20 = var19[var7];
                    var20 = var22.bind(var9)(var20);
                    var21 = var20.intl;
                    var20 = var21.string;
                    var19 = var19[var7];
                    var19 = var22.bind(var9)(var19);
                    var19 = var19.t;
                    if(var18) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                    var18 = var19.My50nf;
                    var18 = var20.bind(var21)(var18);
                    _fun0002_ip = 22; continue _fun0002;
case 20:
                    var19 = var19["0D/6Rz"];
                    var18 = var20.bind(var21)(var19);
case 22:
                    var12['label'] = var18;
                    var19 = _closure1_slot0;
                    var20 = _closure1_slot2;
                    var18 = 14;
                    var18 = var20[var18];
                    var18 = var19.bind(var9)(var18);
                    var18 = var18.PhoneCallIcon;
                    var12['IconComponent'] = var18;
                    var12['onPress'] = var17;
                    var12 = var15.bind(var16)(var12);
case 18:
                    var12 = var5.threadMetadata;
                    if(!(var13 != var12)) { _fun0002_ip = 23; continue _fun0002 }
case 24:
                    var12 = var12.archived;
                    if(var12) { _fun0002_ip = 25; continue _fun0002 }
case 23:
                    if(!var11) { _fun0002_ip = 26; continue _fun0002 }
case 27:
                    var13 = var3.buttons;
                    var12 = var13.push;
                    var11 = {};
                    var16 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var17 = var15[var7];
                    var17 = var16.bind(var9)(var17);
                    var18 = var17.intl;
                    var17 = var18.string;
                    var15 = var15[var7];
                    var15 = var16.bind(var9)(var15);
                    var16 = var15.t;
                    if(var8) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var15 = var16.wiIevd;
                    var15 = var17.bind(var18)(var15);
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var16 = var16.BTs4Kb;
                    var15 = var17.bind(var18)(var16);
case 30:
                    var11['label'] = var15;
                    var16 = _closure1_slot0;
                    var17 = _closure1_slot2;
                    var15 = 16;
                    var15 = var17[var15];
                    var15 = var16.bind(var9)(var15);
                    var15 = var15.XLargeIcon;
                    var11['IconComponent'] = var15;
                    var15 = function onPress() {
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
                    var11['onPress'] = var15;
                    var11 = var12.bind(var13)(var11);
                    _fun0002_ip = 26; continue _fun0002;
case 25:
                    if(!var4) { _fun0002_ip = 26; continue _fun0002 }
case 31:
                    var12 = var3.buttons;
                    var11 = var12.push;
                    var4 = {};
                    var15 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var16 = var13[var7];
                    var16 = var15.bind(var9)(var16);
                    var17 = var16.intl;
                    var16 = var17.string;
                    var13 = var13[var7];
                    var13 = var15.bind(var9)(var13);
                    var15 = var13.t;
                    if(var8) { _fun0002_ip = 32; continue _fun0002 }
case 33:
                    var13 = var15.S9E4G7;
                    var13 = var16.bind(var17)(var13);
                    _fun0002_ip = 34; continue _fun0002;
case 32:
                    var15 = var15.cnRubV;
                    var13 = var16.bind(var17)(var15);
case 34:
                    var4['label'] = var13;
                    var15 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var13 = 15;
                    var13 = var16[var13];
                    var13 = var15.bind(var9)(var13);
                    var13 = var13.ClockIcon;
                    var4['IconComponent'] = var13;
                    var13 = function onPress() {
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
                    var4['onPress'] = var13;
                    var4 = var11.bind(var12)(var4);
case 26:
                    if(!var2) { _fun0002_ip = 35; continue _fun0002 }
case 36:
                    var4 = var5.isLockedThread;
                    var12 = var4.bind(var5)();
                    var11 = var3.buttons;
                    var5 = var11.push;
                    var4 = {};
                    var17 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var15 = var13[var7];
                    var15 = var17.bind(var9)(var15);
                    var16 = var15.intl;
                    var15 = var16.string;
                    var13 = var13[var7];
                    var13 = var17.bind(var9)(var13);
                    var13 = var13.t;
                    if(var12) { _fun0002_ip = 37; continue _fun0002 }
case 38:
                    if(var8) { _fun0002_ip = 39; continue _fun0002 }
case 40:
                    var12 = var13.HoCqm8;
                    var12 = var15.bind(var16)(var12);
                    _fun0002_ip = 41; continue _fun0002;
case 39:
                    var17 = var13.Ur/0Na;
                    var12 = var15.bind(var16)(var17);
case 41:
                    var4['label'] = var12;
                    var17 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    var12 = 18;
                    var12 = var18[var12];
                    var12 = var17.bind(var9)(var12);
                    var12 = var12.LockIcon;
                    var4['IconComponent'] = var12;
                    var12 = function onPress() {
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
                    var4['onPress'] = var12;
                    var12 = var5.bind(var11)(var4);
                    _fun0002_ip = 35; continue _fun0002;
case 37:
                    if(var8) { _fun0002_ip = 42; continue _fun0002 }
case 43:
                    var12 = var13.jeyb/W;
                    var12 = var15.bind(var16)(var12);
                    _fun0002_ip = 44; continue _fun0002;
case 42:
                    var13 = var13["/OKSxp"];
                    var12 = var15.bind(var16)(var13);
case 44:
                    var4['label'] = var12;
                    var13 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var12 = 17;
                    var12 = var15[var12];
                    var12 = var13.bind(var9)(var12);
                    var12 = var12.LockUnlockedIcon;
                    var4['IconComponent'] = var12;
                    var12 = function onPress() {
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
                    var4['onPress'] = var12;
                    var4 = var5.bind(var11)(var4);
case 35:
                    if(!var2) { _fun0002_ip = 45; continue _fun0002 }
case 46:
                    var5 = var3.buttons;
                    var4 = var5.push;
                    var2 = {};
                    var12 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var13 = var11[var7];
                    var13 = var12.bind(var9)(var13);
                    var15 = var13.intl;
                    var13 = var15.string;
                    var11 = var11[var7];
                    var11 = var12.bind(var9)(var11);
                    var12 = var11.t;
                    if(var8) { _fun0002_ip = 47; continue _fun0002 }
case 48:
                    var11 = var12["2Mk1TP"];
                    var11 = var13.bind(var15)(var11);
                    _fun0002_ip = 49; continue _fun0002;
case 47:
                    var12 = var12.NP1yHG;
                    var11 = var13.bind(var15)(var12);
case 49:
                    var2['label'] = var11;
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var11 = 19;
                    var11 = var13[var11];
                    var11 = var12.bind(var9)(var11);
                    var11 = var11.PencilIcon;
                    var2['IconComponent'] = var11;
                    var11 = function onPress() {
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 20;
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
                    var2['onPress'] = var11;
                    var2 = var4.bind(var5)(var2);
case 45:
                    var5 = var3.buttons;
                    var4 = var5.push;
                    var2 = {};
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var11 = var13[var7];
                    var11 = var12.bind(var9)(var11);
                    var16 = var11.intl;
                    var15 = var16.string;
                    var11 = var13[var7];
                    var11 = var12.bind(var9)(var11);
                    var11 = var11.t;
                    var11 = var11.WqhZss;
                    var11 = var15.bind(var16)(var11);
                    var2['label'] = var11;
                    var11 = 21;
                    var11 = var13[var11];
                    var11 = var12.bind(var9)(var11);
                    var11 = var11.LinkIcon;
                    var2['IconComponent'] = var11;
                    var11 = false;
                    var2['isDestructive'] = var11;
                    var11 = function onPress() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 22;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.copyGuildChannelOrThreadLink;
                        var2 = _closure3_slot0;
                        var3 = var2.guild_id;
                        var2 = var2.id;
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    var2['onPress'] = var11;
                    var2 = var4.bind(var5)(var2);
                    var2 = var1.push;
                    var2 = var2.bind(var1)(var3);
                    var3 = {};
                    var2 = 'notifications';
                    var3['sectionKey'] = var2;
                    var2 = new Array(0);
                    var3['buttons'] = var2;
                    var5 = var3.buttons;
                    var4 = var5.push;
                    var2 = {};
                    var15 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var12 = var11[var7];
                    var12 = var15.bind(var9)(var12);
                    var13 = var12.intl;
                    var12 = var13.string;
                    var11 = var11[var7];
                    var11 = var15.bind(var9)(var11);
                    var11 = var11.t;
                    if(var14) { _fun0002_ip = 50; continue _fun0002 }
case 51:
                    if(var8) { _fun0002_ip = 52; continue _fun0002 }
case 53:
                    var14 = var11.bUUd8q;
                    var14 = var12.bind(var13)(var14);
                    _fun0002_ip = 54; continue _fun0002;
case 52:
                    var15 = var11.nP+Ykd;
                    var14 = var12.bind(var13)(var15);
case 54:
                    var2['label'] = var14;
                    var15 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var14 = 23;
                    var14 = var16[var14];
                    var14 = var15.bind(var9)(var14);
                    var14 = var14.BellSlashIcon;
                    var2['IconComponent'] = var14;
                    var14 = function onPress() {
                        var5 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 24;
                        var4 = var2[var1];
                        var1 = undefined;
                        var6 = var5.bind(var1)(var4);
                        var5 = var6.openLazy;
                        var4 = _closure1_slot0;
                        var3 = 26;
                        var3 = var2[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = 25;
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
                    var2['onPress'] = var14;
                    var14 = var4.bind(var5)(var2);
                    _fun0002_ip = 55; continue _fun0002;
case 50:
                    if(var8) { _fun0002_ip = 56; continue _fun0002 }
case 57:
                    var8 = var11.Cq/TzF;
                    var8 = var12.bind(var13)(var8);
                    _fun0002_ip = 58; continue _fun0002;
case 56:
                    var11 = var11["0JQfsP"];
                    var8 = var12.bind(var13)(var11);
case 58:
                    var2['label'] = var8;
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var8 = 27;
                    var8 = var12[var8];
                    var8 = var11.bind(var9)(var8);
                    var8 = var8.BellIcon;
                    var2['IconComponent'] = var8;
                    var8 = function onPress() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 12;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.setNotificationSettings;
                        var3 = _closure3_slot0;
                        var2 = {};
                        var6 = _closure3_slot1;
                        var6 = !var6;
                        var2['muted'] = var6;
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    var2['onPress'] = var8;
                    var2 = var4.bind(var5)(var2);
case 55:
                    var5 = var3.buttons;
                    var4 = var5.push;
                    var2 = {};
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var11 = var10[var7];
                    var11 = var8.bind(var9)(var11);
                    var12 = var11.intl;
                    var11 = var12.string;
                    var7 = var10[var7];
                    var7 = var8.bind(var9)(var7);
                    var7 = var7.t;
                    var7 = var7.h850Ss;
                    var7 = var11.bind(var12)(var7);
                    var2['label'] = var7;
                    var7 = 28;
                    var7 = var10[var7];
                    var7 = var8.bind(var9)(var7);
                    var7 = var7.ChannelNotificationIcon;
                    var2['IconComponent'] = var7;
                    var6 = function onPress() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 29;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.showThreadNotificationsBottomSheet;
                        var2 = _closure3_slot0;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var2['onPress'] = var6;
                    var6 = true;
                    var2['disableColor'] = var6;
                    var2 = var4.bind(var5)(var2);
                    var2 = var1.push;
                    var2 = var2.bind(var1)(var3);
                    return var1;
                }
            };
            var9 = var2.bind(var4)(var3);
            _closure2_slot4 = var9;
            var5 = _closure1_slot3;
            var3 = var5.useEffect;
            var8 = var9.length;
            var2 = new Array(3);
            var2[0] = var8;
            var2[1] = var6;
            var2[2] = var1;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot4;
                    var3 = var2.length;
                    var2 = 0;
                    var2 = var2 !== var3;
                    if(var2) { _fun0003_ip = 59; continue _fun0003 }
case 60:
                    var2 = _closure2_slot3;
case 59:
                    if(var2) { _fun0003_ip = 61; continue _fun0003 }
case 62:
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 61:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot13;
            var8 = _closure1_slot0;
            var14 = _closure1_slot2;
            var1 = 39;
            var1 = var14[var1];
            var1 = var8.bind(var4)(var1);
            var2 = var1.ActionSheet;
            var1 = {};
            var10 = _closure1_slot12;
            var5 = 40;
            var5 = var14[var5];
            var5 = var8.bind(var4)(var5);
            var8 = var5.ActionSheetIconHeader;
            var5 = {};
            var5['title'] = var12;
            var5['icon'] = var11;
            var5 = var10.bind(var4)(var8, var5);
            var1['header'] = var5;
            var8 = var9.map;
            var5 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot12;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 41;
                var2 = var4[var2];
                var4 = undefined;
                var2 = var3.bind(var4)(var2);
                var2 = var2.ActionSheetRow;
                var3 = var2.Group;
                var2 = {};
                var6 = true;
                var2['hasIcons'] = var6;
                var8 = var1.buttons;
                var7 = var8.map;
                var6 = function(arg1, arg2) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var2 = arg1;
                        var8 = var2.label;
                        var11 = var2.IconComponent;
                        var6 = var2.trailing;
                        var9 = var2.isDestructive;
                        var10 = var2.disableColor;
                        var2 = var2.onPress;
                        var _closure4_slot0 = var2;
                        var5 = _closure1_slot12;
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var12 = 41;
                        var2 = var2[var12];
                        var4 = undefined;
                        var2 = var3.bind(var4)(var2);
                        var3 = var2.ActionSheetRow;
                        var2 = {};
                        var2['label'] = var8;
                        var8 = 'default';
                        if(!var9) { _fun0004_ip = 63; continue _fun0004 }
case 64:
                        var8 = 'danger';
case 63:
                        var2['variant'] = var8;
                        var9 = _closure1_slot12;
                        var8 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var7 = var7[var12];
                        var7 = var8.bind(var4)(var7);
                        var7 = var7.ActionSheetRow;
                        var8 = var7.Icon;
                        var7 = {};
                        var7['IconComponent'] = var11;
                        var7['disableColor'] = var10;
                        var7 = var9.bind(var4)(var8, var7);
                        var2['icon'] = var7;
                        var2['trailing'] = var6;
                        var1 = function onPress() {
                            var2 = _closure2_slot1;
                            var1 = undefined;
                            var2 = var2.bind(var1)();
                            var2 = _closure4_slot0;
                            var2 = var2.bind(var1)();
                            return var1;
                        };
                        var2['onPress'] = var1;
                        var1 = arg2;
                        var1 = var5.bind(var4)(var3, var2, var1);
                        return var1;
                    }
                };
                var6 = var7.bind(var8)(var6);
                var2['children'] = var6;
                var1 = var1.sectionKey;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var8 = var8.bind(var9)(var5);
            var5 = new Array(2);
            var5[0] = var8;
            if(!var6) { _fun0001_ip = 65; continue _fun0001 }
case 66:
            var10 = _closure1_slot12;
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var14 = 41;
            var8 = var18[var14];
            var8 = var17.bind(var4)(var8);
            var8 = var8.ActionSheetRow;
            var9 = var8.Group;
            var8 = {};
            var8['hasIcons'] = var7;
            var12 = _closure1_slot12;
            var7 = var18[var14];
            var7 = var17.bind(var4)(var7);
            var11 = var7.ActionSheetRow;
            var7 = {};
            var16 = _closure1_slot12;
            var14 = var18[var14];
            var14 = var17.bind(var4)(var14);
            var14 = var14.ActionSheetRow;
            var15 = var14.Icon;
            var14 = {};
            var19 = 42;
            var19 = var18[var19];
            var19 = var17.bind(var4)(var19);
            var19 = var19.IdIcon;
            var14['IconComponent'] = var19;
            var14 = var16.bind(var4)(var15, var14);
            var7['icon'] = var14;
            var14 = 7;
            var15 = var18[var14];
            var15 = var17.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var18[var14];
            var14 = var17.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.DQ797g;
            var14 = var15.bind(var16)(var14);
            var7['label'] = var14;
            var13 = function onPress() {
                var3 = _closure2_slot1;
                var1 = undefined;
                var3 = var3.bind(var1)();
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var5 = 43;
                var5 = var4[var5];
                var6 = var3.bind(var1)(var5);
                var5 = var6.copy;
                var2 = _closure2_slot0;
                var2 = var2.id;
                var2 = var5.bind(var6)(var2);
                var2 = 44;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.presentIdCopied;
                var2 = var2.bind(var3)();
                return var1;
            };
            var7['onPress'] = var13;
            var7 = var12.bind(var4)(var11, var7);
            var8['children'] = var7;
            var7 = 'developer-actions';
            var6 = var10.bind(var4)(var9, var8, var7);
case 65:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot14 = var1;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
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
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot12 = var7;
    var4 = var4.jsxs;
    var _closure1_slot13 = var4;
    var4 = 45;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/threads/native/components/ThreadLongPressActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ThreadLongPressActionSheet(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var3 = var2.channelId;
            var _closure2_slot0 = var3;
            var6 = var2.onClose;
            var _closure2_slot1 = var6;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 30;
            var3 = var5[var3];
            var5 = undefined;
            var8 = var4.bind(var5)(var3);
            var7 = var8.useStateFromStores;
            var3 = _closure1_slot4;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var7.bind(var8)(var4, var3);
            var _closure2_slot2 = var7;
            var8 = _closure1_slot3;
            var4 = var8.useEffect;
            var3 = new Array(2);
            var3[0] = var7;
            var3[1] = var6;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0006_ip = 67; continue _fun0006 }
case 68:
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 67:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var4.bind(var8)(var1, var3);
            var1 = null;
            var3 = var1 != var7;
            if(!var3) { _fun0005_ip = 69; continue _fun0005 }
case 70:
            var4 = _closure1_slot12;
            var3 = _closure1_slot14;
            var2 = {};
            var2['channel'] = var7;
            var2['onClose'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 69:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();