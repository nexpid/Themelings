// app/modules/forums/native/posts/ForumPostMessageContent.tsx
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
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 'flex-start';
    var9['alignSelf'] = var10;
    var4['text'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/forums/native/posts/ForumPostMessageContent.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ForumPostMessageContent(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var10 = var1.messageContent;
            var14 = var1.message;
            var9 = var1.isMessageDeleted;
            var11 = var1.hasUnreads;
            var13 = var1.messageLoaded;
            var8 = var1.textStyle;
            var6 = var1.lineClamp;
            var4 = undefined;
            if(!(var6 === var4)) { _fun0001_ip = 53; continue _fun0001 }
 50:
            var6 = 2;
 53:
            var5 = var1.senderModifier;
            var2 = _closure1_slot4;
            var7 = var2.bind(var4)();
            var3 = _closure1_slot1;
            var12 = _closure1_slot2;
            var2 = 3;
            var2 = var12[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['message'] = var14;
            var2['messageLoaded'] = var13;
            var2['messageContent'] = var10;
            var2['isMessageDeleted'] = var9;
            var2['senderModifier'] = var5;
            var2 = var3.bind(var4)(var2);
            var5 = var2.content;
            var9 = var2.style;
            var10 = var2.variant;
            var3 = _closure1_slot3;
            var2 = _closure1_slot0;
            var1 = 4;
            var1 = var12[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Text;
            var1 = {};
            var1['variant'] = var10;
            var10 = 'text-muted';
            if(!var11) { _fun0001_ip = 182; continue _fun0001 }
 176:
            var10 = 'text-normal';
 182:
            var1['color'] = var10;
            var1['lineClamp'] = var6;
            var6 = 'tail';
            var1['ellipsizeMode'] = var6;
            var6 = new Array(3);
            var6[0] = var9;
            var6[1] = var8;
            var7 = var7.text;
            var6[2] = var7;
            var1['style'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();