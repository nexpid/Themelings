// app/modules/rpc/server/events/VoiceSettingsEventsFactory.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
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
    var7 = var4.RPC_SCOPE_CONFIG;
    var _closure1_slot3 = var7;
    var4 = var4.RPC_LOCAL_SCOPE;
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.RPCEvents;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/rpc/server/events/VoiceSettingsEventsFactory.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createVoiceSettingsEventHandlers(arg1, arg2) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = arg2;
        var _closure2_slot1 = var1;
        var1 = {};
        var2 = _closure1_slot5;
        var6 = var2.VOICE_SETTINGS_UPDATE;
        var3 = {};
        var7 = {};
        var8 = _closure1_slot3;
        var9 = var8.ANY;
        var12 = _closure1_slot0;
        var13 = _closure1_slot2;
        var10 = 2;
        var8 = var13[var10];
        var11 = undefined;
        var8 = var12.bind(var11)(var8);
        var8 = var8.OAuth2Scopes;
        var14 = var8.RPC;
        var8 = new Array(2);
        var8[0] = var14;
        var10 = var13[var10];
        var10 = var12.bind(var11)(var10);
        var10 = var10.OAuth2Scopes;
        var10 = var10.RPC_VOICE_READ;
        var8[1] = var10;
        var7[var9] = var8;
        var3['scope'] = var7;
        var7 = function handler() {
            var1 = function(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    var1 = arg1;
                    var6 = var1.prevState;
                    var3 = var1.dispatch;
                    var1 = _closure2_slot0;
                    var2 = undefined;
                    var1 = var1.bind(var2)();
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 3;
                    var4 = var7[var4];
                    var5 = var5.bind(var2)(var4);
                    var4 = var5.isEqual;
                    var4 = var4.bind(var5)(var1, var6);
                    if(var4) { _fun0001_ip = 70; continue _fun0001 }
 65:
                    var2 = var3.bind(var2)(var1);
 70:
                    return var1;
                }
            };
            return var1;
        };
        var3['handler'] = var7;
        var1[var6] = var3;
        var3 = var2.VOICE_SETTINGS_UPDATE_2;
        var2 = {};
        var5 = _closure1_slot4;
        var2['scope'] = var5;
        var4 = function handler(arg1) {
            var2 = arg1;
            var2 = var2.socket;
            var _closure3_slot0 = var2;
            var1 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = arg1;
                    var1 = var2.prevState;
                    var4 = var2.dispatch;
                    var3 = _closure3_slot0;
                    var3 = var3.application;
                    var5 = var3.id;
                    var3 = null;
                    if(!(var3 != var5)) { _fun0002_ip = 110; continue _fun0002 }
 37:
                    var5 = _closure2_slot1;
                    var2 = _closure3_slot0;
                    var2 = var2.application;
                    var2 = var2.id;
                    var3 = undefined;
                    var2 = var5.bind(var3)(var2);
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 3;
                    var5 = var7[var5];
                    var6 = var6.bind(var3)(var5);
                    var5 = var6.isEqual;
                    var5 = var5.bind(var6)(var2, var1);
                    if(var5) { _fun0002_ip = 108; continue _fun0002 }
 103:
                    var3 = var4.bind(var3)(var2);
 108:
                    return var2;
 110:
                    return var1;
                }
            };
            return var1;
        };
        var2['handler'] = var4;
        var1[var3] = var2;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();