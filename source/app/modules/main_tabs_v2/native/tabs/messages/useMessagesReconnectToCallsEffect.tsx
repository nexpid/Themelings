// app/modules/main_tabs_v2/native/tabs/messages/useMessagesReconnectToCallsEffect.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native3;
    var3 = native6;
    var5 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var5[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var5[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 6;
    var5 = var5[var4];
    var4 = native2;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/tabs/messages/useMessagesReconnectToCallsEffect.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useMessagesReconnectToCallsEffect() {
        var4 = _closure1_slot3;
        var3 = var4.useEffect;
        var2 = function() {
            var4 = _closure1_slot4;
            var2 = var4.isConnected;
            var2 = var2.bind(var4)();
            var _closure3_slot0 = var2;
            var3 = function isGatewayConnectedListener() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    var3 = _closure1_slot4;
                    var2 = var3.isConnected;
                    var2 = var2.bind(var3)();
                    var4 = _closure3_slot0;
                    if(!(var4 !== var2)) { _fun0001_ip = 261; continue _fun0001 }
 31:
                    _closure3_slot0 = var2;
                    if(!var2) { _fun0001_ip = 261; continue _fun0001 }
 41:
                    var3 = _closure1_slot6;
                    var2 = var3.getSortedChannels;
                    var5 = var2.bind(var3)();
                    var4 = _closure1_slot2;
                    var3 = undefined;
                    var2 = 2;
                    var4 = var4.bind(var3)(var5, var2);
                    var9 = 0;
                    var2 = var4[var9];
                    var2 = 1;
                    var8 = var4[var2];
                    var4 = new Array(0);
                    var7 = global;
                    var10 = var7.Math;
                    var5 = var10.min;
                    var2 = var8.length;
                    var6 = 20;
                    var2 = var5.bind(var10)(var6, var2);
                    var2 = var9 < var2;
                    var5 = null;
                    if(!var2) { _fun0001_ip = 214; continue _fun0001 }
 123:
                    var11 = _closure1_slot5;
                    var10 = var11.getChannel;
                    var2 = var8[var9];
                    var2 = var2.channelId;
                    var11 = var10.bind(var11)(var2);
                    var2 = var5 != var11;
                    if(!var2) { _fun0001_ip = 163; continue _fun0001 }
 153:
                    var10 = var11.isGroupDM;
                    var2 = var10.bind(var11)();
 163:
                    if(!var2) { _fun0001_ip = 185; continue _fun0001 }
 166:
                    var10 = var4.push;
                    var2 = var8[var9];
                    var2 = var2.channelId;
                    var2 = var10.bind(var4)(var2);
 185:
                    var9 = var9 + 1;
                    var11 = var7.Math;
                    var10 = var11.min;
                    var2 = var8.length;
                    var2 = var10.bind(var11)(var6, var2);
                    if(var9 < var2) { _fun0001_ip = 123; continue _fun0001 }
 214:
                    var2 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var1 = 5;
                    var1 = var5[var1];
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.dispatch;
                    var1 = {};
                    var5 = 'CALL_CONNECT_MULTIPLE';
                    var1['type'] = var5;
                    var1['channelIds'] = var4;
                    var1 = var2.bind(var3)(var1);
 261:
                    var1 = undefined;
                    return var1;
                }
            };
            var _closure3_slot1 = var3;
            var2 = var4.addChangeListener;
            var2 = var2.bind(var4)(var3);
            var1 = function() {
                var3 = _closure1_slot4;
                var2 = var3.removeChangeListener;
                var1 = _closure3_slot1;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            return var1;
        };
        var1 = new Array(0);
        var1 = var3.bind(var4)(var2, var1);
        var1 = undefined;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();