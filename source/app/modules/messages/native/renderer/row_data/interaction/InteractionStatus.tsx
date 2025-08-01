// app/modules/messages/native/renderer/row_data/interaction/InteractionStatus.tsx
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
    var9 = 0;
    var7 = var6[var9];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var8 = 1;
    var4 = var6[var8];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot2 = var4;
    var4 = {};
    var4['LOADING'] = var9;
    var7 = 'LOADING';
    var4[var9] = var7;
    var4['FAILED'] = var8;
    var7 = 'FAILED';
    var4[var8] = var7;
    var8 = 999;
    var4['EPHEMERAL_SUCCESS'] = var8;
    var7 = 'EPHEMERAL_SUCCESS';
    var4[var8] = var7;
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.makeKeyedDataComponent;
    var4 = 'interactionStatus';
    var4 = var7.bind(var8)(var4);
    var _closure1_slot4 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/row_data/interaction/InteractionStatus.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function InteractionStatus(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var11 = var1.message;
            var3 = var1.interaction;
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var7 = 2;
            var1 = var1[var7];
            var5 = undefined;
            var2 = var2.bind(var5)(var1);
            var1 = var2.getInteractionStatusViewState;
            var4 = var1.bind(var2)(var11, var3);
            var1 = null;
            if(!(var1 != var4)) { _fun0001_ip = 700; continue _fun0001 }
 60:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var7];
            var2 = var3.bind(var5)(var2);
            var2 = var2.InteractionStatusViewState;
            var2 = var2.SENDING;
            if(!(var2 !== var4)) { _fun0001_ip = 609; continue _fun0001 }
 96:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var7];
            var2 = var3.bind(var5)(var2);
            var2 = var2.InteractionStatusViewState;
            var2 = var2.CREATED;
            if(!(var2 !== var4)) { _fun0001_ip = 499; continue _fun0001 }
 132:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var7];
            var2 = var3.bind(var5)(var2);
            var2 = var2.InteractionStatusViewState;
            var2 = var2.TIMED_OUT;
            if(!(var2 !== var4)) { _fun0001_ip = 408; continue _fun0001 }
 168:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var7];
            var2 = var3.bind(var5)(var2);
            var2 = var2.InteractionStatusViewState;
            var2 = var2.FAILED;
            if(!(var2 !== var4)) { _fun0001_ip = 307; continue _fun0001 }
 201:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var7];
            var2 = var3.bind(var5)(var2);
            var2 = var2.InteractionStatusViewState;
            var2 = var2.EPHEMERAL_SUCCESS;
            if(!(var2 !== var4)) { _fun0001_ip = 267; continue _fun0001 }
 234:
            var3 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 5;
            var2 = var7[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.assertNever;
            var2 = var2.bind(var3)(var4);
            return var5;
 267:
            var4 = _closure1_slot2;
            var3 = _closure1_slot4;
            var2 = {};
            var7 = '';
            var2['text'] = var7;
            var7 = _closure1_slot3;
            var7 = var7.EPHEMERAL_SUCCESS;
            var2['state'] = var7;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 307:
            var4 = _closure1_slot2;
            var3 = _closure1_slot4;
            var2 = {};
            var7 = var11.interactionError;
            if(!(var1 == var7)) { _fun0001_ip = 382; continue _fun0001 }
 327:
            var12 = _closure1_slot0;
            var13 = _closure1_slot1;
            var8 = 3;
            var9 = var13[var8];
            var9 = var12.bind(var5)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var13[var8];
            var8 = var12.bind(var5)(var8);
            var8 = var8.t;
            var8 = var8.VCsUJi;
            var7 = var9.bind(var10)(var8);
 382:
            var2['text'] = var7;
            var7 = _closure1_slot3;
            var7 = var7.FAILED;
            var2['state'] = var7;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 408:
            var4 = _closure1_slot2;
            var3 = _closure1_slot4;
            var2 = {};
            var10 = _closure1_slot0;
            var12 = _closure1_slot1;
            var7 = 3;
            var8 = var12[var7];
            var8 = var10.bind(var5)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var12[var7];
            var7 = var10.bind(var5)(var7);
            var7 = var7.t;
            var7 = var7.h8hzPT;
            var7 = var8.bind(var9)(var7);
            var2['text'] = var7;
            var7 = _closure1_slot3;
            var7 = var7.FAILED;
            var2['state'] = var7;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 499:
            var4 = _closure1_slot2;
            var3 = _closure1_slot4;
            var2 = {};
            var8 = _closure1_slot0;
            var12 = _closure1_slot1;
            var7 = 3;
            var9 = var12[var7];
            var9 = var8.bind(var5)(var9);
            var10 = var9.intl;
            var9 = var10.formatToPlainString;
            var7 = var12[var7];
            var7 = var8.bind(var5)(var7);
            var7 = var7.t;
            var8 = var7.7ePV4u;
            var7 = {};
            var11 = var11.author;
            var11 = var11.username;
            var7['applicationName'] = var11;
            var7 = var9.bind(var10)(var8, var7);
            var2['text'] = var7;
            var7 = _closure1_slot3;
            var7 = var7.LOADING;
            var2['state'] = var7;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 609:
            var4 = _closure1_slot2;
            var3 = _closure1_slot4;
            var2 = {};
            var10 = _closure1_slot0;
            var11 = _closure1_slot1;
            var7 = 3;
            var8 = var11[var7];
            var8 = var10.bind(var5)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var11[var7];
            var7 = var10.bind(var5)(var7);
            var7 = var7.t;
            var7 = var7.RiLfBQ;
            var7 = var8.bind(var9)(var7);
            var2['text'] = var7;
            var6 = _closure1_slot3;
            var6 = var6.LOADING;
            var2['state'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 700:
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function createInteractionStatus(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var8 = arg1;
            var4 = _closure1_slot0;
            var1 = _closure1_slot1;
            var5 = 2;
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
            if(!(var1 !== var3)) { _fun0002_ip = 499; continue _fun0002 }
 71:
            var4 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var5];
            var1 = var4.bind(var7)(var1);
            var1 = var1.InteractionStatusViewState;
            var1 = var1.CREATED;
            if(!(var1 !== var3)) { _fun0002_ip = 403; continue _fun0002 }
 107:
            var4 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var5];
            var1 = var4.bind(var7)(var1);
            var1 = var1.InteractionStatusViewState;
            var1 = var1.TIMED_OUT;
            if(!(var1 !== var3)) { _fun0002_ip = 326; continue _fun0002 }
 143:
            var4 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var5];
            var1 = var4.bind(var7)(var1);
            var1 = var1.InteractionStatusViewState;
            var1 = var1.FAILED;
            if(!(var1 !== var3)) { _fun0002_ip = 237; continue _fun0002 }
 176:
            var4 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var5];
            var1 = var4.bind(var7)(var1);
            var1 = var1.InteractionStatusViewState;
            var1 = var1.EPHEMERAL_SUCCESS;
            if(!(var1 !== var3)) { _fun0002_ip = 211; continue _fun0002 }
 209:
            return var7;
 211:
            var1 = {};
            var3 = '';
            var1['text'] = var3;
            var3 = _closure1_slot3;
            var3 = var3.EPHEMERAL_SUCCESS;
            var1['state'] = var3;
            return var1;
 237:
            var1 = {};
            var3 = var8.interactionError;
            var4 = null;
            if(!(var4 == var3)) { _fun0002_ip = 306; continue _fun0002 }
 251:
            var9 = _closure1_slot0;
            var10 = _closure1_slot1;
            var4 = 3;
            var5 = var10[var4];
            var5 = var9.bind(var7)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var4 = var10[var4];
            var4 = var9.bind(var7)(var4);
            var4 = var4.t;
            var4 = var4.VCsUJi;
            var3 = var5.bind(var6)(var4);
 306:
            var1['text'] = var3;
            var3 = _closure1_slot3;
            var3 = var3.FAILED;
            var1['state'] = var3;
            return var1;
 326:
            var1 = {};
            var6 = _closure1_slot0;
            var9 = _closure1_slot1;
            var3 = 3;
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
            var3 = _closure1_slot3;
            var3 = var3.FAILED;
            var1['state'] = var3;
            return var1;
 403:
            var1 = {};
            var4 = _closure1_slot0;
            var9 = _closure1_slot1;
            var3 = 3;
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
            var3 = _closure1_slot3;
            var3 = var3.LOADING;
            var1['state'] = var3;
            return var1;
 499:
            var1 = {};
            var6 = _closure1_slot0;
            var8 = _closure1_slot1;
            var3 = 3;
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
            var2 = _closure1_slot3;
            var2 = var2.LOADING;
            var1['state'] = var2;
            return var1;
        }
    };
    var3['createInteractionStatus'] = var2;
    return var1;
})();