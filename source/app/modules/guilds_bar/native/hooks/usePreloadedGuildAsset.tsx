// app/modules/guilds_bar/native/hooks/usePreloadedGuildAsset.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native3;
    var3 = native6;
    var5 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var5[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var6 = var5[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var6);
    var _closure1_slot3 = var4;
    var4 = 4;
    var5 = var5[var4];
    var4 = native2;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guilds_bar/native/hooks/usePreloadedGuildAsset.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function usePreloadedGuildAsset(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = arg1;
            var8 = arg2;
            var1 = arg3;
            var _closure2_slot0 = var6;
            var _closure2_slot1 = var8;
            var _closure2_slot2 = var1;
            var11 = _closure1_slot3;
            var5 = var11.useState;
            var4 = {};
            var5 = var5.bind(var11)(var4);
            var4 = _closure1_slot2;
            var7 = undefined;
            var9 = 2;
            var5 = var4.bind(var7)(var5, var9);
            var4 = 1;
            var4 = var5[var4];
            var _closure2_slot3 = var4;
            var5 = var11.useRef;
            var4 = {};
            var4['guildId'] = var6;
            var4['asset'] = var1;
            var4['icon'] = var8;
            var4['preloading'] = var8;
            var5 = var5.bind(var11)(var4);
            var _closure2_slot4 = var5;
            var10 = var11.useEffect;
            var8 = function() {
                var1 = function() {
                    var1 = _closure2_slot4;
                    var2 = var1.current;
                    var1 = undefined;
                    var2['guildId'] = var1;
                    return var1;
                };
                return var1;
            };
            var4 = new Array(0);
            var4 = var10.bind(var11)(var8, var4);
            var8 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var9];
            var4 = var8.bind(var7)(var4);
            var4 = var4.bind(var7)(var5);
            var5 = var4.guildId;
            if(!(var6 === var5)) { _fun0001_ip = 161; continue _fun0001 }
 155:
            var1 = var4.asset;
 161:
            var4 = _closure1_slot3;
            var3 = var4.useEffect;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot4;
                    var2 = var2.current;
                    var2 = var2.guildId;
                    if(!(var3 === var2)) { _fun0002_ip = 171; continue _fun0002 }
 28:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0002_ip = 171; continue _fun0002 }
 41:
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot4;
                    var2 = var2.current;
                    var2 = var2.icon;
                    var2 = var3 !== var2;
                    if(!var2) { _fun0002_ip = 89; continue _fun0002 }
 66:
                    var4 = _closure2_slot1;
                    var3 = _closure2_slot4;
                    var3 = var3.current;
                    var3 = var3.preloading;
                    var2 = var4 !== var3;
 89:
                    if(!var2) { _fun0002_ip = 231; continue _fun0002 }
 95:
                    var2 = _closure2_slot4;
                    var2 = var2.current;
                    var4 = _closure2_slot1;
                    var2['preloading'] = var4;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 3;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var5.bind(var2)(var3);
                    var2 = var3.preload;
                    var4 = var2.bind(var3)(var4);
                    var3 = var4.then;
                    var2 = function() {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            var2 = _closure2_slot4;
                            var2 = var2.current;
                            var3 = var2.guildId;
                            var2 = _closure2_slot0;
                            var2 = var3 === var2;
                            if(!var2) { _fun0003_ip = 51; continue _fun0003 }
 28:
                            var3 = _closure2_slot4;
                            var3 = var3.current;
                            var4 = var3.preloading;
                            var3 = _closure2_slot1;
                            var2 = var4 === var3;
 51:
                            if(!var2) { _fun0003_ip = 101; continue _fun0003 }
 54:
                            var2 = _closure2_slot4;
                            var4 = var2.current;
                            var3 = _closure2_slot1;
                            var4['icon'] = var3;
                            var3 = var2.current;
                            var2 = _closure2_slot2;
                            var3['asset'] = var2;
                            var3 = _closure2_slot3;
                            var2 = undefined;
                            var1 = {};
                            var1 = var3.bind(var2)(var1);
 101:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
                    _fun0002_ip = 231; continue _fun0002;
 171:
                    var2 = _closure2_slot4;
                    var4 = var2.current;
                    var3 = _closure2_slot0;
                    var4['guildId'] = var3;
                    var3 = var2.current;
                    var4 = _closure2_slot1;
                    var3['icon'] = var4;
                    var3 = var2.current;
                    var3['preloading'] = var4;
                    var2 = var2.current;
                    var1 = _closure2_slot2;
                    var2['asset'] = var1;
 231:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();