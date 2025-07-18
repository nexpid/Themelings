// app/modules/activities/utils/getApplicationFromMessage.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
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
 0:
            var2 = arg1;
            var1 = var2.application;
            var4 = null;
            if(!(var4 == var1)) { _fun0001_ip = 87; continue _fun0001 }
 14:
            var1 = var2.activity;
            var3 = var4 != var1;
            var5 = undefined;
            var1 = undefined;
            if(!var3) { _fun0001_ip = 85; continue _fun0001 }
 31:
            var3 = var2.activity;
            var3 = var3.party_id;
            var3 = var4 != var3;
            var1 = undefined;
            if(!var3) { _fun0001_ip = 85; continue _fun0001 }
 52:
            var6 = _closure1_slot2;
            var4 = var2.activity;
            var4 = var4.party_id;
            var4 = var6.bind(var5)(var4);
            var1 = undefined;
            if(!var4) { _fun0001_ip = 85; continue _fun0001 }
 81:
            var1 = _closure1_slot1;
 85:
            _fun0001_ip = 110; continue _fun0001;
 87:
            var4 = _closure1_slot0;
            var3 = var4.createFromServer;
            var2 = var2.application;
            var1 = var3.bind(var4)(var2);
 110:
            return var1;
        }
    };
    var3['getApplicationFromMessage'] = var2;
    return var1;
})();