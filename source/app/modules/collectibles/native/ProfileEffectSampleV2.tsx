// app/modules/collectibles/native/ProfileEffectSampleV2.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var11;
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var12 = var4.SAMPLE_PROFILE_ASPECT_RATIO;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot3 = var7;
    var4 = var4.jsxs;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'position': 'absolute', 'display': 'flex', 'height': '100%', 'width': '100%'};
    var4['profileContainer'] = var9;
    var9 = {};
    var10 = 4;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_MOD_SUBTLE;
    var9['backgroundColor'] = var13;
    var4['profileBackground'] = var9;
    var9 = {};
    var9['aspectRatio'] = var12;
    var4['sampleProfileImage'] = var9;
    var9 = {'position': 'absolute', 'height': '100%', 'width': '100%', 'borderWidth': 1};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BORDER_MUTED;
    var9['borderColor'] = var10;
    var4['profileBorder'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot5 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/ProfileEffectSampleV2.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var9 = var1.item;
            var7 = var1.hideBackground;
            var4 = undefined;
            if(!(var7 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = false;
case 2:
            var1 = _closure1_slot5;
            var12 = var1.bind(var4)();
            var3 = _closure1_slot4;
            var2 = _closure1_slot2;
            var1 = {};
            var8 = var12.profileContainer;
            var5 = new Array(2);
            var5[0] = var8;
            var8 = !var7;
            if(!var8) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var8 = var12.profileBackground;
case 4:
            var5[1] = var8;
            var1['style'] = var5;
            var10 = _closure1_slot3;
            var14 = _closure1_slot0;
            var15 = _closure1_slot1;
            var5 = 5;
            var5 = var15[var5];
            var8 = var14.bind(var4)(var5);
            var5 = {};
            var13 = var12.sampleProfileImage;
            var11 = new Array(1);
            var11[0] = var13;
            var5['style'] = var11;
            var11 = {};
            var13 = 6;
            var13 = var15[var13];
            var13 = var14.bind(var4)(var13);
            var11['uri'] = var13;
            var5['source'] = var11;
            var11 = false;
            var5['accessible'] = var11;
            var11 = 'cover';
            var5['resizeMode'] = var11;
            var8 = var10.bind(var4)(var8, var5);
            var5 = new Array(3);
            var5[0] = var8;
            var7 = !var7;
            if(!var7) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var11 = _closure1_slot3;
            var10 = _closure1_slot2;
            var8 = {};
            var12 = var12.profileBorder;
            var8['style'] = var12;
            var7 = var11.bind(var4)(var10, var8);
case 6:
            var5[1] = var7;
            var8 = _closure1_slot3;
            var7 = _closure1_slot0;
            var10 = _closure1_slot1;
            var6 = 7;
            var6 = var10[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {'skuId': null, 'bannerAdjustment': 0, 'useThumbnail': true};
            var9 = var9.skuId;
            var6['skuId'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();