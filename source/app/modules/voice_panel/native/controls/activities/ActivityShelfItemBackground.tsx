// app/modules/voice_panel/native/controls/activities/ActivityShelfItemBackground.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Image;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = function(arg1) {
        var1 = {};
        var2 = {'alignItems': 'center', 'justifyContent': 'center', 'backgroundColor': 'black'};
        var1['previewImage'] = var2;
        var2 = {};
        var3 = '100%';
        var2['width'] = var3;
        var3 = arg1;
        var2['aspectRatio'] = var3;
        var1['activityImage'] = var2;
        return var1;
    };
    var4 = var8.bind(var9)(var4);
    var _closure1_slot6 = var4;
    var4 = var7.memo;
    var2 = function ActivityShelfItemBackground(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var12 = var1.imageBackground;
            var3 = var1.aspectRatio;
            var10 = var1.accessibilityLabel;
            var1 = _closure1_slot6;
            var5 = undefined;
            var6 = var1.bind(var5)(var3);
            var4 = _closure1_slot3;
            var3 = var4.useState;
            var1 = false;
            var4 = var3.bind(var4)(var1);
            var3 = _closure1_slot2;
            var1 = 2;
            var4 = var3.bind(var5)(var4, var1);
            var1 = 0;
            var1 = var4[var1];
            var3 = 1;
            var3 = var4[var3];
            var _closure2_slot0 = var3;
            var4 = var12.state;
            var3 = 'not-found';
            if(!(var3 !== var4)) { _fun0001_ip = 304; continue _fun0001 }
 100:
            if(var1) { _fun0001_ip = 304; continue _fun0001 }
 106:
            var3 = var12.state;
            var1 = 'loading';
            if(!(var1 !== var3)) { _fun0001_ip = 260; continue _fun0001 }
 122:
            var1 = var12.url;
            var9 = null;
            if(!(var9 != var1)) { _fun0001_ip = 260; continue _fun0001 }
 136:
            var4 = _closure1_slot5;
            var3 = _closure1_slot0;
            var7 = _closure1_slot1;
            var1 = 5;
            var1 = var7[var1];
            var3 = var3.bind(var5)(var1);
            var1 = {};
            var7 = var6.previewImage;
            var1['style'] = var7;
            var8 = _closure1_slot4;
            var7 = {};
            var11 = function onError() {
                var3 = _closure2_slot0;
                var2 = undefined;
                var1 = true;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var7['onError'] = var11;
            var11 = {};
            var12 = var12.url;
            var11['uri'] = var12;
            var7['source'] = var11;
            var11 = var6.activityImage;
            var7['style'] = var11;
            var11 = 'image';
            var7['accessibilityRole'] = var11;
            var11 = var9 != var10;
            var9 = '';
            if(!var11) { _fun0001_ip = 238; continue _fun0001 }
 235:
            var9 = var10;
 238:
            var7['accessibilityLabel'] = var9;
            var7 = var4.bind(var5)(var8, var7);
            var1['children'] = var7;
            var1 = var4.bind(var5)(var3, var1);
            _fun0001_ip = 302; continue _fun0001;
 260:
            var7 = _closure1_slot5;
            var4 = _closure1_slot0;
            var8 = _closure1_slot1;
            var3 = 5;
            var3 = var8[var3];
            var4 = var4.bind(var5)(var3);
            var3 = {};
            var8 = var6.previewImage;
            var3['style'] = var8;
            var1 = var7.bind(var5)(var4, var3);
 302:
            _fun0001_ip = 370; continue _fun0001;
 304:
            var4 = _closure1_slot5;
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var2 = 5;
            var2 = var8[var2];
            var3 = var7.bind(var5)(var2);
            var2 = {};
            var6 = var6.previewImage;
            var2['style'] = var6;
            var6 = 6;
            var6 = var8[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 370:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/controls/activities/ActivityShelfItemBackground.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();