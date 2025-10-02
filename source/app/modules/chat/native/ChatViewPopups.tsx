// app/modules/chat/native/ChatViewPopups.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var2 = function ChatViewPopups(arg1) {
        var2 = arg1;
        var6 = var2.channelId;
        var7 = var2.guildId;
        var _closure2_slot0 = var7;
        var5 = _closure1_slot3;
        var4 = var5.useRef;
        var3 = false;
        var3 = var4.bind(var5)(var3);
        var _closure2_slot1 = var3;
        var4 = _closure1_slot1;
        var9 = _closure1_slot2;
        var3 = 1;
        var3 = var9[var3];
        var8 = undefined;
        var3 = var4.bind(var8)(var3);
        var5 = var3.bind(var8)(var7);
        var _closure2_slot2 = var5;
        var4 = _closure1_slot0;
        var3 = 2;
        var3 = var9[var3];
        var4 = var4.bind(var8)(var3);
        var3 = var4.useShowWelcomeModal;
        var6 = var3.bind(var4)(var7, var6);
        var _closure2_slot3 = var6;
        var4 = _closure1_slot3;
        var3 = var4.useEffect;
        var2 = new Array(3);
        var2[0] = var7;
        var2[1] = var6;
        var2[2] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = _closure2_slot1;
                var2 = var2.current;
                if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var2 = _closure2_slot2;
                if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var2 = _closure2_slot3;
                if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 6:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 2;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.openWelcomeActionSheet;
                var2 = {};
                var6 = _closure2_slot0;
                var2['guildId'] = var6;
                var6 = function onHide() {
                    var2 = _closure2_slot1;
                    var1 = false;
                    var2['current'] = var1;
                    return var1;
                };
                var2['onHide'] = var6;
                var2 = var3.bind(var4)(var2);
                var3 = _closure2_slot1;
                var2 = true;
                var3['current'] = var2;
                _fun0001_ip = 2; continue _fun0001;
case 4:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 3;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.open;
                var2 = {};
                var6 = _closure2_slot0;
                var2['guildId'] = var6;
                var5 = function onHide() {
                    var2 = _closure2_slot1;
                    var1 = false;
                    var2['current'] = var1;
                    return var1;
                };
                var2['onHide'] = var5;
                var2 = var3.bind(var4)(var2);
                var2 = _closure2_slot1;
                var1 = true;
                var2['current'] = var1;
case 2:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        var1 = null;
        return var1;
    };
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var8 = var7[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot3 = var5;
    var4 = var5.memo;
    var4 = var4.bind(var5)(var2);
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/chat/native/ChatViewPopups.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['ChatViewPopups'] = var2;
    return var1;
})();