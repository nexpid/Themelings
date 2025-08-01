// app/uikit-native/guild_sidebar/VoiceUserItem.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
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
    var4 = metroImportAll;
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
    var10 = {'width': 16, 'height': 16, 'marginLeft': 6};
    var4['hangStatusIcon'] = var10;
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
            var25 = arg1;
            var1 = var25.member;
            var _closure2_slot0 = var1;
            var1 = var25.user;
            var _closure2_slot1 = var1;
            var1 = var25.guildId;
            var _closure2_slot2 = var1;
            var1 = var25.collapsed;
            var11 = var25.stream;
            var23 = var25.serverMute;
            var19 = var25.serverDeaf;
            var22 = var25.mute;
            var20 = var25.deaf;
            var21 = var25.localMute;
            var18 = var25.video;
            var17 = var25.disabled;
            var16 = var25.platform;
            var15 = var25.isInEmbeddedActivity;
            var14 = var25.voicePlatform;
            var13 = var25.hangStatusActivity;
            var27 = var25.ringing;
            var _closure2_slot3 = var27;
            var3 = _closure1_slot8;
            var5 = undefined;
            var6 = var3.bind(var5)();
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 10;
            var3 = var10[var3];
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
            var26 = var7.bind(var12)(var4, var3);
            var _closure2_slot4 = var26;
            var4 = 11;
            var3 = var10[var4];
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
            var24 = {};
            var24['ringing'] = var27;
            var24['shouldAnimate'] = var26;
            var26 = 0.4;
            var24['PULSE_ENDING_OPACITY'] = var26;
            var26 = var10[var4];
            var26 = var9.bind(var5)(var26);
            var26 = var26.withRepeat;
            var24['withRepeat'] = var26;
            var26 = var10[var4];
            var26 = var9.bind(var5)(var26);
            var26 = var26.withSequence;
            var24['withSequence'] = var26;
            var26 = var10[var4];
            var26 = var9.bind(var5)(var26);
            var26 = var26.withDelay;
            var24['withDelay'] = var26;
            var26 = 100;
            var24['INNER_PULSE_DELAY'] = var26;
            var26 = 12;
            var26 = var10[var26];
            var26 = var9.bind(var5)(var26);
            var26 = var26.withTiming;
            var24['withTiming'] = var26;
            var26 = 250;
            var24['PULSE_DURATION'] = var26;
            var26 = var10[var4];
            var26 = var9.bind(var5)(var26);
            var26 = var26.Easing;
            var24['Easing'] = var26;
            var26 = 0.1;
            var24['PULSE_STARTING_OPACITY'] = var26;
            var26 = 500;
            var24['FADE_DURATION'] = var26;
            var3['__closure'] = var24;
            var24 = 9430639809025.0;
            var3['__workletHash'] = var24;
            var24 = _closure1_slot9;
            var3['__initData'] = var24;
            var7 = var7.bind(var12)(var3);
            var3 = 13;
            var3 = var10[var3];
            var3 = var9.bind(var5)(var3);
            var12 = var3.ActivitiesControllerIconMobileExperiment;
            var10 = var12.useExperiment;
            var9 = {};
            var3 = 'VoiceUserItem';
            var9['location'] = var3;
            var3 = {};
            var24 = true;
            var3['autoTrackExposure'] = var24;
            var3 = var10.bind(var12)(var9, var3);
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
            if(var1) { _fun0001_ip = 1507; continue _fun0001 }
 498:
            var3 = _closure1_slot6;
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var4];
            var1 = var2.bind(var5)(var1);
            var2 = var1.View;
            var1 = {};
            var10 = var6.voiceState;
            var4 = new Array(3);
            var4[0] = var10;
            var10 = var17;
            if(!var10) { _fun0001_ip = 551; continue _fun0001 }
 546:
            var10 = var6.disabled;
 551:
            var4[1] = var10;
            var4[2] = var7;
            var1['style'] = var4;
            var24 = _closure1_slot5;
            var10 = _closure1_slot1;
            var26 = _closure1_slot2;
            var4 = 4;
            var4 = var26[var4];
            var7 = var10.bind(var5)(var4);
            var4 = {};
            var4['source'] = var9;
            var27 = _closure1_slot7;
            var4['size'] = var27;
            var7 = var24.bind(var5)(var7, var4);
            var4 = new Array(9);
            var4[0] = var7;
            var7 = 15;
            var7 = var26[var7];
            var10 = var10.bind(var5)(var7);
            var7 = {'variant': 'text-sm/medium', 'color': 'redesign-channel-name-muted-text'};
            var29 = var7;
            var28 = var25;
            var25 = copyDataProperties(var29, var28);
            var7 = var24.bind(var5)(var10, var7);
            var4[1] = var7;
            var7 = null;
            var10 = null;
            if(var17) { _fun0001_ip = 878; continue _fun0001 }
 671:
            if(var23) { _fun0001_ip = 813; continue _fun0001 }
 677:
            if(var21) { _fun0001_ip = 749; continue _fun0001 }
 680:
            var21 = null;
            if(!var22) { _fun0001_ip = 747; continue _fun0001 }
 685:
            var24 = _closure1_slot5;
            var23 = _closure1_slot0;
            var25 = _closure1_slot2;
            var22 = 17;
            var22 = var25[var22];
            var22 = var23.bind(var5)(var22);
            var23 = var22.MicrophoneSlashIcon;
            var22 = {'style': null, 'size': 'custom', 'color': 'redesign-channel-name-muted-text'};
            var25 = var6.voiceStateIcon;
            var22['style'] = var25;
            var21 = var24.bind(var5)(var23, var22);
 747:
            _fun0001_ip = 811; continue _fun0001;
 749:
            var24 = _closure1_slot5;
            var23 = _closure1_slot0;
            var25 = _closure1_slot2;
            var22 = 16;
            var22 = var25[var22];
            var22 = var23.bind(var5)(var22);
            var23 = var22.MicrophoneDenyIcon;
            var22 = {'style': null, 'size': 'custom', 'color': 'redesign-channel-name-muted-text'};
            var25 = var6.voiceStateIcon;
            var22['style'] = var25;
            var21 = var24.bind(var5)(var23, var22);
 811:
            _fun0001_ip = 875; continue _fun0001;
 813:
            var24 = _closure1_slot5;
            var23 = _closure1_slot0;
            var25 = _closure1_slot2;
            var22 = 16;
            var22 = var25[var22];
            var22 = var23.bind(var5)(var22);
            var23 = var22.MicrophoneDenyIcon;
            var22 = {'style': null, 'color': 'status-danger', 'size': 'custom'};
            var25 = var6.voiceStateIcon;
            var22['style'] = var25;
            var21 = var24.bind(var5)(var23, var22);
 875:
            var10 = var21;
 878:
            var4[2] = var10;
            var10 = null;
            if(var17) { _fun0001_ip = 1027; continue _fun0001 }
 890:
            if(var19) { _fun0001_ip = 962; continue _fun0001 }
 893:
            var19 = null;
            if(!var20) { _fun0001_ip = 960; continue _fun0001 }
 898:
            var22 = _closure1_slot5;
            var21 = _closure1_slot0;
            var23 = _closure1_slot2;
            var20 = 19;
            var20 = var23[var20];
            var20 = var21.bind(var5)(var20);
            var21 = var20.HeadphonesSlashIcon;
            var20 = {'style': null, 'size': 'custom', 'color': 'redesign-channel-name-muted-text'};
            var23 = var6.voiceStateIcon;
            var20['style'] = var23;
            var19 = var22.bind(var5)(var21, var20);
 960:
            _fun0001_ip = 1024; continue _fun0001;
 962:
            var22 = _closure1_slot5;
            var21 = _closure1_slot0;
            var23 = _closure1_slot2;
            var20 = 18;
            var20 = var23[var20];
            var20 = var21.bind(var5)(var20);
            var21 = var20.HeadphonesDenyIcon;
            var20 = {'style': null, 'color': 'status-danger', 'size': 'custom'};
            var23 = var6.voiceStateIcon;
            var20['style'] = var23;
            var19 = var22.bind(var5)(var21, var20);
 1024:
            var10 = var19;
 1027:
            var4[3] = var10;
            var10 = null;
            if(!var18) { _fun0001_ip = 1101; continue _fun0001 }
 1036:
            var10 = null;
            if(var17) { _fun0001_ip = 1101; continue _fun0001 }
 1041:
            var19 = _closure1_slot5;
            var18 = _closure1_slot0;
            var20 = _closure1_slot2;
            var17 = 20;
            var17 = var20[var17];
            var17 = var18.bind(var5)(var17);
            var18 = var17.VideoIcon;
            var17 = {'size': 'custom', 'color': 'redesign-channel-name-muted-text'};
            var20 = var6.voiceStateIcon;
            var17['style'] = var20;
            var10 = var19.bind(var5)(var18, var17);
 1101:
            var4[4] = var10;
            var10 = null;
            if(!var15) { _fun0001_ip = 1213; continue _fun0001 }
 1110:
            var15 = _closure1_slot1;
            var18 = _closure1_slot2;
            if(var12) { _fun0001_ip = 1130; continue _fun0001 }
 1121:
            var12 = 22;
            var12 = var18[var12];
            _fun0001_ip = 1137; continue _fun0001;
 1130:
            var17 = 21;
            var12 = var18[var17];
 1137:
            var21 = var15.bind(var5)(var12);
            var17 = _closure1_slot5;
            var19 = _closure1_slot1;
            var20 = _closure1_slot2;
            var18 = 23;
            var12 = var20[var18];
            var15 = var19.bind(var5)(var12);
            var12 = {};
            var12['source'] = var21;
            var18 = var20[var18];
            var18 = var19.bind(var5)(var18);
            var18 = var18.Sizes;
            var18 = var18.REFRESH_SMALL_16;
            var12['size'] = var18;
            var18 = var6.legacyVoiceStateIcon;
            var12['style'] = var18;
            var10 = var17.bind(var5)(var15, var12);
 1213:
            var4[5] = var10;
            var12 = _closure1_slot1;
            var10 = _closure1_slot2;
            var15 = 24;
            var10 = var10[var15];
            var12 = var12.bind(var5)(var10);
            var17 = var7 != var16;
            var10 = '';
            if(!var17) { _fun0001_ip = 1251; continue _fun0001 }
 1248:
            var10 = var16;
 1251:
            var19 = var12.bind(var5)(var10);
            if(!(var7 == var19)) { _fun0001_ip = 1288; continue _fun0001 }
 1260:
            var12 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var15];
            var12 = var12.bind(var5)(var10);
            var10 = var12.getConsoleIconForVoicePlatform;
            var19 = var10.bind(var12)(var14);
 1288:
            var12 = var7 != var19;
            var10 = null;
            if(!var12) { _fun0001_ip = 1368; continue _fun0001 }
 1297:
            var15 = _closure1_slot5;
            var17 = _closure1_slot1;
            var18 = _closure1_slot2;
            var16 = 23;
            var12 = var18[var16];
            var14 = var17.bind(var5)(var12);
            var12 = {};
            var12['source'] = var19;
            var16 = var18[var16];
            var16 = var17.bind(var5)(var16);
            var16 = var16.Sizes;
            var16 = var16.REFRESH_SMALL_16;
            var12['size'] = var16;
            var16 = var6.legacyVoiceStateIcon;
            var12['style'] = var16;
            var10 = var15.bind(var5)(var14, var12);
 1368:
            var4[6] = var10;
            var10 = null;
            if(!var11) { _fun0001_ip = 1419; continue _fun0001 }
 1377:
            var14 = _closure1_slot5;
            var12 = _closure1_slot1;
            var15 = _closure1_slot2;
            var11 = 25;
            var11 = var15[var11];
            var12 = var12.bind(var5)(var11);
            var11 = {};
            var15 = var6.legacyVoiceStateIcon;
            var11['style'] = var15;
            var10 = var14.bind(var5)(var12, var11);
 1419:
            var4[7] = var10;
            var10 = var7 == var13;
            var7 = null;
            if(var10) { _fun0001_ip = 1491; continue _fun0001 }
 1432:
            var12 = _closure1_slot5;
            var11 = _closure1_slot1;
            var14 = _closure1_slot2;
            var10 = 26;
            var10 = var14[var10];
            var11 = var11.bind(var5)(var10);
            var10 = {};
            var10['hangStatusActivity'] = var13;
            var13 = var6.hangStatusIcon;
            var10['textEmojiStyle'] = var13;
            var13 = var6.hangStatusIcon;
            var10['emojiStyle'] = var13;
            var7 = var12.bind(var5)(var11, var10);
 1491:
            var4[8] = var7;
            var1['children'] = var4;
            var1 = var3.bind(var5)(var2, var1);
            _fun0001_ip = 1577; continue _fun0001;
 1507:
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
 1577:
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = 27;
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