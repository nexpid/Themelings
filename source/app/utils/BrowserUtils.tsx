// app/utils/BrowserUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var15 = metroImportDefault;
        var3 = exports;
        var11 = dependencyMap;
        var9 = function getChromeVersion() {
            var1 = _closure1_slot0;
            return var1;
        };
        var _closure1_slot5 = var9;
        var8 = function getElectronVersion() {
            var1 = _closure1_slot1;
            return var1;
        };
        var _closure1_slot6 = var8;
        var7 = function getFirefoxVersion() {
            var1 = _closure1_slot2;
            return var1;
        };
        var _closure1_slot7 = var7;
        var6 = function getEdgeVersion() {
            var1 = _closure1_slot3;
            return var1;
        };
        var _closure1_slot8 = var6;
        var5 = function getSafariVersion() {
            var1 = _closure1_slot4;
            return var1;
        };
        var _closure1_slot9 = var5;
        var4 = function isSafari() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = arguments[0];
                var1 = undefined;
                if(!(var2 === var1)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                var1 = global;
                var1 = var1.navigator;
                var2 = var1.userAgent;
case 2:
                var1 = var2.toLowerCase;
                var5 = var1.bind(var2)();
                var2 = var5.indexOf;
                var1 = 'safari';
                var1 = var2.bind(var5)(var1);
                var3 = -1;
                var1 = var3 !== var1;
                if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var4 = var5.indexOf;
                var2 = 'chrome';
                var2 = var4.bind(var5)(var2);
                var2 = var3 !== var2;
                var1 = !var2;
case 4:
                if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var4 = var5.indexOf;
                var2 = 'version/';
                var2 = var4.bind(var5)(var2);
                var1 = var3 !== var2;
case 6:
                return var1;
            }
        };
        var _closure1_slot10 = var4;
        var14 = global;
        var13 = var14.Object;
        var12 = var13.defineProperty;
        var10 = {};
        var1 = true;
        var10['value'] = var1;
        var1 = '__esModule';
        var1 = var12.bind(var13)(var3, var1, var10);
        var12 = 0;
        var10 = var11[var12];
        var1 = undefined;
        var10 = var15.bind(var1)(var10);
        var10 = var10.name;
        var13 = null;
        var17 = var13 != var10;
        var16 = 'unknown';
        if(!var17) { _fun0001_ip = 8; continue _fun0001 }
case 9:
        var16 = var10;
case 8:
        var10 = var16.toLowerCase;
        var17 = var10.bind(var16)();
        var10 = var17.toLowerCase;
        var19 = var10.bind(var17)();
        var10 = -1;
        var18 = 'chrome';
        var16 = var10;
        if(!(var18 === var19)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
        var20 = var14.parseInt;
        var18 = var11[var12];
        var18 = var15.bind(var1)(var18);
        var18 = var18.version;
        var21 = var13 != var18;
        var19 = '';
        if(!var21) { _fun0001_ip = 12; continue _fun0001 }
case 13:
        var19 = var18;
case 12:
        var18 = 10;
        var16 = var20.bind(var1)(var19, var18);
case 10:
        var _closure1_slot0 = var16;
        var16 = var17.toLowerCase;
        var19 = var16.bind(var17)();
        var18 = 'electron';
        var16 = var10;
        if(!(var18 === var19)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
        var20 = var14.parseInt;
        var18 = var11[var12];
        var18 = var15.bind(var1)(var18);
        var18 = var18.version;
        var21 = var13 != var18;
        var19 = '';
        if(!var21) { _fun0001_ip = 16; continue _fun0001 }
case 17:
        var19 = var18;
case 16:
        var18 = 10;
        var16 = var20.bind(var1)(var19, var18);
case 14:
        var _closure1_slot1 = var16;
        var16 = var17.toLowerCase;
        var19 = var16.bind(var17)();
        var18 = 'firefox';
        var16 = var10;
        if(!(var18 === var19)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
        var20 = var14.parseInt;
        var18 = var11[var12];
        var18 = var15.bind(var1)(var18);
        var18 = var18.version;
        var21 = var13 != var18;
        var19 = '';
        if(!var21) { _fun0001_ip = 20; continue _fun0001 }
case 21:
        var19 = var18;
case 20:
        var18 = 10;
        var16 = var20.bind(var1)(var19, var18);
case 18:
        var _closure1_slot2 = var16;
        var16 = var17.toLowerCase;
        var19 = var16.bind(var17)();
        var18 = 'edge';
        var16 = var10;
        if(!(var18 === var19)) { _fun0001_ip = 22; continue _fun0001 }
case 23:
        var20 = var14.parseInt;
        var18 = var11[var12];
        var18 = var15.bind(var1)(var18);
        var18 = var18.version;
        var21 = var13 != var18;
        var19 = '';
        if(!var21) { _fun0001_ip = 24; continue _fun0001 }
case 25:
        var19 = var18;
case 24:
        var18 = 10;
        var16 = var20.bind(var1)(var19, var18);
case 22:
        var _closure1_slot3 = var16;
        var16 = var17.toLowerCase;
        var17 = var16.bind(var17)();
        var16 = 'safari';
        if(!(var16 === var17)) { _fun0001_ip = 26; continue _fun0001 }
case 27:
        var14 = var14.parseInt;
        var12 = var11[var12];
        var12 = var15.bind(var1)(var12);
        var12 = var12.version;
        var15 = var13 != var12;
        var13 = '';
        if(!var15) { _fun0001_ip = 28; continue _fun0001 }
case 29:
        var13 = var12;
case 28:
        var12 = 10;
        var10 = var14.bind(var1)(var13, var12);
case 26:
        var _closure1_slot4 = var10;
        var10 = 1;
        var11 = var11[var10];
        var10 = require;
        var12 = var10.bind(var1)(var11);
        var11 = var12.fileFinishedImporting;
        var10 = 'utils/BrowserUtils.tsx';
        var10 = var11.bind(var12)(var10);
        var3['getChromeVersion'] = var9;
        var3['getElectronVersion'] = var8;
        var3['getFirefoxVersion'] = var7;
        var3['getEdgeVersion'] = var6;
        var3['getSafariVersion'] = var5;
        var5 = function canUseWebp() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = _closure1_slot5;
                var3 = undefined;
                var1 = var1.bind(var3)();
                var5 = -1;
                var1 = var5 !== var1;
                if(var1) { _fun0003_ip = 30; continue _fun0003 }
case 31:
                var4 = _closure1_slot6;
                var4 = var4.bind(var3)();
                var1 = var5 !== var4;
case 30:
                if(var1) { _fun0003_ip = 32; continue _fun0003 }
case 33:
                var4 = _closure1_slot7;
                var4 = var4.bind(var3)();
                var1 = var5 !== var4;
case 32:
                if(var1) { _fun0003_ip = 34; continue _fun0003 }
case 35:
                var4 = _closure1_slot8;
                var4 = var4.bind(var3)();
                var1 = var5 !== var4;
case 34:
                if(var1) { _fun0003_ip = 36; continue _fun0003 }
case 37:
                var2 = _closure1_slot9;
                var3 = var2.bind(var3)();
                var2 = 14;
                var1 = var3 >= var2;
case 36:
                return var1;
            }
        };
        var3['canUseWebp'] = var5;
        var3['isSafari'] = var4;
        var2 = function supportsHEVCAlpha() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var1 = global;
                var1 = var1.window;
                var1 = var1.navigator;
                var5 = var1.mediaCapabilities;
                var3 = null;
                var6 = var3 == var5;
                var4 = undefined;
                var2 = undefined;
                if(var6) { _fun0004_ip = 38; continue _fun0004 }
case 39:
                var2 = var5.decodingInfo;
case 38:
                var2 = var3 != var2;
                var3 = _closure1_slot10;
                var1 = var1.userAgent;
                var1 = var3.bind(var4)(var1);
                if(!var1) { _fun0004_ip = 37; continue _fun0004 }
case 34:
                var1 = var2;
case 37:
                return var1;
            }
        };
        var3['supportsHEVCAlpha'] = var2;
        return var1;
    }
})();