// app/modules/stage_channels/useToggleRequestToSpeak.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stage_channels/useToggleRequestToSpeak.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useToggleRequestToSpeak(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var _closure2_slot0 = var5;
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var6 = 3;
            var6 = var1[var6];
            var7 = undefined;
            var10 = var4.bind(var7)(var6);
            var9 = var10.useStateFromStores;
            var6 = _closure1_slot5;
            var8 = new Array(1);
            var8[0] = var6;
            var6 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var9 = var9.bind(var10)(var8, var6);
            var10 = _closure1_slot1;
            var8 = 4;
            var6 = var1[var8];
            var6 = var10.bind(var7)(var6);
            var5 = var5.id;
            var5 = var6.bind(var7)(var9, var5);
            var _closure2_slot1 = var5;
            var1 = var1[var8];
            var1 = var4.bind(var7)(var1);
            var1 = var1.RequestToSpeakStates;
            var1 = var1.REQUESTED_TO_SPEAK;
            var1 = var5 === var1;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var8];
            var4 = var6.bind(var7)(var4);
            var4 = var4.RequestToSpeakStates;
            var4 = var4.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
            var1 = var5 === var4;
case 2:
            var _closure2_slot2 = var1;
            var6 = _closure1_slot4;
            var4 = var6.useState;
            var5 = var4.bind(var6)(var1);
            var4 = _closure1_slot3;
            var3 = 2;
            var5 = var4.bind(var7)(var5, var3);
            var3 = 0;
            var3 = var5[var3];
            var _closure2_slot3 = var3;
            var4 = 1;
            var4 = var5[var4];
            var _closure2_slot4 = var4;
            var5 = var6.useEffect;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                var3 = _closure2_slot4;
                var2 = _closure2_slot2;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = var5.bind(var6)(var1, var4);
            var1 = new Array(2);
            var1[0] = var3;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var5 = _closure2_slot1;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 4;
                    var4 = var4[var1];
                    var1 = undefined;
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.RequestToSpeakStates;
                    var4 = var4.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
                    if(!(var5 !== var4)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 5;
                    var4 = var6[var4];
                    var7 = var5.bind(var1)(var4);
                    var6 = var7.toggleRequestToSpeak;
                    var5 = _closure2_slot0;
                    var4 = _closure2_slot3;
                    var4 = !var4;
                    var4 = var6.bind(var7)(var5, var4);
                    _fun0002_ip = 6; continue _fun0002;
case 4:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 5;
                    var3 = var5[var3];
                    var6 = var4.bind(var1)(var3);
                    var5 = var6.audienceAckRequestToSpeak;
                    var4 = _closure2_slot0;
                    var3 = true;
                    var3 = var5.bind(var6)(var4, var3);
case 6:
                    var3 = _closure2_slot4;
                    var2 = _closure2_slot3;
                    var2 = !var2;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var1[1] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();