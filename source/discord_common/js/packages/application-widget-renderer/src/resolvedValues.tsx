// discord_common/js/packages/application-widget-renderer/src/resolvedValues.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = function resolveFieldValue(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var11 = arg2;
            var10 = arg3;
            var _closure2_slot0 = var4;
            var5 = var10.data;
            var8 = var10.applicationAssets;
            var12 = var10.getApplicationAssetUrl;
            var1 = null;
            if(!(var1 != var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var9 = var4.value_type;
            var13 = _closure1_slot0;
            var6 = _closure1_slot1;
            var14 = 1;
            var6 = var6[var14];
            var7 = undefined;
            var6 = var13.bind(var7)(var6);
            var6 = var6.ApplicationWidgetFieldValueType;
            var6 = var6.DATA;
            if(!(var9 !== var6)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var9 = var4.value_type;
            var13 = _closure1_slot0;
            var6 = _closure1_slot1;
            var6 = var6[var14];
            var6 = var13.bind(var7)(var6);
            var6 = var6.ApplicationWidgetFieldValueType;
            var6 = var6.CUSTOM_STRING;
            if(!(var9 !== var6)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var9 = var4.value_type;
            var13 = _closure1_slot0;
            var6 = _closure1_slot1;
            var6 = var6[var14];
            var6 = var13.bind(var7)(var6);
            var6 = var6.ApplicationWidgetFieldValueType;
            var6 = var6.APPLICATION_ASSET;
            if(!(var9 !== var6)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            return var1;
case 8:
            var9 = var11.includes;
            var6 = _closure1_slot2;
            var6 = var6.MEDIA;
            var6 = var9.bind(var11)(var6);
            if(var6) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            return var1;
case 10:
            var6 = var8.find;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.key;
                var1 = _closure2_slot0;
                var1 = var1.value;
                var1 = var2 === var1;
                return var1;
            };
            var9 = var6.bind(var8)(var2);
            var6 = var1 == var9;
            var2 = null;
            if(var6) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var6 = {};
            var8 = _closure1_slot2;
            var8 = var8.MEDIA;
            var6['type'] = var8;
            var8 = {};
            var12 = var12.bind(var7)(var9);
            var8['url'] = var12;
            var12 = var9.metadata;
            var12 = var12.width;
            var8['width'] = var12;
            var9 = var9.metadata;
            var9 = var9.height;
            var8['height'] = var9;
            var6['media'] = var8;
            var9 = _closure1_slot0;
            var12 = _closure1_slot1;
            var8 = 0;
            var8 = var12[var8];
            var8 = var9.bind(var7)(var8);
            var8 = var8.ApplicationWidgetFieldPresentationType;
            var8 = var8.IMAGE;
            var6['presentationType'] = var8;
            var2 = var6;
case 12:
            return var2;
case 6:
            var8 = var4.presentation_type;
            var6 = _closure1_slot0;
            var2 = _closure1_slot1;
            var12 = 0;
            var2 = var2[var12];
            var2 = var6.bind(var7)(var2);
            var2 = var2.ApplicationWidgetFieldPresentationType;
            var6 = var2.TEXT;
            var2 = null;
            if(!(var8 === var6)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var8 = var11.includes;
            var6 = _closure1_slot2;
            var6 = var6.STRING;
            var6 = var8.bind(var11)(var6);
            var2 = null;
            if(!var6) { _fun0001_ip = 14; continue _fun0001 }
case 16:
            var6 = {};
            var8 = _closure1_slot2;
            var8 = var8.STRING;
            var6['type'] = var8;
            var8 = var4.value;
            var6['value'] = var8;
            var9 = _closure1_slot0;
            var8 = _closure1_slot1;
            var8 = var8[var12];
            var8 = var9.bind(var7)(var8);
            var8 = var8.ApplicationWidgetFieldPresentationType;
            var8 = var8.TEXT;
            var6['presentationType'] = var8;
            var2 = var6;
case 14:
            return var2;
case 4:
            var2 = var4.value;
            var6 = var5[var2];
            var5 = var4.presentation_type;
            if(!(var1 != var6)) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var2 = _closure1_slot3;
            var9 = var2[var5];
            if(!(var1 != var9)) { _fun0001_ip = 17; continue _fun0001 }
case 19:
            var8 = var9.includes;
            var2 = var6.type;
            var2 = var8.bind(var9)(var2);
            if(!var2) { _fun0001_ip = 17; continue _fun0001 }
case 20:
            var8 = var11.includes;
            var2 = var6.type;
            var2 = var8.bind(var11)(var2);
            if(var2) { _fun0001_ip = 21; continue _fun0001 }
case 17:
            var2 = 'fallback';
            var8 = var2 in var4;
            var2 = null;
            if(!var8) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var8 = var4.fallback;
            var8 = var1 != var8;
            var2 = null;
            if(!var8) { _fun0001_ip = 22; continue _fun0001 }
case 24:
            var9 = _closure1_slot4;
            var8 = var4.fallback;
            var2 = var9.bind(var7)(var8, var11, var10);
case 22:
            _fun0001_ip = 25; continue _fun0001;
case 21:
            var8 = var4.value;
            var4 = 'playtime_hours';
            if(!(var4 === var8)) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var8 = var6.type;
            var4 = _closure1_slot2;
            var4 = var4.NUMBER;
            if(!(var8 === var4)) { _fun0001_ip = 26; continue _fun0001 }
case 28:
            var4 = _closure1_slot0;
            var8 = _closure1_slot1;
            var3 = 0;
            var3 = var8[var3];
            var3 = var4.bind(var7)(var3);
            var3 = var3.ApplicationWidgetFieldPresentationType;
            var3 = var3.DURATION;
            if(!(var5 !== var3)) { _fun0001_ip = 29; continue _fun0001 }
case 26:
            var3 = {};
            var17 = var3;
            var16 = var6;
            var4 = copyDataProperties(var17, var16);
            var4 = 'presentationType';
            var3[3] = var5;
            _fun0001_ip = 30; continue _fun0001;
case 29:
            var4 = {};
            var7 = var6.type;
            var4['type'] = var7;
            var7 = global;
            var8 = var7.Math;
            var7 = var8.floor;
            var6 = var6.value;
            var9 = 60;
            var6 = var9 * var6;
            var9 = var6 * var9;
            var6 = 1000;
            var6 = var9 * var6;
            var6 = var7.bind(var8)(var6);
            var4['value'] = var6;
            var4['presentationType'] = var5;
            var3 = var4;
case 30:
            var2 = var3;
case 25:
            return var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot4 = var1;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var4 = {};
    var1 = 'string';
    var4['STRING'] = var1;
    var1 = 'number';
    var4['NUMBER'] = var1;
    var1 = 'media';
    var4['MEDIA'] = var1;
    var _closure1_slot2 = var4;
    var5 = {};
    var8 = 0;
    var9 = var7[var8];
    var1 = undefined;
    var9 = var6.bind(var1)(var9);
    var9 = var9.ApplicationWidgetFieldPresentationType;
    var10 = var9.TEXT;
    var11 = var4.STRING;
    var9 = new Array(1);
    var9[0] = var11;
    var5[9] = var9;
    var9 = var7[var8];
    var9 = var6.bind(var1)(var9);
    var9 = var9.ApplicationWidgetFieldPresentationType;
    var10 = var9.NUMBER;
    var11 = var4.NUMBER;
    var9 = new Array(1);
    var9[0] = var11;
    var5[9] = var9;
    var9 = var7[var8];
    var9 = var6.bind(var1)(var9);
    var9 = var9.ApplicationWidgetFieldPresentationType;
    var10 = var9.IMAGE;
    var11 = var4.MEDIA;
    var9 = new Array(1);
    var9[0] = var11;
    var5[9] = var9;
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var8 = var8.ApplicationWidgetFieldPresentationType;
    var9 = var8.DURATION;
    var10 = var4.NUMBER;
    var8 = new Array(1);
    var8[0] = var10;
    var5[8] = var8;
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = '../discord_common/js/packages/application-widget-renderer/src/resolvedValues.tsx';
    var5 = var6.bind(var7)(var5);
    var3['ResolvedValueType'] = var4;
    var2 = function bindResolveFieldValue(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var1 = function(arg1, arg2) {
            var5 = _closure1_slot4;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = arg1;
            var1 = arg2;
            var1 = var5.bind(var3)(var2, var1, var4);
            return var1;
        };
        return var1;
    };
    var3['bindResolveFieldValue'] = var2;
    return var1;
})();