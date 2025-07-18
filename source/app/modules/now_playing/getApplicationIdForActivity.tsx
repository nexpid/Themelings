// app/modules/now_playing/getApplicationIdForActivity.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var1 = native3;
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
 0:
            var2 = arg1;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 3;
            var1 = var4[var1];
            var4 = undefined;
            var1 = var5.bind(var4)(var1);
            var1 = var1.bind(var4)(var2);
            if(var1) { _fun0001_ip = 182; continue _fun0001 }
 39:
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 4;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.bind(var4)(var2);
            if(!var1) { _fun0001_ip = 94; continue _fun0001 }
 67:
            var1 = var2.party;
            var5 = null;
            if(!(var5 != var1)) { _fun0001_ip = 94; continue _fun0001 }
 79:
            var1 = var2.party;
            var1 = var1.id;
            if(!(var5 == var1)) { _fun0001_ip = 171; continue _fun0001 }
 94:
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 5;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.bind(var4)(var2);
            if(!var1) { _fun0001_ip = 133; continue _fun0001 }
 122:
            var4 = var2.url;
            var1 = null;
            if(!(var1 == var4)) { _fun0001_ip = 156; continue _fun0001 }
 133:
            var4 = var2.application_id;
            var1 = null;
            var4 = var1 != var4;
            if(!var4) { _fun0001_ip = 154; continue _fun0001 }
 148:
            var1 = var2.application_id;
 154:
            _fun0001_ip = 169; continue _fun0001;
 156:
            var5 = _closure1_slot3;
            var4 = var2.url;
            var1 = var5 + var4;
 169:
            _fun0001_ip = 180; continue _fun0001;
 171:
            var4 = _closure1_slot2;
            var1 = var4.id;
 180:
            _fun0001_ip = 195; continue _fun0001;
 182:
            var3 = _closure1_slot4;
            var2 = var2.name;
            var1 = var3 + var2;
 195:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();