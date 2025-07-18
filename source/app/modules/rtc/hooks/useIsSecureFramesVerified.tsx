// app/modules/rtc/hooks/useIsSecureFramesVerified.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/rtc/hooks/useIsSecureFramesVerified.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useIsUserSecureFramesVerified(arg1) {
        var2 = arg1;
        var6 = var2.userId;
        var _closure2_slot0 = var6;
        var10 = var2.channelId;
        var5 = _closure1_slot0;
        var8 = _closure1_slot1;
        var3 = 3;
        var3 = var8[var3];
        var4 = undefined;
        var9 = var5.bind(var4)(var3);
        var7 = var9.useIsSecureFramesUIEnabled;
        var3 = {};
        var3['channelId'] = var10;
        var7 = var7.bind(var9)(var3);
        var _closure2_slot1 = var7;
        var3 = 4;
        var3 = var8[var3];
        var5 = var5.bind(var4)(var3);
        var4 = var5.useStateFromStores;
        var8 = _closure1_slot4;
        var3 = new Array(3);
        var3[0] = var8;
        var8 = _closure1_slot2;
        var3[1] = var8;
        var2 = _closure1_slot3;
        var3[2] = var2;
        var2 = new Array(2);
        var2[0] = var7;
        var2[1] = var6;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var3 = _closure2_slot0;
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0001_ip = 20; continue _fun0001 }
 16:
                var1 = _closure2_slot1;
 20:
                if(!var1) { _fun0001_ip = 45; continue _fun0001 }
 23:
                var5 = _closure1_slot3;
                var4 = var5.isUserConnected;
                var3 = _closure2_slot0;
                var1 = var4.bind(var5)(var3);
 45:
                if(!var1) { _fun0001_ip = 73; continue _fun0001 }
 48:
                var4 = _closure1_slot2;
                var3 = var4.getId;
                var4 = var3.bind(var4)();
                var3 = _closure2_slot0;
                var1 = var4 !== var3;
 73:
                if(!var1) { _fun0001_ip = 100; continue _fun0001 }
 76:
                var4 = _closure1_slot4;
                var3 = var4.isUserVerified;
                var2 = _closure2_slot0;
                var1 = var3.bind(var4)(var2);
 100:
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useIsUserSecureFramesVerified'] = var4;
    var4 = function useIsStreamSecureFramesVerified(arg1) {
        var2 = arg1;
        var6 = var2.streamKey;
        var _closure2_slot0 = var6;
        var10 = var2.channelId;
        var5 = _closure1_slot0;
        var9 = _closure1_slot1;
        var3 = 3;
        var3 = var9[var3];
        var4 = undefined;
        var8 = var5.bind(var4)(var3);
        var7 = var8.useIsSecureFramesUIEnabled;
        var3 = {};
        var3['channelId'] = var10;
        var7 = var7.bind(var8)(var3);
        var _closure2_slot1 = var7;
        var3 = 5;
        var3 = var9[var3];
        var8 = var5.bind(var4)(var3);
        var3 = var8.useIsStreamRTCConnectionEmpty;
        var8 = var3.bind(var8)(var6);
        var _closure2_slot2 = var8;
        var3 = 4;
        var3 = var9[var3];
        var5 = var5.bind(var4)(var3);
        var4 = var5.useStateFromStores;
        var9 = _closure1_slot4;
        var3 = new Array(2);
        var3[0] = var9;
        var2 = _closure1_slot2;
        var3[1] = var2;
        var2 = new Array(3);
        var2[0] = var8;
        var2[1] = var7;
        var2[2] = var6;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var1 = _closure2_slot1;
                if(!var1) { _fun0002_ip = 121; continue _fun0002 }
 10:
                var1 = _closure2_slot2;
                if(var1) { _fun0002_ip = 121; continue _fun0002 }
 17:
                var3 = _closure2_slot0;
                var1 = null;
                if(!(var1 != var3)) { _fun0002_ip = 117; continue _fun0002 }
 27:
                var4 = _closure1_slot2;
                var1 = var4.getId;
                var4 = var1.bind(var4)();
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 6;
                var5 = var5[var1];
                var1 = undefined;
                var6 = var6.bind(var1)(var5);
                var5 = var6.decodeStreamKey;
                var1 = _closure2_slot0;
                var1 = var5.bind(var6)(var1);
                var1 = var1.ownerId;
                var1 = var1 !== var4;
                if(!var1) { _fun0002_ip = 115; continue _fun0002 }
 94:
                var4 = _closure1_slot4;
                var3 = var4.isStreamVerified;
                var2 = _closure2_slot0;
                var1 = var3.bind(var4)(var2);
 115:
                return var1;
 117:
                var1 = false;
                return var1;
 121:
                var1 = false;
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useIsStreamSecureFramesVerified'] = var4;
    var2 = function useIsCallSecureFramesVerified(arg1) {
        var2 = arg1;
        var9 = var2.channelId;
        var5 = _closure1_slot0;
        var8 = _closure1_slot1;
        var3 = 3;
        var3 = var8[var3];
        var4 = undefined;
        var7 = var5.bind(var4)(var3);
        var6 = var7.useIsSecureFramesUIEnabled;
        var3 = {};
        var3['channelId'] = var9;
        var6 = var6.bind(var7)(var3);
        var _closure2_slot0 = var6;
        var3 = 5;
        var3 = var8[var3];
        var7 = var5.bind(var4)(var3);
        var3 = var7.useIsCallRTCConnectionEmpty;
        var7 = var3.bind(var7)();
        var _closure2_slot1 = var7;
        var3 = 4;
        var3 = var8[var3];
        var5 = var5.bind(var4)(var3);
        var4 = var5.useStateFromStores;
        var2 = _closure1_slot4;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = new Array(2);
        var2[0] = var7;
        var2[1] = var6;
        var1 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var1 = _closure2_slot0;
                var1 = !var1;
                if(var1) { _fun0003_ip = 17; continue _fun0003 }
 13:
                var1 = _closure2_slot1;
 17:
                var1 = !var1;
                if(!var1) { _fun0003_ip = 42; continue _fun0003 }
 23:
                var3 = _closure1_slot4;
                var2 = var3.isCallVerified;
                var1 = var2.bind(var3)();
 42:
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useIsCallSecureFramesVerified'] = var2;
    return var1;
})();