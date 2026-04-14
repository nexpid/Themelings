// app/modules/media_uploads/handleUploadAttachmentErrors.native.tsx
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
    var7 = var4.AbortCodes;
    var _closure1_slot3 = var7;
    var4 = var4.MAX_UPLOAD_COUNT;
    var _closure1_slot4 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_uploads/handleUploadAttachmentErrors.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function handleUploadMessageAttachmentsErrors(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var7 = var1.file;
            var8 = var1.guildId;
            var4 = var1.analyticsLocations;
            var9 = var1.code;
            var5 = var1.reason;
            var3 = undefined;
            if(!(var3 !== var9)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = _closure1_slot3;
            var1 = var1.ENTITY_TOO_LARGE;
            if(!(var9 !== var1)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = _closure1_slot3;
            var1 = var1.TOO_MANY_ATTACHMENTS;
            if(!(var9 !== var1)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = _closure1_slot3;
            var1 = var1.ENTITY_EMPTY;
            if(!(var9 !== var1)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var1 = _closure1_slot3;
            var1 = var1.INVALID_FILE_ASSET;
            if(!(var9 !== var1)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var2 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 5;
            var1 = var10[var1];
            var2 = var2.bind(var3)(var1);
            var1 = var2.getAttachmentUploadAbortAlertContent;
            var10 = var1.bind(var2)(var9);
            var1 = null;
            var1 = var1 != var10;
            if(!var1) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var9 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = 3;
            var2 = var11[var2];
            var9 = var9.bind(var3)(var2);
            var2 = var9.show;
            var2 = var2.bind(var9)(var10);
            var1 = true;
case 12:
            return var1;
case 10:
            var2 = _closure1_slot1;
            var14 = _closure1_slot2;
            var1 = 3;
            var1 = var14[var1];
            var9 = var2.bind(var3)(var1);
            var2 = var9.show;
            var1 = {};
            var13 = _closure1_slot0;
            var10 = 4;
            var11 = var14[var10];
            var11 = var13.bind(var3)(var11);
            var15 = var11.intl;
            var12 = var15.string;
            var11 = var14[var10];
            var11 = var13.bind(var3)(var11);
            var11 = var11.t;
            var11 = var11.B3vFdU;
            var11 = var12.bind(var15)(var11);
            var1['title'] = var11;
            var11 = var14[var10];
            var11 = var13.bind(var3)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var14[var10];
            var10 = var13.bind(var3)(var10);
            var10 = var10.t;
            var10 = var10.zMEjJg;
            var10 = var11.bind(var12)(var10);
            var1['body'] = var10;
            var1 = var2.bind(var9)(var1);
            var1 = true;
            return var1;
case 8:
            var2 = _closure1_slot1;
            var14 = _closure1_slot2;
            var1 = 3;
            var1 = var14[var1];
            var9 = var2.bind(var3)(var1);
            var2 = var9.show;
            var1 = {};
            var13 = _closure1_slot0;
            var10 = 4;
            var11 = var14[var10];
            var11 = var13.bind(var3)(var11);
            var15 = var11.intl;
            var12 = var15.string;
            var11 = var14[var10];
            var11 = var13.bind(var3)(var11);
            var11 = var11.t;
            var11 = var11.B3vFdU;
            var11 = var12.bind(var15)(var11);
            var1['title'] = var11;
            var11 = var14[var10];
            var11 = var13.bind(var3)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var14[var10];
            var10 = var13.bind(var3)(var10);
            var10 = var10.t;
            var10 = var10["9ZpT2C"];
            var10 = var11.bind(var12)(var10);
            var1['body'] = var10;
            var1 = var2.bind(var9)(var1);
            var1 = true;
            return var1;
case 6:
            var2 = _closure1_slot1;
            var14 = _closure1_slot2;
            var1 = 3;
            var1 = var14[var1];
            var9 = var2.bind(var3)(var1);
            var2 = var9.show;
            var1 = {};
            var11 = _closure1_slot0;
            var10 = 4;
            var12 = var14[var10];
            var12 = var11.bind(var3)(var12);
            var15 = var12.intl;
            var13 = var15.string;
            var12 = var14[var10];
            var12 = var11.bind(var3)(var12);
            var12 = var12.t;
            var12 = var12.wOr6hB;
            var12 = var13.bind(var15)(var12);
            var1['title'] = var12;
            var12 = var14[var10];
            var12 = var11.bind(var3)(var12);
            var13 = var12.intl;
            var12 = var13.formatToPlainString;
            var10 = var14[var10];
            var10 = var11.bind(var3)(var10);
            var10 = var10.t;
            var11 = var10.qqyp/e;
            var10 = {};
            var14 = _closure1_slot4;
            var10['limit'] = var14;
            var10 = var12.bind(var13)(var11, var10);
            var1['body'] = var10;
            var1 = var2.bind(var9)(var1);
            var1 = true;
            return var1;
case 4:
            var2 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 1;
            var1 = var9[var1];
            var2 = var2.bind(var3)(var1);
            var1 = {};
            var1['file'] = var7;
            var7 = _closure1_slot0;
            var6 = 2;
            var6 = var9[var6];
            var7 = var7.bind(var3)(var6);
            var6 = var7.maxFileSize;
            var6 = var6.bind(var7)(var8);
            var1['maxSize'] = var6;
            var1['analyticsLocations'] = var4;
            var4 = null;
            var6 = var4 == var5;
            var4 = undefined;
            if(var6) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var4 = var5.type;
case 14:
            var1['errorReason'] = var4;
            var1 = var2.bind(var3)(var1);
            var1 = true;
            return var1;
case 2:
            var1 = false;
            return var1;
        }
    };
    var3['handleUploadMessageAttachmentsErrors'] = var2;
    return var1;
})();