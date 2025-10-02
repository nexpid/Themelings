// app/modules/activities/utils/useEmbeddedActivityBackground.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
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
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
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
case 0:
            var2 = arg1;
            var7 = var2.applicationId;
            var _closure2_slot0 = var7;
            var10 = var2.size;
            var5 = var2.names;
            var11 = undefined;
            if(!(var5 === var11)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = _closure1_slot4;
case 2:
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
            if(var8) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var8 = var6 != var3;
            var6 = 'not-found';
            if(!var8) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = 'fetched';
case 6:
            var2 = var6;
case 4:
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
case 0:
                    var3 = _closure2_slot4;
                    var3 = var3.current;
                    var _closure3_slot0 = var3;
                    var4 = _closure2_slot0;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
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
case 0:
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
                            if(!var1) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                            var4 = var13[var5];
                            var1 = _closure1_slot2;
                            var1 = var1.bind(var3)(var4, var8);
                            var4 = var1[var12];
                            var1 = var1[var7];
                            if(!(var6 != var1)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                            var4 = var1.id;
                            if(!(var10 !== var4)) { _fun0003_ip = 12; continue _fun0003 }
case 14:
                            var15 = _closure3_slot0;
                            var14 = var15.includes;
                            var4 = var1.name;
                            var4 = var14.bind(var15)(var4);
                            if(var4) { _fun0003_ip = 15; continue _fun0003 }
case 12:
                            var5 = var5 + 1;
                            var4 = var13.length;
                            if(var5 < var4) { _fun0003_ip = 11; continue _fun0003 }
case 10:
                            return var3;
case 15:
                            var2 = _closure2_slot2;
                            var1 = var1.id;
                            var1 = var2.bind(var3)(var1);
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
case 8:
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