// app/modules/premium/premium_group/PremiumGroupUtils.tsx
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
    var7 = var4.getPremiumGroupProductName;
    var _closure1_slot4 = var7;
    var4 = var4.HELP_CENTER_LINK;
    var _closure1_slot5 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/premium_group/PremiumGroupUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg2;
            var1 = arg1;
            var _closure2_slot0 = var1;
            var1 = null;
            if(!(var1 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var3.recipients;
            var3 = var1 == var4;
            var8 = undefined;
            var5 = undefined;
            if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var4.find;
            var2 = function(arg1) {
                var1 = _closure2_slot0;
                var2 = var1.id;
                var1 = arg1;
                var1 = var1 !== var2;
                return var1;
            };
            var5 = var3.bind(var4)(var2);
case 4:
            var4 = _closure1_slot3;
            var2 = var4.getUser;
            var5 = var2.bind(var4)(var5);
            if(!(var1 != var5)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 2;
            var2 = var9[var2];
            var4 = var6.bind(var8)(var2);
            var2 = var4.nameFromUser;
            var7 = var2.bind(var4)(var5);
            var2 = _closure1_slot4;
            var14 = var2.bind(var8)();
            var2 = {};
            var5 = 3;
            var4 = var9[var5];
            var4 = var6.bind(var8)(var4);
            var13 = var4.intl;
            var12 = var13.format;
            var4 = _closure1_slot1;
            var3 = 4;
            var10 = var9[var3];
            var10 = var4.bind(var8)(var10);
            var11 = var10.MkcFjx;
            var10 = {};
            var10['receiverName'] = var7;
            var10['premiumGroupProductName'] = var14;
            var10 = var12.bind(var13)(var11, var10);
            var2['message'] = var10;
            var10 = var9[var5];
            var10 = var6.bind(var8)(var10);
            var13 = var10.intl;
            var12 = var13.formatToPlainString;
            var10 = var9[var3];
            var10 = var4.bind(var8)(var10);
            var11 = var10.5uwv8J;
            var10 = {};
            var10['premiumGroupProductName'] = var14;
            var10 = var12.bind(var13)(var11, var10);
            var2['header'] = var10;
            var5 = var9[var5];
            var5 = var6.bind(var8)(var5);
            var6 = var5.intl;
            var5 = var6.formatToPlainString;
            var3 = var9[var3];
            var3 = var4.bind(var8)(var3);
            var4 = var3.AmE0B/;
            var3 = {};
            var3['receiverName'] = var7;
            var3 = var5.bind(var6)(var4, var3);
            var2['body'] = var3;
            return var2;
case 6:
            return var1;
case 2:
            return var1;
        }
    };
    var3['getSenderPremiumGroupInviteEmbedText'] = var4;
    var2 = function(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var10 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 2;
            var1 = var2[var1];
            var4 = undefined;
            var6 = var10.bind(var4)(var1);
            var5 = var6.nameFromUser;
            var1 = arg1;
            var8 = var5.bind(var6)(var1);
            var1 = _closure1_slot4;
            var7 = var1.bind(var4)();
            var1 = {};
            var5 = 3;
            var6 = var2[var5];
            var6 = var10.bind(var4)(var6);
            var14 = var6.intl;
            var13 = var14.format;
            var11 = _closure1_slot1;
            var9 = 4;
            var6 = var2[var9];
            var6 = var11.bind(var4)(var6);
            var12 = var6.51Kv/4;
            var6 = {};
            var6['senderName'] = var8;
            var6['premiumGroupProductName'] = var7;
            var15 = _closure1_slot5;
            var6['helpCenterLink'] = var15;
            var6 = var13.bind(var14)(var12, var6);
            var1['message'] = var6;
            var6 = var2[var5];
            var6 = var10.bind(var4)(var6);
            var10 = var6.intl;
            var6 = var10.string;
            var2 = var2[var9];
            var2 = var11.bind(var4)(var2);
            var2 = var2.ssge1y;
            var2 = var6.bind(var10)(var2);
            var1['header'] = var2;
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var5 = var2[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.intl;
            var5 = var6.formatToPlainString;
            var3 = _closure1_slot1;
            var2 = var2[var9];
            var3 = var3.bind(var4)(var2);
            var2 = arg2;
            if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var4 = var3.MkcdX8;
            var2 = {};
            var2['senderName'] = var8;
            var2['premiumGroupProductName'] = var7;
            var2 = var5.bind(var6)(var4, var2);
            _fun0002_ip = 10; continue _fun0002;
case 8:
            var4 = var3.tej76V;
            var3 = {};
            var3['senderName'] = var8;
            var3['premiumGroupProductName'] = var7;
            var2 = var5.bind(var6)(var4, var3);
case 10:
            var1['body'] = var2;
            return var1;
        }
    };
    var3['getReceiverPremiumGroupInviteEmbedText'] = var2;
    return var1;
})();