// app/modules/messages/MarkupPostProcessors.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var11 = require;
    var3 = exports;
    var12 = dependencyMap;
    var _closure1_slot0 = var11;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var12;
    var1 = function checkForJumboEmoji(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var4 = var1.some;
            var3 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = arg1;
                    var2 = var3.type;
                    var1 = 'emoji';
                    var1 = var1 !== var2;
                    if(!var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var4 = var3.type;
                    var2 = 'customEmoji';
                    var1 = var2 !== var4;
case 2:
                    if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var2 = var3.content;
                    var4 = 'string';
                    var2 = typeof var2;
                    var2 = var4 !== var2;
                    if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var4 = var3.content;
                    var3 = var4.trim;
                    var4 = var3.bind(var4)();
                    var3 = '';
                    var2 = var3 !== var4;
case 6:
                    var1 = var2;
case 4:
                    return var1;
                }
            };
            var3 = var4.bind(var1)(var3);
            if(var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = 0;
            var _closure2_slot0 = var3;
            var4 = var1.forEach;
            var3 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = arg1;
                    var3 = var2.type;
                    var1 = 'emoji';
                    var1 = var1 !== var3;
                    if(!var1) { _fun0003_ip = 2; continue _fun0003 }
case 3:
                    var3 = var2.type;
                    var2 = 'customEmoji';
                    var1 = var2 !== var3;
case 2:
                    if(var1) { _fun0003_ip = 10; continue _fun0003 }
case 5:
                    var3 = _closure2_slot0;
                    var1 = 1;
                    var1 = var3 + var1;
                    _closure2_slot0 = var1;
case 10:
                    var2 = _closure2_slot0;
                    var1 = 30;
                    if(!(!(var2 > var1))) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                    var1 = undefined;
                    return var1;
case 11:
                    var1 = false;
                    return var1;
                }
            };
            var3 = var4.bind(var1)(var3);
            var4 = _closure2_slot0;
            var3 = 30;
            if(!(!(var4 > var3))) { _fun0001_ip = 11; continue _fun0001 }
case 13:
            var3 = var1.forEach;
            var2 = function(arg1) {
                var2 = true;
                var1 = arg1;
                var1['jumboable'] = var2;
                var1 = undefined;
                return var1;
            };
            var2 = var3.bind(var1)(var2);
case 11:
            return var1;
case 8:
            return var1;
        }
    };
    var _closure1_slot6 = var1;
    var9 = function checkSpoilerEmbeds(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var1 = arg2;
            if(var1) { _fun0004_ip = 4; continue _fun0004 }
case 14:
            var2 = 0;
            var1 = var4[var2];
            var3 = var1.type;
            var1 = 'paragraph';
            var1 = var1 === var3;
            if(!var1) { _fun0004_ip = 15; continue _fun0004 }
case 16:
            var3 = var4[var2];
            var5 = var3.content;
            var3 = global;
            var3 = var3.Array;
            var1 = var5 instanceof var3;
case 15:
            if(!var1) { _fun0004_ip = 17; continue _fun0004 }
case 18:
            var5 = _closure1_slot9;
            var2 = var4[var2];
            var3 = var2.content;
            var2 = undefined;
            var1 = var5.bind(var2)(var3);
case 17:
            _fun0004_ip = 19; continue _fun0004;
case 4:
            var3 = _closure1_slot9;
            var2 = undefined;
            var1 = var3.bind(var2)(var4);
case 19:
            return var1;
        }
    };
    var _closure1_slot7 = var9;
    var1 = function containsMatchingNode(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = arg1;
            var8 = arg2;
            var _closure2_slot0 = var8;
            var4 = global;
            var2 = var4.Array;
            var2 = var3 instanceof var2;
            if(var2) { _fun0005_ip = 20; continue _fun0005 }
case 21:
            var7 = undefined;
            var2 = var8.bind(var7)(var3);
            var5 = null;
            if(!(var5 == var2)) { _fun0005_ip = 22; continue _fun0005 }
case 23:
            var6 = var3.content;
            var5 = var4.Array;
            var5 = var6 instanceof var5;
            if(var5) { _fun0005_ip = 24; continue _fun0005 }
case 25:
            var5 = var3.items;
            var4 = var4.Array;
            var4 = var5 instanceof var4;
            if(!var4) { _fun0005_ip = 26; continue _fun0005 }
case 27:
            var9 = var3.items;
            var6 = var9.some;
            var5 = function(arg1) {
                var4 = _closure1_slot8;
                var3 = _closure2_slot0;
                var2 = undefined;
                var1 = arg1;
                var1 = var4.bind(var2)(var1, var3);
                return var1;
            };
            var4 = var6.bind(var9)(var5);
case 26:
            _fun0005_ip = 28; continue _fun0005;
case 24:
            var6 = _closure1_slot8;
            var5 = var3.content;
            var4 = var6.bind(var7)(var5, var8);
case 28:
            var2 = var4;
case 22:
            return var2;
case 20:
            var2 = var3.some;
            var1 = function(arg1) {
                var4 = _closure1_slot8;
                var3 = _closure2_slot0;
                var2 = undefined;
                var1 = arg1;
                var1 = var4.bind(var2)(var1, var3);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = function hasAnySpoilerEmbeds(arg1) {
        var4 = _closure1_slot8;
        var3 = undefined;
        var2 = arg1;
        var1 = function(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var5 = arg1;
                var3 = var5.type;
                var2 = 'spoiler';
                var1 = null;
                if(!(var2 === var3)) { _fun0006_ip = 23; continue _fun0006 }
case 29:
                var4 = _closure1_slot8;
                var3 = undefined;
                var2 = function(arg1) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var2 = arg1;
                        var3 = var2.type;
                        var1 = 'link';
                        var1 = var1 === var3;
                        if(var1) { _fun0007_ip = 2; continue _fun0007 }
case 3:
                        var3 = var2.type;
                        var2 = 'attachmentLink';
                        var1 = var2 === var3;
case 2:
                        if(var1) { _fun0007_ip = 30; continue _fun0007 }
case 5:
                        var1 = null;
case 30:
                        return var1;
                    }
                };
                var1 = var4.bind(var3)(var5, var2);
case 23:
                return var1;
            }
        };
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot9 = var1;
    var8 = function checkForSimpleEmbedMessage(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var5 = arg2;
            var2 = var1.length;
            var4 = 1;
            if(!(var4 === var2)) { _fun0008_ip = 31; continue _fun0008 }
case 29:
            var2 = var5.length;
            if(!(var4 === var2)) { _fun0008_ip = 31; continue _fun0008 }
case 21:
            var3 = 0;
            var2 = var1[var3];
            var5 = var5[var3];
            var6 = var2.type;
            var3 = 'link';
            if(!(var3 !== var6)) { _fun0008_ip = 32; continue _fun0008 }
case 33:
            var6 = var2.type;
            var3 = 'attachmentLink';
            var2 = var1;
            if(!(var3 === var6)) { _fun0008_ip = 34; continue _fun0008 }
case 32:
            var8 = _closure1_slot4;
            var7 = var8.has;
            var6 = var5.type;
            var6 = var7.bind(var8)(var6);
            var2 = var1;
            if(!var6) { _fun0008_ip = 34; continue _fun0008 }
case 19:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var4 = var3[var4];
            var3 = undefined;
            var4 = var6.bind(var3)(var4);
            var3 = var4.isEmbedInline;
            var3 = var3.bind(var4)(var5);
            var2 = var1;
            if(!var3) { _fun0008_ip = 34; continue _fun0008 }
case 35:
            var2 = new Array(0);
case 34:
            return var2;
case 31:
            return var1;
        }
    };
    var _closure1_slot10 = var8;
    var7 = function removeBuildOverrideLinks(arg1) {
        var3 = arg1;
        var2 = var3.filter;
        var1 = function(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var2 = arg1;
                var3 = var2.type;
                var1 = 'link';
                var1 = var1 !== var3;
                if(var1) { _fun0009_ip = 36; continue _fun0009 }
case 3:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 2;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var5.bind(var3)(var4);
                var3 = var4.isBuildOverrideLink;
                var2 = var2.target;
                var2 = var3.bind(var4)(var2);
                var1 = !var2;
case 36:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot11 = var7;
    var6 = function removeExperimentLinks(arg1) {
        var3 = arg1;
        var2 = var3.filter;
        var1 = function(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var2 = arg1;
                var3 = var2.type;
                var1 = 'link';
                var1 = var1 !== var3;
                if(var1) { _fun0010_ip = 36; continue _fun0010 }
case 3:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 3;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var5.bind(var3)(var4);
                var3 = var4.isExperimentEmbedURL;
                var2 = var2.target;
                var2 = var3.bind(var4)(var2);
                var1 = !var2;
case 36:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot12 = var6;
    var5 = function removeQuestsEmbedLinks(arg1) {
        var3 = arg1;
        var4 = var3.some;
        var2 = function(arg1) {
            var1 = arg1;
            var2 = var1.type;
            var1 = 'link';
            var1 = var1 !== var2;
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var2 = var3.filter;
        var1 = function(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var4 = arg1;
                var2 = var4.type;
                var1 = 'link';
                var1 = var1 === var2;
                var2 = var4.target;
                var3 = null;
                var5 = var3 != var2;
                var2 = null;
                if(!var5) { _fun0011_ip = 37; continue _fun0011 }
case 38:
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var5 = 4;
                var6 = var6[var5];
                var5 = undefined;
                var6 = var7.bind(var5)(var6);
                var5 = var6.parseQuestsEmbedCode;
                var4 = var4.target;
                var2 = var5.bind(var6)(var4);
case 37:
                if(!var1) { _fun0011_ip = 39; continue _fun0011 }
case 17:
                var1 = var3 != var2;
case 39:
                if(!var1) { _fun0011_ip = 40; continue _fun0011 }
case 41:
                var2 = _closure2_slot0;
                var1 = !var2;
case 40:
                var1 = !var1;
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot13 = var5;
    var4 = function convertNewlinesInContent(arg1) {
        var1 = arg1;
        var3 = var1.forEach;
        var2 = function(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var1 = arg1;
                var5 = _closure1_slot5;
                var4 = var5.has;
                var3 = var1.type;
                var3 = var4.bind(var5)(var3);
                if(!var3) { _fun0012_ip = 42; continue _fun0012 }
case 43:
                var5 = var1.content;
                var4 = null;
                var3 = var4 != var5;
case 42:
                if(!var3) { _fun0012_ip = 44; continue _fun0012 }
case 45:
                var6 = global;
                var5 = var6.Array;
                var4 = var5.isArray;
                var3 = var1.content;
                var3 = var4.bind(var5)(var3);
                if(var3) { _fun0012_ip = 46; continue _fun0012 }
case 47:
                var3 = var1.content;
                var4 = 'string';
                var3 = typeof var3;
                if(!(var4 !== var3)) { _fun0012_ip = 48; continue _fun0012 }
case 49:
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 5;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.captureMessage;
                var11 = var1.type;
                var3 = var1.content;
                var8 = var6.Object;
                var7 = var8.keys;
                var12 = var7.bind(var8)(var1);
                var6 = var6.HermesInternal;
                var9 = var6.concat;
                var17 = 'AST node type:';
                var15 = ' with content typeof ';
                var14 = typeof var3;
                var13 = '. Keys ';
                var16 = var11;
                var3 = var17[var9](var16, var15, var14, var13, var12, var11);
                var3 = var4.bind(var5)(var3);
                _fun0012_ip = 44; continue _fun0012;
case 48:
                var6 = var1.content;
                var5 = var6.replace;
                var4 = /\n/g;
                var3 = ' ';
                var3 = var5.bind(var6)(var4, var3);
                var1['content'] = var3;
                _fun0012_ip = 44; continue _fun0012;
case 46:
                var3 = _closure1_slot14;
                var2 = var1.content;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
case 44:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var _closure1_slot14 = var4;
    var10 = global;
    var15 = var10.Object;
    var14 = var15.defineProperty;
    var13 = {};
    var1 = true;
    var13['value'] = var1;
    var1 = '__esModule';
    var1 = var14.bind(var15)(var3, var1, var13);
    var1 = 0;
    var13 = var12[var1];
    var1 = undefined;
    var13 = var11.bind(var1)(var13);
    var14 = var13.MessageEmbedTypes;
    var13 = var13.MessageTypes;
    var _closure1_slot3 = var13;
    var15 = var10.Set;
    var16 = var14.IMAGE;
    var13 = new Array(2);
    var13[0] = var16;
    var14 = var14.GIFV;
    var13[1] = var14;
    var14 = var15.prototype;
    var14 = Object.create(var14, {constructor: {value: var15}});
    var20 = var14;
    var19 = var13;
    var13 = new var20[var15](var19, var18);
    var13 = var13 instanceof Object ? var13 : var14;
    var _closure1_slot4 = var13;
    var14 = var10.Set;
    var10 = var14.prototype;
    var13 = Object.create(var10, {constructor: {value: var14}});
    var19 = ['strong', 'em', 'u', 'text', 'inlineCode', 's', 'spoiler'];
    var20 = var13;
    var10 = new var20[var14](var19, var18);
    var10 = var10 instanceof Object ? var10 : var13;
    var _closure1_slot5 = var10;
    var10 = 6;
    var10 = var12[var10];
    var12 = var11.bind(var1)(var10);
    var11 = var12.fileFinishedImporting;
    var10 = 'modules/messages/MarkupPostProcessors.tsx';
    var10 = var11.bind(var12)(var10);
    var3['checkSpoilerEmbeds'] = var9;
    var3['checkForSimpleEmbedMessage'] = var8;
    var3['removeBuildOverrideLinks'] = var7;
    var3['removeExperimentLinks'] = var6;
    var3['removeQuestsEmbedLinks'] = var5;
    var3['convertNewlinesInContent'] = var4;
    var2 = function runMessageMarkupPostProcessors(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var1 = arg1;
            var12 = var1.ast;
            var7 = var1.inline;
            var4 = var1.hasBailedAst;
            var2 = var1.message;
            var6 = var1.contentMessage;
            var10 = var1.messageContent;
            var3 = var1.hideSimpleEmbedContent;
            var5 = var1.formatInline;
            var1 = var1.toAST;
            var8 = global;
            var11 = var8.Array;
            var9 = var11.isArray;
            var9 = var9.bind(var11)(var12);
            var11 = var12;
            if(var9) { _fun0013_ip = 50; continue _fun0013 }
case 4:
            var9 = new Array(1);
            var9[0] = var12;
            var11 = var9;
case 50:
            if(!var4) { _fun0013_ip = 51; continue _fun0013 }
case 19:
            var9 = {};
            var4 = 'text';
            var9['type'] = var4;
            var9['content'] = var10;
            var4 = {};
            var12 = 0;
            var4['index'] = var12;
            var4[0] = var10;
            var9['originalMatch'] = var4;
            var4 = new Array(1);
            var4[0] = var9;
            var11 = var4;
case 51:
            var9 = var11;
            if(!var3) { _fun0013_ip = 52; continue _fun0013 }
case 53:
            var10 = _closure1_slot10;
            var4 = null;
            var3 = var2;
            if(!(var4 != var6)) { _fun0013_ip = 54; continue _fun0013 }
case 55:
            var3 = var6;
case 54:
            var4 = var3.embeds;
            var3 = undefined;
            var9 = var10.bind(var3)(var11, var4);
case 52:
            var3 = var5;
            if(var3) { _fun0013_ip = 56; continue _fun0013 }
case 57:
            var10 = var2.type;
            var4 = _closure1_slot3;
            var4 = var4.MEDIA_MENTION_MESSAGE;
            var3 = var10 === var4;
case 56:
            if(var3) { _fun0013_ip = 58; continue _fun0013 }
case 59:
            if(var7) { _fun0013_ip = 60; continue _fun0013 }
case 61:
            var3 = 0;
            var4 = var9[var3];
            var10 = var4.type;
            var4 = 'paragraph';
            var4 = var4 === var10;
            if(!var4) { _fun0013_ip = 62; continue _fun0013 }
case 63:
            var10 = var9[var3];
            var10 = var10.content;
            var8 = var8.Array;
            var4 = var10 instanceof var8;
case 62:
            if(!var4) { _fun0013_ip = 58; continue _fun0013 }
case 64:
            var4 = var9[var3];
            var10 = _closure1_slot6;
            var3 = var9[var3];
            var3 = var3.content;
            var8 = undefined;
            var8 = var10.bind(var8)(var3);
            var4['content'] = var3;
            _fun0013_ip = 58; continue _fun0013;
case 60:
            var4 = _closure1_slot6;
            var3 = undefined;
            var3 = var4.bind(var3)(var9);
case 58:
            var8 = var9;
            if(!var1) { _fun0013_ip = 65; continue _fun0013 }
case 66:
            var4 = _closure1_slot12;
            var1 = _closure1_slot11;
            var3 = undefined;
            var1 = var1.bind(var3)(var9);
            var8 = var4.bind(var3)(var1);
case 65:
            var3 = _closure1_slot13;
            var4 = undefined;
            var3 = var3.bind(var4)(var8);
            var8 = null;
            if(!(var8 != var6)) { _fun0013_ip = 67; continue _fun0013 }
case 68:
            var2 = var6;
case 67:
            var2 = var2.embeds;
            var6 = var2.length;
            var2 = 0;
            var6 = var6 > var2;
            var2 = false;
            if(!var6) { _fun0013_ip = 69; continue _fun0013 }
case 70:
            var6 = _closure1_slot7;
            var2 = var6.bind(var4)(var3, var7);
case 69:
            if(!var5) { _fun0013_ip = 71; continue _fun0013 }
case 72:
            var1 = _closure1_slot14;
            var1 = var1.bind(var4)(var3);
case 71:
            var1 = {};
            var1['ast'] = var3;
            var1['hasSpoilerEmbeds'] = var2;
            return var1;
        }
    };
    var3['runMessageMarkupPostProcessors'] = var2;
    return var1;
})();