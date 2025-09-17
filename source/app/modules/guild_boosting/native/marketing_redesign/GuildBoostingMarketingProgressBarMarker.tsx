// app/modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingProgressBarMarker.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var8;
    var1 = function ProgressBarMarkerInnerContent(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var8 = var2.tier;
            var14 = var2.isTierUnlocked;
            var4 = var2.isTierAnimated;
            var1 = var2.isCurrentTier;
            var11 = var2.useReducedMotion;
            var2 = var2.isDisabled;
            var5 = undefined;
            var _closure2_slot1 = var5;
            var6 = _closure1_slot11;
            var10 = var6.bind(var5)();
            var9 = _closure1_slot1;
            var6 = _closure1_slot2;
            var7 = 9;
            var7 = var6[var7];
            var7 = var9.bind(var5)(var7);
            var19 = var7.bind(var5)();
            var7 = _closure1_slot0;
            var16 = 10;
            var6 = var6[var16];
            var7 = var7.bind(var5)(var6);
            var6 = var7.useSharedValue;
            var12 = 1;
            var9 = var6.bind(var7)(var12);
            var _closure2_slot0 = var9;
            if(!var14) { _fun0001_ip = 122; continue _fun0001 }
 119:
            var14 = var4;
 122:
            _closure2_slot1 = var14;
            var15 = _closure1_slot3;
            var7 = var15.useEffect;
            var6 = new Array(2);
            var6[0] = var14;
            var6[1] = var9;
            var4 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    if(!var2) { _fun0002_ip = 79; continue _fun0002 }
 10:
                    var3 = _closure2_slot0;
                    var2 = var3.set;
                    var1 = 0;
                    var1 = var2.bind(var3)(var1);
                    var2 = var3.set;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 11;
                    var5 = var5[var4];
                    var4 = undefined;
                    var6 = var6.bind(var4)(var5);
                    var5 = var6.withSpring;
                    var4 = _closure1_slot12;
                    var1 = 1;
                    var1 = var5.bind(var6)(var1, var4);
                    var1 = var2.bind(var3)(var1);
 79:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var7.bind(var15)(var4, var6);
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var16];
            var6 = var6.bind(var5)(var4);
            var4 = var6.useAnimatedStyle;
            var3 = function y() {
                var1 = {};
                var3 = {};
                var4 = _closure2_slot0;
                var2 = var4.get;
                var2 = var2.bind(var4)();
                var3['scale'] = var2;
                var2 = new Array(1);
                var2[0] = var3;
                var1['transform'] = var2;
                return var1;
            };
            var7 = {};
            var7['scale'] = var9;
            var3['__closure'] = var7;
            var7 = 7240908357686.0;
            var3['__workletHash'] = var7;
            var7 = _closure1_slot13;
            var3['__initData'] = var7;
            var15 = var4.bind(var6)(var3);
            var3 = _closure1_slot6;
            var3 = var3.NONE;
            var7 = null;
            if(!(var8 !== var3)) { _fun0001_ip = 417; continue _fun0001 }
 253:
            var6 = _closure1_slot7;
            if(var2) { _fun0001_ip = 368; continue _fun0001 }
 260:
            var3 = _closure1_slot5;
            var2 = {};
            var4 = _closure1_slot10;
            var4 = var4[var8];
            var2['source'] = var4;
            if(var14) { _fun0001_ip = 289; continue _fun0001 }
 281:
            var8 = var10.progressBarMarkerInnerCircleIcon;
            _fun0001_ip = 295; continue _fun0001;
 289:
            var8 = var10.progressBarMarkerInnerCircleIconUnlocked;
 295:
            var4 = new Array(2);
            var4[0] = var8;
            var8 = {};
            var17 = _closure1_slot1;
            var18 = _closure1_slot2;
            var9 = 8;
            var9 = var18[var9];
            var9 = var17.bind(var5)(var9);
            var17 = var9.unsafe_rawColors;
            if(var14) { _fun0001_ip = 341; continue _fun0001 }
 333:
            var9 = var17.PREMIUM_PERK_PINK;
            _fun0001_ip = 347; continue _fun0001;
 341:
            var9 = var17.WHITE_100;
 347:
            var8['tintColor'] = var9;
            var4[1] = var8;
            var2['style'] = var4;
            var2 = var6.bind(var5)(var3, var2);
            _fun0001_ip = 414; continue _fun0001;
 368:
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 12;
            var3 = var8[var3];
            var3 = var4.bind(var5)(var3);
            var4 = var3.BoostSlashIcon;
            var3 = {'size': 'xxs', 'color': 'currentColor'};
            var2 = var6.bind(var5)(var4, var3);
 414:
            var7 = var2;
 417:
            if(!var1) { _fun0001_ip = 429; continue _fun0001 }
 420:
            var1 = var7;
            if(var14) { _fun0001_ip = 691; continue _fun0001 }
 429:
            var4 = _closure1_slot8;
            var3 = _closure1_slot4;
            var2 = {};
            var8 = var10.progressBarMarkerInnerCircle;
            var6 = new Array(1);
            var6[0] = var8;
            var2['style'] = var6;
            var9 = _closure1_slot7;
            var8 = _closure1_slot1;
            var6 = _closure1_slot2;
            var6 = var6[var16];
            var6 = var8.bind(var5)(var6);
            var8 = var6.View;
            var6 = {};
            var16 = var10.progressBarMarkerInnerCircleBackground;
            var10 = new Array(3);
            var10[0] = var16;
            var11 = !var11;
            if(!var11) { _fun0001_ip = 508; continue _fun0001 }
 505:
            var11 = var14;
 508:
            if(!var11) { _fun0001_ip = 514; continue _fun0001 }
 511:
            var11 = var15;
 514:
            var10[1] = var11;
            var11 = {};
            if(var14) { _fun0001_ip = 620; continue _fun0001 }
 523:
            var18 = _closure1_slot0;
            var20 = _closure1_slot2;
            var14 = 13;
            var14 = var20[var14];
            var16 = var18.bind(var5)(var14);
            var15 = var16.hexWithOpacity;
            var17 = _closure1_slot1;
            var14 = 8;
            var14 = var20[var14];
            var14 = var17.bind(var5)(var14);
            var14 = var14.unsafe_rawColors;
            var14 = var14.WHITE_500;
            var17 = 14;
            var17 = var20[var17];
            var18 = var18.bind(var5)(var17);
            var17 = var18.isThemeDark;
            var17 = var17.bind(var18)(var19);
            if(!var17) { _fun0001_ip = 612; continue _fun0001 }
 602:
            var12 = 0.5;
 612:
            var12 = var15.bind(var16)(var14, var12);
            _fun0001_ip = 651; continue _fun0001;
 620:
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var13 = 8;
            var13 = var15[var13];
            var13 = var14.bind(var5)(var13);
            var13 = var13.unsafe_rawColors;
            var12 = var13.PREMIUM_PERK_PINK;
 651:
            var11['backgroundColor'] = var12;
            var10[2] = var11;
            var6['style'] = var10;
            var8 = var9.bind(var5)(var8, var6);
            var6 = new Array(2);
            var6[0] = var8;
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 691:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = global;
    var6 = var1.Object;
    var4 = var6.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var6)(var3, var1, var2);
    var10 = 0;
    var4 = var8[var10];
    var2 = metroImportAll;
    var1 = undefined;
    var2 = var2.bind(var1)(var4);
    var _closure1_slot3 = var2;
    var9 = 1;
    var2 = var8[var9];
    var2 = var7.bind(var1)(var2);
    var4 = var2.View;
    var _closure1_slot4 = var4;
    var2 = var2.Image;
    var _closure1_slot5 = var2;
    var2 = 2;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var6 = var2.BoostedGuildTiers;
    var _closure1_slot6 = var6;
    var2 = 3;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var4 = var2.jsx;
    var _closure1_slot7 = var4;
    var2 = var2.jsxs;
    var _closure1_slot8 = var2;
    var2 = {};
    var4 = var6.NONE;
    var2[var4] = var10;
    var10 = var6.TIER_1;
    var4 = 0.3333333333333333;
    var2[var10] = var4;
    var10 = var6.TIER_2;
    var4 = 0.6666666666666666;
    var2[var10] = var4;
    var4 = var6.TIER_3;
    var2[var4] = var9;
    var _closure1_slot9 = var2;
    var4 = {};
    var10 = var6.TIER_1;
    var9 = 4;
    var9 = var8[var9];
    var9 = var13.bind(var1)(var9);
    var4[var10] = var9;
    var10 = var6.TIER_2;
    var9 = 5;
    var9 = var8[var9];
    var9 = var13.bind(var1)(var9);
    var4[var10] = var9;
    var9 = var6.TIER_3;
    var6 = 6;
    var6 = var8[var6];
    var6 = var13.bind(var1)(var6);
    var4[var9] = var6;
    var _closure1_slot10 = var4;
    var4 = 7;
    var6 = var8[var4];
    var10 = var7.bind(var1)(var6);
    var9 = var10.createStyles;
    var6 = {};
    var11 = {'width': 17.5, 'height': 17.5, 'display': 'flex', 'flexDirection': 'column', 'alignItems': 'center', 'justifyContent': 'center'};
    var6['progressBarMarkerInnerCircle'] = var11;
    var11 = {'width': '100%', 'height': '100%', 'borderRadius': 17.5, 'position': 'absolute'};
    var6['progressBarMarkerInnerCircleBackground'] = var11;
    var11 = {'width': 16, 'height': 16};
    var6['progressBarMarkerInnerCircleIcon'] = var11;
    var11 = {'width': '95%', 'height': '95%'};
    var12 = 8;
    var14 = var8[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.WHITE;
    var11['tintColor'] = var14;
    var6['progressBarMarkerInnerCircleIconUnlocked'] = var11;
    var6 = var9.bind(var10)(var6);
    var _closure1_slot11 = var6;
    var6 = {'stiffness': 50, 'damping': 5};
    var _closure1_slot12 = var6;
    var6 = {};
    var9 = 'function GuildBoostingMarketingProgressBarMarkerTsx1(){const{scale}=this.__closure;return{transform:[{scale:scale.get()}]};}';
    var6['code'] = var9;
    var _closure1_slot13 = var6;
    var4 = var8[var4];
    var10 = var7.bind(var1)(var4);
    var9 = var10.createStyles;
    var6 = {};
    var11 = {'height': 28, 'width': 28, 'position': 'absolute', 'display': 'flex', 'flexDirection': 'column', 'alignItems': 'center', 'justifyContent': 'center', 'transform': null, 'zIndex': 1};
    var4 = 28;
    var15 = {};
    var14 = -14;
    var15['translateX'] = var14;
    var14 = new Array(1);
    var14[0] = var15;
    var11['transform'] = var14;
    var6['progressBarMarker'] = var11;
    var11 = {'width': '100%', 'height': '100%', 'position': 'absolute', 'borderRadius': 28};
    var6['progressBarMarkerBackground'] = var11;
    var11 = {'width': 75, 'position': 'absolute', 'top': '100%', 'paddingTop': 8, 'color': null, 'display': 'flex', 'alignItems': 'center', 'flexDirection': 'row', 'justifyContent': 'center', 'textAlign': 'center'};
    var14 = var8[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.HEADER_PRIMARY;
    var11['color'] = var14;
    var6['progressBarMarkerLabel'] = var11;
    var11 = {};
    var15 = {};
    var14 = -7;
    var15['translateX'] = var14;
    var14 = new Array(1);
    var14[0] = var15;
    var11['transform'] = var14;
    var6['progressBarMarkerLabelWithIcon'] = var11;
    var11 = {};
    var14 = 0.4;
    var11['opacity'] = var14;
    var6['progressBarMarkerLabelLocked'] = var11;
    var11 = {'height': 12, 'width': 12, 'marginRight': 2};
    var12 = var8[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.HEADER_PRIMARY;
    var11['tintColor'] = var12;
    var6['progressBarMarkerUnlockedIcon'] = var11;
    var6 = var9.bind(var10)(var6);
    var _closure1_slot14 = var6;
    var6 = {};
    var9 = 'function GuildBoostingMarketingProgressBarMarkerTsx2(){const{scale}=this.__closure;return{transform:[{scale:scale.get()}]};}';
    var6['code'] = var9;
    var _closure1_slot15 = var6;
    var6 = 18;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingProgressBarMarker.tsx';
    var6 = var7.bind(var8)(var6);
    var5 = function ProgressBarMarker(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var2 = var4.guild;
            var16 = var4.tier;
            var3 = var4.revealedTier;
            var9 = var4.useReducedMotion;
            var17 = var4.isDisabled;
            var4 = undefined;
            var _closure2_slot2 = var4;
            var5 = _closure1_slot14;
            var14 = var5.bind(var4)();
            var7 = _closure1_slot1;
            var5 = _closure1_slot2;
            var6 = 9;
            var6 = var5[var6];
            var6 = var7.bind(var4)(var6);
            var21 = var6.bind(var4)();
            var6 = _closure1_slot0;
            var8 = 10;
            var5 = var5[var8];
            var7 = var6.bind(var4)(var5);
            var6 = var7.useSharedValue;
            var5 = 1;
            var7 = var6.bind(var7)(var5);
            var _closure2_slot0 = var7;
            var5 = var2.premiumTier;
            var12 = var16 === var5;
            var _closure2_slot1 = var12;
            var13 = var3 >= var16;
            var2 = var2.premiumTier;
            var15 = var2 >= var16;
            var11 = var15;
            if(!var11) { _fun0003_ip = 146; continue _fun0003 }
 143:
            var11 = var13;
 146:
            _closure2_slot2 = var11;
            var6 = _closure1_slot3;
            var5 = var6.useEffect;
            var3 = new Array(3);
            var3[0] = var11;
            var3[1] = var7;
            var3[2] = var12;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = _closure2_slot2;
                    if(!var2) { _fun0004_ip = 14; continue _fun0004 }
 10:
                    var2 = _closure2_slot1;
 14:
                    if(!var2) { _fun0004_ip = 86; continue _fun0004 }
 17:
                    var3 = _closure2_slot0;
                    var2 = var3.set;
                    var1 = 0;
                    var1 = var2.bind(var3)(var1);
                    var2 = var3.set;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 11;
                    var5 = var5[var4];
                    var4 = undefined;
                    var6 = var6.bind(var4)(var5);
                    var5 = var6.withSpring;
                    var4 = _closure1_slot12;
                    var1 = 1;
                    var1 = var5.bind(var6)(var1, var4);
                    var1 = var2.bind(var3)(var1);
 86:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var5.bind(var6)(var2, var3);
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = var5[var8];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useAnimatedStyle;
            var1 = function P() {
                var1 = {};
                var3 = {};
                var4 = _closure2_slot0;
                var2 = var4.get;
                var2 = var2.bind(var4)();
                var3['scale'] = var2;
                var2 = new Array(1);
                var2[0] = var3;
                var1['transform'] = var2;
                return var1;
            };
            var6 = {};
            var6['scale'] = var7;
            var1['__closure'] = var6;
            var6 = 6884434326805.0;
            var1['__workletHash'] = var6;
            var6 = _closure1_slot15;
            var1['__initData'] = var6;
            var19 = var2.bind(var3)(var1);
            var3 = _closure1_slot8;
            var2 = _closure1_slot4;
            var1 = {};
            var7 = var14.progressBarMarker;
            var6 = new Array(2);
            var6[0] = var7;
            var7 = {};
            var18 = _closure1_slot9;
            var20 = var18[var16];
            var18 = 100;
            var20 = var18 * var20;
            var18 = '%';
            var18 = var20 + var18;
            var7['left'] = var18;
            var6[1] = var7;
            var1['style'] = var6;
            var7 = _closure1_slot7;
            var6 = _closure1_slot1;
            var5 = var5[var8];
            var5 = var6.bind(var4)(var5);
            var6 = var5.View;
            var5 = {};
            var18 = var14.progressBarMarkerBackground;
            var8 = new Array(3);
            var8[0] = var18;
            var18 = !var9;
            if(!var18) { _fun0003_ip = 370; continue _fun0003 }
 367:
            var18 = var19;
 370:
            var8[1] = var18;
            var18 = {};
            if(!var12) { _fun0003_ip = 385; continue _fun0003 }
 379:
            if(var11) { _fun0003_ip = 514; continue _fun0003 }
 385:
            var20 = _closure1_slot0;
            var22 = _closure1_slot2;
            var19 = 14;
            var19 = var22[var19];
            var20 = var20.bind(var4)(var19);
            var19 = var20.isThemeDark;
            var19 = var19.bind(var20)(var21);
            var21 = _closure1_slot0;
            var24 = _closure1_slot2;
            var20 = 13;
            var20 = var24[var20];
            var23 = var21.bind(var4)(var20);
            var22 = var23.hexWithOpacity;
            var21 = _closure1_slot1;
            var20 = 8;
            var20 = var24[var20];
            var20 = var21.bind(var4)(var20);
            var20 = var20.unsafe_rawColors;
            if(var19) { _fun0003_ip = 490; continue _fun0003 }
 466:
            var21 = var20.PRIMARY_200;
            var19 = 0.4;
            var19 = var22.bind(var23)(var21, var19);
            _fun0003_ip = 512; continue _fun0003;
 490:
            var21 = var20.WHITE_500;
            var20 = 0.4;
            var19 = var22.bind(var23)(var21, var20);
 512:
            _fun0003_ip = 545; continue _fun0003;
 514:
            var21 = _closure1_slot1;
            var22 = _closure1_slot2;
            var20 = 8;
            var20 = var22[var20];
            var20 = var21.bind(var4)(var20);
            var20 = var20.unsafe_rawColors;
            var19 = var20.PREMIUM_PERK_PINK;
 545:
            var18['backgroundColor'] = var19;
            var8[2] = var18;
            var5['style'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(3);
            var5[0] = var6;
            var8 = _closure1_slot7;
            var7 = _closure1_slot16;
            var6 = {};
            var6['tier'] = var16;
            var6['isDisabled'] = var17;
            var6['isTierUnlocked'] = var15;
            var6['isTierAnimated'] = var13;
            var6['isCurrentTier'] = var12;
            var6['useReducedMotion'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var8 = _closure1_slot8;
            var7 = _closure1_slot4;
            var6 = {};
            var12 = var14.progressBarMarkerLabel;
            var9 = new Array(3);
            var9[0] = var12;
            var12 = !var11;
            if(var11) { _fun0003_ip = 657; continue _fun0003 }
 651:
            var12 = var14.progressBarMarkerLabelLocked;
 657:
            var9[1] = var12;
            var12 = var11;
            if(!var11) { _fun0003_ip = 681; continue _fun0003 }
 667:
            var13 = _closure1_slot6;
            var13 = var13.NONE;
            var12 = var16 !== var13;
 681:
            if(!var12) { _fun0003_ip = 690; continue _fun0003 }
 684:
            var12 = var14.progressBarMarkerLabelWithIcon;
 690:
            var9[2] = var12;
            var6['style'] = var9;
            if(!var11) { _fun0003_ip = 715; continue _fun0003 }
 701:
            var9 = _closure1_slot6;
            var9 = var9.NONE;
            var11 = var16 !== var9;
 715:
            if(!var11) { _fun0003_ip = 768; continue _fun0003 }
 718:
            var13 = _closure1_slot7;
            var12 = _closure1_slot5;
            var9 = {};
            var17 = _closure1_slot1;
            var18 = _closure1_slot2;
            var15 = 15;
            var15 = var18[var15];
            var15 = var17.bind(var4)(var15);
            var9['source'] = var15;
            var14 = var14.progressBarMarkerUnlockedIcon;
            var9['style'] = var14;
            var11 = var13.bind(var4)(var12, var9);
 768:
            var9 = new Array(2);
            var9[0] = var11;
            var12 = _closure1_slot7;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var10 = 16;
            var10 = var15[var10];
            var10 = var14.bind(var4)(var10);
            var11 = var10.Text;
            var10 = {};
            var13 = 'text-xs/medium';
            var10['variant'] = var13;
            var13 = 17;
            var13 = var15[var13];
            var15 = var14.bind(var4)(var13);
            var14 = var15.getTierName;
            var13 = {};
            var17 = false;
            var13['useLevels'] = var17;
            var13 = var14.bind(var15)(var16, var13);
            var10['children'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var5;
    var3['MARKER_DIMENSIONS'] = var4;
    var3['TierMarkerPositions'] = var2;
    return var1;
})();