// app/modules/threads/native/components/ThreadLongPressActionSheet.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function ThreadLongPressActionSheetConnected(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
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
            var2 = 40;
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
            var15 = var3.isMuted;
            var5 = var3.hasJoined;
            var3 = 41;
            var7 = var9[var3];
            var8 = var6.bind(var4)(var7);
            var7 = var8.useCanManageThread;
            var18 = var7.bind(var8)(var14);
            var7 = var9[var3];
            var8 = var6.bind(var4)(var7);
            var7 = var8.useIsThreadModerator;
            var17 = var7.bind(var8)(var14);
            var7 = var9[var3];
            var8 = var6.bind(var4)(var7);
            var7 = var8.useCanUnarchiveThread;
            var16 = var7.bind(var8)(var14);
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
                var2 = 42;
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
            var3 = 43;
            var3 = var9[var3];
            var3 = var10.bind(var4)(var3);
            var7 = var3.bind(var4)(var14);
            var3 = 44;
            var3 = var9[var3];
            var10 = var10.bind(var4)(var3);
            var3 = true;
            var11 = var10.bind(var4)(var14, var3);
            var3 = 45;
            var3 = var9[var3];
            var3 = var6.bind(var4)(var3);
            var6 = var3.DeveloperMode;
            var3 = var6.useSetting;
            var6 = var3.bind(var6)();
            var _closure2_slot3 = var6;
            var9 = null;
            if(!(var9 == var20)) { _fun0001_ip = 456; continue _fun0001 }
 389:
            var21 = _closure1_slot12;
            var10 = _closure1_slot1;
            var24 = _closure1_slot2;
            var22 = 47;
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
            _fun0001_ip = 521; continue _fun0001;
 456:
            var22 = _closure1_slot12;
            var21 = _closure1_slot1;
            var25 = _closure1_slot2;
            var23 = 46;
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
 521:
            var3 = {};
            var3['channel'] = var14;
            var3['guild'] = var20;
            var3['canManageThread'] = var18;
            var3['canModerateThread'] = var17;
            var3['canUnarchiveThread'] = var16;
            var3['isMuted'] = var15;
            var3['hasJoined'] = var5;
            var5 = var14.isForumPost;
            var5 = var5.bind(var14)();
            var3['isForumPost'] = var5;
            var5 = null;
            if(!var12) { _fun0001_ip = 584; continue _fun0001 }
 576:
            var5 = null;
            if(var8) { _fun0001_ip = 584; continue _fun0001 }
 581:
            var5 = var7;
 584:
            var3['handleJoinThreadVoice'] = var5;
            var3['hasActiveThreadVoice'] = var2;
            var2 = function getActionSheetButtons(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = arg1;
                    var5 = var1.channel;
                    var _closure3_slot0 = var5;
                    var10 = var1.canManageThread;
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
                    var11 = 7;
                    var15 = var20[var11];
                    var9 = undefined;
                    var15 = var19.bind(var9)(var15);
                    var22 = var15.intl;
                    var21 = var22.string;
                    var15 = var20[var11];
                    var15 = var19.bind(var9)(var15);
                    var15 = var15.t;
                    var15 = var15.e6RscX;
                    var15 = var21.bind(var22)(var15);
                    var16['label'] = var15;
                    var21 = _closure1_slot1;
                    var15 = 8;
                    var15 = var20[var15];
                    var15 = var21.bind(var9)(var15);
                    var16['icon'] = var15;
                    var15 = 9;
                    var15 = var20[var15];
                    var15 = var19.bind(var9)(var15);
                    var15 = var15.EyeIcon;
                    var16['IconComponent'] = var15;
                    var15 = function onPress() {
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
                    if(var12) { _fun0002_ip = 411; continue _fun0002 }
 265:
                    var12 = {};
                    var19 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var20 = var16[var11];
                    var20 = var19.bind(var9)(var20);
                    var21 = var20.intl;
                    var20 = var21.string;
                    var16 = var16[var11];
                    var16 = var19.bind(var9)(var16);
                    var19 = var16.t;
                    if(var8) { _fun0002_ip = 324; continue _fun0002 }
 311:
                    var16 = var19.10kukZ;
                    var16 = var20.bind(var21)(var16);
                    _fun0002_ip = 335; continue _fun0002;
 324:
                    var19 = var19.ihLPiI;
                    var16 = var20.bind(var21)(var19);
 335:
                    var12['label'] = var16;
                    var19 = _closure1_slot1;
                    var20 = _closure1_slot2;
                    var16 = 14;
                    var16 = var20[var16];
                    var16 = var19.bind(var9)(var16);
                    var12['icon'] = var16;
                    var19 = _closure1_slot0;
                    var16 = 15;
                    var16 = var20[var16];
                    var16 = var19.bind(var9)(var16);
                    var16 = var16.GroupPlusIcon;
                    var12['IconComponent'] = var16;
                    var16 = function onPress() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 13;
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
                    _fun0002_ip = 559; continue _fun0002;
 411:
                    var12 = {};
                    var19 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var20 = var16[var11];
                    var20 = var19.bind(var9)(var20);
                    var21 = var20.intl;
                    var20 = var21.string;
                    var16 = var16[var11];
                    var16 = var19.bind(var9)(var16);
                    var19 = var16.t;
                    if(var8) { _fun0002_ip = 470; continue _fun0002 }
 457:
                    var16 = var19.fa/84u;
                    var16 = var20.bind(var21)(var16);
                    _fun0002_ip = 481; continue _fun0002;
 470:
                    var19 = var19.2LsZdX;
                    var16 = var20.bind(var21)(var19);
 481:
                    var12['label'] = var16;
                    var19 = _closure1_slot1;
                    var20 = _closure1_slot2;
                    var16 = 11;
                    var16 = var20[var16];
                    var16 = var19.bind(var9)(var16);
                    var12['icon'] = var16;
                    var19 = _closure1_slot0;
                    var16 = 12;
                    var16 = var20[var16];
                    var16 = var19.bind(var9)(var16);
                    var16 = var16.UserMinusIcon;
                    var12['IconComponent'] = var16;
                    var16 = true;
                    var12['isDestructive'] = var16;
                    var16 = function onPress() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 13;
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
 559:
                    var13 = null;
                    if(!(var13 != var17)) { _fun0002_ip = 713; continue _fun0002 }
 568:
                    var16 = var3.buttons;
                    var15 = var16.push;
                    var12 = {};
                    var22 = _closure1_slot0;
                    var19 = _closure1_slot2;
                    var20 = var19[var11];
                    var20 = var22.bind(var9)(var20);
                    var21 = var20.intl;
                    var20 = var21.string;
                    var19 = var19[var11];
                    var19 = var22.bind(var9)(var19);
                    var19 = var19.t;
                    if(var18) { _fun0002_ip = 638; continue _fun0002 }
 625:
                    var18 = var19.My50nZ;
                    var18 = var20.bind(var21)(var18);
                    _fun0002_ip = 649; continue _fun0002;
 638:
                    var19 = var19.0D/6R0;
                    var18 = var20.bind(var21)(var19);
 649:
                    var12['label'] = var18;
                    var19 = _closure1_slot1;
                    var20 = _closure1_slot2;
                    var18 = 16;
                    var18 = var20[var18];
                    var18 = var19.bind(var9)(var18);
                    var12['icon'] = var18;
                    var19 = _closure1_slot0;
                    var18 = 17;
                    var18 = var20[var18];
                    var18 = var19.bind(var9)(var18);
                    var18 = var18.PhoneCallIcon;
                    var12['IconComponent'] = var18;
                    var12['onPress'] = var17;
                    var12 = var15.bind(var16)(var12);
 713:
                    var12 = var5.threadMetadata;
                    if(!(var13 != var12)) { _fun0002_ip = 735; continue _fun0002 }
 723:
                    var12 = var12.archived;
                    if(var12) { _fun0002_ip = 898; continue _fun0002 }
 735:
                    if(!var10) { _fun0002_ip = 1056; continue _fun0002 }
 741:
                    var13 = var3.buttons;
                    var12 = var13.push;
                    var10 = {};
                    var16 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var17 = var15[var11];
                    var17 = var16.bind(var9)(var17);
                    var18 = var17.intl;
                    var17 = var18.string;
                    var15 = var15[var11];
                    var15 = var16.bind(var9)(var15);
                    var16 = var15.t;
                    if(var8) { _fun0002_ip = 811; continue _fun0002 }
 798:
                    var15 = var16.wiIevb;
                    var15 = var17.bind(var18)(var15);
                    _fun0002_ip = 822; continue _fun0002;
 811:
                    var16 = var16.BTs4KS;
                    var15 = var17.bind(var18)(var16);
 822:
                    var10['label'] = var15;
                    var16 = _closure1_slot1;
                    var17 = _closure1_slot2;
                    var15 = 20;
                    var15 = var17[var15];
                    var15 = var16.bind(var9)(var15);
                    var10['icon'] = var15;
                    var16 = _closure1_slot0;
                    var15 = 21;
                    var15 = var17[var15];
                    var15 = var16.bind(var9)(var15);
                    var15 = var15.XLargeIcon;
                    var10['IconComponent'] = var15;
                    var15 = function onPress() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 13;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.archiveThread;
                        var3 = _closure3_slot0;
                        var2 = false;
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    var10['onPress'] = var15;
                    var10 = var12.bind(var13)(var10);
                    _fun0002_ip = 1056; continue _fun0002;
 898:
                    if(!var4) { _fun0002_ip = 1056; continue _fun0002 }
 904:
                    var12 = var3.buttons;
                    var10 = var12.push;
                    var4 = {};
                    var15 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var16 = var13[var11];
                    var16 = var15.bind(var9)(var16);
                    var17 = var16.intl;
                    var16 = var17.string;
                    var13 = var13[var11];
                    var13 = var15.bind(var9)(var13);
                    var15 = var13.t;
                    if(var8) { _fun0002_ip = 974; continue _fun0002 }
 961:
                    var13 = var15.S9E4Gx;
                    var13 = var16.bind(var17)(var13);
                    _fun0002_ip = 985; continue _fun0002;
 974:
                    var15 = var15.cnRubW;
                    var13 = var16.bind(var17)(var15);
 985:
                    var4['label'] = var13;
                    var15 = _closure1_slot1;
                    var16 = _closure1_slot2;
                    var13 = 18;
                    var13 = var16[var13];
                    var13 = var15.bind(var9)(var13);
                    var4['icon'] = var13;
                    var15 = _closure1_slot0;
                    var13 = 19;
                    var13 = var16[var13];
                    var13 = var15.bind(var9)(var13);
                    var13 = var13.ClockIcon;
                    var4['IconComponent'] = var13;
                    var13 = function onPress() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 13;
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
                    var4 = var10.bind(var12)(var4);
 1056:
                    if(!var2) { _fun0002_ip = 1327; continue _fun0002 }
 1062:
                    var4 = var5.isLockedThread;
                    var12 = var4.bind(var5)();
                    var10 = var3.buttons;
                    var5 = var10.push;
                    var4 = {};
                    var17 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var15 = var13[var11];
                    var15 = var17.bind(var9)(var15);
                    var16 = var15.intl;
                    var15 = var16.string;
                    var13 = var13[var11];
                    var13 = var17.bind(var9)(var13);
                    var13 = var13.t;
                    if(var12) { _fun0002_ip = 1229; continue _fun0002 }
 1129:
                    if(var8) { _fun0002_ip = 1145; continue _fun0002 }
 1132:
                    var12 = var13.HoCqm5;
                    var12 = var15.bind(var16)(var12);
                    _fun0002_ip = 1156; continue _fun0002;
 1145:
                    var17 = var13.Ur/0NT;
                    var12 = var15.bind(var16)(var17);
 1156:
                    var4['label'] = var12;
                    var17 = _closure1_slot1;
                    var18 = _closure1_slot2;
                    var12 = 22;
                    var12 = var18[var12];
                    var12 = var17.bind(var9)(var12);
                    var4['icon'] = var12;
                    var17 = _closure1_slot0;
                    var12 = 23;
                    var12 = var18[var12];
                    var12 = var17.bind(var9)(var12);
                    var12 = var12.LockIcon;
                    var4['IconComponent'] = var12;
                    var12 = function onPress() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 13;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.lockThread;
                        var2 = _closure3_slot0;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var4['onPress'] = var12;
                    var12 = var5.bind(var10)(var4);
                    _fun0002_ip = 1327; continue _fun0002;
 1229:
                    if(var8) { _fun0002_ip = 1245; continue _fun0002 }
 1232:
                    var12 = var13.jeyb/f;
                    var12 = var15.bind(var16)(var12);
                    _fun0002_ip = 1256; continue _fun0002;
 1245:
                    var13 = var13./OKSxs;
                    var12 = var15.bind(var16)(var13);
 1256:
                    var4['label'] = var12;
                    var13 = _closure1_slot1;
                    var15 = _closure1_slot2;
                    var12 = 22;
                    var12 = var15[var12];
                    var12 = var13.bind(var9)(var12);
                    var4['icon'] = var12;
                    var13 = _closure1_slot0;
                    var12 = 23;
                    var12 = var15[var12];
                    var12 = var13.bind(var9)(var12);
                    var12 = var12.LockIcon;
                    var4['IconComponent'] = var12;
                    var12 = function onPress() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 13;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.unlockThread;
                        var2 = _closure3_slot0;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var4['onPress'] = var12;
                    var4 = var5.bind(var10)(var4);
 1327:
                    if(!var2) { _fun0002_ip = 1487; continue _fun0002 }
 1333:
                    var5 = var3.buttons;
                    var4 = var5.push;
                    var2 = {};
                    var12 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var13 = var10[var11];
                    var13 = var12.bind(var9)(var13);
                    var15 = var13.intl;
                    var13 = var15.string;
                    var10 = var10[var11];
                    var10 = var12.bind(var9)(var10);
                    var12 = var10.t;
                    if(var8) { _fun0002_ip = 1405; continue _fun0002 }
 1390:
                    var10 = var12.2Mk1TE;
                    var10 = var13.bind(var15)(var10);
                    _fun0002_ip = 1416; continue _fun0002;
 1405:
                    var12 = var12.NP1yHB;
                    var10 = var13.bind(var15)(var12);
 1416:
                    var2['label'] = var10;
                    var12 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var10 = 24;
                    var10 = var13[var10];
                    var10 = var12.bind(var9)(var10);
                    var2['icon'] = var10;
                    var12 = _closure1_slot0;
                    var10 = 25;
                    var10 = var13[var10];
                    var10 = var12.bind(var9)(var10);
                    var10 = var10.PencilIcon;
                    var2['IconComponent'] = var10;
                    var10 = function onPress() {
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 26;
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
                    var2['onPress'] = var10;
                    var2 = var4.bind(var5)(var2);
 1487:
                    var5 = var3.buttons;
                    var4 = var5.push;
                    var2 = {};
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var10 = var13[var11];
                    var10 = var12.bind(var9)(var10);
                    var16 = var10.intl;
                    var15 = var16.string;
                    var10 = var13[var11];
                    var10 = var12.bind(var9)(var10);
                    var10 = var10.t;
                    var10 = var10.WqhZsr;
                    var10 = var15.bind(var16)(var10);
                    var2['label'] = var10;
                    var15 = _closure1_slot1;
                    var10 = 27;
                    var10 = var13[var10];
                    var10 = var15.bind(var9)(var10);
                    var2['icon'] = var10;
                    var10 = 28;
                    var10 = var13[var10];
                    var10 = var12.bind(var9)(var10);
                    var10 = var10.LinkIcon;
                    var2['IconComponent'] = var10;
                    var10 = false;
                    var2['isDestructive'] = var10;
                    var10 = function onPress() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 29;
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
                    var2['onPress'] = var10;
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
                    var10 = _closure1_slot2;
                    var12 = var10[var11];
                    var12 = var15.bind(var9)(var12);
                    var13 = var12.intl;
                    var12 = var13.string;
                    var10 = var10[var11];
                    var10 = var15.bind(var9)(var10);
                    var10 = var10.t;
                    if(var14) { _fun0002_ip = 1809; continue _fun0002 }
 1709:
                    if(var8) { _fun0002_ip = 1725; continue _fun0002 }
 1712:
                    var14 = var10.bUUd8v;
                    var14 = var12.bind(var13)(var14);
                    _fun0002_ip = 1736; continue _fun0002;
 1725:
                    var15 = var10.nP+YkZ;
                    var14 = var12.bind(var13)(var15);
 1736:
                    var2['label'] = var14;
                    var15 = _closure1_slot1;
                    var16 = _closure1_slot2;
                    var14 = 30;
                    var14 = var16[var14];
                    var14 = var15.bind(var9)(var14);
                    var2['icon'] = var14;
                    var15 = _closure1_slot0;
                    var14 = 31;
                    var14 = var16[var14];
                    var14 = var15.bind(var9)(var14);
                    var14 = var14.BellIcon;
                    var2['IconComponent'] = var14;
                    var14 = function onPress() {
                        var5 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 32;
                        var4 = var2[var1];
                        var1 = undefined;
                        var6 = var5.bind(var1)(var4);
                        var5 = var6.openLazy;
                        var4 = _closure1_slot0;
                        var3 = 34;
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
                    var2['onPress'] = var14;
                    var14 = var4.bind(var5)(var2);
                    _fun0002_ip = 1907; continue _fun0002;
 1809:
                    if(var8) { _fun0002_ip = 1825; continue _fun0002 }
 1812:
                    var8 = var10.Cq/TzM;
                    var8 = var12.bind(var13)(var8);
                    _fun0002_ip = 1836; continue _fun0002;
 1825:
                    var10 = var10.0JQfsL;
                    var8 = var12.bind(var13)(var10);
 1836:
                    var2['label'] = var8;
                    var10 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var8 = 35;
                    var8 = var12[var8];
                    var8 = var10.bind(var9)(var8);
                    var2['icon'] = var8;
                    var10 = _closure1_slot0;
                    var8 = 36;
                    var8 = var12[var8];
                    var8 = var10.bind(var9)(var8);
                    var8 = var8.BellSlashIcon;
                    var2['IconComponent'] = var8;
                    var8 = function onPress() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 13;
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
 1907:
                    var5 = var3.buttons;
                    var4 = var5.push;
                    var2 = {};
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var12 = var10[var11];
                    var12 = var8.bind(var9)(var12);
                    var13 = var12.intl;
                    var12 = var13.string;
                    var11 = var10[var11];
                    var11 = var8.bind(var9)(var11);
                    var11 = var11.t;
                    var11 = var11.h850Sk;
                    var11 = var12.bind(var13)(var11);
                    var2['label'] = var11;
                    var11 = _closure1_slot1;
                    var7 = 37;
                    var7 = var10[var7];
                    var7 = var11.bind(var9)(var7);
                    var2['icon'] = var7;
                    var7 = 38;
                    var7 = var10[var7];
                    var7 = var8.bind(var9)(var7);
                    var7 = var7.ChannelNotificationIcon;
                    var2['IconComponent'] = var7;
                    var6 = function onPress() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 39;
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
 0:
                    var2 = _closure2_slot4;
                    var3 = var2.length;
                    var2 = 0;
                    var2 = var2 !== var3;
                    if(var2) { _fun0003_ip = 25; continue _fun0003 }
 21:
                    var2 = _closure2_slot3;
 25:
                    if(var2) { _fun0003_ip = 38; continue _fun0003 }
 28:
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 38:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot13;
            var7 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 48;
            var1 = var12[var1];
            var1 = var7.bind(var4)(var1);
            var2 = var1.ActionSheet;
            var1 = {};
            var9 = _closure1_slot12;
            var5 = 49;
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
                var2 = 50;
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
 0:
                        var2 = arg1;
                        var8 = var2.label;
                        var12 = var2.icon;
                        var11 = var2.IconComponent;
                        var6 = var2.trailing;
                        var9 = var2.isDestructive;
                        var10 = var2.disableColor;
                        var2 = var2.onPress;
                        var _closure4_slot0 = var2;
                        var5 = _closure1_slot12;
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var13 = 50;
                        var2 = var2[var13];
                        var4 = undefined;
                        var2 = var3.bind(var4)(var2);
                        var3 = var2.ActionSheetRow;
                        var2 = {};
                        var2['label'] = var8;
                        var8 = 'default';
                        if(!var9) { _fun0004_ip = 100; continue _fun0004 }
 96:
                        var8 = 'danger';
 100:
                        var2['variant'] = var8;
                        var9 = _closure1_slot12;
                        var8 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var7 = var7[var13];
                        var7 = var8.bind(var4)(var7);
                        var7 = var7.ActionSheetRow;
                        var8 = var7.Icon;
                        var7 = {};
                        var7['source'] = var12;
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
            if(!var6) { _fun0001_ip = 959; continue _fun0001 }
 758:
            var10 = _closure1_slot12;
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var14 = 50;
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
            var20 = _closure1_slot1;
            var19 = 51;
            var19 = var18[var19];
            var19 = var20.bind(var4)(var19);
            var14['source'] = var19;
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
                var5 = 52;
                var5 = var4[var5];
                var6 = var3.bind(var1)(var5);
                var5 = var6.copy;
                var2 = _closure2_slot0;
                var2 = var2.id;
                var2 = var5.bind(var6)(var2);
                var2 = 53;
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
 959:
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
    var4 = native4;
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
    var4 = 54;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/threads/native/components/ThreadLongPressActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ThreadLongPressActionSheet(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var2 = arg1;
            var3 = var2.channelId;
            var _closure2_slot0 = var3;
            var6 = var2.onClose;
            var _closure2_slot1 = var6;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 40;
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
 0:
                    var3 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0006_ip = 23; continue _fun0006 }
 13:
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 23:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var4.bind(var8)(var1, var3);
            var1 = null;
            var3 = var1 != var7;
            if(!var3) { _fun0005_ip = 151; continue _fun0005 }
 126:
            var4 = _closure1_slot12;
            var3 = _closure1_slot14;
            var2 = {};
            var2['channel'] = var7;
            var2['onClose'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 151:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();