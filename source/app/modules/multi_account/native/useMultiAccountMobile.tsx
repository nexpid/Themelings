// app/modules/multi_account/native/useMultiAccountMobile.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var1 = native4;
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
    var7 = var6[var1];
    var4 = native3;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/multi_account/native/useMultiAccountMobile.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useMultiAccountMobile() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 1;
            var1 = var3[var1];
            var4 = undefined;
            var8 = var6.bind(var4)(var1);
            var7 = var8.useStateFromStores;
            var1 = _closure1_slot3;
            var5 = new Array(1);
            var5[0] = var1;
            var1 = function() {
                var2 = _closure1_slot3;
                var1 = var2.getCanUseMultiAccountMobile;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var7.bind(var8)(var5, var1);
            var5 = 2;
            var3 = var3[var5];
            var3 = var6.bind(var4)(var3);
            var9 = var3.MultiAccountMobileExperiment;
            var8 = var9.useExperiment;
            var6 = {};
            var3 = '9fc8b9_1';
            var6['location'] = var3;
            var3 = {};
            var7 = false;
            var3['autoTrackExposure'] = var7;
            var3 = var8.bind(var9)(var6, var3);
            var6 = var3.isMultiAccountMobileEnabled;
            var3 = var3.clearCanUseMultiAccountMobile;
            if(var1) { _fun0001_ip = 161; continue _fun0001 }
 123:
            if(!var6) { _fun0001_ip = 161; continue _fun0001 }
 126:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var6 = 3;
            var6 = var9[var6];
            var9 = var8.bind(var4)(var6);
            var8 = var9.multiAccountMobileExperimentUpdate;
            var6 = true;
            var6 = var8.bind(var9)(var6);
            _fun0001_ip = 195; continue _fun0001;
 161:
            if(!var3) { _fun0001_ip = 195; continue _fun0001 }
 164:
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 3;
            var3 = var8[var3];
            var6 = var6.bind(var4)(var3);
            var3 = var6.multiAccountMobileExperimentUpdate;
            var3 = var3.bind(var6)(var7);
 195:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var5];
            var2 = var3.bind(var4)(var2);
            var4 = var2.MultiAccountMobileExperiment;
            var3 = var4.trackExposure;
            var2 = {};
            var5 = '9fc8b9_2';
            var2['location'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var3['useMultiAccountMobile'] = var2;
    return var1;
})();