// app/modules/messages/native/renderer/MarkupParsers.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.MessageTypes;
    var _closure1_slot3 = var4;
    var8 = {'max': inf, 'maxAge': null, 'updateAgeOnGet': true};
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.Millis;
    var9 = var4.MINUTE;
    var4 = 15;
    var4 = var4 * var9;
    var8['maxAge'] = var4;
    var4 = 2;
    var9 = var6[var4];
    var9 = var7.bind(var1)(var9);
    var10 = var9.prototype;
    var10 = Object.create(var10, {constructor: {value: var9}});
    var16 = var10;
    var15 = var8;
    var9 = new var16[var9](var15, var14);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot4 = var9;
    var9 = var6[var4];
    var11 = var7.bind(var1)(var9);
    var9 = {};
    var15 = var9;
    var14 = var8;
    var10 = copyDataProperties(var15, var14);
    var12 = false;
    var10 = 'updateAgeOnGet';
    var9[var10] = var12;
    var10 = var11.prototype;
    var10 = Object.create(var10, {constructor: {value: var11}});
    var16 = var10;
    var15 = var9;
    var9 = new var16[var11](var15, var14);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot5 = var9;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var7 = var4.prototype;
    var7 = Object.create(var7, {constructor: {value: var4}});
    var16 = var7;
    var15 = var8;
    var4 = new var16[var4](var15, var14);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot6 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/MarkupParsers.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function parseEmbedTitleMarkup(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var8 = arg1;
            var2 = arg2;
            var1 = global;
            var1 = var1.HermesInternal;
            var4 = var1.concat;
            var3 = '';
            var1 = '-';
            var5 = var4.bind(var3)(var8, var1, var2);
            var4 = _closure1_slot4;
            var1 = var4.get;
            var1 = var1.bind(var4)(var5);
            var4 = null;
            if(!(var4 == var1)) { _fun0001_ip = 118; continue _fun0001 }
 57:
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var4 = 3;
            var6 = var6[var4];
            var4 = undefined;
            var7 = var7.bind(var4)(var6);
            var6 = var7.parseEmbedTitleToAST;
            var4 = {};
            var4['channelId'] = var2;
            var2 = true;
            var2 = var6.bind(var7)(var8, var2, var4);
            var4 = _closure1_slot4;
            var3 = var4.set;
            var3 = var3.bind(var4)(var5, var2);
            var1 = var2;
 118:
            return var1;
        }
    };
    var3['parseEmbedTitleMarkup'] = var4;
    var4 = function parseEmbedDescriptionMarkup(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var7 = var2.description;
            var1 = var2.channelId;
            var10 = var2.isField;
            var5 = var2.ignoreCache;
            var14 = var2.replaceMap;
            var9 = var2.showListsAndHeaders;
            var8 = var2.showMaskedLinks;
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var3 = '';
            var2 = '-';
            var4 = var4.bind(var3)(var7, var2, var1);
            var6 = _closure1_slot5;
            var3 = var6.get;
            var3 = var3.bind(var6)(var4);
            var6 = null;
            if(!(var6 != var3)) { _fun0002_ip = 99; continue _fun0002 }
 94:
            if(var5) { _fun0002_ip = 99; continue _fun0002 }
 97:
            return var3;
 99:
            var12 = var14;
            var3 = var7;
            var7 = var3;
            for(var5 in var12)
 116:
            {
                var7 = var3;
 128:
                var17 = var5;
                var16 = var3.replaceAll;
                var15 = var14[var17];
                var3 = var16.bind(var3)(var17, var15);
                _fun0002_ip = 116; continue _fun0002;
            }
 149:
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 3;
            var5 = var5[var3];
            var3 = undefined;
            var6 = var6.bind(var3)(var5);
            var5 = var6.parseToAST;
            var3 = {'channelId': null, 'allowLinks': true, 'allowEmojiLinks': true};
            var3['channelId'] = var1;
            var1 = true;
            var10 = !var10;
            if(!var10) { _fun0002_ip = 208; continue _fun0002 }
 205:
            var10 = var9;
 208:
            var3['allowHeading'] = var10;
            var3['allowList'] = var9;
            var3['previewLinkTarget'] = var8;
            var1 = var5.bind(var6)(var7, var1, var3);
            var3 = _closure1_slot5;
            var2 = var3.set;
            var2 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var3['parseEmbedDescriptionMarkup'] = var4;
    var2 = function parseMessageMarkup(arg1, arg2, arg3) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var6 = arg1;
            var14 = arg3;
            var13 = arguments[3];
            var11 = arguments[4];
            var12 = arguments[5];
            var5 = arguments[6];
            var9 = arguments[7];
            var10 = undefined;
            if(!(var13 === var10)) { _fun0003_ip = 29; continue _fun0003 }
 27:
            var13 = false;
 29:
            if(!(var11 === var10)) { _fun0003_ip = 35; continue _fun0003 }
 33:
            var11 = false;
 35:
            if(!(var12 === var10)) { _fun0003_ip = 41; continue _fun0003 }
 39:
            var12 = false;
 41:
            if(!(var5 === var10)) { _fun0003_ip = 47; continue _fun0003 }
 45:
            var5 = false;
 47:
            if(!(var9 === var10)) { _fun0003_ip = 53; continue _fun0003 }
 51:
            var9 = false;
 53:
            var2 = _closure1_slot6;
            var1 = var2.get;
            var1 = var1.bind(var2)(var6);
            var3 = null;
            if(!(var3 != var1)) { _fun0003_ip = 89; continue _fun0003 }
 76:
            var2 = var1.isInlineReplyPreview;
            if(!(var2 !== var13)) { _fun0003_ip = 423; continue _fun0003 }
 89:
            var7 = var6.type;
            var2 = _closure1_slot3;
            var2 = var2.CHANGELOG;
            if(!(var7 === var2)) { _fun0003_ip = 121; continue _fun0003 }
 108:
            var2 = var6.changelogId;
            if(!(var3 == var2)) { _fun0003_ip = 254; continue _fun0003 }
 121:
            var2 = {};
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 5;
            var3 = var8[var3];
            var8 = var7.bind(var10)(var3);
            var7 = var8.renderMessageMarkupToAST;
            var3 = {};
            var15 = arg2;
            var3['contentMessage'] = var15;
            var3['hideSimpleEmbedContent'] = var14;
            var3['formatInline'] = var13;
            var15 = var11;
            if(var11) { _fun0003_ip = 178; continue _fun0003 }
 175:
            var15 = var12;
 178:
            var3['allowHeading'] = var15;
            var15 = var11;
            if(var11) { _fun0003_ip = 192; continue _fun0003 }
 189:
            var15 = var12;
 192:
            var3['allowList'] = var15;
            var3['allowLinks'] = var5;
            var3['previewLinkTarget'] = var5;
            var3['shouldFilterKeywords'] = var9;
            var19 = var7.bind(var8)(var6, var3);
            var20 = var2;
            var3 = copyDataProperties(var20, var19);
            var3 = 'isInlineReplyPreview';
            var2[var3] = var13;
            var7 = _closure1_slot6;
            var3 = var7.set;
            var3 = var3.bind(var7)(var6, var2);
            _fun0003_ip = 420; continue _fun0003;
 254:
            var3 = {'content': null, 'isInlineReplyPreview': false, 'hasSpoilerEmbeds': false};
            var8 = _closure1_slot1;
            var16 = _closure1_slot2;
            var7 = 3;
            var7 = var16[var7];
            var9 = var8.bind(var10)(var7);
            var8 = var9.astParserFor;
            var15 = _closure1_slot0;
            var7 = 4;
            var7 = var16[var7];
            var17 = var15.bind(var10)(var7);
            var16 = var17.changelogRules;
            var15 = var6.changelogId;
            var7 = true;
            var7 = var16.bind(var17)(var15, var7);
            var9 = var8.bind(var9)(var7);
            var8 = var6.content;
            var7 = {};
            var7['hideSimpleEmbedContent'] = var14;
            var7['formatInline'] = var13;
            var13 = var11;
            if(var11) { _fun0003_ip = 361; continue _fun0003 }
 358:
            var13 = var12;
 361:
            var7['allowHeading'] = var13;
            if(var11) { _fun0003_ip = 372; continue _fun0003 }
 369:
            var11 = var12;
 372:
            var7['allowList'] = var11;
            var7['allowLinks'] = var5;
            var7['previewLinkTarget'] = var5;
            var5 = false;
            var5 = var9.bind(var10)(var8, var5, var7);
            var3['content'] = var5;
            var5 = _closure1_slot6;
            var4 = var5.set;
            var4 = var4.bind(var5)(var6, var3);
            var2 = var3;
 420:
            var1 = var2;
 423:
            return var1;
        }
    };
    var3['parseMessageMarkup'] = var2;
    return var1;
})();