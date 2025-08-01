// app/modules/forwarding/ForwardPreviewUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/forwarding/ForwardPreviewUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useForwardPreviewContent(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var11 = var2.message;
            var _closure2_slot0 = var11;
            var3 = var2.channel;
            var _closure2_slot1 = var3;
            var3 = var2.forwardOptions;
            var2 = undefined;
            var _closure2_slot2 = var2;
            var _closure2_slot3 = var2;
            var5 = null;
            var6 = var5 == var3;
            var4 = undefined;
            if(var6) { _fun0001_ip = 56; continue _fun0001 }
 50:
            var4 = var3.onlyAttachmentIds;
 56:
            _closure2_slot2 = var4;
            var7 = var5 == var3;
            var6 = undefined;
            if(var7) { _fun0001_ip = 75; continue _fun0001 }
 69:
            var6 = var3.onlyEmbedIndices;
 75:
            _closure2_slot3 = var6;
            var3 = var11.messageSnapshots;
            var8 = 0;
            var7 = var3[var8];
            var9 = var5 == var7;
            var3 = undefined;
            if(var9) { _fun0001_ip = 105; continue _fun0001 }
 100:
            var3 = var7.message;
 105:
            if(!(var5 != var3)) { _fun0001_ip = 112; continue _fun0001 }
 109:
            var11 = var3;
 112:
            var7 = var11.attachments;
            if(!(var5 == var4)) { _fun0001_ip = 132; continue _fun0001 }
 122:
            if(!(var5 != var6)) { _fun0001_ip = 155; continue _fun0001 }
 126:
            var7 = new Array(0);
            _fun0001_ip = 155; continue _fun0001;
 132:
            var10 = var11.attachments;
            var9 = var10.filter;
            var3 = function(arg1) {
                var3 = _closure2_slot2;
                var2 = var3.includes;
                var1 = arg1;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var9.bind(var10)(var3);
 155:
            var3 = new Array(0);
            var12 = _closure1_slot0;
            var13 = _closure1_slot1;
            var10 = 1;
            var10 = var13[var10];
            var13 = var12.bind(var2)(var10);
            var12 = var13.useStateFromStores;
            var9 = _closure1_slot2;
            var10 = new Array(1);
            var10[0] = var9;
            var9 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0002_ip = 64; continue _fun0002 }
 16:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var4 = 2;
                    var5 = var5[var4];
                    var4 = undefined;
                    var6 = var6.bind(var4)(var5);
                    var5 = var6.canEmbedLinks;
                    var4 = _closure2_slot1;
                    var3 = _closure1_slot2;
                    var3 = var5.bind(var6)(var4, var3);
                    var1 = !var3;
 64:
                    if(!var1) { _fun0002_ip = 107; continue _fun0002 }
 67:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var3 = 2;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var3 = var4.shouldStripEmbeds;
                    var2 = _closure2_slot0;
                    var1 = var3.bind(var4)(var2);
 107:
                    return var1;
                }
            };
            var9 = var12.bind(var13)(var10, var9);
            if(var9) { _fun0001_ip = 261; continue _fun0001 }
 215:
            var9 = var11.embeds;
            if(!(var5 == var6)) { _fun0001_ip = 235; continue _fun0001 }
 225:
            if(!(var5 != var4)) { _fun0001_ip = 233; continue _fun0001 }
 229:
            var9 = new Array(0);
 233:
            _fun0001_ip = 258; continue _fun0001;
 235:
            var13 = var11.embeds;
            var12 = var13.filter;
            var10 = function(arg1, arg2) {
                var3 = _closure2_slot3;
                var2 = var3.includes;
                var1 = arg2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var12.bind(var13)(var10);
 258:
            var3 = var9;
 261:
            var6 = var5 != var6;
            if(var6) { _fun0001_ip = 296; continue _fun0001 }
 268:
            var10 = var11.content;
            var9 = '';
            var9 = var9 === var10;
            if(!var9) { _fun0001_ip = 293; continue _fun0001 }
 284:
            var10 = var3.length;
            var9 = var10 > var8;
 293:
            var6 = var9;
 296:
            var10 = var11;
            if(!var6) { _fun0001_ip = 348; continue _fun0001 }
 302:
            var9 = var11.set;
            var6 = var3.map;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.url;
                return var1;
            };
            var12 = var6.bind(var3)(var1);
            var6 = var12.join;
            var1 = '\n';
            var6 = var6.bind(var12)(var1);
            var1 = 'content';
            var10 = var9.bind(var11)(var1, var6);
 348:
            var1 = var10.content;
            var6 = '';
            var1 = var6 === var1;
            if(!var1) { _fun0001_ip = 393; continue _fun0001 }
 364:
            var9 = var10.embeds;
            var9 = var9[var8];
            var11 = var5 == var9;
            var2 = undefined;
            if(var11) { _fun0001_ip = 389; continue _fun0001 }
 383:
            var2 = var9.rawDescription;
 389:
            var1 = var5 != var2;
 393:
            var2 = var10;
            if(!var1) { _fun0001_ip = 430; continue _fun0001 }
 399:
            var9 = var10.set;
            var1 = var10.embeds;
            var1 = var1[var8];
            var8 = var1.rawDescription;
            var1 = 'content';
            var2 = var9.bind(var10)(var1, var8);
 430:
            var1 = {};
            var1['attachments'] = var7;
            var1['embeds'] = var3;
            var3 = var2.content;
            var3 = var6 !== var3;
            if(!var3) { _fun0001_ip = 458; continue _fun0001 }
 454:
            var3 = var5 == var4;
 458:
            var1['hasContent'] = var3;
            var1['contentMessage'] = var2;
            return var1;
        }
    };
    var3['useForwardPreviewContent'] = var2;
    return var1;
})();