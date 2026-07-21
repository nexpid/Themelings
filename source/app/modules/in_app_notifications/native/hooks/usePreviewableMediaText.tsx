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
        var6 = var2.author;
        var _closure2_slot1 = var6;
        var4 = _closure1_slot2;
        var3 = var4.useMemo;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = _closure2_slot0;
                var1 = var1.length;
                var2 = 0;
                if(!(var2 !== var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var1 = _closure2_slot0;
                var1 = var1.length;
                var6 = 1;
                if(!(var6 !== var1)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var1 = _closure2_slot0;
                var4 = var1.every;
                var3 = function(arg1) {
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
                var7 = var4.bind(var1)(var3);
                var12 = var1.length;
                var1 = _closure2_slot1;
                var3 = null;
                if(!(var3 == var1)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var1 = 2;
                var5 = var11[var1];
                var4 = undefined;
                var5 = var10.bind(var4)(var5);
                var9 = var5.intl;
                var5 = var9.formatToPlainString;
                var1 = var11[var1];
                var1 = var10.bind(var4)(var1);
                var1 = var1.t;
                var4 = var1.y0gZht;
                var1 = {};
                var1['count'] = var12;
                var5 = var5.bind(var9)(var4, var1);
                _fun0001_ip = 8; continue _fun0001;
case 6:
                var11 = _closure1_slot0;
                var13 = _closure1_slot1;
                var1 = 2;
                var9 = var13[var1];
                var4 = undefined;
                var9 = var11.bind(var4)(var9);
                var10 = var9.intl;
                var9 = var10.format;
                var1 = var13[var1];
                var1 = var11.bind(var4)(var1);
                var1 = var1.t;
                var4 = var1["319zWs"];
                var1 = {};
                var1['count'] = var12;
                var11 = _closure2_slot1;
                var11 = var11.nick;
                var1['username'] = var11;
                var5 = var9.bind(var10)(var4, var1);
case 8:
                var1 = _closure2_slot1;
                if(!(var3 == var1)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
                var11 = _closure1_slot0;
                var13 = _closure1_slot1;
                var1 = 2;
                var9 = var13[var1];
                var4 = undefined;
                var9 = var11.bind(var4)(var9);
                var10 = var9.intl;
                var9 = var10.formatToPlainString;
                var1 = var13[var1];
                var1 = var11.bind(var4)(var1);
                var1 = var1.t;
                var4 = var1["8/qgDd"];
                var1 = {};
                var1['count'] = var12;
                var4 = var9.bind(var10)(var4, var1);
                _fun0001_ip = 11; continue _fun0001;
case 9:
                var13 = _closure1_slot0;
                var14 = _closure1_slot1;
                var1 = 2;
                var10 = var14[var1];
                var9 = undefined;
                var10 = var13.bind(var9)(var10);
                var11 = var10.intl;
                var10 = var11.format;
                var1 = var14[var1];
                var1 = var13.bind(var9)(var1);
                var1 = var1.t;
                var9 = var1["1OSGGk"];
                var1 = {};
                var1['count'] = var12;
                var12 = _closure2_slot1;
                var12 = var12.nick;
                var1['username'] = var12;
                var4 = var10.bind(var11)(var9, var1);
case 11:
                var1 = {};
                if(!var7) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                var4 = var5;
case 12:
                var1['text'] = var4;
                var1['secondaryText'] = var3;
                return var1;
case 4:
                var1 = _closure2_slot0;
                var3 = var1[var2];
                var2 = var3.type;
                var5 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var6];
                var9 = undefined;
                var1 = var5.bind(var9)(var1);
                var1 = var1.PreviewableMediaTypes;
                var1 = var1.IMAGE;
                if(!(var1 !== var2)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
                var5 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var6];
                var1 = var5.bind(var9)(var1);
                var1 = var1.PreviewableMediaTypes;
                var1 = var1.VIDEO;
                if(!(var1 !== var2)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
                var5 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var6];
                var1 = var5.bind(var9)(var1);
                var1 = var1.PreviewableMediaTypes;
                var1 = var1.AUDIO;
                if(!(var1 !== var2)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
                var5 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var6];
                var1 = var5.bind(var9)(var1);
                var1 = var1.PreviewableMediaTypes;
                var1 = var1.FILE;
                if(!(var1 !== var2)) { _fun0001_ip = 20; continue _fun0001 }
case 21:
                var5 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var6];
                var1 = var5.bind(var9)(var1);
                var1 = var1.PreviewableMediaTypes;
                var1 = var1.STICKER;
                if(!(var1 !== var2)) { _fun0001_ip = 22; continue _fun0001 }
case 23:
                var5 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var6];
                var1 = var5.bind(var9)(var1);
                var1 = var1.PreviewableMediaTypes;
                var1 = var1.VOICE_MESSAGE;
                if(!(var1 !== var2)) { _fun0001_ip = 24; continue _fun0001 }
case 25:
                var5 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var6];
                var1 = var5.bind(var9)(var1);
                var1 = var1.PreviewableMediaTypes;
                var1 = var1.GIF;
                if(!(var1 !== var2)) { _fun0001_ip = 26; continue _fun0001 }
case 27:
                var1 = _closure2_slot1;
                var5 = null;
                if(!(var5 == var1)) { _fun0001_ip = 28; continue _fun0001 }
case 29:
                var1 = {};
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var2 = 2;
                var6 = var11[var2];
                var6 = var10.bind(var9)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var2 = var11[var2];
                var2 = var10.bind(var9)(var2);
                var2 = var2.t;
                var2 = var2.sDqZHL;
                var2 = var6.bind(var7)(var2);
                var1['text'] = var2;
                var1['secondaryText'] = var5;
                _fun0001_ip = 30; continue _fun0001;
case 28:
                var2 = {};
                var7 = _closure1_slot0;
                var12 = _closure1_slot1;
                var6 = 2;
                var10 = var12[var6];
                var10 = var7.bind(var9)(var10);
                var11 = var10.intl;
                var10 = var11.formatToPlainString;
                var6 = var12[var6];
                var6 = var7.bind(var9)(var6);
                var6 = var6.t;
                var7 = var6["7FJeVi"];
                var6 = {};
                var12 = _closure2_slot1;
                var12 = var12.nick;
                var6['username'] = var12;
                var6 = var10.bind(var11)(var7, var6);
                var2['text'] = var6;
                var2['secondaryText'] = var5;
                var1 = var2;
case 30:
                return var1;
case 26:
                var1 = _closure2_slot1;
                var5 = null;
                if(!(var5 == var1)) { _fun0001_ip = 31; continue _fun0001 }
case 32:
                var1 = {};
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var2 = 2;
                var6 = var11[var2];
                var6 = var10.bind(var9)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var2 = var11[var2];
                var2 = var10.bind(var9)(var2);
                var2 = var2.t;
                var2 = var2.p0oZmy;
                var2 = var6.bind(var7)(var2);
                var1['text'] = var2;
                var1['secondaryText'] = var5;
                _fun0001_ip = 33; continue _fun0001;
case 31:
                var2 = {};
                var7 = _closure1_slot0;
                var12 = _closure1_slot1;
                var6 = 2;
                var10 = var12[var6];
                var10 = var7.bind(var9)(var10);
                var11 = var10.intl;
                var10 = var11.formatToPlainString;
                var6 = var12[var6];
                var6 = var7.bind(var9)(var6);
                var6 = var6.t;
                var7 = var6.mikhon;
                var6 = {};
                var12 = _closure2_slot1;
                var12 = var12.nick;
                var6['username'] = var12;
                var6 = var10.bind(var11)(var7, var6);
                var2['text'] = var6;
                var2['secondaryText'] = var5;
                var1 = var2;
case 33:
                return var1;
case 24:
                var1 = _closure2_slot1;
                var5 = null;
                if(!(var5 == var1)) { _fun0001_ip = 34; continue _fun0001 }
case 35:
                var1 = {};
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var2 = 2;
                var6 = var11[var2];
                var6 = var10.bind(var9)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var2 = var11[var2];
                var2 = var10.bind(var9)(var2);
                var2 = var2.t;
                var2 = var2.slFYgi;
                var2 = var6.bind(var7)(var2);
                var1['text'] = var2;
                var1['secondaryText'] = var5;
                _fun0001_ip = 36; continue _fun0001;
case 34:
                var2 = {};
                var7 = _closure1_slot0;
                var12 = _closure1_slot1;
                var6 = 2;
                var10 = var12[var6];
                var10 = var7.bind(var9)(var10);
                var11 = var10.intl;
                var10 = var11.formatToPlainString;
                var6 = var12[var6];
                var6 = var7.bind(var9)(var6);
                var6 = var6.t;
                var7 = var6.Y7wlOj;
                var6 = {};
                var12 = _closure2_slot1;
                var12 = var12.nick;
                var6['username'] = var12;
                var6 = var10.bind(var11)(var7, var6);
                var2['text'] = var6;
                var2['secondaryText'] = var5;
                var1 = var2;
case 36:
                return var1;
case 22:
                var1 = _closure2_slot1;
                var5 = null;
                if(!(var5 == var1)) { _fun0001_ip = 37; continue _fun0001 }
case 38:
                var1 = {};
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var2 = 2;
                var6 = var11[var2];
                var6 = var10.bind(var9)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var2 = var11[var2];
                var2 = var10.bind(var9)(var2);
                var2 = var2.t;
                var2 = var2.dyquw8;
                var2 = var6.bind(var7)(var2);
                var1['text'] = var2;
                var1['secondaryText'] = var5;
                _fun0001_ip = 39; continue _fun0001;
case 37:
                var2 = {};
                var7 = _closure1_slot0;
                var12 = _closure1_slot1;
                var6 = 2;
                var10 = var12[var6];
                var10 = var7.bind(var9)(var10);
                var11 = var10.intl;
                var10 = var11.formatToPlainString;
                var6 = var12[var6];
                var6 = var7.bind(var9)(var6);
                var6 = var6.t;
                var7 = var6["3iI/fs"];
                var6 = {};
                var12 = _closure2_slot1;
                var12 = var12.nick;
                var6['username'] = var12;
                var6 = var10.bind(var11)(var7, var6);
                var2['text'] = var6;
                var2['secondaryText'] = var5;
                var1 = var2;
case 39:
                return var1;
case 20:
                var2 = _closure2_slot1;
                var1 = null;
                if(!(var1 == var2)) { _fun0001_ip = 40; continue _fun0001 }
case 41:
                var1 = {};
                var7 = _closure1_slot0;
                var10 = _closure1_slot1;
                var2 = 2;
                var5 = var10[var2];
                var5 = var7.bind(var9)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var2 = var10[var2];
                var2 = var7.bind(var9)(var2);
                var2 = var2.t;
                var2 = var2.mX8M6i;
                var2 = var5.bind(var6)(var2);
                var1['text'] = var2;
                var2 = var3.media;
                var2 = var2.filename;
                var1['secondaryText'] = var2;
                _fun0001_ip = 42; continue _fun0001;
case 40:
                var2 = {};
                var6 = _closure1_slot0;
                var11 = _closure1_slot1;
                var5 = 2;
                var7 = var11[var5];
                var7 = var6.bind(var9)(var7);
                var10 = var7.intl;
                var7 = var10.formatToPlainString;
                var5 = var11[var5];
                var5 = var6.bind(var9)(var5);
                var5 = var5.t;
                var6 = var5.ifW/ef;
                var5 = {};
                var11 = _closure2_slot1;
                var11 = var11.nick;
                var5['username'] = var11;
                var5 = var7.bind(var10)(var6, var5);
                var2['text'] = var5;
                var5 = var3.media;
                var5 = var5.filename;
                var2['secondaryText'] = var5;
                var1 = var2;
case 42:
                return var1;
case 18:
                var2 = _closure2_slot1;
                var1 = null;
                if(!(var1 == var2)) { _fun0001_ip = 43; continue _fun0001 }
case 44:
                var1 = {};
                var7 = _closure1_slot0;
                var10 = _closure1_slot1;
                var2 = 2;
                var5 = var10[var2];
                var5 = var7.bind(var9)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var2 = var10[var2];
                var2 = var7.bind(var9)(var2);
                var2 = var2.t;
                var2 = var2.FWqQt5;
                var2 = var5.bind(var6)(var2);
                var1['text'] = var2;
                var2 = var3.media;
                var2 = var2.filename;
                var1['secondaryText'] = var2;
                _fun0001_ip = 45; continue _fun0001;
case 43:
                var2 = {};
                var6 = _closure1_slot0;
                var11 = _closure1_slot1;
                var5 = 2;
                var7 = var11[var5];
                var7 = var6.bind(var9)(var7);
                var10 = var7.intl;
                var7 = var10.formatToPlainString;
                var5 = var11[var5];
                var5 = var6.bind(var9)(var5);
                var5 = var5.t;
                var6 = var5.HADQ6n;
                var5 = {};
                var11 = _closure2_slot1;
                var11 = var11.nick;
                var5['username'] = var11;
                var5 = var7.bind(var10)(var6, var5);
                var2['text'] = var5;
                var3 = var3.media;
                var3 = var3.filename;
                var2['secondaryText'] = var3;
                var1 = var2;
case 45:
                return var1;
case 16:
                var1 = _closure2_slot1;
                var3 = null;
                if(!(var3 == var1)) { _fun0001_ip = 46; continue _fun0001 }
case 47:
                var1 = {};
                var7 = _closure1_slot0;
                var10 = _closure1_slot1;
                var2 = 2;
                var5 = var10[var2];
                var5 = var7.bind(var9)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var2 = var10[var2];
                var2 = var7.bind(var9)(var2);
                var2 = var2.t;
                var2 = var2.KxO2Yl;
                var2 = var5.bind(var6)(var2);
                var1['text'] = var2;
                var1['secondaryText'] = var3;
                _fun0001_ip = 48; continue _fun0001;
case 46:
                var2 = {};
                var6 = _closure1_slot0;
                var11 = _closure1_slot1;
                var5 = 2;
                var7 = var11[var5];
                var7 = var6.bind(var9)(var7);
                var10 = var7.intl;
                var7 = var10.formatToPlainString;
                var5 = var11[var5];
                var5 = var6.bind(var9)(var5);
                var5 = var5.t;
                var6 = var5.zqhHWH;
                var5 = {};
                var11 = _closure2_slot1;
                var11 = var11.nick;
                var5['username'] = var11;
                var5 = var7.bind(var10)(var6, var5);
                var2['text'] = var5;
                var2['secondaryText'] = var3;
                var1 = var2;
case 48:
                return var1;
case 14:
                var1 = _closure2_slot1;
                var3 = null;
                if(!(var3 == var1)) { _fun0001_ip = 49; continue _fun0001 }
case 50:
                var1 = {};
                var7 = _closure1_slot0;
                var10 = _closure1_slot1;
                var2 = 2;
                var5 = var10[var2];
                var5 = var7.bind(var9)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var2 = var10[var2];
                var2 = var7.bind(var9)(var2);
                var2 = var2.t;
                var2 = var2.tCcq5p;
                var2 = var5.bind(var6)(var2);
                var1['text'] = var2;
                var1['secondaryText'] = var3;
                _fun0001_ip = 51; continue _fun0001;
case 49:
                var2 = {};
                var5 = _closure1_slot0;
                var10 = _closure1_slot1;
                var4 = 2;
                var6 = var10[var4];
                var6 = var5.bind(var9)(var6);
                var7 = var6.intl;
                var6 = var7.formatToPlainString;
                var4 = var10[var4];
                var4 = var5.bind(var9)(var4);
                var4 = var4.t;
                var5 = var4.pTiyNB;
                var4 = {};
                var8 = _closure2_slot1;
                var8 = var8.nick;
                var4['username'] = var8;
                var4 = var6.bind(var7)(var5, var4);
                var2['text'] = var4;
                var2['secondaryText'] = var3;
                var1 = var2;
case 51:
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