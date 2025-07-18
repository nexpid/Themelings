// app/modules/messages/native/renderer/system_messages/useAuthorWithProcessedColor.tsx
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
    var4 = var4.processColor;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/system_messages/useAuthorWithProcessedColor.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getMessageAuthorWithProcessedColor(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 1;
            var1 = var4[var1];
            var6 = undefined;
            var4 = var2.bind(var6)(var1);
            var2 = var4.getMessageAuthor;
            var1 = arg1;
            var1 = var2.bind(var4)(var1);
            var4 = var1.nick;
            var8 = var1.colorString;
            var5 = var1.colorStrings;
            var2 = var1.guildId;
            var1 = {};
            var1['nick'] = var4;
            var4 = null;
            var7 = var4 != var8;
            var4 = undefined;
            if(!var7) { _fun0001_ip = 89; continue _fun0001 }
 80:
            var7 = _closure1_slot3;
            var4 = var7.bind(var6)(var8);
 89:
            var1['colorString'] = var4;
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 2;
            var3 = var7[var3];
            var4 = var4.bind(var6)(var3);
            var3 = var4.processColorStrings;
            var3 = var3.bind(var4)(var5);
            var1['colorStrings'] = var3;
            var1['guildId'] = var2;
            return var1;
        }
    };
    var3['getMessageAuthorWithProcessedColor'] = var4;
    var4 = function useMessageAuthorWithProcessedColor(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 1;
            var1 = var4[var1];
            var5 = undefined;
            var2 = var2.bind(var5)(var1);
            var1 = arg1;
            var1 = var2.bind(var5)(var1);
            var2 = var1.nick;
            var4 = var1.colorString;
            var1 = {};
            var1['nick'] = var2;
            var2 = null;
            var6 = var2 != var4;
            var2 = undefined;
            if(!var6) { _fun0002_ip = 72; continue _fun0002 }
 63:
            var3 = _closure1_slot3;
            var2 = var3.bind(var5)(var4);
 72:
            var1['colorString'] = var2;
            return var1;
        }
    };
    var3['useMessageAuthorWithProcessedColor'] = var4;
    var4 = function getUserAuthorWithProcessedColor(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 1;
            var1 = var4[var1];
            var5 = undefined;
            var6 = var3.bind(var5)(var1);
            var4 = var6.getUserAuthor;
            var3 = arg1;
            var1 = arg2;
            var1 = var4.bind(var6)(var3, var1);
            var3 = var1.nick;
            var7 = var1.colorString;
            var4 = var1.colorStrings;
            var1 = {};
            var1['nick'] = var3;
            var3 = null;
            var6 = var3 != var7;
            var3 = undefined;
            if(!var6) { _fun0003_ip = 88; continue _fun0003 }
 79:
            var6 = _closure1_slot3;
            var3 = var6.bind(var5)(var7);
 88:
            var1['colorString'] = var3;
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 2;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.processColorStrings;
            var2 = var2.bind(var3)(var4);
            var1['colorStrings'] = var2;
            return var1;
        }
    };
    var3['getUserAuthorWithProcessedColor'] = var4;
    var2 = function useUserAuthorWithProcessedColor(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 1;
            var1 = var4[var1];
            var5 = undefined;
            var6 = var2.bind(var5)(var1);
            var4 = var6.useNullableUserAuthor;
            var2 = arg1;
            var1 = arg2;
            var1 = var4.bind(var6)(var2, var1);
            var2 = var1.nick;
            var4 = var1.colorString;
            var1 = {};
            var1['nick'] = var2;
            var2 = null;
            var6 = var2 != var4;
            var2 = undefined;
            if(!var6) { _fun0004_ip = 82; continue _fun0004 }
 73:
            var3 = _closure1_slot3;
            var2 = var3.bind(var5)(var4);
 82:
            var1['colorString'] = var2;
            return var1;
        }
    };
    var3['useUserAuthorWithProcessedColor'] = var2;
    return var1;
})();