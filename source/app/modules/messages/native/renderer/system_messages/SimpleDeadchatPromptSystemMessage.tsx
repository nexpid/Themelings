// app/modules/messages/native/renderer/system_messages/SimpleDeadchatPromptSystemMessage.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
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
    var4 = var4.Image;
    var _closure1_slot3 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/system_messages/SimpleDeadchatPromptSystemMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createSimpleDeadchatPromptSystemMessage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var1 = {};
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var4 = 1;
            var4 = var6[var4];
            var7 = undefined;
            var4 = var5.bind(var7)(var4);
            var15 = var4.bind(var7)(var3);
            var16 = var1;
            var4 = copyDataProperties(var16, var15);
            var4 = var3.message;
            var5 = var4.content;
            var4 = null;
            if(!(var4 != var5)) { _fun0001_ip = 76; continue _fun0001 }
 58:
            var5 = var3.message;
            var6 = var5.content;
            var5 = '';
            if(!(var5 === var6)) { _fun0001_ip = 135; continue _fun0001 }
 76:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 2;
            var6 = var10[var5];
            var6 = var9.bind(var7)(var6);
            var8 = var6.intl;
            var6 = var8.string;
            var5 = var10[var5];
            var5 = var9.bind(var7)(var5);
            var5 = var5.t;
            var5 = var5.wnn1DQ;
            var5 = var6.bind(var8)(var5);
            _fun0001_ip = 145; continue _fun0001;
 135:
            var3 = var3.message;
            var5 = var3.content;
 145:
            var3 = 'content';
            var1[var3] = var5;
            var3 = {};
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var8 = 3;
            var5 = var5[var8];
            var6 = var6.bind(var7)(var5);
            var5 = var6.isAndroid;
            var6 = var5.bind(var6)();
            var5 = null;
            if(var6) { _fun0001_ip = 257; continue _fun0001 }
 190:
            var10 = _closure1_slot3;
            var9 = var10.resolveAssetSource;
            var11 = _closure1_slot0;
            var14 = _closure1_slot2;
            var6 = 4;
            var6 = var14[var6];
            var12 = var11.bind(var7)(var6);
            var11 = var12.makeSource;
            var13 = _closure1_slot1;
            var6 = 5;
            var6 = var14[var6];
            var6 = var13.bind(var7)(var6);
            var6 = var11.bind(var12)(var6);
            var6 = var9.bind(var10)(var6);
            var5 = var6.uri;
 257:
            var3['cameraButtonIcon'] = var5;
            var11 = _closure1_slot3;
            var10 = var11.resolveAssetSource;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var9 = 4;
            var9 = var5[var9];
            var13 = var6.bind(var7)(var9);
            var12 = var13.makeSource;
            var14 = _closure1_slot1;
            var9 = 6;
            var9 = var5[var9];
            var9 = var14.bind(var7)(var9);
            var9 = var12.bind(var13)(var9);
            var9 = var10.bind(var11)(var9);
            var9 = var9.uri;
            var3['emojiButtonIcon'] = var9;
            var5 = var5[var8];
            var6 = var6.bind(var7)(var5);
            var5 = var6.isAndroid;
            var5 = var5.bind(var6)();
            var4 = null;
            if(var5) { _fun0001_ip = 418; continue _fun0001 }
 361:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 2;
            var6 = var10[var5];
            var6 = var9.bind(var7)(var6);
            var8 = var6.intl;
            var6 = var8.string;
            var5 = var10[var5];
            var5 = var9.bind(var7)(var5);
            var5 = var5.t;
            var5 = var5.+j6eZW;
            var4 = var6.bind(var8)(var5);
 418:
            var3['cameraButtonText'] = var4;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 2;
            var4 = var8[var2];
            var4 = var6.bind(var7)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var2 = var8[var2];
            var2 = var6.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.WZ+NyM;
            var2 = var4.bind(var5)(var2);
            var3['emojiButtonText'] = var2;
            var2 = 'channelPromptData';
            var1[var2] = var3;
            return var1;
        }
    };
    var3['createSimpleDeadchatPromptSystemMessage'] = var2;
    return var1;
})();