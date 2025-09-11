// app/modules/polls/native/useRenderPollAnswerImage.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ActivityIndicator;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.DraftType;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.EMOJI_URL_BASE_SIZE;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot9 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/polls/native/useRenderPollAnswerImage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useRenderPollAnswerImage(arg1, arg2, arg3, arg4, arg5) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var12 = arg3;
            var10 = arg4;
            var11 = arg5;
            var1 = arg1;
            var _closure2_slot0 = var1;
            var1 = arg2;
            var _closure2_slot1 = var1;
            var _closure2_slot2 = var12;
            var _closure2_slot3 = var10;
            var _closure2_slot4 = var11;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 7;
            var1 = var3[var1];
            var9 = undefined;
            var6 = var2.bind(var9)(var1);
            var3 = var6.useStateFromStores;
            var1 = _closure1_slot7;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var5 = _closure1_slot7;
                var4 = var5.getUpload;
                var3 = _closure2_slot0;
                var2 = _closure2_slot1;
                var1 = _closure1_slot6;
                var1 = var1.Poll;
                var1 = var4.bind(var5)(var3, var2, var1);
                return var1;
            };
            var3 = var3.bind(var6)(var2, var1);
            var _closure2_slot5 = var3;
            var2 = _closure1_slot4;
            var1 = var2.useState;
            var6 = var1.bind(var2)();
            var2 = _closure1_slot3;
            var1 = 2;
            var2 = var2.bind(var9)(var6, var1);
            var1 = 0;
            var8 = var2[var1];
            var _closure2_slot6 = var8;
            var1 = 1;
            var2 = var2[var1];
            var7 = null;
            var1 = var7 == var12;
            var6 = undefined;
            if(var1) { _fun0001_ip = 170; continue _fun0001 }
 150:
            var1 = var12.mediaAttachmentState;
            var7 = var7 == var1;
            var6 = undefined;
            if(var7) { _fun0001_ip = 170; continue _fun0001 }
 165:
            var6 = var1.status;
 170:
            var7 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 8;
            var1 = var13[var1];
            var1 = var7.bind(var9)(var1);
            var1 = var1.PollMediaUploadAttachmentStatus;
            var1 = var1.PREPARING;
            var9 = var6 === var1;
            var _closure2_slot7 = var9;
            var1 = {};
            var7 = _closure1_slot4;
            var6 = var7.useMemo;
            var5 = new Array(6);
            var5[0] = var12;
            var5[1] = var11;
            var5[2] = var10;
            var5[3] = var3;
            var5[4] = var9;
            var5[5] = var8;
            var4 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot7;
                    if(var2) { _fun0002_ip = 375; continue _fun0002 }
 13:
                    var2 = _closure2_slot5;
                    var3 = null;
                    if(!(var3 == var2)) { _fun0002_ip = 280; continue _fun0002 }
 26:
                    var2 = _closure2_slot2;
                    var4 = var3 == var2;
                    var6 = undefined;
                    var2 = undefined;
                    if(var4) { _fun0002_ip = 50; continue _fun0002 }
 41:
                    var4 = _closure2_slot2;
                    var2 = var4.emoji;
 50:
                    if(!(var3 == var2)) { _fun0002_ip = 56; continue _fun0002 }
 54:
                    return var6;
 56:
                    var2 = _closure2_slot2;
                    var12 = var2.emoji;
                    var5 = _closure1_slot9;
                    var4 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var2 = 10;
                    var2 = var10[var2];
                    var4 = var4.bind(var6)(var2);
                    var2 = {};
                    var7 = {};
                    var8 = _closure2_slot4;
                    var7['width'] = var8;
                    var7['height'] = var8;
                    var2['fastImageStyle'] = var7;
                    var7 = {};
                    var7['fontSize'] = var8;
                    var2['textEmojiStyle'] = var7;
                    var8 = var12.type;
                    var9 = _closure1_slot0;
                    var7 = 11;
                    var7 = var10[var7];
                    var7 = var9.bind(var6)(var7);
                    var7 = var7.EmojiTypes;
                    var7 = var7.UNICODE;
                    if(!(var8 !== var7)) { _fun0002_ip = 169; continue _fun0002 }
 162:
                    var8 = var12.name;
                    _fun0002_ip = 174; continue _fun0002;
 169:
                    var8 = var12.surrogates;
 174:
                    var9 = var3 != var8;
                    var7 = '';
                    if(!var9) { _fun0002_ip = 188; continue _fun0002 }
 185:
                    var7 = var8;
 188:
                    var2['name'] = var7;
                    var7 = var12.id;
                    var8 = var3 != var7;
                    var7 = undefined;
                    if(!var8) { _fun0002_ip = 267; continue _fun0002 }
 206:
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var8 = 12;
                    var8 = var10[var8];
                    var10 = var9.bind(var6)(var8);
                    var9 = var10.getEmojiURL;
                    var8 = {};
                    var13 = var12.id;
                    var8['id'] = var13;
                    var12 = var12.animated;
                    var8['animated'] = var12;
                    var11 = _closure1_slot8;
                    var8['size'] = var11;
                    var7 = var9.bind(var10)(var8);
 267:
                    var2['src'] = var7;
                    var2 = var5.bind(var6)(var4, var2);
                    return var2;
 280:
                    var2 = _closure2_slot5;
                    var6 = var2.item;
                    var2 = _closure2_slot3;
                    if(!(var3 == var2)) { _fun0002_ip = 303; continue _fun0002 }
 297:
                    var7 = _closure2_slot6;
                    _fun0002_ip = 307; continue _fun0002;
 303:
                    var7 = _closure2_slot3;
 307:
                    var4 = _closure1_slot9;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 9;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var5 = {};
                    var5['width'] = var7;
                    var5['height'] = var7;
                    var1['style'] = var5;
                    var5 = {};
                    var6 = var6.uri;
                    var5['uri'] = var6;
                    var1['source'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
 375:
                    var4 = _closure1_slot9;
                    var3 = _closure1_slot5;
                    var2 = undefined;
                    var1 = {};
                    var1 = var4.bind(var2)(var3, var1);
                    return var1;
                }
            };
            var4 = var6.bind(var7)(var4, var5);
            var1['renderImage'] = var4;
            var1['upload'] = var3;
            var1['setUploadSize'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();