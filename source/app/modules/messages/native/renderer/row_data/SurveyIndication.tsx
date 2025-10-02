// app/modules/messages/native/renderer/row_data/SurveyIndication.tsx
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
    var4 = var4.NotificationTypes;
    var _closure1_slot3 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/row_data/SurveyIndication.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createSurveyIndication(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var9 = arg3;
            var1 = _closure1_slot3;
            var1 = var1.TOP_MESSAGE_PUSH;
            if(!(var9 !== var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 1;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.t;
            var6 = var1.46+Iqa;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 1;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.t;
            var6 = var1.GwWhcX;
case 4:
            var1 = {};
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 1;
            var2 = var4[var2];
            var7 = undefined;
            var2 = var3.bind(var7)(var2);
            var4 = var2.intl;
            var3 = var4.formatToParts;
            var2 = {};
            var8 = {};
            var10 = 'bindUserSurvey';
            var8['action'] = var10;
            var10 = arg1;
            var8['message'] = var10;
            var10 = null;
            if(!(var10 == var9)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var10 = _closure1_slot3;
            var9 = var10.TOP_MESSAGE_PUSH;
case 5:
            var8['notificationType'] = var9;
            var2['handleMessage'] = var8;
            var2 = var3.bind(var4)(var6, var2);
            var1['content'] = var2;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 2;
            var2 = var8[var2];
            var4 = var6.bind(var7)(var2);
            var3 = var4.getAssetUriForEmbed;
            var2 = 3;
            var2 = var8[var2];
            var8 = var6.bind(var7)(var2);
            var6 = var8.isThemeDark;
            var2 = arg2;
            var2 = var6.bind(var8)(var2);
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            if(var2) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var2 = 5;
            var2 = var8[var2];
            var2 = var6.bind(var7)(var2);
            _fun0001_ip = 9; continue _fun0001;
case 7:
            var5 = 4;
            var5 = var8[var5];
            var2 = var6.bind(var7)(var5);
case 9:
            var2 = var3.bind(var4)(var2);
            var1['feedbackIconUrl'] = var2;
            return var1;
        }
    };
    var3['createSurveyIndication'] = var2;
    return var1;
})();