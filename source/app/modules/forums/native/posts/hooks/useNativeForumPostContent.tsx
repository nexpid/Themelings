// app/modules/forums/native/posts/hooks/useNativeForumPostContent.tsx
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
    var4 = var4.MessageFlags;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 'italic';
    var9['fontStyle'] = var10;
    var4['italics'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/forums/native/posts/hooks/useNativeForumPostContent.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useNativeForumPostContent(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var11 = var2.message;
            var4 = var2.messageContent;
            var8 = var2.messageLoaded;
            var1 = var2.isMessageDeleted;
            var10 = var2.senderModifier;
            var2 = _closure1_slot4;
            var7 = undefined;
            var2 = var2.bind(var7)();
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = null;
            if(!(var1 != var11)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = _closure1_slot1;
            var9 = _closure1_slot2;
            var5 = 3;
            var5 = var9[var5];
            var5 = var6.bind(var7)(var5);
            var5 = var5.bind(var7)(var11);
            if(var5) { _fun0001_ip = 6; continue _fun0001 }
case 4:
            var6 = var1 != var11;
            if(!var6) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var6 = var11.blocked;
case 7:
            var9 = var1 != var11;
            if(!var9) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var9 = var11.ignored;
case 9:
            var5 = 'blocked';
            var5 = var5 === var10;
            if(var6) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            if(var5) { _fun0001_ip = 11; continue _fun0001 }
case 13:
            if(var9) { _fun0001_ip = 11; continue _fun0001 }
case 14:
            var9 = 'ignored';
            if(!(var9 !== var10)) { _fun0001_ip = 11; continue _fun0001 }
case 15:
            var10 = var1 == var11;
            var9 = undefined;
            if(var10) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var9 = var11.content;
case 16:
            var10 = var1 == var9;
            if(var10) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var9 = var1 == var11;
            var12 = undefined;
            if(var9) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var12 = var11.content;
case 20:
            var9 = '';
            var10 = var9 === var12;
case 18:
            if(var10) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var10 = var1 == var4;
case 22:
            if(var10) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var9 = '';
            var10 = var9 === var4;
case 24:
            if(var10) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var9 = global;
            var12 = var9.Array;
            var9 = var12.isArray;
            var9 = var9.bind(var12)(var4);
            if(!var9) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var13 = var4.length;
            var12 = 0;
            var9 = var12 === var13;
case 28:
            var10 = var9;
case 26:
            var9 = null;
            if(!var8) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            if(!(var1 != var11)) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var8 = 4;
            var8 = var13[var8];
            var12 = var12.bind(var7)(var8);
            var8 = var12.getMessageStickers;
            var8 = var8.bind(var12)(var11);
            var8 = var8.length;
            var12 = 0;
            if(!(!(var8 > var12))) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var8 = var11.interaction;
            if(!(var1 != var8)) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var13 = var11.content;
            var8 = '';
            if(!(var8 !== var13)) { _fun0001_ip = 38; continue _fun0001 }
case 36:
            var13 = var11.hasFlag;
            var8 = _closure1_slot3;
            var8 = var8.IS_VOICE_MESSAGE;
            var8 = var13.bind(var11)(var8);
            if(var8) { _fun0001_ip = 39; continue _fun0001 }
case 40:
            var13 = var11.hasFlag;
            var8 = _closure1_slot3;
            var8 = var8.IS_COMPONENTS_V2;
            var8 = var13.bind(var11)(var8);
            if(var8) { _fun0001_ip = 41; continue _fun0001 }
case 42:
            var8 = var11.embeds;
            var8 = var8.length;
            var8 = var8 > var12;
            if(var8) { _fun0001_ip = 43; continue _fun0001 }
case 44:
            var11 = var11.attachments;
            var11 = var11.length;
            var8 = var11 > var12;
case 43:
            var1 = null;
            if(!var8) { _fun0001_ip = 45; continue _fun0001 }
case 46:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var8 = 2;
            var11 = var14[var8];
            var11 = var13.bind(var7)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var8 = var14[var8];
            var8 = var13.bind(var7)(var8);
            var8 = var8.t;
            var8 = var8.JAKsMz;
            var1 = var11.bind(var12)(var8);
case 45:
            _fun0001_ip = 47; continue _fun0001;
case 41:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var8 = 2;
            var11 = var14[var8];
            var11 = var13.bind(var7)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var8 = var14[var8];
            var8 = var13.bind(var7)(var8);
            var8 = var8.t;
            var8 = var8.Xxm5i4;
            var1 = var11.bind(var12)(var8);
case 47:
            _fun0001_ip = 48; continue _fun0001;
case 39:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var8 = 2;
            var11 = var14[var8];
            var11 = var13.bind(var7)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var8 = var14[var8];
            var8 = var13.bind(var7)(var8);
            var8 = var8.t;
            var8 = var8.6bhHra;
            var1 = var11.bind(var12)(var8);
case 48:
            _fun0001_ip = 49; continue _fun0001;
case 38:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var8 = 2;
            var11 = var14[var8];
            var11 = var13.bind(var7)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var8 = var14[var8];
            var8 = var13.bind(var7)(var8);
            var8 = var8.t;
            var8 = var8.2v7kfn;
            var1 = var11.bind(var12)(var8);
case 49:
            _fun0001_ip = 50; continue _fun0001;
case 34:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var8 = 2;
            var11 = var14[var8];
            var11 = var13.bind(var7)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var8 = var14[var8];
            var8 = var13.bind(var7)(var8);
            var8 = var8.t;
            var8 = var8.7K5LmZ;
            var1 = var11.bind(var12)(var8);
case 50:
            _fun0001_ip = 51; continue _fun0001;
case 32:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var8 = 2;
            var11 = var14[var8];
            var11 = var13.bind(var7)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var8 = var14[var8];
            var8 = var13.bind(var7)(var8);
            var8 = var8.t;
            var8 = var8.mE3KJC;
            var1 = var11.bind(var12)(var8);
case 51:
            var9 = var1;
case 30:
            var1 = {'content': null, 'style': null, 'variant': 'text-sm/medium'};
            var8 = var4;
            if(!var10) { _fun0001_ip = 52; continue _fun0001 }
case 53:
            var8 = var9;
case 52:
            var1['content'] = var8;
            return var1;
case 11:
            var1 = {};
            if(var6) { _fun0001_ip = 54; continue _fun0001 }
case 55:
            if(var5) { _fun0001_ip = 54; continue _fun0001 }
case 56:
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
            var5 = var5.yWK7ZG;
            var5 = var6.bind(var8)(var5);
            _fun0001_ip = 57; continue _fun0001;
case 54:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 2;
            var8 = var11[var6];
            var8 = var10.bind(var7)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var6 = var11[var6];
            var6 = var10.bind(var7)(var6);
            var6 = var6.t;
            var6 = var6.Lkp2fH;
            var5 = var8.bind(var9)(var6);
case 57:
            var1['content'] = var5;
            var5 = var2.italics;
            var1['style'] = var5;
            var5 = 'text-sm/normal';
            var1['variant'] = var5;
            return var1;
case 6:
            var1 = {};
            var1['content'] = var4;
            var4 = var2.italics;
            var1['style'] = var4;
            var4 = 'text-sm/normal';
            var1['variant'] = var4;
            return var1;
case 2:
            var1 = {};
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 2;
            var4 = var8[var3];
            var4 = var6.bind(var7)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var6.bind(var7)(var3);
            var3 = var3.t;
            var3 = var3.U8Rr2t;
            var3 = var4.bind(var5)(var3);
            var1['content'] = var3;
            var2 = var2.italics;
            var1['style'] = var2;
            var2 = 'text-sm/normal';
            var1['variant'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();