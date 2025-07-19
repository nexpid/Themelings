// app/modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingProgressBar.tsx
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
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var13.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var5 = var7[var2];
    var2 = native4;
    var2 = var2.bind(var1)(var5);
    var _closure1_slot4 = var2;
    var15 = 2;
    var2 = var7[var15];
    var2 = var6.bind(var1)(var2);
    var2 = var2.View;
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var13.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var17 = 4;
    var2 = var7[var17];
    var2 = var6.bind(var1)(var2);
    var8 = var2.BoostedGuildTiers;
    var _closure1_slot7 = var8;
    var2 = 5;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.jsx;
    var _closure1_slot8 = var5;
    var2 = var2.jsxs;
    var _closure1_slot9 = var2;
    var2 = 6;
    var2 = var7[var2];
    var10 = var6.bind(var1)(var2);
    var9 = var10.createStyles;
    var5 = {};
    var11 = {'display': 'flex', 'alignItems': 'center', 'width': '100%', 'marginTop': 40};
    var2 = 40;
    var14 = 7;
    var12 = var7[var14];
    var12 = var6.bind(var1)(var12);
    var12 = var12.MARKER_DIMENSIONS;
    var16 = var12 / var15;
    var12 = 34;
    var12 = var16 + var12;
    var11['paddingHorizontal'] = var12;
    var5['progressBarContainer'] = var11;
    var11 = {'height': 54, 'maxWidth': 660, 'width': '100%'};
    var5['progressBar'] = var11;
    var11 = {};
    var12 = 8;
    var11['height'] = var12;
    var16 = var7[var14];
    var16 = var6.bind(var1)(var16);
    var16 = var16.MARKER_DIMENSIONS;
    var16 = var16 / var15;
    var16 = var16 - var17;
    var11['top'] = var16;
    var14 = var7[var14];
    var14 = var6.bind(var1)(var14);
    var14 = var14.MARKER_DIMENSIONS;
    var14 = var14 / var15;
    var14 = var14 + var15;
    var11['marginHorizontal'] = var14;
    var5['progressBarScrubber'] = var11;
    var11 = {'borderRadius': 8, 'height': '100%', 'width': '100%', 'position': 'absolute', 'zIndex': 0};
    var12 = var7[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.SPINE_DEFAULT;
    var11['backgroundColor'] = var12;
    var5['progressBarTrack'] = var11;
    var11 = {'borderRadius': 8, 'position': 'absolute', 'height': '100%', 'left': 0, 'zIndex': 1};
    var5['progressBarFill'] = var11;
    var11 = {'height': '100%', 'width': '100%', 'borderRadius': 8};
    var5['progressBarGradientFill'] = var11;
    var5 = var9.bind(var10)(var5);
    var _closure1_slot10 = var5;
    var9 = var8.NONE;
    var5 = new Array(4);
    var5[0] = var9;
    var9 = var8.TIER_1;
    var5[1] = var9;
    var9 = var8.TIER_2;
    var5[2] = var9;
    var8 = var8.TIER_3;
    var5[3] = var8;
    var _closure1_slot11 = var5;
    var5 = {'stiffness': 27, 'damping': 10};
    var _closure1_slot12 = var5;
    var5 = {};
    var8 = 'function GuildBoostingMarketingProgressBarTsx1(){const{width}=this.__closure;return{width:width.get()+"%"};}';
    var5['code'] = var8;
    var _closure1_slot13 = var5;
    var5 = {};
    var8 = 'function GuildBoostingMarketingProgressBarTsx2(){const{width}=this.__closure;return width.get();}';
    var5['code'] = var8;
    var _closure1_slot14 = var5;
    var5 = {};
    var8 = 'function GuildBoostingMarketingProgressBarTsx3(width){const{BoostedGuildTiers,TIER_REACHED_OFFSET,revealedTier,runOnJS,setRevealedTier}=this.__closure;let tier=BoostedGuildTiers.NONE;if(width>=33.33-TIER_REACHED_OFFSET)tier=BoostedGuildTiers.TIER_1;if(width>=66.67-TIER_REACHED_OFFSET)tier=BoostedGuildTiers.TIER_2;if(width>=100-TIER_REACHED_OFFSET)tier=BoostedGuildTiers.TIER_3;if(tier!==revealedTier)runOnJS(setRevealedTier)(tier);}';
    var5['code'] = var8;
    var _closure1_slot15 = var5;
    var5 = 16;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingProgressBar.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function ProgressBar(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var2 = var1.guild;
            var _closure2_slot0 = var2;
            var1 = _closure1_slot10;
            var4 = undefined;
            var14 = var1.bind(var4)();
            var13 = _closure1_slot1;
            var18 = _closure1_slot2;
            var1 = 9;
            var1 = var18[var1];
            var1 = var13.bind(var4)(var1);
            var17 = var1.bind(var4)();
            var16 = _closure1_slot0;
            var1 = 10;
            var1 = var18[var1];
            var6 = var16.bind(var4)(var1);
            var5 = var6.useStateFromStores;
            var1 = _closure1_slot6;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var1 = _closure1_slot6;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var1 = var5.bind(var6)(var3, var1);
            var _closure2_slot1 = var1;
            var10 = 11;
            var3 = var18[var10];
            var6 = var16.bind(var4)(var3);
            var5 = var6.useSharedValue;
            var3 = 0;
            var6 = var5.bind(var6)(var3);
            var _closure2_slot2 = var6;
            var5 = _closure1_slot4;
            var11 = var5.useState;
            var22 = _closure1_slot7;
            var7 = var22.NONE;
            var12 = var11.bind(var5)(var7);
            var11 = _closure1_slot3;
            var7 = 2;
            var7 = var11.bind(var4)(var12, var7);
            var21 = var7[var3];
            var _closure2_slot3 = var21;
            var3 = 1;
            var20 = var7[var3];
            var _closure2_slot4 = var20;
            var3 = var18[var10];
            var11 = var16.bind(var4)(var3);
            var7 = var11.useAnimatedStyle;
            var3 = function I() {
                var1 = {};
                var3 = _closure2_slot2;
                var2 = var3.get;
                var5 = var2.bind(var3)();
                var2 = global;
                var2 = var2.HermesInternal;
                var4 = var2.concat;
                var3 = '';
                var2 = '%';
                var2 = var4.bind(var3)(var5, var2);
                var1['width'] = var2;
                return var1;
            };
            var12 = {};
            var12['width'] = var6;
            var3['__closure'] = var12;
            var12 = 8013193810386.0;
            var3['__workletHash'] = var12;
            var12 = _closure1_slot13;
            var3['__initData'] = var12;
            var15 = var7.bind(var11)(var3);
            var3 = var18[var10];
            var12 = var16.bind(var4)(var3);
            var11 = var12.useAnimatedReaction;
            var7 = function p() {
                var2 = _closure2_slot2;
                var1 = var2.get;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = {};
            var3['width'] = var6;
            var7['__closure'] = var3;
            var3 = 5482324713221.0;
            var7['__workletHash'] = var3;
            var3 = _closure1_slot14;
            var7['__initData'] = var3;
            var3 = function w(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var4 = arg1;
                    var1 = _closure1_slot7;
                    var3 = var1.NONE;
                    var1 = 28.33;
                    if(!(var4 >= var1)) { _fun0002_ip = 40; continue _fun0002 }
 30:
                    var1 = _closure1_slot7;
                    var3 = var1.TIER_1;
 40:
                    var1 = 61.67;
                    if(!(var4 >= var1)) { _fun0002_ip = 64; continue _fun0002 }
 54:
                    var1 = _closure1_slot7;
                    var3 = var1.TIER_2;
 64:
                    var1 = 95;
                    if(!(var4 >= var1)) { _fun0002_ip = 81; continue _fun0002 }
 71:
                    var1 = _closure1_slot7;
                    var3 = var1.TIER_3;
 81:
                    var4 = _closure2_slot3;
                    if(!(var3 !== var4)) { _fun0002_ip = 133; continue _fun0002 }
 92:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 11;
                    var4 = var4[var2];
                    var2 = undefined;
                    var5 = var5.bind(var2)(var4);
                    var4 = var5.runOnJS;
                    var1 = _closure2_slot4;
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.bind(var2)(var3);
 133:
                    var1 = undefined;
                    return var1;
                }
            };
            var19 = {};
            var19['BoostedGuildTiers'] = var22;
            var22 = 5;
            var19['TIER_REACHED_OFFSET'] = var22;
            var19['revealedTier'] = var21;
            var21 = var18[var10];
            var21 = var16.bind(var4)(var21);
            var21 = var21.runOnJS;
            var19['runOnJS'] = var21;
            var19['setRevealedTier'] = var20;
            var3['__closure'] = var19;
            var19 = 4844648302516.0;
            var3['__workletHash'] = var19;
            var19 = _closure1_slot15;
            var3['__initData'] = var19;
            var3 = var11.bind(var12)(var7, var3);
            var7 = var5.useMemo;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 12;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getGuildBoostingProgressBarFillFactor;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var7.bind(var5)(var2, var3);
            var7 = var2.fillFactor;
            var _closure2_slot5 = var7;
            var3 = var5.useEffect;
            var2 = new Array(3);
            var2[0] = var7;
            var2[1] = var6;
            var2[2] = var1;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var4 = _closure2_slot5;
                    var3 = 100;
                    var4 = var3 * var4;
                    var _closure3_slot0 = var4;
                    var3 = -1;
                    var _closure3_slot1 = var3;
                    var3 = _closure2_slot1;
                    if(var3) { _fun0003_ip = 72; continue _fun0003 }
 37:
                    var3 = global;
                    var7 = var3.setTimeout;
                    var6 = undefined;
                    var5 = function() {
                        var4 = _closure2_slot2;
                        var3 = var4.set;
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 13;
                        var5 = var5[var1];
                        var1 = undefined;
                        var7 = var6.bind(var1)(var5);
                        var6 = var7.withSpring;
                        var5 = _closure3_slot0;
                        var2 = _closure1_slot12;
                        var2 = var6.bind(var7)(var5, var2);
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var3 = 750;
                    var3 = var7.bind(var6)(var5, var3);
                    _closure3_slot1 = var3;
                    _fun0003_ip = 86; continue _fun0003;
 72:
                    var3 = _closure2_slot2;
                    var2 = var3.set;
                    var2 = var2.bind(var3)(var4);
 86:
                    var1 = function() {
                        var1 = global;
                        var3 = var1.window;
                        var2 = var3.clearTimeout;
                        var1 = _closure3_slot1;
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    };
                    return var1;
                }
            };
            var1 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot8;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var14.progressBarContainer;
            var1['style'] = var5;
            var6 = _closure1_slot9;
            var5 = {};
            var7 = var14.progressBar;
            var5['style'] = var7;
            var7 = {};
            var11 = var14.progressBarScrubber;
            var7['style'] = var11;
            var10 = var18[var10];
            var10 = var13.bind(var4)(var10);
            var11 = var10.View;
            var10 = {};
            var19 = var14.progressBarFill;
            var12 = new Array(2);
            var12[0] = var19;
            var12[1] = var15;
            var10['style'] = var12;
            var12 = 14;
            var12 = var18[var12];
            var13 = var13.bind(var4)(var12);
            var12 = {'useAngle': true, 'angle': 90};
            var15 = 15;
            var15 = var18[var15];
            var16 = var16.bind(var4)(var15);
            var15 = var16.isThemeDark;
            var15 = var15.bind(var16)(var17);
            var16 = '#515359';
            if(var15) { _fun0001_ip = 647; continue _fun0001 }
 616:
            var17 = _closure1_slot1;
            var18 = _closure1_slot2;
            var15 = 8;
            var15 = var18[var15];
            var15 = var17.bind(var4)(var15);
            var15 = var15.unsafe_rawColors;
            var16 = var15.PRIMARY_160;
 647:
            var15 = new Array(2);
            var15[0] = var16;
            var16 = '#AB77F2';
            var15[1] = var16;
            var12['colors'] = var15;
            var15 = [0.1577, 0.9905];
            var12['locations'] = var15;
            var15 = var14.progressBarGradientFill;
            var12['style'] = var15;
            var12 = var3.bind(var4)(var13, var12);
            var10['children'] = var12;
            var11 = var3.bind(var4)(var11, var10);
            var10 = new Array(2);
            var10[0] = var11;
            var13 = _closure1_slot8;
            var12 = _closure1_slot5;
            var11 = {};
            var14 = var14.progressBarTrack;
            var11['style'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var10[1] = var11;
            var7['children'] = var10;
            var10 = var6.bind(var4)(var2, var7);
            var7 = new Array(2);
            var7[0] = var10;
            var10 = _closure1_slot11;
            var9 = var10.map;
            var8 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var5 = arg1;
                    var4 = _closure1_slot8;
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var10 = 7;
                    var1 = var1[var10];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var6 = _closure2_slot0;
                    var1['guild'] = var6;
                    var1['tier'] = var5;
                    var9 = _closure2_slot3;
                    var1['revealedTier'] = var9;
                    var9 = _closure2_slot1;
                    var1['useReducedMotion'] = var9;
                    var6 = var6.premiumTier;
                    var6 = var6 <= var5;
                    if(!var6) { _fun0004_ip = 116; continue _fun0004 }
 81:
                    var8 = _closure2_slot5;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var7 = var7[var10];
                    var7 = var9.bind(var3)(var7);
                    var7 = var7.TierMarkerPositions;
                    var7 = var7[var5];
                    var6 = var8 > var7;
 116:
                    var1['isDisabled'] = var6;
                    var1 = var4.bind(var3)(var2, var1, var5);
                    return var1;
                }
            };
            var8 = var9.bind(var10)(var8);
            var7[1] = var8;
            var5['children'] = var7;
            var5 = var6.bind(var4)(var2, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var3['PROGRESS_BAR_SPACING'] = var2;
    return var1;
})();