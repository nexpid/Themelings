// app/modules/a11y/native/TextWithIOSLinkWorkaround.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function findLinks(arg1) {
        var2 = _closure1_slot2;
        var4 = var2.Children;
        var3 = var4.toArray;
        var2 = arg1;
        var3 = var3.bind(var4)(var2);
        var2 = var3.filter;
        var1 = _closure1_slot2;
        var1 = var1.isValidElement;
        var3 = var2.bind(var3)(var1);
        var2 = var3.flatMap;
        var1 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = arg1;
                var3 = var2.type;
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 4;
                var1 = var5[var1];
                var5 = undefined;
                var1 = var6.bind(var5)(var1);
                var1 = var1.I18nLinkComponent;
                if(!(var3 !== var1)) { _fun0001_ip = 81; continue _fun0001 }
 43:
                var3 = var2.props;
                var6 = var3.children;
                var1 = null;
                if(!(var1 == var6)) { _fun0001_ip = 65; continue _fun0001 }
 59:
                var1 = new Array(0);
                _fun0001_ip = 79; continue _fun0001;
 65:
                var4 = _closure1_slot7;
                var3 = var3.children;
                var1 = var4.bind(var5)(var3);
 79:
                return var1;
 81:
                var1 = new Array(1);
                var1[0] = var2;
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot7 = var1;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot4 = var7;
    var4 = var4.jsxs;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flexDirection': 'column', 'flexShrink': 1};
    var4['column'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/a11y/native/TextWithIOSLinkWorkaround.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function TextWithIOSLinkWorkaround(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = arg1;
            var3 = var4.children;
            var1 = null;
            var2 = Object.create(var1);
            var1 = 0;
            var2['children'] = var1;
            var14 = {};
            var13 = var4;
            var12 = var2;
            var13 = copyDataProperties(var14, var13, var12);
            var2 = _closure1_slot6;
            var4 = undefined;
            var5 = var2.bind(var4)();
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var2 = 5;
            var2 = var9[var2];
            var6 = var8.bind(var4)(var2);
            var2 = var6.useIsScreenReaderEnabled;
            var2 = var2.bind(var6)();
            var10 = _closure1_slot4;
            var6 = 6;
            var6 = var9[var6];
            var6 = var8.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {};
            var14 = var6;
            var11 = copyDataProperties(var14, var13);
            var11 = 'children';
            var6[var11] = var3;
            var7 = var10.bind(var4)(var7, var6);
            var6 = 7;
            var6 = var9[var6];
            var8 = var8.bind(var4)(var6);
            var6 = var8.isIOS;
            var6 = var6.bind(var8)();
            if(!var6) { _fun0002_ip = 147; continue _fun0002 }
 144:
            if(var2) { _fun0002_ip = 149; continue _fun0002 }
 147:
            return var7;
 149:
            var2 = _closure1_slot7;
            var6 = var2.bind(var4)(var3);
            var3 = _closure1_slot5;
            var2 = _closure1_slot3;
            var1 = {};
            var5 = var5.column;
            var1['style'] = var5;
            var5 = new Array(2);
            var5[0] = var7;
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['TextWithIOSLinkWorkaround'] = var2;
    return var1;
})();