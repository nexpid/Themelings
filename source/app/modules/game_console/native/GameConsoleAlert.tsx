// app/modules/game_console/native/GameConsoleAlert.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var12 = 0;
    var7 = var6[var12];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var11 = 1;
    var4 = var6[var11];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = metroImportDefault;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot5 = var7;
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 16;
    var9['marginTop'] = var10;
    var4['errorCodeText'] = var9;
    var9 = {};
    var9['marginTop'] = var12;
    var4['alertBody'] = var9;
    var9 = {};
    var9['flex'] = var11;
    var4['container'] = var9;
    var9 = {};
    var9['marginTop'] = var10;
    var4['body'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_console/native/GameConsoleAlert.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function SelfDismissibleAlertBody(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var14 = var2.body;
            var7 = var2.dismissCallback;
            var _closure2_slot0 = var7;
            var10 = var2.errorCodeMessage;
            var2 = _closure1_slot7;
            var5 = undefined;
            var12 = var2.bind(var5)();
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 5;
            var2 = var4[var2];
            var8 = var3.bind(var5)(var2);
            var4 = var8.useStateFromStores;
            var2 = _closure1_slot4;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var2 = _closure1_slot4;
                var1 = var2.getRemoteSessionId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var8 = var4.bind(var8)(var3, var2);
            var _closure2_slot1 = var8;
            var4 = _closure1_slot2;
            var3 = var4.useEffect;
            var2 = new Array(2);
            var2[0] = var8;
            var2[1] = var7;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0002_ip = 23; continue _fun0002 }
 13:
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 23:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            var2 = null;
            var1 = var14;
            if(!(var2 != var10)) { _fun0001_ip = 325; continue _fun0001 }
 139:
            var4 = _closure1_slot6;
            var3 = _closure1_slot3;
            var2 = {};
            var7 = var12.container;
            var2['style'] = var7;
            var9 = _closure1_slot5;
            var8 = _closure1_slot0;
            var11 = _closure1_slot1;
            var7 = 6;
            var6 = var11[var7];
            var6 = var8.bind(var5)(var6);
            var13 = var6.Text;
            var6 = {'maxFontSizeMultiplier': 1, 'variant': 'text-md/normal'};
            var16 = var12.body;
            var15 = new Array(2);
            var15[0] = var16;
            var16 = var12.alertBody;
            var15[1] = var16;
            var6['style'] = var15;
            var6['children'] = var14;
            var13 = var9.bind(var5)(var13, var6);
            var6 = new Array(2);
            var6[0] = var13;
            var7 = var11[var7];
            var7 = var8.bind(var5)(var7);
            var8 = var7.Text;
            var7 = {'maxFontSizeMultiplier': 1, 'variant': 'text-md/normal'};
            var13 = var12.body;
            var11 = new Array(2);
            var11[0] = var13;
            var12 = var12.errorCodeText;
            var11[1] = var12;
            var7['style'] = var11;
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 325:
            return var1;
        }
    };
    var3['SelfDismissibleAlertBody'] = var2;
    return var1;
})();