// app/modules/in_app_notifications/native/hooks/usePreviewableMediaText.tsx
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
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/in_app_notifications/native/hooks/usePreviewableMediaText.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function usePreviewableMediaText(arg1) {
        var2 = arg1;
        var5 = var2.previewableMedia;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot2;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = _closure2_slot0;
                var3 = var2.length;
                var2 = 0;
                if(!(var2 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = _closure2_slot0;
                var3 = var3.length;
                var7 = 1;
                if(!(var7 !== var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var3 = _closure2_slot0;
                var5 = var3.every;
                var4 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.type;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 1;
                    var3 = var3[var1];
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3);
                    var1 = var1.PreviewableMediaTypes;
                    var1 = var1.FILE;
                    var1 = var2 === var1;
                    return var1;
                };
                var4 = var5.bind(var3)(var4);
                var10 = var3.length;
                var3 = {};
                var11 = _closure1_slot0;
                var12 = _closure1_slot1;
                var5 = 2;
                var8 = var12[var5];
                var6 = undefined;
                var8 = var11.bind(var6)(var8);
                var9 = var8.intl;
                var8 = var9.formatToPlainString;
                var5 = var12[var5];
                var5 = var11.bind(var6)(var5);
                var5 = var5.t;
                if(var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var6 = var5["8/qgDd"];
                var4 = {};
                var4['count'] = var10;
                var4 = var8.bind(var9)(var6, var4);
                _fun0001_ip = 8; continue _fun0001;
case 6:
                var6 = var5.y0gZht;
                var5 = {};
                var5['count'] = var10;
                var4 = var8.bind(var9)(var6, var5);
case 8:
                var3['text'] = var4;
                var4 = null;
                var3['secondaryText'] = var4;
                return var3;
case 4:
                var1 = _closure2_slot0;
                var3 = var1[var2];
                var4 = var3.type;
                var5 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var7];
                var6 = undefined;
                var1 = var5.bind(var6)(var1);
                var1 = var1.PreviewableMediaTypes;
                var1 = var1.IMAGE;
                if(!(var1 !== var4)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
                var5 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var7];
                var1 = var5.bind(var6)(var1);
                var1 = var1.PreviewableMediaTypes;
                var1 = var1.VIDEO;
                if(!(var1 !== var4)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
                var5 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var7];
                var1 = var5.bind(var6)(var1);
                var1 = var1.PreviewableMediaTypes;
                var1 = var1.AUDIO;
                if(!(var1 !== var4)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
                var5 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var7];
                var1 = var5.bind(var6)(var1);
                var1 = var1.PreviewableMediaTypes;
                var1 = var1.FILE;
                if(!(var1 !== var4)) { _fun0001_ip = 15; continue _fun0001 }
case 16:
                var5 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var7];
                var1 = var5.bind(var6)(var1);
                var1 = var1.PreviewableMediaTypes;
                var1 = var1.STICKER;
                if(!(var1 !== var4)) { _fun0001_ip = 17; continue _fun0001 }
case 18:
                var5 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var7];
                var1 = var5.bind(var6)(var1);
                var1 = var1.PreviewableMediaTypes;
                var1 = var1.VOICE_MESSAGE;
                if(!(var1 !== var4)) { _fun0001_ip = 19; continue _fun0001 }
case 20:
                var5 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var7];
                var1 = var5.bind(var6)(var1);
                var1 = var1.PreviewableMediaTypes;
                var1 = var1.GIF;
                if(!(var1 !== var4)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
                var1 = {};
                var8 = _closure1_slot0;
                var9 = _closure1_slot1;
                var4 = 2;
                var5 = var9[var4];
                var5 = var8.bind(var6)(var5);
                var7 = var5.intl;
                var5 = var7.string;
                var4 = var9[var4];
                var4 = var8.bind(var6)(var4);
                var4 = var4.t;
                var4 = var4.sDqZHL;
                var4 = var5.bind(var7)(var4);
                var1['text'] = var4;
                var4 = null;
                var1['secondaryText'] = var4;
                return var1;
case 21:
                var1 = {};
                var8 = _closure1_slot0;
                var9 = _closure1_slot1;
                var4 = 2;
                var5 = var9[var4];
                var5 = var8.bind(var6)(var5);
                var7 = var5.intl;
                var5 = var7.string;
                var4 = var9[var4];
                var4 = var8.bind(var6)(var4);
                var4 = var4.t;
                var4 = var4.p0oZmy;
                var4 = var5.bind(var7)(var4);
                var1['text'] = var4;
                var4 = null;
                var1['secondaryText'] = var4;
                return var1;
case 19:
                var1 = {};
                var8 = _closure1_slot0;
                var9 = _closure1_slot1;
                var4 = 2;
                var5 = var9[var4];
                var5 = var8.bind(var6)(var5);
                var7 = var5.intl;
                var5 = var7.string;
                var4 = var9[var4];
                var4 = var8.bind(var6)(var4);
                var4 = var4.t;
                var4 = var4.slFYgi;
                var4 = var5.bind(var7)(var4);
                var1['text'] = var4;
                var4 = null;
                var1['secondaryText'] = var4;
                return var1;
case 17:
                var1 = {};
                var8 = _closure1_slot0;
                var9 = _closure1_slot1;
                var4 = 2;
                var5 = var9[var4];
                var5 = var8.bind(var6)(var5);
                var7 = var5.intl;
                var5 = var7.string;
                var4 = var9[var4];
                var4 = var8.bind(var6)(var4);
                var4 = var4.t;
                var4 = var4.dyquw8;
                var4 = var5.bind(var7)(var4);
                var1['text'] = var4;
                var4 = null;
                var1['secondaryText'] = var4;
                return var1;
case 15:
                var1 = {};
                var8 = _closure1_slot0;
                var9 = _closure1_slot1;
                var4 = 2;
                var5 = var9[var4];
                var5 = var8.bind(var6)(var5);
                var7 = var5.intl;
                var5 = var7.string;
                var4 = var9[var4];
                var4 = var8.bind(var6)(var4);
                var4 = var4.t;
                var4 = var4.mX8M6i;
                var4 = var5.bind(var7)(var4);
                var1['text'] = var4;
                var4 = var3.media;
                var4 = var4.filename;
                var1['secondaryText'] = var4;
                return var1;
case 13:
                var1 = {};
                var8 = _closure1_slot0;
                var9 = _closure1_slot1;
                var4 = 2;
                var5 = var9[var4];
                var5 = var8.bind(var6)(var5);
                var7 = var5.intl;
                var5 = var7.string;
                var4 = var9[var4];
                var4 = var8.bind(var6)(var4);
                var4 = var4.t;
                var4 = var4.FWqQt5;
                var4 = var5.bind(var7)(var4);
                var1['text'] = var4;
                var3 = var3.media;
                var3 = var3.filename;
                var1['secondaryText'] = var3;
                return var1;
case 11:
                var1 = {};
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 2;
                var4 = var8[var3];
                var4 = var7.bind(var6)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var3 = var8[var3];
                var3 = var7.bind(var6)(var3);
                var3 = var3.t;
                var3 = var3.KxO2Yl;
                var3 = var4.bind(var5)(var3);
                var1['text'] = var3;
                var3 = null;
                var1['secondaryText'] = var3;
                return var1;
case 9:
                var1 = {};
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var2 = 2;
                var3 = var7[var2];
                var3 = var5.bind(var6)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var5.bind(var6)(var2);
                var2 = var2.t;
                var2 = var2.tCcq5p;
                var2 = var3.bind(var4)(var2);
                var1['text'] = var2;
                var2 = null;
                var1['secondaryText'] = var2;
                return var1;
case 2:
                var1 = {'text': null, 'secondaryText': null};
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['usePreviewableMediaText'] = var2;
    return var1;
})();