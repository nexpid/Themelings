// app/modules/application_commands/native/ApplicationCommandsCategories.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var16 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var16;
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
    var7 = var6[var1];
    var4 = native4;
    var1 = undefined;
    var8 = var4.bind(var1)(var7);
    var _closure1_slot3 = var8;
    var17 = 1;
    var4 = var6[var17];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot4 = var7;
    var7 = var4.StyleSheet;
    var _closure1_slot5 = var7;
    var4 = var4.FlatList;
    var _closure1_slot6 = var4;
    var13 = 2;
    var4 = var6[var13];
    var4 = var16.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var18 = var4.ICON_SIZE;
    var12 = var4.NODE_SIZE;
    var14 = var4.NODE_MARGIN;
    var4 = var4.ITEM_WIDTH;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot9 = var7;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var7 = var9.createStyles;
    var4 = {};
    var10 = {'backgroundColor': null, 'paddingHorizontal': 8, 'paddingVertical': 4, 'flexDirection': 'row', 'alignItems': 'center'};
    var15 = 6;
    var11 = var6[var15];
    var11 = var16.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_TERTIARY;
    var10['backgroundColor'] = var11;
    var11 = 'center';
    var4['container'] = var10;
    var10 = {};
    var10['height'] = var18;
    var10['width'] = var18;
    var18 = var18 / var13;
    var10['borderRadius'] = var18;
    var4['categoryImage'] = var10;
    var10 = {};
    var18 = 0.5;
    var10['opacity'] = var18;
    var4['fadedItem'] = var10;
    var10 = {};
    var10['opacity'] = var17;
    var15 = var6[var15];
    var15 = var16.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_MOBILE_PRIMARY;
    var10['backgroundColor'] = var15;
    var4['activeItem'] = var10;
    var10 = {};
    var10['marginVertical'] = var14;
    var10['marginHorizontal'] = var14;
    var10['height'] = var12;
    var10['width'] = var12;
    var12 = var12 / var13;
    var10['borderRadius'] = var12;
    var10['alignItems'] = var11;
    var10['justifyContent'] = var11;
    var4['item'] = var10;
    var4 = var7.bind(var9)(var4);
    var _closure1_slot11 = var4;
    var7 = var8.memo;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var1 = var2.section;
            var3 = var2.handlePressCategory;
            var _closure2_slot0 = var3;
            var11 = var2.active;
            var2 = var2.index;
            var _closure2_slot1 = var2;
            var2 = _closure1_slot11;
            var5 = undefined;
            var12 = var2.bind(var5)();
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 7;
            var2 = var4[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.getApplicationCommandsIconSource;
            var8 = var2.bind(var3)(var1);
            var2 = null;
            var9 = var2 != var8;
            if(!var9) { _fun0001_ip = 134; continue _fun0001 }
 88:
            var4 = _closure1_slot9;
            var3 = _closure1_slot1;
            var10 = _closure1_slot2;
            var2 = 8;
            var2 = var10[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var10 = var12.categoryImage;
            var2['style'] = var10;
            var2['source'] = var8;
            var9 = var4.bind(var5)(var3, var2);
 134:
            var4 = _closure1_slot9;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 9;
            var2 = var8[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.PressableOpacity;
            var2 = {};
            var7 = function onPress() {
                var3 = _closure2_slot0;
                var2 = _closure2_slot1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var2['onPress'] = var7;
            var7 = 'button';
            var2['accessibilityRole'] = var7;
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 10;
            var13 = var10[var7];
            var13 = var8.bind(var5)(var13);
            var14 = var13.intl;
            var13 = var14.formatToPlainString;
            var7 = var10[var7];
            var7 = var8.bind(var5)(var7);
            var8 = var7.t;
            if(var11) { _fun0001_ip = 260; continue _fun0001 }
 232:
            var10 = var8.9uqD4O;
            var7 = {};
            var15 = var1.name;
            var7['applicationName'] = var15;
            var7 = var13.bind(var14)(var10, var7);
            _fun0001_ip = 286; continue _fun0001;
 260:
            var10 = var8.yl24GR;
            var8 = {};
            var15 = var1.name;
            var8['applicationName'] = var15;
            var7 = var13.bind(var14)(var10, var8);
 286:
            var2['accessibilityLabel'] = var7;
            var8 = _closure1_slot9;
            var7 = _closure1_slot4;
            var6 = {};
            var13 = var12.item;
            var10 = new Array(2);
            var10[0] = var13;
            if(var11) { _fun0001_ip = 324; continue _fun0001 }
 316:
            var11 = var12.fadedItem;
            _fun0001_ip = 330; continue _fun0001;
 324:
            var11 = var12.activeItem;
 330:
            var10[1] = var11;
            var6['style'] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var1.name;
            var1 = var4.bind(var5)(var3, var2, var1);
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot12 = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/application_commands/native/ApplicationCommandsCategories.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var7 = var2.style;
            var13 = var2.sections;
            var1 = var2.onPressSection;
            var _closure2_slot0 = var1;
            var11 = var2.selectedIndex;
            var _closure2_slot1 = var11;
            var2 = _closure1_slot11;
            var4 = undefined;
            var5 = var2.bind(var4)();
            var8 = _closure1_slot3;
            var2 = var8.useRef;
            var3 = null;
            var2 = var2.bind(var8)(var3);
            var _closure2_slot2 = var2;
            var2 = var8.useRef;
            var2 = var2.bind(var8)(var3);
            var _closure2_slot3 = var2;
            var2 = var8.useRef;
            var2 = var2.bind(var8)(var3);
            var _closure2_slot4 = var2;
            var2 = var8.useRef;
            var15 = var2.bind(var8)(var3);
            var _closure2_slot5 = var15;
            var9 = var8.useEffect;
            var3 = new Array(1);
            var3[0] = var11;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot2;
                    var2 = var2.current;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0003_ip = 131; continue _fun0003 }
 18:
                    var2 = _closure2_slot3;
                    var2 = var2.current;
                    if(!(var3 != var2)) { _fun0003_ip = 131; continue _fun0003 }
 31:
                    var2 = _closure2_slot5;
                    var2 = var2.current;
                    if(!(var3 != var2)) { _fun0003_ip = 131; continue _fun0003 }
 44:
                    var2 = _closure2_slot4;
                    var2 = var2.current;
                    if(!(var3 != var2)) { _fun0003_ip = 131; continue _fun0003 }
 57:
                    var3 = _closure2_slot1;
                    var2 = _closure1_slot8;
                    var4 = var3 * var2;
                    var2 = _closure2_slot3;
                    var2 = var2.current;
                    var2 = var4 > var2;
                    if(var2) { _fun0003_ip = 101; continue _fun0003 }
 88:
                    var3 = _closure2_slot2;
                    var3 = var3.current;
                    var2 = var4 < var3;
 101:
                    if(!var2) { _fun0003_ip = 131; continue _fun0003 }
 104:
                    var1 = _closure2_slot5;
                    var3 = var1.current;
                    var2 = var3.scrollToOffset;
                    var1 = {};
                    var1['offset'] = var4;
                    var1 = var2.bind(var3)(var1);
 131:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var9.bind(var8)(var2, var3);
            var3 = var8.useCallback;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function(arg1) {
                var3 = _closure2_slot0;
                var1 = undefined;
                var2 = arg1;
                var2 = var3.bind(var1)(var2);
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 11;
                var3 = var6[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.triggerHapticFeedback;
                var5 = _closure1_slot1;
                var2 = 12;
                var2 = var6[var2];
                var2 = var5.bind(var1)(var2);
                var2 = var2.IMPACT_LIGHT;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = var3.bind(var8)(var1, var2);
            var _closure2_slot6 = var1;
            var9 = var8.useCallback;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var3 = var1.contentOffset;
                var1 = var1.layoutMeasurement;
                var5 = _closure2_slot2;
                var4 = var3.x;
                var5['current'] = var4;
                var2 = _closure2_slot3;
                var3 = var3.x;
                var1 = var1.width;
                var1 = var3 + var1;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var2 = new Array(0);
            var10 = var9.bind(var8)(var3, var2);
            var9 = var8.useCallback;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var4 = _closure2_slot2;
                var3 = 0;
                var4['current'] = var3;
                var4 = _closure2_slot3;
                var3 = var1.width;
                var4['current'] = var3;
                var2 = _closure2_slot4;
                var1 = var1.width;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var2 = new Array(0);
            var9 = var9.bind(var8)(var3, var2);
            var14 = var8.useCallback;
            var3 = function(arg1, arg2) {
                var2 = arg2;
                var1 = {};
                var3 = _closure1_slot8;
                var1['length'] = var3;
                var3 = var3 * var2;
                var1['offset'] = var3;
                var1['index'] = var2;
                return var1;
            };
            var2 = new Array(0);
            var14 = var14.bind(var8)(var3, var2);
            var3 = var8.useCallback;
            var2 = new Array(2);
            var2[0] = var11;
            var2[1] = var1;
            var1 = function(arg1) {
                var1 = arg1;
                var6 = var1.item;
                var5 = var1.index;
                var4 = _closure1_slot9;
                var3 = _closure1_slot12;
                var2 = {};
                var7 = _closure2_slot1;
                var7 = var5 === var7;
                var2['active'] = var7;
                var2['section'] = var6;
                var2['index'] = var5;
                var1 = _closure2_slot6;
                var2['handlePressCategory'] = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var11 = var3.bind(var8)(var1, var2);
            var3 = _closure1_slot10;
            var2 = _closure1_slot4;
            var1 = {};
            var8 = var5.container;
            var5 = new Array(2);
            var5[0] = var8;
            var5[1] = var7;
            var1['style'] = var5;
            var8 = _closure1_slot9;
            var7 = _closure1_slot1;
            var18 = _closure1_slot2;
            var5 = 13;
            var5 = var18[var5];
            var7 = var7.bind(var4)(var5);
            var5 = {};
            var17 = _closure1_slot0;
            var16 = 14;
            var16 = var18[var16];
            var18 = var17.bind(var4)(var16);
            var17 = var18.isThemeDark;
            var16 = _closure1_slot7;
            var16 = var16.theme;
            var17 = var17.bind(var18)(var16);
            var16 = 'light';
            if(!var17) { _fun0002_ip = 367; continue _fun0002 }
 363:
            var16 = 'dark';
 367:
            var5['blurTheme'] = var16;
            var16 = _closure1_slot5;
            var16 = var16.absoluteFill;
            var5['style'] = var16;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot9;
            var7 = _closure1_slot6;
            var6 = {};
            var6['ref'] = var15;
            var6['getItemLayout'] = var14;
            var6['data'] = var13;
            var13 = 'always';
            var6['keyboardShouldPersistTaps'] = var13;
            var13 = true;
            var6['horizontal'] = var13;
            var12 = function keyExtractor(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var6['keyExtractor'] = var12;
            var6['renderItem'] = var11;
            var11 = false;
            var6['showsHorizontalScrollIndicator'] = var11;
            var6['onScroll'] = var10;
            var6['onLayout'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();