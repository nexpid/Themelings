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
    var8 = var4.Pressable;
    var _closure1_slot6 = var8;
    var4 = var4.StyleSheet;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot8 = var8;
    var8 = var4.jsxs;
    var _closure1_slot9 = var8;
    var4 = var4.Fragment;
    var _closure1_slot10 = var4;
    var4 = ['black', 'transparent'];
    var _closure1_slot11 = var4;
    var11 = 4;
    var4 = var6[var11];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var14 = 'hidden';
    var10['overflow'] = var14;
    var4['animatedViewContainer'] = var10;
    var10 = {'position': 'relative', 'width': '100%'};
    var4['container'] = var10;
    var10 = {'width': '100%', 'position': 'absolute'};
    var4['measuringContainer'] = var10;
    var10 = {};
    var14 = 8;
    var10['marginTop'] = var14;
    var4['descriptionContainer'] = var10;
    var10 = {'position': 'absolute', 'right': 0, 'bottom': 0, 'pointerEvents': 'none'};
    var4['viewMoreCTA'] = var10;
    var10 = {'flex': 1, 'backgroundColor': 'black'};
    var4['maskFill'] = var10;
    var10 = {};
    var14 = 'row';
    var10['flexDirection'] = var14;
    var4['maskLastLine'] = var10;
    var10 = {};
    var14 = 32;
    var10['width'] = var14;
    var4['maskFade'] = var10;
    var10 = {};
    var10['marginTop'] = var11;
    var4['collapseDescriptionCTA'] = var10;
    var10 = {'display': 'flex', 'flexDirection': 'row', 'gap': null, 'overflow': 'hidden'};
    var11 = 5;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.space;
    var14 = var14.PX_4;
    var10['gap'] = var14;
    var4['nameContainer'] = var10;
    var10 = {};
    var10['flexShrink'] = var13;
    var4['nameText'] = var10;
    var10 = {'justifyContent': 'center', 'paddingVertical': 2};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_8;
    var10['paddingHorizontal'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.INTERACTIVE_BACKGROUND_ACTIVE;
    var10['backgroundColor'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.radii;
    var11 = var11.lg;
    var10['borderRadius'] = var11;
    var4['partnerLabelWrapper'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot12 = var4;
    var4 = {};
    var8 = 'function DetailsHeaderTsx1(){const{height}=this.__closure;return{height:height.get()};}';
    var4['code'] = var8;
    var _closure1_slot13 = var4;
    var4 = {};
    var8 = 'function DetailsHeaderTsx2(){const{runOnJS,setShouldLineClamp}=this.__closure;runOnJS(setShouldLineClamp)(true);}';
    var4['code'] = var8;
    var _closure1_slot14 = var4;
    var4 = var7.memo;
    var2 = function DetailsHeader(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var6 = var1.application;
            var10 = var1.viewContainerStyle;
            var12 = var1.mainContainerStyle;
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
            var _closure2_slot17 = var4;
            var _closure2_slot18 = var4;
            var1 = _closure1_slot12;
            var19 = var1.bind(var4)();
            var3 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 7;
            var2 = var9[var1];
            var5 = var3.bind(var4)(var2);
            var2 = var5.isPartnerApplication;
            var22 = var2.bind(var5)(var6);
            var14 = _closure1_slot4;
            var2 = var14.useRef;
            var28 = null;
            var2 = var2.bind(var14)(var28);
            var _closure2_slot0 = var2;
            var5 = var14.useState;
            var8 = false;
            var5 = var5.bind(var14)(var8);
            var13 = _closure1_slot3;
            var7 = 2;
            var11 = var13.bind(var4)(var5, var7);
            var44 = 0;
            var29 = var11[var44];
            var _closure2_slot1 = var29;
            var5 = 1;
            var11 = var11[var5];
            var _closure2_slot2 = var11;
            var11 = var14.useState;
            var11 = var11.bind(var14)(var8);
            var11 = var13.bind(var4)(var11, var7);
            var27 = var11[var44];
            var _closure2_slot3 = var27;
            var11 = var11[var5];
            var _closure2_slot4 = var11;
            var13 = var14.useRef;
            var11 = true;
            var11 = var13.bind(var14)(var11);
            var _closure2_slot5 = var11;
            var11 = function useContainerAnimation() {
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
                var6 = _closure1_slot13;
                var3['__initData'] = var6;
                var3 = var4.bind(var5)(var3);
                var1['containerStyle'] = var3;
                var1['containerHeight'] = var2;
                return var1;
            };
            var11 = var11.bind(var4)();
            var13 = var11.containerStyle;
            var11 = var11.containerHeight;
            var _closure2_slot6 = var11;
            var11 = var9[var1];
            var14 = var3.bind(var4)(var11);
            var11 = var14.getSectionName;
            var17 = var11.bind(var14)(var6);
            var1 = var9[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.getSectionDescription;
            var1 = var1.bind(var3)(var6);
            var _closure2_slot7 = var1;
            var11 = var28 != var1;
            if(!var11) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var1.trim;
            var3 = var3.bind(var1)();
            var3 = var3.length;
            var11 = var3 > var44;
case 2:
            var9 = _closure1_slot4;
            var3 = var9.useState;
            var3 = var3.bind(var9)(var28);
            var6 = _closure1_slot3;
            var3 = var6.bind(var4)(var3, var7);
            var45 = var3[var44];
            _closure2_slot8 = var45;
            var3 = var3[var5];
            _closure2_slot9 = var3;
            var3 = var9.useState;
            var3 = var3.bind(var9)(var28);
            var3 = var6.bind(var4)(var3, var7);
            var42 = var3[var44];
            _closure2_slot10 = var42;
            var3 = var3[var5];
            _closure2_slot11 = var3;
            var3 = var9.useRef;
            var3 = var3.bind(var9)(var44);
            _closure2_slot12 = var3;
            var3 = var9.useRef;
            var3 = var3.bind(var9)(var44);
            _closure2_slot13 = var3;
            var3 = var9.useState;
            var3 = var3.bind(var9)(var8);
            var3 = var6.bind(var4)(var3, var7);
            var36 = var3[var44];
            var3 = var3[var5];
            _closure2_slot14 = var3;
            var3 = var9.useState;
            var3 = var3.bind(var9)(var8);
            var3 = var6.bind(var4)(var3, var7);
            var6 = var3[var44];
            _closure2_slot15 = var6;
            var3 = var3[var5];
            _closure2_slot16 = var3;
            var5 = var9.useMemo;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot7;
                    var1 = null;
                    var3 = var1 == var3;
                    if(var3) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 8;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var3 = var4.parseBioReactWithCachedAST;
                    var2 = _closure2_slot7;
                    var1 = var3.bind(var4)(var2);
case 4:
                    return var1;
                }
            };
            var20 = var5.bind(var9)(var1, var3);
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 9;
            var1 = var5[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.useIsScreenLandscape;
            var14 = var1.bind(var3)();
            _closure2_slot17 = var14;
            var3 = _closure1_slot1;
            var1 = 10;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.bind(var4)(var14);
            _closure2_slot18 = var1;
            var8 = var9.useEffect;
            var7 = new Array(2);
            var7[0] = var14;
            var7[1] = var1;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot17;
                    var2 = _closure2_slot18;
                    if(!(var3 !== var2)) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var4 = _closure2_slot16;
                    var3 = undefined;
                    var2 = false;
                    var2 = var4.bind(var3)(var2);
                    var3 = _closure2_slot13;
                    var2 = 0;
                    var3['current'] = var2;
                    var1 = _closure2_slot12;
                    var1['current'] = var2;
case 6:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var8.bind(var9)(var1, var7);
            var1 = 11;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var35 = var1.bind(var4)(var2);
            var30 = var29;
            if(!var30) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var30 = !var27;
case 8:
            var3 = _closure1_slot9;
            var2 = _closure1_slot10;
            var1 = {};
            var8 = _closure1_slot8;
            var7 = _closure1_slot1;
            var9 = _closure1_slot2;
            var5 = 6;
            var5 = var9[var5];
            var5 = var7.bind(var4)(var5);
            var7 = var5.View;
            var5 = {};
            var14 = var19.animatedViewContainer;
            var9 = new Array(3);
            var9[0] = var14;
            var9[1] = var13;
            var9[2] = var10;
            var5['style'] = var9;
            var10 = _closure1_slot5;
            var9 = {};
            var14 = var19.container;
            var13 = new Array(2);
            var13[0] = var14;
            var13[1] = var12;
            var9['style'] = var13;
            var13 = function onLayout(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot15;
                    if(var2) { _fun0004_ip = 10; continue _fun0004 }
case 11:
                    var2 = arg1;
                    var2 = var2.nativeEvent;
                    var2 = var2.layout;
                    var3 = var2.height;
                    var2 = _closure2_slot12;
                    var2['current'] = var3;
                    var4 = _closure2_slot6;
                    var3 = var4.set;
                    var2 = _closure2_slot12;
                    var2 = var2.current;
                    var2 = var3.bind(var4)(var2);
                    var2 = _closure2_slot13;
                    var2 = var2.current;
                    var4 = 0;
                    var2 = var2 > var4;
                    if(!var2) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                    var3 = _closure2_slot12;
                    var3 = var3.current;
                    var2 = var3 > var4;
case 12:
                    if(!var2) { _fun0004_ip = 10; continue _fun0004 }
case 14:
                    var3 = _closure2_slot16;
                    var2 = undefined;
                    var1 = true;
                    var1 = var3.bind(var2)(var1);
case 10:
                    var1 = undefined;
                    return var1;
                }
            };
            var9['onLayout'] = var13;
            var13 = {};
            var14 = var19.nameContainer;
            var13['style'] = var14;
            var18 = !var16;
            if(!var18) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var24 = _closure1_slot8;
            var23 = _closure1_slot0;
            var25 = _closure1_slot2;
            var14 = 12;
            var14 = var25[var14];
            var14 = var23.bind(var4)(var14);
            var23 = var14.Heading;
            var14 = {'style': null, 'variant': 'heading-lg/bold', 'color': 'text-default', 'lineClamp': 1};
            var25 = var19.nameText;
            var14['style'] = var25;
            var14['children'] = var17;
            var18 = var24.bind(var4)(var23, var14);
case 15:
            var14 = new Array(2);
            var14[0] = var18;
            var18 = null;
            if(!var22) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var24 = _closure1_slot8;
            var23 = _closure1_slot5;
            var22 = {};
            var25 = var19.partnerLabelWrapper;
            var22['style'] = var25;
            var34 = _closure1_slot0;
            var37 = _closure1_slot2;
            var25 = 12;
            var25 = var37[var25];
            var25 = var34.bind(var4)(var25);
            var26 = var25.Text;
            var25 = {'variant': 'text-xs/medium', 'color': 'text-default'};
            var31 = 13;
            var32 = var37[var31];
            var32 = var34.bind(var4)(var32);
            var33 = var32.intl;
            var32 = var33.string;
            var31 = var37[var31];
            var31 = var34.bind(var4)(var31);
            var31 = var31.t;
            var31 = var31.LO4f0P;
            var31 = var32.bind(var33)(var31);
            var25['children'] = var31;
            var25 = var24.bind(var4)(var26, var25);
            var22['children'] = var25;
            var18 = var24.bind(var4)(var23, var22);
case 17:
            var14[1] = var18;
            var13['children'] = var14;
            var14 = var3.bind(var4)(var10, var13);
            var13 = new Array(2);
            var13[0] = var14;
            var14 = var11;
            if(!var11) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var23 = _closure1_slot9;
            var22 = _closure1_slot6;
            var18 = {};
            var24 = !var16;
            if(!var24) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var24 = var19.descriptionContainer;
case 21:
            var18['style'] = var24;
            var24 = function onPress() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure2_slot1;
                    if(!var2) { _fun0005_ip = 23; continue _fun0005 }
case 24:
                    var2 = _closure2_slot5;
                    var3 = false;
                    var2['current'] = var3;
                    var2 = _closure2_slot3;
                    if(var2) { _fun0005_ip = 25; continue _fun0005 }
case 26:
                    var2 = _closure2_slot14;
                    var9 = undefined;
                    var2 = var2.bind(var9)(var3);
                    var4 = _closure2_slot6;
                    var3 = var4.set;
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var2 = 14;
                    var2 = var10[var2];
                    var7 = var8.bind(var9)(var2);
                    var6 = var7.withTiming;
                    var2 = _closure2_slot13;
                    var5 = var2.current;
                    var2 = 15;
                    var2 = var10[var2];
                    var2 = var8.bind(var9)(var2);
                    var2 = var2.timingStandard;
                    var2 = var6.bind(var7)(var5, var2);
                    var2 = var3.bind(var4)(var2);
                    _fun0005_ip = 27; continue _fun0005;
case 25:
                    var4 = _closure2_slot6;
                    var3 = var4.set;
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var5 = 14;
                    var5 = var14[var5];
                    var12 = undefined;
                    var9 = var13.bind(var12)(var5);
                    var8 = var9.withTiming;
                    var5 = _closure2_slot12;
                    var7 = var5.current;
                    var5 = 15;
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
                        var2 = _closure2_slot14;
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
                    var11 = _closure2_slot14;
                    var10['setShouldLineClamp'] = var11;
                    var5['__closure'] = var10;
                    var10 = 6050776164847.0;
                    var5['__workletHash'] = var10;
                    var2 = _closure1_slot14;
                    var5['__initData'] = var2;
                    var16 = 'respect-motion-settings';
                    var19 = var9;
                    var18 = var7;
                    var15 = var5;
                    var2 = var19[var8](var18, var17, var16, var15, var14);
                    var2 = var3.bind(var4)(var2);
case 27:
                    var3 = _closure2_slot4;
                    var1 = _closure2_slot3;
                    var2 = !var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 23:
                    var1 = undefined;
                    return var1;
                }
            };
            var18['onPress'] = var24;
            var24 = 'button';
            var18['accessibilityRole'] = var24;
            var31 = _closure1_slot8;
            var25 = _closure1_slot1;
            var26 = _closure1_slot2;
            var24 = 16;
            var24 = var26[var24];
            var25 = var25.bind(var4)(var24);
            var24 = {};
            if(var30) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var33 = _closure1_slot8;
            var32 = _closure1_slot5;
            var26 = {};
            var34 = _closure1_slot7;
            var37 = var34.absoluteFill;
            var34 = new Array(2);
            var34[0] = var37;
            var37 = var19.maskFill;
            var34[1] = var37;
            var26['style'] = var34;
            var26 = var33.bind(var4)(var32, var26);
            _fun0001_ip = 30; continue _fun0001;
case 28:
            var34 = _closure1_slot9;
            var33 = _closure1_slot5;
            var32 = {};
            var37 = _closure1_slot7;
            var37 = var37.absoluteFill;
            var32['style'] = var37;
            var38 = _closure1_slot8;
            var37 = {};
            var39 = var19.maskFill;
            var37['style'] = var39;
            var38 = var38.bind(var4)(var33, var37);
            var37 = new Array(2);
            var37[0] = var38;
            var38 = {};
            var40 = var19.maskLastLine;
            var39 = new Array(2);
            var39[0] = var40;
            var40 = {};
            var43 = var28 != var42;
            var41 = 0;
            if(!var43) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var41 = var42;
case 31:
            var40['height'] = var41;
            var39[1] = var40;
            var38['style'] = var39;
            var42 = _closure1_slot8;
            var41 = _closure1_slot5;
            var39 = {};
            var40 = var19.maskFill;
            var39['style'] = var40;
            var40 = var42.bind(var4)(var41, var39);
            var39 = new Array(3);
            var39[0] = var40;
            var43 = _closure1_slot1;
            var48 = _closure1_slot2;
            var40 = 17;
            var40 = var48[var40];
            var43 = var43.bind(var4)(var40);
            var40 = {};
            var47 = _closure1_slot0;
            var46 = 18;
            var49 = var48[var46];
            var49 = var47.bind(var4)(var49);
            var49 = var49.HorizontalGradient;
            var49 = var49.START;
            var40['start'] = var49;
            var46 = var48[var46];
            var46 = var47.bind(var4)(var46);
            var46 = var46.HorizontalGradient;
            var46 = var46.END;
            var40['end'] = var46;
            var46 = _closure1_slot11;
            var40['colors'] = var46;
            var46 = var19.maskFade;
            var40['style'] = var46;
            var40 = var42.bind(var4)(var43, var40);
            var39[1] = var40;
            var40 = {};
            var43 = {};
            var46 = var28 != var45;
            var44 = 0;
            if(!var46) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var44 = var45;
case 33:
            var43['width'] = var44;
            var40['style'] = var43;
            var40 = var42.bind(var4)(var41, var40);
            var39[2] = var40;
            var38['children'] = var39;
            var38 = var34.bind(var4)(var33, var38);
            var37[1] = var38;
            var32['children'] = var37;
            var26 = var34.bind(var4)(var33, var32);
case 30:
            var24['maskElement'] = var26;
            var34 = _closure1_slot8;
            var33 = _closure1_slot0;
            var32 = _closure1_slot2;
            var26 = 12;
            var32 = var32[var26];
            var32 = var33.bind(var4)(var32);
            var33 = var32.Text;
            var32 = {'variant': 'text-sm/medium', 'color': 'text-default'};
            if(var36) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var36 = var28 == var35;
            var35 = undefined;
            if(!var36) { _fun0001_ip = 37; continue _fun0001 }
case 35:
            var35 = 3;
case 37:
            var32['lineClamp'] = var35;
            var32['children'] = var20;
            var32 = var34.bind(var4)(var33, var32);
            var24['children'] = var32;
            var25 = var31.bind(var4)(var25, var24);
            var24 = new Array(3);
            var24[0] = var25;
            var25 = null;
            if(!var30) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var32 = _closure1_slot8;
            var31 = _closure1_slot5;
            var30 = {};
            var33 = var19.viewMoreCTA;
            var30['style'] = var33;
            var35 = _closure1_slot9;
            var39 = _closure1_slot0;
            var40 = _closure1_slot2;
            var33 = var40[var26];
            var33 = var39.bind(var4)(var33);
            var34 = var33.Text;
            var33 = {'onLayout': null, 'variant': 'text-sm/medium', 'color': 'text-brand'};
            var36 = function onLayout(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure2_slot8;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0006_ip = 40; continue _fun0006 }
case 24:
                    var3 = _closure2_slot9;
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var1 = var1.layout;
                    var2 = var1.width;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 40:
                    var1 = undefined;
                    return var1;
                }
            };
            var33['onLayout'] = var36;
            var36 = 13;
            var37 = var40[var36];
            var37 = var39.bind(var4)(var37);
            var38 = var37.intl;
            var37 = var38.string;
            var36 = var40[var36];
            var36 = var39.bind(var4)(var36);
            var36 = var36.t;
            var36 = var36.OBCR+p;
            var37 = var37.bind(var38)(var36);
            var36 = ['… '];
            var36[1] = var37;
            var33['children'] = var36;
            var33 = var35.bind(var4)(var34, var33);
            var30['children'] = var33;
            var25 = var32.bind(var4)(var31, var30);
case 38:
            var24[1] = var25;
            var25 = null;
            if(!var29) { _fun0001_ip = 41; continue _fun0001 }
case 42:
            var25 = null;
            if(!var27) { _fun0001_ip = 41; continue _fun0001 }
case 43:
            var28 = _closure1_slot8;
            var32 = _closure1_slot0;
            var33 = _closure1_slot2;
            var26 = var33[var26];
            var26 = var32.bind(var4)(var26);
            var27 = var26.Text;
            var26 = {'variant': 'text-sm/medium', 'color': 'text-brand'};
            var29 = var19.collapseDescriptionCTA;
            var26['style'] = var29;
            var29 = 13;
            var30 = var33[var29];
            var30 = var32.bind(var4)(var30);
            var31 = var30.intl;
            var30 = var31.string;
            var29 = var33[var29];
            var29 = var32.bind(var4)(var29);
            var29 = var29.t;
            var29 = var29.D5xGUK;
            var29 = var30.bind(var31)(var29);
            var26['children'] = var29;
            var25 = var28.bind(var4)(var27, var26);
case 41:
            var24[2] = var25;
            var18['children'] = var24;
            var14 = var23.bind(var4)(var22, var18);
case 19:
            var13[1] = var14;
            var9['children'] = var13;
            var9 = var3.bind(var4)(var10, var9);
            var5['children'] = var9;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var6 = !var6;
            if(!var6) { _fun0001_ip = 44; continue _fun0001 }
case 45:
            var9 = _closure1_slot9;
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
                    var2 = _closure2_slot13;
                    var2['current'] = var3;
                    var2 = _closure2_slot13;
                    var2 = var2.current;
                    var4 = 0;
                    var2 = var2 > var4;
                    if(!var2) { _fun0007_ip = 46; continue _fun0007 }
case 47:
                    var3 = _closure2_slot12;
                    var3 = var3.current;
                    var2 = var3 > var4;
case 46:
                    if(!var2) { _fun0007_ip = 48; continue _fun0007 }
case 49:
                    var3 = _closure2_slot16;
                    var2 = undefined;
                    var1 = true;
                    var1 = var3.bind(var2)(var1);
case 48:
                    var1 = undefined;
                    return var1;
                }
            };
            var7['onLayout'] = var10;
            var12 = !var16;
            if(!var12) { _fun0001_ip = 50; continue _fun0001 }
case 51:
            var14 = _closure1_slot8;
            var13 = _closure1_slot0;
            var18 = _closure1_slot2;
            var10 = 12;
            var10 = var18[var10];
            var10 = var13.bind(var4)(var10);
            var13 = var10.Heading;
            var10 = {'variant': 'heading-lg/bold', 'color': 'text-default'};
            var10['children'] = var17;
            var12 = var14.bind(var4)(var13, var10);
case 50:
            var10 = new Array(2);
            var10[0] = var12;
            if(!var11) { _fun0001_ip = 52; continue _fun0001 }
case 53:
            var14 = _closure1_slot9;
            var13 = _closure1_slot5;
            var12 = {};
            var16 = !var16;
            if(!var16) { _fun0001_ip = 54; continue _fun0001 }
case 55:
            var16 = var19.descriptionContainer;
case 54:
            var12['style'] = var16;
            var18 = _closure1_slot8;
            var22 = _closure1_slot0;
            var23 = _closure1_slot2;
            var16 = 12;
            var15 = var23[var16];
            var15 = var22.bind(var4)(var15);
            var17 = var15.Text;
            var15 = {'variant': 'text-sm/medium', 'color': 'text-default'};
            var21 = function onTextLayout(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var5 = var1.lines;
                    var3 = var5.length;
                    var2 = _closure2_slot10;
                    var4 = null;
                    var2 = var4 == var2;
                    if(!var2) { _fun0008_ip = 56; continue _fun0008 }
case 57:
                    var6 = 0;
                    var6 = var5[var6];
                    var2 = var4 != var6;
case 56:
                    if(!var2) { _fun0008_ip = 58; continue _fun0008 }
case 59:
                    var6 = _closure2_slot11;
                    var2 = 0;
                    var2 = var5[var2];
                    var5 = var2.height;
                    var2 = undefined;
                    var2 = var6.bind(var2)(var5);
case 58:
                    var2 = _closure2_slot0;
                    var2 = var2.current;
                    if(!(var4 == var2)) { _fun0008_ip = 12; continue _fun0008 }
case 60:
                    var2 = _closure2_slot0;
                    var2['current'] = var3;
case 12:
                    var2 = 3;
                    if(!(var3 > var2)) { _fun0008_ip = 25; continue _fun0008 }
case 61:
                    var4 = _closure2_slot14;
                    var3 = undefined;
                    var2 = true;
                    var4 = var4.bind(var3)(var2);
                    var1 = _closure2_slot2;
                    var1 = var1.bind(var3)(var2);
case 25:
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
            var19 = 13;
            var20 = var23[var19];
            var20 = var22.bind(var4)(var20);
            var21 = var20.intl;
            var20 = var21.string;
            var19 = var23[var19];
            var19 = var22.bind(var4)(var19);
            var19 = var19.t;
            var19 = var19.D5xGUK;
            var19 = var20.bind(var21)(var19);
            var16['children'] = var19;
            var16 = var18.bind(var4)(var17, var16);
            var15[1] = var16;
            var12['children'] = var15;
            var11 = var14.bind(var4)(var13, var12);
case 52:
            var10[1] = var11;
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 44:
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