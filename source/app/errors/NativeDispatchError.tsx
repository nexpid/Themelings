// app/errors/NativeDispatchError.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.DispatchErrorCodes;
    var _closure1_slot4 = var4;
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = function NativeDispatchError(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = arg1;
                var3 = this;
                var5 = _closure1_slot2;
                var4 = _closure2_slot0;
                var1 = undefined;
                var4 = var5.bind(var1)(var3, var4);
                var3['raw'] = var2;
                var4 = var2.code;
                var5 = null;
                if(!(var5 != var4)) { _fun0001_ip = 56; continue _fun0001 }
 45:
                var4 = var2.code;
                var3['code'] = var4;
 56:
                var4 = var2.uuid;
                if(!(var5 != var4)) { _fun0001_ip = 78; continue _fun0001 }
 66:
                var4 = var2.uuid;
                var3['uuid'] = var4;
 78:
                var4 = var2.application_id;
                if(!(var5 != var4)) { _fun0001_ip = 100; continue _fun0001 }
 88:
                var4 = var2.application_id;
                var3['applicationId'] = var4;
 100:
                var4 = var2.branch_id;
                if(!(var5 != var4)) { _fun0001_ip = 122; continue _fun0001 }
 110:
                var4 = var2.branch_id;
                var3['branchId'] = var4;
 122:
                var4 = var2.context;
                if(!(var5 == var4)) { _fun0001_ip = 141; continue _fun0001 }
 131:
                var4 = {};
                var3['context'] = var4;
                _fun0001_ip = 152; continue _fun0001;
 141:
                var2 = var2.context;
                var3['context'] = var2;
 152:
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var5 = 'displayMessage';
        var1['key'] = var5;
        var2 = function get() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var2 = this;
                var3 = var2.code;
                var1 = null;
                if(!(var1 != var3)) { _fun0002_ip = 1217; continue _fun0002 }
 17:
                var1 = var2.context;
                var7 = var1.path;
                var4 = var2.code;
                var3 = _closure1_slot4;
                var3 = var3.DISK_LOW;
                if(!(var3 !== var4)) { _fun0002_ip = 1065; continue _fun0002 }
 53:
                var3 = _closure1_slot4;
                var3 = var3.POST_INSTALL_FAILED;
                if(!(var3 !== var4)) { _fun0002_ip = 987; continue _fun0002 }
 70:
                var3 = _closure1_slot4;
                var3 = var3.FILE_NAME_TOO_LONG;
                if(!(var3 !== var4)) { _fun0002_ip = 926; continue _fun0002 }
 87:
                var3 = _closure1_slot4;
                var3 = var3.POST_INSTALL_CANCELLED;
                if(!(var3 !== var4)) { _fun0002_ip = 865; continue _fun0002 }
 104:
                var3 = _closure1_slot4;
                var3 = var3.IO_PERMISSION_DENIED;
                if(!(var3 !== var4)) { _fun0002_ip = 804; continue _fun0002 }
 121:
                var3 = _closure1_slot4;
                var3 = var3.NO_MANIFESTS;
                if(!(var3 !== var4)) { _fun0002_ip = 743; continue _fun0002 }
 138:
                var3 = _closure1_slot4;
                var3 = var3.NOT_ENTITLED;
                if(!(var3 !== var4)) { _fun0002_ip = 682; continue _fun0002 }
 155:
                var3 = _closure1_slot4;
                var3 = var3.NOT_DIRECTORY;
                if(!(var3 !== var4)) { _fun0002_ip = 613; continue _fun0002 }
 172:
                var3 = _closure1_slot4;
                var3 = var3.DISK_PERMISSION_DENIED;
                if(!(var3 !== var4)) { _fun0002_ip = 613; continue _fun0002 }
 189:
                var3 = _closure1_slot4;
                var3 = var3.INVALID_DRIVE;
                if(!(var3 !== var4)) { _fun0002_ip = 544; continue _fun0002 }
 206:
                var3 = _closure1_slot4;
                var3 = var3.APPLICATION_LOCK_FAILED;
                if(!(var3 !== var4)) { _fun0002_ip = 483; continue _fun0002 }
 223:
                var3 = _closure1_slot4;
                var3 = var3.DISK_FULL;
                if(!(var3 !== var4)) { _fun0002_ip = 422; continue _fun0002 }
 240:
                var3 = _closure1_slot4;
                var3 = var3.API_ERROR;
                if(!(var3 !== var4)) { _fun0002_ip = 361; continue _fun0002 }
 254:
                var3 = _closure1_slot4;
                var3 = var3.MAX_REQUEST_RETRIES_EXCEEDED;
                if(!(var3 !== var4)) { _fun0002_ip = 361; continue _fun0002 }
 268:
                var8 = _closure1_slot0;
                var9 = _closure1_slot1;
                var3 = 3;
                var5 = var9[var3];
                var4 = undefined;
                var5 = var8.bind(var4)(var5);
                var6 = var5.intl;
                var5 = var6.formatToPlainString;
                var3 = var9[var3];
                var3 = var8.bind(var4)(var3);
                var3 = var3.t;
                var4 = var3.r477WF;
                var3 = {};
                var10 = var2.code;
                var8 = global;
                var8 = var8.HermesInternal;
                var9 = var8.concat;
                var8 = '';
                var8 = var9.bind(var8)(var10);
                var3['code'] = var8;
                var3 = var5.bind(var6)(var4, var3);
                return var3;
 361:
                var8 = _closure1_slot0;
                var9 = _closure1_slot1;
                var3 = 3;
                var4 = var9[var3];
                var6 = undefined;
                var4 = var8.bind(var6)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var3 = var9[var3];
                var3 = var8.bind(var6)(var3);
                var3 = var3.t;
                var3 = var3.OXD41N;
                var3 = var4.bind(var5)(var3);
                return var3;
 422:
                var8 = _closure1_slot0;
                var9 = _closure1_slot1;
                var3 = 3;
                var4 = var9[var3];
                var6 = undefined;
                var4 = var8.bind(var6)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var3 = var9[var3];
                var3 = var8.bind(var6)(var3);
                var3 = var3.t;
                var3 = var3.mojtDA;
                var3 = var4.bind(var5)(var3);
                return var3;
 483:
                var8 = _closure1_slot0;
                var9 = _closure1_slot1;
                var3 = 3;
                var4 = var9[var3];
                var6 = undefined;
                var4 = var8.bind(var6)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var3 = var9[var3];
                var3 = var8.bind(var6)(var3);
                var3 = var3.t;
                var3 = var3.RDYCUV;
                var3 = var4.bind(var5)(var3);
                return var3;
 544:
                var8 = _closure1_slot0;
                var9 = _closure1_slot1;
                var3 = 3;
                var5 = var9[var3];
                var4 = undefined;
                var5 = var8.bind(var4)(var5);
                var6 = var5.intl;
                var5 = var6.formatToPlainString;
                var3 = var9[var3];
                var3 = var8.bind(var4)(var3);
                var3 = var3.t;
                var4 = var3.08L2TE;
                var3 = {};
                var3['path'] = var7;
                var3 = var5.bind(var6)(var4, var3);
                return var3;
 613:
                var8 = _closure1_slot0;
                var9 = _closure1_slot1;
                var3 = 3;
                var5 = var9[var3];
                var4 = undefined;
                var5 = var8.bind(var4)(var5);
                var6 = var5.intl;
                var5 = var6.formatToPlainString;
                var3 = var9[var3];
                var3 = var8.bind(var4)(var3);
                var3 = var3.t;
                var4 = var3.EjWbOz;
                var3 = {};
                var3['path'] = var7;
                var3 = var5.bind(var6)(var4, var3);
                return var3;
 682:
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 3;
                var4 = var8[var3];
                var6 = undefined;
                var4 = var7.bind(var6)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var3 = var8[var3];
                var3 = var7.bind(var6)(var3);
                var3 = var3.t;
                var3 = var3.TLCR4+;
                var3 = var4.bind(var5)(var3);
                return var3;
 743:
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 3;
                var4 = var8[var3];
                var6 = undefined;
                var4 = var7.bind(var6)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var3 = var8[var3];
                var3 = var7.bind(var6)(var3);
                var3 = var3.t;
                var3 = var3.gLM39/;
                var3 = var4.bind(var5)(var3);
                return var3;
 804:
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 3;
                var4 = var8[var3];
                var6 = undefined;
                var4 = var7.bind(var6)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var3 = var8[var3];
                var3 = var7.bind(var6)(var3);
                var3 = var3.t;
                var3 = var3.PJx5+f;
                var3 = var4.bind(var5)(var3);
                return var3;
 865:
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 3;
                var4 = var8[var3];
                var6 = undefined;
                var4 = var7.bind(var6)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var3 = var8[var3];
                var3 = var7.bind(var6)(var3);
                var3 = var3.t;
                var3 = var3.9CNxFB;
                var3 = var4.bind(var5)(var3);
                return var3;
 926:
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 3;
                var4 = var8[var3];
                var6 = undefined;
                var4 = var7.bind(var6)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var3 = var8[var3];
                var3 = var7.bind(var6)(var3);
                var3 = var3.t;
                var3 = var3.FWht5+;
                var3 = var4.bind(var5)(var3);
                return var3;
 987:
                var3 = var2.context;
                var7 = var3.name;
                var8 = _closure1_slot0;
                var9 = _closure1_slot1;
                var3 = 3;
                var5 = var9[var3];
                var4 = undefined;
                var5 = var8.bind(var4)(var5);
                var6 = var5.intl;
                var5 = var6.formatToPlainString;
                var3 = var9[var3];
                var3 = var8.bind(var4)(var3);
                var3 = var3.t;
                var4 = var3.hP0B3N;
                var3 = {};
                var3['name'] = var7;
                var3 = var5.bind(var6)(var4, var3);
                return var3;
 1065:
                var2 = var2.context;
                var10 = var2.available;
                var6 = var2.required;
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var1 = 4;
                var3 = var8[var1];
                var2 = undefined;
                var5 = var7.bind(var2)(var3);
                var4 = var5.formatSize;
                var3 = {};
                var9 = true;
                var3['useKibibytes'] = var9;
                var5 = var4.bind(var5)(var10, var3);
                var1 = var8[var1];
                var4 = var7.bind(var2)(var1);
                var3 = var4.formatSize;
                var1 = {};
                var1['useKibibytes'] = var9;
                var6 = var3.bind(var4)(var6, var1);
                var1 = 3;
                var3 = var8[var1];
                var3 = var7.bind(var2)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var1 = var8[var1];
                var1 = var7.bind(var2)(var1);
                var1 = var1.t;
                var2 = var1.2DR5dn;
                var1 = {};
                var1['required'] = var6;
                var1['available'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
 1217:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 3;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.5NMPSU;
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var1['get'] = var2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'errors/NativeDispatchError.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();