// app/modules/voice_channel_effects/native/AnimatedEffectEmoji.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
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
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var7 = 2;
    var4 = var6[var7];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 4;
    var8 = var6[var4];
    var8 = var11.bind(var1)(var8);
    var8 = var8.Millis;
    var8 = var8.SECOND;
    var10 = 6;
    var8 = var10 * var8;
    var _closure1_slot7 = var8;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var4 = var4.Millis;
    var4 = var4.SECOND;
    var4 = var7 * var4;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'backgroundColor': null, 'borderRadius': null, 'position': 'absolute', 'right': 16, 'top': 16};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_FLOATING;
    var9['backgroundColor'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.radii;
    var10 = var10.round;
    var9['borderRadius'] = var10;
    var4['voiceChannelEffectEmojiContainer'] = var9;
    var9 = {'right': 'auto', 'left': 16};
    var4['voiceChannelEffectEmojiContainerTileNotch'] = var9;
    var9 = {};
    var10 = 12;
    var9['padding'] = var10;
    var4['voiceChannelEffectEmoji'] = var9;
    var9 = {'fontSize': 32, 'lineHeight': 38, 'alignContent': 'center', 'justifyContent': 'center', 'display': 'flex', 'width': 32, 'height': 32};
    var4['textEmoji'] = var9;
    var9 = {'width': 32, 'height': 32};
    var4['imageEmoji'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = function Emoji(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var7 = var1.url;
            var8 = var1.surrogates;
            var1 = _closure1_slot9;
            var5 = undefined;
            var6 = var1.bind(var5)();
            var1 = '';
            if(!(var1 === var7)) { _fun0001_ip = 103; continue _fun0001 }
 34:
            var4 = _closure1_slot6;
            var3 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 8;
            var1 = var9[var1];
            var1 = var3.bind(var5)(var1);
            var3 = var1.LegacyText;
            var1 = {};
            var10 = var6.textEmoji;
            var9 = new Array(1);
            var9[0] = var10;
            var1['style'] = var9;
            var9 = false;
            var1['allowFontScaling'] = var9;
            var1['children'] = var8;
            var1 = var4.bind(var5)(var3, var1);
            _fun0001_ip = 172; continue _fun0001;
 103:
            var4 = _closure1_slot6;
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 7;
            var2 = var8[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var8 = 'contain';
            var2['resizeMode'] = var8;
            var8 = var6.imageEmoji;
            var6 = new Array(1);
            var6[0] = var8;
            var2['style'] = var6;
            var6 = {};
            var6['uri'] = var7;
            var2['source'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 172:
            return var1;
        }
    };
    var _closure1_slot10 = var4;
    var4 = {};
    var7 = 'function AnimatedEffectEmojiTsx1(){const{withSequence,withTiming,ANIMATION_ROTATION_DEG,withDelay,useReducedMotion,STANDARD_EASING}=this.__closure;const rotate=withSequence(withTiming(ANIMATION_ROTATION_DEG+"deg",{duration:0}),withDelay(100,withTiming(\'0deg\',{duration:useReducedMotion?0:300,easing:STANDARD_EASING})));const scale=withSequence(withTiming(0,{duration:0}),withDelay(100,withTiming(1,{duration:useReducedMotion?0:300,easing:STANDARD_EASING})));return{transform:[{scale:scale},{rotate:rotate}]};}';
    var4['code'] = var7;
    var _closure1_slot11 = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_channel_effects/native/AnimatedEffectEmoji.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function AnimatedEffectEmoji(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var14 = var2.userId;
            var3 = var2.voiceChannelEffect;
            var7 = var2.hasNotch;
            var5 = undefined;
            if(!(var7 === var5)) { _fun0002_ip = 30; continue _fun0002 }
 28:
            var7 = false;
 30:
            var2 = var2.onComplete;
            var _closure2_slot0 = var2;
            var _closure2_slot1 = var5;
            var _closure2_slot2 = var5;
            var4 = _closure1_slot9;
            var9 = var4.bind(var5)();
            var11 = var3.emoji;
            var15 = var3.sentAt;
            _closure2_slot1 = var15;
            var10 = _closure1_slot0;
            var13 = _closure1_slot2;
            var3 = 9;
            var3 = var13[var3];
            var8 = var10.bind(var5)(var3);
            var6 = var8.useStateFromStores;
            var3 = _closure1_slot5;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var1 = _closure1_slot5;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var8 = var6.bind(var8)(var4, var3);
            _closure2_slot2 = var8;
            var6 = _closure1_slot3;
            var4 = var6.useEffect;
            var3 = new Array(3);
            var3[0] = var15;
            var3[1] = var14;
            var3[2] = var2;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var4 = global;
                    var3 = var4.Date;
                    var2 = var3.now;
                    var5 = var2.bind(var3)();
                    var3 = _closure2_slot1;
                    var6 = var5 - var3;
                    var5 = _closure1_slot8;
                    if(!(!(var6 >= var5))) { _fun0003_ip = 72; continue _fun0003 }
 41:
                    var6 = var4.setTimeout;
                    var5 = _closure1_slot7;
                    var4 = undefined;
                    var3 = function() {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            var3 = _closure2_slot0;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0004_ip = 23; continue _fun0004 }
 13:
                            var2 = _closure2_slot0;
                            var1 = undefined;
                            var1 = var2.bind(var1)();
 23:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var3 = var6.bind(var4)(var3, var5);
                    var _closure3_slot0 = var3;
                    _fun0003_ip = 92; continue _fun0003;
 72:
                    var4 = _closure2_slot0;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0003_ip = 92; continue _fun0003 }
 82:
                    var3 = _closure2_slot0;
                    var2 = undefined;
                    var2 = var3.bind(var2)();
 92:
                    var1 = function() {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                            var3 = _closure3_slot0;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0005_ip = 32; continue _fun0005 }
 13:
                            var2 = global;
                            var3 = var2.clearTimeout;
                            var2 = _closure3_slot0;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
 32:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    return var1;
                }
            };
            var2 = var4.bind(var6)(var2, var3);
            var2 = 10;
            var3 = var13[var2];
            var4 = var10.bind(var5)(var3);
            var3 = var4.useAnimatedStyle;
            var1 = function N() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var9 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var8 = 10;
                    var3 = var1[var8];
                    var15 = undefined;
                    var5 = var9.bind(var15)(var3);
                    var4 = var5.withSequence;
                    var13 = 11;
                    var3 = var1[var13];
                    var10 = var9.bind(var15)(var3);
                    var7 = var10.withTiming;
                    var6 = {};
                    var17 = 0;
                    var6['duration'] = var17;
                    var3 = '-120deg';
                    var3 = var7.bind(var10)(var3, var6);
                    var6 = var1[var8];
                    var7 = var9.bind(var15)(var6);
                    var6 = var7.withDelay;
                    var1 = var1[var13];
                    var19 = var9.bind(var15)(var1);
                    var10 = var19.withTiming;
                    var9 = {};
                    var11 = _closure2_slot2;
                    var14 = 300;
                    var1 = var14;
                    if(!var11) { _fun0006_ip = 120; continue _fun0006 }
 118:
                    var1 = 0;
 120:
                    var9['duration'] = var1;
                    var12 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var16 = 12;
                    var1 = var11[var16];
                    var1 = var12.bind(var15)(var1);
                    var1 = var1.STANDARD_EASING;
                    var9['easing'] = var1;
                    var1 = '0deg';
                    var1 = var10.bind(var19)(var1, var9);
                    var10 = 100;
                    var1 = var6.bind(var7)(var10, var1);
                    var4 = var4.bind(var5)(var3, var1);
                    var1 = {};
                    var3 = {};
                    var5 = var11[var8];
                    var7 = var12.bind(var15)(var5);
                    var6 = var7.withSequence;
                    var5 = var11[var13];
                    var19 = var12.bind(var15)(var5);
                    var9 = var19.withTiming;
                    var5 = {};
                    var5['duration'] = var17;
                    var5 = var9.bind(var19)(var17, var5);
                    var8 = var11[var8];
                    var9 = var12.bind(var15)(var8);
                    var8 = var9.withDelay;
                    var11 = var11[var13];
                    var13 = var12.bind(var15)(var11);
                    var12 = var13.withTiming;
                    var11 = {};
                    var18 = _closure2_slot2;
                    if(!var18) { _fun0006_ip = 267; continue _fun0006 }
 265:
                    var14 = 0;
 267:
                    var11['duration'] = var14;
                    var14 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var16];
                    var2 = var14.bind(var15)(var2);
                    var2 = var2.STANDARD_EASING;
                    var11['easing'] = var2;
                    var2 = 1;
                    var2 = var12.bind(var13)(var2, var11);
                    var2 = var8.bind(var9)(var10, var2);
                    var2 = var6.bind(var7)(var5, var2);
                    var3['scale'] = var2;
                    var2 = new Array(2);
                    var2[0] = var3;
                    var3 = {};
                    var3['rotate'] = var4;
                    var2[1] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var6 = {};
            var14 = var13[var2];
            var14 = var10.bind(var5)(var14);
            var14 = var14.withSequence;
            var6['withSequence'] = var14;
            var14 = 11;
            var14 = var13[var14];
            var14 = var10.bind(var5)(var14);
            var14 = var14.withTiming;
            var6['withTiming'] = var14;
            var14 = -120;
            var6['ANIMATION_ROTATION_DEG'] = var14;
            var14 = var13[var2];
            var14 = var10.bind(var5)(var14);
            var14 = var14.withDelay;
            var6['withDelay'] = var14;
            var6['useReducedMotion'] = var8;
            var8 = 12;
            var8 = var13[var8];
            var8 = var10.bind(var5)(var8);
            var8 = var8.STANDARD_EASING;
            var6['STANDARD_EASING'] = var8;
            var1['__closure'] = var6;
            var6 = 75069010226.0;
            var1['__workletHash'] = var6;
            var6 = _closure1_slot11;
            var1['__initData'] = var6;
            var8 = var3.bind(var4)(var1);
            var1 = null;
            var3 = var1 != var11;
            if(!var3) { _fun0002_ip = 550; continue _fun0002 }
 345:
            var4 = _closure1_slot6;
            var3 = _closure1_slot1;
            var16 = _closure1_slot2;
            var2 = var16[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.View;
            var2 = {};
            var10 = var9.voiceChannelEffectEmojiContainer;
            var6 = new Array(4);
            var6[0] = var10;
            var15 = _closure1_slot0;
            var10 = 13;
            var13 = var16[var10];
            var14 = var15.bind(var5)(var13);
            var13 = var14.generateBoxShadowStyle;
            var10 = var16[var10];
            var10 = var15.bind(var5)(var10);
            var10 = var10.EIGHT_DP_ELEVATION_SHADOW_PARAMS;
            var10 = var13.bind(var14)(var10);
            var6[1] = var10;
            var6[2] = var8;
            if(!var7) { _fun0002_ip = 446; continue _fun0002 }
 440:
            var7 = var9.voiceChannelEffectEmojiContainerTileNotch;
 446:
            var6[3] = var7;
            var2['style'] = var6;
            var8 = _closure1_slot6;
            var7 = _closure1_slot4;
            var6 = {};
            var9 = var9.voiceChannelEffectEmoji;
            var6['style'] = var9;
            var10 = _closure1_slot10;
            var9 = {};
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var12 = 14;
            var12 = var14[var12];
            var13 = var13.bind(var5)(var12);
            var12 = var13.getEffectUrl;
            var12 = var12.bind(var13)(var11);
            var9['url'] = var12;
            var11 = var11.name;
            var9['surrogates'] = var11;
            var9 = var8.bind(var5)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 550:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();