// app/modules/messages/native/renderer/MarkupParsers.tsx
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
    var4 = 7;
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
            var5 = arg1;
            var13 = arg3;
            var12 = arguments[3];
            var10 = arguments[4];
            var11 = arguments[5];
            var4 = arguments[6];
            var14 = arguments[7];
            var9 = undefined;
            if(!(var12 === var9)) { _fun0003_ip = 29; continue _fun0003 }
 27:
            var12 = false;
 29:
            if(!(var10 === var9)) { _fun0003_ip = 35; continue _fun0003 }
 33:
            var10 = false;
 35:
            if(!(var11 === var9)) { _fun0003_ip = 41; continue _fun0003 }
 39:
            var11 = false;
 41:
            if(!(var4 === var9)) { _fun0003_ip = 47; continue _fun0003 }
 45:
            var4 = false;
 47:
            if(!(var14 === var9)) { _fun0003_ip = 53; continue _fun0003 }
 51:
            var14 = false;
 53:
            var2 = _closure1_slot6;
            var1 = var2.get;
            var1 = var1.bind(var2)(var5);
            var6 = null;
            if(!(var6 != var1)) { _fun0003_ip = 89; continue _fun0003 }
 76:
            var2 = var1.isInlineReplyPreview;
            if(!(var2 !== var12)) { _fun0003_ip = 467; continue _fun0003 }
 89:
            var7 = var5.type;
            var2 = _closure1_slot3;
            var2 = var2.CHANGELOG;
            if(!(var7 === var2)) { _fun0003_ip = 121; continue _fun0003 }
 108:
            var2 = var5.changelogId;
            if(!(var6 == var2)) { _fun0003_ip = 302; continue _fun0003 }
 121:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 5;
            var2 = var8[var2];
            var2 = var7.bind(var9)(var2);
            var15 = var2.GameMentionsUserExperiment;
            var6 = var15.getCurrentConfig;
            var2 = {};
            var16 = 'native/MarkupParsers';
            var2['location'] = var16;
            var2 = var6.bind(var15)(var2);
            var15 = var2.enabled;
            var2 = {};
            var6 = 6;
            var6 = var8[var6];
            var8 = var7.bind(var9)(var6);
            var7 = var8.renderMessageMarkupToAST;
            var6 = {};
            var16 = arg2;
            var6['contentMessage'] = var16;
            var6['hideSimpleEmbedContent'] = var13;
            var6['formatInline'] = var12;
            var16 = var10;
            if(var10) { _fun0003_ip = 224; continue _fun0003 }
 221:
            var16 = var11;
 224:
            var6['allowHeading'] = var16;
            var16 = var10;
            if(var10) { _fun0003_ip = 238; continue _fun0003 }
 235:
            var16 = var11;
 238:
            var6['allowList'] = var16;
            var6['allowLinks'] = var4;
            var6['allowGameMentions'] = var15;
            var6['previewLinkTarget'] = var4;
            var6['shouldFilterKeywords'] = var14;
            var19 = var7.bind(var8)(var5, var6);
            var20 = var2;
            var6 = copyDataProperties(var20, var19);
            var6 = 'isInlineReplyPreview';
            var2[var6] = var12;
            var7 = _closure1_slot6;
            var6 = var7.set;
            var6 = var6.bind(var7)(var5, var2);
            return var2;
 302:
            var2 = {'content': null, 'isInlineReplyPreview': false, 'hasSpoilerEmbeds': false};
            var7 = _closure1_slot1;
            var15 = _closure1_slot2;
            var6 = 3;
            var6 = var15[var6];
            var8 = var7.bind(var9)(var6);
            var7 = var8.astParserFor;
            var14 = _closure1_slot0;
            var6 = 4;
            var6 = var15[var6];
            var16 = var14.bind(var9)(var6);
            var15 = var16.changelogRules;
            var14 = var5.changelogId;
            var6 = true;
            var6 = var15.bind(var16)(var14, var6);
            var8 = var7.bind(var8)(var6);
            var7 = var5.content;
            var6 = {};
            var6['hideSimpleEmbedContent'] = var13;
            var6['formatInline'] = var12;
            var12 = var10;
            if(var10) { _fun0003_ip = 409; continue _fun0003 }
 406:
            var12 = var11;
 409:
            var6['allowHeading'] = var12;
            if(var10) { _fun0003_ip = 420; continue _fun0003 }
 417:
            var10 = var11;
 420:
            var6['allowList'] = var10;
            var6['allowLinks'] = var4;
            var6['previewLinkTarget'] = var4;
            var4 = false;
            var4 = var8.bind(var9)(var7, var4, var6);
            var2['content'] = var4;
            var4 = _closure1_slot6;
            var3 = var4.set;
            var3 = var3.bind(var4)(var5, var2);
            return var2;
 467:
            return var1;
        }
    };
    var3['parseMessageMarkup'] = var2;
    return var1;
})();