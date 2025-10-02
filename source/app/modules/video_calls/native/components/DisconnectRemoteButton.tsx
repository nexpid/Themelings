// app/modules/video_calls/native/components/DisconnectRemoteButton.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var8 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var8;
    var _closure1_slot3 = var6;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/video_calls/native/components/DisconnectRemoteButton.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = var1.channel;
            var _closure2_slot0 = var2;
            var6 = var1.isSmallSize;
            var2 = _closure1_slot0;
            var9 = _closure1_slot3;
            var1 = 3;
            var1 = var9[var1];
            var4 = undefined;
            var8 = var2.bind(var4)(var1);
            var3 = var8.useStateFromStoresObject;
            var1 = _closure1_slot4;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var1 = {};
                var3 = _closure1_slot4;
                var2 = var3.getAwaitingRemoteSessionInfo;
                var4 = var2.bind(var3)();
                var2 = null;
                var2 = var2 != var4;
                var1['awaitingRemote'] = var2;
                var2 = var3.getRemoteSessionId;
                var2 = var2.bind(var3)();
                var1['remoteSessionId'] = var2;
                return var1;
            };
            var1 = var3.bind(var8)(var2, var1);
            var2 = var1.remoteSessionId;
            var _closure2_slot1 = var2;
            var8 = var1.awaitingRemote;
            var3 = _closure1_slot5;
            var2 = _closure1_slot2;
            var1 = 4;
            var1 = var9[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.PrimaryActionButton;
            var1 = {};
            var9 = _closure1_slot1;
            var11 = _closure1_slot3;
            if(var8) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = 6;
            var8 = var11[var8];
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var10 = 5;
            var8 = var11[var10];
case 4:
            var8 = var9.bind(var4)(var8);
            var1['source'] = var8;
            var10 = _closure1_slot0;
            var11 = _closure1_slot3;
            var7 = 7;
            var8 = var11[var7];
            var8 = var10.bind(var4)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var11[var7];
            var7 = var10.bind(var4)(var7);
            var7 = var7.t;
            var7 = var7.6vrfgo;
            var7 = var8.bind(var9)(var7);
            var1['accessibilityLabel'] = var7;
            var1['isSmallSize'] = var6;
            var5 = function onPress() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var2 = 8;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.disconnectRemote;
                    var2 = var2.bind(var3)();
                    _fun0002_ip = 7; continue _fun0002;
case 5:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var2 = 8;
                    var2 = var5[var2];
                    var3 = undefined;
                    var7 = var4.bind(var3)(var2);
                    var6 = var7.remoteDisconnect;
                    var2 = _closure2_slot1;
                    var2 = var6.bind(var7)(var2);
                    var2 = 9;
                    var2 = var5[var2];
                    var3 = var4.bind(var3)(var2);
                    var2 = var3.handleDisconnect;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
case 7:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['onPress'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['DisconnectRemoteButton'] = var2;
    return var1;
})();