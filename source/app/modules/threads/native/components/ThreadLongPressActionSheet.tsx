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
            var14 = var1.channel;
            var _closure2_slot0 = var14;
            var1 = var1.onClose;
            var _closure2_slot1 = var1;
            var4 = undefined;
            var _closure2_slot4 = var4;
            var2 = var14.getGuildId;
            var2 = var2.bind(var14)();
            var _closure2_slot2 = var2;
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 29;
            var3 = var9[var2];
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
            var20 = var7.bind(var8)(var5, var3);
            var3 = var9[var2];
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
            var16 = var3.isMuted;
            var5 = var3.hasJoined;
            var3 = 30;
            var7 = var9[var3];
            var8 = var6.bind(var4)(var7);
            var7 = var8.useCanManageThread;
            var19 = var7.bind(var8)(var14);
            var7 = var9[var3];
            var8 = var6.bind(var4)(var7);
            var7 = var8.useIsThreadModerator;
            var18 = var7.bind(var8)(var14);
            var7 = var9[var3];
            var8 = var6.bind(var4)(var7);
            var7 = var8.useCanUnarchiveThread;
            var17 = var7.bind(var8)(var14);
            var3 = var9[var3];
            var7 = var6.bind(var4)(var3);
            var3 = var7.useCanJoinThreadVoice;
            var12 = var3.bind(var7)(var14);
            var3 = var9[var2];
            var10 = var6.bind(var4)(var3);
            var8 = var10.useStateFromStores;
            var3 = _closure1_slot6;
            var7 = new Array(1);
            var7[0] = var3;
            var3 = function() {
                var3 = _closure1_slot6;
                var2 = var3.isInChannel;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var8.bind(var10)(var7, var3);
            var2 = var9[var2];
            var10 = var6.bind(var4)(var2);
            var7 = var10.useStateFromStores;
            var2 = _closure1_slot6;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 31;
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
            var2 = var7.bind(var10)(var3, var2);
            var10 = _closure1_slot1;
            var3 = 32;
            var3 = var9[var3];
            var3 = var10.bind(var4)(var3);
            var7 = var3.bind(var4)(var14);
            var3 = 33;
            var3 = var9[var3];
            var10 = var10.bind(var4)(var3);
            var3 = true;
            var11 = var10.bind(var4)(var14, var3);
            var3 = 34;
            var3 = var9[var3];
            var3 = var6.bind(var4)(var3);
            var6 = var3.DeveloperMode;
            var3 = var6.useSetting;
            var6 = var3.bind(var6)();
            var _closure2_slot3 = var6;
            var9 = null;
            if(!(var9 == var20)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var21 = _closure1_slot12;
            var10 = _closure1_slot1;
            var24 = _closure1_slot2;
            var22 = 36;
            var3 = var24[var22];
            var10 = var10.bind(var4)(var3);
            var3 = {};
            var23 = _closure1_slot0;
            var22 = var24[var22];
            var22 = var23.bind(var4)(var22);
            var22 = var22.AvatarSizes;
            var22 = var22.LARGE;
            var3['size'] = var22;
            var3['channel'] = var14;
            var10 = var21.bind(var4)(var10, var3);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var22 = _closure1_slot12;
            var21 = _closure1_slot1;
            var25 = _closure1_slot2;
            var23 = 35;
            var3 = var25[var23];
            var21 = var21.bind(var4)(var3);
            var3 = {};
            var3['guild'] = var20;
            var24 = _closure1_slot0;
            var23 = var25[var23];
            var23 = var24.bind(var4)(var23);
            var23 = var23.GuildIconSizes;
            var23 = var23.LARGE;
            var3['size'] = var23;
            var10 = var22.bind(var4)(var21, var3);
case 4:
            var3 = {};
            var3['channel'] = var14;
            var3['guild'] = var20;
            var3['canManageThread'] = var19;
            var3['canModerateThread'] = var18;
            var3['canUnarchiveThread'] = var17;
            var3['isMuted'] = var16;
            var3['hasJoined'] = var5;
            var5 = var14.isForumPost;
            var5 = var5.bind(var14)();
            var3['isForumPost'] = var5;
            var5 = null;
            if(!var12) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var5 = null;
            if(var8) { _fun0001_ip = 5; continue _fun0001 }
case 7:
            var5 = var7;
case 5:
            var3['handleJoinThreadVoice'] = var5;
            var3['hasActiveThreadVoice'] = var2;
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
                    var1 = new Array(0);
                    var13 = var1.push;
                    var3 = {};
                    var7 = 'mark-as-read';
                    var3['sectionKey'] = var7;
                    var16 = {};
                    var19 = _closure1_slot0;
                    var20 = _closure1_slot2;
                    var7 = 7;
                    var15 = var20[var7];
                    var9 = undefined;
                    var15 = var19.bind(var9)(var15);
                    var22 = var15.intl;
                    var21 = var22.string;
                    var15 = var20[var7];
                    var15 = var19.bind(var9)(var15);
                    var15 = var15.t;
                    var15 = var15.e6RscX;
                    var15 = var21.bind(var22)(var15);
                    var16['label'] = var15;
                    var15 = 8;
                    var15 = var20[var15];
                    var15 = var19.bind(var9)(var15);
                    var15 = var15.EyeIcon;
                    var16['IconComponent'] = var15;
                    var15 = function onPress() {
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
                    var16['onPress'] = var15;
                    var15 = new Array(1);
                    var15[0] = var16;
                    var3['buttons'] = var15;
                    var3 = var13.bind(var1)(var3);
                    var3 = {};
                    var13 = 'channel-actions';
                    var3['sectionKey'] = var13;
                    var13 = new Array(0);
                    var3['buttons'] = var13;
                    var15 = var3.buttons;
                    var13 = var15.push;
                    if(var12) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var12 = {};
                    var19 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var20 = var16[var7];
                    var20 = var19.bind(var9)(var20);
                    var21 = var20.intl;
                    var20 = var21.string;
                    var16 = var16[var7];
                    var16 = var19.bind(var9)(var16);
                    var19 = var16.t;
                    if(var8) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var16 = var19.10kukZ;
                    var16 = var20.bind(var21)(var16);
                    _fun0002_ip = 12; continue _fun0002;
case 10:
                    var19 = var19.ihLPiI;
                    var16 = var20.bind(var21)(var19);
case 12:
                    var12['label'] = var16;
                    var19 = _closure1_slot0;
                    var20 = _closure1_slot2;
                    var16 = 12;
                    var16 = var20[var16];
                    var16 = var19.bind(var9)(var16);
                    var16 = var16.GroupPlusIcon;
                    var12['IconComponent'] = var16;
                    var16 = function onPress() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 11;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.joinThread;
                        var3 = _closure3_slot0;
                        var2 = 'Context Menu';
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    var12['onPress'] = var16;
                    var12 = var13.bind(var15)(var12);
                    _fun0002_ip = 13; continue _fun0002;
case 8:
                    var12 = {};
                    var19 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var20 = var16[var7];
                    var20 = var19.bind(var9)(var20);
                    var21 = var20.intl;
                    var20 = var21.string;
                    var16 = var16[var7];
                    var16 = var19.bind(var9)(var16);
                    var19 = var16.t;
                    if(var8) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var16 = var19.fa/84u;
                    var16 = var20.bind(var21)(var16);
                    _fun0002_ip = 16; continue _fun0002;
case 14:
                    var19 = var19.2LsZdX;
                    var16 = var20.bind(var21)(var19);
case 16:
                    var12['label'] = var16;
                    var19 = _closure1_slot0;
                    var20 = _closure1_slot2;
                    var16 = 10;
                    var16 = var20[var16];
                    var16 = var19.bind(var9)(var16);
                    var16 = var16.UserMinusIcon;
                    var12['IconComponent'] = var16;
                    var16 = true;
                    var12['isDestructive'] = var16;
                    var16 = function onPress() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 11;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.leaveThread;
                        var3 = _closure3_slot0;
                        var2 = 'Context Menu';
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    var12['onPress'] = var16;
                    var12 = var13.bind(var15)(var12);
case 13:
                    var13 = null;
                    if(!(var13 != var17)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
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
                    if(var18) { _fun0002_ip = 19; continue _fun0002 }
case 20:
                    var18 = var19.My50nZ;
                    var18 = var20.bind(var21)(var18);
                    _fun0002_ip = 21; continue _fun0002;
case 19:
                    var19 = var19.0D/6R0;
                    var18 = var20.bind(var21)(var19);
case 21:
                    var12['label'] = var18;
                    var19 = _closure1_slot0;
                    var20 = _closure1_slot2;
                    var18 = 13;
                    var18 = var20[var18];
                    var18 = var19.bind(var9)(var18);
                    var18 = var18.PhoneCallIcon;
                    var12['IconComponent'] = var18;
                    var12['onPress'] = var17;
                    var12 = var15.bind(var16)(var12);
case 17:
                    var12 = var5.threadMetadata;
                    if(!(var13 != var12)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
                    var12 = var12.archived;
                    if(var12) { _fun0002_ip = 24; continue _fun0002 }
case 22:
                    if(!var11) { _fun0002_ip = 25; continue _fun0002 }
case 26:
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
                    if(var8) { _fun0002_ip = 27; continue _fun0002 }
case 28:
                    var15 = var16.wiIevb;
                    var15 = var17.bind(var18)(var15);
                    _fun0002_ip = 29; continue _fun0002;
case 27:
                    var16 = var16.BTs4KS;
                    var15 = var17.bind(var18)(var16);
case 29:
                    var11['label'] = var15;
                    var16 = _closure1_slot0;
                    var17 = _closure1_slot2;
                    var15 = 15;
                    var15 = var17[var15];
                    var15 = var16.bind(var9)(var15);
                    var15 = var15.XLargeIcon;
                    var11['IconComponent'] = var15;
                    var15 = function onPress() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 11;
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
                    _fun0002_ip = 25; continue _fun0002;
case 24:
                    if(!var4) { _fun0002_ip = 25; continue _fun0002 }
case 30:
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
                    if(var8) { _fun0002_ip = 31; continue _fun0002 }
case 32:
                    var13 = var15.S9E4Gx;
                    var13 = var16.bind(var17)(var13);
                    _fun0002_ip = 33; continue _fun0002;
case 31:
                    var15 = var15.cnRubW;
                    var13 = var16.bind(var17)(var15);
case 33:
                    var4['label'] = var13;
                    var15 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var13 = 14;
                    var13 = var16[var13];
                    var13 = var15.bind(var9)(var13);
                    var13 = var13.ClockIcon;
                    var4['IconComponent'] = var13;
                    var13 = function onPress() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 11;
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
case 25:
                    if(!var2) { _fun0002_ip = 34; continue _fun0002 }
case 35:
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
                    if(var12) { _fun0002_ip = 36; continue _fun0002 }
case 37:
                    if(var8) { _fun0002_ip = 38; continue _fun0002 }
case 39:
                    var12 = var13.HoCqm5;
                    var12 = var15.bind(var16)(var12);
                    _fun0002_ip = 40; continue _fun0002;
case 38:
                    var17 = var13.Ur/0NT;
                    var12 = var15.bind(var16)(var17);
case 40:
                    var4['label'] = var12;
                    var17 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    var12 = 17;
                    var12 = var18[var12];
                    var12 = var17.bind(var9)(var12);
                    var12 = var12.LockIcon;
                    var4['IconComponent'] = var12;
                    var12 = function onPress() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 11;
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
                    _fun0002_ip = 34; continue _fun0002;
case 36:
                    if(var8) { _fun0002_ip = 41; continue _fun0002 }
case 42:
                    var12 = var13.jeyb/f;
                    var12 = var15.bind(var16)(var12);
                    _fun0002_ip = 43; continue _fun0002;
case 41:
                    var13 = var13./OKSxs;
                    var12 = var15.bind(var16)(var13);
case 43:
                    var4['label'] = var12;
                    var13 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var12 = 16;
                    var12 = var15[var12];
                    var12 = var13.bind(var9)(var12);
                    var12 = var12.LockUnlockedIcon;
                    var4['IconComponent'] = var12;
                    var12 = function onPress() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 11;
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
case 34:
                    if(!var2) { _fun0002_ip = 44; continue _fun0002 }
case 45:
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
                    if(var8) { _fun0002_ip = 46; continue _fun0002 }
case 47:
                    var11 = var12.2Mk1TE;
                    var11 = var13.bind(var15)(var11);
                    _fun0002_ip = 48; continue _fun0002;
case 46:
                    var12 = var12.NP1yHB;
                    var11 = var13.bind(var15)(var12);
case 48:
                    var2['label'] = var11;
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var11 = 18;
                    var11 = var13[var11];
                    var11 = var12.bind(var9)(var11);
                    var11 = var11.PencilIcon;
                    var2['IconComponent'] = var11;
                    var11 = function onPress() {
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 19;
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
case 44:
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
                    var11 = var11.WqhZsr;
                    var11 = var15.bind(var16)(var11);
                    var2['label'] = var11;
                    var11 = 20;
                    var11 = var13[var11];
                    var11 = var12.bind(var9)(var11);
                    var11 = var11.LinkIcon;
                    var2['IconComponent'] = var11;
                    var11 = false;
                    var2['isDestructive'] = var11;
                    var11 = function onPress() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 21;
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
                    if(var14) { _fun0002_ip = 49; continue _fun0002 }
case 50:
                    if(var8) { _fun0002_ip = 51; continue _fun0002 }
case 52:
                    var14 = var11.bUUd8v;
                    var14 = var12.bind(var13)(var14);
                    _fun0002_ip = 53; continue _fun0002;
case 51:
                    var15 = var11.nP+YkZ;
                    var14 = var12.bind(var13)(var15);
case 53:
                    var2['label'] = var14;
                    var15 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var14 = 22;
                    var14 = var16[var14];
                    var14 = var15.bind(var9)(var14);
                    var14 = var14.BellSlashIcon;
                    var2['IconComponent'] = var14;
                    var14 = function onPress() {
                        var5 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 23;
                        var4 = var2[var1];
                        var1 = undefined;
                        var6 = var5.bind(var1)(var4);
                        var5 = var6.openLazy;
                        var4 = _closure1_slot0;
                        var3 = 25;
                        var3 = var2[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = 24;
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
                    _fun0002_ip = 54; continue _fun0002;
case 49:
                    if(var8) { _fun0002_ip = 55; continue _fun0002 }
case 56:
                    var8 = var11.Cq/TzM;
                    var8 = var12.bind(var13)(var8);
                    _fun0002_ip = 57; continue _fun0002;
case 55:
                    var11 = var11.0JQfsL;
                    var8 = var12.bind(var13)(var11);
case 57:
                    var2['label'] = var8;
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var8 = 26;
                    var8 = var12[var8];
                    var8 = var11.bind(var9)(var8);
                    var8 = var8.BellIcon;
                    var2['IconComponent'] = var8;
                    var8 = function onPress() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 11;
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
case 54:
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
                    var7 = var7.h850Sk;
                    var7 = var11.bind(var12)(var7);
                    var2['label'] = var7;
                    var7 = 27;
                    var7 = var10[var7];
                    var7 = var8.bind(var9)(var7);
                    var7 = var7.ChannelNotificationIcon;
                    var2['IconComponent'] = var7;
                    var6 = function onPress() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 28;
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
            var8 = var2.bind(var4)(var3);
            _closure2_slot4 = var8;
            var5 = _closure1_slot3;
            var3 = var5.useEffect;
            var7 = var8.length;
            var2 = new Array(3);
            var2[0] = var7;
            var2[1] = var6;
            var2[2] = var1;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot4;
                    var3 = var2.length;
                    var2 = 0;
                    var2 = var2 !== var3;
                    if(var2) { _fun0003_ip = 58; continue _fun0003 }
case 59:
                    var2 = _closure2_slot3;
case 58:
                    if(var2) { _fun0003_ip = 60; continue _fun0003 }
case 61:
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 60:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot13;
            var7 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 37;
            var1 = var12[var1];
            var1 = var7.bind(var4)(var1);
            var2 = var1.ActionSheet;
            var1 = {};
            var9 = _closure1_slot12;
            var5 = 38;
            var5 = var12[var5];
            var5 = var7.bind(var4)(var5);
            var7 = var5.ActionSheetIconHeader;
            var5 = {};
            var5['title'] = var11;
            var5['icon'] = var10;
            var5 = var9.bind(var4)(var7, var5);
            var1['header'] = var5;
            var7 = var8.map;
            var5 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot12;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 39;
                var2 = var4[var2];
                var4 = undefined;
                var2 = var3.bind(var4)(var2);
                var2 = var2.ActionSheetRow;
                var3 = var2.Group;
                var2 = {};
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
                        var12 = 39;
                        var2 = var2[var12];
                        var4 = undefined;
                        var2 = var3.bind(var4)(var2);
                        var3 = var2.ActionSheetRow;
                        var2 = {};
                        var2['label'] = var8;
                        var8 = 'default';
                        if(!var9) { _fun0004_ip = 62; continue _fun0004 }
case 63:
                        var8 = 'danger';
case 62:
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
            var7 = var7.bind(var8)(var5);
            var5 = new Array(2);
            var5[0] = var7;
            if(!var6) { _fun0001_ip = 64; continue _fun0001 }
case 65:
            var10 = _closure1_slot12;
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var14 = 39;
            var7 = var18[var14];
            var7 = var17.bind(var4)(var7);
            var7 = var7.ActionSheetRow;
            var9 = var7.Group;
            var8 = {};
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
            var19 = 40;
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
            var14 = var14.DQ797u;
            var14 = var15.bind(var16)(var14);
            var7['label'] = var14;
            var13 = function onPress() {
                var3 = _closure2_slot1;
                var1 = undefined;
                var3 = var3.bind(var1)();
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var5 = 41;
                var5 = var4[var5];
                var6 = var3.bind(var1)(var5);
                var5 = var6.copy;
                var2 = _closure2_slot0;
                var2 = var2.id;
                var2 = var5.bind(var6)(var2);
                var2 = 42;
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
case 64:
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
    var4 = 43;
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
            var3 = 29;
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
                    if(!(var2 == var3)) { _fun0006_ip = 66; continue _fun0006 }
case 67:
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 66:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var4.bind(var8)(var1, var3);
            var1 = null;
            var3 = var1 != var7;
            if(!var3) { _fun0005_ip = 68; continue _fun0005 }
case 69:
            var4 = _closure1_slot12;
            var3 = _closure1_slot14;
            var2 = {};
            var2['channel'] = var7;
            var2['onClose'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 68:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();