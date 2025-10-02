// app/modules/guild_progress/native/components/GuildProgressItem.tsx
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
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_progress/native/components/GuildProgressItem.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildProgressItem(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var5 = var1.guild;
            var _closure2_slot0 = var5;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 2;
            var2 = var13[var2];
            var4 = undefined;
            var3 = var12.bind(var4)(var2);
            var2 = var3.useIOSCompletionStates;
            var2 = var2.bind(var3)(var5);
            var8 = var2.numFinished;
            var _closure2_slot1 = var8;
            var5 = var2.completed;
            var _closure2_slot2 = var5;
            var7 = var2.totalSteps;
            var3 = _closure1_slot3;
            var10 = _closure1_slot1;
            var1 = 3;
            var1 = var13[var1];
            var2 = var10.bind(var4)(var1);
            var1 = {};
            var9 = function onPress() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot2;
                    if(var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 4;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.createProgress;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var3.bind(var4)(var1);
case 2:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 2;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.openActionSheet;
                    var2 = _closure2_slot0;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var1['onPress'] = var9;
            var9 = 5;
            var9 = var13[var9];
            var9 = var10.bind(var4)(var9);
            var1['source'] = var9;
            var9 = 6;
            var10 = var13[var9];
            var10 = var12.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var13[var9];
            var9 = var12.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.J2+var20;
            var9 = var10.bind(var11)(var9);
            var1['title'] = var9;
            var1['isCompleted'] = var5;
            var5 = 0;
            var9 = var8 > var5;
            var5 = undefined;
            if(!var9) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = var8 < var7;
            var5 = undefined;
            if(!var7) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var5 = function() {
                var4 = _closure1_slot3;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 7;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var6 = _closure2_slot1;
                var5 = 100;
                var6 = var5 * var6;
                var5 = 3;
                var5 = var6 / var5;
                var1['percent'] = var5;
                var5 = 32;
                var1['size'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
case 4:
            var1['renderEndComponent'] = var5;
            var5 = true;
            var1['fullWidth'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();