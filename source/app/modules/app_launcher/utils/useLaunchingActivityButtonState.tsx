// app/modules/app_launcher/utils/useLaunchingActivityButtonState.tsx
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
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_launcher/utils/useLaunchingActivityButtonState.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useLaunchingActivityButtonState(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var10 = var2.applicationId;
            var _closure2_slot0 = var10;
            var3 = var2.context;
            var _closure2_slot1 = var3;
            var9 = var2.launchingComponentId;
            var8 = var2.onSubmissionComplete;
            var _closure2_slot2 = var8;
            var6 = undefined;
            var _closure2_slot3 = var6;
            var _closure2_slot4 = var6;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 3;
            var2 = var4[var2];
            var7 = var3.bind(var6)(var2);
            var2 = var7.useGetOrFetchApplication;
            var11 = var2.bind(var7)(var10);
            var2 = 4;
            var7 = var4[var2];
            var13 = var3.bind(var6)(var7);
            var12 = var13.useStateFromStores;
            var7 = _closure1_slot4;
            var10 = new Array(1);
            var10[0] = var7;
            var7 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var4 = _closure1_slot4;
                    var3 = var4.getLaunchState;
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var7 = var1.type;
                    var6 = 'channel';
                    var1 = undefined;
                    if(!(var6 === var7)) { _fun0002_ip = 53; continue _fun0002 }
 39:
                    var5 = _closure2_slot1;
                    var5 = var5.channel;
                    var1 = var5.id;
 53:
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var7 = var12.bind(var13)(var10, var7);
            var2 = var4[var2];
            var10 = var3.bind(var6)(var2);
            var4 = var10.useStateFromStores;
            var2 = _closure1_slot5;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var3 = _closure1_slot5;
                var2 = var3.isLaunchingFrame;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var4.bind(var10)(var3, var2);
            var2 = null;
            if(!(var2 != var11)) { _fun0001_ip = 204; continue _fun0001 }
 170:
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 5;
            var3 = var12[var3];
            var10 = var10.bind(var6)(var3);
            var3 = var10.canLaunchFrame;
            var3 = var3.bind(var10)(var11);
            if(var3) { _fun0001_ip = 233; continue _fun0001 }
 204:
            var3 = var2 != var7;
            if(!var3) { _fun0001_ip = 217; continue _fun0001 }
 211:
            var3 = var7.isLaunching;
 217:
            if(!var3) { _fun0001_ip = 230; continue _fun0001 }
 220:
            var7 = var7.componentId;
            var3 = var7 === var9;
 230:
            var4 = var3;
 233:
            _closure2_slot3 = var4;
            var7 = _closure1_slot1;
            var9 = _closure1_slot2;
            var3 = 6;
            var3 = var9[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.bind(var6)(var4);
            _closure2_slot4 = var3;
            var7 = _closure1_slot3;
            var6 = var7.useEffect;
            var5 = new Array(3);
            var5[0] = var4;
            var5[1] = var3;
            var5[2] = var8;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot3;
                    var2 = !var2;
                    if(!var2) { _fun0003_ip = 17; continue _fun0003 }
 13:
                    var2 = _closure2_slot4;
 17:
                    if(!var2) { _fun0003_ip = 40; continue _fun0003 }
 20:
                    var3 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0003_ip = 40; continue _fun0003 }
 30:
                    var2 = _closure2_slot2;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 40:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var6.bind(var7)(var1, var5);
            var1 = {};
            var1['submitting'] = var4;
            var4 = var2 != var3;
            var2 = null;
            if(!var4) { _fun0001_ip = 323; continue _fun0001 }
 320:
            var2 = var3;
 323:
            var1['wasSubmitting'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();