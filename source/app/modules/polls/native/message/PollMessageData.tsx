// app/modules/polls/native/message/PollMessageData.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = function ActualData(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var6 = var1.message;
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 3;
            var1 = var7[var1];
            var5 = undefined;
            var4 = var3.bind(var5)(var1);
            var1 = var4.useInteractivePollMessage;
            var4 = var1.bind(var4)(var6);
            var1 = 4;
            var1 = var7[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.useMessageRendererTheme;
            var3 = var1.bind(var3)();
            var6 = _closure1_slot1;
            var1 = 5;
            var1 = var7[var1];
            var1 = var6.bind(var5)(var1);
            var6 = var1.bind(var5)(var4, var3);
            var1 = null;
            var3 = var1 == var6;
            if(var3) { _fun0001_ip = 123; continue _fun0001 }
 97:
            var4 = _closure1_slot3;
            var3 = _closure1_slot4;
            var2 = {};
            var9 = var2;
            var8 = var6;
            var6 = copyDataProperties(var9, var8);
            var1 = var4.bind(var5)(var3, var2);
 123:
            return var1;
        }
    };
    var _closure1_slot5 = var1;
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
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.makeKeyedDataComponent;
    var4 = 'pollData';
    var4 = var7.bind(var8)(var4);
    var _closure1_slot4 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/polls/native/message/PollMessageData.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function PollMessageData(arg1) {
        var1 = arg1;
        var8 = var1.message;
        var4 = _closure1_slot3;
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 3;
        var1 = var3[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = {};
        var1['message'] = var8;
        var7 = _closure1_slot3;
        var6 = _closure1_slot5;
        var5 = {};
        var5['message'] = var8;
        var5 = var7.bind(var3)(var6, var5);
        var1['children'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();