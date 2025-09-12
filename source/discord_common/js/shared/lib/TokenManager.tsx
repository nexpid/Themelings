// discord_common/js/shared/lib/TokenManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
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
 0:
                    var1 = arg1;
                    var6 = arg2;
                    var4 = var6[Symbol.iterator];
                    var6 = var4().next;
                    var2 = var6().value;
                    var3 = var4;
                    var8 = undefined;
                    var5 = var3 === var8;
                    var3 = undefined;
                    if(var5) { _fun0002_ip = 30; continue _fun0002 }
 27:
                    var3 = var2;
 30:
                    var2 = undefined;
                    if(var5) { _fun0002_ip = 60; continue _fun0002 }
 35:
                    var7 = var6().value;
                    var6 = var4;
                    var6 = var6 === var8;
                    var2 = undefined;
                    var5 = var6;
                    if(var6) { _fun0002_ip = 60; continue _fun0002 }
 54:
                    var2 = var7;
                    var5 = var6;
 60:
                    if(var5) { _fun0002_ip = 66; continue _fun0002 }
 63:
                    var4.return();
 66:
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
 0:
                var2 = _closure1_slot11;
                if(var2) { _fun0003_ip = 164; continue _fun0003 }
 13:
                var3 = _closure1_slot7;
                var2 = null;
                if(!(var2 == var3)) { _fun0003_ip = 68; continue _fun0003 }
 23:
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
                _fun0003_ip = 115; continue _fun0003;
 68:
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
 115:
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
 164:
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
 0:
                var7 = arg1;
                var1 = null;
                if(!(var1 != var7)) { _fun0004_ip = 126; continue _fun0004 }
 9:
                var3 = var7.length;
                var2 = 0;
                if(!(var2 !== var3)) { _fun0004_ip = 126; continue _fun0004 }
 20:
                var2 = _closure1_slot5;
                if(!(var1 != var2)) { _fun0004_ip = 62; continue _fun0004 }
 31:
                var1 = var2.isEncryptionAvailable;
                var1 = var1.bind(var2)();
                if(!var1) { _fun0004_ip = 62; continue _fun0004 }
 44:
                var2 = var7.startsWith;
                var1 = _closure1_slot4;
                var1 = var2.bind(var7)(var1);
                if(var1) { _fun0004_ip = 78; continue _fun0004 }
 62:
                var1 = {};
                var1['decryptedToken'] = var7;
                var2 = false;
                var1['wasEncrypted'] = var2;
                _fun0004_ip = 124; continue _fun0004;
 78:
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
 124:
                _fun0004_ip = 140; continue _fun0004;
 126:
                var1 = {'decryptedToken': null, 'wasEncrypted': false};
 140:
                return var1;
            }
        };
        var _closure1_slot15 = var1;
        var1 = function maybeEncryptToken(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var4 = arg1;
                var5 = _closure1_slot5;
                var3 = null;
                var1 = var4;
                if(!(var3 != var5)) { _fun0005_ip = 98; continue _fun0005 }
 19:
                var3 = var5.isEncryptionAvailable;
                var3 = var3.bind(var5)();
                var1 = var4;
                if(!var3) { _fun0005_ip = 98; continue _fun0005 }
 35:
                var5 = var4.startsWith;
                var3 = _closure1_slot4;
                var3 = var5.bind(var4)(var3);
                var1 = var4;
                if(var3) { _fun0005_ip = 98; continue _fun0005 }
 56:
                var5 = _closure1_slot4;
                var3 = _closure1_slot5;
                var2 = var3.encryptString;
                var4 = var2.bind(var3)(var4);
                var2 = global;
                var2 = var2.HermesInternal;
                var3 = var2.concat;
                var2 = '';
                var1 = var3.bind(var2)(var5, var4);
 98:
                return var1;
            }
        };
        var _closure1_slot16 = var1;
        var6 = function getToken(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var3 = arg1;
                var1 = null;
                if(!(var1 == var3)) { _fun0006_ip = 18; continue _fun0006 }
 9:
                var1 = _closure1_slot6;
                _fun0006_ip = 29; continue _fun0006;
 18:
                var2 = _closure1_slot9;
                var1 = var2[var3];
 29:
                return var1;
            }
        };
        var _closure1_slot17 = var6;
        var1 = function setSecondaryToken(arg1, arg2) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var3 = arg2;
                var1 = null;
                if(!(var1 != var3)) { _fun0007_ip = 23; continue _fun0007 }
 9:
                var2 = _closure1_slot9;
                var1 = arg1;
                var2[var3] = var1;
 23:
                var2 = _closure1_slot8;
                if(var2) { _fun0007_ip = 61; continue _fun0007 }
 33:
                var2 = _closure1_slot6;
                var _closure1_slot7 = var2;
                var2 = _closure1_slot9;
                _closure1_slot10 = var2;
                var3 = _closure1_slot14;
                var2 = undefined;
                var2 = var3.bind(var2)();
                _fun0007_ip = 71; continue _fun0007;
 61:
                var2 = _closure1_slot20;
                var1 = undefined;
                var1 = var2.bind(var1)();
 71:
                var1 = undefined;
                return var1;
            }
        };
        var _closure1_slot18 = var1;
        var5 = function removeToken(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var6 = arg1;
                var2 = _closure1_slot6;
                var1 = null;
                if(!(var1 != var6)) { _fun0008_ip = 40; continue _fun0008 }
 16:
                var4 = _closure1_slot9;
                var2 = var4[var6];
                var5 = _closure1_slot9;
                var5 = delete var5[var6];
                var5 = _closure1_slot10;
                var5 = delete var5[var6];
 40:
                var4 = _closure1_slot6;
                if(!(var2 === var4)) { _fun0008_ip = 56; continue _fun0008 }
 48:
                var _closure1_slot6 = var1;
                _closure1_slot7 = var1;
 56:
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
 0:
                var4 = _closure1_slot5;
                var3 = null;
                if(!(var3 != var4)) { _fun0009_ip = 26; continue _fun0009 }
 13:
                var2 = var4.isEncryptionAvailable;
                var2 = var2.bind(var4)();
                if(var2) { _fun0009_ip = 44; continue _fun0009 }
 26:
                var2 = _closure1_slot6;
                _closure1_slot7 = var2;
                var2 = _closure1_slot9;
                _closure1_slot10 = var2;
                _fun0009_ip = 132; continue _fun0009;
 44:
                var2 = _closure1_slot6;
                if(!(var3 != var2)) { _fun0009_ip = 71; continue _fun0009 }
 52:
                var4 = _closure1_slot16;
                var3 = _closure1_slot6;
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                _closure1_slot7 = var2;
 71:
                var4 = _closure1_slot13;
                var2 = global;
                var5 = var2.Object;
                var3 = var5.entries;
                var2 = _closure1_slot9;
                var5 = var3.bind(var5)(var2);
                var3 = var5.map;
                var2 = function(arg1) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                        var6 = arg1;
                        var1 = var6[Symbol.iterator];
                        var6 = var1().next;
                        var3 = var6().value;
                        var2 = var1;
                        var4 = undefined;
                        var5 = var2 === var4;
                        var2 = undefined;
                        if(var5) { _fun0010_ip = 27; continue _fun0010 }
 24:
                        var2 = var3;
 27:
                        var3 = undefined;
                        if(var5) { _fun0010_ip = 57; continue _fun0010 }
 32:
                        var7 = var6().value;
                        var6 = var1;
                        var6 = var6 === var4;
                        var3 = undefined;
                        var5 = var6;
                        if(var6) { _fun0010_ip = 57; continue _fun0010 }
 51:
                        var3 = var7;
                        var5 = var6;
 57:
                        if(var5) { _fun0010_ip = 63; continue _fun0010 }
 60:
                        var1.return();
 63:
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
 132:
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
        if(!(var10 != var7)) { _fun0001_ip = 198; continue _fun0001 }
 188:
        var7 = var7.safeStorage;
        _closure1_slot5 = var7;
 198:
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
 0:
                var3 = _closure1_slot12;
                if(var3) { _fun0011_ip = 204; continue _fun0011 }
 15:
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
                if(var3) { _fun0011_ip = 95; continue _fun0011 }
 93:
                var3 = {};
 95:
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
 0:
                        var6 = arg1;
                        var1 = var6[Symbol.iterator];
                        var6 = var1().next;
                        var2 = var6().value;
                        var3 = var1;
                        var5 = undefined;
                        var4 = var3 === var5;
                        var3 = undefined;
                        if(var4) { _fun0012_ip = 27; continue _fun0012 }
 24:
                        var3 = var2;
 27:
                        var2 = undefined;
                        if(var4) { _fun0012_ip = 57; continue _fun0012 }
 32:
                        var7 = var6().value;
                        var6 = var1;
                        var6 = var6 === var5;
                        var2 = undefined;
                        var4 = var6;
                        if(var6) { _fun0012_ip = 57; continue _fun0012 }
 51:
                        var2 = var7;
                        var4 = var6;
 57:
                        if(var4) { _fun0012_ip = 63; continue _fun0012 }
 60:
                        var1.return();
 63:
                        var1 = _closure1_slot15;
                        var1 = var1.bind(var5)(var2);
                        var2 = var1.decryptedToken;
                        var1 = var1.wasEncrypted;
                        if(var1) { _fun0012_ip = 94; continue _fun0012 }
 90:
                        var1 = _closure1_slot8;
 94:
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
 0:
                        var4 = arg1;
                        var1 = var4[Symbol.iterator];
                        var4 = var1().next;
                        var2 = var4().value;
                        var2 = var1;
                        var6 = undefined;
                        var3 = var2 === var6;
                        var2 = undefined;
                        if(var3) { _fun0013_ip = 49; continue _fun0013 }
 24:
                        var5 = var4().value;
                        var4 = var1;
                        var4 = var4 === var6;
                        var2 = undefined;
                        var3 = var4;
                        if(var4) { _fun0013_ip = 49; continue _fun0013 }
 43:
                        var2 = var5;
                        var3 = var4;
 49:
                        if(var3) { _fun0013_ip = 55; continue _fun0013 }
 52:
                        var1.return();
 55:
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
 204:
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
 0:
                var4 = arg1;
                var1 = null;
                if(!(var1 == var4)) { _fun0014_ip = 31; continue _fun0014 }
 9:
                var3 = _closure1_slot19;
                var2 = undefined;
                var1 = '__analytics__';
                var1 = var3.bind(var2)(var1);
                _fun0014_ip = 52; continue _fun0014;
 31:
                var3 = _closure1_slot18;
                var2 = undefined;
                var1 = '__analytics__';
                var1 = var3.bind(var2)(var4, var1);
 52:
                var1 = undefined;
                return var1;
            }
        };
        var3['setAnalyticsToken'] = var6;
        var6 = function setToken(arg1, arg2) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                var4 = arg1;
                var3 = arg2;
                var1 = null;
                if(!(var1 == var4)) { _fun0015_ip = 28; continue _fun0015 }
 12:
                var2 = _closure1_slot19;
                var1 = undefined;
                var1 = var2.bind(var1)(var3);
                _fun0015_ip = 47; continue _fun0015;
 28:
                _closure1_slot6 = var4;
                var2 = _closure1_slot18;
                var1 = undefined;
                var1 = var2.bind(var1)(var4, var3);
 47:
                var1 = undefined;
                return var1;
            }
        };
        var3['setToken'] = var6;
        var6 = function hideToken() {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                var2 = _closure1_slot11;
                if(var2) { _fun0016_ip = 26; continue _fun0016 }
 10:
                var2 = true;
                _closure1_slot11 = var2;
                var2 = _closure1_slot14;
                var1 = undefined;
                var1 = var2.bind(var1)();
 26:
                var1 = undefined;
                return var1;
            }
        };
        var3['hideToken'] = var6;
        var6 = function showToken() {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                var2 = _closure1_slot11;
                if(!var2) { _fun0017_ip = 26; continue _fun0017 }
 10:
                var2 = false;
                _closure1_slot11 = var2;
                var2 = _closure1_slot14;
                var1 = undefined;
                var1 = var2.bind(var1)();
 26:
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