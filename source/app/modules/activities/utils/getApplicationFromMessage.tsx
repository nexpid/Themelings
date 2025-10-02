// app/modules/activities/utils/getApplicationFromMessage.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
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
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SpotifyApplication;
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.isSpotifyParty;
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/utils/getApplicationFromMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getApplicationFromMessage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = var2.application;
            var4 = null;
            if(!(var4 == var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2.activity;
            var3 = var4 != var1;
            var5 = undefined;
            var1 = undefined;
            if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var2.activity;
            var3 = var3.party_id;
            var3 = var4 != var3;
            var1 = undefined;
            if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var6 = _closure1_slot2;
            var4 = var2.activity;
            var4 = var4.party_id;
            var4 = var6.bind(var5)(var4);
            var1 = undefined;
            if(!var4) { _fun0001_ip = 4; continue _fun0001 }
case 7:
            var1 = _closure1_slot1;
case 4:
            _fun0001_ip = 8; continue _fun0001;
case 2:
            var4 = _closure1_slot0;
            var3 = var4.createFromServer;
            var2 = var2.application;
            var1 = var3.bind(var4)(var2);
case 8:
            return var1;
        }
    };
    var3['getApplicationFromMessage'] = var2;
    return var1;
})();