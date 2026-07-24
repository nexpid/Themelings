// app/modules/forums/native/posts/ForumPostTitle.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
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
        var10 = 3;
        var10 = var6[var10];
        var11 = var5.bind(var1)(var10);
        var10 = var11.isIOS;
        var11 = var10.bind(var11)();
        var10 = null;
        if(!var11) { _fun0001_ip = 2; continue _fun0001 }
case 3:
        var11 = {};
        var12 = 22;
        var11['lineHeight'] = var12;
        var10 = var11;
case 2:
        var15 = var9;
        var14 = var10;
        var10 = copyDataProperties(var15, var14);
        var4['title'] = var9;
        var4 = var7.bind(var8)(var4);
        var _closure1_slot3 = var4;
        var4 = 5;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/forums/native/posts/ForumPostTitle.tsx';
        var4 = var5.bind(var6)(var4);
        var2 = function ForumPostTitle(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
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
                if(!var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var10 = 'mobile-text-heading-primary';
case 4:
                var3 = _closure1_slot2;
                var2 = _closure1_slot0;
                var11 = _closure1_slot1;
                var1 = 4;
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
    }
})();