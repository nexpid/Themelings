// app/modules/directory_channels/native/GuildDirectoryUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var8 = native3;
    var7 = native4;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var6;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var2 = function() {
        var4 = _closure1_slot4;
        var3 = undefined;
        var2 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 184; continue _fun0001 }
 15:
                    var12 = var2.directoryChannelId;
                    var3 = var2.directoryGuildName;
                    var _closure4_slot0 = var3;
                    var3 = var2.guild;
                    var _closure4_slot1 = var3;
                    var11 = var2.description;
                    var10 = var2.category;
                    var6 = var2.onClose;
                    var4 = undefined;
                    SaveGenerator(address=62);
 60:
                    return var4;
 62:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 181; continue _fun0001 }
 68:
                    var9 = _closure1_slot2;
                    var13 = _closure1_slot3;
                    var7 = 3;
                    var7 = var13[var7];
                    var9 = var9.bind(var4)(var7);
                    var7 = var9.addDirectoryGuildEntry;
                    var16 = var3.id;
                    var18 = var9;
                    var17 = var12;
                    var15 = var11;
                    var14 = var10;
                    var3 = var18[var7](var17, var16, var15, var14, var13);
                    SaveGenerator(address=122);
 120:
                    return var3;
 122:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(var7) { _fun0001_ip = 178; continue _fun0001 }
 128:
                    var6 = var6.bind(var4)();
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var5 = 4;
                    var5 = var7[var5];
                    var7 = var6.bind(var4)(var5);
                    var6 = var7.openLazy;
                    var5 = {};
                    var8 = function importer() {
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot3;
                        var2 = 6;
                        var2 = var1[var2];
                        var4 = undefined;
                        var3 = var3.bind(var4)(var2);
                        var2 = 5;
                        var2 = var1[var2];
                        var1 = var1.paths;
                        var3 = var3.bind(var4)(var2, var1);
                        var2 = var3.then;
                        var1 = function(arg1) {
                            var2 = arg1;
                            var2 = var2.default;
                            var _closure6_slot0 = var2;
                            var1 = function(arg1) {
                                var4 = _closure1_slot5;
                                var3 = _closure6_slot0;
                                var2 = {};
                                var7 = arg1;
                                var8 = var2;
                                var1 = copyDataProperties(var8, var7);
                                var6 = _closure4_slot1;
                                var5 = 'guild';
                                var2[var5] = var6;
                                var5 = _closure4_slot0;
                                var1 = 'directoryGuildName';
                                var2[var1] = var5;
                                var1 = undefined;
                                var1 = var4.bind(var1)(var3, var2);
                                return var1;
                            };
                            return var1;
                        };
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var5['importer'] = var8;
                    var5 = var6.bind(var7)(var5);
                    return var4;
 178:
                    return var3;
 181:
                    return var2;
 184:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/directory_channels/native/GuildDirectoryUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var3['onAddDirectoryGuildEntry'] = var2;
    return var1;
})();