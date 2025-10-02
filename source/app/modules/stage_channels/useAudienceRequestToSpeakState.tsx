// app/modules/stage_channels/useAudienceRequestToSpeakState.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var2 = function getAudienceRequestToSpeakState(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var3 = null;
            if(!(var3 != var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2.suppress;
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var2.requestToSpeakTimestamp;
            if(!(var3 == var1)) { _fun0001_ip = 6; continue _fun0001 }
case 4:
            var1 = var2.suppress;
            if(var1) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var1 = var2.requestToSpeakTimestamp;
            if(!(var3 != var1)) { _fun0001_ip = 7; continue _fun0001 }
case 9:
            var1 = _closure1_slot3;
            var1 = var1.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
            _fun0001_ip = 10; continue _fun0001;
case 7:
            var4 = var2.suppress;
            if(var4) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var2 = var2.requestToSpeakTimestamp;
            if(!(var3 == var2)) { _fun0001_ip = 11; continue _fun0001 }
case 13:
            var2 = _closure1_slot3;
            var2 = var2.ON_STAGE;
            _fun0001_ip = 14; continue _fun0001;
case 11:
            var3 = _closure1_slot3;
            var2 = var3.NONE;
case 14:
            var1 = var2;
case 10:
            _fun0001_ip = 15; continue _fun0001;
case 6:
            var2 = _closure1_slot3;
            var1 = var2.REQUESTED_TO_SPEAK;
case 15:
            _fun0001_ip = 16; continue _fun0001;
case 2:
            var2 = _closure1_slot3;
            var1 = var2.NONE;
case 16:
            return var1;
        }
    };
    var _closure1_slot4 = var2;
    var1 = global;
    var9 = var1.Object;
    var6 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var9)(var3, var1, var4);
    var9 = 0;
    var6 = var8[var9];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var6);
    var _closure1_slot2 = var4;
    var4 = {};
    var4['NONE'] = var9;
    var6 = 'NONE';
    var4[var9] = var6;
    var9 = 1;
    var4['REQUESTED_TO_SPEAK'] = var9;
    var6 = 'REQUESTED_TO_SPEAK';
    var4[var9] = var6;
    var6 = 2;
    var4['REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK'] = var6;
    var9 = 'REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK';
    var4[var6] = var9;
    var10 = 3;
    var4['ON_STAGE'] = var10;
    var9 = 'ON_STAGE';
    var4[var10] = var9;
    var _closure1_slot3 = var4;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/stage_channels/useAudienceRequestToSpeakState.tsx';
    var6 = var7.bind(var8)(var6);
    var5 = function useAudienceRequestToSpeakState(arg1, arg2) {
        var7 = arg1;
        var6 = arg2;
        var _closure2_slot0 = var7;
        var _closure2_slot1 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 1;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var2 = _closure1_slot2;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = new Array(2);
        var2[0] = var7;
        var2[1] = var6;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = _closure2_slot0;
                var3 = null;
                if(!(var3 != var2)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                var2 = _closure2_slot1;
                if(!(var3 != var2)) { _fun0002_ip = 17; continue _fun0002 }
case 19:
                var3 = _closure1_slot4;
                var5 = _closure1_slot2;
                var4 = var5.getVoiceStateForChannel;
                var2 = _closure2_slot1;
                var1 = _closure2_slot0;
                var2 = var4.bind(var5)(var2, var1);
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                _fun0002_ip = 20; continue _fun0002;
case 17:
                var2 = _closure1_slot3;
                var1 = var2.NONE;
case 20:
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['default'] = var5;
    var3['RequestToSpeakStates'] = var4;
    var3['getAudienceRequestToSpeakState'] = var2;
    return var1;
})();