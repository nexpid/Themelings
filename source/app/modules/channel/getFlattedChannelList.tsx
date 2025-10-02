// app/modules/channel/getFlattedChannelList.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var4 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var4;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var5);
    var1 = 1;
    var5 = var4[var1];
    var4 = require;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/channel/getFlattedChannelList.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getFlattenedChannelList(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arguments[2];
            var2 = arg2;
            var _closure2_slot0 = var2;
            var5 = undefined;
            if(!(var3 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = function l() {
                var1 = true;
                return var1;
            };
case 2:
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 0;
            var2 = var6[var2];
            var4 = var4.bind(var5)(var2);
            var2 = arg1;
            var4 = var4.bind(var5)(var2);
            var2 = var4.map;
            var1 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = arg1;
                    var1 = var2.channel;
                    var3 = var1.id;
                    var1 = 'null';
                    if(!(var1 !== var3)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var1 = new Array(2);
                    var1[0] = var2;
                    var4 = _closure2_slot0;
                    var3 = var2.channel;
                    var3 = var3.id;
                    var3 = var4[var3];
                    var1[1] = var3;
                    _fun0002_ip = 6; continue _fun0002;
case 4:
                    var3 = _closure2_slot0;
                    var2 = var2.channel;
                    var2 = var2.id;
                    var1 = var3[var2];
case 6:
                    return var1;
                }
            };
            var2 = var2.bind(var4)(var1);
            var1 = var2.flattenDeep;
            var2 = var1.bind(var2)();
            var1 = var2.filter;
            var2 = var1.bind(var2)(var3);
            var1 = var2.value;
            var1 = var1.bind(var2)();
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();