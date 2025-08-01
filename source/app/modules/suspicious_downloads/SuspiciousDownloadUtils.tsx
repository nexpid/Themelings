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
 0:
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
            if(!(var1 == var14)) { _fun0001_ip = 67; continue _fun0001 }
 65:
            var14 = {};
 67:
            var13 = var14.pathname;
            var15 = var14.hostname;
            if(!(var1 != var15)) { _fun0001_ip = 397; continue _fun0001 }
 86:
            var14 = _closure1_slot3;
            var17 = var14[var15];
            if(!(var1 != var17)) { _fun0001_ip = 123; continue _fun0001 }
 98:
            var14 = var13;
            if(!(var1 != var14)) { _fun0001_ip = 123; continue _fun0001 }
 105:
            var15 = var17.test;
            var14 = var13;
            var14 = var15.bind(var17)(var14);
            if(var14) { _fun0001_ip = 123; continue _fun0001 }
 121:
            return var1;
 123:
            var14 = var13;
            if(!(var1 != var14)) { _fun0001_ip = 395; continue _fun0001 }
 133:
            var9 = var13;
 136: // try_start_0
            var14 = global;
            var14 = var14.decodeURIComponent;
            var9 = var14.bind(var2)(var13);
 149: // try_end0
            _fun0001_ip = 153; continue _fun0001;
 151: // catch_target0
            CatchBlockStart(arg_register=12);
 153:
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
            if(!(var12 >= var15)) { _fun0001_ip = 279; continue _fun0001 }
 209:
            var17 = var10;
            var12 = var11;
            var12 = var17[var12];
            var16 = var12;
            if(!(var13 !== var12)) { _fun0001_ip = 246; continue _fun0001 }
 226:
            var12 = var16;
            if(!(var9 !== var12)) { _fun0001_ip = 246; continue _fun0001 }
 233:
            var12 = var16;
            if(!(var14 === var12)) { _fun0001_ip = 261; continue _fun0001 }
 240:
            var12 = var8;
            var8 = var12 + 1;
 246:
            var12 = var11;
            var12 = var12 - 1;
            var11 = var12;
            if(var12 >= var15) { _fun0001_ip = 209; continue _fun0001 }
 259:
            _fun0001_ip = 279; continue _fun0001;
 261:
            var13 = var8;
            var12 = var11;
            if(!(!(var13 > var12))) { _fun0001_ip = 279; continue _fun0001 }
 271:
            var8 = var11 - var8;
            var7 = var10[var8];
 279:
            var8 = var7;
            if(!(var1 != var8)) { _fun0001_ip = 393; continue _fun0001 }
 286:
            var8 = var7;
            var7 = var8.split;
            var7 = var7.bind(var8)(var9);
            var6 = var7;
            var8 = var7.length;
            var7 = 2;
            if(!(!(var8 < var7))) { _fun0001_ip = 391; continue _fun0001 }
 314:
            var7 = var6;
            var6 = var7.pop;
            var6 = var6.bind(var7)();
            var5 = var6;
            var6 = var1 == var6;
            var2 = undefined;
            if(var6) { _fun0001_ip = 352; continue _fun0001 }
 339:
            var6 = var5;
            var5 = var6.toLowerCase;
            var2 = var5.bind(var6)();
 352:
            var3 = var2;
            var5 = var1 != var2;
            var2 = null;
            if(!var5) { _fun0001_ip = 389; continue _fun0001 }
 364:
            var6 = _closure1_slot2;
            var5 = var6.has;
            var4 = var3;
            var4 = var5.bind(var6)(var4);
            var2 = null;
            if(!var4) { _fun0001_ip = 389; continue _fun0001 }
 386:
            var2 = var3;
 389:
            return var2;
 391:
            return var1;
 393:
            return var1;
 395:
            return var1;
 397:
            return var1;
        }
    };
    var3['isSuspiciousDownload'] = var2;
    return var1;
})();