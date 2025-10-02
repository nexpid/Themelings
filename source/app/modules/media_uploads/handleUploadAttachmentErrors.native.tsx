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
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_uploads/handleUploadAttachmentErrors.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function handleUploadMessageAttachmentsErrors(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var8 = var1.file;
            var9 = var1.guildId;
            var5 = var1.analyticsLocations;
            var2 = var1.code;
            var6 = var1.reason;
            var1 = _closure1_slot3;
            var1 = var1.ENTITY_TOO_LARGE;
            if(!(var2 !== var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = _closure1_slot3;
            var1 = var1.TOO_MANY_ATTACHMENTS;
            if(!(var2 !== var1)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = _closure1_slot3;
            var1 = var1.ENTITY_EMPTY;
            var1 = var2 === var1;
            if(!var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = _closure1_slot1;
            var15 = _closure1_slot2;
            var2 = 3;
            var2 = var15[var2];
            var14 = undefined;
            var4 = var3.bind(var14)(var2);
            var3 = var4.show;
            var2 = {};
            var13 = _closure1_slot0;
            var10 = 4;
            var11 = var15[var10];
            var11 = var13.bind(var14)(var11);
            var16 = var11.intl;
            var12 = var16.string;
            var11 = var15[var10];
            var11 = var13.bind(var14)(var11);
            var11 = var11.t;
            var11 = var11.B3vFdX;
            var11 = var12.bind(var16)(var11);
            var2['title'] = var11;
            var11 = var15[var10];
            var11 = var13.bind(var14)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var15[var10];
            var10 = var13.bind(var14)(var10);
            var10 = var10.t;
            var10 = var10.9ZpT2N;
            var10 = var11.bind(var12)(var10);
            var2['body'] = var10;
            var2 = var3.bind(var4)(var2);
            var1 = true;
case 6:
            _fun0001_ip = 8; continue _fun0001;
case 4:
            var3 = _closure1_slot1;
            var15 = _closure1_slot2;
            var2 = 3;
            var2 = var15[var2];
            var14 = undefined;
            var4 = var3.bind(var14)(var2);
            var3 = var4.show;
            var2 = {};
            var11 = _closure1_slot0;
            var10 = 4;
            var12 = var15[var10];
            var12 = var11.bind(var14)(var12);
            var16 = var12.intl;
            var13 = var16.string;
            var12 = var15[var10];
            var12 = var11.bind(var14)(var12);
            var12 = var12.t;
            var12 = var12.wOr6hI;
            var12 = var13.bind(var16)(var12);
            var2['title'] = var12;
            var12 = var15[var10];
            var12 = var11.bind(var14)(var12);
            var13 = var12.intl;
            var12 = var13.formatToPlainString;
            var10 = var15[var10];
            var10 = var11.bind(var14)(var10);
            var10 = var10.t;
            var11 = var10.qqyp/f;
            var10 = {};
            var14 = _closure1_slot4;
            var10['limit'] = var14;
            var10 = var12.bind(var13)(var11, var10);
            var2['body'] = var10;
            var2 = var3.bind(var4)(var2);
            var1 = true;
case 8:
            _fun0001_ip = 9; continue _fun0001;
case 2:
            var3 = _closure1_slot1;
            var10 = _closure1_slot2;
            var2 = 1;
            var2 = var10[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['file'] = var8;
            var8 = _closure1_slot0;
            var7 = 2;
            var7 = var10[var7];
            var8 = var8.bind(var4)(var7);
            var7 = var8.maxFileSize;
            var7 = var7.bind(var8)(var9);
            var2['maxSize'] = var7;
            var2['analyticsLocations'] = var5;
            var5 = null;
            var7 = var5 == var6;
            var5 = undefined;
            if(var7) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var5 = var6.type;
case 10:
            var2['errorReason'] = var5;
            var2 = var3.bind(var4)(var2);
            var1 = true;
case 9:
            return var1;
        }
    };
    var3['handleUploadMessageAttachmentsErrors'] = var2;
    return var1;
})();