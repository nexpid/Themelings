// app/design/components/ContextMenu/native/ContextMenuItem.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.Pressable;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.jsx;
    var _closure1_slot4 = var9;
    var4 = var4.jsxs;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var7 = var7.bind(var1)(var4);
    var4 = var7.createAnimatedComponent;
    var4 = var4.bind(var7)(var8);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = {};
            var2 = {'padding': null, 'minHeight': null, 'flexDirection': 'row', 'justifyContent': 'space-between', 'alignItems': 'center', 'gap': 8};
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 5;
            var8 = var4[var3];
            var7 = undefined;
            var8 = var6.bind(var7)(var8);
            var8 = var8.CONTEXT_MENU_ITEM_PADDING;
            var2['padding'] = var8;
            var3 = var4[var3];
            var3 = var6.bind(var7)(var3);
            var3 = var3.CONTEXT_MENU_ITEM_BASE_HEIGHT;
            var2['minHeight'] = var3;
            var1['container'] = var2;
            var2 = {};
            var6 = _closure1_slot1;
            var8 = 6;
            var3 = var4[var8];
            var3 = var6.bind(var7)(var3);
            var3 = var3.radii;
            var3 = var3.lg;
            var2['borderTopLeftRadius'] = var3;
            var3 = var4[var8];
            var3 = var6.bind(var7)(var3);
            var3 = var3.radii;
            var3 = var3.lg;
            var2['borderTopRightRadius'] = var3;
            var1['roundedTop'] = var2;
            var2 = {};
            var3 = var4[var8];
            var3 = var6.bind(var7)(var3);
            var3 = var3.radii;
            var3 = var3.lg;
            var2['borderBottomLeftRadius'] = var3;
            var3 = var4[var8];
            var3 = var6.bind(var7)(var3);
            var3 = var3.radii;
            var3 = var3.lg;
            var2['borderBottomRightRadius'] = var3;
            var1['roundedBottom'] = var2;
            var2 = {};
            var3 = 1;
            var2['borderBottomWidth'] = var3;
            var9 = var4[var8];
            var9 = var6.bind(var7)(var9);
            var9 = var9.colors;
            var9 = var9.BORDER_SUBTLE;
            var2['borderBottomColor'] = var9;
            var1['border'] = var2;
            var2 = {};
            var4 = var4[var8];
            var4 = var6.bind(var7)(var4);
            var4 = var4.colors;
            var4 = var4.BACKGROUND_MOD_SUBTLE;
            var2['backgroundColor'] = var4;
            var1['pressed'] = var2;
            var2 = {'width': 20, 'height': 20};
            var6 = 'destructive';
            var4 = arg1;
            if(!(var6 !== var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = _closure1_slot1;
            var4 = _closure1_slot2;
            var4 = var4[var8];
            var4 = var6.bind(var7)(var4);
            var4 = var4.colors;
            var4 = var4.TEXT_STRONG;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var5 = var5[var8];
            var5 = var6.bind(var7)(var5);
            var5 = var5.colors;
            var4 = var5.TEXT_FEEDBACK_CRITICAL;
case 4:
            var2['tintColor'] = var4;
            var1['icon'] = var2;
            var2 = {};
            var2['flexShrink'] = var3;
            var1['label'] = var2;
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = {};
    var7 = 'function ContextMenuItemNativeTsx1(){const{pan}=this.__closure;return pan.get();}';
    var4['code'] = var7;
    var _closure1_slot8 = var4;
    var4 = {};
    var7 = 'function ContextMenuItemNativeTsx2(_current,previous){const{measure,ref,index,INDEX_BOUNDS_OFFSET,itemMeasurements,INDEX_BOUNDS_PAGE_X_OFFSET,INDEX_BOUNDS_PAGE_Y_OFFSET,INDEX_BOUNDS_WIDTH_OFFSET,INDEX_BOUNDS_HEIGHT_OFFSET}=this.__closure;if(previous==null||_current===previous)return;const measurements=measure(ref);if(measurements!=null){const{pageX:pageX,pageY:pageY,width:width,height:height}=measurements;const offset=index*INDEX_BOUNDS_OFFSET;itemMeasurements.get()[offset+INDEX_BOUNDS_PAGE_X_OFFSET]=pageX;itemMeasurements.get()[offset+INDEX_BOUNDS_PAGE_Y_OFFSET]=pageY;itemMeasurements.get()[offset+INDEX_BOUNDS_WIDTH_OFFSET]=width;itemMeasurements.get()[offset+INDEX_BOUNDS_HEIGHT_OFFSET]=height;}}';
    var4['code'] = var7;
    var _closure1_slot9 = var4;
    var4 = {};
    var7 = "function ContextMenuItemNativeTsx3(){const{activeIndex,index,pressed,withSpring,backgroundColor,SUBTLE_SPRING}=this.__closure;const isActive=activeIndex.get()===index||pressed.get()===1;return{backgroundColor:withSpring(isActive?backgroundColor:'transparent',SUBTLE_SPRING,'animate-always')};}";
    var4['code'] = var7;
    var _closure1_slot10 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/ContextMenu/native/ContextMenuItem.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ContextMenuItem(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var11 = var3.label;
            var15 = var3.IconComponent;
            var23 = var3.iconSource;
            var19 = var3.start;
            var18 = var3.end;
            var21 = var3.lastInSection;
            var2 = var3.index;
            var _closure2_slot0 = var2;
            var8 = var3.state;
            var7 = var3.onPress;
            var14 = var3.variant;
            var4 = undefined;
            if(!(var14 === var4)) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var14 = 'default';
case 5:
            var5 = var3.accessibilityRole;
            if(!(var5 === var4)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var5 = 'button';
case 7:
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var24 = _closure1_slot0;
            var25 = _closure1_slot2;
            var10 = 3;
            var3 = var25[var10];
            var9 = var24.bind(var4)(var3);
            var3 = var9.useAnimatedRef;
            var16 = var3.bind(var9)();
            _closure2_slot1 = var16;
            var3 = _closure1_slot7;
            var12 = var3.bind(var4)(var14);
            var22 = var8.pan;
            _closure2_slot2 = var22;
            var3 = var8.itemMeasurements;
            _closure2_slot3 = var3;
            var20 = var8.activeIndex;
            _closure2_slot4 = var20;
            var8 = var25[var10];
            var13 = var24.bind(var4)(var8);
            var9 = var13.useSharedValue;
            var8 = 0;
            var26 = var9.bind(var13)(var8);
            _closure2_slot5 = var26;
            var8 = var25[var10];
            var17 = var24.bind(var4)(var8);
            var13 = var17.useAnimatedReaction;
            var9 = function U() {
                var2 = _closure2_slot2;
                var1 = var2.get;
                var1 = var1.bind(var2)();
                return var1;
            };
            var8 = {};
            var8['pan'] = var22;
            var9['__closure'] = var8;
            var8 = 11852115418144.0;
            var9['__workletHash'] = var8;
            var8 = _closure1_slot8;
            var9['__initData'] = var8;
            var8 = function p(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = arg2;
                    var4 = null;
                    if(!(var4 != var2)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                    var1 = arg1;
                    if(!(var1 !== var2)) { _fun0003_ip = 9; continue _fun0003 }
case 11:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 3;
                    var2 = var5[var2];
                    var6 = undefined;
                    var7 = var3.bind(var6)(var2);
                    var5 = var7.measure;
                    var3 = _closure2_slot1;
                    var3 = var5.bind(var7)(var3);
                    if(!(var4 != var3)) { _fun0003_ip = 9; continue _fun0003 }
case 12:
                    var12 = var3.pageX;
                    var11 = var3.pageY;
                    var10 = var3.width;
                    var3 = var3.height;
                    var8 = _closure2_slot0;
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 7;
                    var4 = var7[var1];
                    var4 = var5.bind(var6)(var4);
                    var4 = var4.INDEX_BOUNDS_OFFSET;
                    var4 = var8 * var4;
                    var9 = _closure2_slot3;
                    var8 = var9.get;
                    var9 = var8.bind(var9)();
                    var8 = var7[var1];
                    var8 = var5.bind(var6)(var8);
                    var8 = var8.INDEX_BOUNDS_PAGE_X_OFFSET;
                    var8 = var4 + var8;
                    var9[var8] = var12;
                    var9 = _closure2_slot3;
                    var8 = var9.get;
                    var9 = var8.bind(var9)();
                    var8 = var7[var1];
                    var8 = var5.bind(var6)(var8);
                    var8 = var8.INDEX_BOUNDS_PAGE_Y_OFFSET;
                    var8 = var4 + var8;
                    var9[var8] = var11;
                    var9 = _closure2_slot3;
                    var8 = var9.get;
                    var9 = var8.bind(var9)();
                    var8 = var7[var1];
                    var8 = var5.bind(var6)(var8);
                    var8 = var8.INDEX_BOUNDS_WIDTH_OFFSET;
                    var8 = var4 + var8;
                    var9[var8] = var10;
                    var8 = _closure2_slot3;
                    var2 = var8.get;
                    var2 = var2.bind(var8)();
                    var1 = var7[var1];
                    var1 = var5.bind(var6)(var1);
                    var1 = var1.INDEX_BOUNDS_HEIGHT_OFFSET;
                    var1 = var4 + var1;
                    var2[var1] = var3;
case 9:
                    var1 = undefined;
                    return var1;
                }
            };
            var22 = {};
            var27 = var25[var10];
            var27 = var24.bind(var4)(var27);
            var27 = var27.measure;
            var22['measure'] = var27;
            var22['ref'] = var16;
            var22['index'] = var2;
            var27 = 7;
            var28 = var25[var27];
            var28 = var24.bind(var4)(var28);
            var28 = var28.INDEX_BOUNDS_OFFSET;
            var22['INDEX_BOUNDS_OFFSET'] = var28;
            var22['itemMeasurements'] = var3;
            var28 = var25[var27];
            var28 = var24.bind(var4)(var28);
            var28 = var28.INDEX_BOUNDS_PAGE_X_OFFSET;
            var22['INDEX_BOUNDS_PAGE_X_OFFSET'] = var28;
            var28 = var25[var27];
            var28 = var24.bind(var4)(var28);
            var28 = var28.INDEX_BOUNDS_PAGE_Y_OFFSET;
            var22['INDEX_BOUNDS_PAGE_Y_OFFSET'] = var28;
            var28 = var25[var27];
            var28 = var24.bind(var4)(var28);
            var28 = var28.INDEX_BOUNDS_WIDTH_OFFSET;
            var22['INDEX_BOUNDS_WIDTH_OFFSET'] = var28;
            var27 = var25[var27];
            var27 = var24.bind(var4)(var27);
            var27 = var27.INDEX_BOUNDS_HEIGHT_OFFSET;
            var22['INDEX_BOUNDS_HEIGHT_OFFSET'] = var27;
            var8['__closure'] = var22;
            var22 = 9571959267234.0;
            var8['__workletHash'] = var22;
            var22 = _closure1_slot9;
            var8['__initData'] = var22;
            var8 = var13.bind(var17)(var9, var8);
            var8 = var12.pressed;
            var22 = var8.backgroundColor;
            _closure2_slot6 = var22;
            var8 = var25[var10];
            var13 = var24.bind(var4)(var8);
            var9 = var13.useAnimatedStyle;
            var8 = function H() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot4;
                    var1 = var2.get;
                    var2 = var1.bind(var2)();
                    var1 = _closure2_slot0;
                    var8 = var2 === var1;
                    if(var8) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                    var2 = _closure2_slot5;
                    var1 = var2.get;
                    var2 = var1.bind(var2)();
                    var1 = 1;
                    var8 = var1 === var2;
case 13:
                    var1 = {};
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 8;
                    var4 = var6[var4];
                    var7 = undefined;
                    var6 = var5.bind(var7)(var4);
                    var5 = var6.withSpring;
                    var4 = 'transparent';
                    if(!var8) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                    var4 = _closure2_slot6;
case 15:
                    var3 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 9;
                    var2 = var8[var2];
                    var2 = var3.bind(var7)(var2);
                    var3 = var2.SUBTLE_SPRING;
                    var2 = 'animate-always';
                    var2 = var5.bind(var6)(var4, var3, var2);
                    var1['backgroundColor'] = var2;
                    return var1;
                }
            };
            var17 = {};
            var17['activeIndex'] = var20;
            var17['index'] = var2;
            var17['pressed'] = var26;
            var26 = 8;
            var26 = var25[var26];
            var26 = var24.bind(var4)(var26);
            var26 = var26.withSpring;
            var17['withSpring'] = var26;
            var17['backgroundColor'] = var22;
            var22 = 9;
            var22 = var25[var22];
            var22 = var24.bind(var4)(var22);
            var22 = var22.SUBTLE_SPRING;
            var17['SUBTLE_SPRING'] = var22;
            var8['__closure'] = var17;
            var17 = 624481847983.0;
            var8['__workletHash'] = var17;
            var17 = _closure1_slot10;
            var8['__initData'] = var17;
            var17 = var9.bind(var13)(var8);
            var9 = null;
            if(!(var9 == var15)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var8 = var9 != var23;
            var9 = null;
            if(!var8) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var22 = _closure1_slot4;
            var13 = _closure1_slot1;
            var24 = _closure1_slot2;
            var8 = 10;
            var8 = var24[var8];
            var13 = var13.bind(var4)(var8);
            var8 = {};
            var8['source'] = var23;
            var23 = var12.icon;
            var8['style'] = var23;
            var9 = var22.bind(var4)(var13, var8);
case 19:
            _fun0002_ip = 21; continue _fun0002;
case 17:
            var13 = _closure1_slot4;
            var8 = {};
            var22 = 'sm';
            var8['size'] = var22;
            var22 = var12.icon;
            var22 = var22.tintColor;
            var8['color'] = var22;
            var9 = var13.bind(var4)(var15, var8);
case 21:
            var8 = _closure1_slot3;
            var15 = var8.useCallback;
            var13 = new Array(2);
            var13[0] = var2;
            var13[1] = var3;
            var3 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var1 = var1.layout;
                    var10 = var1.height;
                    var3 = var1.width;
                    var1 = 0;
                    if(!(var1 !== var10)) { _fun0005_ip = 22; continue _fun0005 }
case 23:
                    if(!(var1 !== var3)) { _fun0005_ip = 22; continue _fun0005 }
case 24:
                    var8 = _closure2_slot0;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 7;
                    var4 = var7[var1];
                    var5 = undefined;
                    var4 = var6.bind(var5)(var4);
                    var4 = var4.INDEX_BOUNDS_OFFSET;
                    var4 = var8 * var4;
                    var9 = _closure2_slot3;
                    var8 = var9.get;
                    var9 = var8.bind(var9)();
                    var8 = var7[var1];
                    var8 = var6.bind(var5)(var8);
                    var8 = var8.INDEX_BOUNDS_HEIGHT_OFFSET;
                    var8 = var4 + var8;
                    var9[var8] = var10;
                    var8 = _closure2_slot3;
                    var2 = var8.get;
                    var2 = var2.bind(var8)();
                    var1 = var7[var1];
                    var1 = var6.bind(var5)(var1);
                    var1 = var1.INDEX_BOUNDS_WIDTH_OFFSET;
                    var1 = var4 + var1;
                    var2[var1] = var3;
case 22:
                    var1 = undefined;
                    return var1;
                }
            };
            var15 = var15.bind(var8)(var3, var13);
            var13 = var8.useCallback;
            var3 = new Array(2);
            var3[0] = var20;
            var3[1] = var2;
            var2 = function() {
                var3 = _closure2_slot4;
                var2 = var3.set;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var13 = var13.bind(var8)(var2, var3);
            var3 = var8.useCallback;
            var2 = new Array(1);
            var2[0] = var20;
            var1 = function() {
                var3 = _closure2_slot4;
                var2 = var3.set;
                var1 = -1;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var8 = var3.bind(var8)(var1, var2);
            var3 = _closure1_slot5;
            var2 = _closure1_slot6;
            var1 = {};
            var1['ref'] = var16;
            var20 = var12.container;
            var16 = new Array(5);
            var16[0] = var20;
            var20 = !var18;
            if(!var20) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var20 = !var21;
case 25:
            if(!var20) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            var20 = var12.border;
case 27:
            var16[1] = var20;
            if(!var19) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            var19 = var12.roundedTop;
case 29:
            var16[2] = var19;
            if(!var18) { _fun0002_ip = 31; continue _fun0002 }
case 32:
            var18 = var12.roundedBottom;
case 31:
            var16[3] = var18;
            var16[4] = var17;
            var1['style'] = var16;
            var1['onLayout'] = var15;
            var1['onPressIn'] = var13;
            var1['onPressOut'] = var8;
            var1['onPress'] = var7;
            var1['accessibilityRole'] = var5;
            var8 = _closure1_slot4;
            var7 = _closure1_slot0;
            var13 = _closure1_slot2;
            var5 = 11;
            var5 = var13[var5];
            var5 = var7.bind(var4)(var5);
            var7 = var5.Text;
            var5 = {'animated': true, 'variant': 'text-md/medium'};
            var12 = var12.label;
            var5['style'] = var12;
            var12 = 'text-strong';
            var13 = 'destructive';
            if(!(var13 === var14)) { _fun0002_ip = 33; continue _fun0002 }
case 34:
            var12 = 'text-feedback-critical';
case 33:
            var5['color'] = var12;
            var5['children'] = var11;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot4;
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var6 = var6[var10];
            var6 = var7.bind(var4)(var6);
            var7 = var6.View;
            var6 = {};
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['ContextMenuItem'] = var2;
    return var1;
})();