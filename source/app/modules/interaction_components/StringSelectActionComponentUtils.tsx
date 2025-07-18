// app/modules/interaction_components/StringSelectActionComponentUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
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
    var4 = native3;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/interaction_components/StringSelectActionComponentUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getInitialStringSelectOptions(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var7 = _closure1_slot2;
            var6 = var7.getInteractionComponentState;
            var5 = var3.id;
            var2 = arg2;
            var2 = var6.bind(var7)(var2, var5);
            var5 = null;
            var6 = var5 == var2;
            var7 = undefined;
            var5 = undefined;
            if(var6) { _fun0001_ip = 50; continue _fun0001 }
 45:
            var5 = var2.type;
 50:
            var6 = _closure1_slot0;
            var8 = _closure1_slot1;
            var4 = 1;
            var4 = var8[var4];
            var4 = var6.bind(var7)(var4);
            var4 = var4.ComponentType;
            var4 = var4.STRING_SELECT;
            if(!(var5 !== var4)) { _fun0001_ip = 123; continue _fun0001 }
 86:
            var5 = var3.options;
            var4 = var5.filter;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.default;
                return var1;
            };
            var4 = var4.bind(var5)(var3);
            var3 = var4.map;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.value;
                return var1;
            };
            var1 = var3.bind(var4)(var1);
            _fun0001_ip = 128; continue _fun0001;
 123:
            var1 = var2.values;
 128:
            return var1;
        }
    };
    var3['getInitialStringSelectOptions'] = var2;
    return var1;
})();