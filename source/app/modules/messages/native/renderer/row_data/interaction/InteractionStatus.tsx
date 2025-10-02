// app/modules/messages/native/renderer/row_data/interaction/InteractionStatus.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = {};
    var7 = 0;
    var1['LOADING'] = var7;
    var6 = 'LOADING';
    var1[var7] = var6;
    var7 = 1;
    var1['FAILED'] = var7;
    var6 = 'FAILED';
    var1[var7] = var6;
    var7 = 999;
    var1['EPHEMERAL_SUCCESS'] = var7;
    var6 = 'EPHEMERAL_SUCCESS';
    var1[var7] = var6;
    var _closure1_slot2 = var1;
    var1 = 2;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/row_data/interaction/InteractionStatus.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createInteractionStatus(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var8 = arg1;
            var4 = _closure1_slot0;
            var1 = _closure1_slot1;
            var5 = 0;
            var3 = var1[var5];
            var7 = undefined;
            var9 = var4.bind(var7)(var3);
            var6 = var9.getInteractionStatusViewState;
            var3 = arg2;
            var3 = var6.bind(var9)(var8, var3);
            var1 = var1[var5];
            var1 = var4.bind(var7)(var1);
            var1 = var1.InteractionStatusViewState;
            var1 = var1.SENDING;
            if(!(var1 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var5];
            var1 = var4.bind(var7)(var1);
            var1 = var1.InteractionStatusViewState;
            var1 = var1.CREATED;
            if(!(var1 !== var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var5];
            var1 = var4.bind(var7)(var1);
            var1 = var1.InteractionStatusViewState;
            var1 = var1.TIMED_OUT;
            if(!(var1 !== var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var5];
            var1 = var4.bind(var7)(var1);
            var1 = var1.InteractionStatusViewState;
            var1 = var1.FAILED;
            if(!(var1 !== var3)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var4 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var5];
            var1 = var4.bind(var7)(var1);
            var1 = var1.InteractionStatusViewState;
            var1 = var1.EPHEMERAL_SUCCESS;
            if(!(var1 !== var3)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            return var7;
case 10:
            var1 = {};
            var3 = '';
            var1['text'] = var3;
            var3 = _closure1_slot2;
            var3 = var3.EPHEMERAL_SUCCESS;
            var1['state'] = var3;
            return var1;
case 8:
            var1 = {};
            var3 = var8.interactionError;
            var4 = null;
            if(!(var4 == var3)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var9 = _closure1_slot0;
            var10 = _closure1_slot1;
            var4 = 1;
            var5 = var10[var4];
            var5 = var9.bind(var7)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var4 = var10[var4];
            var4 = var9.bind(var7)(var4);
            var4 = var4.t;
            var4 = var4.VCsUJi;
            var3 = var5.bind(var6)(var4);
case 12:
            var1['text'] = var3;
            var3 = _closure1_slot2;
            var3 = var3.FAILED;
            var1['state'] = var3;
            return var1;
case 6:
            var1 = {};
            var6 = _closure1_slot0;
            var9 = _closure1_slot1;
            var3 = 1;
            var4 = var9[var3];
            var4 = var6.bind(var7)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var9[var3];
            var3 = var6.bind(var7)(var3);
            var3 = var3.t;
            var3 = var3.h8hzPT;
            var3 = var4.bind(var5)(var3);
            var1['text'] = var3;
            var3 = _closure1_slot2;
            var3 = var3.FAILED;
            var1['state'] = var3;
            return var1;
case 4:
            var1 = {};
            var4 = _closure1_slot0;
            var9 = _closure1_slot1;
            var3 = 1;
            var5 = var9[var3];
            var5 = var4.bind(var7)(var5);
            var6 = var5.intl;
            var5 = var6.formatToPlainString;
            var3 = var9[var3];
            var3 = var4.bind(var7)(var3);
            var3 = var3.t;
            var4 = var3.7ePV4u;
            var3 = {};
            var8 = var8.author;
            var8 = var8.username;
            var3['applicationName'] = var8;
            var3 = var5.bind(var6)(var4, var3);
            var1['text'] = var3;
            var3 = _closure1_slot2;
            var3 = var3.LOADING;
            var1['state'] = var3;
            return var1;
case 2:
            var1 = {};
            var6 = _closure1_slot0;
            var8 = _closure1_slot1;
            var3 = 1;
            var4 = var8[var3];
            var4 = var6.bind(var7)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var6.bind(var7)(var3);
            var3 = var3.t;
            var3 = var3.RiLfBQ;
            var3 = var4.bind(var5)(var3);
            var1['text'] = var3;
            var2 = _closure1_slot2;
            var2 = var2.LOADING;
            var1['state'] = var2;
            return var1;
        }
    };
    var3['createInteractionStatus'] = var2;
    return var1;
})();