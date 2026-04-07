// app/modules/auth/native/components/AuthFormView.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var6;
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
    var7 = var4.View;
    var _closure1_slot2 = var7;
    var4 = var4.ScrollView;
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
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var1 = {};
            var2 = {};
            var6 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = 4;
            var4 = var4[var3];
            var3 = undefined;
            var3 = var6.bind(var3)(var4);
            var3 = var3.colors;
            var3 = var3.BACKGROUND_BASE_LOW;
            var2['backgroundColor'] = var3;
            var3 = 1;
            var2['flex'] = var3;
            var1['container'] = var2;
            var2 = {};
            var2['flex'] = var3;
            var1['flex'] = var2;
            var2 = {};
            var6 = 0;
            if(!var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = 60;
case 2:
            var2['paddingTop'] = var6;
            var7 = 16;
            var6 = var7;
            if(!var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = 24;
case 4:
            var2['paddingRight'] = var6;
            var6 = var7;
            if(!var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = 24;
case 6:
            var2['paddingLeft'] = var6;
            var6 = 0;
            if(!var5) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var6 = var7;
case 8:
            var2['paddingBottom'] = var6;
            if(!var5) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var3 = 0;
case 10:
            var2['flex'] = var3;
            var1['content'] = var2;
            var2 = {'marginTop': 8, 'alignItems': 'center'};
            var1['subHeader'] = var2;
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/auth/native/components/AuthFormView.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function AuthFormView(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var7 = var1.children;
            var15 = var1.headerText;
            var12 = var1.subHeader;
            var8 = var1.contentStyle;
            var17 = var1.backgroundImageSource;
            var16 = var1.backgroundImageCover;
            var2 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 5;
            var1 = var3[var1];
            var5 = undefined;
            var1 = var2.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var2 = _closure1_slot6;
            var13 = var2.bind(var5)(var1);
            var4 = _closure1_slot5;
            if(var1) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var2 = _closure1_slot2;
            var1 = {};
            var6 = var13.container;
            var3 = new Array(2);
            var3[0] = var6;
            var6 = var13.flex;
            var3[1] = var6;
            var1['style'] = var3;
            var11 = _closure1_slot4;
            var10 = _closure1_slot0;
            var14 = _closure1_slot1;
            var3 = 7;
            var3 = var14[var3];
            var6 = var10.bind(var5)(var3);
            var3 = {};
            var3['backgroundImageSource'] = var17;
            var3['backgroundImageCover'] = var16;
            var6 = var11.bind(var5)(var6, var3);
            var3 = new Array(3);
            var3[0] = var6;
            var6 = 8;
            var6 = var14[var6];
            var10 = var10.bind(var5)(var6);
            var6 = {};
            var6 = var11.bind(var5)(var10, var6);
            var3[1] = var6;
            var10 = _closure1_slot3;
            var6 = {'contentInset': null, 'automaticallyAdjustContentInsets': false, 'keyboardShouldPersistTaps': 'handled', 'alwaysBounceVertical': false};
            var11 = {};
            var14 = 0;
            var11['top'] = var14;
            var6['contentInset'] = var11;
            var11 = var13.flex;
            var6['style'] = var11;
            var14 = var13.content;
            var11 = new Array(3);
            var11[0] = var14;
            var14 = var13.flex;
            var11[1] = var14;
            var11[2] = var8;
            var6['contentContainerStyle'] = var11;
            var14 = null;
            var11 = var14 != var15;
            var16 = null;
            if(!var11) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var18 = _closure1_slot4;
            var17 = _closure1_slot0;
            var19 = _closure1_slot1;
            var11 = 6;
            var11 = var19[var11];
            var17 = var17.bind(var5)(var11);
            var11 = {};
            var11['children'] = var15;
            var16 = var18.bind(var5)(var17, var11);
case 14:
            var11 = new Array(3);
            var11[0] = var16;
            var16 = var14 != var12;
            var14 = null;
            if(!var16) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var18 = _closure1_slot4;
            var17 = _closure1_slot2;
            var16 = {};
            var19 = var13.subHeader;
            var16['style'] = var19;
            var16['children'] = var12;
            var14 = var18.bind(var5)(var17, var16);
case 16:
            var11[1] = var14;
            var11[2] = var7;
            var6['children'] = var11;
            var6 = var4.bind(var5)(var10, var6);
            var3[2] = var6;
            var1['children'] = var3;
            var1 = var4.bind(var5)(var2, var1);
            _fun0002_ip = 18; continue _fun0002;
case 12:
            var3 = _closure1_slot3;
            var2 = {'contentInset': null, 'automaticallyAdjustContentInsets': false, 'keyboardShouldPersistTaps': 'handled', 'alwaysBounceVertical': false};
            var6 = {};
            var10 = 0;
            var6['top'] = var10;
            var2['contentInset'] = var6;
            var10 = var13.content;
            var6 = new Array(2);
            var6[0] = var10;
            var6[1] = var8;
            var2['contentContainerStyle'] = var6;
            var8 = null;
            var6 = var8 != var15;
            var10 = null;
            if(!var6) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var14 = _closure1_slot4;
            var11 = _closure1_slot0;
            var16 = _closure1_slot1;
            var6 = 6;
            var6 = var16[var6];
            var11 = var11.bind(var5)(var6);
            var6 = {};
            var6['children'] = var15;
            var10 = var14.bind(var5)(var11, var6);
case 19:
            var6 = new Array(3);
            var6[0] = var10;
            var10 = var8 != var12;
            var8 = null;
            if(!var10) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var11 = _closure1_slot4;
            var10 = _closure1_slot2;
            var9 = {};
            var13 = var13.subHeader;
            var9['style'] = var13;
            var9['children'] = var12;
            var8 = var11.bind(var5)(var10, var9);
case 21:
            var6[1] = var8;
            var6[2] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 18:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();