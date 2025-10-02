// app/design/utils/shared/getNodeText.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var5 = dependencyMap;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var2);
    var1 = 0;
    var6 = var5[var1];
    var2 = metroImportAll;
    var1 = undefined;
    var2 = var2.bind(var1)(var6);
    var _closure1_slot0 = var2;
    var2 = 1;
    var5 = var5[var2];
    var2 = require;
    var6 = var2.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var2 = 'design/utils/shared/getNodeText.tsx';
    var2 = var5.bind(var6)(var2);
    var2 = function getNodeText(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var3 = typeof var5;
            var2 = 'string';
            var1 = var5;
            if(!(var2 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = 'number';
            var1 = var5;
            if(!(var2 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var2 = global;
            var2 = var2.Array;
            var2 = var5 instanceof var2;
            if(var2) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var4 = _closure1_slot0;
            var2 = var4.isValidElement;
            var4 = var2.bind(var4)(var5);
            var7 = undefined;
            var2 = undefined;
            if(!var4) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var6 = _closure1_slot1;
            var4 = var5.props;
            var4 = var4.children;
            var2 = var6.bind(var7)(var4);
case 7:
            _fun0001_ip = 9; continue _fun0001;
case 5:
            var4 = var5.map;
            var3 = _closure1_slot1;
            var5 = var4.bind(var5)(var3);
            var4 = var5.join;
            var3 = '';
            var2 = var4.bind(var5)(var3);
case 9:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot1 = var2;
    var3['getNodeText'] = var2;
    return var1;
})();