// app/modules/in_app_notifications/native/usePreviewableMedia.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3["@@iterator"];
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot8;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot8;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var5 = var7[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var5);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.MessageFlags;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = {};
    var5 = 'image';
    var4['IMAGE'] = var5;
    var5 = 'video';
    var4['VIDEO'] = var5;
    var5 = 'audio';
    var4['AUDIO'] = var5;
    var5 = 'file';
    var4['FILE'] = var5;
    var5 = 'sticker';
    var4['STICKER'] = var5;
    var5 = 'embed';
    var4['EMBED'] = var5;
    var5 = 'voice_message';
    var4['VOICE_MESSAGE'] = var5;
    var _closure1_slot6 = var4;
    var5 = 7;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/in_app_notifications/native/usePreviewableMedia.tsx';
    var5 = var6.bind(var7)(var5);
    var3['PreviewableMediaTypes'] = var4;
    var2 = function usePreviewableMedia(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var1 = new Array(0);
                var3 = _closure2_slot0;
                var3 = var3.attachments;
                var3 = var3.length;
                var4 = 0;
                if(!(var3 > var4)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
                var6 = _closure2_slot0;
                var5 = var6.hasFlag;
                var3 = _closure1_slot4;
                var3 = var3.IS_VOICE_MESSAGE;
                var3 = var5.bind(var6)(var3);
                if(var3) { _fun0004_ip = 38; continue _fun0004 }
case 39:
                var5 = _closure1_slot7;
                var3 = _closure2_slot0;
                var3 = var3.attachments;
                var13 = undefined;
                var12 = var5.bind(var13)(var3);
                var5 = var12.bind(var13)();
                var3 = var5.done;
                var11 = 3;
                var10 = 'lg';
                var8 = 4;
                var7 = 6;
                var6 = 5;
                if(var3) { _fun0004_ip = 36; continue _fun0004 }
case 40:
                var15 = var5.value;
                var16 = var15.filename;
                var14 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var6];
                var14 = var14.bind(var13)(var3);
                var3 = var14.isImageFile;
                var3 = var3.bind(var14)(var16);
                if(var3) { _fun0004_ip = 41; continue _fun0004 }
case 42:
                var14 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var6];
                var14 = var14.bind(var13)(var3);
                var3 = var14.isVideoFile;
                var3 = var3.bind(var14)(var16);
                if(var3) { _fun0004_ip = 43; continue _fun0004 }
case 44:
                var14 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var6];
                var14 = var14.bind(var13)(var3);
                var3 = var14.isAudioFile;
                var17 = var3.bind(var14)(var16);
                var14 = var1.push;
                var3 = {};
                var16 = _closure1_slot6;
                if(var17) { _fun0004_ip = 45; continue _fun0004 }
case 46:
                var17 = var16.FILE;
                var3['type'] = var17;
                var3['media'] = var15;
                var19 = _closure1_slot5;
                var18 = _closure1_slot0;
                var20 = _closure1_slot2;
                var17 = var20[var7];
                var17 = var18.bind(var13)(var17);
                var18 = var17.FileIcon;
                var17 = {};
                var17['size'] = var10;
                var21 = _closure1_slot1;
                var20 = var20[var8];
                var20 = var21.bind(var13)(var20);
                var20 = var20.colors;
                var20 = var20.ICON_SUBTLE;
                var17['color'] = var20;
                var17 = var19.bind(var13)(var18, var17);
                var3['icon'] = var17;
                var17 = var14.bind(var1)(var3);
                _fun0004_ip = 47; continue _fun0004;
case 45:
                var16 = var16.AUDIO;
                var3['type'] = var16;
                var3['media'] = var15;
                var18 = _closure1_slot5;
                var17 = _closure1_slot0;
                var19 = _closure1_slot2;
                var16 = var19[var11];
                var16 = var17.bind(var13)(var16);
                var17 = var16.WaveformIcon;
                var16 = {};
                var16['size'] = var10;
                var20 = _closure1_slot1;
                var19 = var19[var8];
                var19 = var20.bind(var13)(var19);
                var19 = var19.colors;
                var19 = var19.TEXT_BRAND;
                var16['color'] = var19;
                var16 = var18.bind(var13)(var17, var16);
                var3['icon'] = var16;
                var3 = var14.bind(var1)(var3);
                _fun0004_ip = 47; continue _fun0004;
case 43:
                var14 = var1.push;
                var3 = {};
                var16 = _closure1_slot6;
                var16 = var16.VIDEO;
                var3['type'] = var16;
                var3['media'] = var15;
                var3 = var14.bind(var1)(var3);
                _fun0004_ip = 47; continue _fun0004;
case 41:
                var14 = var1.push;
                var3 = {};
                var16 = _closure1_slot6;
                var16 = var16.IMAGE;
                var3['type'] = var16;
                var3['media'] = var15;
                var3 = var14.bind(var1)(var3);
case 47:
                var14 = var12.bind(var13)();
                var3 = var14.done;
                var5 = var14;
                if(var3) { _fun0004_ip = 36; continue _fun0004 }
case 48:
                _fun0004_ip = 40; continue _fun0004;
case 38:
                var3 = _closure2_slot0;
                var3 = var3.attachments;
                var5 = var3[var4];
                var4 = var1.push;
                var3 = {};
                var6 = _closure1_slot6;
                var6 = var6.VOICE_MESSAGE;
                var3['type'] = var6;
                var3['media'] = var5;
                var8 = _closure1_slot5;
                var6 = _closure1_slot0;
                var11 = _closure1_slot2;
                var5 = 3;
                var5 = var11[var5];
                var7 = undefined;
                var5 = var6.bind(var7)(var5);
                var6 = var5.WaveformIcon;
                var5 = {};
                var10 = 'lg';
                var5['size'] = var10;
                var10 = _closure1_slot1;
                var9 = 4;
                var9 = var11[var9];
                var9 = var10.bind(var7)(var9);
                var9 = var9.colors;
                var9 = var9.TEXT_BRAND;
                var5['color'] = var9;
                var5 = var8.bind(var7)(var6, var5);
                var3['icon'] = var5;
                var3 = var4.bind(var1)(var3);
case 36:
                var4 = _closure1_slot7;
                var3 = _closure2_slot0;
                var3 = var3.embeds;
                var5 = undefined;
                var8 = var4.bind(var5)(var3);
                var4 = var8.bind(var5)();
                var3 = var4.done;
                var7 = null;
                if(var3) { _fun0004_ip = 49; continue _fun0004 }
case 50:
                var10 = var4.value;
                var3 = var10.image;
                var3 = var7 == var3;
                if(!var3) { _fun0004_ip = 51; continue _fun0004 }
case 52:
                var9 = var10.video;
                var3 = var7 == var9;
case 51:
                if(!var3) { _fun0004_ip = 53; continue _fun0004 }
case 54:
                var9 = var10.thumbnail;
                var3 = var7 == var9;
case 53:
                if(var3) { _fun0004_ip = 55; continue _fun0004 }
case 56:
                var9 = var1.push;
                var3 = {};
                var11 = _closure1_slot6;
                var11 = var11.EMBED;
                var3['type'] = var11;
                var3['media'] = var10;
                var3 = var9.bind(var1)(var3);
case 55:
                var9 = var8.bind(var5)();
                var3 = var9.done;
                var4 = var9;
                if(!var3) { _fun0004_ip = 50; continue _fun0004 }
case 49:
                var3 = _closure1_slot7;
                var2 = _closure2_slot0;
                var2 = var2.stickerItems;
                var4 = var3.bind(var5)(var2);
                var3 = var4.bind(var5)();
                var2 = var3.done;
                if(var2) { _fun0004_ip = 57; continue _fun0004 }
case 58:
                var8 = var3.value;
                var7 = var1.push;
                var2 = {};
                var9 = _closure1_slot6;
                var9 = var9.STICKER;
                var2['type'] = var9;
                var2['media'] = var8;
                var2 = var7.bind(var1)(var2);
                var7 = var4.bind(var5)();
                var2 = var7.done;
                var3 = var7;
                if(!var2) { _fun0004_ip = 58; continue _fun0004 }
case 57:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['usePreviewableMedia'] = var2;
    return var1;
})();