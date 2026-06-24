// app/modules/in_app_reports/native/components/NodeView.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var7 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var6;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3["@@iterator"];
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
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
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot20;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot20;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
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
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
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
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = function HeaderView(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var2 = var1.node;
            var13 = var2.header;
            var15 = var2.subheader;
            var10 = var2.description;
            var16 = var1.headerRef;
            var1 = _closure1_slot18;
            var4 = undefined;
            var11 = var1.bind(var4)();
            var2 = _closure1_slot1;
            var3 = _closure1_slot3;
            var1 = 13;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = function() {
                var3 = _closure1_slot2;
                var2 = _closure1_slot3;
                var1 = 14;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.getParser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var14 = var2.bind(var4)(var1);
            var3 = _closure1_slot17;
            var2 = _closure1_slot6;
            var1 = {};
            var5 = var11.headerContainer;
            var1['style'] = var5;
            var9 = null;
            var6 = var9 != var13;
            if(!var6) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var5 = '';
            var6 = var5 !== var13;
case 36:
            if(!var6) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var12 = _closure1_slot16;
            var8 = _closure1_slot0;
            var17 = _closure1_slot3;
            var5 = 15;
            var5 = var17[var5];
            var5 = var8.bind(var4)(var5);
            var8 = var5.Text;
            var5 = {'ref': null, 'style': null, 'variant': 'heading-xl/extrabold', 'color': 'mobile-text-heading-primary', 'accessibilityRole': 'header'};
            var5['ref'] = var16;
            var16 = var11.header;
            var5['style'] = var16;
            var5['children'] = var13;
            var6 = var12.bind(var4)(var8, var5);
case 38:
            var5 = new Array(3);
            var5[0] = var6;
            var8 = var9 != var15;
            var6 = null;
            if(!var8) { _fun0004_ip = 25; continue _fun0004 }
case 40:
            var12 = var15.length;
            var8 = 0;
            var8 = var12 > var8;
            var6 = null;
            if(!var8) { _fun0004_ip = 25; continue _fun0004 }
case 41:
            var13 = _closure1_slot16;
            var12 = _closure1_slot0;
            var16 = _closure1_slot3;
            var8 = 15;
            var8 = var16[var8];
            var8 = var12.bind(var4)(var8);
            var12 = var8.Text;
            var8 = {'style': null, 'variant': 'text-md/medium', 'color': 'text-default'};
            var16 = var11.subheader;
            var8['style'] = var16;
            var14 = var14.bind(var4)(var15);
            var8['children'] = var14;
            var6 = var13.bind(var4)(var12, var8);
case 25:
            var5[1] = var6;
            var8 = var9 != var10;
            var6 = null;
            if(!var8) { _fun0004_ip = 42; continue _fun0004 }
case 43:
            var12 = var10.length;
            var8 = 0;
            var8 = var12 > var8;
            var6 = null;
            if(!var8) { _fun0004_ip = 42; continue _fun0004 }
case 44:
            var9 = _closure1_slot16;
            var8 = _closure1_slot0;
            var12 = _closure1_slot3;
            var7 = 15;
            var7 = var12[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.Text;
            var7 = {'style': null, 'variant': 'text-xs/medium', 'color': 'text-default'};
            var11 = var11.description;
            var7['style'] = var11;
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 42:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = function InfoView(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var1 = var1.node;
            var11 = var1.info;
            var1 = _closure1_slot18;
            var5 = undefined;
            var12 = var1.bind(var5)();
            var2 = _closure1_slot1;
            var3 = _closure1_slot3;
            var1 = 13;
            var1 = var3[var1];
            var2 = var2.bind(var5)(var1);
            var1 = function() {
                var3 = _closure1_slot2;
                var2 = _closure1_slot3;
                var1 = 14;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.getParser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var10 = var2.bind(var5)(var1);
            var1 = null;
            var2 = var1 == var11;
            if(var2) { _fun0005_ip = 45; continue _fun0005 }
case 46:
            var4 = _closure1_slot17;
            var3 = _closure1_slot6;
            var2 = {};
            var8 = var12.infoBox;
            var6 = new Array(2);
            var6[0] = var8;
            var9 = {};
            var8 = _closure1_slot0;
            var13 = _closure1_slot3;
            var14 = 16;
            var14 = var13[var14];
            var17 = var8.bind(var5)(var14);
            var16 = var17.hexWithOpacity;
            var14 = var12.infoBox;
            var15 = var14.backgroundColor;
            var14 = 0.1;
            var14 = var16.bind(var17)(var15, var14);
            var9['backgroundColor'] = var14;
            var6[1] = var9;
            var2['style'] = var6;
            var14 = _closure1_slot16;
            var6 = 17;
            var6 = var13[var6];
            var6 = var8.bind(var5)(var6);
            var9 = var6.CircleInformationIcon;
            var6 = {};
            var15 = 'md';
            var6['size'] = var15;
            var15 = var12.infoBox;
            var15 = var15.backgroundColor;
            var6['color'] = var15;
            var9 = var14.bind(var5)(var9, var6);
            var6 = new Array(2);
            var6[0] = var9;
            var9 = _closure1_slot16;
            var7 = 15;
            var7 = var13[var7];
            var7 = var8.bind(var5)(var7);
            var8 = var7.Text;
            var7 = {'style': null, 'variant': 'text-sm/normal', 'color': 'interactive-text-active'};
            var12 = var12.infoBoxText;
            var7['style'] = var12;
            var10 = var10.bind(var5)(var11);
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 45:
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = function ChildItem(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var5 = arg1;
            var7 = var5.child;
            var _closure2_slot0 = var7;
            var2 = var5.nodeMap;
            var14 = null;
            var4 = Object.create(var14);
            var6 = 0;
            var4['child'] = var6;
            var4['nodeMap'] = var6;
            var24 = {};
            var23 = var5;
            var22 = var4;
            var1 = copyDataProperties(var24, var23, var22);
            var _closure2_slot1 = var1;
            var1 = _closure1_slot18;
            var4 = undefined;
            var18 = var1.bind(var4)();
            var5 = _closure1_slot4;
            var1 = 2;
            var1 = var5.bind(var4)(var7, var1);
            var20 = var1[var6];
            var8 = 1;
            var1 = var1[var8];
            var10 = _closure1_slot5;
            var7 = var10.useState;
            var5 = function() {
                var1 = function() {
                    var3 = _closure2_slot1;
                    var2 = var3.onPress;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                return var1;
            };
            var7 = var7.bind(var10)(var5);
            var5 = _closure1_slot4;
            var5 = var5.bind(var4)(var7, var8);
            var5 = var5[var6];
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var6 = 18;
            var6 = var8[var6];
            var8 = var7.bind(var4)(var6);
            var7 = var8.useStateFromStores;
            var10 = _closure1_slot8;
            var6 = new Array(1);
            var6[0] = var10;
            var3 = function() {
                var3 = _closure1_slot8;
                var2 = var3.get;
                var1 = 'iar_show_report_sub_type_labels';
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var13 = var7.bind(var8)(var6, var3);
            var1 = var2[var1];
            var2 = var14 == var1;
            var17 = undefined;
            if(var2) { _fun0006_ip = 47; continue _fun0006 }
case 48:
            var17 = var1.report_type;
case 47:
            var3 = _closure1_slot16;
            var15 = _closure1_slot0;
            var12 = _closure1_slot3;
            var1 = 19;
            var1 = var12[var1];
            var1 = var15.bind(var4)(var1);
            var2 = var1.PressableHighlight;
            var1 = {};
            var6 = var18.childButton;
            var1['style'] = var6;
            var6 = 'button';
            var1['accessibilityRole'] = var6;
            var1['onPress'] = var5;
            var7 = _closure1_slot17;
            var6 = _closure1_slot6;
            var5 = {};
            var8 = var18.childContainer;
            var5['style'] = var8;
            var11 = _closure1_slot17;
            var10 = _closure1_slot6;
            var8 = {};
            var16 = var18.childContent;
            var8['style'] = var16;
            var16 = _closure1_slot16;
            var19 = 15;
            var12 = var12[var19];
            var12 = var15.bind(var4)(var12);
            var15 = var12.Text;
            var12 = {'style': null, 'variant': 'text-md/semibold', 'color': 'mobile-text-heading-primary'};
            var21 = var18.childButtonText;
            var12['style'] = var21;
            var12['children'] = var20;
            var15 = var16.bind(var4)(var15, var12);
            var12 = new Array(2);
            var12[0] = var15;
            if(!var13) { _fun0006_ip = 49; continue _fun0006 }
case 50:
            var13 = var14 != var17;
case 49:
            if(!var13) { _fun0006_ip = 51; continue _fun0006 }
case 52:
            var16 = _closure1_slot16;
            var15 = _closure1_slot0;
            var14 = _closure1_slot3;
            var14 = var14[var19];
            var14 = var15.bind(var4)(var14);
            var15 = var14.Text;
            var14 = {'style': null, 'variant': 'text-xs/normal', 'color': 'text-muted'};
            var18 = var18.debugText;
            var14['style'] = var18;
            var14['children'] = var17;
            var13 = var16.bind(var4)(var15, var14);
case 51:
            var12[1] = var13;
            var8['children'] = var12;
            var10 = var11.bind(var4)(var10, var8);
            var8 = new Array(2);
            var8[0] = var10;
            var11 = _closure1_slot16;
            var10 = _closure1_slot1;
            var12 = _closure1_slot3;
            var9 = 20;
            var9 = var12[var9];
            var10 = var10.bind(var4)(var9);
            var9 = {};
            var9 = var11.bind(var4)(var10, var9);
            var8[1] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var1 = function ChildrenView(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var2 = var1.node;
            var8 = var2.children;
            var2 = var1.onSelectChild;
            var _closure2_slot0 = var2;
            var1 = var1.nodeMap;
            var _closure2_slot1 = var1;
            var1 = _closure1_slot18;
            var5 = undefined;
            var7 = var1.bind(var5)();
            var9 = null;
            var3 = var9 == var8;
            var1 = null;
            if(var3) { _fun0007_ip = 53; continue _fun0007 }
case 54:
            var4 = var8.length;
            var3 = 0;
            var1 = null;
            if(!(var3 !== var4)) { _fun0007_ip = 53; continue _fun0007 }
case 55:
            var4 = _closure1_slot16;
            var3 = _closure1_slot6;
            var2 = {};
            var7 = var7.childrenContainer;
            var2['style'] = var7;
            var7 = var8.map;
            var6 = function(arg1) {
                var1 = arg1;
                var4 = _closure1_slot4;
                var5 = undefined;
                var3 = 2;
                var4 = var4.bind(var5)(var1, var3);
                var3 = 0;
                var9 = var4[var3];
                var3 = 1;
                var8 = var4[var3];
                var4 = _closure1_slot16;
                var3 = _closure1_slot23;
                var2 = {};
                var2['child'] = var1;
                var6 = _closure2_slot1;
                var2['nodeMap'] = var6;
                var1 = _closure2_slot0;
                var2['onPress'] = var1;
                var1 = global;
                var1 = var1.HermesInternal;
                var7 = var1.concat;
                var6 = '';
                var1 = '+';
                var1 = var7.bind(var6)(var9, var1, var8);
                var1 = var4.bind(var5)(var3, var2, var1);
                return var1;
            };
            var6 = var7.bind(var8)(var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 53:
            return var1;
        }
    };
    var _closure1_slot24 = var1;
    var1 = function getElementForType(arg1, arg2) {
        var2 = arg1;
        var3 = var2.elements;
        var2 = arg2;
        var _closure2_slot0 = var2;
        var2 = var3.find;
        var1 = function(arg1) {
            var1 = arg1;
            var2 = var1.type;
            var1 = _closure2_slot0;
            var1 = var2 === var1;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot25 = var1;
    var1 = function getElementsForType(arg1, arg2) {
        var2 = arg1;
        var3 = var2.elements;
        var2 = 'external_link';
        var _closure2_slot0 = var2;
        var2 = var3.filter;
        var1 = function(arg1) {
            var1 = arg1;
            var2 = var1.type;
            var1 = _closure2_slot0;
            var1 = var2 === var1;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot26 = var1;
    var1 = function hasAnyRemediationElement(arg1) {
        var1 = arg1;
        var3 = var1.elements;
        var2 = var3.some;
        var1 = function(arg1) {
            var1 = arg1;
            var3 = var1.type;
            var2 = _closure1_slot11;
            var1 = var2.includes;
            var1 = var1.bind(var2)(var3);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot27 = var1;
    var1 = function NullComponent() {
        var1 = null;
        return var1;
    };
    var _closure1_slot28 = var1;
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
    var4 = var13.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var11 = 1;
    var4 = var6[var11];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot6 = var7;
    var4 = var4.ScrollView;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.REMEDIATION_ELEMENT_TYPES;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.IN_APP_REPORTS_NODE;
    var _closure1_slot12 = var4;
    var14 = 8;
    var4 = var6[var14];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot13 = var7;
    var4 = var4.ChannelTypes;
    var _closure1_slot14 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Permissions;
    var _closure1_slot15 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot16 = var7;
    var4 = var4.jsxs;
    var _closure1_slot17 = var4;
    var4 = 11;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flex': 1, 'alignSelf': 'stretch', 'justifyContent': 'flex-start', 'alignItems': 'center', 'backgroundColor': null, 'marginTop': 30};
    var12 = 12;
    var10 = var6[var12];
    var10 = var13.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOWER;
    var9['backgroundColor'] = var10;
    var4['container'] = var9;
    var9 = {'flex': 1, 'alignSelf': 'stretch', 'marginTop': 24};
    var4['scrollView'] = var9;
    var9 = {'flex': 1, 'alignSelf': 'stretch', 'paddingHorizontal': 16};
    var4['childrenContainer'] = var9;
    var9 = {'alignSelf': 'stretch', 'marginBottom': 24, 'paddingHorizontal': 16};
    var4['headerContainer'] = var9;
    var9 = {'marginBottom': 8, 'textAlign': 'center'};
    var4['header'] = var9;
    var10 = 20;
    var9 = {'lineHeight': 20, 'marginBottom': 8, 'textAlign': 'center'};
    var4['subheader'] = var9;
    var9 = {'lineHeight': 16, 'marginBottom': 8, 'textAlign': 'center'};
    var4['description'] = var9;
    var9 = {'alignSelf': 'stretch', 'backgroundColor': null, 'borderRadius': null, 'borderColor': null, 'borderWidth': 1, 'padding': 8, 'flexDirection': 'row', 'marginBottom': 16, 'marginHorizontal': 16};
    var15 = var6[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.unsafe_rawColors;
    var15 = var15.BLUE_345;
    var9['backgroundColor'] = var15;
    var15 = var6[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.xs;
    var9['borderRadius'] = var15;
    var15 = var6[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.unsafe_rawColors;
    var15 = var15.BLUE_345;
    var9['borderColor'] = var15;
    var4['infoBox'] = var9;
    var9 = {'flex': 1, 'lineHeight': 18, 'marginStart': 8, 'marginTop': 3};
    var4['infoBoxText'] = var9;
    var9 = {};
    var9['marginBottom'] = var14;
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.xs;
    var9['borderRadius'] = var14;
    var4['childButton'] = var9;
    var9 = {'minHeight': 60, 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'flex-start', 'backgroundColor': null, 'paddingVertical': 16, 'paddingStart': 16, 'paddingEnd': 8};
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_SURFACE_HIGH;
    var9['backgroundColor'] = var14;
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.xs;
    var9['borderRadius'] = var12;
    var4['childContainer'] = var9;
    var9 = {};
    var9['flex'] = var11;
    var4['childContent'] = var9;
    var9 = {};
    var9['lineHeight'] = var10;
    var4['childButtonText'] = var9;
    var9 = {'marginTop': 4, 'lineHeight': 16};
    var4['debugText'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot18 = var4;
    var4 = 53;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/in_app_reports/native/components/NodeView.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function NodeView(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var14 = arg1;
            var _closure2_slot0 = var14;
            var1 = _closure1_slot18;
            var4 = undefined;
            var19 = var1.bind(var4)();
            var3 = _closure1_slot0;
            var5 = _closure1_slot3;
            var1 = 21;
            var1 = var5[var1];
            var2 = var3.bind(var4)(var1);
            var1 = var2.useNavigation;
            var1 = var1.bind(var2)();
            var _closure2_slot1 = var1;
            var2 = 22;
            var2 = var5[var2];
            var7 = var3.bind(var4)(var2);
            var2 = var7.useIsScreenReaderEnabled;
            var2 = var2.bind(var7)();
            var _closure2_slot2 = var2;
            var8 = _closure1_slot5;
            var7 = var8.useRef;
            var13 = null;
            var30 = var7.bind(var8)(var13);
            var _closure2_slot3 = var30;
            var8 = _closure1_slot5;
            var7 = var8.useRef;
            var31 = false;
            var7 = var7.bind(var8)(var31);
            var _closure2_slot4 = var7;
            var10 = _closure1_slot5;
            var8 = var10.useEffect;
            var7 = new Array(2);
            var7[0] = var1;
            var7[1] = var2;
            var2 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var5 = function focusHeader() {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                            var1 = _closure2_slot4;
                            var1 = var1.current;
                            if(var1) { _fun0010_ip = 56; continue _fun0010 }
case 57:
                            var2 = _closure2_slot4;
                            var1 = true;
                            var2['current'] = var1;
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var1 = 23;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.setAccessibilityFocus;
                            var1 = {};
                            var4 = _closure2_slot3;
                            var1['ref'] = var4;
                            var4 = 300;
                            var1['delay'] = var4;
                            var1 = var2.bind(var3)(var1);
case 56:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var _closure3_slot2 = var5;
                    var3 = _closure2_slot2;
                    if(var3) { _fun0009_ip = 58; continue _fun0009 }
case 59:
                    var3 = undefined;
                    return var3;
case 58:
                    var6 = _closure2_slot1;
                    var4 = var6.addListener;
                    var3 = 'transitionEnd';
                    var2 = function(arg1) {
                        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                            var1 = arg1;
                            var2 = var1.data;
                            var1 = null;
                            var4 = var1 == var2;
                            var1 = undefined;
                            var3 = undefined;
                            if(var4) { _fun0011_ip = 60; continue _fun0011 }
case 59:
                            var3 = var2.closing;
case 60:
                            var2 = true;
                            if(!(var2 !== var3)) { _fun0011_ip = 61; continue _fun0011 }
case 33:
                            var2 = _closure3_slot2;
                            var2 = var2.bind(var1)();
case 61:
                            return var1;
                        }
                    };
                    var2 = var4.bind(var6)(var3, var2);
                    var _closure3_slot0 = var2;
                    var2 = global;
                    var4 = var2.setTimeout;
                    var3 = undefined;
                    var2 = 500;
                    var2 = var4.bind(var3)(var5, var2);
                    var _closure3_slot1 = var2;
                    var1 = function() {
                        var3 = _closure3_slot0;
                        var1 = undefined;
                        var3 = var3.bind(var1)();
                        var3 = global;
                        var3 = var3.clearTimeout;
                        var2 = _closure3_slot1;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    return var1;
                }
            };
            var2 = var8.bind(var10)(var2, var7);
            var11 = var14.node;
            var _closure2_slot5 = var11;
            var27 = var14.reportType;
            var _closure2_slot6 = var27;
            var26 = var14.reportSubType;
            var25 = var14.history;
            var _closure2_slot7 = var25;
            var23 = var14.nodeMap;
            var _closure2_slot8 = var23;
            var21 = var14.closeModal;
            var _closure2_slot9 = var21;
            var35 = var14.addOnCloseCallback;
            var8 = var14.onSubmit;
            var _closure2_slot10 = var8;
            var28 = var14.reportId;
            var22 = var14.onNavigate;
            var _closure2_slot11 = var22;
            var12 = _closure1_slot5;
            var10 = var12.useMemo;
            var7 = new Array(1);
            var7[0] = var27;
            var2 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var1 = _closure2_slot6;
                    var4 = var1.name;
                    var3 = 'message';
                    var1 = undefined;
                    if(!(var3 === var4)) { _fun0012_ip = 62; continue _fun0012 }
case 63:
                    var2 = _closure2_slot6;
                    var2 = var2.record;
                    var1 = var2.channel_id;
case 62:
                    return var1;
                }
            };
            var37 = var10.bind(var12)(var2, var7);
            var2 = _closure1_slot25;
            var7 = 'checkbox';
            var16 = var2.bind(var4)(var11, var7);
            var _closure2_slot12 = var16;
            var7 = 'text_line_resource';
            var36 = var2.bind(var4)(var11, var7);
            var7 = 'text';
            var34 = var2.bind(var4)(var11, var7);
            var7 = 24;
            var7 = var5[var7];
            var7 = var3.bind(var4)(var7);
            var7 = var7.ReportMenuTypeSets;
            var12 = var7.REPORT_TO_MOD;
            var10 = var12.has;
            var7 = var27.name;
            var18 = var10.bind(var12)(var7);
            var10 = _closure1_slot5;
            var7 = var10.useState;
            var10 = var7.bind(var10)(var31);
            var7 = _closure1_slot4;
            var24 = 2;
            var7 = var7.bind(var4)(var10, var24);
            var15 = 0;
            var12 = var7[var15];
            var20 = 1;
            var7 = var7[var20];
            var _closure2_slot13 = var7;
            var10 = _closure1_slot5;
            var7 = var10.useState;
            var10 = var7.bind(var10)(var31);
            var7 = _closure1_slot4;
            var7 = var7.bind(var4)(var10, var24);
            var29 = var7[var15];
            var _closure2_slot14 = var29;
            var7 = var7[var20];
            var _closure2_slot15 = var7;
            var17 = _closure1_slot5;
            var10 = var17.useState;
            var7 = function() {
                var1 = {};
                return var1;
            };
            var10 = var10.bind(var17)(var7);
            var7 = _closure1_slot4;
            var7 = var7.bind(var4)(var10, var24);
            var17 = var7[var15];
            var _closure2_slot16 = var17;
            var7 = var7[var20];
            var _closure2_slot17 = var7;
            var10 = _closure1_slot5;
            var7 = var10.useState;
            var10 = var7.bind(var10)(var31);
            var7 = _closure1_slot4;
            var7 = var7.bind(var4)(var10, var24);
            var10 = var7[var15];
            var7 = var7[var20];
            var _closure2_slot18 = var7;
            var31 = _closure1_slot5;
            var24 = var31.useCallback;
            var20 = new Array(3);
            var20[0] = var11;
            var20[1] = var16;
            var20[2] = var17;
            var7 = function(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var1 = {};
                    var2 = _closure2_slot5;
                    var2 = var2.id;
                    var1['nodeRef'] = var2;
                    var2 = arg1;
                    var1['destination'] = var2;
                    var3 = _closure2_slot12;
                    var2 = null;
                    var3 = var2 != var3;
                    var2 = undefined;
                    if(!var3) { _fun0013_ip = 64; continue _fun0013 }
case 65:
                    var3 = {};
                    var5 = _closure2_slot12;
                    var5 = var5.name;
                    var3['name'] = var5;
                    var4 = _closure2_slot16;
                    var3['state'] = var4;
                    var2 = var3;
case 64:
                    var1['multiSelect'] = var2;
                    return var1;
                }
            };
            var7 = var24.bind(var31)(var7, var20);
            var _closure2_slot19 = var7;
            var32 = _closure1_slot5;
            var31 = var32.useEffect;
            var24 = new Array(1);
            var24[0] = var16;
            var20 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var3 = _closure2_slot12;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0014_ip = 66; continue _fun0014 }
case 57:
                    var2 = _closure2_slot12;
                    var2 = var2.data;
                    if(!(var1 != var2)) { _fun0014_ip = 66; continue _fun0014 }
case 34:
                    var11 = function _loop(arg1, arg2) {
                        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                            var2 = arg1;
                            var _closure4_slot0 = var2;
                            var2 = arg2;
                            var _closure4_slot1 = var2;
                            var3 = _closure3_slot0;
                            var2 = true;
                            if(!(var2 === var3)) { _fun0015_ip = 67; continue _fun0015 }
case 68:
                            var3 = _closure2_slot17;
                            var2 = undefined;
                            var1 = function(arg1) {
                                var1 = {};
                                var4 = arg1;
                                var5 = var1;
                                var2 = copyDataProperties(var5, var4);
                                var3 = _closure4_slot0;
                                var2 = _closure4_slot1;
                                var1[2] = var2;
                                return var1;
                            };
                            var1 = var3.bind(var2)(var1);
case 67:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var1 = _closure1_slot19;
                    var9 = undefined;
                    var8 = var1.bind(var9)(var2);
                    var2 = var8.bind(var9)();
                    var1 = var2.done;
                    var7 = 4;
                    var6 = 0;
                    var5 = 1;
                    var4 = 2;
                    var3 = 3;
                    if(var1) { _fun0014_ip = 66; continue _fun0014 }
case 55:
                    var13 = var2.value;
                    var1 = _closure1_slot4;
                    var14 = var1.bind(var9)(var13, var7);
                    var13 = var14[var6];
                    var1 = var14[var5];
                    var15 = var14[var4];
                    var14 = var14[var3];
                    var _closure3_slot0 = var14;
                    var1 = var11.bind(var9)(var13, var1);
                    var13 = var8.bind(var9)();
                    var1 = var13.done;
                    var2 = var13;
                    if(!var1) { _fun0014_ip = 55; continue _fun0014 }
case 66:
                    var1 = undefined;
                    return var1;
                }
            };
            var20 = var31.bind(var32)(var20, var24);
            var31 = _closure1_slot5;
            var24 = var31.useEffect;
            var20 = new Array(2);
            var20[0] = var1;
            var20[1] = var14;
            var14 = function() {
                var4 = _closure2_slot1;
                var3 = var4.addListener;
                var2 = 'beforeRemove';
                var1 = function() {
                    _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                        var2 = _closure2_slot0;
                        var3 = var2.onNavigate;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0016_ip = 69; continue _fun0016 }
case 70:
                        var3 = _closure2_slot0;
                        var2 = var3.onNavigate;
                        var1 = '..';
                        var1 = var2.bind(var3)(var1);
case 69:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var14 = var24.bind(var31)(var14, var20);
            var24 = _closure1_slot5;
            var20 = var24.useEffect;
            var31 = var11.is_auto_submit;
            var14 = new Array(4);
            var14[0] = var31;
            var14[1] = var29;
            var14[2] = var8;
            var8 = var11.id;
            var14[3] = var8;
            var8 = function() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var1 = _closure2_slot5;
                    var1 = var1.is_auto_submit;
                    if(!var1) { _fun0017_ip = 31; continue _fun0017 }
case 71:
                    var2 = _closure2_slot14;
                    var1 = !var2;
case 31:
                    if(!var1) { _fun0017_ip = 72; continue _fun0017 }
case 73:
                    var2 = _closure2_slot15;
                    var3 = undefined;
                    var1 = true;
                    var1 = var2.bind(var3)(var1);
                    var2 = _closure2_slot10;
                    var1 = {};
                    var4 = _closure2_slot5;
                    var5 = var4.id;
                    var1['nodeRef'] = var5;
                    var5 = var4.id;
                    var4 = [''];
                    var4[1] = var5;
                    var1['destination'] = var4;
                    var1 = var2.bind(var3)(var1);
case 72:
                    var1 = undefined;
                    return var1;
                }
            };
            var8 = var20.bind(var24)(var8, var14);
            var20 = _closure1_slot5;
            var14 = var20.useCallback;
            var8 = new Array(8);
            var8[0] = var11;
            var8[1] = var23;
            var8[2] = var1;
            var8[3] = var25;
            var8[4] = var22;
            var8[5] = var21;
            var8[6] = var27;
            var8[7] = var7;
            var7 = function(arg1) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var6 = arg1;
                    var3 = _closure1_slot4;
                    var1 = undefined;
                    var2 = 2;
                    var2 = var3.bind(var1)(var6, var2);
                    var11 = 1;
                    var5 = var2[var11];
                    var3 = _closure2_slot19;
                    var12 = var3.bind(var1)(var6);
                    var3 = _closure2_slot8;
                    var3 = var3[var5];
                    var5 = null;
                    if(!(var5 != var3)) { _fun0018_ip = 74; continue _fun0018 }
case 75:
                    var7 = _closure1_slot25;
                    var6 = 'skip';
                    var6 = var7.bind(var1)(var3, var6);
                    if(!(var5 != var6)) { _fun0018_ip = 76; continue _fun0018 }
case 77:
                    var6 = var3.button;
                    var8 = var5 == var6;
                    var7 = undefined;
                    if(var8) { _fun0018_ip = 78; continue _fun0018 }
case 79:
                    var7 = var6.type;
case 78:
                    var6 = 'next';
                    if(!(var6 !== var7)) { _fun0018_ip = 80; continue _fun0018 }
case 76:
                    var6 = _closure2_slot6;
                    var7 = var6.name;
                    var8 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var9 = 25;
                    var6 = var6[var9];
                    var6 = var8.bind(var1)(var6);
                    var6 = var6.ReportNames;
                    var6 = var6.MESSAGE;
                    if(!(var7 !== var6)) { _fun0018_ip = 81; continue _fun0018 }
case 82:
                    var6 = _closure2_slot6;
                    var7 = var6.name;
                    var8 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var6 = var6[var9];
                    var6 = var8.bind(var1)(var6);
                    var6 = var6.ReportNames;
                    var6 = var6.FIRST_DM;
                    if(!(var7 === var6)) { _fun0018_ip = 83; continue _fun0018 }
case 81:
                    var10 = _closure2_slot6;
                    var6 = var10.record;
                    var13 = var6.id;
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot3;
                    var6 = 26;
                    var6 = var8[var6];
                    var9 = var7.bind(var1)(var6);
                    var8 = var9.trackWithMetadata;
                    var6 = _closure1_slot13;
                    var7 = var6.IAR_NAVIGATE;
                    var6 = {};
                    var6['message_id'] = var13;
                    var10 = var10.name;
                    var6['content_type'] = var10;
                    var10 = var3.report_type;
                    var6['report_sub_type'] = var10;
                    var10 = _closure2_slot5;
                    var10 = var10.id;
                    var6['current_node'] = var10;
                    var10 = var3.id;
                    var6['next_node'] = var10;
                    var6 = var8.bind(var9)(var7, var6);
case 83:
                    var8 = _closure2_slot1;
                    var7 = var8.push;
                    var6 = _closure1_slot12;
                    var4 = {};
                    var4['node'] = var3;
                    var15 = _closure2_slot7;
                    var9 = new Array(1);
                    var14 = 0;
                    var16 = var9;
                    var10 = arraySpread(var16, var15, var14);
                    var9[9] = var12;
                    var10 = var10 + var11;
                    var4['history'] = var9;
                    var4 = var7.bind(var8)(var6, var4);
                    var4 = _closure2_slot11;
                    if(!(var5 != var4)) { _fun0018_ip = 84; continue _fun0018 }
case 85:
                    var5 = _closure2_slot11;
                    var4 = var3.key;
                    var4 = var5.bind(var1)(var4);
                    _fun0018_ip = 84; continue _fun0018;
case 80:
                    var4 = _closure2_slot20;
                    var3 = var3.button;
                    var5 = var3.target;
                    var3 = [''];
                    var3[1] = var5;
                    var3 = var4.bind(var1)(var3);
                    return var3;
case 74:
                    var2 = _closure2_slot9;
                    var2 = var2.bind(var1)();
case 84:
                    return var1;
                }
            };
            var24 = var14.bind(var20)(var7, var8);
            var _closure2_slot20 = var24;
            var14 = _closure1_slot5;
            var8 = var14.useEffect;
            var7 = new Array(3);
            var7[0] = var11;
            var7[1] = var25;
            var7[2] = var1;
            var1 = function() {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var1 = _closure2_slot5;
                    var3 = var1.button;
                    var5 = null;
                    var6 = var5 == var3;
                    var1 = undefined;
                    var4 = undefined;
                    if(var6) { _fun0019_ip = 86; continue _fun0019 }
case 73:
                    var4 = var3.type;
case 86:
                    var3 = 'done';
                    var3 = var3 === var4;
                    if(var3) { _fun0019_ip = 87; continue _fun0019 }
case 65:
                    var4 = _closure2_slot5;
                    var4 = var4.button;
                    var6 = var5 == var4;
                    var5 = undefined;
                    if(var6) { _fun0019_ip = 88; continue _fun0019 }
case 7:
                    var5 = var4.type;
case 88:
                    var4 = 'cancel';
                    var3 = var4 === var5;
case 87:
                    if(var3) { _fun0019_ip = 89; continue _fun0019 }
case 90:
                    var4 = _closure2_slot7;
                    var5 = var4.length;
                    var4 = 0;
                    var3 = var4 === var5;
case 89:
                    if(!var3) { _fun0019_ip = 91; continue _fun0019 }
case 78:
                    var4 = _closure2_slot1;
                    var3 = var4.setOptions;
                    var2 = {};
                    var5 = _closure1_slot28;
                    var2['headerLeft'] = var5;
                    var2 = var3.bind(var4)(var2);
case 91:
                    return var1;
                }
            };
            var1 = var8.bind(var14)(var1, var7);
            var14 = _closure1_slot5;
            var8 = var14.useCallback;
            var7 = function(arg1) {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                    var5 = arg1;
                    var4 = _closure1_slot9;
                    var2 = var4.getChannel;
                    var1 = var5.getChannelId;
                    var1 = var1.bind(var5)();
                    var7 = var2.bind(var4)(var1);
                    var1 = null;
                    var1 = var1 != var7;
                    if(!var1) { _fun0020_ip = 92; continue _fun0020 }
case 93:
                    var4 = var7.type;
                    var2 = _closure1_slot14;
                    var2 = var2.DM;
                    var2 = var4 !== var2;
                    if(!var2) { _fun0020_ip = 94; continue _fun0020 }
case 7:
                    var5 = var7.type;
                    var4 = _closure1_slot14;
                    var4 = var4.GROUP_DM;
                    var2 = var5 !== var4;
case 94:
                    if(!var2) { _fun0020_ip = 95; continue _fun0020 }
case 96:
                    var6 = _closure1_slot10;
                    var5 = var6.canWithPartialContext;
                    var3 = _closure1_slot15;
                    var4 = var3.MANAGE_MESSAGES;
                    var3 = {};
                    var7 = var7.id;
                    var3['channelId'] = var7;
                    var2 = var5.bind(var6)(var4, var3);
case 95:
                    var1 = var2;
case 92:
                    return var1;
                }
            };
            var1 = new Array(0);
            var33 = var8.bind(var14)(var7, var1);
            var1 = 28;
            var1 = var5[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.useIarReportSettingsUpsells;
            var29 = var1.bind(var3)(var26);
            var1 = 'ignore_users';
            var1 = var2.bind(var4)(var11, var1);
            var32 = var13 != var1;
            if(!var32) { _fun0008_ip = 97; continue _fun0008 }
case 98:
            var2 = var27.name;
            var1 = 'message';
            var1 = var1 === var2;
            if(var1) { _fun0008_ip = 99; continue _fun0008 }
case 100:
            var3 = var27.name;
            var2 = 'first_dm';
            var1 = var2 === var3;
case 99:
            if(var1) { _fun0008_ip = 101; continue _fun0008 }
case 102:
            var3 = var27.name;
            var2 = 'user';
            var1 = var2 === var3;
case 101:
            if(var1) { _fun0008_ip = 103; continue _fun0008 }
case 104:
            var3 = var27.name;
            var2 = 'report_to_mod_message';
            var1 = var2 === var3;
case 103:
            var32 = var1;
case 97:
            var3 = _closure1_slot0;
            var5 = _closure1_slot3;
            var1 = 29;
            var1 = var5[var1];
            var2 = var3.bind(var4)(var1);
            var1 = var2.useUserIsTeen;
            var31 = var1.bind(var2)();
            var2 = 30;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useActiveLinkUsers;
            var39 = var2.bind(var3)();
            if(!var31) { _fun0008_ip = 105; continue _fun0008 }
case 106:
            var1 = var39.length;
            var31 = var1 > var15;
case 105:
            if(!var31) { _fun0008_ip = 107; continue _fun0008 }
case 108:
            var2 = _closure1_slot25;
            var1 = 'share_with_parents';
            var1 = var2.bind(var4)(var11, var1);
            var31 = var13 != var1;
case 107:
            var3 = _closure1_slot17;
            var2 = _closure1_slot0;
            var22 = _closure1_slot3;
            var1 = 31;
            var1 = var22[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.SafeAreaPaddingView;
            var1 = {'style': null, 'bottom': true, 'top': true};
            var5 = var19.container;
            var1['style'] = var5;
            var14 = true;
            var8 = _closure1_slot17;
            var7 = _closure1_slot7;
            var5 = {};
            var19 = var19.scrollView;
            var5['style'] = var19;
            var21 = _closure1_slot16;
            var20 = _closure1_slot1;
            var19 = 32;
            var19 = var22[var19];
            var20 = var20.bind(var4)(var19);
            var19 = {};
            var38 = _closure1_slot25;
            var22 = 'success';
            var22 = var38.bind(var4)(var11, var22);
            var19['element'] = var22;
            var20 = var21.bind(var4)(var20, var19);
            var19 = new Array(17);
            var19[0] = var20;
            var22 = _closure1_slot16;
            var21 = _closure1_slot21;
            var20 = {};
            var20['node'] = var11;
            var20['headerRef'] = var30;
            var20 = var22.bind(var4)(var21, var20);
            var19[1] = var20;
            var22 = _closure1_slot16;
            var21 = _closure1_slot22;
            var20 = {};
            var20['node'] = var11;
            var20 = var22.bind(var4)(var21, var20);
            var19[2] = var20;
            var21 = var13 != var36;
            var20 = null;
            if(!var21) { _fun0008_ip = 109; continue _fun0008 }
case 110:
            var30 = _closure1_slot16;
            var22 = _closure1_slot1;
            var38 = _closure1_slot3;
            var21 = 33;
            var21 = var38[var21];
            var22 = var22.bind(var4)(var21);
            var21 = {};
            var21['element'] = var36;
            var20 = var30.bind(var4)(var22, var21);
case 109:
            var19[3] = var20;
            var20 = var13 != var34;
            if(!var20) { _fun0008_ip = 111; continue _fun0008 }
case 112:
            var30 = _closure1_slot16;
            var22 = _closure1_slot1;
            var36 = _closure1_slot3;
            var21 = 34;
            var21 = var36[var21];
            var22 = var22.bind(var4)(var21);
            var21 = {};
            var21['element'] = var34;
            var20 = var30.bind(var4)(var22, var21);
case 111:
            var19[4] = var20;
            var21 = _closure1_slot25;
            var20 = 'message_preview';
            var20 = var21.bind(var4)(var11, var20);
            var21 = var13 == var20;
            var20 = null;
            if(var21) { _fun0008_ip = 113; continue _fun0008 }
case 114:
            var22 = var27.name;
            var21 = 'message';
            if(!(var21 !== var22)) { _fun0008_ip = 115; continue _fun0008 }
case 116:
            var22 = var27.name;
            var21 = 'first_dm';
            if(!(var21 !== var22)) { _fun0008_ip = 115; continue _fun0008 }
case 117:
            var22 = var27.name;
            var21 = 'report_to_mod_message';
            var20 = null;
            if(!(var21 === var22)) { _fun0008_ip = 113; continue _fun0008 }
case 115:
            var30 = _closure1_slot16;
            var22 = _closure1_slot1;
            var34 = _closure1_slot3;
            var21 = 35;
            var21 = var34[var21];
            var22 = var22.bind(var4)(var21);
            var21 = {};
            var34 = var27.record;
            var21['message'] = var34;
            var20 = var30.bind(var4)(var22, var21);
case 113:
            var19[5] = var20;
            var21 = _closure1_slot25;
            var20 = 'user_preview';
            var20 = var21.bind(var4)(var11, var20);
            var21 = var13 != var20;
            var20 = null;
            if(!var21) { _fun0008_ip = 118; continue _fun0008 }
case 119:
            var22 = var27.name;
            var21 = 'user';
            var20 = null;
            if(!(var21 === var22)) { _fun0008_ip = 118; continue _fun0008 }
case 120:
            var30 = _closure1_slot16;
            var22 = _closure1_slot1;
            var34 = _closure1_slot3;
            var21 = 36;
            var21 = var34[var21];
            var22 = var22.bind(var4)(var21);
            var21 = {};
            var34 = var27.record;
            var21['user'] = var34;
            var20 = var30.bind(var4)(var22, var21);
case 118:
            var19[6] = var20;
            var21 = _closure1_slot25;
            var20 = 'channel_preview';
            var20 = var21.bind(var4)(var11, var20);
            var21 = var13 != var20;
            var20 = null;
            if(!var21) { _fun0008_ip = 121; continue _fun0008 }
case 122:
            var22 = var27.name;
            var21 = 'stage_channel';
            var20 = null;
            if(!(var21 === var22)) { _fun0008_ip = 121; continue _fun0008 }
case 123:
            var30 = _closure1_slot16;
            var22 = _closure1_slot1;
            var34 = _closure1_slot3;
            var21 = 37;
            var21 = var34[var21];
            var22 = var22.bind(var4)(var21);
            var21 = {};
            var34 = var27.record;
            var21['stageInstance'] = var34;
            var20 = var30.bind(var4)(var22, var21);
case 121:
            var19[7] = var20;
            var21 = _closure1_slot25;
            var20 = 'guild_preview';
            var20 = var21.bind(var4)(var11, var20);
            var21 = var13 != var20;
            var20 = null;
            if(!var21) { _fun0008_ip = 124; continue _fun0008 }
case 125:
            var22 = var27.name;
            var21 = 'guild';
            var20 = null;
            if(!(var21 === var22)) { _fun0008_ip = 124; continue _fun0008 }
case 126:
            var30 = _closure1_slot16;
            var22 = _closure1_slot1;
            var34 = _closure1_slot3;
            var21 = 38;
            var21 = var34[var21];
            var22 = var22.bind(var4)(var21);
            var21 = {};
            var34 = var27.record;
            var21['guild'] = var34;
            var20 = var30.bind(var4)(var22, var21);
case 124:
            var19[8] = var20;
            var21 = _closure1_slot25;
            var20 = 'guild_scheduled_event_preview';
            var20 = var21.bind(var4)(var11, var20);
            var21 = var13 != var20;
            var20 = null;
            if(!var21) { _fun0008_ip = 127; continue _fun0008 }
case 128:
            var22 = var27.name;
            var21 = 'guild_scheduled_event';
            var20 = null;
            if(!(var21 === var22)) { _fun0008_ip = 127; continue _fun0008 }
case 129:
            var30 = _closure1_slot16;
            var22 = _closure1_slot1;
            var34 = _closure1_slot3;
            var21 = 39;
            var21 = var34[var21];
            var22 = var22.bind(var4)(var21);
            var21 = {};
            var34 = var27.record;
            var21['event'] = var34;
            var20 = var30.bind(var4)(var22, var21);
case 127:
            var19[9] = var20;
            var21 = _closure1_slot25;
            var20 = 'guild_discovery_preview';
            var20 = var21.bind(var4)(var11, var20);
            var21 = var13 != var20;
            var20 = null;
            if(!var21) { _fun0008_ip = 130; continue _fun0008 }
case 131:
            var22 = var27.name;
            var21 = 'guild_discovery';
            var20 = null;
            if(!(var21 === var22)) { _fun0008_ip = 130; continue _fun0008 }
case 132:
            var30 = _closure1_slot16;
            var22 = _closure1_slot1;
            var34 = _closure1_slot3;
            var21 = 40;
            var21 = var34[var21];
            var22 = var22.bind(var4)(var21);
            var21 = {};
            var34 = var27.record;
            var21['guild'] = var34;
            var20 = var30.bind(var4)(var22, var21);
case 130:
            var19[10] = var20;
            var22 = _closure1_slot16;
            var21 = _closure1_slot1;
            var30 = _closure1_slot3;
            var20 = 41;
            var20 = var30[var20];
            var21 = var21.bind(var4)(var20);
            var20 = {};
            var34 = _closure1_slot25;
            var30 = 'breadcrumbs';
            var30 = var34.bind(var4)(var11, var30);
            var20['element'] = var30;
            var30 = var27.name;
            var20['menuName'] = var30;
            var20['history'] = var25;
            var20 = var22.bind(var4)(var21, var20);
            var19[11] = var20;
            var20 = _closure1_slot27;
            var20 = var20.bind(var4)(var11);
            if(!var20) { _fun0008_ip = 133; continue _fun0008 }
case 134:
            var25 = _closure1_slot17;
            var22 = _closure1_slot1;
            var30 = _closure1_slot3;
            var21 = 42;
            var21 = var30[var21];
            var22 = var22.bind(var4)(var21);
            var21 = {};
            var34 = var32;
            if(!var34) { _fun0008_ip = 135; continue _fun0008 }
case 136:
            var38 = _closure1_slot16;
            var36 = _closure1_slot1;
            var40 = _closure1_slot3;
            var30 = 43;
            var30 = var40[var30];
            var36 = var36.bind(var4)(var30);
            var30 = {};
            var41 = var27.name;
            var40 = 'user';
            if(!(var40 !== var41)) { _fun0008_ip = 137; continue _fun0008 }
case 138:
            var40 = var27.record;
            var40 = var40.author;
            _fun0008_ip = 139; continue _fun0008;
case 137:
            var40 = var27.record;
case 139:
            var30['user'] = var40;
            var30['channelId'] = var37;
            var30['reportId'] = var28;
            var34 = var38.bind(var4)(var36, var30);
case 135:
            var30 = new Array(6);
            var30[0] = var34;
            if(!var31) { _fun0008_ip = 140; continue _fun0008 }
case 141:
            var38 = _closure1_slot16;
            var36 = _closure1_slot1;
            var40 = _closure1_slot3;
            var34 = 44;
            var34 = var40[var34];
            var36 = var36.bind(var4)(var34);
            var34 = {};
            var34['parents'] = var39;
            var31 = var38.bind(var4)(var36, var34);
case 140:
            var30[1] = var31;
            var34 = _closure1_slot25;
            var31 = 'block_users';
            var31 = var34.bind(var4)(var11, var31);
            var31 = var13 != var31;
            if(!var31) { _fun0008_ip = 142; continue _fun0008 }
case 143:
            var36 = var27.name;
            var34 = 'message';
            var34 = var34 === var36;
            if(var34) { _fun0008_ip = 144; continue _fun0008 }
case 145:
            var38 = var27.name;
            var36 = 'first_dm';
            var34 = var36 === var38;
case 144:
            if(var34) { _fun0008_ip = 146; continue _fun0008 }
case 147:
            var38 = var27.name;
            var36 = 'user';
            var34 = var36 === var38;
case 146:
            if(var34) { _fun0008_ip = 148; continue _fun0008 }
case 149:
            var38 = var27.name;
            var36 = 'report_to_mod_message';
            var34 = var36 === var38;
case 148:
            var31 = var34;
case 142:
            if(!var31) { _fun0008_ip = 150; continue _fun0008 }
case 151:
            var38 = _closure1_slot16;
            var36 = _closure1_slot1;
            var39 = _closure1_slot3;
            var34 = 45;
            var34 = var39[var34];
            var36 = var36.bind(var4)(var34);
            var34 = {};
            var40 = var27.name;
            var39 = 'user';
            if(!(var39 !== var40)) { _fun0008_ip = 152; continue _fun0008 }
case 153:
            var39 = var27.record;
            var39 = var39.author;
            _fun0008_ip = 154; continue _fun0008;
case 152:
            var39 = var27.record;
case 154:
            var34['user'] = var39;
            var34['channelId'] = var37;
            var34['reportId'] = var28;
            var31 = var38.bind(var4)(var36, var34);
case 150:
            var30[2] = var31;
            var31 = !var32;
            if(var32) { _fun0008_ip = 155; continue _fun0008 }
case 156:
            var34 = _closure1_slot25;
            var32 = 'mute_users';
            var32 = var34.bind(var4)(var11, var32);
            var31 = var13 != var32;
case 155:
            if(!var31) { _fun0008_ip = 157; continue _fun0008 }
case 158:
            var34 = var27.name;
            var32 = 'message';
            var32 = var32 === var34;
            if(var32) { _fun0008_ip = 159; continue _fun0008 }
case 160:
            var36 = var27.name;
            var34 = 'first_dm';
            var32 = var34 === var36;
case 159:
            if(var32) { _fun0008_ip = 161; continue _fun0008 }
case 162:
            var36 = var27.name;
            var34 = 'user';
            var32 = var34 === var36;
case 161:
            if(var32) { _fun0008_ip = 163; continue _fun0008 }
case 164:
            var36 = var27.name;
            var34 = 'report_to_mod_message';
            var32 = var34 === var36;
case 163:
            var31 = var32;
case 157:
            if(!var31) { _fun0008_ip = 165; continue _fun0008 }
case 166:
            var36 = _closure1_slot16;
            var34 = _closure1_slot1;
            var38 = _closure1_slot3;
            var32 = 46;
            var32 = var38[var32];
            var34 = var34.bind(var4)(var32);
            var32 = {};
            var39 = var27.name;
            var38 = 'user';
            if(!(var38 !== var39)) { _fun0008_ip = 167; continue _fun0008 }
case 168:
            var38 = var27.record;
            var38 = var38.author;
            _fun0008_ip = 169; continue _fun0008;
case 167:
            var38 = var27.record;
case 169:
            var32['user'] = var38;
            var32['channelId'] = var37;
            var32['reportId'] = var28;
            var31 = var36.bind(var4)(var34, var32);
case 165:
            var30[3] = var31;
            var32 = _closure1_slot25;
            var31 = 'delete_message';
            var31 = var32.bind(var4)(var11, var31);
            var31 = var13 != var31;
            if(!var31) { _fun0008_ip = 170; continue _fun0008 }
case 171:
            var34 = var27.name;
            var32 = 'message';
            var32 = var32 === var34;
            if(var32) { _fun0008_ip = 172; continue _fun0008 }
case 173:
            var36 = var27.name;
            var34 = 'report_to_mod_message';
            var32 = var34 === var36;
case 172:
            var31 = var32;
case 170:
            if(!var31) { _fun0008_ip = 174; continue _fun0008 }
case 175:
            var32 = var27.record;
            var31 = var33.bind(var4)(var32);
case 174:
            if(!var31) { _fun0008_ip = 176; continue _fun0008 }
case 177:
            var34 = _closure1_slot16;
            var33 = _closure1_slot1;
            var36 = _closure1_slot3;
            var32 = 47;
            var32 = var36[var32];
            var33 = var33.bind(var4)(var32);
            var32 = {};
            var36 = var27.record;
            var32['message'] = var36;
            var32['reportId'] = var28;
            var31 = var34.bind(var4)(var33, var32);
case 176:
            var30[4] = var31;
            var32 = _closure1_slot25;
            var31 = 'leave_guild';
            var31 = var32.bind(var4)(var11, var31);
            var31 = var13 != var31;
            if(!var31) { _fun0008_ip = 178; continue _fun0008 }
case 179:
            var33 = var27.name;
            var32 = 'guild';
            var31 = var32 === var33;
case 178:
            if(!var31) { _fun0008_ip = 180; continue _fun0008 }
case 181:
            var34 = _closure1_slot16;
            var33 = _closure1_slot1;
            var36 = _closure1_slot3;
            var32 = 48;
            var32 = var36[var32];
            var33 = var33.bind(var4)(var32);
            var32 = {};
            var36 = var27.record;
            var32['guild'] = var36;
            var32['reportId'] = var28;
            var32['addCallback'] = var35;
            var31 = var34.bind(var4)(var33, var32);
case 180:
            var30[5] = var31;
            var21['children'] = var30;
            var20 = var25.bind(var4)(var22, var21);
case 133:
            var19[12] = var20;
            var21 = _closure1_slot25;
            var20 = 'settings_upsells';
            var20 = var21.bind(var4)(var11, var20);
            var20 = var13 != var20;
            if(!var20) { _fun0008_ip = 182; continue _fun0008 }
case 183:
            var22 = var27.name;
            var21 = 'message';
            var21 = var21 === var22;
            if(var21) { _fun0008_ip = 184; continue _fun0008 }
case 185:
            var25 = var27.name;
            var22 = 'report_to_mod_message';
            var21 = var22 === var25;
case 184:
            var20 = var21;
case 182:
            if(!var20) { _fun0008_ip = 186; continue _fun0008 }
case 187:
            var20 = var13 != var29;
case 186:
            if(!var20) { _fun0008_ip = 188; continue _fun0008 }
case 189:
            var25 = _closure1_slot16;
            var22 = _closure1_slot1;
            var30 = _closure1_slot3;
            var21 = 49;
            var21 = var30[var21];
            var22 = var22.bind(var4)(var21);
            var21 = {};
            var21['settingsUpsells'] = var29;
            var29 = var27.record;
            var29 = var29.channel_id;
            var21['channelId'] = var29;
            var21['reportId'] = var28;
            var21['reportType'] = var27;
            var21['reportSubType'] = var26;
            var20 = var25.bind(var4)(var22, var21);
case 188:
            var19[13] = var20;
            var22 = _closure1_slot16;
            var21 = _closure1_slot1;
            var25 = _closure1_slot3;
            var20 = 50;
            var20 = var25[var20];
            var21 = var21.bind(var4)(var20);
            var20 = {};
            var20['element'] = var16;
            var20['state'] = var17;
            var25 = function onPress(arg1, arg2) {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    var2 = arg1;
                    var3 = {};
                    var4 = _closure2_slot16;
                    var7 = var3;
                    var6 = var4;
                    var5 = copyDataProperties(var7, var6);
                    var4 = var2 in var4;
                    if(var4) { _fun0021_ip = 190; continue _fun0021 }
case 68:
                    var4 = arg2;
                    var3[var2] = var4;
                    _fun0021_ip = 65; continue _fun0021;
case 190:
                    var2 = delete var3[var2];
case 65:
                    var2 = _closure2_slot17;
                    var1 = undefined;
                    var2 = var2.bind(var1)(var3);
                    return var1;
                }
            };
            var20['onPress'] = var25;
            var20 = var22.bind(var4)(var21, var20);
            var19[14] = var20;
            var22 = _closure1_slot16;
            var21 = _closure1_slot24;
            var20 = {};
            var20['node'] = var11;
            var20['onSelectChild'] = var24;
            var20['nodeMap'] = var23;
            var20 = var22.bind(var4)(var21, var20);
            var19[15] = var20;
            var20 = _closure1_slot25;
            var25 = 'external_link';
            var20 = var20.bind(var4)(var11, var25);
            var21 = var13 != var20;
            var20 = null;
            if(!var21) { _fun0008_ip = 191; continue _fun0008 }
case 192:
            var23 = _closure1_slot16;
            var22 = _closure1_slot1;
            var24 = _closure1_slot3;
            var21 = 51;
            var21 = var24[var21];
            var22 = var22.bind(var4)(var21);
            var21 = {};
            var24 = _closure1_slot26;
            var24 = var24.bind(var4)(var11, var25);
            var21['elements'] = var24;
            var20 = var23.bind(var4)(var22, var21);
case 191:
            var19[16] = var20;
            var5['children'] = var19;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot16;
            var7 = _closure1_slot1;
            var19 = _closure1_slot3;
            var6 = 52;
            var6 = var19[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var6['isModeratorReport'] = var18;
            if(var12) { _fun0008_ip = 193; continue _fun0008 }
case 194:
            var18 = var13 == var16;
            var13 = undefined;
            if(var18) { _fun0008_ip = 195; continue _fun0008 }
case 196:
            var13 = var16.should_submit_data;
case 195:
            var13 = var14 === var13;
            if(!var13) { _fun0008_ip = 197; continue _fun0008 }
case 198:
            var14 = global;
            var16 = var14.Object;
            var14 = var16.keys;
            var14 = var14.bind(var16)(var17);
            var14 = var14.length;
            var13 = var15 === var14;
case 197:
            var12 = var13;
case 193:
            var6['disabled'] = var12;
            var11 = var11.button;
            var6['button'] = var11;
            var6['hasError'] = var10;
            var9 = function onPress(arg1) {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                    var1 = arg1;
                    var3 = var1.type;
                    var2 = 'done';
                    if(!(var2 !== var3)) { _fun0022_ip = 199; continue _fun0022 }
case 71:
                    var2 = 'cancel';
                    if(!(var2 !== var3)) { _fun0022_ip = 199; continue _fun0022 }
case 200:
                    var2 = 'next';
                    if(!(var2 !== var3)) { _fun0022_ip = 4; continue _fun0022 }
case 201:
                    var2 = 'submit';
                    if(!(var2 === var3)) { _fun0022_ip = 202; continue _fun0022 }
case 69:
                    var3 = function handleSubmit() {
                        var5 = _closure2_slot13;
                        var1 = undefined;
                        var4 = true;
                        var4 = var5.bind(var1)(var4);
                        var4 = _closure2_slot0;
                        var4 = var4.successNodeId;
                        var5 = [''];
                        var5[1] = var4;
                        var _closure4_slot0 = var5;
                        var4 = _closure2_slot10;
                        var3 = _closure2_slot19;
                        var3 = var3.bind(var1)(var5);
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.then;
                        var3 = function() {
                            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                                var4 = _closure2_slot18;
                                var1 = undefined;
                                var3 = false;
                                var3 = var4.bind(var1)(var3);
                                var4 = _closure2_slot8;
                                var3 = _closure2_slot0;
                                var3 = var3.successNodeId;
                                var3 = var4[var3];
                                var5 = null;
                                var6 = var5 == var3;
                                var4 = undefined;
                                if(var6) { _fun0023_ip = 203; continue _fun0023 }
case 204:
                                var4 = var3.header;
case 203:
                                if(!(var5 != var4)) { _fun0023_ip = 205; continue _fun0023 }
case 206:
                                var5 = _closure1_slot0;
                                var6 = _closure1_slot3;
                                var4 = 27;
                                var4 = var6[var4];
                                var4 = var5.bind(var1)(var4);
                                var5 = var4.AccessibilityAnnouncer;
                                var4 = var5.announce;
                                var3 = var3.header;
                                var3 = var4.bind(var5)(var3);
case 205:
                                var3 = _closure2_slot20;
                                var2 = _closure4_slot0;
                                var2 = var3.bind(var1)(var2);
                                return var1;
                            }
                        };
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.catch;
                        var3 = function() {
                            var3 = _closure2_slot18;
                            var1 = undefined;
                            var2 = true;
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var4 = var4.bind(var5)(var3);
                        var3 = var4.finally;
                        var2 = function() {
                            var3 = _closure2_slot13;
                            var1 = undefined;
                            var2 = false;
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var2 = undefined;
                    var2 = var3.bind(var2)();
                    _fun0022_ip = 202; continue _fun0022;
case 4:
                    var3 = _closure2_slot20;
                    var1 = var1.target;
                    var2 = [''];
                    var2[1] = var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    _fun0022_ip = 202; continue _fun0022;
case 199:
                    var3 = _closure2_slot20;
                    var2 = [''];
                    var1 = -1;
                    var2[1] = var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 202:
                    var1 = undefined;
                    return var1;
                }
            };
            var6['onPress'] = var9;
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