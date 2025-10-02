// app/modules/calls/useCanSetVoiceChannelStatus.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportAll;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var4 = function _canSetVoiceChannelStatus(arg1, arg2, arg3, arg4) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = arg2;
            var _closure2_slot1 = var2;
            var2 = arg4;
            var _closure2_slot2 = var2;
            var3 = arg3;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot4;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var3 = _closure1_slot5;
case 4:
            var2 = var3.every;
            var1 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var5 = arg1;
                    var3 = _closure2_slot2;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 2;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.can;
                    var1 = {};
                    var1['permission'] = var5;
                    var6 = _closure2_slot2;
                    var1['user'] = var6;
                    var6 = _closure2_slot0;
                    var1['context'] = var6;
                    var1 = var3.bind(var4)(var1);
                    _fun0002_ip = 7; continue _fun0002;
case 5:
                    var4 = _closure2_slot1;
                    var3 = var4.can;
                    var2 = _closure2_slot0;
                    var1 = var3.bind(var4)(var5, var2);
case 7:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot6 = var4;
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
    var5 = metroImportDefault;
    var1 = undefined;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.Permissions;
    var9 = var5.SET_VOICE_CHANNEL_STATUS;
    var8 = new Array(3);
    var8[0] = var9;
    var9 = var5.CONNECT;
    var8[1] = var9;
    var9 = var5.VIEW_CHANNEL;
    var8[2] = var9;
    var _closure1_slot4 = var8;
    var8 = var5.SET_VOICE_CHANNEL_STATUS;
    var5 = new Array(1);
    var5[0] = var8;
    var _closure1_slot5 = var5;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/calls/useCanSetVoiceChannelStatus.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function useCanSetVoiceChannelStatus(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var8 = arg1;
            var7 = arguments[1];
            var6 = arguments[2];
            var _closure2_slot0 = var8;
            var5 = undefined;
            if(!(var7 === var5)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var7 = false;
case 8:
            var _closure2_slot1 = var7;
            var _closure2_slot2 = var6;
            var4 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 3;
            var3 = var9[var3];
            var5 = var4.bind(var5)(var3);
            var4 = var5.useStateFromStores;
            var2 = _closure1_slot3;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = new Array(3);
            var2[0] = var8;
            var2[1] = var7;
            var2[2] = var6;
            var1 = function() {
                var6 = _closure1_slot6;
                var10 = _closure2_slot0;
                var9 = _closure1_slot3;
                var8 = _closure2_slot1;
                var7 = _closure2_slot2;
                var11 = undefined;
                var1 = var11[var6](var10, var9, var8, var7, var6);
                return var1;
            };
            var1 = var4.bind(var5)(var3, var1, var2);
            return var1;
        }
    };
    var3['default'] = var5;
    var3['_canSetVoiceChannelStatus'] = var4;
    var2 = function canSetVoiceChannelStatus(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var6 = arguments[1];
            var5 = undefined;
            if(!(var6 === var5)) { _fun0004_ip = 10; continue _fun0004 }
case 11:
            var6 = false;
case 10:
            var4 = _closure1_slot6;
            var9 = _closure1_slot3;
            var10 = arg1;
            var7 = arguments[2];
            var11 = undefined;
            var8 = var6;
            var1 = var11[var4](var10, var9, var8, var7, var6);
            return var1;
        }
    };
    var3['canSetVoiceChannelStatus'] = var2;
    return var1;
})();