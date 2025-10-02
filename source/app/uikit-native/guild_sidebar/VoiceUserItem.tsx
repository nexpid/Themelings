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
case 0:
            var26 = arg1;
            var1 = var26.member;
            var _closure2_slot0 = var1;
            var14 = var26.user;
            var _closure2_slot1 = var14;
            var1 = var26.guildId;
            var _closure2_slot2 = var1;
            var1 = var26.collapsed;
            var11 = var26.stream;
            var24 = var26.serverMute;
            var20 = var26.serverDeaf;
            var23 = var26.mute;
            var21 = var26.deaf;
            var22 = var26.localMute;
            var19 = var26.video;
            var18 = var26.disabled;
            var17 = var26.platform;
            var16 = var26.isInEmbeddedActivity;
            var15 = var26.voicePlatform;
            var13 = var26.hangStatusActivity;
            var28 = var26.ringing;
            var _closure2_slot3 = var28;
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
            var27 = var7.bind(var12)(var4, var3);
            var _closure2_slot4 = var27;
            var4 = 11;
            var3 = var10[var4];
            var12 = var9.bind(var5)(var3);
            var7 = var12.useAnimatedStyle;
            var3 = function l() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot3;
                    var3 = {};
                    if(var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var1 = 1;
                    var3['opacity'] = var1;
                    var1 = var3;
                    _fun0002_ip = 4; continue _fun0002;
case 2:
                    var2 = _closure2_slot4;
                    if(var2) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                    var2 = 0.4;
                    var3['opacity'] = var2;
                    var2 = var3;
                    _fun0002_ip = 7; continue _fun0002;
case 5:
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
case 7:
                    var1 = var2;
case 4:
                    return var1;
                }
            };
            var25 = {};
            var25['ringing'] = var28;
            var25['shouldAnimate'] = var27;
            var27 = 0.4;
            var25['PULSE_ENDING_OPACITY'] = var27;
            var27 = var10[var4];
            var27 = var9.bind(var5)(var27);
            var27 = var27.withRepeat;
            var25['withRepeat'] = var27;
            var27 = var10[var4];
            var27 = var9.bind(var5)(var27);
            var27 = var27.withSequence;
            var25['withSequence'] = var27;
            var27 = var10[var4];
            var27 = var9.bind(var5)(var27);
            var27 = var27.withDelay;
            var25['withDelay'] = var27;
            var27 = 100;
            var25['INNER_PULSE_DELAY'] = var27;
            var27 = 12;
            var27 = var10[var27];
            var27 = var9.bind(var5)(var27);
            var27 = var27.withTiming;
            var25['withTiming'] = var27;
            var27 = 250;
            var25['PULSE_DURATION'] = var27;
            var27 = var10[var4];
            var27 = var9.bind(var5)(var27);
            var27 = var27.Easing;
            var25['Easing'] = var27;
            var27 = 0.1;
            var25['PULSE_STARTING_OPACITY'] = var27;
            var27 = 500;
            var25['FADE_DURATION'] = var27;
            var3['__closure'] = var25;
            var25 = 9430639809025.0;
            var3['__workletHash'] = var25;
            var25 = _closure1_slot9;
            var3['__initData'] = var25;
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
            var25 = true;
            var3['autoTrackExposure'] = var25;
            var3 = var10.bind(var12)(var9, var3);
            var12 = var3.enabled;
            var9 = function getSource() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var3 = null;
                    if(!(var3 != var1)) { _fun0003_ip = 2; continue _fun0003 }
case 8:
                    var1 = _closure2_slot0;
                    var1 = var1.avatar;
                    if(!(var3 == var1)) { _fun0003_ip = 9; continue _fun0003 }
case 2:
                    var4 = _closure2_slot1;
                    var3 = var4.getAvatarSource;
                    var1 = _closure2_slot2;
                    var1 = var3.bind(var4)(var1);
                    _fun0003_ip = 10; continue _fun0003;
case 9:
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
case 10:
                    return var1;
                }
            };
            if(var1) { _fun0001_ip = 11; continue _fun0001 }
case 12:
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
            var10 = var18;
            if(!var10) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var10 = var6.disabled;
case 13:
            var4[1] = var10;
            var4[2] = var7;
            var1['style'] = var4;
            var25 = _closure1_slot5;
            var10 = _closure1_slot1;
            var27 = _closure1_slot2;
            var4 = 4;
            var4 = var27[var4];
            var7 = var10.bind(var5)(var4);
            var4 = {};
            var4['source'] = var9;
            var28 = _closure1_slot7;
            var4['size'] = var28;
            var7 = var25.bind(var5)(var7, var4);
            var4 = new Array(9);
            var4[0] = var7;
            var7 = 15;
            var7 = var27[var7];
            var10 = var10.bind(var5)(var7);
            var7 = {'variant': 'text-sm/medium', 'color': 'redesign-channel-name-muted-text'};
            var30 = var7;
            var29 = var26;
            var26 = copyDataProperties(var30, var29);
            var7 = var25.bind(var5)(var10, var7);
            var4[1] = var7;
            var7 = null;
            var10 = null;
            if(var18) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            if(var24) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            if(var22) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var22 = null;
            if(!var23) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var25 = _closure1_slot5;
            var24 = _closure1_slot0;
            var26 = _closure1_slot2;
            var23 = 17;
            var23 = var26[var23];
            var23 = var24.bind(var5)(var23);
            var24 = var23.MicrophoneSlashIcon;
            var23 = {'style': null, 'size': 'custom', 'color': 'redesign-channel-name-muted-text'};
            var26 = var6.voiceStateIcon;
            var23['style'] = var26;
            var22 = var25.bind(var5)(var24, var23);
case 21:
            _fun0001_ip = 23; continue _fun0001;
case 19:
            var25 = _closure1_slot5;
            var24 = _closure1_slot0;
            var26 = _closure1_slot2;
            var23 = 16;
            var23 = var26[var23];
            var23 = var24.bind(var5)(var23);
            var24 = var23.MicrophoneDenyIcon;
            var23 = {'style': null, 'size': 'custom', 'color': 'redesign-channel-name-muted-text'};
            var26 = var6.voiceStateIcon;
            var23['style'] = var26;
            var22 = var25.bind(var5)(var24, var23);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 17:
            var25 = _closure1_slot5;
            var24 = _closure1_slot0;
            var26 = _closure1_slot2;
            var23 = 16;
            var23 = var26[var23];
            var23 = var24.bind(var5)(var23);
            var24 = var23.MicrophoneDenyIcon;
            var23 = {'style': null, 'color': 'status-danger', 'size': 'custom'};
            var26 = var6.voiceStateIcon;
            var23['style'] = var26;
            var22 = var25.bind(var5)(var24, var23);
case 24:
            var10 = var22;
case 15:
            var4[2] = var10;
            var10 = null;
            if(var18) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            if(var20) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var20 = null;
            if(!var21) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var23 = _closure1_slot5;
            var22 = _closure1_slot0;
            var24 = _closure1_slot2;
            var21 = 19;
            var21 = var24[var21];
            var21 = var22.bind(var5)(var21);
            var22 = var21.HeadphonesSlashIcon;
            var21 = {'style': null, 'size': 'custom', 'color': 'redesign-channel-name-muted-text'};
            var24 = var6.voiceStateIcon;
            var21['style'] = var24;
            var20 = var23.bind(var5)(var22, var21);
case 29:
            _fun0001_ip = 31; continue _fun0001;
case 27:
            var23 = _closure1_slot5;
            var22 = _closure1_slot0;
            var24 = _closure1_slot2;
            var21 = 18;
            var21 = var24[var21];
            var21 = var22.bind(var5)(var21);
            var22 = var21.HeadphonesDenyIcon;
            var21 = {'style': null, 'color': 'status-danger', 'size': 'custom'};
            var24 = var6.voiceStateIcon;
            var21['style'] = var24;
            var20 = var23.bind(var5)(var22, var21);
case 31:
            var10 = var20;
case 25:
            var4[3] = var10;
            var10 = null;
            if(!var19) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var10 = null;
            if(var18) { _fun0001_ip = 32; continue _fun0001 }
case 34:
            var20 = _closure1_slot5;
            var19 = _closure1_slot0;
            var21 = _closure1_slot2;
            var18 = 20;
            var18 = var21[var18];
            var18 = var19.bind(var5)(var18);
            var19 = var18.VideoIcon;
            var18 = {'size': 'custom', 'color': 'redesign-channel-name-muted-text'};
            var21 = var6.voiceStateIcon;
            var18['style'] = var21;
            var10 = var20.bind(var5)(var19, var18);
case 32:
            var4[4] = var10;
            var10 = null;
            if(!var16) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var16 = _closure1_slot1;
            var19 = _closure1_slot2;
            if(var12) { _fun0001_ip = 37; continue _fun0001 }
case 38:
            var12 = 22;
            var12 = var19[var12];
            _fun0001_ip = 39; continue _fun0001;
case 37:
            var18 = 21;
            var12 = var19[var18];
case 39:
            var22 = var16.bind(var5)(var12);
            var18 = _closure1_slot5;
            var20 = _closure1_slot1;
            var21 = _closure1_slot2;
            var19 = 23;
            var12 = var21[var19];
            var16 = var20.bind(var5)(var12);
            var12 = {};
            var12['source'] = var22;
            var19 = var21[var19];
            var19 = var20.bind(var5)(var19);
            var19 = var19.Sizes;
            var19 = var19.REFRESH_SMALL_16;
            var12['size'] = var19;
            var19 = var6.legacyVoiceStateIcon;
            var12['style'] = var19;
            var10 = var18.bind(var5)(var16, var12);
case 35:
            var4[5] = var10;
            var12 = _closure1_slot1;
            var10 = _closure1_slot2;
            var16 = 24;
            var10 = var10[var16];
            var12 = var12.bind(var5)(var10);
            var18 = var7 != var17;
            var10 = '';
            if(!var18) { _fun0001_ip = 40; continue _fun0001 }
case 41:
            var10 = var17;
case 40:
            var20 = var12.bind(var5)(var10);
            if(!(var7 == var20)) { _fun0001_ip = 42; continue _fun0001 }
case 43:
            var12 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var16];
            var12 = var12.bind(var5)(var10);
            var10 = var12.getConsoleIconForVoicePlatform;
            var20 = var10.bind(var12)(var15);
case 42:
            var12 = var7 != var20;
            var10 = null;
            if(!var12) { _fun0001_ip = 44; continue _fun0001 }
case 45:
            var16 = _closure1_slot5;
            var18 = _closure1_slot1;
            var19 = _closure1_slot2;
            var17 = 23;
            var12 = var19[var17];
            var15 = var18.bind(var5)(var12);
            var12 = {};
            var12['source'] = var20;
            var17 = var19[var17];
            var17 = var18.bind(var5)(var17);
            var17 = var17.Sizes;
            var17 = var17.REFRESH_SMALL_16;
            var12['size'] = var17;
            var17 = var6.legacyVoiceStateIcon;
            var12['style'] = var17;
            var10 = var16.bind(var5)(var15, var12);
case 44:
            var4[6] = var10;
            var10 = null;
            if(!var11) { _fun0001_ip = 46; continue _fun0001 }
case 47:
            var15 = _closure1_slot5;
            var12 = _closure1_slot1;
            var16 = _closure1_slot2;
            var11 = 25;
            var11 = var16[var11];
            var12 = var12.bind(var5)(var11);
            var11 = {};
            var16 = var6.legacyVoiceStateIcon;
            var11['style'] = var16;
            var10 = var15.bind(var5)(var12, var11);
case 46:
            var4[7] = var10;
            var10 = var7 == var13;
            var7 = null;
            if(var10) { _fun0001_ip = 48; continue _fun0001 }
case 49:
            var12 = _closure1_slot5;
            var11 = _closure1_slot1;
            var15 = _closure1_slot2;
            var10 = 26;
            var10 = var15[var10];
            var11 = var11.bind(var5)(var10);
            var10 = {};
            var14 = var14.id;
            var10['userId'] = var14;
            var14 = 16;
            var10['size'] = var14;
            var10['hangStatusActivity'] = var13;
            var13 = var6.hangStatusIcon;
            var10['textEmojiStyle'] = var13;
            var13 = var6.hangStatusIcon;
            var10['emojiStyle'] = var13;
            var7 = var12.bind(var5)(var11, var10);
case 48:
            var4[8] = var7;
            var1['children'] = var4;
            var1 = var3.bind(var5)(var2, var1);
            _fun0001_ip = 50; continue _fun0001;
case 11:
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
case 50:
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