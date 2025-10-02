// app/modules/messages/LegacyCommands.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var7;
    var1 = function executeCommand(arg1, arg2, arg3, arg4) {
        var4 = arg2;
        var5 = _closure1_slot1;
        var3 = _closure1_slot2;
        var2 = 10;
        var3 = var3[var2];
        var2 = undefined;
        var5 = var5.bind(var2)(var3);
        var3 = var5.trackWithMetadata;
        var1 = _closure1_slot6;
        var2 = var1.SLASH_COMMAND_USED;
        var1 = {};
        var6 = arg1;
        var1['command'] = var6;
        var1 = var3.bind(var5)(var2, var1);
        var3 = var4.action;
        var2 = arg3;
        var1 = arg4;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot11 = var1;
    var5 = global;
    var9 = var5.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var10.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var10.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var10.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var8 = var4.AnalyticEvents;
    var _closure1_slot6 = var8;
    var8 = var4.MARKDOWN_SPOILER_WRAPPER;
    var _closure1_slot7 = var8;
    var4 = var4.ME;
    var _closure1_slot8 = var4;
    var4 = /\\([*?+\/])/g;
    var _closure1_slot9 = var4;
    var4 = {};
    var8 = {};
    var9 = function action() {
        var1 = {};
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 4;
        var3 = var3[var2];
        var2 = undefined;
        var2 = var4.bind(var2)(var3);
        var3 = var2.EnableTTSCommand;
        var2 = var3.getSetting;
        var2 = var2.bind(var3)();
        var1['tts'] = var2;
        return var1;
    };
    var8['action'] = var9;
    var4['tts'] = var8;
    var8 = {};
    var9 = function action(arg1) {
        var1 = {};
        var2 = global;
        var2 = var2.HermesInternal;
        var4 = var2.concat;
        var3 = '_';
        var2 = arg1;
        var2 = var4.bind(var3)(var2, var3);
        var1['content'] = var2;
        return var1;
    };
    var8['action'] = var9;
    var4['me'] = var8;
    var8 = {};
    var9 = function action(arg1) {
        var1 = {};
        var2 = global;
        var2 = var2.HermesInternal;
        var5 = var2.concat;
        var4 = '';
        var3 = arg1;
        var2 = ' (╯°□°)╯︵ ┻━┻';
        var3 = var5.bind(var4)(var3, var2);
        var2 = var3.trim;
        var2 = var2.bind(var3)();
        var1['content'] = var2;
        return var1;
    };
    var8['action'] = var9;
    var4['tableflip'] = var8;
    var8 = {};
    var9 = function action(arg1) {
        var1 = {};
        var2 = global;
        var2 = var2.HermesInternal;
        var5 = var2.concat;
        var4 = '';
        var3 = arg1;
        var2 = ' ┬─┬ノ( º _ ºノ)';
        var3 = var5.bind(var4)(var3, var2);
        var2 = var3.trim;
        var2 = var2.bind(var3)();
        var1['content'] = var2;
        return var1;
    };
    var8['action'] = var9;
    var4['unflip'] = var8;
    var8 = {};
    var9 = function action(arg1) {
        var1 = {};
        var2 = global;
        var2 = var2.HermesInternal;
        var5 = var2.concat;
        var4 = '';
        var3 = arg1;
        var2 = ' ¯\\_(ツ)_/¯';
        var3 = var5.bind(var4)(var3, var2);
        var2 = var3.trim;
        var2 = var2.bind(var3)();
        var1['content'] = var2;
        return var1;
    };
    var8['action'] = var9;
    var4['shrug'] = var8;
    var8 = {};
    var9 = function action(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg2;
            var2 = var1.channel;
            var3 = var2.guild_id;
            var1 = null;
            if(!(var1 == var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = undefined;
            return var1;
case 2:
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 5;
            var4 = var4[var3];
            var3 = undefined;
            var6 = var5.bind(var3)(var4);
            var5 = var6.changeNickname;
            var10 = var2.guild_id;
            var9 = var2.id;
            var8 = _closure1_slot8;
            var7 = arg1;
            var11 = var6;
            var1 = var11[var5](var10, var9, var8, var7, var6);
            var1 = {};
            var2 = '';
            var1['content'] = var2;
            return var1;
        }
    };
    var8['action'] = var9;
    var4['nick'] = var8;
    var8 = {};
    var9 = 6;
    var11 = var7[var9];
    var13 = var10.bind(var1)(var11);
    var12 = var13.anyScopeRegex;
    var11 = /^\+:(.+?): *$/;
    var11 = var12.bind(var13)(var11);
    var8['match'] = var11;
    var11 = function action(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var8 = arg1;
            var2 = arg2;
            var1 = var2.isEdit;
            var2 = var2.channel;
            if(var1) { _fun0002_ip = 4; continue _fun0002 }
case 2:
            var5 = _closure1_slot5;
            var4 = var5.hasPresent;
            var1 = var2.id;
            var1 = var4.bind(var5)(var1);
            if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var5 = _closure1_slot5;
            var4 = var5.getMessages;
            var1 = var2.id;
            var4 = var4.bind(var5)(var1);
            var1 = var4.last;
            var1 = var1.bind(var4)();
            var4 = null;
            if(!(var4 != var1)) { _fun0002_ip = 4; continue _fun0002 }
case 6:
            var5 = var1.id;
            if(!(var4 != var5)) { _fun0002_ip = 4; continue _fun0002 }
case 7:
            var7 = _closure1_slot4;
            var6 = var7.getDisambiguatedEmojiContext;
            var5 = var2.guild_id;
            var7 = var6.bind(var7)(var5);
            var6 = var7.getByName;
            var5 = var8.trim;
            var10 = var5.bind(var8)();
            var9 = var10.slice;
            var8 = 2;
            var5 = -1;
            var5 = var9.bind(var10)(var8, var5);
            var7 = var6.bind(var7)(var5);
            if(!(var4 != var7)) { _fun0002_ip = 4; continue _fun0002 }
case 8:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 7;
            var3 = var9[var3];
            var6 = undefined;
            var5 = var8.bind(var6)(var3);
            var4 = var5.addReaction;
            var3 = var2.id;
            var2 = var1.id;
            var1 = 8;
            var1 = var9[var1];
            var6 = var8.bind(var6)(var1);
            var1 = var6.toReactionEmoji;
            var1 = var1.bind(var6)(var7);
            var1 = var4.bind(var5)(var3, var2, var1);
            var1 = {};
            var2 = '';
            var1['content'] = var2;
            return var1;
case 4:
            var1 = undefined;
            return var1;
        }
    };
    var8['action'] = var11;
    var4['reaction'] = var8;
    var8 = {};
    var9 = var7[var9];
    var11 = var10.bind(var1)(var9);
    var10 = var11.anyScopeRegex;
    var9 = /^s\\/([^\\/\\]*(?:\\.[^\\/\\]*)*)\\/([^\\/\\]*(?:\\.[^\\/\\]*)*)(?:\\/([g]*))?$/;
    var9 = var10.bind(var11)(var9);
    var8['match'] = var9;
    var9 = function action(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var10 = arg1;
            var2 = arg2;
            var1 = var2.isEdit;
            var2 = var2.channel;
            if(var1) { _fun0003_ip = 9; continue _fun0003 }
case 10:
            var5 = _closure1_slot5;
            var4 = var5.getLastEditableMessage;
            var1 = var2.id;
            var1 = var4.bind(var5)(var1);
            var4 = null;
            if(!(var4 != var1)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var5 = var1.id;
            if(!(var4 != var5)) { _fun0003_ip = 11; continue _fun0003 }
case 13:
            var5 = global;
            var8 = var5.Array;
            var7 = var8.from;
            var9 = var10.match;
            var5 = this;
            var5 = var5.match;
            var5 = var5.regex;
            var5 = var9.bind(var10)(var5);
            if(!(var4 == var5)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var5 = new Array(0);
case 14:
            var9 = var7.bind(var8)(var5);
            var8 = _closure1_slot3;
            var5 = undefined;
            var7 = 4;
            var9 = var8.bind(var5)(var9, var7);
            var7 = 0;
            var8 = var9[var7];
            var8 = 1;
            var13 = var9[var8];
            var8 = 2;
            var12 = var9[var8];
            var8 = 3;
            var11 = var9[var8];
            var8 = var4 == var11;
            var9 = undefined;
            if(var8) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var10 = var11.split;
            var8 = '';
            var9 = var10.bind(var11)(var8);
case 16:
            if(!(var4 == var9)) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var9 = new Array(0);
case 18:
            var11 = var13.replace;
            var10 = _closure1_slot9;
            var8 = function(arg1, arg2) {
                var1 = arg2;
                return var1;
            };
            var11 = var11.bind(var13)(var10, var8);
            var8 = var12.replace;
            var6 = function(arg1, arg2) {
                var1 = arg2;
                return var1;
            };
            var10 = var8.bind(var12)(var10, var6);
            var8 = var9.includes;
            var6 = 'g';
            var6 = var8.bind(var9)(var6);
            var9 = var1.content;
            if(var6) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var6 = var9.replace;
            var6 = var6.bind(var9)(var11, var10);
            _fun0003_ip = 22; continue _fun0003;
case 20:
            var8 = var9.replaceAll;
            var6 = var8.bind(var9)(var11, var10);
case 22:
            if(!(var4 != var6)) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var4 = var6.trim;
            var8 = var4.bind(var6)();
            var4 = '';
            if(!(var4 === var8)) { _fun0003_ip = 25; continue _fun0003 }
case 23:
            var4 = var1.attachments;
            var4 = var4.length;
            if(!(var7 === var4)) { _fun0003_ip = 25; continue _fun0003 }
case 26:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var4 = 9;
            var4 = var8[var4];
            var9 = var7.bind(var5)(var4);
            var8 = var9.deleteMessage;
            var7 = var2.id;
            var4 = var1.id;
            var4 = var8.bind(var9)(var7, var4);
            _fun0003_ip = 27; continue _fun0003;
case 25:
            var4 = var1.content;
            if(!(var6 !== var4)) { _fun0003_ip = 27; continue _fun0003 }
case 28:
            var4 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 9;
            var3 = var7[var3];
            var5 = var4.bind(var5)(var3);
            var4 = var5.editMessage;
            var3 = var2.id;
            var2 = var1.id;
            var1 = {};
            var1['content'] = var6;
            var1 = var4.bind(var5)(var3, var2, var1);
case 27:
            var1 = {};
            var2 = '';
            var1['content'] = var2;
            return var1;
case 11:
            var1 = {};
            var2 = '';
            var1['content'] = var2;
            return var1;
case 9:
            var1 = undefined;
            return var1;
        }
    };
    var8['action'] = var9;
    var4['searchReplace'] = var8;
    var8 = {};
    var9 = function action(arg1) {
        var1 = {};
        var4 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var3 = var4.bind(var3)(var2);
        var2 = var3.trim;
        var2 = var2.bind(var3)();
        var1['content'] = var2;
        return var1;
    };
    var8['action'] = var9;
    var4['spoiler'] = var8;
    var _closure1_slot10 = var4;
    var9 = var5.Object;
    var8 = var9.setPrototypeOf;
    var5 = null;
    var5 = var8.bind(var9)(var4, var5);
    var5 = 11;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/messages/LegacyCommands.tsx';
    var5 = var6.bind(var7)(var5);
    var3['COMMANDS'] = var4;
    var2 = function handleLegacyCommands(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var6 = arg1;
            var12 = _closure1_slot10;
            var1 = undefined;
            var8 = null;
            var7 = undefined;
            for(var9 in var12)
case 29:
            {
case 30:
                var5 = var9;
                var3 = _closure1_slot10;
                var4 = var3[var5];
                var3 = var4.match;
                if(var8 == var3) { _fun0004_ip = 29; continue _fun0004 }
case 31:
                var3 = var4.match;
                var14 = var3.regex;
                var7 = var14;
                if(var8 == var7) { _fun0004_ip = 29; continue _fun0004 }
case 32:
                var3 = var14.test;
                var3 = var3.bind(var14)(var6);
                var7 = var14;
                if(!var3) { _fun0004_ip = 29; continue _fun0004 }
case 33:
                var3 = _closure1_slot11;
                var15 = arg2;
                var19 = undefined;
                var18 = var5;
                var17 = var4;
                var16 = var6;
                var2 = var19[var3](var18, var17, var16, var15, var14);
                return var2;
            }
case 34:
            return var1;
        }
    };
    var3['handleLegacyCommands'] = var2;
    return var1;
})();