// app/modules/messages/native/renderer/row_data/embeds/PostPreviewEmbeds.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function PostPreviewEmbed(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var4 = var2.url;
            var _closure2_slot0 = var4;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 7;
            var8 = var7[var3];
            var5 = undefined;
            var11 = var6.bind(var5)(var8);
            var10 = var11.useStateFromStores;
            var8 = _closure1_slot4;
            var9 = new Array(1);
            var9[0] = var8;
            var8 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 8;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.getMediaPostEmbedChannelId;
                    var3 = _closure2_slot0;
                    var4 = var4.bind(var5)(var3);
                    var3 = null;
                    var3 = var3 != var4;
                    if(!var3) { _fun0002_ip = 67; continue _fun0002 }
 52:
                    var3 = _closure1_slot4;
                    var2 = var3.getMediaPostEmbed;
                    var1 = var2.bind(var3)(var4);
 67:
                    return var1;
                }
            };
            var8 = var10.bind(var11)(var9, var8);
            var3 = var7[var3];
            var8 = var6.bind(var5)(var3);
            var6 = var8.useStateFromStores;
            var9 = _closure1_slot3;
            var3 = new Array(1);
            var3[0] = var9;
            var1 = function() {
                var1 = _closure1_slot3;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var3 = var6.bind(var8)(var3, var1);
            var6 = _closure1_slot1;
            var1 = 6;
            var1 = var7[var1];
            var1 = var6.bind(var5)(var1);
            var6 = var1.bind(var5)(var4, var3);
            var1 = null;
            var3 = var1 == var6;
            if(var3) { _fun0001_ip = 181; continue _fun0001 }
 139:
            var4 = _closure1_slot6;
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 9;
            var2 = var7[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var13 = var2;
            var12 = var6;
            var6 = copyDataProperties(var13, var12);
            var1 = var4.bind(var5)(var3, var2);
 181:
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MessageEmbedTypes;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/row_data/embeds/PostPreviewEmbeds.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function PostPreviewEmbeds(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var6 = var1.message;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 10;
            var2 = var8[var2];
            var4 = undefined;
            var2 = var3.bind(var4)(var2);
            var5 = var2.RenderEmbeds;
            var2 = var5.useSetting;
            var5 = var2.bind(var5)();
            var2 = 5;
            var2 = var8[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useEligibleForGuildMediaChannelPostPreviewEmbed;
            var7 = var2.bind(var3)();
            var3 = _closure1_slot6;
            var2 = _closure1_slot1;
            var1 = 11;
            var1 = var8[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var8 = 'postPreviewEmbeds';
            var1['keyPath'] = var8;
            if(!var5) { _fun0003_ip = 110; continue _fun0003 }
 107:
            var5 = var7;
 110:
            if(!var5) { _fun0003_ip = 138; continue _fun0003 }
 113:
            var8 = var6.embeds;
            var7 = var8.map;
            var6 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = arg1;
                    var6 = var2.type;
                    var1 = _closure1_slot5;
                    var4 = var1.POST_PREVIEW;
                    var5 = null;
                    var1 = null;
                    if(!(var6 === var4)) { _fun0004_ip = 76; continue _fun0004 }
 29:
                    var4 = var2.url;
                    var4 = var5 == var4;
                    var1 = null;
                    if(var4) { _fun0004_ip = 76; continue _fun0004 }
 43:
                    var6 = _closure1_slot6;
                    var5 = _closure1_slot7;
                    var4 = {};
                    var3 = var2.url;
                    var4['url'] = var3;
                    var3 = var2.id;
                    var2 = undefined;
                    var1 = var6.bind(var2)(var5, var4, var3);
 76:
                    return var1;
                }
            };
            var5 = var7.bind(var8)(var6);
 138:
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function createPostPreviewEmbeds(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arguments[1];
            var4 = undefined;
            if(!(var1 === var4)) { _fun0005_ip = 13; continue _fun0005 }
 11:
            var1 = false;
 13:
            var _closure2_slot0 = var1;
            var1 = new Array(0);
            var _closure2_slot1 = var1;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 5;
            var3 = var6[var3];
            var5 = var5.bind(var4)(var3);
            var3 = var5.isEligibleForGuildMediaChannelPostPreviewEmbed;
            var5 = var3.bind(var5)();
            var3 = false;
            var3 = var3 === var5;
            var4 = undefined;
            if(var3) { _fun0005_ip = 87; continue _fun0005 }
 69:
            var5 = arg1;
            var5 = var5.embeds;
            var6 = null;
            var3 = var6 == var5;
            var4 = var5;
 87:
            if(var3) { _fun0005_ip = 107; continue _fun0005 }
 90:
            var3 = var4.forEach;
            var2 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var2 = arg1;
                    var4 = var2.type;
                    var3 = _closure1_slot5;
                    var3 = var3.POST_PREVIEW;
                    if(!(var4 === var3)) { _fun0006_ip = 85; continue _fun0006 }
 25:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 6;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var2.url;
                    var3 = _closure2_slot0;
                    var4 = var5.bind(var1)(var4, var3);
                    var3 = null;
                    if(!(var3 != var4)) { _fun0006_ip = 89; continue _fun0006 }
 71:
                    var3 = _closure2_slot1;
                    var2 = var3.push;
                    var2 = var2.bind(var3)(var4);
 85:
                    var2 = undefined;
                    return var2;
 89:
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
 107:
            return var1;
        }
    };
    var3['createPostPreviewEmbeds'] = var2;
    return var1;
})();