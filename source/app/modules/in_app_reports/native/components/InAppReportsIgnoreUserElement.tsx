// app/modules/in_app_reports/native/components/InAppReportsIgnoreUserElement.tsx
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
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/in_app_reports/native/components/InAppReportsIgnoreUserElement.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function IgnoreUserElement(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var2 = var3.user;
            var _closure2_slot0 = var2;
            var10 = var3.channelId;
            var _closure2_slot1 = var10;
            var11 = var3.reportId;
            var _closure2_slot2 = var11;
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 5;
            var8 = var7[var3];
            var5 = undefined;
            var14 = var4.bind(var5)(var8);
            var13 = var14.useStateFromStoresObject;
            var8 = _closure1_slot5;
            var12 = new Array(1);
            var12[0] = var8;
            var9 = new Array(1);
            var9[0] = var2;
            var8 = function() {
                var1 = {};
                var4 = _closure1_slot5;
                var5 = var4.isIgnored;
                var2 = _closure2_slot0;
                var3 = var2.id;
                var3 = var5.bind(var4)(var3);
                var1['isIgnored'] = var3;
                var3 = var4.isBlocked;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
                var1['isBlocked'] = var2;
                return var1;
            };
            var9 = var13.bind(var14)(var12, var8, var9);
            var8 = var9.isIgnored;
            var9 = var9.isBlocked;
            var3 = var7[var3];
            var13 = var4.bind(var5)(var3);
            var12 = var13.useStateFromStores;
            var3 = _closure1_slot4;
            var7 = new Array(1);
            var7[0] = var3;
            var4 = new Array(1);
            var4[0] = var10;
            var3 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getChannel;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var12.bind(var13)(var7, var3, var4);
            var _closure2_slot3 = var3;
            var7 = _closure1_slot3;
            var12 = var7.useMemo;
            var4 = new Array(2);
            var4[0] = var3;
            var4[1] = var2;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 6;
                    var1 = var2[var1];
                    var2 = undefined;
                    var5 = var3.bind(var2)(var1);
                    var4 = var5.getName;
                    var3 = _closure2_slot3;
                    var7 = null;
                    var6 = var7 == var3;
                    var3 = undefined;
                    if(var6) { _fun0002_ip = 58; continue _fun0002 }
 49:
                    var6 = _closure2_slot3;
                    var3 = var6.guild_id;
 58:
                    var6 = _closure2_slot3;
                    var6 = var7 == var6;
                    var2 = undefined;
                    if(var6) { _fun0002_ip = 80; continue _fun0002 }
 71:
                    var6 = _closure2_slot3;
                    var2 = var6.id;
 80:
                    var1 = _closure2_slot0;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var1;
                }
            };
            var17 = var12.bind(var7)(var3, var4);
            var4 = var7.useCallback;
            var3 = new Array(3);
            var3[0] = var2;
            var3[1] = var11;
            var3[2] = var10;
            var1 = function() {
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 7;
                var3 = var6[var1];
                var1 = undefined;
                var9 = var5.bind(var1)(var3);
                var8 = var9.trackWithMetadata;
                var2 = _closure1_slot6;
                var7 = var2.IAR_IGNORE_USER_BUTTON_CLICKED;
                var4 = {};
                var3 = _closure2_slot0;
                var10 = var3.id;
                var4['other_user_id'] = var10;
                var10 = _closure2_slot2;
                var4['report_id'] = var10;
                var4 = var8.bind(var9)(var7, var4);
                var4 = 8;
                var4 = var6[var4];
                var6 = var5.bind(var1)(var4);
                var5 = var6.ignoreUser;
                var4 = var3.id;
                var3 = _closure2_slot1;
                var2 = 'mobile_iar_ignore_user_element';
                var2 = var5.bind(var6)(var4, var2, var3);
                return var1;
            };
            var7 = var4.bind(var7)(var1, var3);
            var1 = null;
            var2 = var1 == var2;
            if(var2) { _fun0001_ip = 500; continue _fun0001 }
 242:
            var4 = _closure1_slot7;
            var3 = _closure1_slot1;
            var14 = _closure1_slot2;
            var2 = 9;
            var2 = var14[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var13 = _closure1_slot0;
            var10 = 10;
            var11 = var14[var10];
            var11 = var13.bind(var5)(var11);
            var16 = var11.intl;
            var15 = var16.formatToPlainString;
            var11 = var14[var10];
            var11 = var13.bind(var5)(var11);
            var11 = var11.t;
            var12 = var11.U3yyFh;
            var11 = {};
            var11['username'] = var17;
            var11 = var15.bind(var16)(var12, var11);
            var2['title'] = var11;
            var11 = var14[var10];
            var11 = var13.bind(var5)(var11);
            var16 = var11.intl;
            var15 = var16.formatToPlainString;
            var11 = var14[var10];
            var11 = var13.bind(var5)(var11);
            var11 = var11.t;
            var12 = var11.264qVF;
            var11 = {};
            var11['username'] = var17;
            var11 = var15.bind(var16)(var12, var11);
            var2['disabledTitle'] = var11;
            var11 = var14[var10];
            var11 = var13.bind(var5)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var14[var10];
            var10 = var13.bind(var5)(var10);
            var10 = var10.t;
            var10 = var10.naWE6e;
            var10 = var11.bind(var12)(var10);
            var2['description'] = var10;
            if(var8) { _fun0001_ip = 444; continue _fun0001 }
 441:
            var8 = var9;
 444:
            var2['disabled'] = var8;
            var2['onPress'] = var7;
            var8 = _closure1_slot7;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 11;
            var6 = var9[var6];
            var6 = var7.bind(var5)(var6);
            var7 = var6.EyeSlashIcon;
            var6 = {};
            var6 = var8.bind(var5)(var7, var6);
            var2['icon'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 500:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();