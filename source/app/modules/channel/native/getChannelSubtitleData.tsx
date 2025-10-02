// app/modules/channel/native/getChannelSubtitleData.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 1;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/channel/native/getChannelSubtitleData.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getChannelSubtitleData(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var1 = null;
            if(!(var1 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var3.type;
            var2 = 'embedded-activities';
            if(!(var2 !== var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = 'event';
            if(!(var2 !== var4)) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var2 = 'go-live';
            if(!(var2 !== var4)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var2 = 'voice';
            if(!(var2 !== var4)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var2 = undefined;
            return var2;
case 9:
            var2 = {};
            var4 = var3.text;
            var2['subtitle'] = var4;
            var4 = var3.type;
            var2['type'] = var4;
            return var2;
case 7:
            var2 = {};
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var4 = 0;
            var5 = var9[var4];
            var7 = undefined;
            var5 = var8.bind(var7)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var4 = var9[var4];
            var4 = var8.bind(var7)(var4);
            var4 = var4.t;
            var4 = var4.Pa817u;
            var4 = var5.bind(var6)(var4);
            var2['subtitle'] = var4;
            var4 = var3.type;
            var2['type'] = var4;
            return var2;
case 4:
            var2 = {};
            var4 = var3.name;
            var2['subtitle'] = var4;
            var3 = var3.type;
            var2['type'] = var3;
            return var2;
case 2:
            return var1;
        }
    };
    var3['getChannelSubtitleData'] = var2;
    return var1;
})();