// app/modules/media_uploads/getAttachmentUploadAbortAlert.tsx
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
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.AbortCodes;
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_uploads/getAttachmentUploadAbortAlert.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getAttachmentUploadAbortAlertContent(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var7 = _closure1_slot0;
            var1 = _closure1_slot1;
            var2 = 1;
            var4 = var1[var2];
            var8 = undefined;
            var4 = var7.bind(var8)(var4);
            var6 = var4.intl;
            var4 = var6.string;
            var1 = var1[var2];
            var1 = var7.bind(var8)(var1);
            var1 = var1.t;
            var1 = var1.B3vFdU;
            var4 = var4.bind(var6)(var1);
            var1 = _closure1_slot2;
            var1 = var1.TOTAL_ATTACHMENT_SIZE_TOO_LARGE;
            if(!(var1 !== var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = _closure1_slot2;
            var1 = var1.CLOUD_UPLOAD_NOT_FOUND;
            if(!(var1 !== var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = _closure1_slot2;
            var1 = var1.INVALID_PERMISSIONS;
            if(!(var1 !== var5)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = null;
            return var1;
case 6:
            var1 = {};
            var1['title'] = var4;
            var9 = _closure1_slot0;
            var5 = _closure1_slot1;
            var6 = var5[var2];
            var6 = var9.bind(var8)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var5[var2];
            var5 = var9.bind(var8)(var5);
            var5 = var5.t;
            var5 = var5.zl4Weq;
            var5 = var6.bind(var7)(var5);
            var1['body'] = var5;
            return var1;
case 4:
            var1 = {};
            var1['title'] = var4;
            var9 = _closure1_slot0;
            var5 = _closure1_slot1;
            var6 = var5[var2];
            var6 = var9.bind(var8)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var5[var2];
            var5 = var9.bind(var8)(var5);
            var5 = var5.t;
            var5 = var5.bQldfH;
            var5 = var6.bind(var7)(var5);
            var1['body'] = var5;
            return var1;
case 2:
            var1 = {};
            var1['title'] = var4;
            var7 = _closure1_slot0;
            var9 = _closure1_slot1;
            var3 = var9[var2];
            var3 = var7.bind(var8)(var3);
            var5 = var3.intl;
            var4 = var5.formatToPlainString;
            var2 = var9[var2];
            var2 = var7.bind(var8)(var2);
            var2 = var2.t;
            var3 = var2.DYFPg2;
            var2 = {};
            var6 = 2;
            var6 = var9[var6];
            var6 = var7.bind(var8)(var6);
            var6 = var6.MAX_TOTAL_ATTACHMENT_SIZE_MB;
            var2['maxSizeMb'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            var1['body'] = var2;
            return var1;
        }
    };
    var3['getAttachmentUploadAbortAlertContent'] = var2;
    return var1;
})();