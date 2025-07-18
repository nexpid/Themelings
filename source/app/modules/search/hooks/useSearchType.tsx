// app/modules/search/hooks/useSearchType.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var8 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = function getSearchType(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = arg1;
            var2 = arguments[1];
            var8 = undefined;
            if(!(var2 === var8)) { _fun0001_ip = 38; continue _fun0001 }
 12:
            var4 = _closure1_slot2;
            var1 = new Array(2);
            var1[0] = var4;
            var3 = _closure1_slot3;
            var1[1] = var3;
            var2 = var1;
 38:
            var3 = var2;
            var1 = var3[Symbol.iterator];
            var3 = var1().next;
            var4 = var3().value;
            var2 = var1;
            var2 = var2 === var8;
            var5 = undefined;
            if(var2) { _fun0001_ip = 63; continue _fun0001 }
 60:
            var5 = var4;
 63:
            var7 = undefined;
            if(var2) { _fun0001_ip = 93; continue _fun0001 }
 68:
            var4 = var3().value;
            var3 = var1;
            var3 = var3 === var8;
            var7 = undefined;
            var2 = var3;
            if(var3) { _fun0001_ip = 93; continue _fun0001 }
 87:
            var7 = var4;
            var2 = var3;
 93:
            if(var2) { _fun0001_ip = 99; continue _fun0001 }
 96:
            var1.return();
 99:
            var2 = null;
            var3 = var2 == var6;
            var1 = null;
            if(var3) { _fun0001_ip = 217; continue _fun0001 }
 110:
            var4 = _closure1_slot4;
            var4 = var4.DMS;
            if(!(var6 !== var4)) { _fun0001_ip = 204; continue _fun0001 }
 127:
            var4 = _closure1_slot5;
            if(!(var6 !== var4)) { _fun0001_ip = 192; continue _fun0001 }
 135:
            var4 = var7.getGuild;
            var4 = var4.bind(var7)(var6);
            if(!(var2 == var4)) { _fun0001_ip = 180; continue _fun0001 }
 149:
            var4 = var5.getChannel;
            var4 = var4.bind(var5)(var6);
            var4 = var2 != var4;
            var2 = null;
            if(!var4) { _fun0001_ip = 178; continue _fun0001 }
 168:
            var4 = _closure1_slot4;
            var2 = var4.CHANNEL;
 178:
            _fun0001_ip = 190; continue _fun0001;
 180:
            var4 = _closure1_slot4;
            var2 = var4.GUILD;
 190:
            _fun0001_ip = 202; continue _fun0001;
 192:
            var4 = _closure1_slot4;
            var2 = var4.FAVORITES;
 202:
            _fun0001_ip = 214; continue _fun0001;
 204:
            var3 = _closure1_slot4;
            var2 = var3.DMS;
 214:
            var1 = var2;
 217:
            return var1;
        }
    };
    var _closure1_slot6 = var4;
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
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.SearchTypes;
    var _closure1_slot4 = var8;
    var5 = var5.FAVORITES;
    var _closure1_slot5 = var5;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/search/hooks/useSearchType.tsx';
    var5 = var6.bind(var7)(var5);
    var3['getSearchType'] = var4;
    var2 = function useSearchType(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 3;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var6 = _closure1_slot2;
        var2 = new Array(2);
        var2[0] = var6;
        var5 = _closure1_slot3;
        var2[1] = var5;
        var1 = function() {
            var4 = _closure1_slot6;
            var3 = _closure2_slot0;
            var5 = _closure1_slot2;
            var2 = new Array(2);
            var2[0] = var5;
            var1 = _closure1_slot3;
            var2[1] = var1;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useSearchType'] = var2;
    return var1;
})();