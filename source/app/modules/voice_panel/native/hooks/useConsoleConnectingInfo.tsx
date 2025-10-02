// app/modules/voice_panel/native/hooks/useConsoleConnectingInfo.tsx
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
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/hooks/useConsoleConnectingInfo.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useConsoleConnectingInfo(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = arg1;
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 2;
            var2 = var5[var2];
            var5 = undefined;
            var2 = var4.bind(var5)(var2);
            var4 = var2.bind(var5)();
            var _closure2_slot0 = var4;
            var6 = null;
            var8 = var6 == var4;
            var2 = undefined;
            if(var8) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var4.channelId;
case 2:
            var11 = var2 === var7;
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 3;
            var9 = var8[var2];
            var13 = var4.bind(var5)(var9);
            var12 = var13.useStateFromStores;
            var9 = _closure1_slot3;
            var10 = new Array(1);
            var10[0] = var9;
            var9 = function() {
                var2 = _closure1_slot3;
                var1 = var2.getAwaitingRemoteSessionInfo;
                var1 = var1.bind(var2)();
                return var1;
            };
            var10 = var12.bind(var13)(var10, var9);
            var2 = var8[var2];
            var8 = var4.bind(var5)(var2);
            var4 = var8.useStateFromStores;
            var9 = _closure1_slot4;
            var2 = new Array(1);
            var2[0] = var9;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure1_slot4;
                    var2 = var3.getSessionById;
                    var4 = _closure2_slot0;
                    var1 = null;
                    var6 = var1 == var4;
                    var4 = undefined;
                    if(var6) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var5 = _closure2_slot0;
                    var4 = var5.sessionId;
case 4:
                    var5 = var1 != var4;
                    var1 = '';
                    if(!var5) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var1 = var4;
case 6:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var9 = var4.bind(var8)(var2, var1);
            var2 = var6 == var10;
            var1 = undefined;
            if(var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var1 = var10.type;
case 8:
            if(!(var6 == var1)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var4 = var6 == var9;
            var2 = undefined;
            if(var4) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var4 = var9.clientInfo;
            var2 = var4.os;
case 12:
            var1 = var2;
case 10:
            var2 = var6 != var1;
            var4 = '';
            if(!var2) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var4 = var1;
case 14:
            var2 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 4;
            var1 = var8[var1];
            var1 = var2.bind(var5)(var1);
            var2 = var1.bind(var5)(var10);
            var1 = {};
            var12 = var6 == var10;
            var8 = undefined;
            if(var12) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var8 = var10.channelId;
case 16:
            var8 = var8 === var7;
            var1['isConnectingToConsole'] = var8;
            var8 = var6 == var10;
            var6 = undefined;
            if(var8) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var6 = var10.channelId;
case 18:
            var6 = var6 === var7;
            if(var6) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var6 = var11;
case 20:
            var1['isConnectingOrConnectedToConsole'] = var6;
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var8 = 5;
            var8 = var7[var8];
            var8 = var6.bind(var5)(var8);
            var8 = var8.bind(var5)(var4);
            var1['icon'] = var8;
            var8 = _closure1_slot0;
            var3 = 6;
            var3 = var7[var3];
            var8 = var8.bind(var5)(var3);
            var3 = var8.getConsoleConnectingText;
            var3 = var3.bind(var8)(var9, var10, var11);
            var1['text'] = var3;
            var3 = 7;
            var3 = var7[var3];
            var3 = var6.bind(var5)(var3);
            var3 = var3.bind(var5)(var4);
            var1['color'] = var3;
            var1['displayCancel'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();