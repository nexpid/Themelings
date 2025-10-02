// app/modules/app_launcher/native/screens/application_view/activity/HeroMedia.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var2 = function useHeroMediaDimensions() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arguments[0];
            var5 = undefined;
            if(!(var1 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = {};
case 2:
            var2 = var1.width;
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 6;
            var3 = var6[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.useDefaultAppLauncherWidth;
            var6 = var3.bind(var4)();
            var3 = null;
            if(!(var3 != var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = var2;
case 4:
            if(!(var3 == var2)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = global;
            var5 = var3.Math;
            var4 = var5.min;
            var3 = _closure1_slot5;
            var2 = var4.bind(var5)(var6, var3);
case 6:
            var3 = _closure1_slot4;
            var1 = 2;
            var1 = var1 * var3;
            var5 = var2 - var1;
            var1 = {};
            var1['width'] = var5;
            var2 = global;
            var4 = var2.Math;
            var3 = var4.floor;
            var2 = 9;
            var5 = var2 * var5;
            var2 = 16;
            var2 = var5 / var2;
            var2 = var3.bind(var4)(var2);
            var1['height'] = var2;
            return var1;
        }
    };
    var _closure1_slot8 = var2;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var9 = var7[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var5 = var5.bind(var1)(var9);
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.DEFAULT_CONTENT_PADDING;
    var _closure1_slot4 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.ACTION_SHEET_MAX_WIDTH;
    var _closure1_slot5 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.jsx;
    var _closure1_slot6 = var5;
    var5 = 5;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.createStyles;
    var5 = {};
    var10 = {};
    var11 = 'black';
    var10['backgroundColor'] = var11;
    var5['mediaBackground'] = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot7 = var5;
    var5 = 12;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/app_launcher/native/screens/application_view/activity/HeroMedia.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function HeroMedia(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var4 = var1.applicationId;
            var12 = var1.containerHeight;
            var7 = var1.width;
            var1 = _closure1_slot7;
            var5 = undefined;
            var6 = var1.bind(var5)();
            var3 = _closure1_slot8;
            var1 = {};
            var1['width'] = var7;
            var10 = var3.bind(var5)(var1);
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 7;
            var1 = var8[var1];
            var3 = var3.bind(var5)(var1);
            var1 = {};
            var1['applicationId'] = var4;
            var7 = var10.width;
            var1['size'] = var7;
            var7 = ['embedded_cover'];
            var1['names'] = var7;
            var7 = var3.bind(var5)(var1);
            var3 = _closure1_slot0;
            var1 = 8;
            var1 = var8[var1];
            var14 = var3.bind(var5)(var1);
            var13 = var14.useStateFromStores;
            var1 = _closure1_slot3;
            var11 = new Array(1);
            var11[0] = var1;
            var9 = function() {
                var1 = _closure1_slot3;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var1 = new Array(0);
            var9 = var13.bind(var14)(var11, var9, var1);
            var1 = 9;
            var1 = var8[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.useGetOrFetchApplication;
            var3 = var1.bind(var3)(var4);
            var8 = null;
            var11 = var8 == var3;
            var1 = undefined;
            if(var11) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var1 = var3.embeddedActivityConfig;
case 8:
            var11 = var8 == var1;
            var3 = undefined;
            if(var11) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var3 = var1.activity_preview_video_asset_id;
case 10:
            var3 = var8 != var3;
            var13 = null;
            if(!var3) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var11 = _closure1_slot1;
            var14 = _closure1_slot2;
            var3 = 10;
            var3 = var14[var3];
            var3 = var11.bind(var5)(var3);
            var1 = var1.activity_preview_video_asset_id;
            var13 = var3.bind(var5)(var4, var1);
case 12:
            var3 = var8 == var13;
            var1 = null;
            if(var3) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var11 = '';
            var1 = null;
            if(!(var11 !== var13)) { _fun0002_ip = 14; continue _fun0002 }
case 16:
            var4 = _closure1_slot6;
            var3 = _closure1_slot1;
            var14 = _closure1_slot2;
            var2 = 11;
            var2 = var14[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['paused'] = var9;
            if(!(var8 != var13)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            if(!(var11 === var13)) { _fun0002_ip = 19; continue _fun0002 }
case 17:
            var9 = {};
            var14 = var7.url;
            var15 = var8 != var14;
            if(!var15) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var11 = var14;
case 20:
            var9['uri'] = var11;
            _fun0002_ip = 22; continue _fun0002;
case 19:
            var11 = {};
            var11['videoURI'] = var13;
            var9 = var11;
case 22:
            var2['src'] = var9;
            var9 = var10.height;
            var2['height'] = var9;
            var9 = var10.width;
            var2['width'] = var9;
            var7 = var7.url;
            var2['poster'] = var7;
            var7 = 'cover';
            var2['resizeMode'] = var7;
            var9 = var6.mediaBackground;
            var7 = new Array(3);
            var7[0] = var9;
            var9 = {};
            var11 = var10.height;
            var9['maxHeight'] = var11;
            var7[1] = var9;
            var8 = var8 != var12;
            if(!var8) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var9 = {};
            var11 = {};
            var10 = var10.height;
            var12 = var12 - var10;
            var10 = 2;
            var10 = var12 / var10;
            var11['translateY'] = var10;
            var10 = new Array(1);
            var10[0] = var11;
            var9['transform'] = var10;
            var8 = var9;
case 23:
            var7[2] = var8;
            var2['style'] = var7;
            var6 = var6.mediaBackground;
            var2['videoStyle'] = var6;
            var6 = false;
            var2['postponeRender'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 14:
            return var1;
        }
    };
    var3['default'] = var4;
    var3['useHeroMediaDimensions'] = var2;
    return var1;
})();