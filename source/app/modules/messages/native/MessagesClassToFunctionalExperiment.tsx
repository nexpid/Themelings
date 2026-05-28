// app/modules/messages/native/MessagesClassToFunctionalExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var1 = metroImportAll;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var11 = true;
    var4['value'] = var11;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var4 = var4.useEffect;
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var7[var4];
    var8 = var6.bind(var1)(var4);
    var5 = var8.createApexExperiment;
    var4 = {'kind': 'user', 'name': '2026-03-messages-functional-component-2'};
    var9 = {};
    var12 = false;
    var9['enabled'] = var12;
    var4['defaultConfig'] = var9;
    var9 = {};
    var10 = {};
    var10['enabled'] = var12;
    var9[0] = var10;
    var10 = {};
    var10['enabled'] = var11;
    var9[1] = var10;
    var4['variations'] = var9;
    var4 = var5.bind(var8)(var4);
    var _closure1_slot3 = var4;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/messages/native/MessagesClassToFunctionalExperiment.tsx';
    var5 = var6.bind(var7)(var5);
    var3['MessagesClassToFunctionalExperiment'] = var4;
    var2 = function() {
        var5 = _closure1_slot3;
        var4 = var5.useConfig;
        var1 = {};
        var6 = 'MessagesConnected';
        var1['location'] = var6;
        var1 = var4.bind(var5)(var1);
        var1 = var1.enabled;
        var _closure2_slot0 = var1;
        var5 = _closure1_slot2;
        var4 = new Array(1);
        var4[0] = var1;
        var3 = undefined;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 2;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.setTag;
                var2 = _closure2_slot0;
                var3 = 'class';
                if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = 'functional';
case 2:
                var2 = 'messages_component_kind';
                var2 = var4.bind(var5)(var2, var3);
                return var1;
            }
        };
        var2 = var5.bind(var3)(var2, var4);
        return var1;
    };
    var3['useMessagesClassToFunctional'] = var2;
    return var1;
})();