// app/modules/messages/native/renderer/rows/BlockedGroup.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
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
    var7 = var4.RowType;
    var _closure1_slot3 = var7;
    var4 = var4.SeparatorAction;
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UNSAFE_Colors;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.memoize;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var6 = 3;
            var1 = var1[var6];
            var5 = undefined;
            var3 = var3.bind(var5)(var1);
            var1 = var3.isThemeDark;
            var1 = var1.bind(var3)(var4);
            var10 = '#DBE0E4';
            if(!var1) { _fun0001_ip = 79; continue _fun0001 }
 48:
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 4;
            var1 = var7[var1];
            var1 = var3.bind(var5)(var1);
            var1 = var1.unsafe_rawColors;
            var10 = var1.PRIMARY_700;
 79:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var3 = var3.bind(var5)(var1);
            var1 = var3.isThemeDark;
            var1 = var1.bind(var3)(var4);
            var9 = '#FAFAFA';
            if(!var1) { _fun0001_ip = 147; continue _fun0001 }
 116:
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 4;
            var1 = var7[var1];
            var1 = var3.bind(var5)(var1);
            var1 = var1.unsafe_rawColors;
            var9 = var1.PRIMARY_630;
 147:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var3 = var3.bind(var5)(var1);
            var1 = var3.isThemeDark;
            var1 = var1.bind(var3)(var4);
            if(var1) { _fun0001_ip = 190; continue _fun0001 }
 178:
            var1 = _closure1_slot5;
            var4 = var1.GREY1;
            _fun0001_ip = 259; continue _fun0001;
 190:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 5;
            var1 = var8[var1];
            var7 = var3.bind(var5)(var1);
            var6 = var7.hexWithOpacity;
            var3 = _closure1_slot1;
            var1 = 4;
            var1 = var8[var1];
            var1 = var3.bind(var5)(var1);
            var1 = var1.unsafe_rawColors;
            var3 = var1.PRIMARY_300;
            var1 = 0.6;
            var4 = var6.bind(var7)(var3, var1);
 259:
            var1 = {};
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 6;
            var7 = var6[var2];
            var8 = var3.bind(var5)(var7);
            var7 = var8.processColorOrThrow;
            var7 = var7.bind(var8)(var10);
            var1['borderColor'] = var7;
            var7 = var6[var2];
            var8 = var3.bind(var5)(var7);
            var7 = var8.processColorOrThrow;
            var7 = var7.bind(var8)(var9);
            var1['backgroundColor'] = var7;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.processColorOrThrow;
            var2 = var2.bind(var3)(var4);
            var1['color'] = var2;
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/rows/BlockedGroup.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function generateBlockedGroupRowData(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var3 = arg3;
            var _closure2_slot0 = var3;
            var5 = var1.changeType;
            var8 = var1.message;
            var10 = var1.content;
            var4 = var1.text;
            var3 = var1.revealed;
            var7 = var1.context;
            var1 = {};
            var12 = _closure1_slot6;
            var11 = undefined;
            var6 = arg2;
            var13 = var12.bind(var11)(var6);
            var14 = var1;
            var6 = copyDataProperties(var14, var13);
            var6 = _closure1_slot3;
            var11 = var6.BLOCKED_GROUP;
            var6 = 'type';
            var1[var6] = var11;
            var6 = var10.map;
            var2 = function(arg1) {
                var3 = _closure2_slot0;
                var2 = var3.generate;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var6.bind(var10)(var2);
            var2 = 'content';
            var1[var2] = var6;
            var6 = {};
            var2 = {};
            var9 = _closure1_slot4;
            var9 = var9.TOGGLE_BLOCKED_MESSAGES;
            var2['type'] = var9;
            var9 = null;
            if(!(var9 == var7)) { _fun0002_ip = 142; continue _fun0002 }
 137:
            var7 = var8.id;
 142:
            var2['context'] = var7;
            var6['action'] = var2;
            var2 = 'button';
            var1[var2] = var6;
            var2 = 'changeType';
            var1[var2] = var5;
            var2 = 'text';
            var1[var2] = var4;
            var2 = 'revealed';
            var1[var2] = var3;
            return var1;
        }
    };
    var3['generateBlockedGroupRowData'] = var2;
    return var1;
})();