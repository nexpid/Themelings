// app/modules/now_playing/getApplicationIdForActivity.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.SpotifyApplication;
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.TWITCH_APPLICATION_ID_PREFIX;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.XBOX_APPLICATION_ID_PREFIX;
    var _closure1_slot4 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/now_playing/getApplicationIdForActivity.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getApplicationIdForActivity(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 3;
            var1 = var4[var1];
            var4 = undefined;
            var1 = var5.bind(var4)(var1);
            var1 = var1.bind(var4)(var2);
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 4;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.bind(var4)(var2);
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var2.party;
            var5 = null;
            if(!(var5 != var1)) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var1 = var2.party;
            var1 = var1.id;
            if(!(var5 == var1)) { _fun0001_ip = 7; continue _fun0001 }
case 4:
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 5;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.bind(var4)(var2);
            if(!var1) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var4 = var2.url;
            var1 = null;
            if(!(var1 == var4)) { _fun0001_ip = 10; continue _fun0001 }
case 8:
            var4 = var2.application_id;
            var1 = null;
            var4 = var1 != var4;
            if(!var4) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var1 = var2.application_id;
case 11:
            _fun0001_ip = 13; continue _fun0001;
case 10:
            var5 = _closure1_slot3;
            var4 = var2.url;
            var1 = var5 + var4;
case 13:
            _fun0001_ip = 14; continue _fun0001;
case 7:
            var4 = _closure1_slot2;
            var1 = var4.id;
case 14:
            _fun0001_ip = 15; continue _fun0001;
case 2:
            var3 = _closure1_slot4;
            var2 = var2.name;
            var1 = var3 + var2;
case 15:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();