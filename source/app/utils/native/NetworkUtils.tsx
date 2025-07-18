// app/utils/native/NetworkUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var1 = function ensureChangeListenerCreated() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot7;
            var1 = null;
            if(!(var1 == var3)) { _fun0001_ip = 54; continue _fun0001 }
 13:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 2;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.addEventListener;
            var1 = _closure1_slot12;
            var1 = var3.bind(var4)(var1);
            _closure1_slot7 = var1;
 54:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = function cleanupChangeListener() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = _closure1_slot7;
            var1 = null;
            var3 = var1 != var3;
            if(!var3) { _fun0002_ip = 31; continue _fun0002 }
 16:
            var4 = _closure1_slot4;
            var5 = var4.length;
            var4 = 0;
            var3 = var4 === var5;
 31:
            if(!var3) { _fun0002_ip = 49; continue _fun0002 }
 34:
            var4 = _closure1_slot5;
            var5 = var4.length;
            var4 = 0;
            var3 = var4 === var5;
 49:
            if(!var3) { _fun0002_ip = 67; continue _fun0002 }
 52:
            var4 = _closure1_slot6;
            var5 = var4.length;
            var4 = 0;
            var3 = var4 === var5;
 67:
            if(!var3) { _fun0002_ip = 84; continue _fun0002 }
 70:
            var4 = _closure1_slot7;
            var3 = undefined;
            var3 = var4.bind(var3)();
            _closure1_slot7 = var1;
 84:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function convertNetInfo(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var5 = var1.type;
            var3 = var1.details;
            var1 = {};
            var1['type'] = var5;
            var2 = _closure1_slot2;
            var7 = var2.CELLULAR;
            var6 = null;
            if(!(var5 === var7)) { _fun0003_ip = 45; continue _fun0003 }
 39:
            var6 = var3.cellularGeneration;
 45:
            var1['effectiveSpeed'] = var6;
            var4 = _closure1_slot2;
            var4 = var4.CELLULAR;
            var2 = null;
            if(!(var5 === var4)) { _fun0003_ip = 72; continue _fun0003 }
 66:
            var2 = var3.carrier;
 72:
            var1['serviceProvider'] = var2;
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function notifyListeners(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var8 = arg1;
            var13 = var8.isConnected;
            var _closure2_slot0 = var13;
            var4 = _closure1_slot11;
            var1 = undefined;
            var4 = var4.bind(var1)(var8);
            var _closure2_slot1 = var4;
            if(var13) { _fun0004_ip = 42; continue _fun0004 }
 36:
            var6 = _closure1_slot5;
            _fun0004_ip = 46; continue _fun0004;
 42:
            var6 = _closure1_slot4;
 46:
            var5 = null;
            var5 = var5 != var13;
            if(!var5) { _fun0004_ip = 58; continue _fun0004 }
 55:
            var5 = var13;
 58:
            _closure1_slot8 = var5;
            var7 = _closure1_slot3;
            var5 = var7.log;
            var16 = var8.type;
            var14 = var4.cellularGeneration;
            var4 = global;
            var4 = var4.HermesInternal;
            var10 = var4.concat;
            var19 = 'Network status changed: isConnected:';
            var17 = ' type:';
            var15 = ' speed:';
            var18 = var13;
            var4 = var19[var10](var18, var17, var16, var15, var14, var13);
            var4 = var5.bind(var7)(var4);
            var5 = var6.forEach;
            var4 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = _closure2_slot0;
                    var2 = null;
                    var4 = var2 != var3;
                    if(!var4) { _fun0005_ip = 20; continue _fun0005 }
 16:
                    var4 = _closure2_slot0;
 20:
                    var3 = _closure2_slot1;
                    var2 = arg1;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var4, var3);
                    return var1;
                }
            };
            var4 = var5.bind(var6)(var4);
            var4 = _closure1_slot6;
            var3 = var4.forEach;
            var2 = function(arg1) {
                var3 = _closure2_slot1;
                var2 = arg1;
                var1 = undefined;
                var1 = var2.bind(var1)(var3);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function addCallback(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var2 = arg1;
            if(var2) { _fun0006_ip = 15; continue _fun0006 }
 9:
            var4 = _closure1_slot5;
            _fun0006_ip = 19; continue _fun0006;
 15:
            var4 = _closure1_slot4;
 19:
            var3 = var4.push;
            var2 = arg2;
            var2 = var3.bind(var4)(var2);
            var2 = _closure1_slot9;
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function removeCallback(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var2 = arg1;
            if(var2) { _fun0007_ip = 15; continue _fun0007 }
 9:
            var3 = _closure1_slot5;
            _fun0007_ip = 19; continue _fun0007;
 15:
            var3 = _closure1_slot4;
 19:
            var4 = var3.indexOf;
            var2 = arg2;
            var5 = var4.bind(var3)(var2);
            var2 = -1;
            var4 = var3;
            if(!(var2 !== var5)) { _fun0007_ip = 71; continue _fun0007 }
 46:
            var3 = var4.splice;
            var2 = 1;
            var2 = var3.bind(var4)(var5, var2);
            var2 = _closure1_slot10;
            var1 = undefined;
            var1 = var2.bind(var1)();
 71:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = global;
    var10 = var1.Object;
    var8 = var10.defineProperty;
    var2 = {};
    var9 = true;
    var2['value'] = var9;
    var1 = '__esModule';
    var1 = var8.bind(var10)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var2 = var2.NetworkConnectionTypes;
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var6[var2];
    var10 = var7.bind(var1)(var2);
    var2 = var10.prototype;
    var8 = Object.create(var2, {constructor: {value: var10}});
    var13 = 'NetworkUtils';
    var14 = var8;
    var2 = new var14[var10](var13, var12);
    var8 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot3 = var8;
    var2 = var8.enableNativeLogger;
    var2 = var2.bind(var8)(var9);
    var2 = new Array(0);
    var _closure1_slot4 = var2;
    var2 = new Array(0);
    var _closure1_slot5 = var2;
    var2 = new Array(0);
    var _closure1_slot6 = var2;
    var2 = null;
    var _closure1_slot7 = var2;
    var2 = false;
    var _closure1_slot8 = var2;
    var2 = 2;
    var2 = var6[var2];
    var7 = var7.bind(var1)(var2);
    var2 = var7.fetch;
    var8 = var2.bind(var7)();
    var7 = var8.then;
    var2 = function(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var1 = var1.isConnected;
            var2 = null;
            var2 = var2 != var1;
            if(!var2) { _fun0008_ip = 21; continue _fun0008 }
 18:
            var2 = var1;
 21:
            _closure1_slot8 = var2;
            var1 = undefined;
            return var1;
        }
    };
    var2 = var7.bind(var8)(var2);
    var2 = {};
    var7 = function addOnlineCallback(arg1) {
        var4 = _closure1_slot13;
        var1 = undefined;
        var3 = true;
        var2 = arg1;
        var2 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2['addOnlineCallback'] = var7;
    var7 = function removeOnlineCallback(arg1) {
        var4 = _closure1_slot14;
        var1 = undefined;
        var3 = true;
        var2 = arg1;
        var2 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2['removeOnlineCallback'] = var7;
    var7 = function addOfflineCallback(arg1) {
        var4 = _closure1_slot13;
        var1 = undefined;
        var3 = false;
        var2 = arg1;
        var2 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2['addOfflineCallback'] = var7;
    var7 = function removeOfflineCallback(arg1) {
        var4 = _closure1_slot14;
        var1 = undefined;
        var3 = false;
        var2 = arg1;
        var2 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2['removeOfflineCallback'] = var7;
    var7 = function addChangeCallback(arg1) {
        var4 = _closure1_slot6;
        var3 = var4.push;
        var2 = arg1;
        var2 = var3.bind(var4)(var2);
        var2 = _closure1_slot9;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var2['addChangeCallback'] = var7;
    var7 = function removeChangeCallback(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var4 = _closure1_slot6;
            var3 = var4.indexOf;
            var2 = arg1;
            var5 = var3.bind(var4)(var2);
            var2 = -1;
            if(!(var2 !== var5)) { _fun0009_ip = 60; continue _fun0009 }
 31:
            var4 = _closure1_slot6;
            var3 = var4.splice;
            var2 = 1;
            var2 = var3.bind(var4)(var5, var2);
            var2 = _closure1_slot10;
            var1 = undefined;
            var1 = var2.bind(var1)();
 60:
            var1 = undefined;
            return var1;
        }
    };
    var2['removeChangeCallback'] = var7;
    var7 = function getNetworkInformation() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var1 = var2.fetch;
        var3 = var1.bind(var2)();
        var2 = var3.then;
        var1 = function(arg1) {
            var3 = _closure1_slot11;
            var2 = undefined;
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['getNetworkInformation'] = var7;
    var4 = function isOnline() {
        var1 = _closure1_slot8;
        return var1;
    };
    var2['isOnline'] = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/native/NetworkUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();