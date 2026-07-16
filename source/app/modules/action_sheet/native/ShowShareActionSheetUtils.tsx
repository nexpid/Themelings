// app/modules/action_sheet/native/ShowShareActionSheetUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var2 = function resolveShareFileExtension(arg1, arg2) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var5 = var3.bind(var1)(var2);
        var4 = var5.decideFileExtension;
        var3 = arg1;
        var2 = arg2;
        var1 = true;
        var1 = var4.bind(var5)(var3, var2, var1);
        return var1;
    };
    var _closure1_slot4 = var2;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var6.bind(var1)(var5);
    var5 = var5.AnalyticEvents;
    var _closure1_slot3 = var5;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/action_sheet/native/ShowShareActionSheetUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function trackAppClickInNativeShareSheet(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = arg1;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 1;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.track;
            var2 = _closure1_slot3;
            var3 = var2.NATIVE_SHARE_SHEET_APP_CLICKED;
            var2 = {};
            var6 = null;
            var8 = var6 != var7;
            var6 = '';
            if(!var8) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = var7;
case 2:
            var2['package_name'] = var6;
            var6 = arg2;
            var2['location'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['trackAppClickInNativeShareSheet'] = var5;
    var4 = function getMediaShareParams(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 2;
            var4 = var4[var2];
            var2 = undefined;
            var6 = var5.bind(var2)(var4);
            var5 = var6.getMobileMediaViewerShareExperimentEnabled;
            var4 = 'shareMediaSource';
            var4 = var5.bind(var6)(var4);
            if(!var4) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var4 = var3.disableDownload;
            var5 = true;
            if(!(var5 !== var4)) { _fun0002_ip = 4; continue _fun0002 }
case 6:
            var4 = var3.isGIFV;
            if(!(var5 !== var4)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var6 = var3.videoURI;
            var5 = var3.contentType;
            var4 = null;
            if(!(var4 == var6)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var8 = _closure1_slot4;
            var7 = var3.uri;
            var10 = var8.bind(var2)(var7, var5);
            var7 = {};
            var8 = var3.sourceURI;
            if(!(var4 == var8)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var8 = var3.uri;
case 11:
            var7['mediaFallbackUrl'] = var8;
            var9 = var4 != var10;
            var8 = undefined;
            if(!var9) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var9 = {};
            var11 = var3.uri;
            var9['url'] = var11;
            var9['fileExtension'] = var10;
            var10 = 'image';
            var9['mediaType'] = var10;
            var8 = var9;
case 13:
            var7['mediaStagingOptions'] = var8;
            return var7;
case 9:
            var1 = _closure1_slot4;
            var5 = var1.bind(var2)(var6, var5);
            var1 = {};
            var1['mediaFallbackUrl'] = var6;
            var4 = var4 != var5;
            var2 = undefined;
            if(!var4) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var4 = {};
            var4['url'] = var6;
            var4['fileExtension'] = var5;
            var5 = 'video';
            var4['mediaType'] = var5;
            var2 = var4;
case 15:
            var1['mediaStagingOptions'] = var2;
            return var1;
case 7:
            var1 = {};
            var2 = var3.embedURI;
            var4 = null;
            if(!(var4 == var2)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var2 = var3.sourceURI;
case 17:
            if(!(var4 == var2)) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var2 = var3.uri;
case 19:
            var1['mediaFallbackUrl'] = var2;
            return var1;
case 4:
            var1 = {};
            var2 = var3.videoURI;
            var4 = null;
            if(!(var4 == var2)) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var2 = var3.sourceURI;
case 21:
            if(!(var4 == var2)) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var2 = var3.uri;
case 23:
            var1['mediaFallbackUrl'] = var2;
            return var1;
        }
    };
    var3['getMediaShareParams'] = var4;
    var3['resolveShareFileExtension'] = var2;
    return var1;
})();