// app/modules/messages/canEditMessage.tsx
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
    var7 = var4.MessageFlags;
    var _closure1_slot3 = var7;
    var4 = var4.MessageStates;
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/canEditMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function canEditMessage(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var11 = arg1;
            var3 = arg2;
            var8 = null;
            var1 = var8 != var3;
            if(!var1) { _fun0001_ip = 248; continue _fun0001 }
 18:
            var2 = var11.author;
            var2 = var2.id;
            var2 = var2 === var3;
            if(!var2) { _fun0001_ip = 245; continue _fun0001 }
 39:
            var4 = var11.state;
            var3 = _closure1_slot4;
            var3 = var3.SENT;
            var3 = var4 === var3;
            if(!var3) { _fun0001_ip = 242; continue _fun0001 }
 67:
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var4 = 1;
            var4 = var6[var4];
            var10 = undefined;
            var4 = var5.bind(var10)(var4);
            var4 = var4.bind(var10)(var11);
            var4 = !var4;
            if(!var4) { _fun0001_ip = 239; continue _fun0001 }
 103:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 2;
            var5 = var7[var5];
            var6 = var6.bind(var10)(var5);
            var5 = var6.canEditMessageWithStickers;
            var5 = var5.bind(var6)(var11);
            var6 = !var5;
            var5 = !var6;
            if(var6) { _fun0001_ip = 236; continue _fun0001 }
 143:
            var7 = var11.hasFlag;
            var6 = _closure1_slot3;
            var6 = var6.IS_VOICE_MESSAGE;
            var6 = var7.bind(var11)(var6);
            var6 = !var6;
            if(!var6) { _fun0001_ip = 233; continue _fun0001 }
 170:
            var7 = var11.referralTrialOfferId;
            var7 = var8 == var7;
            if(!var7) { _fun0001_ip = 230; continue _fun0001 }
 183:
            var8 = var11.isPoll;
            var8 = var8.bind(var11)();
            var8 = !var8;
            if(!var8) { _fun0001_ip = 227; continue _fun0001 }
 199:
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var9 = 3;
            var9 = var13[var9];
            var9 = var12.bind(var10)(var9);
            var9 = var9.bind(var10)(var11);
            var8 = !var9;
 227:
            var7 = var8;
 230:
            var6 = var7;
 233:
            var5 = var6;
 236:
            var4 = var5;
 239:
            var3 = var4;
 242:
            var2 = var3;
 245:
            var1 = var2;
 248:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();