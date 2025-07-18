// app/modules/activities/utils/useEmbeddedActivityBackground.tsx
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
    var4 = 1;
    var7 = var6[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = ['embedded_cover', 'embedded_background'];
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/utils/useEmbeddedActivityBackground.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useEmbeddedActivityBackground(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var7 = var2.applicationId;
            var _closure2_slot0 = var7;
            var10 = var2.size;
            var5 = var2.names;
            var11 = undefined;
            if(!(var5 === var11)) { _fun0001_ip = 37; continue _fun0001 }
 30:
            var5 = _closure1_slot4;
 37:
            var _closure2_slot1 = var5;
            var _closure2_slot2 = var11;
            var _closure2_slot3 = var11;
            var _closure2_slot4 = var11;
            var15 = _closure1_slot3;
            var2 = var15.useState;
            var6 = null;
            var2 = var2.bind(var15)(var6);
            var13 = _closure1_slot2;
            var12 = 2;
            var2 = var13.bind(var11)(var2, var12);
            var8 = 0;
            var9 = var2[var8];
            var3 = 1;
            var2 = var2[var3];
            _closure2_slot2 = var2;
            var14 = var15.useState;
            var2 = true;
            var2 = var14.bind(var15)(var2);
            var2 = var13.bind(var11)(var2, var12);
            var8 = var2[var8];
            var2 = var2[var3];
            _closure2_slot3 = var2;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var12];
            var3 = var3.bind(var11)(var2);
            var2 = var3.getAssetImage;
            var3 = var2.bind(var3)(var7, var9, var10);
            var2 = 'loading';
            if(var8) { _fun0001_ip = 189; continue _fun0001 }
 169:
            var8 = var6 != var3;
            var6 = 'not-found';
            if(!var8) { _fun0001_ip = 186; continue _fun0001 }
 182:
            var6 = 'fetched';
 186:
            var2 = var6;
 189:
            var6 = _closure1_slot3;
            var4 = var6.useRef;
            var4 = var4.bind(var6)(var5);
            _closure2_slot4 = var4;
            var5 = var6.useEffect;
            var4 = function() {
                var2 = _closure2_slot4;
                var1 = _closure2_slot1;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var4 = var5.bind(var6)(var4);
            var5 = var6.useEffect;
            var4 = new Array(1);
            var4[0] = var7;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot4;
                    var3 = var3.current;
                    var _closure3_slot0 = var3;
                    var4 = _closure2_slot0;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0002_ip = 85; continue _fun0002 }
 28:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var3 = 2;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var3 = var4.getAssets;
                    var2 = _closure2_slot0;
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.then;
                    var1 = function(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            var4 = _closure2_slot3;
                            var3 = undefined;
                            var1 = false;
                            var1 = var4.bind(var3)(var1);
                            var1 = global;
                            var5 = var1.Object;
                            var4 = var5.entries;
                            var1 = arg1;
                            var13 = var4.bind(var5)(var1);
                            var1 = var13.length;
                            var12 = 0;
                            var1 = var12 < var1;
                            var10 = '';
                            var8 = 2;
                            var7 = 1;
                            var6 = null;
                            var5 = 0;
                            if(!var1) { _fun0003_ip = 141; continue _fun0003 }
 72:
                            var4 = var13[var5];
                            var1 = _closure1_slot2;
                            var1 = var1.bind(var3)(var4, var8);
                            var4 = var1[var12];
                            var1 = var1[var7];
                            if(!(var6 != var1)) { _fun0003_ip = 129; continue _fun0003 }
 98:
                            var4 = var1.id;
                            if(!(var10 !== var4)) { _fun0003_ip = 129; continue _fun0003 }
 107:
                            var15 = _closure3_slot0;
                            var14 = var15.includes;
                            var4 = var1.name;
                            var4 = var14.bind(var15)(var4);
                            if(var4) { _fun0003_ip = 143; continue _fun0003 }
 129:
                            var5 = var5 + 1;
                            var4 = var13.length;
                            if(var5 < var4) { _fun0003_ip = 72; continue _fun0003 }
 141:
                            return var3;
 143:
                            var2 = _closure2_slot2;
                            var1 = var1.id;
                            var1 = var2.bind(var3)(var1);
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
 85:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var5.bind(var6)(var1, var4);
            var1 = {};
            var1['url'] = var3;
            var1['state'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();