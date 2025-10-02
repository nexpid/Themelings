// app/modules/guild_sidebar/useShowConnectedUserLimit.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var7;
    var1 = function formatNumber(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var3 = arguments[1];
            var1 = undefined;
            if(!(var3 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = 1000;
case 2:
            if(!(!(var4 >= var3))) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var4.toFixed;
            var1 = 0;
            var6 = var2.bind(var4)(var1);
            var5 = var6.padStart;
            var2 = 2;
            var1 = '0';
            var1 = var5.bind(var6)(var2, var1);
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var2 = global;
            var7 = var2.Math;
            var6 = var7.floor;
            var5 = var4 / var3;
            var6 = var6.bind(var7)(var5);
            var7 = var4 % var3;
            var5 = '';
            var3 = 0;
            var4 = var5;
            if(!(var7 != var3)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var4 = '+';
case 7:
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = 'k';
            var1 = var3.bind(var5)(var6, var2, var4);
case 6:
            return var1;
        }
    };
    var _closure1_slot3 = var1;
    var4 = function useConnectedUserLimit(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var2 = var1.channel;
            var5 = var1.video;
            var4 = var1.considerMaxStageVoiceUserLimit;
            var6 = undefined;
            if(!(var4 === var6)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var4 = true;
case 9:
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var1 = 1;
            var1 = var8[var1];
            var1 = var7.bind(var6)(var1);
            var1 = var1.bind(var6)(var2);
            var9 = var1.limit;
            var6 = var2.userLimit;
            var1 = 0;
            var6 = var6 > var1;
            var8 = -1;
            if(!var6) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var8 = var2.userLimit;
case 11:
            if(!var5) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var5 = var9 > var1;
case 13:
            var2 = var8;
            if(!var5) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var5 = var9;
            if(!(var8 > var1)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var6 = global;
            var7 = var6.Math;
            var6 = var7.min;
            var5 = var6.bind(var7)(var8, var9);
case 17:
            var2 = var5;
case 15:
            if(!var4) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var3 = _closure1_slot2;
            var1 = 0;
            if(!(var2 !== var3)) { _fun0002_ip = 21; continue _fun0002 }
case 19:
            var1 = var2;
case 21:
            return var1;
        }
    };
    var _closure1_slot4 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var6.bind(var1)(var5);
    var5 = var5.MAX_STAGE_VOICE_USER_LIMIT;
    var _closure1_slot2 = var5;
    var5 = 2;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_sidebar/useShowConnectedUserLimit.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function useShowConnectedUserLimit(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var6 = var2.channel;
            var3 = var2.locked;
            var1 = var2.video;
            var2 = var2.selected;
            var5 = _closure1_slot4;
            var4 = {};
            var4['channel'] = var6;
            var4['video'] = var1;
            var1 = undefined;
            var4 = var5.bind(var1)(var4);
            var1 = 0;
            var1 = var4 > var1;
            if(!var1) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var1 = !var3;
case 22:
            if(!var1) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var1 = !var2;
case 24:
            return var1;
        }
    };
    var3['default'] = var5;
    var3['useConnectedUserLimit'] = var4;
    var2 = function useConnectedUserLimitFormatted(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var5 = var1.channel;
            var4 = var1.video;
            var6 = var1.userCount;
            var2 = _closure1_slot4;
            var1 = {};
            var1['channel'] = var5;
            var1['video'] = var4;
            var5 = undefined;
            var4 = var2.bind(var5)(var1);
            var1 = 0;
            var7 = var4 <= var1;
            var2 = null;
            var1 = null;
            if(var7) { _fun0004_ip = 26; continue _fun0004 }
case 4:
            if(!(var2 == var6)) { _fun0004_ip = 27; continue _fun0004 }
case 28:
            var2 = _closure1_slot3;
            var2 = var2.bind(var5)(var4);
            _fun0004_ip = 29; continue _fun0004;
case 27:
            var3 = _closure1_slot3;
            var7 = var3.bind(var5)(var6);
            var6 = var3.bind(var5)(var4);
            var3 = global;
            var3 = var3.HermesInternal;
            var5 = var3.concat;
            var4 = '';
            var3 = '/';
            var2 = var5.bind(var4)(var7, var3, var6);
case 29:
            var1 = var2;
case 26:
            return var1;
        }
    };
    var3['useConnectedUserLimitFormatted'] = var2;
    return var1;
})();