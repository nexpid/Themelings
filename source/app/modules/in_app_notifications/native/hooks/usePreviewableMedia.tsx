// app/modules/in_app_notifications/native/hooks/usePreviewableMedia.tsx
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
            var9 = _closure1_slot9;
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
            var7 = _closure1_slot9;
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
    var _closure1_slot8 = var1;
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
    var _closure1_slot9 = var1;
    var1 = function getBasePreviewableMedia(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var2 = var1.message;
            var6 = var1.isForward;
            var1 = new Array(0);
            var3 = var2.attachments;
            var4 = var3.length;
            var3 = 0;
            if(!(var4 > var3)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var5 = var2.hasFlag;
            var4 = _closure1_slot5;
            var4 = var4.IS_VOICE_MESSAGE;
            var4 = var5.bind(var2)(var4);
            if(var4) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var5 = _closure1_slot8;
            var4 = var2.attachments;
            var19 = undefined;
            var18 = var5.bind(var19)(var4);
            var5 = var18.bind(var19)();
            var4 = var5.done;
            var17 = 'forward';
            var16 = global;
            var15 = '';
            var14 = '-';
            var12 = 3;
            var11 = 'lg';
            var10 = 5;
            var9 = 6;
            var8 = 4;
            if(var4) { _fun0004_ip = 36; continue _fun0004 }
case 40:
            var21 = var5.value;
            var22 = var21.filename;
            var20 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var8];
            var20 = var20.bind(var19)(var4);
            var4 = var20.isImageFile;
            var4 = var4.bind(var20)(var22);
            if(var4) { _fun0004_ip = 41; continue _fun0004 }
case 42:
            var20 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var8];
            var20 = var20.bind(var19)(var4);
            var4 = var20.isVideoFile;
            var4 = var4.bind(var20)(var22);
            if(var4) { _fun0004_ip = 43; continue _fun0004 }
case 44:
            var20 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var8];
            var20 = var20.bind(var19)(var4);
            var4 = var20.isAudioFile;
            var23 = var4.bind(var20)(var22);
            var20 = var1.push;
            var4 = {};
            var24 = var21.id;
            var22 = _closure1_slot7;
            if(var23) { _fun0004_ip = 45; continue _fun0004 }
case 46:
            var25 = var22.FILE;
            var23 = var16.HermesInternal;
            var23 = var23.concat;
            var23 = var23.bind(var15)(var24, var14, var25);
            var4['id'] = var23;
            var23 = _closure1_slot7;
            var23 = var23.FILE;
            var4['type'] = var23;
            var4['media'] = var21;
            var26 = _closure1_slot6;
            var25 = _closure1_slot0;
            var27 = _closure1_slot2;
            var23 = var27[var10];
            var23 = var25.bind(var19)(var23);
            var25 = var23.FileIcon;
            var23 = {};
            var23['size'] = var11;
            var28 = _closure1_slot1;
            var27 = var27[var9];
            var27 = var28.bind(var19)(var27);
            var27 = var27.colors;
            var27 = var27.ICON_SUBTLE;
            var23['color'] = var27;
            var23 = var26.bind(var19)(var25, var23);
            var4['icon'] = var23;
            var23 = null;
            if(!var6) { _fun0004_ip = 47; continue _fun0004 }
case 48:
            var23 = var17;
case 47:
            var4['parentType'] = var23;
            var23 = var20.bind(var1)(var4);
            _fun0004_ip = 49; continue _fun0004;
case 45:
            var23 = var22.AUDIO;
            var22 = var16.HermesInternal;
            var22 = var22.concat;
            var22 = var22.bind(var15)(var24, var14, var23);
            var4['id'] = var22;
            var22 = _closure1_slot7;
            var22 = var22.AUDIO;
            var4['type'] = var22;
            var4['media'] = var21;
            var24 = _closure1_slot6;
            var23 = _closure1_slot0;
            var22 = _closure1_slot2;
            var22 = var22[var12];
            var22 = var23.bind(var19)(var22);
            var23 = var22.CirclePlayIcon;
            var22 = {'size': 'lg', 'color': 'background-brand', 'secondaryColor': 'white'};
            var22 = var24.bind(var19)(var23, var22);
            var4['icon'] = var22;
            var22 = null;
            if(!var6) { _fun0004_ip = 50; continue _fun0004 }
case 51:
            var22 = var17;
case 50:
            var4['parentType'] = var22;
            var4 = var20.bind(var1)(var4);
            _fun0004_ip = 49; continue _fun0004;
case 43:
            var20 = var1.push;
            var4 = {};
            var24 = var21.id;
            var22 = _closure1_slot7;
            var23 = var22.VIDEO;
            var22 = var16.HermesInternal;
            var22 = var22.concat;
            var22 = var22.bind(var15)(var24, var14, var23);
            var4['id'] = var22;
            var22 = _closure1_slot7;
            var22 = var22.VIDEO;
            var4['type'] = var22;
            var4['media'] = var21;
            var22 = null;
            if(!var6) { _fun0004_ip = 52; continue _fun0004 }
case 53:
            var22 = var17;
case 52:
            var4['parentType'] = var22;
            var4 = var20.bind(var1)(var4);
            _fun0004_ip = 49; continue _fun0004;
case 41:
            var20 = var1.push;
            var4 = {};
            var24 = var21.id;
            var22 = _closure1_slot7;
            var23 = var22.IMAGE;
            var22 = var16.HermesInternal;
            var22 = var22.concat;
            var22 = var22.bind(var15)(var24, var14, var23);
            var4['id'] = var22;
            var22 = _closure1_slot7;
            var22 = var22.IMAGE;
            var4['type'] = var22;
            var4['media'] = var21;
            var21 = null;
            if(!var6) { _fun0004_ip = 54; continue _fun0004 }
case 55:
            var21 = var17;
case 54:
            var4['parentType'] = var21;
            var4 = var20.bind(var1)(var4);
case 49:
            var20 = var18.bind(var19)();
            var4 = var20.done;
            var5 = var20;
            if(var4) { _fun0004_ip = 36; continue _fun0004 }
case 56:
            _fun0004_ip = 40; continue _fun0004;
case 38:
            var4 = var2.attachments;
            var8 = var4[var3];
            var5 = var1.push;
            var4 = {};
            var13 = var8.id;
            var9 = _closure1_slot7;
            var12 = var9.VOICE_MESSAGE;
            var9 = global;
            var9 = var9.HermesInternal;
            var11 = var9.concat;
            var10 = '';
            var9 = '-';
            var9 = var11.bind(var10)(var13, var9, var12);
            var4['id'] = var9;
            var9 = _closure1_slot7;
            var9 = var9.VOICE_MESSAGE;
            var4['type'] = var9;
            var4['media'] = var8;
            var10 = _closure1_slot6;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var7 = 3;
            var7 = var9[var7];
            var9 = undefined;
            var7 = var8.bind(var9)(var7);
            var8 = var7.CirclePlayIcon;
            var7 = {'size': 'lg', 'color': 'background-brand', 'secondaryColor': 'white'};
            var7 = var10.bind(var9)(var8, var7);
            var4['icon'] = var7;
            var7 = null;
            if(!var6) { _fun0004_ip = 57; continue _fun0004 }
case 58:
            var7 = 'forward';
case 57:
            var4['parentType'] = var7;
            var4 = var5.bind(var1)(var4);
case 36:
            var5 = _closure1_slot8;
            var4 = var2.embeds;
            var14 = undefined;
            var11 = var5.bind(var14)(var4);
            var10 = var11.bind(var14)();
            var7 = var10.done;
            var5 = 'forward';
            var9 = global;
            var13 = '';
            var12 = '-';
            if(var7) { _fun0004_ip = 59; continue _fun0004 }
case 60:
            var16 = var10.value;
            var15 = var16.type;
            var7 = _closure1_slot4;
            var7 = var7.GIFV;
            if(!(var15 === var7)) { _fun0004_ip = 61; continue _fun0004 }
case 62:
            var15 = var1.push;
            var7 = {};
            var19 = var16.id;
            var17 = _closure1_slot7;
            var18 = var17.GIF;
            var17 = var9.HermesInternal;
            var17 = var17.concat;
            var17 = var17.bind(var13)(var19, var12, var18);
            var7['id'] = var17;
            var17 = _closure1_slot7;
            var17 = var17.GIF;
            var7['type'] = var17;
            var7['media'] = var16;
            var16 = null;
            if(!var6) { _fun0004_ip = 63; continue _fun0004 }
case 64:
            var16 = var5;
case 63:
            var7['parentType'] = var16;
            var7 = var15.bind(var1)(var7);
case 61:
            var15 = var11.bind(var14)();
            var7 = var15.done;
            var10 = var15;
            if(!var7) { _fun0004_ip = 60; continue _fun0004 }
case 59:
            var7 = var2.stickerItems;
            var7 = var7.length;
            if(!(var7 > var3)) { _fun0004_ip = 65; continue _fun0004 }
case 66:
            var2 = var2.stickerItems;
            var7 = var2[var3];
            var3 = var1.push;
            var2 = {};
            var11 = var7.id;
            var10 = _closure1_slot7;
            var10 = var10.STICKER;
            var9 = var9.HermesInternal;
            var9 = var9.concat;
            var9 = var9.bind(var13)(var11, var12, var10);
            var2['id'] = var9;
            var8 = _closure1_slot7;
            var8 = var8.STICKER;
            var2['type'] = var8;
            var2['media'] = var7;
            var4 = null;
            if(!var6) { _fun0004_ip = 67; continue _fun0004 }
case 68:
            var4 = var5;
case 67:
            var2['parentType'] = var4;
            var2 = var3.bind(var1)(var2);
case 65:
            return var1;
        }
    };
    var _closure1_slot10 = var1;
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
    var5 = var4.MessageEmbedTypes;
    var _closure1_slot4 = var5;
    var4 = var4.MessageFlags;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
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
    var5 = 'gif';
    var4['GIF'] = var5;
    var5 = 'voice_message';
    var4['VOICE_MESSAGE'] = var5;
    var _closure1_slot7 = var4;
    var5 = 8;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/in_app_notifications/native/hooks/usePreviewableMedia.tsx';
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
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var1 = new Array(0);
                var5 = _closure1_slot10;
                var3 = {};
                var7 = _closure2_slot0;
                var3['message'] = var7;
                var4 = false;
                var3['isForward'] = var4;
                var4 = undefined;
                var11 = var5.bind(var4)(var3);
                var8 = var1.push;
                var3 = new Array(0);
                var5 = 0;
                var12 = var3;
                var10 = 0;
                var9 = arraySpread(var12, var11, var10);
                var12 = var8;
                var11 = var3;
                var10 = var1;
                var3 = apply(var12, var11, var10);
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var3 = 7;
                var3 = var9[var3];
                var3 = var8.bind(var4)(var3);
                var3 = var3.bind(var4)(var7);
                if(!var3) { _fun0005_ip = 69; continue _fun0005 }
case 70:
                var3 = _closure2_slot0;
                var3 = var3.messageSnapshots;
                var3 = var3.length;
                if(!(var3 > var5)) { _fun0005_ip = 69; continue _fun0005 }
case 71:
                var3 = _closure1_slot10;
                var2 = {};
                var6 = _closure2_slot0;
                var6 = var6.messageSnapshots;
                var6 = var6[var5];
                var6 = var6.message;
                var2['message'] = var6;
                var6 = true;
                var2['isForward'] = var6;
                var11 = var3.bind(var4)(var2);
                var3 = var1.push;
                var2 = new Array(0);
                var12 = var2;
                var10 = 0;
                var4 = arraySpread(var12, var11, var10);
                var12 = var3;
                var11 = var2;
                var10 = var1;
                var2 = apply(var12, var11, var10);
case 69:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['usePreviewableMedia'] = var2;
    return var1;
})();