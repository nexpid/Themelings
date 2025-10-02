// app/modules/rtc/hooks/useIsSecureFramesKeyInconsistent.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = function useIsSecureFramesKeyInconsistent(arg1) {
        var2 = arg1;
        var2 = var2.userId;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 3;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var6 = _closure1_slot3;
        var2 = new Array(2);
        var2[0] = var6;
        var5 = _closure1_slot4;
        var2[1] = var5;
        var1 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 4;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.getIsSecureFramesKeyInconsistent;
            var2 = _closure2_slot0;
            var6 = _closure1_slot3;
            var1 = new Array(2);
            var1[0] = var6;
            var5 = _closure1_slot4;
            var1[1] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot5 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var9 = var7[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var5 = var5.bind(var1)(var9);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 5;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/rtc/hooks/useIsSecureFramesKeyInconsistent.tsx';
    var5 = var6.bind(var7)(var5);
    var3['useIsSecureFramesKeyInconsistent'] = var4;
    var2 = function useAlertIfSecureFramesKeyInconsistent(arg1) {
        var1 = arg1;
        var10 = var1.channelId;
        var _closure2_slot0 = var10;
        var6 = var1.userId;
        var _closure2_slot1 = var6;
        var8 = var1.nickname;
        var _closure2_slot2 = var8;
        var7 = var1.onAlertOpen;
        var _closure2_slot3 = var7;
        var5 = _closure1_slot5;
        var4 = {};
        var4['userId'] = var6;
        var1 = undefined;
        var9 = var5.bind(var1)(var4);
        var _closure2_slot4 = var9;
        var5 = _closure1_slot2;
        var4 = var5.useRef;
        var3 = null;
        var3 = var4.bind(var5)(var3);
        var _closure2_slot5 = var3;
        var4 = var5.useEffect;
        var3 = new Array(5);
        var3[0] = var10;
        var3[1] = var9;
        var3[2] = var8;
        var3[3] = var7;
        var3[4] = var6;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure2_slot4;
                if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = _closure2_slot5;
                var4 = var3.current;
                var3 = null;
                if(!(var3 != var4)) { _fun0001_ip = 4; continue _fun0001 }
case 2:
                var3 = global;
                var6 = var3.clearTimeout;
                var4 = _closure2_slot5;
                var5 = var4.current;
                var3 = undefined;
                var3 = var6.bind(var3)(var5);
                var3 = null;
                var4['current'] = var3;
                _fun0001_ip = 5; continue _fun0001;
case 4:
                var4 = _closure2_slot5;
                var3 = global;
                var7 = var3.setTimeout;
                var6 = undefined;
                var5 = function() {
                    var2 = _closure2_slot3;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var2 = 4;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.showSecureFramesKeyInconsistentAlert;
                    var2 = {};
                    var6 = _closure2_slot1;
                    var2['userId'] = var6;
                    var6 = _closure2_slot0;
                    var2['channelId'] = var6;
                    var5 = _closure2_slot2;
                    var2['nickname'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var3 = 1000;
                var3 = var7.bind(var6)(var5, var3);
                var4['current'] = var3;
case 5:
                var2 = _closure2_slot5;
                var2 = var2.current;
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = global;
                    var3 = var1.clearTimeout;
                    var2 = _closure3_slot0;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['useAlertIfSecureFramesKeyInconsistent'] = var2;
    return var1;
})();