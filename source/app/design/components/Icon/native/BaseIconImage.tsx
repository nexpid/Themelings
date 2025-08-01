// app/design/components/Icon/native/BaseIconImage.tsx
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
    var4 = var4.Image;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = {};
    var7 = {'width': 12, 'height': 12};
    var4['xxs'] = var7;
    var7 = {'width': 16, 'height': 16};
    var4['xs'] = var7;
    var7 = {'width': 18, 'height': 18};
    var4['sm'] = var7;
    var7 = {'width': 24, 'height': 24};
    var4['md'] = var7;
    var7 = {'width': 32, 'height': 32};
    var4['lg'] = var7;
    var7 = {};
    var7['width'] = var1;
    var7['height'] = var1;
    var4['custom'] = var7;
    var7 = {'width': 18, 'height': 18};
    var4['refresh_sm'] = var7;
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/Icon/native/BaseIconImage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var12 = var1.source;
            var10 = var1.size;
            var4 = undefined;
            if(!(var10 === var4)) { _fun0001_ip = 23; continue _fun0001 }
 19:
            var10 = 'md';
 23:
            var3 = var1.color;
            var11 = var1.resizeMode;
            var8 = var1.style;
            var6 = var1.accessible;
            var5 = var1.accessibilityLabel;
            var2 = _closure1_slot0;
            var9 = _closure1_slot1;
            var1 = 3;
            var1 = var9[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useToken;
            var2 = var1.bind(var2)(var3);
            var1 = null;
            if(!(var1 == var2)) { _fun0001_ip = 125; continue _fun0001 }
 90:
            var1 = var1 != var3;
            if(!var1) { _fun0001_ip = 108; continue _fun0001 }
 97:
            var13 = 'string';
            var9 = typeof var3;
            var1 = var13 === var9;
 108:
            var9 = undefined;
            if(!var1) { _fun0001_ip = 135; continue _fun0001 }
 113:
            var1 = {};
            var1['tintColor'] = var3;
            var9 = var1;
            _fun0001_ip = 135; continue _fun0001;
 125:
            var1 = {};
            var1['tintColor'] = var2;
            var9 = var1;
 135:
            var3 = _closure1_slot3;
            var2 = _closure1_slot2;
            var1 = {};
            var13 = 0;
            var1['fadeDuration'] = var13;
            var1['source'] = var12;
            var1['resizeMode'] = var11;
            var7 = _closure1_slot4;
            var10 = var7[var10];
            var7 = new Array(3);
            var7[0] = var10;
            var7[1] = var9;
            var7[2] = var8;
            var1['style'] = var7;
            var1['accessible'] = var6;
            var1['accessibilityLabel'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['BaseIconImage'] = var2;
    return var1;
})();