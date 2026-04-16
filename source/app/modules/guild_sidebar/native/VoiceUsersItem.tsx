// app/modules/guild_sidebar/native/VoiceUsersItem.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
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
    var4 = var4.View;
    var _closure1_slot0 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot1 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 8;
    var9['paddingRight'] = var10;
    var4['voiceStates'] = var9;
    var9 = {'paddingRight': 0, 'flexDirection': 'row', 'flexWrap': 'wrap'};
    var4['voiceStatesCollapsed'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot2 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_sidebar/native/VoiceUsersItem.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function VoiceUsersItem(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var7 = var1.collapsed;
            var5 = var1.children;
            var2 = _closure1_slot2;
            var4 = undefined;
            var8 = var2.bind(var4)();
            var3 = _closure1_slot1;
            var2 = _closure1_slot0;
            var1 = {};
            var9 = !var7;
            if(!var9) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var9 = var8.voiceStates;
case 2:
            var6 = new Array(2);
            var6[0] = var9;
            if(!var7) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = var8.voiceStatesCollapsed;
case 4:
            var6[1] = var7;
            var1['style'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();