// app/modules/user_profile/native/UserProfileVoiceSettings.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function UserVoiceSettings(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var6 = var2.user;
            var _closure2_slot0 = var6;
            var14 = var2.channel;
            var _closure2_slot1 = var14;
            var13 = var2.style;
            var2 = _closure1_slot11;
            var5 = undefined;
            var11 = var2.bind(var5)();
            var12 = _closure1_slot0;
            var20 = _closure1_slot2;
            var2 = 9;
            var2 = var20[var2];
            var3 = var12.bind(var5)(var2);
            var2 = var3.useUserProfileAnalyticsContext;
            var2 = var2.bind(var3)();
            var2 = var2.trackUserProfileAction;
            var _closure2_slot2 = var2;
            var2 = 10;
            var3 = var20[var2];
            var9 = var12.bind(var5)(var3);
            var7 = var9.useStateFromStoresObject;
            var3 = _closure1_slot5;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var1 = {};
                var6 = _closure1_slot5;
                var5 = var6.getLocalVolume;
                var3 = _closure2_slot0;
                var4 = var3.id;
                var4 = var5.bind(var6)(var4);
                var1['localVolume'] = var4;
                var6 = _closure1_slot5;
                var5 = var6.isLocalMute;
                var4 = var3.id;
                var4 = var5.bind(var6)(var4);
                var1['isLocalMute'] = var4;
                var6 = _closure1_slot5;
                var5 = var6.isLocalVideoDisabled;
                var4 = var3.id;
                var4 = var5.bind(var6)(var4);
                var1['isLocalVideoDisabled'] = var4;
                var5 = _closure1_slot5;
                var4 = var5.isLocalVideoAutoDisabled;
                var3 = var3.id;
                var3 = var4.bind(var5)(var3);
                var1['isLocalVideoAutoDisabled'] = var3;
                var3 = _closure1_slot5;
                var2 = var3.supportsDisableLocalVideo;
                var2 = var2.bind(var3)();
                var1['supportsDisableLocalVideo'] = var2;
                return var1;
            };
            var4 = var7.bind(var9)(var4, var3);
            var9 = var4.localVolume;
            var7 = var4.isLocalMute;
            var15 = var4.isLocalVideoDisabled;
            var _closure2_slot3 = var15;
            var3 = var4.isLocalVideoAutoDisabled;
            var _closure2_slot4 = var3;
            var4 = var4.supportsDisableLocalVideo;
            var10 = var20[var2];
            var18 = var12.bind(var5)(var10);
            var17 = var18.useStateFromStores;
            var10 = _closure1_slot6;
            var16 = new Array(1);
            var16[0] = var10;
            var10 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = var3.isPrivate;
                    var1 = var1.bind(var3)();
                    if(var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var5 = _closure1_slot6;
                    var4 = var5.can;
                    var3 = _closure1_slot8;
                    var3 = var3.SPEAK;
                    var2 = _closure2_slot1;
                    var1 = var4.bind(var5)(var3, var2);
case 2:
                    return var1;
                }
            };
            var10 = var17.bind(var18)(var16, var10);
            var17 = _closure1_slot1;
            var18 = 11;
            var16 = var20[var18];
            var19 = var17.bind(var5)(var16);
            var16 = var6.id;
            var6 = var14.id;
            var16 = var19.bind(var5)(var16, var6);
            var2 = var20[var2];
            var21 = var12.bind(var5)(var2);
            var19 = var21.useStateFromStores;
            var2 = _closure1_slot4;
            var6 = new Array(1);
            var6[0] = var2;
            var2 = function() {
                var3 = _closure1_slot4;
                var2 = var3.isLocalSoundboardMuted;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var19.bind(var21)(var6, var2);
            var2 = 12;
            var2 = var20[var2];
            var19 = var12.bind(var5)(var2);
            var12 = var19.useIsSecureFramesUIEnabled;
            var2 = {};
            var21 = var14.id;
            var2['channelId'] = var21;
            var2 = var12.bind(var19)(var2);
            var19 = _closure1_slot9;
            var12 = 13;
            var12 = var20[var12];
            var17 = var17.bind(var5)(var12);
            var12 = {};
            var20 = var11.volumeSlider;
            var12['style'] = var20;
            var12['value'] = var9;
            var9 = function onValueChange(arg1) {
                var4 = _closure2_slot2;
                var3 = {};
                var1 = 'SET_VOLUME';
                var3['action'] = var1;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 14;
                var3 = var5[var3];
                var5 = var4.bind(var1)(var3);
                var4 = var5.setLocalVolume;
                var2 = _closure2_slot0;
                var3 = var2.id;
                var2 = arg1;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var12['onValueChange'] = var9;
            var9 = 'set-volume';
            var12 = var19.bind(var5)(var17, var12, var9);
            var9 = new Array(1);
            var9[0] = var12;
            var10 = !var10;
            if(var10) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var12 = var14.isGuildStageVoice;
            var12 = var12.bind(var14)();
            if(!var12) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var17 = _closure1_slot0;
            var14 = _closure1_slot2;
            var14 = var14[var18];
            var14 = var17.bind(var5)(var14);
            var14 = var14.RequestToSpeakStates;
            var14 = var14.ON_STAGE;
            var12 = var16 !== var14;
case 6:
            var10 = var12;
case 4:
            if(var10) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var10 = var9.push;
            var16 = _closure1_slot9;
            var14 = _closure1_slot0;
            var17 = _closure1_slot2;
            var12 = 15;
            var12 = var17[var12];
            var12 = var14.bind(var5)(var12);
            var14 = var12.UserProfileFormRow;
            var12 = {};
            var18 = _closure1_slot0;
            var21 = _closure1_slot2;
            var17 = 16;
            var19 = var21[var17];
            var19 = var18.bind(var5)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var17 = var21[var17];
            var17 = var18.bind(var5)(var17);
            var18 = var17.t;
            if(var7) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var17 = var18.sWmtIy;
            var17 = var19.bind(var20)(var17);
            _fun0001_ip = 12; continue _fun0001;
case 10:
            var18 = var18.NHJxcn;
            var17 = var19.bind(var20)(var18);
case 12:
            var12['label'] = var17;
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            if(var7) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var7 = 18;
            var7 = var19[var7];
            var7 = var18.bind(var5)(var7);
            var7 = var7.MicrophoneIcon;
            _fun0001_ip = 15; continue _fun0001;
case 13:
            var17 = 17;
            var17 = var19[var17];
            var17 = var18.bind(var5)(var17);
            var7 = var17.MicrophoneSlashIcon;
case 15:
            var12['icon'] = var7;
            var7 = function onPress() {
                var4 = _closure2_slot2;
                var3 = {};
                var1 = 'MUTE';
                var3['action'] = var1;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 14;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.toggleLocalMute;
                var2 = _closure2_slot0;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var12['onPress'] = var7;
            var7 = 'mute';
            var7 = var16.bind(var5)(var14, var12, var7);
            var7 = var10.bind(var9)(var7);
case 8:
            var7 = var9.push;
            var17 = _closure1_slot9;
            var14 = _closure1_slot0;
            var12 = _closure1_slot2;
            var10 = 15;
            var12 = var12[var10];
            var12 = var14.bind(var5)(var12);
            var16 = var12.UserProfileFormRow;
            var14 = {};
            var19 = _closure1_slot0;
            var18 = _closure1_slot2;
            var12 = 16;
            var20 = var18[var12];
            var20 = var19.bind(var5)(var20);
            var21 = var20.intl;
            var20 = var21.string;
            var18 = var18[var12];
            var18 = var19.bind(var5)(var18);
            var19 = var18.t;
            if(var6) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var18 = var19.LxhEuL;
            var18 = var20.bind(var21)(var18);
            _fun0001_ip = 18; continue _fun0001;
case 16:
            var19 = var19.639hQU;
            var18 = var20.bind(var21)(var19);
case 18:
            var14['label'] = var18;
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            if(var6) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var6 = 20;
            var6 = var20[var6];
            var6 = var19.bind(var5)(var6);
            var6 = var6.SoundboardIcon;
            _fun0001_ip = 21; continue _fun0001;
case 19:
            var18 = 19;
            var18 = var20[var18];
            var18 = var19.bind(var5)(var18);
            var6 = var18.SoundboardSlashIcon;
case 21:
            var14['icon'] = var6;
            var6 = function onPress() {
                var4 = _closure2_slot2;
                var3 = {};
                var1 = 'MUTE_SOUNDBOARD';
                var3['action'] = var1;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 14;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.toggleLocalSoundboardMute;
                var2 = _closure2_slot0;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var14['onPress'] = var6;
            var6 = 'mute-soundboard';
            var6 = var17.bind(var5)(var16, var14, var6);
            var6 = var7.bind(var9)(var6);
            if(!var4) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var4 = var9.push;
            var14 = _closure1_slot9;
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var10];
            var6 = var7.bind(var5)(var6);
            var7 = var6.UserProfileFormRow;
            var6 = {};
            var17 = _closure1_slot0;
            var16 = _closure1_slot2;
            var18 = var16[var12];
            var18 = var17.bind(var5)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var16 = var16[var12];
            var16 = var17.bind(var5)(var16);
            var17 = var16.t;
            if(var15) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var16 = var17.4MMsWF;
            var16 = var18.bind(var19)(var16);
            _fun0001_ip = 26; continue _fun0001;
case 24:
            var17 = var17.xc+Ps7;
            var16 = var18.bind(var19)(var17);
case 26:
            var6['label'] = var16;
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            if(var15) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var15 = 22;
            var15 = var18[var15];
            var15 = var17.bind(var5)(var15);
            var15 = var15.VideoIcon;
            _fun0001_ip = 29; continue _fun0001;
case 27:
            var16 = 21;
            var16 = var18[var16];
            var16 = var17.bind(var5)(var16);
            var15 = var16.VideoSlashIcon;
case 29:
            var6['icon'] = var15;
            if(!var3) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var17 = _closure1_slot10;
            var16 = _closure1_slot3;
            var15 = {};
            var18 = var11.disableVideoSublabel;
            var15['style'] = var18;
            var20 = _closure1_slot9;
            var25 = _closure1_slot0;
            var22 = _closure1_slot2;
            var18 = 23;
            var18 = var22[var18];
            var18 = var25.bind(var5)(var18);
            var19 = var18.CircleErrorIcon;
            var18 = {'size': 'xxs', 'color': 'text-warning'};
            var19 = var20.bind(var5)(var19, var18);
            var18 = new Array(2);
            var18[0] = var19;
            var21 = _closure1_slot9;
            var19 = 24;
            var19 = var22[var19];
            var19 = var25.bind(var5)(var19);
            var20 = var19.Text;
            var19 = {'variant': 'text-xs/medium', 'color': 'text-warning'};
            var23 = var22[var12];
            var23 = var25.bind(var5)(var23);
            var24 = var23.intl;
            var23 = var24.string;
            var22 = var22[var12];
            var22 = var25.bind(var5)(var22);
            var22 = var22.t;
            var22 = var22.m2Hyj4;
            var22 = var23.bind(var24)(var22);
            var19['children'] = var22;
            var19 = var21.bind(var5)(var20, var19);
            var18[1] = var19;
            var15['children'] = var18;
            var3 = var17.bind(var5)(var16, var15);
case 30:
            var6['sublabel'] = var3;
            var3 = function onPress() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var4 = _closure2_slot2;
                    var2 = {};
                    var1 = 'DISABLE_VIDEO';
                    var2['action'] = var1;
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var4 = _closure2_slot4;
                    if(var4) { _fun0003_ip = 32; continue _fun0003 }
case 33:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 14;
                    var4 = var6[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.setDisableLocalVideo;
                    var4 = _closure2_slot0;
                    var4 = var4.id;
                    var3 = _closure2_slot3;
                    var7 = _closure1_slot7;
                    if(var3) { _fun0003_ip = 34; continue _fun0003 }
case 35:
                    var3 = var7.DISABLED;
                    _fun0003_ip = 36; continue _fun0003;
case 34:
                    var3 = var7.MANUAL_ENABLED;
case 36:
                    var3 = var5.bind(var6)(var4, var3);
                    _fun0003_ip = 37; continue _fun0003;
case 32:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 25;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.confirmVideoUnstableConnection;
                    var2 = function() {
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 14;
                        var3 = var3[var2];
                        var2 = undefined;
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.setDisableLocalVideo;
                        var2 = _closure2_slot0;
                        var2 = var2.id;
                        var1 = _closure1_slot7;
                        var1 = var1.MANUAL_ENABLED;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var2 = var3.bind(var4)(var2);
case 37:
                    return var1;
                }
            };
            var6['onPress'] = var3;
            var3 = 'disable-video';
            var3 = var14.bind(var5)(var7, var6, var3);
            var3 = var4.bind(var9)(var3);
case 22:
            if(!var2) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var2 = var9.push;
            var6 = _closure1_slot9;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var3 = var15[var10];
            var3 = var14.bind(var5)(var3);
            var4 = var3.UserProfileFormRow;
            var3 = {};
            var7 = var15[var12];
            var7 = var14.bind(var5)(var7);
            var17 = var7.intl;
            var16 = var17.string;
            var7 = var15[var12];
            var7 = var14.bind(var5)(var7);
            var7 = var7.t;
            var7 = var7.8ErYvb;
            var7 = var16.bind(var17)(var7);
            var3['label'] = var7;
            var7 = 26;
            var7 = var15[var7];
            var7 = var14.bind(var5)(var7);
            var7 = var7.ShieldLockIcon;
            var3['icon'] = var7;
            var7 = 27;
            var7 = var15[var7];
            var7 = var14.bind(var5)(var7);
            var7 = var7.FormArrow;
            var3['hint'] = var7;
            var1 = function onPress() {
                var4 = _closure2_slot2;
                var3 = {};
                var1 = 'VIEW_SECURE_FRAMES_VERIFICATION_CODE';
                var3['action'] = var1;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 28;
                var3 = var5[var3];
                var6 = var4.bind(var1)(var3);
                var3 = var6.hideActionSheet;
                var3 = var3.bind(var6)();
                var3 = 29;
                var3 = var5[var3];
                var6 = var4.bind(var1)(var3);
                var5 = var6.openSecureFramesUserVerificationModal;
                var3 = _closure2_slot0;
                var4 = var3.id;
                var2 = _closure2_slot1;
                var3 = var2.id;
                var2 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 30;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.validateSecureFramesKeyConsistent;
                    var1 = {};
                    var5 = _closure2_slot0;
                    var5 = var5.id;
                    var1['userId'] = var5;
                    var4 = _closure2_slot1;
                    var5 = var4.id;
                    var1['channelId'] = var5;
                    var4 = var4.guild_id;
                    var1['guildId'] = var4;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var2 = var5.bind(var6)(var4, var3, var2);
                return var1;
            };
            var3['onPress'] = var1;
            var1 = 'view-secure-frames-verification-code';
            var1 = var6.bind(var5)(var4, var3, var1);
            var1 = var2.bind(var9)(var1);
case 38:
            var3 = var9.length;
            var2 = 0;
            var1 = null;
            if(!(var2 !== var3)) { _fun0001_ip = 40; continue _fun0001 }
case 41:
            var4 = _closure1_slot9;
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = var6[var10];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var14 = var11.card;
            var7 = new Array(2);
            var7[0] = var14;
            var7[1] = var13;
            var2['style'] = var7;
            var7 = _closure1_slot0;
            var13 = var6[var12];
            var13 = var7.bind(var5)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var12 = var6[var12];
            var12 = var7.bind(var5)(var12);
            var12 = var12.t;
            var12 = var12.NiTd0d;
            var12 = var13.bind(var14)(var12);
            var2['title'] = var12;
            var11 = var11.cardTitle;
            var2['titleStyle'] = var11;
            var8 = _closure1_slot9;
            var6 = var6[var10];
            var6 = var7.bind(var5)(var6);
            var7 = var6.UserProfileCardRows;
            var6 = {};
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 40:
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function CurrentUserVoiceSettings(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var1 = var2.user;
            var7 = var2.channel;
            var _closure2_slot0 = var7;
            var8 = var2.style;
            var2 = _closure1_slot11;
            var5 = undefined;
            var6 = var2.bind(var5)();
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 9;
            var2 = var3[var2];
            var10 = var4.bind(var5)(var2);
            var2 = var10.useUserProfileAnalyticsContext;
            var2 = var2.bind(var10)();
            var2 = var2.trackUserProfileAction;
            var _closure2_slot1 = var2;
            var2 = 10;
            var10 = var3[var2];
            var13 = var4.bind(var5)(var10);
            var12 = var13.useStateFromStores;
            var10 = _closure1_slot5;
            var11 = new Array(1);
            var11[0] = var10;
            var10 = function() {
                var2 = _closure1_slot5;
                var1 = var2.isSelfMute;
                var1 = var1.bind(var2)();
                return var1;
            };
            var13 = var12.bind(var13)(var11, var10);
            var2 = var3[var2];
            var11 = var4.bind(var5)(var2);
            var10 = var11.useStateFromStores;
            var2 = _closure1_slot6;
            var4 = new Array(1);
            var4[0] = var2;
            var2 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = var3.isPrivate;
                    var1 = var1.bind(var3)();
                    if(var1) { _fun0005_ip = 2; continue _fun0005 }
case 3:
                    var5 = _closure1_slot6;
                    var4 = var5.can;
                    var3 = _closure1_slot8;
                    var3 = var3.SPEAK;
                    var2 = _closure2_slot0;
                    var1 = var4.bind(var5)(var3, var2);
case 2:
                    return var1;
                }
            };
            var2 = var10.bind(var11)(var4, var2);
            var4 = _closure1_slot1;
            var10 = 11;
            var3 = var3[var10];
            var4 = var4.bind(var5)(var3);
            var3 = var1.id;
            var1 = var7.id;
            var3 = var4.bind(var5)(var3, var1);
            var1 = null;
            if(!var2) { _fun0004_ip = 42; continue _fun0004 }
case 43:
            var2 = var7.isGuildStageVoice;
            var2 = var2.bind(var7)();
            if(!var2) { _fun0004_ip = 44; continue _fun0004 }
case 45:
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var10];
            var2 = var7.bind(var5)(var2);
            var2 = var2.RequestToSpeakStates;
            var2 = var2.ON_STAGE;
            var1 = null;
            if(!(var3 === var2)) { _fun0004_ip = 42; continue _fun0004 }
case 44:
            var4 = _closure1_slot9;
            var3 = _closure1_slot1;
            var15 = _closure1_slot2;
            var10 = 15;
            var2 = var15[var10];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var11 = var6.card;
            var7 = new Array(2);
            var7[0] = var11;
            var7[1] = var8;
            var2['style'] = var7;
            var11 = _closure1_slot0;
            var19 = 16;
            var7 = var15[var19];
            var7 = var11.bind(var5)(var7);
            var12 = var7.intl;
            var8 = var12.string;
            var7 = var15[var19];
            var7 = var11.bind(var5)(var7);
            var7 = var7.t;
            var7 = var7.NiTd0d;
            var7 = var8.bind(var12)(var7);
            var2['title'] = var7;
            var6 = var6.cardTitle;
            var2['titleStyle'] = var6;
            var8 = _closure1_slot9;
            var6 = var15[var10];
            var6 = var11.bind(var5)(var6);
            var7 = var6.UserProfileCardRows;
            var6 = {};
            var12 = _closure1_slot9;
            var10 = var15[var10];
            var10 = var11.bind(var5)(var10);
            var11 = var10.UserProfileFormRow;
            var10 = {};
            var16 = _closure1_slot0;
            var15 = _closure1_slot2;
            var17 = var15[var19];
            var17 = var16.bind(var5)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var15 = var15[var19];
            var15 = var16.bind(var5)(var15);
            var16 = var15.t;
            if(var13) { _fun0004_ip = 46; continue _fun0004 }
case 47:
            var15 = var16.sWmtIy;
            var15 = var17.bind(var18)(var15);
            _fun0004_ip = 48; continue _fun0004;
case 46:
            var16 = var16.NHJxcn;
            var15 = var17.bind(var18)(var16);
case 48:
            var10['label'] = var15;
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            if(var13) { _fun0004_ip = 49; continue _fun0004 }
case 50:
            var13 = 18;
            var13 = var16[var13];
            var13 = var15.bind(var5)(var13);
            var13 = var13.MicrophoneIcon;
            _fun0004_ip = 51; continue _fun0004;
case 49:
            var14 = 17;
            var14 = var16[var14];
            var14 = var15.bind(var5)(var14);
            var13 = var14.MicrophoneSlashIcon;
case 51:
            var10['icon'] = var13;
            var9 = function onPress() {
                var3 = _closure2_slot1;
                var2 = {};
                var1 = 'MUTE';
                var2['action'] = var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 14;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.toggleSelfMute;
                var2 = var2.bind(var3)();
                return var1;
            };
            var10['onPress'] = var9;
            var9 = 'mute';
            var9 = var12.bind(var5)(var11, var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 42:
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var10 = 0;
    var8 = var6[var10];
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
    var4 = var4.VideoToggleState;
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Permissions;
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot9 = var7;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['paddingBottom'] = var10;
    var4['card'] = var9;
    var9 = {};
    var9['marginBottom'] = var10;
    var4['cardTitle'] = var9;
    var9 = {};
    var10 = 20;
    var9['paddingVertical'] = var10;
    var4['volumeSlider'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center', 'gap': 4};
    var4['disableVideoSublabel'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = 31;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfileVoiceSettings.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function UserProfileVoiceSettings(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = arg1;
            var1 = var2.user;
            var7 = var2.currentUser;
            var6 = var2.channel;
            var2 = var2.style;
            var4 = var1.id;
            var3 = var7.id;
            if(!(var4 !== var3)) { _fun0006_ip = 52; continue _fun0006 }
case 53:
            var5 = _closure1_slot9;
            var4 = _closure1_slot12;
            var3 = {};
            var3['user'] = var1;
            var3['channel'] = var6;
            var3['style'] = var2;
            var1 = undefined;
            var1 = var5.bind(var1)(var4, var3);
            _fun0006_ip = 54; continue _fun0006;
case 52:
            var5 = _closure1_slot9;
            var4 = _closure1_slot13;
            var3 = {};
            var3['user'] = var7;
            var3['channel'] = var6;
            var3['style'] = var2;
            var2 = undefined;
            var1 = var5.bind(var2)(var4, var3);
case 54:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();