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
            var3 = 'flex-start';
            var2['justifyContent'] = var3;
            var1['containerRefresh'] = var2;
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
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/ContextMenu/native/ContextMenuItem.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ContextMenuItem(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var13 = var3.label;
            var15 = var3.IconComponent;
            var24 = var3.iconSource;
            var20 = var3.start;
            var19 = var3.end;
            var22 = var3.lastInSection;
            var2 = var3.index;
            var _closure2_slot0 = var2;
            var9 = var3.state;
            var8 = var3.onPress;
            var16 = var3.variant;
            var4 = undefined;
            if(!(var16 === var4)) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var16 = 'default';
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
            var25 = _closure1_slot0;
            var26 = _closure1_slot2;
            var11 = 3;
            var3 = var26[var11];
            var6 = var25.bind(var4)(var3);
            var3 = var6.useAnimatedRef;
            var17 = var3.bind(var6)();
            _closure2_slot1 = var17;
            var3 = _closure1_slot7;
            var14 = var3.bind(var4)(var16);
            var6 = _closure1_slot1;
            var3 = 7;
            var3 = var26[var3];
            var6 = var6.bind(var4)(var3);
            var3 = 'ContextMenuItem';
            var6 = var6.bind(var4)(var3);
            var23 = var9.pan;
            _closure2_slot2 = var23;
            var3 = var9.itemMeasurements;
            _closure2_slot3 = var3;
            var21 = var9.activeIndex;
            _closure2_slot4 = var21;
            var9 = var26[var11];
            var12 = var25.bind(var4)(var9);
            var10 = var12.useSharedValue;
            var9 = 0;
            var27 = var10.bind(var12)(var9);
            _closure2_slot5 = var27;
            var9 = var26[var11];
            var18 = var25.bind(var4)(var9);
            var12 = var18.useAnimatedReaction;
            var10 = function p() {
                var2 = _closure2_slot2;
                var1 = var2.get;
                var1 = var1.bind(var2)();
                return var1;
            };
            var9 = {};
            var9['pan'] = var23;
            var10['__closure'] = var9;
            var9 = 11852115418144.0;
            var10['__workletHash'] = var9;
            var9 = _closure1_slot8;
            var10['__initData'] = var9;
            var9 = function f(arg1, arg2) {
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
                    var1 = 8;
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
            var23 = {};
            var28 = var26[var11];
            var28 = var25.bind(var4)(var28);
            var28 = var28.measure;
            var23['measure'] = var28;
            var23['ref'] = var17;
            var23['index'] = var2;
            var28 = 8;
            var29 = var26[var28];
            var29 = var25.bind(var4)(var29);
            var29 = var29.INDEX_BOUNDS_OFFSET;
            var23['INDEX_BOUNDS_OFFSET'] = var29;
            var23['itemMeasurements'] = var3;
            var29 = var26[var28];
            var29 = var25.bind(var4)(var29);
            var29 = var29.INDEX_BOUNDS_PAGE_X_OFFSET;
            var23['INDEX_BOUNDS_PAGE_X_OFFSET'] = var29;
            var29 = var26[var28];
            var29 = var25.bind(var4)(var29);
            var29 = var29.INDEX_BOUNDS_PAGE_Y_OFFSET;
            var23['INDEX_BOUNDS_PAGE_Y_OFFSET'] = var29;
            var29 = var26[var28];
            var29 = var25.bind(var4)(var29);
            var29 = var29.INDEX_BOUNDS_WIDTH_OFFSET;
            var23['INDEX_BOUNDS_WIDTH_OFFSET'] = var29;
            var28 = var26[var28];
            var28 = var25.bind(var4)(var28);
            var28 = var28.INDEX_BOUNDS_HEIGHT_OFFSET;
            var23['INDEX_BOUNDS_HEIGHT_OFFSET'] = var28;
            var9['__closure'] = var23;
            var23 = 9571959267234.0;
            var9['__workletHash'] = var23;
            var23 = _closure1_slot9;
            var9['__initData'] = var23;
            var9 = var12.bind(var18)(var10, var9);
            var9 = var14.pressed;
            var23 = var9.backgroundColor;
            _closure2_slot6 = var23;
            var9 = var26[var11];
            var12 = var25.bind(var4)(var9);
            var10 = var12.useAnimatedStyle;
            var9 = function P() {
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
                    var4 = 9;
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
                    var2 = 10;
                    var2 = var8[var2];
                    var2 = var3.bind(var7)(var2);
                    var3 = var2.SUBTLE_SPRING;
                    var2 = 'animate-always';
                    var2 = var5.bind(var6)(var4, var3, var2);
                    var1['backgroundColor'] = var2;
                    return var1;
                }
            };
            var18 = {};
            var18['activeIndex'] = var21;
            var18['index'] = var2;
            var18['pressed'] = var27;
            var27 = 9;
            var27 = var26[var27];
            var27 = var25.bind(var4)(var27);
            var27 = var27.withSpring;
            var18['withSpring'] = var27;
            var18['backgroundColor'] = var23;
            var23 = 10;
            var23 = var26[var23];
            var23 = var25.bind(var4)(var23);
            var23 = var23.SUBTLE_SPRING;
            var18['SUBTLE_SPRING'] = var23;
            var9['__closure'] = var18;
            var18 = 624481847983.0;
            var9['__workletHash'] = var18;
            var18 = _closure1_slot10;
            var9['__initData'] = var18;
            var18 = var10.bind(var12)(var9);
            var10 = null;
            if(!(var10 == var15)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var9 = var10 != var24;
            var10 = null;
            if(!var9) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var23 = _closure1_slot4;
            var12 = _closure1_slot1;
            var25 = _closure1_slot2;
            var9 = 11;
            var9 = var25[var9];
            var12 = var12.bind(var4)(var9);
            var9 = {};
            var9['source'] = var24;
            var24 = var14.icon;
            var9['style'] = var24;
            var10 = var23.bind(var4)(var12, var9);
case 19:
            _fun0002_ip = 21; continue _fun0002;
case 17:
            var12 = _closure1_slot4;
            var9 = {};
            var23 = 'sm';
            var9['size'] = var23;
            var23 = var14.icon;
            var23 = var23.tintColor;
            var9['color'] = var23;
            var10 = var12.bind(var4)(var15, var9);
case 21:
            var9 = _closure1_slot3;
            var15 = var9.useCallback;
            var12 = new Array(2);
            var12[0] = var2;
            var12[1] = var3;
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
                    var1 = 8;
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
            var15 = var15.bind(var9)(var3, var12);
            var12 = var9.useCallback;
            var3 = new Array(2);
            var3[0] = var21;
            var3[1] = var2;
            var2 = function() {
                var3 = _closure2_slot4;
                var2 = var3.set;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var12 = var12.bind(var9)(var2, var3);
            var3 = var9.useCallback;
            var2 = new Array(1);
            var2[0] = var21;
            var1 = function() {
                var3 = _closure2_slot4;
                var2 = var3.set;
                var1 = -1;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var9 = var3.bind(var9)(var1, var2);
            var3 = _closure1_slot5;
            var2 = _closure1_slot6;
            var1 = {};
            var1['ref'] = var17;
            var21 = var14.container;
            var17 = new Array(6);
            var17[0] = var21;
            var21 = var6;
            if(!var6) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var21 = var14.containerRefresh;
case 25:
            var17[1] = var21;
            var21 = !var19;
            if(!var21) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            var21 = !var22;
case 27:
            if(!var21) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            var21 = var14.border;
case 29:
            var17[2] = var21;
            if(!var20) { _fun0002_ip = 31; continue _fun0002 }
case 32:
            var20 = var14.roundedTop;
case 31:
            var17[3] = var20;
            if(!var19) { _fun0002_ip = 33; continue _fun0002 }
case 34:
            var19 = var14.roundedBottom;
case 33:
            var17[4] = var19;
            var17[5] = var18;
            var1['style'] = var17;
            var1['onLayout'] = var15;
            var1['onPressIn'] = var12;
            var1['onPressOut'] = var9;
            var1['onPress'] = var8;
            var1['accessibilityRole'] = var5;
            var8 = var6;
            if(!var8) { _fun0002_ip = 35; continue _fun0002 }
case 36:
            var12 = _closure1_slot4;
            var9 = _closure1_slot1;
            var5 = _closure1_slot2;
            var5 = var5[var11];
            var5 = var9.bind(var4)(var5);
            var9 = var5.View;
            var5 = {};
            var5['children'] = var10;
            var8 = var12.bind(var4)(var9, var5);
case 35:
            var5 = new Array(3);
            var5[0] = var8;
            var12 = _closure1_slot4;
            var9 = _closure1_slot0;
            var15 = _closure1_slot2;
            var8 = 12;
            var8 = var15[var8];
            var8 = var9.bind(var4)(var8);
            var9 = var8.Text;
            var8 = {'animated': true, 'variant': 'text-md/medium'};
            var14 = var14.label;
            var8['style'] = var14;
            var14 = 'text-strong';
            var15 = 'destructive';
            if(!(var15 === var16)) { _fun0002_ip = 37; continue _fun0002 }
case 38:
            var14 = 'text-feedback-critical';
case 37:
            var8['color'] = var14;
            var8['children'] = var13;
            var8 = var12.bind(var4)(var9, var8);
            var5[1] = var8;
            var6 = !var6;
            if(!var6) { _fun0002_ip = 39; continue _fun0002 }
case 40:
            var9 = _closure1_slot4;
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var7 = var7[var11];
            var7 = var8.bind(var4)(var7);
            var8 = var7.View;
            var7 = {};
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 39:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['ContextMenuItem'] = var2;
    return var1;
})();