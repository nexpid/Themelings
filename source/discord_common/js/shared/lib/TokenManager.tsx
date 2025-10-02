// discord_common/js/shared/lib/TokenManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var8 = require;
        var3 = exports;
        var9 = dependencyMap;
        var _closure1_slot0 = var8;
        var _closure1_slot1 = var9;
        var1 = function fromEntries(arg1) {
            var4 = new Array(0);
            var6 = arg1;
            var5 = 0;
            var7 = var4;
            var1 = arraySpread(var7, var6, var5);
            var3 = var4.reduce;
            var2 = function(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = arg1;
                    var6 = arg2;
                    var4 = var6[Symbol.iterator];
                    var6 = var4().next;
                    var2 = var6().value;
                    var3 = var4;
                    var8 = undefined;
                    var5 = var3 === var8;
                    var3 = undefined;
                    if(var5) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var3 = var2;
case 2:
                    var2 = undefined;
                    if(var5) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var7 = var6().value;
                    var6 = var4;
                    var6 = var6 === var8;
                    var2 = undefined;
                    var5 = var6;
                    if(var6) { _fun0002_ip = 4; continue _fun0002 }
case 6:
                    var2 = var7;
                    var5 = var6;
case 4:
                    if(var5) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                    var4.return();
case 7:
                    var1[var3] = var2;
                    return var1;
                }
            };
            var1 = {};
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var _closure1_slot13 = var1;
        var1 = function storeTokens() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var2 = _closure1_slot11;
                if(var2) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var3 = _closure1_slot7;
                var2 = null;
                if(!(var2 == var3)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 1;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var4 = var2.Storage;
                var3 = var4.remove;
                var2 = _closure1_slot3;
                var2 = var3.bind(var4)(var2);
                _fun0003_ip = 13; continue _fun0003;
case 11:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 1;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var5 = var2.Storage;
                var4 = var5.set;
                var3 = _closure1_slot3;
                var2 = _closure1_slot7;
                var2 = var4.bind(var5)(var3, var2);
case 13:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 1;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var6 = var3.Storage;
                var5 = var6.set;
                var4 = _closure1_slot2;
                var3 = _closure1_slot10;
                var3 = var5.bind(var6)(var4, var3);
                return var2;
case 9:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 1;
                var6 = var5[var2];
                var3 = undefined;
                var6 = var4.bind(var3)(var6);
                var8 = var6.Storage;
                var7 = var8.remove;
                var6 = _closure1_slot3;
                var6 = var7.bind(var8)(var6);
                var2 = var5[var2];
                var2 = var4.bind(var3)(var2);
                var3 = var2.Storage;
                var2 = var3.remove;
                var1 = _closure1_slot2;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            }
        };
        var _closure1_slot14 = var1;
        var1 = function maybeDecryptToken(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var7 = arg1;
                var1 = null;
                if(!(var1 != var7)) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                var3 = var7.length;
                var2 = 0;
                if(!(var2 !== var3)) { _fun0004_ip = 14; continue _fun0004 }
case 16:
                var2 = _closure1_slot5;
                if(!(var1 != var2)) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                var1 = var2.isEncryptionAvailable;
                var1 = var1.bind(var2)();
                if(!var1) { _fun0004_ip = 17; continue _fun0004 }
case 19:
                var2 = var7.startsWith;
                var1 = _closure1_slot4;
                var1 = var2.bind(var7)(var1);
                if(var1) { _fun0004_ip = 20; continue _fun0004 }
case 17:
                var1 = {};
                var1['decryptedToken'] = var7;
                var2 = false;
                var1['wasEncrypted'] = var2;
                _fun0004_ip = 21; continue _fun0004;
case 20:
                var2 = {};
                var5 = _closure1_slot5;
                var4 = var5.decryptString;
                var6 = var7.substring;
                var3 = 12;
                var3 = var6.bind(var7)(var3);
                var3 = var4.bind(var5)(var3);
                var2['decryptedToken'] = var3;
                var3 = true;
                var2['wasEncrypted'] = var3;
                var1 = var2;
case 21:
                _fun0004_ip = 22; continue _fun0004;
case 14:
                var1 = {'decryptedToken': null, 'wasEncrypted': false};
case 22:
                return var1;
            }
        };
        var _closure1_slot15 = var1;
        var1 = function maybeEncryptToken(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var4 = arg1;
                var5 = _closure1_slot5;
                var3 = null;
                var1 = var4;
                if(!(var3 != var5)) { _fun0005_ip = 23; continue _fun0005 }
case 24:
                var3 = var5.isEncryptionAvailable;
                var3 = var3.bind(var5)();
                var1 = var4;
                if(!var3) { _fun0005_ip = 23; continue _fun0005 }
case 5:
                var5 = var4.startsWith;
                var3 = _closure1_slot4;
                var3 = var5.bind(var4)(var3);
                var1 = var4;
                if(var3) { _fun0005_ip = 23; continue _fun0005 }
case 25:
                var5 = _closure1_slot4;
                var3 = _closure1_slot5;
                var2 = var3.encryptString;
                var4 = var2.bind(var3)(var4);
                var2 = global;
                var2 = var2.HermesInternal;
                var3 = var2.concat;
                var2 = '';
                var1 = var3.bind(var2)(var5, var4);
case 23:
                return var1;
            }
        };
        var _closure1_slot16 = var1;
        var6 = function getToken(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var3 = arg1;
                var1 = null;
                if(!(var1 == var3)) { _fun0006_ip = 26; continue _fun0006 }
case 15:
                var1 = _closure1_slot6;
                _fun0006_ip = 27; continue _fun0006;
case 26:
                var2 = _closure1_slot9;
                var1 = var2[var3];
case 27:
                return var1;
            }
        };
        var _closure1_slot17 = var6;
        var1 = function setSecondaryToken(arg1, arg2) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var3 = arg2;
                var1 = null;
                if(!(var1 != var3)) { _fun0007_ip = 12; continue _fun0007 }
case 15:
                var2 = _closure1_slot9;
                var1 = arg1;
                var2[var3] = var1;
case 12:
                var2 = _closure1_slot8;
                if(var2) { _fun0007_ip = 28; continue _fun0007 }
case 29:
                var2 = _closure1_slot6;
                var _closure1_slot7 = var2;
                var2 = _closure1_slot9;
                _closure1_slot10 = var2;
                var3 = _closure1_slot14;
                var2 = undefined;
                var2 = var3.bind(var2)();
                _fun0007_ip = 30; continue _fun0007;
case 28:
                var2 = _closure1_slot20;
                var1 = undefined;
                var1 = var2.bind(var1)();
case 30:
                var1 = undefined;
                return var1;
            }
        };
        var _closure1_slot18 = var1;
        var5 = function removeToken(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var6 = arg1;
                var2 = _closure1_slot6;
                var1 = null;
                if(!(var1 != var6)) { _fun0008_ip = 31; continue _fun0008 }
case 32:
                var4 = _closure1_slot9;
                var2 = var4[var6];
                var5 = _closure1_slot9;
                var5 = delete var5[var6];
                var5 = _closure1_slot10;
                var5 = delete var5[var6];
case 31:
                var4 = _closure1_slot6;
                if(!(var2 === var4)) { _fun0008_ip = 25; continue _fun0008 }
case 33:
                var _closure1_slot6 = var1;
                _closure1_slot7 = var1;
case 25:
                var4 = _closure1_slot14;
                var3 = undefined;
                var3 = var4.bind(var3)();
                var1 = var1 != var2;
                return var1;
            }
        };
        var _closure1_slot19 = var5;
        var2 = function encryptAndStoreTokens() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var4 = _closure1_slot5;
                var3 = null;
                if(!(var3 != var4)) { _fun0009_ip = 34; continue _fun0009 }
case 10:
                var2 = var4.isEncryptionAvailable;
                var2 = var2.bind(var4)();
                if(var2) { _fun0009_ip = 19; continue _fun0009 }
case 34:
                var2 = _closure1_slot6;
                _closure1_slot7 = var2;
                var2 = _closure1_slot9;
                _closure1_slot10 = var2;
                _fun0009_ip = 35; continue _fun0009;
case 19:
                var2 = _closure1_slot6;
                if(!(var3 != var2)) { _fun0009_ip = 30; continue _fun0009 }
case 36:
                var4 = _closure1_slot16;
                var3 = _closure1_slot6;
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                _closure1_slot7 = var2;
case 30:
                var4 = _closure1_slot13;
                var2 = global;
                var5 = var2.Object;
                var3 = var5.entries;
                var2 = _closure1_slot9;
                var5 = var3.bind(var5)(var2);
                var3 = var5.map;
                var2 = function(arg1) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        var6 = arg1;
                        var1 = var6[Symbol.iterator];
                        var6 = var1().next;
                        var3 = var6().value;
                        var2 = var1;
                        var4 = undefined;
                        var5 = var2 === var4;
                        var2 = undefined;
                        if(var5) { _fun0010_ip = 3; continue _fun0010 }
case 37:
                        var2 = var3;
case 3:
                        var3 = undefined;
                        if(var5) { _fun0010_ip = 38; continue _fun0010 }
case 39:
                        var7 = var6().value;
                        var6 = var1;
                        var6 = var6 === var4;
                        var3 = undefined;
                        var5 = var6;
                        if(var6) { _fun0010_ip = 38; continue _fun0010 }
case 40:
                        var3 = var7;
                        var5 = var6;
case 38:
                        if(var5) { _fun0010_ip = 8; continue _fun0010 }
case 4:
                        var1.return();
case 8:
                        var1 = new Array(2);
                        var1[0] = var2;
                        var2 = _closure1_slot16;
                        var2 = var2.bind(var4)(var3);
                        var1[1] = var2;
                        return var1;
                    }
                };
                var3 = var3.bind(var5)(var2);
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                _closure1_slot10 = var2;
                var2 = true;
                _closure1_slot8 = var2;
case 35:
                var2 = _closure1_slot14;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            }
        };
        var _closure1_slot20 = var2;
        var7 = global;
        var12 = var7.Object;
        var11 = var12.defineProperty;
        var10 = {};
        var1 = true;
        var10['value'] = var1;
        var1 = '__esModule';
        var1 = var11.bind(var12)(var3, var1, var10);
        var1 = 0;
        var10 = var9[var1];
        var1 = undefined;
        var10 = var8.bind(var1)(var10);
        var11 = var10.TOKENS_KEY;
        var _closure1_slot2 = var11;
        var10 = var10.TOKEN_KEY;
        var _closure1_slot3 = var10;
        var10 = 'dQw4w9WgXcQ:';
        var _closure1_slot4 = var10;
        var10 = null;
        var _closure1_slot5 = var10;
        var7 = var7.window;
        var7 = var7.DiscordNative;
        if(!(var10 != var7)) { _fun0001_ip = 41; continue _fun0001 }
case 42:
        var7 = var7.safeStorage;
        _closure1_slot5 = var7;
case 41:
        var7 = false;
        var _closure1_slot8 = var7;
        var10 = {};
        var _closure1_slot9 = var10;
        var10 = {};
        var _closure1_slot10 = var10;
        var _closure1_slot11 = var7;
        var _closure1_slot12 = var7;
        var7 = 2;
        var7 = var9[var7];
        var9 = var8.bind(var1)(var7);
        var8 = var9.fileFinishedImporting;
        var7 = '../discord_common/js/shared/lib/TokenManager.tsx';
        var7 = var8.bind(var9)(var7);
        var7 = function init() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var3 = _closure1_slot12;
                if(var3) { _fun0011_ip = 43; continue _fun0011 }
case 44:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 1;
                var7 = var6[var3];
                var4 = undefined;
                var7 = var5.bind(var4)(var7);
                var9 = var7.Storage;
                var8 = var9.get;
                var7 = _closure1_slot3;
                var7 = var8.bind(var9)(var7);
                _closure1_slot7 = var7;
                var3 = var6[var3];
                var3 = var5.bind(var4)(var3);
                var6 = var3.Storage;
                var5 = var6.get;
                var3 = _closure1_slot2;
                var3 = var5.bind(var6)(var3);
                if(var3) { _fun0011_ip = 45; continue _fun0011 }
case 46:
                var3 = {};
case 45:
                _closure1_slot10 = var3;
                var5 = _closure1_slot15;
                var3 = _closure1_slot7;
                var5 = var5.bind(var4)(var3);
                var3 = var5.decryptedToken;
                var5 = var5.wasEncrypted;
                _closure1_slot8 = var5;
                _closure1_slot6 = var3;
                var3 = _closure1_slot13;
                var5 = global;
                var7 = var5.Object;
                var6 = var7.entries;
                var5 = _closure1_slot10;
                var7 = var6.bind(var7)(var5);
                var6 = var7.map;
                var5 = function(arg1) {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                        var6 = arg1;
                        var1 = var6[Symbol.iterator];
                        var6 = var1().next;
                        var2 = var6().value;
                        var3 = var1;
                        var5 = undefined;
                        var4 = var3 === var5;
                        var3 = undefined;
                        if(var4) { _fun0012_ip = 3; continue _fun0012 }
case 37:
                        var3 = var2;
case 3:
                        var2 = undefined;
                        if(var4) { _fun0012_ip = 38; continue _fun0012 }
case 39:
                        var7 = var6().value;
                        var6 = var1;
                        var6 = var6 === var5;
                        var2 = undefined;
                        var4 = var6;
                        if(var6) { _fun0012_ip = 38; continue _fun0012 }
case 40:
                        var2 = var7;
                        var4 = var6;
case 38:
                        if(var4) { _fun0012_ip = 8; continue _fun0012 }
case 4:
                        var1.return();
case 8:
                        var1 = _closure1_slot15;
                        var1 = var1.bind(var5)(var2);
                        var2 = var1.decryptedToken;
                        var1 = var1.wasEncrypted;
                        if(var1) { _fun0012_ip = 47; continue _fun0012 }
case 48:
                        var1 = _closure1_slot8;
case 47:
                        _closure1_slot8 = var1;
                        var1 = new Array(2);
                        var1[0] = var3;
                        var1[1] = var2;
                        return var1;
                    }
                };
                var6 = var6.bind(var7)(var5);
                var5 = var6.filter;
                var1 = function(arg1) {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                        var4 = arg1;
                        var1 = var4[Symbol.iterator];
                        var4 = var1().next;
                        var2 = var4().value;
                        var2 = var1;
                        var6 = undefined;
                        var3 = var2 === var6;
                        var2 = undefined;
                        if(var3) { _fun0013_ip = 49; continue _fun0013 }
case 37:
                        var5 = var4().value;
                        var4 = var1;
                        var4 = var4 === var6;
                        var2 = undefined;
                        var3 = var4;
                        if(var4) { _fun0013_ip = 49; continue _fun0013 }
case 50:
                        var2 = var5;
                        var3 = var4;
case 49:
                        if(var3) { _fun0013_ip = 51; continue _fun0013 }
case 36:
                        var1.return();
case 51:
                        var1 = null;
                        var1 = var1 != var2;
                        return var1;
                    }
                };
                var1 = var5.bind(var6)(var1);
                var1 = var3.bind(var4)(var1);
                _closure1_slot9 = var1;
                var1 = true;
                _closure1_slot12 = var1;
case 43:
                var1 = undefined;
                return var1;
            }
        };
        var3['init'] = var7;
        var7 = function getAnalyticsToken() {
            var3 = _closure1_slot17;
            var2 = undefined;
            var1 = '__analytics__';
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var3['getAnalyticsToken'] = var7;
        var3['getToken'] = var6;
        var6 = function setAnalyticsToken(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var4 = arg1;
                var1 = null;
                if(!(var1 == var4)) { _fun0014_ip = 18; continue _fun0014 }
case 15:
                var3 = _closure1_slot19;
                var2 = undefined;
                var1 = '__analytics__';
                var1 = var3.bind(var2)(var1);
                _fun0014_ip = 36; continue _fun0014;
case 18:
                var3 = _closure1_slot18;
                var2 = undefined;
                var1 = '__analytics__';
                var1 = var3.bind(var2)(var4, var1);
case 36:
                var1 = undefined;
                return var1;
            }
        };
        var3['setAnalyticsToken'] = var6;
        var6 = function setToken(arg1, arg2) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var4 = arg1;
                var3 = arg2;
                var1 = null;
                if(!(var1 == var4)) { _fun0015_ip = 52; continue _fun0015 }
case 53:
                var2 = _closure1_slot19;
                var1 = undefined;
                var1 = var2.bind(var1)(var3);
                _fun0015_ip = 54; continue _fun0015;
case 52:
                _closure1_slot6 = var4;
                var2 = _closure1_slot18;
                var1 = undefined;
                var1 = var2.bind(var1)(var4, var3);
case 54:
                var1 = undefined;
                return var1;
            }
        };
        var3['setToken'] = var6;
        var6 = function hideToken() {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var2 = _closure1_slot11;
                if(var2) { _fun0016_ip = 34; continue _fun0016 }
case 55:
                var2 = true;
                _closure1_slot11 = var2;
                var2 = _closure1_slot14;
                var1 = undefined;
                var1 = var2.bind(var1)();
case 34:
                var1 = undefined;
                return var1;
            }
        };
        var3['hideToken'] = var6;
        var6 = function showToken() {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                var2 = _closure1_slot11;
                if(!var2) { _fun0017_ip = 34; continue _fun0017 }
case 55:
                var2 = false;
                _closure1_slot11 = var2;
                var2 = _closure1_slot14;
                var1 = undefined;
                var1 = var2.bind(var1)();
case 34:
                var1 = undefined;
                return var1;
            }
        };
        var3['showToken'] = var6;
        var3['removeToken'] = var5;
        var4 = function removeAnalyticsToken() {
            var3 = _closure1_slot19;
            var2 = undefined;
            var1 = '__analytics__';
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var3['removeAnalyticsToken'] = var4;
        var3['encryptAndStoreTokens'] = var2;
        return var1;
    }
})();