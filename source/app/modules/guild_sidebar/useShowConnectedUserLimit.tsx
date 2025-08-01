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
 0:
            var4 = arg1;
            var3 = arguments[1];
            var1 = undefined;
            if(!(var3 === var1)) { _fun0001_ip = 18; continue _fun0001 }
 12:
            var3 = 1000;
 18:
            if(!(!(var4 >= var3))) { _fun0001_ip = 58; continue _fun0001 }
 22:
            var2 = var4.toFixed;
            var1 = 0;
            var6 = var2.bind(var4)(var1);
            var5 = var6.padStart;
            var2 = 2;
            var1 = '0';
            var1 = var5.bind(var6)(var2, var1);
            _fun0001_ip = 124; continue _fun0001;
 58:
            var2 = global;
            var7 = var2.Math;
            var6 = var7.floor;
            var5 = var4 / var3;
            var6 = var6.bind(var7)(var5);
            var7 = var4 % var3;
            var5 = '';
            var3 = 0;
            var4 = var5;
            if(!(var7 != var3)) { _fun0001_ip = 102; continue _fun0001 }
 98:
            var4 = '+';
 102:
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = 'k';
            var1 = var3.bind(var5)(var6, var2, var4);
 124:
            return var1;
        }
    };
    var _closure1_slot3 = var1;
    var4 = function useConnectedUserLimit(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var2 = var1.channel;
            var5 = var1.video;
            var4 = var1.considerMaxStageVoiceUserLimit;
            var6 = undefined;
            if(!(var4 === var6)) { _fun0002_ip = 30; continue _fun0002 }
 28:
            var4 = true;
 30:
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
            if(!var6) { _fun0002_ip = 90; continue _fun0002 }
 84:
            var8 = var2.userLimit;
 90:
            if(!var5) { _fun0002_ip = 97; continue _fun0002 }
 93:
            var5 = var9 > var1;
 97:
            var2 = var8;
            if(!var5) { _fun0002_ip = 132; continue _fun0002 }
 103:
            var5 = var9;
            if(!(var8 > var1)) { _fun0002_ip = 129; continue _fun0002 }
 110:
            var6 = global;
            var7 = var6.Math;
            var6 = var7.min;
            var5 = var6.bind(var7)(var8, var9);
 129:
            var2 = var5;
 132:
            if(!var4) { _fun0002_ip = 145; continue _fun0002 }
 135:
            var3 = _closure1_slot2;
            var1 = 0;
            if(!(var2 !== var3)) { _fun0002_ip = 148; continue _fun0002 }
 145:
            var1 = var2;
 148:
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
 0:
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
            if(!var1) { _fun0003_ip = 63; continue _fun0003 }
 60:
            var1 = !var3;
 63:
            if(!var1) { _fun0003_ip = 69; continue _fun0003 }
 66:
            var1 = !var2;
 69:
            return var1;
        }
    };
    var3['default'] = var5;
    var3['useConnectedUserLimit'] = var4;
    var2 = function useConnectedUserLimitFormatted(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
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
            if(var7) { _fun0004_ip = 118; continue _fun0004 }
 58:
            if(!(var2 == var6)) { _fun0004_ip = 73; continue _fun0004 }
 62:
            var2 = _closure1_slot3;
            var2 = var2.bind(var5)(var4);
            _fun0004_ip = 115; continue _fun0004;
 73:
            var3 = _closure1_slot3;
            var7 = var3.bind(var5)(var6);
            var6 = var3.bind(var5)(var4);
            var3 = global;
            var3 = var3.HermesInternal;
            var5 = var3.concat;
            var4 = '';
            var3 = '/';
            var2 = var5.bind(var4)(var7, var3, var6);
 115:
            var1 = var2;
 118:
            return var1;
        }
    };
    var3['useConnectedUserLimitFormatted'] = var2;
    return var1;
})();