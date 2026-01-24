// app/components_native/common/SortableListView.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot18 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot7 = var4;
    var7 = 6;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var8 = var7.View;
    var _closure1_slot8 = var8;
    var8 = var7.Animated;
    var _closure1_slot9 = var8;
    var9 = var7.Dimensions;
    var8 = var7.PanResponder;
    var _closure1_slot10 = var8;
    var7 = var7.FlatList;
    var _closure1_slot11 = var7;
    var7 = 7;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var8 = var7.jsx;
    var _closure1_slot12 = var8;
    var7 = var7.jsxs;
    var _closure1_slot13 = var7;
    var8 = var9.get;
    var7 = 'window';
    var7 = var8.bind(var9)(var7);
    var7 = var7.height;
    var _closure1_slot14 = var7;
    var7 = {'x': 0, 'y': 0};
    var _closure1_slot15 = var7;
    var8 = var4.memo;
    var7 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var8 = arg1;
            var _closure2_slot0 = var8;
            var7 = var8.hovering;
            var5 = var8.renderActiveDivider;
            var11 = var8.hideContent;
            var16 = var8.renderRow;
            var1 = var8.rowData;
            var14 = var8.onPressOut;
            var4 = var8.active;
            var9 = _closure1_slot7;
            var3 = var9.useRef;
            var3 = var3.bind(var9)(var8);
            var _closure2_slot1 = var3;
            var3 = var9.useRef;
            var10 = null;
            var8 = var3.bind(var9)(var10);
            var _closure2_slot2 = var8;
            var3 = var9.useRef;
            var3 = var3.bind(var9)(var10);
            var _closure2_slot3 = var3;
            var12 = var9.useEffect;
            var3 = function() {
                var2 = _closure2_slot1;
                var1 = _closure2_slot0;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var3 = var12.bind(var9)(var3);
            var13 = var9.useCallback;
            var12 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot2;
                    var3 = var1.current;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var2 = var3.measure;
                    var1 = function(arg1, arg2, arg3, arg4, arg5, arg6) {
                        var4 = _closure2_slot1;
                        var3 = var4.current;
                        var2 = var3.onRowActive;
                        var1 = {};
                        var5 = {};
                        var6 = arg1;
                        var5['frameX'] = var6;
                        var6 = arg2;
                        var5['frameY'] = var6;
                        var6 = arg3;
                        var5['frameWidth'] = var6;
                        var6 = arg4;
                        var5['frameHeight'] = var6;
                        var6 = arg5;
                        var5['pageX'] = var6;
                        var6 = arg6;
                        var5['pageY'] = var6;
                        var1['layout'] = var5;
                        var4 = var4.current;
                        var4 = var4.rowData;
                        var1['rowData'] = var4;
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
case 6:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = new Array(0);
            var15 = var13.bind(var9)(var12, var3);
            var12 = var9.useCallback;
            var3 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var6 = arg1;
                    var4 = {};
                    var2 = var6.nativeEvent;
                    var2 = var2.layout;
                    var2 = var2.x;
                    var4['x'] = var2;
                    var2 = var6.nativeEvent;
                    var2 = var2.layout;
                    var2 = var2.y;
                    var4['y'] = var2;
                    var2 = var6.nativeEvent;
                    var2 = var2.layout;
                    var2 = var2.width;
                    var4['width'] = var2;
                    var2 = _closure2_slot3;
                    var5 = var2.current;
                    var2 = null;
                    if(!(var2 == var5)) { _fun0004_ip = 8; continue _fun0004 }
case 9:
                    var6 = var6.nativeEvent;
                    var6 = var6.layout;
                    var5 = var6.height;
case 8:
                    var4['height'] = var5;
                    var _closure3_slot0 = var4;
                    var3 = _closure2_slot2;
                    var3 = var3.current;
                    if(!(var2 != var3)) { _fun0004_ip = 10; continue _fun0004 }
case 11:
                    var2 = var3.measure;
                    var1 = function(arg1, arg2, arg3, arg4) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var4 = arg4;
                            var2 = _closure2_slot3;
                            var2 = var2.current;
                            var3 = null;
                            var2 = var3 == var2;
                            if(!var2) { _fun0005_ip = 12; continue _fun0005 }
case 13:
                            var5 = 0;
                            var2 = var4 > var5;
case 12:
                            if(!var2) { _fun0005_ip = 14; continue _fun0005 }
case 15:
                            var2 = _closure2_slot3;
                            var2['current'] = var4;
case 14:
                            var2 = _closure2_slot1;
                            var2 = var2.current;
                            var2 = var2.onRowLayout;
                            if(!(var3 != var2)) { _fun0005_ip = 16; continue _fun0005 }
case 17:
                            var1 = _closure2_slot1;
                            var4 = var1.current;
                            var3 = var4.onRowLayout;
                            var1 = var1.current;
                            var2 = var1.index;
                            var1 = _closure3_slot0;
                            var1 = var3.bind(var4)(var2, var1);
case 16:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
case 10:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = new Array(0);
            var12 = var12.bind(var9)(var3, var2);
            var3 = var9.cloneElement;
            var13 = var1.item;
            var2 = var1.index;
            var1 = var10 != var4;
            if(!var1) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var1 = var4;
case 18:
            var4 = undefined;
            var2 = var16.bind(var4)(var13, var2, var1);
            var1 = {};
            var13 = {};
            var13['onLongPress'] = var15;
            var13['onPressOut'] = var14;
            var1['sortHandlers'] = var13;
            var9 = var3.bind(var9)(var2, var1);
            var3 = _closure1_slot13;
            var2 = _closure1_slot8;
            var1 = {};
            var1['onLayout'] = var12;
            var1['ref'] = var8;
            if(!var7) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var7 = var5.bind(var4)();
case 20:
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot12;
            var7 = _closure1_slot8;
            var6 = {};
            var10 = null;
            if(!var11) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var10 = {'height': 0.01, 'opacity': 0};
case 22:
            var6['style'] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var7 = var8.bind(var4)(var7);
    var _closure1_slot16 = var7;
    var8 = var4.memo;
    var7 = function(arg1) {
        var2 = arg1;
        var6 = var2.sortRowStyle;
        var1 = var2.rowData;
        var8 = var2.renderRow;
        var7 = var2.pan;
        var12 = var2.frameHeight;
        var _closure2_slot0 = var12;
        var11 = var2.listPageY;
        var _closure2_slot1 = var11;
        var10 = var2.wrapperPageY;
        var _closure2_slot2 = var10;
        var9 = _closure1_slot7;
        var5 = var9.useMemo;
        var4 = new Array(3);
        var4[0] = var12;
        var4[1] = var11;
        var4[2] = var10;
        var3 = function() {
            var1 = {'position': 'absolute', 'left': 0, 'right': 0, 'opacity': 0.25, 'overflow': 'hidden', 'backgroundColor': 'transparent'};
            var3 = _closure2_slot0;
            var1['height'] = var3;
            var3 = _closure2_slot1;
            var2 = _closure2_slot2;
            var2 = var3 - var2;
            var1['marginTop'] = var2;
            return var1;
        };
        var9 = var5.bind(var9)(var3, var4);
        var4 = _closure1_slot12;
        var2 = _closure1_slot9;
        var3 = var2.View;
        var2 = {};
        var5 = new Array(3);
        var5[0] = var9;
        var5[1] = var6;
        var6 = var7.getLayout;
        var6 = var6.bind(var7)();
        var5[2] = var6;
        var2['style'] = var5;
        var7 = var1.item;
        var6 = var1.index;
        var1 = undefined;
        var5 = true;
        var5 = var8.bind(var1)(var7, var6, var5);
        var2['children'] = var5;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var7 = var8.bind(var4)(var7);
    var _closure1_slot17 = var7;
    var4 = var4.Component;
    var2 = function(arg1) {
        var4 = function SortableListView(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var6 = this;
                var1 = _closure1_slot2;
                var4 = _closure2_slot0;
                var3 = undefined;
                var1 = var1.bind(var3)(var6, var4);
                var11 = new Array(1);
                var1 = arg1;
                var11[0] = var1;
                var1 = _closure1_slot5;
                var10 = var1.bind(var3)(var4);
                var4 = _closure1_slot4;
                var1 = _closure1_slot18;
                var1 = var1.bind(var3)();
                if(var1) { _fun0006_ip = 24; continue _fun0006 }
case 17:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var6, var11);
                _fun0006_ip = 25; continue _fun0006;
case 24:
                var7 = global;
                var9 = var7.Reflect;
                var8 = var9.construct;
                var7 = _closure1_slot5;
                var7 = var7.bind(var3)(var6);
                var7 = var7.constructor;
                var1 = var8.bind(var9)(var10, var11, var7);
case 25:
                var1 = var4.bind(var3)(var6, var1);
                var _closure3_slot0 = var1;
                var4 = {};
                var1['memoedRowData'] = var4;
                var1['firstRowY'] = var3;
                var3 = {};
                var1['layoutMap'] = var3;
                var3 = 0;
                var1['scrollValue'] = var3;
                var3 = null;
                var1['_delayedInitTimeout'] = var3;
                var8 = false;
                var1['_isMounted'] = var8;
                var1['moved'] = var8;
                var4 = _closure1_slot7;
                var3 = var4.createRef;
                var3 = var3.bind(var4)();
                var1['_wrapperRef'] = var3;
                var3 = var4.createRef;
                var3 = var3.bind(var4)();
                var1['_listRef'] = var3;
                var3 = _closure1_slot14;
                var1['scrollContainerHeight'] = var3;
                var3 = {'active': null, 'hovering': false, 'hoverIndex': 4294967291};
                var7 = _closure1_slot9;
                var9 = var7.ValueXY;
                var14 = _closure1_slot15;
                var6 = var9.prototype;
                var6 = Object.create(var6, {constructor: {value: var9}});
                var15 = var6;
                var4 = new var15[var9](var14, var13);
                var4 = var4 instanceof Object ? var4 : var6;
                var3['pan'] = var4;
                var1['state'] = var3;
                var3 = function() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var1 = _closure3_slot0;
                        var2 = var1.props;
                        var6 = var2.renderRow;
                        var1 = var1.state;
                        var9 = var1.active;
                        var10 = var1.hoverIndex;
                        var2 = var1.pan;
                        var1 = null;
                        if(!(var1 != var9)) { _fun0007_ip = 26; continue _fun0007 }
case 27:
                        var3 = var9.rowData;
                        var12 = var3.item;
                        var7 = var3.index;
                        var5 = _closure1_slot12;
                        var4 = _closure1_slot17;
                        var3 = {};
                        var3['pan'] = var2;
                        var2 = _closure3_slot0;
                        var11 = var2.getMemoedRowData;
                        var11 = var11.bind(var2)(var7, var12);
                        var3['rowData'] = var11;
                        var7 = var10 === var7;
                        var3['shouldDisplayHovering'] = var7;
                        var2 = var2.wrapperLayout;
                        var3['wrapperLayout'] = var2;
                        var7 = var1 == var9;
                        var2 = undefined;
                        var11 = undefined;
                        if(var7) { _fun0007_ip = 28; continue _fun0007 }
case 29:
                        var7 = var9.layout;
                        var11 = var7.frameHeight;
case 28:
                        var12 = var1 != var11;
                        var10 = 0;
                        if(!var12) { _fun0007_ip = 30; continue _fun0007 }
case 31:
                        var10 = var11;
case 30:
                        var3['frameHeight'] = var10;
                        var11 = var1 == var9;
                        var10 = undefined;
                        if(var11) { _fun0007_ip = 32; continue _fun0007 }
case 33:
                        var9 = var9.layout;
                        var10 = var9.pageY;
case 32:
                        var11 = var1 != var10;
                        var9 = 0;
                        if(!var11) { _fun0007_ip = 34; continue _fun0007 }
case 35:
                        var9 = var10;
case 34:
                        var3['listPageY'] = var9;
                        var8 = _closure3_slot0;
                        var9 = var8.wrapperLayout;
                        var10 = var1 == var9;
                        var8 = undefined;
                        if(var10) { _fun0007_ip = 36; continue _fun0007 }
case 37:
                        var8 = var9.pageY;
case 36:
                        var9 = var1 != var8;
                        var7 = 0;
                        if(!var9) { _fun0007_ip = 38; continue _fun0007 }
case 39:
                        var7 = var8;
case 38:
                        var3['wrapperPageY'] = var7;
                        var3['renderRow'] = var6;
                        var2 = var5.bind(var2)(var4, var3);
                        return var2;
case 26:
                        return var1;
                    }
                };
                var1['renderActive'] = var3;
                var3 = function() {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var1 = _closure3_slot0;
                        var2 = var1.props;
                        var4 = var2.renderActiveDivider;
                        var1 = var1.state;
                        var5 = var1.active;
                        var1 = null;
                        var6 = var1 != var5;
                        var3 = undefined;
                        var2 = undefined;
                        if(!var6) { _fun0008_ip = 40; continue _fun0008 }
case 41:
                        var5 = var5.layout;
                        var2 = var5.frameHeight;
case 40:
                        if(!(var1 == var4)) { _fun0008_ip = 42; continue _fun0008 }
case 43:
                        var6 = _closure1_slot12;
                        var5 = _closure1_slot8;
                        var1 = {};
                        var7 = {};
                        var7['height'] = var2;
                        var1['style'] = var7;
                        var1 = var6.bind(var3)(var5, var1);
                        _fun0008_ip = 44; continue _fun0008;
case 42:
                        var1 = var4.bind(var3)(var2);
case 44:
                        return var1;
                    }
                };
                var1['renderActiveDivider'] = var3;
                var3 = function(arg1, arg2) {
                    var4 = _closure3_slot0;
                    var3 = var4._updateLayoutMap;
                    var2 = arg1;
                    var1 = arg2;
                    var1 = var3.bind(var4)(var2, var1);
                    var1 = undefined;
                    return var1;
                };
                var1['handleRowLayout'] = var3;
                var3 = function(arg1) {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var1 = arg1;
                        var8 = var1.item;
                        var7 = var1.index;
                        var11 = var1.active;
                        var1 = _closure3_slot0;
                        var2 = var1.props;
                        var12 = var2.disableSorting;
                        var5 = var2.renderRow;
                        var1 = var1.state;
                        var10 = var1.hoverIndex;
                        var9 = var1.pan;
                        var1 = null;
                        var3 = var1 == var11;
                        if(!var3) { _fun0009_ip = 45; continue _fun0009 }
case 46:
                        var2 = _closure3_slot0;
                        var2 = var2.state;
                        var4 = var2.active;
                        var13 = var1 == var4;
                        var2 = undefined;
                        if(var13) { _fun0009_ip = 47; continue _fun0009 }
case 48:
                        var4 = var4.rowData;
                        var13 = var1 == var4;
                        var2 = undefined;
                        if(var13) { _fun0009_ip = 47; continue _fun0009 }
case 49:
                        var2 = var4.index;
case 47:
                        var3 = var2 === var7;
case 45:
                        var2 = var1 == var11;
                        if(!var2) { _fun0009_ip = 50; continue _fun0009 }
case 51:
                        var2 = var3;
case 50:
                        if(!var2) { _fun0009_ip = 52; continue _fun0009 }
case 53:
                        var2 = {};
                        var3 = true;
                        var2['active'] = var3;
                        var11 = var2;
case 52:
                        var4 = _closure1_slot12;
                        var3 = _closure1_slot16;
                        var2 = {};
                        var2['index'] = var7;
                        var2['disabled'] = var12;
                        var2['active'] = var11;
                        var11 = _closure3_slot0;
                        var11 = var11.state;
                        var12 = var11.active;
                        var13 = var1 == var12;
                        var1 = undefined;
                        var11 = undefined;
                        if(var13) { _fun0009_ip = 54; continue _fun0009 }
case 55:
                        var12 = var12.rowData;
                        var11 = var12.index;
case 54:
                        var11 = var11 === var7;
                        var2['hideContent'] = var11;
                        var10 = var10 === var7;
                        var2['hovering'] = var10;
                        var6 = _closure3_slot0;
                        var10 = var6.cancel;
                        var2['onPressOut'] = var10;
                        var10 = var6.handleRowActive;
                        var2['onRowActive'] = var10;
                        var10 = var6.handleRowLayout;
                        var2['onRowLayout'] = var10;
                        var2['pan'] = var9;
                        var9 = var6.renderActiveDivider;
                        var2['renderActiveDivider'] = var9;
                        var2['renderRow'] = var5;
                        var5 = var6.getMemoedRowData;
                        var5 = var5.bind(var6)(var7, var8);
                        var2['rowData'] = var5;
                        var1 = var4.bind(var1)(var3, var2);
                        return var1;
                    }
                };
                var1['renderItem'] = var3;
                var3 = function(arg1) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        var3 = arg1;
                        var2 = _closure3_slot0;
                        var4 = var3.nativeEvent;
                        var4 = var4.contentOffset;
                        var4 = var4.y;
                        var2['scrollValue'] = var4;
                        var2 = var2.props;
                        var4 = var2.onScroll;
                        var2 = null;
                        if(!(var2 != var4)) { _fun0010_ip = 56; continue _fun0010 }
case 27:
                        var1 = _closure3_slot0;
                        var2 = var1.props;
                        var1 = var2.onScroll;
                        var1 = var1.bind(var2)(var3);
case 56:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleScroll'] = var3;
                var3 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = {};
                    var3 = arg1;
                    var3 = var3.nativeEvent;
                    var4 = var3.layout;
                    var5 = var1;
                    var3 = copyDataProperties(var5, var4);
                    var2['listLayout'] = var1;
                    var1 = undefined;
                    return var1;
                };
                var1['handleLayout'] = var3;
                var3 = function(arg1, arg2) {
                    var2 = _closure3_slot0;
                    var1 = arg2;
                    var2['scrollContainerHeight'] = var1;
                    var1 = undefined;
                    return var1;
                };
                var1['handleContentSizeChange'] = var3;
                var3 = function() {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                        var1 = _closure3_slot0;
                        var4 = var1.scrollValue;
                        var5 = var1.moveY;
                        var3 = var1.wrapperLayout;
                        var3 = var3.pageY;
                        var3 = var5 - var3;
                        var3 = var4 + var3;
                        var1 = var1.firstRowY;
                        var10 = var3 - var1;
                        var4 = 0;
                        var7 = null;
                        var6 = true;
                        var8 = 0;
                        var5 = 0;
                        var1 = 0;
                        var3 = false;
                        if(!(var4 <= var10)) { _fun0011_ip = 57; continue _fun0011 }
case 58:
                        var11 = _closure3_slot0;
                        var11 = var11.layoutMap;
                        var11 = var11[var5];
                        var12 = var7 == var11;
                        var1 = var5;
                        var3 = true;
                        if(var12) { _fun0011_ip = 57; continue _fun0011 }
case 48:
                        var11 = var11.height;
                        var8 = var8 + var11;
                        var5 = var5 + 1;
                        var1 = var5;
                        var3 = false;
                        if(var8 <= var10) { _fun0011_ip = 58; continue _fun0011 }
case 57:
                        var5 = var1;
                        if(var3) { _fun0011_ip = 59; continue _fun0011 }
case 60:
                        var5 = var1 - 1;
case 59:
                        var1 = global;
                        var3 = var1.Math;
                        var1 = var3.max;
                        var3 = var1.bind(var3)(var4, var5);
                        var1 = _closure3_slot0;
                        var1 = var1.state;
                        var8 = var1.active;
                        var9 = var7 == var8;
                        var1 = undefined;
                        var5 = undefined;
                        if(var9) { _fun0011_ip = 61; continue _fun0011 }
case 62:
                        var8 = var8.rowData;
                        var5 = var8.index;
case 61:
                        var7 = var7 != var5;
                        var4 = 0;
                        if(!var7) { _fun0011_ip = 63; continue _fun0011 }
case 32:
                        var4 = var5;
case 63:
                        var5 = var3;
                        if(!(var4 < var5)) { _fun0011_ip = 64; continue _fun0011 }
case 65:
                        var5 = var3 + 1;
case 64:
                        var3 = _closure3_slot0;
                        var3 = var3.state;
                        var3 = var3.hoverIndex;
                        if(!(var5 !== var3)) { _fun0011_ip = 66; continue _fun0011 }
case 67:
                        var4 = _closure1_slot0;
                        var7 = _closure1_slot1;
                        var3 = 8;
                        var3 = var7[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.DeprecatedLayoutAnimation;
                        var3 = var3.bind(var4)();
                        var4 = _closure3_slot0;
                        var3 = var4.setState;
                        var2 = {};
                        var2['hovering'] = var6;
                        var2['hoverIndex'] = var5;
                        var2 = var3.bind(var4)(var2);
case 66:
                        return var1;
                    }
                };
                var1['checkTargetElement'] = var3;
                var3 = function() {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                        var2 = _closure3_slot0;
                        var2 = var2.moved;
                        if(var2) { _fun0012_ip = 68; continue _fun0012 }
case 69:
                        var3 = _closure3_slot0;
                        var2 = var3.setState;
                        var1 = {'active': null, 'hovering': false, 'hoverIndex': 4294967291};
                        var1 = var2.bind(var3)(var1);
case 68:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['cancel'] = var3;
                var3 = function(arg1) {
                    var8 = 0;
                    var7 = copyRestArgs(var8);
                    var1 = _closure3_slot0;
                    var3 = var1.scrollResponder;
                    var2 = var3.scrollTo;
                    var1 = new Array(0);
                    var8 = var1;
                    var6 = 0;
                    var4 = arraySpread(var8, var7, var6);
                    var8 = var2;
                    var7 = var1;
                    var6 = var3;
                    var1 = apply(var8, var7, var6);
                    var1 = undefined;
                    return var1;
                };
                var1['scrollTo'] = var3;
                var3 = function() {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                        var2 = _closure3_slot0;
                        var2 = var2._isMounted;
                        if(!var2) { _fun0013_ip = 70; continue _fun0013 }
case 71:
                        var2 = _closure3_slot0;
                        var2 = var2.state;
                        var2 = var2.active;
                        var3 = null;
                        if(!(var3 != var2)) { _fun0013_ip = 70; continue _fun0013 }
case 14:
                        var2 = _closure3_slot0;
                        var2 = var2.moveY;
                        if(!(var3 != var2)) { _fun0013_ip = 72; continue _fun0013 }
case 73:
                        var2 = _closure3_slot0;
                        var4 = var2.wrapperLayout;
                        var5 = var4.pageY;
                        var4 = var2.moveY;
                        var8 = var4 - var5;
                        var4 = var2.listLayout;
                        var4 = var4.height;
                        var7 = 80;
                        var9 = var4 - var7;
                        var5 = var2.scrollContainerHeight;
                        var4 = var2.listLayout;
                        var4 = var4.height;
                        var5 = var5 - var4;
                        var4 = var2.state;
                        var4 = var4.active;
                        var4 = var4.layout;
                        var6 = var4.frameHeight;
                        var4 = 2;
                        var4 = var4 * var6;
                        var4 = var5 + var4;
                        var6 = var2.scrollValue;
                        var2 = var8 < var7;
                        if(!var2) { _fun0013_ip = 74; continue _fun0013 }
case 75:
                        var5 = 0;
                        var2 = var6 > var5;
case 74:
                        var5 = null;
                        if(!var2) { _fun0013_ip = 76; continue _fun0013 }
case 77:
                        var12 = var8 / var7;
                        var11 = 20;
                        var10 = 1;
                        var10 = var10 - var12;
                        var10 = var11 * var10;
                        var10 = var6 - var10;
                        var11 = 0;
                        var2 = var10 < var11;
                        var5 = var10;
case 76:
                        if(!var2) { _fun0013_ip = 78; continue _fun0013 }
case 79:
                        var5 = 0;
case 78:
                        var2 = var5;
                        if(!(var8 > var9)) { _fun0013_ip = 80; continue _fun0013 }
case 81:
                        var2 = var5;
                        if(!(var6 < var4)) { _fun0013_ip = 80; continue _fun0013 }
case 82:
                        var5 = _closure3_slot0;
                        var5 = var5.listLayout;
                        var5 = var5.height;
                        var5 = var5 - var8;
                        var8 = var5 / var7;
                        var7 = 20;
                        var5 = 1;
                        var5 = var5 - var8;
                        var5 = var7 * var5;
                        var2 = var6 + var5;
                        if(!(var2 > var4)) { _fun0013_ip = 80; continue _fun0013 }
case 83:
                        var2 = var4;
case 80:
                        if(!(var3 !== var2)) { _fun0013_ip = 84; continue _fun0013 }
case 85:
                        var5 = _closure3_slot0;
                        var5['scrollValue'] = var2;
                        var4 = var5.scrollResponder;
                        var3 = var4.scrollTo;
                        var2 = {'y': null, 'x': 0, 'animated': false};
                        var5 = var5.scrollValue;
                        var2['y'] = var5;
                        var2 = var3.bind(var4)(var2);
case 84:
                        var2 = _closure3_slot0;
                        var3 = var2.checkTargetElement;
                        var3 = var3.bind(var2)();
                        var3 = global;
                        var4 = var3.requestAnimationFrame;
                        var3 = var2.scrollAnimation;
                        var2 = undefined;
                        var2 = var4.bind(var2)(var3);
case 70:
                        var2 = undefined;
                        return var2;
case 72:
                        var2 = global;
                        var3 = var2.requestAnimationFrame;
                        var1 = _closure3_slot0;
                        var2 = var1.scrollAnimation;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    }
                };
                var1['scrollAnimation'] = var3;
                var3 = function(arg1, arg2) {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                        var3 = arg2;
                        var2 = _closure3_slot0;
                        var4 = var2.firstRowY;
                        var2 = null;
                        var2 = var2 == var4;
                        if(var2) { _fun0014_ip = 86; continue _fun0014 }
case 87:
                        var4 = _closure3_slot0;
                        var5 = var4.firstRowY;
                        var4 = 0;
                        var2 = var4 === var5;
case 86:
                        if(var2) { _fun0014_ip = 88; continue _fun0014 }
case 89:
                        var5 = var3.y;
                        var4 = _closure3_slot0;
                        var4 = var4.firstRowY;
                        var2 = var5 < var4;
case 88:
                        if(!var2) { _fun0014_ip = 90; continue _fun0014 }
case 91:
                        var4 = _closure3_slot0;
                        var2 = var3.y;
                        var4['firstRowY'] = var2;
case 90:
                        var1 = _closure3_slot0;
                        var2 = var1.layoutMap;
                        var1 = arg1;
                        var2[var1] = var3;
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['_updateLayoutMap'] = var3;
                var3 = function() {
                    var1 = _closure3_slot0;
                    var1 = var1.scrollResponder;
                    return var1;
                };
                var1['getScrollResponder'] = var3;
                var3 = function(arg1) {
                    _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                        var1 = arg1;
                        var _closure4_slot0 = var1;
                        var1 = _closure3_slot0;
                        var1 = var1.props;
                        var3 = var1.disableSorting;
                        var1 = undefined;
                        var4 = undefined;
                        if(var3) { _fun0015_ip = 43; continue _fun0015 }
case 92:
                        var5 = _closure3_slot0;
                        var5 = var5._wrapperRef;
                        var5 = var5.current;
                        var6 = null;
                        var3 = var6 == var5;
                        var4 = var5;
case 43:
                        if(var3) { _fun0015_ip = 93; continue _fun0015 }
case 94:
                        var3 = var4.measure;
                        var2 = function(arg1, arg2, arg3, arg4, arg5, arg6) {
                            var5 = _closure3_slot0;
                            var1 = {};
                            var2 = arg1;
                            var1['frameX'] = var2;
                            var2 = arg2;
                            var1['frameY'] = var2;
                            var2 = arg3;
                            var1['frameWidth'] = var2;
                            var2 = arg4;
                            var1['frameHeight'] = var2;
                            var2 = arg5;
                            var1['pageX'] = var2;
                            var2 = arg6;
                            var1['pageY'] = var2;
                            var5['wrapperLayout'] = var1;
                            var1 = var5.state;
                            var3 = var1.pan;
                            var2 = var3.setValue;
                            var1 = {'x': 0, 'y': 0};
                            var1 = var2.bind(var3)(var1);
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var1 = 8;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.DeprecatedLayoutAnimation;
                            var2 = var2.bind(var3)();
                            var2 = _closure4_slot0;
                            var3 = var2.layout;
                            var3 = var3.pageY;
                            var5['moveY'] = var3;
                            var4 = var5.setState;
                            var3 = {};
                            var3['active'] = var2;
                            var6 = true;
                            var3['hovering'] = var6;
                            var2 = var2.rowData;
                            var2 = var2.index;
                            var3['hoverIndex'] = var2;
                            var2 = var5.scrollAnimation;
                            var2 = var4.bind(var5)(var3, var2);
                            return var1;
                        };
                        var2 = var3.bind(var4)(var2);
case 93:
                        return var1;
                    }
                };
                var1['handleRowActive'] = var3;
                var6 = var7.event;
                var3 = {};
                var4 = var1.state;
                var4 = var4.pan;
                var4 = var4.x;
                var3['dx'] = var4;
                var4 = var1.state;
                var4 = var4.pan;
                var4 = var4.y;
                var3['dy'] = var4;
                var4 = [null];
                var4[1] = var3;
                var3 = {};
                var3['useNativeDriver'] = var8;
                var3 = var6.bind(var7)(var4, var3);
                var _closure3_slot1 = var3;
                var4 = _closure1_slot10;
                var3 = var4.create;
                var2 = {};
                var6 = function onStartShouldSetPanResponder() {
                    var1 = true;
                    return var1;
                };
                var2['onStartShouldSetPanResponder'] = var6;
                var6 = function onMoveShouldSetPanResponderCapture(arg1, arg2) {
                    _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                        var1 = arg2;
                        var3 = global;
                        var5 = var3.Math;
                        var4 = var5.abs;
                        var2 = var1.vy;
                        var2 = var4.bind(var5)(var2);
                        var4 = var3.Math;
                        var3 = var4.abs;
                        var1 = var1.vx;
                        var1 = var3.bind(var4)(var1);
                        var1 = var2 > var1;
                        if(!var1) { _fun0016_ip = 95; continue _fun0016 }
case 43:
                        var2 = _closure3_slot0;
                        var2 = var2.state;
                        var3 = var2.active;
                        var2 = null;
                        var1 = var2 != var3;
case 95:
                        return var1;
                    }
                };
                var2['onMoveShouldSetPanResponderCapture'] = var6;
                var6 = function onPanResponderMove(arg1, arg2) {
                    var4 = arg2;
                    var1 = 0;
                    var4['dx'] = var1;
                    var3 = _closure3_slot0;
                    var2 = var4.moveY;
                    var3['moveY'] = var2;
                    var3 = _closure3_slot1;
                    var1 = undefined;
                    var2 = arg1;
                    var2 = var3.bind(var1)(var2, var4);
                    return var1;
                };
                var2['onPanResponderMove'] = var6;
                var6 = function onPanResponderGrant() {
                    _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                        var2 = _closure3_slot0;
                        var3 = true;
                        var2['moved'] = var3;
                        var3 = var2.state;
                        var4 = var3.pan;
                        var3 = var4.setOffset;
                        var5 = _closure1_slot15;
                        var3 = var3.bind(var4)(var5);
                        var3 = var2.state;
                        var4 = var3.pan;
                        var3 = var4.setValue;
                        var3 = var3.bind(var4)(var5);
                        var2 = var2.props;
                        var3 = var2.onMoveStart;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0017_ip = 96; continue _fun0017 }
case 97:
                        var1 = _closure3_slot0;
                        var2 = var1.props;
                        var1 = var2.onMoveStart;
                        var1 = var1.bind(var2)();
case 96:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2['onPanResponderGrant'] = var6;
                var6 = function onPanResponderTerminate() {
                    var3 = _closure3_slot0;
                    var2 = var3.setState;
                    var1 = {'active': null, 'hovering': false, 'hoverIndex': 4294967291};
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var2['onPanResponderTerminate'] = var6;
                var5 = function onPanResponderRelease() {
                    _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                        var2 = _closure3_slot0;
                        var4 = false;
                        var2['moved'] = var4;
                        var2 = var2.props;
                        var3 = var2.onMoveEnd;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0018_ip = 98; continue _fun0018 }
case 99:
                        var3 = _closure3_slot0;
                        var5 = var3.props;
                        var3 = var5.onMoveEnd;
                        var3 = var3.bind(var5)();
case 98:
                        var3 = _closure3_slot0;
                        var3 = var3.state;
                        var3 = var3.active;
                        if(!(var2 != var3)) { _fun0018_ip = 100; continue _fun0018 }
case 101:
                        var3 = _closure3_slot0;
                        var5 = var3.state;
                        var5 = var5.active;
                        var5 = var5.layout;
                        var9 = var5.frameHeight;
                        var5 = var3.state;
                        var5 = var5.active;
                        var5 = var5.rowData;
                        var10 = var5.index;
                        var3 = var3.state;
                        var3 = var3.hovering;
                        if(!(var4 !== var3)) { _fun0018_ip = 102; continue _fun0018 }
case 103:
                        var3 = _closure3_slot0;
                        var3 = var3.state;
                        var3 = var3.hoverIndex;
                        var7 = var3;
                        if(!(var7 > var10)) { _fun0018_ip = 104; continue _fun0018 }
case 30:
                        var7 = var3 - 1;
case 104:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var3 = 8;
                        var4 = var4[var3];
                        var3 = undefined;
                        var6 = var5.bind(var3)(var4);
                        var5 = var6.DeprecatedLayoutAnimation;
                        var4 = {};
                        var8 = 0;
                        var4['duration'] = var8;
                        var4 = var5.bind(var6)(var4);
                        var4 = _closure3_slot0;
                        var4 = var4.props;
                        var4 = var4.onRowMoved;
                        if(!(var2 != var4)) { _fun0018_ip = 66; continue _fun0018 }
case 105:
                        var11 = _closure3_slot0;
                        var6 = var11.props;
                        var5 = var6.onRowMoved;
                        var4 = {};
                        var11 = var11.state;
                        var11 = var11.active;
                        var11 = var11.rowData;
                        var4['row'] = var11;
                        var4['from'] = var10;
                        var4['to'] = var7;
                        var4 = var5.bind(var6)(var4);
case 66:
                        var4 = _closure3_slot0;
                        var6 = var4.setState;
                        var5 = {'active': null, 'hovering': false, 'hoverIndex': 4294967291};
                        var5 = var6.bind(var4)(var5);
                        var5 = global;
                        var7 = var5.Math;
                        var6 = var7.max;
                        var10 = var4.scrollContainerHeight;
                        var5 = var4.listLayout;
                        var5 = var5.height;
                        var5 = var10 - var5;
                        var5 = var5 + var9;
                        var7 = var6.bind(var7)(var8, var5);
                        var4 = var4.scrollValue;
                        if(!(var4 > var7)) { _fun0018_ip = 106; continue _fun0018 }
case 107:
                        var4 = _closure3_slot0;
                        var6 = var4.scrollResponder;
                        var5 = var6.scrollTo;
                        var4 = {};
                        var4['y'] = var7;
                        var4 = var5.bind(var6)(var4);
case 106:
                        return var3;
case 102:
                        var5 = _closure3_slot0;
                        var4 = var5.setState;
                        var3 = {'active': null, 'hoverIndex': 4294967291};
                        var3 = var4.bind(var5)(var3);
                        return var3;
case 100:
                        var3 = _closure3_slot0;
                        var3 = var3.state;
                        var3 = var3.hovering;
                        if(!var3) { _fun0018_ip = 108; continue _fun0018 }
case 109:
                        var5 = _closure3_slot0;
                        var4 = var5.setState;
                        var3 = {'hovering': false, 'hoverIndex': 4294967291};
                        var3 = var4.bind(var5)(var3);
case 108:
                        var1 = _closure3_slot0;
                        var1['moveY'] = var2;
                        var1 = undefined;
                        return var1;
                    }
                };
                var2['onPanResponderRelease'] = var5;
                var2 = var3.bind(var4)(var2);
                var1['_panResponder'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = 'componentDidMount';
        var5['key'] = var1;
        var1 = function value() {
            var3 = this;
            var _closure3_slot0 = var3;
            var1 = true;
            var3['_isMounted'] = var1;
            var1 = global;
            var5 = var1.setTimeout;
            var1 = undefined;
            var4 = function() {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var5 = _closure3_slot0;
                    var1 = var5._listRef;
                    var7 = var1.current;
                    var2 = null;
                    var6 = var2 == var7;
                    var1 = undefined;
                    var4 = undefined;
                    if(var6) { _fun0019_ip = 86; continue _fun0019 }
case 110:
                    var6 = var7.getScrollResponder;
                    var4 = var6.bind(var7)();
case 86:
                    var5['scrollResponder'] = var4;
                    var3 = _closure3_slot0;
                    var3 = var3._wrapperRef;
                    var4 = var3.current;
                    if(!(var2 != var4)) { _fun0019_ip = 111; continue _fun0019 }
case 91:
                    var3 = var4.measure;
                    var2 = function(arg1, arg2, arg3, arg4, arg5, arg6) {
                        var2 = _closure3_slot0;
                        var1 = {};
                        var3 = arg1;
                        var1['frameX'] = var3;
                        var3 = arg2;
                        var1['frameY'] = var3;
                        var3 = arg3;
                        var1['frameWidth'] = var3;
                        var3 = arg4;
                        var1['frameHeight'] = var3;
                        var3 = arg5;
                        var1['pageX'] = var3;
                        var3 = arg6;
                        var1['pageY'] = var3;
                        var2['wrapperLayout'] = var1;
                        var1 = undefined;
                        return var1;
                    };
                    var2 = var3.bind(var4)(var2);
case 111:
                    return var1;
                }
            };
            var2 = 1;
            var2 = var5.bind(var1)(var4, var2);
            var3['_delayedInitTimeout'] = var2;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'componentWillUnmount';
        var5['key'] = var7;
        var7 = function value() {
            var1 = global;
            var3 = var1.clearTimeout;
            var1 = this;
            var2 = var1._delayedInitTimeout;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getMemoedRowData';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                var3 = arg1;
                var5 = arg2;
                var2 = this;
                var1 = var2.memoedRowData;
                var1 = var1[var3];
                var4 = null;
                var4 = var4 != var1;
                if(!var4) { _fun0020_ip = 112; continue _fun0020 }
case 113:
                var6 = var1.index;
                var4 = var3 === var6;
case 112:
                if(!var4) { _fun0020_ip = 114; continue _fun0020 }
case 115:
                var6 = var1.item;
                var4 = var5 === var6;
case 114:
                if(var4) { _fun0020_ip = 116; continue _fun0020 }
case 117:
                var4 = {};
                var4['index'] = var3;
                var4['item'] = var5;
                var1 = var4;
case 116:
                var2 = var2.memoedRowData;
                var2[var3] = var1;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'render';
        var5['key'] = var7;
        var6 = function value() {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                var7 = this;
                var1 = var7.props;
                var6 = var1.wrapperStyles;
                var13 = var1.contentContainerStyle;
                var14 = var1.disableSorting;
                var12 = var1.header;
                var10 = var1.footer;
                var9 = var1.data;
                var11 = var1.scrollEnabled;
                var16 = var1.keyboardShouldPersistTaps;
                var15 = var1.scrollEventThrottle;
                var4 = _closure1_slot13;
                var3 = _closure1_slot8;
                var2 = {};
                var5 = var7._wrapperRef;
                var2['ref'] = var5;
                var5 = new Array(2);
                var5[0] = var6;
                var6 = {};
                var8 = 1;
                var6['flex'] = var8;
                var5[1] = var6;
                var2['style'] = var5;
                var8 = _closure1_slot12;
                var6 = _closure1_slot11;
                var5 = {};
                var1 = var7._panResponder;
                var21 = var1.panHandlers;
                var22 = var5;
                var1 = copyDataProperties(var22, var21);
                var17 = var7._listRef;
                var1 = 'ref';
                var5[var1] = var17;
                var1 = 'keyboardShouldPersistTaps';
                var5[var1] = var16;
                var1 = 'scrollEventThrottle';
                var5[var1] = var15;
                var1 = 'contentContainerStyle';
                var5[var1] = var13;
                var1 = 'ListHeaderComponent';
                var5[var1] = var12;
                var1 = 'ListFooterComponent';
                var5[var1] = var10;
                var1 = 'data';
                var5[var1] = var9;
                var9 = var7.handleScroll;
                var1 = 'onScroll';
                var5[var1] = var9;
                var9 = var7.handleContentSizeChange;
                var1 = 'onContentSizeChange';
                var5[var1] = var9;
                var9 = var7.handleLayout;
                var1 = 'onLayout';
                var5[var1] = var9;
                var1 = var7.state;
                var9 = var1.active;
                var1 = null;
                var10 = var1 == var9;
                if(!var10) { _fun0021_ip = 118; continue _fun0021 }
case 119:
                var9 = false;
                var10 = var9 !== var11;
case 118:
                var9 = 'scrollEnabled';
                var5[var9] = var10;
                var10 = var7.renderItem;
                var9 = 'renderItem';
                var5[var9] = var10;
                var9 = var7.state;
                var9 = var9.active;
                var10 = var1 == var9;
                var1 = undefined;
                var13 = undefined;
                if(var10) { _fun0021_ip = 120; continue _fun0021 }
case 121:
                var9 = var9.rowData;
                var13 = var9.index;
case 120:
                var9 = var7.state;
                var18 = var9.hoverIndex;
                var9 = global;
                var9 = var9.HermesInternal;
                var11 = var9.concat;
                var23 = '';
                var9 = ':';
                var22 = var14;
                var21 = var9;
                var20 = var13;
                var19 = var9;
                var10 = var23[var11](var22, var21, var20, var19, var18, var17);
                var9 = 'extraData';
                var5[var9] = var10;
                var6 = var8.bind(var1)(var6, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var6 = var7.renderActive;
                var6 = var6.bind(var7)();
                var5[1] = var6;
                var2['children'] = var5;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            }
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = {};
    var7 = false;
    var4['disableSorting'] = var7;
    var2['defaultProps'] = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/common/SortableListView.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();