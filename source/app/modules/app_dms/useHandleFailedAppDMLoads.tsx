// app/modules/app_dms/useHandleFailedAppDMLoads.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_dms/useHandleFailedAppDMLoads.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useHandleFailedAppDMLoads(arg1) {
        var3 = arg1;
        var10 = var3.isProfileFetching;
        var _closure2_slot0 = var10;
        var9 = var3.wasProfileFetching;
        var _closure2_slot1 = var9;
        var1 = var3.applicationId;
        var _closure2_slot2 = var1;
        var6 = var3.channelId;
        var _closure2_slot3 = var6;
        var7 = var3.commands;
        var _closure2_slot4 = var7;
        var5 = _closure1_slot2;
        var8 = var5.useEffect;
        var4 = new Array(4);
        var4[0] = var10;
        var4[1] = var9;
        var4[2] = var1;
        var4[3] = var6;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = _closure2_slot0;
                var2 = !var2;
                if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var2 = _closure2_slot1;
case 2:
                if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var4 = _closure2_slot2;
                var3 = null;
                var2 = var3 == var4;
case 4:
                if(!var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 3;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.addFailedAppDMLoadChannel;
                var1 = _closure2_slot3;
                var1 = var2.bind(var3)(var1);
case 6:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var8.bind(var5)(var1, var4);
        var8 = var5.useEffect;
        var4 = new Array(1);
        var4[0] = var6;
        var1 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.removeFailedAppDMLoadChannel;
            var2 = _closure2_slot3;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1 = var8.bind(var5)(var1, var4);
        var8 = _closure1_slot0;
        var10 = _closure1_slot1;
        var4 = 4;
        var9 = var10[var4];
        var1 = undefined;
        var14 = var8.bind(var1)(var9);
        var13 = var14.useStateFromStores;
        var11 = _closure1_slot3;
        var12 = new Array(1);
        var12[0] = var11;
        var9 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = _closure1_slot3;
                var2 = var3.getApplicationState;
                var1 = _closure2_slot2;
                var3 = var2.bind(var3)(var1);
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var3 = var3.fetchState;
                var2 = var3.fetching;
case 8:
                var1 = var1 != var2;
                if(!var1) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                var1 = var2;
case 10:
                return var1;
            }
        };
        var9 = var13.bind(var14)(var12, var9);
        var _closure2_slot5 = var9;
        var4 = var10[var4];
        var10 = var8.bind(var1)(var4);
        var8 = var10.useStateFromStores;
        var4 = new Array(2);
        var4[0] = var11;
        var3 = _closure1_slot4;
        var4[1] = var3;
        var3 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var4 = _closure1_slot4;
                var3 = var4.getChannel;
                var1 = _closure2_slot3;
                var5 = var3.bind(var4)(var1);
                var1 = null;
                if(!(var1 == var5)) { _fun0003_ip = 12; continue _fun0003 }
case 4:
                var4 = {};
                var3 = 'contextless';
                var4['type'] = var3;
                _fun0003_ip = 13; continue _fun0003;
case 12:
                var3 = {};
                var3['channel'] = var5;
                var5 = 'channel';
                var3['type'] = var5;
                var4 = var3;
case 13:
                var3 = _closure1_slot3;
                var2 = var3.getContextState;
                var3 = var2.bind(var3)(var4);
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                var3 = var3.fetchState;
                var2 = var3.fetching;
case 14:
                var1 = var1 != var2;
                if(!var1) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                var1 = var2;
case 16:
                return var1;
            }
        };
        var8 = var8.bind(var10)(var4, var3);
        var _closure2_slot6 = var8;
        var3 = var5.useRef;
        var4 = false;
        var3 = var3.bind(var5)(var4);
        var _closure2_slot7 = var3;
        var3 = var5.useRef;
        var3 = var3.bind(var5)(var4);
        var _closure2_slot8 = var3;
        var10 = var5.useEffect;
        var4 = new Array(1);
        var4[0] = var6;
        var3 = function() {
            var3 = _closure2_slot7;
            var2 = false;
            var3['current'] = var2;
            var1 = _closure2_slot8;
            var1['current'] = var2;
            var1 = undefined;
            return var1;
        };
        var3 = var10.bind(var5)(var3, var4);
        var10 = var5.useEffect;
        var4 = new Array(1);
        var4[0] = var9;
        var3 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var2 = _closure2_slot5;
                if(!var2) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                var2 = _closure2_slot7;
                var1 = true;
                var2['current'] = var1;
case 18:
                var1 = undefined;
                return var1;
            }
        };
        var3 = var10.bind(var5)(var3, var4);
        var10 = var5.useEffect;
        var4 = new Array(1);
        var4[0] = var8;
        var3 = function() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var2 = _closure2_slot6;
                if(!var2) { _fun0005_ip = 18; continue _fun0005 }
case 19:
                var2 = _closure2_slot8;
                var1 = true;
                var2['current'] = var1;
case 18:
                var1 = undefined;
                return var1;
            }
        };
        var3 = var10.bind(var5)(var3, var4);
        var4 = var5.useEffect;
        var3 = new Array(4);
        var3[0] = var9;
        var3[1] = var8;
        var3[2] = var7;
        var3[3] = var6;
        var2 = function() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var2 = _closure2_slot5;
                var2 = !var2;
                if(!var2) { _fun0006_ip = 5; continue _fun0006 }
case 3:
                var3 = _closure2_slot6;
                var2 = !var3;
case 5:
                if(!var2) { _fun0006_ip = 20; continue _fun0006 }
case 21:
                var3 = _closure2_slot7;
                var2 = var3.current;
case 20:
                if(!var2) { _fun0006_ip = 12; continue _fun0006 }
case 22:
                var3 = _closure2_slot8;
                var2 = var3.current;
case 12:
                if(!var2) { _fun0006_ip = 23; continue _fun0006 }
case 24:
                var3 = _closure2_slot4;
                var4 = var3.length;
                var3 = 0;
                var2 = var3 === var4;
case 23:
                if(!var2) { _fun0006_ip = 25; continue _fun0006 }
case 26:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 3;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.addFailedAppDMLoadChannel;
                var1 = _closure2_slot3;
                var1 = var2.bind(var3)(var1);
case 25:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();