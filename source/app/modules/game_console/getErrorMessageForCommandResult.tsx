// app/modules/game_console/getErrorMessageForCommandResult.tsx
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
    var4 = var4.GameConsoleCommandResultErrorCodes;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_console/getErrorMessageForCommandResult.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getErrorMessageForCommandResult(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var5 = arg2;
            var6 = arg3;
            var1 = 'failed';
            if(!(var1 !== var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = 'n/a';
            var1 = null;
            if(!(var4 === var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = var6.code;
            var15 = var2.platform;
            var10 = var2.name;
            var4 = _closure1_slot3;
            var4 = var4.CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED;
            var3 = null;
            if(!(var7 === var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = {};
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var5 = 1;
            var8 = var12[var5];
            var7 = undefined;
            var8 = var11.bind(var7)(var8);
            var14 = var8.intl;
            var13 = var14.formatToPlainString;
            var8 = var12[var5];
            var8 = var11.bind(var7)(var8);
            var8 = var8.t;
            var9 = var8.KchfhI;
            var8 = {};
            var8['deviceType'] = var15;
            var8 = var13.bind(var14)(var9, var8);
            var4['title'] = var8;
            var8 = var12[var5];
            var8 = var11.bind(var7)(var8);
            var9 = var8.intl;
            var8 = var9.formatToPlainString;
            var5 = var12[var5];
            var5 = var11.bind(var7)(var5);
            var5 = var5.t;
            var7 = var5.21ndz8;
            var5 = {};
            var5['deviceName'] = var10;
            var5 = var8.bind(var9)(var7, var5);
            var4['body'] = var5;
            var3 = var4;
case 6:
            var1 = var3;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var3 = var6.code;
            var9 = var2.platform;
            var11 = var2.name;
            var2 = _closure1_slot3;
            var2 = var2.CONSOLE_DEVICE_COMMUNICATION_RESTRICTED;
            if(!(var2 !== var3)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = _closure1_slot3;
            var2 = var2.CONSOLE_DEVICE_INVALID_POWER_MODE;
            if(!(var2 !== var3)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var2 = _closure1_slot3;
            var2 = var2.CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS;
            if(!(var2 !== var3)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var2 = _closure1_slot3;
            var2 = var2.CONSOLE_DEVICE_ACCOUNT_LINK_ERROR;
            if(!(var2 !== var3)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var2 = {};
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 1;
            var7 = var12[var3];
            var5 = undefined;
            var7 = var10.bind(var5)(var7);
            var13 = var7.intl;
            var8 = var13.string;
            var7 = var12[var3];
            var7 = var10.bind(var5)(var7);
            var7 = var7.t;
            var7 = var7.QL1y9/;
            var7 = var8.bind(var13)(var7);
            var2['title'] = var7;
            var7 = var12[var3];
            var7 = var10.bind(var5)(var7);
            var8 = var7.intl;
            var7 = var8.formatToPlainString;
            var3 = var12[var3];
            var3 = var10.bind(var5)(var3);
            var3 = var3.t;
            var5 = var3.6ZyNHx;
            var3 = {};
            var3['deviceName'] = var11;
            var3 = var7.bind(var8)(var5, var3);
            var2['body'] = var3;
            _fun0001_ip = 16; continue _fun0001;
case 14:
            var3 = {};
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var5 = 1;
            var8 = var13[var5];
            var7 = undefined;
            var8 = var12.bind(var7)(var8);
            var14 = var8.intl;
            var10 = var14.string;
            var8 = var13[var5];
            var8 = var12.bind(var7)(var8);
            var8 = var8.t;
            var8 = var8.QL1y9/;
            var8 = var10.bind(var14)(var8);
            var3['title'] = var8;
            var8 = var13[var5];
            var8 = var12.bind(var7)(var8);
            var10 = var8.intl;
            var8 = var10.formatToPlainString;
            var5 = var13[var5];
            var5 = var12.bind(var7)(var5);
            var5 = var5.t;
            var7 = var5.D18eZm;
            var5 = {};
            var5['deviceType'] = var9;
            var5 = var8.bind(var10)(var7, var5);
            var3['body'] = var5;
            var5 = true;
            var3['isAccountLinkError'] = var5;
            var2 = var3;
            _fun0001_ip = 16; continue _fun0001;
case 12:
            var3 = {};
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var5 = 1;
            var8 = var13[var5];
            var7 = undefined;
            var8 = var12.bind(var7)(var8);
            var15 = var8.intl;
            var14 = var15.formatToPlainString;
            var8 = var13[var5];
            var8 = var12.bind(var7)(var8);
            var8 = var8.t;
            var10 = var8.M6Vzam;
            var8 = {};
            var8['deviceType'] = var9;
            var8 = var14.bind(var15)(var10, var8);
            var3['title'] = var8;
            var8 = var13[var5];
            var8 = var12.bind(var7)(var8);
            var10 = var8.intl;
            var8 = var10.formatToPlainString;
            var5 = var13[var5];
            var5 = var12.bind(var7)(var5);
            var5 = var5.t;
            var7 = var5.InKtnJ;
            var5 = {};
            var5['deviceName'] = var11;
            var5 = var8.bind(var10)(var7, var5);
            var3['body'] = var5;
            var2 = var3;
            _fun0001_ip = 16; continue _fun0001;
case 10:
            var3 = {};
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var5 = 1;
            var8 = var13[var5];
            var7 = undefined;
            var8 = var12.bind(var7)(var8);
            var15 = var8.intl;
            var14 = var15.formatToPlainString;
            var8 = var13[var5];
            var8 = var12.bind(var7)(var8);
            var8 = var8.t;
            var10 = var8.akd6S0;
            var8 = {};
            var8['deviceType'] = var9;
            var8 = var14.bind(var15)(var10, var8);
            var3['title'] = var8;
            var8 = var13[var5];
            var8 = var12.bind(var7)(var8);
            var10 = var8.intl;
            var8 = var10.formatToPlainString;
            var5 = var13[var5];
            var5 = var12.bind(var7)(var5);
            var5 = var5.t;
            var7 = var5.RyOvpK;
            var5 = {};
            var5['deviceName'] = var11;
            var5 = var8.bind(var10)(var7, var5);
            var3['body'] = var5;
            var2 = var3;
            _fun0001_ip = 16; continue _fun0001;
case 8:
            var3 = {};
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var4 = 1;
            var7 = var11[var4];
            var5 = undefined;
            var7 = var10.bind(var5)(var7);
            var12 = var7.intl;
            var8 = var12.string;
            var7 = var11[var4];
            var7 = var10.bind(var5)(var7);
            var7 = var7.t;
            var7 = var7.GSZ+HB;
            var7 = var8.bind(var12)(var7);
            var3['title'] = var7;
            var7 = var11[var4];
            var7 = var10.bind(var5)(var7);
            var8 = var7.intl;
            var7 = var8.formatToPlainString;
            var4 = var11[var4];
            var4 = var10.bind(var5)(var4);
            var4 = var4.t;
            var5 = var4.cYX/3N;
            var4 = {};
            var4['deviceType'] = var9;
            var4 = var7.bind(var8)(var5, var4);
            var3['body'] = var4;
            var2 = var3;
case 16:
            var1 = var2;
case 4:
            var2 = null;
            if(!(var2 != var1)) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var3 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 1;
            var4 = var10[var2];
            var9 = undefined;
            var4 = var3.bind(var9)(var4);
            var5 = var4.intl;
            var4 = var5.format;
            var2 = var10[var2];
            var2 = var3.bind(var9)(var2);
            var2 = var2.t;
            var3 = var2.1Bi9CQ;
            var2 = {};
            var8 = _closure1_slot1;
            var7 = 2;
            var7 = var10[var7];
            var8 = var8.bind(var9)(var7);
            var7 = var8.getSubmitRequestURL;
            var7 = var7.bind(var8)();
            var2['supportURL'] = var7;
            var6 = var6.code;
            var2['errorCode'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            var1['errorCodeMessage'] = var2;
case 17:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();