// app/modules/forums/native/posts/ForumPostTitle.tsx
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
    var4 = 2;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 6;
    var9['marginBottom'] = var10;
    var4['title'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/forums/native/posts/ForumPostTitle.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ForumPostTitle(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var5 = var1.title;
            var9 = var1.lineClamp;
            var8 = var1.ellipsizeMode;
            var2 = var1.hasUnreads;
            var6 = var1.onTextLayout;
            var3 = _closure1_slot3;
            var4 = undefined;
            var7 = var3.bind(var4)();
            var10 = 'text-muted';
            if(!var2) { _fun0001_ip = 60; continue _fun0001 }
 54:
            var10 = 'header-primary';
 60:
            var3 = _closure1_slot2;
            var2 = _closure1_slot0;
            var11 = _closure1_slot1;
            var1 = 3;
            var1 = var11[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Text;
            var1 = {};
            var11 = 'text-md/semibold';
            var1['variant'] = var11;
            var1['color'] = var10;
            var1['lineClamp'] = var9;
            var1['ellipsizeMode'] = var8;
            var7 = var7.title;
            var1['style'] = var7;
            var1['onTextLayout'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();