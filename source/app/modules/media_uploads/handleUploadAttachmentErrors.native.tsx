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
    var4 = 7;
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
            var11 = var1.guildId;
            var4 = var1.analyticsLocations;
            var8 = var1.code;
            var5 = var1.reason;
            var3 = undefined;
            if(!(var3 !== var8)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot3;
            var2 = var2.ENTITY_TOO_LARGE;
            if(!(var8 !== var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = _closure1_slot3;
            var2 = var2.TOO_MANY_ATTACHMENTS;
            if(!(var8 !== var2)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = _closure1_slot3;
            var2 = var2.ENTITY_EMPTY;
            if(!(var8 !== var2)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = _closure1_slot3;
            var2 = var2.INVALID_FILE_ASSET;
            if(!(var8 !== var2)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 6;
            var2 = var9[var2];
            var6 = var6.bind(var3)(var2);
            var2 = var6.getAttachmentUploadAbortAlertContent;
            var9 = var2.bind(var6)(var8);
            var2 = null;
            var2 = var2 != var9;
            if(!var2) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var8 = _closure1_slot1;
            var10 = _closure1_slot2;
            var6 = 4;
            var6 = var10[var6];
            var8 = var8.bind(var3)(var6);
            var6 = var8.show;
            var6 = var6.bind(var8)(var9);
            var2 = true;
case 12:
            return var2;
case 10:
            var6 = _closure1_slot1;
            var14 = _closure1_slot2;
            var2 = 4;
            var2 = var14[var2];
            var8 = var6.bind(var3)(var2);
            var6 = var8.show;
            var2 = {};
            var13 = _closure1_slot0;
            var9 = 5;
            var10 = var14[var9];
            var10 = var13.bind(var3)(var10);
            var15 = var10.intl;
            var12 = var15.string;
            var10 = var14[var9];
            var10 = var13.bind(var3)(var10);
            var10 = var10.t;
            var10 = var10.B3vFdU;
            var10 = var12.bind(var15)(var10);
            var2['title'] = var10;
            var10 = var14[var9];
            var10 = var13.bind(var3)(var10);
            var12 = var10.intl;
            var10 = var12.string;
            var9 = var14[var9];
            var9 = var13.bind(var3)(var9);
            var9 = var9.t;
            var9 = var9.zMEjJg;
            var9 = var10.bind(var12)(var9);
            var2['body'] = var9;
            var2 = var6.bind(var8)(var2);
            var2 = true;
            return var2;
case 8:
            var6 = _closure1_slot1;
            var14 = _closure1_slot2;
            var2 = 4;
            var2 = var14[var2];
            var8 = var6.bind(var3)(var2);
            var6 = var8.show;
            var2 = {};
            var13 = _closure1_slot0;
            var9 = 5;
            var10 = var14[var9];
            var10 = var13.bind(var3)(var10);
            var15 = var10.intl;
            var12 = var15.string;
            var10 = var14[var9];
            var10 = var13.bind(var3)(var10);
            var10 = var10.t;
            var10 = var10.B3vFdU;
            var10 = var12.bind(var15)(var10);
            var2['title'] = var10;
            var10 = var14[var9];
            var10 = var13.bind(var3)(var10);
            var12 = var10.intl;
            var10 = var12.string;
            var9 = var14[var9];
            var9 = var13.bind(var3)(var9);
            var9 = var9.t;
            var9 = var9["9ZpT2C"];
            var9 = var10.bind(var12)(var9);
            var2['body'] = var9;
            var2 = var6.bind(var8)(var2);
            var2 = true;
            return var2;
case 6:
            var6 = _closure1_slot1;
            var14 = _closure1_slot2;
            var2 = 4;
            var2 = var14[var2];
            var8 = var6.bind(var3)(var2);
            var6 = var8.show;
            var2 = {};
            var10 = _closure1_slot0;
            var9 = 5;
            var12 = var14[var9];
            var12 = var10.bind(var3)(var12);
            var15 = var12.intl;
            var13 = var15.string;
            var12 = var14[var9];
            var12 = var10.bind(var3)(var12);
            var12 = var12.t;
            var12 = var12.wOr6hB;
            var12 = var13.bind(var15)(var12);
            var2['title'] = var12;
            var12 = var14[var9];
            var12 = var10.bind(var3)(var12);
            var13 = var12.intl;
            var12 = var13.formatToPlainString;
            var9 = var14[var9];
            var9 = var10.bind(var3)(var9);
            var9 = var9.t;
            var10 = var9.qqyp/e;
            var9 = {};
            var14 = _closure1_slot4;
            var9['limit'] = var14;
            var9 = var12.bind(var13)(var10, var9);
            var2['body'] = var9;
            var2 = var6.bind(var8)(var2);
            var2 = true;
            return var2;
case 4:
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var6 = 1;
            var2 = var12[var6];
            var9 = var10.bind(var3)(var2);
            var8 = var9.getKestrelConfig;
            var2 = {};
            var13 = 'native.handleUploadMessageAttachmentsErrors';
            var2['location'] = var13;
            var9 = var8.bind(var9)(var2);
            var2 = _closure1_slot1;
            var1 = 2;
            var1 = var12[var1];
            var2 = var2.bind(var3)(var1);
            var1 = {};
            var1['file'] = var7;
            var6 = var12[var6];
            var8 = var10.bind(var3)(var6);
            var7 = var8.getEffectiveKestrelLimit;
            var6 = 3;
            var6 = var12[var6];
            var10 = var10.bind(var3)(var6);
            var6 = var10.maxFileSize;
            var6 = var6.bind(var10)(var11);
            var6 = var7.bind(var8)(var9, var6);
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