// app/modules/guild_sidebar/native/VoiceUserItem.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
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
        var11 = var11.BACKGROUND_BASE_LOW;
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
        var15 = copyDataProperties(var19, var18);
        var4['voiceStateIcon'] = var10;
        var10 = {};
        var12 = var7[var12];
        var12 = var13.bind(var1)(var12);
        var12 = var12.colors;
        var12 = var12.REDESIGN_CHANNEL_NAME_MUTED_TEXT;
        var10['tintColor'] = var12;
        var10['marginLeft'] = var11;
        var4['legacyVoiceStateIcon'] = var10;
        var13 = 16;
        var10 = {'width': 16, 'height': 16, 'marginLeft': 6};
        var4['hangStatusIcon'] = var10;
        var10 = {};
        var12 = 10;
        var15 = var7[var12];
        var16 = var6.bind(var1)(var15);
        var15 = var16.isIOS;
        var15 = var15.bind(var16)();
        if(!var15) { _fun0001_ip = 2; continue _fun0001 }
case 3:
        var13 = var14;
case 2:
        var10['fontSize'] = var13;
        var12 = var7[var12];
        var13 = var6.bind(var1)(var12);
        var12 = var13.isIOS;
        var13 = var12.bind(var13)();
        var12 = undefined;
        if(!var13) { _fun0001_ip = 4; continue _fun0001 }
case 5:
        var12 = 20;
case 4:
        var10['lineHeight'] = var12;
        var10['marginLeft'] = var11;
        var4['hangStatusIconText'] = var10;
        var4 = var5.bind(var9)(var4);
        var _closure1_slot8 = var4;
        var4 = {};
        var5 = 'function VoiceUserItemTsx1(){const{ringing,shouldAnimate,PULSE_ENDING_OPACITY,withRepeat,withSequence,withDelay,INNER_PULSE_DELAY,withTiming,PULSE_DURATION,Easing,PULSE_STARTING_OPACITY,FADE_DURATION}=this.__closure;if(!ringing){return{opacity:1.0};}else if(!shouldAnimate){return{opacity:PULSE_ENDING_OPACITY};}return{opacity:withRepeat(withSequence(withDelay(INNER_PULSE_DELAY,withTiming(PULSE_ENDING_OPACITY,{duration:PULSE_DURATION,easing:Easing.bezier(0.4,0.0,1,1)})),withDelay(PULSE_DURATION,withTiming(PULSE_STARTING_OPACITY,{duration:FADE_DURATION}))),-1)};}';
        var4['code'] = var5;
        var _closure1_slot9 = var4;
        var5 = var8.memo;
        var4 = function VoiceUserItem(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var26 = arg1;
                var6 = var26.member;
                var _closure2_slot0 = var6;
                var14 = var26.user;
                var _closure2_slot1 = var14;
                var1 = var26.guildId;
                var _closure2_slot2 = var1;
                var1 = var26.collapsed;
                var11 = var26.stream;
                var23 = var26.serverMute;
                var19 = var26.serverDeaf;
                var22 = var26.mute;
                var20 = var26.deaf;
                var21 = var26.localMute;
                var18 = var26.video;
                var16 = var26.disabled;
                var17 = var26.platform;
                var12 = var26.isInEmbeddedActivity;
                var15 = var26.voicePlatform;
                var13 = var26.hangStatusActivity;
                var29 = var26.ringing;
                var _closure2_slot3 = var29;
                var3 = _closure1_slot8;
                var4 = undefined;
                var5 = var3.bind(var4)();
                var27 = _closure1_slot0;
                var25 = _closure1_slot2;
                var3 = 11;
                var3 = var25[var3];
                var10 = var27.bind(var4)(var3);
                var9 = var10.useStateFromStores;
                var3 = _closure1_slot4;
                var8 = new Array(1);
                var8[0] = var3;
                var3 = function() {
                    var1 = _closure1_slot4;
                    var1 = var1.useReducedMotion;
                    var1 = !var1;
                    return var1;
                };
                var28 = var9.bind(var10)(var8, var3);
                var _closure2_slot4 = var28;
                var24 = 12;
                var3 = var25[var24];
                var9 = var27.bind(var4)(var3);
                var8 = var9.useAnimatedStyle;
                var3 = function E() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var1 = _closure2_slot3;
                        var3 = {};
                        if(var1) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                        var1 = 1;
                        var3['opacity'] = var1;
                        var1 = var3;
                        _fun0003_ip = 8; continue _fun0003;
case 6:
                        var2 = _closure2_slot4;
                        if(var2) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                        var2 = 0.4;
                        var3['opacity'] = var2;
                        var2 = var3;
                        _fun0003_ip = 11; continue _fun0003;
case 9:
                        var14 = _closure1_slot0;
                        var15 = _closure1_slot2;
                        var10 = 12;
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
                        var4 = 13;
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
case 11:
                        var1 = var2;
case 8:
                        return var1;
                    }
                };
                var10 = {};
                var10['ringing'] = var29;
                var10['shouldAnimate'] = var28;
                var28 = 0.4;
                var10['PULSE_ENDING_OPACITY'] = var28;
                var28 = var25[var24];
                var28 = var27.bind(var4)(var28);
                var28 = var28.withRepeat;
                var10['withRepeat'] = var28;
                var28 = var25[var24];
                var28 = var27.bind(var4)(var28);
                var28 = var28.withSequence;
                var10['withSequence'] = var28;
                var28 = var25[var24];
                var28 = var27.bind(var4)(var28);
                var28 = var28.withDelay;
                var10['withDelay'] = var28;
                var28 = 100;
                var10['INNER_PULSE_DELAY'] = var28;
                var28 = 13;
                var28 = var25[var28];
                var28 = var27.bind(var4)(var28);
                var28 = var28.withTiming;
                var10['withTiming'] = var28;
                var28 = 250;
                var10['PULSE_DURATION'] = var28;
                var25 = var25[var24];
                var25 = var27.bind(var4)(var25);
                var25 = var25.Easing;
                var10['Easing'] = var25;
                var25 = 0.1;
                var10['PULSE_STARTING_OPACITY'] = var25;
                var25 = 500;
                var10['FADE_DURATION'] = var25;
                var3['__closure'] = var10;
                var10 = 9430639809025.0;
                var3['__workletHash'] = var10;
                var10 = _closure1_slot9;
                var3['__initData'] = var10;
                var25 = var8.bind(var9)(var3);
                var8 = function getSource() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var1 = _closure2_slot0;
                        var3 = null;
                        if(!(var3 != var1)) { _fun0004_ip = 6; continue _fun0004 }
case 12:
                        var1 = _closure2_slot0;
                        var1 = var1.avatar;
                        if(!(var3 == var1)) { _fun0004_ip = 13; continue _fun0004 }
case 6:
                        var4 = _closure2_slot1;
                        var3 = var4.getAvatarSource;
                        var1 = _closure2_slot2;
                        var1 = var3.bind(var4)(var1);
                        _fun0004_ip = 14; continue _fun0004;
case 13:
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
case 14:
                        return var1;
                    }
                };
                if(var1) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 15;
                var1 = var3[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var9 = null;
                var10 = var9 == var6;
                var3 = undefined;
                if(var10) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                var3 = var6.nick;
case 17:
                if(!(var9 == var3)) { _fun0002_ip = 19; continue _fun0002 }
case 20:
                var10 = _closure1_slot1;
                var27 = _closure1_slot2;
                var6 = 16;
                var6 = var27[var6];
                var10 = var10.bind(var4)(var6);
                var6 = var10.getName;
                var3 = var6.bind(var10)(var14);
case 19:
                var1['userName'] = var3;
                var3 = !var16;
                if(!var3) { _fun0002_ip = 21; continue _fun0002 }
case 22:
                var3 = var23;
case 21:
                var1['serverMute'] = var3;
                var3 = !var16;
                if(!var3) { _fun0002_ip = 23; continue _fun0002 }
case 24:
                var3 = var21;
case 23:
                var1['localMute'] = var3;
                var3 = !var16;
                if(!var3) { _fun0002_ip = 25; continue _fun0002 }
case 26:
                var3 = var22;
case 25:
                var1['selfMute'] = var3;
                var3 = !var16;
                if(!var3) { _fun0002_ip = 27; continue _fun0002 }
case 28:
                var3 = var19;
case 27:
                var1['serverDeaf'] = var3;
                var3 = !var16;
                if(!var3) { _fun0002_ip = 29; continue _fun0002 }
case 30:
                var3 = var20;
case 29:
                var1['selfDeaf'] = var3;
                var1 = var2.bind(var4)(var1);
                var10 = var1.label;
                var6 = var1.hint;
                var3 = _closure1_slot6;
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var24];
                var1 = var2.bind(var4)(var1);
                var2 = var1.View;
                var1 = {};
                var27 = var5.voiceState;
                var24 = new Array(3);
                var24[0] = var27;
                var27 = var16;
                if(!var27) { _fun0002_ip = 31; continue _fun0002 }
case 32:
                var27 = var5.disabled;
case 31:
                var24[1] = var27;
                var24[2] = var25;
                var1['style'] = var24;
                var24 = true;
                var1['accessible'] = var24;
                var1['accessibilityLabel'] = var10;
                var1['accessibilityHint'] = var6;
                var25 = _closure1_slot5;
                var24 = _closure1_slot1;
                var27 = _closure1_slot2;
                var6 = 4;
                var6 = var27[var6];
                var10 = var24.bind(var4)(var6);
                var6 = {};
                var6['source'] = var8;
                var28 = _closure1_slot7;
                var6['size'] = var28;
                var10 = var25.bind(var4)(var10, var6);
                var6 = new Array(9);
                var6[0] = var10;
                var10 = 17;
                var10 = var27[var10];
                var24 = var24.bind(var4)(var10);
                var10 = {'variant': 'text-sm/medium', 'color': 'redesign-channel-name-muted-text'};
                var31 = var10;
                var30 = var26;
                var26 = copyDataProperties(var31, var30);
                var10 = var25.bind(var4)(var24, var10);
                var6[1] = var10;
                var10 = null;
                if(var16) { _fun0002_ip = 33; continue _fun0002 }
case 34:
                if(var23) { _fun0002_ip = 35; continue _fun0002 }
case 36:
                if(var21) { _fun0002_ip = 37; continue _fun0002 }
case 38:
                var21 = null;
                if(!var22) { _fun0002_ip = 39; continue _fun0002 }
case 40:
                var24 = _closure1_slot5;
                var23 = _closure1_slot0;
                var25 = _closure1_slot2;
                var22 = 19;
                var22 = var25[var22];
                var22 = var23.bind(var4)(var22);
                var23 = var22.MicrophoneSlashIcon;
                var22 = {'style': null, 'size': 'custom', 'color': 'redesign-channel-name-muted-text'};
                var25 = var5.voiceStateIcon;
                var22['style'] = var25;
                var21 = var24.bind(var4)(var23, var22);
case 39:
                _fun0002_ip = 41; continue _fun0002;
case 37:
                var24 = _closure1_slot5;
                var23 = _closure1_slot0;
                var25 = _closure1_slot2;
                var22 = 18;
                var22 = var25[var22];
                var22 = var23.bind(var4)(var22);
                var23 = var22.MicrophoneDenyIcon;
                var22 = {'style': null, 'size': 'custom', 'color': 'redesign-channel-name-muted-text'};
                var25 = var5.voiceStateIcon;
                var22['style'] = var25;
                var21 = var24.bind(var4)(var23, var22);
case 41:
                _fun0002_ip = 42; continue _fun0002;
case 35:
                var24 = _closure1_slot5;
                var23 = _closure1_slot0;
                var25 = _closure1_slot2;
                var22 = 18;
                var22 = var25[var22];
                var22 = var23.bind(var4)(var22);
                var23 = var22.MicrophoneDenyIcon;
                var22 = {'style': null, 'color': 'text-feedback-critical', 'size': 'custom'};
                var25 = var5.voiceStateIcon;
                var22['style'] = var25;
                var21 = var24.bind(var4)(var23, var22);
case 42:
                var10 = var21;
case 33:
                var6[2] = var10;
                var10 = null;
                if(var16) { _fun0002_ip = 43; continue _fun0002 }
case 44:
                if(var19) { _fun0002_ip = 45; continue _fun0002 }
case 46:
                var19 = null;
                if(!var20) { _fun0002_ip = 47; continue _fun0002 }
case 48:
                var22 = _closure1_slot5;
                var21 = _closure1_slot0;
                var23 = _closure1_slot2;
                var20 = 21;
                var20 = var23[var20];
                var20 = var21.bind(var4)(var20);
                var21 = var20.HeadphonesSlashIcon;
                var20 = {'style': null, 'size': 'custom', 'color': 'redesign-channel-name-muted-text'};
                var23 = var5.voiceStateIcon;
                var20['style'] = var23;
                var19 = var22.bind(var4)(var21, var20);
case 47:
                _fun0002_ip = 49; continue _fun0002;
case 45:
                var22 = _closure1_slot5;
                var21 = _closure1_slot0;
                var23 = _closure1_slot2;
                var20 = 20;
                var20 = var23[var20];
                var20 = var21.bind(var4)(var20);
                var21 = var20.HeadphonesDenyIcon;
                var20 = {'style': null, 'color': 'text-feedback-critical', 'size': 'custom'};
                var23 = var5.voiceStateIcon;
                var20['style'] = var23;
                var19 = var22.bind(var4)(var21, var20);
case 49:
                var10 = var19;
case 43:
                var6[3] = var10;
                var10 = null;
                if(!var18) { _fun0002_ip = 50; continue _fun0002 }
case 51:
                var10 = null;
                if(var16) { _fun0002_ip = 50; continue _fun0002 }
case 52:
                var19 = _closure1_slot5;
                var18 = _closure1_slot0;
                var20 = _closure1_slot2;
                var16 = 22;
                var16 = var20[var16];
                var16 = var18.bind(var4)(var16);
                var18 = var16.VideoIcon;
                var16 = {'size': 'custom', 'color': 'redesign-channel-name-muted-text'};
                var20 = var5.voiceStateIcon;
                var16['style'] = var20;
                var10 = var19.bind(var4)(var18, var16);
case 50:
                var6[4] = var10;
                var10 = null;
                if(!var12) { _fun0002_ip = 53; continue _fun0002 }
case 54:
                var18 = _closure1_slot5;
                var20 = _closure1_slot1;
                var21 = _closure1_slot2;
                var19 = 23;
                var12 = var21[var19];
                var16 = var20.bind(var4)(var12);
                var12 = {};
                var22 = 24;
                var22 = var21[var22];
                var22 = var20.bind(var4)(var22);
                var12['source'] = var22;
                var19 = var21[var19];
                var19 = var20.bind(var4)(var19);
                var19 = var19.Sizes;
                var19 = var19.REFRESH_SMALL_16;
                var12['size'] = var19;
                var19 = var5.legacyVoiceStateIcon;
                var12['style'] = var19;
                var10 = var18.bind(var4)(var16, var12);
case 53:
                var6[5] = var10;
                var12 = _closure1_slot1;
                var10 = _closure1_slot2;
                var16 = 25;
                var10 = var10[var16];
                var12 = var12.bind(var4)(var10);
                var18 = var9 != var17;
                var10 = '';
                if(!var18) { _fun0002_ip = 55; continue _fun0002 }
case 56:
                var10 = var17;
case 55:
                var20 = var12.bind(var4)(var10);
                if(!(var9 == var20)) { _fun0002_ip = 57; continue _fun0002 }
case 58:
                var12 = _closure1_slot0;
                var10 = _closure1_slot2;
                var10 = var10[var16];
                var12 = var12.bind(var4)(var10);
                var10 = var12.getConsoleIconForVoicePlatform;
                var20 = var10.bind(var12)(var15);
case 57:
                var12 = var9 != var20;
                var10 = null;
                if(!var12) { _fun0002_ip = 59; continue _fun0002 }
case 60:
                var16 = _closure1_slot5;
                var18 = _closure1_slot1;
                var19 = _closure1_slot2;
                var17 = 23;
                var12 = var19[var17];
                var15 = var18.bind(var4)(var12);
                var12 = {};
                var12['source'] = var20;
                var17 = var19[var17];
                var17 = var18.bind(var4)(var17);
                var17 = var17.Sizes;
                var17 = var17.REFRESH_SMALL_16;
                var12['size'] = var17;
                var17 = var5.legacyVoiceStateIcon;
                var12['style'] = var17;
                var10 = var16.bind(var4)(var15, var12);
case 59:
                var6[6] = var10;
                var10 = null;
                if(!var11) { _fun0002_ip = 61; continue _fun0002 }
case 62:
                var15 = _closure1_slot5;
                var12 = _closure1_slot1;
                var16 = _closure1_slot2;
                var11 = 26;
                var11 = var16[var11];
                var12 = var12.bind(var4)(var11);
                var11 = {};
                var16 = var5.legacyVoiceStateIcon;
                var11['style'] = var16;
                var10 = var15.bind(var4)(var12, var11);
case 61:
                var6[7] = var10;
                var10 = var9 == var13;
                var9 = null;
                if(var10) { _fun0002_ip = 63; continue _fun0002 }
case 64:
                var12 = _closure1_slot5;
                var11 = _closure1_slot1;
                var15 = _closure1_slot2;
                var10 = 27;
                var10 = var15[var10];
                var11 = var11.bind(var4)(var10);
                var10 = {};
                var14 = var14.id;
                var10['userId'] = var14;
                var14 = 16;
                var10['size'] = var14;
                var10['hangStatusActivity'] = var13;
                var13 = var5.hangStatusIconText;
                var10['textEmojiStyle'] = var13;
                var13 = var5.hangStatusIcon;
                var10['emojiStyle'] = var13;
                var9 = var12.bind(var4)(var11, var10);
case 63:
                var6[8] = var9;
                var1['children'] = var6;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
case 15:
                var3 = _closure1_slot5;
                var2 = _closure1_slot3;
                var1 = {};
                var5 = var5.voiceStateCollapsed;
                var1['style'] = var5;
                var6 = _closure1_slot1;
                var9 = _closure1_slot2;
                var5 = 4;
                var5 = var9[var5];
                var6 = var6.bind(var4)(var5);
                var5 = {};
                var5['source'] = var8;
                var7 = _closure1_slot7;
                var5['size'] = var7;
                var5 = var3.bind(var4)(var6, var5);
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var4 = var5.bind(var8)(var4);
        var5 = 28;
        var5 = var7[var5];
        var7 = var6.bind(var1)(var5);
        var6 = var7.fileFinishedImporting;
        var5 = 'modules/guild_sidebar/native/VoiceUserItem.tsx';
        var5 = var6.bind(var7)(var5);
        var3['default'] = var4;
        var2 = function getVoiceUserHeight(arg1) {
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 5;
            var2 = var6[var2];
            var3 = undefined;
            var8 = var5.bind(var3)(var2);
            var7 = var8.scaleTextLineHeight;
            var4 = 'text-sm/medium';
            var2 = arg1;
            var4 = var7.bind(var8)(var4, var2);
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
    }
})();