// app/components_native/common/SortableChannels.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var8 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 45; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0001_ip = 54; continue _fun0001 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0001_ip = 344; continue _fun0001 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 322; continue _fun0001 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 282; continue _fun0001 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 269; continue _fun0001 }
 109:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 162; continue _fun0001 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0001_ip = 178; continue _fun0001 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 233; continue _fun0001 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 246; continue _fun0001 }
 233:
            var9 = _closure1_slot20;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0001_ip = 264; continue _fun0001;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0001_ip = 282; continue _fun0001;
 269:
            var7 = _closure1_slot20;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0001_ip = 322; continue _fun0001 }
 288:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 322:
            if(!var4) { _fun0001_ip = 329; continue _fun0001 }
 325:
            _closure2_slot0 = var4;
 329:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 56; continue _fun0002 }
 20:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 67; continue _fun0002;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 344:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 70; continue _fun0003 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 55; continue _fun0003 }
 70:
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = function _callSuper(arg1, arg2, arg3) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = arg1;
            var6 = arg3;
            var2 = _closure1_slot5;
            var3 = undefined;
            var1 = arg2;
            var9 = var2.bind(var3)(var1);
            var2 = _closure1_slot4;
            var1 = _closure1_slot22;
            var1 = var1.bind(var3)();
            if(var1) { _fun0004_ip = 51; continue _fun0004 }
 38:
            var1 = var9.apply;
            var1 = var1.bind(var9)(var4, var6);
            _fun0004_ip = 92; continue _fun0004;
 51:
            var7 = global;
            var8 = var7.Reflect;
            var7 = var8.construct;
            if(var6) { _fun0004_ip = 71; continue _fun0004 }
 67:
            var6 = new Array(0);
 71:
            var5 = _closure1_slot5;
            var5 = var5.bind(var3)(var4);
            var5 = var5.constructor;
            var1 = var7.bind(var8)(var9, var6, var5);
 92:
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
 2: // try_start_0
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
 72: // try_end0
            _fun0005_ip = 76; continue _fun0005;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot22 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var9 = 5;
    var7 = var6[var9];
    var4 = native4;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot7 = var4;
    var7 = 6;
    var7 = var6[var7];
    var10 = var5.bind(var1)(var7);
    var7 = var10.View;
    var _closure1_slot8 = var7;
    var7 = var10.Animated;
    var _closure1_slot9 = var7;
    var7 = var10.PanResponder;
    var _closure1_slot10 = var7;
    var7 = var10.StyleSheet;
    var10 = var10.SectionList;
    var _closure1_slot11 = var10;
    var10 = 7;
    var10 = var6[var10];
    var10 = var5.bind(var1)(var10);
    var11 = var10.jsxs;
    var _closure1_slot12 = var11;
    var10 = var10.jsx;
    var _closure1_slot13 = var10;
    var9 = var6[var9];
    var9 = var5.bind(var1)(var9);
    var9 = var9.createElement;
    var _closure1_slot14 = var9;
    var9 = var7.hairlineWidth;
    var7 = 24;
    var7 = var7 + var9;
    var _closure1_slot15 = var7;
    var7 = 8;
    var7 = var6[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.memoize;
    var7 = function(arg1) {
        var4 = arg1;
        var3 = var4.map;
        var2 = function(arg1) {
            var2 = arg1;
            var3 = {};
            var1 = 'section';
            var3['type'] = var1;
            var1 = var2.category;
            var3['data'] = var1;
            var1 = new Array(1);
            var1[0] = var3;
            var4 = var2.data;
            var3 = var4.map;
            var2 = function(arg1) {
                var1 = {};
                var2 = 'row';
                var1['type'] = var2;
                var2 = arg1;
                var1['data'] = var2;
                return var1;
            };
            var6 = var3.bind(var4)(var2);
            var5 = 1;
            var7 = var1;
            var2 = arraySpread(var7, var6, var5);
            return var1;
        };
        var4 = var3.bind(var4)(var2);
        var3 = var4.reduce;
        var2 = function(arg1, arg2) {
            var1 = new Array(0);
            var5 = arg1;
            var4 = 0;
            var6 = var1;
            var4 = arraySpread(var6, var5, var4);
            var5 = arg2;
            var6 = var1;
            var2 = arraySpread(var6, var5, var4);
            return var1;
        };
        var1 = new Array(0);
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var7 = var8.bind(var9)(var7);
    var _closure1_slot16 = var7;
    var8 = var4.Component;
    var7 = function(arg1) {
        var4 = function Row(arg1) {
            var6 = this;
            var11 = 0;
            var7 = copyRestArgs(var11);
            var3 = _closure1_slot2;
            var5 = _closure2_slot0;
            var4 = undefined;
            var3 = var3.bind(var4)(var6, var5);
            var3 = _closure1_slot21;
            var1 = new Array(0);
            var11 = var1;
            var10 = var7;
            var9 = 0;
            var7 = arraySpread(var11, var10, var9);
            var1 = var3.bind(var4)(var6, var5, var1);
            var _closure3_slot0 = var1;
            var3 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var2 = arg1;
                    var _closure4_slot0 = var2;
                    var2 = _closure3_slot0;
                    var3 = var2.props;
                    var4 = var3.onRowActive;
                    var _closure4_slot1 = var4;
                    var3 = var3.rowData;
                    var _closure4_slot2 = var3;
                    var3 = var2._view;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0006_ip = 71; continue _fun0006 }
 53:
                    var2 = var3.measure;
                    var1 = function(arg1, arg2, arg3, arg4, arg5, arg6) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                            var3 = _closure4_slot1;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0007_ip = 72; continue _fun0007 }
 13:
                            var3 = _closure4_slot1;
                            var2 = {};
                            var4 = {};
                            var5 = arg4;
                            var4['frameHeight'] = var5;
                            var5 = arg6;
                            var4['pageY'] = var5;
                            var2['layout'] = var4;
                            var4 = _closure4_slot2;
                            var2['rowData'] = var4;
                            var1 = _closure4_slot0;
                            var1 = var1.nativeEvent;
                            var2['touch'] = var1;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
 72:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
 71:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['handleLongPress'] = var3;
            var3 = function(arg1) {
                var2 = _closure3_slot0;
                var1 = arg1;
                var2['_view'] = var1;
                var1 = undefined;
                return var1;
            };
            var1['setViewRef'] = var3;
            var2 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var1 = _closure3_slot0;
                    var3 = var1._view;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0008_ip = 33; continue _fun0008 }
 19:
                    var2 = var3.measure;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
 33:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['measure'] = var2;
            return var1;
        };
        var _closure2_slot0 = var4;
        var6 = _closure1_slot6;
        var3 = undefined;
        var5 = arg1;
        var5 = var6.bind(var3)(var4, var5);
        var2 = _closure1_slot3;
        var5 = {};
        var6 = 'render';
        var5['key'] = var6;
        var1 = function value() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var5 = this;
                var1 = var5.props;
                var2 = var1.rowData;
                var11 = var1.active;
                var3 = var1.renderItem;
                var15 = var1.list;
                var7 = var1.activeDivider;
                var10 = var1.isAfter;
                var12 = var1.style;
                var14 = var1.sortingEnabled;
                var1 = var15.state;
                var1 = var1.active;
                var9 = null;
                var6 = var9 != var1;
                var4 = -1;
                if(!var6) { _fun0009_ip = 94; continue _fun0009 }
 83:
                var1 = var1.rowData;
                var4 = var1.index;
 94:
                var1 = var2.index;
                var8 = var4 !== var1;
                var13 = _closure1_slot7;
                var6 = var13.cloneElement;
                var2 = var2.data;
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = null;
                if(!var14) { _fun0009_ip = 189; continue _fun0009 }
 133:
                var14 = {};
                var16 = {};
                var17 = var5.handleLongPress;
                var16['onLongPress'] = var17;
                var17 = var15.cancel;
                var16['onPressOut'] = var17;
                var14['sortHandlers'] = var16;
                var16 = var5.handleLongPress;
                var14['onLongPress'] = var16;
                var15 = var15.cancel;
                var14['onPressOut'] = var15;
                var2 = var14;
 189:
                var6 = var6.bind(var13)(var3, var2);
                var3 = _closure1_slot12;
                var2 = _closure1_slot8;
                var1 = {};
                var13 = null;
                if(!var11) { _fun0009_ip = 229; continue _fun0009 }
 210:
                var11 = {};
                var14 = 0.2;
                var11['opacity'] = var14;
                var13 = var11;
 229:
                var11 = new Array(2);
                var11[0] = var13;
                var11[1] = var12;
                var1['style'] = var11;
                var5 = var5.setViewRef;
                var1['ref'] = var5;
                var5 = false;
                var1['collapsable'] = var5;
                var11 = null;
                if(var10) { _fun0009_ip = 284; continue _fun0009 }
 267:
                var11 = null;
                if(!var8) { _fun0009_ip = 284; continue _fun0009 }
 272:
                var5 = var9 != var7;
                var11 = null;
                if(!var5) { _fun0009_ip = 284; continue _fun0009 }
 281:
                var11 = var7;
 284:
                var5 = new Array(3);
                var5[0] = var11;
                var5[1] = var6;
                var6 = null;
                if(!var10) { _fun0009_ip = 318; continue _fun0009 }
 301:
                var6 = null;
                if(!var8) { _fun0009_ip = 318; continue _fun0009 }
 306:
                var8 = var9 != var7;
                var6 = null;
                if(!var8) { _fun0009_ip = 318; continue _fun0009 }
 315:
                var6 = var7;
 318:
                var5[2] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var7 = var7.bind(var1)(var8);
    var _closure1_slot17 = var7;
    var8 = var4.Component;
    var7 = function(arg1) {
        var4 = function SortRow(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var7 = arg1;
                var5 = this;
                var2 = _closure1_slot2;
                var4 = _closure2_slot0;
                var3 = undefined;
                var2 = var2.bind(var3)(var5, var4);
                var2 = _closure1_slot21;
                var1 = new Array(1);
                var1[0] = var7;
                var1 = var2.bind(var3)(var5, var4, var1);
                var2 = var7.list;
                var2 = var2.state;
                var2 = var2.active;
                var6 = null;
                if(!(var6 != var2)) { _fun0010_ip = 200; continue _fun0010 }
 73:
                var2 = var7.list;
                var2 = var2.state;
                var2 = var2.active;
                var5 = var2.layout;
                var2 = var7.list;
                var4 = var2.wrapperLayout;
                var2 = {};
                var3 = {'position': 'absolute', 'left': 0, 'right': 0, 'opacity': null, 'height': null, 'overflow': 'hidden', 'backgroundColor': 'transparent'};
                var7 = var7.activeOpacity;
                var8 = var6 != var7;
                var6 = 0.8;
                if(!var8) { _fun0010_ip = 150; continue _fun0010 }
 147:
                var6 = var7;
 150:
                var3['opacity'] = var6;
                var6 = var5.frameHeight;
                var3['height'] = var6;
                var5 = var5.pageY;
                var4 = var4.pageY;
                var4 = var5 - var4;
                var3['marginTop'] = var4;
                var2['style'] = var3;
                var1['state'] = var2;
                return var1;
 200:
                var1 = global;
                var1 = var1.Error;
                var2 = var1.prototype;
                var2 = Object.create(var2, {constructor: {value: var1}});
                var12 = var2;
                var1 = new var12[var1](var11);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var _closure2_slot0 = var4;
        var6 = _closure1_slot6;
        var3 = undefined;
        var5 = arg1;
        var5 = var6.bind(var3)(var4, var5);
        var2 = _closure1_slot3;
        var5 = {};
        var6 = 'render';
        var5['key'] = var6;
        var1 = function value() {
            var5 = this;
            var2 = var5.props;
            var8 = var2.sortRowStyle;
            var6 = var2.list;
            var1 = var2.rowData;
            var7 = var2.renderItem;
            var4 = _closure1_slot13;
            var2 = _closure1_slot9;
            var3 = var2.View;
            var2 = {};
            var5 = var5.state;
            var9 = var5.style;
            var5 = new Array(3);
            var5[0] = var9;
            var5[1] = var8;
            var6 = var6.state;
            var8 = var6.pan;
            var6 = var8.getLayout;
            var6 = var6.bind(var8)();
            var5[2] = var6;
            var2['style'] = var5;
            var6 = var1.data;
            var1 = undefined;
            var5 = true;
            var5 = var7.bind(var1)(var6, var5);
            var2['children'] = var5;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var7 = var7.bind(var1)(var8);
    var _closure1_slot18 = var7;
    var4 = var4.Component;
    var2 = function(arg1) {
        var4 = function SortableChannels(arg1) {
            var9 = arg1;
            var5 = this;
            var1 = _closure1_slot2;
            var4 = _closure2_slot0;
            var6 = undefined;
            var1 = var1.bind(var6)(var5, var4);
            var3 = _closure1_slot21;
            var1 = new Array(1);
            var1[0] = var9;
            var1 = var3.bind(var6)(var5, var4, var1);
            var _closure3_slot0 = var1;
            var3 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var2 = _closure3_slot0;
                    var2 = var2.moved;
                    if(var2) { _fun0011_ip = 89; continue _fun0011 }
 16:
                    var2 = _closure3_slot0;
                    var3 = var2.state;
                    var4 = var3.active;
                    var2 = var2.props;
                    var3 = var2.onMoveCancel;
                    var2 = null;
                    if(!(var2 != var4)) { _fun0011_ip = 60; continue _fun0011 }
 50:
                    if(!(var2 != var3)) { _fun0011_ip = 60; continue _fun0011 }
 54:
                    var2 = undefined;
                    var2 = var3.bind(var2)();
 60:
                    var3 = _closure3_slot0;
                    var2 = var3.setState;
                    var1 = {'active': null, 'hoveringIndex': 4294967295, 'activeIndex': 4294967295};
                    var1 = var2.bind(var3)(var1);
 89:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['cancel'] = var3;
            var3 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var2 = _closure3_slot0;
                    var3 = var2._view;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0012_ip = 49; continue _fun0012 }
 19:
                    var1 = _closure3_slot0;
                    var3 = var1._view;
                    var2 = var3.measure;
                    var1 = function(arg1, arg2, arg3, arg4, arg5, arg6) {
                        var2 = _closure3_slot0;
                        var1 = {};
                        var3 = arg4;
                        var1['frameHeight'] = var3;
                        var3 = arg6;
                        var1['pageY'] = var3;
                        var2['wrapperLayout'] = var1;
                        var1 = undefined;
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
 49:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['handleWrapperLayout'] = var3;
            var3 = function(arg1) {
                var2 = _closure3_slot0;
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var2['listLayout'] = var1;
                var1 = undefined;
                return var1;
            };
            var1['handleListLayout'] = var3;
            var3 = function(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var3 = arg1;
                    var4 = _closure3_slot0;
                    var1 = var4.props;
                    var2 = var1.onScroll;
                    var1 = var3.nativeEvent;
                    var1 = var1.contentOffset;
                    var1 = var1.y;
                    var4['scrollValue'] = var1;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0013_ip = 56; continue _fun0013 }
 49:
                    var1 = undefined;
                    var1 = var2.bind(var1)(var3);
 56:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['handleScroll'] = var3;
            var3 = function(arg1, arg2) {
                var2 = _closure3_slot0;
                var1 = arg2;
                var2['scrollContainerHeight'] = var1;
                var1 = undefined;
                return var1;
            };
            var1['handleContentSizeChange'] = var3;
            var3 = function(arg1) {
                var2 = _closure3_slot0;
                var1 = arg1;
                var2['_list'] = var1;
                var1 = undefined;
                return var1;
            };
            var1['setListRef'] = var3;
            var3 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                    var2 = _closure3_slot0;
                    var2 = var2.state;
                    var9 = var2.active;
                    var4 = null;
                    if(!(var4 != var9)) { _fun0014_ip = 380; continue _fun0014 }
 27:
                    var2 = _closure3_slot0;
                    var2 = var2.moveY;
                    if(!(var4 == var2)) { _fun0014_ip = 71; continue _fun0014 }
 41:
                    var2 = global;
                    var5 = var2.requestAnimationFrame;
                    var2 = _closure3_slot0;
                    var3 = var2.scrollAnimation;
                    var2 = undefined;
                    var2 = var5.bind(var2)(var3);
                    _fun0014_ip = 380; continue _fun0014;
 71:
                    var7 = _closure3_slot0;
                    var2 = var7.wrapperLayout;
                    var6 = var2.pageY;
                    var2 = global;
                    var8 = var2.Math;
                    var5 = var8.max;
                    var3 = var7.moveY;
                    var3 = var3 - var6;
                    var6 = 0;
                    var8 = var5.bind(var8)(var3, var6);
                    var3 = var7.listLayout;
                    var3 = var3.height;
                    var5 = 100;
                    var3 = var3 - var5;
                    var11 = var7.scrollContainerHeight;
                    var10 = var7.listLayout;
                    var10 = var10.height;
                    var10 = var11 - var10;
                    var9 = var9.layout;
                    var9 = var9.frameHeight;
                    var9 = var10 + var9;
                    var7 = var7.scrollValue;
                    if(!(var8 < var5)) { _fun0014_ip = 187; continue _fun0014 }
 183:
                    if(!(!(var7 > var6))) { _fun0014_ip = 258; continue _fun0014 }
 187:
                    var10 = var8 > var3;
                    var3 = null;
                    if(!var10) { _fun0014_ip = 289; continue _fun0014 }
 196:
                    var10 = var7 < var9;
                    var3 = null;
                    if(!var10) { _fun0014_ip = 289; continue _fun0014 }
 205:
                    var10 = _closure3_slot0;
                    var10 = var10.listLayout;
                    var10 = var10.height;
                    var10 = var10 - var8;
                    var12 = var10 / var5;
                    var11 = 1500;
                    var10 = 1;
                    var10 = var10 - var12;
                    var10 = var11 * var10;
                    var3 = var7 + var10;
                    if(!(var3 > var9)) { _fun0014_ip = 289; continue _fun0014 }
 253:
                    var3 = var9;
                    _fun0014_ip = 289; continue _fun0014;
 258:
                    var9 = var8 / var5;
                    var8 = 1500;
                    var5 = 1;
                    var5 = var5 - var9;
                    var5 = var8 * var5;
                    var3 = var7 - var5;
                    if(!(var3 < var6)) { _fun0014_ip = 289; continue _fun0014 }
 287:
                    var3 = 0;
 289:
                    if(!(var4 != var3)) { _fun0014_ip = 330; continue _fun0014 }
 293:
                    var5 = _closure3_slot0;
                    var5['scrollValue'] = var3;
                    var4 = var5.scrollTo;
                    var3 = {};
                    var7 = var5.scrollValue;
                    var3['y'] = var7;
                    var3['x'] = var6;
                    var3 = var4.bind(var5)(var3);
 330:
                    var3 = _closure3_slot0;
                    var3 = var3.moved;
                    if(!var3) { _fun0014_ip = 357; continue _fun0014 }
 343:
                    var4 = _closure3_slot0;
                    var3 = var4.checkTargetElement;
                    var3 = var3.bind(var4)();
 357:
                    var3 = var2.requestAnimationFrame;
                    var1 = _closure3_slot0;
                    var2 = var1.scrollAnimation;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
 380:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['scrollAnimation'] = var3;
            var3 = function(arg1) {
                var2 = _closure3_slot0;
                var1 = arg1;
                var2['_view'] = var1;
                var1 = undefined;
                return var1;
            };
            var1['setWrapperRef'] = var3;
            var3 = function() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                    var1 = _closure3_slot0;
                    var2 = var1.state;
                    var6 = var2.hoveringIndex;
                    var2 = var1.props;
                    var3 = var2.onHoverChange;
                    var15 = var1.scrollValue;
                    var4 = var1.moveY;
                    var2 = var1.wrapperLayout;
                    var2 = var2.pageY;
                    var14 = var4 - var2;
                    var1 = var1.props;
                    var2 = var1.order;
                    var1 = var15 + var14;
                    var7 = 0;
                    var1 = var1 + var7;
                    var4 = null;
                    var11 = 0;
                    var10 = 0;
                    var9 = false;
                    var8 = 0;
                    if(!(var8 < var1)) { _fun0015_ip = 151; continue _fun0015 }
 92:
                    var16 = var2[var10];
                    var1 = _closure3_slot0;
                    var1 = var1.layoutMap;
                    var1 = var1[var16];
                    var16 = var4 == var1;
                    var8 = var10;
                    var9 = true;
                    if(var16) { _fun0015_ip = 151; continue _fun0015 }
 122:
                    var1 = var1.height;
                    var11 = var11 + var1;
                    var10 = var10 + 1;
                    var1 = var15 + var14;
                    var1 = var1 + var7;
                    var8 = var10;
                    var9 = false;
                    if(var11 < var1) { _fun0015_ip = 92; continue _fun0015 }
 151:
                    var1 = var8;
                    if(var9) { _fun0015_ip = 160; continue _fun0015 }
 157:
                    var1 = var8 - 1;
 160:
                    var6 = var1 !== var6;
                    if(!var6) { _fun0015_ip = 171; continue _fun0015 }
 167:
                    var6 = var1 >= var7;
 171:
                    if(!var6) { _fun0015_ip = 211; continue _fun0015 }
 174:
                    var7 = _closure3_slot0;
                    var6 = var7.setState;
                    var5 = {};
                    var5['hoveringIndex'] = var1;
                    var5 = var6.bind(var7)(var5);
                    if(!(var4 != var3)) { _fun0015_ip = 211; continue _fun0015 }
 200:
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
 211:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['checkTargetElement'] = var3;
            var3 = function(arg1) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                    var3 = arg1;
                    var2 = _closure3_slot0;
                    var4 = var2.props;
                    var2 = var4.onRowActive;
                    var4 = var4.disableSorting;
                    if(var4) { _fun0016_ip = 169; continue _fun0016 }
 33:
                    var6 = _closure3_slot0;
                    var1 = var6.state;
                    var5 = var1.pan;
                    var4 = var5.setValue;
                    var1 = {'x': 0, 'y': 0};
                    var1 = var4.bind(var5)(var1);
                    var1 = var3.layout;
                    var4 = var1.pageY;
                    var1 = var3.layout;
                    var5 = var1.frameHeight;
                    var1 = 2;
                    var1 = var5 / var1;
                    var1 = var4 + var1;
                    var6['moveY'] = var1;
                    var1 = var3.rowData;
                    var1 = var1.index;
                    var5 = var6.setState;
                    var4 = {};
                    var4['active'] = var3;
                    var4['activeIndex'] = var1;
                    var4['hoveringIndex'] = var1;
                    var1 = var6.scrollAnimation;
                    var1 = var5.bind(var6)(var4, var1);
                    var1 = null;
                    if(!(var1 != var2)) { _fun0016_ip = 169; continue _fun0016 }
 162:
                    var1 = undefined;
                    var1 = var2.bind(var1)(var3);
 169:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['handleRowActive'] = var3;
            var3 = function(arg1) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                    var1 = _closure3_slot0;
                    var2 = var1.state;
                    var3 = var2.active;
                    var1 = var1.props;
                    var7 = var1.renderActiveDivider;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0017_ip = 137; continue _fun0017 }
 35:
                    var2 = var3.layout;
                    var6 = var2.frameHeight;
                    if(!(var1 == var7)) { _fun0017_ip = 84; continue _fun0017 }
 51:
                    var9 = _closure1_slot13;
                    var8 = _closure1_slot8;
                    var5 = {};
                    var2 = {};
                    var2['height'] = var6;
                    var5['style'] = var2;
                    var2 = undefined;
                    var2 = var9.bind(var2)(var8, var5);
                    _fun0017_ip = 135; continue _fun0017;
 84:
                    var8 = var1 != var3;
                    var5 = null;
                    if(!var8) { _fun0017_ip = 123; continue _fun0017 }
 93:
                    var4 = _closure3_slot0;
                    var4 = var4.props;
                    var4 = var4.order;
                    var3 = var3.rowData;
                    var3 = var3.index;
                    var5 = var4[var3];
 123:
                    var4 = undefined;
                    var3 = arg1;
                    var2 = var7.bind(var4)(var6, var3, var5);
 135:
                    return var2;
 137:
                    return var1;
                }
            };
            var1['renderActiveDivider'] = var3;
            var3 = function(arg1, arg2) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                    var7 = arg1;
                    var12 = arg2;
                    var2 = _closure3_slot0;
                    var3 = var2.state;
                    var10 = var3.active;
                    var5 = var3.hoveringIndex;
                    var1 = var3.activeIndex;
                    var9 = var3.panResponder;
                    var2 = var2.props;
                    var4 = var2.order;
                    var3 = var4.indexOf;
                    var2 = var7.section;
                    var2 = var2.category;
                    var2 = var2.id;
                    var3 = var3.bind(var4)(var2);
                    if(var12) { _fun0018_ip = 92; continue _fun0018 }
 86:
                    var4 = _closure1_slot17;
                    _fun0018_ip = 96; continue _fun0018;
 92:
                    var4 = _closure1_slot18;
 96:
                    var11 = !var12;
                    if(!var11) { _fun0018_ip = 137; continue _fun0018 }
 102:
                    var13 = null;
                    var15 = var13 == var10;
                    var8 = undefined;
                    if(var15) { _fun0018_ip = 133; continue _fun0018 }
 113:
                    var10 = var10.rowData;
                    var13 = var13 == var10;
                    var8 = undefined;
                    if(var13) { _fun0018_ip = 133; continue _fun0018 }
 128:
                    var8 = var10.index;
 133:
                    var11 = var8 === var3;
 137:
                    var8 = _closure3_slot0;
                    var8 = var8.props;
                    var8 = var8.order;
                    var8 = var8[var5];
                    var14 = null;
                    var13 = var14 != var8;
                    var10 = '';
                    if(!var13) { _fun0018_ip = 172; continue _fun0018 }
 169:
                    var10 = var8;
 172:
                    var8 = {};
                    var8['data'] = var7;
                    var8['index'] = var3;
                    var3 = false;
                    var8['isRow'] = var3;
                    var13 = _closure3_slot0;
                    var15 = var13.getItemLayoutProps;
                    var3 = var8.index;
                    var3 = var15.bind(var13)(var3);
                    var3 = _closure1_slot14;
                    var2 = {};
                    var16 = var13.props;
                    var17 = var2;
                    var15 = copyDataProperties(var17, var16);
                    var13 = var13.props;
                    var15 = var13.renderSectionHeader;
                    var13 = var15.bind;
                    var15 = var13.bind(var15)(var14, var7);
                    var13 = 'renderItem';
                    var2[var13] = var15;
                    var13 = var7.section;
                    var13 = var13.key;
                    var14 = null;
                    if(!(var10 === var13)) { _fun0018_ip = 289; continue _fun0018 }
 274:
                    var15 = _closure3_slot0;
                    var13 = var15.renderActiveDivider;
                    var14 = var13.bind(var15)(var10);
 289:
                    var13 = 'activeDivider';
                    var2[var13] = var14;
                    var13 = var7.section;
                    var14 = var13.key;
                    var13 = 'key';
                    var2[var13] = var14;
                    if(var12) { _fun0018_ip = 325; continue _fun0018 }
 322:
                    var12 = var11;
 325:
                    var11 = 'active';
                    var2[var11] = var12;
                    var6 = _closure3_slot0;
                    var11 = 'list';
                    var2[var11] = var6;
                    var11 = var6.props;
                    var12 = var11.sortingEnabled;
                    var11 = 'sortingEnabled';
                    var2[var11] = var12;
                    var7 = var7.section;
                    var7 = var7.key;
                    var10 = var10 === var7;
                    var7 = 'hovering';
                    var2[var7] = var10;
                    var7 = 'panResponder';
                    var2[var7] = var9;
                    var7 = 'rowData';
                    var2[var7] = var8;
                    var7 = var6.handleRowActive;
                    var6 = 'onRowActive';
                    var2[var6] = var7;
                    var5 = var5 > var1;
                    var1 = 'isAfter';
                    var2[var1] = var5;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var4, var2);
                    return var1;
                }
            };
            var1['renderSectionHeader'] = var3;
            var3 = function(arg1, arg2) {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                    var7 = arg1;
                    var12 = arg2;
                    var1 = _closure3_slot0;
                    var2 = var1.state;
                    var3 = var2.active;
                    var5 = var2.hoveringIndex;
                    var1 = var2.activeIndex;
                    var9 = var2.panResponder;
                    if(var12) { _fun0019_ip = 54; continue _fun0019 }
 48:
                    var4 = _closure1_slot17;
                    _fun0019_ip = 58; continue _fun0019;
 54:
                    var4 = _closure1_slot18;
 58:
                    var11 = !var12;
                    if(!var11) { _fun0019_ip = 109; continue _fun0019 }
 64:
                    var10 = null;
                    var14 = var10 == var3;
                    var8 = undefined;
                    if(var14) { _fun0019_ip = 95; continue _fun0019 }
 75:
                    var3 = var3.rowData;
                    var10 = var10 == var3;
                    var8 = undefined;
                    if(var10) { _fun0019_ip = 95; continue _fun0019 }
 90:
                    var8 = var3.index;
 95:
                    var3 = var7.item;
                    var3 = var3.index;
                    var11 = var8 === var3;
 109:
                    var3 = _closure3_slot0;
                    var3 = var3.props;
                    var3 = var3.order;
                    var3 = var3[var5];
                    var14 = null;
                    var8 = var14 != var3;
                    var10 = '';
                    if(!var8) { _fun0019_ip = 144; continue _fun0019 }
 141:
                    var10 = var3;
 144:
                    var8 = {};
                    var8['data'] = var7;
                    var3 = var7.item;
                    var3 = var3.index;
                    var8['index'] = var3;
                    var3 = true;
                    var8['isRow'] = var3;
                    var13 = _closure3_slot0;
                    var15 = var13.getItemLayoutProps;
                    var3 = var8.index;
                    var3 = var15.bind(var13)(var3);
                    var3 = _closure1_slot14;
                    var2 = {};
                    var16 = var13.props;
                    var17 = var2;
                    var13 = copyDataProperties(var17, var16);
                    var13 = var7.item;
                    var13 = var13.key;
                    var14 = null;
                    if(!(var10 === var13)) { _fun0019_ip = 240; continue _fun0019 }
 225:
                    var15 = _closure3_slot0;
                    var13 = var15.renderActiveDivider;
                    var14 = var13.bind(var15)(var10);
 240:
                    var13 = 'activeDivider';
                    var2[var13] = var14;
                    var13 = var7.item;
                    var14 = var13.key;
                    var13 = 'key';
                    var2[var13] = var14;
                    if(var12) { _fun0019_ip = 276; continue _fun0019 }
 273:
                    var12 = var11;
 276:
                    var11 = 'active';
                    var2[var11] = var12;
                    var6 = _closure3_slot0;
                    var11 = 'list';
                    var2[var11] = var6;
                    var11 = var6.props;
                    var12 = var11.sortingEnabled;
                    var11 = 'sortingEnabled';
                    var2[var11] = var12;
                    var7 = var7.item;
                    var7 = var7.key;
                    var10 = var10 === var7;
                    var7 = 'hovering';
                    var2[var7] = var10;
                    var7 = 'panResponder';
                    var2[var7] = var9;
                    var7 = 'rowData';
                    var2[var7] = var8;
                    var7 = var6.handleRowActive;
                    var6 = 'onRowActive';
                    var2[var6] = var7;
                    var5 = var5 > var1;
                    var1 = 'isAfter';
                    var2[var1] = var5;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var4, var2);
                    return var1;
                }
            };
            var1['renderItem'] = var3;
            var3 = function(arg1, arg2) {
                var3 = _closure3_slot0;
                var2 = var3.getItemLayoutProps;
                var1 = arg2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1['getItemLayout'] = var3;
            var3 = function(arg1) {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                    var1 = _closure3_slot0;
                    var2 = var1.props;
                    var1 = var2.sortingEnabled;
                    var3 = var2.fontScale;
                    var2 = 20;
                    if(!var1) { _fun0020_ip = 32; continue _fun0020 }
 30:
                    var2 = 0;
 32:
                    var1 = global;
                    var5 = var1.Math;
                    var4 = var5.max;
                    var1 = 16;
                    var3 = var1 * var3;
                    var1 = 44;
                    var3 = var1 + var3;
                    var1 = 60;
                    var1 = var4.bind(var5)(var3, var1);
                    var3 = arg1;
                    var3 = var3.data;
                    var4 = var3.id;
                    var3 = 'null';
                    if(!(var3 === var4)) { _fun0020_ip = 92; continue _fun0020 }
 89:
                    var1 = var2;
 92:
                    return var1;
                }
            };
            var1['getSectionHeight'] = var3;
            var3 = function() {
                var1 = _closure3_slot0;
                var1 = var1.props;
                var5 = var1.fontScale;
                var1 = global;
                var4 = var1.Math;
                var3 = var4.max;
                var2 = _closure1_slot15;
                var1 = 20;
                var1 = var1 * var5;
                var2 = var2 + var1;
                var1 = 48;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var1['getRowHeight'] = var3;
            var3 = function(arg1) {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                    var4 = arg1;
                    var3 = _closure1_slot19;
                    var5 = _closure1_slot16;
                    var1 = _closure3_slot0;
                    var1 = var1.props;
                    var1 = var1.sections;
                    var12 = undefined;
                    var1 = var5.bind(var12)(var1);
                    var11 = var3.bind(var12)(var1);
                    var1 = var11.bind(var12)();
                    var7 = var1.done;
                    var5 = undefined;
                    var3 = undefined;
                    var6 = 0;
                    if(var7) { _fun0021_ip = 231; continue _fun0021 }
 65:
                    var14 = var1.value;
                    var1 = var14.type;
                    var10 = 'section';
                    if(!(var10 !== var1)) { _fun0021_ip = 99; continue _fun0021 }
 83:
                    var7 = _closure3_slot0;
                    var1 = var7.getRowHeight;
                    var15 = var1.bind(var7)();
                    _fun0021_ip = 114; continue _fun0021;
 99:
                    var7 = _closure3_slot0;
                    var1 = var7.getSectionHeight;
                    var15 = var1.bind(var7)(var14);
 114:
                    var9 = var15;
                    var8 = var14;
                    var7 = 0;
                    var1 = 0;
                    var5 = var9;
                    var3 = var8;
                    var6 = 0;
                    if(!(var6 !== var4)) { _fun0021_ip = 231; continue _fun0021 }
 136:
                    var13 = var7 + var9;
                    var1 = var1 + 1;
                    var14 = var11.bind(var12)();
                    var15 = var14.done;
                    var5 = var9;
                    var3 = var8;
                    var6 = var13;
                    if(var15) { _fun0021_ip = 231; continue _fun0021 }
 164:
                    var14 = var14.value;
                    var15 = var14.type;
                    if(!(var10 !== var15)) { _fun0021_ip = 194; continue _fun0021 }
 178:
                    var16 = _closure3_slot0;
                    var15 = var16.getRowHeight;
                    var15 = var15.bind(var16)();
                    _fun0021_ip = 209; continue _fun0021;
 194:
                    var17 = _closure3_slot0;
                    var16 = var17.getSectionHeight;
                    var15 = var16.bind(var17)(var14);
 209:
                    var9 = var15;
                    var8 = var14;
                    var7 = var13;
                    var5 = var9;
                    var3 = var8;
                    var6 = var7;
                    if(var1 !== var4) { _fun0021_ip = 136; continue _fun0021 }
 231:
                    var1 = {};
                    var1['length'] = var5;
                    var1['offset'] = var6;
                    var1['index'] = var4;
                    var4 = null;
                    if(!(var4 != var3)) { _fun0021_ip = 349; continue _fun0021 }
 252:
                    var7 = var3.data;
                    var7 = var7.id;
                    if(!(var4 == var7)) { _fun0021_ip = 302; continue _fun0021 }
 266:
                    var7 = var3.data;
                    var7 = var7.channel;
                    var7 = var4 != var7;
                    var4 = null;
                    if(!var7) { _fun0021_ip = 300; continue _fun0021 }
 285:
                    var7 = var3.data;
                    var7 = var7.channel;
                    var4 = var7.id;
 300:
                    _fun0021_ip = 312; continue _fun0021;
 302:
                    var3 = var3.data;
                    var4 = var3.id;
 312:
                    var7 = 'string';
                    var3 = typeof var4;
                    if(!(var7 === var3)) { _fun0021_ip = 347; continue _fun0021 }
 323:
                    var2 = _closure3_slot0;
                    var3 = var2.layoutMap;
                    var2 = {};
                    var2['y'] = var6;
                    var2['height'] = var5;
                    var3[var4] = var2;
 347:
                    return var1;
 349:
                    return var1;
                }
            };
            var1['getItemLayoutProps'] = var3;
            var3 = function(arg1) {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                    var8 = 0;
                    var4 = copyRestArgs(var8);
                    var2 = _closure3_slot0;
                    var1 = var2.getScrollResponder;
                    var3 = var1.bind(var2)();
                    var1 = null;
                    if(!(var1 != var3)) { _fun0022_ip = 64; continue _fun0022 }
 29:
                    var2 = var3.scrollTo;
                    var1 = new Array(0);
                    var8 = var1;
                    var7 = var4;
                    var6 = 0;
                    var4 = arraySpread(var8, var7, var6);
                    var8 = var2;
                    var7 = var1;
                    var6 = var3;
                    var1 = apply(var8, var7, var6);
 64:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['scrollTo'] = var3;
            var3 = function() {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
                    var1 = _closure3_slot0;
                    var4 = var1._list;
                    var1 = null;
                    var3 = var1 == var4;
                    var2 = undefined;
                    if(var3) { _fun0023_ip = 49; continue _fun0023 }
 24:
                    var3 = var4.getScrollResponder;
                    var3 = var1 == var3;
                    var2 = undefined;
                    if(var3) { _fun0023_ip = 49; continue _fun0023 }
 39:
                    var3 = var4.getScrollResponder;
                    var2 = var3.bind(var4)();
 49:
                    var3 = var1 != var2;
                    var1 = null;
                    if(!var3) { _fun0023_ip = 61; continue _fun0023 }
 58:
                    var1 = var2;
 61:
                    return var1;
                }
            };
            var1['getScrollResponder'] = var3;
            var8 = {'x': 0, 'y': 0};
            var5 = 0;
            var3 = _closure1_slot9;
            var3 = var3.ValueXY;
            var4 = var3.prototype;
            var4 = Object.create(var4, {constructor: {value: var3}});
            var13 = var4;
            var12 = var8;
            var3 = new var13[var3](var12, var11);
            var3 = var3 instanceof Object ? var3 : var4;
            var4 = var1.createPanResponder;
            var4 = var4.bind(var1)(var9, var8, var3);
            var8 = var3.addListener;
            var7 = function(arg1) {
                var2 = _closure3_slot0;
                var1 = arg1;
                var1 = var1.y;
                var2['panY'] = var1;
                return var1;
            };
            var7 = var8.bind(var3)(var7);
            var1['listener'] = var7;
            var7 = false;
            var1['moved'] = var7;
            var1['moveY'] = var5;
            var1['dy'] = var5;
            var7 = 'down';
            var1['direction'] = var7;
            var1['scrollValue'] = var5;
            var5 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 9;
            var2 = var7[var2];
            var5 = var5.bind(var6)(var2);
            var2 = var5.getWindowDimensions;
            var2 = var2.bind(var5)();
            var5 = var2.height;
            var2 = 1.2;
            var2 = var2 * var5;
            var1['scrollContainerHeight'] = var2;
            var2 = {'active': null, 'activeIndex': 4294967295, 'hoveringIndex': 4294967295};
            var2['panResponder'] = var4;
            var2['pan'] = var3;
            var1['state'] = var2;
            var2 = {};
            var1['layoutMap'] = var2;
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = 'componentWillUnmount';
        var5['key'] = var1;
        var1 = function value() {
            var1 = this;
            var2 = var1.state;
            var3 = var2.pan;
            var2 = var3.removeListener;
            var1 = var1.listener;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'createPanResponder';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3) {
            var3 = arg3;
            var1 = this;
            var _closure3_slot0 = var1;
            var1 = arg1;
            var _closure3_slot1 = var1;
            var1 = arg2;
            var _closure3_slot2 = var1;
            var6 = _closure1_slot9;
            var5 = var6.event;
            var2 = {};
            var7 = var3.x;
            var2['dx'] = var7;
            var3 = var3.y;
            var2['dy'] = var3;
            var3 = [null];
            var3[1] = var2;
            var2 = {};
            var7 = false;
            var2['useNativeDriver'] = var7;
            var2 = var5.bind(var6)(var3, var2);
            var _closure3_slot3 = var2;
            var3 = _closure1_slot10;
            var2 = var3.create;
            var1 = {};
            var5 = function onStartShouldSetPanResponder() {
                var1 = true;
                return var1;
            };
            var1['onStartShouldSetPanResponder'] = var5;
            var5 = function onMoveShouldSetPanResponderCapture(arg1, arg2) {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
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
                    if(!var1) { _fun0024_ip = 82; continue _fun0024 }
 58:
                    var2 = _closure3_slot0;
                    var2 = var2.state;
                    var3 = var2.active;
                    var2 = null;
                    var1 = var2 != var3;
 82:
                    return var1;
                }
            };
            var1['onMoveShouldSetPanResponderCapture'] = var5;
            var5 = function onPanResponderMove(arg1, arg2) {
                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
                    var4 = arg2;
                    var2 = _closure3_slot0;
                    var2 = var2.state;
                    var2 = var2.active;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0025_ip = 151; continue _fun0025 }
 30:
                    var3 = 0;
                    var4['dx'] = var3;
                    var2 = var2.layout;
                    var3 = _closure3_slot0;
                    var5 = var2.pageY;
                    var6 = var2.frameHeight;
                    var2 = 2;
                    var2 = var6 / var2;
                    var5 = var5 + var2;
                    var2 = var4.dy;
                    var2 = var5 + var2;
                    var3['moveY'] = var2;
                    var5 = var4.dy;
                    var2 = var3.dy;
                    var5 = var5 >= var2;
                    var2 = 'up';
                    if(!var5) { _fun0025_ip = 114; continue _fun0025 }
 110:
                    var2 = 'down';
 114:
                    var3['direction'] = var2;
                    var3 = _closure3_slot0;
                    var2 = var4.dy;
                    var3['dy'] = var2;
                    var3 = _closure3_slot3;
                    var2 = undefined;
                    var1 = arg1;
                    var1 = var3.bind(var2)(var1, var4);
 151:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['onPanResponderMove'] = var5;
            var5 = function onPanResponderGrant() {
                _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
 0:
                    var1 = _closure3_slot0;
                    var1 = var1.state;
                    var5 = var1.active;
                    var3 = var1.pan;
                    var1 = _closure3_slot1;
                    var4 = var1.onMoveStart;
                    var1 = null;
                    if(!(var1 != var5)) { _fun0026_ip = 106; continue _fun0026 }
 40:
                    var6 = _closure3_slot0;
                    var5 = true;
                    var6['moved'] = var5;
                    var5 = 0;
                    var6['dy'] = var5;
                    var5 = 'down';
                    var6['direction'] = var5;
                    if(!(var1 != var4)) { _fun0026_ip = 80; continue _fun0026 }
 74:
                    var1 = undefined;
                    var1 = var4.bind(var1)();
 80:
                    var1 = var3.setOffset;
                    var2 = _closure3_slot2;
                    var1 = var1.bind(var3)(var2);
                    var1 = var3.setValue;
                    var1 = var1.bind(var3)(var2);
 106:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['onPanResponderGrant'] = var5;
            var5 = function onPanResponderTerminate() {
                _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
 0:
                    var2 = _closure3_slot0;
                    var2 = var2.props;
                    var4 = var2.onHoverChange;
                    var2 = null;
                    if(!(var2 != var4)) { _fun0027_ip = 35; continue _fun0027 }
 24:
                    var3 = undefined;
                    var2 = '-1';
                    var2 = var4.bind(var3)(var2);
 35:
                    var3 = _closure3_slot0;
                    var2 = var3.setState;
                    var1 = {'active': null, 'hoveringIndex': 4294967295, 'activeIndex': 4294967295};
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                }
            };
            var1['onPanResponderTerminate'] = var5;
            var4 = function onPanResponderRelease() {
                _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
 0:
                    var5 = _closure3_slot0;
                    var3 = var5.state;
                    var2 = var3.active;
                    var3 = var3.hoveringIndex;
                    var4 = var5.props;
                    var8 = var4.onRowMoved;
                    var4 = false;
                    var5['moved'] = var4;
                    var4 = _closure3_slot1;
                    var4 = var4.onMoveEnd;
                    var7 = null;
                    if(!(var7 != var4)) { _fun0028_ip = 73; continue _fun0028 }
 59:
                    var5 = _closure3_slot1;
                    var4 = var5.onMoveEnd;
                    var4 = var4.bind(var5)();
 73:
                    if(!(var7 != var2)) { _fun0028_ip = 342; continue _fun0028 }
 80:
                    var4 = var2.layout;
                    var5 = var4.frameHeight;
                    var4 = var2.rowData;
                    var10 = var4.index;
                    var6 = -1;
                    var9 = var3;
                    if(!(var6 === var9)) { _fun0028_ip = 119; continue _fun0028 }
 116:
                    var9 = var10;
 119:
                    if(!(var9 !== var10)) { _fun0028_ip = 311; continue _fun0028 }
 126:
                    var4 = {};
                    var2 = var2.rowData;
                    var4['row'] = var2;
                    var2 = 1;
                    var10 = var10 - var2;
                    var4['from'] = var10;
                    var2 = var9 - var2;
                    var4['to'] = var2;
                    if(!(var7 != var8)) { _fun0028_ip = 169; continue _fun0028 }
 162:
                    var2 = undefined;
                    var2 = var8.bind(var2)(var4);
 169:
                    var2 = _closure3_slot0;
                    var8 = var2.setState;
                    var4 = {'active': null, 'hoveringIndex': 4294967295, 'activeIndex': 4294967295};
                    var4 = var8.bind(var2)(var4);
                    var4 = global;
                    var9 = var4.Math;
                    var8 = var9.max;
                    var10 = var2.scrollContainerHeight;
                    var4 = var2.listLayout;
                    var4 = var4.height;
                    var4 = var10 - var4;
                    var5 = var4 + var5;
                    var4 = 0;
                    var9 = var8.bind(var9)(var4, var5);
                    var2 = var2.scrollValue;
                    if(!(var2 > var9)) { _fun0028_ip = 275; continue _fun0028 }
 254:
                    var8 = _closure3_slot0;
                    var5 = var8.scrollTo;
                    var2 = {};
                    var2['y'] = var9;
                    var2 = var5.bind(var8)(var2);
 275:
                    var2 = _closure3_slot0;
                    var5 = var2.state;
                    var5['active'] = var7;
                    var5 = var2.state;
                    var5['hoveringIndex'] = var6;
                    var2['moveY'] = var4;
                    var2 = undefined;
                    return var2;
 311:
                    var5 = _closure3_slot0;
                    var4 = var5.setState;
                    var2 = {'active': null, 'hoveringIndex': 4294967295, 'activeIndex': 4294967295};
                    var2 = var4.bind(var5)(var2);
                    return var2;
 342:
                    var2 = 0;
                    if(!(var3 >= var2)) { _fun0028_ip = 376; continue _fun0028 }
 348:
                    var5 = _closure3_slot0;
                    var4 = var5.setState;
                    var3 = {};
                    var6 = -1;
                    var3['hoveringIndex'] = var6;
                    var3 = var4.bind(var5)(var3);
 376:
                    var1 = _closure3_slot0;
                    var1['moveY'] = var2;
                    var1 = undefined;
                    return var1;
                }
            };
            var1['onPanResponderRelease'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'renderActive';
        var5['key'] = var7;
        var7 = function value() {
            _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
 0:
                var5 = this;
                var1 = var5.state;
                var1 = var1.active;
                var2 = null;
                if(!(var2 == var1)) { _fun0029_ip = 24; continue _fun0029 }
 20:
                var2 = undefined;
                return var2;
 24:
                var1 = var1.rowData;
                var4 = var1.data;
                var1 = var1.isRow;
                if(var1) { _fun0029_ip = 60; continue _fun0029 }
 44:
                var2 = var5.renderSectionHeader;
                var1 = true;
                var1 = var2.bind(var5)(var4, var1);
                _fun0029_ip = 74; continue _fun0029;
 60:
                var3 = var5.renderItem;
                var2 = true;
                var1 = var3.bind(var5)(var4, var2);
 74:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'render';
        var5['key'] = var7;
        var6 = function value() {
            _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
 0:
                var7 = this;
                var1 = var7.state;
                var9 = var1.active;
                var1 = var1.panResponder;
                var2 = var7.props;
                var10 = var2.scrollEnabled;
                var4 = _closure1_slot12;
                var3 = _closure1_slot8;
                var2 = {};
                var6 = {};
                var8 = 1;
                var6['flex'] = var8;
                var2['style'] = var6;
                var6 = var7.handleWrapperLayout;
                var2['onLayout'] = var6;
                var6 = var7.setWrapperRef;
                var2['ref'] = var6;
                var8 = _closure1_slot13;
                var6 = _closure1_slot11;
                var5 = {};
                var11 = true;
                var5['enableEmptySections'] = var11;
                var12 = var7.props;
                var13 = var5;
                var11 = copyDataProperties(var13, var12);
                var12 = var1.panHandlers;
                var13 = var5;
                var1 = copyDataProperties(var13, var12);
                var11 = var7.setListRef;
                var1 = 'ref';
                var5[var1] = var11;
                var11 = var7.handleScroll;
                var1 = 'onScroll';
                var5[var1] = var11;
                var11 = var7.handleContentSizeChange;
                var1 = 'onContentSizeChange';
                var5[var1] = var11;
                var11 = var7.handleListLayout;
                var1 = 'onLayout';
                var5[var1] = var11;
                var1 = null;
                var9 = var1 == var9;
                if(!var9) { _fun0030_ip = 197; continue _fun0030 }
 191:
                var1 = false;
                var9 = var1 !== var10;
 197:
                var1 = 'scrollEnabled';
                var5[var1] = var9;
                var9 = var7.renderItem;
                var1 = 'renderItem';
                var5[var1] = var9;
                var9 = var7.renderSectionHeader;
                var1 = 'renderSectionHeader';
                var5[var1] = var9;
                var9 = false;
                var1 = 'stickySectionHeadersEnabled';
                var5[var1] = var9;
                var9 = 20;
                var1 = 'initialNumToRender';
                var5[var1] = var9;
                var9 = function keyExtractor(arg1) {
                    var1 = arg1;
                    var1 = var1.key;
                    return var1;
                };
                var1 = 'keyExtractor';
                var5[var1] = var9;
                var9 = var7.getItemLayout;
                var1 = 'getItemLayout';
                var5[var1] = var9;
                var1 = undefined;
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
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/common/SortableChannels.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();