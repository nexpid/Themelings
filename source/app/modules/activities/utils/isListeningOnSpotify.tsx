// app/modules/activities/utils/isListeningOnSpotify.tsx
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
    var7 = var4.ActivityTypes;
    var _closure1_slot2 = var7;
    var4 = var4.PlatformTypes;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.isSpotifyParty;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/utils/isListeningOnSpotify.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function isListeningOnSpotify(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var4 = null;
            var1 = var4 != var2;
            if(!var1) { _fun0001_ip = 34; continue _fun0001 }
 12:
            var5 = var2.type;
            var3 = _closure1_slot2;
            var3 = var3.LISTENING;
            var1 = var5 === var3;
 34:
            if(!var1) { _fun0001_ip = 96; continue _fun0001 }
 37:
            var5 = var2.name;
            var8 = _closure1_slot0;
            var7 = _closure1_slot1;
            var6 = 2;
            var7 = var7[var6];
            var6 = undefined;
            var7 = var8.bind(var6)(var7);
            var6 = var7.get;
            var3 = _closure1_slot3;
            var3 = var3.SPOTIFY;
            var3 = var6.bind(var7)(var3);
            var3 = var3.name;
            var1 = var5 === var3;
 96:
            if(!var1) { _fun0001_ip = 109; continue _fun0001 }
 99:
            var3 = var2.party;
            var1 = var4 != var3;
 109:
            if(!var1) { _fun0001_ip = 127; continue _fun0001 }
 112:
            var3 = var2.party;
            var3 = var3.id;
            var1 = var4 != var3;
 127:
            if(!var1) { _fun0001_ip = 155; continue _fun0001 }
 130:
            var4 = _closure1_slot4;
            var2 = var2.party;
            var3 = var2.id;
            var2 = undefined;
            var1 = var4.bind(var2)(var3);
 155:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();