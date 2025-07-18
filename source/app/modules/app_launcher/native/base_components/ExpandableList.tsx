// app/modules/app_launcher/native/base_components/ExpandableList.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var5 = native3;
    var3 = native6;
    var7 = native7;
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
    var2 = native4;
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
 0:
            var2 = arg1;
            var18 = var2.items;
            var _closure2_slot0 = var18;
            var9 = var2.onExpand;
            var _closure2_slot1 = var9;
            var1 = var2.onExpandCTAPress;
            var _closure2_slot2 = var1;
            var1 = var2.expandedOverride;
            var _closure2_slot3 = var1;
            var6 = var2.showsExpandCTAOverride;
            var2 = var2.disableExpanding;
            var _closure2_slot4 = var2;
            var4 = undefined;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var2 = _closure1_slot9;
            var14 = var2.bind(var4)();
            var7 = _closure1_slot4;
            var5 = var7.useState;
            var2 = null;
            var3 = var2 != var1;
            if(!var3) { _fun0001_ip = 127; continue _fun0001 }
 124:
            var3 = var1;
 127:
            var7 = var5.bind(var7)(var3);
            var5 = _closure1_slot3;
            var3 = 2;
            var5 = var5.bind(var4)(var7, var3);
            var10 = 0;
            var16 = var5[var10];
            _closure2_slot5 = var16;
            var3 = 1;
            var3 = var5[var3];
            _closure2_slot6 = var3;
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 5;
            var3 = var7[var3];
            var3 = var5.bind(var4)(var3);
            var5 = var3.bind(var4)(var16);
            var3 = var16;
            if(!(var2 != var5)) { _fun0001_ip = 201; continue _fun0001 }
 198:
            var3 = var5;
 201:
            _closure2_slot7 = var3;
            var7 = _closure1_slot4;
            var8 = var7.useEffect;
            var5 = new Array(3);
            var5[0] = var16;
            var5[1] = var9;
            var5[2] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot7;
                    var2 = _closure2_slot5;
                    var2 = var3 !== var2;
                    if(!var2) { _fun0002_ip = 22; continue _fun0002 }
 18:
                    var2 = _closure2_slot5;
 22:
                    if(!var2) { _fun0002_ip = 45; continue _fun0002 }
 25:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0002_ip = 45; continue _fun0002 }
 35:
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 45:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var8.bind(var7)(var3, var5);
            var5 = var7.useEffect;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot3;
                    var1 = undefined;
                    if(!(var1 !== var3)) { _fun0003_ip = 26; continue _fun0003 }
 13:
                    var3 = _closure2_slot6;
                    var2 = _closure2_slot3;
                    var2 = var3.bind(var1)(var2);
 26:
                    return var1;
                }
            };
            var1 = var5.bind(var7)(var1, var3);
            var1 = global;
            var7 = var1.Math;
            var5 = var7.min;
            var3 = var18.length;
            var1 = 4;
            var1 = var5.bind(var7)(var1, var3);
            _closure2_slot8 = var1;
            if(!(var2 == var6)) { _fun0001_ip = 313; continue _fun0001 }
 304:
            var2 = var18.length;
            var6 = var2 > var1;
 313:
            var11 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 6;
            var2 = var8[var5];
            var3 = var11.bind(var4)(var2);
            var2 = var3.useSharedValue;
            var13 = var2.bind(var3)(var10);
            _closure2_slot9 = var13;
            var2 = var8[var5];
            var3 = var11.bind(var4)(var2);
            var2 = var3.useSharedValue;
            var15 = var2.bind(var3)(var10);
            _closure2_slot10 = var15;
            var2 = var8[var5];
            var7 = var11.bind(var4)(var2);
            var3 = var7.useDerivedValue;
            var2 = function C() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = _closure2_slot5;
                    if(!var1) { _fun0004_ip = 46; continue _fun0004 }
 10:
                    var3 = _closure2_slot9;
                    var1 = var3.get;
                    var1 = var1.bind(var3)();
                    var3 = 0;
                    if(!(var3 !== var1)) { _fun0004_ip = 46; continue _fun0004 }
 29:
                    var4 = _closure2_slot10;
                    var1 = var4.get;
                    var1 = var1.bind(var4)();
                    if(!(var3 === var1)) { _fun0004_ip = 61; continue _fun0004 }
 46:
                    var3 = _closure2_slot9;
                    var1 = var3.get;
                    var1 = var1.bind(var3)();
                    _fun0004_ip = 91; continue _fun0004;
 61:
                    var4 = _closure2_slot9;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var4 = _closure2_slot10;
                    var2 = var4.get;
                    var2 = var2.bind(var4)();
                    var1 = var3 + var2;
 91:
                    return var1;
                }
            };
            var9 = {};
            var9['expanded'] = var16;
            var9['collapsedListHeight'] = var13;
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
            var3[0] = var18;
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
            var2[0] = var18;
            var2[1] = var1;
            var1 = function() {
                var4 = _closure2_slot0;
                var3 = var4.slice;
                var2 = _closure2_slot8;
                var1 = var4.length;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var19 = var3.bind(var7)(var1, var2);
            var1 = var8[var5];
            var3 = var11.bind(var4)(var1);
            var2 = var3.useAnimatedStyle;
            var1 = function A() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = _closure2_slot9;
                    var1 = var2.get;
                    var2 = var1.bind(var2)();
                    var1 = 0;
                    if(!(var1 === var2)) { _fun0005_ip = 26; continue _fun0005 }
 22:
                    var1 = {};
                    _fun0005_ip = 102; continue _fun0005;
 26:
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
 102:
                    return var1;
                }
            };
            var7 = {};
            var7['collapsedListHeight'] = var13;
            var13 = 7;
            var13 = var8[var13];
            var13 = var11.bind(var4)(var13);
            var13 = var13.withTiming;
            var7['withTiming'] = var13;
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
            var18 = function renderItems(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var2 = arg1;
                    var3 = var2.items;
                    var _closure3_slot0 = var3;
                    var2 = var2.hasListEnd;
                    var4 = undefined;
                    if(!(var2 === var4)) { _fun0006_ip = 29; continue _fun0006 }
 27:
                    var2 = false;
 29:
                    var _closure3_slot1 = var2;
                    var2 = var3.map;
                    var1 = function(arg1, arg2) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                            var3 = {};
                            var1 = _closure3_slot1;
                            var4 = !var1;
                            var1 = !var4;
                            if(var4) { _fun0007_ip = 41; continue _fun0007 }
 18:
                            var2 = _closure3_slot0;
                            var4 = var2.length;
                            var2 = 1;
                            var4 = var4 - var2;
                            var2 = arg2;
                            var1 = var2 === var4;
 41:
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
            var3 = _closure1_slot7;
            var2 = _closure1_slot8;
            var1 = {};
            var7 = _closure1_slot1;
            var5 = var8[var5];
            var5 = var7.bind(var4)(var5);
            var7 = var5.View;
            var5 = {};
            var11 = var14.animatedListContainer;
            var8 = new Array(2);
            var8[0] = var11;
            var8[1] = var9;
            var5['style'] = var8;
            var11 = _closure1_slot6;
            var9 = _closure1_slot5;
            var8 = {};
            var13 = function onLayout(arg1) {
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
            var8['onLayout'] = var13;
            var13 = {};
            var13['items'] = var15;
            var15 = !var6;
            if(!var15) { _fun0001_ip = 728; continue _fun0001 }
 725:
            var15 = !var16;
 728:
            var13['hasListEnd'] = var15;
            var13 = var18.bind(var4)(var13);
            var8['children'] = var13;
            var9 = var11.bind(var4)(var9, var8);
            var8 = new Array(2);
            var8[0] = var9;
            var9 = var19.length;
            var9 = var9 > var10;
            if(!var9) { _fun0001_ip = 844; continue _fun0001 }
 768:
            var13 = _closure1_slot6;
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
            var15 = !var16;
            var10['accessibilityElementsHidden'] = var15;
            var15 = 'no-hide-descendants';
            if(!var16) { _fun0001_ip = 809; continue _fun0001 }
 807:
            var15 = undefined;
 809:
            var10['importantForAccessibility'] = var15;
            var15 = {};
            var15['items'] = var19;
            var19 = !var6;
            var15['hasListEnd'] = var19;
            var15 = var18.bind(var4)(var15);
            var10['children'] = var15;
            var9 = var13.bind(var4)(var11, var10);
 844:
            var8[1] = var9;
            var5['children'] = var8;
            var7 = var3.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            if(!var6) { _fun0001_ip = 1103; continue _fun0001 }
 872:
            var9 = _closure1_slot6;
            var8 = _closure1_slot5;
            var7 = {};
            var15 = _closure1_slot0;
            var18 = _closure1_slot2;
            var10 = 9;
            var10 = var18[var10];
            var10 = var15.bind(var4)(var10);
            var11 = var10.TableRow;
            var10 = {};
            var13 = {};
            var14 = var14.expandCTALabelContainer;
            var13['style'] = var14;
            var14 = 10;
            var14 = var18[var14];
            var14 = var15.bind(var4)(var14);
            var15 = var14.Text;
            var14 = {'color': 'text-brand', 'variant': 'text-md/semibold'};
            var20 = _closure1_slot0;
            var21 = _closure1_slot2;
            var17 = 11;
            var18 = var21[var17];
            var18 = var20.bind(var4)(var18);
            var19 = var18.intl;
            if(var16) { _fun0001_ip = 1016; continue _fun0001 }
 981:
            var22 = var19.format;
            var16 = var21[var17];
            var16 = var20.bind(var4)(var16);
            var16 = var16.t;
            var18 = var16.gVw57u;
            var16 = {};
            var16 = var22.bind(var19)(var18, var16);
            _fun0001_ip = 1046; continue _fun0001;
 1016:
            var18 = var19.string;
            var17 = var21[var17];
            var17 = var20.bind(var4)(var17);
            var17 = var17.t;
            var17 = var17.nPGLFR;
            var16 = var18.bind(var19)(var17);
 1046:
            var14['children'] = var16;
            var14 = var9.bind(var4)(var15, var14);
            var13['children'] = var14;
            var13 = var9.bind(var4)(var8, var13);
            var10['label'] = var13;
            var12 = function onPress() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var3 = _closure2_slot4;
                    var1 = true;
                    var4 = var1 !== var3;
                    if(!var4) { _fun0008_ip = 23; continue _fun0008 }
 16:
                    var1 = _closure2_slot5;
                    var4 = !var1;
 23:
                    var3 = _closure2_slot6;
                    var1 = undefined;
                    var3 = var3.bind(var1)(var4);
                    var5 = _closure2_slot2;
                    var3 = null;
                    if(!(var3 != var5)) { _fun0008_ip = 60; continue _fun0008 }
 44:
                    var3 = _closure2_slot2;
                    var2 = {};
                    var2['expanded'] = var4;
                    var2 = var3.bind(var1)(var2);
 60:
                    return var1;
                }
            };
            var10['onPress'] = var12;
            var12 = true;
            var10['end'] = var12;
            var10 = var9.bind(var4)(var11, var10);
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 1103:
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