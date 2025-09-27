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
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 46; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 46:
            if(var2) { _fun0001_ip = 55; continue _fun0001 }
 49:
            var2 = var3.@@iterator;
 55:
            if(var2) { _fun0001_ip = 343; continue _fun0001 }
 61:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 323; continue _fun0001 }
 86:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 283; continue _fun0001 }
 96:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 270; continue _fun0001 }
 110:
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
            if(!var7) { _fun0001_ip = 163; continue _fun0001 }
 158:
            var7 = var3.constructor;
 163:
            var10 = var9;
            if(!var7) { _fun0001_ip = 179; continue _fun0001 }
 169:
            var7 = var3.constructor;
            var10 = var7.name;
 179:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 187:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 195:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 234; continue _fun0001 }
 205:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 247; continue _fun0001 }
 234:
            var9 = _closure1_slot24;
            var7 = var9.bind(var8)(var3, var8);
 247:
            _fun0001_ip = 265; continue _fun0001;
 249:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 265:
            var6 = var7;
            _fun0001_ip = 283; continue _fun0001;
 270:
            var7 = _closure1_slot24;
            var6 = var7.bind(var8)(var3, var8);
 283:
            var4 = var6;
            if(var4) { _fun0001_ip = 323; continue _fun0001 }
 289:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 323:
            if(!var4) { _fun0001_ip = 330; continue _fun0001 }
 326:
            _closure2_slot0 = var4;
 330:
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
 343:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot23 = var1;
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
            var2 = _closure1_slot10;
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
    var4 = var15.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.REMEDIATION_ELEMENT_TYPES;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.IN_APP_REPORTS_NODE;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot12 = var7;
    var4 = var4.ChannelTypes;
    var _closure1_slot13 = var4;
    var12 = 8;
    var4 = var6[var12];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UserLinkStatus;
    var _closure1_slot14 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var13 = var4.Fonts;
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
    var10 = 12;
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
    var9 = {'lineHeight': 20, 'marginBottom': 8, 'textAlign': 'center'};
    var4['subheader'] = var9;
    var9 = {'lineHeight': 16, 'marginBottom': 8, 'textAlign': 'center'};
    var4['description'] = var9;
    var9 = {'alignSelf': 'stretch', 'backgroundColor': null, 'borderRadius': null, 'borderColor': null, 'borderWidth': 1, 'padding': 8, 'flexDirection': 'row', 'marginBottom': 16, 'marginHorizontal': 16};
    var14 = var6[var10];
    var14 = var15.bind(var1)(var14);
    var14 = var14.unsafe_rawColors;
    var14 = var14.BLUE_345;
    var9['backgroundColor'] = var14;
    var14 = var6[var10];
    var14 = var15.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.xs;
    var9['borderRadius'] = var14;
    var14 = var6[var10];
    var14 = var15.bind(var1)(var14);
    var14 = var14.unsafe_rawColors;
    var14 = var14.BLUE_345;
    var9['borderColor'] = var14;
    var4['infoBox'] = var9;
    var9 = {'flex': 1, 'lineHeight': 18, 'marginStart': 8, 'marginTop': 3};
    var4['infoBoxText'] = var9;
    var9 = {};
    var9['marginBottom'] = var12;
    var14 = var6[var10];
    var14 = var15.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.xs;
    var9['borderRadius'] = var14;
    var4['childButton'] = var9;
    var9 = {'minHeight': 60, 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'flex-start', 'backgroundColor': null, 'paddingVertical': 16, 'paddingStart': 16, 'paddingEnd': 8};
    var14 = var6[var10];
    var14 = var15.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_SECONDARY;
    var9['backgroundColor'] = var14;
    var14 = var6[var10];
    var14 = var15.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.xs;
    var9['borderRadius'] = var14;
    var4['childContainer'] = var9;
    var9 = {'flex': 1, 'lineHeight': 20};
    var4['childButtonText'] = var9;
    var9 = {};
    var14 = 13;
    var14 = var6[var14];
    var14 = var15.bind(var1)(var14);
    var13 = var13.DISPLAY_EXTRABOLD;
    var10 = var6[var10];
    var10 = var15.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.HEADER_PRIMARY;
    var17 = var14.bind(var1)(var13, var10, var11);
    var18 = var9;
    var10 = copyDataProperties(var18, var17);
    var10 = 'marginBottom';
    var9[var10] = var12;
    var10 = 'paddingHorizontal';
    var9[var10] = var11;
    var4['remediationHeader'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot18 = var4;
    var4 = function HeaderView(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var1 = var1.node;
            var13 = var1.header;
            var15 = var1.subheader;
            var10 = var1.description;
            var1 = _closure1_slot18;
            var4 = undefined;
            var11 = var1.bind(var4)();
            var2 = _closure1_slot1;
            var3 = _closure1_slot3;
            var1 = 14;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = function() {
                var3 = _closure1_slot2;
                var2 = _closure1_slot3;
                var1 = 15;
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
            if(!var6) { _fun0004_ip = 107; continue _fun0004 }
 99:
            var5 = '';
            var6 = var5 !== var13;
 107:
            if(!var6) { _fun0004_ip = 174; continue _fun0004 }
 110:
            var12 = _closure1_slot16;
            var8 = _closure1_slot0;
            var16 = _closure1_slot3;
            var5 = 16;
            var5 = var16[var5];
            var5 = var8.bind(var4)(var5);
            var8 = var5.Text;
            var5 = {'style': null, 'variant': 'heading-xl/extrabold', 'color': 'header-primary', 'accessibilityRole': 'header'};
            var16 = var11.header;
            var5['style'] = var16;
            var5['children'] = var13;
            var6 = var12.bind(var4)(var8, var5);
 174:
            var5 = new Array(3);
            var5[0] = var6;
            var8 = var9 != var15;
            var6 = null;
            if(!var8) { _fun0004_ip = 277; continue _fun0004 }
 191:
            var12 = var15.length;
            var8 = 0;
            var8 = var12 > var8;
            var6 = null;
            if(!var8) { _fun0004_ip = 277; continue _fun0004 }
 207:
            var13 = _closure1_slot16;
            var12 = _closure1_slot0;
            var16 = _closure1_slot3;
            var8 = 16;
            var8 = var16[var8];
            var8 = var12.bind(var4)(var8);
            var12 = var8.Text;
            var8 = {'style': null, 'variant': 'text-md/medium', 'color': 'header-secondary'};
            var16 = var11.subheader;
            var8['style'] = var16;
            var14 = var14.bind(var4)(var15);
            var8['children'] = var14;
            var6 = var13.bind(var4)(var12, var8);
 277:
            var5[1] = var6;
            var8 = var9 != var10;
            var6 = null;
            if(!var8) { _fun0004_ip = 370; continue _fun0004 }
 290:
            var12 = var10.length;
            var8 = 0;
            var8 = var12 > var8;
            var6 = null;
            if(!var8) { _fun0004_ip = 370; continue _fun0004 }
 306:
            var9 = _closure1_slot16;
            var8 = _closure1_slot0;
            var12 = _closure1_slot3;
            var7 = 16;
            var7 = var12[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.Text;
            var7 = {'style': null, 'variant': 'text-xs/medium', 'color': 'header-secondary'};
            var11 = var11.description;
            var7['style'] = var11;
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 370:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot19 = var4;
    var4 = function InfoView(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var1 = var1.node;
            var11 = var1.info;
            var1 = _closure1_slot18;
            var5 = undefined;
            var12 = var1.bind(var5)();
            var2 = _closure1_slot1;
            var3 = _closure1_slot3;
            var1 = 14;
            var1 = var3[var1];
            var2 = var2.bind(var5)(var1);
            var1 = function() {
                var3 = _closure1_slot2;
                var2 = _closure1_slot3;
                var1 = 15;
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
            if(var2) { _fun0005_ip = 296; continue _fun0005 }
 72:
            var4 = _closure1_slot17;
            var3 = _closure1_slot6;
            var2 = {};
            var8 = var12.infoBox;
            var7 = new Array(2);
            var7[0] = var8;
            var9 = {};
            var8 = _closure1_slot0;
            var13 = _closure1_slot3;
            var14 = 17;
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
            var9 = _closure1_slot16;
            var6 = 18;
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
            var7 = 16;
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
 296:
            return var1;
        }
    };
    var _closure1_slot20 = var4;
    var4 = function ChildItem(arg1) {
        var5 = arg1;
        var6 = var5.child;
        var _closure2_slot0 = var6;
        var2 = null;
        var4 = Object.create(var2);
        var2 = 0;
        var4['child'] = var2;
        var16 = {};
        var15 = var5;
        var14 = var4;
        var3 = copyDataProperties(var16, var15, var14);
        var _closure2_slot1 = var3;
        var3 = _closure1_slot18;
        var4 = undefined;
        var13 = var3.bind(var4)();
        var5 = _closure1_slot4;
        var3 = 1;
        var6 = var5.bind(var4)(var6, var3);
        var12 = var6[var2];
        var7 = _closure1_slot5;
        var6 = var7.useState;
        var1 = function() {
            var1 = function() {
                var3 = _closure2_slot1;
                var2 = var3.onPress;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            return var1;
        };
        var1 = var6.bind(var7)(var1);
        var1 = var5.bind(var4)(var1, var3);
        var5 = var1[var2];
        var3 = _closure1_slot16;
        var10 = _closure1_slot0;
        var11 = _closure1_slot3;
        var1 = 19;
        var1 = var11[var1];
        var1 = var10.bind(var4)(var1);
        var2 = var1.PressableHighlight;
        var1 = {};
        var6 = var13.childButton;
        var1['style'] = var6;
        var6 = 'button';
        var1['accessibilityRole'] = var6;
        var1['onPress'] = var5;
        var7 = _closure1_slot17;
        var6 = _closure1_slot6;
        var5 = {};
        var8 = var13.childContainer;
        var5['style'] = var8;
        var8 = 16;
        var8 = var11[var8];
        var8 = var10.bind(var4)(var8);
        var10 = var8.Text;
        var8 = {'style': null, 'variant': 'text-md/semibold', 'color': 'header-primary'};
        var13 = var13.childButtonText;
        var8['style'] = var13;
        var8['children'] = var12;
        var10 = var3.bind(var4)(var10, var8);
        var8 = new Array(2);
        var8[0] = var10;
        var10 = _closure1_slot1;
        var9 = 20;
        var9 = var11[var9];
        var10 = var10.bind(var4)(var9);
        var9 = {};
        var9 = var3.bind(var4)(var10, var9);
        var8[1] = var9;
        var5['children'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot21 = var4;
    var4 = function ChildrenView(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var2 = var1.node;
            var8 = var2.children;
            var1 = var1.onSelectChild;
            var _closure2_slot0 = var1;
            var1 = _closure1_slot18;
            var5 = undefined;
            var7 = var1.bind(var5)();
            var9 = null;
            var3 = var9 == var8;
            var1 = null;
            if(var3) { _fun0006_ip = 108; continue _fun0006 }
 50:
            var4 = var8.length;
            var3 = 0;
            var1 = null;
            if(!(var3 !== var4)) { _fun0006_ip = 108; continue _fun0006 }
 63:
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
                var3 = _closure1_slot21;
                var2 = {};
                var2['child'] = var1;
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
 108:
            return var1;
        }
    };
    var _closure1_slot22 = var4;
    var4 = 51;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/in_app_reports/native/components/NodeView.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function NodeView(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var19 = arg1;
            var _closure2_slot0 = var19;
            var1 = _closure1_slot18;
            var4 = undefined;
            var8 = var1.bind(var4)();
            var3 = _closure1_slot0;
            var5 = _closure1_slot3;
            var1 = 21;
            var1 = var5[var1];
            var2 = var3.bind(var4)(var1);
            var1 = var2.useNavigation;
            var1 = var1.bind(var2)();
            var _closure2_slot1 = var1;
            var11 = var19.node;
            var _closure2_slot2 = var11;
            var25 = var19.reportType;
            var _closure2_slot3 = var25;
            var24 = var19.reportSubType;
            var23 = var19.history;
            var _closure2_slot4 = var23;
            var22 = var19.nodeMap;
            var _closure2_slot5 = var22;
            var20 = var19.closeModal;
            var _closure2_slot6 = var20;
            var33 = var19.addOnCloseCallback;
            var13 = var19.onSubmit;
            var _closure2_slot7 = var13;
            var26 = var19.reportId;
            var21 = var19.onNavigate;
            var _closure2_slot8 = var21;
            var14 = _closure1_slot5;
            var10 = var14.useMemo;
            var7 = new Array(1);
            var7[0] = var25;
            var2 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var1 = _closure2_slot3;
                    var4 = var1.name;
                    var3 = 'message';
                    var1 = undefined;
                    if(!(var3 === var4)) { _fun0008_ip = 37; continue _fun0008 }
 22:
                    var2 = _closure2_slot3;
                    var2 = var2.record;
                    var1 = var2.channel_id;
 37:
                    return var1;
                }
            };
            var35 = var10.bind(var14)(var2, var7);
            var2 = _closure1_slot25;
            var7 = 'checkbox';
            var16 = var2.bind(var4)(var11, var7);
            var _closure2_slot9 = var16;
            var7 = 'text_line_resource';
            var34 = var2.bind(var4)(var11, var7);
            var7 = 'text';
            var32 = var2.bind(var4)(var11, var7);
            var7 = 22;
            var7 = var5[var7];
            var7 = var3.bind(var4)(var7);
            var7 = var7.ReportMenuTypeSets;
            var12 = var7.REPORT_TO_MOD;
            var10 = var12.has;
            var7 = var25.name;
            var18 = var10.bind(var12)(var7);
            var7 = var14.useState;
            var30 = false;
            var7 = var7.bind(var14)(var30);
            var29 = _closure1_slot4;
            var10 = 2;
            var7 = var29.bind(var4)(var7, var10);
            var15 = 0;
            var12 = var7[var15];
            var27 = 1;
            var7 = var7[var27];
            var _closure2_slot10 = var7;
            var7 = var14.useState;
            var7 = var7.bind(var14)(var30);
            var7 = var29.bind(var4)(var7, var10);
            var28 = var7[var15];
            var _closure2_slot11 = var28;
            var7 = var7[var27];
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
            var7 = var7[var27];
            var _closure2_slot14 = var7;
            var7 = var14.useState;
            var7 = var7.bind(var14)(var30);
            var7 = var29.bind(var4)(var7, var10);
            var10 = var7[var15];
            var7 = var7[var27];
            var _closure2_slot15 = var7;
            var29 = var14.useCallback;
            var27 = new Array(3);
            var27[0] = var11;
            var27[1] = var16;
            var27[2] = var17;
            var7 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
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
                    if(!var3) { _fun0009_ip = 68; continue _fun0009 }
 42:
                    var3 = {};
                    var5 = _closure2_slot9;
                    var5 = var5.name;
                    var3['name'] = var5;
                    var4 = _closure2_slot13;
                    var3['state'] = var4;
                    var2 = var3;
 68:
                    var1['multiSelect'] = var2;
                    return var1;
                }
            };
            var7 = var29.bind(var14)(var7, var27);
            var _closure2_slot16 = var7;
            var30 = var14.useEffect;
            var29 = new Array(1);
            var29[0] = var16;
            var27 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var3 = _closure2_slot9;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0010_ip = 129; continue _fun0010 }
 15:
                    var2 = _closure2_slot9;
                    var2 = var2.data;
                    if(!(var1 != var2)) { _fun0010_ip = 129; continue _fun0010 }
 28:
                    var11 = function _loop(arg1, arg2) {
                        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                            var2 = arg1;
                            var _closure4_slot0 = var2;
                            var2 = arg2;
                            var _closure4_slot1 = var2;
                            var3 = _closure3_slot0;
                            var2 = true;
                            if(!(var2 === var3)) { _fun0011_ip = 48; continue _fun0011 }
 29:
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
 48:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var1 = _closure1_slot23;
                    var9 = undefined;
                    var8 = var1.bind(var9)(var2);
                    var2 = var8.bind(var9)();
                    var1 = var2.done;
                    var7 = 4;
                    var6 = 0;
                    var5 = 1;
                    var4 = 2;
                    var3 = 3;
                    if(var1) { _fun0010_ip = 129; continue _fun0010 }
 73:
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
                    if(!var1) { _fun0010_ip = 73; continue _fun0010 }
 129:
                    var1 = undefined;
                    return var1;
                }
            };
            var27 = var30.bind(var14)(var27, var29);
            var29 = var14.useEffect;
            var27 = new Array(2);
            var27[0] = var1;
            var27[1] = var19;
            var19 = function() {
                var4 = _closure2_slot1;
                var3 = var4.addListener;
                var2 = 'beforeRemove';
                var1 = function() {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                        var2 = _closure2_slot0;
                        var3 = var2.onNavigate;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0012_ip = 40; continue _fun0012 }
 19:
                        var3 = _closure2_slot0;
                        var2 = var3.onNavigate;
                        var1 = '..';
                        var1 = var2.bind(var3)(var1);
 40:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var19 = var29.bind(var14)(var19, var27);
            var27 = var14.useEffect;
            var29 = var11.is_auto_submit;
            var19 = new Array(4);
            var19[0] = var29;
            var19[1] = var28;
            var19[2] = var13;
            var13 = var11.id;
            var19[3] = var13;
            var13 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var1 = _closure2_slot2;
                    var1 = var1.is_auto_submit;
                    if(!var1) { _fun0013_ip = 23; continue _fun0013 }
 16:
                    var2 = _closure2_slot11;
                    var1 = !var2;
 23:
                    if(!var1) { _fun0013_ip = 88; continue _fun0013 }
 26:
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
 88:
                    var1 = undefined;
                    return var1;
                }
            };
            var13 = var27.bind(var14)(var13, var19);
            var19 = var14.useCallback;
            var13 = new Array(8);
            var13[0] = var11;
            var13[1] = var22;
            var13[2] = var1;
            var13[3] = var23;
            var13[4] = var21;
            var13[5] = var20;
            var13[6] = var25;
            var13[7] = var7;
            var7 = function(arg1) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
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
                    if(!(var5 != var3)) { _fun0014_ip = 426; continue _fun0014 }
 57:
                    var7 = _closure1_slot25;
                    var6 = 'skip';
                    var6 = var7.bind(var1)(var3, var6);
                    if(!(var5 != var6)) { _fun0014_ip = 106; continue _fun0014 }
 75:
                    var6 = var3.button;
                    var8 = var5 == var6;
                    var7 = undefined;
                    if(var8) { _fun0014_ip = 95; continue _fun0014 }
 90:
                    var7 = var6.type;
 95:
                    var6 = 'next';
                    if(!(var6 !== var7)) { _fun0014_ip = 389; continue _fun0014 }
 106:
                    var6 = _closure2_slot3;
                    var7 = var6.name;
                    var8 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var9 = 23;
                    var6 = var6[var9];
                    var6 = var8.bind(var1)(var6);
                    var6 = var6.ReportNames;
                    var6 = var6.MESSAGE;
                    if(!(var7 !== var6)) { _fun0014_ip = 193; continue _fun0014 }
 151:
                    var6 = _closure2_slot3;
                    var7 = var6.name;
                    var8 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var6 = var6[var9];
                    var6 = var8.bind(var1)(var6);
                    var6 = var6.ReportNames;
                    var6 = var6.FIRST_DM;
                    if(!(var7 === var6)) { _fun0014_ip = 308; continue _fun0014 }
 193:
                    var10 = _closure2_slot3;
                    var6 = var10.record;
                    var13 = var6.id;
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot3;
                    var6 = 24;
                    var6 = var8[var6];
                    var9 = var7.bind(var1)(var6);
                    var8 = var9.trackWithMetadata;
                    var6 = _closure1_slot12;
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
 308:
                    var8 = _closure2_slot1;
                    var7 = var8.push;
                    var6 = _closure1_slot11;
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
                    if(!(var5 != var4)) { _fun0014_ip = 434; continue _fun0014 }
 373:
                    var5 = _closure2_slot8;
                    var4 = var3.key;
                    var4 = var5.bind(var1)(var4);
                    _fun0014_ip = 434; continue _fun0014;
 389:
                    var4 = _closure2_slot17;
                    var3 = var3.button;
                    var5 = var3.target;
                    var3 = [''];
                    var3[1] = var5;
                    var3 = var4.bind(var1)(var3);
                    return var3;
 426:
                    var2 = _closure2_slot6;
                    var2 = var2.bind(var1)();
 434:
                    return var1;
                }
            };
            var22 = var19.bind(var14)(var7, var13);
            var _closure2_slot17 = var22;
            var13 = var14.useEffect;
            var7 = new Array(3);
            var7[0] = var11;
            var7[1] = var23;
            var7[2] = var1;
            var1 = function() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                    var1 = _closure2_slot2;
                    var3 = var1.button;
                    var5 = null;
                    var6 = var5 == var3;
                    var1 = undefined;
                    var4 = undefined;
                    if(var6) { _fun0015_ip = 31; continue _fun0015 }
 26:
                    var4 = var3.type;
 31:
                    var3 = 'done';
                    var3 = var3 === var4;
                    if(var3) { _fun0015_ip = 74; continue _fun0015 }
 42:
                    var4 = _closure2_slot2;
                    var4 = var4.button;
                    var6 = var5 == var4;
                    var5 = undefined;
                    if(var6) { _fun0015_ip = 66; continue _fun0015 }
 61:
                    var5 = var4.type;
 66:
                    var4 = 'cancel';
                    var3 = var4 === var5;
 74:
                    if(var3) { _fun0015_ip = 92; continue _fun0015 }
 77:
                    var4 = _closure2_slot4;
                    var5 = var4.length;
                    var4 = 0;
                    var3 = var4 === var5;
 92:
                    if(!var3) { _fun0015_ip = 124; continue _fun0015 }
 95:
                    var4 = _closure2_slot1;
                    var3 = var4.setOptions;
                    var2 = {};
                    var5 = _closure1_slot28;
                    var2['headerLeft'] = var5;
                    var2 = var3.bind(var4)(var2);
 124:
                    return var1;
                }
            };
            var1 = var13.bind(var14)(var1, var7);
            var13 = var14.useCallback;
            var7 = function(arg1) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                    var5 = arg1;
                    var4 = _closure1_slot8;
                    var2 = var4.getChannel;
                    var1 = var5.getChannelId;
                    var1 = var1.bind(var5)();
                    var7 = var2.bind(var4)(var1);
                    var1 = null;
                    var1 = var1 != var7;
                    if(!var1) { _fun0016_ip = 123; continue _fun0016 }
 39:
                    var4 = var7.type;
                    var2 = _closure1_slot13;
                    var2 = var2.DM;
                    var2 = var4 !== var2;
                    if(!var2) { _fun0016_ip = 80; continue _fun0016 }
 61:
                    var5 = var7.type;
                    var4 = _closure1_slot13;
                    var4 = var4.GROUP_DM;
                    var2 = var5 !== var4;
 80:
                    if(!var2) { _fun0016_ip = 120; continue _fun0016 }
 83:
                    var6 = _closure1_slot9;
                    var5 = var6.canWithPartialContext;
                    var3 = _closure1_slot15;
                    var4 = var3.MANAGE_MESSAGES;
                    var3 = {};
                    var7 = var7.id;
                    var3['channelId'] = var7;
                    var2 = var5.bind(var6)(var4, var3);
 120:
                    var1 = var2;
 123:
                    return var1;
                }
            };
            var1 = new Array(0);
            var31 = var13.bind(var14)(var7, var1);
            var1 = 25;
            var1 = var5[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.useIarReportSettingsUpsells;
            var27 = var1.bind(var3)(var24);
            var1 = 'ignore_users';
            var1 = var2.bind(var4)(var11, var1);
            var13 = null;
            var30 = var13 != var1;
            if(!var30) { _fun0007_ip = 745; continue _fun0007 }
 677:
            var2 = var25.name;
            var1 = 'message';
            var1 = var1 === var2;
            if(var1) { _fun0007_ip = 708; continue _fun0007 }
 693:
            var3 = var25.name;
            var2 = 'first_dm';
            var1 = var2 === var3;
 708:
            if(var1) { _fun0007_ip = 724; continue _fun0007 }
 711:
            var3 = var25.name;
            var2 = 'user';
            var1 = var2 === var3;
 724:
            if(var1) { _fun0007_ip = 742; continue _fun0007 }
 727:
            var3 = var25.name;
            var2 = 'report_to_mod_message';
            var1 = var2 === var3;
 742:
            var30 = var1;
 745:
            var5 = _closure1_slot0;
            var7 = _closure1_slot3;
            var1 = 26;
            var1 = var7[var1];
            var2 = var5.bind(var4)(var1);
            var1 = var2.useUserIsTeen;
            var29 = var1.bind(var2)();
            var1 = 27;
            var1 = var7[var1];
            var14 = var5.bind(var4)(var1);
            var3 = var14.useIsFamilyCenterV2Enabled;
            var1 = 'share_with_parent_element';
            var1 = var3.bind(var14)(var1);
            var3 = 28;
            var3 = var7[var3];
            var7 = var5.bind(var4)(var3);
            var5 = var7.useUserForLinkStatus;
            var3 = _closure1_slot14;
            var3 = var3.ACTIVE;
            var37 = var5.bind(var7)(var3);
            if(!var29) { _fun0007_ip = 849; continue _fun0007 }
 840:
            var2 = var37.length;
            var29 = var2 > var15;
 849:
            if(!var29) { _fun0007_ip = 855; continue _fun0007 }
 852:
            var29 = var1;
 855:
            if(!var29) { _fun0007_ip = 878; continue _fun0007 }
 858:
            var2 = _closure1_slot25;
            var1 = 'share_with_parents';
            var1 = var2.bind(var4)(var11, var1);
            var29 = var13 != var1;
 878:
            var3 = _closure1_slot17;
            var2 = _closure1_slot0;
            var20 = _closure1_slot3;
            var1 = 29;
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
            var21 = _closure1_slot16;
            var19 = _closure1_slot1;
            var8 = 30;
            var8 = var20[var8];
            var19 = var19.bind(var4)(var8);
            var8 = {};
            var28 = _closure1_slot25;
            var20 = 'success';
            var20 = var28.bind(var4)(var11, var20);
            var8['element'] = var20;
            var19 = var21.bind(var4)(var19, var8);
            var8 = new Array(17);
            var8[0] = var19;
            var20 = _closure1_slot19;
            var19 = {};
            var19['node'] = var11;
            var19 = var21.bind(var4)(var20, var19);
            var8[1] = var19;
            var20 = _closure1_slot20;
            var19 = {};
            var19['node'] = var11;
            var19 = var21.bind(var4)(var20, var19);
            var8[2] = var19;
            var20 = var13 != var34;
            var19 = null;
            if(!var20) { _fun0007_ip = 1094; continue _fun0007 }
 1057:
            var28 = _closure1_slot16;
            var21 = _closure1_slot1;
            var36 = _closure1_slot3;
            var20 = 31;
            var20 = var36[var20];
            var21 = var21.bind(var4)(var20);
            var20 = {};
            var20['element'] = var34;
            var19 = var28.bind(var4)(var21, var20);
 1094:
            var8[3] = var19;
            var19 = var13 != var32;
            if(!var19) { _fun0007_ip = 1142; continue _fun0007 }
 1105:
            var28 = _closure1_slot16;
            var21 = _closure1_slot1;
            var34 = _closure1_slot3;
            var20 = 32;
            var20 = var34[var20];
            var21 = var21.bind(var4)(var20);
            var20 = {};
            var20['element'] = var32;
            var19 = var28.bind(var4)(var21, var20);
 1142:
            var8[4] = var19;
            var20 = _closure1_slot25;
            var19 = 'message_preview';
            var19 = var20.bind(var4)(var11, var19);
            var20 = var13 == var19;
            var19 = null;
            if(var20) { _fun0007_ip = 1256; continue _fun0007 }
 1169:
            var21 = var25.name;
            var20 = 'message';
            if(!(var20 !== var21)) { _fun0007_ip = 1214; continue _fun0007 }
 1182:
            var21 = var25.name;
            var20 = 'first_dm';
            if(!(var20 !== var21)) { _fun0007_ip = 1214; continue _fun0007 }
 1197:
            var21 = var25.name;
            var20 = 'report_to_mod_message';
            var19 = null;
            if(!(var20 === var21)) { _fun0007_ip = 1256; continue _fun0007 }
 1214:
            var28 = _closure1_slot16;
            var21 = _closure1_slot1;
            var32 = _closure1_slot3;
            var20 = 33;
            var20 = var32[var20];
            var21 = var21.bind(var4)(var20);
            var20 = {};
            var32 = var25.record;
            var20['message'] = var32;
            var19 = var28.bind(var4)(var21, var20);
 1256:
            var8[5] = var19;
            var20 = _closure1_slot25;
            var19 = 'user_preview';
            var19 = var20.bind(var4)(var11, var19);
            var20 = var13 != var19;
            var19 = null;
            if(!var20) { _fun0007_ip = 1342; continue _fun0007 }
 1285:
            var21 = var25.name;
            var20 = 'user';
            var19 = null;
            if(!(var20 === var21)) { _fun0007_ip = 1342; continue _fun0007 }
 1300:
            var28 = _closure1_slot16;
            var21 = _closure1_slot1;
            var32 = _closure1_slot3;
            var20 = 34;
            var20 = var32[var20];
            var21 = var21.bind(var4)(var20);
            var20 = {};
            var32 = var25.record;
            var20['user'] = var32;
            var19 = var28.bind(var4)(var21, var20);
 1342:
            var8[6] = var19;
            var20 = _closure1_slot25;
            var19 = 'channel_preview';
            var19 = var20.bind(var4)(var11, var19);
            var20 = var13 != var19;
            var19 = null;
            if(!var20) { _fun0007_ip = 1431; continue _fun0007 }
 1371:
            var21 = var25.name;
            var20 = 'stage_channel';
            var19 = null;
            if(!(var20 === var21)) { _fun0007_ip = 1431; continue _fun0007 }
 1388:
            var28 = _closure1_slot16;
            var21 = _closure1_slot1;
            var32 = _closure1_slot3;
            var20 = 35;
            var20 = var32[var20];
            var21 = var21.bind(var4)(var20);
            var20 = {};
            var32 = var25.record;
            var20['stageInstance'] = var32;
            var19 = var28.bind(var4)(var21, var20);
 1431:
            var8[7] = var19;
            var20 = _closure1_slot25;
            var19 = 'guild_preview';
            var19 = var20.bind(var4)(var11, var19);
            var20 = var13 != var19;
            var19 = null;
            if(!var20) { _fun0007_ip = 1517; continue _fun0007 }
 1460:
            var21 = var25.name;
            var20 = 'guild';
            var19 = null;
            if(!(var20 === var21)) { _fun0007_ip = 1517; continue _fun0007 }
 1475:
            var28 = _closure1_slot16;
            var21 = _closure1_slot1;
            var32 = _closure1_slot3;
            var20 = 36;
            var20 = var32[var20];
            var21 = var21.bind(var4)(var20);
            var20 = {};
            var32 = var25.record;
            var20['guild'] = var32;
            var19 = var28.bind(var4)(var21, var20);
 1517:
            var8[8] = var19;
            var20 = _closure1_slot25;
            var19 = 'guild_scheduled_event_preview';
            var19 = var20.bind(var4)(var11, var19);
            var20 = var13 != var19;
            var19 = null;
            if(!var20) { _fun0007_ip = 1604; continue _fun0007 }
 1546:
            var21 = var25.name;
            var20 = 'guild_scheduled_event';
            var19 = null;
            if(!(var20 === var21)) { _fun0007_ip = 1604; continue _fun0007 }
 1561:
            var28 = _closure1_slot16;
            var21 = _closure1_slot1;
            var32 = _closure1_slot3;
            var20 = 37;
            var20 = var32[var20];
            var21 = var21.bind(var4)(var20);
            var20 = {};
            var32 = var25.record;
            var20['event'] = var32;
            var19 = var28.bind(var4)(var21, var20);
 1604:
            var8[9] = var19;
            var20 = _closure1_slot25;
            var19 = 'guild_discovery_preview';
            var19 = var20.bind(var4)(var11, var19);
            var20 = var13 != var19;
            var19 = null;
            if(!var20) { _fun0007_ip = 1692; continue _fun0007 }
 1633:
            var21 = var25.name;
            var20 = 'guild_discovery';
            var19 = null;
            if(!(var20 === var21)) { _fun0007_ip = 1692; continue _fun0007 }
 1650:
            var28 = _closure1_slot16;
            var21 = _closure1_slot1;
            var32 = _closure1_slot3;
            var20 = 38;
            var20 = var32[var20];
            var21 = var21.bind(var4)(var20);
            var20 = {};
            var32 = var25.record;
            var20['guild'] = var32;
            var19 = var28.bind(var4)(var21, var20);
 1692:
            var8[10] = var19;
            var21 = _closure1_slot16;
            var20 = _closure1_slot1;
            var28 = _closure1_slot3;
            var19 = 39;
            var19 = var28[var19];
            var20 = var20.bind(var4)(var19);
            var19 = {};
            var32 = _closure1_slot25;
            var28 = 'breadcrumbs';
            var28 = var32.bind(var4)(var11, var28);
            var19['element'] = var28;
            var28 = var25.name;
            var19['menuName'] = var28;
            var19['history'] = var23;
            var19 = var21.bind(var4)(var20, var19);
            var8[11] = var19;
            var19 = _closure1_slot27;
            var19 = var19.bind(var4)(var11);
            if(!var19) { _fun0007_ip = 2531; continue _fun0007 }
 1781:
            var23 = _closure1_slot17;
            var21 = _closure1_slot1;
            var28 = _closure1_slot3;
            var20 = 40;
            var20 = var28[var20];
            var21 = var21.bind(var4)(var20);
            var20 = {};
            var32 = var30;
            if(!var32) { _fun0007_ip = 1891; continue _fun0007 }
 1813:
            var36 = _closure1_slot16;
            var34 = _closure1_slot1;
            var38 = _closure1_slot3;
            var28 = 41;
            var28 = var38[var28];
            var34 = var34.bind(var4)(var28);
            var28 = {};
            var39 = var25.name;
            var38 = 'user';
            if(!(var38 !== var39)) { _fun0007_ip = 1866; continue _fun0007 }
 1852:
            var38 = var25.record;
            var38 = var38.author;
            _fun0007_ip = 1872; continue _fun0007;
 1866:
            var38 = var25.record;
 1872:
            var28['user'] = var38;
            var28['channelId'] = var35;
            var28['reportId'] = var26;
            var32 = var36.bind(var4)(var34, var28);
 1891:
            var28 = new Array(6);
            var28[0] = var32;
            if(!var29) { _fun0007_ip = 1939; continue _fun0007 }
 1902:
            var36 = _closure1_slot16;
            var34 = _closure1_slot1;
            var38 = _closure1_slot3;
            var32 = 42;
            var32 = var38[var32];
            var34 = var34.bind(var4)(var32);
            var32 = {};
            var32['parents'] = var37;
            var29 = var36.bind(var4)(var34, var32);
 1939:
            var28[1] = var29;
            var32 = _closure1_slot25;
            var29 = 'block_users';
            var29 = var32.bind(var4)(var11, var29);
            var29 = var13 != var29;
            if(!var29) { _fun0007_ip = 2034; continue _fun0007 }
 1966:
            var34 = var25.name;
            var32 = 'message';
            var32 = var32 === var34;
            if(var32) { _fun0007_ip = 1997; continue _fun0007 }
 1982:
            var36 = var25.name;
            var34 = 'first_dm';
            var32 = var34 === var36;
 1997:
            if(var32) { _fun0007_ip = 2013; continue _fun0007 }
 2000:
            var36 = var25.name;
            var34 = 'user';
            var32 = var34 === var36;
 2013:
            if(var32) { _fun0007_ip = 2031; continue _fun0007 }
 2016:
            var36 = var25.name;
            var34 = 'report_to_mod_message';
            var32 = var34 === var36;
 2031:
            var29 = var32;
 2034:
            if(!var29) { _fun0007_ip = 2115; continue _fun0007 }
 2037:
            var36 = _closure1_slot16;
            var34 = _closure1_slot1;
            var37 = _closure1_slot3;
            var32 = 43;
            var32 = var37[var32];
            var34 = var34.bind(var4)(var32);
            var32 = {};
            var38 = var25.name;
            var37 = 'user';
            if(!(var37 !== var38)) { _fun0007_ip = 2090; continue _fun0007 }
 2076:
            var37 = var25.record;
            var37 = var37.author;
            _fun0007_ip = 2096; continue _fun0007;
 2090:
            var37 = var25.record;
 2096:
            var32['user'] = var37;
            var32['channelId'] = var35;
            var32['reportId'] = var26;
            var29 = var36.bind(var4)(var34, var32);
 2115:
            var28[2] = var29;
            var29 = !var30;
            if(var30) { _fun0007_ip = 2145; continue _fun0007 }
 2125:
            var32 = _closure1_slot25;
            var30 = 'mute_users';
            var30 = var32.bind(var4)(var11, var30);
            var29 = var13 != var30;
 2145:
            if(!var29) { _fun0007_ip = 2216; continue _fun0007 }
 2148:
            var32 = var25.name;
            var30 = 'message';
            var30 = var30 === var32;
            if(var30) { _fun0007_ip = 2179; continue _fun0007 }
 2164:
            var34 = var25.name;
            var32 = 'first_dm';
            var30 = var32 === var34;
 2179:
            if(var30) { _fun0007_ip = 2195; continue _fun0007 }
 2182:
            var34 = var25.name;
            var32 = 'user';
            var30 = var32 === var34;
 2195:
            if(var30) { _fun0007_ip = 2213; continue _fun0007 }
 2198:
            var34 = var25.name;
            var32 = 'report_to_mod_message';
            var30 = var32 === var34;
 2213:
            var29 = var30;
 2216:
            if(!var29) { _fun0007_ip = 2297; continue _fun0007 }
 2219:
            var34 = _closure1_slot16;
            var32 = _closure1_slot1;
            var36 = _closure1_slot3;
            var30 = 44;
            var30 = var36[var30];
            var32 = var32.bind(var4)(var30);
            var30 = {};
            var37 = var25.name;
            var36 = 'user';
            if(!(var36 !== var37)) { _fun0007_ip = 2272; continue _fun0007 }
 2258:
            var36 = var25.record;
            var36 = var36.author;
            _fun0007_ip = 2278; continue _fun0007;
 2272:
            var36 = var25.record;
 2278:
            var30['user'] = var36;
            var30['channelId'] = var35;
            var30['reportId'] = var26;
            var29 = var34.bind(var4)(var32, var30);
 2297:
            var28[3] = var29;
            var30 = _closure1_slot25;
            var29 = 'delete_message';
            var29 = var30.bind(var4)(var11, var29);
            var29 = var13 != var29;
            if(!var29) { _fun0007_ip = 2358; continue _fun0007 }
 2324:
            var32 = var25.name;
            var30 = 'message';
            var30 = var30 === var32;
            if(var30) { _fun0007_ip = 2355; continue _fun0007 }
 2340:
            var34 = var25.name;
            var32 = 'report_to_mod_message';
            var30 = var32 === var34;
 2355:
            var29 = var30;
 2358:
            if(!var29) { _fun0007_ip = 2372; continue _fun0007 }
 2361:
            var30 = var25.record;
            var29 = var31.bind(var4)(var30);
 2372:
            if(!var29) { _fun0007_ip = 2422; continue _fun0007 }
 2375:
            var32 = _closure1_slot16;
            var31 = _closure1_slot1;
            var34 = _closure1_slot3;
            var30 = 45;
            var30 = var34[var30];
            var31 = var31.bind(var4)(var30);
            var30 = {};
            var34 = var25.record;
            var30['message'] = var34;
            var30['reportId'] = var26;
            var29 = var32.bind(var4)(var31, var30);
 2422:
            var28[4] = var29;
            var30 = _closure1_slot25;
            var29 = 'leave_guild';
            var29 = var30.bind(var4)(var11, var29);
            var29 = var13 != var29;
            if(!var29) { _fun0007_ip = 2462; continue _fun0007 }
 2449:
            var31 = var25.name;
            var30 = 'guild';
            var29 = var30 === var31;
 2462:
            if(!var29) { _fun0007_ip = 2517; continue _fun0007 }
 2465:
            var32 = _closure1_slot16;
            var31 = _closure1_slot1;
            var34 = _closure1_slot3;
            var30 = 46;
            var30 = var34[var30];
            var31 = var31.bind(var4)(var30);
            var30 = {};
            var34 = var25.record;
            var30['guild'] = var34;
            var30['reportId'] = var26;
            var30['addCallback'] = var33;
            var29 = var32.bind(var4)(var31, var30);
 2517:
            var28[5] = var29;
            var20['children'] = var28;
            var19 = var23.bind(var4)(var21, var20);
 2531:
            var8[12] = var19;
            var20 = _closure1_slot25;
            var19 = 'settings_upsells';
            var19 = var20.bind(var4)(var11, var19);
            var19 = var13 != var19;
            if(!var19) { _fun0007_ip = 2592; continue _fun0007 }
 2558:
            var21 = var25.name;
            var20 = 'message';
            var20 = var20 === var21;
            if(var20) { _fun0007_ip = 2589; continue _fun0007 }
 2574:
            var23 = var25.name;
            var21 = 'report_to_mod_message';
            var20 = var21 === var23;
 2589:
            var19 = var20;
 2592:
            if(!var19) { _fun0007_ip = 2599; continue _fun0007 }
 2595:
            var19 = var13 != var27;
 2599:
            if(!var19) { _fun0007_ip = 2669; continue _fun0007 }
 2602:
            var23 = _closure1_slot16;
            var21 = _closure1_slot1;
            var28 = _closure1_slot3;
            var20 = 47;
            var20 = var28[var20];
            var21 = var21.bind(var4)(var20);
            var20 = {};
            var20['settingsUpsells'] = var27;
            var27 = var25.record;
            var27 = var27.channel_id;
            var20['channelId'] = var27;
            var20['reportId'] = var26;
            var20['reportType'] = var25;
            var20['reportSubType'] = var24;
            var19 = var23.bind(var4)(var21, var20);
 2669:
            var8[13] = var19;
            var21 = _closure1_slot16;
            var20 = _closure1_slot1;
            var23 = _closure1_slot3;
            var19 = 48;
            var19 = var23[var19];
            var20 = var20.bind(var4)(var19);
            var19 = {};
            var19['element'] = var16;
            var19['state'] = var17;
            var23 = function onPress(arg1, arg2) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                    var2 = arg1;
                    var3 = {};
                    var4 = _closure2_slot13;
                    var7 = var3;
                    var6 = var4;
                    var5 = copyDataProperties(var7, var6);
                    var4 = var2 in var4;
                    if(var4) { _fun0017_ip = 38; continue _fun0017 }
 29:
                    var4 = arg2;
                    var3[var2] = var4;
                    _fun0017_ip = 42; continue _fun0017;
 38:
                    var2 = delete var3[var2];
 42:
                    var2 = _closure2_slot14;
                    var1 = undefined;
                    var2 = var2.bind(var1)(var3);
                    return var1;
                }
            };
            var19['onPress'] = var23;
            var19 = var21.bind(var4)(var20, var19);
            var8[14] = var19;
            var20 = _closure1_slot22;
            var19 = {};
            var19['node'] = var11;
            var19['onSelectChild'] = var22;
            var19 = var21.bind(var4)(var20, var19);
            var8[15] = var19;
            var19 = _closure1_slot25;
            var24 = 'external_link';
            var19 = var19.bind(var4)(var11, var24);
            var20 = var13 != var19;
            var19 = null;
            if(!var20) { _fun0007_ip = 2825; continue _fun0007 }
 2778:
            var22 = _closure1_slot16;
            var21 = _closure1_slot1;
            var23 = _closure1_slot3;
            var20 = 49;
            var20 = var23[var20];
            var21 = var21.bind(var4)(var20);
            var20 = {};
            var23 = _closure1_slot26;
            var23 = var23.bind(var4)(var11, var24);
            var20['elements'] = var23;
            var19 = var22.bind(var4)(var21, var20);
 2825:
            var8[16] = var19;
            var5['children'] = var8;
            var7 = var3.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot16;
            var7 = _closure1_slot1;
            var19 = _closure1_slot3;
            var6 = 50;
            var6 = var19[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var6['isModeratorReport'] = var18;
            if(var12) { _fun0007_ip = 2933; continue _fun0007 }
 2881:
            var18 = var13 == var16;
            var13 = undefined;
            if(var18) { _fun0007_ip = 2896; continue _fun0007 }
 2890:
            var13 = var16.should_submit_data;
 2896:
            var13 = var14 === var13;
            if(!var13) { _fun0007_ip = 2930; continue _fun0007 }
 2903:
            var14 = global;
            var16 = var14.Object;
            var14 = var16.keys;
            var14 = var14.bind(var16)(var17);
            var14 = var14.length;
            var13 = var15 === var14;
 2930:
            var12 = var13;
 2933:
            var6['disabled'] = var12;
            var11 = var11.button;
            var6['button'] = var11;
            var6['hasError'] = var10;
            var9 = function onPress(arg1) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                    var1 = arg1;
                    var3 = var1.type;
                    var2 = 'done';
                    if(!(var2 !== var3)) { _fun0018_ip = 91; continue _fun0018 }
 16:
                    var2 = 'cancel';
                    if(!(var2 !== var3)) { _fun0018_ip = 91; continue _fun0018 }
 24:
                    var2 = 'next';
                    if(!(var2 !== var3)) { _fun0018_ip = 55; continue _fun0018 }
 32:
                    var2 = 'submit';
                    if(!(var2 === var3)) { _fun0018_ip = 125; continue _fun0018 }
 40:
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
                    _fun0018_ip = 125; continue _fun0018;
 55:
                    var3 = _closure2_slot17;
                    var1 = var1.target;
                    var2 = [''];
                    var2[1] = var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    _fun0018_ip = 125; continue _fun0018;
 91:
                    var3 = _closure2_slot17;
                    var2 = [''];
                    var1 = -1;
                    var2[1] = var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
 125:
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