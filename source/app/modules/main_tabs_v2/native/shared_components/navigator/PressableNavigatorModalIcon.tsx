// app/modules/main_tabs_v2/native/shared_components/navigator/PressableNavigatorModalIcon.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/shared_components/navigator/PressableNavigatorModalIcon.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function PressableNavigatorModalIcon(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var2 = var1.navigation;
            var9 = var1.onPress;
            var4 = undefined;
            if(!(var9 === var4)) { _fun0001_ip = 26; continue _fun0001 }
 20:
            var9 = var2.goBack;
 26:
            var10 = var1.type;
            if(!(var10 === var4)) { _fun0001_ip = 39; continue _fun0001 }
 35:
            var10 = 'back';
 39:
            var3 = _closure1_slot3;
            var11 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 1;
            var1 = var7[var1];
            var2 = var11.bind(var4)(var1);
            var1 = {};
            var5 = true;
            var1['isModal'] = var5;
            var6 = _closure1_slot0;
            var5 = 2;
            var5 = var7[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.HeaderIconButton;
            var5 = {};
            var7 = 'back';
            var7 = var7 === var10;
            var13 = _closure1_slot2;
            if(var7) { _fun0001_ip = 123; continue _fun0001 }
 114:
            var10 = 4;
            var10 = var13[var10];
            _fun0001_ip = 130; continue _fun0001;
 123:
            var12 = 3;
            var10 = var13[var12];
 130:
            var10 = var11.bind(var4)(var10);
            var5['source'] = var10;
            var5['onPress'] = var9;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 5;
            var9 = var12[var8];
            var9 = var11.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var4)(var8);
            var8 = var8.t;
            if(var7) { _fun0001_ip = 203; continue _fun0001 }
 190:
            var7 = var8.cpT0Cg;
            var7 = var9.bind(var10)(var7);
            _fun0001_ip = 214; continue _fun0001;
 203:
            var8 = var8.13/7kZ;
            var7 = var9.bind(var10)(var8);
 214:
            var5['accessibilityLabel'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();