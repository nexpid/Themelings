// app/modules/messages/native/renderer/row_data/EphemeralIndication.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.HelpdeskArticles;
    var _closure1_slot4 = var7;
    var4 = var4.MessageFlags;
    var _closure1_slot5 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/row_data/EphemeralIndication.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createEphemeralIndication(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var13 = arg1;
            var2 = var13.hasFlag;
            var1 = _closure1_slot5;
            var1 = var1.EPHEMERAL;
            var1 = var2.bind(var13)(var1);
            var6 = undefined;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            return var6;
case 2:
            var4 = var13.interactionMetadata;
            var1 = null;
            var5 = var1 == var4;
            var2 = undefined;
            if(var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var4.ephemerality_reason;
case 4:
            if(!(var1 == var2)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = {};
            var10 = _closure1_slot0;
            var4 = _closure1_slot2;
            var9 = 3;
            var5 = var4[var9];
            var5 = var10.bind(var6)(var5);
            var11 = var5.intl;
            var8 = var11.formatToParts;
            var5 = var4[var9];
            var5 = var10.bind(var6)(var5);
            var5 = var5.t;
            var7 = var5.uX3ecH;
            var5 = {'count': 1, 'countMessages': 1};
            var12 = {};
            var14 = 'bindDismissMessage';
            var12['action'] = var14;
            var12['message'] = var13;
            var5['handleDelete'] = var12;
            var5 = var8.bind(var11)(var7, var5);
            var2['content'] = var5;
            var8 = _closure1_slot1;
            var5 = 4;
            var7 = var4[var5];
            var11 = var8.bind(var6)(var7);
            var8 = var11.getAppsSupportURL;
            var7 = _closure1_slot4;
            var7 = var7.EPHEMERAL_MESSAGES;
            var7 = var8.bind(var11)(var7);
            var2['helpArticleLink'] = var7;
            var7 = var4[var9];
            var7 = var10.bind(var6)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var4 = var4[var9];
            var4 = var10.bind(var6)(var4);
            var4 = var4.t;
            var4 = var4.htHOrq;
            var4 = var7.bind(var8)(var4);
            var2['helpButtonAccessibilityLabel'] = var4;
            var8 = _closure1_slot3;
            var7 = var8.getMessage;
            var4 = var13.id;
            var4 = var7.bind(var8)(var4);
            if(!(var1 != var4)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var7 = _closure1_slot1;
            var4 = _closure1_slot2;
            var5 = var4[var5];
            var8 = var7.bind(var6)(var5);
            var7 = var8.getArticleURL;
            var5 = _closure1_slot4;
            var5 = var5.GUILD_AUTOMOD_BLOCKED_MESSAGE;
            var5 = var7.bind(var8)(var5);
            var2['helpArticleLink'] = var5;
            var8 = _closure1_slot0;
            var5 = var4[var9];
            var5 = var8.bind(var6)(var5);
            var7 = var5.intl;
            var5 = var7.string;
            var4 = var4[var9];
            var4 = var8.bind(var6)(var4);
            var4 = var4.t;
            var4 = var4.OiCBhI;
            var4 = var5.bind(var7)(var4);
            var2['helpButtonAccessibilityLabel'] = var4;
case 8:
            return var2;
case 6:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 2;
            var2 = var5[var2];
            var4 = var4.bind(var6)(var2);
            var2 = var4.getEphemeralReasonMessage;
            var5 = var13.interactionMetadata;
            var7 = var1 == var5;
            var1 = undefined;
            if(var7) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var1 = var5.ephemerality_reason;
case 10:
            var11 = var2.bind(var4)(var1);
            var1 = {};
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 3;
            var4 = var7[var2];
            var4 = var5.bind(var6)(var4);
            var10 = var4.intl;
            var9 = var10.formatToParts;
            var4 = var7[var2];
            var4 = var5.bind(var6)(var4);
            var4 = var4.t;
            var8 = var4.xgCMRU;
            var4 = {};
            var12 = {};
            var14 = 'bindDismissMessage';
            var12['action'] = var14;
            var12['message'] = var13;
            var4['handleDelete'] = var12;
            var4['reason'] = var11;
            var4 = var9.bind(var10)(var8, var4);
            var1['content'] = var4;
            var8 = _closure1_slot1;
            var4 = 4;
            var4 = var7[var4];
            var8 = var8.bind(var6)(var4);
            var4 = var8.getArticleURL;
            var3 = _closure1_slot4;
            var3 = var3.USING_APPS_FAQ;
            var3 = var4.bind(var8)(var3);
            var1['helpArticleLink'] = var3;
            var3 = var7[var2];
            var3 = var5.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var5.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.OIWSJS;
            var2 = var3.bind(var4)(var2);
            var1['helpButtonAccessibilityLabel'] = var2;
            return var1;
        }
    };
    var3['createEphemeralIndication'] = var2;
    return var1;
})();