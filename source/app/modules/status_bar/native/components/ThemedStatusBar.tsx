// app/modules/status_bar/native/components/ThemedStatusBar.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/status_bar/native/components/ThemedStatusBar.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var7 = 4;
            var3 = var6[var7];
            var4 = undefined;
            var10 = var5.bind(var4)(var3);
            var9 = var10.useStateFromStores;
            var3 = _closure1_slot4;
            var8 = new Array(1);
            var8[0] = var3;
            var3 = function() {
                var2 = _closure1_slot4;
                var1 = var2.isAuthenticated;
                var1 = var1.bind(var2)();
                return var1;
            };
            var8 = var9.bind(var10)(var8, var3);
            var3 = 5;
            var3 = var6[var3];
            var9 = var5.bind(var4)(var3);
            var3 = var9.useIsModalOpen;
            var3 = var3.bind(var9)();
            var7 = var6[var7];
            var10 = var5.bind(var4)(var7);
            var9 = var10.useStateFromStores;
            var11 = _closure1_slot3;
            var7 = new Array(1);
            var7[0] = var11;
            var2 = function() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.isThemeDark;
                var1 = _closure1_slot3;
                var1 = var1.theme;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var9.bind(var10)(var7, var2);
            var2 = 7;
            var2 = var6[var2];
            var5 = var5.bind(var4)(var2);
            var2 = var5.useGlobalStatusIndicatorState;
            var2 = var2.bind(var5)();
            var6 = 'light-content';
            var5 = var6;
            if(!var8) { _fun0001_ip = 208; continue _fun0001 }
 152:
            if(!var8) { _fun0001_ip = 190; continue _fun0001 }
 155:
            if(var3) { _fun0001_ip = 190; continue _fun0001 }
 158:
            var3 = var2.isVisible;
            if(!var3) { _fun0001_ip = 176; continue _fun0001 }
 167:
            var2 = var2.isCustomBackground;
            if(var2) { _fun0001_ip = 185; continue _fun0001 }
 176:
            var2 = 'dark-content';
            if(!var7) { _fun0001_ip = 188; continue _fun0001 }
 185:
            var2 = var6;
 188:
            _fun0001_ip = 205; continue _fun0001;
 190:
            var3 = 'dark-content';
            if(!var7) { _fun0001_ip = 202; continue _fun0001 }
 199:
            var3 = var6;
 202:
            var2 = var3;
 205:
            var5 = var2;
 208:
            var3 = _closure1_slot5;
            var2 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 8;
            var1 = var6[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['barStyle'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();