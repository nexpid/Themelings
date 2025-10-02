// app/modules/in_app_reports/native/components/InAppReportsBreadCrumbs.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
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
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot4 = var7;
    var4 = var4.jsxs;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var7 = {};
    var4 = {'flex': 0, 'alignSelf': 'stretch', 'marginBottom': 16, 'paddingHorizontal': 16};
    var7['container'] = var4;
    var4 = {'lineHeight': 16, 'marginBottom': 8};
    var7['title'] = var4;
    var4 = {'flexDirection': 'row', 'justifyContent': 'flex-start', 'marginBottom': 8, 'marginEnd': 32, 'overflow': 'visible'};
    var7['breadCrumbItemContainer'] = var4;
    var4 = {'marginStart': 2, 'marginTop': 8, 'width': 4, 'height': 4, 'borderRadius': 2};
    var11 = 4;
    var10 = var6[var11];
    var10 = var12.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BG_BRAND;
    var4['backgroundColor'] = var10;
    var7['breadCrumbDot'] = var4;
    var10 = {'position': 'absolute', 'width': 2, 'top': 10, 'bottom': 4294967284, 'left': 3};
    var4 = 10;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_TERTIARY;
    var10['backgroundColor'] = var11;
    var7['breadCrumbBar'] = var10;
    var10 = {'marginStart': 8, 'lineHeight': 20};
    var7['breadCrumbText'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot6 = var7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/in_app_reports/native/components/InAppReportsBreadCrumbs.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function Breadcrumbs(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var3 = var6.element;
            var15 = var6.menuName;
            var1 = null;
            var5 = Object.create(var1);
            var4 = 0;
            var5['element'] = var4;
            var5['menuName'] = var4;
            var21 = {};
            var20 = var6;
            var19 = var5;
            var2 = copyDataProperties(var21, var20, var19);
            var6 = undefined;
            var _closure2_slot1 = var6;
            var5 = _closure1_slot6;
            var12 = var5.bind(var6)();
            var _closure2_slot0 = var12;
            if(!(var1 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var3.type;
            var3 = 'breadcrumbs';
            if(!(var3 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 5;
            var3 = var7[var3];
            var7 = var5.bind(var6)(var3);
            var5 = var7.flatMap;
            var3 = var2.history;
            var2 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = arg1;
                    var4 = var1.destination;
                    var3 = var4;
                    var2 = var3[Symbol.iterator];
                    var3 = var2().next;
                    var6 = var3().value;
                    var3 = var2;
                    var5 = undefined;
                    var4 = var3 === var5;
                    var3 = undefined;
                    if(var4) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                    var3 = var6;
case 5:
                    if(var4) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                    var2.return();
case 7:
                    var7 = var1.multiSelect;
                    var1 = [null, null];
                    var2 = global;
                    var4 = var2.Object;
                    var2 = var4.values;
                    var6 = null;
                    var8 = var6 == var7;
                    var5 = undefined;
                    if(var8) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                    var5 = var7.state;
case 9:
                    if(!(var6 == var5)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                    var5 = {};
case 11:
                    var6 = var2.bind(var4)(var5);
                    var2 = var6.length;
                    var4 = 0;
                    if(!(var2 > var4)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                    var5 = var6.join;
                    var2 = ', ';
                    var2 = var5.bind(var6)(var2);
                    var1[var4] = var2;
case 13:
                    var2 = '';
                    if(!(var2 !== var3)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                    var2 = 1;
                    var1[var2] = var3;
case 15:
                    return var1;
                }
            };
            var5 = var5.bind(var7)(var3, var2);
            var3 = var5.filter;
            var2 = function(arg1) {
                var2 = null;
                var1 = arg1;
                var1 = var2 != var1;
                return var1;
            };
            var10 = var3.bind(var5)(var2);
            _closure2_slot1 = var10;
            var3 = var10.length;
            var2 = null;
            if(!(var4 !== var3)) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var5 = _closure1_slot5;
            var4 = _closure1_slot3;
            var3 = {};
            var7 = var12.container;
            var3['style'] = var7;
            var11 = _closure1_slot4;
            var14 = _closure1_slot0;
            var16 = _closure1_slot2;
            var7 = 6;
            var7 = var16[var7];
            var7 = var14.bind(var6)(var7);
            var9 = var7.Text;
            var7 = {'style': null, 'accessibilityRole': 'header', 'variant': 'text-xs/bold'};
            var12 = var12.title;
            var7['style'] = var12;
            var12 = 7;
            var12 = var16[var12];
            var12 = var14.bind(var6)(var12);
            var12 = var12.ReportMenuTypeSets;
            var14 = var12.REPORT_TO_MOD;
            var12 = var14.has;
            var18 = var12.bind(var14)(var15);
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var12 = 8;
            var14 = var17[var12];
            var14 = var16.bind(var6)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            if(var18) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var12 = var17[var12];
            var12 = var16.bind(var6)(var12);
            var12 = var12.t;
            var12 = var12.+3V9Tk;
            var12 = var14.bind(var15)(var12);
            _fun0001_ip = 21; continue _fun0001;
case 19:
            var16 = _closure1_slot1;
            var13 = 9;
            var13 = var17[var13];
            var13 = var16.bind(var6)(var13);
            var13 = var13.6mx/DA;
            var12 = var14.bind(var15)(var13);
case 21:
            var7['children'] = var12;
            var9 = var11.bind(var6)(var9, var7);
            var7 = new Array(2);
            var7[0] = var9;
            var9 = var10.map;
            var8 = function(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var9 = arg1;
                    var8 = arg2;
                    var5 = _closure1_slot5;
                    var4 = _closure1_slot3;
                    var3 = {};
                    var1 = _closure2_slot0;
                    var1 = var1.breadCrumbItemContainer;
                    var3['style'] = var1;
                    var1 = _closure2_slot1;
                    var7 = var1.length;
                    var1 = 1;
                    var1 = var7 - var1;
                    var7 = null;
                    if(!(var8 !== var1)) { _fun0003_ip = 4; continue _fun0003 }
case 22:
                    var12 = _closure1_slot4;
                    var11 = _closure1_slot3;
                    var10 = {};
                    var1 = _closure2_slot0;
                    var1 = var1.breadCrumbBar;
                    var10['style'] = var1;
                    var1 = undefined;
                    var7 = var12.bind(var1)(var11, var10);
case 4:
                    var1 = new Array(3);
                    var1[0] = var7;
                    var10 = _closure1_slot4;
                    var12 = _closure1_slot3;
                    var7 = {};
                    var11 = _closure2_slot0;
                    var2 = var11.breadCrumbDot;
                    var7['style'] = var2;
                    var2 = undefined;
                    var7 = var10.bind(var2)(var12, var7);
                    var1[1] = var7;
                    var7 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var6 = 6;
                    var6 = var12[var6];
                    var6 = var7.bind(var2)(var6);
                    var7 = var6.Text;
                    var6 = {'lineClamp': 2, 'ellipsizeMode': 'tail', 'style': null, 'variant': 'text-md/medium'};
                    var11 = var11.breadCrumbText;
                    var6['style'] = var11;
                    var6['children'] = var9;
                    var6 = var10.bind(var2)(var7, var6);
                    var1[2] = var6;
                    var3['children'] = var1;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var7 = var1.concat;
                    var6 = '';
                    var1 = '+';
                    var1 = var7.bind(var6)(var9, var1, var8);
                    var1 = var5.bind(var2)(var4, var3, var1);
                    return var1;
                }
            };
            var8 = var9.bind(var10)(var8);
            var7[1] = var8;
            var3['children'] = var7;
            var2 = var5.bind(var6)(var4, var3);
case 17:
            return var2;
case 2:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();