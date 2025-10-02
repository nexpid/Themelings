// app/modules/suspicious_downloads/SuspiciousDownloadUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var5;
    var6 = global;
    var9 = var6.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var8 = var6.Set;
    var1 = 0;
    var4 = var5[var1];
    var1 = undefined;
    var12 = var7.bind(var1)(var4);
    var7 = var8.prototype;
    var7 = Object.create(var7, {constructor: {value: var8}});
    var13 = var7;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot2 = var4;
    var4 = {};
    var9 = var6.RegExp;
    var7 = var9.prototype;
    var8 = Object.create(var7, {constructor: {value: var9}});
    var12 = '/releases\\S*/download|archive/refs/\\S*|/i/raw/i/\\S*|/user-attachments\\S*';
    var13 = var8;
    var7 = new var13[var9](var12, var11);
    var7 = var7 instanceof Object ? var7 : var8;
    var4['github.com'] = var7;
    var7 = var6.RegExp;
    var8 = var7.prototype;
    var9 = Object.create(var8, {constructor: {value: var7}});
    var8 = '/downloads\\S*/[^/]*';
    var13 = var9;
    var12 = var8;
    var7 = new var13[var7](var12, var11);
    var7 = var7 instanceof Object ? var7 : var9;
    var4['bitbucket.org'] = var7;
    var6 = var6.RegExp;
    var7 = var6.prototype;
    var7 = Object.create(var7, {constructor: {value: var6}});
    var13 = var7;
    var6 = new var13[var6](var12, var11);
    var6 = var6 instanceof Object ? var6 : var7;
    var4['gitlab.com'] = var6;
    var _closure1_slot3 = var4;
    var4 = 2;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/suspicious_downloads/SuspiciousDownloadUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function isSuspiciousDownload(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = undefined;
            var5 = undefined;
            var13 = undefined;
            var9 = undefined;
            var10 = undefined;
            var7 = undefined;
            var8 = undefined;
            var11 = undefined;
            var16 = undefined;
            var6 = undefined;
            var3 = undefined;
            var14 = _closure1_slot0;
            var1 = _closure1_slot1;
            var12 = 1;
            var1 = var1[var12];
            var15 = var14.bind(var2)(var1);
            var14 = var15.toURLSafe;
            var1 = arg1;
            var14 = var14.bind(var15)(var1);
            var1 = null;
            if(!(var1 == var14)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var14 = {};
case 2:
            var13 = var14.pathname;
            var15 = var14.hostname;
            if(!(var1 != var15)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var14 = _closure1_slot3;
            var17 = var14[var15];
            if(!(var1 != var17)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var14 = var13;
            if(!(var1 != var14)) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var15 = var17.test;
            var14 = var13;
            var14 = var15.bind(var17)(var14);
            if(var14) { _fun0001_ip = 6; continue _fun0001 }
case 9:
            return var1;
case 6:
            var14 = var13;
            if(!(var1 != var14)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = var13;
case 12: // try_start_0
            var14 = global;
            var14 = var14.decodeURIComponent;
            var9 = var14.bind(var2)(var13);
case 13: // try_end0
            _fun0001_ip = 14; continue _fun0001;
case 15: // catch_target0
            CatchBlockStart(arg_register=12);
case 14:
            var14 = var9;
            var13 = var14.split;
            var9 = '/';
            var9 = var13.bind(var14)(var9);
            var10 = var9;
            var7 = null;
            var15 = 0;
            var8 = 0;
            var9 = var9.length;
            var12 = var9 - var12;
            var11 = var12;
            var14 = '..';
            var9 = '.';
            var13 = '';
            if(!(var12 >= var15)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var17 = var10;
            var12 = var11;
            var12 = var17[var12];
            var16 = var12;
            if(!(var13 !== var12)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var12 = var16;
            if(!(var9 !== var12)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var12 = var16;
            if(!(var14 === var12)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var12 = var8;
            var8 = var12 + 1;
case 18:
            var12 = var11;
            var12 = var12 - 1;
            var11 = var12;
            if(var12 >= var15) { _fun0001_ip = 17; continue _fun0001 }
case 23:
            _fun0001_ip = 16; continue _fun0001;
case 21:
            var13 = var8;
            var12 = var11;
            if(!(!(var13 > var12))) { _fun0001_ip = 16; continue _fun0001 }
case 24:
            var8 = var11 - var8;
            var7 = var10[var8];
case 16:
            var8 = var7;
            if(!(var1 != var8)) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var8 = var7;
            var7 = var8.split;
            var7 = var7.bind(var8)(var9);
            var6 = var7;
            var8 = var7.length;
            var7 = 2;
            if(!(!(var8 < var7))) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var7 = var6;
            var6 = var7.pop;
            var6 = var6.bind(var7)();
            var5 = var6;
            var6 = var1 == var6;
            var2 = undefined;
            if(var6) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var6 = var5;
            var5 = var6.toLowerCase;
            var2 = var5.bind(var6)();
case 29:
            var3 = var2;
            var5 = var1 != var2;
            var2 = null;
            if(!var5) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var6 = _closure1_slot2;
            var5 = var6.has;
            var4 = var3;
            var4 = var5.bind(var6)(var4);
            var2 = null;
            if(!var4) { _fun0001_ip = 31; continue _fun0001 }
case 33:
            var2 = var3;
case 31:
            return var2;
case 27:
            return var1;
case 25:
            return var1;
case 10:
            return var1;
case 4:
            return var1;
        }
    };
    var3['isSuspiciousDownload'] = var2;
    return var1;
})();