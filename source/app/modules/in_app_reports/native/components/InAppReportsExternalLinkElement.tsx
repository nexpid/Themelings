// app/modules/in_app_reports/native/components/InAppReportsExternalLinkElement.tsx
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
    var13 = 1;
    var4 = var6[var13];
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
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flex': 1, 'alignSelf': 'stretch', 'paddingHorizontal': 16};
    var4['linksContainer'] = var9;
    var9 = {};
    var10 = 8;
    var9['marginBottom'] = var10;
    var11 = 4;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.xs;
    var9['borderRadius'] = var14;
    var4['button'] = var9;
    var9 = {'minHeight': 60, 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'flex-start', 'backgroundColor': null, 'paddingVertical': 16, 'paddingStart': 16, 'paddingEnd': 8};
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_SECONDARY;
    var9['backgroundColor'] = var14;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.xs;
    var9['borderRadius'] = var14;
    var4['container'] = var9;
    var9 = {};
    var9['flex'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_4;
    var9['marginRight'] = var13;
    var4['buttonTextContainer'] = var9;
    var9 = {};
    var13 = 20;
    var9['lineHeight'] = var13;
    var4['buttonText'] = var9;
    var9 = {};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.INTERACTIVE_NORMAL;
    var9['color'] = var11;
    var4['linkIcon'] = var9;
    var9 = {};
    var9['marginBottom'] = var10;
    var4['headerText'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = function ExternalLinkItem(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var1 = var1.data;
            var2 = var1.url;
            var _closure2_slot0 = var2;
            var14 = var1.link_text;
            var17 = var1.link_description;
            var2 = var1.is_localized;
            var1 = _closure1_slot6;
            var5 = undefined;
            var13 = var1.bind(var5)();
            var15 = null;
            var1 = null;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot4;
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 7;
            var2 = var11[var2];
            var2 = var12.bind(var5)(var2);
            var3 = var2.PressableHighlight;
            var2 = {};
            var7 = var13.button;
            var2['style'] = var7;
            var7 = 'link';
            var2['accessibilityRole'] = var7;
            var6 = function onPress() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.openURL;
                var2 = _closure2_slot0;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2['onPress'] = var6;
            var8 = _closure1_slot5;
            var7 = _closure1_slot3;
            var6 = {};
            var9 = var13.container;
            var6['style'] = var9;
            var9 = {};
            var16 = var13.buttonTextContainer;
            var9['style'] = var16;
            var18 = 5;
            var11 = var11[var18];
            var11 = var12.bind(var5)(var11);
            var12 = var11.Text;
            var11 = {'style': null, 'variant': 'text-md/semibold', 'color': 'header-primary'};
            var16 = var13.buttonText;
            var11['style'] = var16;
            var11['children'] = var14;
            var12 = var4.bind(var5)(var12, var11);
            var11 = new Array(2);
            var11[0] = var12;
            var14 = var15 != var17;
            var12 = null;
            if(!var14) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var14 = '';
            var12 = null;
            if(!(var14 !== var17)) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var16 = _closure1_slot4;
            var15 = _closure1_slot0;
            var14 = _closure1_slot2;
            var14 = var14[var18];
            var14 = var15.bind(var5)(var14);
            var15 = var14.Text;
            var14 = {'variant': 'text-sm/normal', 'color': 'header-secondary'};
            var14['children'] = var17;
            var12 = var16.bind(var5)(var15, var14);
case 4:
            var11[1] = var12;
            var9['children'] = var11;
            var11 = var8.bind(var5)(var7, var9);
            var9 = new Array(2);
            var9[0] = var11;
            var12 = _closure1_slot4;
            var15 = _closure1_slot1;
            var16 = _closure1_slot2;
            var14 = 9;
            var10 = var16[var14];
            var11 = var15.bind(var5)(var10);
            var10 = {};
            var17 = 10;
            var17 = var16[var17];
            var17 = var15.bind(var5)(var17);
            var10['source'] = var17;
            var14 = var16[var14];
            var14 = var15.bind(var5)(var14);
            var14 = var14.Sizes;
            var14 = var14.MEDIUM;
            var10['size'] = var14;
            var13 = var13.linkIcon;
            var13 = var13.color;
            var10['color'] = var13;
            var10 = var12.bind(var5)(var11, var10);
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 2:
            return var1;
        }
    };
    var _closure1_slot7 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/in_app_reports/native/components/InAppReportsExternalLinkElement.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ExternalLinksElement(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var9 = var1.elements;
            var1 = _closure1_slot6;
            var5 = undefined;
            var12 = var1.bind(var5)();
            var1 = null;
            if(!(var1 != var9)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var3 = var9.length;
            var2 = 0;
            if(!(var2 !== var3)) { _fun0002_ip = 7; continue _fun0002 }
case 9:
            var3 = var9.find;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.data;
                var1 = var1.is_localized;
                return var1;
            };
            var2 = var3.bind(var9)(var2);
            if(!(var1 != var2)) { _fun0002_ip = 7; continue _fun0002 }
case 10:
            var3 = var9.some;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.data;
                var1 = var1.is_header_hidden;
                return var1;
            };
            var8 = var3.bind(var9)(var2);
            var4 = _closure1_slot5;
            var3 = _closure1_slot3;
            var2 = {};
            var10 = var12.linksContainer;
            var2['style'] = var10;
            var8 = !var8;
            if(!var8) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var11 = _closure1_slot4;
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var6 = 5;
            var6 = var16[var6];
            var6 = var15.bind(var5)(var6);
            var10 = var6.Text;
            var6 = {'style': null, 'variant': 'heading-deprecated-12/extrabold', 'color': 'header-secondary'};
            var12 = var12.headerText;
            var6['style'] = var12;
            var12 = 6;
            var13 = var16[var12];
            var13 = var15.bind(var5)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var12 = var16[var12];
            var12 = var15.bind(var5)(var12);
            var12 = var12.t;
            var12 = var12.hvVgAQ;
            var13 = var13.bind(var14)(var12);
            var12 = var13.toUpperCase;
            var12 = var12.bind(var13)();
            var6['children'] = var12;
            var8 = var11.bind(var5)(var10, var6);
case 11:
            var6 = new Array(2);
            var6[0] = var8;
            var8 = var9.map;
            var7 = function(arg1, arg2) {
                var1 = arg1;
                var1 = var1.data;
                var5 = _closure1_slot4;
                var4 = _closure1_slot7;
                var3 = {};
                var3['data'] = var1;
                var1 = global;
                var1 = var1.HermesInternal;
                var6 = var1.concat;
                var2 = 'external-link-';
                var1 = arg2;
                var2 = var6.bind(var2)(var1);
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var7 = var8.bind(var9)(var7);
            var6[1] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 7:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();