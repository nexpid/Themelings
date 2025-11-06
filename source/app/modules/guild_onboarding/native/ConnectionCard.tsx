// app/modules/guild_onboarding/native/ConnectionCard.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var6;
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
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.OnboardingConnectionType;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_onboarding/native/ConnectionCard.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ConnectionCard(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var6 = var1.connection;
            var3 = var6.connection_type;
            var1 = _closure1_slot2;
            var1 = var1.APPLICATION;
            if(!(var3 !== var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var6.connection_type;
            var1 = _closure1_slot2;
            var3 = var1.PROVIDER_CONNECTED_ACCOUNT;
            var1 = null;
            if(!(var4 === var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = _closure1_slot3;
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 4;
            var3 = var5[var3];
            var5 = undefined;
            var4 = var4.bind(var5)(var3);
            var3 = {};
            var3['connection'] = var6;
            var1 = var7.bind(var5)(var4, var3);
case 4:
            _fun0001_ip = 6; continue _fun0001;
case 2:
            var5 = _closure1_slot3;
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 3;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['connection'] = var6;
            var1 = var5.bind(var4)(var3, var2);
case 6:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();