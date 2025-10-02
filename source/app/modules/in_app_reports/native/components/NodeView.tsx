// app/modules/in_app_reports/native/components/NodeView.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var15 = metroImportDefault;
    var7 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var15;
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
            var2 = var3.@@iterator;
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
            var9 = _closure1_slot25;
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
            var7 = _closure1_slot25;
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
    var _closure1_slot24 = var1;
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
    var _closure1_slot25 = var1;
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
    var _closure1_slot26 = var1;
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
    var _closure1_slot27 = var1;
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
    var _closure1_slot28 = var1;
    var1 = function NullComponent() {
        var1 = null;
        return var1;
    };
    var _closure1_slot29 = var1;
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
    var4 = var15.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var16 = 1;
    var4 = var6[var16];
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
    var4 = var15.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var15.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var15.bind(var1)(var4);
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
    var12 = 8;
    var4 = var6[var12];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot13 = var7;
    var4 = var4.ChannelTypes;
    var _closure1_slot14 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UserLinkStatus;
    var _closure1_slot15 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var13 = var4.Fonts;
    var4 = var4.Permissions;
    var _closure1_slot16 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot17 = var7;
    var4 = var4.jsxs;
    var _closure1_slot18 = var4;
    var4 = 12;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flex': 1, 'alignSelf': 'stretch', 'justifyContent': 'flex-start', 'alignItems': 'center', 'backgroundColor': null, 'marginTop': 30};
    var10 = 13;
    var11 = var6[var10];
    var11 = var15.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_MOBILE_PRIMARY;
    var9['backgroundColor'] = var11;
    var4['container'] = var9;
    var9 = {'flex': 1, 'alignSelf': 'stretch', 'marginTop': 24};
    var4['scrollView'] = var9;
    var11 = 16;
    var9 = {'flex': 1, 'alignSelf': 'stretch', 'paddingHorizontal': 16};
    var4['childrenContainer'] = var9;
    var9 = {'alignSelf': 'stretch', 'marginBottom': 24, 'paddingHorizontal': 16};
    var4['headerContainer'] = var9;
    var9 = {'marginBottom': 8, 'textAlign': 'center'};
    var4['header'] = var9;
    var14 = 20;
    var9 = {'lineHeight': 20, 'marginBottom': 8, 'textAlign': 'center'};
    var4['subheader'] = var9;
    var9 = {'lineHeight': 16, 'marginBottom': 8, 'textAlign': 'center'};
    var4['description'] = var9;
    var9 = {'alignSelf': 'stretch', 'backgroundColor': null, 'borderRadius': null, 'borderColor': null, 'borderWidth': 1, 'padding': 8, 'flexDirection': 'row', 'marginBottom': 16, 'marginHorizontal': 16};
    var17 = var6[var10];
    var17 = var15.bind(var1)(var17);
    var17 = var17.unsafe_rawColors;
    var17 = var17.BLUE_345;
    var9['backgroundColor'] = var17;
    var17 = var6[var10];
    var17 = var15.bind(var1)(var17);
    var17 = var17.radii;
    var17 = var17.xs;
    var9['borderRadius'] = var17;
    var17 = var6[var10];
    var17 = var15.bind(var1)(var17);
    var17 = var17.unsafe_rawColors;
    var17 = var17.BLUE_345;
    var9['borderColor'] = var17;
    var4['infoBox'] = var9;
    var9 = {'flex': 1, 'lineHeight': 18, 'marginStart': 8, 'marginTop': 3};
    var4['infoBoxText'] = var9;
    var9 = {};
    var9['marginBottom'] = var12;
    var17 = var6[var10];
    var17 = var15.bind(var1)(var17);
    var17 = var17.radii;
    var17 = var17.xs;
    var9['borderRadius'] = var17;
    var4['childButton'] = var9;
    var9 = {'minHeight': 60, 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'flex-start', 'backgroundColor': null, 'paddingVertical': 16, 'paddingStart': 16, 'paddingEnd': 8};
    var17 = var6[var10];
    var17 = var15.bind(var1)(var17);
    var17 = var17.colors;
    var17 = var17.BACKGROUND_SECONDARY;
    var9['backgroundColor'] = var17;
    var17 = var6[var10];
    var17 = var15.bind(var1)(var17);
    var17 = var17.radii;
    var17 = var17.xs;
    var9['borderRadius'] = var17;
    var4['childContainer'] = var9;
    var9 = {};
    var9['flex'] = var16;
    var4['childContent'] = var9;
    var9 = {};
    var9['lineHeight'] = var14;
    var4['childButtonText'] = var9;
    var9 = {'marginTop': 4, 'lineHeight': 16};
    var4['debugText'] = var9;
    var9 = {};
    var14 = 14;
    var14 = var6[var14];
    var14 = var15.bind(var1)(var14);
    var13 = var13.DISPLAY_EXTRABOLD;
    var10 = var6[var10];
    var10 = var15.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.HEADER_PRIMARY;
    var19 = var14.bind(var1)(var13, var10, var11);
    var20 = var9;
    var10 = copyDataProperties(var20, var19);
    var10 = 'marginBottom';
    var9[var10] = var12;
    var10 = 'paddingHorizontal';
    var9[var10] = var11;
    var4['remediationHeader'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot19 = var4;
    var4 = function HeaderView(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var1 = var1.node;
            var13 = var1.header;
            var15 = var1.subheader;
            var10 = var1.description;
            var1 = _closure1_slot19;
            var4 = undefined;
            var11 = var1.bind(var4)();
            var2 = _closure1_slot1;
            var3 = _closure1_slot3;
            var1 = 15;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = function() {
                var3 = _closure1_slot2;
                var2 = _closure1_slot3;
                var1 = 16;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.getParser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var14 = var2.bind(var4)(var1);
            var3 = _closure1_slot18;
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
case 13:
            var12 = _closure1_slot17;
            var8 = _closure1_slot0;
            var16 = _closure1_slot3;
            var5 = 17;
            var5 = var16[var5];
            var5 = var8.bind(var4)(var5);
            var8 = var5.Text;
            var5 = {'style': null, 'variant': 'heading-xl/extrabold', 'color': 'header-primary', 'accessibilityRole': 'header'};
            var16 = var11.header;
            var5['style'] = var16;
            var5['children'] = var13;
            var6 = var12.bind(var4)(var8, var5);
case 38:
            var5 = new Array(3);
            var5[0] = var6;
            var8 = var9 != var15;
            var6 = null;
            if(!var8) { _fun0004_ip = 39; continue _fun0004 }
case 40:
            var12 = var15.length;
            var8 = 0;
            var8 = var12 > var8;
            var6 = null;
            if(!var8) { _fun0004_ip = 39; continue _fun0004 }
case 41:
            var13 = _closure1_slot17;
            var12 = _closure1_slot0;
            var16 = _closure1_slot3;
            var8 = 17;
            var8 = var16[var8];
            var8 = var12.bind(var4)(var8);
            var12 = var8.Text;
            var8 = {'style': null, 'variant': 'text-md/medium', 'color': 'header-secondary'};
            var16 = var11.subheader;
            var8['style'] = var16;
            var14 = var14.bind(var4)(var15);
            var8['children'] = var14;
            var6 = var13.bind(var4)(var12, var8);
case 39:
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
            var9 = _closure1_slot17;
            var8 = _closure1_slot0;
            var12 = _closure1_slot3;
            var7 = 17;
            var7 = var12[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.Text;
            var7 = {'style': null, 'variant': 'text-xs/medium', 'color': 'header-secondary'};
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
    var _closure1_slot20 = var4;
    var4 = function InfoView(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var1 = var1.node;
            var11 = var1.info;
            var1 = _closure1_slot19;
            var5 = undefined;
            var12 = var1.bind(var5)();
            var2 = _closure1_slot1;
            var3 = _closure1_slot3;
            var1 = 15;
            var1 = var3[var1];
            var2 = var2.bind(var5)(var1);
            var1 = function() {
                var3 = _closure1_slot2;
                var2 = _closure1_slot3;
                var1 = 16;
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
            var4 = _closure1_slot18;
            var3 = _closure1_slot6;
            var2 = {};
            var8 = var12.infoBox;
            var7 = new Array(2);
            var7[0] = var8;
            var9 = {};
            var8 = _closure1_slot0;
            var13 = _closure1_slot3;
            var14 = 18;
            var14 = var13[var14];
            var17 = var8.bind(var5)(var14);
            var16 = var17.hexWithOpacity;
            var14 = var12.infoBox;
            var15 = var14.backgroundColor;
            var14 = 0.1;
            var14 = var16.bind(var17)(var15, var14);
            var9['backgroundColor'] = var14;
            var7[1] = var9;
            var2['style'] = var7;
            var9 = _closure1_slot17;
            var6 = 19;
            var6 = var13[var6];
            var6 = var8.bind(var5)(var6);
            var7 = var6.CircleInformationIcon;
            var6 = {};
            var14 = 'md';
            var6['size'] = var14;
            var14 = var12.infoBox;
            var14 = var14.backgroundColor;
            var6['color'] = var14;
            var7 = var9.bind(var5)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var7 = 17;
            var7 = var13[var7];
            var7 = var8.bind(var5)(var7);
            var8 = var7.Text;
            var7 = {'style': null, 'variant': 'text-sm/normal', 'color': 'interactive-active'};
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
    var _closure1_slot21 = var4;
    var4 = function ChildItem(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var7 = arg1;
            var5 = var7.child;
            var _closure2_slot0 = var5;
            var2 = var7.nodeMap;
            var12 = null;
            var4 = Object.create(var12);
            var6 = 0;
            var4['child'] = var6;
            var4['nodeMap'] = var6;
            var21 = {};
            var20 = var7;
            var19 = var4;
            var1 = copyDataProperties(var21, var20, var19);
            var _closure2_slot1 = var1;
            var1 = _closure1_slot19;
            var4 = undefined;
            var16 = var1.bind(var4)();
            var8 = _closure1_slot4;
            var1 = 2;
            var1 = var8.bind(var4)(var5, var1);
            var14 = var1[var6];
            var7 = 1;
            var1 = var1[var7];
            var11 = _closure1_slot5;
            var10 = var11.useState;
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
            var5 = var10.bind(var11)(var5);
            var5 = var8.bind(var4)(var5, var7);
            var5 = var5[var6];
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var6 = 20;
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
            var11 = var7.bind(var8)(var6, var3);
            var1 = var2[var1];
            var2 = var12 == var1;
            var15 = undefined;
            if(var2) { _fun0006_ip = 47; continue _fun0006 }
case 16:
            var15 = var1.report_type;
case 47:
            var3 = _closure1_slot17;
            var13 = _closure1_slot0;
            var10 = _closure1_slot3;
            var1 = 21;
            var1 = var10[var1];
            var1 = var13.bind(var4)(var1);
            var2 = var1.PressableHighlight;
            var1 = {};
            var6 = var16.childButton;
            var1['style'] = var6;
            var6 = 'button';
            var1['accessibilityRole'] = var6;
            var1['onPress'] = var5;
            var7 = _closure1_slot18;
            var6 = _closure1_slot6;
            var5 = {};
            var8 = var16.childContainer;
            var5['style'] = var8;
            var8 = {};
            var17 = var16.childContent;
            var8['style'] = var17;
            var17 = 17;
            var10 = var10[var17];
            var10 = var13.bind(var4)(var10);
            var13 = var10.Text;
            var10 = {'style': null, 'variant': 'text-md/semibold', 'color': 'header-primary'};
            var18 = var16.childButtonText;
            var10['style'] = var18;
            var10['children'] = var14;
            var13 = var3.bind(var4)(var13, var10);
            var10 = new Array(2);
            var10[0] = var13;
            if(!var11) { _fun0006_ip = 48; continue _fun0006 }
case 49:
            var11 = var12 != var15;
case 48:
            if(!var11) { _fun0006_ip = 50; continue _fun0006 }
case 51:
            var14 = _closure1_slot17;
            var13 = _closure1_slot0;
            var12 = _closure1_slot3;
            var12 = var12[var17];
            var12 = var13.bind(var4)(var12);
            var13 = var12.Text;
            var12 = {'style': null, 'variant': 'text-xs/normal', 'color': 'text-muted'};
            var16 = var16.debugText;
            var12['style'] = var16;
            var12['children'] = var15;
            var11 = var14.bind(var4)(var13, var12);
case 50:
            var10[1] = var11;
            var8['children'] = var10;
            var10 = var7.bind(var4)(var6, var8);
            var8 = new Array(2);
            var8[0] = var10;
            var11 = _closure1_slot17;
            var10 = _closure1_slot1;
            var12 = _closure1_slot3;
            var9 = 22;
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
    var _closure1_slot22 = var4;
    var4 = function ChildrenView(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var2 = var1.node;
            var8 = var2.children;
            var2 = var1.onSelectChild;
            var _closure2_slot0 = var2;
            var1 = var1.nodeMap;
            var _closure2_slot1 = var1;
            var1 = _closure1_slot19;
            var5 = undefined;
            var7 = var1.bind(var5)();
            var9 = null;
            var3 = var9 == var8;
            var1 = null;
            if(var3) { _fun0007_ip = 52; continue _fun0007 }
case 53:
            var4 = var8.length;
            var3 = 0;
            var1 = null;
            if(!(var3 !== var4)) { _fun0007_ip = 52; continue _fun0007 }
case 54:
            var4 = _closure1_slot17;
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
                var4 = _closure1_slot17;
                var3 = _closure1_slot22;
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
case 52:
            return var1;
        }
    };
    var _closure1_slot23 = var4;
    var4 = 53;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/in_app_reports/native/components/NodeView.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function NodeView(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var19 = arg1;
            var _closure2_slot0 = var19;
            var1 = _closure1_slot19;
            var4 = undefined;
            var8 = var1.bind(var4)();
            var3 = _closure1_slot0;
            var5 = _closure1_slot3;
            var1 = 23;
            var1 = var5[var1];
            var2 = var3.bind(var4)(var1);
            var1 = var2.useNavigation;
            var1 = var1.bind(var2)();
            var _closure2_slot1 = var1;
            var11 = var19.node;
            var _closure2_slot2 = var11;
            var26 = var19.reportType;
            var _closure2_slot3 = var26;
            var25 = var19.reportSubType;
            var24 = var19.history;
            var _closure2_slot4 = var24;
            var22 = var19.nodeMap;
            var _closure2_slot5 = var22;
            var20 = var19.closeModal;
            var _closure2_slot6 = var20;
            var34 = var19.addOnCloseCallback;
            var13 = var19.onSubmit;
            var _closure2_slot7 = var13;
            var27 = var19.reportId;
            var21 = var19.onNavigate;
            var _closure2_slot8 = var21;
            var14 = _closure1_slot5;
            var10 = var14.useMemo;
            var7 = new Array(1);
            var7[0] = var26;
            var2 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = _closure2_slot3;
                    var4 = var1.name;
                    var3 = 'message';
                    var1 = undefined;
                    if(!(var3 === var4)) { _fun0009_ip = 55; continue _fun0009 }
case 56:
                    var2 = _closure2_slot3;
                    var2 = var2.record;
                    var1 = var2.channel_id;
case 55:
                    return var1;
                }
            };
            var36 = var10.bind(var14)(var2, var7);
            var2 = _closure1_slot26;
            var7 = 'checkbox';
            var16 = var2.bind(var4)(var11, var7);
            var _closure2_slot9 = var16;
            var7 = 'text_line_resource';
            var35 = var2.bind(var4)(var11, var7);
            var7 = 'text';
            var33 = var2.bind(var4)(var11, var7);
            var7 = 24;
            var7 = var5[var7];
            var7 = var3.bind(var4)(var7);
            var7 = var7.ReportMenuTypeSets;
            var12 = var7.REPORT_TO_MOD;
            var10 = var12.has;
            var7 = var26.name;
            var18 = var10.bind(var12)(var7);
            var7 = var14.useState;
            var30 = false;
            var7 = var7.bind(var14)(var30);
            var29 = _closure1_slot4;
            var10 = 2;
            var7 = var29.bind(var4)(var7, var10);
            var15 = 0;
            var12 = var7[var15];
            var23 = 1;
            var7 = var7[var23];
            var _closure2_slot10 = var7;
            var7 = var14.useState;
            var7 = var7.bind(var14)(var30);
            var7 = var29.bind(var4)(var7, var10);
            var28 = var7[var15];
            var _closure2_slot11 = var28;
            var7 = var7[var23];
            var _closure2_slot12 = var7;
            var17 = var14.useState;
            var7 = function() {
                var1 = {};
                return var1;
            };
            var7 = var17.bind(var14)(var7);
            var7 = var29.bind(var4)(var7, var10);
            var17 = var7[var15];
            var _closure2_slot13 = var17;
            var7 = var7[var23];
            var _closure2_slot14 = var7;
            var7 = var14.useState;
            var7 = var7.bind(var14)(var30);
            var7 = var29.bind(var4)(var7, var10);
            var10 = var7[var15];
            var7 = var7[var23];
            var _closure2_slot15 = var7;
            var29 = var14.useCallback;
            var23 = new Array(3);
            var23[0] = var11;
            var23[1] = var16;
            var23[2] = var17;
            var7 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var1 = {};
                    var2 = _closure2_slot2;
                    var2 = var2.id;
                    var1['nodeRef'] = var2;
                    var2 = arg1;
                    var1['destination'] = var2;
                    var3 = _closure2_slot9;
                    var2 = null;
                    var3 = var2 != var3;
                    var2 = undefined;
                    if(!var3) { _fun0010_ip = 57; continue _fun0010 }
case 58:
                    var3 = {};
                    var5 = _closure2_slot9;
                    var5 = var5.name;
                    var3['name'] = var5;
                    var4 = _closure2_slot13;
                    var3['state'] = var4;
                    var2 = var3;
case 57:
                    var1['multiSelect'] = var2;
                    return var1;
                }
            };
            var7 = var29.bind(var14)(var7, var23);
            var _closure2_slot16 = var7;
            var30 = var14.useEffect;
            var29 = new Array(1);
            var29[0] = var16;
            var23 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var3 = _closure2_slot9;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0011_ip = 59; continue _fun0011 }
case 60:
                    var2 = _closure2_slot9;
                    var2 = var2.data;
                    if(!(var1 != var2)) { _fun0011_ip = 59; continue _fun0011 }
case 34:
                    var11 = function _loop(arg1, arg2) {
                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                            var2 = arg1;
                            var _closure4_slot0 = var2;
                            var2 = arg2;
                            var _closure4_slot1 = var2;
                            var3 = _closure3_slot0;
                            var2 = true;
                            if(!(var2 === var3)) { _fun0012_ip = 61; continue _fun0012 }
case 62:
                            var3 = _closure2_slot14;
                            var2 = undefined;
                            var1 = function(arg1) {
                                var1 = {};
                                var4 = arg1;
                                var5 = var1;
                                var2 = copyDataProperties(var5, var4);
                                var3 = _closure4_slot0;
                                var2 = _closure4_slot1;
                                var1[var3] = var2;
                                return var1;
                            };
                            var1 = var3.bind(var2)(var1);
case 61:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var1 = _closure1_slot24;
                    var9 = undefined;
                    var8 = var1.bind(var9)(var2);
                    var2 = var8.bind(var9)();
                    var1 = var2.done;
                    var7 = 4;
                    var6 = 0;
                    var5 = 1;
                    var4 = 2;
                    var3 = 3;
                    if(var1) { _fun0011_ip = 59; continue _fun0011 }
case 54:
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
                    if(!var1) { _fun0011_ip = 54; continue _fun0011 }
case 59:
                    var1 = undefined;
                    return var1;
                }
            };
            var23 = var30.bind(var14)(var23, var29);
            var29 = var14.useEffect;
            var23 = new Array(2);
            var23[0] = var1;
            var23[1] = var19;
            var19 = function() {
                var4 = _closure2_slot1;
                var3 = var4.addListener;
                var2 = 'beforeRemove';
                var1 = function() {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                        var2 = _closure2_slot0;
                        var3 = var2.onNavigate;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0013_ip = 63; continue _fun0013 }
case 64:
                        var3 = _closure2_slot0;
                        var2 = var3.onNavigate;
                        var1 = '..';
                        var1 = var2.bind(var3)(var1);
case 63:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var19 = var29.bind(var14)(var19, var23);
            var23 = var14.useEffect;
            var29 = var11.is_auto_submit;
            var19 = new Array(4);
            var19[0] = var29;
            var19[1] = var28;
            var19[2] = var13;
            var13 = var11.id;
            var19[3] = var13;
            var13 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var1 = _closure2_slot2;
                    var1 = var1.is_auto_submit;
                    if(!var1) { _fun0014_ip = 31; continue _fun0014 }
case 65:
                    var2 = _closure2_slot11;
                    var1 = !var2;
case 31:
                    if(!var1) { _fun0014_ip = 66; continue _fun0014 }
case 67:
                    var2 = _closure2_slot12;
                    var3 = undefined;
                    var1 = true;
                    var1 = var2.bind(var3)(var1);
                    var2 = _closure2_slot7;
                    var1 = {};
                    var4 = _closure2_slot2;
                    var5 = var4.id;
                    var1['nodeRef'] = var5;
                    var5 = var4.id;
                    var4 = [''];
                    var4[1] = var5;
                    var1['destination'] = var4;
                    var1 = var2.bind(var3)(var1);
case 66:
                    var1 = undefined;
                    return var1;
                }
            };
            var13 = var23.bind(var14)(var13, var19);
            var19 = var14.useCallback;
            var13 = new Array(8);
            var13[0] = var11;
            var13[1] = var22;
            var13[2] = var1;
            var13[3] = var24;
            var13[4] = var21;
            var13[5] = var20;
            var13[6] = var26;
            var13[7] = var7;
            var7 = function(arg1) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var6 = arg1;
                    var3 = _closure1_slot4;
                    var1 = undefined;
                    var2 = 2;
                    var2 = var3.bind(var1)(var6, var2);
                    var11 = 1;
                    var5 = var2[var11];
                    var3 = _closure2_slot16;
                    var12 = var3.bind(var1)(var6);
                    var3 = _closure2_slot5;
                    var3 = var3[var5];
                    var5 = null;
                    if(!(var5 != var3)) { _fun0015_ip = 68; continue _fun0015 }
case 69:
                    var7 = _closure1_slot26;
                    var6 = 'skip';
                    var6 = var7.bind(var1)(var3, var6);
                    if(!(var5 != var6)) { _fun0015_ip = 70; continue _fun0015 }
case 71:
                    var6 = var3.button;
                    var8 = var5 == var6;
                    var7 = undefined;
                    if(var8) { _fun0015_ip = 72; continue _fun0015 }
case 73:
                    var7 = var6.type;
case 72:
                    var6 = 'next';
                    if(!(var6 !== var7)) { _fun0015_ip = 74; continue _fun0015 }
case 70:
                    var6 = _closure2_slot3;
                    var7 = var6.name;
                    var8 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var9 = 25;
                    var6 = var6[var9];
                    var6 = var8.bind(var1)(var6);
                    var6 = var6.ReportNames;
                    var6 = var6.MESSAGE;
                    if(!(var7 !== var6)) { _fun0015_ip = 75; continue _fun0015 }
case 76:
                    var6 = _closure2_slot3;
                    var7 = var6.name;
                    var8 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var6 = var6[var9];
                    var6 = var8.bind(var1)(var6);
                    var6 = var6.ReportNames;
                    var6 = var6.FIRST_DM;
                    if(!(var7 === var6)) { _fun0015_ip = 77; continue _fun0015 }
case 75:
                    var10 = _closure2_slot3;
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
                    var10 = _closure2_slot2;
                    var10 = var10.id;
                    var6['current_node'] = var10;
                    var10 = var3.id;
                    var6['next_node'] = var10;
                    var6 = var8.bind(var9)(var7, var6);
case 77:
                    var8 = _closure2_slot1;
                    var7 = var8.push;
                    var6 = _closure1_slot12;
                    var4 = {};
                    var4['node'] = var3;
                    var15 = _closure2_slot4;
                    var9 = new Array(1);
                    var14 = 0;
                    var16 = var9;
                    var10 = arraySpread(var16, var15, var14);
                    var9[var10] = var12;
                    var10 = var10 + var11;
                    var4['history'] = var9;
                    var4 = var7.bind(var8)(var6, var4);
                    var4 = _closure2_slot8;
                    if(!(var5 != var4)) { _fun0015_ip = 78; continue _fun0015 }
case 79:
                    var5 = _closure2_slot8;
                    var4 = var3.key;
                    var4 = var5.bind(var1)(var4);
                    _fun0015_ip = 78; continue _fun0015;
case 74:
                    var4 = _closure2_slot17;
                    var3 = var3.button;
                    var5 = var3.target;
                    var3 = [''];
                    var3[1] = var5;
                    var3 = var4.bind(var1)(var3);
                    return var3;
case 68:
                    var2 = _closure2_slot6;
                    var2 = var2.bind(var1)();
case 78:
                    return var1;
                }
            };
            var23 = var19.bind(var14)(var7, var13);
            var _closure2_slot17 = var23;
            var13 = var14.useEffect;
            var7 = new Array(3);
            var7[0] = var11;
            var7[1] = var24;
            var7[2] = var1;
            var1 = function() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var1 = _closure2_slot2;
                    var3 = var1.button;
                    var5 = null;
                    var6 = var5 == var3;
                    var1 = undefined;
                    var4 = undefined;
                    if(var6) { _fun0016_ip = 80; continue _fun0016 }
case 67:
                    var4 = var3.type;
case 80:
                    var3 = 'done';
                    var3 = var3 === var4;
                    if(var3) { _fun0016_ip = 81; continue _fun0016 }
case 58:
                    var4 = _closure2_slot2;
                    var4 = var4.button;
                    var6 = var5 == var4;
                    var5 = undefined;
                    if(var6) { _fun0016_ip = 82; continue _fun0016 }
case 7:
                    var5 = var4.type;
case 82:
                    var4 = 'cancel';
                    var3 = var4 === var5;
case 81:
                    if(var3) { _fun0016_ip = 83; continue _fun0016 }
case 84:
                    var4 = _closure2_slot4;
                    var5 = var4.length;
                    var4 = 0;
                    var3 = var4 === var5;
case 83:
                    if(!var3) { _fun0016_ip = 85; continue _fun0016 }
case 72:
                    var4 = _closure2_slot1;
                    var3 = var4.setOptions;
                    var2 = {};
                    var5 = _closure1_slot29;
                    var2['headerLeft'] = var5;
                    var2 = var3.bind(var4)(var2);
case 85:
                    return var1;
                }
            };
            var1 = var13.bind(var14)(var1, var7);
            var13 = var14.useCallback;
            var7 = function(arg1) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var5 = arg1;
                    var4 = _closure1_slot9;
                    var2 = var4.getChannel;
                    var1 = var5.getChannelId;
                    var1 = var1.bind(var5)();
                    var7 = var2.bind(var4)(var1);
                    var1 = null;
                    var1 = var1 != var7;
                    if(!var1) { _fun0017_ip = 86; continue _fun0017 }
case 87:
                    var4 = var7.type;
                    var2 = _closure1_slot14;
                    var2 = var2.DM;
                    var2 = var4 !== var2;
                    if(!var2) { _fun0017_ip = 88; continue _fun0017 }
case 7:
                    var5 = var7.type;
                    var4 = _closure1_slot14;
                    var4 = var4.GROUP_DM;
                    var2 = var5 !== var4;
case 88:
                    if(!var2) { _fun0017_ip = 89; continue _fun0017 }
case 90:
                    var6 = _closure1_slot10;
                    var5 = var6.canWithPartialContext;
                    var3 = _closure1_slot16;
                    var4 = var3.MANAGE_MESSAGES;
                    var3 = {};
                    var7 = var7.id;
                    var3['channelId'] = var7;
                    var2 = var5.bind(var6)(var4, var3);
case 89:
                    var1 = var2;
case 86:
                    return var1;
                }
            };
            var1 = new Array(0);
            var32 = var13.bind(var14)(var7, var1);
            var1 = 27;
            var1 = var5[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.useIarReportSettingsUpsells;
            var28 = var1.bind(var3)(var25);
            var1 = 'ignore_users';
            var1 = var2.bind(var4)(var11, var1);
            var13 = null;
            var31 = var13 != var1;
            if(!var31) { _fun0008_ip = 91; continue _fun0008 }
case 92:
            var2 = var26.name;
            var1 = 'message';
            var1 = var1 === var2;
            if(var1) { _fun0008_ip = 93; continue _fun0008 }
case 94:
            var3 = var26.name;
            var2 = 'first_dm';
            var1 = var2 === var3;
case 93:
            if(var1) { _fun0008_ip = 95; continue _fun0008 }
case 96:
            var3 = var26.name;
            var2 = 'user';
            var1 = var2 === var3;
case 95:
            if(var1) { _fun0008_ip = 97; continue _fun0008 }
case 98:
            var3 = var26.name;
            var2 = 'report_to_mod_message';
            var1 = var2 === var3;
case 97:
            var31 = var1;
case 91:
            var5 = _closure1_slot0;
            var7 = _closure1_slot3;
            var1 = 28;
            var1 = var7[var1];
            var2 = var5.bind(var4)(var1);
            var1 = var2.useUserIsTeen;
            var30 = var1.bind(var2)();
            var1 = 29;
            var1 = var7[var1];
            var14 = var5.bind(var4)(var1);
            var3 = var14.useIsFamilyCenterV2Enabled;
            var1 = 'share_with_parent_element';
            var1 = var3.bind(var14)(var1);
            var3 = 30;
            var3 = var7[var3];
            var7 = var5.bind(var4)(var3);
            var5 = var7.useUserForLinkStatus;
            var3 = _closure1_slot15;
            var3 = var3.ACTIVE;
            var38 = var5.bind(var7)(var3);
            if(!var30) { _fun0008_ip = 99; continue _fun0008 }
case 100:
            var2 = var38.length;
            var30 = var2 > var15;
case 99:
            if(!var30) { _fun0008_ip = 101; continue _fun0008 }
case 102:
            var30 = var1;
case 101:
            if(!var30) { _fun0008_ip = 103; continue _fun0008 }
case 104:
            var2 = _closure1_slot26;
            var1 = 'share_with_parents';
            var1 = var2.bind(var4)(var11, var1);
            var30 = var13 != var1;
case 103:
            var3 = _closure1_slot18;
            var2 = _closure1_slot0;
            var20 = _closure1_slot3;
            var1 = 31;
            var1 = var20[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.SafeAreaPaddingView;
            var1 = {'style': null, 'bottom': true, 'top': true};
            var5 = var8.container;
            var1['style'] = var5;
            var14 = true;
            var7 = _closure1_slot7;
            var5 = {};
            var8 = var8.scrollView;
            var5['style'] = var8;
            var21 = _closure1_slot17;
            var19 = _closure1_slot1;
            var8 = 32;
            var8 = var20[var8];
            var19 = var19.bind(var4)(var8);
            var8 = {};
            var29 = _closure1_slot26;
            var20 = 'success';
            var20 = var29.bind(var4)(var11, var20);
            var8['element'] = var20;
            var19 = var21.bind(var4)(var19, var8);
            var8 = new Array(17);
            var8[0] = var19;
            var20 = _closure1_slot20;
            var19 = {};
            var19['node'] = var11;
            var19 = var21.bind(var4)(var20, var19);
            var8[1] = var19;
            var20 = _closure1_slot21;
            var19 = {};
            var19['node'] = var11;
            var19 = var21.bind(var4)(var20, var19);
            var8[2] = var19;
            var20 = var13 != var35;
            var19 = null;
            if(!var20) { _fun0008_ip = 105; continue _fun0008 }
case 106:
            var29 = _closure1_slot17;
            var21 = _closure1_slot1;
            var37 = _closure1_slot3;
            var20 = 33;
            var20 = var37[var20];
            var21 = var21.bind(var4)(var20);
            var20 = {};
            var20['element'] = var35;
            var19 = var29.bind(var4)(var21, var20);
case 105:
            var8[3] = var19;
            var19 = var13 != var33;
            if(!var19) { _fun0008_ip = 107; continue _fun0008 }
case 108:
            var29 = _closure1_slot17;
            var21 = _closure1_slot1;
            var35 = _closure1_slot3;
            var20 = 34;
            var20 = var35[var20];
            var21 = var21.bind(var4)(var20);
            var20 = {};
            var20['element'] = var33;
            var19 = var29.bind(var4)(var21, var20);
case 107:
            var8[4] = var19;
            var20 = _closure1_slot26;
            var19 = 'message_preview';
            var19 = var20.bind(var4)(var11, var19);
            var20 = var13 == var19;
            var19 = null;
            if(var20) { _fun0008_ip = 109; continue _fun0008 }
case 110:
            var21 = var26.name;
            var20 = 'message';
            if(!(var20 !== var21)) { _fun0008_ip = 111; continue _fun0008 }
case 112:
            var21 = var26.name;
            var20 = 'first_dm';
            if(!(var20 !== var21)) { _fun0008_ip = 111; continue _fun0008 }
case 113:
            var21 = var26.name;
            var20 = 'report_to_mod_message';
            var19 = null;
            if(!(var20 === var21)) { _fun0008_ip = 109; continue _fun0008 }
case 111:
            var29 = _closure1_slot17;
            var21 = _closure1_slot1;
            var33 = _closure1_slot3;
            var20 = 35;
            var20 = var33[var20];
            var21 = var21.bind(var4)(var20);
            var20 = {};
            var33 = var26.record;
            var20['message'] = var33;
            var19 = var29.bind(var4)(var21, var20);
case 109:
            var8[5] = var19;
            var20 = _closure1_slot26;
            var19 = 'user_preview';
            var19 = var20.bind(var4)(var11, var19);
            var20 = var13 != var19;
            var19 = null;
            if(!var20) { _fun0008_ip = 114; continue _fun0008 }
case 115:
            var21 = var26.name;
            var20 = 'user';
            var19 = null;
            if(!(var20 === var21)) { _fun0008_ip = 114; continue _fun0008 }
case 116:
            var29 = _closure1_slot17;
            var21 = _closure1_slot1;
            var33 = _closure1_slot3;
            var20 = 36;
            var20 = var33[var20];
            var21 = var21.bind(var4)(var20);
            var20 = {};
            var33 = var26.record;
            var20['user'] = var33;
            var19 = var29.bind(var4)(var21, var20);
case 114:
            var8[6] = var19;
            var20 = _closure1_slot26;
            var19 = 'channel_preview';
            var19 = var20.bind(var4)(var11, var19);
            var20 = var13 != var19;
            var19 = null;
            if(!var20) { _fun0008_ip = 117; continue _fun0008 }
case 118:
            var21 = var26.name;
            var20 = 'stage_channel';
            var19 = null;
            if(!(var20 === var21)) { _fun0008_ip = 117; continue _fun0008 }
case 119:
            var29 = _closure1_slot17;
            var21 = _closure1_slot1;
            var33 = _closure1_slot3;
            var20 = 37;
            var20 = var33[var20];
            var21 = var21.bind(var4)(var20);
            var20 = {};
            var33 = var26.record;
            var20['stageInstance'] = var33;
            var19 = var29.bind(var4)(var21, var20);
case 117:
            var8[7] = var19;
            var20 = _closure1_slot26;
            var19 = 'guild_preview';
            var19 = var20.bind(var4)(var11, var19);
            var20 = var13 != var19;
            var19 = null;
            if(!var20) { _fun0008_ip = 120; continue _fun0008 }
case 121:
            var21 = var26.name;
            var20 = 'guild';
            var19 = null;
            if(!(var20 === var21)) { _fun0008_ip = 120; continue _fun0008 }
case 122:
            var29 = _closure1_slot17;
            var21 = _closure1_slot1;
            var33 = _closure1_slot3;
            var20 = 38;
            var20 = var33[var20];
            var21 = var21.bind(var4)(var20);
            var20 = {};
            var33 = var26.record;
            var20['guild'] = var33;
            var19 = var29.bind(var4)(var21, var20);
case 120:
            var8[8] = var19;
            var20 = _closure1_slot26;
            var19 = 'guild_scheduled_event_preview';
            var19 = var20.bind(var4)(var11, var19);
            var20 = var13 != var19;
            var19 = null;
            if(!var20) { _fun0008_ip = 123; continue _fun0008 }
case 124:
            var21 = var26.name;
            var20 = 'guild_scheduled_event';
            var19 = null;
            if(!(var20 === var21)) { _fun0008_ip = 123; continue _fun0008 }
case 125:
            var29 = _closure1_slot17;
            var21 = _closure1_slot1;
            var33 = _closure1_slot3;
            var20 = 39;
            var20 = var33[var20];
            var21 = var21.bind(var4)(var20);
            var20 = {};
            var33 = var26.record;
            var20['event'] = var33;
            var19 = var29.bind(var4)(var21, var20);
case 123:
            var8[9] = var19;
            var20 = _closure1_slot26;
            var19 = 'guild_discovery_preview';
            var19 = var20.bind(var4)(var11, var19);
            var20 = var13 != var19;
            var19 = null;
            if(!var20) { _fun0008_ip = 126; continue _fun0008 }
case 127:
            var21 = var26.name;
            var20 = 'guild_discovery';
            var19 = null;
            if(!(var20 === var21)) { _fun0008_ip = 126; continue _fun0008 }
case 128:
            var29 = _closure1_slot17;
            var21 = _closure1_slot1;
            var33 = _closure1_slot3;
            var20 = 40;
            var20 = var33[var20];
            var21 = var21.bind(var4)(var20);
            var20 = {};
            var33 = var26.record;
            var20['guild'] = var33;
            var19 = var29.bind(var4)(var21, var20);
case 126:
            var8[10] = var19;
            var21 = _closure1_slot17;
            var20 = _closure1_slot1;
            var29 = _closure1_slot3;
            var19 = 41;
            var19 = var29[var19];
            var20 = var20.bind(var4)(var19);
            var19 = {};
            var33 = _closure1_slot26;
            var29 = 'breadcrumbs';
            var29 = var33.bind(var4)(var11, var29);
            var19['element'] = var29;
            var29 = var26.name;
            var19['menuName'] = var29;
            var19['history'] = var24;
            var19 = var21.bind(var4)(var20, var19);
            var8[11] = var19;
            var19 = _closure1_slot28;
            var19 = var19.bind(var4)(var11);
            if(!var19) { _fun0008_ip = 129; continue _fun0008 }
case 130:
            var24 = _closure1_slot18;
            var21 = _closure1_slot1;
            var29 = _closure1_slot3;
            var20 = 42;
            var20 = var29[var20];
            var21 = var21.bind(var4)(var20);
            var20 = {};
            var33 = var31;
            if(!var33) { _fun0008_ip = 131; continue _fun0008 }
case 132:
            var37 = _closure1_slot17;
            var35 = _closure1_slot1;
            var39 = _closure1_slot3;
            var29 = 43;
            var29 = var39[var29];
            var35 = var35.bind(var4)(var29);
            var29 = {};
            var40 = var26.name;
            var39 = 'user';
            if(!(var39 !== var40)) { _fun0008_ip = 133; continue _fun0008 }
case 134:
            var39 = var26.record;
            var39 = var39.author;
            _fun0008_ip = 135; continue _fun0008;
case 133:
            var39 = var26.record;
case 135:
            var29['user'] = var39;
            var29['channelId'] = var36;
            var29['reportId'] = var27;
            var33 = var37.bind(var4)(var35, var29);
case 131:
            var29 = new Array(6);
            var29[0] = var33;
            if(!var30) { _fun0008_ip = 136; continue _fun0008 }
case 137:
            var37 = _closure1_slot17;
            var35 = _closure1_slot1;
            var39 = _closure1_slot3;
            var33 = 44;
            var33 = var39[var33];
            var35 = var35.bind(var4)(var33);
            var33 = {};
            var33['parents'] = var38;
            var30 = var37.bind(var4)(var35, var33);
case 136:
            var29[1] = var30;
            var33 = _closure1_slot26;
            var30 = 'block_users';
            var30 = var33.bind(var4)(var11, var30);
            var30 = var13 != var30;
            if(!var30) { _fun0008_ip = 138; continue _fun0008 }
case 139:
            var35 = var26.name;
            var33 = 'message';
            var33 = var33 === var35;
            if(var33) { _fun0008_ip = 140; continue _fun0008 }
case 141:
            var37 = var26.name;
            var35 = 'first_dm';
            var33 = var35 === var37;
case 140:
            if(var33) { _fun0008_ip = 142; continue _fun0008 }
case 143:
            var37 = var26.name;
            var35 = 'user';
            var33 = var35 === var37;
case 142:
            if(var33) { _fun0008_ip = 144; continue _fun0008 }
case 145:
            var37 = var26.name;
            var35 = 'report_to_mod_message';
            var33 = var35 === var37;
case 144:
            var30 = var33;
case 138:
            if(!var30) { _fun0008_ip = 146; continue _fun0008 }
case 147:
            var37 = _closure1_slot17;
            var35 = _closure1_slot1;
            var38 = _closure1_slot3;
            var33 = 45;
            var33 = var38[var33];
            var35 = var35.bind(var4)(var33);
            var33 = {};
            var39 = var26.name;
            var38 = 'user';
            if(!(var38 !== var39)) { _fun0008_ip = 148; continue _fun0008 }
case 149:
            var38 = var26.record;
            var38 = var38.author;
            _fun0008_ip = 150; continue _fun0008;
case 148:
            var38 = var26.record;
case 150:
            var33['user'] = var38;
            var33['channelId'] = var36;
            var33['reportId'] = var27;
            var30 = var37.bind(var4)(var35, var33);
case 146:
            var29[2] = var30;
            var30 = !var31;
            if(var31) { _fun0008_ip = 151; continue _fun0008 }
case 152:
            var33 = _closure1_slot26;
            var31 = 'mute_users';
            var31 = var33.bind(var4)(var11, var31);
            var30 = var13 != var31;
case 151:
            if(!var30) { _fun0008_ip = 153; continue _fun0008 }
case 154:
            var33 = var26.name;
            var31 = 'message';
            var31 = var31 === var33;
            if(var31) { _fun0008_ip = 155; continue _fun0008 }
case 156:
            var35 = var26.name;
            var33 = 'first_dm';
            var31 = var33 === var35;
case 155:
            if(var31) { _fun0008_ip = 157; continue _fun0008 }
case 158:
            var35 = var26.name;
            var33 = 'user';
            var31 = var33 === var35;
case 157:
            if(var31) { _fun0008_ip = 159; continue _fun0008 }
case 160:
            var35 = var26.name;
            var33 = 'report_to_mod_message';
            var31 = var33 === var35;
case 159:
            var30 = var31;
case 153:
            if(!var30) { _fun0008_ip = 161; continue _fun0008 }
case 162:
            var35 = _closure1_slot17;
            var33 = _closure1_slot1;
            var37 = _closure1_slot3;
            var31 = 46;
            var31 = var37[var31];
            var33 = var33.bind(var4)(var31);
            var31 = {};
            var38 = var26.name;
            var37 = 'user';
            if(!(var37 !== var38)) { _fun0008_ip = 163; continue _fun0008 }
case 164:
            var37 = var26.record;
            var37 = var37.author;
            _fun0008_ip = 165; continue _fun0008;
case 163:
            var37 = var26.record;
case 165:
            var31['user'] = var37;
            var31['channelId'] = var36;
            var31['reportId'] = var27;
            var30 = var35.bind(var4)(var33, var31);
case 161:
            var29[3] = var30;
            var31 = _closure1_slot26;
            var30 = 'delete_message';
            var30 = var31.bind(var4)(var11, var30);
            var30 = var13 != var30;
            if(!var30) { _fun0008_ip = 166; continue _fun0008 }
case 167:
            var33 = var26.name;
            var31 = 'message';
            var31 = var31 === var33;
            if(var31) { _fun0008_ip = 168; continue _fun0008 }
case 169:
            var35 = var26.name;
            var33 = 'report_to_mod_message';
            var31 = var33 === var35;
case 168:
            var30 = var31;
case 166:
            if(!var30) { _fun0008_ip = 170; continue _fun0008 }
case 171:
            var31 = var26.record;
            var30 = var32.bind(var4)(var31);
case 170:
            if(!var30) { _fun0008_ip = 172; continue _fun0008 }
case 173:
            var33 = _closure1_slot17;
            var32 = _closure1_slot1;
            var35 = _closure1_slot3;
            var31 = 47;
            var31 = var35[var31];
            var32 = var32.bind(var4)(var31);
            var31 = {};
            var35 = var26.record;
            var31['message'] = var35;
            var31['reportId'] = var27;
            var30 = var33.bind(var4)(var32, var31);
case 172:
            var29[4] = var30;
            var31 = _closure1_slot26;
            var30 = 'leave_guild';
            var30 = var31.bind(var4)(var11, var30);
            var30 = var13 != var30;
            if(!var30) { _fun0008_ip = 174; continue _fun0008 }
case 175:
            var32 = var26.name;
            var31 = 'guild';
            var30 = var31 === var32;
case 174:
            if(!var30) { _fun0008_ip = 176; continue _fun0008 }
case 177:
            var33 = _closure1_slot17;
            var32 = _closure1_slot1;
            var35 = _closure1_slot3;
            var31 = 48;
            var31 = var35[var31];
            var32 = var32.bind(var4)(var31);
            var31 = {};
            var35 = var26.record;
            var31['guild'] = var35;
            var31['reportId'] = var27;
            var31['addCallback'] = var34;
            var30 = var33.bind(var4)(var32, var31);
case 176:
            var29[5] = var30;
            var20['children'] = var29;
            var19 = var24.bind(var4)(var21, var20);
case 129:
            var8[12] = var19;
            var20 = _closure1_slot26;
            var19 = 'settings_upsells';
            var19 = var20.bind(var4)(var11, var19);
            var19 = var13 != var19;
            if(!var19) { _fun0008_ip = 178; continue _fun0008 }
case 179:
            var21 = var26.name;
            var20 = 'message';
            var20 = var20 === var21;
            if(var20) { _fun0008_ip = 180; continue _fun0008 }
case 181:
            var24 = var26.name;
            var21 = 'report_to_mod_message';
            var20 = var21 === var24;
case 180:
            var19 = var20;
case 178:
            if(!var19) { _fun0008_ip = 182; continue _fun0008 }
case 183:
            var19 = var13 != var28;
case 182:
            if(!var19) { _fun0008_ip = 184; continue _fun0008 }
case 185:
            var24 = _closure1_slot17;
            var21 = _closure1_slot1;
            var29 = _closure1_slot3;
            var20 = 49;
            var20 = var29[var20];
            var21 = var21.bind(var4)(var20);
            var20 = {};
            var20['settingsUpsells'] = var28;
            var28 = var26.record;
            var28 = var28.channel_id;
            var20['channelId'] = var28;
            var20['reportId'] = var27;
            var20['reportType'] = var26;
            var20['reportSubType'] = var25;
            var19 = var24.bind(var4)(var21, var20);
case 184:
            var8[13] = var19;
            var21 = _closure1_slot17;
            var20 = _closure1_slot1;
            var24 = _closure1_slot3;
            var19 = 50;
            var19 = var24[var19];
            var20 = var20.bind(var4)(var19);
            var19 = {};
            var19['element'] = var16;
            var19['state'] = var17;
            var24 = function onPress(arg1, arg2) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var2 = arg1;
                    var3 = {};
                    var4 = _closure2_slot13;
                    var7 = var3;
                    var6 = var4;
                    var5 = copyDataProperties(var7, var6);
                    var4 = var2 in var4;
                    if(var4) { _fun0018_ip = 186; continue _fun0018 }
case 62:
                    var4 = arg2;
                    var3[var2] = var4;
                    _fun0018_ip = 58; continue _fun0018;
case 186:
                    var2 = delete var3[var2];
case 58:
                    var2 = _closure2_slot14;
                    var1 = undefined;
                    var2 = var2.bind(var1)(var3);
                    return var1;
                }
            };
            var19['onPress'] = var24;
            var19 = var21.bind(var4)(var20, var19);
            var8[14] = var19;
            var20 = _closure1_slot23;
            var19 = {};
            var19['node'] = var11;
            var19['onSelectChild'] = var23;
            var19['nodeMap'] = var22;
            var19 = var21.bind(var4)(var20, var19);
            var8[15] = var19;
            var19 = _closure1_slot26;
            var24 = 'external_link';
            var19 = var19.bind(var4)(var11, var24);
            var20 = var13 != var19;
            var19 = null;
            if(!var20) { _fun0008_ip = 187; continue _fun0008 }
case 188:
            var22 = _closure1_slot17;
            var21 = _closure1_slot1;
            var23 = _closure1_slot3;
            var20 = 51;
            var20 = var23[var20];
            var21 = var21.bind(var4)(var20);
            var20 = {};
            var23 = _closure1_slot27;
            var23 = var23.bind(var4)(var11, var24);
            var20['elements'] = var23;
            var19 = var22.bind(var4)(var21, var20);
case 187:
            var8[16] = var19;
            var5['children'] = var8;
            var7 = var3.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot17;
            var7 = _closure1_slot1;
            var19 = _closure1_slot3;
            var6 = 52;
            var6 = var19[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var6['isModeratorReport'] = var18;
            if(var12) { _fun0008_ip = 189; continue _fun0008 }
case 190:
            var18 = var13 == var16;
            var13 = undefined;
            if(var18) { _fun0008_ip = 191; continue _fun0008 }
case 192:
            var13 = var16.should_submit_data;
case 191:
            var13 = var14 === var13;
            if(!var13) { _fun0008_ip = 193; continue _fun0008 }
case 194:
            var14 = global;
            var16 = var14.Object;
            var14 = var16.keys;
            var14 = var14.bind(var16)(var17);
            var14 = var14.length;
            var13 = var15 === var14;
case 193:
            var12 = var13;
case 189:
            var6['disabled'] = var12;
            var11 = var11.button;
            var6['button'] = var11;
            var6['hasError'] = var10;
            var9 = function onPress(arg1) {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var1 = arg1;
                    var3 = var1.type;
                    var2 = 'done';
                    if(!(var2 !== var3)) { _fun0019_ip = 195; continue _fun0019 }
case 65:
                    var2 = 'cancel';
                    if(!(var2 !== var3)) { _fun0019_ip = 195; continue _fun0019 }
case 196:
                    var2 = 'next';
                    if(!(var2 !== var3)) { _fun0019_ip = 4; continue _fun0019 }
case 197:
                    var2 = 'submit';
                    if(!(var2 === var3)) { _fun0019_ip = 198; continue _fun0019 }
case 63:
                    var3 = function() {
                        var5 = _closure2_slot10;
                        var1 = undefined;
                        var4 = true;
                        var4 = var5.bind(var1)(var4);
                        var4 = _closure2_slot0;
                        var4 = var4.successNodeId;
                        var5 = [''];
                        var5[1] = var4;
                        var _closure4_slot0 = var5;
                        var4 = _closure2_slot7;
                        var3 = _closure2_slot16;
                        var3 = var3.bind(var1)(var5);
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.then;
                        var3 = function() {
                            var4 = _closure2_slot15;
                            var1 = undefined;
                            var3 = false;
                            var3 = var4.bind(var1)(var3);
                            var3 = _closure2_slot17;
                            var2 = _closure4_slot0;
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.catch;
                        var3 = function() {
                            var3 = _closure2_slot15;
                            var1 = undefined;
                            var2 = true;
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var4 = var4.bind(var5)(var3);
                        var3 = var4.finally;
                        var2 = function() {
                            var3 = _closure2_slot10;
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
                    _fun0019_ip = 198; continue _fun0019;
case 4:
                    var3 = _closure2_slot17;
                    var1 = var1.target;
                    var2 = [''];
                    var2[1] = var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    _fun0019_ip = 198; continue _fun0019;
case 195:
                    var3 = _closure2_slot17;
                    var2 = [''];
                    var1 = -1;
                    var2[1] = var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 198:
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