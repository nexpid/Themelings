// app/modules/app_launcher/native/base_components/ExpandableList.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var5 = var7[var2];
    var2 = metroImportAll;
    var2 = var2.bind(var1)(var5);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.View;
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.jsx;
    var _closure1_slot6 = var5;
    var5 = var2.jsxs;
    var _closure1_slot7 = var5;
    var2 = var2.Fragment;
    var _closure1_slot8 = var2;
    var2 = 4;
    var5 = var7[var2];
    var9 = var6.bind(var1)(var5);
    var8 = var9.createStyles;
    var5 = {};
    var10 = {};
    var11 = 'hidden';
    var10['overflow'] = var11;
    var5['animatedListContainer'] = var10;
    var10 = {};
    var11 = 'center';
    var10['alignItems'] = var11;
    var5['expandCTALabelContainer'] = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot9 = var5;
    var5 = {};
    var8 = 'function ExpandableListTsx1(){const{expanded,collapsedListHeight,remainingListHeight}=this.__closure;if(expanded&&collapsedListHeight.get()!==0&&remainingListHeight.get()!==0){return collapsedListHeight.get()+remainingListHeight.get();}return collapsedListHeight.get();}';
    var5['code'] = var8;
    var _closure1_slot10 = var5;
    var5 = {};
    var8 = 'function ExpandableListTsx2(){const{collapsedListHeight,withTiming,containerHeight,timingStandard}=this.__closure;if(collapsedListHeight.get()!==0){return{height:withTiming(containerHeight.get(),timingStandard)};}else{return{};}}';
    var5['code'] = var8;
    var _closure1_slot11 = var5;
    var5 = 12;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/app_launcher/native/base_components/ExpandableList.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function ExpandableList(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var20 = var2.items;
            var _closure2_slot0 = var20;
            var8 = var2.onExpand;
            var _closure2_slot1 = var8;
            var1 = var2.onExpandCTAPress;
            var _closure2_slot2 = var1;
            var1 = var2.expandedOverride;
            var _closure2_slot3 = var1;
            var6 = var2.showsExpandCTAOverride;
            var3 = var2.disableExpanding;
            var _closure2_slot4 = var3;
            var21 = var2.title;
            var4 = undefined;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var17 = function renderItems(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = arg1;
                    var3 = var2.items;
                    var _closure3_slot0 = var3;
                    var2 = var2.hasListEnd;
                    var4 = undefined;
                    if(!(var2 === var4)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var2 = false;
case 2:
                    var _closure3_slot1 = var2;
                    var2 = var3.map;
                    var1 = function(arg1, arg2) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            var3 = {};
                            var1 = _closure3_slot1;
                            var4 = !var1;
                            var1 = !var4;
                            if(var4) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                            var2 = _closure3_slot0;
                            var4 = var2.length;
                            var2 = 1;
                            var4 = var4 - var2;
                            var2 = arg2;
                            var1 = var2 === var4;
case 4:
                            var3['isLastRow'] = var1;
                            var2 = arg1;
                            var1 = undefined;
                            var1 = var2.bind(var1)(var3);
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var2 = _closure1_slot9;
            var16 = var2.bind(var4)();
            var5 = _closure1_slot4;
            var3 = var5.useState;
            var13 = null;
            var2 = var13 != var1;
            if(!var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = var1;
case 6:
            var5 = var3.bind(var5)(var2);
            var3 = _closure1_slot3;
            var2 = 2;
            var3 = var3.bind(var4)(var5, var2);
            var10 = 0;
            var18 = var3[var10];
            _closure2_slot5 = var18;
            var2 = 1;
            var2 = var3[var2];
            _closure2_slot6 = var2;
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 5;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var3 = var2.bind(var4)(var18);
            var2 = var18;
            if(!(var13 != var3)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = var3;
case 8:
            _closure2_slot7 = var2;
            var5 = _closure1_slot4;
            var7 = var5.useEffect;
            var3 = new Array(3);
            var3[0] = var18;
            var3[1] = var8;
            var3[2] = var2;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot7;
                    var2 = _closure2_slot5;
                    var2 = var3 !== var2;
                    if(!var2) { _fun0004_ip = 10; continue _fun0004 }
case 5:
                    var2 = _closure2_slot5;
case 10:
                    if(!var2) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0004_ip = 11; continue _fun0004 }
case 13:
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 11:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var7.bind(var5)(var2, var3);
            var3 = var5.useEffect;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot3;
                    var1 = undefined;
                    if(!(var1 !== var3)) { _fun0005_ip = 14; continue _fun0005 }
case 15:
                    var3 = _closure2_slot6;
                    var2 = _closure2_slot3;
                    var2 = var3.bind(var1)(var2);
case 14:
                    return var1;
                }
            };
            var1 = var3.bind(var5)(var1, var2);
            var1 = global;
            var5 = var1.Math;
            var3 = var5.min;
            var2 = var20.length;
            var1 = 4;
            var1 = var3.bind(var5)(var1, var2);
            _closure2_slot8 = var1;
            if(!(var13 == var6)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var2 = var20.length;
            var6 = var2 > var1;
case 16:
            var11 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 6;
            var2 = var8[var5];
            var3 = var11.bind(var4)(var2);
            var2 = var3.useSharedValue;
            var14 = var2.bind(var3)(var10);
            _closure2_slot9 = var14;
            var2 = var8[var5];
            var3 = var11.bind(var4)(var2);
            var2 = var3.useSharedValue;
            var15 = var2.bind(var3)(var10);
            _closure2_slot10 = var15;
            var2 = var8[var5];
            var7 = var11.bind(var4)(var2);
            var3 = var7.useDerivedValue;
            var2 = function A() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = _closure2_slot5;
                    if(!var1) { _fun0006_ip = 18; continue _fun0006 }
case 19:
                    var3 = _closure2_slot9;
                    var1 = var3.get;
                    var1 = var1.bind(var3)();
                    var3 = 0;
                    if(!(var3 !== var1)) { _fun0006_ip = 18; continue _fun0006 }
case 2:
                    var4 = _closure2_slot10;
                    var1 = var4.get;
                    var1 = var1.bind(var4)();
                    if(!(var3 === var1)) { _fun0006_ip = 20; continue _fun0006 }
case 18:
                    var3 = _closure2_slot9;
                    var1 = var3.get;
                    var1 = var1.bind(var3)();
                    _fun0006_ip = 21; continue _fun0006;
case 20:
                    var4 = _closure2_slot9;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var4 = _closure2_slot10;
                    var2 = var4.get;
                    var2 = var2.bind(var4)();
                    var1 = var3 + var2;
case 21:
                    return var1;
                }
            };
            var9 = {};
            var9['expanded'] = var18;
            var9['collapsedListHeight'] = var14;
            var9['remainingListHeight'] = var15;
            var2['__closure'] = var9;
            var9 = 17033418452229.0;
            var2['__workletHash'] = var9;
            var9 = _closure1_slot10;
            var2['__initData'] = var9;
            var9 = var3.bind(var7)(var2);
            _closure2_slot11 = var9;
            var7 = _closure1_slot4;
            var15 = var7.useMemo;
            var3 = new Array(2);
            var3[0] = var20;
            var3[1] = var1;
            var2 = function() {
                var4 = _closure2_slot0;
                var3 = var4.slice;
                var2 = _closure2_slot8;
                var1 = 0;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var15 = var15.bind(var7)(var2, var3);
            var3 = var7.useMemo;
            var2 = new Array(2);
            var2[0] = var20;
            var2[1] = var1;
            var1 = function() {
                var4 = _closure2_slot0;
                var3 = var4.slice;
                var2 = _closure2_slot8;
                var1 = var4.length;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var20 = var3.bind(var7)(var1, var2);
            var1 = var8[var5];
            var3 = var11.bind(var4)(var1);
            var2 = var3.useAnimatedStyle;
            var1 = function I() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = _closure2_slot9;
                    var1 = var2.get;
                    var2 = var1.bind(var2)();
                    var1 = 0;
                    if(!(var1 === var2)) { _fun0007_ip = 14; continue _fun0007 }
case 10:
                    var1 = {};
                    _fun0007_ip = 22; continue _fun0007;
case 14:
                    var2 = {};
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var4 = 7;
                    var4 = var9[var4];
                    var7 = undefined;
                    var6 = var8.bind(var7)(var4);
                    var5 = var6.withTiming;
                    var4 = _closure2_slot11;
                    var3 = var4.get;
                    var4 = var3.bind(var4)();
                    var3 = 8;
                    var3 = var9[var3];
                    var3 = var8.bind(var7)(var3);
                    var3 = var3.timingStandard;
                    var3 = var5.bind(var6)(var4, var3);
                    var2['height'] = var3;
                    var1 = var2;
case 22:
                    return var1;
                }
            };
            var7 = {};
            var7['collapsedListHeight'] = var14;
            var14 = 7;
            var14 = var8[var14];
            var14 = var11.bind(var4)(var14);
            var14 = var14.withTiming;
            var7['withTiming'] = var14;
            var7['containerHeight'] = var9;
            var9 = 8;
            var9 = var8[var9];
            var9 = var11.bind(var4)(var9);
            var9 = var9.timingStandard;
            var7['timingStandard'] = var9;
            var1['__closure'] = var7;
            var7 = 2086836441465.0;
            var1['__workletHash'] = var7;
            var7 = _closure1_slot11;
            var1['__initData'] = var7;
            var9 = var2.bind(var3)(var1);
            var3 = _closure1_slot7;
            var2 = _closure1_slot8;
            var1 = {};
            var7 = _closure1_slot1;
            var5 = var8[var5];
            var5 = var7.bind(var4)(var5);
            var7 = var5.View;
            var5 = {};
            var11 = var16.animatedListContainer;
            var8 = new Array(2);
            var8[0] = var11;
            var8[1] = var9;
            var5['style'] = var8;
            var11 = _closure1_slot6;
            var9 = _closure1_slot5;
            var8 = {};
            var14 = function onLayout(arg1) {
                var3 = _closure2_slot9;
                var2 = var3.set;
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var1 = var1.height;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var8['onLayout'] = var14;
            var14 = {};
            var14['items'] = var15;
            var15 = !var6;
            if(!var15) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var15 = !var18;
case 23:
            var14['hasListEnd'] = var15;
            var14 = var17.bind(var4)(var14);
            var8['children'] = var14;
            var9 = var11.bind(var4)(var9, var8);
            var8 = new Array(2);
            var8[0] = var9;
            var9 = var20.length;
            var9 = var9 > var10;
            if(!var9) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var14 = _closure1_slot6;
            var11 = _closure1_slot5;
            var10 = {};
            var15 = function onLayout(arg1) {
                var3 = _closure2_slot10;
                var2 = var3.set;
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var1 = var1.height;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var10['onLayout'] = var15;
            var15 = !var18;
            var10['accessibilityElementsHidden'] = var15;
            var15 = 'no-hide-descendants';
            if(!var18) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var15 = undefined;
case 27:
            var10['importantForAccessibility'] = var15;
            var15 = {};
            var15['items'] = var20;
            var20 = !var6;
            var15['hasListEnd'] = var20;
            var15 = var17.bind(var4)(var15);
            var10['children'] = var15;
            var9 = var14.bind(var4)(var11, var10);
case 25:
            var8[1] = var9;
            var5['children'] = var8;
            var7 = var3.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            if(!var6) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var9 = _closure1_slot6;
            var8 = _closure1_slot5;
            var7 = {};
            var11 = _closure1_slot0;
            var14 = _closure1_slot2;
            var10 = 9;
            var10 = var14[var10];
            var10 = var11.bind(var4)(var10);
            var11 = var10.TableRow;
            var10 = {};
            if(var18) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var14 = var13 != var21;
            var13 = undefined;
            if(!var14) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var15 = _closure1_slot0;
            var22 = _closure1_slot2;
            var14 = 10;
            var17 = var22[var14];
            var17 = var15.bind(var4)(var17);
            var20 = var17.intl;
            var17 = var20.formatToPlainString;
            var14 = var22[var14];
            var14 = var15.bind(var4)(var14);
            var14 = var14.t;
            var15 = var14.bj/2kV;
            var14 = {};
            var14['title'] = var21;
            var13 = var17.bind(var20)(var15, var14);
case 33:
            _fun0001_ip = 35; continue _fun0001;
case 31:
            var20 = _closure1_slot0;
            var21 = _closure1_slot2;
            var14 = 10;
            var15 = var21[var14];
            var15 = var20.bind(var4)(var15);
            var17 = var15.intl;
            var15 = var17.string;
            var14 = var21[var14];
            var14 = var20.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.nPGLFQ;
            var13 = var15.bind(var17)(var14);
case 35:
            var10['accessibilityLabel'] = var13;
            var15 = _closure1_slot6;
            var14 = _closure1_slot5;
            var13 = {};
            var16 = var16.expandCTALabelContainer;
            var13['style'] = var16;
            var17 = _closure1_slot0;
            var20 = _closure1_slot2;
            var16 = 11;
            var16 = var20[var16];
            var16 = var17.bind(var4)(var16);
            var17 = var16.Text;
            var16 = {'color': 'text-brand', 'variant': 'text-md/semibold'};
            var22 = _closure1_slot0;
            var23 = _closure1_slot2;
            var19 = 10;
            var20 = var23[var19];
            var20 = var22.bind(var4)(var20);
            var21 = var20.intl;
            if(var18) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var24 = var21.format;
            var18 = var23[var19];
            var18 = var22.bind(var4)(var18);
            var18 = var18.t;
            var20 = var18.gVw57p;
            var18 = {};
            var18 = var24.bind(var21)(var20, var18);
            _fun0001_ip = 38; continue _fun0001;
case 36:
            var20 = var21.string;
            var19 = var23[var19];
            var19 = var22.bind(var4)(var19);
            var19 = var19.t;
            var19 = var19.nPGLFQ;
            var18 = var20.bind(var21)(var19);
case 38:
            var16['children'] = var18;
            var16 = var15.bind(var4)(var17, var16);
            var13['children'] = var16;
            var13 = var15.bind(var4)(var14, var13);
            var10['label'] = var13;
            var12 = function onPress() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = _closure2_slot4;
                    var1 = true;
                    var4 = var1 !== var3;
                    if(!var4) { _fun0008_ip = 39; continue _fun0008 }
case 40:
                    var1 = _closure2_slot5;
                    var4 = !var1;
case 39:
                    var3 = _closure2_slot6;
                    var1 = undefined;
                    var3 = var3.bind(var1)(var4);
                    var5 = _closure2_slot2;
                    var3 = null;
                    if(!(var3 != var5)) { _fun0008_ip = 41; continue _fun0008 }
case 42:
                    var3 = _closure2_slot2;
                    var2 = {};
                    var2['expanded'] = var4;
                    var2 = var3.bind(var1)(var2);
case 41:
                    return var1;
                }
            };
            var10['onPress'] = var12;
            var12 = true;
            var10['end'] = var12;
            var10 = var9.bind(var4)(var11, var10);
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 29:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var3['COLLAPSED_LIST_ITEM_MAX'] = var2;
    return var1;
})();