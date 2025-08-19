// app/utils/ChatRestrictions.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var4 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var2 = var2.TOKEN_REGEX;
    var _closure1_slot3 = var2;
    var4 = {};
    var2 = function check(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg2;
            var1 = arg3;
            if(var1) { _fun0001_ip = 13; continue _fun0001 }
 9:
            var1 = false;
            return var1;
 13:
            var1 = var3.getGuildId;
            var2 = var1.bind(var3)();
            var1 = null;
            if(!(var1 != var2)) { _fun0001_ip = 461; continue _fun0001 }
 32:
            var7 = _closure1_slot1;
            var5 = _closure1_slot2;
            var4 = 1;
            var5 = var5[var4];
            var6 = undefined;
            var8 = var7.bind(var6)(var5);
            var7 = var8.extractEveryoneRole;
            var5 = arg1;
            var13 = var7.bind(var8)(var5, var3);
            if(!(var1 != var13)) { _fun0001_ip = 457; continue _fun0001 }
 79:
            var5 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var4];
            var5 = var5.bind(var6)(var1);
            var1 = var5.shouldShowEveryoneGuard;
            var1 = var1.bind(var5)(var13, var3);
            if(var1) { _fun0001_ip = 115; continue _fun0001 }
 111:
            var1 = false;
            return var1;
 115:
            var5 = _closure1_slot1;
            var1 = _closure1_slot2;
            var4 = var1[var4];
            var5 = var5.bind(var6)(var4);
            var4 = var5.everyoneMemberCount;
            var10 = var4.bind(var5)(var13, var3);
            var12 = global;
            var8 = var12.Math;
            var7 = var8.pow;
            var9 = var12.Math;
            var5 = var9.floor;
            var11 = var12.Math;
            var4 = var11.log10;
            var4 = var4.bind(var11)(var10);
            var5 = var5.bind(var9)(var4);
            var4 = 10;
            var11 = var7.bind(var8)(var4, var5);
            var4 = _closure1_slot0;
            var7 = 2;
            var1 = var1[var7];
            var1 = var4.bind(var6)(var1);
            var1 = var1.t;
            var9 = var1.47E5R0;
            var1 = var3.isForumPost;
            var1 = var1.bind(var3)();
            if(var1) { _fun0001_ip = 288; continue _fun0001 }
 243:
            var1 = var3.isThread;
            var1 = var1.bind(var3)();
            if(!var1) { _fun0001_ip = 318; continue _fun0001 }
 256:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var7];
            var1 = var3.bind(var6)(var1);
            var1 = var1.t;
            var9 = var1.2YaiQ0;
            _fun0001_ip = 318; continue _fun0001;
 288:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var7];
            var1 = var3.bind(var6)(var1);
            var1 = var1.t;
            var9 = var1.sYW2c3;
 318:
            var1 = {};
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var3 = var2[var7];
            var3 = var5.bind(var6)(var3);
            var8 = var3.intl;
            var4 = var8.formatToPlainString;
            var3 = {};
            var3['role'] = var13;
            var13 = var12.Math;
            var12 = var13.trunc;
            var10 = var10 / var11;
            var10 = var12.bind(var13)(var10);
            var11 = var10 * var11;
            var10 = var11.toLocaleString;
            var10 = var10.bind(var11)();
            var3['count'] = var10;
            var3 = var4.bind(var8)(var9, var3);
            var1['body'] = var3;
            var3 = var2[var7];
            var3 = var5.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var2[var7];
            var2 = var5.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.mVyrtr;
            var2 = var3.bind(var4)(var2);
            var1['footer'] = var2;
            return var1;
 457:
            var1 = false;
            return var1;
 461:
            var1 = false;
            return var1;
        }
    };
    var4['check'] = var2;
    var2 = '@Everyone Warning';
    var4['analyticsType'] = var2;
    var4['animation'] = var1;
    var2 = new Array(2);
    var2[0] = var4;
    var4 = {};
    var7 = function check(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = _closure1_slot3;
            var2 = var4.test;
            var1 = arg1;
            var1 = var2.bind(var4)(var1);
            var2 = !var1;
            var1 = !var2;
            if(var2) { _fun0002_ip = 97; continue _fun0002 }
 29:
            var2 = {};
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 2;
            var4 = var8[var3];
            var6 = undefined;
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.sTwS1d;
            var3 = var4.bind(var5)(var3);
            var2['body'] = var3;
            var1 = var2;
 97:
            return var1;
        }
    };
    var4['check'] = var7;
    var7 = 'API Token Warning';
    var4['analyticsType'] = var7;
    var2[1] = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/ChatRestrictions.tsx';
    var4 = var5.bind(var6)(var4);
    var3['RESTRICTIONS'] = var2;
    return var1;
})();