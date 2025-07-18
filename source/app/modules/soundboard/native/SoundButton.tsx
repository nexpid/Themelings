// app/modules/soundboard/native/SoundButton.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var5 = native2;
        var9 = native3;
        var3 = native6;
        var6 = native7;
        var _closure1_slot0 = var5;
        var _closure1_slot1 = var9;
        var _closure1_slot2 = var6;
        var1 = global;
        var8 = var1.Object;
        var7 = var8.defineProperty;
        var4 = {};
        var1 = true;
        var4['value'] = var1;
        var1 = '__esModule';
        var1 = var7.bind(var8)(var3, var1, var4);
        var1 = 0;
        var7 = var6[var1];
        var4 = native4;
        var1 = undefined;
        var8 = var4.bind(var1)(var7);
        var _closure1_slot3 = var8;
        var4 = 1;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var11 = var4.View;
        var _closure1_slot4 = var11;
        var4 = 2;
        var4 = var6[var4];
        var4 = var9.bind(var1)(var4);
        var _closure1_slot5 = var4;
        var4 = 3;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var13 = var4.SOUND_BUTTON_HEIGHT;
        var4 = 4;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var7 = var4.jsx;
        var _closure1_slot6 = var7;
        var4 = var4.jsxs;
        var _closure1_slot7 = var4;
        var7 = 5;
        var4 = var6[var7];
        var10 = var9.bind(var1)(var4);
        var4 = var10.createAnimatedComponent;
        var4 = var4.bind(var10)(var11);
        var _closure1_slot8 = var4;
        var4 = {'damping': 10, 'stiffness': 300, 'mass': 1};
        var _closure1_slot9 = var4;
        var15 = 6;
        var4 = var6[var15];
        var12 = var5.bind(var1)(var4);
        var11 = var12.createStyles;
        var10 = {};
        var4 = {'marginTop': 4, 'height': null, 'backgroundColor': null, 'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'center', 'alignItems': 'center', 'borderRadius': null, 'borderWidth': 1};
        var4['height'] = var13;
        var14 = 7;
        var13 = var6[var14];
        var13 = var9.bind(var1)(var13);
        var13 = var13.colors;
        var13 = var13.CARD_PRIMARY_BG;
        var4['backgroundColor'] = var13;
        var13 = var6[var14];
        var13 = var9.bind(var1)(var13);
        var13 = var13.radii;
        var13 = var13.lg;
        var4['borderRadius'] = var13;
        var13 = var6[var14];
        var13 = var9.bind(var1)(var13);
        var13 = var13.colors;
        var13 = var13.BORDER_FAINT;
        var4['borderColor'] = var13;
        var13 = var6[var14];
        var13 = var9.bind(var1)(var13);
        var13 = var13.shadows;
        var20 = var13.SHADOW_LOW;
        var21 = var4;
        var13 = copyDataProperties(var21, var20);
        var10['button'] = var4;
        var4 = {};
        var13 = var6[var14];
        var13 = var9.bind(var1)(var13);
        var13 = var13.colors;
        var13 = var13.CARD_PRIMARY_PRESSED_BG;
        var4['backgroundColor'] = var13;
        var10['buttonPressed'] = var4;
        var4 = {};
        var13 = 0.5;
        var4['opacity'] = var13;
        var10['buttonDisabled'] = var4;
        var4 = {'borderStyle': 'solid', 'borderWidth': 2};
        var13 = var6[var14];
        var13 = var9.bind(var1)(var13);
        var13 = var13.colors;
        var13 = var13.STATUS_SPEAKING;
        var4['borderColor'] = var13;
        var13 = var6[var14];
        var13 = var9.bind(var1)(var13);
        var13 = var13.colors;
        var13 = var13.CARD_SECONDARY_BG;
        var4['backgroundColor'] = var13;
        var10['buttonPlaying'] = var4;
        var13 = {'height': 24, 'width': 24, 'fontSize': null, 'lineHeight': 28};
        var17 = 24;
        var16 = 8;
        var4 = var6[var16];
        var18 = var5.bind(var1)(var4);
        var4 = var18.isIOS;
        var18 = var4.bind(var18)();
        var4 = undefined;
        if(!var18) { _fun0001_ip = 527; continue _fun0001 }
 524:
        var4 = var17;
 527:
        var13['fontSize'] = var4;
        var4 = 28;
        var10['emoji'] = var13;
        var13 = {'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'height': 40, 'width': 40, 'backgroundColor': null, 'backgroundSize': 32, 'borderRadius': null, 'marginBottom': 8};
        var17 = var6[var14];
        var17 = var9.bind(var1)(var17);
        var17 = var17.colors;
        var17 = var17.BG_MOD_FAINT;
        var13['backgroundColor'] = var17;
        var17 = var6[var14];
        var17 = var9.bind(var1)(var17);
        var17 = var17.radii;
        var17 = var17.round;
        var13['borderRadius'] = var17;
        var10['emojiWrapper'] = var13;
        var13 = {'width': '100%', 'height': '100%'};
        var17 = var6[var14];
        var17 = var9.bind(var1)(var17);
        var17 = var17.radii;
        var17 = var17.round;
        var13['borderRadius'] = var17;
        var10['emojiBackground'] = var13;
        var13 = {};
        var17 = var6[var14];
        var17 = var9.bind(var1)(var17);
        var17 = var17.colors;
        var17 = var17.CHANNEL_ICON;
        var13['color'] = var17;
        var10['defaultSoundboardIcon'] = var13;
        var13 = {};
        var13['marginHorizontal'] = var16;
        var10['text'] = var13;
        var13 = {};
        var13['marginHorizontal'] = var15;
        var10['textPlaying'] = var13;
        var13 = {'position': 'absolute', 'top': null, 'end': null, 'width': 12, 'height': 12};
        var15 = var6[var14];
        var15 = var9.bind(var1)(var15);
        var15 = var15.spacing;
        var15 = var15.PX_12;
        var13['top'] = var15;
        var15 = var6[var14];
        var15 = var9.bind(var1)(var15);
        var15 = var15.spacing;
        var15 = var15.PX_12;
        var13['end'] = var15;
        var14 = var6[var14];
        var14 = var9.bind(var1)(var14);
        var14 = var14.colors;
        var14 = var14.WHITE;
        var13['tintColor'] = var14;
        var10['lock'] = var13;
        var10 = var11.bind(var12)(var10);
        var _closure1_slot10 = var10;
        var7 = var6[var7];
        var10 = var9.bind(var1)(var7);
        var9 = var10.createAnimatedComponent;
        var7 = 9;
        var7 = var6[var7];
        var7 = var5.bind(var1)(var7);
        var7 = var7.PressableOpacity;
        var7 = var9.bind(var10)(var7);
        var _closure1_slot11 = var7;
        var7 = {};
        var9 = 'function SoundButtonTsx1(){const{animationConfig,withDelay,withSpring,interpolate,SPRING_CONFIG}=this.__closure;var _animationConfig$play,_animationConfig$pres,_animationConfig;const isNotPressed=animationConfig.sharedValues.pressed.get()===0;const isPlaying=animationConfig.sharedValues.playing.get()>0;const shouldDoPlayingAnimation=isNotPressed&&isPlaying;const playingAnimationScaleValue=withDelay((_animationConfig$play=animationConfig.playingAnimationDelay)!==null&&_animationConfig$play!==void 0?_animationConfig$play:0,withSpring(interpolate(animationConfig.sharedValues.playing.get(),[0,1],[1,animationConfig.scaleFactors.playing]),SPRING_CONFIG));const pressedAnimationScaleValue=withSpring(interpolate(animationConfig.sharedValues.pressed.get(),[0,1],[1,animationConfig.scaleFactors.pressed]),SPRING_CONFIG);const rotationScaleValue=interpolate(animationConfig.sharedValues.pressed.get(),[0,1],[0,(_animationConfig$pres=(_animationConfig=animationConfig)===null||_animationConfig===void 0?void 0:_animationConfig.pressedRotationDegrees)!==null&&_animationConfig$pres!==void 0?_animationConfig$pres:0]);return{transform:[{scale:shouldDoPlayingAnimation?playingAnimationScaleValue:pressedAnimationScaleValue},{rotate:rotationScaleValue+"deg"}]};}';
        var7['code'] = var9;
        var _closure1_slot12 = var7;
        var7 = function useAnimation(arg1) {
            var10 = arg1;
            var _closure2_slot0 = var10;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 5;
            var2 = var9[var6];
            var7 = undefined;
            var3 = var8.bind(var7)(var2);
            var2 = var3.useAnimatedStyle;
            var1 = function t() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot0;
                    var2 = var1.sharedValues;
                    var3 = var2.pressed;
                    var2 = var3.get;
                    var13 = var2.bind(var3)();
                    var2 = var1.sharedValues;
                    var3 = var2.playing;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var4 = 0;
                    var11 = var2 > var4;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var8 = 5;
                    var2 = var2[var8];
                    var5 = undefined;
                    var17 = var3.bind(var5)(var2);
                    var16 = var17.withDelay;
                    var1 = var1.playingAnimationDelay;
                    var9 = null;
                    var2 = var9 != var1;
                    var7 = 0;
                    if(!var2) { _fun0002_ip = 106; continue _fun0002 }
 103:
                    var7 = var1;
 106:
                    var15 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var2 = 10;
                    var1 = var14[var2];
                    var19 = var15.bind(var5)(var1);
                    var18 = var19.withSpring;
                    var1 = var14[var8];
                    var22 = var15.bind(var5)(var1);
                    var21 = var22.interpolate;
                    var1 = _closure2_slot0;
                    var3 = var1.sharedValues;
                    var12 = var3.playing;
                    var3 = var12.get;
                    var20 = var3.bind(var12)();
                    var3 = var1.scaleFactors;
                    var3 = var3.playing;
                    var12 = [1];
                    var12[1] = var3;
                    var3 = [0, 1];
                    var3 = var21.bind(var22)(var20, var3, var12);
                    var12 = _closure1_slot9;
                    var3 = var18.bind(var19)(var3, var12);
                    var7 = var16.bind(var17)(var7, var3);
                    var2 = var14[var2];
                    var3 = var15.bind(var5)(var2);
                    var2 = var3.withSpring;
                    var14 = var14[var8];
                    var17 = var15.bind(var5)(var14);
                    var16 = var17.interpolate;
                    var14 = var1.sharedValues;
                    var15 = var14.pressed;
                    var14 = var15.get;
                    var15 = var14.bind(var15)();
                    var1 = var1.scaleFactors;
                    var1 = var1.pressed;
                    var14 = [1];
                    var14[1] = var1;
                    var1 = [0, 1];
                    var1 = var16.bind(var17)(var15, var1, var14);
                    var12 = var2.bind(var3)(var1, var12);
                    var1 = {};
                    var3 = {};
                    var2 = var12;
                    if(!(var4 === var13)) { _fun0002_ip = 349; continue _fun0002 }
 340:
                    var2 = var12;
                    if(!var11) { _fun0002_ip = 349; continue _fun0002 }
 346:
                    var2 = var7;
 349:
                    var3['scale'] = var2;
                    var2 = new Array(2);
                    var2[0] = var3;
                    var3 = {};
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var6 = var6[var8];
                    var8 = var7.bind(var5)(var6);
                    var7 = var8.interpolate;
                    var11 = _closure2_slot0;
                    var6 = var11.sharedValues;
                    var12 = var6.pressed;
                    var6 = var12.get;
                    var6 = var6.bind(var12)();
                    var11 = var9 == var11;
                    var5 = undefined;
                    if(var11) { _fun0002_ip = 431; continue _fun0002 }
 421:
                    var10 = _closure2_slot0;
                    var5 = var10.pressedRotationDegrees;
 431:
                    var9 = var9 != var5;
                    var4 = 0;
                    if(!var9) { _fun0002_ip = 443; continue _fun0002 }
 440:
                    var4 = var5;
 443:
                    var5 = [0];
                    var5[1] = var4;
                    var4 = [0, 1];
                    var7 = var7.bind(var8)(var6, var4, var5);
                    var4 = global;
                    var4 = var4.HermesInternal;
                    var6 = var4.concat;
                    var5 = '';
                    var4 = 'deg';
                    var4 = var6.bind(var5)(var7, var4);
                    var3['rotate'] = var4;
                    var2[1] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var5 = {};
            var5['animationConfig'] = var10;
            var10 = var9[var6];
            var10 = var8.bind(var7)(var10);
            var10 = var10.withDelay;
            var5['withDelay'] = var10;
            var10 = 10;
            var10 = var9[var10];
            var10 = var8.bind(var7)(var10);
            var10 = var10.withSpring;
            var5['withSpring'] = var10;
            var6 = var9[var6];
            var6 = var8.bind(var7)(var6);
            var6 = var6.interpolate;
            var5['interpolate'] = var6;
            var6 = _closure1_slot9;
            var5['SPRING_CONFIG'] = var6;
            var1['__closure'] = var5;
            var5 = 13932429225740.0;
            var1['__workletHash'] = var5;
            var4 = _closure1_slot12;
            var1['__initData'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var _closure1_slot13 = var7;
        var7 = function SoundButtonEmoji(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var1 = arg1;
                var8 = var1.sound;
                var3 = var1.sharedValues;
                var1 = _closure1_slot10;
                var4 = undefined;
                var9 = var1.bind(var4)();
                var2 = _closure1_slot13;
                var1 = {};
                var1['sharedValues'] = var3;
                var5 = {'pressed': 0.8, 'playing': 1.2};
                var1['scaleFactors'] = var5;
                var10 = var2.bind(var4)(var1);
                var2 = _closure1_slot13;
                var1 = {};
                var1['sharedValues'] = var3;
                var3 = {'pressed': 0.7200000000000001, 'playing': 1.08};
                var1['scaleFactors'] = var3;
                var3 = 100;
                var1['playingAnimationDelay'] = var3;
                var3 = -15;
                var1['pressedRotationDegrees'] = var3;
                var7 = var2.bind(var4)(var1);
                var3 = _closure1_slot6;
                var2 = _closure1_slot8;
                var1 = {};
                var11 = var9.emojiWrapper;
                var5 = new Array(2);
                var5[0] = var11;
                var5[1] = var10;
                var1['style'] = var5;
                var5 = {};
                var5['style'] = var7;
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var6 = 11;
                var6 = var11[var6];
                var7 = var10.bind(var4)(var6);
                var6 = {};
                var12 = var9.emoji;
                var6['fastImageStyle'] = var12;
                var9 = var9.emoji;
                var6['textEmojiStyle'] = var9;
                var9 = 12;
                var9 = var11[var9];
                var10 = var10.bind(var4)(var9);
                var9 = 24;
                var9 = var10.bind(var4)(var8, var9);
                var6['src'] = var9;
                var9 = var8.emojiName;
                var8 = null;
                var10 = var8 != var9;
                var8 = '';
                if(!var10) { _fun0003_ip = 247; continue _fun0003 }
 244:
                var8 = var9;
 247:
                var6['name'] = var8;
                var6 = var3.bind(var4)(var7, var6);
                var5['children'] = var6;
                var5 = var3.bind(var4)(var2, var5);
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var _closure1_slot14 = var7;
        var7 = var8.memo;
        var2 = function(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var3 = arg1;
                var15 = var3.sound;
                var _closure2_slot0 = var15;
                var2 = var3.channel;
                var _closure2_slot1 = var2;
                var19 = var3.style;
                var8 = var3.isSectionLocked;
                var4 = undefined;
                if(!(var8 === var4)) { _fun0004_ip = 43; continue _fun0004 }
 41:
                var8 = false;
 43:
                var _closure2_slot2 = var4;
                var _closure2_slot3 = var4;
                var _closure2_slot4 = var4;
                var _closure2_slot5 = var4;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 13;
                var3 = var6[var3];
                var5 = var5.bind(var4)(var3);
                var3 = var5.useSoundButtonStyleConfig;
                var3 = var3.bind(var5)();
                var23 = var3.buttonWidth;
                var3 = var15.emojiId;
                var17 = null;
                var12 = var17 != var3;
                if(var12) { _fun0004_ip = 123; continue _fun0004 }
 113:
                var3 = var15.emojiName;
                var12 = var17 != var3;
 123:
                var3 = _closure1_slot10;
                var10 = var3.bind(var4)();
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var3 = 14;
                var3 = var9[var3];
                var13 = var6.bind(var4)(var3);
                var11 = var13.useStateFromStores;
                var3 = _closure1_slot5;
                var5 = new Array(1);
                var5[0] = var3;
                var3 = function() {
                    var2 = _closure1_slot5;
                    var1 = var2.getCurrentUser;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var13 = var11.bind(var13)(var5, var3);
                _closure2_slot2 = var13;
                var14 = _closure1_slot1;
                var3 = 15;
                var3 = var9[var3];
                var5 = var14.bind(var4)(var3);
                var3 = var2.id;
                var5 = var5.bind(var4)(var15, var3);
                var3 = var5.playSoundboardSound;
                _closure2_slot3 = var3;
                var18 = var5.isPlayingSound;
                var5 = 16;
                var5 = var9[var5];
                var11 = var14.bind(var4)(var5);
                var5 = 17;
                var5 = var9[var5];
                var5 = var14.bind(var4)(var5);
                var5 = var5.SOUNDBOARD_BUTTON;
                var5 = var11.bind(var4)(var5);
                var14 = var5.analyticsLocations;
                _closure2_slot4 = var14;
                var5 = 18;
                var5 = var9[var5];
                var6 = var6.bind(var4)(var5);
                var5 = var6.canUseSoundboardSound;
                var5 = var5.bind(var6)(var13, var15, var2);
                var6 = !var5;
                _closure2_slot5 = var6;
                var5 = _closure1_slot3;
                var11 = var5.useCallback;
                var9 = new Array(6);
                var9[0] = var14;
                var14 = var2.guild_id;
                var9[1] = var14;
                var9[2] = var13;
                var9[3] = var3;
                var9[4] = var15;
                var9[5] = var6;
                var3 = function() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var2 = _closure2_slot5;
                        if(var2) { _fun0005_ip = 30; continue _fun0005 }
 10:
                        var4 = _closure2_slot3;
                        var3 = _closure2_slot4;
                        var2 = undefined;
                        var2 = var4.bind(var2)(var3);
                        _fun0005_ip = 296; continue _fun0005;
 30:
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = 19;
                        var2 = var5[var2];
                        var8 = undefined;
                        var5 = var3.bind(var8)(var2);
                        var3 = var5.canUseSoundboardEverywhere;
                        var2 = _closure2_slot2;
                        var2 = var3.bind(var5)(var2);
                        if(var2) { _fun0005_ip = 153; continue _fun0005 }
 73:
                        var2 = _closure2_slot0;
                        var3 = var2.guildId;
                        var2 = _closure2_slot1;
                        var2 = var2.guild_id;
                        if(!(var3 !== var2)) { _fun0005_ip = 153; continue _fun0005 }
 95:
                        var3 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var2 = 20;
                        var2 = var6[var2];
                        var3 = var3.bind(var8)(var2);
                        var5 = _closure1_slot0;
                        var2 = 21;
                        var2 = var6[var2];
                        var2 = var5.bind(var8)(var2);
                        var2 = var2.EntitlementFeatureNames;
                        var2 = var2.SOUNDBOARD_EVERYWHERE;
                        var2 = var3.bind(var8)(var2);
                        _fun0005_ip = 296; continue _fun0005;
 153:
                        var1 = _closure2_slot0;
                        var1 = var1.available;
                        if(var1) { _fun0005_ip = 296; continue _fun0005 }
 169:
                        var6 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var1 = 22;
                        var1 = var9[var1];
                        var3 = var6.bind(var8)(var1);
                        var2 = var3.open;
                        var1 = {};
                        var5 = 'DISABLED_SOUND_PRESSED';
                        var1['key'] = var5;
                        var5 = 23;
                        var5 = var9[var5];
                        var5 = var6.bind(var8)(var5);
                        var1['icon'] = var5;
                        var7 = _closure1_slot0;
                        var4 = 24;
                        var5 = var9[var4];
                        var5 = var7.bind(var8)(var5);
                        var6 = var5.intl;
                        var5 = var6.string;
                        var4 = var9[var4];
                        var4 = var7.bind(var8)(var4);
                        var4 = var4.t;
                        var4 = var4.MDOXJS;
                        var4 = var5.bind(var6)(var4);
                        var1['content'] = var4;
                        var4 = 3000;
                        var1['toastDurationMs'] = var4;
                        var1 = var2.bind(var3)(var1);
 296:
                        var1 = undefined;
                        return var1;
                    }
                };
                var13 = var11.bind(var5)(var3, var9);
                var3 = function(arg1) {
                    var9 = arg1;
                    var _closure3_slot0 = var9;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 5;
                    var4 = var8[var3];
                    var5 = undefined;
                    var10 = var7.bind(var5)(var4);
                    var4 = var10.useSharedValue;
                    var6 = 0;
                    var4 = var4.bind(var10)(var6);
                    var _closure3_slot1 = var4;
                    var3 = var8[var3];
                    var5 = var7.bind(var5)(var3);
                    var3 = var5.useSharedValue;
                    var3 = var3.bind(var5)(var6);
                    var _closure3_slot2 = var3;
                    var8 = _closure1_slot3;
                    var6 = var8.useCallback;
                    var5 = new Array(1);
                    var5[0] = var4;
                    var2 = function() {
                        var3 = _closure3_slot1;
                        var2 = var3.set;
                        var1 = 1;
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    };
                    var6 = var6.bind(var8)(var2, var5);
                    var7 = var8.useCallback;
                    var5 = new Array(1);
                    var5[0] = var4;
                    var2 = function() {
                        var3 = _closure3_slot1;
                        var2 = var3.set;
                        var1 = 0;
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    };
                    var5 = var7.bind(var8)(var2, var5);
                    var7 = var8.useEffect;
                    var2 = new Array(3);
                    var2[0] = var9;
                    var2[1] = var3;
                    var2[2] = var4;
                    var1 = function() {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                            var3 = _closure3_slot2;
                            var2 = var3.set;
                            var4 = _closure3_slot0;
                            var1 = 0;
                            if(!var4) { _fun0006_ip = 24; continue _fun0006 }
 21:
                            var1 = 1;
 24:
                            var1 = var2.bind(var3)(var1);
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var1 = var7.bind(var8)(var1, var2);
                    var1 = {};
                    var2 = {};
                    var2['pressIn'] = var6;
                    var2['pressOut'] = var5;
                    var1['handlers'] = var2;
                    var2 = {};
                    var2['pressed'] = var4;
                    var2['playing'] = var3;
                    var1['sharedValues'] = var2;
                    return var1;
                };
                var16 = var3.bind(var4)(var18);
                var9 = _closure1_slot13;
                var3 = {};
                var11 = var16.sharedValues;
                var3['sharedValues'] = var11;
                var11 = {'pressed': 0.95, 'playing': 1.05};
                var3['scaleFactors'] = var11;
                var20 = var9.bind(var4)(var3);
                var3 = var16.sharedValues;
                var9 = var3.pressed;
                var3 = var9.get;
                var9 = var3.bind(var9)();
                var3 = 0;
                var22 = var9 > var3;
                var3 = var5.useCallback;
                var9 = var2.id;
                var2 = new Array(2);
                var2[0] = var9;
                var2[1] = var15;
                var1 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 25;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = _closure2_slot1;
                    var3 = var3.id;
                    var2 = _closure2_slot0;
                    var2 = var4.bind(var1)(var3, var2);
                    return var1;
                };
                var11 = var3.bind(var5)(var1, var2);
                var3 = _closure1_slot7;
                var2 = _closure1_slot4;
                var1 = {};
                var9 = _closure1_slot11;
                var5 = {};
                var21 = var10.button;
                var14 = new Array(7);
                var14[0] = var21;
                var21 = {};
                var21['width'] = var23;
                var14[1] = var21;
                var21 = null;
                if(!var22) { _fun0004_ip = 526; continue _fun0004 }
 520:
                var21 = var10.buttonPressed;
 526:
                var14[2] = var21;
                var14[3] = var20;
                var20 = null;
                if(!var18) { _fun0004_ip = 545; continue _fun0004 }
 539:
                var20 = var10.buttonPlaying;
 545:
                var14[4] = var20;
                var20 = null;
                if(!var6) { _fun0004_ip = 565; continue _fun0004 }
 554:
                var20 = null;
                if(var8) { _fun0004_ip = 565; continue _fun0004 }
 559:
                var20 = var10.buttonDisabled;
 565:
                var14[5] = var20;
                var14[6] = var19;
                var5['style'] = var14;
                var14 = 'button';
                var5['accessibilityRole'] = var14;
                var14 = var15.name;
                var5['accessibilityLabel'] = var14;
                var14 = var16.handlers;
                var14 = var14.pressIn;
                var5['onPressIn'] = var14;
                var14 = var16.handlers;
                var14 = var14.pressOut;
                var5['onPressOut'] = var14;
                var5['onPress'] = var13;
                var5['onLongPress'] = var11;
                if(!var12) { _fun0004_ip = 672; continue _fun0004 }
 640:
                var14 = _closure1_slot6;
                var13 = _closure1_slot14;
                var11 = {};
                var16 = var16.sharedValues;
                var11['sharedValues'] = var16;
                var11['sound'] = var15;
                var12 = var14.bind(var4)(var13, var11);
 672:
                var11 = new Array(2);
                var11[0] = var12;
                var14 = _closure1_slot6;
                var13 = _closure1_slot0;
                var16 = _closure1_slot2;
                var12 = 26;
                var12 = var16[var12];
                var12 = var13.bind(var4)(var12);
                var13 = var12.Text;
                var12 = {'lineClamp': 1, 'style': null, 'variant': 'text-sm/semibold'};
                var19 = var10.text;
                var16 = new Array(2);
                var16[0] = var19;
                var17 = null;
                if(!var18) { _fun0004_ip = 747; continue _fun0004 }
 741:
                var17 = var10.textPlaying;
 747:
                var16[1] = var17;
                var12['style'] = var16;
                var15 = var15.name;
                var12['children'] = var15;
                var12 = var14.bind(var4)(var13, var12);
                var11[1] = var12;
                var5['children'] = var11;
                var9 = var3.bind(var4)(var9, var5);
                var5 = new Array(2);
                var5[0] = var9;
                if(!var6) { _fun0004_ip = 800; continue _fun0004 }
 797:
                var6 = !var8;
 800:
                if(!var6) { _fun0004_ip = 851; continue _fun0004 }
 803:
                var9 = _closure1_slot6;
                var8 = _closure1_slot0;
                var11 = _closure1_slot2;
                var7 = 27;
                var7 = var11[var7];
                var7 = var8.bind(var4)(var7);
                var8 = var7.LockIcon;
                var7 = {};
                var10 = var10.lock;
                var7['style'] = var10;
                var6 = var9.bind(var4)(var8, var7);
 851:
                var5[1] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var2 = var7.bind(var8)(var2);
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/soundboard/native/SoundButton.tsx';
        var4 = var5.bind(var6)(var4);
        var3['SoundButton'] = var2;
        return var1;
    }
})();