// app/modules/double_tap_to_react/DoubleTapToReactUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function emojiFromProtoValue(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var6 = var1.emojiName;
            var1 = var1.emojiId;
            var3 = null;
            var4 = var3 == var1;
            var5 = undefined;
            var2 = undefined;
            if(var4) { _fun0001_ip = 33; continue _fun0001 }
 28:
            var2 = var1.value;
 33:
            var4 = var3 == var2;
            var2 = undefined;
            if(var4) { _fun0001_ip = 73; continue _fun0001 }
 42:
            var4 = var3 == var1;
            var7 = undefined;
            if(var4) { _fun0001_ip = 56; continue _fun0001 }
 51:
            var7 = var1.value;
 56:
            var4 = '0';
            var2 = undefined;
            if(!(var4 !== var7)) { _fun0001_ip = 73; continue _fun0001 }
 68:
            var2 = var1.value;
 73:
            var4 = var3 == var6;
            var1 = undefined;
            if(var4) { _fun0001_ip = 87; continue _fun0001 }
 82:
            var1 = var6.value;
 87:
            var1 = var3 == var1;
            var4 = undefined;
            if(var1) { _fun0001_ip = 187; continue _fun0001 }
 96:
            var1 = var3 == var6;
            var7 = undefined;
            if(var1) { _fun0001_ip = 110; continue _fun0001 }
 105:
            var7 = var6.value;
 110:
            var1 = '0';
            var4 = undefined;
            if(!(var1 !== var7)) { _fun0001_ip = 187; continue _fun0001 }
 122:
            if(!(var3 == var2)) { _fun0001_ip = 167; continue _fun0001 }
 126:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 1;
            var1 = var8[var1];
            var8 = var7.bind(var5)(var1);
            var7 = var8.convertNameToSurrogate;
            var1 = var6.value;
            var1 = var7.bind(var8)(var1);
            _fun0001_ip = 184; continue _fun0001;
 167:
            var7 = var3 == var6;
            var5 = undefined;
            if(var7) { _fun0001_ip = 181; continue _fun0001 }
 176:
            var5 = var6.value;
 181:
            var1 = var5;
 184:
            var4 = var1;
 187:
            var1 = {};
            var5 = var3 != var4;
            var3 = '';
            if(!var5) { _fun0001_ip = 203; continue _fun0001 }
 200:
            var3 = var4;
 203:
            var1['name'] = var3;
            var1['id'] = var2;
            return var1;
        }
    };
    var _closure1_slot4 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/double_tap_to_react/DoubleTapToReactUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['emojiFromProtoValue'] = var4;
    var4 = function handleAddDefaultDoubleTapReaction(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var6 = arg1;
            var5 = arg2;
            var1 = _closure1_slot3;
            var1 = var1.settings;
            var3 = var1.textAndImages;
            var7 = null;
            var8 = var7 == var3;
            var1 = undefined;
            var4 = undefined;
            if(var8) { _fun0002_ip = 44; continue _fun0002 }
 38:
            var4 = var3.defaultReactionEmoji;
 44:
            var3 = _closure1_slot4;
            if(!(var7 == var4)) { _fun0002_ip = 54; continue _fun0002 }
 52:
            var4 = {};
 54:
            var4 = var3.bind(var1)(var4);
            var8 = _closure1_slot0;
            var3 = _closure1_slot2;
            var7 = 2;
            var3 = var3[var7];
            var9 = var8.bind(var1)(var3);
            var8 = var9.hasUserAlreadyReacted;
            var11 = false;
            var15 = var9;
            var14 = var5;
            var13 = var6;
            var12 = var4;
            var3 = var15[var8](var14, var13, var12, var11, var10);
            if(var3) { _fun0002_ip = 180; continue _fun0002 }
 106:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var8 = 3;
            var9 = var2[var8];
            var10 = var3.bind(var1)(var9);
            var9 = var10.triggerHapticFeedback;
            var8 = var2[var8];
            var8 = var3.bind(var1)(var8);
            var8 = var8.HapticFeedbackTypes;
            var8 = var8.IMPACT_LIGHT;
            var8 = var9.bind(var10)(var8);
            var2 = var2[var7];
            var3 = var3.bind(var1)(var2);
            var2 = var3.addReaction;
            var2 = var2.bind(var3)(var5, var6, var4);
 180:
            return var1;
        }
    };
    var3['handleAddDefaultDoubleTapReaction'] = var4;
    var2 = function areEmojisEqual(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = arg1;
            var2 = arg2;
            var1 = var3.id;
            var4 = null;
            if(!(var4 == var1)) { _fun0003_ip = 26; continue _fun0003 }
 17:
            var1 = var2.id;
            if(!(var4 != var1)) { _fun0003_ip = 59; continue _fun0003 }
 26:
            var4 = var3.id;
            var1 = var2.id;
            var1 = var4 === var1;
            if(!var1) { _fun0003_ip = 57; continue _fun0003 }
 43:
            var5 = var3.name;
            var4 = var2.name;
            var1 = var5 === var4;
 57:
            _fun0003_ip = 73; continue _fun0003;
 59:
            var3 = var3.surrogates;
            var2 = var2.surrogates;
            var1 = var3 === var2;
 73:
            return var1;
        }
    };
    var3['areEmojisEqual'] = var2;
    return var1;
})();