// discord_common/js/packages/i18n/updateRules.web.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/i18n/updateRules.web.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function updateRules(arg1) {
        var1 = arg1;
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var2 = 2;
        var7 = var6[var2];
        var4 = undefined;
        var7 = var5.bind(var4)(var7);
        var7 = var7.defaultRules;
        var7 = var7.heading;
        var1['heading'] = var7;
        var7 = var6[var2];
        var7 = var5.bind(var4)(var7);
        var7 = var7.defaultRules;
        var7 = var7.lheading;
        var1['lheading'] = var7;
        var2 = var6[var2];
        var2 = var5.bind(var4)(var2);
        var2 = var2.defaultRules;
        var2 = var2.list;
        var1['list'] = var2;
        var2 = {};
        var8 = var1.paragraph;
        var9 = var2;
        var4 = copyDataProperties(var9, var8);
        var5 = function react(arg1, arg2, arg3) {
            var1 = arg3;
            var5 = _closure1_slot2;
            var4 = {};
            var2 = arg1;
            var6 = var2.content;
            var2 = arg2;
            var3 = undefined;
            var2 = var2.bind(var3)(var6, var1);
            var4['children'] = var2;
            var2 = var1.key;
            var1 = 'p';
            var1 = var5.bind(var3)(var1, var4, var2);
            return var1;
        };
        var4 = 'react';
        var2[var4] = var5;
        var1['paragraph'] = var2;
        var2 = {};
        var8 = var1.link;
        var9 = var2;
        var5 = copyDataProperties(var9, var8);
        var3 = function react(arg1, arg2, arg3) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = arg1;
                var1 = arg3;
                var3 = {};
                var4 = var2.context;
                var6 = null;
                if(!(var6 != var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var5 = var2.context;
                var4 = var2.target;
                var4 = var5[var4];
                if(!var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var5 = var4.onClick;
                if(var5) { _fun0001_ip = 6; continue _fun0001 }
case 4:
                var3['onClick'] = var4;
                _fun0001_ip = 2; continue _fun0001;
case 6:
                var5 = var4.onClick;
                var3['onClick'] = var5;
                var4 = var4.onContextMenu;
                var3['onContextMenu'] = var4;
case 2:
                var4 = var3.onClick;
                if(!(var6 == var4)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
                var7 = _closure1_slot0;
                var5 = _closure1_slot1;
                var4 = 2;
                var5 = var5[var4];
                var4 = undefined;
                var8 = var7.bind(var4)(var5);
                var7 = var8.sanitizeUrl;
                var5 = var2.target;
                var5 = var7.bind(var8)(var5);
                var6 = var6 != var5;
                if(!var6) { _fun0001_ip = 9; continue _fun0001 }
case 10:
                var4 = var5;
case 9:
                var3['href'] = var4;
                var4 = '_blank';
                var3['target'] = var4;
case 7:
                var5 = _closure1_slot2;
                var4 = {};
                var6 = var2.title;
                var4['title'] = var6;
                var11 = var4;
                var10 = var3;
                var3 = copyDataProperties(var11, var10);
                var6 = 'noreferrer';
                var3 = 'rel';
                var4[var3] = var6;
                var6 = var2.content;
                var2 = arg2;
                var3 = undefined;
                var6 = var2.bind(var3)(var6, var1);
                var2 = 'children';
                var4[var2] = var6;
                var2 = var1.key;
                var1 = 'a';
                var1 = var5.bind(var3)(var1, var4, var2);
                return var1;
            }
        };
        var2[var4] = var3;
        var1['link'] = var2;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();