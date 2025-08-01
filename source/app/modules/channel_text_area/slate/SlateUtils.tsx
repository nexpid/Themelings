// app/modules/channel_text_area/slate/SlateUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var4 = function toRichValue(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var1 = '';
            if(!(var1 === var4)) { _fun0001_ip = 20; continue _fun0001 }
 11:
            var1 = _closure1_slot0;
            _fun0001_ip = 51; continue _fun0001;
 20:
            var3 = var4.split;
            var2 = '\n';
            var4 = var3.bind(var4)(var2);
            var3 = var4.map;
            var2 = function(arg1) {
                var1 = {};
                var2 = 'line';
                var1['type'] = var2;
                var3 = {};
                var2 = arg1;
                var3['text'] = var2;
                var2 = new Array(1);
                var2[0] = var3;
                var1['children'] = var2;
                return var1;
            };
            var1 = var3.bind(var4)(var2);
 51:
            return var1;
        }
    };
    var _closure1_slot1 = var4;
    var9 = global;
    var7 = var9.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var5);
    var6 = var9.Object;
    var5 = var6.freeze;
    var8 = var9.Object;
    var7 = var8.freeze;
    var1 = {};
    var10 = 'line';
    var1['type'] = var10;
    var11 = var9.Object;
    var10 = var11.freeze;
    var13 = var9.Object;
    var12 = var13.freeze;
    var9 = {};
    var14 = '';
    var9['text'] = var14;
    var12 = var12.bind(var13)(var9);
    var9 = new Array(1);
    var9[0] = var12;
    var9 = var10.bind(var11)(var9);
    var1['children'] = var9;
    var7 = var7.bind(var8)(var1);
    var1 = new Array(1);
    var1[0] = var7;
    var1 = var5.bind(var6)(var1);
    var _closure1_slot0 = var1;
    var5 = dependencyMap;
    var1 = 0;
    var6 = var5[var1];
    var5 = require;
    var1 = undefined;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/channel_text_area/slate/SlateUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function createEmptyState() {
        var1 = {};
        var2 = '';
        var1['textValue'] = var2;
        var3 = {};
        var4 = 'line';
        var3['type'] = var4;
        var4 = {};
        var4['text'] = var2;
        var2 = new Array(1);
        var2[0] = var4;
        var3['children'] = var2;
        var2 = new Array(1);
        var2[0] = var3;
        var1['richValue'] = var2;
        return var1;
    };
    var3['createEmptyState'] = var5;
    var5 = function createState(arg1) {
        var4 = arg1;
        var1 = {};
        var1['textValue'] = var4;
        var3 = _closure1_slot1;
        var2 = undefined;
        var2 = var3.bind(var2)(var4);
        var1['richValue'] = var2;
        return var1;
    };
    var3['createState'] = var5;
    var3['toRichValue'] = var4;
    var2 = function voidToOptionValue(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var10 = var2.type;
            var3 = 'userMention';
            if(!(var3 !== var10)) { _fun0002_ip = 311; continue _fun0002 }
 21:
            var4 = 'channelMention';
            if(!(var4 !== var10)) { _fun0002_ip = 294; continue _fun0002 }
 32:
            var5 = 'soundboard';
            if(!(var5 !== var10)) { _fun0002_ip = 266; continue _fun0002 }
 43:
            var6 = 'roleMention';
            if(!(var6 !== var10)) { _fun0002_ip = 247; continue _fun0002 }
 54:
            var7 = 'textMention';
            if(!(var7 !== var10)) { _fun0002_ip = 230; continue _fun0002 }
 67:
            var8 = 'emoji';
            if(!(var8 !== var10)) { _fun0002_ip = 190; continue _fun0002 }
 75:
            var9 = 'customEmoji';
            if(!(var9 !== var10)) { _fun0002_ip = 133; continue _fun0002 }
 83:
            var1 = 'testInlineVoid';
            if(!(var1 !== var10)) { _fun0002_ip = 97; continue _fun0002 }
 93:
            var1 = null;
            return var1;
 97:
            var1 = global;
            var11 = var1.Error;
            var1 = var11.prototype;
            var10 = Object.create(var1, {constructor: {value: var11}});
            var12 = 'Unable to convert test types';
            var13 = var10;
            var1 = new var13[var11](var12, var11);
            var1 = var1 instanceof Object ? var1 : var10;
            throw var1;
 133:
            var1 = {};
            var1['type'] = var9;
            var9 = var2.emoji;
            var9 = var9.emojiId;
            var1['emojiId'] = var9;
            var9 = var2.emoji;
            var9 = var9.name;
            var1['name'] = var9;
            var9 = var2.emoji;
            var9 = var9.animated;
            var1['animated'] = var9;
            return var1;
 190:
            var1 = {};
            var1['type'] = var8;
            var8 = var2.emoji;
            var8 = var8.name;
            var1['name'] = var8;
            var8 = var2.emoji;
            var8 = var8.surrogate;
            var1['surrogate'] = var8;
            return var1;
 230:
            var1 = {};
            var1['type'] = var7;
            var7 = var2.name;
            var1['text'] = var7;
            return var1;
 247:
            var1 = {};
            var1['type'] = var6;
            var6 = var2.roleId;
            var1['roleId'] = var6;
            return var1;
 266:
            var1 = {};
            var1['type'] = var5;
            var5 = var2.guildId;
            var1['guildId'] = var5;
            var5 = var2.soundId;
            var1['soundId'] = var5;
            return var1;
 294:
            var1 = {};
            var1['type'] = var4;
            var4 = var2.channelId;
            var1['channelId'] = var4;
            return var1;
 311:
            var1 = {};
            var1['type'] = var3;
            var2 = var2.userId;
            var1['userId'] = var2;
            return var1;
        }
    };
    var3['voidToOptionValue'] = var2;
    return var1;
})();