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
            var2 = {};
            var3 = 'auto';
            var2['marginLeft'] = var3;
            var1['trailingIndicator'] = var2;
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
            var16 = var3.label;
            var14 = var3.IconComponent;
            var17 = var3.trailingIndicator;
            var26 = var3.iconSource;
            var22 = var3.start;
            var21 = var3.end;
            var24 = var3.lastInSection;
            var2 = var3.index;
            var _closure2_slot0 = var2;
            var6 = var3.state;
            var9 = var3.onPress;
            var19 = var3.variant;
            var4 = undefined;
            if(!(var19 === var4)) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var19 = 'default';
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
            var27 = _closure1_slot2;
            var12 = 3;
            var3 = var27[var12];
            var8 = var25.bind(var4)(var3);
            var3 = var8.useAnimatedRef;
            var18 = var3.bind(var8)();
            _closure2_slot1 = var18;
            var3 = _closure1_slot7;
            var11 = var3.bind(var4)(var19);
            var8 = _closure1_slot1;
            var3 = 7;
            var3 = var27[var3];
            var8 = var8.bind(var4)(var3);
            var3 = 'ContextMenuItem';
            var8 = var8.bind(var4)(var3);
            var20 = var6.pan;
            _closure2_slot2 = var20;
            var3 = var6.itemMeasurements;
            _closure2_slot3 = var3;
            var23 = var6.activeIndex;
            _closure2_slot4 = var23;
            var6 = var27[var12];
            var13 = var25.bind(var4)(var6);
            var10 = var13.useSharedValue;
            var6 = 0;
            var28 = var10.bind(var13)(var6);
            _closure2_slot5 = var28;
            var6 = var27[var12];
            var15 = var25.bind(var4)(var6);
            var13 = var15.useAnimatedReaction;
            var10 = function U() {
                var2 = _closure2_slot2;
                var1 = var2.get;
                var1 = var1.bind(var2)();
                return var1;
            };
            var6 = {};
            var6['pan'] = var20;
            var10['__closure'] = var6;
            var6 = 11852115418144.0;
            var10['__workletHash'] = var6;
            var6 = _closure1_slot8;
            var10['__initData'] = var6;
            var6 = function p(arg1, arg2) {
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
            var20 = {};
            var29 = var27[var12];
            var29 = var25.bind(var4)(var29);
            var29 = var29.measure;
            var20['measure'] = var29;
            var20['ref'] = var18;
            var20['index'] = var2;
            var29 = 8;
            var30 = var27[var29];
            var30 = var25.bind(var4)(var30);
            var30 = var30.INDEX_BOUNDS_OFFSET;
            var20['INDEX_BOUNDS_OFFSET'] = var30;
            var20['itemMeasurements'] = var3;
            var30 = var27[var29];
            var30 = var25.bind(var4)(var30);
            var30 = var30.INDEX_BOUNDS_PAGE_X_OFFSET;
            var20['INDEX_BOUNDS_PAGE_X_OFFSET'] = var30;
            var30 = var27[var29];
            var30 = var25.bind(var4)(var30);
            var30 = var30.INDEX_BOUNDS_PAGE_Y_OFFSET;
            var20['INDEX_BOUNDS_PAGE_Y_OFFSET'] = var30;
            var30 = var27[var29];
            var30 = var25.bind(var4)(var30);
            var30 = var30.INDEX_BOUNDS_WIDTH_OFFSET;
            var20['INDEX_BOUNDS_WIDTH_OFFSET'] = var30;
            var29 = var27[var29];
            var29 = var25.bind(var4)(var29);
            var29 = var29.INDEX_BOUNDS_HEIGHT_OFFSET;
            var20['INDEX_BOUNDS_HEIGHT_OFFSET'] = var29;
            var6['__closure'] = var20;
            var20 = 9571959267234.0;
            var6['__workletHash'] = var20;
            var20 = _closure1_slot9;
            var6['__initData'] = var20;
            var6 = var13.bind(var15)(var10, var6);
            var6 = var11.pressed;
            var20 = var6.backgroundColor;
            _closure2_slot6 = var20;
            var6 = var27[var12];
            var13 = var25.bind(var4)(var6);
            var10 = var13.useAnimatedStyle;
            var6 = function R() {
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
                    if(!var8) { _fun0004_ip = 7; continue _fun0004 }
case 8:
                    var4 = _closure2_slot6;
case 7:
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
            var15 = {};
            var15['activeIndex'] = var23;
            var15['index'] = var2;
            var15['pressed'] = var28;
            var28 = 9;
            var28 = var27[var28];
            var28 = var25.bind(var4)(var28);
            var28 = var28.withSpring;
            var15['withSpring'] = var28;
            var15['backgroundColor'] = var20;
            var20 = 10;
            var20 = var27[var20];
            var20 = var25.bind(var4)(var20);
            var20 = var20.SUBTLE_SPRING;
            var15['SUBTLE_SPRING'] = var20;
            var6['__closure'] = var15;
            var15 = 624481847983.0;
            var6['__workletHash'] = var15;
            var15 = _closure1_slot10;
            var6['__initData'] = var15;
            var20 = var10.bind(var13)(var6);
            var6 = null;
            if(!(var6 == var14)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var10 = var6 != var26;
            var15 = null;
            if(!var10) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var25 = _closure1_slot4;
            var13 = _closure1_slot1;
            var27 = _closure1_slot2;
            var10 = 11;
            var10 = var27[var10];
            var13 = var13.bind(var4)(var10);
            var10 = {};
            var10['source'] = var26;
            var26 = var11.icon;
            var10['style'] = var26;
            var15 = var25.bind(var4)(var13, var10);
case 17:
            _fun0002_ip = 19; continue _fun0002;
case 15:
            var13 = _closure1_slot4;
            var10 = {};
            var25 = 'sm';
            var10['size'] = var25;
            var25 = var11.icon;
            var25 = var25.tintColor;
            var10['color'] = var25;
            var15 = var13.bind(var4)(var14, var10);
case 19:
            var13 = var6 != var17;
            var10 = null;
            if(!var13) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var14 = _closure1_slot4;
            var13 = {};
            var25 = 'sm';
            var13['size'] = var25;
            var25 = var11.icon;
            var25 = var25.tintColor;
            var13['color'] = var25;
            var10 = var14.bind(var4)(var17, var13);
case 20:
            var13 = _closure1_slot3;
            var17 = var13.useCallback;
            var14 = new Array(2);
            var14[0] = var2;
            var14[1] = var3;
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
            var17 = var17.bind(var13)(var3, var14);
            var14 = var13.useCallback;
            var3 = new Array(2);
            var3[0] = var23;
            var3[1] = var2;
            var2 = function() {
                var3 = _closure2_slot4;
                var2 = var3.set;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var14 = var14.bind(var13)(var2, var3);
            var3 = var13.useCallback;
            var2 = new Array(1);
            var2[0] = var23;
            var1 = function() {
                var3 = _closure2_slot4;
                var2 = var3.set;
                var1 = -1;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var13 = var3.bind(var13)(var1, var2);
            var3 = _closure1_slot5;
            var2 = _closure1_slot6;
            var1 = {};
            var1['ref'] = var18;
            var23 = var11.container;
            var18 = new Array(6);
            var18[0] = var23;
            var23 = var8;
            if(!var8) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var23 = var11.containerRefresh;
case 25:
            var18[1] = var23;
            var23 = !var21;
            if(!var23) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            var23 = !var24;
case 27:
            if(!var23) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            var23 = var11.border;
case 29:
            var18[2] = var23;
            if(!var22) { _fun0002_ip = 31; continue _fun0002 }
case 32:
            var22 = var11.roundedTop;
case 31:
            var18[3] = var22;
            if(!var21) { _fun0002_ip = 33; continue _fun0002 }
case 34:
            var21 = var11.roundedBottom;
case 33:
            var18[4] = var21;
            var18[5] = var20;
            var1['style'] = var18;
            var1['onLayout'] = var17;
            var1['onPressIn'] = var14;
            var1['onPressOut'] = var13;
            var1['onPress'] = var9;
            var1['accessibilityRole'] = var5;
            var9 = var8;
            if(!var9) { _fun0002_ip = 35; continue _fun0002 }
case 36:
            var14 = _closure1_slot4;
            var13 = _closure1_slot1;
            var5 = _closure1_slot2;
            var5 = var5[var12];
            var5 = var13.bind(var4)(var5);
            var13 = var5.View;
            var5 = {};
            var5['children'] = var15;
            var9 = var14.bind(var4)(var13, var5);
case 35:
            var5 = new Array(4);
            var5[0] = var9;
            var14 = _closure1_slot4;
            var13 = _closure1_slot0;
            var17 = _closure1_slot2;
            var9 = 12;
            var9 = var17[var9];
            var9 = var13.bind(var4)(var9);
            var13 = var9.Text;
            var9 = {'animated': true, 'variant': 'text-md/medium'};
            var17 = var11.label;
            var9['style'] = var17;
            var17 = 'text-strong';
            var18 = 'destructive';
            if(!(var18 === var19)) { _fun0002_ip = 37; continue _fun0002 }
case 38:
            var17 = 'text-feedback-critical';
case 37:
            var9['color'] = var17;
            var9['children'] = var16;
            var9 = var14.bind(var4)(var13, var9);
            var5[1] = var9;
            var8 = !var8;
            if(!var8) { _fun0002_ip = 39; continue _fun0002 }
case 40:
            var14 = _closure1_slot4;
            var13 = _closure1_slot1;
            var9 = _closure1_slot2;
            var9 = var9[var12];
            var9 = var13.bind(var4)(var9);
            var13 = var9.View;
            var9 = {};
            var9['children'] = var15;
            var8 = var14.bind(var4)(var13, var9);
case 39:
            var5[2] = var8;
            var6 = var6 != var10;
            if(!var6) { _fun0002_ip = 41; continue _fun0002 }
case 42:
            var9 = _closure1_slot4;
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var7 = var7[var12];
            var7 = var8.bind(var4)(var7);
            var8 = var7.View;
            var7 = {};
            var11 = var11.trailingIndicator;
            var7['style'] = var11;
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 41:
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['ContextMenuItem'] = var2;
    return var1;
})();