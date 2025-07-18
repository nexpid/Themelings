// app/modules/polls/chat/usePollMessageContextItemTypes.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var8 = 0;
    var5 = var7[var8];
    var2 = native3;
    var1 = undefined;
    var2 = var2.bind(var1)(var5);
    var _closure1_slot2 = var2;
    var2 = {};
    var2['END_EARLY'] = var8;
    var5 = 'END_EARLY';
    var2[var8] = var5;
    var _closure1_slot3 = var2;
    var5 = new Array(0);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/polls/chat/usePollMessageContextItemTypes.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function usePollMessageContextItemTypes(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 1;
            var3 = var3[var2];
            var2 = undefined;
            var6 = var5.bind(var2)(var3);
            var5 = var6.useStateFromStores;
            var2 = _closure1_slot2;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var2 = _closure1_slot2;
                var1 = var2.getId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var5 = var5.bind(var6)(var3, var2);
            var3 = var4.poll;
            var2 = var4.isPoll;
            var2 = var2.bind(var4)();
            if(!var2) { _fun0001_ip = 169; continue _fun0001 }
 79:
            var2 = null;
            if(!(var2 != var3)) { _fun0001_ip = 169; continue _fun0001 }
 85:
            var2 = new Array(0);
            var7 = var3.expiry;
            var6 = var7.isSameOrBefore;
            var3 = global;
            var8 = var3.Date;
            var3 = var8.now;
            var3 = var3.bind(var8)();
            var3 = var6.bind(var7)(var3);
            var3 = !var3;
            if(!var3) { _fun0001_ip = 144; continue _fun0001 }
 129:
            var4 = var4.author;
            var4 = var4.id;
            var3 = var4 === var5;
 144:
            if(!var3) { _fun0001_ip = 167; continue _fun0001 }
 147:
            var4 = var2.push;
            var3 = _closure1_slot3;
            var3 = var3.END_EARLY;
            var3 = var4.bind(var2)(var3);
 167:
            return var2;
 169:
            var1 = _closure1_slot4;
            return var1;
        }
    };
    var3['default'] = var4;
    var3['PollMessageContextItemTypes'] = var2;
    return var1;
})();