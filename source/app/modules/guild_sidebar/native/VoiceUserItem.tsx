// app/modules/guild_sidebar/native/VoiceUserItem.tsx
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
    var11 = 6;
    var4 = var7[var11];
    var9 = var6.bind(var1)(var4);
    var5 = var9.createStyles;
    var4 = {};
    var10 = {'flex': 1, 'flexDirection': 'row', 'alignItems': 'center', 'paddingVertical': 5};
    var4['voiceState'] = var10;
    var10 = {};
    var12 = 0.5;
    var10['opacity'] = var12;
    var4['disabled'] = var10;
    var10 = {'marginTop': 4, 'marginRight': 8, 'width': 32, 'height': 32, 'borderRadius': null, 'borderWidth': 4, 'borderColor': null, 'alignItems': 'center', 'overflow': 'hidden'};
    var14 = 8;
    var12 = 7;
    var15 = var7[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.lg;
    var10['borderRadius'] = var15;
    var15 = var7[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_BASE_LOW;
    var10['borderColor'] = var15;
    var4['voiceStateCollapsed'] = var10;
    var10 = {};
    var10['marginLeft'] = var11;
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
case 0:
            var24 = arg1;
            var9 = function getSource() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var3 = null;
                    if(!(var3 != var1)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var1 = _closure2_slot0;
                    var1 = var1.avatar;
                    if(!(var3 == var1)) { _fun0002_ip = 4; continue _fun0002 }
case 2:
                    var4 = _closure2_slot1;
                    var3 = var4.getAvatarSource;
                    var1 = _closure2_slot2;
                    var1 = var3.bind(var4)(var1);
                    _fun0002_ip = 5; continue _fun0002;
case 4:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 12;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.getGuildMemberAvatarSource;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var1 = var4.bind(var5)(var3, var2);
case 5:
                    return var1;
                }
            };
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
            var15 = var24.disabled;
            var16 = var24.platform;
            var12 = var24.isInEmbeddedActivity;
            var14 = var24.voicePlatform;
            var26 = var24.ringing;
            var _closure2_slot3 = var26;
            var3 = _closure1_slot8;
            var5 = undefined;
            var6 = var3.bind(var5)();
            var23 = _closure1_slot0;
            var13 = _closure1_slot2;
            var3 = 9;
            var3 = var13[var3];
            var11 = var23.bind(var5)(var3);
            var7 = var11.useStateFromStores;
            var3 = _closure1_slot4;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var1 = _closure1_slot4;
                var1 = var1.useReducedMotion;
                var1 = !var1;
                return var1;
            };
            var25 = var7.bind(var11)(var4, var3);
            var _closure2_slot4 = var25;
            var4 = 10;
            var3 = var13[var4];
            var7 = var23.bind(var5)(var3);
            var3 = var7.useAnimatedStyle;
            var2 = function c() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot3;
                    var3 = {};
                    if(var1) { _fun0003_ip = 2; continue _fun0003 }
case 6:
                    var1 = 1;
                    var3['opacity'] = var1;
                    var1 = var3;
                    _fun0003_ip = 7; continue _fun0003;
case 2:
                    var2 = _closure2_slot4;
                    if(var2) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var2 = 0.4;
                    var3['opacity'] = var2;
                    var2 = var3;
                    _fun0003_ip = 10; continue _fun0003;
case 8:
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var10 = 10;
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
                    var4 = 11;
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
case 10:
                    var1 = var2;
case 7:
                    return var1;
                }
            };
            var11 = {};
            var11['ringing'] = var26;
            var11['shouldAnimate'] = var25;
            var25 = 0.4;
            var11['PULSE_ENDING_OPACITY'] = var25;
            var25 = var13[var4];
            var25 = var23.bind(var5)(var25);
            var25 = var25.withRepeat;
            var11['withRepeat'] = var25;
            var25 = var13[var4];
            var25 = var23.bind(var5)(var25);
            var25 = var25.withSequence;
            var11['withSequence'] = var25;
            var25 = var13[var4];
            var25 = var23.bind(var5)(var25);
            var25 = var25.withDelay;
            var11['withDelay'] = var25;
            var25 = 100;
            var11['INNER_PULSE_DELAY'] = var25;
            var25 = 11;
            var25 = var13[var25];
            var25 = var23.bind(var5)(var25);
            var25 = var25.withTiming;
            var11['withTiming'] = var25;
            var25 = 250;
            var11['PULSE_DURATION'] = var25;
            var13 = var13[var4];
            var13 = var23.bind(var5)(var13);
            var13 = var13.Easing;
            var11['Easing'] = var13;
            var13 = 0.1;
            var11['PULSE_STARTING_OPACITY'] = var13;
            var13 = 500;
            var11['FADE_DURATION'] = var13;
            var2['__closure'] = var11;
            var11 = 9430639809025.0;
            var2['__workletHash'] = var11;
            var11 = _closure1_slot9;
            var2['__initData'] = var11;
            var7 = var3.bind(var7)(var2);
            if(var1) { _fun0001_ip = 11; continue _fun0001 }
case 12:
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
            var11 = var15;
            if(!var11) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var11 = var6.disabled;
case 13:
            var4[1] = var11;
            var4[2] = var7;
            var1['style'] = var4;
            var23 = _closure1_slot5;
            var7 = _closure1_slot0;
            var25 = _closure1_slot2;
            var13 = 4;
            var4 = var25[var13];
            var4 = var7.bind(var5)(var4);
            var7 = var4.Avatar;
            var4 = {};
            var4['source'] = var9;
            var11 = _closure1_slot7;
            var4['size'] = var11;
            var7 = var23.bind(var5)(var7, var4);
            var4 = new Array(8);
            var4[0] = var7;
            var11 = _closure1_slot1;
            var7 = 13;
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
            if(var15) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            if(var22) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            if(var20) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var20 = null;
            if(!var21) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var23 = _closure1_slot5;
            var22 = _closure1_slot0;
            var24 = _closure1_slot2;
            var21 = 15;
            var21 = var24[var21];
            var21 = var22.bind(var5)(var21);
            var22 = var21.MicrophoneSlashIcon;
            var21 = {'style': null, 'size': 'custom', 'color': 'redesign-channel-name-muted-text'};
            var24 = var6.voiceStateIcon;
            var21['style'] = var24;
            var20 = var23.bind(var5)(var22, var21);
case 21:
            _fun0001_ip = 23; continue _fun0001;
case 19:
            var23 = _closure1_slot5;
            var22 = _closure1_slot0;
            var24 = _closure1_slot2;
            var21 = 14;
            var21 = var24[var21];
            var21 = var22.bind(var5)(var21);
            var22 = var21.MicrophoneDenyIcon;
            var21 = {'style': null, 'size': 'custom', 'color': 'redesign-channel-name-muted-text'};
            var24 = var6.voiceStateIcon;
            var21['style'] = var24;
            var20 = var23.bind(var5)(var22, var21);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 17:
            var23 = _closure1_slot5;
            var22 = _closure1_slot0;
            var24 = _closure1_slot2;
            var21 = 14;
            var21 = var24[var21];
            var21 = var22.bind(var5)(var21);
            var22 = var21.MicrophoneDenyIcon;
            var21 = {'style': null, 'color': 'text-feedback-critical', 'size': 'custom'};
            var24 = var6.voiceStateIcon;
            var21['style'] = var24;
            var20 = var23.bind(var5)(var22, var21);
case 24:
            var11 = var20;
case 15:
            var4[2] = var11;
            var11 = null;
            if(var15) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            if(var18) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var18 = null;
            if(!var19) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var21 = _closure1_slot5;
            var20 = _closure1_slot0;
            var22 = _closure1_slot2;
            var19 = 17;
            var19 = var22[var19];
            var19 = var20.bind(var5)(var19);
            var20 = var19.HeadphonesSlashIcon;
            var19 = {'style': null, 'size': 'custom', 'color': 'redesign-channel-name-muted-text'};
            var22 = var6.voiceStateIcon;
            var19['style'] = var22;
            var18 = var21.bind(var5)(var20, var19);
case 29:
            _fun0001_ip = 31; continue _fun0001;
case 27:
            var21 = _closure1_slot5;
            var20 = _closure1_slot0;
            var22 = _closure1_slot2;
            var19 = 16;
            var19 = var22[var19];
            var19 = var20.bind(var5)(var19);
            var20 = var19.HeadphonesDenyIcon;
            var19 = {'style': null, 'color': 'text-feedback-critical', 'size': 'custom'};
            var22 = var6.voiceStateIcon;
            var19['style'] = var22;
            var18 = var21.bind(var5)(var20, var19);
case 31:
            var11 = var18;
case 25:
            var4[3] = var11;
            var11 = null;
            if(!var17) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var11 = null;
            if(var15) { _fun0001_ip = 32; continue _fun0001 }
case 34:
            var18 = _closure1_slot5;
            var17 = _closure1_slot0;
            var19 = _closure1_slot2;
            var15 = 18;
            var15 = var19[var15];
            var15 = var17.bind(var5)(var15);
            var17 = var15.VideoIcon;
            var15 = {'size': 'custom', 'color': 'redesign-channel-name-muted-text'};
            var19 = var6.voiceStateIcon;
            var15['style'] = var19;
            var11 = var18.bind(var5)(var17, var15);
case 32:
            var4[4] = var11;
            var11 = null;
            if(!var12) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var17 = _closure1_slot5;
            var19 = _closure1_slot0;
            var18 = _closure1_slot2;
            var12 = var18[var13];
            var12 = var19.bind(var5)(var12);
            var15 = var12.Icon;
            var12 = {};
            var21 = _closure1_slot1;
            var20 = 19;
            var20 = var18[var20];
            var20 = var21.bind(var5)(var20);
            var12['source'] = var20;
            var18 = var18[var13];
            var18 = var19.bind(var5)(var18);
            var18 = var18.Icon;
            var18 = var18.Sizes;
            var18 = var18.REFRESH_SMALL_16;
            var12['size'] = var18;
            var18 = var6.legacyVoiceStateIcon;
            var12['style'] = var18;
            var11 = var17.bind(var5)(var15, var12);
case 35:
            var4[5] = var11;
            var12 = _closure1_slot1;
            var11 = _closure1_slot2;
            var15 = 20;
            var11 = var11[var15];
            var12 = var12.bind(var5)(var11);
            var17 = var7 != var16;
            var11 = '';
            if(!var17) { _fun0001_ip = 37; continue _fun0001 }
case 38:
            var11 = var16;
case 37:
            var18 = var12.bind(var5)(var11);
            if(!(var7 == var18)) { _fun0001_ip = 39; continue _fun0001 }
case 40:
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var15];
            var12 = var12.bind(var5)(var11);
            var11 = var12.getConsoleIconForVoicePlatform;
            var18 = var11.bind(var12)(var14);
case 39:
            var12 = var7 != var18;
            var11 = null;
            if(!var12) { _fun0001_ip = 41; continue _fun0001 }
case 42:
            var15 = _closure1_slot5;
            var17 = _closure1_slot0;
            var16 = _closure1_slot2;
            var12 = var16[var13];
            var12 = var17.bind(var5)(var12);
            var14 = var12.Icon;
            var12 = {};
            var12['source'] = var18;
            var16 = var16[var13];
            var16 = var17.bind(var5)(var16);
            var16 = var16.Icon;
            var16 = var16.Sizes;
            var16 = var16.REFRESH_SMALL_16;
            var12['size'] = var16;
            var16 = var6.legacyVoiceStateIcon;
            var12['style'] = var16;
            var11 = var15.bind(var5)(var14, var12);
case 41:
            var4[6] = var11;
            var7 = null;
            if(!var10) { _fun0001_ip = 43; continue _fun0001 }
case 44:
            var12 = _closure1_slot5;
            var11 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var13];
            var10 = var11.bind(var5)(var10);
            var11 = var10.LiveTag;
            var10 = {};
            var13 = var6.legacyVoiceStateIcon;
            var10['style'] = var13;
            var7 = var12.bind(var5)(var11, var10);
case 43:
            var4[7] = var7;
            var1['children'] = var4;
            var1 = var3.bind(var5)(var2, var1);
            _fun0001_ip = 45; continue _fun0001;
case 11:
            var4 = _closure1_slot5;
            var3 = _closure1_slot3;
            var2 = {};
            var6 = var6.voiceStateCollapsed;
            var2['style'] = var6;
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 4;
            var6 = var10[var6];
            var6 = var7.bind(var5)(var6);
            var7 = var6.Avatar;
            var6 = {};
            var6['source'] = var9;
            var8 = _closure1_slot7;
            var6['size'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 45:
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = 21;
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
        var2 = 4;
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