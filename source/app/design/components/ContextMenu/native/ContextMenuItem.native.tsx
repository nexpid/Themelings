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
 0:
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
            var9 = var9.DIVIDER_SUBTLE;
            var2['borderBottomColor'] = var9;
            var1['border'] = var2;
            var2 = {};
            var4 = var4[var8];
            var4 = var6.bind(var7)(var4);
            var4 = var4.colors;
            var4 = var4.BG_MOD_SUBTLE;
            var2['backgroundColor'] = var4;
            var1['pressed'] = var2;
            var2 = {'width': 20, 'height': 20};
            var6 = 'destructive';
            var4 = arg1;
            if(!(var6 !== var4)) { _fun0001_ip = 323; continue _fun0001 }
 293:
            var6 = _closure1_slot1;
            var4 = _closure1_slot2;
            var4 = var4[var8];
            var4 = var6.bind(var7)(var4);
            var4 = var4.colors;
            var4 = var4.TEXT_PRIMARY;
            _fun0001_ip = 351; continue _fun0001;
 323:
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var5 = var5[var8];
            var5 = var6.bind(var7)(var5);
            var5 = var5.colors;
            var4 = var5.TEXT_DANGER;
 351:
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
 0:
            var3 = arg1;
            var11 = var3.label;
            var13 = var3.IconComponent;
            var22 = var3.iconSource;
            var18 = var3.start;
            var17 = var3.end;
            var20 = var3.lastInSection;
            var2 = var3.index;
            var _closure2_slot0 = var2;
            var8 = var3.state;
            var5 = var3.onPress;
            var7 = var3.variant;
            var4 = undefined;
            if(!(var7 === var4)) { _fun0002_ip = 71; continue _fun0002 }
 67:
            var7 = 'default';
 71:
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var10 = 3;
            var3 = var24[var10];
            var9 = var23.bind(var4)(var3);
            var3 = var9.useAnimatedRef;
            var15 = var3.bind(var9)();
            _closure2_slot1 = var15;
            var3 = _closure1_slot7;
            var12 = var3.bind(var4)(var7);
            var21 = var8.pan;
            _closure2_slot2 = var21;
            var3 = var8.itemMeasurements;
            _closure2_slot3 = var3;
            var19 = var8.activeIndex;
            _closure2_slot4 = var19;
            var8 = var24[var10];
            var14 = var23.bind(var4)(var8);
            var9 = var14.useSharedValue;
            var8 = 0;
            var25 = var9.bind(var14)(var8);
            _closure2_slot5 = var25;
            var8 = var24[var10];
            var16 = var23.bind(var4)(var8);
            var14 = var16.useAnimatedReaction;
            var9 = function h() {
                var2 = _closure2_slot2;
                var1 = var2.get;
                var1 = var1.bind(var2)();
                return var1;
            };
            var8 = {};
            var8['pan'] = var21;
            var9['__closure'] = var8;
            var8 = 11852115418144.0;
            var9['__workletHash'] = var8;
            var8 = _closure1_slot8;
            var9['__initData'] = var8;
            var8 = function p(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = arg2;
                    var4 = null;
                    if(!(var4 != var2)) { _fun0003_ip = 272; continue _fun0003 }
 12:
                    var1 = arg1;
                    if(!(var1 !== var2)) { _fun0003_ip = 272; continue _fun0003 }
 22:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 3;
                    var2 = var5[var2];
                    var6 = undefined;
                    var7 = var3.bind(var6)(var2);
                    var5 = var7.measure;
                    var3 = _closure2_slot1;
                    var3 = var5.bind(var7)(var3);
                    if(!(var4 != var3)) { _fun0003_ip = 272; continue _fun0003 }
 72:
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
 272:
                    var1 = undefined;
                    return var1;
                }
            };
            var21 = {};
            var26 = var24[var10];
            var26 = var23.bind(var4)(var26);
            var26 = var26.measure;
            var21['measure'] = var26;
            var21['ref'] = var15;
            var21['index'] = var2;
            var26 = 7;
            var27 = var24[var26];
            var27 = var23.bind(var4)(var27);
            var27 = var27.INDEX_BOUNDS_OFFSET;
            var21['INDEX_BOUNDS_OFFSET'] = var27;
            var21['itemMeasurements'] = var3;
            var27 = var24[var26];
            var27 = var23.bind(var4)(var27);
            var27 = var27.INDEX_BOUNDS_PAGE_X_OFFSET;
            var21['INDEX_BOUNDS_PAGE_X_OFFSET'] = var27;
            var27 = var24[var26];
            var27 = var23.bind(var4)(var27);
            var27 = var27.INDEX_BOUNDS_PAGE_Y_OFFSET;
            var21['INDEX_BOUNDS_PAGE_Y_OFFSET'] = var27;
            var27 = var24[var26];
            var27 = var23.bind(var4)(var27);
            var27 = var27.INDEX_BOUNDS_WIDTH_OFFSET;
            var21['INDEX_BOUNDS_WIDTH_OFFSET'] = var27;
            var26 = var24[var26];
            var26 = var23.bind(var4)(var26);
            var26 = var26.INDEX_BOUNDS_HEIGHT_OFFSET;
            var21['INDEX_BOUNDS_HEIGHT_OFFSET'] = var26;
            var8['__closure'] = var21;
            var21 = 9571959267234.0;
            var8['__workletHash'] = var21;
            var21 = _closure1_slot9;
            var8['__initData'] = var21;
            var8 = var14.bind(var16)(var9, var8);
            var8 = var12.pressed;
            var21 = var8.backgroundColor;
            _closure2_slot6 = var21;
            var8 = var24[var10];
            var14 = var23.bind(var4)(var8);
            var9 = var14.useAnimatedStyle;
            var8 = function G() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = _closure2_slot4;
                    var1 = var2.get;
                    var2 = var1.bind(var2)();
                    var1 = _closure2_slot0;
                    var8 = var2 === var1;
                    if(var8) { _fun0004_ip = 47; continue _fun0004 }
 27:
                    var2 = _closure2_slot5;
                    var1 = var2.get;
                    var2 = var1.bind(var2)();
                    var1 = 1;
                    var8 = var1 === var2;
 47:
                    var1 = {};
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 8;
                    var4 = var6[var4];
                    var7 = undefined;
                    var6 = var5.bind(var7)(var4);
                    var5 = var6.withSpring;
                    var4 = 'transparent';
                    if(!var8) { _fun0004_ip = 90; continue _fun0004 }
 86:
                    var4 = _closure2_slot6;
 90:
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
            var16 = {};
            var16['activeIndex'] = var19;
            var16['index'] = var2;
            var16['pressed'] = var25;
            var25 = 8;
            var25 = var24[var25];
            var25 = var23.bind(var4)(var25);
            var25 = var25.withSpring;
            var16['withSpring'] = var25;
            var16['backgroundColor'] = var21;
            var21 = 9;
            var21 = var24[var21];
            var21 = var23.bind(var4)(var21);
            var21 = var21.SUBTLE_SPRING;
            var16['SUBTLE_SPRING'] = var21;
            var8['__closure'] = var16;
            var16 = 624481847983.0;
            var8['__workletHash'] = var16;
            var16 = _closure1_slot10;
            var8['__initData'] = var16;
            var16 = var9.bind(var14)(var8);
            var9 = null;
            var14 = var7;
            if(!(var9 == var13)) { _fun0002_ip = 638; continue _fun0002 }
 582:
            var7 = var9 != var22;
            var9 = null;
            if(!var7) { _fun0002_ip = 636; continue _fun0002 }
 591:
            var21 = _closure1_slot4;
            var8 = _closure1_slot1;
            var23 = _closure1_slot2;
            var7 = 10;
            var7 = var23[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var7['source'] = var22;
            var22 = var12.icon;
            var7['style'] = var22;
            var9 = var21.bind(var4)(var8, var7);
 636:
            _fun0002_ip = 673; continue _fun0002;
 638:
            var8 = _closure1_slot4;
            var7 = {};
            var21 = 'sm';
            var7['size'] = var21;
            var21 = var12.icon;
            var21 = var21.tintColor;
            var7['color'] = var21;
            var9 = var8.bind(var4)(var13, var7);
 673:
            var7 = _closure1_slot3;
            var13 = var7.useCallback;
            var8 = new Array(2);
            var8[0] = var2;
            var8[1] = var3;
            var3 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var1 = var1.layout;
                    var10 = var1.height;
                    var3 = var1.width;
                    var1 = 0;
                    if(!(var1 !== var10)) { _fun0005_ip = 148; continue _fun0005 }
 30:
                    if(!(var1 !== var3)) { _fun0005_ip = 148; continue _fun0005 }
 34:
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
 148:
                    var1 = undefined;
                    return var1;
                }
            };
            var13 = var13.bind(var7)(var3, var8);
            var8 = var7.useCallback;
            var3 = new Array(2);
            var3[0] = var19;
            var3[1] = var2;
            var2 = function() {
                var3 = _closure2_slot4;
                var2 = var3.set;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var8 = var8.bind(var7)(var2, var3);
            var3 = var7.useCallback;
            var2 = new Array(1);
            var2[0] = var19;
            var1 = function() {
                var3 = _closure2_slot4;
                var2 = var3.set;
                var1 = -1;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var7 = var3.bind(var7)(var1, var2);
            var3 = _closure1_slot5;
            var2 = _closure1_slot6;
            var1 = {};
            var1['ref'] = var15;
            var19 = var12.container;
            var15 = new Array(5);
            var15[0] = var19;
            var19 = !var17;
            if(!var19) { _fun0002_ip = 793; continue _fun0002 }
 790:
            var19 = !var20;
 793:
            if(!var19) { _fun0002_ip = 802; continue _fun0002 }
 796:
            var19 = var12.border;
 802:
            var15[1] = var19;
            if(!var18) { _fun0002_ip = 815; continue _fun0002 }
 809:
            var18 = var12.roundedTop;
 815:
            var15[2] = var18;
            if(!var17) { _fun0002_ip = 828; continue _fun0002 }
 822:
            var17 = var12.roundedBottom;
 828:
            var15[3] = var17;
            var15[4] = var16;
            var1['style'] = var15;
            var1['onLayout'] = var13;
            var1['onPressIn'] = var8;
            var1['onPressOut'] = var7;
            var1['onPress'] = var5;
            var5 = 'button';
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
            var12 = 'text-primary';
            var13 = 'destructive';
            if(!(var13 === var14)) { _fun0002_ip = 941; continue _fun0002 }
 935:
            var12 = 'text-danger';
 941:
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