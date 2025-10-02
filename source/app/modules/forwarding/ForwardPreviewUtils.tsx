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
case 0:
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
            if(var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var3.onlyAttachmentIds;
case 2:
            _closure2_slot2 = var4;
            var7 = var5 == var3;
            var6 = undefined;
            if(var7) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = var3.onlyEmbedIndices;
case 4:
            _closure2_slot3 = var6;
            var3 = var11.messageSnapshots;
            var8 = 0;
            var7 = var3[var8];
            var9 = var5 == var7;
            var3 = undefined;
            if(var9) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = var7.message;
case 6:
            if(!(var5 != var3)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var11 = var3;
case 8:
            var7 = var11.attachments;
            if(!(var5 == var4)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            if(!(var5 != var6)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = new Array(0);
            _fun0001_ip = 12; continue _fun0001;
case 10:
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
case 12:
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
case 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0002_ip = 14; continue _fun0002 }
case 15:
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
case 14:
                    if(!var1) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var3 = 2;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var3 = var4.shouldStripEmbeds;
                    var2 = _closure2_slot0;
                    var1 = var3.bind(var4)(var2);
case 16:
                    return var1;
                }
            };
            var9 = var12.bind(var13)(var10, var9);
            if(var9) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var9 = var11.embeds;
            if(!(var5 == var6)) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            if(!(var5 != var4)) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var9 = new Array(0);
case 22:
            _fun0001_ip = 24; continue _fun0001;
case 20:
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
case 24:
            var3 = var9;
case 18:
            var6 = var5 != var6;
            if(var6) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var10 = var11.content;
            var9 = '';
            var9 = var9 === var10;
            if(!var9) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var10 = var3.length;
            var9 = var10 > var8;
case 27:
            var6 = var9;
case 25:
            var10 = var11;
            if(!var6) { _fun0001_ip = 29; continue _fun0001 }
case 30:
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
case 29:
            var1 = var10.content;
            var6 = '';
            var1 = var6 === var1;
            if(!var1) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var9 = var10.embeds;
            var9 = var9[var8];
            var11 = var5 == var9;
            var2 = undefined;
            if(var11) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var2 = var9.rawDescription;
case 33:
            var1 = var5 != var2;
case 31:
            var2 = var10;
            if(!var1) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var9 = var10.set;
            var1 = var10.embeds;
            var1 = var1[var8];
            var8 = var1.rawDescription;
            var1 = 'content';
            var2 = var9.bind(var10)(var1, var8);
case 35:
            var1 = {};
            var1['attachments'] = var7;
            var1['embeds'] = var3;
            var3 = var2.content;
            var3 = var6 !== var3;
            if(!var3) { _fun0001_ip = 37; continue _fun0001 }
case 38:
            var3 = var5 == var4;
case 37:
            var1['hasContent'] = var3;
            var1['contentMessage'] = var2;
            return var1;
        }
    };
    var3['useForwardPreviewContent'] = var2;
    return var1;
})();