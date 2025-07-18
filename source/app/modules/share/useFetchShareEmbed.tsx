// app/modules/share/useFetchShareEmbed.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot5 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/share/useFetchShareEmbed.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useFetchShareEmbed(arg1) {
        var8 = arg1;
        var _closure2_slot0 = var8;
        var7 = _closure1_slot5;
        var2 = var7.useState;
        var6 = undefined;
        var2 = var2.bind(var7)(var6);
        var11 = _closure1_slot4;
        var10 = 2;
        var3 = var11.bind(var6)(var2, var10);
        var2 = 0;
        var4 = var3[var2];
        var9 = 1;
        var3 = var3[var9];
        var _closure2_slot1 = var3;
        var3 = var7.useState;
        var12 = false;
        var3 = var3.bind(var7)(var12);
        var5 = var11.bind(var6)(var3, var10);
        var3 = var5[var2];
        var5 = var5[var9];
        var _closure2_slot2 = var5;
        var5 = var7.useState;
        var5 = var5.bind(var7)(var12);
        var5 = var11.bind(var6)(var5, var10);
        var2 = var5[var2];
        var5 = var5[var9];
        var _closure2_slot3 = var5;
        var9 = var7.useRef;
        var5 = true;
        var5 = var9.bind(var7)(var5);
        var _closure2_slot4 = var5;
        var5 = var7.useRef;
        var5 = var5.bind(var7)(var6);
        var _closure2_slot5 = var5;
        var6 = var7.useEffect;
        var5 = new Array(1);
        var5[0] = var8;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = _closure2_slot0;
                var5 = null;
                if(!(var5 != var2)) { _fun0001_ip = 229; continue _fun0001 }
 18:
                var4 = _closure2_slot0;
                var2 = '';
                if(!(var2 !== var4)) { _fun0001_ip = 229; continue _fun0001 }
 33:
                var7 = _closure2_slot0;
                var6 = var7.match;
                var8 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 3;
                var4 = var4[var2];
                var2 = undefined;
                var4 = var8.bind(var2)(var4);
                var4 = var4.URL_REGEX;
                var8 = var6.bind(var7)(var4);
                var6 = var5 == var8;
                var4 = undefined;
                if(var6) { _fun0001_ip = 101; continue _fun0001 }
 88:
                var7 = var8.at;
                var6 = 0;
                var4 = var7.bind(var8)(var6);
 101:
                var _closure3_slot0 = var4;
                var6 = _closure2_slot5;
                var6 = var6.current;
                if(!(var4 === var6)) { _fun0001_ip = 120; continue _fun0001 }
 118:
                return var2;
 120:
                var6 = _closure2_slot5;
                var6['current'] = var4;
                if(!(var5 != var4)) { _fun0001_ip = 206; continue _fun0001 }
 134:
                var4 = function() {
                    var4 = _closure1_slot3;
                    var3 = undefined;
                    var2 = function* () {
                        var1 = function* anon_0_() {
                            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0002_ip = 341; continue _fun0002 }
 12:
                                var6 = undefined;
                                var10 = undefined;
 16: // try_start_0 // try_start_2
                                var4 = _closure2_slot2;
                                var2 = true;
                                var2 = var4.bind(var6)(var2);
                                var7 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var2 = 4;
                                var2 = var8[var2];
                                var8 = var7.bind(var6)(var2);
                                var7 = var8.unfurlEmbedUrl;
                                var11 = _closure3_slot0;
                                var2 = new Array(1);
                                var2[0] = var11;
                                var2 = var7.bind(var8)(var2);
                                SaveGenerator(address=83);
 81:
                                return var2;
 83:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                                if(var7) { _fun0002_ip = 197; continue _fun0002 }
 89:
                                var10 = var2;
                                var7 = var2.embeds;
                                var7 = var7.length;
                                var11 = 0;
                                if(!(var11 !== var7)) { _fun0002_ip = 145; continue _fun0002 }
 109:
                                var8 = _closure2_slot1;
                                var7 = {};
                                var10 = var10.embeds;
                                var10 = var10[var11];
                                var7['embed'] = var10;
                                var9 = _closure3_slot0;
                                var7['url'] = var9;
                                var7 = var8.bind(var6)(var7);
 143: // try_end0
                                _fun0002_ip = 252; continue _fun0002;
 145: // try_start_1
                                var5 = _closure2_slot1;
                                var5 = var5.bind(var6)(var6);
 154: // try_end1 // try_end2
                                var8 = _closure1_slot0;
                                var9 = _closure1_slot2;
                                var7 = 5;
                                var7 = var9[var7];
                                var9 = var8.bind(var6)(var7);
                                var8 = var9.batchUpdates;
                                var7 = function() {
                                    var4 = _closure2_slot3;
                                    var1 = undefined;
                                    var3 = true;
                                    var3 = var4.bind(var1)(var3);
                                    var3 = _closure2_slot2;
                                    var2 = false;
                                    var2 = var3.bind(var1)(var2);
                                    return var1;
                                };
                                var7 = var8.bind(var9)(var7);
                                var5 = undefined;
                                return var5;
 197:
                                var5 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var4 = 5;
                                var4 = var7[var4];
                                var7 = var5.bind(var6)(var4);
                                var5 = var7.batchUpdates;
                                var4 = function() {
                                    var4 = _closure2_slot3;
                                    var1 = undefined;
                                    var3 = true;
                                    var3 = var4.bind(var1)(var3);
                                    var3 = _closure2_slot2;
                                    var2 = false;
                                    var2 = var3.bind(var1)(var2);
                                    return var1;
                                };
                                var4 = var5.bind(var7)(var4);
                                return var2;
 238: // try_start_3 // catch_target0 // catch_target1
                                CatchBlockStart(arg_register=1);
                                var2 = _closure2_slot1;
                                var2 = var2.bind(var6)(var6);
 252: // try_end3
                                var4 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var2 = 5;
                                var2 = var5[var2];
                                var5 = var4.bind(var6)(var2);
                                var4 = var5.batchUpdates;
                                var2 = function() {
                                    var4 = _closure2_slot3;
                                    var1 = undefined;
                                    var3 = true;
                                    var3 = var4.bind(var1)(var3);
                                    var3 = _closure2_slot2;
                                    var2 = false;
                                    var2 = var3.bind(var1)(var2);
                                    return var1;
                                };
                                var2 = var4.bind(var5)(var2);
                                return var6;
 296: // catch_target2 // catch_target3
                                CatchBlockStart(arg_register=1);
                                var5 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var4 = 5;
                                var4 = var7[var4];
                                var5 = var5.bind(var6)(var4);
                                var4 = var5.batchUpdates;
                                var3 = function() {
                                    var4 = _closure2_slot3;
                                    var1 = undefined;
                                    var3 = true;
                                    var3 = var4.bind(var1)(var3);
                                    var3 = _closure2_slot2;
                                    var2 = false;
                                    var2 = var3.bind(var1)(var2);
                                    return var1;
                                };
                                var3 = var4.bind(var5)(var3);
                                throw var2;
 341:
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
                var6 = var4.bind(var2)();
                var4 = _closure2_slot4;
                var4 = var4.current;
                if(!var4) { _fun0001_ip = 173; continue _fun0001 }
 157:
                var5 = _closure2_slot4;
                var4 = false;
                var5['current'] = var4;
                var4 = var6.bind(var2)();
 173:
                var4 = global;
                var5 = var4.setTimeout;
                var4 = 1000;
                var4 = var5.bind(var2)(var6, var4);
                var _closure3_slot1 = var4;
                var3 = function() {
                    var1 = global;
                    var3 = var1.clearTimeout;
                    var2 = _closure3_slot1;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                return var3;
 206:
                var3 = _closure2_slot1;
                var3 = var3.bind(var2)(var2);
                var4 = _closure2_slot4;
                var3 = false;
                var4['current'] = var3;
                return var2;
 229:
                var3 = _closure2_slot4;
                var2 = false;
                var3['current'] = var2;
                var2 = _closure2_slot1;
                var1 = undefined;
                var1 = var2.bind(var1)(var1);
                var1 = undefined;
                return var1;
            }
        };
        var1 = var6.bind(var7)(var1, var5);
        var1 = {};
        var1['embed'] = var4;
        var1['isLoading'] = var3;
        var1['hasTriedResolving'] = var2;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();