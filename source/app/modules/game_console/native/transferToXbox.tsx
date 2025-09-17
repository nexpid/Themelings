// app/modules/game_console/native/transferToXbox.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var7 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var6;
    var1 = function _transferToXbox() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    var8 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 403; continue _fun0001 }
 13:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var2 = 5;
                    var2 = var4[var2];
                    var6 = undefined;
                    var4 = var3.bind(var6)(var2);
                    var3 = var4.maybeShowPTTAlert;
                    var2 = _closure1_slot6;
                    var2 = var2.XBOX;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=63);
 61:
                    return var2;
 63:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 400; continue _fun0001 }
 72:
                    var4 = _closure1_slot2;
                    var3 = _closure1_slot3;
                    var13 = 6;
                    var3 = var3[var13];
                    var4 = var4.bind(var6)(var3);
                    var3 = var4.disconnectRemote;
                    var3 = var3.bind(var4)();
                    SaveGenerator(address=106);
 104:
                    return var3;
 106:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 397; continue _fun0001 }
 115:
                    var5 = _closure1_slot2;
                    var4 = _closure1_slot3;
                    var4 = var4[var13];
                    var5 = var5.bind(var6)(var4);
                    var4 = var5.getConnectNonce;
                    var4 = var4.bind(var5)();
                    SaveGenerator(address=146);
 144:
                    return var4;
 146:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 394; continue _fun0001 }
 155:
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot3;
                    var5 = 7;
                    var5 = var10[var5];
                    var9 = var9.bind(var6)(var5);
                    var5 = {};
                    var5['nonce'] = var4;
                    var11 = false;
                    var5['forQRCode'] = var11;
                    var9 = var9.bind(var6)(var8, var5);
                    var10 = _closure1_slot5;
                    var5 = var10.canOpenURL;
                    var5 = var5.bind(var10)(var9);
                    SaveGenerator(address=214);
 212:
                    return var5;
 214:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=9);
                    if(var10) { _fun0001_ip = 391; continue _fun0001 }
 223:
                    var14 = _closure1_slot1;
                    var12 = _closure1_slot3;
                    if(var5) { _fun0001_ip = 276; continue _fun0001 }
 234:
                    var10 = 8;
                    var10 = var12[var10];
                    var16 = var14.bind(var6)(var10);
                    var15 = var16.openLazy;
                    var10 = {};
                    var17 = function importer() {
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot3;
                        var2 = 10;
                        var2 = var1[var2];
                        var4 = undefined;
                        var3 = var3.bind(var4)(var2);
                        var2 = 9;
                        var2 = var1[var2];
                        var1 = var1.paths;
                        var3 = var3.bind(var4)(var2, var1);
                        var2 = var3.then;
                        var1 = function(arg1) {
                            var2 = arg1;
                            var2 = var2.default;
                            var _closure6_slot0 = var2;
                            var1 = function(arg1) {
                                var4 = _closure1_slot7;
                                var3 = _closure6_slot0;
                                var2 = {};
                                var5 = arg1;
                                var6 = var2;
                                var1 = copyDataProperties(var6, var5);
                                var1 = undefined;
                                var1 = var4.bind(var1)(var3, var2);
                                return var1;
                            };
                            return var1;
                        };
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var10['importer'] = var17;
                    var10 = var15.bind(var16)(var10);
                    return var10;
 276:
                    var10 = 11;
                    var10 = var12[var10];
                    var15 = var14.bind(var6)(var10);
                    var14 = var8.id;
                    var10 = _closure1_slot6;
                    var10 = var10.XBOX;
                    var10 = var15.bind(var6)(var14, var10);
                    var10 = _closure1_slot2;
                    var13 = var12[var13];
                    var15 = var10.bind(var6)(var13);
                    var14 = var15.waitForSession;
                    var13 = _closure1_slot6;
                    var13 = var13.XBOX;
                    var8 = var8.id;
                    var8 = var14.bind(var15)(var13, var8, var4);
                    var8 = 12;
                    var8 = var12[var8];
                    var10 = var10.bind(var6)(var8);
                    var8 = var10.stopOwnStream;
                    var8 = var8.bind(var10)(var11);
                    var8 = _closure1_slot5;
                    var7 = var8.openURL;
                    var7 = var7.bind(var8)(var9);
                    return var6;
 391:
                    return var5;
 394:
                    return var4;
 397:
                    return var3;
 400:
                    return var2;
 403:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot8 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot8 = var1;
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
    var4 = var4.Linking;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PlatformTypes;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_console/native/transferToXbox.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function transferToXbox() {
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();