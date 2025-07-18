// app/uikit-native/guild_sidebar/VoiceUserItem.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var13 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var5 = var7[var1];
    var4 = native4;
    var1 = undefined;
    var8 = var4.bind(var1)(var5);
    var4 = 1;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.jsx;
    var _closure1_slot5 = var5;
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.AvatarSizes;
    var4 = var4.XSMALL_20;
    var _closure1_slot7 = var4;
    var4 = 7;
    var4 = var7[var4];
    var9 = var6.bind(var1)(var4);
    var5 = var9.createStyles;
    var4 = {};
    var10 = {'flex': 1, 'flexDirection': 'row', 'alignItems': 'center', 'paddingVertical': 5};
    var4['voiceState'] = var10;
    var10 = {};
    var11 = 0.5;
    var10['opacity'] = var11;
    var4['disabled'] = var10;
    var10 = {'marginTop': 4, 'marginRight': 8, 'height': 32, 'borderRadius': null, 'borderWidth': 4};
    var12 = 8;
    var11 = var7[var12];
    var11 = var13.bind(var1)(var11);
    var11 = var11.radii;
    var11 = var11.lg;
    var10['borderRadius'] = var11;
    var11 = var7[var12];
    var11 = var13.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_MOBILE_SECONDARY;
    var10['borderColor'] = var11;
    var4['voiceStateCollapsed'] = var10;
    var10 = {};
    var11 = 6;
    var10['marginLeft'] = var11;
    var14 = 9;
    var14 = var7[var14];
    var16 = var6.bind(var1)(var14);
    var15 = var16.makeSizeStyle;
    var14 = 14;
    var18 = var15.bind(var16)(var14);
    var19 = var10;
    var14 = copyDataProperties(var19, var18);
    var4['voiceStateIcon'] = var10;
    var10 = {};
    var12 = var7[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.REDESIGN_CHANNEL_NAME_MUTED_TEXT;
    var10['tintColor'] = var12;
    var10['marginLeft'] = var11;
    var4['legacyVoiceStateIcon'] = var10;
    var4 = var5.bind(var9)(var4);
    var _closure1_slot8 = var4;
    var4 = {};
    var5 = 'function VoiceUserItemTsx1(){const{ringing,shouldAnimate,PULSE_ENDING_OPACITY,withRepeat,withSequence,withDelay,INNER_PULSE_DELAY,withTiming,PULSE_DURATION,Easing,PULSE_STARTING_OPACITY,FADE_DURATION}=this.__closure;if(!ringing){return{opacity:1.0};}else if(!shouldAnimate){return{opacity:PULSE_ENDING_OPACITY};}return{opacity:withRepeat(withSequence(withDelay(INNER_PULSE_DELAY,withTiming(PULSE_ENDING_OPACITY,{duration:PULSE_DURATION,easing:Easing.bezier(0.4,0.0,1,1)})),withDelay(PULSE_DURATION,withTiming(PULSE_STARTING_OPACITY,{duration:FADE_DURATION}))),-1)};}';
    var4['code'] = var5;
    var _closure1_slot9 = var4;
    var5 = var8.memo;
    var4 = function VoiceUserItem(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var24 = arg1;
            var1 = var24.member;
            var _closure2_slot0 = var1;
            var1 = var24.user;
            var _closure2_slot1 = var1;
            var1 = var24.guildId;
            var _closure2_slot2 = var1;
            var1 = var24.collapsed;
            var10 = var24.stream;
            var22 = var24.serverMute;
            var18 = var24.serverDeaf;
            var21 = var24.mute;
            var19 = var24.deaf;
            var20 = var24.localMute;
            var17 = var24.video;
            var16 = var24.disabled;
            var15 = var24.platform;
            var14 = var24.isInEmbeddedActivity;
            var13 = var24.voicePlatform;
            var26 = var24.ringing;
            var _closure2_slot3 = var26;
            var3 = _closure1_slot8;
            var5 = undefined;
            var6 = var3.bind(var5)();
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 10;
            var3 = var11[var3];
            var12 = var9.bind(var5)(var3);
            var7 = var12.useStateFromStores;
            var3 = _closure1_slot4;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var1 = _closure1_slot4;
                var1 = var1.useReducedMotion;
                var1 = !var1;
                return var1;
            };
            var25 = var7.bind(var12)(var4, var3);
            var _closure2_slot4 = var25;
            var4 = 11;
            var3 = var11[var4];
            var12 = var9.bind(var5)(var3);
            var7 = var12.useAnimatedStyle;
            var3 = function l() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot3;
                    var3 = {};
                    if(var1) { _fun0002_ip = 27; continue _fun0002 }
 12:
                    var1 = 1;
                    var3['opacity'] = var1;
                    var1 = var3;
                    _fun0002_ip = 306; continue _fun0002;
 27:
                    var2 = _closure2_slot4;
                    if(var2) { _fun0002_ip = 56; continue _fun0002 }
 34:
                    var2 = 0.4;
                    var3['opacity'] = var2;
                    var2 = var3;
                    _fun0002_ip = 303; continue _fun0002;
 56:
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var10 = 11;
                    var4 = var15[var10];
                    var13 = undefined;
                    var7 = var14.bind(var13)(var4);
                    var6 = var7.withRepeat;
                    var4 = var15[var10];
                    var9 = var14.bind(var13)(var4);
                    var8 = var9.withSequence;
                    var4 = var15[var10];
                    var17 = var14.bind(var13)(var4);
                    var16 = var17.withDelay;
                    var4 = 12;
                    var5 = var15[var4];
                    var19 = var14.bind(var13)(var5);
                    var18 = var19.withTiming;
                    var11 = {};
                    var12 = 250;
                    var11['duration'] = var12;
                    var5 = var15[var10];
                    var5 = var14.bind(var13)(var5);
                    var23 = var5.Easing;
                    var22 = var23.bezier;
                    var5 = 0.4;
                    var26 = 0;
                    var20 = 1;
                    var28 = var23;
                    var27 = var5;
                    var25 = var20;
                    var24 = var20;
                    var20 = var28[var22](var27, var26, var25, var24, var23);
                    var11['easing'] = var20;
                    var11 = var18.bind(var19)(var5, var11);
                    var5 = 100;
                    var5 = var16.bind(var17)(var5, var11);
                    var10 = var15[var10];
                    var11 = var14.bind(var13)(var10);
                    var10 = var11.withDelay;
                    var4 = var15[var4];
                    var15 = var14.bind(var13)(var4);
                    var14 = var15.withTiming;
                    var13 = {};
                    var4 = 500;
                    var13['duration'] = var4;
                    var4 = 0.1;
                    var4 = var14.bind(var15)(var4, var13);
                    var4 = var10.bind(var11)(var12, var4);
                    var5 = var8.bind(var9)(var5, var4);
                    var4 = -1;
                    var4 = var6.bind(var7)(var5, var4);
                    var3['opacity'] = var4;
                    var2 = var3;
 303:
                    var1 = var2;
 306:
                    return var1;
                }
            };
            var23 = {};
            var23['ringing'] = var26;
            var23['shouldAnimate'] = var25;
            var25 = 0.4;
            var23['PULSE_ENDING_OPACITY'] = var25;
            var25 = var11[var4];
            var25 = var9.bind(var5)(var25);
            var25 = var25.withRepeat;
            var23['withRepeat'] = var25;
            var25 = var11[var4];
            var25 = var9.bind(var5)(var25);
            var25 = var25.withSequence;
            var23['withSequence'] = var25;
            var25 = var11[var4];
            var25 = var9.bind(var5)(var25);
            var25 = var25.withDelay;
            var23['withDelay'] = var25;
            var25 = 100;
            var23['INNER_PULSE_DELAY'] = var25;
            var25 = 12;
            var25 = var11[var25];
            var25 = var9.bind(var5)(var25);
            var25 = var25.withTiming;
            var23['withTiming'] = var25;
            var25 = 250;
            var23['PULSE_DURATION'] = var25;
            var25 = var11[var4];
            var25 = var9.bind(var5)(var25);
            var25 = var25.Easing;
            var23['Easing'] = var25;
            var25 = 0.1;
            var23['PULSE_STARTING_OPACITY'] = var25;
            var25 = 500;
            var23['FADE_DURATION'] = var25;
            var3['__closure'] = var23;
            var23 = 9430639809025.0;
            var3['__workletHash'] = var23;
            var23 = _closure1_slot9;
            var3['__initData'] = var23;
            var7 = var7.bind(var12)(var3);
            var3 = 13;
            var3 = var11[var3];
            var3 = var9.bind(var5)(var3);
            var12 = var3.ActivitiesControllerIconMobileExperiment;
            var11 = var12.useExperiment;
            var9 = {};
            var3 = 'VoiceUserItem';
            var9['location'] = var3;
            var3 = {};
            var23 = true;
            var3['autoTrackExposure'] = var23;
            var3 = var11.bind(var12)(var9, var3);
            var12 = var3.enabled;
            var9 = function getSource() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = _closure2_slot0;
                    var3 = null;
                    if(!(var3 != var1)) { _fun0003_ip = 27; continue _fun0003 }
 13:
                    var1 = _closure2_slot0;
                    var1 = var1.avatar;
                    if(!(var3 == var1)) { _fun0003_ip = 48; continue _fun0003 }
 27:
                    var4 = _closure2_slot1;
                    var3 = var4.getAvatarSource;
                    var1 = _closure2_slot2;
                    var1 = var3.bind(var4)(var1);
                    _fun0003_ip = 93; continue _fun0003;
 48:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 14;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.getGuildMemberAvatarSource;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var1 = var4.bind(var5)(var3, var2);
 93:
                    return var1;
                }
            };
            if(var1) { _fun0001_ip = 1429; continue _fun0001 }
 492:
            var3 = _closure1_slot6;
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var4];
            var1 = var2.bind(var5)(var1);
            var2 = var1.View;
            var1 = {};
            var11 = var6.voiceState;
            var4 = new Array(3);
            var4[0] = var11;
            var11 = var16;
            if(!var11) { _fun0001_ip = 545; continue _fun0001 }
 540:
            var11 = var6.disabled;
 545:
            var4[1] = var11;
            var4[2] = var7;
            var1['style'] = var4;
            var23 = _closure1_slot5;
            var11 = _closure1_slot1;
            var25 = _closure1_slot2;
            var4 = 4;
            var4 = var25[var4];
            var7 = var11.bind(var5)(var4);
            var4 = {};
            var4['source'] = var9;
            var26 = _closure1_slot7;
            var4['size'] = var26;
            var7 = var23.bind(var5)(var7, var4);
            var4 = new Array(8);
            var4[0] = var7;
            var7 = 15;
            var7 = var25[var7];
            var11 = var11.bind(var5)(var7);
            var7 = {'variant': 'text-sm/medium', 'color': 'redesign-channel-name-muted-text'};
            var28 = var7;
            var27 = var24;
            var24 = copyDataProperties(var28, var27);
            var7 = var23.bind(var5)(var11, var7);
            var4[1] = var7;
            var7 = null;
            var11 = null;
            if(var16) { _fun0001_ip = 872; continue _fun0001 }
 665:
            if(var22) { _fun0001_ip = 807; continue _fun0001 }
 671:
            if(var20) { _fun0001_ip = 743; continue _fun0001 }
 674:
            var20 = null;
            if(!var21) { _fun0001_ip = 741; continue _fun0001 }
 679:
            var23 = _closure1_slot5;
            var22 = _closure1_slot0;
            var24 = _closure1_slot2;
            var21 = 17;
            var21 = var24[var21];
            var21 = var22.bind(var5)(var21);
            var22 = var21.MicrophoneSlashIcon;
            var21 = {'style': null, 'size': 'custom', 'color': 'redesign-channel-name-muted-text'};
            var24 = var6.voiceStateIcon;
            var21['style'] = var24;
            var20 = var23.bind(var5)(var22, var21);
 741:
            _fun0001_ip = 805; continue _fun0001;
 743:
            var23 = _closure1_slot5;
            var22 = _closure1_slot0;
            var24 = _closure1_slot2;
            var21 = 16;
            var21 = var24[var21];
            var21 = var22.bind(var5)(var21);
            var22 = var21.MicrophoneDenyIcon;
            var21 = {'style': null, 'size': 'custom', 'color': 'redesign-channel-name-muted-text'};
            var24 = var6.voiceStateIcon;
            var21['style'] = var24;
            var20 = var23.bind(var5)(var22, var21);
 805:
            _fun0001_ip = 869; continue _fun0001;
 807:
            var23 = _closure1_slot5;
            var22 = _closure1_slot0;
            var24 = _closure1_slot2;
            var21 = 16;
            var21 = var24[var21];
            var21 = var22.bind(var5)(var21);
            var22 = var21.MicrophoneDenyIcon;
            var21 = {'style': null, 'color': 'status-danger', 'size': 'custom'};
            var24 = var6.voiceStateIcon;
            var21['style'] = var24;
            var20 = var23.bind(var5)(var22, var21);
 869:
            var11 = var20;
 872:
            var4[2] = var11;
            var11 = null;
            if(var16) { _fun0001_ip = 1021; continue _fun0001 }
 884:
            if(var18) { _fun0001_ip = 956; continue _fun0001 }
 887:
            var18 = null;
            if(!var19) { _fun0001_ip = 954; continue _fun0001 }
 892:
            var21 = _closure1_slot5;
            var20 = _closure1_slot0;
            var22 = _closure1_slot2;
            var19 = 19;
            var19 = var22[var19];
            var19 = var20.bind(var5)(var19);
            var20 = var19.HeadphonesSlashIcon;
            var19 = {'style': null, 'size': 'custom', 'color': 'redesign-channel-name-muted-text'};
            var22 = var6.voiceStateIcon;
            var19['style'] = var22;
            var18 = var21.bind(var5)(var20, var19);
 954:
            _fun0001_ip = 1018; continue _fun0001;
 956:
            var21 = _closure1_slot5;
            var20 = _closure1_slot0;
            var22 = _closure1_slot2;
            var19 = 18;
            var19 = var22[var19];
            var19 = var20.bind(var5)(var19);
            var20 = var19.HeadphonesDenyIcon;
            var19 = {'style': null, 'color': 'status-danger', 'size': 'custom'};
            var22 = var6.voiceStateIcon;
            var19['style'] = var22;
            var18 = var21.bind(var5)(var20, var19);
 1018:
            var11 = var18;
 1021:
            var4[3] = var11;
            var11 = null;
            if(!var17) { _fun0001_ip = 1095; continue _fun0001 }
 1030:
            var11 = null;
            if(var16) { _fun0001_ip = 1095; continue _fun0001 }
 1035:
            var18 = _closure1_slot5;
            var17 = _closure1_slot0;
            var19 = _closure1_slot2;
            var16 = 20;
            var16 = var19[var16];
            var16 = var17.bind(var5)(var16);
            var17 = var16.VideoIcon;
            var16 = {'size': 'custom', 'color': 'redesign-channel-name-muted-text'};
            var19 = var6.voiceStateIcon;
            var16['style'] = var19;
            var11 = var18.bind(var5)(var17, var16);
 1095:
            var4[4] = var11;
            var11 = null;
            if(!var14) { _fun0001_ip = 1207; continue _fun0001 }
 1104:
            var14 = _closure1_slot1;
            var17 = _closure1_slot2;
            if(var12) { _fun0001_ip = 1124; continue _fun0001 }
 1115:
            var12 = 22;
            var12 = var17[var12];
            _fun0001_ip = 1131; continue _fun0001;
 1124:
            var16 = 21;
            var12 = var17[var16];
 1131:
            var20 = var14.bind(var5)(var12);
            var16 = _closure1_slot5;
            var18 = _closure1_slot1;
            var19 = _closure1_slot2;
            var17 = 23;
            var12 = var19[var17];
            var14 = var18.bind(var5)(var12);
            var12 = {};
            var12['source'] = var20;
            var17 = var19[var17];
            var17 = var18.bind(var5)(var17);
            var17 = var17.Sizes;
            var17 = var17.REFRESH_SMALL_16;
            var12['size'] = var17;
            var17 = var6.legacyVoiceStateIcon;
            var12['style'] = var17;
            var11 = var16.bind(var5)(var14, var12);
 1207:
            var4[5] = var11;
            var12 = _closure1_slot1;
            var11 = _closure1_slot2;
            var14 = 24;
            var11 = var11[var14];
            var12 = var12.bind(var5)(var11);
            var16 = var7 != var15;
            var11 = '';
            if(!var16) { _fun0001_ip = 1245; continue _fun0001 }
 1242:
            var11 = var15;
 1245:
            var18 = var12.bind(var5)(var11);
            if(!(var7 == var18)) { _fun0001_ip = 1282; continue _fun0001 }
 1254:
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var14];
            var12 = var12.bind(var5)(var11);
            var11 = var12.getConsoleIconForVoicePlatform;
            var18 = var11.bind(var12)(var13);
 1282:
            var12 = var7 != var18;
            var11 = null;
            if(!var12) { _fun0001_ip = 1362; continue _fun0001 }
 1291:
            var14 = _closure1_slot5;
            var16 = _closure1_slot1;
            var17 = _closure1_slot2;
            var15 = 23;
            var12 = var17[var15];
            var13 = var16.bind(var5)(var12);
            var12 = {};
            var12['source'] = var18;
            var15 = var17[var15];
            var15 = var16.bind(var5)(var15);
            var15 = var15.Sizes;
            var15 = var15.REFRESH_SMALL_16;
            var12['size'] = var15;
            var15 = var6.legacyVoiceStateIcon;
            var12['style'] = var15;
            var11 = var14.bind(var5)(var13, var12);
 1362:
            var4[6] = var11;
            var7 = null;
            if(!var10) { _fun0001_ip = 1413; continue _fun0001 }
 1371:
            var12 = _closure1_slot5;
            var11 = _closure1_slot1;
            var13 = _closure1_slot2;
            var10 = 25;
            var10 = var13[var10];
            var11 = var11.bind(var5)(var10);
            var10 = {};
            var13 = var6.legacyVoiceStateIcon;
            var10['style'] = var13;
            var7 = var12.bind(var5)(var11, var10);
 1413:
            var4[7] = var7;
            var1['children'] = var4;
            var1 = var3.bind(var5)(var2, var1);
            _fun0001_ip = 1499; continue _fun0001;
 1429:
            var4 = _closure1_slot5;
            var3 = _closure1_slot3;
            var2 = {};
            var6 = var6.voiceStateCollapsed;
            var2['style'] = var6;
            var7 = _closure1_slot1;
            var10 = _closure1_slot2;
            var6 = 4;
            var6 = var10[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var6['source'] = var9;
            var8 = _closure1_slot7;
            var6['size'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 1499:
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = 26;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'uikit-native/guild_sidebar/VoiceUserItem.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var2 = function getVoiceUserHeight(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var2 = 5;
        var2 = var6[var2];
        var3 = undefined;
        var2 = var5.bind(var3)(var2);
        var2 = var2.TextStyleSheet;
        var2 = var2.text-sm/medium;
        var4 = var2.lineHeight;
        var2 = arg1;
        var4 = var4 * var2;
        var2 = 6;
        var2 = var6[var2];
        var2 = var5.bind(var3)(var2);
        var2 = var2.AVATAR_SIZE_MAP;
        var1 = _closure1_slot7;
        var3 = var2[var1];
        var1 = global;
        var2 = var1.Math;
        var1 = var2.max;
        var2 = var1.bind(var2)(var4, var3);
        var1 = 10;
        var1 = var2 + var1;
        return var1;
    };
    var3['getVoiceUserHeight'] = var2;
    return var1;
})();