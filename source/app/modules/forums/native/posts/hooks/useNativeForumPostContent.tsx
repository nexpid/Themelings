// app/modules/forums/native/posts/hooks/useNativeForumPostContent.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
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
 0:
            var2 = arg1;
            var11 = var2.message;
            var4 = var2.messageContent;
            var8 = var2.messageLoaded;
            var1 = var2.isMessageDeleted;
            var10 = var2.senderModifier;
            var2 = _closure1_slot4;
            var7 = undefined;
            var2 = var2.bind(var7)();
            if(var1) { _fun0001_ip = 894; continue _fun0001 }
 51:
            var1 = null;
            if(!(var1 != var11)) { _fun0001_ip = 88; continue _fun0001 }
 57:
            var6 = _closure1_slot1;
            var9 = _closure1_slot2;
            var5 = 3;
            var5 = var9[var5];
            var5 = var6.bind(var7)(var5);
            var5 = var5.bind(var7)(var11);
            if(var5) { _fun0001_ip = 866; continue _fun0001 }
 88:
            var6 = var1 != var11;
            if(!var6) { _fun0001_ip = 101; continue _fun0001 }
 95:
            var6 = var11.blocked;
 101:
            var9 = var1 != var11;
            if(!var9) { _fun0001_ip = 114; continue _fun0001 }
 108:
            var9 = var11.ignored;
 114:
            var5 = 'blocked';
            var5 = var5 === var10;
            if(var6) { _fun0001_ip = 716; continue _fun0001 }
 128:
            if(var5) { _fun0001_ip = 716; continue _fun0001 }
 134:
            if(var9) { _fun0001_ip = 716; continue _fun0001 }
 140:
            var9 = 'ignored';
            if(!(var9 !== var10)) { _fun0001_ip = 716; continue _fun0001 }
 151:
            var10 = var1 == var11;
            var9 = undefined;
            if(var10) { _fun0001_ip = 165; continue _fun0001 }
 160:
            var9 = var11.content;
 165:
            var10 = var1 == var9;
            if(var10) { _fun0001_ip = 194; continue _fun0001 }
 172:
            var9 = var1 == var11;
            var12 = undefined;
            if(var9) { _fun0001_ip = 186; continue _fun0001 }
 181:
            var12 = var11.content;
 186:
            var9 = '';
            var10 = var9 === var12;
 194:
            if(var10) { _fun0001_ip = 201; continue _fun0001 }
 197:
            var10 = var1 == var4;
 201:
            if(var10) { _fun0001_ip = 212; continue _fun0001 }
 204:
            var9 = '';
            var10 = var9 === var4;
 212:
            if(var10) { _fun0001_ip = 250; continue _fun0001 }
 215:
            var9 = global;
            var12 = var9.Array;
            var9 = var12.isArray;
            var9 = var9.bind(var12)(var4);
            if(!var9) { _fun0001_ip = 247; continue _fun0001 }
 236:
            var13 = var4.length;
            var12 = 0;
            var9 = var12 === var13;
 247:
            var10 = var9;
 250:
            var9 = null;
            if(!var8) { _fun0001_ip = 685; continue _fun0001 }
 258:
            if(!(var1 != var11)) { _fun0001_ip = 627; continue _fun0001 }
 265:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var8 = 4;
            var8 = var13[var8];
            var12 = var12.bind(var7)(var8);
            var8 = var12.getMessageStickers;
            var8 = var8.bind(var12)(var11);
            var8 = var8.length;
            var12 = 0;
            if(!(!(var8 > var12))) { _fun0001_ip = 570; continue _fun0001 }
 310:
            var13 = var11.hasFlag;
            var8 = _closure1_slot3;
            var8 = var8.IS_VOICE_MESSAGE;
            var8 = var13.bind(var11)(var8);
            if(var8) { _fun0001_ip = 513; continue _fun0001 }
 337:
            var13 = var11.hasFlag;
            var8 = _closure1_slot3;
            var8 = var8.IS_COMPONENTS_V2;
            var8 = var13.bind(var11)(var8);
            if(var8) { _fun0001_ip = 456; continue _fun0001 }
 361:
            var8 = var11.embeds;
            var8 = var8.length;
            var8 = var8 > var12;
            if(var8) { _fun0001_ip = 394; continue _fun0001 }
 379:
            var11 = var11.attachments;
            var11 = var11.length;
            var8 = var11 > var12;
 394:
            var1 = null;
            if(!var8) { _fun0001_ip = 454; continue _fun0001 }
 399:
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
 454:
            _fun0001_ip = 511; continue _fun0001;
 456:
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
 511:
            _fun0001_ip = 568; continue _fun0001;
 513:
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
 568:
            _fun0001_ip = 625; continue _fun0001;
 570:
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
 625:
            _fun0001_ip = 682; continue _fun0001;
 627:
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
 682:
            var9 = var1;
 685:
            var1 = {'content': null, 'style': null, 'variant': 'text-sm/medium'};
            var8 = var4;
            if(!var10) { _fun0001_ip = 708; continue _fun0001 }
 705:
            var8 = var9;
 708:
            var1['content'] = var8;
            return var1;
 716:
            var1 = {};
            if(var6) { _fun0001_ip = 783; continue _fun0001 }
 721:
            if(var5) { _fun0001_ip = 783; continue _fun0001 }
 724:
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
            _fun0001_ip = 840; continue _fun0001;
 783:
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
 840:
            var1['content'] = var5;
            var5 = var2.italics;
            var1['style'] = var5;
            var5 = 'text-sm/normal';
            var1['variant'] = var5;
            return var1;
 866:
            var1 = {};
            var1['content'] = var4;
            var4 = var2.italics;
            var1['style'] = var4;
            var4 = 'text-sm/normal';
            var1['variant'] = var4;
            return var1;
 894:
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