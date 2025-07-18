// app/modules/stickers/useLoadGuildSticker.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stickers/useLoadGuildSticker.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useLoadGuildStickers(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot4;
        var4 = var5.useState;
        var3 = true;
        var7 = var4.bind(var5)(var3);
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = 2;
        var4 = var4.bind(var3)(var7, var2);
        var2 = 0;
        var2 = var4[var2];
        var3 = 1;
        var3 = var4[var3];
        var _closure2_slot1 = var3;
        var4 = var5.useEffect;
        var3 = new Array(1);
        var3[0] = var6;
        var1 = function() {
            var2 = false;
            var _closure3_slot0 = var2;
            var2 = function() {
                var4 = _closure1_slot2;
                var3 = undefined;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0001_ip = 98; continue _fun0001 }
 7:
                            var5 = _closure2_slot1;
                            var3 = undefined;
                            var2 = true;
                            var2 = var5.bind(var3)(var2);
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot1;
                            var2 = 3;
                            var2 = var6[var2];
                            var6 = var5.bind(var3)(var2);
                            var5 = var6.fetchGuildStickers;
                            var2 = _closure2_slot0;
                            var2 = var5.bind(var6)(var2);
                            SaveGenerator(address=65);
 63:
                            return var2;
 65:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                            if(var5) { _fun0001_ip = 95; continue _fun0001 }
 71:
                            var5 = _closure3_slot0;
                            if(var5) { _fun0001_ip = 92; continue _fun0001 }
 81:
                            var5 = _closure2_slot1;
                            var4 = false;
                            var4 = var5.bind(var3)(var4);
 92:
                            return var3;
 95:
                            return var2;
 98:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure4_slot0 = var2;
                var1 = function() {
                    var1 = undefined;
                    var4 = _closure4_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var3 = undefined;
            var2 = var2.bind(var3)();
            var2 = var2.bind(var3)();
            var1 = function() {
                var1 = true;
                _closure3_slot0 = var1;
                var1 = undefined;
                return var1;
            };
            return var1;
        };
        var1 = var4.bind(var5)(var1, var3);
        var1 = {};
        var1['isLoading'] = var2;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();