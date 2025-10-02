// app/modules/app_launcher/native/screens/application_view/app/DetailsHeader.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var13 = 1;
    var7 = var6[var13];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.View;
    var _closure1_slot5 = var8;
    var4 = var4.Pressable;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot7 = var8;
    var8 = var4.jsxs;
    var _closure1_slot8 = var8;
    var4 = var4.Fragment;
    var _closure1_slot9 = var4;
    var14 = 4;
    var4 = var6[var14];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var11 = 'hidden';
    var10['overflow'] = var11;
    var4['animatedViewContainer'] = var10;
    var10 = {'position': 'relative', 'width': '100%'};
    var4['container'] = var10;
    var10 = {'width': '100%', 'position': 'absolute'};
    var4['measuringContainer'] = var10;
    var10 = {};
    var11 = 8;
    var10['marginTop'] = var11;
    var4['descriptionContainer'] = var10;
    var10 = {'position': 'absolute', 'top': 0, 'height': '100%', 'width': 50, 'pointerEvents': 'none'};
    var4['expandDescriptionCTAGradient'] = var10;
    var10 = {'backgroundColor': null, 'position': 'absolute', 'right': 16, 'bottom': 16, 'flexDirection': 'row'};
    var11 = 5;
    var15 = var6[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.CARD_PRIMARY_BG;
    var10['backgroundColor'] = var15;
    var4['expandDescriptionCTA'] = var10;
    var10 = {};
    var10['marginTop'] = var14;
    var4['collapseDescriptionCTA'] = var10;
    var10 = {'display': 'flex', 'flexDirection': 'row', 'gap': null, 'overflow': 'hidden'};
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_4;
    var10['gap'] = var14;
    var4['nameContainer'] = var10;
    var10 = {};
    var10['flexShrink'] = var13;
    var4['nameText'] = var10;
    var10 = {'justifyContent': 'center', 'paddingVertical': 2};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var10['paddingHorizontal'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_MODIFIER_ACTIVE;
    var10['backgroundColor'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.radii;
    var11 = var11.lg;
    var10['borderRadius'] = var11;
    var4['partnerLabelWrapper'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot10 = var4;
    var4 = {};
    var8 = 'function DetailsHeaderTsx1(){const{height}=this.__closure;return{height:height.get()};}';
    var4['code'] = var8;
    var _closure1_slot11 = var4;
    var4 = {};
    var8 = 'function DetailsHeaderTsx2(){const{runOnJS,setShouldLineClamp}=this.__closure;runOnJS(setShouldLineClamp)(true);}';
    var4['code'] = var8;
    var _closure1_slot12 = var4;
    var4 = var7.memo;
    var2 = function DetailsHeader(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var5 = var1.application;
            var10 = var1.viewContainerStyle;
            var12 = var1.mainContainerStyle;
            var24 = var1.expandDescriptionCTAStyle;
            var16 = var1.hideName;
            var4 = undefined;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var _closure2_slot12 = var4;
            var _closure2_slot13 = var4;
            var _closure2_slot14 = var4;
            var _closure2_slot15 = var4;
            var _closure2_slot16 = var4;
            var1 = _closure1_slot10;
            var19 = var1.bind(var4)();
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 7;
            var2 = var6[var1];
            var7 = var3.bind(var4)(var2);
            var2 = var7.isPartnerApplication;
            var26 = var2.bind(var7)(var5);
            var14 = _closure1_slot4;
            var2 = var14.useRef;
            var28 = null;
            var2 = var2.bind(var14)(var28);
            var _closure2_slot0 = var2;
            var7 = var14.useState;
            var22 = false;
            var7 = var7.bind(var14)(var22);
            var11 = _closure1_slot3;
            var20 = 2;
            var8 = var11.bind(var4)(var7, var20);
            var27 = 0;
            var9 = var8[var27];
            var _closure2_slot1 = var9;
            var7 = 1;
            var8 = var8[var7];
            var _closure2_slot2 = var8;
            var8 = var14.useState;
            var8 = var8.bind(var14)(var22);
            var8 = var11.bind(var4)(var8, var20);
            var13 = var8[var27];
            var _closure2_slot3 = var13;
            var8 = var8[var7];
            var _closure2_slot4 = var8;
            var11 = var14.useRef;
            var8 = true;
            var8 = var11.bind(var14)(var8);
            var _closure2_slot5 = var8;
            var8 = function useContainerAnimation() {
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 6;
                var1 = var8[var4];
                var5 = undefined;
                var9 = var7.bind(var5)(var1);
                var2 = var9.useSharedValue;
                var1 = null;
                var2 = var2.bind(var9)(var1);
                var _closure3_slot0 = var2;
                var1 = {};
                var4 = var8[var4];
                var5 = var7.bind(var5)(var4);
                var4 = var5.useAnimatedStyle;
                var3 = function t() {
                    var1 = {};
                    var3 = _closure3_slot0;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var1['height'] = var2;
                    return var1;
                };
                var7 = {};
                var7['height'] = var2;
                var3['__closure'] = var7;
                var7 = 23826674246.0;
                var3['__workletHash'] = var7;
                var6 = _closure1_slot11;
                var3['__initData'] = var6;
                var3 = var4.bind(var5)(var3);
                var1['containerStyle'] = var3;
                var1['containerHeight'] = var2;
                return var1;
            };
            var8 = var8.bind(var4)();
            var14 = var8.containerStyle;
            var8 = var8.containerHeight;
            var _closure2_slot6 = var8;
            var8 = var6[var1];
            var11 = var3.bind(var4)(var8);
            var8 = var11.getSectionName;
            var17 = var8.bind(var11)(var5);
            var1 = var6[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.getSectionDescription;
            var1 = var1.bind(var3)(var5);
            var _closure2_slot7 = var1;
            var11 = var28 != var1;
            if(!var11) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var1.trim;
            var3 = var3.bind(var1)();
            var3 = var3.length;
            var11 = var3 > var27;
case 2:
            var5 = _closure1_slot4;
            var3 = var5.useState;
            var5 = var3.bind(var5)(var28);
            var3 = _closure1_slot3;
            var3 = var3.bind(var4)(var5, var20);
            var29 = var3[var27];
            _closure2_slot8 = var29;
            var3 = var3[var7];
            _closure2_slot9 = var3;
            var3 = var19.expandDescriptionCTA;
            var18 = var3.backgroundColor;
            var3 = var28 != var24;
            if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var22 !== var24;
case 4:
            if(!var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = 'object';
            var5 = typeof var24;
            var3 = var6 === var5;
case 6:
            if(!var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var5 = 'backgroundColor';
            var3 = var5 in var24;
case 8:
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var5 = var24.backgroundColor;
            var6 = 'string';
            var5 = typeof var5;
            var3 = var6 === var5;
case 10:
            if(!var3) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var18 = var24.backgroundColor;
case 12:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 8;
            var6 = var8[var5];
            var23 = var3.bind(var4)(var6);
            var6 = var23.hexOpacityToRgba;
            var6 = var6.bind(var23)(var18, var27);
            var25 = new Array(2);
            var25[0] = var6;
            var5 = var8[var5];
            var6 = var3.bind(var4)(var5);
            var5 = var6.hexOpacityToRgba;
            var5 = var5.bind(var6)(var18, var7);
            var25[1] = var5;
            var18 = _closure1_slot4;
            var5 = var18.useRef;
            var5 = var5.bind(var18)(var27);
            _closure2_slot10 = var5;
            var5 = var18.useRef;
            var5 = var5.bind(var18)(var27);
            _closure2_slot11 = var5;
            var5 = var18.useState;
            var5 = var5.bind(var18)(var22);
            var6 = _closure1_slot3;
            var5 = var6.bind(var4)(var5, var20);
            var36 = var5[var27];
            var5 = var5[var7];
            _closure2_slot12 = var5;
            var5 = var18.useState;
            var5 = var5.bind(var18)(var22);
            var5 = var6.bind(var4)(var5, var20);
            var6 = var5[var27];
            _closure2_slot13 = var6;
            var5 = var5[var7];
            _closure2_slot14 = var5;
            var7 = var18.useMemo;
            var5 = new Array(1);
            var5[0] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot7;
                    var1 = null;
                    var3 = var1 == var3;
                    if(var3) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 9;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var3 = var4.parseBioReactWithCachedAST;
                    var2 = _closure2_slot7;
                    var1 = var3.bind(var4)(var2);
case 14:
                    return var1;
                }
            };
            var20 = var7.bind(var18)(var1, var5);
            var1 = 10;
            var1 = var8[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.useIsScreenLandscape;
            var22 = var1.bind(var3)();
            _closure2_slot15 = var22;
            var7 = _closure1_slot1;
            var1 = 11;
            var1 = var8[var1];
            var1 = var7.bind(var4)(var1);
            var1 = var1.bind(var4)(var22);
            _closure2_slot16 = var1;
            var5 = var18.useEffect;
            var3 = new Array(2);
            var3[0] = var22;
            var3[1] = var1;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot15;
                    var2 = _closure2_slot16;
                    if(!(var3 !== var2)) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                    var4 = _closure2_slot14;
                    var3 = undefined;
                    var2 = false;
                    var2 = var4.bind(var3)(var2);
                    var3 = _closure2_slot11;
                    var2 = 0;
                    var3['current'] = var2;
                    var1 = _closure2_slot10;
                    var1['current'] = var2;
case 16:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var5.bind(var18)(var1, var3);
            var22 = function handleApplicationDescriptionPress() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot1;
                    if(!var2) { _fun0004_ip = 3; continue _fun0004 }
case 18:
                    var2 = _closure2_slot5;
                    var3 = false;
                    var2['current'] = var3;
                    var2 = _closure2_slot3;
                    if(var2) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                    var2 = _closure2_slot12;
                    var9 = undefined;
                    var2 = var2.bind(var9)(var3);
                    var4 = _closure2_slot6;
                    var3 = var4.set;
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var2 = 12;
                    var2 = var10[var2];
                    var7 = var8.bind(var9)(var2);
                    var6 = var7.withTiming;
                    var2 = _closure2_slot11;
                    var5 = var2.current;
                    var2 = 13;
                    var2 = var10[var2];
                    var2 = var8.bind(var9)(var2);
                    var2 = var2.timingStandard;
                    var2 = var6.bind(var7)(var5, var2);
                    var2 = var3.bind(var4)(var2);
                    _fun0004_ip = 21; continue _fun0004;
case 19:
                    var4 = _closure2_slot6;
                    var3 = var4.set;
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var5 = 12;
                    var5 = var14[var5];
                    var12 = undefined;
                    var9 = var13.bind(var12)(var5);
                    var8 = var9.withTiming;
                    var5 = _closure2_slot10;
                    var7 = var5.current;
                    var5 = 13;
                    var5 = var14[var5];
                    var5 = var13.bind(var12)(var5);
                    var17 = var5.timingStandard;
                    var5 = function t() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 6;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.runOnJS;
                        var2 = _closure2_slot12;
                        var3 = var3.bind(var4)(var2);
                        var2 = true;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var10 = {};
                    var11 = 6;
                    var11 = var14[var11];
                    var11 = var13.bind(var12)(var11);
                    var11 = var11.runOnJS;
                    var10['runOnJS'] = var11;
                    var11 = _closure2_slot12;
                    var10['setShouldLineClamp'] = var11;
                    var5['__closure'] = var10;
                    var10 = 6050776164847.0;
                    var5['__workletHash'] = var10;
                    var2 = _closure1_slot12;
                    var5['__initData'] = var2;
                    var16 = 'respect-motion-settings';
                    var19 = var9;
                    var18 = var7;
                    var15 = var5;
                    var2 = var19[var8](var18, var17, var16, var15, var14);
                    var2 = var3.bind(var4)(var2);
case 21:
                    var3 = _closure2_slot4;
                    var1 = _closure2_slot3;
                    var2 = !var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 3:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = 14;
            var1 = var8[var1];
            var1 = var7.bind(var4)(var1);
            var35 = var1.bind(var4)(var2);
            var3 = _closure1_slot8;
            var2 = _closure1_slot9;
            var1 = {};
            var5 = 6;
            var5 = var8[var5];
            var5 = var7.bind(var4)(var5);
            var7 = var5.View;
            var5 = {};
            var18 = var19.animatedViewContainer;
            var8 = new Array(3);
            var8[0] = var18;
            var8[1] = var14;
            var8[2] = var10;
            var5['style'] = var8;
            var10 = _closure1_slot5;
            var8 = {};
            var18 = var19.container;
            var14 = new Array(2);
            var14[0] = var18;
            var14[1] = var12;
            var8['style'] = var14;
            var14 = function onLayout(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure2_slot13;
                    if(var2) { _fun0005_ip = 22; continue _fun0005 }
case 23:
                    var2 = arg1;
                    var2 = var2.nativeEvent;
                    var2 = var2.layout;
                    var3 = var2.height;
                    var2 = _closure2_slot10;
                    var2['current'] = var3;
                    var4 = _closure2_slot6;
                    var3 = var4.set;
                    var2 = _closure2_slot10;
                    var2 = var2.current;
                    var2 = var3.bind(var4)(var2);
                    var2 = _closure2_slot11;
                    var2 = var2.current;
                    var4 = 0;
                    var2 = var2 > var4;
                    if(!var2) { _fun0005_ip = 24; continue _fun0005 }
case 25:
                    var3 = _closure2_slot10;
                    var3 = var3.current;
                    var2 = var3 > var4;
case 24:
                    if(!var2) { _fun0005_ip = 22; continue _fun0005 }
case 26:
                    var3 = _closure2_slot14;
                    var2 = undefined;
                    var1 = true;
                    var1 = var3.bind(var2)(var1);
case 22:
                    var1 = undefined;
                    return var1;
                }
            };
            var8['onLayout'] = var14;
            var14 = {};
            var18 = var19.nameContainer;
            var14['style'] = var18;
            var23 = !var16;
            if(!var23) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var31 = _closure1_slot7;
            var30 = _closure1_slot0;
            var32 = _closure1_slot2;
            var18 = 15;
            var18 = var32[var18];
            var18 = var30.bind(var4)(var18);
            var30 = var18.Text;
            var18 = {'style': null, 'variant': 'heading-lg/bold', 'color': 'text-normal', 'lineClamp': 1};
            var32 = var19.nameText;
            var18['style'] = var32;
            var18['children'] = var17;
            var23 = var31.bind(var4)(var30, var18);
case 27:
            var18 = new Array(2);
            var18[0] = var23;
            var23 = null;
            if(!var26) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var31 = _closure1_slot7;
            var30 = _closure1_slot5;
            var26 = {};
            var32 = var19.partnerLabelWrapper;
            var26['style'] = var32;
            var39 = _closure1_slot0;
            var40 = _closure1_slot2;
            var32 = 15;
            var32 = var40[var32];
            var32 = var39.bind(var4)(var32);
            var33 = var32.Text;
            var32 = {'variant': 'text-xs/medium', 'color': 'text-normal'};
            var34 = 16;
            var37 = var40[var34];
            var37 = var39.bind(var4)(var37);
            var38 = var37.intl;
            var37 = var38.string;
            var34 = var40[var34];
            var34 = var39.bind(var4)(var34);
            var34 = var34.t;
            var34 = var34.LO4f0N;
            var34 = var37.bind(var38)(var34);
            var32['children'] = var34;
            var32 = var31.bind(var4)(var33, var32);
            var26['children'] = var32;
            var23 = var31.bind(var4)(var30, var26);
case 29:
            var18[1] = var23;
            var14['children'] = var18;
            var18 = var3.bind(var4)(var10, var14);
            var14 = new Array(2);
            var14[0] = var18;
            var18 = var11;
            if(!var11) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var30 = _closure1_slot8;
            var26 = _closure1_slot6;
            var23 = {};
            var31 = !var16;
            if(!var31) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var31 = var19.descriptionContainer;
case 33:
            var23['style'] = var31;
            var23['onPress'] = var22;
            var33 = _closure1_slot7;
            var32 = _closure1_slot0;
            var31 = _closure1_slot2;
            var34 = 15;
            var31 = var31[var34];
            var31 = var32.bind(var4)(var31);
            var32 = var31.Text;
            var31 = {'variant': 'text-sm/medium', 'color': 'text-normal'};
            if(var36) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var36 = var28 == var35;
            var35 = undefined;
            if(!var36) { _fun0001_ip = 37; continue _fun0001 }
case 35:
            var35 = 3;
case 37:
            var31['lineClamp'] = var35;
            var31['children'] = var20;
            var32 = var33.bind(var4)(var32, var31);
            var31 = new Array(2);
            var31[0] = var32;
            var32 = var9;
            if(!var9) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var33 = null;
            if(!var13) { _fun0001_ip = 40; continue _fun0001 }
case 41:
            var36 = _closure1_slot7;
            var40 = _closure1_slot0;
            var41 = _closure1_slot2;
            var34 = var41[var34];
            var34 = var40.bind(var4)(var34);
            var35 = var34.Text;
            var34 = {'variant': 'text-sm/medium', 'color': 'text-brand'};
            var37 = var19.collapseDescriptionCTA;
            var34['style'] = var37;
            var37 = 16;
            var38 = var41[var37];
            var38 = var40.bind(var4)(var38);
            var39 = var38.intl;
            var38 = var39.string;
            var37 = var41[var37];
            var37 = var40.bind(var4)(var37);
            var37 = var37.t;
            var37 = var37.D5xGUF;
            var37 = var38.bind(var39)(var37);
            var34['children'] = var37;
            var33 = var36.bind(var4)(var35, var34);
case 40:
            var32 = var33;
case 38:
            var31[1] = var32;
            var23['children'] = var31;
            var18 = var30.bind(var4)(var26, var23);
case 31:
            var14[1] = var18;
            var8['children'] = var14;
            var10 = var3.bind(var4)(var10, var8);
            var8 = new Array(2);
            var8[0] = var10;
            if(!var9) { _fun0001_ip = 42; continue _fun0001 }
case 43:
            var10 = null;
            if(var13) { _fun0001_ip = 44; continue _fun0001 }
case 45:
            var18 = _closure1_slot8;
            var14 = _closure1_slot6;
            var13 = {};
            var26 = var19.expandDescriptionCTA;
            var23 = new Array(2);
            var23[0] = var26;
            var23[1] = var24;
            var13['style'] = var23;
            var13['onPress'] = var22;
            var22 = 'button';
            var13['accessibilityRole'] = var22;
            var24 = _closure1_slot7;
            var23 = _closure1_slot1;
            var31 = _closure1_slot2;
            var22 = 17;
            var22 = var31[var22];
            var23 = var23.bind(var4)(var22);
            var22 = {};
            var30 = _closure1_slot0;
            var26 = 18;
            var32 = var31[var26];
            var32 = var30.bind(var4)(var32);
            var32 = var32.HorizontalGradient;
            var32 = var32.START;
            var22['start'] = var32;
            var26 = var31[var26];
            var26 = var30.bind(var4)(var26);
            var26 = var26.HorizontalGradient;
            var26 = var26.END;
            var22['end'] = var26;
            var22['colors'] = var25;
            var26 = var19.expandDescriptionCTAGradient;
            var25 = new Array(2);
            var25[0] = var26;
            var26 = {};
            var28 = var28 == var29;
            var27 = 0;
            if(var28) { _fun0001_ip = 46; continue _fun0001 }
case 47:
            var28 = 5;
            var27 = var29 - var28;
case 46:
            var26['right'] = var27;
            var25[1] = var26;
            var22['style'] = var25;
            var23 = var24.bind(var4)(var23, var22);
            var22 = new Array(2);
            var22[0] = var23;
            var25 = _closure1_slot8;
            var29 = _closure1_slot0;
            var30 = _closure1_slot2;
            var23 = 15;
            var23 = var30[var23];
            var23 = var29.bind(var4)(var23);
            var24 = var23.Text;
            var23 = {'onLayout': null, 'variant': 'text-sm/medium', 'color': 'text-brand'};
            var26 = function onLayout(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure2_slot8;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0006_ip = 48; continue _fun0006 }
case 18:
                    var3 = _closure2_slot9;
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var1 = var1.layout;
                    var2 = var1.width;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 48:
                    var1 = undefined;
                    return var1;
                }
            };
            var23['onLayout'] = var26;
            var26 = 16;
            var27 = var30[var26];
            var27 = var29.bind(var4)(var27);
            var28 = var27.intl;
            var27 = var28.string;
            var26 = var30[var26];
            var26 = var29.bind(var4)(var26);
            var26 = var26.t;
            var26 = var26.OBCR+v;
            var27 = var27.bind(var28)(var26);
            var26 = ['… '];
            var26[1] = var27;
            var23['children'] = var26;
            var23 = var25.bind(var4)(var24, var23);
            var22[1] = var23;
            var13['children'] = var22;
            var10 = var18.bind(var4)(var14, var13);
case 44:
            var9 = var10;
case 42:
            var8[1] = var9;
            var5['children'] = var8;
            var7 = var3.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var6 = !var6;
            if(!var6) { _fun0001_ip = 49; continue _fun0001 }
case 50:
            var9 = _closure1_slot8;
            var8 = _closure1_slot5;
            var7 = {};
            var10 = new Array(3);
            var10[0] = var12;
            var12 = var19.measuringContainer;
            var10[1] = var12;
            var12 = {'opacity': 0, 'pointerEvents': 'none'};
            var10[2] = var12;
            var7['style'] = var10;
            var10 = function onLayout(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var1 = var1.layout;
                    var3 = var1.height;
                    var2 = _closure2_slot11;
                    var2['current'] = var3;
                    var2 = _closure2_slot11;
                    var2 = var2.current;
                    var4 = 0;
                    var2 = var2 > var4;
                    if(!var2) { _fun0007_ip = 51; continue _fun0007 }
case 52:
                    var3 = _closure2_slot10;
                    var3 = var3.current;
                    var2 = var3 > var4;
case 51:
                    if(!var2) { _fun0007_ip = 53; continue _fun0007 }
case 54:
                    var3 = _closure2_slot14;
                    var2 = undefined;
                    var1 = true;
                    var1 = var3.bind(var2)(var1);
case 53:
                    var1 = undefined;
                    return var1;
                }
            };
            var7['onLayout'] = var10;
            var12 = !var16;
            if(!var12) { _fun0001_ip = 55; continue _fun0001 }
case 56:
            var14 = _closure1_slot7;
            var13 = _closure1_slot0;
            var18 = _closure1_slot2;
            var10 = 15;
            var10 = var18[var10];
            var10 = var13.bind(var4)(var10);
            var13 = var10.Text;
            var10 = {'variant': 'heading-lg/bold', 'color': 'text-normal'};
            var10['children'] = var17;
            var12 = var14.bind(var4)(var13, var10);
case 55:
            var10 = new Array(2);
            var10[0] = var12;
            if(!var11) { _fun0001_ip = 57; continue _fun0001 }
case 58:
            var14 = _closure1_slot8;
            var13 = _closure1_slot5;
            var12 = {};
            var16 = !var16;
            if(!var16) { _fun0001_ip = 59; continue _fun0001 }
case 60:
            var16 = var19.descriptionContainer;
case 59:
            var12['style'] = var16;
            var18 = _closure1_slot7;
            var22 = _closure1_slot0;
            var23 = _closure1_slot2;
            var16 = 15;
            var15 = var23[var16];
            var15 = var22.bind(var4)(var15);
            var17 = var15.Text;
            var15 = {'variant': 'text-sm/medium', 'color': 'text-normal'};
            var21 = function onTextLayout(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var1 = var1.lines;
                    var3 = var1.length;
                    var2 = _closure2_slot0;
                    var4 = var2.current;
                    var2 = null;
                    if(!(var2 == var4)) { _fun0008_ip = 61; continue _fun0008 }
case 62:
                    var2 = _closure2_slot0;
                    var2['current'] = var3;
case 61:
                    var2 = 3;
                    if(!(var3 > var2)) { _fun0008_ip = 63; continue _fun0008 }
case 64:
                    var4 = _closure2_slot12;
                    var3 = undefined;
                    var2 = true;
                    var4 = var4.bind(var3)(var2);
                    var1 = _closure2_slot2;
                    var1 = var1.bind(var3)(var2);
case 63:
                    var1 = undefined;
                    return var1;
                }
            };
            var15['onTextLayout'] = var21;
            var15['children'] = var20;
            var17 = var18.bind(var4)(var17, var15);
            var15 = new Array(2);
            var15[0] = var17;
            var16 = var23[var16];
            var16 = var22.bind(var4)(var16);
            var17 = var16.Text;
            var16 = {'variant': 'text-sm/medium', 'color': 'text-brand'};
            var19 = var19.collapseDescriptionCTA;
            var16['style'] = var19;
            var19 = 16;
            var20 = var23[var19];
            var20 = var22.bind(var4)(var20);
            var21 = var20.intl;
            var20 = var21.string;
            var19 = var23[var19];
            var19 = var22.bind(var4)(var19);
            var19 = var19.t;
            var19 = var19.D5xGUF;
            var19 = var20.bind(var21)(var19);
            var16['children'] = var19;
            var16 = var18.bind(var4)(var17, var16);
            var15[1] = var16;
            var12['children'] = var15;
            var11 = var14.bind(var4)(var13, var12);
case 57:
            var10[1] = var11;
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 49:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_launcher/native/screens/application_view/app/DetailsHeader.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();