// app/modules/messages/native/renderer/redactRestrictedContent.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = function nodeToText(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = arg1;
            var4 = null;
            var2 = var4 == var7;
            var6 = '';
            var1 = var6;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = 'string';
            var3 = typeof var7;
            var2 = var7;
            if(!(var5 !== var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = global;
            var8 = var3.Array;
            var3 = var8.isArray;
            var3 = var3.bind(var8)(var7);
            if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = var7.content;
            var3 = typeof var3;
            if(!(var5 !== var3)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = var7.content;
            var4 = var4 != var3;
            var3 = var6;
            if(!var4) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var8 = _closure1_slot0;
            var5 = var7.content;
            var4 = undefined;
            var3 = var8.bind(var4)(var5);
case 10:
            _fun0001_ip = 12; continue _fun0001;
case 8:
            var3 = var7.content;
case 12:
            _fun0001_ip = 13; continue _fun0001;
case 6:
            var5 = var7.map;
            var4 = _closure1_slot0;
            var5 = var5.bind(var7)(var4);
            var4 = var5.join;
            var3 = var4.bind(var5)(var6);
case 13:
            var2 = var3;
case 4:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot0 = var1;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var2);
    var2 = dependencyMap;
    var1 = 0;
    var5 = var2[var1];
    var2 = require;
    var1 = undefined;
    var6 = var2.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var2 = 'modules/messages/native/renderer/redactRestrictedContent.tsx';
    var2 = var5.bind(var6)(var2);
    var2 = function redactRestrictedContent(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var6 = null;
            if(!(var6 != var1)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var3 = 'string';
            var2 = typeof var1;
            if(!(var3 !== var2)) { _fun0002_ip = 14; continue _fun0002 }
case 16:
            var3 = global;
            var4 = var3.Array;
            var2 = var4.isArray;
            var2 = var2.bind(var4)(var1);
            if(var2) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var4 = var1.type;
            var2 = 'link';
            if(!(var2 !== var4)) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var4 = var1.type;
            var2 = 'attachmentLink';
            if(!(var2 !== var4)) { _fun0002_ip = 19; continue _fun0002 }
case 21:
            var4 = var1.type;
            var2 = 'customEmoji';
            if(!(var2 !== var4)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var2 = var1.content;
            var5 = var1;
            if(!(var6 != var2)) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var2 = {};
            var10 = var2;
            var9 = var1;
            var4 = copyDataProperties(var10, var9);
            var8 = _closure1_slot1;
            var7 = var1.content;
            var4 = undefined;
            var7 = var8.bind(var4)(var7);
            var4 = 'content';
            var2[3] = var7;
            var5 = var2;
case 24:
            var4 = var1.items;
            var2 = var5;
            if(!(var6 != var4)) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var4 = {};
            var10 = var4;
            var9 = var5;
            var5 = copyDataProperties(var10, var9);
            var7 = _closure1_slot1;
            var6 = var1.items;
            var5 = undefined;
            var6 = var7.bind(var5)(var6);
            var5 = 'items';
            var4[4] = var6;
            var2 = var4;
case 26:
            return var2;
case 22:
            var2 = {};
            var4 = 'text';
            var2['type'] = var4;
            var5 = var1.alt;
            var3 = var3.HermesInternal;
            var4 = var3.concat;
            var3 = ':';
            var3 = var4.bind(var3)(var5, var3);
            var2['content'] = var3;
            return var2;
case 19:
            var2 = {};
            var3 = 'inlineCode';
            var2['type'] = var3;
            var5 = _closure1_slot0;
            var4 = var1.content;
            var3 = undefined;
            var3 = var5.bind(var3)(var4);
            var2['content'] = var3;
            return var2;
case 17:
            var3 = var1.map;
            var2 = _closure1_slot1;
            var2 = var3.bind(var1)(var2);
            return var2;
case 14:
            return var1;
        }
    };
    var _closure1_slot1 = var2;
    var3['default'] = var2;
    return var1;
})();