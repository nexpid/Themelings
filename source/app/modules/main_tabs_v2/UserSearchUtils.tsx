// app/modules/main_tabs_v2/UserSearchUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var8 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function cleanString(arg1) {
        var4 = arg1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.stripDiacritics;
        var1 = var4.toLocaleLowerCase;
        var1 = var1.bind(var4)();
        var2 = var2.bind(var3)(var1);
        var1 = var2.trim;
        var1 = var1.bind(var2)();
        return var1;
    };
    var _closure1_slot7 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.RelationshipTypes;
    var _closure1_slot6 = var5;
    var5 = 6;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/main_tabs_v2/UserSearchUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['cleanString'] = var4;
    var4 = function getRelationshipType(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = arg1;
            var3 = _closure1_slot5;
            var1 = var3.getRelationshipType;
            var5 = var1.bind(var3)(var6);
            var1 = _closure1_slot6;
            var3 = var1.NONE;
            var1 = var5;
            if(!(var5 === var3)) { _fun0001_ip = 72; continue _fun0001 }
 38:
            var4 = _closure1_slot3;
            var3 = var4.getSuggestion;
            var4 = var3.bind(var4)(var6);
            var3 = null;
            var1 = var5;
            if(!(var3 != var4)) { _fun0001_ip = 72; continue _fun0001 }
 62:
            var2 = _closure1_slot6;
            var1 = var2.SUGGESTION;
 72:
            return var1;
        }
    };
    var3['getRelationshipType'] = var4;
    var2 = function getNames(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = arg1;
            var3 = {};
            var _closure2_slot0 = var3;
            var7 = _closure1_slot5;
            var6 = var7.getNickname;
            var2 = var4.id;
            var2 = var6.bind(var7)(var2);
            var10 = null;
            if(!(var10 != var2)) { _fun0002_ip = 69; continue _fun0002 }
 40:
            var7 = _closure1_slot7;
            var6 = undefined;
            var8 = var7.bind(var6)(var2);
            var7 = var8.split;
            var6 = ' ';
            var6 = var7.bind(var8)(var6);
            var3[var2] = var6;
 69:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var6 = 5;
            var6 = var8[var6];
            var9 = undefined;
            var7 = var7.bind(var9)(var6);
            var6 = var7.getGlobalName;
            var7 = var6.bind(var7)(var4);
            var6 = var10 != var7;
            if(!var6) { _fun0002_ip = 117; continue _fun0002 }
 109:
            var8 = var3[var7];
            var6 = var10 == var8;
 117:
            if(!var6) { _fun0002_ip = 147; continue _fun0002 }
 120:
            var6 = _closure1_slot7;
            var10 = var6.bind(var9)(var7);
            var8 = var10.split;
            var6 = ' ';
            var6 = var8.bind(var10)(var6);
            var3[var7] = var6;
 147:
            var7 = var4.username;
            var8 = _closure1_slot7;
            var6 = var4.username;
            var9 = var8.bind(var9)(var6);
            var8 = var9.split;
            var6 = ' ';
            var6 = var8.bind(var9)(var6);
            var3[var7] = var6;
            var6 = _closure1_slot4;
            var5 = var6.getNicknames;
            var4 = var4.id;
            var5 = var5.bind(var6)(var4);
            var4 = var5.forEach;
            var1 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = arg1;
                    var2 = _closure2_slot0;
                    var4 = var2[var3];
                    var2 = null;
                    if(!(var2 == var4)) { _fun0003_ip = 56; continue _fun0003 }
 20:
                    var2 = _closure2_slot0;
                    var4 = _closure1_slot7;
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.split;
                    var1 = ' ';
                    var1 = var4.bind(var5)(var1);
                    var2[var3] = var1;
 56:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var4.bind(var5)(var1);
            var1 = {};
            var1['names'] = var3;
            var1['nick'] = var2;
            return var1;
        }
    };
    var3['getNames'] = var2;
    return var1;
})();